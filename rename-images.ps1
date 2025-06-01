# PowerShell script to rename project images

$sourceDir = "$PSScriptRoot\public\images\projects"
$imageFiles = Get-ChildItem -Path $sourceDir -Filter "IMG*.jpg" | Sort-Object LastWriteTime

$counter = 1
foreach ($file in $imageFiles) {
    $newName = "project$counter.jpg"
    $newPath = Join-Path -Path $sourceDir -ChildPath $newName
    
    # Check if destination file already exists and remove it
    if (Test-Path $newPath) {
        Remove-Item $newPath -Force
    }
    
    # Rename the file
    Rename-Item -Path $file.FullName -NewName $newName -Force
    Write-Host "Renamed $($file.Name) to $newName"
    
    $counter++
}

Write-Host "Image renaming complete!"
