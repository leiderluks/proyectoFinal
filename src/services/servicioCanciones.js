//receta para consumir un api con React

export async function servicioCancionestop(){

    //1. Pa' onde vas y a que vas
    //escribir la url del servicio del API
    const URL = "https://api.spotify.com/v1/artists/711MCceyCBcFnzjGY4Q7Un/top-tracks?market=US"

    //2. Que operacion vas hacer en la base de datos
    //configurar la peticion de envio hacia el servidor 
    const PETICION = {
        method: "GET",
        headers: {Authorization:"Bearer BQAiqtdQ9YXRnS4ybHZaRv_NpuUZNdh9htHOJ-4Ag3vDn8p-CC7HWFeqR6DXbwxgQyZDQhpfvP3sbTwWQbtMzhEpzCuIvm3Kc2GD3sE8u1dH_I9Z_mFYGkHnNSsXsAXxSu-fJUtWzsKSxG2j0cbMPywKG0nQW9wiMQGoxNqT22X-6eXKeOo19MFUxjdwOzByMLs"}
    }
    //3. nos vamos del restaurante
    //consumimos Api
    let respuesta = await fetch(URL, PETICION)
    let canciones = await respuesta.json()

    return canciones

}