//receta para consumir un api con React

export async function servicioCancionestop(){

    //1. Pa' onde vas y a que vas
    //escribir la url del servicio del API
    const URL = "https://api.spotify.com/v1/artists/711MCceyCBcFnzjGY4Q7Un/top-tracks?market=US"

    //2. Que operacion vas hacer en la base de datos
    //configurar la peticion de envio hacia el servidor 
    const PETICION = {
        method: "GET",
        headers: {Authorization:"Bearer BQDer0XJHY5bpXsFe-HH06409ykZ24z-BAmwPWOOEhOHvPIN8yw_1361Vi2X17q-O0U9eEO9eE_oGTw7q0dIbUKVig9YErb5trQMDHDGELJeceHicI9oVNKyMNg-YYsOL9rtpekXqfT0yxIaqm_yj-jP-fzhmalE3i4HCsQaFfSbow5kgbZE8xpn0PsvxTHgFtg"}
    }
    //3. nos vamos del restaurante
    //consumimos Api
    let respuesta = await fetch(URL, PETICION)
    let canciones = await respuesta.json()

    console.log(canciones)

}