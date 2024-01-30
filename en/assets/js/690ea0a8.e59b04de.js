"use strict";(self.webpackChunkbraintris=self.webpackChunkbraintris||[]).push([[9797],{4137:(e,a,n)=>{n.d(a,{Zo:()=>c,kt:()=>u});var s=n(7294);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function t(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,s)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?t(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,s,o=function(e,a){if(null==e)return{};var n,s,o={},t=Object.keys(e);for(s=0;s<t.length;s++)n=t[s],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(s=0;s<t.length;s++)n=t[s],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=s.createContext({}),m=function(e){var a=s.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},c=function(e){var a=m(e.components);return s.createElement(l.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return s.createElement(s.Fragment,{},a)}},p=s.forwardRef((function(e,a){var n=e.components,o=e.mdxType,t=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=m(n),u=o,f=p["".concat(l,".").concat(u)]||p[u]||d[u]||t;return n?s.createElement(f,r(r({ref:a},c),{},{components:n})):s.createElement(f,r({ref:a},c))}));function u(e,a){var n=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var t=n.length,r=new Array(t);r[0]=p;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var m=2;m<t;m++)r[m]=n[m];return s.createElement.apply(null,r)}return s.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3708:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>m,toc:()=>d});var s=n(7462),o=n(3366),t=(n(7294),n(4137)),r=["components"],i={id:"functions-vs-class",title:"Fun\xe7\xf5es vs Classes",tags:["this","javascript","content","pt-br"],slug:"functions-vs-class",group:"javascript/"},l=void 0,m={unversionedId:"javascript/functions-vs-class",id:"javascript/functions-vs-class",title:"Fun\xe7\xf5es vs Classes",description:"Em JavaScript, fun\xe7\xf5es e classes s\xe3o duas formas diferentes de se criar estruturas de c\xf3digo reutiliz\xe1veis.",source:"@site/docs/javascript/functions-vs-class.md",sourceDirName:"javascript",slug:"/javascript/functions-vs-class",permalink:"/braintris/en/docs/javascript/functions-vs-class",draft:!1,tags:[{label:"this",permalink:"/braintris/en/docs/tags/this"},{label:"javascript",permalink:"/braintris/en/docs/tags/javascript"},{label:"content",permalink:"/braintris/en/docs/tags/content"},{label:"pt-br",permalink:"/braintris/en/docs/tags/pt-br"}],version:"current",lastUpdatedBy:"biantris",lastUpdatedAt:1706651350,formattedLastUpdatedAt:"Jan 30, 2024",frontMatter:{id:"functions-vs-class",title:"Fun\xe7\xf5es vs Classes",tags:["this","javascript","content","pt-br"],slug:"functions-vs-class",group:"javascript/"},sidebar:"tutorialSidebar",previous:{title:"Eventos no JavaScript",permalink:"/braintris/en/docs/javascript/eventos-de-clique"},next:{title:"Promise",permalink:"/braintris/en/docs/javascript/promise"}},c={},d=[{value:"Diferen\xe7as:",id:"diferen\xe7as",level:3},{value:"Leia mais sobre",id:"leia-mais-sobre",level:4}],p={toc:d};function u(e){var a=e.components,n=(0,o.Z)(e,r);return(0,t.kt)("wrapper",(0,s.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Em JavaScript, fun\xe7\xf5es e classes s\xe3o duas formas diferentes de se criar estruturas de c\xf3digo reutiliz\xe1veis."),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},(0,t.kt)("strong",{parentName:"p"},"disclaimer:")," esse texto \xe9 mais voltado para o estudo de ",(0,t.kt)("strong",{parentName:"p"},"classes")," em JavaScript")),(0,t.kt)("h3",{id:"diferen\xe7as"},"Diferen\xe7as:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("strong",{parentName:"p"},"Sintaxe"),": A sintaxe para criar fun\xe7\xf5es e classes s\xe3o diferentes. Fun\xe7\xf5es s\xe3o definidas usando a palavra-chave ",(0,t.kt)("inlineCode",{parentName:"p"},"function"),", enquanto classes s\xe3o definidas usando a palavra-chave ",(0,t.kt)("inlineCode",{parentName:"p"},"class"),"."),(0,t.kt)("p",{parentName:"li"},"ex.1"),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-js"},"function nomeDaFuncao(parametro1, parametro2) {\n  // bloco de c\xf3digo da fun\xe7\xe3o\n  return resultado;\n}\n")),(0,t.kt)("p",{parentName:"li"},"ex.2"),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-js"},"class NomeDaClasse {\n  constructor(parametro1, parametro2) {\n    // bloco de c\xf3digo do construtor\n  }\n\n  metodo1() {\n    // bloco de c\xf3digo do m\xe9todo\n  }\n\n  metodo2() {\n    // bloco de c\xf3digo do m\xe9todo\n  }\n}\n"))),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("strong",{parentName:"p"},"Construtores"),": As classes tem um m\xe9todo especial chamado ",(0,t.kt)("inlineCode",{parentName:"p"},"construtor"),", que \xe9 chamado quando uma nova inst\xe2ncia da classe \xe9 criada. Fun\xe7\xf5es n\xe3o tem um m\xe9todo ",(0,t.kt)("inlineCode",{parentName:"p"},"construtor")," padr\xe3o, mas podem ter argumentos que s\xe3o usados para inicializar a fun\xe7\xe3o."),(0,t.kt)("p",{parentName:"li"},"ex."),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-js"},"// Criando uma classe de usu\xe1rio\nclass Usuario {\n  constructor(nome, idade, email) {\n    this.nome = nome;\n    this.idade = idade;\n    this.email = email;\n  }\n\n  // M\xe9todo para exibir informa\xe7\xf5es do usu\xe1rio\n  exibirInfo() {\n    console.log(\n      `Nome: ${this.nome}, Idade: ${this.idade}, Email: ${this.email}`,\n    );\n  }\n}\n\n// Criando um objeto usu\xe1rio com o construtor da classe\nconst usuario1 = new Usuario('Jo\xe3o', 30, 'joao@example.com');\n\n// Chamando o m\xe9todo para exibir informa\xe7\xf5es do usu\xe1rio\nusuario1.exibirInfo();\n"))),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("strong",{parentName:"p"},"Heran\xe7as"),": As classes permitem a cria\xe7\xe3o de hierarquias de classes, onde uma classe pode ser definida como exten\xe7\xe3o de outra classe existente, e herdar seus m\xe9todos e propriedades. Fun\xe7\xf5es n\xe3o tem um recurso de heran\xe7a integrado."),(0,t.kt)("p",{parentName:"li"},"ex."),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-js"},'// Definindo uma classe "Pessoa" como classe base\nclass Pessoa {\n  constructor(nome, idade) {\n    this.nome = nome;\n    this.idade = idade;\n  }\n\n  apresentar() {\n    console.log(\n      `Ol\xe1, meu nome \xe9 ${this.nome} e eu tenho ${this.idade} anos.`,\n    );\n  }\n}\n\n// Definindo uma classe "Usuario" que herda da classe "Pessoa"\nclass Usuario extends Pessoa {\n  constructor(nome, idade, email, senha) {\n    super(nome, idade); // Chama o construtor da classe base para definir o nome e a idade\n    this.email = email;\n    this.senha = senha;\n  }\n\n  logar() {\n    console.log(`Usu\xe1rio ${this.email} fez login.`);\n  }\n\n  // Sobrescreve o m\xe9todo "apresentar" da classe base\n  apresentar() {\n    console.log(\n      `Ol\xe1, meu nome \xe9 ${this.nome} e eu tenho ${this.idade} anos. Meu e-mail \xe9 ${this.email}.`,\n    );\n  }\n}\n\n// Criando um novo objeto da classe "Usuario"\nconst usuario1 = new Usuario(\'Jo\xe3o\', 30, \'joao@mail.com\', \'12345\');\n\n// Chamando o m\xe9todo "apresentar" do objeto\nusuario1.apresentar(); // Ol\xe1, meu nome \xe9 Jo\xe3o e eu tenho 30 anos. Meu e-mail \xe9 joao@mail.com.\n\n// Chamando o m\xe9todo "logar" do objeto\nusuario1.logar(); // Usu\xe1rio joao@mail.com fez login.\n'))),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("strong",{parentName:"p"},"Inst\xe2ncias"),": As classes s\xe3o usadas para criar inst\xe2ncias de objetos, enquanto as fun\xe7\xf5es geralmente s\xe3o usadas como blocos de c\xf3digo reutiliz\xe1veis que podem ser chamados v\xe1rias vezes."),(0,t.kt)("p",{parentName:"li"},"ex."),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-js"},'//Suponha que temos a classe User com as propriedades name e email, e o m\xe9todo sendEmail(), que envia um e-mail para o usu\xe1rio:\n\nclass User {\n  constructor(name, email) {\n    this.name = name;\n    this.email = email;\n  }\n\n  sendEmail() {\n    // C\xf3digo para enviar um e-mail\n    console.log(`E-mail enviado para ${this.name} (${this.email})`);\n  }\n}\n\n//Podemos criar uma inst\xe2ncia da classe User da seguinte maneira:\nconst user1 = new User(\'Jo\xe3o\', \'joao@email.com\');\n\n//Neste exemplo, estamos criando uma inst\xe2ncia da classe User chamada user1 com as propriedades name igual a "Jo\xe3o" e email igual a "joao@email.com".\n\n//Para chamar o m\xe9todo sendEmail() da inst\xe2ncia user1, podemos fazer o seguinte:\n\nuser1.sendEmail(); // imprime "E-mail enviado para Jo\xe3o (joao@email.com)"\n\n//Desta forma, estamos chamando o m\xe9todo sendEmail() na inst\xe2ncia user1, que imprimir\xe1 a mensagem "E-mail enviado para Jo\xe3o (joao@email.com)" no console.\n'))),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("strong",{parentName:"p"},"M\xe9todos"),": As classes geralmente tem m\xe9todos que s\xe3o usados para definir comportamentos espec\xedficos do objeto. As fun\xe7\xf5es tamb\xe9m podem ter m\xe9todos, mas geralmente s\xe3o utilizados para definir comportamentos mais gerais e gen\xe9ricos."))),(0,t.kt)("h4",{id:"leia-mais-sobre"},"Leia mais sobre"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes"},"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes"))))}u.isMDXComponent=!0}}]);