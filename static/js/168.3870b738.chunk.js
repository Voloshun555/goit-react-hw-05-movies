"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[168],{6089:function(e,t,n){n.d(t,{Bt:function(){return _},Y5:function(){return d},d5:function(){return v},rQ:function(){return o},zk:function(){return f}});var r=n(5861),a=n(4687),c=n.n(a),i=n(1243),s="ab2cf7e1a236e63f2cc161486f07b55f",u="https://api.themoviedb.org/3";function o(){return p.apply(this,arguments)}function p(){return p=(0,r.Z)(c().mark((function e(){var t,n,r=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:1,e.next=3,i.Z.get("".concat(u,"/trending/movie/day?api_key=").concat(s,"&language=en-US&page=").concat(t));case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}function f(e){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(u,"/search/movie?api_key=").concat(s,"&query=").concat(t,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(u,"/movie/").concat(t,"?api_key=").concat(s));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(u,"/movie/").concat(t,"/credits?api_key=").concat(s));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(u,"/movie/").concat(t,"/reviews?api_key=").concat(s));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},2639:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(8966),a="Loader_Loader__wqo9C",c=n(184),i=function(){return(0,c.jsx)("div",{className:a,children:(0,c.jsx)(r.CJ,{height:"80",width:"80",color:"#4fa94d",ariaLabel:"triangle-loading",wrapperStyle:{position:"absolute",top:"50%",left:" 50%",transform:"translate(-50%, -50%)"},wrapperClassName:"",visible:!0})})}},2168:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(5861),a=n(9439),c=n(4687),i=n.n(c),s=n(6089),u=n(2791),o=n(7689),p="Reviews_contReviews__Vl4Gh",f="Reviews_listReviews__wxEg6",l="Reviews_titleReviews__+4n7D",d=n(2639),h=n(184);var v=function(){var e=(0,o.UO)().movieId,t=(0,u.useState)([]),n=(0,a.Z)(t,2),c=n[0],v=n[1],w=(0,u.useState)("idle"),_=(0,a.Z)(w,2),g=_[0],m=_[1];function x(){return x=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m("pending"),e.next=4,(0,s.Bt)(t);case 4:n=e.sent,v(n.results),m("resolved"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),m("rejected");case 12:case"end":return e.stop()}}),e,null,[[0,9]])}))),x.apply(this,arguments)}return(0,u.useEffect)((function(){!function(e){x.apply(this,arguments)}(e)}),[e]),(0,h.jsxs)("div",{className:p,children:["resolved"===g&&(0,h.jsx)("ul",{className:f,children:c.length>0?c.map((function(e){var t=e.author,n=e.content,r=e.id;return(0,h.jsxs)("li",{children:[(0,h.jsx)("h3",{className:l,children:t}),(0,h.jsx)("p",{children:n})]},r)})):"Sorry, we don't have any review for this movie"}),"pending"===g&&(0,h.jsx)(d.Z,{}),"rejected"===g&&(0,h.jsx)("h2",{children:"Sorry, we can't find this page"})]})}}}]);
//# sourceMappingURL=168.3870b738.chunk.js.map