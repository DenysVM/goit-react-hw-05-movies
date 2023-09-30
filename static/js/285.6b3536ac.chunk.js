"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[285],{285:function(e,r,n){n.r(r),n.d(r,{default:function(){return d}});var t=n(791),c=n(861),a=n(439),o=n(757),s=n.n(o),i=n(689),u=n(52),f="Movies_movies-container__to7-K",h="Movies_search-container__sHzTq",p="Movies_search-button__US8Mp",v=n(429),l=n(184);var x=function(){var e=(0,i.TH)(),r=(0,i.s0)(),n=(0,t.useState)(""),o=(0,a.Z)(n,2),x=o[0],d=o[1],w=(0,t.useState)([]),m=(0,a.Z)(w,2),k=m[0],y=m[1],_=(0,t.useState)(!1),b=(0,a.Z)(_,2),j=b[0],g=b[1];(0,t.useEffect)((function(){var r=new URLSearchParams(e.search).get("query")||"";d(r),r&&Z(r)}),[e.search]);var E=function(){x?(g(!1),S(x)):g(!0)},Z=function(){var e=(0,c.Z)(s().mark((function e(r){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.z1)(r);case 3:n=e.sent,y(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error searching movies:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),S=function(e){r("?query=".concat(e))};return(0,l.jsxs)("div",{className:f,children:[(0,l.jsx)("h1",{children:"Search Movies"}),(0,l.jsxs)("div",{className:h,children:[(0,l.jsx)("input",{type:"text",value:x,onChange:function(e){return d(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&E()},placeholder:"Search for movies"}),(0,l.jsx)("button",{className:p,onClick:E,children:"Search"})]}),j&&(0,l.jsx)("p",{children:"Please enter a search query"}),(0,l.jsx)(v.Z,{movies:k})]})};var d=function(){return(0,l.jsx)("div",{children:(0,l.jsx)(x,{})})}},429:function(e,r,n){n(791);var t=n(87),c=n(184);r.Z=function(e){var r=e.movies;return(0,c.jsx)("ul",{children:r.map((function(e){return(0,c.jsx)("li",{children:(0,c.jsx)(t.rU,{to:"/movies/".concat(e.id),children:e.title})},e.id)}))})}},52:function(e,r,n){n.d(r,{TP:function(){return p},tx:function(){return d},wr:function(){return i},z1:function(){return f},zv:function(){return l}});var t=n(861),c=n(757),a=n.n(c),o="67a6af9ae04fc7f0bc30333e65dc36b5",s="https://api.themoviedb.org/3";function i(){return u.apply(this,arguments)}function u(){return(u=(0,t.Z)(a().mark((function e(){var r,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"/trending/movie/week?api_key=").concat(o));case 2:if((r=e.sent).ok){e.next=5;break}throw new Error("Error fetching trending movies");case 5:return e.next=7,r.json();case 7:return n=e.sent,e.abrupt("return",n.results);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return h.apply(this,arguments)}function h(){return(h=(0,t.Z)(a().mark((function e(r){var n,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"/search/movie?api_key=").concat(o,"&query=").concat(r));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("Error searching movies");case 5:return e.next=7,n.json();case 7:return t=e.sent,e.abrupt("return",t.results);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return v.apply(this,arguments)}function v(){return(v=(0,t.Z)(a().mark((function e(r){var n,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"/movie/").concat(r,"?api_key=").concat(o));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("Error fetching movie details");case 5:return e.next=7,n.json();case 7:return t=e.sent,e.abrupt("return",t);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return x.apply(this,arguments)}function x(){return(x=(0,t.Z)(a().mark((function e(r){var n,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"/movie/").concat(r,"/credits?api_key=").concat(o));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("Error fetching movie credits");case 5:return e.next=7,n.json();case 7:return t=e.sent,e.abrupt("return",t);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return w.apply(this,arguments)}function w(){return(w=(0,t.Z)(a().mark((function e(r){var n,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"/movie/").concat(r,"/reviews?api_key=").concat(o));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("Error fetching movie reviews");case 5:return e.next=7,n.json();case 7:return t=e.sent,e.abrupt("return",t.results);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},861:function(e,r,n){function t(e,r,n,t,c,a,o){try{var s=e[a](o),i=s.value}catch(u){return void n(u)}s.done?r(i):Promise.resolve(i).then(t,c)}function c(e){return function(){var r=this,n=arguments;return new Promise((function(c,a){var o=e.apply(r,n);function s(e){t(o,c,a,s,i,"next",e)}function i(e){t(o,c,a,s,i,"throw",e)}s(void 0)}))}}n.d(r,{Z:function(){return c}})}}]);
//# sourceMappingURL=285.6b3536ac.chunk.js.map