let meuFormulario = document.getElementById("meuFormulario");
let meuCheckbox = document.getElementById("meuCheckbox");
let meuSelect = document.getElementById("meuSelect");
let nome = document.getElementById("nome");
let email = document.getElementById("email");
let senha = document.getElemeentById("senha");

meuFormulario.addEventListener("submit",(e)=>{

    alert(String.fromCharCode(65), String.fromCharCode(91));
    e.preventDefault();
    if(nome.value ==="")
    {
        alert("Por Favor, insira o seu nome.");
        return false;
    }
    else
    {
        alert("Nome enviado com sucesso.");
    }
    if(!(email.value.includes("@") && email.value.includes(".")))
    {
        alert("Por favor, insira um e-mail valido");
    }

})

