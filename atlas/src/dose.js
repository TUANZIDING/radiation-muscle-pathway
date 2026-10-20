// v0.5 structured dose layer.
// Each evidence edge may carry one or more irradiation regimens taken from its own source study.
// EQD2 uses the linear-quadratic model with alpha/beta = 3 Gy (late-responding normal tissue, e.g. muscle fibrosis).
// LQ conversion is unreliable for very large single fractions (> ~10 Gy); values are teaching aids, not dosimetry.
// setting: 'invivo' | 'invitro'. fractions: null when the source does not state fractionation (EQD2 is then not computed).

export const ALPHA_BETA=3;
export const RT_EQD2_LIMIT=70;

export const eqd2=(dosePerFraction,fractions,ab=ALPHA_BETA)=>{
  if(!(dosePerFraction>0)||!(fractions>0))return null;
  const total=dosePerFraction*fractions;
  return Math.round(total*(dosePerFraction+ab)/(2+ab)*10)/10;
};

const vivo=(gy,fractions,note='')=>({setting:'invivo',gyPerFraction:gy,fractions,note});
const vitro=(gy,note='')=>({setting:'invitro',gyPerFraction:gy,fractions:1,note});

// Regimens per edge id. Edges absent from this table are non-radiation references or have no stated dose ('na').
export const regimens={
  // v0.3 MuSC–FAP–ECM core
  A01:[vivo(8.2,3,'juvenile mouse hindlimb, alternate days')],
  A02:[vitro(5,'rat satellite cells, 1–10 Gy range; ≥5 Gy emphasised')],
  A03:[vitro(5,'rat satellite cells, 1 or 5 Gy')],
  A04:[vitro(5,'NO-donor partial rescue after 5 Gy')],
  A06:[vivo(16,1,'juvenile male hindlimb'),vitro(1,'isolated FAP')],
  A07:[vivo(16,1,'whole-muscle protein')],
  A09:[vivo(16,1,'FAP isolated after hindlimb irradiation; conditioned medium ex vivo')],
  A11:[vivo(8.2,3,'juvenile mouse scRNA-seq')],
  A12:[vivo(50,1,'12-week-old male hindlimb')],
  O01:[vivo(8.2,3)],
  O02:[vivo(16,1)],
  O03:[vivo(16,1),vivo(50,1)],
  // v0.4 overview
  'OV-A1':[vitro(2,'human 3D muscle organoid'),vitro(5,'rat satellite cells 1–10 Gy')],
  'OV-A2':[vivo(8.2,3),vitro(5)],
  'OV-A3':[vivo(16,1)],
  'OV-C1':[vivo(8.2,3)],
  'OV-B1':[vivo(12,1),vivo(15,1)],
  'OV-A4':[vivo(8.2,3)],
  'OV-A5':[vivo(16,1)],
  'OV-A6':[vivo(16,1),vivo(50,1)],
  'OV-C2':[vivo(50,1,'SB-505124 study; SFN dose not verified')],
  // v0.4 DNA / redox
  D01:[vitro(2,'organoid'),vitro(10,'C2C12/primary cells')],
  D02:[vitro(10)],D03:[vitro(10)],D04:[vitro(10)],
  D05:[vitro(10),vivo(30,null,'hindlimb 30/40 Gy; fractionation not recorded in registry')],
  D06:[vitro(10)],
  D07:[vitro(10),vivo(30,null,'hindlimb 30/40 Gy; fractionation not recorded in registry')],
  D08:[vitro(5,'1–10 Gy range')],
  D09:[vivo(2,1,'ICR mice'),vitro(6,'C2C12 myotubes')],
  D10:[vivo(90,null,'rat fibrosis model; fractionation not recorded in registry')],
  D11:[vitro(2)],
  // v0.5 new views
  V01:[vivo(12,1),vivo(15,1)],
  E03:[vivo(10,1,'tumor-bearing mice, 6 MV X-ray, 6 Gy/min')],
  E04:[vivo(10,1,'tumor-bearing mice; plus EV/AAV/spermidine')],
  V02:[vitro(10,'rat soleus MPCs, single X-ray dose')],
  V03:[vitro(10,'EVs from 10 Gy MPCs tested on HUVEC / MVF')],
  I00:[vivo(8.2,3)],
  I01:[vivo(8.2,3)],
  S01:[vitro(10),vivo(30,null,'hindlimb 30/40 Gy; fractionation not recorded in registry')],
  S02:[vitro(10)],
  S03:[vivo(8.2,3)],
  S04:[vivo(16,1)],
  E01:[vitro(10)],
  E02:[vitro(10)],
  E05:[vitro(null,'C3H10T1/2 and primary FAPs; dose to be extracted from thesis')]
};

export function doseProfile(edgeId){
  const list=(regimens[edgeId]||[]).map(r=>({...r,eqd2:r.setting==='invivo'?eqd2(r.gyPerFraction,r.fractions):null}));
  const classes=new Set();
  for(const r of list){
    if(r.setting==='invitro')classes.add('invitro');
    else if(r.eqd2==null)classes.add('unknown');
    else classes.add(r.eqd2<=RT_EQD2_LIMIT?'rt':'high');
  }
  if(!classes.size)classes.add('na');
  return {regimens:list,classes:[...classes]};
}

export function doseMatches(edgeId,filter){
  if(filter==='all')return true;
  const {classes}=doseProfile(edgeId);
  if(classes.includes(filter))return true;
  return classes.length===1&&(classes[0]==='na');
}

export function eqd2Text(edgeId,lang='zh'){
  const {regimens:list}=doseProfile(edgeId);
  const parts=list.filter(r=>r.setting==='invivo').map(r=>{
    const scheme=r.fractions?`${r.gyPerFraction} Gy × ${r.fractions}`:`${r.gyPerFraction} Gy`;
    if(r.eqd2==null)return lang==='zh'?`${scheme}：分次未记录，不计算EQD2`:`${scheme}: fractionation not recorded, EQD2 not computed`;
    return `${scheme} → EQD2 ≈ ${r.eqd2} Gy`;
  });
  if(!parts.length)return '';
  return (lang==='zh'?'体内EQD2（α/β=3，LQ模型，大单次剂量仅供参考）：':'In vivo EQD2 (α/β=3, LQ model; large single fractions indicative only): ')+parts.join('；');
}
