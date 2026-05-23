var numeros = [];

function agregarNumero() {
  var inputElement = document.getElementById("numero");
  var valorRaw = inputElement.value;
  document.getElementById("error").innerHTML = "";

  if (valorRaw.trim() === "" || isNaN(valorRaw)) {
    document.getElementById("error").innerHTML = 
      "<div class='alert alert-danger py-2 mb-0'><i class='bi bi-exclamation-triangle me-2'></i>Error: Entrada inválida.</div>";
    return;
  }

  var numValido = parseFloat(valorRaw);
  numeros.push(numValido);

  mostrarNumeros();
  calcularEstadisticas();

  inputElement.value = "";
  inputElement.focus();
}

function mostrarNumeros() {
  if (numeros.length === 0) {
    document.getElementById("listaNumeros").innerHTML = "Ningún número en el arreglo.";
    return;
  }

  var cadena = "";
  for (var i = 0; i < numeros.length; i++) {
    cadena += numeros[i];
    if (i < numeros.length - 1) {
      cadena += ", ";
    }
  }
  
  document.getElementById("listaNumeros").innerHTML = 
    "<p class='mb-1 fs-5 fw-bold text-dark'>" + cadena + "</p>" +
    "<span class='badge bg-dark'>Total elementos: " + numeros.length + "</span>";
}

function calcularEstadisticas() {
  if (numeros.length === 0) {
    document.getElementById("estadisticas").innerHTML = "Sin datos para calcular estadísticas.";
    return;
  }

  var suma = 0;
  var positivos = 0;
  var negativos = 0;
  var mayor = numeros[0];
  var menor = numeros[0];

  var i = 0;
  while (i < numeros.length) {
    var actual = numeros[i];
    
    suma = suma + actual;

    if (actual > 0) {
      positivos = positivos + 1;
    } else if (actual < 0) {
      negativos = negativos + 1;
    }

    if (actual > mayor) {
      mayor = actual;
    }

    if (actual < menor) {
      menor = actual;
    }

    i = i + 1;
  }

  var promedio = suma / numeros.length;

  var html = "<ul class='list-group list-group-flush'>";
  html += "<li class='list-group-item d-flex justify-content-between'><strong>Suma total:</strong> <span>" + suma + "</span></li>";
  html += "<li class='list-group-item d-flex justify-content-between'><strong>Promedio:</strong> <span>" + promedio.toFixed(2) + "</span></li>";
  html += "<li class='list-group-item d-flex justify-content-between'><strong>Positivos:</strong> <span class='badge bg-success'>" + positivos + "</span></li>";
  html += "<li class='list-group-item d-flex justify-content-between'><strong>Negativos:</strong> <span class='badge bg-danger'>" + negativos + "</span></li>";
  html += "<li class='list-group-item d-flex justify-content-between'><strong>Valor Máximo:</strong> <span class='text-success fw-bold'>" + mayor + "</span></li>";
  html += "<li class='list-group-item d-flex justify-content-between'><strong>Valor Mínimo:</strong> <span class='text-danger fw-bold'>" + menor + "</span></li>";
  html += "</ul>";

  document.getElementById("estadisticas").innerHTML = html;
}

function tablaMultiplicar() {
  if (numeros.length === 0) {
    document.getElementById("tabla").innerHTML = "<div class='text-danger fst-italic'>El arreglo está vacío. Ingrese números primero.</div>";
    return;
  }

  var objetivo = numeros[numeros.length - 1];
  var html = "<h5>Tabla del " + objetivo + " (Último número)</h5>";
  html += "<div class='font-monospace bg-light p-2 border rounded'>";

  for (var k = 1; k <= 10; k++) {
    var prod = objetivo * k;
    html += objetivo + " x " + k + " = " + prod + "<br>";
  }

  html += "</div>";
  document.getElementById("tabla").innerHTML = html;
}

function reiniciar() {
  numeros = [];
  document.getElementById("listaNumeros").innerHTML = "Ningún número en el arreglo.";
  document.getElementById("estadisticas").innerHTML = "Sin datos para calcular estadísticas.";
  document.getElementById("tabla").innerHTML = "No se ha solicitado ninguna tabla.";
  document.getElementById("error").innerHTML = "";
  document.getElementById("numero").value = "";
  document.getElementById("numero").focus();
}