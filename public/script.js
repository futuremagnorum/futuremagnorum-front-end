const numStars = 800;

// Criar e adicionar estrelas ao body
function createStars() {
    const fragment = document.createDocumentFragment();
    const totalWidth = document.body.scrollWidth;
    const totalHeight = document.body.scrollHeight;
    
    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = `${Math.random() * totalWidth}px`;
        star.style.top = `${Math.random() * totalHeight}px`;
        star.style.animationDelay = `${Math.random() * 2}s`;
        fragment.appendChild(star);
    }
    document.body.appendChild(fragment);
}

// Atualizar estrelas ao redimensionar
function resizeStars() {
    document.querySelectorAll('.star').forEach(star => star.remove());
    createStars();
}

// Inicialização
createStars();
window.addEventListener('resize', resizeStars);

// Dados dos membros
const members = [
    {
        name: "Raphael Baruck - Gerente Front-end",
        text: "<p>Sou desenvolvedor com experiência em aplicativos móveis e backend, liderando o projeto Magnorum, uma plataforma para conectar jovens talentos a vagas de emprego. Tenho um portfólio variado e domínio de tecnologias como Kivy, KivyMD e MongoDB, focando em criar interfaces intuitivas e experiências de usuário de alta qualidade. Trabalho de forma colaborativa, promovendo o crescimento da equipe e buscando sempre contribuir com soluções inovadoras em tecnologia.</p>",
        techImages: ["img/Python-logo-notext.svg 1.png", "img/logo-kivymd-no-bg 1.png", "img/image2_no_bg 1.png", "img/image1_no_bg 1.png", "img/ccccc-Photoroom.png", "img/bbbbbb-Photoroom.png", "img/ddddd-Photoroom.png", "img/eeeeee-Photoroom.png"]
    },
    {
        name: "Matheus - Gerente Back-end",
        text: "<p>Matheus Cunha, um desenvolvedor de software júnior full stack, gerenciando uma equipe e um sistema de organização do nosso grupo. Se destaca pela criatividade, atenção aos detalhes e habilidade em manter o grupo unido e resolver problemas complexos de forma eficiente.</p>",
        techImages: ["img/Python-logo-notext.svg 1.png", "img/logo-kivymd-no-bg 1.png", "img/ddddd-Photoroom.png", "img/eeeeee-Photoroom.png"]
    },
    {
        name: "Pedro - Dev Back-end",
        text: "<p>Um programador focado com o sonho de ser Desenvolvedor de Jogos. Alto conhecimento em Python com certificados de comprovação, determinado, obstinado e eficiente, fiz e implementei novas funções tanto no cenário de Front quanto de Back-end do Magnorum. Atualmente estudando Full Stack e Java para chegar ainda mais próximo do meu sonho.</p>",
        techImages: ["img/Python-logo-notext.svg 1.png", "img/logo-kivymd-no-bg 1.png", "img/image2_no_bg 1.png", "img/image1_no_bg 1.png", "img/ddddd-Photoroom.png", "img/eeeeee-Photoroom.png"]
    },
    {
        name: "Vinicius - Gerente Front-end",
        text: "<p>Sou Vinicius, tenho 17 anos e sou estudante do ensino médio. Tenho uma grande paixão por tecnologia e inovação, o que me levou a mergulhar no estudo da programação, um campo que me fascina e desafia. Atualmente, estou trabalhando como desenvolvedor full stack no projeto Magnorum, o que tem sido fundamental para meu crescimento pessoal e profissional.</p>",
        techImages: ["img/Python-logo-notext.svg 1.png", "img/logo-kivymd-no-bg 1.png", "img/image2_no_bg 1.png", "img/ccccc-Photoroom.png", "img/bbbbbb-Photoroom.png", "img/aaaaa-Photoroom.png", "img/ddddd-Photoroom.png", "img/eeeeee-Photoroom.png"]
    }
];  

let currentIndex = 0;
const galleryText = document.getElementById("galleryText");
const galleryImages = document.getElementById("galleryImages");

function updateGallery(index) {
    const member = members[index];
    
    // Aplicando a classe ao nome
    galleryText.innerHTML = `
        <div class="member-name">${member.name}</div>
        <div class="member-text">${member.text}</div>
    `;
    
    // Exibindo as imagens de tecnologia
    galleryImages.innerHTML = member.techImages.map(img => `<img src="${img}" alt="Tecnologia" class="tech-img">`).join("");
}

function nextImage() {
    currentIndex = (currentIndex + 1) % members.length;
    updateGallery(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + members.length) % members.length;
    updateGallery(currentIndex);
}

updateGallery(currentIndex);
let intervalId = setInterval(nextImage, 5000);

galleryImages.addEventListener('mouseenter', () => clearInterval(intervalId));
galleryImages.addEventListener('mouseleave', () => intervalId = setInterval(nextImage, 5000));

document.addEventListener('keydown', event => {
    if (event.key === "ArrowRight") nextImage();
    else if (event.key === "ArrowLeft") prevImage();
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão para exibir a mensagem antes
    var form = this;
    var status = document.getElementById("status");

    fetch(form.action, {
        method: form.method,
        body: new FormData(form)
    }).then(response => {
        if (response.ok) {
            status.innerText = "E-mail enviado com sucesso!";
            status.style.color = "green";
            form.reset(); // Limpa o formulário
        } else {
            status.innerText = "Erro ao enviar. Tente novamente.";
            status.style.color = "red";
        }
    }).catch(() => {
        status.innerText = "Erro ao conectar com o servidor.";
        status.style.color = "red";
    });
});