# 阿里云Next.js外贸网站部署文档 (Windows Server 2025)

## 🖥️ 部署环境说明

### 本地开发环境 (您的电脑)
- **操作系统**: Windows 10/11
- **项目路径**: `D:\wenj\独立站\tj-jtpipe\DM`
- **开发工具**: Visual Studio Code, Git, Node.js
- **测试地址**: http://localhost:3000

### 阿里云服务器环境
- **操作系统**: Windows Server 2025 数据中心版 64位中文版
- **服务器IP**: 8.221.117.121
- **实例规格**: ecs.e-c1m2.large (2核4GB)
- **存储**: 100 GiB ESSD AutoPL 云盘
- **带宽**: 100 Mbps
- **域名**: cn-pipes.com

## 📋 部署前准备

### 1. 本地环境准备 (您的电脑)
```bash
# 检查本地项目状态
cd D:\wenj\独立站\tj-jtpipe\DM
git status
npm run build
```

### 2. 服务器环境检查 (阿里云服务器)
```powershell
# 远程连接到阿里云服务器后执行
# 检查系统信息
systeminfo

# 检查网络连接
ping baidu.com

# 检查端口状态
netstat -an | findstr :80
netstat -an | findstr :3000
```

## 🚀 完整部署流程

### 步骤1: 本地代码准备 (您的电脑)
```bash
# 1. 确保所有更改已提交
cd D:\wenj\独立站\tj-jtpipe\DM
git add .
git commit -m "准备部署到阿里云服务器"

# 2. 推送到GitHub
git push origin main

# 3. 构建生产版本
npm run build

# 4. 验证构建结果
npm run start
```

### 步骤2: 服务器环境配置 (阿里云服务器)
```powershell
# 1. 以管理员身份运行PowerShell

# 2. 安装Node.js (如果未安装)
# 下载Node.js 18.x LTS版本
$nodeUrl = "https://nodejs.org/dist/v18.18.0/node-v18.18.0-x64.msi"
$nodeInstaller = "$env:TEMP\nodejs.msi"
Invoke-WebRequest -Uri $nodeUrl -OutFile $nodeInstaller
Start-Process msiexec.exe -Wait -ArgumentList '/i', $nodeInstaller, '/quiet', '/norestart'

# 3. 验证Node.js安装
node --version
npm --version

# 4. 安装Git (如果未安装)
winget install Git.Git

# 5. 安装PM2进程管理器
npm install -g pm2
```

### 步骤3: 项目部署到服务器 (阿里云服务器)
```powershell
# 1. 创建网站目录
mkdir C:\Websites\cn-pipes
cd C:\Websites\cn-pipes

# 2. 从GitHub克隆项目
git clone https://github.com/globalcarselect/D-wenj-tj-jtpipe- .

# 3. 安装项目依赖
npm install

# 4. 构建生产版本
npm run build

# 5. 创建PM2配置文件
echo 'module.exports = {
  apps: [{
    name: "cn-pipes-website",
    script: "./node_modules/next/dist/bin/next",
    args: "start -p 3000",
    instances: "max",
    exec_mode: "cluster",
    env: {
      NODE_ENV: "production",
      PORT: 3000
    }
  }]
};' > ecosystem.config.js

# 6. 启动应用
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

### 步骤4: IIS配置 (阿里云服务器)
```powershell
# 1. 安装IIS (如果未安装)
Enable-WindowsOptionalFeature -Online -FeatureName IIS-WebServerRole
Enable-WindowsOptionalFeature -Online -FeatureName IIS-WebServer
Enable-WindowsOptionalFeature -Online -FeatureName IIS-CommonHttpFeatures
Enable-WindowsOptionalFeature -Online -FeatureName IIS-HttpErrors
Enable-WindowsOptionalFeature -Online -FeatureName IIS-HttpRedirect
Enable-WindowsOptionalFeature -Online -FeatureName IIS-ApplicationDevelopment

# 2. 安装URL重写模块
# 下载并安装 URL Rewrite 模块
$rewriteUrl = "https://download.microsoft.com/download/1/2/8/128E2E22-C1B9-44A4-BE2A-5859ED1D4592/rewrite_amd64_en-US.msi"
$rewriteInstaller = "$env:TEMP\rewrite.msi"
Invoke-WebRequest -Uri $rewriteUrl -OutFile $rewriteInstaller
Start-Process msiexec.exe -Wait -ArgumentList '/i', $rewriteInstaller, '/quiet', '/norestart'

# 3. 创建IIS网站
Import-Module WebAdministration

# 停止默认网站
Stop-WebSite "Default Web Site"

# 创建新网站
New-Website -Name "cn-pipes" -Port 80 -PhysicalPath "C:\Websites\cn-pipes" -ApplicationPool ".NET v4.5"

# 4. 配置web.config
$webConfigContent = @"
<?xml version=\"1.0\" encoding=\"UTF-8\"?>
<configuration>
  <system.webServer>
    <rewrite>
      <rules>
        <rule name=\"ReverseProxyInboundRule1\" stopProcessing=\"true\">
          <match url=\"(.*)\" />
          <action type=\"Rewrite\" url=\"http://localhost:3000/{R:1}\" />
        </rule>
      </rules>
    </rewrite>
    <defaultDocument>
      <files>
        <add value=\"index.html\" />
      </files>
    </defaultDocument>
  </system.webServer>
</configuration>
"@

