(this["webpackJsonphary.fun"]=this["webpackJsonphary.fun"]||[]).push([[1],{205:function(e,n,t){},292:function(e,n,t){"use strict";t.r(n);var a=t(91),c=t(0),r=t.n(c),i=t(26),o=t.n(i),s=t(46),l=t.n(s),f=(t(109),t(144)),u=t(303),d=(t(202),{apiKey:"AIzaSyDRJxeGNf16XA7oiNc7scJl5maTiOml5nY",authDomain:"haryfun-fe91a.firebaseapp.com",databaseURL:"https://haryfun-fe91a.firebaseio.com",projectId:"haryfun-fe91a",storageBucket:"haryfun-fe91a.appspot.com",messagingSenderId:"934755860195",appId:"1:934755860195:web:bcf1f0b3096edc77d8cfd6",measurementId:"G-K35S7X9942"});s.initializeApp(d);s.firestore();var h=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(205),t(206);var b=t(304),p=t(302),g=t(305),O=t(90),m=t(44),v=t(6),x=Object(O.a)((function(){return t.e(8).then(t.bind(null,364))}),{fallback:Object(v.jsx)(m.a,{})}),w=Object(O.a)((function(){return Promise.all([t.e(9),t.e(22)]).then(t.bind(null,367))}),{fallback:Object(v.jsx)(m.a,{})}),y=Object(g.a)((function(){return Object(v.jsxs)(b.a,{children:[Object(v.jsx)(p.a,{path:"/",exact:!0,children:Object(v.jsx)(w,{})}),Object(v.jsx)(p.a,{path:"/me",exact:!0,children:Object(v.jsx)(x,{})}),Object(v.jsx)(p.a,{component:function(){return Object(v.jsx)("div",{children:"Not Found"})}})]})}));o.a.render(Object(v.jsx)(r.a.Suspense,{fallback:Object(v.jsx)(m.a,{}),children:Object(v.jsx)(u.a,{children:Object(v.jsx)(f.b,Object(a.a)(Object(a.a)({firebase:l.a},d),{},{children:Object(v.jsx)(y,{})}))})}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");h?(!function(e){fetch(e).then((function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):j(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):j(e)}))}}()},44:function(e,n,t){"use strict";t.d(n,"a",(function(){return j}));var a=t(114),c=t(115),r=t(145),i=t(143),o=t(0),s=t(100),l=t(293),f=t(294),u=t(39),d=t(99),h=t(6),j=function(e){Object(r.a)(t,e);var n=Object(i.a)(t);function t(){var e;Object(a.a)(this,t);for(var c=arguments.length,r=new Array(c),i=0;i<c;i++)r[i]=arguments[i];return(e=n.call.apply(n,[this].concat(r))).state={calculations:{direction:"none",height:0,width:0,topPassed:!1,bottomPassed:!1,pixelsPassed:0,percentagePassed:0,topVisible:!1,bottomVisible:!1,fits:!1,passing:!1,onScreen:!1,offScreen:!1}},e.handleOnScreen=function(n,t){var a=t.calculations;return e.setState({calculations:a})},e.handleOffScreen=function(n,t){var a=t.calculations;return e.setState({calculations:a})},e}return Object(c.a)(t,[{key:"render",value:function(){return Object(h.jsx)(s.a,{container:!0,centered:!0,children:Object(h.jsx)(s.a.Row,{verticalAlign:"middle",children:Object(h.jsx)(s.a.Column,{children:Object(h.jsx)(l.a,{fireOnMount:!0,onOnScreen:this.handleOnScreen,onOffScreen:this.handleOffScreen,children:Object(h.jsxs)(f.a,{children:[Object(h.jsx)(u.a,{src:"https://react.semantic-ui.com/images/wireframe/centered-paragraph.png"}),Object(h.jsx)(d.a,{}),Object(h.jsx)(u.a,{src:"https://react.semantic-ui.com/images/wireframe/short-paragraph.png"}),Object(h.jsx)(d.a,{}),Object(h.jsx)(u.a,{src:"https://react.semantic-ui.com/images/wireframe/media-paragraph.png"}),Object(h.jsx)(d.a,{}),Object(h.jsx)(u.a,{src:"https://react.semantic-ui.com/images/wireframe/paragraph.png"})]})})})})})}}]),t}(o.PureComponent)}},[[292,2,3]]]);