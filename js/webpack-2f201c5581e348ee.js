(() => {
  "use strict";
  var e = {},
    t = {};
  function r(a) {
    var n = t[a];
    if (void 0 !== n) return n.exports;
    var o = (t[a] = { exports: {} }),
      d = !0;
    try {
      (e[a].call(o.exports, o, o.exports, r), (d = !1));
    } finally {
      d && delete t[a];
    }
    return o.exports;
  }
  ((r.m = e),
    (() => {
      var e = [];
      r.O = (t, a, n, o) => {
        if (a) {
          o = o || 0;
          for (var d = e.length; d > 0 && e[d - 1][2] > o; d--) e[d] = e[d - 1];
          e[d] = [a, n, o];
          return;
        }
        for (var f = 1 / 0, d = 0; d < e.length; d++) {
          for (var [a, n, o] = e[d], c = !0, i = 0; i < a.length; i++)
            (!1 & o || f >= o) && Object.keys(r.O).every((e) => r.O[e](a[i]))
              ? a.splice(i--, 1)
              : ((c = !1), o < f && (f = o));
          if (c) {
            e.splice(d--, 1);
            var l = n();
            void 0 !== l && (t = l);
          }
        }
        return t;
      };
    })(),
    (r.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return (r.d(t, { a: t }), t);
    }),
    (() => {
      var e,
        t = Object.getPrototypeOf
          ? (e) => Object.getPrototypeOf(e)
          : (e) => e.__proto__;
      r.t = function (a, n) {
        if (
          (1 & n && (a = this(a)),
          8 & n ||
            ("object" == typeof a &&
              a &&
              ((4 & n && a.__esModule) ||
                (16 & n && "function" == typeof a.then))))
        )
          return a;
        var o = Object.create(null);
        r.r(o);
        var d = {};
        e = e || [null, t({}), t([]), t(t)];
        for (
          var f = 2 & n && a;
          "object" == typeof f && !~e.indexOf(f);
          f = t(f)
        )
          Object.getOwnPropertyNames(f).forEach((e) => (d[e] = () => a[e]));
        return ((d.default = () => a), r.d(o, d), o);
      };
    })(),
    (r.d = (e, t) => {
      for (var a in t)
        r.o(t, a) &&
          !r.o(e, a) &&
          Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
    }),
    (r.f = {}),
    (r.e = (e) =>
      Promise.all(Object.keys(r.f).reduce((t, a) => (r.f[a](e, t), t), []))),
    (r.u = (e) =>
      "static/chunks/" +
      e +
      "." +
      {
        59: "a3e5ce3a2c6904e5",
        372: "bf65a953ef65d8d3",
        462: "971760cde7bf4468",
        564: "60f6614a08728900",
        689: "99b7479c8318f892",
        712: "6ccb891780f94771",
        1426: "da4082c947037286",
        1660: "28913b96f386145d",
        1755: "4fe7e358c1051785",
        1767: "437b9490d09eeb8a",
        1946: "467134aa16e4e3f6",
        2166: "5ba7329a28b85d44",
        2360: "daefc6ab229cd530",
        2390: "3e9085c4562ecce1",
        2798: "76692f7d5e869cc1",
        3135: "2e9aeab409fe0238",
        3355: "860f2ebad377acff",
        3437: "b99207397ecdc3f0",
        3799: "8a8da634adc42e19",
        4033: "910e81485d8dddfc",
        4078: "fa5cd6fccaeb021c",
        4249: "4b67ca245bf03c4e",
        4358: "28dd3ee609022e92",
        4486: "16d87c4c4eb5bfe6",
        4536: "ce67812d29d6fcb4",
        4742: "b74af555eea52697",
        4894: "3256bf71f466c4bf",
        5076: "7b81b1fbd97b46fb",
        5512: "6092d2ed7d795866",
        5826: "636bad9295a9d946",
        6414: "65d9415ddfbaa649",
        6420: "dbbf0c0d3085a8bb",
        6817: "4720772411996f14",
        6843: "8e8f8d22fbb82948",
        7150: "566cb78705ece774",
        7379: "58f1c1146c4c5c1a",
        7422: "7bd4a8578fd2b832",
        8405: "634dc6597b6245d0",
        8522: "1e6c3e362e758b77",
        8670: "8f51efc4907dcc1f",
        9096: "a33a64fcf903e668",
        9181: "92d35aa5d730f098",
        9301: "b28fd6d8ed335b47",
        9352: "61a94e49eae29cbe",
        9384: "b00f295abe87fd6c",
        9893: "963469959b0a919a",
        9957: "8029202aed10d14f",
      }[e] +
      ".js"),
    (r.miniCssF = (e) => "static/css/7aa83f4cc1666631.css"),
    (r.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = {},
        t = "_N_E:";
      r.l = (a, n, o, d) => {
        if (e[a]) return void e[a].push(n);
        if (void 0 !== o)
          for (
            var f, c, i = document.getElementsByTagName("script"), l = 0;
            l < i.length;
            l++
          ) {
            var u = i[l];
            if (
              u.getAttribute("src") == a ||
              u.getAttribute("data-webpack") == t + o
            ) {
              f = u;
              break;
            }
          }
        (f ||
          ((c = !0),
          ((f = document.createElement("script")).charset = "utf-8"),
          (f.timeout = 120),
          r.nc && f.setAttribute("nonce", r.nc),
          f.setAttribute("data-webpack", t + o),
          (f.src = r.tu(a))),
          (e[a] = [n]));
        var s = (t, r) => {
            ((f.onerror = f.onload = null), clearTimeout(b));
            var n = e[a];
            if (
              (delete e[a],
              f.parentNode && f.parentNode.removeChild(f),
              n && n.forEach((e) => e(r)),
              t)
            )
              return t(r);
          },
          b = setTimeout(
            s.bind(null, void 0, { type: "timeout", target: f }),
            12e4,
          );
        ((f.onerror = s.bind(null, f.onerror)),
          (f.onload = s.bind(null, f.onload)),
          c && document.head.appendChild(f));
      };
    })(),
    (r.r = (e) => {
      ("undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 }));
    }),
    (() => {
      var e;
      r.tt = () => (
        void 0 === e &&
          ((e = { createScriptURL: (e) => e }),
          "undefined" != typeof trustedTypes &&
            trustedTypes.createPolicy &&
            (e = trustedTypes.createPolicy("nextjs#bundler", e))),
        e
      );
    })(),
    (r.tu = (e) => r.tt().createScriptURL(e)),
    (r.p = "/_next/"),
    (() => {
      var e = { 8068: 0 };
      r.f.miniCss = (t, a) => {
        e[t]
          ? a.push(e[t])
          : 0 !== e[t] &&
            { 9555: 1 }[t] &&
            a.push(
              (e[t] = ((e) =>
                new Promise((t, a) => {
                  var n = r.miniCssF(e),
                    o = r.p + n;
                  if (
                    ((e, t) => {
                      for (
                        var r = document.getElementsByTagName("link"), a = 0;
                        a < r.length;
                        a++
                      ) {
                        var n = r[a],
                          o =
                            n.getAttribute("data-href") ||
                            n.getAttribute("href");
                        if ("stylesheet" === n.rel && (o === e || o === t))
                          return n;
                      }
                      for (
                        var d = document.getElementsByTagName("style"), a = 0;
                        a < d.length;
                        a++
                      ) {
                        var n = d[a],
                          o = n.getAttribute("data-href");
                        if (o === e || o === t) return n;
                      }
                    })(n, o)
                  )
                    return t();
                  ((e, t, r, a) => {
                    var n = document.createElement("link");
                    return (
                      (n.rel = "stylesheet"),
                      (n.type = "text/css"),
                      (n.onerror = n.onload =
                        (o) => {
                          if (
                            ((n.onerror = n.onload = null), "load" === o.type)
                          )
                            r();
                          else {
                            var d =
                                o && ("load" === o.type ? "missing" : o.type),
                              f = (o && o.target && o.target.href) || t,
                              c = Error(
                                "Loading CSS chunk " +
                                  e +
                                  " failed.\n(" +
                                  f +
                                  ")",
                              );
                            ((c.code = "CSS_CHUNK_LOAD_FAILED"),
                              (c.type = d),
                              (c.request = f),
                              n.parentNode.removeChild(n),
                              a(c));
                          }
                        }),
                      (n.href = t),
                      !(function (e) {
                        if ("function" == typeof _N_E_STYLE_LOAD) {
                          let { href: t, onload: r, onerror: a } = e;
                          _N_E_STYLE_LOAD(
                            0 === t.indexOf(window.location.origin)
                              ? new URL(t).pathname
                              : t,
                          ).then(
                            () =>
                              null == r ? void 0 : r.call(e, { type: "load" }),
                            () => (null == a ? void 0 : a.call(e, {})),
                          );
                        } else document.head.appendChild(e);
                      })(n)
                    );
                  })(e, o, t, a);
                }))(t).then(
                () => {
                  e[t] = 0;
                },
                (r) => {
                  throw (delete e[t], r);
                },
              )),
            );
      };
    })(),
    (() => {
      var e = { 8068: 0, 3138: 0, 2846: 0, 3793: 0, 6766: 0, 9903: 0, 9456: 0 };
      ((r.f.j = (t, a) => {
        var n = r.o(e, t) ? e[t] : void 0;
        if (0 !== n)
          if (n) a.push(n[2]);
          else if (/^(9(456|555|903)|2846|3138|3793|6766|8068)$/.test(t))
            e[t] = 0;
          else {
            var o = new Promise((r, a) => (n = e[t] = [r, a]));
            a.push((n[2] = o));
            var d = r.p + r.u(t),
              f = Error();
            r.l(
              d,
              (a) => {
                if (r.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0), n)) {
                  var o = a && ("load" === a.type ? "missing" : a.type),
                    d = a && a.target && a.target.src;
                  ((f.message =
                    "Loading chunk " + t + " failed.\n(" + o + ": " + d + ")"),
                    (f.name = "ChunkLoadError"),
                    (f.type = o),
                    (f.request = d),
                    n[1](f));
                }
              },
              "chunk-" + t,
              t,
            );
          }
      }),
        (r.O.j = (t) => 0 === e[t]));
      var t = (t, a) => {
          var n,
            o,
            [d, f, c] = a,
            i = 0;
          if (d.some((t) => 0 !== e[t])) {
            for (n in f) r.o(f, n) && (r.m[n] = f[n]);
            if (c) var l = c(r);
          }
          for (t && t(a); i < d.length; i++)
            ((o = d[i]), r.o(e, o) && e[o] && e[o][0](), (e[o] = 0));
          return r.O(l);
        },
        a = (self.webpackChunk_N_E = self.webpackChunk_N_E || []);
      (a.forEach(t.bind(null, 0)), (a.push = t.bind(null, a.push.bind(a))));
    })());
})();
(function () {
  if (
    typeof document === "undefined" ||
    !/(?:^|;\s)__vercel_toolbar=1(?:;|$)/.test(document.cookie)
  )
    return;
  var s = document.createElement("script");
  s.src = "https://vercel.live/_next-live/feedback/feedback.js";
  s.setAttribute("data-explicit-opt-in", "true");
  s.setAttribute("data-cookie-opt-in", "true");
  s.setAttribute("data-deployment-id", "dpl_J7t1JdHRtxJM1GWD2VPrm6JcGKFA");
  (document.head || document.documentElement).appendChild(s);
})();
