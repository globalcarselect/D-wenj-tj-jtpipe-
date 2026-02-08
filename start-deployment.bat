@echo off
REM WordPress外贸网站阿里云部署启动脚本
REM 适用于Windows环境下的部署准备

echo ===============================================
echo    天津中信通国际贸易有限公司 WordPress网站部署
echo ===============================================
echo.
echo 部署开始时间: %date% %time%
echo.

REM 检查是否以管理员身份运行
net session >nul 2>&1
if %errorLevel% == 0 (
    echo ✓ 管理员权限检查通过
) else (
    echo ✗ 错误: 请以管理员身份运行此脚本
    pause
    exit /b 1
)

echo.
echo 步骤 1: 环境检查
echo ----------------

REM 检查必要工具
where curl >nul 2>&1
if %errorlevel% == 0 (
    echo ✓ curl 工具可用
) else (
    echo ✗ curl 工具未找到
    set NEED_CURL=1
)

where ssh >nul 2>&1
if %errorlevel% == 0 (
    echo ✓ SSH 工具可用
) else (
    echo ✗ SSH 工具未找到
    set NEED_SSH=1
)

echo.
if defined NEED_CURL (
    echo 需要安装 curl 工具
    echo 推荐安装 Git for Windows，它包含 curl 和 SSH 工具
    echo 下载地址: https://git-scm.com/download/win
    echo.
)

if defined NEED_SSH (
    echo 需要安装 SSH 工具
    echo 推荐安装 OpenSSH 或 Git for Windows
    echo.
)

echo 步骤 2: 部署文件准备
echo -------------------

REM 检查部署所需文件是否存在
set DEPLOY_FILES=0
if exist "wp-config-template.php" (
    echo ✓ wp-config-template.php 文件存在
    set /a DEPLOY_FILES+=1
) else (
    echo ✗ wp-config-template.php 文件缺失
)

if exist "aliyun-deployment-guide.md" (
    echo ✓ aliyun-deployment-guide.md 文件存在
    set /a DEPLOY_FILES+=1
) else (
    echo ✗ aliyun-deployment-guide.md 文件缺失
)

if exist "theme-plugin-config.md" (
    echo ✓ theme-plugin-config.md 文件存在
    set /a DEPLOY_FILES+=1
) else (
    echo ✗ theme-plugin-config.md 文件缺失
)

if exist "deployment-checklist.md" (
    echo ✓ deployment-checklist.md 文件存在
    set /a DEPLOY_FILES+=1
) else (
    echo ✗ deployment-checklist.md 文件缺失
)

echo.
echo 找到 %DEPLOY_FILES% 个部署文件中的 4 个

echo.
echo 步骤 3: 配置服务器连接信息
echo --------------------------

echo 请输入阿里云服务器信息:
set /p SERVER_IP="服务器IP地址: "
set /p SSH_PORT="SSH端口 (默认22): "
if "%SSH_PORT%"=="" set SSH_PORT=22
set /p SSH_USER="SSH用户名 (默认root): "
if "%SSH_USER%"=="" set SSH_USER=root

echo.
echo 服务器信息确认:
echo IP: %SERVER_IP%:%SSH_PORT%
echo 用户: %SSH_USER%
echo.

set /p CONFIRM="确认信息无误？(y/n): "
if /i not "%CONFIRM%"=="y" (
    echo 部署已取消
    pause
    exit /b 0
)

echo.
echo 步骤 4: 传输部署文件
echo ------------------

echo 正在连接到服务器 %SERVER_IP%...
echo 注意: 请确保已配置SSH密钥或准备好输入密码
echo.

echo 传输部署文档到服务器...
echo scp -P %SSH_PORT% aliyun-deployment-guide.md %SSH_USER%@%SERVER_IP%:/tmp/
echo scp -P %SSH_PORT% theme-plugin-config.md %SSH_USER%@%SERVER_IP%:/tmp/
echo scp -P %SSH_PORT% deployment-checklist.md %SSH_USER%@%SERVER_IP%:/tmp/

echo.
echo 步骤 5: 部署说明
echo ---------------

echo 部署完成后，请按以下步骤操作：
echo 1. 登录阿里云服务器
echo 2. 参考 aliyun-deployment-guide.md 进行环境配置
echo 3. 安装LNMP环境 (Linux, Nginx, MySQL, PHP)
echo 4. 配置WordPress
echo 5. 安装推荐的主题和插件
echo 6. 根据 theme-plugin-config.md 配置多语言和外贸功能
echo 7. 使用 deployment-checklist.md 进行最终检查

echo.
echo ===============================================
echo    部署准备完成！
echo    请按照文档指引完成服务器端部署
echo ===============================================

pause