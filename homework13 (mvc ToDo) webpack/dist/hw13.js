!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="dist/",n(n.s=0)}([function(e,t,n){n(1),e.exports=n(2)},function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.r(t);var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._events=[]}var t,n,o;return t=e,(n=[{key:"on",value:function(e,t){this._events.push({event:e,handler:t})}},{key:"emit",value:function(e,t){for(var n=0;n<this._events.length;n++)this._events[n].event===e&&this._events[n].handler(t)}}])&&r(t.prototype,n),o&&r(t,o),e}();function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var l=function(e){function t(e,n){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=u(this,c(t).call(this)))._items=e||[],r._rootElement=n,r}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,o),n=t,(r=[{key:"getItems",value:function(){return this._items}},{key:"addItem",value:function(e){this._items.push(e),this.emit("add",e),this.saveItems()}},{key:"editItem",value:function(e){var t=this;this._items.forEach(function(n,r){n===e.oldItem&&(t._items[r]=e.item)}),this.emit("rebuild"),this.saveItems()}},{key:"removeItem",value:function(e){var t=this;this._items.forEach(function(n,r){n===e&&(t._items.splice(r,1),t.emit("remove",e))}),this.saveItems()}},{key:"removeAll",value:function(){this._items=[],this.emit("rebuild"),this.saveItems()}},{key:"reverseAll",value:function(){for(var e=[],t=this._items.length-1;t>=0;t--)e.push(this._items[t]);this._items=e,this.emit("rebuild"),this.saveItems()}},{key:"checkedItem",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];e.checked=t,this.emit("done",e),this.saveItems()}},{key:"itemDrag",value:function(e){var t=this;this._items.forEach(function(n,r){JSON.stringify(n)===JSON.stringify(e.item1)&&(t._items[r]=e.item2),JSON.stringify(n)===JSON.stringify(e.item2)&&(t._items[r]=e.item1)}),this.emit("rebuild"),this.saveItems()}},{key:"saveItems",value:function(){try{localStorage.setItem(this._rootElement.id,JSON.stringify(this._items))}catch(e){e==QUOTA_EXCEEDED_ERR&&alert("Превышен лимит")}}}])&&a(n.prototype,r),i&&a(n,i),t}();function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=function(e){function t(e,n){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=m(this,p(t).call(this)))._model=e,r._root=n,r.createForm(r._root),r.createAdditionalButton(r._root),r}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,o),n=t,(r=[{key:"createForm",value:function(e){var t=this,n=document.createElement("form");n.innerHTML='\n            <div class="add-block">\n                <input class="buy" type="text" name="text"/>\n                <input class="add" type="submit" value="add">\n            </div>\n        ',n.addEventListener("submit",function(e){e.preventDefault();var r=n.text.value.trim();if(r){var o=new Date,i=o.getFullYear()+"-"+o.getMonth()+"-"+o.getDate()+" "+o.getHours()+":"+o.getMinutes()+":"+o.getSeconds();t.emit("formSubmit",{text:r,checked:!1,created:"created: "+i}),n.text.value=""}}),e.appendChild(n)}},{key:"createAdditionalButton",value:function(e){var t=this,n=document.createElement("div");n.classList.add("control-buttons");var r=document.createElement("button");r.innerText="Reverse list",r.classList.add("reverse"),r.addEventListener("click",function(e){e.preventDefault(),t.emit("reverseList")}),n.appendChild(r);var o=document.createElement("button");o.innerText="Clear list",o.classList.add("removeAll"),o.addEventListener("click",function(e){e.preventDefault(),t.emit("removeAllItem")}),n.appendChild(o),e.appendChild(n)}}])&&d(n.prototype,r),i&&d(n,i),t}();function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var E=null,k=function(e){function t(e,n){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=_(this,g(t).call(this)))._model=e,r._listContainer=document.createElement("ul"),r.buildList(),r._listContainer.classList.add("buy-list"),n.appendChild(r._listContainer),r._model.on("remove",function(e){r.removeItem(e)}),r._model.on("add",function(e){var t=r.createTODO(e);r._listContainer.appendChild(t)}),r._model.on("done",function(e){r.checkItem(e)}),r._model.on("rebuild",function(){r.buildList()}),r._model.on("rebuild",function(){r.buildList()}),r._model.on("rebuild",function(){r.buildList()}),r}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(t,o),n=t,(r=[{key:"buildList",value:function(){var e=this;this._listContainer.innerHTML="",this._model.getItems().forEach(function(t){var n=e.createTODO(t);e._listContainer.appendChild(n)})}},{key:"createTODO",value:function(e){var t=this,n=document.createElement("li");n.task=e;var r=document.createElement("span"),o=document.createElement("button"),i=document.createElement("button"),a=document.createElement("input");if(o.innerHTML="x",o.setAttribute("class","removeItem"),o.addEventListener("click",function(n){t.emit("itemDeleteClick",e)}),i.innerHTML="Edit",i.setAttribute("class","editItem"),i.addEventListener("click",function(n){if("BUTTON"==n.target.tagName&&"editItem"==n.target.className){n.stopPropagation();var r=n.target.parentElement.querySelector(".text"),o=n.target.parentElement.querySelector(".editItem");r.setAttribute("contenteditable","true"),r.classList.add("edited"),o.innerHTML="Save",o.setAttribute("class","saveItem")}else if("BUTTON"==n.target.tagName&&"saveItem"==n.target.className){var i=n.target.parentElement.querySelector(".text"),a=n.target.parentElement.querySelector(".saveItem");i.setAttribute("contenteditable","false"),i.classList.remove("edited"),a.innerHTML="Edit",a.setAttribute("class","editItem");var u=new Date,c=u.getFullYear()+"-"+u.getMonth()+"-"+u.getDate()+" "+u.getHours()+":"+u.getMinutes()+":"+u.getSeconds(),s=Object.assign({},e);e.text=i.innerHTML,e.updated="updated: "+c,e.checked=!1;var l={oldItem:s,item:e};t.emit("itemEditClick",l)}}),a.type="checkbox",a.name="done",a.checked=e.checked,a.addEventListener("change",function(n){t.emit("itemCheckboxChange",e)}),r.innerHTML=e.text,r.setAttribute("class","text"),n.appendChild(o),n.appendChild(i),n.appendChild(a),n.appendChild(r),void 0!==e.created){var u=document.createElement("span");u.innerHTML=e.created,u.setAttribute("class","created"),n.appendChild(u)}if(void 0!==e.updated){var c=document.createElement("span");c.innerHTML=e.updated,c.setAttribute("class","updated"),n.appendChild(c)}return n.draggable=!0,n.addEventListener("dragstart",function(e){e.target.style.opacity="0.4",E=t,e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("task",JSON.stringify(e.target.task))},!1),n.addEventListener("dragenter",function(e){e.target.classList.add("over")},!1),n.addEventListener("dragover",function(e){return e.preventDefault&&e.preventDefault(),e.dataTransfer.dropEffect="move",!1},!1),n.addEventListener("dragleave",function(e){e.target.classList.remove("over")},!1),n.addEventListener("drop",function(e){if(e.stopPropagation&&e.stopPropagation(),E.task!=e.target.task){var n={item1:JSON.parse(e.dataTransfer.getData("task")),item2:e.target.task};t.emit("itemDrag",n)}return!1},!1),n.addEventListener("dragend",function(e){e.target.style.opacity="1"},!1),n}},{key:"removeItem",value:function(e){var t=this;[].forEach.call(this._listContainer.childNodes,function(n){n.task===e&&t._listContainer.removeChild(n)})}},{key:"checkItem",value:function(e){[].forEach.call(this._listContainer.childNodes,function(t){t.task===e&&(t.querySelector("input").checked=e.checked)})}}])&&h(n.prototype,r),i&&h(n,i),t}();function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e,t){return!t||"object"!==w(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function L(e,t){return(L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var I=function(e){function t(e){var n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=S(this,C(t).call(this)))._root=e;var r=localStorage.getItem(e.id),o=[];return void 0!==r&&(o=JSON.parse(r)),n._model=new l(o,n._root),n._formView=new y(n._model,n._root),n._listView=new k(n._model,n._root),n._listView.on("itemCheckboxChange",function(e){n._model.checkedItem(e,!e.checked)}),n._listView.on("itemEditClick",function(e){n._model.editItem(e)}),n._listView.on("itemDeleteClick",function(e){n._model.removeItem(e)}),n._listView.on("itemDrag",function(e){n._model.itemDrag(e)}),n._formView.on("formSubmit",function(e){n._model.addItem(e)}),n._formView.on("reverseList",function(){n._model.reverseAll()}),n._formView.on("removeAllItem",function(){n._model.removeAll()}),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&L(e,t)}(t,o),t}();document.addEventListener("DOMContentLoaded",function(){new I(document.getElementById("buy-list"))})},function(e,t){}]);