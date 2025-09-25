<?php
$filename = "visite.txt";

$file = file($filename);
$file = array_unique($file);
$hits = count($file);
echo $hits;

$fd = fopen ($filename , "r");
$fstring = fread ($fd , filesize ($filename));
fclose($fd);
$fd = fopen ($filename , "w");
$fcounted = $fstring."\n".getenv("REMOTE_ADDR");
$fout= fwrite ($fd , $fcounted );
fclose($fd);
?>