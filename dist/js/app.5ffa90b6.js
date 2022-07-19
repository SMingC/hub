(function () {
  "use strict";
  var t = {
      7466: function (t, s, e) {
        var r,
          i,
          a = e(6369),
          n = function () {
            var t = this,
              s = t._self._c;
            return s("div", [s("router-view")], 1);
          },
          o = [],
          c = { components: {} },
          l = c,
          p = e(1001),
          d = (0, p.Z)(l, n, o, !1, null, null, null),
          u = d.exports,
          v = e(2631),
          f = function () {
            var t = this,
              s = t._self._c;
            return s(
              "div",
              { staticClass: "ALL" },
              [
                s("HomeTop"),
                s("HomeCenter", { staticStyle: { "margin-top": "100px" } }),
                s("News", { staticStyle: { "margin-top": "100px" } }),
              ],
              1
            );
          },
          C = [],
          m = function () {
            var t = this,
              s = t._self._c;
            return s("div", { staticClass: "Wrapper" }, [
              s("div", { staticClass: "Text" }, [t._v("NCHU_200hub")]),
              s(
                "div",
                { staticClass: "ContentWrapper" },
                [
                  s("div", { staticClass: "description" }, [
                    s("div", { staticClass: "spring" }, [
                      t._v("多少游春意 🔥"),
                    ]),
                    t._m(0),
                    t._m(1),
                    s(
                      "div",
                      { staticClass: "HomeButtonWrapper" },
                      [
                        s("HomeButton", {
                          attrs: {
                            isColorReversed: !1,
                            description: "让我康康",
                            where: "/video",
                          },
                        }),
                        s("HomeButton", {
                          attrs: {
                            isColorReversed: !0,
                            description: "关于我们",
                            where: "/about",
                          },
                        }),
                      ],
                      1
                    ),
                  ]),
                  s("TeamAll", {
                    attrs: { url: t.cartoonUrls[0].teamCard.url },
                  }),
                ],
                1
              ),
              s("div", { staticClass: "CardsWrapper" }, [
                s("div", { staticClass: "cardTitle" }, [t._v("TEAM sofar...")]),
                s(
                  "div",
                  { staticClass: "Cards" },
                  t._l(
                    t.cartoonUrls[0].cartoonCardsCollection.items,
                    function (t, e) {
                      return s("CartoonCard", {
                        key: e,
                        attrs: { url: t.url },
                      });
                    }
                  ),
                  1
                ),
              ]),
            ]);
          },
          h = [
            function () {
              var t = this,
                s = t._self._c;
              return s("div", { staticClass: "intersting" }, [
                t._v(" Something "),
                s("br"),
                t._v(" Interesting "),
              ]);
            },
            function () {
              var t = this,
                s = t._self._c;
              return s("div", { staticClass: "poem" }, [
                s("div", { staticClass: "poemText" }, [t._v("寸心誓与长相守")]),
                s("div", { staticClass: "poemText" }, [t._v("止华凄冷蓼花愁")]),
                s("div", { staticClass: "poemText" }, [t._v("挑尽寒灯到夜深")]),
                s("div", { staticClass: "poemText" }, [t._v("战和何者是良筹")]),
              ]);
            },
          ],
          g =
            (e(1703),
            function () {
              var t = this,
                s = t._self._c;
              return s(
                "router-link",
                { staticClass: "HomeButton", attrs: { to: t.where } },
                [
                  s(
                    "div",
                    {
                      class: t.isColorReversed ? "BlackTangle" : "PurpleTangle",
                      staticStyle: { position: "relative" },
                    },
                    [
                      t._v(" " + t._s(t.description) + " "),
                      s("div", {
                        class: t.isColorReversed
                          ? "PurpleTangle"
                          : "BlackTangle",
                        staticStyle: {
                          position: "absolute",
                          "z-index": "-10",
                          left: "5px",
                          top: "-10px",
                          width: "120px",
                          height: "55px",
                        },
                      }),
                    ]
                  ),
                ]
              );
            }),
          _ = [],
          x = {
            name: "HomeButton",
            props: ["isColorReversed", "description", "where"],
          },
          w = x,
          b = (0, p.Z)(w, g, _, !1, null, "78db962a", null),
          T = b.exports,
          k = function () {
            var t = this,
              s = t._self._c;
            return s("div", { staticClass: "cardWrapper" }, [
              s("img", { attrs: { src: t.url, alt: "cartoon" } }),
            ]);
          },
          y = [],
          W = { props: ["url"] },
          S = W,
          O = (0, p.Z)(S, k, y, !1, null, "f2546a66", null),
          Z = O.exports,
          B = function () {
            var t = this,
              s = t._self._c;
            return s(
              "div",
              { staticClass: "Team" },
              [
                s("img", { attrs: { src: t.url, alt: "teamAll" } }),
                s("div", { staticClass: "NamesTangle" }, [
                  s(
                    "div",
                    { staticClass: "Names" },
                    t._l(t.names, function (e, r) {
                      return s("div", { key: r, staticClass: "name" }, [
                        t._v(" " + t._s(e) + " "),
                      ]);
                    }),
                    0
                  ),
                ]),
                s("MicleBird", { staticClass: "micleBird" }),
                s("Liner", { staticClass: "liner" }),
              ],
              1
            );
          },
          L = [],
          H = function () {
            var t = this,
              s = t._self._c;
            return s("iframe", {
              staticClass: "MicleBird",
              staticStyle: {
                position: "absolute",
                width: "300px",
                height: "200px",
              },
              attrs: { src: "https://embed.lottiefiles.com/animation/112646" },
            });
          },
          N = [],
          $ = {},
          D = (0, p.Z)($, H, N, !1, null, "d1200888", null),
          I = D.exports,
          V = function () {
            var t = this,
              s = t._self._c;
            return s("iframe", {
              staticClass: "Liner",
              staticStyle: { position: "absolute" },
              attrs: { src: "https://embed.lottiefiles.com/animation/1624" },
            });
          },
          R = [],
          U = {},
          M = (0, p.Z)(U, V, R, !1, null, "0fe37f49", null),
          A = M.exports,
          P = {
            components: { MicleBird: I, Liner: A },
            props: ["url"],
            data() {
              return { names: ["MCS", "MHW", "ZZT"] };
            },
          },
          E = P,
          j = (0, p.Z)(E, B, L, !1, null, "328f8b93", null),
          F = j.exports,
          q = {
            components: { HomeButton: T, CartoonCard: Z, TeamAll: F },
            data() {
              return { cartoonUrls: [] };
            },
            async created() {
              (this.cartoonUrls = await this.getcartoonUrl()),
                console.log(this.cartoonUrls);
            },
            methods: {
              getcartoonUrl: async () => {
                const t =
                    "{\n        nchu200HubCollection {\n          items{\n            cartoonCardsCollection{\n              items{\n                url\n              }\n            }\n            teamCard{\n              url\n            }\n          }\n        }\n      }",
                  s =
                    "https://graphql.contentful.com/content/v1/spaces/74yzokv24sw6/",
                  e = {
                    method: "POST",
                    headers: {
                      Authorization:
                        "Bearer TUJJhlAKkF5WxTyRJkAmLgKEyVLn2UqRL9kVLbDq9ks",
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ query: t }),
                  };
                try {
                  const t = await fetch(s, e).then((t) => t.json());
                  return t.data.nchu200HubCollection.items;
                } catch (r) {
                  throw new Error(
                    "Could not receive the data from Contentful!"
                  );
                }
              },
            },
          },
          J = q,
          z = (0, p.Z)(J, m, h, !1, null, "aa9f160c", null),
          G = z.exports,
          K = function () {
            var t = this,
              s = t._self._c;
            return s("div", { staticClass: "AboutWrapper" }, [
              s("div", { staticClass: "AboutContent" }, [
                s(
                  "div",
                  { staticClass: "aboutTop" },
                  [
                    s(
                      "router-link",
                      { staticClass: "search", attrs: { to: "search" } },
                      [
                        s("img", { attrs: { src: e(1868), alt: "search" } }),
                        s("div", { staticClass: "signText" }, [t._v("注册")]),
                      ]
                    ),
                    s(
                      "router-link",
                      { staticClass: "signIn", attrs: { to: "/login" } },
                      [
                        s("img", { attrs: { src: e(3761), alt: "user" } }),
                        s("div", { staticClass: "signText" }, [t._v("登陆")]),
                      ]
                    ),
                  ],
                  1
                ),
                t._m(0),
                s(
                  "div",
                  { staticClass: "footer" },
                  t._l(t.texts, function (e, r) {
                    return s("div", { key: r, staticClass: "footerText" }, [
                      t._v(" " + t._s(e) + " "),
                    ]);
                  }),
                  0
                ),
                s("img", {
                  staticClass: "illustration",
                  attrs: { src: e(6668), alt: "cardHello" },
                }),
                s("div", { staticClass: "poText" }, [t._v("建议少冲")]),
                s("iframe", {
                  staticClass: "rock",
                  attrs: {
                    src: "https://embed.lottiefiles.com/animation/5306",
                  },
                }),
              ]),
            ]);
          },
          Q = [
            function () {
              var t = this,
                s = t._self._c;
              return s("div", { staticClass: "aboutCenter" }, [
                s("div", { staticClass: "title" }, [t._v("CanCanNeed")]),
                s("div", { staticClass: "description" }, [
                  t._v(" 在这里，你可以看到我们 精心挑选出来，好康的 **😍 "),
                ]),
                s("div", { staticClass: "text" }, [
                  t._v("Do you Love Or .....?"),
                ]),
              ]);
            },
          ],
          X = {
            data() {
              return { texts: ["Have fun!", "take easy", "wdnmd"] };
            },
          },
          Y = X,
          tt = (0, p.Z)(Y, K, Q, !1, null, "4aa7987d", null),
          st = tt.exports,
          et = function () {
            var t = this,
              s = t._self._c;
            return s(
              "div",
              { staticClass: "Wrapper" },
              [
                s("NewsInformation"),
                s(
                  "div",
                  { ref: "cards", staticClass: "HoverCards" },
                  [
                    s("TeamCard", { staticClass: "teamCard" }),
                    s("FarmCard", { ref: "farmCard", staticClass: "farmCard" }),
                  ],
                  1
                ),
                s(
                  "div",
                  { ref: "cooks", staticClass: "cook" },
                  [s("Cook", { ref: "cookCard" })],
                  1
                ),
                s(
                  "div",
                  { staticClass: "Pick" },
                  [s("Pick", { ref: "pickUp" })],
                  1
                ),
                s("div", { ref: "pick", staticClass: "hand" }, [s("Hand")], 1),
              ],
              1
            );
          },
          rt = [],
          it = function () {
            var t = this;
            t._self._c;
            return t._m(0);
          },
          at = [
            function () {
              var t = this,
                s = t._self._c;
              return s("div", { staticClass: "Wrapper" }, [
                s("div", { staticClass: "topWrapper" }, [
                  s("div", { staticClass: "LeftText" }, [t._v("News")]),
                ]),
                s("div", { staticClass: "ContentWrapper" }, [
                  s("div", { staticClass: "Description" }, [
                    s("div", { staticClass: "NewsText" }, [t._v("活动消息")]),
                    s("div", { staticClass: "actionText" }, [
                      t._v("hub最新活动介绍"),
                    ]),
                    s("div", { staticClass: "description" }, [
                      t._v(
                        " It is updated from time to time, if you need to contact us to put your favorite hub, please contact us "
                      ),
                      s("img", {
                        staticClass: "textCover",
                        attrs: { src: e(3916), alt: "Cover" },
                      }),
                    ]),
                  ]),
                  s("div", { staticClass: "ImageBottom" }, [
                    s("img", {
                      staticClass: "woman",
                      attrs: { src: e(4166), alt: "WomanFlower" },
                    }),
                    s("img", {
                      staticClass: "splice",
                      attrs: { src: e(8960), alt: "splice" },
                    }),
                    s("div", { staticClass: "BlurRightBack" }),
                  ]),
                ]),
              ]);
            },
          ],
          nt = {},
          ot = nt,
          ct = (0, p.Z)(ot, it, at, !1, null, "dfd55b40", null),
          lt = ct.exports,
          pt = function () {
            var t = this,
              s = t._self._c;
            return s("div", { ref: "wrapper", staticClass: "Wrapper" }, [
              t._m(0),
            ]);
          },
          dt = [
            function () {
              var t = this,
                s = t._self._c;
              return s("div", { staticClass: "ContentWrapper" }, [
                s("div", { staticClass: "TopWrapper" }, [
                  s("img", {
                    staticClass: "farmIcon",
                    attrs: { src: e(5143), alt: "farmIcon" },
                  }),
                  s("div", { staticClass: "Title" }, [t._v("正缺人手....")]),
                ]),
                s("div", { staticClass: "CenterWrapper" }, [
                  s("div", { staticClass: "description" }, [
                    s("div", { staticClass: "TextAddimage" }, [
                      s("img", {
                        staticClass: "N",
                        attrs: { src: e(7716), alt: "N" },
                      }),
                      s("div", { staticClass: "newsLeft" }, [t._v("ews")]),
                    ]),
                    s("div", { staticClass: "Action" }, [
                      t._v("好的网站😏"),
                      s("br"),
                      t._v("需要大家共同维护"),
                    ]),
                    s("div", { staticClass: "activedescription" }, [
                      s("div", { staticClass: "topdescription" }, [
                        t._v("加入NCHU_200hub"),
                      ]),
                      s("div", { staticClass: "topdescription" }, [
                        t._v("强强联手，源于我们，服务我们"),
                      ]),
                    ]),
                    s("div", { staticClass: "ButtonWrapper" }, [
                      s("div", { staticClass: "ButtonContentWrapper" }, [
                        s("div", { staticClass: "showMore" }, [
                          t._v("感谢金主😍"),
                        ]),
                        s("img", { attrs: { src: e(1783), alt: "to" } }),
                      ]),
                    ]),
                  ]),
                  s("img", {
                    staticClass: "right",
                    attrs: { src: e(3821), alt: "right" },
                  }),
                ]),
                s("img", {
                  staticClass: "Hover",
                  attrs: { src: e(236), alt: "hoverWave" },
                }),
              ]);
            },
          ],
          ut = {
            methods: {
              letDowm() {
                this.$refs.wrapper.style.marginTop = "100px";
              },
              letTop() {
                document.body.clientWidth <= 900
                  ? (this.$refs.wrapper.style.marginTop = "-120px")
                  : (this.$refs.wrapper.style.marginTop = "-400px");
              },
            },
          },
          vt = ut,
          ft = (0, p.Z)(vt, pt, dt, !1, null, "cef8bb16", null),
          Ct = ft.exports,
          mt = function () {
            var t = this;
            t._self._c;
            return t._m(0);
          },
          ht = [
            function () {
              var t = this,
                s = t._self._c;
              return s("div", { attrs: { id: "Wrapper" } }, [
                s("div", { attrs: { id: "Content" } }, [
                  s("div", { attrs: { id: "LeftWrapper" } }, [
                    s("div", { attrs: { id: "TopWrapper" } }, [
                      s("img", { attrs: { id: "fk1", src: e(2565) } }),
                      t._v(" Hey,Welcomeee "),
                    ]),
                    s("div", { attrs: { id: "ACenWrapper" } }, [
                      t._v("关于NCHU_200hub"),
                    ]),
                    s("div", { attrs: { id: "BCenWrapper" } }, [
                      t._v("412 x 413 勉强打造"),
                    ]),
                    s("div", { attrs: { id: "CCenWrapper" } }, [
                      t._v("Can Can Need"),
                    ]),
                    s("button", [s("p", [t._v('"摆烂小子"')])]),
                  ]),
                  s("div", { attrs: { id: "RightWrapper" } }, [
                    s("img", { attrs: { id: "fk2", src: e(7732) } }),
                  ]),
                ]),
              ]);
            },
          ],
          gt = {},
          _t = gt,
          xt = (0, p.Z)(_t, mt, ht, !1, null, "96aa81f8", null),
          wt = xt.exports,
          bt = function () {
            var t = this,
              s = t._self._c;
            return s("div", { ref: "TopWrapper", staticClass: "WrapperTop" }, [
              t._m(0),
              s(
                "div",
                { staticClass: "Center" },
                t._l(t.cakeInformations, function (t, e) {
                  return s("CakesCard", {
                    key: e,
                    attrs: {
                      name: t.name,
                      description: t.description,
                      src: t.src,
                    },
                  });
                }),
                1
              ),
            ]);
          },
          Tt = [
            function () {
              var t = this,
                s = t._self._c;
              return s("div", { staticClass: "HeadeWrapper" }, [
                s("div", { staticClass: "actionTitle" }, [t._v("来到412-413")]),
                s("div", { staticClass: "data" }, [t._v("只要你给钱")]),
                s("div", { staticClass: "addCook" }, [
                  t._v("下面的东西随便吃"),
                ]),
              ]);
            },
          ],
          kt = function () {
            var t = this,
              s = t._self._c;
            return s("div", { staticClass: "WrapperTop2" }, [
              s("img", {
                staticClass: "cackes",
                attrs: { src: t.src, alt: t.src },
              }),
              s("div", { staticClass: "rightWrapper" }, [
                s("div", { staticClass: "Name" }, [t._v(t._s(t.name))]),
                s("div", { staticClass: "Description" }, [
                  t._v(t._s(t.description)),
                ]),
              ]),
            ]);
          },
          yt = [],
          Wt = { props: ["name", "description", "src"] },
          St = Wt,
          Ot = (0, p.Z)(St, kt, yt, !1, null, "1b530264", null),
          Zt = Ot.exports,
          Bt = {
            components: { CakesCard: Zt },
            methods: {
              goRight() {
                this.$refs.TopWrapper.style.width = "100vw";
              },
              goBack() {
                document.body.clientWidth > 900 &&
                  (this.$refs.TopWrapper.style.width = "1200px");
              },
            },
            data() {
              return {
                cakeInformations: [
                  {
                    name: "MM豆",
                    description: "美国的一种巧克力豆品牌",
                    src: e(6784),
                  },
                  {
                    name: "马卡龙",
                    description:
                      "口味包括：原味、留兰香、冬青、薄荷极乐、野生蓝莓味。",
                    src: e(8868),
                  },
                  {
                    name: "软糖",
                    description: "果冻肚皮酸豆，好吃又酸。六种酸味",
                    src: e(9512),
                  },
                  {
                    name: "甜甜圈",
                    description: "我们原创的上釉甜甜圈，并包含有糖果！",
                    src: e(9987),
                  },
                  {
                    name: "纸杯蛋糕",
                    description: "水果蛋糕是喜欢经典口味的人的理想选择",
                    src: e(8890),
                  },
                  {
                    name: "果冻",
                    description: "用真正的果汁和所有天然色素制成的大片果冻。",
                    src: e(5053),
                  },
                ],
              };
            },
          },
          Lt = Bt,
          Ht = (0, p.Z)(Lt, bt, Tt, !1, null, "169388bc", null),
          Nt = Ht.exports,
          $t = function () {
            var t = this;
            t._self._c;
            return t._m(0);
          },
          Dt = [
            function () {
              var t = this,
                s = t._self._c;
              return s("div", { attrs: { id: "Wrapper03" } }, [
                s("div", { attrs: { id: "HeadeText" } }, [
                  t._v("更多内容，敬请期待"),
                ]),
                s("div", { staticClass: "ButtonWrapper01" }, [
                  s("button", { staticClass: "BUtton" }, [
                    s("span", { staticClass: "back" }, [t._v(" 更新中...")]),
                  ]),
                  s("img", { staticClass: "hands", attrs: { src: e(4189) } }),
                ]),
              ]);
            },
          ],
          It = { methods: {} },
          Vt = It,
          Rt = (0, p.Z)(Vt, $t, Dt, !1, null, "f0c5029a", null),
          Ut = Rt.exports,
          Mt = function () {
            var t = this,
              s = t._self._c;
            return s("div", { ref: "letLeft", staticClass: "Wrapper" }, [
              t._m(0),
            ]);
          },
          At = [
            function () {
              var t = this,
                s = t._self._c;
              return s("div", { staticClass: "ContentWrapper" }, [
                s("div", { staticClass: "ImageWrapper" }, [
                  s("img", {
                    staticClass: "pickIcon",
                    attrs: { src: e(5874), alt: "pick01" },
                  }),
                  s("img", {
                    staticClass: "pickIcon",
                    attrs: { src: e(9930), alt: "pick02" },
                  }),
                  s("img", {
                    staticClass: "pickIcon",
                    attrs: { src: e(4718), alt: "pick03" },
                  }),
                ]),
                s("div", { staticClass: "PickTitle" }, [
                  t._v("似此星辰非昨夜，为谁风露立中宵"),
                ]),
                s("div", { staticClass: "Description" }, [
                  s("div", { staticClass: "normal" }, [t._v("QQ")]),
                  s("div", { staticClass: "normal" }, [t._v("347552878")]),
                  s("div", { staticClass: "normal" }, [t._v("thanks for")]),
                  s("div", { staticClass: "Warning normal" }, [
                    t._v("VISITING"),
                  ]),
                ]),
              ]);
            },
          ],
          Pt = {
            methods: {
              goLeft() {
                this.$refs.letLeft.style.transform = "translateX(-20vw)";
              },
              goBack() {
                this.$refs.letLeft.style.transform = "translateX(0)";
              },
            },
          },
          Et = Pt,
          jt = (0, p.Z)(Et, Mt, At, !1, null, "506bd5bf", null),
          Ft = jt.exports,
          qt = {
            data() {
              return { currentScroll: 0 };
            },
            components: {
              NewsInformation: lt,
              FarmCard: Ct,
              TeamCard: wt,
              Cook: Nt,
              Hand: Ut,
              Pick: Ft,
            },
            mounted() {
              window.addEventListener("scroll", this.handleScroll),
                window.addEventListener("scroll", this.handleScroll02);
            },
            beforeDestroy() {
              window.removeEventListener("scroll", this.handleScroll),
                window.removeEventListener("scroll", this.handleScroll02);
            },
            methods: {
              handleScroll() {
                (this.currentScroll = window.pageYOffset),
                  this.currentScroll >= this.$refs.cards.offsetTop - 150
                    ? ((this.currentScroll < this.$refs.cards.offsetTop + 800 &&
                        document.body.clientWidth <= 900) ||
                        (this.currentScroll <
                          this.$refs.cards.offsetTop + 1e3 &&
                          document.body.clientWidth > 900)) &&
                      this.$refs.farmCard.letDowm()
                    : (this.currentScroll,
                      this.$refs.cards.offsetTop,
                      this.$refs.farmCard.letTop());
              },
              handleScroll02() {
                (this.currentScroll = window.pageYOffset),
                  this.currentScroll >= this.$refs.cooks.offsetTop - 400 &&
                  this.currentScroll < this.$refs.cooks.offsetTop + 600 &&
                  document.body.clientWidth > 900
                    ? this.$refs.cookCard.goRight()
                    : this.$refs.cookCard.goBack(),
                  console.log(
                    this.currentScroll,
                    this.$refs.pick.offsetTop - 900
                  ),
                  document.body.clientWidth <= 900
                    ? this.currentScroll >= this.$refs.pick.offsetTop - 1400 &&
                      this.currentScroll < this.$refs.pick.offsetTop - 900
                      ? this.$refs.pickUp.goLeft()
                      : this.$refs.pickUp.goBack()
                    : this.currentScroll >= this.$refs.pick.offsetTop - 1900 &&
                      this.currentScroll < this.$refs.pick.offsetTop - 800
                    ? this.$refs.pickUp.goBack()
                    : this.$refs.pickUp.goLeft();
              },
            },
          },
          Jt = qt,
          zt = (0, p.Z)(Jt, et, rt, !1, null, null, null),
          Gt = zt.exports,
          Kt = { components: { HomeCenter: st, HomeTop: G, News: Gt } },
          Qt = Kt,
          Xt = (0, p.Z)(Qt, f, C, !1, null, "153b2fe2", null),
          Yt = Xt.exports,
          ts = {},
          ss = (0, p.Z)(ts, r, i, !1, null, null, null),
          es = ss.exports,
          rs = function () {
            var t = this,
              s = t._self._c;
            return s(
              "div",
              { staticClass: "videoTopWrapper" },
              [
                s("VideoTopMenu", { attrs: { isOnComputer: t.isOnComputer } }),
                s("VideoCarousels", {
                  attrs: { isOnComputer: t.isOnComputer },
                }),
                s("VideoTV", { attrs: { isOnComputer: t.isOnComputer } }),
              ],
              1
            );
          },
          is = [],
          as = function () {
            var t = this,
              s = t._self._c;
            return s("div", { staticClass: "Wrap" }, [
              s("div", { staticClass: "videoContentWrapper" }, [
                s("img", {
                  staticClass: "icon",
                  attrs: { src: e(4356), alt: "icon" },
                  on: { click: t.goHome },
                }),
                s(
                  "div",
                  { staticClass: "menuButtons" },
                  t._l(t.icons, function (t, e) {
                    return s(
                      "div",
                      { key: e },
                      [
                        s("VideoTemplate", {
                          attrs: { url: t.url, title: t.title },
                        }),
                      ],
                      1
                    );
                  }),
                  0
                ),
                s(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: t.isOnComputer,
                        expression: "isOnComputer",
                      },
                    ],
                    staticClass: "input",
                  },
                  [
                    s("input", {
                      staticClass: "search",
                      attrs: { type: "text" },
                    }),
                    s("img", {
                      staticClass: "sort",
                      attrs: { src: e(8475), alt: "sort" },
                    }),
                  ]
                ),
                s(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: t.isOnComputer,
                        expression: "isOnComputer",
                      },
                    ],
                    staticClass: "User",
                  },
                  [
                    s("AccountButton", { attrs: { text: "登陆" } }),
                    s("AccountButton", { attrs: { text: "注册" } }),
                  ],
                  1
                ),
              ]),
              s(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !t.isOnComputer,
                      expression: "!isOnComputer",
                    },
                  ],
                  staticClass: "phoneButton",
                },
                [
                  s(
                    "div",
                    { staticClass: "LogContent" },
                    [
                      s("HomeButton", {
                        attrs: {
                          isColorReversed: !1,
                          description: "Log In",
                          where: "/login",
                        },
                      }),
                      s("HomeButton", {
                        attrs: {
                          isColorReversed: !0,
                          description: "Sign Up",
                          where: "/register",
                        },
                      }),
                    ],
                    1
                  ),
                  s("img", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: !t.isOnComputer,
                        expression: "!isOnComputer",
                      },
                    ],
                    staticClass: "smile",
                    attrs: { src: e(6004), alt: "smile" },
                  }),
                ]
              ),
            ]);
          },
          ns = [],
          os = function () {
            var t = this,
              s = t._self._c;
            return s("div", { staticClass: "iconTopWrapper" }, [
              s("div", { staticClass: "iconTopContent" }, [
                s("img", { attrs: { src: t.url, alt: "home" } }),
                s("div", { staticClass: "title" }, [t._v(t._s(t.title))]),
              ]),
            ]);
          },
          cs = [],
          ls = { props: ["url", "title"] },
          ps = ls,
          ds = (0, p.Z)(ps, os, cs, !1, null, "2dea6fd2", null),
          us = ds.exports,
          vs = function () {
            var t = this,
              s = t._self._c;
            return s("div", { staticClass: "log" }, [t._v(t._s(t.text))]);
          },
          fs = [],
          Cs = { props: ["text"] },
          ms = Cs,
          hs = (0, p.Z)(ms, vs, fs, !1, null, "7a06aa3a", null),
          gs = hs.exports,
          _s = {
            props: ["isOnComputer"],
            components: { VideoTemplate: us, AccountButton: gs, HomeButton: T },
            data() {
              return {
                icons: [
                  { url: e(2520), title: "首页" },
                  { url: e(873), title: "影片" },
                ],
              };
            },
            methods: {
              goHome() {
                this.$router.push("/");
              },
            },
          },
          xs = _s,
          ws = (0, p.Z)(xs, as, ns, !1, null, "6ce3318a", null),
          bs = ws.exports,
          Ts = function () {
            var t = this,
              s = t._self._c;
            return s(
              "div",
              { staticClass: "videoWrapper" },
              [
                s("ShowCard", { attrs: { isOnComputer: t.isOnComputer } }),
                s("DescriptionVideo", { attrs: { text: "popular" } }),
                s("PopularCards"),
              ],
              1
            );
          },
          ks = [],
          ys = function () {
            var t = this,
              s = t._self._c;
            return s(
              "div",
              { staticClass: "videoContentWrapper" },
              [
                s(
                  "el-carousel",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: t.isOnComputer,
                        expression: "isOnComputer",
                      },
                    ],
                    staticStyle: { width: "90vw" },
                    attrs: {
                      "indicator-position": "outside",
                      type: "card",
                      height: "355px",
                    },
                  },
                  t._l(4, function (e) {
                    return s("el-carousel-item", { key: e }, [
                      s(
                        "div",
                        { staticStyle: { position: "relative" } },
                        [
                          s("img", {
                            staticClass: "loopImage",
                            attrs: { src: t.url },
                          }),
                          s("CardDescriptions", {
                            staticClass: "leftBottom",
                            attrs: { text: "this is the video description" },
                          }),
                        ],
                        1
                      ),
                    ]);
                  }),
                  1
                ),
              ],
              1
            );
          },
          Ws = [],
          Ss = function () {
            var t = this,
              s = t._self._c;
            return s("div", { staticClass: "text" }, [t._v(t._s(t.text))]);
          },
          Os = [],
          Zs = { props: ["text"] },
          Bs = Zs,
          Ls = (0, p.Z)(Bs, Ss, Os, !1, null, "45b54e22", null),
          Hs = Ls.exports,
          Ns = {
            components: { CardDescriptions: Hs },
            props: ["isOnComputer"],
            data() {
              return { url: e(6997) };
            },
          },
          $s = Ns,
          Ds = (0, p.Z)($s, ys, Ws, !1, null, "27bd3714", null),
          Is = Ds.exports,
          Vs = function () {
            var t = this,
              s = t._self._c;
            return s("div", { staticClass: "text" }, [t._v(t._s(t.text))]);
          },
          Rs = [],
          Us = { props: ["text"] },
          Ms = Us,
          As = (0, p.Z)(Ms, Vs, Rs, !1, null, "3f28fa01", null),
          Ps = As.exports,
          Es = function () {
            var t = this,
              s = t._self._c;
            return s(
              "div",
              { staticClass: "centerCards" },
              [
                s("CenterLeftCard", {
                  attrs: {
                    url: t.textLeftCard.url,
                    description: t.textLeftCard.description,
                    content: t.textLeftCard.content,
                    stared: !0,
                  },
                }),
                s(
                  "div",
                  { staticClass: "LoopCards" },
                  t._l(4, function (e, r) {
                    return s(
                      "div",
                      { key: r },
                      [
                        s("CenterRightCards", {
                          attrs: {
                            url: t.textRightCard.url,
                            description: t.textRightCard.description,
                            content: t.textRightCard.content,
                            stared: !0,
                          },
                        }),
                      ],
                      1
                    );
                  }),
                  0
                ),
              ],
              1
            );
          },
          js = [],
          Fs = function () {
            var t = this,
              s = t._self._c;
            return s("div", { staticClass: "CardsWrapper" }, [
              s(
                "div",
                { staticClass: "leftCard" },
                [
                  s("CardDescriptions", {
                    staticClass: "cardDescription",
                    attrs: { text: t.description },
                  }),
                  s("CardDescriptions", {
                    staticClass: "right",
                    attrs: { text: t.content },
                  }),
                  s("img", {
                    staticClass: "left",
                    attrs: { src: t.url, alt: "imgtext" },
                  }),
                  s("img", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: t.stared,
                        expression: "stared",
                      },
                    ],
                    staticClass: "star",
                    attrs: { src: e(3740), alt: "star" },
                  }),
                ],
                1
              ),
            ]);
          },
          qs = [],
          Js = {
            props: ["url", "description", "content", "stared"],
            components: { CardDescriptions: Hs },
          },
          zs = Js,
          Gs = (0, p.Z)(zs, Fs, qs, !1, null, "714e0d3e", null),
          Ks = Gs.exports,
          Qs = function () {
            var t = this,
              s = t._self._c;
            return s("div", { staticClass: "CenterRightCards" }, [
              s("div", { staticClass: "rightCardsContent" }, [
                s(
                  "div",
                  { staticClass: "singleCard" },
                  [
                    s("img", {
                      staticClass: "showImage",
                      attrs: { src: t.url, alt: "right" },
                    }),
                    s("CardDescriptions", {
                      staticClass: "rightDescription",
                      attrs: { text: t.description },
                    }),
                    s("CardDescriptions", {
                      staticClass: "rightContent",
                      attrs: { text: t.content },
                    }),
                    s("img", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: t.stared,
                          expression: "stared",
                        },
                      ],
                      staticClass: "star",
                      attrs: { src: e(3740), alt: "star" },
                    }),
                  ],
                  1
                ),
              ]),
            ]);
          },
          Xs = [],
          Ys = {
            components: { CardDescriptions: Hs },
            props: ["url", "description", "content", "stared"],
          },
          te = Ys,
          se = (0, p.Z)(te, Qs, Xs, !1, null, "9847369a", null),
          ee = se.exports,
          re = {
            components: { CenterLeftCard: Ks, CenterRightCards: ee },
            data() {
              return {
                textLeftCard: {
                  url: e(8808),
                  description: "ms.marvel",
                  content: "1/6",
                },
                textRightCard: {
                  url: e(4681),
                  description: "agent of shield: ss7",
                  content: "1/13",
                },
              };
            },
          },
          ie = re,
          ae = (0, p.Z)(ie, Es, js, !1, null, "574695c6", null),
          ne = ae.exports,
          oe = {
            components: {
              ShowCard: Is,
              DescriptionVideo: Ps,
              CardDescriptions: Hs,
              PopularCards: ne,
            },
            props: ["isOnComputer"],
          },
          ce = oe,
          le = (0, p.Z)(ce, Ts, ks, !1, null, "47dbea3d", null),
          pe = le.exports,
          de = function () {
            var t = this,
              s = t._self._c;
            return s("div", { staticClass: "tvCardsWrapper" }, [
              s(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: t.isOnComputer,
                      expression: "isOnComputer",
                    },
                  ],
                  staticClass: "tvCardsContent",
                },
                [
                  s("DescriptionVideo", { attrs: { text: "new TV SERIES" } }),
                  s(
                    "div",
                    { staticClass: "tvScaleWrapper" },
                    [
                      s("TVcards", {
                        staticStyle: {
                          "margin-top": "200px",
                          "margin-left": "300px",
                        },
                        attrs: {
                          url: e(1847),
                          name: "MovieName",
                          description: "this is the movie description",
                          where: "/",
                        },
                      }),
                      t._l(2, function (t) {
                        return s(
                          "div",
                          { key: t },
                          [
                            s("TVcards", {
                              staticStyle: { "margin-top": "200px" },
                              attrs: {
                                url: e(1847),
                                name: "MovieName",
                                description: "this is the movie description",
                                where: "/",
                              },
                            }),
                          ],
                          1
                        );
                      }),
                    ],
                    2
                  ),
                ],
                1
              ),
              s(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !t.isOnComputer,
                      expression: "!isOnComputer",
                    },
                  ],
                  staticClass: "phoneTvCenter",
                },
                [s("DescriptionVideo", { attrs: { text: "new TV SERIES" } })],
                1
              ),
            ]);
          },
          ue = [],
          ve = function () {
            var t = this,
              s = t._self._c;
            return s("div", { staticClass: "card", on: { click: t.goWatch } }, [
              s("div", { staticClass: "card-outside" }, [
                s("div", { staticClass: "card-outside-container" }, [
                  s("div", { staticClass: "card-front" }, [
                    s("div", { staticClass: "card-front-top" }, [
                      s("img", {
                        staticStyle: { width: "300px", height: "200px" },
                        attrs: { src: t.url, alt: "img" },
                      }),
                    ]),
                    s("div", { staticClass: "card-front-bot" }, [
                      t._v(t._s(t.name)),
                    ]),
                  ]),
                  s("div", { staticClass: "card-back" }, [
                    s("video", {
                      staticClass: "video-container",
                      attrs: { autoplay: "", muted: "", loop: "" },
                      domProps: { muted: !0 },
                    }),
                  ]),
                ]),
              ]),
              s("div", { staticClass: "card-inside" }, [
                s("div", { staticClass: "card-inside-container" }, [
                  s("div", { staticClass: "movieTitle" }, [t._v(t._s(t.name))]),
                  s("div", { staticClass: "movieDescription" }, [
                    t._v(" " + t._s(t.description) + " "),
                  ]),
                  s("div", { staticClass: "watchButton" }, [t._v("点击观看")]),
                ]),
              ]),
            ]);
          },
          fe = [],
          Ce = {
            props: ["url", "name", "description", "where"],
            methods: {
              goWatch() {
                this.$router.push(this.where);
              },
            },
          },
          me = Ce,
          he = (0, p.Z)(me, ve, fe, !1, null, "5f0bc34e", null),
          ge = he.exports,
          _e = {
            components: { TVcards: ge, DescriptionVideo: Ps },
            props: ["isOnComputer"],
          },
          xe = _e,
          we = (0, p.Z)(xe, de, ue, !1, null, "6d2474dc", null),
          be = we.exports,
          Te = {
            components: { VideoTopMenu: bs, VideoCarousels: pe, VideoTV: be },
            created() {
              document.body.clientWidth <= 900 && (this.isOnComputer = !1),
                console.log(this.isOnComputer);
            },
            data() {
              return { isOnComputer: !0 };
            },
          },
          ke = Te,
          ye = (0, p.Z)(ke, rs, is, !1, null, null, null),
          We = ye.exports;
        a["default"].use(v.Z);
        const Se = [
            { path: "/", name: "home", component: Yt },
            { path: "/about", name: "aboutus", component: es },
            { path: "/video", name: "video", component: We },
          ],
          Oe = new v.Z({ mode: "history", base: "/", routes: Se });
        var Ze = Oe,
          Be = e(3822);
        a["default"].use(Be.ZP);
        var Le = new Be.ZP.Store({
            state: {},
            getters: {},
            mutations: {},
            actions: {},
            modules: {},
          }),
          He = e(8499),
          Ne = e.n(He);
        (a["default"].config.productionTip = !1),
          a["default"].use(Ne()),
          new a["default"]({
            router: Ze,
            store: Le,
            render: (t) => t(u),
          }).$mount("#app");
      },
      2520: function (t, s, e) {
        t.exports = e.p + "img/home.8464fb1e.svg";
      },
      4356: function (t, s, e) {
        t.exports = e.p + "img/icon.40f43b31.svg";
      },
      8475: function (t, s, e) {
        t.exports = e.p + "img/sort.74273a42.svg";
      },
      3740: function (t, s, e) {
        t.exports = e.p + "img/star.26e22496.svg";
      },
      873: function (t, s, e) {
        t.exports = e.p + "img/videos.4b70af50.svg";
      },
      3916: function (t, s, e) {
        t.exports = e.p + "img/Cover2.48f1f8aa.svg";
      },
      7732: function (t, s, e) {
        t.exports = e.p + "img/Ilustra.ad521fea.svg";
      },
      7716: function (t, s, e) {
        t.exports = e.p + "img/N.ba135213.svg";
      },
      4166: function (t, s, e) {
        t.exports = e.p + "img/WomanFlower.b119bd74.svg";
      },
      5143: function (t, s, e) {
        t.exports = e.p + "img/farmIcon.5c2a7332.svg";
      },
      4189: function (t, s, e) {
        t.exports = e.p + "img/hand.d2f4e80e.svg";
      },
      6668: function (t, s, e) {
        t.exports = e.p + "img/helloCard.550b86f5.svg";
      },
      236: function (t, s, e) {
        t.exports = e.p + "img/hoverWave.6afebedf.svg";
      },
      2565: function (t, s, e) {
        t.exports = e.p + "img/pc1.d78d3ffa.svg";
      },
      5874: function (t, s, e) {
        t.exports = e.p + "img/pick01.a073aa7c.svg";
      },
      9930: function (t, s, e) {
        t.exports = e.p + "img/pick02.97f0a886.svg";
      },
      4718: function (t, s, e) {
        t.exports = e.p + "img/pick03.557b40eb.svg";
      },
      3821: function (t, s, e) {
        t.exports = e.p + "img/rightFarmImage.6b64546d.svg";
      },
      1868: function (t, s, e) {
        t.exports = e.p + "img/search.f9c8d814.svg";
      },
      6004: function (t, s, e) {
        t.exports = e.p + "img/smile.fdac57f2.svg";
      },
      8960: function (t, s, e) {
        t.exports = e.p + "img/splice.5d9e0fde.svg";
      },
      1783: function (t, s, e) {
        t.exports = e.p + "img/to.de3ac85b.svg";
      },
      3761: function (t, s, e) {
        t.exports = e.p + "img/user.e5bd6c0d.svg";
      },
      5053: function (t, s, e) {
        t.exports = e.p + "img/GD.9da7297e.png";
      },
      6784: function (t, s, e) {
        t.exports = e.p + "img/MM.2256f6a4.png";
      },
      8868: function (t, s, e) {
        t.exports = e.p + "img/Marc.6eefdcff.png";
      },
      1847: function (t, s, e) {
        t.exports = e.p + "img/coverCard.e00221d3.png";
      },
      8808: function (t, s, e) {
        t.exports = e.p + "img/leftCardtext.c3e4833b.png";
      },
      8890: function (t, s, e) {
        t.exports = e.p + "img/papercacke.6b307580.png";
      },
      4681: function (t, s, e) {
        t.exports = e.p + "img/rightCardText.aa6cb3e0.png";
      },
      6997: function (t, s, e) {
        t.exports = e.p + "img/strangeDoctor.650afb5e.png";
      },
      9512: function (t, s, e) {
        t.exports = e.p + "img/suger.25efa40a.png";
      },
      9987: function (t, s, e) {
        t.exports = e.p + "img/sweetc.12453e30.png";
      },
    },
    s = {};
  function e(r) {
    var i = s[r];
    if (void 0 !== i) return i.exports;
    var a = (s[r] = { exports: {} });
    return t[r](a, a.exports, e), a.exports;
  }
  (e.m = t),
    (function () {
      var t = [];
      e.O = function (s, r, i, a) {
        if (!r) {
          var n = 1 / 0;
          for (p = 0; p < t.length; p++) {
            (r = t[p][0]), (i = t[p][1]), (a = t[p][2]);
            for (var o = !0, c = 0; c < r.length; c++)
              (!1 & a || n >= a) &&
              Object.keys(e.O).every(function (t) {
                return e.O[t](r[c]);
              })
                ? r.splice(c--, 1)
                : ((o = !1), a < n && (n = a));
            if (o) {
              t.splice(p--, 1);
              var l = i();
              void 0 !== l && (s = l);
            }
          }
          return s;
        }
        a = a || 0;
        for (var p = t.length; p > 0 && t[p - 1][2] > a; p--) t[p] = t[p - 1];
        t[p] = [r, i, a];
      };
    })(),
    (function () {
      e.n = function (t) {
        var s =
          t && t.__esModule
            ? function () {
                return t["default"];
              }
            : function () {
                return t;
              };
        return e.d(s, { a: s }), s;
      };
    })(),
    (function () {
      e.d = function (t, s) {
        for (var r in s)
          e.o(s, r) &&
            !e.o(t, r) &&
            Object.defineProperty(t, r, { enumerable: !0, get: s[r] });
      };
    })(),
    (function () {
      e.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (t) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      e.o = function (t, s) {
        return Object.prototype.hasOwnProperty.call(t, s);
      };
    })(),
    (function () {
      e.r = function (t) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      };
    })(),
    (function () {
      e.p = "/";
    })(),
    (function () {
      var t = { 143: 0 };
      e.O.j = function (s) {
        return 0 === t[s];
      };
      var s = function (s, r) {
          var i,
            a,
            n = r[0],
            o = r[1],
            c = r[2],
            l = 0;
          if (
            n.some(function (s) {
              return 0 !== t[s];
            })
          ) {
            for (i in o) e.o(o, i) && (e.m[i] = o[i]);
            if (c) var p = c(e);
          }
          for (s && s(r); l < n.length; l++)
            (a = n[l]), e.o(t, a) && t[a] && t[a][0](), (t[a] = 0);
          return e.O(p);
        },
        r = (self["webpackChunknchu_200hub"] =
          self["webpackChunknchu_200hub"] || []);
      r.forEach(s.bind(null, 0)), (r.push = s.bind(null, r.push.bind(r)));
    })();
  var r = e.O(void 0, [998], function () {
    return e(7466);
  });
  r = e.O(r);
})();
//# sourceMappingURL=app.5ffa90b6.js.map
