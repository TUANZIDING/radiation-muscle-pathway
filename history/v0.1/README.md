# 肌肉信号图谱 · TGF-β / SMAD v0.1

首个独立教学小样，聚焦辐射后骨骼肌纤维化中的经典 TGF-β/SMAD 信号。中文界面，包含可旋转/缩放的 3D 空间示意、六步点选讲解、分步播放、平面总览、来源弹窗及 PNG/SVG 导出。

## 打开

直接用 Chrome / Edge / Safari 打开本目录 `index.html`。页面已打包所有脚本，不需要联网或安装依赖；点击外部参考文献需要联网。不支持 WebGL 时自动切换平面总览。

可由项目根目录启动本地服务：`python3 -m http.server 8094 --bind 127.0.0.1`，访问 `http://127.0.0.1:8094/radiation-muscle-pathway/`。

## 内容与边界

- 经典通路：Reactome R-HSA-2173789、R-HSA-2173793；KEGG hsa04350。
- 直接辐射骨骼肌原始研究：PMID 33252888、37671686、36400201。
- 完整模型、DOI、核实程度与绘图规则见 `docs/pathway-evidence.md`。
- 实线表示经典机制（包含结合、磷酸化、组装与转位等不同过程，见节点说明）；虚线表示辐射情境联系或跨多个过程的归纳。
- 主体是通用间质响应细胞的局部示意，不是成熟肌纤维、特定FAP亚群或精确分子结构。经典人类通路与小鼠辐射肌肉实验分开标识。
- 省略潜伏 TGF-β 活化、受体内吞/SARA、负反馈及非 SMAD 支路。未开展 MCell 模拟，无实测反应速率、扩散系数或药效预测。

## 可交付文件

- `index.html`：完整独立离线页面。
- `docs/TGF-beta-SMAD-空间教学图.png`：空间示意图。
- `docs/TGF-beta-SMAD-教学通路.svg`：矢量总览图。
- `src/`：可编辑内容、样式与模型源码。
- `docs/validation.json`：浏览器交互检查记录；`docs/` 另附桌面及小屏截图。

## 重建与验证

利用父项目既有 three 0.159.0、esbuild、Playwright：

```sh
node radiation-muscle-pathway/build.mjs
node radiation-muscle-pathway/verify.mjs
```

验证在 Chrome 无头浏览器、软件 WebGL 中完成，覆盖离线加载、六步点选、旋转、播放/暂停、图层标签、来源弹窗、两类导出及 320/390/844 像素宽度。真实手机、多点触控和生物动力学未测试。

## 设计参考与许可

交互参考 Human Atlas（https://github.com/TUANZIDING/human-atlas）：空间旋转、点选、面板式说明；空间组织参考 MCell（https://mcell.org/）。本小样独立编写，未复制其代码或 BodyParts3D 网格，也未调用 MCell。Reactome/KEGG 为科学依据，图形独立重绘，不代表这些机构认证。

Three.js 为 MIT 许可，见 `THIRD_PARTY_LICENSES.txt`。本目录为新增本地小样，未发布至 GitHub 或公开站点。
