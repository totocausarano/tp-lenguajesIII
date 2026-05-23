var historial = [];

function obtenerNumero() {
  var txtValor = document.getElementById("valor").value;
  document.getElementById("error").innerHTML = "";

  if (txtValor.trim() === "" || isNaN(txtValor)) {
    document.getElementById("error").innerHTML = 
      "<div class='alert alert-danger py-2 mb-0'><i class='bi bi-exclamation-triangle me-2'></i>Debe ingresar un número válido.</div>";
    return null;
  }
  return parseFloat(txtValor);
}

function convertir() {
  var numero = obtenerNumero();
  if (numero === null) {
    return;
  }

  var tipo = document.getElementById("tipoConversion").value;
  var resultado = 0;
  var mensaje = "";

  switch (tipo) {
    case "1":
      resultado = numero * 0.621371;
      mensaje = numero + " km equivalen a " + resultado.toFixed(2) + " millas";
      break;
    case "2":
      resultado = numero * 1.60934;
      mensaje = numero + " millas equivalen a " + resultado.toFixed(2) + " km";
      break;
    case "3":
      resultado = numero * 2.20462;
      mensaje = numero + " kg equivalen a " + resultado.toFixed(2) + " libras";
      break;
    case "4":
      resultado = numero * 0.453592;
      mensaje = numero + " libras equivalen a " + resultado.toFixed(2) + " kg";
      break;
    case "5":
      resultado = (numero * 9/5) + 32;
      mensaje = numero + " °C equivalen a " + resultado.toFixed(2) + " °F";
      break;
    case "6":
      resultado = (numero - 32) * 5/9;
      mensaje = numero + " °F equivalen a " + resultado.toFixed(2) + " °C";
      break;
    case "7":
      resultado = numero * 3.28084;
      mensaje = numero + " metros equivalen a " + resultado.toFixed(2) + " pies";
      break;
    default:
      mensaje = "Opción no válida";
  }

  document.getElementById("resultado").innerHTML = "<h4 class='alert-heading mb-0 text-dark fw-bold'>" + mensaje + "</h4>";
  
  historial.push(mensaje);
  mostrarHistorial();
}

function mostrarHistorial() {
  var html = "";
  for (var i = 0; i < historial.length; i++) {
    html += "<li class='list-group-item'><i class='bi bi-arrow-right-short me-2'></i>" + historial[i] + "</li>";
  }
  document.getElementById("listaHistorial").innerHTML = html;
}