(self.webpackChunkforumproject=self.webpackChunkforumproject||[]).push([[314],{757:function(e,t,r){e.exports=r(727)},314:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return p}});var n=r(152),o=r(791),a=r(871);function i(e,t,r,n,o,a,i){try{var u=e[a](i),c=u.value}catch(s){return void r(s)}u.done?t(c):Promise.resolve(c).then(n,o)}function u(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function u(e){i(a,n,o,u,c,"next",e)}function c(e){i(a,n,o,u,c,"throw",e)}u(void 0)}))}}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var s=r(757),f=r.n(s),l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r,n;return t=e,r=null,n=[{key:"register",value:function(){var e=u(f().mark((function e(t,r,n,o){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://forumprojektbackend.herokuapp.com/api/auth/register",{method:"POST",mode:"cors",cache:"no-store",credentials:"omit",headers:{"Content-Type":"application/json"},redirect:"error",referrerPolicy:"no-referrer",body:JSON.stringify({username:t,password:n,confirmPassword:o})});case 2:if(201===e.sent.status){e.next=5;break}return e.abrupt("return",!1);case 5:return e.abrupt("return",!0);case 6:case"end":return e.stop()}}),e)})));return function(t,r,n,o){return e.apply(this,arguments)}}()},{key:"login",value:function(){var e=u(f().mark((function e(t,r){var n,o;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://forumprojektbackend.herokuapp.com/api/auth/login",{method:"PATCH",mode:"cors",cache:"no-store",credentials:"omit",headers:{"Content-Type":"application/json"},redirect:"error",referrerPolicy:"no-referrer",body:JSON.stringify({username:t,password:r})});case 2:if(200===(n=e.sent).status){e.next=5;break}return e.abrupt("return",!1);case 5:return e.next=7,n.json();case 7:return o=e.sent,e.abrupt("return",o);case 9:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"refresh",value:function(){var e=u(f().mark((function e(t,r){var n,o;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://forumprojektbackend.herokuapp.com/api/auth/refresh",{method:"PATCH",mode:"cors",cache:"no-store",credentials:"omit",headers:{"Content-Type":"application/json"},redirect:"error",referrerPolicy:"no-referrer",body:JSON.stringify({accessToken:t,refreshToken:r})});case 2:if(200===(n=e.sent).status){e.next=5;break}return e.abrupt("return",!1);case 5:return e.next=7,n.json();case 7:return o=e.sent,e.abrupt("return",o);case 9:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"logout",value:function(){var e=u(f().mark((function e(t){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://forumprojektbackend.herokuapp.com/api/auth/logout",{method:"PATCH",mode:"cors",cache:"no-store",credentials:"omit",headers:{Authorization:"bearer "+t},redirect:"error",referrerPolicy:"no-referrer"});case 2:if(200===e.sent.status){e.next=5;break}return e.abrupt("return",!1);case 5:return e.abrupt("return",!0);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"unregister",value:function(){var e=u(f().mark((function e(t){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://forumprojektbackend.herokuapp.com/api/auth/logout",{method:"PATCH",mode:"cors",cache:"no-store",credentials:"omit",headers:{Authorization:"bearer "+t},redirect:"error",referrerPolicy:"no-referrer"});case 2:if(200===e.sent.status){e.next=5;break}return e.abrupt("return",!1);case 5:return e.abrupt("return",!0);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}],r&&c(t.prototype,r),n&&c(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),h=(r(974),r(184)),p=function(){var e=(0,a.s0)(),t=(0,o.useState)(""),r=(0,n.Z)(t,2),i=r[0],u=r[1],c=(0,o.useState)(""),s=(0,n.Z)(c,2),f=s[0],p=s[1],d=(0,o.useState)(""),y=(0,n.Z)(d,2),m=y[0],v=y[1],g=(0,o.useState)(""),w=(0,n.Z)(g,2),b=w[0],x=w[1];return(0,h.jsx)("main",{className:"RegisterPage",children:(0,h.jsxs)("form",{className:"RegisterPage",onSubmit:function(e){return function(e){l.register(i,f,m,b).then((function(e){alert("value: "+e)}),(function(e){alert("reason: "+e)})),e.preventDefault()}(e)},children:[(0,h.jsx)("label",{htmlFor:"username",className:"RegisterPage",children:"Username:"}),(0,h.jsx)("input",{id:"username",className:"RegisterPage",type:"text",value:i,onChange:function(e){return u(e.target.value)}}),(0,h.jsx)("label",{htmlFor:"email",className:"RegisterPage",children:"Email:"}),(0,h.jsx)("input",{id:"email",className:"RegisterPage",type:"text",value:f,onChange:function(e){return p(e.target.value)}}),(0,h.jsx)("label",{htmlFor:"password",className:"RegisterPage",children:"Password:"}),(0,h.jsx)("input",{id:"password",className:"RegisterPage",type:"password",value:m,onChange:function(e){return v(e.target.value)}}),(0,h.jsx)("label",{htmlFor:"passwordRepeat",className:"RegisterPage",children:"Repeat password:"}),(0,h.jsx)("input",{id:"passwordRepeat",className:"RegisterPage",type:"password",value:b,onChange:function(e){return x(e.target.value)}}),(0,h.jsx)("input",{type:"submit",className:"RegisterPage",value:"REGISTER"}),(0,h.jsx)("button",{className:"RegisterPage",onClick:function(){return e("/")},children:"GO BACK"})]})})}},727:function(e){var t=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(C){c=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var o=t&&t.prototype instanceof m?t:m,a=Object.create(o.prototype),i=new R(n||[]);return a._invoke=function(e,t,r){var n=l;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw a;return T()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var u=L(i,r);if(u){if(u===y)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var c=f(e,t,r);if("normal"===c.type){if(n=r.done?d:h,c.arg===y)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=d,r.method="throw",r.arg=c.arg)}}}(e,r,i),a}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(C){return{type:"throw",arg:C}}}e.wrap=s;var l="suspendedStart",h="suspendedYield",p="executing",d="completed",y={};function m(){}function v(){}function g(){}var w={};c(w,a,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b(O([])));x&&x!==r&&n.call(x,a)&&(w=x);var k=g.prototype=m.prototype=Object.create(w);function j(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function P(e,t){function r(o,a,i,u){var c=f(e[o],e,a);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"===typeof l&&n.call(l,"__await")?t.resolve(l.__await).then((function(e){r("next",e,i,u)}),(function(e){r("throw",e,i,u)})):t.resolve(l).then((function(e){s.value=e,i(s)}),(function(e){return r("throw",e,i,u)}))}u(c.arg)}var o;this._invoke=function(e,n){function a(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(a,a):a()}}function L(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,L(e,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=f(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var a=o.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function R(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function O(e){if(e){var r=e[a];if(r)return r.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:T}}function T(){return{value:t,done:!0}}return v.prototype=g,c(k,"constructor",g),c(g,"constructor",v),v.displayName=c(g,u,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,c(e,u,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},j(P.prototype),c(P.prototype,i,(function(){return this})),e.AsyncIterator=P,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new P(s(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},j(k),c(k,u,"Generator"),c(k,a,(function(){return this})),c(k,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=O,R.prototype={constructor:R,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(N),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return u.type="throw",u.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],u=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),N(r),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;N(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:O(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}(e.exports);try{regeneratorRuntime=t}catch(r){"object"===typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}}}]);
//# sourceMappingURL=314.adc3c59e.chunk.js.map