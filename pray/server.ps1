param (
    [int]$port = 8000
)

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Start()
Write-Host "Listening on port $port..."

while ($true) {
    $context = $listener.GetContext()
    $request = $context.Request
    $response = $context.Response
    $localPath = $request.Url.LocalPath
    if ($localPath -eq '/') { $localPath = '/index.html' }
    $fullPath = Join-Path $PWD ($localPath.TrimStart('/'))
    if (Test-Path $fullPath) {
        $extension = [System.IO.Path]::GetExtension($fullPath)
        switch ($extension) {
            '.html' { $response.ContentType = 'text/html' }
            '.css' { $response.ContentType = 'text/css' }
            '.js' { $response.ContentType = 'application/javascript' }
            '.jpg' { $response.ContentType = 'image/jpeg' }
            '.png' { $response.ContentType = 'image/png' }
            '.flac' { $response.ContentType = 'audio/flac' }
            default { $response.ContentType = 'application/octet-stream' }
        }
        $buffer = [System.IO.File]::ReadAllBytes($fullPath)
        $response.ContentLength64 = $buffer.Length
        $response.OutputStream.Write($buffer, 0, $buffer.Length)
    } else {
        $response.StatusCode = 404
        $content = [Text.Encoding]::UTF8.GetBytes("404 - Not Found")
        $response.OutputStream.Write($content, 0, $content.Length)
    }
    $response.OutputStream.Close()
}