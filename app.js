function pesquisar() {
    // 1. Obter a seção HTML onde os resultados serão exibidos
    const resultadosDiv = document.getElementById("resultados-pesquisa");
  
    // 2. Obter o termo de pesquisa do usuário e converter para minúsculas para facilitar a comparação
    const termoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
  
    // 3. Verificar se o usuário digitou algum termo
    if (!termoPesquisa) {
      // Se não digitou, exibir mensagem de erro
      resultadosDiv.innerHTML = "<p>Por favor, digite o nome de um planeta para pesquisar.</p>";
      return; // Encerrar a função
    }
  
    // 4. Inicializar uma string vazia para armazenar os resultados da pesquisa
    let resultadosHTML = "";
  
    // 5. Iterar sobre cada item (planeta) na lista de dados
    for (const planeta of dados) {
      // 6. Converter o título, descrição e tags do planeta para minúsculas para comparação
      const titulo = planeta.titulo.toLowerCase();
      const descricao = planeta.descricao.toLowerCase();
      const tags = planeta.tags.join(' ').toLowerCase(); // Combinar todas as tags em uma única string
  
      // 7. Verificar se o termo de pesquisa está presente no título, descrição ou tags
      if (titulo.includes(termoPesquisa) || descricao.includes(termoPesquisa) || tags.includes(termoPesquisa)) {
        // 8. Se o termo foi encontrado, criar um novo elemento HTML para exibir o resultado
        resultadosHTML += `
          <div class="item-resultado">
            <img src="imagens/${planeta.imagem}" alt="${planeta.titulo}">
            <div>
              <h2><a href="${planeta.link}" target="_blank">${planeta.titulo}</a></h2>
              <p>${planeta.descricao}</p>
              <a href="${planeta.link}" target="_blank">Mais informações</a>
            </div>
          </div>
        `;
      }
    }
  
    // 9. Verificar se foram encontrados resultados
    if (!resultadosHTML) {
      // Se não encontrou resultados, exibir mensagem
      resultadosHTML = "<p>Nenhum planeta encontrado com o termo pesquisado.</p>";
    }
  
    // 10. Atualizar o conteúdo da seção de resultados com os resultados da pesquisa
    resultadosDiv.innerHTML = resultadosHTML;
  }