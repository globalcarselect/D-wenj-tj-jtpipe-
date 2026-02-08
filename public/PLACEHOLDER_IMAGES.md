# Placeholder Images Generator

由于当前项目缺少实际的产品和项目图片，这里提供一个简单的Python脚本示例来生成占位图片。这些图片将帮助在开发和预览阶段更好地展示网站。

## 生成占位图片的Python脚本示例

```python
from PIL import Image, ImageDraw, ImageFont
import os

def create_placeholder_image(width, height, filename, text, bgcolor=(200, 200, 200), textcolor=(50, 50, 50)):
    """创建占位图片"""
    img = Image.new('RGB', (width, height), color=bgcolor)
    draw = ImageDraw.Draw(img)
    
    # 尝试使用默认字体，如果不可用则使用内置字体
    try:
        font = ImageFont.truetype("arial.ttf", 30)
    except:
        font = ImageFont.load_default()
    
    # 计算文字位置
    text_width, text_height = draw.textsize(text, font=font)
    x = (width - text_width) // 2
    y = (height - text_height) // 2
    
    # 绘制文字
    draw.text((x, y), text, fill=textcolor, font=font)
    
    # 保存图片
    img.save(filename)
    print(f"Created: {filename}")

# 创建public/images目录
os.makedirs('public/images', exist_ok=True)

# 生成产品类别图片
create_placeholder_image(800, 600, 'public/images/pe-pipe.jpg', 'PE Pipes', (150, 200, 255))
create_placeholder_image(800, 600, 'public/images/pvc-pipe.jpg', 'PVC Pipes', (255, 200, 150))
create_placeholder_image(800, 600, 'public/images/pipe-fitting.jpg', 'Pipe Fittings', (200, 255, 150))
create_placeholder_image(800, 600, 'public/images/valve.jpg', 'Valves', (255, 150, 200))

# 生成项目案例图片
create_placeholder_image(600, 400, 'public/images/project-dubai.jpg', 'Dubai Water Project', (200, 150, 255))
create_placeholder_image(600, 400, 'public/images/project-germany.jpg', 'Germany Industrial', (150, 255, 255))
create_placeholder_image(600, 400, 'public/images/project-kenya.jpg', 'Kenya Infrastructure', (255, 255, 150))

# 生成产品详情图片
create_placeholder_image(800, 600, 'public/images/hdpe-pipe.jpg', 'HDPE Water Pipe', (180, 220, 255))
create_placeholder_image(800, 600, 'public/images/pvc-drainage.jpg', 'PVC Drainage Pipe', (255, 220, 180))
create_placeholder_image(800, 600, 'public/images/pe-elbow-fitting.jpg', 'PE Elbow Fitting', (220, 255, 180))
create_placeholder_image(800, 600, 'public/images/pe-tee-fitting.jpg', 'PE Tee Fitting', (255, 180, 220))

# 生成公司相关图片
create_placeholder_image(800, 600, 'public/images/company-overview.jpg', 'Company Overview', (200, 200, 200))
create_placeholder_image(800, 600, 'public/images/factory-image.jpg', 'Factory Image', (220, 220, 220))
create_placeholder_image(800, 600, 'public/images/quality-certificates.jpg', 'Quality Certificates', (240, 240, 200))

# 生成通用占位图
create_placeholder_image(400, 300, 'public/images/placeholder-product.jpg', 'Product Image')
create_placeholder_image(400, 300, 'public/images/placeholder-project.jpg', 'Project Image')
create_placeholder_image(400, 300, 'public/images/placeholder-fitting.jpg', 'Fitting Image')
create_placeholder_image(400, 300, 'public/images/placeholder-valve.jpg', 'Valve Image')
create_placeholder_image(1920, 800, 'public/images/hero-background.jpg', 'Hero Background', (100, 150, 200))

# 创建Logo
create_placeholder_image(300, 100, 'public/logo.png', 'Tianjin Zhongxintong', (25, 55, 100), (255, 255, 255))
```

## 如何使用

1. 安装Pillow库: `pip install Pillow`
2. 运行上述脚本
3. 所有占位图片将生成在public/images目录下

## 图片规格

- 产品图片: 800x600 像素
- 项目案例: 600x400 像素
- Logo: 300x100 像素
- 首页背景: 1920x800 像素