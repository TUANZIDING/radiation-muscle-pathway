# Radiation Muscle Atlas v0.4

This folder is the additive v0.4 atlas build. It does not replace the root v0.3 page.

Open `index.html#overview` after running a local server. The three routes are:

| Route | Role |
| --- | --- |
| `#overview` | Audited mother map with coarse-grained tissue relationships |
| `#musc-fap-ecm` | Existing MuSC–FAP–ECM evidence subgraph |
| `#dna-redox` | DNA-damage and redox subgraph with direct, reference and candidate layers |

`src/data.js` is the v0.4 graph registry. `src/diagram.js` renders nodes, evidence edges and navigation edges. `src/timeline.js` implements the per-view teaching timeline. `src/app.js` owns routing, inspector state, language switching and controls. `src/template.html` and `src/style.css` are bundled into `atlas/index.html` by `build-v04.mjs`.

Navigation edges carry N-level styling and are never counted as biological evidence. See `../v0.4/README.md` for the evidence contract and boundaries.
