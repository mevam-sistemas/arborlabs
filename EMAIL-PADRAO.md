# Padrão de e-mail · Arbor Labs

Todos os produtos usam a mesma infraestrutura transacional:

- provedor: Brevo;
- domínio de envio: `arborlabs.com.br`;
- resposta central: `contato@arborlabs.com.br`;
- autenticação: SPF aplicável, DKIM e DMARC;
- modelos: confirmação, convite, recuperação e mensagens operacionais com a
  identidade do produto e assinatura “um produto Arbor Labs”;
- observabilidade: resposta do provedor, identificador da mensagem, categoria e
  produto registrados sem gravar conteúdo sensível;
- segurança: chaves apenas nos cofres do Supabase, Netlify ou Firebase; nunca no
  navegador ou repositório.

## Remetentes planejados

Enquanto os aliases não forem criados no Google Workspace, os produtos usam
`contato@arborlabs.com.br`. Depois da criação, a troca ocorrerá sem alterar o
provedor:

- `modox@arborlabs.com.br` — MODOX · Arbor Labs;
- `claridade@arborlabs.com.br` — Claridade · Arbor Labs;
- `360social@arborlabs.com.br` — 360social · Arbor Labs;
- `muralplay@arborlabs.com.br` — MuralPlay · Arbor Labs;
- `contato@arborlabs.com.br` — Arbor Labs e endereço central de resposta.

Caixas ou aliases do Google Workspace recebem respostas humanas. O Google não é
usado como motor de mensagens automáticas; essa responsabilidade permanece na
Brevo.
