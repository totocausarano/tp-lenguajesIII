
function doble (){
    let numero = Number(document.getElementById('inputNumero').value)
    let parrafo = document.getElementById('respuesta')
    if (isNaN(numero)){
    console.log("Porfavor ingrese un numero")
    }else {
        let valor = numero * 2
        parrafo.textContent = "El doble de " + numero + ' es: ' + valor
    }
    
}
function factorial (){
    let numero = Number(document.getElementById('inputNumero').value)
    let parrafo = document.getElementById('respuesta')
    let valor = 1
    if (isNaN(numero)){
    console.log("Porfavor ingrese un numero")
    }else {
        for (let i = numero; i >= 1;i--){
            valor = valor * i
        }
        parrafo.textContent = "El factorial de " + numero + ' es: ' + valor
    }
    
}
function esPrimo (){
    let numero = Number(document.getElementById('inputNumero').value)
    let parrafo = document.getElementById('respuesta')
    let esPrimo = true;
    
    if (isNaN(numero)){
    console.log("Porfavor ingrese un numero")
    }else {
        for (let i = 2;i<numero;i++){
            if (numero % i == 0){
                esPrimo = false; 
                break
            }
        }
        
    }
    if (esPrimo) {
        parrafo.textContent = "El número " + numero + " es primo";
    } else {
        parrafo.textContent = "El número " + numero + " no es primo";
    }
    
}