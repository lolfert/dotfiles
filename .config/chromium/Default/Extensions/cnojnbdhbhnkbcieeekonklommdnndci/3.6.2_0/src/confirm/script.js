!function(e){function t(t){for(var i,s,o=t[0],l=t[1],c=t[2],d=0,g=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&g.push(a[s][0]),a[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);for(u&&u(t);g.length;)g.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,o=1;o<n.length;o++){var l=n[o];0!==a[l]&&(i=!1)}i&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var i={},a={18:0},r=[];function s(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=i,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var o=window.webpackJsonp=window.webpackJsonp||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;r.push([351,1]),n()}({193:function(e,t,n){},297:function(e,t,n){"use strict";var i=n(193);n.n(i).a},351:function(e,t,n){"use strict";n.r(t);n(3);var i=n(45),a=n(5),r=n(0),s=n.n(r),o=n(25),l=n(1),c=n(6),u={components:{[o.c.name]:o.c},data:function(){return{showDialog:!1,contentMessagePort:null,task:null,images:[]}},methods:{getText:l.q,onMessage:function(e,t){t&&t.url===document.URL||("openView"===e.id?(this.task=e.task,this.images=e.images,this.showDialog=!0):"closeView"===e.id&&(this.showDialog=!1))},onCancel:function(){this.showDialog=!1,s.a.runtime.sendMessage({id:"cancelView",view:"confirm"})},onSelection:function(e){this.showDialog=!1,s.a.runtime.sendMessage({id:"imageConfirmationSubmit",image:Object.assign({},this.images[e.target.dataset.index]),task:this.task})}},mounted:async function(){if("safari"===c.b){const e=await s.a.tabs.getCurrent();this.contentMessagePort=s.a.tabs.connect(e.id,{frameId:0}),this.contentMessagePort.onMessage.addListener(this.onMessage)}else s.a.runtime.onMessage.addListener(this.onMessage),s.a.runtime.sendMessage({id:"routeMessage",setSenderFrameId:!0,messageFrameId:0,message:{id:"saveFrameId"}})}},d=(n(297),n(20)),g=Object(d.a)(u,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{id:"sbi-dialog-select",title:e.getText("dialogTitle_imageConfirmation"),"cancel-text":e.getText("buttonText_cancel"),"show-dialog":e.showDialog},on:{cancel:e.onCancel}},[n("div",{staticClass:"mdc-grid-list"},[n("ul",{staticClass:"mdc-grid-list__tiles"},e._l(e.images,(function(t,i){return n("li",{key:i,staticClass:"mdc-grid-tile"},[n("div",{staticClass:"mdc-grid-tile__primary"},[n("div",{staticClass:"mdc-grid-tile__primary-content tile-container",attrs:{tabindex:"0","data-index":i},on:{click:e.onSelection,keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onSelection(t)}}},[n("img",{staticClass:"tile",attrs:{referrerpolicy:"no-referrer",src:t.imageDataUrl||t.imageUrl}})])])])})),0)])])}),[],!1,null,null,null).exports;!async function(){await Object(a.b)(),new i.a({el:"#app",render:e=>e(g)})}()}});