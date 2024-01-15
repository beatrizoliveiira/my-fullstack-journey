"use strict";(self.webpackChunkbraintris=self.webpackChunkbraintris||[]).push([[5632],{4137:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(a),m=n,v=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return a?r.createElement(v,i(i({ref:t},c),{},{components:a})):r.createElement(v,i({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},990:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var r=a(7462),n=a(3366),o=(a(7294),a(4137)),i=["components"],s={id:"vuex",title:"Vuex",tags:["vuex","vuejs","content","notes","pt-PR"]},l=void 0,u={unversionedId:"javascript/vue/vuex",id:"javascript/vue/vuex",title:"Vuex",description:"O que \xe9?",source:"@site/docs/javascript/vue/vuex.md",sourceDirName:"javascript/vue",slug:"/javascript/vue/vuex",permalink:"/braintris/docs/javascript/vue/vuex",draft:!1,tags:[{label:"vuex",permalink:"/braintris/docs/tags/vuex"},{label:"vuejs",permalink:"/braintris/docs/tags/vuejs"},{label:"content",permalink:"/braintris/docs/tags/content"},{label:"notes",permalink:"/braintris/docs/tags/notes"},{label:"pt-PR",permalink:"/braintris/docs/tags/pt-pr"}],version:"current",lastUpdatedBy:"Beatriz Oliveira",lastUpdatedAt:1705285164,formattedLastUpdatedAt:"15 de jan. de 2024",frontMatter:{id:"vuex",title:"Vuex",tags:["vuex","vuejs","content","notes","pt-PR"]},sidebar:"tutorialSidebar",previous:{title:"Vue",permalink:"/braintris/docs/category/vue"},next:{title:"Callback",permalink:"/braintris/docs/javascript/callback"}},c={},p=[{value:"O que \xe9?",id:"o-que-\xe9",level:3},{value:"Store",id:"store",level:3},{value:"Estado",id:"estado",level:3},{value:"Getters",id:"getters",level:3},{value:"Muta\xe7\xf5es",id:"muta\xe7\xf5es",level:3},{value:"A\xe7\xf5es",id:"a\xe7\xf5es",level:3},{value:"M\xf3dulos",id:"m\xf3dulos",level:3}],d={toc:p};function m(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"o-que-\xe9"},"O que \xe9?"),(0,o.kt)("p",null,"O Vuex \xe9 um padr\xe3o de gerenciamento de estado + biblioteca para aplica\xe7\xf5es Vue.js. Ele serve como um store centralizado para todos os componentes em uma aplica\xe7\xe3o, com regras garantindo que o estado s\xf3 possa ser mutado de forma previs\xedvel"),(0,o.kt)("h3",{id:"store"},"Store"),(0,o.kt)("p",null,'No Vue.js, "store" refere-se a um conceito de gerenciamento de estado centralizado. O Vue.js n\xe3o possui uma implementa\xe7\xe3o oficial de uma "store", mas \xe9 comumente utilizado juntamente com bibliotecas de gerenciamento de estado, como o Vuex.'),(0,o.kt)("p",null,'Uma "store" \xe9 basicamente um objeto que cont\xe9m o estado ',(0,o.kt)("strong",{parentName:"p"},"centralizado")," da aplica\xe7\xe3o Vue.js. Ela \xe9 respons\xe1vel por armazenar e gerenciar os dados que podem ser compartilhados e acessados por diferentes componentes da aplica\xe7\xe3o. Ao centralizar o estado em uma ",(0,o.kt)("inlineCode",{parentName:"p"},'"store"'),", \xe9 poss\xedvel manter um controle mais eficiente das mudan\xe7as e facilitar a comunica\xe7\xe3o entre os componentes."),(0,o.kt)("p",null,'A principal vantagem de usar uma "store" \xe9 a capacidade de compartilhar dados de forma eficiente entre componentes que est\xe3o em diferentes partes da \xe1rvore de componentes do Vue.js. Em vez de passar dados de um componente para outro atrav\xe9s de props (propriedades) ou eventos personalizados, os componentes podem acessar os dados diretamente da "store", tornando a comunica\xe7\xe3o mais direta e simplificada.'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Visualiza\xe7\xe3o em um componente simples")),(0,o.kt)("div",{align:"center",id:"top"},(0,o.kt)("img",{width:"500",src:"https://raw.githubusercontent.com/biantris/braintris/main/static/img/vuex-store.png"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Visualiza\xe7\xe3o em um projeto completo")),(0,o.kt)("div",{align:"center",id:"top"},(0,o.kt)("img",{width:"500",src:"https://raw.githubusercontent.com/biantris/braintris/main/static/img/vuex.png"})),(0,o.kt)("h3",{id:"estado"},"Estado"),(0,o.kt)("p",null,"[wip]"),(0,o.kt)("h3",{id:"getters"},"Getters"),(0,o.kt)("p",null,"[wip]"),(0,o.kt)("h3",{id:"muta\xe7\xf5es"},"Muta\xe7\xf5es"),(0,o.kt)("p",null,"[wip]"),(0,o.kt)("h3",{id:"a\xe7\xf5es"},"A\xe7\xf5es"),(0,o.kt)("p",null,"[wip]"),(0,o.kt)("h3",{id:"m\xf3dulos"},"M\xf3dulos"),(0,o.kt)("p",null,"[wip]"))}m.isMDXComponent=!0}}]);