import {sources as v03Sources, nodes as v03Nodes, edges as v03Edges, stages as v03Stages} from '../../src/pathway-data.js';

const bi=(zh,en)=>({zh,en});

export const sources={
  ...v03Sources,
  P15226436:{pmid:'15226436',doi:'10.1128/MCB.24.14.6350-6361.2004',journal:'Molecular and Cellular Biology',title:bi('分化诱导的肌肉细胞放射抗性','Differentiation-induced radioresistance in muscle cells'),depth:bi('PMC全文核查','PMC full text reviewed'),model:bi('C2C12及原代人/鼠肌肉细胞','C2C12 and primary human/mouse muscle cells')},
  P38936620:{pmid:'38936620',doi:'10.1016/j.bbamcr.2024.119792',journal:'Biochimica et Biophysica Acta - Molecular Cell Research',title:bi('3D人骨骼肌类器官中的辐射致损伤','Unraveling radiation-induced skeletal muscle damage: Insights from a 3D human skeletal muscle organoid model'),depth:bi('官方摘要；全文待补','Official abstract; full text pending'),model:bi('hPSC来源3D骨骼肌类器官','hPSC-derived 3D skeletal-muscle organoids')},
  P37982576:{pmid:'37982576',doi:'10.1158/2767-9764.CRC-23-0104',journal:'Cancer Research Communications',title:bi('局部肢体照射期间暂时降低p53增加肉瘤发生','Temporary knockdown of p53 during focal limb irradiation increases the development of sarcomas'),depth:bi('PMC全文核查','PMC full text reviewed'),model:bi('诱导性p53敲低小鼠及后肢照射','Inducible p53-knockdown mice with hindlimb irradiation')},
  P20685830:{pmid:'20685830',doi:'10.1093/jmicro/dfq059',journal:'Journal of Electron Microscopy',title:bi('重离子照射诱导C2C12肌母细胞及旁观者细胞自噬','Heavy ion irradiation induces autophagy in irradiated C2C12 myoblasts and their bystander cells'),depth:bi('官方摘要；剂量待全文核查','Official abstract; dose pending full-text review'),model:bi('C2C12肌母细胞及旁观者细胞','C2C12 myoblasts and bystander cells')},
  P31438652:{pmid:'31438652',doi:'10.3390/cells8090950',journal:'Cells',title:bi('辐射后骨骼肌线粒体能量代谢机制','Mechanisms of energy metabolism in skeletal muscle mitochondria following radiation exposure'),depth:bi('PMC全文关键段核查','Key sections of PMC full text reviewed'),model:bi('ICR小鼠骨骼肌与C2C12肌管','ICR mouse skeletal muscle and C2C12 myotubes')},
  P35294551:{pmid:'35294551',doi:'10.1080/02713683.2022.2043709',journal:'Radiation Research',title:bi('辐射诱导肌肉纤维化大鼠模型中的卫星细胞激活','Satellite cells are activated in a rat model of radiation-induced muscle fibrosis'),depth:bi('官方摘要核查','Official abstract reviewed'),model:bi('Sprague-Dawley大鼠辐射肌纤维化模型','Sprague-Dawley rat radiation-fibrosis model')},
  P38579709:{pmid:'38579709',doi:'10.1016/j.stemcr.2024.03.004',journal:'Stem Cell Reports',title:bi('PINK1缺失改变肌肉干细胞命运和再生能力','PINK1 deficiency alters muscle stem cell fate decision and muscle regenerative capacity'),depth:bi('PMC全文核查','PMC full text reviewed'),model:bi('PINK1缺失小鼠MuSC与CTX损伤','PINK1-deficient mouse MuSCs with CTX injury')},
  P31841082:{pmid:'31841082',doi:'10.1667/RR15555.1',journal:'Radiation Research',title:bi('高剂量辐射后骨骼肌早期微血管变化的CEUS检测','Contrast-enhanced ultrasound to detect early microvascular changes in skeletal muscle after high-dose radiation treatment'),depth:bi('官方摘要核查','Official abstract reviewed'),model:bi('小鼠后肢局部照射与CEUS','Mouse hindlimb irradiation with contrast-enhanced ultrasound')},
  P29298131:{pmid:'29298131',doi:'10.1080/13510002.2017.1416773',journal:'Free Radical Research',title:bi('p53调节骨骼肌氧化应激的系统综述','A systematic review of p53 regulation of oxidative stress in skeletal muscle'),depth:bi('官方摘要/综述核查','Official abstract/review checked'),model:bi('骨骼肌动物与细胞模型综述','Review of skeletal-muscle animal and cell models')},
  R9755511:{url:'https://reactome.org/content/detail/R-HSA-9755511',journal:'Reactome',title:bi('NRF2介导的抗氧化反应','NRF2-mediated antioxidant response'),depth:bi('Reactome官方事件条目','Reactome curated event'),model:bi('人类经典通路数据库事件','curated human pathway event')},
  R5693606:{url:'https://reactome.org/content/detail/R-HSA-5693606',journal:'Reactome',title:bi('DNA双链断裂响应','DNA double-strand break response'),depth:bi('Reactome官方事件条目','Reactome curated event'),model:bi('人类经典通路数据库事件','curated human pathway event')},
  R69563:{url:'https://reactome.org/content/detail/R-HSA-69563',journal:'Reactome',title:bi('p53依赖性DNA损伤响应','p53-dependent DNA damage response'),depth:bi('Reactome官方事件条目','Reactome curated event'),model:bi('人类经典通路数据库事件','curated human pathway event')},
  R69473:{url:'https://reactome.org/content/detail/R-HSA-69473',journal:'Reactome',title:bi('G2/M DNA损伤检查点','G2/M DNA damage checkpoint'),depth:bi('Reactome官方事件条目','Reactome curated event'),model:bi('人类经典通路数据库事件','curated human pathway event')},
  P40835994:{pmid:'40835994',doi:'10.1038/s41598-025-15699-x',journal:'Scientific Reports',title:bi('照射肌肉前体细胞的EV丧失促增殖和促血管生成功能','Irradiation of muscle precursor cells impairs the proliferative and angiogenic functions of their EVs'),depth:bi('PMC全文核查','PMC full text reviewed'),model:bi('大鼠比目鱼肌MPC，10 Gy X线，体外EV','rat soleus MPCs, 10 Gy X-ray, in vitro EVs')},
  P40541182:{pmid:'40541182',doi:'10.1016/j.cmet.2025.05.013',journal:'Cell Metabolism',title:bi('花生四烯酸触发肿瘤SRM分泌经EV诱导放疗后骨骼肌无力','Arachidonic acid triggers tumor SRM secretion via EVs to induce muscle weakness upon irradiation'),depth:bi('官方摘要与Highlights核查；全文待补','Official abstract and highlights reviewed; full text pending'),model:bi('荷瘤小鼠局部放疗；肿瘤来源sEV','tumor-bearing mice, local radiotherapy; tumor sEVs')},
  T_FSTL1:{url:'https://hdl.handle.net/10393/50643',journal:'University of Ottawa MSc thesis (Brabrook 2025)',title:bi('FAP来源FSTL1经照射下调调控FAP命运','FAP-derived FSTL1 reduced by irradiation regulates FAP fate'),depth:bi('摘要级；未同行评审，待全文','Abstract-level; not peer-reviewed, full text pending'),model:bi('C3H10T1/2与原代FAP；小鼠后肢照射','C3H10T1/2 and primary FAPs; mouse hindlimb irradiation')}
};

const typeColor={event:'#d65f50',damage:'#ad5d55',checkpoint:'#6a6c9c',repair:'#4e827c',stress:'#c78242',mito:'#a66f3e',immune:'#9c6077',musc:'#277c91',fap:'#98713d',outcome:'#9a5c4d',candidate:'#7f70a8',reference:'#7a8584',navigation:'#287e8a',vascular:'#647f8e',ev:'#3d7f9a',hypothesis:'#a0789a'};

export const typeColors=typeColor;

