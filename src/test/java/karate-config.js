function fn() {
    karate.configure('connectTimeout', 10000); //Tiempo espera si se cae la api
    karate.configure('readTimeout', 10000); //Tiempo espera de leer la respuesta

    return {
        api: {
           baseUrl: 'http://api.geonames.org/'
        },
        user: {
            name: 'karate',
			pass: '123456'
        }
    };
}