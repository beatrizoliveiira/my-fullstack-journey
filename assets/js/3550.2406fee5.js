"use strict";(self.webpackChunkbraintris=self.webpackChunkbraintris||[]).push([[3550],{9813:(e,t,r)=>{r.d(t,{A:()=>a});r(6540);var n=r(1062),o=r(4848);function a(e){var t=e.children,r=e.fallback;return(0,n.A)()?(0,o.jsx)(o.Fragment,{children:null==t?void 0:t()}):null!=r?r:null}},2029:(e,t,r)=>{r.r(t),r.d(t,{ReactEmbed:()=>x,default:()=>S});var n=r(1635),o=r(6540),a=/\.(mp3|wav|weba|aac|oga|m4a|mp4|ogg|opus|ts|wma|mpga)($|\?)/i;const i=function(e){return a.test(e)};var c=/\.(m4a|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx|mp4|og[gv]|webm|mov|m4v|m3u8|mpd)($|\?)/i,u=/facebook\.com\/([^/?].+\/)?video(s|\.php)[/?].*$/,s=/(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,l=/(?:www\.|go\.)?twitch\.tv\/([a-z0-9_]+)($|\?)/,f=/^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?$/,p=/vimeo\.com\/.+/,d=/vimeo\.com\/external\/.+\.mp4/,y=/mixcloud\.com\/([^/]+\/[^/]+)/,h=/streamable\.com\/([a-z0-9]+)$/;const m=function(e){return function(e){return u.test(e)}(e)||function(e){return s.test(e)||l.test(e)}(e)||function(e){return f.test(e)}(e)||function(e){return!d.test(e)&&p.test(e)}(e)||function(e){return y.test(e)}(e)||function(e){return h.test(e)}(e)||function(e){return c.test(e)}(e)};var b=/\.(pdf)($|\?)/i;const _=function(e){return b.test(e)};const v=function(e,t){var r=t.hostname,n=t.url;switch(r){case"twitter.com":return function(e,t){var r=t.pathname.split("/");if(r.length)return[e.tweet,r[r.length-1]]}(e,t);case"www.youtube.com":case"youtu.be":case"youtube.com":return function(e,t){var r=t.search.match(/v=([^\&]+)(&|$)/),n=t.pathname.replace("/","");return r?[e.youtube,r[1]]:n?[e.youtube,n]:void 0}(e,t);case"soundcloud.com":return[e.soundcloud,""];case"jsfiddle.net":return function(e,t){var r=t.pathname.split("/");if(!(r.length<2))return[e.jsfiddle,r[1]]}(e,t);case"imgur.com":return function(e,t){var r=t.url.match(/\/(?:a|gallery)\/([^\/]+)(?:\/|$)/);if(r)return[e.imgur,r[1]]}(e,t);case"www.instagram.com":return[e.instagram,""];case"gist.github.com":return function(e,t){var r=t.pathname.split("/");if(!(r.length<3))return[e.gist,r[2]]}(e,t);case"repl.it":return function(e,t){var r=t.pathname.split("/");if(3===r.length){var n="".concat(r[1],"/").concat(r[2]);return[e.replit,n]}}(e,t);case"www.figma.com":return[e.figma,""];case"www.google.com":return function(e,t){var r=t.pathname.split("/");if("maps"===r[1]&&r.length>=3)return[e.gmaps,""]}(e,t);case"gfycat.com":return function(e,t){var r=t.pathname.split("/");if(!(r.length<2)&&r[1]&&"string"==typeof r[1]){var n=r[1].split("-");return[e.gfycat,n[0]]}}(e,t);case"dropbox.com":case"www.dropbox.com":return[e.dropbox,""];case"codesandbox.io":return n.includes("codesandbox.io/embed/")?[e.codesandbox,""]:void 0;default:return _(n)?[e.pdf,""]:i(n)?[e.simplePlayer,""]:m(n)?[e.reactPlayer,""]:void 0}};const w=function(e,t,r,a){return o.createElement(e,(0,n.__assign)({},a.url,{id:t,width:r.width,isDark:r.isDark,renderWrap:r.renderWrap,renderVoid:function(e){return r.renderVoid(r,a,e)}}))};var g="object"==typeof window,P={dropbox:o.lazy((function(){return r.e(6874).then(r.bind(r,6874))})),figma:o.lazy((function(){return Promise.all([r.e(3671),r.e(5352)]).then(r.bind(r,5352))})),gfycat:o.lazy((function(){return r.e(5048).then(r.bind(r,5048))})),gist:o.lazy((function(){return r.e(2883).then(r.bind(r,2883))})),gmaps:o.lazy((function(){return Promise.all([r.e(3671),r.e(4526)]).then(r.bind(r,4526))})),imgur:o.lazy((function(){return r.e(5512).then(r.bind(r,5512))})),instagram:o.lazy((function(){return r.e(1670).then(r.bind(r,1670))})),jsfiddle:o.lazy((function(){return Promise.all([r.e(3671),r.e(2613)]).then(r.bind(r,2613))})),pdf:o.lazy((function(){return r.e(2582).then(r.bind(r,2582))})),reactPlayer:o.lazy((function(){return r.e(8791).then(r.bind(r,8791))})),replit:o.lazy((function(){return r.e(8556).then(r.bind(r,8556))})),simplePlayer:o.lazy((function(){return Promise.all([r.e(3671),r.e(7122)]).then(r.bind(r,7122))})),soundcloud:o.lazy((function(){return r.e(6256).then(r.bind(r,6256))})),tweet:o.lazy((function(){return Promise.all([r.e(3671),r.e(9089)]).then(r.bind(r,9089))})),youtube:o.lazy((function(){return Promise.all([r.e(3671),r.e(9082)]).then(r.bind(r,9082))})),codesandbox:o.lazy((function(){return r.e(3400).then(r.bind(r,3400))}))},j=function(){return null},O=function(e){return e},x=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={},t}return(0,n.__extends)(t,e),t.getDerivedStateFromProps=function(e){if(!g)return null;if("string"==typeof e.url)try{var t=new URL(e.url),r=t.hostname,n=t.pathname,o=t.search,a=t.hash;return{url:{url:e.url,hostname:r,pathname:n,search:o,hash:a}}}catch(i){return{error:i}}},t.getDerivedStateFromError=function(e){return{error:e}},t.prototype.render=function(){var e;if(!g)return null;var t,r=(this,this.props),n=this.state;if(n.error)return r.renderVoid(r,n,n.error);try{t=r.router(r.blocks,n.url)}catch(i){return console.error("Could not route block:",i),r.renderVoid(r,n,i)}if(!t||!t[0])return r.renderVoid(r,n);var o=(e=t)[0],a=e[1];return r.render(o,a,r,n)},t.defaultProps={width:"object"==typeof window?window.innerWidth:0,isDark:!1,blocks:P,router:v,render:w,renderVoid:j,renderWrap:O},t}(o.PureComponent);const S=x},7656:(e,t,r)=>{r.d(t,{A:()=>i});var n=r(1635),o=r(6540),a=(r(2029),o.lazy((function(){return Promise.resolve().then(r.bind(r,2029))})));const i=function(e){return o.createElement(o.Suspense,{fallback:e.fallback||null},o.createElement(a,(0,n.__assign)({},e)))}},8453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>c});var n=r(6540);const o={},a=n.createContext(o);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(a.Provider,{value:t},e.children)}},1635:(e,t,r)=>{r.r(t),r.d(t,{__addDisposableResource:()=>C,__assign:()=>a,__asyncDelegator:()=>x,__asyncGenerator:()=>O,__asyncValues:()=>S,__await:()=>j,__awaiter:()=>y,__classPrivateFieldGet:()=>D,__classPrivateFieldIn:()=>R,__classPrivateFieldSet:()=>A,__createBinding:()=>m,__decorate:()=>c,__disposeResources:()=>F,__esDecorate:()=>s,__exportStar:()=>b,__extends:()=>o,__generator:()=>h,__importDefault:()=>T,__importStar:()=>z,__makeTemplateObject:()=>E,__metadata:()=>d,__param:()=>u,__propKey:()=>f,__read:()=>v,__rest:()=>i,__runInitializers:()=>l,__setFunctionName:()=>p,__spread:()=>w,__spreadArray:()=>P,__spreadArrays:()=>g,__values:()=>_,default:()=>$});var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},n(e,t)};function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var a=function(){return a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a.apply(this,arguments)};function i(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}function c(e,t,r,n){var o,a=arguments.length,i=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(a<3?o(i):a>3?o(t,r,i):o(t,r))||i);return a>3&&i&&Object.defineProperty(t,r,i),i}function u(e,t){return function(r,n){t(r,n,e)}}function s(e,t,r,n,o,a){function i(e){if(void 0!==e&&"function"!=typeof e)throw new TypeError("Function expected");return e}for(var c,u=n.kind,s="getter"===u?"get":"setter"===u?"set":"value",l=!t&&e?n.static?e:e.prototype:null,f=t||(l?Object.getOwnPropertyDescriptor(l,n.name):{}),p=!1,d=r.length-1;d>=0;d--){var y={};for(var h in n)y[h]="access"===h?{}:n[h];for(var h in n.access)y.access[h]=n.access[h];y.addInitializer=function(e){if(p)throw new TypeError("Cannot add initializers after decoration has completed");a.push(i(e||null))};var m=(0,r[d])("accessor"===u?{get:f.get,set:f.set}:f[s],y);if("accessor"===u){if(void 0===m)continue;if(null===m||"object"!=typeof m)throw new TypeError("Object expected");(c=i(m.get))&&(f.get=c),(c=i(m.set))&&(f.set=c),(c=i(m.init))&&o.unshift(c)}else(c=i(m))&&("field"===u?o.unshift(c):f[s]=c)}l&&Object.defineProperty(l,n.name,f),p=!0}function l(e,t,r){for(var n=arguments.length>2,o=0;o<t.length;o++)r=n?t[o].call(e,r):t[o].call(e);return n?r:void 0}function f(e){return"symbol"==typeof e?e:"".concat(e)}function p(e,t,r){return"symbol"==typeof t&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})}function d(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function y(e,t,r,n){return new(r||(r=Promise))((function(o,a){function i(e){try{u(n.next(e))}catch(t){a(t)}}function c(e){try{u(n.throw(e))}catch(t){a(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,c)}u((n=n.apply(e,t||[])).next())}))}function h(e,t){var r,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(c){return function(u){return function(c){if(r)throw new TypeError("Generator is already executing.");for(;a&&(a=0,c[0]&&(i=0)),i;)try{if(r=1,n&&(o=2&c[0]?n.return:c[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,c[1])).done)return o;switch(n=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,n=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){i=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){i.label=c[1];break}if(6===c[0]&&i.label<o[1]){i.label=o[1],o=c;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(c);break}o[2]&&i.ops.pop(),i.trys.pop();continue}c=t.call(e,i)}catch(u){c=[6,u],n=0}finally{r=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,u])}}}var m=Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]};function b(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||m(t,e,r)}function _(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function v(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,a=r.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(n=a.next()).done;)i.push(n.value)}catch(c){o={error:c}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(o)throw o.error}}return i}function w(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(v(arguments[t]));return e}function g(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var a=arguments[t],i=0,c=a.length;i<c;i++,o++)n[o]=a[i];return n}function P(e,t,r){if(r||2===arguments.length)for(var n,o=0,a=t.length;o<a;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}function j(e){return this instanceof j?(this.v=e,this):new j(e)}function O(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(e,t||[]),a=[];return n={},i("next"),i("throw"),i("return"),n[Symbol.asyncIterator]=function(){return this},n;function i(e){o[e]&&(n[e]=function(t){return new Promise((function(r,n){a.push([e,t,r,n])>1||c(e,t)}))})}function c(e,t){try{(r=o[e](t)).value instanceof j?Promise.resolve(r.value.v).then(u,s):l(a[0][2],r)}catch(n){l(a[0][3],n)}var r}function u(e){c("next",e)}function s(e){c("throw",e)}function l(e,t){e(t),a.shift(),a.length&&c(a[0][0],a[0][1])}}function x(e){var t,r;return t={},n("next"),n("throw",(function(e){throw e})),n("return"),t[Symbol.iterator]=function(){return this},t;function n(n,o){t[n]=e[n]?function(t){return(r=!r)?{value:j(e[n](t)),done:!1}:o?o(t):t}:o}}function S(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e=_(e),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(r){t[r]=e[r]&&function(t){return new Promise((function(n,o){(function(e,t,r,n){Promise.resolve(n).then((function(t){e({value:t,done:r})}),t)})(n,o,(t=e[r](t)).done,t.value)}))}}}function E(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var k=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function z(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&m(t,e,r);return k(t,e),t}function T(e){return e&&e.__esModule?e:{default:e}}function D(e,t,r,n){if("a"===r&&!n)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?n:"a"===r?n.call(e):n?n.value:t.get(e)}function A(e,t,r,n,o){if("m"===n)throw new TypeError("Private method is not writable");if("a"===n&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?o.call(e,r):o?o.value=r:t.set(e,r),r}function R(e,t){if(null===t||"object"!=typeof t&&"function"!=typeof t)throw new TypeError("Cannot use 'in' operator on non-object");return"function"==typeof e?t===e:e.has(t)}function C(e,t,r){if(null!=t){if("object"!=typeof t&&"function"!=typeof t)throw new TypeError("Object expected.");var n;if(r){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");n=t[Symbol.asyncDispose]}if(void 0===n){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");n=t[Symbol.dispose]}if("function"!=typeof n)throw new TypeError("Object not disposable.");e.stack.push({value:t,dispose:n,async:r})}else r&&e.stack.push({async:!0});return t}var I="function"==typeof SuppressedError?SuppressedError:function(e,t,r){var n=new Error(r);return n.name="SuppressedError",n.error=e,n.suppressed=t,n};function F(e){function t(t){e.error=e.hasError?new I(t,e.error,"An error was suppressed during disposal."):t,e.hasError=!0}return function r(){for(;e.stack.length;){var n=e.stack.pop();try{var o=n.dispose&&n.dispose.call(n.value);if(n.async)return Promise.resolve(o).then(r,(function(e){return t(e),r()}))}catch(a){t(a)}}if(e.hasError)throw e.error}()}const $={__extends:o,__assign:a,__rest:i,__decorate:c,__param:u,__metadata:d,__awaiter:y,__generator:h,__createBinding:m,__exportStar:b,__values:_,__read:v,__spread:w,__spreadArrays:g,__spreadArray:P,__await:j,__asyncGenerator:O,__asyncDelegator:x,__asyncValues:S,__makeTemplateObject:E,__importStar:z,__importDefault:T,__classPrivateFieldGet:D,__classPrivateFieldSet:A,__classPrivateFieldIn:R,__addDisposableResource:C,__disposeResources:F}}}]);