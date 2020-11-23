(this["webpackJsonpreact-home"]=this["webpackJsonpreact-home"]||[]).push([[0],{194:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(1),r=n.n(s),c=n(27),o=n.n(c),i=n(17),l=(n(81),n(5)),d=n(6),u=n(12),j=n(8),h=n(7),b=n(14),m=n(4),g=(n(82),n(83),n(28)),O=n.n(g),p=n(21),v=n.n(p),f=n(29),x=n.n(f),y="REGISTER_SUCCESS",N="REGISTER_FAIL",k="LOGIN_SUCCESS",S="LOGIN_FAIL",w="LOGOUT",C="SET_MESSAGE",L="CLEAR_MESSAGE",B=n(20),E=n.n(B),I=window.location.href.split("/");I[2]="localhost:3000"===I[2]?"localhost:8080":I[2];var U=I[0]+"//"+I[2],T="".concat(U,"/api/auth/"),P=new(function(){function e(){Object(l.a)(this,e)}return Object(d.a)(e,[{key:"login",value:function(e,t){return E.a.post(T+"signin",{username:e,password:t}).then((function(e){return e.data.accessToken&&localStorage.setItem("user",JSON.stringify(e.data)),e.data}))}},{key:"logout",value:function(){localStorage.removeItem("user")}},{key:"register",value:function(e,t,n){return E.a.post(T+"signup",{username:e,email:t,password:n})}}]),e}()),M=function(e){if(!e)return Object(a.jsx)("div",{className:"alert alert-danger",role:"alert",children:"This field is required!"})},A=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleLogin=a.handleLogin.bind(Object(u.a)(a)),a.onChangeUsername=a.onChangeUsername.bind(Object(u.a)(a)),a.onChangePassword=a.onChangePassword.bind(Object(u.a)(a)),a.state={username:"",password:"",loading:!1},a}return Object(d.a)(n,[{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"handleLogin",value:function(e){var t=this;e.preventDefault(),this.setState({loading:!0}),this.form.validateAll();var n,a,s=this.props,r=s.dispatch,c=s.history;0===this.checkBtn.context._errors.length?r((n=this.state.username,a=this.state.password,function(e){return P.login(n,a).then((function(t){return e({type:k,payload:{user:t}}),Promise.resolve()}),(function(t){var n=t.response&&t.response.data&&t.response.data.message||t.message||t.toString();return e({type:S}),e({type:C,payload:n}),Promise.reject()}))})).then((function(){c.push("/profile"),window.location.reload()})).catch((function(){t.setState({loading:!1})})):this.setState({loading:!1})}},{key:"render",value:function(){var e=this,t=this.props,n=t.isLoggedIn,s=t.message;return n?Object(a.jsx)(m.a,{to:"/profile"}):Object(a.jsx)("div",{className:"col-md-12",children:Object(a.jsxs)("div",{className:"card card-container",children:[Object(a.jsx)("img",{src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png",alt:"profile-img",className:"profile-img-card"}),Object(a.jsxs)(O.a,{onSubmit:this.handleLogin,ref:function(t){e.form=t},children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"username",children:"Username"}),Object(a.jsx)(v.a,{type:"text",className:"form-control",name:"username",value:this.state.username,onChange:this.onChangeUsername,validations:[M]})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"password",children:"Password"}),Object(a.jsx)(v.a,{type:"password",className:"form-control",name:"password",value:this.state.password,onChange:this.onChangePassword,validations:[M]})]}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsxs)("button",{className:"btn btn-primary btn-block",disabled:this.state.loading,children:[this.state.loading&&Object(a.jsx)("span",{className:"spinner-border spinner-border-sm"}),Object(a.jsx)("span",{children:"Login"})]})}),s&&Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("div",{className:"alert alert-danger",role:"alert",children:s})}),Object(a.jsx)(x.a,{style:{display:"none"},ref:function(t){e.checkBtn=t}})]})]})})}}]),n}(s.Component);var R=Object(i.b)((function(e){return{isLoggedIn:e.auth.isLoggedIn,message:e.message.message}}))(A),_=n(66),D=function(e){if(!e)return Object(a.jsx)("div",{className:"alert alert-danger",role:"alert",children:"This field is required!"})},F=function(e){if(!Object(_.isEmail)(e))return Object(a.jsx)("div",{className:"alert alert-danger",role:"alert",children:"This is not a valid email."})},G=function(e){if(e.length<3||e.length>20)return Object(a.jsx)("div",{className:"alert alert-danger",role:"alert",children:"The username must be between 3 and 20 characters."})},J=function(e){if(e.length<6||e.length>40)return Object(a.jsx)("div",{className:"alert alert-danger",role:"alert",children:"The password must be between 6 and 40 characters."})},q=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleRegister=a.handleRegister.bind(Object(u.a)(a)),a.onChangeUsername=a.onChangeUsername.bind(Object(u.a)(a)),a.onChangeEmail=a.onChangeEmail.bind(Object(u.a)(a)),a.onChangePassword=a.onChangePassword.bind(Object(u.a)(a)),a.state={username:"",email:"",password:"",successful:!1},a}return Object(d.a)(n,[{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"onChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"handleRegister",value:function(e){var t,n,a,s=this;e.preventDefault(),this.setState({successful:!1}),this.form.validateAll(),0===this.checkBtn.context._errors.length&&this.props.dispatch((t=this.state.username,n=this.state.email,a=this.state.password,function(e){return P.register(t,n,a).then((function(t){return e({type:y}),e({type:C,payload:t.data.message}),Promise.resolve()}),(function(t){var n=t.response&&t.response.data&&t.response.data.message||t.message||t.toString();return e({type:N}),e({type:C,payload:n}),Promise.reject()}))})).then((function(){s.setState({successful:!0})})).catch((function(){s.setState({successful:!1})}))}},{key:"render",value:function(){var e=this,t=this.props.message;return Object(a.jsx)("div",{className:"col-md-12",children:Object(a.jsxs)("div",{className:"card card-container",children:[Object(a.jsx)("img",{src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png",alt:"profile-img",className:"profile-img-card"}),Object(a.jsxs)(O.a,{onSubmit:this.handleRegister,ref:function(t){e.form=t},children:[!this.state.successful&&Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"username",children:"Username"}),Object(a.jsx)(v.a,{type:"text",className:"form-control",name:"username",value:this.state.username,onChange:this.onChangeUsername,validations:[D,G]})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"email",children:"Email"}),Object(a.jsx)(v.a,{type:"text",className:"form-control",name:"email",value:this.state.email,onChange:this.onChangeEmail,validations:[D,F]})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"password",children:"Password"}),Object(a.jsx)(v.a,{type:"password",className:"form-control",name:"password",value:this.state.password,onChange:this.onChangePassword,validations:[D,J]})]}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("button",{className:"btn btn-primary btn-block",children:"Sign Up"})})]}),t&&Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("div",{className:this.state.successful?"alert alert-success":"alert alert-danger",role:"alert",children:t})}),Object(a.jsx)(x.a,{style:{display:"none"},ref:function(t){e.checkBtn=t}})]})]})})}}]),n}(s.Component);var H=Object(i.b)((function(e){return{message:e.message.message}}))(q),W=n(37),z=n.n(W);function K(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.accessToken?{"x-access-token":e.accessToken}:{}}var Q=window.location.href.split("/");Q[2]="localhost:3000"===Q[2]?"localhost:8080":Q[2];var V=Q[0]+"//"+Q[2],X="".concat(V,"/api/test/"),Y=new(function(){function e(){Object(l.a)(this,e)}return Object(d.a)(e,[{key:"getPublicContent",value:function(){return E.a.get(X+"all")}},{key:"getUserBoard",value:function(){return E.a.get(X+"user",{headers:K()})}},{key:"getModeratorBoard",value:function(){return E.a.get(X+"mod",{headers:K()})}},{key:"getAdminBoard",value:function(){return E.a.get(X+"admin",{headers:K()})}}]),e}()),Z=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={content:""},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;Y.getPublicContent().then((function(t){e.setState({content:t.data})}),(function(t){e.setState({content:t.response&&t.response.data||t.message||t.toString()})}))}},{key:"render",value:function(){return Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("header",{className:"jumbotron",children:Object(a.jsx)("div",{children:z()(this.state.content)})})})}}]),n}(s.Component),$=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.user;return e?Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("header",{className:"jumbotron",children:Object(a.jsx)("h3",{children:"My Profile"})}),Object(a.jsxs)("p",{children:[Object(a.jsx)("strong",{children:"User:"})," ",e.username]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("strong",{children:"Token:"})," ",e.accessToken.substring(0,20)," ..."," ",e.accessToken.substr(e.accessToken.length-20)]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("strong",{children:"Id:"})," ",e.id]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("strong",{children:"Email:"})," ",e.email]}),Object(a.jsx)("strong",{children:"Authorities:"}),Object(a.jsx)("ul",{children:e.roles&&e.roles.map((function(e,t){return Object(a.jsx)("li",{children:e},t)}))}),Object(a.jsxs)("p",{children:[Object(a.jsx)("strong",{children:"Pylbs:"})," ",e.Pylbs]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("center",{children:Object(a.jsx)("h1",{children:"latest Pylb"})}),Object(a.jsx)("table",{class:"table",children:Object(a.jsx)("tr",{children:Object(a.jsxs)("center",{children:[Object(a.jsx)("img",{src:"/img/hotjar_logo.png",class:"company-logo"}),Object(a.jsx)("img",{src:"/img/plus.png",class:"plus-sign"}),Object(a.jsx)("img",{src:"/img/google_analytics.png",class:"company-logo"})]})})})]})]}):Object(a.jsx)(m.a,{to:"/login"})}}]),n}(s.Component);var ee=Object(i.b)((function(e){return{user:e.auth.user}}))($),te=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={content:""},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;Y.getUserBoard().then((function(t){e.setState({content:t.data})}),(function(t){e.setState({content:t.response&&t.response.data&&t.response.data.message||t.message||t.toString()})}))}},{key:"render",value:function(){return Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("header",{className:"jumbotron",children:Object(a.jsx)("h3",{children:this.state.content})})})}}]),n}(s.Component),ne=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={content:""},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;Y.getModeratorBoard().then((function(t){e.setState({content:t.data})}),(function(t){e.setState({content:t.response&&t.response.data&&t.response.data.message||t.message||t.toString()})}))}},{key:"render",value:function(){return Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("header",{className:"jumbotron",children:Object(a.jsx)("h3",{children:this.state.content})})})}}]),n}(s.Component),ae=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={content:""},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;Y.getAdminBoard().then((function(t){e.setState({content:t.data})}),(function(t){e.setState({content:t.response&&t.response.data&&t.response.data.message||t.message||t.toString()})}))}},{key:"render",value:function(){return Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("header",{className:"jumbotron",children:Object(a.jsx)("h3",{children:this.state.content})})})}}]),n}(s.Component),se=n(67),re=Object(se.a)(),ce=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).logOut=a.logOut.bind(Object(u.a)(a)),a.state={showModeratorBoard:!1,showAdminBoard:!1,currentUser:void 0},re.listen((function(t){e.dispatch({type:L})})),a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.user;e&&this.setState({currentUser:e,showModeratorBoard:e.roles.includes("ROLE_MODERATOR"),showAdminBoard:e.roles.includes("ROLE_ADMIN")})}},{key:"logOut",value:function(){this.props.dispatch((function(e){P.logout(),e({type:w})}))}},{key:"render",value:function(){var e=this.state,t=e.currentUser,n=e.showModeratorBoard,s=e.showAdminBoard;return Object(a.jsx)(b.a,{history:re,children:Object(a.jsxs)("div",{children:[Object(a.jsxs)("nav",{className:"navbar navbar-expand navbar-dark bg-dark",children:[Object(a.jsx)(b.b,{to:"/",className:"navbar-brand",children:"Pylb"}),Object(a.jsxs)("div",{className:"navbar-nav mr-auto",children:[Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(b.b,{to:"/home",className:"nav-link",children:"Home"})}),n&&Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(b.b,{to:"/mod",className:"nav-link",children:"Moderator Board"})}),s&&Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(b.b,{to:"/admin",className:"nav-link",children:"Admin Board"})}),t&&Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(b.b,{to:"/user",className:"nav-link",children:"User"})})]}),t?Object(a.jsxs)("div",{className:"navbar-nav ml-auto",children:[Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(b.b,{to:"/profile",className:"nav-link",children:t.username})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)("a",{href:"/login",className:"nav-link logout",onClick:this.logOut,children:"Log Out"})})]}):Object(a.jsxs)("div",{className:"navbar-nav ml-auto",children:[Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(b.b,{to:"/login",className:"nav-link login",children:"Login"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(b.b,{to:"/register",className:"nav-link signup",children:"Sign Up"})})]})]}),Object(a.jsx)("div",{className:"container mt-3",children:Object(a.jsxs)(m.d,{children:[Object(a.jsx)(m.b,{exact:!0,path:["/","/home"],component:Z}),Object(a.jsx)(m.b,{exact:!0,path:"/login",component:R}),Object(a.jsx)(m.b,{exact:!0,path:"/register",component:H}),Object(a.jsx)(m.b,{exact:!0,path:"/profile",component:ee}),Object(a.jsx)(m.b,{path:"/user",component:te}),Object(a.jsx)(m.b,{path:"/mod",component:ne}),Object(a.jsx)(m.b,{path:"/admin",component:ae})]})})]})})}}]),n}(s.Component);var oe=Object(i.b)((function(e){return{user:e.auth.user}}))(ce),ie=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,195)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),r(e),c(e)}))},le=n(19),de=n(68),ue=n(69),je=n(16),he=JSON.parse(localStorage.getItem("user")),be=he?{isLoggedIn:!0,user:he}:{isLoggedIn:!1,user:null},me={},ge=Object(le.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case y:case N:return Object(je.a)(Object(je.a)({},e),{},{isLoggedIn:!1});case k:return Object(je.a)(Object(je.a)({},e),{},{isLoggedIn:!0,user:a.user});case S:case w:return Object(je.a)(Object(je.a)({},e),{},{isLoggedIn:!1,user:null});default:return e}},message:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case C:return{message:a};case L:return{message:""};default:return e}}}),Oe=[ue.a],pe=Object(le.createStore)(ge,Object(de.composeWithDevTools)(le.applyMiddleware.apply(void 0,Oe)));o.a.render(Object(a.jsx)(i.a,{store:pe,children:Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(oe,{})})}),document.getElementById("root")),ie()},81:function(e,t,n){},83:function(e,t,n){}},[[194,1,2]]]);
//# sourceMappingURL=main.1d9b9e73.chunk.js.map