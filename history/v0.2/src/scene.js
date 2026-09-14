import * as T from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import {steps} from './content.js';
const V=(x,y,z=0)=>new T.Vector3(x,y,z);
export function createScene(host,labelHost,onSelect){
const scene=new T.Scene(),camera=new T.PerspectiveCamera(35,1,.1,150),renderer=new T.WebGLRenderer({antialias:true,alpha:true,preserveDrawingBuffer:true});
renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.setClearColor(0,0);host.append(renderer.domElement);renderer.outputColorSpace=T.SRGBColorSpace;
scene.add(new T.HemisphereLight('#ffffff','#bfd1c4',2.2));for(const [x,y,z,c,p] of [[-5,9,12,'#fff6e6',2.3],[8,-3,-5,'#c7e0ef',1.5]]){const l=new T.DirectionalLight(c,p);l.position.set(x,y,z);scene.add(l);}
const controls=new OrbitControls(camera,renderer.domElement);controls.enableDamping=true;controls.enablePan=false;controls.minDistance=14;controls.maxDistance=65;controls.minPolarAngle=.7;controls.maxPolarAngle=2.2;
const groups=steps.map(()=>{const g=new T.Group();scene.add(g);return g;}),picks=[],labels=[],routes=[],receptorP=[],smadP=[],ros=[],fibres=[];
const mat=(c,opacity=1)=>new T.MeshStandardMaterial({color:c,roughness:.4,metalness:.07,transparent:opacity<1,opacity,depthWrite:opacity===1});
function sphere(parent,p,r,c,scale=[1,1,1]){const m=new T.Mesh(new T.SphereGeometry(r,20,14),mat(c));m.position.copy(p);m.scale.set(...scale);parent.add(m);return m;}
function tube(parent,a,b,r,c){const d=b.clone().sub(a),m=new T.Mesh(new T.CylinderGeometry(r,r,d.length(),10),mat(c));m.position.copy(a).add(b).multiplyScalar(.5);m.quaternion.setFromUnitVectors(V(0,1),d.normalize());parent.add(m);return m;}
function blob(g,p,c,r=.3){const sub=new T.Group();g.add(sub);sphere(sub,p,r,c,[1.1,1,.86]);for(let j=0;j<5;j++){const a=j*2.4;sphere(sub,p.clone().add(V(Math.cos(a)*r*.75,Math.sin(a)*r*.7,Math.sin(a*2)*r*.4)),r*.5,c);}return sub;}
function label(i,p,title,sub,follow=null){const el=document.createElement('button');el.className='mol-label';el.innerHTML=title+`<small>${sub}</small>`;el.onclick=()=>onSelect(i);el.setAttribute('aria-label',`选择 ${title}`);labelHost.append(el);labels.push({i,p,title,sub,el,follow});}
function route(id,points,{color='#65a395',dashed=false,inhibit=false,phase=0,branch='tgfb',summary=''}={}){
 const curve=new T.CatmullRomCurve3(points),root=new T.Group();scene.add(root);let line;
 if(dashed){line=new T.Line(new T.BufferGeometry().setFromPoints(curve.getPoints(90)),new T.LineDashedMaterial({color,dashSize:.15,gapSize:.13}));line.computeLineDistances();}else line=new T.Mesh(new T.TubeGeometry(curve,72,.023,6,false),mat(color));root.add(line);
 const end=curve.getPoint(.97),d=curve.getTangent(.97);let tip;if(inhibit){const across=V(-d.y,d.x,0).normalize().multiplyScalar(.19);tip=tube(root,end.clone().sub(across),end.clone().add(across),.035,color);}else{tip=new T.Mesh(new T.ConeGeometry(.095,.25,10),mat(color));tip.position.copy(end);tip.quaternion.setFromUnitVectors(V(0,1),d);root.add(tip);}
 const tracer=sphere(root,curve.getPoint(0),.073,color);tracer.visible=false;routes.push({id,root,curve,tracer,line,tip,phase,branch,summary});
}
const membrane=new T.Group();scene.add(membrane);for(let x=-8.6;x<=8.6;x+=.36){for(let z=-.4;z<=.4;z+=.4){if(x>-2.8&&x<-.75)continue;for(const s of [-1,1]){let y=2.2+s*.27;sphere(membrane,V(x,y,z),.12,'#accab7');tube(membrane,V(x-.04,y-s*.09,z),V(x-.07,2.2,z+.02),.017,'#b4c8ae');tube(membrane,V(x+.04,y-s*.09,z),V(x+.08,2.2,z-.03),.017,'#b4c8ae');}}}
const nucleus=new T.Mesh(new T.SphereGeometry(2.35,44,28),mat('#b39dc6',.12));nucleus.position.set(.15,-3.7,-.5);nucleus.scale.set(1.58,1,.5);scene.add(nucleus);const ring=new T.Mesh(new T.TorusGeometry(2.35,.02,6,100),mat('#b39cc6',.42));ring.position.copy(nucleus.position);ring.scale.set(1.58,1,1);scene.add(ring);
function dna(g,x,y,c){for(let i=0;i<25;i++){let a=i*.52,xx=x+i*.077,p=V(xx,y+Math.sin(a)*.19,Math.cos(a)*.12+.2),q=V(xx,y-Math.sin(a)*.19,-Math.cos(a)*.12+.2);sphere(g,p,.035,c);sphere(g,q,.035,'#c5a5ba');if(i%2===0)tube(g,p,q,.021,'#c6b1c6');if(i){let b=(i-1)*.52;tube(g,V(xx-.077,y+Math.sin(b)*.19,Math.cos(b)*.12+.2),p,.023,c);tube(g,V(xx-.077,y-Math.sin(b)*.19,-Math.cos(b)*.12+.2),q,.023,'#c5a5ba');}}}
blob(groups[0],V(-2.18,4.35,.1),'#d5a361',.31);blob(groups[0],V(-1.60,4.35,.1),'#d5a361',.31);tube(groups[0],V(-2.18,4.35),V(-1.6,4.35),.1,'#bd8a4f');label(0,V(-1.9,5.28),'TGF-β1','活性配体 · 二聚体');
for(let i=0;i<4;i++){const x=-2.57+i*.49,c=i%2?'#79b8a5':'#408f8c';tube(groups[1],V(x,1.30),V(x,2.87),.12,c);sphere(groups[1],V(x,2.9),.24,c,[.7,1.2,.82]);sphere(groups[1],V(x,1.22),.23,c);if(i%2)receptorP.push(sphere(groups[1],V(x+.1,1.0,.24),.10,'#dfb856'));}label(1,V(-1.87,3.45),'TGFBR2 → TGFBR1','II 型 → I 型');
for(const [x,c]of [[-1.1,'#71a4ba'],[-.48,'#88b5c7']]){blob(groups[2],V(x,.30,.2),c,.27);smadP.push(sphere(groups[2],V(x+.16,.50,.40),.10,'#dfb856'));}label(2,V(-.75,-.44),'p-SMAD2/3','R-SMAD 磷酸化');
const complexParts=[blob(groups[3],V(1.45,-1.02,.2),'#71a4ba',.25),blob(groups[3],V(1.92,-1.02,.2),'#88b5c7',.25),blob(groups[3],V(1.68,-1.40,.3),'#ae90c0',.25)];sphere(complexParts[0],V(1.55,-.85,.4),.085,'#dfb856');sphere(complexParts[1],V(2,-.85,.4),.085,'#dfb856');label(3,V(2.13,-.20),'＋ SMAD4','组装 · 入核');
dna(groups[4],.65,-3.35,'#9775ad');blob(groups[4],V(1.05,-2.96,.2),'#b193c3',.16);blob(groups[4],V(1.34,-3.00,.2),'#7faabb',.16);blob(groups[4],V(1.64,-3.05,.2),'#cab898',.14);label(4,V(1.55,-4.20),'SMAD 转录程序','细胞核 · 辅因子协同');
for(let j=0;j<7;j++){const pts=[];for(let k=0;k<40;k++)pts.push(V(5.15+k*.06,4.2+j*.13+Math.sin(k*.2+j)*.07,Math.cos(k*.2+j)*.09));const m=new T.Mesh(new T.TubeGeometry(new T.CatmullRomCurve3(pts),48,.042,6,false),mat(j%2?'#c6a47e':'#d8bc9e'));groups[5].add(m);fibres.push(m);}label(5,V(6.35,5.47),'细胞外基质','多步骤 → 组织纤维化');
for(let i=0;i<13;i++){const a=i*2.4;const p=V(-7+Math.cos(a)*(.2+i*.022),.12+Math.sin(a)*(.25+i*.013),Math.sin(a*1.6)*.14);ros.push(sphere(groups[6],p,.075+(i%3)*.012,'#cf9176'));}label(6,V(-7,1.14),'ROS 相关应激','细胞内 · 概念示意');label(6,V(-6.7,4.85),'辐射后微环境','虚线联系 · 多过程');
blob(groups[7],V(6.3,-.8,.1),'#c292a7',.32);blob(groups[7],V(6.9,-.84,.1),'#b68aa7',.21);label(7,V(6.5,-1.69),'SMAD7','限制受体信号 ⊣');
for(const [x,y,c,r] of [[-5.6,-1.30,'#c3ac75',.30],[-5.04,-1.3,'#c3ac75',.30],[-5.3,-1.80,'#9fa68a',.2]])blob(groups[8],V(x,y,.1),c,r);label(8,V(-5.45,-2.52),'KEAP1–CUL3/RBX1','应激时降解调控改变');
const nrfMover=new T.Group();groups[9].add(nrfMover);blob(nrfMover,V(-3.92,-2.45,.2),'#d3b26a',.25);dna(groups[9],-2.67,-4.45,'#c2a36c');blob(groups[9],V(-1.50,-4.06,.2),'#a6ad79',.16);label(9,V(-1.85,-5.3),'NRF2 + sMAF / ARE','核内抗氧化转录');
for(let i=0;i<3;i++)blob(groups[10],V(-6.7+i*.46,-4.85,.1),i%2?'#b8c08e':'#9eaf7e',.2);label(10,V(-6.23,-5.66),'GCLC / GCLM · NQO1','抗氧化 / 解毒程序');
route('context-ligand',[V(-5.1,4.65),V(-3.7,4.65),V(-2.75,4.43)],{dashed:true,phase:0,color:'#bbac8f'});
route('context-ros',[V(-7,4.28),V(-7.4,3.55),V(-7.55,1.6),V(-7.24,.71)],{dashed:true,phase:6,branch:'nrf',color:'#c39174'});
route('ligand',[V(-1.9,3.97),V(-1.9,3.2)],{phase:0});
route('phosphorylate',[V(-1.79,.94),V(-1.52,.58),V(-1.16,.52)],{phase:2});
route('assemble',[V(-.02,.2),V(.65,-.23),V(1.11,-.76)],{phase:3});
route('nuclear',[V(1.65,-1.78),V(1.45,-2.23),V(1.31,-2.65)],{phase:3});
route('ecm',[V(3.06,-3.4),V(8.57,-3.05),V(9.1,1.6),V(7.47,4.08)],{dashed:true,phase:5,color:'#bba382'});
route('feedback-expression',[V(2.86,-2.92),V(4.40,-2.33),V(5.93,-1.10)],{dashed:true,phase:7,branch:'feedback',color:'#b589a0'});
route('feedback-inhibit',[V(6.04,-.48),V(5.22,.41),V(1.6,.86),V(-.90,1.1)],{inhibit:true,phase:7,branch:'feedback',color:'#b589a0'});
route('keap-sense',[V(-6.7,-.31),V(-6.08,-.77),V(-5.73,-1.05)],{dashed:true,phase:8,branch:'nrf',color:'#b59a61'});
route('nrf-stability',[V(-4.6,-1.63),V(-4.3,-2.05),V(-4.16,-2.2)],{dashed:true,phase:8,branch:'nrf',color:'#b59a61'});
route('nrf-nuclear',[V(-3.57,-2.61),V(-2.94,-3.23),V(-2.03,-4.02)],{phase:9,branch:'nrf',color:'#b59a61'});
route('defence-expression',[V(-2.84,-4.53),V(-4.08,-4.85),V(-5.72,-4.83)],{dashed:true,phase:10,branch:'nrf',color:'#9baf76'});
route('redox-buffer',[V(-7.18,-4.57),V(-8.62,-3.99),V(-8.81,-.26),V(-7.7,.12)],{dashed:true,inhibit:true,phase:10,branch:'nrf',color:'#9baf76'});
groups.forEach((g,i)=>g.traverse(o=>{if(o.isMesh){o.userData.step=i;picks.push(o);}}));let down;
renderer.domElement.addEventListener('pointerdown',e=>down=[e.clientX,e.clientY]);renderer.domElement.addEventListener('pointerup',e=>{if(!down||Math.hypot(e.clientX-down[0],e.clientY-down[1])>5)return;const r=renderer.domElement.getBoundingClientRect(),ray=new T.Raycaster();ray.setFromCamera(new T.Vector2((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1),camera);const hit=ray.intersectObjects(picks).find(h=>groups[h.object.userData.step].visible);if(hit)onSelect(hit.object.userData.step);});
function reset(){controls.enableDamping=false;controls.update();const a=host.clientWidth/host.clientHeight;camera.position.set(0,.65,Math.max(24,32/a));controls.target.set(0,-.35,0);controls.update();controls.enableDamping=true;}
function resize(){const w=host.clientWidth,h=host.clientHeight;if(!w||!h)return;renderer.setSize(w,h);camera.aspect=w/h;camera.updateProjectionMatrix();reset();}new ResizeObserver(resize).observe(host);resize();
const shown=(i,filter)=>filter==='all'||steps[i].branch===filter||(filter==='feedback'&&[1,3,4].includes(i));
let lastSelected=-1,lastFilter='';
function render({selected,progress=0,animated=false,filter='all',showMembrane=true,showLabels=true}){
 membrane.visible=showMembrane;labelHost.hidden=!showLabels;controls.update();
 const changed=selected!==lastSelected||filter!==lastFilter;lastSelected=selected;lastFilter=filter;
 groups.forEach((g,i)=>{g.visible=shown(i,filter);if(changed)g.traverse(o=>{if(o.isMesh&&o.material.emissive){o.material.emissive.set(i===selected?steps[i].color:'#000');o.material.emissiveIntensity=i===selected?.19:0;}});});
 groups[0].position.y=animated&&selected===0?-.78*Math.min(1,progress*1.5):0;
 receptorP.forEach((o,i)=>o.visible=!animated||selected!==1||progress>(i+1)*.23);
 smadP.forEach((o,i)=>o.visible=!animated||selected!==2||progress>(i+1)*.25);
 groups[3].position.set(0,0,0);complexParts.forEach(g=>g.position.set(0,0,0));
 if(animated&&selected===3){const assembly=Math.max(0,1-progress*3);complexParts[0].position.x=-assembly*.42;complexParts[1].position.x=assembly*.42;complexParts[2].position.y=-assembly*.37;groups[3].position.y=-1.38*Math.max(0,(progress-.35)/.65);}
 nrfMover.position.set(0,0,0);if(animated&&selected===9){const q=Math.min(1,progress*1.25);nrfMover.position.set(1.92*q,-1.54*q,0);}
 ros.forEach((o,i)=>o.scale.setScalar(animated&&selected===6?1+.18*Math.sin(progress*16+i):1));
 fibres.forEach((o,i)=>o.visible=!animated||selected!==5||i<2+Math.floor(progress*5));
 routes.forEach(r=>{r.root.visible=filter==='all'||r.branch===filter||(filter==='feedback'&&['nuclear'].includes(r.id));r.tracer.visible=animated&&selected===r.phase;r.tracer.position.copy(r.curve.getPoint((progress*2)%1));});
 renderer.render(scene,camera);const w=host.clientWidth,h=host.clientHeight,placed=[];labels.forEach(l=>{const p=l.p.clone().project(camera);l.el.hidden=!shown(l.i,filter)||p.z>1||p.z<-1;if(l.el.hidden)return;let x=(p.x*.5+.5)*w,y=(-p.y*.5+.5)*h;const lw=l.el.offsetWidth,lh=l.el.offsetHeight;if(w<650){let found=false;for(const dy of [0,-28,28,-56,56,-84,84]){for(const dx of [0,-18,18]){const xx=Math.max(lw/2+6,Math.min(w-lw/2-6,x+dx)),yy=Math.max(lh/2+35,Math.min(h-lh/2-20,y+dy));const rect={left:xx-lw/2-3,right:xx+lw/2+3,top:yy-lh/2-3,bottom:yy+lh/2+3};if(!placed.some(r=>r.left<rect.right&&r.right>rect.left&&r.top<rect.bottom&&r.bottom>rect.top)){x=xx;y=yy;placed.push(rect);found=true;break;}}if(found)break;}}l.el.style.left=`${x}px`;l.el.style.top=`${y}px`;l.el.classList.toggle('active',selected===l.i);l.el.setAttribute('aria-pressed',String(selected===l.i));});
}
function exportCanvas(){const w=2400,h=Math.round(w*host.clientHeight/host.clientWidth),c=document.createElement('canvas');c.width=w;c.height=h+210;const ctx=c.getContext('2d');ctx.fillStyle='#eef4f0';ctx.fillRect(0,0,w,h+210);ctx.fillStyle='#254139';ctx.font='bold 38px sans-serif';ctx.fillText('辐射肌肉 · TGF-β / SMAD × NRF2 × SMAD7',55,60);const sz=renderer.getSize(new T.Vector2()),ratio=renderer.getPixelRatio();renderer.setPixelRatio(1);renderer.setSize(w,h,false);renderer.render(scene,camera);ctx.drawImage(renderer.domElement,0,95,w,h);renderer.setPixelRatio(ratio);renderer.setSize(sz.x,sz.y,false);ctx.textAlign='center';labels.filter(l=>!l.el.hidden&&!labelHost.hidden).forEach(l=>{const p=l.p.clone().project(camera),x=(p.x*.5+.5)*w,y=(-p.y*.5+.5)*h+95;ctx.font='24px sans-serif';const size=ctx.measureText(l.title).width;ctx.fillStyle='#ffffffed';ctx.fillRect(x-size/2-10,y-20,size+20,32);ctx.fillStyle='#25483e';ctx.fillText(l.title,x,y+5);});ctx.textAlign='left';ctx.font='20px sans-serif';ctx.fillStyle='#74887e';ctx.fillText('实线：经典机制  ·  ⊣：抑制  ·  虚线：多步骤概括  ·  形状和运动为教学示意',55,h+132);ctx.fillText('Reactome 2173789 / 2173788 / 9755511 / 9759194 · 辐射肌肉：PMID 36400201 / 33252888',55,h+168);return c;}
return {render,reset,exportCanvas,stats:()=>({labels:labels.length,nodes:groups.length,webgl:true,camera:camera.position.toArray(),ligandY:groups[0].position.y,complexY:groups[3].position.y,nrfPosition:nrfMover.position.toArray(),receptorP:receptorP.filter(o=>o.visible).length,smadP:smadP.filter(o=>o.visible).length}),projectNode:i=>{const box=new T.Box3().setFromObject(groups[i]),p=box.getCenter(new T.Vector3()).project(camera);return {x:(p.x*.5+.5)*host.clientWidth,y:(-.5*p.y+.5)*host.clientHeight};}};
}
