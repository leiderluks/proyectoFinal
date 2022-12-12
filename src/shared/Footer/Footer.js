import './Footer.css'
export function Footer(){

    return(
        <footer>
            <div className ="container-fluid">    
                <div className ="row p-5 pie">
                <div className ="col-12 col-md-4 align-self-center">
                    <img src="https://firebasestorage.googleapis.com/v0/b/cinemaleiderlucas.appspot.com/o/lgo.jpg?alt=media&token=5328af50-e35b-48c4-9b4d-fa6ca7574026" alt="logo" className ="img-fluid w-100"/>
                </div>
                <div className ="col-12 col-md-4 text-center">
                    <h2 className ="fw-bold letras">Sobre la Banda</h2>
                    <h4 className ="letras">Banda de rock alternativa</h4>
                    <br></br>
                    <h2 className ="fw-bold letras">Sobre la Banda</h2>
                    <h4 className ="letras">Banda de rock alternativa</h4>
                    <br></br>

                </div>
                <div className ="col-12 col-md-4 text-center">
                    <i className ="bi bi-instagram fuente me-5"></i>
                    <i className ="bi bi-tiktok fuente me-5"></i>
                    <i className ="bi bi-facebook fuente me-5"></i>
                </div>
                </div>
                
            </div>
        </footer>
    )
}