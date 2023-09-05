const endpoint = 'https://jsonplaceholder.typicode.com/users'

document.addEventListener("DOMContentLoaded",()=>{
    //Cargo los objetos de la pagina (entradas del formulario y botones)
    var nameInput = document.getElementById('nameInput')
    var apellidoInput = document.getElementById('lastNameInput')
    var dobInput = document.getElementById('dobInput')
    var submitBtn = document.getElementById('submitBtn') 
    var outputMsg = document.getElementById('outputMsg')
    console.log(submitBtn)
    submitBtn.addEventListener('click',()=>{ //Event listener del boton de enviar
        //console.log("corriendo")
        //Junto los valores del formulario en un objeto
        let userData = {
            nombre: nameInput.value,
            apellido: apellidoInput.value,
            nacimiento: dobInput.value
        }
        //console.log(userData)
        fetch(endpoint,{ //Hago el fetch seteando el metodo POST y los datos a enviar a traves del segundo parametro "options" que es un objeto
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(userData) //Convierto el objeto con mis datos a un string en formato JSON
        }).then((response)=>{
           response.json().then((output)=>{ //Convierto la respuesta del fetch a un objeto JSON
            //Por ultimo imprimo en consola y en un h4 la informacion
            console.log(output)
            outputMsg.innerText = `Hola ${output.nombre} ${output.apellido}! Segun la responde de nuestrae request con metodo post naciste el ${output.nacimiento}`
           })
        })
    })
})