export default class Weather {
    constructor(data) {
        this.tiempoLocal = data.location.localtime;
        this.temperatura = data.current.temp_c;
        this.viento = data.current.wind_kph;
        this.humedad = data.current.humidity;
    }

    getTiempoLocal() {
        return this.tiempoLocal;
    }

    getTemperatura() {
        return this.temperatura;
    }

    getViento() {
        return this.viento;
    }

    getHumedad() {
        return this.humedad;
    }
}
