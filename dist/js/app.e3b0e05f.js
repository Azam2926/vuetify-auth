(function(e){function t(t){for(var r,s,i=t[0],c=t[1],l=t[2],d=0,u=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&u.push(n[s][0]),n[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);h&&h(t);while(u.length)u.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,s=1;s<a.length;s++){var c=a[s];0!==n[c]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},n={app:0},o=[];function s(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"8a0be7d9"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(e){var t=[],a=n[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,r){a=n[e]=[t,r]}));t.push(a[2]=r);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=s(e);var l=new Error;o=function(t){c.onerror=c.onload=null,clearTimeout(d);var a=n[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,a[1](l)}n[e]=void 0}};var d=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var h=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("router-view",[e._v(" asd ")])},o=[],s=a("2877"),i={},c=Object(s["a"])(i,n,o,!1,null,null,null),l=c.exports,d=a("f309");r["a"].use(d["a"]);var h=new d["a"]({theme:{dark:!0}}),u=(a("45fc"),a("d3b7"),a("8c4f")),m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("HelloWorld")],1)},p=[],f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",{staticClass:"text-center"},[r("v-col",{attrs:{cols:"12"}},[r("v-img",{staticClass:"my-3",attrs:{src:a("9b19"),contain:"",height:"200"}})],1),r("v-col",{staticClass:"mb-4"},[r("h1",{staticClass:"display-2 font-weight-bold mb-3"},[e._v(" Welcome to Vuetify ")])])],1)],1)},v=[],g={name:"HelloWorld"},w=g,b=a("6544"),y=a.n(b),x=a("62ad"),_=a("a523"),k=a("adda"),V=a("0fd9"),C=Object(s["a"])(w,f,v,!1,null,null,null),T=C.exports;y()(C,{VCol:x["a"],VContainer:_["a"],VImg:k["a"],VRow:V["a"]});var P={name:"Home",components:{HelloWorld:T}},j=P,O=Object(s["a"])(j,m,p,!1,null,null,null),$=O.exports,S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("AppBar"),a("v-main",[a("router-view")],1),a("v-footer",{attrs:{app:"",padless:""}},[a("v-card",{staticClass:"flex",attrs:{flat:"",tile:""}},[a("v-card-text",{staticClass:"py-2 text-center"},[e._v(" "+e._s((new Date).getFullYear())+" — "),a("strong",[e._v("iazam")])])],1)],1)],1)},A=[],E=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app-bar",{attrs:{app:""}},[a("div",{staticClass:"d-flex align-center"},[a("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-"+e.theme+".png",transition:"scale-transition",width:"40"}}),a("v-img",{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-"+e.theme+".png",width:"100"}})],1),a("v-spacer"),a("v-btn",{staticClass:"mx-3",attrs:{color:"success",text:"",to:"/"}},[e._v(" Home ")]),a("v-btn",{attrs:{color:"success",text:"",to:"/about"}},[e._v(" About ")]),a("v-btn",{staticClass:"ml-5",attrs:{fab:"",small:""},on:{click:e.toggleTheme}},[a("v-icon",[e._v("mdi-invert-colors")])],1)],1)},I=[],M={name:"AppBar",data:function(){return{theme:"",selectedItem:1,items:[{text:"Real-Time",icon:"mdi-clock"},{text:"Audience",icon:"mdi-account"},{text:"Conversions",icon:"mdi-flag"}]}},methods:{toggleTheme:function(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark,this.$vuetify.theme.dark?this.changeTheme("dark"):this.changeTheme("light")},changeTheme:function(e){this.theme=e,localStorage.setItem("theme",e)}},created:function(){var e=this;localStorage.getItem("theme")?this.theme=localStorage.getItem("theme"):window.matchMedia("(prefers-color-scheme: dark)").matches?this.changeTheme("dark"):this.changeTheme("light"),this.$vuetify.theme.dark="dark"===this.theme,window.matchMedia("(prefers-color-scheme: dark)").addListener((function(t){t.matches?e.changeTheme("dark"):e.changeTheme("light"),e.$vuetify.theme.dark="dark"===e.theme,console.log("changed to ".concat(t.matches?"dark":"light"," mode"))}))}},L=M,F=a("40dc"),B=a("8336"),H=a("132d"),R=a("2fa4"),W=Object(s["a"])(L,E,I,!1,null,"45ee816b",null),q=W.exports;y()(W,{VAppBar:F["a"],VBtn:B["a"],VIcon:H["a"],VImg:k["a"],VSpacer:R["a"]});var N={name:"Main",components:{AppBar:q}},U=N,z=a("7496"),D=a("b0af"),J=a("99d9"),Y=a("553a"),G=a("f6c4"),K=Object(s["a"])(U,S,A,!1,null,"4f871980",null),Q=K.exports;y()(K,{VApp:z["a"],VCard:D["a"],VCardText:J["b"],VFooter:Y["a"],VMain:G["a"]});var X=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-main",[a("router-view")],1),a("v-footer",{attrs:{app:"",padless:""}},[a("v-card",{staticClass:"flex",attrs:{flat:"",tile:""}},[a("v-card-text",{staticClass:"py-2 text-center"},[e._v(" "+e._s((new Date).getFullYear())+" — "),a("strong",[e._v("iazam")]),a("v-btn",{staticClass:"float-right",attrs:{fab:"",small:""},on:{click:e.toggleTheme}},[a("v-icon",[e._v("mdi-invert-colors")])],1)],1)],1)],1)],1)},Z=[],ee={name:"Auth",data:function(){return{theme:""}},methods:{toggleTheme:function(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark,this.$vuetify.theme.dark?this.changeTheme("dark"):this.changeTheme("light")},changeTheme:function(e){this.theme=e,localStorage.setItem("theme",e)}},created:function(){var e=this;localStorage.getItem("theme")?this.theme=localStorage.getItem("theme"):window.matchMedia("(prefers-color-scheme: dark)").matches?this.changeTheme("dark"):this.changeTheme("light"),this.$vuetify.theme.dark="dark"===this.theme,window.matchMedia("(prefers-color-scheme: dark)").addListener((function(t){t.matches?e.changeTheme("dark"):e.changeTheme("light"),e.$vuetify.theme.dark="dark"===e.theme,console.log("changed to ".concat(t.matches?"dark":"light"," mode"))}))}},te=ee,ae=Object(s["a"])(te,X,Z,!1,null,"5afc6308",null),re=ae.exports;y()(ae,{VApp:z["a"],VBtn:B["a"],VCard:D["a"],VCardText:J["b"],VFooter:Y["a"],VIcon:H["a"],VMain:G["a"]});var ne=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{staticClass:"mt-16 mb-5 mx-auto px-5 py-5 ",attrs:{width:"350",shaped:"",elevation:"24"}},[a("v-card-title",[a("h1",[e._v("Login")])]),a("v-card-text",[a("v-form",[a("v-text-field",{attrs:{label:"Username","prepend-icon":"mdi-account-circle"}}),a("v-text-field",{attrs:{type:e.showPassword?"text":"password",label:"Password","prepend-icon":"mdi-lock"}},[a("v-icon",{staticStyle:{cursor:"pointer"},attrs:{slot:"append"},on:{"!click":function(t){e.showPassword=!e.showPassword}},slot:"append"},[e._v(" "+e._s(e.showPassword?"mdi-eye":"mdi-eye-off")+" ")])],1)],1)],1),a("v-card-actions",[a("v-btn",{attrs:{text:"",color:"success",to:"/register"}},[e._v("Register")]),a("v-spacer"),a("v-btn",{attrs:{color:"primary"}},[e._v("Login")])],1)],1)},oe=[],se={name:"Login",data:function(){return{showPassword:!1}}},ie=se,ce=a("4bd4"),le=a("8654"),de=Object(s["a"])(ie,ne,oe,!1,null,"8578ed18",null),he=de.exports;y()(de,{VBtn:B["a"],VCard:D["a"],VCardActions:J["a"],VCardText:J["b"],VCardTitle:J["c"],VForm:ce["a"],VIcon:H["a"],VSpacer:R["a"],VTextField:le["a"]});var ue=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{staticClass:"mt-16 mb-5 mx-auto px-5 py-5 ",attrs:{width:"350",shaped:"",elevation:"24"}},[a("v-card-title",[a("h1",[e._v("Register")])]),a("v-card-text",[a("v-form",[a("v-text-field",{attrs:{label:"Username","prepend-icon":"mdi-account-circle"}}),a("v-text-field",{attrs:{type:e.showPassword?"text":"password",label:"Password","prepend-icon":"mdi-lock"}},[a("v-icon",{staticStyle:{cursor:"pointer"},attrs:{slot:"append"},on:{"!click":function(t){e.showPassword=!e.showPassword}},slot:"append"},[e._v(" "+e._s(e.showPassword?"mdi-eye":"mdi-eye-off")+" ")])],1),a("v-text-field",{attrs:{type:e.showPassword?"text":"password",label:"Confirm password","prepend-icon":"mdi-lock"}},[a("v-icon",{staticStyle:{cursor:"pointer"},attrs:{slot:"append"},on:{"!click":function(t){e.showPassword=!e.showPassword}},slot:"append"},[e._v(" "+e._s(e.showPassword?"mdi-eye":"mdi-eye-off")+" ")])],1)],1)],1),a("v-card-actions",[a("v-btn",{attrs:{text:"",color:"success",to:"/login"}},[e._v("Login")]),a("v-spacer"),a("v-btn",{attrs:{color:"primary"}},[e._v("Register")])],1)],1)},me=[],pe={name:"Login",data:function(){return{showPassword:!1}}},fe=pe,ve=Object(s["a"])(fe,ue,me,!1,null,"345eefec",null),ge=ve.exports;y()(ve,{VBtn:B["a"],VCard:D["a"],VCardActions:J["a"],VCardText:J["b"],VCardTitle:J["c"],VForm:ce["a"],VIcon:H["a"],VSpacer:R["a"],VTextField:le["a"]});var we=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h1",[e._v("Not found")])},be=[],ye={name:"NotFound"},xe=ye,_e=Object(s["a"])(xe,we,be,!1,null,"436d7b3f",null),ke=_e.exports;r["a"].use(u["a"]);var Ve=[{path:"/",name:"Main",component:Q,children:[{path:"home",name:"Home",component:$},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/error",name:"Error",component:ke}],meta:{requiresAuth:!0}},{path:"/auth",name:"Auth",component:re,children:[{path:"login",name:"login",component:he},{path:"register",name:"register",component:ge}]},{path:"/login",redirect:"/auth/login"},{path:"/register",redirect:"/auth/register"},{path:"/main",redirect:"/"},{path:"*",redirect:"/error"}],Ce=new u["a"]({mode:"history",routes:Ve});Ce.beforeEach((function(e,t,a){e.matched.some((function(e){return e.meta.requiresAuth}))?null==localStorage.getItem("jwt")&&a({path:"/login",params:{nextUrl:e.fullPath}}):a()}));var Te=Ce;r["a"].config.productionTip=!1,new r["a"]({vuetify:h,router:Te,render:function(e){return e(l)}}).$mount("#app")},"9b19":function(e,t,a){e.exports=a.p+"img/logo.63a7d78d.svg"}});
//# sourceMappingURL=app.e3b0e05f.js.map