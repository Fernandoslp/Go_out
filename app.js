

function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")
  
    
let campoPesquisa = document.getElementById("campo-pesquisa").value
if(campoPesquisa ==""){
    section.innerHTML = "<p>Nada encontrado</p>"
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
    
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) ){
        
    resultados +=`
            <div class="item-resultado">
                <img src="${dado.imagem}" alt= "imagem do local" class="imagem">
                <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <p class="descricao-meta">${dado.local}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
                <p>${dado.tags}</p>
            </div>`
    }
    
}

section.innerHTML = resultados

}

// função das tags
const tags = document.querySelectorAll('.tags input[type="checkbox"], .taglocal input[type="checkbox"]');
const resultados = document.getElementById('resultados-pesquisa1');



function filtrarDados() {
    const tagsSelecionadas = Array.from(tags)
        .filter(tag => tag.checked)
        .map(tag => tag.value);
    
     // Limpa os resultados se não houver tags selecionadas
     if (tagsSelecionadas.length === 0) {
        resultados.innerHTML = ''; // Limpa os resultados
        return; // Sai da função
    }

    const resultadosFiltrados = dados.filter(dado => {
        return tagsSelecionadas.every(tag => dado.tags.includes(tag));
    });

    resultados.innerHTML = '';
    resultadosFiltrados.forEach(dado => {
        const div = document.createElement('div');
        div.classList.add('resultados-pesquisa1');
        div.innerHTML = `
        <div class="item-resultado">
            <img src="${dado.imagem}" alt= "imagem do local" class="imagem">
            <h2 class="titulo">${dado.titulo}</h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <p class="descricao-meta">${dado.local || 'Autor não informado'}</p>
            <a href=${dado.link} target="_blank">Mais informações</a>
            <p>${dado.tags}</p>
        </div>`;
        resultados.appendChild(div);
    });
}

tags.forEach(tag => {
    tag.addEventListener('change', filtrarDados);
});