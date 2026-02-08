Write-Host "开始下载缺失的图片..."

# 创建目录
$aboutDir = "D:\wenj\独立站\tj-jtpipe\DM\public\images\about"
$newsDir = "D:\wenj\独立站\tj-jtpipe\DM\public\images\news"
$caseDir = "D:\wenj\独立站\tj-jtpipe\DM\public\images\case"
$logoDir = "D:\wenj\独立站\tj-jtpipe\DM\public\images\logo"

# 确保目录存在
New-Item -ItemType Directory -Force -Path $aboutDir | Out-Null
New-Item -ItemType Directory -Force -Path $newsDir | Out-Null
New-Item -ItemType Directory -Force -Path $caseDir | Out-Null
New-Item -ItemType Directory -Force -Path $logoDir | Out-Null

# 下载函数
function Download-Image {
    param($url, $outputPath)
    try {
        Write-Host "正在下载: $url"
        # 确保输出目录存在
        $outputDir = Split-Path -Parent $outputPath
        if (!(Test-Path $outputDir)) {
            New-Item -ItemType Directory -Force -Path $outputDir | Out-Null
        }
        Invoke-WebRequest -Uri $url -OutFile $outputPath -UseBasicParsing
        Write-Host "已保存到: $outputPath"
        Start-Sleep -Milliseconds 300
    }
    catch {
        Write-Host "下载失败: $($_.Exception.Message)"
        Write-Host "尝试重新下载..."
        try {
            Invoke-WebRequest -Uri $url -OutFile $outputPath -UseBasicParsing
            Write-Host "重新下载成功: $outputPath"
        }
        catch {
            Write-Host "重新下载也失败: $($_.Exception.Message)"
        }
    }
}

# 下载关于我们额外图片
Download-Image "https://img.waimaoniu.net/1141/1141-202412101133428766.jpg" "$aboutDir\workshop2.jpg"
Download-Image "https://img.waimaoniu.net/1141/1141-202412101138199767.jpg" "$aboutDir\production-line.jpg"
Download-Image "https://img.waimaoniu.net/1141/1141-202412101135481679.jpg" "$aboutDir\quality-control.jpg"
Download-Image "https://img.waimaoniu.net/1141/1141-202412101135473082.jpg" "$aboutDir\testing-equipment.jpg"
Download-Image "https://img.waimaoniu.net/1141/1141-202412101133426072.jpg" "$aboutDir\warehouse.jpg"
Download-Image "https://img.waimaoniu.net/1141/1141-202412101133480387.jpg" "$aboutDir\research-lab.jpg"

# 下载新闻图片
Download-Image "https://img.waimaoniu.net/1141/1141-202601131654161543.jpg" "$newsDir\pipeline-project.jpg"
Download-Image "https://img.waimaoniu.net/1141/1141-202601071631570325.jpg" "$newsDir\mpp-pipes.jpg"
Download-Image "https://img.waimaoniu.net/1141/1141-202601011142140688.jpg" "$newsDir\new-year.jpg"
Download-Image "https://img.waimaoniu.net/1141/1141-202512111719123094.jpg" "$newsDir\srpe-indonesia.jpg"
Download-Image "https://img.waimaoniu.net/1141/1141-202512041114228895.jpg" "$newsDir\pvc-south-america.jpg"
Download-Image "https://img.waimaoniu.net/1141/1141-202511121046247822.jpg" "$newsDir\en12201-europe.jpg"

# 下载案例图片
Download-Image "https://img.waimaoniu.net/1141/1141-202412271343272005.jpg" "$caseDir\daxing-airport.jpg"
Download-Image "https://img.waimaoniu.net/1141/1141-202412251429498505.jpg" "$caseDir\texas-oilfield.jpg"
Download-Image "https://img.waimaoniu.net/1141/1141-202412251426510617.jpg" "$caseDir\asia-water-supply.jpg"

# 下载logo
Download-Image "https://img.waimaoniu.net/1141/1141-202412251716079013.jpg" "$logoDir\company-logo.jpg"

# 下载favicon (图标)
Download-Image "https://img.waimaoniu.net/1141/1141-201902151148564340.ico" "D:\wenj\独立站\tj-jtpipe\DM\public\favicon.ico"

Write-Host "所有缺失图片下载完成！"