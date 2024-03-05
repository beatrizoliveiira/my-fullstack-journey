"use strict";(self.webpackChunkbraintris=self.webpackChunkbraintris||[]).push([[9152],{2658:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>t,metadata:()=>i,toc:()=>l});var n=s(4848),a=s(8453);const t={id:"closure-js",title:"Closure",tags:["closure","javascript","content","pt-br"],slug:"closures",group:"javascript/"},o=void 0,i={id:"javascript/closure-js",title:"Closure",description:"Closure",source:"@site/docs/javascript/closures.md",sourceDirName:"javascript",slug:"/javascript/closures",permalink:"/braintris/docs/javascript/closures",draft:!1,unlisted:!1,tags:[{label:"closure",permalink:"/braintris/docs/tags/closure"},{label:"javascript",permalink:"/braintris/docs/tags/javascript"},{label:"content",permalink:"/braintris/docs/tags/content"},{label:"pt-br",permalink:"/braintris/docs/tags/pt-br"}],version:"current",lastUpdatedBy:"Beatriz Oliveira",lastUpdatedAt:1709654663,formattedLastUpdatedAt:"5 de mar. de 2024",frontMatter:{id:"closure-js",title:"Closure",tags:["closure","javascript","content","pt-br"],slug:"closures",group:"javascript/"},sidebar:"tutorialSidebar",previous:{title:"Callback",permalink:"/braintris/docs/javascript/callback"},next:{title:"Eventos no JavaScript",permalink:"/braintris/docs/javascript/eventos-de-clique"}},c={},l=[{value:"Closure",id:"closure",level:3}];function u(e){const r={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h3,{id:"closure",children:"Closure"}),"\n",(0,n.jsx)(r.p,{children:'A Closure \xe9 uma fun\xe7\xe3o que "captura" vari\xe1veis e fun\xe7\xf5es definidas fora de si mesma, perimitindo que acesse e manipule esses valores mesmo que n\xe3o estejam mais dispon\xedveis no escopo atual.'}),"\n",(0,n.jsx)(r.p,{children:"ex."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:"function outerFunction() {\n  let outerVar = 'Hello';\n\n  function innerFunction() {\n    console.log(outerVar);\n  }\n\n  return innerFunction;\n}\n\nconst innerFunc = outerFunction();\ninnerFunc(); // logs 'Hello'\n"})}),"\n",(0,n.jsxs)(r.p,{children:["Neste exemplo, a fun\xe7\xe3o ",(0,n.jsx)(r.code,{children:"innerFunction"}),' \xe9 uma closure, pois ela "captura" a vari\xe1vel ',(0,n.jsx)(r.code,{children:"outerVar"})," definida no escopo da fun\xe7\xe3o ",(0,n.jsx)(r.code,{children:"outerFunction"}),". Quando a fun\xe7\xe3o ",(0,n.jsx)(r.code,{children:"outerFunction"})," \xe9 chamada, ela retorna a fun\xe7\xe3o ",(0,n.jsx)(r.code,{children:"innerFunction"}),", que pode ser atribu\xedda a uma vari\xe1vel e chamada posteriormente. Mesmo que o escopo da fun\xe7\xe3o ",(0,n.jsx)(r.code,{children:"outerFunction"})," j\xe1 tenha sido destru\xeddo, a closure ",(0,n.jsx)(r.code,{children:"innerFunction"})," ainda tem acesso \xe0 vari\xe1vel ",(0,n.jsx)(r.code,{children:"outerVar"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["As closures s\xe3o bastante utilizadas em JavaScript para criar fun\xe7\xf5es com estados persistentes e compartilhar dados entre fun\xe7\xf5es. Elas s\xe3o particularmente \xfateis para criar fun\xe7\xf5es de retorno de chamada ",(0,n.jsx)(r.a,{href:"https://biantris.github.io/braintris/docs/javascript/callback",children:"(callbacks)"})," e fun\xe7\xf5es geradoras (generators)."]}),"\n",(0,n.jsx)(r.p,{children:"Leia mais sobre"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Closures",children:"https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Closures"})}),"\n"]})]})}function d(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},8453:(e,r,s)=>{s.d(r,{R:()=>o,x:()=>i});var n=s(6540);const a={},t=n.createContext(a);function o(e){const r=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);