// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,t;n=this,t=function(){"use strict";var n,t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),e=Object.prototype.toString,r=Object.prototype.hasOwnProperty,o="function"==typeof Symbol?Symbol:void 0,i="function"==typeof o?o.toStringTag:"",f=t&&"symbol"==typeof Symbol.toStringTag?function(n){var t,o,f,u,a;if(null==n)return e.call(n);o=n[i],a=i,t=null!=(u=n)&&r.call(u,a);try{n[i]=void 0}catch(t){return e.call(n)}return f=e.call(n),t?n[i]=o:delete n[i],f}:function(n){return e.call(n)},u="function"==typeof Uint8Array,a="function"==typeof Uint8Array?Uint8Array:null,y="function"==typeof Uint8Array?Uint8Array:void 0;n=function(){var n,t,e;if("function"!=typeof a)return!1;try{t=new a(t=[1,3.14,-3.14,256,257]),e=t,n=(u&&e instanceof Uint8Array||"[object Uint8Array]"===f(e))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?y:function(){throw new Error("not implemented")};var c,l=n,p="function"==typeof Uint16Array,d="function"==typeof Uint16Array?Uint16Array:null,b="function"==typeof Uint16Array?Uint16Array:void 0;c=function(){var n,t,e;if("function"!=typeof d)return!1;try{t=new d(t=[1,3.14,-3.14,65536,65537]),e=t,n=(p&&e instanceof Uint16Array||"[object Uint16Array]"===f(e))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?b:function(){throw new Error("not implemented")};var m,A=c,U={uint16:A,uint8:l};(m=new U.uint16(1))[0]=4660;var s,v,w=52===new U.uint8(m.buffer)[0],g={uint16:A,uint8:l};return s=function(){var n;return(n=new g.uint16(1))[0]=4660,52===new g.uint8(n.buffer)[1]}(),"little-endian"===(v=w&&s?"mixed-endian":w?"little-endian":s?"big-endian":"unknown")||"big-endian"===v?v:"unknown"},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).FLOAT_WORD_ORDER=t();
//# sourceMappingURL=browser.js.map
