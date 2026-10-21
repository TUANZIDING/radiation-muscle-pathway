# EV 干预骨骼肌损伤：文献筛查与通路证据图 v0.1
# Extracellular vesicles as an intervention in skeletal muscle injury: screen and evidence-graded pathway map (v0.1)

检索日期 / Search date: 2026-10-21. 工具 / Tools: PubMed E-utilities (esearch/efetch/esummary) + Europe PMC fullTextXML, curl/python in shell.
工作目录 / Workspace: `/workspace/work/ev-screen-v01/`

---

## 1. 检索与计数 / Queries and counts

### 1.1 主检索 (PubMed, `NOT review[pt]`), 2026-10-21

| id | 主题 | 命中 | 取回 |
|---|---|---|---|
| Q1_rad | `(irradiat* OR radiation OR radiotherap* OR "gamma ray*")[tiab] AND ("extracellular vesicle*" OR exosome* OR "small vesicle*" OR secretome)[tiab] AND (muscle OR myoblast* OR "satellite cell*" OR myogenic OR "muscle stem cell*")[tiab]` | 23 | 23 |
| Q2_inj | `("extracellular vesicle*" OR exosome*) AND ("skeletal muscle" OR "muscle injury" OR "muscle regeneration" OR "muscle atrophy" OR "muscle repair") AND (cardiotoxin OR BaCl2 OR "barium chloride" OR glycerol OR contusion OR laceration OR "volumetric muscle loss" OR freeze OR crush OR injur* OR regenerat*)` | 198 | 198 |
| Q3_atrophy | `("extracellular vesicle*" OR exosome*) AND (sarcopenia OR cachexia OR "muscle atrophy" OR "muscle wasting" OR denervation OR disuse OR "hindlimb unloading" OR dexamethasone OR mdx OR Duchenne) AND muscle` | 234 | 234 |
| Q4_isch | `("extracellular vesicle*" OR exosome*) AND ("hindlimb ischemia" OR "limb ischemia") AND (muscle OR regenerat* OR fibrosis)` | 46 | 46 |
| Q5_source | `("extracellular vesicle*" OR exosome*) AND (myoblast* OR "satellite cell*" OR "fibro-adipogenic" OR "muscle stem" OR "mesenchymal stem" OR "mesenchymal stromal") AND "skeletal muscle" AND (treat* OR therap* OR administ* OR inject*)` | 115 | 115 |
| **并集 / union** | | | **430** |

### 1.2 辐射补充检索 / Radiation-focused supplementary searches

| id | 查询 | 命中 |
|---|---|---|
| R1 | `irradiat* AND (extracellular vesicle* OR exosome*) AND muscle` | 15 |
| R2 | `(radiation OR radiotherapy OR "ionizing radiation") AND (EV OR exosomes) AND ("skeletal muscle" OR myoblast OR "satellite cell" OR "radiation-induced fibrosis")` | 42 |
| R3 | `(EV OR exosomes) AND ("radiation-induced fibrosis" OR "radiation injury" ...) AND (mesenchymal OR stem cell)` | 45 |
| R4 | `Fry CS[au] AND (vesicle* OR exosome*)` | 5 |
| R5 | `("muscle progenitor cell*" OR "muscle precursor cell*" OR "myogenic progenitor") AND (EV OR exosome*)` | 217 |

Europe PMC 全文检索补充 3 条查询（`"radiation" AND "extracellular vesicles" AND "skeletal muscle" AND "satellite cells" AND "irradiated"` 等，49 + 1 + 0 命中），除会议摘要集外无新增原始研究。

**去重后共筛查标题 658 条**（430 主检索 + 228 辐射补充），阅读摘要 157 条，**全文核查 32 篇**（所有辐射相关研究 + 30 篇机制最详尽的 B 级研究，经 Europe PMC fullTextXML 获取）。

### 1.3 结果计数 / Result counts

- **纳入 132 条**：A 级 2 条、B 级 111 条、C 级 19 条
- **排除 526 条**（`ev-excluded-v01.csv`，逐条给出理由）
- 65/132 (49%) 报告了因果验证实验；41/132 (31%) 报告了可用剂量；32/132 全文核查

关于 atlas 中 PMID **40316295**：该文为 *单细胞转录组揭示辐射肌肉细胞动态*（Nguyen 等，Am J Physiol Cell Physiol 2025，8.2 Gy × 3，幼年小鼠），**不是 EV 干预研究**，因此不在本次纳入范围内；Fry 实验室（PMID 27840022, 32864621, 33948557）的 MPC/卫星细胞 EV 工作为**机械负荷肥大**模型而非损伤模型，列入 excluded 并标注"保留为 ECM 模块的背景证据"。真正的"辐射 + 肌源性 EV"研究只有 **PMID 40835994**（见下）。

### 1.4 模型与来源分布 / Distribution

模型：缺血/IR 15、心脏毒素 12、衰老/肌少症 11、糖皮质激素 11、DMD/mdx 9、VML 8、CKD/糖尿病 6、失用/卸载 6、BaCl2 5、去神经 5、**辐射 4**、挫伤/牵拉/撕裂 4、恶病质/化疗 4、盆底肌 4、甘油 3、肩袖 3、ALS/SMA 2、其他 20。

