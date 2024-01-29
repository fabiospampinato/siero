export default ()=>{var T=Object.defineProperty;var kt=Object.getOwnPropertyDescriptor;var Tt=Object.getOwnPropertyNames;var Dt=Object.prototype.hasOwnProperty;var Rt=(o,t)=>{for(var e in t)T(o,e,{get:t[e],enumerable:!0})},Et=(o,t,e,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Tt(t))!Dt.call(o,s)&&s!==e&&T(o,s,{get:()=>t[s],enumerable:!(r=kt(t,s))||r.enumerable});return o};var Ct=o=>Et(T({},"__esModule",{value:!0}),o);var Ut={};Rt(Ut,{default:()=>Ft});var D=class{constructor(t){this.siero=t}},h=D;var R=class extends h{constructor(){super(...arguments);this.commands={};this.call=(e,r)=>{let s=this.commands[e];if(!s)throw new Error(`Command not found: "${e}"`);return s(...r)};this.has=e=>e in this.commands;this.register=(e,r)=>{if(this.has(e))throw new Error(`Command already registered: "${e}"`);return this.commands[e]=r,()=>{delete this.commands[e]}}}},De=R;var E=class extends h{constructor(){super(...arguments);this.functionCounter=1;this.functionResultCounter=1;this.function2id=new Map;this.id2function={};this.id2functionResult={};this.promiseCounter=1;this.promise2id=new Map;this.id2promise={};this.id2promiseRealms={};this.symbolCounter=1;this.symbol2id={};this.id2symbol={}}},Re=E;var C=class extends h{constructor(){super(...arguments);this.pack=e=>{let r="",s="";for(let i=0,n=e.length;i<n;i++){let c=e[i],p=c.length;r+=i?`,${p}`:p,s+=c}return`${r}:${s}`};this.unpack=e=>{let r=e.indexOf(":"),s=e.slice(0,r),i=e.slice(r+1),n=s.length?s.split(","):[],c=new Array(n.length),p=0;for(let l=0,d=n.length;l<d;l++){let y=parseInt(n[l]),b=p,S=p+y,x=i.slice(b,S);c[l]=x,p=S}return c}}},Ee=C;var P=class extends h{constructor(){super(...arguments);this.realms={};this.call=(e,r,s)=>{let i=this.realms[e];if(!i)throw new Error(`Realm not found: "${e}"`);return i(r,this.siero.serialize(s,{realm:e}))};this.has=e=>e in this.realms;this.register=(e,r)=>{if(this.has(e))throw new Error(`Realm already registered: "${e}"`);return this.realms[e]=r,()=>{delete this.realms[e]}}}},Ce=P;var j=class{constructor(t){this.siero=t}},a=j;var N=class extends a{constructor(){super(...arguments);this.typeof="bigint"}serialize(e,r){return e.toString()}deserialize(e,r){return BigInt(e)}},Pe=N;var M=class extends a{constructor(){super(...arguments);this.typeof="boolean"}serialize(e,r){return e?"1":"0"}deserialize(e,r){return e==="1"}},je=M;var F=class extends a{constructor(){super(...arguments);this.value=null}serialize(e,r){return""}deserialize(e,r){return null}},Ne=F;var U=class extends a{constructor(){super(...arguments);this.typeof="number"}serialize(e,r){return e===1/0?"I":e===-1/0?"-I":Object.is(e,NaN)?"N":Object.is(e,-0)?"-0":e.toString()}deserialize(e,r){return e==="I"?1/0:e==="-I"?-1/0:e==="N"?NaN:e==="-0"?-0:Number(e)}},Me=U;var v=class extends a{constructor(){super(...arguments);this.typeof="string"}serialize(e,r){return e}deserialize(e,r){return e}},Fe=v;var B=class{constructor(){this.name2symbol={},this.symbol2name={},this.names=[],this.symbols=[],this.getNames=()=>this.names,this.getSymbols=()=>this.symbols,this.getName=e=>this.symbol2name[e],this.getSymbol=e=>this.name2symbol[e],this.hasName=e=>e in this.name2symbol,this.hasSymbol=e=>e in this.symbol2name;let t=Object.getOwnPropertyDescriptors(Symbol);for(let e in t){let r=t[e].value;typeof r=="symbol"&&(this.name2symbol[e]=r,this.symbol2name[r]=e,this.names.push(e),this.symbols.push(r))}}},$=new B;var K=class extends a{constructor(){super(...arguments);this.typeof="symbol"}serialize(e,r){let s=$.getName(e);if(s)return s;let i=this.siero.contexts.symbol2id[e]||=`${this.siero.realm}-${this.siero.contexts.symbolCounter++}`,n=this.siero.contexts.id2symbol[i]||=e;return i}deserialize(e,r){let s=$.getSymbol(e);if(s)return s;let i=this.siero.contexts.id2symbol[e]||=Symbol(),n=this.siero.contexts.symbol2id[i]||=e;return i}},Ue=K;var L=class extends a{constructor(){super(...arguments);this.typeof="undefined"}serialize(e,r){return""}deserialize(e,r){}},ve=L;var V=class extends a{constructor(t,e){super(t),this.Constructor=e}serialize(t,e){return this.siero.serialize(t.valueOf(),e)}deserialize(t,e){return Object(this.siero.deserialize(t,e))}},g=V;var G=class extends g{constructor(t){super(t,BigInt)}},Be=G;var H=class extends g{constructor(t){super(t,Boolean)}},$e=H;var W=class extends g{constructor(t){super(t,Number)}},Ke=W;var Y=class extends g{constructor(t){super(t,String)}},Le=Y;var X=class extends g{constructor(t){super(t,Symbol)}},Ve=X;var He=(o,t)=>{let e=new Array(o.length);for(let r=0,s=o.length;r<s;r++)e[r]=t(o[r],r,o);return e},z=o=>Array.isArray(o)?o:[o],We=()=>Math.random().toString(36).slice(2).slice(0,12).padStart(12,"0"),I=(o,t,e)=>{let r=o.get(t);if(r||o.has(t))return r;let s=e();return o.set(t,s),s},Ge=()=>{},O=()=>{let o=Ge,t=Ge;return{promise:new Promise((r,s)=>{o=r,t=s}),resolve:o,reject:t}};var Z=class extends a{constructor(){super(...arguments);this.Constructor=Array}serialize(e,r){let s=He(e,n=>this.siero.serialize(n,r));return this.siero.pack(s)}deserialize(e,r){return this.siero.unpack(e).map(n=>this.siero.deserialize(n,r))}},Ye=Z;var q=class extends a{constructor(){super(...arguments);this.Constructor=ArrayBuffer}serialize(e,r){return new Uint8Array(e).toString()}deserialize(e,r){let s=e?e.split(",").map(Number):[];return new Uint8Array(s).buffer}},Xe=q;var J=class extends a{constructor(){super(...arguments);this.Constructor=Date}serialize(e,r){return e.getTime().toString()}deserialize(e,r){return new Date(parseInt(e))}},Ze=J;var Q=class extends a{constructor(e){super(e);this.typeof="function";this.siero.commands.register("function.call",this.call.bind(this)),this.siero.commands.register("function.settle",this.settle.bind(this))}call(e,...r){let[s,i,n]=e.split("-"),c=this.siero.contexts.id2function[i];if(!c)this.siero.realms.call(s,"function.settle",[e,!1,new ReferenceError("Function not found")]);else try{let p=c(...r);if(p instanceof Promise){let l=y=>this.siero.realms.call(s,"function.settle",[e,!0,y]),d=y=>this.siero.realms.call(s,"function.settle",[e,!1,y]);p.then(l,d)}else this.siero.realms.call(s,"function.settle",[e,!0,p])}catch(p){this.siero.realms.call(s,"function.settle",[e,!1,p])}}settle(e,r,s){let i=this.siero.contexts.id2functionResult[e];i&&(delete this.siero.contexts.id2functionResult[e],r?i.resolve(s):i.reject(s))}serialize(e,r){let s=I(this.siero.contexts.function2id,e,()=>`${this.siero.realm}-${this.siero.contexts.functionCounter++}`),i=this.siero.contexts.id2function[s]||=e;return s}deserialize(e,r){let[s,i]=e.split("-"),n=this.siero.contexts.id2function[e]||=(...p)=>{let l=`${e}-${this.siero.contexts.functionResultCounter++}`,d=O();return this.siero.contexts.id2functionResult[l]=d,this.siero.realms.call(s,"function.call",[l,...p]),d.promise},c=I(this.siero.contexts.function2id,n,()=>e);return n}},qe=Q;var _=class extends a{constructor(){super(...arguments);this.Constructor=Map}serialize(e,r){let s=this.siero.serialize(Array.from(e.keys()),r),i=this.siero.serialize(Array.from(e.values()),r);return this.siero.pack([s,i])}deserialize(e,r){let s=this.siero.unpack(e),i=z(this.siero.deserialize(s[0])),n=z(this.siero.deserialize(s[1])),c=new Map;for(let p=0,l=i.length;p<l;p++)c.set(i[p],n[p]);return c}},Je=_;var ee=class extends a{constructor(e){super(e);this.Constructor=Promise;this.siero.commands.register("promise.settle",this.settle.bind(this))}settle(e,r,s){let i=this.siero.contexts.id2promiseRealms[e];if(i){delete this.siero.contexts.id2promiseRealms[e];for(let c of i)c!==this.siero.realm&&this.siero.realms.has(c)&&this.siero.realms.call(c,"promise.settle",[e,r,s])}let n=this.siero.contexts.id2promise[e];n&&(delete this.siero.contexts.id2promise[e],this.siero.contexts.promise2id.delete(n.promise),r?n.resolve(s):n.reject(s))}serialize(e,r){let s=I(this.siero.contexts.promise2id,e,()=>`${this.siero.realm}-${this.siero.contexts.promiseCounter++}`),i=s in this.siero.contexts.id2promise,n=this.siero.contexts.id2promise[s]||=O();if(r?.realm&&(this.siero.contexts.id2promiseRealms[s]||=new Set).add(r.realm),!i){let c=l=>this.settle(s,!0,l),p=l=>this.settle(s,!1,l);e.then(c,p)}return s}deserialize(e,r){let s=this.siero.contexts.id2promise[e]||=O(),i=I(this.siero.contexts.promise2id,s.promise,()=>e);return s.promise}},Qe=ee;var te=class extends a{constructor(){super(...arguments);this.Constructor=RegExp}serialize(e,r){let{source:s,flags:i}=e;return this.siero.pack([s,i])}deserialize(e,r){let s=this.siero.unpack(e),[i,n]=s;return new RegExp(i,n)}},_e=te;var re=class extends a{constructor(){super(...arguments);this.Constructor=Set}serialize(e,r){let s=Array.from(e.values());return this.siero.serialize(s,r)}deserialize(e,r){let s=z(this.siero.deserialize(e));return new Set(s)}},et=re;var se=class extends a{constructor(t,e){super(t),this.Constructor=e}serialize(t,e){let r=t.name,s=t.message,i=t.stack||"",n=t.cause?this.siero.serialize(t.cause,e):"";return this.siero.pack([r,s,i,n])}deserialize(t,e){let r=this.siero.unpack(t),[s,i,n,c]=r,p=new this.Constructor;return p.name=s,p.message=i,p.stack=n,p.cause=c?this.siero.deserialize(c,e):void 0,p}},u=se;var oe=class extends u{constructor(t){super(t,EvalError)}},tt=oe;var ie=class extends u{constructor(t){super(t,RangeError)}},rt=ie;var ne=class extends u{constructor(t){super(t,ReferenceError)}},st=ne;var ae=class extends u{constructor(t){super(t,SyntaxError)}},ot=ae;var pe=class extends u{constructor(t){super(t,TypeError)}},it=pe;var ce=class extends u{constructor(t){super(t,URIError)}},nt=ce;var le=class extends u{constructor(t){super(t,Error)}},at=le;var me=class extends a{constructor(t,e,r){super(t),this.Constructor=e,this.Parser=r}serialize(t,e){return t.toString()}deserialize(t,e){let r=t?t.split(",").map(this.Parser):[];return new this.Constructor(r)}},w=me;var ue=class extends w{constructor(t,e){super(t,e,BigInt)}},A=ue;var de=class extends A{constructor(t){super(t,BigInt64Array)}},pt=de;var fe=class extends A{constructor(t){super(t,BigUint64Array)}},ct=fe;var ye=class extends w{constructor(t,e){super(t,e,Number)}},m=ye;var he=class extends m{constructor(t){super(t,Float32Array)}},lt=he;var ge=class extends m{constructor(t){super(t,Float64Array)}},mt=ge;var ze=class extends m{constructor(t){super(t,Int8Array)}},ut=ze;var xe=class extends m{constructor(t){super(t,Int16Array)}},dt=xe;var be=class extends m{constructor(t){super(t,Int32Array)}},ft=be;var Se=class extends m{constructor(t){super(t,Uint8Array)}},yt=Se;var Ie=class extends m{constructor(t){super(t,Uint16Array)}},ht=Ie;var Oe=class extends m{constructor(t){super(t,Uint32Array)}},gt=Oe;var we=class extends m{constructor(t){super(t,Uint8ClampedArray)}},zt=we;var Pt=o=>Object.getPrototypeOf(o)===null,{isExtensible:jt,isFrozen:Nt,isSealed:Mt}=Object,xt=1,bt=2,St=4,It=8,Ae=class extends a{constructor(){super(...arguments);this.Constructor=Object;this.typeof="object"}serialize(e,r){let s=Pt(e)?xt:0,i=jt(e)?bt:0,n=Nt(e)?St:0,c=Mt(e)?It:0,p=`${s|i|n|c}`,l=this.siero.serialize(Object.keys(e),r),d=this.siero.serialize(Object.values(e),r),y=Object.getOwnPropertySymbols(e),b=this.siero.serialize(y,r),S=this.siero.serialize(y.map(f=>e[f]),r);return this.siero.pack([p,l,d,b,S])}deserialize(e,r){let s=this.siero.unpack(e),i=parseInt(s[0]),n=i&xt,c=i&bt,p=i&St,l=i&It,d=z(this.siero.deserialize(s[1])),y=z(this.siero.deserialize(s[2])),b=z(this.siero.deserialize(s[3])),S=z(this.siero.deserialize(s[4])),x=n?Object.create(null):{};for(let f=0,k=d.length;f<k;f++)x[d[f]]=y[f];for(let f=0,k=b.length;f<k;f++)x[b[f]]=S[f];return c||Object.preventExtensions(x),p&&Object.freeze(x),l&&Object.seal(x),x}},Ot=Ae;var wt=[Pe,je,Ne,Me,Fe,Ue,ve,Be,$e,Ke,Le,Ve,Ye,Xe,Ze,qe,Je,Qe,_e,et,tt,rt,st,ot,it,nt,at,pt,ct,lt,mt,ut,dt,ft,yt,ht,gt,zt,Ot];var ke=class extends h{constructor(e){super(e);this.infer=e=>{if(e===null)return this.value2type.get(e);let r=typeof e,s=e?.constructor;return r==="object"&&s!==void 0?this.constructor2type.get(s):this.typeof2type.get(r)};this.serialize=(e,r)=>{let s=this.infer(e);if(!s)throw new Error("Unserializable value");let i=this.type2id.get(s),n=s.serialize(e,r);return`${i}${n}`};this.deserialize=(e,r)=>{let s=e[0],i=e.slice(1),n=this.id2type.get(s);if(!n)throw new Error("Undeserializable value");return n.deserialize(i,r)};let r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",s=wt;if(s.length>=r.length)throw new Error(`More than ${r.length} types are not supported`);this.types=s.map(i=>new i(e)),this.type2id=new Map(this.types.map((i,n)=>[i,r[n]])),this.id2type=new Map(this.types.map((i,n)=>[r[n],i])),this.typeof2type=new Map(this.types.map(i=>[i.typeof,i])),this.constructor2type=new Map(this.types.map(i=>[i.Constructor,i])),this.value2type=new Map(this.types.map(i=>[i.value,i]))}},At=ke;var Te=class{constructor(){this.call=(t,e)=>{this.commands.call(t,e)};this.register=(t,e)=>this.realms.register(t,e);this.pack=t=>this.packer.pack(t);this.unpack=t=>this.packer.unpack(t);this.serialize=(t,e)=>this.serializer.serialize(t,e);this.deserialize=(t,e)=>this.serializer.deserialize(t,e);this.realm=We(),this.commands=new De(this),this.contexts=new Re(this),this.packer=new Ee(this),this.realms=new Ce(this),this.serializer=new At(this)}},Ft=Te;return Ct(Ut);};