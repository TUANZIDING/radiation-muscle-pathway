import {build} from 'esbuild';
import {readFileSync,writeFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
const dir=fileURLToPath(new URL('.',import.meta.url));
const result=await build({entryPoints:[dir+'src/app.js'],bundle:true,minify:true,format:'iife',write:false,legalComments:'inline'});
const html=readFileSync(dir+'src/template.html','utf8').replace('/*STYLE*/',readFileSync(dir+'src/style.css','utf8')).replace('/*SCRIPT*/',()=>result.outputFiles[0].text.replaceAll('</script','<\\/script'));
writeFileSync(dir+'index.html',html);console.log('Built standalone offline HTML: '+dir+'index.html');
