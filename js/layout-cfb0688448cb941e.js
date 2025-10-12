(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1859],
  {
    24881: (e, t, r) => {
      "use strict";
      r.d(t, { N_: () => h, a8: () => p, rd: () => v });
      var n = r(80043),
        a = r(87282),
        l = r.t(a, 2),
        o = r(3872),
        s = l["use".trim()],
        i = r(32249),
        c = r(53168),
        u = r(73682),
        d = r(31610),
        m = r(16234);
      let {
        Link: h,
        redirect: f,
        usePathname: p,
        useRouter: v,
        getPathname: x,
      } = (function (e) {
        let {
          Link: t,
          config: r,
          getPathname: l,
          ...h
        } = (function (e, t) {
          var r, l, o;
          let m = {
              ...(r = t || {}),
              localePrefix:
                "object" == typeof (o = r.localePrefix)
                  ? o
                  : { mode: o || "always" },
              localeCookie: !!((l = r.localeCookie) ?? 1) && {
                name: "NEXT_LOCALE",
                sameSite: "lax",
                ...("object" == typeof l && l),
              },
              localeDetection: r.localeDetection ?? !0,
              alternateLinks: r.alternateLinks ?? !0,
            },
            h = m.pathnames,
            f = (0, a.forwardRef)(function ({ href: t, locale: r, ...n }, a) {
              let l, o;
              "object" == typeof t
                ? ((l = t.pathname), (o = t.params))
                : (l = t);
              let u = (0, i._x)(t),
                f = e(),
                v = (0, i.yL)(f) ? s(f) : f,
                x = u
                  ? p({
                      locale: r || v,
                      href: null == h ? l : { pathname: l, params: o },
                      forcePrefix: null != r || void 0,
                    })
                  : l;
              return (0, d.jsx)(c.default, {
                ref: a,
                href: "object" == typeof t ? { ...t, pathname: x } : x,
                locale: r,
                localeCookie: m.localeCookie,
                ...n,
              });
            });
          function p(e) {
            let t,
              { forcePrefix: r, href: n, locale: a } = e;
            return (
              null == h
                ? "object" == typeof n
                  ? ((t = n.pathname), n.query && (t += (0, u.Zn)(n.query)))
                  : (t = n)
                : (t = (0, u.FP)({
                    locale: a,
                    ...(0, u.TK)(n),
                    pathnames: m.pathnames,
                  })),
              (0, u.x3)(t, a, m, r)
            );
          }
          function v(e) {
            return function (t, ...r) {
              return e(p(t), ...r);
            };
          }
          return {
            config: m,
            Link: f,
            redirect: v(n.redirect),
            permanentRedirect: v(n.permanentRedirect),
            getPathname: p,
          };
        })(o.Ym, e);
        return {
          ...h,
          Link: t,
          usePathname: function () {
            let e = (function (e) {
                let t = (0, n.usePathname)(),
                  r = (0, o.Ym)();
                return (0, a.useMemo)(() => {
                  if (!t) return t;
                  let n = t,
                    a = (0, i.XP)(r, e.localePrefix);
                  if ((0, i.wO)(a, t)) n = (0, i.MY)(t, a);
                  else if (
                    "never" !== e.localePrefix.mode &&
                    e.localePrefix.prefixes
                  ) {
                    let e = (0, i.bL)(r);
                    (0, i.wO)(e, t) && (n = (0, i.MY)(t, e));
                  }
                  return n;
                }, [e.localePrefix, r, t]);
              })(r),
              t = (0, o.Ym)();
            return (0, a.useMemo)(
              () => (e && r.pathnames ? (0, u.aM)(t, e, r.pathnames) : e),
              [t, e],
            );
          },
          useRouter: function () {
            let e = (0, n.useRouter)(),
              t = (0, o.Ym)(),
              s = (0, n.usePathname)();
            return (0, a.useMemo)(() => {
              function n(e) {
                return function (n, a) {
                  let { locale: o, ...i } = a || {},
                    c = [
                      l({
                        href: n,
                        locale: o || t,
                        forcePrefix: null != o || void 0,
                      }),
                    ];
                  (Object.keys(i).length > 0 && c.push(i),
                    (0, m.A)(r.localeCookie, s, t, o),
                    e(...c));
                };
              }
              return {
                ...e,
                push: n(e.push),
                replace: n(e.replace),
                prefetch: n(e.prefetch),
              };
            }, [t, s, e]);
          },
          getPathname: l,
        };
      })(r(75592).D);
    },
    28284: (e, t, r) => {
      "use strict";
      r.d(t, { $: () => c });
      var n = r(31610),
        a = r(85499),
        l = r(58449);
      let o = (e) => ("boolean" == typeof e ? `${e}` : 0 === e ? "0" : e),
        s = l.$,
        i = ((e, t) => (r) => {
          var n;
          if ((null == t ? void 0 : t.variants) == null)
            return s(
              e,
              null == r ? void 0 : r.class,
              null == r ? void 0 : r.className,
            );
          let { variants: a, defaultVariants: l } = t,
            i = Object.keys(a).map((e) => {
              let t = null == r ? void 0 : r[e],
                n = null == l ? void 0 : l[e];
              if (null === t) return null;
              let s = o(t) || o(n);
              return a[e][s];
            }),
            c =
              r &&
              Object.entries(r).reduce((e, t) => {
                let [r, n] = t;
                return (void 0 === n || (e[r] = n), e);
              }, {});
          return s(
            e,
            i,
            null == t || null == (n = t.compoundVariants)
              ? void 0
              : n.reduce((e, t) => {
                  let { class: r, className: n, ...a } = t;
                  return Object.entries(a).every((e) => {
                    let [t, r] = e;
                    return Array.isArray(r)
                      ? r.includes({ ...l, ...c }[t])
                      : { ...l, ...c }[t] === r;
                  })
                    ? [...e, r, n]
                    : e;
                }, []),
            null == r ? void 0 : r.class,
            null == r ? void 0 : r.className,
          );
        })(
          "inline-flex items-center justify-center rounded-lg border border-transparent font-medium cursor-pointer transition-all duration-200 ease-in-out active:scale-90 font-inherit",
          {
            variants: {
              variant: {
                default: "bg-primary text-white hover:opacity-90",
                outline:
                  "bg-transparent text-primary border-primary hover:bg-primary hover:text-primary-foreground",
                secondary:
                  "bg-secondary text-secondary-foreground hover:opacity-90",
                destructive:
                  "bg-destructive text-destructive-foreground hover:opacity-90",
                ghost: "bg-transparent text-foreground hover:bg-muted",
              },
              size: {
                default: "h-9 px-4 text-sm",
                sm: "h-8 px-3 text-xs",
                lg: "h-11 px-6 text-base",
                icon: "h-9 w-9 p-0 text-[0px]",
              },
            },
            defaultVariants: { variant: "default", size: "default" },
          },
        );
      function c(e) {
        let { className: t, variant: r, size: l, ...o } = e;
        return (0, n.jsx)("button", {
          className: (0, a.cn)(i({ variant: r, size: l }), t),
          ...o,
        });
      }
    },
    45655: (e, t, r) => {
      "use strict";
      r.d(t, { ToggleTheme: () => i });
      var n = r(31610),
        a = r(83473),
        l = r(87282),
        o = r(48323),
        s = r(28284);
      function i() {
        let { theme: e, setTheme: t } = (0, a.D)(),
          [r, i] = (0, l.useState)(!1);
        if (
          ((0, l.useEffect)(() => {
            i(!0);
          }, []),
          !r)
        )
          return (0, n.jsx)(s.$, {
            variant: "ghost",
            size: "icon",
            className: "bg-muted animate-pulse",
          });
        let c = "dark" === e;
        return (0, n.jsx)(s.$, {
          size: "icon",
          variant: "ghost",
          onClick: () => t(c ? "light" : "dark"),
          "aria-label": "Toggle theme",
          children: c ? (0, n.jsx)(o.gLX, {}) : (0, n.jsx)(o.rRK, {}),
        });
      }
    },
    48305: (e, t, r) => {
      (Promise.resolve().then(r.bind(r, 53168)),
        Promise.resolve().then(r.bind(r, 35984)),
        Promise.resolve().then(r.t.bind(r, 86419, 23)),
        Promise.resolve().then(r.bind(r, 96279)),
        Promise.resolve().then(r.bind(r, 67273)),
        Promise.resolve().then(r.bind(r, 88732)),
        Promise.resolve().then(r.bind(r, 45655)));
    },
    67273: (e, t, r) => {
      "use strict";
      r.d(t, { NavigationBar: () => c });
      var n = r(31610),
        a = r(97204),
        l = r(24881),
        o = r(48323),
        s = r(58449);
      let i = {
        "/": (0, n.jsx)(o.fAJ, { className: "size-5" }),
        "/projects": (0, n.jsx)(o.L64, { className: "size-5" }),
        "/blog": (0, n.jsx)(o.ywh, { className: "size-5" }),
      };
      function c() {
        let e = (0, a.c3)(""),
          t = (0, l.a8)(),
          r = e.raw("navigation");
        return (0, n.jsx)("nav", {
          className:
            "fixed md:hidden -bottom-1 sm:-bottom-1 sm:rounded-2xl inset-x-0 z-50 mx-auto max-w-2xl w-full backdrop-blur-3xl bg-card/80 border border-border/50 px-4 py-3 shadow-lg shadow-black/5",
          children: (0, n.jsx)("div", {
            className: "flex w-full items-center justify-around gap-2",
            children: r.map((e) => {
              let r = i[e.href],
                a = t === e.href;
              return (0, n.jsxs)(
                l.N_,
                {
                  href: e.href,
                  className: (0, s.A)(
                    "relative flex flex-col items-center text-xs transition-all duration-300 ease-out group",
                    "min-w-0 flex-1 py-1",
                    a
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  ),
                  children: [
                    (0, n.jsx)("div", {
                      className: (0, s.A)(
                        "relative z-10 p-2.5 rounded-xl transition-all duration-300 ease-out",
                        a ? "text-primary" : "",
                      ),
                      children: r,
                    }),
                    (0, n.jsx)("span", {
                      className: (0, s.A)(
                        "relative z-10 mt-1 font-medium transition-all duration-300 truncate max-w-full",
                        a ? "text-primary scale-105" : "scale-100",
                      ),
                      children: e.label,
                    }),
                  ],
                },
                e.href,
              );
            }),
          }),
        });
      }
    },
    75592: (e, t, r) => {
      "use strict";
      r.d(t, { I: () => n, D: () => a });
      let n = ["en", "es"],
        a = { locales: ["en", "es"], defaultLocale: "en" };
    },
    83473: (e, t, r) => {
      "use strict";
      r.d(t, { D: () => u, N: () => d });
      var n = r(87282),
        a = (e, t, r, n, a, l, o, s) => {
          let i = document.documentElement,
            c = ["light", "dark"];
          function u(t) {
            var r;
            ((Array.isArray(e) ? e : [e]).forEach((e) => {
              let r = "class" === e,
                n = r && l ? a.map((e) => l[e] || e) : a;
              r
                ? (i.classList.remove(...n),
                  i.classList.add(l && l[t] ? l[t] : t))
                : i.setAttribute(e, t);
            }),
              (r = t),
              s && c.includes(r) && (i.style.colorScheme = r));
          }
          if (n) u(n);
          else
            try {
              let e = localStorage.getItem(t) || r,
                n =
                  o && "system" === e
                    ? window.matchMedia("(prefers-color-scheme: dark)").matches
                      ? "dark"
                      : "light"
                    : e;
              u(n);
            } catch (e) {}
        },
        l = ["light", "dark"],
        o = "(prefers-color-scheme: dark)",
        s = "undefined" == typeof window,
        i = n.createContext(void 0),
        c = { setTheme: (e) => {}, themes: [] },
        u = () => {
          var e;
          return null != (e = n.useContext(i)) ? e : c;
        },
        d = (e) =>
          n.useContext(i)
            ? n.createElement(n.Fragment, null, e.children)
            : n.createElement(h, { ...e }),
        m = ["light", "dark"],
        h = (e) => {
          let {
              forcedTheme: t,
              disableTransitionOnChange: r = !1,
              enableSystem: a = !0,
              enableColorScheme: s = !0,
              storageKey: c = "theme",
              themes: u = m,
              defaultTheme: d = a ? "system" : "light",
              attribute: h = "data-theme",
              value: b,
              children: y,
              nonce: g,
              scriptProps: k,
            } = e,
            [w, j] = n.useState(() => p(c, d)),
            [N, P] = n.useState(() => ("system" === w ? x() : w)),
            C = b ? Object.values(b) : u,
            L = n.useCallback(
              (e) => {
                let t = e;
                if (!t) return;
                "system" === e && a && (t = x());
                let n = b ? b[t] : t,
                  o = r ? v(g) : null,
                  i = document.documentElement,
                  c = (e) => {
                    "class" === e
                      ? (i.classList.remove(...C), n && i.classList.add(n))
                      : e.startsWith("data-") &&
                        (n ? i.setAttribute(e, n) : i.removeAttribute(e));
                  };
                if ((Array.isArray(h) ? h.forEach(c) : c(h), s)) {
                  let e = l.includes(d) ? d : null,
                    r = l.includes(t) ? t : e;
                  i.style.colorScheme = r;
                }
                null == o || o();
              },
              [g],
            ),
            E = n.useCallback(
              (e) => {
                let t = "function" == typeof e ? e(w) : e;
                j(t);
                try {
                  localStorage.setItem(c, t);
                } catch (e) {}
              },
              [w],
            ),
            S = n.useCallback(
              (e) => {
                (P(x(e)), "system" === w && a && !t && L("system"));
              },
              [w, t],
            );
          (n.useEffect(() => {
            let e = window.matchMedia(o);
            return (e.addListener(S), S(e), () => e.removeListener(S));
          }, [S]),
            n.useEffect(() => {
              let e = (e) => {
                e.key === c && (e.newValue ? j(e.newValue) : E(d));
              };
              return (
                window.addEventListener("storage", e),
                () => window.removeEventListener("storage", e)
              );
            }, [E]),
            n.useEffect(() => {
              L(null != t ? t : w);
            }, [t, w]));
          let T = n.useMemo(
            () => ({
              theme: w,
              setTheme: E,
              forcedTheme: t,
              resolvedTheme: "system" === w ? N : w,
              themes: a ? [...u, "system"] : u,
              systemTheme: a ? N : void 0,
            }),
            [w, E, t, N, a, u],
          );
          return n.createElement(
            i.Provider,
            { value: T },
            n.createElement(f, {
              forcedTheme: t,
              storageKey: c,
              attribute: h,
              enableSystem: a,
              enableColorScheme: s,
              defaultTheme: d,
              value: b,
              themes: u,
              nonce: g,
              scriptProps: k,
            }),
            y,
          );
        },
        f = n.memo((e) => {
          let {
              forcedTheme: t,
              storageKey: r,
              attribute: l,
              enableSystem: o,
              enableColorScheme: s,
              defaultTheme: i,
              value: c,
              themes: u,
              nonce: d,
              scriptProps: m,
            } = e,
            h = JSON.stringify([l, r, i, t, u, c, o, s]).slice(1, -1);
          return n.createElement("script", {
            ...m,
            suppressHydrationWarning: !0,
            nonce: "undefined" == typeof window ? d : "",
            dangerouslySetInnerHTML: {
              __html: "(".concat(a.toString(), ")(").concat(h, ")"),
            },
          });
        }),
        p = (e, t) => {
          let r;
          if (!s) {
            try {
              r = localStorage.getItem(e) || void 0;
            } catch (e) {}
            return r || t;
          }
        },
        v = (e) => {
          let t = document.createElement("style");
          return (
            e && t.setAttribute("nonce", e),
            t.appendChild(
              document.createTextNode(
                "*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}",
              ),
            ),
            document.head.appendChild(t),
            () => {
              (window.getComputedStyle(document.body),
                setTimeout(() => {
                  document.head.removeChild(t);
                }, 1));
            }
          );
        },
        x = (e) => (
          e || (e = window.matchMedia(o)),
          e.matches ? "dark" : "light"
        );
    },
    85499: (e, t, r) => {
      "use strict";
      r.d(t, { Lu: () => s, cn: () => l });
      var n = r(58449),
        a = r(60817);
      function l() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return (0, a.QP)((0, n.$)(t));
      }
      function o(e) {
        if (!e) return "N/A";
        let t = new Date(e);
        return isNaN(t.getTime())
          ? e
          : t.toLocaleDateString(void 0, { year: "numeric", month: "long" });
      }
      function s(e, t, r) {
        let n = e ? o(e) : "N/A",
          a = r ? "Present" : t ? o(t) : "N/A";
        return "".concat(n, " - ").concat(a);
      }
    },
    86419: (e) => {
      e.exports = {
        style: {
          fontFamily: "'Manrope', 'Manrope Fallback'",
          fontStyle: "normal",
        },
        className: "__className_73ee6c",
        variable: "__variable_73ee6c",
      };
    },
    88732: (e, t, r) => {
      "use strict";
      r.d(t, { ThemeProvider: () => l });
      var n = r(31610),
        a = r(83473);
      function l(e) {
        let { children: t, ...r } = e;
        return (0, n.jsx)(a.N, { ...r, children: t });
      }
      r(87282);
    },
    96279: (e, t, r) => {
      "use strict";
      r.d(t, { LocaleSwitcher: () => f });
      var n = r(31610),
        a = r(24881),
        l = r(3872),
        o = r(87282),
        s = r(85499),
        i = r(28284);
      function c(e) {
        let { children: t, className: r } = e,
          [a, l] = (0, o.useState)(!1),
          i = () => l(!a),
          c = () => l(!1);
        (0, o.useEffect)(() => {
          if (!a) return;
          let e = () => c();
          return (
            document.addEventListener("click", e),
            () => document.removeEventListener("click", e)
          );
        }, [a]);
        let u = o.Children.map(t, (e) =>
          o.isValidElement(e)
            ? o.cloneElement(e, { isOpen: a, toggleMenu: i, closeMenu: c })
            : e,
        );
        return (0, n.jsx)("div", {
          className: (0, s.cn)("relative inline-block text-left", r),
          onClick: (e) => e.stopPropagation(),
          children: u,
        });
      }
      function u(e) {
        let {
          children: t,
          onClick: r,
          toggleMenu: a,
          className: l,
          isOpen: o,
        } = e;
        return (0, n.jsxs)(i.$, {
          onClick: () => {
            (null == a || a(), null == r || r());
          },
          variant: "ghost",
          size: "sm",
          className: l,
          children: [
            t,
            (0, n.jsx)("svg", {
              className: (0, s.cn)(
                "ml-2 h-4 w-4 transition-transform",
                o && "rotate-180",
              ),
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: (0, n.jsx)("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M19 9l-7 7-7-7",
              }),
            }),
          ],
        });
      }
      function d(e) {
        let { isOpen: t, children: r, className: a } = e;
        return t
          ? (0, n.jsx)("div", {
              className: (0, s.cn)(
                "absolute z-10 mt-2 w-full rounded-lg border border-border bg-card shadow-lg",
                a,
              ),
              children: (0, n.jsx)("div", { className: "py-1", children: r }),
            })
          : null;
      }
      function m(e) {
        let { children: t, onClick: r, closeMenu: a, className: l } = e;
        return (0, n.jsx)("div", {
          onClick: () => {
            (null == r || r(), null == a || a());
          },
          className: (0, s.cn)(
            "cursor-pointer px-3 py-2 text-sm hover:bg-muted",
            l,
          ),
          children: t,
        });
      }
      var h = r(75592);
      function f() {
        let e = (0, a.rd)(),
          [, t] = (0, o.useTransition)(),
          r = (0, a.a8)(),
          s = (0, l.Ym)();
        return (0, n.jsxs)(c, {
          children: [
            (0, n.jsx)(u, {
              className: "items-center",
              children: (0, n.jsx)("span", { children: s.toUpperCase() }),
            }),
            (0, n.jsx)(d, {
              className: "w-48",
              children: h.I.map((a) =>
                (0, n.jsx)(
                  m,
                  {
                    onClick: () => {
                      t(() => {
                        e.replace({ pathname: r }, { locale: a });
                      });
                    },
                    className: "flex items-center justify-between ".concat(
                      s === a ? "text-accent-foreground" : "",
                    ),
                    children: a.toUpperCase(),
                  },
                  a,
                ),
              ),
            }),
          ],
        });
      }
    },
    97204: (e, t, r) => {
      "use strict";
      r.d(t, { c3: () => l });
      var n = r(3872);
      function a(e, t) {
        return (...e) => {
          try {
            return t(...e);
          } catch {
            throw Error(void 0);
          }
        };
      }
      let l = a(0, n.c3);
      a(0, n.kc);
    },
  },
  (e) => {
    (e.O(0, [9456, 9258, 7712, 2417, 3601, 819, 5548, 7358], () =>
      e((e.s = 48305)),
    ),
      (_N_E = e.O()));
  },
]);
