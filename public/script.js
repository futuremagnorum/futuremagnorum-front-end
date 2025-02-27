const numStars =  800; // Número de estrelas
const starContainer = document.querySelector('.star-container');

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

// Ajusta estrelas quando a janela for redimensionada
window.addEventListener('resize', resizeStars);


// Criar várias estrelas
function initializeStars() {
    for (let i = 0; i < numStars; i++) {
        createStar();
    }
}

// Redimensionamento da tela
function resizeStars() {
    const container = document.querySelector("#star-container");
    if (container) {
        container.innerHTML = ""; // Só limpa o container se ele existir
        initializeStars();
    }
}

// Inicializa as estrelas
initializeStars();

// Ajusta estrelas quando a janela for redimensionada
window.addEventListener("resize", resizeStars);



const members = [
    {
        name: "Raphael Baruck",
        text: "<h3>Raphael - Líder do Projeto</h3><p>Sou desenvolvedor com experiência em aplicativos móveis e backend, liderando o projeto Magnorum, uma plataforma para conectar jovens talentos a vagas de emprego. Tenho um portfólio variado e domínio de tecnologias como Kivy, KivyMD e MongoDB, focando em criar interfaces intuitivas e experiências de usuário de alta qualidade. Trabalho de forma colaborativa, promovendo o crescimento da equipe e buscando sempre contribuir com soluções inovadoras em tecnologia.</p>",
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
let intervalId = setInterval(nextImage, 5000);


// Adicionando suporte à navegação com as setas do teclado
document.addEventListener('keydown', function(event) {
    if (event.key === "ArrowRight") {
        nextImage();
    } else if (event.key === "ArrowLeft") {
        prevImage();
    }
});

// Pausa a troca automática enquanto o usuário está com o mouse sobre a galeria
galleryImages.addEventListener('mouseenter', function() {
    clearInterval(intervalId); // Pausa o intervalo
});

// Retoma a troca automática quando o mouse sai da galeria
galleryImages.addEventListener('mouseleave', function() {
    intervalId = setInterval(nextImage, 5000); // Retoma o intervalo
});

    
// Quando o formulário for enviado
document.getElementById('emailForm').addEventListener('submit', function (event) {
    event.preventDefault();  // Impede o envio tradicional do formulário

    // Coletar os dados do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
    const cadastro = document.getElementById('cadastro').checked;

    // Criar objeto de dados
    const data = {
        nome: nome,
        email: email,
        mensagem: mensagem,
        cadastro: cadastro
    };

    fetch('/api/email', { 
        method: 'POST', 
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    })
    
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            document.getElementById('status').innerHTML = 'Mensagem enviada com sucesso!';
        } else {
            document.getElementById('status').innerHTML = 'Ocorreu um erro. Tente novamente.';
        }
    })
    .catch(error => {
        document.getElementById('status').innerHTML = 'Erro ao enviar a mensagem.';
    });
});


