function ConversaoDados()
{
    let numero = 2;
    let string = '20';

    console.log(numero+string);
    string = parseInt(string);
    console.log(numero+string);
}

function ControleCondicional()
{
    let idade = 18;
    (idade>=18)? console.log(`Você é maior de idade`):console.log(`Você é menor de idade`);
}

function ControleLoop()
{
    for(let i=1;i<11;i++)
        {
            console.log(i);
        }
}

function ControleLoopWhile ()
{
    let i = 11;
    while(i>1)
    {
        i--;
        console.log(i);
    }
}