const nodemailer = require('nodemailer');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { Resend } =require ('resend');
const resend = new Resend('re_NquLbChU_ELRpoYsVdKNhhTRmePNgriDG');
app.use(express.static('public'))

app.use(express.json()); // Para analisar o corpo da requisição como JSON

// Configuração do servidor de envio de e-mails
const transporter = nodemailer.createTransport({
  service: 'gmail', // Ou outro serviço de sua escolha
  auth: {
    user: 'Futuremagnorum@gmail.com', // Seu e-mail
    pass: 'rxou mgrn tqmd znks' // Sua senha de aplicativo ou senha normal
  }
});

app.get('/test', (req, res) => {
  

  resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'viniciuslacerda972@gmail.com',
    subject: 'Hello World',
    html: '<p>deu certo<strong>first email</strong>!</p>'
  });
  res.json({ mensagem: 'oi!' });
})

app.post('/enviar-email', (req, res) => {
  console.log(req.body); // Verifique o conteúdo do corpo da requisição
  const { nome, email, mensagem, cadastro } = req.body;

  resend.emails.send({
    from: "Futuremagnorum@gmail.com",
    to: "viniciuslacerda972@gmail.com",
    subject: 'Novo contato',
    html: `
      <p><strong>Nome:</strong> ${nome}</p>
      <p><strong>Mensagem:</strong> ${mensagem}</p>
      <p><strong>Cadastro para atualizações:</strong> ${cadastro ? 'Sim' : 'Não'}</p>
    `
  })
  .then(() => {
    res.json({ mensagem: 'Mensagem enviada com sucesso!' });
  })
  .catch(error => {
    console.error('Erro ao enviar e-mail:', error);
    res.status(500).json({ mensagem: 'Erro ao enviar e-mail.' });
  });
});

  
  const fs = require('fs'); // Para ler o arquivo de e-mails

  
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});