import "./Home.css"
import { Footer } from '../shared/Footer/Footer'

export function Home(){

    return(
        <>
            <section>
                <div class= "banner">

                </div>
            </section>
            <section>
                <div class= "container">
                    <div class="row">
                        <div class="col-12 col-md-8 container">
                            <h2>AC/DC</h2>
                            <p>AC/DC es una banda de hard rock británica-australiana, formada en 1973 en Australia por los hermanos escoceses Malcolm Young y Angus Young. Sus álbumes se han vendido en un total estimado de 200 millones de copias, embarcándose en giras multitudinarias por todo el mundo y sus éxitos han musicalizado varias producciones cinematográficas sobresalientes. Son famosas sus actuaciones en vivo, resultando vibrantes y exultantes espectáculos de primer orden. Mucho de ello se debe al extravagante estilo de su guitarrista principal y símbolo visual, Angus Young, quien asume el rol de guitarrista principal durante los conciertos, gracias a sus dinámicos y adrenalínicos despliegues escénicos uniformado de colegial callejero.</p>
                            <div >
                                <img class="concierto"src="https://firebasestorage.googleapis.com/v0/b/spotyllp.appspot.com/o/concert.jpg?alt=media&token=b64034ac-499a-4b21-a0aa-b487af59cf45" alt="concierto"/>
                            </div>
                        </div>

                        <div class="col-12 col-md-4 border-start align-self-center text-black p-5 border border-white">
                            <div class="row">
                                <div class="col-12 text-center">
                                    <h1 class="fw-bold">Proximos Conciertos</h1>
                                    <hr></hr>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3 text-end">
                                 <i class="bi bi-vinyl-fill icono fw-bold"></i>
                                </div>
                                <div class="col-9 text-start align-self-center">
                                    <h3 class="fw-bold">Medellin</h3>
                                    <h5>Dec 10</h5>
                                </div>
                            </div>  

                            <div class="row">
                                <div class="col-3 text-end">
                                 <i class="bi bi-vinyl-fill icono fw-bold"></i>
                                </div>
                                <div class="col-9 text-start align-self-center">
                                    <h3 class="fw-bold">Cali</h3>
                                    <h5>Dec 11</h5>
                                </div>
                            </div>  

                            <div class="row">
                                <div class="col-3 text-end">
                                 <i class="bi bi-vinyl-fill icono fw-bold"></i>
                                </div>
                                <div class="col-9 text-start align-self-center">
                                    <h3 class="fw-bold">Bogota</h3>
                                    <h5>Dec 12</h5>
                                </div>
                            </div>  

                            <div class="row">
                                <div class="col-3 text-end">
                                 <i class="bi bi-vinyl-fill icono fw-bold"></i>
                                </div>
                                <div class="col-9 text-start align-self-center">
                                    <h3 class="fw-bold">Barranquilla</h3>
                                    <h5>Dec 14</h5>
                                </div>
                            </div>  

                        </div>

                    </div>
                    
                </div>
                
            </section>

            <section>
                <div class="container-fluid mt-4">
                    <div class="row">
                        <div class="col-12 col-md-4">
                            <img src="https://firebasestorage.googleapis.com/v0/b/spotyllp.appspot.com/o/noticia1.webp?alt=media&token=43bca0e2-45fc-4559-b06c-ca01860679ef" alt="" class="img-fluid w-100 noticia"></img>
                        </div>
                        <div class="col-12 col-md-4">
                            <img src="https://firebasestorage.googleapis.com/v0/b/spotyllp.appspot.com/o/noticia4.jpg?alt=media&token=629c51fc-1335-4145-b6d1-862af6b3006a" alt="" class="img-fluid w-100 noticia"></img>
                        </div>
                        <div class="col-12 col-md-4">
                            <img src="https://firebasestorage.googleapis.com/v0/b/cinemaleiderlucas.appspot.com/o/not4.jpg?alt=media&token=a3a32e99-e3df-423b-93d5-242e80b12c46" alt="" class="img-fluid w-100 noticia"></img>
                        </div>

                        
                    </div>

                </div>

            </section>
            
            <Footer/>

        </>
    )
}