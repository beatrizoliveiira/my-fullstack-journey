"use strict";(self.webpackChunkbraintris=self.webpackChunkbraintris||[]).push([[1284],{7214:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(4848),s=n(8453);const o={id:"operators javascript",title:"When to use '=' or ':'",tags:["operators javascript","javascript","content","en"],slug:"when-to-use-equal-two-points",group:"javascript/"},r=void 0,i={id:"javascript/operators javascript",title:"When to use '=' or ':'",description:"When to use and how to apply",source:"@site/docs/javascript/when-to-use-equal-two-points.md",sourceDirName:"javascript",slug:"/javascript/when-to-use-equal-two-points",permalink:"/braintris/en/docs/javascript/when-to-use-equal-two-points",draft:!1,unlisted:!1,tags:[{label:"operators javascript",permalink:"/braintris/en/docs/tags/operators-javascript"},{label:"javascript",permalink:"/braintris/en/docs/tags/javascript"},{label:"content",permalink:"/braintris/en/docs/tags/content"},{label:"en",permalink:"/braintris/en/docs/tags/en"}],version:"current",lastUpdatedBy:"Beatriz Oliveira",lastUpdatedAt:1711391336,formattedLastUpdatedAt:"Mar 25, 2024",frontMatter:{id:"operators javascript",title:"When to use '=' or ':'",tags:["operators javascript","javascript","content","en"],slug:"when-to-use-equal-two-points",group:"javascript/"},sidebar:"tutorialSidebar",previous:{title:"Tipos din\xe2micos no JS",permalink:"/braintris/en/docs/javascript/tipos-dinamicos"},next:{title:"Math",permalink:"/braintris/en/docs/category/math"}},l={},c=[{value:"When to use and how to apply",id:"when-to-use-and-how-to-apply",level:3},{value:"Condicionals",id:"condicionals",level:3},{value:"Labels",id:"labels",level:3},{value:"References",id:"references",level:3}];function d(e){const t={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h3,{id:"when-to-use-and-how-to-apply",children:"When to use and how to apply"}),"\n",(0,a.jsx)(t.p,{children:"I have always come across this question when entering the JavaScript world so I think it might be useful for someone else :]"}),"\n",(0,a.jsxs)(t.p,{children:["Well basically the ",(0,a.jsx)(t.code,{children:"="})," (assignment symbol) and ",(0,a.jsx)(t.code,{children:":"})," work together and for a better explanation here is an example:"]}),"\n",(0,a.jsxs)(t.p,{children:["The use of the two dots is basically to represent an ",(0,a.jsx)(t.code,{children:"object"})]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"var fruits = {\n  banana: {\n    color: 'yellow',\n  },\n};\n"})}),"\n",(0,a.jsx)(t.p,{children:"And with an object, you can navigate between the levels of keys and values"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"fruits.banana.color; // yellow\n"})}),"\n",(0,a.jsxs)(t.p,{children:["So whenever you use a key in an object, you assign a value to it, using the two dots ",(0,a.jsx)(t.code,{children:":"})]}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"="})," means to assign some value to a variable. It can be an object or any value you want."]}),"\n",(0,a.jsx)(t.h3,{id:"condicionals",children:"Condicionals"}),"\n",(0,a.jsx)(t.p,{children:"There are other uses, for example in conditional variables:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"const color = arguments.length > 0 ? arguments[0] : 'black';\n"})}),"\n",(0,a.jsx)(t.p,{children:'In the above example, assuming that this code is inside a function, you are saying: that if the number of arguments is greater than zero the variable "color" will be equal to the first argument, otherwise, it will be equal to "black"'}),"\n",(0,a.jsx)(t.p,{children:'The "if/else" is represented by the colon'}),"\n",(0,a.jsx)(t.p,{children:"See more on:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Conditional_Operator",children:"Conditional Operator"})}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"labels",children:"Labels"}),"\n",(0,a.jsx)(t.p,{children:"There are also labels, implemented with EcmaScript, take a look:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label",children:"label"})}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"references",children:"References"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://pt.stackoverflow.com/questions/108626/qual-a-utiliza%C3%A7%C3%A3o-dos-dois-pontos-em-javascript",children:"https://pt.stackoverflow.com/questions/108626/qual-a-utiliza%C3%A7%C3%A3o-dos-dois-pontos-em-javascript"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Conditional_Operator",children:"https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Conditional_Operator"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label",children:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label"})}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>i});var a=n(6540);const s={},o=a.createContext(s);function r(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);