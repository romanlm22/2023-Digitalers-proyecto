const nombre = ""

//sessionStorage.setItem("nombreTempooral", "Nombre de la persona")

localStorage.setItem("nombre", "Roman Lopez")
localStorage.setItem("nombreUsuario", "Roman Lopez")

const nombreGuardado = localStorage.getItem("nombre")

Swal.fire('Bienvenido', `Que bueno verte de nuevo ${nombreGuardado}`)

//localStorage.removeItem("nombreUsuario")=>esto borrar ell primero

localStorage.clear()//esto borra todo el array

