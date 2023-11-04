let projetos = [];
const endPointDaAPI = "https://eierick.github.io/portifolio/projetos.json";

getBuscarPostsDaAPI();
async function getBuscarPostsDaAPI() {
    const res = await fetch(endPointDaAPI);
    projetos = await res.json();
}

function exibirProjetos(listaDeProjetos) {
    listaDeProjetos.forEach(projeto => {
        main.innerHTML += `
        <section class="container_projeto">
            <a class="container_projeto_link" href="${projeto.linkGithub}" target="_blank">
                <img class="container_projeto_img" src="${projeto.imagem}" alt="${projeto.alt}">
                <h2 class="titulo-projeto">${projeto.titulo}</h2>
                <h3>${projeto.subTitulo}</h3>
                <h4>TECNOLOGIAS: ${projeto.tecnologias}</h4>
            </a>
        </section>
        `;
    });
}