export const views={
  overview:{id:'overview',kind:'overview',path:'#overview',title:bi('机制总览','Mechanism overview'),summary:bi('从电离辐射到MuSC、FAP、免疫、血管/内皮和ECM结局；母图只保留经过核查的粗粒度关系。','From ionizing radiation to MuSC, FAP, immune, vascular/endothelial and ECM outcomes; the mother map keeps only audited coarse-grained relations.'),stages:[
    {id:'ov0',duration:4000,title:bi('辐射事件与早期应激','Radiation event and early stress'),summary:bi('电离辐射首先进入DNA损伤与氧化应激背景。','Ionizing radiation enters a DNA-damage and oxidative-stress context.')},
    {id:'ov1',duration:5000,title:bi('MuSC反应','MuSC response'),summary:bi('MuSC数量、扩增和分化能力进入受损阶段。','MuSC number, expansion and differentiation become impaired.')},
    {id:'ov2',duration:5000,title:bi('FAP状态改变','FAP state change'),summary:bi('FAP出现衰老样和促纤维化表型；p-SMAD3只在早期出现。','FAPs acquire senescence-like and fibrotic features; p-SMAD3 is early only.')},
    {id:'ov3',duration:5000,title:bi('免疫与基质通讯','Immune and matrix communication'),summary:bi('免疫通讯保留为推断层，血管/内皮显示为证据待补区域。','Immune communication remains an inference layer; vascular/endothelial evidence is pending.')},
    {id:'ov4',duration:6000,title:bi('再生障碍与纤维化结局','Regeneration deficit and fibrosis'),summary:bi('肌纤维/肌核不足、ECM沉积和纤维化共同出现。','Myofiber/myonuclear deficits, ECM deposition and fibrosis appear together.')},
    {id:'ov5',duration:5000,title:bi('专题机制与修复窗口','Mechanism modules and repair windows'),summary:bi('进入DNA损伤、MuSC–FAP–ECM和候选干预专题；导航线不表示因果。','Open the DNA-damage, MuSC–FAP–ECM and candidate-intervention modules; navigation lines are not causality.')}
  ]},
  'musc-fap-ecm':{id:'musc-fap-ecm',kind:'subgraph',path:'#musc-fap-ecm',title:bi('MuSC–FAP–ECM专题','MuSC–FAP–ECM module'),summary:bi('保留v0.3的核心证据链，并与母图和DNA专题共享MuSC、FAP、ECM节点。','The v0.3 evidence core is retained, with shared MuSC, FAP and ECM nodes linking to the mother map and DNA module.'),stages:v03Stages.map(s=>({...s}))},
  'dna-redox':{id:'dna-redox',kind:'subgraph',path:'#dna-redox',title:bi('DNA损伤与氧化应激专题','DNA damage and redox module'),summary:bi('将直接肌肉细胞证据、经典DNA损伤通路和候选抗氧化窗口分开显示。','Direct muscle-cell evidence, canonical DNA-damage pathways and candidate redox windows are separated.'),stages:[
    {id:'dna0',duration:3500,title:bi('DSB标志与早期焦点','DSB markers and early foci'),summary:bi('γH2AX/53BP1是损伤与修复动力学标志，不等同于每一个未修复断裂。','γH2AX/53BP1 mark damage and repair kinetics; they are not synonymous with every unrepaired break.')},
    {id:'dna1',duration:5000,title:bi('ATM–MRN–H2AX–Chk2','ATM–MRN–H2AX–Chk2'),summary:bi('肌肉细胞模型中可观察到ATM、H2AX、MRE11/Nbs1和Chk2反应。','ATM, H2AX, MRE11/Nbs1 and Chk2 responses are observed in muscle-cell models.')},
    {id:'dna2',duration:5000,title:bi('p53/p21与细胞命运','p53/p21 and cell fate'),summary:bi('增殖肌母细胞可进入细胞周期阻滞或凋亡；终末肌管不能直接套用。','Proliferating myoblasts may enter arrest or apoptosis; terminal myotubes cannot be treated as equivalent.')},
    {id:'dna3',duration:5000,title:bi('ROS、线粒体与自噬并行反应','Parallel ROS, mitochondrial and autophagy responses'),summary:bi('ROS/RNS、线粒体代谢重塑和自噬是并行观察，不拼接成单一路径。','ROS/RNS, mitochondrial remodeling and autophagy are parallel observations, not one stitched pathway.')},
    {id:'dna4',duration:5000,title:bi('修复动力学与MuSC功能不足','Repair kinetics and MuSC functional deficit'),summary:bi('损伤标志与扩增/分化不足在同一模型中出现，但中介关系仍需功能验证。','Damage markers and expansion/differentiation deficits co-occur, while mediation still needs functional testing.')},
    {id:'dna5',duration:4500,title:bi('NRF2与候选修复窗口','NRF2 and candidate repair window'),summary:bi('NRF2按经典通路和SFN摘要级动物研究显示为条件性窗口，不是临床疗效。','NRF2 is shown as a conditional window from canonical biology and an abstract-level SFN animal study, not clinical efficacy.')}
  ]}
  ,
  'vessel-endothelium':{id:'vessel-endothelium',kind:'subgraph',scaffold:true,path:'#vessel-endothelium',title:bi('血管/内皮专题','Vessel / endothelium module'),summary:bi('血管与内皮反应证据仍在补充；此专题先给出骨架节点与已核查的灌注、EV促血管生成证据，其余留作证据待补。','Vessel and endothelial evidence is still being assembled; this module seeds scaffold nodes with the audited perfusion and EV-angiogenesis evidence, leaving the rest pending.'),stages:[
    {id:'ve0',duration:4000,title:bi('辐射与微血管','Radiation and microvasculature'),summary:bi('局部照射后早期微血管/灌注改变的证据有限。','Evidence for early microvascular/perfusion change after local irradiation is limited.')},
    {id:'ve1',duration:4000,title:bi('内皮与MuSC/血管生成','Endothelium and MuSC / angiogenesis'),summary:bi('照射MPC的EV丧失促血管生成功能；其余内皮—MuSC耦合待补。','EVs from irradiated MPCs lose pro-angiogenic function; other endothelium–MuSC coupling is pending.')}
  ]},
  'immune-macrophage':{id:'immune-macrophage',kind:'subgraph',scaffold:true,path:'#immune-macrophage',title:bi('免疫/巨噬细胞专题','Immune / macrophage module'),summary:bi('免疫通讯目前主要是单细胞推断层；此专题保留A11推断关系并标出尚待因果验证的骨架节点。','Immune communication is currently an inference layer; this module keeps the A11 inferred relation and marks scaffold nodes awaiting causal proof.'),stages:[
    {id:'im0',duration:4000,title:bi('照射与免疫浸润','Irradiation and immune infiltration'),summary:bi('照射后单核/巨噬细胞动态改变主要来自单细胞推断。','Post-irradiation monocyte/macrophage dynamics come mainly from single-cell inference.')},
    {id:'im1',duration:4000,title:bi('巨噬细胞—FAP通讯','Macrophage–FAP communication'),summary:bi('CellChat推断的TGF-β1→TGFBR2通讯，尚无敲除/中和验证。','CellChat-inferred TGF-β1→TGFBR2 communication, without knockout/neutralization proof.')}
  ]},
  'senescence-p21':{id:'senescence-p21',kind:'subgraph',scaffold:true,path:'#senescence-p21',title:bi('衰老/p21专题','Senescence / p21 module'),summary:bi('连接DNA专题的p53/p21与FAP衰老样表型；骨架节点标出SASP等待补证据。','Links the DNA module p53/p21 to the senescence-like FAP phenotype; scaffold nodes mark SASP as pending.'),stages:[
    {id:'sn0',duration:4000,title:bi('p53/p21与持续信号','p53/p21 and persistent signature'),summary:bi('照射肌肉中可见持续Cdkn1a/p21信号。','A persistent Cdkn1a/p21 signature is seen in irradiated muscle.')},
    {id:'sn1',duration:4000,title:bi('FAP衰老样表型与SASP','Senescence-like FAP and SASP'),summary:bi('FAP呈衰老样、促纤维化表型；具体SASP因子待补。','FAPs show a senescence-like, profibrotic phenotype; specific SASP factors are pending.')}
  ]},
  'ev-mirna':{id:'ev-mirna',kind:'subgraph',scaffold:true,path:'#ev-mirna',title:bi('EV/miRNA专题','EV / miRNA module'),summary:bi('细胞外囊泡与miRNA在辐射肌肉损伤中的作用；此专题给出已核查的照射MPC-EV证据与非辐射参照，推断与候选分层显示。','EV and miRNA roles in radiation muscle injury; this module seeds audited irradiated MPC-EV evidence with non-radiation references, layering inference and candidates.'),stages:[
    {id:'ev0',duration:4000,title:bi('照射改变EV货物','Irradiation alters EV cargo'),summary:bi('照射MPC的EV改变miRNA货物并丧失促增殖/促血管生成功能。','EVs from irradiated MPCs shift miRNA cargo and lose pro-proliferative/angiogenic function.')},
    {id:'ev1',duration:4000,title:bi('肿瘤EV与候选EV疗法','Tumor EVs and candidate EV therapy'),summary:bi('肿瘤来源sEV可远程致肌无力；健康/新生EV作为候选修复，标为非辐射或待证实。','Tumor sEVs can drive distant muscle weakness; healthy/neonatal EVs are candidates, marked non-radiation or unproven.')}
  ]}
};

