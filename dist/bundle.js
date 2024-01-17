(()=>{var t={28:(t,e,n)=>{"use strict";n.d(e,{Z:()=>f});var r=n(81),i=n.n(r),o=n(645),s=n.n(o),a=n(667),c=n.n(a),l=new URL(n(772),n.b),u=new URL(n(38),n.b),p=s()(i());p.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap);"]);var d=c()(l),h=c()(u);p.push([t.id,`body {\n    background-color: rgb(49, 47, 47);\n}\n\n* {\n    font-family: 'Black Ops One', system-ui;\n}\n.container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    gap: 200px;\n    width: 100vw;\n    height: 100vh;\n}\n\n.title {\n    position: absolute;\n    top: 50px;\n    font-size: 72px;\n    color: white;\n\n}\n.grid-container {\n    display: grid;\n    grid-template-columns: repeat(10, 0fr);\n    grid-template-rows: auto;\n}\n\n.grid-node {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: 1px solid black;\n    height: 50px;\n    width: 50px;\n    background-color: white;\n}\n\n.grid-node:hover {\n    cursor: pointer;\n    background-color: grey;\n    transition: .2s ease;\n}\n\n.hit-marker {\n    background: url(${d});\n    height: 30px;\n    width: auto;\n}\n\n.miss-marker {\n    background: url(${h});\n    height: 30px;\n    width: auto;\n}`,""]);const f=p},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,i,o){"string"==typeof t&&(t=[[null,t,void 0]]);var s={};if(r)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(s[c]=!0)}for(var l=0;l<t.length;l++){var u=[].concat(t[l]);r&&s[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),i&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=i):u[4]="".concat(i)),e.push(u))}},e}},667:t=>{"use strict";t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]|(%20)/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},81:t=>{"use strict";t.exports=function(t){return t[1]}},379:t=>{"use strict";var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var o={},s=[],a=0;a<t.length;a++){var c=t[a],l=r.base?c[0]+r.base:c[0],u=o[l]||0,p="".concat(l," ").concat(u);o[l]=u+1;var d=n(p),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)e[d].references++,e[d].updater(h);else{var f=i(h,r);r.byIndex=a,e.splice(a,0,{identifier:p,updater:f,references:1})}s.push(p)}return s}function i(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,i){var o=r(t=t||[],i=i||{});return function(t){t=t||[];for(var s=0;s<o.length;s++){var a=n(o[s]);e[a].references--}for(var c=r(t,i),l=0;l<o.length;l++){var u=n(o[l]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}o=c}}},569:t=>{"use strict";var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,i&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},753:t=>{t.exports=function(t,e){this.name=t,this.turn=e,this.shoot=function(t,e,n){n.receiveAttack(t,e)},this.autoshoot=function(t){const e=Math.floor(10*Math.random()),n=Math.floor(10*Math.random());t.checkGrid(e,n)?t.receiveAttack(e,n):this.autoshoot(t)}}},880:t=>{t.exports=function(t,e){this.type=t,this.length=e,this.hit_count=0,this.sunk=!1,this.hit=function(){this.hit_count++},this.isSunk=function(){return this.hit_count===this.length&&(this.sunk=!0),this.sunk}}},772:(t,e,n)=>{"use strict";t.exports=n.p+"e7237dd5759f9b8f0995.svg"},38:(t,e,n)=>{"use strict";t.exports=n.p+"a0f5ee3bafada34dc14e.svg"}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={id:r,exports:{}};return t[r](o,o.exports,n),o.exports}n.m=t,n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");if(r.length)for(var i=r.length-1;i>-1&&!t;)t=r[i--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{"use strict";var t=n(772),e=n(38);const r=function(t){const e=document.createElement("div");for(let n=0;n<10;n++)for(let r=0;r<10;r++){const i=document.createElement("div");i.classList.add("grid-node"),i.setAttribute("id",t+"."+n+"-"+r),e.appendChild(i)}return e.classList.add("grid-container"),e},i=function(n,r,i,o){const s=document.getElementById(o+"."+r+"-"+i);if("shot"===n){const e=new Image;e.src=t,e.classList.add("hit-marker"),s.innerHTML="",s.appendChild(e)}else if("miss"===n){const t=new Image;t.src=e,t.classList.add("miss-marker"),s.innerHTML="",s.appendChild(t)}},o=function(t){const e=t,n=Array(10).fill(null).map((()=>Array(10).fill(null)));let r=5;return{placeShip:(t,e,r,i,o)=>{for(let s=0;s<e;s++)"vertical"===r?n[i+s][o]=t:n[i][o+s]=t},receiveAttack:(t,o)=>{if(n[t][o]&&"miss"!=n[t][o]){const e=n[t][o];e.hit(),n[t][o]="shot",e.isSunk()&&r--}else n[t][o]="miss";i(n[t][o],t,o,e)},allSunk:()=>0===r,checkGrid:(t,e)=>{let r=!1;return"shot"!=n[t][e]&&"miss"!=n[t][e]&&(r=!0),r},getGrid:(t,e)=>n[t][e],getPlayer:()=>e,getBoard:(t,e)=>n[t][e],getShips:()=>r}},s=n(753),a=n(880);var c=n(379),l=n.n(c),u=n(795),p=n.n(u),d=n(569),h=n.n(d),f=n(565),m=n.n(f),v=n(216),g=n.n(v),y=n(589),b=n.n(y),w=n(28),x={};x.styleTagTransform=b(),x.setAttributes=m(),x.insert=h().bind(null,"head"),x.domAPI=p(),x.insertStyleElement=g(),l()(w.Z,x),w.Z&&w.Z.locals&&w.Z.locals;const S=function(){const t=document.createElement("div");t.classList.add("container");const e=document.createElement("div");return e.innerHTML="BATTLESHIP",e.classList.add("title"),t.appendChild(e),t}(),k=r("player1"),T=r("player2");S.appendChild(k),S.appendChild(T),document.body.appendChild(S),function(){function t(){d.autoshoot(e),p.turn=!p.turn,d.turn=!d.turn}window.addEventListener("click",(r=>{console.log(r.srcElement.id);const i=r.srcElement.id.split(".");if("player2"===i[0]&&p.turn){const r=i[1].split("-");p.shoot(r[0],r[1],n),p.turn=!p.turn,d.turn=!d.turn,console.log(n.getShips());const o=function(t,e){return t.allSunk()?"Player 2 Wins!":e.allSunk()?"Player 1 Wins!":null}(e,n);o&&console.log(o),setTimeout(t,2e3)}}));const e=new o("player1"),n=new o("player2"),r=new a("battleship",4),i=new a("carrier",5),c=new a("destroyer",3),l=new a("submarine",3),u=new a("patrolboat",2),p=new s("player1",!0),d=new s("player2",!1);e.placeShip(r,r.length,"vertical",0,0),e.placeShip(i,i.length,"vertical",0,1),e.placeShip(c,c.length,"vertical",0,2),e.placeShip(l,l.length,"vertical",0,3),e.placeShip(u,u.length,"vertical",0,4),n.placeShip(r,r.length,"vertical",0,0),n.placeShip(i,i.length,"vertical",0,1),n.placeShip(c,c.length,"vertical",0,2),n.placeShip(l,l.length,"vertical",0,3),n.placeShip(u,u.length,"vertical",0,4)}()})()})();