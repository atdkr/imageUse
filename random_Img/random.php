<?php

$setimg = Array (
        "output1.png",
        "output2.png",
        "output3.png"
);

$num = rand(0,2);

$link = "./" . $setimg[$num];
header("Location: ".$link);

?>
