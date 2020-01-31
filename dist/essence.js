!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o=n(3),s=function(){function e(){}return e.find=function(e){var t=[];return document.querySelectorAll(e).forEach(function(n,o){t.push(new r.EssenceElement(e,n))}),t},e.findFirst=function(e){var t=document.querySelectorAll(e);return 0===t.length?null:new r.EssenceElement(e,t[0])},e.request=function(e,t,n){return new Promise(function(r,s){var i=new XMLHttpRequest;i.open(t,e,!0),i.setRequestHeader("Content-Type","application/json; charset=UTF-8"),i.setRequestHeader("Access-Control-Allow-Origin","*");var u=new o.EssenceResponse;i.onload=function(e){if(u.response=i.responseText,u.status=i.status,i.status>=200&&i.status<400){if(""!==i.response){var t=JSON.parse(i.response);u.success=!0,u.data=t}r(u)}else u.success=!1,s(u)},i.onerror=function(e){u.response=i.responseText,u.status=i.status,u.success=!1,s(u)},i.send(JSON.stringify(n))})},e.post=function(t,n){return e.request(t,"POST",n)},e.get=function(t,n){return e.request(t,"GET",n)},e.hasClass=function(e,t){return(" "+e.className+" ").replace(/[\n\t]/g," ").indexOf(" "+t+" ")>-1},e}();t.EssenceCore=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);function o(){var e=Object.assign(function(e){if(null!=e)return r.EssenceCore.findFirst(e)},{});return e.findFirst=r.EssenceCore.findFirst,e.find=r.EssenceCore.find,e.post=r.EssenceCore.post,e.get=r.EssenceCore.get,e.request=r.EssenceCore.get,e.hasClass=r.EssenceCore.hasClass,e}t.Create=o;var s=o();t.Essence=s,window.Essence=window.Essence||s},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,s){function i(e){try{l(r.next(e))}catch(e){s(e)}}function u(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){e.done?o(e.value):function(e){return e instanceof n?e:new n(function(t){t(e)})}(e.value).then(i,u)}l((r=r.apply(e,t||[])).next())})},o=this&&this.__generator||function(e,t){var n,r,o,s,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function u(s){return function(u){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,r=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===s[0]||2===s[0])){i=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1];break}if(6===s[0]&&i.label<o[1]){i.label=o[1],o=s;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(s);break}o[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i)}catch(e){s=[6,e],r=0}finally{n=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}};Object.defineProperty(t,"__esModule",{value:!0});var s=n(0),i=function(){function e(e,t){if(void 0===t&&(t=null),this.selector=e,this.element=t,null===t){var n=s.EssenceCore.findFirst(e);if(null===n)throw new Error("No elements found with selector: "+e);this.element=n.getElement()}}return e.prototype.getElement=function(){return this.element},e.prototype.getSelector=function(){return this.selector},e.prototype.getAttribute=function(e){return this.element.getAttribute(e)},e.prototype.setAttribute=function(e,t){return this.element.setAttribute(e,t)},e.prototype.getValue=function(){if(this.element instanceof HTMLInputElement||this.element instanceof HTMLTextAreaElement)return this.element.value;throw new Error("Element is not an input element")},e.prototype.setValue=function(e){if(!(this.element instanceof HTMLInputElement||this.element instanceof HTMLTextAreaElement))throw new Error("Element is not an input element");this.element.value=e},e.prototype.fadeIn=function(){return r(this,void 0,void 0,function(){var e=this;return o(this,function(t){return[2,new Promise(function(t){var n=e.element;if(""===n.style.opacity&&(n.style.opacity="0"),"1"!==n.style.opacity)var r=setInterval(function(){n.style.opacity=String(+n.style.opacity+.1),+getComputedStyle(n).getPropertyValue("opacity")>=1&&(clearInterval(r),t())},25)})]})})},e.prototype.fadeOut=function(){var e=this;return new Promise(function(t){var n=e.element;if(""===n.style.opacity&&(n.style.opacity="1"),"0"!==n.style.opacity)var r=setInterval(function(){n.style.opacity=String(+n.style.opacity-.1),+getComputedStyle(n).getPropertyValue("opacity")<=0&&(n.style.display="none",clearInterval(r),t())},25)})},e.prototype.hasClass=function(e){return s.EssenceCore.hasClass(this.element,e)},e.prototype.slideTo=function(e,t){void 0===t&&(t=500);var n=this.element,r=!1,o=e;return new Promise(function(e){n.style.height=n.offsetHeight+"px";var s=parseInt(n.style.height),i=(new Date).getTime(),u=(r=!r)?o:0,l=u-parseInt(n.style.height),c=setInterval(function(){var r=(new Date).getTime()-i;if(r<=t){var o=s+Math.floor(l*r/t);n.style.height=o+"px"}else n.style.height=u+"px",clearInterval(c),e()},1)})},e}();t.EssenceElement=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){return function(){}}();t.EssenceResponse=r}])});