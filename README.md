# Teache Aposta 🎰

Projeto educacional de casa de aposta com Pix via Mercado Pago (sandbox).

## Estrutura
- `/public` → Site HTML
- `/api` → Rotas serverless (Pix, webhook, admin)
- `/admin` → Painel administrativo
- `.env.example` → Variáveis de ambiente
- `vercel.json` → Configuração para deploy

## Deploy
1. Crie conta na **Vercel** e importe este projeto.
2. Configure as variáveis de ambiente:
   - `MP_ACCESS_TOKEN=TEST-XXXXXXXXXXXXXXXXXXXXXXXX`
   - `MONGODB_URI=mongodb+srv://<user>:<pass>@cluster.mongodb.net/teache`
   - `MP_ENV=sandbox`
3. Deploy automático.
4. Acesse `/admin` para o painel ADM (login admin/admin123).

⚠️ Este projeto é educativo. Para produção, use credenciais reais do Mercado Pago e revise compliance legal.
