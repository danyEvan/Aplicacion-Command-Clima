

const axios = require('axios');


const getClima = async ( lat, lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c0b67fee40d2d07c2e57f53e5a9fdd7d&units=metric`)

    const tempe = resp.data.main.temp;
    return{
        tempe,

    }
}





module.exports = {
    getClima
}