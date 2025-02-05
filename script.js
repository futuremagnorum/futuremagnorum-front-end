const members = [
    {
        name: "Rafael",
        text: "<h3>Rafael - Líder do Projeto</h3><p>Sou desenvolvedor com experiência em aplicativos móveis e backend, liderando o projeto Magnorum, uma plataforma para conectar jovens talentos a vagas de emprego. Tenho um portfólio variado e domínio de tecnologias como Kivy, KivyMD e MongoDB, focando em criar interfaces intuitivas e experiências de usuário de alta qualidade. Trabalho de forma colaborativa, promovendo o crescimento da equipe e buscando sempre contribuir com soluções inovadoras em tecnologia.</p>",
        techImages: ["img/Python-logo-notext.svg 1.png", "img/logo-kivymd-no-bg 1.png", "img/image2_no_bg 1.png", "img/image1_no_bg 1.png", "img/ccccc-Photoroom.png", "img/bbbbbb-Photoroom.png", "img/ddddd-Photoroom.png", "img/eeeeee-Photoroom.png"]
    },
    {
        name: "Giovanni",
        text: "<h3>Giovanni - Dev Front-end</h3><p>Sou um estudante do ensino médio com conhecimentos em HTML e CSS, sou criativo e me destaco pela minha força de vontade.</p>",
        techImages: ["img/ccccc-Photoroom.png", "img/bbbbbb-Photoroom.png", "img/aaaaa-Photoroom.png"]
    },
    {
        name: "Matheus",
        text: "<h3>Matheus Cunha - Gerente Back-end</h3><p>Matheus Cunha, um desenvolvedor de software júnior full stack, gerenciando uma equipe e um sistema de organização do nosso grupo. Se destaca pela criatividade, atenção aos detalhes e habilidade em manter o grupo unido e resolver problemas complexos de forma eficiente.</p>",
        techImages: ["img/Python-logo-notext.svg 1.png", "img/logo-kivymd-no-bg 1.png", "img/ddddd-Photoroom.png", "img/eeeeee-Photoroom.png"]
    },
    {
        name: "Pedro",
        text: "<h3>Pedro - Dev Back-end</h3><p>Um programador focado com o sonho de ser Desenvolvedor de Jogos. Alto conhecimento em Python com certificados de comprovação, determinado, obstinado e eficiente, fiz e implementei novas funções tanto no cenário de Front quanto de Back-end do Magnorum. Atualmente estudando Full Stack e Java para chegar ainda mais próximo do meu sonho.</p>",
        techImages: ["img/Python-logo-notext.svg 1.png", "img/logo-kivymd-no-bg 1.png", "img/image2_no_bg 1.png", "img/image1_no_bg 1.png", "img/ddddd-Photoroom.png", "img/eeeeee-Photoroom.png"]
    },
    {
        name: "Vinicius",
        text: "<h3>Vinicius - Gerente Front-end</h3><p>Sou Vinicius, tenho 17 anos e sou estudante do ensino médio. Tenho uma grande paixão por tecnologia e inovação, o que me levou a mergulhar no estudo da programação, um campo que me fascina e desafia. Atualmente, estou trabalhando como desenvolvedor full stack no projeto Magnorum, o que tem sido fundamental para meu crescimento pessoal e profissional.</p>",
        techImages: ["img/Python-logo-notext.svg 1.png", "img/logo-kivymd-no-bg 1.png", "img/image2_no_bg 1.png", "img/ccccc-Photoroom.png", "img/bbbbbb-Photoroom.png", "img/aaaaa-Photoroom.png", "img/ddddd-Photoroom.png", "img/eeeeee-Photoroom.png"]
    },
    {
        name: "Gabrielle",
        text: "<h3>Gabrielle - Organizadora de Redes Sociais</h3><p>Meu nome é Gabrielle, estou no 2º ano do ensino médio integrado com o técnico em desenvolvimento de sistemas, meus conhecimentos são de Java, redes sociais, estou estudando para ser full-stack e entender como cada área da tecnologia funciona. Atualmente estou começando a organizar a equipe das redes sociais do nosso aplicativo Magnorum.</p>",
        techImages: ["img/aaaaa-Photoroom.png", "img/iiiiii-Photoroom.png"]
    }
];

let currentIndex = 0;
const galleryText = document.getElementById("galleryText");
const galleryImages = document.getElementById("galleryImages");

function updateGallery(index) {
    const member = members[index];
    galleryText.innerHTML = member.text;
    galleryImages.innerHTML = member.techImages
        .map(imgSrc => `<img src="${imgSrc}" alt="Tecnologia" class="tech-img">`)
        .join("");
}

// Navegação entre membros
function nextImage() {
    currentIndex = (currentIndex + 1) % members.length;
    updateGallery(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + members.length) % members.length;
    updateGallery(currentIndex);
}

// Inicializa com o primeiro membro
updateGallery(currentIndex);

// Alterar automaticamente a cada 5 segundos
setInterval(nextImage, 5000);








// Seleciona todos os links com a classe 'nav-link'
const navLinks = document.querySelectorAll('.nav-link');

// Adiciona evento de clique para cada link
navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Impede o comportamento padrão do link

        // Obtém o ID do alvo da rolagem
        const targetId = this.getAttribute('href').substring(1); // Remove o '#' do href
        const targetElement = document.getElementById(targetId); // Obtém o elemento correspondente

        // Verifica se o elemento existe antes de tentar rolar
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth', // Rolagem suave
                block: 'start' // Alinha no início da seção
            });
        } else {
            console.error(`Elemento com ID ${targetId} não encontrado.`);
        }
    });
});






const numStars =  500; // Número de estrelas

// Função para criar uma estrela
function createStar() {
  const star = document.createElement('div');
  star.classList.add('star');

  // Posição aleatória em todo o documento
  const totalWidth = document.body.scrollWidth; // Largura total do documento
  const totalHeight = document.body.scrollHeight; // Altura total do documento

  star.style.left = `${Math.random() * totalWidth}px`;
  star.style.top = `${Math.random() * totalHeight}px`;

  // Atraso aleatório para a animação
  star.style.animationDelay = `${Math.random() * 2}s`;

  // Adiciona a estrela ao body
  document.body.appendChild(star);
}

// Criar várias estrelas
function initializeStars() {
  for (let i = 0; i < numStars; i++) {
    createStar();
  }
}

// Recria as estrelas ao redimensionar ou alterar o tamanho do documento
function resizeStars() {
  document.querySelectorAll('.star').forEach(star => star.remove());
  initializeStars();
}

// Inicializa as estrelas
initializeStars();

// Ajusta estrelas quando a janela for redimensionada
window.addEventListener('resize', resizeStars);

