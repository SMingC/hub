(function(){"use strict";var t={3977:function(t,s,e){var r,i,a=e(6369),n=function(){var t=this,s=t._self._c;return s("div",[s("router-view")],1)},o=[],c={components:{}},l=c,p=e(1001),d=(0,p.Z)(l,n,o,!1,null,null,null),u=d.exports,v=e(2631),f=function(){var t=this,s=t._self._c;return s("div",{staticClass:"ALL"},[s("HomeTop"),s("HomeCenter",{staticStyle:{"margin-top":"100px"}}),s("News",{staticStyle:{"margin-top":"100px"}})],1)},m=[],C=function(){var t=this,s=t._self._c;return s("div",{staticClass:"Wrapper"},[s("div",{staticClass:"Text"},[t._v("NCHU_200hub")]),s("div",{staticClass:"ContentWrapper"},[s("div",{staticClass:"description"},[s("div",{staticClass:"spring"},[t._v("多少游春意 🔥")]),t._m(0),t._m(1),s("div",{staticClass:"HomeButtonWrapper"},[s("HomeButton",{attrs:{isColorReversed:!1,description:"让我康康",where:"/video"}}),s("HomeButton",{attrs:{isColorReversed:!0,description:"关于我们",where:"/about"}})],1)]),s("TeamAll",{attrs:{url:t.cartoonUrls[0].teamCard.url}})],1),s("div",{staticClass:"CardsWrapper"},[s("div",{staticClass:"cardTitle"},[t._v("TEAM sofar...")]),s("div",{staticClass:"Cards"},t._l(t.cartoonUrls[0].cartoonCardsCollection.items,(function(t,e){return s("CartoonCard",{key:e,attrs:{url:t.url}})})),1)])])},h=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"intersting"},[t._v(" Something "),s("br"),t._v(" Interesting ")])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"poem"},[s("div",{staticClass:"poemText"},[t._v("寸心誓与长相守")]),s("div",{staticClass:"poemText"},[t._v("止华凄冷蓼花愁")]),s("div",{staticClass:"poemText"},[t._v("挑尽寒灯到夜深")]),s("div",{staticClass:"poemText"},[t._v("战和何者是良筹")])])}],g=(e(1703),function(){var t=this,s=t._self._c;return s("router-link",{staticClass:"HomeButton",attrs:{to:t.where}},[s("div",{class:t.isColorReversed?"BlackTangle":"PurpleTangle",staticStyle:{position:"relative"}},[t._v(" "+t._s(t.description)+" "),s("div",{class:t.isColorReversed?"PurpleTangle":"BlackTangle",staticStyle:{position:"absolute","z-index":"-10",left:"5px",top:"-10px",width:"120px",height:"55px"}})])])}),_=[],x={name:"HomeButton",props:["isColorReversed","description","where"]},b=x,k=(0,p.Z)(b,g,_,!1,null,"78db962a",null),T=k.exports,w=function(){var t=this,s=t._self._c;return s("div",{staticClass:"cardWrapper"},[s("img",{attrs:{src:t.url,alt:"cartoon"}})])},W=[],y={props:["url"]},S=y,Z=(0,p.Z)(S,w,W,!1,null,"f2546a66",null),B=Z.exports,$=function(){var t=this,s=t._self._c;return s("div",{staticClass:"Team"},[s("img",{attrs:{src:t.url,alt:"teamAll"}}),s("div",{staticClass:"NamesTangle"},[s("div",{staticClass:"Names"},t._l(t.names,(function(e,r){return s("div",{key:r,staticClass:"name"},[t._v(" "+t._s(e)+" ")])})),0)]),s("MicleBird",{staticClass:"micleBird"}),s("Liner",{staticClass:"liner"})],1)},H=[],L=function(){var t=this,s=t._self._c;return s("iframe",{staticClass:"MicleBird",staticStyle:{position:"absolute",width:"300px",height:"200px"},attrs:{src:"https://embed.lottiefiles.com/animation/112646"}})},O=[],N={},I=(0,p.Z)(N,L,O,!1,null,"d1200888",null),U=I.exports,P=function(){var t=this,s=t._self._c;return s("iframe",{staticClass:"Liner",staticStyle:{position:"absolute"},attrs:{src:"https://embed.lottiefiles.com/animation/1624"}})},A=[],M={},R=(0,p.Z)(M,P,A,!1,null,"0fe37f49",null),D=R.exports,j={components:{MicleBird:U,Liner:D},props:["url"],data(){return{names:["MCS","MHW","ZZT"]}}},E=j,F=(0,p.Z)(E,$,H,!1,null,"328f8b93",null),V=F.exports,q={components:{HomeButton:T,CartoonCard:B,TeamAll:V},data(){return{cartoonUrls:[]}},async created(){this.cartoonUrls=await this.getcartoonUrl(),console.log(this.cartoonUrls)},methods:{getcartoonUrl:async()=>{const t="{\n        nchu200HubCollection {\n          items{\n            cartoonCardsCollection{\n              items{\n                url\n              }\n            }\n            teamCard{\n              url\n            }\n          }\n        }\n      }",s="https://graphql.contentful.com/content/v1/spaces/74yzokv24sw6/",e={method:"POST",headers:{Authorization:"Bearer TUJJhlAKkF5WxTyRJkAmLgKEyVLn2UqRL9kVLbDq9ks","Content-Type":"application/json"},body:JSON.stringify({query:t})};try{const t=await fetch(s,e).then((t=>t.json()));return t.data.nchu200HubCollection.items}catch(r){throw new Error("Could not receive the data from Contentful!")}}}},J=q,z=(0,p.Z)(J,C,h,!1,null,"aa9f160c",null),G=z.exports,K=function(){var t=this,s=t._self._c;return s("div",{staticClass:"AboutWrapper"},[s("div",{staticClass:"AboutContent"},[s("div",{staticClass:"aboutTop"},[s("router-link",{staticClass:"search",attrs:{to:"search"}},[s("img",{attrs:{src:e(1868),alt:"search"}}),s("div",{staticClass:"signText"},[t._v("注册")])]),s("router-link",{staticClass:"signIn",attrs:{to:"/login"}},[s("img",{attrs:{src:e(3761),alt:"user"}}),s("div",{staticClass:"signText"},[t._v("登陆")])])],1),t._m(0),s("div",{staticClass:"footer"},t._l(t.texts,(function(e,r){return s("div",{key:r,staticClass:"footerText"},[t._v(" "+t._s(e)+" ")])})),0),s("img",{staticClass:"illustration",attrs:{src:e(6668),alt:"cardHello"}}),s("div",{staticClass:"poText"},[t._v("建议少冲")]),s("iframe",{staticClass:"rock",attrs:{src:"https://embed.lottiefiles.com/animation/5306"}})])])},Q=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"aboutCenter"},[s("div",{staticClass:"title"},[t._v("CanCanNeed")]),s("div",{staticClass:"description"},[t._v(" 在这里，你可以看到我们 精心挑选出来，好康的 **😍 ")]),s("div",{staticClass:"text"},[t._v("Do you Love Or .....?")])])}],X={data(){return{texts:["Have fun!","take easy","wdnmd"]}}},Y=X,tt=(0,p.Z)(Y,K,Q,!1,null,"4aa7987d",null),st=tt.exports,et=function(){var t=this,s=t._self._c;return s("div",{staticClass:"Wrapper"},[s("NewsInformation"),s("div",{ref:"cards",staticClass:"HoverCards"},[s("TeamCard",{staticClass:"teamCard"}),s("FarmCard",{ref:"farmCard",staticClass:"farmCard"})],1),s("div",{ref:"cooks",staticClass:"cook"},[s("Cook",{ref:"cookCard"})],1),s("div",{staticClass:"Pick"},[s("Pick",{ref:"pickUp"})],1),s("div",{ref:"pick",staticClass:"hand"},[s("Hand")],1)],1)},rt=[],it=function(){var t=this;t._self._c;return t._m(0)},at=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"Wrapper"},[s("div",{staticClass:"topWrapper"},[s("div",{staticClass:"LeftText"},[t._v("News")])]),s("div",{staticClass:"ContentWrapper"},[s("div",{staticClass:"Description"},[s("div",{staticClass:"NewsText"},[t._v("活动消息")]),s("div",{staticClass:"actionText"},[t._v("hub最新活动介绍")]),s("div",{staticClass:"description"},[t._v(" It is updated from time to time, if you need to contact us to put your favorite hub, please contact us "),s("img",{staticClass:"textCover",attrs:{src:e(3916),alt:"Cover"}})])]),s("div",{staticClass:"ImageBottom"},[s("img",{staticClass:"woman",attrs:{src:e(4166),alt:"WomanFlower"}}),s("img",{staticClass:"splice",attrs:{src:e(8960),alt:"splice"}}),s("div",{staticClass:"BlurRightBack"})])])])}],nt={},ot=nt,ct=(0,p.Z)(ot,it,at,!1,null,"dfd55b40",null),lt=ct.exports,pt=function(){var t=this,s=t._self._c;return s("div",{ref:"wrapper",staticClass:"Wrapper"},[t._m(0)])},dt=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"ContentWrapper"},[s("div",{staticClass:"TopWrapper"},[s("img",{staticClass:"farmIcon",attrs:{src:e(5143),alt:"farmIcon"}}),s("div",{staticClass:"Title"},[t._v("正缺人手....")])]),s("div",{staticClass:"CenterWrapper"},[s("div",{staticClass:"description"},[s("div",{staticClass:"TextAddimage"},[s("img",{staticClass:"N",attrs:{src:e(7716),alt:"N"}}),s("div",{staticClass:"newsLeft"},[t._v("ews")])]),s("div",{staticClass:"Action"},[t._v("好的网站😏"),s("br"),t._v("需要大家共同维护")]),s("div",{staticClass:"activedescription"},[s("div",{staticClass:"topdescription"},[t._v("加入NCHU_200hub")]),s("div",{staticClass:"topdescription"},[t._v("强强联手，源于我们，服务我们")])]),s("div",{staticClass:"ButtonWrapper"},[s("div",{staticClass:"ButtonContentWrapper"},[s("div",{staticClass:"showMore"},[t._v("感谢金主😍")]),s("img",{attrs:{src:e(1783),alt:"to"}})])])]),s("img",{staticClass:"right",attrs:{src:e(3821),alt:"right"}})]),s("img",{staticClass:"Hover",attrs:{src:e(236),alt:"hoverWave"}})])}],ut={methods:{letDowm(){this.$refs.wrapper.style.marginTop="100px"},letTop(){document.body.clientWidth<=900?this.$refs.wrapper.style.marginTop="-120px":this.$refs.wrapper.style.marginTop="-400px"}}},vt=ut,ft=(0,p.Z)(vt,pt,dt,!1,null,"cef8bb16",null),mt=ft.exports,Ct=function(){var t=this;t._self._c;return t._m(0)},ht=[function(){var t=this,s=t._self._c;return s("div",{attrs:{id:"Wrapper"}},[s("div",{attrs:{id:"Content"}},[s("div",{attrs:{id:"LeftWrapper"}},[s("div",{attrs:{id:"TopWrapper"}},[s("img",{attrs:{id:"fk1",src:e(2565)}}),t._v(" Hey,Welcome ")]),s("div",{attrs:{id:"ACenWrapper"}},[t._v("关于NCHU_200hub")]),s("div",{attrs:{id:"BCenWrapper"}},[t._v("412 x 413 勉强打造")]),s("div",{attrs:{id:"CCenWrapper"}},[t._v("Can Can Need")]),s("button",[s("p",[t._v('"摆烂小子"')])])]),s("div",{attrs:{id:"RightWrapper"}},[s("img",{attrs:{id:"fk2",src:e(7732)}})])])])}],gt={},_t=gt,xt=(0,p.Z)(_t,Ct,ht,!1,null,"78e78b7e",null),bt=xt.exports,kt=function(){var t=this,s=t._self._c;return s("div",{ref:"TopWrapper",staticClass:"WrapperTop"},[t._m(0),s("div",{staticClass:"Center"},t._l(t.cakeInformations,(function(t,e){return s("CakesCard",{key:e,attrs:{name:t.name,description:t.description,src:t.src}})})),1)])},Tt=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"HeadeWrapper"},[s("div",{staticClass:"actionTitle"},[t._v("来到412-413")]),s("div",{staticClass:"data"},[t._v("只要你给钱")]),s("div",{staticClass:"addCook"},[t._v("下面的东西随便吃")])])}],wt=function(){var t=this,s=t._self._c;return s("div",{staticClass:"WrapperTop2"},[s("img",{staticClass:"cackes",attrs:{src:t.src,alt:t.src}}),s("div",{staticClass:"rightWrapper"},[s("div",{staticClass:"Name"},[t._v(t._s(t.name))]),s("div",{staticClass:"Description"},[t._v(t._s(t.description))])])])},Wt=[],yt={props:["name","description","src"]},St=yt,Zt=(0,p.Z)(St,wt,Wt,!1,null,"1b530264",null),Bt=Zt.exports,$t={components:{CakesCard:Bt},methods:{goRight(){this.$refs.TopWrapper.style.width="100vw"},goBack(){document.body.clientWidth>900&&(this.$refs.TopWrapper.style.width="1200px")}},data(){return{cakeInformations:[{name:"MM豆",description:"美国的一种巧克力豆品牌",src:e(6784)},{name:"马卡龙",description:"口味包括：原味、留兰香、冬青、薄荷极乐、野生蓝莓味。",src:e(8868)},{name:"软糖",description:"果冻肚皮酸豆，好吃又酸。六种酸味",src:e(9512)},{name:"甜甜圈",description:"我们原创的上釉甜甜圈，并包含有糖果！",src:e(9987)},{name:"纸杯蛋糕",description:"水果蛋糕是喜欢经典口味的人的理想选择",src:e(8890)},{name:"果冻",description:"用真正的果汁和所有天然色素制成的大片果冻。",src:e(5053)}]}}},Ht=$t,Lt=(0,p.Z)(Ht,kt,Tt,!1,null,"169388bc",null),Ot=Lt.exports,Nt=function(){var t=this;t._self._c;return t._m(0)},It=[function(){var t=this,s=t._self._c;return s("div",{attrs:{id:"Wrapper03"}},[s("div",{attrs:{id:"HeadeText"}},[t._v("更多内容，敬请期待")]),s("div",{staticClass:"ButtonWrapper01"},[s("button",{staticClass:"BUtton"},[s("span",{staticClass:"back"},[t._v(" 更新中...")])]),s("img",{staticClass:"hands",attrs:{src:e(4189)}})])])}],Ut={methods:{}},Pt=Ut,At=(0,p.Z)(Pt,Nt,It,!1,null,"f0c5029a",null),Mt=At.exports,Rt=function(){var t=this,s=t._self._c;return s("div",{ref:"letLeft",staticClass:"Wrapper"},[t._m(0)])},Dt=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"ContentWrapper"},[s("div",{staticClass:"ImageWrapper"},[s("img",{staticClass:"pickIcon",attrs:{src:e(5874),alt:"pick01"}}),s("img",{staticClass:"pickIcon",attrs:{src:e(9930),alt:"pick02"}}),s("img",{staticClass:"pickIcon",attrs:{src:e(4718),alt:"pick03"}})]),s("div",{staticClass:"PickTitle"},[t._v("似此星辰非昨夜，为谁风露立中宵")]),s("div",{staticClass:"Description"},[s("div",{staticClass:"normal"},[t._v("QQ")]),s("div",{staticClass:"normal"},[t._v("347552878")]),s("div",{staticClass:"normal"},[t._v("thanks for")]),s("div",{staticClass:"Warning normal"},[t._v("VISITING")])])])}],jt={methods:{goLeft(){this.$refs.letLeft.style.transform="translateX(-20vw)"},goBack(){this.$refs.letLeft.style.transform="translateX(0)"}}},Et=jt,Ft=(0,p.Z)(Et,Rt,Dt,!1,null,"506bd5bf",null),Vt=Ft.exports,qt={data(){return{currentScroll:0}},components:{NewsInformation:lt,FarmCard:mt,TeamCard:bt,Cook:Ot,Hand:Mt,Pick:Vt},mounted(){window.addEventListener("scroll",this.handleScroll),window.addEventListener("scroll",this.handleScroll02)},beforeDestroy(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("scroll",this.handleScroll02)},methods:{handleScroll(){this.currentScroll=window.pageYOffset,this.currentScroll>=this.$refs.cards.offsetTop-150?(this.currentScroll<this.$refs.cards.offsetTop+800&&document.body.clientWidth<=900||this.currentScroll<this.$refs.cards.offsetTop+1e3&&document.body.clientWidth>900)&&this.$refs.farmCard.letDowm():(this.currentScroll,this.$refs.cards.offsetTop,this.$refs.farmCard.letTop())},handleScroll02(){this.currentScroll=window.pageYOffset,this.currentScroll>=this.$refs.cooks.offsetTop-400&&this.currentScroll<this.$refs.cooks.offsetTop+600&&document.body.clientWidth>900?this.$refs.cookCard.goRight():this.$refs.cookCard.goBack(),console.log(this.currentScroll,this.$refs.pick.offsetTop-900),document.body.clientWidth<=900?this.currentScroll>=this.$refs.pick.offsetTop-1400&&this.currentScroll<this.$refs.pick.offsetTop-900?this.$refs.pickUp.goLeft():this.$refs.pickUp.goBack():this.currentScroll>=this.$refs.pick.offsetTop-1900&&this.currentScroll<this.$refs.pick.offsetTop-800?this.$refs.pickUp.goBack():this.$refs.pickUp.goLeft()}}},Jt=qt,zt=(0,p.Z)(Jt,et,rt,!1,null,null,null),Gt=zt.exports,Kt={components:{HomeCenter:st,HomeTop:G,News:Gt}},Qt=Kt,Xt=(0,p.Z)(Qt,f,m,!1,null,"153b2fe2",null),Yt=Xt.exports,ts=function(){var t=this,s=t._self._c;return s("div",{staticClass:"videoTopWrapper"},[s("div",{staticClass:"videoContentWrapper"},[s("img",{staticClass:"icon",attrs:{src:e(4356),alt:"icon"}}),s("div",{staticClass:"menuButtons"},t._l(t.icons,(function(t,e){return s("div",{key:e},[s("VideoTemplate",{attrs:{url:t.url,title:t.title}})],1)})),0),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isOnComputer,expression:"isOnComputer"}],staticClass:"input"},[s("input",{staticClass:"search",attrs:{type:"text"}}),s("img",{staticClass:"sort",attrs:{src:e(8475),alt:"sort"}})]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isOnComputer,expression:"isOnComputer"}],staticClass:"User"},[s("div",{staticClass:"log"},[t._v("登陆")]),s("div",{staticClass:"log"},[t._v("注册")])])])])},ss=[],es=function(){var t=this,s=t._self._c;return s("div",{staticClass:"iconTopWrapper"},[s("div",{staticClass:"iconTopContent"},[s("img",{attrs:{src:t.url,alt:"home"}}),s("div",{staticClass:"title"},[t._v(t._s(t.title))])])])},rs=[],is={props:["url","title"]},as=is,ns=(0,p.Z)(as,es,rs,!1,null,"2dea6fd2",null),os=ns.exports,cs={components:{VideoTemplate:os},created(){document.body.clientWidth<=900&&(this.isOnComputer=!1),console.log(this.isOnComputer)},data(){return{isOnComputer:!0,icons:[{url:e(2520),title:"首页"},{url:e(873),title:"影片"},{url:e(4613),title:"打赏"}]}}},ls=cs,ps=(0,p.Z)(ls,ts,ss,!1,null,null,null),ds=ps.exports,us={},vs=(0,p.Z)(us,r,i,!1,null,null,null),fs=vs.exports;a.ZP.use(v.Z);const ms=[{path:"/",name:"home",component:Yt},{path:"/about",name:"aboutus",component:ds},{path:"/videohome",name:"video",component:fs}],Cs=new v.Z({mode:"history",base:"/",routes:ms});var hs=Cs,gs=e(3822);a.ZP.use(gs.ZP);var _s=new gs.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}});a.ZP.config.productionTip=!1,new a.ZP({router:hs,store:_s,render:t=>t(u)}).$mount("#app")},2520:function(t,s,e){t.exports=e.p+"img/home.8464fb1e.svg"},4356:function(t,s,e){t.exports=e.p+"img/icon.40f43b31.svg"},4613:function(t,s,e){t.exports=e.p+"img/money.6a9cf968.svg"},8475:function(t,s,e){t.exports=e.p+"img/sort.74273a42.svg"},873:function(t,s,e){t.exports=e.p+"img/videos.4b70af50.svg"},3916:function(t,s,e){t.exports=e.p+"img/Cover2.48f1f8aa.svg"},7732:function(t,s,e){t.exports=e.p+"img/Ilustra.ad521fea.svg"},7716:function(t,s,e){t.exports=e.p+"img/N.ba135213.svg"},4166:function(t,s,e){t.exports=e.p+"img/WomanFlower.b119bd74.svg"},5143:function(t,s,e){t.exports=e.p+"img/farmIcon.5c2a7332.svg"},4189:function(t,s,e){t.exports=e.p+"img/hand.d2f4e80e.svg"},6668:function(t,s,e){t.exports=e.p+"img/helloCard.550b86f5.svg"},236:function(t,s,e){t.exports=e.p+"img/hoverWave.6afebedf.svg"},2565:function(t,s,e){t.exports=e.p+"img/pc1.d78d3ffa.svg"},5874:function(t,s,e){t.exports=e.p+"img/pick01.a073aa7c.svg"},9930:function(t,s,e){t.exports=e.p+"img/pick02.97f0a886.svg"},4718:function(t,s,e){t.exports=e.p+"img/pick03.557b40eb.svg"},3821:function(t,s,e){t.exports=e.p+"img/rightFarmImage.6b64546d.svg"},1868:function(t,s,e){t.exports=e.p+"img/search.f9c8d814.svg"},8960:function(t,s,e){t.exports=e.p+"img/splice.5d9e0fde.svg"},1783:function(t,s,e){t.exports=e.p+"img/to.de3ac85b.svg"},3761:function(t,s,e){t.exports=e.p+"img/user.e5bd6c0d.svg"},5053:function(t,s,e){t.exports=e.p+"img/GD.9da7297e.png"},6784:function(t,s,e){t.exports=e.p+"img/MM.2256f6a4.png"},8868:function(t,s,e){t.exports=e.p+"img/Marc.6eefdcff.png"},8890:function(t,s,e){t.exports=e.p+"img/papercacke.6b307580.png"},9512:function(t,s,e){t.exports=e.p+"img/suger.25efa40a.png"},9987:function(t,s,e){t.exports=e.p+"img/sweetc.12453e30.png"}},s={};function e(r){var i=s[r];if(void 0!==i)return i.exports;var a=s[r]={exports:{}};return t[r](a,a.exports,e),a.exports}e.m=t,function(){var t=[];e.O=function(s,r,i,a){if(!r){var n=1/0;for(p=0;p<t.length;p++){r=t[p][0],i=t[p][1],a=t[p][2];for(var o=!0,c=0;c<r.length;c++)(!1&a||n>=a)&&Object.keys(e.O).every((function(t){return e.O[t](r[c])}))?r.splice(c--,1):(o=!1,a<n&&(n=a));if(o){t.splice(p--,1);var l=i();void 0!==l&&(s=l)}}return s}a=a||0;for(var p=t.length;p>0&&t[p-1][2]>a;p--)t[p]=t[p-1];t[p]=[r,i,a]}}(),function(){e.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(s,{a:s}),s}}(),function(){e.d=function(t,s){for(var r in s)e.o(s,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:s[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)}}(),function(){e.p="/"}(),function(){var t={143:0};e.O.j=function(s){return 0===t[s]};var s=function(s,r){var i,a,n=r[0],o=r[1],c=r[2],l=0;if(n.some((function(s){return 0!==t[s]}))){for(i in o)e.o(o,i)&&(e.m[i]=o[i]);if(c)var p=c(e)}for(s&&s(r);l<n.length;l++)a=n[l],e.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return e.O(p)},r=self["webpackChunknchu_200hub"]=self["webpackChunknchu_200hub"]||[];r.forEach(s.bind(null,0)),r.push=s.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(3977)}));r=e.O(r)})();
//# sourceMappingURL=app.c564a579.js.map