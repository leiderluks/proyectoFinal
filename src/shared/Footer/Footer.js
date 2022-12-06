import './Footer.css'
export function Footer(){

    return(
        <footer>
            <div class="container-fluid">    
                <div class="row p-5 pie">
                <div class="col-12 col-md-4 align-self-center">
                    <img src="https://firebasestorage.googleapis.com/v0/b/cinemaleiderlucas.appspot.com/o/lgo.jpg?alt=media&token=5328af50-e35b-48c4-9b4d-fa6ca7574026" alt="logo" class="img-fluid w-100"/>
                </div>
                <div class="col-12 col-md-4 text-center">
                    <h2 class="fw-bold letras">Sobre la Banda</h2>
                    <h4 class="letras">Banda de rock alternativa</h4>
                    <br></br>
                    <h2 class="fw-bold letras">Sobre la Banda</h2>
                    <h4 class="letras">Banda de rock alternativa</h4>
                    <br></br>

                </div>
                <div class="col-12 col-md-4 text-center">
                    <i class="bi bi-instagram fuente me-5"></i>
                    <i class="bi bi-tiktok fuente me-5"></i>
                    <i class="bi bi-facebook fuente me-5"></i>
                </div>
                </div>
                
            </div>
        </footer>
    )
}