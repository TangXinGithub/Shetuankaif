(function(e){function t(t){for(var s,n,c=t[0],l=t[1],o=t[2],d=0,u=[];d<c.length;d++)n=c[d],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&u.push(r[n][0]),r[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);f&&f(t);while(u.length)u.shift()();return i.push.apply(i,o||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],s=!0,c=1;c<a.length;c++){var l=a[c];0!==r[l]&&(s=!1)}s&&(i.splice(t--,1),e=n(n.s=a[0]))}return e}var s={},r={article:0},i=[];function n(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=s,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(a,s,function(t){return e[t]}.bind(null,s));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var o=0;o<c.length;o++)t(c[o]);var f=l;i.push([2,"chunk-vendors"]),a()})({2:function(e,t,a){e.exports=a("b2a1")},"39f5":function(e,t,a){},4370:function(e,t,a){"use strict";var s=a("4d3b"),r=a.n(s);r.a},4678:function(e,t,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=i(e);return a(t)}function i(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}r.keys=function(){return Object.keys(s)},r.resolve=i,e.exports=r,r.id="4678"},"4d3b":function(e,t,a){},7311:function(e,t,a){e.exports=a.p+"img/taxi-no-connection.5f234202.png"},"77ec":function(e,t,a){"use strict";var s=a("39f5"),r=a.n(s);r.a},b2a1:function(e,t,a){"use strict";a.r(t);var s=a("5530"),r=(a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("2b0e")),i=a("58ca"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"g-doc"},[a("ArticleLayout"),a("ArticleContent")],1)},c=[],l=(a("a9e3"),a("d3b7"),a("ac1f"),a("3ca3"),a("841c"),a("ddb0"),a("2b3d"),a("96cf"),a("1da1")),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Thumbnails")},f=[],d=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},u=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",[a("div",{staticClass:"overlay"},[a("h1",[e._v("Simply The Best")]),a("h3",[e._v("Reasons for Choosing US")]),a("p",[e._v("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab.")]),a("button",[e._v("READ MORE")])])])}],v={name:"Thumbnails"},b=v,h=(a("77ec"),a("2877")),m=Object(h["a"])(b,d,u,!1,null,"dbb425b0",null),j=m.exports,p={name:"ArticleLayout",components:{Thumbnails:j}},_=p,g=Object(h["a"])(_,o,f,!1,null,"5696ca42",null),k=g.exports,y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrapAll clearfix"},[e._m(0),a("div",{staticClass:"mainsection"},[e._m(1),e._m(2),a("div",{staticClass:"article"},[a("h1",[e._v("Simple Wikipedia Website Template")]),a("p",{staticClass:"siteSub"},[e._v("From Wikipedia, the free encyclopedia")]),a("p",{staticClass:"roleNote"},[e._v("This article is about the writing implement. For other uses, see Pencil (disambiguation).")]),e._m(3),e._m(4),a("div",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}]},[a("a-divider"),a("a-button",[e._v("附件区域 有则渲染")])],1),a("div",[a("a-divider"),e._m(5)],1),a("a-divider"),a("CommentBasic"),a("a-divider"),e._m(6)],1),e._m(7)])])},C=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"sidebar"},[s("div",{staticClass:"logo"},[s("a",{attrs:{href:"/"}},[s("img",{attrs:{src:a("7311"),alt:"logo"}})])]),s("div",{staticClass:"navigation"},[s("ul",[s("li",[s("a",{attrs:{href:"#"}},[e._v("Main page")])]),s("li",[s("a",{attrs:{href:"#"}},[e._v("Contents")])]),s("li",[s("a",{attrs:{href:"#"}},[e._v("Featured content")])])]),s("h3",[e._v("Interaction")]),s("ul",[s("li",[s("a",{attrs:{href:"#"}},[e._v("Help")])]),s("li",[s("a",{attrs:{href:"#"}},[e._v("About")])]),s("li",[s("a",{attrs:{href:"#"}},[e._v("Portal")])])]),s("h3",[e._v("Interaction")]),s("ul",[s("li",[s("a",{attrs:{href:"#"}},[e._v("Help")])]),s("li",[s("a",{attrs:{href:"#"}},[e._v("About")])]),s("li",[s("a",{attrs:{href:"#"}},[e._v("Portal")])])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"headerLinks"},[a("span",{staticClass:"user"},[e._v("Not logged in")]),e._v(" "),a("a",{attrs:{href:"#"}},[e._v("Talk")]),e._v(" "),a("a",{attrs:{href:"#"}},[e._v("Contributions")]),e._v(" "),a("a",{attrs:{href:"#"}},[e._v("Create account")]),e._v(" "),a("a",{attrs:{href:"#"}},[e._v("Log in")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"tabs clearfix"},[a("div",{staticClass:"tabsLeft"},[a("ul",[a("li",[a("a",{staticClass:"active",attrs:{href:"#"}},[e._v("Article")])]),a("li",[a("a",{attrs:{href:"#"}},[e._v("Talk")])])])]),a("div",{attrs:{id:"simpleSearch"}},[a("input",{attrs:{type:"text",name:"searchInput",id:"searchInput",placeholder:"Search Wikipedia",size:"12"}}),a("div",{attrs:{id:"submitSearch"}})]),a("div",{staticClass:"tabsRight"},[a("ul",[a("li",[a("a",{staticClass:"active",attrs:{href:"#"}},[e._v("Read")])]),a("li",[a("a",{attrs:{href:"#"}},[e._v("View source")])]),a("li",[a("a",{attrs:{href:"#"}},[e._v("View history")])])])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"articleRight"},[s("div",{staticClass:"articleRightInner"},[s("img",{attrs:{width:"200",src:a("7311"),alt:"pencil"}})]),e._v(" This is a blue "),s("a",{attrs:{href:""}},[e._v("pencil")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"contentsPanel"},[a("div",{staticClass:"contentsHeader"},[e._v("Contents")]),a("ul",[a("li",[a("span",[e._v("1")]),a("a",{attrs:{href:"#"}},[e._v("History")]),a("ul",[a("li",[a("span",[e._v("1.1")]),a("a",{attrs:{href:"#"}},[e._v("Camel's hair pencil")])]),a("li",[a("span",[e._v("1.2")]),a("a",{attrs:{href:"#"}},[e._v("Discovery of graphite deposit")])]),a("li",[a("span",[e._v("1.3")]),a("a",{attrs:{href:"#"}},[e._v("Wood holders added ")])]),a("li",[a("span",[e._v("1.4")]),a("a",{attrs:{href:"#"}},[e._v("The pencil in America ")])]),a("li",[a("span",[e._v("1.5")]),a("a",{attrs:{href:"#"}},[e._v("Eraser attached ")])]),a("li",[a("span",[e._v("1.6")]),a("a",{attrs:{href:"#"}},[e._v("Marking material ")])]),a("li",[a("span",[e._v("1.7")]),a("a",{attrs:{href:"#"}},[e._v("Pencil extenders ")])])])]),a("li",[a("span",[e._v("2")]),a("a",{attrs:{href:"#"}},[e._v("Health")])]),a("li",[a("span",[e._v("3")]),a("a",{attrs:{href:"#"}},[e._v("Manufacture")])]),a("li",[a("span",[e._v("4")]),a("a",{attrs:{href:"#"}},[e._v("Grading and classification")])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("a",{attrs:{href:"6311.htm"}},[e._v("上一篇：关于2020级新生查看课表上课的通知")])]),a("a",{attrs:{href:"6311.htm"}}),a("li",[a("a",{attrs:{href:"6311.htm"}}),a("a",{attrs:{href:"6271.htm"}},[e._v("下一篇：关于停开2020秋专业选修（限选）课和公共选修（任选）课的通知")])]),a("a",{attrs:{href:"6271.htm"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"categories"},[a("a",{attrs:{href:"#"}},[e._v("Minimum corrumpit ")]),e._v(" "),a("a",{attrs:{href:"#"}},[e._v("Regione suscipit ")]),e._v(" "),a("a",{attrs:{href:"#"}},[e._v("Has et partem ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pagefooter"},[e._v(" This page was last edited on 29.07.2017 | Template by "),a("a",{attrs:{href:"http://html5-templates.com/",target:"_blank",rel:"nofollow"}},[e._v("HTML5 Templates")]),e._v(" "),a("div",{staticClass:"footerlinks"},[a("a",{attrs:{href:"#"}},[e._v("Privacy policy")]),e._v(" "),a("a",{attrs:{href:"#"}},[e._v("About")]),e._v(" "),a("a",{attrs:{href:"#"}},[e._v("Terms and conditions")]),e._v(" "),a("a",{attrs:{href:"#"}},[e._v("Cookie statement")]),e._v(" "),a("a",{attrs:{href:"#"}},[e._v("Developers")])])])}],w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-comment",[a("template",{slot:"actions"},[a("span",{key:"comment-basic-like"},[a("a-tooltip",{attrs:{title:"Like"}},[a("a-icon",{attrs:{type:"like",theme:"liked"===e.action?"filled":"outlined"},on:{click:e.like}})],1),a("span",{staticStyle:{"padding-left":"'8px'",cursor:"'auto'"}},[e._v(" "+e._s(e.likes)+" ")])],1),a("span",{key:"comment-basic-dislike"},[a("a-tooltip",{attrs:{title:"Dislike"}},[a("a-icon",{attrs:{type:"dislike",theme:"disliked"===e.action?"filled":"outlined"},on:{click:e.dislike}})],1),a("span",{staticStyle:{"padding-left":"'8px'",cursor:"'auto'"}},[e._v(" "+e._s(e.dislikes)+" ")])],1),a("span",{key:"comment-basic-reply-to"},[e._v("Reply to")])]),a("a",{attrs:{slot:"author"},slot:"author"},[e._v("Han Solo")]),a("a-avatar",{attrs:{slot:"avatar",src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",alt:"Han Solo"},slot:"avatar"}),a("p",{attrs:{slot:"content"},slot:"content"},[e._v(" We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently. ")]),a("a-tooltip",{attrs:{slot:"datetime",title:e.moment().format("YYYY-MM-DD HH:mm:ss")},slot:"datetime"},[a("span",[e._v(e._s(e.moment().fromNow()))])])],2)},x=[],z=a("c1df"),O=a.n(z),E=a("f23d");a("202f");r["default"].use(E["a"]);var T={name:"CommentBasic",data:function(){return{likes:0,dislikes:0,action:null,moment:O.a}},methods:{like:function(){this.likes=1,this.dislikes=0,this.action="liked"},dislike:function(){this.likes=0,this.dislikes=1,this.action="disliked"}}},S=T,A=Object(h["a"])(S,w,x,!1,null,"5b7f6ee3",null),$=A.exports,P={name:"ArticleContent",components:{CommentBasic:$}},M=P,q=(a("4370"),Object(h["a"])(M,y,C,!1,null,"4a4b00a0",null)),H=q.exports,L={name:"index-app",components:{ArticleContent:H,ArticleLayout:k},data:function(){return{page:Number(new URLSearchParams(window.location.search).get("page"))||1,topics:[],hasEssay:!0}},mounted:function(){return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},metaInfo:{title:"文章"}},R=L,D=Object(h["a"])(R,n,c,!1,null,"24ffaf43",null),N=D.exports;r["default"].use(E["a"]),r["default"].use(i["a"]);var I=new r["default"](Object(s["a"])({},N));I.$mount("#app")}});