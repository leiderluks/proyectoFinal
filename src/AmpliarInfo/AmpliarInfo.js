import { useLocation } from "react-router-dom"
export function AmpliarInfo(){

    let datosrecibidos = useLocation()

    let producto = datosrecibidos.state.productoseleccionado
    console.log(producto);

    return(
        <>
            <h1>{producto.nombre}</h1>
        </>
    )
}