const bi=(zh,en)=>({zh,en});
export const sources={
  P20726709:{pmid:'20726709',doi:'10.1667/RR2190.1',title:bi('卫星细胞的放射敏感性：细胞周期、凋亡和氧化应激','The radiosensitivity of satellite cells: cell cycle regulation, apoptosis and oxidative stress'),depth:bi('全文核查','Full text reviewed')},
  P33241204:{pmid:'33241204',doi:'10.1016/j.isci.2020.101760',title:bi('幼年Pax7+肌肉干细胞的辐射损伤导致终生肌纤维与肌核不足','Radiation damage to prepubertal Pax7+ muscle stem cells drives lifelong deficits'),depth:bi('全文＋SI核查','Full text and SI reviewed')},
  P31006621:{pmid:'31006621',doi:'10.1016/j.stem.2019.03.020',title:bi('谱系示踪发现可在应激下克隆扩增的储备MuSC亚群','Lineage tracing reveals reserve MuSCs capable of clonal expansion under stress'),depth:bi('全文核查','Full text reviewed')},
  P37671686:{pmid:'37671686',doi:'10.1002/jcsm.13320',title:bi('辐射诱导长期肌肉纤维化并促进FAP促纤维化表型','Radiation induces long-term muscle fibrosis and a fibrotic FAP phenotype'),depth:bi('全文＋SI核查','Full text and SI reviewed')},
  P40316295:{pmid:'40316295',doi:'10.1152/ajpcell.00115.2025',title:bi('单细胞转录组揭示辐射肌肉细胞动态与旁分泌通讯变化','Single-cell analysis reveals altered cellular dynamics and paracrine signaling'),depth:bi('全文＋Data S1核查','Full text and Data S1 reviewed')},
  P20081841:{pmid:'20081841',doi:'10.1038/ncb2015',title:bi('FAP促进成肌并参与损伤反应','FAPs facilitate myogenesis and respond to muscle injury'),depth:bi('全文核查','Full text reviewed')},
  P26053624:{pmid:'26053624',doi:'10.1038/nm.3869',title:bi('TNF与TGF-β调节FAP清除和纤维化','TNF and TGF-β regulate FAP clearance and fibrosis'),depth:bi('官方摘要；全文待补','Official abstract; full text pending')},
  P33252888:{pmid:'33252888',doi:'10.1097/CORR.0000000000001286',title:bi('TGF-β抑制剂减轻小鼠放射性肌纤维化','TGF-β inhibitor mitigates radiation-induced muscle fibrosis in mice'),depth:bi('既有全文剪藏','Archived full-text clipping')},
  P36400201:{pmid:'36400201',doi:'10.1016/j.lfs.2022.121197',title:bi('SFN调节NRF2及TGF-β/Smad相关变化','Sulforaphane regulates NRF2 and TGF-β/Smad-associated changes'),depth:bi('官方摘要；全文待补','Official abstract; full text pending')},
  P24065826:{pmid:'24065826',doi:'10.1073/pnas.1307680110',title:bi('Pax7对成人卫星细胞正常功能至关重要','Pax7 is critical for normal adult satellite-cell function'),depth:bi('官方摘要；全文待补','Official abstract; full text pending')},
  P18371421:{pmid:'18371421',doi:'10.1016/j.stem.2008.03.006',title:bi('Notch向Wnt的时间转换调节肌肉再生','Temporal switch from Notch to Wnt controls muscle regeneration'),depth:bi('官方摘要/出版者信息','Official abstract/publisher record')},
  P22493066:{pmid:'22493066',doi:'10.1242/dev.071233',title:bi('持续Notch激活促进Pax7并抑制分化','Constitutive Notch activation promotes Pax7 and inhibits differentiation'),depth:bi('官方摘要；全文待补','Official abstract; full text pending')},
  P19497282:{pmid:'19497282',doi:'10.1016/j.cell.2009.03.051',title:bi('Wnt7a–PCP驱动卫星干细胞对称扩增','Wnt7a–PCP drives symmetric satellite stem-cell expansion'),depth:bi('全文核查','Full text reviewed')}
};

