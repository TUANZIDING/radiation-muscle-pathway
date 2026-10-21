# EV 干预骨骼肌损伤 · 通路图 v0.2 更新报告（2026-10-21）

**结论先说**：v0.2 在 v0.1 的 132 篇基础上并入 9 篇 B 级在体研究，纳入总数 **141 篇（A 2 / B 120 / C 19）**。新增文献都不是辐射模型，**主要结论不变**：目前仍没有“在体辐射骨骼肌损伤 + 外源 EV 治疗”的研究；唯一直接研究辐射与肌源 EV 的仍是 PMID 40835994（Sci Rep 2025，大鼠 MPC，10 Gy，**体外**）。

- 在线页面：<https://tuanziding.github.io/radiation-muscle-pathway/ev-intervention-v0.2.html>（稳定别名 `ev-intervention.html` 与 v0.2 相同）
- v0.1 页面与筛查文件原样保留在 `docs/ev-intervention-v0.1.html`、`docs/ev-v0.1/`。

## 1. 并入了什么、为什么

只并入两类：①跨库补检（`docs/ev-v0.1/ev-gap-additions-v01.json`）中**同行评审**的 B 级 6 篇；②苏州大学 WebVPN 访问 Web of Science 补检的 B 级 3 篇。每篇都重新读了摘要（Europe PMC REST / Crossref / 出版社页面）后填写字段。

| 来源 | 文献 | 模型 | 图中位置 |
|---|---|---|---|
| 跨库补检 | PMID 40742422（Tissue Eng Regen Med 2025）miR-126/135b/210 工程 MSC-EV | 小鼠后肢缺血 | 血管新生泳道，EV3/EV4（并入已有连线） |
| 跨库补检 · **更正误排除** | PMID 32754983（EMBO Rep 2020）HDACi 处理 mdx/DMD FAP-EV，miR-206 | mdx 肌内 EV 移植 | FAP 泳道新链：EF7→EF8→EF9 |
| 跨库补检 | DOI 10.1016/j.cej.2025.164612 C2C12 外泌体 + CDDO dECM 水凝胶，Nrf2-线粒体轴 | 地塞米松肌萎缩 + Nrf2-KO | 细胞死亡/线粒体泳道 ED9 |
| 跨库补检 | DOI 10.1002/bmm2.70085 BMSC 外泌体（富 miR-206-3p）复合水凝胶 | 大鼠 CTX 急性损伤 | 抗纤维化 EF6（TGF-β1/Smad3/HDAC4↓） |
| 跨库补检 | DOI 10.1039/d5nj01545f 间质细胞 sEV | 严重肢体缺血 | 血管新生 EV3/EV4 |
| 跨库补检 | DOI 10.1186/s13287-026-05215-x iPSC 来源 Givi-MPC EV | 24–25 月龄小鼠肌少症 | MuSC 泳道新链 EM11 |
| WoS 补检 | PMID 33316945（Pharmaceuticals 2020）胚胎干细胞外泌体 ES-Exo | **化疗（多柔比星）肌毒性** | 细胞死亡泳道新节点 ED10（NLRP3/caspase-1 焦亡↓）、ED11（萎缩/纤维化↓、功能↑） |
| WoS 补检 | DOI 10.1016/j.cej.2025.163325 RvD1 装载脂肪组织 EV + dECM 水凝胶（**暂定 B**） | BaCl₂ / VML | 线粒体/ROS 泳道 ED9 |
| WoS 补检 | PMID 37507448（Sci Rep 2023）幼龄心球源细胞 EV（CDC-EV） | 自然老龄大鼠，多器官含骨骼肌 | MuSC 泳道新链 EM10 |

**未并入（仍只在 v0.1 报告中记录）**：跨库补检的 4 篇仅预印本 B 级、全部 C 级条目（含 UTSA 博士论文、会议摘要、ChiCTR 登记等）。

## 2. PMID 32754983 更正

