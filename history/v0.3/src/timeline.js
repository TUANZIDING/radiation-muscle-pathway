export function createTimeline(stages,onChange){
  const offsets=[];let total=0;for(const s of stages){offsets.push(total);total+=s.duration;}
  const state={status:'idle',elapsed:0,rate:1,stage:0,reduced:false};let frame=null,last=null;
  const stageAt=t=>Math.min(stages.length-1,offsets.findLastIndex(v=>v<=Math.min(t,total-1)));
  const notify=()=>onChange({...state,total,local:(state.elapsed-offsets[state.stage])/stages[state.stage].duration});
  const tick=now=>{if(state.status!=='playing')return;last??=now;state.elapsed=Math.min(total,state.elapsed+(now-last)*state.rate);last=now;state.stage=stageAt(state.elapsed);if(state.elapsed>=total){state.status='complete';frame=null;}else frame=requestAnimationFrame(tick);notify();};
  const play=()=>{if(state.status==='complete')state.elapsed=0;if(state.status==='idle')state.elapsed=0;state.status='playing';state.stage=stageAt(state.elapsed);last=null;frame=requestAnimationFrame(tick);notify();};
  const pause=()=>{if(state.status==='playing')state.status='paused';if(frame)cancelAnimationFrame(frame);frame=null;last=null;notify();};
  const replay=()=>{pause();state.elapsed=0;state.stage=0;state.status='playing';last=null;frame=requestAnimationFrame(tick);notify();};
  const seek=t=>{pause();state.elapsed=Math.max(0,Math.min(total,+t));state.stage=stageAt(state.elapsed);state.status=state.elapsed>=total?'complete':'paused';notify();};
  const go=i=>{pause();state.stage=Math.max(0,Math.min(stages.length-1,i));state.elapsed=offsets[state.stage];state.status='paused';notify();};
  const rate=v=>{state.rate=+v;last=null;notify();};
  const reduced=v=>{state.reduced=!!v;notify();};
  notify();return {state,total,offsets,play,pause,replay,seek,go,rate,reduced};
}
