"use strict";(self.webpackChunkbraintris=self.webpackChunkbraintris||[]).push([[9623],{8973:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var a=s(4848),n=s(8453);const o={id:"vuex",title:"Vuex",tags:["vuex","vuejs","content","notes","pt-PR"]},i=void 0,r={id:"javascript/vue/vuex",title:"Vuex",description:"O que \xe9?",source:"@site/docs/javascript/vue/vuex.md",sourceDirName:"javascript/vue",slug:"/javascript/vue/vuex",permalink:"/braintris/en/docs/javascript/vue/vuex",draft:!1,unlisted:!1,tags:[{label:"vuex",permalink:"/braintris/en/docs/tags/vuex"},{label:"vuejs",permalink:"/braintris/en/docs/tags/vuejs"},{label:"content",permalink:"/braintris/en/docs/tags/content"},{label:"notes",permalink:"/braintris/en/docs/tags/notes"},{label:"pt-PR",permalink:"/braintris/en/docs/tags/pt-pr"}],version:"current",lastUpdatedBy:"Beatriz Oliveira",lastUpdatedAt:1709654663,formattedLastUpdatedAt:"Mar 5, 2024",frontMatter:{id:"vuex",title:"Vuex",tags:["vuex","vuejs","content","notes","pt-PR"]},sidebar:"tutorialSidebar",previous:{title:"Vue",permalink:"/braintris/en/docs/category/vue"},next:{title:"Callback",permalink:"/braintris/en/docs/javascript/callback"}},d={},c=[{value:"O que \xe9?",id:"o-que-\xe9",level:3},{value:"Store",id:"store",level:3},{value:"Estado",id:"estado",level:3},{value:"Getters",id:"getters",level:3},{value:"Muta\xe7\xf5es",id:"muta\xe7\xf5es",level:3},{value:"A\xe7\xf5es",id:"a\xe7\xf5es",level:3},{value:"M\xf3dulos",id:"m\xf3dulos",level:3}];function l(e){const t={code:"code",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h3,{id:"o-que-\xe9",children:"O que \xe9?"}),"\n",(0,a.jsx)(t.p,{children:"O Vuex \xe9 um padr\xe3o de gerenciamento de estado + biblioteca para aplica\xe7\xf5es Vue.js. Ele serve como um store centralizado para todos os componentes em uma aplica\xe7\xe3o, com regras garantindo que o estado s\xf3 possa ser mutado de forma previs\xedvel"}),"\n",(0,a.jsx)(t.h3,{id:"store",children:"Store"}),"\n",(0,a.jsx)(t.p,{children:'No Vue.js, "store" refere-se a um conceito de gerenciamento de estado centralizado. O Vue.js n\xe3o possui uma implementa\xe7\xe3o oficial de uma "store", mas \xe9 comumente utilizado juntamente com bibliotecas de gerenciamento de estado, como o Vuex.'}),"\n",(0,a.jsxs)(t.p,{children:['Uma "store" \xe9 basicamente um objeto que cont\xe9m o estado ',(0,a.jsx)(t.strong,{children:"centralizado"})," da aplica\xe7\xe3o Vue.js. Ela \xe9 respons\xe1vel por armazenar e gerenciar os dados que podem ser compartilhados e acessados por diferentes componentes da aplica\xe7\xe3o. Ao centralizar o estado em uma ",(0,a.jsx)(t.code,{children:'"store"'}),", \xe9 poss\xedvel manter um controle mais eficiente das mudan\xe7as e facilitar a comunica\xe7\xe3o entre os componentes."]}),"\n",(0,a.jsx)(t.p,{children:'A principal vantagem de usar uma "store" \xe9 a capacidade de compartilhar dados de forma eficiente entre componentes que est\xe3o em diferentes partes da \xe1rvore de componentes do Vue.js. Em vez de passar dados de um componente para outro atrav\xe9s de props (propriedades) ou eventos personalizados, os componentes podem acessar os dados diretamente da "store", tornando a comunica\xe7\xe3o mais direta e simplificada.'}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Visualiza\xe7\xe3o em um componente simples"}),"\n"]}),"\n",(0,a.jsx)("div",{align:"center",id:"top",children:(0,a.jsx)("img",{width:"500",src:"https://raw.githubusercontent.com/biantris/braintris/main/static/img/vuex-store.png"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Visualiza\xe7\xe3o em um projeto completo"}),"\n"]}),"\n",(0,a.jsx)("div",{align:"center",id:"top",children:(0,a.jsx)("img",{width:"500",src:"https://raw.githubusercontent.com/biantris/braintris/main/static/img/vuex.png"})}),"\n",(0,a.jsx)(t.h3,{id:"estado",children:"Estado"}),"\n",(0,a.jsx)(t.p,{children:"[wip]"}),"\n",(0,a.jsx)(t.h3,{id:"getters",children:"Getters"}),"\n",(0,a.jsx)(t.p,{children:"[wip]"}),"\n",(0,a.jsx)(t.h3,{id:"muta\xe7\xf5es",children:"Muta\xe7\xf5es"}),"\n",(0,a.jsx)(t.p,{children:"[wip]"}),"\n",(0,a.jsx)(t.h3,{id:"a\xe7\xf5es",children:"A\xe7\xf5es"}),"\n",(0,a.jsx)(t.p,{children:"[wip]"}),"\n",(0,a.jsx)(t.h3,{id:"m\xf3dulos",children:"M\xf3dulos"}),"\n",(0,a.jsx)(t.p,{children:"[wip]"})]})}function u(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>r});var a=s(6540);const n={},o=a.createContext(n);function i(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);