export const stages=[
  {id:'radiation',duration:4000,title:bi('辐射事件与早期应激','Radiation event and early stress'),summary:bi('电离辐射首先触发细胞内氧化应激与损伤反应；具体效应依剂量、组织和细胞而变。','Ionizing radiation initiates oxidative and damage responses that depend on dose, tissue and cell type.')},
  {id:'musc',duration:5000,title:bi('MuSC数量与功能受损','Loss of MuSC number and function'),summary:bi('MuSC减少、ROS升高、NO下降；NO供体只有部分救援，不能解释全部增殖缺陷。','MuSC loss, higher ROS and lower NO emerge; NO-donor rescue is partial and not the sole explanation.')},
  {id:'fap',duration:6000,title:bi('FAP状态和免疫通讯改变','Altered FAP state and immune communication'),summary:bi('FAP出现衰老样/促纤维化状态；p-SMAD3仅早期亮起，巨噬细胞通讯保持为推断。','FAPs acquire senescence-like/profibrotic features; p-SMAD3 is transient and macrophage signaling remains inferred.')},
  {id:'secretome',duration:7000,title:bi('分泌组抑制成肌','Secretome impairs myogenesis'),summary:bi('辐射后FAP分泌组整体抑制分化和融合，但决定性分泌因子尚未识别。','The post-radiation FAP secretome impairs differentiation and fusion, while the decisive factor remains unknown.')},
  {id:'outcome',duration:6000,title:bi('长期生长不足与纤维化','Long-term growth deficit and fibrosis'),summary:bi('再生储备不足与间质重塑共同表现为肌纤维/肌核不足、ECM沉积和纤维化。','Reduced regenerative reserve and stromal remodeling culminate in myofiber/myonuclear deficits and fibrosis.')},
  {id:'repair',duration:6000,title:bi('可研究的修复窗口','Researchable repair windows'),summary:bi('储备MuSC、再生时序和动物药理干预被分别展示；这些窗口不表示临床疗效已确立。','Reserve MuSCs, regeneration timing and animal pharmacology are shown separately; none establishes clinical efficacy.')}
];

export const nodes=[
  {id:'radiation',type:'event',x:54,y:255,w:128,h:72,label:bi('电离辐射','Ionizing radiation'),sub:bi('局部/体外模型','local / in vitro')},
  {id:'musc',type:'musc',x:240,y:105,w:166,h:76,label:bi('MuSC','MuSC'),sub:bi('PAX7+卫星细胞','PAX7+ satellite cell')},
  {id:'ros',type:'stress',x:245,y:220,w:158,h:68,label:bi('ROS / RNS ↑','ROS / RNS ↑'),sub:bi('MuSC内测量','measured in MuSCs')},
  {id:'no',type:'stress',x:245,y:323,w:158,h:68,label:bi('NO ↓','NO ↓'),sub:bi('48 h · 部分机制','48 h · partial mechanism')},
  {id:'muscFunction',type:'musc',x:464,y:120,w:188,h:82,label:bi('MuSC储备与扩增 ↓','MuSC pool & expansion ↓'),sub:bi('急性减少 · 长期缺陷','acute loss · persistent deficit')},
  {id:'reserve',type:'repair',x:455,y:20,w:196,h:70,label:bi('稀有Pax3高表达储备MuSC','Rare Pax3-high reserve MuSC'),sub:bi('较低ROS · 应激克隆扩增','lower ROS · clonal expansion')},
  {id:'fap',type:'fap',x:455,y:354,w:196,h:82,label:bi('FAP衰老样/促纤维化状态','Senescence-like / fibrotic FAP'),sub:bi('状态改变，非持续扩增','state change, not continued expansion')},
  {id:'psmad',type:'signal',x:690,y:335,w:158,h:68,label:bi('早期 p-SMAD3 ↑','Early p-SMAD3 ↑'),sub:bi('3 d升高 · 56 d恢复','higher at 3 d · baseline at 56 d')},
  {id:'macrophage',type:'immune',x:460,y:510,w:190,h:76,label:bi('巨噬细胞 TGF-β1','Macrophage TGF-β1'),sub:bi('CellChat来源推断','CellChat source inference')},
  {id:'secretome',type:'fap',x:690,y:445,w:190,h:76,label:bi('FAP分泌组','FAP secretome'),sub:bi('具体因子尚未确定','specific factor unresolved')},
  {id:'myogenesis',type:'musc',x:920,y:190,w:190,h:82,label:bi('成肌分化/融合 ↓','Myogenic differentiation / fusion ↓'),sub:bi('未照射成肌细胞功能实验','functional assay in unirradiated myoblasts')},
  {id:'growth',type:'outcome',x:1110,y:95,w:170,h:84,label:bi('肌纤维与肌核不足','Myofiber & myonuclear deficit'),sub:bi('长期生长不足','long-term growth deficit')},
  {id:'ecm',type:'outcome',x:930,y:405,w:150,h:72,label:bi('ECM沉积 ↑','ECM deposition ↑'),sub:bi('胶原 · FN · αSMA','collagen · FN · αSMA')},
  {id:'fibrosis',type:'outcome',x:1125,y:390,w:155,h:82,label:bi('肌肉纤维化','Muscle fibrosis'),sub:bi('56 d / 9个月模型','56 d / 9-month models')},
  {id:'notchWnt',type:'repair',x:700,y:22,w:200,h:78,label:bi('Notch → 经典Wnt','Notch → canonical Wnt'),sub:bi('早期扩增 → 后期分化','early expansion → later differentiation')},
  {id:'wnt7a',type:'repair',x:700,y:120,w:200,h:72,label:bi('WNT7A–FZD7–PCP','WNT7A–FZD7–PCP'),sub:bi('对称扩增 · 独立分支','symmetric expansion · separate branch')},
  {id:'normalFap',type:'reference',x:690,y:535,w:190,h:76,label:bi('正常损伤FAP支持成肌','Injury FAP supports myogenesis'),sub:bi('非辐射参照','non-radiation reference')},
  {id:'clearance',type:'reference',x:920,y:535,w:180,h:76,label:bi('TNF→FAP清除','TNF→FAP clearance'),sub:bi('慢性TGF-β1抑制','restrained by chronic TGF-β1')},
  {id:'sb',type:'intervention',x:1115,y:505,w:165,h:76,label:bi('SB-505124','SB-505124'),sub:bi('动物药理候选','animal pharmacology')},
  {id:'sfn',type:'candidate',x:930,y:625,w:165,h:72,label:bi('SFN / NRF2','SFN / NRF2'),sub:bi('摘要级候选','abstract-level candidate')}
];

