# 肌肉信号图谱 v0.3：辐射损伤、修复障碍与纤维化

一个中文优先、可切换英文的交互式教学图谱。页面按六个阶段演示电离辐射后的MuSC直接损伤、FAP状态改变、免疫和基质通讯、成肌障碍、长期结局及可研究的修复窗口。设计参考 Human Atlas 的探索式布局，并以肌纤维—基底膜—间质的空间关系组织节点。

独立仓库：[TUANZIDING/radiation-muscle-pathway](https://github.com/TUANZIDING/radiation-muscle-pathway)。

## 打开与运行

`index.html` 是构建后的单文件页面，可离线打开。若从父目录启动本地服务：

```sh
python3 -m http.server 8094 --bind 127.0.0.1
```

访问 `http://127.0.0.1:8094/radiation-muscle-pathway/?v=0.3`。

## 交互

- 播放、暂停、继续、重播、前后阶段、拖动时间轴及0.5×–2×速度。
- 六阶段进度与当前阶段讲解；总长34秒，仅表示教学顺序。
- 点击节点查看相关关系；点击箭头查看文献、模型、剂量、时间点、证据等级和限制。
- 中文/英文切换保留当前播放位置、筛选和选择状态。
- 按全部关系、直接辐射、一般修复参照、推断与候选筛选。
- 组织图谱与通路网络两种视图；支持减少动画。
- 移动端按当前阶段调整图谱视窗，播放控件保持在图谱下方。

## 科学边界

A级直接辐射模型使用绿色实线；B级一般损伤、遗传模型或部分机制使用灰色条件线；C级CellChat推断和摘要级候选使用紫色虚线。动画只改变出现顺序和视觉强调，不改变线型与证据等级。

FAP条件培养基抑制成肌分化和融合，但具体分泌因子未知；页面不画“FAP分泌TGF-β1直接抑制MuSC”。p-SMAD3只在辐射后早期升高，晚期阶段淡出。WNT7A–PCP与经典Wnt/β-catenin分别呈现。Pax3只标记稀有储备MuSC亚群。SB-505124和SFN均标为动物药理研究，其中SFN仍是摘要级候选。

完整逐箭头审计见 [docs/pathway-evidence-v0.3.md](docs/pathway-evidence-v0.3.md)。v0.2源码和构建产物保存在 `history/v0.2/`。

## 文件

- `src/pathway-data.js`：节点、箭头、文献和模型参数的唯一数据源。
- `src/timeline.js`：播放、暂停、跳转和重播状态机。
- `src/diagram.js`：SVG组织图谱、线型和标记。
- `src/scene.js`：图谱交互、阶段状态、筛选和响应式视窗。
- `src/i18n.js`：中英文界面文案。
- `src/app.js`：界面状态、证据检查器和控件连接。
- `verify.mjs`：科学数据约束、交互和响应式浏览器验证。
- `docs/v0.3/`：验证报告和各尺寸截图。

## 构建与验证

```sh
node build.mjs
node verify.mjs
```

验证覆盖证据元数据完整性、文献引用解析、拒绝关系、p-SMAD3时相、Wnt分支分离、播放/暂停/重播、拖动、节点和箭头点击、语言切换、筛选、减少动画，以及320×844、390×844、844×390和1366×768布局。真实手机硬件触摸尚未测试。

## 设计与许可

交互参考 [Human Atlas](https://github.com/TUANZIDING/human-atlas)，空间表达参考 [MCell](https://mcell.org/)。本项目为独立SVG教学实现，不使用Human Atlas解剖网格，不运行MCell，也不进行生物动力学或药效预测。
