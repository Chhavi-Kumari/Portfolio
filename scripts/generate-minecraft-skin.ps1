param(
  [string]$Source = "public/assets/minecraft-skin-source.png",
  [string]$Output = "public/assets/minecraft-skin.png"
)

Add-Type -AssemblyName System.Drawing

$sourcePath = (Resolve-Path $Source).Path
$outputPath = Join-Path (Get-Location) $Output
$sourceImage = [System.Drawing.Bitmap]::FromFile($sourcePath)
$skin = New-Object System.Drawing.Bitmap 64, 64, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$graphics = [System.Drawing.Graphics]::FromImage($skin)
$graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::NearestNeighbor
$graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::Half
$graphics.Clear([System.Drawing.Color]::Transparent)

function Draw-Crop {
  param(
    [int]$SourceX, [int]$SourceY, [int]$SourceWidth, [int]$SourceHeight,
    [int]$TargetX, [int]$TargetY, [int]$TargetWidth, [int]$TargetHeight
  )
  $sourceRect = New-Object System.Drawing.Rectangle $SourceX, $SourceY, $SourceWidth, $SourceHeight
  $targetRect = New-Object System.Drawing.Rectangle $TargetX, $TargetY, $TargetWidth, $TargetHeight
  $graphics.DrawImage($sourceImage, $targetRect, $sourceRect, [System.Drawing.GraphicsUnit]::Pixel)
}

function Fill-Face {
  param([int]$X, [int]$Y, [int]$Width, [int]$Height, [System.Drawing.Color]$Color)
  $brush = New-Object System.Drawing.SolidBrush $Color
  $graphics.FillRectangle($brush, $X, $Y, $Width, $Height)
  $brush.Dispose()
}

$hair = [System.Drawing.Color]::FromArgb(255, 42, 38, 32)
$skinTone = [System.Drawing.Color]::FromArgb(255, 157, 82, 43)
$shirt = [System.Drawing.Color]::FromArgb(255, 112, 41, 31)
$shirtDark = [System.Drawing.Color]::FromArgb(255, 78, 31, 27)
$trousers = [System.Drawing.Color]::FromArgb(255, 184, 132, 77)
$trousersDark = [System.Drawing.Color]::FromArgb(255, 120, 79, 43)

Fill-Face 8 0 8 8 $hair
Fill-Face 16 0 8 8 $hair
Fill-Face 0 8 8 8 $hair
Draw-Crop 167 148 137 168 8 8 8 8
Fill-Face 16 8 8 8 $hair
Fill-Face 24 8 8 8 $hair

Fill-Face 20 16 8 4 $shirtDark
Fill-Face 28 16 8 4 $shirtDark
Fill-Face 16 20 4 12 $shirtDark
Draw-Crop 194 311 105 181 20 20 8 12
Fill-Face 28 20 4 12 $shirtDark
Fill-Face 32 20 8 12 $shirt

Fill-Face 44 16 4 4 $shirt
Fill-Face 48 16 4 4 $skinTone
Fill-Face 40 20 4 12 $shirtDark
Draw-Crop 298 320 81 210 44 20 4 12
Fill-Face 48 20 4 12 $shirtDark
Fill-Face 52 20 4 12 $shirt

Fill-Face 36 48 4 4 $shirt
Fill-Face 40 48 4 4 $skinTone
Fill-Face 32 52 4 12 $shirtDark
Draw-Crop 106 320 85 210 36 52 4 12
Fill-Face 40 52 4 12 $shirtDark
Fill-Face 44 52 4 12 $shirt

Fill-Face 4 16 4 4 $trousers
Fill-Face 8 16 4 4 $trousersDark
Fill-Face 0 20 4 12 $trousersDark
Fill-Face 4 20 4 12 $trousers
Fill-Face 8 20 4 12 $trousersDark
Fill-Face 12 20 4 12 $trousers

Fill-Face 20 48 4 4 $trousers
Fill-Face 24 48 4 4 $trousersDark
Fill-Face 16 52 4 12 $trousersDark
Fill-Face 20 52 4 12 $trousers
Fill-Face 24 52 4 12 $trousersDark
Fill-Face 28 52 4 12 $trousers

$graphics.Dispose()
$sourceImage.Dispose()
$skin.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
$skin.Dispose()

Write-Output "Generated $Output from $Source"
