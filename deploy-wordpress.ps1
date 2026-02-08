# WordPress阿里云服务器部署脚本 (PowerShell版)

# 安装Chocolatey包管理器
Set-ExecutionPolicy Bypass -Scope Process -Force
[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072
iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))

# 安装必要的软件
choco install nginx -y
choco install mysql -y
choco install php -y

# 启动服务
Start-Service nginx
Start-Service mysql

# 配置PHP
$phpIniPath = "C:\tools\php\php.ini"
$content = Get-Content $phpIniPath
$content = $content -replace ';extension=mysqli', 'extension=mysqli'
$content = $content -replace ';extension=curl', 'extension=curl'
$content = $content -replace ';extension=gd', 'extension=gd'
$content = $content -replace ';extension=mbstring', 'extension=mbstring'
$content = $content -replace ';extension=xml', 'extension=xml'
$content = $content -replace ';extension=zip', 'extension=zip'
$content | Set-Content $phpIniPath

# 下载WordPress
$wordpressUrl = "https://wordpress.org/latest.zip"
$downloadPath = "$env:TEMP\wordpress.zip"
Invoke-WebRequest -Uri $wordpressUrl -OutFile $downloadPath

# 解压WordPress
Expand-Archive -Path $downloadPath -DestinationPath "C:\temp" -Force

# 移动到Web目录 (假设使用IIS或类似服务)
$webRoot = "C:\inetpub\wwwroot"
if (Test-Path $webRoot) {
    Copy-Item -Path "C:\temp\wordpress\*" -Destination $webRoot -Recurse -Force
} else {
    # 如果没有IIS，则创建一个目录用于存放WordPress
    New-Item -ItemType Directory -Path "C:\wordpress" -Force
    Copy-Item -Path "C:\temp\wordpress\*" -Destination "C:\wordpress" -Recurse -Force
    Write-Host "WordPress已解压到C:\wordpress，请配置Web服务器指向该目录"
}

# 创建WordPress配置文件
$wpConfigPath = "C:\temp\wordpress\wp-config.php"
Copy-Item "C:\temp\wordpress\wp-config-sample.php" -Destination $wpConfigPath

# 替换数据库配置
$dbConfig = @"
<?php
define('DB_NAME', 'wordpress_db');
define('DB_USER', 'wp_user');
define('DB_PASSWORD', 'secure_password');
define('DB_HOST', 'localhost');
define('DB_CHARSET', 'utf8');
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 */
"@

# 生成安全密钥
$securityKeys = ""
for ($i = 0; $i -lt 8; $i++) {
    $key = -join ((65..90) + (97..122) + (48..57) | Get-Random -Count 64 | % {[char]$_})
    switch ($i) {
        0 { $securityKeys += "define('AUTH_KEY',         '$key');"; break }
        1 { $securityKeys += "`ndefine('SECURE_AUTH_KEY',  '$key');"; break }
        2 { $securityKeys += "`ndefine('LOGGED_IN_KEY',    '$key');"; break }
        3 { $securityKeys += "`ndefine('NONCE_KEY',        '$key');"; break }
        4 { $securityKeys += "`ndefine('AUTH_SALT',        '$key');"; break }
        5 { $securityKeys += "`ndefine('SECURE_AUTH_SALT', '$key');"; break }
        6 { $securityKeys += "`ndefine('LOGGED_IN_SALT',   '$key');"; break }
        7 { $securityKeys += "`ndefine('NONCE_SALT',       '$key');"; break }
    }
}

$wpConfigContent = $dbConfig + $securityKeys + @"

/**#@-*/

\$table_prefix  = 'wp_';

define('WP_DEBUG', false);

if ( !defined('ABSPATH') )
    define('ABSPATH', dirname(__FILE__) . '/');

require_once(ABSPATH . 'wp-settings.php');
"@

Set-Content -Path $wpConfigPath -Value $wpConfigContent

Write-Host "WordPress部署准备完成！"
Write-Host "请完成以下步骤："
Write-Host "1. 启动MySQL服务并创建数据库wordpress_db"
Write-Host "2. 创建数据库用户wp_user并设置权限"
Write-Host "3. 配置Web服务器(如IIS或Apache)指向WordPress目录"
Write-Host "4. 访问网站完成WordPress安装向导"