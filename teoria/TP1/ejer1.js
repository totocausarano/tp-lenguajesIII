const readline = require('node:readline/promises');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function numPares (array) {
    for (let i =0; i < array.length;i++){
        if (array[i] % 2 == 0){
            console.log(array[i])
        }
    }
}
let x = [1,2,3,4,5,6]


function repetidos (array){
    let unicos = []
    for (let i = 0;i <array.length;i++){
        if (!unicos.includes(array[i])){
            unicos.push(array[i])
        }
    }
    console.log(unicos)
}
let y = [1,1,2,3,4,4,4,5,6,6]

function orden (array){
    ordenado = array.sort()
    console.log(ordenado)
}
let o = ['c','b','a']

function total (array){
    let suma = 0
    for (let i = 0;i<array.length;i++){
        suma += array[i]
    }
    console.log(suma)
}
let t = [1,2,3,4,5]
total(t)
async function busqueda (array){
  let  busca = await rl.question('Agregue el nombre que deseee buscar: ')
  indice = array.indexOf(busca)
  console.log(indice)

}
let nombres = ['Martin','Elena','Florencia']
busqueda(nombres)