const info = document.querySelector("#contenedorInfo")

let datos = {
    nombre: "Pepe",
    email: "pepe@gmail.com"
}




//Pintar

boton.addEventListener("click", (ev) => {
    ev.preventDefault()

    getDatos()
        .then((datos) => {

            const listaUl = document.createElement("UL");
            const nombreLista = document.createElement("LI");
            nombreLista.textContent = datos.nombre;
            const emailLista = document.createElement("LI");
            emailLista.textContent = datos.email;
            listaUl.append(nombreLista, emailLista)
            info.append(listaUl)
            console.log(datos)
        })
        .catch((error) => {
            console.log(error);
        })
})



//Crear una funcion que resuelva la promesa

let getDatos = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            let funciona = true;
            if (funciona) resolve(datos);
            else reject("El alumno no existe")
            console.log("Retrasado por 1 segundo.");
        }, "1000");
    })

}

