# v0.6 交互分子信号通路图

- 页面：`docs/pathway-v0.6.html`（同内容复制为 GitHub Pages 首页 `docs/index.html`），单文件、无外部依赖，可离线打开。
- 生成：`node scripts/build-pathway-v06.mjs`（模板 `scripts/pathway-template-v06.html`，数据 `data/atlas-v0.5.json`）。
- 验证：`CHROMIUM_PATH=/usr/bin/chromium node scripts/verify-pathway-v06.mjs`，结果写入 `validation.json`。
- 海报图：`hero-v0.6.png`，为页面 `?poster=1` 模式的截图，与交互图同源，不是图像模型生成的示意图。

## 合并规则

| 统一节点 | 来源专题节点 |
| --- | --- |
| 电离辐射 | radiation, dna-radiation, ve-radiation, im-radiation, sn-radiation, ev-radiation |
| ROS/RNS ↑ | ros, dna-ros |
| p53 | dna-p53, sn-p53 |
| p21 / Cdkn1a | dna-p21, sn-p21 |
| FAP 衰老样/促纤维化 | fap, sn-fap, im-fap |
| 巨噬细胞 TGF-β1 | macrophage, im-macrophage |
| MuSC 储备/扩增/分化 ↓ | muscFunction, dna-function |

同起点同终点的多条证据合并为一条连线，颜色取其中最高等级，但每条证据在检查器里按原编号、原等级分别显示。母图（overview）的粗粒度汇总边不重复绘制。

## 边界

- 连线方向是证据中报告的方向，不是反应速率或定量动力学。
- E03/E04（肿瘤 sEV-SRM）依赖肿瘤，无瘤对照阴性，图上节点名已标“肿瘤sEV”。
- EQD2（α/β = 3）仅作教学换算；体外和非辐射参照不计算。
