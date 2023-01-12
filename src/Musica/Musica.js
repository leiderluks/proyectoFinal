import { servicioCancionestop } from "../services/servicioCanciones"
import { useState, useEffect } from "react"

export function Musica(){

    //usando el hook usestate para almacenar la respuesta del api de forma global
    const[canciones,setCanciones]=useState(null)
    const[estadoCarga, setEstadoCarga]=useState(true)

    //usando el useEffect para limitar el coonsumo del apie a una sola vez
    useEffect(function(){
        servicioCancionestop().then(function(respuesta){
            setCanciones(respuesta)
            setEstadoCarga(false)
        })

    },[])

    //render del componente
    if(estadoCarga == true){

        return(
            <>
                <h2>Estamos cargando las canciones</h2>
            </>
        )

    }else{

        return(
            <>
                <h2>canciones de la Banda</h2>
                <div className ="row row-cols-1 row-cols-md-5 g-5">
                {
                    canciones.tracks.map(function(cancion){
                        return(
                            <div className="col">
                                <div className ="card h-100 shadow">
                                
                                <img src={cancion.album.images[0].url} className ="h-100 img-fluid w-100"></img>
                                <h1 className="text-center">{cancion.name}</h1>
                                <audio controls src={cancion.preview_url}></audio>
                                </div>
                            </div>
                            
                        )
                    })
                }

                </div>
                
            </>
        )

    }   
}