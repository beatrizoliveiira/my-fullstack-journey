"use strict";(self.webpackChunkbraintris=self.webpackChunkbraintris||[]).push([[6750],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var l=n.createContext({}),c=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},p=function(t){var e=c(t.components);return n.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),m=c(r),f=o,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||a;return r?n.createElement(d,i(i({ref:e},p),{},{components:r})):n.createElement(d,i({ref:e},p))}));function f(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1533:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={id:"how-to-test",title:"How to test",tags:["test","content","notes","en"]},l=void 0,c={unversionedId:"how-to-test",id:"how-to-test",title:"How to test",description:"How to properly test?",source:"@site/docs/how-to-test.md",sourceDirName:".",slug:"/how-to-test",permalink:"/braintris/en/docs/how-to-test",draft:!1,tags:[{label:"test",permalink:"/braintris/en/docs/tags/test"},{label:"content",permalink:"/braintris/en/docs/tags/content"},{label:"notes",permalink:"/braintris/en/docs/tags/notes"},{label:"en",permalink:"/braintris/en/docs/tags/en"}],version:"current",frontMatter:{id:"how-to-test",title:"How to test",tags:["test","content","notes","en"]},sidebar:"tutorialSidebar",previous:{title:"Front-end",permalink:"/braintris/en/docs/front-end"},next:{title:"Issues",permalink:"/braintris/en/docs/issues"}},p={},u=[{value:"How to properly test?",id:"how-to-properly-test",level:3}],m={toc:u};function f(t){var e=t.components,r=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"how-to-properly-test"},"How to properly test?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"test manually locally"),(0,a.kt)("li",{parentName:"ul"},"test using an automated integration test"),(0,a.kt)("li",{parentName:"ul"},"test manually on staging"),(0,a.kt)("li",{parentName:"ul"},"test manually on production")))}f.isMDXComponent=!0}}]);