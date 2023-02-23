"use strict";(self.webpackChunkbraintris=self.webpackChunkbraintris||[]).push([[4298],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,f=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},231:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={id:"use-mutation",title:"Migrando getMutationCallbacks para useMutationCallbacks",tags:["use-mutation","relay","content","notes","pt-PR"],slug:"use-mutation",group:"/"},l=void 0,u={unversionedId:"use-mutation",id:"use-mutation",title:"Migrando getMutationCallbacks para useMutationCallbacks",description:"O getMutationCallback ele facilita a execu\xe7\xe3o de mutations e \xe9 uma solu\xe7\xe3o mais antiga.",source:"@site/docs/use-mutation.md",sourceDirName:".",slug:"/use-mutation",permalink:"/docs/use-mutation",draft:!1,tags:[{label:"use-mutation",permalink:"/docs/tags/use-mutation"},{label:"relay",permalink:"/docs/tags/relay"},{label:"content",permalink:"/docs/tags/content"},{label:"notes",permalink:"/docs/tags/notes"},{label:"pt-PR",permalink:"/docs/tags/pt-pr"}],version:"current",frontMatter:{id:"use-mutation",title:"Migrando getMutationCallbacks para useMutationCallbacks",tags:["use-mutation","relay","content","notes","pt-PR"],slug:"use-mutation",group:"/"},sidebar:"tutorialSidebar",previous:{title:"Talks",permalink:"/docs/talks"}},p={},m=[],c={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"O ",(0,o.kt)("strong",{parentName:"p"},"getMutationCallback")," ele facilita a execu\xe7\xe3o de mutations e \xe9 uma solu\xe7\xe3o mais antiga."),(0,o.kt)("p",null,"Voc\xea passava um objeto com algumas informa\xe7\xf5es (nome da mutation, fun\xe7\xe3o que \xe9 executada com erro, fun\xe7\xe3o executada ao completar com sucesso) ele retorna um objeto contendo 2 fun\xe7\xf5es (onCompleted e onError)"),(0,o.kt)("p",null,"ex:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const { onError, oncompleted } = getMutationCallbacks ({\n   name: 'UserAddOrEditExample',\n   showSanckbar,\n   afterError: () => {\n       setSubmitting(false);\n       isHandlingNext.current = false;\n   },\n   afterCompleted: () => {\n       handleNextStep();\n       setSubmitting(false);\n       isHandlingNext.current = false;\n   }\n});\n\nUserAddOrEditExample.commit(input, onCompleted, onError)\n")),(0,o.kt)("p",null,"\xc9 passado as fun\xe7\xf5es ",(0,o.kt)("inlineCode",{parentName:"p"},"onError")," e ",(0,o.kt)("inlineCode",{parentName:"p"},"onCompleted")," para a fun\xe7\xe3o ",(0,o.kt)("inlineCode",{parentName:"p"},"commit")," que recebe as mesmas e as executa"),(0,o.kt)("p",null,"note:\nO ",(0,o.kt)("strong",{parentName:"p"},"useMutation")," \xe9 um hook do relay, ",(0,o.kt)("strong",{parentName:"p"},"useMutationCallbacks")," tamb\xe9m um hook e uma nova solu\xe7\xe3o para executar uma mutation."),(0,o.kt)("p",null,"Exemplo do uso do useMutationCallbacks:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"    const [editUserName] = useMutationCallbacks({\n        name: 'UserEditName',\n        mutation: 'UserEditNameMutation',\n        success: t('Successfully changed user name'),\n        error: t('Error editing user name'),\n    });\n")),(0,o.kt)("p",null,"Ele retorna uma fun\xe7\xe3o ",(0,o.kt)("inlineCode",{parentName:"p"},"commit"),", tamb\xe9m se responsibiliza pelo snackbar ( exibe mensagens se voc\xea passou no ",(0,o.kt)("inlineCode",{parentName:"p"},"success")," ou no ",(0,o.kt)("inlineCode",{parentName:"p"},"error"),")"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Motivo da refatora\xe7\xe3o:"),"\nO getMutationCallbacks n\xe3o \xe9 robusto e precisa de muitas linhas de c\xf3digo para chamar a fun\xe7\xe3o e ele dificulta muito a leitura. J\xe1 o useMutationCallbacks \xe9 bem robusto e trata muita abstra\xe7\xe3o, \xe9 mais f\xe1cil de usar e diferente do getMutationCallbacks ele retorna a fun\xe7\xe3o commit."),(0,o.kt)("p",null,"Com getMutationCallbacks:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const mutation = graphql `\n    mutation UserEditName ($input: UserEditName!) {\n        UserEditName(input: $input) {\n            error\n        }\n    }\n`;\n\nconst commit = (\n    input: UserEditNameInput\n    onCompleted: (response: UserEditNameMutationResponse) => void,\n    onError: (error: Error) => void,\n) => {\n    const variables = {\n        input,\n    }\n\n    commitMutation(Environment, {\n        mutation,\n        variables,\n        onCompleted,\n        onError,\n    });\n};\n\nexport default { commit };\n")),(0,o.kt)("p",null,"Com useMutationCallbacks:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"export const UserEditName = graphql`\n    mutation UserEditNameMutation($input: UserEditName!){\n        UserEditName(input: $input) {\n            error\n        }\n    }\n`;\n")),(0,o.kt)("p",null,"Refer\xeancias:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://relay.dev/docs/api-reference/use-mutation/"},"https://relay.dev/docs/api-reference/use-mutation/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://relay.dev/docs/guided-tour/updating-data/graphql-mutations/"},"https://relay.dev/docs/guided-tour/updating-data/graphql-mutations/")),(0,o.kt)("li",{parentName:"ul"},"old relay: ",(0,o.kt)("a",{parentName:"li",href:"https://relay.dev/docs/v9.0.0/mutations/#simple-example"},"https://relay.dev/docs/v9.0.0/mutations/#simple-example"))))}d.isMDXComponent=!0}}]);