EV 来源：MSC（骨髓/脂肪/脐带/其他）53、肌源细胞（成肌细胞/肌管/MuSC/MPC）29、植物与细菌 7、血小板/PRP/红细胞 6、血浆/血清 5、脂肪细胞 5、巨噬细胞 4、iPSC/ESC 3、FAP 2、其他 18。

---

## 2. 通路图：节点 / Pathway map: nodes

类型：`ev-source` / `cargo` / `target` / `signaling` / `cell-process` / `outcome`

### 2.1 EV 来源节点 (ev-source)

| id | 标签 zh | label en |
|---|---|---|
| S_MSC_BM | 骨髓间充质干细胞EV | bone-marrow MSC EV |
| S_MSC_AD | 脂肪间充质干细胞EV | adipose MSC EV |
| S_MSC_UC | 脐带/华通胶MSC EV | umbilical-cord / Wharton-jelly MSC EV |
| S_MSC_OTHER | 其他MSC（羊膜、尿源、扁桃体、牙龈、胎盘）EV | other MSC EV (amniotic, urine-derived, tonsil, gingival, placental) |
| S_MUSC | 肌卫星细胞/肌源祖细胞EV | muscle satellite cell / myogenic progenitor EV |
| S_MYOTUBE | 成肌细胞/肌管EV | myoblast / myotube EV |
| S_MUSCLE_TISSUE | 肌组织来源EV（新生、再生期、运动后） | muscle-tissue EV (neonatal, regenerating, post-exercise) |
| S_FAP | 成纤维脂肪祖细胞EV | fibro-adipogenic progenitor EV |
| S_MAC | 巨噬细胞EV（M1/M2） | macrophage EV (M1/M2) |
| S_PLT | 血小板/PRP/红细胞EV | platelet / PRP / RBC EV |
| S_SERUM | 血清/血浆EV（年轻、运动后） | serum / plasma EV (young, post-exercise) |
| S_ADIPO | 脂肪细胞/脂肪组织EV | adipocyte / adipose-tissue EV |
| S_IPSC | iPSC/ESC衍生MSC与心球细胞EV | iPSC/ESC-MSC and cardiosphere-derived cell EV |
| S_PLANT | 植物与细菌来源EV | plant- and bacteria-derived EV |
| S_ENG | 工程化EV（载药、表面展示、靶向肽） | engineered EV (loaded, surface-displayed, targeted) |
| S_RAD_MPC | 受照肌前体细胞EV（Rad-EV） | irradiated muscle precursor cell EV (Rad-EV) |
| S_RAD_TUMOR | 受照肿瘤来源EV | irradiated-tumour-derived EV |

### 2.2 货物节点 (cargo)

miRNA：miR-494, miR-29/29b/29c, miR-26a, miR-486-5p, miR-132-3p, miR-145-5p, miR-23b-3p, miR-126-5p, miR-127-3p, miR-140-5p, miR-193b-3p, miR-125b-5p, miR-17-5p, miR-210-3p, miR-367-3p, miR-542-3p, miR-146a-5p, miR-501, miR-24-3p, miR-206-3p, miR-27a/b-3p, let-7f-5p, miR-16-5p, miR-199a-5p（致病）, miR-690（致病）, Let-7d-3p（致病）, miR-224（致病）, miR-335-5p（致病）, miR-215, miR-206-5p
非编码 RNA：circHIPK3, circDB, circ_0000002（致病）, α-Klotho mRNA
蛋白/脂质/代谢物：NRG1, Wnt7a, Follistatin, IGF1R, MUSTN1, HSP60, annexin A1, Pannexin 1 通道, IL6ST 诱饵受体（工程）, 肌生长抑制素前肽（工程）, PAI-1（致病）, SRM/精胺合酶（致病）, S1P 亚种（鞘脂）, 肌酸（代谢物）, 脂质代谢物, 硒相关蛋白, CD81（摄取介导）

### 2.3 靶基因 / 信号 / 细胞过程 / 结局节点

- **target**：PTEN, SPRED1, FBXO32/Atrogin-1, TRIM63/MuRF1, FoxO1, FoxO3/FoxO3a, YY1, Pax7, MEF2A/C/D, S1PR3, KLF7, EZH2, TGFBR3, PTPN1, AP2M1, ACVR2A/ACVR1B, Caveolin-1, HMGA2, USP7, MAPK11, DUSP4, Asxl2, Eef1a1, ACO1/TFRC, Fbx32, IGF-1R, MSTN/肌生长抑制素, Smad3, CTGF, TGF-β1/β3
- **signaling**：PI3K/Akt, Akt/mTOR, AMPK, AMPK/ULK1, AMPK/SIRT1/PGC-1α, SIRT1/FoxO, NF-κB, TGF-β/SMAD2/3, SMAD1/5-ID1, Wnt/β-catenin, Notch1, ERK1/2, p38 MAPK, STAT3 / IL-6 反式信号, NLRP3 炎症小体, GSDME 焦亡, 铁死亡 (GPX4/ACSL4), PINK1/Parkin 线粒体自噬, 泛素-蛋白酶体系统 (UPS), 自噬-溶酶体
- **cell-process**：MuSC 激活/增殖/分化, 成肌融合, 巨噬细胞 M1→M2 极化, FAP 成脂/成纤维/米色化, 血管内皮增殖与成管, 凋亡, 焦亡, 铁死亡, 细胞衰老, 线粒体生物发生/自噬, 蛋白合成 vs 降解, ECM 沉积与重塑
- **outcome**：肌纤维横截面积 (CSA), 肌湿重/肌量, 握力/等长扭矩/收缩力, 纤维化 (胶原/Masson), 脂肪浸润, 炎症细胞浸润, 血流灌注/毛细血管密度, 中央核纤维/eMyHC 再生, 运动耐量, 存活

