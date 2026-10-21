# Screen v07: Signalling pathways in ionizing-radiation-induced skeletal muscle injury missing from the atlas

Date: 2026-10-21 · Searches: PubMed E-utilities (esearch/efetch) · Full text: Europe PMC fullTextXML / NCBI PMC efetch
Files: `candidates-v07.json` (53 included), `excluded-v07.csv` (227 screened out), `queries.json` (exact query strings and returned PMIDs), `recs.json` (title, abstract, DOI and PMCID records), `ft/` (full texts used)

## 1. Bottom line
- **Strong enough to add an A-level module with edges:** (a) **Ca²⁺/sarcolemmal ion homeostasis** (new), (b) **CCL2–CCR2 chemokine / senescent-FAP SASP → macrophage** (new; it connects to the atlas's existing FAP-senescence and macrophage nodes), (c) **UPS E3 ligases (FBXO32/Atrogin-1, MuRF1)**. All three are association-level except the α2 Na,K-ATPase edge, where a pharmacological rescue (ouabain) was tested.
- **Add as B-level / conditional modules:** IGF-1/Akt/insulin signalling (directions conflict and depend on context), myostatin/activin (MSTN direction conflicts), PGC-1α/mitochondrial biogenesis (photon studies null, heavy-ion study ↓), Hedgehog/primary cilia (in vitro C2C12 only), CTGF/CCN2 (one abstract-level study).
- **Single strong edge worth adding:** TSP1–CD47 → apoptosis of irradiated muscle (A-causal: antisense morpholino).
- **Scaffold only:** NMJ/denervation (no irradiated-muscle NMJ data), NF-κB/STAT3 (only conditional or tumour-host evidence), c-Abl/MyoD differentiation checkpoint (B/C, directions conflict), BMP–SMAD1 (osteogenic/heterotopic-ossification context).
- **Nothing found:** cGAS-STING (0 hits), HIF-1α, YAP/Hippo (not measured; Piezo1 upstream only), β-catenin (beyond the existing Notch→Wnt), NLRP3/pyroptosis, ferroptosis, and PDGFRα beyond the existing FAP module.

## 2. PRISMA-style counts

| Query | Hits |
|---|---|
| Base query (all years) | 4,639 (not screened in full, by design) |
| M1 NMJ/denervation | 55 |
| M2 IGF-1/Akt/mTOR | 56 |
| M3 NF-κB/IL-6/STAT3/TNF | 60 |
| M4 UPS MuRF1/Atrogin-1/FoxO | 37 |
| M5 cGAS-STING | **0** |
| M6 myostatin/activin/SMAD2/3 | 13 |
| M7 PGC-1α/mitophagy/biogenesis | 25 |
| M8 HIF/YAP/β-catenin/CTGF/NLRP3/ferroptosis/PDGFRα | 17 |
| Module union (deduplicated) | **228** |
| Base 2023–2026 (sorted by date) | 482 (44 overlap with modules) |
| Supplementary A: base AND pathway/signalling/transcriptome, 1990–2022, non-ionizing terms removed | 152 (108 new) |
| Supplementary B: radiation + muscle/myoblast in title, 1990–2022, non-ionizing/clinical-imaging terms removed | 144 (118 new) |
| **Unique records title-screened** | **891** |
| Abstracts screened in detail | ≈95 |
| Full texts sought / read | 22 / 18 |
| Already in atlas and re-hit | 10 (skipped) |
| **Included** | **53** (A 15 · B 26 · C 12) |

Where the included records came from (they overlap): module queries 19, base 2023–26 12, Supplementary A 12, Supplementary B 30.
**Method caveat:** the module queries alone missed many direct-irradiation mechanistic papers (e.g., c-Abl, NO, Ca²⁺, CD47), which only the two supplementary sweeps caught. The pre-2023 base set outside these sweeps (~3,700 records) was **not** title-screened. That is a residual gap.
Module queries with more than 60 hits: none, so all module hits were title-screened and the plausible ones abstract-screened.

Records noted separately as space radiation, not included because the radiation effect was not isolated: 35065767, 37286567, 40581981, 41142195, 42059871. Vascular-only (feed arteries): 26930379, 26472865. Heavy-ion microbeam ultrastructure: 19218742.
Space-radiation studies that **were** included because a factorial design or in vitro setup isolated the radiation effect are flagged `space_flag`: 24131063, 28767703, 41565395, 42135336.

## 3. Per-module verdict

| Module | Key included PMIDs (grade) | Verdict |
|---|---|---|
| M1 NMJ/denervation | 33600281 (B: muscle-targeted RT → trigeminal ganglion ATF3/GAP-43 ↑) | **Scaffold only.** No study measured NMJ, AChR or denervation markers inside irradiated muscle. |
| M2 IGF-1/Akt/mTOR, insulin | 25177239 (A, null: Akt/ERK/p38/FOXO3A unchanged at 2 wk), 24131063 (A: ⁵⁶Fe → p-Akt/Erk/rpS6K ↑ d7; protons 0), 27562841 (B: 0.5 Gy → p-Akt S473 ↑, mTORC1 0), 40053841 (B: NHP, years later → insulin-receptor activation ↓, Akt2 sulfenylation ↑), 27650856 (B), 19280468 (B: IGF-1 rescues myotube formation after 2 Gy), 10224065 (B), 9025997 (C) | **B, conditional.** Acute or low-dose exposure activates Akt; years later insulin/Akt2 function is impaired; clinically relevant photon fractions at 2 wk show nothing. Add with sign depending on context and time. |
| M3 NF-κB/IL-6/STAT3/TNF | 24294183 (A: human myoblast IL-6 secretion ↓), 36142836 (A: serum IL-6 ↑), 32734547 (B: tissue IL-6 mRNA ↑; TNF/IL-1β 0), 31040340 (B: p-NF-κB ↑ only with HFD in irradiated mice), 29787429, 28017795, 39004143 (C), 36231065 (C: tumour exosomal PAI-1 → muscle p-STAT3 → MuRF1) | **Scaffold plus an IL-6 node at B.** IL-6 direction depends on compartment (myoblast ↓, tissue/serum ↑). No direct NF-κB/STAT3 measurement in irradiated versus control muscle. |
| M4 UPS | 27029502 (A: NHP FBXO32 ↑), 31665379 (A: human pectoralis FBXO32, cleaved caspase-3 ↑), 26504028 (B: MuRF1 ↑ d7–10), 27562841 (B: MuRF1 ↑); null: 25177239 (A: Atrogin-1, FOXO3A 0), 28767703 (A: low-dose space radiation, proteasome 0) | **Add an A-association module:** IR → FBXO32 (+, A); IR → MuRF1 (+, B). FoxO is not supported. Depends on dose and context; no causal test. |
| M5 cGAS-STING | none (0 hits) | **Nothing.** A real evidence gap. |
| M6 Myostatin/activin | 27029502 (A: ACVR2B mRNA ↑, MSTN mRNA ↓), 31665379 (A: GDF8 protein ↑, human) | **B, with conflict flag.** MSTN direction conflicts (mRNA vs protein, species). No myostatin-specific p-SMAD2/3. |
| M7 PGC-1α/mitochondria | 35414122 (A: mitochondrial damage and protein oxidation ↑; PGC-1α unchanged by IR), 25177239 (A, null PGC-1α/TFAM), 41565395 (B: ²⁸Si → PGC-1α, TFAM, Park2, LC3b mRNA ↓), 20636270 (B: 10 Gy → mtDNA transcripts and TFB2M ↓ within 1 h), 40053841 (B: fission/fusion ↑), 40280643, 21171096 (C) | **B.** Photon data show no change in PGC-1α; heavy ion lowers it. Suggested node: mitochondrial transcription (TFB2M/mt-mRNA ↓, B), placed under the atlas's coarse mitochondrial node. |
| M8 other | 26738903 (B: CTGF/TGF-β ↑, Ang-(1-7) reverses); 42135336 (A: Piezo1, but YAP not measured) | **CTGF: B node downstream of TGF-β1.** HIF-1α, YAP/Hippo, β-catenin, NLRP3/pyroptosis, ferroptosis, PDGFRα: **nothing** direct. |
| NEW Ca²⁺/ion homeostasis | 36142836 (A-causal: 10 Gy TBI → α2 Na,K-ATPase electrogenic function ↓ → sarcolemmal depolarization; ouabain prevents), 24131063 (A: [Ca²⁺]i ↑ transient; SR release ↓ with ⁵⁶Fe), 35414122 (A: resting cytosolic Ca²⁺ ↓ at 1 mo), 42135336 (A: protons → membrane rigidity ↑, Piezo1 Ca²⁺ response ↓, Piezo1 protein 0), 19961755 (C: Ca-Mg-ATPase activity ↓) | **Add an A module.** Four independent A studies. Ca²⁺ direction varies with time and particle, so model Ca²⁺ as "dysregulated", not with one sign. |
| NEW CCL2–CCR2 / SASP | 34997696 (A: paediatric 3×8.2 Gy → Ccr2/Ccl2/Ccl7/Ccl8, Tgfb1, Fn1 ↑, lifelong), 38115574 (A: 10 Gy-senescent FAPs → CCL2/OPN(SPP1) secretion ↑ → macrophage recruitment, which neutralisation attenuates, and M2 polarisation), 41681034 (C) | **Add an A module** linked to the existing FAP-senescence and macrophage TGF-β1 nodes. |
| NEW TSP1–CD47 | 20161613 (A-causal: CD47 morpholino → fewer apoptotic skeletal-muscle cells at 24 h after 25 Gy; perfusion preserved; less contracture) | **Add one A-causal edge** (single study). Links to the existing NO/microvascular nodes. |
| NEW Hedgehog/cilia | 34879217, 38253061 (B: C2C12 5 Gy; Shh/cyclopamine/sonidegib modulate post-IR myogenesis), 25808704 (B: IR → primary cilia ↑) | **B scaffold** (in vitro only). |
| NEW c-Abl checkpoint | 15799618 (B: IR blunts differentiation-induced c-Abl activity; DN-c-Abl/STI571 mimic), 12415271 (C: c-Abl → MyoD inhibition; IR use not explicit in abstract), 10757320 (B: MyoD/myogenin unchanged) | **Scaffold.** Mechanistic direction conflicts. |
| NEW BMP–SMAD1 | 12600237 (B: IR → BMP2–receptor binding and p-Smad1 ↓), 17928745 (C), 10757320 (B: no effect) | **Scaffold.** Relevant to heterotopic ossification, not myofibre injury. |
| Existing-module refinements | 21319985 (A-causal: IR → NO ↓ → SC proliferation ↓; SNP rescues, PTIO abolishes), 37993260 (A: BER/NHEJ/HR recruitment ↓ in myotubes), 37352202 (A: TGF-β1 ↑ in swallowing muscles), 27144672 (B: human RT → TGF-β1 ↑, MyoD ↓), 34841459, 30157899, 28701320, 28790924, 30806333, 41101385, 27452406 (B) | Add as supporting evidence to the existing DDR, ROS/NO and TGF-β/ECM modules. Suggested new edges: NO → MuSC proliferation (+, A-causal) and TGF-β1 ⊣ MyoD (B). |

## 4. Recommended new nodes and edges (sign; grade; PMIDs)
**A-level**
1. IR → α2 Na,K-ATPase electrogenic function (−) → sarcolemmal depolarization (+); ouabain ⊣ the loss (A-causal; 36142836)
2. IR → cytosolic Ca²⁺ homeostasis (dysregulated: acute ↑ with HZE, ↓ at 1 mo with photons) and SR Ca²⁺ release (−) (A; 24131063, 35414122)
3. IR (protons) → membrane rigidity (+) → Piezo1 activatability (−) (A; 42135336)
4. IR → Ccl2/Ccl7/Ccl8 and Ccr2 (+) (A; 34997696)
5. IR-senescent FAP → CCL2, OPN/SPP1 (+) → macrophage recruitment (+) and M2 polarisation (+) (A, partial causal; 38115574)
6. CD47 → apoptosis of irradiated muscle cells (+); CD47 ⊣ NO-dependent perfusion (A-causal; 20161613)
7. IR → FBXO32/Atrogin-1 (+) (A; 27029502, 31665379; null at 2 wk in 25177239)
8. IR → NO (−) → MuSC proliferation (−); NO donor rescues (A-causal; 21319985)
9. Myotube differentiation → DNA-repair (BER/NHEJ/HR) recruitment (−) (A; 37993260)

**B-level / conditional**
10. IR → MuRF1 (+) (26504028, 27562841)
11. IR (acute, low dose) → p-Akt S473 (+); IR (chronic, years) → insulin receptor/Akt2 function (−) (27562841, 24131063, 40053841, 27650856)
12. IGF-1 → myotube formation after IR (+, rescue) (19280468)
13. IR → ACVR2B (+); IR → MSTN/GDF8 (conflicting) (27029502, 31665379)
14. IR (heavy ion) → PGC-1α/TFAM/Park2/LC3b (−); IR (photon) → PGC-1α (0) (41565395, 35414122, 25177239)
15. IR → mitochondrial transcription/TFB2M (−) (20636270)
16. IR → IL-6: myoblast secretion ↓, tissue mRNA and serum ↑ (24294183, 32734547, 36142836)
17. TGF-β1 → CTGF/CCN2 (+) in irradiated muscle (26738903); TGF-β1 ⊣ MyoD (27144672)
18. Hedgehog (Shh/SMO) ⇄ post-IR myoblast proliferation vs differentiation (34879217, 38253061)

## 5. Honesty notes
- Every A grade has a full text read (18 papers). Papers that look A-eligible but whose full text I could not open (27562841, 40053841, 32734547, 34879217, 15799618) are graded **B** with `grade_note`.
- Doses and timepoints not stated in the abstract or the full text read are `null`. For 42135336 only the proton fluence is reported (no Gy figure extracted).
- 38115574: the antibody-neutralisation assay used "senescent FAP medium". The main text does not say whether those cells were X-ray- or etoposide-induced.
- 12415271 is included at C because ionizing radiation is named only in secondary sources, not in the abstract.
- The residual pre-2023 base records outside the supplementary sweeps were not screened (see §2).
