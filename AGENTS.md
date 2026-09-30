# Instruções deste projeto

## Sincronização autorizada pelo usuário

O usuário solicitou commits automáticos ao concluir cada atualização feita neste projeto e envio ao repositório https://github.com/Gravv-studios/clean-studio.git.

- Ao finalizar uma alteração solicitada, executar a validação adequada e `npm run sync -- "Descrição objetiva da atualização"` antes de entregar a resposta final.
- O comando valida a compilação, cria um commit somente se houver alterações e envia a branch main para origin.
- Não criar automações por intervalo, cron, lembretes ou verificações de 10 em 10 minutos. Esta regra se aplica ao encerramento de uma atualização feita pelo agente, não a cada salvamento de arquivo.
- Não criar commits vazios, não usar force push, não alterar histórico e não sobrescrever alterações remotas. Se houver divergência, preservar ambas as versões e resolver antes de enviar.
- Conferir o diff antes de sincronizar. Não incluir alterações de terceiros sem relação com a tarefa nem segredos, arquivos .env, node_modules, dist ou capturas temporárias.
- Nunca declarar sincronização concluída se o push falhar. Informar o impedimento e preservar o commit local.
- Mensagens dos commits devem descrever a mudança em português. Cada atualização concluída pode conter várias edições e um único commit.

## Entrega em produção

- Endereço público principal: https://clean-studio-blue.vercel.app/.
- A Vercel está conectada à branch main deste repositório. Após enviar uma atualização, conferir o status Vercel do commit e a versão pública antes de declarar que está publicada.
- O usuário pediu entrega na Vercel, não apenas em localhost. Usar o endereço público na resposta final. Localhost serve somente para desenvolvimento e testes.
- Se a publicação falhar ou continuar pendente, informar isso claramente; push concluído não significa publicação concluída.

## CRM em projeto próprio

- Pedidos relacionados ao CRM devem ser executados em C:/Users/Marcos/Documents/workspace02/crm-studio-clean, seguindo o AGENTS.md daquela pasta.
- Repositório do CRM: https://github.com/Gravv-studios/crm-studio-clean.git. Nunca enviar mudanças do CRM ao origin do site.
- O CRM local roda em http://127.0.0.1:3001/. Não recriar seus arquivos neste projeto.
- Este repositório mantém somente o site público. Se uma tarefa modificar apenas o CRM, sincronizar apenas o repositório do CRM; se modificar os dois, validar e sincronizar cada um separadamente.
- Preservar o banco antigo em .local-crm como cópia da migração; o banco em uso fica na pasta do CRM.
