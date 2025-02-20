
// testando sucesso
// curl -XPOST 'http://localhost:3000/api/email' -d '{"message": "gostaria de saber alguma informacao", "email": "teste@teste.com"}' -H 'Content-type: application/json'

// testando falha
// curl -XPOST 'http://localhost:3000/api/email' -d '{"message": "gostaria de saber alguma informacao"}' -H 'Content-type: application/json'

export default function handler(req, res) {

  const message = req.body.message;
  const email = req.body.email;

  if (!message || !email) {
    res.status(400).json({ "status": "failed", "error": "message or e-mail is empty"});
    return;
  }

  // log
  console.log(message)
  console.log(email)

  // colocar resend aqui

  res.status(200).json({ "status": "success" });

  // se o resend falhar você retorna erro
  // res.status(500).json({ "status": "failed" });
}
