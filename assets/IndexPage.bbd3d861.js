import{c as d,h as g}from"./render.dd0161a4.js";import{e as c,f as t,c as r,h,j as f,k as y,g as m,A as v,t as C,u as _,v as x,C as i,D as w}from"./index.86aa7fac.js";var P=d({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(a,{slots:s}){const{proxy:{$q:o}}=m(),e=c(f,t);if(e===t)return console.error("QPage needs to be a deep child of QLayout"),t;if(c(y,t)===t)return console.error("QPage needs to be child of QPageContainer"),t;const l=r(()=>{const n=(e.header.space===!0?e.header.size:0)+(e.footer.space===!0?e.footer.size:0);if(typeof a.styleFn=="function"){const p=e.isContainer.value===!0?e.containerHeight.value:o.screen.height;return a.styleFn(n,p)}return{minHeight:e.isContainer.value===!0?e.containerHeight.value-n+"px":o.screen.height===0?n!==0?`calc(100vh - ${n}px)`:"100vh":o.screen.height-n+"px"}}),u=r(()=>`q-page${a.padding===!0?" q-layout-padding":""}`);return()=>h("main",{class:u.value,style:l.value},g(s.default))}});const Q=i("h4",{class:"text-center"},"Window",-1),j=v({__name:"IndexPage",setup(a){const s=r(()=>window.Telegram.WebApp);return(o,e)=>(C(),_(P,{class:"row justify-center"},{default:x(()=>[Q,i("pre",null,w(s.value),1)]),_:1}))}});export{j as default};