const clone=(x)=>JSON.parse(JSON.stringify(x));
export const viewNodes={
  overview:[
    {id:'ov-radiation',type:'event',x:36,y:292,w:156,h:78,label:bi('电离辐射','Ionizing radiation'),sub:bi('局部/体外模型','local / in vitro'),shared:'radiation'},
    {id:'ov-dna',type:'damage',x:266,y:176,w:194,h:86,label:bi('DNA损伤与氧化应激','DNA damage & redox stress'),sub:bi('进入DNA专题 ↗','open DNA module ↗'),topic:'dna-redox',shared:'dna-redox'},
    {id:'ov-musc',type:'musc',x:520,y:84,w:194,h:82,label:bi('MuSC反应','MuSC response'),sub:bi('数量/扩增/分化 ↓','number / expansion / differentiation ↓'),topic:'musc-fap-ecm',shared:'musc'},
    {id:'ov-fap',type:'fap',x:520,y:286,w:194,h:82,label:bi('FAP状态改变','FAP state change'),sub:bi('衰老样/促纤维化','senescence-like / fibrotic'),topic:'musc-fap-ecm',shared:'fap'},
    {id:'ov-immune',type:'immune',x:520,y:486,w:194,h:82,label:bi('免疫通讯','Immune communication'),sub:bi('CellChat推断层','CellChat inference layer'),topic:'musc-fap-ecm',shared:'immune'},
    {id:'ov-vessel',type:'vascular',x:790,y:494,w:206,h:82,label:bi('血管/内皮反应','Vascular / endothelial response'),sub:bi('证据待补·不作确定耗竭','evidence pending · no fixed depletion'),shared:'vascular'},
    {id:'ov-ecm',type:'outcome',x:790,y:286,w:194,h:82,label:bi('ECM重塑','ECM remodeling'),sub:bi('沉积与基质改变','deposition and matrix change'),topic:'musc-fap-ecm',shared:'ecm'},
    {id:'ov-outcome',type:'outcome',x:1050,y:220,w:206,h:94,label:bi('再生不足 / 纤维化','Regeneration deficit / fibrosis'),sub:bi('肌纤维、肌核与组织结局','myofibers, myonuclei and tissue outcome'),topic:'musc-fap-ecm',shared:'outcome'},
    {id:'ov-window',type:'candidate',x:1050,y:488,w:206,h:82,label:bi('修复候选窗口','Candidate repair windows'),sub:bi('储备MuSC · NRF2 · TGF-β抑制','reserve MuSC · NRF2 · TGF-β inhibition'),topic:'musc-fap-ecm',shared:'repair'}
  ],
  'musc-fap-ecm':v03Nodes.map(n=>({...clone(n),topic:'musc-fap-ecm',shared:{radiation:'radiation',musc:'musc',muscFunction:'musc',ros:'dna-redox',fap:'fap',macrophage:'immune',ecm:'ecm',fibrosis:'outcome',growth:'outcome'}[n.id]})),
  'dna-redox':[
    {id:'dna-radiation',type:'event',x:28,y:300,w:150,h:74,label:bi('电离辐射','Ionizing radiation'),sub:bi('直接刺激','direct exposure'),shared:'radiation'},
    {id:'dna-dsb',type:'damage',x:235,y:258,w:190,h:86,label:bi('DSB / γH2AX / 53BP1','DSB / γH2AX / 53BP1'),sub:bi('损伤标志与焦点动力学','damage markers and foci kinetics'),shared:'dna-redox'},
    {id:'dna-atm',type:'checkpoint',x:482,y:112,w:180,h:78,label:bi('ATM–MRN–H2AX','ATM–MRN–H2AX'),sub:bi('肌肉细胞观察','observed in muscle cells'),shared:'dna-redox'},
    {id:'dna-repair',type:'repair',x:712,y:74,w:190,h:78,label:bi('MRE11 / Nbs1修复焦点','MRE11 / Nbs1 repair foci'),sub:bi('损伤处理平台','lesion-processing platform'),shared:'dna-redox'},
    {id:'dna-chk2',type:'checkpoint',x:712,y:208,w:170,h:72,label:bi('Chk2','Chk2'),sub:bi('直接肌肉细胞证据','direct muscle-cell evidence'),shared:'dna-redox'},
    {id:'dna-atr',type:'reference',x:482,y:322,w:180,h:72,label:bi('ATR','ATR'),sub:bi('经典条件通路','canonical reference'),shared:'dna-redox'},
    {id:'dna-chk1',type:'reference',x:712,y:326,w:170,h:72,label:bi('Chk1','Chk1'),sub:bi('经典条件通路','canonical reference'),shared:'dna-redox'},
    {id:'dna-p53',type:'checkpoint',x:930,y:126,w:180,h:78,label:bi('p53','p53'),sub:bi('增殖肌母细胞情境','proliferating myoblast context'),shared:'dna-redox'},
    {id:'dna-p21',type:'checkpoint',x:1144,y:62,w:170,h:78,label:bi('p21 / 周期阻滞','p21 / cell-cycle arrest'),sub:bi('条件性输出','conditional output'),shared:'dna-redox'},
    {id:'dna-apoptosis',type:'outcome',x:1144,y:224,w:170,h:78,label:bi('凋亡','Apoptosis'),sub:bi('增殖细胞分支','proliferating-cell branch'),shared:'dna-redox'},
    {id:'dna-ros',type:'stress',x:235,y:492,w:190,h:80,label:bi('ROS / RNS ↑','ROS / RNS ↑'),sub:bi('卫星细胞直接测量','direct satellite-cell measure'),shared:'dna-redox'},
    {id:'dna-mito',type:'mito',x:482,y:488,w:190,h:80,label:bi('线粒体代谢重塑','Mitochondrial remodeling'),sub:bi('AMPK / 质子漏 / 呼吸','AMPK / proton leak / respiration'),shared:'dna-redox'},
    {id:'dna-autophagy',type:'repair',x:716,y:492,w:190,h:80,label:bi('自噬反应','Autophagy response'),sub:bi('观察性分支','observational branch'),shared:'dna-redox'},
    {id:'dna-nrf2',type:'candidate',x:950,y:472,w:178,h:80,label:bi('NRF2 / ARE','NRF2 / ARE'),sub:bi('经典+候选窗口','canonical + candidate window'),shared:'dna-redox'},
    {id:'dna-function',type:'musc',x:1140,y:468,w:174,h:88,label:bi('MuSC扩增/分化不足','MuSC expansion / differentiation deficit'),sub:bi('与损伤标志同模型出现','co-occurs in model'),topic:'musc-fap-ecm',shared:'musc'}
  ]
};

