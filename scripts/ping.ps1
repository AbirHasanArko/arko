$ErrorActionPreference = 'Continue'
for ($i = 0; $i -lt 15; $i++) {
    try {
        $r = Invoke-WebRequest -Uri 'http://localhost:3000/' -UseBasicParsing -TimeoutSec 6
        if ($r.StatusCode -eq 200) {
            Write-Output ('OK ' + $r.Content.Length + ' bytes')
            if ($r.Content -match 'ScanlineOverlay-module[^\s"]*__scanlines') { Write-Output 'scanlines: present' } else { Write-Output 'scanlines: MISSING' }
            break
        }
    } catch {
        Start-Sleep -Seconds 1
    }
}
