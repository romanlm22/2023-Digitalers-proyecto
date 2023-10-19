const currenUser = JSON.parce(localStorage.getItem("currentuser"))

const headerUserInfo = document.getElementById("user-header-name")
const headerUserAction = document.getElementById("user-action")

headerUserInfo.innertext = currenUser ? currenUser.fullname: ""

if(currenUser){
    headerUserAction.innerHTML = `<button class="btn btn-ligth" onclick="logout()">Logout</button>`

}else{
    headerUserAction.innerHTML = `<a class="btn btn-ligth" href="/pages/login/login.html">Login</a>`
}
