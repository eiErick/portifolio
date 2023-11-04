const main = document.querySelector("#container");
const btn = document.querySelectorAll(".header_menu_btn");
const btnAtivo = document.querySelector(".btn_ativo");
const header = document.querySelector(".header");

imprimirHome();

btn.forEach(element => {
    element.addEventListener("click", () => {
        desativaClassAtivo();
        element.classList.add("btn_ativo");

        if (element.innerHTML == "Home") {
            imprimirHome();
        } else if (element.innerHTML == "Sobre mim") {
            imprimirSobreMim();
        } else if (element.innerHTML == "Tecnologias") {
            imprimirTec();
        } else if (element.innerHTML == "Projetos") {
            imprimirProjetos();
        } 
    })
});

function desativaClassAtivo() {
    for (var i = 0; i < btn.length; i++) {
        btn[i].classList.remove("btn_ativo");
    }
}

function imprimirHome() {
    main.innerHTML = `
        <section class="container_text">
            <h1 class="container_text_title">Eleve seu negócio digital a outro nível <strong class="destaque">com um Front-end de qualidade!</strong></h1>

            <p class="container_text_paragraph">Olá! Sou Érick da Silva, desenvolvedor Front-end aprediz em JavaScript, HTML5 e CSS3. Ajudo pequenos negócios e designers a colocarem em prática boas ideias. Vamos conversar?</p>

            <div class="container_text_links">
                <h2 class="container_text_links_subtitulo">Acesse minhas redes:</h2>
                <a class="container_text_links_link" target="_blank" href="https://instagram.com/eierickdasilva">
                    <img src="assets/instagram.png" alt="Instagram">
                    Instagram
                </a>
                <a class="container_text_links_link" target="_blank" href="https://github.com/eierick">
                    <img src="assets/github.png" alt="GitHub">
                    GitHub
                </a>
            </div>

        </section>
        <img class="my_image" src="assets/my-image.png" alt="Foto lendo livro">
    `;
}

function imprimirSobreMim() {
    main.innerHTML = `
    <section class="container_text">
        <h1 class="container_text_title destaque">Sobre mim</h1>

        <p class="container_text_paragraph">
            Olá! Me chamo Érick, sou um jovem aprendiz nesse vasto universo da tecnologia e programação. Sou apaixonado por tecnologia e gosto de ser desafiado a buscar novos conhecimentos nessa área, que a cada dia traz novos desafios e aprendizados.
        </p>

        <p class="container_text_paragraph">
            Atualmente tenho estudando e me aprofundado em tecnologia do Front-end, como JavaScript, HTML5 e CSS3 mas também gosto de dar umas voltas por outras linguagens de programação e outras tecnologias, como linux e git por exemplo.
        </p>

        <p class="container_text_paragraph">
            Para adquirir esses conhecimentos eu tenho estudado a maior parte do tempo na <a target="_blank" class="destaque" href="https://alura.com.br">Alura</a> mas também já estudei na <a target="_blank" class="destaque" href="https://app.rocketseat.com.br/">Rocketseat</a> no plano gratuito e no <a target="_blank" class="destaque" href="https://www.cursoemvideo.com/">CursoEmVideo</a> também no plano gratuito.
        </p>

        <h3 class="container_text_paragraph destaque"> 
            Meus perfis nestas plataformas:
        </h3>

        <ul>
            <li>
                Alura -
                <a target="_blank" href="https://cursos.alura.com.br/user/eierickdasilva">
                    eierickdasilva
                </a>
            </li>

            <li>
                Rocketseat - 
                <a target="_blank" href="https://app.rocketseat.com.br/me/erick-da-silva-lima-08504">
                    eierickdasilva
                </a>
            </li>
        </ul>
    </section>
    <img class="my_image" src="assets/my-image.png" alt="Foto lendo livro">
    `;
}

function imprimirTec() {
    main.innerHTML = `
    <section class="container_text">
        <h1 class="container_text_title destaque">Tecnologias</h1>
        <h2>As mais dominadas:</h2>
        <ul>
            <li>HTML 5</li>
            <li>CSS 3</li>
            <li>GIT e GITHUB</li>
        </ul>
        <h2>Em estudos:</h2>
        <ul>
            <li>JAVASCRIPT</li>
            <li>REACT</li>
            <li>LINUX</li>
        </ul>
        <h2>De meus interesses:</h2>
        <ul>
            <li>TYPESCRIPT</li>
        </ul>
    </section>
    <img class="my_image" src="assets/my-image.png" alt="Foto lendo livro">
    `;
}

function imprimirProjetos() {
    main.innerHTML = ``;
    main.classList.add("container_projetos");
    exibirProjetos(projetos);
}