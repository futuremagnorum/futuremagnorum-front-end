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

// Pausa a troca automática enquanto o usuário está com o mouse sobre a galeria
galleryImages.addEventListener('mouseenter', function() {
  clearInterval(intervalId); // Pausa o intervalo
});

// Retoma a troca automática quando o mouse sai da galeria
galleryImages.addEventListener('mouseleave', function() {
  intervalId = setInterval(nextImage, 5000); // Retoma o intervalo
});






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






const numStars = 800; // Número de estrelas
const starContainer = document.getElementById("star-container"); // Pegando o contêiner correto

// Função para criar uma estrela
function createStar() {
    const star = document.createElement("div");
    star.classList.add("star");

    // Posição aleatória
    const totalWidth = window.innerWidth;
    const totalHeight = window.innerHeight;

    star.style.left = `${Math.random() * totalWidth}px`;
    star.style.top = `${Math.random() * totalHeight}px`;

    // Atraso aleatório na animação
    star.style.animationDelay = `${Math.random() * 2}s`;

    // Adiciona a estrela no contêiner
    starContainer.appendChild(star);
}

// Criar várias estrelas
function initializeStars() {
    for (let i = 0; i < numStars; i++) {
        createStar();
    }
}

// Redimensionamento da tela
function resizeStars() {
    starContainer.innerHTML = ""; // Remove estrelas antigas
    initializeStars();
}

// Inicializa as estrelas
initializeStars();

// Ajusta estrelas quando a janela for redimensionada
window.addEventListener("resize", resizeStars);



document.getElementById("contato-form").addEventListener("submit", async function(event) {
    event.preventDefault();
    
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    const response = await fetch("/enviar-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, mensagem })
    });

    const result = await response.json();
    document.getElementById("status").innerText = result.mensagem;
});


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


document.getElementById("contato-form").addEventListener("submit", async function(event) {
    event.preventDefault();
    
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;
    const cadastrar = document.getElementById("cadastro").checked; // Verifica se o checkbox foi marcado

    // Envia para o backend
    const response = await fetch("/enviar-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, mensagem, cadastrar })
    });

    const result = await response.json();
    document.getElementById("status").innerText = result.mensagem;
});






    // Seleciona o formulário e a área de feedback
    const form = document.getElementById('atualizacao-form');
    const feedback = document.getElementById('feedback');
  
    // Adiciona um evento de submit ao formulário
    form.addEventListener('submit', function(event) {
      // Impede o envio do formulário de forma padrão
      event.preventDefault();
  
      // Coleta os valores dos campos do formulário
      const assunto = document.getElementById('assunto').value;
      const corpo = document.getElementById('corpo').value;
  
      // Verifica se os campos não estão vazios
      if (assunto && corpo) {
        console.log('Assunto:', assunto);
        console.log('Corpo:', corpo);
        
        // Exibe uma mensagem de carregamento
        feedback.textContent = 'Enviando atualização...';
        feedback.style.color = 'blue';
  
        // Envia os dados para o servidor (exemplo com fetch)
        fetch('http://localhost:3000/api/atualizacao', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            assunto: assunto,
            corpo: corpo
          })
        })
        .then(response => response.json())
        .then(data => {
          // Exibe mensagem de sucesso
          feedback.textContent = 'Atualização enviada com sucesso!';
          feedback.style.color = 'green';
        })
        .catch(error => {
          // Exibe mensagem de erro
          feedback.textContent = 'Erro ao enviar a atualização. Tente novamente.';
          feedback.style.color = 'red';
        });
      } else {
        // Exibe mensagem de erro caso os campos não estejam preenchidos
        feedback.textContent = 'Por favor, preencha todos os campos.';
        feedback.style.color = 'red';
      }
    });


    document.getElementById('form-contato').addEventListener('submit', async function(event) {
        event.preventDefault(); // Evita que a página recarregue
    
        const formData = new FormData(this);
        const data = {};
    
        formData.forEach((value, key) => {
            data[key] = value;
        });
    
        try {
            const response = await fetch('/enviar-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
    
            const result = await response.json();
            alert(result.mensagem);
        } catch (error) {
            alert('Erro ao enviar a mensagem.');
        }
    });


    document.addEventListener("DOMContentLoaded", function () {
        emailjs.init("SEU_USER_ID"); // Substitua pelo seu User ID do EmailJS
    
        document.getElementById("form-contato").addEventListener("submit", function (event) {
            event.preventDefault(); // Impede o envio padrão do formulário
    
            emailjs.sendForm("SEU_SERVICE_ID", "SEU_TEMPLATE_ID", this)
                .then(function () {
                    alert("Mensagem enviada com sucesso!");
                    document.getElementById("form-contato").reset();
                })
                .catch(function (error) {
                    alert("Erro ao enviar mensagem. Tente novamente.");
                    console.error("Erro:", error);
                });
        });
    });


    document.getElementById("emailForm").addEventListener("submit", async function(event) {
        event.preventDefault(); // Evita recarregar a página

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const mensagem = document.getElementById("mensagem").value;
        const cadastro = document.getElementById("cadastro").checked;

        const statusMsg = document.getElementById("status");
        statusMsg.textContent = "Enviando...";

        try {
            const response = await fetch("/enviar-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ nome, email, mensagem, cadastro })
            });

            const data = await response.json();
            if (response.ok) {
                statusMsg.textContent = "Mensagem enviada com sucesso!";
                statusMsg.style.color = "green";
            } else {
                statusMsg.textContent = "Erro ao enviar mensagem.";
                statusMsg.style.color = "red";
            }
        } catch (error) {
            statusMsg.textContent = "Erro de conexão. Tente novamente.";
            statusMsg.style.color = "red";
        }
    });

        // Seleciona o ícone de "hamburguer" e a lista de navegação
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.navbar1 ul');

    // Adiciona um evento de clique no ícone de "hamburguer"
    hamburger.addEventListener('click', () => {
        // Alterna a classe "active" que mostra ou esconde o menu
        navLinks.classList.toggle('active');
    });

    document.getElementById("hamburger-icon").addEventListener("click", function() {
        var navbarLinks = document.getElementById("navbar-links");
        navbarLinks.classList.toggle("active");
    });

    document.addEventListener("DOMContentLoaded", function() {
        const hamburger = document.querySelector(".hamburger");
        const navbarList = document.querySelector(".navbar1 ul");
    
        hamburger.addEventListener("click", function() {
          navbarList.classList.toggle("active");
        });
      });
    

      document.addEventListener("DOMContentLoaded", function() {
        const hamburger = document.getElementById('hamburger');
        const navbarLinks = document.querySelector('.navbar1 ul'); // Certifique-se de que o seletor está correto
      
        hamburger.addEventListener('click', function() {
          navbarLinks.classList.toggle('active');
        });
      });
      