// testando sucesso
// curl -XPOST 'http://localhost:3000/api/email' -d '{"message": "gostaria de saber alguma informacao", "email": "teste@teste.com"}' -H 'Content-type: application/json'

// testando falha
// curl -XPOST 'http://localhost:3000/api/email' -d '{"message": "gostaria de saber alguma informacao"}' -H 'Content-type: application/json'
import nodemailer from 'nodemailer';

export default function handler(req, res) {
    const { nome, email, mensagem, cadastro } = req.body;

    // Verificar se todos os campos estão preenchidos
    if (!nome || !email || !mensagem) {
        return res.status(400).json({ status: 'failed', error: 'Nome, e-mail ou mensagem estão vazios.' });
    }

    // Log para verificar os dados recebidos
    console.log('Dados recebidos:', { nome, email, mensagem, cadastro });

    // Criar o transporte de e-mail
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        },
        tls: {
            rejectUnauthorized: false
        },
        connectionTimeout: 5000 // Para evitar timeout
    }, { serverless: true });
  

    // Configurar o conteúdo do e-mail
    const mailOptions = {
        from: 'viniciuslacerda972@gmail.com',
        to: 'viniciuslacerda972@gmail.com',  // seu e-mail de destino
        subject: `Nova mensagem de ${nome} pelo site`,
        text: `
            Você recebeu uma nova mensagem de contato:

            Nome: ${nome}
            E-mail: ${email}
            Mensagem: ${mensagem}

            Deseja receber atualizações: ${cadastro ? 'Sim' : 'Não'}
            
            *Mensagem enviada pelo site.*
        `
    };

    // Log para verificar o que está sendo enviado
    console.log('Enviando e-mail com as opções:', mailOptions);

    // Enviar o e-mail
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Erro ao enviar e-mail:', error); // Exibe o erro
            return res.status(500).json({ status: 'failed', error: 'Erro ao enviar e-mail.' });
        } else {
            console.log('E-mail enviado:', info); // Exibe o resultado
            return res.status(200).json({ status: 'success', messageId: info.messageId });
        }
    });
}
