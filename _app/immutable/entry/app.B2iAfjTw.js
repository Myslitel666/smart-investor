const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.BNIlmVit.js","../chunks/disclose-version.Bqb9cK0V.js","../chunks/runtime.CpVUGZrz.js","../chunks/slot.D_2VAykz.js","../nodes/1.BE76A0I7.js","../chunks/render.CIZsnjnE.js","../chunks/lifecycle.CU1eN0yS.js","../chunks/index.XfKxseKx.js","../chunks/entry.ChlsHFOf.js","../nodes/2.BqiPEzDv.js","../chunks/index-client.B_h7GMVt.js","../assets/2.Clz7JHdT.css"])))=>i.map(i=>d[i]);
var F=n=>{throw TypeError(n)};var U=(n,e,r)=>e.has(n)||F("Cannot "+r);var l=(n,e,r)=>(U(n,e,"read from private field"),r?r.call(n):e.get(n)),A=(n,e,r)=>e.has(n)?F("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,r),C=(n,e,r,a)=>(U(n,e,"write to private field"),a?a.call(n,r):e.set(n,r),r);import{h as G,a as J,a0 as K,a5 as Q,P as X,a4 as Y,G as Z,g as v,l as k,an as M,y as $,m as ee,p as te,u as re,b as se,ao as ne,o as w,v as ae,ap as L,w as oe,k as T,c as ie,q as ce,r as le}from"../chunks/runtime.CpVUGZrz.js";import{h as ue,m as fe,u as de,s as me}from"../chunks/render.CIZsnjnE.js";import{a as P,t as W,c as O,d as he}from"../chunks/disclose-version.Bqb9cK0V.js";import{p as j,o as _e,a as ve,i as q,b as B}from"../chunks/index-client.B_h7GMVt.js";function D(n,e,r){G&&J();var a=n,o,c;K(()=>{o!==(o=e())&&(c&&(Y(c),c=null),o&&(c=X(()=>r(a,o))))},Q),G&&(a=Z)}function ge(n){return class extends ye{constructor(e){super({component:n,...e})}}}var g,f;class ye{constructor(e){A(this,g);A(this,f);var c;var r=new Map,a=(s,t)=>{var d=ee(t);return r.set(s,d),d};const o=new Proxy({...e.props||{},$$events:{}},{get(s,t){return v(r.get(t)??a(t,Reflect.get(s,t)))},has(s,t){return v(r.get(t)??a(t,Reflect.get(s,t))),Reflect.has(s,t)},set(s,t,d){return k(r.get(t)??a(t,d),d),Reflect.set(s,t,d)}});C(this,f,(e.hydrate?ue:fe)(e.component,{target:e.target,props:o,context:e.context,intro:e.intro??!1,recover:e.recover})),(!((c=e==null?void 0:e.props)!=null&&c.$$host)||e.sync===!1)&&M(),C(this,g,o.$$events);for(const s of Object.keys(l(this,f)))s==="$set"||s==="$destroy"||s==="$on"||$(this,s,{get(){return l(this,f)[s]},set(t){l(this,f)[s]=t},enumerable:!0});l(this,f).$set=s=>{Object.assign(o,s)},l(this,f).$destroy=()=>{de(l(this,f))}}$set(e){l(this,f).$set(e)}$on(e,r){l(this,g)[e]=l(this,g)[e]||[];const a=(...o)=>r.call(this,...o);return l(this,g)[e].push(a),()=>{l(this,g)[e]=l(this,g)[e].filter(o=>o!==a)}}$destroy(){l(this,f).$destroy()}}g=new WeakMap,f=new WeakMap;const be="modulepreload",Ee=function(n,e){return new URL(n,e).href},N={},I=function(e,r,a){let o=Promise.resolve();if(r&&r.length>0){const s=document.getElementsByTagName("link"),t=document.querySelector("meta[property=csp-nonce]"),d=(t==null?void 0:t.nonce)||(t==null?void 0:t.getAttribute("nonce"));o=Promise.allSettled(r.map(u=>{if(u=Ee(u,a),u in N)return;N[u]=!0;const y=u.endsWith(".css"),x=y?'[rel="stylesheet"]':"";if(!!a)for(let m=s.length-1;m>=0;m--){const _=s[m];if(_.href===u&&(!y||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${x}`))return;const i=document.createElement("link");if(i.rel=y?"stylesheet":be,y||(i.as="script"),i.crossOrigin="",i.href=u,d&&i.setAttribute("nonce",d),document.head.appendChild(i),y)return new Promise((m,_)=>{i.addEventListener("load",m),i.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${u}`)))})}))}function c(s){const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=s,window.dispatchEvent(t),!t.defaultPrevented)throw s}return o.then(s=>{for(const t of s||[])t.status==="rejected"&&c(t.reason);return e().catch(c)})},Te={};var Pe=W('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),Re=W("<!> <!>",1);function we(n,e){te(e,!0);let r=j(e,"components",23,()=>[]),a=j(e,"data_0",3,null),o=j(e,"data_1",3,null);re(()=>e.stores.page.set(e.page)),se(()=>{e.stores,e.page,e.constructors,r(),e.form,a(),o(),e.stores.page.notify()});let c=L(!1),s=L(!1),t=L(null);_e(()=>{const b=e.stores.page.subscribe(()=>{v(c)&&(k(s,!0),ne().then(()=>{k(t,ve(document.title||"untitled page"))}))});return k(c,!0),b});const d=T(()=>e.constructors[1]);var u=Re(),y=w(u);q(y,()=>e.constructors[1],b=>{var i=O();const m=T(()=>e.constructors[0]);var _=w(i);D(_,()=>v(m),(E,S)=>{B(S(E,{get data(){return a()},get form(){return e.form},children:(h,ke)=>{var V=O(),p=w(V);D(p,()=>v(d),(z,H)=>{B(H(z,{get data(){return o()},get form(){return e.form}}),R=>r()[1]=R,()=>{var R;return(R=r())==null?void 0:R[1]})}),P(h,V)},$$slots:{default:!0}}),h=>r()[0]=h,()=>{var h;return(h=r())==null?void 0:h[0]})}),P(b,i)},b=>{var i=O();const m=T(()=>e.constructors[0]);var _=w(i);D(_,()=>v(m),(E,S)=>{B(S(E,{get data(){return a()},get form(){return e.form}}),h=>r()[0]=h,()=>{var h;return(h=r())==null?void 0:h[0]})}),P(b,i)});var x=oe(y,2);q(x,()=>v(c),b=>{var i=Pe(),m=ie(i);q(m,()=>v(s),_=>{var E=he();ce(()=>me(E,v(t))),P(_,E)}),le(i),P(b,i)}),P(n,u),ae()}const Oe=ge(we),je=[()=>I(()=>import("../nodes/0.BNIlmVit.js"),__vite__mapDeps([0,1,2,3]),import.meta.url),()=>I(()=>import("../nodes/1.BE76A0I7.js"),__vite__mapDeps([4,1,2,5,6,7,8]),import.meta.url),()=>I(()=>import("../nodes/2.BqiPEzDv.js"),__vite__mapDeps([9,1,2,5,10,6,3,7,11]),import.meta.url)],qe=[],Be={"/":[2]},De={handleError:({error:n})=>{console.error(n)},reroute:()=>{}};export{Be as dictionary,De as hooks,Te as matchers,je as nodes,Oe as root,qe as server_loads};
