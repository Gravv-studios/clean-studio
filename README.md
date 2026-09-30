# Studio Clean Barber & Beauty

Site React + Vite baseado no mockup e nas fotografias originais da pasta assets.

## Executar

- `npm install`
- `npm run dev` — prévia local na porta 3000.
- `npm run build` — gera a pasta dist para hospedagem estática.
- `npm run preview` — revisa a versão compilada.

## Agendamento

O visitante escolhe um serviço e segue por um de dois caminhos:

- Agenda online: a agenda oficial carrega sob demanda pela entrada documentada /framebusca, em um único iframe. O visitante escolhe novamente o serviço no Trinks e segue para dia e hora. Há abertura alternativa em nova aba e recarga manual, sem repetição automática. Serviço, disponibilidade, valores e confirmação são gerenciados no Trinks.
- WhatsApp: o visitante pode informar nome, profissional de preferência, dia e horário exato obrigatórios. O site prepara uma mensagem no número 55 61 99249-4249. A mensagem precisa ser enviada pelo visitante no WhatsApp e a reserva depende da confirmação da recepção.

O catálogo completo do Trinks pode ser aberto dentro da seção de agendamento usando o módulo oficial /framebusca. Se não carregar, há um link alternativo para nova aba.

Não há armazenamento local de dados pessoais, envio automático de mensagens ou criação de reservas pelo site. Profissional e dia escolhidos no formulário são preferências para a recepção; não representam disponibilidade confirmada. Os cartões da equipe abrem o formulário da recepção com o profissional preenchido. A área de reserva também permite escolher o profissional por foto e nome; a escolha acompanha a mensagem de WhatsApp. Ao trocar o serviço, a preferência é limpa. Na agenda oficial, o visitante seleciona o profissional novamente no Trinks. A recepção recebe somente uma solicitação, sem disponibilidade presumida.

Os destinos de serviços foram conferidos no catálogo público em 29/09/2026 e estão em src/data/bookingData.js. Se o estabelecimento recriar serviços no Trinks, conferir os respectivos identificadores.

Documentação oficial do módulo: https://ajuda.trinks.com/tenha-o-agendamento-online-da-trinks-no-seu-proprio-site

## Referências e manutenção

- Identidade, composição e fotos dos ambientes: assets/mokup.png e arquivos originais em assets.
- Nomes, cargos e fotos de Gustavo, Matheus, Alan e Edilene: página pública oficial do Trinks, consultada em 26/09/2026. Cópias locais em assets/team.
- Telefone, horário de funcionamento, estacionamento e regras de cancelamento: mesma página oficial.
- Instagram e nome do edifício: dados preexistentes do projeto e referências locais.
- Conteúdo principal e contatos: src/App.jsx. Link do Trinks e imagens: src/data/siteData.js. Aparência responsiva: src/styles/index.css.
- As fotos da equipe fornecidas pelo Trinks têm resolução de 120 × 120, por isso são exibidas em retratos compactos.

## Publicação

Publicar o conteúdo de dist em hospedagem estática. Produção: https://clean-studio-blue.vercel.app/. A Vercel publica os envios à branch main. Após definir o domínio, configurar URL canônica e imagem social absoluta. O catálogo e as reservas continuam sob responsabilidade do Trinks.



## Verificação da incorporação

Após o ajuste para /framebusca, foram conferidos no navegador o catálogo, Corte Masculino e o calendário com horários reais dentro do site. Nenhuma reserva foi concluída. A mensagem de excesso de tentativas é uma verificação do serviço externo; o ajuste não garante que o bloqueio nunca reapareça. Se persistir no domínio publicado, contatar o suporte Trinks com a URL e a captura do erro.


## Sincronização com GitHub

Repositório: https://github.com/Gravv-studios/clean-studio

Ao concluir cada atualização feita pelo agente, as instruções de AGENTS.md determinam validar, criar commit e enviar ao GitHub. Não há agendamento periódico nem processo observando cada salvamento.

Para sincronizar edições manuais: `npm run sync -- "Descrição da atualização"`.

O comando valida a compilação e interrompe em caso de falha ou divergência remota. Nunca usa force push. Sem alterações, não cria commit vazio. A Vercel conectada ao repositório publica a branch main automaticamente; conferir o status do deployment antes de considerar a atualização entregue.

## Demonstração de agenda e CRM

Abra `http://127.0.0.1:3000/?demo` após `npm run dev`. O mesmo modo fica disponível na publicação com `/?demo`. O site principal preserva o fluxo oficial do Trinks.

- **Agendar:** escolha serviço, profissional, data e horário e use nome e telefone fictícios. A solicitação gera cadastro de cliente por telefone e atendimento no CRM.
- **Agenda:** filtre por cliente, profissional, data ou situação; confirme, conclua ou cancele atendimentos. O cancelamento libera o horário.
- **Clientes:** consulte histórico e edite observações; tudo é salvo no navegador.
- **Conexões:** mostra o estado real de cada integração e permite restaurar os exemplos.

Durações são ilustrativas. A disponibilidade considera duração, sobreposição por profissional, horário de encerramento, domingos e horários passados. Datas e horários seguem o fuso do navegador. As reservas de demonstração não são enviadas ao Trinks. Dados locais não são compartilhados entre dispositivos; esta versão não tem autenticação e deve usar exclusivamente dados fictícios. Uma única aba deve ser usada para editar a demonstração.

Para operar com clientes reais: implantar backend, banco de dados, autenticação e controle de acesso; obter acesso autorizado à API Trinks e identificar estabelecimento, profissionais e serviços; definir provedor de WhatsApp e conta Google; implementar sincronização e validar conflitos e cancelamentos. Nunca colocar chaves de API no frontend.

Referência oficial: https://trinks.readme.io/reference/introducao e https://trinks.readme.io/reference/post_v1-agendamentos.
