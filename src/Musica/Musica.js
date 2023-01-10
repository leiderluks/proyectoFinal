import { servicioCancionestop } from "../services/servicioCanciones"
export function Musica(){

    servicioCancionestop()

    return(
        <>
            <h1>Musica cargando...</h1>
        </>
    )
}