(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{32:function(e,t,n){e.exports=n.p+"static/media/logo.1813edc8.svg"},35:function(e,t,n){e.exports=n(65)},40:function(e,t,n){},41:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(12),r=n.n(o),l=(n(40),n(16)),i=n(2),u=n(32),s=n.n(u),f=(n(41),n(17)),m=n.n(f),b=n(33),g=n(10),E=n(19),p=n.n(E),h="https://actionpterygii.microcms.io/api/v1/",O="3eb7bf23-beb0-472c-82af-0b67cdb6ca22",d=function(e){return{type:"SUCCESS_FETCH_BLOG_POST",blogPost:e}};function v(){var e=Object(g.b)();return{blogInfo:Object(g.c)((function(e){return e.blogInfo})),fetchBlogInfo:function(){p.a.get(h+"information",{headers:{"X-API-KEY":O}}).then((function(t){e({type:"FETCH_BLOG_INFO",payload:t.data})}))},blogPost:Object(g.c)((function(e){return e.blogPost})),fetchBlogPost:function(){var t=Object(b.a)(m.a.mark((function t(n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e({type:"FETCH_BLOG_POST"}),t.next=3,p.a.get(h+"post/post"+n,{headers:{"X-API-KEY":O}}).then((function(t){e(d(t.data))})).catch((function(){e({type:"FAILED_FETCH_BLOG_POST"})}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}var _=function(){var e=v().blogInfo;return c.a.createElement("header",null,c.a.createElement("h1",null,e.title),c.a.createElement("p",null,e.description))};var P=function(){return v().blogInfo,c.a.createElement("div",null,"\u3068\u3063\u3077")};var j=function(){var e=v(),t=e.blogPost,n=e.fetchBlogPost,o=Object(i.f)().key;return Object(a.useEffect)((function(){n(o)}),[]),t.fetching?c.a.createElement("div",null,"\u3088\u307f\u3053\u307f\u3061\u3085\u3046"):t.success?c.a.createElement("div",null,c.a.createElement("h2",null,t.title),c.a.createElement("div",null,t.content),c.a.createElement("div",null,t.category.name),c.a.createElement("ul",null,t.tags.map((function(e,t){return c.a.createElement("li",{key:t},c.a.createElement("a",{href:"/#/tags/".concat(e.id)},e.name))})))):t.failed?c.a.createElement("div",null,"\u306a\u3044\u3067\u3059"):c.a.createElement("div",null,"a")};var y=function(){var e=v().blogInfo;return c.a.createElement("footer",null,c.a.createElement("small",null,"\xa9 2020 ",e.copyright))};var I=function(){var e=v().fetchBlogInfo;return Object(a.useEffect)((function(){e()}),[]),c.a.createElement(l.a,null,c.a.createElement(_,null),c.a.createElement("main",null,c.a.createElement("img",{src:s.a,className:"App-logo",alt:"logo"}),c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:"/",component:P}),c.a.createElement(i.a,{exact:!0,path:"/post/:key",component:j}))),c.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B=n(14),T=n(8),C={blogInfo:{},blogPost:{}};var F=Object(B.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_BLOG_INFO":return Object(T.a)(Object(T.a)({},e),{},{blogInfo:t.payload});case"FETCH_BLOG_POST":return Object(T.a)(Object(T.a)({},e),{},{blogPost:{fetching:!0}});case"SUCCESS_FETCH_BLOG_POST":return Object(T.a)(Object(T.a)({},e),{},{blogPost:Object(T.a)(Object(T.a)({},t.blogPost),{},{success:!0})});case"FAILED_FETCH_BLOG_POST":return Object(T.a)(Object(T.a)({},e),{},{blogPost:{failed:!0}});default:return e}}));r.a.render(c.a.createElement(g.a,{store:F},c.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.73e36a03.chunk.js.map