---

## 3. 通路图：边 / Pathway map: edges

同一关系在多项研究中出现时合并并列出全部 PMID。符号 `+` = 上调/促进，`−` = 下调/抑制。`causal` 指是否有货物敲降/通路抑制剂/EV 耗竭等直接因果实验。

### 模块 M1 — 抗炎与巨噬细胞 M2 转换 / Anti-inflammatory and M2 macrophage shift

| source → target | 符号 | grade | PMIDs | 模型 | 剂量 | 时间 | causal |
|---|---|---|---|---|---|---|---|
| MSC-EV → 巨噬细胞 M1→M2（Arg1+, Ym1+, CD206+; IL6−, Nos2−） | + | B | 28186708, 33323007, 33461058, 37964317, 40495198 | CTX、挫伤、VML、ACS、舌肌 | 1 µg/TA (28186708); 100 µg IV (37964317) | d1–d7 | 是（33323007 氯膦酸盐清除巨噬细胞；37964317 同法） |
| FAP-EV miR-125b-5p → PTPN1 (−) → ERK (−) → M2 极化 | + | B | 40660398 | CTX TA | 1×10⁷ 颗粒/TA | d4, d7 | 是（RNase 耗竭 + antagomiR-125b-5p） |
| M2 巨噬细胞 EV miR-501 → YY1 (−) → 成肌分化 (+) | + | B | 34634686 | 盆底肌损伤 | 未报告 | d5 | 部分（靶点验证） |
| M2 巨噬细胞 EV miR-24-3p → 成肌细胞增殖/分化 (+) | + | B | 40529508 | 腹肌损伤 | 未报告 | — | 否 |
| 再生期肌源EV → M1→M2 + NF-κB (−) → 蛋白降解 (−) | + | B | 40136713 | ALS (SOD1G93A) | 4.4×10⁹ EV/鼠 | 病程 | 否 |
| 骨骼肌 sEV（S1P 亚种）→ 早期 M1 极化与迁移 (+) → MuSC 分化 (+) | + | B | 40984725 | CTX TA | 30 µg/TA | 再生全程 | 部分（sEV vs lEV、TNF-α 条件化对照） |
| BMSC-Exo → IκB 磷酸化 (−) → NF-κB 核转位 (−) → MuRF1/Atrogin-1 (−) | − | **C** | 42027319 | TNF-α C2C12 | — | 48 h | 否（仅体外） |
| MSC-EV → TNFα (−) → cCASP3 (−) → 肌细胞存活 (+) | − | **C** | 41811203 | 3D 人肌构建体 | — | — | 部分（蛋白阵列） |
| 炎症成肌细胞 EV miR-224 → WNT-9a (−) → M2 极化 (−)【致病】 | − | **C** | 35802903 | 肌损伤炎症 | — | — | 是（在体用 antagomiR 而非 EV） |

### 模块 M2 — MuSC 增殖/分化的 miRNA 调控 / MuSC proliferation-differentiation via miRNA

