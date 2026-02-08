# 预览网站的几种方法

## 方法一：使用Vercel部署（推荐）

1. 确保项目代码已推送到GitHub
2. 访问 https://vercel.com/ 并使用GitHub账户登录
3. 点击 "New Project" 并选择您的仓库
4. Vercel会自动检测并部署Next.js项目
5. 部署完成后，您将获得一个形如 `https://jtpipeline-website.vercel.app` 的URL

## 方法二：使用Netlify部署

1. 访问 https://netlify.com/ 并使用GitHub账户登录
2. 选择您的仓库
3. Netlify会自动构建并部署网站
4. 您将获得一个形如 `https://jtpipeline-website.netlify.app` 的URL

## 方法三：本地部署故障排除

如果您希望在本地运行，可以尝试以下步骤：

1. 确保安装了最新版的Node.js
2. 在项目根目录运行：
   ```bash
   npm install
   npm run dev
   ```
3. 访问 http://localhost:3000

## 方法四：Docker部署

项目已包含Dockerfile，可以通过Docker部署：

```bash
# 构建Docker镜像
docker build -t jtpipeline-website .

# 运行容器
docker run -p 3000:3000 jtpipeline-website
```

## 项目特性

- 响应式设计，适配移动设备
- 专业的企业形象展示
- 产品分类展示
- 联系表单功能
- SEO优化
- 多语言支持（规划中）

## 技术支持

如果在部署过程中遇到任何问题，请参考：
- deployment-guide.md - 阿里云部署指南
- TESTING.md - 测试文档
- Dockerfile - Docker部署配置

访问我们现在的网站：https://www.jtpipeline.com/