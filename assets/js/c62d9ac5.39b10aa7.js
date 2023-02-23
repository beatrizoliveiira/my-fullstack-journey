"use strict";(self.webpackChunkbraintris=self.webpackChunkbraintris||[]).push([[2016],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,v=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return a?r.createElement(v,l(l({ref:t},c),{},{components:a})):r.createElement(v,l({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4511:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),l=["components"],i={id:"operators javascript",title:"When to use '=' or ':'",tags:["operators javascript","javascript","content","en"],slug:"when-to-use-equal-two-points",group:"javascript/"},s=void 0,p={unversionedId:"javascript/operators javascript",id:"javascript/operators javascript",title:"When to use '=' or ':'",description:"When to use and how to apply",source:"@site/docs/javascript/when-to-use-equal-two-points.md",sourceDirName:"javascript",slug:"/javascript/when-to-use-equal-two-points",permalink:"/docs/javascript/when-to-use-equal-two-points",draft:!1,tags:[{label:"operators javascript",permalink:"/docs/tags/operators-javascript"},{label:"javascript",permalink:"/docs/tags/javascript"},{label:"content",permalink:"/docs/tags/content"},{label:"en",permalink:"/docs/tags/en"}],version:"current",frontMatter:{id:"operators javascript",title:"When to use '=' or ':'",tags:["operators javascript","javascript","content","en"],slug:"when-to-use-equal-two-points",group:"javascript/"},sidebar:"tutorialSidebar",previous:{title:"setTimeout",permalink:"/docs/javascript/setTimeout"},next:{title:"MongoDB",permalink:"/docs/category/mongodb"}},c={},u=[{value:"When to use and how to apply",id:"when-to-use-and-how-to-apply",level:3},{value:"Condicionals",id:"condicionals",level:3},{value:"Labels",id:"labels",level:3},{value:"References",id:"references",level:3}],d={toc:u};function m(e){var t=e.components,a=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"when-to-use-and-how-to-apply"},"When to use and how to apply"),(0,o.kt)("p",null,"I have always come across this question when entering the JavaScript world so I think it might be useful for someone else :]"),(0,o.kt)("p",null,"Well basically the ",(0,o.kt)("inlineCode",{parentName:"p"},"=")," (assignment symbol) and ",(0,o.kt)("inlineCode",{parentName:"p"},":")," work together and for a better explanation here is an example:"),(0,o.kt)("p",null,"The use of the two dots is basically to represent an ",(0,o.kt)("inlineCode",{parentName:"p"},"object")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var fruits = {\n  banana: {\n    color: 'yellow',\n  },\n};\n")),(0,o.kt)("p",null,"And with an object, you can navigate between the levels of keys and values"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"fruits.banana.color; // yellow\n")),(0,o.kt)("p",null,"So whenever you use a key in an object, you assign a value to it, using the two dots ",(0,o.kt)("inlineCode",{parentName:"p"},":")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"=")," means to assign some value to a variable. It can be an object or any value you want."),(0,o.kt)("h3",{id:"condicionals"},"Condicionals"),(0,o.kt)("p",null,"There are other uses, for example in conditional variables:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const color = arguments.length > 0 ? arguments[0] : 'black';\n")),(0,o.kt)("p",null,'In the above example, assuming that this code is inside a function, you are saying: that if the number of arguments is greater than zero the variable "color" will be equal to the first argument, otherwise, it will be equal to "black"'),(0,o.kt)("p",null,'The "if/else" is represented by the colon'),(0,o.kt)("p",null,"See more on:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Conditional_Operator"},"Conditional Operator"))),(0,o.kt)("h3",{id:"labels"},"Labels"),(0,o.kt)("p",null,"There are also labels, implemented with EcmaScript, take a look:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label"},"label"))),(0,o.kt)("h3",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://pt.stackoverflow.com/questions/108626/qual-a-utiliza%C3%A7%C3%A3o-dos-dois-pontos-em-javascript"},"https://pt.stackoverflow.com/questions/108626/qual-a-utiliza%C3%A7%C3%A3o-dos-dois-pontos-em-javascript")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Conditional_Operator"},"https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Conditional_Operator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label"},"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label"))))}m.isMDXComponent=!0}}]);