| source → target | 符号 | grade | PMIDs | 模型 | 剂量 | 时间 | causal |
|---|---|---|---|---|---|---|---|
| FAP-EV miR-127-3p → S1PR3 (−) → 成肌 (+) | + | B | 38442155 | BaCl2 TA | 1.2×10⁹ EV/TA | d1, d3, d5 | 是（RNase 保护 + mimic） |
| MPC-EV（抑制 miR-140-5p）→ Pax7 去抑制 (+) → SC G1→S (+) | + | B | 38428405 | BaCl2 腓肠肌 | 2.3×10¹⁰ 颗粒/mL | 反复 | 是（装载 mimic/inhibitor + AAV） |
| BMSC-Exo miR-126-5p → FBXO32 (−) → MyoD (+) → SC 分化 (+) | + | B | 41025492 | BaCl2 腓肠肌 | 未报告 | — | 是（供体 miR-126 敲降 EV 失效） |
| 肌源 sEV miR-193b-3p → AP2M1 (−) → 成肌进程 (+) | + | B | 42823972 | VML TA | 100 µg（胶原海绵） | d14 | 是（AP2M1 敲降表型一致） |
| hFCPC-Exo miR-145-5p → Wnt5a/β-catenin (+) → MyoD/MyoG/MyHC (+) | + | B | 38294592 | 肌少症大鼠 | 未报告 | — | 是（RNase + mimic/inhibitor） |
| 低氧 BMSC-Exo miR-210-3p → KLF7 (−) → PI3K/AKT (+) → SC 增殖分化 (+) | + | B | 39306891 | 老龄肌少症 | 未报告 | — | 部分（体外） |
| USC-Exo → SC ERK 磷酸化 (+) → 激活/增殖/分化 (+) | + | B | 30849996, 34711699 | 盆底肌损伤 | 1×10¹⁰ 颗粒/mL | — | 是（PD98059 体外阻断） |
| 血小板EV产品 (PEP) → NF-κB 依赖的 SC 增殖分化 (+) | + | B | 36175423 | 猪尿道括约肌 + 大鼠背阔肌 | 未报告 | — | 是（白藜芦醇阻断） |
| 新生肌 EV / 新生肌 EV miR-542-3p → Pax7 (+) / 衰老 (−) | + | B | 41572110, 42327492 | 甘油损伤、衰老 | 50–200 µg/mL（体外） | — | 是（42327492 mimic/inhibitor + 靶基因过表达） |
| C2C12 凋亡EV IGF1R → PI3K/AKT/mTOR (+) → 分化 (+) | + | B | 41344911 | 老龄肌丢失 | 未报告 | — | 是（Igf1r 敲降 + PI3K 抑制剂） |
| 年轻血清EV α-Klotho mRNA → 受体 Klotho (+) → 再生 (+) | + | B | 35665306 | 老龄 CTX TA | 等量回补 | d3–d23 | **是（EV 耗竭 + 回补 + Klotho siRNA）** |
| 萎缩肌管 sEV miR-690 → MEF2A/C/D (−) → SC 分化 (−)【致病】 | − | B | 36237168 | 衰老萎缩 | 未报告 | — | 是（AAV 过表达/沉默） |
| 衰老脂肪 EV Let-7d-3p → HMGA2 (−) → 肌祖细胞自我更新 (−)【致病】 | − | B | 35679898 | 老龄肌少症 | 未报告 | — | 是（靶点验证） |
| 衰老 BMSC-EV（CD81 介导摄取）→ SC 成肌潜能 (−)【致病】 | − | B | 35846725 | 老龄肌少症 | 未报告 | — | **是（抗 CD81 抗体 / siCD81 在体阻断逆转）** |
| 脂肪细胞EV circ_0000002 → miR-27a 海绵 → MSTN (+) → 分化 (−)【致病】 | − | B | 42402163 | CTX TA | 未报告 | — | 是（双荧光素酶 + 共转染） |
| 静息(G0)肌细胞外泌体 → Wnt 报告基因 (+) → 分化 (+) | + | **C** | 39108837 | 体外状态模型 | — | — | 部分（Kibra 调控分泌速率） |
| 年轻 hMPC-EV → 衰老 hMPC 活力与分化 (+) | + | **C** | 42371569 | 体外异龄交换 | — | — | 否 |

### 模块 M3 — Akt/mTOR 与 FoxO-UPS 抗萎缩轴 / Akt-mTOR anabolic and FoxO-UPS anti-atrophy axis

