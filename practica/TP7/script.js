const ulr = 'https://rickandmortyapi.com/api/character'
const boton = document.getElementById('btnBuscar')
boton.addEventListener('click',() => {
    buscar()
})

function buscar (){
    const valor = document.getElementById('busqueda').value
    let resultado = document.getElementById('resultado')
    let urlFinal = '';
    if (valor == ""){
        resultado.textContent = 'Porfavor ingresar un nombre o ID'
    }
    if (isNaN(valor)){
        urlFinal = `https://rickandmortyapi.com/api/character/?name=${valor}`

    }else{
        urlFinal = `https://rickandmortyapi.com/api/character/${valor}`
    }
   fetch(urlFinal)
        .then (Response => Response.json())
        .then(data => {
            let personaje = data.results ? data.results[0] : data;
            if (personaje.status == 'Alive'){
                colorBorde = 'border border-success'
            }
            if (personaje.status == 'Dead'){
                colorBorde = 'border border-danger'
            }
            if (personaje.status == 'unknown'){
                colorBorde = 'border border-secondary'
            }
        const cardHTML = `
            <div class="card" style="width: 18rem;">
                <img src="${personaje.image}" class="card-img-top" alt="...">
                <div class="card-body ${colorBorde}">
                    <h5 class="card-title">${personaje.name}</h5>
                    <p class="card-text">${personaje.status}.</p>
                    <p class="card-text">${personaje.species}.</p>
                    <p class="card-text">${personaje.location.name}.</p>
                </div>
            </div>
        
        `
            resultado.innerHTML = cardHTML
        })
   
}