// llama al JSON y le otorga los nombres a las dietas en la tabla
let mostrar= ""
fetch("json/areas.json")
.then(res=> res.json())
.then(data => {
    mostrar =`
    <th scope="row">${data.area}</th>
    <th scope="col">${data.variable_12}</th>
    <th scope="col">${data.variable_11}</th>
    <th scope="col">${data.variable_10}</th>
    <th scope="col">${data.variable_9}</th>
    <th scope="col">${data.variable_8}</th>
    <th scope="col">${data.variable_7}</th>
    <th scope="col">${data.variable_6}</th>
    <th scope="col">${data.variable_5}</th>
    <th scope="col">${data.variable_4}</th>
    <th scope="col">${data.variable_3}</th>
    <th scope="col">${data.variable_2}</th>
    <th scope="col">${data.variable_1}</th>
    `
    console.log(mostrar)
    document.getElementById("nombreDietas").innerHTML= mostrar
});

// contadores de dietas.
function TodasLasDietas(){
    function Pediatria() {
        const contadorDeDietas = JSON.parse(localStorage.getItem('dietas'));
            //divido por area pediatria
            let cocinaPediatria = contadorDeDietas.filter(x => x.area == 'Pediatria');
            //separo por dieta
            const generalCPBlando = cocinaPediatria.filter(x => x.dietaseleccionada == 'General c/p. blando' ).length;
            //separo en DES e infantil
            const generalCPBlandoDESCinfantil =cocinaPediatria.filter(x => x.dietaseleccionada == 'General c/p. blando').filter( x => x.descartable === true ).filter( x => x.menuinfantil === "Si" ).length;
            //separo en infantil
            const generalCPBlandoInfantil =cocinaPediatria.filter(x => x.dietaseleccionada == 'General c/p. blando').filter( x => x.descartable === false ).filter( x => x.menuinfantil === "Si" ).length;
            //separo en Adultos DES
            const generalCPBlandoAdultoDESC =cocinaPediatria.filter(x => x.dietaseleccionada == 'General c/p. blando').filter( x => x.descartable === true ).filter( x => x.menuinfantil === "No" ).length;
            //separo en Adultos 
            const generalCPBlandoAdulto =cocinaPediatria.filter(x => x.dietaseleccionada == 'General c/p. blando').filter( x => x.descartable === false ).filter( x => x.menuinfantil === "No" ).length;
            const generalCortado = cocinaPediatria.filter(x => x.dietaseleccionada == 'General cortado' ).length;            
                const generalCortadoDESCinfantil =cocinaPediatria.filter(x => x.dietaseleccionada == 'General cortado').filter( x => x.descartable === true ).filter( x => x.menuinfantil === "Si" ).length;
                const generalCortadoInfantil =cocinaPediatria.filter(x => x.dietaseleccionada == 'General cortado').filter( x => x.descartable === false ).filter( x => x.menuinfantil === "Si" ).length;
                const generalCortadoAdultoDESC =cocinaPediatria.filter(x => x.dietaseleccionada == 'General cortado').filter( x => x.descartable === true ).filter( x => x.menuinfantil === "No" ).length;
                const generalCortadoAdulto =cocinaPediatria.filter(x => x.dietaseleccionada == 'General cortado').filter( x => x.descartable === false ).filter( x => x.menuinfantil === "No").length;

            const SinSal = cocinaPediatria.filter(x => x.dietaseleccionada == 'SinSal' ).length;
                const SinSalDESCinfantil =cocinaPediatria.filter(x => x.dietaseleccionada == 'SinSal').filter( x => x.descartable === true ).filter( x => x.menuinfantil === "Si" ).length;
                const SinSalInfantil =cocinaPediatria.filter(x => x.dietaseleccionada == 'SinSal').filter( x => x.descartable === false ).filter( x => x.menuinfantil === "Si" ).length;
                const SinSalAdultoDESC =cocinaPediatria.filter(x => x.dietaseleccionada == 'SinSal').filter( x => x.descartable === true ).filter( x => x.menuinfantil === "No" ).length;
                const SinSalAdulto =cocinaPediatria.filter(x => x.dietaseleccionada == 'SinSal').filter( x => x.descartable === false ).filter( x => x.menuinfantil === "No" ).length;

            const LivianaSinSalBlando = cocinaPediatria.filter(x => x.dietaseleccionada == 'Liviana sin sal c/p. blando').length;
                const LivianaSinSalBlandoDESCinfantil =cocinaPediatria.filter(x => x.dietaseleccionada == 'Liviana sin sal c/p. blando').filter( x => x.descartable === true ).filter( x => x.menuinfantil === "Si" ).length;
                const LivianaSinSalBlandoInfantil =cocinaPediatria.filter(x => x.dietaseleccionada == 'Liviana sin sal c/p. blando').filter( x => x.descartable === false ).filter( x => x.menuinfantil === "Si" ).length;
                const LivianaSinSalBlandoAdultoDESC =cocinaPediatria.filter(x => x.dietaseleccionada == 'Liviana sin sal c/p. blando').filter( x => x.descartable === true ).filter( x => x.menuinfantil === "No" ).length;
                const LivianaSinSalBlandoAdulto =cocinaPediatria.filter(x => x.dietaseleccionada == 'Liviana sin sal c/p. blando').filter( x => x.descartable === false ).filter( x => x.menuinfantil === "No" ).length;

            const LivianaSinSalCortado = cocinaPediatria.filter(x => x.dietaseleccionada == 'Liviana sin sal/cortado').length;
                const LivianaSinSalCortadoDESCinfantil =cocinaPediatria.filter(x => x.dietaseleccionada == 'Liviana sin sal/cortado').filter( x => x.descartable === true ).filter( x => x.menuinfantil === "Si" ).length;
                const LivianaSinSalCortadoInfantil =cocinaPediatria.filter(x => x.dietaseleccionada == 'Liviana sin sal/cortado').filter( x => x.descartable === false ).filter( x => x.menuinfantil === "Si" ).length;
                const LivianaSinSalCortadoAdultoDESC =cocinaPediatria.filter(x => x.dietaseleccionada == 'Liviana sin sal/cortado').filter( x => x.descartable === true ).filter( x => x.menuinfantil === "No" ).length;
                const LivianaSinSalCortadoAdulto =cocinaPediatria.filter(x => x.dietaseleccionada == 'Liviana sin sal/cortado').filter( x => x.descartable === false ).filter( x => x.menuinfantil === "No" ).length;

            const Blando = cocinaPediatria.filter(x => x.dietaseleccionada == 'Blando' ).length;
                const BlandoDESCinfantil =cocinaPediatria.filter(x => x.dietaseleccionada == 'Blando').filter( x => x.descartable === true ).filter( x => x.menuinfantil === "Si" ).length;
                const BlandoInfantil =cocinaPediatria.filter(x => x.dietaseleccionada == 'Blando').filter( x => x.descartable === false ).filter( x => x.menuinfantil === "Si" ).length;
                const BlandoAdultoDESC =cocinaPediatria.filter(x => x.dietaseleccionada == 'Blando').filter( x => x.descartable === true ).filter( x => x.menuinfantil === "No" ).length;
                const BlandoAdulto =cocinaPediatria.filter(x => x.dietaseleccionada == 'Blando').filter( x => x.descartable === false ).filter( x => x.menuinfantil === "No" ).length;

            const BlandoConPollo = cocinaPediatria.filter(x => x.dietaseleccionada == 'Blando con pollo' ).length;
                const BlandoConPolloDESCinfantil =cocinaPediatria.filter(x => x.dietaseleccionada == 'Blando con pollo').filter( x => x.descartable === true ).filter( x => x.menuinfantil === "Si" ).length;
                const BlandoConPolloInfantil =cocinaPediatria.filter(x => x.dietaseleccionada == 'Blando con pollo').filter( x => x.descartable === false ).filter( x => x.menuinfantil === "Si" ).length;
                const BlandoConPolloAdultoDESC =cocinaPediatria.filter(x => x.dietaseleccionada == 'Blando con pollo').filter( x => x.descartable === true ).filter( x => x.menuinfantil === "No" ).length;
                const BlandoConPolloAdulto =cocinaPediatria.filter(x => x.dietaseleccionada == 'Blando con pollo').filter( x => x.descartable === false ).filter( x => x.menuinfantil === "No" ).length;

            const DBT = cocinaPediatria.filter(x => x.dietaseleccionada == 'DBT' ).length;
                const DBTDESCinfantil =cocinaPediatria.filter(x => x.dietaseleccionada == 'DBT').filter( x => x.descartable === true ).filter( x => x.menuinfantil === "Si" ).length;
                const DBTInfantil =cocinaPediatria.filter(x => x.dietaseleccionada == 'DBT').filter( x => x.descartable === false ).filter( x => x.menuinfantil === "Si" ).length;
                const DBTAdultoDESC =cocinaPediatria.filter(x => x.dietaseleccionada == 'DBT').filter( x => x.descartable === true ).filter( x => x.menuinfantil === "No" ).length;
                const DBTAdulto =cocinaPediatria.filter(x => x.dietaseleccionada == 'DBT').filter( x => x.descartable === false ).filter( x => x.menuinfantil === "No" ).length;

            const Licuado = cocinaPediatria.filter(x => x.dietaseleccionada == 'Licuado' ).length;
                const LicuadoDESCinfantil =cocinaPediatria.filter(x => x.dietaseleccionada == 'Licuado').filter( x => x.descartable === true ).filter( x => x.menuinfantil === "Si" ).length;
                const LicuadoInfantil =cocinaPediatria.filter(x => x.dietaseleccionada == 'Licuado').filter( x => x.descartable === false ).filter( x => x.menuinfantil === "Si" ).length;
                const LicuadoAdultoDESC =cocinaPediatria.filter(x => x.dietaseleccionada == 'Licuado').filter( x => x.descartable === true ).filter( x => x.menuinfantil === "No" ).length;
                const LicuadoAdulto =cocinaPediatria.filter(x => x.dietaseleccionada == 'Licuado').filter( x => x.descartable === false ).filter( x => x.menuinfantil === "No" ).length;

            const Liquido = cocinaPediatria.filter(x => x.dietaseleccionada == 'Liquido' ).length;
                const LiquidoDESCinfantil =cocinaPediatria.filter(x => x.dietaseleccionada == 'Licuado').filter( x => x.descartable === true ).filter( x => x.menuinfantil === "Si" ).length;
                const LiquidoInfantil =cocinaPediatria.filter(x => x.dietaseleccionada == 'Licuado').filter( x => x.descartable === false ).filter( x => x.menuinfantil === "Si" ).length;
                const LiquidoAdultoDESC =cocinaPediatria.filter(x => x.dietaseleccionada == 'Licuado').filter( x => x.descartable === true ).filter( x => x.menuinfantil === "No" ).length;
                const LiquidoAdulto =cocinaPediatria.filter(x => x.dietaseleccionada == 'Licuado').filter( x => x.descartable === false ).filter( x => x.menuinfantil === "No" ).length;

            const Astringente = cocinaPediatria.filter(x => x.dietaseleccionada == 'Astringente' ).length;
                const AstringenteDESCinfantil =cocinaPediatria.filter(x => x.dietaseleccionada == 'Astringente').filter( x => x.descartable === true ).filter( x => x.menuinfantil === "Si" ).length;
                const AstringenteInfantil =cocinaPediatria.filter(x => x.dietaseleccionada == 'Astringente').filter( x => x.descartable === false ).filter( x => x.menuinfantil === "Si" ).length;
                const AstringenteAdultoDESC =cocinaPediatria.filter(x => x.dietaseleccionada == 'Astringente').filter( x => x.descartable === true ).filter( x => x.menuinfantil === "No" ).length;
                const AstringenteAdulto =cocinaPediatria.filter(x => x.dietaseleccionada == 'Astringente').filter( x => x.descartable === false ).filter( x => x.menuinfantil === "No" ).length;
            
                const Vegetariano = cocinaPediatria.filter(x => x.dietaseleccionada == 'Vegetariano' ).length;
                const VegetarianoDESCinfantil =cocinaPediatria.filter(x => x.dietaseleccionada == 'General cortado').filter( x => x.descartable === true ).filter( x => x.menuinfantil === "Si" ).length;
                const VegetarianoInfantil =cocinaPediatria.filter(x => x.dietaseleccionada == 'General cortado').filter( x => x.descartable === false ).filter( x => x.menuinfantil === "Si" ).length;
                const VegetarianoAdultoDESC =cocinaPediatria.filter(x => x.dietaseleccionada == 'General cortado').filter( x => x.descartable === true ).filter( x => x.menuinfantil === "No" ).length;
                const VegetarianoAdulto =cocinaPediatria.filter(x => x.dietaseleccionada == 'General cortado').filter( x => x.descartable === false ).filter( x => x.menuinfantil === "No" ).length;


            let html_content = '';
            
            for (let i = 0 ; i < 1 ; i ++) {
                    html_content +=  `
                    <th scope="row">PEDIATRIA</th>
                         <td id="pediatriaSinSal">${generalCPBlando} (Des.niño= ${generalCPBlandoDESCinfantil}) (DES Adultos= ${generalCPBlandoAdultoDESC}) (Niños=${generalCPBlandoInfantil}) (Adultos=${generalCPBlandoAdulto})</td>
                         <td id="pediatriaLivi">${generalCortado} (Des.niño= ${generalCortadoDESCinfantil}) (DES Adultos= ${generalCortadoAdultoDESC}) (Niños=${generalCortadoInfantil}) (Adultos=${generalCortadoAdulto})</td>
                         <td id="pediatriaBlan">${SinSal} (Des.niño= ${SinSalDESCinfantil}) (DES Adultos= ${SinSalAdultoDESC}) (Niños=${SinSalInfantil}) (Adultos=${SinSalAdulto})</td>
                         <td id="pediatriaAstr">${LivianaSinSalBlando} (Des.niño= ${LivianaSinSalBlandoDESCinfantil}) (DES Adultos= ${LivianaSinSalBlandoAdultoDESC}) (Niños=${LivianaSinSalBlandoInfantil}) (Adultos=${LivianaSinSalBlandoAdulto})</td>
                         <td id="pediatriaDbt">${LivianaSinSalCortado} (Des.niño= ${LivianaSinSalCortadoDESCinfantil}) (DES Adultos= ${LivianaSinSalCortadoAdultoDESC}) (Niños=${LivianaSinSalCortadoInfantil}) (Adultos=${LivianaSinSalCortadoAdulto})</td>
                         <td id="pediatriaLic">${Blando} (Des.niño= ${BlandoDESCinfantil}) (DES Adultos= ${BlandoAdultoDESC}) (Niños=${BlandoInfantil}) (Adultos=${BlandoAdulto})</td>
                         <td id="pediatriaLiq">${BlandoConPollo} (Des.niño= ${BlandoConPolloDESCinfantil}) (DES Adultos= ${BlandoConPolloAdultoDESC}) (Niños=${BlandoConPolloInfantil}) (Adultos=${BlandoConPolloAdulto})</td>
                         <td id="pediatriaLiq">${Astringente} (Des.niño= ${AstringenteDESCinfantil}) (DES Adultos= ${AstringenteAdultoDESC}) (Niños=${AstringenteInfantil}) (Adultos=${AstringenteAdulto})</td>
                         <td id="pediatriaLiq">${DBT} (Des.niño= ${DBTDESCinfantil}) (DES Adultos= ${DBTAdultoDESC}) (Niños=${DBTInfantil}) (Adultos=${DBTAdulto})</td>
                         <td id="pediatriaLiq">${Licuado} (Des.niño= ${LicuadoDESCinfantil}) (DES Adultos= ${LicuadoAdultoDESC}) (Niños=${LicuadoInfantil}) (Adultos=${LicuadoAdulto})</td>
                         <td id="pediatriaLiq">${Liquido} (Des.niño= ${LiquidoDESCinfantil}) (DES Adultos= ${LiquidoAdultoDESC}) (Niños=${LiquidoInfantil}) (Adultos=${LiquidoAdulto})</td>
                         <td id="pediatriaLiq">${Vegetariano} (Des.niño= ${VegetarianoDESCinfantil}) (DES Adultos= ${VegetarianoAdultoDESC}) (Niños=${VegetarianoInfantil}) (Adultos=${VegetarianoAdulto})</td>
                    `
            
        }
        document.getElementById("respuesta1").innerHTML = html_content;
}
function CMH() {
    const contadorDeDietas = JSON.parse(localStorage.getItem('dietas'));
        let cocinaCMH = contadorDeDietas.filter(x => x.area == 'CMH');
        
        const generalCPBlando = cocinaCMH.filter(x => x.dietaseleccionada == 'General c/p. blando' ).length;
        const generalCPBlandoAdultoDESC =cocinaCMH.filter(x => x.dietaseleccionada == 'General c/p. blando').filter( x => x.descartable === true ).length;
        
        const generalCortado = cocinaCMH.filter(x => x.dietaseleccionada == 'General cortado' ).length;            
            const generalCortadoAdultoDESC =cocinaCMH.filter(x => x.dietaseleccionada == 'General cortado').filter( x => x.descartable === true ).length;

        const SinSal = cocinaCMH.filter(x => x.dietaseleccionada == 'SinSal' ).length;
            const SinSalAdultoDESC =cocinaCMH.filter(x => x.dietaseleccionada == 'SinSal').filter( x => x.descartable === true ).length;

        const LivianaSinSalBlando = cocinaCMH.filter(x => x.dietaseleccionada == 'Liviana sin sal c/p. blando').length;
            const LivianaSinSalBlandoAdultoDESC =cocinaCMH.filter(x => x.dietaseleccionada == 'Liviana sin sal c/p. blando').filter( x => x.descartable === true ).length;

        const LivianaSinSalCortado = cocinaCMH.filter(x => x.dietaseleccionada == 'Liviana sin sal/cortado').length;
            const LivianaSinSalCortadoAdultoDESC =cocinaCMH.filter(x => x.dietaseleccionada == 'Liviana sin sal/cortado').filter( x => x.descartable === true ).length;

        const Blando = cocinaCMH.filter(x => x.dietaseleccionada == 'Blando' ).length;
            const BlandoAdultoDESC =cocinaCMH.filter(x => x.dietaseleccionada == 'Blando').filter( x => x.descartable === true ).length;

        const BlandoConPollo = cocinaCMH.filter(x => x.dietaseleccionada == 'Blando con pollo' ).length;
            const BlandoConPolloAdultoDESC =cocinaCMH.filter(x => x.dietaseleccionada == 'Blando con pollo').filter( x => x.descartable === true ).length;

        const DBT = cocinaCMH.filter(x => x.dietaseleccionada == 'DBT' ).length;
            const DBTAdultoDESC =cocinaCMH.filter(x => x.dietaseleccionada == 'DBT').filter( x => x.descartable === true ).length;

        const Licuado = cocinaCMH.filter(x => x.dietaseleccionada == 'Licuado' ).length;
            const LicuadoAdultoDESC =cocinaCMH.filter(x => x.dietaseleccionada == 'Licuado').filter( x => x.descartable === true ).length;

        const Liquido = cocinaCMH.filter(x => x.dietaseleccionada == 'Liquido' ).length;
            const LiquidoAdultoDESC =cocinaCMH.filter(x => x.dietaseleccionada == 'Licuado').filter( x => x.descartable === true ).length;

        const Astringente = cocinaCMH.filter(x => x.dietaseleccionada == 'Astringente' ).length;
            const AstringenteAdultoDESC =cocinaCMH.filter(x => x.dietaseleccionada == 'Astringente').filter( x => x.descartable === true ).length;
        
            const Vegetariano = cocinaCMH.filter(x => x.dietaseleccionada == 'Vegetariano' ).length;
            const VegetarianoAdultoDESC =cocinaCMH.filter(x => x.dietaseleccionada == 'General cortado').filter( x => x.descartable === true ).length;


        let html_content = '';
        
        for (let i = 0 ; i < 1 ; i ++) {
                html_content +=  `
                <th scope="row">CMH</th>
                     <td id="CMHSinSal">${generalCPBlando} (DES= ${generalCPBlandoAdultoDESC})</td>
                     <td id="CMHLivi">${generalCortado}(DES= ${generalCortadoAdultoDESC}) </td>
                     <td id="CMHBlan">${SinSal} (DES= ${SinSalAdultoDESC})</td>
                     <td id="CMHAstr">${LivianaSinSalBlando} (DES= ${LivianaSinSalBlandoAdultoDESC})</td>
                     <td id="CMHDbt">${LivianaSinSalCortado} (DES= ${LivianaSinSalCortadoAdultoDESC})</td>
                     <td id="CMHLic">${Blando} (DES= ${BlandoAdultoDESC})</td>
                     <td id="CMHLiq">${BlandoConPollo} (DES= ${BlandoConPolloAdultoDESC})</td>
                     <td id="CMHLiq">${Astringente} (DES= ${AstringenteAdultoDESC})</td>
                     <td id="CMHLiq">${DBT} (DES= ${DBTAdultoDESC})</td>
                     <td id="CMHLiq">${Licuado} (DES= ${LicuadoAdultoDESC})</td>
                     <td id="CMHLiq">${Liquido} (DES= ${LiquidoAdultoDESC})</td>
                     <td id="CMHLiq">${Vegetariano} (DES= ${VegetarianoAdultoDESC})</td>
                `
        
    }
    document.getElementById("respuesta2").innerHTML = html_content;
}
function CMM() {
    const contadorDeDietas = JSON.parse(localStorage.getItem('dietas'));
        let cocinaCMM = contadorDeDietas.filter(x => x.area == 'CMM');
        
        const generalCPBlando = cocinaCMM.filter(x => x.dietaseleccionada == 'General c/p. blando' ).length;
        const generalCPBlandoAdultoDESC =cocinaCMM.filter(x => x.dietaseleccionada == 'General c/p. blando').filter( x => x.descartable === true ).length;
        
        const generalCortado = cocinaCMM.filter(x => x.dietaseleccionada == 'General cortado' ).length;            
            const generalCortadoAdultoDESC =cocinaCMM.filter(x => x.dietaseleccionada == 'General cortado').filter( x => x.descartable === true ).length;

        const SinSal = cocinaCMM.filter(x => x.dietaseleccionada == 'SinSal' ).length;
            const SinSalAdultoDESC =cocinaCMM.filter(x => x.dietaseleccionada == 'SinSal').filter( x => x.descartable === true ).length;

        const LivianaSinSalBlando = cocinaCMM.filter(x => x.dietaseleccionada == 'Liviana sin sal c/p. blando').length;
            const LivianaSinSalBlandoAdultoDESC =cocinaCMM.filter(x => x.dietaseleccionada == 'Liviana sin sal c/p. blando').filter( x => x.descartable === true ).length;

        const LivianaSinSalCortado = cocinaCMM.filter(x => x.dietaseleccionada == 'Liviana sin sal/cortado').length;
            const LivianaSinSalCortadoAdultoDESC =cocinaCMM.filter(x => x.dietaseleccionada == 'Liviana sin sal/cortado').filter( x => x.descartable === true ).length;

        const Blando = cocinaCMM.filter(x => x.dietaseleccionada == 'Blando' ).length;
            const BlandoAdultoDESC =cocinaCMM.filter(x => x.dietaseleccionada == 'Blando').filter( x => x.descartable === true ).length;

        const BlandoConPollo = cocinaCMM.filter(x => x.dietaseleccionada == 'Blando con pollo' ).length;
            const BlandoConPolloAdultoDESC =cocinaCMM.filter(x => x.dietaseleccionada == 'Blando con pollo').filter( x => x.descartable === true ).length;

        const DBT = cocinaCMM.filter(x => x.dietaseleccionada == 'DBT' ).length;
            const DBTAdultoDESC =cocinaCMM.filter(x => x.dietaseleccionada == 'DBT').filter( x => x.descartable === true ).length;

        const Licuado = cocinaCMM.filter(x => x.dietaseleccionada == 'Licuado' ).length;
            const LicuadoAdultoDESC =cocinaCMM.filter(x => x.dietaseleccionada == 'Licuado').filter( x => x.descartable === true ).length;

        const Liquido = cocinaCMM.filter(x => x.dietaseleccionada == 'Liquido' ).length;
            const LiquidoAdultoDESC =cocinaCMM.filter(x => x.dietaseleccionada == 'Licuado').filter( x => x.descartable === true ).length;

        const Astringente = cocinaCMM.filter(x => x.dietaseleccionada == 'Astringente' ).length;
            const AstringenteAdultoDESC =cocinaCMM.filter(x => x.dietaseleccionada == 'Astringente').filter( x => x.descartable === true ).length;
        
            const Vegetariano = cocinaCMM.filter(x => x.dietaseleccionada == 'Vegetariano' ).length;
            const VegetarianoAdultoDESC =cocinaCMM.filter(x => x.dietaseleccionada == 'General cortado').filter( x => x.descartable === true ).length;


        let html_content = '';
        
        for (let i = 0 ; i < 1 ; i ++) {
                html_content +=  `
                <th scope="row">CMM</th>
                     <td id="CMMSinSal">${generalCPBlando} (DES= ${generalCPBlandoAdultoDESC})</td>
                     <td id="CMMLivi">${generalCortado}(DES= ${generalCortadoAdultoDESC}) </td>
                     <td id="CMMBlan">${SinSal} (DES= ${SinSalAdultoDESC})</td>
                     <td id="CMMAstr">${LivianaSinSalBlando} (DES= ${LivianaSinSalBlandoAdultoDESC})</td>
                     <td id="CMMDbt">${LivianaSinSalCortado} (DES= ${LivianaSinSalCortadoAdultoDESC})</td>
                     <td id="CMMLic">${Blando} (DES= ${BlandoAdultoDESC})</td>
                     <td id="CMMLiq">${BlandoConPollo} (DES= ${BlandoConPolloAdultoDESC})</td>
                     <td id="CMMLiq">${Astringente} (DES= ${AstringenteAdultoDESC})</td>
                     <td id="CMMLiq">${DBT} (DES= ${DBTAdultoDESC})</td>
                     <td id="CMMLiq">${Licuado} (DES= ${LicuadoAdultoDESC})</td>
                     <td id="CMMLiq">${Liquido} (DES= ${LiquidoAdultoDESC})</td>
                     <td id="CMMLiq">${Vegetariano} (DES= ${VegetarianoAdultoDESC})</td>
                `
        
    }
    document.getElementById("respuesta3").innerHTML = html_content;
}
function HSM() {
    const contadorDeDietas = JSON.parse(localStorage.getItem('dietas'));
        let cocinaHSM = contadorDeDietas.filter(x => x.area == 'HSM');
        
        const generalCPBlando = cocinaHSM.filter(x => x.dietaseleccionada == 'General c/p. blando' ).length;
        const generalCPBlandoAdultoDESC =cocinaHSM.filter(x => x.dietaseleccionada == 'General c/p. blando').filter( x => x.descartable === true ).length;
        
        const generalCortado = cocinaHSM.filter(x => x.dietaseleccionada == 'General cortado' ).length;            
            const generalCortadoAdultoDESC =cocinaHSM.filter(x => x.dietaseleccionada == 'General cortado').filter( x => x.descartable === true ).length;

        const SinSal = cocinaHSM.filter(x => x.dietaseleccionada == 'SinSal' ).length;
            const SinSalAdultoDESC =cocinaHSM.filter(x => x.dietaseleccionada == 'SinSal').filter( x => x.descartable === true ).length;

        const LivianaSinSalBlando = cocinaHSM.filter(x => x.dietaseleccionada == 'Liviana sin sal c/p. blando').length;
            const LivianaSinSalBlandoAdultoDESC =cocinaHSM.filter(x => x.dietaseleccionada == 'Liviana sin sal c/p. blando').filter( x => x.descartable === true ).length;

        const LivianaSinSalCortado = cocinaHSM.filter(x => x.dietaseleccionada == 'Liviana sin sal/cortado').length;
            const LivianaSinSalCortadoAdultoDESC =cocinaHSM.filter(x => x.dietaseleccionada == 'Liviana sin sal/cortado').filter( x => x.descartable === true ).length;

        const Blando = cocinaHSM.filter(x => x.dietaseleccionada == 'Blando' ).length;
            const BlandoAdultoDESC =cocinaHSM.filter(x => x.dietaseleccionada == 'Blando').filter( x => x.descartable === true ).length;

        const BlandoConPollo = cocinaHSM.filter(x => x.dietaseleccionada == 'Blando con pollo' ).length;
            const BlandoConPolloAdultoDESC =cocinaHSM.filter(x => x.dietaseleccionada == 'Blando con pollo').filter( x => x.descartable === true ).length;

        const DBT = cocinaHSM.filter(x => x.dietaseleccionada == 'DBT' ).length;
            const DBTAdultoDESC =cocinaHSM.filter(x => x.dietaseleccionada == 'DBT').filter( x => x.descartable === true ).length;

        const Licuado = cocinaHSM.filter(x => x.dietaseleccionada == 'Licuado' ).length;
            const LicuadoAdultoDESC =cocinaHSM.filter(x => x.dietaseleccionada == 'Licuado').filter( x => x.descartable === true ).length;

        const Liquido = cocinaHSM.filter(x => x.dietaseleccionada == 'Liquido' ).length;
            const LiquidoAdultoDESC =cocinaHSM.filter(x => x.dietaseleccionada == 'Licuado').filter( x => x.descartable === true ).length;

        const Astringente = cocinaHSM.filter(x => x.dietaseleccionada == 'Astringente' ).length;
            const AstringenteAdultoDESC =cocinaHSM.filter(x => x.dietaseleccionada == 'Astringente').filter( x => x.descartable === true ).length;
        
            const Vegetariano = cocinaHSM.filter(x => x.dietaseleccionada == 'Vegetariano' ).length;
            const VegetarianoAdultoDESC =cocinaHSM.filter(x => x.dietaseleccionada == 'General cortado').filter( x => x.descartable === true ).length;


        let html_content = '';
        
        for (let i = 0 ; i < 1 ; i ++) {
                html_content +=  `
                <th scope="row">HSM</th>
                     <td id="HSMSinSal">${generalCPBlando} (DES= ${generalCPBlandoAdultoDESC})</td>
                     <td id="HSMLivi">${generalCortado}(DES= ${generalCortadoAdultoDESC}) </td>
                     <td id="HSMBlan">${SinSal} (DES= ${SinSalAdultoDESC})</td>
                     <td id="HSMAstr">${LivianaSinSalBlando} (DES= ${LivianaSinSalBlandoAdultoDESC})</td>
                     <td id="HSMDbt">${LivianaSinSalCortado} (DES= ${LivianaSinSalCortadoAdultoDESC})</td>
                     <td id="HSMLic">${Blando} (DES= ${BlandoAdultoDESC})</td>
                     <td id="HSMLiq">${BlandoConPollo} (DES= ${BlandoConPolloAdultoDESC})</td>
                     <td id="HSMLiq">${Astringente} (DES= ${AstringenteAdultoDESC})</td>
                     <td id="HSMLiq">${DBT} (DES= ${DBTAdultoDESC})</td>
                     <td id="HSMLiq">${Licuado} (DES= ${LicuadoAdultoDESC})</td>
                     <td id="HSMLiq">${Liquido} (DES= ${LiquidoAdultoDESC})</td>
                     <td id="HSMLiq">${Vegetariano} (DES= ${VegetarianoAdultoDESC})</td>
                `
        
    }
    document.getElementById("respuesta4").innerHTML = html_content;
}
function MAT() {
    const contadorDeDietas = JSON.parse(localStorage.getItem('dietas'));
        let cocinaMAT = contadorDeDietas.filter(x => x.area == 'MAT');
        
        const generalCPBlando = cocinaMAT.filter(x => x.dietaseleccionada == 'General c/p. blando' ).length;
        const generalCPBlandoAdultoDESC =cocinaMAT.filter(x => x.dietaseleccionada == 'General c/p. blando').filter( x => x.descartable === true ).length;
        
        const generalCortado = cocinaMAT.filter(x => x.dietaseleccionada == 'General cortado' ).length;            
            const generalCortadoAdultoDESC =cocinaMAT.filter(x => x.dietaseleccionada == 'General cortado').filter( x => x.descartable === true ).length;

        const SinSal = cocinaMAT.filter(x => x.dietaseleccionada == 'SinSal' ).length;
            const SinSalAdultoDESC =cocinaMAT.filter(x => x.dietaseleccionada == 'SinSal').filter( x => x.descartable === true ).length;

        const LivianaSinSalBlando = cocinaMAT.filter(x => x.dietaseleccionada == 'Liviana sin sal c/p. blando').length;
            const LivianaSinSalBlandoAdultoDESC =cocinaMAT.filter(x => x.dietaseleccionada == 'Liviana sin sal c/p. blando').filter( x => x.descartable === true ).length;

        const LivianaSinSalCortado = cocinaMAT.filter(x => x.dietaseleccionada == 'Liviana sin sal/cortado').length;
            const LivianaSinSalCortadoAdultoDESC =cocinaMAT.filter(x => x.dietaseleccionada == 'Liviana sin sal/cortado').filter( x => x.descartable === true ).length;

        const Blando = cocinaMAT.filter(x => x.dietaseleccionada == 'Blando' ).length;
            const BlandoAdultoDESC =cocinaMAT.filter(x => x.dietaseleccionada == 'Blando').filter( x => x.descartable === true ).length;

        const BlandoConPollo = cocinaMAT.filter(x => x.dietaseleccionada == 'Blando con pollo' ).length;
            const BlandoConPolloAdultoDESC =cocinaMAT.filter(x => x.dietaseleccionada == 'Blando con pollo').filter( x => x.descartable === true ).length;

        const DBT = cocinaMAT.filter(x => x.dietaseleccionada == 'DBT' ).length;
            const DBTAdultoDESC =cocinaMAT.filter(x => x.dietaseleccionada == 'DBT').filter( x => x.descartable === true ).length;

        const Licuado = cocinaMAT.filter(x => x.dietaseleccionada == 'Licuado' ).length;
            const LicuadoAdultoDESC =cocinaMAT.filter(x => x.dietaseleccionada == 'Licuado').filter( x => x.descartable === true ).length;

        const Liquido = cocinaMAT.filter(x => x.dietaseleccionada == 'Liquido' ).length;
            const LiquidoAdultoDESC =cocinaMAT.filter(x => x.dietaseleccionada == 'Licuado').filter( x => x.descartable === true ).length;

        const Astringente = cocinaMAT.filter(x => x.dietaseleccionada == 'Astringente' ).length;
            const AstringenteAdultoDESC =cocinaMAT.filter(x => x.dietaseleccionada == 'Astringente').filter( x => x.descartable === true ).length;
        
            const Vegetariano = cocinaMAT.filter(x => x.dietaseleccionada == 'Vegetariano' ).length;
            const VegetarianoAdultoDESC =cocinaMAT.filter(x => x.dietaseleccionada == 'General cortado').filter( x => x.descartable === true ).length;


        let html_content = '';
        
        for (let i = 0 ; i < 1 ; i ++) {
                html_content +=  `
                <th scope="row">MAT</th>
                     <td id="MATSinSal">${generalCPBlando} (DES= ${generalCPBlandoAdultoDESC})</td>
                     <td id="MATLivi">${generalCortado}(DES= ${generalCortadoAdultoDESC}) </td>
                     <td id="MATBlan">${SinSal} (DES= ${SinSalAdultoDESC})</td>
                     <td id="MATAstr">${LivianaSinSalBlando} (DES= ${LivianaSinSalBlandoAdultoDESC})</td>
                     <td id="MATDbt">${LivianaSinSalCortado} (DES= ${LivianaSinSalCortadoAdultoDESC})</td>
                     <td id="MATLic">${Blando} (DES= ${BlandoAdultoDESC})</td>
                     <td id="MATLiq">${BlandoConPollo} (DES= ${BlandoConPolloAdultoDESC})</td>
                     <td id="MATLiq">${Astringente} (DES= ${AstringenteAdultoDESC})</td>
                     <td id="MATLiq">${DBT} (DES= ${DBTAdultoDESC})</td>
                     <td id="MATLiq">${Licuado} (DES= ${LicuadoAdultoDESC})</td>
                     <td id="MATLiq">${Liquido} (DES= ${LiquidoAdultoDESC})</td>
                     <td id="MATLiq">${Vegetariano} (DES= ${VegetarianoAdultoDESC})</td>
                `
        
    }
    document.getElementById("respuesta5").innerHTML = html_content;
}
function NEO() {
    const contadorDeDietas = JSON.parse(localStorage.getItem('dietas'));
        let cocinaNEO = contadorDeDietas.filter(x => x.area == 'NEO');
        
        const generalCPBlando = cocinaNEO.filter(x => x.dietaseleccionada == 'General c/p. blando' ).length;
        const generalCPBlandoAdultoDESC =cocinaNEO.filter(x => x.dietaseleccionada == 'General c/p. blando').filter( x => x.descartable === true ).length;
        
        const generalCortado = cocinaNEO.filter(x => x.dietaseleccionada == 'General cortado' ).length;            
            const generalCortadoAdultoDESC =cocinaNEO.filter(x => x.dietaseleccionada == 'General cortado').filter( x => x.descartable === true ).length;

        const SinSal = cocinaNEO.filter(x => x.dietaseleccionada == 'SinSal' ).length;
            const SinSalAdultoDESC =cocinaNEO.filter(x => x.dietaseleccionada == 'SinSal').filter( x => x.descartable === true ).length;

        const LivianaSinSalBlando = cocinaNEO.filter(x => x.dietaseleccionada == 'Liviana sin sal c/p. blando').length;
            const LivianaSinSalBlandoAdultoDESC =cocinaNEO.filter(x => x.dietaseleccionada == 'Liviana sin sal c/p. blando').filter( x => x.descartable === true ).length;

        const LivianaSinSalCortado = cocinaNEO.filter(x => x.dietaseleccionada == 'Liviana sin sal/cortado').length;
            const LivianaSinSalCortadoAdultoDESC =cocinaNEO.filter(x => x.dietaseleccionada == 'Liviana sin sal/cortado').filter( x => x.descartable === true ).length;

        const Blando = cocinaNEO.filter(x => x.dietaseleccionada == 'Blando' ).length;
            const BlandoAdultoDESC =cocinaNEO.filter(x => x.dietaseleccionada == 'Blando').filter( x => x.descartable === true ).length;

        const BlandoConPollo = cocinaNEO.filter(x => x.dietaseleccionada == 'Blando con pollo' ).length;
            const BlandoConPolloAdultoDESC =cocinaNEO.filter(x => x.dietaseleccionada == 'Blando con pollo').filter( x => x.descartable === true ).length;

        const DBT = cocinaNEO.filter(x => x.dietaseleccionada == 'DBT' ).length;
            const DBTAdultoDESC =cocinaNEO.filter(x => x.dietaseleccionada == 'DBT').filter( x => x.descartable === true ).length;

        const Licuado = cocinaNEO.filter(x => x.dietaseleccionada == 'Licuado' ).length;
            const LicuadoAdultoDESC =cocinaNEO.filter(x => x.dietaseleccionada == 'Licuado').filter( x => x.descartable === true ).length;

        const Liquido = cocinaNEO.filter(x => x.dietaseleccionada == 'Liquido' ).length;
            const LiquidoAdultoDESC =cocinaNEO.filter(x => x.dietaseleccionada == 'Licuado').filter( x => x.descartable === true ).length;

        const Astringente = cocinaNEO.filter(x => x.dietaseleccionada == 'Astringente' ).length;
            const AstringenteAdultoDESC =cocinaNEO.filter(x => x.dietaseleccionada == 'Astringente').filter( x => x.descartable === true ).length;
        
            const Vegetariano = cocinaNEO.filter(x => x.dietaseleccionada == 'Vegetariano' ).length;
            const VegetarianoAdultoDESC =cocinaNEO.filter(x => x.dietaseleccionada == 'General cortado').filter( x => x.descartable === true ).length;


        let html_content = '';
        
        for (let i = 0 ; i < 1 ; i ++) {
                html_content +=  `
                <th scope="row">NEO</th>
                     <td id="NEOSinSal">${generalCPBlando} (DES= ${generalCPBlandoAdultoDESC})</td>
                     <td id="NEOLivi">${generalCortado}(DES= ${generalCortadoAdultoDESC}) </td>
                     <td id="NEOBlan">${SinSal} (DES= ${SinSalAdultoDESC})</td>
                     <td id="NEOAstr">${LivianaSinSalBlando} (DES= ${LivianaSinSalBlandoAdultoDESC})</td>
                     <td id="NEODbt">${LivianaSinSalCortado} (DES= ${LivianaSinSalCortadoAdultoDESC})</td>
                     <td id="NEOLic">${Blando} (DES= ${BlandoAdultoDESC})</td>
                     <td id="NEOLiq">${BlandoConPollo} (DES= ${BlandoConPolloAdultoDESC})</td>
                     <td id="NEOLiq">${Astringente} (DES= ${AstringenteAdultoDESC})</td>
                     <td id="NEOLiq">${DBT} (DES= ${DBTAdultoDESC})</td>
                     <td id="NEOLiq">${Licuado} (DES= ${LicuadoAdultoDESC})</td>
                     <td id="NEOLiq">${Liquido} (DES= ${LiquidoAdultoDESC})</td>
                     <td id="NEOLiq">${Vegetariano} (DES= ${VegetarianoAdultoDESC})</td>
                `
        
    }
    document.getElementById("respuesta6").innerHTML = html_content;
}
function SALACOVID() {
    const contadorDeDietas = JSON.parse(localStorage.getItem('dietas'));
        let cocinaSALACOVID = contadorDeDietas.filter(x => x.area == 'SALA COVID');
        
        const generalCPBlando = cocinaSALACOVID.filter(x => x.dietaseleccionada == 'General c/p. blando' ).length;
        const generalCPBlandoAdultoDESC =cocinaSALACOVID.filter(x => x.dietaseleccionada == 'General c/p. blando').filter( x => x.descartable === true ).length;
        
        const generalCortado = cocinaSALACOVID.filter(x => x.dietaseleccionada == 'General cortado' ).length;            
            const generalCortadoAdultoDESC =cocinaSALACOVID.filter(x => x.dietaseleccionada == 'General cortado').filter( x => x.descartable === true ).length;

        const SinSal = cocinaSALACOVID.filter(x => x.dietaseleccionada == 'SinSal' ).length;
            const SinSalAdultoDESC =cocinaSALACOVID.filter(x => x.dietaseleccionada == 'SinSal').filter( x => x.descartable === true ).length;

        const LivianaSinSalBlando = cocinaSALACOVID.filter(x => x.dietaseleccionada == 'Liviana sin sal c/p. blando').length;
            const LivianaSinSalBlandoAdultoDESC =cocinaSALACOVID.filter(x => x.dietaseleccionada == 'Liviana sin sal c/p. blando').filter( x => x.descartable === true ).length;

        const LivianaSinSalCortado = cocinaSALACOVID.filter(x => x.dietaseleccionada == 'Liviana sin sal/cortado').length;
            const LivianaSinSalCortadoAdultoDESC =cocinaSALACOVID.filter(x => x.dietaseleccionada == 'Liviana sin sal/cortado').filter( x => x.descartable === true ).length;

        const Blando = cocinaSALACOVID.filter(x => x.dietaseleccionada == 'Blando' ).length;
            const BlandoAdultoDESC =cocinaSALACOVID.filter(x => x.dietaseleccionada == 'Blando').filter( x => x.descartable === true ).length;

        const BlandoConPollo = cocinaSALACOVID.filter(x => x.dietaseleccionada == 'Blando con pollo' ).length;
            const BlandoConPolloAdultoDESC =cocinaSALACOVID.filter(x => x.dietaseleccionada == 'Blando con pollo').filter( x => x.descartable === true ).length;

        const DBT = cocinaSALACOVID.filter(x => x.dietaseleccionada == 'DBT' ).length;
            const DBTAdultoDESC =cocinaSALACOVID.filter(x => x.dietaseleccionada == 'DBT').filter( x => x.descartable === true ).length;

        const Licuado = cocinaSALACOVID.filter(x => x.dietaseleccionada == 'Licuado' ).length;
            const LicuadoAdultoDESC =cocinaSALACOVID.filter(x => x.dietaseleccionada == 'Licuado').filter( x => x.descartable === true ).length;

        const Liquido = cocinaSALACOVID.filter(x => x.dietaseleccionada == 'Liquido' ).length;
            const LiquidoAdultoDESC =cocinaSALACOVID.filter(x => x.dietaseleccionada == 'Licuado').filter( x => x.descartable === true ).length;

        const Astringente = cocinaSALACOVID.filter(x => x.dietaseleccionada == 'Astringente' ).length;
            const AstringenteAdultoDESC =cocinaSALACOVID.filter(x => x.dietaseleccionada == 'Astringente').filter( x => x.descartable === true ).length;
        
            const Vegetariano = cocinaSALACOVID.filter(x => x.dietaseleccionada == 'Vegetariano' ).length;
            const VegetarianoAdultoDESC =cocinaSALACOVID.filter(x => x.dietaseleccionada == 'General cortado').filter( x => x.descartable === true ).length;


        let html_content = '';
        
        for (let i = 0 ; i < 1 ; i ++) {
                html_content +=  `
                <th scope="row">Sala Covid</th>
                     <td id="SALACOVIDSinSal">${generalCPBlando} (DES= ${generalCPBlandoAdultoDESC})</td>
                     <td id="SALACOVIDLivi">${generalCortado}(DES= ${generalCortadoAdultoDESC}) </td>
                     <td id="SALACOVIDBlan">${SinSal} (DES= ${SinSalAdultoDESC})</td>
                     <td id="SALACOVIDAstr">${LivianaSinSalBlando} (DES= ${LivianaSinSalBlandoAdultoDESC})</td>
                     <td id="SALACOVIDDbt">${LivianaSinSalCortado} (DES= ${LivianaSinSalCortadoAdultoDESC})</td>
                     <td id="SALACOVIDLic">${Blando} (DES= ${BlandoAdultoDESC})</td>
                     <td id="SALACOVIDLiq">${BlandoConPollo} (DES= ${BlandoConPolloAdultoDESC})</td>
                     <td id="SALACOVIDLiq">${Astringente} (DES= ${AstringenteAdultoDESC})</td>
                     <td id="SALACOVIDLiq">${DBT} (DES= ${DBTAdultoDESC})</td>
                     <td id="SALACOVIDLiq">${Licuado} (DES= ${LicuadoAdultoDESC})</td>
                     <td id="SALACOVIDLiq">${Liquido} (DES= ${LiquidoAdultoDESC})</td>
                     <td id="SALACOVIDLiq">${Vegetariano} (DES= ${VegetarianoAdultoDESC})</td>
                `
        
    }
    document.getElementById("respuesta7").innerHTML = html_content;
}
function UCI() {
    const contadorDeDietas = JSON.parse(localStorage.getItem('dietas'));
        let cocinaUCI = contadorDeDietas.filter(x => x.area == 'UCI');
        
        const generalCPBlando = cocinaUCI.filter(x => x.dietaseleccionada == 'General c/p. blando' ).length;
        const generalCPBlandoAdultoDESC =cocinaUCI.filter(x => x.dietaseleccionada == 'General c/p. blando').filter( x => x.descartable === true ).length;
        
        const generalCortado = cocinaUCI.filter(x => x.dietaseleccionada == 'General cortado' ).length;            
            const generalCortadoAdultoDESC =cocinaUCI.filter(x => x.dietaseleccionada == 'General cortado').filter( x => x.descartable === true ).length;

        const SinSal = cocinaUCI.filter(x => x.dietaseleccionada == 'SinSal' ).length;
            const SinSalAdultoDESC =cocinaUCI.filter(x => x.dietaseleccionada == 'SinSal').filter( x => x.descartable === true ).length;

        const LivianaSinSalBlando = cocinaUCI.filter(x => x.dietaseleccionada == 'Liviana sin sal c/p. blando').length;
            const LivianaSinSalBlandoAdultoDESC =cocinaUCI.filter(x => x.dietaseleccionada == 'Liviana sin sal c/p. blando').filter( x => x.descartable === true ).length;

        const LivianaSinSalCortado = cocinaUCI.filter(x => x.dietaseleccionada == 'Liviana sin sal/cortado').length;
            const LivianaSinSalCortadoAdultoDESC =cocinaUCI.filter(x => x.dietaseleccionada == 'Liviana sin sal/cortado').filter( x => x.descartable === true ).length;

        const Blando = cocinaUCI.filter(x => x.dietaseleccionada == 'Blando' ).length;
            const BlandoAdultoDESC =cocinaUCI.filter(x => x.dietaseleccionada == 'Blando').filter( x => x.descartable === true ).length;

        const BlandoConPollo = cocinaUCI.filter(x => x.dietaseleccionada == 'Blando con pollo' ).length;
            const BlandoConPolloAdultoDESC =cocinaUCI.filter(x => x.dietaseleccionada == 'Blando con pollo').filter( x => x.descartable === true ).length;

        const DBT = cocinaUCI.filter(x => x.dietaseleccionada == 'DBT' ).length;
            const DBTAdultoDESC =cocinaUCI.filter(x => x.dietaseleccionada == 'DBT').filter( x => x.descartable === true ).length;

        const Licuado = cocinaUCI.filter(x => x.dietaseleccionada == 'Licuado' ).length;
            const LicuadoAdultoDESC =cocinaUCI.filter(x => x.dietaseleccionada == 'Licuado').filter( x => x.descartable === true ).length;

        const Liquido = cocinaUCI.filter(x => x.dietaseleccionada == 'Liquido' ).length;
            const LiquidoAdultoDESC =cocinaUCI.filter(x => x.dietaseleccionada == 'Licuado').filter( x => x.descartable === true ).length;

        const Astringente = cocinaUCI.filter(x => x.dietaseleccionada == 'Astringente' ).length;
            const AstringenteAdultoDESC =cocinaUCI.filter(x => x.dietaseleccionada == 'Astringente').filter( x => x.descartable === true ).length;
        
            const Vegetariano = cocinaUCI.filter(x => x.dietaseleccionada == 'Vegetariano' ).length;
            const VegetarianoAdultoDESC =cocinaUCI.filter(x => x.dietaseleccionada == 'General cortado').filter( x => x.descartable === true ).length;


        let html_content = '';
        
        for (let i = 0 ; i < 1 ; i ++) {
                html_content +=  `
                <th scope="row">UCI</th>
                     <td id="UCISinSal">${generalCPBlando} (DES= ${generalCPBlandoAdultoDESC})</td>
                     <td id="UCILivi">${generalCortado}(DES= ${generalCortadoAdultoDESC}) </td>
                     <td id="UCIBlan">${SinSal} (DES= ${SinSalAdultoDESC})</td>
                     <td id="UCIAstr">${LivianaSinSalBlando} (DES= ${LivianaSinSalBlandoAdultoDESC})</td>
                     <td id="UCIDbt">${LivianaSinSalCortado} (DES= ${LivianaSinSalCortadoAdultoDESC})</td>
                     <td id="UCILic">${Blando} (DES= ${BlandoAdultoDESC})</td>
                     <td id="UCILiq">${BlandoConPollo} (DES= ${BlandoConPolloAdultoDESC})</td>
                     <td id="UCILiq">${Astringente} (DES= ${AstringenteAdultoDESC})</td>
                     <td id="UCILiq">${DBT} (DES= ${DBTAdultoDESC})</td>
                     <td id="UCILiq">${Licuado} (DES= ${LicuadoAdultoDESC})</td>
                     <td id="UCILiq">${Liquido} (DES= ${LiquidoAdultoDESC})</td>
                     <td id="UCILiq">${Vegetariano} (DES= ${VegetarianoAdultoDESC})</td>
                `
        
    }
    document.getElementById("respuesta8").innerHTML = html_content;
}
function UTI() {
    const contadorDeDietas = JSON.parse(localStorage.getItem('dietas'));
        let cocinaUTI = contadorDeDietas.filter(x => x.area == 'UTI');
        
        const generalCPBlando = cocinaUTI.filter(x => x.dietaseleccionada == 'General c/p. blando' ).length;
        const generalCPBlandoAdultoDESC =cocinaUTI.filter(x => x.dietaseleccionada == 'General c/p. blando').filter( x => x.descartable === true ).length;
        
        const generalCortado = cocinaUTI.filter(x => x.dietaseleccionada == 'General cortado' ).length;            
            const generalCortadoAdultoDESC =cocinaUTI.filter(x => x.dietaseleccionada == 'General cortado').filter( x => x.descartable === true ).length;

        const SinSal = cocinaUTI.filter(x => x.dietaseleccionada == 'SinSal' ).length;
            const SinSalAdultoDESC =cocinaUTI.filter(x => x.dietaseleccionada == 'SinSal').filter( x => x.descartable === true ).length;

        const LivianaSinSalBlando = cocinaUTI.filter(x => x.dietaseleccionada == 'Liviana sin sal c/p. blando').length;
            const LivianaSinSalBlandoAdultoDESC =cocinaUTI.filter(x => x.dietaseleccionada == 'Liviana sin sal c/p. blando').filter( x => x.descartable === true ).length;

        const LivianaSinSalCortado = cocinaUTI.filter(x => x.dietaseleccionada == 'Liviana sin sal/cortado').length;
            const LivianaSinSalCortadoAdultoDESC =cocinaUTI.filter(x => x.dietaseleccionada == 'Liviana sin sal/cortado').filter( x => x.descartable === true ).length;

        const Blando = cocinaUTI.filter(x => x.dietaseleccionada == 'Blando' ).length;
            const BlandoAdultoDESC =cocinaUTI.filter(x => x.dietaseleccionada == 'Blando').filter( x => x.descartable === true ).length;

        const BlandoConPollo = cocinaUTI.filter(x => x.dietaseleccionada == 'Blando con pollo' ).length;
            const BlandoConPolloAdultoDESC =cocinaUTI.filter(x => x.dietaseleccionada == 'Blando con pollo').filter( x => x.descartable === true ).length;

        const DBT = cocinaUTI.filter(x => x.dietaseleccionada == 'DBT' ).length;
            const DBTAdultoDESC =cocinaUTI.filter(x => x.dietaseleccionada == 'DBT').filter( x => x.descartable === true ).length;

        const Licuado = cocinaUTI.filter(x => x.dietaseleccionada == 'Licuado' ).length;
            const LicuadoAdultoDESC =cocinaUTI.filter(x => x.dietaseleccionada == 'Licuado').filter( x => x.descartable === true ).length;

        const Liquido = cocinaUTI.filter(x => x.dietaseleccionada == 'Liquido' ).length;
            const LiquidoAdultoDESC =cocinaUTI.filter(x => x.dietaseleccionada == 'Licuado').filter( x => x.descartable === true ).length;

        const Astringente = cocinaUTI.filter(x => x.dietaseleccionada == 'Astringente' ).length;
            const AstringenteAdultoDESC =cocinaUTI.filter(x => x.dietaseleccionada == 'Astringente').filter( x => x.descartable === true ).length;
        
            const Vegetariano = cocinaUTI.filter(x => x.dietaseleccionada == 'Vegetariano' ).length;
            const VegetarianoAdultoDESC =cocinaUTI.filter(x => x.dietaseleccionada == 'General cortado').filter( x => x.descartable === true ).length;


        let html_content = '';
        
        for (let i = 0 ; i < 1 ; i ++) {
                html_content +=  `
                <th scope="row">UTI</th>
                     <td id="UTISinSal">${generalCPBlando} (DES= ${generalCPBlandoAdultoDESC})</td>
                     <td id="UTILivi">${generalCortado}(DES= ${generalCortadoAdultoDESC}) </td>
                     <td id="UTIBlan">${SinSal} (DES= ${SinSalAdultoDESC})</td>
                     <td id="UTIAstr">${LivianaSinSalBlando} (DES= ${LivianaSinSalBlandoAdultoDESC})</td>
                     <td id="UTIDbt">${LivianaSinSalCortado} (DES= ${LivianaSinSalCortadoAdultoDESC})</td>
                     <td id="UTILic">${Blando} (DES= ${BlandoAdultoDESC})</td>
                     <td id="UTILiq">${BlandoConPollo} (DES= ${BlandoConPolloAdultoDESC})</td>
                     <td id="UTILiq">${Astringente} (DES= ${AstringenteAdultoDESC})</td>
                     <td id="UTILiq">${DBT} (DES= ${DBTAdultoDESC})</td>
                     <td id="UTILiq">${Licuado} (DES= ${LicuadoAdultoDESC})</td>
                     <td id="UTILiq">${Liquido} (DES= ${LiquidoAdultoDESC})</td>
                     <td id="UTILiq">${Vegetariano} (DES= ${VegetarianoAdultoDESC})</td>
                `
        
    }
    document.getElementById("respuesta9").innerHTML = html_content;
}


Pediatria();   
CMH()
CMM() 
HSM() 
MAT() 
NEO() 
SALACOVID() 
UCI() 
UTI() 
 
}
window.onload=TodasLasDietas;