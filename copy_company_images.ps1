# PowerShell脚本：将公司资料图片复制到网站目录

$sourceBase = "D:\wenj\独立站\tj-jtpipe\公司资料"
$targetBase = "D:\wenj\独立站\tj-jtpipe\DM\public\images"

Write-Host "开始复制公司资料图片..." -ForegroundColor Green

# 1. 复制产品图片（京通照片原图）
$productSourceDir = Join-Path $sourceBase "京通照片原图"
$productTargetDir = Join-Path $targetBase "products"

# 确保目标目录存在
if (-not (Test-Path $productTargetDir)) {
    New-Item -ItemType Directory -Path $productTargetDir -Force
}

Write-Host "复制产品图片..." -ForegroundColor Yellow
Get-ChildItem -Path $productSourceDir -File | ForEach-Object {
    $targetFile = Join-Path $productTargetDir $_.Name
    Copy-Item -Path $_.FullName -Destination $targetFile -Force
    Write-Host "  复制: $($_.Name)" -ForegroundColor Gray
}

# 2. 复制公司全景图（京通全景图2022）
$panoramaSourceDir = Join-Path $sourceBase "京通全景图2022"
$panoramaTargetDir = Join-Path $targetBase "about"

# 确保目标目录存在
if (-not (Test-Path $panoramaTargetDir)) {
    New-Item -ItemType Directory -Path $panoramaTargetDir -Force
}

Write-Host "复制公司全景图..." -ForegroundColor Yellow
# 复制中文目录中的图片
$chineseSourceDir = Join-Path $panoramaSourceDir "中文"
if (Test-Path $chineseSourceDir) {
    Get-ChildItem -Path $chineseSourceDir -File | ForEach-Object {
        $targetFile = Join-Path $panoramaTargetDir $_.Name
        Copy-Item -Path $_.FullName -Destination $targetFile -Force
        Write-Host "  复制: $($_.Name)" -ForegroundColor Gray
    }
}

# 复制根目录中的图片
Get-ChildItem -Path $panoramaSourceDir -File -Filter *.jpg | ForEach-Object {
    $targetFile = Join-Path $panoramaTargetDir $_.Name
    Copy-Item -Path $_.FullName -Destination $targetFile -Force
    Write-Host "  复制: $($_.Name)" -ForegroundColor Gray
}

# 3. 复制主产品图片（可选，如果有需要）
$mainProductSourceDir = Join-Path $sourceBase "主产品图片"
$mainProductTargetDir = Join-Path $targetBase "products\main"

# 确保目标目录存在
if (-not (Test-Path $mainProductTargetDir)) {
    New-Item -ItemType Directory -Path $mainProductTargetDir -Force
}

Write-Host "复制主产品图片..." -ForegroundColor Yellow
Get-ChildItem -Path $mainProductSourceDir -File -Filter *.jpg | ForEach-Object {
    $targetFile = Join-Path $mainProductTargetDir $_.Name
    Copy-Item -Path $_.FullName -Destination $targetFile -Force
    Write-Host "  复制: $($_.Name)" -ForegroundColor Gray
}

# 4. 复制产品照片1（可选）
$productPhotoSourceDir = Join-Path $sourceBase "产品照片１"
$productPhotoTargetDir = Join-Path $targetBase "products\photos"

# 确保目标目录存在
if (-not (Test-Path $productPhotoTargetDir)) {
    New-Item -ItemType Directory -Path $productPhotoTargetDir -Force
}

Write-Host "复制产品照片1..." -ForegroundColor Yellow
Get-ChildItem -Path $productPhotoSourceDir -File | ForEach-Object {
    $targetFile = Join-Path $productPhotoTargetDir $_.Name
    Copy-Item -Path $_.FullName -Destination $targetFile -Force
    Write-Host "  复制: $($_.Name)" -ForegroundColor Gray
}

Write-Host "图片复制完成！" -ForegroundColor Green
Write-Host "产品图片位置: $productTargetDir"
Write-Host "公司全景图位置: $panoramaTargetDir"
Write-Host "主产品图片位置: $mainProductTargetDir"
Write-Host "产品照片位置: $productPhotoTargetDir"