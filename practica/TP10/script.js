let pasoActual = 1;

const btnSiguiente = document.getElementById("btn-siguiente");
const btnRetroceder = document.getElementById("btn-retroceder");
const btnReiniciar = document.getElementById("btn-reiniciar");
const cartelExito = document.getElementById("cartel-exito");

function validarTextoGenerico(valor) {
    if (valor.trim().length < 3) {
        return false;
    }
    let regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    return regex.test(valor);
}

function validarPaso1() {
    let input = document.getElementById("p1-nombre");
    return validarTextoGenerico(input.value);
}

function validarPaso2() {
    let select = document.getElementById("p2-raza");
    return select.value !== "";
}

function validarPaso3() {
    let select = document.getElementById("p3-clase");
    return select.value !== "";
}

function validarPaso4() {
    let input = document.getElementById("p4-reino");
    return validarTextoGenerico(input.value);
}

function validarPaso5() {
    let input = document.getElementById("p5-arma");
    return validarTextoGenerico(input.value);
}

function validarPaso6() {
    let input = document.getElementById("p6-registro").value;
    if (isNaN(input) || input.trim() === "") {
        return false;
    }
    return input.length === 6;
}

function validarPaso7() {
    let input = document.getElementById("p7-vida").value;
    if (isNaN(input) || input.trim() === "") {
        return false;
    }
    let numero = parseInt(input, 10);
    return numero >= 1 && numero <= 999;
}

function validarPaso8() {
    let input = document.getElementById("p8-batallas").value;
    if (isNaN(input) || input.trim() === "") {
        return false;
    }
    let numero = parseInt(input, 10);
    return numero >= 0;
}

function validarPaso9() {
    let input = document.getElementById("p9-nacimiento").value;
    if (!input) return false;

    let fechaNac = new Date(input);
    let hoy = new Date();

    let edad = hoy.getFullYear() - fechaNac.getFullYear();
    let mes = hoy.getMonth() - fechaNac.getMonth();
    
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
        edad--;
    }
    return edad >= 18;
}

function validarPaso10() {
    let input = document.getElementById("p10-aventura").value;
    if (!input) return false;

    let fechaAvent = new Date(input);
    let hoy = new Date();
    
    hoy.setHours(0,0,0,0);
    fechaAvent.setHours(0,0,0,0);

    return fechaAvent <= hoy;
}

function ejecutarValidacion(paso) {
    switch(paso) {
        case 1: return validarPaso1();
        case 2: return validarPaso2();
        case 3: return validarPaso3();
        case 4: return validarPaso4();
        case 5: return validarPaso5();
        case 6: return validarPaso6();
        case 7: return validarPaso7();
        case 8: return validarPaso8();
        case 9: return validarPaso9();
        case 10: return validarPaso10();
        default: return false;
    }
}

function obtenerInputPorPaso(paso) {
    switch(paso) {
        case 1: return document.getElementById("p1-nombre");
        case 2: return document.getElementById("p2-raza");
        case 3: return document.getElementById("p3-clase");
        case 4: return document.getElementById("p4-reino");
        case 5: return document.getElementById("p5-arma");
        case 6: return document.getElementById("p6-registro");
        case 7: return document.getElementById("p7-vida");
        case 8: return document.getElementById("p8-batallas");
        case 9: return document.getElementById("p9-nacimiento");
        case 10: return document.getElementById("p10-aventura");
        default: return null;
    }
}

function limpiarEstilosPaso(paso) {
    let input = obtenerInputPorPaso(paso);
    let errorDiv = document.getElementById("error-" + paso);
    if(input) {
        input.classList.remove("borde-rojo", "borde-verde", "borde-gris");
    }
    if(errorDiv) {
        errorDiv.innerHTML = "";
    }
}

function manejarSiguiente() {
    let input = obtenerInputPorPaso(pasoActual);
    let errorDiv = document.getElementById("error-" + pasoActual);
    
    if (input.value.trim() === "") {
        input.classList.remove("borde-rojo", "borde-verde");
        input.classList.add("borde-gris");
        errorDiv.innerHTML = "El campo no puede estar vacío.";
        return;
    }

    let esValido = ejecutarValidacion(pasoActual);

    if (!esValido) {
        input.classList.remove("borde-gris", "borde-verde");
        input.classList.add("borde-rojo");
        errorDiv.innerHTML = "El dato ingresado es inválido o no cumple los requisitos.";
        return;
    }

    input.classList.remove("borde-gris", "borde-rojo");
    input.classList.add("borde-verde");
    input.disabled = true;
    errorDiv.innerHTML = "";

    if (pasoActual === 10) {
        finalizarRegistro();
    } else {
        document.getElementById("paso-" + pasoActual).classList.add("oculto");
        pasoActual++;
        document.getElementById("paso-" + pasoActual).classList.remove("oculto");
        btnRetroceder.disabled = false;
    }
}

function manejarRetroceder() {
    if (pasoActual > 1) {
        document.getElementById("paso-" + pasoActual).classList.add("oculto");
        limpiarEstilosPaso(pasoActual);
        
        pasoActual--;
        
        let inputAnterior = obtenerInputPorPaso(pasoActual);
        inputAnterior.disabled = false;
        limpiarEstilosPaso(pasoActual);
        
        document.getElementById("paso-" + pasoActual).classList.remove("oculto");
        
        if (pasoActual === 1) {
            btnRetroceder.disabled = true;
        }
    }
}

function manejarReiniciar() {
    for (let i = 1; i <= 10; i++) {
        let input = obtenerInputPorPaso(i);
        input.value = "";
        input.disabled = false;
        limpiarEstilosPaso(i);
        document.getElementById("paso-" + i).classList.add("oculto");
    }
    
    pasoActual = 1;
    document.getElementById("paso-1").classList.remove("oculto");
    btnRetroceder.disabled = true;
    
    document.getElementById("controles").classList.remove("oculto");
    cartelExito.classList.add("oculto");
    cartelExito.innerHTML = "";
}

function finalizarRegistro() {
    document.getElementById("controles").classList.add("oculto");
    
    let nombre = document.getElementById("p1-nombre").value;
    let raza = document.getElementById("p2-raza").value;
    let clase = document.getElementById("p3-clase").value;
    
    cartelExito.innerHTML = "¡Registro exitoso, " + nombre + "! Tu leyenda comienza hoy. ¡Que la Gran Alianza guíe tus pasos, " + clase + " de los " + raza + "!";
    cartelExito.classList.remove("oculto");
}

btnSiguiente.addEventListener("click", manejarSiguiente);
btnRetroceder.addEventListener("click", manejarRetroceder);
btnReiniciar.addEventListener("click", manejarReiniciar);