export const viewEdges={
  overview:[
    {id:'OV-A1',source:'ov-radiation',target:'ov-dna',level:'A',kind:'direct',stage:0,label:bi('DNA损伤与氧化应激背景','DNA damage and redox context'),refs:['P38936620','P20726709'],model:bi('人3D骨骼肌类器官；大鼠卫星细胞','human 3D muscle organoid; rat satellite cells'),dose:bi('2 Gy；1–10 Gy体外','2 Gy; 1–10 Gy in vitro'),time:bi('30 min–72 h；20 min–48 h','30 min–72 h; 20 min–48 h'),method:bi('γH2AX/53BP1、ROS/RNS检测','γH2AX/53BP1 and ROS/RNS assays'),functional:bi('部分有扩增/分化和增殖读出','expansion/differentiation and proliferation readouts'),limits:bi('母图为粗粒度汇总，不拼接为一条定量链。','Coarse mother-map summary; not a quantitative stitched chain.')},
    {id:'OV-A2',source:'ov-radiation',target:'ov-musc',level:'A',kind:'direct',stage:1,label:bi('MuSC数量与功能下降','MuSC number and function decrease'),refs:['P33241204','P20726709'],model:bi('幼年局部照射小鼠；卫星细胞体外','juvenile local-irradiation mice; cultured satellite cells'),dose:bi('8.2 Gy × 3；≥5 Gy','8.2 Gy × 3; ≥5 Gy'),time:bi('数小时至长期','hours to long-term'),method:bi('细胞计数、增殖、凋亡与长期组织结局','cell counts, proliferation, apoptosis and long-term tissue outcomes'),functional:bi('有部分功能读出','partial functional readouts'),limits:bi('不同模型与时间点不合并。','Models and time points are not pooled.')},
    {id:'OV-A3',source:'ov-radiation',target:'ov-fap',level:'A',kind:'direct',stage:2,label:bi('FAP衰老样/促纤维化状态','senescence-like / fibrotic FAP state'),refs:['P37671686'],model:bi('4周龄雄性小鼠单侧后肢','4-week-old male mice, unilateral hindlimb'),dose:bi('16 Gy单次','single 16 Gy'),time:bi('3、7、14、56 d','3, 7, 14, 56 d'),method:bi('细胞动态、DNA损伤、代谢与命运分析','cell dynamics, DNA damage, metabolism and fate assays'),functional:bi('FAP分泌组条件培养基功能实验','FAP-conditioned-medium functional assay'),limits:bi('FAP数量在56 d下降，不能画成持续扩增。','FAP number declines at 56 d; do not show persistent expansion.')},
    {id:'OV-C1',source:'ov-radiation',target:'ov-immune',level:'C',kind:'inference',stage:3,label:bi('免疫/旁分泌通讯推断','inferred immune/paracrine communication'),refs:['P40316295'],model:bi('幼年小鼠scRNA-seq','juvenile-mouse scRNA-seq'),dose:bi('8.2 Gy × 3','8.2 Gy × 3'),time:bi('24 h、56 d','24 h, 56 d'),method:bi('单细胞转录组和CellChat','single-cell transcriptomics and CellChat'),functional:bi('无细胞特异敲除或中和','no cell-specific knockout or neutralization'),limits:bi('表达通讯不等于分泌蛋白和因果功能。','Expression-based communication is not secreted protein or causal function.')},
    {id:'OV-B1',source:'ov-radiation',target:'ov-vessel',level:'B',kind:'reference',stage:3,label:bi('血管/灌注变化待核查','vascular/perfusion change remains unresolved'),refs:['P31841082'],model:bi('小鼠后肢CEUS','mouse hindlimb CEUS'),dose:bi('12或15 Gy','12 or 15 Gy'),time:bi('第1、8天','days 1 and 8'),method:bi('增强超声灌注检测','contrast-enhanced ultrasound'),functional:bi('第8天未见明确显著灌注下降','no clear significant perfusion decline at day 8'),limits:bi('只作为证据缺口，不表示确定血管耗竭。','Evidence-gap context only; not fixed vascular depletion.')},
    {id:'OV-A4',source:'ov-musc',target:'ov-outcome',level:'A',kind:'observed',stage:4,label:bi('长期肌纤维/肌核不足','long-term myofiber/myonuclear deficit'),refs:['P33241204'],model:bi('幼年局部照射小鼠','juvenile local-irradiation mice'),dose:bi('8.2 Gy × 3','8.2 Gy × 3'),time:bi('长期随访','long-term follow-up'),method:bi('肌纤维尺寸、肌核数量和功能','fiber size, myonuclei and function'),functional:bi('组织结局观察','tissue-outcome observation'),limits:bi('不声称单一分子中介链已完成证明。','Does not prove one complete molecular mediation chain.')},
    {id:'OV-A5',source:'ov-fap',target:'ov-ecm',level:'A',kind:'observed',stage:4,label:bi('伴随ECM沉积','associated ECM deposition'),refs:['P37671686'],model:bi('幼年单侧后肢照射小鼠','juvenile unilateral hindlimb irradiation mice'),dose:bi('16 Gy','16 Gy'),time:bi('56 d','56 d'),method:bi('胶原、FN、αSMA和组织学','collagen, FN, αSMA and histology'),functional:bi('同模型关联观察','same-model association'),limits:bi('不是特定分子的一步因果。','Not a one-step molecular cause.')},
    {id:'OV-A6',source:'ov-ecm',target:'ov-outcome',level:'A',kind:'observed',stage:4,label:bi('纤维化结局','fibrosis outcome'),refs:['P37671686','P33252888'],model:bi('两个局部照射小鼠模型','two local-irradiation mouse models'),dose:bi('16 Gy或50 Gy','16 Gy or 50 Gy'),time:bi('56 d或9个月','56 d or 9 months'),method:bi('组织学和纤维化指标','histology and fibrosis markers'),functional:bi('组织学结局','histologic outcome'),limits:bi('不同剂量/研究不插值为时间曲线。','Different doses/studies are not interpolated into a time curve.')},
    {id:'OV-C2',source:'ov-fap',target:'ov-window',level:'C',kind:'candidate',stage:5,label:bi('候选修复窗口','candidate repair window'),refs:['P36400201','P33252888'],model:bi('辐射肌纤维化动物药理研究','animal pharmacology in radiation fibrosis'),dose:bi('SB-505124剂量已核查；SFN剂量待补','SB-505124 dose checked; SFN dose pending'),time:bi('8周或9个月结局','8-week or 9-month outcome'),method:bi('药理干预与纤维化指标','pharmacology and fibrosis markers'),functional:bi('动物模型候选','animal-model candidate'),limits:bi('不表示人体疗效或直接分子抑制。','Not human efficacy or direct molecular inhibition.')}
  ],
  'musc-fap-ecm':v03Edges.map(e=>({...clone(e),time:e.time,method:bi('按v0.3逐箭头核查','audited per v0.3 edge'),functional:bi(e.kind==='inference'?'通讯推断，无因果干预':'按原始研究读出',e.kind==='inference'?'inference without causal intervention':'as reported in the original study')})),
  'dna-redox':[
    {id:'D01',source:'dna-radiation',target:'dna-dsb',level:'A',kind:'direct',stage:0,label:bi('γH2AX/53BP1焦点增加','γH2AX/53BP1 foci increase'),refs:['P38936620','P15226436'],model:bi('人3D骨骼肌类器官；C2C12/原代肌肉细胞','human 3D muscle organoid; C2C12/primary muscle cells'),dose:bi('2 Gy；IR 10 Gy（部分实验20 Gy）','2 Gy; 10 Gy IR (some 20 Gy assays)'),time:bi('30 min、18 h、72 h；早期','30 min, 18 h, 72 h; early'),method:bi('免疫荧光、RNA-seq、γH2AX/53BP1','immunofluorescence, RNA-seq, γH2AX/53BP1'),functional:bi('扩增/分化/修复读出','expansion/differentiation/repair readouts'),limits:bi('焦点减少不等于错误修复完全消失。','Foci decline does not prove error-free repair.')},
    {id:'D02',source:'dna-dsb',target:'dna-atm',level:'A',kind:'observed',stage:1,label:bi('ATM–MRN–H2AX反应','ATM–MRN–H2AX response'),refs:['P15226436'],model:bi('C2C12及原代人/鼠肌肉细胞','C2C12 and primary human/mouse muscle cells'),dose:bi('IR 10 Gy；部分实验20 Gy','10 Gy IR; some 20 Gy assays'),time:bi('早期损伤反应','early damage response'),method:bi('免疫印迹、免疫荧光和损伤焦点','immunoblotting, immunofluorescence and damage foci'),functional:bi('直接检测损伤处理蛋白','direct protein-level measurements'),limits:bi('是肌肉细胞观察，不等于成年MuSC体内全链。','Muscle-cell observation, not the full adult MuSC in vivo chain.')},
    {id:'D03',source:'dna-dsb',target:'dna-repair',level:'A',kind:'observed',stage:1,label:bi('MRE11/Nbs1修复焦点','MRE11/Nbs1 repair foci'),refs:['P15226436'],model:bi('肌母细胞和肌管','myoblasts and myotubes'),dose:bi('IR 10 Gy','10 Gy IR'),time:bi('早期','early'),method:bi('损伤焦点免疫检测','repair-focus immunostaining'),functional:bi('修复相关蛋白募集','recruitment of repair proteins'),limits:bi('不能据此判断长期修复成功或失败。','Does not establish long-term repair success or failure.')},
    {id:'D04',source:'dna-atm',target:'dna-chk2',level:'A',kind:'observed',stage:1,label:bi('Chk2激活','Chk2 activation'),refs:['P15226436'],model:bi('增殖和终末分化肌肉细胞','proliferating and differentiated muscle cells'),dose:bi('IR 10 Gy','10 Gy IR'),time:bi('早期','early'),method:bi('Chk2活化检测','Chk2 activation assay'),functional:bi('直接观察','direct observation'),limits:bi('下游p53/凋亡受细胞分化状态影响。','Downstream p53/apoptosis depends on differentiation state.')},
    {id:'D05',source:'dna-atm',target:'dna-p53',level:'A',kind:'direct',stage:2,label:bi('ATM/Chk2 → p53（肌母细胞）','ATM/Chk2 → p53 (myoblasts)'),refs:['P15226436','P37982576'],model:bi('增殖肌母细胞；p53敲低小鼠','proliferating myoblasts; p53-knockdown mice'),dose:bi('IR 10 Gy；后肢30/40 Gy','10 Gy IR; 30/40 Gy hindlimb'),time:bi('早期及长期组织结局','early and long-term tissue outcome'),method:bi('p53磷酸化、遗传敲低、凋亡和干细胞计数','p53 phosphorylation, genetic knockdown, apoptosis and stem-cell counts'),functional:bi('有遗传干预，但模型不同','genetic intervention, across different models'),limits:bi('不可扩展为所有MuSC的统一链。','Cannot be generalized to all MuSCs.')},
    {id:'D06',source:'dna-p53',target:'dna-p21',level:'A',kind:'direct',stage:2,label:bi('p53 → p21/周期阻滞','p53 → p21/cell-cycle arrest'),refs:['P15226436'],model:bi('增殖C2C12和原代肌母细胞','proliferating C2C12 and primary myoblasts'),dose:bi('IR 10 Gy','10 Gy IR'),time:bi('约4 h内早期峰值','early peak within about 4 h'),method:bi('p21报告基因、RNA/蛋白检测','p21 reporter and RNA/protein assays'),functional:bi('细胞周期相关读出','cell-cycle readout'),limits:bi('终末肌管反应受限。','Response is restricted in terminal myotubes.')},
    {id:'D07',source:'dna-p53',target:'dna-apoptosis',level:'A',kind:'direct',stage:2,label:bi('p53相关凋亡分支','p53-associated apoptosis branch'),refs:['P15226436','P37982576'],model:bi('肌母细胞及后肢照射小鼠','myoblasts and hindlimb-irradiated mice'),dose:bi('IR 10 Gy；30/40 Gy','10 Gy IR; 30/40 Gy'),time:bi('早期凋亡及长期肉瘤随访','early apoptosis and long-term sarcoma follow-up'),method:bi('TUNEL/cleaved caspase-3/遗传敲低','TUNEL/cleaved caspase-3/genetic knockdown'),functional:bi('有凋亡和p53干预读出','apoptosis and p53-intervention readouts'),limits:bi('高剂量动物模型，不代表临床剂量。','High-dose animal model; not clinical dosing.')},
    {id:'D08',source:'dna-radiation',target:'dna-ros',level:'A',kind:'direct',stage:1,label:bi('ROS/RNS升高','ROS/RNS increase'),refs:['P20726709'],model:bi('大鼠卫星细胞体外γ射线','rat satellite cells, in vitro gamma radiation'),dose:bi('1–10 Gy，重点≥5 Gy','1–10 Gy, emphasis ≥5 Gy'),time:bi('20 min–48 h','20 min–48 h'),method:bi('氧化应激、细胞周期、凋亡和NO测定','oxidative-stress, cell-cycle, apoptosis and NO assays'),functional:bi('NO供体部分救援增殖','partial proliferation rescue by NO donor'),limits:bi('不画ROS直接导致某一单一结局。','Do not make ROS the sole cause of one outcome.')},
    {id:'D09',source:'dna-radiation',target:'dna-mito',level:'A',kind:'observed',stage:3,label:bi('线粒体代谢重塑','mitochondrial metabolic remodeling'),refs:['P31438652'],model:bi('ICR小鼠骨骼肌与C2C12肌管','ICR mouse muscle and C2C12 myotubes'),dose:bi('2 Gy小鼠；6 Gy C2C12','2 Gy mice; 6 Gy C2C12'),time:bi('约16–24 h','about 16–24 h'),method:bi('OCR、mtDNA、COXIV、代谢和AMPK','OCR, mtDNA, COXIV, metabolism and AMPK'),functional:bi('代谢适应读出','metabolic adaptation readout'),limits:bi('不是线粒体ROS或线粒体自噬的直接证明。','Not direct proof of mitochondrial ROS or mitophagy.')},
    {id:'D10',source:'dna-radiation',target:'dna-autophagy',level:'A',kind:'observed',stage:3,label:bi('自噬结构/标志增加','autophagy structures/markers increase'),refs:['P20685830','P35294551'],model:bi('C2C12重离子；Sprague-Dawley大鼠肌纤维化','C2C12 heavy-ion model; Sprague-Dawley rat fibrosis model'),dose:bi('重离子剂量摘要未给；大鼠90 Gy','heavy-ion dose absent from abstract; 90 Gy rat model'),time:bi('20 min起；1–24周','from 20 min; 1–24 weeks'),method:bi('EM、LC3/LysoTracker、TUNEL、组织学','EM, LC3/LysoTracker, TUNEL and histology'),functional:bi('3-MA抑制C2C12标志；无长期结局因果','3-MA suppresses C2C12 markers; no long-term causal outcome'),limits:bi('不画自噬一定保护或有害。','Do not label autophagy inherently protective or harmful.')},
    {id:'D11',source:'dna-dsb',target:'dna-function',level:'A',kind:'observed',stage:4,label:bi('损伤标志与扩增/分化不足同模型出现','damage markers co-occur with expansion/differentiation deficit'),refs:['P38936620'],model:bi('人3D骨骼肌类器官','human 3D skeletal-muscle organoids'),dose:bi('2 Gy','2 Gy'),time:bi('30 min、18 h、72 h','30 min, 18 h, 72 h'),method:bi('组织学、免疫荧光和RNA-seq','histology, immunofluorescence and RNA-seq'),functional:bi('扩增、分化和修复反应读出','expansion, differentiation and repair readouts'),limits:bi('不画成DNA损伤已经被证明是唯一中介。','Not proof that DNA damage is the sole mediator.')},
    {id:'D12',source:'dna-ros',target:'dna-nrf2',level:'B',kind:'reference',stage:5,label:bi('氧化应激 → KEAP1–NRF2/ARE（经典）','oxidative stress → KEAP1–NRF2/ARE (canonical)'),refs:['R9755511','P29298131'],model:bi('Reactome经典人类通路；骨骼肌综述','Reactome canonical human pathway; skeletal-muscle review'),dose:bi('不适用','not applicable'),time:bi('不适用','not applicable'),method:bi('官方通路与综述','curated pathway and review'),functional:bi('无辐射肌肉特异功能干预','no radiation-muscle-specific intervention'),limits:bi('只作条件性参考，不写成辐射MuSC已证实链。','Conditional reference only; not a confirmed radiation-MuSC chain.')},
    {id:'D13',source:'dna-nrf2',target:'dna-function',level:'C',kind:'candidate',stage:5,label:bi('SFN/NRF2相关保护候选','SFN/NRF2-associated protection candidate'),refs:['P36400201'],model:bi('C57BL/6J辐射肌纤维化动物研究','C57BL/6J radiation-fibrosis mouse study'),dose:bi('摘要未充分核实剂量','dose not fully verified in abstract'),time:bi('8周','8 weeks'),method:bi('SFN干预、NRF2及氧化应激/纤维化指标','SFN intervention, NRF2 and redox/fibrosis markers'),functional:bi('动物候选干预','animal candidate intervention'),limits:bi('不画NRF2直接抑制SMAD3或直接修复DNA。','Do not draw NRF2 directly inhibiting SMAD3 or repairing DNA.')},
    {id:'D14',source:'dna-dsb',target:'dna-atr',level:'B',kind:'reference',stage:1,label:bi('ATR（经典复制压力分支）','ATR (canonical replication-stress branch)'),refs:['R5693606','R69473'],model:bi('Reactome经典人类DNA损伤通路','Reactome canonical human DNA-damage pathway'),dose:bi('不适用','not applicable'),time:bi('不适用','not applicable'),method:bi('Reactome事件条目','Reactome event entry'),functional:bi('无辐射肌肉功能干预','no radiation-muscle functional intervention'),limits:bi('在本图中与直接ATM/Chk2证据分层。','Layered separately from direct ATM/Chk2 evidence.')},
    {id:'D15',source:'dna-atr',target:'dna-chk1',level:'B',kind:'reference',stage:1,label:bi('ATR → Chk1（经典检查点）','ATR → Chk1 (canonical checkpoint)'),refs:['R69473'],model:bi('Reactome G2/M DNA损伤检查点','Reactome G2/M DNA-damage checkpoint'),dose:bi('不适用','not applicable'),time:bi('不适用','not applicable'),method:bi('Reactome事件条目','Reactome event entry'),functional:bi('无辐射肌肉功能干预','no radiation-muscle functional intervention'),limits:bi('不能替代肌肉细胞直接证据。','Cannot replace direct muscle-cell evidence.')}
  ]
};

