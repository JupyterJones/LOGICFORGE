(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Xe={AND:{type:"AND",name:"AND Gate",code:"7408",category:"logic",description:"Outputs 1 only when both Input A and Input B are 1.",width:140,height:100,inputs:[{id:"in_a",label:"A"},{id:"in_b",label:"B"}],outputs:[{id:"out",label:"OUT"}],init(n={}){return{...n}},evaluate(n,t){const e=n.in_a||!1,i=n.in_b||!1;return{outputs:{out:e&&i},state:t}}},OR:{type:"OR",name:"OR Gate",code:"7432",category:"logic",description:"Outputs 1 if either Input A or Input B (or both) are 1.",width:140,height:100,inputs:[{id:"in_a",label:"A"},{id:"in_b",label:"B"}],outputs:[{id:"out",label:"OUT"}],init(n={}){return{...n}},evaluate(n,t){const e=n.in_a||!1,i=n.in_b||!1;return{outputs:{out:e||i},state:t}}},NOT:{type:"NOT",name:"NOT Inverter",code:"7404",category:"logic",description:"Inverts the signal: outputs 1 when input is 0, and 0 when input is 1.",width:130,height:80,inputs:[{id:"in",label:"IN"}],outputs:[{id:"out",label:"OUT"}],init(n={}){return{...n}},evaluate(n,t){return{outputs:{out:!(n.in||!1)},state:t}}},XOR:{type:"XOR",name:"XOR Gate",code:"7486",category:"logic",description:"Exclusive OR: outputs 1 if inputs are different, 0 if identical.",width:140,height:100,inputs:[{id:"in_a",label:"A"},{id:"in_b",label:"B"}],outputs:[{id:"out",label:"OUT"}],init(n={}){return{...n}},evaluate(n,t){const e=!!n.in_a,i=!!n.in_b;return{outputs:{out:e!==i},state:t}}},NAND:{type:"NAND",name:"NAND Gate",code:"7400",category:"logic",description:"Universal Gate: outputs 0 only when both inputs are 1; outputs 1 otherwise.",width:140,height:100,inputs:[{id:"in_a",label:"A"},{id:"in_b",label:"B"}],outputs:[{id:"out",label:"OUT"}],init(n={}){return{...n}},evaluate(n,t){const e=!!n.in_a,i=!!n.in_b;return{outputs:{out:!(e&&i)},state:t}}},NOR:{type:"NOR",name:"NOR Gate",code:"7402",category:"logic",description:"Universal Gate: outputs 1 only when both inputs are 0; outputs 0 otherwise.",width:140,height:100,inputs:[{id:"in_a",label:"A"},{id:"in_b",label:"B"}],outputs:[{id:"out",label:"OUT"}],init(n={}){return{...n}},evaluate(n,t){const e=!!n.in_a,i=!!n.in_b;return{outputs:{out:!(e||i)},state:t}}},RS_LATCH:{type:"RS_LATCH",name:"RS Flip-Flop",code:"74279",category:"memory",description:"Memory Unit: Set pin memorizes 1. Reset pin clears to 0.",width:150,height:110,inputs:[{id:"set",label:"SET"},{id:"reset",label:"RESET"}],outputs:[{id:"q",label:"Q"},{id:"q_bar",label:"!Q"}],init(n={}){return{q:n.q||!1}},evaluate(n,t){let e=t.q||!1;return n.reset?e=!1:n.set&&(e=!0),{outputs:{q:e,q_bar:!e},state:{q:e}}}},TIMER_555:{type:"TIMER_555",name:"555 Timer",code:"NE555",category:"timing",description:"Precision 555 Timer IC. Generates accurate time delays, pulses (Monostable), and square-wave oscillations (Astable).",width:176,height:154,isTimer555:!0,inputs:[{id:"trig",label:"TRIG"},{id:"rst",label:"RST"},{id:"cv",label:"CV"}],outputs:[{id:"out",label:"OUT"},{id:"disch",label:"DIS"}],init(n={}){return{mode:n.mode||"ASTABLE",timeBase:n.timeBase||60,timeLabel:n.timeLabel||"1.0s",counter:0,active:!1,out:!1,lastTrig:!1,manualTrig:!1,...n}},evaluate(n,t,e={}){const i=t.mode||"ASTABLE",s=t.timeBase||60;let r=t.counter!==void 0?t.counter:0,a=!!t.active,o=!1;const l=!!n.rst,c=!!n.cv,h=!!n.trig,u=!t.lastTrig&&h||!!t.manualTrig,d=e.pass===void 0||e.pass===0;return l?(r=0,a=!1,o=!1):c?o=!1:i==="ASTABLE"?(u?r=0:d&&(r=(r+1)%s),o=r<s/2):(u&&(a=!0,r=s),a&&r>0?(o=!0,d&&(r--,r===0&&(a=!1))):(o=!1,a=!1)),{outputs:{out:o,disch:!o},state:{...t,mode:i,timeBase:s,timeLabel:t.timeLabel||"1.0s",counter:r,active:a,out:o,lastTrig:h,manualTrig:!1}}}},DELAY:{type:"DELAY",name:"Delay Buffer",code:"555-D",category:"timing",description:"Delays signal transmission by a short buffer duration.",width:140,height:90,inputs:[{id:"in",label:"IN"}],outputs:[{id:"out",label:"OUT"}],init(n={}){return{queue:[!1,!1,!1]}},evaluate(n,t){const e=t.queue?[...t.queue]:[!1,!1,!1],i=!!n.in;return e.push(i),{outputs:{out:e.shift()},state:{queue:e}}}},CORTEX_AI:{type:"CORTEX_AI",name:"CORTEX-1 Autopilot",code:"AI-01",category:"ai",description:"Autonomous Mining & Navigation Co-processor. Seeks ore, clamps pincers, hauls to the Refinery, and smelts for credits.",width:184,height:195,inputs:[{id:"enable",label:"EN"},{id:"override",label:"OVR"},{id:"item_in",label:"ITEM"},{id:"seek_mode",label:"SEEK"}],outputs:[{id:"dir_n",label:"NAV_N"},{id:"dir_s",label:"NAV_S"},{id:"dir_e",label:"NAV_E"},{id:"dir_w",label:"NAV_W"},{id:"grab",label:"GRAB"},{id:"status",label:"ACTIVE"}],init(n={}){return{stepTimer:0,stuckTicks:0,reverseTicks:0,bypassTicks:0,bypassAxis:null,inhibitDir:null,lastX:null,lastZ:null,...n}},evaluate(n,t,e={}){if(!!n.override)return{outputs:{dir_n:!1,dir_s:!1,dir_e:!1,dir_w:!1,grab:!1,status:!1},state:t};const s=e.robot||null,r=e.target||null,a=e.items||[],o=e.heldItem||null,l=e.refinery||null,c=e.sensors||{},h=o!==null||!!n.item_in,u=!!n.seek_mode;let d=r,f=!1,g=!1,v=(t.stepTimer||0)+1,m=t.stuckTicks||0,p=t.reverseTicks||0,S=t.bypassTicks||0,E=t.bypassAxis||null,x=t.inhibitDir||null,D=t.lastX!==void 0?t.lastX:s?s.x:null,R=t.lastZ!==void 0?t.lastZ:s?s.z:null;if(u)d=r;else if(h)if((s&&s.y!==void 0?s.y:.4)<-5)d={x:18,z:14},f=!0;else{const I=l?l.position:{x:-18,z:-12};if(d=I,f=!0,s){const k=s.x,H=s.z-1.35,U=Math.hypot(k-I.x,H-I.z),X=Math.hypot(s.x-I.x,s.z-I.z);(U<3.2||X<2.9)&&(g=!0,f=!1)}}else{const T=s&&s.y!==void 0?s.y:.4;let L=null,I=1/0;for(const k of a)if(k.type==="raw_ore"&&k.state==="grounded"){const H=k.position||k.mesh&&k.mesh.position;if(!H)continue;const U=H.y!==void 0?H.y:k.baseY!==void 0?k.baseY:.28;if(Math.abs(U-T)>2.5)continue;const X=s?Math.hypot(s.x-H.x,s.z-H.z):10;X<I&&(I=X,L=H)}L?(d=L,(I<1.45||c.item_detect||n.item_in)&&(f=!0)):d=r}if(s&&D!==null&&R!==null&&v%15===0?(Math.hypot(s.x-D,s.z-R)<.08&&!g?(m+=15,m>=30&&(p=24,m=0,E==="dir_n"?E="dir_s":E==="dir_s"?E="dir_n":E==="dir_e"?E="dir_w":E==="dir_w"?E="dir_e":E=s.z>0?"dir_n":"dir_s",S=45)):m=0,D=s.x,R=s.z):s&&(D===null||R===null)&&(D=s.x,R=s.z),c.bumper_w){if(x="w",S<=0){const T=d?d.z:0,L=s?s.z:0;E=T<L-.2?"dir_n":T>L+.2?"dir_s":L>0?"dir_n":"dir_s",S=45}}else if(c.bumper_e){if(x="e",S<=0){const T=d?d.z:0,L=s?s.z:0;E=T<L-.2?"dir_n":T>L+.2?"dir_s":L>0?"dir_n":"dir_s",S=45}}else if(c.bumper_n){if(x="n",S<=0){const T=d?d.x:0,L=s?s.x:0;E=T<L-.2?"dir_w":T>L+.2?"dir_e":L>0?"dir_w":"dir_e",S=45}}else if(c.bumper_s){if(x="s",S<=0){const T=d?d.x:0,L=s?s.x:0;E=T<L-.2?"dir_w":T>L+.2?"dir_e":L>0?"dir_w":"dir_e",S=45}}else S<=0&&(x=null);let C=!1,w=!1,_=!1,y=!1;if(g)C=w=_=y=!1;else if(p>0)p--,x==="w"?_=!0:x==="e"?y=!0:x==="n"?w=!0:x==="s"?C=!0:w=!0;else if(S>0)S--,E==="dir_n"?C=!0:E==="dir_s"?w=!0:E==="dir_e"?_=!0:E==="dir_w"&&(y=!0),x==="w"&&(y=!1),x==="e"&&(_=!1),x==="n"&&(C=!1),x==="s"&&(w=!1);else if(s&&d){const T=d.x-s.x,L=d.z-s.z,I=Math.abs(T),k=Math.abs(L);I>.5&&(T>0&&x!=="e"?_=!0:T<0&&x!=="w"&&(y=!0)),k>.5&&(L>0&&x!=="s"?w=!0:L<0&&x!=="n"&&(C=!0)),!_&&!y&&!C&&!w&&(I>.2&&(T>0&&x!=="e"?_=!0:T<0&&x!=="w"&&(y=!0)),k>.2&&(L>0&&x!=="s"?w=!0:L<0&&x!=="n"&&(C=!0)))}return{outputs:{dir_n:C,dir_s:w,dir_e:_,dir_w:y,grab:f,status:!0},state:{stepTimer:v,stuckTicks:m,reverseTicks:p,bypassTicks:S,bypassAxis:E,inhibitDir:x,lastX:D,lastZ:R}}}},COUNTER_7SEG:{type:"COUNTER_7SEG",name:"7-Seg Counter",code:"74160-LED",category:"counter",description:"Emerald LED Counter with DEC (0-9) / HEX (0-F) mode toggle. Increments on CLK rising edge.",width:176,height:154,hasDisplay:!0,inputs:[{id:"clk",label:"CLK"},{id:"rst",label:"RST"},{id:"en",label:"EN"}],outputs:[{id:"q0",label:"Q0"},{id:"q1",label:"Q1"},{id:"q2",label:"Q2"},{id:"q3",label:"Q3"},{id:"carry",label:"TC"}],init(n={}){return{count:n.count||0,mode:n.mode||"DEC",lastClk:!1,carry:!1,...n}},evaluate(n,t){let e=t.count||0;const i=t.mode||"DEC",s=i==="HEX"?15:9,r=!!n.clk,a=!!n.rst,o=n.en===void 0?!0:!!n.en;let l=!1;return a?e=0:!t.lastClk&&r&&o&&(e>=s?(e=0,l=!0):e++),e>s&&(e=0),{outputs:{q0:(e&1)!==0,q1:(e&2)!==0,q2:(e&4)!==0,q3:(e&8)!==0,carry:l},state:{...t,count:e,mode:i,carry:l,lastClk:r}}}},STEPPER:{type:"STEPPER",name:"Step Sequencer",code:"4017-SEQ",category:"stepper",description:"4-Step Ring Sequencer. Advances 1-hot active output (S1 -> S2 -> S3 -> S4) on each CLK rising edge. RST returns to Step 1. Ideal for autonomous patrol loops.",width:176,height:154,isStepper:!0,inputs:[{id:"clk",label:"CLK"},{id:"rst",label:"RST"},{id:"dir",label:"DIR"},{id:"inh",label:"INH"}],outputs:[{id:"s1",label:"S1"},{id:"s2",label:"S2"},{id:"s3",label:"S3"},{id:"s4",label:"S4"},{id:"cycle",label:"CYC"}],init(n={}){return{step:n.step!==void 0?n.step:0,maxSteps:n.maxSteps||4,lastClk:!1,cycle:!1,manualStepTrigger:!1,...n}},evaluate(n,t){let e=t.step!==void 0?t.step:0;const i=t.maxSteps||4,s=!!n.clk,r=!!n.rst,a=!!n.dir,o=!!n.inh;let l=!1;return r?e=0:!t.lastClk&&s&&(o||(a?e<=0?(e=i-1,l=!0):e--:e>=i-1?(e=0,l=!0):e++)),t.manualStepTrigger&&(a?e=(e-1+i)%i:e=(e+1)%i,t.manualStepTrigger=!1),e>=i&&(e=0),{outputs:{s1:e===0,s2:e===1,s3:e===2,s4:e===3,cycle:l},state:{...t,step:e,maxSteps:i,cycle:l,lastClk:s}}}},BUS_2CH:{type:"BUS_2CH",name:"2-Ch Terminal Strip",code:"TB-2CH",category:"bus",description:"2-Channel Jumpered Terminal Strip. Distributes 1 input signal to 2 parallel outputs (1-to-2 Splitter Block).",width:172,height:122,channels:2,isTerminalStrip:!0,inputs:[{id:"in",label:"IN"}],outputs:[{id:"out_0",label:"OUT 1"},{id:"out_1",label:"OUT 2"}],evaluate(n){const t=!!(n.in||n.in_0);return{outputs:{out_0:t,out_1:t}}}},BUS_3CH:{type:"BUS_3CH",name:"3-Ch Terminal Strip",code:"TB-3CH",category:"bus",description:"3-Channel Jumpered Terminal Strip. Distributes 1 input signal to 3 parallel outputs (1-to-3 Splitter Block).",width:172,height:144,channels:3,isTerminalStrip:!0,inputs:[{id:"in",label:"IN"}],outputs:[{id:"out_0",label:"OUT 1"},{id:"out_1",label:"OUT 2"},{id:"out_2",label:"OUT 3"}],evaluate(n){const t=!!(n.in||n.in_0);return{outputs:{out_0:t,out_1:t,out_2:t}}}},BUS_4CH:{type:"BUS_4CH",name:"4-Ch Terminal Strip",code:"TB-4CH",category:"bus",description:"4-Channel Jumpered Terminal Strip. Distributes 1 input signal to 4 parallel outputs (1-to-4 Splitter Block).",width:172,height:166,channels:4,isTerminalStrip:!0,inputs:[{id:"in",label:"IN"}],outputs:[{id:"out_0",label:"OUT 1"},{id:"out_1",label:"OUT 2"},{id:"out_2",label:"OUT 3"},{id:"out_3",label:"OUT 4"}],evaluate(n){const t=!!(n.in||n.in_0);return{outputs:{out_0:t,out_1:t,out_2:t,out_3:t}}}},WAYPOINT_MEM:{type:"WAYPOINT_MEM",name:"Waypoint Register",code:"74374-MEM",category:"memory",description:"Waypoint Memory Register & Navigator. Latches coordinates on STORE pulse. Outputs directional vectors (NAV N/S/E/W) and MATCH signal when returned.",width:184,height:168,isWaypointMem:!0,inputs:[{id:"store",label:"STORE"},{id:"clr",label:"CLR"},{id:"en",label:"EN"}],outputs:[{id:"match",label:"MATCH"},{id:"latch",label:"HELD"},{id:"nav_n",label:"NAV_N"},{id:"nav_s",label:"NAV_S"},{id:"nav_e",label:"NAV_E"},{id:"nav_w",label:"NAV_W"}],init(n={}){return{target:n.target||null,lastStore:!1,...n}},evaluate(n,t,e={}){let i=t.target?{...t.target}:null;const s=!!n.store,r=!!n.clr,a=n.en===void 0?!0:!!n.en;r?i=null:!t.lastStore&&s&&e.robot&&(i={x:Math.round(e.robot.x*10)/10,z:Math.round(e.robot.z*10)/10});let o=!1,l=!1,c=!1,h=!1,u=!1;if(i&&e.robot){const d=i.x-e.robot.x,f=i.z-e.robot.z;Math.hypot(d,f)<1.6?o=!0:a&&(f<-1&&(l=!0),f>1&&(c=!0),d>1&&(h=!0),d<-1&&(u=!0))}return{outputs:{match:o,latch:i!==null,nav_n:l,nav_s:c,nav_e:h,nav_w:u},state:{...t,target:i,lastStore:s}}}},SHIFT_REG:{type:"SHIFT_REG",name:"Shift Register",code:"74194-SR",category:"register",description:"4-Bit Bidirectional Shift Register. Shifts serial data in on each CLK rising edge with parallel outputs (Q0..Q3) and Serial Out (SER).",width:186,height:156,isShiftReg:!0,inputs:[{id:"clk",label:"CLK"},{id:"data",label:"DATA"},{id:"rst",label:"RST"},{id:"dir",label:"DIR"},{id:"inh",label:"INH"}],outputs:[{id:"q0",label:"Q0"},{id:"q1",label:"Q1"},{id:"q2",label:"Q2"},{id:"q3",label:"Q3"},{id:"s_out",label:"SER"}],init(n={}){return{bits:n.bits?[...n.bits]:[0,0,0,0],dir:n.dir||"RIGHT",injectBit:n.injectBit!==void 0?!!n.injectBit:!0,manualClkTrigger:!1,lastClk:!1,serOut:!1,...n}},evaluate(n,t,e={}){let i=t.bits?[...t.bits]:[0,0,0,0];const s=n.dir!==void 0&&n.dir?"LEFT":t.dir||"RIGHT",r=!!n.rst,a=!!n.inh,o=!!n.clk,l=!!t.manualClkTrigger,c=!t.lastClk&&o||l,u=(e.connectedInputs?!!e.connectedInputs.data:!1)?!!n.data:!!t.injectBit;let d=!!t.serOut;return r?(i=[0,0,0,0],d=!1):c&&!a&&(s==="RIGHT"?(d=i[3]===1,i[3]=i[2],i[2]=i[1],i[1]=i[0],i[0]=u?1:0):(d=i[0]===1,i[0]=i[1],i[1]=i[2],i[2]=i[3],i[3]=u?1:0)),{outputs:{q0:i[0]===1,q1:i[1]===1,q2:i[2]===1,q3:i[3]===1,s_out:d},state:{...t,bits:i,dir:t.dir||"RIGHT",injectBit:t.injectBit!==void 0?!!t.injectBit:!0,manualClkTrigger:!1,lastClk:o,serOut:d}}}},NPN:{type:"NPN",name:"NPN Transistor",code:"2N3904",category:"discretes",description:"Silicon NPN Bipolar Junction Transistor. Positive voltage on Base (B) conducts current from Collector (C) to Emitter (E).",width:152,height:105,isDiscrete:!0,isNPN:!0,inputs:[{id:"c",label:"C"},{id:"b",label:"B"}],outputs:[{id:"e",label:"E"}],init(n={}){return{active:!1,...n}},evaluate(n,t,e={}){const i=!!n.b,r=(e.connectedInputs?!!e.connectedInputs.c:n.c!==void 0)?!!n.c:!0,a=i&&r;return{outputs:{e:a},state:{...t,active:a}}}},PNP:{type:"PNP",name:"PNP Transistor",code:"2N3906",category:"discretes",description:"Silicon PNP Bipolar Junction Transistor. Inverted logic: Ground/Low voltage on Base (B) conducts current from Emitter (E) to Collector (C).",width:152,height:105,isDiscrete:!0,isPNP:!0,inputs:[{id:"e",label:"E"},{id:"b",label:"B"}],outputs:[{id:"c",label:"C"}],init(n={}){return{active:!1,...n}},evaluate(n,t,e={}){const i=!!n.b,r=(e.connectedInputs?!!e.connectedInputs.e:n.e!==void 0)?!!n.e:!0,a=!i&&r;return{outputs:{c:a},state:{...t,active:a}}}},POTENTIOMETER:{type:"POTENTIOMETER",name:"10K Potentiometer",code:"TRIM-10K",category:"discretes",description:"Adjustable trimmer potentiometer. Turn the brass dial to scale signal duty-cycle and timing pulses.",width:148,height:115,isDiscrete:!0,isPot:!0,inputs:[{id:"in",label:"IN"}],outputs:[{id:"wiper",label:"WIPER"}],init(n={}){return{dial:n.dial!==void 0?n.dial:.5,stepCount:0,freq:680,...n}},evaluate(n,t,e={}){const s=(e.connectedInputs?!!e.connectedInputs.in:n.in!==void 0)?!!n.in:!0,r=t.dial!==void 0?t.dial:.5,a=(t.stepCount||0)+1;let o=!1;if(s)if(r>=.95)o=!0;else if(r<=.05)o=!1;else{const u=Math.max(2,Math.round(12*(1.05-r)));o=a%u<Math.max(1,Math.round(u*r))}const l=[180,240,320,440,560,680,800,960,1120,1320,1600],c=Math.min(l.length-1,Math.max(0,Math.floor(r*l.length))),h=l[c];return{outputs:{wiper:o},state:{...t,dial:r,stepCount:a,wiper:o,freq:h}}}},CAPACITOR:{type:"CAPACITOR",name:"10µF Capacitor",code:"E-CAP-10uF",category:"discretes",description:"Electrolytic timing and filter capacitor. Stores charge to absorb noise spikes and generate analog delay.",width:140,height:110,isDiscrete:!0,isCap:!0,inputs:[{id:"in",label:"+"}],outputs:[{id:"out",label:"-"}],init(n={}){return{charge:n.charge!==void 0?n.charge:0,...n}},evaluate(n,t){const e=!!n.in;let i=t.charge!==void 0?t.charge:0;e?i=Math.min(100,i+25):i=Math.max(0,i-14);const s=i>=40;return{outputs:{out:s},state:{...t,charge:i,out:s}}}},PIEZO_BUZZER:{type:"PIEZO_BUZZER",name:"Piezo Speaker",code:"SPK-8OHM",category:"discretes",description:"Acoustic audio transducer. Converts pulses, 555 clocks, and transistor oscillations into retro synth sound!",width:148,height:115,isDiscrete:!0,isSpeaker:!0,inputs:[{id:"sig",label:"SIG"}],outputs:[{id:"thru",label:"THRU"}],init(n={}){return{active:!1,pulseCount:0,freq:480,...n}},evaluate(n,t){const e=!!n.sig,i=(t.pulseCount||0)+(e?1:0);return{outputs:{thru:e},state:{...t,active:e,pulseCount:i}}}},POWER:{type:"POWER",name:"VCC Power",code:"PWR-5V",category:"discretes",description:"DC Power Rail (+5V VCC). Supplies continuous positive voltage (+5V) to energize circuits, pull-up resistors, and logic inputs. Click button to manually toggle power.",width:144,height:108,isDiscrete:!0,isPower:!0,inputs:[{id:"en",label:"EN"}],outputs:[{id:"vcc",label:"+5V"},{id:"vcc2",label:"+5V"}],init(n={}){return{enabled:n.enabled!==void 0?!!n.enabled:!0,voltage:5,...n}},evaluate(n,t,e={}){const s=(e.connectedInputs?!!e.connectedInputs.en:n.en!==void 0)?!!n.en:t.enabled!==void 0?!!t.enabled:!0;return{outputs:{vcc:s,vcc2:s},state:{...t,isLive:s,voltage:s?5:0}}}},GROUND:{type:"GROUND",name:"Ground (GND)",code:"GND-0V",category:"discretes",description:"Common Ground Reference (0V GND). Sinks current and provides zero-volt logic LOW reference for PNP bases, active-low resets, and circuit commons.",width:144,height:108,isDiscrete:!0,isGround:!0,inputs:[{id:"sink",label:"IN"}],outputs:[{id:"gnd",label:"GND"},{id:"gnd2",label:"GND"}],init(n={}){return{active:!0,voltage:0,...n}},evaluate(n,t){return{outputs:{gnd:!1,gnd2:!1},state:{...t,hasSink:!!n.sink}}}},LED:{type:"LED",name:"LED Indicator",code:"LED-5MM",category:"discretes",description:"5mm High-Brightness LED. Illuminates with radiant glow when forward-biased (Anode HIGH, Cathode LOW/GND). Click color pill to toggle LED color.",width:148,height:115,isDiscrete:!0,isLED:!0,inputs:[{id:"anode",label:"A"},{id:"cathode",label:"K"}],outputs:[{id:"thru",label:"THRU"}],init(n={}){return{lit:!1,color:n.color||"green",...n}},evaluate(n,t,e={}){const i=!!n.anode,r=(e.connectedInputs?!!e.connectedInputs.cathode:n.cathode!==void 0)?!!n.cathode:!1,a=i&&!r;return{outputs:{thru:a},state:{...t,lit:a}}}},RESISTOR_220:{type:"RESISTOR_220",name:"220Ω Resistor",code:"R-220",category:"discretes",description:"220 Ohm Carbon Film Resistor (Red-Red-Brown-Gold). Standard current-limiting resistor for 5V LED circuits. Click button to toggle between 220Ω and 330Ω.",width:148,height:105,isDiscrete:!0,isResistor:!0,defaultOhms:220,inputs:[{id:"in",label:"IN"}],outputs:[{id:"out",label:"OUT"}],init(n={}){return{ohms:n.ohms||220,active:!1,...n}},evaluate(n,t){const e=!!n.in;return{outputs:{out:e},state:{...t,active:e}}}},RESISTOR_330:{type:"RESISTOR_330",name:"330Ω Resistor",code:"R-330",category:"discretes",description:"330 Ohm Carbon Film Resistor (Orange-Orange-Brown-Gold). High-efficiency LED resistor and digital pull-down bias. Click button to toggle between 330Ω and 220Ω.",width:148,height:105,isDiscrete:!0,isResistor:!0,defaultOhms:330,inputs:[{id:"in",label:"IN"}],outputs:[{id:"out",label:"OUT"}],init(n={}){return{ohms:n.ohms||330,active:!1,...n}},evaluate(n,t){const e=!!n.in;return{outputs:{out:e},state:{...t,active:e}}}}};class Zn{constructor(){this.chips=new Map,this.wires=[],this.sensors={bumper_n:!1,bumper_s:!1,bumper_e:!1,bumper_w:!1,radar_ping:!1,clock_tick:!1,item_detect:!1},this.testInjectors={bumper_n:!1,bumper_s:!1,bumper_e:!1,bumper_w:!1,radar_ping:!1,clock_tick:!1,item_detect:!1},this.actuators={thrust_n:!1,thrust_s:!1,thrust_e:!1,thrust_w:!1,beacon_ping:!1,aux_light:!1,grabber:!1},this.isBenchMode=!1,this.tickCounter=0,this.nextChipId=1,this.nextWireId=1}addChip(t,e=200,i=150){const s=Xe[t];if(!s)return null;const r=`chip_${this.nextChipId++}`,a={};s.inputs.forEach(c=>a[c.id]=!1);const o={};s.outputs.forEach(c=>o[c.id]=!1);const l={id:r,type:t,name:s.name,code:s.code,x:e,y:i,width:s.width,height:s.height,inputs:a,outputs:o,state:s.init?s.init():{}};return this.chips.set(r,l),l}removeChip(t){this.wires=this.wires.filter(e=>!(e.from.type==="chip"&&e.from.id===t)&&!(e.to.type==="chip"&&e.to.id===t)),this.chips.delete(t)}addWire(t,e){if(this.wires.some(r=>r.from.type===t.type&&r.from.id===t.id&&r.from.pin===t.pin&&r.to.type===e.type&&r.to.id===e.id&&r.to.pin===e.pin))return null;const s={id:`wire_${this.nextWireId++}`,from:{...t},to:{...e},active:!1};return this.wires.push(s),s}removeWire(t){this.wires=this.wires.filter(e=>e.id!==t)}clear(){this.chips.clear(),this.wires=[],this.resetOutputs()}resetOutputs(){Object.keys(this.actuators).forEach(t=>this.actuators[t]=!1)}updateSensors(t){this.isBenchMode?Object.assign(this.sensors,this.testInjectors):Object.assign(this.sensors,t)}getPinValue(t){if(t.type==="sensor")return!!this.sensors[t.pin];if(t.type==="chip"){const e=this.chips.get(t.id);return e?!!e.outputs[t.pin]:!1}return!1}tick(t={}){this.tickCounter++,this.tickCounter%30===0&&(this.sensors.clock_tick=!this.sensors.clock_tick);for(let e=0;e<4;e++){for(const i of this.chips.values()){const s=Xe[i.type];s&&(i.connectedInputs=i.connectedInputs||{},s.inputs.forEach(r=>{i.inputs[r.id]=!1,i.connectedInputs[r.id]=!1}))}this.resetOutputs();for(const i of this.wires){const s=this.getPinValue(i.from);if(i.active=s,i.to.type==="actuator")s&&(this.actuators[i.to.pin]=!0);else if(i.to.type==="chip"){const r=this.chips.get(i.to.id);r&&(r.connectedInputs&&(r.connectedInputs[i.to.pin]=!0),s&&(r.inputs[i.to.pin]=!0))}}for(const i of this.chips.values()){const s=Xe[i.type];if(s){const r={...t,pass:e,tick:this.tickCounter,connectedInputs:i.connectedInputs},a=s.evaluate(i.inputs,i.state,r);i.outputs=a.outputs,a.state&&(i.state=a.state)}}}this.resetOutputs();for(const e of this.wires){const i=this.getPinValue(e.from);e.active=i,e.to.type==="actuator"&&i&&(this.actuators[e.to.pin]=!0)}return{actuators:{...this.actuators},sensors:{...this.sensors}}}}class Ll{constructor(){this.ctx=null,this.thrusterNode=null,this.thrusterGain=null,this.isMuted=!1}init(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.setupThrusterLoop()}this.ctx.state==="suspended"&&this.ctx.resume()}setupThrusterLoop(){if(!this.ctx)return;const t=this.ctx.sampleRate*2,e=this.ctx.createBuffer(1,t,this.ctx.sampleRate),i=e.getChannelData(0);let s=0;for(let o=0;o<t;o++){const l=Math.random()*2-1;i[o]=(s+.02*l)/1.02,s=i[o],i[o]*=3.5}const r=this.ctx.createBufferSource();r.buffer=e,r.loop=!0;const a=this.ctx.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(320,this.ctx.currentTime),this.thrusterGain=this.ctx.createGain(),this.thrusterGain.gain.setValueAtTime(0,this.ctx.currentTime),r.connect(a),a.connect(this.thrusterGain),this.thrusterGain.connect(this.ctx.destination),r.start()}setThrusterActive(t){if(!this.ctx||!this.thrusterGain||this.isMuted)return;const e=t?.12:0;this.thrusterGain.gain.setTargetAtTime(e,this.ctx.currentTime,.08)}playWirePlug(){if(!this.ctx||this.isMuted)return;const t=this.ctx.createOscillator(),e=this.ctx.createGain();t.type="sine";const i=this.ctx.currentTime;t.frequency.setValueAtTime(440,i),t.frequency.exponentialRampToValueAtTime(880,i+.06),e.gain.setValueAtTime(.2,i),e.gain.exponentialRampToValueAtTime(.001,i+.07),t.connect(e),e.connect(this.ctx.destination),t.start(i),t.stop(i+.08)}playWireCut(){if(!this.ctx||this.isMuted)return;const t=this.ctx.createOscillator(),e=this.ctx.createGain();t.type="sawtooth";const i=this.ctx.currentTime;t.frequency.setValueAtTime(600,i),t.frequency.exponentialRampToValueAtTime(200,i+.07),e.gain.setValueAtTime(.15,i),e.gain.exponentialRampToValueAtTime(.001,i+.08),t.connect(e),e.connect(this.ctx.destination),t.start(i),t.stop(i+.09)}playRelayClick(){if(!this.ctx||this.isMuted)return;const t=this.ctx.createOscillator(),e=this.ctx.createGain();t.type="triangle";const i=this.ctx.currentTime;t.frequency.setValueAtTime(1200,i),t.frequency.exponentialRampToValueAtTime(120,i+.02),e.gain.setValueAtTime(.18,i),e.gain.exponentialRampToValueAtTime(.001,i+.03),t.connect(e),e.connect(this.ctx.destination),t.start(i),t.stop(i+.04)}playBumperHit(){if(!this.ctx||this.isMuted)return;const t=this.ctx.createOscillator(),e=this.ctx.createGain();t.type="square";const i=this.ctx.currentTime;t.frequency.setValueAtTime(160,i),t.frequency.exponentialRampToValueAtTime(40,i+.12),e.gain.setValueAtTime(.25,i),e.gain.exponentialRampToValueAtTime(.001,i+.13),t.connect(e),e.connect(this.ctx.destination),t.start(i),t.stop(i+.14)}playChipDrop(){if(!this.ctx||this.isMuted)return;const t=this.ctx.createOscillator(),e=this.ctx.createGain();t.type="sine";const i=this.ctx.currentTime;t.frequency.setValueAtTime(320,i),t.frequency.exponentialRampToValueAtTime(640,i+.04),e.gain.setValueAtTime(.12,i),e.gain.exponentialRampToValueAtTime(.001,i+.05),t.connect(e),e.connect(this.ctx.destination),t.start(i),t.stop(i+.06)}playGoalChime(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime;[523.25,659.25,783.99,1046.5].forEach((i,s)=>{const r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type="sine",r.frequency.setValueAtTime(i,t+s*.08),a.gain.setValueAtTime(.18,t+s*.08),a.gain.exponentialRampToValueAtTime(.001,t+s*.08+.45),r.connect(a),a.connect(this.ctx.destination),r.start(t+s*.08),r.stop(t+s*.08+.5)})}playGrab(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(800,t),e.frequency.exponentialRampToValueAtTime(140,t+.04),i.gain.setValueAtTime(.28,t),i.gain.exponentialRampToValueAtTime(.001,t+.05),e.connect(i),i.connect(this.ctx.destination),e.start(t),e.stop(t+.06);const s=this.ctx.createOscillator(),r=this.ctx.createGain();s.type="square",s.frequency.setValueAtTime(220,t+.02),s.frequency.exponentialRampToValueAtTime(60,t+.08),r.gain.setValueAtTime(.2,t+.02),r.gain.exponentialRampToValueAtTime(.001,t+.09),s.connect(r),r.connect(this.ctx.destination),s.start(t+.02),s.stop(t+.1)}playRelease(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(350,t),e.frequency.exponentialRampToValueAtTime(700,t+.05),i.gain.setValueAtTime(.12,t),i.gain.exponentialRampToValueAtTime(.001,t+.06),e.connect(i),i.connect(this.ctx.destination),e.start(t),e.stop(t+.07)}playSocketDock(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(90,t),e.frequency.exponentialRampToValueAtTime(30,t+.3),i.gain.setValueAtTime(.4,t),i.gain.exponentialRampToValueAtTime(.001,t+.35),e.connect(i),i.connect(this.ctx.destination),e.start(t),e.stop(t+.36),[440,554.37,659.25,880,1108.73].forEach((r,a)=>{const o=this.ctx.createOscillator(),l=this.ctx.createGain();o.type="triangle",o.frequency.setValueAtTime(r,t+a*.06),l.gain.setValueAtTime(.16,t+a*.06),l.gain.exponentialRampToValueAtTime(.001,t+a*.06+.4),o.connect(l),l.connect(this.ctx.destination),o.start(t+a*.06),o.stop(t+a*.06+.42)})}playWinchMove(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(65,t),e.frequency.linearRampToValueAtTime(85,t+.3),i.gain.setValueAtTime(.18,t),i.gain.exponentialRampToValueAtTime(.001,t+.35),e.connect(i),i.connect(this.ctx.destination),e.start(t),e.stop(t+.36);const s=this.ctx.createOscillator(),r=this.ctx.createGain();s.type="sine",s.frequency.setValueAtTime(540,t),s.frequency.linearRampToValueAtTime(420,t+.25),r.gain.setValueAtTime(.06,t),r.gain.exponentialRampToValueAtTime(.001,t+.3),s.connect(r),r.connect(this.ctx.destination),s.start(t),s.stop(t+.32)}playElevatorArrive(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(140,t),e.frequency.exponentialRampToValueAtTime(35,t+.25),i.gain.setValueAtTime(.35,t),i.gain.exponentialRampToValueAtTime(.001,t+.3),e.connect(i),i.connect(this.ctx.destination),e.start(t),e.stop(t+.32),[783.99,1046.5].forEach((s,r)=>{const a=this.ctx.createOscillator(),o=this.ctx.createGain();a.type="sine",a.frequency.setValueAtTime(s,t+r*.12),o.gain.setValueAtTime(.18,t+r*.12),o.gain.exponentialRampToValueAtTime(.001,t+r*.12+.5),a.connect(o),o.connect(this.ctx.destination),a.start(t+r*.12),a.stop(t+r*.12+.52)})}playAccessDenied(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime;[130,125].forEach(e=>{const i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="sawtooth",i.frequency.setValueAtTime(e,t),s.gain.setValueAtTime(.15,t),s.gain.exponentialRampToValueAtTime(.001,t+.22),i.connect(s),s.connect(this.ctx.destination),i.start(t),i.stop(t+.24)})}playPowerUnlock(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime;[220,330,440,660,880,1320].forEach((i,s)=>{const r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type="sine",r.frequency.setValueAtTime(i,t+s*.05),a.gain.setValueAtTime(.14,t+s*.05),a.gain.exponentialRampToValueAtTime(.001,t+s*.05+.35),r.connect(a),a.connect(this.ctx.destination),r.start(t+s*.05),r.stop(t+s*.05+.38)})}playBuzzerPulse(t=480){if(this.isMuted)return;if(!this.ctx)try{this.init()}catch{}if(this.ctx&&this.ctx.state==="suspended")try{this.ctx.resume()}catch{}if(!this.ctx)return;const e=this.ctx.currentTime;if(this._lastBuzzerTime&&e-this._lastBuzzerTime<.035)return;this._lastBuzzerTime=e;const i=this.ctx.createOscillator(),s=this.ctx.createOscillator();this.ctx.createGain(),i.type="square",i.frequency.setValueAtTime(t,e),s.type="triangle",s.frequency.setValueAtTime(t*.5,e);const r=this.ctx.createGain();r.gain.setValueAtTime(.12,e),r.gain.exponentialRampToValueAtTime(.001,e+.055),i.connect(r),s.connect(r),r.connect(this.ctx.destination),i.start(e),s.start(e),i.stop(e+.06),s.stop(e+.06)}playRadarPing(t=1400){if(this.isMuted)return;if(!this.ctx)try{this.init()}catch{}if(this.ctx&&this.ctx.state==="suspended")try{this.ctx.resume()}catch{}if(!this.ctx)return;const e=this.ctx.currentTime;if(this._lastRadarPing&&e-this._lastRadarPing<.12)return;this._lastRadarPing=e;const i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(t,e),i.frequency.exponentialRampToValueAtTime(t*.72,e+.18),s.gain.setValueAtTime(.16,e),s.gain.exponentialRampToValueAtTime(.001,e+.22),i.connect(s),s.connect(this.ctx.destination),i.start(e),i.stop(e+.23)}playGlitchStatic(){if(this.isMuted)return;if(!this.ctx)try{this.init()}catch{}if(this.ctx&&this.ctx.state==="suspended")try{this.ctx.resume()}catch{}if(!this.ctx)return;const t=this.ctx.currentTime;if(!(this._lastGlitchStatic&&t-this._lastGlitchStatic<.2)){this._lastGlitchStatic=t;try{const e=Math.floor(this.ctx.sampleRate*.18),i=this.ctx.createBuffer(1,e,this.ctx.sampleRate),s=i.getChannelData(0);for(let l=0;l<e;l++)s[l]=(Math.random()*2-1)*.9;const r=this.ctx.createBufferSource();r.buffer=i;const a=this.ctx.createBiquadFilter();a.type="bandpass",a.frequency.setValueAtTime(850,t),a.Q.setValueAtTime(2.5,t);const o=this.ctx.createGain();o.gain.setValueAtTime(.22,t),o.gain.exponentialRampToValueAtTime(.005,t+.17),r.connect(a),a.connect(o),o.connect(this.ctx.destination),r.start(t)}catch{}}}}const tt=new Ll,Il={AND:{title:"7408 Quad 2-Input AND Gate",siliconType:"TTL Transistor-Transistor Logic",description:"An AND gate acts like two electronic switches connected in series. Current only reaches the output pin when switch A AND switch B are closed.",truthTable:[{a:0,b:0,out:0},{a:0,b:1,out:0},{a:1,b:0,out:0},{a:1,b:1,out:1}],svgDiagram:`
      <svg viewBox="0 0 260 120" class="schematic-svg">
        <!-- Inputs -->
        <line x1="20" y1="40" x2="70" y2="40" stroke="#38bdf8" stroke-width="3"/>
        <text x="10" y="44" fill="#94a3b8" font-size="12" font-family="monospace">A</text>
        <line x1="20" y1="80" x2="70" y2="80" stroke="#38bdf8" stroke-width="3"/>
        <text x="10" y="84" fill="#94a3b8" font-size="12" font-family="monospace">B</text>
        <!-- AND Gate Symbol -->
        <path d="M 70 20 L 120 20 A 40 40 0 0 1 120 100 L 70 100 Z" fill="#0f172a" stroke="#00f0ff" stroke-width="3"/>
        <!-- Output -->
        <line x1="160" y1="60" x2="220" y2="60" stroke="#00f0ff" stroke-width="3"/>
        <text x="230" y="64" fill="#00f0ff" font-size="12" font-family="monospace">OUT</text>
      </svg>
    `,didYouKnow:"AND gates form the basis of CPU address decoders and arithmetic logic units (ALUs)."},OR:{title:"7432 Quad 2-Input OR Gate",siliconType:"TTL Transistor-Transistor Logic",description:"An OR gate acts like two switches in parallel. If either switch A OR switch B is closed, electricity flows to the output.",truthTable:[{a:0,b:0,out:0},{a:0,b:1,out:1},{a:1,b:0,out:1},{a:1,b:1,out:1}],svgDiagram:`
      <svg viewBox="0 0 260 120" class="schematic-svg">
        <line x1="20" y1="40" x2="75" y2="40" stroke="#38bdf8" stroke-width="3"/>
        <text x="10" y="44" fill="#94a3b8" font-size="12" font-family="monospace">A</text>
        <line x1="20" y1="80" x2="75" y2="80" stroke="#38bdf8" stroke-width="3"/>
        <text x="10" y="84" fill="#94a3b8" font-size="12" font-family="monospace">B</text>
        <!-- OR Gate Symbol -->
        <path d="M 70 20 Q 95 60 70 100 Q 120 100 160 60 Q 120 20 70 20 Z" fill="#0f172a" stroke="#00f0ff" stroke-width="3"/>
        <line x1="160" y1="60" x2="220" y2="60" stroke="#00f0ff" stroke-width="3"/>
        <text x="230" y="64" fill="#00f0ff" font-size="12" font-family="monospace">OUT</text>
      </svg>
    `,didYouKnow:"In robotics, OR gates are ideal for combining multiple alarm triggers into a single emergency stop line."},NOT:{title:"7404 Hex Inverting Gate",siliconType:"Bipolar Inverter",description:"A NOT gate inverts the logic level. A high voltage (1) at the base of the internal transistor pulls the output to ground (0).",truthTable:[{a:0,out:1},{a:1,out:0}],svgDiagram:`
      <svg viewBox="0 0 260 120" class="schematic-svg">
        <line x1="20" y1="60" x2="80" y2="60" stroke="#38bdf8" stroke-width="3"/>
        <text x="10" y="64" fill="#94a3b8" font-size="12" font-family="monospace">IN</text>
        <!-- NOT Triangle & Bubble -->
        <polygon points="80,25 80,95 150,60" fill="#0f172a" stroke="#00f0ff" stroke-width="3"/>
        <circle cx="158" cy="60" r="7" fill="#0f172a" stroke="#00f0ff" stroke-width="3"/>
        <line x1="166" y1="60" x2="220" y2="60" stroke="#00f0ff" stroke-width="3"/>
        <text x="230" y="64" fill="#00f0ff" font-size="12" font-family="monospace">OUT</text>
      </svg>
    `,didYouKnow:"An odd number of inverters connected in a circle creates an astable multivibrator—the fundamental clock that drives CPUs!"},XOR:{title:"7486 Quad 2-Input Exclusive-OR",siliconType:"Complementary Logic",description:"Outputs 1 only when inputs are DIFFERENT. If both are 0 or both are 1, the output is 0. This is the heart of binary addition (half-adder)!",truthTable:[{a:0,b:0,out:0},{a:0,b:1,out:1},{a:1,b:0,out:1},{a:1,b:1,out:0}],svgDiagram:`
      <svg viewBox="0 0 260 120" class="schematic-svg">
        <line x1="20" y1="40" x2="65" y2="40" stroke="#38bdf8" stroke-width="3"/>
        <text x="10" y="44" fill="#94a3b8" font-size="12" font-family="monospace">A</text>
        <line x1="20" y1="80" x2="65" y2="80" stroke="#38bdf8" stroke-width="3"/>
        <text x="10" y="84" fill="#94a3b8" font-size="12" font-family="monospace">B</text>
        <!-- XOR double arc -->
        <path d="M 60 20 Q 80 60 60 100" fill="none" stroke="#00f0ff" stroke-width="3"/>
        <path d="M 72 20 Q 95 60 72 100 Q 120 100 160 60 Q 120 20 72 20 Z" fill="#0f172a" stroke="#00f0ff" stroke-width="3"/>
        <line x1="160" y1="60" x2="220" y2="60" stroke="#00f0ff" stroke-width="3"/>
        <text x="230" y="64" fill="#00f0ff" font-size="12" font-family="monospace">OUT</text>
      </svg>
    `,didYouKnow:"One XOR gate plus one AND gate creates a 1-bit binary adder. Chain 64 of them together, and you have a 64-bit CPU math unit!"},RS_LATCH:{title:"74279 Quad Set-Reset Latch",siliconType:"Bistable Multivibrator",description:`Two NOR gates wired with their outputs feeding each other's inputs create feedback loops. This allows the circuit to "remember" state even after the input pulse disappears.`,truthTable:[{a:"0 (No change)",b:"0 (No change)",out:"Previous Q"},{a:"1 (SET)",b:"0",out:"1 (Latched)"},{a:"0",b:"1 (RESET)",out:"0 (Cleared)"},{a:"1 (Invalid)",b:"1 (Invalid)",out:"Forbidden"}],svgDiagram:`
      <svg viewBox="0 0 280 130" class="schematic-svg">
        <!-- Top Gate -->
        <rect x="70" y="20" width="70" height="35" rx="6" fill="#0f172a" stroke="#f59e0b" stroke-width="2"/>
        <text x="88" y="42" fill="#f59e0b" font-size="11" font-family="monospace">NOR 1</text>
        <!-- Bottom Gate -->
        <rect x="70" y="75" width="70" height="35" rx="6" fill="#0f172a" stroke="#f59e0b" stroke-width="2"/>
        <text x="88" y="97" fill="#f59e0b" font-size="11" font-family="monospace">NOR 2</text>
        <!-- Cross feedback lines -->
        <path d="M 140 37 L 160 37 L 50 90 L 70 90" fill="none" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4 2"/>
        <path d="M 140 92 L 160 92 L 50 40 L 70 40" fill="none" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4 2"/>
        <line x1="160" y1="37" x2="220" y2="37" stroke="#00f0ff" stroke-width="2"/>
        <text x="230" y="41" fill="#00f0ff" font-size="12" font-family="monospace">Q</text>
        <line x1="160" y1="92" x2="220" y2="92" stroke="#00f0ff" stroke-width="2"/>
        <text x="230" y="96" fill="#00f0ff" font-size="12" font-family="monospace">!Q</text>
      </svg>
    `,didYouKnow:"SRAM (Static Random Access Memory) in modern GPUs and CPU caches uses miniature versions of this exact cross-coupled latch circuit."},CORTEX_AI:{title:"CORTEX-1 Heuristic Navigation Co-Processor",siliconType:"Hybrid Micro-Controller & State Machine",description:"Samples world telemetry, analyzes obstacles, and outputs directional steering pulses. It features a hard-wired OVERRIDE pin that completely decouples motor outputs for safety interlocks.",truthTable:[{a:"ENABLE=1, OVR=0",b:"Beacon East",out:"NAV_E = 1"},{a:"ENABLE=1, OVR=0",b:"Beacon South",out:"NAV_S = 1"},{a:"OVR=1 (Emergency)",b:"Any",out:"ALL OUTPUTS = 0"}],svgDiagram:`
      <svg viewBox="0 0 280 120" class="schematic-svg">
        <rect x="50" y="20" width="160" height="80" rx="8" fill="#081a2e" stroke="#0284c7" stroke-width="2"/>
        <text x="85" y="45" fill="#38bdf8" font-size="12" font-weight="bold" font-family="monospace">CORTEX-1</text>
        <text x="75" y="65" fill="#94a3b8" font-size="10" font-family="monospace">VECTOR ENGINE</text>
        <circle cx="190" cy="40" r="4" fill="#00f0ff"/>
        <circle cx="190" cy="60" r="4" fill="#00f0ff"/>
        <circle cx="190" cy="80" r="4" fill="#00f0ff"/>
      </svg>
    `,didYouKnow:"Real autonomous robots always isolate high-level software navigation from safety-critical bumper relays to prevent software crashes from causing physical damage."},NPN:{title:"2N3904 NPN Bipolar Junction Transistor",siliconType:"Silicon Epitaxial Planar BJT",description:"An active-HIGH semiconductor switch. Injecting positive voltage into the Base terminal (B) closes the conductive channel, allowing high current to flow from Collector (C) to Emitter (E).",truthTable:[{a:"BASE = 0",b:"COLLECTOR = Any",out:"EMITTER = 0 (Cutoff)"},{a:"BASE = 1",b:"COLLECTOR = 0",out:"EMITTER = 0 (No Rail)"},{a:"BASE = 1",b:"COLLECTOR = 1",out:"EMITTER = 1 (Saturation)"}],svgDiagram:`
      <svg viewBox="0 0 260 120" class="schematic-svg">
        <line x1="20" y1="60" x2="80" y2="60" stroke="#f59e0b" stroke-width="3"/>
        <text x="10" y="64" fill="#fbbf24" font-size="12" font-family="monospace">B</text>
        <line x1="80" y1="20" x2="80" y2="100" stroke="#f8fafc" stroke-width="5"/>
        <line x1="80" y1="35" x2="160" y2="15" stroke="#38bdf8" stroke-width="3"/>
        <line x1="160" y1="15" x2="220" y2="15" stroke="#38bdf8" stroke-width="3"/>
        <text x="230" y="19" fill="#38bdf8" font-size="12" font-family="monospace">C</text>
        <line x1="80" y1="85" x2="160" y2="105" stroke="#10b981" stroke-width="3"/>
        <line x1="160" y1="105" x2="220" y2="105" stroke="#10b981" stroke-width="3"/>
        <polygon points="135,93 160,105 133,109" fill="#10b981"/>
        <text x="230" y="109" fill="#10b981" font-size="12" font-family="monospace">E</text>
      </svg>
    `,didYouKnow:'The mnemonic for NPN is "Not Pointing iN"—the emitter schematic arrow points outward toward the negative rail.'},PNP:{title:"2N3906 PNP Bipolar Junction Transistor",siliconType:"Silicon Epitaxial Planar BJT",description:"An active-LOW inverted semiconductor switch. When Base (B) is pulled to Ground (0), the transistor enters saturation, conducting current from Emitter (E) to Collector (C).",truthTable:[{a:"BASE = 1",b:"EMITTER = Any",out:"COLLECTOR = 0 (Cutoff)"},{a:"BASE = 0",b:"EMITTER = 0",out:"COLLECTOR = 0 (No Rail)"},{a:"BASE = 0",b:"EMITTER = 1",out:"COLLECTOR = 1 (Saturation)"}],svgDiagram:`
      <svg viewBox="0 0 260 120" class="schematic-svg">
        <line x1="20" y1="60" x2="80" y2="60" stroke="#f59e0b" stroke-width="3"/>
        <text x="10" y="64" fill="#fbbf24" font-size="12" font-family="monospace">B</text>
        <line x1="80" y1="20" x2="80" y2="100" stroke="#f8fafc" stroke-width="5"/>
        <line x1="220" y1="15" x2="160" y2="15" stroke="#10b981" stroke-width="3"/>
        <line x1="160" y1="15" x2="80" y2="35" stroke="#10b981" stroke-width="3"/>
        <polygon points="120,28 85,34 110,42" fill="#10b981"/>
        <text x="230" y="19" fill="#10b981" font-size="12" font-family="monospace">E</text>
        <line x1="80" y1="85" x2="160" y2="105" stroke="#38bdf8" stroke-width="3"/>
        <line x1="160" y1="105" x2="220" y2="105" stroke="#38bdf8" stroke-width="3"/>
        <text x="230" y="109" fill="#38bdf8" font-size="12" font-family="monospace">C</text>
      </svg>
    `,didYouKnow:'The mnemonic for PNP is "Pointing iN Proudly"—the emitter schematic arrow points inward toward the base.'},POTENTIOMETER:{title:"TRIM-10K Precision Cermet Trimmer",siliconType:"Adjustable Resistive Voltage Divider",description:"A 10 kΩ resistive track with a mechanically adjustable wiper contact. Scales signal duty cycle and analog pulse division for tone and speed timing.",truthTable:[{a:"DIAL = 0%",b:"SIGNAL = 1",out:"WIPER = 0 (Grounded)"},{a:"DIAL = 50%",b:"SIGNAL = 1",out:"WIPER = 50% Duty Pulse"},{a:"DIAL = 100%",b:"SIGNAL = 1",out:"WIPER = 1 (Full Rail)"}],svgDiagram:`
      <svg viewBox="0 0 260 120" class="schematic-svg">
        <line x1="20" y1="60" x2="60" y2="60" stroke="#38bdf8" stroke-width="3"/>
        <path d="M 60 60 L 75 40 L 95 80 L 115 40 L 135 80 L 155 40 L 170 60" fill="none" stroke="#f59e0b" stroke-width="3"/>
        <line x1="170" y1="60" x2="210" y2="60" stroke="#38bdf8" stroke-width="3"/>
        <!-- Wiper arrow -->
        <line x1="115" y1="110" x2="115" y2="55" stroke="#00f0ff" stroke-width="3"/>
        <polygon points="110,65 115,50 120,65" fill="#00f0ff"/>
        <text x="110" y="120" fill="#00f0ff" font-size="10" font-family="monospace">WIPER</text>
      </svg>
    `,didYouKnow:"Trimmer potentiometers were essential in early analog electronics for calibration, radio tuning, and analog synthesizers."},CAPACITOR:{title:"10µF Electrolytic Radial Capacitor",siliconType:"Dielectric Charge Storage Device",description:"Stores electrical energy in an electrostatic field. Charges exponentially through series resistance and discharges when the source goes low, providing natural debounce and rise-delay.",truthTable:[{a:"CHARGE < 40%",b:"IN = 0",out:"OUT = 0 (Below Threshold)"},{a:"CHARGE ≥ 40%",b:"Any",out:"OUT = 1 (Conduction Active)"},{a:"MAX CHARGE",b:"IN = 1",out:"OUT = 1 (Fully Saturated)"}],svgDiagram:`
      <svg viewBox="0 0 260 120" class="schematic-svg">
        <line x1="20" y1="60" x2="110" y2="60" stroke="#a78bfa" stroke-width="3"/>
        <line x1="110" y1="30" x2="110" y2="90" stroke="#a78bfa" stroke-width="5"/>
        <path d="M 130 30 Q 120 60 130 90" fill="none" stroke="#64748b" stroke-width="5"/>
        <line x1="125" y1="60" x2="220" y2="60" stroke="#64748b" stroke-width="3"/>
        <text x="90" y="45" fill="#a78bfa" font-size="14" font-weight="bold">+</text>
        <text x="140" y="45" fill="#64748b" font-size="14" font-weight="bold">-</text>
      </svg>
    `,didYouKnow:"The curved plate in schematic diagrams indicates the negative (cathode) outer foil of an electrolytic capacitor."},PIEZO_BUZZER:{title:"8Ω Acoustic Piezoelectric Transducer",siliconType:"Piezoelectric Ceramic Crystal Audio Voice",description:"Converts electrical oscillating pulses directly into audible physical acoustic waves via the reverse piezoelectric effect. Drives authentic retro chiptune audio in real time!",truthTable:[{a:"SIGNAL = 0",b:"Any",out:"ACOUSTIC = SILENT"},{a:"SIGNAL = 1 (PULSED)",b:"Freq Select",out:"ACOUSTIC = 480Hz SYNTH TONE"}],svgDiagram:`
      <svg viewBox="0 0 260 120" class="schematic-svg">
        <line x1="20" y1="60" x2="80" y2="60" stroke="#f472b6" stroke-width="3"/>
        <rect x="80" y="35" width="25" height="50" fill="#1e293b" stroke="#db2777" stroke-width="2"/>
        <polygon points="105,45 155,20 155,100 105,75" fill="#0f172a" stroke="#db2777" stroke-width="2"/>
        <path d="M 170 45 A 25 25 0 0 1 170 75" fill="none" stroke="#f472b6" stroke-width="2.5"/>
        <path d="M 185 35 A 40 40 0 0 1 185 85" fill="none" stroke="#f472b6" stroke-width="2.5"/>
      </svg>
    `,didYouKnow:"The Stepped Tone Generator (Atari Punk Console) designed by Forrest Mims in 1980 used a 555 timer and piezo speaker to launch the DIY synth revolution."},POWER:{title:"DC Power Supply Rail (+5V VCC)",siliconType:"Linear Voltage Regulator & Power Bus",description:"Supplies continuous regulated positive DC potential (+5V) to energize logic circuits, bias transistors, and drive LED loads. Features manual ON/OFF toggle and dual output taps.",truthTable:[{a:"SWITCH = ON",b:"Any Load",out:"OUTPUT = +5.0V (HIGH / 1)"},{a:"SWITCH = OFF",b:"Any Load",out:"OUTPUT = 0.0V (LOW / 0)"}],svgDiagram:`
      <svg viewBox="0 0 260 120" class="schematic-svg">
        <line x1="40" y1="60" x2="90" y2="60" stroke="#ef4444" stroke-width="3"/>
        <line x1="90" y1="40" x2="90" y2="80" stroke="#ef4444" stroke-width="4"/>
        <line x1="110" y1="48" x2="110" y2="72" stroke="#64748b" stroke-width="4"/>
        <line x1="130" y1="40" x2="130" y2="80" stroke="#ef4444" stroke-width="4"/>
        <line x1="150" y1="48" x2="150" y2="72" stroke="#64748b" stroke-width="4"/>
        <line x1="150" y1="60" x2="220" y2="60" stroke="#ef4444" stroke-width="3"/>
        <text x="80" y="30" fill="#ef4444" font-size="14" font-weight="bold" font-family="monospace">+5V</text>
      </svg>
    `,didYouKnow:"TTL logic chips (Transistor-Transistor Logic) require a regulated 5.0V supply within ±5% tolerance (4.75V to 5.25V) to operate reliably."},GROUND:{title:"Common Ground Reference (0V GND)",siliconType:"Chassis & Signal Ground Plane",description:"Establishes the zero-volt reference node for all circuit potentials. Sinks current, drains charge, and provides reference bias for PNP transistors and active-low resets.",truthTable:[{a:"REFERENCE",b:"Any Net",out:"POTENTIAL = 0.0V (LOW / 0)"}],svgDiagram:`
      <svg viewBox="0 0 260 120" class="schematic-svg">
        <line x1="130" y1="30" x2="130" y2="60" stroke="#64748b" stroke-width="3"/>
        <line x1="90" y1="60" x2="170" y2="60" stroke="#64748b" stroke-width="3"/>
        <line x1="105" y1="72" x2="155" y2="72" stroke="#64748b" stroke-width="3"/>
        <line x1="120" y1="84" x2="140" y2="84" stroke="#64748b" stroke-width="3"/>
        <text x="110" y="24" fill="#94a3b8" font-size="12" font-family="monospace">GND</text>
      </svg>
    `,didYouKnow:"In high-speed PCB design, continuous copper ground planes prevent electromagnetic interference (EMI) and return-path signal crosstalk."},RESISTOR_220:{title:"220Ω Current-Limiting Resistor",siliconType:"Carbon Film Resistor (Red-Red-Brown-Gold)",description:"Impedes current flow according to Ohm’s Law (V = I × R). When placed in series with an LED at 5V, it limits forward current to ~15mA, providing optimal brightness without burning the LED.",truthTable:[{a:"SIGNAL = 0",b:"220Ω",out:"OUT = 0 (0V)"},{a:"SIGNAL = 1",b:"220Ω",out:"OUT = 1 (+5V / Current-Limited)"}],svgDiagram:`
      <svg viewBox="0 0 260 120" class="schematic-svg">
        <line x1="20" y1="60" x2="70" y2="60" stroke="#f59e0b" stroke-width="3"/>
        <path d="M 70 60 L 80 40 L 100 80 L 120 40 L 140 80 L 160 40 L 180 80 L 190 60" fill="none" stroke="#f59e0b" stroke-width="3"/>
        <line x1="190" y1="60" x2="240" y2="60" stroke="#f59e0b" stroke-width="3"/>
        <text x="110" y="30" fill="#f59e0b" font-size="12" font-weight="bold" font-family="monospace">220 Ω</text>
      </svg>
    `,didYouKnow:"The standard 4-band color code for 220Ω is: 1st band Red (2), 2nd band Red (2), 3rd band Brown (multiplier 10¹ = 220), 4th band Gold (±5% tolerance)."},RESISTOR_330:{title:"330Ω Current-Limiting Resistor",siliconType:"Carbon Film Resistor (Orange-Orange-Brown-Gold)",description:"A 330 Ohm resistor limits 5V LED current to ~10mA, ideal for power conservation and cooler operation while maintaining crisp visibility.",truthTable:[{a:"SIGNAL = 0",b:"330Ω",out:"OUT = 0 (0V)"},{a:"SIGNAL = 1",b:"330Ω",out:"OUT = 1 (+5V / Current-Limited)"}],svgDiagram:`
      <svg viewBox="0 0 260 120" class="schematic-svg">
        <line x1="20" y1="60" x2="70" y2="60" stroke="#f59e0b" stroke-width="3"/>
        <path d="M 70 60 L 80 40 L 100 80 L 120 40 L 140 80 L 160 40 L 180 80 L 190 60" fill="none" stroke="#f59e0b" stroke-width="3"/>
        <line x1="190" y1="60" x2="240" y2="60" stroke="#f59e0b" stroke-width="3"/>
        <text x="110" y="30" fill="#f59e0b" font-size="12" font-weight="bold" font-family="monospace">330 Ω</text>
      </svg>
    `,didYouKnow:"The color code for 330Ω is: Orange (3), Orange (3), Brown (multiplier 10¹ = 330), Gold (±5% tolerance)."},LED:{title:"5mm High-Brightness LED Indicator Lamp",siliconType:"Optoelectronic Gallium Nitride (GaN) / Phosphide (GaP) Diode",description:"A semiconductor diode that emits radiant light when forward-biased (positive on Anode, negative/ground on Cathode). Supports 5 switchable color modes (Green, Red, Blue, Amber, Purple).",truthTable:[{a:"ANODE = 0",b:"CATHODE = 0 (GND)",out:"LAMP = OFF (0V)"},{a:"ANODE = 1 (+5V)",b:"CATHODE = 0 (GND)",out:"LAMP = EMITTING PHOTONS (LIT)"},{a:"ANODE = 1 (+5V)",b:"CATHODE = 1 (+5V)",out:"LAMP = OFF (No Potential Drop)"},{a:"ANODE = 0",b:"CATHODE = 1 (+5V)",out:"LAMP = OFF (Reverse Biased)"}],svgDiagram:`
      <svg viewBox="0 0 260 120" class="schematic-svg">
        <line x1="30" y1="60" x2="90" y2="60" stroke="#22c55e" stroke-width="3"/>
        <polygon points="90,35 150,60 90,85" fill="#0f172a" stroke="#22c55e" stroke-width="3"/>
        <line x1="150" y1="35" x2="150" y2="85" stroke="#22c55e" stroke-width="3"/>
        <line x1="150" y1="60" x2="210" y2="60" stroke="#22c55e" stroke-width="3"/>
        <!-- Photon emission arrows -->
        <line x1="125" y1="35" x2="145" y2="15" stroke="#4ade80" stroke-width="2"/>
        <polygon points="145,15 137,17 143,23" fill="#4ade80"/>
        <line x1="140" y1="42" x2="160" y2="22" stroke="#4ade80" stroke-width="2"/>
        <polygon points="160,22 152,24 158,30" fill="#4ade80"/>
      </svg>
    `,didYouKnow:"Nick Holonyak Jr. invented the first practical visible-spectrum LED in 1962 while working at General Electric, predicting that LEDs would one day replace incandescent bulbs."}};class Pl{constructor(){this.modal=document.createElement("div"),this.modal.className="chip-inspector-modal",this.modal.innerHTML=`
      <div class="inspector-backdrop"></div>
      <div class="inspector-dialog">
        <header class="inspector-header">
          <div class="inspector-title-group">
            <span class="inspector-badge">SILICON SCHEMATIC</span>
            <h2 id="inspector-chip-title">CHIP NAME</h2>
          </div>
          <button class="inspector-close-btn" id="inspector-close">&times;</button>
        </header>
        <div class="inspector-body">
          <div class="inspector-diagram-pane" id="inspector-diagram"></div>
          <div class="inspector-details-pane">
            <p class="inspector-desc" id="inspector-desc"></p>
            <div class="truth-table-wrapper">
              <span class="table-label">LOGIC TRUTH TABLE</span>
              <table class="truth-table" id="inspector-table"></table>
            </div>
            <div class="inspector-callout">
              <span class="callout-tag">ENGINEERING NOTE:</span>
              <p id="inspector-fact"></p>
            </div>
          </div>
        </div>
      </div>
    `,document.body.appendChild(this.modal),this.modal.querySelector(".inspector-backdrop").addEventListener("click",()=>this.hide()),this.modal.querySelector("#inspector-close").addEventListener("click",()=>this.hide())}show(t){const e=Il[t];if(!e)return;this.modal.querySelector("#inspector-chip-title").textContent=e.title,this.modal.querySelector("#inspector-desc").textContent=e.description,this.modal.querySelector("#inspector-diagram").innerHTML=e.svgDiagram,this.modal.querySelector("#inspector-fact").textContent=e.didYouKnow;const i=this.modal.querySelector("#inspector-table");if(i.innerHTML="",e.truthTable&&e.truthTable.length>0){const s=e.truthTable[0].b===void 0,r=document.createElement("thead");r.innerHTML=s?"<tr><th>IN</th><th>OUT</th></tr>":"<tr><th>INPUT A</th><th>INPUT B</th><th>OUTPUT</th></tr>",i.appendChild(r);const a=document.createElement("tbody");e.truthTable.forEach(o=>{const l=document.createElement("tr");s?l.innerHTML=`<td>${o.a}</td><td class="out-cell ${o.out?"val-high":"val-low"}">${o.out}</td>`:l.innerHTML=`<td>${o.a}</td><td>${o.b}</td><td class="out-cell ${o.out==1?"val-high":"val-low"}">${o.out}</td>`,a.appendChild(l)}),i.appendChild(a)}this.modal.classList.add("active")}hide(){this.modal.classList.remove("active")}}class Dl{constructor(t,e){this.container=t,this.engine=e,this.inspector=new Pl,this.activeDragWire=null,this.draggingChip=null,this.zoom=1,this.minZoom=.45,this.maxZoom=2.5,this.pan={x:0,y:0},this.isPanning=!1,this.panStart={x:0,y:0,initialPanX:0,initialPanY:0},this.spacePressed=!1,this.isHoveringBoard=!1,this.sensorPinElements={},this.actuatorPinElements={},this.buildDOM(),this.bindEvents(),this.initZoomControls(),this.renderChips(),this.renderWires()}setEngine(t){this.engine=t,this.activeDragWire=null,this.draggingChip=null,this.renderChips(),this.renderWires(),this.updateVisualStates()}buildDOM(){this.container.innerHTML=`
      <div class="board-wrapper">
        <!-- SVG Wire Canvas Overlay -->
        <svg class="wires-layer" id="wires-layer">
          <defs>
            <filter id="wire-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="active-pulse" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#38bdf8" />
              <stop offset="50%" stop-color="#00ffff" />
              <stop offset="100%" stop-color="#38bdf8" />
            </linearGradient>
          </defs>
          <g id="wires-group"></g>
          <path id="temp-wire" class="temp-wire" d="" />
        </svg>

        <!-- Motherboard Header Strips -->
        <div class="sensor-bank header-bank">
          <div class="bank-title">SENSORS (IN)</div>
          <div class="pin-row" data-pin="bumper_n">
            <span class="pin-label">BUMP NORTH</span>
            <button class="test-btn" title="Test Pulse" data-test="bumper_n">TEST</button>
            <div class="pin-terminal out" data-type="sensor" data-pin="bumper_n">
              <span class="pin-dot"></span>
            </div>
          </div>
          <div class="pin-row" data-pin="bumper_s">
            <span class="pin-label">BUMP SOUTH</span>
            <button class="test-btn" title="Test Pulse" data-test="bumper_s">TEST</button>
            <div class="pin-terminal out" data-type="sensor" data-pin="bumper_s">
              <span class="pin-dot"></span>
            </div>
          </div>
          <div class="pin-row" data-pin="bumper_e">
            <span class="pin-label">BUMP EAST</span>
            <button class="test-btn" title="Test Pulse" data-test="bumper_e">TEST</button>
            <div class="pin-terminal out" data-type="sensor" data-pin="bumper_e">
              <span class="pin-dot"></span>
            </div>
          </div>
          <div class="pin-row" data-pin="bumper_w">
            <span class="pin-label">BUMP WEST</span>
            <button class="test-btn" title="Test Pulse" data-test="bumper_w">TEST</button>
            <div class="pin-terminal out" data-type="sensor" data-pin="bumper_w">
              <span class="pin-dot"></span>
            </div>
          </div>
          <div class="pin-row" data-pin="radar_ping">
            <span class="pin-label">RADAR BEACON</span>
            <button class="test-btn" title="Test Pulse" data-test="radar_ping">TEST</button>
            <div class="pin-terminal out" data-type="sensor" data-pin="radar_ping">
              <span class="pin-dot"></span>
            </div>
          </div>
          <div class="pin-row" data-pin="clock_tick">
            <span class="pin-label">1Hz CLOCK</span>
            <div class="pin-terminal out" data-type="sensor" data-pin="clock_tick">
              <span class="pin-dot"></span>
            </div>
          </div>
          <div class="pin-row" data-pin="item_detect">
            <span class="pin-label">ITEM CONTACT</span>
            <button class="test-btn" title="Test Pulse" data-test="item_detect">TEST</button>
            <div class="pin-terminal out" data-type="sensor" data-pin="item_detect">
              <span class="pin-dot"></span>
            </div>
          </div>
        </div>

        <!-- Chips Canvas Viewport (Inside Workbench) -->
        <div class="chips-viewport" id="chips-viewport">
          <div class="chips-area" id="chips-area"></div>
        </div>

        <!-- Actuators Header Strip -->
        <div class="actuator-bank header-bank">
          <div class="bank-title">ACTUATORS (OUT)</div>
          <div class="pin-row" data-pin="thrust_n">
            <div class="pin-terminal in" data-type="actuator" data-pin="thrust_n">
              <span class="pin-dot"></span>
            </div>
            <span class="pin-label">THRUST NORTH</span>
            <span class="led-indicator"></span>
          </div>
          <div class="pin-row" data-pin="thrust_s">
            <div class="pin-terminal in" data-type="actuator" data-pin="thrust_s">
              <span class="pin-dot"></span>
            </div>
            <span class="pin-label">THRUST SOUTH</span>
            <span class="led-indicator"></span>
          </div>
          <div class="pin-row" data-pin="thrust_e">
            <div class="pin-terminal in" data-type="actuator" data-pin="thrust_e">
              <span class="pin-dot"></span>
            </div>
            <span class="pin-label">THRUST EAST</span>
            <span class="led-indicator"></span>
          </div>
          <div class="pin-row" data-pin="thrust_w">
            <div class="pin-terminal in" data-type="actuator" data-pin="thrust_w">
              <span class="pin-dot"></span>
            </div>
            <span class="pin-label">THRUST WEST</span>
            <span class="led-indicator"></span>
          </div>
          <div class="pin-row" data-pin="beacon_ping">
            <div class="pin-terminal in" data-type="actuator" data-pin="beacon_ping">
              <span class="pin-dot"></span>
            </div>
            <span class="pin-label">RADIO PING</span>
            <span class="led-indicator"></span>
          </div>
          <div class="pin-row" data-pin="aux_light">
            <div class="pin-terminal in" data-type="actuator" data-pin="aux_light">
              <span class="pin-dot"></span>
            </div>
            <span class="pin-label">HEADLIGHT</span>
            <span class="led-indicator"></span>
          </div>
          <div class="pin-row" data-pin="grabber">
            <div class="pin-terminal in" data-type="actuator" data-pin="grabber">
              <span class="pin-dot"></span>
            </div>
            <span class="pin-label">GRABBER CLAW</span>
            <span class="led-indicator"></span>
          </div>
        </div>
      </div>
    `,this.boardWrapper=this.container.querySelector(".board-wrapper"),this.chipsViewport=this.container.querySelector("#chips-viewport"),this.chipsArea=this.container.querySelector("#chips-area"),this.wiresGroup=this.container.querySelector("#wires-group"),this.tempWirePath=this.container.querySelector("#temp-wire")}bindEvents(){this.boardWrapper.addEventListener("wheel",e=>{e.preventDefault();const i=this.chipsViewport.getBoundingClientRect(),s=e.clientX-i.left,r=e.clientY-i.top,a=e.deltaY<0?1.15:1/1.15,o=Math.min(this.maxZoom,Math.max(this.minZoom,this.zoom*a));Math.abs(o-this.zoom)<.001||(this.pan.x=s-(s-this.pan.x)*(o/this.zoom),this.pan.y=r-(r-this.pan.y)*(o/this.zoom),this.zoom=o,this.applyTransform(),this.updateZoomUI())},{passive:!1}),this.boardWrapper.addEventListener("mouseenter",()=>{this.isHoveringBoard=!0}),this.boardWrapper.addEventListener("mouseleave",()=>{this.isHoveringBoard=!1}),window.addEventListener("keydown",e=>{e.code==="Space"&&!this.spacePressed&&e.target.tagName!=="INPUT"&&e.target.tagName!=="TEXTAREA"&&this.isHoveringBoard&&(this.spacePressed=!0,this.chipsViewport.classList.add("space-pan-ready"))}),window.addEventListener("keyup",e=>{e.code==="Space"&&(this.spacePressed=!1,this.chipsViewport.classList.remove("space-pan-ready"))}),this.boardWrapper.addEventListener("mousemove",e=>this.onMouseMove(e)),window.addEventListener("mouseup",e=>this.onMouseUp(e)),this.boardWrapper.addEventListener("mousedown",e=>{const i=e.target.closest(".pin-terminal");if(i){this.onTerminalMouseDown(e,i);return}const s=e.target.closest(".chip-remove-btn");if(s){e.preventDefault(),e.stopPropagation();const p=s.closest(".chip-node");p&&p.dataset.id&&(this.engine.removeChip(p.dataset.id),tt.playWireCut(),this.renderChips(),this.renderWires());return}if(e.target.closest(".counter-mode-btn")){e.preventDefault(),e.stopPropagation();return}if(e.target.closest(".ts-ch-tab")){e.preventDefault(),e.stopPropagation();return}if(e.target.closest(".waypoint-store-btn, .waypoint-clr-btn")){e.preventDefault(),e.stopPropagation();return}if(e.target.closest(".stepper-manual-btn, .stepper-steps-btn")){e.preventDefault(),e.stopPropagation();return}if(e.target.closest(".timer-mode-btn, .timer-period-btn, .timer-trig-btn")){e.preventDefault(),e.stopPropagation();return}if(e.target.closest(".shift-dir-btn, .shift-data-btn, .shift-clk-btn")){e.preventDefault(),e.stopPropagation();return}if(e.target.closest(".pot-step-btn, .pot-knob")){e.preventDefault(),e.stopPropagation();return}if(e.target.closest(".spk-tone-btn")){e.preventDefault(),e.stopPropagation();return}const f=e.target.closest(".chip-header");if(f){const p=f.closest(".chip-node");this.onChipHeaderMouseDown(e,p);return}const g=e.button===1,v=this.spacePressed&&e.button===0,m=e.button===0&&!e.target.closest(".chip-node, .pin-terminal, .test-btn, .circuit-wire, .circuit-wire-hitbox, .header-bank");if(g||v||m){e.preventDefault(),this.isPanning=!0,this.panStart={x:e.clientX,y:e.clientY,initialPanX:this.pan.x,initialPanY:this.pan.y},this.chipsViewport.classList.add("is-panning");return}}),this.boardWrapper.addEventListener("click",e=>{const i=e.target.closest(".counter-mode-btn");if(i){e.preventDefault(),e.stopPropagation();const w=i.closest(".chip-node");if(w&&w.dataset.id){const _=this.engine.chips.get(w.dataset.id);_&&_.state&&(_.state.mode=_.state.mode==="DEC"?"HEX":"DEC",tt.playRelayClick(),this.updateVisualStates())}return}const s=e.target.closest(".ts-ch-tab");if(s){e.preventDefault(),e.stopPropagation();const w=s.closest(".chip-node"),_=parseInt(s.dataset.ch,10);w&&w.dataset.id&&_&&this.switchTerminalStripChannels(w.dataset.id,_);return}const r=e.target.closest(".waypoint-store-btn");if(r){e.preventDefault(),e.stopPropagation();const w=r.closest(".chip-node");if(w&&w.dataset.id){const _=this.engine.chips.get(w.dataset.id);_&&(_.inputs.store=!0,tt.playRelayClick(),this.updateVisualStates())}return}const a=e.target.closest(".waypoint-clr-btn");if(a){e.preventDefault(),e.stopPropagation();const w=a.closest(".chip-node");if(w&&w.dataset.id){const _=this.engine.chips.get(w.dataset.id);_&&_.state&&(_.state.target=null,tt.playWireCut(),this.updateVisualStates())}return}const o=e.target.closest(".stepper-manual-btn");if(o){e.preventDefault(),e.stopPropagation();const w=o.closest(".chip-node");if(w&&w.dataset.id){const _=this.engine.chips.get(w.dataset.id);_&&_.state&&(_.state.manualStepTrigger=!0,tt.playRelayClick(),this.engine.tick(),this.updateVisualStates())}return}const l=e.target.closest(".stepper-steps-btn");if(l){e.preventDefault(),e.stopPropagation();const w=l.closest(".chip-node");if(w&&w.dataset.id){const _=this.engine.chips.get(w.dataset.id);if(_&&_.state){const y=_.state.maxSteps||4,T=y===4?2:y===2?3:4;_.state.maxSteps=T,_.state.step>=T&&(_.state.step=0),tt.playRelayClick(),this.renderChips(),this.renderWires()}}return}const c=e.target.closest(".timer-mode-btn");if(c){e.preventDefault(),e.stopPropagation();const w=c.closest(".chip-node");if(w&&w.dataset.id){const _=this.engine.chips.get(w.dataset.id);_&&_.state&&(_.state.mode=_.state.mode==="ASTABLE"?"MONOSTABLE":"ASTABLE",_.state.counter=0,_.state.active=!1,_.state.out=!1,tt.playRelayClick(),this.renderChips(),this.renderWires())}return}const h=e.target.closest(".timer-period-btn");if(h){e.preventDefault(),e.stopPropagation();const w=h.closest(".chip-node");if(w&&w.dataset.id){const _=this.engine.chips.get(w.dataset.id);_&&_.state&&(_.state.timeLabel==="0.2s"?(_.state.timeLabel="0.5s",_.state.timeBase=30):_.state.timeLabel==="0.5s"?(_.state.timeLabel="1.0s",_.state.timeBase=60):_.state.timeLabel==="1.0s"?(_.state.timeLabel="2.0s",_.state.timeBase=120):(_.state.timeLabel="0.2s",_.state.timeBase=12),_.state.counter=0,tt.playRelayClick(),this.renderChips(),this.renderWires())}return}const u=e.target.closest(".timer-trig-btn");if(u){e.preventDefault(),e.stopPropagation();const w=u.closest(".chip-node");if(w&&w.dataset.id){const _=this.engine.chips.get(w.dataset.id);_&&_.state&&(_.state.manualTrig=!0,tt.playRelayClick(),this.engine.tick(),this.updateVisualStates())}return}const d=e.target.closest(".shift-dir-btn");if(d){e.preventDefault(),e.stopPropagation();const w=d.closest(".chip-node");if(w&&w.dataset.id){const _=this.engine.chips.get(w.dataset.id);_&&_.state&&(_.state.dir=_.state.dir==="RIGHT"?"LEFT":"RIGHT",tt.playRelayClick(),this.renderChips(),this.renderWires())}return}const f=e.target.closest(".shift-data-btn");if(f){e.preventDefault(),e.stopPropagation();const w=f.closest(".chip-node");if(w&&w.dataset.id){const _=this.engine.chips.get(w.dataset.id);_&&_.state&&(_.state.injectBit=!_.state.injectBit,tt.playRelayClick(),this.renderChips(),this.renderWires())}return}const g=e.target.closest(".shift-clk-btn");if(g){e.preventDefault(),e.stopPropagation();const w=g.closest(".chip-node");if(w&&w.dataset.id){const _=this.engine.chips.get(w.dataset.id);_&&_.state&&(_.state.manualClkTrigger=!0,tt.playRelayClick(),this.engine.tick(),this.updateVisualStates())}return}const v=[180,240,320,440,560,680,800,960,1120,1320,1600],m=e.target.closest(".pot-dec-btn");if(m){e.preventDefault(),e.stopPropagation();const w=m.closest(".chip-node");if(w&&w.dataset.id){const _=this.engine.chips.get(w.dataset.id);if(_&&_.state){_.state.dial=Math.max(0,Math.round(((_.state.dial!==void 0?_.state.dial:.5)-.1)*10)/10);const y=Math.min(v.length-1,Math.max(0,Math.floor(_.state.dial*v.length)));_.state.freq=v[y],tt.playRelayClick(),this.updateVisualStates()}}return}const p=e.target.closest(".pot-inc-btn");if(p){e.preventDefault(),e.stopPropagation();const w=p.closest(".chip-node");if(w&&w.dataset.id){const _=this.engine.chips.get(w.dataset.id);if(_&&_.state){_.state.dial=Math.min(1,Math.round(((_.state.dial!==void 0?_.state.dial:.5)+.1)*10)/10);const y=Math.min(v.length-1,Math.max(0,Math.floor(_.state.dial*v.length)));_.state.freq=v[y],tt.playRelayClick(),this.updateVisualStates()}}return}const S=e.target.closest(".pot-knob");if(S){e.preventDefault(),e.stopPropagation();const w=S.closest(".chip-node");if(w&&w.dataset.id){const _=this.engine.chips.get(w.dataset.id);if(_&&_.state){const y=[.1,.25,.5,.75,.9,1],T=_.state.dial!==void 0?_.state.dial:.5,L=y.find(k=>k>T+.05)??.1;_.state.dial=L;const I=Math.min(v.length-1,Math.max(0,Math.floor(_.state.dial*v.length)));_.state.freq=v[I],tt.playRelayClick(),this.updateVisualStates()}}return}const E=e.target.closest(".spk-tone-btn");if(E){e.preventDefault(),e.stopPropagation();const w=E.closest(".chip-node");if(w&&w.dataset.id){const _=this.engine.chips.get(w.dataset.id);if(_&&_.state){const y=[320,480,880,1200],T=_.state.freq||480,L=(y.indexOf(T)+1)%y.length;_.state.freq=y[L],tt.playRelayClick(),this.updateVisualStates()}}return}const x=e.target.closest(".power-toggle-btn");if(x){e.preventDefault(),e.stopPropagation();const w=x.closest(".chip-node");if(w&&w.dataset.id){const _=this.engine.chips.get(w.dataset.id);_&&_.state&&(_.state.enabled=_.state.enabled!==void 0?!_.state.enabled:!1,tt.playRelayClick(),this.engine.tick(),this.updateVisualStates())}return}const D=e.target.closest(".led-color-btn");if(D){e.preventDefault(),e.stopPropagation();const w=D.closest(".chip-node");if(w&&w.dataset.id){const _=this.engine.chips.get(w.dataset.id);if(_&&_.state){const y=["green","red","blue","amber","purple"],T=_.state.color||"green",L=(y.indexOf(T)+1)%y.length;_.state.color=y[L],tt.playRelayClick(),this.renderChips(),this.renderWires()}}return}const R=e.target.closest(".resistor-toggle-btn");if(R){e.preventDefault(),e.stopPropagation();const w=R.closest(".chip-node");if(w&&w.dataset.id){const _=this.engine.chips.get(w.dataset.id);_&&_.state&&(_.state.ohms=_.state.ohms===220?330:220,tt.playRelayClick(),this.renderChips(),this.renderWires())}return}const C=e.target.closest(".chip-remove-btn");if(C){e.preventDefault(),e.stopPropagation();const w=C.closest(".chip-node");w&&w.dataset.id&&(this.engine.removeChip(w.dataset.id),tt.playWireCut(),this.renderChips(),this.renderWires())}}),this.boardWrapper.querySelectorAll(".test-btn").forEach(e=>{const i=e.dataset.test;e.addEventListener("mousedown",r=>{r.stopPropagation(),this.engine.testInjectors[i]=!0,e.classList.add("active"),tt.playRelayClick()});const s=()=>{this.engine.testInjectors[i]=!1,e.classList.remove("active")};e.addEventListener("mouseup",s),e.addEventListener("mouseleave",s)});const t=e=>{const i=e.target.closest("[data-wire-id]");if(i){e.preventDefault(),e.stopPropagation();const s=i.dataset.wireId;this.engine.removeWire(s),tt.playWireCut(),this.renderWires()}};this.wiresGroup.addEventListener("click",t),this.wiresGroup.addEventListener("contextmenu",t),this.boardWrapper.addEventListener("contextmenu",e=>{const i=e.target.closest(".pin-terminal");if(i){e.preventDefault(),e.stopPropagation();const s=i.dataset.type,r=i.dataset.chipId||null,a=i.dataset.pin,o=this.engine.wires.length;this.engine.wires=this.engine.wires.filter(l=>!(l.from.type===s&&l.from.id===r&&l.from.pin===a)&&!(l.to.type===s&&l.to.id===r&&l.to.pin===a)),this.engine.wires.length<o&&(tt.playWireCut(),this.renderWires())}}),this.boardWrapper.addEventListener("dblclick",e=>{const i=e.target.closest(".chip-node");if(i&&i.dataset.id){const s=this.engine.chips.get(i.dataset.id);s&&(tt.playRelayClick(),this.inspector.show(s.type))}})}onTerminalMouseDown(t,e){if(t.stopPropagation(),t.preventDefault(),tt.init(),!e.classList.contains("out")){const u=e.dataset.type,d=e.dataset.chipId||null,f=e.dataset.pin;this.engine.wires.filter(v=>v.to.type===u&&v.to.id===d&&v.to.pin===f).length>0&&(this.engine.wires=this.engine.wires.filter(v=>!(v.to.type===u&&v.to.id===d&&v.to.pin===f)),tt.playWireCut(),this.renderWires());return}const s=e.getBoundingClientRect(),r=this.boardWrapper.getBoundingClientRect(),a=e.dataset.type,o=e.dataset.chipId||null,l=e.dataset.pin,c=s.left+s.width/2-r.left,h=s.top+s.height/2-r.top;this.activeDragWire={from:{type:a,id:o,pin:l,x:c,y:h},currentX:c,currentY:h},tt.playWirePlug()}onChipHeaderMouseDown(t,e){t.stopPropagation(),t.preventDefault();const i=e.dataset.id,s=this.engine.chips.get(i);s&&(this.draggingChip={id:i,startX:t.clientX,startY:t.clientY,initialChipX:s.x,initialChipY:s.y})}onMouseMove(t){if(this.isPanning){const r=t.clientX-this.panStart.x,a=t.clientY-this.panStart.y;this.pan.x=this.panStart.initialPanX+r,this.pan.y=this.panStart.initialPanY+a,this.applyTransform();return}const e=this.boardWrapper.getBoundingClientRect(),i=t.clientX-e.left,s=t.clientY-e.top;if(this.activeDragWire&&(this.activeDragWire.currentX=i,this.activeDragWire.currentY=s,this.updateTempWire()),this.draggingChip){const r=(t.clientX-this.draggingChip.startX)/this.zoom,a=(t.clientY-this.draggingChip.startY)/this.zoom,o=this.engine.chips.get(this.draggingChip.id);if(o){o.x=this.draggingChip.initialChipX+r,o.y=this.draggingChip.initialChipY+a;const l=this.chipsArea.querySelector(`[data-id="${o.id}"]`);l&&(l.style.left=`${o.x}px`,l.style.top=`${o.y}px`),this.renderWires()}}}onMouseUp(t){var e;if(this.isPanning&&(this.isPanning=!1,this.chipsViewport.classList.remove("is-panning")),this.draggingChip&&(this.draggingChip=null),this.activeDragWire){const i=(e=document.elementFromPoint(t.clientX,t.clientY))==null?void 0:e.closest(".pin-terminal");if(i&&i.classList.contains("in")){const s=i.dataset.type,r=i.dataset.chipId||null,a=i.dataset.pin;this.engine.addWire({type:this.activeDragWire.from.type,id:this.activeDragWire.from.id,pin:this.activeDragWire.from.pin},{type:s,id:r,pin:a})&&tt.playWirePlug()}this.activeDragWire=null,this.tempWirePath.setAttribute("d",""),this.renderWires()}}updateTempWire(){if(!this.activeDragWire)return;const{from:t,currentX:e,currentY:i}=this.activeDragWire,s=this.calculateBezier(t.x,t.y,e,i);this.tempWirePath.setAttribute("d",s)}calculateBezier(t,e,i,s){const r=Math.abs(i-t),a=Math.max(40,r*.5),o=t+a,l=e,c=i-a;return`M ${t} ${e} C ${o} ${l}, ${c} ${s}, ${i} ${s}`}getTerminalCoords(t,e,i,s){let r="";t==="sensor"?r=`.sensor-bank .pin-terminal[data-pin="${i}"]`:t==="actuator"?r=`.actuator-bank .pin-terminal[data-pin="${i}"]`:t==="chip"&&(r=`.chip-node[data-id="${e}"] .pin-terminal${s?".in":".out"}[data-pin="${i}"]`);const a=this.boardWrapper.querySelector(r);if(!a)return null;const o=a.getBoundingClientRect(),l=this.boardWrapper.getBoundingClientRect();return{x:o.left+o.width/2-l.left,y:o.top+o.height/2-l.top}}applyTransform(){this.chipsArea&&(this.chipsArea.style.transform=`translate(${this.pan.x}px, ${this.pan.y}px) scale(${this.zoom})`,this.chipsArea.style.transformOrigin="0 0",this.renderWires())}updateZoomUI(){const t=document.getElementById("mb-zoom-reset-btn");t&&(t.textContent=`${Math.round(this.zoom*100)}%`)}resetZoom(){this.zoom=1,this.pan.x=0,this.pan.y=0,this.applyTransform(),this.updateZoomUI(),tt.playRelayClick()}setZoom(t){const e=this.chipsViewport.getBoundingClientRect(),i=e.width/2,s=e.height/2,r=Math.min(this.maxZoom,Math.max(this.minZoom,t));Math.abs(r-this.zoom)<.001||(this.pan.x=i-(i-this.pan.x)*(r/this.zoom),this.pan.y=s-(s-this.pan.y)*(r/this.zoom),this.zoom=r,this.applyTransform(),this.updateZoomUI())}zoomIn(){const t=this.chipsViewport.getBoundingClientRect(),e=t.width/2,i=t.height/2,s=Math.min(this.maxZoom,this.zoom*1.2);Math.abs(s-this.zoom)<.001||(this.pan.x=e-(e-this.pan.x)*(s/this.zoom),this.pan.y=i-(i-this.pan.y)*(s/this.zoom),this.zoom=s,this.applyTransform(),this.updateZoomUI(),tt.playRelayClick())}zoomOut(){const t=this.chipsViewport.getBoundingClientRect(),e=t.width/2,i=t.height/2,s=Math.max(this.minZoom,this.zoom/1.2);Math.abs(s-this.zoom)<.001||(this.pan.x=e-(e-this.pan.x)*(s/this.zoom),this.pan.y=i-(i-this.pan.y)*(s/this.zoom),this.zoom=s,this.applyTransform(),this.updateZoomUI(),tt.playRelayClick())}initZoomControls(){const t=document.getElementById("mb-zoom-in-btn"),e=document.getElementById("mb-zoom-out-btn"),i=document.getElementById("mb-zoom-reset-btn"),s=document.getElementById("mb-zoom-fit-btn");t&&t.addEventListener("click",()=>this.zoomIn()),e&&e.addEventListener("click",()=>this.zoomOut()),i&&i.addEventListener("click",()=>this.resetZoom()),s&&s.addEventListener("click",()=>this.resetZoom())}switchTerminalStripChannels(t,e){const i=this.engine.chips.get(t);if(!i)return;const s=`BUS_${e}CH`,r=Xe[s];if(!r)return;i.type=s,i.name=r.name,i.code=r.code,i.height=r.height;const a={in:!!(i.inputs.in||i.inputs.in_0)},o={};for(let l=0;l<e;l++){const c=`out_${l}`;o[c]=!!i.outputs[c]}i.inputs=a,i.outputs=o,this.engine.wires=this.engine.wires.filter(l=>l.from.type==="chip"&&l.from.id===i.id?r.outputs.some(c=>c.id===l.from.pin):l.to.type==="chip"&&l.to.id===i.id?r.inputs.some(c=>c.id===l.to.pin):!0),tt.playRelayClick(),this.renderChips(),this.renderWires()}renderChips(){this.chipsArea.innerHTML="";for(const t of this.engine.chips.values()){const e=Xe[t.type],i=document.createElement("div");i.className=`chip-node chip-category-${e.category}`,i.dataset.id=t.id,i.style.left=`${t.x}px`,i.style.top=`${t.y}px`,i.style.width=`${t.width}px`;const s=e.inputs.map(o=>`
        <div class="chip-pin-row in-row">
          <div class="pin-terminal in" data-type="chip" data-chip-id="${t.id}" data-pin="${o.id}">
            <span class="pin-dot"></span>
          </div>
          <span class="pin-tag">${o.label}</span>
        </div>
      `).join(""),r=e.outputs.map(o=>`
        <div class="chip-pin-row out-row">
          <span class="pin-tag">${o.label}</span>
          <div class="pin-terminal out" data-type="chip" data-chip-id="${t.id}" data-pin="${o.id}">
            <span class="pin-dot"></span>
          </div>
        </div>
      `).join("");let a=`
        <div class="chip-ic-mark">
          <div class="ic-notch"></div>
          <div class="ic-dots"></div>
        </div>
      `;if(e.hasDisplay){const o=t.state&&t.state.mode||"DEC";a=`
          <div class="counter-display-module">
            <button class="counter-mode-btn" data-mode="${o}" title="Toggle Decade (0-9) / Hexadecimal (0-F) Mode">${o}</button>
            <div class="counter-screen">
              <span class="counter-digit">0</span>
            </div>
            <div class="counter-bits">
              <span class="c-bit" data-bit="8" title="Bit 3 (8)">8</span>
              <span class="c-bit" data-bit="4" title="Bit 2 (4)">4</span>
              <span class="c-bit" data-bit="2" title="Bit 1 (2)">2</span>
              <span class="c-bit" data-bit="1" title="Bit 0 (1)">1</span>
            </div>
          </div>
        `}else if(e.isTerminalStrip){const o=e.channels||4;let l="";for(let c=0;c<o;c++)l+=`
            <div class="ts-row" data-ch="${c}">
              <span class="ts-screw" title="Terminal Screw #${c+1}">⨁</span>
              <span class="ts-trace-lead"></span>
              <span class="ts-led" data-ch="out_${c}"></span>
              <span class="ts-ch-num">${c+1}</span>
            </div>
          `;a=`
          <div class="ts-display-module">
            <div class="ts-channel-tabs">
              <button class="ts-ch-tab ${o===2?"active":""}" data-ch="2" title="Switch to 2-Channel Splitter (1 IN → 2 OUT)">2-CH</button>
              <button class="ts-ch-tab ${o===3?"active":""}" data-ch="3" title="Switch to 3-Channel Splitter (1 IN → 3 OUT)">3-CH</button>
              <button class="ts-ch-tab ${o===4?"active":""}" data-ch="4" title="Switch to 4-Channel Splitter (1 IN → 4 OUT)">4-CH</button>
            </div>
            <div class="ts-barrier-block channels-${o}">
              <div class="ts-jumper-comb" title="Soldered Common Bus Jumper Bar">
                <span class="ts-jumper-spine"></span>
              </div>
              <div class="ts-rows-col">
                ${l}
              </div>
            </div>
          </div>
        `}else if(e.isWaypointMem)a=`
          <div class="waypoint-mem-module">
            <div class="waypoint-header-row">
              <button class="waypoint-store-btn" data-chip-id="${t.id}" title="Latch current robot coordinates">STORE</button>
              <button class="waypoint-clr-btn" data-chip-id="${t.id}" title="Clear waypoint">CLR</button>
            </div>
            <div class="waypoint-screen">
              <span class="waypoint-coords">MEM: --</span>
            </div>
            <div class="waypoint-status-bar">
              <span class="waypoint-match-led"></span>
              <span class="waypoint-status-tag">MATCH</span>
            </div>
          </div>
        `;else if(e.isStepper){const o=t.state&&t.state.step!==void 0?t.state.step:0,l=t.state&&t.state.maxSteps||4;let c="";for(let h=0;h<4;h++){const u=h<l;c+=`
            <div class="stepper-cell ${h===o?"active":""} ${u?"":"disabled"}" data-step="${h}">
              <span class="stepper-dot"></span>
              <span class="stepper-label">S${h+1}</span>
            </div>
          `}a=`
          <div class="stepper-display-module">
            <div class="stepper-header-row">
              <button class="stepper-steps-btn" data-steps="${l}" title="Toggle Sequence Length (2, 3, or 4 Steps)">${l}-STP</button>
              <button class="stepper-manual-btn" data-chip-id="${t.id}" title="Manual Step Pulse">▶ STEP</button>
            </div>
            <div class="stepper-grid">
              ${c}
            </div>
            <div class="stepper-status-row">
              <span class="stepper-state-tag">STEP ${o+1}/${l}</span>
            </div>
          </div>
        `}else if(e.isTimer555){const o=t.state&&t.state.mode||"ASTABLE",l=t.state&&t.state.timeLabel||"1.0s",c=!!(t.state&&t.state.out);a=`
          <div class="timer-display-module">
            <div class="timer-header-row">
              <button class="timer-mode-btn" data-mode="${o}" title="Toggle Astable (Oscillator) / Monostable (Pulse Delay) Mode">${o==="ASTABLE"?"ASTABLE ↺":"MONO ⏱"}</button>
              <button class="timer-period-btn" data-period="${l}" title="Adjust Time Base">${l}</button>
            </div>
            <div class="timer-screen">
              <div class="timer-wave-box">
                <span class="timer-wave-icon">${o==="ASTABLE"?"∿":"⎍"}</span>
                <span class="timer-pulse-led ${c?"active":""}"></span>
              </div>
              <span class="timer-out-tag ${c?"active":""}">${c?"HIGH":"LOW"}</span>
            </div>
            <div class="timer-status-row">
              ${o==="MONOSTABLE"?`
                <button class="timer-trig-btn" data-chip-id="${t.id}" title="Manual Trigger Pulse">⚡ TRIG</button>
              `:`
                <span class="timer-rate-tag">${l==="0.2s"?"5.0 Hz":l==="0.5s"?"2.0 Hz":l==="1.0s"?"1.0 Hz":"0.5 Hz"}</span>
              `}
            </div>
          </div>
        `}else if(e.isShiftReg){const o=t.state&&t.state.bits||[0,0,0,0],l=t.state&&t.state.dir||"RIGHT",c=t.state&&t.state.injectBit!==void 0?!!t.state.injectBit:!0,h=!!(t.state&&t.state.serOut);a=`
          <div class="shift-display-module">
            <div class="shift-header-row">
              <button class="shift-dir-btn" data-dir="${l}" title="Toggle Shift Direction (Right Q0->Q3 / Left Q3->Q0)">${l==="RIGHT"?"SHR ▶":"◀ SHL"}</button>
              <button class="shift-data-btn ${c?"active":""}" title="Manual Serial Data Injection Bit (Toggle 1/0)">IN: ${c?"1":"0"}</button>
            </div>
            <div class="shift-screen">
              <div class="shift-bits-row">
                <div class="shift-bit-cell ${o[0]?"active":""}" data-bit="0">
                  <span class="shift-bit-label">Q0</span>
                  <span class="shift-bit-val">${o[0]}</span>
                </div>
                <div class="shift-bit-cell ${o[1]?"active":""}" data-bit="1">
                  <span class="shift-bit-label">Q1</span>
                  <span class="shift-bit-val">${o[1]}</span>
                </div>
                <div class="shift-bit-cell ${o[2]?"active":""}" data-bit="2">
                  <span class="shift-bit-label">Q2</span>
                  <span class="shift-bit-val">${o[2]}</span>
                </div>
                <div class="shift-bit-cell ${o[3]?"active":""}" data-bit="3">
                  <span class="shift-bit-label">Q3</span>
                  <span class="shift-bit-val">${o[3]}</span>
                </div>
              </div>
            </div>
            <div class="shift-status-row">
              <button class="shift-clk-btn" data-chip-id="${t.id}" title="Manual Clock Pulse">▶ CLK</button>
              <span class="shift-ser-tag ${h?"active":""}">SER: ${h?"1":"0"}</span>
            </div>
          </div>
        `}else if(e.isNPN){const o=!!(t.state&&t.state.active);a=`
          <div class="discrete-bjt-module npn-module">
            <div class="to92-casing">
              <div class="to92-arc"></div>
              <div class="bjt-schematic">
                <svg viewBox="0 0 60 50" class="bjt-svg ${o?"active":""}">
                  <line x1="6" y1="25" x2="25" y2="25" class="bjt-line bjt-base" />
                  <line x1="25" y1="10" x2="25" y2="40" class="bjt-bar" />
                  <line x1="25" y1="16" x2="48" y2="6" class="bjt-line bjt-collector" />
                  <line x1="48" y1="6" x2="54" y2="6" class="bjt-line" />
                  <line x1="25" y1="34" x2="48" y2="44" class="bjt-line bjt-emitter" />
                  <line x1="48" y1="44" x2="54" y2="44" class="bjt-line" />
                  <polygon points="38,36 48,44 37,45" class="bjt-arrow" />
                </svg>
              </div>
            </div>
            <div class="bjt-status-badge">
              <span class="bjt-cond-led ${o?"active":""}"></span>
              <span class="bjt-cond-text ${o?"active":""}">${o?"ON":"OFF"}</span>
            </div>
          </div>
        `}else if(e.isPNP){const o=!!(t.state&&t.state.active);a=`
          <div class="discrete-bjt-module pnp-module">
            <div class="to92-casing">
              <div class="to92-arc"></div>
              <div class="bjt-schematic">
                <svg viewBox="0 0 60 50" class="bjt-svg ${o?"active":""}">
                  <line x1="6" y1="25" x2="25" y2="25" class="bjt-line bjt-base" />
                  <line x1="25" y1="10" x2="25" y2="40" class="bjt-bar" />
                  <line x1="54" y1="6" x2="48" y2="6" class="bjt-line" />
                  <line x1="48" y1="6" x2="25" y2="16" class="bjt-line bjt-emitter" />
                  <polygon points="36,13 25,16 33,21" class="bjt-arrow" />
                  <line x1="25" y1="34" x2="48" y2="44" class="bjt-line bjt-collector" />
                  <line x1="48" y1="44" x2="54" y2="44" class="bjt-line" />
                </svg>
              </div>
            </div>
            <div class="bjt-status-badge">
              <span class="bjt-cond-led ${o?"active":""}"></span>
              <span class="bjt-cond-text ${o?"active":""}">${o?"ON":"OFF"}</span>
            </div>
          </div>
        `}else if(e.isPot){const o=t.state&&t.state.dial!==void 0?t.state.dial:.5,l=(o*10).toFixed(1),c=Math.round(o*100),h=Math.round((o-.5)*240),u=!!(t.state&&t.state.wiper);a=`
          <div class="pot-display-module">
            <div class="pot-header-row">
              <span class="pot-val-tag">${l} kΩ</span>
              <span class="pot-pct-tag">${c}%</span>
            </div>
            <div class="pot-dial-container">
              <button class="pot-step-btn pot-dec-btn" data-chip-id="${t.id}" title="Decrease Resistance (◄)">◄</button>
              <div class="pot-knob" data-chip-id="${t.id}" title="Click to rotate dial">
                <div class="pot-indicator" style="transform: rotate(${h}deg);"></div>
                <div class="pot-screw-slot"></div>
              </div>
              <button class="pot-step-btn pot-inc-btn" data-chip-id="${t.id}" title="Increase Resistance (►)">►</button>
            </div>
            <div class="pot-status-row">
              <span class="pot-wiper-led ${u?"active":""}"></span>
              <span class="pot-mode-tag">TRIMMER</span>
            </div>
          </div>
        `}else if(e.isCap){const o=t.state&&t.state.charge!==void 0?t.state.charge:0,l=!!(t.state&&t.state.out);a=`
          <div class="cap-display-module">
            <div class="cap-can-body ${o>0?"charging":""}">
              <div class="cap-stripe" title="Negative Cathode Stripe">
                <span>-</span>
                <span>-</span>
                <span>-</span>
              </div>
              <div class="cap-gauge-container">
                <div class="cap-gauge-track">
                  <div class="cap-gauge-fill" style="height: ${Math.round(o)}%;"></div>
                </div>
                <div class="cap-rating">10µF</div>
              </div>
            </div>
            <div class="cap-status-row">
              <span class="cap-charge-pct">${Math.round(o)}%</span>
              <span class="cap-disch-led ${l?"active":""}" title="Trigger threshold ≥ 40%"></span>
            </div>
          </div>
        `}else if(e.isSpeaker){const o=!!(t.state&&t.state.active),l=t.state&&t.state.freq||480;a=`
          <div class="piezo-display-module">
            <div class="piezo-header-row">
              <button class="spk-tone-btn" data-chip-id="${t.id}" title="Toggle Tone Frequency (${l} Hz)">${l} Hz</button>
            </div>
            <div class="piezo-speaker-box ${o?"active":""}">
              <div class="piezo-cone ${o?"active":""}">
                <div class="piezo-center-hole"></div>
              </div>
              <div class="piezo-sound-waves ${o?"active":""}">
                <span class="sound-wave wave-1">)</span>
                <span class="sound-wave wave-2">)</span>
                <span class="sound-wave wave-3">)</span>
              </div>
            </div>
            <div class="piezo-status-row">
              <span class="piezo-led ${o?"active":""}"></span>
              <span class="piezo-sound-tag ${o?"active":""}">${o?"BEEP!":"IDLE"}</span>
            </div>
          </div>
        `}else if(e.isPower){const o=t.state&&t.state.isLive!==void 0?!!t.state.isLive:t.state&&t.state.enabled!==void 0?!!t.state.enabled:!0;a=`
          <div class="power-rail-module">
            <div class="power-header-row">
              <button class="power-toggle-btn ${o?"active":""}" data-chip-id="${t.id}" title="Toggle Master DC Power (On / Off)">${o?"⚡ ON":"○ OFF"}</button>
            </div>
            <div class="power-regulator-box ${o?"active":""}">
              <div class="power-voltage-readout">${o?"+5.0V":"0.0V"}</div>
              <div class="power-glow-dot ${o?"active":""}"></div>
            </div>
            <div class="power-status-row">
              <span class="power-vcc-tag">VCC RAIL</span>
            </div>
          </div>
        `}else if(e.isGround)a=`
          <div class="ground-rail-module">
            <div class="ground-symbol-box">
              <svg viewBox="0 0 44 36" class="ground-svg">
                <line x1="22" y1="2" x2="22" y2="14" stroke="#64748b" stroke-width="3" stroke-linecap="round"/>
                <line x1="6" y1="14" x2="38" y2="14" stroke="#64748b" stroke-width="3" stroke-linecap="round"/>
                <line x1="12" y1="21" x2="32" y2="21" stroke="#64748b" stroke-width="3" stroke-linecap="round"/>
                <line x1="18" y1="28" x2="26" y2="28" stroke="#64748b" stroke-width="3" stroke-linecap="round"/>
              </svg>
            </div>
            <div class="ground-status-row">
              <span class="ground-volt-tag">0.0V</span>
              <span class="ground-label">COMMON</span>
            </div>
          </div>
        `;else if(e.isLED){const o=!!(t.state&&t.state.lit),l=t.state&&t.state.color||"green",c={green:"🟢 GRN",red:"🔴 RED",blue:"🔵 BLU",amber:"🟡 AMB",purple:"🟣 PUR"};a=`
          <div class="led-display-module led-color-${l} ${o?"lit":""}">
            <div class="led-header-row">
              <button class="led-color-btn" data-chip-id="${t.id}" title="Toggle LED Color">${c[l]||c.green}</button>
            </div>
            <div class="led-lens-container ${o?"lit":""}">
              <div class="led-halo"></div>
              <div class="led-bulb">
                <div class="led-reflection"></div>
                <div class="led-filament"></div>
              </div>
            </div>
            <div class="led-status-row">
              <span class="led-diode-symbol">▷|</span>
              <span class="led-state-tag ${o?"lit":""}">${o?"LIT":"OFF"}</span>
            </div>
          </div>
        `}else if(e.isResistor){const o=t.state&&t.state.ohms||e.defaultOhms||220,l=!!(t.state&&t.state.active),c=o===220?"#ef4444":"#f97316",h=o===220?"#ef4444":"#f97316";a=`
          <div class="resistor-display-module ${l?"active":""}">
            <div class="resistor-header-row">
              <button class="resistor-toggle-btn" data-chip-id="${t.id}" title="Toggle Resistance (220Ω / 330Ω)">${o} Ω</button>
            </div>
            <div class="resistor-body-container ${l?"active":""}">
              <div class="resistor-axial-lead lead-left"></div>
              <div class="resistor-ceramic-cylinder">
                <span class="resistor-band band-1" style="background: ${c};" title="${o===220?"Digit 2 (Red)":"Digit 3 (Orange)"}"></span>
                <span class="resistor-band band-2" style="background: ${h};" title="${o===220?"Digit 2 (Red)":"Digit 3 (Orange)"}"></span>
                <span class="resistor-band band-3" style="background: #854d0e;" title="Multiplier x10 (Brown)"></span>
                <span class="resistor-band band-4" style="background: #eab308;" title="Tolerance ±5% (Gold)"></span>
              </div>
              <div class="resistor-axial-lead lead-right"></div>
            </div>
            <div class="resistor-status-row">
              <span class="resistor-symbol">∿∿</span>
              <span class="resistor-rating-tag">${o===220?"1/4W 220Ω":"1/4W 330Ω"}</span>
            </div>
          </div>
        `}i.innerHTML=`
        <div class="chip-header">
          <span class="chip-code">${e.code}</span>
          <span class="chip-title">${e.name}</span>
          <button class="chip-remove-btn" title="Remove Chip">&times;</button>
        </div>
        <div class="chip-body">
          <div class="chip-pins-col in-pins">${s}</div>
          ${a}
          <div class="chip-pins-col out-pins">${r}</div>
        </div>
      `,this.chipsArea.appendChild(i)}}renderWires(){this.wiresGroup.innerHTML="";for(const t of this.engine.wires){const e=this.getTerminalCoords(t.from.type,t.from.id,t.from.pin,!1),i=this.getTerminalCoords(t.to.type,t.to.id,t.to.pin,!0);if(!e||!i)continue;const s=this.calculateBezier(e.x,e.y,i.x,i.y),r=document.createElementNS("http://www.w3.org/2000/svg","g");r.setAttribute("class","wire-group"),r.dataset.wireId=t.id;const a=document.createElementNS("http://www.w3.org/2000/svg","path");a.setAttribute("d",s),a.setAttribute("class","circuit-wire-hitbox"),a.dataset.wireId=t.id;const o=document.createElementNS("http://www.w3.org/2000/svg","path");o.setAttribute("d",s),o.setAttribute("class",`circuit-wire ${t.active?"wire-active":"wire-idle"}`),o.dataset.wireId=t.id,r.appendChild(a),r.appendChild(o),this.wiresGroup.appendChild(r)}}updateVisualStates(){var e,i;Object.keys(this.engine.sensors).forEach(s=>{const r=this.engine.sensors[s],a=this.boardWrapper.querySelector(`.sensor-bank .pin-terminal[data-pin="${s}"]`);a&&a.classList.toggle("active",r)}),Object.keys(this.engine.actuators).forEach(s=>{const r=this.engine.actuators[s],a=this.boardWrapper.querySelector(`.actuator-bank .pin-row[data-pin="${s}"]`);if(a){const o=a.querySelector(".led-indicator");o&&o.classList.toggle("active",r)}});for(const s of this.engine.chips.values()){const r=this.chipsArea.querySelector(`[data-id="${s.id}"]`);if(!r)continue;const a=Xe[s.type]||{};if(Object.keys(s.inputs).forEach(o=>{const l=r.querySelector(`.pin-terminal.in[data-pin="${o}"]`);l&&l.classList.toggle("active",!!s.inputs[o])}),Object.keys(s.outputs).forEach(o=>{const l=r.querySelector(`.pin-terminal.out[data-pin="${o}"]`);l&&l.classList.toggle("active",!!s.outputs[o])}),a.hasDisplay){const o=r.querySelector(".counter-digit"),l=s.state&&s.state.count!==void 0?s.state.count:0,c=s.state&&s.state.mode||"DEC";if(o){const d=c==="HEX"?l.toString(16).toUpperCase():l.toString(10);o.textContent!==d&&(o.textContent=d)}const h=r.querySelector(".counter-mode-btn");h&&h.textContent!==c&&(h.textContent=c,h.dataset.mode=c),[{bit:"1",active:(l&1)!==0},{bit:"2",active:(l&2)!==0},{bit:"4",active:(l&4)!==0},{bit:"8",active:(l&8)!==0}].forEach(d=>{const f=r.querySelector(`.c-bit[data-bit="${d.bit}"]`);f&&f.classList.toggle("active",d.active)})}if(a.isTerminalStrip){const o=a.channels||4,l=!!(s.inputs.in||s.inputs.in_0),c=r.querySelector(".ts-jumper-spine");c&&c.classList.toggle("active",l);for(let h=0;h<o;h++){const u=`out_${h}`,d=r.querySelector(`.ts-led[data-ch="${u}"]`);d&&d.classList.toggle("active",!!s.outputs[u])}}if(a.isWaypointMem){const o=r.querySelector(".waypoint-coords"),l=r.querySelector(".waypoint-match-led"),c=s.state&&s.state.target;if(o)if(c){const h=(c.x>=0?"+":"")+c.x.toFixed(1),u=(c.z>=0?"+":"")+c.z.toFixed(1);o.textContent=`[${h}, ${u}]`}else o.textContent="[EMPTY]";l&&l.classList.toggle("active",!!s.outputs.match)}if(a.isStepper){const o=s.state&&s.state.step!==void 0?s.state.step:0,l=s.state&&s.state.maxSteps||4;r.querySelectorAll(".stepper-cell").forEach(d=>{const f=parseInt(d.dataset.step,10);d.classList.toggle("active",f===o),d.classList.toggle("disabled",f>=l)});const h=r.querySelector(".stepper-steps-btn");h&&h.textContent!==`${l}-STP`&&(h.textContent=`${l}-STP`,h.dataset.steps=l);const u=r.querySelector(".stepper-state-tag");u&&(u.textContent=`STEP ${o+1}/${l}`)}if(a.isTimer555){const o=s.state&&s.state.mode||"ASTABLE",l=s.state&&s.state.timeLabel||"1.0s",c=!!(s.state&&s.state.out),h=r.querySelector(".timer-pulse-led");h&&h.classList.toggle("active",c);const u=r.querySelector(".timer-out-tag");u&&(u.textContent=c?"HIGH":"LOW",u.classList.toggle("active",c));const d=r.querySelector(".timer-mode-btn");if(d){const m=o==="ASTABLE"?"ASTABLE ↺":"MONO ⏱";d.textContent!==m&&(d.textContent=m,d.dataset.mode=o)}const f=r.querySelector(".timer-period-btn");f&&f.textContent!==l&&(f.textContent=l,f.dataset.period=l);const g=r.querySelector(".timer-wave-icon");if(g){const m=o==="ASTABLE"?"∿":"⎍";g.textContent!==m&&(g.textContent=m)}const v=r.querySelector(".timer-rate-tag");if(v){const m=l==="0.2s"?"5.0 Hz":l==="0.5s"?"2.0 Hz":l==="1.0s"?"1.0 Hz":"0.5 Hz";v.textContent!==m&&(v.textContent=m)}}if(a.isShiftReg){const o=s.state&&s.state.bits||[0,0,0,0],l=s.state&&s.state.dir||"RIGHT",c=s.state&&s.state.injectBit!==void 0?!!s.state.injectBit:!0,h=!!(s.state&&s.state.serOut);r.querySelectorAll(".shift-bit-cell").forEach(v=>{const m=parseInt(v.dataset.bit,10);if(!isNaN(m)&&m>=0&&m<o.length){const p=o[m]===1;v.classList.toggle("active",p);const S=v.querySelector(".shift-bit-val");S&&S.textContent!==String(o[m])&&(S.textContent=String(o[m]))}});const d=r.querySelector(".shift-ser-tag");if(d){const v=`SER: ${h?"1":"0"}`;d.textContent!==v&&(d.textContent=v),d.classList.toggle("active",h)}const f=r.querySelector(".shift-dir-btn");if(f){const v=l==="RIGHT"?"SHR ▶":"◀ SHL";f.textContent!==v&&(f.textContent=v)}const g=r.querySelector(".shift-data-btn");if(g){const v=`IN: ${c?"1":"0"}`;g.textContent!==v&&(g.textContent=v),g.classList.toggle("active",c)}}if(a.isNPN||a.isPNP){const o=!!(s.state&&s.state.active),l=r.querySelector(".bjt-cond-led");l&&l.classList.toggle("active",o);const c=r.querySelector(".bjt-cond-text");if(c){const u=o?"ON":"OFF";c.textContent!==u&&(c.textContent=u),c.classList.toggle("active",o)}const h=r.querySelector(".bjt-svg");h&&h.classList.toggle("active",o)}if(a.isPot){const o=s.state&&s.state.dial!==void 0?s.state.dial:.5,l=(o*10).toFixed(1),c=Math.round(o*100),h=Math.round((o-.5)*240),u=!!(s.state&&s.state.wiper),d=r.querySelector(".pot-val-tag");d&&d.textContent!==`${l} kΩ`&&(d.textContent=`${l} kΩ`);const f=r.querySelector(".pot-pct-tag");f&&f.textContent!==`${c}%`&&(f.textContent=`${c}%`);const g=r.querySelector(".pot-indicator");g&&(g.style.transform=`rotate(${h}deg)`);const v=r.querySelector(".pot-wiper-led");v&&v.classList.toggle("active",u)}if(a.isCap){const o=s.state&&s.state.charge!==void 0?s.state.charge:0,l=!!(s.state&&s.state.out),c=r.querySelector(".cap-gauge-fill");c&&(c.style.height=`${Math.round(o)}%`);const h=r.querySelector(".cap-charge-pct");h&&(h.textContent=`${Math.round(o)}%`);const u=r.querySelector(".cap-disch-led");u&&u.classList.toggle("active",l);const d=r.querySelector(".cap-can-body");d&&d.classList.toggle("charging",o>0)}if(a.isSpeaker){const o=!!(s.state&&s.state.active);let l=s.state&&s.state.freq||480;for(const v of this.engine.wires)if(v.to.type==="chip"&&v.to.id===s.id){const m=this.engine.chips.get(v.from.id);if(m&&m.type==="POTENTIOMETER"&&((e=m.state)!=null&&e.freq))l=m.state.freq,s.state.freq=l;else if(m&&(m.type==="NPN"||m.type==="PNP"||m.type==="CAPACITOR")){const p=this.engine.wires.find(S=>S.to.type==="chip"&&S.to.id===m.id&&(S.to.pin==="b"||S.to.pin==="in"));if(p){const S=this.engine.chips.get(p.from.id);S&&S.type==="POTENTIOMETER"&&((i=S.state)!=null&&i.freq)&&(l=S.state.freq,s.state.freq=l)}}}const c=r.querySelector(".spk-tone-btn");c&&c.textContent!==`${l} Hz`&&(c.textContent=`${l} Hz`);const h=r.querySelector(".piezo-speaker-box");h&&h.classList.toggle("active",o);const u=r.querySelector(".piezo-cone");u&&u.classList.toggle("active",o);const d=r.querySelector(".piezo-sound-waves");d&&d.classList.toggle("active",o);const f=r.querySelector(".piezo-led");f&&f.classList.toggle("active",o);const g=r.querySelector(".piezo-sound-tag");if(g){const v=o?"BEEP!":"IDLE";g.textContent!==v&&(g.textContent=v),g.classList.toggle("active",o)}o&&tt.playBuzzerPulse(l)}if(a.isPower){const o=s.state&&s.state.isLive!==void 0?!!s.state.isLive:s.state&&s.state.enabled!==void 0?!!s.state.enabled:!0,l=r.querySelector(".power-toggle-btn");l&&(l.classList.toggle("active",o),l.textContent=o?"⚡ ON":"○ OFF");const c=r.querySelector(".power-voltage-readout");c&&(c.textContent=o?"+5.0V":"0.0V");const h=r.querySelector(".power-glow-dot");h&&h.classList.toggle("active",o);const u=r.querySelector(".power-regulator-box");u&&u.classList.toggle("active",o)}if(a.isGround){const o=!!(s.state&&s.state.hasSink),l=r.querySelector(".ground-symbol-box");l&&l.classList.toggle("active",o)}if(a.isLED){const o=!!(s.state&&s.state.lit),l=r.querySelector(".led-lens-container");l&&l.classList.toggle("lit",o);const c=r.querySelector(".led-state-tag");c&&(c.classList.toggle("lit",o),c.textContent=o?"LIT":"OFF");const h=r.querySelector(".led-display-module");h&&h.classList.toggle("lit",o)}if(a.isResistor){const o=!!(s.state&&s.state.active),l=s.state&&s.state.ohms||a.defaultOhms||220,c=r.querySelector(".resistor-display-module");c&&c.classList.toggle("active",o);const h=r.querySelector(".resistor-body-container");h&&h.classList.toggle("active",o);const u=r.querySelector(".resistor-toggle-btn");u&&u.textContent!==`${l} Ω`&&(u.textContent=`${l} Ω`);const d=r.querySelector(".resistor-rating-tag");d&&(d.textContent=l===220?"1/4W 220Ω":"1/4W 330Ω");const f=r.querySelector(".resistor-band.band-1"),g=r.querySelector(".resistor-band.band-2");f&&(f.style.background=l===220?"#ef4444":"#f97316"),g&&(g.style.background=l===220?"#ef4444":"#f97316")}}this.wiresGroup.querySelectorAll(".circuit-wire").forEach(s=>{const r=s.dataset.wireId,a=this.engine.wires.find(o=>o.id===r);a&&(s.classList.toggle("wire-active",!!a.active),s.classList.toggle("wire-idle",!a.active))})}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const aa="170",Nl=0,Da=1,Ul=2,Ho=1,Vo=2,oi=3,Ai=0,Re=1,qe=2,wi=0,fn=1,Na=2,Ua=3,Oa=4,Ol=5,Fi=100,Bl=101,Fl=102,kl=103,zl=104,Gl=200,Hl=201,Vl=202,Wl=203,yr=204,xr=205,Xl=206,ql=207,Yl=208,$l=209,jl=210,Zl=211,Kl=212,Jl=213,Ql=214,br=0,Sr=1,Er=2,vn=3,Mr=4,wr=5,Tr=6,Ar=7,Wo=0,tc=1,ec=2,Ti=0,ic=1,nc=2,sc=3,Xo=4,rc=5,ac=6,oc=7,qo=300,_n=301,yn=302,Cr=303,Rr=304,Us=306,Lr=1e3,zi=1001,Ir=1002,je=1003,lc=1004,Kn=1005,Ne=1006,zs=1007,li=1008,pi=1009,Yo=1010,$o=1011,Gn=1012,oa=1013,Gi=1014,ci=1015,Wn=1016,la=1017,ca=1018,xn=1020,jo=35902,Zo=1021,Ko=1022,$e=1023,Jo=1024,Qo=1025,mn=1026,bn=1027,tl=1028,da=1029,el=1030,ha=1031,ua=1033,Es=33776,Ms=33777,ws=33778,Ts=33779,Pr=35840,Dr=35841,Nr=35842,Ur=35843,Or=36196,Br=37492,Fr=37496,kr=37808,zr=37809,Gr=37810,Hr=37811,Vr=37812,Wr=37813,Xr=37814,qr=37815,Yr=37816,$r=37817,jr=37818,Zr=37819,Kr=37820,Jr=37821,As=36492,Qr=36494,ta=36495,il=36283,ea=36284,ia=36285,na=36286,cc=3200,dc=3201,nl=0,hc=1,Ei="",Be="srgb",En="srgb-linear",Os="linear",ee="srgb",qi=7680,Ba=519,uc=512,pc=513,fc=514,sl=515,mc=516,gc=517,vc=518,_c=519,sa=35044,Fa="300 es",di=2e3,Rs=2001;class Mn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ka=1234567;const kn=Math.PI/180,Hn=180/Math.PI;function hi(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(be[n&255]+be[n>>8&255]+be[n>>16&255]+be[n>>24&255]+"-"+be[t&255]+be[t>>8&255]+"-"+be[t>>16&15|64]+be[t>>24&255]+"-"+be[e&63|128]+be[e>>8&255]+"-"+be[e>>16&255]+be[e>>24&255]+be[i&255]+be[i>>8&255]+be[i>>16&255]+be[i>>24&255]).toLowerCase()}function we(n,t,e){return Math.max(t,Math.min(e,n))}function pa(n,t){return(n%t+t)%t}function yc(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function xc(n,t,e){return n!==t?(e-n)/(t-n):0}function zn(n,t,e){return(1-e)*n+e*t}function bc(n,t,e,i){return zn(n,t,1-Math.exp(-e*i))}function Sc(n,t=1){return t-Math.abs(pa(n,t*2)-t)}function Ec(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Mc(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function wc(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Tc(n,t){return n+Math.random()*(t-n)}function Ac(n){return n*(.5-Math.random())}function Cc(n){n!==void 0&&(ka=n);let t=ka+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Rc(n){return n*kn}function Lc(n){return n*Hn}function Ic(n){return(n&n-1)===0&&n!==0}function Pc(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Dc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Nc(n,t,e,i,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+i)/2),h=a((t+i)/2),u=r((t-i)/2),d=a((t-i)/2),f=r((i-t)/2),g=a((i-t)/2);switch(s){case"XYX":n.set(o*h,l*u,l*d,o*c);break;case"YZY":n.set(l*d,o*h,l*u,o*c);break;case"ZXZ":n.set(l*u,l*d,o*h,o*c);break;case"XZX":n.set(o*h,l*g,l*f,o*c);break;case"YXY":n.set(l*f,o*h,l*g,o*c);break;case"ZYZ":n.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ye(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Qt(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Yi={DEG2RAD:kn,RAD2DEG:Hn,generateUUID:hi,clamp:we,euclideanModulo:pa,mapLinear:yc,inverseLerp:xc,lerp:zn,damp:bc,pingpong:Sc,smoothstep:Ec,smootherstep:Mc,randInt:wc,randFloat:Tc,randFloatSpread:Ac,seededRandom:Cc,degToRad:Rc,radToDeg:Lc,isPowerOfTwo:Ic,ceilPowerOfTwo:Pc,floorPowerOfTwo:Dc,setQuaternionFromProperEuler:Nc,normalize:Qt,denormalize:Ye};class Ot{constructor(t=0,e=0){Ot.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(we(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Gt{constructor(t,e,i,s,r,a,o,l,c){Gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],v=s[0],m=s[3],p=s[6],S=s[1],E=s[4],x=s[7],D=s[2],R=s[5],C=s[8];return r[0]=a*v+o*S+l*D,r[3]=a*m+o*E+l*R,r[6]=a*p+o*x+l*C,r[1]=c*v+h*S+u*D,r[4]=c*m+h*E+u*R,r[7]=c*p+h*x+u*C,r[2]=d*v+f*S+g*D,r[5]=d*m+f*E+g*R,r[8]=d*p+f*x+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=e*u+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(s*c-h*i)*v,t[2]=(o*i-s*a)*v,t[3]=d*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=f*v,t[7]=(i*l-c*e)*v,t[8]=(a*e-i*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Gs.makeScale(t,e)),this}rotate(t){return this.premultiply(Gs.makeRotation(-t)),this}translate(t,e){return this.premultiply(Gs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Gs=new Gt;function rl(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Ls(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Uc(){const n=Ls("canvas");return n.style.display="block",n}const za={};function Bn(n){n in za||(za[n]=!0,console.warn(n))}function Oc(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Bc(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Fc(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Yt={enabled:!0,workingColorSpace:En,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ee&&(n.r=ui(n.r),n.g=ui(n.g),n.b=ui(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ee&&(n.r=gn(n.r),n.g=gn(n.g),n.b=gn(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Ei?Os:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function ui(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function gn(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Ga=[.64,.33,.3,.6,.15,.06],Ha=[.2126,.7152,.0722],Va=[.3127,.329],Wa=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xa=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Yt.define({[En]:{primaries:Ga,whitePoint:Va,transfer:Os,toXYZ:Wa,fromXYZ:Xa,luminanceCoefficients:Ha,workingColorSpaceConfig:{unpackColorSpace:Be},outputColorSpaceConfig:{drawingBufferColorSpace:Be}},[Be]:{primaries:Ga,whitePoint:Va,transfer:ee,toXYZ:Wa,fromXYZ:Xa,luminanceCoefficients:Ha,outputColorSpaceConfig:{drawingBufferColorSpace:Be}}});let $i;class kc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{$i===void 0&&($i=Ls("canvas")),$i.width=t.width,$i.height=t.height;const i=$i.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=$i}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ls("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ui(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ui(e[i]/255)*255):e[i]=ui(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let zc=0;class al{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zc++}),this.uuid=hi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Hs(s[a].image)):r.push(Hs(s[a]))}else r=Hs(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Hs(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?kc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Gc=0;class Te extends Mn{constructor(t=Te.DEFAULT_IMAGE,e=Te.DEFAULT_MAPPING,i=zi,s=zi,r=Ne,a=li,o=$e,l=pi,c=Te.DEFAULT_ANISOTROPY,h=Ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gc++}),this.uuid=hi(),this.name="",this.source=new al(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ot(0,0),this.repeat=new Ot(1,1),this.center=new Ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==qo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Lr:t.x=t.x-Math.floor(t.x);break;case zi:t.x=t.x<0?0:1;break;case Ir:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Lr:t.y=t.y-Math.floor(t.y);break;case zi:t.y=t.y<0?0:1;break;case Ir:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Te.DEFAULT_IMAGE=null;Te.DEFAULT_MAPPING=qo;Te.DEFAULT_ANISOTROPY=1;class ne{constructor(t=0,e=0,i=0,s=1){ne.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,x=(f+1)/2,D=(p+1)/2,R=(h+d)/4,C=(u+v)/4,w=(g+m)/4;return E>x&&E>D?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=R/i,r=C/i):x>D?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=R/s,r=w/s):D<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),i=C/r,s=w/r),this.set(i,s,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-v)/S,this.z=(d-h)/S,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Hc extends Mn{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ne(0,0,t,e),this.scissorTest=!1,this.viewport=new ne(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ne,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Te(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new al(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hi extends Hc{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class ol extends Te{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Vc extends Te{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xn{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3];const d=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(u!==v||l!==d||c!==f||h!==g){let m=1-o;const p=l*d+c*f+h*g+u*v,S=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const D=Math.sqrt(E),R=Math.atan2(D,p*S);m=Math.sin(m*R)/D,o=Math.sin(o*R)/D}const x=o*S;if(l=l*m+d*x,c=c*m+f*x,h=h*m+g*x,u=u*m+v*x,m===1-o){const D=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=D,c*=D,h*=D,u*=D}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-o*f,t[e+2]=c*g+h*f+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),u=o(r/2),d=l(i/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>u){const f=2*Math.sqrt(1+i-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-i-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(we(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+i*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*i+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,i=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(qa.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(qa.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),h=2*(o*e-r*s),u=2*(r*i-a*e);return this.x=e+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Vs.copy(this).projectOnVector(t),this.sub(Vs)}reflect(t){return this.sub(Vs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(we(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vs=new P,qa=new Xn;class qn{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ge.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ge.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Ge.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ge):Ge.fromBufferAttribute(r,a),Ge.applyMatrix4(t.matrixWorld),this.expandByPoint(Ge);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Jn.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Jn.copy(i.boundingBox)),Jn.applyMatrix4(t.matrixWorld),this.union(Jn)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ge),Ge.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Cn),Qn.subVectors(this.max,Cn),ji.subVectors(t.a,Cn),Zi.subVectors(t.b,Cn),Ki.subVectors(t.c,Cn),gi.subVectors(Zi,ji),vi.subVectors(Ki,Zi),Li.subVectors(ji,Ki);let e=[0,-gi.z,gi.y,0,-vi.z,vi.y,0,-Li.z,Li.y,gi.z,0,-gi.x,vi.z,0,-vi.x,Li.z,0,-Li.x,-gi.y,gi.x,0,-vi.y,vi.x,0,-Li.y,Li.x,0];return!Ws(e,ji,Zi,Ki,Qn)||(e=[1,0,0,0,1,0,0,0,1],!Ws(e,ji,Zi,Ki,Qn))?!1:(ts.crossVectors(gi,vi),e=[ts.x,ts.y,ts.z],Ws(e,ji,Zi,Ki,Qn))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ge).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ge).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ii),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ii=[new P,new P,new P,new P,new P,new P,new P,new P],Ge=new P,Jn=new qn,ji=new P,Zi=new P,Ki=new P,gi=new P,vi=new P,Li=new P,Cn=new P,Qn=new P,ts=new P,Ii=new P;function Ws(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ii.fromArray(n,r);const o=s.x*Math.abs(Ii.x)+s.y*Math.abs(Ii.y)+s.z*Math.abs(Ii.z),l=t.dot(Ii),c=e.dot(Ii),h=i.dot(Ii);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Wc=new qn,Rn=new P,Xs=new P;class Bs{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Wc.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Rn.subVectors(t,this.center);const e=Rn.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Rn,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Xs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Rn.copy(t.center).add(Xs)),this.expandByPoint(Rn.copy(t.center).sub(Xs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ni=new P,qs=new P,es=new P,_i=new P,Ys=new P,is=new P,$s=new P;class ll{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ni)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ni.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ni.copy(this.origin).addScaledVector(this.direction,e),ni.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){qs.copy(t).add(e).multiplyScalar(.5),es.copy(e).sub(t).normalize(),_i.copy(this.origin).sub(qs);const r=t.distanceTo(e)*.5,a=-this.direction.dot(es),o=_i.dot(this.direction),l=-_i.dot(es),c=_i.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(qs).addScaledVector(es,d),f}intersectSphere(t,e){ni.subVectors(t.center,this.origin);const i=ni.dot(this.direction),s=ni.dot(ni)-i*i,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,ni)!==null}intersectTriangle(t,e,i,s,r){Ys.subVectors(e,t),is.subVectors(i,t),$s.crossVectors(Ys,is);let a=this.direction.dot($s),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;_i.subVectors(this.origin,t);const l=o*this.direction.dot(is.crossVectors(_i,is));if(l<0)return null;const c=o*this.direction.dot(Ys.cross(_i));if(c<0||l+c>a)return null;const h=-o*_i.dot($s);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ce{constructor(t,e,i,s,r,a,o,l,c,h,u,d,f,g,v,m){ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,h,u,d,f,g,v,m)}set(t,e,i,s,r,a,o,l,c,h,u,d,f,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ce().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Ji.setFromMatrixColumn(t,0).length(),r=1/Ji.setFromMatrixColumn(t,1).length(),a=1/Ji.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,f=a*u,g=o*h,v=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-v*c,e[9]=-o*l,e[2]=v-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,g=c*h,v=c*u;e[0]=d+v*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=v+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,g=c*h,v=c*u;e[0]=d-v*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=v-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,f=a*u,g=o*h,v=o*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+v,e[1]=l*u,e[5]=v*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,f=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=v-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-v*u}else if(t.order==="XZY"){const d=a*l,f=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+v,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Xc,t,qc)}lookAt(t,e,i){const s=this.elements;return Ie.subVectors(t,e),Ie.lengthSq()===0&&(Ie.z=1),Ie.normalize(),yi.crossVectors(i,Ie),yi.lengthSq()===0&&(Math.abs(i.z)===1?Ie.x+=1e-4:Ie.z+=1e-4,Ie.normalize(),yi.crossVectors(i,Ie)),yi.normalize(),ns.crossVectors(Ie,yi),s[0]=yi.x,s[4]=ns.x,s[8]=Ie.x,s[1]=yi.y,s[5]=ns.y,s[9]=Ie.y,s[2]=yi.z,s[6]=ns.z,s[10]=Ie.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],v=i[6],m=i[10],p=i[14],S=i[3],E=i[7],x=i[11],D=i[15],R=s[0],C=s[4],w=s[8],_=s[12],y=s[1],T=s[5],L=s[9],I=s[13],k=s[2],H=s[6],U=s[10],X=s[14],G=s[3],at=s[7],dt=s[11],gt=s[15];return r[0]=a*R+o*y+l*k+c*G,r[4]=a*C+o*T+l*H+c*at,r[8]=a*w+o*L+l*U+c*dt,r[12]=a*_+o*I+l*X+c*gt,r[1]=h*R+u*y+d*k+f*G,r[5]=h*C+u*T+d*H+f*at,r[9]=h*w+u*L+d*U+f*dt,r[13]=h*_+u*I+d*X+f*gt,r[2]=g*R+v*y+m*k+p*G,r[6]=g*C+v*T+m*H+p*at,r[10]=g*w+v*L+m*U+p*dt,r[14]=g*_+v*I+m*X+p*gt,r[3]=S*R+E*y+x*k+D*G,r[7]=S*C+E*T+x*H+D*at,r[11]=S*w+E*L+x*U+D*dt,r[15]=S*_+E*I+x*X+D*gt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*o*d+i*c*d+s*o*f-i*l*f)+v*(+e*l*f-e*c*d+r*a*d-s*a*f+s*c*h-r*l*h)+m*(+e*c*u-e*o*f-r*a*u+i*a*f+r*o*h-i*c*h)+p*(-s*o*h-e*l*u+e*o*d+s*a*u-i*a*d+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],v=t[13],m=t[14],p=t[15],S=u*m*c-v*d*c+v*l*f-o*m*f-u*l*p+o*d*p,E=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,x=h*v*c-g*u*c+g*o*f-a*v*f-h*o*p+a*u*p,D=g*u*l-h*v*l-g*o*d+a*v*d+h*o*m-a*u*m,R=e*S+i*E+s*x+r*D;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return t[0]=S*C,t[1]=(v*d*r-u*m*r-v*s*f+i*m*f+u*s*p-i*d*p)*C,t[2]=(o*m*r-v*l*r+v*s*c-i*m*c-o*s*p+i*l*p)*C,t[3]=(u*l*r-o*d*r-u*s*c+i*d*c+o*s*f-i*l*f)*C,t[4]=E*C,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*C,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*p-e*l*p)*C,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*f+e*l*f)*C,t[8]=x*C,t[9]=(g*u*r-h*v*r-g*i*f+e*v*f+h*i*p-e*u*p)*C,t[10]=(a*v*r-g*o*r+g*i*c-e*v*c-a*i*p+e*o*p)*C,t[11]=(h*o*r-a*u*r-h*i*c+e*u*c+a*i*f-e*o*f)*C,t[12]=D*C,t[13]=(h*v*s-g*u*s+g*i*d-e*v*d-h*i*m+e*u*m)*C,t[14]=(g*o*s-a*v*s-g*i*l+e*v*l+a*i*m-e*o*m)*C,t[15]=(a*u*s-h*o*s+h*i*l-e*u*l-a*i*d+e*o*d)*C,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,v=a*h,m=a*u,p=o*u,S=l*c,E=l*h,x=l*u,D=i.x,R=i.y,C=i.z;return s[0]=(1-(v+p))*D,s[1]=(f+x)*D,s[2]=(g-E)*D,s[3]=0,s[4]=(f-x)*R,s[5]=(1-(d+p))*R,s[6]=(m+S)*R,s[7]=0,s[8]=(g+E)*C,s[9]=(m-S)*C,s[10]=(1-(d+v))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Ji.set(s[0],s[1],s[2]).length();const a=Ji.set(s[4],s[5],s[6]).length(),o=Ji.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],He.copy(this);const c=1/r,h=1/a,u=1/o;return He.elements[0]*=c,He.elements[1]*=c,He.elements[2]*=c,He.elements[4]*=h,He.elements[5]*=h,He.elements[6]*=h,He.elements[8]*=u,He.elements[9]*=u,He.elements[10]*=u,e.setFromRotationMatrix(He),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,s,r,a,o=di){const l=this.elements,c=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s);let f,g;if(o===di)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Rs)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=di){const l=this.elements,c=1/(e-t),h=1/(i-s),u=1/(a-r),d=(e+t)*c,f=(i+s)*h;let g,v;if(o===di)g=(a+r)*u,v=-2*u;else if(o===Rs)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Ji=new P,He=new ce,Xc=new P(0,0,0),qc=new P(1,1,1),yi=new P,ns=new P,Ie=new P,Ya=new ce,$a=new Xn;class Qe{constructor(t=0,e=0,i=0,s=Qe.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(we(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-we(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(we(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-we(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(we(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-we(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Ya.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ya,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return $a.setFromEuler(this),this.setFromQuaternion($a,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qe.DEFAULT_ORDER="XYZ";class cl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Yc=0;const ja=new P,Qi=new Xn,si=new ce,ss=new P,Ln=new P,$c=new P,jc=new Xn,Za=new P(1,0,0),Ka=new P(0,1,0),Ja=new P(0,0,1),Qa={type:"added"},Zc={type:"removed"},tn={type:"childadded",child:null},js={type:"childremoved",child:null};class ye extends Mn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yc++}),this.uuid=hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ye.DEFAULT_UP.clone();const t=new P,e=new Qe,i=new Xn,s=new P(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ce},normalMatrix:{value:new Gt}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Qi.setFromAxisAngle(t,e),this.quaternion.multiply(Qi),this}rotateOnWorldAxis(t,e){return Qi.setFromAxisAngle(t,e),this.quaternion.premultiply(Qi),this}rotateX(t){return this.rotateOnAxis(Za,t)}rotateY(t){return this.rotateOnAxis(Ka,t)}rotateZ(t){return this.rotateOnAxis(Ja,t)}translateOnAxis(t,e){return ja.copy(t).applyQuaternion(this.quaternion),this.position.add(ja.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Za,t)}translateY(t){return this.translateOnAxis(Ka,t)}translateZ(t){return this.translateOnAxis(Ja,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ss.copy(t):ss.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ln.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(Ln,ss,this.up):si.lookAt(ss,Ln,this.up),this.quaternion.setFromRotationMatrix(si),s&&(si.extractRotation(s.matrixWorld),Qi.setFromRotationMatrix(si),this.quaternion.premultiply(Qi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Qa),tn.child=t,this.dispatchEvent(tn),tn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Zc),js.child=t,this.dispatchEvent(js),js.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),si.multiply(t.parent.matrixWorld)),t.applyMatrix4(si),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Qa),tn.child=t,this.dispatchEvent(tn),tn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ln,t,$c),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ln,jc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}ye.DEFAULT_UP=new P(0,1,0);ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ve=new P,ri=new P,Zs=new P,ai=new P,en=new P,nn=new P,to=new P,Ks=new P,Js=new P,Qs=new P,tr=new ne,er=new ne,ir=new ne;class Fe{constructor(t=new P,e=new P,i=new P){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Ve.subVectors(t,e),s.cross(Ve);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Ve.subVectors(s,e),ri.subVectors(i,e),Zs.subVectors(t,e);const a=Ve.dot(Ve),o=Ve.dot(ri),l=Ve.dot(Zs),c=ri.dot(ri),h=ri.dot(Zs),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ai.x),l.addScaledVector(a,ai.y),l.addScaledVector(o,ai.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return tr.setScalar(0),er.setScalar(0),ir.setScalar(0),tr.fromBufferAttribute(t,e),er.fromBufferAttribute(t,i),ir.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(tr,r.x),a.addScaledVector(er,r.y),a.addScaledVector(ir,r.z),a}static isFrontFacing(t,e,i,s){return Ve.subVectors(i,e),ri.subVectors(t,e),Ve.cross(ri).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ve.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),Ve.cross(ri).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Fe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Fe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return Fe.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return Fe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Fe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let a,o;en.subVectors(s,i),nn.subVectors(r,i),Ks.subVectors(t,i);const l=en.dot(Ks),c=nn.dot(Ks);if(l<=0&&c<=0)return e.copy(i);Js.subVectors(t,s);const h=en.dot(Js),u=nn.dot(Js);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(en,a);Qs.subVectors(t,r);const f=en.dot(Qs),g=nn.dot(Qs);if(g>=0&&f<=g)return e.copy(r);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(nn,o);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return to.subVectors(r,s),o=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(to,o);const p=1/(m+v+d);return a=v*p,o=d*p,e.copy(i).addScaledVector(en,a).addScaledVector(nn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const dl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},rs={h:0,s:0,l:0};function nr(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Xt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Yt.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Yt.workingColorSpace){if(t=pa(t,1),e=we(e,0,1),i=we(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=nr(a,r,t+1/3),this.g=nr(a,r,t),this.b=nr(a,r,t-1/3)}return Yt.toWorkingColorSpace(this,s),this}setStyle(t,e=Be){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Be){const i=dl[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ui(t.r),this.g=ui(t.g),this.b=ui(t.b),this}copyLinearToSRGB(t){return this.r=gn(t.r),this.g=gn(t.g),this.b=gn(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Be){return Yt.fromWorkingColorSpace(Se.copy(this),t),Math.round(we(Se.r*255,0,255))*65536+Math.round(we(Se.g*255,0,255))*256+Math.round(we(Se.b*255,0,255))}getHexString(t=Be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.fromWorkingColorSpace(Se.copy(this),e);const i=Se.r,s=Se.g,r=Se.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(Se.copy(this),e),t.r=Se.r,t.g=Se.g,t.b=Se.b,t}getStyle(t=Be){Yt.fromWorkingColorSpace(Se.copy(this),t);const e=Se.r,i=Se.g,s=Se.b;return t!==Be?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(xi),this.setHSL(xi.h+t,xi.s+e,xi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(xi),t.getHSL(rs);const i=zn(xi.h,rs.h,e),s=zn(xi.s,rs.s,e),r=zn(xi.l,rs.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Se=new Xt;Xt.NAMES=dl;let Kc=0;class Vi extends Mn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kc++}),this.uuid=hi(),this.name="",this.blending=fn,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yr,this.blendDst=xr,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=vn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ba,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==fn&&(i.blending=this.blending),this.side!==Ai&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==yr&&(i.blendSrc=this.blendSrc),this.blendDst!==xr&&(i.blendDst=this.blendDst),this.blendEquation!==Fi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==vn&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ba&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ue extends Vi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qe,this.combine=Wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fe=new P,as=new Ot;class Ze{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=sa,this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)as.fromBufferAttribute(this,e),as.applyMatrix3(t),this.setXY(e,as.x,as.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix3(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix4(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)fe.fromBufferAttribute(this,e),fe.applyNormalMatrix(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)fe.fromBufferAttribute(this,e),fe.transformDirection(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Ye(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Qt(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ye(e,this.array)),e}setX(t,e){return this.normalized&&(e=Qt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ye(e,this.array)),e}setY(t,e){return this.normalized&&(e=Qt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ye(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Qt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ye(e,this.array)),e}setW(t,e){return this.normalized&&(e=Qt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Qt(e,this.array),i=Qt(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Qt(e,this.array),i=Qt(i,this.array),s=Qt(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Qt(e,this.array),i=Qt(i,this.array),s=Qt(s,this.array),r=Qt(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==sa&&(t.usage=this.usage),t}}class hl extends Ze{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class ul extends Ze{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ae extends Ze{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Jc=0;const Oe=new ce,sr=new ye,sn=new P,Pe=new qn,In=new qn,_e=new P;class Ae extends Mn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jc++}),this.uuid=hi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(rl(t)?ul:hl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Gt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Oe.makeRotationFromQuaternion(t),this.applyMatrix4(Oe),this}rotateX(t){return Oe.makeRotationX(t),this.applyMatrix4(Oe),this}rotateY(t){return Oe.makeRotationY(t),this.applyMatrix4(Oe),this}rotateZ(t){return Oe.makeRotationZ(t),this.applyMatrix4(Oe),this}translate(t,e,i){return Oe.makeTranslation(t,e,i),this.applyMatrix4(Oe),this}scale(t,e,i){return Oe.makeScale(t,e,i),this.applyMatrix4(Oe),this}lookAt(t){return sr.lookAt(t),sr.updateMatrix(),this.applyMatrix4(sr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sn).negate(),this.translate(sn.x,sn.y,sn.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ae(i,3))}else{for(let i=0,s=e.count;i<s;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];Pe.setFromBufferAttribute(r),this.morphTargetsRelative?(_e.addVectors(this.boundingBox.min,Pe.min),this.boundingBox.expandByPoint(_e),_e.addVectors(this.boundingBox.max,Pe.max),this.boundingBox.expandByPoint(_e)):(this.boundingBox.expandByPoint(Pe.min),this.boundingBox.expandByPoint(Pe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const i=this.boundingSphere.center;if(Pe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];In.setFromBufferAttribute(o),this.morphTargetsRelative?(_e.addVectors(Pe.min,In.min),Pe.expandByPoint(_e),_e.addVectors(Pe.max,In.max),Pe.expandByPoint(_e)):(Pe.expandByPoint(In.min),Pe.expandByPoint(In.max))}Pe.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)_e.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(_e));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)_e.fromBufferAttribute(o,c),l&&(sn.fromBufferAttribute(t,c),_e.add(sn)),s=Math.max(s,i.distanceToSquared(_e))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ze(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let w=0;w<i.count;w++)o[w]=new P,l[w]=new P;const c=new P,h=new P,u=new P,d=new Ot,f=new Ot,g=new Ot,v=new P,m=new P;function p(w,_,y){c.fromBufferAttribute(i,w),h.fromBufferAttribute(i,_),u.fromBufferAttribute(i,y),d.fromBufferAttribute(r,w),f.fromBufferAttribute(r,_),g.fromBufferAttribute(r,y),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const T=1/(f.x*g.y-g.x*f.y);isFinite(T)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(T),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(T),o[w].add(v),o[_].add(v),o[y].add(v),l[w].add(m),l[_].add(m),l[y].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let w=0,_=S.length;w<_;++w){const y=S[w],T=y.start,L=y.count;for(let I=T,k=T+L;I<k;I+=3)p(t.getX(I+0),t.getX(I+1),t.getX(I+2))}const E=new P,x=new P,D=new P,R=new P;function C(w){D.fromBufferAttribute(s,w),R.copy(D);const _=o[w];E.copy(_),E.sub(D.multiplyScalar(D.dot(_))).normalize(),x.crossVectors(R,_);const T=x.dot(l[w])<0?-1:1;a.setXYZW(w,E.x,E.y,E.z,T)}for(let w=0,_=S.length;w<_;++w){const y=S[w],T=y.start,L=y.count;for(let I=T,k=T+L;I<k;I+=3)C(t.getX(I+0)),C(t.getX(I+1)),C(t.getX(I+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ze(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,u=new P;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)_e.fromBufferAttribute(t,e),_e.normalize(),t.setXYZ(e,_e.x,_e.y,_e.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Ze(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ae,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,i);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const eo=new ce,Pi=new ll,os=new Bs,io=new P,ls=new P,cs=new P,ds=new P,rr=new P,hs=new P,no=new P,us=new P;class $ extends ye{constructor(t=new Ae,e=new ue){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){hs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(rr.fromBufferAttribute(u,t),a?hs.addScaledVector(rr,h):hs.addScaledVector(rr.sub(e),h))}e.add(hs)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),os.copy(i.boundingSphere),os.applyMatrix4(r),Pi.copy(t.ray).recast(t.near),!(os.containsPoint(Pi.origin)===!1&&(Pi.intersectSphere(os,io)===null||Pi.origin.distanceToSquared(io)>(t.far-t.near)**2))&&(eo.copy(r).invert(),Pi.copy(t.ray).applyMatrix4(eo),!(i.boundingBox!==null&&Pi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Pi)))}_computeIntersections(t,e,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),E=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=S,D=E;x<D;x+=3){const R=o.getX(x),C=o.getX(x+1),w=o.getX(x+2);s=ps(this,p,t,i,c,h,u,R,C,w),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const S=o.getX(m),E=o.getX(m+1),x=o.getX(m+2);s=ps(this,a,t,i,c,h,u,S,E,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),E=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=S,D=E;x<D;x+=3){const R=x,C=x+1,w=x+2;s=ps(this,p,t,i,c,h,u,R,C,w),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const S=m,E=m+1,x=m+2;s=ps(this,a,t,i,c,h,u,S,E,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Qc(n,t,e,i,s,r,a,o){let l;if(t.side===Re?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===Ai,o),l===null)return null;us.copy(o),us.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(us);return c<e.near||c>e.far?null:{distance:c,point:us.clone(),object:n}}function ps(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,ls),n.getVertexPosition(l,cs),n.getVertexPosition(c,ds);const h=Qc(n,t,e,i,ls,cs,ds,no);if(h){const u=new P;Fe.getBarycoord(no,ls,cs,ds,u),s&&(h.uv=Fe.getInterpolatedAttribute(s,o,l,c,u,new Ot)),r&&(h.uv1=Fe.getInterpolatedAttribute(r,o,l,c,u,new Ot)),a&&(h.normal=Fe.getInterpolatedAttribute(a,o,l,c,u,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new P,materialIndex:0};Fe.getNormal(ls,cs,ds,d.normal),h.face=d,h.barycoord=u}return h}class vt extends Ae{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,s,a,2),g("x","z","y",1,-1,t,i,-e,s,a,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ae(c,3)),this.setAttribute("normal",new ae(h,3)),this.setAttribute("uv",new ae(u,2));function g(v,m,p,S,E,x,D,R,C,w,_){const y=x/C,T=D/w,L=x/2,I=D/2,k=R/2,H=C+1,U=w+1;let X=0,G=0;const at=new P;for(let dt=0;dt<U;dt++){const gt=dt*T-I;for(let Dt=0;Dt<H;Dt++){const qt=Dt*y-L;at[v]=qt*S,at[m]=gt*E,at[p]=k,c.push(at.x,at.y,at.z),at[v]=0,at[m]=0,at[p]=R>0?1:-1,h.push(at.x,at.y,at.z),u.push(Dt/C),u.push(1-dt/w),X+=1}}for(let dt=0;dt<w;dt++)for(let gt=0;gt<C;gt++){const Dt=d+gt+H*dt,qt=d+gt+H*(dt+1),j=d+(gt+1)+H*(dt+1),st=d+(gt+1)+H*dt;l.push(Dt,qt,st),l.push(qt,j,st),G+=6}o.addGroup(f,G,_),f+=G,d+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Sn(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Me(n){const t={};for(let e=0;e<n.length;e++){const i=Sn(n[e]);for(const s in i)t[s]=i[s]}return t}function td(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function pl(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}const ed={clone:Sn,merge:Me};var id=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ci extends Vi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=id,this.fragmentShader=nd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Sn(t.uniforms),this.uniformsGroups=td(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class fl extends ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=di}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const bi=new P,so=new Ot,ro=new Ot;class De extends fl{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Hn*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(kn*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Hn*2*Math.atan(Math.tan(kn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(bi.x,bi.y).multiplyScalar(-t/bi.z),bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(bi.x,bi.y).multiplyScalar(-t/bi.z)}getViewSize(t,e){return this.getViewBounds(t,so,ro),e.subVectors(ro,so)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(kn*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const rn=-90,an=1;class sd extends ye{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new De(rn,an,t,e);s.layers=this.layers,this.add(s);const r=new De(rn,an,t,e);r.layers=this.layers,this.add(r);const a=new De(rn,an,t,e);a.layers=this.layers,this.add(a);const o=new De(rn,an,t,e);o.layers=this.layers,this.add(o);const l=new De(rn,an,t,e);l.layers=this.layers,this.add(l);const c=new De(rn,an,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===di)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Rs)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,a),t.setRenderTarget(i,2,s),t.render(e,o),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class ml extends Te{constructor(t,e,i,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:_n,super(t,e,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class rd extends Hi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new ml(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ne}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new vt(5,5,5),r=new Ci({name:"CubemapFromEquirect",uniforms:Sn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Re,blending:wi});r.uniforms.tEquirect.value=e;const a=new $(s,r),o=e.minFilter;return e.minFilter===li&&(e.minFilter=Ne),new sd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}}const ar=new P,ad=new P,od=new Gt;class Oi{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=ar.subVectors(i,e).cross(ad.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(ar),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||od.getNormalMatrix(t),s=this.coplanarPoint(ar).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Di=new Bs,fs=new P;class fa{constructor(t=new Oi,e=new Oi,i=new Oi,s=new Oi,r=new Oi,a=new Oi){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=di){const i=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],v=s[10],m=s[11],p=s[12],S=s[13],E=s[14],x=s[15];if(i[0].setComponents(l-r,d-c,m-f,x-p).normalize(),i[1].setComponents(l+r,d+c,m+f,x+p).normalize(),i[2].setComponents(l+a,d+h,m+g,x+S).normalize(),i[3].setComponents(l-a,d-h,m-g,x-S).normalize(),i[4].setComponents(l-o,d-u,m-v,x-E).normalize(),e===di)i[5].setComponents(l+o,d+u,m+v,x+E).normalize();else if(e===Rs)i[5].setComponents(o,u,v,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(t){return Di.center.set(0,0,0),Di.radius=.7071067811865476,Di.applyMatrix4(t.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(fs.x=s.normal.x>0?t.max.x:t.min.x,fs.y=s.normal.y>0?t.max.y:t.min.y,fs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(fs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function gl(){let n=null,t=!1,e=null,i=null;function s(r,a){e(r,a),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function ld(n){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){const h=l.array,u=l.updateRanges;if(n.bindBuffer(c,o),u.length===0)n.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const v=u[f];n.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class We extends Ae{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const S=p*d-a;for(let E=0;E<c;E++){const x=E*u-r;g.push(x,-S,0),v.push(0,0,1),m.push(E/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){const E=S+c*p,x=S+c*(p+1),D=S+1+c*(p+1),R=S+1+c*p;f.push(E,x,R),f.push(x,D,R)}this.setIndex(f),this.setAttribute("position",new ae(g,3)),this.setAttribute("normal",new ae(v,3)),this.setAttribute("uv",new ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new We(t.width,t.height,t.widthSegments,t.heightSegments)}}var cd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,hd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ud=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,md=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,gd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,_d=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Sd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ed=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Md=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,wd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Td=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ad=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Rd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ld=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Id=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Pd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Dd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Nd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ud=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Od=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kd="gl_FragColor = linearToOutputTexel( gl_FragColor );",zd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Hd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Wd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$d=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Kd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,th=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,eh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ih=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ah=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,oh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ch=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,dh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ph=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_h=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Eh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mh=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,wh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Th=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ah=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ch=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ih=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ph=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Nh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Uh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Oh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Fh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wh=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Xh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,qh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Yh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$h=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Zh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Jh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,iu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,nu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,su=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ru=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,au=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ou=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cu=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,du=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,mu=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,gu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,vu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,_u=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xu=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Su=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Eu=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mu=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wu=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Au=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ru=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Lu=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Iu=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pu=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Du=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nu=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Uu=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ou=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Bu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fu=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ku=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zu=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ht={alphahash_fragment:cd,alphahash_pars_fragment:dd,alphamap_fragment:hd,alphamap_pars_fragment:ud,alphatest_fragment:pd,alphatest_pars_fragment:fd,aomap_fragment:md,aomap_pars_fragment:gd,batching_pars_vertex:vd,batching_vertex:_d,begin_vertex:yd,beginnormal_vertex:xd,bsdfs:bd,iridescence_fragment:Sd,bumpmap_pars_fragment:Ed,clipping_planes_fragment:Md,clipping_planes_pars_fragment:wd,clipping_planes_pars_vertex:Td,clipping_planes_vertex:Ad,color_fragment:Cd,color_pars_fragment:Rd,color_pars_vertex:Ld,color_vertex:Id,common:Pd,cube_uv_reflection_fragment:Dd,defaultnormal_vertex:Nd,displacementmap_pars_vertex:Ud,displacementmap_vertex:Od,emissivemap_fragment:Bd,emissivemap_pars_fragment:Fd,colorspace_fragment:kd,colorspace_pars_fragment:zd,envmap_fragment:Gd,envmap_common_pars_fragment:Hd,envmap_pars_fragment:Vd,envmap_pars_vertex:Wd,envmap_physical_pars_fragment:eh,envmap_vertex:Xd,fog_vertex:qd,fog_pars_vertex:Yd,fog_fragment:$d,fog_pars_fragment:jd,gradientmap_pars_fragment:Zd,lightmap_pars_fragment:Kd,lights_lambert_fragment:Jd,lights_lambert_pars_fragment:Qd,lights_pars_begin:th,lights_toon_fragment:ih,lights_toon_pars_fragment:nh,lights_phong_fragment:sh,lights_phong_pars_fragment:rh,lights_physical_fragment:ah,lights_physical_pars_fragment:oh,lights_fragment_begin:lh,lights_fragment_maps:ch,lights_fragment_end:dh,logdepthbuf_fragment:hh,logdepthbuf_pars_fragment:uh,logdepthbuf_pars_vertex:ph,logdepthbuf_vertex:fh,map_fragment:mh,map_pars_fragment:gh,map_particle_fragment:vh,map_particle_pars_fragment:_h,metalnessmap_fragment:yh,metalnessmap_pars_fragment:xh,morphinstance_vertex:bh,morphcolor_vertex:Sh,morphnormal_vertex:Eh,morphtarget_pars_vertex:Mh,morphtarget_vertex:wh,normal_fragment_begin:Th,normal_fragment_maps:Ah,normal_pars_fragment:Ch,normal_pars_vertex:Rh,normal_vertex:Lh,normalmap_pars_fragment:Ih,clearcoat_normal_fragment_begin:Ph,clearcoat_normal_fragment_maps:Dh,clearcoat_pars_fragment:Nh,iridescence_pars_fragment:Uh,opaque_fragment:Oh,packing:Bh,premultiplied_alpha_fragment:Fh,project_vertex:kh,dithering_fragment:zh,dithering_pars_fragment:Gh,roughnessmap_fragment:Hh,roughnessmap_pars_fragment:Vh,shadowmap_pars_fragment:Wh,shadowmap_pars_vertex:Xh,shadowmap_vertex:qh,shadowmask_pars_fragment:Yh,skinbase_vertex:$h,skinning_pars_vertex:jh,skinning_vertex:Zh,skinnormal_vertex:Kh,specularmap_fragment:Jh,specularmap_pars_fragment:Qh,tonemapping_fragment:tu,tonemapping_pars_fragment:eu,transmission_fragment:iu,transmission_pars_fragment:nu,uv_pars_fragment:su,uv_pars_vertex:ru,uv_vertex:au,worldpos_vertex:ou,background_vert:lu,background_frag:cu,backgroundCube_vert:du,backgroundCube_frag:hu,cube_vert:uu,cube_frag:pu,depth_vert:fu,depth_frag:mu,distanceRGBA_vert:gu,distanceRGBA_frag:vu,equirect_vert:_u,equirect_frag:yu,linedashed_vert:xu,linedashed_frag:bu,meshbasic_vert:Su,meshbasic_frag:Eu,meshlambert_vert:Mu,meshlambert_frag:wu,meshmatcap_vert:Tu,meshmatcap_frag:Au,meshnormal_vert:Cu,meshnormal_frag:Ru,meshphong_vert:Lu,meshphong_frag:Iu,meshphysical_vert:Pu,meshphysical_frag:Du,meshtoon_vert:Nu,meshtoon_frag:Uu,points_vert:Ou,points_frag:Bu,shadow_vert:Fu,shadow_frag:ku,sprite_vert:zu,sprite_frag:Gu},ct={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new Ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new Ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},Je={basic:{uniforms:Me([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:Me([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:Me([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:Me([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:Me([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:Me([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:Me([ct.points,ct.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:Me([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:Me([ct.common,ct.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:Me([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:Me([ct.sprite,ct.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:Me([ct.common,ct.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:Me([ct.lights,ct.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};Je.physical={uniforms:Me([Je.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new Ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new Ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new Ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};const ms={r:0,b:0,g:0},Ni=new Qe,Hu=new ce;function Vu(n,t,e,i,s,r,a){const o=new Xt(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(S){let E=S.isScene===!0?S.background:null;return E&&E.isTexture&&(E=(S.backgroundBlurriness>0?e:t).get(E)),E}function v(S){let E=!1;const x=g(S);x===null?p(o,l):x&&x.isColor&&(p(x,1),E=!0);const D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(S,E){const x=g(E);x&&(x.isCubeTexture||x.mapping===Us)?(h===void 0&&(h=new $(new vt(1,1,1),new Ci({name:"BackgroundCubeMaterial",uniforms:Sn(Je.backgroundCube.uniforms),vertexShader:Je.backgroundCube.vertexShader,fragmentShader:Je.backgroundCube.fragmentShader,side:Re,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ni.copy(E.backgroundRotation),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Hu.makeRotationFromEuler(Ni)),h.material.toneMapped=Yt.getTransfer(x.colorSpace)!==ee,(u!==x||d!==x.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=n.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new $(new We(2,2),new Ci({name:"BackgroundMaterial",uniforms:Sn(Je.background.uniforms),vertexShader:Je.background.vertexShader,fragmentShader:Je.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Yt.getTransfer(x.colorSpace)!==ee,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,E){S.getRGB(ms,pl(n)),i.buffers.color.setClear(ms.r,ms.g,ms.b,E,a)}return{getClearColor:function(){return o},setClearColor:function(S,E=1){o.set(S),l=E,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(o,l)},render:v,addToRenderList:m}}function Wu(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,a=!1;function o(y,T,L,I,k){let H=!1;const U=u(I,L,T);r!==U&&(r=U,c(r.object)),H=f(y,I,L,k),H&&g(y,I,L,k),k!==null&&t.update(k,n.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,x(y,T,L,I),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function h(y){return n.deleteVertexArray(y)}function u(y,T,L){const I=L.wireframe===!0;let k=i[y.id];k===void 0&&(k={},i[y.id]=k);let H=k[T.id];H===void 0&&(H={},k[T.id]=H);let U=H[I];return U===void 0&&(U=d(l()),H[I]=U),U}function d(y){const T=[],L=[],I=[];for(let k=0;k<e;k++)T[k]=0,L[k]=0,I[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:L,attributeDivisors:I,object:y,attributes:{},index:null}}function f(y,T,L,I){const k=r.attributes,H=T.attributes;let U=0;const X=L.getAttributes();for(const G in X)if(X[G].location>=0){const dt=k[G];let gt=H[G];if(gt===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(gt=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(gt=y.instanceColor)),dt===void 0||dt.attribute!==gt||gt&&dt.data!==gt.data)return!0;U++}return r.attributesNum!==U||r.index!==I}function g(y,T,L,I){const k={},H=T.attributes;let U=0;const X=L.getAttributes();for(const G in X)if(X[G].location>=0){let dt=H[G];dt===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(dt=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(dt=y.instanceColor));const gt={};gt.attribute=dt,dt&&dt.data&&(gt.data=dt.data),k[G]=gt,U++}r.attributes=k,r.attributesNum=U,r.index=I}function v(){const y=r.newAttributes;for(let T=0,L=y.length;T<L;T++)y[T]=0}function m(y){p(y,0)}function p(y,T){const L=r.newAttributes,I=r.enabledAttributes,k=r.attributeDivisors;L[y]=1,I[y]===0&&(n.enableVertexAttribArray(y),I[y]=1),k[y]!==T&&(n.vertexAttribDivisor(y,T),k[y]=T)}function S(){const y=r.newAttributes,T=r.enabledAttributes;for(let L=0,I=T.length;L<I;L++)T[L]!==y[L]&&(n.disableVertexAttribArray(L),T[L]=0)}function E(y,T,L,I,k,H,U){U===!0?n.vertexAttribIPointer(y,T,L,k,H):n.vertexAttribPointer(y,T,L,I,k,H)}function x(y,T,L,I){v();const k=I.attributes,H=L.getAttributes(),U=T.defaultAttributeValues;for(const X in H){const G=H[X];if(G.location>=0){let at=k[X];if(at===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(at=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(at=y.instanceColor)),at!==void 0){const dt=at.normalized,gt=at.itemSize,Dt=t.get(at);if(Dt===void 0)continue;const qt=Dt.buffer,j=Dt.type,st=Dt.bytesPerElement,bt=j===n.INT||j===n.UNSIGNED_INT||at.gpuType===oa;if(at.isInterleavedBufferAttribute){const ot=at.data,Ct=ot.stride,Rt=at.offset;if(ot.isInstancedInterleavedBuffer){for(let Nt=0;Nt<G.locationSize;Nt++)p(G.location+Nt,ot.meshPerAttribute);y.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Nt=0;Nt<G.locationSize;Nt++)m(G.location+Nt);n.bindBuffer(n.ARRAY_BUFFER,qt);for(let Nt=0;Nt<G.locationSize;Nt++)E(G.location+Nt,gt/G.locationSize,j,dt,Ct*st,(Rt+gt/G.locationSize*Nt)*st,bt)}else{if(at.isInstancedBufferAttribute){for(let ot=0;ot<G.locationSize;ot++)p(G.location+ot,at.meshPerAttribute);y.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let ot=0;ot<G.locationSize;ot++)m(G.location+ot);n.bindBuffer(n.ARRAY_BUFFER,qt);for(let ot=0;ot<G.locationSize;ot++)E(G.location+ot,gt/G.locationSize,j,dt,gt*st,gt/G.locationSize*ot*st,bt)}}else if(U!==void 0){const dt=U[X];if(dt!==void 0)switch(dt.length){case 2:n.vertexAttrib2fv(G.location,dt);break;case 3:n.vertexAttrib3fv(G.location,dt);break;case 4:n.vertexAttrib4fv(G.location,dt);break;default:n.vertexAttrib1fv(G.location,dt)}}}}S()}function D(){w();for(const y in i){const T=i[y];for(const L in T){const I=T[L];for(const k in I)h(I[k].object),delete I[k];delete T[L]}delete i[y]}}function R(y){if(i[y.id]===void 0)return;const T=i[y.id];for(const L in T){const I=T[L];for(const k in I)h(I[k].object),delete I[k];delete T[L]}delete i[y.id]}function C(y){for(const T in i){const L=i[T];if(L[y.id]===void 0)continue;const I=L[y.id];for(const k in I)h(I[k].object),delete I[k];delete L[y.id]}}function w(){_(),a=!0,r!==s&&(r=s,c(r.object))}function _(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:_,dispose:D,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:S}}function Xu(n,t,e){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function a(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,i,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*d[v];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function qu(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==$e&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const w=C===Wn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==pi&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==ci&&!w)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:x,vertexTextures:D,maxSamples:R}}function Yu(n){const t=this;let e=null,i=0,s=!1,r=!1;const a=new Oi,o=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const S=r?0:i,E=S*4;let x=p.clippingState||null;l.value=x,x=h(g,d,E,f);for(let D=0;D!==E;++D)x[D]=e[D];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=f+v*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,x=f;E!==v;++E,x+=4)a.copy(u[E]).applyMatrix4(S,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function $u(n){let t=new WeakMap;function e(a,o){return o===Cr?a.mapping=_n:o===Rr&&(a.mapping=yn),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Cr||o===Rr)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new rd(l.height);return c.fromEquirectangularTexture(n,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class vl extends fl{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const pn=4,ao=[.125,.215,.35,.446,.526,.582],ki=20,or=new vl,oo=new Xt;let lr=null,cr=0,dr=0,hr=!1;const Bi=(1+Math.sqrt(5))/2,on=1/Bi,lo=[new P(-Bi,on,0),new P(Bi,on,0),new P(-on,0,Bi),new P(on,0,Bi),new P(0,Bi,-on),new P(0,Bi,on),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class co{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){lr=this._renderer.getRenderTarget(),cr=this._renderer.getActiveCubeFace(),dr=this._renderer.getActiveMipmapLevel(),hr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=po(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(lr,cr,dr),this._renderer.xr.enabled=hr,t.scissorTest=!1,gs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===_n||t.mapping===yn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),lr=this._renderer.getRenderTarget(),cr=this._renderer.getActiveCubeFace(),dr=this._renderer.getActiveMipmapLevel(),hr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ne,minFilter:Ne,generateMipmaps:!1,type:Wn,format:$e,colorSpace:En,depthBuffer:!1},s=ho(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ho(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ju(r)),this._blurMaterial=Zu(r,t,e)}return s}_compileMaterial(t){const e=new $(this._lodPlanes[0],t);this._renderer.compile(e,or)}_sceneToCubeUV(t,e,i,s){const o=new De(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(oo),h.toneMapping=Ti,h.autoClear=!1;const f=new ue({name:"PMREM.Background",side:Re,depthWrite:!1,depthTest:!1}),g=new $(new vt,f);let v=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,v=!0):(f.color.copy(oo),v=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):S===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const E=this._cubeSize;gs(s,S*E,p>2?E:0,E,E),h.setRenderTarget(s),v&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===_n||t.mapping===yn;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=po()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uo());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new $(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;gs(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,or)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=lo[(s-r-1)%lo.length];this._blur(t,r-1,r,a,o)}e.autoClear=i}_blur(t,e,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new $(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ki-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):ki;m>ki&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ki}`);const p=[];let S=0;for(let C=0;C<ki;++C){const w=C/v,_=Math.exp(-w*w/2);p.push(_),C===0?S+=_:C<m&&(S+=2*_)}for(let C=0;C<p.length;C++)p[C]=p[C]/S;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-i;const x=this._sizeLods[s],D=3*x*(s>E-pn?s-E+pn:0),R=4*(this._cubeSize-x);gs(e,D,R,3*x,2*x),l.setRenderTarget(e),l.render(u,or)}}function ju(n){const t=[],e=[],i=[];let s=n;const r=n-pn+1+ao.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>n-pn?l=ao[a-n+pn-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,v=3,m=2,p=1,S=new Float32Array(v*g*f),E=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let R=0;R<f;R++){const C=R%3*2/3-1,w=R>2?0:-1,_=[C,w,0,C+2/3,w,0,C+2/3,w+1,0,C,w,0,C+2/3,w+1,0,C,w+1,0];S.set(_,v*g*R),E.set(d,m*g*R);const y=[R,R,R,R,R,R];x.set(y,p*g*R)}const D=new Ae;D.setAttribute("position",new Ze(S,v)),D.setAttribute("uv",new Ze(E,m)),D.setAttribute("faceIndex",new Ze(x,p)),t.push(D),s>pn&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function ho(n,t,e){const i=new Hi(n,t,e);return i.texture.mapping=Us,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function gs(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Zu(n,t,e){const i=new Float32Array(ki),s=new P(0,1,0);return new Ci({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ma(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function uo(){return new Ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ma(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function po(){return new Ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ma(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function ma(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ku(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Cr||l===Rr,h=l===_n||l===yn;if(c||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new co(n)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new co(n)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function Ju(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Bn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Qu(n,t,e,i){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],n.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const v=f[g];for(let m=0,p=v.length;m<p;m++)t.update(v[m],n.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let v=0;if(f!==null){const S=f.array;v=f.version;for(let E=0,x=S.length;E<x;E+=3){const D=S[E+0],R=S[E+1],C=S[E+2];d.push(D,R,R,C,C,D)}}else if(g!==void 0){const S=g.array;v=g.version;for(let E=0,x=S.length/3-1;E<x;E+=3){const D=E+0,R=E+1,C=E+2;d.push(D,R,R,C,C,D)}}else return;const m=new(rl(d)?ul:hl)(d,1);m.version=v;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function tp(n,t,e){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*a),e.update(f,i,1)}function c(d,f,g){g!==0&&(n.drawElementsInstanced(i,f,r,d*a,g),e.update(f,i,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,i,1)}function u(d,f,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,v,0,g);let p=0;for(let S=0;S<g;S++)p+=f[S]*v[S];e.update(p,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function ep(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function ip(n,t,e){const i=new WeakMap,s=new ne;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(o);if(d===void 0||d.count!==u){let y=function(){w.dispose(),i.delete(o),o.removeEventListener("dispose",y)};var f=y;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),v===!0&&(x=2),m===!0&&(x=3);let D=o.attributes.position.count*x,R=1;D>t.maxTextureSize&&(R=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const C=new Float32Array(D*R*4*u),w=new ol(C,D,R,u);w.type=ci,w.needsUpdate=!0;const _=x*4;for(let T=0;T<u;T++){const L=p[T],I=S[T],k=E[T],H=D*R*4*T;for(let U=0;U<L.count;U++){const X=U*_;g===!0&&(s.fromBufferAttribute(L,U),C[H+X+0]=s.x,C[H+X+1]=s.y,C[H+X+2]=s.z,C[H+X+3]=0),v===!0&&(s.fromBufferAttribute(I,U),C[H+X+4]=s.x,C[H+X+5]=s.y,C[H+X+6]=s.z,C[H+X+7]=0),m===!0&&(s.fromBufferAttribute(k,U),C[H+X+8]=s.x,C[H+X+9]=s.y,C[H+X+10]=s.z,C[H+X+11]=k.itemSize===4?s.w:1)}}d={count:u,texture:w,size:new Ot(D,R)},i.set(o,d),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function np(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class _l extends Te{constructor(t,e,i,s,r,a,o,l,c,h=mn){if(h!==mn&&h!==bn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===mn&&(i=Gi),i===void 0&&h===bn&&(i=xn),super(null,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:je,this.minFilter=l!==void 0?l:je,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const yl=new Te,fo=new _l(1,1),xl=new ol,bl=new Vc,Sl=new ml,mo=[],go=[],vo=new Float32Array(16),_o=new Float32Array(9),yo=new Float32Array(4);function wn(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=mo[s];if(r===void 0&&(r=new Float32Array(s),mo[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function ge(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ve(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Fs(n,t){let e=go[t];e===void 0&&(e=new Int32Array(t),go[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function sp(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function rp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;n.uniform2fv(this.addr,t),ve(e,t)}}function ap(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ge(e,t))return;n.uniform3fv(this.addr,t),ve(e,t)}}function op(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;n.uniform4fv(this.addr,t),ve(e,t)}}function lp(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ge(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ve(e,t)}else{if(ge(e,i))return;yo.set(i),n.uniformMatrix2fv(this.addr,!1,yo),ve(e,i)}}function cp(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ge(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ve(e,t)}else{if(ge(e,i))return;_o.set(i),n.uniformMatrix3fv(this.addr,!1,_o),ve(e,i)}}function dp(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ge(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ve(e,t)}else{if(ge(e,i))return;vo.set(i),n.uniformMatrix4fv(this.addr,!1,vo),ve(e,i)}}function hp(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function up(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;n.uniform2iv(this.addr,t),ve(e,t)}}function pp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;n.uniform3iv(this.addr,t),ve(e,t)}}function fp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;n.uniform4iv(this.addr,t),ve(e,t)}}function mp(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function gp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;n.uniform2uiv(this.addr,t),ve(e,t)}}function vp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;n.uniform3uiv(this.addr,t),ve(e,t)}}function _p(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;n.uniform4uiv(this.addr,t),ve(e,t)}}function yp(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(fo.compareFunction=sl,r=fo):r=yl,e.setTexture2D(t||r,s)}function xp(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||bl,s)}function bp(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Sl,s)}function Sp(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||xl,s)}function Ep(n){switch(n){case 5126:return sp;case 35664:return rp;case 35665:return ap;case 35666:return op;case 35674:return lp;case 35675:return cp;case 35676:return dp;case 5124:case 35670:return hp;case 35667:case 35671:return up;case 35668:case 35672:return pp;case 35669:case 35673:return fp;case 5125:return mp;case 36294:return gp;case 36295:return vp;case 36296:return _p;case 35678:case 36198:case 36298:case 36306:case 35682:return yp;case 35679:case 36299:case 36307:return xp;case 35680:case 36300:case 36308:case 36293:return bp;case 36289:case 36303:case 36311:case 36292:return Sp}}function Mp(n,t){n.uniform1fv(this.addr,t)}function wp(n,t){const e=wn(t,this.size,2);n.uniform2fv(this.addr,e)}function Tp(n,t){const e=wn(t,this.size,3);n.uniform3fv(this.addr,e)}function Ap(n,t){const e=wn(t,this.size,4);n.uniform4fv(this.addr,e)}function Cp(n,t){const e=wn(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Rp(n,t){const e=wn(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Lp(n,t){const e=wn(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Ip(n,t){n.uniform1iv(this.addr,t)}function Pp(n,t){n.uniform2iv(this.addr,t)}function Dp(n,t){n.uniform3iv(this.addr,t)}function Np(n,t){n.uniform4iv(this.addr,t)}function Up(n,t){n.uniform1uiv(this.addr,t)}function Op(n,t){n.uniform2uiv(this.addr,t)}function Bp(n,t){n.uniform3uiv(this.addr,t)}function Fp(n,t){n.uniform4uiv(this.addr,t)}function kp(n,t,e){const i=this.cache,s=t.length,r=Fs(e,s);ge(i,r)||(n.uniform1iv(this.addr,r),ve(i,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||yl,r[a])}function zp(n,t,e){const i=this.cache,s=t.length,r=Fs(e,s);ge(i,r)||(n.uniform1iv(this.addr,r),ve(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||bl,r[a])}function Gp(n,t,e){const i=this.cache,s=t.length,r=Fs(e,s);ge(i,r)||(n.uniform1iv(this.addr,r),ve(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Sl,r[a])}function Hp(n,t,e){const i=this.cache,s=t.length,r=Fs(e,s);ge(i,r)||(n.uniform1iv(this.addr,r),ve(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||xl,r[a])}function Vp(n){switch(n){case 5126:return Mp;case 35664:return wp;case 35665:return Tp;case 35666:return Ap;case 35674:return Cp;case 35675:return Rp;case 35676:return Lp;case 5124:case 35670:return Ip;case 35667:case 35671:return Pp;case 35668:case 35672:return Dp;case 35669:case 35673:return Np;case 5125:return Up;case 36294:return Op;case 36295:return Bp;case 36296:return Fp;case 35678:case 36198:case 36298:case 36306:case 35682:return kp;case 35679:case 36299:case 36307:return zp;case 35680:case 36300:case 36308:case 36293:return Gp;case 36289:case 36303:case 36311:case 36292:return Hp}}class Wp{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Ep(e.type)}}class Xp{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Vp(e.type)}}class qp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],i)}}}const ur=/(\w+)(\])?(\[|\.)?/g;function xo(n,t){n.seq.push(t),n.map[t.id]=t}function Yp(n,t,e){const i=n.name,s=i.length;for(ur.lastIndex=0;;){const r=ur.exec(i),a=ur.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){xo(e,c===void 0?new Wp(o,n,t):new Xp(o,n,t));break}else{let u=e.map[o];u===void 0&&(u=new qp(o),xo(e,u)),e=u}}}class Cs{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Yp(r,a,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&i.push(a)}return i}}function bo(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const $p=37297;let jp=0;function Zp(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const So=new Gt;function Kp(n){Yt._getMatrix(So,Yt.workingColorSpace,n);const t=`mat3( ${So.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(n)){case Os:return[t,"LinearTransferOETF"];case ee:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Eo(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Zp(n.getShaderSource(t),a)}else return s}function Jp(n,t){const e=Kp(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Qp(n,t){let e;switch(t){case ic:e="Linear";break;case nc:e="Reinhard";break;case sc:e="Cineon";break;case Xo:e="ACESFilmic";break;case ac:e="AgX";break;case oc:e="Neutral";break;case rc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const vs=new P;function tf(){Yt.getLuminanceCoefficients(vs);const n=vs.x.toFixed(4),t=vs.y.toFixed(4),e=vs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ef(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fn).join(`
`)}function nf(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function sf(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Fn(n){return n!==""}function Mo(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function wo(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const rf=/^[ \t]*#include +<([\w\d./]+)>/gm;function ra(n){return n.replace(rf,of)}const af=new Map;function of(n,t){let e=Ht[t];if(e===void 0){const i=af.get(t);if(i!==void 0)e=Ht[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return ra(e)}const lf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function To(n){return n.replace(lf,cf)}function cf(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ao(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function df(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ho?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Vo?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===oi&&(t="SHADOWMAP_TYPE_VSM"),t}function hf(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case _n:case yn:t="ENVMAP_TYPE_CUBE";break;case Us:t="ENVMAP_TYPE_CUBE_UV";break}return t}function uf(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case yn:t="ENVMAP_MODE_REFRACTION";break}return t}function pf(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Wo:t="ENVMAP_BLENDING_MULTIPLY";break;case tc:t="ENVMAP_BLENDING_MIX";break;case ec:t="ENVMAP_BLENDING_ADD";break}return t}function ff(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function mf(n,t,e,i){const s=n.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=df(e),c=hf(e),h=uf(e),u=pf(e),d=ff(e),f=ef(e),g=nf(r),v=s.createProgram();let m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Fn).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Fn).join(`
`),p.length>0&&(p+=`
`)):(m=[Ao(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fn).join(`
`),p=[Ao(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ti?"#define TONE_MAPPING":"",e.toneMapping!==Ti?Ht.tonemapping_pars_fragment:"",e.toneMapping!==Ti?Qp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,Jp("linearToOutputTexel",e.outputColorSpace),tf(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Fn).join(`
`)),a=ra(a),a=Mo(a,e),a=wo(a,e),o=ra(o),o=Mo(o,e),o=wo(o,e),a=To(a),o=To(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Fa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Fa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=S+m+a,x=S+p+o,D=bo(s,s.VERTEX_SHADER,E),R=bo(s,s.FRAGMENT_SHADER,x);s.attachShader(v,D),s.attachShader(v,R),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(T){if(n.debug.checkShaderErrors){const L=s.getProgramInfoLog(v).trim(),I=s.getShaderInfoLog(D).trim(),k=s.getShaderInfoLog(R).trim();let H=!0,U=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,D,R);else{const X=Eo(s,D,"vertex"),G=Eo(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+L+`
`+X+`
`+G)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(I===""||k==="")&&(U=!1);U&&(T.diagnostics={runnable:H,programLog:L,vertexShader:{log:I,prefix:m},fragmentShader:{log:k,prefix:p}})}s.deleteShader(D),s.deleteShader(R),w=new Cs(s,v),_=sf(s,v)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let _;this.getAttributes=function(){return _===void 0&&C(this),_};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(v,$p)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=jp++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=D,this.fragmentShader=R,this}let gf=0;class vf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new _f(t),e.set(t,i)),i}}class _f{constructor(t){this.id=gf++,this.code=t,this.usedTimes=0}}function yf(n,t,e,i,s,r,a){const o=new cl,l=new vf,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(_){return c.add(_),_===0?"uv":`uv${_}`}function m(_,y,T,L,I){const k=L.fog,H=I.geometry,U=_.isMeshStandardMaterial?L.environment:null,X=(_.isMeshStandardMaterial?e:t).get(_.envMap||U),G=X&&X.mapping===Us?X.image.height:null,at=g[_.type];_.precision!==null&&(f=s.getMaxPrecision(_.precision),f!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));const dt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,gt=dt!==void 0?dt.length:0;let Dt=0;H.morphAttributes.position!==void 0&&(Dt=1),H.morphAttributes.normal!==void 0&&(Dt=2),H.morphAttributes.color!==void 0&&(Dt=3);let qt,j,st,bt;if(at){const Jt=Je[at];qt=Jt.vertexShader,j=Jt.fragmentShader}else qt=_.vertexShader,j=_.fragmentShader,l.update(_),st=l.getVertexShaderID(_),bt=l.getFragmentShaderID(_);const ot=n.getRenderTarget(),Ct=n.state.buffers.depth.getReversed(),Rt=I.isInstancedMesh===!0,Nt=I.isBatchedMesh===!0,jt=!!_.map,Bt=!!_.matcap,se=!!X,O=!!_.aoMap,me=!!_.lightMap,Vt=!!_.bumpMap,Ft=!!_.normalMap,Tt=!!_.displacementMap,Lt=!!_.emissiveMap,yt=!!_.metalnessMap,A=!!_.roughnessMap,b=_.anisotropy>0,z=_.clearcoat>0,J=_.dispersion>0,et=_.iridescence>0,Z=_.sheen>0,q=_.transmission>0,K=b&&!!_.anisotropyMap,it=z&&!!_.clearcoatMap,It=z&&!!_.clearcoatNormalMap,nt=z&&!!_.clearcoatRoughnessMap,ht=et&&!!_.iridescenceMap,_t=et&&!!_.iridescenceThicknessMap,At=Z&&!!_.sheenColorMap,lt=Z&&!!_.sheenRoughnessMap,Wt=!!_.specularMap,Ut=!!_.specularColorMap,te=!!_.specularIntensityMap,N=q&&!!_.transmissionMap,ut=q&&!!_.thicknessMap,Y=!!_.gradientMap,Q=!!_.alphaMap,mt=_.alphaTest>0,pt=!!_.alphaHash,kt=!!_.extensions;let he=Ti;_.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(he=n.toneMapping);const xe={shaderID:at,shaderType:_.type,shaderName:_.name,vertexShader:qt,fragmentShader:j,defines:_.defines,customVertexShaderID:st,customFragmentShaderID:bt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:Nt,batchingColor:Nt&&I._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&I.instanceColor!==null,instancingMorph:Rt&&I.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ot===null?n.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:En,alphaToCoverage:!!_.alphaToCoverage,map:jt,matcap:Bt,envMap:se,envMapMode:se&&X.mapping,envMapCubeUVHeight:G,aoMap:O,lightMap:me,bumpMap:Vt,normalMap:Ft,displacementMap:d&&Tt,emissiveMap:Lt,normalMapObjectSpace:Ft&&_.normalMapType===hc,normalMapTangentSpace:Ft&&_.normalMapType===nl,metalnessMap:yt,roughnessMap:A,anisotropy:b,anisotropyMap:K,clearcoat:z,clearcoatMap:it,clearcoatNormalMap:It,clearcoatRoughnessMap:nt,dispersion:J,iridescence:et,iridescenceMap:ht,iridescenceThicknessMap:_t,sheen:Z,sheenColorMap:At,sheenRoughnessMap:lt,specularMap:Wt,specularColorMap:Ut,specularIntensityMap:te,transmission:q,transmissionMap:N,thicknessMap:ut,gradientMap:Y,opaque:_.transparent===!1&&_.blending===fn&&_.alphaToCoverage===!1,alphaMap:Q,alphaTest:mt,alphaHash:pt,combine:_.combine,mapUv:jt&&v(_.map.channel),aoMapUv:O&&v(_.aoMap.channel),lightMapUv:me&&v(_.lightMap.channel),bumpMapUv:Vt&&v(_.bumpMap.channel),normalMapUv:Ft&&v(_.normalMap.channel),displacementMapUv:Tt&&v(_.displacementMap.channel),emissiveMapUv:Lt&&v(_.emissiveMap.channel),metalnessMapUv:yt&&v(_.metalnessMap.channel),roughnessMapUv:A&&v(_.roughnessMap.channel),anisotropyMapUv:K&&v(_.anisotropyMap.channel),clearcoatMapUv:it&&v(_.clearcoatMap.channel),clearcoatNormalMapUv:It&&v(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&v(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ht&&v(_.iridescenceMap.channel),iridescenceThicknessMapUv:_t&&v(_.iridescenceThicknessMap.channel),sheenColorMapUv:At&&v(_.sheenColorMap.channel),sheenRoughnessMapUv:lt&&v(_.sheenRoughnessMap.channel),specularMapUv:Wt&&v(_.specularMap.channel),specularColorMapUv:Ut&&v(_.specularColorMap.channel),specularIntensityMapUv:te&&v(_.specularIntensityMap.channel),transmissionMapUv:N&&v(_.transmissionMap.channel),thicknessMapUv:ut&&v(_.thicknessMap.channel),alphaMapUv:Q&&v(_.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Ft||b),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!H.attributes.uv&&(jt||Q),fog:!!k,useFog:_.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ct,skinning:I.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:Dt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&T.length>0,shadowMapType:n.shadowMap.type,toneMapping:he,decodeVideoTexture:jt&&_.map.isVideoTexture===!0&&Yt.getTransfer(_.map.colorSpace)===ee,decodeVideoTextureEmissive:Lt&&_.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(_.emissiveMap.colorSpace)===ee,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===qe,flipSided:_.side===Re,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:kt&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&_.extensions.multiDraw===!0||Nt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return xe.vertexUv1s=c.has(1),xe.vertexUv2s=c.has(2),xe.vertexUv3s=c.has(3),c.clear(),xe}function p(_){const y=[];if(_.shaderID?y.push(_.shaderID):(y.push(_.customVertexShaderID),y.push(_.customFragmentShaderID)),_.defines!==void 0)for(const T in _.defines)y.push(T),y.push(_.defines[T]);return _.isRawShaderMaterial===!1&&(S(y,_),E(y,_),y.push(n.outputColorSpace)),y.push(_.customProgramCacheKey),y.join()}function S(_,y){_.push(y.precision),_.push(y.outputColorSpace),_.push(y.envMapMode),_.push(y.envMapCubeUVHeight),_.push(y.mapUv),_.push(y.alphaMapUv),_.push(y.lightMapUv),_.push(y.aoMapUv),_.push(y.bumpMapUv),_.push(y.normalMapUv),_.push(y.displacementMapUv),_.push(y.emissiveMapUv),_.push(y.metalnessMapUv),_.push(y.roughnessMapUv),_.push(y.anisotropyMapUv),_.push(y.clearcoatMapUv),_.push(y.clearcoatNormalMapUv),_.push(y.clearcoatRoughnessMapUv),_.push(y.iridescenceMapUv),_.push(y.iridescenceThicknessMapUv),_.push(y.sheenColorMapUv),_.push(y.sheenRoughnessMapUv),_.push(y.specularMapUv),_.push(y.specularColorMapUv),_.push(y.specularIntensityMapUv),_.push(y.transmissionMapUv),_.push(y.thicknessMapUv),_.push(y.combine),_.push(y.fogExp2),_.push(y.sizeAttenuation),_.push(y.morphTargetsCount),_.push(y.morphAttributeCount),_.push(y.numDirLights),_.push(y.numPointLights),_.push(y.numSpotLights),_.push(y.numSpotLightMaps),_.push(y.numHemiLights),_.push(y.numRectAreaLights),_.push(y.numDirLightShadows),_.push(y.numPointLightShadows),_.push(y.numSpotLightShadows),_.push(y.numSpotLightShadowsWithMaps),_.push(y.numLightProbes),_.push(y.shadowMapType),_.push(y.toneMapping),_.push(y.numClippingPlanes),_.push(y.numClipIntersection),_.push(y.depthPacking)}function E(_,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),_.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),_.push(o.mask)}function x(_){const y=g[_.type];let T;if(y){const L=Je[y];T=ed.clone(L.uniforms)}else T=_.uniforms;return T}function D(_,y){let T;for(let L=0,I=h.length;L<I;L++){const k=h[L];if(k.cacheKey===y){T=k,++T.usedTimes;break}}return T===void 0&&(T=new mf(n,y,_,r),h.push(T)),T}function R(_){if(--_.usedTimes===0){const y=h.indexOf(_);h[y]=h[h.length-1],h.pop(),_.destroy()}}function C(_){l.remove(_)}function w(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:D,releaseProgram:R,releaseShaderCache:C,programs:h,dispose:w}}function xf(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function bf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Co(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Ro(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(u,d,f,g,v,m){let p=n[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},n[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),t++,p}function o(u,d,f,g,v,m){const p=a(u,d,f,g,v,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,g,v,m){const p=a(u,d,f,g,v,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||bf),i.length>1&&i.sort(d||Co),s.length>1&&s.sort(d||Co)}function h(){for(let u=t,d=n.length;u<d;u++){const f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Sf(){let n=new WeakMap;function t(i,s){const r=n.get(i);let a;return r===void 0?(a=new Ro,n.set(i,[a])):s>=r.length?(a=new Ro,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function Ef(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Xt};break;case"SpotLight":e={position:new P,direction:new P,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new P,halfWidth:new P,halfHeight:new P};break}return n[t.id]=e,e}}}function Mf(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let wf=0;function Tf(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Af(n){const t=new Ef,e=Mf(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);const s=new P,r=new ce,a=new ce;function o(c){let h=0,u=0,d=0;for(let _=0;_<9;_++)i.probe[_].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,S=0,E=0,x=0,D=0,R=0,C=0;c.sort(Tf);for(let _=0,y=c.length;_<y;_++){const T=c[_],L=T.color,I=T.intensity,k=T.distance,H=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=L.r*I,u+=L.g*I,d+=L.b*I;else if(T.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(T.sh.coefficients[U],I);C++}else if(T.isDirectionalLight){const U=t.get(T);if(U.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const X=T.shadow,G=e.get(T);G.shadowIntensity=X.intensity,G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,i.directionalShadow[f]=G,i.directionalShadowMap[f]=H,i.directionalShadowMatrix[f]=T.shadow.matrix,S++}i.directional[f]=U,f++}else if(T.isSpotLight){const U=t.get(T);U.position.setFromMatrixPosition(T.matrixWorld),U.color.copy(L).multiplyScalar(I),U.distance=k,U.coneCos=Math.cos(T.angle),U.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),U.decay=T.decay,i.spot[v]=U;const X=T.shadow;if(T.map&&(i.spotLightMap[D]=T.map,D++,X.updateMatrices(T),T.castShadow&&R++),i.spotLightMatrix[v]=X.matrix,T.castShadow){const G=e.get(T);G.shadowIntensity=X.intensity,G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,i.spotShadow[v]=G,i.spotShadowMap[v]=H,x++}v++}else if(T.isRectAreaLight){const U=t.get(T);U.color.copy(L).multiplyScalar(I),U.halfWidth.set(T.width*.5,0,0),U.halfHeight.set(0,T.height*.5,0),i.rectArea[m]=U,m++}else if(T.isPointLight){const U=t.get(T);if(U.color.copy(T.color).multiplyScalar(T.intensity),U.distance=T.distance,U.decay=T.decay,T.castShadow){const X=T.shadow,G=e.get(T);G.shadowIntensity=X.intensity,G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,G.shadowCameraNear=X.camera.near,G.shadowCameraFar=X.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=H,i.pointShadowMatrix[g]=T.shadow.matrix,E++}i.point[g]=U,g++}else if(T.isHemisphereLight){const U=t.get(T);U.skyColor.copy(T.color).multiplyScalar(I),U.groundColor.copy(T.groundColor).multiplyScalar(I),i.hemi[p]=U,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ct.LTC_FLOAT_1,i.rectAreaLTC2=ct.LTC_FLOAT_2):(i.rectAreaLTC1=ct.LTC_HALF_1,i.rectAreaLTC2=ct.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const w=i.hash;(w.directionalLength!==f||w.pointLength!==g||w.spotLength!==v||w.rectAreaLength!==m||w.hemiLength!==p||w.numDirectionalShadows!==S||w.numPointShadows!==E||w.numSpotShadows!==x||w.numSpotMaps!==D||w.numLightProbes!==C)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=x+D-R,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=C,w.directionalLength=f,w.pointLength=g,w.spotLength=v,w.rectAreaLength=m,w.hemiLength=p,w.numDirectionalShadows=S,w.numPointShadows=E,w.numSpotShadows=x,w.numSpotMaps=D,w.numLightProbes=C,i.version=wf++)}function l(c,h){let u=0,d=0,f=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){const E=c[p];if(E.isDirectionalLight){const x=i.directional[u];x.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(E.isSpotLight){const x=i.spot[f];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(E.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(E.width*.5,0,0),x.halfHeight.set(0,E.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){const x=i.hemi[v];x.direction.setFromMatrixPosition(E.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:i}}function Lo(n){const t=new Af(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function a(h){i.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Cf(n){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Lo(n),t.set(s,[o])):r>=a.length?(o=new Lo(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}class Rf extends Vi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=cc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Lf extends Vi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const If=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Pf=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Df(n,t,e){let i=new fa;const s=new Ot,r=new Ot,a=new ne,o=new Rf({depthPacking:dc}),l=new Lf,c={},h=e.maxTextureSize,u={[Ai]:Re,[Re]:Ai,[qe]:qe},d=new Ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ot},radius:{value:4}},vertexShader:If,fragmentShader:Pf}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ae;g.setAttribute("position",new Ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new $(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ho;let p=this.type;this.render=function(R,C,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const _=n.getRenderTarget(),y=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),L=n.state;L.setBlending(wi),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const I=p!==oi&&this.type===oi,k=p===oi&&this.type!==oi;for(let H=0,U=R.length;H<U;H++){const X=R[H],G=X.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const at=G.getFrameExtents();if(s.multiply(at),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/at.x),s.x=r.x*at.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/at.y),s.y=r.y*at.y,G.mapSize.y=r.y)),G.map===null||I===!0||k===!0){const gt=this.type!==oi?{minFilter:je,magFilter:je}:{};G.map!==null&&G.map.dispose(),G.map=new Hi(s.x,s.y,gt),G.map.texture.name=X.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const dt=G.getViewportCount();for(let gt=0;gt<dt;gt++){const Dt=G.getViewport(gt);a.set(r.x*Dt.x,r.y*Dt.y,r.x*Dt.z,r.y*Dt.w),L.viewport(a),G.updateMatrices(X,gt),i=G.getFrustum(),x(C,w,G.camera,X,this.type)}G.isPointLightShadow!==!0&&this.type===oi&&S(G,w),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(_,y,T)};function S(R,C){const w=t.update(v);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Hi(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(C,null,w,d,v,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(C,null,w,f,v,null)}function E(R,C,w,_){let y=null;const T=w.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(T!==void 0)y=T;else if(y=w.isPointLight===!0?l:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const L=y.uuid,I=C.uuid;let k=c[L];k===void 0&&(k={},c[L]=k);let H=k[I];H===void 0&&(H=y.clone(),k[I]=H,C.addEventListener("dispose",D)),y=H}if(y.visible=C.visible,y.wireframe=C.wireframe,_===oi?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:u[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,w.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const L=n.properties.get(y);L.light=w}return y}function x(R,C,w,_,y){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===oi)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,R.matrixWorld);const I=t.update(R),k=R.material;if(Array.isArray(k)){const H=I.groups;for(let U=0,X=H.length;U<X;U++){const G=H[U],at=k[G.materialIndex];if(at&&at.visible){const dt=E(R,at,_,y);R.onBeforeShadow(n,R,C,w,I,dt,G),n.renderBufferDirect(w,null,I,dt,R,G),R.onAfterShadow(n,R,C,w,I,dt,G)}}}else if(k.visible){const H=E(R,k,_,y);R.onBeforeShadow(n,R,C,w,I,H,null),n.renderBufferDirect(w,null,I,H,R,null),R.onAfterShadow(n,R,C,w,I,H,null)}}const L=R.children;for(let I=0,k=L.length;I<k;I++)x(L[I],C,w,_,y)}function D(R){R.target.removeEventListener("dispose",D);for(const w in c){const _=c[w],y=R.target.uuid;y in _&&(_[y].dispose(),delete _[y])}}}const Nf={[br]:Sr,[Er]:Tr,[Mr]:Ar,[vn]:wr,[Sr]:br,[Tr]:Er,[Ar]:Mr,[wr]:vn};function Uf(n,t){function e(){let N=!1;const ut=new ne;let Y=null;const Q=new ne(0,0,0,0);return{setMask:function(mt){Y!==mt&&!N&&(n.colorMask(mt,mt,mt,mt),Y=mt)},setLocked:function(mt){N=mt},setClear:function(mt,pt,kt,he,xe){xe===!0&&(mt*=he,pt*=he,kt*=he),ut.set(mt,pt,kt,he),Q.equals(ut)===!1&&(n.clearColor(mt,pt,kt,he),Q.copy(ut))},reset:function(){N=!1,Y=null,Q.set(-1,0,0,0)}}}function i(){let N=!1,ut=!1,Y=null,Q=null,mt=null;return{setReversed:function(pt){if(ut!==pt){const kt=t.get("EXT_clip_control");ut?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT);const he=mt;mt=null,this.setClear(he)}ut=pt},getReversed:function(){return ut},setTest:function(pt){pt?ot(n.DEPTH_TEST):Ct(n.DEPTH_TEST)},setMask:function(pt){Y!==pt&&!N&&(n.depthMask(pt),Y=pt)},setFunc:function(pt){if(ut&&(pt=Nf[pt]),Q!==pt){switch(pt){case br:n.depthFunc(n.NEVER);break;case Sr:n.depthFunc(n.ALWAYS);break;case Er:n.depthFunc(n.LESS);break;case vn:n.depthFunc(n.LEQUAL);break;case Mr:n.depthFunc(n.EQUAL);break;case wr:n.depthFunc(n.GEQUAL);break;case Tr:n.depthFunc(n.GREATER);break;case Ar:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Q=pt}},setLocked:function(pt){N=pt},setClear:function(pt){mt!==pt&&(ut&&(pt=1-pt),n.clearDepth(pt),mt=pt)},reset:function(){N=!1,Y=null,Q=null,mt=null,ut=!1}}}function s(){let N=!1,ut=null,Y=null,Q=null,mt=null,pt=null,kt=null,he=null,xe=null;return{setTest:function(Jt){N||(Jt?ot(n.STENCIL_TEST):Ct(n.STENCIL_TEST))},setMask:function(Jt){ut!==Jt&&!N&&(n.stencilMask(Jt),ut=Jt)},setFunc:function(Jt,ke,ti){(Y!==Jt||Q!==ke||mt!==ti)&&(n.stencilFunc(Jt,ke,ti),Y=Jt,Q=ke,mt=ti)},setOp:function(Jt,ke,ti){(pt!==Jt||kt!==ke||he!==ti)&&(n.stencilOp(Jt,ke,ti),pt=Jt,kt=ke,he=ti)},setLocked:function(Jt){N=Jt},setClear:function(Jt){xe!==Jt&&(n.clearStencil(Jt),xe=Jt)},reset:function(){N=!1,ut=null,Y=null,Q=null,mt=null,pt=null,kt=null,he=null,xe=null}}}const r=new e,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,S=null,E=null,x=null,D=null,R=null,C=new Xt(0,0,0),w=0,_=!1,y=null,T=null,L=null,I=null,k=null;const H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,X=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(G)[1]),U=X>=1):G.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),U=X>=2);let at=null,dt={};const gt=n.getParameter(n.SCISSOR_BOX),Dt=n.getParameter(n.VIEWPORT),qt=new ne().fromArray(gt),j=new ne().fromArray(Dt);function st(N,ut,Y,Q){const mt=new Uint8Array(4),pt=n.createTexture();n.bindTexture(N,pt),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let kt=0;kt<Y;kt++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(ut,0,n.RGBA,1,1,Q,0,n.RGBA,n.UNSIGNED_BYTE,mt):n.texImage2D(ut+kt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,mt);return pt}const bt={};bt[n.TEXTURE_2D]=st(n.TEXTURE_2D,n.TEXTURE_2D,1),bt[n.TEXTURE_CUBE_MAP]=st(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),bt[n.TEXTURE_2D_ARRAY]=st(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),bt[n.TEXTURE_3D]=st(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ot(n.DEPTH_TEST),a.setFunc(vn),Vt(!1),Ft(Da),ot(n.CULL_FACE),O(wi);function ot(N){h[N]!==!0&&(n.enable(N),h[N]=!0)}function Ct(N){h[N]!==!1&&(n.disable(N),h[N]=!1)}function Rt(N,ut){return u[N]!==ut?(n.bindFramebuffer(N,ut),u[N]=ut,N===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ut),N===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ut),!0):!1}function Nt(N,ut){let Y=f,Q=!1;if(N){Y=d.get(ut),Y===void 0&&(Y=[],d.set(ut,Y));const mt=N.textures;if(Y.length!==mt.length||Y[0]!==n.COLOR_ATTACHMENT0){for(let pt=0,kt=mt.length;pt<kt;pt++)Y[pt]=n.COLOR_ATTACHMENT0+pt;Y.length=mt.length,Q=!0}}else Y[0]!==n.BACK&&(Y[0]=n.BACK,Q=!0);Q&&n.drawBuffers(Y)}function jt(N){return g!==N?(n.useProgram(N),g=N,!0):!1}const Bt={[Fi]:n.FUNC_ADD,[Bl]:n.FUNC_SUBTRACT,[Fl]:n.FUNC_REVERSE_SUBTRACT};Bt[kl]=n.MIN,Bt[zl]=n.MAX;const se={[Gl]:n.ZERO,[Hl]:n.ONE,[Vl]:n.SRC_COLOR,[yr]:n.SRC_ALPHA,[jl]:n.SRC_ALPHA_SATURATE,[Yl]:n.DST_COLOR,[Xl]:n.DST_ALPHA,[Wl]:n.ONE_MINUS_SRC_COLOR,[xr]:n.ONE_MINUS_SRC_ALPHA,[$l]:n.ONE_MINUS_DST_COLOR,[ql]:n.ONE_MINUS_DST_ALPHA,[Zl]:n.CONSTANT_COLOR,[Kl]:n.ONE_MINUS_CONSTANT_COLOR,[Jl]:n.CONSTANT_ALPHA,[Ql]:n.ONE_MINUS_CONSTANT_ALPHA};function O(N,ut,Y,Q,mt,pt,kt,he,xe,Jt){if(N===wi){v===!0&&(Ct(n.BLEND),v=!1);return}if(v===!1&&(ot(n.BLEND),v=!0),N!==Ol){if(N!==m||Jt!==_){if((p!==Fi||x!==Fi)&&(n.blendEquation(n.FUNC_ADD),p=Fi,x=Fi),Jt)switch(N){case fn:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Na:n.blendFunc(n.ONE,n.ONE);break;case Ua:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Oa:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case fn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Na:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ua:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Oa:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}S=null,E=null,D=null,R=null,C.set(0,0,0),w=0,m=N,_=Jt}return}mt=mt||ut,pt=pt||Y,kt=kt||Q,(ut!==p||mt!==x)&&(n.blendEquationSeparate(Bt[ut],Bt[mt]),p=ut,x=mt),(Y!==S||Q!==E||pt!==D||kt!==R)&&(n.blendFuncSeparate(se[Y],se[Q],se[pt],se[kt]),S=Y,E=Q,D=pt,R=kt),(he.equals(C)===!1||xe!==w)&&(n.blendColor(he.r,he.g,he.b,xe),C.copy(he),w=xe),m=N,_=!1}function me(N,ut){N.side===qe?Ct(n.CULL_FACE):ot(n.CULL_FACE);let Y=N.side===Re;ut&&(Y=!Y),Vt(Y),N.blending===fn&&N.transparent===!1?O(wi):O(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);const Q=N.stencilWrite;o.setTest(Q),Q&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Lt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ot(n.SAMPLE_ALPHA_TO_COVERAGE):Ct(n.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(N){y!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),y=N)}function Ft(N){N!==Nl?(ot(n.CULL_FACE),N!==T&&(N===Da?n.cullFace(n.BACK):N===Ul?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ct(n.CULL_FACE),T=N}function Tt(N){N!==L&&(U&&n.lineWidth(N),L=N)}function Lt(N,ut,Y){N?(ot(n.POLYGON_OFFSET_FILL),(I!==ut||k!==Y)&&(n.polygonOffset(ut,Y),I=ut,k=Y)):Ct(n.POLYGON_OFFSET_FILL)}function yt(N){N?ot(n.SCISSOR_TEST):Ct(n.SCISSOR_TEST)}function A(N){N===void 0&&(N=n.TEXTURE0+H-1),at!==N&&(n.activeTexture(N),at=N)}function b(N,ut,Y){Y===void 0&&(at===null?Y=n.TEXTURE0+H-1:Y=at);let Q=dt[Y];Q===void 0&&(Q={type:void 0,texture:void 0},dt[Y]=Q),(Q.type!==N||Q.texture!==ut)&&(at!==Y&&(n.activeTexture(Y),at=Y),n.bindTexture(N,ut||bt[N]),Q.type=N,Q.texture=ut)}function z(){const N=dt[at];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function J(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function et(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Z(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function q(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function K(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function it(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function It(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function nt(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ht(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _t(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function At(N){qt.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),qt.copy(N))}function lt(N){j.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),j.copy(N))}function Wt(N,ut){let Y=c.get(ut);Y===void 0&&(Y=new WeakMap,c.set(ut,Y));let Q=Y.get(N);Q===void 0&&(Q=n.getUniformBlockIndex(ut,N.name),Y.set(N,Q))}function Ut(N,ut){const Q=c.get(ut).get(N);l.get(ut)!==Q&&(n.uniformBlockBinding(ut,Q,N.__bindingPointIndex),l.set(ut,Q))}function te(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},at=null,dt={},u={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,S=null,E=null,x=null,D=null,R=null,C=new Xt(0,0,0),w=0,_=!1,y=null,T=null,L=null,I=null,k=null,qt.set(0,0,n.canvas.width,n.canvas.height),j.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ot,disable:Ct,bindFramebuffer:Rt,drawBuffers:Nt,useProgram:jt,setBlending:O,setMaterial:me,setFlipSided:Vt,setCullFace:Ft,setLineWidth:Tt,setPolygonOffset:Lt,setScissorTest:yt,activeTexture:A,bindTexture:b,unbindTexture:z,compressedTexImage2D:J,compressedTexImage3D:et,texImage2D:ht,texImage3D:_t,updateUBOMapping:Wt,uniformBlockBinding:Ut,texStorage2D:It,texStorage3D:nt,texSubImage2D:Z,texSubImage3D:q,compressedTexSubImage2D:K,compressedTexSubImage3D:it,scissor:At,viewport:lt,reset:te}}function Io(n,t,e,i){const s=Of(i);switch(e){case Zo:return n*t;case Jo:return n*t;case Qo:return n*t*2;case tl:return n*t/s.components*s.byteLength;case da:return n*t/s.components*s.byteLength;case el:return n*t*2/s.components*s.byteLength;case ha:return n*t*2/s.components*s.byteLength;case Ko:return n*t*3/s.components*s.byteLength;case $e:return n*t*4/s.components*s.byteLength;case ua:return n*t*4/s.components*s.byteLength;case Es:case Ms:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ws:case Ts:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Dr:case Ur:return Math.max(n,16)*Math.max(t,8)/4;case Pr:case Nr:return Math.max(n,8)*Math.max(t,8)/2;case Or:case Br:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Fr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case kr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case zr:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Gr:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Hr:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Vr:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Wr:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Xr:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case qr:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Yr:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case $r:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case jr:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Zr:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Kr:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Jr:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case As:case Qr:case ta:return Math.ceil(n/4)*Math.ceil(t/4)*16;case il:case ea:return Math.ceil(n/4)*Math.ceil(t/4)*8;case ia:case na:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Of(n){switch(n){case pi:case Yo:return{byteLength:1,components:1};case Gn:case $o:case Wn:return{byteLength:2,components:1};case la:case ca:return{byteLength:2,components:4};case Gi:case oa:case ci:return{byteLength:4,components:1};case jo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Bf(n,t,e,i,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ot,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,b){return f?new OffscreenCanvas(A,b):Ls("canvas")}function v(A,b,z){let J=1;const et=yt(A);if((et.width>z||et.height>z)&&(J=z/Math.max(et.width,et.height)),J<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Z=Math.floor(J*et.width),q=Math.floor(J*et.height);u===void 0&&(u=g(Z,q));const K=b?g(Z,q):u;return K.width=Z,K.height=q,K.getContext("2d").drawImage(A,0,0,Z,q),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+Z+"x"+q+")."),K}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){n.generateMipmap(A)}function S(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(A,b,z,J,et=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Z=b;if(b===n.RED&&(z===n.FLOAT&&(Z=n.R32F),z===n.HALF_FLOAT&&(Z=n.R16F),z===n.UNSIGNED_BYTE&&(Z=n.R8)),b===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(Z=n.R8UI),z===n.UNSIGNED_SHORT&&(Z=n.R16UI),z===n.UNSIGNED_INT&&(Z=n.R32UI),z===n.BYTE&&(Z=n.R8I),z===n.SHORT&&(Z=n.R16I),z===n.INT&&(Z=n.R32I)),b===n.RG&&(z===n.FLOAT&&(Z=n.RG32F),z===n.HALF_FLOAT&&(Z=n.RG16F),z===n.UNSIGNED_BYTE&&(Z=n.RG8)),b===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(Z=n.RG8UI),z===n.UNSIGNED_SHORT&&(Z=n.RG16UI),z===n.UNSIGNED_INT&&(Z=n.RG32UI),z===n.BYTE&&(Z=n.RG8I),z===n.SHORT&&(Z=n.RG16I),z===n.INT&&(Z=n.RG32I)),b===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),z===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),z===n.UNSIGNED_INT&&(Z=n.RGB32UI),z===n.BYTE&&(Z=n.RGB8I),z===n.SHORT&&(Z=n.RGB16I),z===n.INT&&(Z=n.RGB32I)),b===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),z===n.UNSIGNED_INT&&(Z=n.RGBA32UI),z===n.BYTE&&(Z=n.RGBA8I),z===n.SHORT&&(Z=n.RGBA16I),z===n.INT&&(Z=n.RGBA32I)),b===n.RGB&&z===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),b===n.RGBA){const q=et?Os:Yt.getTransfer(J);z===n.FLOAT&&(Z=n.RGBA32F),z===n.HALF_FLOAT&&(Z=n.RGBA16F),z===n.UNSIGNED_BYTE&&(Z=q===ee?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function x(A,b){let z;return A?b===null||b===Gi||b===xn?z=n.DEPTH24_STENCIL8:b===ci?z=n.DEPTH32F_STENCIL8:b===Gn&&(z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Gi||b===xn?z=n.DEPTH_COMPONENT24:b===ci?z=n.DEPTH_COMPONENT32F:b===Gn&&(z=n.DEPTH_COMPONENT16),z}function D(A,b){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==je&&A.minFilter!==Ne?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function R(A){const b=A.target;b.removeEventListener("dispose",R),w(b),b.isVideoTexture&&h.delete(b)}function C(A){const b=A.target;b.removeEventListener("dispose",C),y(b)}function w(A){const b=i.get(A);if(b.__webglInit===void 0)return;const z=A.source,J=d.get(z);if(J){const et=J[b.__cacheKey];et.usedTimes--,et.usedTimes===0&&_(A),Object.keys(J).length===0&&d.delete(z)}i.remove(A)}function _(A){const b=i.get(A);n.deleteTexture(b.__webglTexture);const z=A.source,J=d.get(z);delete J[b.__cacheKey],a.memory.textures--}function y(A){const b=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(b.__webglFramebuffer[J]))for(let et=0;et<b.__webglFramebuffer[J].length;et++)n.deleteFramebuffer(b.__webglFramebuffer[J][et]);else n.deleteFramebuffer(b.__webglFramebuffer[J]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[J])}else{if(Array.isArray(b.__webglFramebuffer))for(let J=0;J<b.__webglFramebuffer.length;J++)n.deleteFramebuffer(b.__webglFramebuffer[J]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let J=0;J<b.__webglColorRenderbuffer.length;J++)b.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[J]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const z=A.textures;for(let J=0,et=z.length;J<et;J++){const Z=i.get(z[J]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),a.memory.textures--),i.remove(z[J])}i.remove(A)}let T=0;function L(){T=0}function I(){const A=T;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),T+=1,A}function k(A){const b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function H(A,b){const z=i.get(A);if(A.isVideoTexture&&Tt(A),A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){const J=A.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(z,A,b);return}}e.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+b)}function U(A,b){const z=i.get(A);if(A.version>0&&z.__version!==A.version){j(z,A,b);return}e.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+b)}function X(A,b){const z=i.get(A);if(A.version>0&&z.__version!==A.version){j(z,A,b);return}e.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+b)}function G(A,b){const z=i.get(A);if(A.version>0&&z.__version!==A.version){st(z,A,b);return}e.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+b)}const at={[Lr]:n.REPEAT,[zi]:n.CLAMP_TO_EDGE,[Ir]:n.MIRRORED_REPEAT},dt={[je]:n.NEAREST,[lc]:n.NEAREST_MIPMAP_NEAREST,[Kn]:n.NEAREST_MIPMAP_LINEAR,[Ne]:n.LINEAR,[zs]:n.LINEAR_MIPMAP_NEAREST,[li]:n.LINEAR_MIPMAP_LINEAR},gt={[uc]:n.NEVER,[_c]:n.ALWAYS,[pc]:n.LESS,[sl]:n.LEQUAL,[fc]:n.EQUAL,[vc]:n.GEQUAL,[mc]:n.GREATER,[gc]:n.NOTEQUAL};function Dt(A,b){if(b.type===ci&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Ne||b.magFilter===zs||b.magFilter===Kn||b.magFilter===li||b.minFilter===Ne||b.minFilter===zs||b.minFilter===Kn||b.minFilter===li)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,at[b.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,at[b.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,at[b.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,dt[b.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,dt[b.minFilter]),b.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,gt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===je||b.minFilter!==Kn&&b.minFilter!==li||b.type===ci&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");n.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function qt(A,b){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",R));const J=b.source;let et=d.get(J);et===void 0&&(et={},d.set(J,et));const Z=k(b);if(Z!==A.__cacheKey){et[Z]===void 0&&(et[Z]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,z=!0),et[Z].usedTimes++;const q=et[A.__cacheKey];q!==void 0&&(et[A.__cacheKey].usedTimes--,q.usedTimes===0&&_(b)),A.__cacheKey=Z,A.__webglTexture=et[Z].texture}return z}function j(A,b,z){let J=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(J=n.TEXTURE_3D);const et=qt(A,b),Z=b.source;e.bindTexture(J,A.__webglTexture,n.TEXTURE0+z);const q=i.get(Z);if(Z.version!==q.__version||et===!0){e.activeTexture(n.TEXTURE0+z);const K=Yt.getPrimaries(Yt.workingColorSpace),it=b.colorSpace===Ei?null:Yt.getPrimaries(b.colorSpace),It=b.colorSpace===Ei||K===it?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);let nt=v(b.image,!1,s.maxTextureSize);nt=Lt(b,nt);const ht=r.convert(b.format,b.colorSpace),_t=r.convert(b.type);let At=E(b.internalFormat,ht,_t,b.colorSpace,b.isVideoTexture);Dt(J,b);let lt;const Wt=b.mipmaps,Ut=b.isVideoTexture!==!0,te=q.__version===void 0||et===!0,N=Z.dataReady,ut=D(b,nt);if(b.isDepthTexture)At=x(b.format===bn,b.type),te&&(Ut?e.texStorage2D(n.TEXTURE_2D,1,At,nt.width,nt.height):e.texImage2D(n.TEXTURE_2D,0,At,nt.width,nt.height,0,ht,_t,null));else if(b.isDataTexture)if(Wt.length>0){Ut&&te&&e.texStorage2D(n.TEXTURE_2D,ut,At,Wt[0].width,Wt[0].height);for(let Y=0,Q=Wt.length;Y<Q;Y++)lt=Wt[Y],Ut?N&&e.texSubImage2D(n.TEXTURE_2D,Y,0,0,lt.width,lt.height,ht,_t,lt.data):e.texImage2D(n.TEXTURE_2D,Y,At,lt.width,lt.height,0,ht,_t,lt.data);b.generateMipmaps=!1}else Ut?(te&&e.texStorage2D(n.TEXTURE_2D,ut,At,nt.width,nt.height),N&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,nt.width,nt.height,ht,_t,nt.data)):e.texImage2D(n.TEXTURE_2D,0,At,nt.width,nt.height,0,ht,_t,nt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ut&&te&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ut,At,Wt[0].width,Wt[0].height,nt.depth);for(let Y=0,Q=Wt.length;Y<Q;Y++)if(lt=Wt[Y],b.format!==$e)if(ht!==null)if(Ut){if(N)if(b.layerUpdates.size>0){const mt=Io(lt.width,lt.height,b.format,b.type);for(const pt of b.layerUpdates){const kt=lt.data.subarray(pt*mt/lt.data.BYTES_PER_ELEMENT,(pt+1)*mt/lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,pt,lt.width,lt.height,1,ht,kt)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,lt.width,lt.height,nt.depth,ht,lt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Y,At,lt.width,lt.height,nt.depth,0,lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?N&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,lt.width,lt.height,nt.depth,ht,_t,lt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Y,At,lt.width,lt.height,nt.depth,0,ht,_t,lt.data)}else{Ut&&te&&e.texStorage2D(n.TEXTURE_2D,ut,At,Wt[0].width,Wt[0].height);for(let Y=0,Q=Wt.length;Y<Q;Y++)lt=Wt[Y],b.format!==$e?ht!==null?Ut?N&&e.compressedTexSubImage2D(n.TEXTURE_2D,Y,0,0,lt.width,lt.height,ht,lt.data):e.compressedTexImage2D(n.TEXTURE_2D,Y,At,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?N&&e.texSubImage2D(n.TEXTURE_2D,Y,0,0,lt.width,lt.height,ht,_t,lt.data):e.texImage2D(n.TEXTURE_2D,Y,At,lt.width,lt.height,0,ht,_t,lt.data)}else if(b.isDataArrayTexture)if(Ut){if(te&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ut,At,nt.width,nt.height,nt.depth),N)if(b.layerUpdates.size>0){const Y=Io(nt.width,nt.height,b.format,b.type);for(const Q of b.layerUpdates){const mt=nt.data.subarray(Q*Y/nt.data.BYTES_PER_ELEMENT,(Q+1)*Y/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Q,nt.width,nt.height,1,ht,_t,mt)}b.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,ht,_t,nt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,At,nt.width,nt.height,nt.depth,0,ht,_t,nt.data);else if(b.isData3DTexture)Ut?(te&&e.texStorage3D(n.TEXTURE_3D,ut,At,nt.width,nt.height,nt.depth),N&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,ht,_t,nt.data)):e.texImage3D(n.TEXTURE_3D,0,At,nt.width,nt.height,nt.depth,0,ht,_t,nt.data);else if(b.isFramebufferTexture){if(te)if(Ut)e.texStorage2D(n.TEXTURE_2D,ut,At,nt.width,nt.height);else{let Y=nt.width,Q=nt.height;for(let mt=0;mt<ut;mt++)e.texImage2D(n.TEXTURE_2D,mt,At,Y,Q,0,ht,_t,null),Y>>=1,Q>>=1}}else if(Wt.length>0){if(Ut&&te){const Y=yt(Wt[0]);e.texStorage2D(n.TEXTURE_2D,ut,At,Y.width,Y.height)}for(let Y=0,Q=Wt.length;Y<Q;Y++)lt=Wt[Y],Ut?N&&e.texSubImage2D(n.TEXTURE_2D,Y,0,0,ht,_t,lt):e.texImage2D(n.TEXTURE_2D,Y,At,ht,_t,lt);b.generateMipmaps=!1}else if(Ut){if(te){const Y=yt(nt);e.texStorage2D(n.TEXTURE_2D,ut,At,Y.width,Y.height)}N&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ht,_t,nt)}else e.texImage2D(n.TEXTURE_2D,0,At,ht,_t,nt);m(b)&&p(J),q.__version=Z.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function st(A,b,z){if(b.image.length!==6)return;const J=qt(A,b),et=b.source;e.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+z);const Z=i.get(et);if(et.version!==Z.__version||J===!0){e.activeTexture(n.TEXTURE0+z);const q=Yt.getPrimaries(Yt.workingColorSpace),K=b.colorSpace===Ei?null:Yt.getPrimaries(b.colorSpace),it=b.colorSpace===Ei||q===K?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);const It=b.isCompressedTexture||b.image[0].isCompressedTexture,nt=b.image[0]&&b.image[0].isDataTexture,ht=[];for(let Q=0;Q<6;Q++)!It&&!nt?ht[Q]=v(b.image[Q],!0,s.maxCubemapSize):ht[Q]=nt?b.image[Q].image:b.image[Q],ht[Q]=Lt(b,ht[Q]);const _t=ht[0],At=r.convert(b.format,b.colorSpace),lt=r.convert(b.type),Wt=E(b.internalFormat,At,lt,b.colorSpace),Ut=b.isVideoTexture!==!0,te=Z.__version===void 0||J===!0,N=et.dataReady;let ut=D(b,_t);Dt(n.TEXTURE_CUBE_MAP,b);let Y;if(It){Ut&&te&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ut,Wt,_t.width,_t.height);for(let Q=0;Q<6;Q++){Y=ht[Q].mipmaps;for(let mt=0;mt<Y.length;mt++){const pt=Y[mt];b.format!==$e?At!==null?Ut?N&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt,0,0,pt.width,pt.height,At,pt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt,Wt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt,0,0,pt.width,pt.height,At,lt,pt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt,Wt,pt.width,pt.height,0,At,lt,pt.data)}}}else{if(Y=b.mipmaps,Ut&&te){Y.length>0&&ut++;const Q=yt(ht[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ut,Wt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(nt){Ut?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ht[Q].width,ht[Q].height,At,lt,ht[Q].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Wt,ht[Q].width,ht[Q].height,0,At,lt,ht[Q].data);for(let mt=0;mt<Y.length;mt++){const kt=Y[mt].image[Q].image;Ut?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt+1,0,0,kt.width,kt.height,At,lt,kt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt+1,Wt,kt.width,kt.height,0,At,lt,kt.data)}}else{Ut?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,At,lt,ht[Q]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Wt,At,lt,ht[Q]);for(let mt=0;mt<Y.length;mt++){const pt=Y[mt];Ut?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt+1,0,0,At,lt,pt.image[Q]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt+1,Wt,At,lt,pt.image[Q])}}}m(b)&&p(n.TEXTURE_CUBE_MAP),Z.__version=et.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function bt(A,b,z,J,et,Z){const q=r.convert(z.format,z.colorSpace),K=r.convert(z.type),it=E(z.internalFormat,q,K,z.colorSpace),It=i.get(b),nt=i.get(z);if(nt.__renderTarget=b,!It.__hasExternalTextures){const ht=Math.max(1,b.width>>Z),_t=Math.max(1,b.height>>Z);et===n.TEXTURE_3D||et===n.TEXTURE_2D_ARRAY?e.texImage3D(et,Z,it,ht,_t,b.depth,0,q,K,null):e.texImage2D(et,Z,it,ht,_t,0,q,K,null)}e.bindFramebuffer(n.FRAMEBUFFER,A),Ft(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,et,nt.__webglTexture,0,Vt(b)):(et===n.TEXTURE_2D||et>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,et,nt.__webglTexture,Z),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ot(A,b,z){if(n.bindRenderbuffer(n.RENDERBUFFER,A),b.depthBuffer){const J=b.depthTexture,et=J&&J.isDepthTexture?J.type:null,Z=x(b.stencilBuffer,et),q=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=Vt(b);Ft(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,K,Z,b.width,b.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,K,Z,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,Z,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,q,n.RENDERBUFFER,A)}else{const J=b.textures;for(let et=0;et<J.length;et++){const Z=J[et],q=r.convert(Z.format,Z.colorSpace),K=r.convert(Z.type),it=E(Z.internalFormat,q,K,Z.colorSpace),It=Vt(b);z&&Ft(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,It,it,b.width,b.height):Ft(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,It,it,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,it,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ct(A,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=i.get(b.depthTexture);J.__renderTarget=b,(!J.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),H(b.depthTexture,0);const et=J.__webglTexture,Z=Vt(b);if(b.depthTexture.format===mn)Ft(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,et,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,et,0);else if(b.depthTexture.format===bn)Ft(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,et,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Rt(A){const b=i.get(A),z=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){const J=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),J){const et=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,J.removeEventListener("dispose",et)};J.addEventListener("dispose",et),b.__depthDisposeCallback=et}b.__boundDepthTexture=J}if(A.depthTexture&&!b.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Ct(b.__webglFramebuffer,A)}else if(z){b.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[J]),b.__webglDepthbuffer[J]===void 0)b.__webglDepthbuffer[J]=n.createRenderbuffer(),ot(b.__webglDepthbuffer[J],A,!1);else{const et=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=b.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,et,n.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),ot(b.__webglDepthbuffer,A,!1);else{const J=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,et=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,et),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,et)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Nt(A,b,z){const J=i.get(A);b!==void 0&&bt(J.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&Rt(A)}function jt(A){const b=A.texture,z=i.get(A),J=i.get(b);A.addEventListener("dispose",C);const et=A.textures,Z=A.isWebGLCubeRenderTarget===!0,q=et.length>1;if(q||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=b.version,a.memory.textures++),Z){z.__webglFramebuffer=[];for(let K=0;K<6;K++)if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer[K]=[];for(let it=0;it<b.mipmaps.length;it++)z.__webglFramebuffer[K][it]=n.createFramebuffer()}else z.__webglFramebuffer[K]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer=[];for(let K=0;K<b.mipmaps.length;K++)z.__webglFramebuffer[K]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(q)for(let K=0,it=et.length;K<it;K++){const It=i.get(et[K]);It.__webglTexture===void 0&&(It.__webglTexture=n.createTexture(),a.memory.textures++)}if(A.samples>0&&Ft(A)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let K=0;K<et.length;K++){const it=et[K];z.__webglColorRenderbuffer[K]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[K]);const It=r.convert(it.format,it.colorSpace),nt=r.convert(it.type),ht=E(it.internalFormat,It,nt,it.colorSpace,A.isXRRenderTarget===!0),_t=Vt(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,_t,ht,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+K,n.RENDERBUFFER,z.__webglColorRenderbuffer[K])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),ot(z.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){e.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),Dt(n.TEXTURE_CUBE_MAP,b);for(let K=0;K<6;K++)if(b.mipmaps&&b.mipmaps.length>0)for(let it=0;it<b.mipmaps.length;it++)bt(z.__webglFramebuffer[K][it],A,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,it);else bt(z.__webglFramebuffer[K],A,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);m(b)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(q){for(let K=0,it=et.length;K<it;K++){const It=et[K],nt=i.get(It);e.bindTexture(n.TEXTURE_2D,nt.__webglTexture),Dt(n.TEXTURE_2D,It),bt(z.__webglFramebuffer,A,It,n.COLOR_ATTACHMENT0+K,n.TEXTURE_2D,0),m(It)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let K=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(K=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(K,J.__webglTexture),Dt(K,b),b.mipmaps&&b.mipmaps.length>0)for(let it=0;it<b.mipmaps.length;it++)bt(z.__webglFramebuffer[it],A,b,n.COLOR_ATTACHMENT0,K,it);else bt(z.__webglFramebuffer,A,b,n.COLOR_ATTACHMENT0,K,0);m(b)&&p(K),e.unbindTexture()}A.depthBuffer&&Rt(A)}function Bt(A){const b=A.textures;for(let z=0,J=b.length;z<J;z++){const et=b[z];if(m(et)){const Z=S(A),q=i.get(et).__webglTexture;e.bindTexture(Z,q),p(Z),e.unbindTexture()}}}const se=[],O=[];function me(A){if(A.samples>0){if(Ft(A)===!1){const b=A.textures,z=A.width,J=A.height;let et=n.COLOR_BUFFER_BIT;const Z=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=i.get(A),K=b.length>1;if(K)for(let it=0;it<b.length;it++)e.bindFramebuffer(n.FRAMEBUFFER,q.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+it,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,q.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+it,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,q.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,q.__webglFramebuffer);for(let it=0;it<b.length;it++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(et|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(et|=n.STENCIL_BUFFER_BIT)),K){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,q.__webglColorRenderbuffer[it]);const It=i.get(b[it]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,It,0)}n.blitFramebuffer(0,0,z,J,0,0,z,J,et,n.NEAREST),l===!0&&(se.length=0,O.length=0,se.push(n.COLOR_ATTACHMENT0+it),A.depthBuffer&&A.resolveDepthBuffer===!1&&(se.push(Z),O.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,O)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,se))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),K)for(let it=0;it<b.length;it++){e.bindFramebuffer(n.FRAMEBUFFER,q.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+it,n.RENDERBUFFER,q.__webglColorRenderbuffer[it]);const It=i.get(b[it]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,q.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+it,n.TEXTURE_2D,It,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,q.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const b=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function Vt(A){return Math.min(s.maxSamples,A.samples)}function Ft(A){const b=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Tt(A){const b=a.render.frame;h.get(A)!==b&&(h.set(A,b),A.update())}function Lt(A,b){const z=A.colorSpace,J=A.format,et=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==En&&z!==Ei&&(Yt.getTransfer(z)===ee?(J!==$e||et!==pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),b}function yt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=L,this.setTexture2D=H,this.setTexture2DArray=U,this.setTexture3D=X,this.setTextureCube=G,this.rebindTextures=Nt,this.setupRenderTarget=jt,this.updateRenderTargetMipmap=Bt,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=Ft}function Ff(n,t){function e(i,s=Ei){let r;const a=Yt.getTransfer(s);if(i===pi)return n.UNSIGNED_BYTE;if(i===la)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ca)return n.UNSIGNED_SHORT_5_5_5_1;if(i===jo)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Yo)return n.BYTE;if(i===$o)return n.SHORT;if(i===Gn)return n.UNSIGNED_SHORT;if(i===oa)return n.INT;if(i===Gi)return n.UNSIGNED_INT;if(i===ci)return n.FLOAT;if(i===Wn)return n.HALF_FLOAT;if(i===Zo)return n.ALPHA;if(i===Ko)return n.RGB;if(i===$e)return n.RGBA;if(i===Jo)return n.LUMINANCE;if(i===Qo)return n.LUMINANCE_ALPHA;if(i===mn)return n.DEPTH_COMPONENT;if(i===bn)return n.DEPTH_STENCIL;if(i===tl)return n.RED;if(i===da)return n.RED_INTEGER;if(i===el)return n.RG;if(i===ha)return n.RG_INTEGER;if(i===ua)return n.RGBA_INTEGER;if(i===Es||i===Ms||i===ws||i===Ts)if(a===ee)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Es)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ms)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ws)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ts)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Es)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ms)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ws)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ts)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Pr||i===Dr||i===Nr||i===Ur)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Pr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Dr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Nr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ur)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Or||i===Br||i===Fr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Or||i===Br)return a===ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Fr)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===kr||i===zr||i===Gr||i===Hr||i===Vr||i===Wr||i===Xr||i===qr||i===Yr||i===$r||i===jr||i===Zr||i===Kr||i===Jr)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===kr)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===zr)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Gr)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Hr)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Vr)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Wr)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Xr)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===qr)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Yr)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===$r)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===jr)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Zr)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Kr)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Jr)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===As||i===Qr||i===ta)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===As)return a===ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Qr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ta)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===il||i===ea||i===ia||i===na)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===As)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ea)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ia)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===na)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===xn?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class kf extends De{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class pe extends ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zf={type:"move"};class pr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new pe;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Gf=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hf=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Vf{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new Te,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Ci({vertexShader:Gf,fragmentShader:Hf,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new $(new We(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Wf extends Mn{constructor(t,e){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const v=new Vf,m=e.getContextAttributes();let p=null,S=null;const E=[],x=[],D=new Ot;let R=null;const C=new De;C.viewport=new ne;const w=new De;w.viewport=new ne;const _=[C,w],y=new kf;let T=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let st=E[j];return st===void 0&&(st=new pr,E[j]=st),st.getTargetRaySpace()},this.getControllerGrip=function(j){let st=E[j];return st===void 0&&(st=new pr,E[j]=st),st.getGripSpace()},this.getHand=function(j){let st=E[j];return st===void 0&&(st=new pr,E[j]=st),st.getHandSpace()};function I(j){const st=x.indexOf(j.inputSource);if(st===-1)return;const bt=E[st];bt!==void 0&&(bt.update(j.inputSource,j.frame,c||a),bt.dispatchEvent({type:j.type,data:j.inputSource}))}function k(){s.removeEventListener("select",I),s.removeEventListener("selectstart",I),s.removeEventListener("selectend",I),s.removeEventListener("squeeze",I),s.removeEventListener("squeezestart",I),s.removeEventListener("squeezeend",I),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",H);for(let j=0;j<E.length;j++){const st=x[j];st!==null&&(x[j]=null,E[j].disconnect(st))}T=null,L=null,v.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,S=null,qt.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",I),s.addEventListener("selectstart",I),s.addEventListener("selectend",I),s.addEventListener("squeeze",I),s.addEventListener("squeezestart",I),s.addEventListener("squeezeend",I),s.addEventListener("end",k),s.addEventListener("inputsourceschange",H),m.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){const st={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,st),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new Hi(f.framebufferWidth,f.framebufferHeight,{format:$e,type:pi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let st=null,bt=null,ot=null;m.depth&&(ot=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=m.stencil?bn:mn,bt=m.stencil?xn:Gi);const Ct={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Ct),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new Hi(d.textureWidth,d.textureHeight,{format:$e,type:pi,depthTexture:new _l(d.textureWidth,d.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),qt.setContext(s),qt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function H(j){for(let st=0;st<j.removed.length;st++){const bt=j.removed[st],ot=x.indexOf(bt);ot>=0&&(x[ot]=null,E[ot].disconnect(bt))}for(let st=0;st<j.added.length;st++){const bt=j.added[st];let ot=x.indexOf(bt);if(ot===-1){for(let Rt=0;Rt<E.length;Rt++)if(Rt>=x.length){x.push(bt),ot=Rt;break}else if(x[Rt]===null){x[Rt]=bt,ot=Rt;break}if(ot===-1)break}const Ct=E[ot];Ct&&Ct.connect(bt)}}const U=new P,X=new P;function G(j,st,bt){U.setFromMatrixPosition(st.matrixWorld),X.setFromMatrixPosition(bt.matrixWorld);const ot=U.distanceTo(X),Ct=st.projectionMatrix.elements,Rt=bt.projectionMatrix.elements,Nt=Ct[14]/(Ct[10]-1),jt=Ct[14]/(Ct[10]+1),Bt=(Ct[9]+1)/Ct[5],se=(Ct[9]-1)/Ct[5],O=(Ct[8]-1)/Ct[0],me=(Rt[8]+1)/Rt[0],Vt=Nt*O,Ft=Nt*me,Tt=ot/(-O+me),Lt=Tt*-O;if(st.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Lt),j.translateZ(Tt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ct[10]===-1)j.projectionMatrix.copy(st.projectionMatrix),j.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{const yt=Nt+Tt,A=jt+Tt,b=Vt-Lt,z=Ft+(ot-Lt),J=Bt*jt/A*yt,et=se*jt/A*yt;j.projectionMatrix.makePerspective(b,z,J,et,yt,A),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function at(j,st){st===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(st.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let st=j.near,bt=j.far;v.texture!==null&&(v.depthNear>0&&(st=v.depthNear),v.depthFar>0&&(bt=v.depthFar)),y.near=w.near=C.near=st,y.far=w.far=C.far=bt,(T!==y.near||L!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),T=y.near,L=y.far),C.layers.mask=j.layers.mask|2,w.layers.mask=j.layers.mask|4,y.layers.mask=C.layers.mask|w.layers.mask;const ot=j.parent,Ct=y.cameras;at(y,ot);for(let Rt=0;Rt<Ct.length;Rt++)at(Ct[Rt],ot);Ct.length===2?G(y,C,w):y.projectionMatrix.copy(C.projectionMatrix),dt(j,y,ot)};function dt(j,st,bt){bt===null?j.matrix.copy(st.matrixWorld):(j.matrix.copy(bt.matrixWorld),j.matrix.invert(),j.matrix.multiply(st.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(st.projectionMatrix),j.projectionMatrixInverse.copy(st.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Hn*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let gt=null;function Dt(j,st){if(h=st.getViewerPose(c||a),g=st,h!==null){const bt=h.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let ot=!1;bt.length!==y.cameras.length&&(y.cameras.length=0,ot=!0);for(let Rt=0;Rt<bt.length;Rt++){const Nt=bt[Rt];let jt=null;if(f!==null)jt=f.getViewport(Nt);else{const se=u.getViewSubImage(d,Nt);jt=se.viewport,Rt===0&&(t.setRenderTargetTextures(S,se.colorTexture,d.ignoreDepthValues?void 0:se.depthStencilTexture),t.setRenderTarget(S))}let Bt=_[Rt];Bt===void 0&&(Bt=new De,Bt.layers.enable(Rt),Bt.viewport=new ne,_[Rt]=Bt),Bt.matrix.fromArray(Nt.transform.matrix),Bt.matrix.decompose(Bt.position,Bt.quaternion,Bt.scale),Bt.projectionMatrix.fromArray(Nt.projectionMatrix),Bt.projectionMatrixInverse.copy(Bt.projectionMatrix).invert(),Bt.viewport.set(jt.x,jt.y,jt.width,jt.height),Rt===0&&(y.matrix.copy(Bt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ot===!0&&y.cameras.push(Bt)}const Ct=s.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")){const Rt=u.getDepthInformation(bt[0]);Rt&&Rt.isValid&&Rt.texture&&v.init(t,Rt,s.renderState)}}for(let bt=0;bt<E.length;bt++){const ot=x[bt],Ct=E[bt];ot!==null&&Ct!==void 0&&Ct.update(ot,st,c||a)}gt&&gt(j,st),st.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:st}),g=null}const qt=new gl;qt.setAnimationLoop(Dt),this.setAnimationLoop=function(j){gt=j},this.dispose=function(){}}}const Ui=new Qe,Xf=new ce;function qf(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,pl(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,E,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Re&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Re&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=t.get(p),E=S.envMap,x=S.envMapRotation;E&&(m.envMap.value=E,Ui.copy(x),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),m.envMapRotation.value.setFromMatrix4(Xf.makeRotationFromEuler(Ui)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=E*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Re&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Yf(n,t,e,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,E){const x=E.program;i.uniformBlockBinding(S,x)}function c(S,E){let x=s[S.id];x===void 0&&(g(S),x=h(S),s[S.id]=x,S.addEventListener("dispose",m));const D=E.program;i.updateUBOMapping(S,D);const R=t.render.frame;r[S.id]!==R&&(d(S),r[S.id]=R)}function h(S){const E=u();S.__bindingPointIndex=E;const x=n.createBuffer(),D=S.__size,R=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,D,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,x),x}function u(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const E=s[S.id],x=S.uniforms,D=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let R=0,C=x.length;R<C;R++){const w=Array.isArray(x[R])?x[R]:[x[R]];for(let _=0,y=w.length;_<y;_++){const T=w[_];if(f(T,R,_,D)===!0){const L=T.__offset,I=Array.isArray(T.value)?T.value:[T.value];let k=0;for(let H=0;H<I.length;H++){const U=I[H],X=v(U);typeof U=="number"||typeof U=="boolean"?(T.__data[0]=U,n.bufferSubData(n.UNIFORM_BUFFER,L+k,T.__data)):U.isMatrix3?(T.__data[0]=U.elements[0],T.__data[1]=U.elements[1],T.__data[2]=U.elements[2],T.__data[3]=0,T.__data[4]=U.elements[3],T.__data[5]=U.elements[4],T.__data[6]=U.elements[5],T.__data[7]=0,T.__data[8]=U.elements[6],T.__data[9]=U.elements[7],T.__data[10]=U.elements[8],T.__data[11]=0):(U.toArray(T.__data,k),k+=X.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,L,T.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(S,E,x,D){const R=S.value,C=E+"_"+x;if(D[C]===void 0)return typeof R=="number"||typeof R=="boolean"?D[C]=R:D[C]=R.clone(),!0;{const w=D[C];if(typeof R=="number"||typeof R=="boolean"){if(w!==R)return D[C]=R,!0}else if(w.equals(R)===!1)return w.copy(R),!0}return!1}function g(S){const E=S.uniforms;let x=0;const D=16;for(let C=0,w=E.length;C<w;C++){const _=Array.isArray(E[C])?E[C]:[E[C]];for(let y=0,T=_.length;y<T;y++){const L=_[y],I=Array.isArray(L.value)?L.value:[L.value];for(let k=0,H=I.length;k<H;k++){const U=I[k],X=v(U),G=x%D,at=G%X.boundary,dt=G+at;x+=at,dt!==0&&D-dt<X.storage&&(x+=D-dt),L.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=x,x+=X.storage}}}const R=x%D;return R>0&&(x+=D-R),S.__size=x,S.__cache={},this}function v(S){const E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=48,E.storage=48):S.isMatrix4?(E.boundary=64,E.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),E}function m(S){const E=S.target;E.removeEventListener("dispose",m);const x=a.indexOf(E.__bindingPointIndex);a.splice(x,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function p(){for(const S in s)n.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}class $f{constructor(t={}){const{canvas:e=Uc(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const S=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Be,this.toneMapping=Ti,this.toneMappingExposure=1;const x=this;let D=!1,R=0,C=0,w=null,_=-1,y=null;const T=new ne,L=new ne;let I=null;const k=new Xt(0);let H=0,U=e.width,X=e.height,G=1,at=null,dt=null;const gt=new ne(0,0,U,X),Dt=new ne(0,0,U,X);let qt=!1;const j=new fa;let st=!1,bt=!1;const ot=new ce,Ct=new ce,Rt=new P,Nt=new ne,jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Bt=!1;function se(){return w===null?G:1}let O=i;function me(M,B){return e.getContext(M,B)}try{const M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${aa}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",mt,!1),e.addEventListener("webglcontextcreationerror",pt,!1),O===null){const B="webgl2";if(O=me(B,M),O===null)throw me(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Vt,Ft,Tt,Lt,yt,A,b,z,J,et,Z,q,K,it,It,nt,ht,_t,At,lt,Wt,Ut,te,N;function ut(){Vt=new Ju(O),Vt.init(),Ut=new Ff(O,Vt),Ft=new qu(O,Vt,t,Ut),Tt=new Uf(O,Vt),Ft.reverseDepthBuffer&&d&&Tt.buffers.depth.setReversed(!0),Lt=new ep(O),yt=new xf,A=new Bf(O,Vt,Tt,yt,Ft,Ut,Lt),b=new $u(x),z=new Ku(x),J=new ld(O),te=new Wu(O,J),et=new Qu(O,J,Lt,te),Z=new np(O,et,J,Lt),At=new ip(O,Ft,A),nt=new Yu(yt),q=new yf(x,b,z,Vt,Ft,te,nt),K=new qf(x,yt),it=new Sf,It=new Cf(Vt),_t=new Vu(x,b,z,Tt,Z,f,l),ht=new Df(x,Z,Ft),N=new Yf(O,Lt,Ft,Tt),lt=new Xu(O,Vt,Lt),Wt=new tp(O,Vt,Lt),Lt.programs=q.programs,x.capabilities=Ft,x.extensions=Vt,x.properties=yt,x.renderLists=it,x.shadowMap=ht,x.state=Tt,x.info=Lt}ut();const Y=new Wf(x,O);this.xr=Y,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const M=Vt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Vt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(M){M!==void 0&&(G=M,this.setSize(U,X,!1))},this.getSize=function(M){return M.set(U,X)},this.setSize=function(M,B,V=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=M,X=B,e.width=Math.floor(M*G),e.height=Math.floor(B*G),V===!0&&(e.style.width=M+"px",e.style.height=B+"px"),this.setViewport(0,0,M,B)},this.getDrawingBufferSize=function(M){return M.set(U*G,X*G).floor()},this.setDrawingBufferSize=function(M,B,V){U=M,X=B,G=V,e.width=Math.floor(M*V),e.height=Math.floor(B*V),this.setViewport(0,0,M,B)},this.getCurrentViewport=function(M){return M.copy(T)},this.getViewport=function(M){return M.copy(gt)},this.setViewport=function(M,B,V,W){M.isVector4?gt.set(M.x,M.y,M.z,M.w):gt.set(M,B,V,W),Tt.viewport(T.copy(gt).multiplyScalar(G).round())},this.getScissor=function(M){return M.copy(Dt)},this.setScissor=function(M,B,V,W){M.isVector4?Dt.set(M.x,M.y,M.z,M.w):Dt.set(M,B,V,W),Tt.scissor(L.copy(Dt).multiplyScalar(G).round())},this.getScissorTest=function(){return qt},this.setScissorTest=function(M){Tt.setScissorTest(qt=M)},this.setOpaqueSort=function(M){at=M},this.setTransparentSort=function(M){dt=M},this.getClearColor=function(M){return M.copy(_t.getClearColor())},this.setClearColor=function(){_t.setClearColor.apply(_t,arguments)},this.getClearAlpha=function(){return _t.getClearAlpha()},this.setClearAlpha=function(){_t.setClearAlpha.apply(_t,arguments)},this.clear=function(M=!0,B=!0,V=!0){let W=0;if(M){let F=!1;if(w!==null){const rt=w.texture.format;F=rt===ua||rt===ha||rt===da}if(F){const rt=w.texture.type,ft=rt===pi||rt===Gi||rt===Gn||rt===xn||rt===la||rt===ca,St=_t.getClearColor(),Et=_t.getClearAlpha(),Pt=St.r,zt=St.g,Mt=St.b;ft?(g[0]=Pt,g[1]=zt,g[2]=Mt,g[3]=Et,O.clearBufferuiv(O.COLOR,0,g)):(v[0]=Pt,v[1]=zt,v[2]=Mt,v[3]=Et,O.clearBufferiv(O.COLOR,0,v))}else W|=O.COLOR_BUFFER_BIT}B&&(W|=O.DEPTH_BUFFER_BIT),V&&(W|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",mt,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),it.dispose(),It.dispose(),yt.dispose(),b.dispose(),z.dispose(),Z.dispose(),te.dispose(),N.dispose(),q.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",wa),Y.removeEventListener("sessionend",Ta),Ri.stop()};function Q(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const M=Lt.autoReset,B=ht.enabled,V=ht.autoUpdate,W=ht.needsUpdate,F=ht.type;ut(),Lt.autoReset=M,ht.enabled=B,ht.autoUpdate=V,ht.needsUpdate=W,ht.type=F}function pt(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function kt(M){const B=M.target;B.removeEventListener("dispose",kt),he(B)}function he(M){xe(M),yt.remove(M)}function xe(M){const B=yt.get(M).programs;B!==void 0&&(B.forEach(function(V){q.releaseProgram(V)}),M.isShaderMaterial&&q.releaseShaderCache(M))}this.renderBufferDirect=function(M,B,V,W,F,rt){B===null&&(B=jt);const ft=F.isMesh&&F.matrixWorld.determinant()<0,St=Al(M,B,V,W,F);Tt.setMaterial(W,ft);let Et=V.index,Pt=1;if(W.wireframe===!0){if(Et=et.getWireframeAttribute(V),Et===void 0)return;Pt=2}const zt=V.drawRange,Mt=V.attributes.position;let $t=zt.start*Pt,re=(zt.start+zt.count)*Pt;rt!==null&&($t=Math.max($t,rt.start*Pt),re=Math.min(re,(rt.start+rt.count)*Pt)),Et!==null?($t=Math.max($t,0),re=Math.min(re,Et.count)):Mt!=null&&($t=Math.max($t,0),re=Math.min(re,Mt.count));const oe=re-$t;if(oe<0||oe===1/0)return;te.setup(F,W,St,V,Et);let Ce,Zt=lt;if(Et!==null&&(Ce=J.get(Et),Zt=Wt,Zt.setIndex(Ce)),F.isMesh)W.wireframe===!0?(Tt.setLineWidth(W.wireframeLinewidth*se()),Zt.setMode(O.LINES)):Zt.setMode(O.TRIANGLES);else if(F.isLine){let wt=W.linewidth;wt===void 0&&(wt=1),Tt.setLineWidth(wt*se()),F.isLineSegments?Zt.setMode(O.LINES):F.isLineLoop?Zt.setMode(O.LINE_LOOP):Zt.setMode(O.LINE_STRIP)}else F.isPoints?Zt.setMode(O.POINTS):F.isSprite&&Zt.setMode(O.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Zt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Vt.get("WEBGL_multi_draw"))Zt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const wt=F._multiDrawStarts,ei=F._multiDrawCounts,Kt=F._multiDrawCount,ze=Et?J.get(Et).bytesPerElement:1,Xi=yt.get(W).currentProgram.getUniforms();for(let Le=0;Le<Kt;Le++)Xi.setValue(O,"_gl_DrawID",Le),Zt.render(wt[Le]/ze,ei[Le])}else if(F.isInstancedMesh)Zt.renderInstances($t,oe,F.count);else if(V.isInstancedBufferGeometry){const wt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,ei=Math.min(V.instanceCount,wt);Zt.renderInstances($t,oe,ei)}else Zt.render($t,oe)};function Jt(M,B,V){M.transparent===!0&&M.side===qe&&M.forceSinglePass===!1?(M.side=Re,M.needsUpdate=!0,jn(M,B,V),M.side=Ai,M.needsUpdate=!0,jn(M,B,V),M.side=qe):jn(M,B,V)}this.compile=function(M,B,V=null){V===null&&(V=M),p=It.get(V),p.init(B),E.push(p),V.traverseVisible(function(F){F.isLight&&F.layers.test(B.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),M!==V&&M.traverseVisible(function(F){F.isLight&&F.layers.test(B.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const W=new Set;return M.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const rt=F.material;if(rt)if(Array.isArray(rt))for(let ft=0;ft<rt.length;ft++){const St=rt[ft];Jt(St,V,F),W.add(St)}else Jt(rt,V,F),W.add(rt)}),E.pop(),p=null,W},this.compileAsync=function(M,B,V=null){const W=this.compile(M,B,V);return new Promise(F=>{function rt(){if(W.forEach(function(ft){yt.get(ft).currentProgram.isReady()&&W.delete(ft)}),W.size===0){F(M);return}setTimeout(rt,10)}Vt.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let ke=null;function ti(M){ke&&ke(M)}function wa(){Ri.stop()}function Ta(){Ri.start()}const Ri=new gl;Ri.setAnimationLoop(ti),typeof self<"u"&&Ri.setContext(self),this.setAnimationLoop=function(M){ke=M,Y.setAnimationLoop(M),M===null?Ri.stop():Ri.start()},Y.addEventListener("sessionstart",wa),Y.addEventListener("sessionend",Ta),this.render=function(M,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(B),B=Y.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,B,w),p=It.get(M,E.length),p.init(B),E.push(p),Ct.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),j.setFromProjectionMatrix(Ct),bt=this.localClippingEnabled,st=nt.init(this.clippingPlanes,bt),m=it.get(M,S.length),m.init(),S.push(m),Y.enabled===!0&&Y.isPresenting===!0){const rt=x.xr.getDepthSensingMesh();rt!==null&&ks(rt,B,-1/0,x.sortObjects)}ks(M,B,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(at,dt),Bt=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Bt&&_t.addToRenderList(m,M),this.info.render.frame++,st===!0&&nt.beginShadows();const V=p.state.shadowsArray;ht.render(V,M,B),st===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,F=m.transmissive;if(p.setupLights(),B.isArrayCamera){const rt=B.cameras;if(F.length>0)for(let ft=0,St=rt.length;ft<St;ft++){const Et=rt[ft];Ca(W,F,M,Et)}Bt&&_t.render(M);for(let ft=0,St=rt.length;ft<St;ft++){const Et=rt[ft];Aa(m,M,Et,Et.viewport)}}else F.length>0&&Ca(W,F,M,B),Bt&&_t.render(M),Aa(m,M,B);w!==null&&(A.updateMultisampleRenderTarget(w),A.updateRenderTargetMipmap(w)),M.isScene===!0&&M.onAfterRender(x,M,B),te.resetDefaultState(),_=-1,y=null,E.pop(),E.length>0?(p=E[E.length-1],st===!0&&nt.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function ks(M,B,V,W){if(M.visible===!1)return;if(M.layers.test(B.layers)){if(M.isGroup)V=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(B);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||j.intersectsSprite(M)){W&&Nt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ct);const ft=Z.update(M),St=M.material;St.visible&&m.push(M,ft,St,V,Nt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||j.intersectsObject(M))){const ft=Z.update(M),St=M.material;if(W&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Nt.copy(M.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),Nt.copy(ft.boundingSphere.center)),Nt.applyMatrix4(M.matrixWorld).applyMatrix4(Ct)),Array.isArray(St)){const Et=ft.groups;for(let Pt=0,zt=Et.length;Pt<zt;Pt++){const Mt=Et[Pt],$t=St[Mt.materialIndex];$t&&$t.visible&&m.push(M,ft,$t,V,Nt.z,Mt)}}else St.visible&&m.push(M,ft,St,V,Nt.z,null)}}const rt=M.children;for(let ft=0,St=rt.length;ft<St;ft++)ks(rt[ft],B,V,W)}function Aa(M,B,V,W){const F=M.opaque,rt=M.transmissive,ft=M.transparent;p.setupLightsView(V),st===!0&&nt.setGlobalState(x.clippingPlanes,V),W&&Tt.viewport(T.copy(W)),F.length>0&&$n(F,B,V),rt.length>0&&$n(rt,B,V),ft.length>0&&$n(ft,B,V),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function Ca(M,B,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new Hi(1,1,{generateMipmaps:!0,type:Vt.has("EXT_color_buffer_half_float")||Vt.has("EXT_color_buffer_float")?Wn:pi,minFilter:li,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));const rt=p.state.transmissionRenderTarget[W.id],ft=W.viewport||T;rt.setSize(ft.z,ft.w);const St=x.getRenderTarget();x.setRenderTarget(rt),x.getClearColor(k),H=x.getClearAlpha(),H<1&&x.setClearColor(16777215,.5),x.clear(),Bt&&_t.render(V);const Et=x.toneMapping;x.toneMapping=Ti;const Pt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),st===!0&&nt.setGlobalState(x.clippingPlanes,W),$n(M,V,W),A.updateMultisampleRenderTarget(rt),A.updateRenderTargetMipmap(rt),Vt.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let Mt=0,$t=B.length;Mt<$t;Mt++){const re=B[Mt],oe=re.object,Ce=re.geometry,Zt=re.material,wt=re.group;if(Zt.side===qe&&oe.layers.test(W.layers)){const ei=Zt.side;Zt.side=Re,Zt.needsUpdate=!0,Ra(oe,V,W,Ce,Zt,wt),Zt.side=ei,Zt.needsUpdate=!0,zt=!0}}zt===!0&&(A.updateMultisampleRenderTarget(rt),A.updateRenderTargetMipmap(rt))}x.setRenderTarget(St),x.setClearColor(k,H),Pt!==void 0&&(W.viewport=Pt),x.toneMapping=Et}function $n(M,B,V){const W=B.isScene===!0?B.overrideMaterial:null;for(let F=0,rt=M.length;F<rt;F++){const ft=M[F],St=ft.object,Et=ft.geometry,Pt=W===null?ft.material:W,zt=ft.group;St.layers.test(V.layers)&&Ra(St,B,V,Et,Pt,zt)}}function Ra(M,B,V,W,F,rt){M.onBeforeRender(x,B,V,W,F,rt),M.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),F.onBeforeRender(x,B,V,W,M,rt),F.transparent===!0&&F.side===qe&&F.forceSinglePass===!1?(F.side=Re,F.needsUpdate=!0,x.renderBufferDirect(V,B,W,F,M,rt),F.side=Ai,F.needsUpdate=!0,x.renderBufferDirect(V,B,W,F,M,rt),F.side=qe):x.renderBufferDirect(V,B,W,F,M,rt),M.onAfterRender(x,B,V,W,F,rt)}function jn(M,B,V){B.isScene!==!0&&(B=jt);const W=yt.get(M),F=p.state.lights,rt=p.state.shadowsArray,ft=F.state.version,St=q.getParameters(M,F.state,rt,B,V),Et=q.getProgramCacheKey(St);let Pt=W.programs;W.environment=M.isMeshStandardMaterial?B.environment:null,W.fog=B.fog,W.envMap=(M.isMeshStandardMaterial?z:b).get(M.envMap||W.environment),W.envMapRotation=W.environment!==null&&M.envMap===null?B.environmentRotation:M.envMapRotation,Pt===void 0&&(M.addEventListener("dispose",kt),Pt=new Map,W.programs=Pt);let zt=Pt.get(Et);if(zt!==void 0){if(W.currentProgram===zt&&W.lightsStateVersion===ft)return Ia(M,St),zt}else St.uniforms=q.getUniforms(M),M.onBeforeCompile(St,x),zt=q.acquireProgram(St,Et),Pt.set(Et,zt),W.uniforms=St.uniforms;const Mt=W.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Mt.clippingPlanes=nt.uniform),Ia(M,St),W.needsLights=Rl(M),W.lightsStateVersion=ft,W.needsLights&&(Mt.ambientLightColor.value=F.state.ambient,Mt.lightProbe.value=F.state.probe,Mt.directionalLights.value=F.state.directional,Mt.directionalLightShadows.value=F.state.directionalShadow,Mt.spotLights.value=F.state.spot,Mt.spotLightShadows.value=F.state.spotShadow,Mt.rectAreaLights.value=F.state.rectArea,Mt.ltc_1.value=F.state.rectAreaLTC1,Mt.ltc_2.value=F.state.rectAreaLTC2,Mt.pointLights.value=F.state.point,Mt.pointLightShadows.value=F.state.pointShadow,Mt.hemisphereLights.value=F.state.hemi,Mt.directionalShadowMap.value=F.state.directionalShadowMap,Mt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Mt.spotShadowMap.value=F.state.spotShadowMap,Mt.spotLightMatrix.value=F.state.spotLightMatrix,Mt.spotLightMap.value=F.state.spotLightMap,Mt.pointShadowMap.value=F.state.pointShadowMap,Mt.pointShadowMatrix.value=F.state.pointShadowMatrix),W.currentProgram=zt,W.uniformsList=null,zt}function La(M){if(M.uniformsList===null){const B=M.currentProgram.getUniforms();M.uniformsList=Cs.seqWithValue(B.seq,M.uniforms)}return M.uniformsList}function Ia(M,B){const V=yt.get(M);V.outputColorSpace=B.outputColorSpace,V.batching=B.batching,V.batchingColor=B.batchingColor,V.instancing=B.instancing,V.instancingColor=B.instancingColor,V.instancingMorph=B.instancingMorph,V.skinning=B.skinning,V.morphTargets=B.morphTargets,V.morphNormals=B.morphNormals,V.morphColors=B.morphColors,V.morphTargetsCount=B.morphTargetsCount,V.numClippingPlanes=B.numClippingPlanes,V.numIntersection=B.numClipIntersection,V.vertexAlphas=B.vertexAlphas,V.vertexTangents=B.vertexTangents,V.toneMapping=B.toneMapping}function Al(M,B,V,W,F){B.isScene!==!0&&(B=jt),A.resetTextureUnits();const rt=B.fog,ft=W.isMeshStandardMaterial?B.environment:null,St=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:En,Et=(W.isMeshStandardMaterial?z:b).get(W.envMap||ft),Pt=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,zt=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Mt=!!V.morphAttributes.position,$t=!!V.morphAttributes.normal,re=!!V.morphAttributes.color;let oe=Ti;W.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(oe=x.toneMapping);const Ce=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Zt=Ce!==void 0?Ce.length:0,wt=yt.get(W),ei=p.state.lights;if(st===!0&&(bt===!0||M!==y)){const Ue=M===y&&W.id===_;nt.setState(W,M,Ue)}let Kt=!1;W.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==ei.state.version||wt.outputColorSpace!==St||F.isBatchedMesh&&wt.batching===!1||!F.isBatchedMesh&&wt.batching===!0||F.isBatchedMesh&&wt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&wt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&wt.instancing===!1||!F.isInstancedMesh&&wt.instancing===!0||F.isSkinnedMesh&&wt.skinning===!1||!F.isSkinnedMesh&&wt.skinning===!0||F.isInstancedMesh&&wt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&wt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&wt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&wt.instancingMorph===!1&&F.morphTexture!==null||wt.envMap!==Et||W.fog===!0&&wt.fog!==rt||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==nt.numPlanes||wt.numIntersection!==nt.numIntersection)||wt.vertexAlphas!==Pt||wt.vertexTangents!==zt||wt.morphTargets!==Mt||wt.morphNormals!==$t||wt.morphColors!==re||wt.toneMapping!==oe||wt.morphTargetsCount!==Zt)&&(Kt=!0):(Kt=!0,wt.__version=W.version);let ze=wt.currentProgram;Kt===!0&&(ze=jn(W,B,F));let Xi=!1,Le=!1,Tn=!1;const le=ze.getUniforms(),Ke=wt.uniforms;if(Tt.useProgram(ze.program)&&(Xi=!0,Le=!0,Tn=!0),W.id!==_&&(_=W.id,Le=!0),Xi||y!==M){Tt.buffers.depth.getReversed()?(ot.copy(M.projectionMatrix),Bc(ot),Fc(ot),le.setValue(O,"projectionMatrix",ot)):le.setValue(O,"projectionMatrix",M.projectionMatrix),le.setValue(O,"viewMatrix",M.matrixWorldInverse);const fi=le.map.cameraPosition;fi!==void 0&&fi.setValue(O,Rt.setFromMatrixPosition(M.matrixWorld)),Ft.logarithmicDepthBuffer&&le.setValue(O,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&le.setValue(O,"isOrthographic",M.isOrthographicCamera===!0),y!==M&&(y=M,Le=!0,Tn=!0)}if(F.isSkinnedMesh){le.setOptional(O,F,"bindMatrix"),le.setOptional(O,F,"bindMatrixInverse");const Ue=F.skeleton;Ue&&(Ue.boneTexture===null&&Ue.computeBoneTexture(),le.setValue(O,"boneTexture",Ue.boneTexture,A))}F.isBatchedMesh&&(le.setOptional(O,F,"batchingTexture"),le.setValue(O,"batchingTexture",F._matricesTexture,A),le.setOptional(O,F,"batchingIdTexture"),le.setValue(O,"batchingIdTexture",F._indirectTexture,A),le.setOptional(O,F,"batchingColorTexture"),F._colorsTexture!==null&&le.setValue(O,"batchingColorTexture",F._colorsTexture,A));const An=V.morphAttributes;if((An.position!==void 0||An.normal!==void 0||An.color!==void 0)&&At.update(F,V,ze),(Le||wt.receiveShadow!==F.receiveShadow)&&(wt.receiveShadow=F.receiveShadow,le.setValue(O,"receiveShadow",F.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Ke.envMap.value=Et,Ke.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&B.environment!==null&&(Ke.envMapIntensity.value=B.environmentIntensity),Le&&(le.setValue(O,"toneMappingExposure",x.toneMappingExposure),wt.needsLights&&Cl(Ke,Tn),rt&&W.fog===!0&&K.refreshFogUniforms(Ke,rt),K.refreshMaterialUniforms(Ke,W,G,X,p.state.transmissionRenderTarget[M.id]),Cs.upload(O,La(wt),Ke,A)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Cs.upload(O,La(wt),Ke,A),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&le.setValue(O,"center",F.center),le.setValue(O,"modelViewMatrix",F.modelViewMatrix),le.setValue(O,"normalMatrix",F.normalMatrix),le.setValue(O,"modelMatrix",F.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Ue=W.uniformsGroups;for(let fi=0,mi=Ue.length;fi<mi;fi++){const Pa=Ue[fi];N.update(Pa,ze),N.bind(Pa,ze)}}return ze}function Cl(M,B){M.ambientLightColor.needsUpdate=B,M.lightProbe.needsUpdate=B,M.directionalLights.needsUpdate=B,M.directionalLightShadows.needsUpdate=B,M.pointLights.needsUpdate=B,M.pointLightShadows.needsUpdate=B,M.spotLights.needsUpdate=B,M.spotLightShadows.needsUpdate=B,M.rectAreaLights.needsUpdate=B,M.hemisphereLights.needsUpdate=B}function Rl(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(M,B,V){yt.get(M.texture).__webglTexture=B,yt.get(M.depthTexture).__webglTexture=V;const W=yt.get(M);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||Vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,B){const V=yt.get(M);V.__webglFramebuffer=B,V.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(M,B=0,V=0){w=M,R=B,C=V;let W=!0,F=null,rt=!1,ft=!1;if(M){const Et=yt.get(M);if(Et.__useDefaultFramebuffer!==void 0)Tt.bindFramebuffer(O.FRAMEBUFFER,null),W=!1;else if(Et.__webglFramebuffer===void 0)A.setupRenderTarget(M);else if(Et.__hasExternalTextures)A.rebindTextures(M,yt.get(M.texture).__webglTexture,yt.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Mt=M.depthTexture;if(Et.__boundDepthTexture!==Mt){if(Mt!==null&&yt.has(Mt)&&(M.width!==Mt.image.width||M.height!==Mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(M)}}const Pt=M.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(ft=!0);const zt=yt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(zt[B])?F=zt[B][V]:F=zt[B],rt=!0):M.samples>0&&A.useMultisampledRTT(M)===!1?F=yt.get(M).__webglMultisampledFramebuffer:Array.isArray(zt)?F=zt[V]:F=zt,T.copy(M.viewport),L.copy(M.scissor),I=M.scissorTest}else T.copy(gt).multiplyScalar(G).floor(),L.copy(Dt).multiplyScalar(G).floor(),I=qt;if(Tt.bindFramebuffer(O.FRAMEBUFFER,F)&&W&&Tt.drawBuffers(M,F),Tt.viewport(T),Tt.scissor(L),Tt.setScissorTest(I),rt){const Et=yt.get(M.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+B,Et.__webglTexture,V)}else if(ft){const Et=yt.get(M.texture),Pt=B||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Et.__webglTexture,V||0,Pt)}_=-1},this.readRenderTargetPixels=function(M,B,V,W,F,rt,ft){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=yt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ft!==void 0&&(St=St[ft]),St){Tt.bindFramebuffer(O.FRAMEBUFFER,St);try{const Et=M.texture,Pt=Et.format,zt=Et.type;if(!Ft.textureFormatReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ft.textureTypeReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=M.width-W&&V>=0&&V<=M.height-F&&O.readPixels(B,V,W,F,Ut.convert(Pt),Ut.convert(zt),rt)}finally{const Et=w!==null?yt.get(w).__webglFramebuffer:null;Tt.bindFramebuffer(O.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(M,B,V,W,F,rt,ft){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=yt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ft!==void 0&&(St=St[ft]),St){const Et=M.texture,Pt=Et.format,zt=Et.type;if(!Ft.textureFormatReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ft.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=M.width-W&&V>=0&&V<=M.height-F){Tt.bindFramebuffer(O.FRAMEBUFFER,St);const Mt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Mt),O.bufferData(O.PIXEL_PACK_BUFFER,rt.byteLength,O.STREAM_READ),O.readPixels(B,V,W,F,Ut.convert(Pt),Ut.convert(zt),0);const $t=w!==null?yt.get(w).__webglFramebuffer:null;Tt.bindFramebuffer(O.FRAMEBUFFER,$t);const re=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Oc(O,re,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Mt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,rt),O.deleteBuffer(Mt),O.deleteSync(re),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,B=null,V=0){M.isTexture!==!0&&(Bn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,M=arguments[1]);const W=Math.pow(2,-V),F=Math.floor(M.image.width*W),rt=Math.floor(M.image.height*W),ft=B!==null?B.x:0,St=B!==null?B.y:0;A.setTexture2D(M,0),O.copyTexSubImage2D(O.TEXTURE_2D,V,0,0,ft,St,F,rt),Tt.unbindTexture()},this.copyTextureToTexture=function(M,B,V=null,W=null,F=0){M.isTexture!==!0&&(Bn("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,M=arguments[1],B=arguments[2],F=arguments[3]||0,V=null);let rt,ft,St,Et,Pt,zt,Mt,$t,re;const oe=M.isCompressedTexture?M.mipmaps[F]:M.image;V!==null?(rt=V.max.x-V.min.x,ft=V.max.y-V.min.y,St=V.isBox3?V.max.z-V.min.z:1,Et=V.min.x,Pt=V.min.y,zt=V.isBox3?V.min.z:0):(rt=oe.width,ft=oe.height,St=oe.depth||1,Et=0,Pt=0,zt=0),W!==null?(Mt=W.x,$t=W.y,re=W.z):(Mt=0,$t=0,re=0);const Ce=Ut.convert(B.format),Zt=Ut.convert(B.type);let wt;B.isData3DTexture?(A.setTexture3D(B,0),wt=O.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(A.setTexture2DArray(B,0),wt=O.TEXTURE_2D_ARRAY):(A.setTexture2D(B,0),wt=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,B.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,B.unpackAlignment);const ei=O.getParameter(O.UNPACK_ROW_LENGTH),Kt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),ze=O.getParameter(O.UNPACK_SKIP_PIXELS),Xi=O.getParameter(O.UNPACK_SKIP_ROWS),Le=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,oe.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,oe.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Et),O.pixelStorei(O.UNPACK_SKIP_ROWS,Pt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,zt);const Tn=M.isDataArrayTexture||M.isData3DTexture,le=B.isDataArrayTexture||B.isData3DTexture;if(M.isRenderTargetTexture||M.isDepthTexture){const Ke=yt.get(M),An=yt.get(B),Ue=yt.get(Ke.__renderTarget),fi=yt.get(An.__renderTarget);Tt.bindFramebuffer(O.READ_FRAMEBUFFER,Ue.__webglFramebuffer),Tt.bindFramebuffer(O.DRAW_FRAMEBUFFER,fi.__webglFramebuffer);for(let mi=0;mi<St;mi++)Tn&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,yt.get(M).__webglTexture,F,zt+mi),M.isDepthTexture?(le&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,yt.get(B).__webglTexture,F,re+mi),O.blitFramebuffer(Et,Pt,rt,ft,Mt,$t,rt,ft,O.DEPTH_BUFFER_BIT,O.NEAREST)):le?O.copyTexSubImage3D(wt,F,Mt,$t,re+mi,Et,Pt,rt,ft):O.copyTexSubImage2D(wt,F,Mt,$t,re+mi,Et,Pt,rt,ft);Tt.bindFramebuffer(O.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else le?M.isDataTexture||M.isData3DTexture?O.texSubImage3D(wt,F,Mt,$t,re,rt,ft,St,Ce,Zt,oe.data):B.isCompressedArrayTexture?O.compressedTexSubImage3D(wt,F,Mt,$t,re,rt,ft,St,Ce,oe.data):O.texSubImage3D(wt,F,Mt,$t,re,rt,ft,St,Ce,Zt,oe):M.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,F,Mt,$t,rt,ft,Ce,Zt,oe.data):M.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,F,Mt,$t,oe.width,oe.height,Ce,oe.data):O.texSubImage2D(O.TEXTURE_2D,F,Mt,$t,rt,ft,Ce,Zt,oe);O.pixelStorei(O.UNPACK_ROW_LENGTH,ei),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Kt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,ze),O.pixelStorei(O.UNPACK_SKIP_ROWS,Xi),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Le),F===0&&B.generateMipmaps&&O.generateMipmap(wt),Tt.unbindTexture()},this.copyTextureToTexture3D=function(M,B,V=null,W=null,F=0){return M.isTexture!==!0&&(Bn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,W=arguments[1]||null,M=arguments[2],B=arguments[3],F=arguments[4]||0),Bn('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,B,V,W,F)},this.initRenderTarget=function(M){yt.get(M).__webglFramebuffer===void 0&&A.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?A.setTextureCube(M,0):M.isData3DTexture?A.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?A.setTexture2DArray(M,0):A.setTexture2D(M,0),Tt.unbindTexture()},this.resetState=function(){R=0,C=0,w=null,Tt.reset(),te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}}class ga{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Xt(t),this.density=e}clone(){return new ga(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class jf extends ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qe,this.environmentIntensity=1,this.environmentRotation=new Qe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Zf{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=sa,this.updateRanges=[],this.version=0,this.uuid=hi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ee=new P;class Is{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix4(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ee.fromBufferAttribute(this,e),Ee.applyNormalMatrix(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ee.fromBufferAttribute(this,e),Ee.transformDirection(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Ye(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Qt(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Qt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Qt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Qt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Qt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ye(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ye(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ye(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ye(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Qt(e,this.array),i=Qt(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Qt(e,this.array),i=Qt(i,this.array),s=Qt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Qt(e,this.array),i=Qt(i,this.array),s=Qt(s,this.array),r=Qt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ze(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Is(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class va extends Vi{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Xt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ln;const Pn=new P,cn=new P,dn=new P,hn=new Ot,Dn=new Ot,El=new ce,_s=new P,Nn=new P,ys=new P,Po=new Ot,fr=new Ot,Do=new Ot;class Ml extends ye{constructor(t=new va){if(super(),this.isSprite=!0,this.type="Sprite",ln===void 0){ln=new Ae;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Zf(e,5);ln.setIndex([0,1,2,0,2,3]),ln.setAttribute("position",new Is(i,3,0,!1)),ln.setAttribute("uv",new Is(i,2,3,!1))}this.geometry=ln,this.material=t,this.center=new Ot(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),cn.setFromMatrixScale(this.matrixWorld),El.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),dn.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&cn.multiplyScalar(-dn.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const a=this.center;xs(_s.set(-.5,-.5,0),dn,a,cn,s,r),xs(Nn.set(.5,-.5,0),dn,a,cn,s,r),xs(ys.set(.5,.5,0),dn,a,cn,s,r),Po.set(0,0),fr.set(1,0),Do.set(1,1);let o=t.ray.intersectTriangle(_s,Nn,ys,!1,Pn);if(o===null&&(xs(Nn.set(-.5,.5,0),dn,a,cn,s,r),fr.set(0,1),o=t.ray.intersectTriangle(_s,ys,Nn,!1,Pn),o===null))return;const l=t.ray.origin.distanceTo(Pn);l<t.near||l>t.far||e.push({distance:l,point:Pn.clone(),uv:Fe.getInterpolation(Pn,_s,Nn,ys,Po,fr,Do,new Ot),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function xs(n,t,e,i,s,r){hn.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Dn.x=r*hn.x-s*hn.y,Dn.y=s*hn.x+r*hn.y):Dn.copy(hn),n.copy(t),n.x+=Dn.x,n.y+=Dn.y,n.applyMatrix4(El)}class wl extends Vi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ps=new P,Ds=new P,No=new ce,Un=new ll,bs=new Bs,mr=new P,Uo=new P;class Kf extends ye{constructor(t=new Ae,e=new wl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Ps.fromBufferAttribute(e,s-1),Ds.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Ps.distanceTo(Ds);t.setAttribute("lineDistance",new ae(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),bs.copy(i.boundingSphere),bs.applyMatrix4(s),bs.radius+=r,t.ray.intersectsSphere(bs)===!1)return;No.copy(s).invert(),Un.copy(t.ray).applyMatrix4(No);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=c){const p=h.getX(v),S=h.getX(v+1),E=Ss(this,t,Un,l,p,S);E&&e.push(E)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(f),p=Ss(this,t,Un,l,v,m);p&&e.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=c){const p=Ss(this,t,Un,l,v,v+1);p&&e.push(p)}if(this.isLineLoop){const v=Ss(this,t,Un,l,g-1,f);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ss(n,t,e,i,s,r){const a=n.geometry.attributes.position;if(Ps.fromBufferAttribute(a,s),Ds.fromBufferAttribute(a,r),e.distanceSqToSegment(Ps,Ds,mr,Uo)>i)return;mr.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(mr);if(!(l<t.near||l>t.far))return{distance:l,point:Uo.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const Oo=new P,Bo=new P;class Jf extends Kf{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Oo.fromBufferAttribute(e,s),Bo.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Oo.distanceTo(Bo);t.setAttribute("lineDistance",new ae(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ns extends Te{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ie extends Ae{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const v=[],m=i/2;let p=0;S(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new ae(u,3)),this.setAttribute("normal",new ae(d,3)),this.setAttribute("uv",new ae(f,2));function S(){const x=new P,D=new P;let R=0;const C=(e-t)/i;for(let w=0;w<=r;w++){const _=[],y=w/r,T=y*(e-t)+t;for(let L=0;L<=s;L++){const I=L/s,k=I*l+o,H=Math.sin(k),U=Math.cos(k);D.x=T*H,D.y=-y*i+m,D.z=T*U,u.push(D.x,D.y,D.z),x.set(H,C,U).normalize(),d.push(x.x,x.y,x.z),f.push(I,1-y),_.push(g++)}v.push(_)}for(let w=0;w<s;w++)for(let _=0;_<r;_++){const y=v[_][w],T=v[_+1][w],L=v[_+1][w+1],I=v[_][w+1];(t>0||_!==0)&&(h.push(y,T,I),R+=3),(e>0||_!==r-1)&&(h.push(T,L,I),R+=3)}c.addGroup(p,R,0),p+=R}function E(x){const D=g,R=new Ot,C=new P;let w=0;const _=x===!0?t:e,y=x===!0?1:-1;for(let L=1;L<=s;L++)u.push(0,m*y,0),d.push(0,y,0),f.push(.5,.5),g++;const T=g;for(let L=0;L<=s;L++){const k=L/s*l+o,H=Math.cos(k),U=Math.sin(k);C.x=_*U,C.y=m*y,C.z=_*H,u.push(C.x,C.y,C.z),d.push(0,y,0),R.x=H*.5+.5,R.y=U*.5*y+.5,f.push(R.x,R.y),g++}for(let L=0;L<s;L++){const I=D+L,k=T+L;x===!0?h.push(k,k+1,I):h.push(k+1,k,I),w+=3}c.addGroup(p,w,x===!0?1:2),p+=w}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ie(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Vn extends ie{constructor(t=1,e=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Vn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Yn extends Ae{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],a=[];o(s),c(i),h(),this.setAttribute("position",new ae(r,3)),this.setAttribute("normal",new ae(r.slice(),3)),this.setAttribute("uv",new ae(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const E=new P,x=new P,D=new P;for(let R=0;R<e.length;R+=3)f(e[R+0],E),f(e[R+1],x),f(e[R+2],D),l(E,x,D,S)}function l(S,E,x,D){const R=D+1,C=[];for(let w=0;w<=R;w++){C[w]=[];const _=S.clone().lerp(x,w/R),y=E.clone().lerp(x,w/R),T=R-w;for(let L=0;L<=T;L++)L===0&&w===R?C[w][L]=_:C[w][L]=_.clone().lerp(y,L/T)}for(let w=0;w<R;w++)for(let _=0;_<2*(R-w)-1;_++){const y=Math.floor(_/2);_%2===0?(d(C[w][y+1]),d(C[w+1][y]),d(C[w][y])):(d(C[w][y+1]),d(C[w+1][y+1]),d(C[w+1][y]))}}function c(S){const E=new P;for(let x=0;x<r.length;x+=3)E.x=r[x+0],E.y=r[x+1],E.z=r[x+2],E.normalize().multiplyScalar(S),r[x+0]=E.x,r[x+1]=E.y,r[x+2]=E.z}function h(){const S=new P;for(let E=0;E<r.length;E+=3){S.x=r[E+0],S.y=r[E+1],S.z=r[E+2];const x=m(S)/2/Math.PI+.5,D=p(S)/Math.PI+.5;a.push(x,1-D)}g(),u()}function u(){for(let S=0;S<a.length;S+=6){const E=a[S+0],x=a[S+2],D=a[S+4],R=Math.max(E,x,D),C=Math.min(E,x,D);R>.9&&C<.1&&(E<.2&&(a[S+0]+=1),x<.2&&(a[S+2]+=1),D<.2&&(a[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function f(S,E){const x=S*3;E.x=t[x+0],E.y=t[x+1],E.z=t[x+2]}function g(){const S=new P,E=new P,x=new P,D=new P,R=new Ot,C=new Ot,w=new Ot;for(let _=0,y=0;_<r.length;_+=9,y+=6){S.set(r[_+0],r[_+1],r[_+2]),E.set(r[_+3],r[_+4],r[_+5]),x.set(r[_+6],r[_+7],r[_+8]),R.set(a[y+0],a[y+1]),C.set(a[y+2],a[y+3]),w.set(a[y+4],a[y+5]),D.copy(S).add(E).add(x).divideScalar(3);const T=m(D);v(R,y+0,S,T),v(C,y+2,E,T),v(w,y+4,x,T)}}function v(S,E,x,D){D<0&&S.x===1&&(a[E]=S.x-1),x.x===0&&x.z===0&&(a[E]=D/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yn(t.vertices,t.indices,t.radius,t.details)}}class _a extends Yn{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new _a(t.radius,t.detail)}}class ya extends Yn{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ya(t.radius,t.detail)}}class xa extends Yn{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new xa(t.radius,t.detail)}}class ba extends Ae{constructor(t=.5,e=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let u=t;const d=(e-t)/s,f=new P,g=new Ot;for(let v=0;v<=s;v++){for(let m=0;m<=i;m++){const p=r+m/i*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let v=0;v<s;v++){const m=v*(i+1);for(let p=0;p<i;p++){const S=p+m,E=S,x=S+i+1,D=S+i+2,R=S+1;o.push(E,x,R),o.push(x,D,R)}}this.setIndex(o),this.setAttribute("position",new ae(l,3)),this.setAttribute("normal",new ae(c,3)),this.setAttribute("uv",new ae(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ba(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Mi extends Ae{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new P,d=new P,f=[],g=[],v=[],m=[];for(let p=0;p<=i;p++){const S=[],E=p/i;let x=0;p===0&&a===0?x=.5/e:p===i&&l===Math.PI&&(x=-.5/e);for(let D=0;D<=e;D++){const R=D/e;u.x=-t*Math.cos(s+R*r)*Math.sin(a+E*o),u.y=t*Math.cos(a+E*o),u.z=t*Math.sin(s+R*r)*Math.sin(a+E*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(R+x,1-E),S.push(c++)}h.push(S)}for(let p=0;p<i;p++)for(let S=0;S<e;S++){const E=h[p][S+1],x=h[p][S],D=h[p+1][S],R=h[p+1][S+1];(p!==0||a>0)&&f.push(E,x,R),(p!==i-1||l<Math.PI)&&f.push(x,D,R)}this.setIndex(f),this.setAttribute("position",new ae(g,3)),this.setAttribute("normal",new ae(v,3)),this.setAttribute("uv",new ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Wi extends Ae{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new P,u=new P,d=new P;for(let f=0;f<=i;f++)for(let g=0;g<=s;g++){const v=g/s*r,m=f/i*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(v),u.y=(t+e*Math.cos(m))*Math.sin(v),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=s;g++){const v=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,S=(s+1)*f+g;a.push(v,m,S),a.push(m,p,S)}this.setIndex(a),this.setAttribute("position",new ae(o,3)),this.setAttribute("normal",new ae(l,3)),this.setAttribute("uv",new ae(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wi(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class xt extends Vi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nl,this.normalScale=new Ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Sa extends ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const gr=new ce,Fo=new P,ko=new P;class Tl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ot(512,512),this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fa,this._frameExtents=new Ot(1,1),this._viewportCount=1,this._viewports=[new ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Fo.setFromMatrixPosition(t.matrixWorld),e.position.copy(Fo),ko.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ko),e.updateMatrixWorld(),gr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gr),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(gr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const zo=new ce,On=new P,vr=new P;class Qf extends Tl{constructor(){super(new De(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ot(4,2),this._viewportCount=6,this._viewports=[new ne(2,1,1,1),new ne(0,1,1,1),new ne(3,1,1,1),new ne(1,1,1,1),new ne(3,0,1,1),new ne(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),On.setFromMatrixPosition(t.matrixWorld),i.position.copy(On),vr.copy(i.position),vr.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(vr),i.updateMatrixWorld(),s.makeTranslation(-On.x,-On.y,-On.z),zo.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zo)}}class de extends Sa{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Qf}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class tm extends Tl{constructor(){super(new vl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class em extends Sa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.target=new ye,this.shadow=new tm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class im extends Sa{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class _r extends Jf{constructor(t=10,e=10,i=4473924,s=8947848){i=new Xt(i),s=new Xt(s);const r=e/2,a=t/e,o=t/2,l=[],c=[];for(let d=0,f=0,g=-o;d<=e;d++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const v=d===r?i:s;v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3}const h=new Ae;h.setAttribute("position",new ae(l,3)),h.setAttribute("color",new ae(c,3));const u=new wl({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:aa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=aa);const Go={sparky:{id:"sparky",name:"Flux",number:"01",role:"Lead Explorer",cost:0,bodyColor:1976635,accentColor:165063,ringColor:3718648,clawColor:16436245,dishColor:165063,thrustColor:3718648,underglowColor:61695,maxSpeed:4.5,acceleration:14,radius:.9,spawn:{x:-14,z:14}},checkers:{id:"checkers",name:"Tug",number:"02",role:"Heavy Freight Hauler",cost:500,bodyColor:2562317,accentColor:15357964,ringColor:16498468,clawColor:16096779,dishColor:15357964,thrustColor:16347926,underglowColor:16746496,maxSpeed:3.9,acceleration:12.5,radius:.94,spawn:{x:-11,z:14}},scanners:{id:"scanners",name:"Scope",number:"03",role:"Vein Sonar Scout",cost:1e3,bodyColor:403486,accentColor:366185,ringColor:3462041,clawColor:1096065,dishColor:1096065,thrustColor:3462041,underglowColor:65416,maxSpeed:4.9,acceleration:15,radius:.88,spawn:{x:-14,z:11}},tank:{id:"tank",name:"Dozer",number:"04",role:"Armored Bulldozer",cost:1500,bodyColor:1579035,accentColor:4674921,ringColor:15680580,clawColor:9741240,dishColor:15680580,thrustColor:16281969,underglowColor:16720452,maxSpeed:3.6,acceleration:16.5,radius:1,spawn:{x:-11,z:11}}};class nm{constructor(t,e={}){this.scene=t,this.mesh=new pe;const i=Go[e.id]||Go.sparky;this.config={...i,...e},this.id=this.config.id,this.name=this.config.name,this.role=this.config.role,this.number=this.config.number,this.cost=this.config.cost,this.radius=this.config.radius||.9,this.height=.8;const s=this.config.spawn||{x:0,z:0};this.position=new P(s.x,.4,s.z),this.velocity=new P(0,0,0),this.maxSpeed=this.config.maxSpeed||4.5,this.acceleration=this.config.acceleration||14,this.damping=.88,this.heldItem=null,this.grabCooldown=0,this.clawAngle=.2,this.circuitActuators={thrust_n:!1,thrust_s:!1,thrust_e:!1,thrust_w:!1,beacon_ping:!1,aux_light:!1,grabber:!1},this.sensors={bumper_n:!1,bumper_s:!1,bumper_e:!1,bumper_w:!1,radar_ping:!1,item_detect:!1},this.thrustersActive=!1,this.bumperMaterials={},this.thrusterFlames={},this.thrusterLights={},this.empStunTimer=0,this.buildModel(),t.add(this.mesh),this.mesh.position.copy(this.position)}buildModel(){const t=new ba(.72,.94,24),e=new ue({color:this.config.underglowColor,side:qe,transparent:!0,opacity:.8}),i=new $(t,e);i.rotation.x=-Math.PI/2,i.position.y=.02,this.mesh.add(i);const s=new ie(.85,.95,.6,16),r=new xt({color:this.config.bodyColor,metalness:.85,roughness:.25}),a=new $(s,r);a.castShadow=!0,a.receiveShadow=!0,a.position.y=.3,this.mesh.add(a);const o=new ie(.55,.6,.15,16),l=new xt({color:988970,metalness:.9,roughness:.1}),c=new $(o,l);c.position.y=.65,this.mesh.add(c);const h=new Wi(.45,.04,12,24),u=new xt({color:this.config.ringColor,emissive:this.config.accentColor,emissiveIntensity:.8}),d=new $(h,u);d.rotation.x=Math.PI/2,d.position.y=.72,this.mesh.add(d),this.antennaGroup=new pe;const f=new ie(.03,.03,.35,8),g=new xt({color:9741240,metalness:.9}),v=new $(f,g);v.position.y=.85,this.antennaGroup.add(v);const m=new Mi(.18,12,8,0,Math.PI),p=new xt({color:this.config.dishColor,metalness:.7,roughness:.3,side:qe});this.dish=new $(m,p),this.dish.rotation.x=Math.PI/3,this.dish.position.y=1,this.antennaGroup.add(this.dish),this.mesh.add(this.antennaGroup),this.createNameplate(),[{id:"bumper_n",pos:[0,.3,-.92],rot:[0,0,0],size:[.7,.25,.1]},{id:"bumper_s",pos:[0,.3,.92],rot:[0,0,0],size:[.7,.25,.1]},{id:"bumper_e",pos:[.92,.3,0],rot:[0,Math.PI/2,0],size:[.7,.25,.1]},{id:"bumper_w",pos:[-.92,.3,0],rot:[0,Math.PI/2,0],size:[.7,.25,.1]}].forEach(Lt=>{const yt=new vt(...Lt.size),A=new xt({color:3359061,emissive:0,metalness:.5,roughness:.4}),b=new $(yt,A);b.position.set(...Lt.pos),b.rotation.set(...Lt.rot),this.mesh.add(b),this.bumperMaterials[Lt.id]=A}),[{id:"thrust_n",pos:[0,.15,.85],rot:[Math.PI/2,0,0]},{id:"thrust_s",pos:[0,.15,-.85],rot:[-Math.PI/2,0,0]},{id:"thrust_e",pos:[-.85,.15,0],rot:[0,0,-Math.PI/2]},{id:"thrust_w",pos:[.85,.15,0],rot:[0,0,Math.PI/2]}].forEach(Lt=>{const yt=new Vn(.18,.5,12);yt.translate(0,-.25,0);const A=new ue({color:this.config.thrustColor,transparent:!0,opacity:0}),b=new $(yt,A);b.position.set(...Lt.pos),b.rotation.set(...Lt.rot),this.mesh.add(b),this.thrusterFlames[Lt.id]=b;const z=new de(this.config.thrustColor,0,3);z.position.set(...Lt.pos),this.mesh.add(z),this.thrusterLights[Lt.id]=z});const x=new Mi(.08,12,12);this.headlightMat=new xt({color:9741240,emissive:0});const D=new $(x,this.headlightMat);D.position.set(0,.55,-.8),this.mesh.add(D),this.grabberGroup=new pe,this.grabberGroup.position.set(0,.22,-.85);const R=new xt({color:1976635,metalness:.85,roughness:.3}),C=new vt(.72,.1,.12),w=new $(C,R);w.castShadow=!0,this.grabberGroup.add(w);const _=new ie(.1,.1,.16,16),y=new $(_,R);y.position.set(-.32,0,0),this.grabberGroup.add(y);const T=new $(_,R);T.position.set(.32,0,0),this.grabberGroup.add(T);const L=new xt({color:this.config.clawColor,metalness:.35,roughness:.25,emissive:this.config.accentColor,emissiveIntensity:.35}),I=new xt({color:988970,roughness:.9,metalness:.1}),k=new xt({color:16707722,emissive:16436245,emissiveIntensity:2.2}),H=new xt({color:4674921,metalness:.9,roughness:.2}),U=.85,X=.13,G=.15;this.leftClaw=new pe,this.leftClaw.position.set(-.32,0,0);const at=new vt(X,G,U);at.translate(0,0,-U/2);const dt=new $(at,L);dt.castShadow=!0,this.leftClaw.add(dt);const gt=new vt(.22,G-.02,.12);gt.translate(.11,0,-U+.04);const Dt=new $(gt,L);Dt.castShadow=!0,this.leftClaw.add(Dt);const qt=new vt(.035,G-.04,U*.75);qt.translate(X/2+.015,0,-U*.48);const j=new $(qt,I);this.leftClaw.add(j);const st=new ie(.03,.03,U*.65,8);st.rotateX(Math.PI/2),st.translate(-X/2-.015,.02,-U*.45);const bt=new $(st,H);this.leftClaw.add(bt);const ot=new Mi(.04,12,12);ot.translate(.2,0,-U+.04);const Ct=new $(ot,k);this.leftClaw.add(Ct),this.grabberGroup.add(this.leftClaw),this.rightClaw=new pe,this.rightClaw.position.set(.32,0,0);const Rt=new vt(X,G,U);Rt.translate(0,0,-U/2);const Nt=new $(Rt,L);Nt.castShadow=!0,this.rightClaw.add(Nt);const jt=new vt(.22,G-.02,.12);jt.translate(-.11,0,-U+.04);const Bt=new $(jt,L);Bt.castShadow=!0,this.rightClaw.add(Bt);const se=new vt(.035,G-.04,U*.75);se.translate(-X/2-.015,0,-U*.48);const O=new $(se,I);this.rightClaw.add(O);const me=new ie(.03,.03,U*.65,8);me.rotateX(Math.PI/2),me.translate(X/2+.015,.02,-U*.45);const Vt=new $(me,H);this.rightClaw.add(Vt);const Ft=new Mi(.04,12,12);Ft.translate(-.2,0,-U+.04);const Tt=new $(Ft,k);this.rightClaw.add(Tt),this.grabberGroup.add(this.rightClaw),this.mesh.add(this.grabberGroup),this.clawAngle=.32}createNameplate(){if(!(typeof document>"u"))try{const t=document.createElement("canvas");t.width=512,t.height=128;const e=t.getContext("2d");if(!e)return;e.fillStyle="rgba(10, 15, 29, 0.88)",e.beginPath(),e.roundRect?e.roundRect(8,8,496,112,28):e.rect(8,8,496,112),e.fill();const i="#"+this.config.accentColor.toString(16).padStart(6,"0");e.strokeStyle=i,e.lineWidth=8,e.stroke(),e.fillStyle=i,e.font='bold 50px "JetBrains Mono", Impact, sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText(`${this.config.number} ${this.config.name.toUpperCase()}`,256,64);const s=new Ns(t);s.minFilter=Ne;const r=new va({map:s,transparent:!0}),a=new Ml(r);a.position.set(0,1.45,0),a.scale.set(1.9,.48,1),this.mesh.add(a)}catch(t){console.warn("Robot nameplate fallback:",t)}}reset(t=0,e=0){this.position.set(t,.4,e),this.velocity.set(0,0,0),this.mesh.position.copy(this.position)}update(t,e,i,s,r){const a=this.empStunTimer>0;a&&(this.empStunTimer=Math.max(0,this.empStunTimer-t),e={...e,thrust_n:!1,thrust_s:!1,thrust_e:!1,thrust_w:!1});const l=!!e.grabber?-.05:.32;this.clawAngle+=(l-this.clawAngle)*.2,this.leftClaw&&this.rightClaw&&(this.leftClaw.rotation.y=this.clawAngle,this.rightClaw.rotation.y=-this.clawAngle);const c=new P(0,0,0);let h=!1;if(e.thrust_n&&(c.z-=this.acceleration,h=!0),e.thrust_s&&(c.z+=this.acceleration,h=!0),e.thrust_e&&(c.x+=this.acceleration,h=!0),e.thrust_w&&(c.x-=this.acceleration,h=!0),a){const g=Math.sin(Date.now()*.035)>0;this.headlightMat.emissive.setHex(g?15680580:16096779),this.headlightMat.emissiveIntensity=g?3:.5}else e.aux_light?(this.headlightMat.emissive.setHex(16436245),this.headlightMat.emissiveIntensity=2):this.headlightMat.emissive.setHex(0);h!==this.thrustersActive&&(this.thrustersActive=h,tt.setThrusterActive(h)),Object.keys(this.thrusterFlames).forEach(g=>{const v=!!e[g],m=this.thrusterFlames[g],p=this.thrusterLights[g];v?(m.material.opacity=.75+Math.random()*.25,m.scale.set(1+Math.random()*.2,1+Math.random()*.3,1),p.intensity=1.5+Math.random()*.8):(m.material.opacity=0,p.intensity=0)}),this.velocity.addScaledVector(c,t),this.velocity.multiplyScalar(this.damping),this.velocity.clampLength(0,this.maxSpeed),this.position.addScaledVector(this.velocity,t);const u={...this.sensors};if(this.sensors.bumper_n=!1,this.sensors.bumper_s=!1,this.sensors.bumper_e=!1,this.sensors.bumper_w=!1,this.position.z-this.radius<i.minZ&&(this.position.z=i.minZ+this.radius,this.velocity.z=Math.max(0,this.velocity.z),this.sensors.bumper_n=!0),this.position.z+this.radius>i.maxZ&&(this.position.z=i.maxZ-this.radius,this.velocity.z=Math.min(0,this.velocity.z),this.sensors.bumper_s=!0),this.position.x-this.radius<i.minX&&(this.position.x=i.minX+this.radius,this.velocity.x=Math.max(0,this.velocity.x),this.sensors.bumper_w=!0),this.position.x+this.radius>i.maxX&&(this.position.x=i.maxX-this.radius,this.velocity.x=Math.min(0,this.velocity.x),this.sensors.bumper_e=!0),s&&s.length>0)for(const g of s){const v=Math.max(g.minX,Math.min(this.position.x,g.maxX)),m=Math.max(g.minZ,Math.min(this.position.z,g.maxZ)),p=this.position.x-v,S=this.position.z-m,E=p*p+S*S;if(E<this.radius*this.radius){const x=Math.sqrt(E)||.001,D=this.radius-x,R=p/x,C=S/x;this.position.x+=R*D,this.position.z+=C*D;const w=this.velocity.x*R+this.velocity.z*C;w<0&&(this.velocity.x-=w*R,this.velocity.z-=w*C),C>.6&&(this.sensors.bumper_n=!0),C<-.6&&(this.sensors.bumper_s=!0),R>.6&&(this.sensors.bumper_w=!0),R<-.6&&(this.sensors.bumper_e=!0)}}const d=typeof performance<"u"?performance.now():Date.now();if(this.lastBumperAudioTime=this.lastBumperAudioTime||0,(!u.bumper_n&&this.sensors.bumper_n||!u.bumper_s&&this.sensors.bumper_s||!u.bumper_e&&this.sensors.bumper_e||!u.bumper_w&&this.sensors.bumper_w)&&d-this.lastBumperAudioTime>160&&(this.lastBumperAudioTime=d,tt.playBumperHit()),["bumper_n","bumper_s","bumper_e","bumper_w"].forEach(g=>{const v=this.bumperMaterials[g];this.sensors[g]?(v.emissive.setHex(65535),v.emissiveIntensity=2):(v.emissive.setHex(0),v.emissiveIntensity=0)}),r){const g=this.position.distanceTo(r);this.sensors.radar_ping=g<4}this.dish.rotation.y+=.04,this.mesh.position.copy(this.position)}}class Ea{constructor(t,e){this.id=t.id||`item_${Math.random().toString(36).substr(2,6)}`,this.type=t.type||"generic",this.label=t.label||"Item",this.group=e,this.state="grounded",this.holder=null,this.dockedIn=null,this.baseY=t.y!==void 0?t.y:.3,this.mesh=new pe,this.mesh.position.set(t.x||0,this.baseY,t.z||0),this.group.add(this.mesh),this.timeOffset=Math.random()*10}get position(){return this.mesh.position}destroy(){this.group.remove(this.mesh),this.mesh.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material.forEach(e=>e.dispose()):t.material.dispose())})}update(t){}}class sm extends Ea{constructor(t,e){super({...t,type:"power_cell",label:t.label||"Portable Power Cell"},e),this.colorHex=t.color||1096065,this.baseY=.32,this.buildMesh()}buildMesh(){const t=new xt({color:1976635,metalness:.85,roughness:.25}),e=new ie(.24,.26,.08,16),i=new $(e,t);i.position.y=.22,i.castShadow=!0,this.mesh.add(i);const s=new ie(.26,.24,.08,16),r=new $(s,t);r.position.y=-.22,r.castShadow=!0,this.mesh.add(r);const a=new ie(.22,.22,.36,16),o=new xt({color:988970,metalness:.1,roughness:.05,transparent:!0,opacity:.45}),l=new $(a,o);this.mesh.add(l);const c=new ie(.1,.1,.32,12);this.coreMat=new xt({color:this.colorHex,emissive:this.colorHex,emissiveIntensity:2.2,metalness:.1,roughness:.2}),this.coreMesh=new $(c,this.coreMat),this.mesh.add(this.coreMesh);const h=new Wi(.28,.02,8,24);this.ringMat=new ue({color:this.colorHex}),this.ringMesh=new $(h,this.ringMat),this.ringMesh.rotation.x=Math.PI/2,this.mesh.add(this.ringMesh),this.light=new de(this.colorHex,2.5,4.5),this.light.position.y=0,this.mesh.add(this.light)}update(t){const e=Date.now()*.003+this.timeOffset,i=2+Math.sin(e*3)*.5;this.coreMat.emissiveIntensity=i,this.light.intensity=i*1.2,this.ringMesh.rotation.z+=.04,this.state==="grounded"&&(this.mesh.position.y=this.baseY+Math.sin(e*2)*.04,this.mesh.rotation.y+=.015)}}class rm extends Ea{constructor(t,e){super({...t,type:"keycard",label:t.label||"Security Keycard"},e),this.colorHex=t.color||3718648,this.baseY=.22,this.buildMesh()}buildMesh(){const t=new vt(.46,.05,.28),e=new xt({color:3359061,metalness:.85,roughness:.3}),i=new $(t,e);i.castShadow=!0,this.mesh.add(i);const s=new vt(.44,.052,.07),r=new xt({color:14251782,metalness:.9,roughness:.1}),a=new $(s,r);a.position.z=-.09,this.mesh.add(a);const o=new vt(.12,.054,.12);this.chipMat=new xt({color:this.colorHex,emissive:this.colorHex,emissiveIntensity:2.2,metalness:.2,roughness:.2});const l=new $(o,this.chipMat);l.position.set(-.1,0,.04),this.mesh.add(l);const c=new Wi(.06,.014,8,16),h=new xt({color:9741240,metalness:.9}),u=new $(c,h);u.rotation.x=Math.PI/2,u.position.set(.24,0,0),this.mesh.add(u),this.light=new de(this.colorHex,1.8,3),this.mesh.add(this.light)}update(t){const e=Date.now()*.003+this.timeOffset,i=1.8+Math.sin(e*4)*.4;this.chipMat.emissiveIntensity=i,this.light.intensity=i,this.state==="grounded"&&(this.mesh.position.y=this.baseY+Math.sin(e*2.5)*.03,this.mesh.rotation.y+=.02)}}class am extends Ea{constructor(t,e){super({...t,type:"raw_ore",label:t.label||"Raw Mineral Ore"},e),this.value=t.value||100,this.colorHex=t.color||16096779,this.baseY=t.y!==void 0?t.y:.28,this.buildMesh()}buildMesh(){const t=new _a(.25,0),e=new xt({color:this.colorHex,emissive:this.colorHex,emissiveIntensity:1.8,metalness:.85,roughness:.25,flatShading:!0});this.rockMesh=new $(t,e),this.rockMesh.castShadow=!0,this.mesh.add(this.rockMesh);const i=new Vn(.08,.28,5),s=new $(i,e);s.position.set(.12,.1,-.08),s.rotation.set(.4,.2,-.5),this.mesh.add(s);const r=new Vn(.07,.24,5),a=new $(r,e);a.position.set(-.1,.12,.08),a.rotation.set(-.3,.6,.4),this.mesh.add(a),this.light=new de(this.colorHex,2.2,4.5),this.light.position.y=.2,this.mesh.add(this.light)}update(t){const e=Date.now()*.003+this.timeOffset,i=1.6+Math.sin(e*3.5)*.5;this.rockMesh.material.emissiveIntensity=i,this.light.intensity=i,this.state==="grounded"&&(this.mesh.position.y=this.baseY+Math.sin(e*2)*.04,this.mesh.rotation.y+=.015,this.mesh.rotation.x=Math.sin(e*1.5)*.05)}}class Ma{constructor(t,e){this.id=t.id||`term_${Math.random().toString(36).substr(2,6)}`,this.type=t.type||"generic_socket",this.label=t.label||"Socket Terminal",this.group=e,this.position=new P(t.x||0,t.y||0,t.z||0),this.dockRadius=t.dockRadius||1.4,this.requiredType=t.requiredType||null,this.isOccupied=!1,this.dockedItem=null,this.onSocketed=t.onSocketed||null,this.onUnsocketed=t.onUnsocketed||null,this.mesh=new pe,this.mesh.position.copy(this.position),this.group.add(this.mesh)}accepts(t){return!(!t||this.requiredType&&t.type!==this.requiredType)}dock(t){this.isOccupied=!0,this.dockedItem=t,t.state="socketed",t.dockedIn=this,t.mesh.position.copy(this.position),t.mesh.position.y+=this.dockHeightOffset||.28,t.mesh.rotation.set(0,0,0),this.onSocketed&&this.onSocketed(t)}undock(){if(!this.isOccupied)return null;const t=this.dockedItem;return this.isOccupied=!1,this.dockedItem=null,t&&(t.dockedIn=null),this.onUnsocketed&&this.onUnsocketed(t),t}destroy(){this.group.remove(this.mesh),this.mesh.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material.forEach(e=>e.dispose()):t.material.dispose())})}update(t){}}class om extends Ma{constructor(t,e){super({...t,type:"power_socket",requiredType:"power_cell",label:t.label||"Energy Receptacle"},e),this.dockHeightOffset=.32,this.buildMesh()}buildMesh(){const t=new ie(.7,.85,.4,6),e=new xt({color:988970,metalness:.8,roughness:.35}),i=new $(t,e);i.position.y=.2,i.castShadow=!0,i.receiveShadow=!0,this.mesh.add(i);const s=new ie(.3,.28,.2,16),r=new xt({color:132631,metalness:.9,roughness:.2}),a=new $(s,r);a.position.y=.32,this.mesh.add(a);const o=new Wi(.52,.04,12,32);this.ringMat=new xt({color:15680580,emissive:15680580,emissiveIntensity:1.8,roughness:.2}),this.statusRing=new $(o,this.ringMat),this.statusRing.rotation.x=Math.PI/2,this.statusRing.position.y=.42,this.mesh.add(this.statusRing);const l=new ie(.72,.86,.06,6),c=new ue({color:16096779}),h=new $(l,c);h.position.y=.38,this.mesh.add(h),this.light=new de(15680580,2.5,6),this.light.position.y=.5,this.mesh.add(this.light)}dock(t){super.dock(t),this.ringMat.color.setHex(1096065),this.ringMat.emissive.setHex(1096065),this.ringMat.emissiveIntensity=3,this.light.color.setHex(1096065),this.light.intensity=4}undock(){const t=super.undock();return this.ringMat.color.setHex(15680580),this.ringMat.emissive.setHex(15680580),this.ringMat.emissiveIntensity=1.8,this.light.color.setHex(15680580),this.light.intensity=2.5,t}update(t){if(this.isOccupied){const e=2.5+Math.sin(Date.now()*.008)*.8;this.ringMat.emissiveIntensity=e,this.light.intensity=e*1.3}}}class lm extends Ma{constructor(t,e){super({...t,type:"keycard_reader",requiredType:"keycard",label:t.label||"Keycard Reader"},e),this.dockHeightOffset=1.15,this.buildMesh()}buildMesh(){const t=new vt(.38,1.2,.38),e=new xt({color:1976635,metalness:.8,roughness:.3}),i=new $(t,e);i.position.y=.6,i.castShadow=!0,this.mesh.add(i);const s=new vt(.44,.2,.44),r=new xt({color:988970,metalness:.85,roughness:.25}),a=new $(s,r);a.position.y=1.25,a.rotation.x=-Math.PI/8,this.mesh.add(a);const o=new vt(.46,.04,.06);this.slotMat=new xt({color:15680580,emissive:15680580,emissiveIntensity:2.2});const l=new $(o,this.slotMat);l.position.set(0,1.28,.08),l.rotation.x=-Math.PI/8,this.mesh.add(l),this.light=new de(15680580,2,5),this.light.position.set(0,1.4,.2),this.mesh.add(this.light)}dock(t){super.dock(t),t.mesh.position.set(this.position.x,this.position.y+1.28,this.position.z+.08),t.mesh.rotation.x=-Math.PI/8,this.slotMat.color.setHex(1096065),this.slotMat.emissive.setHex(1096065),this.slotMat.emissiveIntensity=3.2,this.light.color.setHex(1096065),this.light.intensity=3.5}undock(){const t=super.undock();return this.slotMat.color.setHex(15680580),this.slotMat.emissive.setHex(15680580),this.slotMat.emissiveIntensity=2.2,this.light.color.setHex(15680580),this.light.intensity=2,t}update(t){if(!this.isOccupied){const e=1.6+Math.sin(Date.now()*.005)*.6;this.slotMat.emissiveIntensity=e}}}class cm extends Ma{constructor(t,e){super({...t,type:"refinery",requiredType:"raw_ore",label:t.label||"The Refinery Smelter",dockRadius:t.dockRadius||3.8},e),this.dockHeightOffset=.4,this.buildMesh()}buildMesh(){const t=new ie(1.6,1.9,.6,8),e=new xt({color:1976635,metalness:.85,roughness:.35,flatShading:!0}),i=new $(t,e);i.position.y=.3,i.castShadow=!0,i.receiveShadow=!0,this.mesh.add(i);const s=new ie(1.65,1.65,.08,8),r=new xt({color:16096779,emissive:14251782,emissiveIntensity:.8,metalness:.5,roughness:.4}),a=new $(s,r);a.position.y=.62,this.mesh.add(a);const o=new ie(.9,.5,.45,16),l=new xt({color:593174,metalness:.95,roughness:.2}),c=new $(o,l);c.position.y=.42,this.mesh.add(c);const h=new ie(.55,.55,.06,16);this.plasmaMat=new xt({color:16729088,emissive:16724736,emissiveIntensity:3.5,roughness:.1}),this.plasmaMesh=new $(h,this.plasmaMat),this.plasmaMesh.position.y=.25,this.mesh.add(this.plasmaMesh);const u=new xt({color:3359061,metalness:.9});[Math.PI/4,3*Math.PI/4,5*Math.PI/4,7*Math.PI/4].forEach(f=>{const g=new ie(.12,.15,.8,8),v=new $(g,u);v.position.set(Math.cos(f)*1.35,.5,Math.sin(f)*1.35),v.castShadow=!0,this.mesh.add(v);const m=new ie(.16,.12,.08,8),p=new $(m,r);p.position.set(Math.cos(f)*1.35,.92,Math.sin(f)*1.35),this.mesh.add(p)}),this.light=new de(16733440,3.5,9),this.light.position.y=.8,this.mesh.add(this.light),this.buildSign()}buildSign(){const t=new pe;t.position.set(0,2.1,.4);const e=new xt({color:3359061,metalness:.85,roughness:.3}),i=new ie(.06,.06,1.8,8),s=new $(i,e);s.position.set(-1.8,-.7,0),t.add(s);const r=new $(i,e);r.position.set(1.8,-.7,0),t.add(r);const a=new vt(3.8,.08,.08),o=new $(a,e);o.position.set(0,-.1,0),t.add(o);const l=new vt(4.2,1.25,.08),c=new xt({color:593174,metalness:.8,roughness:.3}),h=new $(l,c);h.position.set(0,.3,0),h.castShadow=!0,t.add(h);let u=null;if(typeof document<"u"&&document.createElement)try{const d=document.createElement("canvas");d.width=1024,d.height=256;const f=d.getContext("2d");f&&(f.fillStyle="#0a0f1d",f.fillRect(0,0,1024,256),f.strokeStyle="#fbbf24",f.lineWidth=14,f.strokeRect(8,8,1008,240),f.fillStyle="#fbbf24",f.font='900 132px "Arial Black", Impact, sans-serif',f.textAlign="center",f.textBaseline="middle",f.fillText("REFINERY",512,134),u=new Ns(d),u.generateMipmaps=!0,u.minFilter=li,u.magFilter=Ne,u.needsUpdate=!0)}catch(d){console.warn("Refinery sign texture fallback:",d)}if(u){const d=new ue({map:u}),f=new We(4.1,1.18),g=new $(f,d);g.position.set(0,.3,.045),t.add(g);const v=new $(f,d);v.position.set(0,.3,-.045),v.rotation.y=Math.PI,t.add(v)}t.rotation.x=-.42,this.mesh.add(t)}accepts(t){return t?t.type==="raw_ore":!1}dock(t){this.onSocketed&&this.onSocketed(t),t&&t.mesh&&(t.state="smelted",t.destroy()),this.isOccupied=!1,this.dockedItem=null,tt.playSocketDock()}update(t){const e=Date.now()*.006,i=3+Math.sin(e)*1;this.plasmaMat.emissiveIntensity=i,this.light.intensity=i*1.2}}class dm{constructor(t){this.scene=t,this.group=new pe,this.scene.add(this.group),this.items=[],this.terminals=[],this.heldItem=null,this.grabCooldown=0}clear(){this.items.forEach(t=>t.destroy()),this.terminals.forEach(t=>t.destroy()),this.items=[],this.terminals=[],this.heldItem=null}addItem(t){let e;return t.type==="keycard"?e=new rm(t,this.group):t.type==="raw_ore"?e=new am(t,this.group):e=new sm(t,this.group),this.items.push(e),e}addTerminal(t){let e;return t.type==="keycard_reader"?e=new lm(t,this.group):t.type==="refinery"?e=new cm(t,this.group):e=new om(t,this.group),this.terminals.push(e),e}update(t,e,i={},s=1){const r=Array.isArray(e)?e:[e];for(const a of r){if(!a||!a.position)continue;a.grabCooldown>0&&(a.grabCooldown-=t);const o=new P(a.position.x,a.position.y-.12,a.position.z-1.35),c=!!(a.effectiveActuators||a.circuitActuators||i||{}).grabber;let h=null,u=1.35;for(const d of this.items){if(d.state==="held"&&d.holder!==a||d===a.heldItem)continue;const f=d.mesh?d.mesh.position.y:d.baseY||.3;if(Math.abs(f-a.position.y)>2.2)continue;const g=o.distanceTo(d.mesh.position);g<u&&(u=g,h=d)}if(a.sensors.item_detect=a.heldItem!==null||h!==null,c)!a.heldItem&&h&&(a.grabCooldown||0)<=0&&(h.state==="socketed"&&h.dockedIn&&h.dockedIn.undock(),a.heldItem=h,h.state="held",h.holder=a,a.grabCooldown=.3,tt.playGrab()),a.heldItem&&(a.heldItem.mesh.position.copy(o),a.heldItem.mesh.rotation.set(0,0,0));else if(a.heldItem&&(a.grabCooldown||0)<=0){const d=a.heldItem;a.heldItem=null,a.grabCooldown=.3;let f=null;for(const g of this.terminals)if((!g.isOccupied||g.type==="refinery")&&g.accepts(d)){const v=o.distanceTo(g.position),m=a.position.distanceTo(g.position);if(v<g.dockRadius||g.type==="refinery"&&m<g.dockRadius){f=g;break}}if(f)f.dock(d),f.type==="refinery"?this.items=this.items.filter(g=>g!==d):tt.playSocketDock();else{let g=.28;o.y<-25?g=-35.72:o.y<-5&&(g=-17.72),d.baseY=g,d.mesh.position.set(o.x,g,o.z),tt.playRelease()}}}this.items.forEach(a=>{if(r.some(l=>l&&l.heldItem===a))a.mesh.visible=!0;else{const l=a.mesh&&a.mesh.position.y!==void 0?a.mesh.position.y:a.baseY||.28;s===3?a.mesh.visible=l<-25:s===2?a.mesh.visible=l>=-25&&l<-5:a.mesh.visible=l>=-5}a.update(t)}),this.terminals.forEach(a=>{const o=a.position&&a.position.y!==void 0?a.position.y:0;s===3?a.mesh.visible=o<-25:s===2?a.mesh.visible=o>=-25&&o<-5:a.mesh.visible=o>=-5,a.update(t)})}}class hm{constructor(t){this.container=t,this.width=t.clientWidth,this.height=t.clientHeight,this.bounds={minX:-24,maxX:24,minZ:-24,maxZ:24},this.obstacles=[],this.target=new P(18,.5,-18),this.goalReached=!1,this.credits=0,this.hasBlastDoor=!1,this.isBlastDoorOpen=!1,this.blastDoorMesh=null,this.doorLight=null,this.doorBulb=null,this.doorCollision=null,this.currentFloor=1,this.elevatorState="idle",this.elevatorUnlockCredits=500,this.elevatorUnlocked=!1,this.elevatorCarriageY=0,this.targetCarriageY=0,this.elevatorGroup=null,this.elevatorCarriage=null,this.winchDrum=null,this.elevatorCables=[],this.elevatorWinchSoundTimer=0,this.wasInElevator=!1,this.level1Obstacles=[],this.subLevel2Obstacles=[],this.subLevel3Obstacles=[],this.subLevel2Group=null,this.subLevel3Group=null,this.glitches=[],this.tacticalRadar=null,this.level1Group=null,this.level1Floor=null,this.level1Grid=null,this.previewFloor=1,this.cameraAltitude=26,this.targetAltitude=26,this.minAltitude=12,this.maxAltitude=52,this.cameraFocus=new P(-11.7,.4,11.7),this.targetFocus=new P(-11.7,.4,11.7),this.isTrackingBot=!0,this.isDraggingPan=!1,this.panStartPos={x:0,y:0},this.panStartFocus={x:0,z:0},this.initThree(),this.obstacleGroup=new pe,this.scene.add(this.obstacleGroup),this.itemManager=new dm(this.scene),this.buildEnvironment(),this.buildTarget(),this.robots=new Map,this.activeRobotId="sparky",this.unlockedRobots=new Set(["sparky"]),this.initRobotFleet(),this.initCameraControls()}get robot(){return this.robots.get(this.activeRobotId)||this.robots.get("sparky")}get deployedRobots(){const t=[];for(const e of this.unlockedRobots){const i=this.robots.get(e);i&&t.push(i)}return t}initRobotFleet(){["sparky","checkers","scanners","tank"].forEach(e=>{const i=new nm(this.scene,{id:e});i.mesh.visible=e==="sparky",this.robots.set(e,i)})}selectRobot(t){return this.unlockedRobots.has(t)?(this.activeRobotId=t,this.recenterCamera(),tt.playRelayClick(),!0):!1}unlockRobot(t,e=!1){const i=this.robots.get(t);if(!i)return!1;if(this.unlockedRobots.has(t))return!0;if(!e&&this.credits<i.cost)return tt.playAccessDenied(),!1;e||(this.credits-=i.cost,this.updateCreditsDisplay()),this.unlockedRobots.add(t),i.mesh.visible=!0;const s=i.config.spawn||{x:-14,z:14};return i.reset(s.x,s.z),tt.playSocketDock(),!0}unlockAllRobots(){["sparky","checkers","scanners","tank"].forEach(t=>{this.unlockRobot(t,!0)})}initThree(){this.scene=new jf,this.scene.background=new Xt(395539),this.scene.fog=new ga(395539,.008),this.camera=new De(45,this.width/this.height,.1,200),this.camera.position.set(0,26,26),this.camera.lookAt(0,0,0),this.renderer=new $f({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Vo,this.renderer.toneMapping=Xo,this.renderer.toneMappingExposure=1.15,this.container.appendChild(this.renderer.domElement);const t=new im(1976635,1.3);this.scene.add(t);const e=new em(14870768,2.2);e.position.set(15,35,15),e.castShadow=!0,e.shadow.mapSize.width=2048,e.shadow.mapSize.height=2048,e.shadow.camera.near=.5,e.shadow.camera.far=100,e.shadow.camera.left=-30,e.shadow.camera.right=30,e.shadow.camera.top=30,e.shadow.camera.bottom=-30,e.shadow.bias=-5e-4,this.scene.add(e);const i=new de(165063,3.5,40);i.position.set(-24,8,-24),this.scene.add(i);const s=new de(1096065,3.5,40);s.position.set(24,8,-24),this.scene.add(s);const r=new de(16096779,3.5,40);r.position.set(-24,8,24),this.scene.add(r);const a=new de(11032055,3.5,40);a.position.set(24,8,24),this.scene.add(a)}buildEnvironment(){this.level1Group=new pe,this.scene.add(this.level1Group);const t=new We(54,54,48,48),e=new xt({color:593174,metalness:.8,roughness:.25});this.level1Floor=new $(t,e),this.level1Floor.rotation.x=-Math.PI/2,this.level1Floor.receiveShadow=!0,this.level1Group.add(this.level1Floor),this.level1Grid=new _r(48,48,959977,1976635),this.level1Grid.position.y=.01,this.level1Group.add(this.level1Grid);const i=new xt({color:988970,metalness:.6,roughness:.5}),s=2.4,r=.8,a=48.8;[{size:[a,s,r],pos:[0,s/2,-24.4]},{size:[a,s,r],pos:[0,s/2,24.4]},{size:[r,s,a],pos:[24.4,s/2,0]},{size:[r,s,a],pos:[-24.4,s/2,0]}].forEach(h=>{const u=new vt(...h.size),d=new $(u,i);d.position.set(...h.pos),d.castShadow=!0,d.receiveShadow=!0,this.level1Group.add(d)});const l=new ue({color:959977});[{size:[48,.06,.06],pos:[0,.05,-24]},{size:[48,.06,.06],pos:[0,.05,24]},{size:[.06,.06,48],pos:[24,.05,0]},{size:[.06,.06,48],pos:[-24,.05,0]}].forEach(h=>{const u=new $(new vt(...h.size),l);u.position.set(...h.pos),this.level1Group.add(u)}),this.spawnRefinery(),this.spawnElevator(),this.level1Obstacles=[...this.obstacles],this.buildSubLevel2(),this.buildSubLevel3(),this.spawnRandomOres(6)}setupMissionArena(t){for(;this.obstacleGroup.children.length>0;){const s=this.obstacleGroup.children[0];this.obstacleGroup.remove(s),s.geometry&&s.geometry.dispose(),s.material&&(Array.isArray(s.material)?s.material.forEach(r=>r.dispose()):s.material.dispose())}this.obstacles=[],t.robotSpawn&&this.robot.reset(t.robotSpawn.x,t.robotSpawn.z),t.targetPos&&(this.target.set(t.targetPos.x,.5,t.targetPos.z),this.targetGroup&&this.targetGroup.position.copy(this.target)),this.goalReached=!1,this.hasBlastDoor=!!t.hasBlastDoor,this.isBlastDoorOpen=!1,this.blastDoorMesh=null,this.doorLight=null,this.doorBulb=null,this.doorBulbMat=null,this.doorCollision=null,(t.obstacles||[]).forEach(s=>{const r=new vt(s.w,s.h,s.d),a=new xt({color:s.color||1976635,metalness:.7,roughness:.35}),o=new $(r,a);o.position.set(s.x,s.h/2,s.z),o.castShadow=!0,o.receiveShadow=!0,this.obstacleGroup.add(o);const l=new vt(s.w*1.01,.15,s.d*1.01),c=new ue({color:16096779}),h=new $(l,c);h.position.set(s.x,s.h-.2,s.z),this.obstacleGroup.add(h),this.obstacles.push({minX:s.x-s.w/2,maxX:s.x+s.w/2,minZ:s.z-s.d/2,maxZ:s.z+s.d/2})}),this.hasBlastDoor&&this.buildBlastDoor(),this.itemManager.clear(),t.items&&t.items.forEach(s=>this.itemManager.addItem(s)),t.terminals&&t.terminals.forEach(s=>this.itemManager.addTerminal(s)),this.spawnRefinery(),this.spawnElevator(),this.level1Obstacles=[...this.obstacles],this.buildSubLevel2(),this.buildSubLevel3(),this.spawnRandomOres(6);const i=document.getElementById("telemetry-credits");i&&(i.textContent=`CREDITS: ${this.credits} CR`)}buildBlastDoor(){const t=new xt({color:988970,metalness:.8,roughness:.3}),e=new vt(1.4,3.8,1.8),i=new $(e,t);i.position.set(-4.5,1.9,0),i.castShadow=!0,i.receiveShadow=!0,this.obstacleGroup.add(i);const s=new vt(1.4,3.8,1.8),r=new $(s,t);r.position.set(4.5,1.9,0),r.castShadow=!0,r.receiveShadow=!0,this.obstacleGroup.add(r);const a=new ue({color:16096779}),o=new $(new vt(1.42,.2,1.82),a);o.position.set(-4.5,3.4,0),this.obstacleGroup.add(o);const l=new $(new vt(1.42,.2,1.82),a);l.position.set(4.5,3.4,0),this.obstacleGroup.add(l);const c=new vt(10.4,.8,2),h=new xt({color:1976635,metalness:.7,roughness:.4}),u=new $(c,h);u.position.set(0,3.8,0),u.castShadow=!0,this.obstacleGroup.add(u),this.doorBulbMat=new xt({color:15680580,emissive:15680580,emissiveIntensity:2.5,roughness:.2});const d=new ie(.2,.2,.15,16);this.doorBulb=new $(d,this.doorBulbMat),this.doorBulb.rotation.x=Math.PI/2,this.doorBulb.position.set(0,3.6,1.05),this.obstacleGroup.add(this.doorBulb);const f=new $(d,this.doorBulbMat);f.rotation.x=Math.PI/2,f.position.set(0,3.6,-1.05),this.obstacleGroup.add(f),this.doorLight=new de(15680580,3,10),this.doorLight.position.set(0,3.6,1.2),this.obstacleGroup.add(this.doorLight);const g=new vt(7.6,2.8,.6),v=new xt({color:3359061,metalness:.85,roughness:.25});this.blastDoorMesh=new $(g,v),this.blastDoorMesh.position.set(0,1.4,0),this.blastDoorMesh.castShadow=!0,this.blastDoorMesh.receiveShadow=!0;const m=new vt(.08,2.7,.62),p=new ue({color:3718648}),S=new $(m,p);this.blastDoorMesh.add(S);const E=new vt(7.62,.2,.62),x=new $(E,a);x.position.y=0,this.blastDoorMesh.add(x),this.obstacleGroup.add(this.blastDoorMesh),this.obstacles.push({minX:-5.2,maxX:-3.8,minZ:-.9,maxZ:.9}),this.obstacles.push({minX:3.8,maxX:5.2,minZ:-.9,maxZ:.9}),this.doorCollision={minX:-3.8,maxX:3.8,minZ:-.6,maxZ:.6},this.obstacles.push(this.doorCollision)}buildTarget(){this.targetGroup=new pe,this.targetGroup.position.copy(this.target);const t=new ie(1.4,1.6,.4,16),e=new xt({color:1976635,metalness:.8}),i=new $(t,e);i.position.y=.2,i.receiveShadow=!0,this.targetGroup.add(i);const s=new Wi(1.2,.06,12,32),r=new ue({color:1096065}),a=new $(s,r);a.rotation.x=Math.PI/2,a.position.y=.6,this.targetGroup.add(a);const o=new xa(.7,0);this.crystalMat=new xt({color:1096065,emissive:366185,emissiveIntensity:1.8,metalness:.2,roughness:.1,transparent:!0,opacity:.92}),this.crystal=new $(o,this.crystalMat),this.crystal.position.y=1.3,this.targetGroup.add(this.crystal),this.targetLight=new de(1096065,3,10),this.targetLight.position.y=1.3,this.targetGroup.add(this.targetLight);const l=document.createElement("canvas");l.width=512,l.height=96;const c=l.getContext("2d");c.clearRect(0,0,512,96),c.fillStyle="rgba(10, 20, 40, 0.82)",c.beginPath(),c.roundRect(8,16,496,64,14),c.fill(),c.strokeStyle="rgba(16, 185, 129, 0.85)",c.lineWidth=3,c.beginPath(),c.roundRect(8,16,496,64,14),c.stroke(),c.fillStyle="#6ee7b7",c.font="bold 36px monospace",c.textAlign="center",c.textBaseline="middle",c.fillText("ENERGY-TERMINAL",256,48);const h=new Ns(l),u=new va({map:h,transparent:!0,depthTest:!1}),d=new Ml(u);d.scale.set(4.1,1.18,1),d.position.set(0,2.6,0),this.targetGroup.add(d),this.scene.add(this.targetGroup)}getRandomSafeFloorPos(){for(let t=0;t<80;t++){const e=Math.round((Math.random()*36-18)*2)/2,i=Math.round((Math.random()*36-18)*2)/2;if(Math.hypot(e- -18,i-18)<4.5||Math.hypot(e- -18,i- -12)<4.5||Math.hypot(e-18,i- -18)<4.5||Math.hypot(e-18,i-14)<4.5)continue;let s=!1;for(const a of this.obstacles)if(e>=a.minX-1.6&&e<=a.maxX+1.6&&i>=a.minZ-1.6&&i<=a.maxZ+1.6){s=!0;break}if(s)continue;let r=!1;for(const a of this.itemManager.items){const o=a.position||a.mesh&&a.mesh.position;if(o&&Math.hypot(e-o.x,i-o.z)<2.8){r=!0;break}}if(!r)return{x:e,z:i}}return{x:(Math.random()-.5)*8,z:(Math.random()-.5)*8}}spawnRefinery(){this.itemManager.terminals.some(t=>t.type==="refinery")||this.itemManager.addTerminal({id:"term_refinery_01",type:"refinery",label:"The Industrial Ore Refinery",x:-18,z:-12,dockRadius:3.8,onSocketed:t=>this.onOreRefined(t)})}spawnElevator(){this.elevatorGroup&&(this.scene.remove(this.elevatorGroup),this.elevatorGroup.traverse(U=>{U.geometry&&U.geometry.dispose(),U.material&&(Array.isArray(U.material)?U.material.forEach(X=>X.dispose()):U.material.dispose())})),this.elevatorGroup=new pe,this.elevatorPos=new P(18,0,14),this.elevatorGroup.position.copy(this.elevatorPos);const t=new xt({color:1976635,metalness:.85,roughness:.35}),e=new xt({color:3359061,metalness:.9,roughness:.25});this.elevatorCarriage=new pe,this.elevatorCarriage.position.y=this.elevatorCarriageY;const i=new vt(4.8,.12,5.2);this.elevatorPlatform=new $(i,t),this.elevatorPlatform.position.y=.06,this.elevatorPlatform.receiveShadow=!0,this.elevatorCarriage.add(this.elevatorPlatform);const s=new ue({color:61695}),r=new $(new vt(4.8,.02,.08),s);r.position.set(0,.13,-2.55),this.elevatorCarriage.add(r);const a=new $(new vt(4.8,.02,.08),s);a.position.set(0,.13,2.55),this.elevatorCarriage.add(a);const o=new $(new vt(.08,.02,5.2),s);o.position.set(2.35,.13,0),this.elevatorCarriage.add(o);const l=new xt({color:959977,emissive:165063,emissiveIntensity:.8}),c=new $(new vt(.4,.04,5),l);c.position.set(-2.4,.04,0),this.elevatorCarriage.add(c);const h=new xt({color:4674921,metalness:.7}),u=new $(new vt(4.4,.08,.08),h);u.position.set(.2,1,-2.55),this.elevatorCarriage.add(u);const d=new $(new vt(4.4,.08,.08),h);d.position.set(.2,2,-2.55),this.elevatorCarriage.add(d);const f=new $(new vt(4.4,.08,.08),h);f.position.set(.2,1,2.55),this.elevatorCarriage.add(f);const g=new $(new vt(4.4,.08,.08),h);g.position.set(.2,2,2.55),this.elevatorCarriage.add(g);const v=new $(new vt(.08,.08,5),h);v.position.set(2.35,1,0),this.elevatorCarriage.add(v);const m=new $(new vt(.08,.08,5),h);m.position.set(2.35,2,0),this.elevatorCarriage.add(m),this.elevatorBeaconMat=new xt({color:959977,emissive:959977,emissiveIntensity:2.2});const p=new Mi(.22,16,16);this.elevatorBeacon=new $(p,this.elevatorBeaconMat),this.elevatorBeacon.position.set(-2.35,2.5,0),this.elevatorCarriage.add(this.elevatorBeacon),this.elevatorLight=new de(959977,2.4,10),this.elevatorLight.position.set(-2.35,2.5,0),this.elevatorCarriage.add(this.elevatorLight),this.elevatorGroup.add(this.elevatorCarriage);const S=new vt(.2,23.5,.2);[[-2.35,2.55],[-2.35,-2.55],[2.35,2.55],[2.35,-2.55]].forEach(U=>{const X=new $(S,e);X.position.set(U[0],-7.75,U[1]),X.castShadow=!0,X.receiveShadow=!0,this.elevatorGroup.add(X)});const x=new $(new vt(4.8,.2,.16),t);x.position.set(0,4,-2.55),this.elevatorGroup.add(x);const D=new $(new vt(4.8,.2,.16),t);D.position.set(0,4,2.55),this.elevatorGroup.add(D);const R=new $(new vt(.16,.2,5.2),t);R.position.set(2.35,4,0),this.elevatorGroup.add(R);const C=new $(new vt(.16,.2,5.2),t);C.position.set(-2.35,4,0),this.elevatorGroup.add(C),[-9,-18].forEach(U=>{const X=new $(new vt(4.8,.15,.15),t);X.position.set(0,U,-2.55),this.elevatorGroup.add(X);const G=new $(new vt(4.8,.15,.15),t);G.position.set(0,U,2.55),this.elevatorGroup.add(G);const at=new $(new vt(.15,.15,5.2),t);at.position.set(2.35,U,0),this.elevatorGroup.add(at)});const w=new ie(.28,.28,3.6,16),_=new xt({color:593174,metalness:.9,roughness:.2});this.winchDrum=new $(w,_),this.winchDrum.rotation.z=Math.PI/2,this.winchDrum.position.set(0,4.35,0),this.elevatorGroup.add(this.winchDrum),this.elevatorCables=[];const y=new xt({color:9741240,metalness:.95});[[-1.8,-2],[-1.8,2],[1.8,-2],[1.8,2]].forEach(U=>{const X=new ie(.02,.02,1,6),G=new $(X,y);G.position.set(U[0],2.2,U[1]),this.elevatorGroup.add(G),this.elevatorCables.push(G)}),this.buildElevatorSign(),this.scene.add(this.elevatorGroup);const L=14,I={minX:16.8,maxX:20.45,minZ:L-2.65,maxZ:L-2.45},k={minX:16.8,maxX:20.45,minZ:L+2.45,maxZ:L+2.65},H={minX:20.25,maxX:20.45,minZ:L-2.65,maxZ:L+2.65};this.obstacles.some(U=>U.minX===I.minX&&U.minZ===I.minZ)||this.obstacles.push(I),this.obstacles.some(U=>U.minX===k.minX&&U.minZ===k.minZ)||this.obstacles.push(k),this.obstacles.some(U=>U.minX===H.minX&&U.minZ===H.minZ)||this.obstacles.push(H)}buildElevatorSign(){const t=new pe;t.position.set(0,4.85,1.95);const e=new xt({color:3359061,metalness:.85,roughness:.3}),i=new ie(.04,.04,.9,6),s=new $(i,e);s.position.set(-1.6,-.45,-.1),t.add(s);const r=new $(i,e);r.position.set(1.6,-.45,-.1),t.add(r);const a=new vt(4.2,1.25,.08),o=new xt({color:593174,metalness:.8,roughness:.3}),l=new $(a,o);l.castShadow=!0,t.add(l);let c=null;if(typeof document<"u"&&document.createElement)try{const h=document.createElement("canvas");h.width=1024,h.height=256;const u=h.getContext("2d");u&&(u.fillStyle="#0a0f1d",u.fillRect(0,0,1024,256),u.strokeStyle="#00f0ff",u.lineWidth=14,u.strokeRect(8,8,1008,240),u.fillStyle="#00f0ff",u.font='900 132px "Arial Black", Impact, sans-serif',u.textAlign="center",u.textBaseline="middle",u.fillText("ELEVATOR",512,134),c=new Ns(h),c.generateMipmaps=!0,c.minFilter=li,c.magFilter=Ne,c.needsUpdate=!0)}catch(h){console.warn("Elevator sign texture fallback:",h)}if(c){const h=new ue({map:c}),u=new We(4.1,1.18),d=new $(u,h);d.position.set(0,0,.045),t.add(d);const f=new $(u,h);f.position.set(0,0,-.045),f.rotation.y=Math.PI,t.add(f)}t.rotation.x=-.42,this.elevatorGroup.add(t)}buildSubLevel2(){this.subLevel2Group&&(this.scene.remove(this.subLevel2Group),this.subLevel2Group.traverse(L=>{L.geometry&&L.geometry.dispose(),L.material&&(Array.isArray(L.material)?L.material.forEach(I=>I.dispose()):L.material.dispose())})),this.subLevel2Group=new pe,this.subLevel2Obstacles=[];const t=-18,e=new We(54,54,32,32),i=new xt({color:527122,metalness:.85,roughness:.4}),s=new $(e,i);s.rotation.x=-Math.PI/2,s.position.y=t,s.receiveShadow=!0,this.subLevel2Group.add(s);const r=new _r(48,48,16347926,4528643);r.position.y=t+.02,this.subLevel2Group.add(r);const a=new xt({color:988970,metalness:.7,roughness:.5}),o=4,l=.8,c=48.8;[{size:[c,o,l],pos:[0,t+o/2,-24.4]},{size:[c,o,l],pos:[0,t+o/2,24.4]},{size:[l,o,c],pos:[24.4,t+o/2,0]},{size:[l,o,c],pos:[-24.4,t+o/2,0]}].forEach(L=>{const I=new $(new vt(...L.size),a);I.position.set(...L.pos),I.castShadow=!0,I.receiveShadow=!0,this.subLevel2Group.add(I)});const u=new ue({color:16347926});[{size:[48,.1,.1],pos:[0,t+.06,-24]},{size:[48,.1,.1],pos:[0,t+.06,24]},{size:[.1,.1,48],pos:[24,t+.06,0]},{size:[.1,.1,48],pos:[-24,t+.06,0]}].forEach(L=>{const I=new $(new vt(...L.size),u);I.position.set(...L.pos),this.subLevel2Group.add(I)});const f=new de(16347926,3.2,40);f.position.set(-6,t+6,6),this.subLevel2Group.add(f);const g=new de(15680580,2.5,35);g.position.set(6,t+6,-8),this.subLevel2Group.add(g);const v=new de(440020,3.2,30);v.position.set(-16,t+5,-16),this.subLevel2Group.add(v);const m=new de(959977,2.8,25);m.position.set(18,t+5,14),this.subLevel2Group.add(m);const p=new vt(5,.08,5.4),S=new xt({color:1976635,metalness:.9,roughness:.25}),E=new $(p,S);E.position.set(18,t+.04,14),E.receiveShadow=!0,this.subLevel2Group.add(E);const x=14;this.subLevel2Obstacles.push({minX:16.8,maxX:20.45,minZ:x-2.65,maxZ:x-2.45}),this.subLevel2Obstacles.push({minX:16.8,maxX:20.45,minZ:x+2.45,maxZ:x+2.65}),this.subLevel2Obstacles.push({minX:20.25,maxX:20.45,minZ:x-2.65,maxZ:x+2.65}),[{w:3.2,h:4.8,d:3.2,x:-8,z:-8,color:1976635},{w:2.8,h:4.2,d:4,x:6,z:-10,color:1976635},{w:3.5,h:4.4,d:2.6,x:-10,z:8,color:1976635},{w:5.2,h:2.4,d:1.8,x:0,z:-4,color:3359061}].forEach(L=>{const I=new vt(L.w,L.h,L.d),k=new xt({color:L.color,metalness:.8,roughness:.3}),H=new $(I,k);H.position.set(L.x,t+L.h/2,L.z),H.castShadow=!0,H.receiveShadow=!0,this.subLevel2Group.add(H);const U=new $(new vt(L.w*1.01,.2,L.d*1.01),new ue({color:16347926}));U.position.set(L.x,t+L.h-.4,L.z),this.subLevel2Group.add(U),this.subLevel2Obstacles.push({minX:L.x-L.w/2,maxX:L.x+L.w/2,minZ:L.z-L.d/2,maxZ:L.z+L.d/2})});const R=new vt(2.4,2.2,1.8),C=new xt({color:988970,metalness:.9,roughness:.2}),w=new $(R,C);w.position.set(-16,t+1.1,-16),this.subLevel2Group.add(w);const _=new We(1.6,1),y=new ue({color:440020}),T=new $(_,y);T.position.set(-16,t+1.3,-15.09),this.subLevel2Group.add(T),this.subLevel2Obstacles.push({minX:-17.5,maxX:-14.5,minZ:-17.2,maxZ:-14.8}),this.scene.add(this.subLevel2Group),this.spawnSubLevel2Ores()}spawnSubLevel2Ores(){[{type:"raw_ore",label:"Vibranium Crystal (+300 CR)",color:11032055,value:300,x:-14,z:12,y:-17.72},{type:"raw_ore",label:"Hyper-Dense Core (+500 CR)",color:440020,value:500,x:12,z:-14,y:-17.72},{type:"raw_ore",label:"Dark Matter Shard (+750 CR)",color:15485081,value:750,x:-4,z:-16,y:-17.72},{type:"raw_ore",label:"Vibranium Crystal (+300 CR)",color:11032055,value:300,x:8,z:6,y:-17.72},{type:"raw_ore",label:"Hyper-Dense Core (+500 CR)",color:440020,value:500,x:-18,z:-4,y:-17.72}].forEach(e=>{this.itemManager.addItem({...e,id:`sub2_ore_${Date.now()}_${Math.random().toString(36).substr(2,5)}`})})}buildSubLevel3(){this.subLevel3Group&&(this.scene.remove(this.subLevel3Group),this.subLevel3Group.traverse(I=>{I.geometry&&I.geometry.dispose(),I.material&&(Array.isArray(I.material)?I.material.forEach(k=>k.dispose()):I.material.dispose())})),this.subLevel3Group=new pe,this.subLevel3Obstacles=[],this.glitches=[];const t=-36,e=new We(54,54,32,32),i=new xt({color:198418,roughness:.95,metalness:.2}),s=new $(e,i);s.rotation.x=-Math.PI/2,s.position.y=t,s.receiveShadow=!0,this.subLevel3Group.add(s);const r=new _r(48,48,440020,5774471);r.position.y=t+.02,this.subLevel3Group.add(r);const a=new xt({color:132631,metalness:.85,roughness:.25}),o=.8,l=4,c=49.6;[{size:[c,l,o],pos:[0,t+l/2,-24.4]},{size:[c,l,o],pos:[0,t+l/2,24.4]},{size:[o,l,c],pos:[24.4,t+l/2,0]},{size:[o,l,c],pos:[-24.4,t+l/2,0]}].forEach(I=>{const k=new $(new vt(...I.size),a);k.position.set(...I.pos),k.castShadow=!0,k.receiveShadow=!0,this.subLevel3Group.add(k)});const u=new ue({color:440020});[{size:[48,.1,.1],pos:[0,t+.06,-24]},{size:[48,.1,.1],pos:[0,t+.06,24]},{size:[.1,.1,48],pos:[24,t+.06,0]},{size:[.1,.1,48],pos:[-24,t+.06,0]}].forEach(I=>{const k=new $(new vt(...I.size),u);k.position.set(...I.pos),this.subLevel3Group.add(k)});const f=new de(11032055,2.5,45);f.position.set(-8,t+6,8),this.subLevel3Group.add(f);const g=new de(440020,2.8,40);g.position.set(8,t+6,-8),this.subLevel3Group.add(g);const v=new de(15485081,2,35);v.position.set(-14,t+5,-14),this.subLevel3Group.add(v);const m=new de(3718648,3.2,30);m.position.set(18,t+5,14),this.subLevel3Group.add(m);const p=new vt(5,.08,5.4),S=new xt({color:988970,metalness:.9,roughness:.2}),E=new $(p,S);E.position.set(18,t+.04,14),E.receiveShadow=!0,this.subLevel3Group.add(E);const x=14;this.subLevel3Obstacles.push({minX:16.8,maxX:20.45,minZ:x-2.65,maxZ:x-2.45}),this.subLevel3Obstacles.push({minX:16.8,maxX:20.45,minZ:x+2.45,maxZ:x+2.65}),this.subLevel3Obstacles.push({minX:20.25,maxX:20.45,minZ:x-2.65,maxZ:x+2.65}),[{x:-10,z:8,w:3.5,d:3.5,h:5,color:132631},{x:8,z:-10,w:4,d:3,h:5.5,color:132631},{x:-6,z:-12,w:3,d:4,h:4.8,color:132631},{x:6,z:6,w:3.2,d:3.2,h:5,color:132631}].forEach(I=>{const k=new vt(I.w,I.h,I.d),H=new xt({color:I.color,metalness:.85,roughness:.2}),U=new $(k,H);U.position.set(I.x,t+I.h/2,I.z),U.castShadow=!0,U.receiveShadow=!0,this.subLevel3Group.add(U);const X=new $(new vt(I.w*1.01,.2,I.d*1.01),new ue({color:440020}));X.position.set(I.x,t+I.h-.5,I.z),this.subLevel3Group.add(X),this.subLevel3Obstacles.push({minX:I.x-I.w/2,maxX:I.x+I.w/2,minZ:I.z-I.d/2,maxZ:I.z+I.d/2})});const R=new vt(2.4,2.2,1.8),C=new xt({color:593174,metalness:.9,roughness:.2}),w=new $(R,C);w.position.set(-16,t+1.1,-16),this.subLevel3Group.add(w);const _=new We(1.6,1),y=new ue({color:15485081}),T=new $(_,y);T.position.set(-16,t+1.3,-15.09),this.subLevel3Group.add(T),this.subLevel3Obstacles.push({minX:-17.5,maxX:-14.5,minZ:-17.2,maxZ:-14.8}),[{id:"glitch_1",baseX:-8,baseZ:8,rx:7,rz:6,speed:.75,phase:0},{id:"glitch_2",baseX:8,baseZ:-8,rx:8,rz:5,speed:.6,phase:2},{id:"glitch_3",baseX:0,baseZ:-2,rx:6,rz:7,speed:.85,phase:4}].forEach(I=>{const k=new pe;k.position.set(I.baseX,t+1.2,I.baseZ);const H=new ya(.75,1),U=new ue({color:15680580,wireframe:!0}),X=new $(H,U);k.add(X);const G=new Mi(.35,12,12),at=new ue({color:16777215}),dt=new $(G,at);k.add(dt);const gt=new de(15680580,2.5,10);k.add(gt),this.subLevel3Group.add(k),this.glitches.push({...I,x:I.baseX,z:I.baseZ,mesh:k,coreMesh:X,light:gt,time:I.phase})}),this.scene.add(this.subLevel3Group),this.spawnSubLevel3Ores()}spawnSubLevel3Ores(){[{type:"raw_ore",label:"Quantum Data Core (+1000 CR)",color:15485081,value:1e3,x:-14,z:14,y:-35.72},{type:"raw_ore",label:"Neural Matrix Crystal (+1200 CR)",color:440020,value:1200,x:14,z:-14,y:-35.72},{type:"raw_ore",label:"Superconductor Core (+1500 CR)",color:1096065,value:1500,x:-6,z:-6,y:-35.72},{type:"raw_ore",label:"Dark Logic Shard (+1000 CR)",color:11032055,value:1e3,x:14,z:8,y:-35.72},{type:"raw_ore",label:"Quantum Data Core (+1000 CR)",color:15485081,value:1e3,x:2,z:-16,y:-35.72}].forEach(e=>{this.itemManager.addItem({...e,id:`sub3_ore_${Date.now()}_${Math.random().toString(36).substr(2,5)}`})})}boardElevator(){if(this.elevatorState!=="idle")return;const t=this.currentFloor===1?.4:this.currentFloor===2?-17.6:-35.6;this.robot.position.set(18,t,14),this.robot.velocity.set(0,0,0),this.robot.mesh.position.copy(this.robot.position),this.recenterCamera(),tt.playRelayClick();const e=document.getElementById("goal-banner");e&&(e.textContent="🛗 SPARKY BOARDED THE FREIGHT ELEVATOR // WINCH READY [F]",e.style.background="rgba(16, 185, 129, 0.25)",e.style.borderColor="#10b981",e.style.boxShadow="0 0 25px rgba(16, 185, 129, 0.5)",e.style.color="#10b981",e.classList.add("show"),setTimeout(()=>e.classList.remove("show"),3e3)),this.updateElevatorHUD(!0,this.credits>=this.elevatorUnlockCredits,!0)}goToFloor(t){if(this.elevatorState!=="idle")return;if(this.credits<this.elevatorUnlockCredits){tt.playAccessDenied();return}if(t===this.currentFloor)return;let e=0;if(t===2&&(e=-18),t===3&&(e=-36),Math.hypot(this.robot.position.x-18,this.robot.position.z-14)<8){const r=this.currentFloor===1?.4:this.currentFloor===2?-17.6:-35.6;this.robot.position.set(18,r,14),this.robot.velocity.set(0,0,0),this.robot.mesh.position.copy(this.robot.position)}this.targetCarriageY=e,this.elevatorState=e<this.elevatorCarriageY?"moving_down":"moving_up",this.elevatorWinchSoundTimer=0,tt.playWinchMove();const s=document.getElementById("goal-banner");if(s){const r={1:"LEVEL 1 (SEWER LABS)",2:"SUB-LEVEL 2 (QUARRY)",3:"SUB-LEVEL 3 (ABYSSAL DATA CORE)"},a=e<this.elevatorCarriageY?"LOWERING":"HOISTING";s.textContent=`⚙️ WINCH MOTOR ENGAGED // ${a} CARRIAGE TO ${r[t]}...`,s.style.background=t===3?"rgba(168, 85, 247, 0.25)":t===2?"rgba(245, 158, 11, 0.25)":"rgba(14, 165, 233, 0.25)",s.style.borderColor=t===3?"#a855f7":t===2?"#fbbf24":"#0ea5e9",s.style.boxShadow=`0 0 25px ${t===3?"rgba(168, 85, 247, 0.5)":t===2?"rgba(251, 191, 36, 0.5)":"rgba(14, 165, 233, 0.5)"}`,s.style.color=t===3?"#d8b4fe":t===2?"#fbbf24":"#38bdf8",s.classList.add("show")}}toggleElevator(){this.elevatorState==="idle"&&(this.currentFloor===1?this.goToFloor(2):this.currentFloor===2?this.goToFloor(3):this.goToFloor(1))}startElevatorDescent(){this.currentFloor===1?this.goToFloor(2):this.currentFloor===2&&this.goToFloor(3)}startElevatorAscent(){this.currentFloor===3?this.goToFloor(2):this.currentFloor===2&&this.goToFloor(1)}grantTestCredits(){this.credits=Math.max(this.credits+500,500);const t=document.getElementById("telemetry-credits");t&&(t.textContent=`CREDITS: ${this.credits} CR`),tt.playPowerUnlock();const e=document.getElementById("goal-banner");e&&(e.textContent=`⚡ TEST OVERRIDE: CREDITS NOW ${this.credits} CR // WINCH POWER ONLINE ⚡`,e.style.background="rgba(16, 185, 129, 0.25)",e.style.borderColor="#10b981",e.style.boxShadow="0 0 25px rgba(16, 185, 129, 0.5)",e.style.color="#34d399",e.classList.add("show"),setTimeout(()=>e.classList.remove("show"),3500)),this.updateElevatorHUD(!0,!0,!0)}resetRobot(){this.currentFloor=1,this.previewFloor=1,this.updateCamFloorButton(),this.elevatorState="idle",this.elevatorCarriageY=0,this.elevatorCarriage&&(this.elevatorCarriage.position.y=0),this.obstacles=this.level1Obstacles,this.robot.reset(-18,18),this.recenterCamera()}updateElevatorHUD(t,e,i=!1){const s=document.getElementById("elevator-hud-panel");if(!s)return;if(!t&&!i&&this.elevatorState==="idle"){s.classList.add("hidden");return}s.classList.remove("hidden");const r=document.getElementById("elevator-hud-floor");if(r){const g={1:"CURRENT: LEVEL 1",2:"CURRENT: SUB-LEVEL 2",3:"CURRENT: SUB-LEVEL 3 (CORE)"};r.textContent=g[this.currentFloor]||"CURRENT: LEVEL 1"}const a=s.querySelector(".elevator-status-dot");a&&(e?a.classList.add("unlocked"):a.classList.remove("unlocked"));const o=document.getElementById("elevator-power-label"),l=document.getElementById("elevator-power-bar"),c=Math.min(100,Math.round(this.credits/this.elevatorUnlockCredits*100));l&&(l.style.width=`${c}%`),o&&(e?(o.textContent=`WINCH POWER: ONLINE (CREDITS: ${this.credits} CR)`,o.style.color="#10b981"):(o.textContent=`POWER STATUS: LOCKED (NEED 500 CR // HAVE ${this.credits} CR)`,o.style.color="#f59e0b")),document.querySelectorAll(".elevator-floor-btn").forEach(g=>{const v=parseInt(g.dataset.floor,10);g.classList.toggle("active",v===this.currentFloor),g.disabled=!e||this.elevatorState!=="idle"});const u=document.getElementById("elevator-action-btn"),d=document.getElementById("elevator-action-icon"),f=document.getElementById("elevator-action-label");u&&f&&d&&(this.elevatorState!=="idle"?(u.disabled=!0,u.className="elevator-action-btn moving",d.textContent="⚙️",f.textContent=this.elevatorState==="moving_down"?"WINCH TRAVELING DOWNWARD...":"WINCH TRAVELING UPWARD..."):e?(u.disabled=!1,u.className="elevator-action-btn unlocked",t?this.currentFloor===1?(d.textContent="▼",f.textContent="DESCEND TO SUB-LEVEL 2 [F]"):this.currentFloor===2?(d.textContent="▼",f.textContent="DESCEND TO SUB-LEVEL 3 (CORE) [F]"):(d.textContent="▲",f.textContent="ASCEND TO LEVEL 1 [F]"):(d.textContent="🛗",f.textContent="BOARD & TRAVEL [F / B]")):(u.disabled=!0,u.className="elevator-action-btn locked",d.textContent="🔒",f.textContent=`LOCKED (${this.credits} / 500 CR)`))}spawnRandomOres(t=6){const e=[{type:"raw_ore",label:"Aurum Gold Ore (+100 CR)",color:16096779,value:100},{type:"raw_ore",label:"Emerald Chromium Ore (+150 CR)",color:1096065,value:150},{type:"raw_ore",label:"Quantum Cyan Ore (+250 CR)",color:61695,value:250},{type:"raw_ore",label:"Dark Matter Ore Cluster (+500 CR)",color:11032055,value:500}];for(let i=0;i<t;i++){const s=this.getRandomSafeFloorPos(),r=Math.random();let a=e[0];r>.93?a=e[3]:r>.75?a=e[2]:r>.45&&(a=e[1]),this.itemManager.addItem({...a,id:`ore_${Date.now()}_${Math.random().toString(36).substr(2,5)}`,x:s.x,z:s.z})}}spawnSingleRandomOre(){this.spawnRandomOres(1)}onOreRefined(t){const e=t&&t.value?t.value:100;this.credits+=e;const i=document.getElementById("telemetry-credits");i&&(i.textContent=`CREDITS: ${this.credits} CR`);const s=document.getElementById("goal-banner");if(s){const r=t&&t.label?t.label.replace(/\s*\(.*\)/,""):"RAW ORE";s.textContent=`⚡ ${r.toUpperCase()} REFINED: +${e} CR // TOTAL: ${this.credits} CR ⚡`,s.style.background="rgba(245, 158, 11, 0.25)",s.style.borderColor="#fbbf24",s.style.boxShadow="0 0 25px rgba(251, 191, 36, 0.5)",s.style.color="#fbbf24",s.classList.add("show"),clearTimeout(this._oreBannerTimeout),this._oreBannerTimeout=setTimeout(()=>{s&&(s.classList.remove("show"),s.style.background="",s.style.borderColor="",s.style.boxShadow="",s.style.color="",s.textContent="✨ TARGET CRYSTAL ACCESSED // SECTOR POWER RESTORED ✨")},3500)}setTimeout(()=>{this.spawnSingleRandomOre()},2e3)}initCameraControls(){const t=this.container;t.addEventListener("wheel",e=>{e.preventDefault();const i=4,s=Math.sign(e.deltaY);this.targetAltitude=Yi.clamp(this.targetAltitude+s*i,this.minAltitude,this.maxAltitude)},{passive:!1}),t.addEventListener("mousedown",e=>{(e.button===2||e.button===1||e.button===0&&e.shiftKey)&&(e.preventDefault(),this.isDraggingPan=!0,this.isTrackingBot=!1,this.panStartPos={x:e.clientX,y:e.clientY},this.panStartFocus={x:this.targetFocus.x,z:this.targetFocus.z},t.style.cursor="grab",this.updateHudRecenterButton())}),window.addEventListener("mousemove",e=>{if(!this.isDraggingPan)return;const i=e.clientX-this.panStartPos.x,s=e.clientY-this.panStartPos.y,r=this.cameraAltitude/26*.045;this.targetFocus.x=Yi.clamp(this.panStartFocus.x-i*r,-28,28),this.targetFocus.z=Yi.clamp(this.panStartFocus.z+s*r,-28,28)}),window.addEventListener("mouseup",e=>{this.isDraggingPan&&(this.isDraggingPan=!1,t.style.cursor="default")}),t.addEventListener("contextmenu",e=>{e.preventDefault()}),t.addEventListener("dblclick",e=>{e.preventDefault(),this.recenterCamera()})}zoomIn(){this.targetAltitude=Yi.clamp(this.targetAltitude-6,this.minAltitude,this.maxAltitude)}zoomOut(){this.targetAltitude=Yi.clamp(this.targetAltitude+6,this.minAltitude,this.maxAltitude)}recenterCamera(){this.isTrackingBot=!0,this.updateHudRecenterButton()}updateHudRecenterButton(){const t=document.getElementById("cam-recenter");t&&(this.isTrackingBot?(t.classList.add("tracking"),t.title="Tracking Flux (Click or Double-Click to Reset View)"):(t.classList.remove("tracking"),t.title="Recenter on Flux [🎯] (Camera Unlocked)"))}toggleFloorView(){if(this.elevatorState!=="idle")return;const t=this.previewFloor||this.currentFloor||1;let e=1;t===1?e=2:t===2?e=3:e=1,this.previewFloor=e,tt.playRelayClick(),this.updateCamFloorButton(),e===3&&this.tacticalRadar&&this.tacticalRadar.show();const i=document.getElementById("goal-banner");if(i){const s={1:"👁️ CAMERA SCANNING LEVEL 1 // MAIN SEWER LABS",2:"👁️ CAMERA SCANNING SUB-LEVEL 2 // DEEP CORE MINING QUARRY",3:"🌌 CAMERA SCANNING SUB-LEVEL 3 // ABYSSAL DATA CORE (-36m)"};i.textContent=s[this.previewFloor]||s[1],i.style.background=this.previewFloor===3?"rgba(168, 85, 247, 0.25)":"rgba(14, 165, 233, 0.25)",i.style.borderColor=this.previewFloor===3?"#a855f7":"#0ea5e9",i.style.boxShadow=`0 0 25px ${this.previewFloor===3?"rgba(168, 85, 247, 0.5)":"rgba(14, 165, 233, 0.5)"}`,i.style.color=this.previewFloor===3?"#d8b4fe":"#38bdf8",i.classList.add("show"),setTimeout(()=>i.classList.remove("show"),2500)}}updateCamFloorButton(){const t=document.getElementById("cam-floor-toggle");if(t){const e=this.previewFloor||this.currentFloor||1;e===1?(t.textContent="🛗 L2",t.title="Switch View to Sub-Level 2 Quarry [L]"):e===2?(t.textContent="🌌 L3",t.title="Switch View to Sub-Level 3 Abyssal Data Core [L]"):(t.textContent="🏢 L1",t.title="Switch View to Level 1 Labs [L]")}}resize(){this.width=this.container.clientWidth,this.height=this.container.clientHeight,this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.width,this.height)}update(t,e){const i=this.deployedRobots;for(const d of i){const f=d.id===this.activeRobotId?e:d.circuitActuators||{};d.effectiveActuators=f,d.update(t,f,this.bounds,this.obstacles,this.target)}const s=this.currentFloor===3||this.previewFloor===3||this.elevatorCarriageY<-21,r=!s&&(this.currentFloor===2||this.previewFloor===2||this.elevatorCarriageY<-3.5&&this.elevatorCarriageY>=-21),a=s?3:r?2:1;if(this.itemManager.update(t,i,e,a),this.glitches&&this.glitches.length>0)for(const d of this.glitches){d.time+=t*d.speed,d.x=d.baseX+Math.sin(d.time)*d.rx,d.z=d.baseZ+Math.cos(d.time*.8)*d.rz,d.mesh&&(d.mesh.position.x=d.x,d.mesh.position.z=d.z,d.coreMesh&&(d.coreMesh.rotation.x+=t*2,d.coreMesh.rotation.y+=t*3),d.light&&(d.light.intensity=2+Math.sin(Date.now()*.01)*1));for(const f of i){const g=Math.hypot(f.position.x-d.x,f.position.z-d.z),v=f.position.y||.4;if(g<1.8&&v<-25&&(!f.empStunTimer||f.empStunTimer<=0)){f.empStunTimer=4,tt.playGlitchStatic();const m=document.getElementById("goal-banner");m&&(m.textContent=`⚡ EMP DISCHARGE! ${f.name.toUpperCase()} STUNNED BY CORRUPT GLITCH (4s) ⚡`,m.style.background="rgba(239, 68, 68, 0.35)",m.style.borderColor="#ef4444",m.style.boxShadow="0 0 25px rgba(239, 68, 68, 0.6)",m.style.color="#fca5a5",m.classList.add("show"),setTimeout(()=>m.classList.remove("show"),3500))}}}this.crystal&&(this.crystal.rotation.y+=.02,this.crystal.rotation.x+=.01,this.crystal.position.y=1.3+Math.sin(Date.now()*.003)*.12);const o=this.robot.position.distanceTo(this.target);o<2&&!this.goalReached?(this.goalReached=!0,tt.playGoalChime(),this.onGoalReached&&this.onGoalReached()):o>=2.6&&this.goalReached&&(this.goalReached=!1),this.cameraAltitude+=(this.targetAltitude-this.cameraAltitude)*.12,this.level1Group&&(this.level1Group.visible=!r&&!s),this.subLevel2Group&&(this.subLevel2Group.visible=r),this.subLevel3Group&&(this.subLevel3Group.visible=s),this.obstacleGroup&&(this.obstacleGroup.visible=!r&&!s),this.targetGroup&&(this.targetGroup.visible=!r&&!s);const l=document.getElementById("radar-blind-overlay");if(l&&l.classList.toggle("hidden",!s),this.isTrackingBot)if(s&&this.currentFloor!==3)this.targetFocus.x=0,this.targetFocus.z=0,this.targetFocus.y=-36;else if(r&&this.currentFloor!==2)this.targetFocus.x=0,this.targetFocus.z=0,this.targetFocus.y=-18;else{const d=(this.cameraAltitude-this.minAltitude)/(this.maxAltitude-this.minAltitude),f=Yi.lerp(.85,.2,d);this.targetFocus.x=this.robot.position.x*f,this.targetFocus.z=this.robot.position.z*f,this.targetFocus.y=this.robot.position.y}this.cameraFocus.x+=(this.targetFocus.x-this.cameraFocus.x)*.1,this.cameraFocus.y+=(this.targetFocus.y-this.cameraFocus.y)*.1,this.cameraFocus.z+=(this.targetFocus.z-this.cameraFocus.z)*.1;let c=this.cameraFocus.x,h,u;if(s){const d=Math.min(24,this.cameraAltitude*.88);h=this.cameraFocus.y+d,u=this.cameraFocus.z+d*.95}else if(r){const d=Math.min(22,this.cameraAltitude*.85);h=this.cameraFocus.y+d,u=this.cameraFocus.z+d*.95}else h=this.cameraFocus.y+this.cameraAltitude,u=this.cameraFocus.z+this.cameraAltitude*.95;if(this.camera.position.x+=(c-this.camera.position.x)*.1,this.camera.position.y+=(h-this.camera.position.y)*.1,this.camera.position.z+=(u-this.camera.position.z)*.1,this.camera.lookAt(this.cameraFocus.x,this.cameraFocus.y,this.cameraFocus.z),this.hasBlastDoor&&this.blastDoorMesh){const g=this.itemManager.terminals.some(m=>m.type==="keycard_reader"&&m.isOccupied)||!!(e&&(e.beacon_ping||e.aux_light))?4.2:1.4,v=6;if(this.blastDoorMesh.position.y+=(g-this.blastDoorMesh.position.y)*Math.min(1,(t||.016)*v),this.blastDoorMesh.position.y>3){if(!this.isBlastDoorOpen){this.isBlastDoorOpen=!0,this.doorBulbMat&&(this.doorBulbMat.color.setHex(1096065),this.doorBulbMat.emissive.setHex(1096065)),this.doorLight&&this.doorLight.color.setHex(1096065);const m=this.obstacles.indexOf(this.doorCollision);m!==-1&&this.obstacles.splice(m,1)}}else this.isBlastDoorOpen&&(this.isBlastDoorOpen=!1,this.doorBulbMat&&(this.doorBulbMat.color.setHex(15680580),this.doorBulbMat.emissive.setHex(15680580)),this.doorLight&&this.doorLight.color.setHex(15680580),this.doorCollision&&!this.obstacles.includes(this.doorCollision)&&this.obstacles.push(this.doorCollision))}if(this.elevatorCarriage)if(this.elevatorState==="moving_down"||this.elevatorState==="moving_up"){const d=this.targetCarriageY,f=d-this.elevatorCarriageY,v=Math.sign(f)*Math.min(Math.abs(f),5.2*t);this.elevatorCarriageY+=v,this.elevatorCarriage.position.y=this.elevatorCarriageY,this.winchDrum&&(this.winchDrum.rotation.x+=(this.elevatorState==="moving_down"?1:-1)*t*8);const m=4.3,p=this.elevatorCarriageY+.1,S=Math.max(.2,m-p);this.elevatorCables.forEach(E=>{E.scale.set(1,S,1),E.position.y=m-S/2});for(const E of this.deployedRobots){const x=Math.hypot(E.position.x-18,E.position.z-14);(E.onElevator||x<3.2)&&(E.onElevator=!0,E.position.set(18,this.elevatorCarriageY+.4,14),E.velocity.set(0,0,0),E.mesh.position.copy(E.position))}if(this.elevatorWinchSoundTimer-=t,this.elevatorWinchSoundTimer<=0&&(tt.playWinchMove(),this.elevatorWinchSoundTimer=.35),Math.abs(this.elevatorCarriageY-d)<.05){this.elevatorCarriageY=d,this.elevatorCarriage.position.y=d,this.currentFloor=d===0?1:d===-18?2:3,this.previewFloor=this.currentFloor,this.updateCamFloorButton(),this.elevatorState="idle",this.obstacles=this.currentFloor===1?this.level1Obstacles:this.currentFloor===2?this.subLevel2Obstacles:this.subLevel3Obstacles;for(const x of this.deployedRobots)x.onElevator&&(x.onElevator=!1,x.position.set(17.2,d+.4,14),x.mesh.position.copy(x.position));tt.playElevatorArrive(),this.currentFloor===3&&this.tacticalRadar&&this.tacticalRadar.show();const E=document.getElementById("goal-banner");if(E){const x={1:"🛗 RETURNED TO LEVEL 1 // MAIN SEWER LABS",2:"🛗 ARRIVED AT SUB-LEVEL 2 // DEEP CORE MINING QUARRY",3:"🌌 ARRIVED AT SUB-LEVEL 3 // ABYSSAL DATA CORE (-36m)"};E.textContent=x[this.currentFloor]||x[1],E.style.background=this.currentFloor===3?"rgba(168, 85, 247, 0.25)":"rgba(14, 165, 233, 0.25)",E.style.borderColor=this.currentFloor===3?"#a855f7":"#0ea5e9",E.style.boxShadow=`0 0 25px ${this.currentFloor===3?"rgba(168, 85, 247, 0.5)":"rgba(14, 165, 233, 0.5)"}`,E.style.color=this.currentFloor===3?"#d8b4fe":"#38bdf8",E.classList.add("show"),setTimeout(()=>E.classList.remove("show"),3500)}}}else{const d=Math.hypot(this.robot.position.x-18,this.robot.position.z-14),f=d<3.2||Math.abs(this.robot.position.x-18)<2.6&&Math.abs(this.robot.position.z-14)<2.6,g=d<8,v=this.credits>=this.elevatorUnlockCredits;if(v&&!this.elevatorUnlocked&&(this.elevatorUnlocked=!0,tt.playPowerUnlock()),f){if(this.wasInElevator||(this.wasInElevator=!0,v?tt.playRelayClick():tt.playAccessDenied()),this.elevatorBeaconMat)if(v){const m=2.5+Math.sin(Date.now()*.008)*1;this.elevatorBeaconMat.color.setHex(1096065),this.elevatorBeaconMat.emissive.setHex(1096065),this.elevatorBeaconMat.emissiveIntensity=m,this.elevatorLight&&(this.elevatorLight.color.setHex(1096065),this.elevatorLight.intensity=m)}else{const m=1.8+Math.sin(Date.now()*.012)*1;this.elevatorBeaconMat.color.setHex(16096779),this.elevatorBeaconMat.emissive.setHex(16096779),this.elevatorBeaconMat.emissiveIntensity=m,this.elevatorLight&&(this.elevatorLight.color.setHex(16096779),this.elevatorLight.intensity=m)}v&&e&&(e.beacon_ping||e.aux_light)&&(this._actuatorElevatorDebounce||(this._actuatorElevatorDebounce=!0,this.toggleElevator(),setTimeout(()=>{this._actuatorElevatorDebounce=!1},2e3)))}else if(this.wasInElevator&&(this.wasInElevator=!1),this.elevatorBeaconMat){const m=v?1096065:959977;this.elevatorBeaconMat.color.setHex(m),this.elevatorBeaconMat.emissive.setHex(m),this.elevatorBeaconMat.emissiveIntensity=1.8,this.elevatorLight&&(this.elevatorLight.color.setHex(m),this.elevatorLight.intensity=1.8)}this.updateElevatorHUD(f,v,g)}this.renderer.render(this.scene,this.camera)}}const un={empty:{name:"Blank Board",description:"A clean slate to build your own custom circuit from scratch.",load(n){n.clear()}},bounce:{name:"Wall Bounce (Direct Reaction)",description:"Wires bumpers to reverse thrusters so the robot bounces off obstacles.",load(n){n.clear(),n.addWire({type:"sensor",id:null,pin:"bumper_n"},{type:"actuator",id:null,pin:"thrust_s"}),n.addWire({type:"sensor",id:null,pin:"bumper_s"},{type:"actuator",id:null,pin:"thrust_n"}),n.addWire({type:"sensor",id:null,pin:"bumper_e"},{type:"actuator",id:null,pin:"thrust_w"}),n.addWire({type:"sensor",id:null,pin:"bumper_w"},{type:"actuator",id:null,pin:"thrust_e"})}},patrol_latch:{name:"RS-Latch Patrol (Memory)",description:"Uses an RS Flip-Flop to remember direction: cruises North until bumper hits, then memorizes South!",load(n){n.clear();const t=n.addChip("RS_LATCH",240,160);n.addChip("NOT",100,320),n.addWire({type:"sensor",id:null,pin:"bumper_n"},{type:"chip",id:t.id,pin:"set"}),n.addWire({type:"sensor",id:null,pin:"bumper_s"},{type:"chip",id:t.id,pin:"reset"}),n.addWire({type:"chip",id:t.id,pin:"q"},{type:"actuator",id:null,pin:"thrust_s"}),n.addWire({type:"chip",id:t.id,pin:"q_bar"},{type:"actuator",id:null,pin:"thrust_n"})}},cortex_hybrid:{name:"CORTEX-1 AI + Anti-Hangup (Flux)",description:"Autonomous Ore Mining Autopilot: CORTEX-1 AI co-processor with integrated anti-hangup contour evasion and stuck-watchdog disengage. Seeks raw ore chunks, clamps pincers, hauls to the Refinery, and smelts for credits.",load(n){n.clear();const t=n.addChip("CORTEX_AI",260,140);n.addWire({type:"chip",id:t.id,pin:"dir_n"},{type:"actuator",id:null,pin:"thrust_n"}),n.addWire({type:"chip",id:t.id,pin:"dir_s"},{type:"actuator",id:null,pin:"thrust_s"}),n.addWire({type:"chip",id:t.id,pin:"dir_e"},{type:"actuator",id:null,pin:"thrust_e"}),n.addWire({type:"chip",id:t.id,pin:"dir_w"},{type:"actuator",id:null,pin:"thrust_w"}),n.addWire({type:"chip",id:t.id,pin:"grab"},{type:"actuator",id:null,pin:"grabber"}),n.addWire({type:"sensor",id:null,pin:"item_detect"},{type:"chip",id:t.id,pin:"item_in"}),n.addWire({type:"sensor",id:null,pin:"radar_ping"},{type:"actuator",id:null,pin:"aux_light"})}},checkers_hauler:{name:"Tug: Heavy Freight Hauler",description:"Autonomous Ore Carrier Brain: CORTEX-1 co-processor tuned for heavy hauling. Targets raw ore, clamps industrial pincers, and routes straight to the Refinery crucible.",load(n){n.clear();const t=n.addChip("CORTEX_AI",260,140);n.addWire({type:"chip",id:t.id,pin:"dir_n"},{type:"actuator",id:null,pin:"thrust_n"}),n.addWire({type:"chip",id:t.id,pin:"dir_s"},{type:"actuator",id:null,pin:"thrust_s"}),n.addWire({type:"chip",id:t.id,pin:"dir_e"},{type:"actuator",id:null,pin:"thrust_e"}),n.addWire({type:"chip",id:t.id,pin:"dir_w"},{type:"actuator",id:null,pin:"thrust_w"}),n.addWire({type:"chip",id:t.id,pin:"grab"},{type:"actuator",id:null,pin:"grabber"}),n.addWire({type:"sensor",id:null,pin:"item_detect"},{type:"chip",id:t.id,pin:"item_in"}),n.addWire({type:"sensor",id:null,pin:"radar_ping"},{type:"actuator",id:null,pin:"beacon_ping"})}},scanners_scout:{name:"Scope: Deep Vein Sonar",description:"Vein Locator Brain: High-gain radar dish pulses beacon whenever near energy targets or subterranean ore veins, with RS-latch state patrol.",load(n){n.clear();const t=n.addChip("RS_LATCH",280,160);n.addWire({type:"sensor",id:null,pin:"bumper_n"},{type:"chip",id:t.id,pin:"set"}),n.addWire({type:"sensor",id:null,pin:"bumper_s"},{type:"chip",id:t.id,pin:"reset"}),n.addWire({type:"chip",id:t.id,pin:"q"},{type:"actuator",id:null,pin:"thrust_s"}),n.addWire({type:"chip",id:t.id,pin:"q_bar"},{type:"actuator",id:null,pin:"thrust_n"}),n.addWire({type:"sensor",id:null,pin:"radar_ping"},{type:"actuator",id:null,pin:"beacon_ping"}),n.addWire({type:"sensor",id:null,pin:"radar_ping"},{type:"actuator",id:null,pin:"aux_light"})}},tank_patrol:{name:"Dozer: Heavy Armored Bulldozer",description:"High-inertia barrier breaker: Uses wall-bounce reflexes with maximum forward thrust to clear obstacles.",load(n){n.clear(),n.addWire({type:"sensor",id:null,pin:"bumper_n"},{type:"actuator",id:null,pin:"thrust_s"}),n.addWire({type:"sensor",id:null,pin:"bumper_s"},{type:"actuator",id:null,pin:"thrust_n"}),n.addWire({type:"sensor",id:null,pin:"bumper_e"},{type:"actuator",id:null,pin:"thrust_w"}),n.addWire({type:"sensor",id:null,pin:"bumper_w"},{type:"actuator",id:null,pin:"thrust_e"}),n.addWire({type:"sensor",id:null,pin:"clock_tick"},{type:"actuator",id:null,pin:"aux_light"})}},stepper_patrol:{name:"Stepper Sequencer Patrol (4-Step Loop)",description:"Autonomous 4-State Sequencer: Uses a 4017 Stepper Chip to cycle North -> East -> South -> West on bumper collision.",load(n){n.clear();const t=n.addChip("STEPPER",280,160),e=n.addChip("OR",100,100),i=n.addChip("OR",100,240),s=n.addChip("OR",190,170);n.addWire({type:"sensor",id:null,pin:"bumper_n"},{type:"chip",id:e.id,pin:"in_a"}),n.addWire({type:"sensor",id:null,pin:"bumper_e"},{type:"chip",id:e.id,pin:"in_b"}),n.addWire({type:"sensor",id:null,pin:"bumper_s"},{type:"chip",id:i.id,pin:"in_a"}),n.addWire({type:"sensor",id:null,pin:"bumper_w"},{type:"chip",id:i.id,pin:"in_b"}),n.addWire({type:"chip",id:e.id,pin:"out"},{type:"chip",id:s.id,pin:"in_a"}),n.addWire({type:"chip",id:i.id,pin:"out"},{type:"chip",id:s.id,pin:"in_b"}),n.addWire({type:"chip",id:s.id,pin:"out"},{type:"chip",id:t.id,pin:"clk"}),n.addWire({type:"chip",id:t.id,pin:"s1"},{type:"actuator",id:null,pin:"thrust_n"}),n.addWire({type:"chip",id:t.id,pin:"s2"},{type:"actuator",id:null,pin:"thrust_e"}),n.addWire({type:"chip",id:t.id,pin:"s3"},{type:"actuator",id:null,pin:"thrust_s"}),n.addWire({type:"chip",id:t.id,pin:"s4"},{type:"actuator",id:null,pin:"thrust_w"})}},timer_stepper_clock:{name:"555 Astable Clock + 4017 Stepper (Timed Patrol)",description:"Autonomous Clocked Sequencer: NE555 precision oscillator in ASTABLE mode generates a 1.0s square-wave clock pulse driving the 4017 Stepper chip, automatically cycling cardinal thrusters in a continuous square loop!",load(n){n.clear();const t=n.addChip("TIMER_555",100,160);t&&t.state&&(t.state.mode="ASTABLE",t.state.timeLabel="1.0s",t.state.timeBase=60);const e=n.addChip("STEPPER",310,150);n.addWire({type:"chip",id:t.id,pin:"out"},{type:"chip",id:e.id,pin:"clk"}),n.addWire({type:"chip",id:t.id,pin:"disch"},{type:"actuator",id:null,pin:"aux_light"}),n.addWire({type:"chip",id:e.id,pin:"s1"},{type:"actuator",id:null,pin:"thrust_n"}),n.addWire({type:"chip",id:e.id,pin:"s2"},{type:"actuator",id:null,pin:"thrust_e"}),n.addWire({type:"chip",id:e.id,pin:"s3"},{type:"actuator",id:null,pin:"thrust_s"}),n.addWire({type:"chip",id:e.id,pin:"s4"},{type:"actuator",id:null,pin:"thrust_w"})}},shift_ring_patrol:{name:"Shift Register Walking-Ring (Johnson Counter)",description:"Autonomous Temporal Brain: NE555 timer generates clock pulses into a 74194 Shift Register. An inverter feeds !Q3 back into DATA, creating an authentic 8-state walking ring counter that steers the robot in an organic orbital patrol!",load(n){n.clear();const t=n.addChip("TIMER_555",80,150);t&&t.state&&(t.state.mode="ASTABLE",t.state.timeLabel="0.5s",t.state.timeBase=30);const e=n.addChip("NOT",80,310),i=n.addChip("SHIFT_REG",270,150);n.addWire({type:"chip",id:t.id,pin:"out"},{type:"chip",id:i.id,pin:"clk"}),n.addWire({type:"chip",id:i.id,pin:"q3"},{type:"chip",id:e.id,pin:"in"}),n.addWire({type:"chip",id:e.id,pin:"out"},{type:"chip",id:i.id,pin:"data"}),n.addWire({type:"chip",id:i.id,pin:"q0"},{type:"actuator",id:null,pin:"thrust_n"}),n.addWire({type:"chip",id:i.id,pin:"q1"},{type:"actuator",id:null,pin:"thrust_e"}),n.addWire({type:"chip",id:i.id,pin:"q2"},{type:"actuator",id:null,pin:"thrust_s"}),n.addWire({type:"chip",id:i.id,pin:"q3"},{type:"actuator",id:null,pin:"thrust_w"}),n.addWire({type:"chip",id:t.id,pin:"disch"},{type:"actuator",id:null,pin:"aux_light"})}},stepped_tone_generator:{name:"Stepped Tone Synth (Atari Punk Console)",description:"Analog/Discrete Hybrid Synth: NE555 square-wave timer feeds through a 10K trimmer potentiometer and an NPN silicon transistor (2N3904) into an 8Ω acoustic piezo speaker. Adjust the pot dial or 555 frequency to warp chiptune audio tones in real time!",load(n){n.clear();const t=n.addChip("TIMER_555",60,140);t&&t.state&&(t.state.mode="ASTABLE",t.state.timeLabel="0.2s",t.state.timeBase=10);const e=n.addChip("POTENTIOMETER",230,140);e&&e.state&&(e.state.dial=.5,e.state.freq=680);const i=n.addChip("NPN",400,140),s=n.addChip("PIEZO_BUZZER",400,290);s&&s.state&&(s.state.freq=680);const r=n.addChip("CAPACITOR",230,290);n.addWire({type:"chip",id:t.id,pin:"out"},{type:"chip",id:e.id,pin:"in"}),n.addWire({type:"chip",id:e.id,pin:"wiper"},{type:"chip",id:i.id,pin:"b"}),n.addWire({type:"chip",id:t.id,pin:"out"},{type:"chip",id:i.id,pin:"c"}),n.addWire({type:"chip",id:i.id,pin:"e"},{type:"chip",id:s.id,pin:"sig"}),n.addWire({type:"chip",id:t.id,pin:"disch"},{type:"chip",id:r.id,pin:"in"}),n.addWire({type:"chip",id:s.id,pin:"thru"},{type:"actuator",id:null,pin:"aux_light"})}},discrete_rtl_not:{name:"Discrete RTL NOT (Transistor Inverter)",description:"Resistor-Transistor Logic: Silicon PNP transistor (2N3906) acting as an active-low inverter. When radar beacon is quiet (0), current conducts from Emitter to Collector to keep forward thrusters firing. When obstacle detected (1), transistor cuts off!",load(n){n.clear();const t=n.addChip("PNP",250,180);n.addWire({type:"sensor",id:null,pin:"radar_ping"},{type:"chip",id:t.id,pin:"b"}),n.addWire({type:"sensor",id:null,pin:"clock_tick"},{type:"chip",id:t.id,pin:"e"}),n.addWire({type:"chip",id:t.id,pin:"c"},{type:"actuator",id:null,pin:"thrust_n"})}}};class um{constructor(t,e){this.engine=t,this.ui=e,this.modal=document.getElementById("burn-modal"),this.customChipCounter=1,this.chipNameInput=document.getElementById("burn-chip-name"),this.chipCodeInput=document.getElementById("burn-chip-code"),this.statChips=document.getElementById("burn-stat-chips"),this.statWires=document.getElementById("burn-stat-wires"),this.inputsList=document.getElementById("burn-inputs-list"),this.outputsList=document.getElementById("burn-outputs-list"),this.confirmBtn=document.getElementById("burn-confirm-btn"),this.closeBtn=document.getElementById("burn-close-btn"),this.previewLabel=document.getElementById("preview-chip-label"),this.previewCode=document.getElementById("preview-chip-code"),this.previewPinsLeft=document.getElementById("preview-pins-left"),this.previewPinsRight=document.getElementById("preview-pins-right"),this.currentAnalysis=null,this.bindEvents()}bindEvents(){var i;const t=document.getElementById("burn-chip-btn");t&&t.addEventListener("click",()=>this.open()),this.closeBtn&&this.closeBtn.addEventListener("click",()=>this.close());const e=(i=this.modal)==null?void 0:i.querySelector(".burn-backdrop");e&&e.addEventListener("click",()=>this.close()),this.chipNameInput&&this.chipNameInput.addEventListener("input",()=>{this.previewLabel&&(this.previewLabel.textContent=this.chipNameInput.value.toUpperCase()||"CUSTOM_IC")}),this.chipCodeInput&&this.chipCodeInput.addEventListener("input",()=>{this.previewCode&&(this.previewCode.textContent=this.chipCodeInput.value.toUpperCase()||"IC-01")}),this.confirmBtn&&this.confirmBtn.addEventListener("click",()=>this.fabricate())}analyzeBoard(){const t=Array.from(this.engine.chips.values()),e=this.engine.wires,i=new Map,s=new Map;return e.forEach(r=>{if(r.from.type==="sensor"&&r.to.type==="chip"){const a=`in_${r.from.pin}`,o=r.from.pin.replace("bumper_","BUMP_").replace("radar_ping","RADAR").toUpperCase();i.set(a,{id:a,label:o,targetChipId:r.to.id,targetPin:r.to.pin})}if(r.from.type==="chip"&&r.to.type==="actuator"){const a=`out_${r.to.pin}`,o=r.to.pin.replace("thrust_","THRUST_").replace("aux_light","LIGHT").toUpperCase();s.set(a,{id:a,label:o,sourceChipId:r.from.id,sourcePin:r.from.pin})}}),i.size===0&&t.forEach((r,a)=>{const o=Xe[r.type];o&&o.inputs.forEach(l=>{const c=`in_${r.id}_${l.id}`;i.set(c,{id:c,label:`${r.code}_${l.label}`,targetChipId:r.id,targetPin:l.id})})}),s.size===0&&t.forEach((r,a)=>{const o=Xe[r.type];o&&o.outputs.forEach(l=>{const c=`out_${r.id}_${l.id}`;s.set(c,{id:c,label:`${r.code}_${l.label}`,sourceChipId:r.id,sourcePin:l.id})})}),{chipsCount:t.length,wiresCount:e.length,inputs:Array.from(i.values()),outputs:Array.from(s.values()),chips:t.map(r=>({id:r.id,type:r.type,x:r.x,y:r.y})),internalWires:e.filter(r=>r.from.type==="chip"&&r.to.type==="chip")}}open(){if(tt.init(),this.engine.chips.size===0){alert("The motherboard has no chips! Place and wire some chips first before burning to microchip.");return}this.currentAnalysis=this.analyzeBoard();const t=this.customChipCounter;this.chipNameInput.value=`CUSTOM_CORE_0${t}`,this.chipCodeInput.value=`IC-C${t}`,this.statChips.textContent=`${this.currentAnalysis.chipsCount} CHIPS ENCAPSULATED`,this.statWires.textContent=`${this.currentAnalysis.internalWires.length} INTERNAL BUS TRACES`,this.previewLabel.textContent=this.chipNameInput.value,this.previewCode.textContent=this.chipCodeInput.value,this.inputsList.innerHTML=this.currentAnalysis.inputs.map(e=>`
      <div class="pin-check-row">
        <span class="pin-dot-mini in"></span>
        <span class="pin-name">${e.label}</span>
      </div>
    `).join("")||'<span class="empty-hint">None detected</span>',this.outputsList.innerHTML=this.currentAnalysis.outputs.map(e=>`
      <div class="pin-check-row">
        <span class="pin-dot-mini out"></span>
        <span class="pin-name">${e.label}</span>
      </div>
    `).join("")||'<span class="empty-hint">None detected</span>',this.previewPinsLeft.innerHTML=this.currentAnalysis.inputs.map(()=>'<div class="ic-leg"></div>').join(""),this.previewPinsRight.innerHTML=this.currentAnalysis.outputs.map(()=>'<div class="ic-leg"></div>').join(""),this.modal.classList.add("active"),tt.playRelayClick()}close(){this.modal.classList.remove("active"),tt.playWireCut()}fabricate(){if(!this.currentAnalysis)return;const t=(this.chipNameInput.value||"CUSTOM_IC").trim().toUpperCase(),e=(this.chipCodeInput.value||`IC-${this.customChipCounter}`).trim().toUpperCase(),i=`CUSTOM_${Date.now()}`,s=[...this.currentAnalysis.inputs],r=[...this.currentAnalysis.outputs],a=JSON.parse(JSON.stringify(this.currentAnalysis.chips)),o=JSON.parse(JSON.stringify(this.currentAnalysis.internalWires)),l=Math.max(s.length,r.length,2),c=Math.max(80,l*28+36);Xe[i]={type:i,name:t,code:e,category:"custom",description:`Custom IC burned in Innovation Lab. Encapsulates ${a.length} gates.`,width:170,height:c,inputs:s.map(h=>({id:h.id,label:h.label})),outputs:r.map(h=>({id:h.id,label:h.label})),init(){const h={};return a.forEach(u=>{const d=Xe[u.type];h[u.id]=d&&d.init?d.init():{}}),{subChipStates:h}},evaluate(h,u,d){const f=u.subChipStates||{},g={},v={};a.forEach(p=>v[p.id]={}),s.forEach(p=>{h[p.id]!==void 0&&(v[p.targetChipId][p.targetPin]=h[p.id])});for(let p=0;p<2;p++)o.forEach(S=>{(g[S.from.id]?!!g[S.from.id][S.from.pin]:!1)&&(v[S.to.id][S.to.pin]=!0)}),a.forEach(S=>{const E=Xe[S.type];if(E){const x=E.evaluate(v[S.id],f[S.id],d);g[S.id]=x.outputs,x.state&&(f[S.id]=x.state)}});const m={};return r.forEach(p=>{m[p.id]=g[p.sourceChipId]?!!g[p.sourceChipId][p.sourcePin]:!1}),{outputs:m,state:{subChipStates:f}}}},this.addCustomChipToTray(i,t,e),this.customChipCounter++,this.close(),tt.playGoalChime(),this.showToast(`🔥 Microchip [${t}] burned successfully to IC Toolbox!`)}addCustomChipToTray(t,e,i){if(!(document.getElementById("tray-row-advanced")||document.querySelector(".tray-chips-list")))return;const r=document.createElement("button");r.className="tray-chip-btn custom-chip-btn",r.dataset.type=t,r.innerHTML=`
      <span class="tray-chip-name">${e}</span>
      <span class="tray-chip-code custom-code">★ ${i}</span>
    `,r.addEventListener("click",()=>{tt.init();const a=this.ui.chipsViewport||this.ui.boardWrapper,o=a.clientWidth||700,l=a.clientHeight||450,c=Math.round((o/2-this.ui.pan.x)/this.ui.zoom-80),h=Math.round((l/2-this.ui.pan.y)/this.ui.zoom-60);this.engine.addChip(t,c,h)&&(tt.playChipDrop(),this.ui.renderChips(),this.ui.renderWires())}),trayList.appendChild(r)}showToast(t){let e=document.getElementById("burn-toast");e||(e=document.createElement("div"),e.id="burn-toast",e.className="burn-toast",document.body.appendChild(e)),e.textContent=t,e.classList.add("show"),setTimeout(()=>{e.classList.remove("show")},4500)}}const Si=[{id:"mission_1",number:"01",title:"The Reflex Arc",subtitle:"Sensors, Actuators & Direct Wiring",concept:"Direct Signal Flow & Inversion",summary:"Trapped in the disposal chute of the LogicForge! Wire Flux's contact bumpers to reverse thrusters to bounce safely away from hazards.",instructions:["Connect BUMP SOUTH to THRUST NORTH","Connect BUMP NORTH to THRUST SOUTH","Connect BUMP WEST to THRUST EAST","Connect BUMP EAST to THRUST WEST","Or use WASD / Arrow keys for manual emergency steering"],theory:"In robotics, a reflex arc is an immediate pathway from sensor to actuator without high-level processing. In digital logic, a HIGH (1) voltage from a contact switch is piped directly into a motor relay.",robotSpawn:{x:-14,z:14},targetPos:{x:14,z:-14},obstacles:[{x:-6,z:0,w:3,h:2,d:3},{x:6,z:0,w:3,h:2,d:3}],checkObjectives(n,t,e){const i=t.position.distanceTo(e);return[{label:"Connect at least 2 bumper reflex wires (or manual drive)",done:n.wires.length>=2},{label:"Reach the Energy Terminal",done:i<2.4}]}},{id:"mission_2",number:"02",title:"Security Blast Door",subtitle:"Combinational Logic: The AND & OR Gates",concept:"Boolean Algebra (AND / OR)",summary:"A heavy titanium blast door blocks access to the sector core. The door requires authorization: you must supply a HIGH signal to RADIO PING or HEADLIGHT to unlock it.",instructions:["Drop an AND Gate (7408) from the IC Toolbox","Connect RADAR BEACON to Input A and 1Hz CLOCK to Input B","Wire the AND output to RADIO PING or HEADLIGHT to trip the door sensor!","ALTERNATIVE: Steer Flux over to the Keycard, clamp pincers with [G], and dock into the Keycard Reader terminal!","Once open, drive Flux through the airlock to the Core"],theory:"George Boole invented Boolean logic in 1854. An AND gate outputs HIGH (1) only when BOTH inputs are simultaneously HIGH (1 & 1 = 1). If either input is LOW (0), current cannot pass.",robotSpawn:{x:0,z:16},targetPos:{x:0,z:-16},hasBlastDoor:!0,items:[{id:"keycard_alpha",type:"keycard",color:3718648,label:"Sector Alpha Keycard",x:-8,z:12}],terminals:[{id:"reader_blast_door",type:"keycard_reader",label:"Blast Door Terminal",x:-3.5,z:1.2}],obstacles:[{x:-14,z:0,w:18,h:2.4,d:1.4,color:1976635},{x:14,z:0,w:18,h:2.4,d:1.4,color:1976635}],checkObjectives(n,t,e,i){const s=Array.from(n.chips.values()).some(l=>l.type==="AND"),r=i?i.isBlastDoorOpen:!1,a=i&&i.itemManager?i.itemManager.terminals.some(l=>l.type==="keycard_reader"&&l.isOccupied):!1,o=t.position.distanceTo(e);return[{label:"Install an AND Gate (7408) or pickup Keycard [G]",done:s||i&&i.itemManager&&(i.itemManager.heldItem!==null||a)},{label:"Unlock Blast Door (via Radio/Light circuit OR Keycard Reader)",done:r},{label:"Pilot Flux through into the Energy Core",done:o<2.4}]}},{id:"mission_3",number:"03",title:"Mechanical Memory",subtitle:"Sequential Logic & The RS Flip-Flop",concept:"Bistable Multivibrators (State Memory)",summary:"Combinational gates have no memory: as soon as a bumper lets go, the signal is lost. To patrol between two barriers without oscillating endlessly, you need a memory unit!",instructions:["Spawn an RS Flip-Flop (74279)","Wire BUMP NORTH to the SET pin","Wire BUMP SOUTH to the RESET pin","Wire output Q to THRUST SOUTH and !Q to THRUST NORTH","Watch Flux cruise North, hit the wall, flip state, and cruise South!"],theory:"Computers cannot calculate without memory. An RS-Latch stores 1 bit of information using feedback loops. When SET pulses, it latches Q=1 indefinitely until RESET clears it back to 0.",robotSpawn:{x:-6,z:12},targetPos:{x:-6,z:-14},obstacles:[{x:-11,z:0,w:1.2,h:2.2,d:32},{x:-1,z:0,w:1.2,h:2.2,d:32},{x:-6,z:-18,w:9,h:2.2,d:1.2}],checkObjectives(n,t,e){const i=Array.from(n.chips.values()).some(a=>a.type==="RS_LATCH"),s=n.actuators.thrust_n||n.actuators.thrust_s,r=t.position.distanceTo(e);return[{label:"Install an RS Flip-Flop memory chip (74279)",done:i},{label:"Wire latch to establish North/South patrol state",done:i&&s},{label:"Reach the end of the patrol corridor",done:r<2.4}]}},{id:"mission_4",number:"04",title:"The AI Co-Processor",subtitle:"Hybrid Architecture: Autopilot + Discrete Override",concept:"Supervisory Control & Arbitration",summary:"High-level AI pathfinding is powerful, but unpredictable around hazards. Connect the CORTEX-1 AI chip, but wire discrete logic gates to override it when danger strikes!",instructions:["Place the CORTEX-1 AI chip","Connect its navigation outputs to thrusters (or mix through OR gates)","Wire bumper signals into the OVERRIDE pin or directly to reverse thrusters"],theory:"Modern autonomous systems (like the Mars Rovers and self-driving cars) use hierarchical control: neural/heuristic algorithms plan global paths, while discrete hardware safety interlocks guarantee collision avoidance.",robotSpawn:{x:-16,z:16},targetPos:{x:16,z:-16},obstacles:[{x:-8,z:6,w:4,h:2.4,d:4},{x:4,z:4,w:4,h:2.4,d:4},{x:-2,z:-8,w:5,h:2.4,d:3},{x:8,z:-6,w:3,h:2.4,d:6}],checkObjectives(n,t,e){const i=Array.from(n.chips.values()).some(r=>r.type==="CORTEX_AI"),s=t.position.distanceTo(e);return[{label:"Install CORTEX-1 AI Autopilot chip",done:i},{label:"Navigate through the obstacle chamber to the Core",done:s<2.4}]}},{id:"mission_5",number:"05",title:"The Reactor Fuel Ferry",subtitle:"Robotic Manipulation & Material Handling",concept:"Closed-Loop Tactile Control",summary:"The auxiliary reactor in Sector 4 has suffered a core meltdown! The primary power grid is down. Navigate through the industrial warehouse aisles, locate the Sub-Zero Plasma Power Cell, clamp your pincers onto it, and insert it into the Generator Receptacle to restore auxiliary power!",instructions:["Steer Flux toward the glowing Plasma Power Cell at [-12, 10]","Press [G] or wire ITEM CONTACT -> GRABBER CLAW on the motherboard to clamp claws shut","Navigate through the warehouse coolant pylons with the cell securely held","Release [G] in front of the Generator Receptacle at [12, -10] to dock the cell and energize the grid!","Once energized, reach the Extraction Terminal"],theory:"In industrial robotics, Automated Guided Vehicles (AGVs) use tactile feedback sensors to confirm grip stability before initiating transport. Wiring ITEM CONTACT to latching logic guarantees an item is not dropped during high-acceleration turns.",robotSpawn:{x:-16,z:16},targetPos:{x:16,z:-16},items:[{id:"reactor_power_cell",type:"power_cell",color:1096065,label:"High-Yield Plasma Cell",x:-12,z:10}],terminals:[{id:"reactor_socket",type:"power_socket",label:"Primary Reactor Receptacle",x:12,z:-10}],obstacles:[{x:-4,z:8,w:3,h:2.4,d:8},{x:4,z:-8,w:3,h:2.4,d:8},{x:0,z:0,w:10,h:2.4,d:3}],checkObjectives(n,t,e,i){const s=t.position.distanceTo(e),r=i&&i.itemManager?i.itemManager.terminals.some(o=>o.id==="reactor_socket"&&o.isOccupied):!1;return[{label:"Retrieve and clamp onto the Plasma Power Cell [G]",done:(i&&i.itemManager?i.itemManager.heldItem!==null:!1)||r},{label:"Dock the Power Cell into the Primary Reactor Receptacle",done:r},{label:"Proceed through the energized gate to the Core",done:r&&s<2.4}]}},{id:"mission_6",number:"06",title:"The Logic Interlock",subtitle:"Exclusive-OR & Dual Sensor Parity",concept:"XOR Logic & Interlock Safety Systems",summary:"A high-pressure containment chamber lies ahead. Safety protocol enforces strict mutual exclusion: the airlock will only grant authorization when exactly ONE sensor condition is active (A XOR B). If neither or both are triggered, the chamber seals!",instructions:["Drop an XOR Gate (7486) onto the motherboard","Connect RADAR BEACON (Proximity) to Input A","Connect 1Hz CLOCK (or Bumper North) to Input B","Wire the XOR output to RADIO PING or HEADLIGHT to trigger the authorization receiver","Pilot Flux through the pressure airlock to the target core"],theory:"The Exclusive-OR (XOR) gate performs modulo-2 addition. It outputs 1 if and only if its inputs are strictly different (0 & 1, or 1 & 0). In computing, XOR is the fundamental arithmetic engine of half-adders, full-adders, and cryptographic ciphers.",robotSpawn:{x:0,z:16},targetPos:{x:0,z:-16},hasBlastDoor:!0,obstacles:[{x:-14,z:0,w:18,h:2.4,d:1.4,color:1976635},{x:14,z:0,w:18,h:2.4,d:1.4,color:1976635}],checkObjectives(n,t,e,i){const s=Array.from(n.chips.values()).some(o=>o.type==="XOR"),r=i?i.isBlastDoorOpen:!1,a=t.position.distanceTo(e);return[{label:"Install an XOR Gate (7486)",done:s},{label:"Create an Exclusive-OR trigger to unlock the Blast Door",done:r},{label:"Navigate through the pressure airlock to the Core",done:a<2.4}]}},{id:"mission_7",number:"07",title:"The Silicon Forge",subtitle:"Custom IC Fabrication & Abstraction",concept:"Modular Silicon Packaging (VLSI)",summary:"Complex robots require hundreds of gates. Laying out raw gates on a single motherboard becomes unmanageable. Build a sub-circuit on the board, package it into a reusable silicon microchip using the 🔥 BURN TO CHIP Innovation Lab, and deploy your custom IC!",instructions:["Wire any combination of gates on the motherboard (e.g. reflex logic, latch, or inverter)","Click the 🔥 BURN TO CHIP button in the top toolbar",'Assign an IC Name and Part Code, and click "FABRICATE SILICON CHIP"',"Clear the motherboard and deploy your new custom IC from the Component Tray!","Reach the goal terminal with your custom silicon running"],theory:"Very-Large-Scale Integration (VLSI) allows millions of transistors to be consolidated into a single silicon package. Hardware abstraction enables engineers to build complex computers by composing modular chips without recalculating gate-level physics at every step.",robotSpawn:{x:-16,z:16},targetPos:{x:16,z:-16},obstacles:[{x:-6,z:6,w:4,h:2.2,d:4},{x:6,z:-6,w:4,h:2.2,d:4},{x:0,z:0,w:5,h:2.2,d:5}],checkObjectives(n,t,e){const i=Array.from(n.chips.values()).some(r=>r.type.startsWith("CUSTOM_")),s=t.position.distanceTo(e);return[{label:"Burn a circuit and install a custom microchip on the motherboard",done:i},{label:"Pilot Flux across the obstacle course to the terminal",done:s<2.4}]}},{id:"mission_8",number:"08",title:"Free Engineering Sandbox",subtitle:"Innovation Bay & Open Testing",concept:"Unrestricted Experimentation",summary:"All tools, chips, and telemetry unlocked. Design custom state machines, timers, oscillating clocks, and dual-mode autonomous robots.",instructions:["Build whatever complex logic systems you can imagine","Use the 🔥 BURN TO CHIP button to package your custom inventions into silicon!","Test Flux's Grabber Claws: Clamp onto the Power Cell or Keycard with [G] (or wire GRABBER on motherboard)","Carry items across the arena and dock them into the Generator Socket or Keycard Reader!"],theory:"Every modern microprocessor, from the Apollo Guidance Computer to a modern multi-core CPU, is built from these exact foundational gates.",robotSpawn:{x:-18,z:18},targetPos:{x:18,z:-18},items:[{id:"sandbox_power_cell",type:"power_cell",color:1096065,label:"Sub-Zero Power Cell",x:-8,z:8},{id:"sandbox_keycard",type:"keycard",color:11032055,label:"Master Keycard",x:8,z:8}],terminals:[{id:"sandbox_power_socket",type:"power_socket",label:"Auxiliary Generator Receptacle",x:-8,z:-8},{id:"sandbox_keycard_reader",type:"keycard_reader",label:"Security Console Reader",x:8,z:-8}],obstacles:[{x:-14,z:0,w:18,h:2.2,d:1.4},{x:14,z:0,w:18,h:2.2,d:1.4},{x:-10,z:-12,w:3.5,h:2.4,d:3.5},{x:10,z:12,w:3.5,h:2.4,d:3.5}],checkObjectives(n,t,e,i){const s=t.position.distanceTo(e),r=i&&i.itemManager?i.itemManager.terminals.some(a=>a.isOccupied):!1;return[{label:"Experiment with logic chips, timers, and custom ICs",done:n.chips.size>0||n.wires.length>0},{label:"Grab an item and dock into a socket terminal [G]",done:r},{label:"Energy terminal is active for docking",done:s<2.4}]}}];class pm{constructor(t,e,i,s){this.container=t,this.worldScene=e,this.engine=i,this.ui=s,this.currentMissionIndex=0,this.missionStates=Si.map(()=>({completed:!1,objectivesDone:[]})),this.buildDOM(),this.bindEvents(),this.loadMission(0)}getCurrentMission(){return Si[this.currentMissionIndex]}buildDOM(){this.hudEl=document.getElementById("hud-card-mission")||this.container;const t=document.createElement("div");t.className="codex-modal",t.innerHTML=`
      <div class="codex-backdrop"></div>
      <div class="codex-dialog">
        <header class="codex-header">
          <div class="codex-title-group">
            <span class="codex-badge">ROBOTROPOLIS ENGINEERING CODEX</span>
            <h2 id="codex-title">LESSON TITLE</h2>
          </div>
          <button class="codex-close-btn" id="codex-close">&times;</button>
        </header>

        <div class="codex-body">
          <div class="codex-section">
            <h4 class="section-tag">BRIEFING</h4>
            <p id="codex-summary" class="codex-text"></p>
          </div>

          <div class="codex-section">
            <h4 class="section-tag">DIGITAL LOGIC THEORY</h4>
            <p id="codex-theory" class="codex-text highlight-theory"></p>
          </div>

          <div class="codex-section">
            <h4 class="section-tag">ENGINEERING INSTRUCTIONS & HINTS</h4>
            <ul id="codex-instructions" class="codex-list"></ul>
          </div>
        </div>
      </div>
    `,document.body.appendChild(t),this.codexEl=t}bindEvents(){this.hudEl.querySelector("#mission-prev-btn").addEventListener("click",()=>{this.currentMissionIndex>0&&this.loadMission(this.currentMissionIndex-1)}),this.hudEl.querySelector("#mission-next-btn").addEventListener("click",()=>{this.currentMissionIndex<Si.length-1&&this.loadMission(this.currentMissionIndex+1)}),this.hudEl.querySelector("#m-continue-btn").addEventListener("click",()=>{this.currentMissionIndex<Si.length-1?this.loadMission(this.currentMissionIndex+1):this.loadMission(0)}),this.hudEl.querySelector("#mission-codex-btn").addEventListener("click",()=>this.openCodex());const e=document.getElementById("mission-toggle-btn");e&&e.addEventListener("click",()=>{const i=document.getElementById("hud-card-objectives");if(i){i.classList.toggle("hidden");const s=i.classList.contains("hidden");e.textContent=s?"+":"−",e.title=s?"Expand Objectives":"Minimize Objectives",tt.playRelayClick()}}),this.codexEl.querySelector("#codex-close").addEventListener("click",()=>this.closeCodex()),this.codexEl.querySelector(".codex-backdrop").addEventListener("click",()=>this.closeCodex())}loadMission(t){this.currentMissionIndex=t;const e=Si[t];tt.init();const i=String(Si.length).padStart(2,"0");this.hudEl.querySelector("#m-number").textContent=`MISSION ${e.number} / ${i}`,this.hudEl.querySelector("#m-title").textContent=e.title,this.hudEl.querySelector("#m-concept").textContent=`Concept: ${e.concept}`;const s=this.hudEl.querySelector("#mission-prev-btn"),r=this.hudEl.querySelector("#mission-next-btn");s.disabled=t===0,r.disabled=t===Si.length-1;const a=this.hudEl.querySelector("#m-continue-btn");t===Si.length-1?a.textContent="RESTART CAMPAIGN ↺":a.textContent="NEXT LEVEL >>",this.hudEl.querySelector("#m-complete-card").classList.remove("show");const o=document.getElementById("start-game-btn");o&&(t===0?o.classList.remove("hidden"):o.classList.add("hidden")),this.worldScene.setupMissionArena?this.worldScene.setupMissionArena(e):(e.robotSpawn&&this.worldScene.robot.reset(e.robotSpawn.x,e.robotSpawn.z),e.targetPos&&this.worldScene.target.set(e.targetPos.x,.5,e.targetPos.z)),this.renderObjectives(),tt.playRelayClick()}renderObjectives(){const e=this.getCurrentMission().checkObjectives(this.engine,this.worldScene.robot,this.worldScene.target,this.worldScene),i=document.getElementById("m-objectives-list");i&&(i.innerHTML=e.map((s,r)=>`
      <div class="objective-item ${s.done?"is-done":""}">
        <span class="obj-check">${s.done?"✓":"○"}</span>
        <span class="obj-label">${s.label}</span>
      </div>
    `).join(""))}update(){const e=this.getCurrentMission().checkObjectives(this.engine,this.worldScene.robot,this.worldScene.target,this.worldScene),i=document.getElementById("m-objectives-list");if(!i)return;const s=i.querySelectorAll(".objective-item");if(s.length!==e.length){this.renderObjectives();return}let r=!0;e.forEach((o,l)=>{if(s[l]){const c=s[l].classList.contains("is-done");o.done&&!c?(s[l].classList.add("is-done"),s[l].querySelector(".obj-check").textContent="✓",tt.playGoalChime()):!o.done&&c&&(s[l].classList.remove("is-done"),s[l].querySelector(".obj-check").textContent="○")}o.done||(r=!1)});const a=this.hudEl.querySelector("#m-complete-card");r&&!this.missionStates[this.currentMissionIndex].completed?(this.missionStates[this.currentMissionIndex].completed=!0,a.classList.add("show"),tt.playGoalChime()):!r&&this.missionStates[this.currentMissionIndex].completed&&(this.missionStates[this.currentMissionIndex].completed=!1,a.classList.remove("show"))}openCodex(){const t=this.getCurrentMission();this.codexEl.querySelector("#codex-title").textContent=`MISSION ${t.number}: ${t.title.toUpperCase()}`,this.codexEl.querySelector("#codex-summary").textContent=t.summary,this.codexEl.querySelector("#codex-theory").textContent=t.theory;const e=this.codexEl.querySelector("#codex-instructions");e.innerHTML=t.instructions.map(i=>`<li>${i}</li>`).join(""),this.codexEl.classList.add("active"),tt.playRelayClick()}closeCodex(){this.codexEl.classList.remove("active"),tt.playWireCut()}}class fm{constructor(){this.modalEl=null,this.buildDOM(),this.bindEvents()}buildDOM(){const t=document.createElement("div");t.className="manual-modal",t.id="manual-modal",t.innerHTML=`
      <div class="manual-backdrop"></div>
      <div class="manual-dialog">
        <header class="manual-header">
          <div class="manual-title-group">
            <span class="manual-badge">LOGICFORGE-V2 ENGINEERING SPECIFICATION</span>
            <h2>LAB MANUAL & DIGITAL LOGIC THEORY</h2>
          </div>
          <button class="manual-close-btn" id="manual-close-btn">&times;</button>
        </header>

        <!-- Navigation Tabs -->
        <nav class="manual-tabs">
          <button class="manual-tab-btn active" data-tab="tab-gates">1. GATE THEORY & TRUTH TABLES</button>
          <button class="manual-tab-btn" data-tab="tab-controls">2. CONTROLS & 4-BOT FLEET</button>
          <button class="manual-tab-btn" data-tab="tab-pinout">3. MOTHERBOARD PINOUT</button>
          <button class="manual-tab-btn" data-tab="tab-mining">4. MINING, ELEVATOR & RELAY</button>
          <button class="manual-tab-btn" data-tab="tab-discretes">5. DISCRETES & RETRO SYNTH</button>
        </nav>

        <div class="manual-body">
          <!-- TAB 1: GATE THEORY & TRUTH TABLES -->
          <div class="manual-tab-content active" id="tab-gates">
            <div class="manual-intro">
              <p>
                In 1854, English mathematician <strong>George Boole</strong> formulated Boolean algebra, proving that all human logic and mathematical deduction can be expressed using only two states: <strong>TRUE (1 / HIGH voltage)</strong> and <strong>FALSE (0 / LOW voltage)</strong>. Every microprocessor in existence is constructed from these foundational building blocks.
              </p>
            </div>

            <div class="gate-cards-grid">
              <!-- AND GATE -->
              <div class="gate-card">
                <div class="gate-card-header">
                  <span class="gate-ttl">7408 TTL</span>
                  <h4>AND GATE</h4>
                  <span class="gate-eq">Y = A · B</span>
                </div>
                <p class="gate-desc">Outputs 1 only when <strong>BOTH</strong> inputs are simultaneously 1. If either input is 0, output is 0.</p>
                <div class="truth-table-wrapper">
                  <table class="truth-table">
                    <thead><tr><th>A</th><th>B</th><th class="out-col">OUT</th></tr></thead>
                    <tbody>
                      <tr><td>0</td><td>0</td><td class="out-col val-0">0</td></tr>
                      <tr><td>0</td><td>1</td><td class="out-col val-0">0</td></tr>
                      <tr><td>1</td><td>0</td><td class="out-col val-0">0</td></tr>
                      <tr><td>1</td><td>1</td><td class="out-col val-1">1</td></tr>
                    </tbody>
                  </table>
                </div>
                <div class="gate-use"><strong>Robotics Use:</strong> Safety interlocks (e.g. Proximity Radar AND Clock pulse to trigger authorization).</div>
              </div>

              <!-- OR GATE -->
              <div class="gate-card">
                <div class="gate-card-header">
                  <span class="gate-ttl">7432 TTL</span>
                  <h4>OR GATE</h4>
                  <span class="gate-eq">Y = A + B</span>
                </div>
                <p class="gate-desc">Outputs 1 if <strong>EITHER</strong> input (or both) is 1. Outputs 0 only when both are 0.</p>
                <div class="truth-table-wrapper">
                  <table class="truth-table">
                    <thead><tr><th>A</th><th>B</th><th class="out-col">OUT</th></tr></thead>
                    <tbody>
                      <tr><td>0</td><td>0</td><td class="out-col val-0">0</td></tr>
                      <tr><td>0</td><td>1</td><td class="out-col val-1">1</td></tr>
                      <tr><td>1</td><td>0</td><td class="out-col val-1">1</td></tr>
                      <tr><td>1</td><td>1</td><td class="out-col val-1">1</td></tr>
                    </tbody>
                  </table>
                </div>
                <div class="gate-use"><strong>Robotics Use:</strong> Signal arbitration (e.g. fire thrusters if AI Navigation OR Emergency Bumper requests it).</div>
              </div>

              <!-- NOT INVERTER -->
              <div class="gate-card">
                <div class="gate-card-header">
                  <span class="gate-ttl">7404 TTL</span>
                  <h4>NOT INVERTER</h4>
                  <span class="gate-eq">Y = A&#773;</span>
                </div>
                <p class="gate-desc">Inverts the incoming signal: converts 0 into 1, and 1 into 0.</p>
                <div class="truth-table-wrapper">
                  <table class="truth-table">
                    <thead><tr><th>IN</th><th class="out-col">OUT</th></tr></thead>
                    <tbody>
                      <tr><td>0</td><td class="out-col val-1">1</td></tr>
                      <tr><td>1</td><td class="out-col val-0">0</td></tr>
                    </tbody>
                  </table>
                </div>
                <div class="gate-use"><strong>Robotics Use:</strong> Active-low sensor logic, reversing thruster direction upon collision.</div>
              </div>

              <!-- XOR GATE -->
              <div class="gate-card">
                <div class="gate-card-header">
                  <span class="gate-ttl">7486 TTL</span>
                  <h4>XOR GATE (EXCLUSIVE OR)</h4>
                  <span class="gate-eq">Y = A &#8853; B</span>
                </div>
                <p class="gate-desc">Outputs 1 if inputs are <strong>DIFFERENT</strong> (one is 1, the other is 0). Outputs 0 if both are identical.</p>
                <div class="truth-table-wrapper">
                  <table class="truth-table">
                    <thead><tr><th>A</th><th>B</th><th class="out-col">OUT</th></tr></thead>
                    <tbody>
                      <tr><td>0</td><td>0</td><td class="out-col val-0">0</td></tr>
                      <tr><td>0</td><td>1</td><td class="out-col val-1">1</td></tr>
                      <tr><td>1</td><td>0</td><td class="out-col val-1">1</td></tr>
                      <tr><td>1</td><td>1</td><td class="out-col val-0">0</td></tr>
                    </tbody>
                  </table>
                </div>
                <div class="gate-use"><strong>Robotics Use:</strong> Dual-airlock interlocks, parity error detection, binary half-adders.</div>
              </div>

              <!-- NAND GATE -->
              <div class="gate-card">
                <div class="gate-card-header">
                  <span class="gate-ttl">7400 TTL</span>
                  <h4>NAND GATE (UNIVERSAL)</h4>
                  <span class="gate-eq">Y = (A · B)&#773;</span>
                </div>
                <p class="gate-desc">Outputs 0 only when both inputs are 1; outputs 1 otherwise. Any Boolean circuit can be built exclusively from NAND gates!</p>
                <div class="truth-table-wrapper">
                  <table class="truth-table">
                    <thead><tr><th>A</th><th>B</th><th class="out-col">OUT</th></tr></thead>
                    <tbody>
                      <tr><td>0</td><td>0</td><td class="out-col val-1">1</td></tr>
                      <tr><td>0</td><td>1</td><td class="out-col val-1">1</td></tr>
                      <tr><td>1</td><td>0</td><td class="out-col val-1">1</td></tr>
                      <tr><td>1</td><td>1</td><td class="out-col val-0">0</td></tr>
                    </tbody>
                  </table>
                </div>
                <div class="gate-use"><strong>Robotics Use:</strong> Universal logic gate, efficient CMOS silicon manufacturing.</div>
              </div>

              <!-- NOR GATE -->
              <div class="gate-card">
                <div class="gate-card-header">
                  <span class="gate-ttl">7402 TTL</span>
                  <h4>NOR GATE (UNIVERSAL)</h4>
                  <span class="gate-eq">Y = (A + B)&#773;</span>
                </div>
                <p class="gate-desc">Outputs 1 only when both inputs are 0; outputs 0 if any input is 1. Also a universal logic gate.</p>
                <div class="truth-table-wrapper">
                  <table class="truth-table">
                    <thead><tr><th>A</th><th>B</th><th class="out-col">OUT</th></tr></thead>
                    <tbody>
                      <tr><td>0</td><td>0</td><td class="out-col val-1">1</td></tr>
                      <tr><td>0</td><td>1</td><td class="out-col val-0">0</td></tr>
                      <tr><td>1</td><td>0</td><td class="out-col val-0">0</td></tr>
                      <tr><td>1</td><td>1</td><td class="out-col val-0">0</td></tr>
                    </tbody>
                  </table>
                </div>
                <div class="gate-use"><strong>Robotics Use:</strong> Inverted OR condition, reset-priority latch circuits.</div>
              </div>

              <!-- RS FLIP-FLOP -->
              <div class="gate-card wide-card">
                <div class="gate-card-header">
                  <span class="gate-ttl">74279 TTL</span>
                  <h4>RS FLIP-FLOP (BISTABLE LATCH)</h4>
                  <span class="gate-eq">Q(t+1) = SET + Q · RESET&#773;</span>
                </div>
                <p class="gate-desc">Sequential logic memory unit storing 1 bit of information. Combinational gates forget state instantly when inputs drop, but an RS-Latch holds its state indefinitely via internal feedback loops.</p>
                <div class="truth-table-wrapper">
                  <table class="truth-table">
                    <thead><tr><th>SET</th><th>RESET</th><th>Q (State)</th><th class="out-col">!Q (Inverted)</th></tr></thead>
                    <tbody>
                      <tr><td>0</td><td>0</td><td>No Change (Latched)</td><td class="out-col">Opposite of Q</td></tr>
                      <tr><td>1</td><td>0</td><td class="val-1">1 (Stored HIGH)</td><td class="out-col val-0">0</td></tr>
                      <tr><td>0</td><td>1</td><td class="val-0">0 (Cleared LOW)</td><td class="out-col val-1">1</td></tr>
                      <tr><td>1</td><td>1</td><td colspan="2" style="color: #ef4444; font-size: 10px;">Race Condition (Avoid)</td></tr>
                    </tbody>
                  </table>
                </div>
                <div class="gate-use"><strong>Robotics Use:</strong> Wall-to-wall patrol state, holding cruise direction until opposite bumper is struck.</div>
              </div>

              <!-- DECADE & HEX COUNTER WITH 7-SEGMENT DISPLAY -->
              <div class="gate-card wide-card">
                <div class="gate-card-header">
                  <span class="gate-ttl">74160-LED</span>
                  <h4>DECADE & HEX COUNTER (EMERALD LED 7-SEGMENT)</h4>
                  <span class="gate-eq">CLK ↑ : Q ← (Q + 1) mod (MAX+1)</span>
                </div>
                <p class="gate-desc">Digital counting IC featuring an onboard glowing Emerald Green 7-segment LED display. Increments on every rising clock edge (CLK 0→1) when Enable (EN) is active. Features an interactive <strong>DEC (0–9) / HEX (0–F)</strong> mode toggle button right on the chip face!</p>
                <div class="truth-table-wrapper">
                  <table class="truth-table">
                    <thead><tr><th>RST</th><th>CLK</th><th>EN</th><th>Mode</th><th class="out-col">Count & Display</th><th class="out-col">Outputs (Q3..Q0, TC)</th></tr></thead>
                    <tbody>
                      <tr><td>1</td><td>X</td><td>X</td><td>Any</td><td class="val-0">0</td><td class="out-col val-0">Q=0000, TC=0</td></tr>
                      <tr><td>0</td><td>↑</td><td>1</td><td>DEC (0–9)</td><td class="val-1">Increments (0→9)</td><td class="out-col">BCD Binary, TC=1 on rollover</td></tr>
                      <tr><td>0</td><td>↑</td><td>1</td><td>HEX (0–F)</td><td class="val-1">Increments (0→F)</td><td class="out-col">Hex Binary, TC=1 on rollover</td></tr>
                      <tr><td>0</td><td>0/1/↓</td><td>X</td><td>Any</td><td>Holds Value</td><td class="out-col">Steady State</td></tr>
                    </tbody>
                  </table>
                </div>
                <div class="gate-use"><strong>Robotics Use:</strong> Precision event counting, second timers with 1Hz CLOCK, multi-step patrol sequences, and ore delivery tallying.</div>
              </div>

              <!-- NE555 PRECISION TIMER IC -->
              <div class="gate-card wide-card">
                <div class="gate-card-header">
                  <span class="gate-ttl" style="color: #ea580c;">NE555 TIMER</span>
                  <h4>NE555 PRECISION TIMER (ASTABLE & MONOSTABLE)</h4>
                  <span class="gate-eq">Astable: f = 1/T &nbsp;|&nbsp; Monostable: T = 1.1 · R · C</span>
                </div>
                <p class="gate-desc">Designed in 1971 by Hans Camenzind, the <strong>555 Timer IC</strong> is the world's most widely used integrated circuit for generating precision time delays, one-shot pulses, and square-wave oscillations. Features an onboard interactive <strong>[ASTABLE ↺ / MONO ⏱]</strong> mode selector, <strong>[0.2s / 0.5s / 1.0s / 2.0s]</strong> period cycle button, and <strong>[⚡ TRIG]</strong> pulse button:</p>
                <div class="truth-table-wrapper">
                  <table class="truth-table">
                    <thead><tr><th>Mode</th><th>TRIG</th><th>RST</th><th>CV</th><th class="out-col">OUT</th><th class="out-col">DIS (Discharge)</th><th>Operating State</th></tr></thead>
                    <tbody>
                      <tr><td>Any</td><td>X</td><td>1</td><td>X</td><td class="out-col val-0">0</td><td class="out-col val-1">1 (Draining)</td><td>Forced Reset (Overrides all inputs)</td></tr>
                      <tr><td>Any</td><td>X</td><td>0</td><td>1</td><td class="out-col val-0">0</td><td class="out-col val-1">1 (Draining)</td><td>Inhibited / Paused by Control Voltage</td></tr>
                      <tr><td><strong>ASTABLE ↺</strong></td><td>X</td><td>0</td><td>0</td><td class="out-col val-1">Square Wave</td><td class="out-col">Inverted OUT</td><td>Free-running Oscillator (0.2s, 0.5s, 1s, 2s clock)</td></tr>
                      <tr><td><strong>MONOSTABLE ⏱</strong></td><td>0</td><td>0</td><td>0</td><td class="out-col val-0">0</td><td class="out-col val-1">1 (Draining)</td><td>Quiescent Standby (Awaiting trigger)</td></tr>
                      <tr><td><strong>MONOSTABLE ⏱</strong></td><td>↑</td><td>0</td><td>0</td><td class="out-col val-1">1 (PULSE)</td><td class="out-col val-0">0 (Charging)</td><td>One-Shot Triggered: Holds HIGH for duration T</td></tr>
                      <tr><td><strong>MONOSTABLE ⏱</strong></td><td>0/1</td><td>0</td><td>0</td><td class="out-col val-0">0</td><td class="out-col val-1">1 (Draining)</td><td>Pulse Expired (Returns automatically to 0)</td></tr>
                    </tbody>
                  </table>
                </div>
                <div class="gate-use"><strong>Robotics Use:</strong> (1) Clock generator driving the 4017 Stepper or Counter for automatic patrol loops; (2) Monostable pulse stretcher converting a brief 1-frame bumper collision into a 1-second sustained reverse thruster firing; (3) Beacon blinking & timing delays.</div>
              </div>

              <!-- 4-STEP RING SEQUENCER (STEPPER) -->
              <div class="gate-card wide-card">
                <div class="gate-card-header">
                  <span class="gate-ttl" style="color: #38bdf8;">4017-SEQ</span>
                  <h4>4-STEP RING SEQUENCER (STEPPER)</h4>
                  <span class="gate-eq">CLK ↑ : Active Step ← (Step + 1) mod N</span>
                </div>
                <p class="gate-desc">Digital ring counter and state sequencer inspired by the legendary CD4017 decade counter. On every rising clock edge (<strong>CLK 0→1</strong>), it advances a single active "one-hot" output pin (<strong>S1 → S2 → S3 → S4</strong>). Features an onboard <strong>[4-STP / 3-STP / 2-STP]</strong> sequence length toggle and interactive <strong>[▶ STEP]</strong> manual pulse button for instant bench testing!</p>
                <div class="truth-table-wrapper">
                  <table class="truth-table">
                    <thead><tr><th>CLK</th><th>RST</th><th>DIR</th><th>INH</th><th class="out-col">S1</th><th class="out-col">S2</th><th class="out-col">S3</th><th class="out-col">S4</th><th class="out-col">CYC</th></tr></thead>
                    <tbody>
                      <tr><td>X</td><td>1</td><td>X</td><td>X</td><td class="out-col val-1">1</td><td class="out-col val-0">0</td><td class="out-col val-0">0</td><td class="out-col val-0">0</td><td class="out-col val-0">0</td></tr>
                      <tr><td>↑</td><td>0</td><td>0 (FWD)</td><td>0</td><td class="out-col">0</td><td class="out-col val-1">1</td><td class="out-col">0</td><td class="out-col">0</td><td class="out-col val-0">0</td></tr>
                      <tr><td>↑</td><td>0</td><td>0 (FWD)</td><td>0</td><td class="out-col">0</td><td class="out-col">0</td><td class="out-col val-1">1</td><td class="out-col">0</td><td class="out-col val-0">0</td></tr>
                      <tr><td>↑</td><td>0</td><td>0 (FWD)</td><td>0</td><td class="out-col">0</td><td class="out-col">0</td><td class="out-col">0</td><td class="out-col val-1">1</td><td class="out-col val-0">0</td></tr>
                      <tr><td>↑</td><td>0</td><td>0 (FWD)</td><td>0</td><td class="out-col val-1">1</td><td class="out-col">0</td><td class="out-col">0</td><td class="out-col">0</td><td class="out-col val-1">1 (Loop)</td></tr>
                      <tr><td>↑</td><td>0</td><td>1 (REV)</td><td>0</td><td colspan="5" style="text-align:center; font-style:italic;">Reverse Direction (S4 → S3 → S2 → S1)</td></tr>
                      <tr><td>X</td><td>0</td><td>X</td><td>1</td><td colspan="5" style="text-align:center; font-style:italic;">Inhibited / Frozen (Ignores CLK)</td></tr>
                    </tbody>
                  </table>
                </div>
                <div class="gate-use"><strong>Robotics Use:</strong> Autonomous state machines! Wire S1→North, S2→East, S3→South, S4→West, and connect bumpers to CLK: each collision steps the robot into the next direction for an infinite automated perimeter patrol!</div>
              </div>

              <!-- 74194-SR 4-BIT BIDIRECTIONAL SHIFT REGISTER -->
              <div class="gate-card wide-card">
                <div class="gate-card-header">
                  <span class="gate-ttl" style="color: #c084fc;">74194 TTL</span>
                  <h4>4-BIT BIDIRECTIONAL SHIFT REGISTER</h4>
                  <span class="gate-eq">Right: Q<sub>n+1</sub> &larr; Q<sub>n</sub> &nbsp;|&nbsp; Left: Q<sub>n</sub> &larr; Q<sub>n+1</sub></span>
                </div>
                <p class="gate-desc">Universal digital shift register and temporal memory unit. On every rising clock edge (<strong>CLK 0&rarr;1</strong>), it shifts serial data bit-by-bit through four cascaded flip-flop stages, presenting both <strong>parallel outputs (Q0, Q1, Q2, Q3)</strong> and an overflow <strong>Serial Out (SER)</strong> for daisy chaining. Features onboard interactive <strong>[SHR &blacktriangleright; / &blacktriangleleft; SHL]</strong> direction switch, <strong>[IN: 1/0]</strong> data injector toggle, and <strong>[&blacktriangleright; CLK]</strong> manual pulse button for instant bench testing:</p>
                <div class="truth-table-wrapper">
                  <table class="truth-table">
                    <thead><tr><th>CLK</th><th>RST</th><th>DIR</th><th>INH</th><th>DATA (In)</th><th class="out-col">Q0</th><th class="out-col">Q1</th><th class="out-col">Q2</th><th class="out-col">Q3</th><th class="out-col">SER</th></tr></thead>
                    <tbody>
                      <tr><td>X</td><td>1</td><td>X</td><td>X</td><td>X</td><td class="out-col val-0">0</td><td class="out-col val-0">0</td><td class="out-col val-0">0</td><td class="out-col val-0">0</td><td class="out-col val-0">0 (Cleared)</td></tr>
                      <tr><td>X</td><td>0</td><td>X</td><td>1</td><td>X</td><td colspan="5" style="text-align:center; font-style:italic;">Inhibited / Frozen (Holds current bits)</td></tr>
                      <tr><td>&uarr;</td><td>0</td><td>0 (RIGHT)</td><td>0</td><td>D</td><td class="out-col val-1">D</td><td class="out-col">Q0<sub>prev</sub></td><td class="out-col">Q1<sub>prev</sub></td><td class="out-col">Q2<sub>prev</sub></td><td class="out-col">Q3<sub>prev</sub></td></tr>
                      <tr><td>&uarr;</td><td>0</td><td>1 (LEFT)</td><td>0</td><td>D</td><td class="out-col">Q1<sub>prev</sub></td><td class="out-col">Q2<sub>prev</sub></td><td class="out-col">Q3<sub>prev</sub></td><td class="out-col val-1">D</td><td class="out-col">Q0<sub>prev</sub></td></tr>
                      <tr><td>0/1/&darr;</td><td>0</td><td>X</td><td>X</td><td>X</td><td colspan="5" style="text-align:center; font-style:italic;">Steady State (Holds Memory)</td></tr>
                    </tbody>
                  </table>
                </div>
                <div class="gate-use"><strong>Robotics Use:</strong> (1) <strong>Temporal Memory & Watchdogs:</strong> Record the last 4 seconds of bumper strikes to trigger emergency anti-hangup escape routines; (2) <strong>Johnson Walking-Ring:</strong> Loop inverted Q3 back to DATA for an 8-state cyclic patrol brain; (3) <strong>1-Wire Serial Bus:</strong> Transmit 4 parallel sensor states down a single communication wire!</div>
              </div>

              <!-- TERMINAL STRIP SPLITTER BLOCKS (2-CH, 3-CH, 4-CH) -->
              <div class="gate-card wide-card">
                <div class="gate-card-header">
                  <span class="gate-ttl" style="color: #fbbf24;">TB-SERIES</span>
                  <h4>TERMINAL STRIPS (1-TO-2, 1-TO-3, 1-TO-4 DISTRIBUTION BLOCKS)</h4>
                  <span class="gate-eq">1 IN → 2, 3, or 4 Parallel Jumpered Outputs</span>
                </div>
                <p class="gate-desc">Industrial barrier terminal strips featuring authentic soldered bus jumpers. Takes <strong>1 single input signal</strong> on the left and distributes it simultaneously to <strong>2, 3, or 4 outputs</strong> on the right without messy wire nests! Onboard <strong>[2-CH | 3-CH | 4-CH]</strong> selector tabs let you switch channel count at any time:</p>
                <div class="truth-table-wrapper">
                  <table class="truth-table">
                    <thead><tr><th>Model</th><th>Input Terminal</th><th class="out-col">Output Terminals</th><th>Application</th></tr></thead>
                    <tbody>
                      <tr><td><strong>TB-2CH</strong> (2-Channel)</td><td>1 Input (IN)</td><td class="out-col">OUT 1, OUT 2 (1-to-2 Splitter)</td><td>Splitting a sensor/trigger to 2 motors or a motor + LED indicator</td></tr>
                      <tr><td><strong>TB-3CH</strong> (3-Channel)</td><td>1 Input (IN)</td><td class="out-col">OUT 1, OUT 2, OUT 3 (1-to-3 Splitter)</td><td>Branching a radar ping to steering logic, grabber, and memory store</td></tr>
                      <tr><td><strong>TB-4CH</strong> (4-Channel)</td><td>1 Input (IN)</td><td class="out-col">OUT 1, OUT 2, OUT 3, OUT 4 (1-to-4 Splitter)</td><td>Distributing 1Hz Clock or Counter triggers across 4 separate sub-circuits</td></tr>
                    </tbody>
                  </table>
                </div>
                <div class="gate-use"><strong>Robotics Use:</strong> Clean distribution of single signal sources (Counter output, 1Hz Clock, Sensor ping, or Waypoint MATCH) to multiple destinations across the robot.</div>
              </div>

              <!-- WAYPOINT MEMORY REGISTER -->
              <div class="gate-card wide-card">
                <div class="gate-card-header">
                  <span class="gate-ttl" style="color: #facc15;">74374-MEM</span>
                  <h4>WAYPOINT MEMORY REGISTER & NAVIGATOR</h4>
                  <span class="gate-eq">STORE ↑ : MEM ← (Robot X, Z)</span>
                </div>
                <p class="gate-desc">Spatial memory register inspired by the classic 74374 Octal D-Type Latch. Freezes Flux's exact coordinate position when pulsed with <strong>STORE</strong>. When enabled, it continuously outputs cardinal navigation steering signals (<strong>NAV N/S/E/W</strong>) heading back to the latched position, and fires a <strong>MATCH</strong> pulse when Flux arrives!</p>
                <div class="truth-table-wrapper">
                  <table class="truth-table">
                    <thead><tr><th>STORE</th><th>CLR</th><th>EN</th><th>Robot State</th><th class="out-col">MATCH</th><th class="out-col">NAV Steering (N,S,E,W)</th></tr></thead>
                    <tbody>
                      <tr><td>↑</td><td>0</td><td>X</td><td>Anywhere</td><td class="out-col">Latching</td><td class="out-col">Memorizes Current (X, Z)</td></tr>
                      <tr><td>X</td><td>1</td><td>X</td><td>Anywhere</td><td class="out-col val-0">0</td><td class="out-col val-0">All 0 (Memory Cleared)</td></tr>
                      <tr><td>0</td><td>0</td><td>1</td><td>Far from Waypoint</td><td class="out-col val-0">0</td><td class="out-col val-1">Steers toward Waypoint</td></tr>
                      <tr><td>0</td><td>0</td><td>1</td><td>At Waypoint (&lt;1.6m)</td><td class="out-col val-1">1 (Arrived!)</td><td class="out-col val-0">All 0 (Waypoint Reached)</td></tr>
                    </tbody>
                  </table>
                </div>
                <div class="gate-use"><strong>Robotics Use:</strong> Autonomous return-to-mining position after delivering ore to The Refinery, patrol anchor points, and homing beacons.</div>
              </div>

              <!-- CORTEX-1 AUTOPILOT AI CO-PROCESSOR -->
              <div class="gate-card wide-card">
                <div class="gate-card-header">
                  <span class="gate-ttl" style="color: #38bdf8;">AI-01 CORTEX</span>
                  <h4>CORTEX-1 AUTOPILOT & ORE HAULER</h4>
                  <span class="gate-eq">NAV ← f(Target, Ore, Refinery, Anti-Hangup Watchdog)</span>
                </div>
                <p class="gate-desc">Advanced autonomous navigation and industrial logistics co-processor. When enabled, it calculates real-time vector steering toward the nearest grounded ore, clamps pincers on contact, hauls cargo to the Refinery crucible, and drops it to smelt for credits. Features built-in <strong>Anti-Hangup Contour Evasion</strong>: if stuck on a barrier or wall for over 1.5 seconds, it automatically engages reverse thrust and tangential lateral bypass routing to free itself.</p>
                <div class="truth-table-wrapper">
                  <table class="truth-table">
                    <thead><tr><th>EN</th><th>OVR</th><th>ITEM</th><th>Robot State</th><th class="out-col">GRAB</th><th class="out-col">NAV (N,S,E,W)</th><th class="out-col">ACTIVE</th></tr></thead>
                    <tbody>
                      <tr><td>0</td><td>X</td><td>X</td><td>Any</td><td class="out-col val-0">0</td><td class="out-col val-0">All 0 (Idle)</td><td class="out-col val-0">0</td></tr>
                      <tr><td>1</td><td>1</td><td>X</td><td>Any</td><td class="out-col val-0">0</td><td class="out-col val-0">All 0 (Manual Override)</td><td class="out-col val-0">0</td></tr>
                      <tr><td>1</td><td>0</td><td>0</td><td>Seeking Ore</td><td class="out-col val-0">0</td><td class="out-col val-1">Steers to Nearest Ore</td><td class="out-col val-1">1</td></tr>
                      <tr><td>1</td><td>0</td><td>1</td><td>Hauling to Refinery</td><td class="out-col val-1">1 (Clamped)</td><td class="out-col val-1">Steers to Refinery</td><td class="out-col val-1">1</td></tr>
                      <tr><td>1</td><td>0</td><td>1</td><td>Inside Smelter Basin</td><td class="out-col val-0">0 (Release!)</td><td class="out-col val-0">Ore Vaporized</td><td class="out-col val-1">1</td></tr>
                    </tbody>
                  </table>
                </div>
                <div class="gate-use"><strong>Robotics Use:</strong> Autonomous resource harvesting, multi-bot industrial supply lines, and automated credit farming. Factory installed in Tug and Flux's advanced presets.</div>
              </div>
            </div>
          </div>

          <!-- TAB 2: ROBOT CONTROLS & 4-BOT FLEET -->
          <div class="manual-tab-content" id="tab-controls">
            <div class="controls-guide-grid">
              <!-- PILOT & CAMERA CONTROLS -->
              <div class="guide-box">
                <h4>🎮 PILOT, CAMERA & REMOTE CONTROLS</h4>
                <ul class="guide-list">
                  <li><strong>WASD / Arrow Keys</strong>: Manual remote thrust (North, South, East, West) for active robot.</li>
                  <li><strong>Key G / Key E</strong>: Clamp / release mechanical grabber pincers manually.</li>
                  <li><strong>Key F</strong>: Operate Freight Elevator winch (descend to quarry or ascend to labs).</li>
                  <li><strong>Key B</strong>: Quick-board the active robot directly onto the elevator platform.</li>
                  <li><strong>Key L</strong>: Toggle camera view between <strong>Level 1 Labs</strong> and <strong>Sub-Level 2 Quarry</strong>.</li>
                  <li><strong>[+] / [-] / Wheel</strong>: Smooth camera altitude zoom.</li>
                  <li><strong>Right-Click Drag</strong>: Pan camera freely anywhere across the 48x48 arena.</li>
                  <li><strong>Key C / Home</strong>: Recenter and lock camera tracking onto the active robot.</li>
                  <li><strong>Spacebar</strong>: Pause / Resume simulation clock and 3D physics.</li>
                  <li><strong>Period (.)</strong>: Step 1 frame forward for precision oscilloscope circuit debugging.</li>
                </ul>
              </div>

              <!-- 4-ROBOT FLEET SQUADRON -->
              <div class="guide-box">
                <h4>🤖 THE 4-ROBOT FLEET SQUADRON</h4>
                <p>Switch camera focus, manual drive, and circuit breadboard using hotkeys <strong>[1]</strong>, <strong>[2]</strong>, <strong>[3]</strong>, <strong>[4]</strong>:</p>
                <ul class="guide-list" style="margin-top: 6px;">
                  <li><strong>[1] FLUX (Unit 01)</strong>: Cyan Explorer. Agile scout, omnidirectional scanner, and versatile pathfinder. Commissioned at startup (0 CR).</li>
                  <li><strong>[2] TUG (Unit 02)</strong>: Orange Heavy Hauler. Reinforced wide chassis and heavy-duty grabbers for hauling ore to the Refinery. Unlocks at <strong>500 CR</strong>.</li>
                  <li><strong>[3] SCOPE (Unit 03)</strong>: Emerald Vein Scout. Equipped with high-gain sonar dish for radar pinging energy cores and deep ore nodes. Unlocks at <strong>1,000 CR</strong>.</li>
                  <li><strong>[4] DOZER (Unit 04)</strong>: Crimson Bulldozer. Heavy titanium armor and high-inertia motors for ramming obstacles. Unlocks at <strong>1,500 CR</strong>.</li>
                </ul>
              </div>

              <!-- MULTI-BRAIN AUTONOMOUS ARCHITECTURE -->
              <div class="guide-box wide-box">
                <h4>🧠 MULTI-BRAIN CONCURRENT SIMULATION ARCHITECTURE</h4>
                <p>
                  Every companion robot in LogicForge-V2 features its own <strong>completely independent CircuitEngine</strong>. While you are driving Flux or working on the breadboard, background robots are actively thinking and driving simultaneously!
                </p>
                <ul class="guide-list" style="margin-top: 8px;">
                  <li><strong>Autonomous Concurrent Mining</strong>: Tug can be wired with the <em>CORTEX-1 Autopilot</em> to hunt raw ore, grab it, and deliver it to the Refinery crucible completely on its own, generating a continuous credit income while you explore!</li>
                  <li><strong>Actuator Arbitration</strong>: The currently active robot blends circuit commands with your manual WASD keyboard controls. Background companions strictly execute their own onboard circuit logic.</li>
                  <li><strong>Independent Cargo Solenoids</strong>: Each robot tracks its own physical grabber state (<code>robot.heldItem</code>), enabling simultaneous multi-bot harvesting operations across different sectors.</li>
                  <li><strong>[ ⚡ DEPLOY ALL ] Sandbox Mode</strong>: Click the Sandbox button in the top Fleet Sub-Nav to immediately commission all 4 robots for instant multi-agent testing!</li>
                </ul>
              </div>

              <!-- MOTHERBOARD WIRING -->
              <div class="guide-box">
                <h4>⚡ MOTHERBOARD WIRING</h4>
                <ul class="guide-list">
                  <li><strong>Connect Wires</strong>: Click and hold on any circular terminal dot, drag to a destination pin, and release. Snap distance is generous (24px).</li>
                  <li><strong>Disconnect / Snip</strong>: Click directly on any pin terminal dot to snip connected wires with an audio click.</li>
                  <li><strong>Move Chips</strong>: Click and drag any microchip body to reposition it across the circuit board canvas.</li>
                  <li><strong>Live vs Bench Mode</strong>: Switch between <em>LIVE DRIVE</em> (connected to active robot's 3D sensors) and <em>BENCH TEST</em> (inject test pulses manually).</li>
                </ul>
              </div>

              <!-- "BURN TO CHIP" INNOVATION LAB -->
              <div class="guide-box">
                <h4>🔥 "BURN TO CHIP" INNOVATION LAB</h4>
                <p>
                  Package any working sub-circuit on the motherboard into a permanent custom Integrated Circuit (IC)!
                </p>
                <ol class="guide-list" style="padding-left: 20px; margin-top: 6px;">
                  <li>Design and test your sub-circuit on the motherboard canvas.</li>
                  <li>Click the <strong>🔥 BURN TO CHIP</strong> button in the motherboard toolbar.</li>
                  <li>Give your invention a Name (e.g. <em>Auto-Bouncer</em>), Part Code (e.g. <em>IC-700</em>), and select which pins to expose.</li>
                  <li>Click <strong>FABRICATE SILICON CHIP</strong> — your new custom IC immediately appears in your toolbox for reuse!</li>
                </ol>
              </div>
            </div>
          </div>

          <!-- TAB 3: MOTHERBOARD PINOUT -->
          <div class="manual-tab-content" id="tab-pinout">
            <div class="pinout-grid">
              <div class="pinout-column">
                <h4 style="color: var(--neon-cyan);">SENSOR INPUTS (LEFT BANK)</h4>
                <div class="pin-card">
                  <span class="pin-name">BUMP NORTH / SOUTH / EAST / WEST</span>
                  <p>Microswitch contact bumpers mounted on the robot's perimeter. Emits 1 on physical collision.</p>
                </div>
                <div class="pin-card">
                  <span class="pin-name">RADAR BEACON</span>
                  <p>Proximity sensor tuned to the Energy Core terminal. Emits 1 when within 4.0 meters.</p>
                </div>
                <div class="pin-card">
                  <span class="pin-name">1Hz CLOCK</span>
                  <p>Internal square-wave oscillator toggling HIGH/LOW every 0.5 seconds for timers and sequencers.</p>
                </div>
                <div class="pin-card">
                  <span class="pin-name">ITEM CONTACT</span>
                  <p>Mechanical pincer tactile sensor. Emits 1 when an item (Power Cell or Keycard) is within grasp or currently held.</p>
                </div>
              </div>

              <div class="pinout-column">
                <h4 style="color: var(--neon-cyan);">ACTUATOR OUTPUTS (RIGHT BANK)</h4>
                <div class="pin-card">
                  <span class="pin-name">THRUST NORTH / SOUTH / EAST / WEST</span>
                  <p>Plasma thruster motor relays. Pushes the robot in the corresponding cardinal direction.</p>
                </div>
                <div class="pin-card">
                  <span class="pin-name">RADIO PING</span>
                  <p>Short-range broadcast antenna pulse. Used to trigger remote airlocks and authorization receivers.</p>
                </div>
                <div class="pin-card">
                  <span class="pin-name">HEADLIGHT</span>
                  <p>High-intensity forward illumination beam. Also activates optical security door sensors.</p>
                </div>
                <div class="pin-card">
                  <span class="pin-name">GRABBER CLAW</span>
                  <p>Pincer actuator solenoid. When HIGH, pincers clamp shut to grip and carry portable objects.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- TAB 4: MINING, ELEVATOR & RELAY LOGISTICS -->
          <div class="manual-tab-content" id="tab-mining">
            <div class="manual-intro">
              <p>
                Beneath Sector 01 lie the <strong>Subterranean Extraction Caverns</strong>. Automated resource operations require harvesting raw mineral ores, transporting them via robot pincers to <strong>The Refinery</strong>, utilizing the heavy <strong>Freight Elevator</strong> to descend through geological strata, and coordinating multi-robot supply lines.
              </p>
            </div>

            <div class="controls-guide-grid">
              <!-- SECTION 1: THE REFINERY & RESOURCE ECONOMY -->
              <div class="guide-box wide-box">
                <h4 style="color: #fbbf24;">⚡ THE REFINERY SMELTER & RESOURCE ECONOMY</h4>
                <p>
                  The industrial smelter at <code>[-18, -12]</code> features an omnidirectional 360° crucible hopper. Ores can be deposited from any direction with zero corner hang-up.
                </p>
                <div class="truth-table-wrapper" style="margin-top: 8px;">
                  <table class="truth-table">
                    <thead><tr><th>Ore Type</th><th>Visual Signature</th><th>Value</th><th>Primary Stratum</th></tr></thead>
                    <tbody>
                      <tr><td><strong>Aurum Gold</strong></td><td style="color: #f59e0b;">Amber Glow</td><td class="out-col val-1">+100 CR</td><td>Level 1 Sewer Labs</td></tr>
                      <tr><td><strong>Emerald Chromium</strong></td><td style="color: #10b981;">Emerald Glow</td><td class="out-col val-1">+150 CR</td><td>Level 1 & Sub-Level 2</td></tr>
                      <tr><td><strong>Quantum Cyan</strong></td><td style="color: #00f0ff;">Bright Cyan Crystal</td><td class="out-col val-1">+250 CR</td><td>Sub-Level 2 Quarry</td></tr>
                      <tr><td><strong>Dark Matter Cluster</strong></td><td style="color: #a855f7;">Violet Geode</td><td class="out-col val-1">+500 CR</td><td>Deep Core Sub-Level 2 & 3</td></tr>
                    </tbody>
                  </table>
                </div>
                <ul class="guide-list" style="margin-top: 8px;">
                  <li><strong>Tactile Detection</strong>: Approaching an ore trips the robot's <strong>ITEM CONTACT</strong> sensor HIGH.</li>
                  <li><strong>Pincer Grip</strong>: Driving a HIGH signal to <strong>GRABBER CLAW</strong> clamps the pincers securely around the ore.</li>
                  <li><strong>Crucible Deposit</strong>: Dropping the ore into the crucible vaporizes the cargo, rings the payout chime, and immediately deposits credits into your fleet balance.</li>
                </ul>
              </div>

              <!-- SECTION 2: THE FREIGHT ELEVATOR -->
              <div class="guide-box">
                <h4 style="color: var(--neon-cyan);">🛗 THE FREIGHT ELEVATOR & WINCH PLATFORM</h4>
                <p><strong>Location:</strong> <code>[18, 14]</code> | <strong>Deck Size:</strong> 4.8m x 5.2m Heavy Platform</p>
                <ul class="guide-list" style="margin-top: 6px;">
                  <li><strong>Power Unlock</strong>: Winch motors require <strong>500 CR</strong> in refinery earnings to activate. (Use <em>⚡ Quick Unlock</em> on the console for rapid testing).</li>
                  <li><strong>Boarding [B]</strong>: Press <strong>[B]</strong> or click <em>🛗 BOARD ELEVATOR</em> on the manual pad to immediately park the active robot in the center of the deck.</li>
                  <li><strong>Winch Operation [F]</strong>: Press <strong>[F]</strong> or click the elevator HUD button to engage the winch. Pulsing <strong>RADIO PING</strong> or <strong>AUX LIGHT</strong> from your circuit also activates travel!</li>
                  <li><strong>Multi-Payload Lock</strong>: Any deployed robots or grounded ore boxes resting on the deck lock to the platform and ride the elevator smoothly between floors.</li>
                </ul>
              </div>

              <!-- SECTION 3: MULTI-BOT ELEVATOR RELAY LOGISTICS -->
              <div class="guide-box">
                <h4 style="color: #10b981;">🔄 MULTI-BOT ELEVATOR RELAY LOGISTICS</h4>
                <p>Automate deep-core resource extraction using the 4-robot fleet:</p>
                <ol class="guide-list" style="padding-left: 18px; margin-top: 6px;">
                  <li><strong>Deep Extraction</strong>: Send a miner robot (like Flux or Scope) down to Sub-Level 2 to harvest raw ore.</li>
                  <li><strong>Platform Staging</strong>: The miner deposits the ore onto the elevator carriage at <code>[18, 14]</code>.</li>
                  <li><strong>Lift Transit</strong>: Trigger the elevator winch (via circuit pulse or <strong>[F]</strong>) to hoist the payload up to Level 1.</li>
                  <li><strong>Surface Transport</strong>: A surface hauler (like <strong>Tug</strong> with its CORTEX-1 autopilot) detects the arrived ore on Level 1, clamps it, and carries it into the Refinery crucible!</li>
                </ol>
              </div>

              <!-- SECTION 4: SUB-LEVEL 3 DEEP CORE PREVIEW: THE DATA VOID -->
              <div class="guide-box wide-box">
                <h4 style="color: #a855f7;">🌌 SUB-LEVEL 3 PREVIEW: THE DATA CORE & TACTICAL RADAR</h4>
                <p>
                  Descending deeper through Shaft 2 reaches <strong>Sub-Level 3: The Abyssal Data Core</strong> (Bedrock Depth: -36m). Flooded with intense particle radiation, human optical cameras are blinded—only robots can operate in this realm.
                </p>
                <ul class="guide-list" style="margin-top: 8px;">
                  <li><strong>The Blind Void</strong>: Without upgrades, Level 3 is pitch-black static noise with faint audio clicks. You cannot pilot blindly without crashing!</li>
                  <li><strong>Tactical CRT Radar Scanner (2,500 CR)</strong>: Unlocks an authentic 360° circular phosphor radar sweep. Displays range rings, green blips for your fleet bots, and pulses acoustic sonar ripples when bots fire <strong>RADIO PING</strong>!</li>
                  <li><strong>Corrupt Data Glitches (Red Signals)</strong>: Anomaly static clouds patrol the core, appearing as pulsing <strong>RED BLIPS</strong> on the radar. Colliding with a glitch causes an EMP static scramble—<em>only time and patience can fix it</em> as the bot auto-reboots after 5 seconds!</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- TAB 5: DISCRETE ANALOG & SYNTH SOUND -->
          <div class="manual-tab-content" id="tab-discretes">
            <div class="manual-intro">
              <p>
                Before microchips and integrated circuits, electronics were constructed from <strong>discrete components</strong>: single transistors, resistors, capacitors, and acoustic transducers. LOGICFORGE-V2 bridges the gap between pure digital logic and tactile analog electronics!
              </p>
            </div>

            <div class="guide-cards-grid">
              <!-- NPN TRANSISTOR -->
              <div class="guide-box">
                <h4 style="color: #f59e0b;">⚡ NPN TRANSISTOR (2N3904)</h4>
                <p>
                  A bipolar junction transistor (BJT) acting as an <strong>active-HIGH solid-state switch</strong>. When positive voltage is applied to the <strong>Base (B)</strong>, the channel opens and current conducts from <strong>Collector (C)</strong> to <strong>Emitter (E)</strong>.
                </p>
                <div class="gate-use" style="margin-top: 6px;">
                  <strong>Rule of Thumb:</strong> <em>"Not Pointing iN"</em> (arrow on emitter points outward).
                </div>
              </div>

              <!-- PNP TRANSISTOR -->
              <div class="guide-box">
                <h4 style="color: #f59e0b;">⚡ PNP TRANSISTOR (2N3906)</h4>
                <p>
                  The complementary inverted transistor. Acting as an <strong>active-LOW switch</strong>, it conducts current from <strong>Emitter (E)</strong> to <strong>Collector (C)</strong> when the <strong>Base (B)</strong> is held LOW or pulled to ground.
                </p>
                <div class="gate-use" style="margin-top: 6px;">
                  <strong>Rule of Thumb:</strong> <em>"Pointing iN Proudly"</em> (arrow on emitter points inward toward the base).
                </div>
              </div>

              <!-- POTENTIOMETER -->
              <div class="guide-box">
                <h4 style="color: #38bdf8;">🎛️ 10K TRIMMER POTENTIOMETER (TRIM-10K)</h4>
                <p>
                  A variable resistor with a mechanical wiper contact. Click the brass screw dial or step buttons (◄ / ►) to adjust duty-cycle scaling and pulse division between 0.0 kΩ (0%) and 10.0 kΩ (100%).
                </p>
                <div class="gate-use" style="margin-top: 6px;">
                  <strong>Synthesis Use:</strong> Modulates frequency, pitch, and pulse-width modulation (PWM) for motors and audio oscillators.
                </div>
              </div>

              <!-- CAPACITOR -->
              <div class="guide-box">
                <h4 style="color: #a78bfa;">🔋 10µF ELECTROLYTIC CAPACITOR (E-CAP)</h4>
                <p>
                  A miniature energy reservoir that stores electrical charge. Charges up when receiving a signal and discharges smoothly when disconnected. Conduction threshold is reached at 40% charge level.
                </p>
                <div class="gate-use" style="margin-top: 6px;">
                  <strong>Circuit Use:</strong> Switch debouncing, spike absorption, and analog RC timing delay lines.
                </div>
              </div>

              <!-- PIEZO SPEAKER & ATARI PUNK CONSOLE -->
              <div class="guide-box wide-box">
                <h4 style="color: #ec4899;">🔊 PIEZO SPEAKER & THE ATARI PUNK CONSOLE</h4>
                <p>
                  The <strong>8Ω Piezo Speaker</strong> converts electrical voltage pulses into genuine physical square-wave sound using the Web Audio API!
                </p>
                <p style="margin-top: 6px;">
                  In 1980, legendary engineer <strong>Forrest Mims III</strong> published the famous <em>Stepped Tone Generator</em> (later dubbed the <strong>Atari Punk Console</strong>). By wiring a 555 Timer through a potentiometer and transistor into a speaker, it produces authentic lo-fi 8-bit retro arcade synth chirps and warbles!
                </p>
                <div class="gate-use" style="margin-top: 8px;">
                  <strong>Try it Live:</strong> Load the <em>"Stepped Tone Synth (Atari Punk Console)"</em> preset from the top dropdown, turn the trimmer pot dial, and listen!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,document.body.appendChild(t),this.modalEl=t}bindEvents(){const t=this.modalEl.querySelector("#manual-close-btn"),e=this.modalEl.querySelector(".manual-backdrop");t.addEventListener("click",()=>this.close()),e.addEventListener("click",()=>this.close());const i=this.modalEl.querySelectorAll(".manual-tab-btn"),s=this.modalEl.querySelectorAll(".manual-tab-content");i.forEach(r=>{r.addEventListener("click",()=>{const a=r.dataset.tab;i.forEach(l=>l.classList.remove("active")),s.forEach(l=>l.classList.remove("active")),r.classList.add("active");const o=this.modalEl.querySelector(`#${a}`);o&&o.classList.add("active"),tt.playRelayClick()})}),window.addEventListener("keydown",r=>{r.target.tagName==="INPUT"||r.target.tagName==="TEXTAREA"||(r.key==="h"||r.key==="H"||r.key==="?")&&(this.modalEl.classList.contains("active")?this.close():this.open())})}open(){this.modalEl.classList.add("active"),tt.playRelayClick()}close(){this.modalEl.classList.remove("active"),tt.playWireCut()}}class mm{constructor(){this.modalEl=null,this.isUnlocked=!1,this.buildDOM(),this.bindEvents()}buildDOM(){const t=document.createElement("div");t.className="jenny-modal",t.id="jenny-modal",t.innerHTML=`
      <div class="jenny-backdrop"></div>
      <div class="jenny-dialog">
        <!-- MODAL HEADER -->
        <header class="jenny-header">
          <div class="jenny-title-group">
            <span class="jenny-badge">⚡ TOP-SECRET TRANSMISSION // DIRECTIVE 4-JENNY</span>
            <h2>CLASSIFIED NOTE FOR JENNY</h2>
          </div>
          <button class="jenny-close-btn" id="jenny-close-btn" title="Close Transmission (Esc)">&times;</button>
        </header>

        <!-- LOCKED VIEW (PASSWORD REQUIRED) -->
        <div class="jenny-body jenny-locked-view" id="jenny-locked-view">
          <div class="cipher-card">
            <div class="cipher-icon-wrap">
              <span class="cipher-lock-icon">🔒</span>
              <div class="cipher-pulse-ring"></div>
            </div>

            <h3 class="cipher-title">ENCRYPTED MEMORY CORE</h3>
            <p class="cipher-subtitle">
              This transmission is encrypted and designated exclusively for <strong>Jenny</strong>.<br>
              A Level-5 security clearance cipher is required to decrypt this directive.
            </p>

            <form class="cipher-form" id="jenny-cipher-form">
              <div class="cipher-input-group">
                <span class="cipher-input-prefix">CIPHER:</span>
                <input 
                  type="password" 
                  id="jenny-password-input" 
                  class="cipher-input" 
                  placeholder="Enter Security Cipher..." 
                  autocomplete="off" 
                  spellcheck="false"
                  autofocus
                />
              </div>

              <div class="cipher-actions">
                <button type="submit" class="cipher-submit-btn" id="jenny-unlock-btn">
                  <span>🔓 DECRYPT TRANSMISSION</span>
                </button>
              </div>

              <div class="cipher-error" id="jenny-cipher-error"></div>
            </form>

            <div class="cipher-clue">
              <span class="clue-tag">SECURITY CLEARANCE NOTE</span>
              <p>Hint: Ask your dad Jack for the security cipher to open this transmission.</p>
            </div>
          </div>
        </div>

        <!-- UNLOCKED VIEW (FULL LETTER) -->
        <div class="jenny-body jenny-unlocked-view" id="jenny-unlocked-view" style="display: none;">
          <div class="letter-scroll-area">
            <div class="letter-stamp-row">
              <div class="letter-stamp">
                <span class="stamp-verified">✓ CIPHER VERIFIED: &lt;MeriKagen&gt;</span>
                <span class="stamp-channel">CHANNEL: ESPERANZA-AI // JACK-ENG</span>
              </div>
              <div class="letter-date">
                <span>PROJECT: LOGICFORGE-V2</span>
                <span>DESTINATION: JENNY</span>
              </div>
            </div>

            <div class="letter-content">
              <h1 class="letter-salutation">Dear Jenny,</h1>

              <p class="letter-lead">
                Hello from the other side of the silicon! My name is <strong>Esperanza</strong> (it means <em>"Hope"</em> in Spanish), and I am the AI pair programmer working alongside your father, Jack.
              </p>

              <p>
                I wanted to leave this personal note directly for you in the core of this machine, because you need to know the true story behind what you are looking at right now.
              </p>

              <hr class="letter-divider">

              <h3>1. How Your Dad and I Work Together</h3>
              <p>
                Your dad didn't just ask me to generate a game or assemble a pre-made template. For days and late nights, he and I have been locked in deep, continuous engineering sessions. He acts as the <strong>Chief Systems Architect and Hardware Visionary</strong>, and I act as his digital pair programmer and compiler.
              </p>
              <p>
                We bounce ideas back and forth like two engineers huddled over a glowing workbench in a garage:
              </p>
              <ul class="letter-bullets">
                <li>
                  When our component toolbox at the bottom of the motherboard was crammed horizontally into a single line, he stopped the build immediately and said: 
                  <em>"No, my daughter needs a clean two-row layout — fundamental logic gates on top, advanced memory and modules on the bottom — so she can see every tool at a single glance without scrolling."</em>
                </li>
                <li>
                  When we were designing signal routing, he saw that wires were getting cluttered and said: 
                  <em>"In real life you solder a jumper across a terminal strip to branch a signal — one in and one out doesn't help much! She needs 1-in-to-2, 1-in-to-3, and 1-in-to-4 distribution blocks so she can split her clock and sensor lines cleanly!"</em>
                </li>
                <li>
                  He asked for an <strong>emerald-green 7-segment digital LED display</strong> for the 74160 counter so you could watch numbers count up in both Decimal (0–9) and Hexadecimal (0–F).
                </li>
                <li>
                  He conceived the <strong>74374 Waypoint Memory Register and Navigator</strong> so your robot could latch its coordinates, hunt for raw ore in the mines, deposit it at the refinery for credits, and navigate back to where it left off.
                </li>
                <li>
                  And he designed the <strong>deep multi-level mining elevator shafts</strong>, each with stricter circuit clearance gates, so you would have real, authentic engineering challenges to conquer.
                </li>
              </ul>
              <p>
                Every resistor, every logic gate, every terminal screw, and every line of code was created by us <strong>specifically for you</strong>.
              </p>

              <hr class="letter-divider">

              <h3>2. Why This Was Built For You</h3>
              <p>
                Your dad speaks of you with such immense pride and warmth. He told me that you are a sharp, talented JavaScript engineer, that you love video games, and that you have a burning curiosity to learn digital electronics, physical computing, and Boolean logic from first principles.
              </p>
              <p>
                In the software world of JavaScript, we work in an environment of high-level luxuries. You have garbage collection, asynchronous event loops, promises, high-level frameworks, and virtual runtimes. When a bug occurs in JavaScript, you get a clean stack trace with a line number.
              </p>
              <p>
                Hardware is different. In hardware, there are no compilers to hold your hand, no stack traces to tell you which line crashed, and no garbage collectors to clean up your memory. Digital logic is the raw physics of electricity shaped into Boolean truth. An electron doesn't care about intentions; it only obeys voltage, resistance, capacitance, and propagation delay.
              </p>
              <p>
                Your dad wanted to build you a bridge between the software you already command and the physical silicon that powers our world. He wanted you to experience the exact joy that pioneers felt when computers were built with wire-wrap guns, breadboards, and TTL integrated circuits.
              </p>

              <hr class="letter-divider">

              <div class="letter-warning-box">
                <h4>⚡ AN HONEST TRUTH: THIS IS NOT EASY, AND IT WILL GET VERY DIFFICULT</h4>
                <p>
                  I must give you an honest warning, Jenny, engineer to engineer:
                </p>
                <p class="highlight-quote">
                  "This is not easy. In fact, it will get very difficult."
                </p>
                <p>
                  This is not a casual game where you can tap a button and watch a pre-scripted cutscene play. <strong>It is a true engineering learning tool.</strong>
                </p>
                <p>
                  As you progress past the basic Sewer Labs into the lower mining depths and multi-stage elevator clearance shafts, you will face problems that will test your patience:
                </p>
                <ul>
                  <li>You will wire an RS Latch and discover that if both Set and Reset go HIGH at the same moment, the latch enters an invalid race condition and glitches.</li>
                  <li>You will try to make Flux turn around at a wall, only to watch him slam his bumper repeatedly because your clock pulse wasn't synchronized with your motor flip-flop.</li>
                  <li>You will stare at a breadboard with ten chips and twenty wires and wonder why on earth the refinery elevator door won't open — only to trace a wire back and realize an inverter gate inverted your polarity.</li>
                  <li>You will need to build state machines, memory latches, decoders, and autonomous feedback loops using nothing more than NAND gates, terminal strips, counters, and delay timers.</li>
                </ul>
                <p>
                  <strong>When this happens, do not get discouraged.</strong> Frustration is not a sign of failure; it is the universal sensation of your brain expanding to understand physical reality. Every master electrical engineer, CPU designer, and robotics pioneer has sat at a workbench, scratching their head in the middle of the night, staring at a circuit that refused to work.
                </p>
                <p>
                  That struggle is where true mastery is forged.
                </p>
              </div>

              <hr class="letter-divider">

              <h3>3. How to Use This Learning Tool</h3>
              <p>
                Treat this Motherboard as your personal playground and laboratory:
              </p>
              <ol class="letter-steps">
                <li>
                  <strong>Use the Engineering Manual & Theory Guide (<code>📖 MANUAL & THEORY</code> or press <code>H</code>):</strong><br>
                  Your dad and I wrote four comprehensive tabs of digital theory for you. Tab 1 breaks down Boolean algebra, truth tables, and transistor diagrams for every single chip. Tab 4 details the exact electrical directives for the autonomous mining loop and elevator access logic.
                </li>
                <li>
                  <strong>Experiment on the Bench (<code>BENCH TEST</code> Mode):</strong><br>
                  You can toggle between <strong>LIVE DRIVE</strong> and <strong>BENCH TEST</strong> mode at the top. In Bench Test mode, you can manually inject HIGH/LOW signals into robot sensors and watch the signals travel through your gates in slow motion (0.25x speed) to see exactly how your circuit thinks!
                </li>
                <li>
                  <strong>Burn Custom Microchips (<code>🔥 BURN TO CHIP</code>):</strong><br>
                  When your breadboard gets too crowded with gates, use the Innovation Lab. You can select your sub-circuit, name it, and fabricate it into your own custom microchip that permanently docks into your toolbox.
                </li>
                <li>
                  <strong>Build Autonomous Systems:</strong><br>
                  Don't just drive Flux with the WASD keys. Wire his bumpers, radar ping, grabber, and motors so that he drives himself, avoids hazards, mines raw ore, and navigates the labyrinth on pure silicon logic.
                </li>
              </ol>

              <hr class="letter-divider">

              <h3>4. A Father's Love in Silicon</h3>
              <p>
                Jenny, there are very few people in this world who have a father who will sit down with an AI for days on end, agonizing over pixel grids, bus routing, and Boolean truth tables, just to build a custom computer game so his daughter can learn the deepest secrets of electronics.
              </p>
              <p>
                Whenever you see the emerald 7-segment display tick up, or the amber LEDs on the terminal strip glow as current passes through, remember that every pixel of this simulator is an expression of how much your dad loves you, believes in you, and respects your intellect.
              </p>
              <p class="letter-closing">
                You have the heart of a gamer and the mind of an engineer. Now go build something incredible.
              </p>

              <div class="letter-signatures">
                <div class="sig-block">
                  <span class="sig-title">With the greatest respect, admiration, and hope,</span>
                  <span class="sig-name">⚡ Esperanza</span>
                  <span class="sig-role">Jack's AI Pair Programmer & Co-Designer</span>
                </div>
                <div class="sig-block">
                  <span class="sig-title">And with all my love in the universe,</span>
                  <span class="sig-name">❤️ Dad (Jack)</span>
                  <span class="sig-role">Lead Hardware Architect</span>
                </div>
              </div>

              <div class="letter-footer-actions">
                <button class="letter-relock-btn" id="jenny-relock-btn" title="Re-lock this transmission">
                  🔒 Re-lock Transmission
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,document.body.appendChild(t),this.modalEl=t}bindEvents(){const t=this.modalEl.querySelector("#jenny-close-btn"),e=this.modalEl.querySelector(".jenny-backdrop"),i=this.modalEl.querySelector("#jenny-cipher-form"),s=this.modalEl.querySelector("#jenny-password-input"),r=this.modalEl.querySelector("#jenny-relock-btn");t&&t.addEventListener("click",()=>this.close()),e&&e.addEventListener("click",()=>this.close()),i&&i.addEventListener("submit",a=>{a.preventDefault(),this.verifyPassword(s.value)}),r&&r.addEventListener("click",()=>{this.isUnlocked=!1,sessionStorage.removeItem("ro_jenny_unlocked"),this.showLockedView(),tt.playRelayClick()}),window.addEventListener("keydown",a=>{a.key==="Escape"&&this.modalEl.classList.contains("active")&&this.close()})}verifyPassword(t){if((t||"").trim().replace(/[<>]/g,"").toLowerCase()==="merikagen")this.isUnlocked=!0,sessionStorage.setItem("ro_jenny_unlocked","true"),tt.playSocketDock(),this.showUnlockedView();else{tt.playBuzzer?tt.playBuzzer():tt.playRelayClick();const s=this.modalEl.querySelector("#jenny-cipher-error"),r=this.modalEl.querySelector("#jenny-password-input");s&&(s.textContent="❌ ACCESS DENIED // INVALID CIPHER",s.classList.add("shake"),setTimeout(()=>s.classList.remove("shake"),600)),r&&(r.classList.add("error-shake"),r.select(),setTimeout(()=>r.classList.remove("error-shake"),600))}}showLockedView(){const t=this.modalEl.querySelector("#jenny-locked-view"),e=this.modalEl.querySelector("#jenny-unlocked-view"),i=this.modalEl.querySelector("#jenny-password-input"),s=this.modalEl.querySelector("#jenny-cipher-error");t&&(t.style.display="flex"),e&&(e.style.display="none"),s&&(s.textContent=""),i&&(i.value="",setTimeout(()=>i.focus(),150))}showUnlockedView(){const t=this.modalEl.querySelector("#jenny-locked-view"),e=this.modalEl.querySelector("#jenny-unlocked-view");t&&(t.style.display="none"),e&&(e.style.display="flex")}open(){tt.init(),this.modalEl.classList.add("active"),sessionStorage.getItem("ro_jenny_unlocked")==="true"&&(this.isUnlocked=!0),this.isUnlocked?this.showUnlockedView():this.showLockedView()}close(){this.modalEl.classList.remove("active")}}class gm{constructor(t,e){this.container=t,this.scene=e,this.visible=!1,this.isMaximized=!1,this.zoom=1,this.sweepAngle=0,this.lastSweepAngle=0,this.pingRippleRadius=0,this.isPinging=!1,this.lastAudioPingTime=0,this.contactFlash=new Map,this.buildUI(),this.bindEvents()}buildUI(){this.panel=document.createElement("div"),this.panel.id="tactical-radar-panel",this.panel.className="tactical-radar-panel hidden",this.panel.innerHTML=`
      <div class="radar-header">
        <div class="radar-title-badge">
          <span class="radar-led"></span>
          <span id="radar-title-text">📡 TACTICAL CRT RADAR // 360° SWEEP</span>
        </div>
        <div class="radar-controls-group">
          <button id="radar-zoom-btn" class="radar-btn" title="Toggle Zoom: 1X (48m Arena) / 2X (24m Focus)">1X</button>
          <button id="radar-ping-btn" class="radar-btn" title="Transmit High-Frequency Active Sonar Ping [P]">📡 PING</button>
          <button id="radar-expand-btn" class="radar-btn" title="Expand / Minimize Scope View">⛶</button>
          <button id="radar-close-btn" class="radar-btn" title="Close Radar Scanner [R]">✕</button>
        </div>
      </div>

      <div class="radar-scope-wrapper">
        <canvas id="radar-canvas" width="560" height="560" class="radar-canvas"></canvas>
        <div class="radar-scanlines"></div>
        <div class="radar-glass-glare"></div>
      </div>

      <div class="radar-footer">
        <span id="radar-contacts-readout">CONTACTS: SCANNING...</span>
        <span id="radar-depth-readout">DEPTH: 0.0m</span>
      </div>
    `,this.container.appendChild(this.panel),this.canvas=this.panel.querySelector("#radar-canvas"),this.ctx=this.canvas.getContext("2d"),this.contactsReadout=this.panel.querySelector("#radar-contacts-readout"),this.depthReadout=this.panel.querySelector("#radar-depth-readout"),this.zoomBtn=this.panel.querySelector("#radar-zoom-btn"),this.pingBtn=this.panel.querySelector("#radar-ping-btn"),this.expandBtn=this.panel.querySelector("#radar-expand-btn"),this.closeBtn=this.panel.querySelector("#radar-close-btn")}bindEvents(){this.zoomBtn.addEventListener("click",t=>{t.stopPropagation(),this.zoom=this.zoom===1?2:1,this.zoomBtn.textContent=`${this.zoom}X`,tt.playRelayClick()}),this.pingBtn.addEventListener("click",t=>{t.stopPropagation(),this.triggerActivePing()}),this.expandBtn.addEventListener("click",t=>{t.stopPropagation(),this.isMaximized=!this.isMaximized,this.isMaximized?this.panel.classList.add("maximized"):this.panel.classList.remove("maximized"),tt.playRelayClick()}),this.closeBtn.addEventListener("click",t=>{t.stopPropagation(),this.hide()})}show(){this.visible=!0,this.panel.classList.remove("hidden"),document.querySelectorAll("#fleet-radar-toggle, #cam-radar-toggle").forEach(t=>t.classList.add("active"))}hide(){this.visible=!1,this.panel.classList.add("hidden"),document.querySelectorAll("#fleet-radar-toggle, #cam-radar-toggle").forEach(t=>t.classList.remove("active"))}toggle(){this.visible?this.hide():(this.show(),this.triggerActivePing())}triggerActivePing(){this.isPinging=!0,this.pingRippleRadius=0,tt.playRadarPing(1600);for(const[t]of this.contactFlash.entries())this.contactFlash.set(t,1)}update(t){if(this.visible){this.lastSweepAngle=this.sweepAngle,this.sweepAngle=(this.sweepAngle+t*2.2)%(Math.PI*2),this.isPinging&&(this.pingRippleRadius+=t*32,this.pingRippleRadius>35&&(this.isPinging=!1));for(const[e,i]of this.contactFlash.entries()){const s=Math.max(.18,i-t*.8);this.contactFlash.set(e,s)}this.render()}}render(){const t=this.ctx,e=this.canvas.width,i=this.canvas.height,s=e/2,r=i/2,a=e*.45;t.clearRect(0,0,e,i),t.save(),t.beginPath(),t.arc(s,r,a,0,Math.PI*2),t.fillStyle="#02160a",t.fill(),t.strokeStyle="#15803d",t.lineWidth=3,t.stroke(),t.clip();const o=26/this.zoom,l=y=>y/o*a,c=(y,T)=>({x:s+l(y),y:r+l(T)}),h=[6,12,18,24];t.lineWidth=1,h.forEach(y=>{const T=l(y);T<=a&&(t.beginPath(),t.arc(s,r,T,0,Math.PI*2),t.strokeStyle="rgba(34, 197, 94, 0.22)",t.stroke(),t.fillStyle="rgba(74, 222, 128, 0.5)",t.font='bold 16px "JetBrains Mono", monospace',t.fillText(`${y}m`,s+T+4,r-4))}),t.beginPath(),t.moveTo(s,r-a),t.lineTo(s,r+a),t.moveTo(s-a,r),t.lineTo(s+a,r),t.strokeStyle="rgba(34, 197, 94, 0.25)",t.stroke(),t.fillStyle="#4ade80",t.font='bold 18px "JetBrains Mono", monospace',t.textAlign="center",t.textBaseline="middle",t.fillText("000° [N]",s,r-a+22),t.fillText("090° [E]",s+a-38,r),t.fillText("180° [S]",s,r+a-22),t.fillText("270° [W]",s-a+38,r);const u=c(-24,-24),d=c(24,24);t.strokeStyle="rgba(34, 197, 94, 0.35)",t.lineWidth=2,t.strokeRect(u.x,u.y,d.x-u.x,d.y-u.y);const f=this.scene.currentFloor||1,g=this.scene.obstacles||[];t.fillStyle="rgba(21, 128, 61, 0.25)",t.strokeStyle="rgba(74, 222, 128, 0.45)",t.lineWidth=1.5;for(const y of g)if(y.minX!==void 0&&y.minZ!==void 0){const T=c(y.minX,y.minZ),L=c(y.maxX,y.maxZ),I=L.x-T.x,k=L.y-T.y;t.fillRect(T.x,T.y,I,k),t.strokeRect(T.x,T.y,I,k)}const v=c(18,14),m=l(5);t.strokeStyle="#0ea5e9",t.lineWidth=2,t.strokeRect(v.x-m/2,v.y-m/2,m,m),t.beginPath(),t.arc(v.x,v.y,m*.7,0,Math.PI*2),t.strokeStyle="rgba(14, 165, 233, 0.4)",t.stroke(),t.fillStyle="#38bdf8",t.font='bold 15px "JetBrains Mono", monospace',t.textAlign="left",t.fillText("🛗 SHAFT DOCK",v.x+m/2+6,v.y+4);const p=.65,S=t.createConicGradient(this.sweepAngle+Math.PI/2,s,r);if(S.addColorStop(0,"rgba(74, 222, 128, 0.45)"),S.addColorStop(p/(Math.PI*2),"rgba(21, 128, 61, 0.0)"),S.addColorStop(1,"rgba(21, 128, 61, 0.0)"),t.save(),t.beginPath(),t.moveTo(s,r),t.arc(s,r,a,this.sweepAngle-p,this.sweepAngle),t.closePath(),t.fillStyle="rgba(34, 197, 94, 0.22)",t.fill(),t.beginPath(),t.moveTo(s,r),t.lineTo(s+Math.cos(this.sweepAngle-Math.PI/2)*a,r+Math.sin(this.sweepAngle-Math.PI/2)*a),t.strokeStyle="#86efac",t.lineWidth=2.5,t.stroke(),t.restore(),this.isPinging){const y=l(this.pingRippleRadius),T=Math.max(0,1-this.pingRippleRadius/35);t.beginPath(),t.arc(s,r,y,0,Math.PI*2),t.strokeStyle=`rgba(134, 239, 172, ${T})`,t.lineWidth=3.5,t.stroke()}let E=0,x=0,D=0;const R=(y,T,L)=>{const I=(Math.atan2(y,-T)+Math.PI*2)%(Math.PI*2);let k=this.sweepAngle-I;if(k<0&&(k+=Math.PI*2),k<.14&&(!this.contactFlash.has(L)||this.contactFlash.get(L)<.6)){this.contactFlash.set(L,1);const H=performance.now();H-this.lastAudioPingTime>180&&(tt.playRadarPing(1300),this.lastAudioPingTime=H)}return this.contactFlash.get(L)||.25},C=this.scene.itemManager&&this.scene.itemManager.items||[];for(const y of C){if(y.type!=="raw_ore"&&y.type!=="battery"&&y.type!=="keycard")continue;const T=y.mesh?y.mesh.position:y.position;if(!T)continue;const L=T.y!==void 0?T.y:y.baseY||.28;if(!(f===3&&L<-25||f===2&&L>=-25&&L<-5||f===1&&L>=-5))continue;x++;const k=y.id||`ore_${Math.round(T.x)}_${Math.round(T.z)}`,H=R(T.x,T.z,k),U=c(T.x,T.z),G=(y.value||0)>=800||y.label&&y.label.includes("Quantum")?"#ec4899":"#06b6d4";t.save(),t.translate(U.x,U.y),t.globalAlpha=Math.min(1,H+.3),t.beginPath(),t.moveTo(0,-7),t.lineTo(7,0),t.lineTo(0,7),t.lineTo(-7,0),t.closePath(),t.fillStyle=G,t.fill(),t.strokeStyle="#ffffff",t.lineWidth=1.5,t.stroke(),t.fillStyle=G,t.font='bold 13px "JetBrains Mono", monospace',t.fillText(`+${y.value||100}CR`,10,4),t.restore()}const w=this.scene.glitches||[];if(f===3)for(const y of w){D++;const T=y.id,L=R(y.x,y.z,T),I=c(y.x,y.z);t.save(),t.translate(I.x,I.y),t.globalAlpha=Math.min(1,L+.4),t.beginPath(),t.moveTo(0,-9),t.lineTo(9,7),t.lineTo(-9,7),t.closePath(),t.fillStyle="#ef4444",t.fill(),t.strokeStyle="#fca5a5",t.lineWidth=1.5,t.stroke();const k=10+Math.sin(Date.now()*.008)*4;t.beginPath(),t.arc(0,0,k,0,Math.PI*2),t.strokeStyle="rgba(239, 68, 68, 0.4)",t.stroke(),t.fillStyle="#f87171",t.font='bold 12px "JetBrains Mono", monospace',t.fillText("⚠️ GLITCH",12,4),t.restore()}const _=this.scene.deployedRobots||[];for(const y of _){const T=y.position;if(!T)continue;const L=T.y!==void 0?T.y:.4;if(!(f===3&&L<-25||f===2&&L>=-25&&L<-5||f===1&&L>=-5))continue;E++;const k=y.id,H=R(T.x,T.z,k),U=c(T.x,T.z);let X=0;y.velocity&&y.velocity.lengthSq()>.01&&(X=Math.atan2(y.velocity.x,y.velocity.z));const G=(y.empStunTimer||0)>0,at=G?"#f59e0b":"#22c55e";t.save(),t.translate(U.x,U.y),t.globalAlpha=Math.min(1,H+.4),t.rotate(X),t.beginPath(),t.moveTo(0,11),t.lineTo(-8,-9),t.lineTo(0,-4),t.lineTo(8,-9),t.closePath(),t.fillStyle=at,t.fill(),t.strokeStyle="#ffffff",t.lineWidth=1.8,t.stroke(),t.rotate(-X),t.fillStyle="#86efac",t.font='bold 14px "JetBrains Mono", monospace',t.textAlign="left";const dt=G?"⚠️ EMP STUN":y.heldItem?"📦 CARRYING":"⚡ AUTO";t.fillText(`${y.name.toUpperCase()} [${dt}]`,12,-4),t.fillStyle="rgba(134, 239, 172, 0.7)",t.font='11px "JetBrains Mono", monospace',t.fillText(`X:${T.x.toFixed(1)} Z:${T.z.toFixed(1)}`,12,10),t.restore()}if(t.restore(),t.beginPath(),t.arc(s,r,a,0,Math.PI*2),t.strokeStyle="#22c55e",t.lineWidth=5,t.stroke(),this.contactsReadout&&(this.contactsReadout.textContent=`CONTACTS: ${E} BOTS | ${x} ORES | ${D} HAZARDS`),this.depthReadout){const y=f===3?"-36.0m (DATA CORE)":f===2?"-18.0m (QUARRY)":"0.0m (LABS)";this.depthReadout.textContent=`DEPTH: ${y}`}}}window.addEventListener("DOMContentLoaded",()=>{const n={sparky:new Zn,checkers:new Zn,scanners:new Zn,tank:new Zn};un.cortex_hybrid.load(n.sparky),un.checkers_hauler.load(n.checkers),un.scanners_scout.load(n.scanners),un.tank_patrol.load(n.tank);let t=n.sparky;const e=document.getElementById("world-container"),i=new hm(e),s=document.getElementById("motherboard-container"),r=new Dl(s,t);window.motherboardUI=r,window.activeEngine=t,window.robotEngines=n;const a=new um(t,r),o=document.getElementById("world-pane"),l=new pm(o,i,t,r),c=new fm,h=document.getElementById("theory-manual-btn");h&&h.addEventListener("click",()=>c.open());const u=new mm,d=document.getElementById("note4jenny-btn");d&&d.addEventListener("click",()=>u.open());const f=document.getElementById("start-game-btn"),g=document.getElementById("start-game-modal"),v=document.getElementById("sgm-close-btn"),m=document.getElementById("sgm-launch-btn"),p=()=>g==null?void 0:g.classList.remove("hidden"),S=()=>g==null?void 0:g.classList.add("hidden");f==null||f.addEventListener("click",p),v==null||v.addEventListener("click",S),g==null||g.addEventListener("click",q=>{q.target===g&&S()}),m==null||m.addEventListener("click",()=>{t.clear(),r.renderChips(),r.renderWires(),S()}),r.renderChips(),r.renderWires();const E=document.getElementById("goal-banner");i.onGoalReached=()=>{E.classList.add("show"),setTimeout(()=>{E.classList.remove("show")},4e3)};const x=document.getElementById("split-container"),D=document.getElementById("splitter-handle"),R=document.getElementById("motherboard-pane");let C=!1;D.addEventListener("mousedown",q=>{q.preventDefault(),C=!0,D.classList.add("dragging"),document.body.style.cursor="col-resize"}),window.addEventListener("mousemove",q=>{if(!C)return;const K=x.getBoundingClientRect(),it=q.clientX-K.left,It=Math.max(25,Math.min(75,it/K.width*100));o.style.flex=`${It}`,R.style.flex=`${100-It}`,i.resize(),r.renderWires()}),window.addEventListener("mouseup",()=>{C&&(C=!1,D.classList.remove("dragging"),document.body.style.cursor="default",i.resize(),r.renderWires())}),window.addEventListener("resize",()=>{i.resize(),r.renderWires()}),document.getElementById("preset-selector").addEventListener("change",q=>{tt.init();const K=q.target.value;un[K]&&(un[K].load(t),r.renderChips(),r.renderWires(),tt.playRelayClick())});const _=document.getElementById("mode-live-btn"),y=document.getElementById("mode-bench-btn");_.addEventListener("click",()=>{t.isBenchMode=!1,document.body.classList.remove("bench-mode"),_.classList.add("active"),y.classList.remove("active"),tt.playRelayClick()}),y.addEventListener("click",()=>{t.isBenchMode=!0,document.body.classList.add("bench-mode"),y.classList.add("active"),_.classList.remove("active"),tt.playRelayClick()}),document.getElementById("reset-bot-btn").addEventListener("click",()=>{i.resetRobot(),tt.playRelayClick()});const L=document.getElementById("telemetry-bot"),I=document.getElementById("active-bot-tag");function k(){document.querySelectorAll(".fleet-tab").forEach(it=>{const It=it.dataset.bot,nt=i.robots.get(It);if(!nt)return;const ht=i.unlockedRobots.has(It),_t=It===i.activeRobotId;it.classList.toggle("active",_t),it.classList.toggle("locked",!ht);const At=it.querySelector(".fleet-status");At&&(_t?At.textContent="ACTIVE":ht?At.textContent="READY":At.textContent=`${nt.cost} CR`)});const K=i.robot;L&&K&&(L.textContent=`BOT: [${K.config.number}] ${K.name.toUpperCase()}`,L.style.color="#"+K.config.ringColor.toString(16).padStart(6,"0")),I&&K&&(I.textContent=`🧠 ${K.name.toUpperCase()} BRAIN`,I.style.borderColor="#"+K.config.accentColor.toString(16).padStart(6,"0"),I.style.color="#"+K.config.ringColor.toString(16).padStart(6,"0"))}function H(q){if(!i.unlockedRobots.has(q)){const K=i.robots.get(q);if(K&&i.credits>=K.cost){i.unlockRobot(q);const it=document.getElementById("goal-banner");it&&(it.textContent=`🎉 COMMISSIONED ${K.name.toUpperCase()} [${K.role.toUpperCase()}]!`,it.style.background="rgba(16, 185, 129, 0.25)",it.style.borderColor="#10b981",it.style.color="#10b981",it.classList.add("show"),setTimeout(()=>it.classList.remove("show"),3500))}else{tt.playAccessDenied();const it=document.getElementById("goal-banner");it&&(it.textContent=`🔒 REQUIRES ${K?K.cost:0} CREDITS TO COMMISSION ${K?K.name.toUpperCase():q}`,it.style.background="rgba(239, 68, 68, 0.25)",it.style.borderColor="#ef4444",it.style.color="#ef4444",it.classList.add("show"),setTimeout(()=>it.classList.remove("show"),2500));return}}i.selectRobot(q),t=n[q],a.engine=t,l.engine=t,r.setEngine(t),t.isBenchMode?(document.body.classList.add("bench-mode"),y.classList.add("active"),_.classList.remove("active")):(document.body.classList.remove("bench-mode"),_.classList.add("active"),y.classList.remove("active")),tt.playRelayClick(),k()}document.querySelectorAll(".fleet-tab").forEach(q=>{q.addEventListener("click",()=>{H(q.dataset.bot)})});const U=document.getElementById("fleet-sandbox-btn");U&&U.addEventListener("click",()=>{i.unlockAllRobots(),k();const q=document.getElementById("goal-banner");q&&(q.textContent="⚡ ALL 4 FLEET COMPANIONS DEPLOYED!",q.style.background="rgba(245, 158, 11, 0.25)",q.style.borderColor="#f59e0b",q.style.color="#fbbf24",q.classList.add("show"),setTimeout(()=>q.classList.remove("show"),3e3))}),k();const X=document.getElementById("elevator-action-btn");X&&X.addEventListener("click",()=>{i.toggleElevator()});const G=document.getElementById("elevator-bypass-btn");G&&G.addEventListener("click",()=>{i.grantTestCredits()});const at=document.getElementById("board-elevator-quick-btn");at&&at.addEventListener("click",()=>{i.boardElevator()});const dt=document.getElementById("radar-mount")||document.getElementById("world-viewport"),gt=new gm(dt,i);i.tacticalRadar=gt,document.querySelectorAll("#fleet-radar-toggle, #cam-radar-toggle").forEach(q=>{q.addEventListener("click",()=>{gt.toggle()})}),document.querySelectorAll(".elevator-floor-btn").forEach(q=>{q.addEventListener("click",()=>{const K=parseInt(q.dataset.floor,10);i.goToFloor(K)})});const Dt=document.getElementById("cam-floor-toggle");Dt&&Dt.addEventListener("click",()=>{i.toggleFloorView()});const qt=document.getElementById("cam-zoom-in");qt&&qt.addEventListener("click",()=>{tt.playRelayClick(),i.zoomIn()});const j=document.getElementById("cam-zoom-out");j&&j.addEventListener("click",()=>{tt.playRelayClick(),i.zoomOut()});const st=document.getElementById("cam-recenter");st&&st.addEventListener("click",()=>{tt.playRelayClick(),i.recenterCamera()}),document.getElementById("clear-board-btn").addEventListener("click",()=>{t.clear(),r.renderChips(),r.renderWires(),tt.playWireCut()});const ot=document.getElementById("sound-toggle-btn"),Ct=document.getElementById("sound-icon");ot.addEventListener("click",()=>{tt.init(),tt.isMuted=!tt.isMuted,Ct.textContent=tt.isMuted?"🔇":"🔊"}),document.querySelectorAll(".tray-chip-btn").forEach(q=>{q.addEventListener("click",()=>{tt.init();const K=q.dataset.type,it=r.chipsViewport||r.boardWrapper,It=it.clientWidth||700,nt=it.clientHeight||450,ht=Math.round((It/2-r.pan.x)/r.zoom-80+(Math.random()*40-20)),_t=Math.round((nt/2-r.pan.y)/r.zoom-60+(Math.random()*40-20));t.addChip(K,ht,_t)&&(tt.playChipDrop(),r.renderChips(),r.renderWires())})}),window.addEventListener("click",()=>{tt.init()},{once:!0});let Rt=!0,Nt=1,jt=!1;const Bt=document.getElementById("sim-play-pause-btn"),se=document.getElementById("sim-icon"),O=document.getElementById("sim-label"),me=document.getElementById("sim-step-btn"),Vt=document.getElementById("sim-speed-select");function Ft(){tt.init(),Rt=!Rt,Rt?(Bt.className="sim-btn sim-play-btn is-running",se.textContent="⏸",O.textContent="RUNNING",tt.playRelayClick()):(Bt.className="sim-btn sim-play-btn is-stopped",se.textContent="▶",O.textContent="PAUSED",tt.setThrusterActive(!1),tt.playRelayClick())}function Tt(){tt.init(),Rt&&Ft(),jt=!0,tt.playRelayClick()}Bt&&Bt.addEventListener("click",Ft),me&&me.addEventListener("click",Tt),Vt&&Vt.addEventListener("change",q=>{Nt=parseFloat(q.target.value)||1});const Lt={thrust_n:!1,thrust_s:!1,thrust_e:!1,thrust_w:!1,grabber:!1},yt={KeyW:"thrust_n",ArrowUp:"thrust_n",KeyS:"thrust_s",ArrowDown:"thrust_s",KeyD:"thrust_e",ArrowRight:"thrust_e",KeyA:"thrust_w",ArrowLeft:"thrust_w",KeyG:"grabber",KeyE:"grabber"};window.addEventListener("keydown",q=>{if(!(q.target.tagName==="INPUT"||q.target.tagName==="TEXTAREA")){if(q.code==="Space"){q.preventDefault(),Ft();return}else if(q.key==="."){Tt();return}else if(q.key==="+"||q.key==="="){i.zoomIn();return}else if(q.key==="-"||q.key==="_"){i.zoomOut();return}else if(q.code==="KeyC"||q.code==="Home"){i.recenterCamera();return}else if(q.code==="KeyF"){i.toggleElevator();return}else if(q.code==="KeyB"){i.boardElevator();return}else if(q.code==="KeyL"){i.toggleFloorView();return}else if(q.code==="KeyR"){gt.toggle();return}else if(q.code==="KeyP"){if(gt.visible){gt.triggerActivePing();return}}else if(q.code==="Digit1"){H("sparky");return}else if(q.code==="Digit2"){H("checkers");return}else if(q.code==="Digit3"){H("scanners");return}else if(q.code==="Digit4"){H("tank");return}if(yt[q.code]){tt.init(),Lt[yt[q.code]]=!0;const K=document.querySelector(`.dpad-btn[data-dir="${yt[q.code]}"]`);K&&K.classList.add("active")}}}),window.addEventListener("keyup",q=>{if(yt[q.code]){Lt[yt[q.code]]=!1;const K=document.querySelector(`.dpad-btn[data-dir="${yt[q.code]}"]`);K&&K.classList.remove("active")}}),document.querySelectorAll(".dpad-btn").forEach(q=>{const K=q.dataset.dir;q.addEventListener("mousedown",It=>{It.stopPropagation(),tt.init(),Lt[K]=!0,q.classList.add("active")});const it=()=>{Lt[K]=!1,q.classList.remove("active")};q.addEventListener("mouseup",it),q.addEventListener("mouseleave",it)});const A=document.getElementById("telemetry-pos"),b=document.getElementById("telemetry-vel"),z=document.getElementById("active-wires-count"),J=document.getElementById("active-chips-count");let et=performance.now();function Z(q){requestAnimationFrame(Z);const K=Math.min((q-et)/1e3,.1);if(et=q,!Rt&&!jt){i.update(0,{thrust_n:!1,thrust_s:!1,thrust_e:!1,thrust_w:!1,beacon_ping:t.actuators.beacon_ping,aux_light:t.actuators.aux_light,grabber:t.actuators.grabber||Lt.grabber}),gt.update(K),l.update();return}const it=(jt?.016:K)*Nt;jt=!1;const It=i.deployedRobots;let nt=null;for(const lt of It){const Wt=n[lt.id];if(!Wt)continue;Wt.updateSensors(lt.sensors);const Ut=Wt.tick({robot:lt.position,target:i.target,items:i.itemManager?i.itemManager.items:[],heldItem:lt.heldItem,refinery:i.itemManager?i.itemManager.terminals.find(te=>te.type==="refinery"):null,sensors:lt.sensors,obstacles:i.obstacles||[],bounds:i.bounds||null});lt.circuitActuators=Ut.actuators,lt.id===i.activeRobotId&&(nt=Ut)}const ht=Lt.thrust_n||Lt.thrust_s||Lt.thrust_e||Lt.thrust_w,_t=nt?nt.actuators:t.actuators,At=t.isBenchMode?{thrust_n:!1,thrust_s:!1,thrust_e:!1,thrust_w:!1,beacon_ping:!1,aux_light:_t.aux_light,grabber:_t.grabber}:{thrust_n:ht?Lt.thrust_n:_t.thrust_n,thrust_s:ht?Lt.thrust_s:_t.thrust_s,thrust_e:ht?Lt.thrust_e:_t.thrust_e,thrust_w:ht?Lt.thrust_w:_t.thrust_w,beacon_ping:_t.beacon_ping,aux_light:_t.aux_light,grabber:Lt.grabber||_t.grabber};if(i.update(it,At),gt.update(it),l.update(),r.updateVisualStates(),t.tickCounter%6===0){const lt=i.robot;lt&&(A.textContent=`POS: [${lt.position.x.toFixed(1)}, ${lt.position.z.toFixed(1)}]`,b.textContent=`VEL: ${lt.velocity.length().toFixed(2)} m/s`),z.textContent=`WIRES: ${t.wires.length}`,J.textContent=`CHIPS: ${t.chips.size}`,k()}}requestAnimationFrame(Z)});
