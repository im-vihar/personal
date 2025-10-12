(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4688],
  {
    69776: (e, t, s) => {
      "use strict";
      s.d(t, { ExperienceItem: () => o });
      var n = s(31610),
        r = s(97204),
        a = s(87282),
        l = s(85499),
        i = s(48323);
      function c(e) {
        let {
          children: t,
          isLast: s = !1,
          className: r,
          dotClassName: a,
          lineClassName: i,
          contentClassName: c,
          ...o
        } = e;
        return (0, n.jsxs)("li", {
          className: (0, l.cn)("relative pl-8", r),
          ...o,
          children: [
            (0, n.jsx)("span", {
              className: (0, l.cn)(
                "absolute left-0 top-1 size-4 rounded-full bg-primary z-10",
                a,
              ),
              "aria-hidden": "true",
            }),
            !s &&
              (0, n.jsx)("span", {
                className: (0, l.cn)(
                  "absolute left-2 top-6 bottom-0 w-px bg-border",
                  i,
                ),
                "aria-hidden": "true",
              }),
            (0, n.jsx)("div", {
              className: (0, l.cn)("space-y-3", c),
              children: t,
            }),
          ],
        });
      }
      function o(e) {
        var t;
        let {
            title: s,
            company: o,
            description: d,
            technologies: u = [],
            startDate: m,
            endDate: x,
            isCurrent: h,
            isLast: p = !1,
          } = e,
          v = (0, r.c3)("components"),
          [f, N] = (0, a.useState)(!1);
        return (0, n.jsxs)(c, {
          isLast: p,
          children: [
            (0, n.jsx)("div", {
              className: "text-muted-foreground text-sm font-medium",
              children: (0, l.Lu)(
                null != m ? m : void 0,
                null != x ? x : void 0,
                null != h ? h : void 0,
              ),
            }),
            (0, n.jsx)("div", {
              className: "space-y-1",
              children: (0, n.jsxs)("h3", {
                className: "text-foreground text-lg font-semibold",
                children: [s, " - ", (0, n.jsx)("span", { children: o })],
              }),
            }),
            d
              ? (0, n.jsxs)("div", {
                  className: "space-y-2",
                  children: [
                    (0, n.jsxs)("button", {
                      onClick: () => N(!f),
                      className:
                        "flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors duration-200 font-medium",
                      children: [
                        v(
                          f
                            ? "experienceCard.actions.viewLessDetails"
                            : "experienceCard.actions.viewMoreDetails",
                        ),
                        f
                          ? (0, n.jsx)(i.Mtm, { className: "h-4 w-4" })
                          : (0, n.jsx)(i.D3D, { className: "h-4 w-4" }),
                      ],
                    }),
                    (0, n.jsx)("div", {
                      className:
                        "overflow-hidden transition-all duration-300 ease-in-out  ".concat(
                          f
                            ? "max-h-96 opacity-100 bg-card p-5 rounded-xl"
                            : "max-h-0 opacity-0",
                        ),
                      children: (0, n.jsx)("p", {
                        className:
                          "text-sm text-muted-foreground sm:text-base pt-1",
                        children: d,
                      }),
                    }),
                  ],
                })
              : null,
            (null != (t = null == u ? void 0 : u.length) ? t : 0) > 0
              ? (0, n.jsx)("div", {
                  className: "flex gap-2 flex-wrap pt-2",
                  children: (null != u ? u : []).map((e) =>
                    (0, n.jsx)(
                      "span",
                      {
                        className:
                          "text-xs px-3 py-1 rounded-full border border-border",
                        children: e.name,
                      },
                      e.id,
                    ),
                  ),
                })
              : null,
          ],
        });
      }
    },
    76078: (e, t, s) => {
      (Promise.resolve().then(s.bind(s, 53168)),
        Promise.resolve().then(s.bind(s, 35984)),
        Promise.resolve().then(s.bind(s, 69776)));
    },
    85499: (e, t, s) => {
      "use strict";
      s.d(t, { Lu: () => i, cn: () => a });
      var n = s(58449),
        r = s(60817);
      function a() {
        for (var e = arguments.length, t = Array(e), s = 0; s < e; s++)
          t[s] = arguments[s];
        return (0, r.QP)((0, n.$)(t));
      }
      function l(e) {
        if (!e) return "N/A";
        let t = new Date(e);
        return isNaN(t.getTime())
          ? e
          : t.toLocaleDateString(void 0, { year: "numeric", month: "long" });
      }
      function i(e, t, s) {
        let n = e ? l(e) : "N/A",
          r = s ? "Present" : t ? l(t) : "N/A";
        return "".concat(n, " - ").concat(r);
      }
    },
    97204: (e, t, s) => {
      "use strict";
      s.d(t, { c3: () => a });
      var n = s(3872);
      function r(e, t) {
        return (...e) => {
          try {
            return t(...e);
          } catch {
            throw Error(void 0);
          }
        };
      }
      let a = r(0, n.c3);
      r(0, n.kc);
    },
  },
  (e) => {
    (e.O(0, [9258, 7712, 2417, 3601, 819, 5548, 7358], () => e((e.s = 76078))),
      (_N_E = e.O()));
  },
]);
