(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,t,n){},102:function(e,t,n){},104:function(e,t,n){},105:function(e,t,n){},106:function(e,t,n){},107:function(e,t,n){},108:function(e,t,n){},109:function(e,t,n){},110:function(e,t,n){},142:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(0),a=n.n(s),r=n(16),o=n.n(r),i=(n(77),n(78),n(5)),u=n.n(i),l=n(3);function j(e){return{type:"SET_USER",payload:e}}function d(e){return{type:"SET_ROOM_NAME",payload:e}}function m(e){return{type:"SET_MESSAGES",payload:e}}function b(e){return{type:"SET_ALERT",payload:e}}function h(e){return{type:"SET_TARGET",payload:e}}function O(e){return{type:"SET_USERS",payload:e}}function f(e){return{type:"SET_ROOMS",payload:e}}var g=n(4),p=n(155);n(100);function x(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.user})),n=Object(l.c)((function(e){return e.socket})),s=Object(g.f)();return Object(c.jsxs)("div",{className:"nav",children:[Object(c.jsx)("div",{className:"nav__logo",children:Object(c.jsx)(p.a,{className:"fa fa-kiwi-bird "})}),Object(c.jsxs)("div",{className:"nav__navbar",children:[Object(c.jsxs)("div",{className:"nav__user",children:["Welome ",t.username]}),Object(c.jsxs)("button",{className:"mav__logout",onClick:function(){return u.a.post("/user/logout",{id:t.id}),n.emit("user-logout"),e(j({state:!1})),void s.push("/auth")},children:["Log-out ",Object(c.jsx)(p.a,{className:"fa fa-sign-out-alt "})," "]})]})]})}var v=n(9);n(102);function _(e){var t=e.user,n=e.selectUser,s=Object(l.b)(),a=Object(g.f)(),r=Object(l.c)((function(e){return e.user}));function o(){var e=t._id,n=t.username;a.push("/users/"+t.username),function(){var e;e=r.username>t.username?r.username+"&"+t.username:t.username+"&"+r.username,s(d(e)),u.a.post("/chat/messages",{roomName:e}).then((function(e){e.data.length?s(m(e.data)):s(m([0]))})).catch((function(e){return console.log(e)}))}(),s(h({id:e,username:n,type:"user"}))}return Object(c.jsx)("div",{className:"user",onClick:function(e){n(e.currentTarget),o()},children:Object(c.jsxs)("p",{children:[t.username,t.connected?Object(c.jsx)("span",{style:{background:"#33d933"}}):Object(c.jsx)("span",{style:{background:"red"}})]})},t._id)}var y=n(14),N=n.n(y),E=n(25);n(104);function w(e){var t=e.room,n=e.selectUser,s=e.edit,a=Object(l.b)(),r=Object(g.f)(),o=Object(l.c)((function(e){return e.user.username})),i=Object(l.c)((function(e){return e.socket})),j=Object(l.c)((function(e){return e.target}));function b(){return(b=Object(E.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.post("/chat/deleteroom",{roomname:t.roomname}).then((function(e){u.a.get("/chat/rooms").then((function(e){a(f(e.data)),t.roomname===j.roomname&&r.push("/")})).catch((function(e){return console.log(e)})),i.emit("rooms-change",t.roomname)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.jsxs)("div",{className:"user room",onClick:function(e){n(e.currentTarget),function(){var e=t._id,n=t.roomname;r.push("/rooms/"+t.roomname),a(d(n)),a(h({id:e,roomname:n,type:"room"})),u.a.post("/chat/messages",{roomName:n}).then((function(e){e.data.length?a(m(e.data)):a(m([0]))})).catch((function(e){return console.log(e)}))}()},children:[Object(c.jsx)("p",{children:t.roomname}),s&&t.creator===o&&Object(c.jsx)("button",{onClick:function(){return function(){return b.apply(this,arguments)}()},children:Object(c.jsx)(p.a,{className:"fa fa-minus "})})]},t._id)}n(105);function S(e){var t=e.cancel,n=Object(l.b)(),a=Object(l.c)((function(e){return e.user.username})),r=Object(l.c)((function(e){return e.socket})),o=Object(s.useState)(""),i=Object(v.a)(o,2),j=i[0],d=i[1];function m(){return(m=Object(E.a)(N.a.mark((function e(c){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(j.length<4)){e.next=4;break}n(b({type:"warning",message:"Room name must be at least 4 letters"})),e.next=10;break;case 4:if(!(j.length>10)){e.next=8;break}n(b({type:"warning",message:"Room name can't have more than 10 letters"})),e.next=10;break;case 8:return e.next=10,u.a.post("/chat/addroom",{roomname:j,creator:a}).then((function(e){"warning"!==e.data.type?(n(b(e.data)),t(),u.a.get("/chat/rooms").then((function(e){n(f(e.data))})).catch((function(e){return console.log(e)})),r.emit("rooms-change")):n(b(e.data))})).catch((function(e){return console.log(e)}));case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.jsx)("div",{className:"add",onClick:function(e){return function(e){document.getElementsByClassName("add")[0]===e.target&&t()}(e)},children:Object(c.jsxs)("div",{className:"add__container",children:[Object(c.jsx)("div",{className:"add__form",children:Object(c.jsx)("label",{htmlFor:"",children:"Enter a name for the new room"})}),Object(c.jsx)("input",{type:"text",value:j,onChange:function(e){return d(e.target.value)}}),Object(c.jsx)("button",{id:"add__button",onClick:function(e){return function(e){return m.apply(this,arguments)}(e)},children:"Add"})]})})}n(106);function k(){var e=Object(s.useState)(!1),t=Object(v.a)(e,2),n=t[0],a=t[1],r=Object(s.useState)(!1),o=Object(v.a)(r,2),i=o[0],u=o[1],j=Object(l.c)((function(e){return e.users})),d=Object(l.c)((function(e){return e.rooms})),m=Object(l.c)((function(e){return e.user.id}));function b(e){for(var t=document.getElementsByClassName("user"),n=0;n<t.length;n++){t[n].classList.remove("user__selected")}e.classList.add("user__selected")}return Object(c.jsxs)("div",{className:"left",children:[Object(c.jsxs)("div",{className:"left__users",children:[Object(c.jsxs)("h2",{children:[Object(c.jsx)("i",{class:"fas fa-users"}),"Users"]}),Object(c.jsx)("div",{children:j.map((function(e){return e._id!==m?Object(c.jsx)(_,{user:e,selectUser:b},e.id):null}))})]}),Object(c.jsxs)("div",{className:"left__rooms",children:[Object(c.jsxs)("h2",{children:[Object(c.jsx)("i",{class:"fab fa-houzz"}),"Rooms ",Object(c.jsxs)("button",{onClick:function(){return a(!n)},children:["  ",Object(c.jsx)(p.a,{className:"fa fa-plus "})]})," ",Object(c.jsxs)("button",{onClick:function(){return u(!i)},children:["  ",Object(c.jsx)(p.a,{className:"fa fa-pen "})]})," "]}),Object(c.jsx)("div",{children:d.map((function(e){return Object(c.jsx)(w,{edit:i,room:e,selectUser:b},e.id)}))})]}),n?Object(c.jsx)(S,{cancel:function(e){a(!n)}},"add"):null]})}var C=n(37);n(107);function T(){var e=Object(l.c)((function(e){return e.socket})),t=Object(l.c)((function(e){return e.target})),n=Object(l.c)((function(e){return e.user})),a=Object(l.c)((function(e){return e.roomName})),r=Object(l.c)((function(e){return e.messages})),o=Object(s.useState)(""),i=Object(v.a)(o,2),j=i[0],d=i[1],m=Object(s.useState)([]),b=Object(v.a)(m,2),h=b[0],O=b[1];function f(){!function(){if(""!==j)if(O([].concat(Object(C.a)(h),[Object(c.jsxs)("div",{className:"chat__message chat__messageOut",children:[Object(c.jsx)("small",{children:"You"}),Object(c.jsx)("p",{children:j})]},Date.now())])),"room"!==t.type){var s=t.id;e.emit("new-message",a,j,s,n.username)}else e.emit("room-message",a,j,n.username)}();var s=t.id,r=n.username,o=n.id;u.a.post("/chat/message",{content:j,sender:o,senderName:r,receiver:s,date:new Date(Date.now()).toUTCString(),roomName:a})}return Object(s.useEffect)((function(){""!==a&&O([])}),[a]),Object(s.useEffect)((function(){e.on("message-sent",(function(e){e.roomName===a&&""!==e.content&&O([].concat(Object(C.a)(h),[Object(c.jsxs)("div",{className:"chat__message chat__messageIn",children:[Object(c.jsx)("small",{children:e.username}),Object(c.jsx)("p",{children:e.content})]},Date.now())]))})),e.on("room-message",(function(e){e.roomId===a&&""!==e.content&&O([].concat(Object(C.a)(h),[Object(c.jsxs)("div",{className:"chat__message chat__messageIn",children:[Object(c.jsx)("small",{children:e.username}),Object(c.jsx)("p",{children:e.content})]},Date.now())]))}))}),[e,a,h]),Object(c.jsxs)("div",{id:"chatRoom",children:[Object(c.jsxs)("div",{id:"chatBody",children:[r[0]?null===r||void 0===r?void 0:r.sort((function(e,t){return e>t})).map((function(e){return e.sender!==n.id?Object(c.jsxs)("div",{className:"chat__message chat__messageIn",children:[Object(c.jsx)("small",{children:e.senderName}),Object(c.jsx)("p",{children:e.content})]},e._id):Object(c.jsxs)("div",{className:"chat__message chat__messageOut",children:[Object(c.jsx)("small",{children:"You"}),Object(c.jsx)("p",{children:e.content})]},e._id)})):0===r[0]?null:Object(c.jsx)("div",{children:"reloading......"}),null===h||void 0===h?void 0:h.map((function(e){return e}))]}),Object(c.jsxs)("div",{className:"right__send",children:[Object(c.jsx)("input",{type:"text",onChange:function(e){d(e.target.value)}}),Object(c.jsx)("button",{onClick:function(){return f()},children:"Send"})]})]})}var R=n(30);n(108);function B(){Object(l.c)((function(e){return e.target})),Object(l.c)((function(e){return e.user}));var e=Object(s.useState)(""),t=Object(v.a)(e,2);t[0],t[1],Object(l.b)();return Object(c.jsx)("div",{className:"right",children:Object(c.jsxs)(g.c,{children:[Object(c.jsx)(R.a,{path:"/users/:user",children:Object(c.jsx)(T,{})}),Object(c.jsx)(R.a,{path:"/rooms/:room",children:Object(c.jsx)(T,{})})]})})}n(109);function L(e){var t=e.socket,n=Object(l.b)(),a=Object(l.c)((function(e){return e.user})),r=Object(l.c)((function(e){return e.target})),o=Object(g.f)();return Object(s.useEffect)((function(){a.state&&(u.a.get("/chat/rooms").then((function(e){n(f(e.data))})).catch((function(e){return console.log(e)})),u.a.get("/chat/users").then((function(e){n(O(e.data))})).catch((function(e){return console.log(e)})))}),[a,n]),Object(s.useEffect)((function(){t.on("rooms-update",(function(e){e===r.roomname&&(o.push("/"),h({id:"",roomname:"",username:"",type:""})),u.a.get("/chat/rooms").then((function(e){n(f(e.data))})).catch((function(e){return console.log(e)}))})),t.on("users-up",(function(){u.a.get("/chat/users").then((function(e){n(O(e.data))})).catch((function(e){return console.log(e)}))}))}),[t,r,o,n]),Object(c.jsx)(c.Fragment,{children:a.state?Object(c.jsxs)("div",{className:"home",children:[Object(c.jsx)(x,{},"nav "),Object(c.jsxs)("div",{className:"home__body",children:[Object(c.jsx)(k,{},"left"),Object(c.jsx)(B,{},"right")]})]}):o.push("/auth")})}var A=n(7);n(110);function U(e){var t=e.socket,n=Object(l.c)((function(e){return e.user})),a=Object(s.useState)(""),r=Object(v.a)(a,2),o=r[0],i=r[1],d=Object(s.useState)(""),m=Object(v.a)(d,2),h=m[0],O=m[1],f=Object(s.useState)(""),x=Object(v.a)(f,2),_=x[0],y=x[1],w=Object(s.useState)(""),S=Object(v.a)(w,2),k=S[0],C=S[1],T=Object(s.useState)(""),R=Object(v.a)(T,2),B=R[0],L=R[1],U=Object(l.b)(),M=Object(g.f)();function P(e){var t=document.getElementById("login__bird"),n=document.getElementsByClassName("login__container__form");t.classList.contains("yellowBird")?(t.classList.remove("yellowBird"),t.classList.add("purpleBird")):(t.classList.remove("purpleBird"),t.classList.add("yellowBird"));for(var c=0;c<n.length;c++){var s=n[c];s===e.parentNode.parentNode?(s.style.width="0%",s.lastChild.classList.remove("shown")):(s.style.width="100%",s.lastChild.classList.add("shown"))}}function F(){return(F=Object(E.a)(N.a.mark((function e(n){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,u.a.post("/user/register",{username:B,email:_,password:k}).then((function(e){var n=e.data,c=n.type,s=n.message;U(b({type:c,message:s}));var a=document.getElementsByClassName("login__switch")[1];"success"===c&&(P(a),t.emit("user-register"))})).catch((function(e,t){return console.log(e,t)}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(){return(D=Object(E.a)(N.a.mark((function e(n){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,u.a.post("/user/login",{email:o,password:h}).then((function(e){var n=e.data,c=n.type,s=n.message,a=n.user;U(b({type:c,message:s})),a&&(t.emit("user-signin",a.id,a.username),U(j(Object(A.a)(Object(A.a)({},a),{},{state:!0}))),M.push("/"))})).catch((function(e){return console.log(e)}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(s.useEffect)((function(){document.getElementsByClassName("login__left")[0].style.width="100%";for(var e=document.getElementsByClassName("login__switch"),t=0;t<e.length;t++){e[t].addEventListener("click",(function(e){return P(e.currentTarget)}))}}),[]),Object(c.jsx)(c.Fragment,{children:!1!==n.state?M.push("/"):Object(c.jsx)("div",{className:"login",children:Object(c.jsxs)("div",{className:"login__container",children:[Object(c.jsx)(p.a,{className:"fa fa-kiwi-bird ",id:"login__bird"}),Object(c.jsxs)("div",{className:"login__container__form login__left login__select",children:[Object(c.jsx)("h1",{children:"Log-in"}),Object(c.jsxs)("form",{onSubmit:function(e){return function(e){return D.apply(this,arguments)}(e)},children:[Object(c.jsx)("label",{htmlFor:"loginEmail",children:"Email"}),Object(c.jsx)("input",{name:"loginEmail",type:"email",value:o,onChange:function(e){return i(e.target.value)},required:!0}),Object(c.jsx)("label",{htmlFor:"loginPassword",children:"Password"}),Object(c.jsx)("input",{type:"password",name:"loginPassword",value:h,onChange:function(e){return O(e.target.value)},required:!0}),Object(c.jsx)("button",{children:"Login"})]}),Object(c.jsxs)("p",{children:["-Not registered yet ",Object(c.jsx)("span",{className:"login__switch",children:"Register"})," "]})]},"login"),Object(c.jsxs)("div",{className:"login__container__form login__right",children:[Object(c.jsx)("h1",{children:"Register"}),Object(c.jsxs)("form",{onSubmit:function(e){return function(e){return F.apply(this,arguments)}(e)},children:[Object(c.jsx)("label",{htmlFor:"username",children:"Username"}),Object(c.jsx)("input",{name:"username",type:"text",value:B,onChange:function(e){L(e.target.value)},required:!0}),Object(c.jsx)("label",{htmlFor:"registerEmail",children:"Email"}),Object(c.jsx)("input",{name:"registerEmail",type:"email",value:_,onChange:function(e){return y(e.target.value)},required:!0}),Object(c.jsx)("label",{htmlFor:"registerPassword",children:"Password"}),Object(c.jsx)("input",{type:"password",name:"registerPassword",value:k,onChange:function(e){return C(e.target.value)},required:!0}),Object(c.jsx)("button",{type:"submit",children:"Register"})]}),Object(c.jsxs)("p",{children:["-Already have an account ",Object(c.jsx)("span",{className:"login__switch",children:"Log-in"})," "]})]},"register")]})},"login")})}var M=n(31);n(111);function P(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.user})),n=Object(l.c)((function(e){return e.alert})),a=Object(l.c)((function(e){return e.socket}));return Object(s.useEffect)((function(){e(h({type:"",id:"",roomname:"",username:""}))}),[t.id,e]),Object(s.useEffect)((function(){switch(n.type){case"success":M.b.success(n.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});break;case"warning":M.b.warn(n.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});break;case"error":M.b.error(n.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}}),[n]),Object(c.jsxs)("div",{className:"app",id:"app",children:[Object(c.jsx)(M.a,{}),Object(c.jsx)(R.a,{children:Object(c.jsxs)(g.c,{children:[Object(c.jsx)(g.a,{path:"/auth",children:Object(c.jsx)(U,{socket:a},"login")}),Object(c.jsx)(g.a,{path:"/",children:Object(c.jsx)(L,{socket:a},"home")})]})})]})}var F=n(35),D={socket:n(112)("http://localhost:5000/"),user:{state:!1,email:"",id:"",username:""},alert:{type:"",message:""},users:[],guests:[],rooms:[],target:{type:"",id:"",username:"",roomname:""},roomName:"",messages:[],chat:[]},I=Object(F.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return Object(A.a)(Object(A.a)({},e),{},{user:t.payload});case"SET_ALERT":return Object(A.a)(Object(A.a)({},e),{},{alert:t.payload});case"SET_TARGET":return Object(A.a)(Object(A.a)({},e),{},{target:t.payload});case"SET_USERS":return Object(A.a)(Object(A.a)({},e),{},{users:t.payload});case"SET_ROOMS":return Object(A.a)(Object(A.a)({},e),{},{rooms:t.payload});case"SET_ROOM_NAME":return Object(A.a)(Object(A.a)({},e),{},{roomName:t.payload});case"SET_MESSAGES":return Object(A.a)(Object(A.a)({},e),{},{messages:t.payload});case"SET_CHAT":return Object(A.a)(Object(A.a)({},e),{},{chat:t.payload});default:return e}}));o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(l.a,{store:I,children:Object(c.jsx)(P,{})})}),document.getElementById("root"))},77:function(e,t,n){},78:function(e,t,n){}},[[142,1,2]]]);
//# sourceMappingURL=main.0de910f2.chunk.js.map