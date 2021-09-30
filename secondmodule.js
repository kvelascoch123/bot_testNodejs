var WooCommerceAPI = require('woocommerce-api');
 
var WooCommerce = new WooCommerceAPI({
  url: 'http://market.valentesoft.com',
  consumerKey: 'ck_59a9983953ca8b3adea1b739e460f4932df737e6',
  consumerSecret: 'cs_d42a6ecc9069cab91768cb128014d77e5539548a',
  wpAPI: true,
  version: 'wc/v1'
});

exports.myDateTime2 = function () {

    WooCommerce.getAsync('products').then(function(result) {
      const productsArr = JSON.parse(result.toJSON().body);
      productsArr.forEach(element => {
      console.log(element['name']);
    });
      

    //  console.log(arr['code']);
    //return JSON.parse(result.toJSON().body);
  });
} 