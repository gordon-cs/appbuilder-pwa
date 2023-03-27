import{S as We,b as qe,a as De,a5 as _e,m as y,C as me,c as $,w as R,e as z,p as k,q as C,D as ge,k as h,d as x,x as V,u as b,f as w,E as be,I as g,Z as ye,M as J,a3 as Ne,y as N,a6 as Ae,j as ke,g as Se,F as Ce,r as Ke,Q as Fe,R as Me,n as j}from"../chunks/index.32c220d4.mjs";import{d as Ge,r as Ue,b as Je}from"../chunks/view.ee6692fe.mjs";import{S as ze}from"../chunks/SearchIcon.b30f0748.mjs";import{N as He}from"../chunks/Navbar.4ad1e9c7.mjs";const Ee=async(r,e)=>{const t=await(await fetch("/data/proskomma",{method:"POST",body:JSON.stringify({query:Ze(r)}),headers:{"content-type":"application/json",accept:"application/json"}})).json();return e&&e(t),t};function Ze(r){return r.replace(/\n/g," ").replace(/([^\w])(\s+)/g,"$1")}var D={},Z={},X={};Object.defineProperty(X,"__esModule",{value:!0});X.default=void 0;var Xe=r=>{var{cv:e}=r;return`{
    nDocSets nDocuments
    docSets {
      id
      tagsKv { key value }
      selectors { key value }
      hasMapping
      documents (
        sortedBy: "paratext"
      ) {
        id
        bookCode: header(id:"bookCode")
        h: header(id:"h")
        toc: header(id:"toc")
        toc2: header(id:"toc2")
        toc3: header(id:"toc3")`.concat(e?`
    cvNumbers: cvIndexes {
      chapter
      verses: verseNumbers {
        number
        range
      }
    }
  `:"",`
      }
    }
  }`)},Ye=Xe;X.default=Ye;var Y={},F={};Object.defineProperty(F,"__esModule",{value:!0});F.searchTermsRegex=F.searchTermsClause=F.searchTerms=F.parseReferenceString=F.default=F.attTermsClause=void 0;function ue(){ue=function(o,n){return new a(o,void 0,n)};var r=RegExp.prototype,e=new WeakMap;function a(s,o,n){var c=new RegExp(s,o);return e.set(c,n||e.get(s)),H(c,a.prototype)}function t(s,o){var n=e.get(o);return Object.keys(n).reduce(function(c,l){return c[l]=s[n[l]],c},Object.create(null))}return er(a,RegExp),a.prototype.exec=function(s){var o=r.exec.call(this,s);return o&&(o.groups=t(o,this)),o},a.prototype[Symbol.replace]=function(s,o){if(typeof o=="string"){var n=e.get(this);return r[Symbol.replace].call(this,s,o.replace(/\$<([^>]+)>/g,function(l,i){return"$"+n[i]}))}if(typeof o=="function"){var c=this;return r[Symbol.replace].call(this,s,function(){var l=arguments;return typeof l[l.length-1]!="object"&&(l=[].slice.call(l)).push(t(l,c)),o.apply(this,l)})}return r[Symbol.replace].call(this,s,o)},ue.apply(this,arguments)}function er(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),Object.defineProperty(r,"prototype",{writable:!1}),e&&H(r,e)}function H(r,e){return H=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,s){return t.__proto__=s,t},H(r,e)}var ee=r=>r.split(/ +/).map(e=>e.trim()).filter(e=>e.length>0).filter(e=>!e.includes(":"));F.searchTerms=ee;var Re=r=>ee(r).map(e=>'"'.concat(e.toLowerCase(),'"')).join(", ");F.searchTermsClause=Re;var Ve=r=>r.split(/ +/).map(e=>e.trim()).filter(e=>e.length>0).filter(e=>e.includes(":")).map(e=>e.split(":").slice(0,2)).map(e=>{var a=e[0].startsWith("x-"),t=a?"milestone":"spanWithAtts",s=a?"zaln":"w";return'"""attribute/'.concat(t,"/").concat(s,"/").concat(e[0],"/0/").concat(e[1],'"""')}).join(", ");F.attTermsClause=Ve;var Be=r=>{var e=ee(r),a="xxxxx";return e.length>0&&(a=e.map(t=>"(".concat(t,")")).join("|")),a};F.searchTermsRegex=Be;var Le=r=>{var e={},a=ue(/([\d\w]\w{2}) ((\d+):?([\d-]*))/,{bookCode:1,cv:2,c:3,v:4}),{bookCode:t,cv:s,c:o,v:n}=r.match(a).groups||{};return e.bookCode=t,s.includes(":")&&n?e.chapterVerses=s:o&&!n&&(e.chapter=o),e};F.parseReferenceString=Le;var rr={searchTerms:ee,searchTermsClause:Re,attTermsClause:Ve,searchTermsRegex:Be,parseReferenceString:Le},tr=rr;F.default=tr;Object.defineProperty(Y,"__esModule",{value:!0});Y.default=void 0;var ar=F,sr=r=>{var{reference:e,bookCode:a,chapterVerses:t,chapter:s}=r,o,n=a,c=t,l=s;if(e){var i=(0,ar.parseReferenceString)(e);n=i.bookCode,c=i.chapterVerses,l=i.chapter}var d=or({bookCode:n}),u=c?nr({chapterVerses:c}):lr({bookCode:n,chapter:l});return o=`{
      `.concat(d,` {
        docSetId
        cv ( `).concat(u,` ) { scopeLabels text }
      }
    }`),o},or=r=>{var{bookCode:e}=r;return'documents ( withBook: "'.concat(e,'" )')},nr=r=>{var{chapterVerses:e}=r;return'chapterVerses: "'.concat(e,'"')},lr=r=>{var{chapter:e}=r;return'chapter: "'.concat(e,'"')},cr=sr;Y.default=cr;var re={};Object.defineProperty(re,"__esModule",{value:!0});re.default=void 0;var Pe=F,ir=r=>{var{text:e,docSetId:a}=r,t=(0,Pe.searchTermsClause)(e),s=(0,Pe.attTermsClause)(e),o='sortedBy: "paratext"',n=`{
    docSet( id:"`.concat(a,`" ) {
      documents(`)+o+`
        allChars: true
        withMatchingChars: [`.concat(t,`]
`).concat(s.length>0?"        withScopes: [".concat(s,`]
        allScopes: true
`):"",`      ) {
        bookCode: header( id:"bookCode" ) 
      }
    }
  }`);return n},ur=ir;re.default=ur;var te={};Object.defineProperty(te,"__esModule",{value:!0});te.default=void 0;var ie=F,dr=r=>{var{text:e,docSetId:a,bookCode:t,blocks:s=!1,tokens:o=!1}=r,n=(0,ie.searchTermsClause)(e),c=(0,ie.attTermsClause)(e),l=(0,ie.searchTermsRegex)(e),i=o?`tokens {
                subType
                payload
                scopes(
                    startsWith:[
                    "attribute/spanWithAtts/w/"
                    "attribute/milestone/zaln/"
                    ]
                )
                }
    `:"",d=`mainSequence {
            blocks(
            allChars : true
            withMatchingChars: [`.concat(n,`]
            withScopes: [`).concat(c,`]
            ) {
            scopeLabels(startsWith:["chapter/", "verse/"])
            itemGroups(byScopes:["chapter/", "verses/"]) {
                scopeLabels(startsWith:["verses/"])
                text
                `).concat(i,`          }
            }
        }`),u=`cvMatching(
            allChars : true
            allScopes : true
            withMatchingChars: [`.concat(n,`]
            withScopes: [`).concat(c,`]
        ) {
            scopeLabels(startsWith:["chapter/", "verse/"])
            text
            `).concat(i,"      }"),v=s?d:u,p=`{
    docSet(id:"`.concat(a,`") {
        id
        document(
        bookCode:"`).concat(t==null?void 0:t.toUpperCase(),`" 
        ) {
        id
        bookCode: header(id: "bookCode")
        `).concat(v,`
        }
        matches: enumRegexIndexesForString (enumType:"wordLike" searchRegex:"`).concat(l,`") { matched }
    }
    }`);return p},vr=dr;te.default=vr;Object.defineProperty(Z,"__esModule",{value:!0});Z.default=void 0;var pr=ae(X),hr=ae(Y),fr=ae(re),_r=ae(te);function ae(r){return r&&r.__esModule?r:{default:r}}var mr={catalogQuery:pr.default,passageQuery:hr.default,searchForBookCodesQuery:fr.default,searchForPassagesQuery:_r.default},gr=mr;Z.default=gr;var se={},oe={};Object.defineProperty(oe,"__esModule",{value:!0});oe.default=void 0;var br=r=>{var{docSets:e}=r,a=(e==null?void 0:e.length)>0?JSON.parse(JSON.stringify(e)):[];return a==null||a.forEach(t=>{var s,o;if(t!=null&&(s=t.selectors)!==null&&s!==void 0&&s.forEach){var n={};t.selectors.forEach(l=>{var{key:i,value:d}=l;n[i]=d}),t.selectors=n}if(t!=null&&(o=t.tagsKv)!==null&&o!==void 0&&o.forEach){var c={};t.tagsKv.forEach(l=>{var{key:i,value:d}=l;c[i]=d}),delete t.tagsKv,t.tags=c}t.documents.forEach(l=>{if(l!=null&&l.cvNumbers){var i,d={};l==null||(i=l.cvNumbers)===null||i===void 0||i.forEach(u=>{var{chapter:v,verses:p}=u,f={};p.forEach(E=>{var{number:_,range:I}=E;f[_]=I}),d[v]=f}),delete l.cvNumbers,l.versesByChapters=d}})}),a},yr=br;oe.default=yr;var Q={};Object.defineProperty(Q,"__esModule",{value:!0});Q.parseScopeLabels=Q.parsePassageResponse=void 0;var kr=r=>{var{bookCode:e,data:a}=r,t=[];return a.documents.forEach(s=>{s.cv.forEach(o=>{var{scopeLabels:n,text:c}=o,{chapter:l,verse:i}=je({scopeLabels:n}),d=i?":".concat(i):"",u={docSetId:s.docSetId,reference:"".concat(e," ").concat(l).concat(d),text:c};t=[...t,u]})}),t};Q.parsePassageResponse=kr;var je=r=>{var{scopeLabels:e}=r,a=e==null?void 0:e.filter(o=>o.startsWith("chapter"))[0].split("/")[1],t=e==null?void 0:e.filter(o=>o.startsWith("verse")).map(o=>o.split("/")[1]),s=t[t.length-1];return{chapter:a,verse:s}};Q.parseScopeLabels=je;var ne={};Object.defineProperty(ne,"__esModule",{value:!0});ne.default=void 0;var Sr=r=>{var{data:e}=r,a=[];if(e&&e.docSet&&e.docSet.documents){var t,s;a=e==null||(t=e.docSet)===null||t===void 0||(s=t.documents)===null||s===void 0?void 0:s.map(o=>o.bookCode)}return a},Cr=Sr;ne.default=Cr;var W={};Object.defineProperty(W,"__esModule",{value:!0});W.searchForVersesFilter=W.searchForBlocksFilter=void 0;var Fr=r=>{var e,a,t,s,{data:o}=r,n=[];return n=o==null||(e=o.docSet)===null||e===void 0||(a=e.document)===null||a===void 0||(t=a.mainSequence)===null||t===void 0||(s=t.blocks)===null||s===void 0?void 0:s.map(c=>{var l=o.docSet.id,i=o.docSet.document.bookCode,d=c.scopeLabels.filter(_=>_.startsWith("chapter"))[0].split("/")[1],u=c.scopeLabels.filter(_=>_.startsWith("verse")).map(_=>_.split("/")[1]).map(_=>parseInt(_)),v=u.length>1?"".concat(u[0],"-").concat(u[u.length-1]):u[0],p="".concat(i," ").concat(d,":").concat(v),f=c.itemGroups,E=f.map(_=>_.text).join(" ");return{docSetId:l,reference:p,text:E}}),n};W.searchForBlocksFilter=Fr;var Er=r=>{var e,a,t,{data:s}=r,o=[];return o=s==null||(e=s.docSet)===null||e===void 0||(a=e.document)===null||a===void 0||(t=a.cvMatching)===null||t===void 0?void 0:t.map(n=>{var c=s.docSet.id,l=s.docSet.document.bookCode,i=n.scopeLabels.filter(f=>f.startsWith("chapter"))[0].split("/")[1],d=n.scopeLabels.filter(f=>f.startsWith("verse")).map(f=>f.split("/")[1]).map(f=>parseInt(f)),u=d.length>1?"".concat(d[0],"-").concat(d[d.length-1]):d[0],v="".concat(l," ").concat(i,":").concat(u),p=n.text;return{docSetId:c,reference:v,text:p}}),o};W.searchForVersesFilter=Er;Object.defineProperty(se,"__esModule",{value:!0});se.default=void 0;var Pr=Qe(oe),we=Q,wr=Qe(ne),$e=W;function Qe(r){return r&&r.__esModule?r:{default:r}}var $r={parseChapterVerseMapInDocSets:Pr.default,parsePassageResponse:we.parsePassageResponse,parseScopeLabels:we.parseScopeLabels,searchForBlocksFilter:$e.searchForBlocksFilter,searchForBookCodesFilter:wr.default,searchForVersesFilter:$e.searchForVersesFilter},xr=$r;se.default=xr;(function(r){Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"postQueries",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(r,"preQueries",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(r,"queries",{enumerable:!0,get:function(){return e.default}});var e=s(Z),a=s(F),t=s(se);function s(o){return o&&o.__esModule?o:{default:o}}})(D);function xe(r,e,a){const t=r.slice();return t[14]=e[a],t}function Oe(r,e,a){const t=r.slice();return t[17]=e[a],t}function Or(r){let e,a,t=r[4].Search+"",s;return{c(){e=y("label"),a=y("div"),s=R(t),this.h()},l(o){e=k(o,"LABEL",{for:!0,slot:!0});var n=C(e);a=k(n,"DIV",{class:!0});var c=C(a);s=V(c,t),c.forEach(h),n.forEach(h),this.h()},h(){b(a,"class","btn btn-ghost normal-case text-xl"),b(e,"for","sidebar"),b(e,"slot","center")},m(o,n){w(o,e,n),g(e,a),g(a,s)},p(o,n){n&16&&t!==(t=o[4].Search+"")&&N(s,t)},d(o){o&&h(e)}}}function Tr(r){let e,a,t,s,o,n,c=r[5],l=[];for(let i=0;i<c.length;i+=1)l[i]=Te(Oe(r,c,i));return{c(){e=y("div"),a=y("div"),t=y("div"),s=R("Special characters"),o=$(),n=y("div");for(let i=0;i<l.length;i+=1)l[i].c();this.h()},l(i){e=k(i,"DIV",{class:!0});var d=C(e);a=k(d,"DIV",{class:!0});var u=C(a);t=k(u,"DIV",{class:!0});var v=C(t);s=V(v,"Special characters"),v.forEach(h),o=x(u),n=k(u,"DIV",{class:!0});var p=C(n);for(let f=0;f<l.length;f+=1)l[f].l(p);p.forEach(h),u.forEach(h),d.forEach(h),this.h()},h(){b(t,"class",""),b(n,"class","special-characters svelte-181lpq9"),b(a,"class","cursor-pointer"),b(e,"class","dy-form-control")},m(i,d){w(i,e,d),g(e,a),g(a,t),g(t,s),g(a,o),g(a,n);for(let u=0;u<l.length;u+=1)l[u].m(n,null)},p(i,d){if(d&33){c=i[5];let u;for(u=0;u<c.length;u+=1){const v=Oe(i,c,u);l[u]?l[u].p(v,d):(l[u]=Te(v),l[u].c(),l[u].m(n,null))}for(;u<l.length;u+=1)l[u].d(1);l.length=c.length}},d(i){i&&h(e),Me(l,i)}}}function Te(r){let e,a=r[17]+"",t,s,o,n;function c(){return r[10](r[17])}return{c(){e=y("div"),t=R(a),s=$(),this.h()},l(l){e=k(l,"DIV",{class:!0});var i=C(e);t=V(i,a),s=x(i),i.forEach(h),this.h()},h(){b(e,"class","special-character bg-primary svelte-181lpq9")},m(l,i){w(l,e,i),g(e,t),g(e,s),o||(n=J(e,"click",c),o=!0)},p(l,i){r=l},d(l){l&&h(e),o=!1,n()}}}function Ir(r){return{c:j,l:j,m:j,p:j,d:j}}function Mr(r){let e,a=r[2],t=[];for(let s=0;s<a.length;s+=1)t[s]=Ie(xe(r,a,s));return{c(){for(let s=0;s<t.length;s+=1)t[s].c();e=z()},l(s){for(let o=0;o<t.length;o+=1)t[o].l(s);e=z()},m(s,o){for(let n=0;n<t.length;n+=1)t[n].m(s,o);w(s,e,o)},p(s,o){if(o&4){a=s[2];let n;for(n=0;n<a.length;n+=1){const c=xe(s,a,n);t[n]?t[n].p(c,o):(t[n]=Ie(c),t[n].c(),t[n].m(e.parentNode,e))}for(;n<t.length;n+=1)t[n].d(1);t.length=a.length}},d(s){Me(t,s),s&&h(e)}}}function Ie(r){let e,a=r[14].reference+"",t,s,o,n=r[14].docSetId+"",c,l,i,d=r[14].text+"",u;return{c(){e=y("h2"),t=R(a),s=$(),o=y("i"),c=R(n),l=$(),i=y("p"),u=R(d)},l(v){e=k(v,"H2",{});var p=C(e);t=V(p,a),s=x(p),o=k(p,"I",{});var f=C(o);c=V(f,n),f.forEach(h),p.forEach(h),l=x(v),i=k(v,"P",{});var E=C(i);u=V(E,d),E.forEach(h)},m(v,p){w(v,e,p),g(e,t),g(e,s),g(e,o),g(o,c),w(v,l,p),w(v,i,p),g(i,u)},p(v,p){p&4&&a!==(a=v[14].reference+"")&&N(t,a),p&4&&n!==(n=v[14].docSetId+"")&&N(c,n),p&4&&d!==(d=v[14].text+"")&&N(u,d)},d(v){v&&h(e),v&&h(l),v&&h(i)}}}function Rr(r){let e;return{c(){e=R("searching . . .")},l(a){e=V(a,"searching . . .")},m(a,t){w(a,e,t)},p:j,d(a){a&&h(e)}}}function Vr(r){let e,a,t,s,o,n,c,l,i,d,u,v,p,f,E,_=r[4].Search_Match_Whole_Words+"",I,q,M,le,A,B,K,L,ce,de;a=new He({props:{$$slots:{center:[Or]},$$scope:{ctx:r}}}),u=new ze({});let O=r[5].length>0&&Tr(r),P={ctx:r,current:null,token:null,hasCatch:!1,pending:Rr,then:Mr,catch:Ir,value:13};return _e(K=r[3],P),{c(){e=y("div"),me(a.$$.fragment),t=$(),s=y("form"),o=y("div"),n=y("label"),c=y("input"),i=$(),d=y("button"),me(u.$$.fragment),v=$(),p=y("div"),f=y("label"),E=y("span"),I=R(_),q=$(),M=y("input"),le=$(),O&&O.c(),A=$(),B=z(),P.block.c(),this.h()},l(m){e=k(m,"DIV",{class:!0});var S=C(e);ge(a.$$.fragment,S),S.forEach(h),t=x(m),s=k(m,"FORM",{});var T=C(s);o=k(T,"DIV",{class:!0});var ve=C(o);n=k(ve,"LABEL",{class:!0});var G=C(n);c=k(G,"INPUT",{type:!0,placeholder:!0,class:!0}),i=x(G),d=k(G,"BUTTON",{class:!0});var pe=C(d);ge(u.$$.fragment,pe),pe.forEach(h),G.forEach(h),ve.forEach(h),v=x(T),p=k(T,"DIV",{class:!0});var he=C(p);f=k(he,"LABEL",{class:!0});var U=C(f);E=k(U,"SPAN",{class:!0});var fe=C(E);I=V(fe,_),fe.forEach(h),q=x(U),M=k(U,"INPUT",{type:!0,class:!0}),U.forEach(h),he.forEach(h),le=x(T),O&&O.l(T),T.forEach(h),A=x(m),B=z(),P.block.l(m),this.h()},h(){b(e,"class","navbar svelte-181lpq9"),c.autofocus=!0,b(c,"type","text"),b(c,"placeholder",l=r[4].Search),b(c,"class","dy-input dy-input-bordered"),b(d,"class","dy-btn"),b(n,"class","dy-input-group"),b(o,"class","dy-form-control m-4"),b(E,"class","dy-label-text"),b(M,"type","checkbox"),b(M,"class","dy-toggle"),b(f,"class","dy-label cursor-pointer"),b(p,"class","dy-form-control w-full max-w-xs m-4")},m(m,S){w(m,e,S),be(a,e,null),w(m,t,S),w(m,s,S),g(s,o),g(o,n),g(n,c),ye(c,r[0]),g(n,i),g(n,d),be(u,d,null),g(s,v),g(s,p),g(p,f),g(f,E),g(E,I),g(f,q),g(f,M),M.checked=r[1],g(s,le),O&&O.m(s,null),w(m,A,S),w(m,B,S),P.block.m(m,P.anchor=S),P.mount=()=>B.parentNode,P.anchor=B,L=!0,c.focus(),ce||(de=[J(c,"input",r[8]),J(d,"click",Ne(r[6])),J(M,"change",r[9])],ce=!0)},p(m,[S]){r=m;const T={};S&1048592&&(T.$$scope={dirty:S,ctx:r}),a.$set(T),(!L||S&16&&l!==(l=r[4].Search))&&b(c,"placeholder",l),S&1&&c.value!==r[0]&&ye(c,r[0]),(!L||S&16)&&_!==(_=r[4].Search_Match_Whole_Words+"")&&N(I,_),S&2&&(M.checked=r[1]),r[5].length>0&&O.p(r,S),P.ctx=r,S&8&&K!==(K=r[3])&&_e(K,P)||Ae(P,r,S)},i(m){L||(ke(a.$$.fragment,m),ke(u.$$.fragment,m),L=!0)},o(m){Se(a.$$.fragment,m),Se(u.$$.fragment,m),L=!1},d(m){m&&h(e),Ce(a),m&&h(t),m&&h(s),Ce(u),O&&O.d(),m&&h(A),m&&h(B),P.block.d(m),P.token=null,P=null,ce=!1,Ke(de)}}}function Br(r,e,a){let t,s,o;Fe(r,Ue,_=>a(11,s=_)),Fe(r,Je,_=>a(4,o=_));let n="",c=!0;const l=Ge.mainFeatures["input-buttons"].split(" ").filter(_=>_!=="");function i(){a(7,d=!0),console.log("search: "+n+`
match whole words: `+c)}let d=!1,u=[];async function v(_=!1){if(!_)return;if(n===""){a(7,d=!1);return}const I=D.postQueries.searchForBookCodesFilter({data:(await Ee(D.queries.searchForBookCodesQuery({text:n,docSetId:s.docSet}))).data});a(2,u=[]);for(const q of I)a(2,u=u.concat(D.postQueries.searchForVersesFilter({data:(await Ee(D.queries.searchForPassagesQuery({text:n,docSetId:s.docSet,bookCode:q}))).data})));console.log(u.length),a(7,d=!1)}function p(){n=this.value,a(0,n)}function f(){c=this.checked,a(1,c)}const E=_=>a(0,n+=_);return r.$$.update=()=>{r.$$.dirty&128&&a(3,t=v(d))},[n,c,u,t,o,l,i,d,p,f,E]}class qr extends We{constructor(e){super(),qe(this,e,Br,Vr,De,{})}}export{qr as default};
