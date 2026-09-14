# v0.2 新增通路证据与动态播放边界

核查日期：2026-09-10。范围仅为 KEAP1–NRF2 抗氧化应答及 SMAD7 负反馈；依据 Reactome 官方逐事件条目。辐射骨骼肌联系仅使用 PMID 36400201 原始摘要。未把肺、皮肤、mdx 或其他疾病模型当作直接放射性骨骼肌证据。

## 1. KEAP1–NRF2：可增加的最小主线

**基础状态：KEAP1–CUL3/RBX1 复合物 → NRF2 泛素化 → 蛋白酶体降解。应激状态：这一降解过程减弱 → NRF2 稳定积累 → 入核 → 与 small MAF 协同识别 ARE → 防御基因表达。**

NRF2 是蛋白常用名，编码基因为 NFE2L2；不要将其与 NRF1 或 nuclear respiratory factor 2 混淆。总路径为 [Reactome R-HSA-9755511](https://reactome.org/content/detail/R-HSA-9755511)，DOI 10.3180/R-HSA-9755511.1。

| 可绘关系 | 精确含义 / 动画动作 | 依据及简化程度 |
|---|---|---|
| KEAP1–CUL3/RBX1 + NRF2 → 结合复合物 | KEAP1是底物适配蛋白；复合物促使NRF2被泛素化并进入蛋白酶体降解 | [R-HSA-8932327](https://reactome.org/content/detail/R-HSA-8932327)。结合可画实线；“复合物→降解”包含多个步骤 |
| 氧化/亲电应激 → NRF2降解减少 | 改变KEAP1依赖的泛素化调控，使新生NRF2得以积累 | [R-HSA-9712274](https://reactome.org/content/detail/R-HSA-9712274)。应激→调控改变是概括；不要画成ROS直接磷酸化NRF2 |
| 稳定NRF2 → 细胞核 | 蛋白核转位 | [R-HSA-9759194](https://reactome.org/content/detail/R-HSA-9759194)。核转位可直接动画；上游稳定化非额外分子 |
| NRF2 + small MAF → ARE结合/转录调控 | small MAF包括MAFF/MAFG/MAFK；本图可选MAFK为代表，与NRF2协同作用；ARE是DNA顺式调控元件，不是蛋白 | [R-HSA-9759141](https://reactome.org/content/detail/R-HSA-9759141)、[R-HSA-9759186](https://reactome.org/content/detail/R-HSA-9759186)。NQO1条目还包括CHD6；界面写“协同因子省略”，勿声称两蛋白足以解释所有靶基因 |
| 核内NRF2调控 → GCLC、GCLM表达 | 各自为基因表达，含转录/翻译等步骤；不能让NRF2分子变成酶 | [GCLC R-HSA-9760122](https://reactome.org/content/detail/R-HSA-9760122)、[GCLM R-HSA-9760125](https://reactome.org/content/detail/R-HSA-9760125)。官方归类Reaction [omitted]，图中亦标“基因表达·多步” |
| 核内NRF2调控 → NQO1表达 | NRF2与MAFK/CHD6等协同在ARE上调NQO1 | [R-HSA-9759186](https://reactome.org/content/detail/R-HSA-9759186)。基因表达是多步概括 |
| GCLC/GCLM → 谷胱甘肽合成支持 | GCL催化谷氨酸与半胱氨酸连接，是GSH合成第一步；后续仍需其他酶/底物 | [R-HSA-174367](https://reactome.org/content/detail/R-HSA-174367)。不能把GCLC直接变成GSH，或把完整GSH合成画成一个直接反应 |
| 防御基因表达 → 氧化应激负荷缓冲 | 多条酶系的综合功能结果 | [R-HSA-9818027](https://reactome.org/content/detail/R-HSA-9818027)。虚线功能概括；NQO1主要催化醌的双电子还原，不是清除所有ROS的通用酶 |

动态建议：先显示稳态持续降解；应激后减少送往降解的NRF2，增加胞质中新积累的NRF2，再让部分入核。不要必须表现为KEAP1将所有原先结合的NRF2同时释放；官方条目讨论“hinge and latch”及新生NRF2积累模型。省略反应速率、具体半衰期、分子计数和泛素链精细类型，播放时间仅为教学节奏。

## 2. SMAD7：接在既有TGF-β主干后的最小负反馈

**核内SMAD复合物 → SMAD7表达 → SMAD7结合活化TGFBR1，减少SMAD2/3被招募/磷酸化；另可显示招募SMURF2，促使受体信号下调与周转。**

| 可绘关系 | 精确含义 / 动画动作 | 依据及简化程度 |
|---|---|---|
| 核内p-SMAD2/3–SMAD4 + 协同因子 → SMAD7表达 | 转录诱导构成负反馈；不是SMAD复合物转化成SMAD7 | [R-HSA-2106591](https://reactome.org/content/detail/R-HSA-2106591)。具体条目包含WWTR1/TAZ；证据来自HepG2等系统，不能称辐射FAP特异验证。表达包含转录/翻译，画多步概括 |
| SMAD7 → 活化TGFBR1结合 | 与SMAD2/3竞争受体结合，降低继续向下传递的机会 | [R-HSA-2173788](https://reactome.org/content/detail/R-HSA-2173788)。用结合动作 + 对“TGFBR1→SMAD2/3”箭头的抑制端；不要画成SMAD7化学破坏SMAD3 |
| SMAD7 + SMURF2 → 受体复合物招募 | SMAD7把E3泛素连接酶招募至受体 | [R-HSA-178218](https://reactome.org/content/detail/R-HSA-178218)。绑定/招募可画实线；本次只选SMURF2代表，不增加其他E3分支 |
| SMAD7–SMURF2参与 → 受体信号下调/周转 | 汇总受体调控、泛素化及降解等过程 | [R-HSA-2173788](https://reactome.org/content/detail/R-HSA-2173788)。虚线并标“多步概括”，不能让受体瞬间必然消失 |

**特异性细节：**[R-NUL-2176393](https://reactome.org/content/detail/R-NUL-2176393) 明确说明重组鼠Smad7与人SMURF2/受体在HEK293中表达的研究支持Smad7泛素化，但SMURF2对TGFBR1直接泛素化的实验结论不确定。因此不要把“SMURF2直接给TGFBR1加Ub”作为无条件确定、单步反应展示。该条目的原始研究 PMID 11163210。基础反馈可仅用SMAD7竞争结合，SMURF2作为可展开说明。

反馈动画表示信号受约束，不表示辐射纤维化已逆转、完全关闭、必然恢复正常。默认展示“下调部分后续磷酸化事件”，保留残余活动。

## 3. 和辐射骨骼肌的唯一新增联系及其边界

Wang等，2022，*Sulforaphane regulates Nrf2-mediated antioxidant activity and downregulates TGF-β1/Smad pathways to prevent radiation-induced muscle fibrosis*。PMID **36400201**；DOI **10.1016/j.lfs.2022.121197**。[PubMed原始摘要](https://pubmed.ncbi.nlm.nih.gov/36400201/)

摘要：C57BL/6J小鼠左大腿单次照射，8周检测；照射组氧化应激指标及TGF-β/Smad/纤维化指标增加，SFN干预后改善，并报告NRF2上调及AKT/GSK-3β/Fyn改变。支持将“抗氧化防御”与“促纤维化信号”放在同一教学场景，**不能证明本文中KEAP1–CUL3–NRF2每一步均被检测，也不证明SMAD7反馈在辐射肌肉中得到验证**。本次只核实摘要，剂量及完整机制干预未验证。

整合方式：两支共享“应激背景/细胞核/组织微环境”，分别显示证据标签。可在研究卡注明“SFN干预伴随NRF2增强与TGF-β/Smad指标下降”，不增加 **NRF2 ⊣ SMAD3** 直接连线，不声称摘要证明了直接分子抑制、FAP特异性或人体疗效。

## 4. 验收必须满足

- “抗氧化/应激缓冲”不等于ROS完全清零，动画末端仍可保留少量应激粒子；不能把全部ROS消失当作医学结论。
- 不添加NRF2直接抑制SMAD3、直接降解胶原或直接修复DNA箭头。
- ARE置于DNA上；基因表达与蛋白结合/磷酸化采用不同标识。
- SMAD7表达具有教学上的先后顺序，但不提供伪造的生物学时间常数。
- 通用经典机制与辐射骨骼肌实验观察分开标注；不新增未经核查的跨器官证据。
- 输出称“机制教学动画”，不称MCell模拟结果或定量药效预测。
