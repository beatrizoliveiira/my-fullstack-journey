"use strict";(self.webpackChunkbraintris=self.webpackChunkbraintris||[]).push([[227],{6312:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>d,contentTitle:()=>t,default:()=>u,frontMatter:()=>i,metadata:()=>n,toc:()=>l});var r=s(4848),o=s(8453);const i={id:"layers-rest-apis",title:"Camadas em APIs REST",tags:["api","layers-rest","content","notes","pt-PR"],slug:"layers-rest-apis",group:"api/"},t=void 0,n={id:"api/layers-rest-apis",title:"Camadas em APIs REST",description:"Camadas de uma API Rest",source:"@site/docs/api/layers-rest-apis.md",sourceDirName:"api",slug:"/api/layers-rest-apis",permalink:"/braintris/en/docs/api/layers-rest-apis",draft:!1,unlisted:!1,tags:[{label:"api",permalink:"/braintris/en/docs/tags/api"},{label:"layers-rest",permalink:"/braintris/en/docs/tags/layers-rest"},{label:"content",permalink:"/braintris/en/docs/tags/content"},{label:"notes",permalink:"/braintris/en/docs/tags/notes"},{label:"pt-PR",permalink:"/braintris/en/docs/tags/pt-pr"}],version:"current",lastUpdatedBy:"Beatriz Oliveira",lastUpdatedAt:1709654663,formattedLastUpdatedAt:"Mar 5, 2024",frontMatter:{id:"layers-rest-apis",title:"Camadas em APIs REST",tags:["api","layers-rest","content","notes","pt-PR"],slug:"layers-rest-apis",group:"api/"},sidebar:"tutorialSidebar",previous:{title:"API",permalink:"/braintris/en/docs/category/api"},next:{title:"Bookshelf",permalink:"/braintris/en/docs/category/bookshelf"}},d={},l=[{value:"Camadas de uma API Rest",id:"camadas-de-uma-api-rest",level:3},{value:"CONTROLLES(Controladores):",id:"controllescontroladores",level:4},{value:"REPOSITORIES(Reposit\xf3rios):",id:"repositoriesreposit\xf3rios",level:4},{value:"DOMAIN(Dom\xednio):",id:"domaindom\xednio",level:4},{value:"ENTITIES(Entidades):",id:"entitiesentidades",level:4},{value:"MODULES (M\xf3dulos):",id:"modules-m\xf3dulos",level:4},{value:"FACTORY(F\xe1brica):",id:"factoryf\xe1brica",level:4},{value:"DTO(Objeto de transfer\xeancia de dados):",id:"dtoobjeto-de-transfer\xeancia-de-dados",level:4}];function c(e){const a={a:"a",h3:"h3",h4:"h4",li:"li",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.h3,{id:"camadas-de-uma-api-rest",children:"Camadas de uma API Rest"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["Essas nomenclaturas geralmente fazem parte de arquitetura de software usada em APIs RESTful, presentes em arquiteturas de ",(0,r.jsx)(a.a,{href:"https://pt.wikipedia.org/wiki/Arquitetura_multicamada",children:"camadas"})," ou ",(0,r.jsx)(a.a,{href:"https://en.wikipedia.org/wiki/Hexagonal_architecture_(software)",children:"hexagonal"}),":"]}),"\n"]}),"\n",(0,r.jsx)(a.h4,{id:"controllescontroladores",children:"CONTROLLES(Controladores):"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"S\xe3o respons\xe1veis por receber as requisi\xe7\xf5es HTTP e controlar o fluxo de dados dentro da aplica\xe7\xe3o. Eles s\xe3o respons\xe1veis por receber as requisi\xe7\xf5es e enviar as respostas adequadas ao cliente."}),"\n"]}),"\n",(0,r.jsx)(a.h4,{id:"repositoriesreposit\xf3rios",children:"REPOSITORIES(Reposit\xf3rios):"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"S\xe3o respons\xe1veis por gerenciar o acesso e manipula\xe7\xe3o de dados. Eles s\xe3o respons\xe1veis por criar, ler, atualizar e excluir (CRUD) registros em um banco de dados ou qualquer outro tipo de armazenamento de dados."}),"\n"]}),"\n",(0,r.jsx)(a.h4,{id:"domaindom\xednio",children:"DOMAIN(Dom\xednio):"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"\xc9 a camada que cont\xe9m as regras de neg\xf3cio da aplica\xe7\xe3o. \xc9 aqui que as regras de valida\xe7\xe3o e l\xf3gica de neg\xf3cio s\xe3o implementadas."}),"\n"]}),"\n",(0,r.jsx)(a.h4,{id:"entitiesentidades",children:"ENTITIES(Entidades):"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"S\xe3o objetos que representam os dados da aplica\xe7\xe3o, como usu\xe1rios, produtos, pedidos, etc. Esses objetos s\xe3o usados para transferir dados entre as camadas da aplica\xe7\xe3o."}),"\n"]}),"\n",(0,r.jsx)(a.h4,{id:"modules-m\xf3dulos",children:"MODULES (M\xf3dulos):"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"S\xe3o pacotes que cont\xeam funcionalidades relacionadas. Por exemplo, um m\xf3dulo de autentica\xe7\xe3o pode conter rotas, controladores, servi\xe7os e reposit\xf3rios relacionados \xe0 autentica\xe7\xe3o."}),"\n"]}),"\n",(0,r.jsx)(a.h4,{id:"factoryf\xe1brica",children:"FACTORY(F\xe1brica):"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"\xc9 um padr\xe3o de projeto utilizado para criar objetos de forma din\xe2mica. A camada de f\xe1brica \xe9 respons\xe1vel por instanciar e configurar objetos complexos, como controladores, servi\xe7os e reposit\xf3rios, e fornec\xea-los para outras partes da aplica\xe7\xe3o."}),"\n"]}),"\n",(0,r.jsx)(a.h4,{id:"dtoobjeto-de-transfer\xeancia-de-dados",children:"DTO(Objeto de transfer\xeancia de dados):"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"\xc9 uma estrutura de dados que representa os dados relevantes para transfer\xeancia entre diferentes partes do sistema, ajudando a manter a coes\xe3o, desacoplamento e efici\xeancia da comunica\xe7\xe3o entre os componentes."}),"\n"]})]})}function u(e={}){const{wrapper:a}={...(0,o.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,a,s)=>{s.d(a,{R:()=>t,x:()=>n});var r=s(6540);const o={},i=r.createContext(o);function t(e){const a=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function n(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),r.createElement(i.Provider,{value:a},e.children)}}}]);