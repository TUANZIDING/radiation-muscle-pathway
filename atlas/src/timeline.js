export function createTimeline(stages,onChange){
  const offsets=[];let total=0;for(const stage of stages){offsets.push(total);total+=stage.duration;}
  const state={status:'idle',elapsed:0,rate:1,stage:0,reduced:false};let frame=null,last=null;
  const stageAt=time=>{const t=Math.max(0,Math.min(total-1,Number(time)||0));let idx=0;for(let i=0;i<offsets.length;i+=1){if(offsets[i]<=t)idx=i;else break;}return idx;};
  const notify=()=>onChange({...state,total,local:(state.elapsed-offsets[state.stage])/stages[state.stage].duration});
  const tick=now=>{if(state.status!=='playing')return;last??=now;state.elapsed=Math.min(total,state.elapsed+(now-last)*state.rate);last=now;state.stage=state.elapsed>=total?stages.length-1:stageAt(state.elapsed);if(state.elapsed>=total){state.status='complete';frame=null;}else frame=requestAnimationFrame(tick);notify();};
  const play=()=>{if(state.status==='complete')state.elapsed=0;state.status='playing';state.stage=stageAt(state.elapsed);last=null;if(frame)cancelAnimationFrame(frame);frame=requestAnimationFrame(tick);notify();};
  const pause=()=>{if(state.status==='playing')state.status='paused';if(frame)cancelAnimationFrame(frame);frame=null;last=null;notify();};
  const replay=()=>{pause();state.elapsed=0;state.stage=0;state.status='playing';last=null;frame=requestAnimationFrame(tick);notify();};
  const seek=time=>{pause();state.elapsed=Math.max(0,Math.min(total,Number(time)||0));state.stage=state.elapsed>=total?stages.length-1:stageAt(state.elapsed);state.status=state.elapsed>=total?'complete':'paused';notify();};
  const go=index=>{pause();state.stage=Math.max(0,Math.min(stages.length-1,Number(index)||0));state.elapsed=offsets[state.stage];state.status='paused';notify();};
  const rate=value=>{state.rate=Math.max(.25,Math.min(4,Number(value)||1));last=null;notify();};
  const reduced=value=>{state.reduced=Boolean(value);notify();};
  const destroy=()=>{if(frame)cancelAnimationFrame(frame);frame=null;state.status='paused';};
  notify();return {state,total,offsets,play,pause,replay,seek,go,rate,reduced,destroy};
}
