(this.webpackJsonpleocode=this.webpackJsonpleocode||[]).push([[3],{85:function(e,n,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=t(86);Object.defineProperty(n,"default",{enumerable:!0,get:function(){return r(i).default}})},86:function(e,n,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,n,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return n[t]}})}:function(e,n,t,r){void 0===r&&(r=t),e[r]=n[t]}),i=this&&this.__setModuleDefault||(Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(n,e,t);return i(n,e),n};Object.defineProperty(n,"__esModule",{value:!0});var u=a(t(0));n.default=function(e){var n=u.useState(0),t=n[0],r=n[1],i=e.transitionDuration||400,a=e.delay||50,c=e.wrapperTag||"div",s=e.childTag||"div",l="undefined"===typeof e.visible||e.visible;return u.useEffect((function(){var n=u.default.Children.count(e.children);if(l||(n=0),n==t){var c=setTimeout((function(){e.onComplete&&e.onComplete()}),i);return function(){return clearTimeout(c)}}var s=n>t?1:-1,o=setTimeout((function(){r(t+s)}),a);return function(){return clearTimeout(o)}}),[u.default.Children.count(e.children),a,t,l,i]),u.default.createElement(c,{className:e.className},u.default.Children.map(e.children,(function(n,r){return u.default.createElement(s,{className:e.childClassName,style:{transition:"opacity "+i+"ms, transform "+i+"ms",transform:t>r?"none":"translateY(20px)",opacity:t>r?1:0}},n)})))}},99:function(e,n,t){"use strict";t.r(n);t(0);var r,i,a,u=t(16),c=t(18),s=t(19),l=t(3),o=s.b.span(r||(r=Object(c.a)(["\npadding: 1rem 5px;\nfont-size:1rem;\ncolor: grey;\n  @media only screen and (max-width: 500px) {\n    font-size: 0.8rem;\n    padding: 3px;\n  }\n"]))),d=s.b.span(i||(i=Object(c.a)(["\npadding: 1rem 5px;\nfont-size: 1.2rem;\nwhite-space: nowrap;\n    @media only screen and (max-width: 500px) {\n      font-size: 1rem;\n    }\n"]))),f=s.b.li(a||(a=Object(c.a)(["\nline-height: 2;\n@media only screen and (max-width: 400px) {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    line-height: 1.5;\n    padding: 1rem 0;\n    //& span {padding:0 5px;}\n    & span {padding:0 5px; line-height:1.4;}\n    & span:first-child {\n      align-self: center;\n    }\n  }\n"]))),m=function(e){return"".concat(e.toString(),".")},p=function(e){return e},h=function(e){return"@".concat(e)},b=function(e){var n=e.user,t=e.index;return Object(l.jsxs)(f,{children:[n.id&&Object(l.jsx)(o,{children:m(n.id)}),n.name&&Object(l.jsx)(d,{children:p(n.name)}),n.username&&Object(l.jsx)(o,{children:h(n.username)})]},t)},j=t(85),g=t.n(j),x=t(34),O=Object(u.b)((function(e){return{users:e.users.matchingUsers,currentPageNumber:e.users.currentPageNumber,numberOfPages:e.users.numberOfPages}}),null)((function(e){var n=e.users,t=e.currentPageNumber,r=e.numberOfPages,i=x.a.sliceSinglePageContent(t,n,r),a=i?i.map((function(e,n){return Object(l.jsx)(b,{index:n,user:e},n)})):null;return Object(l.jsx)("section",{children:Object(l.jsx)("ul",{className:"usersList",children:Object(l.jsx)(g.a,{children:a})})})}));n.default=O}}]);
//# sourceMappingURL=3.0b71d80e.chunk.js.map