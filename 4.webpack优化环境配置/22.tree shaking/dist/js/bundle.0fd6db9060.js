!function(){var t={3819:function(t){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},1176:function(t,n,r){var e=r(5052);t.exports=function(t){if(!e(t))throw TypeError(String(t)+" is not an object");return t}},9540:function(t,n,r){var e=r(905),o=r(4237),i=r(3231),u=function(t){return function(n,r,u){var c,f=e(n),a=o(f.length),s=i(u,a);if(t&&r!=r){for(;a>s;)if((c=f[s++])!=c)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===r)return t||s||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},6038:function(t,n,r){"use strict";var e=r(4229);t.exports=function(t,n){var r=[][t];return!!r&&e((function(){r.call(null,n||function(){throw 1},1)}))}},3037:function(t,n,r){var e=r(7400),o=r(4229),i=r(816),u=Object.defineProperty,c={},f=function(t){throw t};t.exports=function(t,n){if(i(c,t))return c[t];n||(n={});var r=[][t],a=!!i(n,"ACCESSORS")&&n.ACCESSORS,s=i(n,0)?n[0]:f,p=i(n,1)?n[1]:void 0;return c[t]=!!r&&!o((function(){if(a&&!e)return!0;var t={length:-1};a?u(t,1,{enumerable:!0,get:f}):t[1]=1,r.call(t,s,p)}))}},3143:function(t,n,r){var e=r(3819),o=r(2991),i=r(9337),u=r(4237),c=function(t){return function(n,r,c,f){e(r);var a=o(n),s=i(a),p=u(a.length),l=t?p-1:0,v=t?-1:1;if(c<2)for(;;){if(l in s){f=s[l],l+=v;break}if(l+=v,t?l<0:p<=l)throw TypeError("Reduce of empty array with no initial value")}for(;t?l>=0:p>l;l+=v)l in s&&(f=r(f,s[l],l,a));return f}};t.exports={left:c(!1),right:c(!0)}},7079:function(t){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},7081:function(t,n,r){var e=r(816),o=r(4826),i=r(7933),u=r(1787);t.exports=function(t,n){for(var r=o(n),c=u.f,f=i.f,a=0;a<r.length;a++){var s=r[a];e(t,s)||c(t,s,f(n,s))}}},5762:function(t,n,r){var e=r(7400),o=r(1787),i=r(5358);t.exports=e?function(t,n,r){return o.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},5358:function(t){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},7400:function(t,n,r){var e=r(4229);t.exports=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},2635:function(t,n,r){var e=r(9859),o=r(5052),i=e.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},3837:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},3103:function(t,n,r){var e=r(9859),o=r(7933).f,i=r(5762),u=r(7487),c=r(2079),f=r(7081),a=r(6541);t.exports=function(t,n){var r,s,p,l,v,y=t.target,h=t.global,g=t.stat;if(r=h?e:g?e[y]||c(y,{}):(e[y]||{}).prototype)for(s in n){if(l=n[s],p=t.noTargetGet?(v=o(r,s))&&v.value:r[s],!a(h?s:y+(g?".":"#")+s,t.forced)&&void 0!==p){if(typeof l==typeof p)continue;f(l,p)}(t.sham||p&&p.sham)&&i(l,"sham",!0),u(r,s,l,t)}}},4229:function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},1333:function(t,n,r){var e=r(9276),o=r(9859),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(e[t])||i(o[t]):e[t]&&e[t][n]||o[t]&&o[t][n]}},9859:function(t,n,r){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof r.g&&r.g)||Function("return this")()},816:function(t){var n={}.hasOwnProperty;t.exports=function(t,r){return n.call(t,r)}},5977:function(t){t.exports={}},4394:function(t,n,r){var e=r(7400),o=r(4229),i=r(2635);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},9337:function(t,n,r){var e=r(4229),o=r(7079),i="".split;t.exports=e((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},8511:function(t,n,r){var e=r(5353),o=Function.toString;"function"!=typeof e.inspectSource&&(e.inspectSource=function(t){return o.call(t)}),t.exports=e.inspectSource},6407:function(t,n,r){var e,o,i,u=r(8694),c=r(9859),f=r(5052),a=r(5762),s=r(816),p=r(4399),l=r(5977),v=c.WeakMap;if(u){var y=new v,h=y.get,g=y.has,x=y.set;e=function(t,n){return x.call(y,t,n),n},o=function(t){return h.call(y,t)||{}},i=function(t){return g.call(y,t)}}else{var b=p("state");l[b]=!0,e=function(t,n){return a(t,b,n),n},o=function(t){return s(t,b)?t[b]:{}},i=function(t){return s(t,b)}}t.exports={set:e,get:o,has:i,enforce:function(t){return i(t)?o(t):e(t,{})},getterFor:function(t){return function(n){var r;if(!f(n)||(r=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},6541:function(t,n,r){var e=r(4229),o=/#|\.prototype\./,i=function(t,n){var r=c[u(t)];return r==a||r!=f&&("function"==typeof n?e(n):!!n)},u=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},f=i.NATIVE="N",a=i.POLYFILL="P";t.exports=i},5052:function(t){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},4231:function(t){t.exports=!1},8694:function(t,n,r){var e=r(9859),o=r(8511),i=e.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},1787:function(t,n,r){var e=r(7400),o=r(4394),i=r(1176),u=r(2066),c=Object.defineProperty;n.f=e?c:function(t,n,r){if(i(t),n=u(n,!0),i(r),o)try{return c(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},7933:function(t,n,r){var e=r(7400),o=r(9195),i=r(5358),u=r(905),c=r(2066),f=r(816),a=r(4394),s=Object.getOwnPropertyDescriptor;n.f=e?s:function(t,n){if(t=u(t),n=c(n,!0),a)try{return s(t,n)}catch(t){}if(f(t,n))return i(!o.f.call(t,n),t[n])}},8151:function(t,n,r){var e=r(140),o=r(3837).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},894:function(t,n){n.f=Object.getOwnPropertySymbols},140:function(t,n,r){var e=r(816),o=r(905),i=r(9540).indexOf,u=r(5977);t.exports=function(t,n){var r,c=o(t),f=0,a=[];for(r in c)!e(u,r)&&e(c,r)&&a.push(r);for(;n.length>f;)e(c,r=n[f++])&&(~i(a,r)||a.push(r));return a}},9195:function(t,n){"use strict";var r={}.propertyIsEnumerable,e=Object.getOwnPropertyDescriptor,o=e&&!r.call({1:2},1);n.f=o?function(t){var n=e(this,t);return!!n&&n.enumerable}:r},4826:function(t,n,r){var e=r(1333),o=r(8151),i=r(894),u=r(1176);t.exports=e("Reflect","ownKeys")||function(t){var n=o.f(u(t)),r=i.f;return r?n.concat(r(t)):n}},9276:function(t,n,r){var e=r(9859);t.exports=e},7487:function(t,n,r){var e=r(9859),o=r(5762),i=r(816),u=r(2079),c=r(8511),f=r(6407),a=f.get,s=f.enforce,p=String(String).split("String");(t.exports=function(t,n,r,c){var f=!!c&&!!c.unsafe,a=!!c&&!!c.enumerable,l=!!c&&!!c.noTargetGet;"function"==typeof r&&("string"!=typeof n||i(r,"name")||o(r,"name",n),s(r).source=p.join("string"==typeof n?n:"")),t!==e?(f?!l&&t[n]&&(a=!0):delete t[n],a?t[n]=r:o(t,n,r)):a?t[n]=r:u(n,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&a(this).source||c(this)}))},8885:function(t){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},2079:function(t,n,r){var e=r(9859),o=r(5762);t.exports=function(t,n){try{o(e,t,n)}catch(r){e[t]=n}return n}},4399:function(t,n,r){var e=r(3036),o=r(1441),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5353:function(t,n,r){var e=r(9859),o=r(2079),i="__core-js_shared__",u=e[i]||o(i,{});t.exports=u},3036:function(t,n,r){var e=r(4231),o=r(5353);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.6.4",mode:e?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},3231:function(t,n,r){var e=r(6051),o=Math.max,i=Math.min;t.exports=function(t,n){var r=e(t);return r<0?o(r+n,0):i(r,n)}},905:function(t,n,r){var e=r(9337),o=r(8885);t.exports=function(t){return e(o(t))}},6051:function(t){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},4237:function(t,n,r){var e=r(6051),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},2991:function(t,n,r){var e=r(8885);t.exports=function(t){return Object(e(t))}},2066:function(t,n,r){var e=r(5052);t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},1441:function(t){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},3108:function(t,n,r){"use strict";var e=r(3103),o=r(3143).left,i=r(6038),u=r(3037),c=i("reduce"),f=u("reduce",{1:0});e({target:"Array",proto:!0,forced:!c||!f},{reduce:function(t){return o(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,r),i.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),function(){"use strict";r(3108);console.log(2*3),console.log(function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return n.reduce((function(t,n){return t+n}),0)}(1,2,3,4))}(),function(){"use strict"}()}();
//# sourceMappingURL=bundle.0fd6db9060.js.map