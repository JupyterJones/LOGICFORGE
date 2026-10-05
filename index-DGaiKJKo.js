(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Oe={AND:{type:"AND",name:"AND Gate",code:"7408",category:"logic",description:"Outputs 1 only when both Input A and Input B are 1.",width:140,height:100,inputs:[{id:"in_a",label:"A"},{id:"in_b",label:"B"}],outputs:[{id:"out",label:"OUT"}],init(n={}){return{...n}},evaluate(n,t){const e=n.in_a||!1,i=n.in_b||!1;return{outputs:{out:e&&i},state:t}}},OR:{type:"OR",name:"OR Gate",code:"7432",category:"logic",description:"Outputs 1 if either Input A or Input B (or both) are 1.",width:140,height:100,inputs:[{id:"in_a",label:"A"},{id:"in_b",label:"B"}],outputs:[{id:"out",label:"OUT"}],init(n={}){return{...n}},evaluate(n,t){const e=n.in_a||!1,i=n.in_b||!1;return{outputs:{out:e||i},state:t}}},NOT:{type:"NOT",name:"NOT Inverter",code:"7404",category:"logic",description:"Inverts the signal: outputs 1 when input is 0, and 0 when input is 1.",width:130,height:80,inputs:[{id:"in",label:"IN"}],outputs:[{id:"out",label:"OUT"}],init(n={}){return{...n}},evaluate(n,t){return{outputs:{out:!(n.in||!1)},state:t}}},XOR:{type:"XOR",name:"XOR Gate",code:"7486",category:"logic",description:"Exclusive OR: outputs 1 if inputs are different, 0 if identical.",width:140,height:100,inputs:[{id:"in_a",label:"A"},{id:"in_b",label:"B"}],outputs:[{id:"out",label:"OUT"}],init(n={}){return{...n}},evaluate(n,t){const e=!!n.in_a,i=!!n.in_b;return{outputs:{out:e!==i},state:t}}},NAND:{type:"NAND",name:"NAND Gate",code:"7400",category:"logic",description:"Universal Gate: outputs 0 only when both inputs are 1; outputs 1 otherwise.",width:140,height:100,inputs:[{id:"in_a",label:"A"},{id:"in_b",label:"B"}],outputs:[{id:"out",label:"OUT"}],init(n={}){return{...n}},evaluate(n,t){const e=!!n.in_a,i=!!n.in_b;return{outputs:{out:!(e&&i)},state:t}}},NOR:{type:"NOR",name:"NOR Gate",code:"7402",category:"logic",description:"Universal Gate: outputs 1 only when both inputs are 0; outputs 0 otherwise.",width:140,height:100,inputs:[{id:"in_a",label:"A"},{id:"in_b",label:"B"}],outputs:[{id:"out",label:"OUT"}],init(n={}){return{...n}},evaluate(n,t){const e=!!n.in_a,i=!!n.in_b;return{outputs:{out:!(e||i)},state:t}}},RS_LATCH:{type:"RS_LATCH",name:"RS Flip-Flop",code:"74279",category:"memory",description:"Memory Unit: Set pin memorizes 1. Reset pin clears to 0.",width:150,height:110,inputs:[{id:"set",label:"SET"},{id:"reset",label:"RESET"}],outputs:[{id:"q",label:"Q"},{id:"q_bar",label:"!Q"}],init(n={}){return{q:n.q||!1}},evaluate(n,t){let e=t.q||!1;return n.reset?e=!1:n.set&&(e=!0),{outputs:{q:e,q_bar:!e},state:{q:e}}}},TIMER_555:{type:"TIMER_555",name:"555 Timer",code:"NE555",category:"timing",description:"Precision 555 Timer IC. Generates accurate time delays, pulses (Monostable), and square-wave oscillations (Astable).",width:176,height:154,isTimer555:!0,inputs:[{id:"trig",label:"TRIG"},{id:"rst",label:"RST"},{id:"cv",label:"CV"}],outputs:[{id:"out",label:"OUT"},{id:"disch",label:"DIS"}],init(n={}){return{mode:n.mode||"ASTABLE",timeBase:n.timeBase||60,timeLabel:n.timeLabel||"1.0s",counter:0,active:!1,out:!1,lastTrig:!1,manualTrig:!1,...n}},evaluate(n,t,e={}){const i=t.mode||"ASTABLE",s=t.timeBase||60;let r=t.counter!==void 0?t.counter:0,a=!!t.active,o=!1;const l=!!n.rst,c=!!n.cv,h=!!n.trig,p=!t.lastTrig&&h||!!t.manualTrig,u=e.pass===void 0||e.pass===0;return l?(r=0,a=!1,o=!1):c?o=!1:i==="ASTABLE"?(p?r=0:u&&(r=(r+1)%s),o=r<s/2):(p&&(a=!0,r=s),a&&r>0?(o=!0,u&&(r--,r===0&&(a=!1))):(o=!1,a=!1)),{outputs:{out:o,disch:!o},state:{...t,mode:i,timeBase:s,timeLabel:t.timeLabel||"1.0s",counter:r,active:a,out:o,lastTrig:h,manualTrig:!1}}}},DELAY:{type:"DELAY",name:"Delay Buffer",code:"555-D",category:"timing",description:"Delays signal transmission by a short buffer duration.",width:140,height:90,inputs:[{id:"in",label:"IN"}],outputs:[{id:"out",label:"OUT"}],init(n={}){return{queue:[!1,!1,!1]}},evaluate(n,t){const e=t.queue?[...t.queue]:[!1,!1,!1],i=!!n.in;return e.push(i),{outputs:{out:e.shift()},state:{queue:e}}}},CORTEX_AI:{type:"CORTEX_AI",name:"CORTEX-1 Autopilot",code:"AI-01",category:"ai",description:"Autonomous Mining & Navigation Co-processor. Seeks ore, clamps pincers, hauls to the Refinery, and smelts for credits.",width:184,height:195,inputs:[{id:"enable",label:"EN"},{id:"override",label:"OVR"},{id:"item_in",label:"ITEM"},{id:"seek_mode",label:"SEEK"}],outputs:[{id:"dir_n",label:"NAV_N"},{id:"dir_s",label:"NAV_S"},{id:"dir_e",label:"NAV_E"},{id:"dir_w",label:"NAV_W"},{id:"grab",label:"GRAB"},{id:"status",label:"ACTIVE"}],init(n={}){return{stepTimer:0,stuckTicks:0,reverseTicks:0,bypassTicks:0,bypassAxis:null,inhibitDir:null,lastX:null,lastZ:null,...n}},evaluate(n,t,e={}){if(!!n.override)return{outputs:{dir_n:!1,dir_s:!1,dir_e:!1,dir_w:!1,grab:!1,status:!1},state:t};const s=e.robot||null,r=e.target||null,a=e.items||[],o=e.heldItem||null,l=e.refinery||null,c=e.sensors||{},h=o!==null||!!n.item_in,p=!!n.seek_mode;let u=r,f=!1,x=!1,v=(t.stepTimer||0)+1,m=t.stuckTicks||0,d=t.reverseTicks||0,S=t.bypassTicks||0,E=t.bypassAxis||null,_=t.inhibitDir||null,D=t.lastX!==void 0?t.lastX:s?s.x:null,R=t.lastZ!==void 0?t.lastZ:s?s.z:null;if(p)u=r;else if(h)if((s&&s.y!==void 0?s.y:.4)<-5)u={x:18,z:14},f=!0;else{const P=l?l.position:{x:-18,z:-12};if(u=P,f=!0,s){const U=s.x,q=s.z-1.35,B=Math.hypot(U-P.x,q-P.z),Y=Math.hypot(s.x-P.x,s.z-P.z);(B<3.2||Y<2.9)&&(x=!0,f=!1)}}else{const y=s&&s.y!==void 0?s.y:.4;let A=null,P=1/0;for(const U of a)if(U.type==="raw_ore"&&U.state==="grounded"){const q=U.position||U.mesh&&U.mesh.position;if(!q)continue;const B=q.y!==void 0?q.y:U.baseY!==void 0?U.baseY:.28;if(Math.abs(B-y)>2.5)continue;const Y=s?Math.hypot(s.x-q.x,s.z-q.z):10;Y<P&&(P=Y,A=q)}A?(u=A,(P<1.45||c.item_detect||n.item_in)&&(f=!0)):u=r}if(s&&D!==null&&R!==null&&v%15===0?(Math.hypot(s.x-D,s.z-R)<.08&&!x?(m+=15,m>=30&&(d=24,m=0,E==="dir_n"?E="dir_s":E==="dir_s"?E="dir_n":E==="dir_e"?E="dir_w":E==="dir_w"?E="dir_e":E=s.z>0?"dir_n":"dir_s",S=45)):m=0,D=s.x,R=s.z):s&&(D===null||R===null)&&(D=s.x,R=s.z),c.bumper_w){if(_="w",S<=0){const y=u?u.z:0,A=s?s.z:0;E=y<A-.2?"dir_n":y>A+.2?"dir_s":A>0?"dir_n":"dir_s",S=45}}else if(c.bumper_e){if(_="e",S<=0){const y=u?u.z:0,A=s?s.z:0;E=y<A-.2?"dir_n":y>A+.2?"dir_s":A>0?"dir_n":"dir_s",S=45}}else if(c.bumper_n){if(_="n",S<=0){const y=u?u.x:0,A=s?s.x:0;E=y<A-.2?"dir_w":y>A+.2?"dir_e":A>0?"dir_w":"dir_e",S=45}}else if(c.bumper_s){if(_="s",S<=0){const y=u?u.x:0,A=s?s.x:0;E=y<A-.2?"dir_w":y>A+.2?"dir_e":A>0?"dir_w":"dir_e",S=45}}else S<=0&&(_=null);let L=!1,I=!1,b=!1,g=!1;if(x)L=I=b=g=!1;else if(d>0)d--,_==="w"?b=!0:_==="e"?g=!0:_==="n"?I=!0:_==="s"?L=!0:I=!0;else if(S>0)S--,E==="dir_n"?L=!0:E==="dir_s"?I=!0:E==="dir_e"?b=!0:E==="dir_w"&&(g=!0),_==="w"&&(g=!1),_==="e"&&(b=!1),_==="n"&&(L=!1),_==="s"&&(I=!1);else if(s&&u){const y=u.x-s.x,A=u.z-s.z,P=Math.abs(y),U=Math.abs(A);P>.5&&(y>0&&_!=="e"?b=!0:y<0&&_!=="w"&&(g=!0)),U>.5&&(A>0&&_!=="s"?I=!0:A<0&&_!=="n"&&(L=!0)),!b&&!g&&!L&&!I&&(P>.2&&(y>0&&_!=="e"?b=!0:y<0&&_!=="w"&&(g=!0)),U>.2&&(A>0&&_!=="s"?I=!0:A<0&&_!=="n"&&(L=!0)))}return{outputs:{dir_n:L,dir_s:I,dir_e:b,dir_w:g,grab:f,status:!0},state:{stepTimer:v,stuckTicks:m,reverseTicks:d,bypassTicks:S,bypassAxis:E,inhibitDir:_,lastX:D,lastZ:R}}}},COUNTER_7SEG:{type:"COUNTER_7SEG",name:"7-Seg Counter",code:"74160-LED",category:"counter",description:"Emerald LED Counter with DEC (0-9) / HEX (0-F) mode toggle. Increments on CLK rising edge.",width:176,height:154,hasDisplay:!0,inputs:[{id:"clk",label:"CLK"},{id:"rst",label:"RST"},{id:"en",label:"EN"}],outputs:[{id:"q0",label:"Q0"},{id:"q1",label:"Q1"},{id:"q2",label:"Q2"},{id:"q3",label:"Q3"},{id:"carry",label:"TC"}],init(n={}){return{count:n.count||0,mode:n.mode||"DEC",lastClk:!1,carry:!1,...n}},evaluate(n,t){let e=t.count||0;const i=t.mode||"DEC",s=i==="HEX"?15:9,r=!!n.clk,a=!!n.rst,o=n.en===void 0?!0:!!n.en;let l=!1;return a?e=0:!t.lastClk&&r&&o&&(e>=s?(e=0,l=!0):e++),e>s&&(e=0),{outputs:{q0:(e&1)!==0,q1:(e&2)!==0,q2:(e&4)!==0,q3:(e&8)!==0,carry:l},state:{...t,count:e,mode:i,carry:l,lastClk:r}}}},STEPPER:{type:"STEPPER",name:"Step Sequencer",code:"4017-SEQ",category:"stepper",description:"4-Step Ring Sequencer. Advances 1-hot active output (S1 -> S2 -> S3 -> S4) on each CLK rising edge. RST returns to Step 1. Ideal for autonomous patrol loops.",width:176,height:154,isStepper:!0,inputs:[{id:"clk",label:"CLK"},{id:"rst",label:"RST"},{id:"dir",label:"DIR"},{id:"inh",label:"INH"}],outputs:[{id:"s1",label:"S1"},{id:"s2",label:"S2"},{id:"s3",label:"S3"},{id:"s4",label:"S4"},{id:"cycle",label:"CYC"}],init(n={}){return{step:n.step!==void 0?n.step:0,maxSteps:n.maxSteps||4,lastClk:!1,cycle:!1,manualStepTrigger:!1,...n}},evaluate(n,t){let e=t.step!==void 0?t.step:0;const i=t.maxSteps||4,s=!!n.clk,r=!!n.rst,a=!!n.dir,o=!!n.inh;let l=!1;return r?e=0:!t.lastClk&&s&&(o||(a?e<=0?(e=i-1,l=!0):e--:e>=i-1?(e=0,l=!0):e++)),t.manualStepTrigger&&(a?e=(e-1+i)%i:e=(e+1)%i,t.manualStepTrigger=!1),e>=i&&(e=0),{outputs:{s1:e===0,s2:e===1,s3:e===2,s4:e===3,cycle:l},state:{...t,step:e,maxSteps:i,cycle:l,lastClk:s}}}},BUS_2CH:{type:"BUS_2CH",name:"2-Ch Terminal Strip",code:"TB-2CH",category:"bus",description:"2-Channel Jumpered Terminal Strip. Distributes 1 input signal to 2 parallel outputs (1-to-2 Splitter Block).",width:172,height:122,channels:2,isTerminalStrip:!0,inputs:[{id:"in",label:"IN"}],outputs:[{id:"out_0",label:"OUT 1"},{id:"out_1",label:"OUT 2"}],evaluate(n){const t=!!(n.in||n.in_0);return{outputs:{out_0:t,out_1:t}}}},BUS_3CH:{type:"BUS_3CH",name:"3-Ch Terminal Strip",code:"TB-3CH",category:"bus",description:"3-Channel Jumpered Terminal Strip. Distributes 1 input signal to 3 parallel outputs (1-to-3 Splitter Block).",width:172,height:144,channels:3,isTerminalStrip:!0,inputs:[{id:"in",label:"IN"}],outputs:[{id:"out_0",label:"OUT 1"},{id:"out_1",label:"OUT 2"},{id:"out_2",label:"OUT 3"}],evaluate(n){const t=!!(n.in||n.in_0);return{outputs:{out_0:t,out_1:t,out_2:t}}}},BUS_4CH:{type:"BUS_4CH",name:"4-Ch Terminal Strip",code:"TB-4CH",category:"bus",description:"4-Channel Jumpered Terminal Strip. Distributes 1 input signal to 4 parallel outputs (1-to-4 Splitter Block).",width:172,height:166,channels:4,isTerminalStrip:!0,inputs:[{id:"in",label:"IN"}],outputs:[{id:"out_0",label:"OUT 1"},{id:"out_1",label:"OUT 2"},{id:"out_2",label:"OUT 3"},{id:"out_3",label:"OUT 4"}],evaluate(n){const t=!!(n.in||n.in_0);return{outputs:{out_0:t,out_1:t,out_2:t,out_3:t}}}},WAYPOINT_MEM:{type:"WAYPOINT_MEM",name:"Waypoint Register",code:"74374-MEM",category:"memory",description:"Waypoint Memory Register & Navigator. Latches coordinates on STORE pulse. Outputs directional vectors (NAV N/S/E/W) and MATCH signal when returned.",width:184,height:168,isWaypointMem:!0,inputs:[{id:"store",label:"STORE"},{id:"clr",label:"CLR"},{id:"en",label:"EN"}],outputs:[{id:"match",label:"MATCH"},{id:"latch",label:"HELD"},{id:"nav_n",label:"NAV_N"},{id:"nav_s",label:"NAV_S"},{id:"nav_e",label:"NAV_E"},{id:"nav_w",label:"NAV_W"}],init(n={}){return{...n,target:n&&n.target?{...n.target}:null,lastStore:!!(n&&n.lastStore)}},evaluate(n,t,e={}){var f,x;let i=t.target?{...t.target}:null;const s=!!n.store,r=!!n.clr,a=e.connectedInputs&&e.connectedInputs.en!==void 0?e.connectedInputs.en?!!n.en:!0:n.en===void 0?!0:!!n.en,o=e.robot||typeof window<"u"&&((x=(f=window.worldScene)==null?void 0:f.robot)==null?void 0:x.position);r?i=null:!t.lastStore&&s&&o&&(i={x:Math.round(o.x*10)/10,z:Math.round(o.z*10)/10});let l=!1,c=!1,h=!1,p=!1,u=!1;if(i&&o){const v=i.x-o.x,m=i.z-o.z;Math.hypot(v,m)<1.6?l=!0:a&&(m<-1&&(c=!0),m>1&&(h=!0),v>1&&(p=!0),v<-1&&(u=!0))}return{outputs:{match:l,latch:i!==null,nav_n:c,nav_s:h,nav_e:p,nav_w:u},state:{...t,target:i,lastStore:s}}}},SHIFT_REG:{type:"SHIFT_REG",name:"Shift Register",code:"74194-SR",category:"register",description:"4-Bit Bidirectional Shift Register. Shifts serial data in on each CLK rising edge with parallel outputs (Q0..Q3) and Serial Out (SER).",width:186,height:156,isShiftReg:!0,inputs:[{id:"clk",label:"CLK"},{id:"data",label:"DATA"},{id:"rst",label:"RST"},{id:"dir",label:"DIR"},{id:"inh",label:"INH"}],outputs:[{id:"q0",label:"Q0"},{id:"q1",label:"Q1"},{id:"q2",label:"Q2"},{id:"q3",label:"Q3"},{id:"s_out",label:"SER"}],init(n={}){return{bits:n.bits?[...n.bits]:[0,0,0,0],dir:n.dir||"RIGHT",injectBit:n.injectBit!==void 0?!!n.injectBit:!0,manualClkTrigger:!1,lastClk:!1,serOut:!1,...n}},evaluate(n,t,e={}){let i=t.bits?[...t.bits]:[0,0,0,0];const s=n.dir!==void 0&&n.dir?"LEFT":t.dir||"RIGHT",r=!!n.rst,a=!!n.inh,o=!!n.clk,l=!!t.manualClkTrigger,c=!t.lastClk&&o||l,p=(e.connectedInputs?!!e.connectedInputs.data:!1)?!!n.data:!!t.injectBit;let u=!!t.serOut;return r?(i=[0,0,0,0],u=!1):c&&!a&&(s==="RIGHT"?(u=i[3]===1,i[3]=i[2],i[2]=i[1],i[1]=i[0],i[0]=p?1:0):(u=i[0]===1,i[0]=i[1],i[1]=i[2],i[2]=i[3],i[3]=p?1:0)),{outputs:{q0:i[0]===1,q1:i[1]===1,q2:i[2]===1,q3:i[3]===1,s_out:u},state:{...t,bits:i,dir:t.dir||"RIGHT",injectBit:t.injectBit!==void 0?!!t.injectBit:!0,manualClkTrigger:!1,lastClk:o,serOut:u}}}},NPN:{type:"NPN",name:"NPN Transistor",code:"2N3904",category:"discretes",description:"Silicon NPN Bipolar Junction Transistor. Positive voltage on Base (B) conducts current from Collector (C) to Emitter (E).",width:152,height:105,isDiscrete:!0,isNPN:!0,inputs:[{id:"c",label:"C"},{id:"b",label:"B"}],outputs:[{id:"e",label:"E"}],init(n={}){return{active:!1,...n}},evaluate(n,t,e={}){const i=!!n.b,r=(e.connectedInputs?!!e.connectedInputs.c:n.c!==void 0)?!!n.c:!0,a=i&&r;return{outputs:{e:a},state:{...t,active:a}}}},PNP:{type:"PNP",name:"PNP Transistor",code:"2N3906",category:"discretes",description:"Silicon PNP Bipolar Junction Transistor. Inverted logic: Ground/Low voltage on Base (B) conducts current from Emitter (E) to Collector (C).",width:152,height:105,isDiscrete:!0,isPNP:!0,inputs:[{id:"e",label:"E"},{id:"b",label:"B"}],outputs:[{id:"c",label:"C"}],init(n={}){return{active:!1,...n}},evaluate(n,t,e={}){const i=!!n.b,r=(e.connectedInputs?!!e.connectedInputs.e:n.e!==void 0)?!!n.e:!0,a=!i&&r;return{outputs:{c:a},state:{...t,active:a}}}},POTENTIOMETER:{type:"POTENTIOMETER",name:"10K Potentiometer",code:"TRIM-10K",category:"discretes",description:"Adjustable trimmer potentiometer. Turn the brass dial to scale signal duty-cycle and timing pulses.",width:148,height:115,isDiscrete:!0,isPot:!0,inputs:[{id:"in",label:"IN"}],outputs:[{id:"wiper",label:"WIPER"}],init(n={}){return{dial:n.dial!==void 0?n.dial:.5,stepCount:0,freq:680,...n}},evaluate(n,t,e={}){const s=(e.connectedInputs?!!e.connectedInputs.in:n.in!==void 0)?!!n.in:!0,r=t.dial!==void 0?t.dial:.5,a=(t.stepCount||0)+1;let o=!1;if(s)if(r>=.95)o=!0;else if(r<=.05)o=!1;else{const p=Math.max(2,Math.round(12*(1.05-r)));o=a%p<Math.max(1,Math.round(p*r))}const l=[180,240,320,440,560,680,800,960,1120,1320,1600],c=Math.min(l.length-1,Math.max(0,Math.floor(r*l.length))),h=l[c];return{outputs:{wiper:o},state:{...t,dial:r,stepCount:a,wiper:o,freq:h}}}},CAPACITOR:{type:"CAPACITOR",name:"10µF Capacitor",code:"E-CAP-10uF",category:"discretes",description:"Electrolytic timing and filter capacitor. Stores charge to absorb noise spikes and generate analog delay.",width:140,height:110,isDiscrete:!0,isCap:!0,inputs:[{id:"in",label:"+"}],outputs:[{id:"out",label:"-"}],init(n={}){return{charge:n.charge!==void 0?n.charge:0,...n}},evaluate(n,t){const e=!!n.in;let i=t.charge!==void 0?t.charge:0;e?i=Math.min(100,i+25):i=Math.max(0,i-14);const s=i>=40;return{outputs:{out:s},state:{...t,charge:i,out:s}}}},PIEZO_BUZZER:{type:"PIEZO_BUZZER",name:"Piezo Speaker",code:"SPK-8OHM",category:"discretes",description:"Acoustic audio transducer. Converts pulses, 555 clocks, and transistor oscillations into retro synth sound!",width:148,height:115,isDiscrete:!0,isSpeaker:!0,inputs:[{id:"sig",label:"SIG"}],outputs:[{id:"thru",label:"THRU"}],init(n={}){return{active:!1,pulseCount:0,freq:480,...n}},evaluate(n,t){const e=!!n.sig,i=(t.pulseCount||0)+(e?1:0);return{outputs:{thru:e},state:{...t,active:e,pulseCount:i}}}},POWER:{type:"POWER",name:"VCC Power",code:"PWR-5V",category:"discretes",description:"DC Power Rail (+5V VCC). Supplies continuous positive voltage (+5V) to energize circuits, pull-up resistors, and logic inputs. Click button to manually toggle power.",width:144,height:108,isDiscrete:!0,isPower:!0,inputs:[{id:"en",label:"EN"}],outputs:[{id:"vcc",label:"+5V"},{id:"vcc2",label:"+5V"}],init(n={}){return{enabled:n.enabled!==void 0?!!n.enabled:!0,voltage:5,...n}},evaluate(n,t,e={}){const s=(e.connectedInputs?!!e.connectedInputs.en:n.en!==void 0)?!!n.en:t.enabled!==void 0?!!t.enabled:!0;return{outputs:{vcc:s,vcc2:s},state:{...t,isLive:s,voltage:s?5:0}}}},GROUND:{type:"GROUND",name:"Ground (GND)",code:"GND-0V",category:"discretes",description:"Common Ground Reference (0V GND). Sinks current and provides zero-volt logic LOW reference for PNP bases, active-low resets, and circuit commons.",width:144,height:108,isDiscrete:!0,isGround:!0,inputs:[{id:"sink",label:"IN"}],outputs:[{id:"gnd",label:"GND"},{id:"gnd2",label:"GND"}],init(n={}){return{active:!0,voltage:0,...n}},evaluate(n,t){return{outputs:{gnd:!1,gnd2:!1},state:{...t,hasSink:!!n.sink}}}},LED:{type:"LED",name:"LED Indicator",code:"LED-5MM",category:"discretes",description:"5mm High-Brightness LED. Illuminates with radiant glow when forward-biased (Anode HIGH, Cathode LOW/GND). Click color pill to toggle LED color.",width:148,height:115,isDiscrete:!0,isLED:!0,inputs:[{id:"anode",label:"A"},{id:"cathode",label:"K"}],outputs:[{id:"thru",label:"THRU"}],init(n={}){return{lit:!1,color:n.color||"green",...n}},evaluate(n,t,e={}){const i=!!n.anode,r=(e.connectedInputs?!!e.connectedInputs.cathode:n.cathode!==void 0)?!!n.cathode:!1,a=i&&!r;return{outputs:{thru:a},state:{...t,lit:a}}}},RESISTOR_220:{type:"RESISTOR_220",name:"220Ω Resistor",code:"R-220",category:"discretes",description:"220 Ohm Carbon Film Resistor (Red-Red-Brown-Gold). Standard current-limiting resistor for 5V LED circuits. Click button to toggle between 220Ω and 330Ω.",width:148,height:105,isDiscrete:!0,isResistor:!0,defaultOhms:220,inputs:[{id:"in",label:"IN"}],outputs:[{id:"out",label:"OUT"}],init(n={}){return{ohms:n.ohms||220,active:!1,...n}},evaluate(n,t){const e=!!n.in;return{outputs:{out:e},state:{...t,active:e}}}},RESISTOR_330:{type:"RESISTOR_330",name:"330Ω Resistor",code:"R-330",category:"discretes",description:"330 Ohm Carbon Film Resistor (Orange-Orange-Brown-Gold). High-efficiency LED resistor and digital pull-down bias. Click button to toggle between 330Ω and 220Ω.",width:148,height:105,isDiscrete:!0,isResistor:!0,defaultOhms:330,inputs:[{id:"in",label:"IN"}],outputs:[{id:"out",label:"OUT"}],init(n={}){return{ohms:n.ohms||330,active:!1,...n}},evaluate(n,t){const e=!!n.in;return{outputs:{out:e},state:{...t,active:e}}}}};class ls{constructor(){this.chips=new Map,this.wires=[],this.sensors={bumper_n:!1,bumper_s:!1,bumper_e:!1,bumper_w:!1,radar_ping:!1,clock_tick:!1,item_detect:!1,energy_low:!1,energy_dock:!1},this.testInjectors={bumper_n:!1,bumper_s:!1,bumper_e:!1,bumper_w:!1,radar_ping:!1,clock_tick:!1,item_detect:!1,energy_low:!1,energy_dock:!1},this.actuators={thrust_n:!1,thrust_s:!1,thrust_e:!1,thrust_w:!1,beacon_ping:!1,aux_light:!1,grabber:!1},this.isBenchMode=!1,this.tickCounter=0,this.nextChipId=1,this.nextWireId=1}addChip(t,e=200,i=150){const s=Oe[t];if(!s)return null;const r=`chip_${this.nextChipId++}`,a={};s.inputs.forEach(c=>a[c.id]=!1);const o={};s.outputs.forEach(c=>o[c.id]=!1);const l={id:r,type:t,name:s.name,code:s.code,x:e,y:i,width:s.width,height:s.height,inputs:a,outputs:o,state:s.init?s.init():{}};return this.chips.set(r,l),l}removeChip(t){this.wires=this.wires.filter(e=>!(e.from.type==="chip"&&e.from.id===t)&&!(e.to.type==="chip"&&e.to.id===t)),this.chips.delete(t)}addWire(t,e){if(this.wires.some(r=>r.from.type===t.type&&r.from.id===t.id&&r.from.pin===t.pin&&r.to.type===e.type&&r.to.id===e.id&&r.to.pin===e.pin))return null;const s={id:`wire_${this.nextWireId++}`,from:{...t},to:{...e},active:!1};return this.wires.push(s),s}removeWire(t){this.wires=this.wires.filter(e=>e.id!==t)}clear(){this.chips.clear(),this.wires=[],this.resetOutputs()}resetOutputs(){Object.keys(this.actuators).forEach(t=>this.actuators[t]=!1)}updateSensors(t){this.isBenchMode?Object.assign(this.sensors,this.testInjectors):Object.assign(this.sensors,t)}getPinValue(t){if(t.type==="sensor")return!!this.sensors[t.pin];if(t.type==="chip"){const e=this.chips.get(t.id);return e?!!e.outputs[t.pin]:!1}return!1}tick(t={}){this.tickCounter++,this.tickCounter%30===0&&(this.sensors.clock_tick=!this.sensors.clock_tick);for(let e=0;e<4;e++){for(const i of this.chips.values()){const s=Oe[i.type];s&&(i.connectedInputs=i.connectedInputs||{},s.inputs.forEach(r=>{i.inputs[r.id]=!1,i.connectedInputs[r.id]=!1}))}this.resetOutputs();for(const i of this.wires){const s=this.getPinValue(i.from);if(i.active=s,i.to.type==="actuator")s&&(this.actuators[i.to.pin]=!0);else if(i.to.type==="chip"){const r=this.chips.get(i.to.id);r&&(r.connectedInputs&&(r.connectedInputs[i.to.pin]=!0),s&&(r.inputs[i.to.pin]=!0))}}for(const i of this.chips.values()){const s=Oe[i.type];if(s){const r={...t,pass:e,tick:this.tickCounter,connectedInputs:i.connectedInputs},a=s.evaluate(i.inputs,i.state,r);i.outputs=a.outputs,a.state&&(i.state=a.state)}}}this.resetOutputs();for(const e of this.wires){const i=this.getPinValue(e.from);e.active=i,e.to.type==="actuator"&&i&&(this.actuators[e.to.pin]=!0)}return{actuators:{...this.actuators},sensors:{...this.sensors}}}}class Dl{constructor(){this.ctx=null,this.thrusterNode=null,this.thrusterGain=null,this.isMuted=!1}init(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.setupThrusterLoop()}this.ctx.state==="suspended"&&this.ctx.resume()}setupThrusterLoop(){if(!this.ctx)return;const t=this.ctx.sampleRate*2,e=this.ctx.createBuffer(1,t,this.ctx.sampleRate),i=e.getChannelData(0);let s=0;for(let o=0;o<t;o++){const l=Math.random()*2-1;i[o]=(s+.02*l)/1.02,s=i[o],i[o]*=3.5}const r=this.ctx.createBufferSource();r.buffer=e,r.loop=!0;const a=this.ctx.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(320,this.ctx.currentTime),this.thrusterGain=this.ctx.createGain(),this.thrusterGain.gain.setValueAtTime(0,this.ctx.currentTime),r.connect(a),a.connect(this.thrusterGain),this.thrusterGain.connect(this.ctx.destination),r.start()}setThrusterActive(t){if(!this.ctx||!this.thrusterGain||this.isMuted)return;const e=t?.12:0;this.thrusterGain.gain.setTargetAtTime(e,this.ctx.currentTime,.08)}playWirePlug(){if(!this.ctx||this.isMuted)return;const t=this.ctx.createOscillator(),e=this.ctx.createGain();t.type="sine";const i=this.ctx.currentTime;t.frequency.setValueAtTime(440,i),t.frequency.exponentialRampToValueAtTime(880,i+.06),e.gain.setValueAtTime(.2,i),e.gain.exponentialRampToValueAtTime(.001,i+.07),t.connect(e),e.connect(this.ctx.destination),t.start(i),t.stop(i+.08)}playWireCut(){if(!this.ctx||this.isMuted)return;const t=this.ctx.createOscillator(),e=this.ctx.createGain();t.type="sawtooth";const i=this.ctx.currentTime;t.frequency.setValueAtTime(600,i),t.frequency.exponentialRampToValueAtTime(200,i+.07),e.gain.setValueAtTime(.15,i),e.gain.exponentialRampToValueAtTime(.001,i+.08),t.connect(e),e.connect(this.ctx.destination),t.start(i),t.stop(i+.09)}playRelayClick(){if(!this.ctx||this.isMuted)return;const t=this.ctx.createOscillator(),e=this.ctx.createGain();t.type="triangle";const i=this.ctx.currentTime;t.frequency.setValueAtTime(1200,i),t.frequency.exponentialRampToValueAtTime(120,i+.02),e.gain.setValueAtTime(.18,i),e.gain.exponentialRampToValueAtTime(.001,i+.03),t.connect(e),e.connect(this.ctx.destination),t.start(i),t.stop(i+.04)}playBumperHit(){if(!this.ctx||this.isMuted)return;const t=this.ctx.createOscillator(),e=this.ctx.createGain();t.type="square";const i=this.ctx.currentTime;t.frequency.setValueAtTime(160,i),t.frequency.exponentialRampToValueAtTime(40,i+.12),e.gain.setValueAtTime(.25,i),e.gain.exponentialRampToValueAtTime(.001,i+.13),t.connect(e),e.connect(this.ctx.destination),t.start(i),t.stop(i+.14)}playChipDrop(){if(!this.ctx||this.isMuted)return;const t=this.ctx.createOscillator(),e=this.ctx.createGain();t.type="sine";const i=this.ctx.currentTime;t.frequency.setValueAtTime(320,i),t.frequency.exponentialRampToValueAtTime(640,i+.04),e.gain.setValueAtTime(.12,i),e.gain.exponentialRampToValueAtTime(.001,i+.05),t.connect(e),e.connect(this.ctx.destination),t.start(i),t.stop(i+.06)}playGoalChime(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime;[523.25,659.25,783.99,1046.5].forEach((i,s)=>{const r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type="sine",r.frequency.setValueAtTime(i,t+s*.08),a.gain.setValueAtTime(.18,t+s*.08),a.gain.exponentialRampToValueAtTime(.001,t+s*.08+.45),r.connect(a),a.connect(this.ctx.destination),r.start(t+s*.08),r.stop(t+s*.08+.5)})}playGrab(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(800,t),e.frequency.exponentialRampToValueAtTime(140,t+.04),i.gain.setValueAtTime(.28,t),i.gain.exponentialRampToValueAtTime(.001,t+.05),e.connect(i),i.connect(this.ctx.destination),e.start(t),e.stop(t+.06);const s=this.ctx.createOscillator(),r=this.ctx.createGain();s.type="square",s.frequency.setValueAtTime(220,t+.02),s.frequency.exponentialRampToValueAtTime(60,t+.08),r.gain.setValueAtTime(.2,t+.02),r.gain.exponentialRampToValueAtTime(.001,t+.09),s.connect(r),r.connect(this.ctx.destination),s.start(t+.02),s.stop(t+.1)}playRelease(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(350,t),e.frequency.exponentialRampToValueAtTime(700,t+.05),i.gain.setValueAtTime(.12,t),i.gain.exponentialRampToValueAtTime(.001,t+.06),e.connect(i),i.connect(this.ctx.destination),e.start(t),e.stop(t+.07)}playSocketDock(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(90,t),e.frequency.exponentialRampToValueAtTime(30,t+.3),i.gain.setValueAtTime(.4,t),i.gain.exponentialRampToValueAtTime(.001,t+.35),e.connect(i),i.connect(this.ctx.destination),e.start(t),e.stop(t+.36),[440,554.37,659.25,880,1108.73].forEach((r,a)=>{const o=this.ctx.createOscillator(),l=this.ctx.createGain();o.type="triangle",o.frequency.setValueAtTime(r,t+a*.06),l.gain.setValueAtTime(.16,t+a*.06),l.gain.exponentialRampToValueAtTime(.001,t+a*.06+.4),o.connect(l),l.connect(this.ctx.destination),o.start(t+a*.06),o.stop(t+a*.06+.42)})}playWinchMove(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(65,t),e.frequency.linearRampToValueAtTime(85,t+.3),i.gain.setValueAtTime(.18,t),i.gain.exponentialRampToValueAtTime(.001,t+.35),e.connect(i),i.connect(this.ctx.destination),e.start(t),e.stop(t+.36);const s=this.ctx.createOscillator(),r=this.ctx.createGain();s.type="sine",s.frequency.setValueAtTime(540,t),s.frequency.linearRampToValueAtTime(420,t+.25),r.gain.setValueAtTime(.06,t),r.gain.exponentialRampToValueAtTime(.001,t+.3),s.connect(r),r.connect(this.ctx.destination),s.start(t),s.stop(t+.32)}playElevatorArrive(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(140,t),e.frequency.exponentialRampToValueAtTime(35,t+.25),i.gain.setValueAtTime(.35,t),i.gain.exponentialRampToValueAtTime(.001,t+.3),e.connect(i),i.connect(this.ctx.destination),e.start(t),e.stop(t+.32),[783.99,1046.5].forEach((s,r)=>{const a=this.ctx.createOscillator(),o=this.ctx.createGain();a.type="sine",a.frequency.setValueAtTime(s,t+r*.12),o.gain.setValueAtTime(.18,t+r*.12),o.gain.exponentialRampToValueAtTime(.001,t+r*.12+.5),a.connect(o),o.connect(this.ctx.destination),a.start(t+r*.12),a.stop(t+r*.12+.52)})}playAccessDenied(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime;[130,125].forEach(e=>{const i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="sawtooth",i.frequency.setValueAtTime(e,t),s.gain.setValueAtTime(.15,t),s.gain.exponentialRampToValueAtTime(.001,t+.22),i.connect(s),s.connect(this.ctx.destination),i.start(t),i.stop(t+.24)})}playPowerUnlock(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime;[220,330,440,660,880,1320].forEach((i,s)=>{const r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type="sine",r.frequency.setValueAtTime(i,t+s*.05),a.gain.setValueAtTime(.14,t+s*.05),a.gain.exponentialRampToValueAtTime(.001,t+s*.05+.35),r.connect(a),a.connect(this.ctx.destination),r.start(t+s*.05),r.stop(t+s*.05+.38)})}playBuzzerPulse(t=480){if(this.isMuted)return;if(!this.ctx)try{this.init()}catch{}if(this.ctx&&this.ctx.state==="suspended")try{this.ctx.resume()}catch{}if(!this.ctx)return;const e=this.ctx.currentTime;if(this._lastBuzzerTime&&e-this._lastBuzzerTime<.035)return;this._lastBuzzerTime=e;const i=this.ctx.createOscillator(),s=this.ctx.createOscillator();this.ctx.createGain(),i.type="square",i.frequency.setValueAtTime(t,e),s.type="triangle",s.frequency.setValueAtTime(t*.5,e);const r=this.ctx.createGain();r.gain.setValueAtTime(.12,e),r.gain.exponentialRampToValueAtTime(.001,e+.055),i.connect(r),s.connect(r),r.connect(this.ctx.destination),i.start(e),s.start(e),i.stop(e+.06),s.stop(e+.06)}playRadarPing(t=1400){if(this.isMuted)return;if(!this.ctx)try{this.init()}catch{}if(this.ctx&&this.ctx.state==="suspended")try{this.ctx.resume()}catch{}if(!this.ctx)return;const e=this.ctx.currentTime;if(this._lastRadarPing&&e-this._lastRadarPing<.12)return;this._lastRadarPing=e;const i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(t,e),i.frequency.exponentialRampToValueAtTime(t*.72,e+.18),s.gain.setValueAtTime(.16,e),s.gain.exponentialRampToValueAtTime(.001,e+.22),i.connect(s),s.connect(this.ctx.destination),i.start(e),i.stop(e+.23)}playGlitchStatic(){if(this.isMuted)return;if(!this.ctx)try{this.init()}catch{}if(this.ctx&&this.ctx.state==="suspended")try{this.ctx.resume()}catch{}if(!this.ctx)return;const t=this.ctx.currentTime;if(!(this._lastGlitchStatic&&t-this._lastGlitchStatic<.2)){this._lastGlitchStatic=t;try{const e=Math.floor(this.ctx.sampleRate*.18),i=this.ctx.createBuffer(1,e,this.ctx.sampleRate),s=i.getChannelData(0);for(let l=0;l<e;l++)s[l]=(Math.random()*2-1)*.9;const r=this.ctx.createBufferSource();r.buffer=i;const a=this.ctx.createBiquadFilter();a.type="bandpass",a.frequency.setValueAtTime(850,t),a.Q.setValueAtTime(2.5,t);const o=this.ctx.createGain();o.gain.setValueAtTime(.22,t),o.gain.exponentialRampToValueAtTime(.005,t+.17),r.connect(a),a.connect(o),o.connect(this.ctx.destination),r.start(t)}catch{}}}}const K=new Dl,Nl={AND:{title:"7408 Quad 2-Input AND Gate",siliconType:"TTL Transistor-Transistor Logic",description:"An AND gate acts like two electronic switches connected in series. Current only reaches the output pin when switch A AND switch B are closed.",truthTable:[{a:0,b:0,out:0},{a:0,b:1,out:0},{a:1,b:0,out:0},{a:1,b:1,out:1}],svgDiagram:`
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
    `,didYouKnow:"Nick Holonyak Jr. invented the first practical visible-spectrum LED in 1962 while working at General Electric, predicting that LEDs would one day replace incandescent bulbs."}};class Ol{constructor(){this.modal=document.createElement("div"),this.modal.className="chip-inspector-modal",this.modal.innerHTML=`
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
    `,document.body.appendChild(this.modal),this.modal.querySelector(".inspector-backdrop").addEventListener("click",()=>this.hide()),this.modal.querySelector("#inspector-close").addEventListener("click",()=>this.hide())}show(t){const e=Nl[t];if(!e)return;this.modal.querySelector("#inspector-chip-title").textContent=e.title,this.modal.querySelector("#inspector-desc").textContent=e.description,this.modal.querySelector("#inspector-diagram").innerHTML=e.svgDiagram,this.modal.querySelector("#inspector-fact").textContent=e.didYouKnow;const i=this.modal.querySelector("#inspector-table");if(i.innerHTML="",e.truthTable&&e.truthTable.length>0){const s=e.truthTable[0].b===void 0,r=document.createElement("thead");r.innerHTML=s?"<tr><th>IN</th><th>OUT</th></tr>":"<tr><th>INPUT A</th><th>INPUT B</th><th>OUTPUT</th></tr>",i.appendChild(r);const a=document.createElement("tbody");e.truthTable.forEach(o=>{const l=document.createElement("tr");s?l.innerHTML=`<td>${o.a}</td><td class="out-cell ${o.out?"val-high":"val-low"}">${o.out}</td>`:l.innerHTML=`<td>${o.a}</td><td>${o.b}</td><td class="out-cell ${o.out==1?"val-high":"val-low"}">${o.out}</td>`,a.appendChild(l)}),i.appendChild(a)}this.modal.classList.add("active")}hide(){this.modal.classList.remove("active")}}class Ul{constructor(t,e){this.container=t,this.engine=e,this.inspector=new Ol,this.activeDragWire=null,this.draggingChip=null,this.zoom=1,this.minZoom=.45,this.maxZoom=2.5,this.pan={x:0,y:0},this.isPanning=!1,this.panStart={x:0,y:0,initialPanX:0,initialPanY:0},this.spacePressed=!1,this.isHoveringBoard=!1,this.sensorPinElements={},this.actuatorPinElements={},this.onCircuitChange=null,this.buildDOM(),this.bindEvents(),this.initZoomControls(),this.renderChips(),this.renderWires()}setEngine(t){this.engine=t,this.activeDragWire=null,this.draggingChip=null,this.renderChips(),this.renderWires(),this.updateVisualStates()}notifyCircuitChange(){this.onCircuitChange&&this.onCircuitChange()}buildDOM(){this.container.innerHTML=`
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
          <div class="pin-row" data-pin="energy_low">
            <span class="pin-label">⚡ BATT LOW (&lt;25%)</span>
            <button class="test-btn" title="Test Pulse" data-test="energy_low">TEST</button>
            <div class="pin-terminal out" data-type="sensor" data-pin="energy_low">
              <span class="pin-dot"></span>
            </div>
          </div>
          <div class="pin-row" data-pin="energy_dock">
            <span class="pin-label">🔌 RECHARGING</span>
            <button class="test-btn" title="Test Pulse" data-test="energy_dock">TEST</button>
            <div class="pin-terminal out" data-type="sensor" data-pin="energy_dock">
              <span class="pin-dot"></span>
            </div>
          </div>

          <!-- Manual Remote Override Control Pad -->
          <div class="remote-control-hud">
            <div class="remote-header">MANUAL OVERRIDE</div>
            <button id="board-elevator-quick-btn" class="board-elevator-quick-btn" title="Board Flux directly onto the Freight Elevator [B]">
              <span class="elevator-btn-text">🛗 BOARD ELEVATOR</span>
              <span class="elevator-btn-sub">[KEY: B]</span>
            </button>
            <div class="dpad-grid">
              <button class="dpad-btn dpad-up" data-dir="thrust_n" title="Thrust North [W / ↑]">▲</button>
              <div class="dpad-row">
                <button class="dpad-btn dpad-left" data-dir="thrust_w" title="Thrust West [A / ←]">◀</button>
                <button class="dpad-btn dpad-center" data-dir="grabber" title="Clamp / Release Grabber [G]">⚡</button>
                <button class="dpad-btn dpad-right" data-dir="thrust_e" title="Thrust East [D / →]">▶</button>
              </div>
              <button class="dpad-btn dpad-down" data-dir="thrust_s" title="Thrust South [S / ↓]">▼</button>
            </div>
            <span class="dpad-keys-hint">WASD: MOVE | G: GRAB<br>B: BOARD ELEVATOR</span>
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
    `,this.boardWrapper=this.container.querySelector(".board-wrapper"),this.chipsViewport=this.container.querySelector("#chips-viewport"),this.chipsArea=this.container.querySelector("#chips-area"),this.wiresGroup=this.container.querySelector("#wires-group"),this.tempWirePath=this.container.querySelector("#temp-wire")}bindEvents(){this.boardWrapper.addEventListener("wheel",e=>{e.preventDefault();const i=this.chipsViewport.getBoundingClientRect(),s=e.clientX-i.left,r=e.clientY-i.top,a=e.deltaY<0?1.15:1/1.15,o=Math.min(this.maxZoom,Math.max(this.minZoom,this.zoom*a));Math.abs(o-this.zoom)<.001||(this.pan.x=s-(s-this.pan.x)*(o/this.zoom),this.pan.y=r-(r-this.pan.y)*(o/this.zoom),this.zoom=o,this.applyTransform(),this.updateZoomUI())},{passive:!1}),this.boardWrapper.addEventListener("mouseenter",()=>{this.isHoveringBoard=!0}),this.boardWrapper.addEventListener("mouseleave",()=>{this.isHoveringBoard=!1}),window.addEventListener("keydown",e=>{e.code==="Space"&&!this.spacePressed&&e.target.tagName!=="INPUT"&&e.target.tagName!=="TEXTAREA"&&this.isHoveringBoard&&(this.spacePressed=!0,this.chipsViewport.classList.add("space-pan-ready"))}),window.addEventListener("keyup",e=>{e.code==="Space"&&(this.spacePressed=!1,this.chipsViewport.classList.remove("space-pan-ready"))}),this.boardWrapper.addEventListener("mousemove",e=>this.onMouseMove(e)),window.addEventListener("mouseup",e=>this.onMouseUp(e)),this.boardWrapper.addEventListener("mousedown",e=>{const i=e.target.closest(".pin-terminal");if(i){this.onTerminalMouseDown(e,i);return}const s=e.target.closest(".chip-remove-btn");if(s){e.preventDefault(),e.stopPropagation();const d=s.closest(".chip-node");d&&d.dataset.id&&(this.engine.removeChip(d.dataset.id),K.playWireCut(),this.renderChips(),this.renderWires(),this.notifyCircuitChange());return}if(e.target.closest(".counter-mode-btn")){e.preventDefault(),e.stopPropagation();return}if(e.target.closest(".ts-ch-tab")){e.preventDefault(),e.stopPropagation();return}if(e.target.closest(".waypoint-store-btn, .waypoint-clr-btn")){e.preventDefault(),e.stopPropagation();return}if(e.target.closest(".stepper-manual-btn, .stepper-steps-btn")){e.preventDefault(),e.stopPropagation();return}if(e.target.closest(".timer-mode-btn, .timer-period-btn, .timer-trig-btn")){e.preventDefault(),e.stopPropagation();return}if(e.target.closest(".shift-dir-btn, .shift-data-btn, .shift-clk-btn")){e.preventDefault(),e.stopPropagation();return}if(e.target.closest(".pot-step-btn, .pot-knob")){e.preventDefault(),e.stopPropagation();return}if(e.target.closest(".spk-tone-btn")){e.preventDefault(),e.stopPropagation();return}const f=e.target.closest(".chip-header");if(f){const d=f.closest(".chip-node");this.onChipHeaderMouseDown(e,d);return}const x=e.button===1,v=this.spacePressed&&e.button===0,m=e.button===0&&!e.target.closest(".chip-node, .pin-terminal, .test-btn, .circuit-wire, .circuit-wire-hitbox, .header-bank");if(x||v||m){e.preventDefault(),this.isPanning=!0,this.panStart={x:e.clientX,y:e.clientY,initialPanX:this.pan.x,initialPanY:this.pan.y},this.chipsViewport.classList.add("is-panning");return}}),this.boardWrapper.addEventListener("click",e=>{var I,b;const i=e.target.closest(".counter-mode-btn");if(i){e.preventDefault(),e.stopPropagation();const g=i.closest(".chip-node");if(g&&g.dataset.id){const y=this.engine.chips.get(g.dataset.id);y&&y.state&&(y.state.mode=y.state.mode==="DEC"?"HEX":"DEC",K.playRelayClick(),this.updateVisualStates())}return}const s=e.target.closest(".ts-ch-tab");if(s){e.preventDefault(),e.stopPropagation();const g=s.closest(".chip-node"),y=parseInt(s.dataset.ch,10);g&&g.dataset.id&&y&&this.switchTerminalStripChannels(g.dataset.id,y);return}const r=e.target.closest(".waypoint-store-btn");if(r){e.preventDefault(),e.stopPropagation();const g=r.closest(".chip-node");if(g&&g.dataset.id){const y=this.engine.chips.get(g.dataset.id);if(y){y.state=y.state||{};const A=typeof window<"u"&&((b=(I=window.worldScene)==null?void 0:I.robot)==null?void 0:b.position)||{x:0,z:0};y.state.target={x:Math.round(A.x*10)/10,z:Math.round(A.z*10)/10},y.state.lastStore=!0,y.inputs.store=!0,K.playRelayClick(),this.updateVisualStates(),this.notifyCircuitChange()}}return}const a=e.target.closest(".waypoint-clr-btn");if(a){e.preventDefault(),e.stopPropagation();const g=a.closest(".chip-node");if(g&&g.dataset.id){const y=this.engine.chips.get(g.dataset.id);y&&y.state&&(y.state.target=null,y.state.lastStore=!1,K.playWireCut(),this.updateVisualStates(),this.notifyCircuitChange())}return}const o=e.target.closest(".stepper-manual-btn");if(o){e.preventDefault(),e.stopPropagation();const g=o.closest(".chip-node");if(g&&g.dataset.id){const y=this.engine.chips.get(g.dataset.id);y&&y.state&&(y.state.manualStepTrigger=!0,K.playRelayClick(),this.engine.tick(),this.updateVisualStates())}return}const l=e.target.closest(".stepper-steps-btn");if(l){e.preventDefault(),e.stopPropagation();const g=l.closest(".chip-node");if(g&&g.dataset.id){const y=this.engine.chips.get(g.dataset.id);if(y&&y.state){const A=y.state.maxSteps||4,P=A===4?2:A===2?3:4;y.state.maxSteps=P,y.state.step>=P&&(y.state.step=0),K.playRelayClick(),this.renderChips(),this.renderWires()}}return}const c=e.target.closest(".timer-mode-btn");if(c){e.preventDefault(),e.stopPropagation();const g=c.closest(".chip-node");if(g&&g.dataset.id){const y=this.engine.chips.get(g.dataset.id);y&&y.state&&(y.state.mode=y.state.mode==="ASTABLE"?"MONOSTABLE":"ASTABLE",y.state.counter=0,y.state.active=!1,y.state.out=!1,K.playRelayClick(),this.renderChips(),this.renderWires())}return}const h=e.target.closest(".timer-period-btn");if(h){e.preventDefault(),e.stopPropagation();const g=h.closest(".chip-node");if(g&&g.dataset.id){const y=this.engine.chips.get(g.dataset.id);y&&y.state&&(y.state.timeLabel==="0.2s"?(y.state.timeLabel="0.5s",y.state.timeBase=30):y.state.timeLabel==="0.5s"?(y.state.timeLabel="1.0s",y.state.timeBase=60):y.state.timeLabel==="1.0s"?(y.state.timeLabel="2.0s",y.state.timeBase=120):(y.state.timeLabel="0.2s",y.state.timeBase=12),y.state.counter=0,K.playRelayClick(),this.renderChips(),this.renderWires())}return}const p=e.target.closest(".timer-trig-btn");if(p){e.preventDefault(),e.stopPropagation();const g=p.closest(".chip-node");if(g&&g.dataset.id){const y=this.engine.chips.get(g.dataset.id);y&&y.state&&(y.state.manualTrig=!0,K.playRelayClick(),this.engine.tick(),this.updateVisualStates())}return}const u=e.target.closest(".shift-dir-btn");if(u){e.preventDefault(),e.stopPropagation();const g=u.closest(".chip-node");if(g&&g.dataset.id){const y=this.engine.chips.get(g.dataset.id);y&&y.state&&(y.state.dir=y.state.dir==="RIGHT"?"LEFT":"RIGHT",K.playRelayClick(),this.renderChips(),this.renderWires())}return}const f=e.target.closest(".shift-data-btn");if(f){e.preventDefault(),e.stopPropagation();const g=f.closest(".chip-node");if(g&&g.dataset.id){const y=this.engine.chips.get(g.dataset.id);y&&y.state&&(y.state.injectBit=!y.state.injectBit,K.playRelayClick(),this.renderChips(),this.renderWires())}return}const x=e.target.closest(".shift-clk-btn");if(x){e.preventDefault(),e.stopPropagation();const g=x.closest(".chip-node");if(g&&g.dataset.id){const y=this.engine.chips.get(g.dataset.id);y&&y.state&&(y.state.manualClkTrigger=!0,K.playRelayClick(),this.engine.tick(),this.updateVisualStates())}return}const v=[180,240,320,440,560,680,800,960,1120,1320,1600],m=e.target.closest(".pot-dec-btn");if(m){e.preventDefault(),e.stopPropagation();const g=m.closest(".chip-node");if(g&&g.dataset.id){const y=this.engine.chips.get(g.dataset.id);if(y&&y.state){y.state.dial=Math.max(0,Math.round(((y.state.dial!==void 0?y.state.dial:.5)-.1)*10)/10);const A=Math.min(v.length-1,Math.max(0,Math.floor(y.state.dial*v.length)));y.state.freq=v[A],K.playRelayClick(),this.updateVisualStates()}}return}const d=e.target.closest(".pot-inc-btn");if(d){e.preventDefault(),e.stopPropagation();const g=d.closest(".chip-node");if(g&&g.dataset.id){const y=this.engine.chips.get(g.dataset.id);if(y&&y.state){y.state.dial=Math.min(1,Math.round(((y.state.dial!==void 0?y.state.dial:.5)+.1)*10)/10);const A=Math.min(v.length-1,Math.max(0,Math.floor(y.state.dial*v.length)));y.state.freq=v[A],K.playRelayClick(),this.updateVisualStates()}}return}const S=e.target.closest(".pot-knob");if(S){e.preventDefault(),e.stopPropagation();const g=S.closest(".chip-node");if(g&&g.dataset.id){const y=this.engine.chips.get(g.dataset.id);if(y&&y.state){const A=[.1,.25,.5,.75,.9,1],P=y.state.dial!==void 0?y.state.dial:.5,U=A.find(B=>B>P+.05)??.1;y.state.dial=U;const q=Math.min(v.length-1,Math.max(0,Math.floor(y.state.dial*v.length)));y.state.freq=v[q],K.playRelayClick(),this.updateVisualStates()}}return}const E=e.target.closest(".spk-tone-btn");if(E){e.preventDefault(),e.stopPropagation();const g=E.closest(".chip-node");if(g&&g.dataset.id){const y=this.engine.chips.get(g.dataset.id);if(y&&y.state){const A=[320,480,880,1200],P=y.state.freq||480,U=(A.indexOf(P)+1)%A.length;y.state.freq=A[U],K.playRelayClick(),this.updateVisualStates()}}return}const _=e.target.closest(".power-toggle-btn");if(_){e.preventDefault(),e.stopPropagation();const g=_.closest(".chip-node");if(g&&g.dataset.id){const y=this.engine.chips.get(g.dataset.id);y&&y.state&&(y.state.enabled=y.state.enabled!==void 0?!y.state.enabled:!1,K.playRelayClick(),this.engine.tick(),this.updateVisualStates())}return}const D=e.target.closest(".led-color-btn");if(D){e.preventDefault(),e.stopPropagation();const g=D.closest(".chip-node");if(g&&g.dataset.id){const y=this.engine.chips.get(g.dataset.id);if(y&&y.state){const A=["green","red","blue","amber","purple"],P=y.state.color||"green",U=(A.indexOf(P)+1)%A.length;y.state.color=A[U],K.playRelayClick(),this.renderChips(),this.renderWires()}}return}const R=e.target.closest(".resistor-toggle-btn");if(R){e.preventDefault(),e.stopPropagation();const g=R.closest(".chip-node");if(g&&g.dataset.id){const y=this.engine.chips.get(g.dataset.id);y&&y.state&&(y.state.ohms=y.state.ohms===220?330:220,K.playRelayClick(),this.renderChips(),this.renderWires())}return}const L=e.target.closest(".chip-remove-btn");if(L){e.preventDefault(),e.stopPropagation();const g=L.closest(".chip-node");g&&g.dataset.id&&(this.engine.removeChip(g.dataset.id),K.playWireCut(),this.renderChips(),this.renderWires())}}),this.boardWrapper.querySelectorAll(".test-btn").forEach(e=>{const i=e.dataset.test;e.addEventListener("mousedown",r=>{r.stopPropagation(),this.engine.testInjectors[i]=!0,e.classList.add("active"),K.playRelayClick()});const s=()=>{this.engine.testInjectors[i]=!1,e.classList.remove("active")};e.addEventListener("mouseup",s),e.addEventListener("mouseleave",s)});const t=e=>{const i=e.target.closest("[data-wire-id]");if(i){e.preventDefault(),e.stopPropagation();const s=i.dataset.wireId;this.engine.removeWire(s),K.playWireCut(),this.renderWires(),this.notifyCircuitChange()}};this.wiresGroup.addEventListener("click",t),this.wiresGroup.addEventListener("contextmenu",t),this.boardWrapper.addEventListener("contextmenu",e=>{const i=e.target.closest(".pin-terminal");if(i){e.preventDefault(),e.stopPropagation();const s=i.dataset.type,r=i.dataset.chipId||null,a=i.dataset.pin,o=this.engine.wires.length;this.engine.wires=this.engine.wires.filter(l=>!(l.from.type===s&&l.from.id===r&&l.from.pin===a)&&!(l.to.type===s&&l.to.id===r&&l.to.pin===a)),this.engine.wires.length<o&&(K.playWireCut(),this.renderWires(),this.notifyCircuitChange())}}),this.boardWrapper.addEventListener("dblclick",e=>{const i=e.target.closest(".chip-node");if(i&&i.dataset.id){const s=this.engine.chips.get(i.dataset.id);s&&(K.playRelayClick(),this.inspector.show(s.type))}})}onTerminalMouseDown(t,e){if(t.stopPropagation(),t.preventDefault(),K.init(),!e.classList.contains("out")){const p=e.dataset.type,u=e.dataset.chipId||null,f=e.dataset.pin;this.engine.wires.filter(v=>v.to.type===p&&v.to.id===u&&v.to.pin===f).length>0&&(this.engine.wires=this.engine.wires.filter(v=>!(v.to.type===p&&v.to.id===u&&v.to.pin===f)),K.playWireCut(),this.renderWires(),this.notifyCircuitChange());return}const s=e.getBoundingClientRect(),r=this.boardWrapper.getBoundingClientRect(),a=e.dataset.type,o=e.dataset.chipId||null,l=e.dataset.pin,c=s.left+s.width/2-r.left,h=s.top+s.height/2-r.top;this.activeDragWire={from:{type:a,id:o,pin:l,x:c,y:h},currentX:c,currentY:h},K.playWirePlug()}onChipHeaderMouseDown(t,e){t.stopPropagation(),t.preventDefault();const i=e.dataset.id,s=this.engine.chips.get(i);s&&(this.draggingChip={id:i,startX:t.clientX,startY:t.clientY,initialChipX:s.x,initialChipY:s.y})}onMouseMove(t){if(this.isPanning){const r=t.clientX-this.panStart.x,a=t.clientY-this.panStart.y;this.pan.x=this.panStart.initialPanX+r,this.pan.y=this.panStart.initialPanY+a,this.applyTransform();return}const e=this.boardWrapper.getBoundingClientRect(),i=t.clientX-e.left,s=t.clientY-e.top;if(this.activeDragWire&&(this.activeDragWire.currentX=i,this.activeDragWire.currentY=s,this.updateTempWire()),this.draggingChip){const r=(t.clientX-this.draggingChip.startX)/this.zoom,a=(t.clientY-this.draggingChip.startY)/this.zoom,o=this.engine.chips.get(this.draggingChip.id);if(o){o.x=this.draggingChip.initialChipX+r,o.y=this.draggingChip.initialChipY+a;const l=this.chipsArea.querySelector(`[data-id="${o.id}"]`);l&&(l.style.left=`${o.x}px`,l.style.top=`${o.y}px`),this.renderWires()}}}onMouseUp(t){var e;if(this.isPanning&&(this.isPanning=!1,this.chipsViewport.classList.remove("is-panning")),this.draggingChip&&(this.draggingChip=null,this.notifyCircuitChange()),this.activeDragWire){const i=(e=document.elementFromPoint(t.clientX,t.clientY))==null?void 0:e.closest(".pin-terminal");let s=!1;if(i&&i.classList.contains("in")){const r=i.dataset.type,a=i.dataset.chipId||null,o=i.dataset.pin;this.engine.addWire({type:this.activeDragWire.from.type,id:this.activeDragWire.from.id,pin:this.activeDragWire.from.pin},{type:r,id:a,pin:o})&&(K.playWirePlug(),s=!0)}this.activeDragWire=null,this.tempWirePath.setAttribute("d",""),this.renderWires(),s&&this.notifyCircuitChange()}}updateTempWire(){if(!this.activeDragWire)return;const{from:t,currentX:e,currentY:i}=this.activeDragWire,s=this.calculateBezier(t.x,t.y,e,i);this.tempWirePath.setAttribute("d",s)}calculateBezier(t,e,i,s){const r=Math.abs(i-t),a=Math.max(40,r*.5),o=t+a,l=e,c=i-a;return`M ${t} ${e} C ${o} ${l}, ${c} ${s}, ${i} ${s}`}getTerminalCoords(t,e,i,s){let r="";t==="sensor"?r=`.sensor-bank .pin-terminal[data-pin="${i}"]`:t==="actuator"?r=`.actuator-bank .pin-terminal[data-pin="${i}"]`:t==="chip"&&(r=`.chip-node[data-id="${e}"] .pin-terminal${s?".in":".out"}[data-pin="${i}"]`);const a=this.boardWrapper.querySelector(r);if(!a)return null;const o=a.getBoundingClientRect(),l=this.boardWrapper.getBoundingClientRect();return{x:o.left+o.width/2-l.left,y:o.top+o.height/2-l.top}}applyTransform(){this.chipsArea&&(this.chipsArea.style.transform=`translate(${this.pan.x}px, ${this.pan.y}px) scale(${this.zoom})`,this.chipsArea.style.transformOrigin="0 0",this.renderWires())}updateZoomUI(){const t=document.getElementById("mb-zoom-reset-btn");t&&(t.textContent=`${Math.round(this.zoom*100)}%`)}resetZoom(){this.zoom=1,this.pan.x=0,this.pan.y=0,this.applyTransform(),this.updateZoomUI(),K.playRelayClick()}setZoom(t){const e=this.chipsViewport.getBoundingClientRect(),i=e.width/2,s=e.height/2,r=Math.min(this.maxZoom,Math.max(this.minZoom,t));Math.abs(r-this.zoom)<.001||(this.pan.x=i-(i-this.pan.x)*(r/this.zoom),this.pan.y=s-(s-this.pan.y)*(r/this.zoom),this.zoom=r,this.applyTransform(),this.updateZoomUI())}zoomIn(){const t=this.chipsViewport.getBoundingClientRect(),e=t.width/2,i=t.height/2,s=Math.min(this.maxZoom,this.zoom*1.2);Math.abs(s-this.zoom)<.001||(this.pan.x=e-(e-this.pan.x)*(s/this.zoom),this.pan.y=i-(i-this.pan.y)*(s/this.zoom),this.zoom=s,this.applyTransform(),this.updateZoomUI(),K.playRelayClick())}zoomOut(){const t=this.chipsViewport.getBoundingClientRect(),e=t.width/2,i=t.height/2,s=Math.max(this.minZoom,this.zoom/1.2);Math.abs(s-this.zoom)<.001||(this.pan.x=e-(e-this.pan.x)*(s/this.zoom),this.pan.y=i-(i-this.pan.y)*(s/this.zoom),this.zoom=s,this.applyTransform(),this.updateZoomUI(),K.playRelayClick())}initZoomControls(){const t=document.getElementById("mb-zoom-in-btn"),e=document.getElementById("mb-zoom-out-btn"),i=document.getElementById("mb-zoom-reset-btn"),s=document.getElementById("mb-zoom-fit-btn");t&&t.addEventListener("click",()=>this.zoomIn()),e&&e.addEventListener("click",()=>this.zoomOut()),i&&i.addEventListener("click",()=>this.resetZoom()),s&&s.addEventListener("click",()=>this.resetZoom())}switchTerminalStripChannels(t,e){const i=this.engine.chips.get(t);if(!i)return;const s=`BUS_${e}CH`,r=Oe[s];if(!r)return;i.type=s,i.name=r.name,i.code=r.code,i.height=r.height;const a={in:!!(i.inputs.in||i.inputs.in_0)},o={};for(let l=0;l<e;l++){const c=`out_${l}`;o[c]=!!i.outputs[c]}i.inputs=a,i.outputs=o,this.engine.wires=this.engine.wires.filter(l=>l.from.type==="chip"&&l.from.id===i.id?r.outputs.some(c=>c.id===l.from.pin):l.to.type==="chip"&&l.to.id===i.id?r.inputs.some(c=>c.id===l.to.pin):!0),K.playRelayClick(),this.renderChips(),this.renderWires()}renderChips(){this.chipsArea.innerHTML="";for(const t of this.engine.chips.values()){const e=Oe[t.type],i=document.createElement("div");i.className=`chip-node chip-category-${e.category}`,i.dataset.id=t.id,i.style.left=`${t.x}px`,i.style.top=`${t.y}px`,i.style.width=`${t.width}px`;const s=e.inputs.map(o=>`
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
        `;else if(e.isStepper){const o=t.state&&t.state.step!==void 0?t.state.step:0,l=t.state&&t.state.maxSteps||4;let c="";for(let h=0;h<4;h++){const p=h<l;c+=`
            <div class="stepper-cell ${h===o?"active":""} ${p?"":"disabled"}" data-step="${h}">
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
        `}else if(e.isPot){const o=t.state&&t.state.dial!==void 0?t.state.dial:.5,l=(o*10).toFixed(1),c=Math.round(o*100),h=Math.round((o-.5)*240),p=!!(t.state&&t.state.wiper);a=`
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
              <span class="pot-wiper-led ${p?"active":""}"></span>
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
        `}else if(e.category==="custom"){let o=!1,l="";if(t.state&&t.state.subChipStates){for(const c of Object.values(t.state.subChipStates))if(c&&c.target){o=!0;const h=(c.target.x>=0?"+":"")+c.target.x.toFixed(1),p=(c.target.z>=0?"+":"")+c.target.z.toFixed(1);l=`[${h}, ${p}]`;break}}a=`
          <div class="custom-chip-module">
            <div class="chip-ic-mark">
              <div class="ic-notch"></div>
              <div class="ic-dots"></div>
            </div>
            ${o?`
              <div class="custom-chip-wp-badge" title="Latched Waypoint Target: ${l}">
                <span class="custom-chip-match-led"></span>
                <span class="custom-chip-wp-coords">WP: ${l}</span>
              </div>
            `:`
              <div class="custom-chip-encap-tag">${e.code||"CUSTOM IC"}</div>
            `}
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
      `,this.chipsArea.appendChild(i)}}renderWires(){this.wiresGroup.innerHTML="";for(const t of this.engine.wires){const e=this.getTerminalCoords(t.from.type,t.from.id,t.from.pin,!1),i=this.getTerminalCoords(t.to.type,t.to.id,t.to.pin,!0);if(!e||!i)continue;const s=this.calculateBezier(e.x,e.y,i.x,i.y),r=document.createElementNS("http://www.w3.org/2000/svg","g");r.setAttribute("class","wire-group"),r.dataset.wireId=t.id;const a=document.createElementNS("http://www.w3.org/2000/svg","path");a.setAttribute("d",s),a.setAttribute("class","circuit-wire-hitbox"),a.dataset.wireId=t.id;const o=document.createElementNS("http://www.w3.org/2000/svg","path");o.setAttribute("d",s),o.setAttribute("class",`circuit-wire ${t.active?"wire-active":"wire-idle"}`),o.dataset.wireId=t.id,r.appendChild(a),r.appendChild(o),this.wiresGroup.appendChild(r)}}updateVisualStates(){var e,i;Object.keys(this.engine.sensors).forEach(s=>{const r=this.engine.sensors[s],a=this.boardWrapper.querySelector(`.sensor-bank .pin-terminal[data-pin="${s}"]`);a&&a.classList.toggle("active",r)}),Object.keys(this.engine.actuators).forEach(s=>{const r=this.engine.actuators[s],a=this.boardWrapper.querySelector(`.actuator-bank .pin-row[data-pin="${s}"]`);if(a){const o=a.querySelector(".led-indicator");o&&o.classList.toggle("active",r)}});for(const s of this.engine.chips.values()){const r=this.chipsArea.querySelector(`[data-id="${s.id}"]`);if(!r)continue;const a=Oe[s.type]||{};if(Object.keys(s.inputs).forEach(o=>{const l=r.querySelector(`.pin-terminal.in[data-pin="${o}"]`);l&&l.classList.toggle("active",!!s.inputs[o])}),Object.keys(s.outputs).forEach(o=>{const l=r.querySelector(`.pin-terminal.out[data-pin="${o}"]`);l&&l.classList.toggle("active",!!s.outputs[o])}),a.hasDisplay){const o=r.querySelector(".counter-digit"),l=s.state&&s.state.count!==void 0?s.state.count:0,c=s.state&&s.state.mode||"DEC";if(o){const u=c==="HEX"?l.toString(16).toUpperCase():l.toString(10);o.textContent!==u&&(o.textContent=u)}const h=r.querySelector(".counter-mode-btn");h&&h.textContent!==c&&(h.textContent=c,h.dataset.mode=c),[{bit:"1",active:(l&1)!==0},{bit:"2",active:(l&2)!==0},{bit:"4",active:(l&4)!==0},{bit:"8",active:(l&8)!==0}].forEach(u=>{const f=r.querySelector(`.c-bit[data-bit="${u.bit}"]`);f&&f.classList.toggle("active",u.active)})}if(a.isTerminalStrip){const o=a.channels||4,l=!!(s.inputs.in||s.inputs.in_0),c=r.querySelector(".ts-jumper-spine");c&&c.classList.toggle("active",l);for(let h=0;h<o;h++){const p=`out_${h}`,u=r.querySelector(`.ts-led[data-ch="${p}"]`);u&&u.classList.toggle("active",!!s.outputs[p])}}if(a.isWaypointMem){const o=r.querySelector(".waypoint-coords"),l=r.querySelector(".waypoint-match-led"),c=s.state&&s.state.target;if(o)if(c){const h=(c.x>=0?"+":"")+c.x.toFixed(1),p=(c.z>=0?"+":"")+c.z.toFixed(1);o.textContent=`[${h}, ${p}]`}else o.textContent="[EMPTY]";l&&l.classList.toggle("active",!!s.outputs.match)}if(a.isStepper){const o=s.state&&s.state.step!==void 0?s.state.step:0,l=s.state&&s.state.maxSteps||4;r.querySelectorAll(".stepper-cell").forEach(u=>{const f=parseInt(u.dataset.step,10);u.classList.toggle("active",f===o),u.classList.toggle("disabled",f>=l)});const h=r.querySelector(".stepper-steps-btn");h&&h.textContent!==`${l}-STP`&&(h.textContent=`${l}-STP`,h.dataset.steps=l);const p=r.querySelector(".stepper-state-tag");p&&(p.textContent=`STEP ${o+1}/${l}`)}if(a.isTimer555){const o=s.state&&s.state.mode||"ASTABLE",l=s.state&&s.state.timeLabel||"1.0s",c=!!(s.state&&s.state.out),h=r.querySelector(".timer-pulse-led");h&&h.classList.toggle("active",c);const p=r.querySelector(".timer-out-tag");p&&(p.textContent=c?"HIGH":"LOW",p.classList.toggle("active",c));const u=r.querySelector(".timer-mode-btn");if(u){const m=o==="ASTABLE"?"ASTABLE ↺":"MONO ⏱";u.textContent!==m&&(u.textContent=m,u.dataset.mode=o)}const f=r.querySelector(".timer-period-btn");f&&f.textContent!==l&&(f.textContent=l,f.dataset.period=l);const x=r.querySelector(".timer-wave-icon");if(x){const m=o==="ASTABLE"?"∿":"⎍";x.textContent!==m&&(x.textContent=m)}const v=r.querySelector(".timer-rate-tag");if(v){const m=l==="0.2s"?"5.0 Hz":l==="0.5s"?"2.0 Hz":l==="1.0s"?"1.0 Hz":"0.5 Hz";v.textContent!==m&&(v.textContent=m)}}if(a.isShiftReg){const o=s.state&&s.state.bits||[0,0,0,0],l=s.state&&s.state.dir||"RIGHT",c=s.state&&s.state.injectBit!==void 0?!!s.state.injectBit:!0,h=!!(s.state&&s.state.serOut);r.querySelectorAll(".shift-bit-cell").forEach(v=>{const m=parseInt(v.dataset.bit,10);if(!isNaN(m)&&m>=0&&m<o.length){const d=o[m]===1;v.classList.toggle("active",d);const S=v.querySelector(".shift-bit-val");S&&S.textContent!==String(o[m])&&(S.textContent=String(o[m]))}});const u=r.querySelector(".shift-ser-tag");if(u){const v=`SER: ${h?"1":"0"}`;u.textContent!==v&&(u.textContent=v),u.classList.toggle("active",h)}const f=r.querySelector(".shift-dir-btn");if(f){const v=l==="RIGHT"?"SHR ▶":"◀ SHL";f.textContent!==v&&(f.textContent=v)}const x=r.querySelector(".shift-data-btn");if(x){const v=`IN: ${c?"1":"0"}`;x.textContent!==v&&(x.textContent=v),x.classList.toggle("active",c)}}if(a.isNPN||a.isPNP){const o=!!(s.state&&s.state.active),l=r.querySelector(".bjt-cond-led");l&&l.classList.toggle("active",o);const c=r.querySelector(".bjt-cond-text");if(c){const p=o?"ON":"OFF";c.textContent!==p&&(c.textContent=p),c.classList.toggle("active",o)}const h=r.querySelector(".bjt-svg");h&&h.classList.toggle("active",o)}if(a.isPot){const o=s.state&&s.state.dial!==void 0?s.state.dial:.5,l=(o*10).toFixed(1),c=Math.round(o*100),h=Math.round((o-.5)*240),p=!!(s.state&&s.state.wiper),u=r.querySelector(".pot-val-tag");u&&u.textContent!==`${l} kΩ`&&(u.textContent=`${l} kΩ`);const f=r.querySelector(".pot-pct-tag");f&&f.textContent!==`${c}%`&&(f.textContent=`${c}%`);const x=r.querySelector(".pot-indicator");x&&(x.style.transform=`rotate(${h}deg)`);const v=r.querySelector(".pot-wiper-led");v&&v.classList.toggle("active",p)}if(a.isCap){const o=s.state&&s.state.charge!==void 0?s.state.charge:0,l=!!(s.state&&s.state.out),c=r.querySelector(".cap-gauge-fill");c&&(c.style.height=`${Math.round(o)}%`);const h=r.querySelector(".cap-charge-pct");h&&(h.textContent=`${Math.round(o)}%`);const p=r.querySelector(".cap-disch-led");p&&p.classList.toggle("active",l);const u=r.querySelector(".cap-can-body");u&&u.classList.toggle("charging",o>0)}if(a.isSpeaker){const o=!!(s.state&&s.state.active);let l=s.state&&s.state.freq||480;for(const v of this.engine.wires)if(v.to.type==="chip"&&v.to.id===s.id){const m=this.engine.chips.get(v.from.id);if(m&&m.type==="POTENTIOMETER"&&((e=m.state)!=null&&e.freq))l=m.state.freq,s.state.freq=l;else if(m&&(m.type==="NPN"||m.type==="PNP"||m.type==="CAPACITOR")){const d=this.engine.wires.find(S=>S.to.type==="chip"&&S.to.id===m.id&&(S.to.pin==="b"||S.to.pin==="in"));if(d){const S=this.engine.chips.get(d.from.id);S&&S.type==="POTENTIOMETER"&&((i=S.state)!=null&&i.freq)&&(l=S.state.freq,s.state.freq=l)}}}const c=r.querySelector(".spk-tone-btn");c&&c.textContent!==`${l} Hz`&&(c.textContent=`${l} Hz`);const h=r.querySelector(".piezo-speaker-box");h&&h.classList.toggle("active",o);const p=r.querySelector(".piezo-cone");p&&p.classList.toggle("active",o);const u=r.querySelector(".piezo-sound-waves");u&&u.classList.toggle("active",o);const f=r.querySelector(".piezo-led");f&&f.classList.toggle("active",o);const x=r.querySelector(".piezo-sound-tag");if(x){const v=o?"BEEP!":"IDLE";x.textContent!==v&&(x.textContent=v),x.classList.toggle("active",o)}o&&K.playBuzzerPulse(l)}if(a.isPower){const o=s.state&&s.state.isLive!==void 0?!!s.state.isLive:s.state&&s.state.enabled!==void 0?!!s.state.enabled:!0,l=r.querySelector(".power-toggle-btn");l&&(l.classList.toggle("active",o),l.textContent=o?"⚡ ON":"○ OFF");const c=r.querySelector(".power-voltage-readout");c&&(c.textContent=o?"+5.0V":"0.0V");const h=r.querySelector(".power-glow-dot");h&&h.classList.toggle("active",o);const p=r.querySelector(".power-regulator-box");p&&p.classList.toggle("active",o)}if(a.isGround){const o=!!(s.state&&s.state.hasSink),l=r.querySelector(".ground-symbol-box");l&&l.classList.toggle("active",o)}if(a.isLED){const o=!!(s.state&&s.state.lit),l=r.querySelector(".led-lens-container");l&&l.classList.toggle("lit",o);const c=r.querySelector(".led-state-tag");c&&(c.classList.toggle("lit",o),c.textContent=o?"LIT":"OFF");const h=r.querySelector(".led-display-module");h&&h.classList.toggle("lit",o)}if(a.isResistor){const o=!!(s.state&&s.state.active),l=s.state&&s.state.ohms||a.defaultOhms||220,c=r.querySelector(".resistor-display-module");c&&c.classList.toggle("active",o);const h=r.querySelector(".resistor-body-container");h&&h.classList.toggle("active",o);const p=r.querySelector(".resistor-toggle-btn");p&&p.textContent!==`${l} Ω`&&(p.textContent=`${l} Ω`);const u=r.querySelector(".resistor-rating-tag");u&&(u.textContent=l===220?"1/4W 220Ω":"1/4W 330Ω");const f=r.querySelector(".resistor-band.band-1"),x=r.querySelector(".resistor-band.band-2");f&&(f.style.background=l===220?"#ef4444":"#f97316"),x&&(x.style.background=l===220?"#ef4444":"#f97316")}if(a.category==="custom"){const o=r.querySelector(".custom-chip-wp-coords"),l=r.querySelector(".custom-chip-match-led");if(o&&s.state&&s.state.subChipStates){let c=null;for(const h of Object.values(s.state.subChipStates))if(h&&h.target){c=h.target;break}if(c){const h=(c.x>=0?"+":"")+c.x.toFixed(1),p=(c.z>=0?"+":"")+c.z.toFixed(1);o.textContent=`WP: [${h}, ${p}]`}}if(l){const c=Object.entries(s.outputs).some(([h,p])=>{const u=a.outputs.find(f=>f.id===h);return p&&u&&(u.label.includes("MATCH")||u.id.includes("match"))});l.classList.toggle("active",c)}}}this.wiresGroup.querySelectorAll(".circuit-wire").forEach(s=>{const r=s.dataset.wireId,a=this.engine.wires.find(o=>o.id===r);a&&(s.classList.toggle("wire-active",!!a.active),s.classList.toggle("wire-idle",!a.active))})}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sa="170",Bl=0,za=1,Fl=2,$o=1,Zo=2,fi=3,Ni=0,Ue=1,Je=2,Pi=0,Sn=1,Ga=2,Ha=3,Va=4,kl=5,Wi=100,zl=101,Gl=102,Hl=103,Vl=104,Wl=200,Xl=201,ql=202,Yl=203,Or=204,Ur=205,$l=206,Zl=207,jl=208,Kl=209,Ql=210,Jl=211,tc=212,ec=213,ic=214,Br=0,Fr=1,kr=2,Tn=3,zr=4,Gr=5,Hr=6,Vr=7,jo=0,nc=1,sc=2,Di=0,rc=1,ac=2,oc=3,Ko=4,lc=5,cc=6,dc=7,Qo=300,wn=301,Cn=302,Wr=303,Xr=304,js=306,qr=1e3,qi=1001,Yr=1002,ii=1003,hc=1004,cs=1005,He=1006,ir=1007,mi=1008,bi=1009,Jo=1010,tl=1011,Qn=1012,Ea=1013,Yi=1014,gi=1015,ts=1016,Ma=1017,Ta=1018,An=1020,el=35902,il=1021,nl=1022,ei=1023,sl=1024,rl=1025,En=1026,Rn=1027,al=1028,wa=1029,ol=1030,Ca=1031,Aa=1033,Bs=33776,Fs=33777,ks=33778,zs=33779,$r=35840,Zr=35841,jr=35842,Kr=35843,Qr=36196,Jr=37492,ta=37496,ea=37808,ia=37809,na=37810,sa=37811,ra=37812,aa=37813,oa=37814,la=37815,ca=37816,da=37817,ha=37818,ua=37819,pa=37820,fa=37821,Gs=36492,ma=36494,ga=36495,ll=36283,va=36284,xa=36285,ya=36286,uc=3200,pc=3201,cl=0,fc=1,Li="",qe="srgb",In="srgb-linear",Ks="linear",se="srgb",en=7680,Wa=519,mc=512,gc=513,vc=514,dl=515,xc=516,yc=517,_c=518,bc=519,_a=35044,Xa="300 es",vi=2e3,Vs=2001;class Pn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ce=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let qa=1234567;const jn=Math.PI/180,Jn=180/Math.PI;function yi(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ce[n&255]+Ce[n>>8&255]+Ce[n>>16&255]+Ce[n>>24&255]+"-"+Ce[t&255]+Ce[t>>8&255]+"-"+Ce[t>>16&15|64]+Ce[t>>24&255]+"-"+Ce[e&63|128]+Ce[e>>8&255]+"-"+Ce[e>>16&255]+Ce[e>>24&255]+Ce[i&255]+Ce[i>>8&255]+Ce[i>>16&255]+Ce[i>>24&255]).toLowerCase()}function Pe(n,t,e){return Math.max(t,Math.min(e,n))}function Ra(n,t){return(n%t+t)%t}function Sc(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Ec(n,t,e){return n!==t?(e-n)/(t-n):0}function Kn(n,t,e){return(1-e)*n+e*t}function Mc(n,t,e,i){return Kn(n,t,1-Math.exp(-e*i))}function Tc(n,t=1){return t-Math.abs(Ra(n,t*2)-t)}function wc(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Cc(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Ac(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Rc(n,t){return n+Math.random()*(t-n)}function Lc(n){return n*(.5-Math.random())}function Ic(n){n!==void 0&&(qa=n);let t=qa+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Pc(n){return n*jn}function Dc(n){return n*Jn}function Nc(n){return(n&n-1)===0&&n!==0}function Oc(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Uc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Bc(n,t,e,i,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+i)/2),h=a((t+i)/2),p=r((t-i)/2),u=a((t-i)/2),f=r((i-t)/2),x=a((i-t)/2);switch(s){case"XYX":n.set(o*h,l*p,l*u,o*c);break;case"YZY":n.set(l*u,o*h,l*p,o*c);break;case"ZXZ":n.set(l*p,l*u,o*h,o*c);break;case"XZX":n.set(o*h,l*x,l*f,o*c);break;case"YXY":n.set(l*f,o*h,l*x,o*c);break;case"ZYZ":n.set(l*x,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ti(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ie(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const nn={DEG2RAD:jn,RAD2DEG:Jn,generateUUID:yi,clamp:Pe,euclideanModulo:Ra,mapLinear:Sc,inverseLerp:Ec,lerp:Kn,damp:Mc,pingpong:Tc,smoothstep:wc,smootherstep:Cc,randInt:Ac,randFloat:Rc,randFloatSpread:Lc,seededRandom:Ic,degToRad:Pc,radToDeg:Dc,isPowerOfTwo:Nc,ceilPowerOfTwo:Oc,floorPowerOfTwo:Uc,setQuaternionFromProperEuler:Bc,normalize:ie,denormalize:ti};class Ft{constructor(t=0,e=0){Ft.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Pe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class kt{constructor(t,e,i,s,r,a,o,l,c){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],p=i[7],u=i[2],f=i[5],x=i[8],v=s[0],m=s[3],d=s[6],S=s[1],E=s[4],_=s[7],D=s[2],R=s[5],L=s[8];return r[0]=a*v+o*S+l*D,r[3]=a*m+o*E+l*R,r[6]=a*d+o*_+l*L,r[1]=c*v+h*S+p*D,r[4]=c*m+h*E+p*R,r[7]=c*d+h*_+p*L,r[2]=u*v+f*S+x*D,r[5]=u*m+f*E+x*R,r[8]=u*d+f*_+x*L,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=h*a-o*c,u=o*l-h*r,f=c*r-a*l,x=e*p+i*u+s*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/x;return t[0]=p*v,t[1]=(s*c-h*i)*v,t[2]=(o*i-s*a)*v,t[3]=u*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=f*v,t[7]=(i*l-c*e)*v,t[8]=(a*e-i*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(nr.makeScale(t,e)),this}rotate(t){return this.premultiply(nr.makeRotation(-t)),this}translate(t,e){return this.premultiply(nr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const nr=new kt;function hl(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Ws(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Fc(){const n=Ws("canvas");return n.style.display="block",n}const Ya={};function $n(n){n in Ya||(Ya[n]=!0,console.warn(n))}function kc(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function zc(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Gc(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Kt={enabled:!0,workingColorSpace:In,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===se&&(n.r=_i(n.r),n.g=_i(n.g),n.b=_i(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===se&&(n.r=Mn(n.r),n.g=Mn(n.g),n.b=Mn(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Li?Ks:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function _i(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Mn(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const $a=[.64,.33,.3,.6,.15,.06],Za=[.2126,.7152,.0722],ja=[.3127,.329],Ka=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qa=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Kt.define({[In]:{primaries:$a,whitePoint:ja,transfer:Ks,toXYZ:Ka,fromXYZ:Qa,luminanceCoefficients:Za,workingColorSpaceConfig:{unpackColorSpace:qe},outputColorSpaceConfig:{drawingBufferColorSpace:qe}},[qe]:{primaries:$a,whitePoint:ja,transfer:se,toXYZ:Ka,fromXYZ:Qa,luminanceCoefficients:Za,outputColorSpaceConfig:{drawingBufferColorSpace:qe}}});let sn;class Hc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{sn===void 0&&(sn=Ws("canvas")),sn.width=t.width,sn.height=t.height;const i=sn.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=sn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ws("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=_i(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(_i(e[i]/255)*255):e[i]=_i(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Vc=0;class ul{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vc++}),this.uuid=yi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(sr(s[a].image)):r.push(sr(s[a]))}else r=sr(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function sr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Hc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Wc=0;class De extends Pn{constructor(t=De.DEFAULT_IMAGE,e=De.DEFAULT_MAPPING,i=qi,s=qi,r=He,a=mi,o=ei,l=bi,c=De.DEFAULT_ANISOTROPY,h=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wc++}),this.uuid=yi(),this.name="",this.source=new ul(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Qo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case qr:t.x=t.x-Math.floor(t.x);break;case qi:t.x=t.x<0?0:1;break;case Yr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case qr:t.y=t.y-Math.floor(t.y);break;case qi:t.y=t.y<0?0:1;break;case Yr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}De.DEFAULT_IMAGE=null;De.DEFAULT_MAPPING=Qo;De.DEFAULT_ANISOTROPY=1;class ae{constructor(t=0,e=0,i=0,s=1){ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],h=l[4],p=l[8],u=l[1],f=l[5],x=l[9],v=l[2],m=l[6],d=l[10];if(Math.abs(h-u)<.01&&Math.abs(p-v)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(p+v)<.1&&Math.abs(x+m)<.1&&Math.abs(c+f+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,_=(f+1)/2,D=(d+1)/2,R=(h+u)/4,L=(p+v)/4,I=(x+m)/4;return E>_&&E>D?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=R/i,r=L/i):_>D?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=R/s,r=I/s):D<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),i=L/r,s=I/r),this.set(i,s,r,e),this}let S=Math.sqrt((m-x)*(m-x)+(p-v)*(p-v)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(m-x)/S,this.y=(p-v)/S,this.z=(u-h)/S,this.w=Math.acos((c+f+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xc extends Pn{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ae(0,0,t,e),this.scissorTest=!1,this.viewport=new ae(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:He,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new De(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new ul(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $i extends Xc{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class pl extends De{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=ii,this.minFilter=ii,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class qc extends De{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=ii,this.minFilter=ii,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class es{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],p=i[s+3];const u=r[a+0],f=r[a+1],x=r[a+2],v=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=p;return}if(o===1){t[e+0]=u,t[e+1]=f,t[e+2]=x,t[e+3]=v;return}if(p!==v||l!==u||c!==f||h!==x){let m=1-o;const d=l*u+c*f+h*x+p*v,S=d>=0?1:-1,E=1-d*d;if(E>Number.EPSILON){const D=Math.sqrt(E),R=Math.atan2(D,d*S);m=Math.sin(m*R)/D,o=Math.sin(o*R)/D}const _=o*S;if(l=l*m+u*_,c=c*m+f*_,h=h*m+x*_,p=p*m+v*_,m===1-o){const D=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=D,c*=D,h*=D,p*=D}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=p}static multiplyQuaternionsFlat(t,e,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],p=r[a],u=r[a+1],f=r[a+2],x=r[a+3];return t[e]=o*x+h*p+l*f-c*u,t[e+1]=l*x+h*u+c*p-o*f,t[e+2]=c*x+h*f+o*u-l*p,t[e+3]=h*x-o*p-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),p=o(r/2),u=l(i/2),f=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=u*h*p+c*f*x,this._y=c*f*p-u*h*x,this._z=c*h*x+u*f*p,this._w=c*h*p-u*f*x;break;case"YXZ":this._x=u*h*p+c*f*x,this._y=c*f*p-u*h*x,this._z=c*h*x-u*f*p,this._w=c*h*p+u*f*x;break;case"ZXY":this._x=u*h*p-c*f*x,this._y=c*f*p+u*h*x,this._z=c*h*x+u*f*p,this._w=c*h*p-u*f*x;break;case"ZYX":this._x=u*h*p-c*f*x,this._y=c*f*p+u*h*x,this._z=c*h*x-u*f*p,this._w=c*h*p+u*f*x;break;case"YZX":this._x=u*h*p+c*f*x,this._y=c*f*p+u*h*x,this._z=c*h*x-u*f*p,this._w=c*h*p-u*f*x;break;case"XZY":this._x=u*h*p-c*f*x,this._y=c*f*p-u*h*x,this._z=c*h*x+u*f*p,this._w=c*h*p+u*f*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],p=e[10],u=i+o+p;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>p){const f=2*Math.sqrt(1+i-o-p);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>p){const f=2*Math.sqrt(1+o-i-p);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+p-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Pe(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+i*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*i+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),p=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=a*p+this._w*u,this._x=i*p+this._x*u,this._y=s*p+this._y*u,this._z=r*p+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,i=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ja.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ja.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),h=2*(o*e-r*s),p=2*(r*i-a*e);return this.x=e+l*c+a*p-o*h,this.y=i+l*h+o*c-r*p,this.z=s+l*p+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return rr.copy(this).projectOnVector(t),this.sub(rr)}reflect(t){return this.sub(rr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Pe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const rr=new N,Ja=new es;class is{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=je.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,je):je.fromBufferAttribute(r,a),je.applyMatrix4(t.matrixWorld),this.expandByPoint(je);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ds.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ds.copy(i.boundingBox)),ds.applyMatrix4(t.matrixWorld),this.union(ds)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,je),je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(kn),hs.subVectors(this.max,kn),rn.subVectors(t.a,kn),an.subVectors(t.b,kn),on.subVectors(t.c,kn),Mi.subVectors(an,rn),Ti.subVectors(on,an),Ui.subVectors(rn,on);let e=[0,-Mi.z,Mi.y,0,-Ti.z,Ti.y,0,-Ui.z,Ui.y,Mi.z,0,-Mi.x,Ti.z,0,-Ti.x,Ui.z,0,-Ui.x,-Mi.y,Mi.x,0,-Ti.y,Ti.x,0,-Ui.y,Ui.x,0];return!ar(e,rn,an,on,hs)||(e=[1,0,0,0,1,0,0,0,1],!ar(e,rn,an,on,hs))?!1:(us.crossVectors(Mi,Ti),e=[us.x,us.y,us.z],ar(e,rn,an,on,hs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,je).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(je).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(li),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const li=[new N,new N,new N,new N,new N,new N,new N,new N],je=new N,ds=new is,rn=new N,an=new N,on=new N,Mi=new N,Ti=new N,Ui=new N,kn=new N,hs=new N,us=new N,Bi=new N;function ar(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Bi.fromArray(n,r);const o=s.x*Math.abs(Bi.x)+s.y*Math.abs(Bi.y)+s.z*Math.abs(Bi.z),l=t.dot(Bi),c=e.dot(Bi),h=i.dot(Bi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Yc=new is,zn=new N,or=new N;class Qs{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Yc.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zn.subVectors(t,this.center);const e=zn.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(zn,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(or.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zn.copy(t.center).add(or)),this.expandByPoint(zn.copy(t.center).sub(or))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ci=new N,lr=new N,ps=new N,wi=new N,cr=new N,fs=new N,dr=new N;class fl{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ci)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ci.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ci.copy(this.origin).addScaledVector(this.direction,e),ci.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){lr.copy(t).add(e).multiplyScalar(.5),ps.copy(e).sub(t).normalize(),wi.copy(this.origin).sub(lr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(ps),o=wi.dot(this.direction),l=-wi.dot(ps),c=wi.lengthSq(),h=Math.abs(1-a*a);let p,u,f,x;if(h>0)if(p=a*l-o,u=a*o-l,x=r*h,p>=0)if(u>=-x)if(u<=x){const v=1/h;p*=v,u*=v,f=p*(p+a*u+2*o)+u*(a*p+u+2*l)+c}else u=r,p=Math.max(0,-(a*u+o)),f=-p*p+u*(u+2*l)+c;else u=-r,p=Math.max(0,-(a*u+o)),f=-p*p+u*(u+2*l)+c;else u<=-x?(p=Math.max(0,-(-a*r+o)),u=p>0?-r:Math.min(Math.max(-r,-l),r),f=-p*p+u*(u+2*l)+c):u<=x?(p=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(p=Math.max(0,-(a*r+o)),u=p>0?r:Math.min(Math.max(-r,-l),r),f=-p*p+u*(u+2*l)+c);else u=a>0?-r:r,p=Math.max(0,-(a*u+o)),f=-p*p+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(lr).addScaledVector(ps,u),f}intersectSphere(t,e){ci.subVectors(t.center,this.origin);const i=ci.dot(this.direction),s=ci.dot(ci)-i*i,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(t.min.z-u.z)*p,l=(t.max.z-u.z)*p):(o=(t.max.z-u.z)*p,l=(t.min.z-u.z)*p),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,ci)!==null}intersectTriangle(t,e,i,s,r){cr.subVectors(e,t),fs.subVectors(i,t),dr.crossVectors(cr,fs);let a=this.direction.dot(dr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;wi.subVectors(this.origin,t);const l=o*this.direction.dot(fs.crossVectors(wi,fs));if(l<0)return null;const c=o*this.direction.dot(cr.cross(wi));if(c<0||l+c>a)return null;const h=-o*wi.dot(dr);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ue{constructor(t,e,i,s,r,a,o,l,c,h,p,u,f,x,v,m){ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,h,p,u,f,x,v,m)}set(t,e,i,s,r,a,o,l,c,h,p,u,f,x,v,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=p,d[14]=u,d[3]=f,d[7]=x,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ue().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/ln.setFromMatrixColumn(t,0).length(),r=1/ln.setFromMatrixColumn(t,1).length(),a=1/ln.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){const u=a*h,f=a*p,x=o*h,v=o*p;e[0]=l*h,e[4]=-l*p,e[8]=c,e[1]=f+x*c,e[5]=u-v*c,e[9]=-o*l,e[2]=v-u*c,e[6]=x+f*c,e[10]=a*l}else if(t.order==="YXZ"){const u=l*h,f=l*p,x=c*h,v=c*p;e[0]=u+v*o,e[4]=x*o-f,e[8]=a*c,e[1]=a*p,e[5]=a*h,e[9]=-o,e[2]=f*o-x,e[6]=v+u*o,e[10]=a*l}else if(t.order==="ZXY"){const u=l*h,f=l*p,x=c*h,v=c*p;e[0]=u-v*o,e[4]=-a*p,e[8]=x+f*o,e[1]=f+x*o,e[5]=a*h,e[9]=v-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const u=a*h,f=a*p,x=o*h,v=o*p;e[0]=l*h,e[4]=x*c-f,e[8]=u*c+v,e[1]=l*p,e[5]=v*c+u,e[9]=f*c-x,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const u=a*l,f=a*c,x=o*l,v=o*c;e[0]=l*h,e[4]=v-u*p,e[8]=x*p+f,e[1]=p,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*p+x,e[10]=u-v*p}else if(t.order==="XZY"){const u=a*l,f=a*c,x=o*l,v=o*c;e[0]=l*h,e[4]=-p,e[8]=c*h,e[1]=u*p+v,e[5]=a*h,e[9]=f*p-x,e[2]=x*p-f,e[6]=o*h,e[10]=v*p+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose($c,t,Zc)}lookAt(t,e,i){const s=this.elements;return ke.subVectors(t,e),ke.lengthSq()===0&&(ke.z=1),ke.normalize(),Ci.crossVectors(i,ke),Ci.lengthSq()===0&&(Math.abs(i.z)===1?ke.x+=1e-4:ke.z+=1e-4,ke.normalize(),Ci.crossVectors(i,ke)),Ci.normalize(),ms.crossVectors(ke,Ci),s[0]=Ci.x,s[4]=ms.x,s[8]=ke.x,s[1]=Ci.y,s[5]=ms.y,s[9]=ke.y,s[2]=Ci.z,s[6]=ms.z,s[10]=ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],p=i[5],u=i[9],f=i[13],x=i[2],v=i[6],m=i[10],d=i[14],S=i[3],E=i[7],_=i[11],D=i[15],R=s[0],L=s[4],I=s[8],b=s[12],g=s[1],y=s[5],A=s[9],P=s[13],U=s[2],q=s[6],B=s[10],Y=s[14],H=s[3],nt=s[7],ct=s[11],bt=s[15];return r[0]=a*R+o*g+l*U+c*H,r[4]=a*L+o*y+l*q+c*nt,r[8]=a*I+o*A+l*B+c*ct,r[12]=a*b+o*P+l*Y+c*bt,r[1]=h*R+p*g+u*U+f*H,r[5]=h*L+p*y+u*q+f*nt,r[9]=h*I+p*A+u*B+f*ct,r[13]=h*b+p*P+u*Y+f*bt,r[2]=x*R+v*g+m*U+d*H,r[6]=x*L+v*y+m*q+d*nt,r[10]=x*I+v*A+m*B+d*ct,r[14]=x*b+v*P+m*Y+d*bt,r[3]=S*R+E*g+_*U+D*H,r[7]=S*L+E*y+_*q+D*nt,r[11]=S*I+E*A+_*B+D*ct,r[15]=S*b+E*P+_*Y+D*bt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],p=t[6],u=t[10],f=t[14],x=t[3],v=t[7],m=t[11],d=t[15];return x*(+r*l*p-s*c*p-r*o*u+i*c*u+s*o*f-i*l*f)+v*(+e*l*f-e*c*u+r*a*u-s*a*f+s*c*h-r*l*h)+m*(+e*c*p-e*o*f-r*a*p+i*a*f+r*o*h-i*c*h)+d*(-s*o*h-e*l*p+e*o*u+s*a*p-i*a*u+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=t[9],u=t[10],f=t[11],x=t[12],v=t[13],m=t[14],d=t[15],S=p*m*c-v*u*c+v*l*f-o*m*f-p*l*d+o*u*d,E=x*u*c-h*m*c-x*l*f+a*m*f+h*l*d-a*u*d,_=h*v*c-x*p*c+x*o*f-a*v*f-h*o*d+a*p*d,D=x*p*l-h*v*l-x*o*u+a*v*u+h*o*m-a*p*m,R=e*S+i*E+s*_+r*D;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/R;return t[0]=S*L,t[1]=(v*u*r-p*m*r-v*s*f+i*m*f+p*s*d-i*u*d)*L,t[2]=(o*m*r-v*l*r+v*s*c-i*m*c-o*s*d+i*l*d)*L,t[3]=(p*l*r-o*u*r-p*s*c+i*u*c+o*s*f-i*l*f)*L,t[4]=E*L,t[5]=(h*m*r-x*u*r+x*s*f-e*m*f-h*s*d+e*u*d)*L,t[6]=(x*l*r-a*m*r-x*s*c+e*m*c+a*s*d-e*l*d)*L,t[7]=(a*u*r-h*l*r+h*s*c-e*u*c-a*s*f+e*l*f)*L,t[8]=_*L,t[9]=(x*p*r-h*v*r-x*i*f+e*v*f+h*i*d-e*p*d)*L,t[10]=(a*v*r-x*o*r+x*i*c-e*v*c-a*i*d+e*o*d)*L,t[11]=(h*o*r-a*p*r-h*i*c+e*p*c+a*i*f-e*o*f)*L,t[12]=D*L,t[13]=(h*v*s-x*p*s+x*i*u-e*v*u-h*i*m+e*p*m)*L,t[14]=(x*o*s-a*v*s-x*i*l+e*v*l+a*i*m-e*o*m)*L,t[15]=(a*p*s-h*o*s+h*i*l-e*p*l-a*i*u+e*o*u)*L,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,p=o+o,u=r*c,f=r*h,x=r*p,v=a*h,m=a*p,d=o*p,S=l*c,E=l*h,_=l*p,D=i.x,R=i.y,L=i.z;return s[0]=(1-(v+d))*D,s[1]=(f+_)*D,s[2]=(x-E)*D,s[3]=0,s[4]=(f-_)*R,s[5]=(1-(u+d))*R,s[6]=(m+S)*R,s[7]=0,s[8]=(x+E)*L,s[9]=(m-S)*L,s[10]=(1-(u+v))*L,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=ln.set(s[0],s[1],s[2]).length();const a=ln.set(s[4],s[5],s[6]).length(),o=ln.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ke.copy(this);const c=1/r,h=1/a,p=1/o;return Ke.elements[0]*=c,Ke.elements[1]*=c,Ke.elements[2]*=c,Ke.elements[4]*=h,Ke.elements[5]*=h,Ke.elements[6]*=h,Ke.elements[8]*=p,Ke.elements[9]*=p,Ke.elements[10]*=p,e.setFromRotationMatrix(Ke),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,s,r,a,o=vi){const l=this.elements,c=2*r/(e-t),h=2*r/(i-s),p=(e+t)/(e-t),u=(i+s)/(i-s);let f,x;if(o===vi)f=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Vs)f=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=vi){const l=this.elements,c=1/(e-t),h=1/(i-s),p=1/(a-r),u=(e+t)*c,f=(i+s)*h;let x,v;if(o===vi)x=(a+r)*p,v=-2*p;else if(o===Vs)x=r*p,v=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const ln=new N,Ke=new ue,$c=new N(0,0,0),Zc=new N(1,1,1),Ci=new N,ms=new N,ke=new N,to=new ue,eo=new es;class ai{constructor(t=0,e=0,i=0,s=ai.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],p=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Pe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(Pe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Pe(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Pe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return to.makeRotationFromQuaternion(t),this.setFromRotationMatrix(to,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return eo.setFromEuler(this),this.setFromQuaternion(eo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ai.DEFAULT_ORDER="XYZ";class ml{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let jc=0;const io=new N,cn=new es,di=new ue,gs=new N,Gn=new N,Kc=new N,Qc=new es,no=new N(1,0,0),so=new N(0,1,0),ro=new N(0,0,1),ao={type:"added"},Jc={type:"removed"},dn={type:"childadded",child:null},hr={type:"childremoved",child:null};class Ee extends Pn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jc++}),this.uuid=yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ee.DEFAULT_UP.clone();const t=new N,e=new ai,i=new es,s=new N(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ue},normalMatrix:{value:new kt}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=Ee.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ml,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return cn.setFromAxisAngle(t,e),this.quaternion.multiply(cn),this}rotateOnWorldAxis(t,e){return cn.setFromAxisAngle(t,e),this.quaternion.premultiply(cn),this}rotateX(t){return this.rotateOnAxis(no,t)}rotateY(t){return this.rotateOnAxis(so,t)}rotateZ(t){return this.rotateOnAxis(ro,t)}translateOnAxis(t,e){return io.copy(t).applyQuaternion(this.quaternion),this.position.add(io.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(no,t)}translateY(t){return this.translateOnAxis(so,t)}translateZ(t){return this.translateOnAxis(ro,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?gs.copy(t):gs.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Gn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(Gn,gs,this.up):di.lookAt(gs,Gn,this.up),this.quaternion.setFromRotationMatrix(di),s&&(di.extractRotation(s.matrixWorld),cn.setFromRotationMatrix(di),this.quaternion.premultiply(cn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ao),dn.child=t,this.dispatchEvent(dn),dn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Jc),hr.child=t,this.dispatchEvent(hr),hr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),di.multiply(t.parent.matrixWorld)),t.applyMatrix4(di),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ao),dn.child=t,this.dispatchEvent(dn),dn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gn,t,Kc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gn,Qc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const p=l[c];r(t.shapes,p)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),p=a(t.shapes),u=a(t.skeletons),f=a(t.animations),x=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),x.length>0&&(i.nodes=x)}return i.object=s,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Ee.DEFAULT_UP=new N(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qe=new N,hi=new N,ur=new N,ui=new N,hn=new N,un=new N,oo=new N,pr=new N,fr=new N,mr=new N,gr=new ae,vr=new ae,xr=new ae;class $e{constructor(t=new N,e=new N,i=new N){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Qe.subVectors(t,e),s.cross(Qe);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Qe.subVectors(s,e),hi.subVectors(i,e),ur.subVectors(t,e);const a=Qe.dot(Qe),o=Qe.dot(hi),l=Qe.dot(ur),c=hi.dot(hi),h=hi.dot(ur),p=a*c-o*o;if(p===0)return r.set(0,0,0),null;const u=1/p,f=(c*l-o*h)*u,x=(a*h-o*l)*u;return r.set(1-f-x,x,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ui.x),l.addScaledVector(a,ui.y),l.addScaledVector(o,ui.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return gr.setScalar(0),vr.setScalar(0),xr.setScalar(0),gr.fromBufferAttribute(t,e),vr.fromBufferAttribute(t,i),xr.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(gr,r.x),a.addScaledVector(vr,r.y),a.addScaledVector(xr,r.z),a}static isFrontFacing(t,e,i,s){return Qe.subVectors(i,e),hi.subVectors(t,e),Qe.cross(hi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Qe.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),Qe.cross(hi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return $e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return $e.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return $e.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return $e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return $e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let a,o;hn.subVectors(s,i),un.subVectors(r,i),pr.subVectors(t,i);const l=hn.dot(pr),c=un.dot(pr);if(l<=0&&c<=0)return e.copy(i);fr.subVectors(t,s);const h=hn.dot(fr),p=un.dot(fr);if(h>=0&&p<=h)return e.copy(s);const u=l*p-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(hn,a);mr.subVectors(t,r);const f=hn.dot(mr),x=un.dot(mr);if(x>=0&&f<=x)return e.copy(r);const v=f*c-l*x;if(v<=0&&c>=0&&x<=0)return o=c/(c-x),e.copy(i).addScaledVector(un,o);const m=h*x-f*p;if(m<=0&&p-h>=0&&f-x>=0)return oo.subVectors(r,s),o=(p-h)/(p-h+(f-x)),e.copy(s).addScaledVector(oo,o);const d=1/(m+v+u);return a=v*d,o=u*d,e.copy(i).addScaledVector(hn,a).addScaledVector(un,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const gl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},vs={h:0,s:0,l:0};function yr(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class $t{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Kt.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Kt.workingColorSpace){if(t=Ra(t,1),e=Pe(e,0,1),i=Pe(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=yr(a,r,t+1/3),this.g=yr(a,r,t),this.b=yr(a,r,t-1/3)}return Kt.toWorkingColorSpace(this,s),this}setStyle(t,e=qe){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=qe){const i=gl[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=_i(t.r),this.g=_i(t.g),this.b=_i(t.b),this}copyLinearToSRGB(t){return this.r=Mn(t.r),this.g=Mn(t.g),this.b=Mn(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=qe){return Kt.fromWorkingColorSpace(Ae.copy(this),t),Math.round(Pe(Ae.r*255,0,255))*65536+Math.round(Pe(Ae.g*255,0,255))*256+Math.round(Pe(Ae.b*255,0,255))}getHexString(t=qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.fromWorkingColorSpace(Ae.copy(this),e);const i=Ae.r,s=Ae.g,r=Ae.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const p=a-o;switch(c=h<=.5?p/(a+o):p/(2-a-o),a){case i:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-i)/p+2;break;case r:l=(i-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Kt.workingColorSpace){return Kt.fromWorkingColorSpace(Ae.copy(this),e),t.r=Ae.r,t.g=Ae.g,t.b=Ae.b,t}getStyle(t=qe){Kt.fromWorkingColorSpace(Ae.copy(this),t);const e=Ae.r,i=Ae.g,s=Ae.b;return t!==qe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ai),this.setHSL(Ai.h+t,Ai.s+e,Ai.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ai),t.getHSL(vs);const i=Kn(Ai.h,vs.h,e),s=Kn(Ai.s,vs.s,e),r=Kn(Ai.l,vs.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ae=new $t;$t.NAMES=gl;let td=0;class Zi extends Pn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=yi(),this.name="",this.blending=Sn,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Or,this.blendDst=Ur,this.blendEquation=Wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $t(0,0,0),this.blendAlpha=0,this.depthFunc=Tn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=en,this.stencilZFail=en,this.stencilZPass=en,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Sn&&(i.blending=this.blending),this.side!==Ni&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Or&&(i.blendSrc=this.blendSrc),this.blendDst!==Ur&&(i.blendDst=this.blendDst),this.blendEquation!==Wi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Tn&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wa&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==en&&(i.stencilFail=this.stencilFail),this.stencilZFail!==en&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==en&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class me extends Zi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=jo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ve=new N,xs=new Ft;class ni{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=_a,this.updateRanges=[],this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)xs.fromBufferAttribute(this,e),xs.applyMatrix3(t),this.setXY(e,xs.x,xs.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ti(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ie(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ti(e,this.array)),e}setX(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ti(e,this.array)),e}setY(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ti(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ti(e,this.array)),e}setW(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array),s=ie(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array),s=ie(s,this.array),r=ie(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==_a&&(t.usage=this.usage),t}}class vl extends ni{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class xl extends ni{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ce extends ni{constructor(t,e,i){super(new Float32Array(t),e,i)}}let ed=0;const Xe=new ue,_r=new Ee,pn=new N,ze=new is,Hn=new is,Se=new N;class Ne extends Pn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ed++}),this.uuid=yi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(hl(t)?xl:vl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new kt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Xe.makeRotationFromQuaternion(t),this.applyMatrix4(Xe),this}rotateX(t){return Xe.makeRotationX(t),this.applyMatrix4(Xe),this}rotateY(t){return Xe.makeRotationY(t),this.applyMatrix4(Xe),this}rotateZ(t){return Xe.makeRotationZ(t),this.applyMatrix4(Xe),this}translate(t,e,i){return Xe.makeTranslation(t,e,i),this.applyMatrix4(Xe),this}scale(t,e,i){return Xe.makeScale(t,e,i),this.applyMatrix4(Xe),this}lookAt(t){return _r.lookAt(t),_r.updateMatrix(),this.applyMatrix4(_r.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pn).negate(),this.translate(pn.x,pn.y,pn.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ce(i,3))}else{for(let i=0,s=e.count;i<s;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new is);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];ze.setFromBufferAttribute(r),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,ze.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,ze.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint(ze.min),this.boundingBox.expandByPoint(ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const i=this.boundingSphere.center;if(ze.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Hn.setFromBufferAttribute(o),this.morphTargetsRelative?(Se.addVectors(ze.min,Hn.min),ze.expandByPoint(Se),Se.addVectors(ze.max,Hn.max),ze.expandByPoint(Se)):(ze.expandByPoint(Hn.min),ze.expandByPoint(Hn.max))}ze.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Se.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Se));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Se.fromBufferAttribute(o,c),l&&(pn.fromBufferAttribute(t,c),Se.add(pn)),s=Math.max(s,i.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ni(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<i.count;I++)o[I]=new N,l[I]=new N;const c=new N,h=new N,p=new N,u=new Ft,f=new Ft,x=new Ft,v=new N,m=new N;function d(I,b,g){c.fromBufferAttribute(i,I),h.fromBufferAttribute(i,b),p.fromBufferAttribute(i,g),u.fromBufferAttribute(r,I),f.fromBufferAttribute(r,b),x.fromBufferAttribute(r,g),h.sub(c),p.sub(c),f.sub(u),x.sub(u);const y=1/(f.x*x.y-x.x*f.y);isFinite(y)&&(v.copy(h).multiplyScalar(x.y).addScaledVector(p,-f.y).multiplyScalar(y),m.copy(p).multiplyScalar(f.x).addScaledVector(h,-x.x).multiplyScalar(y),o[I].add(v),o[b].add(v),o[g].add(v),l[I].add(m),l[b].add(m),l[g].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let I=0,b=S.length;I<b;++I){const g=S[I],y=g.start,A=g.count;for(let P=y,U=y+A;P<U;P+=3)d(t.getX(P+0),t.getX(P+1),t.getX(P+2))}const E=new N,_=new N,D=new N,R=new N;function L(I){D.fromBufferAttribute(s,I),R.copy(D);const b=o[I];E.copy(b),E.sub(D.multiplyScalar(D.dot(b))).normalize(),_.crossVectors(R,b);const y=_.dot(l[I])<0?-1:1;a.setXYZW(I,E.x,E.y,E.z,y)}for(let I=0,b=S.length;I<b;++I){const g=S[I],y=g.start,A=g.count;for(let P=y,U=y+A;P<U;P+=3)L(t.getX(P+0)),L(t.getX(P+1)),L(t.getX(P+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ni(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);const s=new N,r=new N,a=new N,o=new N,l=new N,c=new N,h=new N,p=new N;if(t)for(let u=0,f=t.count;u<f;u+=3){const x=t.getX(u+0),v=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,p=o.normalized,u=new c.constructor(l.length*h);let f=0,x=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let d=0;d<h;d++)u[x++]=c[f++]}return new ni(u,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ne,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,i);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,p=c.length;h<p;h++){const u=c[h],f=t(u,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let p=0,u=c.length;p<u;p++){const f=c[p];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],p=r[c];for(let u=0,f=p.length;u<f;u++)h.push(p[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lo=new ue,Fi=new fl,ys=new Qs,co=new N,_s=new N,bs=new N,Ss=new N,br=new N,Es=new N,ho=new N,Ms=new N;class Z extends Ee{constructor(t=new Ne,e=new me){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Es.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],p=r[l];h!==0&&(br.fromBufferAttribute(p,t),a?Es.addScaledVector(br,h):Es.addScaledVector(br.sub(e),h))}e.add(Es)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ys.copy(i.boundingSphere),ys.applyMatrix4(r),Fi.copy(t.ray).recast(t.near),!(ys.containsPoint(Fi.origin)===!1&&(Fi.intersectSphere(ys,co)===null||Fi.origin.distanceToSquared(co)>(t.far-t.near)**2))&&(lo.copy(r).invert(),Fi.copy(t.ray).applyMatrix4(lo),!(i.boundingBox!==null&&Fi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Fi)))}_computeIntersections(t,e,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,v=u.length;x<v;x++){const m=u[x],d=a[m.materialIndex],S=Math.max(m.start,f.start),E=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let _=S,D=E;_<D;_+=3){const R=o.getX(_),L=o.getX(_+1),I=o.getX(_+2);s=Ts(this,d,t,i,c,h,p,R,L,I),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const x=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=x,d=v;m<d;m+=3){const S=o.getX(m),E=o.getX(m+1),_=o.getX(m+2);s=Ts(this,a,t,i,c,h,p,S,E,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,v=u.length;x<v;x++){const m=u[x],d=a[m.materialIndex],S=Math.max(m.start,f.start),E=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=S,D=E;_<D;_+=3){const R=_,L=_+1,I=_+2;s=Ts(this,d,t,i,c,h,p,R,L,I),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const x=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=x,d=v;m<d;m+=3){const S=m,E=m+1,_=m+2;s=Ts(this,a,t,i,c,h,p,S,E,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function id(n,t,e,i,s,r,a,o){let l;if(t.side===Ue?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===Ni,o),l===null)return null;Ms.copy(o),Ms.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Ms);return c<e.near||c>e.far?null:{distance:c,point:Ms.clone(),object:n}}function Ts(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,_s),n.getVertexPosition(l,bs),n.getVertexPosition(c,Ss);const h=id(n,t,e,i,_s,bs,Ss,ho);if(h){const p=new N;$e.getBarycoord(ho,_s,bs,Ss,p),s&&(h.uv=$e.getInterpolatedAttribute(s,o,l,c,p,new Ft)),r&&(h.uv1=$e.getInterpolatedAttribute(r,o,l,c,p,new Ft)),a&&(h.normal=$e.getInterpolatedAttribute(a,o,l,c,p,new N),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new N,materialIndex:0};$e.getNormal(_s,bs,Ss,u.normal),h.face=u,h.barycoord=p}return h}class vt extends Ne{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],p=[];let u=0,f=0;x("z","y","x",-1,-1,i,e,t,a,r,0),x("z","y","x",1,-1,i,e,-t,a,r,1),x("x","z","y",1,1,t,i,e,s,a,2),x("x","z","y",1,-1,t,i,-e,s,a,3),x("x","y","z",1,-1,t,e,i,s,r,4),x("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ce(c,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(p,2));function x(v,m,d,S,E,_,D,R,L,I,b){const g=_/L,y=D/I,A=_/2,P=D/2,U=R/2,q=L+1,B=I+1;let Y=0,H=0;const nt=new N;for(let ct=0;ct<B;ct++){const bt=ct*y-P;for(let Ut=0;Ut<q;Ut++){const jt=Ut*g-A;nt[v]=jt*S,nt[m]=bt*E,nt[d]=U,c.push(nt.x,nt.y,nt.z),nt[v]=0,nt[m]=0,nt[d]=R>0?1:-1,h.push(nt.x,nt.y,nt.z),p.push(Ut/L),p.push(1-ct/I),Y+=1}}for(let ct=0;ct<I;ct++)for(let bt=0;bt<L;bt++){const Ut=u+bt+q*ct,jt=u+bt+q*(ct+1),j=u+(bt+1)+q*(ct+1),st=u+(bt+1)+q*ct;l.push(Ut,jt,st),l.push(jt,j,st),H+=6}o.addGroup(f,H,b),f+=H,u+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ln(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Ie(n){const t={};for(let e=0;e<n.length;e++){const i=Ln(n[e]);for(const s in i)t[s]=i[s]}return t}function nd(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function yl(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}const sd={clone:Ln,merge:Ie};var rd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ad=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Oi extends Zi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rd,this.fragmentShader=ad,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ln(t.uniforms),this.uniformsGroups=nd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class _l extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=vi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ri=new N,uo=new Ft,po=new Ft;class Ge extends _l{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Jn*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(jn*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Jn*2*Math.atan(Math.tan(jn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ri.x,Ri.y).multiplyScalar(-t/Ri.z),Ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ri.x,Ri.y).multiplyScalar(-t/Ri.z)}getViewSize(t,e){return this.getViewBounds(t,uo,po),e.subVectors(po,uo)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(jn*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const fn=-90,mn=1;class od extends Ee{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ge(fn,mn,t,e);s.layers=this.layers,this.add(s);const r=new Ge(fn,mn,t,e);r.layers=this.layers,this.add(r);const a=new Ge(fn,mn,t,e);a.layers=this.layers,this.add(a);const o=new Ge(fn,mn,t,e);o.layers=this.layers,this.add(o);const l=new Ge(fn,mn,t,e);l.layers=this.layers,this.add(l);const c=new Ge(fn,mn,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===vi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Vs)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,p=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,a),t.setRenderTarget(i,2,s),t.render(e,o),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(p,u,f),t.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class bl extends De{constructor(t,e,i,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:wn,super(t,e,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ld extends $i{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new bl(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:He}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new vt(5,5,5),r=new Oi({name:"CubemapFromEquirect",uniforms:Ln(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ue,blending:Pi});r.uniforms.tEquirect.value=e;const a=new Z(s,r),o=e.minFilter;return e.minFilter===mi&&(e.minFilter=He),new od(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}}const Sr=new N,cd=new N,dd=new kt;class Hi{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Sr.subVectors(i,e).cross(cd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Sr),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||dd.getNormalMatrix(t),s=this.coplanarPoint(Sr).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ki=new Qs,ws=new N;class La{constructor(t=new Hi,e=new Hi,i=new Hi,s=new Hi,r=new Hi,a=new Hi){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=vi){const i=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],p=s[6],u=s[7],f=s[8],x=s[9],v=s[10],m=s[11],d=s[12],S=s[13],E=s[14],_=s[15];if(i[0].setComponents(l-r,u-c,m-f,_-d).normalize(),i[1].setComponents(l+r,u+c,m+f,_+d).normalize(),i[2].setComponents(l+a,u+h,m+x,_+S).normalize(),i[3].setComponents(l-a,u-h,m-x,_-S).normalize(),i[4].setComponents(l-o,u-p,m-v,_-E).normalize(),e===vi)i[5].setComponents(l+o,u+p,m+v,_+E).normalize();else if(e===Vs)i[5].setComponents(o,p,v,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(t){return ki.center.set(0,0,0),ki.radius=.7071067811865476,ki.applyMatrix4(t.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(ws.x=s.normal.x>0?t.max.x:t.min.x,ws.y=s.normal.y>0?t.max.y:t.min.y,ws.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ws)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Sl(){let n=null,t=!1,e=null,i=null;function s(r,a){e(r,a),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function hd(n){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,p=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){const h=l.array,p=l.updateRanges;if(n.bindBuffer(c,o),p.length===0)n.bufferSubData(c,0,h);else{p.sort((f,x)=>f.start-x.start);let u=0;for(let f=1;f<p.length;f++){const x=p[u],v=p[f];v.start<=x.start+x.count+1?x.count=Math.max(x.count,v.start+v.count-x.start):(++u,p[u]=v)}p.length=u+1;for(let f=0,x=p.length;f<x;f++){const v=p[f];n.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class Ye extends Ne{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,p=t/o,u=e/l,f=[],x=[],v=[],m=[];for(let d=0;d<h;d++){const S=d*u-a;for(let E=0;E<c;E++){const _=E*p-r;x.push(_,-S,0),v.push(0,0,1),m.push(E/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let S=0;S<o;S++){const E=S+c*d,_=S+c*(d+1),D=S+1+c*(d+1),R=S+1+c*d;f.push(E,_,R),f.push(_,D,R)}this.setIndex(f),this.setAttribute("position",new ce(x,3)),this.setAttribute("normal",new ce(v,3)),this.setAttribute("uv",new ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ye(t.width,t.height,t.widthSegments,t.heightSegments)}}var ud=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pd=`#ifdef USE_ALPHAHASH
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
#endif`,fd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,md=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xd=`#ifdef USE_AOMAP
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
#endif`,yd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_d=`#ifdef USE_BATCHING
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
#endif`,bd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ed=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Md=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Td=`#ifdef USE_IRIDESCENCE
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
#endif`,wd=`#ifdef USE_BUMPMAP
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
#endif`,Cd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ad=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ld=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Id=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Pd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Dd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Nd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Od=`#define PI 3.141592653589793
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
} // validated`,Ud=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bd=`vec3 transformedNormal = objectNormal;
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
#endif`,Fd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wd=`#ifdef USE_ENVMAP
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
#endif`,Xd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qd=`#ifdef USE_ENVMAP
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
#endif`,Yd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$d=`#ifdef USE_ENVMAP
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
#endif`,Zd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jd=`#ifdef USE_GRADIENTMAP
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
}`,th=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ih=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nh=`uniform bool receiveShadow;
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
#endif`,sh=`#ifdef USE_ENVMAP
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
#endif`,rh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ah=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,oh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ch=`PhysicalMaterial material;
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
#endif`,dh=`struct PhysicalMaterial {
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
}`,hh=`
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
#endif`,uh=`#if defined( RE_IndirectDiffuse )
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
#endif`,ph=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_h=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bh=`#if defined( USE_POINTS_UV )
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
#endif`,Sh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Eh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Th=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ch=`#ifdef USE_MORPHTARGETS
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
#endif`,Ah=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Lh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ih=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ph=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nh=`#ifdef USE_NORMALMAP
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
#endif`,Oh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Uh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zh=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Gh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$h=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jh=`float getShadowMask() {
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
}`,Kh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qh=`#ifdef USE_SKINNING
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
#endif`,Jh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tu=`#ifdef USE_SKINNING
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
#endif`,eu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,su=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ru=`#ifdef USE_TRANSMISSION
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
#endif`,au=`#ifdef USE_TRANSMISSION
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
#endif`,ou=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,du=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uu=`uniform sampler2D t2D;
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
}`,pu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fu=`#ifdef ENVMAP_TYPE_CUBE
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
}`,mu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vu=`#include <common>
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
}`,xu=`#if DEPTH_PACKING == 3200
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
}`,yu=`#define DISTANCE
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
}`,_u=`#define DISTANCE
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
}`,bu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Su=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eu=`uniform float scale;
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
}`,Mu=`uniform vec3 diffuse;
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
}`,Tu=`#include <common>
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
}`,wu=`uniform vec3 diffuse;
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
}`,Cu=`#define LAMBERT
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
}`,Au=`#define LAMBERT
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
}`,Ru=`#define MATCAP
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
}`,Lu=`#define MATCAP
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
}`,Iu=`#define NORMAL
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
}`,Pu=`#define NORMAL
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
}`,Du=`#define PHONG
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
}`,Nu=`#define PHONG
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
}`,Ou=`#define STANDARD
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
}`,Uu=`#define STANDARD
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
}`,Bu=`#define TOON
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
}`,Fu=`#define TOON
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
}`,ku=`uniform float size;
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
}`,zu=`uniform vec3 diffuse;
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
}`,Gu=`#include <common>
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
}`,Hu=`uniform vec3 color;
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
}`,Vu=`uniform float rotation;
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
}`,Wu=`uniform vec3 diffuse;
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
}`,Ht={alphahash_fragment:ud,alphahash_pars_fragment:pd,alphamap_fragment:fd,alphamap_pars_fragment:md,alphatest_fragment:gd,alphatest_pars_fragment:vd,aomap_fragment:xd,aomap_pars_fragment:yd,batching_pars_vertex:_d,batching_vertex:bd,begin_vertex:Sd,beginnormal_vertex:Ed,bsdfs:Md,iridescence_fragment:Td,bumpmap_pars_fragment:wd,clipping_planes_fragment:Cd,clipping_planes_pars_fragment:Ad,clipping_planes_pars_vertex:Rd,clipping_planes_vertex:Ld,color_fragment:Id,color_pars_fragment:Pd,color_pars_vertex:Dd,color_vertex:Nd,common:Od,cube_uv_reflection_fragment:Ud,defaultnormal_vertex:Bd,displacementmap_pars_vertex:Fd,displacementmap_vertex:kd,emissivemap_fragment:zd,emissivemap_pars_fragment:Gd,colorspace_fragment:Hd,colorspace_pars_fragment:Vd,envmap_fragment:Wd,envmap_common_pars_fragment:Xd,envmap_pars_fragment:qd,envmap_pars_vertex:Yd,envmap_physical_pars_fragment:sh,envmap_vertex:$d,fog_vertex:Zd,fog_pars_vertex:jd,fog_fragment:Kd,fog_pars_fragment:Qd,gradientmap_pars_fragment:Jd,lightmap_pars_fragment:th,lights_lambert_fragment:eh,lights_lambert_pars_fragment:ih,lights_pars_begin:nh,lights_toon_fragment:rh,lights_toon_pars_fragment:ah,lights_phong_fragment:oh,lights_phong_pars_fragment:lh,lights_physical_fragment:ch,lights_physical_pars_fragment:dh,lights_fragment_begin:hh,lights_fragment_maps:uh,lights_fragment_end:ph,logdepthbuf_fragment:fh,logdepthbuf_pars_fragment:mh,logdepthbuf_pars_vertex:gh,logdepthbuf_vertex:vh,map_fragment:xh,map_pars_fragment:yh,map_particle_fragment:_h,map_particle_pars_fragment:bh,metalnessmap_fragment:Sh,metalnessmap_pars_fragment:Eh,morphinstance_vertex:Mh,morphcolor_vertex:Th,morphnormal_vertex:wh,morphtarget_pars_vertex:Ch,morphtarget_vertex:Ah,normal_fragment_begin:Rh,normal_fragment_maps:Lh,normal_pars_fragment:Ih,normal_pars_vertex:Ph,normal_vertex:Dh,normalmap_pars_fragment:Nh,clearcoat_normal_fragment_begin:Oh,clearcoat_normal_fragment_maps:Uh,clearcoat_pars_fragment:Bh,iridescence_pars_fragment:Fh,opaque_fragment:kh,packing:zh,premultiplied_alpha_fragment:Gh,project_vertex:Hh,dithering_fragment:Vh,dithering_pars_fragment:Wh,roughnessmap_fragment:Xh,roughnessmap_pars_fragment:qh,shadowmap_pars_fragment:Yh,shadowmap_pars_vertex:$h,shadowmap_vertex:Zh,shadowmask_pars_fragment:jh,skinbase_vertex:Kh,skinning_pars_vertex:Qh,skinning_vertex:Jh,skinnormal_vertex:tu,specularmap_fragment:eu,specularmap_pars_fragment:iu,tonemapping_fragment:nu,tonemapping_pars_fragment:su,transmission_fragment:ru,transmission_pars_fragment:au,uv_pars_fragment:ou,uv_pars_vertex:lu,uv_vertex:cu,worldpos_vertex:du,background_vert:hu,background_frag:uu,backgroundCube_vert:pu,backgroundCube_frag:fu,cube_vert:mu,cube_frag:gu,depth_vert:vu,depth_frag:xu,distanceRGBA_vert:yu,distanceRGBA_frag:_u,equirect_vert:bu,equirect_frag:Su,linedashed_vert:Eu,linedashed_frag:Mu,meshbasic_vert:Tu,meshbasic_frag:wu,meshlambert_vert:Cu,meshlambert_frag:Au,meshmatcap_vert:Ru,meshmatcap_frag:Lu,meshnormal_vert:Iu,meshnormal_frag:Pu,meshphong_vert:Du,meshphong_frag:Nu,meshphysical_vert:Ou,meshphysical_frag:Uu,meshtoon_vert:Bu,meshtoon_frag:Fu,points_vert:ku,points_frag:zu,shadow_vert:Gu,shadow_frag:Hu,sprite_vert:Vu,sprite_frag:Wu},ht={common:{diffuse:{value:new $t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new $t(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},ri={basic:{uniforms:Ie([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:Ie([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new $t(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:Ie([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new $t(0)},specular:{value:new $t(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:Ie([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new $t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:Ie([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new $t(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:Ie([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:Ie([ht.points,ht.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:Ie([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:Ie([ht.common,ht.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:Ie([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:Ie([ht.sprite,ht.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:Ie([ht.common,ht.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:Ie([ht.lights,ht.fog,{color:{value:new $t(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};ri.physical={uniforms:Ie([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new $t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new $t(0)},specularColor:{value:new $t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};const Cs={r:0,b:0,g:0},zi=new ai,Xu=new ue;function qu(n,t,e,i,s,r,a){const o=new $t(0);let l=r===!0?0:1,c,h,p=null,u=0,f=null;function x(S){let E=S.isScene===!0?S.background:null;return E&&E.isTexture&&(E=(S.backgroundBlurriness>0?e:t).get(E)),E}function v(S){let E=!1;const _=x(S);_===null?d(o,l):_&&_.isColor&&(d(_,1),E=!0);const D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(S,E){const _=x(E);_&&(_.isCubeTexture||_.mapping===js)?(h===void 0&&(h=new Z(new vt(1,1,1),new Oi({name:"BackgroundCubeMaterial",uniforms:Ln(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:Ue,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,R,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),zi.copy(E.backgroundRotation),zi.x*=-1,zi.y*=-1,zi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Xu.makeRotationFromEuler(zi)),h.material.toneMapped=Kt.getTransfer(_.colorSpace)!==se,(p!==_||u!==_.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,p=_,u=_.version,f=n.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Z(new Ye(2,2),new Oi({name:"BackgroundMaterial",uniforms:Ln(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Kt.getTransfer(_.colorSpace)!==se,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(p!==_||u!==_.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,p=_,u=_.version,f=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function d(S,E){S.getRGB(Cs,yl(n)),i.buffers.color.setClear(Cs.r,Cs.g,Cs.b,E,a)}return{getClearColor:function(){return o},setClearColor:function(S,E=1){o.set(S),l=E,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,d(o,l)},render:v,addToRenderList:m}}function Yu(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null);let r=s,a=!1;function o(g,y,A,P,U){let q=!1;const B=p(P,A,y);r!==B&&(r=B,c(r.object)),q=f(g,P,A,U),q&&x(g,P,A,U),U!==null&&t.update(U,n.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,_(g,y,A,P),U!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return n.createVertexArray()}function c(g){return n.bindVertexArray(g)}function h(g){return n.deleteVertexArray(g)}function p(g,y,A){const P=A.wireframe===!0;let U=i[g.id];U===void 0&&(U={},i[g.id]=U);let q=U[y.id];q===void 0&&(q={},U[y.id]=q);let B=q[P];return B===void 0&&(B=u(l()),q[P]=B),B}function u(g){const y=[],A=[],P=[];for(let U=0;U<e;U++)y[U]=0,A[U]=0,P[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:y,enabledAttributes:A,attributeDivisors:P,object:g,attributes:{},index:null}}function f(g,y,A,P){const U=r.attributes,q=y.attributes;let B=0;const Y=A.getAttributes();for(const H in Y)if(Y[H].location>=0){const ct=U[H];let bt=q[H];if(bt===void 0&&(H==="instanceMatrix"&&g.instanceMatrix&&(bt=g.instanceMatrix),H==="instanceColor"&&g.instanceColor&&(bt=g.instanceColor)),ct===void 0||ct.attribute!==bt||bt&&ct.data!==bt.data)return!0;B++}return r.attributesNum!==B||r.index!==P}function x(g,y,A,P){const U={},q=y.attributes;let B=0;const Y=A.getAttributes();for(const H in Y)if(Y[H].location>=0){let ct=q[H];ct===void 0&&(H==="instanceMatrix"&&g.instanceMatrix&&(ct=g.instanceMatrix),H==="instanceColor"&&g.instanceColor&&(ct=g.instanceColor));const bt={};bt.attribute=ct,ct&&ct.data&&(bt.data=ct.data),U[H]=bt,B++}r.attributes=U,r.attributesNum=B,r.index=P}function v(){const g=r.newAttributes;for(let y=0,A=g.length;y<A;y++)g[y]=0}function m(g){d(g,0)}function d(g,y){const A=r.newAttributes,P=r.enabledAttributes,U=r.attributeDivisors;A[g]=1,P[g]===0&&(n.enableVertexAttribArray(g),P[g]=1),U[g]!==y&&(n.vertexAttribDivisor(g,y),U[g]=y)}function S(){const g=r.newAttributes,y=r.enabledAttributes;for(let A=0,P=y.length;A<P;A++)y[A]!==g[A]&&(n.disableVertexAttribArray(A),y[A]=0)}function E(g,y,A,P,U,q,B){B===!0?n.vertexAttribIPointer(g,y,A,U,q):n.vertexAttribPointer(g,y,A,P,U,q)}function _(g,y,A,P){v();const U=P.attributes,q=A.getAttributes(),B=y.defaultAttributeValues;for(const Y in q){const H=q[Y];if(H.location>=0){let nt=U[Y];if(nt===void 0&&(Y==="instanceMatrix"&&g.instanceMatrix&&(nt=g.instanceMatrix),Y==="instanceColor"&&g.instanceColor&&(nt=g.instanceColor)),nt!==void 0){const ct=nt.normalized,bt=nt.itemSize,Ut=t.get(nt);if(Ut===void 0)continue;const jt=Ut.buffer,j=Ut.type,st=Ut.bytesPerElement,Et=j===n.INT||j===n.UNSIGNED_INT||nt.gpuType===Ea;if(nt.isInterleavedBufferAttribute){const ot=nt.data,Ct=ot.stride,Pt=nt.offset;if(ot.isInstancedInterleavedBuffer){for(let Nt=0;Nt<H.locationSize;Nt++)d(H.location+Nt,ot.meshPerAttribute);g.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Nt=0;Nt<H.locationSize;Nt++)m(H.location+Nt);n.bindBuffer(n.ARRAY_BUFFER,jt);for(let Nt=0;Nt<H.locationSize;Nt++)E(H.location+Nt,bt/H.locationSize,j,ct,Ct*st,(Pt+bt/H.locationSize*Nt)*st,Et)}else{if(nt.isInstancedBufferAttribute){for(let ot=0;ot<H.locationSize;ot++)d(H.location+ot,nt.meshPerAttribute);g.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let ot=0;ot<H.locationSize;ot++)m(H.location+ot);n.bindBuffer(n.ARRAY_BUFFER,jt);for(let ot=0;ot<H.locationSize;ot++)E(H.location+ot,bt/H.locationSize,j,ct,bt*st,bt/H.locationSize*ot*st,Et)}}else if(B!==void 0){const ct=B[Y];if(ct!==void 0)switch(ct.length){case 2:n.vertexAttrib2fv(H.location,ct);break;case 3:n.vertexAttrib3fv(H.location,ct);break;case 4:n.vertexAttrib4fv(H.location,ct);break;default:n.vertexAttrib1fv(H.location,ct)}}}}S()}function D(){I();for(const g in i){const y=i[g];for(const A in y){const P=y[A];for(const U in P)h(P[U].object),delete P[U];delete y[A]}delete i[g]}}function R(g){if(i[g.id]===void 0)return;const y=i[g.id];for(const A in y){const P=y[A];for(const U in P)h(P[U].object),delete P[U];delete y[A]}delete i[g.id]}function L(g){for(const y in i){const A=i[y];if(A[g.id]===void 0)continue;const P=A[g.id];for(const U in P)h(P[U].object),delete P[U];delete A[g.id]}}function I(){b(),a=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:b,dispose:D,releaseStatesOfGeometry:R,releaseStatesOfProgram:L,initAttributes:v,enableAttribute:m,disableUnusedAttributes:S}}function $u(n,t,e){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function a(c,h,p){p!==0&&(n.drawArraysInstanced(i,c,h,p),e.update(h,i,p))}function o(c,h,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,p);let f=0;for(let x=0;x<p;x++)f+=h[x];e.update(f,i,1)}function l(c,h,p,u){if(p===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let x=0;x<c.length;x++)a(c[x],h[x],u[x]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,p);let x=0;for(let v=0;v<p;v++)x+=h[v]*u[v];e.update(x,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Zu(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(L){return!(L!==ei&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){const I=L===ts&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==bi&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==gi&&!I)}function l(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const p=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=x>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:x,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:_,vertexTextures:D,maxSamples:R}}function ju(n){const t=this;let e=null,i=0,s=!1,r=!1;const a=new Hi,o=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){const f=p.length!==0||u||i!==0||s;return s=u,i=p.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,u){e=h(p,u,0)},this.setState=function(p,u,f){const x=p.clippingPlanes,v=p.clipIntersection,m=p.clipShadows,d=n.get(p);if(!s||x===null||x.length===0||r&&!m)r?h(null):c();else{const S=r?0:i,E=S*4;let _=d.clippingState||null;l.value=_,_=h(x,u,E,f);for(let D=0;D!==E;++D)_[D]=e[D];d.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(p,u,f,x){const v=p!==null?p.length:0;let m=null;if(v!==0){if(m=l.value,x!==!0||m===null){const d=f+v*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<d)&&(m=new Float32Array(d));for(let E=0,_=f;E!==v;++E,_+=4)a.copy(p[E]).applyMatrix4(S,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Ku(n){let t=new WeakMap;function e(a,o){return o===Wr?a.mapping=wn:o===Xr&&(a.mapping=Cn),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Wr||o===Xr)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new ld(l.height);return c.fromEquirectangularTexture(n,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class El extends _l{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const bn=4,fo=[.125,.215,.35,.446,.526,.582],Xi=20,Er=new El,mo=new $t;let Mr=null,Tr=0,wr=0,Cr=!1;const Vi=(1+Math.sqrt(5))/2,gn=1/Vi,go=[new N(-Vi,gn,0),new N(Vi,gn,0),new N(-gn,0,Vi),new N(gn,0,Vi),new N(0,Vi,-gn),new N(0,Vi,gn),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class vo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Mr=this._renderer.getRenderTarget(),Tr=this._renderer.getActiveCubeFace(),wr=this._renderer.getActiveMipmapLevel(),Cr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_o(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Mr,Tr,wr),this._renderer.xr.enabled=Cr,t.scissorTest=!1,As(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===wn||t.mapping===Cn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Mr=this._renderer.getRenderTarget(),Tr=this._renderer.getActiveCubeFace(),wr=this._renderer.getActiveMipmapLevel(),Cr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:He,minFilter:He,generateMipmaps:!1,type:ts,format:ei,colorSpace:In,depthBuffer:!1},s=xo(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xo(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qu(r)),this._blurMaterial=Ju(r,t,e)}return s}_compileMaterial(t){const e=new Z(this._lodPlanes[0],t);this._renderer.compile(e,Er)}_sceneToCubeUV(t,e,i,s){const o=new Ge(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,u=h.toneMapping;h.getClearColor(mo),h.toneMapping=Di,h.autoClear=!1;const f=new me({name:"PMREM.Background",side:Ue,depthWrite:!1,depthTest:!1}),x=new Z(new vt,f);let v=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,v=!0):(f.color.copy(mo),v=!0);for(let d=0;d<6;d++){const S=d%3;S===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):S===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const E=this._cubeSize;As(s,S*E,d>2?E:0,E,E),h.setRenderTarget(s),v&&h.render(x,o),h.render(t,o)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=u,h.autoClear=p,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===wn||t.mapping===Cn;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=_o()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yo());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Z(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;As(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Er)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=go[(s-r-1)%go.length];this._blur(t,r-1,r,a,o)}e.autoClear=i}_blur(t,e,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,p=new Z(this._lodPlanes[s],c),u=c.uniforms,f=this._sizeLods[i]-1,x=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Xi-1),v=r/x,m=isFinite(r)?1+Math.floor(h*v):Xi;m>Xi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Xi}`);const d=[];let S=0;for(let L=0;L<Xi;++L){const I=L/v,b=Math.exp(-I*I/2);d.push(b),L===0?S+=b:L<m&&(S+=2*b)}for(let L=0;L<d.length;L++)d[L]=d[L]/S;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=d,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:E}=this;u.dTheta.value=x,u.mipInt.value=E-i;const _=this._sizeLods[s],D=3*_*(s>E-bn?s-E+bn:0),R=4*(this._cubeSize-_);As(e,D,R,3*_,2*_),l.setRenderTarget(e),l.render(p,Er)}}function Qu(n){const t=[],e=[],i=[];let s=n;const r=n-bn+1+fo.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>n-bn?l=fo[a-n+bn-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,p=1+c,u=[h,h,p,h,p,p,h,h,p,p,h,p],f=6,x=6,v=3,m=2,d=1,S=new Float32Array(v*x*f),E=new Float32Array(m*x*f),_=new Float32Array(d*x*f);for(let R=0;R<f;R++){const L=R%3*2/3-1,I=R>2?0:-1,b=[L,I,0,L+2/3,I,0,L+2/3,I+1,0,L,I,0,L+2/3,I+1,0,L,I+1,0];S.set(b,v*x*R),E.set(u,m*x*R);const g=[R,R,R,R,R,R];_.set(g,d*x*R)}const D=new Ne;D.setAttribute("position",new ni(S,v)),D.setAttribute("uv",new ni(E,m)),D.setAttribute("faceIndex",new ni(_,d)),t.push(D),s>bn&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function xo(n,t,e){const i=new $i(n,t,e);return i.texture.mapping=js,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function As(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Ju(n,t,e){const i=new Float32Array(Xi),s=new N(0,1,0);return new Oi({name:"SphericalGaussianBlur",defines:{n:Xi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ia(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function yo(){return new Oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ia(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function _o(){return new Oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ia(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Ia(){return`

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
	`}function tp(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Wr||l===Xr,h=l===wn||l===Cn;if(c||h){let p=t.get(o);const u=p!==void 0?p.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new vo(n)),p=c?e.fromEquirectangular(o,p):e.fromCubemap(o,p),p.texture.pmremVersion=o.pmremVersion,t.set(o,p),p.texture;if(p!==void 0)return p.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new vo(n)),p=c?e.fromEquirectangular(o):e.fromCubemap(o),p.texture.pmremVersion=o.pmremVersion,t.set(o,p),o.addEventListener("dispose",r),p.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function ep(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&$n("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function ip(n,t,e,i){const s={},r=new WeakMap;function a(p){const u=p.target;u.index!==null&&t.remove(u.index);for(const x in u.attributes)t.remove(u.attributes[x]);for(const x in u.morphAttributes){const v=u.morphAttributes[x];for(let m=0,d=v.length;m<d;m++)t.remove(v[m])}u.removeEventListener("dispose",a),delete s[u.id];const f=r.get(u);f&&(t.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(p,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(p){const u=p.attributes;for(const x in u)t.update(u[x],n.ARRAY_BUFFER);const f=p.morphAttributes;for(const x in f){const v=f[x];for(let m=0,d=v.length;m<d;m++)t.update(v[m],n.ARRAY_BUFFER)}}function c(p){const u=[],f=p.index,x=p.attributes.position;let v=0;if(f!==null){const S=f.array;v=f.version;for(let E=0,_=S.length;E<_;E+=3){const D=S[E+0],R=S[E+1],L=S[E+2];u.push(D,R,R,L,L,D)}}else if(x!==void 0){const S=x.array;v=x.version;for(let E=0,_=S.length/3-1;E<_;E+=3){const D=E+0,R=E+1,L=E+2;u.push(D,R,R,L,L,D)}}else return;const m=new(hl(u)?xl:vl)(u,1);m.version=v;const d=r.get(p);d&&t.remove(d),r.set(p,m)}function h(p){const u=r.get(p);if(u){const f=p.index;f!==null&&u.version<f.version&&c(p)}else c(p);return r.get(p)}return{get:o,update:l,getWireframeAttribute:h}}function np(n,t,e){let i;function s(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,f){n.drawElements(i,f,r,u*a),e.update(f,i,1)}function c(u,f,x){x!==0&&(n.drawElementsInstanced(i,f,r,u*a,x),e.update(f,i,x))}function h(u,f,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,u,0,x);let m=0;for(let d=0;d<x;d++)m+=f[d];e.update(m,i,1)}function p(u,f,x,v){if(x===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<u.length;d++)c(u[d]/a,f[d],v[d]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,u,0,v,0,x);let d=0;for(let S=0;S<x;S++)d+=f[S]*v[S];e.update(d,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function sp(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function rp(n,t,e){const i=new WeakMap,s=new ae;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0;let u=i.get(o);if(u===void 0||u.count!==p){let g=function(){I.dispose(),i.delete(o),o.removeEventListener("dispose",g)};var f=g;u!==void 0&&u.texture.dispose();const x=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let _=0;x===!0&&(_=1),v===!0&&(_=2),m===!0&&(_=3);let D=o.attributes.position.count*_,R=1;D>t.maxTextureSize&&(R=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const L=new Float32Array(D*R*4*p),I=new pl(L,D,R,p);I.type=gi,I.needsUpdate=!0;const b=_*4;for(let y=0;y<p;y++){const A=d[y],P=S[y],U=E[y],q=D*R*4*y;for(let B=0;B<A.count;B++){const Y=B*b;x===!0&&(s.fromBufferAttribute(A,B),L[q+Y+0]=s.x,L[q+Y+1]=s.y,L[q+Y+2]=s.z,L[q+Y+3]=0),v===!0&&(s.fromBufferAttribute(P,B),L[q+Y+4]=s.x,L[q+Y+5]=s.y,L[q+Y+6]=s.z,L[q+Y+7]=0),m===!0&&(s.fromBufferAttribute(U,B),L[q+Y+8]=s.x,L[q+Y+9]=s.y,L[q+Y+10]=s.z,L[q+Y+11]=U.itemSize===4?s.w:1)}}u={count:p,texture:I,size:new Ft(D,R)},i.set(o,u),o.addEventListener("dispose",g)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let x=0;for(let m=0;m<c.length;m++)x+=c[m];const v=o.morphTargetsRelative?1:1-x;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function ap(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,p=t.get(l,h);if(s.get(p)!==c&&(t.update(p),s.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return p}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class Ml extends De{constructor(t,e,i,s,r,a,o,l,c,h=En){if(h!==En&&h!==Rn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===En&&(i=Yi),i===void 0&&h===Rn&&(i=An),super(null,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:ii,this.minFilter=l!==void 0?l:ii,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Tl=new De,bo=new Ml(1,1),wl=new pl,Cl=new qc,Al=new bl,So=[],Eo=[],Mo=new Float32Array(16),To=new Float32Array(9),wo=new Float32Array(4);function Dn(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=So[s];if(r===void 0&&(r=new Float32Array(s),So[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function _e(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function be(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Js(n,t){let e=Eo[t];e===void 0&&(e=new Int32Array(t),Eo[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function op(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function lp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;n.uniform2fv(this.addr,t),be(e,t)}}function cp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_e(e,t))return;n.uniform3fv(this.addr,t),be(e,t)}}function dp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;n.uniform4fv(this.addr,t),be(e,t)}}function hp(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(_e(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),be(e,t)}else{if(_e(e,i))return;wo.set(i),n.uniformMatrix2fv(this.addr,!1,wo),be(e,i)}}function up(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(_e(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),be(e,t)}else{if(_e(e,i))return;To.set(i),n.uniformMatrix3fv(this.addr,!1,To),be(e,i)}}function pp(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(_e(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),be(e,t)}else{if(_e(e,i))return;Mo.set(i),n.uniformMatrix4fv(this.addr,!1,Mo),be(e,i)}}function fp(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function mp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;n.uniform2iv(this.addr,t),be(e,t)}}function gp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;n.uniform3iv(this.addr,t),be(e,t)}}function vp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;n.uniform4iv(this.addr,t),be(e,t)}}function xp(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function yp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;n.uniform2uiv(this.addr,t),be(e,t)}}function _p(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;n.uniform3uiv(this.addr,t),be(e,t)}}function bp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;n.uniform4uiv(this.addr,t),be(e,t)}}function Sp(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(bo.compareFunction=dl,r=bo):r=Tl,e.setTexture2D(t||r,s)}function Ep(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Cl,s)}function Mp(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Al,s)}function Tp(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||wl,s)}function wp(n){switch(n){case 5126:return op;case 35664:return lp;case 35665:return cp;case 35666:return dp;case 35674:return hp;case 35675:return up;case 35676:return pp;case 5124:case 35670:return fp;case 35667:case 35671:return mp;case 35668:case 35672:return gp;case 35669:case 35673:return vp;case 5125:return xp;case 36294:return yp;case 36295:return _p;case 36296:return bp;case 35678:case 36198:case 36298:case 36306:case 35682:return Sp;case 35679:case 36299:case 36307:return Ep;case 35680:case 36300:case 36308:case 36293:return Mp;case 36289:case 36303:case 36311:case 36292:return Tp}}function Cp(n,t){n.uniform1fv(this.addr,t)}function Ap(n,t){const e=Dn(t,this.size,2);n.uniform2fv(this.addr,e)}function Rp(n,t){const e=Dn(t,this.size,3);n.uniform3fv(this.addr,e)}function Lp(n,t){const e=Dn(t,this.size,4);n.uniform4fv(this.addr,e)}function Ip(n,t){const e=Dn(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Pp(n,t){const e=Dn(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Dp(n,t){const e=Dn(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Np(n,t){n.uniform1iv(this.addr,t)}function Op(n,t){n.uniform2iv(this.addr,t)}function Up(n,t){n.uniform3iv(this.addr,t)}function Bp(n,t){n.uniform4iv(this.addr,t)}function Fp(n,t){n.uniform1uiv(this.addr,t)}function kp(n,t){n.uniform2uiv(this.addr,t)}function zp(n,t){n.uniform3uiv(this.addr,t)}function Gp(n,t){n.uniform4uiv(this.addr,t)}function Hp(n,t,e){const i=this.cache,s=t.length,r=Js(e,s);_e(i,r)||(n.uniform1iv(this.addr,r),be(i,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Tl,r[a])}function Vp(n,t,e){const i=this.cache,s=t.length,r=Js(e,s);_e(i,r)||(n.uniform1iv(this.addr,r),be(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Cl,r[a])}function Wp(n,t,e){const i=this.cache,s=t.length,r=Js(e,s);_e(i,r)||(n.uniform1iv(this.addr,r),be(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Al,r[a])}function Xp(n,t,e){const i=this.cache,s=t.length,r=Js(e,s);_e(i,r)||(n.uniform1iv(this.addr,r),be(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||wl,r[a])}function qp(n){switch(n){case 5126:return Cp;case 35664:return Ap;case 35665:return Rp;case 35666:return Lp;case 35674:return Ip;case 35675:return Pp;case 35676:return Dp;case 5124:case 35670:return Np;case 35667:case 35671:return Op;case 35668:case 35672:return Up;case 35669:case 35673:return Bp;case 5125:return Fp;case 36294:return kp;case 36295:return zp;case 36296:return Gp;case 35678:case 36198:case 36298:case 36306:case 35682:return Hp;case 35679:case 36299:case 36307:return Vp;case 35680:case 36300:case 36308:case 36293:return Wp;case 36289:case 36303:case 36311:case 36292:return Xp}}class Yp{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=wp(e.type)}}class $p{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=qp(e.type)}}class Zp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],i)}}}const Ar=/(\w+)(\])?(\[|\.)?/g;function Co(n,t){n.seq.push(t),n.map[t.id]=t}function jp(n,t,e){const i=n.name,s=i.length;for(Ar.lastIndex=0;;){const r=Ar.exec(i),a=Ar.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Co(e,c===void 0?new Yp(o,n,t):new $p(o,n,t));break}else{let p=e.map[o];p===void 0&&(p=new Zp(o),Co(e,p)),e=p}}}class Hs{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);jp(r,a,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&i.push(a)}return i}}function Ao(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Kp=37297;let Qp=0;function Jp(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const Ro=new kt;function tf(n){Kt._getMatrix(Ro,Kt.workingColorSpace,n);const t=`mat3( ${Ro.elements.map(e=>e.toFixed(4))} )`;switch(Kt.getTransfer(n)){case Ks:return[t,"LinearTransferOETF"];case se:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Lo(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Jp(n.getShaderSource(t),a)}else return s}function ef(n,t){const e=tf(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function nf(n,t){let e;switch(t){case rc:e="Linear";break;case ac:e="Reinhard";break;case oc:e="Cineon";break;case Ko:e="ACESFilmic";break;case cc:e="AgX";break;case dc:e="Neutral";break;case lc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Rs=new N;function sf(){Kt.getLuminanceCoefficients(Rs);const n=Rs.x.toFixed(4),t=Rs.y.toFixed(4),e=Rs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rf(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zn).join(`
`)}function af(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function of(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Zn(n){return n!==""}function Io(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Po(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const lf=/^[ \t]*#include +<([\w\d./]+)>/gm;function ba(n){return n.replace(lf,df)}const cf=new Map;function df(n,t){let e=Ht[t];if(e===void 0){const i=cf.get(t);if(i!==void 0)e=Ht[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return ba(e)}const hf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Do(n){return n.replace(hf,uf)}function uf(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function No(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function pf(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===$o?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Zo?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===fi&&(t="SHADOWMAP_TYPE_VSM"),t}function ff(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case wn:case Cn:t="ENVMAP_TYPE_CUBE";break;case js:t="ENVMAP_TYPE_CUBE_UV";break}return t}function mf(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Cn:t="ENVMAP_MODE_REFRACTION";break}return t}function gf(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case jo:t="ENVMAP_BLENDING_MULTIPLY";break;case nc:t="ENVMAP_BLENDING_MIX";break;case sc:t="ENVMAP_BLENDING_ADD";break}return t}function vf(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function xf(n,t,e,i){const s=n.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=pf(e),c=ff(e),h=mf(e),p=gf(e),u=vf(e),f=rf(e),x=af(r),v=s.createProgram();let m,d,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Zn).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Zn).join(`
`),d.length>0&&(d+=`
`)):(m=[No(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zn).join(`
`),d=[No(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Di?"#define TONE_MAPPING":"",e.toneMapping!==Di?Ht.tonemapping_pars_fragment:"",e.toneMapping!==Di?nf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,ef("linearToOutputTexel",e.outputColorSpace),sf(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Zn).join(`
`)),a=ba(a),a=Io(a,e),a=Po(a,e),o=ba(o),o=Io(o,e),o=Po(o,e),a=Do(a),o=Do(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===Xa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Xa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const E=S+m+a,_=S+d+o,D=Ao(s,s.VERTEX_SHADER,E),R=Ao(s,s.FRAGMENT_SHADER,_);s.attachShader(v,D),s.attachShader(v,R),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function L(y){if(n.debug.checkShaderErrors){const A=s.getProgramInfoLog(v).trim(),P=s.getShaderInfoLog(D).trim(),U=s.getShaderInfoLog(R).trim();let q=!0,B=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,D,R);else{const Y=Lo(s,D,"vertex"),H=Lo(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+y.name+`
Material Type: `+y.type+`

Program Info Log: `+A+`
`+Y+`
`+H)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(P===""||U==="")&&(B=!1);B&&(y.diagnostics={runnable:q,programLog:A,vertexShader:{log:P,prefix:m},fragmentShader:{log:U,prefix:d}})}s.deleteShader(D),s.deleteShader(R),I=new Hs(s,v),b=of(s,v)}let I;this.getUniforms=function(){return I===void 0&&L(this),I};let b;this.getAttributes=function(){return b===void 0&&L(this),b};let g=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return g===!1&&(g=s.getProgramParameter(v,Kp)),g},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Qp++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=D,this.fragmentShader=R,this}let yf=0;class _f{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new bf(t),e.set(t,i)),i}}class bf{constructor(t){this.id=yf++,this.code=t,this.usedTimes=0}}function Sf(n,t,e,i,s,r,a){const o=new ml,l=new _f,c=new Set,h=[],p=s.logarithmicDepthBuffer,u=s.vertexTextures;let f=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,g,y,A,P){const U=A.fog,q=P.geometry,B=b.isMeshStandardMaterial?A.environment:null,Y=(b.isMeshStandardMaterial?e:t).get(b.envMap||B),H=Y&&Y.mapping===js?Y.image.height:null,nt=x[b.type];b.precision!==null&&(f=s.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const ct=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,bt=ct!==void 0?ct.length:0;let Ut=0;q.morphAttributes.position!==void 0&&(Ut=1),q.morphAttributes.normal!==void 0&&(Ut=2),q.morphAttributes.color!==void 0&&(Ut=3);let jt,j,st,Et;if(nt){const Qt=ri[nt];jt=Qt.vertexShader,j=Qt.fragmentShader}else jt=b.vertexShader,j=b.fragmentShader,l.update(b),st=l.getVertexShaderID(b),Et=l.getFragmentShaderID(b);const ot=n.getRenderTarget(),Ct=n.state.buffers.depth.getReversed(),Pt=P.isInstancedMesh===!0,Nt=P.isBatchedMesh===!0,ee=!!b.map,Wt=!!b.matcap,ne=!!Y,z=!!b.aoMap,ge=!!b.lightMap,zt=!!b.bumpMap,Lt=!!b.normalMap,Rt=!!b.displacementMap,Gt=!!b.emissiveMap,wt=!!b.metalnessMap,C=!!b.roughnessMap,M=b.anisotropy>0,G=b.clearcoat>0,J=b.dispersion>0,et=b.iridescence>0,Q=b.sheen>0,Mt=b.transmission>0,lt=M&&!!b.anisotropyMap,gt=G&&!!b.clearcoatMap,Zt=G&&!!b.clearcoatNormalMap,rt=G&&!!b.clearcoatRoughnessMap,_t=et&&!!b.iridescenceMap,At=et&&!!b.iridescenceThicknessMap,It=Q&&!!b.sheenColorMap,yt=Q&&!!b.sheenRoughnessMap,Yt=!!b.specularMap,Bt=!!b.specularColorMap,oe=!!b.specularIntensityMap,O=Mt&&!!b.transmissionMap,ut=Mt&&!!b.thicknessMap,$=!!b.gradientMap,tt=!!b.alphaMap,pt=b.alphaTest>0,dt=!!b.alphaHash,Ot=!!b.extensions;let de=Di;b.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(de=n.toneMapping);const xe={shaderID:nt,shaderType:b.type,shaderName:b.name,vertexShader:jt,fragmentShader:j,defines:b.defines,customVertexShaderID:st,customFragmentShaderID:Et,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Nt,batchingColor:Nt&&P._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&P.instanceColor!==null,instancingMorph:Pt&&P.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ot===null?n.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:In,alphaToCoverage:!!b.alphaToCoverage,map:ee,matcap:Wt,envMap:ne,envMapMode:ne&&Y.mapping,envMapCubeUVHeight:H,aoMap:z,lightMap:ge,bumpMap:zt,normalMap:Lt,displacementMap:u&&Rt,emissiveMap:Gt,normalMapObjectSpace:Lt&&b.normalMapType===fc,normalMapTangentSpace:Lt&&b.normalMapType===cl,metalnessMap:wt,roughnessMap:C,anisotropy:M,anisotropyMap:lt,clearcoat:G,clearcoatMap:gt,clearcoatNormalMap:Zt,clearcoatRoughnessMap:rt,dispersion:J,iridescence:et,iridescenceMap:_t,iridescenceThicknessMap:At,sheen:Q,sheenColorMap:It,sheenRoughnessMap:yt,specularMap:Yt,specularColorMap:Bt,specularIntensityMap:oe,transmission:Mt,transmissionMap:O,thicknessMap:ut,gradientMap:$,opaque:b.transparent===!1&&b.blending===Sn&&b.alphaToCoverage===!1,alphaMap:tt,alphaTest:pt,alphaHash:dt,combine:b.combine,mapUv:ee&&v(b.map.channel),aoMapUv:z&&v(b.aoMap.channel),lightMapUv:ge&&v(b.lightMap.channel),bumpMapUv:zt&&v(b.bumpMap.channel),normalMapUv:Lt&&v(b.normalMap.channel),displacementMapUv:Rt&&v(b.displacementMap.channel),emissiveMapUv:Gt&&v(b.emissiveMap.channel),metalnessMapUv:wt&&v(b.metalnessMap.channel),roughnessMapUv:C&&v(b.roughnessMap.channel),anisotropyMapUv:lt&&v(b.anisotropyMap.channel),clearcoatMapUv:gt&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:Zt&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:At&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:It&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:yt&&v(b.sheenRoughnessMap.channel),specularMapUv:Yt&&v(b.specularMap.channel),specularColorMapUv:Bt&&v(b.specularColorMap.channel),specularIntensityMapUv:oe&&v(b.specularIntensityMap.channel),transmissionMapUv:O&&v(b.transmissionMap.channel),thicknessMapUv:ut&&v(b.thicknessMap.channel),alphaMapUv:tt&&v(b.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Lt||M),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!q.attributes.uv&&(ee||tt),fog:!!U,useFog:b.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:Ct,skinning:P.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:Ut,numDirLights:g.directional.length,numPointLights:g.point.length,numSpotLights:g.spot.length,numSpotLightMaps:g.spotLightMap.length,numRectAreaLights:g.rectArea.length,numHemiLights:g.hemi.length,numDirLightShadows:g.directionalShadowMap.length,numPointLightShadows:g.pointShadowMap.length,numSpotLightShadows:g.spotShadowMap.length,numSpotLightShadowsWithMaps:g.numSpotLightShadowsWithMaps,numLightProbes:g.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&y.length>0,shadowMapType:n.shadowMap.type,toneMapping:de,decodeVideoTexture:ee&&b.map.isVideoTexture===!0&&Kt.getTransfer(b.map.colorSpace)===se,decodeVideoTextureEmissive:Gt&&b.emissiveMap.isVideoTexture===!0&&Kt.getTransfer(b.emissiveMap.colorSpace)===se,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Je,flipSided:b.side===Ue,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ot&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ot&&b.extensions.multiDraw===!0||Nt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return xe.vertexUv1s=c.has(1),xe.vertexUv2s=c.has(2),xe.vertexUv3s=c.has(3),c.clear(),xe}function d(b){const g=[];if(b.shaderID?g.push(b.shaderID):(g.push(b.customVertexShaderID),g.push(b.customFragmentShaderID)),b.defines!==void 0)for(const y in b.defines)g.push(y),g.push(b.defines[y]);return b.isRawShaderMaterial===!1&&(S(g,b),E(g,b),g.push(n.outputColorSpace)),g.push(b.customProgramCacheKey),g.join()}function S(b,g){b.push(g.precision),b.push(g.outputColorSpace),b.push(g.envMapMode),b.push(g.envMapCubeUVHeight),b.push(g.mapUv),b.push(g.alphaMapUv),b.push(g.lightMapUv),b.push(g.aoMapUv),b.push(g.bumpMapUv),b.push(g.normalMapUv),b.push(g.displacementMapUv),b.push(g.emissiveMapUv),b.push(g.metalnessMapUv),b.push(g.roughnessMapUv),b.push(g.anisotropyMapUv),b.push(g.clearcoatMapUv),b.push(g.clearcoatNormalMapUv),b.push(g.clearcoatRoughnessMapUv),b.push(g.iridescenceMapUv),b.push(g.iridescenceThicknessMapUv),b.push(g.sheenColorMapUv),b.push(g.sheenRoughnessMapUv),b.push(g.specularMapUv),b.push(g.specularColorMapUv),b.push(g.specularIntensityMapUv),b.push(g.transmissionMapUv),b.push(g.thicknessMapUv),b.push(g.combine),b.push(g.fogExp2),b.push(g.sizeAttenuation),b.push(g.morphTargetsCount),b.push(g.morphAttributeCount),b.push(g.numDirLights),b.push(g.numPointLights),b.push(g.numSpotLights),b.push(g.numSpotLightMaps),b.push(g.numHemiLights),b.push(g.numRectAreaLights),b.push(g.numDirLightShadows),b.push(g.numPointLightShadows),b.push(g.numSpotLightShadows),b.push(g.numSpotLightShadowsWithMaps),b.push(g.numLightProbes),b.push(g.shadowMapType),b.push(g.toneMapping),b.push(g.numClippingPlanes),b.push(g.numClipIntersection),b.push(g.depthPacking)}function E(b,g){o.disableAll(),g.supportsVertexTextures&&o.enable(0),g.instancing&&o.enable(1),g.instancingColor&&o.enable(2),g.instancingMorph&&o.enable(3),g.matcap&&o.enable(4),g.envMap&&o.enable(5),g.normalMapObjectSpace&&o.enable(6),g.normalMapTangentSpace&&o.enable(7),g.clearcoat&&o.enable(8),g.iridescence&&o.enable(9),g.alphaTest&&o.enable(10),g.vertexColors&&o.enable(11),g.vertexAlphas&&o.enable(12),g.vertexUv1s&&o.enable(13),g.vertexUv2s&&o.enable(14),g.vertexUv3s&&o.enable(15),g.vertexTangents&&o.enable(16),g.anisotropy&&o.enable(17),g.alphaHash&&o.enable(18),g.batching&&o.enable(19),g.dispersion&&o.enable(20),g.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),g.fog&&o.enable(0),g.useFog&&o.enable(1),g.flatShading&&o.enable(2),g.logarithmicDepthBuffer&&o.enable(3),g.reverseDepthBuffer&&o.enable(4),g.skinning&&o.enable(5),g.morphTargets&&o.enable(6),g.morphNormals&&o.enable(7),g.morphColors&&o.enable(8),g.premultipliedAlpha&&o.enable(9),g.shadowMapEnabled&&o.enable(10),g.doubleSided&&o.enable(11),g.flipSided&&o.enable(12),g.useDepthPacking&&o.enable(13),g.dithering&&o.enable(14),g.transmission&&o.enable(15),g.sheen&&o.enable(16),g.opaque&&o.enable(17),g.pointsUvs&&o.enable(18),g.decodeVideoTexture&&o.enable(19),g.decodeVideoTextureEmissive&&o.enable(20),g.alphaToCoverage&&o.enable(21),b.push(o.mask)}function _(b){const g=x[b.type];let y;if(g){const A=ri[g];y=sd.clone(A.uniforms)}else y=b.uniforms;return y}function D(b,g){let y;for(let A=0,P=h.length;A<P;A++){const U=h[A];if(U.cacheKey===g){y=U,++y.usedTimes;break}}return y===void 0&&(y=new xf(n,g,b,r),h.push(y)),y}function R(b){if(--b.usedTimes===0){const g=h.indexOf(b);h[g]=h[h.length-1],h.pop(),b.destroy()}}function L(b){l.remove(b)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:_,acquireProgram:D,releaseProgram:R,releaseShaderCache:L,programs:h,dispose:I}}function Ef(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Mf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Oo(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Uo(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(p,u,f,x,v,m){let d=n[t];return d===void 0?(d={id:p.id,object:p,geometry:u,material:f,groupOrder:x,renderOrder:p.renderOrder,z:v,group:m},n[t]=d):(d.id=p.id,d.object=p,d.geometry=u,d.material=f,d.groupOrder=x,d.renderOrder=p.renderOrder,d.z=v,d.group=m),t++,d}function o(p,u,f,x,v,m){const d=a(p,u,f,x,v,m);f.transmission>0?i.push(d):f.transparent===!0?s.push(d):e.push(d)}function l(p,u,f,x,v,m){const d=a(p,u,f,x,v,m);f.transmission>0?i.unshift(d):f.transparent===!0?s.unshift(d):e.unshift(d)}function c(p,u){e.length>1&&e.sort(p||Mf),i.length>1&&i.sort(u||Oo),s.length>1&&s.sort(u||Oo)}function h(){for(let p=t,u=n.length;p<u;p++){const f=n[p];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Tf(){let n=new WeakMap;function t(i,s){const r=n.get(i);let a;return r===void 0?(a=new Uo,n.set(i,[a])):s>=r.length?(a=new Uo,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function wf(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new $t};break;case"SpotLight":e={position:new N,direction:new N,color:new $t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new $t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new $t,groundColor:new $t};break;case"RectAreaLight":e={color:new $t,position:new N,halfWidth:new N,halfHeight:new N};break}return n[t.id]=e,e}}}function Cf(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Af=0;function Rf(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Lf(n){const t=new wf,e=Cf(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);const s=new N,r=new ue,a=new ue;function o(c){let h=0,p=0,u=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let f=0,x=0,v=0,m=0,d=0,S=0,E=0,_=0,D=0,R=0,L=0;c.sort(Rf);for(let b=0,g=c.length;b<g;b++){const y=c[b],A=y.color,P=y.intensity,U=y.distance,q=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)h+=A.r*P,p+=A.g*P,u+=A.b*P;else if(y.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(y.sh.coefficients[B],P);L++}else if(y.isDirectionalLight){const B=t.get(y);if(B.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){const Y=y.shadow,H=e.get(y);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,i.directionalShadow[f]=H,i.directionalShadowMap[f]=q,i.directionalShadowMatrix[f]=y.shadow.matrix,S++}i.directional[f]=B,f++}else if(y.isSpotLight){const B=t.get(y);B.position.setFromMatrixPosition(y.matrixWorld),B.color.copy(A).multiplyScalar(P),B.distance=U,B.coneCos=Math.cos(y.angle),B.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),B.decay=y.decay,i.spot[v]=B;const Y=y.shadow;if(y.map&&(i.spotLightMap[D]=y.map,D++,Y.updateMatrices(y),y.castShadow&&R++),i.spotLightMatrix[v]=Y.matrix,y.castShadow){const H=e.get(y);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,i.spotShadow[v]=H,i.spotShadowMap[v]=q,_++}v++}else if(y.isRectAreaLight){const B=t.get(y);B.color.copy(A).multiplyScalar(P),B.halfWidth.set(y.width*.5,0,0),B.halfHeight.set(0,y.height*.5,0),i.rectArea[m]=B,m++}else if(y.isPointLight){const B=t.get(y);if(B.color.copy(y.color).multiplyScalar(y.intensity),B.distance=y.distance,B.decay=y.decay,y.castShadow){const Y=y.shadow,H=e.get(y);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,H.shadowCameraNear=Y.camera.near,H.shadowCameraFar=Y.camera.far,i.pointShadow[x]=H,i.pointShadowMap[x]=q,i.pointShadowMatrix[x]=y.shadow.matrix,E++}i.point[x]=B,x++}else if(y.isHemisphereLight){const B=t.get(y);B.skyColor.copy(y.color).multiplyScalar(P),B.groundColor.copy(y.groundColor).multiplyScalar(P),i.hemi[d]=B,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ht.LTC_FLOAT_1,i.rectAreaLTC2=ht.LTC_FLOAT_2):(i.rectAreaLTC1=ht.LTC_HALF_1,i.rectAreaLTC2=ht.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=u;const I=i.hash;(I.directionalLength!==f||I.pointLength!==x||I.spotLength!==v||I.rectAreaLength!==m||I.hemiLength!==d||I.numDirectionalShadows!==S||I.numPointShadows!==E||I.numSpotShadows!==_||I.numSpotMaps!==D||I.numLightProbes!==L)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=m,i.point.length=x,i.hemi.length=d,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=_+D-R,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=L,I.directionalLength=f,I.pointLength=x,I.spotLength=v,I.rectAreaLength=m,I.hemiLength=d,I.numDirectionalShadows=S,I.numPointShadows=E,I.numSpotShadows=_,I.numSpotMaps=D,I.numLightProbes=L,i.version=Af++)}function l(c,h){let p=0,u=0,f=0,x=0,v=0;const m=h.matrixWorldInverse;for(let d=0,S=c.length;d<S;d++){const E=c[d];if(E.isDirectionalLight){const _=i.directional[p];_.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),p++}else if(E.isSpotLight){const _=i.spot[f];_.position.setFromMatrixPosition(E.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),f++}else if(E.isRectAreaLight){const _=i.rectArea[x];_.position.setFromMatrixPosition(E.matrixWorld),_.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),_.halfWidth.set(E.width*.5,0,0),_.halfHeight.set(0,E.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),x++}else if(E.isPointLight){const _=i.point[u];_.position.setFromMatrixPosition(E.matrixWorld),_.position.applyMatrix4(m),u++}else if(E.isHemisphereLight){const _=i.hemi[v];_.direction.setFromMatrixPosition(E.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:i}}function Bo(n){const t=new Lf(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function a(h){i.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function If(n){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Bo(n),t.set(s,[o])):r>=a.length?(o=new Bo(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}class Pf extends Zi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=uc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Df extends Zi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Nf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Of=`uniform sampler2D shadow_pass;
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
}`;function Uf(n,t,e){let i=new La;const s=new Ft,r=new Ft,a=new ae,o=new Pf({depthPacking:pc}),l=new Df,c={},h=e.maxTextureSize,p={[Ni]:Ue,[Ue]:Ni,[Je]:Je},u=new Oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:Nf,fragmentShader:Of}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const x=new Ne;x.setAttribute("position",new ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Z(x,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$o;let d=this.type;this.render=function(R,L,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const b=n.getRenderTarget(),g=n.getActiveCubeFace(),y=n.getActiveMipmapLevel(),A=n.state;A.setBlending(Pi),A.buffers.color.setClear(1,1,1,1),A.buffers.depth.setTest(!0),A.setScissorTest(!1);const P=d!==fi&&this.type===fi,U=d===fi&&this.type!==fi;for(let q=0,B=R.length;q<B;q++){const Y=R[q],H=Y.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const nt=H.getFrameExtents();if(s.multiply(nt),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/nt.x),s.x=r.x*nt.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/nt.y),s.y=r.y*nt.y,H.mapSize.y=r.y)),H.map===null||P===!0||U===!0){const bt=this.type!==fi?{minFilter:ii,magFilter:ii}:{};H.map!==null&&H.map.dispose(),H.map=new $i(s.x,s.y,bt),H.map.texture.name=Y.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const ct=H.getViewportCount();for(let bt=0;bt<ct;bt++){const Ut=H.getViewport(bt);a.set(r.x*Ut.x,r.y*Ut.y,r.x*Ut.z,r.y*Ut.w),A.viewport(a),H.updateMatrices(Y,bt),i=H.getFrustum(),_(L,I,H.camera,Y,this.type)}H.isPointLightShadow!==!0&&this.type===fi&&S(H,I),H.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(b,g,y)};function S(R,L){const I=t.update(v);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new $i(s.x,s.y)),u.uniforms.shadow_pass.value=R.map.texture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(L,null,I,u,v,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(L,null,I,f,v,null)}function E(R,L,I,b){let g=null;const y=I.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(y!==void 0)g=y;else if(g=I.isPointLight===!0?l:o,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const A=g.uuid,P=L.uuid;let U=c[A];U===void 0&&(U={},c[A]=U);let q=U[P];q===void 0&&(q=g.clone(),U[P]=q,L.addEventListener("dispose",D)),g=q}if(g.visible=L.visible,g.wireframe=L.wireframe,b===fi?g.side=L.shadowSide!==null?L.shadowSide:L.side:g.side=L.shadowSide!==null?L.shadowSide:p[L.side],g.alphaMap=L.alphaMap,g.alphaTest=L.alphaTest,g.map=L.map,g.clipShadows=L.clipShadows,g.clippingPlanes=L.clippingPlanes,g.clipIntersection=L.clipIntersection,g.displacementMap=L.displacementMap,g.displacementScale=L.displacementScale,g.displacementBias=L.displacementBias,g.wireframeLinewidth=L.wireframeLinewidth,g.linewidth=L.linewidth,I.isPointLight===!0&&g.isMeshDistanceMaterial===!0){const A=n.properties.get(g);A.light=I}return g}function _(R,L,I,b,g){if(R.visible===!1)return;if(R.layers.test(L.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&g===fi)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,R.matrixWorld);const P=t.update(R),U=R.material;if(Array.isArray(U)){const q=P.groups;for(let B=0,Y=q.length;B<Y;B++){const H=q[B],nt=U[H.materialIndex];if(nt&&nt.visible){const ct=E(R,nt,b,g);R.onBeforeShadow(n,R,L,I,P,ct,H),n.renderBufferDirect(I,null,P,ct,R,H),R.onAfterShadow(n,R,L,I,P,ct,H)}}}else if(U.visible){const q=E(R,U,b,g);R.onBeforeShadow(n,R,L,I,P,q,null),n.renderBufferDirect(I,null,P,q,R,null),R.onAfterShadow(n,R,L,I,P,q,null)}}const A=R.children;for(let P=0,U=A.length;P<U;P++)_(A[P],L,I,b,g)}function D(R){R.target.removeEventListener("dispose",D);for(const I in c){const b=c[I],g=R.target.uuid;g in b&&(b[g].dispose(),delete b[g])}}}const Bf={[Br]:Fr,[kr]:Hr,[zr]:Vr,[Tn]:Gr,[Fr]:Br,[Hr]:kr,[Vr]:zr,[Gr]:Tn};function Ff(n,t){function e(){let O=!1;const ut=new ae;let $=null;const tt=new ae(0,0,0,0);return{setMask:function(pt){$!==pt&&!O&&(n.colorMask(pt,pt,pt,pt),$=pt)},setLocked:function(pt){O=pt},setClear:function(pt,dt,Ot,de,xe){xe===!0&&(pt*=de,dt*=de,Ot*=de),ut.set(pt,dt,Ot,de),tt.equals(ut)===!1&&(n.clearColor(pt,dt,Ot,de),tt.copy(ut))},reset:function(){O=!1,$=null,tt.set(-1,0,0,0)}}}function i(){let O=!1,ut=!1,$=null,tt=null,pt=null;return{setReversed:function(dt){if(ut!==dt){const Ot=t.get("EXT_clip_control");ut?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT);const de=pt;pt=null,this.setClear(de)}ut=dt},getReversed:function(){return ut},setTest:function(dt){dt?ot(n.DEPTH_TEST):Ct(n.DEPTH_TEST)},setMask:function(dt){$!==dt&&!O&&(n.depthMask(dt),$=dt)},setFunc:function(dt){if(ut&&(dt=Bf[dt]),tt!==dt){switch(dt){case Br:n.depthFunc(n.NEVER);break;case Fr:n.depthFunc(n.ALWAYS);break;case kr:n.depthFunc(n.LESS);break;case Tn:n.depthFunc(n.LEQUAL);break;case zr:n.depthFunc(n.EQUAL);break;case Gr:n.depthFunc(n.GEQUAL);break;case Hr:n.depthFunc(n.GREATER);break;case Vr:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}tt=dt}},setLocked:function(dt){O=dt},setClear:function(dt){pt!==dt&&(ut&&(dt=1-dt),n.clearDepth(dt),pt=dt)},reset:function(){O=!1,$=null,tt=null,pt=null,ut=!1}}}function s(){let O=!1,ut=null,$=null,tt=null,pt=null,dt=null,Ot=null,de=null,xe=null;return{setTest:function(Qt){O||(Qt?ot(n.STENCIL_TEST):Ct(n.STENCIL_TEST))},setMask:function(Qt){ut!==Qt&&!O&&(n.stencilMask(Qt),ut=Qt)},setFunc:function(Qt,we,Ve){($!==Qt||tt!==we||pt!==Ve)&&(n.stencilFunc(Qt,we,Ve),$=Qt,tt=we,pt=Ve)},setOp:function(Qt,we,Ve){(dt!==Qt||Ot!==we||de!==Ve)&&(n.stencilOp(Qt,we,Ve),dt=Qt,Ot=we,de=Ve)},setLocked:function(Qt){O=Qt},setClear:function(Qt){xe!==Qt&&(n.clearStencil(Qt),xe=Qt)},reset:function(){O=!1,ut=null,$=null,tt=null,pt=null,dt=null,Ot=null,de=null,xe=null}}}const r=new e,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let h={},p={},u=new WeakMap,f=[],x=null,v=!1,m=null,d=null,S=null,E=null,_=null,D=null,R=null,L=new $t(0,0,0),I=0,b=!1,g=null,y=null,A=null,P=null,U=null;const q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,Y=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(H)[1]),B=Y>=1):H.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),B=Y>=2);let nt=null,ct={};const bt=n.getParameter(n.SCISSOR_BOX),Ut=n.getParameter(n.VIEWPORT),jt=new ae().fromArray(bt),j=new ae().fromArray(Ut);function st(O,ut,$,tt){const pt=new Uint8Array(4),dt=n.createTexture();n.bindTexture(O,dt),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ot=0;Ot<$;Ot++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(ut,0,n.RGBA,1,1,tt,0,n.RGBA,n.UNSIGNED_BYTE,pt):n.texImage2D(ut+Ot,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,pt);return dt}const Et={};Et[n.TEXTURE_2D]=st(n.TEXTURE_2D,n.TEXTURE_2D,1),Et[n.TEXTURE_CUBE_MAP]=st(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Et[n.TEXTURE_2D_ARRAY]=st(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Et[n.TEXTURE_3D]=st(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ot(n.DEPTH_TEST),a.setFunc(Tn),zt(!1),Lt(za),ot(n.CULL_FACE),z(Pi);function ot(O){h[O]!==!0&&(n.enable(O),h[O]=!0)}function Ct(O){h[O]!==!1&&(n.disable(O),h[O]=!1)}function Pt(O,ut){return p[O]!==ut?(n.bindFramebuffer(O,ut),p[O]=ut,O===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=ut),O===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=ut),!0):!1}function Nt(O,ut){let $=f,tt=!1;if(O){$=u.get(ut),$===void 0&&($=[],u.set(ut,$));const pt=O.textures;if($.length!==pt.length||$[0]!==n.COLOR_ATTACHMENT0){for(let dt=0,Ot=pt.length;dt<Ot;dt++)$[dt]=n.COLOR_ATTACHMENT0+dt;$.length=pt.length,tt=!0}}else $[0]!==n.BACK&&($[0]=n.BACK,tt=!0);tt&&n.drawBuffers($)}function ee(O){return x!==O?(n.useProgram(O),x=O,!0):!1}const Wt={[Wi]:n.FUNC_ADD,[zl]:n.FUNC_SUBTRACT,[Gl]:n.FUNC_REVERSE_SUBTRACT};Wt[Hl]=n.MIN,Wt[Vl]=n.MAX;const ne={[Wl]:n.ZERO,[Xl]:n.ONE,[ql]:n.SRC_COLOR,[Or]:n.SRC_ALPHA,[Ql]:n.SRC_ALPHA_SATURATE,[jl]:n.DST_COLOR,[$l]:n.DST_ALPHA,[Yl]:n.ONE_MINUS_SRC_COLOR,[Ur]:n.ONE_MINUS_SRC_ALPHA,[Kl]:n.ONE_MINUS_DST_COLOR,[Zl]:n.ONE_MINUS_DST_ALPHA,[Jl]:n.CONSTANT_COLOR,[tc]:n.ONE_MINUS_CONSTANT_COLOR,[ec]:n.CONSTANT_ALPHA,[ic]:n.ONE_MINUS_CONSTANT_ALPHA};function z(O,ut,$,tt,pt,dt,Ot,de,xe,Qt){if(O===Pi){v===!0&&(Ct(n.BLEND),v=!1);return}if(v===!1&&(ot(n.BLEND),v=!0),O!==kl){if(O!==m||Qt!==b){if((d!==Wi||_!==Wi)&&(n.blendEquation(n.FUNC_ADD),d=Wi,_=Wi),Qt)switch(O){case Sn:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ga:n.blendFunc(n.ONE,n.ONE);break;case Ha:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Va:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Sn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ga:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ha:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Va:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}S=null,E=null,D=null,R=null,L.set(0,0,0),I=0,m=O,b=Qt}return}pt=pt||ut,dt=dt||$,Ot=Ot||tt,(ut!==d||pt!==_)&&(n.blendEquationSeparate(Wt[ut],Wt[pt]),d=ut,_=pt),($!==S||tt!==E||dt!==D||Ot!==R)&&(n.blendFuncSeparate(ne[$],ne[tt],ne[dt],ne[Ot]),S=$,E=tt,D=dt,R=Ot),(de.equals(L)===!1||xe!==I)&&(n.blendColor(de.r,de.g,de.b,xe),L.copy(de),I=xe),m=O,b=!1}function ge(O,ut){O.side===Je?Ct(n.CULL_FACE):ot(n.CULL_FACE);let $=O.side===Ue;ut&&($=!$),zt($),O.blending===Sn&&O.transparent===!1?z(Pi):z(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);const tt=O.stencilWrite;o.setTest(tt),tt&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Gt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ot(n.SAMPLE_ALPHA_TO_COVERAGE):Ct(n.SAMPLE_ALPHA_TO_COVERAGE)}function zt(O){g!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),g=O)}function Lt(O){O!==Bl?(ot(n.CULL_FACE),O!==y&&(O===za?n.cullFace(n.BACK):O===Fl?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ct(n.CULL_FACE),y=O}function Rt(O){O!==A&&(B&&n.lineWidth(O),A=O)}function Gt(O,ut,$){O?(ot(n.POLYGON_OFFSET_FILL),(P!==ut||U!==$)&&(n.polygonOffset(ut,$),P=ut,U=$)):Ct(n.POLYGON_OFFSET_FILL)}function wt(O){O?ot(n.SCISSOR_TEST):Ct(n.SCISSOR_TEST)}function C(O){O===void 0&&(O=n.TEXTURE0+q-1),nt!==O&&(n.activeTexture(O),nt=O)}function M(O,ut,$){$===void 0&&(nt===null?$=n.TEXTURE0+q-1:$=nt);let tt=ct[$];tt===void 0&&(tt={type:void 0,texture:void 0},ct[$]=tt),(tt.type!==O||tt.texture!==ut)&&(nt!==$&&(n.activeTexture($),nt=$),n.bindTexture(O,ut||Et[O]),tt.type=O,tt.texture=ut)}function G(){const O=ct[nt];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function J(){try{n.compressedTexImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function et(){try{n.compressedTexImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Q(){try{n.texSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Mt(){try{n.texSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function lt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function gt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Zt(){try{n.texStorage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function rt(){try{n.texStorage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _t(){try{n.texImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function At(){try{n.texImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function It(O){jt.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),jt.copy(O))}function yt(O){j.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),j.copy(O))}function Yt(O,ut){let $=c.get(ut);$===void 0&&($=new WeakMap,c.set(ut,$));let tt=$.get(O);tt===void 0&&(tt=n.getUniformBlockIndex(ut,O.name),$.set(O,tt))}function Bt(O,ut){const tt=c.get(ut).get(O);l.get(ut)!==tt&&(n.uniformBlockBinding(ut,tt,O.__bindingPointIndex),l.set(ut,tt))}function oe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},nt=null,ct={},p={},u=new WeakMap,f=[],x=null,v=!1,m=null,d=null,S=null,E=null,_=null,D=null,R=null,L=new $t(0,0,0),I=0,b=!1,g=null,y=null,A=null,P=null,U=null,jt.set(0,0,n.canvas.width,n.canvas.height),j.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ot,disable:Ct,bindFramebuffer:Pt,drawBuffers:Nt,useProgram:ee,setBlending:z,setMaterial:ge,setFlipSided:zt,setCullFace:Lt,setLineWidth:Rt,setPolygonOffset:Gt,setScissorTest:wt,activeTexture:C,bindTexture:M,unbindTexture:G,compressedTexImage2D:J,compressedTexImage3D:et,texImage2D:_t,texImage3D:At,updateUBOMapping:Yt,uniformBlockBinding:Bt,texStorage2D:Zt,texStorage3D:rt,texSubImage2D:Q,texSubImage3D:Mt,compressedTexSubImage2D:lt,compressedTexSubImage3D:gt,scissor:It,viewport:yt,reset:oe}}function Fo(n,t,e,i){const s=kf(i);switch(e){case il:return n*t;case sl:return n*t;case rl:return n*t*2;case al:return n*t/s.components*s.byteLength;case wa:return n*t/s.components*s.byteLength;case ol:return n*t*2/s.components*s.byteLength;case Ca:return n*t*2/s.components*s.byteLength;case nl:return n*t*3/s.components*s.byteLength;case ei:return n*t*4/s.components*s.byteLength;case Aa:return n*t*4/s.components*s.byteLength;case Bs:case Fs:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ks:case zs:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Zr:case Kr:return Math.max(n,16)*Math.max(t,8)/4;case $r:case jr:return Math.max(n,8)*Math.max(t,8)/2;case Qr:case Jr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ta:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ea:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ia:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case na:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case sa:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case ra:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case aa:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case oa:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case la:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case ca:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case da:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case ha:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case ua:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case pa:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case fa:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Gs:case ma:case ga:return Math.ceil(n/4)*Math.ceil(t/4)*16;case ll:case va:return Math.ceil(n/4)*Math.ceil(t/4)*8;case xa:case ya:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function kf(n){switch(n){case bi:case Jo:return{byteLength:1,components:1};case Qn:case tl:case ts:return{byteLength:2,components:1};case Ma:case Ta:return{byteLength:2,components:4};case Yi:case Ea:case gi:return{byteLength:4,components:1};case el:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function zf(n,t,e,i,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ft,h=new WeakMap;let p;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,M){return f?new OffscreenCanvas(C,M):Ws("canvas")}function v(C,M,G){let J=1;const et=wt(C);if((et.width>G||et.height>G)&&(J=G/Math.max(et.width,et.height)),J<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Q=Math.floor(J*et.width),Mt=Math.floor(J*et.height);p===void 0&&(p=x(Q,Mt));const lt=M?x(Q,Mt):p;return lt.width=Q,lt.height=Mt,lt.getContext("2d").drawImage(C,0,0,Q,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+Q+"x"+Mt+")."),lt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),C;return C}function m(C){return C.generateMipmaps}function d(C){n.generateMipmap(C)}function S(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(C,M,G,J,et=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Q=M;if(M===n.RED&&(G===n.FLOAT&&(Q=n.R32F),G===n.HALF_FLOAT&&(Q=n.R16F),G===n.UNSIGNED_BYTE&&(Q=n.R8)),M===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(Q=n.R8UI),G===n.UNSIGNED_SHORT&&(Q=n.R16UI),G===n.UNSIGNED_INT&&(Q=n.R32UI),G===n.BYTE&&(Q=n.R8I),G===n.SHORT&&(Q=n.R16I),G===n.INT&&(Q=n.R32I)),M===n.RG&&(G===n.FLOAT&&(Q=n.RG32F),G===n.HALF_FLOAT&&(Q=n.RG16F),G===n.UNSIGNED_BYTE&&(Q=n.RG8)),M===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(Q=n.RG8UI),G===n.UNSIGNED_SHORT&&(Q=n.RG16UI),G===n.UNSIGNED_INT&&(Q=n.RG32UI),G===n.BYTE&&(Q=n.RG8I),G===n.SHORT&&(Q=n.RG16I),G===n.INT&&(Q=n.RG32I)),M===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),G===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),G===n.UNSIGNED_INT&&(Q=n.RGB32UI),G===n.BYTE&&(Q=n.RGB8I),G===n.SHORT&&(Q=n.RGB16I),G===n.INT&&(Q=n.RGB32I)),M===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),G===n.UNSIGNED_INT&&(Q=n.RGBA32UI),G===n.BYTE&&(Q=n.RGBA8I),G===n.SHORT&&(Q=n.RGBA16I),G===n.INT&&(Q=n.RGBA32I)),M===n.RGB&&G===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),M===n.RGBA){const Mt=et?Ks:Kt.getTransfer(J);G===n.FLOAT&&(Q=n.RGBA32F),G===n.HALF_FLOAT&&(Q=n.RGBA16F),G===n.UNSIGNED_BYTE&&(Q=Mt===se?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function _(C,M){let G;return C?M===null||M===Yi||M===An?G=n.DEPTH24_STENCIL8:M===gi?G=n.DEPTH32F_STENCIL8:M===Qn&&(G=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Yi||M===An?G=n.DEPTH_COMPONENT24:M===gi?G=n.DEPTH_COMPONENT32F:M===Qn&&(G=n.DEPTH_COMPONENT16),G}function D(C,M){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==ii&&C.minFilter!==He?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function R(C){const M=C.target;M.removeEventListener("dispose",R),I(M),M.isVideoTexture&&h.delete(M)}function L(C){const M=C.target;M.removeEventListener("dispose",L),g(M)}function I(C){const M=i.get(C);if(M.__webglInit===void 0)return;const G=C.source,J=u.get(G);if(J){const et=J[M.__cacheKey];et.usedTimes--,et.usedTimes===0&&b(C),Object.keys(J).length===0&&u.delete(G)}i.remove(C)}function b(C){const M=i.get(C);n.deleteTexture(M.__webglTexture);const G=C.source,J=u.get(G);delete J[M.__cacheKey],a.memory.textures--}function g(C){const M=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(M.__webglFramebuffer[J]))for(let et=0;et<M.__webglFramebuffer[J].length;et++)n.deleteFramebuffer(M.__webglFramebuffer[J][et]);else n.deleteFramebuffer(M.__webglFramebuffer[J]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[J])}else{if(Array.isArray(M.__webglFramebuffer))for(let J=0;J<M.__webglFramebuffer.length;J++)n.deleteFramebuffer(M.__webglFramebuffer[J]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let J=0;J<M.__webglColorRenderbuffer.length;J++)M.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[J]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const G=C.textures;for(let J=0,et=G.length;J<et;J++){const Q=i.get(G[J]);Q.__webglTexture&&(n.deleteTexture(Q.__webglTexture),a.memory.textures--),i.remove(G[J])}i.remove(C)}let y=0;function A(){y=0}function P(){const C=y;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),y+=1,C}function U(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function q(C,M){const G=i.get(C);if(C.isVideoTexture&&Rt(C),C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){const J=C.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(G,C,M);return}}e.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+M)}function B(C,M){const G=i.get(C);if(C.version>0&&G.__version!==C.version){j(G,C,M);return}e.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+M)}function Y(C,M){const G=i.get(C);if(C.version>0&&G.__version!==C.version){j(G,C,M);return}e.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+M)}function H(C,M){const G=i.get(C);if(C.version>0&&G.__version!==C.version){st(G,C,M);return}e.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+M)}const nt={[qr]:n.REPEAT,[qi]:n.CLAMP_TO_EDGE,[Yr]:n.MIRRORED_REPEAT},ct={[ii]:n.NEAREST,[hc]:n.NEAREST_MIPMAP_NEAREST,[cs]:n.NEAREST_MIPMAP_LINEAR,[He]:n.LINEAR,[ir]:n.LINEAR_MIPMAP_NEAREST,[mi]:n.LINEAR_MIPMAP_LINEAR},bt={[mc]:n.NEVER,[bc]:n.ALWAYS,[gc]:n.LESS,[dl]:n.LEQUAL,[vc]:n.EQUAL,[_c]:n.GEQUAL,[xc]:n.GREATER,[yc]:n.NOTEQUAL};function Ut(C,M){if(M.type===gi&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===He||M.magFilter===ir||M.magFilter===cs||M.magFilter===mi||M.minFilter===He||M.minFilter===ir||M.minFilter===cs||M.minFilter===mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,nt[M.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,nt[M.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,nt[M.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,ct[M.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,ct[M.minFilter]),M.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,bt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===ii||M.minFilter!==cs&&M.minFilter!==mi||M.type===gi&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");n.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function jt(C,M){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",R));const J=M.source;let et=u.get(J);et===void 0&&(et={},u.set(J,et));const Q=U(M);if(Q!==C.__cacheKey){et[Q]===void 0&&(et[Q]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,G=!0),et[Q].usedTimes++;const Mt=et[C.__cacheKey];Mt!==void 0&&(et[C.__cacheKey].usedTimes--,Mt.usedTimes===0&&b(M)),C.__cacheKey=Q,C.__webglTexture=et[Q].texture}return G}function j(C,M,G){let J=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(J=n.TEXTURE_3D);const et=jt(C,M),Q=M.source;e.bindTexture(J,C.__webglTexture,n.TEXTURE0+G);const Mt=i.get(Q);if(Q.version!==Mt.__version||et===!0){e.activeTexture(n.TEXTURE0+G);const lt=Kt.getPrimaries(Kt.workingColorSpace),gt=M.colorSpace===Li?null:Kt.getPrimaries(M.colorSpace),Zt=M.colorSpace===Li||lt===gt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let rt=v(M.image,!1,s.maxTextureSize);rt=Gt(M,rt);const _t=r.convert(M.format,M.colorSpace),At=r.convert(M.type);let It=E(M.internalFormat,_t,At,M.colorSpace,M.isVideoTexture);Ut(J,M);let yt;const Yt=M.mipmaps,Bt=M.isVideoTexture!==!0,oe=Mt.__version===void 0||et===!0,O=Q.dataReady,ut=D(M,rt);if(M.isDepthTexture)It=_(M.format===Rn,M.type),oe&&(Bt?e.texStorage2D(n.TEXTURE_2D,1,It,rt.width,rt.height):e.texImage2D(n.TEXTURE_2D,0,It,rt.width,rt.height,0,_t,At,null));else if(M.isDataTexture)if(Yt.length>0){Bt&&oe&&e.texStorage2D(n.TEXTURE_2D,ut,It,Yt[0].width,Yt[0].height);for(let $=0,tt=Yt.length;$<tt;$++)yt=Yt[$],Bt?O&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,yt.width,yt.height,_t,At,yt.data):e.texImage2D(n.TEXTURE_2D,$,It,yt.width,yt.height,0,_t,At,yt.data);M.generateMipmaps=!1}else Bt?(oe&&e.texStorage2D(n.TEXTURE_2D,ut,It,rt.width,rt.height),O&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,rt.width,rt.height,_t,At,rt.data)):e.texImage2D(n.TEXTURE_2D,0,It,rt.width,rt.height,0,_t,At,rt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Bt&&oe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ut,It,Yt[0].width,Yt[0].height,rt.depth);for(let $=0,tt=Yt.length;$<tt;$++)if(yt=Yt[$],M.format!==ei)if(_t!==null)if(Bt){if(O)if(M.layerUpdates.size>0){const pt=Fo(yt.width,yt.height,M.format,M.type);for(const dt of M.layerUpdates){const Ot=yt.data.subarray(dt*pt/yt.data.BYTES_PER_ELEMENT,(dt+1)*pt/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,dt,yt.width,yt.height,1,_t,Ot)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,yt.width,yt.height,rt.depth,_t,yt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,$,It,yt.width,yt.height,rt.depth,0,yt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Bt?O&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,yt.width,yt.height,rt.depth,_t,At,yt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,$,It,yt.width,yt.height,rt.depth,0,_t,At,yt.data)}else{Bt&&oe&&e.texStorage2D(n.TEXTURE_2D,ut,It,Yt[0].width,Yt[0].height);for(let $=0,tt=Yt.length;$<tt;$++)yt=Yt[$],M.format!==ei?_t!==null?Bt?O&&e.compressedTexSubImage2D(n.TEXTURE_2D,$,0,0,yt.width,yt.height,_t,yt.data):e.compressedTexImage2D(n.TEXTURE_2D,$,It,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?O&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,yt.width,yt.height,_t,At,yt.data):e.texImage2D(n.TEXTURE_2D,$,It,yt.width,yt.height,0,_t,At,yt.data)}else if(M.isDataArrayTexture)if(Bt){if(oe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ut,It,rt.width,rt.height,rt.depth),O)if(M.layerUpdates.size>0){const $=Fo(rt.width,rt.height,M.format,M.type);for(const tt of M.layerUpdates){const pt=rt.data.subarray(tt*$/rt.data.BYTES_PER_ELEMENT,(tt+1)*$/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,tt,rt.width,rt.height,1,_t,At,pt)}M.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,_t,At,rt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,It,rt.width,rt.height,rt.depth,0,_t,At,rt.data);else if(M.isData3DTexture)Bt?(oe&&e.texStorage3D(n.TEXTURE_3D,ut,It,rt.width,rt.height,rt.depth),O&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,_t,At,rt.data)):e.texImage3D(n.TEXTURE_3D,0,It,rt.width,rt.height,rt.depth,0,_t,At,rt.data);else if(M.isFramebufferTexture){if(oe)if(Bt)e.texStorage2D(n.TEXTURE_2D,ut,It,rt.width,rt.height);else{let $=rt.width,tt=rt.height;for(let pt=0;pt<ut;pt++)e.texImage2D(n.TEXTURE_2D,pt,It,$,tt,0,_t,At,null),$>>=1,tt>>=1}}else if(Yt.length>0){if(Bt&&oe){const $=wt(Yt[0]);e.texStorage2D(n.TEXTURE_2D,ut,It,$.width,$.height)}for(let $=0,tt=Yt.length;$<tt;$++)yt=Yt[$],Bt?O&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,_t,At,yt):e.texImage2D(n.TEXTURE_2D,$,It,_t,At,yt);M.generateMipmaps=!1}else if(Bt){if(oe){const $=wt(rt);e.texStorage2D(n.TEXTURE_2D,ut,It,$.width,$.height)}O&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,_t,At,rt)}else e.texImage2D(n.TEXTURE_2D,0,It,_t,At,rt);m(M)&&d(J),Mt.__version=Q.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function st(C,M,G){if(M.image.length!==6)return;const J=jt(C,M),et=M.source;e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+G);const Q=i.get(et);if(et.version!==Q.__version||J===!0){e.activeTexture(n.TEXTURE0+G);const Mt=Kt.getPrimaries(Kt.workingColorSpace),lt=M.colorSpace===Li?null:Kt.getPrimaries(M.colorSpace),gt=M.colorSpace===Li||Mt===lt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);const Zt=M.isCompressedTexture||M.image[0].isCompressedTexture,rt=M.image[0]&&M.image[0].isDataTexture,_t=[];for(let tt=0;tt<6;tt++)!Zt&&!rt?_t[tt]=v(M.image[tt],!0,s.maxCubemapSize):_t[tt]=rt?M.image[tt].image:M.image[tt],_t[tt]=Gt(M,_t[tt]);const At=_t[0],It=r.convert(M.format,M.colorSpace),yt=r.convert(M.type),Yt=E(M.internalFormat,It,yt,M.colorSpace),Bt=M.isVideoTexture!==!0,oe=Q.__version===void 0||J===!0,O=et.dataReady;let ut=D(M,At);Ut(n.TEXTURE_CUBE_MAP,M);let $;if(Zt){Bt&&oe&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ut,Yt,At.width,At.height);for(let tt=0;tt<6;tt++){$=_t[tt].mipmaps;for(let pt=0;pt<$.length;pt++){const dt=$[pt];M.format!==ei?It!==null?Bt?O&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,pt,0,0,dt.width,dt.height,It,dt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,pt,Yt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,pt,0,0,dt.width,dt.height,It,yt,dt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,pt,Yt,dt.width,dt.height,0,It,yt,dt.data)}}}else{if($=M.mipmaps,Bt&&oe){$.length>0&&ut++;const tt=wt(_t[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ut,Yt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(rt){Bt?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,_t[tt].width,_t[tt].height,It,yt,_t[tt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Yt,_t[tt].width,_t[tt].height,0,It,yt,_t[tt].data);for(let pt=0;pt<$.length;pt++){const Ot=$[pt].image[tt].image;Bt?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,pt+1,0,0,Ot.width,Ot.height,It,yt,Ot.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,pt+1,Yt,Ot.width,Ot.height,0,It,yt,Ot.data)}}else{Bt?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,It,yt,_t[tt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Yt,It,yt,_t[tt]);for(let pt=0;pt<$.length;pt++){const dt=$[pt];Bt?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,pt+1,0,0,It,yt,dt.image[tt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,pt+1,Yt,It,yt,dt.image[tt])}}}m(M)&&d(n.TEXTURE_CUBE_MAP),Q.__version=et.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Et(C,M,G,J,et,Q){const Mt=r.convert(G.format,G.colorSpace),lt=r.convert(G.type),gt=E(G.internalFormat,Mt,lt,G.colorSpace),Zt=i.get(M),rt=i.get(G);if(rt.__renderTarget=M,!Zt.__hasExternalTextures){const _t=Math.max(1,M.width>>Q),At=Math.max(1,M.height>>Q);et===n.TEXTURE_3D||et===n.TEXTURE_2D_ARRAY?e.texImage3D(et,Q,gt,_t,At,M.depth,0,Mt,lt,null):e.texImage2D(et,Q,gt,_t,At,0,Mt,lt,null)}e.bindFramebuffer(n.FRAMEBUFFER,C),Lt(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,et,rt.__webglTexture,0,zt(M)):(et===n.TEXTURE_2D||et>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,et,rt.__webglTexture,Q),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ot(C,M,G){if(n.bindRenderbuffer(n.RENDERBUFFER,C),M.depthBuffer){const J=M.depthTexture,et=J&&J.isDepthTexture?J.type:null,Q=_(M.stencilBuffer,et),Mt=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,lt=zt(M);Lt(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,lt,Q,M.width,M.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,lt,Q,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Q,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Mt,n.RENDERBUFFER,C)}else{const J=M.textures;for(let et=0;et<J.length;et++){const Q=J[et],Mt=r.convert(Q.format,Q.colorSpace),lt=r.convert(Q.type),gt=E(Q.internalFormat,Mt,lt,Q.colorSpace),Zt=zt(M);G&&Lt(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Zt,gt,M.width,M.height):Lt(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Zt,gt,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,gt,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ct(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=i.get(M.depthTexture);J.__renderTarget=M,(!J.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),q(M.depthTexture,0);const et=J.__webglTexture,Q=zt(M);if(M.depthTexture.format===En)Lt(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,et,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,et,0);else if(M.depthTexture.format===Rn)Lt(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,et,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Pt(C){const M=i.get(C),G=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){const J=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),J){const et=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,J.removeEventListener("dispose",et)};J.addEventListener("dispose",et),M.__depthDisposeCallback=et}M.__boundDepthTexture=J}if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Ct(M.__webglFramebuffer,C)}else if(G){M.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[J]),M.__webglDepthbuffer[J]===void 0)M.__webglDepthbuffer[J]=n.createRenderbuffer(),ot(M.__webglDepthbuffer[J],C,!1);else{const et=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=M.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,et,n.RENDERBUFFER,Q)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),ot(M.__webglDepthbuffer,C,!1);else{const J=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,et=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,et),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,et)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Nt(C,M,G){const J=i.get(C);M!==void 0&&Et(J.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&Pt(C)}function ee(C){const M=C.texture,G=i.get(C),J=i.get(M);C.addEventListener("dispose",L);const et=C.textures,Q=C.isWebGLCubeRenderTarget===!0,Mt=et.length>1;if(Mt||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=M.version,a.memory.textures++),Q){G.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[lt]=[];for(let gt=0;gt<M.mipmaps.length;gt++)G.__webglFramebuffer[lt][gt]=n.createFramebuffer()}else G.__webglFramebuffer[lt]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let lt=0;lt<M.mipmaps.length;lt++)G.__webglFramebuffer[lt]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(Mt)for(let lt=0,gt=et.length;lt<gt;lt++){const Zt=i.get(et[lt]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=n.createTexture(),a.memory.textures++)}if(C.samples>0&&Lt(C)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let lt=0;lt<et.length;lt++){const gt=et[lt];G.__webglColorRenderbuffer[lt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[lt]);const Zt=r.convert(gt.format,gt.colorSpace),rt=r.convert(gt.type),_t=E(gt.internalFormat,Zt,rt,gt.colorSpace,C.isXRRenderTarget===!0),At=zt(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,At,_t,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.RENDERBUFFER,G.__webglColorRenderbuffer[lt])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),ot(G.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){e.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),Ut(n.TEXTURE_CUBE_MAP,M);for(let lt=0;lt<6;lt++)if(M.mipmaps&&M.mipmaps.length>0)for(let gt=0;gt<M.mipmaps.length;gt++)Et(G.__webglFramebuffer[lt][gt],C,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,gt);else Et(G.__webglFramebuffer[lt],C,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);m(M)&&d(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let lt=0,gt=et.length;lt<gt;lt++){const Zt=et[lt],rt=i.get(Zt);e.bindTexture(n.TEXTURE_2D,rt.__webglTexture),Ut(n.TEXTURE_2D,Zt),Et(G.__webglFramebuffer,C,Zt,n.COLOR_ATTACHMENT0+lt,n.TEXTURE_2D,0),m(Zt)&&d(n.TEXTURE_2D)}e.unbindTexture()}else{let lt=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(lt=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(lt,J.__webglTexture),Ut(lt,M),M.mipmaps&&M.mipmaps.length>0)for(let gt=0;gt<M.mipmaps.length;gt++)Et(G.__webglFramebuffer[gt],C,M,n.COLOR_ATTACHMENT0,lt,gt);else Et(G.__webglFramebuffer,C,M,n.COLOR_ATTACHMENT0,lt,0);m(M)&&d(lt),e.unbindTexture()}C.depthBuffer&&Pt(C)}function Wt(C){const M=C.textures;for(let G=0,J=M.length;G<J;G++){const et=M[G];if(m(et)){const Q=S(C),Mt=i.get(et).__webglTexture;e.bindTexture(Q,Mt),d(Q),e.unbindTexture()}}}const ne=[],z=[];function ge(C){if(C.samples>0){if(Lt(C)===!1){const M=C.textures,G=C.width,J=C.height;let et=n.COLOR_BUFFER_BIT;const Q=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Mt=i.get(C),lt=M.length>1;if(lt)for(let gt=0;gt<M.length;gt++)e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let gt=0;gt<M.length;gt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(et|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(et|=n.STENCIL_BUFFER_BIT)),lt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Mt.__webglColorRenderbuffer[gt]);const Zt=i.get(M[gt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Zt,0)}n.blitFramebuffer(0,0,G,J,0,0,G,J,et,n.NEAREST),l===!0&&(ne.length=0,z.length=0,ne.push(n.COLOR_ATTACHMENT0+gt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ne.push(Q),z.push(Q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,z)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ne))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),lt)for(let gt=0;gt<M.length;gt++){e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.RENDERBUFFER,Mt.__webglColorRenderbuffer[gt]);const Zt=i.get(M[gt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.TEXTURE_2D,Zt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const M=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function zt(C){return Math.min(s.maxSamples,C.samples)}function Lt(C){const M=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Rt(C){const M=a.render.frame;h.get(C)!==M&&(h.set(C,M),C.update())}function Gt(C,M){const G=C.colorSpace,J=C.format,et=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==In&&G!==Li&&(Kt.getTransfer(G)===se?(J!==ei||et!==bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),M}function wt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=P,this.resetTextureUnits=A,this.setTexture2D=q,this.setTexture2DArray=B,this.setTexture3D=Y,this.setTextureCube=H,this.rebindTextures=Nt,this.setupRenderTarget=ee,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=Lt}function Gf(n,t){function e(i,s=Li){let r;const a=Kt.getTransfer(s);if(i===bi)return n.UNSIGNED_BYTE;if(i===Ma)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ta)return n.UNSIGNED_SHORT_5_5_5_1;if(i===el)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Jo)return n.BYTE;if(i===tl)return n.SHORT;if(i===Qn)return n.UNSIGNED_SHORT;if(i===Ea)return n.INT;if(i===Yi)return n.UNSIGNED_INT;if(i===gi)return n.FLOAT;if(i===ts)return n.HALF_FLOAT;if(i===il)return n.ALPHA;if(i===nl)return n.RGB;if(i===ei)return n.RGBA;if(i===sl)return n.LUMINANCE;if(i===rl)return n.LUMINANCE_ALPHA;if(i===En)return n.DEPTH_COMPONENT;if(i===Rn)return n.DEPTH_STENCIL;if(i===al)return n.RED;if(i===wa)return n.RED_INTEGER;if(i===ol)return n.RG;if(i===Ca)return n.RG_INTEGER;if(i===Aa)return n.RGBA_INTEGER;if(i===Bs||i===Fs||i===ks||i===zs)if(a===se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Bs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Fs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Bs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Fs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ks)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===zs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===$r||i===Zr||i===jr||i===Kr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===$r)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Zr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===jr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Kr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Qr||i===Jr||i===ta)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Qr||i===Jr)return a===se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ta)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ea||i===ia||i===na||i===sa||i===ra||i===aa||i===oa||i===la||i===ca||i===da||i===ha||i===ua||i===pa||i===fa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ea)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ia)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===na)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===sa)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ra)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===aa)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===oa)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===la)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ca)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===da)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ha)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ua)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===pa)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===fa)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Gs||i===ma||i===ga)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Gs)return a===se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ma)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ga)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ll||i===va||i===xa||i===ya)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Gs)return r.COMPRESSED_RED_RGTC1_EXT;if(i===va)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===xa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ya)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===An?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class Hf extends Ge{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class fe extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vf={type:"move"};class Rr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,i),d=this._getHandJoint(c,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=h.position.distanceTo(p.position),f=.02,x=.005;c.inputState.pinching&&u>f+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Vf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new fe;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Wf=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xf=`
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

}`;class qf{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new De,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Oi({vertexShader:Wf,fragmentShader:Xf,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Z(new Ye(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Yf extends Pn{constructor(t,e){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,p=null,u=null,f=null,x=null;const v=new qf,m=e.getContextAttributes();let d=null,S=null;const E=[],_=[],D=new Ft;let R=null;const L=new Ge;L.viewport=new ae;const I=new Ge;I.viewport=new ae;const b=[L,I],g=new Hf;let y=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let st=E[j];return st===void 0&&(st=new Rr,E[j]=st),st.getTargetRaySpace()},this.getControllerGrip=function(j){let st=E[j];return st===void 0&&(st=new Rr,E[j]=st),st.getGripSpace()},this.getHand=function(j){let st=E[j];return st===void 0&&(st=new Rr,E[j]=st),st.getHandSpace()};function P(j){const st=_.indexOf(j.inputSource);if(st===-1)return;const Et=E[st];Et!==void 0&&(Et.update(j.inputSource,j.frame,c||a),Et.dispatchEvent({type:j.type,data:j.inputSource}))}function U(){s.removeEventListener("select",P),s.removeEventListener("selectstart",P),s.removeEventListener("selectend",P),s.removeEventListener("squeeze",P),s.removeEventListener("squeezestart",P),s.removeEventListener("squeezeend",P),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",q);for(let j=0;j<E.length;j++){const st=_[j];st!==null&&(_[j]=null,E[j].disconnect(st))}y=null,A=null,v.reset(),t.setRenderTarget(d),f=null,u=null,p=null,s=null,S=null,jt.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return p},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",P),s.addEventListener("selectstart",P),s.addEventListener("selectend",P),s.addEventListener("squeeze",P),s.addEventListener("squeezestart",P),s.addEventListener("squeezeend",P),s.addEventListener("end",U),s.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){const st={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,st),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new $i(f.framebufferWidth,f.framebufferHeight,{format:ei,type:bi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let st=null,Et=null,ot=null;m.depth&&(ot=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=m.stencil?Rn:En,Et=m.stencil?An:Yi);const Ct={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:r};p=new XRWebGLBinding(s,e),u=p.createProjectionLayer(Ct),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),S=new $i(u.textureWidth,u.textureHeight,{format:ei,type:bi,depthTexture:new Ml(u.textureWidth,u.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),jt.setContext(s),jt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function q(j){for(let st=0;st<j.removed.length;st++){const Et=j.removed[st],ot=_.indexOf(Et);ot>=0&&(_[ot]=null,E[ot].disconnect(Et))}for(let st=0;st<j.added.length;st++){const Et=j.added[st];let ot=_.indexOf(Et);if(ot===-1){for(let Pt=0;Pt<E.length;Pt++)if(Pt>=_.length){_.push(Et),ot=Pt;break}else if(_[Pt]===null){_[Pt]=Et,ot=Pt;break}if(ot===-1)break}const Ct=E[ot];Ct&&Ct.connect(Et)}}const B=new N,Y=new N;function H(j,st,Et){B.setFromMatrixPosition(st.matrixWorld),Y.setFromMatrixPosition(Et.matrixWorld);const ot=B.distanceTo(Y),Ct=st.projectionMatrix.elements,Pt=Et.projectionMatrix.elements,Nt=Ct[14]/(Ct[10]-1),ee=Ct[14]/(Ct[10]+1),Wt=(Ct[9]+1)/Ct[5],ne=(Ct[9]-1)/Ct[5],z=(Ct[8]-1)/Ct[0],ge=(Pt[8]+1)/Pt[0],zt=Nt*z,Lt=Nt*ge,Rt=ot/(-z+ge),Gt=Rt*-z;if(st.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Gt),j.translateZ(Rt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ct[10]===-1)j.projectionMatrix.copy(st.projectionMatrix),j.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{const wt=Nt+Rt,C=ee+Rt,M=zt-Gt,G=Lt+(ot-Gt),J=Wt*ee/C*wt,et=ne*ee/C*wt;j.projectionMatrix.makePerspective(M,G,J,et,wt,C),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function nt(j,st){st===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(st.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let st=j.near,Et=j.far;v.texture!==null&&(v.depthNear>0&&(st=v.depthNear),v.depthFar>0&&(Et=v.depthFar)),g.near=I.near=L.near=st,g.far=I.far=L.far=Et,(y!==g.near||A!==g.far)&&(s.updateRenderState({depthNear:g.near,depthFar:g.far}),y=g.near,A=g.far),L.layers.mask=j.layers.mask|2,I.layers.mask=j.layers.mask|4,g.layers.mask=L.layers.mask|I.layers.mask;const ot=j.parent,Ct=g.cameras;nt(g,ot);for(let Pt=0;Pt<Ct.length;Pt++)nt(Ct[Pt],ot);Ct.length===2?H(g,L,I):g.projectionMatrix.copy(L.projectionMatrix),ct(j,g,ot)};function ct(j,st,Et){Et===null?j.matrix.copy(st.matrixWorld):(j.matrix.copy(Et.matrixWorld),j.matrix.invert(),j.matrix.multiply(st.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(st.projectionMatrix),j.projectionMatrixInverse.copy(st.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Jn*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return g},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(j){l=j,u!==null&&(u.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(g)};let bt=null;function Ut(j,st){if(h=st.getViewerPose(c||a),x=st,h!==null){const Et=h.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let ot=!1;Et.length!==g.cameras.length&&(g.cameras.length=0,ot=!0);for(let Pt=0;Pt<Et.length;Pt++){const Nt=Et[Pt];let ee=null;if(f!==null)ee=f.getViewport(Nt);else{const ne=p.getViewSubImage(u,Nt);ee=ne.viewport,Pt===0&&(t.setRenderTargetTextures(S,ne.colorTexture,u.ignoreDepthValues?void 0:ne.depthStencilTexture),t.setRenderTarget(S))}let Wt=b[Pt];Wt===void 0&&(Wt=new Ge,Wt.layers.enable(Pt),Wt.viewport=new ae,b[Pt]=Wt),Wt.matrix.fromArray(Nt.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(Nt.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(ee.x,ee.y,ee.width,ee.height),Pt===0&&(g.matrix.copy(Wt.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale)),ot===!0&&g.cameras.push(Wt)}const Ct=s.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")){const Pt=p.getDepthInformation(Et[0]);Pt&&Pt.isValid&&Pt.texture&&v.init(t,Pt,s.renderState)}}for(let Et=0;Et<E.length;Et++){const ot=_[Et],Ct=E[Et];ot!==null&&Ct!==void 0&&Ct.update(ot,st,c||a)}bt&&bt(j,st),st.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:st}),x=null}const jt=new Sl;jt.setAnimationLoop(Ut),this.setAnimationLoop=function(j){bt=j},this.dispose=function(){}}}const Gi=new ai,$f=new ue;function Zf(n,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,yl(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,S,E,_){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),p(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),u(m,d),d.isMeshPhysicalMaterial&&f(m,d,_)):d.isMeshMatcapMaterial?(r(m,d),x(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),v(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,S,E):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ue&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ue&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const S=t.get(d),E=S.envMap,_=S.envMapRotation;E&&(m.envMap.value=E,Gi.copy(_),Gi.x*=-1,Gi.y*=-1,Gi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Gi.y*=-1,Gi.z*=-1),m.envMapRotation.value.setFromMatrix4($f.makeRotationFromEuler(Gi)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,S,E){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*S,m.scale.value=E*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function p(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function u(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function f(m,d,S){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ue&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){const S=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function jf(n,t,e,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,E){const _=E.program;i.uniformBlockBinding(S,_)}function c(S,E){let _=s[S.id];_===void 0&&(x(S),_=h(S),s[S.id]=_,S.addEventListener("dispose",m));const D=E.program;i.updateUBOMapping(S,D);const R=t.render.frame;r[S.id]!==R&&(u(S),r[S.id]=R)}function h(S){const E=p();S.__bindingPointIndex=E;const _=n.createBuffer(),D=S.__size,R=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,D,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,_),_}function p(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){const E=s[S.id],_=S.uniforms,D=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let R=0,L=_.length;R<L;R++){const I=Array.isArray(_[R])?_[R]:[_[R]];for(let b=0,g=I.length;b<g;b++){const y=I[b];if(f(y,R,b,D)===!0){const A=y.__offset,P=Array.isArray(y.value)?y.value:[y.value];let U=0;for(let q=0;q<P.length;q++){const B=P[q],Y=v(B);typeof B=="number"||typeof B=="boolean"?(y.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,A+U,y.__data)):B.isMatrix3?(y.__data[0]=B.elements[0],y.__data[1]=B.elements[1],y.__data[2]=B.elements[2],y.__data[3]=0,y.__data[4]=B.elements[3],y.__data[5]=B.elements[4],y.__data[6]=B.elements[5],y.__data[7]=0,y.__data[8]=B.elements[6],y.__data[9]=B.elements[7],y.__data[10]=B.elements[8],y.__data[11]=0):(B.toArray(y.__data,U),U+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,A,y.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(S,E,_,D){const R=S.value,L=E+"_"+_;if(D[L]===void 0)return typeof R=="number"||typeof R=="boolean"?D[L]=R:D[L]=R.clone(),!0;{const I=D[L];if(typeof R=="number"||typeof R=="boolean"){if(I!==R)return D[L]=R,!0}else if(I.equals(R)===!1)return I.copy(R),!0}return!1}function x(S){const E=S.uniforms;let _=0;const D=16;for(let L=0,I=E.length;L<I;L++){const b=Array.isArray(E[L])?E[L]:[E[L]];for(let g=0,y=b.length;g<y;g++){const A=b[g],P=Array.isArray(A.value)?A.value:[A.value];for(let U=0,q=P.length;U<q;U++){const B=P[U],Y=v(B),H=_%D,nt=H%Y.boundary,ct=H+nt;_+=nt,ct!==0&&D-ct<Y.storage&&(_+=D-ct),A.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=_,_+=Y.storage}}}const R=_%D;return R>0&&(_+=D-R),S.__size=_,S.__cache={},this}function v(S){const E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=48,E.storage=48):S.isMatrix4?(E.boundary=64,E.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),E}function m(S){const E=S.target;E.removeEventListener("dispose",m);const _=a.indexOf(E.__bindingPointIndex);a.splice(_,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function d(){for(const S in s)n.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:c,dispose:d}}class Kf{constructor(t={}){const{canvas:e=Fc(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const x=new Uint32Array(4),v=new Int32Array(4);let m=null,d=null;const S=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qe,this.toneMapping=Di,this.toneMappingExposure=1;const _=this;let D=!1,R=0,L=0,I=null,b=-1,g=null;const y=new ae,A=new ae;let P=null;const U=new $t(0);let q=0,B=e.width,Y=e.height,H=1,nt=null,ct=null;const bt=new ae(0,0,B,Y),Ut=new ae(0,0,B,Y);let jt=!1;const j=new La;let st=!1,Et=!1;const ot=new ue,Ct=new ue,Pt=new N,Nt=new ae,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Wt=!1;function ne(){return I===null?H:1}let z=i;function ge(w,k){return e.getContext(w,k)}try{const w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Sa}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",dt,!1),z===null){const k="webgl2";if(z=ge(k,w),z===null)throw ge(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let zt,Lt,Rt,Gt,wt,C,M,G,J,et,Q,Mt,lt,gt,Zt,rt,_t,At,It,yt,Yt,Bt,oe,O;function ut(){zt=new ep(z),zt.init(),Bt=new Gf(z,zt),Lt=new Zu(z,zt,t,Bt),Rt=new Ff(z,zt),Lt.reverseDepthBuffer&&u&&Rt.buffers.depth.setReversed(!0),Gt=new sp(z),wt=new Ef,C=new zf(z,zt,Rt,wt,Lt,Bt,Gt),M=new Ku(_),G=new tp(_),J=new hd(z),oe=new Yu(z,J),et=new ip(z,J,Gt,oe),Q=new ap(z,et,J,Gt),It=new rp(z,Lt,C),rt=new ju(wt),Mt=new Sf(_,M,G,zt,Lt,oe,rt),lt=new Zf(_,wt),gt=new Tf,Zt=new If(zt),At=new qu(_,M,G,Rt,Q,f,l),_t=new Uf(_,Q,Lt),O=new jf(z,Gt,Lt,Rt),yt=new $u(z,zt,Gt),Yt=new np(z,zt,Gt),Gt.programs=Mt.programs,_.capabilities=Lt,_.extensions=zt,_.properties=wt,_.renderLists=gt,_.shadowMap=_t,_.state=Rt,_.info=Gt}ut();const $=new Yf(_,z);this.xr=$,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const w=zt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=zt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(w){w!==void 0&&(H=w,this.setSize(B,Y,!1))},this.getSize=function(w){return w.set(B,Y)},this.setSize=function(w,k,V=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=w,Y=k,e.width=Math.floor(w*H),e.height=Math.floor(k*H),V===!0&&(e.style.width=w+"px",e.style.height=k+"px"),this.setViewport(0,0,w,k)},this.getDrawingBufferSize=function(w){return w.set(B*H,Y*H).floor()},this.setDrawingBufferSize=function(w,k,V){B=w,Y=k,H=V,e.width=Math.floor(w*V),e.height=Math.floor(k*V),this.setViewport(0,0,w,k)},this.getCurrentViewport=function(w){return w.copy(y)},this.getViewport=function(w){return w.copy(bt)},this.setViewport=function(w,k,V,X){w.isVector4?bt.set(w.x,w.y,w.z,w.w):bt.set(w,k,V,X),Rt.viewport(y.copy(bt).multiplyScalar(H).round())},this.getScissor=function(w){return w.copy(Ut)},this.setScissor=function(w,k,V,X){w.isVector4?Ut.set(w.x,w.y,w.z,w.w):Ut.set(w,k,V,X),Rt.scissor(A.copy(Ut).multiplyScalar(H).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(w){Rt.setScissorTest(jt=w)},this.setOpaqueSort=function(w){nt=w},this.setTransparentSort=function(w){ct=w},this.getClearColor=function(w){return w.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor.apply(At,arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha.apply(At,arguments)},this.clear=function(w=!0,k=!0,V=!0){let X=0;if(w){let T=!1;if(I!==null){const F=I.texture.format;T=F===Aa||F===Ca||F===wa}if(T){const F=I.texture.type,W=F===bi||F===Yi||F===Qn||F===An||F===Ma||F===Ta,it=At.getClearColor(),at=At.getClearAlpha(),Tt=it.r,St=it.g,mt=it.b;W?(x[0]=Tt,x[1]=St,x[2]=mt,x[3]=at,z.clearBufferuiv(z.COLOR,0,x)):(v[0]=Tt,v[1]=St,v[2]=mt,v[3]=at,z.clearBufferiv(z.COLOR,0,v))}else X|=z.COLOR_BUFFER_BIT}k&&(X|=z.DEPTH_BUFFER_BIT),V&&(X|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),gt.dispose(),Zt.dispose(),wt.dispose(),M.dispose(),G.dispose(),Q.dispose(),oe.dispose(),O.dispose(),Mt.dispose(),$.dispose(),$.removeEventListener("sessionstart",Nn),$.removeEventListener("sessionend",pe),Be.stop()};function tt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const w=Gt.autoReset,k=_t.enabled,V=_t.autoUpdate,X=_t.needsUpdate,T=_t.type;ut(),Gt.autoReset=w,_t.enabled=k,_t.autoUpdate=V,_t.needsUpdate=X,_t.type=T}function dt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ot(w){const k=w.target;k.removeEventListener("dispose",Ot),de(k)}function de(w){xe(w),wt.remove(w)}function xe(w){const k=wt.get(w).programs;k!==void 0&&(k.forEach(function(V){Mt.releaseProgram(V)}),w.isShaderMaterial&&Mt.releaseShaderCache(w))}this.renderBufferDirect=function(w,k,V,X,T,F){k===null&&(k=ee);const W=T.isMesh&&T.matrixWorld.determinant()<0,it=oi(w,k,V,X,T);Rt.setMaterial(X,W);let at=V.index,Tt=1;if(X.wireframe===!0){if(at=et.getWireframeAttribute(V),at===void 0)return;Tt=2}const St=V.drawRange,mt=V.attributes.position;let Dt=St.start*Tt,Xt=(St.start+St.count)*Tt;F!==null&&(Dt=Math.max(Dt,F.start*Tt),Xt=Math.min(Xt,(F.start+F.count)*Tt)),at!==null?(Dt=Math.max(Dt,0),Xt=Math.min(Xt,at.count)):mt!=null&&(Dt=Math.max(Dt,0),Xt=Math.min(Xt,mt.count));const Jt=Xt-Dt;if(Jt<0||Jt===1/0)return;oe.setup(T,X,it,V,at);let te,qt=yt;if(at!==null&&(te=J.get(at),qt=Yt,qt.setIndex(te)),T.isMesh)X.wireframe===!0?(Rt.setLineWidth(X.wireframeLinewidth*ne()),qt.setMode(z.LINES)):qt.setMode(z.TRIANGLES);else if(T.isLine){let ft=X.linewidth;ft===void 0&&(ft=1),Rt.setLineWidth(ft*ne()),T.isLineSegments?qt.setMode(z.LINES):T.isLineLoop?qt.setMode(z.LINE_LOOP):qt.setMode(z.LINE_STRIP)}else T.isPoints?qt.setMode(z.POINTS):T.isSprite&&qt.setMode(z.TRIANGLES);if(T.isBatchedMesh)if(T._multiDrawInstances!==null)qt.renderMultiDrawInstances(T._multiDrawStarts,T._multiDrawCounts,T._multiDrawCount,T._multiDrawInstances);else if(zt.get("WEBGL_multi_draw"))qt.renderMultiDraw(T._multiDrawStarts,T._multiDrawCounts,T._multiDrawCount);else{const ft=T._multiDrawStarts,Me=T._multiDrawCounts,Vt=T._multiDrawCount,ye=at?J.get(at).bytesPerElement:1,tn=wt.get(X).currentProgram.getUniforms();for(let Fe=0;Fe<Vt;Fe++)tn.setValue(z,"_gl_DrawID",Fe),qt.render(ft[Fe]/ye,Me[Fe])}else if(T.isInstancedMesh)qt.renderInstances(Dt,Jt,T.count);else if(V.isInstancedBufferGeometry){const ft=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Me=Math.min(V.instanceCount,ft);qt.renderInstances(Dt,Jt,Me)}else qt.render(Dt,Jt)};function Qt(w,k,V){w.transparent===!0&&w.side===Je&&w.forceSinglePass===!1?(w.side=Ue,w.needsUpdate=!0,Ji(w,k,V),w.side=Ni,w.needsUpdate=!0,Ji(w,k,V),w.side=Je):Ji(w,k,V)}this.compile=function(w,k,V=null){V===null&&(V=w),d=Zt.get(V),d.init(k),E.push(d),V.traverseVisible(function(T){T.isLight&&T.layers.test(k.layers)&&(d.pushLight(T),T.castShadow&&d.pushShadow(T))}),w!==V&&w.traverseVisible(function(T){T.isLight&&T.layers.test(k.layers)&&(d.pushLight(T),T.castShadow&&d.pushShadow(T))}),d.setupLights();const X=new Set;return w.traverse(function(T){if(!(T.isMesh||T.isPoints||T.isLine||T.isSprite))return;const F=T.material;if(F)if(Array.isArray(F))for(let W=0;W<F.length;W++){const it=F[W];Qt(it,V,T),X.add(it)}else Qt(F,V,T),X.add(F)}),E.pop(),d=null,X},this.compileAsync=function(w,k,V=null){const X=this.compile(w,k,V);return new Promise(T=>{function F(){if(X.forEach(function(W){wt.get(W).currentProgram.isReady()&&X.delete(W)}),X.size===0){T(w);return}setTimeout(F,10)}zt.get("KHR_parallel_shader_compile")!==null?F():setTimeout(F,10)})};let we=null;function Ve(w){we&&we(w)}function Nn(){Be.stop()}function pe(){Be.start()}const Be=new Sl;Be.setAnimationLoop(Ve),typeof self<"u"&&Be.setContext(self),this.setAnimationLoop=function(w){we=w,$.setAnimationLoop(w),w===null?Be.stop():Be.start()},$.addEventListener("sessionstart",Nn),$.addEventListener("sessionend",pe),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(k),k=$.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,k,I),d=Zt.get(w,E.length),d.init(k),E.push(d),Ct.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),j.setFromProjectionMatrix(Ct),Et=this.localClippingEnabled,st=rt.init(this.clippingPlanes,Et),m=gt.get(w,S.length),m.init(),S.push(m),$.enabled===!0&&$.isPresenting===!0){const F=_.xr.getDepthSensingMesh();F!==null&&Ki(F,k,-1/0,_.sortObjects)}Ki(w,k,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(nt,ct),Wt=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,Wt&&At.addToRenderList(m,w),this.info.render.frame++,st===!0&&rt.beginShadows();const V=d.state.shadowsArray;_t.render(V,w,k),st===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,T=m.transmissive;if(d.setupLights(),k.isArrayCamera){const F=k.cameras;if(T.length>0)for(let W=0,it=F.length;W<it;W++){const at=F[W];ss(X,T,w,at)}Wt&&At.render(w);for(let W=0,it=F.length;W<it;W++){const at=F[W];Ze(m,w,at,at.viewport)}}else T.length>0&&ss(X,T,w,k),Wt&&At.render(w),Ze(m,w,k);I!==null&&(C.updateMultisampleRenderTarget(I),C.updateRenderTargetMipmap(I)),w.isScene===!0&&w.onAfterRender(_,w,k),oe.resetDefaultState(),b=-1,g=null,E.pop(),E.length>0?(d=E[E.length-1],st===!0&&rt.setGlobalState(_.clippingPlanes,d.state.camera)):d=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function Ki(w,k,V,X){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)V=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLight)d.pushLight(w),w.castShadow&&d.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||j.intersectsSprite(w)){X&&Nt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ct);const W=Q.update(w),it=w.material;it.visible&&m.push(w,W,it,V,Nt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||j.intersectsObject(w))){const W=Q.update(w),it=w.material;if(X&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Nt.copy(w.boundingSphere.center)):(W.boundingSphere===null&&W.computeBoundingSphere(),Nt.copy(W.boundingSphere.center)),Nt.applyMatrix4(w.matrixWorld).applyMatrix4(Ct)),Array.isArray(it)){const at=W.groups;for(let Tt=0,St=at.length;Tt<St;Tt++){const mt=at[Tt],Dt=it[mt.materialIndex];Dt&&Dt.visible&&m.push(w,W,Dt,V,Nt.z,mt)}}else it.visible&&m.push(w,W,it,V,Nt.z,null)}}const F=w.children;for(let W=0,it=F.length;W<it;W++)Ki(F[W],k,V,X)}function Ze(w,k,V,X){const T=w.opaque,F=w.transmissive,W=w.transparent;d.setupLightsView(V),st===!0&&rt.setGlobalState(_.clippingPlanes,V),X&&Rt.viewport(y.copy(X)),T.length>0&&Qi(T,k,V),F.length>0&&Qi(F,k,V),W.length>0&&Qi(W,k,V),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function ss(w,k,V,X){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[X.id]===void 0&&(d.state.transmissionRenderTarget[X.id]=new $i(1,1,{generateMipmaps:!0,type:zt.has("EXT_color_buffer_half_float")||zt.has("EXT_color_buffer_float")?ts:bi,minFilter:mi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Kt.workingColorSpace}));const F=d.state.transmissionRenderTarget[X.id],W=X.viewport||y;F.setSize(W.z,W.w);const it=_.getRenderTarget();_.setRenderTarget(F),_.getClearColor(U),q=_.getClearAlpha(),q<1&&_.setClearColor(16777215,.5),_.clear(),Wt&&At.render(V);const at=_.toneMapping;_.toneMapping=Di;const Tt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),d.setupLightsView(X),st===!0&&rt.setGlobalState(_.clippingPlanes,X),Qi(w,V,X),C.updateMultisampleRenderTarget(F),C.updateRenderTargetMipmap(F),zt.has("WEBGL_multisampled_render_to_texture")===!1){let St=!1;for(let mt=0,Dt=k.length;mt<Dt;mt++){const Xt=k[mt],Jt=Xt.object,te=Xt.geometry,qt=Xt.material,ft=Xt.group;if(qt.side===Je&&Jt.layers.test(X.layers)){const Me=qt.side;qt.side=Ue,qt.needsUpdate=!0,rs(Jt,V,X,te,qt,ft),qt.side=Me,qt.needsUpdate=!0,St=!0}}St===!0&&(C.updateMultisampleRenderTarget(F),C.updateRenderTargetMipmap(F))}_.setRenderTarget(it),_.setClearColor(U,q),Tt!==void 0&&(X.viewport=Tt),_.toneMapping=at}function Qi(w,k,V){const X=k.isScene===!0?k.overrideMaterial:null;for(let T=0,F=w.length;T<F;T++){const W=w[T],it=W.object,at=W.geometry,Tt=X===null?W.material:X,St=W.group;it.layers.test(V.layers)&&rs(it,k,V,at,Tt,St)}}function rs(w,k,V,X,T,F){w.onBeforeRender(_,k,V,X,T,F),w.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),T.onBeforeRender(_,k,V,X,w,F),T.transparent===!0&&T.side===Je&&T.forceSinglePass===!1?(T.side=Ue,T.needsUpdate=!0,_.renderBufferDirect(V,k,X,T,w,F),T.side=Ni,T.needsUpdate=!0,_.renderBufferDirect(V,k,X,T,w,F),T.side=Je):_.renderBufferDirect(V,k,X,T,w,F),w.onAfterRender(_,k,V,X,T,F)}function Ji(w,k,V){k.isScene!==!0&&(k=ee);const X=wt.get(w),T=d.state.lights,F=d.state.shadowsArray,W=T.state.version,it=Mt.getParameters(w,T.state,F,k,V),at=Mt.getProgramCacheKey(it);let Tt=X.programs;X.environment=w.isMeshStandardMaterial?k.environment:null,X.fog=k.fog,X.envMap=(w.isMeshStandardMaterial?G:M).get(w.envMap||X.environment),X.envMapRotation=X.environment!==null&&w.envMap===null?k.environmentRotation:w.envMapRotation,Tt===void 0&&(w.addEventListener("dispose",Ot),Tt=new Map,X.programs=Tt);let St=Tt.get(at);if(St!==void 0){if(X.currentProgram===St&&X.lightsStateVersion===W)return Un(w,it),St}else it.uniforms=Mt.getUniforms(w),w.onBeforeCompile(it,_),St=Mt.acquireProgram(it,at),Tt.set(at,St),X.uniforms=it.uniforms;const mt=X.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(mt.clippingPlanes=rt.uniform),Un(w,it),X.needsLights=os(w),X.lightsStateVersion=W,X.needsLights&&(mt.ambientLightColor.value=T.state.ambient,mt.lightProbe.value=T.state.probe,mt.directionalLights.value=T.state.directional,mt.directionalLightShadows.value=T.state.directionalShadow,mt.spotLights.value=T.state.spot,mt.spotLightShadows.value=T.state.spotShadow,mt.rectAreaLights.value=T.state.rectArea,mt.ltc_1.value=T.state.rectAreaLTC1,mt.ltc_2.value=T.state.rectAreaLTC2,mt.pointLights.value=T.state.point,mt.pointLightShadows.value=T.state.pointShadow,mt.hemisphereLights.value=T.state.hemi,mt.directionalShadowMap.value=T.state.directionalShadowMap,mt.directionalShadowMatrix.value=T.state.directionalShadowMatrix,mt.spotShadowMap.value=T.state.spotShadowMap,mt.spotLightMatrix.value=T.state.spotLightMatrix,mt.spotLightMap.value=T.state.spotLightMap,mt.pointShadowMap.value=T.state.pointShadowMap,mt.pointShadowMatrix.value=T.state.pointShadowMatrix),X.currentProgram=St,X.uniformsList=null,St}function On(w){if(w.uniformsList===null){const k=w.currentProgram.getUniforms();w.uniformsList=Hs.seqWithValue(k.seq,w.uniforms)}return w.uniformsList}function Un(w,k){const V=wt.get(w);V.outputColorSpace=k.outputColorSpace,V.batching=k.batching,V.batchingColor=k.batchingColor,V.instancing=k.instancing,V.instancingColor=k.instancingColor,V.instancingMorph=k.instancingMorph,V.skinning=k.skinning,V.morphTargets=k.morphTargets,V.morphNormals=k.morphNormals,V.morphColors=k.morphColors,V.morphTargetsCount=k.morphTargetsCount,V.numClippingPlanes=k.numClippingPlanes,V.numIntersection=k.numClipIntersection,V.vertexAlphas=k.vertexAlphas,V.vertexTangents=k.vertexTangents,V.toneMapping=k.toneMapping}function oi(w,k,V,X,T){k.isScene!==!0&&(k=ee),C.resetTextureUnits();const F=k.fog,W=X.isMeshStandardMaterial?k.environment:null,it=I===null?_.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:In,at=(X.isMeshStandardMaterial?G:M).get(X.envMap||W),Tt=X.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,St=!!V.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),mt=!!V.morphAttributes.position,Dt=!!V.morphAttributes.normal,Xt=!!V.morphAttributes.color;let Jt=Di;X.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Jt=_.toneMapping);const te=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,qt=te!==void 0?te.length:0,ft=wt.get(X),Me=d.state.lights;if(st===!0&&(Et===!0||w!==g)){const We=w===g&&X.id===b;rt.setState(X,w,We)}let Vt=!1;X.version===ft.__version?(ft.needsLights&&ft.lightsStateVersion!==Me.state.version||ft.outputColorSpace!==it||T.isBatchedMesh&&ft.batching===!1||!T.isBatchedMesh&&ft.batching===!0||T.isBatchedMesh&&ft.batchingColor===!0&&T.colorTexture===null||T.isBatchedMesh&&ft.batchingColor===!1&&T.colorTexture!==null||T.isInstancedMesh&&ft.instancing===!1||!T.isInstancedMesh&&ft.instancing===!0||T.isSkinnedMesh&&ft.skinning===!1||!T.isSkinnedMesh&&ft.skinning===!0||T.isInstancedMesh&&ft.instancingColor===!0&&T.instanceColor===null||T.isInstancedMesh&&ft.instancingColor===!1&&T.instanceColor!==null||T.isInstancedMesh&&ft.instancingMorph===!0&&T.morphTexture===null||T.isInstancedMesh&&ft.instancingMorph===!1&&T.morphTexture!==null||ft.envMap!==at||X.fog===!0&&ft.fog!==F||ft.numClippingPlanes!==void 0&&(ft.numClippingPlanes!==rt.numPlanes||ft.numIntersection!==rt.numIntersection)||ft.vertexAlphas!==Tt||ft.vertexTangents!==St||ft.morphTargets!==mt||ft.morphNormals!==Dt||ft.morphColors!==Xt||ft.toneMapping!==Jt||ft.morphTargetsCount!==qt)&&(Vt=!0):(Vt=!0,ft.__version=X.version);let ye=ft.currentProgram;Vt===!0&&(ye=Ji(X,k,T));let tn=!1,Fe=!1,Bn=!1;const he=ye.getUniforms(),si=ft.uniforms;if(Rt.useProgram(ye.program)&&(tn=!0,Fe=!0,Bn=!0),X.id!==b&&(b=X.id,Fe=!0),tn||g!==w){Rt.buffers.depth.getReversed()?(ot.copy(w.projectionMatrix),zc(ot),Gc(ot),he.setValue(z,"projectionMatrix",ot)):he.setValue(z,"projectionMatrix",w.projectionMatrix),he.setValue(z,"viewMatrix",w.matrixWorldInverse);const Si=he.map.cameraPosition;Si!==void 0&&Si.setValue(z,Pt.setFromMatrixPosition(w.matrixWorld)),Lt.logarithmicDepthBuffer&&he.setValue(z,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&he.setValue(z,"isOrthographic",w.isOrthographicCamera===!0),g!==w&&(g=w,Fe=!0,Bn=!0)}if(T.isSkinnedMesh){he.setOptional(z,T,"bindMatrix"),he.setOptional(z,T,"bindMatrixInverse");const We=T.skeleton;We&&(We.boneTexture===null&&We.computeBoneTexture(),he.setValue(z,"boneTexture",We.boneTexture,C))}T.isBatchedMesh&&(he.setOptional(z,T,"batchingTexture"),he.setValue(z,"batchingTexture",T._matricesTexture,C),he.setOptional(z,T,"batchingIdTexture"),he.setValue(z,"batchingIdTexture",T._indirectTexture,C),he.setOptional(z,T,"batchingColorTexture"),T._colorsTexture!==null&&he.setValue(z,"batchingColorTexture",T._colorsTexture,C));const Fn=V.morphAttributes;if((Fn.position!==void 0||Fn.normal!==void 0||Fn.color!==void 0)&&It.update(T,V,ye),(Fe||ft.receiveShadow!==T.receiveShadow)&&(ft.receiveShadow=T.receiveShadow,he.setValue(z,"receiveShadow",T.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(si.envMap.value=at,si.flipEnvMap.value=at.isCubeTexture&&at.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&k.environment!==null&&(si.envMapIntensity.value=k.environmentIntensity),Fe&&(he.setValue(z,"toneMappingExposure",_.toneMappingExposure),ft.needsLights&&as(si,Bn),F&&X.fog===!0&&lt.refreshFogUniforms(si,F),lt.refreshMaterialUniforms(si,X,H,Y,d.state.transmissionRenderTarget[w.id]),Hs.upload(z,On(ft),si,C)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Hs.upload(z,On(ft),si,C),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&he.setValue(z,"center",T.center),he.setValue(z,"modelViewMatrix",T.modelViewMatrix),he.setValue(z,"normalMatrix",T.normalMatrix),he.setValue(z,"modelMatrix",T.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const We=X.uniformsGroups;for(let Si=0,Ei=We.length;Si<Ei;Si++){const ka=We[Si];O.update(ka,ye),O.bind(ka,ye)}}return ye}function as(w,k){w.ambientLightColor.needsUpdate=k,w.lightProbe.needsUpdate=k,w.directionalLights.needsUpdate=k,w.directionalLightShadows.needsUpdate=k,w.pointLights.needsUpdate=k,w.pointLightShadows.needsUpdate=k,w.spotLights.needsUpdate=k,w.spotLightShadows.needsUpdate=k,w.rectAreaLights.needsUpdate=k,w.hemisphereLights.needsUpdate=k}function os(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(w,k,V){wt.get(w.texture).__webglTexture=k,wt.get(w.depthTexture).__webglTexture=V;const X=wt.get(w);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=V===void 0,X.__autoAllocateDepthBuffer||zt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,k){const V=wt.get(w);V.__webglFramebuffer=k,V.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(w,k=0,V=0){I=w,R=k,L=V;let X=!0,T=null,F=!1,W=!1;if(w){const at=wt.get(w);if(at.__useDefaultFramebuffer!==void 0)Rt.bindFramebuffer(z.FRAMEBUFFER,null),X=!1;else if(at.__webglFramebuffer===void 0)C.setupRenderTarget(w);else if(at.__hasExternalTextures)C.rebindTextures(w,wt.get(w.texture).__webglTexture,wt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const mt=w.depthTexture;if(at.__boundDepthTexture!==mt){if(mt!==null&&wt.has(mt)&&(w.width!==mt.image.width||w.height!==mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(w)}}const Tt=w.texture;(Tt.isData3DTexture||Tt.isDataArrayTexture||Tt.isCompressedArrayTexture)&&(W=!0);const St=wt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(St[k])?T=St[k][V]:T=St[k],F=!0):w.samples>0&&C.useMultisampledRTT(w)===!1?T=wt.get(w).__webglMultisampledFramebuffer:Array.isArray(St)?T=St[V]:T=St,y.copy(w.viewport),A.copy(w.scissor),P=w.scissorTest}else y.copy(bt).multiplyScalar(H).floor(),A.copy(Ut).multiplyScalar(H).floor(),P=jt;if(Rt.bindFramebuffer(z.FRAMEBUFFER,T)&&X&&Rt.drawBuffers(w,T),Rt.viewport(y),Rt.scissor(A),Rt.setScissorTest(P),F){const at=wt.get(w.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+k,at.__webglTexture,V)}else if(W){const at=wt.get(w.texture),Tt=k||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,at.__webglTexture,V||0,Tt)}b=-1},this.readRenderTargetPixels=function(w,k,V,X,T,F,W){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let it=wt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&W!==void 0&&(it=it[W]),it){Rt.bindFramebuffer(z.FRAMEBUFFER,it);try{const at=w.texture,Tt=at.format,St=at.type;if(!Lt.textureFormatReadable(Tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Lt.textureTypeReadable(St)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=w.width-X&&V>=0&&V<=w.height-T&&z.readPixels(k,V,X,T,Bt.convert(Tt),Bt.convert(St),F)}finally{const at=I!==null?wt.get(I).__webglFramebuffer:null;Rt.bindFramebuffer(z.FRAMEBUFFER,at)}}},this.readRenderTargetPixelsAsync=async function(w,k,V,X,T,F,W){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let it=wt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&W!==void 0&&(it=it[W]),it){const at=w.texture,Tt=at.format,St=at.type;if(!Lt.textureFormatReadable(Tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Lt.textureTypeReadable(St))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=w.width-X&&V>=0&&V<=w.height-T){Rt.bindFramebuffer(z.FRAMEBUFFER,it);const mt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,mt),z.bufferData(z.PIXEL_PACK_BUFFER,F.byteLength,z.STREAM_READ),z.readPixels(k,V,X,T,Bt.convert(Tt),Bt.convert(St),0);const Dt=I!==null?wt.get(I).__webglFramebuffer:null;Rt.bindFramebuffer(z.FRAMEBUFFER,Dt);const Xt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await kc(z,Xt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,mt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,F),z.deleteBuffer(mt),z.deleteSync(Xt),F}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,k=null,V=0){w.isTexture!==!0&&($n("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,w=arguments[1]);const X=Math.pow(2,-V),T=Math.floor(w.image.width*X),F=Math.floor(w.image.height*X),W=k!==null?k.x:0,it=k!==null?k.y:0;C.setTexture2D(w,0),z.copyTexSubImage2D(z.TEXTURE_2D,V,0,0,W,it,T,F),Rt.unbindTexture()},this.copyTextureToTexture=function(w,k,V=null,X=null,T=0){w.isTexture!==!0&&($n("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,w=arguments[1],k=arguments[2],T=arguments[3]||0,V=null);let F,W,it,at,Tt,St,mt,Dt,Xt;const Jt=w.isCompressedTexture?w.mipmaps[T]:w.image;V!==null?(F=V.max.x-V.min.x,W=V.max.y-V.min.y,it=V.isBox3?V.max.z-V.min.z:1,at=V.min.x,Tt=V.min.y,St=V.isBox3?V.min.z:0):(F=Jt.width,W=Jt.height,it=Jt.depth||1,at=0,Tt=0,St=0),X!==null?(mt=X.x,Dt=X.y,Xt=X.z):(mt=0,Dt=0,Xt=0);const te=Bt.convert(k.format),qt=Bt.convert(k.type);let ft;k.isData3DTexture?(C.setTexture3D(k,0),ft=z.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(C.setTexture2DArray(k,0),ft=z.TEXTURE_2D_ARRAY):(C.setTexture2D(k,0),ft=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,k.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,k.unpackAlignment);const Me=z.getParameter(z.UNPACK_ROW_LENGTH),Vt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),ye=z.getParameter(z.UNPACK_SKIP_PIXELS),tn=z.getParameter(z.UNPACK_SKIP_ROWS),Fe=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Jt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Jt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,at),z.pixelStorei(z.UNPACK_SKIP_ROWS,Tt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,St);const Bn=w.isDataArrayTexture||w.isData3DTexture,he=k.isDataArrayTexture||k.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const si=wt.get(w),Fn=wt.get(k),We=wt.get(si.__renderTarget),Si=wt.get(Fn.__renderTarget);Rt.bindFramebuffer(z.READ_FRAMEBUFFER,We.__webglFramebuffer),Rt.bindFramebuffer(z.DRAW_FRAMEBUFFER,Si.__webglFramebuffer);for(let Ei=0;Ei<it;Ei++)Bn&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,wt.get(w).__webglTexture,T,St+Ei),w.isDepthTexture?(he&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,wt.get(k).__webglTexture,T,Xt+Ei),z.blitFramebuffer(at,Tt,F,W,mt,Dt,F,W,z.DEPTH_BUFFER_BIT,z.NEAREST)):he?z.copyTexSubImage3D(ft,T,mt,Dt,Xt+Ei,at,Tt,F,W):z.copyTexSubImage2D(ft,T,mt,Dt,Xt+Ei,at,Tt,F,W);Rt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else he?w.isDataTexture||w.isData3DTexture?z.texSubImage3D(ft,T,mt,Dt,Xt,F,W,it,te,qt,Jt.data):k.isCompressedArrayTexture?z.compressedTexSubImage3D(ft,T,mt,Dt,Xt,F,W,it,te,Jt.data):z.texSubImage3D(ft,T,mt,Dt,Xt,F,W,it,te,qt,Jt):w.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,T,mt,Dt,F,W,te,qt,Jt.data):w.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,T,mt,Dt,Jt.width,Jt.height,te,Jt.data):z.texSubImage2D(z.TEXTURE_2D,T,mt,Dt,F,W,te,qt,Jt);z.pixelStorei(z.UNPACK_ROW_LENGTH,Me),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Vt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,ye),z.pixelStorei(z.UNPACK_SKIP_ROWS,tn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Fe),T===0&&k.generateMipmaps&&z.generateMipmap(ft),Rt.unbindTexture()},this.copyTextureToTexture3D=function(w,k,V=null,X=null,T=0){return w.isTexture!==!0&&($n("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,X=arguments[1]||null,w=arguments[2],k=arguments[3],T=arguments[4]||0),$n('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,k,V,X,T)},this.initRenderTarget=function(w){wt.get(w).__webglFramebuffer===void 0&&C.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),Rt.unbindTexture()},this.resetState=function(){R=0,L=0,I=null,Rt.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Kt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Kt._getUnpackColorSpace()}}class Pa{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new $t(t),this.density=e}clone(){return new Pa(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Qf extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ai,this.environmentIntensity=1,this.environmentRotation=new ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Jf{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=_a,this.updateRanges=[],this.version=0,this.uuid=yi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Re=new N;class Xs{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=ti(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ie(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ti(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ti(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ti(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ti(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array),s=ie(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),i=ie(i,this.array),s=ie(s,this.array),r=ie(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ni(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Xs(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Da extends Zi{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new $t(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let vn;const Vn=new N,xn=new N,yn=new N,_n=new Ft,Wn=new Ft,Rl=new ue,Ls=new N,Xn=new N,Is=new N,ko=new Ft,Lr=new Ft,zo=new Ft;class Ll extends Ee{constructor(t=new Da){if(super(),this.isSprite=!0,this.type="Sprite",vn===void 0){vn=new Ne;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Jf(e,5);vn.setIndex([0,1,2,0,2,3]),vn.setAttribute("position",new Xs(i,3,0,!1)),vn.setAttribute("uv",new Xs(i,2,3,!1))}this.geometry=vn,this.material=t,this.center=new Ft(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),xn.setFromMatrixScale(this.matrixWorld),Rl.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),yn.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&xn.multiplyScalar(-yn.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const a=this.center;Ps(Ls.set(-.5,-.5,0),yn,a,xn,s,r),Ps(Xn.set(.5,-.5,0),yn,a,xn,s,r),Ps(Is.set(.5,.5,0),yn,a,xn,s,r),ko.set(0,0),Lr.set(1,0),zo.set(1,1);let o=t.ray.intersectTriangle(Ls,Xn,Is,!1,Vn);if(o===null&&(Ps(Xn.set(-.5,.5,0),yn,a,xn,s,r),Lr.set(0,1),o=t.ray.intersectTriangle(Ls,Is,Xn,!1,Vn),o===null))return;const l=t.ray.origin.distanceTo(Vn);l<t.near||l>t.far||e.push({distance:l,point:Vn.clone(),uv:$e.getInterpolation(Vn,Ls,Xn,Is,ko,Lr,zo,new Ft),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ps(n,t,e,i,s,r){_n.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Wn.x=r*_n.x-s*_n.y,Wn.y=s*_n.x+r*_n.y):Wn.copy(_n),n.copy(t),n.x+=Wn.x,n.y+=Wn.y,n.applyMatrix4(Rl)}class Il extends Zi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new $t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const qs=new N,Ys=new N,Go=new ue,qn=new fl,Ds=new Qs,Ir=new N,Ho=new N;class tm extends Ee{constructor(t=new Ne,e=new Il){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)qs.fromBufferAttribute(e,s-1),Ys.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=qs.distanceTo(Ys);t.setAttribute("lineDistance",new ce(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ds.copy(i.boundingSphere),Ds.applyMatrix4(s),Ds.radius+=r,t.ray.intersectsSphere(Ds)===!1)return;Go.copy(s).invert(),qn.copy(t.ray).applyMatrix4(Go);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){const f=Math.max(0,a.start),x=Math.min(h.count,a.start+a.count);for(let v=f,m=x-1;v<m;v+=c){const d=h.getX(v),S=h.getX(v+1),E=Ns(this,t,qn,l,d,S);E&&e.push(E)}if(this.isLineLoop){const v=h.getX(x-1),m=h.getX(f),d=Ns(this,t,qn,l,v,m);d&&e.push(d)}}else{const f=Math.max(0,a.start),x=Math.min(u.count,a.start+a.count);for(let v=f,m=x-1;v<m;v+=c){const d=Ns(this,t,qn,l,v,v+1);d&&e.push(d)}if(this.isLineLoop){const v=Ns(this,t,qn,l,x-1,f);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ns(n,t,e,i,s,r){const a=n.geometry.attributes.position;if(qs.fromBufferAttribute(a,s),Ys.fromBufferAttribute(a,r),e.distanceSqToSegment(qs,Ys,Ir,Ho)>i)return;Ir.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Ir);if(!(l<t.near||l>t.far))return{distance:l,point:Ho.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const Vo=new N,Wo=new N;class em extends tm{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Vo.fromBufferAttribute(e,s),Wo.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Vo.distanceTo(Wo);t.setAttribute("lineDistance",new ce(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class $s extends De{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class re extends Ne{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],p=[],u=[],f=[];let x=0;const v=[],m=i/2;let d=0;S(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new ce(p,3)),this.setAttribute("normal",new ce(u,3)),this.setAttribute("uv",new ce(f,2));function S(){const _=new N,D=new N;let R=0;const L=(e-t)/i;for(let I=0;I<=r;I++){const b=[],g=I/r,y=g*(e-t)+t;for(let A=0;A<=s;A++){const P=A/s,U=P*l+o,q=Math.sin(U),B=Math.cos(U);D.x=y*q,D.y=-g*i+m,D.z=y*B,p.push(D.x,D.y,D.z),_.set(q,L,B).normalize(),u.push(_.x,_.y,_.z),f.push(P,1-g),b.push(x++)}v.push(b)}for(let I=0;I<s;I++)for(let b=0;b<r;b++){const g=v[b][I],y=v[b+1][I],A=v[b+1][I+1],P=v[b][I+1];(t>0||b!==0)&&(h.push(g,y,P),R+=3),(e>0||b!==r-1)&&(h.push(y,A,P),R+=3)}c.addGroup(d,R,0),d+=R}function E(_){const D=x,R=new Ft,L=new N;let I=0;const b=_===!0?t:e,g=_===!0?1:-1;for(let A=1;A<=s;A++)p.push(0,m*g,0),u.push(0,g,0),f.push(.5,.5),x++;const y=x;for(let A=0;A<=s;A++){const U=A/s*l+o,q=Math.cos(U),B=Math.sin(U);L.x=b*B,L.y=m*g,L.z=b*q,p.push(L.x,L.y,L.z),u.push(0,g,0),R.x=q*.5+.5,R.y=B*.5*g+.5,f.push(R.x,R.y),x++}for(let A=0;A<s;A++){const P=D+A,U=y+A;_===!0?h.push(U,U+1,P):h.push(U+1,U,P),I+=3}c.addGroup(d,I,_===!0?1:2),d+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new re(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class xi extends re{constructor(t=1,e=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new xi(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ns extends Ne{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],a=[];o(s),c(i),h(),this.setAttribute("position",new ce(r,3)),this.setAttribute("normal",new ce(r.slice(),3)),this.setAttribute("uv",new ce(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const E=new N,_=new N,D=new N;for(let R=0;R<e.length;R+=3)f(e[R+0],E),f(e[R+1],_),f(e[R+2],D),l(E,_,D,S)}function l(S,E,_,D){const R=D+1,L=[];for(let I=0;I<=R;I++){L[I]=[];const b=S.clone().lerp(_,I/R),g=E.clone().lerp(_,I/R),y=R-I;for(let A=0;A<=y;A++)A===0&&I===R?L[I][A]=b:L[I][A]=b.clone().lerp(g,A/y)}for(let I=0;I<R;I++)for(let b=0;b<2*(R-I)-1;b++){const g=Math.floor(b/2);b%2===0?(u(L[I][g+1]),u(L[I+1][g]),u(L[I][g])):(u(L[I][g+1]),u(L[I+1][g+1]),u(L[I+1][g]))}}function c(S){const E=new N;for(let _=0;_<r.length;_+=3)E.x=r[_+0],E.y=r[_+1],E.z=r[_+2],E.normalize().multiplyScalar(S),r[_+0]=E.x,r[_+1]=E.y,r[_+2]=E.z}function h(){const S=new N;for(let E=0;E<r.length;E+=3){S.x=r[E+0],S.y=r[E+1],S.z=r[E+2];const _=m(S)/2/Math.PI+.5,D=d(S)/Math.PI+.5;a.push(_,1-D)}x(),p()}function p(){for(let S=0;S<a.length;S+=6){const E=a[S+0],_=a[S+2],D=a[S+4],R=Math.max(E,_,D),L=Math.min(E,_,D);R>.9&&L<.1&&(E<.2&&(a[S+0]+=1),_<.2&&(a[S+2]+=1),D<.2&&(a[S+4]+=1))}}function u(S){r.push(S.x,S.y,S.z)}function f(S,E){const _=S*3;E.x=t[_+0],E.y=t[_+1],E.z=t[_+2]}function x(){const S=new N,E=new N,_=new N,D=new N,R=new Ft,L=new Ft,I=new Ft;for(let b=0,g=0;b<r.length;b+=9,g+=6){S.set(r[b+0],r[b+1],r[b+2]),E.set(r[b+3],r[b+4],r[b+5]),_.set(r[b+6],r[b+7],r[b+8]),R.set(a[g+0],a[g+1]),L.set(a[g+2],a[g+3]),I.set(a[g+4],a[g+5]),D.copy(S).add(E).add(_).divideScalar(3);const y=m(D);v(R,g+0,S,y),v(L,g+2,E,y),v(I,g+4,_,y)}}function v(S,E,_,D){D<0&&S.x===1&&(a[E]=S.x-1),_.x===0&&_.z===0&&(a[E]=D/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function d(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ns(t.vertices,t.indices,t.radius,t.details)}}class tr extends ns{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new tr(t.radius,t.detail)}}class Na extends ns{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Na(t.radius,t.detail)}}class Oa extends ns{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Oa(t.radius,t.detail)}}class Ua extends Ne{constructor(t=.5,e=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let p=t;const u=(e-t)/s,f=new N,x=new Ft;for(let v=0;v<=s;v++){for(let m=0;m<=i;m++){const d=r+m/i*a;f.x=p*Math.cos(d),f.y=p*Math.sin(d),l.push(f.x,f.y,f.z),c.push(0,0,1),x.x=(f.x/e+1)/2,x.y=(f.y/e+1)/2,h.push(x.x,x.y)}p+=u}for(let v=0;v<s;v++){const m=v*(i+1);for(let d=0;d<i;d++){const S=d+m,E=S,_=S+i+1,D=S+i+2,R=S+1;o.push(E,_,R),o.push(_,D,R)}}this.setIndex(o),this.setAttribute("position",new ce(l,3)),this.setAttribute("normal",new ce(c,3)),this.setAttribute("uv",new ce(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ua(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ii extends Ne{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],p=new N,u=new N,f=[],x=[],v=[],m=[];for(let d=0;d<=i;d++){const S=[],E=d/i;let _=0;d===0&&a===0?_=.5/e:d===i&&l===Math.PI&&(_=-.5/e);for(let D=0;D<=e;D++){const R=D/e;p.x=-t*Math.cos(s+R*r)*Math.sin(a+E*o),p.y=t*Math.cos(a+E*o),p.z=t*Math.sin(s+R*r)*Math.sin(a+E*o),x.push(p.x,p.y,p.z),u.copy(p).normalize(),v.push(u.x,u.y,u.z),m.push(R+_,1-E),S.push(c++)}h.push(S)}for(let d=0;d<i;d++)for(let S=0;S<e;S++){const E=h[d][S+1],_=h[d][S],D=h[d+1][S],R=h[d+1][S+1];(d!==0||a>0)&&f.push(E,_,R),(d!==i-1||l<Math.PI)&&f.push(_,D,R)}this.setIndex(f),this.setAttribute("position",new ce(x,3)),this.setAttribute("normal",new ce(v,3)),this.setAttribute("uv",new ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ii(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ji extends Ne{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new N,p=new N,u=new N;for(let f=0;f<=i;f++)for(let x=0;x<=s;x++){const v=x/s*r,m=f/i*Math.PI*2;p.x=(t+e*Math.cos(m))*Math.cos(v),p.y=(t+e*Math.cos(m))*Math.sin(v),p.z=e*Math.sin(m),o.push(p.x,p.y,p.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),u.subVectors(p,h).normalize(),l.push(u.x,u.y,u.z),c.push(x/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let x=1;x<=s;x++){const v=(s+1)*f+x-1,m=(s+1)*(f-1)+x-1,d=(s+1)*(f-1)+x,S=(s+1)*f+x;a.push(v,m,S),a.push(m,d,S)}this.setIndex(a),this.setAttribute("position",new ce(o,3)),this.setAttribute("normal",new ce(l,3)),this.setAttribute("uv",new ce(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ji(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class xt extends Zi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new $t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cl,this.normalScale=new Ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ba extends Ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new $t(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Pr=new ue,Xo=new N,qo=new N;class Pl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ft(512,512),this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new La,this._frameExtents=new Ft(1,1),this._viewportCount=1,this._viewports=[new ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Xo.setFromMatrixPosition(t.matrixWorld),e.position.copy(Xo),qo.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(qo),e.updateMatrixWorld(),Pr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pr),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Pr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Yo=new ue,Yn=new N,Dr=new N;class im extends Pl{constructor(){super(new Ge(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ft(4,2),this._viewportCount=6,this._viewports=[new ae(2,1,1,1),new ae(0,1,1,1),new ae(3,1,1,1),new ae(1,1,1,1),new ae(3,0,1,1),new ae(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Yn.setFromMatrixPosition(t.matrixWorld),i.position.copy(Yn),Dr.copy(i.position),Dr.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Dr),i.updateMatrixWorld(),s.makeTranslation(-Yn.x,-Yn.y,-Yn.z),Yo.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yo)}}class le extends Ba{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new im}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class nm extends Pl{constructor(){super(new El(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sm extends Ba{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.shadow=new nm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class rm extends Ba{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Nr extends em{constructor(t=10,e=10,i=4473924,s=8947848){i=new $t(i),s=new $t(s);const r=e/2,a=t/e,o=t/2,l=[],c=[];for(let u=0,f=0,x=-o;u<=e;u++,x+=a){l.push(-o,0,x,o,0,x),l.push(x,0,-o,x,0,o);const v=u===r?i:s;v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3}const h=new Ne;h.setAttribute("position",new ce(l,3)),h.setAttribute("color",new ce(c,3));const p=new Il({vertexColors:!0,toneMapped:!1});super(h,p),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sa);const Zs={flux:{id:"flux",name:"Flux",number:"01",role:"Lead Explorer",cost:0,bodyColor:16317180,metalness:.08,roughness:.78,accentColor:61695,ringColor:3718648,clawColor:16436245,dishColor:165063,thrustColor:3718648,underglowColor:61695,maxSpeed:4.5,acceleration:14,radius:.9,spawn:{x:-14,z:14}},checkers:{id:"checkers",name:"Tug",number:"02",role:"Heavy Freight Hauler",cost:500,bodyColor:16096779,metalness:.35,roughness:.45,accentColor:16498468,ringColor:16498468,clawColor:16347926,dishColor:14251782,thrustColor:16347926,underglowColor:16755200,maxSpeed:3.9,acceleration:12.5,radius:.94,spawn:{x:-11,z:14}},scanners:{id:"scanners",name:"Scope",number:"03",role:"Vein Sonar Scout",cost:1e3,bodyColor:1096065,metalness:.35,roughness:.45,accentColor:3462041,ringColor:3462041,clawColor:1096065,dishColor:3462041,thrustColor:3462041,underglowColor:65416,maxSpeed:4.9,acceleration:15,radius:.88,spawn:{x:-14,z:11}},tank:{id:"tank",name:"Dozer",number:"04",role:"Armored Bulldozer",cost:1500,bodyColor:16436245,metalness:.35,roughness:.45,accentColor:14427686,ringColor:15680580,clawColor:14427686,dishColor:12131356,thrustColor:15680580,underglowColor:16719390,maxSpeed:3.6,acceleration:16.5,radius:1,spawn:{x:-11,z:11}}};Zs.sparky=Zs.flux;class am{constructor(t,e={}){this.scene=t,this.mesh=new fe;const i=Zs[e.id]||Zs.flux;this.config={...i,...e},this.id=this.config.id,this.name=this.config.name,this.role=this.config.role,this.number=this.config.number,this.cost=this.config.cost,this.radius=this.config.radius||.9,this.height=.8;const s=this.config.spawn||{x:0,z:0};this.position=new N(s.x,.4,s.z),this.velocity=new N(0,0,0),this.maxSpeed=this.config.maxSpeed||4.5,this.acceleration=this.config.acceleration||14,this.damping=.88,this.heldItem=null,this.grabCooldown=0,this.clawAngle=.2,this.circuitActuators={thrust_n:!1,thrust_s:!1,thrust_e:!1,thrust_w:!1,beacon_ping:!1,aux_light:!1,grabber:!1},this.sensors={bumper_n:!1,bumper_s:!1,bumper_e:!1,bumper_w:!1,radar_ping:!1,item_detect:!1,energy_low:!1,energy_crit:!1,energy_dock:!1},this.energy=100,this.maxEnergy=100,this.isStranded=!1,this.isCharging=!1,this.chargeHumCooldown=0,this.thrustersActive=!1,this.bumperMaterials={},this.thrusterFlames={},this.thrusterLights={},this.empStunTimer=0,this.buildModel(),t.add(this.mesh),this.mesh.position.copy(this.position)}buildModel(){const t=new Ua(.72,.94,24),e=new me({color:this.config.underglowColor,side:Je,transparent:!0,opacity:.8}),i=new Z(t,e);i.rotation.x=-Math.PI/2,i.position.y=.02,this.mesh.add(i);const s=new re(.85,.95,.6,16),r=new xt({color:this.config.bodyColor,metalness:this.config.metalness!==void 0?this.config.metalness:.4,roughness:this.config.roughness!==void 0?this.config.roughness:.5}),a=new Z(s,r);a.castShadow=!0,a.receiveShadow=!0,a.position.y=.3,this.mesh.add(a);const o=new re(.55,.6,.15,16),l=new xt({color:988970,metalness:.9,roughness:.1}),c=new Z(o,l);c.position.y=.65,this.mesh.add(c);const h=new ji(.45,.04,12,24),p=new xt({color:this.config.ringColor,emissive:this.config.accentColor,emissiveIntensity:.8}),u=new Z(h,p);u.rotation.x=Math.PI/2,u.position.y=.72,this.mesh.add(u),this.antennaGroup=new fe;const f=new re(.03,.03,.35,8),x=new xt({color:9741240,metalness:.9}),v=new Z(f,x);v.position.y=.85,this.antennaGroup.add(v);const m=new Ii(.18,12,8,0,Math.PI),d=new xt({color:this.config.dishColor,metalness:.7,roughness:.3,side:Je});this.dish=new Z(m,d),this.dish.rotation.x=Math.PI/3,this.dish.position.y=1,this.antennaGroup.add(this.dish),this.mesh.add(this.antennaGroup),this.createNameplate(),[{id:"bumper_n",pos:[0,.3,-.92],rot:[0,0,0],size:[.7,.25,.1]},{id:"bumper_s",pos:[0,.3,.92],rot:[0,0,0],size:[.7,.25,.1]},{id:"bumper_e",pos:[.92,.3,0],rot:[0,Math.PI/2,0],size:[.7,.25,.1]},{id:"bumper_w",pos:[-.92,.3,0],rot:[0,Math.PI/2,0],size:[.7,.25,.1]}].forEach(Gt=>{const wt=new vt(...Gt.size),C=new xt({color:3359061,emissive:0,metalness:.5,roughness:.4}),M=new Z(wt,C);M.position.set(...Gt.pos),M.rotation.set(...Gt.rot),this.mesh.add(M),this.bumperMaterials[Gt.id]=C}),[{id:"thrust_n",pos:[0,.15,.85],rot:[Math.PI/2,0,0]},{id:"thrust_s",pos:[0,.15,-.85],rot:[-Math.PI/2,0,0]},{id:"thrust_e",pos:[-.85,.15,0],rot:[0,0,-Math.PI/2]},{id:"thrust_w",pos:[.85,.15,0],rot:[0,0,Math.PI/2]}].forEach(Gt=>{const wt=new xi(.18,.5,12);wt.translate(0,-.25,0);const C=new me({color:this.config.thrustColor,transparent:!0,opacity:0}),M=new Z(wt,C);M.position.set(...Gt.pos),M.rotation.set(...Gt.rot),this.mesh.add(M),this.thrusterFlames[Gt.id]=M;const G=new le(this.config.thrustColor,0,3);G.position.set(...Gt.pos),this.mesh.add(G),this.thrusterLights[Gt.id]=G});const _=new Ii(.08,12,12);this.headlightMat=new xt({color:9741240,emissive:0});const D=new Z(_,this.headlightMat);D.position.set(0,.55,-.8),this.mesh.add(D),this.grabberGroup=new fe,this.grabberGroup.position.set(0,.22,-.85);const R=new xt({color:1976635,metalness:.85,roughness:.3}),L=new vt(.72,.1,.12),I=new Z(L,R);I.castShadow=!0,this.grabberGroup.add(I);const b=new re(.1,.1,.16,16),g=new Z(b,R);g.position.set(-.32,0,0),this.grabberGroup.add(g);const y=new Z(b,R);y.position.set(.32,0,0),this.grabberGroup.add(y);const A=new xt({color:this.config.clawColor,metalness:.35,roughness:.25,emissive:this.config.accentColor,emissiveIntensity:.35}),P=new xt({color:988970,roughness:.9,metalness:.1}),U=new xt({color:16707722,emissive:16436245,emissiveIntensity:2.2}),q=new xt({color:4674921,metalness:.9,roughness:.2}),B=.85,Y=.13,H=.15;this.leftClaw=new fe,this.leftClaw.position.set(-.32,0,0);const nt=new vt(Y,H,B);nt.translate(0,0,-B/2);const ct=new Z(nt,A);ct.castShadow=!0,this.leftClaw.add(ct);const bt=new vt(.22,H-.02,.12);bt.translate(.11,0,-B+.04);const Ut=new Z(bt,A);Ut.castShadow=!0,this.leftClaw.add(Ut);const jt=new vt(.035,H-.04,B*.75);jt.translate(Y/2+.015,0,-B*.48);const j=new Z(jt,P);this.leftClaw.add(j);const st=new re(.03,.03,B*.65,8);st.rotateX(Math.PI/2),st.translate(-Y/2-.015,.02,-B*.45);const Et=new Z(st,q);this.leftClaw.add(Et);const ot=new Ii(.04,12,12);ot.translate(.2,0,-B+.04);const Ct=new Z(ot,U);this.leftClaw.add(Ct),this.grabberGroup.add(this.leftClaw),this.rightClaw=new fe,this.rightClaw.position.set(.32,0,0);const Pt=new vt(Y,H,B);Pt.translate(0,0,-B/2);const Nt=new Z(Pt,A);Nt.castShadow=!0,this.rightClaw.add(Nt);const ee=new vt(.22,H-.02,.12);ee.translate(-.11,0,-B+.04);const Wt=new Z(ee,A);Wt.castShadow=!0,this.rightClaw.add(Wt);const ne=new vt(.035,H-.04,B*.75);ne.translate(-Y/2-.015,0,-B*.48);const z=new Z(ne,P);this.rightClaw.add(z);const ge=new re(.03,.03,B*.65,8);ge.rotateX(Math.PI/2),ge.translate(Y/2+.015,.02,-B*.45);const zt=new Z(ge,q);this.rightClaw.add(zt);const Lt=new Ii(.04,12,12);Lt.translate(-.2,0,-B+.04);const Rt=new Z(Lt,U);this.rightClaw.add(Rt),this.grabberGroup.add(this.rightClaw),this.mesh.add(this.grabberGroup),this.clawAngle=.32}createNameplate(){if(!(typeof document>"u"))try{const t=this.config.name.toUpperCase(),i=document.createElement("canvas").getContext("2d");i.font='bold 50px "JetBrains Mono", Impact, sans-serif';const s=Math.ceil(i.measureText(t).width),a=Math.max(120,s+22*2),o=88,l=document.createElement("canvas");l.width=a,l.height=o;const c=l.getContext("2d");if(!c)return;c.fillStyle="rgba(10, 15, 29, 0.90)",c.beginPath(),c.roundRect?c.roundRect(4,4,a-8,o-8,20):c.rect(4,4,a-8,o-8),c.fill();const p={flux:{border:"#00f0ff",text:"#00f0ff"},sparky:{border:"#00f0ff",text:"#00f0ff"},checkers:{border:"#fbbf24",text:"#fbbf24"},scanners:{border:"#34d399",text:"#34d399"},tank:{border:"#ef4444",text:"#facc15"}}[this.config.id]||{border:"#00f0ff",text:"#00f0ff"};c.strokeStyle=p.border,c.lineWidth=6,c.stroke(),c.fillStyle=p.text,c.font='bold 50px "JetBrains Mono", Impact, sans-serif',c.textAlign="center",c.textBaseline="middle",c.fillText(t,a/2,o/2);const u=new $s(l);u.minFilter=He;const f=new Da({map:u,transparent:!0,depthTest:!1}),x=new Ll(f),v=a/o,m=.36,d=m*v;x.position.set(0,.55,1.22),x.scale.set(d,m,1),this.mesh.add(x)}catch(t){console.warn("Robot nameplate fallback:",t)}}reset(t=0,e=0){this.position.set(t,.4,e),this.velocity.set(0,0,0),this.mesh.position.copy(this.position),this.energy=100,this.isStranded=!1,this.isCharging=!1}update(t,e,i,s,r){const a=this.position.y>-2,o=r?Math.hypot(this.position.x-r.x,this.position.z-r.z):999,l=a&&o<3.2;if(this.isCharging=l,this.sensors.energy_dock=l,t>0)if(this.isCharging)this.energy=Math.min(this.maxEnergy,this.energy+25*t),this.energy>5&&(this.isStranded=!1),this.chargeHumCooldown-=t,this.chargeHumCooldown<=0&&(this.chargeHumCooldown=1,K.playRelayClick());else if(this.energy>0){let d=0;e.thrust_n&&d++,e.thrust_s&&d++,e.thrust_e&&d++,e.thrust_w&&d++;const S=!!(this.heldItem&&e.grabber),E=d*.012,_=.002,D=S?.006:0,R=_+E+D;this.energy=Math.max(0,this.energy-R*t),this.energy<=0&&(this.energy=0,this.isStranded=!0,K.playWireCut())}else this.energy=0,this.isStranded=!0;this.sensors.energy_low=this.energy<25,this.sensors.energy_crit=this.energy<10,this.isStranded&&(e={...e,thrust_n:!1,thrust_s:!1,thrust_e:!1,thrust_w:!1,grabber:!1},this.velocity.multiplyScalar(.7));const c=this.empStunTimer>0;c&&(this.empStunTimer=Math.max(0,this.empStunTimer-t),e={...e,thrust_n:!1,thrust_s:!1,thrust_e:!1,thrust_w:!1});const p=!!e.grabber?-.05:.32;this.clawAngle+=(p-this.clawAngle)*.2,this.leftClaw&&this.rightClaw&&(this.leftClaw.rotation.y=this.clawAngle,this.rightClaw.rotation.y=-this.clawAngle);const u=new N(0,0,0);let f=!1;if(e.thrust_n&&(u.z-=this.acceleration,f=!0),e.thrust_s&&(u.z+=this.acceleration,f=!0),e.thrust_e&&(u.x+=this.acceleration,f=!0),e.thrust_w&&(u.x-=this.acceleration,f=!0),this.isStranded){const d=Math.sin(Date.now()*.02)>0;this.headlightMat.emissive.setHex(d?14427686:0),this.headlightMat.emissiveIntensity=d?3:0}else if(c){const d=Math.sin(Date.now()*.035)>0;this.headlightMat.emissive.setHex(d?15680580:16096779),this.headlightMat.emissiveIntensity=d?3:.5}else e.aux_light?(this.headlightMat.emissive.setHex(16436245),this.headlightMat.emissiveIntensity=2):this.headlightMat.emissive.setHex(0);f!==this.thrustersActive&&(this.thrustersActive=f,K.setThrusterActive(f)),Object.keys(this.thrusterFlames).forEach(d=>{const S=!!e[d],E=this.thrusterFlames[d],_=this.thrusterLights[d];S?(E.material.opacity=.75+Math.random()*.25,E.scale.set(1+Math.random()*.2,1+Math.random()*.3,1),_.intensity=1.5+Math.random()*.8):(E.material.opacity=0,_.intensity=0)}),this.velocity.addScaledVector(u,t),this.velocity.multiplyScalar(this.damping),this.velocity.clampLength(0,this.maxSpeed),this.position.addScaledVector(this.velocity,t);const x={...this.sensors};if(this.sensors.bumper_n=!1,this.sensors.bumper_s=!1,this.sensors.bumper_e=!1,this.sensors.bumper_w=!1,i&&(this.position.z-this.radius<i.minZ&&(this.position.z=i.minZ+this.radius,this.velocity.z=Math.max(0,this.velocity.z),this.sensors.bumper_n=!0),this.position.z+this.radius>i.maxZ&&(this.position.z=i.maxZ-this.radius,this.velocity.z=Math.min(0,this.velocity.z),this.sensors.bumper_s=!0),this.position.x-this.radius<i.minX&&(this.position.x=i.minX+this.radius,this.velocity.x=Math.max(0,this.velocity.x),this.sensors.bumper_w=!0),this.position.x+this.radius>i.maxX&&(this.position.x=i.maxX-this.radius,this.velocity.x=Math.min(0,this.velocity.x),this.sensors.bumper_e=!0)),s&&s.length>0)for(const d of s){const S=Math.max(d.minX,Math.min(this.position.x,d.maxX)),E=Math.max(d.minZ,Math.min(this.position.z,d.maxZ)),_=this.position.x-S,D=this.position.z-E,R=_*_+D*D;if(R<this.radius*this.radius){const L=Math.sqrt(R)||.001,I=this.radius-L,b=_/L,g=D/L;this.position.x+=b*I,this.position.z+=g*I;const y=this.velocity.x*b+this.velocity.z*g;y<0&&(this.velocity.x-=y*b,this.velocity.z-=y*g),g>.6&&(this.sensors.bumper_n=!0),g<-.6&&(this.sensors.bumper_s=!0),b>.6&&(this.sensors.bumper_w=!0),b<-.6&&(this.sensors.bumper_e=!0)}}const v=typeof performance<"u"?performance.now():Date.now();if(this.lastBumperAudioTime=this.lastBumperAudioTime||0,(!x.bumper_n&&this.sensors.bumper_n||!x.bumper_s&&this.sensors.bumper_s||!x.bumper_e&&this.sensors.bumper_e||!x.bumper_w&&this.sensors.bumper_w)&&v-this.lastBumperAudioTime>160&&(this.lastBumperAudioTime=v,K.playBumperHit()),["bumper_n","bumper_s","bumper_e","bumper_w"].forEach(d=>{const S=this.bumperMaterials[d];this.sensors[d]?(S.emissive.setHex(65535),S.emissiveIntensity=2):(S.emissive.setHex(0),S.emissiveIntensity=0)}),r){const d=this.position.distanceTo(r);this.sensors.radar_ping=d<4}this.dish.rotation.y+=.04,this.mesh.position.copy(this.position)}}class er{constructor(t,e){this.id=t.id||`item_${Math.random().toString(36).substr(2,6)}`,this.type=t.type||"generic",this.label=t.label||"Item",this.group=e,this.state="grounded",this.holder=null,this.dockedIn=null,this.baseY=t.y!==void 0?t.y:.3,this.mesh=new fe,this.mesh.position.set(t.x||0,this.baseY,t.z||0),this.group.add(this.mesh),this.timeOffset=Math.random()*10}get position(){return this.mesh.position}destroy(){this.group.remove(this.mesh),this.mesh.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material.forEach(e=>e.dispose()):t.material.dispose())})}update(t){}}class om extends er{constructor(t,e){super({...t,type:"power_cell",label:t.label||"Portable Power Cell"},e),this.colorHex=t.color||1096065,this.baseY=.32,this.buildMesh()}buildMesh(){const t=new xt({color:1976635,metalness:.85,roughness:.25}),e=new re(.24,.26,.08,16),i=new Z(e,t);i.position.y=.22,i.castShadow=!0,this.mesh.add(i);const s=new re(.26,.24,.08,16),r=new Z(s,t);r.position.y=-.22,r.castShadow=!0,this.mesh.add(r);const a=new re(.22,.22,.36,16),o=new xt({color:988970,metalness:.1,roughness:.05,transparent:!0,opacity:.45}),l=new Z(a,o);this.mesh.add(l);const c=new re(.1,.1,.32,12);this.coreMat=new xt({color:this.colorHex,emissive:this.colorHex,emissiveIntensity:2.2,metalness:.1,roughness:.2}),this.coreMesh=new Z(c,this.coreMat),this.mesh.add(this.coreMesh);const h=new ji(.28,.02,8,24);this.ringMat=new me({color:this.colorHex}),this.ringMesh=new Z(h,this.ringMat),this.ringMesh.rotation.x=Math.PI/2,this.mesh.add(this.ringMesh),this.light=new le(this.colorHex,2.5,4.5),this.light.position.y=0,this.mesh.add(this.light)}update(t){const e=Date.now()*.003+this.timeOffset,i=2+Math.sin(e*3)*.5;this.coreMat.emissiveIntensity=i,this.light.intensity=i*1.2,this.ringMesh.rotation.z+=.04,this.state==="grounded"&&(this.mesh.position.y=this.baseY+Math.sin(e*2)*.04,this.mesh.rotation.y+=.015)}}class lm extends er{constructor(t,e){super({...t,type:"keycard",label:t.label||"Security Keycard"},e),this.colorHex=t.color||3718648,this.baseY=.22,this.buildMesh()}buildMesh(){const t=new vt(.46,.05,.28),e=new xt({color:3359061,metalness:.85,roughness:.3}),i=new Z(t,e);i.castShadow=!0,this.mesh.add(i);const s=new vt(.44,.052,.07),r=new xt({color:14251782,metalness:.9,roughness:.1}),a=new Z(s,r);a.position.z=-.09,this.mesh.add(a);const o=new vt(.12,.054,.12);this.chipMat=new xt({color:this.colorHex,emissive:this.colorHex,emissiveIntensity:2.2,metalness:.2,roughness:.2});const l=new Z(o,this.chipMat);l.position.set(-.1,0,.04),this.mesh.add(l);const c=new ji(.06,.014,8,16),h=new xt({color:9741240,metalness:.9}),p=new Z(c,h);p.rotation.x=Math.PI/2,p.position.set(.24,0,0),this.mesh.add(p),this.light=new le(this.colorHex,1.8,3),this.mesh.add(this.light)}update(t){const e=Date.now()*.003+this.timeOffset,i=1.8+Math.sin(e*4)*.4;this.chipMat.emissiveIntensity=i,this.light.intensity=i,this.state==="grounded"&&(this.mesh.position.y=this.baseY+Math.sin(e*2.5)*.03,this.mesh.rotation.y+=.02)}}class cm extends er{constructor(t,e){super({...t,type:"raw_ore",label:t.label||"Raw Mineral Ore"},e),this.value=t.value||100,this.colorHex=t.color||16096779,this.baseY=t.y!==void 0?t.y:.28,this.buildMesh()}buildMesh(){const t=new tr(.25,0),e=new xt({color:this.colorHex,emissive:this.colorHex,emissiveIntensity:1.8,metalness:.85,roughness:.25,flatShading:!0});this.rockMesh=new Z(t,e),this.rockMesh.castShadow=!0,this.mesh.add(this.rockMesh);const i=new xi(.08,.28,5),s=new Z(i,e);s.position.set(.12,.1,-.08),s.rotation.set(.4,.2,-.5),this.mesh.add(s);const r=new xi(.07,.24,5),a=new Z(r,e);a.position.set(-.1,.12,.08),a.rotation.set(-.3,.6,.4),this.mesh.add(a),this.light=new le(this.colorHex,2.2,4.5),this.light.position.y=.2,this.mesh.add(this.light)}update(t){const e=Date.now()*.003+this.timeOffset,i=1.6+Math.sin(e*3.5)*.5;this.rockMesh.material.emissiveIntensity=i,this.light.intensity=i,this.state==="grounded"&&(this.mesh.position.y=this.baseY+Math.sin(e*2)*.04,this.mesh.rotation.y+=.015,this.mesh.rotation.x=Math.sin(e*1.5)*.05)}}class dm extends er{constructor(t,e){super({...t,type:"raw_ore",label:t.label||"Rare Earth Promethium Ore (+5,000 CR)"},e),this.value=t.value||5e3,this.isHeavyRareEarth=!0,this.colorHex=61695,this.goldHex=16096779,this.baseY=t.y!==void 0?t.y:-53.6,this.buildMesh()}buildMesh(){const t=new tr(.55,0),e=new xt({color:725280,metalness:.85,roughness:.45,flatShading:!0});this.rockMesh=new Z(t,e),this.rockMesh.castShadow=!0,this.mesh.add(this.rockMesh);const i=new xt({color:65535,emissive:61695,emissiveIntensity:2.6,metalness:.9,roughness:.2,flatShading:!0}),s=new xi(.14,.45,6),r=new Z(s,i);r.position.set(.24,.22,-.15),r.rotation.set(.5,.3,-.6),this.mesh.add(r);const a=new Z(new xi(.11,.38,5),i);a.position.set(-.25,.28,.18),a.rotation.set(-.4,.7,.5),this.mesh.add(a);const o=new xt({color:16498468,emissive:16096779,emissiveIntensity:2.6,metalness:.9,roughness:.2,flatShading:!0}),l=new Z(new xi(.13,.42,6),o);l.position.set(-.18,.25,-.22),l.rotation.set(.6,-.4,.7),this.mesh.add(l);const c=new Z(new xi(.12,.36,5),o);c.position.set(.26,-.15,.24),c.rotation.set(-.5,.8,-.4),this.mesh.add(c),this.cyanMat=i,this.goldMat=o,this.cyanLight=new le(61695,2.5,6),this.cyanLight.position.set(.2,.3,0),this.mesh.add(this.cyanLight),this.goldLight=new le(16096779,2.2,5.5),this.goldLight.position.set(-.2,.25,0),this.mesh.add(this.goldLight)}update(t){const e=Date.now()*.003+this.timeOffset,i=2.2+Math.sin(e*3.5)*.8,s=2.2+Math.cos(e*3)*.8;this.cyanMat.emissiveIntensity=i,this.goldMat.emissiveIntensity=s,this.cyanLight.intensity=i,this.goldLight.intensity=s,this.state==="grounded"&&(this.mesh.position.y=this.baseY+Math.sin(e*1.8)*.04,this.mesh.rotation.y+=.012,this.mesh.rotation.x=Math.sin(e*1.2)*.04)}}class Fa{constructor(t,e){this.id=t.id||`term_${Math.random().toString(36).substr(2,6)}`,this.type=t.type||"generic_socket",this.label=t.label||"Socket Terminal",this.group=e,this.position=new N(t.x||0,t.y||0,t.z||0),this.dockRadius=t.dockRadius||1.4,this.requiredType=t.requiredType||null,this.isOccupied=!1,this.dockedItem=null,this.onSocketed=t.onSocketed||null,this.onUnsocketed=t.onUnsocketed||null,this.mesh=new fe,this.mesh.position.copy(this.position),this.group.add(this.mesh)}accepts(t){return!(!t||this.requiredType&&t.type!==this.requiredType)}dock(t){this.isOccupied=!0,this.dockedItem=t,t.state="socketed",t.dockedIn=this,t.mesh.position.copy(this.position),t.mesh.position.y+=this.dockHeightOffset||.28,t.mesh.rotation.set(0,0,0),this.onSocketed&&this.onSocketed(t)}undock(){if(!this.isOccupied)return null;const t=this.dockedItem;return this.isOccupied=!1,this.dockedItem=null,t&&(t.dockedIn=null),this.onUnsocketed&&this.onUnsocketed(t),t}destroy(){this.group.remove(this.mesh),this.mesh.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material.forEach(e=>e.dispose()):t.material.dispose())})}update(t){}}class hm extends Fa{constructor(t,e){super({...t,type:"power_socket",requiredType:"power_cell",label:t.label||"Energy Receptacle"},e),this.dockHeightOffset=.32,this.buildMesh()}buildMesh(){const t=new re(.7,.85,.4,6),e=new xt({color:988970,metalness:.8,roughness:.35}),i=new Z(t,e);i.position.y=.2,i.castShadow=!0,i.receiveShadow=!0,this.mesh.add(i);const s=new re(.3,.28,.2,16),r=new xt({color:132631,metalness:.9,roughness:.2}),a=new Z(s,r);a.position.y=.32,this.mesh.add(a);const o=new ji(.52,.04,12,32);this.ringMat=new xt({color:15680580,emissive:15680580,emissiveIntensity:1.8,roughness:.2}),this.statusRing=new Z(o,this.ringMat),this.statusRing.rotation.x=Math.PI/2,this.statusRing.position.y=.42,this.mesh.add(this.statusRing);const l=new re(.72,.86,.06,6),c=new me({color:16096779}),h=new Z(l,c);h.position.y=.38,this.mesh.add(h),this.light=new le(15680580,2.5,6),this.light.position.y=.5,this.mesh.add(this.light)}dock(t){super.dock(t),this.ringMat.color.setHex(1096065),this.ringMat.emissive.setHex(1096065),this.ringMat.emissiveIntensity=3,this.light.color.setHex(1096065),this.light.intensity=4}undock(){const t=super.undock();return this.ringMat.color.setHex(15680580),this.ringMat.emissive.setHex(15680580),this.ringMat.emissiveIntensity=1.8,this.light.color.setHex(15680580),this.light.intensity=2.5,t}update(t){if(this.isOccupied){const e=2.5+Math.sin(Date.now()*.008)*.8;this.ringMat.emissiveIntensity=e,this.light.intensity=e*1.3}}}class um extends Fa{constructor(t,e){super({...t,type:"keycard_reader",requiredType:"keycard",label:t.label||"Keycard Reader"},e),this.dockHeightOffset=1.15,this.buildMesh()}buildMesh(){const t=new vt(.38,1.2,.38),e=new xt({color:1976635,metalness:.8,roughness:.3}),i=new Z(t,e);i.position.y=.6,i.castShadow=!0,this.mesh.add(i);const s=new vt(.44,.2,.44),r=new xt({color:988970,metalness:.85,roughness:.25}),a=new Z(s,r);a.position.y=1.25,a.rotation.x=-Math.PI/8,this.mesh.add(a);const o=new vt(.46,.04,.06);this.slotMat=new xt({color:15680580,emissive:15680580,emissiveIntensity:2.2});const l=new Z(o,this.slotMat);l.position.set(0,1.28,.08),l.rotation.x=-Math.PI/8,this.mesh.add(l),this.light=new le(15680580,2,5),this.light.position.set(0,1.4,.2),this.mesh.add(this.light)}dock(t){super.dock(t),t.mesh.position.set(this.position.x,this.position.y+1.28,this.position.z+.08),t.mesh.rotation.x=-Math.PI/8,this.slotMat.color.setHex(1096065),this.slotMat.emissive.setHex(1096065),this.slotMat.emissiveIntensity=3.2,this.light.color.setHex(1096065),this.light.intensity=3.5}undock(){const t=super.undock();return this.slotMat.color.setHex(15680580),this.slotMat.emissive.setHex(15680580),this.slotMat.emissiveIntensity=2.2,this.light.color.setHex(15680580),this.light.intensity=2,t}update(t){if(!this.isOccupied){const e=1.6+Math.sin(Date.now()*.005)*.6;this.slotMat.emissiveIntensity=e}}}class pm extends Fa{constructor(t,e){super({...t,type:"refinery",requiredType:"raw_ore",label:t.label||"The Refinery Smelter",dockRadius:t.dockRadius||3.8},e),this.dockHeightOffset=.4,this.buildMesh()}buildMesh(){const t=new re(1.6,1.9,.6,8),e=new xt({color:1976635,metalness:.85,roughness:.35,flatShading:!0}),i=new Z(t,e);i.position.y=.3,i.castShadow=!0,i.receiveShadow=!0,this.mesh.add(i);const s=new re(1.65,1.65,.08,8),r=new xt({color:16096779,emissive:14251782,emissiveIntensity:.8,metalness:.5,roughness:.4}),a=new Z(s,r);a.position.y=.62,this.mesh.add(a);const o=new re(.9,.5,.45,16),l=new xt({color:593174,metalness:.95,roughness:.2}),c=new Z(o,l);c.position.y=.42,this.mesh.add(c);const h=new re(.55,.55,.06,16);this.plasmaMat=new xt({color:16729088,emissive:16724736,emissiveIntensity:3.5,roughness:.1}),this.plasmaMesh=new Z(h,this.plasmaMat),this.plasmaMesh.position.y=.25,this.mesh.add(this.plasmaMesh);const p=new xt({color:3359061,metalness:.9});[Math.PI/4,3*Math.PI/4,5*Math.PI/4,7*Math.PI/4].forEach(f=>{const x=new re(.12,.15,.8,8),v=new Z(x,p);v.position.set(Math.cos(f)*1.35,.5,Math.sin(f)*1.35),v.castShadow=!0,this.mesh.add(v);const m=new re(.16,.12,.08,8),d=new Z(m,r);d.position.set(Math.cos(f)*1.35,.92,Math.sin(f)*1.35),this.mesh.add(d)}),this.light=new le(16733440,3.5,9),this.light.position.y=.8,this.mesh.add(this.light),this.buildSign()}buildSign(){const t=new fe;t.position.set(0,2.1,.4);const e=new xt({color:3359061,metalness:.85,roughness:.3}),i=new re(.06,.06,1.8,8),s=new Z(i,e);s.position.set(-1.8,-.7,0),t.add(s);const r=new Z(i,e);r.position.set(1.8,-.7,0),t.add(r);const a=new vt(3.8,.08,.08),o=new Z(a,e);o.position.set(0,-.1,0),t.add(o);const l=new vt(4.2,1.25,.08),c=new xt({color:593174,metalness:.8,roughness:.3}),h=new Z(l,c);h.position.set(0,.3,0),h.castShadow=!0,t.add(h);let p=null;if(typeof document<"u"&&document.createElement)try{const u=document.createElement("canvas");u.width=1024,u.height=256;const f=u.getContext("2d");f&&(f.fillStyle="#0a0f1d",f.fillRect(0,0,1024,256),f.strokeStyle="#fbbf24",f.lineWidth=14,f.strokeRect(8,8,1008,240),f.fillStyle="#fbbf24",f.font='900 132px "Arial Black", Impact, sans-serif',f.textAlign="center",f.textBaseline="middle",f.fillText("REFINERY",512,134),p=new $s(u),p.generateMipmaps=!0,p.minFilter=mi,p.magFilter=He,p.needsUpdate=!0)}catch(u){console.warn("Refinery sign texture fallback:",u)}if(p){const u=new me({map:p}),f=new Ye(4.1,1.18),x=new Z(f,u);x.position.set(0,.3,.045),t.add(x);const v=new Z(f,u);v.position.set(0,.3,-.045),v.rotation.y=Math.PI,t.add(v)}t.rotation.x=-.42,this.mesh.add(t)}accepts(t){return t?t.type==="raw_ore":!1}dock(t){this.onSocketed&&this.onSocketed(t),t&&t.mesh&&(t.state="smelted",t.destroy()),this.isOccupied=!1,this.dockedItem=null,K.playSocketDock()}update(t){const e=Date.now()*.006,i=3+Math.sin(e)*1;this.plasmaMat.emissiveIntensity=i,this.light.intensity=i*1.2}}class fm{constructor(t){this.scene=t,this.group=new fe,this.scene.add(this.group),this.items=[],this.terminals=[],this.heldItem=null,this.grabCooldown=0}clear(){this.items.forEach(t=>t.destroy()),this.terminals.forEach(t=>t.destroy()),this.items=[],this.terminals=[],this.heldItem=null}addItem(t){let e;return t.type==="keycard"?e=new lm(t,this.group):t.type==="rare_earth_asteroid"||t.isHeavyRareEarth?e=new dm(t,this.group):t.type==="raw_ore"?e=new cm(t,this.group):e=new om(t,this.group),this.items.push(e),e}addTerminal(t){let e;return t.type==="keycard_reader"?e=new um(t,this.group):t.type==="refinery"?e=new pm(t,this.group):e=new hm(t,this.group),this.terminals.push(e),e}update(t,e,i={},s=1){const r=Array.isArray(e)?e:[e];for(const a of r){if(!a||!a.position)continue;a.grabCooldown>0&&(a.grabCooldown-=t);const o=new N(a.position.x,a.position.y-.12,a.position.z-1.35),c=!!(a.effectiveActuators||a.circuitActuators||i||{}).grabber;let h=null,p=1.35;for(const u of this.items){if(u.state==="held"&&u.holder!==a||u===a.heldItem)continue;const f=u.mesh?u.mesh.position.y:u.baseY||.3;if(Math.abs(f-a.position.y)>2.2)continue;const x=o.distanceTo(u.mesh.position);x<p&&(p=x,h=u)}if(a.sensors.item_detect=a.heldItem!==null||h!==null,c){if(!a.heldItem&&h&&(a.grabCooldown||0)<=0){if(h.isHeavyRareEarth&&a.id!=="tank"){a.grabCooldown=.8,K.playAccessDenied();const u=document.getElementById("goal-banner");u&&(u.textContent="⚠️ HYDRAULIC FAILURE! MASS EXCEEDS 500KG // HEAVY CHASSIS REQUIRED [DEPLOY DOZER (4)] ⚠️",u.style.background="rgba(239, 68, 68, 0.35)",u.style.borderColor="#ef4444",u.style.boxShadow="0 0 25px rgba(239, 68, 68, 0.6)",u.style.color="#fca5a5",u.classList.add("show"),setTimeout(()=>u.classList.remove("show"),3500));return}if(h.state==="socketed"&&h.dockedIn&&h.dockedIn.undock(),a.heldItem=h,h.state="held",h.holder=a,a.grabCooldown=.3,K.playGrab(),h.isHeavyRareEarth){K.playPowerUnlock();const u=document.getElementById("goal-banner");u&&(u.textContent="💎 RARE EARTH PROMETHIUM CLAMPED // DOZER HEAVY HYDRAULICS ENGAGED! 💎",u.style.background="rgba(245, 158, 11, 0.35)",u.style.borderColor="#fbbf24",u.style.boxShadow="0 0 25px rgba(251, 191, 36, 0.6)",u.style.color="#fbbf24",u.classList.add("show"),setTimeout(()=>u.classList.remove("show"),3500))}}a.heldItem&&(a.heldItem.mesh.position.copy(o),a.heldItem.mesh.rotation.set(0,0,0))}else if(a.heldItem&&!a.onElevator&&(a.grabCooldown||0)<=0){const u=a.heldItem;a.heldItem=null,a.grabCooldown=.3;let f=null;for(const x of this.terminals)if((!x.isOccupied||x.type==="refinery")&&x.accepts(u)){const v=o.distanceTo(x.position),m=a.position.distanceTo(x.position);if(v<x.dockRadius||x.type==="refinery"&&m<x.dockRadius){f=x;break}}if(f)f.dock(u),f.type==="refinery"?this.items=this.items.filter(x=>x!==u):K.playSocketDock();else{let x=.28;o.y<-42?x=-53.6:o.y<-25?x=-35.72:o.y<-5&&(x=-17.72),u.baseY=x,u.mesh.position.set(o.x,x,o.z),K.playRelease()}}}this.items.forEach(a=>{if(r.some(l=>l&&l.heldItem===a))a.mesh.visible=!0;else{const l=a.mesh&&a.mesh.position.y!==void 0?a.mesh.position.y:a.baseY||.28;s===4?a.mesh.visible=l<-42:s===3?a.mesh.visible=l>=-42&&l<-25:s===2?a.mesh.visible=l>=-25&&l<-5:a.mesh.visible=l>=-5}a.update(t)}),this.terminals.forEach(a=>{const o=a.position&&a.position.y!==void 0?a.position.y:0;s===4?a.mesh.visible=o<-42:s===3?a.mesh.visible=o>=-42&&o<-25:s===2?a.mesh.visible=o>=-25&&o<-5:a.mesh.visible=o>=-5,a.update(t)})}}class mm{constructor(t){this.container=t,this.width=t.clientWidth,this.height=t.clientHeight,this.bounds={minX:-24,maxX:24,minZ:-24,maxZ:24},this.obstacles=[],this.target=new N(18,.5,-18),this.goalReached=!1,this.credits=0,this.onEconomyChange=null,this.hasBlastDoor=!1,this.isBlastDoorOpen=!1,this.blastDoorMesh=null,this.doorLight=null,this.doorBulb=null,this.doorCollision=null,this.currentFloor=1,this.elevatorState="idle",this.elevatorUnlockCredits=500,this.elevatorUnlocked=!1,this.elevatorCarriageY=0,this.targetCarriageY=0,this.elevatorGroup=null,this.elevatorCarriage=null,this.winchDrum=null,this.elevatorCables=[],this.elevatorWinchSoundTimer=0,this.wasInElevator=!1,this.level1Obstacles=[],this.subLevel2Obstacles=[],this.subLevel3Obstacles=[],this.subLevel4Obstacles=[],this.subLevel2Group=null,this.subLevel3Group=null,this.subLevel4Group=null,this.glitches=[],this.tacticalRadar=null,this.level1Group=null,this.level1Floor=null,this.level1Grid=null,this.previewFloor=1,this.cameraAltitude=26,this.targetAltitude=26,this.minAltitude=12,this.maxAltitude=52,this.cameraFocus=new N(-11.7,.4,11.7),this.targetFocus=new N(-11.7,.4,11.7),this.isTrackingBot=!0,this.isDraggingPan=!1,this.panStartPos={x:0,y:0},this.panStartFocus={x:0,z:0},this.initThree(),this.obstacleGroup=new fe,this.scene.add(this.obstacleGroup),this.itemManager=new fm(this.scene),this.buildEnvironment(),this.buildTarget(),this.robots=new Map,this.activeRobotId="flux",this.unlockedRobots=new Set(["flux"]),this.initRobotFleet(),this.initCameraControls()}get robot(){return this.robots.get(this.activeRobotId)||this.robots.get("flux")}get deployedRobots(){const t=[];for(const e of this.unlockedRobots){const i=this.robots.get(e);i&&t.push(i)}return t}initRobotFleet(){["flux","checkers","scanners","tank"].forEach(e=>{const i=new am(this.scene,{id:e});i.mesh.visible=e==="flux",this.robots.set(e,i)}),this.robots.set("sparky",this.robots.get("flux"))}selectRobot(t){if(!this.unlockedRobots.has(t))return!1;this.activeRobotId=t;const e=this.robots.get(t);if(e){const i=e.position?e.position.y:.4,s=i<-42?4:i<-25?3:i<-5?2:1;this.previewFloor=s,this.updateCamFloorButton(),s!==4&&this.tacticalRadar&&this.tacticalRadar.isVoidMode?this.tacticalRadar.enableVoidMode(!1):s===4&&this.tacticalRadar&&!this.tacticalRadar.isVoidMode&&this.tacticalRadar.enableVoidMode(!0)}return this.recenterCamera(),K.playRelayClick(),!0}unlockRobot(t,e=!1){const i=this.robots.get(t);if(!i)return!1;if(this.unlockedRobots.has(t))return!0;if(!e&&this.credits<i.cost)return K.playAccessDenied(),!1;e||(this.credits-=i.cost,this.updateCreditsDisplay()),this.unlockedRobots.add(t),i.mesh.visible=!0;const s=i.config.spawn||{x:-14,z:14};return i.reset(s.x,s.z),K.playSocketDock(),this.onEconomyChange&&this.onEconomyChange(),!0}updateCreditsDisplay(){const t=document.getElementById("telemetry-credits");t&&(t.textContent=`CREDITS: ${this.credits} CR`)}restoreEconomy(t){t&&(typeof t.credits=="number"&&(this.credits=Math.max(0,t.credits),this.updateCreditsDisplay()),Array.isArray(t.unlockedRobots)&&t.unlockedRobots.forEach(e=>{e&&e!=="sparky"&&e!=="flux"&&this.unlockRobot(e,!0)}),t.robotEnergies&&typeof t.robotEnergies=="object"&&Object.entries(t.robotEnergies).forEach(([e,i])=>{const s=this.robots.get(e);s&&typeof i=="number"&&(s.energy=Math.max(15,Math.min(100,i)),s.isStranded=!1)}))}unlockAllRobots(){["flux","checkers","scanners","tank"].forEach(t=>{this.unlockRobot(t,!0)})}initThree(){this.scene=new Qf,this.scene.background=new $t(395539),this.scene.fog=new Pa(395539,.008),this.camera=new Ge(45,this.width/this.height,.1,200),this.camera.position.set(0,26,26),this.camera.lookAt(0,0,0),this.renderer=new Kf({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Zo,this.renderer.toneMapping=Ko,this.renderer.toneMappingExposure=1.15,this.container.appendChild(this.renderer.domElement);const t=new rm(1976635,1.3);this.scene.add(t);const e=new sm(14870768,2.2);e.position.set(15,35,15),e.castShadow=!0,e.shadow.mapSize.width=2048,e.shadow.mapSize.height=2048,e.shadow.camera.near=.5,e.shadow.camera.far=100,e.shadow.camera.left=-30,e.shadow.camera.right=30,e.shadow.camera.top=30,e.shadow.camera.bottom=-30,e.shadow.bias=-5e-4,this.scene.add(e);const i=new le(165063,3.5,40);i.position.set(-24,8,-24),this.scene.add(i);const s=new le(1096065,3.5,40);s.position.set(24,8,-24),this.scene.add(s);const r=new le(16096779,3.5,40);r.position.set(-24,8,24),this.scene.add(r);const a=new le(11032055,3.5,40);a.position.set(24,8,24),this.scene.add(a)}buildEnvironment(){this.level1Group=new fe,this.scene.add(this.level1Group);const t=new Ye(54,54,48,48),e=new xt({color:593174,metalness:.8,roughness:.25});this.level1Floor=new Z(t,e),this.level1Floor.rotation.x=-Math.PI/2,this.level1Floor.receiveShadow=!0,this.level1Group.add(this.level1Floor),this.level1Grid=new Nr(48,48,959977,1976635),this.level1Grid.position.y=.01,this.level1Group.add(this.level1Grid);const i=new xt({color:988970,metalness:.6,roughness:.5}),s=2.4,r=.8,a=48.8;[{size:[a,s,r],pos:[0,s/2,-24.4]},{size:[a,s,r],pos:[0,s/2,24.4]},{size:[r,s,a],pos:[24.4,s/2,0]},{size:[r,s,a],pos:[-24.4,s/2,0]}].forEach(h=>{const p=new vt(...h.size),u=new Z(p,i);u.position.set(...h.pos),u.castShadow=!0,u.receiveShadow=!0,this.level1Group.add(u)});const l=new me({color:959977});[{size:[48,.06,.06],pos:[0,.05,-24]},{size:[48,.06,.06],pos:[0,.05,24]},{size:[.06,.06,48],pos:[24,.05,0]},{size:[.06,.06,48],pos:[-24,.05,0]}].forEach(h=>{const p=new Z(new vt(...h.size),l);p.position.set(...h.pos),this.level1Group.add(p)}),this.spawnRefinery(),this.spawnElevator(),this.level1Obstacles=[...this.obstacles],this.buildSubLevel2(),this.buildSubLevel3(),this.buildSubLevel4(),this.spawnRandomOres(6),this.spawnRareEarthAsteroid()}setupMissionArena(t){for(;this.obstacleGroup.children.length>0;){const s=this.obstacleGroup.children[0];this.obstacleGroup.remove(s),s.geometry&&s.geometry.dispose(),s.material&&(Array.isArray(s.material)?s.material.forEach(r=>r.dispose()):s.material.dispose())}this.obstacles=[],t.robotSpawn&&this.robot.reset(t.robotSpawn.x,t.robotSpawn.z),t.targetPos&&(this.target.set(t.targetPos.x,.5,t.targetPos.z),this.targetGroup&&this.targetGroup.position.copy(this.target)),this.goalReached=!1,this.hasBlastDoor=!!t.hasBlastDoor,this.isBlastDoorOpen=!1,this.blastDoorMesh=null,this.doorLight=null,this.doorBulb=null,this.doorBulbMat=null,this.doorCollision=null,(t.obstacles||[]).forEach(s=>{const r=new vt(s.w,s.h,s.d),a=new xt({color:s.color||1976635,metalness:.7,roughness:.35}),o=new Z(r,a);o.position.set(s.x,s.h/2,s.z),o.castShadow=!0,o.receiveShadow=!0,this.obstacleGroup.add(o);const l=new vt(s.w*1.01,.15,s.d*1.01),c=new me({color:16096779}),h=new Z(l,c);h.position.set(s.x,s.h-.2,s.z),this.obstacleGroup.add(h),this.obstacles.push({minX:s.x-s.w/2,maxX:s.x+s.w/2,minZ:s.z-s.d/2,maxZ:s.z+s.d/2})}),this.hasBlastDoor&&this.buildBlastDoor(),this.itemManager.clear(),t.items&&t.items.forEach(s=>this.itemManager.addItem(s)),t.terminals&&t.terminals.forEach(s=>this.itemManager.addTerminal(s)),this.spawnRefinery(),this.spawnElevator(),this.level1Obstacles=[...this.obstacles],this.buildSubLevel2(),this.buildSubLevel3(),this.buildSubLevel4(),this.spawnRandomOres(6),this.spawnRareEarthAsteroid();const i=document.getElementById("telemetry-credits");i&&(i.textContent=`CREDITS: ${this.credits} CR`)}buildBlastDoor(){const t=new xt({color:988970,metalness:.8,roughness:.3}),e=new vt(1.4,3.8,1.8),i=new Z(e,t);i.position.set(-4.5,1.9,0),i.castShadow=!0,i.receiveShadow=!0,this.obstacleGroup.add(i);const s=new vt(1.4,3.8,1.8),r=new Z(s,t);r.position.set(4.5,1.9,0),r.castShadow=!0,r.receiveShadow=!0,this.obstacleGroup.add(r);const a=new me({color:16096779}),o=new Z(new vt(1.42,.2,1.82),a);o.position.set(-4.5,3.4,0),this.obstacleGroup.add(o);const l=new Z(new vt(1.42,.2,1.82),a);l.position.set(4.5,3.4,0),this.obstacleGroup.add(l);const c=new vt(10.4,.8,2),h=new xt({color:1976635,metalness:.7,roughness:.4}),p=new Z(c,h);p.position.set(0,3.8,0),p.castShadow=!0,this.obstacleGroup.add(p),this.doorBulbMat=new xt({color:15680580,emissive:15680580,emissiveIntensity:2.5,roughness:.2});const u=new re(.2,.2,.15,16);this.doorBulb=new Z(u,this.doorBulbMat),this.doorBulb.rotation.x=Math.PI/2,this.doorBulb.position.set(0,3.6,1.05),this.obstacleGroup.add(this.doorBulb);const f=new Z(u,this.doorBulbMat);f.rotation.x=Math.PI/2,f.position.set(0,3.6,-1.05),this.obstacleGroup.add(f),this.doorLight=new le(15680580,3,10),this.doorLight.position.set(0,3.6,1.2),this.obstacleGroup.add(this.doorLight);const x=new vt(7.6,2.8,.6),v=new xt({color:3359061,metalness:.85,roughness:.25});this.blastDoorMesh=new Z(x,v),this.blastDoorMesh.position.set(0,1.4,0),this.blastDoorMesh.castShadow=!0,this.blastDoorMesh.receiveShadow=!0;const m=new vt(.08,2.7,.62),d=new me({color:3718648}),S=new Z(m,d);this.blastDoorMesh.add(S);const E=new vt(7.62,.2,.62),_=new Z(E,a);_.position.y=0,this.blastDoorMesh.add(_),this.obstacleGroup.add(this.blastDoorMesh),this.obstacles.push({minX:-5.2,maxX:-3.8,minZ:-.9,maxZ:.9}),this.obstacles.push({minX:3.8,maxX:5.2,minZ:-.9,maxZ:.9}),this.doorCollision={minX:-3.8,maxX:3.8,minZ:-.6,maxZ:.6},this.obstacles.push(this.doorCollision)}buildTarget(){this.targetGroup=new fe,this.targetGroup.position.copy(this.target);const t=new re(1.4,1.6,.4,16),e=new xt({color:1976635,metalness:.8}),i=new Z(t,e);i.position.y=.2,i.receiveShadow=!0,this.targetGroup.add(i);const s=new ji(1.2,.06,12,32),r=new me({color:1096065}),a=new Z(s,r);a.rotation.x=Math.PI/2,a.position.y=.6,this.targetGroup.add(a);const o=new Oa(.7,0);this.crystalMat=new xt({color:1096065,emissive:366185,emissiveIntensity:1.8,metalness:.2,roughness:.1,transparent:!0,opacity:.92}),this.crystal=new Z(o,this.crystalMat),this.crystal.position.y=1.3,this.targetGroup.add(this.crystal),this.targetLight=new le(1096065,3,10),this.targetLight.position.y=1.3,this.targetGroup.add(this.targetLight);const l=document.createElement("canvas");l.width=512,l.height=96;const c=l.getContext("2d");c.clearRect(0,0,512,96),c.fillStyle="rgba(10, 20, 40, 0.82)",c.beginPath(),c.roundRect(8,16,496,64,14),c.fill(),c.strokeStyle="rgba(16, 185, 129, 0.85)",c.lineWidth=3,c.beginPath(),c.roundRect(8,16,496,64,14),c.stroke(),c.fillStyle="#6ee7b7",c.font="bold 36px monospace",c.textAlign="center",c.textBaseline="middle",c.fillText("ENERGY-TERMINAL",256,48);const h=new $s(l),p=new Da({map:h,transparent:!0,depthTest:!1}),u=new Ll(p);u.scale.set(4.1,1.18,1),u.position.set(0,2.6,0),this.targetGroup.add(u),this.scene.add(this.targetGroup)}getRandomSafeFloorPos(){for(let t=0;t<80;t++){const e=Math.round((Math.random()*36-18)*2)/2,i=Math.round((Math.random()*36-18)*2)/2;if(Math.hypot(e- -18,i-18)<4.5||Math.hypot(e- -18,i- -12)<4.5||Math.hypot(e-18,i- -18)<4.5||Math.hypot(e-18,i-14)<4.5)continue;let s=!1;for(const a of this.obstacles)if(e>=a.minX-1.6&&e<=a.maxX+1.6&&i>=a.minZ-1.6&&i<=a.maxZ+1.6){s=!0;break}if(s)continue;let r=!1;for(const a of this.itemManager.items){const o=a.position||a.mesh&&a.mesh.position;if(o&&Math.hypot(e-o.x,i-o.z)<2.8){r=!0;break}}if(!r)return{x:e,z:i}}return{x:(Math.random()-.5)*8,z:(Math.random()-.5)*8}}spawnRefinery(){this.itemManager.terminals.some(t=>t.type==="refinery")||this.itemManager.addTerminal({id:"term_refinery_01",type:"refinery",label:"The Industrial Ore Refinery",x:-18,z:-12,dockRadius:3.8,onSocketed:t=>this.onOreRefined(t)})}spawnElevator(){this.elevatorGroup&&(this.scene.remove(this.elevatorGroup),this.elevatorGroup.traverse(B=>{B.geometry&&B.geometry.dispose(),B.material&&(Array.isArray(B.material)?B.material.forEach(Y=>Y.dispose()):B.material.dispose())})),this.elevatorGroup=new fe,this.elevatorPos=new N(18,0,14),this.elevatorGroup.position.copy(this.elevatorPos);const t=new xt({color:1976635,metalness:.85,roughness:.35}),e=new xt({color:3359061,metalness:.9,roughness:.25});this.elevatorCarriage=new fe,this.elevatorCarriage.position.y=this.elevatorCarriageY;const i=new vt(4.8,.12,5.2);this.elevatorPlatform=new Z(i,t),this.elevatorPlatform.position.y=.06,this.elevatorPlatform.receiveShadow=!0,this.elevatorCarriage.add(this.elevatorPlatform);const s=new me({color:61695}),r=new Z(new vt(4.8,.02,.08),s);r.position.set(0,.13,-2.55),this.elevatorCarriage.add(r);const a=new Z(new vt(4.8,.02,.08),s);a.position.set(0,.13,2.55),this.elevatorCarriage.add(a);const o=new Z(new vt(.08,.02,5.2),s);o.position.set(2.35,.13,0),this.elevatorCarriage.add(o);const l=new xt({color:959977,emissive:165063,emissiveIntensity:.8}),c=new Z(new vt(.4,.04,5),l);c.position.set(-2.4,.04,0),this.elevatorCarriage.add(c);const h=new xt({color:4674921,metalness:.7}),p=new Z(new vt(4.4,.08,.08),h);p.position.set(.2,1,-2.55),this.elevatorCarriage.add(p);const u=new Z(new vt(4.4,.08,.08),h);u.position.set(.2,2,-2.55),this.elevatorCarriage.add(u);const f=new Z(new vt(4.4,.08,.08),h);f.position.set(.2,1,2.55),this.elevatorCarriage.add(f);const x=new Z(new vt(4.4,.08,.08),h);x.position.set(.2,2,2.55),this.elevatorCarriage.add(x);const v=new Z(new vt(.08,.08,5),h);v.position.set(2.35,1,0),this.elevatorCarriage.add(v);const m=new Z(new vt(.08,.08,5),h);m.position.set(2.35,2,0),this.elevatorCarriage.add(m),this.elevatorBeaconMat=new xt({color:959977,emissive:959977,emissiveIntensity:2.2});const d=new Ii(.22,16,16);this.elevatorBeacon=new Z(d,this.elevatorBeaconMat),this.elevatorBeacon.position.set(-2.35,2.5,0),this.elevatorCarriage.add(this.elevatorBeacon),this.elevatorLight=new le(959977,2.4,10),this.elevatorLight.position.set(-2.35,2.5,0),this.elevatorCarriage.add(this.elevatorLight),this.elevatorGroup.add(this.elevatorCarriage);const S=new vt(.2,60,.2);[[-2.35,2.55],[-2.35,-2.55],[2.35,2.55],[2.35,-2.55]].forEach(B=>{const Y=new Z(S,e);Y.position.set(B[0],-26,B[1]),Y.castShadow=!0,Y.receiveShadow=!0,this.elevatorGroup.add(Y)});const _=new Z(new vt(4.8,.2,.16),t);_.position.set(0,4,-2.55),this.elevatorGroup.add(_);const D=new Z(new vt(4.8,.2,.16),t);D.position.set(0,4,2.55),this.elevatorGroup.add(D);const R=new Z(new vt(.16,.2,5.2),t);R.position.set(2.35,4,0),this.elevatorGroup.add(R);const L=new Z(new vt(.16,.2,5.2),t);L.position.set(-2.35,4,0),this.elevatorGroup.add(L),[-9,-18,-27,-36,-45,-54].forEach(B=>{const Y=new Z(new vt(4.8,.15,.15),t);Y.position.set(0,B,-2.55),this.elevatorGroup.add(Y);const H=new Z(new vt(4.8,.15,.15),t);H.position.set(0,B,2.55),this.elevatorGroup.add(H);const nt=new Z(new vt(.15,.15,5.2),t);nt.position.set(2.35,B,0),this.elevatorGroup.add(nt)});const I=new re(.28,.28,3.6,16),b=new xt({color:593174,metalness:.9,roughness:.2});this.winchDrum=new Z(I,b),this.winchDrum.rotation.z=Math.PI/2,this.winchDrum.position.set(0,4.35,0),this.elevatorGroup.add(this.winchDrum),this.elevatorCables=[];const g=new xt({color:9741240,metalness:.95});[[-1.8,-2],[-1.8,2],[1.8,-2],[1.8,2]].forEach(B=>{const Y=new re(.02,.02,1,6),H=new Z(Y,g);H.position.set(B[0],2.2,B[1]),this.elevatorGroup.add(H),this.elevatorCables.push(H)}),this.buildElevatorSign(),this.scene.add(this.elevatorGroup);const A=14,P={minX:16.8,maxX:20.45,minZ:A-2.65,maxZ:A-2.45},U={minX:16.8,maxX:20.45,minZ:A+2.45,maxZ:A+2.65},q={minX:20.25,maxX:20.45,minZ:A-2.65,maxZ:A+2.65};this.obstacles.some(B=>B.minX===P.minX&&B.minZ===P.minZ)||this.obstacles.push(P),this.obstacles.some(B=>B.minX===U.minX&&B.minZ===U.minZ)||this.obstacles.push(U),this.obstacles.some(B=>B.minX===q.minX&&B.minZ===q.minZ)||this.obstacles.push(q)}buildElevatorSign(){const t=new fe;t.position.set(0,4.85,1.95);const e=new xt({color:3359061,metalness:.85,roughness:.3}),i=new re(.04,.04,.9,6),s=new Z(i,e);s.position.set(-1.6,-.45,-.1),t.add(s);const r=new Z(i,e);r.position.set(1.6,-.45,-.1),t.add(r);const a=new vt(4.2,1.25,.08),o=new xt({color:593174,metalness:.8,roughness:.3}),l=new Z(a,o);l.castShadow=!0,t.add(l);let c=null;if(typeof document<"u"&&document.createElement)try{const h=document.createElement("canvas");h.width=1024,h.height=256;const p=h.getContext("2d");p&&(p.fillStyle="#0a0f1d",p.fillRect(0,0,1024,256),p.strokeStyle="#00f0ff",p.lineWidth=14,p.strokeRect(8,8,1008,240),p.fillStyle="#00f0ff",p.font='900 132px "Arial Black", Impact, sans-serif',p.textAlign="center",p.textBaseline="middle",p.fillText("ELEVATOR",512,134),c=new $s(h),c.generateMipmaps=!0,c.minFilter=mi,c.magFilter=He,c.needsUpdate=!0)}catch(h){console.warn("Elevator sign texture fallback:",h)}if(c){const h=new me({map:c}),p=new Ye(4.1,1.18),u=new Z(p,h);u.position.set(0,0,.045),t.add(u);const f=new Z(p,h);f.position.set(0,0,-.045),f.rotation.y=Math.PI,t.add(f)}t.rotation.x=-.42,this.elevatorGroup.add(t)}buildSubLevel2(){this.subLevel2Group&&(this.scene.remove(this.subLevel2Group),this.subLevel2Group.traverse(A=>{A.geometry&&A.geometry.dispose(),A.material&&(Array.isArray(A.material)?A.material.forEach(P=>P.dispose()):A.material.dispose())})),this.subLevel2Group=new fe,this.subLevel2Obstacles=[];const t=-18,e=new Ye(54,54,32,32),i=new xt({color:527122,metalness:.85,roughness:.4}),s=new Z(e,i);s.rotation.x=-Math.PI/2,s.position.y=t,s.receiveShadow=!0,this.subLevel2Group.add(s);const r=new Nr(48,48,16347926,4528643);r.position.y=t+.02,this.subLevel2Group.add(r);const a=new xt({color:988970,metalness:.7,roughness:.5}),o=4,l=.8,c=48.8;[{size:[c,o,l],pos:[0,t+o/2,-24.4]},{size:[c,o,l],pos:[0,t+o/2,24.4]},{size:[l,o,c],pos:[24.4,t+o/2,0]},{size:[l,o,c],pos:[-24.4,t+o/2,0]}].forEach(A=>{const P=new Z(new vt(...A.size),a);P.position.set(...A.pos),P.castShadow=!0,P.receiveShadow=!0,this.subLevel2Group.add(P)});const p=new me({color:16347926});[{size:[48,.1,.1],pos:[0,t+.06,-24]},{size:[48,.1,.1],pos:[0,t+.06,24]},{size:[.1,.1,48],pos:[24,t+.06,0]},{size:[.1,.1,48],pos:[-24,t+.06,0]}].forEach(A=>{const P=new Z(new vt(...A.size),p);P.position.set(...A.pos),this.subLevel2Group.add(P)});const f=new le(16347926,3.2,40);f.position.set(-6,t+6,6),this.subLevel2Group.add(f);const x=new le(15680580,2.5,35);x.position.set(6,t+6,-8),this.subLevel2Group.add(x);const v=new le(440020,3.2,30);v.position.set(-16,t+5,-16),this.subLevel2Group.add(v);const m=new le(959977,2.8,25);m.position.set(18,t+5,14),this.subLevel2Group.add(m);const d=new vt(5,.08,5.4),S=new xt({color:1976635,metalness:.9,roughness:.25}),E=new Z(d,S);E.position.set(18,t+.04,14),E.receiveShadow=!0,this.subLevel2Group.add(E);const _=14;this.subLevel2Obstacles.push({minX:16.8,maxX:20.45,minZ:_-2.65,maxZ:_-2.45}),this.subLevel2Obstacles.push({minX:16.8,maxX:20.45,minZ:_+2.45,maxZ:_+2.65}),this.subLevel2Obstacles.push({minX:20.25,maxX:20.45,minZ:_-2.65,maxZ:_+2.65}),[{w:3.2,h:4.8,d:3.2,x:-8,z:-8,color:1976635},{w:2.8,h:4.2,d:4,x:6,z:-10,color:1976635},{w:3.5,h:4.4,d:2.6,x:-10,z:8,color:1976635},{w:5.2,h:2.4,d:1.8,x:0,z:-4,color:3359061}].forEach(A=>{const P=new vt(A.w,A.h,A.d),U=new xt({color:A.color,metalness:.8,roughness:.3}),q=new Z(P,U);q.position.set(A.x,t+A.h/2,A.z),q.castShadow=!0,q.receiveShadow=!0,this.subLevel2Group.add(q);const B=new Z(new vt(A.w*1.01,.2,A.d*1.01),new me({color:16347926}));B.position.set(A.x,t+A.h-.4,A.z),this.subLevel2Group.add(B),this.subLevel2Obstacles.push({minX:A.x-A.w/2,maxX:A.x+A.w/2,minZ:A.z-A.d/2,maxZ:A.z+A.d/2})});const R=new vt(2.4,2.2,1.8),L=new xt({color:988970,metalness:.9,roughness:.2}),I=new Z(R,L);I.position.set(-16,t+1.1,-16),this.subLevel2Group.add(I);const b=new Ye(1.6,1),g=new me({color:440020}),y=new Z(b,g);y.position.set(-16,t+1.3,-15.09),this.subLevel2Group.add(y),this.subLevel2Obstacles.push({minX:-17.5,maxX:-14.5,minZ:-17.2,maxZ:-14.8}),this.scene.add(this.subLevel2Group),this.spawnSubLevel2Ores()}spawnSubLevel2Ores(){[{type:"raw_ore",label:"Vibranium Crystal (+300 CR)",color:11032055,value:300,x:-14,z:12,y:-17.72},{type:"raw_ore",label:"Hyper-Dense Core (+500 CR)",color:440020,value:500,x:12,z:-14,y:-17.72},{type:"raw_ore",label:"Dark Matter Shard (+750 CR)",color:15485081,value:750,x:-4,z:-16,y:-17.72},{type:"raw_ore",label:"Vibranium Crystal (+300 CR)",color:11032055,value:300,x:8,z:6,y:-17.72},{type:"raw_ore",label:"Hyper-Dense Core (+500 CR)",color:440020,value:500,x:-18,z:-4,y:-17.72}].forEach(e=>{this.itemManager.addItem({...e,id:`sub2_ore_${Date.now()}_${Math.random().toString(36).substr(2,5)}`})})}buildSubLevel3(){this.subLevel3Group&&(this.scene.remove(this.subLevel3Group),this.subLevel3Group.traverse(P=>{P.geometry&&P.geometry.dispose(),P.material&&(Array.isArray(P.material)?P.material.forEach(U=>U.dispose()):P.material.dispose())})),this.subLevel3Group=new fe,this.subLevel3Obstacles=[],this.glitches=[];const t=-36,e=new Ye(54,54,32,32),i=new xt({color:198418,roughness:.95,metalness:.2}),s=new Z(e,i);s.rotation.x=-Math.PI/2,s.position.y=t,s.receiveShadow=!0,this.subLevel3Group.add(s);const r=new Nr(48,48,440020,5774471);r.position.y=t+.02,this.subLevel3Group.add(r);const a=new xt({color:132631,metalness:.85,roughness:.25}),o=.8,l=4,c=49.6;[{size:[c,l,o],pos:[0,t+l/2,-24.4]},{size:[c,l,o],pos:[0,t+l/2,24.4]},{size:[o,l,c],pos:[24.4,t+l/2,0]},{size:[o,l,c],pos:[-24.4,t+l/2,0]}].forEach(P=>{const U=new Z(new vt(...P.size),a);U.position.set(...P.pos),U.castShadow=!0,U.receiveShadow=!0,this.subLevel3Group.add(U)});const p=new me({color:440020});[{size:[48,.1,.1],pos:[0,t+.06,-24]},{size:[48,.1,.1],pos:[0,t+.06,24]},{size:[.1,.1,48],pos:[24,t+.06,0]},{size:[.1,.1,48],pos:[-24,t+.06,0]}].forEach(P=>{const U=new Z(new vt(...P.size),p);U.position.set(...P.pos),this.subLevel3Group.add(U)});const f=new le(11032055,2.5,45);f.position.set(-8,t+6,8),this.subLevel3Group.add(f);const x=new le(440020,2.8,40);x.position.set(8,t+6,-8),this.subLevel3Group.add(x);const v=new le(15485081,2,35);v.position.set(-14,t+5,-14),this.subLevel3Group.add(v);const m=new le(3718648,3.2,30);m.position.set(18,t+5,14),this.subLevel3Group.add(m);const d=new vt(5,.08,5.4),S=new xt({color:988970,metalness:.9,roughness:.2}),E=new Z(d,S);E.position.set(18,t+.04,14),E.receiveShadow=!0,this.subLevel3Group.add(E);const _=14;this.subLevel3Obstacles.push({minX:16.8,maxX:20.45,minZ:_-2.65,maxZ:_-2.45}),this.subLevel3Obstacles.push({minX:16.8,maxX:20.45,minZ:_+2.45,maxZ:_+2.65}),this.subLevel3Obstacles.push({minX:20.25,maxX:20.45,minZ:_-2.65,maxZ:_+2.65}),[{x:-10,z:8,w:3.5,d:3.5,h:5,color:132631},{x:8,z:-10,w:4,d:3,h:5.5,color:132631},{x:-6,z:-12,w:3,d:4,h:4.8,color:132631},{x:6,z:6,w:3.2,d:3.2,h:5,color:132631}].forEach(P=>{const U=new vt(P.w,P.h,P.d),q=new xt({color:P.color,metalness:.85,roughness:.2}),B=new Z(U,q);B.position.set(P.x,t+P.h/2,P.z),B.castShadow=!0,B.receiveShadow=!0,this.subLevel3Group.add(B);const Y=new Z(new vt(P.w*1.01,.2,P.d*1.01),new me({color:440020}));Y.position.set(P.x,t+P.h-.5,P.z),this.subLevel3Group.add(Y),this.subLevel3Obstacles.push({minX:P.x-P.w/2,maxX:P.x+P.w/2,minZ:P.z-P.d/2,maxZ:P.z+P.d/2})});const R=new vt(2.4,2.2,1.8),L=new xt({color:593174,metalness:.9,roughness:.2}),I=new Z(R,L);I.position.set(-16,t+1.1,-16),this.subLevel3Group.add(I);const b=new Ye(1.6,1),g=new me({color:15485081}),y=new Z(b,g);y.position.set(-16,t+1.3,-15.09),this.subLevel3Group.add(y),this.subLevel3Obstacles.push({minX:-17.5,maxX:-14.5,minZ:-17.2,maxZ:-14.8}),[{id:"glitch_1",baseX:-8,baseZ:8,rx:7,rz:6,speed:.75,phase:0},{id:"glitch_2",baseX:8,baseZ:-8,rx:8,rz:5,speed:.6,phase:2},{id:"glitch_3",baseX:0,baseZ:-2,rx:6,rz:7,speed:.85,phase:4}].forEach(P=>{const U=new fe;U.position.set(P.baseX,t+1.2,P.baseZ);const q=new Na(.75,1),B=new me({color:15680580,wireframe:!0}),Y=new Z(q,B);U.add(Y);const H=new Ii(.35,12,12),nt=new me({color:16777215}),ct=new Z(H,nt);U.add(ct);const bt=new le(15680580,2.5,10);U.add(bt),this.subLevel3Group.add(U),this.glitches.push({...P,x:P.baseX,z:P.baseZ,mesh:U,coreMesh:Y,light:bt,time:P.phase})}),this.scene.add(this.subLevel3Group),this.spawnSubLevel3Ores()}spawnSubLevel3Ores(){[{type:"raw_ore",label:"Quantum Data Core (+1000 CR)",color:15485081,value:1e3,x:-14,z:14,y:-35.72},{type:"raw_ore",label:"Neural Matrix Crystal (+1200 CR)",color:440020,value:1200,x:14,z:-14,y:-35.72},{type:"raw_ore",label:"Superconductor Core (+1500 CR)",color:1096065,value:1500,x:-6,z:-6,y:-35.72},{type:"raw_ore",label:"Dark Logic Shard (+1000 CR)",color:11032055,value:1e3,x:14,z:8,y:-35.72},{type:"raw_ore",label:"Quantum Data Core (+1000 CR)",color:15485081,value:1e3,x:2,z:-16,y:-35.72}].forEach(e=>{this.itemManager.addItem({...e,id:`sub3_ore_${Date.now()}_${Math.random().toString(36).substr(2,5)}`})})}buildSubLevel4(){this.subLevel4Group&&(this.scene.remove(this.subLevel4Group),this.subLevel4Group.traverse(v=>{v.geometry&&v.geometry.dispose(),v.material&&(Array.isArray(v.material)?v.material.forEach(m=>m.dispose()):v.material.dispose())})),this.subLevel4Group=new fe,this.subLevel4Obstacles=[];const t=-54,e=new Ye(54,54,32,32),i=new xt({color:132363,metalness:.9,roughness:.95}),s=new Z(e,i);s.rotation.x=-Math.PI/2,s.position.y=t,s.receiveShadow=!0,this.subLevel4Group.add(s);const r=new vt(5,.08,5.4),a=new xt({color:988970,metalness:.85,roughness:.35}),o=new Z(r,a);o.position.set(18,t+.04,14),o.receiveShadow=!0,this.subLevel4Group.add(o);const l=new le(440020,3.5,30);l.position.set(18,t+5,14),this.subLevel4Group.add(l);const c=14;this.subLevel4Obstacles.push({minX:16.8,maxX:20.45,minZ:c-2.65,maxZ:c-2.45}),this.subLevel4Obstacles.push({minX:16.8,maxX:20.45,minZ:c+2.45,maxZ:c+2.65}),this.subLevel4Obstacles.push({minX:20.25,maxX:20.45,minZ:c-2.65,maxZ:c+2.65});const h=new xt({color:132631,metalness:.8,roughness:.7}),p=4,u=.8,f=48.8;[{size:[f,p,u],pos:[0,t+p/2,-24.4]},{size:[f,p,u],pos:[0,t+p/2,24.4]},{size:[u,p,f],pos:[24.4,t+p/2,0]},{size:[u,p,f],pos:[-24.4,t+p/2,0]}].forEach(v=>{const m=new Z(new vt(...v.size),h);m.position.set(...v.pos),m.receiveShadow=!0,this.subLevel4Group.add(m)}),this.subLevel4Group.visible=!1,this.scene.add(this.subLevel4Group)}findValidFloor4Spawn(t=[]){for(let e=0;e<80;e++){const i=Math.round((Math.random()*28-15)*2)/2,s=Math.round((Math.random()*32-16)*2)/2;if(Math.hypot(i-18,s-14)<6.5)continue;let r=!1;for(const a of t){const o=a.mesh?a.mesh.position:a.position||a;if(o&&Math.hypot(i-o.x,s-o.z)<4.5){r=!0;break}}if(!r)return{x:i,z:s}}return{x:-8+(Math.random()-.5)*6,z:(Math.random()-.5)*12}}spawnRareEarthAsteroid(t=4){const e=this.itemManager.items.filter(r=>(r.isHeavyRareEarth||r.type==="rare_earth_asteroid")&&r.state!=="smelted"),i=t-e.length;if(i<=0)return;const s=[{label:"Rare Earth Promethium Ore (+5,000 CR)",value:5e3},{label:"Abyssal Void Neodymium (+4,500 CR)",value:4500},{label:"Crystalline Terbium Core (+6,000 CR)",value:6e3},{label:"Dense Dysprosium Matrix (+5,500 CR)",value:5500},{label:"Hyper-Dense Europium Node (+7,000 CR)",value:7e3}];for(let r=0;r<i;r++){const a=s[Math.floor(Math.random()*s.length)],o=this.findValidFloor4Spawn(e),l=this.itemManager.addItem({type:"rare_earth_asteroid",label:a.label,x:o.x,z:o.z,y:-53.6,value:a.value,isHeavyRareEarth:!0,id:`l4_ore_${Date.now()}_${Math.random().toString(36).substring(2,7)}`});e.push(l)}}boardElevator(){if(this.elevatorState!=="idle")return;const t=this.elevatorCarriageY+.4;if(this.robot.position.set(18,t,14),this.robot.velocity.set(0,0,0),this.robot.mesh.position.copy(this.robot.position),this.robot.onElevator=!0,this.recenterCamera(),K.playRelayClick(),this.robot.heldItem&&this.elevatorCarriageY<-5){this.elevatorUnlocked=!0,this.goToFloor(1);const i=document.getElementById("goal-banner");if(i){const s=(this.robot.heldItem.label||"MINERAL ORE").replace(/\s*\(.*\)/,"");i.textContent=`💎 ${this.robot.name.toUpperCase()} ENTERED ELEVATOR WITH ${s.toUpperCase()} // AUTO-HOISTING TO LEVEL 1 REFINERY! ⚙️`,i.style.background="linear-gradient(135deg, rgba(16, 185, 129, 0.4), rgba(6, 182, 212, 0.4))",i.style.borderColor="#10b981",i.style.boxShadow="0 0 30px rgba(16, 185, 129, 0.7)",i.style.color="#ffffff",i.classList.add("show")}return}const e=document.getElementById("goal-banner");e&&(e.textContent=`🛗 ${this.robot.name.toUpperCase()} BOARDED THE FREIGHT ELEVATOR // WINCH READY [F]`,e.style.background="rgba(16, 185, 129, 0.25)",e.style.borderColor="#10b981",e.style.boxShadow="0 0 25px rgba(16, 185, 129, 0.5)",e.style.color="#10b981",e.classList.add("show"),setTimeout(()=>e.classList.remove("show"),3e3)),this.updateElevatorHUD(!0,this.elevatorUnlocked||this.credits>=this.elevatorUnlockCredits,!0)}goToFloor(t){if(this.elevatorState!=="idle")return;if(this.deployedRobots.some(o=>o&&o.heldItem)||this.elevatorUnlocked)this.elevatorUnlocked=!0;else if(this.credits<this.elevatorUnlockCredits){K.playAccessDenied();return}const i=this.elevatorCarriageY<-46?4:this.elevatorCarriageY<-27?3:this.elevatorCarriageY<-9?2:1;if(t===i)return;let s=0;t===2&&(s=-18),t===3&&(s=-36),t===4&&(s=-54);const r=this.elevatorCarriageY+.4;for(const o of this.deployedRobots){const l=Math.hypot(o.position.x-18,o.position.z-14),c=Math.abs(o.position.y-r)<1.8;l<3.2&&c&&(o.position.set(18,r,14),o.velocity.set(0,0,0),o.mesh.position.copy(o.position),o.onElevator=!0)}this.targetCarriageY=s,this.elevatorState=s<this.elevatorCarriageY?"moving_down":"moving_up",this.elevatorWinchSoundTimer=0,K.playWinchMove();const a=document.getElementById("goal-banner");if(a){const o={1:"LEVEL 1 (SEWER LABS)",2:"SUB-LEVEL 2 (QUARRY)",3:"SUB-LEVEL 3 (ABYSSAL DATA CORE)",4:"SUB-LEVEL 4 (DEEP VOID)"},l=s<this.elevatorCarriageY?"LOWERING":"HOISTING";a.textContent=`⚙️ WINCH MOTOR ENGAGED // ${l} CARRIAGE TO ${o[t]}...`,a.style.background=t===4?"rgba(6, 182, 212, 0.25)":t===3?"rgba(168, 85, 247, 0.25)":t===2?"rgba(245, 158, 11, 0.25)":"rgba(14, 165, 233, 0.25)",a.style.borderColor=t===4?"#06b6d4":t===3?"#a855f7":t===2?"#fbbf24":"#0ea5e9",a.style.boxShadow=`0 0 25px ${t===4?"rgba(6, 182, 212, 0.5)":t===3?"rgba(168, 85, 247, 0.5)":t===2?"rgba(251, 191, 36, 0.5)":"rgba(14, 165, 233, 0.5)"}`,a.style.color=t===4?"#67e8f9":t===3?"#d8b4fe":t===2?"#fbbf24":"#38bdf8",a.classList.add("show")}}toggleElevator(){if(this.elevatorState!=="idle")return;const t=this.elevatorCarriageY<-46?4:this.elevatorCarriageY<-27?3:this.elevatorCarriageY<-9?2:1;t===1?this.goToFloor(2):t===2?this.goToFloor(3):t===3?this.goToFloor(4):this.goToFloor(1)}startElevatorDescent(){this.currentFloor===1?this.goToFloor(2):this.currentFloor===2?this.goToFloor(3):this.currentFloor===3&&this.goToFloor(4)}startElevatorAscent(){this.currentFloor===4?this.goToFloor(3):this.currentFloor===3?this.goToFloor(2):this.currentFloor===2&&this.goToFloor(1)}grantTestCredits(){this.credits=Math.max(this.credits+500,500);const t=document.getElementById("telemetry-credits");t&&(t.textContent=`CREDITS: ${this.credits} CR`),K.playPowerUnlock();const e=document.getElementById("goal-banner");e&&(e.textContent=`⚡ TEST OVERRIDE: CREDITS NOW ${this.credits} CR // WINCH POWER ONLINE ⚡`,e.style.background="rgba(16, 185, 129, 0.25)",e.style.borderColor="#10b981",e.style.boxShadow="0 0 25px rgba(16, 185, 129, 0.5)",e.style.color="#34d399",e.classList.add("show"),setTimeout(()=>e.classList.remove("show"),3500)),this.updateElevatorHUD(!0,!0,!0)}resetRobot(){this.currentFloor=1,this.previewFloor=1,this.updateCamFloorButton(),this.elevatorState="idle",this.elevatorCarriageY=0,this.elevatorCarriage&&(this.elevatorCarriage.position.y=0),this.obstacles=this.level1Obstacles,this.robot.reset(-18,18),this.recenterCamera()}updateElevatorHUD(t,e,i=!1){const s=document.getElementById("elevator-hud-panel");if(!s)return;const r=this.elevatorCarriageY<-46?4:this.elevatorCarriageY<-27?3:this.elevatorCarriageY<-9?2:1,a=this.elevatorState!=="idle";if(!(t||i||a)){s.classList.add("hidden");return}s.classList.remove("hidden");const l=document.getElementById("elevator-hud-floor");if(l){const E={1:"CARRIAGE: LEVEL 1",2:"CARRIAGE: SUB-LEVEL 2",3:"CARRIAGE: SUB-LEVEL 3",4:"CARRIAGE: SUB-LEVEL 4"};l.textContent=E[r]||"CARRIAGE: LEVEL 1"}const c=this.deployedRobots.some(E=>E&&E.heldItem),h=e||this.elevatorUnlocked||c,p=s.querySelector(".elevator-status-dot");p&&(h?p.classList.add("unlocked"):p.classList.remove("unlocked"));const u=document.getElementById("elevator-power-label"),f=document.getElementById("elevator-power-bar"),x=h?100:Math.min(100,Math.round(this.credits/this.elevatorUnlockCredits*100));f&&(f.style.width=`${x}%`),u&&(h?(u.textContent=`WINCH POWER: ONLINE (CREDITS: ${this.credits} CR)`,u.style.color="#10b981"):(u.textContent=`POWER STATUS: LOCKED (NEED 500 CR // HAVE ${this.credits} CR)`,u.style.color="#f59e0b")),document.querySelectorAll(".elevator-floor-btn").forEach(E=>{const _=parseInt(E.dataset.floor,10);E.classList.toggle("active",_===r),E.disabled=!h||this.elevatorState!=="idle"});const m=document.getElementById("elevator-action-btn"),d=document.getElementById("elevator-action-icon"),S=document.getElementById("elevator-action-label");m&&S&&d&&(this.elevatorState!=="idle"?(m.disabled=!0,m.className="elevator-action-btn moving",d.textContent="⚙️",S.textContent=this.elevatorState==="moving_down"?"WINCH TRAVELING DOWNWARD...":"WINCH TRAVELING UPWARD..."):h?(m.disabled=!1,m.className="elevator-action-btn unlocked",t?r===1?(d.textContent="▼",S.textContent="DESCEND TO SUB-LEVEL 2 [F]"):r===2?(d.textContent="▼",S.textContent="DESCEND TO SUB-LEVEL 3 (CORE) [F]"):r===3?(d.textContent="▼",S.textContent="DESCEND TO SUB-LEVEL 4 (VOID) [F]"):(d.textContent="▲",S.textContent="ASCEND TO LEVEL 1 [F]"):(d.textContent="🛗",S.textContent=r>1?"BOARD & ASCEND TO L1 [F / B]":"BOARD & TRAVEL [F / B]")):(m.disabled=!0,m.className="elevator-action-btn locked",d.textContent="🔒",S.textContent=`LOCKED (${this.credits} / 500 CR)`))}spawnRandomOres(t=6){const e=[{type:"raw_ore",label:"Aurum Gold Ore (+100 CR)",color:16096779,value:100},{type:"raw_ore",label:"Emerald Chromium Ore (+150 CR)",color:1096065,value:150},{type:"raw_ore",label:"Quantum Cyan Ore (+250 CR)",color:61695,value:250},{type:"raw_ore",label:"Dark Matter Ore Cluster (+500 CR)",color:11032055,value:500}];for(let i=0;i<t;i++){const s=this.getRandomSafeFloorPos(),r=Math.random();let a=e[0];r>.93?a=e[3]:r>.75?a=e[2]:r>.45&&(a=e[1]),this.itemManager.addItem({...a,id:`ore_${Date.now()}_${Math.random().toString(36).substr(2,5)}`,x:s.x,z:s.z})}}spawnSingleRandomOre(){this.spawnRandomOres(1)}onOreRefined(t){const e=t&&t.value?t.value:100;this.credits+=e;const i=document.getElementById("telemetry-credits");i&&(i.textContent=`CREDITS: ${this.credits} CR`),this.onEconomyChange&&this.onEconomyChange(),t&&(t.isHeavyRareEarth||t.type==="rare_earth_asteroid")&&setTimeout(()=>this.spawnRareEarthAsteroid(4),1200);const s=document.getElementById("goal-banner");if(s){const r=t&&t.isHeavyRareEarth,a=t&&t.label?t.label.replace(/\s*\(.*\)/,""):"RAW ORE";r?(s.textContent=`🔥 REFINERY SMELTER: ${a.toUpperCase()} PROCESSED! +${e} CR // TOTAL: ${this.credits} CR! 🔥`,s.style.background="linear-gradient(135deg, rgba(14, 165, 233, 0.35), rgba(245, 158, 11, 0.35))",s.style.borderColor="#38bdf8",s.style.boxShadow="0 0 35px rgba(56, 189, 248, 0.7)",s.style.color="#ffffff",K.playPowerUnlock()):(s.textContent=`⚡ ${a.toUpperCase()} REFINED: +${e} CR // TOTAL: ${this.credits} CR ⚡`,s.style.background="rgba(245, 158, 11, 0.25)",s.style.borderColor="#fbbf24",s.style.boxShadow="0 0 25px rgba(251, 191, 36, 0.5)",s.style.color="#fbbf24"),s.classList.add("show"),clearTimeout(this._oreBannerTimeout),this._oreBannerTimeout=setTimeout(()=>{s&&(s.classList.remove("show"),s.style.background="",s.style.borderColor="",s.style.boxShadow="",s.style.color="",s.textContent="✨ TARGET CRYSTAL ACCESSED // SECTOR POWER RESTORED ✨")},3500)}t&&t.isHeavyRareEarth?setTimeout(()=>{this.spawnRareEarthAsteroid()},3e3):setTimeout(()=>{this.spawnSingleRandomOre()},2e3)}initCameraControls(){const t=this.container;t.addEventListener("wheel",e=>{e.preventDefault();const i=4,s=Math.sign(e.deltaY);this.targetAltitude=nn.clamp(this.targetAltitude+s*i,this.minAltitude,this.maxAltitude)},{passive:!1}),t.addEventListener("mousedown",e=>{(e.button===2||e.button===1||e.button===0&&e.shiftKey)&&(e.preventDefault(),this.isDraggingPan=!0,this.isTrackingBot=!1,this.panStartPos={x:e.clientX,y:e.clientY},this.panStartFocus={x:this.targetFocus.x,z:this.targetFocus.z},t.style.cursor="grab",this.updateHudRecenterButton())}),window.addEventListener("mousemove",e=>{if(!this.isDraggingPan)return;const i=e.clientX-this.panStartPos.x,s=e.clientY-this.panStartPos.y,r=this.cameraAltitude/26*.045;this.targetFocus.x=nn.clamp(this.panStartFocus.x-i*r,-28,28),this.targetFocus.z=nn.clamp(this.panStartFocus.z+s*r,-28,28)}),window.addEventListener("mouseup",e=>{this.isDraggingPan&&(this.isDraggingPan=!1,t.style.cursor="default")}),t.addEventListener("contextmenu",e=>{e.preventDefault()}),t.addEventListener("dblclick",e=>{e.preventDefault(),this.recenterCamera()})}zoomIn(){this.targetAltitude=nn.clamp(this.targetAltitude-6,this.minAltitude,this.maxAltitude)}zoomOut(){this.targetAltitude=nn.clamp(this.targetAltitude+6,this.minAltitude,this.maxAltitude)}recenterCamera(){this.isTrackingBot=!0,this.updateHudRecenterButton()}updateHudRecenterButton(){const t=document.getElementById("cam-recenter");t&&(this.isTrackingBot?(t.classList.add("tracking"),t.title="Tracking Flux (Click or Double-Click to Reset View)"):(t.classList.remove("tracking"),t.title="Recenter on Flux [🎯] (Camera Unlocked)"))}toggleFloorView(){if(this.elevatorState!=="idle")return;const t=this.previewFloor||this.currentFloor||1;let e=1;t===1?e=2:t===2?e=3:t===3?e=4:e=1,this.previewFloor=e,K.playRelayClick(),this.updateCamFloorButton(),e===4&&this.tacticalRadar?this.tacticalRadar.enableVoidMode(!0):this.tacticalRadar&&this.tacticalRadar.isVoidMode&&this.tacticalRadar.enableVoidMode(!1);const i=document.getElementById("goal-banner");if(i){const s={1:"👁️ CAMERA SCANNING LEVEL 1 // MAIN SEWER LABS",2:"👁️ CAMERA SCANNING SUB-LEVEL 2 // DEEP CORE MINING QUARRY",3:"🌌 CAMERA SCANNING SUB-LEVEL 3 // ABYSSAL DATA CORE (-36m)",4:"📡 CAMERA SCANNING SUB-LEVEL 4 // DEEP TRENCH VOID (-54m)"};i.textContent=s[this.previewFloor]||s[1],i.style.background=this.previewFloor===4?"rgba(6, 182, 212, 0.25)":this.previewFloor===3?"rgba(168, 85, 247, 0.25)":"rgba(14, 165, 233, 0.25)",i.style.borderColor=this.previewFloor===4?"#06b6d4":this.previewFloor===3?"#a855f7":"#0ea5e9",i.style.boxShadow=`0 0 25px ${this.previewFloor===4?"rgba(6, 182, 212, 0.5)":this.previewFloor===3?"rgba(168, 85, 247, 0.5)":"rgba(14, 165, 233, 0.5)"}`,i.style.color=this.previewFloor===4?"#67e8f9":this.previewFloor===3?"#d8b4fe":"#38bdf8",i.classList.add("show"),setTimeout(()=>i.classList.remove("show"),2500)}}updateCamFloorButton(){const t=document.getElementById("cam-floor-toggle");if(t){const e=this.previewFloor||this.currentFloor||1;e===1?(t.textContent="🛗 L2",t.title="Switch View to Sub-Level 2 Quarry [L]"):e===2?(t.textContent="🌌 L3",t.title="Switch View to Sub-Level 3 Abyssal Data Core [L]"):e===3?(t.textContent="📡 L4",t.title="Switch View to Sub-Level 4 Deep Void [L]"):(t.textContent="🏢 L1",t.title="Switch View to Level 1 Labs [L]")}}resize(){this.width=this.container.clientWidth,this.height=this.container.clientHeight,this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.width,this.height)}update(t,e){const i=this.deployedRobots;for(const d of i){const S=d.id===this.activeRobotId?e:d.circuitActuators||{};d.effectiveActuators=S;const E=d.position?d.position.y:0,_=E<-42?4:E<-25?3:E<-5?2:1,D=_===4?this.subLevel4Obstacles:_===3?this.subLevel3Obstacles:_===2?this.subLevel2Obstacles:this.level1Obstacles;d.update(t,S,this.bounds,D,this.target)}const s=this.robot,r=s&&s.position?s.position.y:0,a=r<-42?4:r<-25?3:r<-5?2:1;let o=1;this.elevatorState!=="idle"?o=this.elevatorCarriageY<-46?4:this.elevatorCarriageY<-27?3:this.elevatorCarriageY<-9?2:1:this.previewFloor?o=this.previewFloor:o=a;const l=o===4,c=o===3,h=o===2,p=o;if(this.itemManager.update(t,i,e,p),this.glitches&&this.glitches.length>0)for(const d of this.glitches){d.time+=t*d.speed,d.x=d.baseX+Math.sin(d.time)*d.rx,d.z=d.baseZ+Math.cos(d.time*.8)*d.rz,d.mesh&&(d.mesh.position.x=d.x,d.mesh.position.z=d.z,d.coreMesh&&(d.coreMesh.rotation.x+=t*2,d.coreMesh.rotation.y+=t*3),d.light&&(d.light.intensity=2+Math.sin(Date.now()*.01)*1));for(const S of i){const E=Math.hypot(S.position.x-d.x,S.position.z-d.z),_=S.position.y||.4;if(E<1.8&&_<-25&&(!S.empStunTimer||S.empStunTimer<=0)){S.empStunTimer=4,K.playGlitchStatic();const D=document.getElementById("goal-banner");D&&(D.textContent=`⚡ EMP DISCHARGE! ${S.name.toUpperCase()} STUNNED BY CORRUPT GLITCH (4s) ⚡`,D.style.background="rgba(239, 68, 68, 0.35)",D.style.borderColor="#ef4444",D.style.boxShadow="0 0 25px rgba(239, 68, 68, 0.6)",D.style.color="#fca5a5",D.classList.add("show"),setTimeout(()=>D.classList.remove("show"),3500))}}}if(this.crystal){const d=i.some(E=>E&&E.isCharging),S=d?.08:.02;this.crystal.rotation.y+=S,this.crystal.rotation.x+=S*.5,this.crystal.position.y=1.3+Math.sin(Date.now()*(d?.008:.003))*.15,this.targetLight&&(this.targetLight.intensity=d?5.5+Math.random()*1.5:3,this.targetLight.color.setHex(d?3462041:1096065))}const u=this.robot.position.distanceTo(this.target);u<2&&!this.goalReached?(this.goalReached=!0,K.playGoalChime(),this.onGoalReached&&this.onGoalReached()):u>=2.6&&this.goalReached&&(this.goalReached=!1),this.cameraAltitude+=(this.targetAltitude-this.cameraAltitude)*.12,this.level1Group&&(this.level1Group.visible=!h&&!c&&!l),this.subLevel2Group&&(this.subLevel2Group.visible=h),this.subLevel3Group&&(this.subLevel3Group.visible=c),this.subLevel4Group&&(this.subLevel4Group.visible=l),this.obstacleGroup&&(this.obstacleGroup.visible=!h&&!c&&!l),this.targetGroup&&(this.targetGroup.visible=!h&&!c&&!l),o===4&&this.elevatorState==="idle"?this.tacticalRadar&&!this.tacticalRadar.isVoidMode&&this.tacticalRadar.enableVoidMode(!0):o!==4&&this.tacticalRadar&&this.tacticalRadar.isVoidMode&&this.tacticalRadar.enableVoidMode(!1);const f=document.getElementById("radar-blind-overlay");if(f){f.classList.toggle("hidden",!l);const d=f.querySelector(".blind-text");d&&l&&(d.textContent="SUB-LEVEL 4: DEEP TRENCH VOID (-54m) // ZERO VISIBILITY // LARGE TACTICAL RADAR ACTIVE")}if(this.isTrackingBot)if(this.previewFloor&&this.previewFloor!==a)this.targetFocus.x=0,this.targetFocus.z=0,this.targetFocus.y=this.previewFloor===4?-54:this.previewFloor===3?-36:this.previewFloor===2?-18:0;else{const d=(this.cameraAltitude-this.minAltitude)/(this.maxAltitude-this.minAltitude),S=nn.lerp(.85,.2,d);this.targetFocus.x=this.robot.position.x*S,this.targetFocus.z=this.robot.position.z*S,this.targetFocus.y=this.robot.position.y}this.cameraFocus.x+=(this.targetFocus.x-this.cameraFocus.x)*.1,this.cameraFocus.y+=(this.targetFocus.y-this.cameraFocus.y)*.1,this.cameraFocus.z+=(this.targetFocus.z-this.cameraFocus.z)*.1;let x=this.cameraFocus.x,v,m;if(l){const d=Math.min(24,this.cameraAltitude*.85);v=this.cameraFocus.y+d,m=this.cameraFocus.z+d*.95}else if(c){const d=Math.min(24,this.cameraAltitude*.88);v=this.cameraFocus.y+d,m=this.cameraFocus.z+d*.95}else if(h){const d=Math.min(22,this.cameraAltitude*.85);v=this.cameraFocus.y+d,m=this.cameraFocus.z+d*.95}else v=this.cameraFocus.y+this.cameraAltitude,m=this.cameraFocus.z+this.cameraAltitude*.95;if(this.camera.position.x+=(x-this.camera.position.x)*.1,this.camera.position.y+=(v-this.camera.position.y)*.1,this.camera.position.z+=(m-this.camera.position.z)*.1,this.camera.lookAt(this.cameraFocus.x,this.cameraFocus.y,this.cameraFocus.z),this.hasBlastDoor&&this.blastDoorMesh){const E=this.itemManager.terminals.some(D=>D.type==="keycard_reader"&&D.isOccupied)||!!(e&&(e.beacon_ping||e.aux_light))?4.2:1.4,_=6;if(this.blastDoorMesh.position.y+=(E-this.blastDoorMesh.position.y)*Math.min(1,(t||.016)*_),this.blastDoorMesh.position.y>3){if(!this.isBlastDoorOpen){this.isBlastDoorOpen=!0,this.doorBulbMat&&(this.doorBulbMat.color.setHex(1096065),this.doorBulbMat.emissive.setHex(1096065)),this.doorLight&&this.doorLight.color.setHex(1096065);const D=this.obstacles.indexOf(this.doorCollision);D!==-1&&this.obstacles.splice(D,1)}}else this.isBlastDoorOpen&&(this.isBlastDoorOpen=!1,this.doorBulbMat&&(this.doorBulbMat.color.setHex(15680580),this.doorBulbMat.emissive.setHex(15680580)),this.doorLight&&this.doorLight.color.setHex(15680580),this.doorCollision&&!this.obstacles.includes(this.doorCollision)&&this.obstacles.push(this.doorCollision))}if(this.elevatorCarriage)if(this.elevatorState==="moving_down"||this.elevatorState==="moving_up"){const d=this.targetCarriageY,S=d-this.elevatorCarriageY,_=Math.sign(S)*Math.min(Math.abs(S),5.2*t);this.elevatorCarriageY+=_,this.elevatorCarriage.position.y=this.elevatorCarriageY,this.winchDrum&&(this.winchDrum.rotation.x+=(this.elevatorState==="moving_down"?1:-1)*t*8);const D=4.3,R=this.elevatorCarriageY+.1,L=Math.max(.2,D-R);this.elevatorCables.forEach(I=>{I.scale.set(1,L,1),I.position.y=D-L/2});for(const I of this.deployedRobots){const b=Math.hypot(I.position.x-18,I.position.z-14),g=this.elevatorCarriageY+.4,y=Math.abs(I.position.y-g)<1.8;(I.onElevator||b<2.6&&y)&&(I.onElevator=!0,I.position.set(18,g,14),I.velocity.set(0,0,0),I.mesh.position.copy(I.position))}if(this.elevatorWinchSoundTimer-=t,this.elevatorWinchSoundTimer<=0&&(K.playWinchMove(),this.elevatorWinchSoundTimer=.35),Math.abs(this.elevatorCarriageY-d)<.05){this.elevatorCarriageY=d,this.elevatorCarriage.position.y=d,this.currentFloor=d===0?1:d===-18?2:d===-36?3:4;const I=this.robot;I&&I.onElevator&&(this.previewFloor=this.currentFloor),this.updateCamFloorButton(),this.elevatorState="idle",this.obstacles=this.currentFloor===1?this.level1Obstacles:this.currentFloor===2?this.subLevel2Obstacles:this.currentFloor===3?this.subLevel3Obstacles:this.subLevel4Obstacles;let b=null;for(const y of this.deployedRobots)y.onElevator&&(y.onElevator=!1,y.position.set(17.2,d+.4,14),y.mesh.position.copy(y.position),y.heldItem&&(b=y));K.playElevatorArrive(),this.previewFloor===4&&this.tacticalRadar?this.tacticalRadar.enableVoidMode(!0):this.tacticalRadar&&this.tacticalRadar.isVoidMode&&this.tacticalRadar.enableVoidMode(!1);const g=document.getElementById("goal-banner");if(g){if(b&&this.currentFloor===1){const y=(b.heldItem.label||"MINERAL ORE").replace(/\s*\(.*\)/,"");g.textContent=`🛗 ${b.name.toUpperCase()} ARRIVED AT LEVEL 1 WITH ${y.toUpperCase()}! // DRIVE TO REFINERY (-18, -12) TO SMELT! 🔥`,g.style.background="linear-gradient(135deg, rgba(245, 158, 11, 0.35), rgba(16, 185, 129, 0.35))",g.style.borderColor="#fbbf24",g.style.boxShadow="0 0 30px rgba(251, 191, 36, 0.7)",g.style.color="#fbbf24"}else{const y={1:"🛗 RETURNED TO LEVEL 1 // MAIN SEWER LABS",2:"🛗 ARRIVED AT SUB-LEVEL 2 // DEEP CORE MINING QUARRY",3:"🌌 ARRIVED AT SUB-LEVEL 3 // ABYSSAL DATA CORE (-36m)",4:"📡 ARRIVED AT SUB-LEVEL 4 // THE VOID (-54m) // ZERO VISIBILITY // RADAR FLIGHT"};g.textContent=y[this.currentFloor]||y[1],g.style.background=this.currentFloor===4?"rgba(6, 182, 212, 0.25)":this.currentFloor===3?"rgba(168, 85, 247, 0.25)":"rgba(14, 165, 233, 0.25)",g.style.borderColor=this.currentFloor===4?"#06b6d4":this.currentFloor===3?"#a855f7":"#0ea5e9",g.style.boxShadow=`0 0 25px ${this.currentFloor===4?"rgba(6, 182, 212, 0.5)":this.currentFloor===3?"rgba(168, 85, 247, 0.5)":"rgba(14, 165, 233, 0.5)"}`,g.style.color=this.currentFloor===4?"#67e8f9":this.currentFloor===3?"#d8b4fe":"#38bdf8"}g.classList.add("show"),setTimeout(()=>g.classList.remove("show"),3500)}}}else{const d=this.elevatorCarriageY+.4,S=Math.hypot(this.robot.position.x-18,this.robot.position.z-14),E=Math.abs(this.robot.position.y-d)<1.8,_=(S<3.2||Math.abs(this.robot.position.x-18)<2.6&&Math.abs(this.robot.position.z-14)<2.6)&&E,D=S<8&&E;let R=_,L=D;for(const b of this.deployedRobots){if(!b||b===this.robot)continue;const g=Math.hypot(b.position.x-18,b.position.z-14);Math.abs(b.position.y-d)<1.8&&((g<3.2||Math.abs(b.position.x-18)<2.6&&Math.abs(b.position.z-14)<2.6)&&(R=!0),g<8&&(L=!0))}const I=this.elevatorUnlocked||this.credits>=this.elevatorUnlockCredits;if(I&&!this.elevatorUnlocked&&(this.elevatorUnlocked=!0,K.playPowerUnlock()),this.elevatorCarriageY<-5&&this.elevatorState==="idle"){for(const b of this.deployedRobots)if(b&&b.heldItem){const g=Math.hypot(b.position.x-18,b.position.z-14),y=Math.abs(b.position.y-d)<1.8;if((g<3.2||Math.abs(b.position.x-18)<2.6&&Math.abs(b.position.z-14)<2.6)&&y){this.elevatorUnlocked=!0,b.onElevator=!0,b.position.set(18,d,14),b.velocity.set(0,0,0),b.mesh.position.copy(b.position),this.goToFloor(1);const P=document.getElementById("goal-banner");if(P){const U=(b.heldItem.label||"MINERAL ORE").replace(/\s*\(.*\)/,"");P.textContent=`💎 ${b.name.toUpperCase()} ENTERED ELEVATOR WITH ${U.toUpperCase()} // AUTO-HOISTING TO LEVEL 1 REFINERY! ⚙️`,P.style.background="linear-gradient(135deg, rgba(16, 185, 129, 0.4), rgba(6, 182, 212, 0.4))",P.style.borderColor="#10b981",P.style.boxShadow="0 0 30px rgba(16, 185, 129, 0.7)",P.style.color="#ffffff",P.classList.add("show")}break}}}if(_){if(this.wasInElevator||(this.wasInElevator=!0,I?K.playRelayClick():K.playAccessDenied()),this.elevatorBeaconMat)if(I){const b=2.5+Math.sin(Date.now()*.008)*1;this.elevatorBeaconMat.color.setHex(1096065),this.elevatorBeaconMat.emissive.setHex(1096065),this.elevatorBeaconMat.emissiveIntensity=b,this.elevatorLight&&(this.elevatorLight.color.setHex(1096065),this.elevatorLight.intensity=b)}else{const b=1.8+Math.sin(Date.now()*.012)*1;this.elevatorBeaconMat.color.setHex(16096779),this.elevatorBeaconMat.emissive.setHex(16096779),this.elevatorBeaconMat.emissiveIntensity=b,this.elevatorLight&&(this.elevatorLight.color.setHex(16096779),this.elevatorLight.intensity=b)}I&&e&&(e.beacon_ping||e.aux_light)&&(this._actuatorElevatorDebounce||(this._actuatorElevatorDebounce=!0,this.toggleElevator(),setTimeout(()=>{this._actuatorElevatorDebounce=!1},2e3)))}else if(this.wasInElevator&&(this.wasInElevator=!1),this.elevatorBeaconMat){const b=I?1096065:959977;this.elevatorBeaconMat.color.setHex(b),this.elevatorBeaconMat.emissive.setHex(b),this.elevatorBeaconMat.emissiveIntensity=1.8,this.elevatorLight&&(this.elevatorLight.color.setHex(b),this.elevatorLight.intensity=1.8)}this.updateElevatorHUD(R,I,L)}this.renderer.render(this.scene,this.camera)}}const Le={empty:{name:"Blank Board",description:"A clean slate to build your own custom circuit from scratch.",load(n){n.clear()}},bounce:{name:"Wall Bounce (Direct Reaction)",description:"Wires bumpers to reverse thrusters so the robot bounces off obstacles.",load(n){n.clear(),n.addWire({type:"sensor",id:null,pin:"bumper_n"},{type:"actuator",id:null,pin:"thrust_s"}),n.addWire({type:"sensor",id:null,pin:"bumper_s"},{type:"actuator",id:null,pin:"thrust_n"}),n.addWire({type:"sensor",id:null,pin:"bumper_e"},{type:"actuator",id:null,pin:"thrust_w"}),n.addWire({type:"sensor",id:null,pin:"bumper_w"},{type:"actuator",id:null,pin:"thrust_e"})}},patrol_latch:{name:"RS-Latch Patrol (Memory)",description:"Uses an RS Flip-Flop to remember direction: cruises North until bumper hits, then memorizes South!",load(n){n.clear();const t=n.addChip("RS_LATCH",240,160);n.addChip("NOT",100,320),n.addWire({type:"sensor",id:null,pin:"bumper_n"},{type:"chip",id:t.id,pin:"set"}),n.addWire({type:"sensor",id:null,pin:"bumper_s"},{type:"chip",id:t.id,pin:"reset"}),n.addWire({type:"chip",id:t.id,pin:"q"},{type:"actuator",id:null,pin:"thrust_s"}),n.addWire({type:"chip",id:t.id,pin:"q_bar"},{type:"actuator",id:null,pin:"thrust_n"})}},cortex_hybrid:{name:"CORTEX-1 AI + Anti-Hangup (Flux)",description:"Autonomous Ore Mining Autopilot: CORTEX-1 AI co-processor with integrated anti-hangup contour evasion and stuck-watchdog disengage. Seeks raw ore chunks, clamps pincers, hauls to the Refinery, and smelts for credits.",load(n){n.clear();const t=n.addChip("CORTEX_AI",260,140);n.addWire({type:"chip",id:t.id,pin:"dir_n"},{type:"actuator",id:null,pin:"thrust_n"}),n.addWire({type:"chip",id:t.id,pin:"dir_s"},{type:"actuator",id:null,pin:"thrust_s"}),n.addWire({type:"chip",id:t.id,pin:"dir_e"},{type:"actuator",id:null,pin:"thrust_e"}),n.addWire({type:"chip",id:t.id,pin:"dir_w"},{type:"actuator",id:null,pin:"thrust_w"}),n.addWire({type:"chip",id:t.id,pin:"grab"},{type:"actuator",id:null,pin:"grabber"}),n.addWire({type:"sensor",id:null,pin:"item_detect"},{type:"chip",id:t.id,pin:"item_in"}),n.addWire({type:"sensor",id:null,pin:"radar_ping"},{type:"actuator",id:null,pin:"aux_light"})}},checkers_hauler:{name:"Tug: Heavy Freight Hauler",description:"Autonomous Ore Carrier Brain: CORTEX-1 co-processor tuned for heavy hauling. Targets raw ore, clamps industrial pincers, and routes straight to the Refinery crucible.",load(n){n.clear();const t=n.addChip("CORTEX_AI",260,140);n.addWire({type:"chip",id:t.id,pin:"dir_n"},{type:"actuator",id:null,pin:"thrust_n"}),n.addWire({type:"chip",id:t.id,pin:"dir_s"},{type:"actuator",id:null,pin:"thrust_s"}),n.addWire({type:"chip",id:t.id,pin:"dir_e"},{type:"actuator",id:null,pin:"thrust_e"}),n.addWire({type:"chip",id:t.id,pin:"dir_w"},{type:"actuator",id:null,pin:"thrust_w"}),n.addWire({type:"chip",id:t.id,pin:"grab"},{type:"actuator",id:null,pin:"grabber"}),n.addWire({type:"sensor",id:null,pin:"item_detect"},{type:"chip",id:t.id,pin:"item_in"}),n.addWire({type:"sensor",id:null,pin:"radar_ping"},{type:"actuator",id:null,pin:"beacon_ping"})}},scanners_scout:{name:"Scope: Deep Vein Sonar",description:"Vein Locator Brain: High-gain radar dish pulses beacon whenever near energy targets or subterranean ore veins, with RS-latch state patrol.",load(n){n.clear();const t=n.addChip("RS_LATCH",280,160);n.addWire({type:"sensor",id:null,pin:"bumper_n"},{type:"chip",id:t.id,pin:"set"}),n.addWire({type:"sensor",id:null,pin:"bumper_s"},{type:"chip",id:t.id,pin:"reset"}),n.addWire({type:"chip",id:t.id,pin:"q"},{type:"actuator",id:null,pin:"thrust_s"}),n.addWire({type:"chip",id:t.id,pin:"q_bar"},{type:"actuator",id:null,pin:"thrust_n"}),n.addWire({type:"sensor",id:null,pin:"radar_ping"},{type:"actuator",id:null,pin:"beacon_ping"}),n.addWire({type:"sensor",id:null,pin:"radar_ping"},{type:"actuator",id:null,pin:"aux_light"})}},tank_patrol:{name:"Dozer: Heavy Armored Bulldozer",description:"High-inertia barrier breaker: Uses wall-bounce reflexes with maximum forward thrust to clear obstacles.",load(n){n.clear(),n.addWire({type:"sensor",id:null,pin:"bumper_n"},{type:"actuator",id:null,pin:"thrust_s"}),n.addWire({type:"sensor",id:null,pin:"bumper_s"},{type:"actuator",id:null,pin:"thrust_n"}),n.addWire({type:"sensor",id:null,pin:"bumper_e"},{type:"actuator",id:null,pin:"thrust_w"}),n.addWire({type:"sensor",id:null,pin:"bumper_w"},{type:"actuator",id:null,pin:"thrust_e"}),n.addWire({type:"sensor",id:null,pin:"clock_tick"},{type:"actuator",id:null,pin:"aux_light"})}},stepper_patrol:{name:"Stepper Sequencer Patrol (4-Step Loop)",description:"Autonomous 4-State Sequencer: Uses a 4017 Stepper Chip to cycle North -> East -> South -> West on bumper collision.",load(n){n.clear();const t=n.addChip("STEPPER",280,160),e=n.addChip("OR",100,100),i=n.addChip("OR",100,240),s=n.addChip("OR",190,170);n.addWire({type:"sensor",id:null,pin:"bumper_n"},{type:"chip",id:e.id,pin:"in_a"}),n.addWire({type:"sensor",id:null,pin:"bumper_e"},{type:"chip",id:e.id,pin:"in_b"}),n.addWire({type:"sensor",id:null,pin:"bumper_s"},{type:"chip",id:i.id,pin:"in_a"}),n.addWire({type:"sensor",id:null,pin:"bumper_w"},{type:"chip",id:i.id,pin:"in_b"}),n.addWire({type:"chip",id:e.id,pin:"out"},{type:"chip",id:s.id,pin:"in_a"}),n.addWire({type:"chip",id:i.id,pin:"out"},{type:"chip",id:s.id,pin:"in_b"}),n.addWire({type:"chip",id:s.id,pin:"out"},{type:"chip",id:t.id,pin:"clk"}),n.addWire({type:"chip",id:t.id,pin:"s1"},{type:"actuator",id:null,pin:"thrust_n"}),n.addWire({type:"chip",id:t.id,pin:"s2"},{type:"actuator",id:null,pin:"thrust_e"}),n.addWire({type:"chip",id:t.id,pin:"s3"},{type:"actuator",id:null,pin:"thrust_s"}),n.addWire({type:"chip",id:t.id,pin:"s4"},{type:"actuator",id:null,pin:"thrust_w"})}},timer_stepper_clock:{name:"555 Astable Clock + 4017 Stepper (Timed Patrol)",description:"Autonomous Clocked Sequencer: NE555 precision oscillator in ASTABLE mode generates a 1.0s square-wave clock pulse driving the 4017 Stepper chip, automatically cycling cardinal thrusters in a continuous square loop!",load(n){n.clear();const t=n.addChip("TIMER_555",100,160);t&&t.state&&(t.state.mode="ASTABLE",t.state.timeLabel="1.0s",t.state.timeBase=60);const e=n.addChip("STEPPER",310,150);n.addWire({type:"chip",id:t.id,pin:"out"},{type:"chip",id:e.id,pin:"clk"}),n.addWire({type:"chip",id:t.id,pin:"disch"},{type:"actuator",id:null,pin:"aux_light"}),n.addWire({type:"chip",id:e.id,pin:"s1"},{type:"actuator",id:null,pin:"thrust_n"}),n.addWire({type:"chip",id:e.id,pin:"s2"},{type:"actuator",id:null,pin:"thrust_e"}),n.addWire({type:"chip",id:e.id,pin:"s3"},{type:"actuator",id:null,pin:"thrust_s"}),n.addWire({type:"chip",id:e.id,pin:"s4"},{type:"actuator",id:null,pin:"thrust_w"})}},shift_ring_patrol:{name:"Shift Register Walking-Ring (Johnson Counter)",description:"Autonomous Temporal Brain: NE555 timer generates clock pulses into a 74194 Shift Register. An inverter feeds !Q3 back into DATA, creating an authentic 8-state walking ring counter that steers the robot in an organic orbital patrol!",load(n){n.clear();const t=n.addChip("TIMER_555",80,150);t&&t.state&&(t.state.mode="ASTABLE",t.state.timeLabel="0.5s",t.state.timeBase=30);const e=n.addChip("NOT",80,310),i=n.addChip("SHIFT_REG",270,150);n.addWire({type:"chip",id:t.id,pin:"out"},{type:"chip",id:i.id,pin:"clk"}),n.addWire({type:"chip",id:i.id,pin:"q3"},{type:"chip",id:e.id,pin:"in"}),n.addWire({type:"chip",id:e.id,pin:"out"},{type:"chip",id:i.id,pin:"data"}),n.addWire({type:"chip",id:i.id,pin:"q0"},{type:"actuator",id:null,pin:"thrust_n"}),n.addWire({type:"chip",id:i.id,pin:"q1"},{type:"actuator",id:null,pin:"thrust_e"}),n.addWire({type:"chip",id:i.id,pin:"q2"},{type:"actuator",id:null,pin:"thrust_s"}),n.addWire({type:"chip",id:i.id,pin:"q3"},{type:"actuator",id:null,pin:"thrust_w"}),n.addWire({type:"chip",id:t.id,pin:"disch"},{type:"actuator",id:null,pin:"aux_light"})}},stepped_tone_generator:{name:"Stepped Tone Synth (Atari Punk Console)",description:"Analog/Discrete Hybrid Synth: NE555 square-wave timer feeds through a 10K trimmer potentiometer and an NPN silicon transistor (2N3904) into an 8Ω acoustic piezo speaker. Adjust the pot dial or 555 frequency to warp chiptune audio tones in real time!",load(n){n.clear();const t=n.addChip("TIMER_555",60,140);t&&t.state&&(t.state.mode="ASTABLE",t.state.timeLabel="0.2s",t.state.timeBase=10);const e=n.addChip("POTENTIOMETER",230,140);e&&e.state&&(e.state.dial=.5,e.state.freq=680);const i=n.addChip("NPN",400,140),s=n.addChip("PIEZO_BUZZER",400,290);s&&s.state&&(s.state.freq=680);const r=n.addChip("CAPACITOR",230,290);n.addWire({type:"chip",id:t.id,pin:"out"},{type:"chip",id:e.id,pin:"in"}),n.addWire({type:"chip",id:e.id,pin:"wiper"},{type:"chip",id:i.id,pin:"b"}),n.addWire({type:"chip",id:t.id,pin:"out"},{type:"chip",id:i.id,pin:"c"}),n.addWire({type:"chip",id:i.id,pin:"e"},{type:"chip",id:s.id,pin:"sig"}),n.addWire({type:"chip",id:t.id,pin:"disch"},{type:"chip",id:r.id,pin:"in"}),n.addWire({type:"chip",id:s.id,pin:"thru"},{type:"actuator",id:null,pin:"aux_light"})}},discrete_rtl_not:{name:"Discrete RTL NOT (Transistor Inverter)",description:"Resistor-Transistor Logic: Silicon PNP transistor (2N3906) acting as an active-low inverter. When radar beacon is quiet (0), current conducts from Emitter to Collector to keep forward thrusters firing. When obstacle detected (1), transistor cuts off!",load(n){n.clear();const t=n.addChip("PNP",250,180);n.addWire({type:"sensor",id:null,pin:"radar_ping"},{type:"chip",id:t.id,pin:"b"}),n.addWire({type:"sensor",id:null,pin:"clock_tick"},{type:"chip",id:t.id,pin:"e"}),n.addWire({type:"chip",id:t.id,pin:"c"},{type:"actuator",id:null,pin:"thrust_n"})}}};class gm{constructor(t,e){this.engine=t,this.ui=e,this.modal=document.getElementById("burn-modal"),this.customChipCounter=1,this.chipNameInput=document.getElementById("burn-chip-name"),this.chipCodeInput=document.getElementById("burn-chip-code"),this.statChips=document.getElementById("burn-stat-chips"),this.statWires=document.getElementById("burn-stat-wires"),this.inputsList=document.getElementById("burn-inputs-list"),this.outputsList=document.getElementById("burn-outputs-list"),this.confirmBtn=document.getElementById("burn-confirm-btn"),this.closeBtn=document.getElementById("burn-close-btn"),this.previewLabel=document.getElementById("preview-chip-label"),this.previewCode=document.getElementById("preview-chip-code"),this.previewPinsLeft=document.getElementById("preview-pins-left"),this.previewPinsRight=document.getElementById("preview-pins-right"),this.wpCard=document.getElementById("burn-waypoint-info"),this.wpCoordsText=document.getElementById("burn-wp-coords"),this.wpLatchBtn=document.getElementById("burn-wp-latch-btn"),this.currentAnalysis=null,this.customChipsList=[],this.onChipFabricated=null,this.bindEvents()}bindEvents(){var i;const t=document.getElementById("burn-chip-btn");t&&t.addEventListener("click",()=>this.open()),this.closeBtn&&this.closeBtn.addEventListener("click",()=>this.close());const e=(i=this.modal)==null?void 0:i.querySelector(".burn-backdrop");e&&e.addEventListener("click",()=>this.close()),this.chipNameInput&&this.chipNameInput.addEventListener("input",()=>{this.previewLabel&&(this.previewLabel.textContent=this.chipNameInput.value.toUpperCase()||"CUSTOM_IC")}),this.chipCodeInput&&this.chipCodeInput.addEventListener("input",()=>{this.previewCode&&(this.previewCode.textContent=this.chipCodeInput.value.toUpperCase()||"IC-01")}),this.wpLatchBtn&&this.wpLatchBtn.addEventListener("click",()=>{this.latchActiveRobotToBoardWaypoint()}),this.confirmBtn&&this.confirmBtn.addEventListener("click",()=>this.fabricate())}analyzeBoard(){const t=Array.from(this.engine.chips.values()),e=this.engine.wires,i=new Map,s=new Map;e.forEach(a=>{if(a.from.type==="sensor"&&a.to.type==="chip"){const o=`in_${a.from.pin}`,l=a.from.pin.replace("bumper_","BUMP_").replace("radar_ping","RADAR").replace("energy_low","BATT_LOW").replace("energy_dock","CHARGING").toUpperCase();i.set(o,{id:o,label:l,targetChipId:a.to.id,targetPin:a.to.pin})}if(a.from.type==="chip"&&a.to.type==="actuator"){const o=`out_${a.to.pin}`,l=a.to.pin.replace("thrust_","THRUST_").replace("aux_light","LIGHT").toUpperCase();s.set(o,{id:o,label:l,sourceChipId:a.from.id,sourcePin:a.from.pin})}});const r=t.length===1;return i.size===0&&t.forEach(a=>{const o=Oe[a.type];o&&o.inputs.forEach(l=>{const c=`in_${a.id}_${l.id}`,h=r?l.label:`${a.code}_${l.label}`;i.set(c,{id:c,label:h,targetChipId:a.id,targetPin:l.id})})}),s.size===0&&t.forEach(a=>{const o=Oe[a.type];o&&o.outputs.forEach(l=>{const c=`out_${a.id}_${l.id}`,h=r?l.label:`${a.code}_${l.label}`;s.set(c,{id:c,label:h,sourceChipId:a.id,sourcePin:l.id})})}),{chipsCount:t.length,wiresCount:e.length,inputs:Array.from(i.values()),outputs:Array.from(s.values()),chips:t.map(a=>({id:a.id,type:a.type,x:a.x,y:a.y,state:a.state?JSON.parse(JSON.stringify(a.state)):{}})),internalWires:e.filter(a=>a.from.type==="chip"&&a.to.type==="chip")}}open(){if(K.init(),this.engine.chips.size===0){alert("The motherboard has no chips! Place and wire some chips first before burning to microchip.");return}this.currentAnalysis=this.analyzeBoard();const t=this.customChipCounter;this.chipNameInput.value=`CUSTOM_CORE_0${t}`,this.chipCodeInput.value=`IC-C${t}`,this.statChips.textContent=`${this.currentAnalysis.chipsCount} CHIPS ENCAPSULATED`,this.statWires.textContent=`${this.currentAnalysis.internalWires.length} INTERNAL BUS TRACES`,this.previewLabel.textContent=this.chipNameInput.value,this.previewCode.textContent=this.chipCodeInput.value,this.inputsList.innerHTML=this.currentAnalysis.inputs.map(e=>`
      <div class="pin-check-row">
        <span class="pin-dot-mini in"></span>
        <span class="pin-name">${e.label}</span>
      </div>
    `).join("")||'<span class="empty-hint">None detected</span>',this.outputsList.innerHTML=this.currentAnalysis.outputs.map(e=>`
      <div class="pin-check-row">
        <span class="pin-dot-mini out"></span>
        <span class="pin-name">${e.label}</span>
      </div>
    `).join("")||'<span class="empty-hint">None detected</span>',this.previewPinsLeft.innerHTML=this.currentAnalysis.inputs.map(()=>'<div class="ic-leg"></div>').join(""),this.previewPinsRight.innerHTML=this.currentAnalysis.outputs.map(()=>'<div class="ic-leg"></div>').join(""),this.updateWaypointCard(),this.modal.classList.add("active"),K.playRelayClick()}updateWaypointCard(){var i,s;if(!this.wpCard||!this.currentAnalysis)return;let t=null;for(const r of this.currentAnalysis.chips)if(r.type==="WAYPOINT_MEM"||r.state&&r.state.target){t=r;break}if(!t){this.wpCard.classList.add("hidden");return}this.wpCard.classList.remove("hidden");const e=t.state&&t.state.target;if(e){const r=(e.x>=0?"+":"")+e.x.toFixed(1),a=(e.z>=0?"+":"")+e.z.toFixed(1);this.wpCoordsText.innerHTML=`LATCHED: <strong>[${r}, ${a}]</strong> (Baked into ROM)`,this.wpCoordsText.classList.remove("empty"),this.wpLatchBtn&&(this.wpLatchBtn.textContent="🔄 RE-LATCH CURRENT POS")}else{const r=typeof window<"u"&&((s=(i=window.worldScene)==null?void 0:i.robot)==null?void 0:s.position)||{x:0,z:0},a=(r.x>=0?"+":"")+(Math.round(r.x*10)/10).toFixed(1),o=(r.z>=0?"+":"")+(Math.round(r.z*10)/10).toFixed(1);this.wpCoordsText.innerHTML=`<span class="wp-warn">⚠️ REGISTER EMPTY [MEM: --]</span> (Robot is at [${a}, ${o}])`,this.wpCoordsText.classList.add("empty"),this.wpLatchBtn&&(this.wpLatchBtn.textContent=`📍 LATCH CURRENT POS [${a}, ${o}]`)}}latchActiveRobotToBoardWaypoint(){var i,s;let t=null;for(const r of this.engine.chips.values())if(r.type==="WAYPOINT_MEM"){t=r;break}if(!t){this.showToast("No Waypoint Register (74374-MEM) found on the motherboard.");return}const e=typeof window<"u"&&((s=(i=window.worldScene)==null?void 0:i.robot)==null?void 0:s.position)||{x:0,z:0};t.state=t.state||{},t.state.target={x:Math.round(e.x*10)/10,z:Math.round(e.z*10)/10},t.state.lastStore=!0,K.playRelayClick(),this.ui.updateVisualStates(),this.ui.onCircuitChange&&this.ui.onCircuitChange(),this.currentAnalysis=this.analyzeBoard(),this.updateWaypointCard(),this.showToast(`📍 Latched coordinates [${t.state.target.x}, ${t.state.target.z}] into Waypoint Register!`)}close(){this.modal.classList.remove("active"),K.playWireCut()}fabricate(){if(!this.currentAnalysis)return;const t=(this.chipNameInput.value||"CUSTOM_IC").trim().toUpperCase(),e=(this.chipCodeInput.value||`IC-${this.customChipCounter}`).trim().toUpperCase(),s={customKey:`CUSTOM_${Date.now()}`,name:t,code:e,inputs:[...this.currentAnalysis.inputs],outputs:[...this.currentAnalysis.outputs],chips:JSON.parse(JSON.stringify(this.currentAnalysis.chips)),internalWires:JSON.parse(JSON.stringify(this.currentAnalysis.internalWires))};this.registerCustomChip(s),this.customChipsList.push(s),this.customChipCounter++,this.close(),K.playGoalChime(),this.showToast(`🔥 Microchip [${t}] burned successfully to IC Toolbox!`),this.onChipFabricated&&this.onChipFabricated(s)}registerCustomChip(t){const{customKey:e,name:i,code:s,inputs:r,outputs:a,chips:o,internalWires:l}=t,c=Math.max(r.length,a.length,2),h=Math.max(80,c*28+36);Oe[e]={type:e,name:i,code:s,category:"custom",description:`Custom IC burned in Innovation Lab. Encapsulates ${o.length} gates.`,width:170,height:h,inputs:r.map(p=>({id:p.id,label:p.label})),outputs:a.map(p=>({id:p.id,label:p.label})),init(p={}){const u={};if(o.forEach(f=>{const x=Oe[f.type],v=f.state?JSON.parse(JSON.stringify(f.state)):{};u[f.id]=x&&x.init?x.init(v):v}),p&&p.subChipStates)for(const f of Object.keys(p.subChipStates))u[f]={...u[f],...p.subChipStates[f]};return{subChipStates:u}},evaluate(p,u,f={}){const x=u.subChipStates||{},v={},m={},d={};o.forEach(E=>{m[E.id]={},d[E.id]={}}),r.forEach(E=>{(f.connectedInputs?!!f.connectedInputs[E.id]:p[E.id]!==void 0)&&(d[E.targetChipId][E.targetPin]=!0,m[E.targetChipId][E.targetPin]=p[E.id])});for(let E=0;E<4;E++)l.forEach(_=>{d[_.to.id][_.to.pin]=!0,(v[_.from.id]?!!v[_.from.id][_.from.pin]:!1)&&(m[_.to.id][_.to.pin]=!0)}),o.forEach(_=>{const D=Oe[_.type];if(D){const R={...f,pass:E,connectedInputs:d[_.id]},L=D.evaluate(m[_.id],x[_.id],R);v[_.id]=L.outputs,L.state&&(x[_.id]=L.state)}});const S={};return a.forEach(E=>{S[E.id]=v[E.sourceChipId]?!!v[E.sourceChipId][E.sourcePin]:!1}),{outputs:S,state:{subChipStates:x}}}},this.addCustomChipToTray(e,i,s)}getCustomChipsData(){return[...this.customChipsList]}loadCustomChips(t){Array.isArray(t)&&t.forEach(e=>{e&&e.customKey&&!Oe[e.customKey]&&(this.registerCustomChip(e),this.customChipsList.push(e))})}addCustomChipToTray(t,e,i){var a;const s=document.getElementById("tray-row-advanced")||document.querySelector(".tray-chips-list");if(!s||s.querySelector(`[data-type="${t}"]`))return;const r=document.createElement("button");r.className="tray-chip-btn custom-chip-btn",r.dataset.type=t,r.title=`Custom IC [${e}] - Click to spawn, Right-click to delete`,r.innerHTML=`
      <span class="tray-chip-name">${e}</span>
      <span class="tray-chip-code custom-code">★ ${i}</span>
      <span class="custom-chip-del-btn" title="Delete custom IC">&times;</span>
    `,r.addEventListener("click",o=>{if(o.target.closest(".custom-chip-del-btn"))return;K.init();const l=this.ui.chipsViewport||this.ui.boardWrapper,c=l.clientWidth||700,h=l.clientHeight||450,p=Math.round((c/2-this.ui.pan.x)/this.ui.zoom-80),u=Math.round((h/2-this.ui.pan.y)/this.ui.zoom-60);this.engine.addChip(t,p,u)&&(K.playChipDrop(),this.ui.renderChips(),this.ui.renderWires())}),(a=r.querySelector(".custom-chip-del-btn"))==null||a.addEventListener("click",o=>{o.stopPropagation(),o.preventDefault(),this.deleteCustomChip(t,e,r)}),r.addEventListener("contextmenu",o=>{o.preventDefault(),o.stopPropagation(),this.deleteCustomChip(t,e,r)}),s.appendChild(r)}deleteCustomChip(t,e,i){if(!confirm(`Delete custom microchip [${e}] from your toolbox?`))return;i.remove(),delete Oe[t],this.customChipsList=this.customChipsList.filter(r=>r.customKey!==t);const s=[];for(const[r,a]of this.engine.chips.entries())a.type===t&&s.push(r);s.forEach(r=>this.engine.removeChip(r)),this.ui.renderChips(),this.ui.renderWires(),K.playWireCut(),this.showToast(`🗑️ Microchip [${e}] deleted from toolbox.`),this.onChipFabricated&&this.onChipFabricated()}showToast(t){let e=document.getElementById("burn-toast");e||(e=document.createElement("div"),e.id="burn-toast",e.className="burn-toast",document.body.appendChild(e)),e.textContent=t,e.classList.add("show"),setTimeout(()=>{e.classList.remove("show")},4500)}}const pi=[{id:"mission_1",number:"01",title:"The Reflex Arc",subtitle:"Sensors, Actuators & Direct Wiring",concept:"Direct Signal Flow & Inversion",summary:"Trapped in the disposal chute of the LogicForge! Wire Flux's contact bumpers to reverse thrusters to bounce safely away from hazards.",instructions:["Connect BUMP SOUTH to THRUST NORTH","Connect BUMP NORTH to THRUST SOUTH","Connect BUMP WEST to THRUST EAST","Connect BUMP EAST to THRUST WEST","Or use WASD / Arrow keys for manual emergency steering"],theory:"In robotics, a reflex arc is an immediate pathway from sensor to actuator without high-level processing. In digital logic, a HIGH (1) voltage from a contact switch is piped directly into a motor relay.",robotSpawn:{x:-14,z:14},targetPos:{x:14,z:-14},obstacles:[{x:-6,z:0,w:3,h:2,d:3},{x:6,z:0,w:3,h:2,d:3}],checkObjectives(n,t,e){const i=t.position.distanceTo(e);return[{label:"Connect at least 2 bumper reflex wires (or manual drive)",done:n.wires.length>=2},{label:"Reach the Energy Terminal",done:i<2.4}]}},{id:"mission_2",number:"02",title:"Security Blast Door",subtitle:"Combinational Logic: The AND & OR Gates",concept:"Boolean Algebra (AND / OR)",summary:"A heavy titanium blast door blocks access to the sector core. The door requires authorization: you must supply a HIGH signal to RADIO PING or HEADLIGHT to unlock it.",instructions:["Drop an AND Gate (7408) from the IC Toolbox","Connect RADAR BEACON to Input A and 1Hz CLOCK to Input B","Wire the AND output to RADIO PING or HEADLIGHT to trip the door sensor!","ALTERNATIVE: Steer Flux over to the Keycard, clamp pincers with [G], and dock into the Keycard Reader terminal!","Once open, drive Flux through the airlock to the Core"],theory:"George Boole invented Boolean logic in 1854. An AND gate outputs HIGH (1) only when BOTH inputs are simultaneously HIGH (1 & 1 = 1). If either input is LOW (0), current cannot pass.",robotSpawn:{x:0,z:16},targetPos:{x:0,z:-16},hasBlastDoor:!0,items:[{id:"keycard_alpha",type:"keycard",color:3718648,label:"Sector Alpha Keycard",x:-8,z:12}],terminals:[{id:"reader_blast_door",type:"keycard_reader",label:"Blast Door Terminal",x:-3.5,z:1.2}],obstacles:[{x:-14,z:0,w:18,h:2.4,d:1.4,color:1976635},{x:14,z:0,w:18,h:2.4,d:1.4,color:1976635}],checkObjectives(n,t,e,i){const s=Array.from(n.chips.values()).some(l=>l.type==="AND"),r=i?i.isBlastDoorOpen:!1,a=i&&i.itemManager?i.itemManager.terminals.some(l=>l.type==="keycard_reader"&&l.isOccupied):!1,o=t.position.distanceTo(e);return[{label:"Install an AND Gate (7408) or pickup Keycard [G]",done:s||i&&i.itemManager&&(i.itemManager.heldItem!==null||a)},{label:"Unlock Blast Door (via Radio/Light circuit OR Keycard Reader)",done:r},{label:"Pilot Flux through into the Energy Core",done:o<2.4}]}},{id:"mission_3",number:"03",title:"Mechanical Memory",subtitle:"Sequential Logic & The RS Flip-Flop",concept:"Bistable Multivibrators (State Memory)",summary:"Combinational gates have no memory: as soon as a bumper lets go, the signal is lost. To patrol between two barriers without oscillating endlessly, you need a memory unit!",instructions:["Spawn an RS Flip-Flop (74279)","Wire BUMP NORTH to the SET pin","Wire BUMP SOUTH to the RESET pin","Wire output Q to THRUST SOUTH and !Q to THRUST NORTH","Watch Flux cruise North, hit the wall, flip state, and cruise South!"],theory:"Computers cannot calculate without memory. An RS-Latch stores 1 bit of information using feedback loops. When SET pulses, it latches Q=1 indefinitely until RESET clears it back to 0.",robotSpawn:{x:-6,z:12},targetPos:{x:-6,z:-14},obstacles:[{x:-11,z:0,w:1.2,h:2.2,d:32},{x:-1,z:0,w:1.2,h:2.2,d:32},{x:-6,z:-18,w:9,h:2.2,d:1.2}],checkObjectives(n,t,e){const i=Array.from(n.chips.values()).some(a=>a.type==="RS_LATCH"),s=n.actuators.thrust_n||n.actuators.thrust_s,r=t.position.distanceTo(e);return[{label:"Install an RS Flip-Flop memory chip (74279)",done:i},{label:"Wire latch to establish North/South patrol state",done:i&&s},{label:"Reach the end of the patrol corridor",done:r<2.4}]}},{id:"mission_4",number:"04",title:"The AI Co-Processor",subtitle:"Hybrid Architecture: Autopilot + Discrete Override",concept:"Supervisory Control & Arbitration",summary:"High-level AI pathfinding is powerful, but unpredictable around hazards. Connect the CORTEX-1 AI chip, but wire discrete logic gates to override it when danger strikes!",instructions:["Place the CORTEX-1 AI chip","Connect its navigation outputs to thrusters (or mix through OR gates)","Wire bumper signals into the OVERRIDE pin or directly to reverse thrusters"],theory:"Modern autonomous systems (like the Mars Rovers and self-driving cars) use hierarchical control: neural/heuristic algorithms plan global paths, while discrete hardware safety interlocks guarantee collision avoidance.",robotSpawn:{x:-16,z:16},targetPos:{x:16,z:-16},obstacles:[{x:-8,z:6,w:4,h:2.4,d:4},{x:4,z:4,w:4,h:2.4,d:4},{x:-2,z:-8,w:5,h:2.4,d:3},{x:8,z:-6,w:3,h:2.4,d:6}],checkObjectives(n,t,e){const i=Array.from(n.chips.values()).some(r=>r.type==="CORTEX_AI"),s=t.position.distanceTo(e);return[{label:"Install CORTEX-1 AI Autopilot chip",done:i},{label:"Navigate through the obstacle chamber to the Core",done:s<2.4}]}},{id:"mission_5",number:"05",title:"The Reactor Fuel Ferry",subtitle:"Robotic Manipulation & Material Handling",concept:"Closed-Loop Tactile Control",summary:"The auxiliary reactor in Sector 4 has suffered a core meltdown! The primary power grid is down. Navigate through the industrial warehouse aisles, locate the Sub-Zero Plasma Power Cell, clamp your pincers onto it, and insert it into the Generator Receptacle to restore auxiliary power!",instructions:["Steer Flux toward the glowing Plasma Power Cell at [-12, 10]","Press [G] or wire ITEM CONTACT -> GRABBER CLAW on the motherboard to clamp claws shut","Navigate through the warehouse coolant pylons with the cell securely held","Release [G] in front of the Generator Receptacle at [12, -10] to dock the cell and energize the grid!","Once energized, reach the Extraction Terminal"],theory:"In industrial robotics, Automated Guided Vehicles (AGVs) use tactile feedback sensors to confirm grip stability before initiating transport. Wiring ITEM CONTACT to latching logic guarantees an item is not dropped during high-acceleration turns.",robotSpawn:{x:-16,z:16},targetPos:{x:16,z:-16},items:[{id:"reactor_power_cell",type:"power_cell",color:1096065,label:"High-Yield Plasma Cell",x:-12,z:10}],terminals:[{id:"reactor_socket",type:"power_socket",label:"Primary Reactor Receptacle",x:12,z:-10}],obstacles:[{x:-4,z:8,w:3,h:2.4,d:8},{x:4,z:-8,w:3,h:2.4,d:8},{x:0,z:0,w:10,h:2.4,d:3}],checkObjectives(n,t,e,i){const s=t.position.distanceTo(e),r=i&&i.itemManager?i.itemManager.terminals.some(o=>o.id==="reactor_socket"&&o.isOccupied):!1;return[{label:"Retrieve and clamp onto the Plasma Power Cell [G]",done:(i&&i.itemManager?i.itemManager.heldItem!==null:!1)||r},{label:"Dock the Power Cell into the Primary Reactor Receptacle",done:r},{label:"Proceed through the energized gate to the Core",done:r&&s<2.4}]}},{id:"mission_6",number:"06",title:"The Logic Interlock",subtitle:"Exclusive-OR & Dual Sensor Parity",concept:"XOR Logic & Interlock Safety Systems",summary:"A high-pressure containment chamber lies ahead. Safety protocol enforces strict mutual exclusion: the airlock will only grant authorization when exactly ONE sensor condition is active (A XOR B). If neither or both are triggered, the chamber seals!",instructions:["Drop an XOR Gate (7486) onto the motherboard","Connect RADAR BEACON (Proximity) to Input A","Connect 1Hz CLOCK (or Bumper North) to Input B","Wire the XOR output to RADIO PING or HEADLIGHT to trigger the authorization receiver","Pilot Flux through the pressure airlock to the target core"],theory:"The Exclusive-OR (XOR) gate performs modulo-2 addition. It outputs 1 if and only if its inputs are strictly different (0 & 1, or 1 & 0). In computing, XOR is the fundamental arithmetic engine of half-adders, full-adders, and cryptographic ciphers.",robotSpawn:{x:0,z:16},targetPos:{x:0,z:-16},hasBlastDoor:!0,obstacles:[{x:-14,z:0,w:18,h:2.4,d:1.4,color:1976635},{x:14,z:0,w:18,h:2.4,d:1.4,color:1976635}],checkObjectives(n,t,e,i){const s=Array.from(n.chips.values()).some(o=>o.type==="XOR"),r=i?i.isBlastDoorOpen:!1,a=t.position.distanceTo(e);return[{label:"Install an XOR Gate (7486)",done:s},{label:"Create an Exclusive-OR trigger to unlock the Blast Door",done:r},{label:"Navigate through the pressure airlock to the Core",done:a<2.4}]}},{id:"mission_7",number:"07",title:"The Silicon Forge",subtitle:"Custom IC Fabrication & Abstraction",concept:"Modular Silicon Packaging (VLSI)",summary:"Complex robots require hundreds of gates. Laying out raw gates on a single motherboard becomes unmanageable. Build a sub-circuit on the board, package it into a reusable silicon microchip using the 🔥 BURN TO CHIP Innovation Lab, and deploy your custom IC!",instructions:["Wire any combination of gates on the motherboard (e.g. reflex logic, latch, or inverter)","Click the 🔥 BURN TO CHIP button in the top toolbar",'Assign an IC Name and Part Code, and click "FABRICATE SILICON CHIP"',"Clear the motherboard and deploy your new custom IC from the Component Tray!","Reach the goal terminal with your custom silicon running"],theory:"Very-Large-Scale Integration (VLSI) allows millions of transistors to be consolidated into a single silicon package. Hardware abstraction enables engineers to build complex computers by composing modular chips without recalculating gate-level physics at every step.",robotSpawn:{x:-16,z:16},targetPos:{x:16,z:-16},obstacles:[{x:-6,z:6,w:4,h:2.2,d:4},{x:6,z:-6,w:4,h:2.2,d:4},{x:0,z:0,w:5,h:2.2,d:5}],checkObjectives(n,t,e){const i=Array.from(n.chips.values()).some(r=>r.type.startsWith("CUSTOM_")),s=t.position.distanceTo(e);return[{label:"Burn a circuit and install a custom microchip on the motherboard",done:i},{label:"Pilot Flux across the obstacle course to the terminal",done:s<2.4}]}},{id:"mission_8",number:"08",title:"Free Engineering Sandbox",subtitle:"Innovation Bay & Open Testing",concept:"Unrestricted Experimentation",summary:"All tools, chips, and telemetry unlocked. Design custom state machines, timers, oscillating clocks, and dual-mode autonomous robots.",instructions:["Build whatever complex logic systems you can imagine","Use the 🔥 BURN TO CHIP button to package your custom inventions into silicon!","Test Flux's Grabber Claws: Clamp onto the Power Cell or Keycard with [G] (or wire GRABBER on motherboard)","Carry items across the arena and dock them into the Generator Socket or Keycard Reader!"],theory:"Every modern microprocessor, from the Apollo Guidance Computer to a modern multi-core CPU, is built from these exact foundational gates.",robotSpawn:{x:-18,z:18},targetPos:{x:18,z:-18},items:[{id:"sandbox_power_cell",type:"power_cell",color:1096065,label:"Sub-Zero Power Cell",x:-8,z:8},{id:"sandbox_keycard",type:"keycard",color:11032055,label:"Master Keycard",x:8,z:8}],terminals:[{id:"sandbox_power_socket",type:"power_socket",label:"Auxiliary Generator Receptacle",x:-8,z:-8},{id:"sandbox_keycard_reader",type:"keycard_reader",label:"Security Console Reader",x:8,z:-8}],obstacles:[{x:-14,z:0,w:18,h:2.2,d:1.4},{x:14,z:0,w:18,h:2.2,d:1.4},{x:-10,z:-12,w:3.5,h:2.4,d:3.5},{x:10,z:12,w:3.5,h:2.4,d:3.5}],checkObjectives(n,t,e,i){const s=t.position.distanceTo(e),r=i&&i.itemManager?i.itemManager.terminals.some(a=>a.isOccupied):!1;return[{label:"Experiment with logic chips, timers, and custom ICs",done:n.chips.size>0||n.wires.length>0},{label:"Grab an item and dock into a socket terminal [G]",done:r},{label:"Energy terminal is active for docking",done:s<2.4}]}}];class vm{constructor(t,e,i,s){this.container=t,this.worldScene=e,this.engine=i,this.ui=s,this.currentMissionIndex=0,this.missionStates=pi.map(()=>({completed:!1,objectivesDone:[]})),this.onStateChange=null,this.buildDOM(),this.bindEvents(),this.loadMission(0)}restoreProgress(t){t&&(typeof t.currentMissionIndex=="number"&&t.currentMissionIndex>=0&&t.currentMissionIndex<pi.length&&(this.currentMissionIndex=t.currentMissionIndex),Array.isArray(t.missionStates)&&t.missionStates.forEach((e,i)=>{this.missionStates[i]&&(this.missionStates[i].completed=!!e.completed)}),this.loadMission(this.currentMissionIndex))}getCurrentMission(){return pi[this.currentMissionIndex]}buildDOM(){this.hudEl=document.getElementById("hud-card-mission")||this.container;const t=document.createElement("div");t.className="codex-modal",t.innerHTML=`
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
    `,document.body.appendChild(t),this.codexEl=t}bindEvents(){this.hudEl.querySelector("#mission-prev-btn").addEventListener("click",()=>{this.currentMissionIndex>0&&this.loadMission(this.currentMissionIndex-1)}),this.hudEl.querySelector("#mission-next-btn").addEventListener("click",()=>{this.currentMissionIndex<pi.length-1&&this.loadMission(this.currentMissionIndex+1)}),this.hudEl.querySelector("#m-continue-btn").addEventListener("click",()=>{this.currentMissionIndex<pi.length-1?this.loadMission(this.currentMissionIndex+1):this.loadMission(0)}),this.hudEl.querySelector("#mission-codex-btn").addEventListener("click",()=>this.openCodex());const e=document.getElementById("mission-toggle-btn");e&&e.addEventListener("click",()=>{const i=document.getElementById("hud-card-objectives");if(i){i.classList.toggle("hidden");const s=i.classList.contains("hidden");e.textContent=s?"+":"−",e.title=s?"Expand Objectives":"Minimize Objectives",K.playRelayClick()}}),this.codexEl.querySelector("#codex-close").addEventListener("click",()=>this.closeCodex()),this.codexEl.querySelector(".codex-backdrop").addEventListener("click",()=>this.closeCodex())}loadMission(t){this.currentMissionIndex=t;const e=pi[t];K.init();const i=String(pi.length).padStart(2,"0");this.hudEl.querySelector("#m-number").textContent=`MISSION ${e.number} / ${i}`,this.hudEl.querySelector("#m-title").textContent=e.title,this.hudEl.querySelector("#m-concept").textContent=`Concept: ${e.concept}`;const s=this.hudEl.querySelector("#mission-prev-btn"),r=this.hudEl.querySelector("#mission-next-btn");s.disabled=t===0,r.disabled=t===pi.length-1;const a=this.hudEl.querySelector("#m-continue-btn");t===pi.length-1?a.textContent="RESTART CAMPAIGN ↺":a.textContent="NEXT LEVEL >>",this.hudEl.querySelector("#m-complete-card").classList.remove("show");const o=document.getElementById("start-game-btn");o&&(t===0?o.classList.remove("hidden"):o.classList.add("hidden")),this.worldScene.setupMissionArena?this.worldScene.setupMissionArena(e):(e.robotSpawn&&this.worldScene.robot.reset(e.robotSpawn.x,e.robotSpawn.z),e.targetPos&&this.worldScene.target.set(e.targetPos.x,.5,e.targetPos.z)),this.renderObjectives(),K.playRelayClick(),this.onStateChange&&this.onStateChange()}renderObjectives(){const e=this.getCurrentMission().checkObjectives(this.engine,this.worldScene.robot,this.worldScene.target,this.worldScene),i=document.getElementById("m-objectives-list");i&&(i.innerHTML=e.map((s,r)=>`
      <div class="objective-item ${s.done?"is-done":""}">
        <span class="obj-check">${s.done?"✓":"○"}</span>
        <span class="obj-label">${s.label}</span>
      </div>
    `).join(""))}update(){const e=this.getCurrentMission().checkObjectives(this.engine,this.worldScene.robot,this.worldScene.target,this.worldScene),i=document.getElementById("m-objectives-list");if(!i)return;const s=i.querySelectorAll(".objective-item");if(s.length!==e.length){this.renderObjectives();return}let r=!0;e.forEach((o,l)=>{if(s[l]){const c=s[l].classList.contains("is-done");o.done&&!c?(s[l].classList.add("is-done"),s[l].querySelector(".obj-check").textContent="✓",K.playGoalChime()):!o.done&&c&&(s[l].classList.remove("is-done"),s[l].querySelector(".obj-check").textContent="○")}o.done||(r=!1)});const a=this.hudEl.querySelector("#m-complete-card");r&&!this.missionStates[this.currentMissionIndex].completed?(this.missionStates[this.currentMissionIndex].completed=!0,a.classList.add("show"),K.playGoalChime(),this.onStateChange&&this.onStateChange()):!r&&this.missionStates[this.currentMissionIndex].completed&&(this.missionStates[this.currentMissionIndex].completed=!1,a.classList.remove("show"),this.onStateChange&&this.onStateChange())}openCodex(){const t=this.getCurrentMission();this.codexEl.querySelector("#codex-title").textContent=`MISSION ${t.number}: ${t.title.toUpperCase()}`,this.codexEl.querySelector("#codex-summary").textContent=t.summary,this.codexEl.querySelector("#codex-theory").textContent=t.theory;const e=this.codexEl.querySelector("#codex-instructions");e.innerHTML=t.instructions.map(i=>`<li>${i}</li>`).join(""),this.codexEl.classList.add("active"),K.playRelayClick()}closeCodex(){this.codexEl.classList.remove("active"),K.playWireCut()}}class xm{constructor(){this.modalEl=null,this.buildDOM(),this.bindEvents()}buildDOM(){const t=document.createElement("div");t.className="manual-modal",t.id="manual-modal",t.innerHTML=`
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
    `,document.body.appendChild(t),this.modalEl=t}bindEvents(){const t=this.modalEl.querySelector("#manual-close-btn"),e=this.modalEl.querySelector(".manual-backdrop");t.addEventListener("click",()=>this.close()),e.addEventListener("click",()=>this.close());const i=this.modalEl.querySelectorAll(".manual-tab-btn"),s=this.modalEl.querySelectorAll(".manual-tab-content");i.forEach(r=>{r.addEventListener("click",()=>{const a=r.dataset.tab;i.forEach(l=>l.classList.remove("active")),s.forEach(l=>l.classList.remove("active")),r.classList.add("active");const o=this.modalEl.querySelector(`#${a}`);o&&o.classList.add("active"),K.playRelayClick()})}),window.addEventListener("keydown",r=>{r.target.tagName==="INPUT"||r.target.tagName==="TEXTAREA"||(r.key==="h"||r.key==="H"||r.key==="?")&&(this.modalEl.classList.contains("active")?this.close():this.open())})}open(){this.modalEl.classList.add("active"),K.playRelayClick()}close(){this.modalEl.classList.remove("active"),K.playWireCut()}}class ym{constructor(t,e){this.container=t,this.scene=e,this.visible=!1,this.isMaximized=!1,this.zoom=1,this.sweepAngle=0,this.lastSweepAngle=0,this.pingRippleRadius=0,this.isPinging=!1,this.lastAudioPingTime=0,this.contactFlash=new Map,this.buildUI(),this.bindEvents()}buildUI(){this.panel=document.createElement("div"),this.panel.id="tactical-radar-panel",this.panel.className="tactical-radar-panel hidden",this.panel.innerHTML=`
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
    `,this.container.appendChild(this.panel),this.canvas=this.panel.querySelector("#radar-canvas"),this.ctx=this.canvas.getContext("2d"),this.contactsReadout=this.panel.querySelector("#radar-contacts-readout"),this.depthReadout=this.panel.querySelector("#radar-depth-readout"),this.zoomBtn=this.panel.querySelector("#radar-zoom-btn"),this.pingBtn=this.panel.querySelector("#radar-ping-btn"),this.expandBtn=this.panel.querySelector("#radar-expand-btn"),this.closeBtn=this.panel.querySelector("#radar-close-btn")}bindEvents(){this.zoomBtn.addEventListener("click",t=>{t.stopPropagation(),this.zoom=this.zoom===1?2:1,this.zoomBtn.textContent=`${this.zoom}X`,K.playRelayClick()}),this.pingBtn.addEventListener("click",t=>{t.stopPropagation(),this.triggerActivePing()}),this.expandBtn.addEventListener("click",t=>{t.stopPropagation(),this.isMaximized=!this.isMaximized,this.isMaximized?this.panel.classList.add("maximized"):this.panel.classList.remove("maximized"),K.playRelayClick()}),this.closeBtn.addEventListener("click",t=>{t.stopPropagation(),this.hide()})}show(){this.visible=!0,this.panel.classList.remove("hidden"),document.querySelectorAll("#fleet-radar-toggle, #cam-radar-toggle").forEach(t=>t.classList.add("active"))}hide(){this.visible=!1,this.panel.classList.add("hidden"),document.querySelectorAll("#fleet-radar-toggle, #cam-radar-toggle").forEach(t=>t.classList.remove("active"))}toggle(){this.visible?this.hide():(this.show(),this.triggerActivePing())}enableVoidMode(t){if(t){this.isVoidMode=!0,this.show(),this.panel.classList.add("void-mode");const e=this.panel.querySelector("#radar-title-text");e&&(e.textContent="📡 TACTICAL CRT RADAR // SUB-LEVEL 4 DATA VOID // ZERO VISIBILITY")}else{this.isVoidMode=!1,this.panel.classList.remove("void-mode");const e=this.panel.querySelector("#radar-title-text");e&&(e.textContent="📡 TACTICAL CRT RADAR // 360° SWEEP")}}triggerActivePing(){this.isPinging=!0,this.pingRippleRadius=0,K.playRadarPing(1600);for(const[t]of this.contactFlash.entries())this.contactFlash.set(t,1)}update(t){if(this.visible){this.lastSweepAngle=this.sweepAngle,this.sweepAngle=(this.sweepAngle+t*2.2)%(Math.PI*2),this.isPinging&&(this.pingRippleRadius+=t*32,this.pingRippleRadius>35&&(this.isPinging=!1));for(const[e,i]of this.contactFlash.entries()){const s=Math.max(.18,i-t*.8);this.contactFlash.set(e,s)}this.render()}}render(){const t=this.ctx,e=this.canvas.width,i=this.canvas.height,s=e/2,r=i/2,a=e*.45;t.clearRect(0,0,e,i),t.save(),t.beginPath(),t.arc(s,r,a,0,Math.PI*2),t.fillStyle="#02160a",t.fill(),t.strokeStyle="#15803d",t.lineWidth=3,t.stroke(),t.clip();const o=26/this.zoom,l=g=>g/o*a,c=(g,y)=>({x:s+l(g),y:r+l(y)}),h=[6,12,18,24];t.lineWidth=1,h.forEach(g=>{const y=l(g);y<=a&&(t.beginPath(),t.arc(s,r,y,0,Math.PI*2),t.strokeStyle="rgba(34, 197, 94, 0.22)",t.stroke(),t.fillStyle="rgba(74, 222, 128, 0.5)",t.font='bold 16px "JetBrains Mono", monospace',t.fillText(`${g}m`,s+y+4,r-4))}),t.beginPath(),t.moveTo(s,r-a),t.lineTo(s,r+a),t.moveTo(s-a,r),t.lineTo(s+a,r),t.strokeStyle="rgba(34, 197, 94, 0.25)",t.stroke(),t.fillStyle="#4ade80",t.font='bold 18px "JetBrains Mono", monospace',t.textAlign="center",t.textBaseline="middle",t.fillText("000° [N]",s,r-a+22),t.fillText("090° [E]",s+a-38,r),t.fillText("180° [S]",s,r+a-22),t.fillText("270° [W]",s-a+38,r);const p=c(-24,-24),u=c(24,24);t.strokeStyle="rgba(34, 197, 94, 0.35)",t.lineWidth=2,t.strokeRect(p.x,p.y,u.x-p.x,u.y-p.y);const f=this.scene.currentFloor||1,x=this.scene.obstacles||[];t.fillStyle="rgba(21, 128, 61, 0.25)",t.strokeStyle="rgba(74, 222, 128, 0.45)",t.lineWidth=1.5;for(const g of x)if(g.minX!==void 0&&g.minZ!==void 0){const y=c(g.minX,g.minZ),A=c(g.maxX,g.maxZ),P=A.x-y.x,U=A.y-y.y;t.fillRect(y.x,y.y,P,U),t.strokeRect(y.x,y.y,P,U)}const v=c(18,14),m=l(5);t.strokeStyle="#0ea5e9",t.lineWidth=2,t.strokeRect(v.x-m/2,v.y-m/2,m,m),t.beginPath(),t.arc(v.x,v.y,m*.7,0,Math.PI*2),t.strokeStyle="rgba(14, 165, 233, 0.4)",t.stroke(),t.fillStyle="#38bdf8",t.font='bold 15px "JetBrains Mono", monospace',t.textAlign="left",t.fillText("🛗 SHAFT DOCK",v.x+m/2+6,v.y+4);const d=.65,S=t.createConicGradient(this.sweepAngle+Math.PI/2,s,r);if(S.addColorStop(0,"rgba(74, 222, 128, 0.45)"),S.addColorStop(d/(Math.PI*2),"rgba(21, 128, 61, 0.0)"),S.addColorStop(1,"rgba(21, 128, 61, 0.0)"),t.save(),t.beginPath(),t.moveTo(s,r),t.arc(s,r,a,this.sweepAngle-d,this.sweepAngle),t.closePath(),t.fillStyle="rgba(34, 197, 94, 0.22)",t.fill(),t.beginPath(),t.moveTo(s,r),t.lineTo(s+Math.cos(this.sweepAngle-Math.PI/2)*a,r+Math.sin(this.sweepAngle-Math.PI/2)*a),t.strokeStyle="#86efac",t.lineWidth=2.5,t.stroke(),t.restore(),this.isPinging){const g=l(this.pingRippleRadius),y=Math.max(0,1-this.pingRippleRadius/35);t.beginPath(),t.arc(s,r,g,0,Math.PI*2),t.strokeStyle=`rgba(134, 239, 172, ${y})`,t.lineWidth=3.5,t.stroke()}let E=0,_=0,D=0;const R=(g,y,A)=>{const P=(Math.atan2(g,-y)+Math.PI*2)%(Math.PI*2);let U=this.sweepAngle-P;if(U<0&&(U+=Math.PI*2),U<.14&&(!this.contactFlash.has(A)||this.contactFlash.get(A)<.6)){this.contactFlash.set(A,1);const q=performance.now();q-this.lastAudioPingTime>180&&(K.playRadarPing(1300),this.lastAudioPingTime=q)}return this.contactFlash.get(A)||.25},L=this.scene.itemManager&&this.scene.itemManager.items||[];for(const g of L){if(g.type!=="raw_ore"&&g.type!=="rare_earth_asteroid"&&g.type!=="battery"&&g.type!=="keycard")continue;const y=g.mesh?g.mesh.position:g.position;if(!y)continue;const A=y.y!==void 0?y.y:g.baseY||.28;if(!(f===4&&A<-42||f===3&&A>=-42&&A<-25||f===2&&A>=-25&&A<-5||f===1&&A>=-5))continue;_++;const U=g.id||`ore_${Math.round(y.x)}_${Math.round(y.z)}`,q=R(y.x,y.z,U),B=c(y.x,y.z),Y=g.isHeavyRareEarth||(g.value||0)>=3e3,H=!Y&&((g.value||0)>=800||g.label&&g.label.includes("Quantum")),nt=Y?"#00ffff":H?"#ec4899":"#06b6d4";t.save(),t.translate(B.x,B.y),t.globalAlpha=Math.min(1,q+.35),Y?(t.beginPath(),t.arc(0,0,11,0,Math.PI*2),t.strokeStyle="#f59e0b",t.lineWidth=2,t.stroke(),t.beginPath(),t.moveTo(0,-9),t.lineTo(9,0),t.lineTo(0,9),t.lineTo(-9,0),t.closePath(),t.fillStyle="#00f0ff",t.fill(),t.strokeStyle="#ffffff",t.lineWidth=2,t.stroke(),t.fillStyle="#fbbf24",t.font='bold 13px "JetBrains Mono", monospace',t.fillText(`💎 RARE EARTH (+${g.value||5e3}CR) [HEAVY]`,15,4)):(t.beginPath(),t.moveTo(0,-7),t.lineTo(7,0),t.lineTo(0,7),t.lineTo(-7,0),t.closePath(),t.fillStyle=nt,t.fill(),t.strokeStyle="#ffffff",t.lineWidth=1.5,t.stroke(),t.fillStyle=nt,t.font='bold 13px "JetBrains Mono", monospace',t.fillText(`+${g.value||100}CR`,10,4)),t.restore()}const I=this.scene.glitches||[];if(f===3)for(const g of I){D++;const y=g.id,A=R(g.x,g.z,y),P=c(g.x,g.z);t.save(),t.translate(P.x,P.y),t.globalAlpha=Math.min(1,A+.4),t.beginPath(),t.moveTo(0,-9),t.lineTo(9,7),t.lineTo(-9,7),t.closePath(),t.fillStyle="#ef4444",t.fill(),t.strokeStyle="#fca5a5",t.lineWidth=1.5,t.stroke();const U=10+Math.sin(Date.now()*.008)*4;t.beginPath(),t.arc(0,0,U,0,Math.PI*2),t.strokeStyle="rgba(239, 68, 68, 0.4)",t.stroke(),t.fillStyle="#f87171",t.font='bold 12px "JetBrains Mono", monospace',t.fillText("⚠️ GLITCH",12,4),t.restore()}const b=this.scene.deployedRobots||[];for(const g of b){const y=g.position;if(!y)continue;const A=y.y!==void 0?y.y:.4;if(!(f===4&&A<-42||f===3&&A>=-42&&A<-25||f===2&&A>=-25&&A<-5||f===1&&A>=-5))continue;E++;const U=g.id,q=R(y.x,y.z,U),B=c(y.x,y.z);let Y=0;g.velocity&&g.velocity.lengthSq()>.01&&(Y=Math.atan2(g.velocity.x,g.velocity.z));const H=(g.empStunTimer||0)>0,ct=H?"#ef4444":{flux:"#00f0ff",sparky:"#00f0ff",checkers:"#f97316",scanners:"#10b981",tank:"#facc15"}[g.id]||"#22c55e";t.save(),t.translate(B.x,B.y),t.globalAlpha=Math.min(1,q+.4),t.rotate(Y),t.beginPath(),t.moveTo(0,11),t.lineTo(-8,-9),t.lineTo(0,-4),t.lineTo(8,-9),t.closePath(),t.fillStyle=ct,t.fill(),t.strokeStyle="#ffffff",t.lineWidth=1.8,t.stroke(),t.rotate(-Y),t.fillStyle=ct,t.font='bold 14px "JetBrains Mono", monospace',t.textAlign="left";const bt=H?"⚠️ EMP STUN":g.heldItem?"📦 CARRYING":"⚡ AUTO";t.fillText(`${g.name.toUpperCase()} [${bt}]`,12,-4),t.fillStyle="rgba(134, 239, 172, 0.7)",t.font='11px "JetBrains Mono", monospace',t.fillText(`X:${y.x.toFixed(1)} Z:${y.z.toFixed(1)}`,12,10),t.restore()}if(t.restore(),t.beginPath(),t.arc(s,r,a,0,Math.PI*2),t.strokeStyle="#22c55e",t.lineWidth=5,t.stroke(),this.contactsReadout&&(this.contactsReadout.textContent=`CONTACTS: ${E} BOTS | ${_} ORES | ${D} HAZARDS`),this.depthReadout){const g=f===4?"-54.0m (DEEP VOID)":f===3?"-36.0m (DATA CORE)":f===2?"-18.0m (QUARRY)":"0.0m (LABS)";this.depthReadout.textContent=`DEPTH: ${g}`}}}const Os="logicforge_v2_savegame",Us="logicforge_v2_campaign";class Te{static hasCampaignSave(){try{if(localStorage.getItem(Us))return!0;const t=localStorage.getItem(Os);if(t){const e=JSON.parse(t);return!!(e&&(e.gameMode==="campaign"||e.campaign&&e.campaign.currentMissionIndex>0||e.economy&&e.economy.credits>0))}return!1}catch{return!1}}static loadCampaignSave(){try{const t=localStorage.getItem(Us);if(t)return JSON.parse(t);const e=this.loadSave();return e&&(e.gameMode==="campaign"||e.economy&&e.economy.credits>0||e.campaign&&e.campaign.currentMissionIndex>0)?(this.writeCampaignSave(e),e):null}catch(t){return console.warn("LogicForge: Failed to read campaign save:",t),null}}static writeCampaignSave(t){try{localStorage.setItem(Us,JSON.stringify(t))}catch(e){console.warn("LogicForge: Failed to write campaign save:",e)}}static clearCampaignSave(){try{localStorage.removeItem(Us)}catch(t){console.warn("LogicForge: Failed to clear campaign save:",t)}}static loadSave(){try{const t=localStorage.getItem(Os);return t?JSON.parse(t):null}catch(t){return console.warn("LogicForge: Failed to read savegame from localStorage:",t),null}}static writeSave(t){try{localStorage.setItem(Os,JSON.stringify(t))}catch(e){console.warn("LogicForge: Failed to write savegame to localStorage:",e)}}static clearSave(){try{localStorage.removeItem(Os)}catch(t){console.warn("LogicForge: Failed to clear savegame from localStorage:",t)}}static serializeEngine(t){if(!t)return null;const e=[];for(const[s,r]of t.chips.entries())e.push({id:r.id,type:r.type,x:r.x,y:r.y,state:r.state?JSON.parse(JSON.stringify(r.state)):{}});const i=t.wires.map(s=>({from:{type:s.from.type,id:s.from.id,pin:s.from.pin},to:{type:s.to.type,id:s.to.id,pin:s.to.pin}}));return{chips:e,wires:i}}static deserializeEngine(t,e){if(!t||!e||!Array.isArray(e.chips)||!Array.isArray(e.wires))return!1;t.clear();const i=new Map;return e.chips.forEach(s=>{if(!Oe[s.type])return;const r=t.addChip(s.type,s.x,s.y);r&&(i.set(s.id,r.id),s.state&&(r.state=JSON.parse(JSON.stringify(s.state))))}),e.wires.forEach(s=>{const r={...s.from},a={...s.to};r.type==="chip"&&i.has(r.id)&&(r.id=i.get(r.id)),a.type==="chip"&&i.has(a.id)&&(a.id=i.get(a.id)),t.addWire(r,a)}),!0}}window.addEventListener("DOMContentLoaded",()=>{const n={flux:new ls,checkers:new ls,scanners:new ls,tank:new ls};n.sparky=n.flux;let t=n.flux;const e=document.getElementById("world-container"),i=new mm(e),s=document.getElementById("motherboard-container"),r=new Ul(s,t);window.motherboardUI=r,window.activeEngine=t,window.robotEngines=n,window.worldScene=i;const a=new gm(t,r);window.chipBurner=a;const o=document.getElementById("world-pane"),l=new vm(o,i,t,r),c={AND:{name:"AND Gate",code:"7408",icon:"🔲",cost:0,desc:"Quad 2-Input AND gate. Outputs 1 only when both inputs are 1."},OR:{name:"OR Gate",code:"7432",icon:"🔲",cost:0,desc:"Quad 2-Input OR gate. Outputs 1 when at least one input is 1."},NOT:{name:"Hex Inverter",code:"7404",icon:"🔲",cost:0,desc:"Hex Inverter / NOT gate. Inverts incoming logic signals."},XOR:{name:"XOR Gate",code:"7486",icon:"🔲",cost:0,desc:"Quad 2-Input Exclusive-OR gate. Outputs 1 when inputs differ."},NAND:{name:"NAND Gate",code:"7400",icon:"🔲",cost:0,desc:"Quad 2-Input NAND gate. Universal inverted AND building block."},NOR:{name:"NOR Gate",code:"7402",icon:"🔲",cost:0,desc:"Quad 2-Input NOR gate. Universal inverted OR building block."},RS_LATCH:{name:"Quad S-R Latch",code:"74279",icon:"🔒",cost:0,desc:"Set-Reset 1-bit latch. Stores binary state across clock cycles."},TIMER_555:{name:"555 Precision Timer",code:"NE555",icon:"⏱️",cost:150,desc:"Generates calibrated clock pulses and timing oscillations."},COUNTER_7SEG:{name:"7-Segment Decade Counter",code:"74160-LED",icon:"🔢",cost:200,desc:"Decade counter with emerald LED readout and BCD output lines."},STEPPER:{name:"4-Step Ring Sequencer",code:"4017-SEQ",icon:"🔄",cost:250,desc:"Cycles sequentially through 4 output phases on incoming clock pulses."},SHIFT_REG:{name:"4-Bit Shift Register",code:"74194-SR",icon:"↔️",cost:250,desc:"Bidirectional shift register for serial and parallel data streams."},BUS_2CH:{name:"2-Channel Terminal Strip",code:"TB-2CH",icon:"🔀",cost:80,desc:"Splits 1 input wire signal into 2 parallel branch lines."},BUS_3CH:{name:"3-Channel Terminal Strip",code:"TB-3CH",icon:"🔀",cost:100,desc:"Splits 1 input wire signal into 3 parallel branch lines."},BUS_4CH:{name:"4-Channel Terminal Strip",code:"TB-4CH",icon:"🔀",cost:120,desc:"Splits 1 input wire signal into 4 parallel branch lines."},WAYPOINT_MEM:{name:"Waypoint Memory Register",code:"74374-MEM",icon:"📍",cost:350,desc:"Latches world coordinates and computes directional navigation vectors."},POWER:{name:"+5V DC Power Rail",code:"PWR-5V",icon:"⚡",cost:50,desc:"Continuous +5V DC logic HIGH reference rail."},GROUND:{name:"0V Common Ground",code:"GND-0V",icon:"⏚",cost:50,desc:"Continuous 0V DC logic LOW ground reference rail."},RESISTOR_220:{name:"220Ω Resistor",code:"R-220",icon:"⚡",cost:40,desc:"220Ω current limiting resistor for sensitive circuit pathways."},RESISTOR_330:{name:"330Ω Resistor",code:"R-330",icon:"⚡",cost:40,desc:"330Ω pull-down and current limiting resistor."},LED:{name:"5mm LED Indicator Lamp",code:"LED-5MM",icon:"💡",cost:60,desc:"High-brightness visual LED lamp indicator."},NPN:{name:"2N3904 NPN Transistor",code:"2N3904",icon:"🔌",cost:100,desc:"NPN bipolar junction transistor; switches load when base is HIGH."},PNP:{name:"2N3906 PNP Transistor",code:"2N3906",icon:"🔌",cost:100,desc:"PNP bipolar junction transistor; switches load when base is LOW."},POTENTIOMETER:{name:"10K Trimmer Potentiometer",code:"TRIM-10K",icon:"🎛️",cost:100,desc:"Adjustable voltage divider / analog reference control."},CAPACITOR:{name:"10µF Electrolytic Capacitor",code:"E-CAP-10uF",icon:"🔋",cost:80,desc:"Stores charge for delay timing circuits and transient smoothing."},PIEZO_BUZZER:{name:"8Ω Piezo Acoustic Speaker",code:"SPK-8OHM",icon:"🔊",cost:90,desc:"Acoustic transducer emitting audible alert frequencies."},CORTEX_AI:{name:"CORTEX-1 Neural Autopilot",code:"AUTOPILOT",icon:"🧠",cost:0,desc:"Autonomous neural autopilot module (Demo mode only)."}},h=["AND","OR","NOT","XOR","NAND","NOR","RS_LATCH"];let p="demo",u=new Set(h);const f=Te.loadCampaignSave()||Te.loadSave();if(f){f.customChips&&a.loadCustomChips(f.customChips),f.gameMode==="campaign"?p="campaign":p="demo",f.unlockedChips&&Array.isArray(f.unlockedChips)&&(u=new Set(f.unlockedChips)),f.economy&&i.restoreEconomy(f.economy),f.campaign&&l.restoreProgress(f.campaign);const T=f.circuits||{},F={flux:Le.cortex_hybrid,sparky:Le.cortex_hybrid,checkers:Le.checkers_hauler,scanners:Le.scanners_scout,tank:Le.tank_patrol};["flux","checkers","scanners","tank"].forEach(W=>{const it=T[W]||(W==="flux"?T.sparky:null),at=n[W];it&&Array.isArray(it.chips)&&it.chips.length>0?Te.deserializeEngine(at,it):p==="demo"&&F[W]&&F[W].load(at)})}else Le.cortex_hybrid.load(n.flux),Le.checkers_hauler.load(n.checkers),Le.scanners_scout.load(n.scanners),Le.tank_patrol.load(n.tank);let x=null;function v(){clearTimeout(x),x=setTimeout(()=>{var F,W,it,at,Tt;const T={version:2,savedAt:Date.now(),gameMode:p,unlockedChips:Array.from(u),campaign:{currentMissionIndex:l.currentMissionIndex,missionStates:l.missionStates.map(St=>({completed:!!St.completed}))},economy:{credits:i.credits,unlockedRobots:Array.from(i.unlockedRobots),robotEnergies:{flux:((F=i.robots.get("flux"))==null?void 0:F.energy)??100,sparky:((W=i.robots.get("flux"))==null?void 0:W.energy)??100,checkers:((it=i.robots.get("checkers"))==null?void 0:it.energy)??100,scanners:((at=i.robots.get("scanners"))==null?void 0:at.energy)??100,tank:((Tt=i.robots.get("tank"))==null?void 0:Tt.energy)??100}},circuits:{flux:Te.serializeEngine(n.flux),sparky:Te.serializeEngine(n.flux),checkers:Te.serializeEngine(n.checkers),scanners:Te.serializeEngine(n.scanners),tank:Te.serializeEngine(n.tank)},customChips:a.getCustomChipsData()};p==="campaign"&&Te.writeCampaignSave(T),Te.writeSave(T),Y()},400)}r.onCircuitChange=v,l.onStateChange=v,i.onEconomyChange=v,a.onChipFabricated=v,window.saveGame=v,window.resetCampaign=()=>{Te.clearSave(),window.location.reload()};const m=new xm,d=document.getElementById("theory-manual-btn");d&&d.addEventListener("click",()=>m.open()),r.renderChips(),r.renderWires();const S=document.getElementById("goal-banner");i.onGoalReached=()=>{S.classList.add("show"),setTimeout(()=>{S.classList.remove("show")},4e3)};const E=document.getElementById("split-container"),_=document.getElementById("splitter-handle"),D=document.getElementById("motherboard-pane");let R=!1;_.addEventListener("mousedown",T=>{T.preventDefault(),R=!0,_.classList.add("dragging"),document.body.style.cursor="col-resize"}),window.addEventListener("mousemove",T=>{if(!R)return;const F=E.getBoundingClientRect(),W=T.clientX-F.left,it=Math.max(25,Math.min(75,W/F.width*100));o.style.flex=`${it}`,D.style.flex=`${100-it}`,i.resize(),r.renderWires()}),window.addEventListener("mouseup",()=>{R&&(R=!1,_.classList.remove("dragging"),document.body.style.cursor="default",i.resize(),r.renderWires())}),window.addEventListener("resize",()=>{i.resize(),r.renderWires()}),document.getElementById("preset-selector").addEventListener("change",T=>{K.init();const F=T.target.value;Le[F]&&(Le[F].load(t),r.renderChips(),r.renderWires(),K.playRelayClick(),v())});const I=document.getElementById("mode-live-btn"),b=document.getElementById("mode-bench-btn");I.addEventListener("click",()=>{t.isBenchMode=!1,document.body.classList.remove("bench-mode"),I.classList.add("active"),b.classList.remove("active"),K.playRelayClick()}),b.addEventListener("click",()=>{t.isBenchMode=!0,document.body.classList.add("bench-mode"),b.classList.add("active"),I.classList.remove("active"),K.playRelayClick()}),document.getElementById("reset-bot-btn").addEventListener("click",()=>{i.resetRobot(),K.playRelayClick()});const y=document.getElementById("telemetry-bot"),A=document.getElementById("active-bot-tag");function P(){document.querySelectorAll(".fleet-tab").forEach(W=>{const it=W.dataset.bot,at=i.robots.get(it);if(!at)return;const Tt=i.unlockedRobots.has(it),St=it===i.activeRobotId;W.classList.toggle("active",St),W.classList.toggle("locked",!Tt);const mt=W.querySelector(".fleet-status");mt&&(St?mt.textContent="ACTIVE":Tt?mt.textContent="READY":mt.textContent=`${at.cost} CR`)});const F=i.robot;y&&F&&(y.textContent=`BOT: [${F.config.number}] ${F.name.toUpperCase()}`,y.style.color="#"+F.config.ringColor.toString(16).padStart(6,"0")),A&&F&&(A.textContent=`🧠 ${F.name.toUpperCase()} BRAIN`,A.style.borderColor="#"+F.config.accentColor.toString(16).padStart(6,"0"),A.style.color="#"+F.config.ringColor.toString(16).padStart(6,"0"))}function U(T){if(!i.unlockedRobots.has(T)){const F=i.robots.get(T);if(F&&i.credits>=F.cost){i.unlockRobot(T);const W=document.getElementById("goal-banner");W&&(W.textContent=`🎉 COMMISSIONED ${F.name.toUpperCase()} [${F.role.toUpperCase()}]!`,W.style.background="rgba(16, 185, 129, 0.25)",W.style.borderColor="#10b981",W.style.color="#10b981",W.classList.add("show"),setTimeout(()=>W.classList.remove("show"),3500))}else{K.playAccessDenied();const W=document.getElementById("goal-banner");W&&(W.textContent=`🔒 REQUIRES ${F?F.cost:0} CREDITS TO COMMISSION ${F?F.name.toUpperCase():T}`,W.style.background="rgba(239, 68, 68, 0.25)",W.style.borderColor="#ef4444",W.style.color="#ef4444",W.classList.add("show"),setTimeout(()=>W.classList.remove("show"),2500));return}}i.selectRobot(T),t=n[T],a.engine=t,l.engine=t,r.setEngine(t),t.isBenchMode?(document.body.classList.add("bench-mode"),b.classList.add("active"),I.classList.remove("active")):(document.body.classList.remove("bench-mode"),I.classList.add("active"),b.classList.remove("active")),K.playRelayClick(),P()}document.querySelectorAll(".fleet-tab").forEach(T=>{T.addEventListener("click",()=>{U(T.dataset.bot)})});const q=document.getElementById("fleet-sandbox-btn");q&&q.addEventListener("click",()=>{i.unlockAllRobots(),P();const T=document.getElementById("goal-banner");T&&(T.textContent="⚡ ALL 4 FLEET COMPANIONS DEPLOYED!",T.style.background="rgba(245, 158, 11, 0.25)",T.style.borderColor="#f59e0b",T.style.color="#fbbf24",T.classList.add("show"),setTimeout(()=>T.classList.remove("show"),3e3))}),P();function B(T){const F=r.chipsViewport||r.boardWrapper,W=F.clientWidth||700,it=F.clientHeight||450,at=Math.round((W/2-r.pan.x)/r.zoom-80+(Math.random()*40-20)),Tt=Math.round((it/2-r.pan.y)/r.zoom-60+(Math.random()*40-20)),St=t.addChip(T,at,Tt);return St&&(K.playChipDrop(),r.renderChips(),r.renderWires(),v()),St}function Y(){const T=document.getElementById("game-mode-badge"),F=document.getElementById("start-game-btn"),W=document.getElementById("continue-game-btn"),it=document.getElementById("sgm-continue-btn"),at=document.getElementById("demo-mode-btn"),Tt=document.querySelectorAll(".demo-only-chip"),St=document.getElementById("preset-select-wrapper"),mt=Te.hasCampaignSave();p==="campaign"?(T&&(T.className="game-mode-badge campaign",T.textContent="🎮 CAMPAIGN ACTIVE"),F&&F.classList.add("hidden"),W&&W.classList.add("hidden"),at&&at.classList.remove("hidden"),St&&St.classList.add("hidden"),Tt.forEach(Dt=>Dt.classList.add("campaign-hidden")),document.querySelectorAll(".tray-chip-btn").forEach(Dt=>{const Xt=Dt.dataset.type,Jt=Dt.querySelector(".tray-chip-cost");if(Jt&&Jt.remove(),Xt&&c[Xt])if(c[Xt].cost===0||u.has(Xt))Dt.classList.remove("chip-locked");else{const ft=document.createElement("span");ft.className="tray-chip-cost",ft.textContent=`🔒 ${c[Xt].cost} CR`,Dt.appendChild(ft),Dt.classList.add("chip-locked")}})):(T&&(T.className="game-mode-badge demo",T.textContent="📺 DEMO MODE"),at&&at.classList.add("hidden"),St&&St.classList.remove("hidden"),mt?(W&&W.classList.remove("hidden"),F&&(F.classList.remove("hidden"),F.textContent="🟢 NEW GAME",F.title="Start a fresh campaign from Mission 01"),it&&it.classList.remove("hidden")):(W&&W.classList.add("hidden"),F&&(F.classList.remove("hidden"),F.textContent="🟢 START GAME",F.title="Begin the LogicForge Campaign"),it&&it.classList.add("hidden")),Tt.forEach(Dt=>Dt.classList.remove("campaign-hidden")),document.querySelectorAll(".tray-chip-btn").forEach(Dt=>{const Xt=Dt.querySelector(".tray-chip-cost");Xt&&Xt.remove(),Dt.classList.remove("chip-locked")}))}let H=null;const nt=document.getElementById("chip-purchase-modal"),ct=document.getElementById("cpm-close-btn"),bt=document.getElementById("cpm-chip-icon"),Ut=document.getElementById("cpm-chip-name"),jt=document.getElementById("cpm-chip-code"),j=document.getElementById("cpm-chip-desc"),st=document.getElementById("cpm-chip-cost"),Et=document.getElementById("cpm-user-credits"),ot=document.getElementById("cpm-alert-msg"),Ct=document.getElementById("cpm-buy-btn");function Pt(T){const F=c[T];if(!F)return;H=T,bt&&(bt.textContent=F.icon||"🔲"),Ut&&(Ut.textContent=F.name.toUpperCase()),jt&&(jt.textContent=F.code),j&&(j.textContent=F.desc),st&&(st.textContent=`${F.cost} CR`),Et&&(Et.textContent=`${i.credits.toLocaleString()} CR`),i.credits>=F.cost?(ot&&ot.classList.add("hidden"),Ct&&(Ct.disabled=!1,Ct.textContent=`⚡ AUTHORIZE PROCUREMENT (-${F.cost} CR)`)):(ot&&ot.classList.remove("hidden"),Ct&&(Ct.disabled=!0,Ct.textContent=`🔒 INSUFFICIENT CREDITS (NEED ${F.cost} CR)`)),nt&&nt.classList.remove("hidden")}function Nt(){nt&&nt.classList.add("hidden"),H=null}ct&&ct.addEventListener("click",Nt),nt&&nt.addEventListener("click",T=>{T.target===nt&&Nt()}),Ct&&Ct.addEventListener("click",()=>{if(!H)return;const T=c[H];if(!T)return;if(i.credits<T.cost){K.playAccessDenied();return}i.credits-=T.cost,i.updateCreditsDisplay(),u.add(H),K.playSocketDock(),a.showToast(`📦 REQUISITION APPROVED: ${T.name} (${T.code}) unlocked! (-${T.cost} CR)`);const F=H;Nt(),Y(),v(),B(F)});function ee(){const T=Te.loadCampaignSave()||Te.loadSave();if(!T){ne();return}p="campaign",T.customChips&&a.loadCustomChips(T.customChips),T.unlockedChips&&Array.isArray(T.unlockedChips)?u=new Set(T.unlockedChips):u=new Set(h),T.economy&&i.restoreEconomy(T.economy),T.campaign&&l.restoreProgress(T.campaign);const F=T.circuits||{};["flux","checkers","scanners","tank"].forEach(it=>{const at=F[it]||(it==="flux"?F.sparky:null),Tt=n[it];at&&Array.isArray(at.chips)&&Te.deserializeEngine(Tt,at)}),U("flux"),r.renderChips(),r.renderWires(),Y(),P(),Mt(),K.playGoalChime();const W=(l.currentMissionIndex||0)+1;a.showToast(`🎮 CAMPAIGN RESUMED: Mission ${W.toString().padStart(2,"0")} loaded. Circuits & ${i.credits.toLocaleString()} CR intact.`),v()}function Wt(){if(Te.hasCampaignSave()){const F=document.getElementById("new-game-confirm-modal");if(F){F.classList.remove("hidden");return}}ne()}function ne(){p="campaign",Te.clearCampaignSave(),U("flux"),["flux","checkers","scanners","tank"].forEach(F=>{n[F]&&n[F].clear()}),r.renderChips(),r.renderWires(),["flux","checkers","scanners","tank"].forEach(F=>{var it;const W=i.robots.get(F);if(W){W.energy=100,W.isStranded=!1,W.heldItem=null;const at=((it=W.config)==null?void 0:it.spawn)||{x:-8,z:8};W.reset(at.x,at.z)}}),i.credits=0,i.updateCreditsDisplay(),i.unlockedRobots=new Set(["flux"]),["checkers","scanners","tank"].forEach(F=>{const W=i.robots.get(F);W&&W.mesh&&(W.mesh.visible=!1)}),P(),u=new Set(h),l.loadMission(0),Y(),Mt();const T=document.getElementById("new-game-confirm-modal");T&&T.classList.add("hidden"),K.playGoalChime(),a.showToast("🟢 NEW CAMPAIGN STARTED: Welcome to Mission 01! Wire Flux's brain to proceed."),v()}function z(){p="demo",Le.cortex_hybrid.load(n.flux),Le.checkers_hauler.load(n.checkers),Le.scanners_scout.load(n.scanners),Le.tank_patrol.load(n.tank),r.renderChips(),r.renderWires(),i.credits<500&&(i.credits=1e3,i.updateCreditsDisplay()),Y(),P(),K.playRelayClick(),a.showToast("📺 DEMO SHOWCASE ACTIVE: Unrestricted sandbox mode.")}const ge=document.getElementById("start-game-btn"),zt=document.getElementById("continue-game-btn"),Lt=document.getElementById("start-game-modal"),Rt=document.getElementById("sgm-close-btn"),Gt=document.getElementById("sgm-launch-btn"),wt=document.getElementById("sgm-continue-btn"),C=document.getElementById("demo-mode-btn"),M=document.getElementById("new-game-confirm-modal"),G=document.getElementById("ngc-close-btn"),J=document.getElementById("ngc-cancel-btn"),et=document.getElementById("ngc-confirm-btn"),Q=()=>{Y(),Lt==null||Lt.classList.remove("hidden")},Mt=()=>Lt==null?void 0:Lt.classList.add("hidden");ge==null||ge.addEventListener("click",Q),zt==null||zt.addEventListener("click",ee),wt==null||wt.addEventListener("click",ee),Rt==null||Rt.addEventListener("click",Mt),Lt==null||Lt.addEventListener("click",T=>{T.target===Lt&&Mt()}),Gt==null||Gt.addEventListener("click",()=>{Mt(),Wt()});const lt=()=>M==null?void 0:M.classList.add("hidden");G==null||G.addEventListener("click",lt),J==null||J.addEventListener("click",lt),et==null||et.addEventListener("click",()=>{lt(),ne()}),M==null||M.addEventListener("click",T=>{T.target===M&&lt()}),C==null||C.addEventListener("click",z),Y();const gt=document.getElementById("elevator-action-btn");gt&&gt.addEventListener("click",()=>{i.toggleElevator()});const Zt=document.getElementById("elevator-bypass-btn");Zt&&Zt.addEventListener("click",()=>{i.grantTestCredits()});const rt=document.getElementById("board-elevator-quick-btn");rt&&rt.addEventListener("click",()=>{i.boardElevator()});const _t=document.getElementById("radar-mount")||document.getElementById("world-viewport"),At=new ym(_t,i);i.tacticalRadar=At,document.querySelectorAll("#fleet-radar-toggle, #cam-radar-toggle").forEach(T=>{T.addEventListener("click",()=>{At.toggle()})}),document.querySelectorAll(".elevator-floor-btn").forEach(T=>{T.addEventListener("click",()=>{const F=parseInt(T.dataset.floor,10);i.goToFloor(F)})});const It=document.getElementById("cam-floor-toggle");It&&It.addEventListener("click",()=>{i.toggleFloorView()});const yt=document.getElementById("cam-zoom-in");yt&&yt.addEventListener("click",()=>{K.playRelayClick(),i.zoomIn()});const Yt=document.getElementById("cam-zoom-out");Yt&&Yt.addEventListener("click",()=>{K.playRelayClick(),i.zoomOut()});const Bt=document.getElementById("cam-recenter");Bt&&Bt.addEventListener("click",()=>{K.playRelayClick(),i.recenterCamera()}),document.getElementById("clear-board-btn").addEventListener("click",()=>{t.clear(),r.renderChips(),r.renderWires(),K.playWireCut(),v()});const O=document.getElementById("sound-toggle-btn"),ut=document.getElementById("sound-icon");O.addEventListener("click",()=>{K.init(),K.isMuted=!K.isMuted,ut.textContent=K.isMuted?"🔇":"🔊"}),document.querySelectorAll(".tray-chip-btn").forEach(T=>{T.addEventListener("click",()=>{K.init();const F=T.dataset.type;if(F){if(p==="campaign"){const W=c[F];if(W&&W.cost>0&&!u.has(F)){Pt(F);return}}B(F)}})}),window.addEventListener("click",()=>{K.init()},{once:!0});let $=!0,tt=1,pt=!1;const dt=document.getElementById("sim-play-pause-btn"),Ot=document.getElementById("sim-icon"),de=document.getElementById("sim-label"),xe=document.getElementById("sim-step-btn"),Qt=document.getElementById("sim-speed-select");function we(){K.init(),$=!$,$?(dt.className="sim-btn sim-play-btn is-running",Ot.textContent="⏸",de.textContent="RUNNING",K.playRelayClick()):(dt.className="sim-btn sim-play-btn is-stopped",Ot.textContent="▶",de.textContent="PAUSED",K.setThrusterActive(!1),K.playRelayClick())}function Ve(){K.init(),$&&we(),pt=!0,K.playRelayClick()}dt&&dt.addEventListener("click",we),xe&&xe.addEventListener("click",Ve),Qt&&Qt.addEventListener("change",T=>{tt=parseFloat(T.target.value)||1});const Nn=document.getElementById("burn-chip-btn");Nn&&Nn.addEventListener("click",()=>{$&&we()});const pe={thrust_n:!1,thrust_s:!1,thrust_e:!1,thrust_w:!1,grabber:!1};window.manualActuators=pe;let Be=!1;function Ki(){K.init();const T=i.robot;if(!!(T&&T.heldItem)){pe.grabber=!1,Be=!0;const W=document.querySelector('.dpad-btn[data-dir="grabber"]');W&&W.classList.remove("active")}else{Be=!1,pe.grabber=!pe.grabber;const W=document.querySelector('.dpad-btn[data-dir="grabber"]');W&&W.classList.toggle("active",pe.grabber)}}const Ze={KeyW:"thrust_n",ArrowUp:"thrust_n",KeyS:"thrust_s",ArrowDown:"thrust_s",KeyD:"thrust_e",ArrowRight:"thrust_e",KeyA:"thrust_w",ArrowLeft:"thrust_w",KeyG:"grabber",KeyE:"grabber"};window.addEventListener("keydown",T=>{if(!(T.target.tagName==="INPUT"||T.target.tagName==="TEXTAREA")){if(T.code==="Space"){T.preventDefault(),we();return}else if(T.key==="."){Ve();return}else if(T.key==="+"||T.key==="="){i.zoomIn();return}else if(T.key==="-"||T.key==="_"){i.zoomOut();return}else if(T.code==="KeyC"||T.code==="Home"){i.recenterCamera();return}else if(T.code==="KeyF"){i.toggleElevator();return}else if(T.code==="KeyB"){i.boardElevator();return}else if(T.code==="KeyL"){i.toggleFloorView();return}else if(T.code==="KeyR"){At.toggle();return}else if(T.code==="KeyP"){if(At.visible){At.triggerActivePing();return}}else if(T.code==="Digit1"){U("flux");return}else if(T.code==="Digit2"){U("checkers");return}else if(T.code==="Digit3"){U("scanners");return}else if(T.code==="Digit4"){U("tank");return}if(Ze[T.code])if(K.init(),Ze[T.code]==="grabber")Ki();else{pe[Ze[T.code]]=!0;const F=document.querySelector(`.dpad-btn[data-dir="${Ze[T.code]}"]`);F&&F.classList.add("active")}}}),window.addEventListener("keyup",T=>{if(Ze[T.code]&&Ze[T.code]!=="grabber"){pe[Ze[T.code]]=!1;const F=document.querySelector(`.dpad-btn[data-dir="${Ze[T.code]}"]`);F&&F.classList.remove("active")}}),document.querySelectorAll(".dpad-btn").forEach(T=>{const F=T.dataset.dir;if(F==="grabber"){T.addEventListener("click",it=>{it.stopPropagation(),Ki()});return}T.addEventListener("mousedown",it=>{it.stopPropagation(),K.init(),pe[F]=!0,T.classList.add("active")});const W=()=>{pe[F]=!1,T.classList.remove("active")};T.addEventListener("mouseup",W),T.addEventListener("mouseleave",W),T.addEventListener("touchstart",it=>{it.preventDefault(),it.stopPropagation(),K.init(),pe[F]=!0,T.classList.add("active")},{passive:!1}),T.addEventListener("touchend",it=>{it.preventDefault(),W()},{passive:!1}),T.addEventListener("touchcancel",W)});const ss=document.getElementById("telemetry-pos"),Qi=document.getElementById("telemetry-vel"),rs=document.getElementById("active-wires-count"),Ji=document.getElementById("active-chips-count");let On=performance.now();function Un(T){var Xt,Jt;requestAnimationFrame(Un);const F=Math.min((T-On)/1e3,.1);if(On=T,!$&&!pt){i.update(0,{thrust_n:!1,thrust_s:!1,thrust_e:!1,thrust_w:!1,beacon_ping:t.actuators.beacon_ping,aux_light:t.actuators.aux_light,grabber:Be?!1:pe.grabber||t.actuators.grabber}),At.update(F),l.update();return}const W=(pt?.016:F)*tt;pt=!1;const it=i.deployedRobots;let at=null;for(const te of it){const qt=n[te.id];if(!qt)continue;qt.updateSensors(te.sensors);const ft=qt.tick({robot:te.position,target:i.target,items:i.itemManager?i.itemManager.items:[],heldItem:te.heldItem,refinery:i.itemManager?i.itemManager.terminals.find(Me=>Me.type==="refinery"):null,sensors:te.sensors,obstacles:i.obstacles||[],bounds:i.bounds||null});te.circuitActuators=ft.actuators,te.id===i.activeRobotId&&(at=ft)}const Tt=pe.thrust_n||pe.thrust_s||pe.thrust_e||pe.thrust_w,St=at?at.actuators:t.actuators;let mt=!1;Be?(mt=!1,(Xt=i.robot)!=null&&Xt.heldItem||(Be=!1)):mt=pe.grabber||St.grabber;const Dt=t.isBenchMode?{thrust_n:!1,thrust_s:!1,thrust_e:!1,thrust_w:!1,beacon_ping:!1,aux_light:St.aux_light,grabber:St.grabber}:{thrust_n:Tt?pe.thrust_n:St.thrust_n,thrust_s:Tt?pe.thrust_s:St.thrust_s,thrust_e:Tt?pe.thrust_e:St.thrust_e,thrust_w:Tt?pe.thrust_w:St.thrust_w,beacon_ping:St.beacon_ping,aux_light:St.aux_light,grabber:mt};if(i.update(W,Dt),At.update(W),l.update(),r.updateVisualStates(),t.tickCounter%6===0){const te=i.robot;if(te){ss.textContent=`POS: [${te.position.x.toFixed(1)}, ${te.position.z.toFixed(1)}]`,Qi.textContent=`VEL: ${te.velocity.length().toFixed(2)} m/s`;const ft=document.getElementById("hud-energy-fill"),Me=document.getElementById("hud-energy-pct"),Vt=document.getElementById("hud-energy-icon");if(ft&&Me){const ye=Math.max(0,Math.min(100,Math.round(te.energy)));ft.style.width=`${ye}%`,te.isCharging?(ft.className="hud-energy-bar-fill charging",Me.textContent=`${ye}% ↑ CHARGING`,Vt&&(Vt.textContent="⚡")):ye<25?(ft.className="hud-energy-bar-fill low",Me.textContent=`⚠️ ${ye}% LOW`,Vt&&(Vt.textContent="🪫")):ye<50?(ft.className="hud-energy-bar-fill mid",Me.textContent=`${ye}%`,Vt&&(Vt.textContent="⚡")):(ft.className="hud-energy-bar-fill normal",Me.textContent=`${ye}%`,Vt&&(Vt.textContent="⚡"))}}rs.textContent=`WIRES: ${t.wires.length}`,Ji.textContent=`CHIPS: ${t.chips.size}`;const qt=document.querySelector('.dpad-btn[data-dir="grabber"]');qt&&qt.classList.toggle("active",!!((Jt=i.robot)!=null&&Jt.heldItem||pe.grabber)),P(),X()}}const oi=document.getElementById("stranded-modal"),as=document.getElementById("stranded-tow-btn"),os=document.getElementById("stranded-restart-btn"),w=document.getElementById("stranded-bot-name"),k=document.getElementById("stranded-coords"),V=document.getElementById("stranded-cur-credits");function X(){if(!oi)return;const T=i.robot;T&&T.isStranded?oi.classList.contains("hidden")&&(oi.classList.remove("hidden"),w&&(w.textContent=T.name.toUpperCase()),k&&(k.textContent=`[${T.position.x.toFixed(1)}, ${T.position.z.toFixed(1)}]`),V&&(V.textContent=`${i.credits.toLocaleString()} CR`)):oi.classList.contains("hidden")||oi.classList.add("hidden")}as&&as.addEventListener("click",()=>{const T=i.robot;if(!T)return;const F=2500;i.credits=Math.max(0,i.credits-F),i.updateCreditsDisplay();const W=i.target||{x:18,z:-18};T.position.set(W.x,.4,W.z),T.velocity.set(0,0,0),T.energy=100,T.isStranded=!1,T.mesh.position.copy(T.position),i.recenterCamera(),oi.classList.add("hidden"),K.playGoalChime(),a.showToast(`🚁 Emergency Recovery: ${T.name} towed to Level 1 Energy Terminal and fully recharged! (-${F} CR)`),v()}),os&&os.addEventListener("click",()=>{const T=i.robot;T&&(T.energy=100,T.isStranded=!1),oi.classList.add("hidden"),l.loadMission(l.currentMissionIndex),K.playRelayClick()}),requestAnimationFrame(Un)});
