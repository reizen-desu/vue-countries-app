(function(t){function e(e){for(var s,i,o=e[0],c=e[1],l=e[2],d=0,p=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(s=!1)}s&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},n={app:0},r=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/vue-countries-app/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"01ca":function(t,e,a){},1148:function(t,e,a){},"1dbc":function(t,e,a){"use strict";a("9eaf")},2351:function(t,e,a){"use strict";a("703b")},"27ed":function(t,e,a){},2805:function(t,e,a){},"2cb0":function(t,e,a){"use strict";a("1148")},"336f":function(t,e,a){"use strict";a("01ca")},"48c0":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"app-wrapper",class:{"app-wrapper--dark":t.isDark},attrs:{id:"app"}},[e("navbar"),e("router-view"),t._m(0)],1)},r=[function(){var t=this,e=t._self._c;return e("footer",[e("div",[e("h4",[t._v("Reizen Dos Santos - DAW 2022")])])])}],i=a("2f62"),o=function(){var t=this,e=t._self._c;return e("nav",{staticClass:"navbar",class:{"navbar--dark":t.isDark}},[e("router-link",{staticClass:"navbar__logo",attrs:{to:"/"}},[t._v("Where in the world?")]),t.isDark?e("div",{staticClass:"navbar__theme",on:{click:t.changeTheme}},[e("moon-icon"),e("span",[t._v("Dark Mode")])],1):e("div",{staticClass:"navbar__theme",on:{click:t.changeTheme}},[e("sun-icon"),e("span",[t._v("Light Mode")])],1)],1)},c=[],l=function(){var t=this,e=t._self._c;return e("svg",{staticClass:"sun-icon",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[e("title",[t._v("Light Theme")]),e("path",{attrs:{d:"M256 118a22 22 0 01-22-22V48a22 22 0 0144 0v48a22 22 0 01-22 22zM256 486a22 22 0 01-22-22v-48a22 22 0 0144 0v48a22 22 0 01-22 22zM369.14 164.86a22 22 0 01-15.56-37.55l33.94-33.94a22 22 0 0131.11 31.11l-33.94 33.94a21.93 21.93 0 01-15.55 6.44zM108.92 425.08a22 22 0 01-15.55-37.56l33.94-33.94a22 22 0 1131.11 31.11l-33.94 33.94a21.94 21.94 0 01-15.56 6.45zM464 278h-48a22 22 0 010-44h48a22 22 0 010 44zM96 278H48a22 22 0 010-44h48a22 22 0 010 44zM403.08 425.08a21.94 21.94 0 01-15.56-6.45l-33.94-33.94a22 22 0 0131.11-31.11l33.94 33.94a22 22 0 01-15.55 37.56zM142.86 164.86a21.89 21.89 0 01-15.55-6.44l-33.94-33.94a22 22 0 0131.11-31.11l33.94 33.94a22 22 0 01-15.56 37.55zM256 358a102 102 0 11102-102 102.12 102.12 0 01-102 102z"}})])},u=[],d={name:"SunIcon"},p=d,_=a("2877"),h=Object(_["a"])(p,l,u,!1,null,null,null),m=h.exports,v=function(){var t=this,e=t._self._c;return e("svg",{staticClass:"moon-icon",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[e("title",[t._v("Dark Theme")]),e("path",{attrs:{d:"M264 480A232 232 0 0132 248c0-94 54-178.28 137.61-214.67a16 16 0 0121.06 21.06C181.07 76.43 176 104.66 176 136c0 110.28 89.72 200 200 200 31.34 0 59.57-5.07 81.61-14.67a16 16 0 0121.06 21.06C442.28 426 358 480 264 480z"}})])},f=[],y={name:"MoonIcon"},g=y,C=Object(_["a"])(g,v,f,!1,null,null,null),b=C.exports,k={components:{SunIcon:m,MoonIcon:b},name:"Navbar",data(){return{}},computed:{...Object(i["c"])(["isDark"])},methods:{...Object(i["b"])(["switchTheme"]),changeTheme(){this.isDark?document.body.style.backgroundColor="hsl(0, 0%, 100%)":document.body.style.backgroundColor="hsl(207, 26%, 17%)",this.switchTheme()}}},w=k,D=(a("9bf0"),Object(_["a"])(w,o,c,!1,null,null,null)),O=D.exports,j={name:"App",components:{Navbar:O},computed:{...Object(i["c"])(["isDark"])}},x=j,S=Object(_["a"])(x,n,r,!1,null,null,null),T=S.exports,A=a("8c4f"),M=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("filter-section"),t.filteredCountries.length>0?e("grid-container",t._l(t.filteredCountries,(function(t,a){return e("country-card",{key:a,attrs:{countryData:t}})})),1):e("loading")],1)},I=[],R=function(){var t=this,e=t._self._c;return e("div",{staticClass:"country-card",class:{"country-card--dark":t.isDark},on:{click:t.goCountryDetailPage}},[e("div",{staticClass:"country-card__imgbox"},[e("img",{staticClass:"country-card__img",attrs:{src:t.countryData.flag,alt:"flag"}})]),e("div",{staticClass:"country-card__body"},[e("h3",{staticClass:"country-card__title"},[t._v(t._s(t.countryData.name))]),e("li",{staticClass:"country-card__list-item"},[e("span",{staticClass:"boldish"},[t._v("Population: ")]),e("span",[t._v(t._s(t._f("showDecimalPoint")(t.countryData.population)))])]),e("li",{staticClass:"country-card__list-item"},[e("span",{staticClass:"boldish"},[t._v("Region: ")]),e("span",[t._v(t._s(t.countryData.region))])]),e("li",{staticClass:"country-card__list-item"},[e("span",{staticClass:"boldish"},[t._v("Capital: ")]),e("span",[t._v(t._s(t.countryData.capital))])])])])},E=[],L=(a("14d9"),{filters:{showDecimalPoint(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}}}),P={name:"CountryCard",props:{countryData:Object},computed:{...Object(i["c"])(["isDark"])},mixins:[L],methods:{goCountryDetailPage(){this.$router.push({path:"/"+this.countryData.name})}}},N=P,B=(a("1dbc"),Object(_["a"])(N,R,E,!1,null,null,null)),z=B.exports,H=function(){var t=this,e=t._self._c;return e("div",{staticClass:"filters-container"},[e("div",{staticClass:"filters-container__searchbox"},[e("custom-input",{attrs:{placeholder:"Search for a country ...",type:"text"}})],1),e("div",{staticClass:"filters-container__dropdown"},[e("vue-select",{attrs:{placeholder:"Filter by Region",options:["All","Asia","Africa","Europe","Americas","Oceania"]}})],1)])},G=[],U=function(){var t=this,e=t._self._c;return e("div",{staticClass:"custom-input"},[e("div",{staticClass:"custom-input__search-icon",class:{"custom-input__search-icon--dark":t.isDark}},[e("search-icon")],1),"checkbox"===t.type?e("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"custom-input__field",class:{"custom-input__field--dark":t.isDark},attrs:{placeholder:t.placeholder,type:"checkbox"},domProps:{value:t.keyword,checked:Array.isArray(t.keyword)?t._i(t.keyword,t.keyword)>-1:t.keyword},on:{change:function(e){var a=t.keyword,s=e.target,n=!!s.checked;if(Array.isArray(a)){var r=t.keyword,i=t._i(a,r);s.checked?i<0&&(t.keyword=a.concat([r])):i>-1&&(t.keyword=a.slice(0,i).concat(a.slice(i+1)))}else t.keyword=n}}}):"radio"===t.type?e("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"custom-input__field",class:{"custom-input__field--dark":t.isDark},attrs:{placeholder:t.placeholder,type:"radio"},domProps:{value:t.keyword,checked:t._q(t.keyword,t.keyword)},on:{change:function(e){t.keyword=t.keyword}}}):e("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"custom-input__field",class:{"custom-input__field--dark":t.isDark},attrs:{placeholder:t.placeholder,type:t.type},domProps:{value:t.keyword,value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}}),e("div",{staticClass:"custom-input__close-icon",class:{"custom-input__close-icon--dark":t.isDark},on:{click:t.clearSearch}},[e("close-icon")],1)])},F=[],Q=function(){var t=this,e=t._self._c;return e("svg",{staticClass:"search-icon",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[e("title",[t._v("Search")]),e("path",{attrs:{d:"M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z",fill:"none","stroke-miterlimit":"10","stroke-width":"32"}}),e("path",{attrs:{fill:"none","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"32",d:"M338.29 338.29L448 448"}})])},W=[],$={name:"SearchIcon"},V=$,J=Object(_["a"])(V,Q,W,!1,null,null,null),q=J.exports,K=function(){var t=this,e=t._self._c;return e("svg",{staticClass:"close-icon",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[e("title",[t._v("Close")]),e("path",{attrs:{fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M368 368L144 144M368 144L144 368"}})])},X=[],Y={name:"CloseIcon"},Z=Y,tt=Object(_["a"])(Z,K,X,!1,null,null,null),et=tt.exports,at={components:{SearchIcon:q,CloseIcon:et},name:"CustomInput",props:{placeholder:String,type:String},computed:{...Object(i["c"])(["isDark"])},data(){return{keyword:null,timeoutQuery:null}},methods:{...Object(i["b"])(["searchCountries","getAllCountries"]),clearSearch(){this.keyword=null}},watch:{keyword(t){this.timeoutQuery&&clearTimeout(this.timeoutQuery),this.timeoutQuery=t?setTimeout(()=>this.searchCountries(t),300):setTimeout(()=>this.getAllCountries())}}},st=at,nt=(a("db41"),Object(_["a"])(st,U,F,!1,null,null,null)),rt=nt.exports,it=function(){var t=this,e=t._self._c;return e("div",{staticClass:"select-dropdown",class:{"select-dropdown--dark":t.isDark}},[e("vSelect",{attrs:{placeholder:t.placeholder,options:t.options},model:{value:t.region,callback:function(e){t.region=e},expression:"region"}})],1)},ot=[],ct=a("4a7a"),lt=a.n(ct),ut=(a("6dfc"),{name:"VueSelect",components:{vSelect:lt.a},props:{options:Array,placeholder:String},data(){return{region:this.options[0]}},computed:{...Object(i["c"])(["isDark"])},methods:{...Object(i["b"])(["filterRegion"])},watch:{region(t){this.filterRegion(t)}}}),dt=ut,pt=(a("ad05"),Object(_["a"])(dt,it,ot,!1,null,null,null)),_t=pt.exports,ht={name:"FilterSection",components:{VueSelect:_t,CustomInput:rt}},mt=ht,vt=(a("ad6a"),Object(_["a"])(mt,H,G,!1,null,null,null)),ft=vt.exports,yt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"grid-container"},[t._t("default")],2)},gt=[],Ct={name:"GridContainer"},bt=Ct,kt=(a("2351"),Object(_["a"])(bt,yt,gt,!1,null,null,null)),wt=kt.exports,Dt=function(){var t=this,e=t._self._c;return e("h1",{staticClass:"loading"},[t._v("Loading ...")])},Ot=[],jt={name:"Loading"},xt=jt,St=(a("f163"),Object(_["a"])(xt,Dt,Ot,!1,null,null,null)),Tt=St.exports,At={name:"Home",components:{FilterSection:ft,GridContainer:wt,CountryCard:z,Loading:Tt},computed:{...Object(i["c"])(["countries","region"]),filteredCountries(){return"All"===this.region||null===this.region?this.countries:this.countries.filter(t=>t.region===this.region)}},methods:{...Object(i["b"])(["getAllCountries","filterRegion"])},watch:{region(t){null===t&&this.filterRegion(null)}},mounted(){this.getAllCountries()}},Mt=At,It=(a("336f"),Object(_["a"])(Mt,M,I,!1,null,null,null)),Rt=It.exports,Et=function(){var t=this,e=t._self._c;return e("div",{staticClass:"country-detail"},[e("button",{staticClass:"country-detail__btn",class:{"country-detail__btn--dark":t.isDark},on:{click:t.goBack}},[e("back-icon"),e("span",{staticClass:"country-detail__btn-text"},[t._v("Go Back")])],1),e("country-detail-card",{attrs:{countryData:t.countryData}})],1)},Lt=[],Pt=function(){var t=this,e=t._self._c;return t.countryData?e("div",{staticClass:"detail-card"},[e("div",{staticClass:"detail-card__imgbox"},[e("img",{staticClass:"detail-card__img",attrs:{src:t.countryData.flag,alt:t.countryData.name}})]),e("div",{staticClass:"detail-card__body"},[e("div",{staticClass:"detail-card__title"},[t._v(t._s(t.countryData.name))]),e("div",{staticClass:"detail-card__grid-container",class:{"detail-card__grid-container--dark":t.isDark}},[e("div",{staticClass:"detail-card__left-grid"},[e("li",{staticClass:"detail-card__list-item"},[e("span",{staticClass:"boldish"},[t._v("Native Name:")]),e("span",[t._v(" "+t._s(t.countryData.nativeName))])]),e("li",{staticClass:"detail-card__list-item"},[e("span",{staticClass:"boldish"},[t._v("Population:")]),e("span",[t._v(" "+t._s(t._f("showDecimalPoint")(t.countryData.population)))])]),e("li",{staticClass:"detail-card__list-item"},[e("span",{staticClass:"boldish"},[t._v("Region:")]),e("span",[t._v(" "+t._s(t.countryData.region))])]),e("li",{staticClass:"detail-card__list-item"},[e("span",{staticClass:"boldish"},[t._v("Sub Region:")]),e("span",[t._v(" "+t._s(t.countryData.subregion))])]),e("li",{staticClass:"detail-card__list-item"},[e("span",{staticClass:"boldish"},[t._v("Capital:")]),e("span",[t._v(" "+t._s(t.countryData.capital))])])]),e("div",{staticClass:"detail-card__right-grid"},[e("li",{staticClass:"detail-card__list-item"},[e("span",{staticClass:"boldish"},[t._v("Top Level Domain:")]),e("span",[t._v(" "+t._s(t.countryData.topLevelDomain[0])+" ")])]),e("li",{staticClass:"detail-card__list-item"},[e("span",{staticClass:"boldish"},[t._v("Currencies:")]),e("span",[t._v(" "+t._s(t.currencies)+" ")])]),e("li",{staticClass:"detail-card__list-item"},[e("span",{staticClass:"boldish"},[t._v("Languages:")]),e("span",[t._v(" "+t._s(t.languages))])])])]),e("div",{staticClass:"detail-card__footer"},[e("div",{staticClass:"boldish"},[t._v("Border Countries:")]),e("div",{staticClass:"detail-card__border-countries"},t._l(t.borderCountries,(function(a,s){return e("div",{key:s,staticClass:"detail-card__border-country"},[t._v(" "+t._s(a)+" ")])})),0)])])]):e("loading")},Nt=[],Bt={components:{Loading:Tt},name:"CountryDetailCard",props:{countryData:Object},mixins:[L],computed:{...Object(i["c"])(["isDark","countries"]),currencies(){return this.countryData.currencies.map(t=>t.name).join(", ")},languages(){return this.countryData.languages.map(t=>t.name).join(", ")},borderCountries(){var t;const e=[];return null===(t=this.countryData.borders)||void 0===t||t.forEach(t=>{const a=this.countries.find(e=>e.alpha3Code===t);e.push(a.name)}),e}}},zt=Bt,Ht=(a("f1c7"),Object(_["a"])(zt,Pt,Nt,!1,null,null,null)),Gt=Ht.exports,Ut=function(){var t=this,e=t._self._c;return e("svg",{staticClass:"back-icon",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[e("title",[t._v("Return Up Back")]),e("path",{attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M112 160l-64 64 64 64"}}),e("path",{attrs:{d:"M64 224h294c58.76 0 106 49.33 106 108v20",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}})])},Ft=[],Qt={name:"BackIcon"},Wt=Qt,$t=Object(_["a"])(Wt,Ut,Ft,!1,null,null,null),Vt=$t.exports,Jt={components:{BackIcon:Vt,CountryDetailCard:Gt},name:"CountryDetail",computed:{...Object(i["c"])(["isDark","countries"]),countryData(){return this.countries.find(t=>t.name===this.$route.params.country)}},methods:{...Object(i["b"])(["getAllCountries"]),goBack(){this.$router.push({path:"/"})}},mounted(){this.getAllCountries()}},qt=Jt,Kt=(a("2cb0"),Object(_["a"])(qt,Et,Lt,!1,null,null,null)),Xt=Kt.exports;s["a"].use(A["a"]);const Yt=[{path:"/",name:"Home",component:Rt},{path:"/:country",name:"CountryDetail",component:Xt}],Zt=new A["a"]({mode:"history",base:"/vue-countries-app/",routes:Yt});var te=Zt,ee=a("bc3a"),ae=a.n(ee);s["a"].use(i["a"]);var se=new i["a"].Store({state:{isDark:!1,countries:[],region:"All"},mutations:{SWITCH_THEME(t){t.isDark=!t.isDark},GET_ALL_COUNTRIES(t,e){t.countries=e},SEARCH_COUNTRIES(t,e){t.countries=e},FILTER_REGION(t,e){t.region=e}},actions:{switchTheme({commit:t}){t("SWITCH_THEME")},async getAllCountries({commit:t}){try{const e=await ae.a.get("https://restcountries.com/v2/all");t("GET_ALL_COUNTRIES",e.data)}catch(e){console.log(e.message)}},async searchCountries(t,e){ae.a.get("https://restcountries.com/v2/name/"+e).then(e=>{404===e.data.status?t.commit("SEARCH_COUNTRIES",[]):t.commit("SEARCH_COUNTRIES",e.data)}).catch(t=>{console.log(t.message)})},filterRegion(t,e){t.commit("FILTER_REGION",e)}},modules:{}});s["a"].config.productionTip=!1,new s["a"]({router:te,store:se,render:t=>t(T)}).$mount("#app")},"703b":function(t,e,a){},"71ce":function(t,e,a){},"818d":function(t,e,a){},"9bf0":function(t,e,a){"use strict";a("d9f0")},"9eaf":function(t,e,a){},ad05:function(t,e,a){"use strict";a("71ce")},ad6a:function(t,e,a){"use strict";a("2805")},d9f0:function(t,e,a){},db41:function(t,e,a){"use strict";a("48c0")},f163:function(t,e,a){"use strict";a("818d")},f1c7:function(t,e,a){"use strict";a("27ed")}});
//# sourceMappingURL=app.60f99d64.js.map