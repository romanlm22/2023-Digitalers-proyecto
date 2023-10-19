/*Defino propiedades d emi objeto
-Descripcion
-titulo
-precio-
-imagen
-fecha de creacion
-id(automatico)


*/
const tableBodyHTML = document.querySelector("#table-body")

const inputFiltrar = document.getElementById("filtrar")

let idEditar;

const formularioProducto = document.getElementById("producForm")

formularioProducto.addEventListener('submit', (eventoEjecutado) => {
    eventoEjecutado.preventDefault()

    const el = formularioProducto.elements

    //const id = idEditar === undefined ? crypto.randomUUID(): idEditar

    let id;
    if(idEditar){
        id = idEditar
    }else{
        id = crypto.randomUUID()
    }

    const nuevoProducto = {
        id: id,
        titulo : el.titulo.value,
        descripcion: el.descripcion.value,
        precio: el.precio.valueAsNumber,
        imagen: el.imagen.value,
        categoria: el.categoria.value,
        fechaDeCreacion: obtenerFecha(),
        cantidad: 10,
    }

    if(idEditar){
        const index = consolas.findIndex(consolas => {
            return consolas.id === idEditar
        })
        consolas[index] = nuevoProducto;
        idEditar = undefined
        btn.innerText = "Agregar"
        btn.classList.remove(nuevoProducto)

    }else{
    consolas.push(nuevoProducto)
    }

    Swal.fire({
        icon: 'success',
        title: 'Oops...',
        text: 'El productop se actualizo o se agregar a la lista',
    })


    pintarProductos(consolas)

    localStorage.setItem("productos", JSON.stringify(consolas))

    formularioProducto.reset()
    el.titulo.focus()
})


function obtenerFecha(){
    const fecha = new Date()
    let mes = fecha.getMonth()+1
    if(mes < 10){
        mes = "0" + mes
    }
    const yea = fecha.getFullYear
    let dia = fecha.getDate()
    if(dia < 10){
        dia = "0" + dia
    }
    const fechaFormateada = `${yea}-${mes}-${dia}`

    return fechaFormateada
}

const borrarProductos = (idAbuscar) =>{
    const indiceEncontrado = consolas.findIndex((productoFin) => {
        if(productoFin.id === idAbuscar){
            return true
        }
        return false
    })
    consolas.splice(indiceEncontrado, 1)
    pintarProductos(consolas)


    localStorage.setItem("productos", JSON.stringify(consolas))
    Swal.fire('Borrado', 'Producto eliminado', 'success')
}

/*const borrarProducto = (idAbuscar)=>{
    Swal.fire({
        title: 'Desea borrar',
        icon: 'error',
        text: 'Realmente desealo borrar',
        showCloseButton: true,
        showCancelButton: true,
        cancelButtonText : 'Cancelar',
        confirmButtonText: 'Borrar',

    }).then((resultado) => {
        if(resultado.isConfirmed){
            const indiceEncontrado = consolas.findIndex((productoFin) => {
                if(productoFin.id === idAbuscar){
                    return true
                }
                return false
            })
            consolas.splice(indiceEncontrado, 1)
            pintarProductos(consolas)
            Swal.fire('Borrado', 'Producto eliminado', 'success')
        }
    })
}
*/


const editarProductos = function(idAbuscar){
    //Opcion 1
   /* console.log(`Editar elemento ${idAbuscar}`)

    const productoeditar = consolas.filter(prod => {
        if(idAbuscar === prod.id){
            return true
        }
        return false
    })

    console.log(productoEditar[0])
    

    //opcion 2
    const prodIndex = consolas.findIndex(prod => {
        if(prod.id === idAbuscar){
            return true
        }
    })
    const productoEditar = consolas[0]
    */

    //opcion3


    console.log(`Editar elemento ${idAbuscar}`)

    const productoEditar = consolas.find(prod => {
        if(prod.id === 1){
            return true
        }
    })

        if(!productoEditar)return;


    const elements = formularioProducto.elements;
    
    elements.titulo.value = productoEditar.titulo
    elements.precio.value = productoEditar.precio
    elements.descripcion.value = productoEditar.descripcion
    elements.imagen.value = productoEditar.imagen
    elements.categoria.value = productoEditar.categoria


    const btn = document.querySelector('button.btn[type="submit"]')
    btn.innerHTML = "Agregar Producto"
    btn.classList.remove("btn-success")
}

/**function obtenerBotones(){
const deleteButtons = document.querySelectorAll(".btn-delete")
    
    console.log(deleteButtons)
    
    deleteButtons.forEach((btn, indice) =>{
        btn.addEventListener('click', ()=>{
            borrarProductos(indide)
        })
    })
}

obtenerBotones()
*/