| source → target | 符号 | grade | PMIDs | 模型 | 剂量 | 时间 | causal |
|---|---|---|---|---|---|---|---|
| BMSC-Exo miR-486-5p → FoxO1 核转位 (−) → 萎缩 (−) | − | B | 34659106 | 地塞米松 5 mg/kg | 100 µg，隔日 IM | 2 周 | 是（miR-486-5p 抑制剂 EV 在体逆转） |
| hucMSC-Exo miR-132-3p → FoxO3 (−) → MuRF1/Atrogin-1 (−) → 握力/CSA (+) | − | B | 39420945 | 地塞米松 20 mg/kg + 衰老 | 40 µg / 20 µg q3d IV | 15 d / 8 周 | 是（Exo-Fect 装载 mimic/inhibitor） |
| hucMSC-EXO miR-23b-3p → Fbxo32/Trim63 (−) → 萎缩 (−) | − | B | 38381592 | 坐骨神经挤压去神经 | 超声引导 IM，d1 与 d7 | 2 次 | 是（抑制剂体外逆转） |
| Exo/miR-29 → YY1 (−), TGF-β3 (−) → MuRF1/atrogin-1 (−) → CSA (+) | − | B | 30711446 | UUO | 未报告 | — | 是（工程装载 + 靶点验证） |
| Exo/miR-26a → FoxO1 (−) → 肌生长抑制素 (−); atrogin/MuRF1 (−) → CSA (+) | − | B | 31037144, 31593640 | CKD 5/6 肾切、UUO | 每周 IM×8 周 | 8 周 | 是（工程装载） |
| T-MSC-Exo miR-145-5p → ACVR2A/ACVR1B (−) → 激活素A信号 (−) | − | B | 34440938 | 化疗 (Bu-Cy) | 30 µg/鼠 IV | d3 | 是（miR-145-5p 抑制剂体内外） |
| hucMSC-EXO → AMPK (+) → ULK1 (+) → 自噬 (+) → atrogin/MuRF1 (−) | − | B | 36708027 | db/db、高脂、制动 | 200 µg q3d IV | 8 周 | **是（AMPKα2 siRNA 与 3-MA 均取消疗效）** |
| MSC-EXO → SIRT1 (+) → FoxO1/3a (−) → 线粒体功能 (+) → 萎缩 (−) | − | B | 39871746 | db/db 糖尿病 | 200 µg q3d IV | 6 周 | 是（SIRT1 siRNA） |
| UC-MSC-Exo Follistatin → 肌生长抑制素 (−) → MuRF1/MAFbx (−)，AKT/mTOR (+) | − | B | 39732451 | 肌损伤 + C2C12 | 未报告 | — | 是（si-Follistatin EV 失效 + LY294002） |
| EXOpro（CD63-肌抑素前肽）→ 成熟肌生长抑制素 (−) → 肌量 (+) | − | B | 32028167 | mdx | 未报告 | 反复 | 是（表面锚定 vs 游离前肽） |
| RBC-EV siMstn → 肌生长抑制素 (−) → 肌生长 (+) | − | B | 37016578 | 癌性恶病质 | 未报告 | 反复 IM | 是（siRNA 即干预） |
| EPC-EX miR-17-5p → SPRED1 (−) → PI3K/p-Akt (+) → 凋亡 (−)，肌管 (+) | + | B | 37005678 | db/db 后肢缺血 | 1×10¹¹ EX/100 µL q7d | 21 d | 是（LY294002 体外） |
| hucMSC/MSC-Exo → ERα/ERβ, 雌二醇 (+) → PI3K/AKT/mTOR, ERK1/2 (+) | + | B | 40753405 | 地塞米松 20 mg/kg | 100 µg 双侧 IM | 2 周 | 否 |
| hucMSC-Exo → p-mTOR, Sirt1, PGC-1α (+) → 线粒体生物发生 (+) | + | B | 40722197 | SAMP10 肌少症 | 未报告 IV | 12 周 | 否 |
| 胎儿 MuSC-Exo → MuRF1/MAFbx (−) → 单纤维直径 (+) | − | B | 41422842 | 地塞米松 | 未报告 | — | 否 |
| MSTN⁻/⁻ 肌组织 EXO → 萎缩基因 (−) → CSA (+)（miR-455-3p/miR-143-5p 候选） | − | B | 40925199 | 地塞米松 | 未报告 IM | — | 否（仅测序） |
| 犬 ADMSC-Exo → MuRF1/Atrogin-1 (−)，纤维化与脂肪浸润 (−) | − | B | 41829063 | 甘油 + 地塞米松 | 100 µg ≈ 2.55×10⁹ 颗粒 | d7 | 否（仅剂量-效应） |
| EV-Cas9-29b → miR-29b 基因编辑抑制 → 萎缩 (−) | − | B | 35761332 | 制动 + 去神经 | 未报告 | — | 是（编辑本身即特异性干预） |
| 糖皮质激素 MuSC-EV miR-335-5p → MAPK11 (−) → iNOS (−) → UPS (+)【致病】 | + | **C** | 40867517 | 地塞米松（体外） | — | — | 是（靶点验证） |
| 脂肪 sEV miR-146a-5p → Fbx32 (−) / FoxO3 → 线粒体自噬调控 → 萎缩 (−) | − | B / **C** | 40211295（B，在体）, 39696303（C，体外+基因敲除） | 衰老、aKO 小鼠 | 未报告 | — | 是（mimic/inhibitor；脂肪特异性敲除） |

### 模块 M4 — TGF-β/SMAD 抗纤维化与 FAP 命运 / TGF-β-SMAD anti-fibrosis and FAP fate

| source → target | 符号 | grade | PMIDs | 模型 | 剂量 | 时间 | causal |
|---|---|---|---|---|---|---|---|
| MuSC-Exo → TGF-β1 (−) → Smad3 (−) → 成纤维细胞活化 (−) → 纤维化 (−) | − | B | 38329214 | 去神经 | 未报告 IM | — | 否 |
| MSC-exo → TGF-β (−) → 纤维化 (−)（与 PRP-exo 的 Myogenin 通路并列） | − | B | 32543878 | 牵拉损伤 TA | 未报告 | d0, d5, d10 | 否 |
| PRP-exo let-7f-5p / miR-16-5p → TGFBR3 (−) → KRT10 降解 (−) → ERK-PPARγ (−) → FAP 成脂 (−) | − | B | 41444423 | 甘油脂肪浸润 | 1×10⁹ 外泌体/TA | d7 | **是（RNA 耗竭 + 双 miR 抑制剂 + FAP 条件性 TGFBR3 敲除）** |
| MuSC/肌管 EV miR-206-3p, miR-27a/b-3p → FAP 成脂 (−) → IMAT (−) | − | B | 38442155 | BaCl2 | 1.2×10⁹ EV/TA | d1–d5 | 是（mimic 转染） |
| M2 巨噬细胞外泌体 → FAP 米色/棕色分化 (+) → 萎缩与脂肪浸润 (−) | − | B | 37936229 | 大块肩袖撕裂 | 2×10⁹ 外泌体 | 6 周 | 是（GW4869 阻断外泌体释放） |
| FAP-BAT (UCP1++) 外泌体 → 成肌融合 (+) → 萎缩与脂肪浸润 (−) | − | B | 35604307 | 大块肩袖撕裂 | 未报告 | 6 周 | 是（Exo-FB vs Exo-nFB 亚群对照） |
| miR-29 富集 EV → 成纤维基因 (−) → 纤维化 (−)，收缩力 (+) | − | B | 35816980 | 重度 TA 损伤 | 未报告（丝胶贴片） | d9, ~3 周 | 否 |
| 血清 EV → SMAD1/5 → ID1 启动子 → 血管重塑 (+) → 肌损伤 (−) | + | B | 28811546 | 急性后肢缺血 | 未报告 | — | 是（SMAD1/5 敲降 + ChIP，体外） |
| PL-MSC 外泌体 miR-29c → 成纤维基因 (−)，utrophin (+) | − | **C** | 29783118 | mdx（EV 仅体外） | 未报告 | — | 是（miR-29c 报告基因） |
| DMD 成纤维细胞外泌体 miR-199a-5p → Caveolin-1 (−) → Akt/ERK (+) → 纤维化 (+)【致病】 | + | B | 29981373 | CTX TA（人源EV注入） | 未报告 | — | 是（mimic/inhibitor 装载） |
| 受照肿瘤 sEV SRM → 肌肉精胺 (+) → eIF5A → I 型胶原 (+) → 纤维化/无力【致病，辐射】 | + | B | 40541182 | 放疗荷瘤小鼠 | 内源 | — | 是（氯沙坦阻断 ISG 化） |

