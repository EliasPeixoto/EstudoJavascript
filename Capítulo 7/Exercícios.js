let meuFormulario = document.getElementById("meuFormulario");
let meuCheckbox = document.getElementById("meuCheckbox");
let meuSelect = document.getElementById("meuSelect");
let nome = document.getElementById("nome");
let email = document.getElementById("email");

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
})