export const navigation=[
  {id:'N-OV-DNA',view:'overview',source:'ov-dna',targetView:'dna-redox',targetNode:'dna-dsb',label:bi('查看DNA损伤专题','Open DNA-damage module')},
  {id:'N-OV-MUSC',view:'overview',source:'ov-musc',targetView:'musc-fap-ecm',targetNode:'muscFunction',label:bi('查看MuSC–FAP–ECM专题','Open MuSC–FAP–ECM module')},
  {id:'N-OV-FAP',view:'overview',source:'ov-fap',targetView:'musc-fap-ecm',targetNode:'fap',label:bi('共享节点：FAP','Shared node: FAP')},
  {id:'N-OV-ECM',view:'overview',source:'ov-ecm',targetView:'musc-fap-ecm',targetNode:'ecm',label:bi('共享节点：ECM','Shared node: ECM')},
  {id:'N-DNA-MUSC',view:'dna-redox',source:'dna-function',targetView:'musc-fap-ecm',targetNode:'muscFunction',label:bi('进入MuSC–FAP–ECM','Go to MuSC–FAP–ECM')},
  {id:'N-DNA-OV',view:'dna-redox',source:'dna-dsb',targetView:'overview',targetNode:'ov-dna',label:bi('返回机制总览','Return to overview')},
  {id:'N-MUSC-OV',view:'musc-fap-ecm',source:'radiation',targetView:'overview',targetNode:'ov-radiation',label:bi('返回机制总览','Return to overview')},
  {id:'N-MUSC-DNA',view:'musc-fap-ecm',source:'ros',targetView:'dna-redox',targetNode:'dna-ros',label:bi('查看ROS/DNA专题','Open ROS/DNA module')}
];

