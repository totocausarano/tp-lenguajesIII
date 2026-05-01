let nombres = []

boton = document.getElementById('agregar')
boton.addEventListener ('click',agregarNombre)
function agregarNombre (e){
    let inputElemento = document.getElementById('nombres')
   let nombre = inputElemento.value
   let punto = document.createElement('li')
   let lista = document.getElementById('listaNombres')
   punto.textContent = nombre
   lista.appendChild(punto)
   inputElemento.value = ''
}
function modificar (id,contenido){
    let input = document.getElementById(id)
    input.textContent = contenido
}
modificar('parrafo','hola ')
function gestionarClase (id,clase){
    let elemento = document.getElementById(id)
    elemento.classList.toggle(clase)
}
const select = document.getElementById('edadF')
for (let i = 0;i<50;i++){
    let opcion = document.createElement('option')
    opcion.textContent = i
    select.appendChild(opcion)
}
function formulario (e){
    e.preventDefault()
    let nombreFormulario = document.getElementById('nombreF')
    n = nombreFormulario.value
    let apellidFormulario = document.getElementById('apellidoF')
    a = apellidFormulario.value
    let edadFormulario = document.getElementById('edadF')
    e = edadFormulario.value
    let parrafoF = document.createElement('p')
    parrafoF.textContent = `El usuario se llama ${n} su apellido es ${a} y tiene ${e} años `
    document.body.appendChild(parrafoF);
}
botonF = document.getElementById('botonF')
botonF.addEventListener('click',formulario)
let usuarios = [
    { nombre: "Martin", edad: 20, foto: "https://via.placeholder.com/100" },
    { nombre: "Guillermina", edad: 18, foto: "https://via.placeholder.com/100" },
    { nombre: "Rosario", edad: 25, foto: "https://via.placeholder.com/100" }
];
const contenedor = document.getElementById('tarjetas')
function tarjetas (usuarios){
    usuarios.forEach(element => {
        let div = document.createElement('div')
        let nombreT = document.createElement('p')
        nombreT.textContent = element.nombre
        let edadT = document.createElement('p')
        edadT.textContent = element.edad
        let imagen = document.createElement('img')
        imagen.src = element.foto
        div.appendChild(nombreT)
        div.appendChild(edadT)
        div.appendChild(imagen)
        contenedor.appendChild(div)
    });
}
tarjetas(usuarios)