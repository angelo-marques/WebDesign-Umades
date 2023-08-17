var gapi = window.gapi = window.gapi || {};
gapi._bs = new Date().getTime();
(function () {
    var aa = function () {
            throw Error("unimplemented abstract method");
        },
        ba = function (a, b, c) {
            return a.call.apply(a.bind, arguments)
        },
        ca = function (a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function () {
                    var c = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(c, d);
                    return a.apply(b, c)
                }
            }
            return function () {
                return a.apply(b, arguments)
            }
        },
        da = function (a, b, c) {
            da = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ?
                ba : ca;
            return da.apply(null, arguments)
        };
    var n = window,
        p = document,
        q = n.location,
        ea = function () {},
        fa = /\[native code\]/,
        u = function (a, b, c) {
            return a[b] = a[b] || c
        },
        ga = function (a) {
            for (var b = 0; b < this.length; b++)
                if (this[b] === a) return b;
            return -1
        },
        ha = function (a) {
            a = a.sort();
            for (var b = [], c = void 0, d = 0; d < a.length; d++) {
                var e = a[d];
                e != c && b.push(e);
                c = e
            }
            return b
        },
        ia = /&/g,
        ja = /</g,
        ka = />/g,
        la = /"/g,
        ma = /'/g,
        na = function (a) {
            return String(a).replace(ia, "&amp;").replace(ja, "&lt;").replace(ka, "&gt;").replace(la, "&quot;").replace(ma, "&#39;")
        },
        v = function () {
            var a;
            if ((a = Object.create) &&
                fa.test(a)) a = a(null);
            else {
                a = {};
                for (var b in a) a[b] = void 0
            }
            return a
        },
        x = function (a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        },
        z = function (a) {
            if (fa.test(Object.keys)) return Object.keys(a);
            var b = [],
                c;
            for (c in a) x(a, c) && b.push(c);
            return b
        },
        A = function (a, b) {
            a = a || {};
            for (var c in a) x(a, c) && (b[c] = a[c])
        },
        oa = function (a) {
            return function () {
                n.setTimeout(a, 0)
            }
        },
        B = function (a, b) {
            if (!a) throw Error(b || "");
        },
        C = u(n, "gapi", {});
    var D = function (a, b, c) {
            var d = new RegExp("([#].*&|[#])" + b + "=([^&#]*)", "g");
            b = new RegExp("([?#].*&|[?#])" + b + "=([^&#]*)", "g");
            if (a = a && (d.exec(a) || b.exec(a))) try {
                c = decodeURIComponent(a[2])
            } catch (e) {}
            return c
        },
        pa = /^([^?#]*)(\?([^#]*))?(\#(.*))?$/,
        qa = function (a) {
            a = a.match(pa);
            var b = v();
            b.J = a[1];
            b.query = a[3] ? [a[3]] : [];
            b.o = a[5] ? [a[5]] : [];
            return b
        },
        sa = function (a) {
            return a.J + (0 < a.query.length ? "?" + a.query.join("&") : "") + (0 < a.o.length ? "#" + a.o.join("&") : "")
        },
        ta = function (a, b) {
            var c = [];
            if (a)
                for (var d in a)
                    if (x(a,
                            d) && null != a[d]) {
                        var e = b ? b(a[d]) : a[d];
                        c.push(encodeURIComponent(d) + "=" + encodeURIComponent(e))
                    }
            return c
        },
        ua = function (a, b, c, d) {
            a = qa(a);
            a.query.push.apply(a.query, ta(b, d));
            a.o.push.apply(a.o, ta(c, d));
            return sa(a)
        },
        va = function (a, b) {
            var c = "";
            2E3 < b.length && (c = b.substring(2E3), b = b.substring(0, 2E3));
            var d = a.createElement("div");
            a = a.createElement("a");
            a.href = b;
            d.appendChild(a);
            d.innerHTML = d.innerHTML;
            b = String(d.firstChild.href);
            d.parentNode && d.parentNode.removeChild(d);
            return b + c
        },
        wa = /^https?:\/\/[^\/%\\?#\s]+\/[^\s]*$/i;
    var E = function (a, b, c, d) {
            if (n[c + "EventListener"]) n[c + "EventListener"](a, b, !1);
            else if (n[d + "tachEvent"]) n[d + "tachEvent"]("on" + a, b)
        },
        xa = function () {
            var a = p.readyState;
            return "complete" === a || "interactive" === a && -1 == navigator.userAgent.indexOf("MSIE")
        },
        Aa = function (a) {
            var b = ya;
            if (!xa()) try {
                b()
            } catch (c) {}
            za(a)
        },
        za = function (a) {
            if (xa()) a();
            else {
                var b = !1,
                    c = function () {
                        if (!b) return b = !0, a.apply(this, arguments)
                    };
                n.addEventListener ? (n.addEventListener("load", c, !1), n.addEventListener("DOMContentLoaded", c, !1)) : n.attachEvent &&
                    (n.attachEvent("onreadystatechange", function () {
                        xa() && c.apply(this, arguments)
                    }), n.attachEvent("onload", c))
            }
        },
        Ba = function (a) {
            for (; a.firstChild;) a.removeChild(a.firstChild)
        },
        Ca = {
            button: !0,
            div: !0,
            span: !0
        };
    var H;
    H = u(n, "___jsl", v());
    u(H, "I", 0);
    u(H, "hel", 10);
    var I = function (a) {
            return H.dpo ? H.h : D(a, "jsh", H.h)
        },
        Da = function (a) {
            var b = u(H, "sws", []);
            b.push.apply(b, a)
        },
        Ea = function (a) {
            return u(H, "watt", v())[a]
        },
        Fa = function (a) {
            var b = u(H, "PQ", []);
            H.PQ = [];
            var c = b.length;
            if (0 === c) a();
            else
                for (var d = 0, e = function () {
                        ++d === c && a()
                    }, f = 0; f < c; f++) b[f](e)
        },
        Ga = function (a) {
            return u(u(H, "H", v()), a, v())
        };
    var J = u(H, "perf", v()),
        Ha = u(J, "g", v()),
        Ia = u(J, "i", v());
    u(J, "r", []);
    v();
    v();
    var Ja = function (a, b, c) {
            var d = J.r;
            "function" === typeof d ? d(a, b, c) : d.push([a, b, c])
        },
        K = function (a, b, c) {
            Ha[a] = !b && Ha[a] || c || (new Date).getTime();
            Ja(a)
        },
        La = function (a, b, c) {
            b && 0 < b.length && (b = Ka(b), c && 0 < c.length && (b += "___" + Ka(c)), 28 < b.length && (b = b.substr(0, 28) + (b.length - 28)), c = b, b = u(Ia, "_p", v()), u(b, c, v())[a] = (new Date).getTime(), Ja(a, "_p", c))
        },
        Ka = function (a) {
            return a.join("__").replace(/\./g, "_").replace(/\-/g, "_").replace(/\,/g, "_")
        };
    var Ma = v(),
        L = [],
        M = function (a) {
            throw Error("Bad hint" + (a ? ": " + a : ""));
        };
    L.push(["jsl", function (a) {
        for (var b in a)
            if (x(a, b)) {
                var c = a[b];
                "object" == typeof c ? H[b] = u(H, b, []).concat(c) : u(H, b, c)
            }
        if (b = a.u) a = u(H, "us", []), a.push(b), (b = /^https:(.*)$/.exec(b)) && a.push("http:" + b[1])
    }]);
    var Na = /^(\/[a-zA-Z0-9_\-]+)+$/,
        Oa = /^[a-zA-Z0-9\-_\.,!]+$/,
        Pa = /^gapi\.loaded_[0-9]+$/,
        Qa = /^[a-zA-Z0-9,._-]+$/,
        Ua = function (a, b, c, d) {
            var e = a.split(";"),
                f = e.shift(),
                g = Ma[f],
                k = null;
            g ? k = g(e, b, c, d) : M("no hint processor for: " + f);
            k || M("failed to generate load url");
            b = k;
            c = b.match(Ra);
            (d = b.match(Sa)) && 1 === d.length && Ta.test(b) && c && 1 === c.length || M("failed sanity: " + a);
            return k
        },
        Xa = function (a, b, c, d) {
            a = Va(a);
            Pa.test(c) || M("invalid_callback");
            b = Wa(b);
            d = d && d.length ? Wa(d) : null;
            var e = function (a) {
                return encodeURIComponent(a).replace(/%2C/g,
                    ",")
            };
            return [encodeURIComponent(a.Z).replace(/%2C/g, ",").replace(/%2F/g, "/"), "/k=", e(a.version), "/m=", e(b), d ? "/exm=" + e(d) : "", "/rt=j/sv=1/d=1/ed=1", a.H ? "/am=" + e(a.H) : "", a.S ? "/rs=" + e(a.S) : "", a.U ? "/t=" + e(a.U) : "", "/cb=", e(c)].join("")
        },
        Va = function (a) {
            "/" !== a.charAt(0) && M("relative path");
            for (var b = a.substring(1).split("/"), c = []; b.length;) {
                a = b.shift();
                if (!a.length || 0 == a.indexOf(".")) M("empty/relative directory");
                else if (0 < a.indexOf("=")) {
                    b.unshift(a);
                    break
                }
                c.push(a)
            }
            a = {};
            for (var d = 0, e = b.length; d < e; ++d) {
                var f =
                    b[d].split("="),
                    g = decodeURIComponent(f[0]),
                    k = decodeURIComponent(f[1]);
                2 == f.length && g && k && (a[g] = a[g] || k)
            }
            b = "/" + c.join("/");
            Na.test(b) || M("invalid_prefix");
            c = Ya(a, "k", !0);
            d = Ya(a, "am");
            e = Ya(a, "rs");
            a = Ya(a, "t");
            return {
                Z: b,
                version: c,
                H: d,
                S: e,
                U: a
            }
        },
        Wa = function (a) {
            for (var b = [], c = 0, d = a.length; c < d; ++c) {
                var e = a[c].replace(/\./g, "_").replace(/-/g, "_");
                Qa.test(e) && b.push(e)
            }
            return b.join(",")
        },
        Ya = function (a, b, c) {
            a = a[b];
            !a && c && M("missing: " + b);
            if (a) {
                if (Oa.test(a)) return a;
                M("invalid: " + b)
            }
            return null
        },
        Ta = /^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,
        Sa = /\/cb=/g,
        Ra = /\/\//g,
        Za = function () {
            var a = I(q.href);
            if (!a) throw Error("Bad hint");
            return a
        };
    Ma.m = function (a, b, c, d) {
        (a = a[0]) || M("missing_hint");
        return "https://apis.google.com" + Xa(a, b, c, d)
    };
    var N = decodeURI("%73cript"),
        $a = /^[-+_0-9\/A-Za-z]+={0,2}$/,
        ab = function (a, b) {
            for (var c = [], d = 0; d < a.length; ++d) {
                var e = a[d];
                e && 0 > ga.call(b, e) && c.push(e)
            }
            return c
        },
        bb = function () {
            var a = H.nonce;
            if (void 0 !== a) return a && a === String(a) && a.match($a) ? a : H.nonce = null;
            var b = u(H, "us", []);
            if (!b || !b.length) return H.nonce = null;
            for (var c = p.getElementsByTagName(N), d = 0, e = c.length; d < e; ++d) {
                var f = c[d];
                if (f.src && (a = String(f.getAttribute("nonce") || "") || null)) {
                    for (var g = 0, k = b.length; g < k && b[g] !== f.src; ++g);
                    if (g !== k && a && a === String(a) &&
                        a.match($a)) return H.nonce = a
                }
            }
            return null
        },
        db = function (a) {
            if ("loading" != p.readyState) cb(a);
            else {
                var b = bb(),
                    c = "";
                null !== b && (c = ' nonce="' + b + '"');
                p.write("<" + N + ' src="' + encodeURI(a) + '"' + c + "></" + N + ">")
            }
        },
        cb = function (a) {
            var b = p.createElement(N);
            b.setAttribute("src", a);
            a = bb();
            null !== a && b.setAttribute("nonce", a);
            b.async = "true";
            (a = p.getElementsByTagName(N)[0]) ? a.parentNode.insertBefore(b, a): (p.head || p.body || p.documentElement).appendChild(b)
        },
        eb = function (a, b) {
            var c = b && b._c;
            if (c)
                for (var d = 0; d < L.length; d++) {
                    var e =
                        L[d][0],
                        f = L[d][1];
                    f && x(c, e) && f(c[e], a, b)
                }
        },
        gb = function (a, b, c) {
            fb(function () {
                var c;
                c = b === I(q.href) ? u(C, "_", v()) : v();
                c = u(Ga(b), "_", c);
                a(c)
            }, c)
        },
        O = function (a, b) {
            var c = b || {};
            "function" == typeof b && (c = {}, c.callback = b);
            eb(a, c);
            b = a ? a.split(":") : [];
            var d = c.h || Za(),
                e = u(H, "ah", v());
            if (e["::"] && b.length) {
                a = [];
                for (var f = null; f = b.shift();) {
                    var g = f.split("."),
                        g = e[f] || e[g[1] && "ns:" + g[0] || ""] || d,
                        k = a.length && a[a.length - 1] || null,
                        h = k;
                    k && k.hint == g || (h = {
                        hint: g,
                        M: []
                    }, a.push(h));
                    h.M.push(f)
                }
                var l = a.length;
                if (1 < l) {
                    var m =
                        c.callback;
                    m && (c.callback = function () {
                        0 == --l && m()
                    })
                }
                for (; b = a.shift();) hb(b.M, c, b.hint)
            } else hb(b || [], c, d)
        },
        hb = function (a, b, c) {
            a = ha(a) || [];
            var d = b.callback,
                e = b.config,
                f = b.timeout,
                g = b.ontimeout,
                k = b.onerror,
                h = void 0;
            "function" == typeof k && (h = k);
            var l = null,
                m = !1;
            if (f && !g || !f && g) throw "Timeout requires both the timeout parameter and ontimeout parameter to be set";
            var k = u(Ga(c), "r", []).sort(),
                r = u(Ga(c), "L", []).sort(),
                w = [].concat(k),
                t = function (a, b) {
                    if (m) return 0;
                    n.clearTimeout(l);
                    r.push.apply(r, y);
                    var d = ((C || {}).config || {}).update;
                    d ? d(e) : e && u(H, "cu", []).push(e);
                    if (b) {
                        La("me0", a, w);
                        try {
                            gb(b, c, h)
                        } finally {
                            La("me1", a, w)
                        }
                    }
                    return 1
                };
            0 < f && (l = n.setTimeout(function () {
                m = !0;
                g()
            }, f));
            var y = ab(a, r);
            if (y.length) {
                var y = ab(a, k),
                    F = u(H, "CP", []),
                    G = F.length;
                F[G] = function (a) {
                    if (!a) return 0;
                    La("ml1", y, w);
                    var b = function (b) {
                            F[G] = null;
                            t(y, a) && Fa(function () {
                                d && d();
                                b()
                            })
                        },
                        c = function () {
                            var a = F[G + 1];
                            a && a()
                        };
                    0 < G && F[G - 1] ? F[G] = function () {
                        b(c)
                    } : b(c)
                };
                if (y.length) {
                    var ra = "loaded_" + H.I++;
                    C[ra] = function (a) {
                        F[G](a);
                        C[ra] = null
                    };
                    a = Ua(c, y,
                        "gapi." + ra, k);
                    k.push.apply(k, y);
                    La("ml0", y, w);
                    b.sync || n.___gapisync ? db(a) : cb(a)
                } else F[G](ea)
            } else t(y) && d && d()
        };
    var fb = function (a, b) {
        if (H.hee && 0 < H.hel) try {
            return a()
        } catch (c) {
            b && b(c), H.hel--, O("debug_error", function () {
                try {
                    window.___jsl.hefn(c)
                } catch (d) {
                    throw c;
                }
            })
        } else try {
            return a()
        } catch (c) {
            throw b && b(c), c;
        }
    };
    C.load = function (a, b) {
        return fb(function () {
            return O(a, b)
        })
    };
    var P = function (a) {
            var b = window.___jsl = window.___jsl || {};
            b[a] = b[a] || [];
            return b[a]
        },
        Q = function (a) {
            var b = window.___jsl = window.___jsl || {};
            b.cfg = !a && b.cfg || {};
            return b.cfg
        },
        ib = function (a) {
            return "object" === typeof a && /\[native code\]/.test(a.push)
        },
        R = function (a, b) {
            if (b)
                for (var c in b) b.hasOwnProperty(c) && (a[c] && b[c] && "object" === typeof a[c] && "object" === typeof b[c] && !ib(a[c]) && !ib(b[c]) ? R(a[c], b[c]) : b[c] && "object" === typeof b[c] ? (a[c] = ib(b[c]) ? [] : {}, R(a[c], b[c])) : a[c] = b[c])
        },
        jb = function (a) {
            if (a && !/^\s+$/.test(a)) {
                for (; 0 ==
                    a.charCodeAt(a.length - 1);) a = a.substring(0, a.length - 1);
                var b;
                try {
                    b = window.JSON.parse(a)
                } catch (c) {}
                if ("object" === typeof b) return b;
                try {
                    b = (new Function("return (" + a + "\n)"))()
                } catch (c) {}
                if ("object" === typeof b) return b;
                try {
                    b = (new Function("return ({" + a + "\n})"))()
                } catch (c) {}
                return "object" === typeof b ? b : {}
            }
        },
        kb = function (a) {
            Q(!0);
            var b = window.___gcfg,
                c = P("cu");
            if (b && b !== window.___gu) {
                var d = {};
                R(d, b);
                c.push(d);
                window.___gu = b
            }
            var b = P("cu"),
                e = document.scripts || document.getElementsByTagName("script") || [],
                d = [],
                f = [];
            f.push.apply(f, P("us"));
            for (var g = 0; g < e.length; ++g)
                for (var k = e[g], h = 0; h < f.length; ++h) k.src && 0 == k.src.indexOf(f[h]) && d.push(k);
            0 == d.length && 0 < e.length && e[e.length - 1].src && d.push(e[e.length - 1]);
            for (e = 0; e < d.length; ++e) d[e].getAttribute("gapi_processed") || (d[e].setAttribute("gapi_processed", !0), (f = d[e]) ? (g = f.nodeType, f = 3 == g || 4 == g ? f.nodeValue : f.textContent || f.innerText || f.innerHTML || "") : f = void 0, (f = jb(f)) && b.push(f));
            a && (d = {}, R(d, a), c.push(d));
            d = P("cd");
            a = 0;
            for (b = d.length; a < b; ++a) R(Q(), d[a]);
            d = P("ci");
            a = 0;
            for (b = d.length; a < b; ++a) R(Q(), d[a]);
            a = 0;
            for (b = c.length; a < b; ++a) R(Q(), c[a])
        },
        S = function (a) {
            if (!a) return Q();
            a = a.split("/");
            for (var b = Q(), c = 0, d = a.length; b && "object" === typeof b && c < d; ++c) b = b[a[c]];
            return c === a.length && void 0 !== b ? b : void 0
        },
        lb = function (a, b) {
            var c = a;
            if ("string" === typeof a) {
                var d = c = {};
                a = a.split("/");
                for (var e = 0, f = a.length; e < f - 1; ++e) var g = {},
                    d = d[a[e]] = g;
                d[a[e]] = b
            }
            kb(c)
        };
    var mb = function () {
        var a = window.__GOOGLEAPIS;
        a && (a.googleapis && !a["googleapis.config"] && (a["googleapis.config"] = a.googleapis), u(H, "ci", []).push(a), window.__GOOGLEAPIS = void 0)
    };
    var nb = {
            apppackagename: 1,
            callback: 1,
            clientid: 1,
            cookiepolicy: 1,
            openidrealm: -1,
            includegrantedscopes: -1,
            requestvisibleactions: 1,
            scope: 1
        },
        ob = !1,
        pb = v(),
        qb = function () {
            if (!ob) {
                for (var a = document.getElementsByTagName("meta"), b = 0; b < a.length; ++b) {
                    var c = a[b].name.toLowerCase();
                    if (0 == c.lastIndexOf("google-signin-", 0)) {
                        var c = c.substring(14),
                            d = a[b].content;
                        nb[c] && d && (pb[c] = d)
                    }
                }
                if (window.self !== window.top) {
                    var a = document.location.toString(),
                        e;
                    for (e in nb) 0 < nb[e] && (b = D(a, e, "")) && (pb[e] = b)
                }
                ob = !0
            }
            e = v();
            A(pb, e);
            return e
        },
        rb = function (a) {
            return !!(a.clientid && a.scope && a.callback)
        };
    var sb = window.console,
        tb = function (a) {
            sb && sb.log && sb.log(a)
        };
    var ub = function () {
            return !!H.oa
        },
        vb = function () {};
    var T = u(H, "rw", v()),
        wb = function (a) {
            for (var b in T) a(T[b])
        },
        xb = function (a, b) {
            (a = T[a]) && a.state < b && (a.state = b)
        };
    var yb;
    var zb = /^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?\#]*)?\/u\/(\d)\//,
        Ab = /^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?\#]*)?\/b\/(\d{10,})\//,
        Bb = function (a) {
            var b = S("googleapis.config/sessionIndex");
            null == b && (b = window.__X_GOOG_AUTHUSER);
            if (null == b) {
                var c = window.google;
                c && (b = c.authuser)
            }
            null == b && (a = a || window.location.href, b = D(a, "authuser") || null, null == b && (b = (b = a.match(zb)) ? b[1] : null));
            return null == b ? null : String(b)
        },
        Cb = function (a) {
            var b = S("googleapis.config/sessionDelegate");
            null == b && (b = (a = (a || window.location.href).match(Ab)) ? a[1] : null);
            return null == b ? null : String(b)
        };
    var U = function () {
        this.g = -1
    };
    U.prototype.reset = aa;
    U.prototype.update = aa;
    U.prototype.digest = aa;
    var V = function () {
        this.g = 64;
        this.b = [];
        this.B = [];
        this.V = [];
        this.v = [];
        this.v[0] = 128;
        for (var a = 1; a < this.g; ++a) this.v[a] = 0;
        this.w = this.j = 0;
        this.reset()
    };
    (function () {
        function a() {}
        a.prototype = U.prototype;
        V.fa = U.prototype;
        V.prototype = new a;
        V.J = function (a, c, d) {
            for (var b = Array(arguments.length - 2), f = 2; f < arguments.length; f++) b[f - 2] = arguments[f];
            return U.prototype[c].apply(a, b)
        }
    })();
    V.prototype.reset = function () {
        this.b[0] = 1732584193;
        this.b[1] = 4023233417;
        this.b[2] = 2562383102;
        this.b[3] = 271733878;
        this.b[4] = 3285377520;
        this.w = this.j = 0
    };
    var Db = function (a, b, c) {
        c || (c = 0);
        var d = a.V;
        if ("string" == typeof b)
            for (var e = 0; 16 > e; e++) d[e] = b.charCodeAt(c) << 24 | b.charCodeAt(c + 1) << 16 | b.charCodeAt(c + 2) << 8 | b.charCodeAt(c + 3), c += 4;
        else
            for (e = 0; 16 > e; e++) d[e] = b[c] << 24 | b[c + 1] << 16 | b[c + 2] << 8 | b[c + 3], c += 4;
        for (e = 16; 80 > e; e++) {
            var f = d[e - 3] ^ d[e - 8] ^ d[e - 14] ^ d[e - 16];
            d[e] = (f << 1 | f >>> 31) & 4294967295
        }
        b = a.b[0];
        c = a.b[1];
        for (var g = a.b[2], k = a.b[3], h = a.b[4], l, e = 0; 80 > e; e++) 40 > e ? 20 > e ? (f = k ^ c & (g ^ k), l = 1518500249) : (f = c ^ g ^ k, l = 1859775393) : 60 > e ? (f = c & g | k & (c | g), l = 2400959708) : (f = c ^ g ^ k,
            l = 3395469782), f = (b << 5 | b >>> 27) + f + h + l + d[e] & 4294967295, h = k, k = g, g = (c << 30 | c >>> 2) & 4294967295, c = b, b = f;
        a.b[0] = a.b[0] + b & 4294967295;
        a.b[1] = a.b[1] + c & 4294967295;
        a.b[2] = a.b[2] + g & 4294967295;
        a.b[3] = a.b[3] + k & 4294967295;
        a.b[4] = a.b[4] + h & 4294967295
    };
    V.prototype.update = function (a, b) {
        if (null != a) {
            void 0 === b && (b = a.length);
            for (var c = b - this.g, d = 0, e = this.B, f = this.j; d < b;) {
                if (0 == f)
                    for (; d <= c;) Db(this, a, d), d += this.g;
                if ("string" == typeof a)
                    for (; d < b;) {
                        if (e[f] = a.charCodeAt(d), ++f, ++d, f == this.g) {
                            Db(this, e);
                            f = 0;
                            break
                        }
                    } else
                        for (; d < b;)
                            if (e[f] = a[d], ++f, ++d, f == this.g) {
                                Db(this, e);
                                f = 0;
                                break
                            }
            }
            this.j = f;
            this.w += b
        }
    };
    V.prototype.digest = function () {
        var a = [],
            b = 8 * this.w;
        56 > this.j ? this.update(this.v, 56 - this.j) : this.update(this.v, this.g - (this.j - 56));
        for (var c = this.g - 1; 56 <= c; c--) this.B[c] = b & 255, b /= 256;
        Db(this, this.B);
        for (c = b = 0; 5 > c; c++)
            for (var d = 24; 0 <= d; d -= 8) a[b] = this.b[c] >> d & 255, ++b;
        return a
    };
    var Eb = function () {
        this.F = new V
    };
    Eb.prototype.reset = function () {
        this.F.reset()
    };
    var Fb = n.crypto,
        Gb = !1,
        Hb = 0,
        Ib = 0,
        Jb = 1,
        Kb = 0,
        Lb = "",
        Mb = function (a) {
            a = a || n.event;
            var b = a.screenX + a.clientX << 16,
                b = b + (a.screenY + a.clientY),
                b = (new Date).getTime() % 1E6 * b;
            Jb = Jb * b % Kb;
            0 < Hb && ++Ib == Hb && E("mousemove", Mb, "remove", "de")
        },
        Nb = function (a) {
            var b = new Eb;
            a = unescape(encodeURIComponent(a));
            for (var c = [], d = 0, e = a.length; d < e; ++d) c.push(a.charCodeAt(d));
            b.F.update(c);
            b = b.F.digest();
            a = "";
            for (c = 0; c < b.length; c++) a += "0123456789ABCDEF".charAt(Math.floor(b[c] / 16)) + "0123456789ABCDEF".charAt(b[c] % 16);
            return a
        },
        Gb = !!Fb &&
        "function" == typeof Fb.getRandomValues;
    Gb || (Kb = 1E6 * (screen.width * screen.width + screen.height), Lb = Nb(p.cookie + "|" + p.location + "|" + (new Date).getTime() + "|" + Math.random()), Hb = S("random/maxObserveMousemove") || 0, 0 != Hb && E("mousemove", Mb, "add", "at"));
    var Ob = function () {
            var a = Jb,
                a = a + parseInt(Lb.substr(0, 20), 16);
            Lb = Nb(Lb);
            return a / (Kb + Math.pow(16, 20))
        },
        Pb = function () {
            var a = new n.Uint32Array(1);
            Fb.getRandomValues(a);
            return Number("0." + a[0])
        };
    var Qb = function () {
            var a = H.onl;
            if (!a) {
                a = v();
                H.onl = a;
                var b = v();
                a.e = function (a) {
                    var c = b[a];
                    c && (delete b[a], c())
                };
                a.a = function (a, d) {
                    b[a] = d
                };
                a.r = function (a) {
                    delete b[a]
                }
            }
            return a
        },
        Rb = function (a, b) {
            b = b.onload;
            return "function" === typeof b ? (Qb().a(a, b), b) : null
        },
        Sb = function (a) {
            B(/^\w+$/.test(a), "Unsupported id - " + a);
            Qb();
            return 'onload="window.___jsl.onl.e(&#34;' + a + '&#34;)"'
        },
        Tb = function (a) {
            Qb().r(a)
        };
    var Ub = {
            allowtransparency: "true",
            frameborder: "0",
            hspace: "0",
            marginheight: "0",
            marginwidth: "0",
            scrolling: "no",
            style: "",
            tabindex: "0",
            vspace: "0",
            width: "100%"
        },
        Vb = {
            allowtransparency: !0,
            onload: !0
        },
        Wb = 0,
        Xb = function (a) {
            B(!a || wa.test(a), "Illegal url for new iframe - " + a)
        },
        Yb = function (a, b, c, d, e) {
            Xb(c.src);
            var f, g = Rb(d, c),
                k = g ? Sb(d) : "";
            try {
                document.all && (f = a.createElement('<iframe frameborder="' + na(String(c.frameborder)) + '" scrolling="' + na(String(c.scrolling)) + '" ' + k + ' name="' + na(String(c.name)) + '"/>'))
            } catch (l) {} finally {
                f ||
                    (f = a.createElement("iframe"), g && (f.onload = function () {
                        f.onload = null;
                        g.call(this)
                    }, Tb(d)))
            }
            for (var h in c) a = c[h], "style" === h && "object" === typeof a ? A(a, f.style) : Vb[h] || f.setAttribute(h, String(a));
            (h = e && e.beforeNode || null) || e && e.dontclear || Ba(b);
            b.insertBefore(f, h);
            f = h ? h.previousSibling : b.lastChild;
            c.allowtransparency && (f.allowTransparency = !0);
            return f
        };
    var Zb = /^:[\w]+$/,
        $b = /:([a-zA-Z_]+):/g,
        ac = function () {
            var a = Bb() || "0",
                b = Cb(),
                c;
            c = Bb(void 0) || a;
            var d = Cb(void 0),
                e = "";
            c && (e += "u/" + c + "/");
            d && (e += "b/" + d + "/");
            c = e || null;
            (e = (d = !1 === S("isLoggedIn")) ? "_/im/" : "") && (c = "");
            var f = S("iframes/:socialhost:"),
                g = S("iframes/:im_socialhost:");
            return yb = {
                socialhost: f,
                ctx_socialhost: d ? g : f,
                session_index: a,
                session_delegate: b,
                session_prefix: c,
                im_prefix: e
            }
        },
        bc = function (a, b) {
            return ac()[b] || ""
        },
        cc = function (a) {
            return function (b, c) {
                return a ? ac()[c] || a[c] || "" : ac()[c] || ""
            }
        };
    var dc = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        },
        ec = function (a) {
            var b, c, d;
            b = /[\"\\\x00-\x1f\x7f-\x9f]/g;
            if (void 0 !== a) {
                switch (typeof a) {
                case "string":
                    return b.test(a) ? '"' + a.replace(b, function (a) {
                        var b = dc[a];
                        if (b) return b;
                        b = a.charCodeAt();
                        return "\\u00" + Math.floor(b / 16).toString(16) + (b % 16).toString(16)
                    }) + '"' : '"' + a + '"';
                case "number":
                    return isFinite(a) ? String(a) : "null";
                case "boolean":
                case "null":
                    return String(a);
                case "object":
                    if (!a) return "null";
                    b = [];
                    if ("number" ===
                        typeof a.length && !a.propertyIsEnumerable("length")) {
                        d = a.length;
                        for (c = 0; c < d; c += 1) b.push(ec(a[c]) || "null");
                        return "[" + b.join(",") + "]"
                    }
                    for (c in a) !/___$/.test(c) && x(a, c) && "string" === typeof c && (d = ec(a[c])) && b.push(ec(c) + ":" + d);
                    return "{" + b.join(",") + "}"
                }
                return ""
            }
        },
        fc = function (a) {
            if (!a) return !1;
            if (/^[\],:{}\s]*$/.test(a.replace(/\\["\\\/b-u]/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) try {
                return eval("(" + a + ")")
            } catch (b) {}
            return !1
        },
        gc = !1;
    try {
        gc = !!window.JSON && '["a"]' === window.JSON.stringify(["a"]) && "a" === window.JSON.parse('["a"]')[0]
    } catch (a) {}
    var hc = function (a) {
            try {
                return window.JSON.parse(a)
            } catch (b) {
                return !1
            }
        },
        ic = gc ? window.JSON.stringify : ec,
        jc = gc ? hc : fc;
    var kc = function (a) {
            var b;
            a.match(/^https?%3A/i) && (b = decodeURIComponent(a));
            return va(document, b ? b : a)
        },
        lc = function (a) {
            a = a || "canonical";
            for (var b = document.getElementsByTagName("link"), c = 0, d = b.length; c < d; c++) {
                var e = b[c],
                    f = e.getAttribute("rel");
                if (f && f.toLowerCase() == a && (e = e.getAttribute("href")) && (e = kc(e)) && null != e.match(/^https?:\/\/[\w\-\_\.]+/i)) return e
            }
            return window.location.href
        };
    var mc = {
            se: "0"
        },
        nc = {
            post: !0
        },
        oc = {
            style: "position:absolute;top:-10000px;width:450px;margin:0px;border-style:none"
        },
        pc = "onPlusOne _ready _close _open _resizeMe _renderstart oncircled drefresh erefresh".split(" "),
        qc = u(H, "WI", v()),
        rc = function (a, b, c) {
            var d, e;
            d = {};
            var f = e = a;
            "plus" == a && b.action && (e = a + "_" + b.action, f = a + "/" + b.action);
            (e = S("iframes/" + e + "/url")) || (e = ":im_socialhost:/:session_prefix::im_prefix:_/widget/render/" + f + "?usegapi=1");
            for (var g in mc) d[g] = g + "/" + (b[g] || mc[g]) + "/";
            d = va(p, e.replace($b,
                cc(d)));
            g = "iframes/" + a + "/params/";
            f = {};
            A(b, f);
            (e = S("lang") || S("gwidget/lang")) && (f.hl = e);
            nc[a] || (f.origin = window.location.origin || window.location.protocol + "//" + window.location.host);
            f.exp = S(g + "exp");
            if (g = S(g + "location"))
                for (e = 0; e < g.length; e++) {
                    var k = g[e];
                    f[k] = n.location[k]
                }
            switch (a) {
            case "plus":
            case "follow":
                g = f.href;
                e = b.action ? void 0 : "publisher";
                g = (g = "string" == typeof g ? g : void 0) ? kc(g) : lc(e);
                f.url = g;
                delete f.href;
                break;
            case "plusone":
                g = (g = b.href) ? kc(g) : lc();
                f.url = g;
                g = b.db;
                e = S();
                null == g && e && (g = e.db,
                    null == g && (g = e.gwidget && e.gwidget.db));
                f.db = g || void 0;
                g = b.ecp;
                e = S();
                null == g && e && (g = e.ecp, null == g && (g = e.gwidget && e.gwidget.ecp));
                f.ecp = g || void 0;
                delete f.href;
                break;
            case "signin":
                f.url = lc()
            }
            H.ILI && (f.iloader = "1");
            delete f["data-onload"];
            delete f.rd;
            for (var h in mc) f[h] && delete f[h];
            f.gsrc = S("iframes/:source:");
            h = S("inline/css");
            "undefined" !== typeof h && 0 < c && h >= c && (f.ic = "1");
            h = /^#|^fr-/;
            c = {};
            for (var l in f) x(f, l) && h.test(l) && (c[l.replace(h, "")] = f[l], delete f[l]);
            l = "q" == S("iframes/" + a + "/params/si") ? f :
                c;
            h = qb();
            for (var m in h) !x(h, m) || x(f, m) || x(c, m) || (l[m] = h[m]);
            m = [].concat(pc);
            (l = S("iframes/" + a + "/methods")) && "object" === typeof l && fa.test(l.push) && (m = m.concat(l));
            for (var r in b) x(b, r) && /^on/.test(r) && ("plus" != a || "onconnect" != r) && (m.push(r), delete f[r]);
            delete f.callback;
            c._methods = m.join(",");
            return ua(d, f, c)
        },
        sc = ["style", "data-gapiscan"],
        uc = function (a) {
            for (var b = v(), c = 0 != a.nodeName.toLowerCase().indexOf("g:"), d = 0, e = a.attributes.length; d < e; d++) {
                var f = a.attributes[d],
                    g = f.name,
                    k = f.value;
                0 <= ga.call(sc,
                    g) || c && 0 != g.indexOf("data-") || "null" === k || "specified" in f && !f.specified || (c && (g = g.substr(5)), b[g.toLowerCase()] = k)
            }
            a = a.style;
            (c = tc(a && a.height)) && (b.height = String(c));
            (a = tc(a && a.width)) && (b.width = String(a));
            return b
        },
        tc = function (a) {
            var b = void 0;
            "number" === typeof a ? b = a : "string" === typeof a && (b = parseInt(a, 10));
            return b
        },
        wc = function () {
            var a = H.drw;
            wb(function (b) {
                if (a !== b.id && 4 != b.state && "share" != b.type) {
                    var c = b.id,
                        d = b.type,
                        e = b.url;
                    b = b.userParams;
                    var f = p.getElementById(c);
                    if (f) {
                        var g = rc(d, b, 0);
                        g ? (f = f.parentNode,
                            e.replace(/\#.*/, "").replace(/(\?|&)ic=1/, "") !== g.replace(/\#.*/, "").replace(/(\?|&)ic=1/, "") && (b.dontclear = !0, b.rd = !0, b.ri = !0, b.type = d, vc(f, b), (d = T[f.lastChild.id]) && (d.oid = c), xb(c, 4))) : delete T[c]
                    } else delete T[c]
                }
            })
        };
    var W, X, Y, xc, yc, zc = /(?:^|\s)g-((\S)*)(?:$|\s)/,
        Ac = {
            plusone: !0,
            autocomplete: !0,
            profile: !0,
            signin: !0,
            signin2: !0
        };
    W = u(H, "SW", v());
    X = u(H, "SA", v());
    Y = u(H, "SM", v());
    xc = u(H, "FW", []);
    yc = null;
    var Cc = function (a, b) {
            Bc(void 0, !1, a, b)
        },
        Bc = function (a, b, c, d) {
            K("ps0", !0);
            c = ("string" === typeof c ? document.getElementById(c) : c) || p;
            var e;
            e = p.documentMode;
            if (c.querySelectorAll && (!e || 8 < e)) {
                e = d ? [d] : z(W).concat(z(X)).concat(z(Y));
                for (var f = [], g = 0; g < e.length; g++) {
                    var k = e[g];
                    f.push(".g-" + k, "g\\:" + k)
                }
                e = c.querySelectorAll(f.join(","))
            } else e = c.getElementsByTagName("*");
            c = v();
            for (f = 0; f < e.length; f++) {
                g = e[f];
                var h = g,
                    k = d,
                    l = h.nodeName.toLowerCase(),
                    m = void 0;
                h.getAttribute("data-gapiscan") ? k = null : (0 == l.indexOf("g:") ?
                    m = l.substr(2) : (h = (h = String(h.className || h.getAttribute("class"))) && zc.exec(h)) && (m = h[1]), k = !m || !(W[m] || X[m] || Y[m]) || k && m !== k ? null : m);
                k && (Ac[k] || 0 == g.nodeName.toLowerCase().indexOf("g:") || 0 != z(uc(g)).length) && (g.setAttribute("data-gapiscan", !0), u(c, k, []).push(g))
            }
            if (b)
                for (var r in c)
                    for (b = c[r], d = 0; d < b.length; d++) b[d].setAttribute("data-onload", !0);
            for (var w in c) xc.push(w);
            K("ps1", !0);
            if ((r = xc.join(":")) || a) try {
                C.load(r, a)
            } catch (y) {
                tb(y);
                return
            }
            if (Dc(yc || {}))
                for (var t in c) {
                    a = c[t];
                    w = 0;
                    for (b = a.length; w <
                        b; w++) a[w].removeAttribute("data-gapiscan");
                    Ec(t)
                } else {
                    d = [];
                    for (t in c)
                        for (a = c[t], w = 0, b = a.length; w < b; w++) e = a[w], Fc(t, e, uc(e), d, b);
                    Gc(r, d)
                }
        },
        Hc = function (a) {
            var b = u(C, a, {});
            b.go || (b.go = function (b) {
                return Cc(b, a)
            }, b.render = function (b, d) {
                d = d || {};
                d.type = a;
                return vc(b, d)
            })
        },
        Ic = function (a) {
            W[a] = !0
        },
        Jc = function (a) {
            X[a] = !0
        },
        Kc = function (a) {
            Y[a] = !0
        };
    var Ec = function (a, b) {
            var c = Ea(a);
            b && c ? (c(b), (c = b.iframeNode) && c.setAttribute("data-gapiattached", !0)) : C.load(a, function () {
                var c = Ea(a),
                    e = b && b.iframeNode,
                    f = b && b.userParams;
                e && c ? (c(b), e.setAttribute("data-gapiattached", !0)) : (c = C[a].go, "signin2" == a ? c(e, f) : c(e && e.parentNode, f))
            })
        },
        Dc = function () {
            return !1
        },
        Gc = function () {},
        Fc = function (a, b, c, d, e, f, g) {
            switch (Lc(b, a, f)) {
            case 0:
                a = Y[a] ? a + "_annotation" : a;
                d = {};
                d.iframeNode = b;
                d.userParams = c;
                Ec(a, d);
                break;
            case 1:
                var k;
                if (b.parentNode) {
                    for (var h in c) {
                        if (f = x(c, h)) f =
                            c[h], f = !!f && "object" === typeof f && (!f.toString || f.toString === Object.prototype.toString || f.toString === Array.prototype.toString);
                        if (f) try {
                            c[h] = ic(c[h])
                        } catch (F) {
                            delete c[h]
                        }
                    }
                    f = !0;
                    c.dontclear && (f = !1);
                    delete c.dontclear;
                    vb();
                    h = rc(a, c, e);
                    e = g || {};
                    e.allowPost = 1;
                    e.attributes = oc;
                    e.dontclear = !f;
                    g = {};
                    g.userParams = c;
                    g.url = h;
                    g.type = a;
                    var l;
                    c.rd ? l = b : (l = document.createElement("div"), b.setAttribute("data-gapistub", !0), l.style.cssText = "position:absolute;width:450px;left:-10000px;", b.parentNode.insertBefore(l, b));
                    g.siteElement =
                        l;
                    l.id || (b = l, u(qc, a, 0), f = "___" + a + "_" + qc[a]++, b.id = f);
                    b = v();
                    b[">type"] = a;
                    A(c, b);
                    f = h;
                    c = l;
                    h = e || {};
                    b = h.attributes || {};
                    B(!h.allowPost || !b.onload, "onload is not supported by post iframe");
                    e = b = f;
                    Zb.test(b) && (e = S("iframes/" + e.substring(1) + "/url"), B(!!e, "Unknown iframe url config for - " + b));
                    f = va(p, e.replace($b, bc));
                    b = c.ownerDocument || p;
                    l = 0;
                    do e = h.id || ["I", Wb++, "_", (new Date).getTime()].join(""); while (b.getElementById(e) && 5 > ++l);
                    B(5 > l, "Error creating iframe id");
                    l = {};
                    var m = {};
                    b.documentMode && 9 > b.documentMode &&
                        (l.hostiemode = b.documentMode);
                    A(h.queryParams || {}, l);
                    A(h.fragmentParams || {}, m);
                    var r = h.connectWithQueryParams ? l : m,
                        w = h.pfname,
                        t = v();
                    t.id = e;
                    t.parent = b.location.protocol + "//" + b.location.host;
                    var y = D(b.location.href, "parent"),
                        w = w || "";
                    !w && y && (y = D(b.location.href, "id", ""), w = D(b.location.href, "pfname", ""), w = y ? w + "/" + y : "");
                    t.pfname = w;
                    A(t, r);
                    (t = D(f, "rpctoken") || l.rpctoken || m.rpctoken) || (t = r.rpctoken = h.rpctoken || String(Math.round(1E8 * (Gb ? Pb() : Ob()))));
                    h.rpctoken = t;
                    t = b.location.href;
                    r = v();
                    (y = D(t, "_bsh", H.bsh)) &&
                    (r._bsh = y);
                    (t = I(t)) && (r.jsh = t);
                    h.hintInFragment ? A(r, m) : A(r, l);
                    f = ua(f, l, m, h.paramsSerializer);
                    m = v();
                    A(Ub, m);
                    A(h.attributes, m);
                    m.name = m.id = e;
                    m.src = f;
                    h.eurl = f;
                    if ((h || {}).allowPost && 2E3 < f.length) {
                        l = qa(f);
                        m.src = "";
                        m["data-postorigin"] = f;
                        f = Yb(b, c, m, e); - 1 != navigator.userAgent.indexOf("WebKit") && (k = f.contentWindow.document, k.open(), m = k.createElement("div"), r = {}, t = e + "_inner", r.name = t, r.src = "", r.style = "display:none", Yb(b, m, r, t, h));
                        m = (h = l.query[0]) ? h.split("&") : [];
                        h = [];
                        for (r = 0; r < m.length; r++) t = m[r].split("=",
                            2), h.push([decodeURIComponent(t[0]), decodeURIComponent(t[1])]);
                        l.query = [];
                        m = sa(l);
                        B(wa.test(m), "Invalid URL: " + m);
                        l = b.createElement("form");
                        l.action = m;
                        l.method = "POST";
                        l.target = e;
                        l.style.display = "none";
                        for (e = 0; e < h.length; e++) m = b.createElement("input"), m.type = "hidden", m.name = h[e][0], m.value = h[e][1], l.appendChild(m);
                        c.appendChild(l);
                        l.submit();
                        l.parentNode.removeChild(l);
                        k && k.close();
                        k = f
                    } else k = Yb(b, c, m, e, h);
                    g.iframeNode = k;
                    g.id = k.getAttribute("id");
                    k = g.id;
                    c = v();
                    c.id = k;
                    c.userParams = g.userParams;
                    c.url =
                        g.url;
                    c.type = g.type;
                    c.state = 1;
                    T[k] = c;
                    k = g
                } else k = null;
                k && ((g = k.id) && d.push(g), Ec(a, k))
            }
        },
        Lc = function (a, b, c) {
            if (a && 1 === a.nodeType && b) {
                if (c) return 1;
                if (Y[b]) {
                    if (Ca[a.nodeName.toLowerCase()]) return (a = a.innerHTML) && a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "") ? 0 : 1
                } else {
                    if (X[b]) return 0;
                    if (W[b]) return 1
                }
            }
            return null
        },
        vc = function (a, b) {
            var c = b.type;
            delete b.type;
            var d = ("string" === typeof a ? document.getElementById(a) : a) || void 0;
            if (d) {
                a = {};
                for (var e in b) x(b, e) && (a[e.toLowerCase()] = b[e]);
                a.rd = 1;
                (b = !!a.ri) && delete a.ri;
                e = [];
                Fc(c, d, a, e, 0, b, void 0);
                Gc(c, e)
            } else tb("string" === "gapi." + c + ".render: missing element " + typeof a ? a : "")
        };
    u(C, "platform", {}).go = Cc;
    var Dc = function (a) {
            for (var b = ["_c", "jsl", "h"], c = 0; c < b.length && a; c++) a = a[b[c]];
            b = I(q.href);
            return !a || 0 != a.indexOf("n;") && 0 != b.indexOf("n;") && a !== b
        },
        Gc = function (a, b) {
            Mc(a, b)
        },
        ya = function (a) {
            Bc(a, !0)
        },
        Nc = function (a, b) {
            b = b || [];
            for (var c = 0; c < b.length; ++c) a(b[c]);
            for (a = 0; a < b.length; a++) Hc(b[a])
        };
    L.push(["platform", function (a, b, c) {
        yc = c;
        b && xc.push(b);
        Nc(Ic, a);
        Nc(Jc, c._c.annotation);
        Nc(Kc, c._c.bimodal);
        mb();
        kb();
        if ("explicit" != S("parsetags")) {
            Da(a);
            rb(qb()) && !S("disableRealtimeCallback") && vb();
            var d;
            c && (a = c.callback) && (d = oa(a), delete c.callback);
            Aa(function () {
                ya(d)
            })
        }
    }]);
    C._pl = !0;
    var Oc = function (a) {
        a = (a = T[a]) ? a.oid : void 0;
        if (a) {
            var b = p.getElementById(a);
            b && b.parentNode.removeChild(b);
            delete T[a];
            Oc(a)
        }
    };
    var Pc = /^\{h\:'/,
        Qc = /^!_/,
        Rc = "",
        Mc = function (a, b) {
            function c() {
                E("message", d, "remove", "de")
            }

            function d(d) {
                var f = d.data,
                    k = d.origin;
                if (Sc(f, b)) {
                    var h = e;
                    e = !1;
                    h && K("rqe");
                    Tc(a, function () {
                        h && K("rqd");
                        c();
                        for (var a = u(H, "RPMQ", []), b = 0; b < a.length; b++) a[b]({
                            data: f,
                            origin: k
                        })
                    })
                }
            }
            if (0 !== b.length) {
                Rc = D(q.href, "pfname", "");
                var e = !0;
                E("message", d, "add", "at");
                O(a, c)
            }
        },
        Sc = function (a, b) {
            a = String(a);
            if (Pc.test(a)) return !0;
            var c = !1;
            Qc.test(a) && (c = !0, a = a.substr(2));
            if (!/^\{/.test(a)) return !1;
            var d = jc(a);
            if (!d) return !1;
            a = d.f;
            if (d.s && a && -1 != ga.call(b, a)) {
                if ("_renderstart" === d.s || d.s === Rc + "/" + a + "::_renderstart")
                    if (d = d.a && d.a[c ? 0 : 1], b = p.getElementById(a), xb(a, 2), d && b && d.width && d.height) {
                        a: {
                            c = b.parentNode;
                            a = d || {};
                            if (ub()) {
                                var e = b.id;
                                if (e) {
                                    d = (d = T[e]) ? d.state : void 0;
                                    if (1 === d || 4 === d) break a;
                                    Oc(e)
                                }
                            }(d = c.nextSibling) && d.getAttribute && d.getAttribute("data-gapistub") && (c.parentNode.removeChild(d), c.style.cssText = "");
                            var d = a.width,
                                f = a.height,
                                g = c.style;
                            g.textIndent = "0";
                            g.margin = "0";
                            g.padding = "0";
                            g.background = "transparent";
                            g.borderStyle =
                                "none";
                            g.cssFloat = "none";
                            g.styleFloat = "none";
                            g.lineHeight = "normal";
                            g.fontSize = "1px";
                            g.verticalAlign = "baseline";
                            c = c.style;
                            c.display = "inline-block";
                            g = b.style;
                            g.position = "static";
                            g.left = "0";
                            g.top = "0";
                            g.visibility = "visible";
                            d && (c.width = g.width = d + "px");
                            f && (c.height = g.height = f + "px");
                            a.verticalAlign && (c.verticalAlign = a.verticalAlign);
                            e && xb(e, 3)
                        }
                        b["data-csi-wdt"] = (new Date).getTime()
                    }
                return !0
            }
            return !1
        },
        Tc = function (a, b) {
            O(a, b)
        };
    var Uc = function (a, b) {
            this.O = a;
            a = b || {};
            this.Y = Number(a.maxAge) || 0;
            this.L = a.domain;
            this.P = a.path;
            this.$ = !!a.secure
        },
        Vc = /^[-+/_=.:|%&a-zA-Z0-9@]*$/,
        Wc = /^[A-Z_][A-Z0-9_]{0,63}$/;
    Uc.prototype.write = function (a, b) {
        if (!Wc.test(this.O)) throw "Invalid cookie name";
        if (!Vc.test(a)) throw "Invalid cookie value";
        a = this.O + "=" + a;
        this.L && (a += ";domain=" + this.L);
        this.P && (a += ";path=" + this.P);
        b = "number" === typeof b ? b : this.Y;
        if (0 <= b) {
            var c = new Date;
            c.setSeconds(c.getSeconds() + b);
            a += ";expires=" + c.toUTCString()
        }
        this.$ && (a += ";secure");
        document.cookie = a;
        return !0
    };
    Uc.iterate = function (a) {
        for (var b = document.cookie.split(/;\s*/), c = 0; c < b.length; ++c) {
            var d = b[c].split("="),
                e = d.shift();
            a(e, d.join("="))
        }
    };
    var Xc = function (a) {
            this.X = a
        },
        Yc = {};
    Xc.prototype.write = function (a) {
        Yc[this.X] = a;
        return !0
    };
    Xc.iterate = function (a) {
        for (var b in Yc) Yc.hasOwnProperty(b) && a(b, Yc[b])
    };
    var Zc = "https:" === window.location.protocol,
        $c = Zc || "http:" === window.location.protocol ? Uc : Xc,
        ad = function (a) {
            var b = a.substr(1),
                c = "",
                d = window.location.hostname;
            if ("" !== b) {
                c = parseInt(b, 10);
                if (isNaN(c)) return null;
                b = d.split(".");
                if (b.length < c - 1) return null;
                b.length == c - 1 && (d = "." + d)
            } else d = "";
            return {
                c: "S" == a.charAt(0),
                domain: d,
                i: c
            }
        },
        bd = function () {
            var a, b = null;
            $c.iterate(function (c, d) {
                0 === c.indexOf("G_AUTHUSER_") && (c = ad(c.substring(11)), !a || c.c && !a.c || c.c == a.c && c.i > a.i) && (a = c, b = d)
            });
            return {
                W: a,
                A: b
            }
        };
    var cd = function (a) {
            if (0 !== a.indexOf("GCSC")) return null;
            var b = {
                N: !1
            };
            a = a.substr(4);
            if (!a) return b;
            var c = a.charAt(0);
            a = a.substr(1);
            var d = a.lastIndexOf("_");
            if (-1 == d) return b;
            var e = ad(a.substr(d + 1));
            if (null == e) return b;
            a = a.substring(0, d);
            if ("_" !== a.charAt(0)) return b;
            d = "E" === c && e.c;
            return !d && ("U" !== c || e.c) || d && !Zc ? b : {
                N: !0,
                c: d,
                ca: a.substr(1),
                domain: e.domain,
                i: e.i
            }
        },
        dd = function (a) {
            if (!a) return [];
            a = a.split("=");
            return a[1] ? a[1].split("|") : []
        },
        ed = function (a) {
            a = a.split(":");
            return {
                C: a[0].split("=")[1],
                ba: dd(a[1]),
                ea: dd(a[2]),
                da: dd(a[3])
            }
        },
        fd = function () {
            var a = bd(),
                b = a.W,
                a = a.A;
            if (null !== a) {
                var c;
                $c.iterate(function (a, d) {
                    (a = cd(a)) && a.N && a.c == b.c && a.i == b.i && (c = d)
                });
                if (c) {
                    var d = ed(c),
                        e = d && d.ba[Number(a)],
                        d = d && d.C;
                    if (e) return {
                        A: a,
                        aa: e,
                        C: d
                    }
                }
            }
            return null
        };
    var Z = function (a) {
        this.K = a
    };
    Z.prototype.l = 0;
    Z.prototype.G = 2;
    Z.prototype.K = null;
    Z.prototype.D = !1;
    Z.prototype.T = function () {
        this.D || (this.l = 0, this.D = !0, this.R())
    };
    Z.prototype.R = function () {
        this.D && (this.K() ? this.l = this.G : this.l = Math.min(2 * (this.l || this.G), 120), window.setTimeout(da(this.R, this), 1E3 * this.l))
    };
    for (var gd = 0; 64 > gd; ++gd);
    var hd = null,
        ub = function () {
            return H.oa = !0
        },
        vb = function () {
            H.oa = !0;
            var a = fd();
            (a = a && a.A) && lb("googleapis.config/sessionIndex", a);
            hd || (hd = u(H, "ss", new Z(id)));
            a = hd;
            a.T && a.T()
        },
        id = function () {
            var a = fd(),
                b = a && a.aa || null,
                c = a && a.C;
            O("auth", {
                callback: function () {
                    var a = n.gapi.auth,
                        e = {
                            client_id: c,
                            session_state: b
                        };
                    a.checkSessionState(e, function (b) {
                        var c = e.session_state,
                            d = S("isLoggedIn");
                        b = S("debug/forceIm") ? !1 : c && b || !c && !b;
                        if (d = d != b) lb("isLoggedIn", b), vb(), wc(), b || ((b = a.signOut) ? b() : (b = a.setToken) && b(null));
                        b =
                            qb();
                        var f = S("savedUserState"),
                            c = a._guss(b.cookiepolicy),
                            f = f != c && "undefined" != typeof f;
                        lb("savedUserState", c);
                        (d || f) && rb(b) && !S("disableRealtimeCallback") && a._pimf(b, !0)
                    })
                }
            });
            return !0
        };
    K("bs0", !0, window.gapi._bs);
    K("bs1", !0);
    delete window.gapi._bs;
})();
gapi.load("", {
    callback: window["gapi_onload"],
    _c: {
        "jsl": {
            "ci": {
                "deviceType": "desktop",
                "oauth-flow": {
                    "authUrl": "https://accounts.google.com/o/oauth2/auth",
                    "proxyUrl": "https://accounts.google.com/o/oauth2/postmessageRelay",
                    "disableOpt": true,
                    "idpIframeUrl": "https://accounts.google.com/o/oauth2/iframe",
                    "usegapi": false
                },
                "debug": {
                    "reportExceptionRate": 0.05,
                    "forceIm": false,
                    "rethrowException": false,
                    "host": "https://apis.google.com"
                },
                "lexps": [81, 97, 99, 122, 123, 30, 79, 127],
                "enableMultilogin": true,
                "googleapis.config": {
                    "auth": {
                        "useFirstPartyAuthV2": false
                    }
                },
                "isPlusUser": false,
                "inline": {
                    "css": 1
                },
                "disableRealtimeCallback": false,
                "drive_share": {
                    "skipInitCommand": true
                },
                "csi": {
                    "rate": 0.01
                },
                "client": {
                    "headers": {
                        "request": ["Accept", "Accept-Language", "Authorization", "Cache-Control", "Content-Disposition", "Content-Encoding", "Content-Language", "Content-Length", "Content-MD5", "Content-Range", "Content-Type", "Date", "GData-Version", "Host", "If-Match", "If-Modified-Since", "If-None-Match", "If-Unmodified-Since", "Origin", "OriginToken", "Pragma", "Range", "Slug", "Transfer-Encoding", "Want-Digest", "X-ClientDetails", "X-GData-Client", "X-GData-Key", "X-Goog-AuthUser", "X-Goog-PageId", "X-Goog-Encode-Response-If-Executable", "X-Goog-Correlation-Id", "X-Goog-Request-Info", "X-Goog-Experiments", "x-goog-iam-authority-selector", "x-goog-iam-authorization-token", "X-Goog-Spatula", "X-Goog-Upload-Command", "X-Goog-Upload-Content-Disposition", "X-Goog-Upload-Content-Length", "X-Goog-Upload-Content-Type", "X-Goog-Upload-File-Name", "X-Goog-Upload-Offset", "X-Goog-Upload-Protocol", "X-Goog-Visitor-Id", "X-HTTP-Method-Override", "X-JavaScript-User-Agent", "X-Pan-Versionid", "X-Origin", "X-Referer", "X-Upload-Content-Length", "X-Upload-Content-Type", "X-Use-HTTP-Status-Code-Override", "X-Ios-Bundle-Identifier", "X-Android-Package", "X-YouTube-VVT", "X-YouTube-Page-CL", "X-YouTube-Page-Timestamp"],
                        "response": ["Digest", "Cache-Control", "Content-Disposition", "Content-Encoding", "Content-Language", "Content-Length", "Content-MD5", "Content-Range", "Content-Type", "Date", "ETag", "Expires", "Last-Modified", "Location", "Pragma", "Range", "Server", "Transfer-Encoding", "WWW-Authenticate", "Vary", "Unzipped-Content-MD5", "X-Goog-Generation", "X-Goog-Metageneration", "X-Goog-Safety-Content-Type", "X-Goog-Safety-Encoding", "X-Google-Trace", "X-Goog-Upload-Chunk-Granularity", "X-Goog-Upload-Control-URL", "X-Goog-Upload-Size-Received", "X-Goog-Upload-Status", "X-Goog-Upload-URL", "X-Goog-Diff-Download-Range", "X-Goog-Hash", "X-Goog-Updated-Authorization", "X-Server-Object-Version", "X-Guploader-Customer", "X-Guploader-Upload-Result", "X-Guploader-Uploadid", "X-Google-Gfe-Backend-Request-Cost"]
                    },
                    "rms": "migrated",
                    "cors": false
                },
                "isLoggedIn": false,
                "signInDeprecation": {
                    "rate": 0.0
                },
                "include_granted_scopes": true,
                "llang": "pt",
                "iframes": {
                    "youtube": {
                        "params": {
                            "location": ["search", "hash"]
                        },
                        "url": ":socialhost:/:session_prefix:_/widget/render/youtube?usegapi\u003d1",
                        "methods": ["scroll", "openwindow"]
                    },
                    "ytsubscribe": {
                        "url": "https://www.youtube.com/subscribe_embed?usegapi\u003d1"
                    },
                    "plus_circle": {
                        "params": {
                            "url": ""
                        },
                        "url": ":socialhost:/:session_prefix::se:_/widget/plus/circle?usegapi\u003d1"
                    },
                    "plus_share": {
                        "params": {
                            "url": ""
                        },
                        "url": ":socialhost:/:session_prefix::se:_/+1/sharebutton?plusShare\u003dtrue\u0026usegapi\u003d1"
                    },
                    "rbr_s": {
                        "params": {
                            "url": ""
                        },
                        "url": ":socialhost:/:session_prefix::se:_/widget/render/recobarsimplescroller"
                    },
                    "udc_webconsentflow": {
                        "params": {
                            "url": ""
                        },
                        "url": "https://www.google.com/settings/webconsent?usegapi\u003d1"
                    },
                    ":source:": "3p",
                    "playemm": {
                        "url": "https://play.google.com/work/embedded/search?usegapi\u003d1\u0026usegapi\u003d1"
                    },
                    "savetoandroidpay": {
                        "url": "https://androidpay.google.com/a/widget/save"
                    },
                    "blogger": {
                        "params": {
                            "location": ["search", "hash"]
                        },
                        "url": ":socialhost:/:session_prefix:_/widget/render/blogger?usegapi\u003d1",
                        "methods": ["scroll", "openwindow"]
                    },
                    "evwidget": {
                        "params": {
                            "url": ""
                        },
                        "url": ":socialhost:/:session_prefix:_/events/widget?usegapi\u003d1"
                    },
                    "partnersbadge": {
                        "url": "https://www.gstatic.com/partners/badge/templates/badge.html?usegapi\u003d1"
                    },
                    "surveyoptin": {
                        "url": "https://www.google.com/shopping/customerreviews/optin?usegapi\u003d1"
                    },
                    ":socialhost:": "https://apis.google.com",
                    "shortlists": {
                        "url": ""
                    },
                    "hangout": {
                        "url": "https://talkgadget.google.com/:session_prefix:talkgadget/_/widget"
                    },
                    "plus_followers": {
                        "params": {
                            "url": ""
                        },
                        "url": ":socialhost:/_/im/_/widget/render/plus/followers?usegapi\u003d1"
                    },
                    "post": {
                        "params": {
                            "url": ""
                        },
                        "url": ":socialhost:/:session_prefix::im_prefix:_/widget/render/post?usegapi\u003d1"
                    },
                    ":gplus_url:": "https://plus.google.com",
                    "signin": {
                        "params": {
                            "url": ""
                        },
                        "url": ":socialhost:/:session_prefix:_/widget/render/signin?usegapi\u003d1",
                        "methods": ["onauth"]
                    },
                    "rbr_i": {
                        "params": {
                            "url": ""
                        },
                        "url": ":socialhost:/:session_prefix::se:_/widget/render/recobarinvitation"
                    },
                    "donation": {
                        "url": "https://onetoday.google.com/home/donationWidget?usegapi\u003d1"
                    },
                    "share": {
                        "url": ":socialhost:/:session_prefix::im_prefix:_/widget/render/share?usegapi\u003d1"
                    },
                    "plusone": {
                        "params": {
                            "count": "",
                            "size": "",
                            "url": ""
                        },
                        "url": ":socialhost:/:session_prefix::se:_/+1/fastbutton?usegapi\u003d1"
                    },
                    "comments": {
                        "params": {
                            "location": ["search", "hash"]
                        },
                        "url": ":socialhost:/:session_prefix:_/widget/render/comments?usegapi\u003d1",
                        "methods": ["scroll", "openwindow"]
                    },
                    ":im_socialhost:": "https://plus.googleapis.com",
                    "backdrop": {
                        "url": "https://clients3.google.com/cast/chromecast/home/widget/backdrop?usegapi\u003d1"
                    },
                    "visibility": {
                        "params": {
                            "url": ""
                        },
                        "url": ":socialhost:/:session_prefix:_/widget/render/visibility?usegapi\u003d1"
                    },
                    "autocomplete": {
                        "params": {
                            "url": ""
                        },
                        "url": ":socialhost:/:session_prefix:_/widget/render/autocomplete"
                    },
                    "additnow": {
                        "url": "https://apis.google.com/additnow/additnow.html?usegapi\u003d1",
                        "methods": ["launchurl"]
                    },
                    ":signuphost:": "https://plus.google.com",
                    "ratingbadge": {
                        "url": "https://www.google.com/shopping/customerreviews/badge?usegapi\u003d1"
                    },
                    "appcirclepicker": {
                        "url": ":socialhost:/:session_prefix:_/widget/render/appcirclepicker"
                    },
                    "follow": {
                        "url": ":socialhost:/:session_prefix:_/widget/render/follow?usegapi\u003d1"
                    },
                    "community": {
                        "url": ":ctx_socialhost:/:session_prefix::im_prefix:_/widget/render/community?usegapi\u003d1"
                    },
                    "sharetoclassroom": {
                        "url": "https://www.gstatic.com/classroom/sharewidget/widget_stable.html?usegapi\u003d1"
                    },
                    "ytshare": {
                        "params": {
                            "url": ""
                        },
                        "url": ":socialhost:/:session_prefix:_/widget/render/ytshare?usegapi\u003d1"
                    },
                    "plus": {
                        "url": ":socialhost:/:session_prefix:_/widget/render/badge?usegapi\u003d1"
                    },
                    "family_creation": {
                        "params": {
                            "url": ""
                        },
                        "url": "https://families.google.com/webcreation?usegapi\u003d1\u0026usegapi\u003d1"
                    },
                    "commentcount": {
                        "url": ":socialhost:/:session_prefix:_/widget/render/commentcount?usegapi\u003d1"
                    },
                    "configurator": {
                        "url": ":socialhost:/:session_prefix:_/plusbuttonconfigurator?usegapi\u003d1"
                    },
                    "zoomableimage": {
                        "url": "https://ssl.gstatic.com/microscope/embed/"
                    },
                    "savetowallet": {
                        "url": "https://clients5.google.com/s2w/o/savetowallet"
                    },
                    "person": {
                        "url": ":socialhost:/:session_prefix:_/widget/render/person?usegapi\u003d1"
                    },
                    "savetodrive": {
                        "url": "https://drive.google.com/savetodrivebutton?usegapi\u003d1",
                        "methods": ["save"]
                    },
                    "page": {
                        "url": ":socialhost:/:session_prefix:_/widget/render/page?usegapi\u003d1"
                    },
                    "card": {
                        "url": ":socialhost:/:session_prefix:_/hovercard/card"
                    }
                }
            },
            "h": "m;/_/scs/apps-static/_/js/k\u003doz.gapi.pt_BR.ovLWRZZDkT8.O/m\u003d__features__/am\u003dAQ/rt\u003dj/d\u003d1/rs\u003dAGLTcCM45VnuD8f-86spxVvvNhg0K8z1cw",
            "u": "https://apis.google.com/js/platform.js",
            "hee": true,
            "fp": "d70d28bfadcc71f72f7a6b0b90534670120faa25",
            "dpo": false
        },
        "platform": ["additnow", "backdrop", "blogger", "comments", "commentcount", "community", "family_creation", "follow", "hangout", "page", "partnersbadge", "person", "playemm", "playreview", "plus", "plusone", "post", "savetodrive", "savetowallet", "shortlists", "signin2", "udc_webconsentflow", "visibility", "youtube", "ytsubscribe", "zoomableimage", "sharetoclassroom", "donation", "ratingbadge", "surveyoptin"],
        "fp": "d70d28bfadcc71f72f7a6b0b90534670120faa25",
        "annotation": ["interactivepost", "recobar", "signin2", "autocomplete", "profile"],
        "bimodal": ["signin", "share"]
    }
});