### 模块 M5 — 血管新生 / Angiogenesis

| source → target | 符号 | grade | PMIDs | 模型 | 剂量 | 时间 | causal |
|---|---|---|---|---|---|---|---|
| ASC-EV NRG1 → 血管生长 (+)，肌细胞保护 (+)，MyoD (+) | + | B | 31665908 | 后肢缺血 | 未报告 | — | 是（NRG1 中和抗体在体） |
| MSC/ADSC/USC-EV → 血流灌注、毛细血管密度 (+) → 肌再生 (+) | + | B | 30041250, 36991295, 33461058, 28679310, 37964317 | 后肢缺血、VML、ACS | 100 µg IV (37964317) | d3–d28 | 否 |
| 工程 iMSC-EV（miR-126/21/296/182 + VEGF/bFGF/HGF/PDGF-BB）→ 灌注恢复 (+) | + | B | 40484285 | 严重肢体缺血 | 未报告 IV | 28 d | 否 |
| **非照射 MPC-EV → HUVEC 成管 (+1.5×)，微血管碎片密度 (+3×)** | + | **A** | 40835994 | 10 Gy 受照 MPC/内皮 | 25–75 µg 蛋白 | 24 h / d7–8 | 否 |
| 受照 MPC-EV（Rad-EV）→ 促血管活性丧失【辐射致病】 | − | **A** | 40835994 | 同上 | 同上 | 同上 | 否（仅组间对照） |
| hiPSC-EV / 植物 ELN → 内皮焦亡 (−)（TXNIP-NLRP3）→ 血管再生 (+) | + | B | 41357849 | 肢体缺血 | 未报告 IV | — | 部分（体外靶点验证） |
| SKP-SC-EV → 血管内皮增殖 (+) → 微循环与灌注 (+) | + | B | 35052570 | 去神经萎缩 | 5×10¹⁰ 颗粒/肌 | — | 否 |

### 模块 M6 — 线粒体与抗氧化 / Mitochondrial and antioxidant

| source → target | 符号 | grade | PMIDs | 模型 | 剂量 | 时间 | causal |
|---|---|---|---|---|---|---|---|
| SKP-SC-EV → Nrf2 (+), Nox2/Nox4 (−) → ROS (−)；PINK1/BNIP3/LC3B/ATG7 (−) | − | B | 35052570 | 去神经 | 5×10¹⁰ 颗粒 | — | 否 |
| hBMSC-EV → ROS (−)、炎症 (−) → UPS 与自噬-溶酶体 (−)；Sirt1/PGC-1α (+) | − | B | 39901193 | 尾吊失重 | 1×10¹⁰ 颗粒/mL IV | — | 否 |
| H2O2 预处理周细胞 sEV → 抗氧化/ECM 蛋白 → 肌纤维尺寸恢复 (+) | + | B | 35318675 | 制动失用 + 恢复 | 未报告 | 恢复期 | 否 |
| 植物 EV → AMPK/SIRT1/PGC-1α (+) 与 Akt/FoxO3a/Atrogin-1/MuRF1 (−) | ± | B | 38778385, 41261435 | 地塞米松 | 未报告 | — | 是（38778385：AMPK 抑制剂体外） |
| AA-sEV → Pink1/Parkin 线粒体自噬 (+) → mtROS (−) → MyoG/MyoD (+) | + | B | 41308393 | db/db 糖尿病 | 口服，未报告 | — | 是（3-MA 体外取消） |
| 新生肌 EV miR-542-3p → Eef1a1 (−) → AMPK (+) → 线粒体功能 (+)，衰老 (−) | + | B | 42327492 | 衰老 | 50–200 µg/mL | — | 是（mimic/inhibitor + 过表达） |
| 运动（离心）肌 EV 脂质代谢物 → AMPK（推断）→ 再生 (+) | + | B | 42666019 | BaCl2 | 25 µg/肌 | 14 d | 是（GW4869 耗竭内源 EV） |
| **MuSC-EV → 受损肌管最大耗氧率与储备呼吸能力 (+)（对未损伤肌管无效）** | + | **C** | 33256005 | H2O2 氧化损伤 | — | 2 h 递送 | 否 |

### 模块 M7 — 细胞死亡：焦亡、铁死亡、凋亡 / Regulated cell death

