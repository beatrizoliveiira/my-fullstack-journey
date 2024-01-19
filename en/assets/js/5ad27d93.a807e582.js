"use strict";(self.webpackChunkbraintris=self.webpackChunkbraintris||[]).push([[9883],{4137:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>b});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),i=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=i(a),b=r,d=u["".concat(l,".").concat(b)]||u[b]||m[b]||o;return a?n.createElement(d,c(c({ref:t},p),{},{components:a})):n.createElement(d,c({ref:t},p))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var i=2;i<o;i++)c[i]=a[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7165:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>b,frontMatter:()=>s,metadata:()=>i,toc:()=>m});var n=a(7462),r=a(3366),o=(a(7294),a(4137)),c=["components"],s={id:"scope-block-statement",title:"Scope, Block Statement",tags:["scope-block-statement","javascript","content","notes","pt-BR"],slug:"scope-block-statement",group:"javascript/"},l=void 0,i={unversionedId:"javascript/scope-block-statement",id:"javascript/scope-block-statement",title:"Scope, Block Statement",description:"Scope: Escopo determina a visibilidade de alguma vari\xe1vel no javaScript",source:"@site/docs/javascript/scope-block-statement.md",sourceDirName:"javascript",slug:"/javascript/scope-block-statement",permalink:"/braintris/en/docs/javascript/scope-block-statement",draft:!1,tags:[{label:"scope-block-statement",permalink:"/braintris/en/docs/tags/scope-block-statement"},{label:"javascript",permalink:"/braintris/en/docs/tags/javascript"},{label:"content",permalink:"/braintris/en/docs/tags/content"},{label:"notes",permalink:"/braintris/en/docs/tags/notes"},{label:"pt-BR",permalink:"/braintris/en/docs/tags/pt-br"}],version:"current",lastUpdatedBy:"biantris",lastUpdatedAt:1705678079,formattedLastUpdatedAt:"Jan 19, 2024",frontMatter:{id:"scope-block-statement",title:"Scope, Block Statement",tags:["scope-block-statement","javascript","content","notes","pt-BR"],slug:"scope-block-statement",group:"javascript/"},sidebar:"tutorialSidebar",previous:{title:"Fun\xe7\xf5es p\xfablicas x privadas em JavaScript",permalink:"/braintris/en/docs/javascript/public-vs-private-functions-js"},next:{title:"setTimeout",permalink:"/braintris/en/docs/javascript/set-timeout"}},p={},m=[],u={toc:m};function b(e){var t=e.components,a=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Scope"),": Escopo determina a visibilidade de alguma vari\xe1vel no javaScript"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Block Statement:")," Declara\xe7\xe3o de bloco"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// vamos iniciar um bloco\n{\n    // aqui dentro \xe9 um bloco e posso colocar qualquer c\xf3digo\n} // aqui fechamos o bloco\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"O bloco tamb\xe9m criar\xe1 um novo ",(0,o.kt)("strong",{parentName:"li"},"escopo")," . Chamamos de ",(0,o.kt)("strong",{parentName:"li"},"block scoped"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"var:")," var \xe9 global e poder\xe1 funcionar fora de um escopo de bloco"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"var \xe9 global e tamb\xe9m local"),(0,o.kt)("li",{parentName:"ul"},"hoisting")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Scope let e const:")," const e let s\xe3o locais e s\xf3 funcionam no escopo onde foi criado"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{ \n    let y = 0; // escopo local ( dentro das chaves )\n    console.log(y)\n}\n")))}b.isMDXComponent=!0}}]);