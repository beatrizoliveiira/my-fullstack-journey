"use strict";(self.webpackChunkbraintris=self.webpackChunkbraintris||[]).push([[9085],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return t?n.createElement(f,i(i({ref:r},u),{},{components:t})):n.createElement(f,i({ref:r},u))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6337:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var n=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],s={id:"closure-js",title:"Closure",tags:["closure","javascript","content","pt-br"],slug:"closures",group:"javascript/"},l=void 0,c={unversionedId:"javascript/closure-js",id:"javascript/closure-js",title:"Closure",description:"Closure",source:"@site/docs/javascript/closures.md",sourceDirName:"javascript",slug:"/javascript/closures",permalink:"/braintris/docs/javascript/closures",draft:!1,tags:[{label:"closure",permalink:"/braintris/docs/tags/closure"},{label:"javascript",permalink:"/braintris/docs/tags/javascript"},{label:"content",permalink:"/braintris/docs/tags/content"},{label:"pt-br",permalink:"/braintris/docs/tags/pt-br"}],version:"current",frontMatter:{id:"closure-js",title:"Closure",tags:["closure","javascript","content","pt-br"],slug:"closures",group:"javascript/"},sidebar:"tutorialSidebar",previous:{title:"Callback",permalink:"/braintris/docs/javascript/callback"},next:{title:"Eventos no JavaScript",permalink:"/braintris/docs/javascript/eventos-de-clique"}},u={},p=[{value:"Closure",id:"closure",level:3}],d={toc:p};function m(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"closure"},"Closure"),(0,o.kt)("p",null,'A Closure \xe9 uma fun\xe7\xe3o que "captura" vari\xe1veis e fun\xe7\xf5es definidas fora de si mesma, perimitindo que acesse e manipule esses valores mesmo que n\xe3o estejam mais dispon\xedveis no escopo atual.'),(0,o.kt)("p",null,"ex."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function outerFunction() {\n  let outerVar = 'Hello';\n\n  function innerFunction() {\n    console.log(outerVar);\n  }\n\n  return innerFunction;\n}\n\nconst innerFunc = outerFunction();\ninnerFunc(); // logs 'Hello'\n")),(0,o.kt)("p",null,"Neste exemplo, a fun\xe7\xe3o ",(0,o.kt)("inlineCode",{parentName:"p"},"innerFunction"),' \xe9 uma closure, pois ela "captura" a vari\xe1vel ',(0,o.kt)("inlineCode",{parentName:"p"},"outerVar")," definida no escopo da fun\xe7\xe3o ",(0,o.kt)("inlineCode",{parentName:"p"},"outerFunction"),". Quando a fun\xe7\xe3o ",(0,o.kt)("inlineCode",{parentName:"p"},"outerFunction")," \xe9 chamada, ela retorna a fun\xe7\xe3o ",(0,o.kt)("inlineCode",{parentName:"p"},"innerFunction"),", que pode ser atribu\xedda a uma vari\xe1vel e chamada posteriormente. Mesmo que o escopo da fun\xe7\xe3o ",(0,o.kt)("inlineCode",{parentName:"p"},"outerFunction")," j\xe1 tenha sido destru\xeddo, a closure ",(0,o.kt)("inlineCode",{parentName:"p"},"innerFunction")," ainda tem acesso \xe0 vari\xe1vel ",(0,o.kt)("inlineCode",{parentName:"p"},"outerVar"),"."),(0,o.kt)("p",null,"As closures s\xe3o bastante utilizadas em JavaScript para criar fun\xe7\xf5es com estados persistentes e compartilhar dados entre fun\xe7\xf5es. Elas s\xe3o particularmente \xfateis para criar fun\xe7\xf5es de retorno de chamada ",(0,o.kt)("a",{parentName:"p",href:"https://biantris.github.io/braintris/docs/javascript/callback"},"(callbacks)")," e fun\xe7\xf5es geradoras (generators)."),(0,o.kt)("p",null,"Leia mais sobre"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Closures"},"https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Closures"))))}m.isMDXComponent=!0}}]);