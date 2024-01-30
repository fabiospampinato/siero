export default ()=>{var T=Object.defineProperty;var At=Object.getOwnPropertyDescriptor;var Tt=Object.getOwnPropertyNames;var Rt=Object.prototype.hasOwnProperty;var Dt=(o,t)=>{for(var e in t)T(o,e,{get:t[e],enumerable:!0})},Et=(o,t,e,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Tt(t))!Rt.call(o,s)&&s!==e&&T(o,s,{get:()=>t[s],enumerable:!(r=At(t,s))||r.enumerable});return o};var Ct=o=>Et(T({},"__esModule",{value:!0}),o);var $t={};Dt($t,{default:()=>Mt});var R=class{constructor(t){this.siero=t}},g=R;var D=class extends g{constructor(){super(...arguments);this.commands={};this.call=(e,r)=>{let s=this.commands[e];if(!s)throw new Error(`Command not found: "${e}"`);return s(...r)};this.has=e=>e in this.commands;this.register=(e,r)=>{if(this.has(e))throw new Error(`Command already registered: "${e}"`);return this.commands[e]=r,()=>{delete this.commands[e]}}}},Re=D;var E=class extends g{constructor(){super(...arguments);this.functionCounter=1;this.functionResultCounter=1;this.function2id=new Map;this.id2function={};this.id2functionResult={};this.promiseCounter=1;this.promise2id=new Map;this.id2promise={};this.id2promiseRealms={};this.symbolCounter=1;this.symbol2id={};this.id2symbol={}}},De=E;var C=class extends g{constructor(){super(...arguments);this.pack=e=>{let r="",s="";for(let i=0,n=e.length;i<n;i++){let c=e[i],p=c.length;r+=i?`,${p}`:p,s+=c}return`${r}:${s}`};this.unpack=e=>{let r=e.indexOf(":"),s=e.slice(0,r),i=e.slice(r+1),n=s.length?s.split(","):[],c=new Array(n.length),p=0;for(let l=0,f=n.length;l<f;l++){let x=parseInt(n[l]),y=p,S=p+x,h=i.slice(y,S);c[l]=h,p=S}return c}}},Ee=C;var P=class extends g{constructor(){super(...arguments);this.realms={};this.call=(e,r,s)=>{let i=this.realms[e];if(!i)throw new Error(`Realm not found: "${e}"`);return i(r,this.siero.serialize(s,{realm:e}))};this.has=e=>e in this.realms;this.register=(e,r)=>{if(this.has(e))throw new Error(`Realm already registered: "${e}"`);return this.realms[e]=r,()=>{delete this.realms[e]}}}},Ce=P;var v=class{constructor(t){this.siero=t}},a=v;var j=class extends a{constructor(){super(...arguments);this.typeof="bigint"}serialize(e,r){return e.toString()}deserialize(e,r){return BigInt(e)}},Pe=j;var N=class extends a{constructor(){super(...arguments);this.typeof="boolean"}serialize(e,r){return e?"1":"0"}deserialize(e,r){return e==="1"}},ve=N;var M=class extends a{constructor(){super(...arguments);this.value=null}serialize(e,r){return""}deserialize(e,r){return null}},je=M;var $=class extends a{constructor(){super(...arguments);this.typeof="number"}serialize(e,r){return e===1/0?"I":e===-1/0?"-I":Object.is(e,NaN)?"N":Object.is(e,-0)?"-0":e.toString()}deserialize(e,r){return e==="I"?1/0:e==="-I"?-1/0:e==="N"?NaN:e==="-0"?-0:Number(e)}},Ne=$;var F=class extends a{constructor(){super(...arguments);this.typeof="string"}serialize(e,r){return e}deserialize(e,r){return e}},Me=F;var U=class{constructor(){this.name2symbol={},this.symbol2name={},this.names=[],this.symbols=[],this.getNames=()=>this.names,this.getSymbols=()=>this.symbols,this.getName=e=>this.symbol2name[e],this.getSymbol=e=>this.name2symbol[e],this.hasName=e=>e in this.name2symbol,this.hasSymbol=e=>e in this.symbol2name;let t=Object.getOwnPropertyDescriptors(Symbol);for(let e in t){let r=t[e].value;typeof r=="symbol"&&(this.name2symbol[e]=r,this.symbol2name[r]=e,this.names.push(e),this.symbols.push(r))}}},B=new U;var K=class extends a{constructor(){super(...arguments);this.typeof="symbol"}serialize(e,r){let s=B.getName(e);if(s)return s;let i=this.siero.contexts.symbol2id[e]||=`${this.siero.realm}-${this.siero.contexts.symbolCounter++}`,n=this.siero.contexts.id2symbol[i]||=e;return i}deserialize(e,r){let s=B.getSymbol(e);if(s)return s;let i=this.siero.contexts.id2symbol[e]||=Symbol(),n=this.siero.contexts.symbol2id[i]||=e;return i}},$e=K;var L=class extends a{constructor(){super(...arguments);this.typeof="undefined"}serialize(e,r){return""}deserialize(e,r){}},Fe=L;var V=class extends a{constructor(t,e){super(t),this.Constructor=e}serialize(t,e){return this.siero.serialize(t.valueOf(),e)}deserialize(t,e){return Object(this.siero.deserialize(t,e))}},z=V;var G=class extends z{constructor(t){super(t,BigInt)}},Ue=G;var H=class extends z{constructor(t){super(t,Boolean)}},Be=H;var W=class extends z{constructor(t){super(t,Number)}},Ke=W;var Y=class extends z{constructor(t){super(t,String)}},Le=Y;var X=class extends z{constructor(t){super(t,Symbol)}},Ve=X;var He=(o,t)=>{let e=new Array(o.length);for(let r=0,s=o.length;r<s;r++)e[r]=t(o[r],r,o);return e},b=o=>Array.isArray(o)?o:[o],We=()=>Math.random().toString(36).slice(2).slice(0,12).padStart(12,"0"),I=(o,t,e)=>{let r=o.get(t);if(r||o.has(t))return r;let s=e();return o.set(t,s),s},Ge=()=>{},k=()=>{let o=Ge,t=Ge;return{promise:new Promise((r,s)=>{o=r,t=s}),resolve:o,reject:t}};var Z=class extends a{constructor(){super(...arguments);this.Constructor=Array}serialize(e,r){let s=He(e,n=>this.siero.serialize(n,r));return this.siero.pack(s)}deserialize(e,r){return this.siero.unpack(e).map(n=>this.siero.deserialize(n,r))}},Ye=Z;var q=class extends a{constructor(){super(...arguments);this.Constructor=ArrayBuffer}serialize(e,r){return new Uint8Array(e).toString()}deserialize(e,r){let s=e?e.split(",").map(Number):[];return new Uint8Array(s).buffer}},Xe=q;var J=class extends a{constructor(){super(...arguments);this.Constructor=Date}serialize(e,r){return e.getTime().toString()}deserialize(e,r){return new Date(parseInt(e))}},Ze=J;var Q=class extends a{constructor(e){super(e);this.typeof="function";this.siero.commands.register("function.call",this.call.bind(this)),this.siero.commands.register("function.settle",this.settle.bind(this))}call(e,...r){let[s,i,n,c]=e.split("-"),p=this.siero.contexts.id2function[`${i}-${n}`];if(!p)this.siero.realms.call(s,"function.settle",[e,!1,new ReferenceError("Function not found")]);else try{let l=p(...r);if(l instanceof Promise){let f=y=>this.siero.realms.call(s,"function.settle",[e,!0,y]),x=y=>this.siero.realms.call(s,"function.settle",[e,!1,y]);l.then(f,x)}else this.siero.realms.call(s,"function.settle",[e,!0,l])}catch(l){this.siero.realms.call(s,"function.settle",[e,!1,l])}}settle(e,r,s){let i=this.siero.contexts.id2functionResult[e];i&&(delete this.siero.contexts.id2functionResult[e],r?i.resolve(s):i.reject(s))}serialize(e,r){let s=I(this.siero.contexts.function2id,e,()=>`${this.siero.realm}-${this.siero.contexts.functionCounter++}`),i=this.siero.contexts.id2function[s]||=async(...p)=>e(...p),n=I(this.siero.contexts.function2id,i,()=>s);return this.siero.pack([e.name,`${e.length}`,s])}deserialize(e,r){let[s,i,n]=this.siero.unpack(e),[c,p]=n.split("-"),l=this.siero.contexts.id2function[n];if(l)return l;let f=this.siero.contexts.id2function[n]=(...y)=>{let S=this.siero.realm,h=this.siero.contexts.functionResultCounter++,u=`${S}-${c}-${p}-${h}`,O=k();return this.siero.contexts.id2functionResult[u]=O,this.siero.realms.call(c,"function.call",[u,...y]),O.promise};Object.defineProperty(f,"name",{value:s}),Object.defineProperty(f,"length",{value:parseInt(i)});let x=I(this.siero.contexts.function2id,f,()=>n);return f}},qe=Q;var _=class extends a{constructor(){super(...arguments);this.Constructor=Map}serialize(e,r){let s=this.siero.serialize(Array.from(e.keys()),r),i=this.siero.serialize(Array.from(e.values()),r);return this.siero.pack([s,i])}deserialize(e,r){let s=this.siero.unpack(e),i=b(this.siero.deserialize(s[0])),n=b(this.siero.deserialize(s[1])),c=new Map;for(let p=0,l=i.length;p<l;p++)c.set(i[p],n[p]);return c}},Je=_;var ee=class extends a{constructor(e){super(e);this.Constructor=Promise;this.siero.commands.register("promise.settle",this.settle.bind(this))}settle(e,r,s){let i=this.siero.contexts.id2promiseRealms[e];if(i){delete this.siero.contexts.id2promiseRealms[e];for(let c of i)c!==this.siero.realm&&this.siero.realms.has(c)&&this.siero.realms.call(c,"promise.settle",[e,r,s])}let n=this.siero.contexts.id2promise[e];n&&(delete this.siero.contexts.id2promise[e],this.siero.contexts.promise2id.delete(n.promise),r?n.resolve(s):n.reject(s))}serialize(e,r){let s=I(this.siero.contexts.promise2id,e,()=>`${this.siero.realm}-${this.siero.contexts.promiseCounter++}`),i=s in this.siero.contexts.id2promise,n=this.siero.contexts.id2promise[s]||=k();if(r?.realm&&(this.siero.contexts.id2promiseRealms[s]||=new Set).add(r.realm),!i){let c=l=>this.settle(s,!0,l),p=l=>this.settle(s,!1,l);e.then(c,p)}return s}deserialize(e,r){let s=this.siero.contexts.id2promise[e]||=k(),i=I(this.siero.contexts.promise2id,s.promise,()=>e);return s.promise}},Qe=ee;var te=class extends a{constructor(){super(...arguments);this.Constructor=RegExp}serialize(e,r){let{source:s,flags:i}=e;return this.siero.pack([s,i])}deserialize(e,r){let s=this.siero.unpack(e),[i,n]=s;return new RegExp(i,n)}},_e=te;var re=class extends a{constructor(){super(...arguments);this.Constructor=Set}serialize(e,r){let s=Array.from(e.values());return this.siero.serialize(s,r)}deserialize(e,r){let s=b(this.siero.deserialize(e));return new Set(s)}},et=re;var se=class extends a{constructor(t,e){super(t),this.Constructor=e}serialize(t,e){let r=t.name,s=t.message,i=t.stack||"",n=t.cause?this.siero.serialize(t.cause,e):"";return this.siero.pack([r,s,i,n])}deserialize(t,e){let r=this.siero.unpack(t),[s,i,n,c]=r,p=new this.Constructor;return p.name=s,p.message=i,p.stack=n,p.cause=c?this.siero.deserialize(c,e):void 0,p}},d=se;var oe=class extends d{constructor(t){super(t,EvalError)}},tt=oe;var ie=class extends d{constructor(t){super(t,RangeError)}},rt=ie;var ne=class extends d{constructor(t){super(t,ReferenceError)}},st=ne;var ae=class extends d{constructor(t){super(t,SyntaxError)}},ot=ae;var pe=class extends d{constructor(t){super(t,TypeError)}},it=pe;var ce=class extends d{constructor(t){super(t,URIError)}},nt=ce;var le=class extends d{constructor(t){super(t,Error)}},at=le;var me=class extends a{constructor(t,e,r){super(t),this.Constructor=e,this.Parser=r}serialize(t,e){return t.toString()}deserialize(t,e){let r=t?t.split(",").map(this.Parser):[];return new this.Constructor(r)}},w=me;var ue=class extends w{constructor(t,e){super(t,e,BigInt)}},A=ue;var de=class extends A{constructor(t){super(t,BigInt64Array)}},pt=de;var fe=class extends A{constructor(t){super(t,BigUint64Array)}},ct=fe;var ye=class extends w{constructor(t,e){super(t,e,Number)}},m=ye;var he=class extends m{constructor(t){super(t,Float32Array)}},lt=he;var ge=class extends m{constructor(t){super(t,Float64Array)}},mt=ge;var ze=class extends m{constructor(t){super(t,Int8Array)}},ut=ze;var xe=class extends m{constructor(t){super(t,Int16Array)}},dt=xe;var be=class extends m{constructor(t){super(t,Int32Array)}},ft=be;var Se=class extends m{constructor(t){super(t,Uint8Array)}},yt=Se;var Ie=class extends m{constructor(t){super(t,Uint16Array)}},ht=Ie;var Oe=class extends m{constructor(t){super(t,Uint32Array)}},gt=Oe;var ke=class extends m{constructor(t){super(t,Uint8ClampedArray)}},zt=ke;var Pt=o=>Object.getPrototypeOf(o)===null,{isExtensible:vt,isFrozen:jt,isSealed:Nt}=Object,xt=1,bt=2,St=4,It=8,we=class extends a{constructor(){super(...arguments);this.Constructor=Object;this.typeof="object"}serialize(e,r){let s=Pt(e)?xt:0,i=vt(e)?bt:0,n=jt(e)?St:0,c=Nt(e)?It:0,p=`${s|i|n|c}`,l=this.siero.pack(Object.keys(e)),f=this.siero.serialize(Object.values(e),r),x=Object.getOwnPropertySymbols(e),y=this.siero.serialize(x,r),S=this.siero.serialize(x.map(u=>e[u]),r);return this.siero.pack([p,l,f,y,S])}deserialize(e,r){let s=this.siero.unpack(e),i=parseInt(s[0]),n=i&xt,c=i&bt,p=i&St,l=i&It,f=this.siero.unpack(s[1]),x=b(this.siero.deserialize(s[2])),y=b(this.siero.deserialize(s[3])),S=b(this.siero.deserialize(s[4])),h=n?Object.create(null):{};for(let u=0,O=f.length;u<O;u++)h[f[u]]=x[u];for(let u=0,O=y.length;u<O;u++)h[y[u]]=S[u];return c||Object.preventExtensions(h),p&&Object.freeze(h),l&&Object.seal(h),h}},Ot=we;var kt=[Pe,ve,je,Ne,Me,$e,Fe,Ue,Be,Ke,Le,Ve,Ye,Xe,Ze,qe,Je,Qe,_e,et,tt,rt,st,ot,it,nt,at,pt,ct,lt,mt,ut,dt,ft,yt,ht,gt,zt,Ot];var Ae=class extends g{constructor(e){super(e);this.infer=e=>{if(e===null)return this.value2type.get(e);let r=typeof e,s=e?.constructor;return r==="object"&&s!==void 0?this.constructor2type.get(s):this.typeof2type.get(r)};this.serialize=(e,r)=>{let s=this.infer(e);if(!s)throw new Error("Unserializable value");let i=this.type2id.get(s),n=s.serialize(e,r);return`${i}${n}`};this.deserialize=(e,r)=>{let s=e[0],i=e.slice(1),n=this.id2type.get(s);if(!n)throw new Error("Undeserializable value");return n.deserialize(i,r)};let r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",s=kt;if(s.length>=r.length)throw new Error(`More than ${r.length} types are not supported`);this.types=s.map(i=>new i(e)),this.type2id=new Map(this.types.map((i,n)=>[i,r[n]])),this.id2type=new Map(this.types.map((i,n)=>[r[n],i])),this.typeof2type=new Map(this.types.map(i=>[i.typeof,i])),this.constructor2type=new Map(this.types.map(i=>[i.Constructor,i])),this.value2type=new Map(this.types.map(i=>[i.value,i]))}},wt=Ae;var Te=class{constructor(t={}){this.call=(t,e)=>{this.commands.call(t,e)};this.register=(t,e)=>this.realms.register(t,e);this.pack=t=>this.packer.pack(t);this.unpack=t=>this.packer.unpack(t);this.serialize=(t,e)=>this.serializer.serialize(t,e);this.deserialize=(t,e)=>this.serializer.deserialize(t,e);this.realm=t.realm??We(),this.commands=new Re(this),this.contexts=new De(this),this.packer=new Ee(this),this.realms=new Ce(this),this.serializer=new wt(this)}},Mt=Te;return Ct($t);};
