const nombre = ""

//sessionStorage.setItem("nombreTempooral", "Nombre de la persona")

localStorage.setItem("nombre", "Roman Lopez")
localStorage.setItem("nombreUsuario", "Roman Lopez")

const nombreGuardado = localStorage.getItem("nombre")

Swal.fire('Bienvenido', `Que bueno verte de nuevo ${nombreGuardado}`)

//localStorage.removeItem("nombreUsuario")=>esto borrar ell primero

localStorage.clear()//esto borra todo el array

const user = [
    {
        fullname: 'Nora Machado',
        email: 'machado.nora@example.con',
        id: '7'
    },
    {
        fullname: 'Maximiliano Lopez',
        email: 'machado.maximilianoa@example.con',
        id: '0'
    }
]

localStorage.setItem("nombreGuardado", JSON.stringify(user))

const temp = JSON.parse ( localStorage.getItem("nombreGuardados")) 

console.log(temp)


