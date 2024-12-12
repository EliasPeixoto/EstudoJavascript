function saudacao()
{
    console.log("Olá, Elias");
}
function soma(num1,num2)
{
    console.log(num1+num2);
}
function parOuImpar(num)
{
    (num%2===0)? console.log("O numero é par") : console.log("O número é impar");
}
function contagemRegressiva(num)
{
    while(num>=0)
    {
        console.log(num);
        num--;
    }
}
function testeEscopo()
{
    let x = 1;
    console.log(y);
}
function testeEscopo2()
{
    let y = 2;
    console.log(x);
}