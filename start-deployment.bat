@echo off
REM Next.js外贸网站阿里云部署启动脚本 (Windows Server 2025)
REM 适用于Windows Server 2025环境下的Next.js应用部署

echo ===============================================
echo    天津京通股份 Next.js外贸网站部署
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

REM 检查PowerShell版本
powershell -Command "$PSVersionTable.PSVersion.Major" >nul 2>&1
if %errorlevel% == 0 (
    echo ✓ PowerShell 可用
) else (
    echo ✗ PowerShell 不可用
    pause
    exit /b 1
)

REM 检查deploy.ps1脚本是否存在
if exist "deploy.ps1" (
    echo ✓ deploy.ps1 部署脚本存在
) else (
    echo ✗ deploy.ps1 部署脚本缺失
    pause
    exit /b 1
)

REM 检查aliyun-deployment-guide.md文档是否存在
if exist "aliyun-deployment-guide.md" (
    echo ✓ aliyun-deployment-guide.md 部署指南存在
) else (
    echo ✗ aliyun-deployment-guide.md 部署指南缺失
)

echo.
echo 步骤 2: 选择部署模式
echo -------------------

echo 请选择部署模式:
echo 1. 标准部署 (仅部署应用)
echo 2. 完整部署 (包含环境安装和部署)
echo 3. 查看部署指南
echo.
set /p MODE="请输入选项 (1-3, 默认1): "
if "%MODE%"=="" set MODE=1

echo.
echo 步骤 3: 执行部署
echo --------------

if "%MODE%"=="1" (
    echo 执行标准部署...
    powershell -ExecutionPolicy Bypass -File "deploy.ps1"
) else if "%MODE%"=="2" (
    echo 执行完整部署 (包含环境安装)...
    powershell -ExecutionPolicy Bypass -File "deploy.ps1" -SetupEnvironment
) else if "%MODE%"=="3" (
    echo 打开部署指南...
    if exist "aliyun-deployment-guide.md" (
        start aliyun-deployment-guide.md
    ) else (
        echo 部署指南文件不存在
    )
    pause
    exit /b 0
) else (
    echo 无效选项，使用默认标准部署
    powershell -ExecutionPolicy Bypass -File "deploy.ps1"
)

echo.
if %errorlevel% == 0 (
    echo ===============================================
    echo    部署执行完成!
    echo    请查看PowerShell窗口的输出结果
    echo ===============================================
) else (
    echo ===============================================
    echo    部署执行失败!
    echo    请查看上面的错误信息
    echo ===============================================
)

echo.
echo 部署结束时间: %date% %time%
echo.
pause