let consolas = JSON.parse(localStorage.getItem("productos")) || consolasPrimerInicio

if(JSON.parse(localStorage.getItem("productos"))===NULL){
    localStorage.setItem("productos", JSON.stringify(consolas))
}

console.log(consolas)

let consolasPrimerInicio = [
    {
        id: 'fqnfqi-2332124-13341',
        descripcion: 'Consola de hogar con gráficos en alta definición.',
        titulo: 'PlayStation 5',
        fechaDeCreacion: '2020-11-12',
        precio: 499.99,
        imagen: 'https://www.cnet.com/a/img/resize/bebef835df90640f9aa2e4a2f2a2699cf53a301f/hub/2020/10/26/b60bfe6f-3193-4381-b0d4-ac628cdcc565/img-1419.jpg?auto=webp&width=1200',
        categoria: 'consolas'
    },
    {
        id: 'fqnfqi-2332124-FNAUUF',
        descripcion: 'Consola portátil con pantalla táctil.',
        titulo: 'Nintendo Switch',
        fechaDeCreacion: '2017-03-03',
        precio: 299.99,
        imagen: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2023/01/nintendo-switch-2921302.jpg',
        categoria: 'consolas'
    },
    {
        id: 'fqnfqi-2332124FHAFHUAF-',
        descripcion: 'Consola de hogar con alta potencia y compatibilidad hacia atrás.',
        titulo: 'Xbox Series X',
        fechaDeCreacion: '2020-11-10',
        precio: 499.99,
        imagen: 'https://www.infobae.com/new-resizer/l0UsM401-2y3WTZlhd7SLL-A28A=/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/ALSWDCH7PJBJPG6WHP632NO7Q4.png',
        categoria: 'consolas'
    },
    {
        id: 'fqnfqi-233EFU-134872',
        descripcion: 'Consola clásica miniaturizada con juegos preinstalados.',
        titulo: 'NES Classic Edition',
        fechaDeCreacion: '2016-11-10',
        precio: 59.99,
        imagen: 'https://assets2.ignimgs.com/2016/07/25/nes-classic-edition-usjpg-7ceec8.jpg',
        categoria: 'consolas'
    },
];


inputFiltrar.addEventListener('keyup', (evt) => {

    const busqueda = evt.target.value.toLowerCase(); 

    const resultado = consolas.filter((producto) => {
        const titulo = producto.titulo.toLowerCase()

        if(titulo.includes(busqueda)){
            return true
        }
        return false
    })
    pintarProductos(resultado)

})
//el elemento .pop quitar el ultimo elemento

console.log(consolas)

function pintarProductos(arrayPintar){

    tableBodyHTML.innerHTML = "";
    arrayPintar.forEach(function(conso, indice){
        
        tableBodyHTML.innerHTML += 
        `<tr>
        <td class="table-img">
              <img src="${conso.imagen}" alt="${conso.titulo}">
        </td>
        <td class="table-title">${conso.titulo}</td>
        <td class="table-description">${conso.descripcion}</td>
        <td class="table-price">${conso.precio}</td>
        <td class="table-category">${conso.categoria}</td>
        <td>
            <div class="d-flex">
            <button class="btn btn-danger btn-sm" onclick="borrarProductos('${conso.id}')">
                <i class="fa-solid fa-trash"></i>
            </button>
            <button class="btn btn-success btn-sm"  onclick="editarProductos('${conso.id}')">
                <i class="fa-solid fa-pen-to-square"></i>
            </button>
            </div>
        </td>
      </tr>`
    
    })
    const tablaHTML = document.getElementById("tabla")
    tableBodyHTML.innerHTML += `Cantidad ${consolas.length}`
}


pintarProductos(consolas)




/*
duplicar array y evitar referencia entre ambos

array1 = [1,2,3,4]
    #1
    array2 = array1.slice()
    #2
    array2 = array.from(array1)
    #3

*/

for(let consol of consolas){
    
    
}
/*
<tr>
function clickeado(eventillo){
    console.log(eventillo)
}
              <td class="table-img">
                    <img src="https://www.cnet.com/a/img/resize/bebef835df90640f9aa2e4a2f2a2699cf53a301f/hub/2020/10/26/b60bfe6f-3193-4381-b0d4-ac628cdcc565/img-1419.jpg?auto=webp&width=1200" alt="">
              </td>
              <td class="table-title">ps5</td>
              <td class="table-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, corporis.</td>
              <td class="table-price">1000</td>
              <td class="table-category">Consolas</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>


            function darBienvenida(nombreUsuario){
                console.log(`Hola ${nombreUsuario}, bienvenido a mi sitio web`)
            
            }
            
            darBienvenida("Roman")
            darBienvenida("Maximiliano")
*/
