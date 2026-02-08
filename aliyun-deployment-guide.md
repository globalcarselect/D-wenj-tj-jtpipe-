# 阿里云WordPress外贸网站部署文档

## 服务器环境要求
- 操作系统：CentOS 7.x / Ubuntu 20.04 LTS
- 内存：至少4GB RAM
- 存储：至少40GB SSD
- CPU：至少2核

## 部署前准备

### 1. 购买阿里云ECS实例
- 选择合适的地域（推荐华北2-北京）
- 选择实例规格（如 ecs.c6.large 2核4GB）
- 选择镜像（CentOS 7.9 64位）
- 配置网络（专有网络、安全组）

### 2. 域名准备
- 注册域名（如 cn-pipes.com）
- 完成ICP备案（如使用国内服务器）
- 配置DNS解析到服务器IP

## 部署步骤

### 1. 服务器初始化
```bash
# 更新系统
sudo yum update -y  # CentOS
# 或
sudo apt update && sudo apt upgrade -y  # Ubuntu

# 安装wget和vim
sudo yum install wget vim -y  # CentOS
# 或
sudo apt install wget vim -y  # Ubuntu
```

### 2. 安装Web环境 (LNMP)

#### 安装Nginx
```bash
# CentOS
sudo yum install epel-release -y
sudo yum install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx

# Ubuntu
sudo apt install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx
```

#### 安装MySQL 8.0
```bash
# CentOS
sudo yum install mysql-server -y
sudo systemctl start mysqld
sudo systemctl enable mysqld

# 获取临时密码
sudo grep 'temporary password' /var/log/mysqld.log

# Ubuntu
sudo apt install mysql-server -y
sudo systemctl start mysql
sudo systemctl enable mysql
```

#### 安装PHP 8.0
```bash
# CentOS
sudo yum install epel-release -y
sudo yum install http://rpms.remirepo.net/enterprise/remi-release-7.rpm -y
sudo yum-config-manager --enable remi-php80
sudo yum install php php-cli php-fpm php-mysql php-zip php-devel php-gd php-mbstring php-curl php-xml php-pear php-bcmath -y

# Ubuntu
sudo add-apt-repository ppa:ondrej/php -y
sudo apt update
sudo apt install php8.0 php8.0-fpm php8.0-mysql php8.0-zip php8.0-xml php8.0-curl php8.0-gd php8.0-mbstring -y
```

### 3. 配置数据库
```bash
# 安全配置MySQL
sudo mysql_secure_installation

# 登录MySQL并创建数据库
mysql -u root -p
```

在MySQL中执行：
```sql
CREATE DATABASE wordpress_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'wp_user'@'localhost' IDENTIFIED BY 'your_secure_password';
GRANT ALL PRIVILEGES ON wordpress_db.* TO 'wp_user'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

### 4. 安装WordPress
```bash
# 下载WordPress
cd /tmp
wget https://wordpress.org/latest.tar.gz
tar -zxvf latest.tar.gz

# 配置WordPress
cd wordpress
cp wp-config-sample.php wp-config.php

