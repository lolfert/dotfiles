!function(e){function t(t){for(var r,c,i=t[0],u=t[1],l=t[2],f=0,p=[];f<i.length;f++)c=i[f],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(s&&s(t);p.length;)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={52:0},a=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var i=window.webpackJsonp=window.webpackJsonp||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var s=u;a.push([340,0]),n()}({340:function(e,t,n){"use strict";n.r(t);n(3),n(75);var r=n(1),o=n(2);async function a({task:e,search:t,image:n,storageKeys:a}){const c=new Image;c.onload=async function(){const e=document.createElement("canvas"),t=e.getContext("2d"),n=c.naturalWidth,i=c.naturalHeight;let u,l;n>640||i>640?(n===i&&(u=l=640),n>i&&(u=640,l=i/n*640),n<i&&(u=n/i*640,l=640)):(u=n,l=i),e.width=u,e.height=l,t.fillStyle="#FFFFFF",t.fillRect(0,0,u,l),t.drawImage(c,0,0,n,i,0,0,u,l);const s=e.toDataURL("image/jpeg",.8);await Object(o.c)(a),(await Object(r.j)("#autoSearch")).checked=!0,(await Object(r.j)("#originalImage")).src=s},c.src=URL.createObjectURL(n.imageBlob)}Object(o.b)(a,"whatanime",sessionKey)}});