/*! For license information please see 2fa00540.22c3e92a.js.LICENSE.txt */
(self.webpackChunkbraintris=self.webpackChunkbraintris||[]).push([[3057],{7435:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>d,default:()=>v,frontMatter:()=>u,metadata:()=>l,toc:()=>p});var r=n(4848),i=n(8453),o=n(6540),a="https://platform.twitter.com/widgets.js",s="createTweet",c=function(e){var t=o.useRef(null),r=o.useState(!0),i=r[0],c=r[1];return o.useEffect((function(){var r=!0;return n(2491)(a,"twitter-embed",(function(){if(window.twttr){if(r){if(!window.twttr.widgets[s])return void console.error("Method "+s+" is not present anymore in twttr.widget api");window.twttr.widgets[s](e.tweetId,null==t?void 0:t.current,e.options).then((function(t){c(!1),e.onLoad&&e.onLoad(t)}))}}else console.error("Failure to load window.twttr, aborting load")})),function(){r=!1}}),[]),o.createElement(o.Fragment,null,i&&o.createElement(o.Fragment,null,e.placeholder),o.createElement("div",{ref:t}))};const u={id:"recursividade",title:"Recursividade",tags:["recursividade","content","pt-BR"]},d=void 0,l={id:"recursividade",title:"Recursividade",description:"Acontece quando uma fun\xe7\xe3o pode chamar a si pr\xf3pria. Todo cuidado \xe9 pouco ao fazer fun\xe7\xf5es recursivas.",source:"@site/docs/recursividade.mdx",sourceDirName:".",slug:"/recursividade",permalink:"/braintris/en/docs/recursividade",draft:!1,unlisted:!1,tags:[{label:"recursividade",permalink:"/braintris/en/docs/tags/recursividade"},{label:"content",permalink:"/braintris/en/docs/tags/content"},{label:"pt-BR",permalink:"/braintris/en/docs/tags/pt-br"}],version:"current",lastUpdatedBy:"Beatriz Oliveira",lastUpdatedAt:1711391336,formattedLastUpdatedAt:"Mar 25, 2024",frontMatter:{id:"recursividade",title:"Recursividade",tags:["recursividade","content","pt-BR"]},sidebar:"tutorialSidebar",previous:{title:"Projects",permalink:"/braintris/en/docs/projects"},next:{title:"Setup",permalink:"/braintris/en/docs/setup"}},f={},p=[];function m(e){const t={p:"p",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Acontece quando uma fun\xe7\xe3o pode chamar a si pr\xf3pria. Todo cuidado \xe9 pouco ao fazer fun\xe7\xf5es recursivas.\nA primeira coisa a se providenciar \xe9 um crit\xe9rio de parada. Este vai determinar quando a fun\xe7\xe3o dever\xe1 parar de chamar a si mesma. Isso impede que a fun\xe7\xe3o se chame infinitas vezes."}),"\n",(0,r.jsx)(t.p,{children:"Veja mais em:"}),"\n",(0,r.jsx)(c,{tweetId:"1412039049246875653"})]})}function v(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},2491:(e,t,n)=>{var r,i,o;o=function(){var e,t,n=document,r=n.getElementsByTagName("head")[0],i=!1,o="push",a="readyState",s="onreadystatechange",c={},u={},d={},l={};function f(e,t){for(var n=0,r=e.length;n<r;++n)if(!t(e[n]))return i;return 1}function p(e,t){f(e,(function(e){return t(e),1}))}function m(t,n,r){t=t[o]?t:[t];var i=n&&n.call,a=i?n:r,s=i?t.join(""):n,h=t.length;function w(e){return e.call?e():c[e]}function g(){if(! --h)for(var e in c[s]=1,a&&a(),d)f(e.split("|"),w)&&!p(d[e],w)&&(d[e]=[])}return setTimeout((function(){p(t,(function t(n,r){return null===n?g():(r||/^https?:\/\//.test(n)||!e||(n=-1===n.indexOf(".js")?e+n+".js":e+n),l[n]?(s&&(u[s]=1),2==l[n]?g():setTimeout((function(){t(n,!0)}),0)):(l[n]=1,s&&(u[s]=1),void v(n,g)))}))}),0),m}function v(e,i){var o,c=n.createElement("script");c.onload=c.onerror=c[s]=function(){c[a]&&!/^c|loade/.test(c[a])||o||(c.onload=c[s]=null,o=1,l[e]=2,i())},c.async=1,c.src=t?e+(-1===e.indexOf("?")?"?":"&")+t:e,r.insertBefore(c,r.lastChild)}return m.get=v,m.order=function(e,t,n){!function r(i){i=e.shift(),e.length?m(i,r):m(i,t,n)}()},m.path=function(t){e=t},m.urlArgs=function(e){t=e},m.ready=function(e,t,n){e=e[o]?e:[e];var r,i=[];return!p(e,(function(e){c[e]||i[o](e)}))&&f(e,(function(e){return c[e]}))?t():(r=e.join("|"),d[r]=d[r]||[],d[r][o](t),n&&n(i)),m},m.done=function(e){m([null],e)},m},e.exports?e.exports=o():void 0===(i="function"==typeof(r=o)?r.call(t,n,t,e):r)||(e.exports=i)},8453:(e,t,n)=>{"use strict";n.d(t,{R:()=>a,x:()=>s});var r=n(6540);const i={},o=r.createContext(i);function a(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);