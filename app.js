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
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>`
    }
    
}

section.innerHTML = resultados


}