export async function generarToken(){

    const client_id="client_id=04c711b684634685884b8235d8c443b1"
    const client_secret="client_secret=d09eec9a84ed4f37aa8f6d83cee9bd90"
    const grant_type="grant_type=client_credentials"

    let dataEnvio=grant_type+"&"+client_secret+"&"+client_id

    const URL="https://accounts.spotify.com/api/token"

    const PETICION={
        method:"POST",
        headers:{"Content-type":"application/x-www-form-urlencoded"},
        body:dataEnvio
    }

    let respuesta=await fetch(URL,PETICION)

    let token=await respuesta.json()

    let tokenDefinitivo=token.token_type+" "+token.access_token

    return(tokenDefinitivo)
}