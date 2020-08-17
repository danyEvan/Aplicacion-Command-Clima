
//const axios = require('axios');
const lugar = require('./lugar/lugar.js')
const clima = require('./clima/clima.js')
const servicio = require('./unionServicios/unionServicios')
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

///Devuelve ciudad,pais , latitud y longitud//
// lugar.getLugarLatLon(argv.direccion)
//         .then( resp => console.log(resp) )
//         .catch(err => console.log("No existe la direccion", err.response.data));



servicio.getInfo(argv.direccion)
        .then(resp => console.log(resp))
        .catch( console.log );
















///////////////Antes de la optimizacion///////////////////////////
// const encodeU = encodeURI(argv.direccion);
// const instance = axios.create({
//     baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${encodeU}&appid=c0b67fee40d2d07c2e57f53e5a9fdd7d`
// })

// instance.get()
//         .then(resp =>{
//             console.log(resp.data);
//         })
//         .catch(err => {
//             console.log('Error!', err);
//         })

