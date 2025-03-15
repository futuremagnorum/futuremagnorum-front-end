export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Método não permitido" });
    }

    try {
        const response = await fetch("https://script.google.com/macros/s/AKfycbxhd0Nc8-FpRfCrQSfT_b5mjudCcyj_Vf3BOTj872bhHbqdW_UGHAsf0-tHH1Vc9w5F/exec", {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*" // Permitir requisições de qualquer domínio
            },
            body: JSON.stringify(req.body),
        });

        const data = await response.text();
        res.status(200).json({ message: data });
    } catch (error) {
        console.error("Erro no proxy:", error);
        res.status(500).json({ error: "Erro ao processar a solicitação" });
    }
}
