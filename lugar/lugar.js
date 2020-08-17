const axios = require('axios');

const getLugarLatLon = async ( dir ) => {

    const encodeU = encodeURI( dir );
    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${encodeU}&appid=c0b67fee40d2d07c2e57f53e5a9fdd7d`
    })
    
    const resp = await instance.get();

    if( !resp.data ){
        throw new Error(`No hay resultados para ${ dir }`);
    }

    const data      = resp.data,
          direccion = `${data.name}-${data.sys.country}`,
          lat       =  data.coord.lat,
          lon       =  data.coord.lon
    
    return {
        direccion,
        lat,
        lon
    }
           

}

module.exports = {
    getLugarLatLon
}