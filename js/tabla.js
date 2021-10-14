let traerDatos = function () {
    let dietasrecibidas = JSON.parse(localStorage.getItem('dietas'));
    dietasrecibidas.sort((a, b) =>{
        const areaA = a.area.toLowerCase;
        const areaB = b.area.toLowerCase;
        if (areaA < areaB){
            return -1;
        }
        if (areaA > areaB){
            return 1;
        }
        return 0;
    });
    let html_content = '';
    for (let i = 0 ; i < dietasrecibidas.length ; i ++) {
            html_content += 
    `
                    <tr class="col-12" id="filaDieta" data-DietaId= ${dietasrecibidas[i].id}>
                        <th scope="row">${dietasrecibidas[i].area} </th>
                        <td>${dietasrecibidas[i].subarea}</td>
                        <td>${dietasrecibidas[i].ncama}</td>
                        <td>${dietasrecibidas[i].pnombre}</td>
                        <td>${dietasrecibidas[i].papellido}</td>
                        <td>${dietasrecibidas[i].dietaseleccionada}</td>
                        <td>${dietasrecibidas[i].descartable}</td>
                        <td>${dietasrecibidas[i].menuinfantil}</td>
                        <td><a id="btnEliminar" onclick="btnEliminar()" class=" btn-danger btn-sm active" role="button" aria-pressed="true">X</a></td>
                    </tr>
                    

            `            
    }
    document.getElementById("Tablasfull").innerHTML = html_content;
};
let eliminar_dieta = function () {
    let dietasrecibidas_eliminar = JSON.parse(localStorage.getItem('dietas'));
    for (let i = 0 ; i < dietasrecibidas_eliminar.length ; i ++)
    dietasrecibidas_eliminar.splice([i],1);
}
window.onload= traerDatos;