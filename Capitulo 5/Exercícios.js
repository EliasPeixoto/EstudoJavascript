function manipulacaoObjeto()
{
    let estudante =
    {
        nome:'Carlos',
        idade:23,
        curso:'Matemática',
        identificar:function(){
            console.log(`O aluno ${estudante.nome} tem ${estudante.idade} anos e cursa ${estudante.curso}.`);
        },
    };
    estudante.identificar();
    estudante.nome='Fernanda';
    estudante.idade=27;
    estudante.curso='Geografia';
    estudante.identificar();
    estudante.semestre = 'Terceiro';
    console.log(estudante.semestre);
}
function ManipulacaoArray()
{
    let frutas = ["Maçã","Pêra","Uva"];
    console.log(frutas);
    frutas.push("Mamão");
    console.log(frutas);
    let listaFrutas = frutas.join();
    console.log(listaFrutas);
    let duasFrutas = frutas.slice(1,3);
    console.log(duasFrutas);
}
function interacaoArray()
{
    let numeros ={1,3,5,7,9};
    function expo2(n)
    {
        return n*n;
    }
    let quadrados = numeros.map(expo2(numeros));
    console.log(quadrados);
}