import{S as x,b as S,a as q,m as f,w as _,c as y,p as d,q as g,x as v,k as u,d as k,f as m,I as h,y as $,n as E,Q as w}from"../chunks/index.32c220d4.mjs";import{s as C}from"../chunks/singletons.6f04c7ca.mjs";const H=()=>{const s=C;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},I={subscribe(s){return H().page.subscribe(s)}};function P(s){var b;let t,r=s[0].status+"",o,n,i,p=((b=s[0].error)==null?void 0:b.message)+"",l;return{c(){t=f("h1"),o=_(r),n=y(),i=f("p"),l=_(p)},l(e){t=d(e,"H1",{});var a=g(t);o=v(a,r),a.forEach(u),n=k(e),i=d(e,"P",{});var c=g(i);l=v(c,p),c.forEach(u)},m(e,a){m(e,t,a),h(t,o),m(e,n,a),m(e,i,a),h(i,l)},p(e,[a]){var c;a&1&&r!==(r=e[0].status+"")&&$(o,r),a&1&&p!==(p=((c=e[0].error)==null?void 0:c.message)+"")&&$(l,p)},i:E,o:E,d(e){e&&u(t),e&&u(n),e&&u(i)}}}function Q(s,t,r){let o;return w(s,I,n=>r(0,o=n)),[o]}let A=class extends x{constructor(t){super(),S(this,t,Q,P,q,{})}};export{A as default};
