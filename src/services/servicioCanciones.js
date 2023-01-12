//receta para consumir un api con React

export async function servicioCancionestop(){

    //1. Pa' onde vas y a que vas
    //escribir la url del servicio del API
    const URL = "https://api.spotify.com/v1/artists/711MCceyCBcFnzjGY4Q7Un/top-tracks?market=US"

    //2. Que operacion vas hacer en la base de datos
    //configurar la peticion de envio hacia el servidor 
    const PETICION = {
        method: "GET",
        headers: {Authorization:"Bearer BQDop69sZLEChpxPEWmp4xM6hWpiJDARAYKI36GOwcTrc-s7mC2BPwtRRp0tHgsIKBy2-GS8t8rCGMReCEUB3t_AxuYt5R6GqjE3yun4r6rgskrneMy7YpeiVzLNyUa_FivOnjwhYptyX1BExQXCzDgpaaU3aJSFhkRQk-5Jwzp6hTSXje_ykRttMJ7FtV152uo"}
    }
    //3. nos vamos del restaurante
    //consumimos Api
    let respuesta = await fetch(URL, PETICION)
    let canciones = await respuesta.json()

    return canciones

}