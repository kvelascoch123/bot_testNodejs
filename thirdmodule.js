const axios = require('axios');
var username = 'admin';
var password = 'madaratobi123';
//var basicAuth = 'Basic ' + btoa(username + ':' + password);
const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')

exports.myDateTime3 = function () {
    //return Date();
    return axios.get(`http://market.valentesoft.com/wp-json/wcfmmp/v1/products`
    , {        headers: { 'Authorization': `Basic ${token}` }}
    )
    .then((response) => {
        //console.log(response.data);
        let data = "";
        const data_length = Object.keys(response.data).length;
        for (var i = 0; i < data_length; i++) {
            let index = Number(i) + 1;
            data += `➤ *Producto *: ${response.data[i].name} \n`;
        } 
        console.log(`*Te presento los productos: \n` + data + `\n.`);
        //agent.add(`*Te presento los productos: \n` + data + `\n.`);
    }).catch((error) => {
        console.log(error);
        //agent.add(`Vuelve a intentarlo porfavor.`);
    });  

  };