const edge=(id,source,target,level,kind,stage,label,refs,model,dose,time,limits,extra={})=>({id,source,target,level,kind,stage,label,refs,model,dose,time,limits,...extra});
export const edges=[
 edge('A01','radiation','muscFunction','A','direct',1,bi('数量/扩增能力下降','number / expansion decreases'),['P33241204'],bi('约4周龄小鼠，局部照射','~4-week-old mice, local irradiation'),bi('8.2 Gy × 3，隔日','8.2 Gy × 3, every other day'),bi('末次后2–4 h、3周及长期','2–4 h after final dose, 3 weeks and long term'),bi('仅代表幼年局部照射模型；仍有残余再生。','Applies to a juvenile local-irradiation model; residual regeneration remains.')),
 edge('A02','radiation','ros','A','direct',0,bi('MuSC内ROS/RNS升高','ROS/RNS rises in MuSCs'),['P20726709'],bi('大鼠卫星细胞体外γ射线','Rat satellite cells, in vitro gamma radiation'),'1–10 Gy',bi('早期至48 h','early to 48 h'),bi('不能用组织整体ROS替代细胞内测量。','Do not substitute whole-tissue ROS for cell-intrinsic measurements.')),
 edge('A03','radiation','no','A','direct',1,bi('NO下降','NO decreases'),['P20726709'],bi('大鼠卫星细胞体外γ射线','Rat satellite cells, in vitro gamma radiation'),'1或5 Gy','48 h',bi('只表示测量到的下降。','Represents the measured decrease only.')),
 edge('A04','no','muscFunction','B','partial',1,bi('部分关联增殖下降','partial link to reduced proliferation'),['P20726709'],bi('NO供体部分救援','Partial NO-donor rescue'),'5 Gy；sulindac',bi('48 h','48 h'),bi('细胞数仅约增加15%；不是唯一原因。','Cell number rose by only ~15%; this is not the sole cause.')),
 edge('A05','reserve','muscFunction','A','direct',5,bi('较低ROS / 应激克隆扩增','lower ROS / stress clonal expansion'),['P31006621'],bi('Mx1+、Pax3富集稀有MuSC亚群','Rare Mx1+, Pax3-enriched MuSC subset'),bi('辐射应激；具体剂量见原文','radiation stress; see paper for dose'),bi('应激克隆实验','stress clonal assays'),bi('只代表稀有储备亚群，不能泛化至全部MuSC。','Restricted to a rare reserve subset; not all MuSCs.')),
 edge('A06','radiation','fap','A','direct',2,bi('衰老样/促纤维化状态','senescence-like / fibrotic state'),['P37671686'],bi('4–5周龄雄鼠单侧后肢；分离FAP','4–5-week-old male mice, unilateral hindlimb; isolated FAPs'),bi('16 Gy；体外FAP 1 Gy','16 Gy; isolated FAPs 1 Gy in vitro'),bi('3、7、14、56 d','3, 7, 14 and 56 d'),bi('56 d时FAP数量下降；不能画成持续扩增。','FAP number decreases at 56 d; do not show continued expansion.')),
 edge('A07','radiation','psmad','A','direct',2,bi('早期SMAD3磷酸化','transient SMAD3 phosphorylation'),['P37671686'],bi('全肌蛋白测量','Whole-muscle protein measurement'),'16 Gy',bi('3 d升高；56 d恢复','higher at 3 d; baseline at 56 d'),bi('不能画成晚期持续激活或FAP特异测量。','Do not show persistent late activation or claim FAP-specific measurement.')),
 edge('A09','secretome','myogenesis','A','direct',3,bi('分化与融合受抑','differentiation and fusion impaired'),['P37671686'],bi('照射后分离FAP的条件培养基→未照射原代成肌细胞','Conditioned medium from post-IR FAPs → unirradiated primary myogenic cells'),bi('小鼠后肢16 Gy','Mouse hindlimb, 16 Gy'),bi('3/56 d FAP；56 d分化，3/56 d融合','3/56 d FAPs; differentiation at 56 d, fusion at 3/56 d'),bi('具体分泌因子未确定，不得改写为FAP来源TGF-β1。','The specific factor is unresolved; do not rewrite as FAP-derived TGF-β1.')),
 edge('A11','macrophage','fap','C','inference',2,bi('TGF-β1 → TGFBR2通讯推断','inferred TGF-β1 → TGFBR2 communication'),['P40316295'],bi('幼年小鼠单细胞转录组＋组织/蛋白验证','Juvenile-mouse scRNA-seq plus tissue/protein validation'),'8.2 Gy × 3',bi('24 h与56 d','24 h and 56 d'),bi('巨噬细胞来源及配体—受体因果未用敲除/中和证实。','Macrophage source and ligand–receptor causality lack knockout/neutralization proof.')),
 edge('A12','sb','fibrosis','A','pharmacology',5,bi('抑制纤维化','reduces fibrosis'),['P33252888'],bi('12周龄雄性C57BL/6，小鼠后肢','12-week-old male C57BL/6 mice, hindlimb'),bi('50 Gy单次；1 mg/kg/d腹腔8周','Single 50 Gy; 1 mg/kg/day i.p. for 8 weeks'),bi('9个月结局','9-month outcome'),bi('高单次剂量动物模型；不是人体疗效证据。','High single-dose animal model; not evidence of human efficacy.'),{inhibit:true}),
 edge('A13','sfn','fibrosis','C','candidate',5,bi('NRF2/TGF-β–Smad相关保护','NRF2/TGF-β–Smad-associated protection'),['P36400201'],bi('辐射肌纤维化动物药理研究','Animal pharmacology in radiation muscle fibrosis'),bi('当前摘要未充分核对剂量','dose not fully verified from current abstract'),bi('当前摘要级','abstract-level'),bi('不得画成NRF2直接抑制SMAD3；等待全文。','Do not draw NRF2 directly inhibiting SMAD3; full text pending.'),{inhibit:true}),
 edge('A14','normalFap','myogenesis','B','reference',5,bi('支持成肌','supports myogenesis'),['P20081841'],bi('一般急性肌损伤','General acute muscle injury'),'非辐射',bi('损伤后短暂FAP反应','transient post-injury FAP response'),bi('FAP不形成肌纤维；与辐射模型分层显示。','FAPs do not form myofibers; keep separate from radiation evidence.')),
 edge('A15a','macrophage','clearance','B','reference',5,bi('TNF促进FAP凋亡/清除','TNF promotes FAP apoptosis/clearance'),['P26053624'],bi('急性肌损伤/慢性mdx模型','Acute injury / chronic mdx model'),'非辐射',bi('损伤阶段依赖','injury-stage dependent'),bi('摘要级非辐射参照，不直接外推放射肌肉。','Abstract-level non-radiation reference; not directly transferable to irradiated muscle.')),
 edge('A15b','psmad','clearance','B','reference',5,bi('慢性TGF-β1抑制清除','chronic TGF-β1 restrains clearance'),['P26053624'],bi('慢性mdx模型','Chronic mdx model'),'非辐射',bi('慢性病理背景','chronic pathology'),bi('不是A09的具体分泌因子，也不是辐射直接证据。','Not the specific A09 secreted factor and not direct radiation evidence.'),{inhibit:true}),
 edge('A16','notchWnt','myogenesis','B','reference',5,bi('阶段切换：扩增→分化','temporal switch: expansion → differentiation'),['P18371421','P22493066'],bi('一般成人肌肉再生；持续NICD模型','General adult regeneration; sustained NICD model'),'非辐射',bi('早期Notch；后期经典Wnt','early Notch; later canonical Wnt'),bi('Notch不直接激活Wnt；持续Notch可抑制MYOD/分化。','Notch does not directly activate Wnt; persistent Notch can inhibit MYOD/differentiation.')),
 edge('A18','wnt7a','muscFunction','B','reference',5,bi('对称扩增','symmetric expansion'),['P19497282'],bi('成年小鼠卫星干细胞/肌纤维培养和体内再生','Adult-mouse satellite stem cells, myofiber culture and in vivo regeneration'),'非辐射',bi('再生实验','regeneration assays'),bi('PCP分支与经典Wnt/β-catenin分开。','PCP branch is separate from canonical Wnt/β-catenin.')),
 edge('A19','musc','muscFunction','B','reference',5,bi('维持MuSC池正常功能','maintains normal MuSC pool function'),['P24065826'],bi('成人小鼠Pax7条件删除','Adult-mouse conditional Pax7 deletion'),'非辐射',bi('成人稳态/再生','adult homeostasis/regeneration'),bi('PAX7是细胞状态/功能节点，不表示所有分化阶段持续上调。','PAX7 is a state/function node, not continuously elevated through differentiation.')),
 edge('O01','muscFunction','growth','A','observed',4,bi('长期肌纤维/肌核不足','long-term myofiber / myonuclear deficit'),['P33241204'],bi('幼年局部照射小鼠','Juvenile local-irradiation mice'),'8.2 Gy × 3',bi('长期随访','long-term follow-up'),bi('表示同一模型的长期组织结局，不声称单一中介链完全证明。','Shows a long-term outcome in the same model; does not prove one complete mediation chain.')),
 edge('O02','fap','ecm','A','observed',4,bi('伴随ECM沉积','associated ECM deposition'),['P37671686'],bi('幼年单侧后肢照射小鼠','Juvenile unilateral hindlimb irradiation mice'),'16 Gy','56 d',bi('这是状态与组织结局的同模型关联，非特定分子单步因果。','Same-model association between state and tissue outcome, not a one-step molecular cause.')),
 edge('O03','ecm','fibrosis','A','observed',4,bi('组织学纤维化结局','histologic fibrosis outcome'),['P37671686','P33252888'],bi('两个小鼠局部照射模型','Two local-irradiation mouse models'),bi('16 Gy或50 Gy单次','16 Gy or single 50 Gy'),bi('56 d或9个月','56 d or 9 months'),bi('不同剂量和研究不可合并为定量时间曲线。','Different doses/studies cannot be merged into a quantitative trajectory.'))
];

export const layers=[
 {id:'direct',label:bi('直接辐射','Direct radiation')},
 {id:'reference',label:bi('一般修复参照','General repair reference')},
 {id:'inference',label:bi('推断与候选','Inference & candidates')}
];
export const nodeById=Object.fromEntries(nodes.map(n=>[n.id,n]));
export const edgeById=Object.fromEntries(edges.map(e=>[e.id,e]));
