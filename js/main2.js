const info = document.querySelector("#contenedorInfo")

let datos = {
    nombre: "Pepe",
    email: "pepe@gmail.com"
}



boton.addEventListener("click", (ev) => {
    ev.preventDefault();
    
    entrar();
});



async function prueba() { }

const pruebaNombre = async () => {

    const nombre = 'Pepe'

    if (true == true) {
        return nombre
    }
    throw 'el mal'

}

const pruebaEmail = async () => {
    const email = "pepe@gmail.com"

    // if (email == email) { no sabia que poner lo he tenido que mirar en internet porque esto queda raro

    if (email.includes('@')) {
        return email
    }
    throw 'el email es incorrecto'
}

const entrar = async () => {

    try { 
        const nombre = await pruebaNombre()
        const email = await pruebaEmail()
        
        console.log(nombre)
        console.log(email)
        const listaUl = document.createElement("UL");
        const nombreLista = document.createElement("LI");
        nombreLista.textContent = datos.nombre;
        const emailLista = document.createElement("LI");
        emailLista.textContent = datos.email;
        listaUl.append(nombreLista, emailLista)
        info.append(listaUl)
    } catch (error) {

        console.log(error)
    }

}


//No consigo meter el setTimeOut me da errores
