
var botaoEntrar = document.getElementById("submit")

function login() {
    var campoEmail = document.getElementById("email").value
    
    var campoSenha = document.getElementById("password").value

    if( campoEmail =="allan123@admin.com" && campoSenha == "admin123" ) {
        window.location.replace("dashboard.html")
    } else {
        alert()
    }

    console.log("Funcionou no login")
}

botaoEntrar.addEventListener("click",login)