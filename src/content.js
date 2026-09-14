// v0.3 keeps the scientific graph in pathway-data.js so every visible relation
// carries its own evidence context, model, dose, time point and limitation.
export {stages,nodes,edges,sources,layers} from './pathway-data.js';
export const evidenceContract={
  excluded:['A08: persistent p-SMAD3 at 56 d','A10: FAP-derived TGF-β1 directly suppresses MuSC'],
  teachingTimeOnly:true,
  noQuantitativeSimulation:true,
  defaultLanguage:'zh'
};
