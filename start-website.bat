@echo off
echo ========================================
echo   CN-PIPES 网站启动脚本
echo ========================================
echo.

REM 检查Node.js是否安装
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js未安装或未添加到PATH
    echo 请先安装Node.js
    pause
    exit /b 1
)

REM 检查PM2是否安装
pm2 --version >nul 2>&1
if errorlevel 1 (
    echo ❌ PM2未安装
    echo 正在安装PM2...
    npm install -g pm2
    if errorlevel 1 (
        echo ❌ PM2安装失败
        pause
        exit /b 1
    )
    echo ✅ PM2安装成功
)

REM 进入网站目录
cd /d "C:\Users\Adim\cn-pipes"

REM 检查目录是否存在
if not exist "server.js" (
    echo ❌ 网站目录不正确或server.js文件不存在
    echo 当前目录: %CD%
    dir
    pause
    exit /b 1
)

REM 停止现有进程（如果有）
pm2 delete cn-pipes-website 2>nul

REM 启动网站服务器
echo 正在启动CN-PIPES网站服务器...
pm2 start server.js --name "cn-pipes-website"

REM 检查启动状态
pm2 list | findstr "cn-pipes-website" >nul
if errorlevel 1 (
    echo ❌ 网站启动失败
    pm2 logs cn-pipes-website --lines 10
    pause
    exit /b 1
)

echo.
echo ✅ CN-PIPES网站启动成功！
echo.
echo 🌐 访问地址：
echo   本地访问: http://localhost:3000
echo   网络访问: http://172.29.17.41:3000
echo   域名访问: http://cn-pipes.com:3000
echo.
echo 📊 PM2状态：
pm2 list | findstr "cn-pipes-website"
echo.
echo 🔍 查看日志：pm2 logs cn-pipes-website
echo 🛑 停止服务：pm2 stop cn-pipes-website
echo 🔄 重启服务：pm2 restart cn-pipes-website
echo.
pause