(function(e){function s(s){for(var n,o,i=s[0],c=s[1],u=s[2],p=0,f=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(s);while(f.length)f.shift()();return r.push.apply(r,u||[]),t()}function t(){for(var e,s=0;s<r.length;s++){for(var t=r[s],n=!0,i=1;i<t.length;i++){var c=t[i];0!==a[c]&&(n=!1)}n&&(r.splice(s--,1),e=o(o.s=t[0]))}return e}var n={},a={subscriber:0},r=[];function o(s){if(n[s])return n[s].exports;var t=n[s]={i:s,l:!1,exports:{}};return e[s].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=n,o.d=function(e,s,t){o.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:t})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,s){if(1&s&&(e=o(e)),8&s)return e;if(4&s&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var n in e)o.d(t,n,function(s){return e[s]}.bind(null,n));return t},o.n=function(e){var s=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(s,"a",s),s},o.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=s,i=i.slice();for(var u=0;u<i.length;u++)s(i[u]);var l=c;r.push([4,"chunk-vendors"]),t()})({4:function(e,s,t){e.exports=t("a3ca")},4678:function(e,s,t){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var s=r(e);return t(s)}function r(e){if(!t.o(n,e)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=r,e.exports=a,a.id="4678"},"66d3":function(e,s,t){"use strict";var n=t("a015"),a=t.n(n);a.a},"85aa":function(e,s,t){},"9b67":function(e,s,t){"use strict";var n=t("85aa"),a=t.n(n);a.a},"9c83":function(e,s,t){"use strict";var n=t("e12c"),a=t.n(n);a.a},a015:function(e,s,t){},a3ca:function(e,s,t){"use strict";t.r(s);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("2b0e"),a=t("58ca"),r=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("loginAndRegister")},o=[],i=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("a-row",[t("div",{staticClass:"nav"},[t("ul",{staticClass:"sidenav"},[t("li",[t("a",{staticClass:"active",attrs:{href:"#home"}},[e._v("主页")])]),t("li",[t("a",{attrs:{href:"#news"}},[e._v("新闻")])]),t("li",[t("a",{attrs:{href:"#contact"}},[e._v("联系")])]),t("li",{staticStyle:{float:"right","margin-right":"10vw"}},[t("a",{attrs:{href:"#about"}},[e._v("关于")])])])]),t("a-col",{attrs:{xs:{span:0,offset:0},lg:{span:6,offset:2}}}),t("a-col",{attrs:{xs:{span:11,offset:1},lg:{span:6,offset:2}}},[t("FromBody")],1)],1)},c=[],u=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ul",{staticClass:"circle-container"},e._l(8,(function(s){return t("neumorphism",{key:s,scopedSlots:e._u([{key:"boxImg",fn:function(){return[t("img",{attrs:{src:"http://lorempixel.com/100/100/city"}})]},proxy:!0},{key:"ImgName",fn:function(){return[t("p",[e._v("沒文憑"+e._s(s))])]},proxy:!0}],null,!0)})})),1)},l=[],p=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"neumorphism"},[t("div",{staticClass:"box"},[t("div",{staticClass:"boxImg"},[e._t("boxImg",[t("img",{attrs:{src:"http://lorempixel.com/100/100/city"}})])],2),e._t("ImgName",[t("p",[e._v("应用中心")])])],2)])},f=[],d={name:"neumorphism"},m=d,b=(t("9c83"),t("2877")),j=Object(b["a"])(m,p,f,!1,null,"3d76b478",null),_=j.exports,v={name:"circleAPPs",components:{Neumorphism:_}},g=v,h=(t("e626"),Object(b["a"])(g,u,l,!1,null,"3a8c5d9e",null)),w=h.exports,y=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"content shadow",class:{"s--signup":e.isActive}},[t("form",{on:{submit:e.checkSignInForm}},[t("div",{staticClass:"form sign-in"},[t("h2",[e._v("欢迎回来")]),t("label",[t("span",[e._v("学号 "+e._s(e.sno))]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.sno,expression:"sno"}],attrs:{type:"text",pattern:e.sno_pattern,title:e.sno_title,required:""},domProps:{value:e.sno},on:{input:function(s){s.target.composing||(e.sno=s.target.value)}}})]),t("label",[t("span",[e._v("密码"+e._s(e.password))]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",pattern:e.pass_pattern,title:e.pass_title,required:""},domProps:{value:e.password},on:{input:function(s){s.target.composing||(e.password=s.target.value)}}})]),e._m(0),t("button",{staticClass:"submit",attrs:{type:"submit"}},[e._v("登 录")]),e._m(1)])]),t("div",{staticClass:"sub-cont"},[t("div",{staticClass:"img"},[e._m(2),e._m(3),t("div",{staticClass:"img__btn",on:{click:function(s){e.isActive=!e.isActive}}},[t("span",{staticClass:"m--up"},[e._v("注 册")]),t("span",{staticClass:"m--in"},[e._v("登 录")])])]),t("form",{on:{submit:e.checkSignUpForm}},[t("div",{staticClass:"form sign-up"},[t("h2",[e._v("立即注册")]),t("label",[t("span",[e._v("学号")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.sign_up_sno,expression:"sign_up_sno"}],attrs:{type:"text",pattern:e.sno_pattern,title:e.sno_title,required:""},domProps:{value:e.sign_up_sno},on:{input:function(s){s.target.composing||(e.sign_up_sno=s.target.value)}}})]),t("label",[t("span",[e._v("姓名")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.sign_up_name,expression:"sign_up_name"}],attrs:{type:"text",pattern:e.username_pattern,title:e.username_title},domProps:{value:e.sign_up_name},on:{input:function(s){s.target.composing||(e.sign_up_name=s.target.value)}}})]),t("label",[t("span",[e._v("密码")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.sign_up_password,expression:"sign_up_password"}],attrs:{type:"password",pattern:e.pass_pattern,title:e.pass_title,required:""},domProps:{value:e.sign_up_password},on:{input:function(s){s.target.composing||(e.sign_up_password=s.target.value)}}})]),t("label",[t("span",[e._v("确认密码")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.sign_up_password_confirm,expression:"sign_up_password_confirm"}],attrs:{type:"password",pattern:e.pass_pattern,title:e.pass_title,required:""},domProps:{value:e.sign_up_password_confirm},on:{input:function(s){s.target.composing||(e.sign_up_password_confirm=s.target.value)}}})]),t("button",{staticClass:"submit",attrs:{type:"submit"}},[e._v("注 册")]),e._m(4)])])])])},k=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("p",{staticClass:"forgot-pass"},[t("a",{attrs:{href:"javascript:"}},[e._v("忘记密码？")])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("button",{staticClass:"fb-btn",attrs:{type:"button"}},[e._v("使用 "),t("span",[e._v("QQ")]),e._v(" 帐号登录")])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"img__text m--up"},[t("h2",[e._v("还未注册？")]),t("p",[e._v("立即注册，发现大量机会！")])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"img__text m--in"},[t("h2",[e._v("已有帐号？")]),t("p",[e._v("有帐号就登录吧，好久不见了！")])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("button",{staticClass:"fb-btn",attrs:{type:"button"}},[e._v("使用 "),t("span",[e._v("QQ")]),e._v(" 帐号注册")])}],x=(t("96cf"),t("1da1")),$=(t("4328"),{name:"FromBody",data:function(){return{isActive:!0,pass_pattern:"^[\\w_-]{3,10}$",pass_title:"3-10位 可以包含小写大母和大写字母数字下划线和减号",sno_pattern:"^\\d{3,11}$",sno_title:"3 到11位数字",username_pattern:"^[a-zA-Z一-龥][a-zA-Z0-9一-龥_-]{3,10}",username_title:"3 到10字符  首字母只能是大小写字母 小大写 数字 下划线  允许中文",errors:!1,sno:"",password:"",sign_up_sno:"",sign_up_password:"",sign_up_password_confirm:"",sign_up_name:"",mounted:function(){}}},methods:{checkSignInForm:function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(s){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s.preventDefault(),t=this,e.next=4,this.$axios.post("/api/login",null,{params:{Sno:this.sno,Password:this.password}}).then((function(e){window.console.log("login post"+e);var s=e.code;if(null!=s)switch(parseInt(e.code)){case 20:console.log("成功"),t.$message.success("登录成功"),t.$router.push({path:"/user"});break;case 21:console.log("用户不存在"),t.$message.error("用户不存在");break;case 22:console.log("密码错误"),t.$message.error("密码错误");break;default:console.log("未知错误"),t.$message.error("未知错误");break}else t.$message.error("返回空")})).catch((function(e){return console.log(e)}));case 4:case"end":return e.stop()}}),e,this)})));function s(s){return e.apply(this,arguments)}return s}(),checkSignUpForm:function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(s){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(s.preventDefault(),this.sign_up_password===this.sign_up_password_confirm){e.next=4;break}return this.$message.error("两次密码不一致"),e.abrupt("return");case 4:return t=this,e.next=7,this.$axios.post("/api/register",{sno:this.sign_up_sno,password:this.sign_up_password,sname:this.sign_up_name,scollege:"桂林理工大学",sex:"男",age:"18",joined:!1}).then((function(e){window.console.log("register post"+e);var s=e.code;if(null!=s)switch(parseInt(e.code)){case 30:console.log("成功"),t.$message.success("注册成功"),t.isActive=!1;break;case 31:console.log("用户已存在"),t.$message.error("用户已存在");break;case 32:console.log("用户格式不对"),t.$message.error("用户格式不对");break;default:console.log("密码格式不对或者"),t.$message.error("密码格式不对或者");break}else t.$message.error("返回空")})).catch((function(e){return console.log(e)}));case 7:case"end":return e.stop()}}),e,this)})));function s(s){return e.apply(this,arguments)}return s}(),validEmail:function(e){return!1}}}),z=$,C=(t("9b67"),Object(b["a"])(z,y,k,!1,null,"2bb86eae",null)),O=C.exports,P=t("9a63"),E=t("e32c");t("202f");n["default"].use(P["a"]),n["default"].use(E["a"]);var S={name:"LogIn_SignIn",components:{FromBody:O,CircleAPPs:w}},A=S,I=(t("66d3"),Object(b["a"])(A,i,c,!1,null,"8f93cb06",null)),N=I.exports,q={name:"subscriber",components:{loginAndRegister:N}},F=q,R=Object(b["a"])(F,r,o,!1,null,"52c42420",null),M=R.exports,D=(t("d3b7"),t("bc3a")),Q=t.n(D);Q.a.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),Q.a.interceptors.response.use((function(e){return console.log(e.data,"网络正常"),e.data}),(function(e){return console.log("网络开了小差！请重试..."),Promise.reject(e)}));var U=Q.a,B=t("f23d");n["default"].use(B["a"]),n["default"].prototype.$axios=U,n["default"].use(a["a"]),new n["default"]({render:function(e){return e(M)}}).$mount("#app")},e12c:function(e,s,t){},e626:function(e,s,t){"use strict";var n=t("ebe3"),a=t.n(n);a.a},ebe3:function(e,s,t){}});