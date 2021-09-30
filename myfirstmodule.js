const axios = require('axios');
var username = 'admin';
var password = 'madaratobi123';
const urlApiNgrok =`https://api.soporte.sidesoft.com.ec/api/` ;
//var basicAuth = "Basic " + btoa(username + ':' + password);

exports.myDateTime = function () {
    //return Date();
    return axios.get(`${urlApiNgrok}categoriesKnowldge`
    //, {        headers: { 'Authorization': + basicAuth }}
    )
    .then((response) => {
        console.log(response.data);
        let data = "";
       /* const data_length = Object.keys(response.data).length;
        for (var i = 0; i < data_length; i++) {
            let index = Number(i) + 1;
            data += `➤ *Titulo*: ${response.data[i].titulo} \n*Link de solución*: https://soporte.sidesoft.com.ec/soporte-sidesoft/front/knowbaseitem.form.php?id=${response.data[i].item_id} \n\n`;
        } 
        data;
        console.log(data);*/
        //agent.add(`*Catálogo Base de Conocimientos* \nSi deseas realizar una busqueda personalizada ingresa 👉*buscar texto*👈. Ejemplo: buscar eliminar usuarios.\n\nListado actual de busqueda: \n` + data + `\n.`);
})
    .catch((error) => {
        console.log(error);
        //   agent.add(`I didn't understand`);
    });  

//break;
  };