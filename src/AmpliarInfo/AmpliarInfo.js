import { useLocation } from "react-router-dom"
import './AmpliarInfo.css'
export function AmpliarInfo(){

    let datosrecibidos = useLocation()

    let producto = datosrecibidos.state.productoseleccionado
    console.log(producto);

    return(
        <>
            <div className="container">
                <div className="row my-5">
                    <div className="col-12 col-md-6 border-end">
                        <img src={producto.foto} alt="foto" className="img-fluid w-100"/>
                    </div>
                    <div className="col-12 col-md-4 border p-3">
                        <h2 className="fw-bold">{producto.nombre}</h2>
                        <h1 className="mt-3 display">{producto.precio}<span className="descuento"> 20% off</span></h1>
                        <br/>
                        <span class="badge text-bg-info">Descuento del Dia</span>
                        <p>Hasta 48 cuotas</p>
                        <img src="https://firebasestorage.googleapis.com/v0/b/cinemaleiderlucas.appspot.com/o/visa.png?alt=media&token=eed71b47-744c-4c20-8325-e9713c60fb20" alt="visa" className="img-fluid"/>

                        <img src="https://firebasestorage.googleapis.com/v0/b/cinemaleiderlucas.appspot.com/o/american-express.png?alt=media&token=add48fb8-6747-43b4-9d73-f5cf0c53a7cb" alt="American" className="img-fluid ms-2"/>

                        <br/>
                        <i class="bi bi-truck mt-5 fs-1 text-success">
                            <span className="text-success text-bold fuente " > Envio Gratis a Nivel Nacional</span></i>
                        <p>Conoce los tiempos y las formas de envio.</p>

                        <i class="bi bi-arrow-clockwise text-success devolucion "><span className="text-success text-bold fuente "> Devolucion Gratis</span></i>
                        <p>30 dias para reembolsos</p>
                        
                        <h4 className="fw-bold">Descripcion</h4>
                        <h2 className="descripcion">{producto.descripcion}</h2>
                    </div>
                </div>
            </div>
        </>
    )
}