# 编辑wp-config.php (使用vim或其他编辑器)
vim wp-config.php
```

替换以下部分：
```php
define('DB_NAME', 'wordpress_db');
define('DB_USER', 'wp_user');
define('DB_PASSWORD', 'your_secure_password');
```

### 5. 配置Nginx虚拟主机
创建配置文件 `/etc/nginx/conf.d/wordpress.conf`:
```bash
sudo vim /etc/nginx/conf.d/wordpress.conf
```

添加以下内容：
```nginx
server {
    listen 80;
    server_name your_domain.com www.your_domain.com;
    root /var/www/html;
    index index.php index.html;

    # WordPress伪静态规则
    location / {
        try_files $uri $uri/ /index.php?$args;
    }

    location ~ \.php$ {
        fastcgi_pass 127.0.0.1:9000;
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include fastcgi_params;
    }

    location ~ /\.ht {
        deny all;
    }

    location = /favicon.ico { 
        log_not_found off; access_log off; 
    }
    location = /robots.txt { 
        log_not_found off; access_log off; allow all; 
    }
    
    # 安全限制
    location ~* \.(css|js|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### 6. 移动文件并设置权限
```bash
sudo mkdir -p /var/www/html
sudo cp -a /tmp/wordpress/. /var/www/html/
sudo chown -R nginx:nginx /var/www/html/  # CentOS
# 或
sudo chown -R www-data:www-data /var/www/html/  # Ubuntu
sudo chmod -R 755 /var/www/html/
sudo find /var/www/html/ -type f -exec chmod 644 {} \;
sudo find /var/www/html/ -type d -exec chmod 755 {} \;

# 设置WordPress特定目录权限
sudo chmod -R 775 /var/www/html/wp-content/
sudo chown -R nginx:nginx /var/www/html/wp-content/  # CentOS
# 或
sudo chown -R www-data:www-data /var/www/html/wp-content/  # Ubuntu
```

### 7. 启动服务
```bash
# 启动PHP-FPM
sudo systemctl start php-fpm
sudo systemctl enable php-fpm

# 重启Nginx
sudo systemctl restart nginx
```

## SSL证书安装 (Let's Encrypt)

### 安装Certbot
```bash
# CentOS
sudo yum install certbot python3-certbot-nginx -y

# Ubuntu
sudo apt install certbot python3-certbot-nginx -y
```

### 获取SSL证书
```bash
sudo certbot --nginx -d your_domain.com -d www.your_domain.com
```

### 设置自动续期
```bash
sudo crontab -e
# 添加以下行
0 12 * * * /usr/bin/certbot renew --quiet
```

## 多语言和外贸功能配置

### 1. 安装多语言插件 (WPML或Polylang)
- 登录WordPress后台
- 进入"插件" > "安装插件"
- 搜索并安装"WPML Multilingual CMS"或"Polylang"

### 2. 配置多语言设置
- 设置默认语言为中文
- 添加英语作为第二语言
- 配置URL格式（子目录形式）

### 3. 安装外贸相关插件
- RankMath SEO
- Elementor Pro
- WooCommerce (如需电商功能)
- Contact Form 7
- Social Media Share Buttons

## 性能优化

### 1. 安装缓存插件
- WP Rocket 或 W3 Total Cache

### 2. 阿里云CDN配置
- 登录阿里云控制台
- 开通CDN服务
- 添加加速域名
- 配置源站信息

### 3. 图片优化
- 安装Smush或ShortPixel插件
- 启用图片压缩和WebP格式

## 安全配置

### 1. 防火墙设置
```bash
# 配置安全组规则（阿里云控制台）
# 开放端口：80(HTTP), 443(HTTPS), 22(SSH)
```

### 2. WordPress安全加固
- 更改默认管理员用户名
- 安装Wordfence Security插件
- 定期更新WordPress核心、主题和插件

## 备份策略

### 1. 数据库备份
```bash
# 手动备份
mysqldump -u wp_user -p wordpress_db > backup_$(date +%Y%m%d_%H%M%S).sql

# 自动备份脚本
sudo vim /home/backup.sh
```

备份脚本内容：
```bash
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/home/backups"
MYSQL_USER="wp_user"
MYSQL_PASS="your_password"
DATABASE="wordpress_db"

mkdir -p $BACKUP_DIR
mysqldump -u $MYSQL_USER -p$MYSQL_PASS $DATABASE > $BACKUP_DIR/backup_$DATE.sql
find $BACKUP_DIR -name "backup_*.sql" -mtime +7 -delete
```

设置定时任务：
```bash
sudo chmod +x /home/backup.sh
sudo crontab -e
# 每天凌晨2点执行备份
0 2 * * * /home/backup.sh
```

### 2. 文件备份
- 使用阿里云OSS进行文件备份
- 定期备份WordPress文件

## 监控和维护

### 1. 网站监控
- 设置HTTP监控检查网站可用性
- 监控服务器资源使用情况

### 2. 日志分析
- 定期检查Nginx访问日志和错误日志
- 分析网站访问统计

## 故障排除

### 常见问题
1. **WordPress无法连接数据库**：检查数据库服务是否运行，确认数据库配置
2. **网站打不开**：检查防火墙设置，确认Web服务是否运行
3. **中文乱码**：确认数据库字符集为utf8mb4

### 调试命令
```bash
# 检查服务状态
sudo systemctl status nginx
sudo systemctl status php-fpm
sudo systemctl status mysql

# 查看日志
sudo tail -f /var/log/nginx/error.log
sudo tail -f /var/log/mysql/error.log
```

## 完成部署
完成以上步骤后，访问您的域名即可看到WordPress安装界面，按照提示完成最终设置即可。