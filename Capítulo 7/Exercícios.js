let meuFormulario = document.getElementById("meuFormulario");
let meuCheckbox = document.getElementById("meuCheckbox");
let meuSelect = document.getElementById("meuSelect");
let nome = document.getElementById("nome");
let email = document.getElementById("email");
let senha = document.getElemeentById("senha");
let mensagemRetorno = document.getElementById("mensagemRetorno");
let mensagem = "";

meuFormulario.addEventListener("submit",(e)=>{

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
        return false;
    }
    else
    {

    }
    mensagemRetorno.innerHTML = "Teste!!!"
    mensagemRetorno.classList.remove("esconder");
    mensagemRetorno.classList.add("mostrar");
})

