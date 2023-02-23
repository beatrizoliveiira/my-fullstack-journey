/*! For license information please see 5341.fdd1a7cb.js.LICENSE.txt */
"use strict";(self.webpackChunkbraintris=self.webpackChunkbraintris||[]).push([[5341],{4020:t=>{var e="%[a-f0-9]{2}",n=new RegExp("("+e+")|([^%]+?)","gi"),r=new RegExp("("+e+")+","gi");function o(t,e){try{return[decodeURIComponent(t.join(""))]}catch(i){}if(1===t.length)return t;e=e||1;var n=t.slice(0,e),r=t.slice(e);return Array.prototype.concat.call([],o(n),o(r))}function i(t){try{return decodeURIComponent(t)}catch(i){for(var e=t.match(n)||[],r=1;r<e.length;r++)e=(t=o(e,r).join("")).match(n)||[];return t}}t.exports=function(t){if("string"!=typeof t)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(e){return function(t){for(var n={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},o=r.exec(t);o;){try{n[o[0]]=decodeURIComponent(o[0])}catch(e){var c=i(o[0]);c!==o[0]&&(n[o[0]]=c)}o=r.exec(t)}n["%C2"]="\ufffd";for(var a=Object.keys(n),u=0;u<a.length;u++){var s=a[u];t=t.replace(new RegExp(s,"g"),n[s])}return t}(t)}}},7418:t=>{var e=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(t){r[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(t,i){for(var c,a,u=o(t),s=1;s<arguments.length;s++){for(var p in c=Object(arguments[s]))n.call(c,p)&&(u[p]=c[p]);if(e){a=e(c);for(var f=0;f<a.length;f++)r.call(c,a[f])&&(u[a[f]]=c[a[f]])}}return u}},7563:(t,e,n)=>{var r=n(8218),o=n(7418),i=n(4020);function c(t,e){return e.encode?e.strict?r(t):encodeURIComponent(t):t}function a(t){return Array.isArray(t)?t.sort():"object"==typeof t?a(Object.keys(t)).sort((function(t,e){return Number(t)-Number(e)})).map((function(e){return t[e]})):t}function u(t){var e=t.indexOf("?");return-1===e?"":t.slice(e+1)}function s(t,e){var n=function(t){var e;switch(t.arrayFormat){case"index":return function(t,n,r){e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),e?(void 0===r[t]&&(r[t]={}),r[t][e[1]]=n):r[t]=n};case"bracket":return function(t,n,r){e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),e?void 0!==r[t]?r[t]=[].concat(r[t],n):r[t]=[n]:r[t]=n};default:return function(t,e,n){void 0!==n[t]?n[t]=[].concat(n[t],e):n[t]=e}}}(e=o({arrayFormat:"none"},e)),r=Object.create(null);return"string"!=typeof t?r:(t=t.trim().replace(/^[?#&]/,""))?(t.split("&").forEach((function(t){var e=t.replace(/\+/g," ").split("="),o=e.shift(),c=e.length>0?e.join("="):void 0;c=void 0===c?null:i(c),n(i(o),c,r)})),Object.keys(r).sort().reduce((function(t,e){var n=r[e];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?t[e]=a(n):t[e]=n,t}),Object.create(null))):r}e.Pz=function(t,e){!1===(e=o({encode:!0,strict:!0,arrayFormat:"none"},e)).sort&&(e.sort=function(){});var n=function(t){switch(t.arrayFormat){case"index":return function(e,n,r){return null===n?[c(e,t),"[",r,"]"].join(""):[c(e,t),"[",c(r,t),"]=",c(n,t)].join("")};case"bracket":return function(e,n){return null===n?c(e,t):[c(e,t),"[]=",c(n,t)].join("")};default:return function(e,n){return null===n?c(e,t):[c(e,t),"=",c(n,t)].join("")}}}(e);return t?Object.keys(t).sort(e.sort).map((function(r){var o=t[r];if(void 0===o)return"";if(null===o)return c(r,e);if(Array.isArray(o)){var i=[];return o.slice().forEach((function(t){void 0!==t&&i.push(n(r,t,i.length))})),i.join("&")}return c(r,e)+"="+c(o,e)})).filter((function(t){return t.length>0})).join("&"):""}},5341:(t,e,n)=>{n.r(e),n.d(e,{default:()=>p});var r,o=n(7294),i=n(7563),c=(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},r(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),a=function(){return a=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},a.apply(this,arguments)},u=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&(n[r[o]]=t[r[o]])}return n};const s=function(t){function e(e){var n=t.call(this,e)||this;return n.request=null,n.cancel=function(){n.request&&n.request.cancel()},n.handleFetchSuccess=function(t){n.props.onSuccess&&n.props.onSuccess(t),n.setState({html:t.html},(function(){window.instgrm.Embeds.process(),n.props.onAfterRender&&n.props.onAfterRender()}))},n.handleFetchFailure=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];clearTimeout(n.timer),n.props.onFailure&&n.props.onFailure(t)},n.createRequestPromise=function(t){var e={};return e.promise=new Promise((function(n,r){var o=fetch(t).then((function(t){return t.json()})).then((function(t){return n(t)})).catch((function(t){return r(t)}));return e.cancel=function(){return r(new Error("Cancelled"))},o})),e},n.state={html:null},n}return c(e,t),e.prototype.componentDidMount=function(){var t=this;window.instgrm?this.fetchEmbed(this.getQueryParams(this.props)):(this.props.injectScript&&!document.getElementById("react-instagram-embed-script")&&this.injectScript(),this.checkAPI().then((function(){t.fetchEmbed(t.getQueryParams(t.props))})))},e.prototype.componentDidUpdate=function(t){var e=this.props,n=e.url,r=e.hideCaption,o=e.maxWidth,i=e.containerTagName;t.url===n&&t.hideCaption===r&&t.maxWidth===o&&t.containerTagName===i||(this.request.cancel(),this.fetchEmbed(this.getQueryParams(this.props)))},e.prototype.componentWillUnmount=function(){this.cancel()},e.prototype.render=function(){var t=this.props.containerTagName;return o.createElement(t,a({},this.omitComponentProps(),{dangerouslySetInnerHTML:{__html:this.state.html||""}}))},e.prototype.fetchEmbed=function(t){this.request=this.createRequestPromise("https://api.instagram.com/oembed/?"+t),this.props.onLoading&&this.props.onLoading(),this.request.promise.then(this.handleFetchSuccess).catch(this.handleFetchFailure)},e.prototype.omitComponentProps=function(){var t=this.props;t.url,t.hideCaption,t.maxWidth,t.containerTagName,t.onLoading,t.onSuccess,t.onAfterRender,t.onFailure,t.protocol,t.injectScript;return u(t,["url","hideCaption","maxWidth","containerTagName","onLoading","onSuccess","onAfterRender","onFailure","protocol","injectScript"])},e.prototype.injectScript=function(){var t=0===window.location.protocol.indexOf("file")?this.props.protocol:"",e=document.createElement("script");e.async=e.defer=!0,e.src=t+"//platform.instagram.com/en_US/embeds.js",e.id="react-instagram-embed-script";var n=document.body;n&&n.appendChild(e)},e.prototype.checkAPI=function(){var t=this;return new Promise((function(e){!function t(n){n.timer=window.setTimeout((function(){window.instgrm?(clearTimeout(n.timer),e()):t(n)}),20)}(t)}))},e.prototype.getQueryParams=function(t){var e=t.url,n=t.hideCaption,r=t.maxWidth;return i.Pz({url:e,hidecaption:n,maxwidth:"number"==typeof r&&r>=320?r:void 0,omitscript:!0})},e.defaultProps={hideCaption:!1,containerTagName:"div",protocol:"https:",injectScript:!0},e}(o.PureComponent);const p=function(t){var e=t.url,n=t.renderWrap,r=s;return n(o.createElement(r,{url:e,maxWidth:320,hideCaption:!1,containerTagName:"div",protocol:"",injectScript:!0,onLoading:function(){},onSuccess:function(){},onAfterRender:function(){},onFailure:function(){}}))}},8218:t=>{t.exports=function(t){return encodeURIComponent(t).replace(/[!'()*]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}}}]);