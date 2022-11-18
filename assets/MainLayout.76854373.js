import{c as T,h as N,a as Z,b as D,g as ee,d as te}from"./dom.0f1bc514.js";import{c as f,h,r as y,i as K,o as P,a as E,n as X,b as A,g as R,l as F,e as L,w as x,d as Y,f as M,p as G,j as oe,k as Q,m as ne,q as ie,s as le,t as _,u as $,v as re,x as ae}from"./index.ce2df5b1.js";var se=T({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:s}){const o=f(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>h("div",{class:o.value},N(s.default))}}),ue=T({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:s}){const o=f(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>h("div",{class:o.value,role:"toolbar"},N(s.default))}});function ce(){const e=y(!K.value);return e.value===!1&&P(()=>{e.value=!0}),e}const J=typeof ResizeObserver!="undefined",U=J===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var W=T({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:s}){let o=null,t,i={width:-1,height:-1};function u(a){a===!0||e.debounce===0||e.debounce==="0"?c():o===null&&(o=setTimeout(c,e.debounce))}function c(){if(clearTimeout(o),o=null,t){const{offsetWidth:a,offsetHeight:l}=t;(a!==i.width||l!==i.height)&&(i={width:a,height:l},s("resize",i))}}const{proxy:m}=R();if(J===!0){let a;const l=g=>{t=m.$el.parentNode,t?(a=new ResizeObserver(u),a.observe(t),c()):g!==!0&&A(()=>{l(!0)})};return P(()=>{l()}),E(()=>{clearTimeout(o),a!==void 0&&(a.disconnect!==void 0?a.disconnect():t&&a.unobserve(t))}),X}else{let g=function(){clearTimeout(o),l!==void 0&&(l.removeEventListener!==void 0&&l.removeEventListener("resize",u,F.passive),l=void 0)},p=function(){g(),t&&t.contentDocument&&(l=t.contentDocument.defaultView,l.addEventListener("resize",u,F.passive),c())};const a=ce();let l;return P(()=>{A(()=>{t=m.$el,t&&p()})}),E(g),m.trigger=u,()=>{if(a.value===!0)return h("object",{style:U.style,tabindex:-1,type:"text/html",data:U.url,"aria-hidden":"true",onLoad:p})}}}}),de=T({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:s,emit:o}){const{proxy:{$q:t}}=R(),i=Y(M,L);if(i===L)return console.error("QHeader needs to be child of QLayout"),L;const u=y(parseInt(e.heightHint,10)),c=y(!0),m=f(()=>e.reveal===!0||i.view.value.indexOf("H")>-1||t.platform.is.ios&&i.isContainer.value===!0),a=f(()=>{if(e.modelValue!==!0)return 0;if(m.value===!0)return c.value===!0?u.value:0;const n=u.value-i.scroll.value.position;return n>0?n:0}),l=f(()=>e.modelValue!==!0||m.value===!0&&c.value!==!0),g=f(()=>e.modelValue===!0&&l.value===!0&&e.reveal===!0),p=f(()=>"q-header q-layout__section--marginal "+(m.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(l.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),z=f(()=>{const n=i.rows.value.top,b={};return n[0]==="l"&&i.left.space===!0&&(b[t.lang.rtl===!0?"right":"left"]=`${i.left.size}px`),n[2]==="r"&&i.right.space===!0&&(b[t.lang.rtl===!0?"left":"right"]=`${i.right.size}px`),b});function d(n,b){i.update("header",n,b)}function w(n,b){n.value!==b&&(n.value=b)}function O({height:n}){w(u,n),d("size",n)}function V(n){g.value===!0&&w(c,!0),o("focusin",n)}x(()=>e.modelValue,n=>{d("space",n),w(c,!0),i.animate()}),x(a,n=>{d("offset",n)}),x(()=>e.reveal,n=>{n===!1&&w(c,e.modelValue)}),x(c,n=>{i.animate(),o("reveal",n)}),x(i.scroll,n=>{e.reveal===!0&&w(c,n.direction==="up"||n.position<=e.revealOffset||n.position-n.inflectionPoint<100)});const q={};return i.instances.header=q,e.modelValue===!0&&d("size",u.value),d("space",e.modelValue),d("offset",a.value),E(()=>{i.instances.header===q&&(i.instances.header=void 0,d("size",0),d("offset",0),d("space",!1))}),()=>{const n=Z(s.default,[]);return e.elevated===!0&&n.push(h("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),n.push(h(W,{debounce:0,onResize:O})),h("header",{class:p.value,style:z.value,onFocusin:V},n)}}}),fe=T({name:"QPageContainer",setup(e,{slots:s}){const{proxy:{$q:o}}=R(),t=Y(M,L);if(t===L)return console.error("QPageContainer needs to be child of QLayout"),L;G(oe,!0);const i=f(()=>{const u={};return t.header.space===!0&&(u.paddingTop=`${t.header.size}px`),t.right.space===!0&&(u[`padding${o.lang.rtl===!0?"Left":"Right"}`]=`${t.right.size}px`),t.footer.space===!0&&(u.paddingBottom=`${t.footer.size}px`),t.left.space===!0&&(u[`padding${o.lang.rtl===!0?"Right":"Left"}`]=`${t.left.size}px`),u});return()=>h("div",{class:"q-page-container",style:i.value},N(s.default))}});const ve=[null,document,document.body,document.scrollingElement,document.documentElement];function he(e,s){let o=ee(s);if(o===void 0){if(e==null)return window;o=e.closest(".scroll,.scroll-y,.overflow-auto")}return ve.includes(o)?window:o}function me(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function ge(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let H;function k(){if(H!==void 0)return H;const e=document.createElement("p"),s=document.createElement("div");D(e,{width:"100%",height:"200px"}),D(s,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),s.appendChild(e),document.body.appendChild(s);const o=e.offsetWidth;s.style.overflow="scroll";let t=e.offsetWidth;return o===t&&(t=s.clientWidth),s.remove(),H=o-t,H}const{passive:I}=F,pe=["both","horizontal","vertical"];var be=T({name:"QScrollObserver",props:{axis:{type:String,validator:e=>pe.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:s}){const o={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,i,u;x(()=>e.scrollTarget,()=>{a(),m()});function c(){t!==null&&t();const p=Math.max(0,me(i)),z=ge(i),d={top:p-o.position.top,left:z-o.position.left};if(e.axis==="vertical"&&d.top===0||e.axis==="horizontal"&&d.left===0)return;const w=Math.abs(d.top)>=Math.abs(d.left)?d.top<0?"up":"down":d.left<0?"left":"right";o.position={top:p,left:z},o.directionChanged=o.direction!==w,o.delta=d,o.directionChanged===!0&&(o.direction=w,o.inflectionPoint=o.position),s("scroll",{...o})}function m(){i=he(u,e.scrollTarget),i.addEventListener("scroll",l,I),l(!0)}function a(){i!==void 0&&(i.removeEventListener("scroll",l,I),i=void 0)}function l(p){if(p===!0||e.debounce===0||e.debounce==="0")c();else if(t===null){const[z,d]=e.debounce?[setTimeout(c,e.debounce),clearTimeout]:[requestAnimationFrame(c),cancelAnimationFrame];t=()=>{d(z),t=null}}}const{proxy:g}=R();return x(()=>g.$q.lang.rtl,c),P(()=>{u=g.$el.parentNode,m()}),E(()=>{t!==null&&t(),a()}),Object.assign(g,{trigger:l,getPosition:()=>o}),X}}),we=T({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:s,emit:o}){const{proxy:{$q:t}}=R(),i=y(null),u=y(t.screen.height),c=y(e.container===!0?0:t.screen.width),m=y({position:0,direction:"down",inflectionPoint:0}),a=y(0),l=y(K.value===!0?0:k()),g=f(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),p=f(()=>e.container===!1?{minHeight:t.screen.height+"px"}:null),z=f(()=>l.value!==0?{[t.lang.rtl===!0?"left":"right"]:`${l.value}px`}:null),d=f(()=>l.value!==0?{[t.lang.rtl===!0?"right":"left"]:0,[t.lang.rtl===!0?"left":"right"]:`-${l.value}px`,width:`calc(100% + ${l.value}px)`}:null);function w(r){if(e.container===!0||document.qScrollPrevented!==!0){const v={position:r.position.top,direction:r.direction,directionChanged:r.directionChanged,inflectionPoint:r.inflectionPoint.top,delta:r.delta.top};m.value=v,e.onScroll!==void 0&&o("scroll",v)}}function O(r){const{height:v,width:S}=r;let C=!1;u.value!==v&&(C=!0,u.value=v,e.onScrollHeight!==void 0&&o("scrollHeight",v),q()),c.value!==S&&(C=!0,c.value=S),C===!0&&e.onResize!==void 0&&o("resize",r)}function V({height:r}){a.value!==r&&(a.value=r,q())}function q(){if(e.container===!0){const r=u.value>a.value?k():0;l.value!==r&&(l.value=r)}}let n;const b={instances:{},view:f(()=>e.view),isContainer:f(()=>e.container),rootRef:i,height:u,containerHeight:a,scrollbarWidth:l,totalWidth:f(()=>c.value+l.value),rows:f(()=>{const r=e.view.toLowerCase().split(" ");return{top:r[0].split(""),middle:r[1].split(""),bottom:r[2].split("")}}),header:Q({size:0,offset:0,space:!1}),right:Q({size:300,offset:0,space:!1}),footer:Q({size:0,offset:0,space:!1}),left:Q({size:300,offset:0,space:!1}),scroll:m,animate(){n!==void 0?clearTimeout(n):document.body.classList.add("q-body--layout-animate"),n=setTimeout(()=>{document.body.classList.remove("q-body--layout-animate"),n=void 0},155)},update(r,v,S){b[r][v]=S}};if(G(M,b),k()>0){let S=function(){r=null,v.classList.remove("hide-scrollbar")},C=function(){if(r===null){if(v.scrollHeight>t.screen.height)return;v.classList.add("hide-scrollbar")}else clearTimeout(r);r=setTimeout(S,300)},B=function(j){r!==null&&j==="remove"&&(clearTimeout(r),S()),window[`${j}EventListener`]("resize",C)},r=null;const v=document.body;x(()=>e.container!==!0?"add":"remove",B),e.container!==!0&&B("add"),ne(()=>{B("remove")})}return()=>{const r=te(s.default,[h(be,{onScroll:w}),h(W,{onResize:O})]),v=h("div",{class:g.value,style:p.value,ref:e.container===!0?void 0:i,tabindex:-1},r);return e.container===!0?h("div",{class:"q-layout-container overflow-hidden",ref:i},[h(W,{onResize:V}),h("div",{class:"absolute-full",style:z.value},[h("div",{class:"scroll",style:d.value},[v])])]):v}}});const xe={__name:"MainLayout",setup(e){return(s,o)=>{const t=ae("router-view");return ie(),le(we,{view:"lHh Lpr lFf"},{default:_(()=>[$(de,{elevated:""},{default:_(()=>[$(ue,null,{default:_(()=>[$(se,null,{default:_(()=>[re(" Cropper App ")]),_:1})]),_:1})]),_:1}),$(fe,null,{default:_(()=>[$(t)]),_:1})]),_:1})}}};export{xe as default};