export const excluded=[
  {id:'X01',relation:bi('ROS → DNA损伤已完成因果验证','ROS → DNA damage fully causally proven'),reason:bi('现有辐射MuSC证据不足以确定方向性中介。','Current radiation-MuSC evidence does not establish directional mediation.')},
  {id:'X02',relation:bi('DNA修复失败 → MuSC长期耗竭','repair failure → long-term MuSC depletion'),reason:bi('长期缺陷研究没有完成ATM/p53/凋亡机制测定。','Long-term-deficit studies did not measure ATM/p53/apoptosis mechanisms.')},
  {id:'X03',relation:bi('NRF2 → SMAD3直接抑制','NRF2 → direct SMAD3 inhibition'),reason:bi('SFN研究为摘要级伴随变化，不证明直接抑制。','The SFN study reports association-level changes, not direct inhibition.')},
  {id:'X04',relation:bi('FAP来源TGF-β1 → MuSC抑制','FAP-derived TGF-β1 → MuSC inhibition'),reason:bi('FAP分泌组的具体抑制因子未确定。','The specific inhibitory FAP-secretome factor is unresolved.')}
];


// ---------------- v0.5 additions ----------------
// New subgraphs. Nodes with status:'scaffold' are placeholders: they carry no evidence edge and render greyed as "evidence pending".
const scaffold=(id,type,x,y,w,label,sub,extra={})=>({id,type,x,y,w,h:80,status:'scaffold',label,sub,...extra});

Object.assign(viewNodes,{
  'vessel-endothelium':[
    {id:'ve-radiation',type:'event',x:40,y:300,w:156,h:78,label:bi('电离辐射','Ionizing radiation'),sub:bi('局部/体外模型','local / in vitro'),shared:'radiation'},
    {id:'ve-perfusion',type:'vascular',x:300,y:150,w:214,h:84,label:bi('微血管灌注','Microvascular perfusion'),sub:bi('CEUS · 证据缺口','CEUS · evidence gap'),shared:'vascular'},
    {id:'ve-ev',type:'ev',x:300,y:430,w:230,h:84,label:bi('MPC-EV促血管生成支持','MPC-EV pro-angiogenic support'),sub:bi('照射来源EV功能下降','reduced when EVs come from irradiated MPCs'),shared:'ev'},
    {id:'ve-angio',type:'vascular',x:640,y:430,w:230,h:84,label:bi('体外血管生成读出','In vitro angiogenesis readout'),sub:bi('HUVEC管形成 · 微血管片段','HUVEC tubes · microvascular fragments')},
    scaffold('ve-capillary','vascular',640,150,230,bi('毛细血管密度 / 内皮—MuSC耦合','Capillary density / endothelium–MuSC coupling'),bi('证据待补','evidence pending')),
    scaffold('ve-endo-sen','vascular',980,150,230,bi('内皮衰老 / 通透性','Endothelial senescence / permeability'),bi('证据待补','evidence pending')),
    scaffold('ve-rt-dose','vascular',980,430,230,bi('放疗剂量下体内血管结局','In vivo vascular outcome at RT doses'),bi('证据待补','evidence pending'))
  ],
  'immune-macrophage':[
    {id:'im-radiation',type:'event',x:40,y:300,w:156,h:78,label:bi('电离辐射','Ionizing radiation'),sub:bi('幼年局部照射','juvenile local irradiation'),shared:'radiation'},
    {id:'im-macrophage',type:'immune',x:340,y:296,w:214,h:84,label:bi('巨噬细胞 TGF-β1','Macrophage TGF-β1'),sub:bi('CellChat来源推断','CellChat source inference'),shared:'immune'},
    {id:'im-fap',type:'fap',x:700,y:296,w:214,h:84,label:bi('FAP TGFBR2','FAP TGFBR2'),sub:bi('受体端推断','receptor-side inference'),topic:'musc-fap-ecm',shared:'fap'},
    scaffold('im-recruit','immune',340,110,230,bi('单核/巨噬细胞募集动态','Monocyte/macrophage recruitment kinetics'),bi('证据待补 · 需流式/谱系示踪','evidence pending · needs flow/lineage tracing')),
    scaffold('im-polar','immune',340,500,230,bi('巨噬细胞极化 / 清除','Macrophage polarization / clearance'),bi('证据待补','evidence pending')),
    scaffold('im-causal','immune',1010,296,230,bi('配体中和/细胞特异敲除','Ligand neutralization / cell-specific knockout'),bi('证据待补 · A11因果检验','evidence pending · causal test of A11'))
  ],
  'senescence-p21':[
    {id:'sn-radiation',type:'event',x:40,y:300,w:156,h:78,label:bi('电离辐射','Ionizing radiation'),sub:bi('体外/局部照射','in vitro / local irradiation'),shared:'radiation'},
    {id:'sn-p53',type:'checkpoint',x:300,y:140,w:200,h:80,label:bi('p53','p53'),sub:bi('增殖肌母细胞情境','proliferating myoblast context'),topic:'dna-redox',shared:'dna-redox'},
    {id:'sn-p21',type:'checkpoint',x:620,y:140,w:220,h:80,label:bi('p21 / Cdkn1a','p21 / Cdkn1a'),sub:bi('周期阻滞 · 持续转录信号','arrest · persistent transcript signature'),shared:'dna-redox'},
    {id:'sn-fap',type:'fap',x:620,y:450,w:220,h:84,label:bi('FAP衰老样/促纤维化','Senescence-like / fibrotic FAP'),sub:bi('同模型观察','same-model observation'),topic:'musc-fap-ecm',shared:'fap'},
    scaffold('sn-sasp','stress',980,450,230,bi('SASP因子','SASP factors'),bi('证据待补 · 具体因子未识别','evidence pending · factors unidentified')),
    scaffold('sn-senolytic','candidate',980,140,230,bi('衰老细胞清除（senolytic）','Senolytic clearance'),bi('证据待补 · 无辐射肌肉干预数据','evidence pending · no radiation-muscle intervention data'))
  ],
  'ev-mirna':[
    {id:'ev-radiation',type:'event',x:40,y:300,w:156,h:78,label:bi('电离辐射','Ionizing radiation'),sub:bi('体外/荷瘤模型','in vitro / tumor-bearing'),shared:'radiation'},
    {id:'ev-radev',type:'ev',x:290,y:130,w:230,h:84,label:bi('照射MPC-EV miRNA货物改变','Irradiated MPC-EV miRNA cargo shift'),sub:bi('13↓ / 7↑（nCounter）','13↓ / 7↑ (nCounter)'),shared:'ev'},
    {id:'ev-function',type:'musc',x:620,y:130,w:230,h:84,label:bi('照射MPC存活/增殖','Irradiated MPC viability / proliferation'),sub:bi('NoRad-EV部分救援；Rad-EV无效','NoRad-EV partial rescue; Rad-EV none'),topic:'musc-fap-ecm',shared:'musc'},
    scaffold('ev-targets','ev',960,130,230,bi('miRNA → 靶基因因果','miRNA → target-gene causality'),bi('仅预测 · 证据待补','prediction only · evidence pending')),
    {id:'ev-srm',type:'candidate',x:290,y:430,w:230,h:84,label:bi('肿瘤sEV携带SRM','Tumor sEVs carrying SRM'),sub:bi('ArA → ISGylation（荷瘤）','ArA → ISGylation (tumor-bearing)')},
    {id:'ev-collagen',type:'outcome',x:620,y:430,w:230,h:84,label:bi('肌肉胶原I沉积 / 肌无力','Muscle collagen I / weakness'),sub:bi('eIF5A依赖 · 氯沙坦阻断','eIF5A-dependent · blocked by losartan'),shared:'outcome'},
    {id:'ev-fstl1',type:'candidate',x:960,y:430,w:230,h:84,label:bi('FAP分泌FSTL1','FAP-secreted FSTL1'),sub:bi('学位论文 · 方向不一致','thesis · mixed direction')},
    scaffold('ev-neonatal','hypothesis',960,600,240,bi('新生/幼年肌肉EV修复','Neonatal/young muscle-EV repair'),bi('假说 · 未在辐射模型证实','hypothesis · not demonstrated in radiation'))
  ]
});

