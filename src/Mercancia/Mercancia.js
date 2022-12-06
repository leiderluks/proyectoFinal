import { Footer } from "../shared/Footer/Footer"
export function Mercancia(){

    let titulo="productos de la Banda"
    let productos=[
        {
            nombre:"Camiseta AC/DC",
            foto:"https://firebasestorage.googleapis.com/v0/b/cinemaleiderlucas.appspot.com/o/camisetaac.webp?alt=media&token=b025235d-2d37-4ac0-8de6-a1b899ff09d9",
            precio:"$70"
        },
        {
            nombre:"Cassette 1890 AC/DC",
            foto:"https://firebasestorage.googleapis.com/v0/b/cinemaleiderlucas.appspot.com/o/cassette.jpg?alt=media&token=f7007ade-2f16-4d06-8699-c5469dc39210",
            precio:"$30"
        },
        {
            nombre:"Poster AC/DC Primer concierto",
            foto:"https://firebasestorage.googleapis.com/v0/b/cinemaleiderlucas.appspot.com/o/poster.jpg?alt=media&token=39535192-47dd-4a3d-ac40-93f4b45afa08",
            precio:"$50"
        },
        {
            nombre:"vinilo antiguo AC/DC",
            foto:"https://firebasestorage.googleapis.com/v0/b/cinemaleiderlucas.appspot.com/o/viniloAc.webp?alt=media&token=aef38c5a-9a66-4964-b3a7-c0476b082d4f",
            precio:"$90"
        },
        {
            nombre:"Guitarra AC/DC",
            foto:"https://firebasestorage.googleapis.com/v0/b/cinemaleiderlucas.appspot.com/o/guitarra.jpg?alt=media&token=9ce2125d-2ec0-4fdb-962e-63f69de6b235",
            precio:"$1000"
        },
        {
            nombre:"Bocina AC/DC",
            foto:"https://firebasestorage.googleapis.com/v0/b/cinemaleiderlucas.appspot.com/o/bocina.jpg?alt=media&token=380e593b-dc1a-4175-a897-6850074335b2",
            precio:"$2000"
        }
    ]

    return(
        <>
            <h1>{titulo}</h1>
            <div class="container">
                <div class="row row-cols-1 row-cols-md-3 g-5">

                    {
                        productos.map(function(producto){
                            return(
                                <>
                                    <div class="row">
                                        <div class="card h-100 shadow">
                                            <h1 class="text-center">{producto.nombre}</h1>
                                            <img src={producto.foto} alt="foto" class="h-100 img-fluid w-100"/>
                                            <h1 class="text-center">{producto.precio}</h1>
                                        </div>
                                    </div>
                                    
                                    
                                </>
                            )
                        })
                    }

                </div>
            </div>

            <Footer/>
        </>
    )
}