(function(e){function t(t){for(var s,o,i=t[0],c=t[1],u=t[2],p=0,m=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&m.push(r[o][0]),r[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);l&&l(t);while(m.length)m.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],s=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(s=!1)}s&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var s={},r={subscriber:0},a=[];function o(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=s,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(n,s,function(t){return e[t]}.bind(null,s));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;a.push([4,"chunk-vendors","chunk-common"]),n()})({4:function(e,t,n){e.exports=n("a3ca")},6657:function(e,t,n){"use strict";var s=n("73d3"),r=n.n(s);r.a},"73d3":function(e,t,n){},"82f0":function(e,t,n){"use strict";var s=n("9384"),r=n.n(s);r.a},9384:function(e,t,n){},"9c83":function(e,t,n){"use strict";var s=n("e12c"),r=n.n(s);r.a},a3ca:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),r=n("58ca"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("loginAndRegister")},o=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-row",[n("div",{staticClass:"nav"},[n("ul",{staticClass:"sidenav"},[n("li",[n("a",{staticClass:"active",attrs:{href:e.env?"./sichuan.html":"./sichuan"}},[e._v("主页")])]),n("li",[n("a",{attrs:{href:e.env?"./history.html?ActID=1":"./history?ActID=1"}},[e._v("新闻")])]),n("li",[n("a",{attrs:{href:"#contact"}},[e._v("联系")])]),n("li",[n("a",{attrs:{href:"#contact"}},[e._v("关于")])]),n("li",{staticStyle:{float:"right","margin-right":"10vw"}},[n("a",{on:{click:e.showModal}},[e._v("管理员登录")])]),n("a-modal",{attrs:{title:"管理员登录","on-ok":"handleOk"},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[n("template",{slot:"footer"},[n("a-button",{key:"back",on:{click:e.handleCancel}},[e._v(" Return ")])],1),n("administrator")],2)],1)]),n("a-col",{attrs:{xs:{span:0,offset:0},lg:{span:6,offset:2}}}),n("a-col",{attrs:{xs:{span:11,offset:1},lg:{span:6,offset:2}}},[n("FromBody")],1)],1)},c=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"circle-container"},e._l(8,(function(t){return n("neumorphism",{key:t,scopedSlots:e._u([{key:"boxImg",fn:function(){return[n("img",{attrs:{src:"http://lorempixel.com/100/100/city"}})]},proxy:!0},{key:"ImgName",fn:function(){return[n("p",[e._v("沒文憑"+e._s(t))])]},proxy:!0}],null,!0)})})),1)},l=[],p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"neumorphism"},[n("div",{staticClass:"box"},[n("div",{staticClass:"boxImg"},[e._t("boxImg",[n("img",{attrs:{src:"http://lorempixel.com/100/100/city"}})])],2),e._t("ImgName",[n("p",[e._v("应用中心")])])],2)])},m=[],_={name:"neumorphism"},f=_,d=(n("9c83"),n("2877")),v=Object(d["a"])(f,p,m,!1,null,"3d76b478",null),g=v.exports,h={name:"circleAPPs",components:{Neumorphism:g}},b=h,w=(n("e626"),Object(d["a"])(b,u,l,!1,null,"3a8c5d9e",null)),y=w.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content shadow",class:{"s--signup":e.isActive}},[n("form",{on:{submit:e.checkSignInForm}},[n("div",{staticClass:"form sign-in"},[n("h2",[e._v("欢迎回来")]),n("label",[n("span",[e._v("学号 "+e._s(e.sno))]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.sno,expression:"sno"}],attrs:{type:"text",pattern:e.sno_pattern,title:e.sno_title,required:""},domProps:{value:e.sno},on:{input:function(t){t.target.composing||(e.sno=t.target.value)}}})]),n("label",[n("span",[e._v("密码"+e._s(e.password))]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",pattern:e.pass_pattern,title:e.pass_title,required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),e._m(0),n("button",{staticClass:"submit",attrs:{type:"submit"}},[e._v("登 录")]),e._m(1)])]),n("div",{staticClass:"sub-cont"},[n("div",{staticClass:"img"},[e._m(2),e._m(3),n("div",{staticClass:"img__btn",on:{click:function(t){e.isActive=!e.isActive}}},[n("span",{staticClass:"m--up"},[e._v("注 册")]),n("span",{staticClass:"m--in"},[e._v("登 录")])])]),n("form",{on:{submit:e.checkSignUpForm}},[n("div",{staticClass:"form sign-up"},[n("h2",[e._v("立即注册")]),n("label",[n("span",[e._v("学号")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.sign_up_sno,expression:"sign_up_sno"}],attrs:{type:"text",pattern:e.sno_pattern,title:e.sno_title,required:""},domProps:{value:e.sign_up_sno},on:{input:function(t){t.target.composing||(e.sign_up_sno=t.target.value)}}})]),n("label",[n("span",[e._v("姓名")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.sign_up_name,expression:"sign_up_name"}],attrs:{type:"text",pattern:e.username_pattern,title:e.username_title},domProps:{value:e.sign_up_name},on:{input:function(t){t.target.composing||(e.sign_up_name=t.target.value)}}})]),n("label",[n("span",[e._v("密码")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.sign_up_password,expression:"sign_up_password"}],attrs:{type:"password",pattern:e.pass_pattern,title:e.pass_title,required:""},domProps:{value:e.sign_up_password},on:{input:function(t){t.target.composing||(e.sign_up_password=t.target.value)}}})]),n("label",[n("span",[e._v("确认密码")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.sign_up_password_confirm,expression:"sign_up_password_confirm"}],attrs:{type:"password",pattern:e.pass_pattern,title:e.pass_title,required:""},domProps:{value:e.sign_up_password_confirm},on:{input:function(t){t.target.composing||(e.sign_up_password_confirm=t.target.value)}}})]),n("button",{staticClass:"submit",attrs:{type:"submit"}},[e._v("注 册")]),e._m(4)])])])])},k=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"forgot-pass"},[n("a",{attrs:{href:"javascript:"}},[e._v("忘记密码？")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"fb-btn",attrs:{type:"button"}},[e._v("使用 "),n("span",[e._v("QQ")]),e._v(" 帐号登录")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"img__text m--up"},[n("h2",[e._v("还未注册？")]),n("p",[e._v("立即注册，发现大量机会！")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"img__text m--in"},[n("h2",[e._v("已有帐号？")]),n("p",[e._v("有帐号就登录吧，好久不见了！")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"fb-btn",attrs:{type:"button"}},[e._v("使用 "),n("span",[e._v("QQ")]),e._v(" 帐号注册")])}],$=(n("96cf"),n("1da1")),C=(n("4328"),{name:"FromBody",data:function(){return{isActive:!0,pass_pattern:"^[\\w_-]{3,10}$",pass_title:"3-10位 可以包含小写大母和大写字母数字下划线和减号",sno_pattern:"^\\d{3,11}$",sno_title:"3 到11位数字",username_pattern:"^[a-zA-Z一-龥][a-zA-Z0-9一-龥_-]{3,10}",username_title:"3 到10字符  首字母只能是大小写字母 小大写 数字 下划线  允许中文",errors:!1,sno:"",password:"",sign_up_sno:"",sign_up_password:"",sign_up_password_confirm:"",sign_up_name:"",mounted:function(){}}},methods:{checkSignInForm:function(){var e=Object($["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.preventDefault(),n=this,e.next=4,this.$axios.post("/api/login",null,{params:{Sno:this.sno,Password:this.password}}).then((function(e){window.console.log("login post"+e);var t=e.code;if(null!=t)switch(parseInt(e.code.code)){case 20:console.log("成功"),n.$message.success("登录成功"),localStorage.Sno=n.sno,n.$router.push({path:"/user"});break;case 21:console.log("用户不存在"),n.$message.error("用户不存在");break;case 22:console.log("密码错误"),n.$message.error("密码错误");break;default:console.log("未知错误"),n.$message.error("未知错误");break}else n.$message.error("返回空")})).catch((function(e){return console.log(e)}));case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),checkSignUpForm:function(){var e=Object($["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.preventDefault(),this.sign_up_password===this.sign_up_password_confirm){e.next=4;break}return this.$message.error("两次密码不一致"),e.abrupt("return");case 4:return n=this,e.next=7,this.$axios.post("/api/register",{sno:this.sign_up_sno,password:this.sign_up_password,sname:this.sign_up_name,scollege:"桂林理工大学",sex:"男",age:18,joined:!1}).then((function(e){window.console.log("register post"+e);var t=e.code;if(null!=t)switch(parseInt(e.code)){case 30:console.log("成功"),n.$message.success("注册成功"),n.isActive=!1;break;case 31:console.log("用户已存在"),n.$message.error("用户已存在");break;case 32:console.log("用户格式不对"),n.$message.error("用户格式不对");break;default:console.log("密码格式不对或者"),n.$message.error("密码格式不对或者");break}else n.$message.error("返回空")})).catch((function(e){return console.log(e)}));case 7:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),validEmail:function(e){return!1}}}),j=C,O=(n("6657"),Object(d["a"])(j,x,k,!1,null,"46a52e8e",null)),P=O.exports,S=n("9a63"),A=n("e32c"),I=(n("202f"),n("4b0e"));s["default"].use(S["a"]),s["default"].use(A["a"]);var E={name:"LogIn_SignIn",components:{Administrator:I["a"],FromBody:P,CircleAPPs:y},data:function(){return{env:!0,loading:!1,visible:!1}},methods:{showModal:function(){this.visible=!0},handleOk:function(e){var t=this;this.loading=!0,setTimeout((function(){t.visible=!1,t.loading=!1}),3e3)},handleCancel:function(e){this.visible=!1}}},N=E,F=(n("82f0"),Object(d["a"])(N,i,c,!1,null,"2303e06a",null)),R=F.exports,q={name:"subscriber",components:{loginAndRegister:R}},M=q,D=Object(d["a"])(M,a,o,!1,null,"52c42420",null),Q=D.exports,B=(n("d3b7"),n("bc3a")),T=n.n(B);T.a.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),T.a.interceptors.response.use((function(e){return console.log(e.data,"网络正常"),e.data}),(function(e){return console.log("网络开了小差！请重试..."),Promise.reject(e)}));var z=T.a,J=n("f23d");s["default"].use(J["a"]),s["default"].prototype.$axios=z,s["default"].use(r["a"]),new s["default"]({render:function(e){return e(Q)}}).$mount("#app")},e12c:function(e,t,n){},e626:function(e,t,n){"use strict";var s=n("ebe3"),r=n.n(s);r.a},ebe3:function(e,t,n){}});