(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"A2+M":function(t,e,n){var r=n("X8hv");t.exports={MDXRenderer:r}},A4YE:function(t,e,n){"use strict";n("f3/d");var r=n("q1tI"),o=n.n(r),c=n("txSG"),a=n("Wbzz"),u=n("TUDN"),i=n("KcFz");e.a=function(t){var e=t.tags,n=Object(u.a)(),r=n.tagsPath,f=n.basePath;return o.a.createElement(o.a.Fragment,null,e.map((function(t,e){return o.a.createElement(o.a.Fragment,{key:t.slug},!!e&&", ",o.a.createElement(c.c.a,{as:a.Link,to:Object(i.a)("/"+f+"/"+r+"/"+t.slug)},t.name))})))}},I5cv:function(t,e,n){var r=n("XKFU"),o=n("Kuth"),c=n("2OiF"),a=n("y3w9"),u=n("0/R4"),i=n("eeVq"),f=n("8MEG"),p=(n("dyZX").Reflect||{}).construct,l=i((function(){function t(){}return!(p((function(){}),[],t)instanceof t)})),s=!i((function(){p((function(){}))}));r(r.S+r.F*(l||s),"Reflect",{construct:function(t,e){c(t),a(e);var n=arguments.length<3?t:c(arguments[2]);if(s&&!l)return p(t,e,n);if(t==n){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var r=[null];return r.push.apply(r,e),new(f.apply(t,r))}var i=n.prototype,b=o(u(i)?i:Object.prototype),y=Function.apply.call(t,b,e);return u(y)?y:b}})},X8hv:function(t,e,n){function r(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function o(t,e,n){return(o=r()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&c(o,n.prototype),o}).apply(null,arguments)}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){f(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n("jm62"),n("yt8O"),n("RW0V"),n("XfO3"),n("HEwt"),n("rE2o"),n("ioFf"),n("rGqo"),n("/SS/"),n("a1Th"),n("Btvt"),n("I5cv"),n("I5cv"),n("/SS/"),n("XfO3"),n("HEwt"),n("a1Th"),n("rE2o"),n("jm62"),n("ioFf"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V");var p=n("q1tI"),l=n("7ljp"),s=l.useMDXComponents,b=l.mdx,y=n("BfwJ").useMDXScope;t.exports=function(t){var e=t.scope,n=t.components,r=t.children,c=function(t,e){if(null==t)return{};var n,r,o={},c=Object.keys(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,["scope","components","children"]),u=s(n),f=y(e),l=p.useMemo((function(){if(!r)return null;var t=i({React:p,mdx:b},f),e=Object.keys(t),n=e.map((function(e){return t[e]}));return o(Function,["_fn"].concat(a(e),[""+r])).apply(void 0,[{}].concat(a(n)))}),[r,e]);return p.createElement(l,i({components:u},c))}},xdpm:function(t,e,n){"use strict";n.r(e);n("jm62"),n("ioFf"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V");var r=n("q1tI"),o=n.n(r),c=(n("f3/d"),n("KKXr"),n("txSG")),a=n("izhR"),u=n("A2+M"),i=n("9Dj+"),f=n("A4YE"),p=n("H8eV"),l=n("Z/Dh"),s=n.n(l),b=["32px","16px","8px","4px"].map((function(t){return"rgba(0, 0, 0, 0.15) 0px "+t+" "+t+" 0px"})),y=function(t){var e=t.data.post,n=s()({title:e.title,tagline:e.tags.map((function(t){return"#"+t.name.split(" ").join("")})).join(" "),cloudName:"rafaeldavish",imagePublicID:"Frame_4_3x_kutirc.png",titlefont:"futura",titleExtraConfig:"_bold",textColor:"232129"});return Object(c.f)(i.a,null,Object(c.f)(p.a,{title:e.title,description:e.tags.map((function(t){return"#"+t.name.split(" ").join("")})).join(" "),image:n}),Object(c.f)(a.c,{variant:"h2",as:"h2"},e.title),Object(c.f)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},Object(c.f)("time",null,e.date),e.tags&&Object(c.f)(o.a.Fragment,null," — ",Object(c.f)(f.a,{tags:e.tags}))," — ",Object(c.f)("span",null,e.timeToRead," min read")),Object(c.f)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],boxShadow:b.join(", ")}}},Object(c.f)(u.MDXRenderer,null,e.body)))};function O(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function j(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?O(Object(n),!0).forEach((function(e){m(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"query",(function(){return g}));e.default=function(t){var e=t.data,n=e.post;return o.a.createElement(y,{data:j({},e,{post:n})})};var g="1197585309"}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-3b74fd3ead229a4ef4d7.js.map