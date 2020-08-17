const lugar = require('../lugar/lugar')
const clima = require('../clima/clima')

const getInfo = async( direccion ) => {
    try {
        const coords = await lugar.getLugarLatLon( direccion )
        const temp   = await clima.getClima( coords.lat, coords.lon )
        return `El clima de ${coords.direccion} es de ${temp.tempe} grados.`        
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`
        
    }

}



module.exports ={
    getInfo
}