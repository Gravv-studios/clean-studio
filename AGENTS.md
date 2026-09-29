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
