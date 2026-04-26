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
repetidos(y)