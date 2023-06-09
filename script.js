const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copia = document.querySelector(".btn-copiar");
const informacion = document.querySelector(".informacion");
// copia.style.display = "none"

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar() {
  if(!validarTexto()) {
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
  }
}

function btnDesncriptar() {
  const textoEncriptado = desencriptar(textArea.value)
  mensaje.value = textoEncriptado
  textArea.value = "";
}

function encriptar(strinEncriptarParametro) {
  let matrizCodigo = [{"e": "enter"}, {"i": "imes"}, {"a": "ai"}, {"o": "ober"}, {"u": "ufat"}];
  strinEncriptarParametro = strinEncriptarParametro.toLowerCase()
  matrizCodigo.forEach(objeto => {
    const keys = Object.keys(objeto);
    keys.forEach(key => {
      if (strinEncriptarParametro.includes(key)) {
        strinEncriptarParametro = strinEncriptarParametro.replaceAll(key, objeto[key]);
      }
    });
  });
  return strinEncriptarParametro;
}

function desencriptar(strinDesncriptarParametro) {
  let matrizCodigo = [{"enter": "e"}, {"imes": "i"}, {"ai": "a"}, {"ober": "o"}, {"ufat": "u"}];
  strinDesncriptarParametro = strinDesncriptarParametro.toLowerCase()
  matrizCodigo.forEach(objeto => {
    const keys = Object.keys(objeto);
    keys.forEach(key => {
      if (strinDesncriptarParametro.includes(key)) {
        strinDesncriptarParametro = strinDesncriptarParametro.replaceAll(key, objeto[key]);
      }
    });
  });
  return strinDesncriptarParametro;
}

function copiar(){
  mensaje.select();
  navigator.clipboard.writeText(mensaje.value)
  alert("Texto Copiado")
}

function pegar(){
  textArea.value = mensaje.value;
}

function validarTexto(){
  let textoEscrito = document.querySelector(".text-area").value;
  let validador = textoEscrito.match(/^[a-z]*$/);
  if(!validador || validador === 0) {
      informacion.style.color = "red";
      textArea.value = "";
      alert("Solo son permitidas letras minúsculas y sin acentos")
      return true;
  }
  informacion.style.color = "green";
}