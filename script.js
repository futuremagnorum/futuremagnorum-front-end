const images = [
    { text: "<h3>Giovanni - Dev Front-end</h3><p>Sou um estudante do ensino médio com conhecimentos em HTML e CSS...</p>", imgSrc: "img/giovanni.png" },
    { text: "<h3>Matheus Cunha - Gerente Back-end</h3><p>Matheus Cunha, um desenvolvedor de software júnior full stack...</p>", imgSrc: "img/matheus.png" },
    { text: "<h3>Pedro - Dev Back-end</h3><p>Um programador focado com o sonho de ser Desenvolvedor de Jogos...</p>", imgSrc: "img/pedro.png" },
    { text: "<h3>Vinicius - Gerente Front-end</h3><p>Sou Vinicius, tenho 17 anos e sou estudante do ensino médio...</p>", imgSrc: "img/vinicius.png" },
    { text: "<h3>Gabrielle - Organizadora de Redes Sociais</h3><p>Meu nome é Gabrielle, estou no 2º ano do ensino médio...</p>", imgSrc: "img/gabrielle.png" },
    { text: "<h3>Rafael - Líder do Projeto</h3><p>Sou desenvolvedor com experiência em aplicativos móveis e backend...</p>", imgSrc: "img/rafael.png" }
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

setInterval(nextImage, 5000); // Muda a imagem a cada 5 segundos

document.addEventListener("DOMContentLoaded", () => {
    const techItems = document.querySelectorAll(".tech-item");
    const techSection = document.querySelector(".tech-row");
    let animationInProgress = false;

    // Configura o observador para monitorar a visibilidade da seção
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animationInProgress) {
                startAnimation();
            } else if (!entry.isIntersecting) {
                resetAnimation();
            }
        });
    }, { threshold: 0.5 }); // Define que pelo menos 50% da seção precisa estar visível

    observer.observe(techSection);

    function startAnimation() {
        animationInProgress = true;
        techItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add("active");
            }, index * 500); // Ajuste o tempo entre as logos, aqui está a cada 500ms
        });
    }

    function resetAnimation() {
        animationInProgress = false;
        techItems.forEach(item => {
            item.classList.remove("active");
        });
    }
});

// Exemplo de função para exibir um texto ao lado da imagem
function showText(message) {
    const textDisplay = document.getElementById('textDisplay');
    textDisplay.innerHTML = `<p>${message}</p>`;
}

function showText(content) {
    var textDisplay = document.getElementById('textDisplay');
    textDisplay.innerHTML = content;
}
