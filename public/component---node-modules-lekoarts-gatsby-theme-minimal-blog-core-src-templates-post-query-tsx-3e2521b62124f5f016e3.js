(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"A2+M":function(t,e,r){var n=r("X8hv");t.exports={MDXRenderer:n}},I5cv:function(t,e,r){var n=r("XKFU"),o=r("Kuth"),c=r("2OiF"),i=r("y3w9"),u=r("0/R4"),a=r("eeVq"),f=r("8MEG"),p=(r("dyZX").Reflect||{}).construct,l=a((function(){function t(){}return!(p((function(){}),[],t)instanceof t)})),s=!a((function(){p((function(){}))}));n(n.S+n.F*(l||s),"Reflect",{construct:function(t,e){c(t),i(e);var r=arguments.length<3?t:c(arguments[2]);if(s&&!l)return p(t,e,r);if(t==r){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var n=[null];return n.push.apply(n,e),new(f.apply(t,n))}var a=r.prototype,b=o(u(a)?a:Object.prototype),y=Function.apply.call(t,b,e);return u(y)?y:b}})},X8hv:function(t,e,r){function n(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function o(t,e,r){return(o=n()?Reflect.construct:function(t,e,r){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(t,n));return r&&c(o,r.prototype),o}).apply(null,arguments)}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){f(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function f(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r("jm62"),r("yt8O"),r("RW0V"),r("XfO3"),r("HEwt"),r("rE2o"),r("ioFf"),r("rGqo"),r("/SS/"),r("a1Th"),r("Btvt"),r("I5cv"),r("I5cv"),r("/SS/"),r("XfO3"),r("HEwt"),r("a1Th"),r("rE2o"),r("jm62"),r("ioFf"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V");var p=r("q1tI"),l=r("7ljp"),s=l.useMDXComponents,b=l.mdx,y=r("BfwJ").useMDXScope;t.exports=function(t){var e=t.scope,r=t.components,n=t.children,c=function(t,e){if(null==t)return{};var r,n,o={},c=Object.keys(t);for(n=0;n<c.length;n++)r=c[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,["scope","components","children"]),u=s(r),f=y(e),l=p.useMemo((function(){if(!n)return null;var t=a({React:p,mdx:b},f),e=Object.keys(t),r=e.map((function(e){return t[e]}));return o(Function,["_fn"].concat(i(e),[""+n])).apply(void 0,[{}].concat(i(r)))}),[n,e]);return p.createElement(l,a({components:u},c))}},xdpm:function(t,e,r){"use strict";r.r(e);r("jm62"),r("ioFf"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V");var n=r("q1tI"),o=r.n(n),c=r("txSG"),i=r("izhR"),u=r("A2+M"),a=r("9Dj+"),f=r("A4YE"),p=r("H8eV"),l=["32px","16px","8px","4px"].map((function(t){return"rgba(0, 0, 0, 0.15) 0px "+t+" "+t+" 0px"})),s=function(t){var e=t.data.post;return Object(c.f)(a.a,null,Object(c.f)(p.a,{title:e.title,description:e.description?e.description:e.excerpt,image:e.banner?e.banner.childImageSharp.resize.src:void 0}),Object(c.f)(i.c,{variant:"h2",as:"h2"},e.title),Object(c.f)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},Object(c.f)("time",null,e.date),e.tags&&Object(c.f)(o.a.Fragment,null," — ",Object(c.f)(f.a,{tags:e.tags}))," — ",Object(c.f)("span",null,e.timeToRead," min read")),Object(c.f)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],boxShadow:l.join(", ")}}},Object(c.f)(u.MDXRenderer,null,e.body)))};function b(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function y(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?b(Object(r),!0).forEach((function(e){O(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function O(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,"query",(function(){return j}));e.default=function(t){var e=t.data,r=e.post;return o.a.createElement(s,{data:y({},e,{post:r})})};var j="3014633831"}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-3e2521b62124f5f016e3.js.map