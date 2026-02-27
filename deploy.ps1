# Next.js网站自动化部署脚本 (Windows Server 2025)
# 适用于阿里云ECS Windows Server 2025部署
# 更新版本：2025-02-27 - 优化性能和错误处理

param(
    [string]$WebsitePath = "C:\Websites\cn-pipes",
    [string]$GitRepo = "https://github.com/globalcarselect/D-wenj-tj-jtpipe-.git",
    [string]$Branch = "main",
    [switch]$SetupEnvironment = $false,
    [switch]$SkipBuild = $false,
    [switch]$ForceDeploy = $false
)

# 颜色定义
$ErrorColor = "Red"
$SuccessColor = "Green"
$WarningColor = "Yellow"
$InfoColor = "Cyan"

# 输出函数
function Write-Status {
    param([string]$Message, [string]$Color = "White")
    Write-Host "[$(Get-Date -Format 'HH:mm:ss')] $Message" -ForegroundColor $Color
}

function Write-Success {
    param([string]$Message)
    Write-Status -Message "✓ $Message" -Color $SuccessColor
}

function Write-Error {
    param([string]$Message)
    Write-Status -Message "✗ $Message" -Color $ErrorColor
}

function Write-Warning {
    param([string]$Message)
    Write-Status -Message "⚠ $Message" -Color $WarningColor
}

function Write-Info {
    param([string]$Message)
    Write-Status -Message "ℹ $Message" -Color $InfoColor
}

# 检查管理员权限
function Test-Administrator {
    $identity = [System.Security.Principal.WindowsIdentity]::GetCurrent()
    $principal = New-Object System.Security.Principal.WindowsPrincipal($identity)
    return $principal.IsInRole([System.Security.Principal.WindowsBuiltInRole]::Administrator)
}

# 主部署函数
function Start-Deployment {
    Write-Host "===============================================" -ForegroundColor Magenta
    Write-Host "    Next.js外贸网站部署脚本 (Windows Server)" -ForegroundColor Magenta
    Write-Host "===============================================" -ForegroundColor Magenta
    Write-Host "部署开始时间: $(Get-Date)" -ForegroundColor Cyan
    Write-Host ""

    # 显示部署信息
    Write-Info "目标路径: $WebsitePath"
    Write-Info "Git仓库: $GitRepo"
    Write-Info "分支: $Branch"
    Write-Info "跳过构建: $SkipBuild"
    Write-Info "强制部署: $ForceDeploy"

    # 检查管理员权限
    if (-not (Test-Administrator)) {
        Write-Error "请以管理员身份运行此脚本"
        Read-Host "按回车键退出"
        exit 1
    }
    Write-Success "管理员权限检查通过"

    # 检查必要工具
    Test-RequiredTools

    # 如果设置了环境安装标志，安装必要工具
    if ($SetupEnvironment) {
        Install-RequiredTools
    }

    # 准备项目目录
    Prepare-ProjectDirectory

    # 部署项目
    Deploy-Project

    # 显示部署结果
    Show-DeploymentResult
}

# 检查必要工具
function Test-RequiredTools {
    Write-Info "检查必要工具..."
    
    $missingTools = @()
    
    # 检查Node.js
    try {
        $nodeVersion = node --version
        Write-Success "Node.js 已安装 ($nodeVersion)"
    } catch {
        Write-Warning "Node.js 未安装"
        $missingTools += "Node.js"
    }
    
    # 检查npm
    try {
        $npmVersion = npm --version
        Write-Success "npm 已安装 ($npmVersion)"
    } catch {
        Write-Warning "npm 未安装"
        $missingTools += "npm"
    }
    
    # 检查Git
    try {
        $gitVersion = git --version
        Write-Success "Git 已安装"
    } catch {
        Write-Warning "Git 未安装"
        $missingTools += "Git"
    }
    
    # 检查PM2
    try {
        $pm2Version = pm2 --version 2>$null
        if ($pm2Version) {
            Write-Success "PM2 已安装"
        } else {
            Write-Warning "PM2 未安装"
            $missingTools += "PM2"
        }
    } catch {
        Write-Warning "PM2 未安装"
        $missingTools += "PM2"
    }
    
    if ($missingTools.Count -gt 0) {
        Write-Warning "缺少以下工具: $($missingTools -join ', ')"
        Write-Info "请运行: .\deploy.ps1 -SetupEnvironment"
        if (-not $SetupEnvironment) {
            $choice = Read-Host "是否继续？(缺少工具可能导致部署失败) [y/N]"
            if ($choice -ne 'y' -and $choice -ne 'Y') {
                exit 1
            }
        }
    }
}

# 安装必要工具
function Install-RequiredTools {
    Write-Info "开始安装必要工具..."
    
    # 安装Chocolatey（如果未安装）
    if (-not (Test-Path "$env:ProgramData\chocolatey\choco.exe")) {
        Write-Info "安装Chocolatey包管理器..."
        Set-ExecutionPolicy Bypass -Scope Process -Force
        [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072
        iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
    }
    
    # 安装Node.js
    if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
        Write-Info "安装Node.js LTS..."
        choco install nodejs-lts -y
    }
    
    # 安装Git
    if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
        Write-Info "安装Git..."
        choco install git -y
    }
    
    # 安装PM2
    if (-not (Get-Command pm2 -ErrorAction SilentlyContinue)) {
        Write-Info "安装PM2..."
        npm install -g pm2
        npm install -g pm2-windows-startup
    }
    
    Write-Success "工具安装完成"
}

