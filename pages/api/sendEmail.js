import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Método não permitido" });
    }

    const { nome, email, mensagem } = req.body;

    if (!nome || !email || !mensagem) {
        return res.status(400).json({ error: "Todos os campos são obrigatórios" });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail", // Ou outro provedor como SendGrid, Mailtrap, etc.
            auth: {
                user: process.env.EMAIL_USER, // Seu e-mail
                pass: process.env.EMAIL_PASS, // Senha ou App Password
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: "seu-email@exemplo.com", // Para onde os e-mails serão enviados
            subject: `Nova mensagem de ${nome}`,
            text: `Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`,
        };

        await transporter.sendMail(mailOptions);

        return res.status(200).json({ message: "E-mail enviado com sucesso!" });
    } catch (error) {
        return res.status(500).json({ error: "Erro ao enviar o e-mail", details: error.message });
    }
}
