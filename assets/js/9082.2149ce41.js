/*! For license information please see 9082.2149ce41.js.LICENSE.txt */
(self.webpackChunkbraintris=self.webpackChunkbraintris||[]).push([[9082],{2017:e=>{"use strict";e.exports=function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){if(t.constructor!==r.constructor)return!1;var n,o,a;if(Array.isArray(t)){if((n=t.length)!=r.length)return!1;for(o=n;0!=o--;)if(!e(t[o],r[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if((n=(a=Object.keys(t)).length)!==Object.keys(r).length)return!1;for(o=n;0!=o--;)if(!Object.prototype.hasOwnProperty.call(r,a[o]))return!1;for(o=n;0!=o--;){var i=a[o];if(!e(t[i],r[i]))return!1}return!0}return t!=t&&r!=r}},6147:e=>{function t(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function r(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,n,o){var a=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");"function"==typeof n&&(o=n,n={}),n=n||{},o=o||function(){},i.type=n.type||"text/javascript",i.charset=n.charset||"utf8",i.async=!("async"in n)||!!n.async,i.src=e,n.attrs&&function(e,t){for(var r in t)e.setAttribute(r,t[r])}(i,n.attrs),n.text&&(i.text=""+n.text),("onload"in i?t:r)(i,o),i.onload||t(i,o),a.appendChild(i)}},5606:e=>{var t,r,n=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var s,u=[],c=!1,l=-1;function f(){c&&s&&(c=!1,s.length?u=s.concat(u):l=-1,u.length&&p())}function p(){if(!c){var e=i(f);c=!0;for(var t=u.length;t;){for(s=u,u=[];++l<t;)s&&s[l].run();l=-1,t=u.length}s=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{return r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function y(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];u.push(new d(e,t)),1!==u.length||c||i(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=y,n.addListener=y,n.once=y,n.off=y,n.removeListener=y,n.removeAllListeners=y,n.emit=y,n.prependListener=y,n.prependOnceListener=y,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},9082:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>k});var n=r(6540),o=r(7481),a=r.n(o),i=r(2017),s=r.n(i),u=r(3517),c=r.n(u);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=h(e);if(t){var o=h(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;return y(e)}(this,r)}}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){v(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e){return m(m({},e),{},{height:0,width:0,playerVars:m(m({},e.playerVars),{},{autoplay:0,start:0,end:0})})}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(i,e);var t,r,o,a=d(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),v(y(t=a.call(this,e)),"onPlayerReady",(function(e){return t.props.onReady(e)})),v(y(t),"onPlayerError",(function(e){return t.props.onError(e)})),v(y(t),"onPlayerStateChange",(function(e){switch(t.props.onStateChange(e),e.data){case i.PlayerState.ENDED:t.props.onEnd(e);break;case i.PlayerState.PLAYING:t.props.onPlay(e);break;case i.PlayerState.PAUSED:t.props.onPause(e)}})),v(y(t),"onPlayerPlaybackRateChange",(function(e){return t.props.onPlaybackRateChange(e)})),v(y(t),"onPlayerPlaybackQualityChange",(function(e){return t.props.onPlaybackQualityChange(e)})),v(y(t),"createPlayer",(function(){if("undefined"!=typeof document){var e=m(m({},t.props.opts),{},{videoId:t.props.videoId});t.internalPlayer=c()(t.container,e),t.internalPlayer.on("ready",t.onPlayerReady),t.internalPlayer.on("error",t.onPlayerError),t.internalPlayer.on("stateChange",t.onPlayerStateChange),t.internalPlayer.on("playbackRateChange",t.onPlayerPlaybackRateChange),t.internalPlayer.on("playbackQualityChange",t.onPlayerPlaybackQualityChange)}})),v(y(t),"resetPlayer",(function(){return t.internalPlayer.destroy().then(t.createPlayer)})),v(y(t),"updatePlayer",(function(){t.internalPlayer.getIframe().then((function(e){t.props.id?e.setAttribute("id",t.props.id):e.removeAttribute("id"),t.props.className?e.setAttribute("class",t.props.className):e.removeAttribute("class"),t.props.opts&&t.props.opts.width?e.setAttribute("width",t.props.opts.width):e.removeAttribute("width"),t.props.opts&&t.props.opts.height?e.setAttribute("height",t.props.opts.height):e.removeAttribute("height"),"string"==typeof t.props.title?e.setAttribute("title",t.props.title):e.setAttribute("title","YouTube video player")}))})),v(y(t),"getInternalPlayer",(function(){return t.internalPlayer})),v(y(t),"updateVideo",(function(){if(void 0!==t.props.videoId&&null!==t.props.videoId){var e=!1,r={videoId:t.props.videoId};"playerVars"in t.props.opts&&(e=1===t.props.opts.playerVars.autoplay,"start"in t.props.opts.playerVars&&(r.startSeconds=t.props.opts.playerVars.start),"end"in t.props.opts.playerVars&&(r.endSeconds=t.props.opts.playerVars.end)),e?t.internalPlayer.loadVideoById(r):t.internalPlayer.cueVideoById(r)}else t.internalPlayer.stopVideo()})),v(y(t),"refContainer",(function(e){t.container=e})),t.container=null,t.internalPlayer=null,t}return t=i,(r=[{key:"componentDidMount",value:function(){this.createPlayer()}},{key:"componentDidUpdate",value:function(e){(function(e,t){return e.id!==t.id||e.className!==t.className||e.opts.width!==t.opts.width||e.opts.height!==t.opts.height||e.title!==t.title})(e,this.props)&&this.updatePlayer(),function(e,t){return e.videoId!==t.videoId||!s()(b(e.opts),b(t.opts))}(e,this.props)&&this.resetPlayer(),function(e,t){if(e.videoId!==t.videoId)return!0;var r=e.opts.playerVars||{},n=t.opts.playerVars||{};return r.start!==n.start||r.end!==n.end}(e,this.props)&&this.updateVideo()}},{key:"componentWillUnmount",value:function(){this.internalPlayer.destroy()}},{key:"render",value:function(){return n.createElement("div",{className:this.props.containerClassName},n.createElement("div",{id:this.props.id,className:this.props.className,ref:this.refContainer,loading:this.props.loading}))}}])&&f(t.prototype,r),o&&f(t,o),i}(n.Component);v(P,"PlayerState",{UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5}),P.propTypes={videoId:a().string,id:a().string,className:a().string,containerClassName:a().string,title:a().string,loading:a().oneOf(["lazy","eager","auto"]),opts:a().objectOf(a().any),onReady:a().func,onError:a().func,onPlay:a().func,onPause:a().func,onEnd:a().func,onStateChange:a().func,onPlaybackRateChange:a().func,onPlaybackQualityChange:a().func},P.defaultProps={videoId:null,id:null,className:null,loading:null,opts:{},containerClassName:"",onReady:function(){},onError:function(){},onPlay:function(){},onPause:function(){},onEnd:function(){},onStateChange:function(){},onPlaybackRateChange:function(){},onPlaybackQualityChange:function(){},title:null};const w=P;var E=r(3671),O=(0,E.rule)({w:"100%"}),S=(0,E.rule)({d:"block",maxW:"100%",w:"100%"}),C=w;const k=function(e){var t=e.id;return(0,e.renderWrap)(n.createElement(C,{videoId:t,containerClassName:O,className:S}))}},2821:(e,t,r)=>{"use strict";var n=r(6822);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,a,i){if(i!==n){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return r.PropTypes=r,r}},7481:(e,t,r)=>{e.exports=r(2821)()},6822:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},4666:e=>{"use strict";var t;t=function(){var e={},t={};return e.on=function(e,r){var n={name:e,handler:r};return t[e]=t[e]||[],t[e].unshift(n),n},e.off=function(e){var r=t[e.name].indexOf(e);-1!==r&&t[e.name].splice(r,1)},e.trigger=function(e,r){var n,o=t[e];if(o)for(n=o.length;n--;)o[n].handler(r)},e},e.exports=t},4748:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=r(3004),a=(n=o)&&n.__esModule?n:{default:n};t.default={pauseVideo:{acceptableStates:[a.default.ENDED,a.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[a.default.ENDED,a.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[a.default.ENDED,a.default.PLAYING,a.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},e.exports=t.default},9325:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(r(6602)),o=s(r(9345)),a=s(r(1769)),i=s(r(4748));function s(e){return e&&e.__esModule?e:{default:e}}var u=(0,n.default)("youtube-player"),c={proxyEvents:function(e){var t={},r=function(r){var n="on"+r.slice(0,1).toUpperCase()+r.slice(1);t[n]=function(t){u('event "%s"',n,t),e.trigger(r,t)}},n=!0,o=!1,i=void 0;try{for(var s,c=a.default[Symbol.iterator]();!(n=(s=c.next()).done);n=!0){r(s.value)}}catch(l){o=!0,i=l}finally{try{!n&&c.return&&c.return()}finally{if(o)throw i}}return t},promisifyPlayer:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r={},n=function(n){t&&i.default[n]?r[n]=function(){for(var t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];return e.then((function(e){var t=i.default[n],o=e.getPlayerState(),a=e[n].apply(e,r);return t.stateChangeRequired||Array.isArray(t.acceptableStates)&&-1===t.acceptableStates.indexOf(o)?new Promise((function(r){e.addEventListener("onStateChange",(function n(){var o=e.getPlayerState(),a=void 0;"number"==typeof t.timeout&&(a=setTimeout((function(){e.removeEventListener("onStateChange",n),r()}),t.timeout)),Array.isArray(t.acceptableStates)&&-1!==t.acceptableStates.indexOf(o)&&(e.removeEventListener("onStateChange",n),clearTimeout(a),r())}))})).then((function(){return a})):a}))}:r[n]=function(){for(var t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];return e.then((function(e){return e[n].apply(e,r)}))}},a=!0,s=!1,u=void 0;try{for(var c,l=o.default[Symbol.iterator]();!(a=(c=l.next()).done);a=!0){n(c.value)}}catch(f){s=!0,u=f}finally{try{!a&&l.return&&l.return()}finally{if(s)throw u}}return r}};t.default=c,e.exports=t.default},3004:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},e.exports=t.default},1769:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"],e.exports=t.default},9345:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe"],e.exports=t.default},3517:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=s(r(4666)),a=s(r(6694)),i=s(r(9325));function s(e){return e&&e.__esModule?e:{default:e}}var u=void 0;t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=(0,o.default)();if(u||(u=(0,a.default)(s)),t.events)throw new Error("Event handlers cannot be overwritten.");if("string"==typeof e&&!document.getElementById(e))throw new Error('Element "'+e+'" does not exist.');t.events=i.default.proxyEvents(s);var c=new Promise((function(r){"object"===(void 0===e?"undefined":n(e))&&e.playVideo instanceof Function?r(e):u.then((function(n){var o=new n.Player(e,t);return s.on("ready",(function(){r(o)})),null}))})),l=i.default.promisifyPlayer(c,r);return l.on=s.on,l.off=s.off,l},e.exports=t.default},6694:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=r(6147),a=(n=o)&&n.__esModule?n:{default:n};t.default=function(e){return new Promise((function(t){if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function)t(window.YT);else{var r="http:"===window.location.protocol?"http:":"https:";(0,a.default)(r+"//www.youtube.com/iframe_api",(function(t){t&&e.trigger("error",t)}));var n=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){n&&n(),t(window.YT)}}}))},e.exports=t.default},6602:(e,t,r)=>{var n=r(5606);function o(){var e;try{e=t.storage.debug}catch(r){}return!e&&void 0!==n&&"env"in n&&(e=n.env.DEBUG),e}(t=e.exports=r(9245)).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var r=this.useColors;if(e[0]=(r?"%c":"")+this.namespace+(r?" %c":" ")+e[0]+(r?"%c ":" ")+"+"+t.humanize(this.diff),!r)return;var n="color: "+this.color;e.splice(1,0,n,"color: inherit");var o=0,a=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(o++,"%c"===e&&(a=o))})),e.splice(a,0,n)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(r){}},t.load=o,t.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},t.enable(o())},9245:(e,t,r)=>{var n;function o(e){function r(){if(r.enabled){var e=r,o=+new Date,a=o-(n||o);e.diff=a,e.prev=n,e.curr=o,n=o;for(var i=new Array(arguments.length),s=0;s<i.length;s++)i[s]=arguments[s];i[0]=t.coerce(i[0]),"string"!=typeof i[0]&&i.unshift("%O");var u=0;i[0]=i[0].replace(/%([a-zA-Z%])/g,(function(r,n){if("%%"===r)return r;u++;var o=t.formatters[n];if("function"==typeof o){var a=i[u];r=o.call(e,a),i.splice(u,1),u--}return r})),t.formatArgs.call(e,i),(r.log||t.log||console.log.bind(console)).apply(e,i)}}return r.namespace=e,r.enabled=t.enabled(e),r.useColors=t.useColors(),r.color=function(e){var r,n=0;for(r in e)n=(n<<5)-n+e.charCodeAt(r),n|=0;return t.colors[Math.abs(n)%t.colors.length]}(e),"function"==typeof t.init&&t.init(r),r}(t=e.exports=o.debug=o.default=o).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var r=("string"==typeof e?e:"").split(/[\s,]+/),n=r.length,o=0;o<n;o++)r[o]&&("-"===(e=r[o].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var r,n;for(r=0,n=t.skips.length;r<n;r++)if(t.skips[r].test(e))return!1;for(r=0,n=t.names.length;r<n;r++)if(t.names[r].test(e))return!0;return!1},t.humanize=r(2988),t.names=[],t.skips=[],t.formatters={}},2988:e=>{var t=1e3,r=60*t,n=60*r,o=24*n,a=365.25*o;function i(e,t,r){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+r:Math.ceil(e/t)+" "+r+"s"}e.exports=function(e,s){s=s||{};var u,c=typeof e;if("string"===c&&e.length>0)return function(e){if((e=String(e)).length>100)return;var i=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!i)return;var s=parseFloat(i[1]);switch((i[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return s*a;case"days":case"day":case"d":return s*o;case"hours":case"hour":case"hrs":case"hr":case"h":return s*n;case"minutes":case"minute":case"mins":case"min":case"m":return s*r;case"seconds":case"second":case"secs":case"sec":case"s":return s*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return s;default:return}}(e);if("number"===c&&!1===isNaN(e))return s.long?i(u=e,o,"day")||i(u,n,"hour")||i(u,r,"minute")||i(u,t,"second")||u+" ms":function(e){if(e>=o)return Math.round(e/o)+"d";if(e>=n)return Math.round(e/n)+"h";if(e>=r)return Math.round(e/r)+"m";if(e>=t)return Math.round(e/t)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}}}]);