(this.webpackJsonpgone_phishin=this.webpackJsonpgone_phishin||[]).push([[0],{24:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var c=a(1),r=a.n(c),n=a(16),s=a.n(n),i=a(8),o=(a(24),a(3)),d=a.n(o),u=a(7),j=a(5),l=function(){var e=Object(u.a)(d.a.mark((function e(t){var a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"Bearer 993a1943848ae99388901820d93b556d71c8e17ec1e4c1a9d0eeb866f37982f66dc46a4da393bfe9110313134d0dd160",a={method:"GET",headers:{Authorization:"Bearer 993a1943848ae99388901820d93b556d71c8e17ec1e4c1a9d0eeb866f37982f66dc46a4da393bfe9110313134d0dd160",Accept:"application/json"}},e.next=4,fetch("http://phish.in/api/v1/".concat(t),a);case 4:return c=e.sent,e.next=7,c.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=a(0),h=Object(c.createContext)(),p=function(e){var t=e.children,a=Object(c.useState)([]),r=Object(j.a)(a,2),n=r[0],s=r[1],i=Object(c.useState)(""),o=Object(j.a)(i,2),p=o[0],x=o[1],O=Object(c.useState)({}),m=Object(j.a)(O,2),f=m[0],v=m[1],y=Object(c.useState)([]),g=Object(j.a)(y,2),w=g[0],N=g[1],k=function(){var e=Object(u.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l("years");case 3:t=e.sent,s(t.data.reverse()),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),x(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(u.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l("tracks/".concat(t));case 3:a=e.sent,v(a.data),console.log(a.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),x(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){k()}),[]);var S=function(){var e=Object(u.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l("/years/".concat(t));case 3:a=e.sent,N(a.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),x(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsx)(h.Provider,{value:{years:n,error:p,fetchData:l,getCurrentTrack:T,currentTrack:f,shows:w,getShows:S},children:t})},x=a(11),O=Object(c.createContext)(),m=function(e){var t=e.children,a=Object(c.useState)({isPartyMode:!1,partyMode:{primaryText:"#A81AE5",secondaryText:"#2A58F6",primaryBG:"rgb(243 145 39 / 79%)",secondaryBG:"#31E5F8",aquaGradient:"linear-gradient(90deg, rgba(49,229,248,1) 35%, rgba(42,88,246,1) 100%)",radius:"10%",shadow:"5px 5px 15px rgb(173 39 242)"},basic:{primaryText:"#6d6f71",mainBG:"#f2f3f5",primaryBG:"#D9DBDC",secondaryBG:"",radius:"10px",shadow:""}}),r=Object(j.a)(a,2),n=r[0],s=r[1];return Object(b.jsx)(O.Provider,{value:Object(x.a)(Object(x.a)({},n),{},{toggleTheme:function(){s(Object(x.a)(Object(x.a)({},n),{},{isPartyMode:!n.isPartyMode}))}}),children:t})};function f(){var e=r.a.useContext(O);if(void 0===e)throw new Error("useTheme must be used within a ThemeContextProvider");return e}var v=a(2),y=a.p+"static/media/party-mode-icon.1dc935e1.png",g=a.p+"static/media/standard-mode-icon.b734c571.png",w=(a(27),function(){var e=f(),t=e.isPartyMode,a=e.toggleTheme;return Object(b.jsx)("img",{className:"mode-icon",src:t?y:g,onClick:a})}),N=(a(28),function(){var e=Object(c.useContext)(h).years.map((function(e){return Object(b.jsx)("option",{className:"dropdown-option",value:e,children:e},e)}));return Object(b.jsx)("div",{children:Object(b.jsxs)("select",{className:"select",name:"years",id:"yearsSelect",onChange:function(e){return function(e){var t="/years/".concat(e);window.location.assign(t)}(e.target.value)},children:[Object(b.jsx)("option",{value:"",children:"Years"}),e]})})}),k=a.p+"static/media/phish-in-logo.06a5731e.png",T=a.p+"static/media/phish-in-party-multicolor-logo.040a5ffa.png",S=(a(29),function(){var e=f().isPartyMode;return console.log(e),Object(b.jsxs)("div",{className:"navbar",children:[Object(b.jsx)("div",{className:"mode",children:Object(b.jsx)(w,{})}),Object(b.jsx)(i.b,{className:"phish-in-link",to:"/",children:Object(b.jsx)("img",{className:"phish-in-logo",alt:"phish-in-logo",src:e?T:k})}),Object(b.jsx)(N,{})]})}),M=(a(38),function(e){var t=e.year,a=f(),c=a.isPartyMode,r=a.partyMode,n=a.basic,s=c?r:n;return Object(b.jsx)("div",{style:{background:s.primaryBG,boxShadow:s.shadow,borderRadius:s.radius},className:"card",id:t,children:Object(b.jsx)("h3",{style:{color:s.primaryText},className:"year-text",children:t})})}),C=(a(39),a.p+"static/media/error.cbcf2372.png"),P=a.p+"static/media/error_party.6e4799d1.png",E=function(e){var t=e.message,a=f().isPartyMode?P:C;return Object(b.jsxs)("div",{className:"error-display",children:[Object(b.jsxs)("h2",{children:["Uh oh. ",t]}),Object(b.jsx)("h3",{children:"The show has been delayed."}),Object(b.jsx)("img",{src:a,alt:"under construction",className:"error-background"})]})},B=(a(40),function(){var e=Object(c.useContext)(h),t=e.years,a=e.error,r=t.map((function(e){return Object(b.jsx)(i.b,{className:"year-link",to:"/years/".concat(e),children:Object(b.jsx)(M,{year:e})},e)}));return Object(b.jsxs)("section",{className:"years-container",children:[a&&Object(b.jsx)(E,{message:a}),!a&&r]})}),Y=(a(41),function(e){var t=e.track,a=Object(c.useContext)(h).getCurrentTrack,r=f(),n=r.isPartyMode,s=r.partyMode,i=r.basic,o=n?s:i,d=t.id,u=t.title;return Object(b.jsx)("article",{className:"card",id:d,style:{background:o.primaryBG,boxShadow:o.shadow,borderRadius:o.radius},onClick:function(){return a(d)},children:Object(b.jsx)("p",{className:"song-title",style:{color:o.primaryText},children:u})})}),G=a(10),_=a.n(G),D=(a(42),function(e){var t=e.id,a=Object(c.useContext)(h).fetchData,r=Object(c.useState)([]),n=Object(j.a)(r,2),s=n[0],i=n[1],o=Object(c.useState)({}),l=Object(j.a)(o,2),p=l[0],x=l[1],O=Object(c.useState)(""),m=Object(j.a)(O,2),f=m[0],v=m[1],y=Object(c.useCallback)((function(){(function(){var e=Object(u.a)(d.a.mark((function e(t){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a("shows/".concat(t));case 3:c=e.sent,i(c.data.tracks),x(c.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),v(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}})()(t)}),[t,a,i,x,v]);Object(c.useEffect)((function(){y(t)}),[t,y]);var g=function(e){return s.filter((function(t){return t.set_name===e})).map((function(e){return Object(b.jsx)(Y,{id:e.id,track:e},e.id)}))};return Object(b.jsxs)("section",{className:"tracks-container",children:[f&&Object(b.jsx)(E,{message:f}),p.date&&p.venue_name&&p.venue.location&&Object(b.jsxs)("div",{className:"show-info",children:[Object(b.jsx)("h3",{children:_()(p.date).format("MMM D, YYYY")}),Object(b.jsx)("h3",{children:p.venue_name}),Object(b.jsx)("h3",{children:p.venue.location})]}),s.length>0&&Object(b.jsxs)("div",{className:"tracks-container",children:[Object(b.jsx)("h4",{children:"-- SET I --"}),Object(b.jsx)("div",{className:"set-1",children:g("Set 1")}),Object(b.jsx)("h4",{children:"-- SET II --"}),Object(b.jsx)("div",{className:"set-2",children:g("Set 2")}),"undefined"!==g("Set 3")&&Object(b.jsxs)("div",{className:"set-3",children:[Object(b.jsx)("h4",{children:"-- SET III --"}),Object(b.jsx)("div",{className:"set-3",children:g("Set 3")})]}),Object(b.jsx)("h4",{children:"-- ENCORE --"}),Object(b.jsx)("div",{className:"encore",children:g("Encore")})]})]})}),I=(a(43),function(e){var t=e.show,a=f(),c=a.isPartyMode,r=a.partyMode,n=a.basic,s=c?r:n,o=t.date,d=t.venue_name,u=t.venue,j=t.id;return Object(b.jsx)(i.b,{to:"/shows/".concat(j),className:"show-card-link",children:Object(b.jsxs)("article",{style:{background:s.primaryBG,boxShadow:s.shadow,borderRadius:s.radius},className:"card",children:[Object(b.jsxs)("p",{className:"date",style:{color:s.primaryText},children:[" ",_()(o).format("MMM D, YYYY")," "]}),Object(b.jsxs)("p",{className:"venue",style:{color:s.primaryText},children:[" ",d," "]}),Object(b.jsxs)("p",{className:"location",style:{color:s.primaryText},children:[" ",u.location," "]})]})})}),F=a.p+"static/media/phishLogoLoading.d83a842d.png",A=(a(44),function(e){var t=e.year,a=Object(c.useContext)(h),r=a.shows,n=a.getShows,s=a.error,i=Object(c.useState)(!0),o=Object(j.a)(i,2),l=o[0],p=o[1],x=Object(c.useCallback)((function(){(function(){var e=Object(u.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(t);case 2:p(!1);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]);Object(c.useEffect)((function(){x()}),[x]);var O=r.map((function(e){return Object(b.jsx)(I,{show:e},e.id)}));return Object(b.jsxs)("div",{className:"show",children:[s&&Object(b.jsx)(E,{message:s}),l&&!s&&Object(b.jsx)("img",{className:"phish-logo-loading",alt:"phish-logo-loading",src:F}),!l&&!s&&O]})}),L=a(19),R=a.n(L);a(45);function q(){var e=Object(c.useContext)(h).currentTrack,t=e.mp3,a=e.title,r=e.show_date,n=e.venue_name,s=e.venue_location,i=_()(r).format("M-D-YYYY"),o=f(),d=o.isPartyMode,u=o.partyMode,j=o.basic,l=d?u:j;return Object(b.jsxs)("footer",{className:"footer",style:{background:l.aquaGradient},children:[Object(b.jsx)("p",{className:"venue-text venue-title",style:{color:l.primaryText},children:a}),Object(b.jsx)("p",{className:"venue-text",style:{color:l.primaryText},children:i}),Object(b.jsx)("p",{className:"venue-text",style:{color:l.primaryText},children:n}),Object(b.jsx)("p",{className:"venue-text",style:{color:l.primaryText},children:s}),Object(b.jsx)(R.a,{className:"audio-player",src:t,autoPlay:!0,controls:!0})]})}a(46);var J=function(){return Object(b.jsx)(m,{children:Object(b.jsx)(p,{children:Object(b.jsxs)("div",{className:"app-wrapper",children:[Object(b.jsx)(S,{}),Object(b.jsxs)(v.c,{children:[Object(b.jsx)(v.a,{exact:!0,path:"/",render:function(){return Object(b.jsx)("div",{className:"app",children:Object(b.jsx)(B,{})})}}),Object(b.jsx)(v.a,{exact:!0,path:"/years/:year",render:function(e){var t=e.match;return Object(b.jsx)("div",{className:"app",children:Object(b.jsx)(A,{year:t.params.year})})}}),Object(b.jsx)(v.a,{exact:!0,path:"/shows/:id",render:function(e){var t=e.match;return Object(b.jsx)("div",{className:"app",children:Object(b.jsx)(D,{id:t.params.id,type:"tracks"})})}}),Object(b.jsx)(v.a,{render:function(){return Object(b.jsx)(E,{message:"Page Not Found"})}})]}),Object(b.jsx)(q,{})]})})})},z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,48)).then((function(t){var a=t.getCLS,c=t.getFID,r=t.getFCP,n=t.getLCP,s=t.getTTFB;a(e),c(e),r(e),n(e),s(e)}))};s.a.render(Object(b.jsx)(i.a,{children:Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(J,{})})}),document.getElementById("root")),z()}},[[47,1,2]]]);
//# sourceMappingURL=main.621a0f69.chunk.js.map