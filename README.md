# 天津中信通国际贸易有限公司官网

这是一个专业的管道及配件外贸型企业网站，采用现代化技术栈构建。

## 技术栈

- **前端框架**: Next.js 14 (App Router)
- **编程语言**: TypeScript
- **样式**: Tailwind CSS
- **部署**: Docker, 阿里云

## 项目结构

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API 路由
│   │   ├── contact/       # 联系表单 API
│   │   └── social/        # 社交媒体 API
│   ├── contact/           # 联系页面
│   ├── news/              # 新闻页面
│   ├── products/          # 产品页面
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 布局组件
│   └── page.tsx           # 首页
public/                    # 静态资源
├── images/                # 图片资源
│   ├── pe-pipe.jpg        # PE管道产品图
│   ├── pvc-pipe.jpg       # PVC管道产品图
│   ├── pipe-fitting.jpg   # 管道配件图
│   ├── valve.jpg          # 阀门产品图
│   ├── project-dubai.jpg  # 迪拜项目图
│   ├── project-germany.jpg # 德国项目图
│   ├── project-kenya.jpg  # 肯尼亚项目图
│   └── ...
├── logo.png              # 公司Logo
└── favicon.ico           # 网站图标
```

## 功能特性

- 响应式设计，支持移动设备
- 产品展示系统（PE管道、PVC管道、管道配件、阀门等）
- 项目案例展示（国际项目经验）
- 联系表单功能（询盘系统）
- 社交媒体集成
- SEO优化（元数据、结构化数据）
- 多语言支持（未来扩展）
- 产品筛选和搜索功能

## 页面结构

### 首页 (/)
- **Header**: 导航栏，包含公司Logo和主要导航链接
- **HeroSection**: 首屏横幅，展示公司主要业务和行动号召
- **ProductCategories**: 产品分类展示，包含PE管道、PVC管道、管道配件、阀门等
- **AboutSection**: 公司介绍，展示公司优势和认证
- **ProjectsSection**: 项目案例展示，展示国际项目经验
- **Footer**: 页脚，包含联系信息和版权信息

### 产品页 (/products)
- 产品筛选功能（类别、材料、尺寸、压力等级）
- 产品网格展示（包含产品名称、类别、材料、规格）
- 产品详情查看和询盘功能

### 联系页 (/contact)
- 联系表单（姓名、邮箱、电话、消息内容）
- 公司联系信息
- 公司地址地图

### 新闻页 (/news)
- 行业新闻展示
- 公司动态更新
- 项目亮点

## 图片资源需求

网站需要以下图片资源以完善视觉效果：

### 产品图片
- PE管道产品高清图
- PVC管道产品高清图
- 各类管道配件（弯头、三通、法兰等）
- 阀门产品图
- 产品细节特写

### 项目案例图片
- 已完成项目的现场照片
- 客户项目应用案例
- 国际合作项目展示

### 公司图片
- 公司外景图
- 工厂车间图
- 生产设备图
- 质量认证证书
- 团队照片

## 部署到本地开发环境

1. 确保已安装 Node.js (v16 或更高版本)
2. 安装依赖: `npm install`
3. 启动开发服务器: `npm run dev`
4. 访问 `http://localhost:3000`

## 构建生产版本

```bash
npm run build
npm start
```

## Docker 部署

```bash
docker build -t jtpipeline-website .
docker run -p 3000:3000 jtpipeline-website
```

## 阿里云部署

详见 `deployment-guide.md` 文件。

## 项目截图

![网站截图](./screenshots/website-preview.png) <!-- 如果有截图的话 -->

## 测试与质量保证

- 响应式设计在各种设备上的测试
- 产品筛选功能测试
- 联系表单提交功能测试
- SEO元素检查
- 页面加载速度优化

## 维护

- 定期更新产品信息
- 监控网站性能
- 优化SEO设置
- 更新项目案例
- 添加新的产品类别

## 联系方式

- 公司名称：天津中信通国际贸易有限公司
- 英文名：TIANJIN ZHONGXINTONG INTERNATIONAL TRADE CO.,LTD.
- 地址：天津市河西区大沽南路与奉化道交口东北侧晶采大厦2-2608
- 网址：https://www.jtpipeline.com/