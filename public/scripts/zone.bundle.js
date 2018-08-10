!function(t){var e={};function n(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(i,s,function(e){return t[e]}.bind(null,s));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){"use strict";var i;Object.defineProperty(e,"__esModule",{value:!0}),function(t){t.North="NORTH",t.South="SOUTH",t.East="EAST",t.West="WEST"}(i=e.Facing||(e.Facing={}));e.Robot=class{constructor(t){this.grid=t,this.x=-1,this.y=-1,this.facing=i.South}isPlaced(){return this.grid.isWithinBounds(this.x,this.y)}place(t,e,n){return!!this.grid.isWithinBounds(t,e)&&(this.x=t,this.y=e,this.facing=n,!0)}move(){if(!this.isPlaced())return!1;switch(this.facing){case i.North:return this.place(this.x,this.y+1,this.facing);case i.East:return this.place(this.x+1,this.y,this.facing);case i.South:return this.place(this.x,this.y-1,this.facing);case i.West:return this.place(this.x-1,this.y,this.facing);default:return!1}}left(){if(this.isPlaced()){switch(this.facing){case i.North:this.facing=i.West;break;case i.East:this.facing=i.North;break;case i.South:this.facing=i.East;break;case i.West:this.facing=i.South;break;default:return!1}return!0}return!1}right(){if(this.isPlaced()){switch(this.facing){case i.North:this.facing=i.East;break;case i.East:this.facing=i.South;break;case i.South:this.facing=i.West;break;case i.West:this.facing=i.North;break;default:return!1}return!0}return!1}report(){return{x:this.x,y:this.y,facing:this.facing}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=n(2),s=n(0),a=n(3),r=new i.Grid(5,5),c=new s.Robot(r);a.draw(r,c)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.Grid=class{constructor(t,e){this.columnCount=t,this.rowCount=e}isWithinBounds(t,e){return t>=0&&t<this.columnCount&&e>=0&&e<this.rowCount}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=n(0),s="🤖";function a(t,e,n){t.innerHTML="",t.classList.add("grid");for(var a=n.report(),r=e.rowCount-1;r>=0;--r){var c=document.createElement("div");c.classList.add("row");for(var o=0;o<e.columnCount;++o){var u=document.createElement("div");if(u.classList.add("square"),o===a.x&&r==a.y)switch(u.textContent=s,a.facing){case i.Facing.North:u.classList.add("face-north");break;case i.Facing.East:u.classList.add("face-east");break;case i.Facing.West:u.classList.add("face-west")}else o%2==r%2?u.classList.add("pattern-1"):u.classList.add("pattern-2");c.appendChild(u)}t.appendChild(c)}}function r(t,e,n="positive"){t.innerHTML="",t.classList.add("status");var i=document.createElement("div");i.textContent=e,i.classList.add(n),t.appendChild(i)}e.draw=function(t,e){const n=document.getElementById("root");if(n){const s=document.createElement("div"),c=document.createElement("div"),o=document.createElement("div");!function(t,e,n,s,c){t.innerHTML="",t.classList.add("control-panel");const o=()=>{const t=c.isPlaced()?"Uh oh! I would fall off if I move there!":"Uh oh! You haven't placed me yet!";r(n,t,"negative")},u=()=>{const{x:t,y:e,facing:i}=c.report();r(n,`Beep bop! Now at (${t}, ${e}) facing ${i}!`)},d=document.createElement("button");d.textContent="place",d.addEventListener("click",()=>{c.place(0,0,i.Facing.South)?(a(e,s,c),u()):o()});const l=document.createElement("button");l.textContent="left",l.addEventListener("click",()=>{c.left()?(a(e,s,c),u()):o()});const h=document.createElement("button");h.textContent="right",h.addEventListener("click",()=>{c.right()?(a(e,s,c),u()):o()});const f=document.createElement("button");f.addEventListener("click",()=>{c.move()?(a(e,s,c),u()):o()}),f.textContent="move",t.appendChild(d),t.appendChild(l),t.appendChild(f),t.appendChild(h)}(o,s,c,t,e),a(s,t,e),r(c,"Hit PLACE to get started!"),n.appendChild(s),n.appendChild(o),n.appendChild(c)}}}]);