!function(e){function t(t){for(var r,i,c=t[0],u=t[1],s=t[2],f=0,p=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(l&&l(t);p.length;)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={8:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var l=u;a.push([307,0]),n()}({307:function(e,t,n){"use strict";n.r(t);n(3),n(54);var r=n(5),o=n(1),a=n(2),i=n(6);async function c({task:e,search:t,image:n,storageKeys:c}){if("safari"===i.b){const e=(await Object(o.j)('input[name="authenticity_token"]')).value,t=new FormData;t.append("utf8","✓"),t.append("authenticity_token",e),t.append("file",n.imageBlob,n.imageFilename);const i=await fetch("https://ascii2d.net/search/file",{mode:"cors",method:"POST",body:t});if(200!==i.status)throw new Error(`API response: ${i.status}, ${await i.text()}`);const u=i.url;await Object(a.c)(c),Object(r.t)(u)&&window.location.replace(u)}else{const e="#file-form",t=await Object(o.j)(e);await Object(a.d)(e,t,n),await Object(a.c)(c),(await Object(o.j)("#file_upload")).submit()}}Object(a.b)(c,"ascii2d",sessionKey)}});