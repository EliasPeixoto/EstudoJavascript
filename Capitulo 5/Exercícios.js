function manipulacaoObjeto()
{
    let estudante =
    {
        nome:'Carlos',
        idade:23,
        curso:'Matemática'
    }
    identificacaoEstudante(estudante);
    estudante.nome='Fernanda';
    estudante.idade=27;
    estudante.curso='Geografia';
    identificacaoEstudante(estudante);
}

function identificacaoEstudante(estudante)
{
    console.log(`O estudante de nome ${estudante.nome} tem ${estudante.idade} e está cursando ${estudante.curso}.`);
}