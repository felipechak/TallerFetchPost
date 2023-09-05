const endpoint = 'https://jsonplaceholder.typicode.com/users'

document.addEventListener("DOMContentLoaded",()=>{
    var nameInput = document.getElementById('nameInput')
    var apellidoInput = document.getElementById('lastNameInput')
    var dobInput = document.getElementById('dobInput')
    var submitBtn = document.getElementById('submitBtn') 
    var outputMsg = document.getElementById('outputMsg')
    console.log(submitBtn)
    submitBtn.addEventListener('click',()=>{
        //console.log("corriendo")
        let userData = {
            nombre: nameInput.value,
            apellido: apellidoInput.value,
            nacimiento: dobInput.value
        }
        //console.log(userData)
        fetch(endpoint,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(userData)
        }).then((response)=>{
           response.json().then((output)=>{
            console.log(output)
            outputMsg.innerText = `Hola ${output.nombre} ${output.apellido}! Segun la responde de nuestrae request con metodo post naciste el ${output.nacimiento}`
           })
        })
    })
})