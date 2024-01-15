"use strict";(self.webpackChunkbraintris=self.webpackChunkbraintris||[]).push([[6030],{4137:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(a),d=r,b=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return a?n.createElement(b,i(i({ref:t},p),{},{components:a})):n.createElement(b,i({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4338:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>m});var n=a(7462),r=a(3366),o=(a(7294),a(4137)),i=["components"],l={id:"use-mutation",title:"Migrando getMutationCallbacks para useMutationCallbacks",tags:["use-mutation","relay","content","notes","pt-PR"],slug:"use-mutation",group:"relay/"},s=void 0,u={unversionedId:"relay/use-mutation",id:"relay/use-mutation",title:"Migrando getMutationCallbacks para useMutationCallbacks",description:"O getMutationCallback ele facilita a execu\xe7\xe3o de mutations e \xe9 uma solu\xe7\xe3o mais antiga.",source:"@site/docs/relay/use-mutation.md",sourceDirName:"relay",slug:"/relay/use-mutation",permalink:"/braintris/docs/relay/use-mutation",draft:!1,tags:[{label:"use-mutation",permalink:"/braintris/docs/tags/use-mutation"},{label:"relay",permalink:"/braintris/docs/tags/relay"},{label:"content",permalink:"/braintris/docs/tags/content"},{label:"notes",permalink:"/braintris/docs/tags/notes"},{label:"pt-PR",permalink:"/braintris/docs/tags/pt-pr"}],version:"current",lastUpdatedBy:"Beatriz Oliveira",lastUpdatedAt:1705283014,formattedLastUpdatedAt:"15 de jan. de 2024",frontMatter:{id:"use-mutation",title:"Migrando getMutationCallbacks para useMutationCallbacks",tags:["use-mutation","relay","content","notes","pt-PR"],slug:"use-mutation",group:"relay/"},sidebar:"tutorialSidebar",previous:{title:"Relay",permalink:"/braintris/docs/category/relay"},next:{title:"Vue",permalink:"/braintris/docs/category/vue"}},p={},m=[],c={toc:m};function d(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"O ",(0,o.kt)("strong",{parentName:"p"},"getMutationCallback")," ele facilita a execu\xe7\xe3o de mutations e \xe9 uma solu\xe7\xe3o mais antiga."),(0,o.kt)("p",null,"Voc\xea passava um objeto com algumas informa\xe7\xf5es (nome da mutation, fun\xe7\xe3o que \xe9 executada com erro, fun\xe7\xe3o executada ao completar com sucesso) ele retorna um objeto contendo 2 fun\xe7\xf5es (onCompleted e onError)"),(0,o.kt)("p",null,"ex:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const { onError, oncompleted } = getMutationCallbacks ({\n   name: 'UserAddOrEditExample',\n   showSanckbar,\n   afterError: () => {\n       setSubmitting(false);\n       isHandlingNext.current = false;\n   },\n   afterCompleted: () => {\n       handleNextStep();\n       setSubmitting(false);\n       isHandlingNext.current = false;\n   }\n});\n\nUserAddOrEditExample.commit(input, onCompleted, onError)\n")),(0,o.kt)("p",null,"\xc9 passado as fun\xe7\xf5es ",(0,o.kt)("inlineCode",{parentName:"p"},"onError")," e ",(0,o.kt)("inlineCode",{parentName:"p"},"onCompleted")," para a fun\xe7\xe3o ",(0,o.kt)("inlineCode",{parentName:"p"},"commit")," que recebe as mesmas e as executa"),(0,o.kt)("p",null,"note:\nO ",(0,o.kt)("strong",{parentName:"p"},"useMutation")," \xe9 um hook do relay, ",(0,o.kt)("strong",{parentName:"p"},"useMutationCallbacks")," tamb\xe9m um hook e uma nova solu\xe7\xe3o para executar uma mutation."),(0,o.kt)("p",null,"Exemplo do uso do useMutationCallbacks:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"    const [editUserName] = useMutationCallbacks({\n        name: 'UserEditName',\n        mutation: 'UserEditNameMutation',\n        success: t('Successfully changed user name'),\n        error: t('Error editing user name'),\n    });\n")),(0,o.kt)("p",null,"Ele retorna uma fun\xe7\xe3o ",(0,o.kt)("inlineCode",{parentName:"p"},"commit"),", tamb\xe9m se responsibiliza pelo snackbar ( exibe mensagens se voc\xea passou no ",(0,o.kt)("inlineCode",{parentName:"p"},"success")," ou no ",(0,o.kt)("inlineCode",{parentName:"p"},"error"),")"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Motivo da refatora\xe7\xe3o:"),"\nO getMutationCallbacks n\xe3o \xe9 robusto e precisa de muitas linhas de c\xf3digo para chamar a fun\xe7\xe3o e ele dificulta muito a leitura. J\xe1 o useMutationCallbacks \xe9 bem robusto e trata muita abstra\xe7\xe3o, \xe9 mais f\xe1cil de usar e diferente do getMutationCallbacks ele retorna a fun\xe7\xe3o commit."),(0,o.kt)("p",null,"Com getMutationCallbacks:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const mutation = graphql `\n    mutation UserEditName ($input: UserEditName!) {\n        UserEditName(input: $input) {\n            error\n        }\n    }\n`;\n\nconst commit = (\n    input: UserEditNameInput\n    onCompleted: (response: UserEditNameMutationResponse) => void,\n    onError: (error: Error) => void,\n) => {\n    const variables = {\n        input,\n    }\n\n    commitMutation(Environment, {\n        mutation,\n        variables,\n        onCompleted,\n        onError,\n    });\n};\n\nexport default { commit };\n")),(0,o.kt)("p",null,"Com useMutationCallbacks:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"export const UserEditName = graphql`\n    mutation UserEditNameMutation($input: UserEditName!){\n        UserEditName(input: $input) {\n            error\n        }\n    }\n`;\n")),(0,o.kt)("p",null,"Refer\xeancias:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://relay.dev/docs/api-reference/use-mutation/"},"https://relay.dev/docs/api-reference/use-mutation/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://relay.dev/docs/guided-tour/updating-data/graphql-mutations/"},"https://relay.dev/docs/guided-tour/updating-data/graphql-mutations/")),(0,o.kt)("li",{parentName:"ul"},"old relay: ",(0,o.kt)("a",{parentName:"li",href:"https://relay.dev/docs/v9.0.0/mutations/#simple-example"},"https://relay.dev/docs/v9.0.0/mutations/#simple-example"))))}d.isMDXComponent=!0}}]);