/*polyfill-Promise, fetch*/
if (!window.Promise || !window.fetch){
    (function(self, undefined) {function Call(t,l){var n=arguments.length>2?arguments[2]:[];if(!1===IsCallable(t))throw new TypeError(Object.prototype.toString.call(t)+"is not a function.");return t.apply(l,n)}function CreateMethodProperty(e,r,t){var a={value:t,writable:!0,enumerable:!1,configurable:!0};Object.defineProperty(e,r,a)}function Get(n,t){return n[t]}function HasOwnProperty(r,t){return Object.prototype.hasOwnProperty.call(r,t)}function IsCallable(n){return"function"==typeof n}function SameValueNonNumber(e,n){return e===n}function ToObject(e){if(null===e||e===undefined)throw TypeError();return Object(e)}function GetV(t,e){return ToObject(t)[e]}function GetMethod(e,n){var r=GetV(e,n);if(null===r||r===undefined)return undefined;if(!1===IsCallable(r))throw new TypeError("Method not callable: "+n);return r}function Type(e){switch(typeof e){case"undefined":return"undefined";case"boolean":return"boolean";case"number":return"number";case"string":return"string";case"symbol":return"symbol";default:return null===e?"null":"Symbol"in self&&(e instanceof self.Symbol||e.constructor===self.Symbol)?"symbol":"object"}}function OrdinaryToPrimitive(r,t){if("string"===t)var e=["toString","valueOf"];else e=["valueOf","toString"];for(var i=0;i<e.length;++i){var n=e[i],a=Get(r,n);if(IsCallable(a)){var o=Call(a,r);if("object"!==Type(o))return o}}throw new TypeError("Cannot convert to primitive.")}function SameValueZero(n,e){return Type(n)===Type(e)&&("number"===Type(n)?!(!isNaN(n)||!isNaN(e))||(1/n===Infinity&&1/e==-Infinity||(1/n==-Infinity&&1/e===Infinity||n===e)):SameValueNonNumber(n,e))}function ToInteger(n){if("symbol"===Type(n))throw new TypeError("Cannot convert a Symbol value to a number");var t=Number(n);return isNaN(t)?0:1/t===Infinity||1/t==-Infinity||t===Infinity||t===-Infinity?t:(t<0?-1:1)*Math.floor(Math.abs(t))}function ToLength(n){var t=ToInteger(n);return t<=0?0:Math.min(t,Math.pow(2,53)-1)}function ToPrimitive(e){var t=arguments.length>1?arguments[1]:undefined;if("object"===Type(e)){if(arguments.length<2)var i="default";else t===String?i="string":t===Number&&(i="number");var r="function"==typeof self.Symbol&&"symbol"==typeof self.Symbol.toPrimitive?GetMethod(e,self.Symbol.toPrimitive):undefined;if(r!==undefined){var n=Call(r,e,[i]);if("object"!==Type(n))return n;throw new TypeError("Cannot convert exotic object to primitive.")}return"default"===i&&(i="number"),OrdinaryToPrimitive(e,i)}return e}function ToString(t){switch(Type(t)){case"symbol":throw new TypeError("Cannot convert a Symbol value to a string");case"object":return ToString(ToPrimitive(t,String));default:return String(t)}}function ToPropertyKey(r){var i=ToPrimitive(r,String);return"symbol"===Type(i)?i:ToString(i)}CreateMethodProperty(Array.prototype,"includes",function e(r){"use strict";var t=ToObject(this),o=ToLength(Get(t,"length"));if(0===o)return!1;var n=ToInteger(arguments[1]);if(n>=0)var a=n;else(a=o+n)<0&&(a=0);for(;a<o;){var i=Get(t,ToString(a));if(SameValueZero(r,i))return!0;a+=1}return!1});!function(){var e=Object.getOwnPropertyDescriptor,t=function(){try{return 1===Object.defineProperty(document.createElement("div"),"one",{get:function(){return 1}}).one}catch(e){return!1}},r={}.toString,n="".split;CreateMethodProperty(Object,"getOwnPropertyDescriptor",function c(o,i){var a=ToObject(o);a=("string"===Type(a)||a instanceof String)&&"[object String]"==r.call(o)?n.call(o,""):Object(o);var u=ToPropertyKey(i);if(t)try{return e(a,u)}catch(l){}if(HasOwnProperty(a,u))return{enumerable:!0,configurable:!0,writable:!0,value:a[u]}})}();CreateMethodProperty(Object,"keys",function(){"use strict";function t(){var t;try{t=Object.create({})}catch(r){return!0}return o.call(t,"__proto__")}function r(t){var r=n.call(t),e="[object Arguments]"===r;return e||(e="[object Array]"!==r&&null!==t&&"object"==typeof t&&"number"==typeof t.length&&t.length>=0&&"[object Function]"===n.call(t.callee)),e}var e=Object.prototype.hasOwnProperty,n=Object.prototype.toString,o=Object.prototype.propertyIsEnumerable,c=!o.call({toString:null},"toString"),l=o.call(function(){},"prototype"),i=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],u=function(t){var r=t.constructor;return r&&r.prototype===t},a={$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},f=function(){if("undefined"==typeof window)return!1;for(var t in window)try{if(!a["$"+t]&&e.call(window,t)&&null!==window[t]&&"object"==typeof window[t])try{u(window[t])}catch(r){return!0}}catch(r){return!0}return!1}(),p=function(t){if("undefined"==typeof window||!f)return u(t);try{return u(t)}catch(r){return!1}};return function s(o){var u="[object Function]"===n.call(o),a=r(o),f="[object String]"===n.call(o),s=[];if(o===undefined||null===o)throw new TypeError("Cannot convert undefined or null to object");var y=l&&u;if(f&&o.length>0&&!e.call(o,0))for(var h=0;h<o.length;++h)s.push(String(h));if(a&&o.length>0)for(var g=0;g<o.length;++g)s.push(String(g));else for(var w in o)t()&&"__proto__"===w||y&&"prototype"===w||!e.call(o,w)||s.push(String(w));if(c)for(var d=p(o),$=0;$<i.length;++$)d&&"constructor"===i[$]||!e.call(o,i[$])||s.push(i[$]);return s}}());!function(){var t={}.toString,e="".split,r=[].concat,o=Object.prototype.hasOwnProperty,c=Object.getOwnPropertyNames||Object.keys,n="object"==typeof self?c(self):[];CreateMethodProperty(Object,"getOwnPropertyNames",function l(a){var p=ToObject(a);if("[object Window]"===t.call(p))try{return c(p)}catch(j){return r.call([],n)}p="[object String]"==t.call(p)?e.call(p,""):Object(p);for(var i=c(p),s=["length","prototype"],O=0;O<s.length;O++){var b=s[O];o.call(p,b)&&!i.includes(b)&&i.push(b)}if(i.includes("__proto__")){var f=i.indexOf("__proto__");i.splice(f,1)}return i})}();!function(e,r,n){"use strict";function t(e){if("symbol"===Type(e))return e;throw TypeError(e+" is not a symbol")}var u,o=function(){try{var r={};return e.defineProperty(r,"t",{configurable:!0,enumerable:!1,get:function(){return!0},set:undefined}),!!r.t}catch(n){return!1}}(),i=0,a=""+Math.random(),c="__symbol:",l=c.length,f="__symbol@@"+a,s={},v="defineProperty",y="defineProperties",b="getOwnPropertyNames",p="getOwnPropertyDescriptor",h="propertyIsEnumerable",m=e.prototype,d=m.hasOwnProperty,g=m[h],w=m.toString,S=Array.prototype.concat,P=e.getOwnPropertyNames?e.getOwnPropertyNames(self):[],O=e[b],j=function $(e){if("[object Window]"===w.call(e))try{return O(e)}catch(r){return S.call([],P)}return O(e)},E=e[p],N=e.create,T=e.keys,_=e.freeze||e,k=e[v],F=e[y],I=E(e,b),x=function(e,r,n){if(!d.call(e,f))try{k(e,f,{enumerable:!1,configurable:!1,writable:!1,value:{}})}catch(t){e[f]={}}e[f]["@@"+r]=n},z=function(e,r){var n=N(e);return j(r).forEach(function(e){q.call(r,e)&&L(n,e,r[e])}),n},A=function(e){var r=N(e);return r.enumerable=!1,r},D=function ee(){},M=function(e){return e!=f&&!d.call(H,e)},W=function(e){return e!=f&&d.call(H,e)},q=function re(e){var r=""+e;return W(r)?d.call(this,r)&&this[f]&&this[f]["@@"+r]:g.call(this,e)},B=function(r){var n={enumerable:!1,configurable:!0,get:D,set:function(e){u(this,r,{enumerable:!1,configurable:!0,writable:!0,value:e}),x(this,r,!0)}};try{k(m,r,n)}catch(o){m[r]=n.value}H[r]=k(e(r),"constructor",J);var t=E(G.prototype,"description");return t&&k(H[r],"description",t),_(H[r])},C=function(e){var r=t(e);if(Y){var n=V(r);if(""!==n)return n.slice(1,-1)}if(s[r]!==undefined)return s[r];var u=r.toString(),o=u.lastIndexOf("0.");return u=u.slice(10,o),""===u?undefined:u},G=function ne(){var r=arguments[0];if(this instanceof ne)throw new TypeError("Symbol is not a constructor");var n=c.concat(r||"",a,++i);r===undefined||null!==r&&!isNaN(r)&&""!==String(r)||(s[n]=String(r));var t=B(n);return o||e.defineProperty(t,"description",{configurable:!0,enumerable:!1,value:C(t)}),t},H=N(null),J={value:G},K=function(e){return H[e]},L=function te(e,r,n){var t=""+r;return W(t)?(u(e,t,n.enumerable?A(n):n),x(e,t,!!n.enumerable)):k(e,r,n),e},Q=function(e){return function(r){return d.call(e,f)&&d.call(e[f],"@@"+r)}},R=function ue(e){return j(e).filter(e===m?Q(e):W).map(K)};I.value=L,k(e,v,I),I.value=R,k(e,"getOwnPropertySymbols",I),I.value=function oe(e){return j(e).filter(M)},k(e,b,I),I.value=function ie(e,r){var n=R(r);return n.length?T(r).concat(n).forEach(function(n){q.call(r,n)&&L(e,n,r[n])}):F(e,r),e},k(e,y,I),I.value=q,k(m,h,I),I.value=G,k(n,"Symbol",I),I.value=function(e){var r=c.concat(c,e,a);return r in m?H[r]:B(r)},k(G,"for",I),I.value=function(e){if(M(e))throw new TypeError(e+" is not a symbol");return d.call(H,e)?e.slice(2*l,-a.length):void 0},k(G,"keyFor",I),I.value=function ae(e,r){var n=E(e,r);return n&&W(r)&&(n.enumerable=q.call(e,r)),n},k(e,p,I),I.value=function ce(e,r){return 1===arguments.length||void 0===r?N(e):z(e,r)},k(e,"create",I);var U=null===function(){return this}.call(null);if(I.value=U?function(){var e=w.call(this);return"[object String]"===e&&W(this)?"[object Symbol]":e}:function(){if(this===window)return"[object Null]";var e=w.call(this);return"[object String]"===e&&W(this)?"[object Symbol]":e},k(m,"toString",I),u=function(e,r,n){var t=E(m,r);delete m[r],k(e,r,n),e!==m&&k(m,r,t)},function(){try{var r={};return e.defineProperty(r,"t",{configurable:!0,enumerable:!1,get:function(){return!0},set:undefined}),!!r.t}catch(n){return!1}}()){var V;try{V=Function("s","var v = s.valueOf(); return { [v]() {} }[v].name;")}catch(Z){}var X=function(){},Y=V&&"inferred"===X.name?V:null;e.defineProperty(n.Symbol.prototype,"description",{configurable:!0,enumerable:!1,get:function(){return C(this)}})}}(Object,0,self);Object.defineProperty(self.Symbol,"iterator",{value:self.Symbol("iterator")});Object.defineProperty(Symbol,"toStringTag",{value:Symbol("toStringTag")});!function(){"use strict";function n(){return tn[q][B]||D}function t(n){return n&&"object"==typeof n}function e(n){return"function"==typeof n}function r(n,t){return n instanceof t}function o(n){return r(n,A)}function i(n,t,e){if(!t(n))throw a(e)}function u(){try{return b.apply(R,arguments)}catch(n){return Y.e=n,Y}}function c(n,t){return b=n,R=t,u}function f(n,t){function e(){for(var e=0;e<o;)t(r[e],r[e+1]),r[e++]=T,r[e++]=T;o=0,r.length>n&&(r.length=n)}var r=L(n),o=0;return function(n,t){r[o++]=n,r[o++]=t,2===o&&tn.nextTick(e)}}function s(n,t){var o,i,u,f,s=0;if(!n)throw a(N);var l=n[tn[q][z]];if(e(l))i=l.call(n);else{if(!e(n.next)){if(r(n,L)){for(o=n.length;s<o;)t(n[s],s++);return s}throw a(N)}i=n}for(;!(u=i.next()).done;)if((f=c(t)(u.value,s++))===Y)throw e(i[G])&&i[G](),f.e;return s}function a(n){return new TypeError(n)}function l(n){return(n?"":Q)+(new A).stack}function h(n,t){var e="on"+n.toLowerCase(),r=F[e];E&&E.listeners(n).length?n===X?E.emit(n,t._v,t):E.emit(n,t):r?r({reason:t._v,promise:t}):tn[n](t._v,t)}function v(n){return n&&n._s}function _(n){if(v(n))return new n(Z);var t,r,o;return t=new n(function(n,e){if(t)throw a();r=n,o=e}),i(r,e),i(o,e),t}function d(n,t){var e=!1;return function(r){e||(e=!0,I&&(n[M]=l(!0)),t===U?g(n,r):y(n,t,r))}}function p(n,t,r,o){return e(r)&&(t._onFulfilled=r),e(o)&&(n[J]&&h(W,n),t._onRejected=o),I&&(t._p=n),n[n._c++]=t,n._s!==$&&rn(n,t),t}function m(n){if(n._umark)return!0;n._umark=!0;for(var t,e=0,r=n._c;e<r;)if(t=n[e++],t._onRejected||m(t))return!0}function w(n,t){function e(n){return r.push(n.replace(/^\s+|\s+$/g,""))}var r=[];return I&&(t[M]&&e(t[M]),function o(n){n&&K in n&&(o(n._next),e(n[K]+""),o(n._p))}(t)),(n&&n.stack?n.stack:n)+("\n"+r.join("\n")).replace(nn,"")}function j(n,t){return n(t)}function y(n,t,e){var r=0,i=n._c;if(n._s===$)for(n._s=t,n._v=e,t===O&&(I&&o(e)&&(e.longStack=w(e,n)),on(n));r<i;)rn(n,n[r++]);return n}function g(n,r){if(r===n&&r)return y(n,O,a(V)),n;if(r!==S&&(e(r)||t(r))){var o=c(k)(r);if(o===Y)return y(n,O,o.e),n;e(o)?(I&&v(r)&&(n._next=r),v(r)?x(n,r,o):tn.nextTick(function(){x(n,r,o)})):y(n,U,r)}else y(n,U,r);return n}function k(n){return n.then}function x(n,t,e){var r=c(e,t)(function(e){t&&(t=S,g(n,e))},function(e){t&&(t=S,y(n,O,e))});r===Y&&t&&(y(n,O,r.e),t=S)}var T,b,R,S=null,C="object"==typeof self,F=self,P=F.Promise,E=F.process,H=F.console,I=!0,L=Array,A=Error,O=1,U=2,$=3,q="Symbol",z="iterator",B="species",D=q+"("+B+")",G="return",J="_uh",K="_pt",M="_st",N="Invalid argument",Q="\nFrom previous ",V="Chaining cycle detected for promise",W="rejectionHandled",X="unhandledRejection",Y={e:S},Z=function(){},nn=/^.+\/node_modules\/yaku\/.+\n?/gm,tn=function(n){var r,o=this;if(!t(o)||o._s!==T)throw a("Invalid this");if(o._s=$,I&&(o[K]=l()),n!==Z){if(!e(n))throw a(N);r=c(n)(d(o,U),d(o,O)),r===Y&&y(o,O,r.e)}};tn["default"]=tn,function en(n,t){for(var e in t)n[e]=t[e]}(tn.prototype,{then:function(n,t){if(this._s===undefined)throw a();return p(this,_(tn.speciesConstructor(this,tn)),n,t)},"catch":function(n){return this.then(T,n)},"finally":function(n){return this.then(function(t){return tn.resolve(n()).then(function(){return t})},function(t){return tn.resolve(n()).then(function(){throw t})})},_c:0,_p:S}),tn.resolve=function(n){return v(n)?n:g(_(this),n)},tn.reject=function(n){return y(_(this),O,n)},tn.race=function(n){var t=this,e=_(t),r=function(n){y(e,U,n)},o=function(n){y(e,O,n)},i=c(s)(n,function(n){t.resolve(n).then(r,o)});return i===Y?t.reject(i.e):e},tn.all=function(n){function t(n){y(o,O,n)}var e,r=this,o=_(r),i=[];return(e=c(s)(n,function(n,u){r.resolve(n).then(function(n){i[u]=n,--e||y(o,U,i)},t)}))===Y?r.reject(e.e):(e||y(o,U,[]),o)},tn.Symbol=F[q]||{},c(function(){Object.defineProperty(tn,n(),{get:function(){return this}})})(),tn.speciesConstructor=function(t,e){var r=t.constructor;return r?r[n()]||e:e},tn.unhandledRejection=function(n,t){H&&H.error("Uncaught (in promise)",I?t.longStack:w(n,t))},tn.rejectionHandled=Z,tn.enableLongStackTrace=function(){I=!0},tn.nextTick=C?function(n){P?new P(function(n){n()}).then(n):setTimeout(n)}:E.nextTick,tn._s=1;var rn=f(999,function(n,t){var e,r;return(r=n._s!==O?t._onFulfilled:t._onRejected)===T?void y(t,n._s,n._v):(e=c(j)(r,n._v))===Y?void y(t,O,e.e):void g(t,e)}),on=f(9,function(n){m(n)||(n[J]=1,h(X,n))});F.Promise=tn}();!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e(t.WHATWGFetch={})}(this,function(t){"use strict";function e(t){return t&&DataView.prototype.isPrototypeOf(t)}function r(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function o(t){return"string"!=typeof t&&(t=String(t)),t}function n(t){var e={next:function(){var e=t.shift();return{done:e===undefined,value:e}}};return v.iterable&&(e[Symbol.iterator]=function(){return e}),e}function i(t){this.map={},t instanceof i?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function s(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function a(t){return new Promise(function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}})}function f(t){var e=new FileReader,r=a(e);return e.readAsArrayBuffer(t),r}function u(t){var e=new FileReader,r=a(e);return e.readAsText(t),r}function h(t){for(var e=new Uint8Array(t),r=new Array(e.length),o=0;o<e.length;o++)r[o]=String.fromCharCode(e[o]);return r.join("")}function d(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function c(){return this.bodyUsed=!1,this._initBody=function(t){this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:v.blob&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:v.formData&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:v.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():v.arrayBuffer&&v.blob&&e(t)?(this._bodyArrayBuffer=d(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):v.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(t)||A(t))?this._bodyArrayBuffer=d(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):v.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},v.blob&&(this.blob=function(){var t=s(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?s(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(f)}),this.text=function(){var t=s(this);if(t)return t;if(this._bodyBlob)return u(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(h(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},v.formData&&(this.formData=function(){return this.text().then(l)}),this.json=function(){return this.text().then(JSON.parse)},this}function y(t){var e=t.toUpperCase();return _.indexOf(e)>-1?e:t}function p(t,e){e=e||{};var r=e.body;if(t instanceof p){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new i(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,r||null==t._bodyInit||(r=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new i(e.headers)),this.method=y(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function l(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var r=t.split("="),o=r.shift().replace(/\+/g," "),n=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(o),decodeURIComponent(n))}}),e}function b(t){var e=new i;return t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(t){var r=t.split(":"),o=r.shift().trim();if(o){var n=r.join(":").trim();e.append(o,n)}}),e}function m(t,e){e||(e={}),this.type="default",this.status=e.status===undefined?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new i(e.headers),this.url=e.url||"",this._initBody(t)}function w(e,r){return new Promise(function(o,n){function i(){a.abort()}var s=new p(e,r);if(s.signal&&s.signal.aborted)return n(new t.DOMException("Aborted","AbortError"));var a=new XMLHttpRequest;a.onload=function(){var t={status:a.status,statusText:a.statusText,headers:b(a.getAllResponseHeaders()||"")};t.url="responseURL"in a?a.responseURL:t.headers.get("X-Request-URL");var e="response"in a?a.response:a.responseText;o(new m(e,t))},a.onerror=function(){n(new TypeError("Network request failed"))},a.ontimeout=function(){n(new TypeError("Network request failed"))},a.onabort=function(){n(new t.DOMException("Aborted","AbortError"))},a.open(s.method,s.url,!0),"include"===s.credentials?a.withCredentials=!0:"omit"===s.credentials&&(a.withCredentials=!1),"responseType"in a&&v.blob&&(a.responseType="blob"),s.headers.forEach(function(t,e){a.setRequestHeader(e,t)}),s.signal&&(s.signal.addEventListener("abort",i),a.onreadystatechange=function(){4===a.readyState&&s.signal.removeEventListener("abort",i)}),a.send("undefined"==typeof s._bodyInit?null:s._bodyInit)})}var v={searchParams:"URLSearchParams"in self,iterable:"Symbol"in self&&"iterator"in Symbol,blob:"FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in self,arrayBuffer:"ArrayBuffer"in self};if(v.arrayBuffer)var E=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],A=ArrayBuffer.isView||function(t){return t&&E.indexOf(Object.prototype.toString.call(t))>-1};i.prototype.append=function(t,e){t=r(t),e=o(e);var n=this.map[t];this.map[t]=n?n+", "+e:e},i.prototype["delete"]=function(t){delete this.map[r(t)]},i.prototype.get=function(t){return t=r(t),this.has(t)?this.map[t]:null},i.prototype.has=function(t){return this.map.hasOwnProperty(r(t))},i.prototype.set=function(t,e){this.map[r(t)]=o(e)},i.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},i.prototype.keys=function(){var t=[];return this.forEach(function(e,r){t.push(r)}),n(t)},i.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),n(t)},i.prototype.entries=function(){var t=[];return this.forEach(function(e,r){t.push([r,e])}),n(t)},v.iterable&&(i.prototype[Symbol.iterator]=i.prototype.entries);var _=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];p.prototype.clone=function(){return new p(this,{body:this._bodyInit})},c.call(p.prototype),c.call(m.prototype),m.prototype.clone=function(){return new m(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new i(this.headers),url:this.url})},m.error=function(){var t=new m(null,{status:0,statusText:""});return t.type="error",t};var x=[301,302,303,307,308];m.redirect=function(t,e){if(-1===x.indexOf(e))throw new RangeError("Invalid status code");return new m(null,{status:e,headers:{location:t}})},t.DOMException=self.DOMException;try{new t.DOMException}catch(g){t.DOMException=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack},t.DOMException.prototype=Object.create(Error.prototype),t.DOMException.prototype.constructor=t.DOMException}w.polyfill=!0,self.fetch=w,self.Headers=i,self.Request=p,self.Response=m,t.Headers=i,t.Request=p,t.Response=m,t.fetch=w,Object.defineProperty(t,"__esModule",{value:!0})});})('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
}
if (window.Promise && !window.Promise.finally){
    (function(self, undefined) {function CreateMethodProperty(e,r,t){var a={value:t,writable:!0,enumerable:!1,configurable:!0};Object.defineProperty(e,r,a)}function Get(n,t){return n[t]}function IsCallable(n){return"function"==typeof n}function ToObject(e){if(null===e||e===undefined)throw TypeError();return Object(e)}function GetV(t,e){return ToObject(t)[e]}function GetMethod(e,n){var r=GetV(e,n);if(null===r||r===undefined)return undefined;if(!1===IsCallable(r))throw new TypeError("Method not callable: "+n);return r}function Type(e){switch(typeof e){case"undefined":return"undefined";case"boolean":return"boolean";case"number":return"number";case"string":return"string";case"symbol":return"symbol";default:return null===e?"null":"Symbol"in self&&(e instanceof self.Symbol||e.constructor===self.Symbol)?"symbol":"object"}}function IsConstructor(t){return"object"===Type(t)&&("function"==typeof t&&!!t.prototype)}function SpeciesConstructor(e,o){var r=Get(e,"constructor");if(r===undefined)return o;if("object"!==Type(r))throw new TypeError("O.constructor is not an Object");var n="function"==typeof self.Symbol&&"symbol"==typeof self.Symbol.species?r[self.Symbol.species]:undefined;if(n===undefined||null===n)return o;if(IsConstructor(n))return n;throw new TypeError("No constructor found")}!function(){var t=Function.prototype.bind.call(Function.prototype.call,Promise.prototype.then),o=function(t,o){return new t(function(t){t(o())})};CreateMethodProperty(Promise.prototype,"finally",function(e){var r=this;if("object"!==Type(r))throw new TypeError("Method %PromisePrototype%.finally called on incompatible receiver "+Object.prototype.toString.call(r));var n=SpeciesConstructor(r,Promise);if(!1===IsCallable(e))var i=e,c=e;else i=function(r){return t(o(n,e),function(){return r})},c=function(r){return t(o(n,e),function(){throw r})};return t(r,i,c)})}();})('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
}
if (!Object.assign){
    (function(self, undefined) {function Call(t,l){var n=arguments.length>2?arguments[2]:[];if(!1===IsCallable(t))throw new TypeError(Object.prototype.toString.call(t)+"is not a function.");return t.apply(l,n)}function CreateMethodProperty(e,r,t){var a={value:t,writable:!0,enumerable:!1,configurable:!0};Object.defineProperty(e,r,a)}function Get(n,t){return n[t]}function HasOwnProperty(r,t){return Object.prototype.hasOwnProperty.call(r,t)}function IsCallable(n){return"function"==typeof n}function ToObject(e){if(null===e||e===undefined)throw TypeError();return Object(e)}function GetV(t,e){return ToObject(t)[e]}function GetMethod(e,n){var r=GetV(e,n);if(null===r||r===undefined)return undefined;if(!1===IsCallable(r))throw new TypeError("Method not callable: "+n);return r}function Type(e){switch(typeof e){case"undefined":return"undefined";case"boolean":return"boolean";case"number":return"number";case"string":return"string";case"symbol":return"symbol";default:return null===e?"null":"Symbol"in self&&(e instanceof self.Symbol||e.constructor===self.Symbol)?"symbol":"object"}}function OrdinaryToPrimitive(r,t){if("string"===t)var e=["toString","valueOf"];else e=["valueOf","toString"];for(var i=0;i<e.length;++i){var n=e[i],a=Get(r,n);if(IsCallable(a)){var o=Call(a,r);if("object"!==Type(o))return o}}throw new TypeError("Cannot convert to primitive.")}function ToPrimitive(e){var t=arguments.length>1?arguments[1]:undefined;if("object"===Type(e)){if(arguments.length<2)var i="default";else t===String?i="string":t===Number&&(i="number");var r="function"==typeof self.Symbol&&"symbol"==typeof self.Symbol.toPrimitive?GetMethod(e,self.Symbol.toPrimitive):undefined;if(r!==undefined){var n=Call(r,e,[i]);if("object"!==Type(n))return n;throw new TypeError("Cannot convert exotic object to primitive.")}return"default"===i&&(i="number"),OrdinaryToPrimitive(e,i)}return e}function ToString(t){switch(Type(t)){case"symbol":throw new TypeError("Cannot convert a Symbol value to a string");case"object":return ToString(ToPrimitive(t,String));default:return String(t)}}function ToPropertyKey(r){var i=ToPrimitive(r,String);return"symbol"===Type(i)?i:ToString(i)}!function(){var e=Object.getOwnPropertyDescriptor,t=function(){try{return 1===Object.defineProperty(document.createElement("div"),"one",{get:function(){return 1}}).one}catch(e){return!1}},r={}.toString,n="".split;CreateMethodProperty(Object,"getOwnPropertyDescriptor",function c(o,i){var a=ToObject(o);a=("string"===Type(a)||a instanceof String)&&"[object String]"==r.call(o)?n.call(o,""):Object(o);var u=ToPropertyKey(i);if(t)try{return e(a,u)}catch(l){}if(HasOwnProperty(a,u))return{enumerable:!0,configurable:!0,writable:!0,value:a[u]}})}();CreateMethodProperty(Object,"keys",function(){"use strict";function t(){var t;try{t=Object.create({})}catch(r){return!0}return o.call(t,"__proto__")}function r(t){var r=n.call(t),e="[object Arguments]"===r;return e||(e="[object Array]"!==r&&null!==t&&"object"==typeof t&&"number"==typeof t.length&&t.length>=0&&"[object Function]"===n.call(t.callee)),e}var e=Object.prototype.hasOwnProperty,n=Object.prototype.toString,o=Object.prototype.propertyIsEnumerable,c=!o.call({toString:null},"toString"),l=o.call(function(){},"prototype"),i=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],u=function(t){var r=t.constructor;return r&&r.prototype===t},a={$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},f=function(){if("undefined"==typeof window)return!1;for(var t in window)try{if(!a["$"+t]&&e.call(window,t)&&null!==window[t]&&"object"==typeof window[t])try{u(window[t])}catch(r){return!0}}catch(r){return!0}return!1}(),p=function(t){if("undefined"==typeof window||!f)return u(t);try{return u(t)}catch(r){return!1}};return function s(o){var u="[object Function]"===n.call(o),a=r(o),f="[object String]"===n.call(o),s=[];if(o===undefined||null===o)throw new TypeError("Cannot convert undefined or null to object");var y=l&&u;if(f&&o.length>0&&!e.call(o,0))for(var h=0;h<o.length;++h)s.push(String(h));if(a&&o.length>0)for(var g=0;g<o.length;++g)s.push(String(g));else for(var w in o)t()&&"__proto__"===w||y&&"prototype"===w||!e.call(o,w)||s.push(String(w));if(c)for(var d=p(o),$=0;$<i.length;++$)d&&"constructor"===i[$]||!e.call(o,i[$])||s.push(i[$]);return s}}());CreateMethodProperty(Object,"assign",function e(t,r){var n=ToObject(t);if(1===arguments.length)return n;var o,c,a,l,i=Array.prototype.slice.call(arguments,1);for(o=0;o<i.length;o++){var p=i[o];for(p===undefined||null===p?a=[]:(l="[object String]"===Object.prototype.toString.call(p)?String(p).split(""):ToObject(p),a=Object.keys(l)),c=0;c<a.length;c++){var b,y=a[c];try{var g=Object.getOwnPropertyDescriptor(l,y);b=g!==undefined&&!0===g.enumerable}catch(u){b=Object.prototype.propertyIsEnumerable.call(l,y)}if(b){var j=Get(l,y);n[y]=j}}}return n});})('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
}
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
}
(function(){
    try{
        new window.CustomEvent('T');
    }catch(e){
        var CustomEvent = function(event, params){
            params = params || { bubbles: false, cancelable: false, detail: undefined };
            var evt = document.createEvent('CustomEvent');
            evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
            return evt;
        };
        CustomEvent.prototype = window.Event.prototype;
        window.CustomEvent = CustomEvent;
    }
})();

if (!Array.prototype.findIndex) {
    Object.defineProperty(Array.prototype, 'findIndex', {
        value: function(predicate) {
            // 1. Let O be ? ToObject(this value).
            if (this == null) {
                throw new TypeError('"this" is null or not defined');
            }
            var o = Object(this);
            // 2. Let len be ? ToLength(? Get(O, "length")).
            var len = o.length >>> 0;
            // 3. If IsCallable(predicate) is false, throw a TypeError exception.
            if (typeof predicate !== 'function') {
                throw new TypeError('predicate must be a function');
            }
            // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
            var thisArg = arguments[1];
            // 5. Let k be 0.
            var k = 0;
            // 6. Repeat, while k < len
            while (k < len) {
                // a. Let Pk be ! ToString(k).
                // b. Let kValue be ? Get(O, Pk).
                // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
                // d. If testResult is true, return k.
                var kValue = o[k];
                if (predicate.call(thisArg, kValue, k, o)) {
                    return k;
                }
                // e. Increase k by 1.
                k++;
            }
            // 7. Return -1.
            return -1;
        }
    });
}
