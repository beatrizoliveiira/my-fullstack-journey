"use strict";(self.webpackChunkbraintris=self.webpackChunkbraintris||[]).push([[5208],{4137:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},f=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),p=l(r),d=o,y=p["".concat(u,".").concat(d)]||p[d]||s[d]||a;return r?n.createElement(y,i(i({ref:t},f),{},{components:r})):n.createElement(y,i({ref:t},f))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},748:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(7294),o=r(1048);function a(e){var t=e.children,r=e.fallback;return(0,o.Z)()?n.createElement(n.Fragment,null,null==t?void 0:t()):null!=r?r:null}},7463:(e,t,r)=>{r.r(t),r.d(t,{ReactEmbed:()=>x,default:()=>E});var n=r(655),o=r(7294),a=/\.(mp3|wav|weba|aac|oga|m4a|mp4|ogg|opus|ts|wma|mpga)($|\?)/i;const i=function(e){return a.test(e)};var c=/\.(m4a|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx|mp4|og[gv]|webm|mov|m4v|m3u8|mpd)($|\?)/i,u=/facebook\.com\/([^/?].+\/)?video(s|\.php)[/?].*$/,l=/(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,f=/(?:www\.|go\.)?twitch\.tv\/([a-z0-9_]+)($|\?)/,s=/^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?$/,p=/vimeo\.com\/.+/,d=/vimeo\.com\/external\/.+\.mp4/,y=/mixcloud\.com\/([^/]+\/[^/]+)/,m=/streamable\.com\/([a-z0-9]+)$/;const h=function(e){return function(e){return u.test(e)}(e)||function(e){return l.test(e)||f.test(e)}(e)||function(e){return s.test(e)}(e)||function(e){return!d.test(e)&&p.test(e)}(e)||function(e){return y.test(e)}(e)||function(e){return m.test(e)}(e)||function(e){return c.test(e)}(e)};var b=/\.(pdf)($|\?)/i;const v=function(e){return b.test(e)};const w=function(e,t){var r=t.hostname,n=t.url;switch(r){case"twitter.com":return function(e,t){var r=t.pathname.split("/");if(r.length)return[e.tweet,r[r.length-1]]}(e,t);case"www.youtube.com":case"youtu.be":case"youtube.com":return function(e,t){var r=t.search.match(/v=([^\&]+)(&|$)/),n=t.pathname.replace("/","");return r?[e.youtube,r[1]]:n?[e.youtube,n]:void 0}(e,t);case"soundcloud.com":return[e.soundcloud,""];case"jsfiddle.net":return function(e,t){var r=t.pathname.split("/");if(!(r.length<2))return[e.jsfiddle,r[1]]}(e,t);case"imgur.com":return function(e,t){var r=t.url.match(/\/(?:a|gallery)\/([^\/]+)(?:\/|$)/);if(r)return[e.imgur,r[1]]}(e,t);case"www.instagram.com":return[e.instagram,""];case"gist.github.com":return function(e,t){var r=t.pathname.split("/");if(!(r.length<3))return[e.gist,r[2]]}(e,t);case"repl.it":return function(e,t){var r=t.pathname.split("/");if(3===r.length){var n="".concat(r[1],"/").concat(r[2]);return[e.replit,n]}}(e,t);case"www.figma.com":return[e.figma,""];case"www.google.com":return function(e,t){var r=t.pathname.split("/");if("maps"===r[1]&&r.length>=3)return[e.gmaps,""]}(e,t);case"gfycat.com":return function(e,t){var r=t.pathname.split("/");if(!(r.length<2)&&r[1]&&"string"==typeof r[1]){var n=r[1].split("-");return[e.gfycat,n[0]]}}(e,t);case"dropbox.com":case"www.dropbox.com":return[e.dropbox,""];case"codesandbox.io":return n.includes("codesandbox.io/embed/")?[e.codesandbox,""]:void 0;default:return v(n)?[e.pdf,""]:i(n)?[e.simplePlayer,""]:h(n)?[e.reactPlayer,""]:void 0}};const g=function(e,t,r,a){return o.createElement(e,(0,n.__assign)({},a.url,{id:t,width:r.width,isDark:r.isDark,renderWrap:r.renderWrap,renderVoid:function(e){return r.renderVoid(r,a,e)}}))};var _="object"==typeof window,O={dropbox:o.lazy((function(){return r.e(6409).then(r.bind(r,726))})),figma:o.lazy((function(){return Promise.all([r.e(6595),r.e(7766)]).then(r.bind(r,7766))})),gfycat:o.lazy((function(){return r.e(3098).then(r.bind(r,3098))})),gist:o.lazy((function(){return r.e(1811).then(r.bind(r,1811))})),gmaps:o.lazy((function(){return Promise.all([r.e(6595),r.e(7486)]).then(r.bind(r,7486))})),imgur:o.lazy((function(){return r.e(2694).then(r.bind(r,2694))})),instagram:o.lazy((function(){return r.e(5341).then(r.bind(r,5341))})),jsfiddle:o.lazy((function(){return Promise.all([r.e(6595),r.e(7539)]).then(r.bind(r,7539))})),pdf:o.lazy((function(){return r.e(9184).then(r.bind(r,9184))})),reactPlayer:o.lazy((function(){return r.e(9456).then(r.bind(r,9456))})),replit:o.lazy((function(){return r.e(3294).then(r.bind(r,3294))})),simplePlayer:o.lazy((function(){return Promise.all([r.e(6595),r.e(8328)]).then(r.bind(r,8328))})),soundcloud:o.lazy((function(){return r.e(6213).then(r.bind(r,6213))})),tweet:o.lazy((function(){return Promise.all([r.e(6595),r.e(4416)]).then(r.bind(r,4416))})),youtube:o.lazy((function(){return Promise.all([r.e(6595),r.e(8391)]).then(r.bind(r,8391))})),codesandbox:o.lazy((function(){return r.e(5308).then(r.bind(r,5308))}))},P=function(){return null},j=function(e){return e},x=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={},t}return(0,n.__extends)(t,e),t.getDerivedStateFromProps=function(e){if(!_)return null;if("string"==typeof e.url)try{var t=new URL(e.url),r=t.hostname,n=t.pathname,o=t.search,a=t.hash;return{url:{url:e.url,hostname:r,pathname:n,search:o,hash:a}}}catch(i){return{error:i}}},t.getDerivedStateFromError=function(e){return{error:e}},t.prototype.render=function(){var e;if(!_)return null;var t,r=(this,this.props),n=this.state;if(n.error)return r.renderVoid(r,n,n.error);try{t=r.router(r.blocks,n.url)}catch(i){return console.error("Could not route block:",i),r.renderVoid(r,n,i)}if(!t||!t[0])return r.renderVoid(r,n);var o=(e=t)[0],a=e[1];return r.render(o,a,r,n)},t.defaultProps={width:"object"==typeof window?window.innerWidth:0,isDark:!1,blocks:O,router:w,render:g,renderVoid:P,renderWrap:j},t}(o.PureComponent);const E=x},6095:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(655),o=r(7294),a=(r(7463),o.lazy((function(){return Promise.resolve().then(r.bind(r,7463))})));const i=function(e){return o.createElement(o.Suspense,{fallback:e.fallback||null},o.createElement(a,(0,n.__assign)({},e)))}},655:(e,t,r)=>{r.r(t),r.d(t,{__assign:()=>a,__asyncDelegator:()=>x,__asyncGenerator:()=>j,__asyncValues:()=>E,__await:()=>P,__awaiter:()=>y,__classPrivateFieldGet:()=>D,__classPrivateFieldIn:()=>I,__classPrivateFieldSet:()=>C,__createBinding:()=>h,__decorate:()=>c,__esDecorate:()=>l,__exportStar:()=>b,__extends:()=>o,__generator:()=>m,__importDefault:()=>T,__importStar:()=>z,__makeTemplateObject:()=>S,__metadata:()=>d,__param:()=>u,__propKey:()=>s,__read:()=>w,__rest:()=>i,__runInitializers:()=>f,__setFunctionName:()=>p,__spread:()=>g,__spreadArray:()=>O,__spreadArrays:()=>_,__values:()=>v});var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},n(e,t)};function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var a=function(){return a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a.apply(this,arguments)};function i(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}function c(e,t,r,n){var o,a=arguments.length,i=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(a<3?o(i):a>3?o(t,r,i):o(t,r))||i);return a>3&&i&&Object.defineProperty(t,r,i),i}function u(e,t){return function(r,n){t(r,n,e)}}function l(e,t,r,n,o,a){function i(e){if(void 0!==e&&"function"!=typeof e)throw new TypeError("Function expected");return e}for(var c,u=n.kind,l="getter"===u?"get":"setter"===u?"set":"value",f=!t&&e?n.static?e:e.prototype:null,s=t||(f?Object.getOwnPropertyDescriptor(f,n.name):{}),p=!1,d=r.length-1;d>=0;d--){var y={};for(var m in n)y[m]="access"===m?{}:n[m];for(var m in n.access)y.access[m]=n.access[m];y.addInitializer=function(e){if(p)throw new TypeError("Cannot add initializers after decoration has completed");a.push(i(e||null))};var h=(0,r[d])("accessor"===u?{get:s.get,set:s.set}:s[l],y);if("accessor"===u){if(void 0===h)continue;if(null===h||"object"!=typeof h)throw new TypeError("Object expected");(c=i(h.get))&&(s.get=c),(c=i(h.set))&&(s.set=c),(c=i(h.init))&&o.push(c)}else(c=i(h))&&("field"===u?o.push(c):s[l]=c)}f&&Object.defineProperty(f,n.name,s),p=!0}function f(e,t,r){for(var n=arguments.length>2,o=0;o<t.length;o++)r=n?t[o].call(e,r):t[o].call(e);return n?r:void 0}function s(e){return"symbol"==typeof e?e:"".concat(e)}function p(e,t,r){return"symbol"==typeof t&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})}function d(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function y(e,t,r,n){return new(r||(r=Promise))((function(o,a){function i(e){try{u(n.next(e))}catch(t){a(t)}}function c(e){try{u(n.throw(e))}catch(t){a(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,c)}u((n=n.apply(e,t||[])).next())}))}function m(e,t){var r,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(c){return function(u){return function(c){if(r)throw new TypeError("Generator is already executing.");for(;a&&(a=0,c[0]&&(i=0)),i;)try{if(r=1,n&&(o=2&c[0]?n.return:c[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,c[1])).done)return o;switch(n=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,n=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){i=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){i.label=c[1];break}if(6===c[0]&&i.label<o[1]){i.label=o[1],o=c;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(c);break}o[2]&&i.ops.pop(),i.trys.pop();continue}c=t.call(e,i)}catch(u){c=[6,u],n=0}finally{r=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,u])}}}var h=Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]};function b(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||h(t,e,r)}function v(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function w(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,a=r.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(n=a.next()).done;)i.push(n.value)}catch(c){o={error:c}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(o)throw o.error}}return i}function g(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(w(arguments[t]));return e}function _(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var a=arguments[t],i=0,c=a.length;i<c;i++,o++)n[o]=a[i];return n}function O(e,t,r){if(r||2===arguments.length)for(var n,o=0,a=t.length;o<a;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}function P(e){return this instanceof P?(this.v=e,this):new P(e)}function j(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(e,t||[]),a=[];return n={},i("next"),i("throw"),i("return"),n[Symbol.asyncIterator]=function(){return this},n;function i(e){o[e]&&(n[e]=function(t){return new Promise((function(r,n){a.push([e,t,r,n])>1||c(e,t)}))})}function c(e,t){try{(r=o[e](t)).value instanceof P?Promise.resolve(r.value.v).then(u,l):f(a[0][2],r)}catch(n){f(a[0][3],n)}var r}function u(e){c("next",e)}function l(e){c("throw",e)}function f(e,t){e(t),a.shift(),a.length&&c(a[0][0],a[0][1])}}function x(e){var t,r;return t={},n("next"),n("throw",(function(e){throw e})),n("return"),t[Symbol.iterator]=function(){return this},t;function n(n,o){t[n]=e[n]?function(t){return(r=!r)?{value:P(e[n](t)),done:!1}:o?o(t):t}:o}}function E(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e=v(e),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(r){t[r]=e[r]&&function(t){return new Promise((function(n,o){(function(e,t,r,n){Promise.resolve(n).then((function(t){e({value:t,done:r})}),t)})(n,o,(t=e[r](t)).done,t.value)}))}}}function S(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var k=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function z(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&h(t,e,r);return k(t,e),t}function T(e){return e&&e.__esModule?e:{default:e}}function D(e,t,r,n){if("a"===r&&!n)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?n:"a"===r?n.call(e):n?n.value:t.get(e)}function C(e,t,r,n,o){if("m"===n)throw new TypeError("Private method is not writable");if("a"===n&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?o.call(e,r):o?o.value=r:t.set(e,r),r}function I(e,t){if(null===t||"object"!=typeof t&&"function"!=typeof t)throw new TypeError("Cannot use 'in' operator on non-object");return"function"==typeof e?t===e:e.has(t)}}}]);