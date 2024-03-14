const areaTXT = document.querySelector(".areaTXT");
const resultadoTxt = document.querySelector(".resultadoTxt");

function btnEncriptar() {
    const textoEncriptado = encriptar(areaTXT.value);
    resultadoTxt.value = textoEncriptado;
    areaTXT.value = "";

    const foto = document.querySelector(".menina")
    foto.style.visibility = "hidden";
    const txt1 = document.querySelector(".txtQuadro1")
    txt1.style.visibility = "hidden";
    const txt2 = document.querySelector(".txtQuadro2")
    txt2.style.visibility = "hidden";
    document.getElementById("btCopy").style.display = 'block';
    document.getElementById("resultTXT").style.display = 'block';

}

function copiarTexto() {
    var textarea = document.getElementById("resultTXT");
    textarea.select();
    document.execCommand("copy");
    alert("Texto copiado para a area de transferencia!");
}







function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(areaTXT.value);
    resultadoTxt.value = textoDesencriptado;
    areaTXT.value = "";
}
function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