v0.1 在标题/摘要筛选时以“无 EV 干预”排除该文。重读摘要确认：作者把 HDACi 处理的营养不良 FAP 来源 EV **肌内移植到 mdx 小鼠**，并用 antagomiR 逐一阻断，证明 **miR-206 是 EV 诱导 MuSC 扩增与再生所必需**。v0.2 已从排除表删除（`ev-excluded-v02.csv` 525 条，v0.1 为 526 条），纳入表注明更正。它与辐射 FAP 纤维化缺口直接相关，但同样未在辐射模型验证。

## 3. 图的变化

- **新节点（10 个）**：预测靶 VEGF/PI3K-Akt/FoxO（C）、年轻化 EV（CDC-EV / iPSC-MPC EV）、老龄肌量/肌力↑、纤维化↑（致病 EV）、HDACi-FAP-EV、EV miR-206↑、MuSC 激活/扩增↑、mdx 再生↑·纤维化/炎症↓、ES-Exo、化疗肌毒性↓。删除 1 个无证据连线的孤立节点（Wnt/β-catenin·ERK·PI3K/Akt，其内容已写在 EM5 标签里）。
- **新关系（12 条）**：EM9–EM11、EF6–EF9、EV3–EV4、ED9–ED11。其中 EM9 把 v0.1 没有连线的“M2 巨噬细胞 EV”节点接上已纳入的 PMID 34634686（miR-501→YY1）和 40529508（miR-24-3p）。
- **布局修正**：v0.1 有节点重叠、标签溢出、长连线穿过节点。v0.2 每条机制链占一行、泳道按节点自动包围；EA4（仅生信预测）改指向泳道内的“预测靶”节点，ET4 起点改为同泳道的 hucMSC/MSC-EV，EF5（致病 EV）改指向“纤维化↑”而不是“纤维化↓”。v0.1 中 7 个引用缺少文献卡片，v0.2 已从纳入表补齐。
- **页面统计由数据自动生成**：纳入 141 篇（A 2 / B 120 / C 19）· 图中文献 65 · 节点 61 · 证据关系 54（49 条连线）。仅有 DOI 的文献链接到 doi.org。

## 4. 检索来源与边界

- 跨库补检（Europe PMC 含预印本、Crossref、Semantic Scholar、Web 检索）+ 苏州大学 WebVPN 访问 Web of Science。
- **Scopus、Embase 未订阅，未检索**；**中文数据库按用户要求未检索**。
- 新增 9 篇只读了摘要（2 篇为出版社摘要），没有读全文；CEJ 163325 的 EV 来自脂肪组织块培养（不是 ADSC），并且与 RvD1、水凝胶组合，所以暂定 B。

## 5. 验证

`scripts/verify-ev-v02.mjs`（Playwright 真实点击）25/25 通过，结果写在 `docs/ev-v0.2/validation-v02.json`：页面错误为空；点击 miR-206、ES-Exo、非照射 MPC-EV、年轻化 EV 节点，检查器分别显示 PMID 32754983、33316945、40835994、37507448 和对应 DOI；“仅辐射(A)”筛选只保留 4 条 A 级连线；中英文切换正常；几何检查确认节点不重叠、连线不穿过其他节点、编号徽章不压节点、标题不溢出；390 px 移动端无横向溢出，可点击节点。

## 6. 文件

- 数据：`data/ev-intervention-v0.2.json`；纳入表 `docs/ev-v0.2/ev-studies-v02.json`（141）；排除表 `docs/ev-v0.2/ev-excluded-v02.csv`（525）。
- 构建：`scripts/build-ev-v02.mjs` + 模板 `scripts/pathway-template-ev-v02.html` → `docs/ev-intervention-v0.2.html`、`docs/ev-intervention.html`。
- 截图（由真实页面 Playwright 渲染，DPR 2）：`scripts/shots-ev-v02.mjs` → `hero-ev-v0.2.png`、`inspector-ev-v0.2.png`、`mobile-ev-v0.2.png`、`lane-ev-v0.2.png`。
