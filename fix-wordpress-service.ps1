# 修复wordpress.ts文件 - 添加export语句

$sourceFile = "d:\wenj\独立站\tj-jtpipe\DM\src\services\wordpress.ts"
$targetFile = "C:\Websites\jtpipeline\src\services\wordpress.ts"

# 复制文件
Copy-Item $sourceFile $targetFile -Force

# 验证文件
Write-Host "文件已复制到: $targetFile"
Write-Host "文件大小: $(Get-Item $targetFile).Length 字节"
Write-Host "文件内容预览:"
Get-Content $targetFile | Select-Object -First 5
Write-Host "..."
Get-Content $targetFile | Select-Object -Last 5
