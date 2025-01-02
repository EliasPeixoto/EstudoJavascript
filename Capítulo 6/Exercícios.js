 let bMain = document.getElementById("bMain");
 let bLink = document.getElementById("bLink");
 let bParagraph = document.getElementById("bParagraph");
 let bAzul = document.getElementById("bAzul");

 let main = document.getElementById("main");
 let link = document.getElementById("link");
 let mbutton = document.getElementById("myButton");
 let myParagraph = document.getElementsByClassName("myParagraph");
 let azul = document.getElementsByClassName("azul");
 let img = document.getElementById("img");

bMain.addEventListener("click", function(e){
    main.innerHTML="Este parágrafo foi alterado";
    console.log(main);
    console.log(document);
})
bLink.addEventListener("click", (e)=>{
    link.setAttribute("href","HTTPS://www.google.com");
})
mbutton.addEventListener("click", (e)=>{
    mbutton.classList.add("vermelho");
})
bParagraph.addEventListener("click",(e)=>{
    myParagraph[0].classList.toggle("azul");
    myParagraph[0].textContent = "Conteúdo alterado";
})
bAzul.addEventListener("click",(e)=>{
    azul[0].classList.add("verde");
})
img.addEventListener("click", (e)=>{
    img.setAttribute("src","https://static.significados.com.br/foto/5839-pf-48-630x552_sm.jpg")
})
function returnElement()
{
    let elementId = document.getElementById("main-heading");
    let elementTag = document.getElementsByTagName("p")
    let elementClass = document.getElementsByClassName("myParagraph");  
    let elementCSS = document.querySelector(".azul");
    



    console.log(elementId.innerHTML);
    console.log(elementTag.item(0));
    console.log(elementClass[0]);
    console.log(elementCSS);
}