const P_EV='P40835994',P_SRM='P40541182',P_SC='P40316295',P_FAP='P37671686';
Object.assign(viewEdges,{
  'vessel-endothelium':[
    {id:'V01',source:'ve-radiation',target:'ve-perfusion',level:'B',kind:'reference',stage:0,label:bi('灌注变化待核查','perfusion change unresolved'),refs:['P31841082'],model:bi('小鼠后肢CEUS','mouse hindlimb CEUS'),dose:bi('12或15 Gy','12 or 15 Gy'),time:bi('第1、8天','days 1 and 8'),method:bi('增强超声灌注检测','contrast-enhanced ultrasound'),functional:bi('第8天未见明确显著灌注下降','no clear significant perfusion decline at day 8'),limits:bi('只作为证据缺口，不表示确定血管耗竭。','Evidence-gap context only; not fixed vascular depletion.')},
    {id:'V02',source:'ve-radiation',target:'ve-ev',level:'A',kind:'direct',stage:1,label:bi('照射MPC的EV促血管生成支持下降','EVs from irradiated MPCs give less angiogenic support'),refs:[P_EV],model:bi('4–6月龄雄性SD大鼠比目鱼肌MPC（P2–3）','soleus MPCs from 4–6-month male SD rats (P2–3)'),dose:bi('单次10 Gy X线（130 kV）','single 10 Gy X-ray (130 kV)'),time:bi('照射后无血清培养48 h收集EV','EVs collected over 48 h serum-free after irradiation'),method:bi('超离心EV；NTA、TEM、CD9/Flotillin-1','ultracentrifuged EVs; NTA, TEM, CD9/Flotillin-1'),functional:bi('Rad-EV与NoRad-EV大小和蛋白量无差异，功能不同','Rad- and NoRad-EVs similar in size/protein yet differ in function'),limits:bi('体外单剂量、n=3–4；未做体内验证。','In vitro single dose, n=3–4; no in vivo validation.')},
    {id:'V03',source:'ve-ev',target:'ve-angio',level:'A',kind:'observed',stage:1,label:bi('Rad-EV较NoRad-EV血管生成更弱','Rad-EVs weaker than NoRad-EVs for angiogenesis'),refs:[P_EV],model:bi('HUVEC管形成；大鼠脂肪微血管片段3D培养','HUVEC tube formation; rat adipose microvascular fragments in 3D'),dose:bi('EV来自10 Gy照射MPC；EV 25/75 µg蛋白','EVs from 10 Gy MPCs; 25/75 µg EV protein'),time:bi('HUVEC 24 h；微血管片段第8天','HUVEC 24 h; fragments day 8'),method:bi('Angiogenesis Analyzer；GS-Lectin共聚焦','Angiogenesis Analyzer; GS-lectin confocal'),functional:bi('NoRad-EV高剂量分支长度约1.5倍；片段密度约3倍于Rad-EV','high-dose NoRad-EV ~1.5× branch length; ~3× fragment density vs Rad-EV'),limits:bi('HUVEC为人脐静脉内皮，不是肌肉微血管内皮；不能外推体内毛细血管密度。','HUVECs are not muscle microvascular endothelium; no inference to in vivo capillary density.')}
  ],
  'immune-macrophage':[
    {id:'I00',source:'im-radiation',target:'im-macrophage',level:'C',kind:'inference',stage:0,label:bi('免疫/旁分泌通讯推断','inferred immune/paracrine communication'),refs:[P_SC],model:bi('幼年小鼠scRNA-seq','juvenile-mouse scRNA-seq'),dose:bi('8.2 Gy × 3','8.2 Gy × 3'),time:bi('24 h、56 d','24 h, 56 d'),method:bi('单细胞转录组和CellChat','single-cell transcriptomics and CellChat'),functional:bi('无细胞特异敲除或中和','no cell-specific knockout or neutralization'),limits:bi('表达通讯不等于分泌蛋白和因果功能。','Expression-based communication is not secreted protein or causal function.')},
    {id:'I01',source:'im-macrophage',target:'im-fap',level:'C',kind:'inference',stage:1,label:bi('TGF-β1 → TGFBR2通讯推断','inferred TGF-β1 → TGFBR2 communication'),refs:[P_SC],model:bi('幼年小鼠单细胞转录组＋组织/蛋白验证','juvenile-mouse scRNA-seq plus tissue/protein validation'),dose:bi('8.2 Gy × 3','8.2 Gy × 3'),time:bi('24 h与56 d','24 h and 56 d'),method:bi('CellChat配体—受体推断','CellChat ligand–receptor inference'),functional:bi('通讯推断，无因果干预','inference without causal intervention'),limits:bi('与v0.3 A11相同；巨噬细胞来源及因果未用敲除/中和证实。','Same as v0.3 A11; macrophage source and causality lack knockout/neutralization proof.')}
  ],
  'senescence-p21':[
    {id:'S01',source:'sn-radiation',target:'sn-p53',level:'A',kind:'direct',stage:0,label:bi('辐射 → p53（肌母细胞）','radiation → p53 (myoblasts)'),refs:['P15226436','P37982576'],model:bi('增殖肌母细胞；p53敲低小鼠','proliferating myoblasts; p53-knockdown mice'),dose:bi('IR 10 Gy；后肢30/40 Gy','10 Gy IR; 30/40 Gy hindlimb'),time:bi('早期及长期组织结局','early and long-term tissue outcome'),method:bi('p53磷酸化、遗传敲低','p53 phosphorylation, genetic knockdown'),functional:bi('有遗传干预，但模型不同','genetic intervention, across different models'),limits:bi('与DNA专题D05同源；不可扩展为所有MuSC的统一链。','Mirrors DNA module D05; cannot be generalized to all MuSCs.')},
    {id:'S02',source:'sn-p53',target:'sn-p21',level:'A',kind:'direct',stage:0,label:bi('p53 → p21/周期阻滞','p53 → p21/cell-cycle arrest'),refs:['P15226436'],model:bi('增殖C2C12和原代肌母细胞','proliferating C2C12 and primary myoblasts'),dose:bi('IR 10 Gy','10 Gy IR'),time:bi('约4 h内早期峰值','early peak within about 4 h'),method:bi('p21报告基因、RNA/蛋白检测','p21 reporter and RNA/protein assays'),functional:bi('细胞周期相关读出','cell-cycle readout'),limits:bi('与D06同源；早期p21不等于持久衰老。','Mirrors D06; early p21 is not durable senescence.')},
    {id:'S03',source:'sn-radiation',target:'sn-p21',level:'A',kind:'observed',stage:0,label:bi('持续Cdkn1a转录信号','persistent Cdkn1a transcript signature'),refs:[P_SC],model:bi('幼年小鼠局部照射scRNA-seq','juvenile-mouse local irradiation scRNA-seq'),dose:bi('8.2 Gy × 3','8.2 Gy × 3'),time:bi('24 h与56 d','24 h and 56 d'),method:bi('单细胞转录组','single-cell transcriptomics'),functional:bi('无p21功能干预','no p21 functional intervention'),limits:bi('转录信号不等于功能性衰老；跨数据集“保守”需独立复核。','A transcript signature is not functional senescence; cross-dataset "conservation" needs independent replication.')},
    {id:'S04',source:'sn-radiation',target:'sn-fap',level:'A',kind:'direct',stage:1,label:bi('FAP衰老样/促纤维化状态','senescence-like / fibrotic FAP state'),refs:[P_FAP],model:bi('4周龄雄性小鼠单侧后肢','4-week-old male mice, unilateral hindlimb'),dose:bi('16 Gy单次','single 16 Gy'),time:bi('3、7、14、56 d','3, 7, 14, 56 d'),method:bi('细胞动态、DNA损伤、代谢与命运分析','cell dynamics, DNA damage, metabolism and fate assays'),functional:bi('FAP条件培养基功能实验','FAP-conditioned-medium functional assay'),limits:bi('与OV-A3同源；FAP数量在56 d下降，不画成持续扩增。','Mirrors OV-A3; FAP number declines at 56 d; no persistent expansion.')}
  ],
  'ev-mirna':[
    {id:'E01',source:'ev-radiation',target:'ev-radev',level:'A',kind:'observed',stage:0,label:bi('照射改变MPC-EV miRNA货物','irradiation shifts MPC-EV miRNA cargo'),refs:[P_EV],model:bi('大鼠比目鱼肌MPC，每组≥4只供体','rat soleus MPCs, ≥4 donors per group'),dose:bi('单次10 Gy X线','single 10 Gy X-ray'),time:bi('照射后48 h条件培养基','48 h conditioned medium after irradiation'),method:bi('nCounter大鼠miRNA panel（423个）','nCounter rat miRNA panel (423)'),functional:bi('Rad-EV中13个下调（含miR-206、let-7b）、7个上调（含miR-181a）','13 down (incl. miR-206, let-7b), 7 up (incl. miR-181a) in Rad-EVs'),limits:bi('倍数≥1.3、p<0.05、n=4；靶基因仅为数据库预测。','FC≥1.3, p<0.05, n=4; target genes database-predicted only.')},
    {id:'E02',source:'ev-radev',target:'ev-function',level:'A',kind:'direct',stage:0,label:bi('EV来源状态决定救援：NoRad-EV部分救援，Rad-EV无效','EV source state decides rescue: NoRad-EV partial, Rad-EV none'),refs:[P_EV],model:bi('10 Gy照射的大鼠MPC接受EV处理','10 Gy-irradiated rat MPCs treated with EVs'),dose:bi('10 Gy；EV 25–50 µg蛋白','10 Gy; 25–50 µg EV protein'),time:bi('存活48 h；BrdU 72 h','viability 48 h; BrdU 72 h'),method:bi('AO/PI活死染色；BrdU ELISA','AO/PI live/dead; BrdU ELISA'),functional:bi('NoRad-EV使存活由52%升至71%，增殖约+16%','NoRad-EV raised viability 52%→71%, proliferation ~+16%'),limits:bi('救援幅度有限；照射后增殖仍下降约85%。体外、单剂量。','Rescue is modest; proliferation still ~85% lower after IR. In vitro, single dose.')},
    {id:'E03',source:'ev-radiation',target:'ev-srm',level:'C',kind:'candidate',stage:1,label:bi('放疗 → ArA积累 → SRM经sEV分泌','radiotherapy → ArA → SRM secreted in sEVs'),refs:[P_SRM],model:bi('荷瘤小鼠局部放疗','tumor-bearing mice with local radiotherapy'),dose:bi('摘要未给剂量；待全文','dose not in abstract; full text pending'),time:bi('待全文','pending full text'),method:bi('sEV蛋白组、ISGylation检测','sEV proteomics, ISGylation assays'),functional:bi('氯沙坦阻断SRM ISGylation与分泌','losartan blocks SRM ISGylation and secretion'),limits:bi('肿瘤—宿主远程机制，不适用于无肿瘤的意外照射；摘要级。','Tumor–host remote mechanism, not applicable to tumor-free accidental exposure; abstract-level.')},
    {id:'E04',source:'ev-srm',target:'ev-collagen',level:'C',kind:'candidate',stage:1,label:bi('循环SRM → 亚精胺/eIF5A → 胶原I与肌无力','circulating SRM → spermidine/eIF5A → collagen I and weakness'),refs:[P_SRM],model:bi('荷瘤小鼠骨骼肌','skeletal muscle of tumor-bearing mice'),dose:bi('摘要未给剂量；待全文','dose not in abstract; full text pending'),time:bi('待全文','pending full text'),method:bi('代谢、胶原组织学、eIF5A依赖性','metabolism, collagen histology, eIF5A dependence'),functional:bi('氯沙坦缓解肌无力','losartan relieves weakness'),limits:bi('不画成放疗直接作用于肌纤维；剂量和时间待全文核查。','Not drawn as direct radiation action on myofibers; dose and timing pending full-text audit.')},
    {id:'E05',source:'ev-radiation',target:'ev-fstl1',level:'C',kind:'candidate',stage:1,label:bi('照射后FAP FSTL1表达变化（方向不一致）','FAP FSTL1 after irradiation (mixed direction)'),refs:['T_FSTL1'],model:bi('C3H10T1/2与原代FAP；小鼠后肢分次照射','C3H10T1/2 and primary FAPs; fractionated mouse hindlimb'),dose:bi('剂量待全文提取','dose to be extracted from full text'),time:bi('12、24、48 h；体内3 d','12, 24, 48 h; in vivo 3 d'),method:bi('qPCR/蛋白；FSTL1敲低分化实验；静脉rFSTL1','qPCR/protein; FSTL1 knockdown differentiation; IV rFSTL1'),functional:bi('敲低降低成纤维分化；静脉补充未提高肌内FSTL1','knockdown lowered fibrogenic differentiation; IV repletion did not raise muscle FSTL1'),limits:bi('C3H细胞24 h mRNA↓而48 h蛋白↑；硕士论文未同行评审。不作为A09未知抑制因子。','C3H mRNA ↓ at 24 h but protein ↑ at 48 h; unreviewed MSc thesis. Not the unresolved A09 inhibitor.')}
  ]
});

