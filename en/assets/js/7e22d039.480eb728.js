"use strict";(self.webpackChunkbraintris=self.webpackChunkbraintris||[]).push([[1254],{4137:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,g=u["".concat(i,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(g,s(s({ref:t},d),{},{components:n})):a.createElement(g,s({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8440:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var a=n(7462),r=n(3366),o=(n(7294),n(4137)),s=["components"],l={id:"tipos-de-dados",title:"Tipos de dados no JS(mais utilizados)",tags:["tipos-de-dados","javascript","content","pt-BR"],slug:"tipos-de-dados",group:"javascript/"},i=void 0,p={unversionedId:"javascript/tipos-de-dados",id:"javascript/tipos-de-dados",title:"Tipos de dados no JS(mais utilizados)",description:"String",source:"@site/docs/javascript/tipos-de-dados.md",sourceDirName:"javascript",slug:"/javascript/tipos-de-dados",permalink:"/braintris/en/docs/javascript/tipos-de-dados",draft:!1,tags:[{label:"tipos-de-dados",permalink:"/braintris/en/docs/tags/tipos-de-dados"},{label:"javascript",permalink:"/braintris/en/docs/tags/javascript"},{label:"content",permalink:"/braintris/en/docs/tags/content"},{label:"pt-BR",permalink:"/braintris/en/docs/tags/pt-br"}],version:"current",lastUpdatedBy:"biantris",lastUpdatedAt:1706651350,formattedLastUpdatedAt:"Jan 30, 2024",frontMatter:{id:"tipos-de-dados",title:"Tipos de dados no JS(mais utilizados)",tags:["tipos-de-dados","javascript","content","pt-BR"],slug:"tipos-de-dados",group:"javascript/"},sidebar:"tutorialSidebar",previous:{title:"This em JavaScript",permalink:"/braintris/en/docs/javascript/this-js"},next:{title:"Tipos din\xe2micos no JS",permalink:"/braintris/en/docs/javascript/tipos-dinamicos"}},d={},c=[{value:"<strong>String</strong>",id:"string",level:3},{value:"<strong>Number</strong>",id:"number",level:3},{value:"<strong>Boolean</strong>",id:"boolean",level:3},{value:"<strong>Array</strong>",id:"array",level:3}],u={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"string"},(0,o.kt)("strong",{parentName:"h3"},"String")),(0,o.kt)("p",null,"cadeia de caracteres, tipo de text"),(0,o.kt)("p",null,"ex: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'console.log("Aoba")\n')),(0,o.kt)("p",null,"ex:\nconsole.log aceita v\xe1rios argumentos"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'let name = prompt("what is your name?");\nconsole.log("story " + name + " story");\n')),(0,o.kt)("p",null,"tamb\xe9m podemos utilizar interpola\xe7\xe3o"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'let name = prompt("what is your name?");\nconsole.log(`story ${name} story`);\n')),(0,o.kt)("h3",{id:"number"},(0,o.kt)("strong",{parentName:"h3"},"Number")),(0,o.kt)("p",null,"n\xfameros"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"33 //inteiros\n12.5 // reais - float\nNaN // Not a Number\nInfinity // infinito\n\nconsole.log(1+1)\n// 2\n")),(0,o.kt)("h3",{id:"boolean"},(0,o.kt)("strong",{parentName:"h3"},"Boolean")),(0,o.kt)("p",null,"booleano, 2 valores ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," ou ",(0,o.kt)("inlineCode",{parentName:"p"},"false")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"console.log(true)\nconsole.log(false)\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Underfined vs Null"),"\nNull: nulo, objeto que n\xe3o possu\xed nada dentro, diferente de indefinido\nUnderfined: indefinido"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Object:")," objeto, propriedades/atributos, funcionalidades/m\xe9todos"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'{propriedade: "valor"}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'console.log({ // obj\n    name: "bia", //property: value\n    age: 20 // property: value\n}) // obj\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'console.log({\n    name: "bia".\n    age: 20,\n    walk: () = { // funcionalidade, logo \xe9 um m\xe9todo, pois est\xe1 dentro de um objeto\n        console.log ("walk")\n    }\n})\n')),(0,o.kt)("h3",{id:"array"},(0,o.kt)("strong",{parentName:"h3"},"Array")),(0,o.kt)("p",null,"(vetores)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"uma lista"),(0,o.kt)("li",{parentName:"ul"},"um agrupamento de dados")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'console.log([\n    "milk",\n    "eggs",\n    2,\n    3,\n    ...\n])\n')))}m.isMDXComponent=!0}}]);