"use strict";(self.webpackChunkbraintris=self.webpackChunkbraintris||[]).push([[4527],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),u=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return o.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},c=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(t),d=a,g=c["".concat(l,".").concat(d)]||c[d]||m[d]||r;return t?o.createElement(g,i(i({ref:n},p),{},{components:t})):o.createElement(g,i({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=c;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<r;u++)i[u]=t[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}c.displayName="MDXCreateElement"},7849:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var o=t(7462),a=t(3366),r=(t(7294),t(3905)),i=["components"],s={id:"query-optimization",title:"Query Optimization",tags:["query-optimization","mongoDB","content","notes","wip","pt-BR"],slug:"query-optimization",group:"mongoDB/"},l=void 0,u={unversionedId:"mongoDB/query-optimization",id:"mongoDB/query-optimization",title:"Query Optimization",description:"Query optimization in MongoDB",source:"@site/docs/mongoDB/query-optimization.md",sourceDirName:"mongoDB",slug:"/mongoDB/query-optimization",permalink:"/braintris/docs/mongoDB/query-optimization",draft:!1,tags:[{label:"query-optimization",permalink:"/braintris/docs/tags/query-optimization"},{label:"mongoDB",permalink:"/braintris/docs/tags/mongo-db"},{label:"content",permalink:"/braintris/docs/tags/content"},{label:"notes",permalink:"/braintris/docs/tags/notes"},{label:"wip",permalink:"/braintris/docs/tags/wip"},{label:"pt-BR",permalink:"/braintris/docs/tags/pt-br"}],version:"current",frontMatter:{id:"query-optimization",title:"Query Optimization",tags:["query-optimization","mongoDB","content","notes","wip","pt-BR"],slug:"query-optimization",group:"mongoDB/"},sidebar:"tutorialSidebar",previous:{title:"MongoDB",permalink:"/braintris/docs/category/mongodb"},next:{title:"Apal",permalink:"/braintris/docs/analyzes-perceptions"}},p={},m=[{value:"Query optimization in MongoDB",id:"query-optimization-in-mongodb",level:3},{value:"Criar um \xedndice para dar suporte a opera\xe7\xf5es de leitura",id:"criar-um-\xedndice-para-dar-suporte-a-opera\xe7\xf5es-de-leitura",level:3},{value:"Range Query",id:"range-query",level:3},{value:"Equality Plus Range Query",id:"equality-plus-range-query",level:3}],c={toc:m};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"query-optimization-in-mongodb"},"Query optimization in MongoDB"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"indexes"),": "),(0,r.kt)("li",{parentName:"ul"},"single field index: when filtering by a single field"),(0,r.kt)("li",{parentName:"ul"},"compound field index: when filtering by many fields at the same time"),(0,r.kt)("li",{parentName:"ul"},"multikey index: array fields"),(0,r.kt)("li",{parentName:"ul"},"text index: full-text search in many fields in same collection"),(0,r.kt)("li",{parentName:"ul"},"wildcard index: to handle metadata, schemaless design, filter for fields that you don't know yet"),(0,r.kt)("li",{parentName:"ul"},"geospatial index: to filter by location, near, intersection and more"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"batching queries"),(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"li",href:"https://twitter.com/sseraphini/status/1271150022483214338"},"https://twitter.com/sseraphini/status/1271150022483214338"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/manual/core/query-optimization/"},"https://www.mongodb.com/docs/manual/core/query-optimization/")," ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"notes:"),"\nOs \xedndices melhoram a efici\xeancia das opera\xe7\xf5es de leitura reduzindo a quantidade de dados que as opera\xe7\xf5es de consulta precisam processar. Isso simplifica o trabalho associado ao preencimento de consultas no mongoDB."),(0,r.kt)("h3",{id:"criar-um-\xedndice-para-dar-suporte-a-opera\xe7\xf5es-de-leitura"},"Criar um \xedndice para dar suporte a opera\xe7\xf5es de leitura"),(0,r.kt)("p",null,"Se seu aplicativo consultar uma cole\xe7\xe3o em um determinado campo ou conjunto de campos, um \xedndice no campo consultado ou um \xedndice composto no conjunto de campos pode impedir que a consulta verifique toda a cole\xe7\xe3o para localizar e retornar os resultados da consulta.",(0,r.kt)("br",null),"\n",(0,r.kt)("a",{parentName:"p",href:"https://emptysqua.re/blog/optimizing-mongodb-compound-indexes/"},"https://emptysqua.re/blog/optimizing-mongodb-compound-indexes/")),(0,r.kt)("h3",{id:"range-query"},"Range Query"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"BasicCursor:")," significa que o mongoDB teve que fazer uma varredura completa pela cole\xe7\xe3o. Isso n\xe3o funcionar\xe1 quando tiver milh\xf5es de dados, iria ficar bastante lento, ent\xe3o \xe9 recomendado adicionar um \xedndice ao campo pesquisado."),(0,r.kt)("p",null,'BtreeCursor + nome do \xedndice: o "nscanned" caiu de 4 para 3, porque o mongo usou um \xedndice para ir diretamente aos documentos necess\xe1rios, pulando aquele cujo timestamp est\xe1 fora do intervalo.'),(0,r.kt)("p",null,"Para consultas indexadas, ",(0,r.kt)("inlineCode",{parentName:"p"},"nscanned \xe9 o n\xfamero de\xa0_chaves de \xedndice_\xa0no intervalo que o Mongo escaneou")," e ",(0,r.kt)("inlineCode",{parentName:"p"},"nscannedObjects")," \xe9 o n\xfamero de\xa0",(0,r.kt)("em",{parentName:"p"},"documentos"),"\xa0que foram examinados para chegar ao resultado final."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"nscanned >= nscannedObjects >= n\nnscanned = nscannedObjects = n\n")),(0,r.kt)("p",null,"Para consultas simples, voc\xea deseja que os tr\xeas n\xfameros sejam iguais.\xa0Isso significa que voc\xea criou o \xedndice ideal e o Mongo o est\xe1 usando."),(0,r.kt)("h3",{id:"equality-plus-range-query"},"Equality Plus Range Query"),(0,r.kt)("p",null,'A ordem \xe9 importante nos \xedndices compostos do MongoDB, como em qualquer banco de dados.\xa0Se eu fizer um \xedndice com "an\xf4nimo" primeiro, o Mongo pode pular direto para a se\xe7\xe3o do \xedndice com coment\xe1rios assinados e, em seguida, fazer uma varredura de intervalo do timestamp 2 a 4.'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"testes de igualdade antes dos filtros de intervalo")),(0,r.kt)("p",null,'Vamos considerar se valeu a pena incluir "an\xf4nimo" no \xedndice.\xa0Em um sistema com milh\xf5es de coment\xe1rios e milh\xf5es de consultas por dia, reduzir o nscanned pode melhorar consideravelmente o rendimento.'))}d.isMDXComponent=!0}}]);