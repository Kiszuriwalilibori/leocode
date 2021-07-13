(this.webpackJsonpleocode=this.webpackJsonpleocode||[]).push([[1],{13:function(n,e,t){"use strict";t.d(e,"b",(function(){return a})),t.d(e,"a",(function(){return r}));var a=5,r="https://jsonplaceholder.typicode.com/users"},15:function(n,e,t){"use strict";t.d(e,"b",(function(){return o})),t.d(e,"a",(function(){return i}));var a=t(22),r=t(23),c=t(13),o=new(function(){function n(e){Object(a.a)(this,n),this.pageLength=e}return Object(r.a)(n,[{key:"getNumberOfPages",value:function(n){return Math.ceil(n.length/this.pageLength)}},{key:"sliceSinglePageContent",value:function(n,e,t){n>t&&(n=t);var a=this.pageLength*(n-1),r=a+this.pageLength>e.length?e.length:a+this.pageLength;return e.slice(a,r)}}]),n}())(c.b),i={id:function(n){return"".concat(n.toString(),".")},nam:function(n){return n},userName:function(n){return"@".concat(n)}}},21:function(n,e,t){"use strict";var a,r,c,o=t(3),i=t(0),u=t(4),s=t(1),l=Object(u.d)(a||(a=Object(o.a)([" \n  0% {font-size: 12px;}\n  50% {font-size: 32px;}\n  100% {font-size:12px;}\n  "]))),d=Object(u.b)(r||(r=Object(o.a)(["\n  "," 1s infinite;\n"])),l),b=u.c.div(c||(c=Object(o.a)(["\n  display: flex;\n  justify-content: center;\n  color: rgb(5, 98, 121);\n  width: 100px auto;\n  height: 40px;\n  animation: ",";\n"])),d),f=i.memo((function(){return Object(s.jsx)(b,{children:"Loading..."})}));e.a=f},50:function(n,e,t){"use strict";t.r(e),t.d(e,"store",(function(){return _}));var a,r,c,o=t(0),i=t(11),u=t.n(i),s=t(28),l=t(3),d=t(9),b=t(24),f=t.n(b),h=t(4),p=t(12),j=t(1),g=h.c.h1(a||(a=Object(l.a)(["\n  text-align: center;\n  margin: 30px 0;\n  font-size: 32px;\n\n  @media only screen and (max-width: 667px) {\n    margin-top: calc(15px + 15 * ((100vw - 320px) / 347));\n    margin-bottom: calc(15px + 15 * ((100vw - 320px) / 347));\n  }\n\n  @media only screen and (max-width: 500px) {\n    font-size: calc(26px + 6 * ((100vw - 320px) / 180));\n  }\n"]))),O=function(){return Object(j.jsx)(g,{children:"Users List"})},m=o.memo(O),x=t(21),y=h.c.main(r||(r=Object(l.a)(["\nmargin: 0 auto;\nmax-width: 600px;\npadding: 100px 10px 10px 10px;\n  @media only screen and (max-width: 667px) {\n    max-width: 90%;\n    padding-top: calc(10px + 90 * ((100vw - 500px) / 167));\n  }\n}\n"]))),C=Object(o.lazy)((function(){return t.e(4).then(t.bind(null,111))})),v=Object(o.lazy)((function(){return Promise.all([t.e(0),t.e(5),t.e(6)]).then(t.bind(null,103))})),S=Object(o.lazy)((function(){return t.e(7).then(t.bind(null,112))})),w=Object(o.lazy)((function(){return Promise.all([t.e(0),t.e(8)]).then(t.bind(null,107))})),U=function(n){var e=n.fetchUsers,t=n.searchUsers,a=Object(o.useState)(""),r=Object(s.a)(a,2),c=r[0],i=r[1],u=Object(o.useCallback)((function(n){i(n.target.value)}),[]),l=Object(o.useCallback)((function(n){i("")}),[]);Object(o.useEffect)((function(){e()}),[e]);var d=Object(o.useCallback)(f()((function(n){return t(n)}),500),[]);return Object(o.useEffect)((function(){d(c)}),[c,d]),Object(j.jsxs)(y,{children:[Object(j.jsx)(m,{}),Object(j.jsxs)(o.Suspense,{fallback:Object(j.jsx)(x.a,{}),children:[Object(j.jsx)(S,{inputContent:c,onInputContentChange:u,onInputClear:l}),Object(j.jsx)(w,{}),Object(j.jsx)(C,{}),Object(j.jsx)(v,{})]})]})},E=U=Object(p.b)(null,(function(n){return{fetchUsers:function(){return n(Object(d.d)())},searchUsers:function(e){return n(Object(d.e)(e))}}}))(U),k=t(10),R=t(2),P=Object(h.a)(c||(c=Object(l.a)(["\n* {\n    box-sizing: border-box;\n    margin: 0 0;\n    padding: 0 0;\n  }\n  \n  html {\n    width: 100%;\n    min-height: 100%;\n  }\n  \n  body {\n    width: 100%;\n    min-height: 100vh;\n    height: 100%;\n    margin: 0;\n    font-family: -apple-system, BlinkMacSystemFont, San Francisco, Helvetica Neue, Helvetica, Ubuntu, Roboto, Noto, Segoe UI, Arial, sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  \n  #root {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n  }\n   \n"]))),_=Object(R.a)({reducer:{users:d.c},middleware:function(n){return n().concat(k.a)}});u.a.render(Object(j.jsxs)(p.a,{store:_,children:[Object(j.jsx)(P,{}),Object(j.jsx)(E,{})]}),document.getElementById("root"))},9:function(n,e,t){"use strict";t.d(e,"b",(function(){return i})),t.d(e,"a",(function(){return f})),t.d(e,"d",(function(){return j})),t.d(e,"e",(function(){return g}));var a=t(2),r=t(15),c=t(13),o=Object(a.b)("ERROR_SHOW"),i=Object(a.b)("ERROR_CLEAR"),u=Object(a.b)("FETCH_USERS_FAIL"),s=Object(a.b)("FETCH_USERS_SUCCESS"),l=Object(a.b)("FETCH_USERS_START"),d=Object(a.b)("MATCHING_USERS_SUCCESS"),b=Object(a.b)("MATCHING_USERS_FAIL"),f=Object(a.b)("PAGE_CHANGE"),h={error:{value:!1,code:""},doesFetchWork:!1,allUsers:[],matchingUsers:[],currentPageNumber:1,numberOfPages:0},p=Object(a.c)(h,(function(n){n.addCase(f,(function(n,e){e.payload&&(n.currentPageNumber=e.payload)})).addCase(d,(function(n,e){e.payload&&(n.matchingUsers=e.payload,n.numberOfPages=r.b.getNumberOfPages(e.payload))})).addCase(b,(function(n){n.error.value=!0,n.error.code="No user matches criteria"})).addCase(u,(function(n,e){n.doesFetchWork=!1,e.payload&&(n.error.value=!0,n.error.code=e.payload)})).addCase(s,(function(n,e){n.doesFetchWork=!1,e.payload&&(n.allUsers=e.payload,n.matchingUsers=e.payload,n.numberOfPages=r.b.getNumberOfPages(e.payload))})).addCase(l,(function(n){n.doesFetchWork=!0})).addCase(o,(function(n,e){e.payload&&(n.error.value=!0,n.error.code=e.payload)})).addCase(i,(function(n){n.error=h.error})).addDefaultCase((function(){}))}));function j(){return function(n){n(l()),fetch(c.a).then((function(n){return n.json()})).then((function(e){n(s(e))})).catch((function(e){return n(u("Podczas pobierania danych nast\u0105pil b\u0142\u0105d: "+e.message))}))}}function g(n){return function(e,t){var a=t().users.allUsers;if(a&&n&&n.length>0){var r=a.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));r.length?(e(d(r)),t().users.error.value&&e(i())):e(b())}else 0===n.length&&e(d(a))}}e.c=p}},[[50,2,3]]]);
//# sourceMappingURL=main.da09e9ae.chunk.js.map