!function(e){function t(t){for(var r,i,c=t[0],s=t[1],u=t[2],l=0,b=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&b.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(p&&p(t);b.length;)b.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={53:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window.webpackJsonp=window.webpackJsonp||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var p=s;o.push([341,0]),n()}({341:function(e,t,n){"use strict";n.r(t);n(3),n(54);var r=n(5),a=n(1),o=n(2),i=n(6);function c(){return Object(o.a)(["yandex.com","yandex.ru","yandex.ua","yandex.by","yandex.kz","yandex.uz","yandex.com.tr"],"yandex")}function s(e){if(413===e.status)return void largeImageNotify("yandex","8");const t=JSON.parse(e.responseText).blocks[0].params.url,n=`https://${c()}/images/search?${t}`;Object(r.t)(n)&&window.location.replace(n)}async function u({task:e,search:t,image:n,storageKeys:u}){if(document.head.querySelector('meta[name="apple-mobile-web-app-capable"]')||"safari"===i.b){const e=`https://${c()}/images/touch/search?rpt=imageview&format=json&request={"blocks":[{"block":"cbir-uploader__get-cbir-id"}]}`,t=new FormData;t.append("upfile",n.imageBlob);const a=Object(r.e)();a.addEventListener("load",(function(){Object(o.c)(u),Object(o.e)(this,s,"yandex")})),a.open("POST",e),a.setRequestHeader("X-Requested-With","XMLHttpRequest"),a.setRequestHeader("Accept","application/json, text/javascript, */*; q=0.01"),a.send(t)}else{(await Object(a.j)(".input_js_inited .input__cbir-button button",{observerOptions:{attributes:!0,attributeFilter:["class"]}})).click();const e=".cbir-panel_visibility_visible input.cbir-panel__file-input",t=await Object(a.j)(e,{observerOptions:{attributes:!0,attributeFilter:["class"]}});await Object(o.d)(e,t,n),await Object(o.c)(u),t.dispatchEvent(new Event("change"))}}window.location.pathname.startsWith("/showcaptcha")||Object(o.b)(u,"yandex",sessionKey)}});