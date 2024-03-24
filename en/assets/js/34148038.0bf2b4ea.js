"use strict";(self.webpackChunkbraintris=self.webpackChunkbraintris||[]).push([[5300],{7227:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(4848),s=n(8453);const r={id:"use-mutation",title:"Migrando getMutationCallbacks para useMutationCallbacks",tags:["use-mutation","relay","content","notes","pt-PR"]},o=void 0,i={id:"database/GraphQL/relay/use-mutation",title:"Migrando getMutationCallbacks para useMutationCallbacks",description:"O getMutationCallback ele facilita a execu\xe7\xe3o de mutations e \xe9 uma solu\xe7\xe3o mais antiga.",source:"@site/docs/database/GraphQL/relay/use-mutation.md",sourceDirName:"database/GraphQL/relay",slug:"/database/GraphQL/relay/use-mutation",permalink:"/braintris/en/docs/database/GraphQL/relay/use-mutation",draft:!1,unlisted:!1,tags:[{label:"use-mutation",permalink:"/braintris/en/docs/tags/use-mutation"},{label:"relay",permalink:"/braintris/en/docs/tags/relay"},{label:"content",permalink:"/braintris/en/docs/tags/content"},{label:"notes",permalink:"/braintris/en/docs/tags/notes"},{label:"pt-PR",permalink:"/braintris/en/docs/tags/pt-pr"}],version:"current",lastUpdatedBy:"biantris",lastUpdatedAt:1711301286,formattedLastUpdatedAt:"Mar 24, 2024",frontMatter:{id:"use-mutation",title:"Migrando getMutationCallbacks para useMutationCallbacks",tags:["use-mutation","relay","content","notes","pt-PR"]},sidebar:"tutorialSidebar",previous:{title:"Relay",permalink:"/braintris/en/docs/category/relay"},next:{title:"Javascript",permalink:"/braintris/en/docs/category/javascript"}},l={},c=[];function u(e){const t={a:"a",code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["O ",(0,a.jsx)(t.strong,{children:"getMutationCallback"})," ele facilita a execu\xe7\xe3o de mutations e \xe9 uma solu\xe7\xe3o mais antiga."]}),"\n",(0,a.jsx)(t.p,{children:"Voc\xea passava um objeto com algumas informa\xe7\xf5es (nome da mutation, fun\xe7\xe3o que \xe9 executada com erro, fun\xe7\xe3o executada ao completar com sucesso) ele retorna um objeto contendo 2 fun\xe7\xf5es (onCompleted e onError)"}),"\n",(0,a.jsx)(t.p,{children:"ex:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"const { onError, oncompleted } = getMutationCallbacks ({\n   name: 'UserAddOrEditExample',\n   showSanckbar,\n   afterError: () => {\n       setSubmitting(false);\n       isHandlingNext.current = false;\n   },\n   afterCompleted: () => {\n       handleNextStep();\n       setSubmitting(false);\n       isHandlingNext.current = false;\n   }\n});\n\nUserAddOrEditExample.commit(input, onCompleted, onError)\n"})}),"\n",(0,a.jsxs)(t.p,{children:["\xc9 passado as fun\xe7\xf5es ",(0,a.jsx)(t.code,{children:"onError"})," e ",(0,a.jsx)(t.code,{children:"onCompleted"})," para a fun\xe7\xe3o ",(0,a.jsx)(t.code,{children:"commit"})," que recebe as mesmas e as executa"]}),"\n",(0,a.jsxs)(t.p,{children:["note:\nO ",(0,a.jsx)(t.strong,{children:"useMutation"})," \xe9 um hook do relay, ",(0,a.jsx)(t.strong,{children:"useMutationCallbacks"})," tamb\xe9m um hook e uma nova solu\xe7\xe3o para executar uma mutation."]}),"\n",(0,a.jsx)(t.p,{children:"Exemplo do uso do useMutationCallbacks:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"    const [editUserName] = useMutationCallbacks({\n        name: 'UserEditName',\n        mutation: 'UserEditNameMutation',\n        success: t('Successfully changed user name'),\n        error: t('Error editing user name'),\n    });\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Ele retorna uma fun\xe7\xe3o ",(0,a.jsx)(t.code,{children:"commit"}),", tamb\xe9m se responsibiliza pelo snackbar ( exibe mensagens se voc\xea passou no ",(0,a.jsx)(t.code,{children:"success"})," ou no ",(0,a.jsx)(t.code,{children:"error"}),")"]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Motivo da refatora\xe7\xe3o:"}),"\nO getMutationCallbacks n\xe3o \xe9 robusto e precisa de muitas linhas de c\xf3digo para chamar a fun\xe7\xe3o e ele dificulta muito a leitura. J\xe1 o useMutationCallbacks \xe9 bem robusto e trata muita abstra\xe7\xe3o, \xe9 mais f\xe1cil de usar e diferente do getMutationCallbacks ele retorna a fun\xe7\xe3o commit."]}),"\n",(0,a.jsx)(t.p,{children:"Com getMutationCallbacks:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"const mutation = graphql `\n    mutation UserEditName ($input: UserEditName!) {\n        UserEditName(input: $input) {\n            error\n        }\n    }\n`;\n\nconst commit = (\n    input: UserEditNameInput\n    onCompleted: (response: UserEditNameMutationResponse) => void,\n    onError: (error: Error) => void,\n) => {\n    const variables = {\n        input,\n    }\n\n    commitMutation(Environment, {\n        mutation,\n        variables,\n        onCompleted,\n        onError,\n    });\n};\n\nexport default { commit };\n"})}),"\n",(0,a.jsx)(t.p,{children:"Com useMutationCallbacks:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"export const UserEditName = graphql`\n    mutation UserEditNameMutation($input: UserEditName!){\n        UserEditName(input: $input) {\n            error\n        }\n    }\n`;\n"})}),"\n",(0,a.jsx)(t.p,{children:"Refer\xeancias:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://relay.dev/docs/api-reference/use-mutation/",children:"https://relay.dev/docs/api-reference/use-mutation/"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://relay.dev/docs/guided-tour/updating-data/graphql-mutations/",children:"https://relay.dev/docs/guided-tour/updating-data/graphql-mutations/"})}),"\n",(0,a.jsxs)(t.li,{children:["old relay: ",(0,a.jsx)(t.a,{href:"https://relay.dev/docs/v9.0.0/mutations/#simple-example",children:"https://relay.dev/docs/v9.0.0/mutations/#simple-example"})]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var a=n(6540);const s={},r=a.createContext(s);function o(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);