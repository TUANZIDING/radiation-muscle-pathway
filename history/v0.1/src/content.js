export const sources = [
 {id:'R1',name:'Reactome · 受体激活 SMAD',tag:'人工审校 · 人类经典通路',url:'https://reactome.org/content/detail/R-HSA-2173789',text:'R-HSA-2173789：配体结合、受体磷酸化、R-SMAD 激活、与 SMAD4 组装及入核。'},
 {id:'R2',name:'KEGG · TGF-beta signaling',tag:'官方数据库 · hsa04350',url:'https://www.kegg.jp/pathway/hsa04350',text:'交叉核对 TGF-β 分支：II 型受体 → I 型受体 → SMAD2/3 → SMAD4。不要与 BMP 的 SMAD1/5/8 分支混合。'},
 {id:'R3',name:'Reactome · SMAD 转录活性',tag:'经典机制 · 情境依赖',url:'https://reactome.org/content/detail/R-HSA-2173793',text:'SMAD 复合物与转录辅因子协同调控基因；输出取决于细胞类型与微环境。'},
 {id:'E1',name:'TGF-β 抑制与照射后肌肉纤维化',tag:'原始研究 · 小鼠 · 2021',url:'https://pubmed.ncbi.nlm.nih.gov/33252888/',text:'股四头肌局部 50 Gy 照射；SB-505124 干预减轻长期纤维化。支持该信号参与，不代表人体疗效或逐节点验证。DOI: 10.1097/CORR.0000000000001286。'},
 {id:'E3',name:'照射后 FAP 的纤维化表型',tag:'原始研究 · 小鼠 / FAP · 2023',url:'https://pubmed.ncbi.nlm.nih.gov/37671686/',text:'局部照射后肌肉出现长期纤维化；分离 FAP 照射后出现促纤维化表型及 SMAD3 信号增强。支持细胞层面联系，尚非全链条验证。DOI: 10.1002/jcsm.13320。'},
 {id:'E2',name:'辐射肌肉中的 TGF-β1/Smad 变化',tag:'原始研究 · 小鼠 · 2022（摘要核对）',url:'https://pubmed.ncbi.nlm.nih.gov/36400201/',text:'Sulforaphane regulates Nrf2-mediated antioxidant activity and downregulates TGF-β1/Smad pathways to prevent radiation-induced muscle fibrosis。多通路干预，不能作为 SMAD 特异因果证明。'}
];
export const steps = [
 {short:'配体结合',name:'活性 TGF-β1',sub:'细胞外 · 信号起点',color:'#bd7641',refs:['R1','R2'],body:'具有活性的 TGF-β1 二聚体结合 II 型受体 TGFBR2，启动经典信号。这里从活性配体开始，潜伏复合物的释放与活化过程予以省略。',key:'配体先结合 II 型受体。',boundary:'辐射与活性 TGF-β1 之间涉及多个过程，本图不把辐射画成直接磷酸化受体。'},
 {short:'受体激活',name:'TGFBR2 → TGFBR1',sub:'细胞膜 · 丝/苏氨酸激酶',color:'#178d88',refs:['R1','R2'],body:'两个 II 型和两个 I 型受体形成复合物。TGFBR2 磷酸化并激活 TGFBR1（ALK5）；由 I 型受体将信号传递给胞内 SMAD。',key:'II 型激活 I 型，方向不可颠倒。',boundary:'几何体是角色示意，不是实验解析的蛋白质结构。'},
 {short:'SMAD 磷酸化',name:'p-SMAD2 / p-SMAD3',sub:'细胞质 · 信号传递',color:'#4d8baa',refs:['R1','R2'],body:'活化的 TGFBR1 磷酸化 SMAD2 和/或 SMAD3 的 C 端。金色 P 标记表示磷酸化；本教学视图省略受体内吞及 SARA 辅助招募。',key:'TGF-β 经典分支使用 SMAD2/3。',boundary:'SMAD2/3 表示 SMAD2 和/或 SMAD3，并非固定为一个 SMAD2 加一个 SMAD3。'},
 {short:'组装与入核',name:'R-SMAD : SMAD4',sub:'细胞质 → 细胞核',color:'#8f78bb',refs:['R1','R3'],body:'两个磷酸化的 R-SMAD 与一个 SMAD4 组成异源三聚体，随后进入细胞核。紫色组分表示共同介质 SMAD4。',key:'SMAD4 是协同组分，不是激酶。',boundary:'入核箭头表示转位；动画速度与分子数量不代表实测动力学。'},
 {short:'转录调控',name:'纤维化相关转录',sub:'细胞核 · 依赖转录辅因子',color:'#9b689c',refs:['R2','R3'],body:'核内 SMAD 复合物与其他转录因子及辅因子协同，调节相关基因。在促纤维化情境下，这一过程可推动细胞外基质生成程序。',key:'基因转录发生在核内，胶原沉积在细胞外。',boundary:'本版不把所有胶原基因列作已在辐射肌肉中逐一证实的直接靶点。'},
 {short:'组织结局',name:'细胞外基质积累',sub:'细胞外 → 骨骼肌间质',color:'#b57655',refs:['E1','E2'],body:'持续的促纤维化反应可导致间质基质积累。辐射骨骼肌动物研究支持 TGF-β 相关信号参与这一过程，但整体组织结局还涉及多种细胞与调控。',key:'纤维化是组织层面的结局。',boundary:'核内转录至细胞外基质的虚线合并了翻译、加工、分泌与沉积，不是一条直接生化反应。'}
];
