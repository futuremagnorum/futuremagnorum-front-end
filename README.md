## Como rodar esse projeto?

```
npm install
npm run dev
```

## Como testar?

Acesse http://localhost:3000

## Como enviar e-mail?

Testa enviando dados com sucesso
```
curl -XPOST 'http://localhost:3000/api/email' -d '{"message": "gostaria de saber alguma informacao", "email": "teste@teste.com"}' -H 'Content-type: application/json'
```

Testa enviando dados com falha

```
curl -XPOST 'http://localhost:3000/api/email' -d '{"message": "gostaria de saber alguma informacao"}' -H 'Content-type: application/json'
```
