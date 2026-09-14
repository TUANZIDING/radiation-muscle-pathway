# 首个教学通路：TGF-β–SMAD 与放射性骨骼肌纤维化

核查日期：2026-09-10。方法：有界检索；官方通路数据库 + 直接骨骼肌原始研究。不是系统综述。

## 推荐结论

建议首条采用 **TGF-β1 → TGFBR2/TGFBR1 → p-SMAD2/3–SMAD4 → 核内转录调控**，以“放射性骨骼肌损伤中的促纤维化信号”为应用场景。经典细胞内主干有官方数据库支持，辐射骨骼肌联系有动物实验支持。二者需在教学界面清楚区分，不能冠以“人体辐射肌肉中全链条已确认”。

## 官方通路依据

- **Reactome R-HSA-2173789**，*TGF-beta receptor signaling activates SMADs*，物种 Homo sapiens，页面 ReviewStatus 5/5，通路 DOI 10.3180/R-HSA-2173789.3。支持配体结合、Ⅱ型受体激活Ⅰ型受体、SMAD2/3 磷酸化、与 SMAD4 成复合物及入核。该物种标记不等于放射性人骨骼肌专病验证。[官方页面](https://reactome.org/content/detail/R-HSA-2173789)
- **KEGG hsa04350**，*TGF-beta signaling pathway - Homo sapiens*，独立支持Ⅱ型→Ⅰ型受体→R-SMAD→SMAD4→入核、协同转录调控的经典结构。首版仅取其中 TGF-β 分支，不混入 BMP 的 SMAD1/5/9。[官方页面](https://www.kegg.jp/entry/hsa04350)

## 直接骨骼肌研究

### A. 受体抑制的干预证据

*Administration of TGF-ß Inhibitor Mitigates Radiation-induced Fibrosis in a Mouse Model*。PMID **33252888**；DOI **10.1097/CORR.0000000000001286**；PMCID PMC7899598。12周龄雄性 C57BL/6 小鼠，右后肢单次50 Gy；自照射当日起 SB-505124 1 mg/kg 腹腔注射，每日、8周；9个月评估股四头肌。治疗组存活至组织学7只，对照照射组10只；纤维化面积比例约0.14%对1.2%。支持受体抑制可减轻该模型纤维化，属临床前证据。[原始全文](https://pmc.ncbi.nlm.nih.gov/articles/PMC7899598/) · [PubMed](https://pubmed.ncbi.nlm.nih.gov/33252888/)

解释限制：单次高剂量、小样本和存活差异；不能直接推出临床有效，也没有逐节点证明 SMAD4 必要性。SB-505124 作用于 ALK4/5/7，不能称“TGF-β1 特异抑制剂”。药理原始来源：*SB-505124 Is a Selective Inhibitor of Transforming Growth Factor-β Type I Receptors ALK4, ALK5, and ALK7*，DOI 10.1124/mol.65.3.744。[原始发表页](https://www.sciencedirect.com/science/article/pii/S0026895X24068962)

### B. FAP 与 SMAD3 的直接细胞证据

Collao 等，*Radiation induces long-term muscle fibrosis and promotes a fibrotic phenotype in fibro-adipogenic progenitors*，J Cachexia Sarcopenia Muscle，2023；14:2335–2349。PMID **37671686**；DOI **10.1002/jcsm.13320**。幼龄雄鼠单后肢16 Gy，3/7/14/56天观察；56天见肌肉纤维化。体外 FAP 1 Gy 后72小时，αSMA应力纤维及SMAD3信号增强（Figure 5）；糖酵解抑制减轻纤维化分化。支持辐射后 FAP 表型变化，不能把该实验解释成 TGFBR1→SMAD4 全链路因果验证。且模型中长期 FAP 数量减少，不能画成“FAP无限增殖”。[原始全文](https://pmc.ncbi.nlm.nih.gov/articles/PMC10570115/) · [PubMed](https://pubmed.ncbi.nlm.nih.gov/37671686/)

### C. 整体肌组织中的 TGF-β/SMAD 改变

Wang 等，*Sulforaphane regulates Nrf2-mediated antioxidant activity and downregulates TGF-β1/Smad pathways to prevent radiation-induced muscle fibrosis*，Life Sci，2022；311:121197。PMID **36400201**；DOI **10.1016/j.lfs.2022.121197**。C57BL/6J 小鼠左大腿单次照射，8周后检测；摘要报告氧化应激和TGF-β/SMAD及纤维化指标增强，SFN干预后改善。本轮核实到摘要，剂量和完整干预设计未确认；不据此声称特异机制或临床疗效。[PubMed 原始摘要](https://pubmed.ncbi.nlm.nih.gov/36400201/)

### D. 可选扩展：细胞间通讯仍有推断属性

2025 *Single-cell transcriptomic analysis reveals alterations to cellular dynamics and paracrine signaling in radiation-induced muscle pathology*，DOI **10.1152/ajpcell.00115.2025**：小鼠放射性肌肉scRNA-seq和细胞通讯分析提示单核/巨噬细胞来源TGF-β与FAP的TGFβR2联系。首版可不加入；若加入，必须标“转录组通讯推断”，不能用实线写成已证明的配体流动或来源唯一性。[原始发表页](https://journals.physiology.org/doi/full/10.1152/ajpcell.00115.2025)

## 首版可绘节点和箭头

| 起点 → 终点 | 标签与语义 | 依据/显示方式 |
|---|---|---|
| 放射性损伤 → TGF-β促纤维化信号背景 | “辐射后可见信号增强；动物研究” | A/B/C；虚线概括联系，不能画为单步化学反应 |
| 活性 TGF-β1 → TGFBR2 | “结合” | Reactome；实线；TGF-β1位于细胞外 |
| 配体–TGFBR2 → TGFBR1/ALK5 | “招募；磷酸化并激活Ⅰ型受体” | Reactome/KEGG；两种受体跨膜，不是受体蛋白互相转化 |
| 活化 TGFBR1 → SMAD2/3 | “磷酸化” | Reactome/KEGG；p符号出现于SMAD2/3 |
| p-SMAD2/3 + SMAD4 → 复合物 | “结合” | Reactome；SMAD2/3表示2和/或3，不宜固定画成2、3、4各一分子是唯一组成 |
| SMAD复合物 → 细胞核 | “核转位” | Reactome/KEGG；不穿到细胞外 |
| 核内复合物 → 促纤维化转录程序 | “协同其他转录因子调控” | 经典转录调控；教学概括，不指定未经逐项核查的直接靶基因 |
| 转录程序 → ECM积累/纤维化表型 | “组织层面的长期结果” | A/B/C应用证据；虚线或宽带流程，不伪装成直接分子反应 |

空间建议：主体画“肌间质响应细胞（示意）”，旁边显示骨骼肌纤维与细胞外胶原。不要把大量胶原画成肌纤维胞质中的沉积，也不要把纤维化发生位置限定在成熟肌纤维内部。若主体明确标FAP，附“经典通路映射至FAP教学场景；并非各节点均已在辐射FAP中验证”。

## 首版不应声称

- “唯一通路”“整个放射性肌损伤由这条通路导致”“人类中全链条权威确认”。
- 用皮肤、肺、心脏的辐射研究替代骨骼肌证据；Smad3敲除的皮肤保护实验不作为本图的肌肉必要性证据。
- 电离辐射直接与TGFBR结合；TGF-β1总量升高等同活性配体升高；SMAD4被TGFBR1直接磷酸化。
- 把胶原蛋白当核内生成或在胞质沉积；把促纤维化转录概括箭头当成每个ECM基因均为直接靶标。
- 精确动力学、扩散系数、分子数量、反应速率或药效百分比来自动画。该作品应称机制教学动画，不称MCell计算仿真。

## 访问记录与可追溯性

Reactome与KEGG官方内容已读取。部分PubMed/PMC直开出现reCAPTCHA，检索工具仍返回原始页面正文/摘要；ScienceDirect全文返回403，故C只使用摘要。A/B的DOI–PMID映射另外通过NCBI官方ID converter实时核实（curl成功；Python默认信任链曾报证书错误，未禁用校验）。[官方ID映射查询](https://www.ncbi.nlm.nih.gov/pmc/utils/idconv/v1.0/?ids=PMC7899598,PMC10570115&format=json)
