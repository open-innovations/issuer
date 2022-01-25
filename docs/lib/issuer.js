!function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,e){t.appendChild(e)}function s(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function l(t){return document.createElement(t)}function a(t){return document.createTextNode(t)}function f(){return a(" ")}function d(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function m(t,e){t.value=null==e?"":e}function h(t,e,n){t.classList[n?"add":"remove"](e)}let $;function b(t){$=t}function g(){if(!$)throw new Error("Function called outside component initialization");return $}const k=[],v=[],x=[],y=[],w=Promise.resolve();let _=!1;function C(t){x.push(t)}const E=new Set;let T=0;function j(){const t=$;do{for(;T<k.length;){const t=k[T];T++,b(t),S(t.$$)}for(b(null),k.length=0,T=0;v.length;)v.pop()();for(let t=0;t<x.length;t+=1){const e=x[t];E.has(e)||(E.add(e),e())}x.length=0}while(k.length);for(;y.length;)y.pop()();_=!1,E.clear(),b(t)}function S(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(C)}}const A=new Set;let N;function O(){N={r:0,c:[],p:N}}function P(){N.r||o(N.c),N=N.p}function z(t,e){t&&t.i&&(A.delete(t),t.i(e))}function L(t,e,n,o){if(t&&t.o){if(A.has(t))return;A.add(t),N.c.push((()=>{A.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function q(t,e){const n=e.token={};function o(t,o,r,c){if(e.token!==n)return;e.resolved=c;let i=e.ctx;void 0!==r&&(i=i.slice(),i[r]=c);const s=t&&(e.current=t)(i);let u=!1;e.block&&(e.blocks?e.blocks.forEach(((t,n)=>{n!==o&&t&&(O(),L(t,1,1,(()=>{e.blocks[n]===t&&(e.blocks[n]=null)})),P())})):e.block.d(1),s.c(),z(s,1),s.m(e.mount(),e.anchor),u=!0),e.block=s,e.blocks&&(e.blocks[o]=s),u&&j()}if((r=t)&&"object"==typeof r&&"function"==typeof r.then){const n=g();if(t.then((t=>{b(n),o(e.then,1,e.value,t),b(null)}),(t=>{if(b(n),o(e.catch,2,e.error,t),b(null),!e.hasCatch)throw t})),e.current!==e.pending)return o(e.pending,0),!0}else{if(e.current!==e.then)return o(e.then,1,e.value,t),!0;e.resolved=t}var r}function B(t){t&&t.c()}function F(t,n,c,i){const{fragment:s,on_mount:u,on_destroy:l,after_update:a}=t.$$;s&&s.m(n,c),i||C((()=>{const n=u.map(e).filter(r);l?l.push(...n):o(n),t.$$.on_mount=[]})),a.forEach(C)}function J(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function M(t,e){-1===t.$$.dirty[0]&&(k.push(t),_||(_=!0,w.then(j)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function R(e,r,c,i,s,l,a,f=[-1]){const d=$;b(e);const p=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(d?d.$$.context:[])),callbacks:n(),dirty:f,skip_bound:!1,root:r.target||d.$$.root};a&&a(p.root);let m=!1;if(p.ctx=c?c(e,r.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return p.ctx&&s(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),m&&M(e,t)),n})):[],p.update(),m=!0,o(p.before_update),p.fragment=!!i&&i(p.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);p.fragment&&p.fragment.l(t),t.forEach(u)}else p.fragment&&p.fragment.c();r.intro&&z(e.$$.fragment),F(e,r.target,r.anchor,r.customElement),j()}b(d)}class D{$destroy(){J(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function G(t){let e,n,o=(t[0].message||"There is an error")+"";return{c(){e=l("p"),n=a(o),p(e,"class","error error-message svelte-6ku5p3")},m(t,o){s(t,e,o),i(e,n)},p(t,e){1&e&&o!==(o=(t[0].message||"There is an error")+"")&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(n,o)},d(t){t&&u(e)}}}function H(e){let n,r,c,a,$,b,g,k,v,x,y,w,_,C,E,T,j,S=e[0]&&G(e);return{c(){S&&S.c(),n=f(),r=l("form"),c=l("div"),a=l("label"),a.textContent="Short description of the problem",$=f(),b=l("input"),g=f(),k=l("div"),v=l("label"),v.textContent="Additional details about the problem (optional)",x=f(),y=l("textarea"),w=f(),_=l("button"),_.textContent="Send us the problem",C=f(),E=l("button"),E.textContent="Clear the form",p(a,"for","f1"),p(a,"class","svelte-6ku5p3"),p(b,"id","f1"),p(b,"name","title"),p(b,"type","text"),p(b,"class","svelte-6ku5p3"),h(b,"error",e[0]&&e[0].fields.includes("title")),p(c,"class","form-row"),p(v,"for","f2"),p(v,"class","svelte-6ku5p3"),p(y,"id","f2"),p(y,"rows","10"),p(y,"name","description"),p(y,"class","svelte-6ku5p3"),p(k,"class","form-row"),p(_,"type","button"),p(E,"type","button")},m(t,o){S&&S.m(t,o),s(t,n,o),s(t,r,o),i(r,c),i(c,a),i(c,$),i(c,b),m(b,e[1]),i(r,g),i(r,k),i(k,v),i(k,x),i(k,y),m(y,e[2]),i(r,w),i(r,_),i(r,C),i(r,E),T||(j=[d(b,"input",e[6]),d(y,"input",e[7]),d(_,"click",e[3]),d(E,"click",e[4])],T=!0)},p(t,[e]){t[0]?S?S.p(t,e):(S=G(t),S.c(),S.m(n.parentNode,n)):S&&(S.d(1),S=null),2&e&&b.value!==t[1]&&m(b,t[1]),1&e&&h(b,"error",t[0]&&t[0].fields.includes("title")),4&e&&m(y,t[2])},i:t,o:t,d(t){S&&S.d(t),t&&u(n),t&&u(r),T=!1,o(j)}}}function I(t,e,n){let o,r,{submit:c}=e,{error:i}=e;return t.$$set=t=>{"submit"in t&&n(5,c=t.submit),"error"in t&&n(0,i=t.error)},[i,o,r,()=>c({title:o,description:r}),()=>{n(0,i=void 0),n(1,o=void 0),n(2,r=void 0)},c,function(){o=this.value,n(1,o)},function(){r=this.value,n(2,r)}]}class K extends D{constructor(t){super(),R(this,t,I,H,c,{submit:5,error:0})}}function Q(e){let n,o,c,i,a;return{c(){n=l("p"),n.textContent="Thank you for your feedback!",o=f(),c=l("button"),c.textContent="Reset form"},m(t,u){s(t,n,u),s(t,o,u),s(t,c,u),i||(a=d(c,"click",(function(){r(e[0])&&e[0].apply(this,arguments)})),i=!0)},p(t,[n]){e=t},i:t,o:t,d(t){t&&u(n),t&&u(o),t&&u(c),i=!1,a()}}}function U(t,e,n){let{reset:o}=e;return t.$$set=t=>{"reset"in t&&n(0,o=t.reset)},[o]}class V extends D{constructor(t){super(),R(this,t,U,Q,c,{reset:0})}}function W(t){let e,n,o,r={ctx:t,current:null,token:null,hasCatch:!0,pending:tt,then:Z,catch:Y,error:9,blocks:[,,,]};return q(n=t[0],r),{c(){e=a(""),r.block.c()},m(t,n){s(t,e,n),r.block.m(t,r.anchor=n),r.mount=()=>e.parentNode,r.anchor=e,o=!0},p(e,o){t=e,r.ctx=t,1&o&&n!==(n=t[0])&&q(n,r)||function(t,e,n){const o=e.slice(),{resolved:r}=t;t.current===t.then&&(o[t.value]=r),t.current===t.catch&&(o[t.error]=r),t.block.p(o,n)}(r,t,o)},i(t){o||(z(r.block),o=!0)},o(t){for(let t=0;t<3;t+=1){L(r.blocks[t])}o=!1},d(t){t&&u(e),r.block.d(t),r.token=null,r=null}}}function X(e){let n,o;return n=new K({props:{submit:e[2]}}),{c(){B(n.$$.fragment)},m(t,e){F(n,t,e),o=!0},p:t,i(t){o||(z(n.$$.fragment,t),o=!0)},o(t){L(n.$$.fragment,t),o=!1},d(t){J(n,t)}}}function Y(t){let e,n;return e=new K({props:{error:t[9],submit:t[2]}}),{c(){B(e.$$.fragment)},m(t,o){F(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.error=t[9]),e.$set(o)},i(t){n||(z(e.$$.fragment,t),n=!0)},o(t){L(e.$$.fragment,t),n=!1},d(t){J(e,t)}}}function Z(t){let e,n;return e=new V({props:{reset:t[7]}}),{c(){B(e.$$.fragment)},m(t,o){F(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.reset=t[7]),e.$set(o)},i(t){n||(z(e.$$.fragment,t),n=!0)},o(t){L(e.$$.fragment,t),n=!1},d(t){J(e,t)}}}function tt(e){let n;return{c(){n=l("p"),n.textContent="Sumitting your feedback. Please wait!"},m(t,e){s(t,n,e)},p:t,i:t,o:t,d(t){t&&u(n)}}}function et(t){let e,n,o,r,c,a,m,$,b;const g=[X,W],k=[];function v(t,e){return t[0]?1:0}return c=v(t),a=k[c]=g[c](t),{c(){e=l("div"),n=l("h1"),n.textContent="Tell us about a problem",o=f(),r=l("div"),a.c(),p(n,"class","svelte-i77z9p"),p(r,"class","form svelte-i77z9p"),h(r,"hide",t[1]),p(e,"class","issuer")},m(u,l){s(u,e,l),i(e,n),i(e,o),i(e,r),k[c].m(r,null),m=!0,$||(b=d(n,"click",t[3]),$=!0)},p(t,[e]){let n=c;c=v(t),c===n?k[c].p(t,e):(O(),L(k[n],1,1,(()=>{k[n]=null})),P(),a=k[c],a?a.p(t,e):(a=k[c]=g[c](t),a.c()),z(a,1),a.m(r,null)),2&e&&h(r,"hide",t[1])},i(t){m||(z(a),m=!0)},o(t){L(a),m=!1},d(t){t&&u(e),k[c].d(),$=!1,b()}}}function nt(t,e,n){let{endpoint:o}=e,{owner:r}=e,{repo:c}=e;const i=`${o}?org=${r}&repo=${c}`;let s,u=!0;return t.$$set=t=>{"endpoint"in t&&n(4,o=t.endpoint),"owner"in t&&n(5,r=t.owner),"repo"in t&&n(6,c=t.repo)},[s,u,function(t){const{title:e}=t;if(e)n(0,s=fetch(i,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}));else{const t={message:"Please provide a title",fields:"title"};n(0,s=Promise.reject(t))}},function(){n(1,u=!u)},o,r,c,()=>n(0,s=void 0)]}class ot extends D{constructor(t){super(),R(this,t,nt,et,c,{endpoint:4,owner:5,repo:6})}}window.oi||(window.oi={}),window.oi.issuer=(t={})=>{const{target:e,owner:n="open-innovations",repo:o,endpoint:r}=t;new ot({target:e,props:{endpoint:r,owner:n,repo:o}})}}();
//# sourceMappingURL=issuer.js.map
