function y(){}function W(t,e){for(const n in e)t[n]=e[n];return t}function G(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function P(t){return t()}function M(){return Object.create(null)}function g(t){t.forEach(P)}function S(t){return typeof t=="function"}function _t(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let $;function dt(t,e){return $||($=document.createElement("a")),$.href=e,t===$.href}function J(t){return Object.keys(t).length===0}function B(t,...e){if(t==null)return y;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ht(t){let e;return B(t,n=>e=n)(),e}function mt(t,e,n){t.$$.on_destroy.push(B(e,n))}function pt(t,e,n,r){if(t){const c=H(t,e,n,r);return t[0](c)}}function H(t,e,n,r){return t[1]&&r?W(n.ctx.slice(),t[1](r(e))):n.ctx}function yt(t,e,n,r){if(t[2]&&r){const c=t[2](r(n));if(e.dirty===void 0)return c;if(typeof c=="object"){const s=[],u=Math.max(e.dirty.length,c.length);for(let o=0;o<u;o+=1)s[o]=e.dirty[o]|c[o];return s}return e.dirty|c}return e.dirty}function bt(t,e,n,r,c,s){if(c){const u=H(e,n,r,s);t.p(u,c)}}function gt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function xt(t){return t??""}function $t(t,e,n){return t.set(n),e}function vt(t){return t&&S(t.destroy)?t.destroy:y}let E=!1;function K(){E=!0}function Q(){E=!1}function U(t,e,n,r){for(;t<e;){const c=t+(e-t>>1);n(c)<=r?t=c+1:e=c}return t}function V(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const i=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&i.push(f)}e=i}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let c=0;for(let i=0;i<e.length;i++){const l=e[i].claim_order,f=(c>0&&e[n[c]].claim_order<=l?c+1:U(1,c,d=>e[n[d]].claim_order,l))-1;r[i]=n[f]+1;const a=f+1;n[a]=i,c=Math.max(a,c)}const s=[],u=[];let o=e.length-1;for(let i=n[c]+1;i!=0;i=r[i-1]){for(s.push(e[i-1]);o>=i;o--)u.push(e[o]);o--}for(;o>=0;o--)u.push(e[o]);s.reverse(),u.sort((i,l)=>i.claim_order-l.claim_order);for(let i=0,l=0;i<u.length;i++){for(;l<s.length&&u[i].claim_order>=s[l].claim_order;)l++;const f=l<s.length?s[l]:null;t.insertBefore(u[i],f)}}function X(t,e){if(E){for(V(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function kt(t,e,n){E&&!n?X(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function Y(t){t.parentNode&&t.parentNode.removeChild(t)}function Et(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function Z(t){return document.createElement(t)}function tt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function j(t){return document.createTextNode(t)}function wt(){return j(" ")}function Nt(){return j("")}function At(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function St(t){return function(e){return e.preventDefault(),t.call(this,e)}}function jt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ct(t){return t===""?null:+t}function et(t){return Array.from(t.childNodes)}function nt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function O(t,e,n,r,c=!1){nt(t);const s=(()=>{for(let u=t.claim_info.last_index;u<t.length;u++){const o=t[u];if(e(o)){const i=n(o);return i===void 0?t.splice(u,1):t[u]=i,c||(t.claim_info.last_index=u),o}}for(let u=t.claim_info.last_index-1;u>=0;u--){const o=t[u];if(e(o)){const i=n(o);return i===void 0?t.splice(u,1):t[u]=i,c?i===void 0&&t.claim_info.last_index--:t.claim_info.last_index=u,o}}return r()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function z(t,e,n,r){return O(t,c=>c.nodeName===e,c=>{const s=[];for(let u=0;u<c.attributes.length;u++){const o=c.attributes[u];n[o.name]||s.push(o.name)}s.forEach(u=>c.removeAttribute(u))},()=>r(e))}function Dt(t,e,n){return z(t,e,n,Z)}function Tt(t,e,n){return z(t,e,n,tt)}function rt(t,e){return O(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>j(e),!0)}function Mt(t){return rt(t," ")}function qt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Lt(t,e){t.value=e??""}function Pt(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function Bt(t,e){for(let n=0;n<t.options.length;n+=1){const r=t.options[n];if(r.__value===e){r.selected=!0;return}}t.selectedIndex=-1}function Ht(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function Ot(t,e,n){t.classList[n?"add":"remove"](e)}function ct(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const c=document.createEvent("CustomEvent");return c.initCustomEvent(t,n,r,e),c}function zt(t,e){const n=[];let r=0;for(const c of e.childNodes)if(c.nodeType===8){const s=c.textContent.trim();s===`HEAD_${t}_END`?(r-=1,n.push(c)):s===`HEAD_${t}_START`&&(r+=1,n.push(c))}else r>0&&n.push(c);return n}function Ft(t,e){return new t(e)}let b;function _(t){b=t}function x(){if(!b)throw new Error("Function called outside component initialization");return b}function It(t){x().$$.on_mount.push(t)}function Rt(t){x().$$.after_update.push(t)}function Wt(t){x().$$.on_destroy.push(t)}function Gt(){const t=x();return(e,n,{cancelable:r=!1}={})=>{const c=t.$$.callbacks[e];if(c){const s=ct(e,n,{cancelable:r});return c.slice().forEach(u=>{u.call(t,s)}),!s.defaultPrevented}return!0}}function Jt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(r=>r.call(this,e))}const p=[],q=[],v=[],L=[],F=Promise.resolve();let N=!1;function I(){N||(N=!0,F.then(C))}function Kt(){return I(),F}function A(t){v.push(t)}const w=new Set;let m=0;function C(){if(m!==0)return;const t=b;do{try{for(;m<p.length;){const e=p[m];m++,_(e),it(e.$$)}}catch(e){throw p.length=0,m=0,e}for(_(null),p.length=0,m=0;q.length;)q.pop()();for(let e=0;e<v.length;e+=1){const n=v[e];w.has(n)||(w.add(n),n())}v.length=0}while(p.length);for(;L.length;)L.pop()();N=!1,w.clear(),_(t)}function it(t){if(t.fragment!==null){t.update(),g(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}const k=new Set;let h;function ut(){h={r:0,c:[],p:h}}function st(){h.r||g(h.c),h=h.p}function R(t,e){t&&t.i&&(k.delete(t),t.i(e))}function lt(t,e,n,r){if(t&&t.o){if(k.has(t))return;k.add(t),h.c.push(()=>{k.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function Qt(t,e){const n=e.token={};function r(c,s,u,o){if(e.token!==n)return;e.resolved=o;let i=e.ctx;u!==void 0&&(i=i.slice(),i[u]=o);const l=c&&(e.current=c)(i);let f=!1;e.block&&(e.blocks?e.blocks.forEach((a,d)=>{d!==s&&a&&(ut(),lt(a,1,1,()=>{e.blocks[d]===a&&(e.blocks[d]=null)}),st())}):e.block.d(1),l.c(),R(l,1),l.m(e.mount(),e.anchor),f=!0),e.block=l,e.blocks&&(e.blocks[s]=l),f&&C()}if(G(t)){const c=x();if(t.then(s=>{_(c),r(e.then,1,e.value,s),_(null)},s=>{if(_(c),r(e.catch,2,e.error,s),_(null),!e.hasCatch)throw s}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}}function Ut(t,e,n){const r=e.slice(),{resolved:c}=t;t.current===t.then&&(r[t.value]=c),t.current===t.catch&&(r[t.error]=c),t.block.p(r,n)}function Vt(t,e){const n={},r={},c={$$scope:1};let s=t.length;for(;s--;){const u=t[s],o=e[s];if(o){for(const i in u)i in o||(r[i]=1);for(const i in o)c[i]||(n[i]=o[i],c[i]=1);t[s]=o}else for(const i in u)c[i]=1}for(const u in r)u in n||(n[u]=void 0);return n}function Xt(t){return typeof t=="object"&&t!==null?t:{}}function Yt(t){t&&t.c()}function Zt(t,e){t&&t.l(e)}function ot(t,e,n,r){const{fragment:c,after_update:s}=t.$$;c&&c.m(e,n),r||A(()=>{const u=t.$$.on_mount.map(P).filter(S);t.$$.on_destroy?t.$$.on_destroy.push(...u):g(u),t.$$.on_mount=[]}),s.forEach(A)}function at(t,e){const n=t.$$;n.fragment!==null&&(g(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ft(t,e){t.$$.dirty[0]===-1&&(p.push(t),I(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function te(t,e,n,r,c,s,u,o=[-1]){const i=b;_(t);const l=t.$$={fragment:null,ctx:[],props:s,update:y,not_equal:c,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(i?i.$$.context:[])),callbacks:M(),dirty:o,skip_bound:!1,root:e.target||i.$$.root};u&&u(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(a,d,...D)=>{const T=D.length?D[0]:d;return l.ctx&&c(l.ctx[a],l.ctx[a]=T)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](T),f&&ft(t,a)),d}):[],l.update(),f=!0,g(l.before_update),l.fragment=r?r(l.ctx):!1,e.target){if(e.hydrate){K();const a=et(e.target);l.fragment&&l.fragment.l(a),a.forEach(Y)}else l.fragment&&l.fragment.c();e.intro&&R(t.$$.fragment),ot(t,e.target,e.anchor,e.customElement),Q(),C()}_(i)}class ee{$destroy(){at(this,1),this.$destroy=y}$on(e,n){if(!S(n))return y;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const c=r.indexOf(n);c!==-1&&r.splice(c,1)}}$set(e){this.$$set&&!J(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{W as $,q as A,Ft as B,Yt as C,Zt as D,ot as E,at as F,tt as G,Tt as H,X as I,pt as J,dt as K,Ot as L,At as M,bt as N,gt as O,yt as P,mt as Q,Et as R,ee as S,zt as T,ht as U,xt as V,$t as W,Gt as X,Ct as Y,Lt as Z,Wt as _,_t as a,vt as a0,Vt as a1,Xt as a2,St as a3,Jt as a4,Qt as a5,Ut as a6,Ht as a7,A as a8,Bt as a9,te as b,wt as c,Mt as d,Nt as e,kt as f,lt as g,st as h,S as i,R as j,Y as k,Rt as l,Z as m,y as n,It as o,Dt as p,et as q,g as r,B as s,Kt as t,jt as u,Pt as v,j as w,rt as x,qt as y,ut as z};
