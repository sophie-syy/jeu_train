<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Rails Dynamiques</title>
    <link rel="stylesheet" href="./style/style.css">
</head>
<body>

<div class="container">
    <div class="square black"></div>
    <div class="square purple"></div>
    <div class="square green"></div>
    <div class="square yellow"></div>
    <div class="square orange"></div>

    <div class="line horizontal"></div>
    <div class="line vertical v1"></div>
    <div class="line vertical v2"></div>
    <div class="line vertical v3"></div>
    <div class="line vertical v4"></div>

    <button id="rail1" class="circle circle1" data-rail="rail1"><img src="./ressources/down.png"></button>
    <button id="rail2" class="circle circle2" data-rail="rail2"><img src="./ressources/down.png"></button>
    <button id="rail3" class="circle circle3" data-rail="rail3"><img src="./ressources/down.png"></button>
    <button id="rail4" class="circle circle4" data-rail="rail4"><img src="./ressources/down.png"></button>

    <div id="train" class="train"></div>
</div>

<script src="script.js"></script>
</body>
</html>
