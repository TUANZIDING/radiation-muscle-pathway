# 肌肉信号图谱 v0.2：组合动态机制

在 v0.1 的 TGF-β/SMAD 促纤维化主轴上，增加 KEAP1–NRF2 抗氧化应答和 SMAD7 负反馈，共享细胞空间与辐射肌肉研究情境。采用 11 个可点选节点；不添加无依据的 NRF2 直接抑制 SMAD3 连线。

## 打开

直接用浏览器打开 `index.html`；单文件离线运行，无需网络依赖（访问外部文献需要联网）。本地服务：在父项目目录运行 `python3 -m http.server 8094 --bind 127.0.0.1`，访问 `http://127.0.0.1:8094/radiation-muscle-pathway/`。

首版与源码保存在 `history/v0.1/`，当前地址显示新版。

## 动态播放

- 上方「动态播放」和下方「播放完整机制」控制同一时间轴。
- 支持暂停/继续、从头重播、拖动进度、前后节点、0.5×/1×/1.5×/2×速度。
- 可播放组合全景，或单独探索 TGF-β/SMAD、NRF2、SMAD7 模块。
- 实际动画包括配体靠近受体、P 标记出现、R-SMAD/SMAD4 组装及入核、NRF2 向核内转位、反馈/多步骤通路的示意轨迹。暂停保持当前分子状态。
- 总讲解长度 71.5 秒（界面四舍五入显示 01:12），仅为教学节奏；不代表生物学事件耗时或三模块只能依次发生。
- 可旋转、缩放、点选分子，导出当前空间 PNG 或完整组合 SVG。无 WebGL 时可播放平面通路总览。

## 科学依据

- TGF-β/SMAD：Reactome R-HSA-2173789、2173793；KEGG hsa04350。
- SMAD7反馈：Reactome R-HSA-2106591、2173788。
- KEAP1/NRF2及核内事件：Reactome R-HSA-9755511、9759194。
- 辐射骨骼肌：PMID 33252888、36400201、37671686。其中 36400201 的本轮证据限于原始摘要。
- 详见 `docs/pathway-evidence.md` 和 `docs/extension-evidence-v0.2.md`，逐箭头审校及动画规则记录在后者。

实线表示经典机制，T 形端表示抑制，虚线表示多步骤概括或研究情境。NRF2显示为降解调控改变后的稳定积累及入核，不将KEAP1画成NRF2或让其简单释放全部旧NRF2。ARE是DNA序列。SMAD7重点表达受体竞争结合；SMURF相关受体周转留在文字说明，不画成无条件确定的单步直接泛素化。抗氧化应答不表示ROS清零或纤维化逆转。

主体为通用间质响应细胞的教学示意，不指定成熟肌纤维或某FAP亚群。经典机制不等同于人体辐射肌肉全链条验证。省略其他协同因子、潜伏配体活化、内吞/SARA、部分反馈及旁路。

## 文件与验证

- `src/content.js`：节点内容、来源与讲解顺序。
- `src/scene.js`：Three.js空间模型及分子动作。
- `src/diagram.js`：独立矢量组合图。
- `src/app.js`：播放状态、进度、交互及导出。
- `docs/v0.2/`：桌面/手机截图、空间PNG、组合SVG和验证结果。

```sh
node radiation-muscle-pathway/build.mjs
node radiation-muscle-pathway/verify.mjs
```

Chrome无头/软件WebGL检查包括离线初始化、11节点、实际分子动作、暂停/继续与结束、拖动、速度、模块筛选、旋转复位、网格点选、PNG/SVG导出、320/390/844像素布局及标签重叠检查、无WebGL回退。真实手机硬件未测试。

## 设计与许可

交互参考 [Human Atlas](https://github.com/TUANZIDING/human-atlas)，空间表达参考 [MCell](https://mcell.org/)。独立代码及图形，没有使用其解剖网格，没有运行MCell，也无生物动力学或药效预测。Three.js为MIT许可，见 `THIRD_PARTY_LICENSES.txt`。本次只更新本地小样。
