/* Copyright (C) 2023 by WorkerBot.AI */
!function u(D,F,t){function e(n,o){if(!F[n]){if(!D[n]){var E="function"==typeof require&&require;if(!o&&E)return E(n,!0);if(r)return r(n,!0);var i=new Error("Cannot find module '"+n+"'");throw i.code="MODULE_NOT_FOUND",i}var C=F[n]={exports:{}};D[n][0].call(C.exports,(function(u){return e(D[n][1][u]||u)}),C,C.exports,u,D,F,t)}return F[n].exports}for(var r="function"==typeof require&&require,n=0;n<t.length;n++)e(t[n]);return e}({1:[function(u,D,F){"use strict";function t(u){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(u){return typeof u}:function(u){return u&&"function"==typeof Symbol&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},t(u)}function e(){e=function(){return u};var u={},D=Object.prototype,F=D.hasOwnProperty,r=Object.defineProperty||function(u,D,F){u[D]=F.value},n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",E=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function C(u,D,F){return Object.defineProperty(u,D,{value:F,enumerable:!0,configurable:!0,writable:!0}),u[D]}try{C({},"")}catch(u){C=function(u,D,F){return u[D]=F}}function a(u,D,F,t){var e=D&&D.prototype instanceof B?D:B,n=Object.create(e.prototype),o=new b(t||[]);return r(n,"_invoke",{value:m(u,F,o)}),n}function c(u,D,F){try{return{type:"normal",arg:u.call(D,F)}}catch(u){return{type:"throw",arg:u}}}u.wrap=a;var A={};function B(){}function l(){}function f(){}var s={};C(s,o,(function(){return this}));var h=Object.getPrototypeOf,p=h&&h(h(L([])));p&&p!==D&&F.call(p,o)&&(s=p);var d=f.prototype=B.prototype=Object.create(s);function v(u){["next","throw","return"].forEach((function(D){C(u,D,(function(u){return this._invoke(D,u)}))}))}function y(u,D){function e(r,n,o,E){var i=c(u[r],u,n);if("throw"!==i.type){var C=i.arg,a=C.value;return a&&"object"==t(a)&&F.call(a,"__await")?D.resolve(a.__await).then((function(u){e("next",u,o,E)}),(function(u){e("throw",u,o,E)})):D.resolve(a).then((function(u){C.value=u,o(C)}),(function(u){return e("throw",u,o,E)}))}E(i.arg)}var n;r(this,"_invoke",{value:function(u,F){function t(){return new D((function(D,t){e(u,F,D,t)}))}return n=n?n.then(t,t):t()}})}function m(u,D,F){var t="suspendedStart";return function(e,r){if("executing"===t)throw new Error("Generator is already running");if("completed"===t){if("throw"===e)throw r;return _()}for(F.method=e,F.arg=r;;){var n=F.delegate;if(n){var o=w(n,F);if(o){if(o===A)continue;return o}}if("next"===F.method)F.sent=F._sent=F.arg;else if("throw"===F.method){if("suspendedStart"===t)throw t="completed",F.arg;F.dispatchException(F.arg)}else"return"===F.method&&F.abrupt("return",F.arg);t="executing";var E=c(u,D,F);if("normal"===E.type){if(t=F.done?"completed":"suspendedYield",E.arg===A)continue;return{value:E.arg,done:F.done}}"throw"===E.type&&(t="completed",F.method="throw",F.arg=E.arg)}}}function w(u,D){var F=D.method,t=u.iterator[F];if(void 0===t)return D.delegate=null,"throw"===F&&u.iterator.return&&(D.method="return",D.arg=void 0,w(u,D),"throw"===D.method)||"return"!==F&&(D.method="throw",D.arg=new TypeError("The iterator does not provide a '"+F+"' method")),A;var e=c(t,u.iterator,D.arg);if("throw"===e.type)return D.method="throw",D.arg=e.arg,D.delegate=null,A;var r=e.arg;return r?r.done?(D[u.resultName]=r.value,D.next=u.nextLoc,"return"!==D.method&&(D.method="next",D.arg=void 0),D.delegate=null,A):r:(D.method="throw",D.arg=new TypeError("iterator result is not an object"),D.delegate=null,A)}function g(u){var D={tryLoc:u[0]};1 in u&&(D.catchLoc=u[1]),2 in u&&(D.finallyLoc=u[2],D.afterLoc=u[3]),this.tryEntries.push(D)}function x(u){var D=u.completion||{};D.type="normal",delete D.arg,u.completion=D}function b(u){this.tryEntries=[{tryLoc:"root"}],u.forEach(g,this),this.reset(!0)}function L(u){if(u){var D=u[o];if(D)return D.call(u);if("function"==typeof u.next)return u;if(!isNaN(u.length)){var t=-1,e=function D(){for(;++t<u.length;)if(F.call(u,t))return D.value=u[t],D.done=!1,D;return D.value=void 0,D.done=!0,D};return e.next=e}}return{next:_}}function _(){return{value:void 0,done:!0}}return l.prototype=f,r(d,"constructor",{value:f,configurable:!0}),r(f,"constructor",{value:l,configurable:!0}),l.displayName=C(f,i,"GeneratorFunction"),u.isGeneratorFunction=function(u){var D="function"==typeof u&&u.constructor;return!!D&&(D===l||"GeneratorFunction"===(D.displayName||D.name))},u.mark=function(u){return Object.setPrototypeOf?Object.setPrototypeOf(u,f):(u.__proto__=f,C(u,i,"GeneratorFunction")),u.prototype=Object.create(d),u},u.awrap=function(u){return{__await:u}},v(y.prototype),C(y.prototype,E,(function(){return this})),u.AsyncIterator=y,u.async=function(D,F,t,e,r){void 0===r&&(r=Promise);var n=new y(a(D,F,t,e),r);return u.isGeneratorFunction(F)?n:n.next().then((function(u){return u.done?u.value:n.next()}))},v(d),C(d,i,"Generator"),C(d,o,(function(){return this})),C(d,"toString",(function(){return"[object Generator]"})),u.keys=function(u){var D=Object(u),F=[];for(var t in D)F.push(t);return F.reverse(),function u(){for(;F.length;){var t=F.pop();if(t in D)return u.value=t,u.done=!1,u}return u.done=!0,u}},u.values=L,b.prototype={constructor:b,reset:function(u){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!u)for(var D in this)"t"===D.charAt(0)&&F.call(this,D)&&!isNaN(+D.slice(1))&&(this[D]=void 0)},stop:function(){this.done=!0;var u=this.tryEntries[0].completion;if("throw"===u.type)throw u.arg;return this.rval},dispatchException:function(u){if(this.done)throw u;var D=this;function t(F,t){return n.type="throw",n.arg=u,D.next=F,t&&(D.method="next",D.arg=void 0),!!t}for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e],n=r.completion;if("root"===r.tryLoc)return t("end");if(r.tryLoc<=this.prev){var o=F.call(r,"catchLoc"),E=F.call(r,"finallyLoc");if(o&&E){if(this.prev<r.catchLoc)return t(r.catchLoc,!0);if(this.prev<r.finallyLoc)return t(r.finallyLoc)}else if(o){if(this.prev<r.catchLoc)return t(r.catchLoc,!0)}else{if(!E)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return t(r.finallyLoc)}}}},abrupt:function(u,D){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.tryLoc<=this.prev&&F.call(e,"finallyLoc")&&this.prev<e.finallyLoc){var r=e;break}}r&&("break"===u||"continue"===u)&&r.tryLoc<=D&&D<=r.finallyLoc&&(r=null);var n=r?r.completion:{};return n.type=u,n.arg=D,r?(this.method="next",this.next=r.finallyLoc,A):this.complete(n)},complete:function(u,D){if("throw"===u.type)throw u.arg;return"break"===u.type||"continue"===u.type?this.next=u.arg:"return"===u.type?(this.rval=this.arg=u.arg,this.method="return",this.next="end"):"normal"===u.type&&D&&(this.next=D),A},finish:function(u){for(var D=this.tryEntries.length-1;D>=0;--D){var F=this.tryEntries[D];if(F.finallyLoc===u)return this.complete(F.completion,F.afterLoc),x(F),A}},catch:function(u){for(var D=this.tryEntries.length-1;D>=0;--D){var F=this.tryEntries[D];if(F.tryLoc===u){var t=F.completion;if("throw"===t.type){var e=t.arg;x(F)}return e}}throw new Error("illegal catch attempt")},delegateYield:function(u,D,F){return this.delegate={iterator:L(u),resultName:D,nextLoc:F},"next"===this.method&&(this.arg=void 0),A}},u}function r(u,D,F,t,e,r,n){try{var o=u[r](n),E=o.value}catch(u){return void F(u)}o.done?D(E):Promise.resolve(E).then(t,e)}window.txt_download=function(u,D,F){var t=document.createElement("a"),e=new Blob([u],{type:F});t.href=URL.createObjectURL(e),t.download=D,t.click()},window.debounce=function(u,D,F){var t;return function(){var e=this,r=arguments,n=F&&!t;clearTimeout(t),t=setTimeout((function(){t=null,F||u.apply(e,r)}),D),n&&u.apply(e,r)}},Array.prototype.chunk=function(u){for(var D=[],F=0;F<this.length;F+=u)D.push(this.slice(F,F+u));return D},window.dateToISOLikeButLocal=function(u){var D=60*u.getTimezoneOffset()*1e3,F=u.getTime()-D;return new Date(F).toISOString().slice(0,19)},window.uuidv4=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(u){var D=(16+(16*Math.random()|0))%16|0;return("x"==u?D:3&D|8).toString(16)}))},window.stripNonPrintableAndNormalize=function(u){return u=(u=(u=(u=(u=u.replace(/(?:[\0-\x1F\x7F-\x9F\xAD\u0378\u0379\u0380-\u0383\u038B\u038D\u03A2\u0530\u0557\u0558\u058B\u058C\u0590\u05C8-\u05CF\u05EB-\u05EE\u05F5-\u0605\u061C\u06DD\u070E\u070F\u074B\u074C\u07B2-\u07BF\u07FB\u07FC\u082E\u082F\u083F\u085C\u085D\u085F\u086B-\u086F\u088F-\u0897\u08E2\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A77-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF2-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B78-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BFB-\u0BFF\u0C0D\u0C11\u0C29\u0C3A\u0C3B\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B\u0C5C\u0C5E\u0C5F\u0C64\u0C65\u0C70-\u0C76\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDC\u0CDF\u0CE4\u0CE5\u0CF0\u0CF4-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D50-\u0D53\u0D64\u0D65\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF5-\u0E00\u0E3B-\u0E3E\u0E5C-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F48\u0F6D-\u0F70\u0F98\u0FBD\u0FCD\u0FDB-\u0FFF\u10C6\u10C8-\u10CC\u10CE\u10CF\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u137D-\u137F\u139A-\u139F\u13F6\u13F7\u13FE\u13FF\u169D-\u169F\u16F9-\u16FF\u1716-\u171E\u1737-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17DE\u17DF\u17EA-\u17EF\u17FA-\u17FF\u180E\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u193F\u1941-\u1943\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DB-\u19DD\u1A1C\u1A1D\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1A9F\u1AAE\u1AAF\u1ACF-\u1AFF\u1B4D-\u1B4F\u1B7F\u1BF4-\u1BFB\u1C38-\u1C3A\u1C4A-\u1C4C\u1C89-\u1C8F\u1CBB\u1CBC\u1CC8-\u1CCF\u1CFB-\u1CFF\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FC5\u1FD4\u1FD5\u1FDC\u1FF0\u1FF1\u1FF5\u1FFF\u200B-\u200F\u202A-\u202E\u2060-\u206F\u2072\u2073\u208F\u209D-\u209F\u20C1-\u20CF\u20F1-\u20FF\u218C-\u218F\u2427-\u243F\u244B-\u245F\u2B74\u2B75\u2B96\u2CF4-\u2CF8\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D71-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E5E-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u2FEF\u2FFC-\u2FFF\u3040\u3097\u3098\u3100-\u3104\u3130\u318F\u31E4-\u31EF\u321F\uA48D-\uA48F\uA4C7-\uA4CF\uA62C-\uA63F\uA6F8-\uA6FF\uA7CB-\uA7CF\uA7D2\uA7D4\uA7DA-\uA7F1\uA82D-\uA82F\uA83A-\uA83F\uA878-\uA87F\uA8C6-\uA8CD\uA8DA-\uA8DF\uA954-\uA95E\uA97D-\uA97F\uA9CE\uA9DA-\uA9DD\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A\uAA5B\uAAC3-\uAADA\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB6C-\uAB6F\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBC3-\uFBD2\uFD90\uFD91\uFDC8-\uFDCE\uFDD0-\uFDEF\uFE1A-\uFE1F\uFE53\uFE67\uFE6C-\uFE6F\uFE75\uFEFD-\uFF00\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFDF\uFFE7\uFFEF-\uFFFB\uFFFE\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDCFF\uDD03-\uDD06\uDD34-\uDD36\uDD8F\uDD9D-\uDD9F\uDDA1-\uDDCF\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEFC-\uDEFF\uDF24-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDFC4-\uDFC7\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDD6E\uDD7B\uDD8B\uDD93\uDD96\uDDA2\uDDB2\uDDBA\uDDBD-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDF7F\uDF86\uDFB1\uDFBB-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56\uDC9F-\uDCA6\uDCB0-\uDCDF\uDCF3\uDCF6-\uDCFA\uDD1C-\uDD1E\uDD3A-\uDD3E\uDD40-\uDD7F\uDDB8-\uDDBB\uDDD0\uDDD1\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE49-\uDE4F\uDE59-\uDE5F\uDEA0-\uDEBF\uDEE7-\uDEEA\uDEF7-\uDEFF\uDF36-\uDF38\uDF56\uDF57\uDF73-\uDF77\uDF92-\uDF98\uDF9D-\uDFA8\uDFB0-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCF9\uDD28-\uDD2F\uDD3A-\uDE5F\uDE7F\uDEAA\uDEAE\uDEAF\uDEB2-\uDEFC\uDF28-\uDF2F\uDF5A-\uDF6F\uDF8A-\uDFAF\uDFCC-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC4E-\uDC51\uDC76-\uDC7E\uDCBD\uDCC3-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD48-\uDD4F\uDD77-\uDD7F\uDDE0\uDDF5-\uDDFF\uDE12\uDE42-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEAA-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC5C\uDC62-\uDC7F\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDDE-\uDDFF\uDE45-\uDE4F\uDE5A-\uDE5F\uDE6D-\uDE7F\uDEBA-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF47-\uDFFF]|\uD806[\uDC3C-\uDC9F\uDCF3-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD47-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE5-\uDDFF\uDE48-\uDE4F\uDEA3-\uDEAF\uDEF9-\uDEFF\uDF0A-\uDFFF]|\uD807[\uDC09\uDC37\uDC46-\uDC4F\uDC6D-\uDC6F\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF9-\uDEFF\uDF11\uDF3B-\uDF3D\uDF5A-\uDFAF\uDFB1-\uDFBF\uDFF2-\uDFFE]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F\uDC75-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80E-\uD810\uD812-\uD819\uD824-\uD82A\uD82D\uD82E\uD830-\uD832\uD83F\uD87B-\uD87D\uD87F\uD889-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80B[\uDC00-\uDF8F\uDFF3-\uDFFF]|\uD80D[\uDC30-\uDC3F\uDC56-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDE6D\uDEBF\uDECA-\uDECF\uDEEE\uDEEF\uDEF6-\uDEFF\uDF46-\uDF4F\uDF5A\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE9B-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82B[\uDC00-\uDFEF\uDFF4\uDFFC\uDFFF]|\uD82C[\uDD23-\uDD31\uDD33-\uDD4F\uDD53\uDD54\uDD56-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A\uDC9B\uDCA0-\uDFFF]|\uD833[\uDC00-\uDEFF\uDF2E\uDF2F\uDF47-\uDF4F\uDFC4-\uDFFF]|\uD834[\uDCF6-\uDCFF\uDD27\uDD28\uDD73-\uDD7A\uDDEB-\uDDFF\uDE46-\uDEBF\uDED4-\uDEDF\uDEF4-\uDEFF\uDF57-\uDF5F\uDF79-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDFCC\uDFCD]|\uD836[\uDE8C-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD837[\uDC00-\uDEFF\uDF1F-\uDF24\uDF2B-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDC2F\uDC6E-\uDC8E\uDC90-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD50-\uDE8F\uDEAF-\uDEBF\uDEFA-\uDEFE\uDF00-\uDFFF]|\uD839[\uDC00-\uDCCF\uDCFA-\uDFDF\uDFE7\uDFEC\uDFEF\uDFFF]|\uD83A[\uDCC5\uDCC6\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDD5D\uDD60-\uDFFF]|\uD83B[\uDC00-\uDC70\uDCB5-\uDD00\uDD3E-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDEEF\uDEF2-\uDFFF]|\uD83C[\uDC2C-\uDC2F\uDC94-\uDC9F\uDCAF\uDCB0\uDCC0\uDCD0\uDCF6-\uDCFF\uDDAE-\uDDE5\uDE03-\uDE0F\uDE3C-\uDE3F\uDE49-\uDE4F\uDE52-\uDE5F\uDE66-\uDEFF]|\uD83D[\uDED8-\uDEDB\uDEED-\uDEEF\uDEFD-\uDEFF\uDF77-\uDF7A\uDFDA-\uDFDF\uDFEC-\uDFEF\uDFF1-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE\uDCAF\uDCB2-\uDCFF\uDE54-\uDE5F\uDE6E\uDE6F\uDE7D-\uDE7F\uDE89-\uDE8F\uDEBE\uDEC6-\uDECD\uDEDC-\uDEDF\uDEE9-\uDEEF\uDEF9-\uDEFF\uDF93\uDFCB-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEE0-\uDEFF]|\uD86D[\uDF3A-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDF4F]|\uD888[\uDFB0-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,"")).replace(/\n\r/g,"\n")).replace(/\u2028/g,"\n")).replace(/\u2029/g,"\n")).replace(/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/g," ")},window.extractJSON=function(u){var D=u.match(/\{(.*)\}/);return D?"{"+D[1]+"}":null},window.getElementsByXPath=function(u,D){for(var F=[],t=document.evaluate(u,D||document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null),e=0,r=t.snapshotLength;e<r;++e)F.push(t.snapshotItem(e));return F},window.setNativeValue=function(u,D){var F=u.value;u.value=D;var t=new Event("input",{target:u,bubbles:!0});t.simulated=!0;var e=u._valueTracker;e&&e.setValue(F),u.dispatchEvent(t)},window.setNativeTextContent=function(u,D){var F=u.textContent;u.textContent=D;var t=new Event("input",{target:u,bubbles:!0});t.simulated=!0;var e=u._valueTracker;e&&e.setValue(F),u.dispatchEvent(t)},window.setSvelteValue=function(u,D){u.focus({preventScroll:!0,focusVisible:!0}),u.value=D,u.blur()},window.simulateTyping=function(){var u,D=(u=e().mark((function u(D,F){var t,r,n,o,E,i,C,a=arguments;return e().wrap((function(u){for(;;)switch(u.prev=u.next){case 0:r=function(u,D,F){var t=new Event(D,{target:u,bubbles:!0});Object.assign(t,{keyCode:F,which:F,charCode:F}),"input"===D&&(t.simulated=!0),u.dispatchEvent(t)},t=a.length>2&&void 0!==a[2]?a[2]:1,D.focus(),n=D.value,o=0;case 5:if(!(o<F.length)){u.next=21;break}return E=F[o],i=F.charCodeAt(o),r(D,"keydown",i),r(D,"keypress",i),D.value=D.value+E,r(D,"input",i),r(D,"change",i),r(D,"keyup",i),(C=D._valueTracker)&&C.setValue(n),u.next=18,new Promise((function(u){return setTimeout(u,t)}));case 18:o++,u.next=5;break;case 21:r(D,"change",null),D.blur();case 23:case"end":return u.stop()}}),u)})),function(){var D=this,F=arguments;return new Promise((function(t,e){var n=u.apply(D,F);function o(u){r(n,t,e,o,E,"next",u)}function E(u){r(n,t,e,o,E,"throw",u)}o(void 0)}))});return function(u,F){return D.apply(this,arguments)}}(),window.utf8_to_b64=function(u){return window.btoa(unescape(encodeURIComponent(u)))},window.b64_to_utf8=function(u){return decodeURIComponent(escape(window.atob(u)))},window.replaceBodyWithFetchedContent=function(u){fetch(u).then((function(u){if(!u.ok)throw new Error("Network response was not ok");return u.text()})).then((function(u){var D=(new DOMParser).parseFromString(u,"text/html");document.body=D.body,Array.from(D.getElementsByTagName("script")).forEach((function(u){var D=document.createElement("script");u.src?D.src=u.src:D.textContent=u.textContent,document.body.appendChild(D)})),Array.from(D.getElementsByTagName("link")).forEach((function(u){if("stylesheet"===u.rel){var D=document.createElement("link");D.rel="stylesheet",D.href=u.href,document.head.appendChild(D)}}))})).catch((function(u){console.error("Error fetching content:",u)}))}},{}]},{},[1]);