var textInput = document.querySelector("#text");
var msgInput = document.querySelector("#msg");


function criptografar(){

  var texto = textInput.value;

  var criptografar = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat")

  
  document.getElementById('msg').innerHTML = '<textarea readonly id="text">' + criptografar + 
  '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function descriptografar(){

    var texto = textInput.value;

    var descriptografar = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
  
    document.getElementById('msg').innerHTML = '<textarea readonly id="text">' + descriptografar + 
    '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function copiar() {
    var txtCop = document.getElementById('text');
  
    txtCop.select();
    document.execCommand('copy');
    alert("Texto copiado.");
}  