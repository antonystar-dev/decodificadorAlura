
    function criptografar() {
        palavra=document.getElementById("areaTXT").value;
        
        var letras = ['a', 'e', 'i', 'o', 'u'];
        var traducoes = ['ai', 'enter', 'imes', 'ober', 'ufat'];
        
        for (var i = 0; i < letras.length; i++) {
            var regex = new RegExp(letras[i], "g");
            palavra = palavra.replace(regex, traducoes[i]);
        }
        document.getElementById("resultadoTxt").innerHTML=palavra;        
        window.alert(palavra);
    }
