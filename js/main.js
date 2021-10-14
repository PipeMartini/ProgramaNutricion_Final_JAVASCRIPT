//--------------------------------------------------------------------------------------------------------------------------------------
//----------------genero un objeto al cual le doy valores, los cuales son cargados por el usuario.--------------------------------------
//----------------automaticamente se les da un valor id para poder identificar cada una de las dietas cargadas--------------------------
//--------------------------------------------------------------------------------------------------------------------------------------

class Dieta {
    constructor (area, subarea, ncama, pnombre, papellido, dietaseleccionada, descartable,menuinfantil, id){
        this.area = area;
        this.subarea = subarea;
        this.ncama = ncama;
        this.pnombre = pnombre;
        this.papellido = papellido;
        this.dietaseleccionada = dietaseleccionada;
        this.descartable = descartable;
        this.menuinfantil = menuinfantil;
        this.id = id;
    }
}
function dietasID() {
    let generadorID = localStorage.getItem("generadorID") || "0";
    let nuevogeneradorID = JSON.parse(generadorID) + 1;
    localStorage.setItem("generadorID", JSON.stringify(nuevogeneradorID))
    return nuevogeneradorID;
}

let dietas=[]
if (localStorage.getItem('dietas') != null) {
    dietas = JSON.parse(localStorage.getItem('dietas'));
};

let recolector = function() {
let id = dietasID();
let area = document.getElementById("Areas").textContent;

var subarea = document.getElementById("SubAreas");
if(subarea == null){
subarea = 'no se encontró valor'
}else{
subarea = document.getElementById("SubAreas").value
}

let cama = document.getElementById("Ncamas").value;
let nombre = document.getElementById("PacienteNombre").value;
let apellido = document.getElementById("PacienteApellido").value;
let dieta = document.getElementById("SeleccionDieta").value;
let descartable = document.getElementById("Descartable").checked;
var menuInfantil = document.getElementById("MenuInfantil");
if(menuInfantil == null){
    menuInfantil = 'No'
}else{
    if((document.getElementById("MenuInfantil").checked) == true){
        menuInfantil = 'Si'
    }else{
        menuInfantil = 'No'
    }
}
dietas.push(new Dieta (area, subarea, cama, nombre, apellido, dieta, descartable, menuInfantil, id));
localStorage.setItem("dietas",JSON.stringify(dietas));

console.log(id +"    Area: "+ area + "    Subarea:"+ subarea + "    n° de cama: " + cama +"    Nombre y apellido: "+ nombre +" "+ apellido + "    Tipo de dieta: " + dieta + "    Descartable: "+ descartable + " menuinfantil " + menuInfantil);

};
//--------------------------------------------------------------------------------------------------------------------------------------
//----------------ahora tengo que poder al hacer click eliminar los datos---------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------
document.getElementById("btnEliminar").addEventListener("click", function( event ) {
    let transactionrow = event.target.parentNode;
    let DietaId =transactionrow.getAttribure("infoDeId");
    transactionrow.remuve();
    console.log(DietaId)
    deletetransactionObj(DietaId);
})
function eliminar_di(eliminarID){ 
     let dietaObjArr = JSON.parse(localStorage.getItem("dietas"))
     let dietaIndexArray = dietaObjArr.findIndex(element => eliminarID === eliminarID);
     dietaIndexArray.splice(dietaIndexArray, 1);
     let recolector_eliminar = JSON.stringify(dietaIndexArray);
     localStorage.setitem("dietas", recolector_eliminar);
    // console.log(event.target.parentNode.parentNode.remove());
    // let dietasrecibidas_eliminar = JSON.parse(localStorage.getItem('dietas'));
    // for (let i = 0 ; i < dietasrecibidas_eliminar.length ; i ++)
    // dietasrecibidas_eliminar.splice([i],1);
     
    console.log(eliminar_di)
  };

 let recolector_eliminar = function() {
    let id = dietasID();
    let area = document.getElementById("Areas").arrayContent;
    var subarea = document.getElementById("SubAreas");
    if(subarea == null){
    subarea = 'no se encontró valor'
    }else{
    subarea = document.getElementById("SubAreas").value
    }
    let cama = document.getElementById("Ncamas").value;
    let nombre = document.getElementById("PacienteNombre").value;
    let apellido = document.getElementById("PacienteApellido").value;
    let dieta = document.getElementById("SeleccionDieta").value;
    let descartable = document.getElementById("Descartable").checked;
    var menuInfantil = document.getElementById("MenuInfantil");
    if(menuInfantil == null){
        menuInfantil = 'No'
    }else{
        if((document.getElementById("MenuInfantil").checked) == true){
            menuInfantil = 'Si'
        }else{
            menuInfantil = 'No'
    }}
    dietas.push(new Dieta (area, subarea, cama, nombre, apellido, dieta, descartable, menuInfantil, id));
    localStorage.setItem("dietas",JSON.stringify(dietas));
    console.log(id +"   Area: "+ area + "    Subarea:"+ subarea + "    n° de cama: " + cama +"    Nombre y apellido: "+ nombre +" "+ apellido + "    Tipo de dieta: " + dieta + "    Descartable: "+ descartable + " menuinfantil " + menuInfantil);
    };