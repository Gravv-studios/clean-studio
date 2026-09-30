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

## CRM local separado do site

O domínio https://clean-studio-blue.vercel.app/ serve exclusivamente o site. A antiga query `?demo` não abre mais o CRM. O build público não importa nem contém os módulos do CRM.

- `npm run dev`: site em http://127.0.0.1:3000/.
- `npm run dev:crm`: CRM local em http://127.0.0.1:3001/ (Node 24 ou versão compatível com node:sqlite).
- `npm run test:crm`: testes das regras operacionais.
- `npm run build:crm`: valida a interface separada em dist-crm; não publica o CRM e não inclui o servidor.

O banco SQLite fica em `.local-crm/studio-clean.sqlite`, fora do Git e do build. Não apagar essa pasta. As gravações são validadas no servidor, com revisão para impedir que uma aba sobrescreva alterações de outra. O servidor só atende localhost/127.0.0.1 na porta 3001. Não expor este servidor de desenvolvimento à internet.

### Módulos implementados

- Visão geral: atendimentos do dia, comandas abertas, clientes, estoque baixo e comissão pendente.
- Agenda: cadastro e remarcação, profissionais habilitados, duração, expediente, bloqueios, conflitos, chegada, atendimento, conclusão, falta e cancelamento.
- Clientes: cadastro, edição, busca, aniversário, origem, preferências, autorização de contato e histórico.
- Comandas: atendimento vinculado ou venda avulsa, serviços e produtos, quantidades, desconto, recebimento, cancelamento e estorno.
- Caixa: abertura, fundo, recebimentos, despesas, suprimento, sangria, separação de Pix/cartão/dinheiro e fechamento com diferença.
- Serviços e equipe: preços, duração, situação, expedientes, dias, serviços habilitados e comissão editáveis.
- Comissões: cálculo sobre serviços pagos após desconto proporcional, repasse e histórico. Produtos não geram comissão. Estorno após repasse é bloqueado para revisão manual.
- Estoque: produtos, custo, preço, mínimo, entradas e saídas com motivo, baixa na venda e devolução no estorno.
- Relacionamento: aniversariantes, clientes sem retorno, histórico de contatos e texto copiável; nenhum envio automático.
- Relatórios: período, receita de comandas pagas, ticket médio, produção por profissional, situação dos atendimentos e CSV.
- Configurações: preferências, intervalo de retorno, histórico de alterações e exportação de backup JSON. Restauração técnica, sem importador na interface.

Preços e regras iniciais são exemplos autorizados pelo usuário e precisam ser conferidos pela loja. Horários usam o fuso local do computador. Caixa registra operações internamente, sem movimentar bancos. Receita não equivale a lucro; não há emissão fiscal. Uma comanda usa um profissional e uma forma de pagamento. O CRM local novo não importa automaticamente os testes do antigo localStorage.

### Próxima publicação em domínio próprio

Aguardar o domínio informado pelo usuário. O CRM não foi publicado. Para operação multiusuário online, implantar servidor de produção, banco persistente, autenticação, perfis de acesso, rotina de backup e HTTPS no projeto próprio. A API deste estágio é middleware do servidor local, não um backend para hospedagem estática.

Trinks, Google e WhatsApp automático dependem de acessos autorizados, definição de provedor e implementação/testes de sincronização. Referência Trinks: https://trinks.readme.io/reference/introducao.
