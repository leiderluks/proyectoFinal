export function Integrantes(){

    let titulo="Integrantes de la Banda"
    let integrantes=[
        {
            nombre:"Angus McKinnon Young",
            foto:"https://firebasestorage.googleapis.com/v0/b/cinemaleiderlucas.appspot.com/o/Angus%20young.jpg?alt=media&token=a43c78f6-fa75-4444-ad65-823d7dcb3aac",
            Biografia:"Angus McKinnon Young es un músico británico nacionalizado australiano, conocido por ser uno de los miembros fundadores y el principal guitarrista del grupo AC/DC, aparte de ser el único miembro que ha permanecido en la banda desde su inicio."
        },
        {
            nombre:"Brian Francis Johnson",
            foto:"https://firebasestorage.googleapis.com/v0/b/cinemaleiderlucas.appspot.com/o/Brian.jpg?alt=media&token=f8361e94-094f-41b5-93a0-4a68fa78f41e",
            Biografia:"Brian Francis Johnson De Luca es un cantante y compositor británico. Es conocido por ser el tercer vocalista de la banda británica-australiana de hard rock AC/DC. Fue elegido para reemplazar a Bon Scott tras su muerte en 1980. Su primer álbum como vocalista de AC/DC fue Back In Black."
        },
        {
            nombre:"Phil Rudd",
            foto:"https://firebasestorage.googleapis.com/v0/b/cinemaleiderlucas.appspot.com/o/phil.jpg?alt=media&token=2842ce88-23f2-489d-b229-6f48830a1b8c",
            Biografia:"Phil Rudd es un baterista australiano de hard rock. Conocido por ser el baterista de AC/DC, es considerado el baterista original de la banda; junto con Cliff Williams y los hermanos Young conforma la formación clásica del grupo."
        },
        {
            nombre:"Dave Evans",
            foto:"https://firebasestorage.googleapis.com/v0/b/cinemaleiderlucas.appspot.com/o/Dave.jpg?alt=media&token=d415b29e-d277-461a-add1-16a808e2137e",
            Biografia:"Dave Evans es un cantante de origen galés criado en North Queensland, Australia. Cuando cumplió los 17 años se trasladó a Sídney, donde conoció a los hermanos Malcolm y Angus Young, Colin Burgess "
        },
        {
            nombre:"Simon Wright",
            foto:"https://firebasestorage.googleapis.com/v0/b/cinemaleiderlucas.appspot.com/o/Simon.jpg?alt=media&token=88e264d9-3edc-429a-b2f1-cdc248322234",
            Biografia:"Simon Wright nacido el 19 de junio de 1963 en Mánchester, Inglaterra, es un baterista de música Rock, especialmente conocido por haber tocado con bandas como AC/DC o Dio.."
        },
        {
            nombre:"Stevie Young",
            foto:"https://firebasestorage.googleapis.com/v0/b/cinemaleiderlucas.appspot.com/o/Stevie.jpg?alt=media&token=e904e105-5637-47c6-beea-9220b542dd71",
            Biografia:"Stevie Young es un músico británico conocido por ser miembro de la banda AC/DC hijo de Steven Young y sobrino de Angus Young y Malcolm Young de AC/DC y de los también músicos George Young y Alex Young. Su instrumento es la guitarra rítmica."
        }
    ]

    return(
        <>
           <h1>{titulo}</h1>
            <div className ="container">
                <div className ="row row-cols-1 row-cols-md-2 g-5">
                    {
                        integrantes.map(function(integrante){
                            return(
                                <>
                                    <div className ="col">
                                        <div className ="card h-100 shadow">
                                            <h1 className ="text-center">{integrante.nombre}</h1>
                                            <img src={integrante.foto} alt="foto" className ="h-100 img-fluid w-100"/>
                                            
                                        </div>
                                    </div>
                                    <div className ="col">
                                        <div className ="card h-100 shadow">
                                            <h1 className ="text-center">{integrante.Biografia}</h1>
                                        </div>
                                    </div>   
                                </>
                            )
                        })
                    }
                </div>
            </div> 
        </>
    )
}