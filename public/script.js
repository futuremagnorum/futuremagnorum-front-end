const numStars = 800; // Número de estrelas
const starContainer = document.querySelector('.star-container');

// Função para criar uma estrela
function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');

    // Posição aleatória dentro da tela visível
    const totalWidth = window.innerWidth;
    const totalHeight = window.innerHeight;

    star.style.left = `${Math.random() * totalWidth}px`;
    star.style.top = `${Math.random() * totalHeight}px`;

    // Atraso aleatório na animação
    star.style.animationDelay = `${Math.random() * 2}s`;

    // Adiciona ao contêiner de estrelas
    starContainer.appendChild(star);
}

// Criar várias estrelas
function initializeStars() {
    for (let i = 0; i < numStars; i++) {
        createStar();
    }
}

// Recriar as estrelas ao redimensionar
function resizeStars() {
    starContainer.innerHTML = ""; // Remove estrelas antigas
    initializeStars();
}

// Inicializa as estrelas
initializeStars();

// Ajusta estrelas ao redimensionar a tela
window.addEventListener("resize", resizeStars);

const members = [
    {
        name: "Raphael Baruck",
        text: "<h3>Raphael - Líder do Projeto</h3><p>Sou desenvolvedor...</p>",
        techImages: ["img/Python-logo-notext.svg 1.png", "img/logo-kivymd-no-bg 1.png"]
    },
    {
        name: "Giovanni",
        text: "<h3>Giovanni - Dev Front-end</h3><p>Sou estudante...</p>",
        techImages: ["img/ccccc-Photoroom.png", "img/bbbbbb-Photoroom.png"]
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

// Alternar automaticamente a cada 5 segundos
let intervalId = setInterval(nextImage, 5000);

// Pausar animação ao passar o mouse
galleryImages.addEventListener('mouseenter', () => clearInterval(intervalId));
galleryImages.addEventListener('mouseleave', () => intervalId = setInterval(nextImage, 5000));

// Navegação por teclado
document.addEventListener('keydown', function(event) {
    if (event.key === "ArrowRight") {
        nextImage();
    } else if (event.key === "ArrowLeft") {
        prevImage();
    }
});

// Captura e envio do formulário
document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Impede o envio tradicional

    // Coletar dados do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
    const cadastro = document.getElementById('cadastro').checked;

    // Criar objeto JSON para envio
    const data = { nome, email, mensagem, cadastro };

    // Enviar os dados via Fetch
    fetch('/api/email', { 
        method: 'POST', 
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    })    
    .then(response => response.json())
    .then(data => {
        document.getElementById('status').innerHTML = 
            data.status === 'success' ? 'Mensagem enviada com sucesso!' : 'Ocorreu um erro. Tente novamente.';
    })
    .catch(() => {
        document.getElementById('status').innerHTML = 'Erro ao enviar a mensagem.';
    });
});
