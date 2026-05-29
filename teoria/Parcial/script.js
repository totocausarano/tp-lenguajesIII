document.getElementById('inscripcion').addEventListener('submit', function(event){
    event.preventDefault();

    let nombreValido = comprobarNombre();
    let dniValido = comprobarDni();
    let fechaValido = comprobarFechaNac();
    let mensajeExito = document.getElementById('mensaje-exito');

    if (nombreValido && dniValido && fechaValido) {
        mensajeExito.innerHTML = "¡Inscripción realizada de forma correcta!";
    } else {
        mensajeExito.innerHTML = "";
    }
});

document.getElementById('btnPreguntas').addEventListener('click', ejecutarPreguntasProgresivas);

function comprobarNombre(){
    
    let nombreInput = document.getElementById('nombre').value.trim();
    let error = document.getElementById('errorNombre');

    if (nombreInput.length < 3){
        error.innerHTML = "El nombre debe tener al menos 3 caracteres";
        return false;
    }

    for (let i = 0; i < nombreInput.length; i++) {
        let letra = nombreInput[i].toLowerCase();

        
        if (!((letra >= 'a' && letra <= 'z') || letra === ' ' || letra === 'ñ')) {
            error.innerHTML = "El nombre solo puede contener letras (sin números ni caracteres especiales).";
            return false;
        }
    }
    error.innerHTML = "";
    return true;
}

function comprobarDni(){
    
    let dniInput = document.getElementById('dni').value.trim();
    let error = document.getElementById('errorDni');
    
    if (dniInput.length !== 8){
        error.innerHTML = "El DNI debe tener 8 caracteres";
        return false;
    }
    if (isNaN(dniInput)){
        error.innerHTML = "El DNI debe contener solo números";
        return false;
    }
    error.innerHTML = "";
    return true;
}

function comprobarFechaNac(){
    let fechaInput = document.getElementById('fechaNac').value;
    let error = document.getElementById('errorFecha');

    if (fechaInput === ""){
        error.innerHTML = "Por favor, agregue su fecha de nacimiento";
        return false;
    }
    let fechaNacimiento = new Date(fechaInput);
    let hoy = new Date();

    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    let mes = hoy.getMonth() - fechaNacimiento.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())){
        edad--;
    }
    if (edad < 18){
        error.innerHTML = "Debe ser mayor a 18";
        return false;
    }
    error.innerHTML = "";
    return true;
}

function ejecutarPreguntasProgresivas() {
    
    let nombreValido = comprobarNombre();
    let dniValido = comprobarDni();
    let fechaValido = comprobarFechaNac();
    
    
    if (nombreValido && dniValido && fechaValido) {
        
        
        let respuestas = document.getElementById("resultados-preguntas");
        
        
        let r1 = prompt("¿Cuál es tu nacionalidad?");
        if (r1 === null || r1.trim() === "") {
            r1 = "No respondió";
        }
        
       
        let r2 = prompt("¿Cuál es tu nivel de conocimiento en programación? (Básico / Intermedio / Avanzado)");
        if (r2 === null || r2.trim() === "") {
            r2 = "No respondió";
        }
        
        
        let r3 = prompt("¿Por qué elegiste esta carrera?");
        if (r3 === null || r3.trim() === "") {
            r3 = "No respondió";
        }
        
        
        respuestas.innerHTML = "<h5>Respuestas de la Encuesta:</h5>" +
                               "<p><strong>Pregunta 1:</strong> " + r1 + "</p>" + 
                               "<p><strong>Pregunta 2:</strong> " + r2 + "</p>" + 
                               "<p><strong>Pregunta 3:</strong> " + r3 + "</p>";
    }
}