Set-Content -Path "C:\Websites\cn-pipes\web.config" -Value $webConfigContent

# 5. 启动网站
Start-Website "cn-pipes"
```

### 步骤5: 防火墙配置 (阿里云服务器)
```powershell
# 1. 配置Windows防火墙
New-NetFirewallRule -DisplayName "HTTP Port 80" -Direction Inbound -Protocol TCP -LocalPort 80 -Action Allow
New-NetFirewallRule -DisplayName "Node.js Port 3000" -Direction Inbound -Protocol TCP -LocalPort 3000 -Action Allow

# 2. 配置阿里云安全组 (需要在阿里云控制台操作)
# - 登录阿里云控制台 -> ECS实例 -> 安全组
# - 添加入站规则：允许HTTP(80)、HTTPS(443)端口
```

### 步骤6: 域名配置 (阿里云控制台)
```
# 在阿里云域名控制台配置DNS解析
# 记录类型: A
# 主机记录: @ 和 www
# 记录值: 8.221.117.121
# TTL: 10分钟
```

## 🔧 自动化部署脚本

### 服务器端一键部署脚本 (阿里云服务器)
```powershell
# 保存为 C:\Scripts\deploy.ps1
param(
    [string]$ProjectPath = "C:\Websites\cn-pipes"
)

Write-Host "开始部署 cn-pipes 网站..." -ForegroundColor Green

# 1. 停止现有服务
pm2 stop cn-pipes-website

# 2. 更新代码
cd $ProjectPath
git pull origin main

# 3. 安装依赖
npm install

# 4. 构建项目
npm run build

# 5. 启动服务
pm2 start ecosystem.config.js

# 6. 检查服务状态
pm2 status

Write-Host "部署完成！" -ForegroundColor Green
Write-Host "网站地址: http://cn-pipes.com" -ForegroundColor Yellow
```

### 本地同步脚本 (您的电脑)
```bash
# 保存为 deploy-local.bat
@echo off
echo 开始准备部署到阿里云服务器...

cd /d D:\wenj\独立站\tj-jtpipe\DM

echo 1. 检查Git状态
git status

echo 2. 提交更改
git add .
git commit -m "自动部署更新"

echo 3. 推送到GitHub
git push origin main

echo 4. 构建项目
npm run build

echo 部署准备完成！请在服务器上运行部署脚本。
pause
```

## 🛠️ 故障排除

### 常见问题及解决方案

#### 问题1: 网站无法访问
**环境**: 阿里云服务器
```powershell
# 检查服务状态
pm2 status

# 检查端口监听
netstat -an | findstr :3000
netstat -an | findstr :80

# 检查IIS状态
Get-Website -Name "cn-pipes"

# 检查防火墙规则
Get-NetFirewallRule -DisplayName "HTTP*" | Format-Table DisplayName, Enabled, Direction, Action
```

#### 问题2: Node.js应用启动失败
**环境**: 阿里云服务器
```powershell
# 查看PM2日志
pm2 logs cn-pipes-website

# 手动启动测试
cd C:\Websites\cn-pipes
npm run start

# 检查端口占用
netstat -ano | findstr :3000
```

#### 问题3: Git同步失败
**环境**: 您的电脑
```bash
# 检查Git远程仓库
git remote -v

# 强制推送（谨慎使用）
git push -f origin main

# 重置本地更改
git reset --hard HEAD
git pull origin main
```

## 📊 监控和维护

### 服务器监控 (阿里云服务器)
```powershell
# 创建监控脚本 C:\Scripts\monitor.ps1
while ($true) {
    Clear-Host
    Write-Host "=== 网站监控面板 ===" -ForegroundColor Cyan
    Write-Host "时间: $(Get-Date)" -ForegroundColor Yellow
    
    # PM2状态
    Write-Host "`nPM2应用状态:" -ForegroundColor Green
    pm2 list
    
    # 系统资源
    Write-Host "`n系统资源使用:" -ForegroundColor Green
    Get-Counter "\Processor(_Total)\% Processor Time" -SampleInterval 1 -MaxSamples 1
    Get-Counter "\Memory\Available MBytes" -SampleInterval 1 -MaxSamples 1
    
    # 网络连接
    Write-Host "`n网络连接状态:" -ForegroundColor Green
    netstat -an | findstr :3000 | Measure-Object | Select-Object Count
    
    Start-Sleep -Seconds 30
}
```

## 📞 技术支持

### 紧急联系方式
- **服务器问题**: 阿里云工单系统
- **代码问题**: GitHub Issues
- **部署问题**: 查看本文档故障排除部分

### 日志文件位置
- **PM2日志**: `C:\Users\Administrator\.pm2\logs\`
- **IIS日志**: `C:\inetpub\logs\LogFiles\`
- **应用日志**: `C:\Websites\cn-pipes\.next\`

---

## ✅ 部署完成检查清单

- [ ] 本地代码已提交并推送到GitHub
- [ ] 服务器Node.js环境配置完成
- [ ] 项目成功克隆到服务器
- [ ] 依赖安装和构建成功
- [ ] PM2进程管理配置完成
- [ ] IIS反向代理配置正确
- [ ] 防火墙端口已开放
- [ ] 域名解析生效
- [ ] 网站可通过域名访问
- [ ] 所有功能测试通过

**部署完成时间**: $(Get-Date)
**部署负责人**: 系统管理员
**下次维护时间**: 每月第一个周一