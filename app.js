
function pesquisarEFiltrar() {
    const termoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
    const tagsSelecionadas = Array.from(document.querySelectorAll('.tags input[type="checkbox"]:checked'))
      .map(tag => tag.value);
  
    const resultadosFiltrados = dados.filter(dado => {
      const tituloMinusculo = dado.titulo.toLowerCase();
      const descricaoMinuscula = dado.descricao.toLowerCase();
      return tagsSelecionadas.every(tag => dado.tags.includes(tag)) &&
             (tituloMinusculo.includes(termoPesquisa) || descricaoMinuscula.includes(termoPesquisa));
    });
  
    const resultadosElement = document.getElementById("resultados-pesquisa");
  
    if (resultadosFiltrados.length === 0) {
      resultadosElement.innerHTML = "<p>Nenhum resultado encontrado.</p>";
    } else {
      let html = "";
      resultadosFiltrados.forEach(dado => {
        const regex = new RegExp(termoPesquisa, 'gi');
        html += `
          <div class="item-resultado">
            <img src="${dado.imagem}" alt= "imagem do local" class="imagem">
            <h2><a href="#" target="_blank">${dado.titulo.replace(regex, '<b>$&</b>')}</a></h2>
            <p class="descricao-meta">${dado.descricao.replace(regex, '<b>$&</b>')}</p>
            <p class="descricao-meta">${dado.local}</p>
            <a href=${dado.link || 'Rede social não encontrada'} target="_blank">Mais informações</a>
            <p>${dado.tags}</p>
            </div>
        `;
      });
      resultadosElement.innerHTML = html;
    }
  }
  
  // Adicionar event listeners para o campo de pesquisa e as checkboxes
  const campoPesquisaElement = document.getElementById('campo-pesquisa');
  campoPesquisaElement.addEventListener('input', pesquisarEFiltrar);
  
  const tags = document.querySelectorAll('.tags input[type="checkbox"]');
  tags.forEach(tag => {
    tag.addEventListener('change', pesquisarEFiltrar);
  });