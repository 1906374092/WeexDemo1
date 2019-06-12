// { "framework": "Vue"} 

!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,n){"use strict";var r=n(1),o=r.router,i=n(5);new Vue(Vue.util.extend({el:"#root",router:o},i)),o.push("/")},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.router=void 0;var o=n(2),i=r(o),a=n(3),u=r(a);Vue.use(i.default);e.router=new i.default({routes:[{path:"/",name:"HelloWorld",component:u.default}]})},function(t,e,n){"use strict";/*!
  * vue-router v3.0.6
  * (c) 2019 Evan You
  * @license MIT
  */
function r(t,e){if(!t)throw new Error("[vue-router] "+e)}function o(t,e){}function i(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function a(t,e){for(var n in e)t[n]=e[n];return t}function u(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0;default:o(!1,'props in "'+t.path+'" is a '+typeof e+", expecting an object, function or boolean.")}}function s(t,e,n){void 0===e&&(e={});var r,i=n||c;try{r=i(t||"")}catch(t){o(!1,t.message),r={}}for(var a in e)r[a]=e[a];return r}function c(t){var e={};return(t=t.trim().replace(/^(\?|#|&)/,""))?(t.split("&").forEach(function(t){var n=t.replace(/\+/g," ").split("="),r=Bt(n.shift()),o=n.length>0?Bt(n.join("=")):null;void 0===e[r]?e[r]=o:Array.isArray(e[r])?e[r].push(o):e[r]=[e[r],o]}),e):e}function p(t){var e=t?Object.keys(t).map(function(e){var n=t[e];if(void 0===n)return"";if(null===n)return Vt(e);if(Array.isArray(n)){var r=[];return n.forEach(function(t){void 0!==t&&(null===t?r.push(Vt(e)):r.push(Vt(e)+"="+Vt(t)))}),r.join("&")}return Vt(e)+"="+Vt(n)}).filter(function(t){return t.length>0}).join("&"):null;return e?"?"+e:""}function f(t,e,n,r){var o=r&&r.options.stringifyQuery,i=e.query||{};try{i=h(i)}catch(t){}var a={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:i,params:e.params||{},fullPath:d(e,o),matched:t?l(t):[]};return n&&(a.redirectedFrom=d(n,o)),Object.freeze(a)}function h(t){if(Array.isArray(t))return t.map(h);if(t&&"object"==typeof t){var e={};for(var n in t)e[n]=h(t[n]);return e}return t}function l(t){for(var e=[];t;)e.unshift(t),t=t.parent;return e}function d(t,e){var n=t.path,r=t.query;void 0===r&&(r={});var o=t.hash;void 0===o&&(o="");var i=e||p;return(n||"/")+i(r)+o}function y(t,e){return e===zt?t===e:!!e&&(t.path&&e.path?t.path.replace(Ft,"")===e.path.replace(Ft,"")&&t.hash===e.hash&&v(t.query,e.query):!(!t.name||!e.name)&&(t.name===e.name&&t.hash===e.hash&&v(t.query,e.query)&&v(t.params,e.params)))}function v(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!t||!e)return t===e;var n=Object.keys(t),r=Object.keys(e);return n.length===r.length&&n.every(function(n){var r=t[n],o=e[n];return"object"==typeof r&&"object"==typeof o?v(r,o):String(r)===String(o)})}function m(t,e){return 0===t.path.replace(Ft,"/").indexOf(e.path.replace(Ft,"/"))&&(!e.hash||t.hash===e.hash)&&g(t.query,e.query)}function g(t,e){for(var n in e)if(!(n in t))return!1;return!0}function b(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||t.defaultPrevented||void 0!==t.button&&0!==t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){if(/\b_blank\b/i.test(t.currentTarget.getAttribute("target")))return}return t.preventDefault&&t.preventDefault(),!0}}function w(t){if(t)for(var e,n=0;n<t.length;n++){if(e=t[n],"a"===e.tag)return e;if(e.children&&(e=w(e.children)))return e}}function x(t){if(!x.installed||Pt!==t){x.installed=!0,Pt=t;var e=function(t){return void 0!==t},n=function(t,n){var r=t.$options._parentVnode;e(r)&&e(r=r.data)&&e(r=r.registerRouteInstance)&&r(t,n)};t.mixin({beforeCreate:function(){e(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(t.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._routerRoot._route}}),t.component("RouterView",qt),t.component("RouterLink",Nt);var r=t.config.optionMergeStrategies;r.beforeRouteEnter=r.beforeRouteLeave=r.beforeRouteUpdate=r.created}}function _(t,e,n){var r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;var o=e.split("/");n&&o[o.length-1]||o.pop();for(var i=t.replace(/^\//,"").split("/"),a=0;a<i.length;a++){var u=i[a];".."===u?o.pop():"."!==u&&o.push(u)}return""!==o[0]&&o.unshift(""),o.join("/")}function R(t){var e="",n="",r=t.indexOf("#");r>=0&&(e=t.slice(r),t=t.slice(0,r));var o=t.indexOf("?");return o>=0&&(n=t.slice(o+1),t=t.slice(0,o)),{path:t,query:n,hash:e}}function k(t){return t.replace(/\/\//g,"/")}function E(t,e){for(var n,r=[],o=0,i=0,a="",u=e&&e.delimiter||"/";null!=(n=Zt.exec(t));){var s=n[0],c=n[1],p=n.index;if(a+=t.slice(i,p),i=p+s.length,c)a+=c[1];else{var f=t[i],h=n[2],l=n[3],d=n[4],y=n[5],v=n[6],m=n[7];a&&(r.push(a),a="");var g=null!=h&&null!=f&&f!==h,b="+"===v||"*"===v,w="?"===v||"*"===v,x=n[2]||u,_=d||y;r.push({name:l||o++,prefix:h||"",delimiter:x,optional:w,repeat:b,partial:g,asterisk:!!m,pattern:_?T(_):m?".*":"[^"+S(x)+"]+?"})}}return i<t.length&&(a+=t.substr(i)),a&&r.push(a),r}function O(t,e){return A(E(t,e))}function j(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function C(t){return encodeURI(t).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function A(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"==typeof t[n]&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var o="",i=n||{},a=r||{},u=a.pretty?j:encodeURIComponent,s=0;s<t.length;s++){var c=t[s];if("string"!=typeof c){var p,f=i[c.name];if(null==f){if(c.optional){c.partial&&(o+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(Jt(f)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(f)+"`");if(0===f.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var h=0;h<f.length;h++){if(p=u(f[h]),!e[s].test(p))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===h?c.prefix:c.delimiter)+p}}else{if(p=c.asterisk?C(f):u(f),!e[s].test(p))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+p+'"');o+=c.prefix+p}}else o+=c}return o}}function S(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function T(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function $(t,e){return t.keys=e,t}function L(t){return t.sensitive?"":"i"}function P(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return $(t,e)}function q(t,e,n){for(var r=[],o=0;o<t.length;o++)r.push(M(t[o],e,n).source);return $(new RegExp("(?:"+r.join("|")+")",L(n)),e)}function U(t,e,n){return I(E(t,n),e,n)}function I(t,e,n){Jt(e)||(n=e||n,e=[]),n=n||{};for(var r=n.strict,o=!1!==n.end,i="",a=0;a<t.length;a++){var u=t[a];if("string"==typeof u)i+=S(u);else{var s=S(u.prefix),c="(?:"+u.pattern+")";e.push(u),u.repeat&&(c+="(?:"+s+c+")*"),c=u.optional?u.partial?s+"("+c+")?":"(?:"+s+"("+c+"))?":s+"("+c+")",i+=c}}var p=S(n.delimiter||"/"),f=i.slice(-p.length)===p;return r||(i=(f?i.slice(0,-p.length):i)+"(?:"+p+"(?=$))?"),i+=o?"$":r&&f?"":"(?="+p+"|$)",$(new RegExp("^"+i,L(n)),e)}function M(t,e,n){return Jt(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?P(t,e):Jt(t)?q(t,e,n):U(t,e,n)}function V(t,e,n){e=e||{};try{var r=te[t]||(te[t]=Kt.compile(t));return e.pathMatch&&(e[0]=e.pathMatch),r(e,{pretty:!0})}catch(t){return o(!1,"missing param for "+n+": "+t.message),""}finally{delete e[0]}}function B(t,e,n,r){var o=e||[],i=n||Object.create(null),a=r||Object.create(null);t.forEach(function(t){F(o,i,a,t)});for(var u=0,s=o.length;u<s;u++)"*"===o[u]&&(o.push(o.splice(u,1)[0]),s--,u--);return{pathList:o,pathMap:i,nameMap:a}}function F(t,e,n,i,a,u){var s=i.path,c=i.name;r(null!=s,'"path" is required in a route configuration.'),r("string"!=typeof i.component,'route config "component" for path: '+String(s||c)+" cannot be a string id. Use an actual component instead.");var p=i.pathToRegexpOptions||{},f=H(s,a,p.strict);"boolean"==typeof i.caseSensitive&&(p.sensitive=i.caseSensitive);var h={path:f,regex:z(f,p),components:i.components||{default:i.component},instances:{},name:c,parent:a,matchAs:u,redirect:i.redirect,beforeEnter:i.beforeEnter,meta:i.meta||{},props:null==i.props?{}:i.components?i.props:{default:i.props}};if(i.children&&(i.name&&!i.redirect&&i.children.some(function(t){return/^\/?$/.test(t.path)})&&o(!1,"Named Route '"+i.name+"' has a default child route. When navigating to this named route (:to=\"{name: '"+i.name+"'\"), the default child route will not be rendered. Remove the name from this route and use the name of the default child route for named links instead."),i.children.forEach(function(r){var o=u?k(u+"/"+r.path):void 0;F(t,e,n,r,h,o)})),void 0!==i.alias){(Array.isArray(i.alias)?i.alias:[i.alias]).forEach(function(r){var o={path:r,children:i.children};F(t,e,n,o,a,h.path||"/")})}e[h.path]||(t.push(h.path),e[h.path]=h),c&&(n[c]?u||o(!1,'Duplicate named routes definition: { name: "'+c+'", path: "'+h.path+'" }'):n[c]=h)}function z(t,e){var n=Kt(t,[],e),r=Object.create(null);return n.keys.forEach(function(e){o(!r[e.name],'Duplicate param keys in route with path: "'+t+'"'),r[e.name]=!0}),n}function H(t,e,n){return n||(t=t.replace(/\/$/,"")),"/"===t[0]?t:null==e?t:k(e.path+"/"+t)}function D(t,e,n,r){var i="string"==typeof t?{path:t}:t;if(i._normalized)return i;if(i.name)return a({},t);if(!i.path&&i.params&&e){i=a({},i),i._normalized=!0;var u=a(a({},e.params),i.params);if(e.name)i.name=e.name,i.params=u;else if(e.matched.length){var c=e.matched[e.matched.length-1].path;i.path=V(c,u,"path "+e.path)}else o(!1,"relative params navigation requires a current route.");return i}var p=R(i.path||""),f=e&&e.path||"/",h=p.path?_(p.path,f,n||i.append):f,l=s(p.query,i.query,r&&r.options.parseQuery),d=i.hash||p.hash;return d&&"#"!==d.charAt(0)&&(d="#"+d),{_normalized:!0,path:h,query:l,hash:d}}function N(t,e){function n(t){B(t,p,h,l)}function i(t,n,r){var i=D(t,n,!1,e),a=i.name;if(a){var u=l[a];if(o(u,"Route with name '"+a+"' does not exist"),!u)return s(null,i);var c=u.regex.keys.filter(function(t){return!t.optional}).map(function(t){return t.name});if("object"!=typeof i.params&&(i.params={}),n&&"object"==typeof n.params)for(var f in n.params)!(f in i.params)&&c.indexOf(f)>-1&&(i.params[f]=n.params[f]);if(u)return i.path=V(u.path,i.params,'named route "'+a+'"'),s(u,i,r)}else if(i.path){i.params={};for(var d=0;d<p.length;d++){var y=p[d],v=h[y];if(X(v.regex,i.path,i.params))return s(v,i,r)}}return s(null,i)}function a(t,n){var a=t.redirect,u="function"==typeof a?a(f(t,n,null,e)):a;if("string"==typeof u&&(u={path:u}),!u||"object"!=typeof u)return o(!1,"invalid redirect option: "+JSON.stringify(u)),s(null,n);var c=u,p=c.name,h=c.path,d=n.query,y=n.hash,v=n.params;if(d=c.hasOwnProperty("query")?c.query:d,y=c.hasOwnProperty("hash")?c.hash:y,v=c.hasOwnProperty("params")?c.params:v,p){return r(l[p],'redirect failed: named route "'+p+'" not found.'),i({_normalized:!0,name:p,query:d,hash:y,params:v},void 0,n)}if(h){var m=J(h,t);return i({_normalized:!0,path:V(m,v,'redirect route with path "'+m+'"'),query:d,hash:y},void 0,n)}return o(!1,"invalid redirect option: "+JSON.stringify(u)),s(null,n)}function u(t,e,n){var r=V(n,e.params,'aliased route with path "'+n+'"'),o=i({_normalized:!0,path:r});if(o){var a=o.matched,u=a[a.length-1];return e.params=o.params,s(u,e)}return s(null,e)}function s(t,n,r){return t&&t.redirect?a(t,r||n):t&&t.matchAs?u(t,n,t.matchAs):f(t,n,r,e)}var c=B(t),p=c.pathList,h=c.pathMap,l=c.nameMap;return{match:i,addRoutes:n}}function X(t,e,n){var r=e.match(t);if(!r)return!1;if(!n)return!0;for(var o=1,i=r.length;o<i;++o){var a=t.keys[o-1],u="string"==typeof r[o]?decodeURIComponent(r[o]):r[o];a&&(n[a.name||"pathMatch"]=u)}return!0}function J(t,e){return _(t,e.parent?e.parent.path:"/",!0)}function K(){window.history.replaceState({key:it()},"",window.location.href.replace(window.location.origin,"")),window.addEventListener("popstate",function(t){Q(),t.state&&t.state.key&&at(t.state.key)})}function W(t,e,n,o){if(t.app){var i=t.options.scrollBehavior;i&&(r("function"==typeof i,"scrollBehavior must be a function"),t.app.$nextTick(function(){var a=Y(),u=i.call(t,e,n,o?a:null);u&&("function"==typeof u.then?u.then(function(t){rt(t,a)}).catch(function(t){r(!1,t.toString())}):rt(u,a))}))}}function Q(){var t=it();t&&(ee[t]={x:window.pageXOffset,y:window.pageYOffset})}function Y(){var t=it();if(t)return ee[t]}function G(t,e){var n=document.documentElement,r=n.getBoundingClientRect(),o=t.getBoundingClientRect();return{x:o.left-r.left-e.x,y:o.top-r.top-e.y}}function Z(t){return nt(t.x)||nt(t.y)}function tt(t){return{x:nt(t.x)?t.x:window.pageXOffset,y:nt(t.y)?t.y:window.pageYOffset}}function et(t){return{x:nt(t.x)?t.x:0,y:nt(t.y)?t.y:0}}function nt(t){return"number"==typeof t}function rt(t,e){var n="object"==typeof t;if(n&&"string"==typeof t.selector){var r=document.querySelector(t.selector);if(r){var o=t.offset&&"object"==typeof t.offset?t.offset:{};o=et(o),e=G(r,o)}else Z(t)&&(e=tt(t))}else n&&Z(t)&&(e=tt(t));e&&window.scrollTo(e.x,e.y)}function ot(){return re.now().toFixed(3)}function it(){return oe}function at(t){oe=t}function ut(t,e){Q();var n=window.history;try{e?n.replaceState({key:oe},"",t):(oe=ot(),n.pushState({key:oe},"",t))}catch(n){window.location[e?"replace":"assign"](t)}}function st(t){ut(t,!0)}function ct(t,e,n){var r=function(o){o>=t.length?n():t[o]?e(t[o],function(){r(o+1)}):r(o+1)};r(0)}function pt(t){return function(e,n,r){var a=!1,u=0,s=null;ft(t,function(t,e,n,c){if("function"==typeof t&&void 0===t.cid){a=!0,u++;var p,f=dt(function(e){lt(e)&&(e=e.default),t.resolved="function"==typeof e?e:Pt.extend(e),n.components[c]=e,--u<=0&&r()}),h=dt(function(t){var e="Failed to resolve async component "+c+": "+t;o(!1,e),s||(s=i(t)?t:new Error(e),r(s))});try{p=t(f,h)}catch(t){h(t)}if(p)if("function"==typeof p.then)p.then(f,h);else{var l=p.component;l&&"function"==typeof l.then&&l.then(f,h)}}}),a||r()}}function ft(t,e){return ht(t.map(function(t){return Object.keys(t.components).map(function(n){return e(t.components[n],t.instances[n],t,n)})}))}function ht(t){return Array.prototype.concat.apply([],t)}function lt(t){return t.__esModule||ie&&"Module"===t[Symbol.toStringTag]}function dt(t){var e=!1;return function(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];if(!e)return e=!0,t.apply(this,n)}}function yt(t){if(!t)if(Xt){var e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^https?:\/\/[^\/]+/,"")}else t="/";return"/"!==t.charAt(0)&&(t="/"+t),t.replace(/\/$/,"")}function vt(t,e){var n,r=Math.max(t.length,e.length);for(n=0;n<r&&t[n]===e[n];n++);return{updated:e.slice(0,n),activated:e.slice(n),deactivated:t.slice(n)}}function mt(t,e,n,r){var o=ft(t,function(t,r,o,i){var a=gt(t,e);if(a)return Array.isArray(a)?a.map(function(t){return n(t,r,o,i)}):n(a,r,o,i)});return ht(r?o.reverse():o)}function gt(t,e){return"function"!=typeof t&&(t=Pt.extend(t)),t.options[e]}function bt(t){return mt(t,"beforeRouteLeave",xt,!0)}function wt(t){return mt(t,"beforeRouteUpdate",xt)}function xt(t,e){if(e)return function(){return t.apply(e,arguments)}}function _t(t,e,n){return mt(t,"beforeRouteEnter",function(t,r,o,i){return Rt(t,o,i,e,n)})}function Rt(t,e,n,r,o){return function(i,a,u){return t(i,a,function(t){u(t),"function"==typeof t&&r.push(function(){kt(t,e.instances,n,o)})})}}function kt(t,e,n,r){e[n]&&!e[n]._isBeingDestroyed?t(e[n]):r()&&setTimeout(function(){kt(t,e,n,r)},16)}function Et(t){var e=decodeURI(window.location.pathname);return t&&0===e.indexOf(t)&&(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}function Ot(t){var e=Et(t);if(!/^\/#/.test(e))return window.location.replace(k(t+"/#"+e)),!0}function jt(){var t=Ct();return"/"===t.charAt(0)||(Tt("/"+t),!1)}function Ct(){var t=window.location.href,e=t.indexOf("#");if(e<0)return"";t=t.slice(e+1);var n=t.indexOf("?");if(n<0){var r=t.indexOf("#");t=r>-1?decodeURI(t.slice(0,r))+t.slice(r):decodeURI(t)}else n>-1&&(t=decodeURI(t.slice(0,n))+t.slice(n));return t}function At(t){var e=window.location.href,n=e.indexOf("#");return(n>=0?e.slice(0,n):e)+"#"+t}function St(t){ne?ut(At(t)):window.location.hash=t}function Tt(t){ne?st(At(t)):window.location.replace(At(t))}function $t(t,e){return t.push(e),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function Lt(t,e,n){var r="hash"===n?"#"+e:e;return t?k(t+"/"+r):r}Object.defineProperty(e,"__esModule",{value:!0});var Pt,qt={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var n=e.props,r=e.children,o=e.parent,i=e.data;i.routerView=!0;for(var s=o.$createElement,c=n.name,p=o.$route,f=o._routerViewCache||(o._routerViewCache={}),h=0,l=!1;o&&o._routerRoot!==o;){var d=o.$vnode&&o.$vnode.data;d&&(d.routerView&&h++,d.keepAlive&&o._inactive&&(l=!0)),o=o.$parent}if(i.routerViewDepth=h,l)return s(f[c],i,r);var y=p.matched[h];if(!y)return f[c]=null,s();var v=f[c]=y.components[c];i.registerRouteInstance=function(t,e){var n=y.instances[c];(e&&n!==t||!e&&n===t)&&(y.instances[c]=e)},(i.hook||(i.hook={})).prepatch=function(t,e){y.instances[c]=e.componentInstance},i.hook.init=function(t){t.data.keepAlive&&t.componentInstance&&t.componentInstance!==y.instances[c]&&(y.instances[c]=t.componentInstance)};var m=i.props=u(p,y.props&&y.props[c]);if(m){m=i.props=a({},m);var g=i.attrs=i.attrs||{};for(var b in m)v.props&&b in v.props||(g[b]=m[b],delete m[b])}return s(v,i,r)}},Ut=/[!'()*]/g,It=function(t){return"%"+t.charCodeAt(0).toString(16)},Mt=/%2C/g,Vt=function(t){return encodeURIComponent(t).replace(Ut,It).replace(Mt,",")},Bt=decodeURIComponent,Ft=/\/?$/,zt=f(null,{path:"/"}),Ht=[String,Object],Dt=[String,Array],Nt={name:"RouterLink",props:{to:{type:Ht,required:!0},tag:{type:String,default:"a"},exact:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,event:{type:Dt,default:"click"}},render:function(t){var e=this,n=this.$router,r=this.$route,o=n.resolve(this.to,r,this.append),i=o.location,u=o.route,s=o.href,c={},p=n.options.linkActiveClass,h=n.options.linkExactActiveClass,l=null==p?"router-link-active":p,d=null==h?"router-link-exact-active":h,v=null==this.activeClass?l:this.activeClass,g=null==this.exactActiveClass?d:this.exactActiveClass,x=i.path?f(null,i,null,n):u;c[g]=y(r,x),c[v]=this.exact?c[g]:m(r,x);var _=function(t){b(t)&&(e.replace?n.replace(i):n.push(i))},R={click:b};Array.isArray(this.event)?this.event.forEach(function(t){R[t]=_}):R[this.event]=_;var k={class:c};if("a"===this.tag)k.on=R,k.attrs={href:s};else{var E=w(this.$slots.default);if(E){E.isStatic=!1;(E.data=a({},E.data)).on=R;(E.data.attrs=a({},E.data.attrs)).href=s}else k.on=R}return t(this.tag,k,this.$slots.default)}},Xt="undefined"!=typeof window,Jt=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},Kt=M,Wt=E,Qt=O,Yt=A,Gt=I,Zt=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");Kt.parse=Wt,Kt.compile=Qt,Kt.tokensToFunction=Yt,Kt.tokensToRegExp=Gt;var te=Object.create(null),ee=Object.create(null),ne=Xt&&function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"pushState"in window.history)}(),re=Xt&&window.performance&&window.performance.now?window.performance:Date,oe=ot(),ie="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,ae=function(t,e){this.router=t,this.base=yt(e),this.current=zt,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[]};ae.prototype.listen=function(t){this.cb=t},ae.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},ae.prototype.onError=function(t){this.errorCbs.push(t)},ae.prototype.transitionTo=function(t,e,n){var r=this,o=this.router.match(t,this.current);this.confirmTransition(o,function(){r.updateRoute(o),e&&e(o),r.ensureURL(),r.ready||(r.ready=!0,r.readyCbs.forEach(function(t){t(o)}))},function(t){n&&n(t),t&&!r.ready&&(r.ready=!0,r.readyErrorCbs.forEach(function(e){e(t)}))})},ae.prototype.confirmTransition=function(t,e,n){var r=this,a=this.current,u=function(t){i(t)&&(r.errorCbs.length?r.errorCbs.forEach(function(e){e(t)}):o(!1,"uncaught error during route navigation:")),n&&n(t)};if(y(t,a)&&t.matched.length===a.matched.length)return this.ensureURL(),u();var s=vt(this.current.matched,t.matched),c=s.updated,p=s.deactivated,f=s.activated,h=[].concat(bt(p),this.router.beforeHooks,wt(c),f.map(function(t){return t.beforeEnter}),pt(f));this.pending=t;var l=function(e,n){if(r.pending!==t)return u();try{e(t,a,function(t){!1===t||i(t)?(r.ensureURL(!0),u(t)):"string"==typeof t||"object"==typeof t&&("string"==typeof t.path||"string"==typeof t.name)?(u(),"object"==typeof t&&t.replace?r.replace(t):r.push(t)):n(t)})}catch(t){u(t)}};ct(h,l,function(){var n=[];ct(_t(f,n,function(){return r.current===t}).concat(r.router.resolveHooks),l,function(){if(r.pending!==t)return u();r.pending=null,e(t),r.router.app&&r.router.app.$nextTick(function(){n.forEach(function(t){t()})})})})},ae.prototype.updateRoute=function(t){var e=this.current;this.current=t,this.cb&&this.cb(t),this.router.afterHooks.forEach(function(n){n&&n(t,e)})};var ue=function(t){function e(e,n){var r=this;t.call(this,e,n);var o=e.options.scrollBehavior,i=ne&&o;i&&K();var a=Et(this.base);window.addEventListener("popstate",function(t){var n=r.current,o=Et(r.base);r.current===zt&&o===a||r.transitionTo(o,function(t){i&&W(e,t,n,!0)})})}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,n){var r=this,o=this,i=o.current;this.transitionTo(t,function(t){ut(k(r.base+t.fullPath)),W(r.router,t,i,!1),e&&e(t)},n)},e.prototype.replace=function(t,e,n){var r=this,o=this,i=o.current;this.transitionTo(t,function(t){st(k(r.base+t.fullPath)),W(r.router,t,i,!1),e&&e(t)},n)},e.prototype.ensureURL=function(t){if(Et(this.base)!==this.current.fullPath){var e=k(this.base+this.current.fullPath);t?ut(e):st(e)}},e.prototype.getCurrentLocation=function(){return Et(this.base)},e}(ae),se=function(t){function e(e,n,r){t.call(this,e,n),r&&Ot(this.base)||jt()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this,e=this.router,n=e.options.scrollBehavior,r=ne&&n;r&&K(),window.addEventListener(ne?"popstate":"hashchange",function(){var e=t.current;jt()&&t.transitionTo(Ct(),function(n){r&&W(t.router,n,e,!0),ne||Tt(n.fullPath)})})},e.prototype.push=function(t,e,n){var r=this,o=this,i=o.current;this.transitionTo(t,function(t){St(t.fullPath),W(r.router,t,i,!1),e&&e(t)},n)},e.prototype.replace=function(t,e,n){var r=this,o=this,i=o.current;this.transitionTo(t,function(t){Tt(t.fullPath),W(r.router,t,i,!1),e&&e(t)},n)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;Ct()!==e&&(t?St(e):Tt(e))},e.prototype.getCurrentLocation=function(){return Ct()},e}(ae),ce=function(t){function e(e,n){t.call(this,e,n),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,n){var r=this;this.transitionTo(t,function(t){r.stack=r.stack.slice(0,r.index+1).concat(t),r.index++,e&&e(t)},n)},e.prototype.replace=function(t,e,n){var r=this;this.transitionTo(t,function(t){r.stack=r.stack.slice(0,r.index).concat(t),e&&e(t)},n)},e.prototype.go=function(t){var e=this,n=this.index+t;if(!(n<0||n>=this.stack.length)){var r=this.stack[n];this.confirmTransition(r,function(){e.index=n,e.updateRoute(r)})}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(ae),pe=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=N(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!ne&&!1!==t.fallback,this.fallback&&(e="hash"),Xt||(e="abstract"),this.mode=e,e){case"history":this.history=new ue(this,t.base);break;case"hash":this.history=new se(this,t.base,this.fallback);break;case"abstract":this.history=new ce(this,t.base);break;default:r(!1,"invalid mode: "+e)}},fe={currentRoute:{configurable:!0}};pe.prototype.match=function(t,e,n){return this.matcher.match(t,e,n)},fe.currentRoute.get=function(){return this.history&&this.history.current},pe.prototype.init=function(t){var e=this;if(r(x.installed,"not installed. Make sure to call `Vue.use(VueRouter)` before creating root instance."),this.apps.push(t),t.$once("hook:destroyed",function(){var n=e.apps.indexOf(t);n>-1&&e.apps.splice(n,1),e.app===t&&(e.app=e.apps[0]||null)}),!this.app){this.app=t;var n=this.history;if(n instanceof ue)n.transitionTo(n.getCurrentLocation());else if(n instanceof se){var o=function(){n.setupListeners()};n.transitionTo(n.getCurrentLocation(),o,o)}n.listen(function(t){e.apps.forEach(function(e){e._route=t})})}},pe.prototype.beforeEach=function(t){return $t(this.beforeHooks,t)},pe.prototype.beforeResolve=function(t){return $t(this.resolveHooks,t)},pe.prototype.afterEach=function(t){return $t(this.afterHooks,t)},pe.prototype.onReady=function(t,e){this.history.onReady(t,e)},pe.prototype.onError=function(t){this.history.onError(t)},pe.prototype.push=function(t,e,n){this.history.push(t,e,n)},pe.prototype.replace=function(t,e,n){this.history.replace(t,e,n)},pe.prototype.go=function(t){this.history.go(t)},pe.prototype.back=function(){this.go(-1)},pe.prototype.forward=function(){this.go(1)},pe.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map(function(t){return Object.keys(t.components).map(function(e){return t.components[e]})})):[]},pe.prototype.resolve=function(t,e,n){e=e||this.history.current;var r=D(t,e,n,this),o=this.match(r,e),i=o.redirectedFrom||o.fullPath;return{location:r,route:o,href:Lt(this.history.base,i,this.mode),normalizedTo:r,resolved:o}},pe.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==zt&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(pe.prototype,fe),pe.install=x,pe.version="3.0.6",Xt&&window.Vue&&window.Vue.use(pe),e.default=pe},function(t,e,n){var r,o,i=[],a=n(4);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(o=r=r.default),"function"==typeof o&&(o=o.options),o.render=a.render,o.staticRenderFns=a.staticRenderFns,o.style=o.style||{},i.forEach(function(t){for(var e in t)o.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,i),t.exports=r},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("text",{staticClass:["message"]},[t._v("Now, let's use Vue.js to build your Weex app.")])},staticRenderFns:[]}},function(t,e,n){var r,o,i=[];i.push(n(6)),r=n(7);var a=n(8);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(o=r=r.default),"function"==typeof o&&(o=o.options),o.render=a.render,o.staticRenderFns=a.staticRenderFns,o._scopeId="data-v-2964abc9",o.style=o.style||{},i.forEach(function(t){for(var e in t)o.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,i),t.exports=r},function(t,e){t.exports={wrapper:{justifyContent:"center",alignItems:"center"},logo:{width:"424",height:"200"},greeting:{textAlign:"center",marginTop:"70",fontSize:"50",color:"#41B883"},message:{marginTop:"30",marginRight:"30",marginBottom:"30",marginLeft:"30",fontSize:"32",color:"#727272"}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"App",data:function(){return{logo:"https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png"}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:["wrapper"]},[n("image",{staticClass:["logo"],attrs:{src:t.logo}}),n("text",{staticClass:["greeting"]},[t._v("hello page 1")]),n("router-view")],1)},staticRenderFns:[]}}]);