
    function criptografar() {
        palavra=document.getElementById("areaTXT").value;
        

        var letras = ['a', 'e', 'i', 'o', 'u'];
        var traducoes = ['ai', 'enter', 'imes', 'ober', 'ufat'];
    
        // Substituímos cada letra pela sua tradução correspondente
        for (var i = 0; i < letras.length; i++) {
            var regex = new RegExp(letras[i], "g");
            palavra = palavra.replace(regex, traducoes[i]);
        }
    



        document.getElementById("resultadoTxt").innerHTML=palavra;        
        window.alert(palavra);
    }
    function decriptografar() {
        palavra=document.getElementById("areaTXT").value;
        var traducoes = ['ai', 'enter', 'imes', 'ober', 'ufat'];
        var letras = ['a', 'e', 'i', 'o', 'u'];
        
        for (var i = 0; i < traducoes.length; i++) {
            var regex = new RegExp(traducoes[i], "g");
            palavra = palavra.replace(regex, letras[i]);
        }
        document.getElementById("resultadoTxt").innerHTML=palavra;        
        window.alert(palavra);
    }