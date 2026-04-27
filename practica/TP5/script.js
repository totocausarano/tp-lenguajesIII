document.getElementById('registroForm').addEventListener('submit', function (e) {
    // Evitamos que el formulario se envíe automáticamente
    e.preventDefault();

    // Limpiar errores previos
    limpiarErrores();

    // Captura de valores
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const email = document.getElementById('email').value.trim();
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    let esValido = true;

    // 1 y 2. Validación de Nombre y Apellido (Solo letras y > 3 caracteres)
    const regexLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

    if (nombre.length <= 3 || !regexLetras.test(nombre)) {
        mostrarError('errorNombre', 'nombre', 'Debe contener solo letras y más de 3 caracteres.');
        esValido = false;
    }

    if (apellido.length <= 3 || !regexLetras.test(apellido)) {
        mostrarError('errorApellido', 'apellido', 'Debe contener solo letras y más de 3 caracteres.');
        esValido = false;
    }

    // 3. Email Institucional (@ucasal.edu.ar)
    // El regex valida formato general y el endsWith valida el dominio específico de la facu
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email) || !email.toLowerCase().endsWith('@ucasal.edu.ar')) {
        mostrarError('errorEmail', 'email', 'Debe ser un correo institucional válido (@ucasal.edu.ar).');
        esValido = false;
    }

    // 4. Fecha de Nacimiento (Más de 18 y menos de 40 años)
    if (!fechaNacimiento) {
        mostrarError('errorFecha', 'fechaNacimiento', 'La fecha es obligatoria.');
        esValido = false;
    } else {
        const hoy = new Date();
        const fechaNac = new Date(fechaNacimiento);
        let edad = hoy.getFullYear() - fechaNac.getFullYear();
        const mes = hoy.getMonth() - fechaNac.getMonth();

        // Ajuste por si aún no cumplió años este año
        if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
            edad--;
        }

        if (edad < 18 || edad >= 40) {
            mostrarError('errorFecha', 'fechaNacimiento', `Debes tener entre 18 y 39 años. (Edad actual: ${edad})`);
            esValido = false;
        }
    }

    // 5. Contraseñas (Iguales)
    if (password === "" || confirmPassword === "") {
        mostrarError('errorPassword', 'password', 'La contraseña es obligatoria.');
        esValido = false;
    } else if (password !== confirmPassword) {
        mostrarError('errorConfirmPassword', 'confirmPassword', 'Las contraseñas no coinciden.');
        esValido = false;
    }

    // Si todo está ok
    if (esValido) {
        document.getElementById('mensajeExito').classList.remove('d-none');
        console.log("Datos enviados:", { nombre, apellido, email, fechaNacimiento });
        // Aquí podrías limpiar el form con: this.reset();
    }
});

// Función auxiliar para mostrar errores
function mostrarError(idError, idInput, mensaje) {
    const contenedor = document.getElementById(idError);
    const input = document.getElementById(idInput);
    
    contenedor.textContent = mensaje;
    contenedor.style.display = 'block';
    input.classList.add('is-invalid');
}

// Función para limpiar estados de error
function limpiarErrores() {
    const errores = document.querySelectorAll('.error-feedback');
    const inputs = document.querySelectorAll('.form-control');
    const exito = document.getElementById('mensajeExito');

    errores.forEach(e => e.style.display = 'none');
    inputs.forEach(i => i.classList.remove('is-invalid'));
    exito.classList.add('d-none');
}