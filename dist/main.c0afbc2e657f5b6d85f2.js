(()=>{"use strict";var e,t={588:(e,t,r)=>{r(747);var n=r(947),o=r(436),a=r(24),i=r(417);n.vI.add(o.mRB,a.NC,i.vnX),n.vz.watch(),n.vz.i2svg(),document.querySelector(".get-jokes").addEventListener("click",(function(e){var t=document.querySelector('input[type="number"]').value,r=new XMLHttpRequest;r.open("GET","http://api.icndb.com/jokes/random/".concat(t),!0),r.onload=function(){if(200===this.status){var e=this.responseText;console.log(e)}},r.send(),e.preventDefault()}))}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={exports:{}};return t[e].call(a.exports,a,a.exports,n),a.exports}n.m=t,e=[],n.O=(t,r,o,a)=>{if(!r){var i=1/0;for(u=0;u<e.length;u++){for(var[r,o,a]=e[u],s=!0,c=0;c<r.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((e=>n.O[e](r[c])))?r.splice(c--,1):(s=!1,a<i&&(i=a));s&&(e.splice(u--,1),t=o())}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[r,o,a]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,a,[i,s,c]=r,u=0;for(o in s)n.o(s,o)&&(n.m[o]=s[o]);for(c&&c(n),t&&t(r);u<i.length;u++)a=i[u],n.o(e,a)&&e[a]&&e[a][0](),e[i[u]]=0;n.O()},r=self.webpackChunkmodern_javascript=self.webpackChunkmodern_javascript||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var o=n.O(void 0,[985],(()=>n(588)));o=n.O(o)})();