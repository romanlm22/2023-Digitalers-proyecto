/*Defino propiedades d emi objeto
-Descripcion
-titulo
-precio-
-imagen
-fecha de creacion
-id(automatico)


*/

const formularioProducto = document.getElementById("producForm")

formularioProducto.addEventListener('submit', () => {
    alert(`Evento submit`)
})

const consolas = [
    {
        descripcion: 'Consola de hogar con gráficos en alta definición.',
        titulo: 'PlayStation 5',
        fechaDeCreacion: '2020-11-12',
        precio: 499.99,
        imagen: 'https://www.cnet.com/a/img/resize/bebef835df90640f9aa2e4a2f2a2699cf53a301f/hub/2020/10/26/b60bfe6f-3193-4381-b0d4-ac628cdcc565/img-1419.jpg?auto=webp&width=1200',
        categoria: 'Consola de Hogar'
    },
    {
        descripcion: 'Consola portátil con pantalla táctil.',
        titulo: 'Nintendo Switch',
        fechaDeCreacion: '2017-03-03',
        precio: 299.99,
        imagen: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2023/01/nintendo-switch-2921302.jpg',
        categoria: 'Consola Portátil'
    },
    {
        descripcion: 'Consola de hogar con alta potencia y compatibilidad hacia atrás.',
        titulo: 'Xbox Series X',
        fechaDeCreacion: '2020-11-10',
        precio: 499.99,
        imagen: 'https://www.infobae.com/new-resizer/l0UsM401-2y3WTZlhd7SLL-A28A=/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/ALSWDCH7PJBJPG6WHP632NO7Q4.png',
        categoria: 'Consola de Hogar'
    },
    {
        descripcion: 'Consola clásica miniaturizada con juegos preinstalados.',
        titulo: 'NES Classic Edition',
        fechaDeCreacion: '2016-11-10',
        precio: 59.99,
        imagen: 'https://assets2.ignimgs.com/2016/07/25/nes-classic-edition-usjpg-7ceec8.jpg',
        categoria: 'Consola Retro'
    },
];

const tableBodyHTML = document.querySelector("#table-body")
console.log(consolas)

consolas.forEach(function(conso){
    
    tableBodyHTML.innerHTML += 
    `<tr>
    <td class="table-img">
          <img src="${conso.imagen}" alt="${conso.titulo}">
    </td>
    <td class="table-title">${conso.titulo}</td>
    <td class="table-description">${conso.descripcion}</td>
    <td class="table-price">${conso.precio}</td>
    <td class="table-category">${conso.categoria}</td>
  </tr>`

})


for(let consol of consolas){


}
/*
<tr>
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
*/

