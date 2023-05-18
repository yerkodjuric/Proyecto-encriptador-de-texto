var botonEncriptar = document.querySelector(".boton-encriptar");
var botonDesencriptar = document.querySelector(".boton-desencriptar");
var munieco = document.querySelector(".contenedor-munieco");
var contenedor = document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector(".texto-resultado");

botonEncriptar.addEventListener("click", encriptar);
botonDesencriptar.addEventListener("click", desencriptar);

function encriptar() {
  ocultarElementos();
  var cajatexto = recuperarTexto();
  resultado.textContent = encriptarTexto(cajatexto);
}

function desencriptar() {
  ocultarElementos();
  var cajatexto = recuperarTexto();
  resultado.textContent = desencriptarTexto(cajatexto);
}

function recuperarTexto() {
  var cajatexto = document.querySelector(".cajatexto");
  return cajatexto.value;
}

function ocultarElementos() {
  munieco.classList.add("ocultar");
  contenedor.classList.add("ocultar");
}

function encriptarTexto(mensaje) {
  var texto = mensaje;
  var textoFinal = "";

  for (var i = 0; i < texto.length; i++) {
    if (texto[i] === "a") {
      textoFinal += "ai";
    } else if (texto[i] === "e") {
      textoFinal += "enter";
    } else if (texto[i] === "i") {
      textoFinal += "imes";
    } else if (texto[i] === "o") {
      textoFinal += "ober";
    } else if (texto[i] === "u") {
      textoFinal += "ufat";
    } else {
      textoFinal += texto[i];
    }
  }

  return textoFinal;
}

function desencriptarTexto(mensaje) {
  var texto = mensaje;
  var textoFinal = "";

  for (var i = 0; i < texto.length; i++) {
    if (texto[i] === "a") {
      textoFinal += "a";
      i++;
    } else if (texto[i] === "e" && texto[i + 1] === "n" && texto[i + 2] === "t" && texto[i + 3] === "e" && texto[i + 4] === "r") {
      textoFinal += "e";
      i += 4;
    } else if (texto[i] === "i" && texto[i + 1] === "m" && texto[i + 2] === "e" && texto[i + 3] === "s") {
      textoFinal += "i";
      i += 3;
    } else if (texto[i] === "o" && texto[i + 1] === "b" && texto[i + 2] === "e" && texto[i + 3] === "r") {
      textoFinal += "o";
      i += 3;
    } else if (texto[i] === "u" && texto[i + 1] === "f" && texto[i + 2] === "a" && texto[i + 3] === "t") {
      textoFinal += "u";
      i += 3;
      } else {
      textoFinal += texto[i];
      }
      }
      
      return textoFinal;
      }
      
      var botonCopiar = document.querySelector(".boton-copiar");
      botonCopiar.addEventListener("click", function () {
      var contenido = document.querySelector(".texto-resultado").textContent;
      navigator.clipboard.writeText(contenido);
      });
