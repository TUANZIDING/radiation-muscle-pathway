// v0.5 verification: evidence-contract checks on the registry, then browser checks on the built atlas.
// Usage: node build-v05.mjs && node scripts/export-v05.mjs && node verify-v05.mjs
// Set CHROMIUM_PATH to use a system Chromium; set SKIP_BROWSER=1 to run only the data checks.
import {mkdirSync,readFileSync,writeFileSync,existsSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {views,viewNodes,viewEdges,navigation,sources,excluded,externalIds} from './atlas/src/data.js';
import {doseProfile,eqd2} from './atlas/src/dose.js';

const root=fileURLToPath(new URL('.',import.meta.url));
const out=root+'docs/v0.5';mkdirSync(out,{recursive:true});
const checks=[];const errors=[];
const check=(name,value)=>{const pass=Boolean(value);checks.push({name,pass});if(!pass)throw new Error('FAILED: '+name);};
const hasText=v=>typeof v==='string'?v.trim().length>0:Boolean(v?.zh&&v?.en);
const allEdges=Object.values(viewEdges).flat();
const allNodes=Object.values(viewNodes).flat();

// ---- evidence contract (carried over from v0.4) ----
check('original three views keep six stages',['overview','musc-fap-ecm','dna-redox'].every(id=>views[id]?.stages?.length===6));
check('four v0.5 scaffold views declared',['vessel-endothelium','immune-macrophage','senescence-p21','ev-mirna'].every(id=>views[id]?.scaffold&&views[id].stages.length>=2));
check('all stages have positive durations',Object.values(views).every(v=>v.stages.every(s=>s.duration>0)));
check('all evidence edges have metadata',allEdges.every(e=>e.id&&e.level&&e.kind&&hasText(e.model)&&hasText(e.dose)&&hasText(e.time)&&hasText(e.method)&&hasText(e.functional)&&hasText(e.limits)&&e.refs?.length));
check('edge ids are unique',new Set(allEdges.map(e=>e.id)).size===allEdges.length);
check('all references resolve to PMID or URL',allEdges.every(e=>e.refs.every(id=>sources[id]?.pmid||sources[id]?.url)));
check('all edge endpoints resolve',Object.entries(viewEdges).every(([v,es])=>es.every(e=>viewNodes[v].some(n=>n.id===e.source)&&viewNodes[v].some(n=>n.id===e.target))));
check('navigation targets resolve',navigation.every(n=>views[n.view]&&views[n.targetView]&&viewNodes[n.view].some(x=>x.id===n.source)&&viewNodes[n.targetView].some(x=>x.id===n.targetNode)));
check('direct/observed/pharmacology use A',allEdges.filter(e=>['direct','observed','pharmacology'].includes(e.kind)).every(e=>e.level==='A'));
check('reference relations use B',allEdges.filter(e=>e.kind==='reference').every(e=>e.level==='B'));
check('inference and candidate use C',allEdges.filter(e=>['inference','candidate'].includes(e.kind)).every(e=>e.level==='C'));
check('partial rescue stays conditional',allEdges.filter(e=>e.kind==='partial').every(e=>['B','C'].includes(e.level)));
check('excluded boundaries X01–X08 present',['X01','X02','X03','X04','X05','X06','X07','X08'].every(id=>excluded.some(x=>x.id===id)));
check('p-SMAD3 early-only edge preserved',viewEdges['musc-fap-ecm'].some(e=>e.id==='A07'&&e.stage===2&&String(e.time.zh).includes('56 d恢复')));
check('WNT7A-PCP stays separate',viewEdges['musc-fap-ecm'].some(e=>e.id==='A18')&&viewEdges['musc-fap-ecm'].some(e=>e.id==='A16'));
check('A08 and A10 are still not drawn',!allEdges.some(e=>['A08','A10'].includes(e.id)));
check('no FAP-TGF-β1 → MuSC edge',!allEdges.some(e=>/fap/i.test(e.source)&&/musc|myogenesis/i.test(e.target)&&/TGF/.test(JSON.stringify(e.label))));
// ---- v0.5 specific ----
check('scaffold nodes carry no evidence edge',allNodes.filter(n=>n.status==='scaffold').every(n=>!allEdges.some(e=>e.source===n.id||e.target===n.id)));
check('every scaffold view has at least one scaffold node',Object.values(views).filter(v=>v.scaffold).every(v=>viewNodes[v.id].some(n=>n.status==='scaffold')));
check('every A-grade edge has dose regimens and a model',allEdges.filter(e=>e.level==='A'&&!['A05'].includes(e.id)).every(e=>doseProfile(e.id).regimens.length>0&&hasText(e.model)));
check('EQD2 arithmetic: 8.2 Gy x3 ≈ 55.1 Gy',eqd2(8.2,3)===55.1);
check('EQD2 arithmetic: 16 Gy x1 ≈ 60.8 Gy',eqd2(16,1)===60.8);
check('EQD2 is never computed for unknown fractionation',eqd2(30,null)===null);
check('fractionation-unknown regimens classed unknown',doseProfile('D10').classes.includes('unknown'));
check('in vitro regimens never get EQD2',allEdges.every(e=>doseProfile(e.id).regimens.every(r=>r.setting==='invivo'||r.eqd2==null)));
check('new literature edges keep honest grades',viewEdges['ev-mirna'].find(e=>e.id==='E03').level==='C'&&viewEdges['ev-mirna'].find(e=>e.id==='E05').level==='C'&&viewEdges['ev-mirna'].find(e=>e.id==='E02').level==='A');
check('neonatal EV hypothesis is a scaffold, not an edge',viewNodes['ev-mirna'].find(n=>n.id==='ev-neonatal')?.status==='scaffold');
check('external ids use valid prefixes',Object.values(externalIds).every(ids=>Object.entries(ids).every(([k,v])=>({cl:/^CL:\d{7}$/,reactome:/^R-HSA-\d+$/,hgnc:/^[A-Z0-9]+$/,mgi:/^[A-Z][a-z0-9]+$/})[k]?.test(v))));
check('external ids point at existing nodes',Object.keys(externalIds).every(id=>allNodes.some(n=>n.id===id)));
// ---- exported registry ----
const regPath=root+'data/atlas-v0.5.json';
check('registry exported',existsSync(regPath));
const reg=JSON.parse(readFileSync(regPath,'utf8'));
check('registry matches source data',reg.edges.length===allEdges.length&&reg.nodes.length===allNodes.length);
check('registry edges carry required schema fields',reg.edges.every(e=>['id','view','source','target','sign','grade','kind','refs','model','dose','time','limitation'].every(k=>k in e)&&['A','B','C'].includes(e.grade)&&Array.isArray(e.dose.regimens)));
check('registry navigation is N-only',reg.navigation.every(n=>n.grade==='N'));
check('csv and sbgn exported',existsSync(root+'exports/evidence-table-v0.5.csv')&&readFileSync(root+'exports/atlas-v0.5.sbgn','utf8').includes('language="activity flow"'));
check('v0.3/v0.4 edges preserved in registry',['A01','A06','A07','A09','A11','A12','O03','OV-A1','OV-B1','D05','D13','D15'].every(id=>reg.edges.some(e=>e.id===id)));

// ---- browser checks ----
if(!process.env.SKIP_BROWSER){
  const {chromium}=await import('playwright');
  const launch={headless:true,args:['--no-sandbox']};if(process.env.CHROMIUM_PATH)launch.executablePath=process.env.CHROMIUM_PATH;
  const browser=await chromium.launch(launch);
  const page=await browser.newPage({viewport:{width:1366,height:900}});page.on('pageerror',e=>errors.push(e.message));
  await page.goto(new URL('./atlas/index.html#overview',import.meta.url).href);await page.waitForLoadState('load');
  const state=()=>page.evaluate(()=>window.atlasV05.getState());
  check('Chinese default and v0.5 title',(await state()).lang==='zh'&&(await page.title()).includes('v0.5'));
  check('overview renders 9 nodes, 9 edges, 7 navigation lines',await page.locator('.atlas-node').count()===9&&await page.locator('.atlas-edge').count()===9&&await page.locator('.navigation-edge').count()===7);
  check('view list shows seven modules',await page.locator('#viewList .view-button').count()===7);
  check('dose filter renders five options',await page.locator('#doseFilters .dose-button').count()===5);
  await page.evaluate(()=>window.atlasV05.setDoseFilter('high'));
  const dimmed=await page.locator('.atlas-edge.hidden-dose').count();
  check('high-dose filter dims RT-only edges but keeps 50 Gy edges',dimmed>0&&!(await page.locator('[data-edge-id="OV-A6"]').getAttribute('class')).includes('hidden-dose')&&(await page.locator('[data-edge-id="OV-A3"]').getAttribute('class')).includes('hidden-dose'));
  await page.evaluate(()=>window.atlasV05.setDoseFilter('all'));
  check('dose filter reset clears dimming',await page.locator('.atlas-edge.hidden-dose').count()===0);
  await page.evaluate(()=>window.atlasV05.selectEdge('OV-A3'));
  check('edge inspector shows EQD2',(await page.locator('#dose').textContent()).includes('EQD2 ≈ 60.8 Gy'));
  for(const id of ['vessel-endothelium','immune-macrophage','senescence-p21','ev-mirna']){
    await page.evaluate(v=>{window.atlasV05.navigate(v);window.scrollTo(0,0);},id);await page.waitForTimeout(100);
    check(`${id} renders nodes, edges and scaffolds`,(await state()).viewId===id&&await page.locator('.atlas-node').count()===viewNodes[id].length&&await page.locator('.atlas-edge').count()===viewEdges[id].length&&await page.locator('.status-scaffold').count()===viewNodes[id].filter(n=>n.status==='scaffold').length);
    await page.screenshot({path:`${out}/${id}.png`});
  }
  await page.evaluate(()=>window.atlasV05.navigate('ev-mirna'));
  await page.evaluate(()=>window.atlasV05.selectNode('ev-neonatal'));
  check('scaffold node inspector says evidence pending',(await page.locator('#gradeBadge').textContent()).includes('证据待补'));
  await page.evaluate(()=>window.atlasV05.setLanguage('en'));
  check('English switch keeps view',(await state()).viewId==='ev-mirna'&&(await page.locator('#gradeBadge').textContent()).includes('evidence pending'));
  await page.evaluate(()=>{window.atlasV05.setLanguage('zh');window.atlasV05.navigate('overview');window.scrollTo(0,0);});await page.waitForTimeout(150);
  await page.screenshot({path:`${out}/desktop-overview.png`});
  for(const [w,h] of [[390,844],[320,844],[844,390]]){
    await page.setViewportSize({width:w,height:h});await page.waitForTimeout(150);
    check(`layout ${w}x${h} has no horizontal page overflow`,await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth+1));
    await page.screenshot({path:`${out}/${w}x${h}.png`,fullPage:false});
  }
  check('no page errors',errors.length===0);
  await browser.close();
}
writeFileSync(out+'/validation.json',JSON.stringify({version:'0.5',checks,errors},null,2)+'\n');
console.log(`v0.5 verification passed: ${checks.length} checks.`);