navigation.push(
  {id:'N-OV-VE',anchor:'below',dy:58,view:'overview',source:'ov-vessel',targetView:'vessel-endothelium',targetNode:'ve-perfusion',label:bi('查看血管/内皮专题','Open vessel/endothelium module')},
  {id:'N-OV-IM',anchor:'below',dy:58,view:'overview',source:'ov-immune',targetView:'immune-macrophage',targetNode:'im-macrophage',label:bi('查看免疫/巨噬细胞专题','Open immune/macrophage module')},
  {id:'N-OV-EV',anchor:'below',dy:58,view:'overview',source:'ov-window',targetView:'ev-mirna',targetNode:'ev-function',label:bi('查看EV/miRNA专题','Open EV/miRNA module')},
  {id:'N-DNA-SN',anchor:'below',dy:52,view:'dna-redox',source:'dna-p21',targetView:'senescence-p21',targetNode:'sn-p21',label:bi('查看衰老/p21专题','Open senescence/p21 module')},
  {id:'N-VE-OV',anchor:'below',dy:52,view:'vessel-endothelium',source:'ve-radiation',targetView:'overview',targetNode:'ov-vessel',label:bi('返回机制总览','Return to overview')},
  {id:'N-VE-EV',anchor:'below',dy:52,view:'vessel-endothelium',source:'ve-ev',targetView:'ev-mirna',targetNode:'ev-radev',label:bi('查看EV/miRNA专题','Open EV/miRNA module')},
  {id:'N-IM-OV',anchor:'below',dy:52,view:'immune-macrophage',source:'im-radiation',targetView:'overview',targetNode:'ov-immune',label:bi('返回机制总览','Return to overview')},
  {id:'N-IM-FAP',anchor:'below',dy:52,view:'immune-macrophage',source:'im-fap',targetView:'musc-fap-ecm',targetNode:'fap',label:bi('共享节点：FAP','Shared node: FAP')},
  {id:'N-SN-OV',anchor:'below',dy:52,view:'senescence-p21',source:'sn-radiation',targetView:'overview',targetNode:'ov-radiation',label:bi('返回机制总览','Return to overview')},
  {id:'N-SN-DNA',anchor:'below',dy:52,view:'senescence-p21',source:'sn-p53',targetView:'dna-redox',targetNode:'dna-p53',label:bi('查看DNA损伤专题','Open DNA-damage module')},
  {id:'N-SN-FAP',anchor:'below',dy:52,view:'senescence-p21',source:'sn-fap',targetView:'musc-fap-ecm',targetNode:'fap',label:bi('共享节点：FAP','Shared node: FAP')},
  {id:'N-EV-OV',anchor:'below',dy:52,view:'ev-mirna',source:'ev-radiation',targetView:'overview',targetNode:'ov-window',label:bi('返回机制总览','Return to overview')},
  {id:'N-EV-VE',anchor:'below',dy:52,view:'ev-mirna',source:'ev-radev',targetView:'vessel-endothelium',targetNode:'ve-ev',label:bi('查看血管/内皮专题','Open vessel/endothelium module')}
);

excluded.push(
  {id:'X05',relation:bi('Rad-EV特定miRNA → 特定靶基因已因果证实','specific Rad-EV miRNA → specific target causally proven'),reason:bi('靶基因来自miRTargetLink数据库预测，原研究未做敲除或过表达。','Targets come from miRTargetLink prediction; the study did no knockout or overexpression.')},
  {id:'X06',relation:bi('FSTL1即FAP分泌组中的未知抑制因子','FSTL1 is the unresolved FAP-secretome inhibitor'),reason:bi('证据为未同行评审学位论文且表达方向不一致。','Evidence is an unreviewed thesis with inconsistent expression direction.')},
  {id:'X07',relation:bi('新生/幼年肌肉EV可修复辐射肌损伤','neonatal/young muscle EVs repair radiation muscle injury'),reason:bi('目前仅有非辐射损伤或衰老模型数据；作为假说保留。','Only non-radiation injury or aging data exist; kept as a hypothesis.')}
);

// External identifiers for nodes, used by the unified registry and SBGN export.
// Only identifiers the maintainers are sure of; anything else stays absent (never guessed).
export const externalIds={
  'dna-p53':{hgnc:'TP53',mgi:'Trp53'},'sn-p53':{hgnc:'TP53',mgi:'Trp53'},
  'dna-p21':{hgnc:'CDKN1A',mgi:'Cdkn1a'},'sn-p21':{hgnc:'CDKN1A',mgi:'Cdkn1a'},
  'dna-atm':{hgnc:'ATM',mgi:'Atm'},'dna-chk2':{hgnc:'CHEK2',mgi:'Chek2'},'dna-atr':{hgnc:'ATR',mgi:'Atr'},'dna-chk1':{hgnc:'CHEK1',mgi:'Chek1'},
  'dna-nrf2':{hgnc:'NFE2L2',mgi:'Nfe2l2',reactome:'R-HSA-9755511'},
  'im-fap':{hgnc:'TGFBR2',mgi:'Tgfbr2'},'im-macrophage':{cl:'CL:0000235',hgnc:'TGFB1',mgi:'Tgfb1'},
  'ev-fstl1':{hgnc:'FSTL1',mgi:'Fstl1'},'ev-srm':{hgnc:'SRM',mgi:'Srm'},
  'musc':{cl:'CL:0000594',hgnc:'PAX7',mgi:'Pax7'},'ov-musc':{cl:'CL:0000594'},
  'macrophage':{cl:'CL:0000235'},'ov-vessel':{cl:'CL:0000115'},'ve-angio':{cl:'CL:0000115'},
  'psmad':{hgnc:'SMAD3',mgi:'Smad3'}
};

export const getNodes=view=>viewNodes[view]||[];
export const getEdges=view=>viewEdges[view]||[];
export const getStageIndex=(view,stage)=>Math.max(0,views[view].stages.findIndex(s=>s.id===stage));
export const sourceFor=id=>sources[id];
export const findNode=(view,id)=>getNodes(view).find(n=>n.id===id);
