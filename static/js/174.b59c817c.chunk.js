(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[174],{6089:function(e,t,n){"use strict";n.d(t,{Bt:function(){return d},Y5:function(){return m},d5:function(){return h},rQ:function(){return u},zk:function(){return p}});var r=n(5861),a=n(4687),i=n.n(a),o=n(1243),c="ab2cf7e1a236e63f2cc161486f07b55f",s="https://api.themoviedb.org/3";function u(){return l.apply(this,arguments)}function l(){return l=(0,r.Z)(i().mark((function e(){var t,n,r=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:1,e.next=3,o.Z.get("".concat(s,"/trending/movie/day?api_key=").concat(c,"&language=en-US&page=").concat(t));case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(s,"/search/movie?api_key=").concat(c,"&query=").concat(t,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(s,"/movie/").concat(t,"?api_key=").concat(c));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return _.apply(this,arguments)}function _(){return(_=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(s,"/movie/").concat(t,"/credits?api_key=").concat(c));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(s,"/movie/").concat(t,"/reviews?api_key=").concat(c));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},5658:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(7689),a=n(1087),i="movieList_movieList__vnqzm",o="movieList_movieListComponent__bWYIR",c="movieList_link__I+0hB",s=n(2007),u=n.n(s),l=n(184);function p(e){var t=e.movie,n=(0,r.TH)();return(0,l.jsx)("div",{children:(0,l.jsx)("ul",{className:i,children:t.map((function(e){var t=e.id,r=e.original_title;return(0,l.jsx)("li",{className:o,children:(0,l.jsx)(a.rU,{className:c,to:"/movies/".concat(t),state:{from:n},children:r},t)},t)}))})})}p.propTypers={movie:u().arrayOf(u().shape({id:u().number.isRequired,original_title:u().string.isRequired}).isRequired).isRequired};var f=p},4174:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return k}});var r=n(5861),a=n(9439),i=n(4687),o=n.n(i),c=n(2791),s={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},u=c.createContext&&c.createContext(s),l=function(){return l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},l.apply(this,arguments)},p=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function f(e){return e&&e.map((function(e,t){return c.createElement(e.tag,l({key:t},e.attr),f(e.child))}))}function m(e){return function(t){return c.createElement(v,l({attr:l({},e.attr)},t),f(e.child))}}function v(e){var t=function(t){var n,r=e.attr,a=e.size,i=e.title,o=p(e,["attr","size","title"]),s=a||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),c.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,o,{className:n,style:l(l({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),i&&c.createElement("title",null,i),e.children)};return void 0!==u?c.createElement(u.Consumer,null,(function(e){return t(e)})):t(s)}function h(e){return m({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]})(e)}var _=n(6089),d=n(7596),y=n(1087),b=n(5658),g=n(1326),x=n(184),k=function(){var e=(0,c.useState)([]),t=(0,a.Z)(e,2),n=t[0],i=t[1],s=(0,y.lr)(),u=(0,a.Z)(s,2),l=u[0],p=u[1],f=(0,c.useState)("idle"),m=(0,a.Z)(f,2),v=m[0],k=m[1],w=l.get("query")||"";function O(){return O=(0,r.Z)(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,k("pending"),e.next=4,(0,_.zk)(t);case 4:n=e.sent,i(n.results),k("resolved"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),k("rejected");case 12:case"end":return e.stop()}}),e,null,[[0,9]])}))),O.apply(this,arguments)}return(0,c.useEffect)((function(){!function(e){O.apply(this,arguments)}(w)}),[w]),(0,x.jsxs)("div",{className:g.Z.searchContainer,children:[(0,x.jsx)("h2",{children:"Search movies:"}),(0,x.jsxs)("form",{className:g.Z.form,onSubmit:function(e){e.preventDefault();var t=e.target.movie.value;t||(0,d.Am)("Enter please a movie name.",{}),p(""!==t?{query:t}:{})},children:[(0,x.jsx)("button",{className:g.Z.btnSubmit,type:"submit",children:(0,x.jsx)(h,{size:"2rem"})}),(0,x.jsx)("input",{defaultValue:w,name:"movie",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search name"})]}),"resolved"===v&&(0,x.jsx)("div",{children:n.length>0&&(0,x.jsx)(b.Z,{movie:n,Title:"Resoult movies: ".concat(w)})})]})}},888:function(e,t,n){"use strict";var r=n(9047);function a(){}function i(){}i.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,i,o){if(o!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:a};return n.PropTypes=n,n}},2007:function(e,t,n){e.exports=n(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},1326:function(e,t){"use strict";t.Z={titleHome:"Home_titleHome__Pl6f7",btnBack:"Home_btnBack__9OT62",btnLink:"Home_btnLink__5LLr-",movieDetails:"Home_movieDetails__ZPn0n",movieListDetails:"Home_movieListDetails__HVsBe",mainCont:"Home_mainCont__mFIDs",userScore:"Home_userScore__Bl1yj",btnList:"Home_btnList__3orfV",btnRevue:"Home_btnRevue__FmOZH",btnList_Reviews:"Home_btnList_Reviews__EykJn",searchContainer:"Home_searchContainer__NhX1q",form:"Home_form__sX7YN",btnSubmit:"Home_btnSubmit__UFF27"}}}]);
//# sourceMappingURL=174.b59c817c.chunk.js.map