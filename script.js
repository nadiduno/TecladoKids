function digitar(event) {
  var x = event.keyCode;         // Obtém o valor Unicode (decimal)
  var y = String.fromCharCode(x);    // Converte o valor em um caractere
  document.getElementById("letra").innerHTML = y;  
}