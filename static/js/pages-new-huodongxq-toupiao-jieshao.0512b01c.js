(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-new-huodongxq-toupiao-jieshao"],{"0237":function(t,e,n){"use strict";n.r(e);var a=n("3a62"),r=n.n(a);for(var u in a)["default"].indexOf(u)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(u);e["default"]=r.a},"3a62":function(t,e,n){"use strict";n("7a82");var a=n("ee27").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("f07e")),u=a(n("c964")),i={data:function(){return{newsData:{}}},onLoad:function(t){this.initData(t)},methods:{initData:function(t){var e=this;return(0,u.default)((0,r.default)().mark((function n(){var a;return(0,r.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.request({url:e.interfaces.getActivitiesInfo,data:t,method:"POST"});case 2:a=n.sent,e.newsData=a.data.activitiesInfo,console.log(e.newsData);case 5:case"end":return n.stop()}}),n)})))()}}};e.default=i},"4b5b":function(t,e,n){"use strict";n.r(e);var a=n("76d0"),r=n("0237");for(var u in r)["default"].indexOf(u)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(u);var i=n("f0c5"),s=Object(i["a"])(r["default"],a["b"],a["c"],!1,null,"24d6634c",null,!1,a["a"],void 0);e["default"]=s.exports},"76d0":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return a}));var a={uParse:n("7f99").default},r=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"app"},[e("u-parse",{attrs:{html:this.newsData.remark}})],1)},u=[]}}]);