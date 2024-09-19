console.log(dados[2]);

function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")

let campoPesquisa = document.getElementById("campo-pesquisa").value
if(campoPesquisa ==""){
    section.innerHTML = "<p>Nada foi encontrado</p>"
    return
}
campoPesquisa =  campoPesquisa.toLowerCase()
let resultados = "";
let titulo = "";
let descricao = "";


console.log(campoPesquisa);

for (let dado of dados) {
    titulo =  dado.titulo.toLowerCase()
    descricao =  dado.descricao.toLowerCase()
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)){
        
    resultados +=`
            <div class="item-resultado">
                <img src="${dado.imagem}" alt= "imagem do local" class="imagem">
                <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <p class="descricao-meta">${dado.local}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>`
    }
    
}

section.innerHTML = resultados


}
// funcionalidade das tags

const resultados = [
    { id: 1, nome: 'varandeck', tags: ['tag1', 'tag2'] },
    { id: 2, nome: 'nakka', tags: ['tag2', 'tag3'] },
    { id: 3, nome: 'Resultado 3', tags: ['tag1', 'tag3'] },
    // Adicione mais resultados conforme necessário
];

function filtrarResultados() {
    const inputTags = document.getElementById('tags').value.split(',').map(tag => tag.trim());
    const resultadosFiltrados = resultados.filter(resultado => 
        resultado.tags.some(tag => inputTags.includes(tag))
    );

    const divResultados = document.getElementById('resultados');
    divResultados.innerHTML = '';

    resultadosFiltrados.forEach(resultado => {
        const div = document.createElement('div');
        div.textContent = `${resultado.nome} (Tags: ${resultado.tags.join(', ')})`;
        divResultados.appendChild(div);
    });
}
