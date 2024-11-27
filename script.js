const images = [
    { text: "<h3>Giovanni - Dev Front-end</h3><p>Sou um estudante do ensino médio com conhecimentos em HTML e CSS, sou criativo e me destaco pela minha força de vontade.</p>" },
    { text: "<h3>Matheus Cunha - Gerente Back-end</h3><p>Matheus Cunha, um desenvolvedor de software júnior full stack, gerenciando uma equipe e um sistema de organização do nosso grupo. Se destaca pela criatividade, atenção aos detalhes e habilidade em manter o grupo unido e resolver problemas complexos de forma eficiente.</p>" },
    { text: "<h3>Pedro - Dev Back-end</h3><p>Um programador focado com o sonho de ser Desenvolvedor de Jogos. Alto conhecimento em Python com certificados de comprovação, determinado, obstinado e eficiente, fiz e implementei novas funções tanto no cenário de Front quanto de Back-end do Magnorum. Atualmente estudando Full Stack e Java para chegar ainda mais próximo do meu sonho.</p>" },
    { text: "<h3>Vinicius - Gerente Front-end</h3><p>Sou Vinicius, tenho 17 anos e sou estudante do ensino médio. Tenho uma grande paixão por tecnologia e inovação, o que me levou a mergulhar no estudo da programação, um campo que me fascina e desafia. Atualmente, estou trabalhando como desenvolvedor full stack no projeto Magnorum, o que tem sido fundamental para meu crescimento pessoal e profissional.</p>" },
    { text: "<h3>Gabrielle - Organizadora de Redes Sociais</h3><p>Meu nome é Gabrielle, estou no 2º ano do ensino médio integrado com o técnico em desenvolvimento de sistemas, meus conhecimentos são de Java, redes sociais, estou estudando para ser full-stack e entender como cada área da tecnologia funciona. Atualmente estou começando a organizar a equipe das redes sociais do nosso aplicativo Magnorum.</p>" },
    { text: "<h3>Raphael Baruck- Líder do Projeto</h3><p>Sou desenvolvedor com experiência em aplicativos móveis e backend, liderando o projeto Magnorum, uma plataforma para conectar jovens talentos a vagas de emprego. Tenho um portfólio variado e domínio de tecnologias como Kivy, KivyMD e MongoDB, focando em criar interfaces intuitivas e experiências de usuário de alta qualidade. Trabalho de forma colaborativa, promovendo o crescimento da equipe e buscando sempre contribuir com soluções inovadoras em tecnologia.</p>" }
];


let currentIndex = 0;
const galleryText = document.querySelector(".gallery-text");

function showImage(index) {
    galleryText.innerHTML = images[index].text;
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

setInterval(nextImage, 10000); // Muda a imagem a cada 5 segundos


