//receta para consumir un api con React

import { generarToken } from "./servicioToken"

export async function servicioCancionestop(){
    
    let token=await generarToken()

    //1. Pa' onde vas y a que vas
    //escribir la url del servicio del API
    const URL = "https://api.spotify.com/v1/artists/711MCceyCBcFnzjGY4Q7Un/top-tracks?market=US"

    //2. Que operacion vas hacer en la base de datos
    //configurar la peticion de envio hacia el servidor 
    const PETICION = {
        method: "GET",
        headers: {Authorization: token}
    }
    //3. nos vamos del restaurante
    //consumimos Api
    let respuesta = await fetch(URL, PETICION)
    let canciones = await respuesta.json()

    return canciones

}