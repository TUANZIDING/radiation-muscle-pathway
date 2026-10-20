# v0.5：统一数据层、剂量层与四个骨架专题

v0.5 在 v0.4 母图—子图结构上做增量升级，**不修改任何已有关系的证据等级、解释边界或排除规则**（A08、A10、X01–X04 保持不变）。v0.4 构建产物已归档到 `history/v0.4/atlas-index.html`。

## 新增内容

| 模块 | 内容 |
|---|---|
| 剂量层 `atlas/src/dose.js` | 每条证据边记录本研究自身的照射方案（体内/体外、单次剂量、分次数），体内方案按 LQ 模型计算 EQD2（α/β = 3 Gy）。界面新增“剂量筛选”：全部 / 放疗相关（EQD2 ≤ 70 Gy）/ 高剂量·事故级 / 体外 / 分次未记录。无剂量的参照关系始终显示。 |
| 血管/内皮专题 | V01（CEUS 灌注，B 级，证据缺口）、V02–V03（照射 MPC 的 EV 促血管生成支持下降，A 级，体外）；毛细血管密度、内皮衰老、放疗剂量下体内血管结局为骨架节点。 |
| 免疫/巨噬细胞专题 | I00–I01 沿用 CellChat 推断（C 级，与 v0.3 A11 同源）；募集动态、极化/清除、配体中和/细胞特异敲除为骨架节点。 |
| 衰老/p21专题 | S01–S02 与 DNA 专题 D05/D06 同源；S03 持续 Cdkn1a 转录信号（A 级观察，无功能干预）；S04 FAP 衰老样状态；SASP 与 senolytic 为骨架节点。 |
| EV/miRNA专题 | E01–E02 照射 MPC-EV 的 miRNA 货物改变与救援差异（A 级，体外，PMID 40835994）；E03–E04 肿瘤 sEV-SRM 远程致肌无力（C 级，摘要级，PMID 40541182）；E05 FAP FSTL1（C 级，未同行评审学位论文，方向不一致）；新生/幼年肌肉 EV 修复为**假说骨架节点**，未画任何证据边。 |
| 新排除关系 | X05（Rad-EV miRNA→靶基因因果）、X06（FSTL1 = A09 未知抑制因子）、X07（新生/幼年 EV 修复辐射损伤）。 |
| 外部标识 | `externalIds` 只收录确定的 HGNC/MGI 基因符号、Cell Ontology（CL）和 Reactome 编号；不确定的一律留空，不猜测。 |
| 统一注册表与导出 | `node scripts/export-v05.mjs` 生成 `data/atlas-v0.5.json`（符合 `data/atlas-schema-v0.5.json`）、`exports/evidence-table-v0.5.csv`（每边一行）、`exports/atlas-v0.5.sbgn`（SBGN-ML Activity Flow）。 |
| CI | `.github/workflows/verify.yml` 在 push/PR 时构建、导出并运行 `verify-v05.mjs`。 |

## 骨架节点约定

`status:'scaffold'` 的节点用灰色虚框显示，检查器标“证据待补”。验证脚本强制骨架节点**不得连接任何证据边**；补到证据后，删除 `status` 字段并按 A/B/C 规则添加边。

## EQD2 说明

EQD2 = D × (d + α/β) / (2 + α/β)，α/β = 3 Gy。例：8.2 Gy × 3 ≈ 55.1 Gy；16 Gy × 1 ≈ 60.8 Gy；50 Gy × 1 ≈ 530 Gy。LQ 模型在单次 > ~10 Gy 时外推不可靠，数值仅用于区分“放疗相关”与“事故级”模型，不是剂量学结论。注册表未记录分次的体内方案（如后肢 30/40 Gy、大鼠 90 Gy）不计算 EQD2，归入“分次未记录”，待回原文补充。

## SBGN 选择 Activity Flow 的原因

图谱记录的是“活动之间的影响”（A 增加/关联 B），大多数边无法提供 Process Description 所需的反应物、产物和化学计量。C 级和参照边导出为 `unknown influence`，证据等级写在 arc notes 中。导出文件可导入 MINERVA、Newt 或 CellDesigner 进一步编辑。

## 验证

```sh
node build-v05.mjs
node scripts/export-v05.mjs
node verify-v05.mjs            # CHROMIUM_PATH=/usr/bin/chromium 可指定系统浏览器；SKIP_BROWSER=1 只跑数据检查
```

当前 52 项检查全部通过（见 `validation.json`），覆盖证据合同、骨架节点约束、EQD2 计算、注册表导出、四个新专题渲染、剂量筛选、中英文切换和 390×844 / 320×844 / 844×390 无横向溢出。`verify-v04.mjs` 针对 v0.4 的节点/导航计数，已由 v0.5 验证取代。

## 待办（下一步）

1. 回原文补 D05/D07/D10/E05 的分次信息与 E03/E04 剂量（Cell Metabolism 全文）。
2. 以 scMuscle 与人骨骼肌整合参考图谱统一细胞命名与 CL 标识。
3. 血管与免疫骨架节点的文献检索与逐箭头审计。
4. Zenodo 发布并在 README 填入 DOI。
