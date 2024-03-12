<?php

$palavraNatural = 'o gato caiu da sacada';
$letras = array('a', 'e', 'i', 'o', 'u');
$traducoes = array('ai', 'enter', 'imes', 'ober', 'ufat');

$palavraCriptografada = strtr($palavraNatural, array_combine($letras, $traducoes));
echo $palavraCriptografada . '</br>';

$palavraNova = $palavraCriptografada;
$traducoes2 = array("ai", "enter", "imes", "ober", "ufat");

$palavraDecriptografada = strtr($palavraNova, array_combine($traducoes2, $letras));
echo $palavraDecriptografada;
?>




