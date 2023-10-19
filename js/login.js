//console.log("Archivo abierto")

const userInicio = [
    {
        nombre: 'Roman Lopez',
        email: 'admin@admin.com',
        id: '5',
        contraseña: 'admin',
        role: 'Role-Admin',
    },
    {
        nombre: 'Maximilino Machado',
        email: 'machado@gmail.com',
        id: '15',
        contraseña: 'contra4',
        role: 'Role-Cliente',
    },
    {
        nombre: 'Fabricio Miadana',
        email: 'maidana@gmail.com',
        id: '29',
        contraseña: 'contra5',
        role: 'Role-Cliente',
    },
]


if(!localStorage.getItem("users")){
    localStorage.setItem("users", JSON.stringify(userInicio))
}

const users = JSON.parce (localStorage.getItem("user"))

console.log(users)

const loginForm = document.getElementById("login")

loginForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const emailImput = event.target.elements.email.value;
    const contraseñaImput = event.target.elements.contraseña.value;

    //console.log(email, contraseña)

const userExiste = user.find(usr => {
    if(usr.email === emailImput){
        return true
    }

    return false
})

if(!userExiste || userExiste.contraseña !== contraseñaImput){
    Swal('error', 'lso datos son incorrectos')
        return;
}

Swal.fire("Login correcto", "En brreve sera redicionado", "SUCESS")

//userExiste.contraseña = undefined
delete userExiste.contraseña

localStorage.setItem("currentUser", JSON.stringify(userExiste))

setTimeout(function (){
    window.location.href = '/index.html'
}, 2000)

console.log(userExiste)

})

function logout(){
    localStorage.removeItem("currentUser")
    setTimeout(function(){
        window.location.href = "/index.html"
    }, 1500)
}