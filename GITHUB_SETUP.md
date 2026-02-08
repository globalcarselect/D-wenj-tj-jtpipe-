# GitHub部署说明

## 将项目上传到GitHub

### 1. 初始化Git仓库

```bash
# 在项目根目录执行
git init
git add .
git commit -m "Initial commit: 天津中信通国际贸易有限公司官网"
```

### 2. 在GitHub上创建新仓库

1. 访问 https://github.com/new
2. 输入仓库名称，例如 `jtpipeline-website`
3. 选择公开或私有
4. 不要勾选 "Initialize this repository with a README"
5. 点击 "Create repository"

### 3. 连接本地仓库到GitHub

```bash
# 替换 YOUR_USERNAME 和 REPOSITORY_NAME 为您的实际值
git remote add origin https://github.com/YOUR_USERNAME/jtpipeline-website.git
git branch -M main
git push -u origin main
```

## 从GitHub预览网站

### 1. 使用Vercel部署 (推荐)

Vercel是由Next.js的创建者提供的平台，专门为Next.js应用优化。

1. 访问 https://vercel.com/
2. 使用GitHub账户登录
3. 选择您的 `jtpipeline-website` 仓库
4. Vercel会自动检测这是Next.js项目并进行部署
5. 部署完成后，您将获得一个预览URL

### 2. 使用Netlify部署

1. 访问 https://netlify.com/
2. 使用GitHub账户登录
3. 选择您的 `jtpipeline-website` 仓库
4. Netlify会自动构建并部署您的网站

### 3. 使用GitHub Pages (需要额外配置)

对于Next.js项目，GitHub Pages需要额外的配置步骤：

1. 安装 `gh-pages`: `npm install --save-dev gh-pages`
2. 在 `package.json` 中添加脚本：

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. 运行 `npm run deploy` 部署到GitHub Pages

## 部署到阿里云

详见 `deployment-guide.md` 文件。

## 环境变量配置

如果您的项目需要环境变量，请在部署平台设置相应的环境变量：

- `NEXT_PUBLIC_BASE_URL` - 基础URL
- `CONTACT_API_ENDPOINT` - 联系表单API端点
- 其他API密钥或配置

## 自定义域名

部署完成后，您可以将自定义域名连接到您的部署URL：

1. 在您的域名注册商处添加CNAME记录指向部署平台提供的域名
2. 在部署平台的设置中添加您的自定义域名