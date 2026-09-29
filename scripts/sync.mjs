import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const expectedRemote = 'https://github.com/Gravv-studios/clean-studio.git';
function run(command, args, capture = false) {
 const result = spawnSync(command, args, { cwd: root, stdio: capture ? 'pipe' : 'inherit', encoding: 'utf8', windowsHide: true });
 if (result.error) throw result.error;
 if (result.status !== 0) throw new Error(`${command} falhou (${result.status}). ${capture ? result.stderr : ''}`);
 return capture ? result.stdout.trim() : '';
}
try {
 const message = process.argv.slice(2).join(' ').trim();
 if (!message) throw new Error('Informe a descrição: npm run sync -- "Descrição da atualização"');
 if (run('git', ['remote', 'get-url', 'origin'], true) !== expectedRemote) throw new Error('Origin difere do repositório autorizado.');
 if (run('git', ['branch', '--show-current'], true) !== 'main') throw new Error('Sincronização automática disponível somente na branch main.');
 // Não gera commits sem identidade explícita nem faz alterações globais no Git.
 run('git', ['var', 'GIT_AUTHOR_IDENT'], true);
 run('git', ['fetch', 'origin']);
 const remote = run('git', ['for-each-ref', '--format=%(refname)', 'refs/remotes/origin/main'], true);
 if (remote) run('git', ['merge-base', '--is-ancestor', 'origin/main', 'HEAD']);
 run(process.execPath, [path.join(root, 'node_modules/vite/bin/vite.js'), 'build']);
 const allowed = ['src/', 'assets/', 'scripts/'];
 const files = ['index.html','package.json','package-lock.json','vite.config.js','README.md','.gitignore','AGENTS.md'];
 const staged = run('git', ['diff', '--cached', '--name-only'], true).split('\n').filter(Boolean);
 if (staged.some(file => !files.includes(file) && !allowed.some(prefix => file.startsWith(prefix)))) throw new Error('Há arquivos fora do escopo preparados para commit. Revise-os antes de sincronizar.');
 run('git', ['add', '-A', '--', ...allowed, ...files]);
 const changed = run('git', ['diff', '--cached', '--name-only'], true);
 if (changed) run('git', ['commit', '-m', message]);
 else console.log('Sem novas alterações para commit.');
 run('git', ['push', '-u', 'origin', 'main']);
 console.log('Sincronização concluída.');
} catch (error) {
 console.error(`Sincronização interrompida: ${error.message}`);
 process.exitCode = 1;
}
