import fetch from 'node-fetch';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send('Method not allowed');
  const token = process.env.MP_ACCESS_TOKEN || 'TEST-XXXXXXXXXXXXXXXXXXXXXXXX';
  const { amount, email } = req.body;
  const body = {
    transaction_amount: Number(amount||1.0),
    description: 'Depósito Teache Aposta',
    payment_method_id: 'pix',
    payer: { email: email || 'teste@example.com' }
  };
  try {
    const r = await fetch('https://api.mercadopago.com/v1/payments', {
      method: 'POST',
      headers: {'Authorization':`Bearer ${token}`,'Content-Type':'application/json'},
      body: JSON.stringify(body)
    });
    const data = await r.json();
    return res.status(200).json({
      id: data.id,
      status: data.status,
      qr_code: data.point_of_interaction?.transaction_data?.qr_code,
      qr_base64: data.point_of_interaction?.transaction_data?.qr_code_base64
    });
  } catch(e){
    return res.status(500).json({error:String(e)});
  }
}