| source → target | 符号 | grade | PMIDs | 模型 | 剂量 | 时间 | causal |
|---|---|---|---|---|---|---|---|
| UMSC-Exo circHIPK3 → miR-421 (−) → FOXO3a (+) → NLRP3/caspase-1 (−) → IL-1β/IL-18 (−) | − | B | 32550900 | 后肢缺血 | 100 µg，3 点 IM | d1–d28 | **是（si-circHIPK3 EV 在体失效）** |
| UMSC-EV circDB → miR-34a (−) → USP7 (+) → Notch1 (+) → 成肌增殖 (+) | + | B | 40896178 | 后肢缺血 | 100 µg，3 点 IM | d28 | **是（si-circDB EV 在体失效）** |
| BMSC-exo miR-367-3p → EZH2 (−) → 焦亡 (−) | − | B | 39137155 | 下肢 I/R | 未报告 | — | 部分（荧光素酶） |
| IMRC-Exo → GSDME/N-GSDME (−) → HMGB1/IL-1β/IL-18 (−) | − | B | 40917871 | 蛇毒肢体损伤 | 7.5×10¹⁰ 颗粒 SC | 24 h | 否 |
| IMRC-Exo → ACSL4/NOX1/COX2 (−), GPX4/FTH1 (+) → 铁死亡 (−) | − | B | 40628981 | 蛇毒肢体损伤 | 7.5×10¹⁰ 颗粒 SC | 24 h | 否 |
| F-SECCS BMSC-EV → FOXO3 → 铁死亡 (−) → 成肌恢复 (+) | − | B | 42893935 | 糖脂毒性萎缩 | 未报告 | — | 是（转录组+功能） |
| 植物 ELN miR-115-5p → TXNIP (−) → NLRP3 (−) → 内皮焦亡 (−) | − | B | 41357849 | 肢体缺血 | 未报告 IV | — | 部分 |
| MUSTN1 外泌体 → ACO1-TFRC (+), SLC39A14 (−) → 铁死亡 (−) | − | **C** | 41547500 | 地塞米松（体外） | — | — | 是（ACO1 结合验证） |
| miR-215 修饰 BMSC 外泌体 → FABP3 (−) → 凋亡 (−) | − | **C** | 33503452 | H2O2 L6 成肌细胞 | — | — | 是（双荧光素酶） |

### 模块 M8 — 膜修复与非信号机制 / Membrane repair and non-signalling mechanisms

| source → target | 符号 | grade | PMIDs | 模型 | 剂量 | 时间 | causal |
|---|---|---|---|---|---|---|---|
| 外泌体（肌管源最佳）→ 肌膜完整性 (+) → Ca²⁺ 内流 (−) → calpain (−) → DAPC 降解 (−) | − | B | 33333294 | mdx | 未报告，全身 | — | 否（来源对照） |
| MSC-ApoEV → Pannexin 1 通道活化 → 肌酸释放 (+) → 成肌融合 (+) | + | B | 36646698 | CTX TA | 30 µg/TA | d3 给药 | 是（BB-FCF 抑制 Pannexin 1） |
| Wnt7a-EV（单次尾静脉）→ 挽救 mdx+Wnt7a 条件敲除的再生缺陷 | + | B | 39702274 | mdx + CTX | 未报告，单次 IV | d21 | **是（条件性基因敲除 + EV 挽救）** |
| 工程 IL6ST 诱饵受体 EV → IL-6 反式信号 (−) → p-STAT3 (−) | − | B | 33049461 | mdx | 未报告 | — | 是（选择性阻断反式而非经典信号） |
| 电针→穴区外泌体释放 (+) → Pax7/MyoD/MyoG/MyHC (+)，胶原 (−) | + | B | 41566727 | 布比卡因多裂肌损伤 | GW4869 3 mg/mL, 50 µL/穴 | 7 d | 是（GW4869 局部阻断逆转疗效） |

### 模块 M9 — 辐射特异（A 级与辐射背景） / Radiation-specific

| source → target | 符号 | grade | PMIDs | 模型 | 剂量 | 时间 | causal |
|---|---|---|---|---|---|---|---|
| 非照射 MPC-EV → 受照 MPC 活力 (+) 52%→71% | + | **A** | 40835994 | 10 Gy X 线，大鼠 MPC | 50 µg 蛋白/孔 | 48 h | 否 |
| 非照射 MPC-EV → 受照 MPC 增殖 (+ ~16% BrdU) | + | **A** | 40835994 | 同上 | 25 µg/孔 | 72 h | 否 |
| 受照 MPC → EV miRNA 谱改变（13↓/7↑；miR-206、let-7b、miR-105、miR-34a、miR-499、miR-132 ↓；miR-181a、let-7c ↑） | ± | **A** | 40835994 | 同上 | — | 48 h 条件培养 | 否 |
| 受照 EV miRNA → VEGFA-VEGFR2 / PI3K-Akt / SIRT1-FoxO（**仅生信预测**） | ± | **C**（证据等级降级） | 40835994 | 同上 | — | — | 否 |
| Myo-MIX（MyoD/MyoG/Myf6）转染 MSC 外泌体 → Mrf4/Myf5/Myogenin (+)，胶原 (−)，CD68⁺ (−) | + | **A** | 41936013 | 放射性食管炎 10 Gy×2 | 未报告 | 4 周 | 否（与 naive/vector 外泌体对照） |
| 电离辐射 → GBM 外泌体 PAI-1 (+) → 肌肉 STAT3 (+) → MuRF1/Atrogin1 (+)；mTOR (−)【致病】 | + | B | 36231065 | 放疗 GBM 荷瘤 | 内源 | — | 是（TM5441 抑制 PAI-1） |
| 辐射 → 花生四烯酸 → SRM ISG 化 → 肿瘤 sEV 分泌 → 肌肉精胺/eIF5A/I 型胶原 (+)【致病】 | + | B | 40541182 | 放疗荷瘤 | 内源 | — | 是（氯沙坦） |
| 砷暴露肌 EV → 再生后肌力与肌纤维直径 (−)【基因毒/氧化应激的概念平行】 | − | **C** | 37527016 | 3D 肌构建体 | — | — | 是（EV 转移复现效应） |