# 准备项目目录
function Prepare-ProjectDirectory {
    Write-Info "准备项目目录..."
    
    # 创建网站目录
    if (-not (Test-Path $WebsitePath)) {
        New-Item -ItemType Directory -Path $WebsitePath -Force | Out-Null
        Write-Success "创建目录: $WebsitePath"
    } else {
        Write-Success "目录已存在: $WebsitePath"
    }
    
    # 检查是否已经是Git仓库
    $gitDir = Join-Path $WebsitePath ".git"
    if (Test-Path $gitDir) {
        Write-Info "检测到现有Git仓库"
    } else {
        Write-Info "克隆Git仓库..."
        Set-Location (Split-Path $WebsitePath -Parent)
        git clone $GitRepo (Split-Path $WebsitePath -Leaf)
        if ($LASTEXITCODE -ne 0) {
            Write-Error "克隆仓库失败"
            exit 1
        }
        Write-Success "仓库克隆完成"
    }
}

# 部署项目
function Deploy-Project {
    Write-Info "开始部署项目..."
    
    Set-Location $WebsitePath
    
    # 停止现有PM2进程
    Write-Info "停止现有服务..."
    pm2 stop jtpipeline-website 2>$null
    pm2 delete jtpipeline-website 2>$null
    
    # 拉取最新代码
    Write-Info "拉取最新代码..."
    git pull origin $Branch
    if ($LASTEXITCODE -ne 0) {
        Write-Warning "代码拉取失败，尝试强制拉取"
        git fetch origin $Branch
        git reset --hard origin/$Branch
    }
    
    # 安装依赖
    Write-Info "安装依赖..."
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Error "依赖安装失败"
        exit 1
    }
    
    # 检查环境变量文件
    $envFile = Join-Path $WebsitePath ".env.production"
    if (-not (Test-Path $envFile)) {
        Write-Warning "生产环境变量文件不存在"
        if (Test-Path ".env.example") {
            Copy-Item ".env.example" ".env.production" -ErrorAction SilentlyContinue
            Write-Info "已创建 .env.production 文件，请根据实际情况编辑"
        } else {
            Write-Info "创建默认环境变量文件"
            @"
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://www.cn-pipes.com
NEXT_PUBLIC_API_BASE_URL=https://api.cn-pipes.com
NEXT_PUBLIC_DEFAULT_LOCALE=zh-CN
NEXT_PUBLIC_SUPPORTED_LOCALES=zh-CN,en-US,ja-JP,ko-KR,fr-FR,de-DE,es-ES,pt-BR,ru-RU,ar-SA,it-IT,nl-NL,tr-TR
"@ | Out-File -FilePath $envFile -Encoding UTF8
        }
    }
    
    # 构建项目
    Write-Info "构建项目..."
    npm run build
    if ($LASTEXITCODE -ne 0) {
        Write-Error "项目构建失败"
        exit 1
    }
    
    # 启动PM2服务
    Write-Info "启动PM2服务..."
    pm2 start npm --name "jtpipeline-website" -- start
    if ($LASTEXITCODE -ne 0) {
        Write-Error "PM2启动失败"
        exit 1
    }
    
    # 保存PM2配置
    pm2 save
    pm2-startup install 2>$null
    
    Write-Success "项目部署完成"
}

# 显示部署结果
function Show-DeploymentResult {
    Write-Host ""
    Write-Host "===============================================" -ForegroundColor Green
    Write-Host "           部署完成！" -ForegroundColor Green
    Write-Host "===============================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "网站信息：" -ForegroundColor Cyan
    Write-Host "  本地访问: http://localhost:3000" -ForegroundColor White
    Write-Host "  项目路径: $WebsitePath" -ForegroundColor White
    Write-Host ""
    Write-Host "PM2状态：" -ForegroundColor Cyan
    pm2 status
    Write-Host ""
    Write-Host "常用命令：" -ForegroundColor Cyan
    Write-Host "  查看日志: pm2 logs jtpipeline-website" -ForegroundColor White
    Write-Host "  重启服务: pm2 restart jtpipeline-website" -ForegroundColor White
    Write-Host "  停止服务: pm2 stop jtpipeline-website" -ForegroundColor White
    Write-Host "  监控服务: pm2 monit" -ForegroundColor White
    Write-Host ""
    Write-Host "下一步操作：" -ForegroundColor Cyan
    Write-Host "  1. 配置IIS反向代理（如果需要）" -ForegroundColor White
    Write-Host "  2. 配置SSL证书" -ForegroundColor White
    Write-Host "  3. 配置阿里云CDN" -ForegroundColor White
    Write-Host ""
    Write-Host "部署结束时间: $(Get-Date)" -ForegroundColor Cyan
}

# 执行部署
try {
    Start-Deployment
} catch {
    Write-Error "部署过程中出现错误: $_"
    Write-Error "详细错误信息: $($_.Exception.Message)"
    exit 1
}