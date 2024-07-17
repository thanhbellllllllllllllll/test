<?php
$dir = '.';
$files = array_diff(scandir($dir), array('.', '..'));
$fileList = [];

foreach ($files as $file) {
    $fileList[] = [
        'name' => $file,
        'date' => date("Y-m-d", filemtime($file))
    ];
}

header('Content-Type: application/json');
echo json_encode(['files' => $fileList]);
?>