---

## 4. 辐射模型的缺口 / What is missing for radiation models

明确地说：**目前文献中不存在"在体辐射致骨骼肌损伤 + 外源性 EV 治疗 + 功能学终点"的研究**。缺口按优先级：

1. **没有在体辐射骨骼肌 EV 干预研究。** 唯一直接的辐射 + 肌源 EV 研究（PMID 40835994）全部为体外：受照大鼠 MPC、HUVEC 成管、微血管碎片凝胶。最接近在体的是放射性食管炎（PMID 41936013），但靶器官以平滑肌为主，且无肌力/CSA 终点。
2. **没有剂量-分割的对应关系。** 现有辐射肌肉模型（如 atlas 中 8.2 Gy × 3）与 EV 研究中的 10 Gy 单次体外照射无法直接换算；EV 干预的最佳给药时点（照射前预处理、照射后急性期、迟发纤维化期）完全未被研究。
3. **没有针对辐射纤维化期的 EV 研究。** 辐射肌损伤的核心表型是迟发性纤维化与 FAP 纤维化表型（见 atlas PMID 37671686、40316295）。现有 EV 抗纤维化证据全部来自 CTX、甘油、去神经、mdx 等非辐射模型（M4 模块），其 TGF-β/SMAD3、TGFBR3-KRT10-ERK-PPARγ 轴是否适用于辐射后 FAP 尚无任何数据。
4. **没有 EV 来源的辐射适配性数据。** PMID 40835994 的关键发现是**受照细胞的 EV 丧失治疗活性**（Rad-EV 无效），这意味着自体 EV 策略在受照组织中可能失败；但没有任何研究比较过 MSC-EV / 血小板 EV / 新生肌 EV 在受照肌肉中的疗效差异。
5. **没有辐射特异的货物图谱验证。** 40835994 报告的 20 个差异 miRNA 仅做了靶点预测（VEGF、PI3K-Akt、FoxO），无一做过功能验证；其中 miR-206、miR-499、miR-34a、miR-132 在非辐射模型中均有独立的成肌/血管证据，是最值得优先验证的候选。
6. **辐射背景下 EV 的双重角色未整合。** 已知受照肿瘤 EV 会主动损伤肌肉（PAI-1→STAT3→MuRF1；SRM→精胺→胶原），而治疗性 EV 的目标是逆转同一通路。目前没有研究在同一模型中同时考察这两条臂。
7. **缺大动物与功能学。** 全集中仅 2 项大动物研究（猪 PMID 36175423、兔 PMID 42012046/40628981/40917871/42776298），且均非辐射模型。
8. **没有 EV 与放疗的安全性交互数据**（EV 是否影响肿瘤放疗效果）。

### 可直接迁移的最强模块（供辐射研究设计参考）

按因果强度排序：M2 的 α-Klotho/EV 耗竭-回补设计（35665306）、M4 的 TGFBR3-FAP 条件敲除（41444423）、M3 的 AMPK/ULK1 双阻断（36708027）、M7 的 si-circRNA EV 失效设计（32550900、40896178）、M1 的巨噬细胞清除（33323007、37964317）、M8 的基因敲除-EV 挽救（39702274）。

---

## 5. 证据质量的总体判断 / Overall evidence quality

- 剂量报告率仅 31%，且单位混用（µg 总蛋白 vs 颗粒数），跨研究无法比较。只有 PMID 41829063 同时给出两者（100 µg ≈ 2.55×10⁹ 颗粒）。
- EV 鉴定（NTA + TEM + 标志物三件套齐全）在全文核查的 32 篇中约 2/3 达标；仅摘要可及的研究多数无法判断。
- 阴性/反向结果很少但很重要：PMID 36831224（I/R 中 EV 增加再灌注却降解肌结构蛋白）、PMID 41792160（失用期 EV 未保住肌量）、PMID 41509230（低氧预处理提高产量但降低效力）。做辐射研究时应预设这三类失败模式。

---

## 6. 文件 / Files

- `/workspace/work/ev-screen-v01/ev-studies-v01.json` — 132 条纳入研究的结构化提取
- `/workspace/work/ev-screen-v01/ev-excluded-v01.csv` — 526 条排除记录（pmid, title, reason）
- `/workspace/work/ev-screen-v01/ev-report-v01.md` — 本报告
- 支撑文件：`queries-v0.1.json`、`queries-rad-v0.1.json`（检索式与命中 ID）、`records-v0.1.json`（658 条题录与摘要）、`notes-v0.1.md`（逐条摘要筛查笔记）、`ft/`（32 篇全文文本）、`ftchar-v0.1.json`（全文自动提取的 EV 鉴定与分离方法）
