"use strict";(self.webpackChunkbraintris=self.webpackChunkbraintris||[]).push([[3425],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),u=o,v=m["".concat(l,".").concat(u)]||m[u]||d[u]||r;return n?a.createElement(v,s(s({ref:t},p),{},{components:n})):a.createElement(v,s({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5522:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),s=["components"],i={id:"eventos-javascript",title:"Eventos no JavaScript",tags:["eventos javascript","javascript","content","pt-BR"],slug:"eventos-de-clique",group:"javascript/"},l=void 0,c={unversionedId:"javascript/eventos-javascript",id:"javascript/eventos-javascript",title:"Eventos no JavaScript",description:"Normalmente, ao visitarmos p\xe1ginas web, executamos a\xe7\xf5es atrav\xe9s de bot\xf5es, links ou elementos de ui. Como esses elementos clic\xe1veis s\xe3o manipulados atrav\xe9s de eventos em JavaScript para podermos executar determinada funcionalidade.",source:"@site/docs/javascript/eventos-de-clique.md",sourceDirName:"javascript",slug:"/javascript/eventos-de-clique",permalink:"/docs/javascript/eventos-de-clique",draft:!1,tags:[{label:"eventos javascript",permalink:"/docs/tags/eventos-javascript"},{label:"javascript",permalink:"/docs/tags/javascript"},{label:"content",permalink:"/docs/tags/content"},{label:"pt-BR",permalink:"/docs/tags/pt-br"}],version:"current",frontMatter:{id:"eventos-javascript",title:"Eventos no JavaScript",tags:["eventos javascript","javascript","content","pt-BR"],slug:"eventos-de-clique",group:"javascript/"},sidebar:"tutorialSidebar",previous:{title:"Callback",permalink:"/docs/javascript/callback"},next:{title:"Promise",permalink:"/docs/javascript/promise"}},p={},d=[{value:"Sintaxe b\xe1sica do <code>onclick</code>:",id:"sintaxe-b\xe1sica-do-onclick",level:3},{value:"Exemplo de evento onclick:",id:"exemplo-de-evento-onclick",level:3},{value:"Como debugar seus eventos com console.log:",id:"como-debugar-seus-eventos-com-consolelog",level:3},{value:"Por que no React \xe9 onClick?",id:"por-que-no-react-\xe9-onclick",level:3},{value:"Veja mais sobre:",id:"veja-mais-sobre",level:3}],m={toc:d};function u(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Normalmente, ao visitarmos p\xe1ginas web, executamos a\xe7\xf5es atrav\xe9s de bot\xf5es, links ou elementos de ui. Como esses elementos clic\xe1veis s\xe3o manipulados atrav\xe9s de eventos em JavaScript para podermos executar determinada funcionalidade."),(0,r.kt)("p",null,"Um dos eventos mais utilizados \xe9 o ",(0,r.kt)("inlineCode",{parentName:"p"},"onclick")," , que \xe9 executado quando o usu\xe1rio clica em um elemento."),(0,r.kt)("p",null,"Ver mais: ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/pt-BR/docs/Web/API/GlobalEventHandlers/onclick"},"https://developer.mozilla.org/pt-BR/docs/Web/API/GlobalEventHandlers/onclick")),(0,r.kt)("h3",{id:"sintaxe-b\xe1sica-do-onclick"},"Sintaxe b\xe1sica do ",(0,r.kt)("inlineCode",{parentName:"h3"},"onclick"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'<element onclick="function()">Clique here</element>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'<button onclick="function()">Clique here</button>\n')),(0,r.kt)("p",null,"Note que o atributo ",(0,r.kt)("inlineCode",{parentName:"p"},"onclick")," \xe9 puramente JavaScript. O valor que ele recebe \xe9 a fun\xe7\xe3o que ser\xe1 executada j\xe1 que ela \xe9 passada diretamente na tag de abertura."),(0,r.kt)("p",null,"Em JavaScript declaramos uma fun\xe7\xe3o chamando-a pelo nome e em seguida adicionamos par\xeanteses ap\xf3s o identificador da fun\xe7\xe3o(o nome da mesma)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function() {\n    // c\xf3digo\n}\n")),(0,r.kt)("h3",{id:"exemplo-de-evento-onclick"},"Exemplo de evento onclick:"),(0,r.kt)("p",null,"-> ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/biantris/10-PROJECTS-1-HOUR/blob/master/background-changer/script.js"},"Background-changer")),(0,r.kt)("p",null,"Basicamente esse projeto tem como objetivo mudar a cor do background da p\xe1gina ao clicar no bot\xe3o."),(0,r.kt)("p",null,"Vamos ver cada parte do c\xf3digo e entender como funciona."),(0,r.kt)("p",null,"Come\xe7ando com o nosso c\xf3digo html:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>\ud83c\udfa8Background Changer\ud83c\udfa8</title>\n    <link rel="stylesheet" href="style.css" />\n    <script src="script.js" defer><\/script>\n  </head>\n  <body>\n    <button id="btn">\ud83c\udf08Change Me\ud83c\udf08</button>\n  </body>\n</html>\n')),(0,r.kt)("p",null,"Depois estiliza\xe7\xe3o:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap');\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: 'Poppins', sans-serif;\n  margin: 0;\n  min-height: 100vh;\n}\n\nbutton {\n  background-color: rebeccapurple;\n  color: white;\n  padding: 1rem;\n  font-family: inherit;\n  font-size: 1.2rem;\n  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);\n  border-radius: 5px;\n  border: none;\n  transition: transform 0.1s linear;\n}\n\nbutton:focus {\n  outline: none;\n}\n\nbutton:active {\n  box-shadow: 0;\n  transform: translate(2px, 2px);\n}\n")),(0,r.kt)("p",null,"Resultado:\n",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/65451957/161579487-15b86308-99f2-4891-81d9-953f5a505de8.png",alt:"background"})),(0,r.kt)("p",null,"Agora iremos adicionar o nosso evento onclick para mudar a cor do background da p\xe1gina:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const btn = document.getElementById('btn');\n\nbtn.addEventListener('click', () => {\n  document.body.style.background = randomBg();\n});\n\nfunction randomBg() {\n  return `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;\n}\n")),(0,r.kt)("p",null,"Primeiramente iremos adicionar a fun\xe7\xe3o ",(0,r.kt)("inlineCode",{parentName:"p"},"btn")," onde ser\xe1 passada na tag html ",(0,r.kt)("inlineCode",{parentName:"p"},"<button>")," e ir\xe1 chamar o id ",(0,r.kt)("inlineCode",{parentName:"p"},"btn")," que ser\xe1 o nosso bot\xe3o."),(0,r.kt)("p",null,"Ao ocorrer o evento de clique ser\xe1 chamado o ",(0,r.kt)("inlineCode",{parentName:"p"},"addEventListener")," que ir\xe1 executar a fun\xe7\xe3o ",(0,r.kt)("inlineCode",{parentName:"p"},"ramdomBg")," que ir\xe1 retornar uma cor aleat\xf3ria."),(0,r.kt)("p",null,"Obs: O ",(0,r.kt)("inlineCode",{parentName:"p"},"addEventListener()")," serve para esperar um evento que ser\xe1 acionado e assim chamar a fun\xe7\xe3o determinada"),(0,r.kt)("p",null,"ref ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener"},"https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener")),(0,r.kt)("p",null,"Resultado:\n",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/65451957/161579581-734054f0-074e-4e36-a1df-980fac2e2c7e.gif",alt:"Grava\xe7\xe3o-de-tela-de-03-04-2022-23_13_16"})),(0,r.kt)("h3",{id:"como-debugar-seus-eventos-com-consolelog"},"Como debugar seus eventos com console.log:"),(0,r.kt)("p",null,"\xc0s vezes, podemos querer saber mais informa\xe7\xf5es sobre o evento, como qual elemento foi clicado. Nesse caso, precisamos passar um par\xe2metro de evento para nossa fun\xe7\xe3o."),(0,r.kt)("p",null,"Este exemplo mostra como voc\xea pode obter o id do elemento:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"btn.addEventListener('click', (e) => {\n  document.body.style.background = randomBg();\n  console.log(e.target.id);\n});\n")),(0,r.kt)("p",null,"Resultado \xe9 o id que passamos mais acima ",(0,r.kt)("inlineCode",{parentName:"p"},"btn")),(0,r.kt)("div",{align:"center",id:"top"},(0,r.kt)("img",{width:"500",src:"https://user-images.githubusercontent.com/65451957/161584791-57e5ec7b-73bc-4baf-9c1a-79f230ae0f87.png"})),(0,r.kt)("h3",{id:"por-que-no-react-\xe9-onclick"},"Por que no React \xe9 onClick?"),(0,r.kt)("p",null,"Basicamente a diferen\xe7a \xe9 que a nomea\xe7\xe3o de eventos em React s\xe3o usando camelCase ao inv\xe9s de letras min\xfasculas."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"onclick != onClick;\n")),(0,r.kt)("p",null,"Seja mais em: ",(0,r.kt)("a",{parentName:"p",href:"https://pt-br.reactjs.org/docs/handling-events.html"},"https://pt-br.reactjs.org/docs/handling-events.html")),(0,r.kt)("h3",{id:"veja-mais-sobre"},"Veja mais sobre:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.freecodecamp.org/news/javascript-addeventlistener-example-code/"},"The addEventListener() Method \u2013 JavaScript Event Listener Example Code")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.freecodecamp.org/portuguese/news/tutorial-sobre-button-onclick-em-html-e-evento-de-clique-em-javascript/#:~:text=O%20evento%20onclick%20executa%20determinada,tag%20de%20abertura%20do%20bot%C3%A3o"},"Como usar o evento onclick em JavaScript")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/pt-BR/docs/Web/API/GlobalEventHandlers/onclick"},"GlobalEventHandlers.onclick"))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Veja tamb\xe9m no Dev.to ",(0,r.kt)("a",{parentName:"p",href:"https://dev.to/beatrizoliveira/evento-de-click-no-javascript-18hg"},"https://dev.to/beatrizoliveira/evento-de-click-no-javascript-18hg"))))}u.isMDXComponent=!0}}]);