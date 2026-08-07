import fs from 'node:fs';

const site = fs.readFileSync('site/index.html', 'utf8');
const painel = fs.readFileSync('painel/index.html', 'utf8');

const produtos = [
  ['MODOX', 'https://www.modox.com.br'],
  ['MuralPlay', 'https://muralplay.com.br'],
  ['360social', 'https://360social.com.br'],
  ['Claridade', 'https://claridade.com.br'],
];
for (const [nome, url] of produtos) {
  if (!site.includes(url)) throw new Error(`${nome} não aponta para ${url}`);
}
console.log('✓ os quatro produtos apontam para os domínios oficiais');

for (const termo of [
  'Software e automação',
  'Infraestrutura e servidores',
  'Conectividade e eventos',
  'Firewall e segurança',
  'Redes lógicas, cabeamento, segmentação e disponibilidade',
  'Redes temporárias e conectividade para eventos',
]) {
  if (!site.includes(termo)) throw new Error(`Serviço ausente: ${termo}`);
}
console.log('✓ posicionamento cobre software, infraestrutura, conectividade e segurança');

if (site.includes('contato@arborlabs.com.br')) {
  throw new Error('O site público ainda expõe o e-mail de contato');
}
if (!site.includes('https://wa.me/5511918952030')) {
  throw new Error('WhatsApp oficial ausente do site público');
}
console.log('✓ contato público usa exclusivamente o WhatsApp solicitado');

for (const regra of [
  "const social = produto === '360social'",
  "SOCIAL_API_URL + '/functions/v1/painel-acesso-suporte'",
  "retorno.startsWith('https://app.360social.com.br/')",
  "throw new Error('destino de suporte divergente; acesso bloqueado por segurança')",
]) {
  if (!painel.includes(regra)) throw new Error(`Proteção de suporte ausente: ${regra}`);
}
console.log('✓ acesso de suporte do 360social bloqueia redirecionamento para outro produto');

if (!site.includes('a:focus-visible,button:focus-visible')) {
  throw new Error('Foco visível ausente nos controles do site');
}
console.log('✓ navegação por teclado mantém foco visível');
