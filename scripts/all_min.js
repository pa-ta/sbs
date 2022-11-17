(function() {
    function a(a, b, c) {
        for (var d = (c || 0) - 1, e = a ? a.length : 0; ++d < e;)
            if (a[d] === b) return d;
        return -1
    }

    function b(b, c) {
        var d = typeof c;
        if (b = b.cache, "boolean" == d || null == c) return b[c] ? 0 : -1;
        "number" != d && "string" != d && (d = "object");
        var e = "number" == d ? c : r + c;
        return b = (b = b[d]) && b[e], "object" == d ? b && a(b, c) > -1 ? 0 : -1 : b ? 0 : -1
    }

    function c(a) {
        var b = this.cache,
            c = typeof a;
        if ("boolean" == c || null == a) b[a] = !0;
        else {
            "number" != c && "string" != c && (c = "object");
            var d = "number" == c ? a : r + a,
                e = b[c] || (b[c] = {});
            "object" == c ? (e[d] || (e[d] = [])).push(a) : e[d] = !0
        }
    }

    function d(a) {
        return a.charCodeAt(0)
    }

    function e(a, b) {
        for (var c = a.criteria, d = b.criteria, e = -1, f = c.length; ++e < f;) {
            var g = c[e],
                h = d[e];
            if (g !== h) {
                if (g > h || "undefined" == typeof g) return 1;
                if (h > g || "undefined" == typeof h) return -1
            }
        }
        return a.index - b.index
    }

    function f(a) {
        var b = -1,
            d = a.length,
            e = a[0],
            f = a[d / 2 | 0],
            g = a[d - 1];
        if (e && "object" == typeof e && f && "object" == typeof f && g && "object" == typeof g) return !1;
        var h = i();
        h["false"] = h["null"] = h["true"] = h.undefined = !1;
        var j = i();
        for (j.array = a, j.cache = h, j.push = c; ++b < d;) j.push(a[b]);
        return j
    }

    function g(a) {
        return "\\" + V[a]
    }

    function h() {
        return o.pop() || []
    }

    function i() {
        return p.pop() || {
            array: null,
            cache: null,
            criteria: null,
            "false": !1,
            index: 0,
            "null": !1,
            number: null,
            object: null,
            push: null,
            string: null,
            "true": !1,
            undefined: !1,
            value: null
        }
    }

    function j(a) {
        a.length = 0, o.length < t && o.push(a)
    }

    function k(a) {
        var b = a.cache;
        b && k(b), a.array = a.cache = a.criteria = a.object = a.number = a.string = a.value = null, p.length < t && p.push(a)
    }

    function l(a, b, c) {
        b || (b = 0), "undefined" == typeof c && (c = a ? a.length : 0);
        for (var d = -1, e = c - b || 0, f = Array(0 > e ? 0 : e); ++d < e;) f[d] = a[b + d];
        return f
    }

    function m(c) {
        function o(a) {
            return a && "object" == typeof a && !Zd(a) && Hd.call(a, "__wrapped__") ? a : new p(a)
        }

        function p(a, b) {
            this.__chain__ = !!b, this.__wrapped__ = a
        }

        function t(a) {
            function b() {
                if (d) {
                    var a = l(d);
                    Id.apply(a, arguments)
                }
                if (this instanceof b) {
                    var f = X(c.prototype),
                        g = c.apply(f, a || arguments);
                    return Eb(g) ? g : f
                }
                return c.apply(e, a || arguments)
            }
            var c = a[0],
                d = a[2],
                e = a[4];
            return Yd(b, a), b
        }

        function V(a, b, c, d, e) {
            if (c) {
                var f = c(a);
                if ("undefined" != typeof f) return f
            }
            var g = Eb(a);
            if (!g) return a;
            var i = Ad.call(a);
            if (!R[i]) return a;
            var k = Wd[i];
            switch (i) {
                case K:
                case L:
                    return new k(+a);
                case N:
                case Q:
                    return new k(a);
                case P:
                    return f = k(a.source, z.exec(a)), f.lastIndex = a.lastIndex, f
            }
            var m = Zd(a);
            if (b) {
                var n = !d;
                d || (d = h()), e || (e = h());
                for (var o = d.length; o--;)
                    if (d[o] == a) return e[o];
                f = m ? k(a.length) : {}
            } else f = m ? l(a) : ee({}, a);
            return m && (Hd.call(a, "index") && (f.index = a.index), Hd.call(a, "input") && (f.input = a.input)), b ? (d.push(a), e.push(f), (m ? Yb : he)(a, function(a, g) {
                f[g] = V(a, b, c, d, e)
            }), n && (j(d), j(e)), f) : f
        }

        function X(a) {
            return Eb(a) ? Nd(a) : {}
        }

        function Y(a, b, c) {
            if ("function" != typeof a) return Zc;
            if ("undefined" == typeof b || !("prototype" in a)) return a;
            var d = a.__bindData__;
            if ("undefined" == typeof d && (Xd.funcNames && (d = !a.name), d = d || !Xd.funcDecomp, !d)) {
                var e = Fd.call(a);
                Xd.funcNames || (d = !A.test(e)), d || (d = E.test(e), Yd(a, d))
            }
            if (d === !1 || d !== !0 && 1 & d[1]) return a;
            switch (c) {
                case 1:
                    return function(c) {
                        return a.call(b, c)
                    };
                case 2:
                    return function(c, d) {
                        return a.call(b, c, d)
                    };
                case 3:
                    return function(c, d, e) {
                        return a.call(b, c, d, e)
                    };
                case 4:
                    return function(c, d, e, f) {
                        return a.call(b, c, d, e, f)
                    }
            }
            return Ic(a, b)
        }

        function Z(a) {
            function b() {
                var a = i ? g : this;
                if (e) {
                    var o = l(e);
                    Id.apply(o, arguments)
                }
                if ((f || k) && (o || (o = l(arguments)), f && Id.apply(o, f), k && o.length < h)) return d |= 16, Z([c, m ? d : -4 & d, o, null, g, h]);
                if (o || (o = arguments), j && (c = a[n]), this instanceof b) {
                    a = X(c.prototype);
                    var p = c.apply(a, o);
                    return Eb(p) ? p : a
                }
                return c.apply(a, o)
            }
            var c = a[0],
                d = a[1],
                e = a[2],
                f = a[3],
                g = a[4],
                h = a[5],
                i = 1 & d,
                j = 2 & d,
                k = 4 & d,
                m = 8 & d,
                n = c;
            return Yd(b, a), b
        }

        function $(c, d) {
            var e = -1,
                g = ib(),
                h = c ? c.length : 0,
                i = h >= s && g === a,
                j = [];
            if (i) {
                var l = f(d);
                l ? (g = b, d = l) : i = !1
            }
            for (; ++e < h;) {
                var m = c[e];
                g(d, m) < 0 && j.push(m)
            }
            return i && k(d), j
        }

        function ab(a, b, c, d) {
            for (var e = (d || 0) - 1, f = a ? a.length : 0, g = []; ++e < f;) {
                var h = a[e];
                if (h && "object" == typeof h && "number" == typeof h.length && (Zd(h) || mb(h))) {
                    b || (h = ab(h, b, c));
                    var i = -1,
                        j = h.length,
                        k = g.length;
                    for (g.length += j; ++i < j;) g[k++] = h[i]
                } else c || g.push(h)
            }
            return g
        }

        function bb(a, b, c, d, e, f) {
            if (c) {
                var g = c(a, b);
                if ("undefined" != typeof g) return !!g
            }
            if (a === b) return 0 !== a || 1 / a == 1 / b;
            var i = typeof a,
                k = typeof b;
            if (!(a !== a || a && U[i] || b && U[k])) return !1;
            if (null == a || null == b) return a === b;
            var l = Ad.call(a),
                m = Ad.call(b);
            if (l == I && (l = O), m == I && (m = O), l != m) return !1;
            switch (l) {
                case K:
                case L:
                    return +a == +b;
                case N:
                    return a != +a ? b != +b : 0 == a ? 1 / a == 1 / b : a == +b;
                case P:
                case Q:
                    return a == vd(b)
            }
            var n = l == J;
            if (!n) {
                var o = Hd.call(a, "__wrapped__"),
                    p = Hd.call(b, "__wrapped__");
                if (o || p) return bb(o ? a.__wrapped__ : a, p ? b.__wrapped__ : b, c, d, e, f);
                if (l != O) return !1;
                var q = a.constructor,
                    r = b.constructor;
                if (q != r && !(Db(q) && q instanceof q && Db(r) && r instanceof r) && "constructor" in a && "constructor" in b) return !1
            }
            var s = !e;
            e || (e = h()), f || (f = h());
            for (var t = e.length; t--;)
                if (e[t] == a) return f[t] == b;
            var u = 0;
            if (g = !0, e.push(a), f.push(b), n) {
                if (t = a.length, u = b.length, g = u == t, g || d)
                    for (; u--;) {
                        var v = t,
                            w = b[u];
                        if (d)
                            for (; v-- && !(g = bb(a[v], w, c, d, e, f)););
                        else if (!(g = bb(a[u], w, c, d, e, f))) break
                    }
            } else ge(b, function(b, h, i) {
                return Hd.call(i, h) ? (u++, g = Hd.call(a, h) && bb(a[h], b, c, d, e, f)) : void 0
            }), g && !d && ge(a, function(a, b, c) {
                return Hd.call(c, b) ? g = --u > -1 : void 0
            });
            return e.pop(), f.pop(), s && (j(e), j(f)), g
        }

        function cb(a, b, c, d, e) {
            (Zd(b) ? Yb : he)(b, function(b, f) {
                var g, h, i = b,
                    j = a[f];
                if (b && ((h = Zd(b)) || ie(b))) {
                    for (var k = d.length; k--;)
                        if (g = d[k] == b) {
                            j = e[k];
                            break
                        } if (!g) {
                        var l;
                        c && (i = c(j, b), (l = "undefined" != typeof i) && (j = i)), l || (j = h ? Zd(j) ? j : [] : ie(j) ? j : {}), d.push(b), e.push(j), l || cb(j, b, c, d, e)
                    }
                } else c && (i = c(j, b), "undefined" == typeof i && (i = b)), "undefined" != typeof i && (j = i);
                a[f] = j
            })
        }

        function db(a, b) {
            return a + Ed(Vd() * (b - a + 1))
        }

        function eb(c, d, e) {
            var g = -1,
                i = ib(),
                l = c ? c.length : 0,
                m = [],
                n = !d && l >= s && i === a,
                o = e || n ? h() : m;
            if (n) {
                var p = f(o);
                i = b, o = p
            }
            for (; ++g < l;) {
                var q = c[g],
                    r = e ? e(q, g, c) : q;
                (d ? !g || o[o.length - 1] !== r : i(o, r) < 0) && ((e || n) && o.push(r), m.push(q))
            }
            return n ? (j(o.array), k(o)) : e && j(o), m
        }

        function fb(a) {
            return function(b, c, d) {
                var e = {};
                c = o.createCallback(c, d, 3);
                var f = -1,
                    g = b ? b.length : 0;
                if ("number" == typeof g)
                    for (; ++f < g;) {
                        var h = b[f];
                        a(e, h, c(h, f, b), b)
                    } else he(b, function(b, d, f) {
                        a(e, b, c(b, d, f), f)
                    });
                return e
            }
        }

        function gb(a, b, c, d, e, f) {
            var g = 1 & b,
                h = 2 & b,
                i = 4 & b,
                j = 16 & b,
                k = 32 & b;
            if (!h && !Db(a)) throw new wd;
            j && !c.length && (b &= -17, j = c = !1), k && !d.length && (b &= -33, k = d = !1);
            var m = a && a.__bindData__;
            if (m && m !== !0) return m = l(m), m[2] && (m[2] = l(m[2])), m[3] && (m[3] = l(m[3])), !g || 1 & m[1] || (m[4] = e), !g && 1 & m[1] && (b |= 8), !i || 4 & m[1] || (m[5] = f), j && Id.apply(m[2] || (m[2] = []), c), k && Ld.apply(m[3] || (m[3] = []), d), m[1] |= b, gb.apply(null, m);
            var n = 1 == b || 17 === b ? t : Z;
            return n([a, b, c, d, e, f])
        }

        function hb(a) {
            return ae[a]
        }

        function ib() {
            var b = (b = o.indexOf) === rc ? a : b;
            return b
        }

        function jb(a) {
            return "function" == typeof a && Bd.test(a)
        }

        function kb(a) {
            var b, c;
            return a && Ad.call(a) == O && (b = a.constructor, !Db(b) || b instanceof b) ? (ge(a, function(a, b) {
                c = b
            }), "undefined" == typeof c || Hd.call(a, c)) : !1
        }

        function lb(a) {
            return be[a]
        }

        function mb(a) {
            return a && "object" == typeof a && "number" == typeof a.length && Ad.call(a) == I || !1
        }

        function nb(a, b, c, d) {
            return "boolean" != typeof b && null != b && (d = c, c = b, b = !1), V(a, b, "function" == typeof c && Y(c, d, 1))
        }

        function ob(a, b, c) {
            return V(a, !0, "function" == typeof b && Y(b, c, 1))
        }

        function pb(a, b) {
            var c = X(a);
            return b ? ee(c, b) : c
        }

        function qb(a, b, c) {
            var d;
            return b = o.createCallback(b, c, 3), he(a, function(a, c, e) {
                return b(a, c, e) ? (d = c, !1) : void 0
            }), d
        }

        function rb(a, b, c) {
            var d;
            return b = o.createCallback(b, c, 3), tb(a, function(a, c, e) {
                return b(a, c, e) ? (d = c, !1) : void 0
            }), d
        }

        function sb(a, b, c) {
            var d = [];
            ge(a, function(a, b) {
                d.push(b, a)
            });
            var e = d.length;
            for (b = Y(b, c, 3); e-- && b(d[e--], d[e], a) !== !1;);
            return a
        }

        function tb(a, b, c) {
            var d = _d(a),
                e = d.length;
            for (b = Y(b, c, 3); e--;) {
                var f = d[e];
                if (b(a[f], f, a) === !1) break
            }
            return a
        }

        function ub(a) {
            var b = [];
            return ge(a, function(a, c) {
                Db(a) && b.push(c)
            }), b.sort()
        }

        function vb(a, b) {
            return a ? Hd.call(a, b) : !1
        }

        function wb(a) {
            for (var b = -1, c = _d(a), d = c.length, e = {}; ++b < d;) {
                var f = c[b];
                e[a[f]] = f
            }
            return e
        }

        function xb(a) {
            return a === !0 || a === !1 || a && "object" == typeof a && Ad.call(a) == K || !1
        }

        function yb(a) {
            return a && "object" == typeof a && Ad.call(a) == L || !1
        }

        function zb(a) {
            return a && 1 === a.nodeType || !1
        }

        function Ab(a) {
            var b = !0;
            if (!a) return b;
            var c = Ad.call(a),
                d = a.length;
            return c == J || c == Q || c == I || c == O && "number" == typeof d && Db(a.splice) ? !d : (he(a, function() {
                return b = !1
            }), b)
        }

        function Bb(a, b, c, d) {
            return bb(a, b, "function" == typeof c && Y(c, d, 2))
        }

        function Cb(a) {
            return Pd(a) && !Qd(parseFloat(a))
        }

        function Db(a) {
            return "function" == typeof a
        }

        function Eb(a) {
            return !(!a || !U[typeof a])
        }

        function Fb(a) {
            return Hb(a) && a != +a
        }

        function Gb(a) {
            return null === a
        }

        function Hb(a) {
            return "number" == typeof a || a && "object" == typeof a && Ad.call(a) == N || !1
        }

        function Ib(a) {
            return a && "object" == typeof a && Ad.call(a) == P || !1
        }

        function Jb(a) {
            return "string" == typeof a || a && "object" == typeof a && Ad.call(a) == Q || !1
        }

        function Kb(a) {
            return "undefined" == typeof a
        }

        function Lb(a, b, c) {
            var d = {};
            return b = o.createCallback(b, c, 3), he(a, function(a, c, e) {
                d[c] = b(a, c, e)
            }), d
        }

        function Mb(a) {
            var b = arguments,
                c = 2;
            if (!Eb(a)) return a;
            if ("number" != typeof b[2] && (c = b.length), c > 3 && "function" == typeof b[c - 2]) var d = Y(b[--c - 1], b[c--], 2);
            else c > 2 && "function" == typeof b[c - 1] && (d = b[--c]);
            for (var e = l(arguments, 1, c), f = -1, g = h(), i = h(); ++f < c;) cb(a, e[f], d, g, i);
            return j(g), j(i), a
        }

        function Nb(a, b, c) {
            var d = {};
            if ("function" != typeof b) {
                var e = [];
                ge(a, function(a, b) {
                    e.push(b)
                }), e = $(e, ab(arguments, !0, !1, 1));
                for (var f = -1, g = e.length; ++f < g;) {
                    var h = e[f];
                    d[h] = a[h]
                }
            } else b = o.createCallback(b, c, 3), ge(a, function(a, c, e) {
                b(a, c, e) || (d[c] = a)
            });
            return d
        }

        function Ob(a) {
            for (var b = -1, c = _d(a), d = c.length, e = nd(d); ++b < d;) {
                var f = c[b];
                e[b] = [f, a[f]]
            }
            return e
        }

        function Pb(a, b, c) {
            var d = {};
            if ("function" != typeof b)
                for (var e = -1, f = ab(arguments, !0, !1, 1), g = Eb(a) ? f.length : 0; ++e < g;) {
                    var h = f[e];
                    h in a && (d[h] = a[h])
                } else b = o.createCallback(b, c, 3), ge(a, function(a, c, e) {
                    b(a, c, e) && (d[c] = a)
                });
            return d
        }

        function Qb(a, b, c, d) {
            var e = Zd(a);
            if (null == c)
                if (e) c = [];
                else {
                    var f = a && a.constructor,
                        g = f && f.prototype;
                    c = X(g)
                } return b && (b = o.createCallback(b, d, 4), (e ? Yb : he)(a, function(a, d, e) {
                return b(c, a, d, e)
            })), c
        }

        function Rb(a) {
            for (var b = -1, c = _d(a), d = c.length, e = nd(d); ++b < d;) e[b] = a[c[b]];
            return e
        }

        function Sb(a) {
            for (var b = arguments, c = -1, d = ab(b, !0, !1, 1), e = b[2] && b[2][b[1]] === a ? 1 : d.length, f = nd(e); ++c < e;) f[c] = a[d[c]];
            return f
        }

        function Tb(a, b, c) {
            var d = -1,
                e = ib(),
                f = a ? a.length : 0,
                g = !1;
            return c = (0 > c ? Sd(0, f + c) : c) || 0, Zd(a) ? g = e(a, b, c) > -1 : "number" == typeof f ? g = (Jb(a) ? a.indexOf(b, c) : e(a, b, c)) > -1 : he(a, function(a) {
                return ++d >= c ? !(g = a === b) : void 0
            }), g
        }

        function Ub(a, b, c) {
            var d = !0;
            b = o.createCallback(b, c, 3);
            var e = -1,
                f = a ? a.length : 0;
            if ("number" == typeof f)
                for (; ++e < f && (d = !!b(a[e], e, a)););
            else he(a, function(a, c, e) {
                return d = !!b(a, c, e)
            });
            return d
        }

        function Vb(a, b, c) {
            var d = [];
            b = o.createCallback(b, c, 3);
            var e = -1,
                f = a ? a.length : 0;
            if ("number" == typeof f)
                for (; ++e < f;) {
                    var g = a[e];
                    b(g, e, a) && d.push(g)
                } else he(a, function(a, c, e) {
                    b(a, c, e) && d.push(a)
                });
            return d
        }

        function Wb(a, b, c) {
            b = o.createCallback(b, c, 3);
            var d = -1,
                e = a ? a.length : 0;
            if ("number" != typeof e) {
                var f;
                return he(a, function(a, c, d) {
                    return b(a, c, d) ? (f = a, !1) : void 0
                }), f
            }
            for (; ++d < e;) {
                var g = a[d];
                if (b(g, d, a)) return g
            }
        }

        function Xb(a, b, c) {
            var d;
            return b = o.createCallback(b, c, 3), Zb(a, function(a, c, e) {
                return b(a, c, e) ? (d = a, !1) : void 0
            }), d
        }

        function Yb(a, b, c) {
            var d = -1,
                e = a ? a.length : 0;
            if (b = b && "undefined" == typeof c ? b : Y(b, c, 3), "number" == typeof e)
                for (; ++d < e && b(a[d], d, a) !== !1;);
            else he(a, b);
            return a
        }

        function Zb(a, b, c) {
            var d = a ? a.length : 0;
            if (b = b && "undefined" == typeof c ? b : Y(b, c, 3), "number" == typeof d)
                for (; d-- && b(a[d], d, a) !== !1;);
            else {
                var e = _d(a);
                d = e.length, he(a, function(a, c, f) {
                    return c = e ? e[--d] : --d, b(f[c], c, f)
                })
            }
            return a
        }

        function $b(a, b) {
            var c = l(arguments, 2),
                d = -1,
                e = "function" == typeof b,
                f = a ? a.length : 0,
                g = nd("number" == typeof f ? f : 0);
            return Yb(a, function(a) {
                g[++d] = (e ? b : a[b]).apply(a, c)
            }), g
        }

        function _b(a, b, c) {
            var d = -1,
                e = a ? a.length : 0;
            if (b = o.createCallback(b, c, 3), "number" == typeof e)
                for (var f = nd(e); ++d < e;) f[d] = b(a[d], d, a);
            else f = [], he(a, function(a, c, e) {
                f[++d] = b(a, c, e)
            });
            return f
        }

        function ac(a, b, c) {
            var e = -1 / 0,
                f = e;
            if ("function" != typeof b && c && c[b] === a && (b = null), null == b && Zd(a))
                for (var g = -1, h = a.length; ++g < h;) {
                    var i = a[g];
                    i > f && (f = i)
                } else b = null == b && Jb(a) ? d : o.createCallback(b, c, 3), Yb(a, function(a, c, d) {
                    var g = b(a, c, d);
                    g > e && (e = g, f = a)
                });
            return f
        }

        function bc(a, b, c) {
            var e = 1 / 0,
                f = e;
            if ("function" != typeof b && c && c[b] === a && (b = null), null == b && Zd(a))
                for (var g = -1, h = a.length; ++g < h;) {
                    var i = a[g];
                    f > i && (f = i)
                } else b = null == b && Jb(a) ? d : o.createCallback(b, c, 3), Yb(a, function(a, c, d) {
                    var g = b(a, c, d);
                    e > g && (e = g, f = a)
                });
            return f
        }

        function cc(a, b, c, d) {
            if (!a) return c;
            var e = arguments.length < 3;
            b = o.createCallback(b, d, 4);
            var f = -1,
                g = a.length;
            if ("number" == typeof g)
                for (e && (c = a[++f]); ++f < g;) c = b(c, a[f], f, a);
            else he(a, function(a, d, f) {
                c = e ? (e = !1, a) : b(c, a, d, f)
            });
            return c
        }

        function dc(a, b, c, d) {
            var e = arguments.length < 3;
            return b = o.createCallback(b, d, 4), Zb(a, function(a, d, f) {
                c = e ? (e = !1, a) : b(c, a, d, f)
            }), c
        }

        function ec(a, b, c) {
            return b = o.createCallback(b, c, 3), Vb(a, function(a, c, d) {
                return !b(a, c, d)
            })
        }

        function fc(a, b, c) {
            if (a && "number" != typeof a.length && (a = Rb(a)), null == b || c) return a ? a[db(0, a.length - 1)] : n;
            var d = gc(a);
            return d.length = Td(Sd(0, b), d.length), d
        }

        function gc(a) {
            var b = -1,
                c = a ? a.length : 0,
                d = nd("number" == typeof c ? c : 0);
            return Yb(a, function(a) {
                var c = db(0, ++b);
                d[b] = d[c], d[c] = a
            }), d
        }

        function hc(a) {
            var b = a ? a.length : 0;
            return "number" == typeof b ? b : _d(a).length
        }

        function ic(a, b, c) {
            var d;
            b = o.createCallback(b, c, 3);
            var e = -1,
                f = a ? a.length : 0;
            if ("number" == typeof f)
                for (; ++e < f && !(d = b(a[e], e, a)););
            else he(a, function(a, c, e) {
                return !(d = b(a, c, e))
            });
            return !!d
        }

        function jc(a, b, c) {
            var d = -1,
                f = Zd(b),
                g = a ? a.length : 0,
                l = nd("number" == typeof g ? g : 0);
            for (f || (b = o.createCallback(b, c, 3)), Yb(a, function(a, c, e) {
                    var g = l[++d] = i();
                    f ? g.criteria = _b(b, function(b) {
                        return a[b]
                    }) : (g.criteria = h())[0] = b(a, c, e), g.index = d, g.value = a
                }), g = l.length, l.sort(e); g--;) {
                var m = l[g];
                l[g] = m.value, f || j(m.criteria), k(m)
            }
            return l
        }

        function kc(a) {
            return a && "number" == typeof a.length ? l(a) : Rb(a)
        }

        function lc(a) {
            for (var b = -1, c = a ? a.length : 0, d = []; ++b < c;) {
                var e = a[b];
                e && d.push(e)
            }
            return d
        }

        function mc(a) {
            return $(a, ab(arguments, !0, !0, 1))
        }

        function nc(a, b, c) {
            var d = -1,
                e = a ? a.length : 0;
            for (b = o.createCallback(b, c, 3); ++d < e;)
                if (b(a[d], d, a)) return d;
            return -1
        }

        function oc(a, b, c) {
            var d = a ? a.length : 0;
            for (b = o.createCallback(b, c, 3); d--;)
                if (b(a[d], d, a)) return d;
            return -1
        }

        function pc(a, b, c) {
            var d = 0,
                e = a ? a.length : 0;
            if ("number" != typeof b && null != b) {
                var f = -1;
                for (b = o.createCallback(b, c, 3); ++f < e && b(a[f], f, a);) d++
            } else if (d = b, null == d || c) return a ? a[0] : n;
            return l(a, 0, Td(Sd(0, d), e))
        }

        function qc(a, b, c, d) {
            return "boolean" != typeof b && null != b && (d = c, c = "function" != typeof b && d && d[b] === a ? null : b, b = !1), null != c && (a = _b(a, c, d)), ab(a, b)
        }

        function rc(b, c, d) {
            if ("number" == typeof d) {
                var e = b ? b.length : 0;
                d = 0 > d ? Sd(0, e + d) : d || 0
            } else if (d) {
                var f = Ac(b, c);
                return b[f] === c ? f : -1
            }
            return a(b, c, d)
        }

        function sc(a, b, c) {
            var d = 0,
                e = a ? a.length : 0;
            if ("number" != typeof b && null != b) {
                var f = e;
                for (b = o.createCallback(b, c, 3); f-- && b(a[f], f, a);) d++
            } else d = null == b || c ? 1 : b || d;
            return l(a, 0, Td(Sd(0, e - d), e))
        }

        function tc() {
            for (var c = [], d = -1, e = arguments.length, g = h(), i = ib(), l = i === a, m = h(); ++d < e;) {
                var n = arguments[d];
                (Zd(n) || mb(n)) && (c.push(n), g.push(l && n.length >= s && f(d ? c[d] : m)))
            }
            var o = c[0],
                p = -1,
                q = o ? o.length : 0,
                r = [];
            a: for (; ++p < q;) {
                var t = g[0];
                if (n = o[p], (t ? b(t, n) : i(m, n)) < 0) {
                    for (d = e, (t || m).push(n); --d;)
                        if (t = g[d], (t ? b(t, n) : i(c[d], n)) < 0) continue a;
                    r.push(n)
                }
            }
            for (; e--;) t = g[e], t && k(t);
            return j(g), j(m), r
        }

        function uc(a, b, c) {
            var d = 0,
                e = a ? a.length : 0;
            if ("number" != typeof b && null != b) {
                var f = e;
                for (b = o.createCallback(b, c, 3); f-- && b(a[f], f, a);) d++
            } else if (d = b, null == d || c) return a ? a[e - 1] : n;
            return l(a, Sd(0, e - d))
        }

        function vc(a, b, c) {
            var d = a ? a.length : 0;
            for ("number" == typeof c && (d = (0 > c ? Sd(0, d + c) : Td(c, d - 1)) + 1); d--;)
                if (a[d] === b) return d;
            return -1
        }

        function wc(a) {
            for (var b = arguments, c = 0, d = b.length, e = a ? a.length : 0; ++c < d;)
                for (var f = -1, g = b[c]; ++f < e;) a[f] === g && (Kd.call(a, f--, 1), e--);
            return a
        }

        function xc(a, b, c) {
            a = +a || 0, c = "number" == typeof c ? c : +c || 1, null == b && (b = a, a = 0);
            for (var d = -1, e = Sd(0, Cd((b - a) / (c || 1))), f = nd(e); ++d < e;) f[d] = a, a += c;
            return f
        }

        function yc(a, b, c) {
            var d = -1,
                e = a ? a.length : 0,
                f = [];
            for (b = o.createCallback(b, c, 3); ++d < e;) {
                var g = a[d];
                b(g, d, a) && (f.push(g), Kd.call(a, d--, 1), e--)
            }
            return f
        }

        function zc(a, b, c) {
            if ("number" != typeof b && null != b) {
                var d = 0,
                    e = -1,
                    f = a ? a.length : 0;
                for (b = o.createCallback(b, c, 3); ++e < f && b(a[e], e, a);) d++
            } else d = null == b || c ? 1 : Sd(0, b);
            return l(a, d)
        }

        function Ac(a, b, c, d) {
            var e = 0,
                f = a ? a.length : e;
            for (c = c ? o.createCallback(c, d, 1) : Zc, b = c(b); f > e;) {
                var g = e + f >>> 1;
                c(a[g]) < b ? e = g + 1 : f = g
            }
            return e
        }

        function Bc() {
            return eb(ab(arguments, !0, !0))
        }

        function Cc(a, b, c, d) {
            return "boolean" != typeof b && null != b && (d = c, c = "function" != typeof b && d && d[b] === a ? null : b, b = !1), null != c && (c = o.createCallback(c, d, 3)), eb(a, b, c)
        }

        function Dc(a) {
            return $(a, l(arguments, 1))
        }

        function Ec() {
            for (var a = -1, b = arguments.length; ++a < b;) {
                var c = arguments[a];
                if (Zd(c) || mb(c)) var d = d ? eb($(d, c).concat($(c, d))) : c
            }
            return d || []
        }

        function Fc() {
            for (var a = arguments.length > 1 ? arguments : arguments[0], b = -1, c = a ? ac(me(a, "length")) : 0, d = nd(0 > c ? 0 : c); ++b < c;) d[b] = me(a, b);
            return d
        }

        function Gc(a, b) {
            var c = -1,
                d = a ? a.length : 0,
                e = {};
            for (b || !d || Zd(a[0]) || (b = []); ++c < d;) {
                var f = a[c];
                b ? e[f] = b[c] : f && (e[f[0]] = f[1])
            }
            return e
        }

        function Hc(a, b) {
            if (!Db(b)) throw new wd;
            return function() {
                return --a < 1 ? b.apply(this, arguments) : void 0
            }
        }

        function Ic(a, b) {
            return arguments.length > 2 ? gb(a, 17, l(arguments, 2), null, b) : gb(a, 1, null, null, b)
        }

        function Jc(a) {
            for (var b = arguments.length > 1 ? ab(arguments, !0, !1, 1) : ub(a), c = -1, d = b.length; ++c < d;) {
                var e = b[c];
                a[e] = gb(a[e], 1, null, null, a)
            }
            return a
        }

        function Kc(a, b) {
            return arguments.length > 2 ? gb(b, 19, l(arguments, 2), null, a) : gb(b, 3, null, null, a)
        }

        function Lc() {
            for (var a = arguments, b = a.length; b--;)
                if (!Db(a[b])) throw new wd;
            return function() {
                for (var b = arguments, c = a.length; c--;) b = [a[c].apply(this, b)];
                return b[0]
            }
        }

        function Mc(a, b) {
            return b = "number" == typeof b ? b : +b || a.length, gb(a, 4, null, null, null, b)
        }

        function Nc(a, b, c) {
            var d, e, f, g, h, i, j, k = 0,
                l = !1,
                m = !0;
            if (!Db(a)) throw new wd;
            if (b = Sd(0, b) || 0, c === !0) {
                var o = !0;
                m = !1
            } else Eb(c) && (o = c.leading, l = "maxWait" in c && (Sd(b, c.maxWait) || 0), m = "trailing" in c ? c.trailing : m);
            var p = function() {
                    var c = b - (oe() - g);
                    if (0 >= c) {
                        e && Dd(e);
                        var l = j;
                        e = i = j = n, l && (k = oe(), f = a.apply(h, d), i || e || (d = h = null))
                    } else i = Jd(p, c)
                },
                q = function() {
                    i && Dd(i), e = i = j = n, (m || l !== b) && (k = oe(), f = a.apply(h, d), i || e || (d = h = null))
                };
            return function() {
                if (d = arguments, g = oe(), h = this, j = m && (i || !o), l === !1) var c = o && !i;
                else {
                    e || o || (k = g);
                    var n = l - (g - k),
                        r = 0 >= n;
                    r ? (e && (e = Dd(e)), k = g, f = a.apply(h, d)) : e || (e = Jd(q, n))
                }
                return r && i ? i = Dd(i) : i || b === l || (i = Jd(p, b)), c && (r = !0, f = a.apply(h, d)), !r || i || e || (d = h = null), f
            }
        }

        function Oc(a) {
            if (!Db(a)) throw new wd;
            var b = l(arguments, 1);
            return Jd(function() {
                a.apply(n, b)
            }, 1)
        }

        function Pc(a, b) {
            if (!Db(a)) throw new wd;
            var c = l(arguments, 2);
            return Jd(function() {
                a.apply(n, c)
            }, b)
        }

        function Qc(a, b) {
            if (!Db(a)) throw new wd;
            var c = function() {
                var d = c.cache,
                    e = b ? b.apply(this, arguments) : r + arguments[0];
                return Hd.call(d, e) ? d[e] : d[e] = a.apply(this, arguments)
            };
            return c.cache = {}, c
        }

        function Rc(a) {
            var b, c;
            if (!Db(a)) throw new wd;
            return function() {
                return b ? c : (b = !0, c = a.apply(this, arguments), a = null, c)
            }
        }

        function Sc(a) {
            return gb(a, 16, l(arguments, 1))
        }

        function Tc(a) {
            return gb(a, 32, null, l(arguments, 1))
        }

        function Uc(a, b, c) {
            var d = !0,
                e = !0;
            if (!Db(a)) throw new wd;
            return c === !1 ? d = !1 : Eb(c) && (d = "leading" in c ? c.leading : d, e = "trailing" in c ? c.trailing : e), S.leading = d, S.maxWait = b, S.trailing = e, Nc(a, b, S)
        }

        function Vc(a, b) {
            return gb(b, 16, [a])
        }

        function Wc(a) {
            return function() {
                return a
            }
        }

        function Xc(a, b, c) {
            var d = typeof a;
            if (null == a || "function" == d) return Y(a, b, c);
            if ("object" != d) return bd(a);
            var e = _d(a),
                f = e[0],
                g = a[f];
            return 1 != e.length || g !== g || Eb(g) ? function(b) {
                for (var c = e.length, d = !1; c-- && (d = bb(b[e[c]], a[e[c]], null, !0)););
                return d
            } : function(a) {
                var b = a[f];
                return g === b && (0 !== g || 1 / g == 1 / b)
            }
        }

        function Yc(a) {
            return null == a ? "" : vd(a).replace(de, hb)
        }

        function Zc(a) {
            return a
        }

        function $c(a, b, c) {
            var d = !0,
                e = b && ub(b);
            b && (c || e.length) || (null == c && (c = b), f = p, b = a, a = o, e = ub(b)), c === !1 ? d = !1 : Eb(c) && "chain" in c && (d = c.chain);
            var f = a,
                g = Db(f);
            Yb(e, function(c) {
                var e = a[c] = b[c];
                g && (f.prototype[c] = function() {
                    var b = this.__chain__,
                        c = this.__wrapped__,
                        g = [c];
                    Id.apply(g, arguments);
                    var h = e.apply(a, g);
                    if (d || b) {
                        if (c === h && Eb(h)) return this;
                        h = new f(h), h.__chain__ = b
                    }
                    return h
                })
            })
        }

        function _c() {
            return c._ = zd, this
        }

        function ad() {}

        function bd(a) {
            return function(b) {
                return b[a]
            }
        }

        function cd(a, b, c) {
            var d = null == a,
                e = null == b;
            if (null == c && ("boolean" == typeof a && e ? (c = a, a = 1) : e || "boolean" != typeof b || (c = b, e = !0)), d && e && (b = 1), a = +a || 0, e ? (b = a, a = 0) : b = +b || 0, c || a % 1 || b % 1) {
                var f = Vd();
                return Td(a + f * (b - a + parseFloat("1e-" + ((f + "").length - 1))), b)
            }
            return db(a, b)
        }

        function dd(a, b) {
            if (a) {
                var c = a[b];
                return Db(c) ? a[b]() : c
            }
        }

        function ed(a, b, c) {
            var d = o.templateSettings;
            a = vd(a || ""), c = fe({}, c, d);
            var e, f = fe({}, c.imports, d.imports),
                h = _d(f),
                i = Rb(f),
                j = 0,
                k = c.interpolate || D,
                l = "__p += '",
                m = ud((c.escape || D).source + "|" + k.source + "|" + (k === B ? y : D).source + "|" + (c.evaluate || D).source + "|$", "g");
            a.replace(m, function(b, c, d, f, h, i) {
                return d || (d = f), l += a.slice(j, i).replace(F, g), c && (l += "' +\n__e(" + c + ") +\n'"), h && (e = !0, l += "';\n" + h + ";\n__p += '"), d && (l += "' +\n((__t = (" + d + ")) == null ? '' : __t) +\n'"), j = i + b.length, b
            }), l += "';\n";
            var p = c.variable,
                q = p;
            q || (p = "obj", l = "with (" + p + ") {\n" + l + "\n}\n"), l = (e ? l.replace(v, "") : l).replace(w, "$1").replace(x, "$1;"), l = "function(" + p + ") {\n" + (q ? "" : p + " || (" + p + " = {});\n") + "var __t, __p = '', __e = _.escape" + (e ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + l + "return __p\n}";
            var r = "\n/*\n//# sourceURL=" + (c.sourceURL || "/lodash/template/source[" + H++ + "]") + "\n*/";
            try {
                var s = qd(h, "return " + l + r).apply(n, i)
            } catch (t) {
                throw t.source = l, t
            }
            return b ? s(b) : (s.source = l, s)
        }

        function fd(a, b, c) {
            a = (a = +a) > -1 ? a : 0;
            var d = -1,
                e = nd(a);
            for (b = Y(b, c, 1); ++d < a;) e[d] = b(d);
            return e
        }

        function gd(a) {
            return null == a ? "" : vd(a).replace(ce, lb)
        }

        function hd(a) {
            var b = ++q;
            return vd(null == a ? "" : a) + b
        }

        function id(a) {
            return a = new p(a), a.__chain__ = !0, a
        }

        function jd(a, b) {
            return b(a), a
        }

        function kd() {
            return this.__chain__ = !0, this
        }

        function ld() {
            return vd(this.__wrapped__)
        }

        function md() {
            return this.__wrapped__
        }
        c = c ? _.defaults(W.Object(), c, _.pick(W, G)) : W;
        var nd = c.Array,
            od = c.Boolean,
            pd = c.Date,
            qd = c.Function,
            rd = c.Math,
            sd = c.Number,
            td = c.Object,
            ud = c.RegExp,
            vd = c.String,
            wd = c.TypeError,
            xd = [],
            yd = td.prototype,
            zd = c._,
            Ad = yd.toString,
            Bd = ud("^" + vd(Ad).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/toString| for [^\]]+/g, ".*?") + "$"),
            Cd = rd.ceil,
            Dd = c.clearTimeout,
            Ed = rd.floor,
            Fd = qd.prototype.toString,
            Gd = jb(Gd = td.getPrototypeOf) && Gd,
            Hd = yd.hasOwnProperty,
            Id = xd.push,
            Jd = c.setTimeout,
            Kd = xd.splice,
            Ld = xd.unshift,
            Md = function() {
                try {
                    var a = {},
                        b = jb(b = td.defineProperty) && b,
                        c = b(a, a, a) && b
                } catch (d) {}
                return c
            }(),
            Nd = jb(Nd = td.create) && Nd,
            Od = jb(Od = nd.isArray) && Od,
            Pd = c.isFinite,
            Qd = c.isNaN,
            Rd = jb(Rd = td.keys) && Rd,
            Sd = rd.max,
            Td = rd.min,
            Ud = c.parseInt,
            Vd = rd.random,
            Wd = {};
        Wd[J] = nd, Wd[K] = od, Wd[L] = pd, Wd[M] = qd, Wd[O] = td, Wd[N] = sd, Wd[P] = ud, Wd[Q] = vd, p.prototype = o.prototype;
        var Xd = o.support = {};
        Xd.funcDecomp = !jb(c.WinRTError) && E.test(m), Xd.funcNames = "string" == typeof qd.name, o.templateSettings = {
            escape: /<%-([\s\S]+?)%>/g,
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: B,
            variable: "",
            imports: {
                _: o
            }
        }, Nd || (X = function() {
            function a() {}
            return function(b) {
                if (Eb(b)) {
                    a.prototype = b;
                    var d = new a;
                    a.prototype = null
                }
                return d || c.Object()
            }
        }());
        var Yd = Md ? function(a, b) {
                T.value = b, Md(a, "__bindData__", T)
            } : ad,
            Zd = Od || function(a) {
                return a && "object" == typeof a && "number" == typeof a.length && Ad.call(a) == J || !1
            },
            $d = function(a) {
                var b, c = a,
                    d = [];
                if (!c) return d;
                if (!U[typeof a]) return d;
                for (b in c) Hd.call(c, b) && d.push(b);
                return d
            },
            _d = Rd ? function(a) {
                return Eb(a) ? Rd(a) : []
            } : $d,
            ae = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            },
            be = wb(ae),
            ce = ud("(" + _d(be).join("|") + ")", "g"),
            de = ud("[" + _d(ae).join("") + "]", "g"),
            ee = function(a, b, c) {
                var d, e = a,
                    f = e;
                if (!e) return f;
                var g = arguments,
                    h = 0,
                    i = "number" == typeof c ? 2 : g.length;
                if (i > 3 && "function" == typeof g[i - 2]) var j = Y(g[--i - 1], g[i--], 2);
                else i > 2 && "function" == typeof g[i - 1] && (j = g[--i]);
                for (; ++h < i;)
                    if (e = g[h], e && U[typeof e])
                        for (var k = -1, l = U[typeof e] && _d(e), m = l ? l.length : 0; ++k < m;) d = l[k], f[d] = j ? j(f[d], e[d]) : e[d];
                return f
            },
            fe = function(a, b, c) {
                var d, e = a,
                    f = e;
                if (!e) return f;
                for (var g = arguments, h = 0, i = "number" == typeof c ? 2 : g.length; ++h < i;)
                    if (e = g[h], e && U[typeof e])
                        for (var j = -1, k = U[typeof e] && _d(e), l = k ? k.length : 0; ++j < l;) d = k[j], "undefined" == typeof f[d] && (f[d] = e[d]);
                return f
            },
            ge = function(a, b, c) {
                var d, e = a,
                    f = e;
                if (!e) return f;
                if (!U[typeof e]) return f;
                b = b && "undefined" == typeof c ? b : Y(b, c, 3);
                for (d in e)
                    if (b(e[d], d, a) === !1) return f;
                return f
            },
            he = function(a, b, c) {
                var d, e = a,
                    f = e;
                if (!e) return f;
                if (!U[typeof e]) return f;
                b = b && "undefined" == typeof c ? b : Y(b, c, 3);
                for (var g = -1, h = U[typeof e] && _d(e), i = h ? h.length : 0; ++g < i;)
                    if (d = h[g], b(e[d], d, a) === !1) return f;
                return f
            },
            ie = Gd ? function(a) {
                if (!a || Ad.call(a) != O) return !1;
                var b = a.valueOf,
                    c = jb(b) && (c = Gd(b)) && Gd(c);
                return c ? a == c || Gd(a) == c : kb(a)
            } : kb,
            je = fb(function(a, b, c) {
                Hd.call(a, c) ? a[c]++ : a[c] = 1
            }),
            ke = fb(function(a, b, c) {
                (Hd.call(a, c) ? a[c] : a[c] = []).push(b)
            }),
            le = fb(function(a, b, c) {
                a[c] = b
            }),
            me = _b,
            ne = Vb,
            oe = jb(oe = pd.now) && oe || function() {
                return (new pd).getTime()
            },
            pe = 8 == Ud(u + "08") ? Ud : function(a, b) {
                return Ud(Jb(a) ? a.replace(C, "") : a, b || 0)
            };
        return o.after = Hc, o.assign = ee, o.at = Sb, o.bind = Ic, o.bindAll = Jc, o.bindKey = Kc, o.chain = id, o.compact = lc, o.compose = Lc, o.constant = Wc, o.countBy = je, o.create = pb, o.createCallback = Xc, o.curry = Mc, o.debounce = Nc, o.defaults = fe, o.defer = Oc, o.delay = Pc, o.difference = mc, o.filter = Vb, o.flatten = qc, o.forEach = Yb, o.forEachRight = Zb, o.forIn = ge, o.forInRight = sb, o.forOwn = he, o.forOwnRight = tb, o.functions = ub, o.groupBy = ke, o.indexBy = le, o.initial = sc, o.intersection = tc, o.invert = wb, o.invoke = $b, o.keys = _d, o.map = _b, o.mapValues = Lb, o.max = ac, o.memoize = Qc, o.merge = Mb, o.min = bc, o.omit = Nb, o.once = Rc, o.pairs = Ob, o.partial = Sc, o.partialRight = Tc, o.pick = Pb, o.pluck = me, o.property = bd, o.pull = wc, o.range = xc, o.reject = ec, o.remove = yc, o.rest = zc, o.shuffle = gc, o.sortBy = jc, o.tap = jd, o.throttle = Uc, o.times = fd, o.toArray = kc, o.transform = Qb, o.union = Bc, o.uniq = Cc, o.values = Rb, o.where = ne, o.without = Dc, o.wrap = Vc, o.xor = Ec, o.zip = Fc, o.zipObject = Gc, o.collect = _b, o.drop = zc, o.each = Yb, o.eachRight = Zb, o.extend = ee, o.methods = ub, o.object = Gc, o.select = Vb, o.tail = zc, o.unique = Cc, o.unzip = Fc, $c(o), o.clone = nb, o.cloneDeep = ob, o.contains = Tb, o.escape = Yc, o.every = Ub, o.find = Wb, o.findIndex = nc, o.findKey = qb, o.findLast = Xb, o.findLastIndex = oc, o.findLastKey = rb, o.has = vb, o.identity = Zc, o.indexOf = rc, o.isArguments = mb, o.isArray = Zd, o.isBoolean = xb, o.isDate = yb, o.isElement = zb, o.isEmpty = Ab, o.isEqual = Bb, o.isFinite = Cb, o.isFunction = Db, o.isNaN = Fb, o.isNull = Gb, o.isNumber = Hb, o.isObject = Eb, o.isPlainObject = ie, o.isRegExp = Ib, o.isString = Jb, o.isUndefined = Kb, o.lastIndexOf = vc, o.mixin = $c, o.noConflict = _c, o.noop = ad, o.now = oe, o.parseInt = pe, o.random = cd, o.reduce = cc, o.reduceRight = dc, o.result = dd, o.runInContext = m, o.size = hc, o.some = ic, o.sortedIndex = Ac, o.template = ed, o.unescape = gd, o.uniqueId = hd, o.all = Ub, o.any = ic, o.detect = Wb, o.findWhere = Wb, o.foldl = cc, o.foldr = dc, o.include = Tb, o.inject = cc, $c(function() {
            var a = {};
            return he(o, function(b, c) {
                o.prototype[c] || (a[c] = b)
            }), a
        }(), !1), o.first = pc, o.last = uc, o.sample = fc, o.take = pc, o.head = pc, he(o, function(a, b) {
            var c = "sample" !== b;
            o.prototype[b] || (o.prototype[b] = function(b, d) {
                var e = this.__chain__,
                    f = a(this.__wrapped__, b, d);
                return e || null != b && (!d || c && "function" == typeof b) ? new p(f, e) : f
            })
        }), o.VERSION = "2.4.1", o.prototype.chain = kd, o.prototype.toString = ld, o.prototype.value = md, o.prototype.valueOf = md, Yb(["join", "pop", "shift"], function(a) {
            var b = xd[a];
            o.prototype[a] = function() {
                var a = this.__chain__,
                    c = b.apply(this.__wrapped__, arguments);
                return a ? new p(c, a) : c
            }
        }), Yb(["push", "reverse", "sort", "unshift"], function(a) {
            var b = xd[a];
            o.prototype[a] = function() {
                return b.apply(this.__wrapped__, arguments), this
            }
        }), Yb(["concat", "slice", "splice"], function(a) {
            var b = xd[a];
            o.prototype[a] = function() {
                return new p(b.apply(this.__wrapped__, arguments), this.__chain__)
            }
        }), o
    }
    var n, o = [],
        p = [],
        q = 0,
        r = +new Date + "",
        s = 75,
        t = 40,
        u = " 	\f ﻿\n\r\u2028\u2029 ᠎             　",
        v = /\b__p \+= '';/g,
        w = /\b(__p \+=) '' \+/g,
        x = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
        y = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
        z = /\w*$/,
        A = /^\s*function[ \n\r\t]+\w/,
        B = /<%=([\s\S]+?)%>/g,
        C = RegExp("^[" + u + "]*0+(?=.$)"),
        D = /($^)/,
        E = /\bthis\b/,
        F = /['\n\r\t\u2028\u2029\\]/g,
        G = ["Array", "Boolean", "Date", "Function", "Math", "Number", "Object", "RegExp", "String", "_", "attachEvent", "clearTimeout", "isFinite", "isNaN", "parseInt", "setTimeout"],
        H = 0,
        I = "[object Arguments]",
        J = "[object Array]",
        K = "[object Boolean]",
        L = "[object Date]",
        M = "[object Function]",
        N = "[object Number]",
        O = "[object Object]",
        P = "[object RegExp]",
        Q = "[object String]",
        R = {};
    R[M] = !1, R[I] = R[J] = R[K] = R[L] = R[N] = R[O] = R[P] = R[Q] = !0;
    var S = {
            leading: !1,
            maxWait: 0,
            trailing: !1
        },
        T = {
            configurable: !1,
            enumerable: !1,
            value: null,
            writable: !1
        },
        U = {
            "boolean": !1,
            "function": !0,
            object: !0,
            number: !1,
            string: !1,
            undefined: !1
        },
        V = {
            "\\": "\\",
            "'": "'",
            "\n": "n",
            "\r": "r",
            "	": "t",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        W = U[typeof window] && window || this,
        X = U[typeof exports] && exports && !exports.nodeType && exports,
        Y = U[typeof module] && module && !module.nodeType && module,
        Z = Y && Y.exports === X && X,
        $ = U[typeof global] && global;
    !$ || $.global !== $ && $.window !== $ || (W = $);
    var _ = m();
    "function" == typeof define && "object" == typeof define.amd && define.amd ? (W._ = _, define(function() {
        return _
    })) : X && Y ? Z ? (Y.exports = _)._ = _ : X._ = _ : W._ = _
}).call(this),
    function(a, b, c) {
        "use strict";

        function d(a) {
            return function() {
                var b, c, d = arguments[0],
                    e = "[" + (a ? a + ":" : "") + d + "] ",
                    f = arguments[1],
                    g = arguments,
                    h = function(a) {
                        return "function" == typeof a ? a.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof a ? "undefined" : "string" != typeof a ? JSON.stringify(a) : a
                    };
                for (b = e + f.replace(/\{\d+\}/g, function(a) {
                        var b, c = +a.slice(1, -1);
                        return c + 2 < g.length ? (b = g[c + 2], "function" == typeof b ? b.toString().replace(/ ?\{[\s\S]*$/, "") : "undefined" == typeof b ? "undefined" : "string" != typeof b ? Q(b) : b) : a
                    }), b = b + "\nhttp://errors.angularjs.org/1.2.20/" + (a ? a + "/" : "") + d, c = 2; c < arguments.length; c++) b = b + (2 == c ? "?" : "&") + "p" + (c - 2) + "=" + encodeURIComponent(h(arguments[c]));
                return new Error(b)
            }
        }

        function e(a) {
            if (null == a || z(a)) return !1;
            var b = a.length;
            return 1 === a.nodeType && b ? !0 : u(a) || Cd(a) || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
        }

        function f(a, b, c) {
            var d;
            if (a)
                if (x(a))
                    for (d in a) "prototype" == d || "length" == d || "name" == d || a.hasOwnProperty && !a.hasOwnProperty(d) || b.call(c, a[d], d);
                else if (a.forEach && a.forEach !== f) a.forEach(b, c);
            else if (e(a))
                for (d = 0; d < a.length; d++) b.call(c, a[d], d);
            else
                for (d in a) a.hasOwnProperty(d) && b.call(c, a[d], d);
            return a
        }

        function g(a) {
            var b = [];
            for (var c in a) a.hasOwnProperty(c) && b.push(c);
            return b.sort()
        }

        function h(a, b, c) {
            for (var d = g(a), e = 0; e < d.length; e++) b.call(c, a[d[e]], d[e]);
            return d
        }

        function i(a) {
            return function(b, c) {
                a(c, b)
            }
        }

        function j() {
            for (var a, b = Bd.length; b;) {
                if (b--, a = Bd[b].charCodeAt(0), 57 == a) return Bd[b] = "A", Bd.join("");
                if (90 != a) return Bd[b] = String.fromCharCode(a + 1), Bd.join("");
                Bd[b] = "0"
            }
            return Bd.unshift("0"), Bd.join("")
        }

        function k(a, b) {
            b ? a.$$hashKey = b : delete a.$$hashKey
        }

        function l(a) {
            var b = a.$$hashKey;
            return f(arguments, function(b) {
                b !== a && f(b, function(b, c) {
                    a[c] = b
                })
            }), k(a, b), a
        }

        function m(a) {
            return parseInt(a, 10)
        }

        function n(a, b) {
            return l(new(l(function() {}, {
                prototype: a
            })), b)
        }

        function o() {}

        function p(a) {
            return a
        }

        function q(a) {
            return function() {
                return a
            }
        }

        function r(a) {
            return "undefined" == typeof a
        }

        function s(a) {
            return "undefined" != typeof a
        }

        function t(a) {
            return null != a && "object" == typeof a
        }

        function u(a) {
            return "string" == typeof a
        }

        function v(a) {
            return "number" == typeof a
        }

        function w(a) {
            return "[object Date]" === yd.call(a)
        }

        function x(a) {
            return "function" == typeof a
        }

        function y(a) {
            return "[object RegExp]" === yd.call(a)
        }

        function z(a) {
            return a && a.document && a.location && a.alert && a.setInterval
        }

        function A(a) {
            return a && a.$evalAsync && a.$watch
        }

        function B(a) {
            return "[object File]" === yd.call(a)
        }

        function C(a) {
            return "[object Blob]" === yd.call(a)
        }

        function D(a) {
            return !(!a || !(a.nodeName || a.prop && a.attr && a.find))
        }

        function E(a, b, c) {
            var d = [];
            return f(a, function(a, e, f) {
                d.push(b.call(c, a, e, f))
            }), d
        }

        function F(a, b) {
            return -1 != G(a, b)
        }

        function G(a, b) {
            if (a.indexOf) return a.indexOf(b);
            for (var c = 0; c < a.length; c++)
                if (b === a[c]) return c;
            return -1
        }

        function H(a, b) {
            var c = G(a, b);
            return c >= 0 && a.splice(c, 1), b
        }

        function I(a, b, c, d) {
            if (z(a) || A(a)) throw zd("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
            if (b) {
                if (a === b) throw zd("cpi", "Can't copy! Source and destination are identical.");
                if (c = c || [], d = d || [], t(a)) {
                    var e = G(c, a);
                    if (-1 !== e) return d[e];
                    c.push(a), d.push(b)
                }
                var g;
                if (Cd(a)) {
                    b.length = 0;
                    for (var h = 0; h < a.length; h++) g = I(a[h], null, c, d), t(a[h]) && (c.push(a[h]), d.push(g)), b.push(g)
                } else {
                    var i = b.$$hashKey;
                    f(b, function(a, c) {
                        delete b[c]
                    });
                    for (var j in a) g = I(a[j], null, c, d), t(a[j]) && (c.push(a[j]), d.push(g)), b[j] = g;
                    k(b, i)
                }
            } else b = a, a && (Cd(a) ? b = I(a, [], c, d) : w(a) ? b = new Date(a.getTime()) : y(a) ? b = new RegExp(a.source) : t(a) && (b = I(a, {}, c, d)));
            return b
        }

        function J(a, b) {
            if (Cd(a)) {
                b = b || [];
                for (var c = 0; c < a.length; c++) b[c] = a[c]
            } else if (t(a)) {
                b = b || {};
                for (var d in a) !nd.call(a, d) || "$" === d.charAt(0) && "$" === d.charAt(1) || (b[d] = a[d])
            }
            return b || a
        }

        function K(a, b) {
            if (a === b) return !0;
            if (null === a || null === b) return !1;
            if (a !== a && b !== b) return !0;
            var d, e, f, g = typeof a,
                h = typeof b;
            if (g == h && "object" == g) {
                if (!Cd(a)) {
                    if (w(a)) return w(b) && a.getTime() == b.getTime();
                    if (y(a) && y(b)) return a.toString() == b.toString();
                    if (A(a) || A(b) || z(a) || z(b) || Cd(b)) return !1;
                    f = {};
                    for (e in a)
                        if ("$" !== e.charAt(0) && !x(a[e])) {
                            if (!K(a[e], b[e])) return !1;
                            f[e] = !0
                        } for (e in b)
                        if (!f.hasOwnProperty(e) && "$" !== e.charAt(0) && b[e] !== c && !x(b[e])) return !1;
                    return !0
                }
                if (!Cd(b)) return !1;
                if ((d = a.length) == b.length) {
                    for (e = 0; d > e; e++)
                        if (!K(a[e], b[e])) return !1;
                    return !0
                }
            }
            return !1
        }

        function L() {
            return b.securityPolicy && b.securityPolicy.isActive || b.querySelector && !(!b.querySelector("[ng-csp]") && !b.querySelector("[data-ng-csp]"))
        }

        function M(a, b, c) {
            return a.concat(wd.call(b, c))
        }

        function N(a, b) {
            return wd.call(a, b || 0)
        }

        function O(a, b) {
            var c = arguments.length > 2 ? N(arguments, 2) : [];
            return !x(b) || b instanceof RegExp ? b : c.length ? function() {
                return arguments.length ? b.apply(a, c.concat(wd.call(arguments, 0))) : b.apply(a, c)
            } : function() {
                return arguments.length ? b.apply(a, arguments) : b.call(a)
            }
        }

        function P(a, d) {
            var e = d;
            return "string" == typeof a && "$" === a.charAt(0) ? e = c : z(d) ? e = "$WINDOW" : d && b === d ? e = "$DOCUMENT" : A(d) && (e = "$SCOPE"), e
        }

        function Q(a, b) {
            return "undefined" == typeof a ? c : JSON.stringify(a, P, b ? "  " : null)
        }

        function R(a) {
            return u(a) ? JSON.parse(a) : a
        }

        function S(a) {
            if ("function" == typeof a) a = !0;
            else if (a && 0 !== a.length) {
                var b = md("" + a);
                a = !("f" == b || "0" == b || "false" == b || "no" == b || "n" == b || "[]" == b)
            } else a = !1;
            return a
        }

        function T(a) {
            a = sd(a).clone();
            try {
                a.empty()
            } catch (b) {}
            var c = 3,
                d = sd("<div>").append(a).html();
            try {
                return a[0].nodeType === c ? md(d) : d.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(a, b) {
                    return "<" + md(b)
                })
            } catch (b) {
                return md(d)
            }
        }

        function U(a) {
            try {
                return decodeURIComponent(a)
            } catch (b) {}
        }

        function V(a) {
            var b, c, d = {};
            return f((a || "").split("&"), function(a) {
                if (a && (b = a.split("="), c = U(b[0]), s(c))) {
                    var e = s(b[1]) ? U(b[1]) : !0;
                    nd.call(d, c) ? Cd(d[c]) ? d[c].push(e) : d[c] = [d[c], e] : d[c] = e
                }
            }), d
        }

        function W(a) {
            var b = [];
            return f(a, function(a, c) {
                Cd(a) ? f(a, function(a) {
                    b.push(Y(c, !0) + (a === !0 ? "" : "=" + Y(a, !0)))
                }) : b.push(Y(c, !0) + (a === !0 ? "" : "=" + Y(a, !0)))
            }), b.length ? b.join("&") : ""
        }

        function X(a) {
            return Y(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
        }

        function Y(a, b) {
            return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, b ? "%20" : "+")
        }

        function Z(a, c) {
            function d(a) {
                a && h.push(a)
            }
            var e, g, h = [a],
                i = ["ng:app", "ng-app", "x-ng-app", "data-ng-app"],
                j = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
            f(i, function(c) {
                i[c] = !0, d(b.getElementById(c)), c = c.replace(":", "\\:"), a.querySelectorAll && (f(a.querySelectorAll("." + c), d), f(a.querySelectorAll("." + c + "\\:"), d), f(a.querySelectorAll("[" + c + "]"), d))
            }), f(h, function(a) {
                if (!e) {
                    var b = " " + a.className + " ",
                        c = j.exec(b);
                    c ? (e = a, g = (c[2] || "").replace(/\s+/g, ",")) : f(a.attributes, function(b) {
                        !e && i[b.name] && (e = a, g = b.value)
                    })
                }
            }), e && c(e, g ? [g] : [])
        }

        function $(c, d) {
            var e = function() {
                    if (c = sd(c), c.injector()) {
                        var a = c[0] === b ? "document" : T(c);
                        throw zd("btstrpd", "App Already Bootstrapped with this Element '{0}'", a)
                    }
                    d = d || [], d.unshift(["$provide", function(a) {
                        a.value("$rootElement", c)
                    }]), d.unshift("ng");
                    var e = Hb(d);
                    return e.invoke(["$rootScope", "$rootElement", "$compile", "$injector", "$animate", function(a, b, c, d) {
                        a.$apply(function() {
                            b.data("$injector", d), c(b)(a)
                        })
                    }]), e
                },
                g = /^NG_DEFER_BOOTSTRAP!/;
            return a && !g.test(a.name) ? e() : (a.name = a.name.replace(g, ""), void(Ad.resumeBootstrap = function(a) {
                f(a, function(a) {
                    d.push(a)
                }), e()
            }))
        }

        function _(a, b) {
            return b = b || "_", a.replace(Ed, function(a, c) {
                return (c ? b : "") + a.toLowerCase()
            })
        }

        function ab() {
            td = a.jQuery, td && td.fn.on ? (sd = td, l(td.fn, {
                scope: Sd.scope,
                isolateScope: Sd.isolateScope,
                controller: Sd.controller,
                injector: Sd.injector,
                inheritedData: Sd.inheritedData
            }), kb("remove", !0, !0, !1), kb("empty", !1, !1, !1), kb("html", !1, !1, !0)) : sd = ob, Ad.element = sd
        }

        function bb(a, b, c) {
            if (!a) throw zd("areq", "Argument '{0}' is {1}", b || "?", c || "required");
            return a
        }

        function cb(a, b, c) {
            return c && Cd(a) && (a = a[a.length - 1]), bb(x(a), b, "not a function, got " + (a && "object" == typeof a ? a.constructor.name || "Object" : typeof a)), a
        }

        function db(a, b) {
            if ("hasOwnProperty" === a) throw zd("badname", "hasOwnProperty is not a valid {0} name", b)
        }

        function eb(a, b, c) {
            if (!b) return a;
            for (var d, e = b.split("."), f = a, g = e.length, h = 0; g > h; h++) d = e[h], a && (a = (f = a)[d]);
            return !c && x(a) ? O(f, a) : a
        }

        function fb(a) {
            var b = a[0],
                c = a[a.length - 1];
            if (b === c) return sd(b);
            var d = b,
                e = [d];
            do {
                if (d = d.nextSibling, !d) break;
                e.push(d)
            } while (d !== c);
            return sd(e)
        }

        function gb(a) {
            function b(a, b, c) {
                return a[b] || (a[b] = c())
            }
            var c = d("$injector"),
                e = d("ng"),
                f = b(a, "angular", Object);
            return f.$$minErr = f.$$minErr || d, b(f, "module", function() {
                var a = {};
                return function(d, f, g) {
                    var h = function(a, b) {
                        if ("hasOwnProperty" === a) throw e("badname", "hasOwnProperty is not a valid {0} name", b)
                    };
                    return h(d, "module"), f && a.hasOwnProperty(d) && (a[d] = null), b(a, d, function() {
                        function a(a, c, d) {
                            return function() {
                                return b[d || "push"]([a, c, arguments]), i
                            }
                        }
                        if (!f) throw c("nomod", "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.", d);
                        var b = [],
                            e = [],
                            h = a("$injector", "invoke"),
                            i = {
                                _invokeQueue: b,
                                _runBlocks: e,
                                requires: f,
                                name: d,
                                provider: a("$provide", "provider"),
                                factory: a("$provide", "factory"),
                                service: a("$provide", "service"),
                                value: a("$provide", "value"),
                                constant: a("$provide", "constant", "unshift"),
                                animation: a("$animateProvider", "register"),
                                filter: a("$filterProvider", "register"),
                                controller: a("$controllerProvider", "register"),
                                directive: a("$compileProvider", "directive"),
                                config: h,
                                run: function(a) {
                                    return e.push(a), this
                                }
                            };
                        return g && h(g), i
                    })
                }
            })
        }

        function hb(b) {
            l(b, {
                bootstrap: $,
                copy: I,
                extend: l,
                equals: K,
                element: sd,
                forEach: f,
                injector: Hb,
                noop: o,
                bind: O,
                toJson: Q,
                fromJson: R,
                identity: p,
                isUndefined: r,
                isDefined: s,
                isString: u,
                isFunction: x,
                isObject: t,
                isNumber: v,
                isElement: D,
                isArray: Cd,
                version: Fd,
                isDate: w,
                lowercase: md,
                uppercase: od,
                callbacks: {
                    counter: 0
                },
                $$minErr: d,
                $$csp: L
            }), ud = gb(a);
            try {
                ud("ngLocale")
            } catch (c) {
                ud("ngLocale", []).provider("$locale", cc)
            }
            ud("ng", ["ngLocale"], ["$provide", function(a) {
                a.provider({
                    $$sanitizeUri: Cc
                }), a.provider("$compile", Ob).directive({
                    a: Be,
                    input: Me,
                    textarea: Me,
                    form: Fe,
                    script: uf,
                    select: xf,
                    style: zf,
                    option: yf,
                    ngBind: Ye,
                    ngBindHtml: $e,
                    ngBindTemplate: Ze,
                    ngClass: _e,
                    ngClassEven: bf,
                    ngClassOdd: af,
                    ngCloak: cf,
                    ngController: df,
                    ngForm: Ge,
                    ngHide: of,
                    ngIf: ff,
                    ngInclude: gf,
                    ngInit: jf,
                    ngNonBindable: kf,
                    ngPluralize: lf,
                    ngRepeat: mf,
                    ngShow: nf,
                    ngStyle: pf,
                    ngSwitch: qf,
                    ngSwitchWhen: rf,
                    ngSwitchDefault: sf,
                    ngOptions: wf,
                    ngTransclude: tf,
                    ngModel: Se,
                    ngList: Ve,
                    ngChange: Te,
                    required: Ue,
                    ngRequired: Ue,
                    ngValue: Xe
                }).directive({
                    ngInclude: hf
                }).directive(Ce).directive(ef), a.provider({
                    $anchorScroll: Ib,
                    $animate: _d,
                    $browser: Lb,
                    $cacheFactory: Mb,
                    $controller: Rb,
                    $document: Sb,
                    $exceptionHandler: Tb,
                    $filter: Nc,
                    $interpolate: ac,
                    $interval: bc,
                    $http: Yb,
                    $httpBackend: $b,
                    $location: pc,
                    $log: qc,
                    $parse: xc,
                    $rootScope: Bc,
                    $q: yc,
                    $sce: Hc,
                    $sceDelegate: Gc,
                    $sniffer: Ic,
                    $templateCache: Nb,
                    $timeout: Jc,
                    $window: Mc,
                    $$rAF: Ac,
                    $$asyncCallback: Jb
                })
            }])
        }

        function ib() {
            return ++Hd
        }

        function jb(a) {
            return a.replace(Kd, function(a, b, c, d) {
                return d ? c.toUpperCase() : c
            }).replace(Ld, "Moz$1")
        }

        function kb(a, b, c, d) {
            function e(a) {
                var e, g, h, i, j, k, l, m = c && a ? [this.filter(a)] : [this],
                    n = b;
                if (!d || null != a)
                    for (; m.length;)
                        for (e = m.shift(), g = 0, h = e.length; h > g; g++)
                            for (i = sd(e[g]), n ? i.triggerHandler("$destroy") : n = !n, j = 0, k = (l = i.children()).length; k > j; j++) m.push(td(l[j]));
                return f.apply(this, arguments)
            }
            var f = td.fn[a];
            f = f.$original || f, e.$original = f, td.fn[a] = e
        }

        function lb(a) {
            return !Od.test(a)
        }

        function mb(a, b) {
            var c, d, e, f, g, h, i = b.createDocumentFragment(),
                j = [];
            if (lb(a)) j.push(b.createTextNode(a));
            else {
                for (c = i.appendChild(b.createElement("div")), d = (Pd.exec(a) || ["", ""])[1].toLowerCase(), e = Rd[d] || Rd._default, c.innerHTML = "<div>&#160;</div>" + e[1] + a.replace(Qd, "<$1></$2>") + e[2], c.removeChild(c.firstChild), f = e[0]; f--;) c = c.lastChild;
                for (g = 0, h = c.childNodes.length; h > g; ++g) j.push(c.childNodes[g]);
                c = i.firstChild, c.textContent = ""
            }
            return i.textContent = "", i.innerHTML = "", j
        }

        function nb(a, c) {
            c = c || b;
            var d;
            return (d = Nd.exec(a)) ? [c.createElement(d[1])] : mb(a, c)
        }

        function ob(a) {
            if (a instanceof ob) return a;
            if (u(a) && (a = Dd(a)), !(this instanceof ob)) {
                if (u(a) && "<" != a.charAt(0)) throw Md("nosel", "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
                return new ob(a)
            }
            if (u(a)) {
                yb(this, nb(a));
                var c = sd(b.createDocumentFragment());
                c.append(this)
            } else yb(this, a)
        }

        function pb(a) {
            return a.cloneNode(!0)
        }

        function qb(a) {
            sb(a);
            for (var b = 0, c = a.childNodes || []; b < c.length; b++) qb(c[b])
        }

        function rb(a, b, c, d) {
            if (s(d)) throw Md("offargs", "jqLite#off() does not support the `selector` argument");
            var e = tb(a, "events"),
                g = tb(a, "handle");
            g && (r(b) ? f(e, function(b, c) {
                Jd(a, c, b), delete e[c]
            }) : f(b.split(" "), function(b) {
                r(c) ? (Jd(a, b, e[b]), delete e[b]) : H(e[b] || [], c)
            }))
        }

        function sb(a, b) {
            var d = a.ng339,
                e = Gd[d];
            if (e) {
                if (b) return void delete Gd[d].data[b];
                e.handle && (e.events.$destroy && e.handle({}, "$destroy"), rb(a)), delete Gd[d], a.ng339 = c
            }
        }

        function tb(a, b, c) {
            var d = a.ng339,
                e = Gd[d || -1];
            return s(c) ? (e || (a.ng339 = d = ib(), e = Gd[d] = {}), void(e[b] = c)) : e && e[b]
        }

        function ub(a, b, c) {
            var d = tb(a, "data"),
                e = s(c),
                f = !e && s(b),
                g = f && !t(b);
            if (d || g || tb(a, "data", d = {}), e) d[b] = c;
            else {
                if (!f) return d;
                if (g) return d && d[b];
                l(d, b)
            }
        }

        function vb(a, b) {
            return a.getAttribute ? (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + b + " ") > -1 : !1
        }

        function wb(a, b) {
            b && a.setAttribute && f(b.split(" "), function(b) {
                a.setAttribute("class", Dd((" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + Dd(b) + " ", " ")))
            })
        }

        function xb(a, b) {
            if (b && a.setAttribute) {
                var c = (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
                f(b.split(" "), function(a) {
                    a = Dd(a), -1 === c.indexOf(" " + a + " ") && (c += a + " ")
                }), a.setAttribute("class", Dd(c))
            }
        }

        function yb(a, b) {
            if (b) {
                b = b.nodeName || !s(b.length) || z(b) ? [b] : b;
                for (var c = 0; c < b.length; c++) a.push(b[c])
            }
        }

        function zb(a, b) {
            return Ab(a, "$" + (b || "ngController") + "Controller")
        }

        function Ab(a, b, d) {
            a = sd(a), 9 == a[0].nodeType && (a = a.find("html"));
            for (var e = Cd(b) ? b : [b]; a.length;) {
                for (var f = a[0], g = 0, h = e.length; h > g; g++)
                    if ((d = a.data(e[g])) !== c) return d;
                a = sd(f.parentNode || 11 === f.nodeType && f.host)
            }
        }

        function Bb(a) {
            for (var b = 0, c = a.childNodes; b < c.length; b++) qb(c[b]);
            for (; a.firstChild;) a.removeChild(a.firstChild)
        }

        function Cb(a, b) {
            var c = Td[b.toLowerCase()];
            return c && Ud[a.nodeName] && c
        }

        function Db(a, c) {
            var d = function(d, e) {
                if (d.preventDefault || (d.preventDefault = function() {
                        d.returnValue = !1
                    }), d.stopPropagation || (d.stopPropagation = function() {
                        d.cancelBubble = !0
                    }), d.target || (d.target = d.srcElement || b), r(d.defaultPrevented)) {
                    var g = d.preventDefault;
                    d.preventDefault = function() {
                        d.defaultPrevented = !0, g.call(d)
                    }, d.defaultPrevented = !1
                }
                d.isDefaultPrevented = function() {
                    return d.defaultPrevented || d.returnValue === !1
                };
                var h = J(c[e || d.type] || []);
                f(h, function(b) {
                    b.call(a, d)
                }), 8 >= rd ? (d.preventDefault = null, d.stopPropagation = null, d.isDefaultPrevented = null) : (delete d.preventDefault, delete d.stopPropagation, delete d.isDefaultPrevented)
            };
            return d.elem = a, d
        }

        function Eb(a, b) {
            var d, e = typeof a;
            return "function" == e || "object" == e && null !== a ? "function" == typeof(d = a.$$hashKey) ? d = a.$$hashKey() : d === c && (d = a.$$hashKey = (b || j)()) : d = a, e + ":" + d
        }

        function Fb(a, b) {
            if (b) {
                var c = 0;
                this.nextUid = function() {
                    return ++c
                }
            }
            f(a, this.put, this)
        }

        function Gb(a) {
            var b, c, d, e;
            return "function" == typeof a ? (b = a.$inject) || (b = [], a.length && (c = a.toString().replace(Yd, ""), d = c.match(Vd), f(d[1].split(Wd), function(a) {
                a.replace(Xd, function(a, c, d) {
                    b.push(d)
                })
            })), a.$inject = b) : Cd(a) ? (e = a.length - 1, cb(a[e], "fn"), b = a.slice(0, e)) : cb(a, "fn", !0), b
        }

        function Hb(a) {
            function b(a) {
                return function(b, c) {
                    return t(b) ? void f(b, i(a)) : a(b, c)
                }
            }

            function c(a, b) {
                if (db(a, "service"), (x(b) || Cd(b)) && (b = v.instantiate(b)), !b.$get) throw Zd("pget", "Provider '{0}' must define $get factory method.", a);
                return s[a + n] = b
            }

            function d(a, b) {
                return c(a, {
                    $get: b
                })
            }

            function e(a, b) {
                return d(a, ["$injector", function(a) {
                    return a.instantiate(b)
                }])
            }

            function g(a, b) {
                return d(a, q(b))
            }

            function h(a, b) {
                db(a, "constant"), s[a] = b, w[a] = b
            }

            function j(a, b) {
                var c = v.get(a + n),
                    d = c.$get;
                c.$get = function() {
                    var a = y.invoke(d, c);
                    return y.invoke(b, null, {
                        $delegate: a
                    })
                }
            }

            function k(a) {
                var b, c, d, e, g = [];
                return f(a, function(a) {
                    if (!r.get(a)) {
                        r.put(a, !0);
                        try {
                            if (u(a))
                                for (b = ud(a), g = g.concat(k(b.requires)).concat(b._runBlocks), c = b._invokeQueue, d = 0, e = c.length; e > d; d++) {
                                    var f = c[d],
                                        h = v.get(f[0]);
                                    h[f[1]].apply(h, f[2])
                                } else x(a) ? g.push(v.invoke(a)) : Cd(a) ? g.push(v.invoke(a)) : cb(a, "module")
                        } catch (i) {
                            throw Cd(a) && (a = a[a.length - 1]), i.message && i.stack && -1 == i.stack.indexOf(i.message) && (i = i.message + "\n" + i.stack), Zd("modulerr", "Failed to instantiate module {0} due to:\n{1}", a, i.stack || i.message || i)
                        }
                    }
                }), g
            }

            function l(a, b) {
                function c(c) {
                    if (a.hasOwnProperty(c)) {
                        if (a[c] === m) throw Zd("cdep", "Circular dependency found: {0}", c + " <- " + p.join(" <- "));
                        return a[c]
                    }
                    try {
                        return p.unshift(c), a[c] = m, a[c] = b(c)
                    } catch (d) {
                        throw a[c] === m && delete a[c], d
                    } finally {
                        p.shift()
                    }
                }

                function d(a, b, d) {
                    var e, f, g, h = [],
                        i = Gb(a);
                    for (f = 0, e = i.length; e > f; f++) {
                        if (g = i[f], "string" != typeof g) throw Zd("itkn", "Incorrect injection token! Expected service name as string, got {0}", g);
                        h.push(d && d.hasOwnProperty(g) ? d[g] : c(g))
                    }
                    return Cd(a) && (a = a[e]), a.apply(b, h)
                }

                function e(a, b) {
                    var c, e, f = function() {};
                    return f.prototype = (Cd(a) ? a[a.length - 1] : a).prototype, c = new f, e = d(a, c, b), t(e) || x(e) ? e : c
                }
                return {
                    invoke: d,
                    instantiate: e,
                    get: c,
                    annotate: Gb,
                    has: function(b) {
                        return s.hasOwnProperty(b + n) || a.hasOwnProperty(b)
                    }
                }
            }
            var m = {},
                n = "Provider",
                p = [],
                r = new Fb([], !0),
                s = {
                    $provide: {
                        provider: b(c),
                        factory: b(d),
                        service: b(e),
                        value: b(g),
                        constant: b(h),
                        decorator: j
                    }
                },
                v = s.$injector = l(s, function() {
                    throw Zd("unpr", "Unknown provider: {0}", p.join(" <- "))
                }),
                w = {},
                y = w.$injector = l(w, function(a) {
                    var b = v.get(a + n);
                    return y.invoke(b.$get, b)
                });
            return f(k(a), function(a) {
                y.invoke(a || o)
            }), y
        }

        function Ib() {
            var a = !0;
            this.disableAutoScrolling = function() {
                a = !1
            }, this.$get = ["$window", "$location", "$rootScope", function(b, c, d) {
                function e(a) {
                    var b = null;
                    return f(a, function(a) {
                        b || "a" !== md(a.nodeName) || (b = a)
                    }), b
                }

                function g() {
                    var a, d = c.hash();
                    d ? (a = h.getElementById(d)) ? a.scrollIntoView() : (a = e(h.getElementsByName(d))) ? a.scrollIntoView() : "top" === d && b.scrollTo(0, 0) : b.scrollTo(0, 0)
                }
                var h = b.document;
                return a && d.$watch(function() {
                    return c.hash()
                }, function() {
                    d.$evalAsync(g)
                }), g
            }]
        }

        function Jb() {
            this.$get = ["$$rAF", "$timeout", function(a, b) {
                return a.supported ? function(b) {
                    return a(b)
                } : function(a) {
                    return b(a, 0, !1)
                }
            }]
        }

        function Kb(a, b, d, e) {
            function g(a) {
                try {
                    a.apply(null, N(arguments, 1))
                } finally {
                    if (s--, 0 === s)
                        for (; t.length;) try {
                            t.pop()()
                        } catch (b) {
                            d.error(b)
                        }
                }
            }

            function h(a, b) {
                ! function c() {
                    f(w, function(a) {
                        a()
                    }), v = b(c, a)
                }()
            }

            function i() {
                z = null, x != j.url() && (x = j.url(), f(A, function(a) {
                    a(j.url())
                }))
            }
            var j = this,
                k = b[0],
                l = a.location,
                m = a.history,
                n = a.setTimeout,
                p = a.clearTimeout,
                q = {};
            j.isMock = !1;
            var s = 0,
                t = [];
            j.$$completeOutstandingRequest = g, j.$$incOutstandingRequestCount = function() {
                s++
            }, j.notifyWhenNoOutstandingRequests = function(a) {
                f(w, function(a) {
                    a()
                }), 0 === s ? a() : t.push(a)
            };
            var v, w = [];
            j.addPollFn = function(a) {
                return r(v) && h(100, n), w.push(a), a
            };
            var x = l.href,
                y = b.find("base"),
                z = null;
            j.url = function(b, c) {
                if (l !== a.location && (l = a.location), m !== a.history && (m = a.history), b) {
                    if (x == b) return;
                    return x = b, e.history ? c ? m.replaceState(null, "", b) : (m.pushState(null, "", b), y.attr("href", y.attr("href"))) : (z = b, c ? l.replace(b) : l.href = b), j
                }
                return z || l.href.replace(/%27/g, "'")
            };
            var A = [],
                B = !1;
            j.onUrlChange = function(b) {
                return B || (e.history && sd(a).on("popstate", i), e.hashchange ? sd(a).on("hashchange", i) : j.addPollFn(i), B = !0), A.push(b), b
            }, j.baseHref = function() {
                var a = y.attr("href");
                return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
            };
            var C = {},
                D = "",
                E = j.baseHref();
            j.cookies = function(a, b) {
                var e, f, g, h, i;
                if (!a) {
                    if (k.cookie !== D)
                        for (D = k.cookie, f = D.split("; "), C = {}, h = 0; h < f.length; h++) g = f[h], i = g.indexOf("="), i > 0 && (a = unescape(g.substring(0, i)), C[a] === c && (C[a] = unescape(g.substring(i + 1))));
                    return C
                }
                b === c ? k.cookie = escape(a) + "=;path=" + E + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : u(b) && (e = (k.cookie = escape(a) + "=" + escape(b) + ";path=" + E).length + 1, e > 4096 && d.warn("Cookie '" + a + "' possibly not set or overflowed because it was too large (" + e + " > 4096 bytes)!"))
            }, j.defer = function(a, b) {
                var c;
                return s++, c = n(function() {
                    delete q[c], g(a)
                }, b || 0), q[c] = !0, c
            }, j.defer.cancel = function(a) {
                return q[a] ? (delete q[a], p(a), g(o), !0) : !1
            }
        }

        function Lb() {
            this.$get = ["$window", "$log", "$sniffer", "$document", function(a, b, c, d) {
                return new Kb(a, d, b, c)
            }]
        }

        function Mb() {
            this.$get = function() {
                function a(a, c) {
                    function e(a) {
                        a != m && (n ? n == a && (n = a.n) : n = a, f(a.n, a.p), f(a, m), m = a, m.n = null)
                    }

                    function f(a, b) {
                        a != b && (a && (a.p = b), b && (b.n = a))
                    }
                    if (a in b) throw d("$cacheFactory")("iid", "CacheId '{0}' is already taken!", a);
                    var g = 0,
                        h = l({}, c, {
                            id: a
                        }),
                        i = {},
                        j = c && c.capacity || Number.MAX_VALUE,
                        k = {},
                        m = null,
                        n = null;
                    return b[a] = {
                        put: function(a, b) {
                            if (j < Number.MAX_VALUE) {
                                var c = k[a] || (k[a] = {
                                    key: a
                                });
                                e(c)
                            }
                            if (!r(b)) return a in i || g++, i[a] = b, g > j && this.remove(n.key), b
                        },
                        get: function(a) {
                            if (j < Number.MAX_VALUE) {
                                var b = k[a];
                                if (!b) return;
                                e(b)
                            }
                            return i[a]
                        },
                        remove: function(a) {
                            if (j < Number.MAX_VALUE) {
                                var b = k[a];
                                if (!b) return;
                                b == m && (m = b.p), b == n && (n = b.n), f(b.n, b.p), delete k[a]
                            }
                            delete i[a], g--
                        },
                        removeAll: function() {
                            i = {}, g = 0, k = {}, m = n = null
                        },
                        destroy: function() {
                            i = null, h = null, k = null, delete b[a]
                        },
                        info: function() {
                            return l({}, h, {
                                size: g
                            })
                        }
                    }
                }
                var b = {};
                return a.info = function() {
                    var a = {};
                    return f(b, function(b, c) {
                        a[c] = b.info()
                    }), a
                }, a.get = function(a) {
                    return b[a]
                }, a
            }
        }

        function Nb() {
            this.$get = ["$cacheFactory", function(a) {
                return a("templates")
            }]
        }

        function Ob(a, d) {
            var e = {},
                g = "Directive",
                h = /^\s*directive\:\s*([\d\w_\-]+)\s+(.*)$/,
                j = /(([\d\w_\-]+)(?:\:([^;]+))?;?)/,
                k = /^(on[a-z]+|formaction)$/;
            this.directive = function m(b, c) {
                return db(b, "directive"), u(b) ? (bb(c, "directiveFactory"), e.hasOwnProperty(b) || (e[b] = [], a.factory(b + g, ["$injector", "$exceptionHandler", function(a, c) {
                    var d = [];
                    return f(e[b], function(e, f) {
                        try {
                            var g = a.invoke(e);
                            x(g) ? g = {
                                compile: q(g)
                            } : !g.compile && g.link && (g.compile = q(g.link)), g.priority = g.priority || 0, g.index = f, g.name = g.name || b, g.require = g.require || g.controller && g.name, g.restrict = g.restrict || "A", d.push(g)
                        } catch (h) {
                            c(h)
                        }
                    }), d
                }])), e[b].push(c)) : f(b, i(m)), this
            }, this.aHrefSanitizationWhitelist = function(a) {
                return s(a) ? (d.aHrefSanitizationWhitelist(a), this) : d.aHrefSanitizationWhitelist()
            }, this.imgSrcSanitizationWhitelist = function(a) {
                return s(a) ? (d.imgSrcSanitizationWhitelist(a), this) : d.imgSrcSanitizationWhitelist()
            }, this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$http", "$templateCache", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function(a, d, i, m, o, q, r, s, v, w, y, z) {
                function A(a, b, c, d, e) {
                    a instanceof sd || (a = sd(a)), f(a, function(b, c) {
                        3 == b.nodeType && b.nodeValue.match(/\S+/) && (a[c] = b = sd(b).wrap("<span></span>").parent()[0])
                    });
                    var g = C(a, b, a, c, d, e);
                    return B(a, "ng-scope"),
                        function(b, c, d, e) {
                            bb(b, "scope");
                            var h = c ? Sd.clone.call(a) : a;
                            f(d, function(a, b) {
                                h.data("$" + b + "Controller", a)
                            });
                            for (var i = 0, j = h.length; j > i; i++) {
                                var k = h[i],
                                    l = k.nodeType;
                                (1 === l || 9 === l) && h.eq(i).data("$scope", b)
                            }
                            return c && c(h, b), g && g(b, h, h, e), h
                        }
                }

                function B(a, b) {
                    try {
                        a.addClass(b)
                    } catch (c) {}
                }

                function C(a, b, d, e, f, g) {
                    function h(a, d, e, f) {
                        var g, h, i, j, k, l, m, n, p, q = d.length,
                            r = new Array(q);
                        for (l = 0; q > l; l++) r[l] = d[l];
                        for (l = 0, n = 0, m = o.length; m > l; n++) i = r[n], g = o[l++], h = o[l++], j = sd(i), g ? (g.scope ? (k = a.$new(), j.data("$scope", k)) : k = a, p = g.transcludeOnThisElement ? D(a, g.transclude, f) : !g.templateOnThisElement && f ? f : !f && b ? D(a, b) : null, g(h, k, i, e, p)) : h && h(a, i.childNodes, c, f)
                    }
                    for (var i, j, k, l, m, n, o = [], p = 0; p < a.length; p++) i = new X, j = E(a[p], [], i, 0 === p ? e : c, f), k = j.length ? H(j, a[p], i, b, d, null, [], [], g) : null, k && k.scope && B(sd(a[p]), "ng-scope"), m = k && k.terminal || !(l = a[p].childNodes) || !l.length ? null : C(l, k ? (k.transcludeOnThisElement || !k.templateOnThisElement) && k.transclude : b), o.push(k, m), n = n || k || m, g = null;
                    return n ? h : null
                }

                function D(a, b, c) {
                    var d = function(d, e, f) {
                        var g = !1;
                        d || (d = a.$new(), d.$$transcluded = !0, g = !0);
                        var h = b(d, e, f, c);
                        return g && h.on("$destroy", function() {
                            d.$destroy()
                        }), h
                    };
                    return d
                }

                function E(a, b, c, d, e) {
                    var f, g, i = a.nodeType,
                        k = c.$attr;
                    switch (i) {
                        case 1:
                            L(b, Pb(vd(a).toLowerCase()), "E", d, e);
                            for (var l, m, n, o, p, q, r = a.attributes, s = 0, t = r && r.length; t > s; s++) {
                                var v = !1,
                                    w = !1;
                                if (l = r[s], !rd || rd >= 8 || l.specified) {
                                    m = l.name, p = Dd(l.value), o = Pb(m), (q = ab.test(o)) && (m = _(o.substr(6), "-"));
                                    var x = o.replace(/(Start|End)$/, "");
                                    o === x + "Start" && (v = m, w = m.substr(0, m.length - 5) + "end", m = m.substr(0, m.length - 6)), n = Pb(m.toLowerCase()), k[n] = m, (q || !c.hasOwnProperty(n)) && (c[n] = p, Cb(a, n) && (c[n] = !0)), U(a, b, p, n), L(b, n, "A", d, e, v, w)
                                }
                            }
                            if (g = a.className, u(g) && "" !== g)
                                for (; f = j.exec(g);) n = Pb(f[2]), L(b, n, "C", d, e) && (c[n] = Dd(f[3])), g = g.substr(f.index + f[0].length);
                            break;
                        case 3:
                            R(b, a.nodeValue);
                            break;
                        case 8:
                            try {
                                f = h.exec(a.nodeValue), f && (n = Pb(f[1]), L(b, n, "M", d, e) && (c[n] = Dd(f[2])))
                            } catch (y) {}
                    }
                    return b.sort(P), b
                }

                function F(a, b, c) {
                    var d = [],
                        e = 0;
                    if (b && a.hasAttribute && a.hasAttribute(b)) {
                        do {
                            if (!a) throw ae("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", b, c);
                            1 == a.nodeType && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--), d.push(a), a = a.nextSibling
                        } while (e > 0)
                    } else d.push(a);
                    return sd(d)
                }

                function G(a, b, c) {
                    return function(d, e, f, g, h) {
                        return e = F(e[0], b, c), a(d, e, f, g, h)
                    }
                }

                function H(a, e, g, h, j, k, l, m, n) {
                    function o(a, b, c, d) {
                        a && (c && (a = G(a, c, d)), a.require = w.require, a.directiveName = y, (P === w || w.$$isolateScope) && (a = W(a, {
                            isolateScope: !0
                        })), l.push(a)), b && (c && (b = G(b, c, d)), b.require = w.require, b.directiveName = y, (P === w || w.$$isolateScope) && (b = W(b, {
                            isolateScope: !0
                        })), m.push(b))
                    }

                    function p(a, b, c, d) {
                        var e, g = "data",
                            h = !1;
                        if (u(b)) {
                            for (;
                                "^" == (e = b.charAt(0)) || "?" == e;) b = b.substr(1), "^" == e && (g = "inheritedData"), h = h || "?" == e;
                            if (e = null, d && "data" === g && (e = d[b]), e = e || c[g]("$" + b + "Controller"), !e && !h) throw ae("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", b, a);
                            return e
                        }
                        return Cd(b) && (e = [], f(b, function(b) {
                            e.push(p(a, b, c, d))
                        })), e
                    }

                    function s(a, b, h, j, k) {
                        function n(a, b) {
                            var d;
                            return arguments.length < 2 && (b = a, a = c), Z && (d = z), k(a, b, d)
                        }
                        var o, s, t, u, v, w, x, y, z = {};
                        if (o = e === h ? g : J(g, new X(sd(h), g.$attr)), s = o.$$element, P) {
                            var A = /^\s*([@=&])(\??)\s*(\w*)\s*$/,
                                C = sd(h);
                            x = b.$new(!0), !R || R !== P && R !== P.$$originalDirective ? C.data("$isolateScopeNoTemplate", x) : C.data("$isolateScope", x), B(C, "ng-isolate-scope"), f(P.scope, function(a, c) {
                                var e, f, g, h, i = a.match(A) || [],
                                    j = i[3] || c,
                                    k = "?" == i[2],
                                    l = i[1];
                                switch (x.$$isolateBindings[c] = l + j, l) {
                                    case "@":
                                        o.$observe(j, function(a) {
                                            x[c] = a
                                        }), o.$$observers[j].$$scope = b, o[j] && (x[c] = d(o[j])(b));
                                        break;
                                    case "=":
                                        if (k && !o[j]) return;
                                        f = q(o[j]), h = f.literal ? K : function(a, b) {
                                            return a === b
                                        }, g = f.assign || function() {
                                            throw e = x[c] = f(b), ae("nonassign", "Expression '{0}' used with directive '{1}' is non-assignable!", o[j], P.name)
                                        }, e = x[c] = f(b), x.$watch(function() {
                                            var a = f(b);
                                            return h(a, x[c]) || (h(a, e) ? g(b, a = x[c]) : x[c] = a), e = a
                                        }, null, f.literal);
                                        break;
                                    case "&":
                                        f = q(o[j]), x[c] = function(a) {
                                            return f(b, a)
                                        };
                                        break;
                                    default:
                                        throw ae("iscp", "Invalid isolate scope definition for directive '{0}'. Definition: {... {1}: '{2}' ...}", P.name, c, a)
                                }
                            })
                        }
                        for (y = k && n, L && f(L, function(a) {
                                var c, d = {
                                    $scope: a === P || a.$$isolateScope ? x : b,
                                    $element: s,
                                    $attrs: o,
                                    $transclude: y
                                };
                                w = a.controller, "@" == w && (w = o[a.name]), c = r(w, d), z[a.name] = c, Z || s.data("$" + a.name + "Controller", c), a.controllerAs && (d.$scope[a.controllerAs] = c)
                            }), t = 0, u = l.length; u > t; t++) try {
                            v = l[t], v(v.isolateScope ? x : b, s, o, v.require && p(v.directiveName, v.require, s, z), y)
                        } catch (D) {
                            i(D, T(s))
                        }
                        var E = b;
                        for (P && (P.template || null === P.templateUrl) && (E = x), a && a(E, h.childNodes, c, k), t = m.length - 1; t >= 0; t--) try {
                            v = m[t], v(v.isolateScope ? x : b, s, o, v.require && p(v.directiveName, v.require, s, z), y)
                        } catch (D) {
                            i(D, T(s))
                        }
                    }
                    n = n || {};
                    for (var v, w, y, z, C, D, H = -Number.MAX_VALUE, L = n.controllerDirectives, P = n.newIsolateScopeDirective, R = n.templateDirective, S = n.nonTlbTranscludeDirective, U = !1, Y = !1, Z = n.hasElementTranscludeDirective, _ = g.$$element = sd(e), ab = k, bb = h, cb = 0, db = a.length; db > cb; cb++) {
                        w = a[cb];
                        var eb = w.$$start,
                            fb = w.$$end;
                        if (eb && (_ = F(e, eb, fb)), z = c, H > w.priority) break;
                        if ((D = w.scope) && (v = v || w, w.templateUrl || (Q("new/isolated scope", P, w, _), t(D) && (P = w))), y = w.name, !w.templateUrl && w.controller && (D = w.controller, L = L || {}, Q("'" + y + "' controller", L[y], w, _), L[y] = w), (D = w.transclude) && (U = !0, w.$$tlb || (Q("transclusion", S, w, _), S = w), "element" == D ? (Z = !0, H = w.priority, z = F(e, eb, fb), _ = g.$$element = sd(b.createComment(" " + y + ": " + g[y] + " ")), e = _[0], V(j, sd(N(z)), e), bb = A(z, h, H, ab && ab.name, {
                                nonTlbTranscludeDirective: S
                            })) : (z = sd(pb(e)).contents(), _.empty(), bb = A(z, h))), w.template)
                            if (Y = !0, Q("template", R, w, _), R = w, D = x(w.template) ? w.template(_, g) : w.template, D = $(D), w.replace) {
                                if (ab = w, z = lb(D) ? [] : sd(Dd(D)), e = z[0], 1 != z.length || 1 !== e.nodeType) throw ae("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", y, "");
                                V(j, _, e);
                                var gb = {
                                        $attr: {}
                                    },
                                    hb = E(e, [], gb),
                                    ib = a.splice(cb + 1, a.length - (cb + 1));
                                P && I(hb), a = a.concat(hb).concat(ib), M(g, gb), db = a.length
                            } else _.html(D);
                        if (w.templateUrl) Y = !0, Q("template", R, w, _), R = w, w.replace && (ab = w), s = O(a.splice(cb, a.length - cb), _, g, j, U && bb, l, m, {
                            controllerDirectives: L,
                            newIsolateScopeDirective: P,
                            templateDirective: R,
                            nonTlbTranscludeDirective: S
                        }), db = a.length;
                        else if (w.compile) try {
                            C = w.compile(_, g, bb), x(C) ? o(null, C, eb, fb) : C && o(C.pre, C.post, eb, fb)
                        } catch (jb) {
                            i(jb, T(_))
                        }
                        w.terminal && (s.terminal = !0, H = Math.max(H, w.priority))
                    }
                    return s.scope = v && v.scope === !0, s.transcludeOnThisElement = U, s.templateOnThisElement = Y, s.transclude = bb, n.hasElementTranscludeDirective = Z, s
                }

                function I(a) {
                    for (var b = 0, c = a.length; c > b; b++) a[b] = n(a[b], {
                        $$isolateScope: !0
                    })
                }

                function L(b, d, f, h, j, k, l) {
                    if (d === j) return null;
                    var m = null;
                    if (e.hasOwnProperty(d))
                        for (var o, p = a.get(d + g), q = 0, r = p.length; r > q; q++) try {
                            o = p[q], (h === c || h > o.priority) && -1 != o.restrict.indexOf(f) && (k && (o = n(o, {
                                $$start: k,
                                $$end: l
                            })), b.push(o), m = o)
                        } catch (s) {
                            i(s)
                        }
                    return m
                }

                function M(a, b) {
                    var c = b.$attr,
                        d = a.$attr,
                        e = a.$$element;
                    f(a, function(d, e) {
                        "$" != e.charAt(0) && (b[e] && b[e] !== d && (d += ("style" === e ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]))
                    }), f(b, function(b, f) {
                        "class" == f ? (B(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : "style" == f ? (e.attr("style", e.attr("style") + ";" + b), a.style = (a.style ? a.style + ";" : "") + b) : "$" == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, d[f] = c[f])
                    })
                }

                function O(a, b, c, d, e, g, h, i) {
                    var j, k, n = [],
                        p = b[0],
                        q = a.shift(),
                        r = l({}, q, {
                            templateUrl: null,
                            transclude: null,
                            replace: null,
                            $$originalDirective: q
                        }),
                        s = x(q.templateUrl) ? q.templateUrl(b, c) : q.templateUrl;
                    return b.empty(), m.get(w.getTrustedResourceUrl(s), {
                            cache: o
                        }).success(function(l) {
                            var m, o, u, v;
                            if (l = $(l), q.replace) {
                                if (u = lb(l) ? [] : sd(Dd(l)), m = u[0], 1 != u.length || 1 !== m.nodeType) throw ae("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", q.name, s);
                                o = {
                                    $attr: {}
                                }, V(d, b, m);
                                var w = E(m, [], o);
                                t(q.scope) && I(w), a = w.concat(a), M(c, o)
                            } else m = p, b.html(l);
                            for (a.unshift(r), j = H(a, m, c, e, b, q, g, h, i), f(d, function(a, c) {
                                    a == m && (d[c] = b[0])
                                }), k = C(b[0].childNodes, e); n.length;) {
                                var x = n.shift(),
                                    y = n.shift(),
                                    z = n.shift(),
                                    A = n.shift(),
                                    F = b[0];
                                if (y !== p) {
                                    var G = y.className;
                                    i.hasElementTranscludeDirective && q.replace || (F = pb(m)), V(z, sd(y), F), B(sd(F), G)
                                }
                                v = j.transcludeOnThisElement ? D(x, j.transclude, A) : A, j(k, x, F, d, v)
                            }
                            n = null
                        }).error(function(a, b, c, d) {
                            throw ae("tpload", "Failed to load template: {0}", d.url)
                        }),
                        function(a, b, c, d, e) {
                            var f = e;
                            n ? (n.push(b), n.push(c), n.push(d), n.push(f)) : (j.transcludeOnThisElement && (f = D(b, j.transclude, e)), j(k, b, c, d, f))
                        }
                }

                function P(a, b) {
                    var c = b.priority - a.priority;
                    return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index
                }

                function Q(a, b, c, d) {
                    if (b) throw ae("multidir", "Multiple directives [{0}, {1}] asking for {2} on: {3}", b.name, c.name, a, T(d))
                }

                function R(a, b) {
                    var c = d(b, !0);
                    c && a.push({
                        priority: 0,
                        compile: function(a) {
                            var b = a.parent(),
                                d = b.length;
                            return d && B(a.parent(), "ng-binding"),
                                function(a, b) {
                                    var e = b.parent(),
                                        f = e.data("$binding") || [];
                                    f.push(c), e.data("$binding", f), d || B(e, "ng-binding"), a.$watch(c, function(a) {
                                        b[0].nodeValue = a
                                    })
                                }
                        }
                    })
                }

                function S(a, b) {
                    if ("srcdoc" == b) return w.HTML;
                    var c = vd(a);
                    return "xlinkHref" == b || "FORM" == c && "action" == b || "IMG" != c && ("src" == b || "ngSrc" == b) ? w.RESOURCE_URL : void 0
                }

                function U(a, b, c, e) {
                    var f = d(c, !0);
                    if (f) {
                        if ("multiple" === e && "SELECT" === vd(a)) throw ae("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", T(a));
                        b.push({
                            priority: 100,
                            compile: function() {
                                return {
                                    pre: function(b, c, g) {
                                        var h = g.$$observers || (g.$$observers = {});
                                        if (k.test(e)) throw ae("nodomevents", "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");
                                        f = d(g[e], !0, S(a, e)), f && (g[e] = f(b), (h[e] || (h[e] = [])).$$inter = !0, (g.$$observers && g.$$observers[e].$$scope || b).$watch(f, function(a, b) {
                                            "class" === e && a != b ? g.$updateClass(a, b) : g.$set(e, a)
                                        }))
                                    }
                                }
                            }
                        })
                    }
                }

                function V(a, c, d) {
                    var e, f, g = c[0],
                        h = c.length,
                        i = g.parentNode;
                    if (a)
                        for (e = 0, f = a.length; f > e; e++)
                            if (a[e] == g) {
                                a[e++] = d;
                                for (var j = e, k = j + h - 1, l = a.length; l > j; j++, k++) l > k ? a[j] = a[k] : delete a[j];
                                a.length -= h - 1;
                                break
                            } i && i.replaceChild(d, g);
                    var m = b.createDocumentFragment();
                    m.appendChild(g), d[sd.expando] = g[sd.expando];
                    for (var n = 1, o = c.length; o > n; n++) {
                        var p = c[n];
                        sd(p).remove(), m.appendChild(p), delete c[n]
                    }
                    c[0] = d, c.length = 1
                }

                function W(a, b) {
                    return l(function() {
                        return a.apply(null, arguments)
                    }, a, b)
                }
                var X = function(a, b) {
                    this.$$element = a, this.$attr = b || {}
                };
                X.prototype = {
                    $normalize: Pb,
                    $addClass: function(a) {
                        a && a.length > 0 && y.addClass(this.$$element, a)
                    },
                    $removeClass: function(a) {
                        a && a.length > 0 && y.removeClass(this.$$element, a)
                    },
                    $updateClass: function(a, b) {
                        var c = Qb(a, b),
                            d = Qb(b, a);
                        0 === c.length ? y.removeClass(this.$$element, d) : 0 === d.length ? y.addClass(this.$$element, c) : y.setClass(this.$$element, c, d)
                    },
                    $set: function(a, b, d, e) {
                        var g, h = Cb(this.$$element[0], a);
                        h && (this.$$element.prop(a, b), e = h), this[a] = b, e ? this.$attr[a] = e : (e = this.$attr[a], e || (this.$attr[a] = e = _(a, "-"))), g = vd(this.$$element), ("A" === g && "href" === a || "IMG" === g && "src" === a) && (this[a] = b = z(b, "src" === a)), d !== !1 && (null === b || b === c ? this.$$element.removeAttr(e) : this.$$element.attr(e, b));
                        var j = this.$$observers;
                        j && f(j[a], function(a) {
                            try {
                                a(b)
                            } catch (c) {
                                i(c)
                            }
                        })
                    },
                    $observe: function(a, b) {
                        var c = this,
                            d = c.$$observers || (c.$$observers = {}),
                            e = d[a] || (d[a] = []);
                        return e.push(b), s.$evalAsync(function() {
                            e.$$inter || b(c[a])
                        }), b
                    }
                };
                var Y = d.startSymbol(),
                    Z = d.endSymbol(),
                    $ = "{{" == Y || "}}" == Z ? p : function(a) {
                        return a.replace(/\{\{/g, Y).replace(/}}/g, Z)
                    },
                    ab = /^ngAttr[A-Z]/;
                return A
            }]
        }

        function Pb(a) {
            return jb(a.replace(be, ""))
        }

        function Qb(a, b) {
            var c = "",
                d = a.split(/\s+/),
                e = b.split(/\s+/);
            a: for (var f = 0; f < d.length; f++) {
                for (var g = d[f], h = 0; h < e.length; h++)
                    if (g == e[h]) continue a;
                c += (c.length > 0 ? " " : "") + g
            }
            return c
        }

        function Rb() {
            var a = {},
                b = /^(\S+)(\s+as\s+(\w+))?$/;
            this.register = function(b, c) {
                db(b, "controller"), t(b) ? l(a, b) : a[b] = c
            }, this.$get = ["$injector", "$window", function(c, e) {
                return function(f, g) {
                    var h, i, j, k;
                    if (u(f) && (i = f.match(b), j = i[1], k = i[3], f = a.hasOwnProperty(j) ? a[j] : eb(g.$scope, j, !0) || eb(e, j, !0), cb(f, j, !0)), h = c.instantiate(f, g), k) {
                        if (!g || "object" != typeof g.$scope) throw d("$controller")("noscp", "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", j || f.name, k);
                        g.$scope[k] = h
                    }
                    return h
                }
            }]
        }

        function Sb() {
            this.$get = ["$window", function(a) {
                return sd(a.document)
            }]
        }

        function Tb() {
            this.$get = ["$log", function(a) {
                return function() {
                    a.error.apply(a, arguments)
                }
            }]
        }

        function Ub(a) {
            var b, c, d, e = {};
            return a ? (f(a.split("\n"), function(a) {
                d = a.indexOf(":"), b = md(Dd(a.substr(0, d))), c = Dd(a.substr(d + 1)), b && (e[b] ? e[b] += ", " + c : e[b] = c)
            }), e) : e
        }

        function Vb(a) {
            var b = t(a) ? a : c;
            return function(c) {
                return b || (b = Ub(a)), c ? b[md(c)] || null : b
            }
        }

        function Wb(a, b, c) {
            return x(c) ? c(a, b) : (f(c, function(c) {
                a = c(a, b)
            }), a)
        }

        function Xb(a) {
            return a >= 200 && 300 > a
        }

        function Yb() {
            var a = /^\s*(\[|\{[^\{])/,
                b = /[\}\]]\s*$/,
                d = /^\)\]\}',?\n/,
                e = {
                    "Content-Type": "application/json;charset=utf-8"
                },
                g = this.defaults = {
                    transformResponse: [function(c) {
                        return u(c) && (c = c.replace(d, ""), a.test(c) && b.test(c) && (c = R(c))), c
                    }],
                    transformRequest: [function(a) {
                        return !t(a) || B(a) || C(a) ? a : Q(a)
                    }],
                    headers: {
                        common: {
                            Accept: "application/json, text/plain, */*"
                        },
                        post: J(e),
                        put: J(e),
                        patch: J(e)
                    },
                    xsrfCookieName: "XSRF-TOKEN",
                    xsrfHeaderName: "X-XSRF-TOKEN"
                },
                i = this.interceptors = [],
                j = this.responseInterceptors = [];
            this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function(a, b, d, e, k, m) {
                function n(a) {
                    function b(a) {
                        var b = l({}, a, {
                            data: Wb(a.data, a.headers, e.transformResponse)
                        });
                        return Xb(a.status) ? b : k.reject(b)
                    }

                    function d(a) {
                        function b(a) {
                            var b;
                            f(a, function(c, d) {
                                x(c) && (b = c(), null != b ? a[d] = b : delete a[d])
                            })
                        }
                        var c, d, e, h = g.headers,
                            i = l({}, a.headers);
                        h = l({}, h.common, h[md(a.method)]);
                        a: for (c in h) {
                            d = md(c);
                            for (e in i)
                                if (md(e) === d) continue a;
                            i[c] = h[c]
                        }
                        return b(i), i
                    }
                    var e = {
                            method: "get",
                            transformRequest: g.transformRequest,
                            transformResponse: g.transformResponse
                        },
                        h = d(a);
                    l(e, a), e.headers = h, e.method = od(e.method);
                    var i = function(a) {
                            h = a.headers;
                            var c = Wb(a.data, Vb(h), a.transformRequest);
                            return r(c) && f(h, function(a, b) {
                                "content-type" === md(b) && delete h[b]
                            }), r(a.withCredentials) && !r(g.withCredentials) && (a.withCredentials = g.withCredentials), q(a, c, h).then(b, b)
                        },
                        j = [i, c],
                        m = k.when(e);
                    for (f(y, function(a) {
                            (a.request || a.requestError) && j.unshift(a.request, a.requestError), (a.response || a.responseError) && j.push(a.response, a.responseError)
                        }); j.length;) {
                        var n = j.shift(),
                            o = j.shift();
                        m = m.then(n, o)
                    }
                    return m.success = function(a) {
                        return m.then(function(b) {
                            a(b.data, b.status, b.headers, e)
                        }), m
                    }, m.error = function(a) {
                        return m.then(null, function(b) {
                            a(b.data, b.status, b.headers, e)
                        }), m
                    }, m
                }

                function o() {
                    f(arguments, function(a) {
                        n[a] = function(b, c) {
                            return n(l(c || {}, {
                                method: a,
                                url: b
                            }))
                        }
                    })
                }

                function p() {
                    f(arguments, function(a) {
                        n[a] = function(b, c, d) {
                            return n(l(d || {}, {
                                method: a,
                                url: b,
                                data: c
                            }))
                        }
                    })
                }

                function q(d, f, h) {
                    function i(a, b, c, d) {
                        m && (Xb(a) ? m.put(u, [a, b, Ub(c), d]) : m.remove(u)), j(b, a, c, d), e.$$phase || e.$apply()
                    }

                    function j(a, b, c, e) {
                        b = Math.max(b, 0), (Xb(b) ? p.resolve : p.reject)({
                            data: a,
                            status: b,
                            headers: Vb(c),
                            config: d,
                            statusText: e
                        })
                    }

                    function l() {
                        var a = G(n.pendingRequests, d); - 1 !== a && n.pendingRequests.splice(a, 1)
                    }
                    var m, o, p = k.defer(),
                        q = p.promise,
                        u = v(d.url, d.params);
                    if (n.pendingRequests.push(d), q.then(l, l), (d.cache || g.cache) && d.cache !== !1 && "GET" == d.method && (m = t(d.cache) ? d.cache : t(g.cache) ? g.cache : w), m)
                        if (o = m.get(u), s(o)) {
                            if (o.then) return o.then(l, l), o;
                            Cd(o) ? j(o[1], o[0], J(o[2]), o[3]) : j(o, 200, {}, "OK")
                        } else m.put(u, q);
                    if (r(o)) {
                        var x = Lc(d.url) ? b.cookies()[d.xsrfCookieName || g.xsrfCookieName] : c;
                        x && (h[d.xsrfHeaderName || g.xsrfHeaderName] = x), a(d.method, u, f, i, h, d.timeout, d.withCredentials, d.responseType)
                    }
                    return q
                }

                function v(a, b) {
                    if (!b) return a;
                    var c = [];
                    return h(b, function(a, b) {
                        null === a || r(a) || (Cd(a) || (a = [a]), f(a, function(a) {
                            t(a) && (a = Q(a)), c.push(Y(b) + "=" + Y(a))
                        }))
                    }), c.length > 0 && (a += (-1 == a.indexOf("?") ? "?" : "&") + c.join("&")), a
                }
                var w = d("$http"),
                    y = [];
                return f(i, function(a) {
                    y.unshift(u(a) ? m.get(a) : m.invoke(a))
                }), f(j, function(a, b) {
                    var c = u(a) ? m.get(a) : m.invoke(a);
                    y.splice(b, 0, {
                        response: function(a) {
                            return c(k.when(a))
                        },
                        responseError: function(a) {
                            return c(k.reject(a))
                        }
                    })
                }), n.pendingRequests = [], o("get", "delete", "head", "jsonp"), p("post", "put"), n.defaults = g, n
            }]
        }

        function Zb(b) {
            if (8 >= rd && (!b.match(/^(get|post|head|put|delete|options)$/i) || !a.XMLHttpRequest)) return new a.ActiveXObject("Microsoft.XMLHTTP");
            if (a.XMLHttpRequest) return new a.XMLHttpRequest;
            throw d("$httpBackend")("noxhr", "This browser does not support XMLHttpRequest.")
        }

        function $b() {
            this.$get = ["$browser", "$window", "$document", function(a, b, c) {
                return _b(a, Zb, a.defer, b.angular.callbacks, c[0])
            }]
        }

        function _b(a, b, c, d, e) {
            function g(a, b, c) {
                var f = e.createElement("script"),
                    g = null;
                return f.type = "text/javascript", f.src = a, f.async = !0, g = function(a) {
                    Jd(f, "load", g), Jd(f, "error", g), e.body.removeChild(f), f = null;
                    var h = -1,
                        i = "unknown";
                    a && ("load" !== a.type || d[b].called || (a = {
                        type: "error"
                    }), i = a.type, h = "error" === a.type ? 404 : 200), c && c(h, i)
                }, Id(f, "load", g), Id(f, "error", g), 8 >= rd && (f.onreadystatechange = function() {
                    u(f.readyState) && /loaded|complete/.test(f.readyState) && (f.onreadystatechange = null, g({
                        type: "load"
                    }))
                }), e.body.appendChild(f), g
            }
            var h = -1;
            return function(e, i, j, k, l, m, n, p) {
                function q() {
                    t = h, v && v(), w && w.abort()
                }

                function r(b, d, e, f, g) {
                    y && c.cancel(y), v = w = null, 0 === d && (d = e ? 200 : "file" == Kc(i).protocol ? 404 : 0), d = 1223 === d ? 204 : d, g = g || "", b(d, e, f, g), a.$$completeOutstandingRequest(o)
                }
                var t;
                if (a.$$incOutstandingRequestCount(), i = i || a.url(), "jsonp" == md(e)) {
                    var u = "_" + (d.counter++).toString(36);
                    d[u] = function(a) {
                        d[u].data = a, d[u].called = !0
                    };
                    var v = g(i.replace("JSON_CALLBACK", "angular.callbacks." + u), u, function(a, b) {
                        r(k, a, d[u].data, "", b), d[u] = o
                    })
                } else {
                    var w = b(e);
                    if (w.open(e, i, !0), f(l, function(a, b) {
                            s(a) && w.setRequestHeader(b, a)
                        }), w.onreadystatechange = function() {
                            if (w && 4 == w.readyState) {
                                var a = null,
                                    b = null,
                                    c = "";
                                t !== h && (a = w.getAllResponseHeaders(), b = "response" in w ? w.response : w.responseText), t === h && 10 > rd || (c = w.statusText), r(k, t || w.status, b, a, c)
                            }
                        }, n && (w.withCredentials = !0), p) try {
                        w.responseType = p
                    } catch (x) {
                        if ("json" !== p) throw x
                    }
                    w.send(j || null)
                }
                if (m > 0) var y = c(q, m);
                else m && m.then && m.then(q)
            }
        }

        function ac() {
            var a = "{{",
                b = "}}";
            this.startSymbol = function(b) {
                return b ? (a = b, this) : a
            }, this.endSymbol = function(a) {
                return a ? (b = a, this) : b
            }, this.$get = ["$parse", "$exceptionHandler", "$sce", function(c, d, e) {
                function f(f, i, j) {
                    for (var k, l, m, n, o = 0, p = [], q = f.length, r = !1, s = []; q > o;) - 1 != (k = f.indexOf(a, o)) && -1 != (l = f.indexOf(b, k + g)) ? (o != k && p.push(f.substring(o, k)), p.push(m = c(n = f.substring(k + g, l))), m.exp = n, o = l + h, r = !0) : (o != q && p.push(f.substring(o)), o = q);
                    if ((q = p.length) || (p.push(""), q = 1), j && p.length > 1) throw ce("noconcat", "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce", f);
                    return !i || r ? (s.length = q, m = function(a) {
                        try {
                            for (var b, c = 0, g = q; g > c; c++) {
                                if ("function" == typeof(b = p[c]))
                                    if (b = b(a), b = j ? e.getTrusted(j, b) : e.valueOf(b), null == b) b = "";
                                    else switch (typeof b) {
                                        case "string":
                                            break;
                                        case "number":
                                            b = "" + b;
                                            break;
                                        default:
                                            b = Q(b)
                                    }
                                s[c] = b
                            }
                            return s.join("")
                        } catch (h) {
                            var i = ce("interr", "Can't interpolate: {0}\n{1}", f, h.toString());
                            d(i)
                        }
                    }, m.exp = f, m.parts = p, m) : void 0
                }
                var g = a.length,
                    h = b.length;
                return f.startSymbol = function() {
                    return a
                }, f.endSymbol = function() {
                    return b
                }, f
            }]
        }

        function bc() {
            this.$get = ["$rootScope", "$window", "$q", function(a, b, c) {
                function d(d, f, g, h) {
                    var i = b.setInterval,
                        j = b.clearInterval,
                        k = c.defer(),
                        l = k.promise,
                        m = 0,
                        n = s(h) && !h;
                    return g = s(g) ? g : 0, l.then(null, null, d), l.$$intervalId = i(function() {
                        k.notify(m++), g > 0 && m >= g && (k.resolve(m), j(l.$$intervalId), delete e[l.$$intervalId]), n || a.$apply()
                    }, f), e[l.$$intervalId] = k, l
                }
                var e = {};
                return d.cancel = function(a) {
                    return a && a.$$intervalId in e ? (e[a.$$intervalId].reject("canceled"), b.clearInterval(a.$$intervalId), delete e[a.$$intervalId], !0) : !1
                }, d
            }]
        }

        function cc() {
            this.$get = function() {
                return {
                    id: "en-us",
                    NUMBER_FORMATS: {
                        DECIMAL_SEP: ".",
                        GROUP_SEP: ",",
                        PATTERNS: [{
                            minInt: 1,
                            minFrac: 0,
                            maxFrac: 3,
                            posPre: "",
                            posSuf: "",
                            negPre: "-",
                            negSuf: "",
                            gSize: 3,
                            lgSize: 3
                        }, {
                            minInt: 1,
                            minFrac: 2,
                            maxFrac: 2,
                            posPre: "¤",
                            posSuf: "",
                            negPre: "(¤",
                            negSuf: ")",
                            gSize: 3,
                            lgSize: 3
                        }],
                        CURRENCY_SYM: "$"
                    },
                    DATETIME_FORMATS: {
                        MONTH: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
                        SHORTMONTH: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
                        DAY: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
                        SHORTDAY: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),
                        AMPMS: ["AM", "PM"],
                        medium: "MMM d, y h:mm:ss a",
                        "short": "M/d/yy h:mm a",
                        fullDate: "EEEE, MMMM d, y",
                        longDate: "MMMM d, y",
                        mediumDate: "MMM d, y",
                        shortDate: "M/d/yy",
                        mediumTime: "h:mm:ss a",
                        shortTime: "h:mm a"
                    },
                    pluralCat: function(a) {
                        return 1 === a ? "one" : "other"
                    }
                }
            }
        }

        function dc(a) {
            for (var b = a.split("/"), c = b.length; c--;) b[c] = X(b[c]);
            return b.join("/")
        }

        function ec(a, b, c) {
            var d = Kc(a, c);
            b.$$protocol = d.protocol, b.$$host = d.hostname, b.$$port = m(d.port) || ee[d.protocol] || null
        }

        function fc(a, b, c) {
            var d = "/" !== a.charAt(0);
            d && (a = "/" + a);
            var e = Kc(a, c);
            b.$$path = decodeURIComponent(d && "/" === e.pathname.charAt(0) ? e.pathname.substring(1) : e.pathname), b.$$search = V(e.search), b.$$hash = decodeURIComponent(e.hash), b.$$path && "/" != b.$$path.charAt(0) && (b.$$path = "/" + b.$$path)
        }

        function gc(a, b) {
            return 0 === b.indexOf(a) ? b.substr(a.length) : void 0
        }

        function hc(a) {
            var b = a.indexOf("#");
            return -1 == b ? a : a.substr(0, b)
        }

        function ic(a) {
            return a.substr(0, hc(a).lastIndexOf("/") + 1)
        }

        function jc(a) {
            return a.substring(0, a.indexOf("/", a.indexOf("//") + 2))
        }

        function kc(a, b) {
            this.$$html5 = !0, b = b || "";
            var d = ic(a);
            ec(a, this, a), this.$$parse = function(b) {
                var c = gc(d, b);
                if (!u(c)) throw fe("ipthprfx", 'Invalid url "{0}", missing path prefix "{1}".', b, d);
                fc(c, this, a), this.$$path || (this.$$path = "/"), this.$$compose()
            }, this.$$compose = function() {
                var a = W(this.$$search),
                    b = this.$$hash ? "#" + X(this.$$hash) : "";
                this.$$url = dc(this.$$path) + (a ? "?" + a : "") + b, this.$$absUrl = d + this.$$url.substr(1)
            }, this.$$rewrite = function(e) {
                var f, g;
                return (f = gc(a, e)) !== c ? (g = f, (f = gc(b, f)) !== c ? d + (gc("/", f) || f) : a + g) : (f = gc(d, e)) !== c ? d + f : d == e + "/" ? d : void 0
            }
        }

        function lc(a, b) {
            var c = ic(a);
            ec(a, this, a), this.$$parse = function(d) {
                function e(a, b, c) {
                    var d, e = /^\/[A-Z]:(\/.*)/;
                    return 0 === b.indexOf(c) && (b = b.replace(c, "")), e.exec(b) ? a : (d = e.exec(a), d ? d[1] : a)
                }
                var f = gc(a, d) || gc(c, d),
                    g = "#" == f.charAt(0) ? gc(b, f) : this.$$html5 ? f : "";
                if (!u(g)) throw fe("ihshprfx", 'Invalid url "{0}", missing hash prefix "{1}".', d, b);
                fc(g, this, a), this.$$path = e(this.$$path, g, a), this.$$compose()
            }, this.$$compose = function() {
                var c = W(this.$$search),
                    d = this.$$hash ? "#" + X(this.$$hash) : "";
                this.$$url = dc(this.$$path) + (c ? "?" + c : "") + d, this.$$absUrl = a + (this.$$url ? b + this.$$url : "")
            }, this.$$rewrite = function(b) {
                return hc(a) == hc(b) ? b : void 0
            }
        }

        function mc(a, b) {
            this.$$html5 = !0, lc.apply(this, arguments);
            var c = ic(a);
            this.$$rewrite = function(d) {
                var e;
                return a == hc(d) ? d : (e = gc(c, d)) ? a + b + e : c === d + "/" ? c : void 0
            }, this.$$compose = function() {
                var c = W(this.$$search),
                    d = this.$$hash ? "#" + X(this.$$hash) : "";
                this.$$url = dc(this.$$path) + (c ? "?" + c : "") + d, this.$$absUrl = a + b + this.$$url
            }
        }

        function nc(a) {
            return function() {
                return this[a]
            }
        }

        function oc(a, b) {
            return function(c) {
                return r(c) ? this[a] : (this[a] = b(c), this.$$compose(), this)
            }
        }

        function pc() {
            var b = "",
                c = !1;
            this.hashPrefix = function(a) {
                return s(a) ? (b = a, this) : b
            }, this.html5Mode = function(a) {
                return s(a) ? (c = a, this) : c
            }, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", function(d, e, f, g) {
                function h(a) {
                    d.$broadcast("$locationChangeSuccess", i.absUrl(), a)
                }
                var i, j, k, l = e.baseHref(),
                    m = e.url();
                c ? (k = jc(m) + (l || "/"), j = f.history ? kc : mc) : (k = hc(m), j = lc), i = new j(k, "#" + b), i.$$parse(i.$$rewrite(m)), g.on("click", function(c) {
                    if (!c.ctrlKey && !c.metaKey && 2 != c.which) {
                        for (var f = sd(c.target);
                            "a" !== md(f[0].nodeName);)
                            if (f[0] === g[0] || !(f = f.parent())[0]) return;
                        var h = f.prop("href");
                        if (t(h) && "[object SVGAnimatedString]" === h.toString() && (h = Kc(h.animVal).href), j === mc) {
                            var l = f.attr("href") || f.attr("xlink:href");
                            if (l.indexOf("://") < 0) {
                                var m = "#" + b;
                                if ("/" == l[0]) h = k + m + l;
                                else if ("#" == l[0]) h = k + m + (i.path() || "/") + l;
                                else {
                                    for (var n = i.path().split("/"), o = l.split("/"), p = 0; p < o.length; p++) "." != o[p] && (".." == o[p] ? n.pop() : o[p].length && n.push(o[p]));
                                    h = k + m + n.join("/")
                                }
                            }
                        }
                        var q = i.$$rewrite(h);
                        h && !f.attr("target") && q && !c.isDefaultPrevented() && (c.preventDefault(), q != e.url() && (i.$$parse(q), d.$apply(), a.angular["ff-684208-preventDefault"] = !0))
                    }
                }), i.absUrl() != m && e.url(i.absUrl(), !0), e.onUrlChange(function(a) {
                    i.absUrl() != a && (d.$evalAsync(function() {
                        var b = i.absUrl();
                        i.$$parse(a), d.$broadcast("$locationChangeStart", a, b).defaultPrevented ? (i.$$parse(b), e.url(b)) : h(b)
                    }), d.$$phase || d.$digest())
                });
                var n = 0;
                return d.$watch(function() {
                    var a = e.url(),
                        b = i.$$replace;
                    return n && a == i.absUrl() || (n++, d.$evalAsync(function() {
                        d.$broadcast("$locationChangeStart", i.absUrl(), a).defaultPrevented ? i.$$parse(a) : (e.url(i.absUrl(), b), h(a))
                    })), i.$$replace = !1, n
                }), i
            }]
        }

        function qc() {
            var a = !0,
                b = this;
            this.debugEnabled = function(b) {
                return s(b) ? (a = b, this) : a
            }, this.$get = ["$window", function(c) {
                function d(a) {
                    return a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line)), a
                }

                function e(a) {
                    var b = c.console || {},
                        e = b[a] || b.log || o,
                        g = !1;
                    try {
                        g = !!e.apply
                    } catch (h) {}
                    return g ? function() {
                        var a = [];
                        return f(arguments, function(b) {
                            a.push(d(b))
                        }), e.apply(b, a)
                    } : function(a, b) {
                        e(a, null == b ? "" : b)
                    }
                }
                return {
                    log: e("log"),
                    info: e("info"),
                    warn: e("warn"),
                    error: e("error"),
                    debug: function() {
                        var c = e("debug");
                        return function() {
                            a && c.apply(b, arguments)
                        }
                    }()
                }
            }]
        }

        function rc(a, b) {
            if ("__defineGetter__" === a || "__defineSetter__" === a || "__lookupGetter__" === a || "__lookupSetter__" === a || "__proto__" === a) throw he("isecfld", "Attempting to access a disallowed field in Angular expressions! Expression: {0}", b);
            return a
        }

        function sc(a, b) {
            if (a) {
                if (a.constructor === a) throw he("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", b);
                if (a.document && a.location && a.alert && a.setInterval) throw he("isecwindow", "Referencing the Window in Angular expressions is disallowed! Expression: {0}", b);
                if (a.children && (a.nodeName || a.prop && a.attr && a.find)) throw he("isecdom", "Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}", b);
                if (a === Object) throw he("isecobj", "Referencing Object in Angular expressions is disallowed! Expression: {0}", b)
            }
            return a
        }

        function tc(a, b) {
            if (a) {
                if (a.constructor === a) throw he("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", b);
                if (a === je || a === ke || le && a === le) throw he("isecff", "Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}", b)
            }
        }

        function uc(a, b, d, e, f) {
            f = f || {};
            for (var g, h = b.split("."), i = 0; h.length > 1; i++) {
                g = rc(h.shift(), e);
                var j = a[g];
                j || (j = {}, a[g] = j), a = j, a.then && f.unwrapPromises && (ge(e), "$$v" in a || ! function(a) {
                    a.then(function(b) {
                        a.$$v = b
                    })
                }(a), a.$$v === c && (a.$$v = {}), a = a.$$v)
            }
            return g = rc(h.shift(), e), sc(a, e), sc(a[g], e), a[g] = d, d
        }

        function vc(a, b, d, e, f, g, h) {
            return rc(a, g), rc(b, g), rc(d, g), rc(e, g), rc(f, g), h.unwrapPromises ? function(h, i) {
                var j, k = i && i.hasOwnProperty(a) ? i : h;
                return null == k ? k : (k = k[a], k && k.then && (ge(g), "$$v" in k || (j = k, j.$$v = c, j.then(function(a) {
                    j.$$v = a
                })), k = k.$$v), b ? null == k ? c : (k = k[b], k && k.then && (ge(g), "$$v" in k || (j = k, j.$$v = c, j.then(function(a) {
                    j.$$v = a
                })), k = k.$$v), d ? null == k ? c : (k = k[d], k && k.then && (ge(g), "$$v" in k || (j = k, j.$$v = c, j.then(function(a) {
                    j.$$v = a
                })), k = k.$$v), e ? null == k ? c : (k = k[e], k && k.then && (ge(g), "$$v" in k || (j = k, j.$$v = c, j.then(function(a) {
                    j.$$v = a
                })), k = k.$$v), f ? null == k ? c : (k = k[f], k && k.then && (ge(g), "$$v" in k || (j = k, j.$$v = c, j.then(function(a) {
                    j.$$v = a
                })), k = k.$$v), k) : k) : k) : k) : k)
            } : function(g, h) {
                var i = h && h.hasOwnProperty(a) ? h : g;
                return null == i ? i : (i = i[a], b ? null == i ? c : (i = i[b], d ? null == i ? c : (i = i[d], e ? null == i ? c : (i = i[e], f ? null == i ? c : i = i[f] : i) : i) : i) : i)
            }
        }

        function wc(a, b, d) {
            if (qe.hasOwnProperty(a)) return qe[a];
            var e, g = a.split("."),
                h = g.length;
            if (b.csp) e = 6 > h ? vc(g[0], g[1], g[2], g[3], g[4], d, b) : function(a, e) {
                var f, i = 0;
                do f = vc(g[i++], g[i++], g[i++], g[i++], g[i++], d, b)(a, e), e = c, a = f; while (h > i);
                return f
            };
            else {
                var i = "var p;\n";
                f(g, function(a, c) {
                    rc(a, d), i += "if(s == null) return undefined;\ns=" + (c ? "s" : '((k&&k.hasOwnProperty("' + a + '"))?k:s)') + '["' + a + '"];\n' + (b.unwrapPromises ? 'if (s && s.then) {\n pw("' + d.replace(/(["\r\n])/g, "\\$1") + '");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n' : "")
                }), i += "return s;";
                var j = new Function("s", "k", "pw", i);
                j.toString = q(i), e = b.unwrapPromises ? function(a, b) {
                    return j(a, b, ge)
                } : j
            }
            return "hasOwnProperty" !== a && (qe[a] = e), e
        }

        function xc() {
            var a = {},
                b = {
                    csp: !1,
                    unwrapPromises: !1,
                    logPromiseWarnings: !0
                };
            this.unwrapPromises = function(a) {
                return s(a) ? (b.unwrapPromises = !!a, this) : b.unwrapPromises
            }, this.logPromiseWarnings = function(a) {
                return s(a) ? (b.logPromiseWarnings = a, this) : b.logPromiseWarnings
            }, this.$get = ["$filter", "$sniffer", "$log", function(c, d, e) {
                return b.csp = d.csp, ge = function(a) {
                        b.logPromiseWarnings && !ie.hasOwnProperty(a) && (ie[a] = !0, e.warn("[$parse] Promise found in the expression `" + a + "`. Automatic unwrapping of promises in Angular expressions is deprecated."))
                    },
                    function(d) {
                        var e;
                        switch (typeof d) {
                            case "string":
                                if (a.hasOwnProperty(d)) return a[d];
                                var f = new oe(b),
                                    g = new pe(f, c, b);
                                return e = g.parse(d), "hasOwnProperty" !== d && (a[d] = e), e;
                            case "function":
                                return d;
                            default:
                                return o
                        }
                    }
            }]
        }

        function yc() {
            this.$get = ["$rootScope", "$exceptionHandler", function(a, b) {
                return zc(function(b) {
                    a.$evalAsync(b)
                }, b)
            }]
        }

        function zc(a, b) {
            function d(a) {
                return a
            }

            function e(a) {
                return j(a)
            }

            function g(a) {
                var b = h(),
                    c = 0,
                    d = Cd(a) ? [] : {};
                return f(a, function(a, e) {
                    c++, i(a).then(function(a) {
                        d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d))
                    }, function(a) {
                        d.hasOwnProperty(e) || b.reject(a)
                    })
                }), 0 === c && b.resolve(d), b.promise
            }
            var h = function() {
                    var f, g, j = [];
                    return g = {
                        resolve: function(b) {
                            if (j) {
                                var d = j;
                                j = c, f = i(b), d.length && a(function() {
                                    for (var a, b = 0, c = d.length; c > b; b++) a = d[b], f.then(a[0], a[1], a[2])
                                })
                            }
                        },
                        reject: function(a) {
                            g.resolve(k(a))
                        },
                        notify: function(b) {
                            if (j) {
                                var c = j;
                                j.length && a(function() {
                                    for (var a, d = 0, e = c.length; e > d; d++) a = c[d], a[2](b)
                                })
                            }
                        },
                        promise: {
                            then: function(a, c, g) {
                                var i = h(),
                                    k = function(c) {
                                        try {
                                            i.resolve((x(a) ? a : d)(c))
                                        } catch (e) {
                                            i.reject(e), b(e)
                                        }
                                    },
                                    l = function(a) {
                                        try {
                                            i.resolve((x(c) ? c : e)(a))
                                        } catch (d) {
                                            i.reject(d), b(d)
                                        }
                                    },
                                    m = function(a) {
                                        try {
                                            i.notify((x(g) ? g : d)(a))
                                        } catch (c) {
                                            b(c)
                                        }
                                    };
                                return j ? j.push([k, l, m]) : f.then(k, l, m), i.promise
                            },
                            "catch": function(a) {
                                return this.then(null, a)
                            },
                            "finally": function(a) {
                                function b(a, b) {
                                    var c = h();
                                    return b ? c.resolve(a) : c.reject(a), c.promise
                                }

                                function c(c, e) {
                                    var f = null;
                                    try {
                                        f = (a || d)()
                                    } catch (g) {
                                        return b(g, !1)
                                    }
                                    return f && x(f.then) ? f.then(function() {
                                        return b(c, e)
                                    }, function(a) {
                                        return b(a, !1)
                                    }) : b(c, e)
                                }
                                return this.then(function(a) {
                                    return c(a, !0)
                                }, function(a) {
                                    return c(a, !1)
                                })
                            }
                        }
                    }
                },
                i = function(b) {
                    return b && x(b.then) ? b : {
                        then: function(c) {
                            var d = h();
                            return a(function() {
                                d.resolve(c(b))
                            }), d.promise
                        }
                    }
                },
                j = function(a) {
                    var b = h();
                    return b.reject(a), b.promise
                },
                k = function(c) {
                    return {
                        then: function(d, f) {
                            var g = h();
                            return a(function() {
                                try {
                                    g.resolve((x(f) ? f : e)(c))
                                } catch (a) {
                                    g.reject(a), b(a)
                                }
                            }), g.promise
                        }
                    }
                },
                l = function(c, f, g, k) {
                    var l, m = h(),
                        n = function(a) {
                            try {
                                return (x(f) ? f : d)(a)
                            } catch (c) {
                                return b(c), j(c)
                            }
                        },
                        o = function(a) {
                            try {
                                return (x(g) ? g : e)(a)
                            } catch (c) {
                                return b(c), j(c)
                            }
                        },
                        p = function(a) {
                            try {
                                return (x(k) ? k : d)(a)
                            } catch (c) {
                                b(c)
                            }
                        };
                    return a(function() {
                        i(c).then(function(a) {
                            l || (l = !0, m.resolve(i(a).then(n, o, p)))
                        }, function(a) {
                            l || (l = !0, m.resolve(o(a)))
                        }, function(a) {
                            l || m.notify(p(a))
                        })
                    }), m.promise
                };
            return {
                defer: h,
                reject: j,
                when: l,
                all: g
            }
        }

        function Ac() {
            this.$get = ["$window", "$timeout", function(a, b) {
                var c = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame,
                    d = a.cancelAnimationFrame || a.webkitCancelAnimationFrame || a.mozCancelAnimationFrame || a.webkitCancelRequestAnimationFrame,
                    e = !!c,
                    f = e ? function(a) {
                        var b = c(a);
                        return function() {
                            d(b)
                        }
                    } : function(a) {
                        var c = b(a, 16.66, !1);
                        return function() {
                            b.cancel(c)
                        }
                    };
                return f.supported = e, f
            }]
        }

        function Bc() {
            var a = 10,
                b = d("$rootScope"),
                c = null;
            this.digestTtl = function(b) {
                return arguments.length && (a = b), a
            }, this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser", function(d, g, h, i) {
                function k() {
                    this.$id = j(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this["this"] = this.$root = this, this.$$destroyed = !1, this.$$asyncQueue = [], this.$$postDigestQueue = [], this.$$listeners = {}, this.$$listenerCount = {}, this.$$isolateBindings = {}
                }

                function l(a) {
                    if (r.$$phase) throw b("inprog", "{0} already in progress", r.$$phase);
                    r.$$phase = a
                }

                function m() {
                    r.$$phase = null
                }

                function n(a, b) {
                    var c = h(a);
                    return cb(c, b), c
                }

                function p(a, b, c) {
                    do a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c]; while (a = a.$parent)
                }

                function q() {}
                k.prototype = {
                    constructor: k,
                    $new: function(a) {
                        var b;
                        return a ? (b = new k, b.$root = this.$root, b.$$asyncQueue = this.$$asyncQueue, b.$$postDigestQueue = this.$$postDigestQueue) : (this.$$childScopeClass || (this.$$childScopeClass = function() {
                            this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, this.$$listeners = {}, this.$$listenerCount = {}, this.$id = j(), this.$$childScopeClass = null
                        }, this.$$childScopeClass.prototype = this), b = new this.$$childScopeClass), b["this"] = b, b.$parent = this, b.$$prevSibling = this.$$childTail, this.$$childHead ? (this.$$childTail.$$nextSibling = b, this.$$childTail = b) : this.$$childHead = this.$$childTail = b, b
                    },
                    $watch: function(a, b, d) {
                        var e = this,
                            f = n(a, "watch"),
                            g = e.$$watchers,
                            h = {
                                fn: b,
                                last: q,
                                get: f,
                                exp: a,
                                eq: !!d
                            };
                        if (c = null, !x(b)) {
                            var i = n(b || o, "listener");
                            h.fn = function(a, b, c) {
                                i(c)
                            }
                        }
                        if ("string" == typeof a && f.constant) {
                            var j = h.fn;
                            h.fn = function(a, b, c) {
                                j.call(this, a, b, c), H(g, h)
                            }
                        }
                        return g || (g = e.$$watchers = []), g.unshift(h),
                            function() {
                                H(g, h), c = null
                            }
                    },
                    $watchCollection: function(a, b) {
                        function c() {
                            f = m(j);
                            var a, b;
                            if (t(f))
                                if (e(f)) {
                                    g !== n && (g = n, q = g.length = 0, l++), a = f.length, q !== a && (l++, g.length = q = a);
                                    for (var c = 0; a > c; c++) {
                                        var d = g[c] !== g[c] && f[c] !== f[c];
                                        d || g[c] === f[c] || (l++, g[c] = f[c])
                                    }
                                } else {
                                    g !== o && (g = o = {}, q = 0, l++), a = 0;
                                    for (b in f) f.hasOwnProperty(b) && (a++, g.hasOwnProperty(b) ? g[b] !== f[b] && (l++, g[b] = f[b]) : (q++, g[b] = f[b], l++));
                                    if (q > a) {
                                        l++;
                                        for (b in g) g.hasOwnProperty(b) && !f.hasOwnProperty(b) && (q--, delete g[b])
                                    }
                                }
                            else g !== f && (g = f, l++);
                            return l
                        }

                        function d() {
                            if (p ? (p = !1, b(f, f, j)) : b(f, i, j), k)
                                if (t(f))
                                    if (e(f)) {
                                        i = new Array(f.length);
                                        for (var a = 0; a < f.length; a++) i[a] = f[a]
                                    } else {
                                        i = {};
                                        for (var c in f) nd.call(f, c) && (i[c] = f[c])
                                    }
                            else i = f
                        }
                        var f, g, i, j = this,
                            k = b.length > 1,
                            l = 0,
                            m = h(a),
                            n = [],
                            o = {},
                            p = !0,
                            q = 0;
                        return this.$watch(c, d)
                    },
                    $digest: function() {
                        var d, e, f, h, i, j, k, n, o, p, r, s = this.$$asyncQueue,
                            t = this.$$postDigestQueue,
                            u = a,
                            v = this,
                            w = [];
                        l("$digest"), c = null;
                        do {
                            for (j = !1, n = v; s.length;) {
                                try {
                                    r = s.shift(), r.scope.$eval(r.expression)
                                } catch (y) {
                                    m(), g(y)
                                }
                                c = null
                            }
                            a: do {
                                if (h = n.$$watchers)
                                    for (i = h.length; i--;) try {
                                        if (d = h[i])
                                            if ((e = d.get(n)) === (f = d.last) || (d.eq ? K(e, f) : "number" == typeof e && "number" == typeof f && isNaN(e) && isNaN(f))) {
                                                if (d === c) {
                                                    j = !1;
                                                    break a
                                                }
                                            } else j = !0, c = d, d.last = d.eq ? I(e, null) : e, d.fn(e, f === q ? e : f, n), 5 > u && (o = 4 - u, w[o] || (w[o] = []), p = x(d.exp) ? "fn: " + (d.exp.name || d.exp.toString()) : d.exp, p += "; newVal: " + Q(e) + "; oldVal: " + Q(f), w[o].push(p))
                                    } catch (y) {
                                        m(), g(y)
                                    }
                                if (!(k = n.$$childHead || n !== v && n.$$nextSibling))
                                    for (; n !== v && !(k = n.$$nextSibling);) n = n.$parent
                            } while (n = k);
                            if ((j || s.length) && !u--) throw m(), b("infdig", "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}", a, Q(w))
                        } while (j || s.length);
                        for (m(); t.length;) try {
                            t.shift()()
                        } catch (y) {
                            g(y)
                        }
                    },
                    $destroy: function() {
                        if (!this.$$destroyed) {
                            var a = this.$parent;
                            this.$broadcast("$destroy"), this.$$destroyed = !0, this !== r && (f(this.$$listenerCount, O(null, p, this)), a.$$childHead == this && (a.$$childHead = this.$$nextSibling), a.$$childTail == this && (a.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = null, this.$$listeners = {}, this.$$watchers = this.$$asyncQueue = this.$$postDigestQueue = [], this.$destroy = this.$digest = this.$apply = o, this.$on = this.$watch = function() {
                                return o
                            })
                        }
                    },
                    $eval: function(a, b) {
                        return h(a)(this, b)
                    },
                    $evalAsync: function(a) {
                        r.$$phase || r.$$asyncQueue.length || i.defer(function() {
                            r.$$asyncQueue.length && r.$digest()
                        }), this.$$asyncQueue.push({
                            scope: this,
                            expression: a
                        })
                    },
                    $$postDigest: function(a) {
                        this.$$postDigestQueue.push(a)
                    },
                    $apply: function(a) {
                        try {
                            return l("$apply"), this.$eval(a)
                        } catch (b) {
                            g(b)
                        } finally {
                            m();
                            try {
                                r.$digest()
                            } catch (b) {
                                throw g(b), b
                            }
                        }
                    },
                    $on: function(a, b) {
                        var c = this.$$listeners[a];
                        c || (this.$$listeners[a] = c = []), c.push(b);
                        var d = this;
                        do d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++; while (d = d.$parent);
                        var e = this;
                        return function() {
                            c[G(c, b)] = null, p(e, 1, a)
                        }
                    },
                    $emit: function(a) {
                        var b, c, d, e = [],
                            f = this,
                            h = !1,
                            i = {
                                name: a,
                                targetScope: f,
                                stopPropagation: function() {
                                    h = !0
                                },
                                preventDefault: function() {
                                    i.defaultPrevented = !0
                                },
                                defaultPrevented: !1
                            },
                            j = M([i], arguments, 1);
                        do {
                            for (b = f.$$listeners[a] || e, i.currentScope = f, c = 0, d = b.length; d > c; c++)
                                if (b[c]) try {
                                    b[c].apply(null, j)
                                } catch (k) {
                                    g(k)
                                } else b.splice(c, 1), c--, d--;
                            if (h) return i;
                            f = f.$parent
                        } while (f);
                        return i
                    },
                    $broadcast: function(a) {
                        for (var b, c, d, e = this, f = e, h = e, i = {
                                name: a,
                                targetScope: e,
                                preventDefault: function() {
                                    i.defaultPrevented = !0
                                },
                                defaultPrevented: !1
                            }, j = M([i], arguments, 1); f = h;) {
                            for (i.currentScope = f, b = f.$$listeners[a] || [], c = 0, d = b.length; d > c; c++)
                                if (b[c]) try {
                                    b[c].apply(null, j)
                                } catch (k) {
                                    g(k)
                                } else b.splice(c, 1), c--, d--;
                            if (!(h = f.$$listenerCount[a] && f.$$childHead || f !== e && f.$$nextSibling))
                                for (; f !== e && !(h = f.$$nextSibling);) f = f.$parent
                        }
                        return i
                    }
                };
                var r = new k;
                return r
            }]
        }

        function Cc() {
            var a = /^\s*(https?|ftp|mailto|tel|file):/,
                b = /^\s*(https?|ftp|file):|data:image\//;
            this.aHrefSanitizationWhitelist = function(b) {
                return s(b) ? (a = b, this) : a
            }, this.imgSrcSanitizationWhitelist = function(a) {
                return s(a) ? (b = a, this) : b
            }, this.$get = function() {
                return function(c, d) {
                    var e, f = d ? b : a;
                    return rd && !(rd >= 8) || (e = Kc(c).href, "" === e || e.match(f)) ? c : "unsafe:" + e
                }
            }
        }

        function Dc(a) {
            return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
        }

        function Ec(a) {
            if ("self" === a) return a;
            if (u(a)) {
                if (a.indexOf("***") > -1) throw re("iwcard", "Illegal sequence *** in string matcher.  String: {0}", a);
                return a = Dc(a).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), new RegExp("^" + a + "$")
            }
            if (y(a)) return new RegExp("^" + a.source + "$");
            throw re("imatcher", 'Matchers may only be "self", string patterns or RegExp objects')
        }

        function Fc(a) {
            var b = [];
            return s(a) && f(a, function(a) {
                b.push(Ec(a))
            }), b
        }

        function Gc() {
            this.SCE_CONTEXTS = se;
            var a = ["self"],
                b = [];
            this.resourceUrlWhitelist = function(b) {
                return arguments.length && (a = Fc(b)), a
            }, this.resourceUrlBlacklist = function(a) {
                return arguments.length && (b = Fc(a)), b
            }, this.$get = ["$injector", function(d) {
                function e(a, b) {
                    return "self" === a ? Lc(b) : !!a.exec(b.href)
                }

                function f(c) {
                    var d, f, g = Kc(c.toString()),
                        h = !1;
                    for (d = 0, f = a.length; f > d; d++)
                        if (e(a[d], g)) {
                            h = !0;
                            break
                        } if (h)
                        for (d = 0, f = b.length; f > d; d++)
                            if (e(b[d], g)) {
                                h = !1;
                                break
                            } return h
                }

                function g(a) {
                    var b = function(a) {
                        this.$$unwrapTrustedValue = function() {
                            return a
                        }
                    };
                    return a && (b.prototype = new a), b.prototype.valueOf = function() {
                        return this.$$unwrapTrustedValue()
                    }, b.prototype.toString = function() {
                        return this.$$unwrapTrustedValue().toString()
                    }, b
                }

                function h(a, b) {
                    var d = m.hasOwnProperty(a) ? m[a] : null;
                    if (!d) throw re("icontext", "Attempted to trust a value in invalid context. Context: {0}; Value: {1}", a, b);
                    if (null === b || b === c || "" === b) return b;
                    if ("string" != typeof b) throw re("itype", "Attempted to trust a non-string value in a content requiring a string: Context: {0}", a);
                    return new d(b)
                }

                function i(a) {
                    return a instanceof l ? a.$$unwrapTrustedValue() : a
                }

                function j(a, b) {
                    if (null === b || b === c || "" === b) return b;
                    var d = m.hasOwnProperty(a) ? m[a] : null;
                    if (d && b instanceof d) return b.$$unwrapTrustedValue();
                    if (a === se.RESOURCE_URL) {
                        if (f(b)) return b;
                        throw re("insecurl", "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}", b.toString())
                    }
                    if (a === se.HTML) return k(b);
                    throw re("unsafe", "Attempting to use an unsafe value in a safe context.")
                }
                var k = function() {
                    throw re("unsafe", "Attempting to use an unsafe value in a safe context.")
                };
                d.has("$sanitize") && (k = d.get("$sanitize"));
                var l = g(),
                    m = {};
                return m[se.HTML] = g(l), m[se.CSS] = g(l), m[se.URL] = g(l), m[se.JS] = g(l), m[se.RESOURCE_URL] = g(m[se.URL]), {
                    trustAs: h,
                    getTrusted: j,
                    valueOf: i
                }
            }]
        }

        function Hc() {
            var a = !0;
            this.enabled = function(b) {
                return arguments.length && (a = !!b), a
            }, this.$get = ["$parse", "$sniffer", "$sceDelegate", function(b, c, d) {
                if (a && c.msie && c.msieDocumentMode < 8) throw re("iequirks", "Strict Contextual Escaping does not support Internet Explorer version < 9 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");
                var e = J(se);
                e.isEnabled = function() {
                    return a
                }, e.trustAs = d.trustAs, e.getTrusted = d.getTrusted, e.valueOf = d.valueOf, a || (e.trustAs = e.getTrusted = function(a, b) {
                    return b
                }, e.valueOf = p), e.parseAs = function(a, c) {
                    var d = b(c);
                    return d.literal && d.constant ? d : function(b, c) {
                        return e.getTrusted(a, d(b, c))
                    }
                };
                var g = e.parseAs,
                    h = e.getTrusted,
                    i = e.trustAs;
                return f(se, function(a, b) {
                    var c = md(b);
                    e[jb("parse_as_" + c)] = function(b) {
                        return g(a, b)
                    }, e[jb("get_trusted_" + c)] = function(b) {
                        return h(a, b)
                    }, e[jb("trust_as_" + c)] = function(b) {
                        return i(a, b)
                    }
                }), e
            }]
        }

        function Ic() {
            this.$get = ["$window", "$document", function(a, b) {
                var c, d, e = {},
                    f = m((/android (\d+)/.exec(md((a.navigator || {}).userAgent)) || [])[1]),
                    g = /Boxee/i.test((a.navigator || {}).userAgent),
                    h = b[0] || {},
                    i = h.documentMode,
                    j = /^(Moz|webkit|O|ms)(?=[A-Z])/,
                    k = h.body && h.body.style,
                    l = !1,
                    n = !1;
                if (k) {
                    for (var o in k)
                        if (d = j.exec(o)) {
                            c = d[0], c = c.substr(0, 1).toUpperCase() + c.substr(1);
                            break
                        } c || (c = "WebkitOpacity" in k && "webkit"), l = !!("transition" in k || c + "Transition" in k), n = !!("animation" in k || c + "Animation" in k), !f || l && n || (l = u(h.body.style.webkitTransition), n = u(h.body.style.webkitAnimation))
                }
                return {
                    history: !(!a.history || !a.history.pushState || 4 > f || g),
                    hashchange: "onhashchange" in a && (!i || i > 7),
                    hasEvent: function(a) {
                        if ("input" == a && 9 == rd) return !1;
                        if (r(e[a])) {
                            var b = h.createElement("div");
                            e[a] = "on" + a in b
                        }
                        return e[a]
                    },
                    csp: L(),
                    vendorPrefix: c,
                    transitions: l,
                    animations: n,
                    android: f,
                    msie: rd,
                    msieDocumentMode: i
                }
            }]
        }

        function Jc() {
            this.$get = ["$rootScope", "$browser", "$q", "$exceptionHandler", function(a, b, c, d) {
                function e(e, g, h) {
                    var i, j = c.defer(),
                        k = j.promise,
                        l = s(h) && !h;
                    return i = b.defer(function() {
                        try {
                            j.resolve(e())
                        } catch (b) {
                            j.reject(b), d(b)
                        } finally {
                            delete f[k.$$timeoutId]
                        }
                        l || a.$apply()
                    }, g), k.$$timeoutId = i, f[i] = j, k
                }
                var f = {};
                return e.cancel = function(a) {
                    return a && a.$$timeoutId in f ? (f[a.$$timeoutId].reject("canceled"), delete f[a.$$timeoutId], b.defer.cancel(a.$$timeoutId)) : !1
                }, e
            }]
        }

        function Kc(a) {
            var b = a;
            return rd && (te.setAttribute("href", b), b = te.href), te.setAttribute("href", b), {
                href: te.href,
                protocol: te.protocol ? te.protocol.replace(/:$/, "") : "",
                host: te.host,
                search: te.search ? te.search.replace(/^\?/, "") : "",
                hash: te.hash ? te.hash.replace(/^#/, "") : "",
                hostname: te.hostname,
                port: te.port,
                pathname: "/" === te.pathname.charAt(0) ? te.pathname : "/" + te.pathname
            }
        }

        function Lc(a) {
            var b = u(a) ? Kc(a) : a;
            return b.protocol === ue.protocol && b.host === ue.host
        }

        function Mc() {
            this.$get = q(a)
        }

        function Nc(a) {
            function b(d, e) {
                if (t(d)) {
                    var g = {};
                    return f(d, function(a, c) {
                        g[c] = b(c, a)
                    }), g
                }
                return a.factory(d + c, e)
            }
            var c = "Filter";
            this.register = b, this.$get = ["$injector", function(a) {
                return function(b) {
                    return a.get(b + c)
                }
            }], b("currency", Pc), b("date", Xc), b("filter", Oc), b("json", Yc), b("limitTo", Zc), b("lowercase", ze), b("number", Qc), b("orderBy", $c), b("uppercase", Ae)
        }

        function Oc() {
            return function(a, b, c) {
                if (!Cd(a)) return a;
                var d = typeof c,
                    e = [];
                e.check = function(a) {
                    for (var b = 0; b < e.length; b++)
                        if (!e[b](a)) return !1;
                    return !0
                }, "function" !== d && (c = "boolean" === d && c ? function(a, b) {
                    return Ad.equals(a, b)
                } : function(a, b) {
                    if (a && b && "object" == typeof a && "object" == typeof b) {
                        for (var d in a)
                            if ("$" !== d.charAt(0) && nd.call(a, d) && c(a[d], b[d])) return !0;
                        return !1
                    }
                    return b = ("" + b).toLowerCase(), ("" + a).toLowerCase().indexOf(b) > -1
                });
                var f = function(a, b) {
                    if ("string" == typeof b && "!" === b.charAt(0)) return !f(a, b.substr(1));
                    switch (typeof a) {
                        case "boolean":
                        case "number":
                        case "string":
                            return c(a, b);
                        case "object":
                            switch (typeof b) {
                                case "object":
                                    return c(a, b);
                                default:
                                    for (var d in a)
                                        if ("$" !== d.charAt(0) && f(a[d], b)) return !0
                            }
                            return !1;
                        case "array":
                            for (var e = 0; e < a.length; e++)
                                if (f(a[e], b)) return !0;
                            return !1;
                        default:
                            return !1
                    }
                };
                switch (typeof b) {
                    case "boolean":
                    case "number":
                    case "string":
                        b = {
                            $: b
                        };
                    case "object":
                        for (var g in b) ! function(a) {
                            "undefined" != typeof b[a] && e.push(function(c) {
                                return f("$" == a ? c : c && c[a], b[a])
                            })
                        }(g);
                        break;
                    case "function":
                        e.push(b);
                        break;
                    default:
                        return a
                }
                for (var h = [], i = 0; i < a.length; i++) {
                    var j = a[i];
                    e.check(j) && h.push(j)
                }
                return h
            }
        }

        function Pc(a) {
            var b = a.NUMBER_FORMATS;
            return function(a, c) {
                return r(c) && (c = b.CURRENCY_SYM), Rc(a, b.PATTERNS[1], b.GROUP_SEP, b.DECIMAL_SEP, 2).replace(/\u00A4/g, c)
            }
        }

        function Qc(a) {
            var b = a.NUMBER_FORMATS;
            return function(a, c) {
                return Rc(a, b.PATTERNS[0], b.GROUP_SEP, b.DECIMAL_SEP, c)
            }
        }

        function Rc(a, b, c, d, e) {
            if (null == a || !isFinite(a) || t(a)) return "";
            var f = 0 > a;
            a = Math.abs(a);
            var g = a + "",
                h = "",
                i = [],
                j = !1;
            if (-1 !== g.indexOf("e")) {
                var k = g.match(/([\d\.]+)e(-?)(\d+)/);
                k && "-" == k[2] && k[3] > e + 1 ? (g = "0", a = 0) : (h = g, j = !0)
            }
            if (j) e > 0 && a > -1 && 1 > a && (h = a.toFixed(e));
            else {
                var l = (g.split(ve)[1] || "").length;
                r(e) && (e = Math.min(Math.max(b.minFrac, l), b.maxFrac)), a = +(Math.round(+(a.toString() + "e" + e)).toString() + "e" + -e);
                var m = ("" + a).split(ve),
                    n = m[0];
                m = m[1] || "";
                var o, p = 0,
                    q = b.lgSize,
                    s = b.gSize;
                if (n.length >= q + s)
                    for (p = n.length - q, o = 0; p > o; o++)(p - o) % s === 0 && 0 !== o && (h += c), h += n.charAt(o);
                for (o = p; o < n.length; o++)(n.length - o) % q === 0 && 0 !== o && (h += c), h += n.charAt(o);
                for (; m.length < e;) m += "0";
                e && "0" !== e && (h += d + m.substr(0, e))
            }
            return i.push(f ? b.negPre : b.posPre), i.push(h), i.push(f ? b.negSuf : b.posSuf), i.join("")
        }

        function Sc(a, b, c) {
            var d = "";
            for (0 > a && (d = "-", a = -a), a = "" + a; a.length < b;) a = "0" + a;
            return c && (a = a.substr(a.length - b)), d + a
        }

        function Tc(a, b, c, d) {
            return c = c || 0,
                function(e) {
                    var f = e["get" + a]();
                    return (c > 0 || f > -c) && (f += c), 0 === f && -12 == c && (f = 12), Sc(f, b, d)
                }
        }

        function Uc(a, b) {
            return function(c, d) {
                var e = c["get" + a](),
                    f = od(b ? "SHORT" + a : a);
                return d[f][e]
            }
        }

        function Vc(a) {
            var b = -1 * a.getTimezoneOffset(),
                c = b >= 0 ? "+" : "";
            return c += Sc(Math[b > 0 ? "floor" : "ceil"](b / 60), 2) + Sc(Math.abs(b % 60), 2)
        }

        function Wc(a, b) {
            return a.getHours() < 12 ? b.AMPMS[0] : b.AMPMS[1]
        }

        function Xc(a) {
            function b(a) {
                var b;
                if (b = a.match(c)) {
                    var d = new Date(0),
                        e = 0,
                        f = 0,
                        g = b[8] ? d.setUTCFullYear : d.setFullYear,
                        h = b[8] ? d.setUTCHours : d.setHours;
                    b[9] && (e = m(b[9] + b[10]), f = m(b[9] + b[11])), g.call(d, m(b[1]), m(b[2]) - 1, m(b[3]));
                    var i = m(b[4] || 0) - e,
                        j = m(b[5] || 0) - f,
                        k = m(b[6] || 0),
                        l = Math.round(1e3 * parseFloat("0." + (b[7] || 0)));
                    return h.call(d, i, j, k, l), d
                }
                return a
            }
            var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
            return function(c, d) {
                var e, g, h = "",
                    i = [];
                if (d = d || "mediumDate", d = a.DATETIME_FORMATS[d] || d, u(c) && (c = ye.test(c) ? m(c) : b(c)), v(c) && (c = new Date(c)), !w(c)) return c;
                for (; d;) g = xe.exec(d), g ? (i = M(i, g, 1), d = i.pop()) : (i.push(d), d = null);
                return f(i, function(b) {
                    e = we[b], h += e ? e(c, a.DATETIME_FORMATS) : b.replace(/(^'|'$)/g, "").replace(/''/g, "'")
                }), h
            }
        }

        function Yc() {
            return function(a) {
                return Q(a, !0)
            }
        }

        function Zc() {
            return function(a, b) {
                if (!Cd(a) && !u(a)) return a;
                if (b = 1 / 0 === Math.abs(Number(b)) ? Number(b) : m(b), u(a)) return b ? b >= 0 ? a.slice(0, b) : a.slice(b, a.length) : "";
                var c, d, e = [];
                for (b > a.length ? b = a.length : b < -a.length && (b = -a.length), b > 0 ? (c = 0, d = b) : (c = a.length + b, d = a.length); d > c; c++) e.push(a[c]);
                return e
            }
        }

        function $c(a) {
            return function(b, c, d) {
                function e(a, b) {
                    for (var d = 0; d < c.length; d++) {
                        var e = c[d](a, b);
                        if (0 !== e) return e
                    }
                    return 0
                }

                function f(a, b) {
                    return S(b) ? function(b, c) {
                        return a(c, b)
                    } : a
                }

                function g(a, b) {
                    var c = typeof a,
                        d = typeof b;
                    return c == d ? ("string" == c && (a = a.toLowerCase(), b = b.toLowerCase()), a === b ? 0 : b > a ? -1 : 1) : d > c ? -1 : 1
                }
                if (!Cd(b)) return b;
                if (!c) return b;
                c = Cd(c) ? c : [c], c = E(c, function(b) {
                    var c = !1,
                        d = b || p;
                    if (u(b) && (("+" == b.charAt(0) || "-" == b.charAt(0)) && (c = "-" == b.charAt(0), b = b.substring(1)), d = a(b), d.constant)) {
                        var e = d();
                        return f(function(a, b) {
                            return g(a[e], b[e])
                        }, c)
                    }
                    return f(function(a, b) {
                        return g(d(a), d(b))
                    }, c)
                });
                for (var h = [], i = 0; i < b.length; i++) h.push(b[i]);
                return h.sort(f(e, d))
            }
        }

        function _c(a) {
            return x(a) && (a = {
                link: a
            }), a.restrict = a.restrict || "AC", q(a)
        }

        function ad(a, b, c, d) {
            function e(b, c) {
                c = c ? "-" + _(c, "-") : "", d.removeClass(a, (b ? Oe : Ne) + c), d.addClass(a, (b ? Ne : Oe) + c)
            }
            var g = this,
                h = a.parent().controller("form") || De,
                i = 0,
                j = g.$error = {},
                k = [];
            g.$name = b.name || b.ngForm, g.$dirty = !1, g.$pristine = !0, g.$valid = !0, g.$invalid = !1, h.$addControl(g), a.addClass(Pe), e(!0), g.$addControl = function(a) {
                db(a.$name, "input"), k.push(a), a.$name && (g[a.$name] = a)
            }, g.$removeControl = function(a) {
                a.$name && g[a.$name] === a && delete g[a.$name], f(j, function(b, c) {
                    g.$setValidity(c, !0, a)
                }), H(k, a)
            }, g.$setValidity = function(a, b, c) {
                var d = j[a];
                if (b) d && (H(d, c), d.length || (i--, i || (e(b), g.$valid = !0, g.$invalid = !1), j[a] = !1, e(!0, a), h.$setValidity(a, !0, g)));
                else {
                    if (i || e(b), d) {
                        if (F(d, c)) return
                    } else j[a] = d = [], i++, e(!1, a), h.$setValidity(a, !1, g);
                    d.push(c), g.$valid = !1, g.$invalid = !0
                }
            }, g.$setDirty = function() {
                d.removeClass(a, Pe), d.addClass(a, Qe), g.$dirty = !0, g.$pristine = !1, h.$setDirty()
            }, g.$setPristine = function() {
                d.removeClass(a, Qe), d.addClass(a, Pe), g.$dirty = !1, g.$pristine = !0, f(k, function(a) {
                    a.$setPristine()
                })
            }
        }

        function bd(a, b, d, e) {
            return a.$setValidity(b, d), d ? e : c
        }

        function cd(a, b) {
            var c, d;
            if (b)
                for (c = 0; c < b.length; ++c)
                    if (d = b[c], a[d]) return !0;
            return !1
        }

        function dd(a, b, c, d, e) {
            if (t(e)) {
                a.$$hasNativeValidators = !0;
                var f = function(f) {
                    return a.$error[b] || cd(e, d) || !cd(e, c) ? f : void a.$setValidity(b, !1)
                };
                a.$parsers.push(f)
            }
        }

        function ed(a, b, c, e, f, g) {
            var h = b.prop(ld),
                i = b[0].placeholder,
                j = {};
            if (e.$$validityState = h, !f.android) {
                var k = !1;
                b.on("compositionstart", function() {
                    k = !0
                }), b.on("compositionend", function() {
                    k = !1, l()
                })
            }
            var l = function(d) {
                if (!k) {
                    var f = b.val();
                    if (rd && "input" === (d || j).type && b[0].placeholder !== i) return void(i = b[0].placeholder);
                    S(c.ngTrim || "T") && (f = Dd(f));
                    var g = h && e.$$hasNativeValidators;
                    (e.$viewValue !== f || "" === f && g) && (a.$$phase ? e.$setViewValue(f) : a.$apply(function() {
                        e.$setViewValue(f)
                    }))
                }
            };
            if (f.hasEvent("input")) b.on("input", l);
            else {
                var n, o = function() {
                    n || (n = g.defer(function() {
                        l(), n = null
                    }))
                };
                b.on("keydown", function(a) {
                    var b = a.keyCode;
                    91 === b || b > 15 && 19 > b || b >= 37 && 40 >= b || o()
                }), f.hasEvent("paste") && b.on("paste cut", o)
            }
            b.on("change", l), e.$render = function() {
                b.val(e.$isEmpty(e.$viewValue) ? "" : e.$viewValue)
            };
            var p, q, r = c.ngPattern;
            if (r) {
                var s = function(a, b) {
                    return bd(e, "pattern", e.$isEmpty(b) || a.test(b), b)
                };
                q = r.match(/^\/(.*)\/([gim]*)$/), q ? (r = new RegExp(q[1], q[2]), p = function(a) {
                    return s(r, a)
                }) : p = function(c) {
                    var e = a.$eval(r);
                    if (!e || !e.test) throw d("ngPattern")("noregexp", "Expected {0} to be a RegExp but was {1}. Element: {2}", r, e, T(b));
                    return s(e, c)
                }, e.$formatters.push(p), e.$parsers.push(p)
            }
            if (c.ngMinlength) {
                var t = m(c.ngMinlength),
                    u = function(a) {
                        return bd(e, "minlength", e.$isEmpty(a) || a.length >= t, a)
                    };
                e.$parsers.push(u), e.$formatters.push(u)
            }
            if (c.ngMaxlength) {
                var v = m(c.ngMaxlength),
                    w = function(a) {
                        return bd(e, "maxlength", e.$isEmpty(a) || a.length <= v, a)
                    };
                e.$parsers.push(w), e.$formatters.push(w)
            }
        }

        function fd(a, b, d, e, f, g) {
            if (ed(a, b, d, e, f, g), e.$parsers.push(function(a) {
                    var b = e.$isEmpty(a);
                    return b || Je.test(a) ? (e.$setValidity("number", !0), "" === a ? null : b ? a : parseFloat(a)) : (e.$setValidity("number", !1), c)
                }), dd(e, "number", Le, null, e.$$validityState), e.$formatters.push(function(a) {
                    return e.$isEmpty(a) ? "" : "" + a
                }), d.min) {
                var h = function(a) {
                    var b = parseFloat(d.min);
                    return bd(e, "min", e.$isEmpty(a) || a >= b, a)
                };
                e.$parsers.push(h), e.$formatters.push(h)
            }
            if (d.max) {
                var i = function(a) {
                    var b = parseFloat(d.max);
                    return bd(e, "max", e.$isEmpty(a) || b >= a, a)
                };
                e.$parsers.push(i), e.$formatters.push(i)
            }
            e.$formatters.push(function(a) {
                return bd(e, "number", e.$isEmpty(a) || v(a), a)
            })
        }

        function gd(a, b, c, d, e, f) {
            ed(a, b, c, d, e, f);
            var g = function(a) {
                return bd(d, "url", d.$isEmpty(a) || He.test(a), a)
            };
            d.$formatters.push(g), d.$parsers.push(g)
        }

        function hd(a, b, c, d, e, f) {
            ed(a, b, c, d, e, f);
            var g = function(a) {
                return bd(d, "email", d.$isEmpty(a) || Ie.test(a), a)
            };
            d.$formatters.push(g), d.$parsers.push(g)
        }

        function id(a, b, c, d) {
            r(c.name) && b.attr("name", j()), b.on("click", function() {
                b[0].checked && a.$apply(function() {
                    d.$setViewValue(c.value)
                })
            }), d.$render = function() {
                var a = c.value;
                b[0].checked = a == d.$viewValue
            }, c.$observe("value", d.$render)
        }

        function jd(a, b, c, d) {
            var e = c.ngTrueValue,
                f = c.ngFalseValue;
            u(e) || (e = !0), u(f) || (f = !1), b.on("click", function() {
                a.$apply(function() {
                    d.$setViewValue(b[0].checked)
                })
            }), d.$render = function() {
                b[0].checked = d.$viewValue
            }, d.$isEmpty = function(a) {
                return a !== e
            }, d.$formatters.push(function(a) {
                return a === e
            }), d.$parsers.push(function(a) {
                return a ? e : f
            })
        }

        function kd(a, b) {
            return a = "ngClass" + a, ["$animate", function(c) {
                function d(a, b) {
                    var c = [];
                    a: for (var d = 0; d < a.length; d++) {
                        for (var e = a[d], f = 0; f < b.length; f++)
                            if (e == b[f]) continue a;
                        c.push(e)
                    }
                    return c
                }

                function e(a) {
                    if (Cd(a)) return a;
                    if (u(a)) return a.split(" ");
                    if (t(a)) {
                        var b = [];
                        return f(a, function(a, c) {
                            a && (b = b.concat(c.split(" ")))
                        }), b
                    }
                    return a
                }
                return {
                    restrict: "AC",
                    link: function(g, h, i) {
                        function j(a) {
                            var b = l(a, 1);
                            i.$addClass(b)
                        }

                        function k(a) {
                            var b = l(a, -1);
                            i.$removeClass(b)
                        }

                        function l(a, b) {
                            var c = h.data("$classCounts") || {},
                                d = [];
                            return f(a, function(a) {
                                (b > 0 || c[a]) && (c[a] = (c[a] || 0) + b, c[a] === +(b > 0) && d.push(a))
                            }), h.data("$classCounts", c), d.join(" ")
                        }

                        function m(a, b) {
                            var e = d(b, a),
                                f = d(a, b);
                            f = l(f, -1), e = l(e, 1), 0 === e.length ? c.removeClass(h, f) : 0 === f.length ? c.addClass(h, e) : c.setClass(h, e, f)
                        }

                        function n(a) {
                            if (b === !0 || g.$index % 2 === b) {
                                var c = e(a || []);
                                if (o) {
                                    if (!K(a, o)) {
                                        var d = e(o);
                                        m(d, c)
                                    }
                                } else j(c)
                            }
                            o = J(a)
                        }
                        var o;
                        g.$watch(i[a], n, !0), i.$observe("class", function() {
                            n(g.$eval(i[a]))
                        }), "ngClass" !== a && g.$watch("$index", function(c, d) {
                            var f = 1 & c;
                            if (f !== (1 & d)) {
                                var h = e(g.$eval(i[a]));
                                f === b ? j(h) : k(h)
                            }
                        })
                    }
                }
            }]
        }
        var ld = "validity",
            md = function(a) {
                return u(a) ? a.toLowerCase() : a
            },
            nd = Object.prototype.hasOwnProperty,
            od = function(a) {
                return u(a) ? a.toUpperCase() : a
            },
            pd = function(a) {
                return u(a) ? a.replace(/[A-Z]/g, function(a) {
                    return String.fromCharCode(32 | a.charCodeAt(0))
                }) : a
            },
            qd = function(a) {
                return u(a) ? a.replace(/[a-z]/g, function(a) {
                    return String.fromCharCode(-33 & a.charCodeAt(0))
                }) : a
            };
        "i" !== "I".toLowerCase() && (md = pd, od = qd);
        var rd, sd, td, ud, vd, wd = [].slice,
            xd = [].push,
            yd = Object.prototype.toString,
            zd = d("ng"),
            Ad = a.angular || (a.angular = {}),
            Bd = ["0", "0", "0"];
        rd = m((/msie (\d+)/.exec(md(navigator.userAgent)) || [])[1]), isNaN(rd) && (rd = m((/trident\/.*; rv:(\d+)/.exec(md(navigator.userAgent)) || [])[1])), o.$inject = [], p.$inject = [];
        var Cd = function() {
                return x(Array.isArray) ? Array.isArray : function(a) {
                    return "[object Array]" === yd.call(a)
                }
            }(),
            Dd = function() {
                return String.prototype.trim ? function(a) {
                    return u(a) ? a.trim() : a
                } : function(a) {
                    return u(a) ? a.replace(/^\s\s*/, "").replace(/\s\s*$/, "") : a
                }
            }();
        vd = 9 > rd ? function(a) {
            return a = a.nodeName ? a : a[0], a.scopeName && "HTML" != a.scopeName ? od(a.scopeName + ":" + a.nodeName) : a.nodeName
        } : function(a) {
            return a.nodeName ? a.nodeName : a[0].nodeName
        };
        var Ed = /[A-Z]/g,
            Fd = {
                full: "1.2.20",
                major: 1,
                minor: 2,
                dot: 20,
                codeName: "accidental-beautification"
            };
        ob.expando = "ng339";
        var Gd = ob.cache = {},
            Hd = 1,
            Id = a.document.addEventListener ? function(a, b, c) {
                a.addEventListener(b, c, !1)
            } : function(a, b, c) {
                a.attachEvent("on" + b, c)
            },
            Jd = a.document.removeEventListener ? function(a, b, c) {
                a.removeEventListener(b, c, !1)
            } : function(a, b, c) {
                a.detachEvent("on" + b, c)
            },
            Kd = (ob._data = function(a) {
                return this.cache[a[this.expando]] || {}
            }, /([\:\-\_]+(.))/g),
            Ld = /^moz([A-Z])/,
            Md = d("jqLite"),
            Nd = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            Od = /<|&#?\w+;/,
            Pd = /<([\w:]+)/,
            Qd = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Rd = {
                option: [1, '<select multiple="multiple">', "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        Rd.optgroup = Rd.option, Rd.tbody = Rd.tfoot = Rd.colgroup = Rd.caption = Rd.thead, Rd.th = Rd.td;
        var Sd = ob.prototype = {
                ready: function(c) {
                    function d() {
                        e || (e = !0, c())
                    }
                    var e = !1;
                    "complete" === b.readyState ? setTimeout(d) : (this.on("DOMContentLoaded", d), ob(a).on("load", d))
                },
                toString: function() {
                    var a = [];
                    return f(this, function(b) {
                        a.push("" + b)
                    }), "[" + a.join(", ") + "]"
                },
                eq: function(a) {
                    return sd(a >= 0 ? this[a] : this[this.length + a])
                },
                length: 0,
                push: xd,
                sort: [].sort,
                splice: [].splice
            },
            Td = {};
        f("multiple,selected,checked,disabled,readOnly,required,open".split(","), function(a) {
            Td[md(a)] = a
        });
        var Ud = {};
        f("input,select,option,textarea,button,form,details".split(","), function(a) {
            Ud[od(a)] = !0
        }), f({
            data: ub,
            inheritedData: Ab,
            scope: function(a) {
                return sd(a).data("$scope") || Ab(a.parentNode || a, ["$isolateScope", "$scope"])
            },
            isolateScope: function(a) {
                return sd(a).data("$isolateScope") || sd(a).data("$isolateScopeNoTemplate")
            },
            controller: zb,
            injector: function(a) {
                return Ab(a, "$injector")
            },
            removeAttr: function(a, b) {
                a.removeAttribute(b)
            },
            hasClass: vb,
            css: function(a, b, d) {
                if (b = jb(b), !s(d)) {
                    var e;
                    return 8 >= rd && (e = a.currentStyle && a.currentStyle[b], "" === e && (e = "auto")), e = e || a.style[b], 8 >= rd && (e = "" === e ? c : e), e
                }
                a.style[b] = d
            },
            attr: function(a, b, d) {
                var e = md(b);
                if (Td[e]) {
                    if (!s(d)) return a[b] || (a.attributes.getNamedItem(b) || o).specified ? e : c;
                    d ? (a[b] = !0, a.setAttribute(b, e)) : (a[b] = !1, a.removeAttribute(e))
                } else if (s(d)) a.setAttribute(b, d);
                else if (a.getAttribute) {
                    var f = a.getAttribute(b, 2);
                    return null === f ? c : f
                }
            },
            prop: function(a, b, c) {
                return s(c) ? void(a[b] = c) : a[b]
            },
            text: function() {
                function a(a, c) {
                    var d = b[a.nodeType];
                    return r(c) ? d ? a[d] : "" : void(a[d] = c)
                }
                var b = [];
                return 9 > rd ? (b[1] = "innerText", b[3] = "nodeValue") : b[1] = b[3] = "textContent", a.$dv = "", a
            }(),
            val: function(a, b) {
                if (r(b)) {
                    if ("SELECT" === vd(a) && a.multiple) {
                        var c = [];
                        return f(a.options, function(a) {
                            a.selected && c.push(a.value || a.text)
                        }), 0 === c.length ? null : c
                    }
                    return a.value
                }
                a.value = b
            },
            html: function(a, b) {
                if (r(b)) return a.innerHTML;
                for (var c = 0, d = a.childNodes; c < d.length; c++) qb(d[c]);
                a.innerHTML = b
            },
            empty: Bb
        }, function(a, b) {
            ob.prototype[b] = function(b, d) {
                var e, f, g = this.length;
                if (a !== Bb && (2 == a.length && a !== vb && a !== zb ? b : d) === c) {
                    if (t(b)) {
                        for (e = 0; g > e; e++)
                            if (a === ub) a(this[e], b);
                            else
                                for (f in b) a(this[e], f, b[f]);
                        return this
                    }
                    for (var h = a.$dv, i = h === c ? Math.min(g, 1) : g, j = 0; i > j; j++) {
                        var k = a(this[j], b, d);
                        h = h ? h + k : k
                    }
                    return h
                }
                for (e = 0; g > e; e++) a(this[e], b, d);
                return this
            }
        }), f({
            removeData: sb,
            dealoc: qb,
            on: function Af(a, c, d, e) {
                if (s(e)) throw Md("onargs", "jqLite#on() does not support the `selector` or `eventData` parameters");
                var g = tb(a, "events"),
                    h = tb(a, "handle");
                g || tb(a, "events", g = {}), h || tb(a, "handle", h = Db(a, g)), f(c.split(" "), function(c) {
                    var e = g[c];
                    if (!e) {
                        if ("mouseenter" == c || "mouseleave" == c) {
                            var f = b.body.contains || b.body.compareDocumentPosition ? function(a, b) {
                                var c = 9 === a.nodeType ? a.documentElement : a,
                                    d = b && b.parentNode;
                                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
                            } : function(a, b) {
                                if (b)
                                    for (; b = b.parentNode;)
                                        if (b === a) return !0;
                                return !1
                            };
                            g[c] = [];
                            var i = {
                                mouseleave: "mouseout",
                                mouseenter: "mouseover"
                            };
                            Af(a, i[c], function(a) {
                                var b = this,
                                    d = a.relatedTarget;
                                (!d || d !== b && !f(b, d)) && h(a, c)
                            })
                        } else Id(a, c, h), g[c] = [];
                        e = g[c]
                    }
                    e.push(d)
                })
            },
            off: rb,
            one: function(a, b, c) {
                a = sd(a), a.on(b, function d() {
                    a.off(b, c), a.off(b, d)
                }), a.on(b, c)
            },
            replaceWith: function(a, b) {
                var c, d = a.parentNode;
                qb(a), f(new ob(b), function(b) {
                    c ? d.insertBefore(b, c.nextSibling) : d.replaceChild(b, a), c = b
                })
            },
            children: function(a) {
                var b = [];
                return f(a.childNodes, function(a) {
                    1 === a.nodeType && b.push(a)
                }), b
            },
            contents: function(a) {
                return a.contentDocument || a.childNodes || []
            },
            append: function(a, b) {
                f(new ob(b), function(b) {
                    (1 === a.nodeType || 11 === a.nodeType) && a.appendChild(b)
                })
            },
            prepend: function(a, b) {
                if (1 === a.nodeType) {
                    var c = a.firstChild;
                    f(new ob(b), function(b) {
                        a.insertBefore(b, c)
                    })
                }
            },
            wrap: function(a, b) {
                b = sd(b)[0];
                var c = a.parentNode;
                c && c.replaceChild(b, a), b.appendChild(a)
            },
            remove: function(a) {
                qb(a);
                var b = a.parentNode;
                b && b.removeChild(a)
            },
            after: function(a, b) {
                var c = a,
                    d = a.parentNode;
                f(new ob(b), function(a) {
                    d.insertBefore(a, c.nextSibling), c = a
                })
            },
            addClass: xb,
            removeClass: wb,
            toggleClass: function(a, b, c) {
                b && f(b.split(" "), function(b) {
                    var d = c;
                    r(d) && (d = !vb(a, b)), (d ? xb : wb)(a, b)
                })
            },
            parent: function(a) {
                var b = a.parentNode;
                return b && 11 !== b.nodeType ? b : null
            },
            next: function(a) {
                if (a.nextElementSibling) return a.nextElementSibling;
                for (var b = a.nextSibling; null != b && 1 !== b.nodeType;) b = b.nextSibling;
                return b
            },
            find: function(a, b) {
                return a.getElementsByTagName ? a.getElementsByTagName(b) : []
            },
            clone: pb,
            triggerHandler: function(a, b, c) {
                var d = (tb(a, "events") || {})[b];
                c = c || [];
                var e = [{
                    preventDefault: o,
                    stopPropagation: o
                }];
                f(d, function(b) {
                    b.apply(a, e.concat(c))
                })
            }
        }, function(a, b) {
            ob.prototype[b] = function(b, c, d) {
                for (var e, f = 0; f < this.length; f++) r(e) ? (e = a(this[f], b, c, d), s(e) && (e = sd(e))) : yb(e, a(this[f], b, c, d));
                return s(e) ? e : this
            }, ob.prototype.bind = ob.prototype.on, ob.prototype.unbind = ob.prototype.off
        }), Fb.prototype = {
            put: function(a, b) {
                this[Eb(a, this.nextUid)] = b
            },
            get: function(a) {
                return this[Eb(a, this.nextUid)]
            },
            remove: function(a) {
                var b = this[a = Eb(a, this.nextUid)];
                return delete this[a], b
            }
        };
        var Vd = /^function\s*[^\(]*\(\s*([^\)]*)\)/m,
            Wd = /,/,
            Xd = /^\s*(_?)(\S+?)\1\s*$/,
            Yd = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
            Zd = d("$injector"),
            $d = d("$animate"),
            _d = ["$provide", function(a) {
                this.$$selectors = {}, this.register = function(b, c) {
                    var d = b + "-animation";
                    if (b && "." != b.charAt(0)) throw $d("notcsel", "Expecting class selector starting with '.' got '{0}'.", b);
                    this.$$selectors[b.substr(1)] = d, a.factory(d, c)
                }, this.classNameFilter = function(a) {
                    return 1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null), this.$$classNameFilter
                }, this.$get = ["$timeout", "$$asyncCallback", function(a, b) {
                    function c(a) {
                        a && b(a)
                    }
                    return {
                        enter: function(a, b, d, e) {
                            d ? d.after(a) : (b && b[0] || (b = d.parent()), b.append(a)), c(e)
                        },
                        leave: function(a, b) {
                            a.remove(), c(b)
                        },
                        move: function(a, b, c, d) {
                            this.enter(a, b, c, d)
                        },
                        addClass: function(a, b, d) {
                            b = u(b) ? b : Cd(b) ? b.join(" ") : "", f(a, function(a) {
                                xb(a, b)
                            }), c(d)
                        },
                        removeClass: function(a, b, d) {
                            b = u(b) ? b : Cd(b) ? b.join(" ") : "", f(a, function(a) {
                                wb(a, b)
                            }), c(d)
                        },
                        setClass: function(a, b, d, e) {
                            f(a, function(a) {
                                xb(a, b), wb(a, d)
                            }), c(e)
                        },
                        enabled: o
                    }
                }]
            }],
            ae = d("$compile");
        Ob.$inject = ["$provide", "$$sanitizeUriProvider"];
        var be = /^(x[\:\-_]|data[\:\-_])/i,
            ce = d("$interpolate"),
            de = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
            ee = {
                http: 80,
                https: 443,
                ftp: 21
            },
            fe = d("$location");
        mc.prototype = lc.prototype = kc.prototype = {
            $$html5: !1,
            $$replace: !1,
            absUrl: nc("$$absUrl"),
            url: function(a, b) {
                if (r(a)) return this.$$url;
                var c = de.exec(a);
                return c[1] && this.path(decodeURIComponent(c[1])), (c[2] || c[1]) && this.search(c[3] || ""), this.hash(c[5] || "", b), this
            },
            protocol: nc("$$protocol"),
            host: nc("$$host"),
            port: nc("$$port"),
            path: oc("$$path", function(a) {
                return "/" == a.charAt(0) ? a : "/" + a
            }),
            search: function(a, b) {
                switch (arguments.length) {
                    case 0:
                        return this.$$search;
                    case 1:
                        if (u(a)) this.$$search = V(a);
                        else {
                            if (!t(a)) throw fe("isrcharg", "The first argument of the `$location#search()` call must be a string or an object.");
                            f(a, function(b, c) {
                                null == b && delete a[c]
                            }), this.$$search = a
                        }
                        break;
                    default:
                        r(b) || null === b ? delete this.$$search[a] : this.$$search[a] = b
                }
                return this.$$compose(), this
            },
            hash: oc("$$hash", p),
            replace: function() {
                return this.$$replace = !0, this
            }
        };
        var ge, he = d("$parse"),
            ie = {},
            je = Function.prototype.call,
            ke = Function.prototype.apply,
            le = Function.prototype.bind,
            me = {
                "null": function() {
                    return null
                },
                "true": function() {
                    return !0
                },
                "false": function() {
                    return !1
                },
                undefined: o,
                "+": function(a, b, d, e) {
                    return d = d(a, b), e = e(a, b), s(d) ? s(e) ? d + e : d : s(e) ? e : c
                },
                "-": function(a, b, c, d) {
                    return c = c(a, b), d = d(a, b), (s(c) ? c : 0) - (s(d) ? d : 0)
                },
                "*": function(a, b, c, d) {
                    return c(a, b) * d(a, b)
                },
                "/": function(a, b, c, d) {
                    return c(a, b) / d(a, b)
                },
                "%": function(a, b, c, d) {
                    return c(a, b) % d(a, b)
                },
                "^": function(a, b, c, d) {
                    return c(a, b) ^ d(a, b)
                },
                "=": o,
                "===": function(a, b, c, d) {
                    return c(a, b) === d(a, b)
                },
                "!==": function(a, b, c, d) {
                    return c(a, b) !== d(a, b)
                },
                "==": function(a, b, c, d) {
                    return c(a, b) == d(a, b)
                },
                "!=": function(a, b, c, d) {
                    return c(a, b) != d(a, b)
                },
                "<": function(a, b, c, d) {
                    return c(a, b) < d(a, b)
                },
                ">": function(a, b, c, d) {
                    return c(a, b) > d(a, b)
                },
                "<=": function(a, b, c, d) {
                    return c(a, b) <= d(a, b)
                },
                ">=": function(a, b, c, d) {
                    return c(a, b) >= d(a, b)
                },
                "&&": function(a, b, c, d) {
                    return c(a, b) && d(a, b)
                },
                "||": function(a, b, c, d) {
                    return c(a, b) || d(a, b)
                },
                "&": function(a, b, c, d) {
                    return c(a, b) & d(a, b)
                },
                "|": function(a, b, c, d) {
                    return d(a, b)(a, b, c(a, b))
                },
                "!": function(a, b, c) {
                    return !c(a, b)
                }
            },
            ne = {
                n: "\n",
                f: "\f",
                r: "\r",
                t: "	",
                v: "",
                "'": "'",
                '"': '"'
            },
            oe = function(a) {
                this.options = a
            };
        oe.prototype = {
            constructor: oe,
            lex: function(a) {
                for (this.text = a, this.index = 0, this.ch = c, this.lastCh = ":", this.tokens = []; this.index < this.text.length;) {
                    if (this.ch = this.text.charAt(this.index), this.is("\"'")) this.readString(this.ch);
                    else if (this.isNumber(this.ch) || this.is(".") && this.isNumber(this.peek())) this.readNumber();
                    else if (this.isIdent(this.ch)) this.readIdent();
                    else if (this.is("(){}[].,;:?")) this.tokens.push({
                        index: this.index,
                        text: this.ch
                    }), this.index++;
                    else {
                        if (this.isWhitespace(this.ch)) {
                            this.index++;
                            continue
                        }
                        var b = this.ch + this.peek(),
                            d = b + this.peek(2),
                            e = me[this.ch],
                            f = me[b],
                            g = me[d];
                        g ? (this.tokens.push({
                            index: this.index,
                            text: d,
                            fn: g
                        }), this.index += 3) : f ? (this.tokens.push({
                            index: this.index,
                            text: b,
                            fn: f
                        }), this.index += 2) : e ? (this.tokens.push({
                            index: this.index,
                            text: this.ch,
                            fn: e
                        }), this.index += 1) : this.throwError("Unexpected next character ", this.index, this.index + 1)
                    }
                    this.lastCh = this.ch
                }
                return this.tokens
            },
            is: function(a) {
                return -1 !== a.indexOf(this.ch)
            },
            was: function(a) {
                return -1 !== a.indexOf(this.lastCh)
            },
            peek: function(a) {
                var b = a || 1;
                return this.index + b < this.text.length ? this.text.charAt(this.index + b) : !1
            },
            isNumber: function(a) {
                return a >= "0" && "9" >= a
            },
            isWhitespace: function(a) {
                return " " === a || "\r" === a || "	" === a || "\n" === a || "" === a || " " === a
            },
            isIdent: function(a) {
                return a >= "a" && "z" >= a || a >= "A" && "Z" >= a || "_" === a || "$" === a
            },
            isExpOperator: function(a) {
                return "-" === a || "+" === a || this.isNumber(a)
            },
            throwError: function(a, b, c) {
                c = c || this.index;
                var d = s(b) ? "s " + b + "-" + this.index + " [" + this.text.substring(b, c) + "]" : " " + c;
                throw he("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", a, d, this.text)
            },
            readNumber: function() {
                for (var a = "", b = this.index; this.index < this.text.length;) {
                    var c = md(this.text.charAt(this.index));
                    if ("." == c || this.isNumber(c)) a += c;
                    else {
                        var d = this.peek();
                        if ("e" == c && this.isExpOperator(d)) a += c;
                        else if (this.isExpOperator(c) && d && this.isNumber(d) && "e" == a.charAt(a.length - 1)) a += c;
                        else {
                            if (!this.isExpOperator(c) || d && this.isNumber(d) || "e" != a.charAt(a.length - 1)) break;
                            this.throwError("Invalid exponent")
                        }
                    }
                    this.index++
                }
                a = 1 * a, this.tokens.push({
                    index: b,
                    text: a,
                    literal: !0,
                    constant: !0,
                    fn: function() {
                        return a
                    }
                })
            },
            readIdent: function() {
                for (var a, b, c, d, e = this, f = "", g = this.index; this.index < this.text.length && (d = this.text.charAt(this.index), "." === d || this.isIdent(d) || this.isNumber(d));) "." === d && (a = this.index), f += d, this.index++;
                if (a)
                    for (b = this.index; b < this.text.length;) {
                        if (d = this.text.charAt(b), "(" === d) {
                            c = f.substr(a - g + 1), f = f.substr(0, a - g), this.index = b;
                            break
                        }
                        if (!this.isWhitespace(d)) break;
                        b++
                    }
                var h = {
                    index: g,
                    text: f
                };
                if (me.hasOwnProperty(f)) h.fn = me[f], h.literal = !0, h.constant = !0;
                else {
                    var i = wc(f, this.options, this.text);
                    h.fn = l(function(a, b) {
                        return i(a, b)
                    }, {
                        assign: function(a, b) {
                            return uc(a, f, b, e.text, e.options)
                        }
                    })
                }
                this.tokens.push(h), c && (this.tokens.push({
                    index: a,
                    text: "."
                }), this.tokens.push({
                    index: a + 1,
                    text: c
                }))
            },
            readString: function(a) {
                var b = this.index;
                this.index++;
                for (var c = "", d = a, e = !1; this.index < this.text.length;) {
                    var f = this.text.charAt(this.index);
                    if (d += f, e) {
                        if ("u" === f) {
                            var g = this.text.substring(this.index + 1, this.index + 5);
                            g.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + g + "]"), this.index += 4, c += String.fromCharCode(parseInt(g, 16))
                        } else {
                            var h = ne[f];
                            c += h ? h : f
                        }
                        e = !1
                    } else if ("\\" === f) e = !0;
                    else {
                        if (f === a) return this.index++, void this.tokens.push({
                            index: b,
                            text: d,
                            string: c,
                            literal: !0,
                            constant: !0,
                            fn: function() {
                                return c
                            }
                        });
                        c += f
                    }
                    this.index++
                }
                this.throwError("Unterminated quote", b)
            }
        };
        var pe = function(a, b, c) {
            this.lexer = a, this.$filter = b, this.options = c
        };
        pe.ZERO = l(function() {
            return 0
        }, {
            constant: !0
        }), pe.prototype = {
            constructor: pe,
            parse: function(a) {
                this.text = a, this.tokens = this.lexer.lex(a);
                var b = this.statements();
                return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), b.literal = !!b.literal, b.constant = !!b.constant, b
            },
            primary: function() {
                var a;
                if (this.expect("(")) a = this.filterChain(), this.consume(")");
                else if (this.expect("[")) a = this.arrayDeclaration();
                else if (this.expect("{")) a = this.object();
                else {
                    var b = this.expect();
                    a = b.fn, a || this.throwError("not a primary expression", b), a.literal = !!b.literal, a.constant = !!b.constant
                }
                for (var c, d; c = this.expect("(", "[", ".");) "(" === c.text ? (a = this.functionCall(a, d), d = null) : "[" === c.text ? (d = a, a = this.objectIndex(a)) : "." === c.text ? (d = a, a = this.fieldAccess(a)) : this.throwError("IMPOSSIBLE");
                return a
            },
            throwError: function(a, b) {
                throw he("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", b.text, a, b.index + 1, this.text, this.text.substring(b.index))
            },
            peekToken: function() {
                if (0 === this.tokens.length) throw he("ueoe", "Unexpected end of expression: {0}", this.text);
                return this.tokens[0]
            },
            peek: function(a, b, c, d) {
                if (this.tokens.length > 0) {
                    var e = this.tokens[0],
                        f = e.text;
                    if (f === a || f === b || f === c || f === d || !a && !b && !c && !d) return e
                }
                return !1
            },
            expect: function(a, b, c, d) {
                var e = this.peek(a, b, c, d);
                return e ? (this.tokens.shift(), e) : !1
            },
            consume: function(a) {
                this.expect(a) || this.throwError("is unexpected, expecting [" + a + "]", this.peek())
            },
            unaryFn: function(a, b) {
                return l(function(c, d) {
                    return a(c, d, b)
                }, {
                    constant: b.constant
                })
            },
            ternaryFn: function(a, b, c) {
                return l(function(d, e) {
                    return a(d, e) ? b(d, e) : c(d, e)
                }, {
                    constant: a.constant && b.constant && c.constant
                })
            },
            binaryFn: function(a, b, c) {
                return l(function(d, e) {
                    return b(d, e, a, c)
                }, {
                    constant: a.constant && c.constant
                })
            },
            statements: function() {
                for (var a = [];;)
                    if (this.tokens.length > 0 && !this.peek("}", ")", ";", "]") && a.push(this.filterChain()), !this.expect(";")) return 1 === a.length ? a[0] : function(b, c) {
                        for (var d, e = 0; e < a.length; e++) {
                            var f = a[e];
                            f && (d = f(b, c))
                        }
                        return d
                    }
            },
            filterChain: function() {
                for (var a, b = this.expression();;) {
                    if (!(a = this.expect("|"))) return b;
                    b = this.binaryFn(b, a.fn, this.filter())
                }
            },
            filter: function() {
                for (var a = this.expect(), b = this.$filter(a.text), c = [];;) {
                    if (!(a = this.expect(":"))) {
                        var d = function(a, d, e) {
                            for (var f = [e], g = 0; g < c.length; g++) f.push(c[g](a, d));
                            return b.apply(a, f)
                        };
                        return function() {
                            return d
                        }
                    }
                    c.push(this.expression())
                }
            },
            expression: function() {
                return this.assignment()
            },
            assignment: function() {
                var a, b, c = this.ternary();
                return (b = this.expect("=")) ? (c.assign || this.throwError("implies assignment but [" + this.text.substring(0, b.index) + "] can not be assigned to", b), a = this.ternary(), function(b, d) {
                    return c.assign(b, a(b, d), d)
                }) : c
            },
            ternary: function() {
                var a, b, c = this.logicalOR();
                return (b = this.expect("?")) ? (a = this.ternary(), (b = this.expect(":")) ? this.ternaryFn(c, a, this.ternary()) : void this.throwError("expected :", b)) : c
            },
            logicalOR: function() {
                for (var a, b = this.logicalAND();;) {
                    if (!(a = this.expect("||"))) return b;
                    b = this.binaryFn(b, a.fn, this.logicalAND())
                }
            },
            logicalAND: function() {
                var a, b = this.equality();
                return (a = this.expect("&&")) && (b = this.binaryFn(b, a.fn, this.logicalAND())), b
            },
            equality: function() {
                var a, b = this.relational();
                return (a = this.expect("==", "!=", "===", "!==")) && (b = this.binaryFn(b, a.fn, this.equality())), b
            },
            relational: function() {
                var a, b = this.additive();
                return (a = this.expect("<", ">", "<=", ">=")) && (b = this.binaryFn(b, a.fn, this.relational())), b
            },
            additive: function() {
                for (var a, b = this.multiplicative(); a = this.expect("+", "-");) b = this.binaryFn(b, a.fn, this.multiplicative());
                return b
            },
            multiplicative: function() {
                for (var a, b = this.unary(); a = this.expect("*", "/", "%");) b = this.binaryFn(b, a.fn, this.unary());
                return b
            },
            unary: function() {
                var a;
                return this.expect("+") ? this.primary() : (a = this.expect("-")) ? this.binaryFn(pe.ZERO, a.fn, this.unary()) : (a = this.expect("!")) ? this.unaryFn(a.fn, this.unary()) : this.primary()
            },
            fieldAccess: function(a) {
                var b = this,
                    c = this.expect().text,
                    d = wc(c, this.options, this.text);
                return l(function(b, c, e) {
                    return d(e || a(b, c))
                }, {
                    assign: function(d, e, f) {
                        return uc(a(d, f), c, e, b.text, b.options)
                    }
                })
            },
            objectIndex: function(a) {
                var b = this,
                    d = this.expression();
                return this.consume("]"), l(function(e, f) {
                    var g, h, i = a(e, f),
                        j = d(e, f);
                    return rc(j, b.text), i ? (g = sc(i[j], b.text), g && g.then && b.options.unwrapPromises && (h = g, "$$v" in g || (h.$$v = c, h.then(function(a) {
                        h.$$v = a
                    })), g = g.$$v), g) : c
                }, {
                    assign: function(c, e, f) {
                        var g = d(c, f),
                            h = sc(a(c, f), b.text);
                        return h[g] = e
                    }
                })
            },
            functionCall: function(a, b) {
                var c = [];
                if (")" !== this.peekToken().text)
                    do c.push(this.expression()); while (this.expect(","));
                this.consume(")");
                var d = this;
                return function(e, f) {
                    for (var g = [], h = b ? b(e, f) : e, i = 0; i < c.length; i++) g.push(c[i](e, f));
                    var j = a(e, f, h) || o;
                    sc(h, d.text), tc(j, d.text);
                    var k = j.apply ? j.apply(h, g) : j(g[0], g[1], g[2], g[3], g[4]);
                    return sc(k, d.text)
                }
            },
            arrayDeclaration: function() {
                var a = [],
                    b = !0;
                if ("]" !== this.peekToken().text)
                    do {
                        if (this.peek("]")) break;
                        var c = this.expression();
                        a.push(c), c.constant || (b = !1)
                    } while (this.expect(","));
                return this.consume("]"), l(function(b, c) {
                    for (var d = [], e = 0; e < a.length; e++) d.push(a[e](b, c));
                    return d
                }, {
                    literal: !0,
                    constant: b
                })
            },
            object: function() {
                var a = [],
                    b = !0;
                if ("}" !== this.peekToken().text)
                    do {
                        if (this.peek("}")) break;
                        var c = this.expect(),
                            d = c.string || c.text;
                        this.consume(":");
                        var e = this.expression();
                        a.push({
                            key: d,
                            value: e
                        }), e.constant || (b = !1)
                    } while (this.expect(","));
                return this.consume("}"), l(function(b, c) {
                    for (var d = {}, e = 0; e < a.length; e++) {
                        var f = a[e];
                        d[f.key] = f.value(b, c)
                    }
                    return d
                }, {
                    literal: !0,
                    constant: b
                })
            }
        };
        var qe = {},
            re = d("$sce"),
            se = {
                HTML: "html",
                CSS: "css",
                URL: "url",
                RESOURCE_URL: "resourceUrl",
                JS: "js"
            },
            te = b.createElement("a"),
            ue = Kc(a.location.href, !0);
        Nc.$inject = ["$provide"], Pc.$inject = ["$locale"], Qc.$inject = ["$locale"];
        var ve = ".",
            we = {
                yyyy: Tc("FullYear", 4),
                yy: Tc("FullYear", 2, 0, !0),
                y: Tc("FullYear", 1),
                MMMM: Uc("Month"),
                MMM: Uc("Month", !0),
                MM: Tc("Month", 2, 1),
                M: Tc("Month", 1, 1),
                dd: Tc("Date", 2),
                d: Tc("Date", 1),
                HH: Tc("Hours", 2),
                H: Tc("Hours", 1),
                hh: Tc("Hours", 2, -12),
                h: Tc("Hours", 1, -12),
                mm: Tc("Minutes", 2),
                m: Tc("Minutes", 1),
                ss: Tc("Seconds", 2),
                s: Tc("Seconds", 1),
                sss: Tc("Milliseconds", 3),
                EEEE: Uc("Day"),
                EEE: Uc("Day", !0),
                a: Wc,
                Z: Vc
            },
            xe = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,
            ye = /^\-?\d+$/;
        Xc.$inject = ["$locale"];
        var ze = q(md),
            Ae = q(od);
        $c.$inject = ["$parse"];
        var Be = q({
                restrict: "E",
                compile: function(a, c) {
                    return 8 >= rd && (c.href || c.name || c.$set("href", ""), a.append(b.createComment("IE fix"))), c.href || c.xlinkHref || c.name ? void 0 : function(a, b) {
                        var c = "[object SVGAnimatedString]" === yd.call(b.prop("href")) ? "xlink:href" : "href";
                        b.on("click", function(a) {
                            b.attr(c) || a.preventDefault()
                        })
                    }
                }
            }),
            Ce = {};
        f(Td, function(a, b) {
            if ("multiple" != a) {
                var c = Pb("ng-" + b);
                Ce[c] = function() {
                    return {
                        priority: 100,
                        link: function(a, d, e) {
                            a.$watch(e[c], function(a) {
                                e.$set(b, !!a)
                            })
                        }
                    }
                }
            }
        }), f(["src", "srcset", "href"], function(a) {
            var b = Pb("ng-" + a);
            Ce[b] = function() {
                return {
                    priority: 99,
                    link: function(c, d, e) {
                        var f = a,
                            g = a;
                        "href" === a && "[object SVGAnimatedString]" === yd.call(d.prop("href")) && (g = "xlinkHref", e.$attr[g] = "xlink:href", f = null), e.$observe(b, function(a) {
                            a && (e.$set(g, a), rd && f && d.prop(f, e[g]))
                        })
                    }
                }
            }
        });
        var De = {
            $addControl: o,
            $removeControl: o,
            $setValidity: o,
            $setDirty: o,
            $setPristine: o
        };
        ad.$inject = ["$element", "$attrs", "$scope", "$animate"];
        var Ee = function(a) {
                return ["$timeout", function(b) {
                    var d = {
                        name: "form",
                        restrict: a ? "EAC" : "E",
                        controller: ad,
                        compile: function() {
                            return {
                                pre: function(a, d, e, f) {
                                    if (!e.action) {
                                        var g = function(a) {
                                            a.preventDefault ? a.preventDefault() : a.returnValue = !1
                                        };
                                        Id(d[0], "submit", g), d.on("$destroy", function() {
                                            b(function() {
                                                Jd(d[0], "submit", g)
                                            }, 0, !1)
                                        })
                                    }
                                    var h = d.parent().controller("form"),
                                        i = e.name || e.ngForm;
                                    i && uc(a, i, f, i), h && d.on("$destroy", function() {
                                        h.$removeControl(f), i && uc(a, i, c, i), l(f, De)
                                    })
                                }
                            }
                        }
                    };
                    return d
                }]
            },
            Fe = Ee(),
            Ge = Ee(!0),
            He = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
            Ie = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
            Je = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,
            Ke = {
                text: ed,
                number: fd,
                url: gd,
                email: hd,
                radio: id,
                checkbox: jd,
                hidden: o,
                button: o,
                submit: o,
                reset: o,
                file: o
            },
            Le = ["badInput"],
            Me = ["$browser", "$sniffer", function(a, b) {
                return {
                    restrict: "E",
                    require: "?ngModel",
                    link: function(c, d, e, f) {
                        f && (Ke[md(e.type)] || Ke.text)(c, d, e, f, b, a)
                    }
                }
            }],
            Ne = "ng-valid",
            Oe = "ng-invalid",
            Pe = "ng-pristine",
            Qe = "ng-dirty",
            Re = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", function(a, b, c, e, g, h) {
                function i(a, b) {
                    b = b ? "-" + _(b, "-") : "", h.removeClass(e, (a ? Oe : Ne) + b), h.addClass(e, (a ? Ne : Oe) + b)
                }
                this.$viewValue = Number.NaN, this.$modelValue = Number.NaN, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$name = c.name;
                var j = g(c.ngModel),
                    k = j.assign;
                if (!k) throw d("ngModel")("nonassign", "Expression '{0}' is non-assignable. Element: {1}", c.ngModel, T(e));
                this.$render = o, this.$isEmpty = function(a) {
                    return r(a) || "" === a || null === a || a !== a
                };
                var l = e.inheritedData("$formController") || De,
                    m = 0,
                    n = this.$error = {};
                e.addClass(Pe), i(!0), this.$setValidity = function(a, b) {
                    n[a] !== !b && (b ? (n[a] && m--, m || (i(!0), this.$valid = !0, this.$invalid = !1)) : (i(!1), this.$invalid = !0, this.$valid = !1, m++), n[a] = !b, i(b, a), l.$setValidity(a, b, this))
                }, this.$setPristine = function() {
                    this.$dirty = !1, this.$pristine = !0, h.removeClass(e, Qe), h.addClass(e, Pe)
                }, this.$setViewValue = function(c) {
                    this.$viewValue = c, this.$pristine && (this.$dirty = !0, this.$pristine = !1, h.removeClass(e, Pe), h.addClass(e, Qe), l.$setDirty()), f(this.$parsers, function(a) {
                        c = a(c)
                    }), this.$modelValue !== c && (this.$modelValue = c, k(a, c), f(this.$viewChangeListeners, function(a) {
                        try {
                            a()
                        } catch (c) {
                            b(c)
                        }
                    }))
                };
                var p = this;
                a.$watch(function() {
                    var b = j(a);
                    if (p.$modelValue !== b) {
                        var c = p.$formatters,
                            d = c.length;
                        for (p.$modelValue = b; d--;) b = c[d](b);
                        p.$viewValue !== b && (p.$viewValue = b, p.$render())
                    }
                    return b
                })
            }],
            Se = function() {
                return {
                    require: ["ngModel", "^?form"],
                    controller: Re,
                    link: function(a, b, c, d) {
                        var e = d[0],
                            f = d[1] || De;
                        f.$addControl(e), a.$on("$destroy", function() {
                            f.$removeControl(e)
                        })
                    }
                }
            },
            Te = q({
                require: "ngModel",
                link: function(a, b, c, d) {
                    d.$viewChangeListeners.push(function() {
                        a.$eval(c.ngChange)
                    })
                }
            }),
            Ue = function() {
                return {
                    require: "?ngModel",
                    link: function(a, b, c, d) {
                        if (d) {
                            c.required = !0;
                            var e = function(a) {
                                return c.required && d.$isEmpty(a) ? void d.$setValidity("required", !1) : (d.$setValidity("required", !0), a)
                            };
                            d.$formatters.push(e), d.$parsers.unshift(e), c.$observe("required", function() {
                                e(d.$viewValue)
                            })
                        }
                    }
                }
            },
            Ve = function() {
                return {
                    require: "ngModel",
                    link: function(a, b, d, e) {
                        var g = /\/(.*)\//.exec(d.ngList),
                            h = g && new RegExp(g[1]) || d.ngList || ",",
                            i = function(a) {
                                if (!r(a)) {
                                    var b = [];
                                    return a && f(a.split(h), function(a) {
                                        a && b.push(Dd(a))
                                    }), b
                                }
                            };
                        e.$parsers.push(i), e.$formatters.push(function(a) {
                            return Cd(a) ? a.join(", ") : c
                        }), e.$isEmpty = function(a) {
                            return !a || !a.length
                        }
                    }
                }
            },
            We = /^(true|false|\d+)$/,
            Xe = function() {
                return {
                    priority: 100,
                    compile: function(a, b) {
                        return We.test(b.ngValue) ? function(a, b, c) {
                            c.$set("value", a.$eval(c.ngValue))
                        } : function(a, b, c) {
                            a.$watch(c.ngValue, function(a) {
                                c.$set("value", a)
                            })
                        }
                    }
                }
            },
            Ye = _c({
                compile: function(a) {
                    return a.addClass("ng-binding"),
                        function(a, b, d) {
                            b.data("$binding", d.ngBind), a.$watch(d.ngBind, function(a) {
                                b.text(a == c ? "" : a)
                            })
                        }
                }
            }),
            Ze = ["$interpolate", function(a) {
                return function(b, c, d) {
                    var e = a(c.attr(d.$attr.ngBindTemplate));
                    c.addClass("ng-binding").data("$binding", e), d.$observe("ngBindTemplate", function(a) {
                        c.text(a)
                    })
                }
            }],
            $e = ["$sce", "$parse", function(a, b) {
                return function(c, d, e) {
                    function f() {
                        return (g(c) || "").toString()
                    }
                    d.addClass("ng-binding").data("$binding", e.ngBindHtml);
                    var g = b(e.ngBindHtml);
                    c.$watch(f, function() {
                        d.html(a.getTrustedHtml(g(c)) || "")
                    })
                }
            }],
            _e = kd("", !0),
            af = kd("Odd", 0),
            bf = kd("Even", 1),
            cf = _c({
                compile: function(a, b) {
                    b.$set("ngCloak", c), a.removeClass("ng-cloak")
                }
            }),
            df = [function() {
                return {
                    scope: !0,
                    controller: "@",
                    priority: 500
                }
            }],
            ef = {};
        f("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(a) {
            var b = Pb("ng-" + a);
            ef[b] = ["$parse", function(c) {
                return {
                    compile: function(d, e) {
                        var f = c(e[b]);
                        return function(b, c) {
                            c.on(md(a), function(a) {
                                b.$apply(function() {
                                    f(b, {
                                        $event: a
                                    })
                                })
                            })
                        }
                    }
                }
            }]
        });
        var ff = ["$animate", function(a) {
                return {
                    transclude: "element",
                    priority: 600,
                    terminal: !0,
                    restrict: "A",
                    $$tlb: !0,
                    link: function(c, d, e, f, g) {
                        var h, i, j;
                        c.$watch(e.ngIf, function(f) {
                            S(f) ? i || (i = c.$new(), g(i, function(c) {
                                c[c.length++] = b.createComment(" end ngIf: " + e.ngIf + " "), h = {
                                    clone: c
                                }, a.enter(c, d.parent(), d)
                            })) : (j && (j.remove(), j = null), i && (i.$destroy(), i = null), h && (j = fb(h.clone), a.leave(j, function() {
                                j = null
                            }), h = null))
                        })
                    }
                }
            }],
            gf = ["$http", "$templateCache", "$anchorScroll", "$animate", "$sce", function(a, b, c, d, e) {
                return {
                    restrict: "ECA",
                    priority: 400,
                    terminal: !0,
                    transclude: "element",
                    controller: Ad.noop,
                    compile: function(f, g) {
                        var h = g.ngInclude || g.src,
                            i = g.onload || "",
                            j = g.autoscroll;
                        return function(f, g, k, l, m) {
                            var n, o, p, q = 0,
                                r = function() {
                                    o && (o.remove(), o = null), n && (n.$destroy(), n = null), p && (d.leave(p, function() {
                                        o = null
                                    }), o = p, p = null)
                                };
                            f.$watch(e.parseAsResourceUrl(h), function(e) {
                                var h = function() {
                                        !s(j) || j && !f.$eval(j) || c()
                                    },
                                    k = ++q;
                                e ? (a.get(e, {
                                    cache: b
                                }).success(function(a) {
                                    if (k === q) {
                                        var b = f.$new();
                                        l.template = a;
                                        var c = m(b, function(a) {
                                            r(), d.enter(a, null, g, h)
                                        });
                                        n = b, p = c, n.$emit("$includeContentLoaded"), f.$eval(i)
                                    }
                                }).error(function() {
                                    k === q && r()
                                }), f.$emit("$includeContentRequested")) : (r(), l.template = null)
                            })
                        }
                    }
                }
            }],
            hf = ["$compile", function(a) {
                return {
                    restrict: "ECA",
                    priority: -400,
                    require: "ngInclude",
                    link: function(b, c, d, e) {
                        c.html(e.template), a(c.contents())(b)
                    }
                }
            }],
            jf = _c({
                priority: 450,
                compile: function() {
                    return {
                        pre: function(a, b, c) {
                            a.$eval(c.ngInit)
                        }
                    }
                }
            }),
            kf = _c({
                terminal: !0,
                priority: 1e3
            }),
            lf = ["$locale", "$interpolate", function(a, b) {
                var c = /{}/g;
                return {
                    restrict: "EA",
                    link: function(d, e, g) {
                        var h = g.count,
                            i = g.$attr.when && e.attr(g.$attr.when),
                            j = g.offset || 0,
                            k = d.$eval(i) || {},
                            l = {},
                            m = b.startSymbol(),
                            n = b.endSymbol(),
                            o = /^when(Minus)?(.+)$/;
                        f(g, function(a, b) {
                            o.test(b) && (k[md(b.replace("when", "").replace("Minus", "-"))] = e.attr(g.$attr[b]))
                        }), f(k, function(a, d) {
                            l[d] = b(a.replace(c, m + h + "-" + j + n))
                        }), d.$watch(function() {
                            var b = parseFloat(d.$eval(h));
                            return isNaN(b) ? "" : (b in k || (b = a.pluralCat(b - j)), l[b](d, e, !0))
                        }, function(a) {
                            e.text(a)
                        })
                    }
                }
            }],
            mf = ["$parse", "$animate", function(a, c) {
                function g(a) {
                    return a.clone[0]
                }

                function h(a) {
                    return a.clone[a.clone.length - 1]
                }
                var i = "$$NG_REMOVED",
                    j = d("ngRepeat");
                return {
                    transclude: "element",
                    priority: 1e3,
                    terminal: !0,
                    $$tlb: !0,
                    link: function(d, k, l, m, n) {
                        var o, p, q, r, s, t, u, v, w, x = l.ngRepeat,
                            y = x.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),
                            z = {
                                $id: Eb
                            };
                        if (!y) throw j("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", x);
                        if (t = y[1], u = y[2], o = y[3], o ? (p = a(o), q = function(a, b, c) {
                                return w && (z[w] = a), z[v] = b, z.$index = c, p(d, z)
                            }) : (r = function(a, b) {
                                return Eb(b)
                            }, s = function(a) {
                                return a
                            }), y = t.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/), !y) throw j("iidexp", "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", t);
                        v = y[3] || y[1], w = y[2];
                        var A = {};
                        d.$watchCollection(u, function(a) {
                            var l, m, o, p, t, u, y, z, B, C, D, E, F = k[0],
                                G = {},
                                H = [];
                            if (e(a)) C = a, B = q || r;
                            else {
                                B = q || s, C = [];
                                for (u in a) a.hasOwnProperty(u) && "$" != u.charAt(0) && C.push(u);
                                C.sort()
                            }
                            for (p = C.length, m = H.length = C.length, l = 0; m > l; l++)
                                if (u = a === C ? l : C[l], y = a[u], z = B(u, y, l), db(z, "`track by` id"), A.hasOwnProperty(z)) D = A[z], delete A[z], G[z] = D, H[l] = D;
                                else {
                                    if (G.hasOwnProperty(z)) throw f(H, function(a) {
                                        a && a.scope && (A[a.id] = a)
                                    }), j("dupes", "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}", x, z);
                                    H[l] = {
                                        id: z
                                    }, G[z] = !1
                                } for (u in A) A.hasOwnProperty(u) && (D = A[u], E = fb(D.clone), c.leave(E), f(E, function(a) {
                                a[i] = !0
                            }), D.scope.$destroy());
                            for (l = 0, m = C.length; m > l; l++) {
                                if (u = a === C ? l : C[l], y = a[u], D = H[l], H[l - 1] && (F = h(H[l - 1])), D.scope) {
                                    t = D.scope, o = F;
                                    do o = o.nextSibling; while (o && o[i]);
                                    g(D) != o && c.move(fb(D.clone), null, sd(F)), F = h(D)
                                } else t = d.$new();
                                t[v] = y, w && (t[w] = u), t.$index = l, t.$first = 0 === l, t.$last = l === p - 1, t.$middle = !(t.$first || t.$last), t.$odd = !(t.$even = 0 === (1 & l)), D.scope || n(t, function(a) {
                                    a[a.length++] = b.createComment(" end ngRepeat: " + x + " "), c.enter(a, null, sd(F)), F = a, D.scope = t, D.clone = a, G[D.id] = D
                                })
                            }
                            A = G
                        })
                    }
                }
            }],
            nf = ["$animate", function(a) {
                return function(b, c, d) {
                    b.$watch(d.ngShow, function(b) {
                        a[S(b) ? "removeClass" : "addClass"](c, "ng-hide")
                    })
                }
            }],
            of = ["$animate", function(a) {
                return function(b, c, d) {
                    b.$watch(d.ngHide, function(b) {
                        a[S(b) ? "addClass" : "removeClass"](c, "ng-hide")
                    })
                }
            }],
            pf = _c(function(a, b, c) {
                a.$watch(c.ngStyle, function(a, c) {
                    c && a !== c && f(c, function(a, c) {
                        b.css(c, "")
                    }), a && b.css(a)
                }, !0)
            }),
            qf = ["$animate", function(a) {
                return {
                    restrict: "EA",
                    require: "ngSwitch",
                    controller: ["$scope", function() {
                        this.cases = {}
                    }],
                    link: function(b, c, d, e) {
                        var g = d.ngSwitch || d.on,
                            h = [],
                            i = [],
                            j = [],
                            k = [];
                        b.$watch(g, function(c) {
                            var g, l;
                            for (g = 0, l = j.length; l > g; ++g) j[g].remove();
                            for (j.length = 0, g = 0, l = k.length; l > g; ++g) {
                                var m = i[g];
                                k[g].$destroy(), j[g] = m, a.leave(m, function() {
                                    j.splice(g, 1)
                                })
                            }
                            i.length = 0, k.length = 0, (h = e.cases["!" + c] || e.cases["?"]) && (b.$eval(d.change), f(h, function(c) {
                                var d = b.$new();
                                k.push(d), c.transclude(d, function(b) {
                                    var d = c.element;
                                    i.push(b), a.enter(b, d.parent(), d)
                                })
                            }))
                        })
                    }
                }
            }],
            rf = _c({
                transclude: "element",
                priority: 800,
                require: "^ngSwitch",
                link: function(a, b, c, d, e) {
                    d.cases["!" + c.ngSwitchWhen] = d.cases["!" + c.ngSwitchWhen] || [], d.cases["!" + c.ngSwitchWhen].push({
                        transclude: e,
                        element: b
                    })
                }
            }),
            sf = _c({
                transclude: "element",
                priority: 800,
                require: "^ngSwitch",
                link: function(a, b, c, d, e) {
                    d.cases["?"] = d.cases["?"] || [], d.cases["?"].push({
                        transclude: e,
                        element: b
                    })
                }
            }),
            tf = _c({
                link: function(a, b, c, e, f) {
                    if (!f) throw d("ngTransclude")("orphan", "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}", T(b));
                    f(function(a) {
                        b.empty(), b.append(a)
                    })
                }
            }),
            uf = ["$templateCache", function(a) {
                return {
                    restrict: "E",
                    terminal: !0,
                    compile: function(b, c) {
                        if ("text/ng-template" == c.type) {
                            var d = c.id,
                                e = b[0].text;
                            a.put(d, e)
                        }
                    }
                }
            }],
            vf = d("ngOptions"),
            wf = q({
                terminal: !0
            }),
            xf = ["$compile", "$parse", function(a, d) {
                var e = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
                    h = {
                        $setViewValue: o
                    };
                return {
                    restrict: "E",
                    require: ["select", "?ngModel"],
                    controller: ["$element", "$scope", "$attrs", function(a, b, c) {
                        var d, e, f = this,
                            g = {},
                            i = h;
                        f.databound = c.ngModel, f.init = function(a, b, c) {
                            i = a, d = b, e = c
                        }, f.addOption = function(b) {
                            db(b, '"option value"'), g[b] = !0, i.$viewValue == b && (a.val(b), e.parent() && e.remove())
                        }, f.removeOption = function(a) {
                            this.hasOption(a) && (delete g[a], i.$viewValue == a && this.renderUnknownOption(a))
                        }, f.renderUnknownOption = function(b) {
                            var c = "? " + Eb(b) + " ?";
                            e.val(c), a.prepend(e), a.val(c), e.prop("selected", !0)
                        }, f.hasOption = function(a) {
                            return g.hasOwnProperty(a)
                        }, b.$on("$destroy", function() {
                            f.renderUnknownOption = o
                        })
                    }],
                    link: function(h, i, j, k) {
                        function l(a, b, c, d) {
                            c.$render = function() {
                                var a = c.$viewValue;
                                d.hasOption(a) ? (y.parent() && y.remove(), b.val(a), "" === a && o.prop("selected", !0)) : r(a) && o ? b.val("") : d.renderUnknownOption(a)
                            }, b.on("change", function() {
                                a.$apply(function() {
                                    y.parent() && y.remove(), c.$setViewValue(b.val())
                                })
                            })
                        }

                        function m(a, b, c) {
                            var d;
                            c.$render = function() {
                                var a = new Fb(c.$viewValue);
                                f(b.find("option"), function(b) {
                                    b.selected = s(a.get(b.value))
                                })
                            }, a.$watch(function() {
                                K(d, c.$viewValue) || (d = J(c.$viewValue), c.$render())
                            }), b.on("change", function() {
                                a.$apply(function() {
                                    var a = [];
                                    f(b.find("option"), function(b) {
                                        b.selected && a.push(b.value)
                                    }), c.$setViewValue(a)
                                })
                            })
                        }

                        function n(b, f, h) {
                            function i() {
                                var a, c, d, e, i, j, q, u, z, A, B, C, D, E, F, G = {
                                        "": []
                                    },
                                    H = [""],
                                    I = h.$modelValue,
                                    J = p(b) || [],
                                    K = m ? g(J) : J,
                                    L = {},
                                    M = !1;
                                if (t)
                                    if (r && Cd(I)) {
                                        M = new Fb([]);
                                        for (var N = 0; N < I.length; N++) L[l] = I[N], M.put(r(b, L), I[N])
                                    } else M = new Fb(I);
                                for (B = 0; z = K.length, z > B; B++) {
                                    if (q = B, m) {
                                        if (q = K[B], "$" === q.charAt(0)) continue;
                                        L[m] = q
                                    }
                                    if (L[l] = J[q], a = n(b, L) || "", (c = G[a]) || (c = G[a] = [], H.push(a)), t) C = s(M.remove(r ? r(b, L) : o(b, L)));
                                    else {
                                        if (r) {
                                            var O = {};
                                            O[l] = I, C = r(b, O) === r(b, L)
                                        } else C = I === o(b, L);
                                        M = M || C
                                    }
                                    F = k(b, L), F = s(F) ? F : "", c.push({
                                        id: r ? r(b, L) : m ? K[B] : B,
                                        label: F,
                                        selected: C
                                    })
                                }
                                for (t || (v || null === I ? G[""].unshift({
                                        id: "",
                                        label: "",
                                        selected: !M
                                    }) : M || G[""].unshift({
                                        id: "?",
                                        label: "",
                                        selected: !0
                                    })), A = 0, u = H.length; u > A; A++) {
                                    for (a = H[A], c = G[a], y.length <= A ? (e = {
                                            element: x.clone().attr("label", a),
                                            label: c.label
                                        }, i = [e], y.push(i), f.append(e.element)) : (i = y[A], e = i[0], e.label != a && e.element.attr("label", e.label = a)), D = null, B = 0, z = c.length; z > B; B++) d = c[B], (j = i[B + 1]) ? (D = j.element, j.label !== d.label && D.text(j.label = d.label), j.id !== d.id && D.val(j.id = d.id), j.selected !== d.selected && D.prop("selected", j.selected = d.selected)) : ("" === d.id && v ? E = v : (E = w.clone()).val(d.id).prop("selected", d.selected).text(d.label), i.push(j = {
                                        element: E,
                                        label: d.label,
                                        id: d.id,
                                        selected: d.selected
                                    }), D ? D.after(E) : e.element.append(E), D = E);
                                    for (B++; i.length > B;) i.pop().element.remove()
                                }
                                for (; y.length > A;) y.pop()[0].element.remove()
                            }
                            var j;
                            if (!(j = u.match(e))) throw vf("iexp", "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}", u, T(f));
                            var k = d(j[2] || j[1]),
                                l = j[4] || j[6],
                                m = j[5],
                                n = d(j[3] || ""),
                                o = d(j[2] ? j[1] : l),
                                p = d(j[7]),
                                q = j[8],
                                r = q ? d(j[8]) : null,
                                y = [
                                    [{
                                        element: f,
                                        label: ""
                                    }]
                                ];
                            v && (a(v)(b), v.removeClass("ng-scope"), v.remove()), f.empty(), f.on("change", function() {
                                b.$apply(function() {
                                    var a, d, e, g, i, j, k, n, q, s = p(b) || [],
                                        u = {};
                                    if (t) {
                                        for (e = [], j = 0, n = y.length; n > j; j++)
                                            for (a = y[j], i = 1, k = a.length; k > i; i++)
                                                if ((g = a[i].element)[0].selected) {
                                                    if (d = g.val(), m && (u[m] = d), r)
                                                        for (q = 0; q < s.length && (u[l] = s[q], r(b, u) != d); q++);
                                                    else u[l] = s[d];
                                                    e.push(o(b, u))
                                                }
                                    } else {
                                        if (d = f.val(), "?" == d) e = c;
                                        else if ("" === d) e = null;
                                        else if (r) {
                                            for (q = 0; q < s.length; q++)
                                                if (u[l] = s[q], r(b, u) == d) {
                                                    e = o(b, u);
                                                    break
                                                }
                                        } else u[l] = s[d], m && (u[m] = d), e = o(b, u);
                                        y[0].length > 1 && y[0][1].id !== d && (y[0][1].selected = !1)
                                    }
                                    h.$setViewValue(e)
                                })
                            }), h.$render = i, b.$watch(i)
                        }
                        if (k[1]) {
                            for (var o, p = k[0], q = k[1], t = j.multiple, u = j.ngOptions, v = !1, w = sd(b.createElement("option")), x = sd(b.createElement("optgroup")), y = w.clone(), z = 0, A = i.children(), B = A.length; B > z; z++)
                                if ("" === A[z].value) {
                                    o = v = A.eq(z);
                                    break
                                } p.init(q, v, y), t && (q.$isEmpty = function(a) {
                                return !a || 0 === a.length
                            }), u ? n(h, i, q) : t ? m(h, i, q) : l(h, i, q, p)
                        }
                    }
                }
            }],
            yf = ["$interpolate", function(a) {
                var b = {
                    addOption: o,
                    removeOption: o
                };
                return {
                    restrict: "E",
                    priority: 100,
                    compile: function(c, d) {
                        if (r(d.value)) {
                            var e = a(c.text(), !0);
                            e || d.$set("value", c.text())
                        }
                        return function(a, c, d) {
                            var f = "$selectController",
                                g = c.parent(),
                                h = g.data(f) || g.parent().data(f);
                            h && h.databound ? c.prop("selected", !1) : h = b, e ? a.$watch(e, function(a, b) {
                                d.$set("value", a), a !== b && h.removeOption(b), h.addOption(a)
                            }) : h.addOption(d.value), c.on("$destroy", function() {
                                h.removeOption(d.value)
                            })
                        }
                    }
                }
            }],
            zf = q({
                restrict: "E",
                terminal: !0
            });
        return a.angular.bootstrap ? void console.log("WARNING: Tried to load angular more than once.") : (ab(), hb(Ad), void sd(b).ready(function() {
            Z(b, $)
        }))
    }(window, document), !window.angular.$$csp() && window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}.ng-hide-add-active,.ng-hide-remove{display:block!important;}</style>'),
    function(a, b, c) {
        "use strict";
        b.module("ngAnimate", ["ng"]).directive("ngAnimateChildren", function() {
            var a = "$$ngAnimateChildren";
            return function(c, d, e) {
                var f = e.ngAnimateChildren;
                b.isString(f) && 0 === f.length ? d.data(a, !0) : c.$watch(f, function(b) {
                    d.data(a, !!b)
                })
            }
        }).factory("$$animateReflow", ["$$rAF", "$document", function(a, b) {
            var c = b[0].body;
            return function(b) {
                return a(function() {
                    c.offsetWidth + 1;
                    b()
                })
            }
        }]).config(["$provide", "$animateProvider", function(d, e) {
            function f(a) {
                for (var b = 0; b < a.length; b++) {
                    var c = a[b];
                    if (c.nodeType == m) return c
                }
            }

            function g(a) {
                return a && b.element(a)
            }

            function h(a) {
                return b.element(f(a))
            }

            function i(a, b) {
                return f(a) == f(b)
            }
            var j = b.noop,
                k = b.forEach,
                l = e.$$selectors,
                m = 1,
                n = "$$ngAnimateState",
                o = "$$ngAnimateChildren",
                p = "ng-animate",
                q = {
                    running: !0
                };
            d.decorator("$animate", ["$delegate", "$injector", "$sniffer", "$rootElement", "$$asyncCallback", "$rootScope", "$document", function(a, c, d, m, r, s) {
                function t(a) {
                    var b = a.data(n) || {};
                    b.running = !0, a.data(n, b)
                }

                function u(a) {
                    if (a) {
                        var b = [],
                            e = {},
                            f = a.substr(1).split(".");
                        (d.transitions || d.animations) && b.push(c.get(l[""]));
                        for (var g = 0; g < f.length; g++) {
                            var h = f[g],
                                i = l[h];
                            i && !e[h] && (b.push(c.get(i)), e[h] = !0)
                        }
                        return b
                    }
                }

                function v(a, c, d) {
                    function e(a, b) {
                        var c = a[b],
                            d = a["before" + b.charAt(0).toUpperCase() + b.substr(1)];
                        return c || d ? ("leave" == b && (d = c, c = null), v.push({
                            event: b,
                            fn: c
                        }), r.push({
                            event: b,
                            fn: d
                        }), !0) : void 0
                    }

                    function f(b, c, e) {
                        function f(a) {
                            if (c) {
                                if ((c[a] || j)(), ++l < g.length) return;
                                c = null
                            }
                            e()
                        }
                        var g = [];
                        k(b, function(a) {
                            a.fn && g.push(a)
                        });
                        var l = 0;
                        k(g, function(b, e) {
                            var g = function() {
                                f(e)
                            };
                            switch (b.event) {
                                case "setClass":
                                    c.push(b.fn(a, h, i, g));
                                    break;
                                case "addClass":
                                    c.push(b.fn(a, h || d, g));
                                    break;
                                case "removeClass":
                                    c.push(b.fn(a, i || d, g));
                                    break;
                                default:
                                    c.push(b.fn(a, g))
                            }
                        }), c && 0 === c.length && e()
                    }
                    var g = a[0];
                    if (g) {
                        var h, i, l = "setClass" == c,
                            m = l || "addClass" == c || "removeClass" == c;
                        b.isArray(d) && (h = d[0], i = d[1], d = h + " " + i);
                        var n = a.attr("class"),
                            o = n + " " + d;
                        if (C(o)) {
                            var p = j,
                                q = [],
                                r = [],
                                s = j,
                                t = [],
                                v = [],
                                w = (" " + o).replace(/\s+/g, ".");
                            return k(u(w), function(a) {
                                var b = e(a, c);
                                !b && l && (e(a, "addClass"), e(a, "removeClass"))
                            }), {
                                node: g,
                                event: c,
                                className: d,
                                isClassBased: m,
                                isSetClassOperation: l,
                                before: function(a) {
                                    p = a, f(r, q, function() {
                                        p = j, a()
                                    })
                                },
                                after: function(a) {
                                    s = a, f(v, t, function() {
                                        s = j, a()
                                    })
                                },
                                cancel: function() {
                                    q && (k(q, function(a) {
                                        (a || j)(!0)
                                    }), p(!0)), t && (k(t, function(a) {
                                        (a || j)(!0)
                                    }), s(!0))
                                }
                            }
                        }
                    }
                }

                function w(a, c, d, e, f, g, h) {
                    function i(b) {
                        var e = "$animate:" + b;
                        t && t[e] && t[e].length > 0 && r(function() {
                            d.triggerHandler(e, {
                                event: a,
                                className: c
                            })
                        })
                    }

                    function j() {
                        i("before")
                    }

                    function l() {
                        i("after")
                    }

                    function m() {
                        i("close"), h && r(function() {
                            h()
                        })
                    }

                    function o() {
                        o.hasBeenRun || (o.hasBeenRun = !0, g())
                    }

                    function q() {
                        if (!q.hasBeenRun) {
                            q.hasBeenRun = !0;
                            var b = d.data(n);
                            b && (s && s.isClassBased ? y(d, c) : (r(function() {
                                var b = d.data(n) || {};
                                H == b.index && y(d, c, a)
                            }), d.data(n, b))), m()
                        }
                    }
                    var s = v(d, a, c);
                    if (!s) return o(), j(), l(), void q();
                    c = s.className;
                    var t = b.element._data(s.node);
                    t = t && t.events, e || (e = f ? f.parent() : d.parent());
                    var u, w = d.data(n) || {},
                        x = w.active || {},
                        B = w.totalActive || 0,
                        C = w.last;
                    if (s.isClassBased && (u = w.running || w.disabled || C && !C.isClassBased), u || z(d, e)) return o(), j(), l(), void q();
                    var D = !1;
                    if (B > 0) {
                        var E = [];
                        if (s.isClassBased) {
                            if ("setClass" == C.event) E.push(C), y(d, c);
                            else if (x[c]) {
                                var F = x[c];
                                F.event == a ? D = !0 : (E.push(F), y(d, c))
                            }
                        } else if ("leave" == a && x["ng-leave"]) D = !0;
                        else {
                            for (var G in x) E.push(x[G]), y(d, G);
                            x = {}, B = 0
                        }
                        E.length > 0 && k(E, function(a) {
                            a.cancel()
                        })
                    }
                    if (!s.isClassBased || s.isSetClassOperation || D || (D = "addClass" == a == d.hasClass(c)), D) return o(), j(), l(), void m();
                    "leave" == a && d.one("$destroy", function() {
                        var a = b.element(this),
                            c = a.data(n);
                        if (c) {
                            var d = c.active["ng-leave"];
                            d && (d.cancel(), y(a, "ng-leave"))
                        }
                    }), d.addClass(p);
                    var H = A++;
                    B++, x[c] = s, d.data(n, {
                        last: s,
                        active: x,
                        index: H,
                        totalActive: B
                    }), j(), s.before(function(b) {
                        var e = d.data(n);
                        b = b || !e || !e.active[c] || s.isClassBased && e.active[c].event != a, o(), b === !0 ? q() : (l(), s.after(q))
                    })
                }

                function x(a) {
                    var c = f(a);
                    if (c) {
                        var d = b.isFunction(c.getElementsByClassName) ? c.getElementsByClassName(p) : c.querySelectorAll("." + p);
                        k(d, function(a) {
                            a = b.element(a);
                            var c = a.data(n);
                            c && c.active && k(c.active, function(a) {
                                a.cancel()
                            })
                        })
                    }
                }

                function y(a, b) {
                    if (i(a, m)) q.disabled || (q.running = !1, q.structural = !1);
                    else if (b) {
                        var c = a.data(n) || {},
                            d = b === !0;
                        !d && c.active && c.active[b] && (c.totalActive--, delete c.active[b]), (d || !c.totalActive) && (a.removeClass(p), a.removeData(n))
                    }
                }

                function z(a, c) {
                    if (q.disabled) return !0;
                    if (i(a, m)) return q.running;
                    var d, e, f;
                    do {
                        if (0 === c.length) break;
                        var g = i(c, m),
                            h = g ? q : c.data(n) || {};
                        if (h.disabled) return !0;
                        if (g && (f = !0), d !== !1) {
                            var j = c.data(o);
                            b.isDefined(j) && (d = j)
                        }
                        e = e || h.running || h.last && !h.last.isClassBased
                    } while (c = c.parent());
                    return !f || !d && e
                }
                var A = 0;
                m.data(n, q), s.$$postDigest(function() {
                    s.$$postDigest(function() {
                        q.running = !1
                    })
                });
                var B = e.classNameFilter(),
                    C = B ? function(a) {
                        return B.test(a)
                    } : function() {
                        return !0
                    };
                return {
                    enter: function(c, d, e, f) {
                        c = b.element(c), d = g(d), e = g(e), t(c), a.enter(c, d, e), s.$$postDigest(function() {
                            c = h(c), w("enter", "ng-enter", c, d, e, j, f)
                        })
                    },
                    leave: function(c, d) {
                        c = b.element(c), x(c), t(c), s.$$postDigest(function() {
                            w("leave", "ng-leave", h(c), null, null, function() {
                                a.leave(c)
                            }, d)
                        })
                    },
                    move: function(c, d, e, f) {
                        c = b.element(c), d = g(d), e = g(e), x(c), t(c), a.move(c, d, e), s.$$postDigest(function() {
                            c = h(c), w("move", "ng-move", c, d, e, j, f)
                        })
                    },
                    addClass: function(c, d, e) {
                        c = b.element(c), c = h(c), w("addClass", d, c, null, null, function() {
                            a.addClass(c, d)
                        }, e)
                    },
                    removeClass: function(c, d, e) {
                        c = b.element(c), c = h(c), w("removeClass", d, c, null, null, function() {
                            a.removeClass(c, d)
                        }, e)
                    },
                    setClass: function(c, d, e, f) {
                        c = b.element(c), c = h(c), w("setClass", [d, e], c, null, null, function() {
                            a.setClass(c, d, e)
                        }, f)
                    },
                    enabled: function(a, b) {
                        switch (arguments.length) {
                            case 2:
                                if (a) y(b);
                                else {
                                    var c = b.data(n) || {};
                                    c.disabled = !0, b.data(n, c)
                                }
                                break;
                            case 1:
                                q.disabled = !a;
                                break;
                            default:
                                a = !q.disabled
                        }
                        return !!a
                    }
                }
            }]), e.register("", ["$window", "$sniffer", "$timeout", "$$animateReflow", function(d, e, g, h) {
                function i(a, b) {
                    J && J(), W.push(b), J = h(function() {
                        k(W, function(a) {
                            a()
                        }), W = [], J = null, U = {}
                    })
                }

                function l(a, c) {
                    var d = f(a);
                    a = b.element(d), Z.push(a);
                    var e = Date.now() + c;
                    Y >= e || (g.cancel(X), Y = e, X = g(function() {
                        n(Z), Z = []
                    }, c, !1))
                }

                function n(a) {
                    k(a, function(a) {
                        var b = a.data(P);
                        b && (b.closeAnimationFn || j)()
                    })
                }

                function o(a, b) {
                    var c = b ? U[b] : null;
                    if (!c) {
                        var e, f, g, h, i = 0,
                            j = 0,
                            l = 0,
                            n = 0;
                        k(a, function(a) {
                            if (a.nodeType == m) {
                                var b = d.getComputedStyle(a) || {};
                                g = b[E + K], i = Math.max(p(g), i), h = b[E + L], e = b[E + M], j = Math.max(p(e), j), f = b[G + M], n = Math.max(p(f), n);
                                var c = p(b[G + K]);
                                c > 0 && (c *= parseInt(b[G + N], 10) || 1), l = Math.max(c, l)
                            }
                        }), c = {
                            total: 0,
                            transitionPropertyStyle: h,
                            transitionDurationStyle: g,
                            transitionDelayStyle: e,
                            transitionDelay: j,
                            transitionDuration: i,
                            animationDelayStyle: f,
                            animationDelay: n,
                            animationDuration: l
                        }, b && (U[b] = c)
                    }
                    return c
                }

                function p(a) {
                    var c = 0,
                        d = b.isString(a) ? a.split(/\s*,\s*/) : [];
                    return k(d, function(a) {
                        c = Math.max(parseFloat(a) || 0, c)
                    }), c
                }

                function q(a) {
                    var b = a.parent(),
                        c = b.data(O);
                    return c || (b.data(O, ++V), c = V), c + "-" + f(a).getAttribute("class")
                }

                function r(a, b, c, d) {
                    var e = q(b),
                        f = e + " " + c,
                        g = U[f] ? ++U[f].total : 0,
                        h = {};
                    if (g > 0) {
                        var i = c + "-stagger",
                            k = e + " " + i,
                            l = !U[k];
                        l && b.addClass(i), h = o(b, k), l && b.removeClass(i)
                    }
                    d = d || function(a) {
                        return a()
                    }, b.addClass(c);
                    var m = b.data(P) || {},
                        n = d(function() {
                            return o(b, f)
                        }),
                        p = n.transitionDuration,
                        r = n.animationDuration;
                    if (0 === p && 0 === r) return b.removeClass(c), !1;
                    b.data(P, {
                        running: m.running || 0,
                        itemIndex: g,
                        stagger: h,
                        timings: n,
                        closeAnimationFn: j
                    });
                    var s = m.running > 0 || "setClass" == a;
                    return p > 0 && t(b, c, s), r > 0 && h.animationDelay > 0 && 0 === h.animationDuration && u(b), !0
                }

                function s(a) {
                    return "ng-enter" == a || "ng-move" == a || "ng-leave" == a
                }

                function t(a, b, c) {
                    s(b) || !c ? f(a).style[E + L] = "none" : a.addClass(Q)
                }

                function u(a) {
                    f(a).style[G] = "none 0s"
                }

                function v(a) {
                    var b = E + L,
                        c = f(a);
                    c.style[b] && c.style[b].length > 0 && (c.style[b] = ""), a.removeClass(Q)
                }

                function w(a) {
                    var b = G,
                        c = f(a);
                    c.style[b] && c.style[b].length > 0 && (c.style[b] = "")
                }

                function x(a, b, c, d) {
                    function e() {
                        b.off(t, g), b.removeClass(j), C(b, c);
                        var a = f(b);
                        for (var d in v) a.style.removeProperty(v[d])
                    }

                    function g(a) {
                        a.stopPropagation();
                        var b = a.originalEvent || a,
                            c = b.$manualTimeStamp || b.timeStamp || Date.now(),
                            e = parseFloat(b.elapsedTime.toFixed(R));
                        Math.max(c - s, 0) >= r && e >= p && d()
                    }
                    var h = f(b),
                        i = b.data(P);
                    if (-1 == h.getAttribute("class").indexOf(c) || !i) return void d();
                    var j = "";
                    k(c.split(" "), function(a, b) {
                        j += (b > 0 ? " " : "") + a + "-active"
                    });
                    var m = i.stagger,
                        n = i.timings,
                        o = i.itemIndex,
                        p = Math.max(n.transitionDuration, n.animationDuration),
                        q = Math.max(n.transitionDelay, n.animationDelay),
                        r = q * T,
                        s = Date.now(),
                        t = H + " " + F,
                        u = "",
                        v = [];
                    if (n.transitionDuration > 0) {
                        var w = n.transitionPropertyStyle; - 1 == w.indexOf("all") && (u += I + "transition-property: " + w + ";", u += I + "transition-duration: " + n.transitionDurationStyle + ";", v.push(I + "transition-property"), v.push(I + "transition-duration"))
                    }
                    if (o > 0) {
                        if (m.transitionDelay > 0 && 0 === m.transitionDuration) {
                            var x = n.transitionDelayStyle;
                            u += I + "transition-delay: " + y(x, m.transitionDelay, o) + "; ", v.push(I + "transition-delay")
                        }
                        m.animationDelay > 0 && 0 === m.animationDuration && (u += I + "animation-delay: " + y(n.animationDelayStyle, m.animationDelay, o) + "; ", v.push(I + "animation-delay"))
                    }
                    if (v.length > 0) {
                        var z = h.getAttribute("style") || "";
                        h.setAttribute("style", z + "; " + u)
                    }
                    b.on(t, g), b.addClass(j), i.closeAnimationFn = function() {
                        e(), d()
                    };
                    var A = o * (Math.max(m.animationDelay, m.transitionDelay) || 0),
                        B = (q + p) * S,
                        D = (A + B) * T;
                    return i.running++, l(b, D), e
                }

                function y(a, b, c) {
                    var d = "";
                    return k(a.split(","), function(a, e) {
                        d += (e > 0 ? "," : "") + (c * b + parseInt(a, 10)) + "s"
                    }), d
                }

                function z(a, b, c, d) {
                    return r(a, b, c, d) ? function(a) {
                        a && C(b, c)
                    } : void 0
                }

                function A(a, b, c, d) {
                    return b.data(P) ? x(a, b, c, d) : (C(b, c), void d())
                }

                function B(a, b, c, d) {
                    var e = z(a, b, c);
                    if (!e) return void d();
                    var f = e;
                    return i(b, function() {
                            v(b, c), w(b), f = A(a, b, c, d)
                        }),
                        function(a) {
                            (f || j)(a)
                        }
                }

                function C(a, b) {
                    a.removeClass(b);
                    var c = a.data(P);
                    c && (c.running && c.running--, c.running && 0 !== c.running || a.removeData(P))
                }

                function D(a, c) {
                    var d = "";
                    return a = b.isArray(a) ? a : a.split(/\s+/), k(a, function(a, b) {
                        a && a.length > 0 && (d += (b > 0 ? " " : "") + a + c)
                    }), d
                }
                var E, F, G, H, I = "";
                a.ontransitionend === c && a.onwebkittransitionend !== c ? (I = "-webkit-", E = "WebkitTransition", F = "webkitTransitionEnd transitionend") : (E = "transition", F = "transitionend"), a.onanimationend === c && a.onwebkitanimationend !== c ? (I = "-webkit-", G = "WebkitAnimation", H = "webkitAnimationEnd animationend") : (G = "animation", H = "animationend");
                var J, K = "Duration",
                    L = "Property",
                    M = "Delay",
                    N = "IterationCount",
                    O = "$$ngAnimateKey",
                    P = "$$ngAnimateCSS3Data",
                    Q = "ng-animate-block-transitions",
                    R = 3,
                    S = 1.5,
                    T = 1e3,
                    U = {},
                    V = 0,
                    W = [],
                    X = null,
                    Y = 0,
                    Z = [];
                return {
                    enter: function(a, b) {
                        return B("enter", a, "ng-enter", b)
                    },
                    leave: function(a, b) {
                        return B("leave", a, "ng-leave", b)
                    },
                    move: function(a, b) {
                        return B("move", a, "ng-move", b)
                    },
                    beforeSetClass: function(a, b, c, d) {
                        var e = D(c, "-remove") + " " + D(b, "-add"),
                            f = z("setClass", a, e, function(d) {
                                var e = a.attr("class");
                                a.removeClass(c), a.addClass(b);
                                var f = d();
                                return a.attr("class", e), f
                            });
                        return f ? (i(a, function() {
                            v(a, e), w(a), d()
                        }), f) : void d()
                    },
                    beforeAddClass: function(a, b, c) {
                        var d = z("addClass", a, D(b, "-add"), function(c) {
                            a.addClass(b);
                            var d = c();
                            return a.removeClass(b), d
                        });
                        return d ? (i(a, function() {
                            v(a, b), w(a), c()
                        }), d) : void c()
                    },
                    setClass: function(a, b, c, d) {
                        c = D(c, "-remove"), b = D(b, "-add");
                        var e = c + " " + b;
                        return A("setClass", a, e, d)
                    },
                    addClass: function(a, b, c) {
                        return A("addClass", a, D(b, "-add"), c)
                    },
                    beforeRemoveClass: function(a, b, c) {
                        var d = z("removeClass", a, D(b, "-remove"), function(c) {
                            var d = a.attr("class");
                            a.removeClass(b);
                            var e = c();
                            return a.attr("class", d), e
                        });
                        return d ? (i(a, function() {
                            v(a, b), w(a), c()
                        }), d) : void c()
                    },
                    removeClass: function(a, b, c) {
                        return A("removeClass", a, D(b, "-remove"), c)
                    }
                }
            }])
        }])
    }(window, window.angular),
    function(a, b) {
        "use strict";

        function c() {
            this.$get = ["$$sanitizeUri", function(a) {
                return function(b) {
                    var c = [];
                    return f(b, i(c, function(b, c) {
                        return !/^unsafe/.test(a(b, c))
                    })), c.join("")
                }
            }]
        }

        function d(a) {
            var c = [],
                d = i(c, b.noop);
            return d.chars(a), c.join("")
        }

        function e(a) {
            var b, c = {},
                d = a.split(",");
            for (b = 0; b < d.length; b++) c[d[b]] = !0;
            return c
        }

        function f(a, c) {
            function d(a, d, f, h) {
                if (d = b.lowercase(d), y[d])
                    for (; s.last() && z[s.last()];) e("", s.last());
                x[d] && s.last() == d && e("", d), h = u[d] || !!h, h || s.push(d);
                var i = {};
                f.replace(m, function(a, b, c, d, e) {
                    var f = c || d || e || "";
                    i[b] = g(f)
                }), c.start && c.start(d, i, h)
            }

            function e(a, d) {
                var e, f = 0;
                if (d = b.lowercase(d))
                    for (f = s.length - 1; f >= 0 && s[f] != d; f--);
                if (f >= 0) {
                    for (e = s.length - 1; e >= f; e--) c.end && c.end(s[e]);
                    s.length = f
                }
            }
            var f, h, i, s = [],
                t = a;
            for (s.last = function() {
                    return s[s.length - 1]
                }; a;) {
                if (h = !0, s.last() && A[s.last()]) a = a.replace(new RegExp("(.*)<\\s*\\/\\s*" + s.last() + "[^>]*>", "i"), function(a, b) {
                    return b = b.replace(p, "$1").replace(r, "$1"), c.chars && c.chars(g(b)), ""
                }), e("", s.last());
                else if (0 === a.indexOf("<!--") ? (f = a.indexOf("--", 4), f >= 0 && a.lastIndexOf("-->", f) === f && (c.comment && c.comment(a.substring(4, f)), a = a.substring(f + 3), h = !1)) : q.test(a) ? (i = a.match(q), i && (a = a.replace(i[0], ""), h = !1)) : o.test(a) ? (i = a.match(l), i && (a = a.substring(i[0].length), i[0].replace(l, e), h = !1)) : n.test(a) && (i = a.match(k), i && (a = a.substring(i[0].length), i[0].replace(k, d), h = !1)), h) {
                    f = a.indexOf("<");
                    var v = 0 > f ? a : a.substring(0, f);
                    a = 0 > f ? "" : a.substring(f), c.chars && c.chars(g(v))
                }
                if (a == t) throw j("badparse", "The sanitizer was unable to parse the following block of html: {0}", a);
                t = a
            }
            e()
        }

        function g(a) {
            if (!a) return "";
            var b = F.exec(a),
                c = b[1],
                d = b[3],
                e = b[2];
            return e && (E.innerHTML = e.replace(/</g, "&lt;"), e = "textContent" in E ? E.textContent : E.innerText), c + e + d
        }

        function h(a) {
            return a.replace(/&/g, "&amp;").replace(s, function(a) {
                var b = a.charCodeAt(0),
                    c = a.charCodeAt(1);
                return "&#" + (1024 * (b - 55296) + (c - 56320) + 65536) + ";"
            }).replace(t, function(a) {
                return "&#" + a.charCodeAt(0) + ";"
            }).replace(/</g, "&lt;").replace(/>/g, "&gt;")
        }

        function i(a, c) {
            var d = !1,
                e = b.bind(a, a.push);
            return {
                start: function(a, f, g) {
                    a = b.lowercase(a), !d && A[a] && (d = a), d || B[a] !== !0 || (e("<"), e(a), b.forEach(f, function(d, f) {
                        var g = b.lowercase(f),
                            i = "img" === a && "src" === g || "background" === g;
                        D[g] !== !0 || C[g] === !0 && !c(d, i) || (e(" "), e(f), e('="'), e(h(d)), e('"'))
                    }), e(g ? "/>" : ">"))
                },
                end: function(a) {
                    a = b.lowercase(a), d || B[a] !== !0 || (e("</"), e(a), e(">")), a == d && (d = !1)
                },
                chars: function(a) {
                    d || e(h(a))
                }
            }
        }
        var j = b.$$minErr("$sanitize"),
            k = /^<\s*([\w:-]+)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*>/,
            l = /^<\s*\/\s*([\w:-]+)[^>]*>/,
            m = /([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,
            n = /^</,
            o = /^<\s*\//,
            p = /<!--(.*?)-->/g,
            q = /<!DOCTYPE([^>]*?)>/i,
            r = /<!\[CDATA\[(.*?)]]>/g,
            s = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
            t = /([^\#-~| |!])/g,
            u = e("area,br,col,hr,img,wbr"),
            v = e("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
            w = e("rp,rt"),
            x = b.extend({}, w, v),
            y = b.extend({}, v, e("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),
            z = b.extend({}, w, e("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),
            A = e("script,style"),
            B = b.extend({}, u, y, z, x),
            C = e("background,cite,href,longdesc,src,usemap"),
            D = b.extend({}, C, e("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,target,title,type,valign,value,vspace,width")),
            E = document.createElement("pre"),
            F = /^(\s*)([\s\S]*?)(\s*)$/;
        b.module("ngSanitize", []).provider("$sanitize", c), b.module("ngSanitize").filter("linky", ["$sanitize", function(a) {
            var c = /((ftp|https?):\/\/|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>]/,
                e = /^mailto:/;
            return function(f, g) {
                function h(a) {
                    a && n.push(d(a))
                }

                function i(a, c) {
                    n.push("<a "), b.isDefined(g) && (n.push('target="'), n.push(g), n.push('" ')), n.push('href="'), n.push(a), n.push('">'), h(c), n.push("</a>")
                }
                if (!f) return f;
                for (var j, k, l, m = f, n = []; j = m.match(c);) k = j[0], j[2] == j[3] && (k = "mailto:" + k), l = j.index, h(m.substr(0, l)), i(k, j[0].replace(e, "")), m = m.substring(l + j[0].length);
                return h(m), a(n.join(""))
            }
        }])
    }(window, window.angular);
var duScrollDefaultEasing = function(a) {
    "use strict";
    return .5 > a ? Math.pow(2 * a, 2) / 2 : 1 - Math.pow(2 * (1 - a), 2) / 2
};
angular.module("duScroll", ["duScroll.scrollspy", "duScroll.smoothScroll", "duScroll.scrollContainer", "duScroll.spyContext", "duScroll.scrollHelpers"]).value("duScrollDuration", 350).value("duScrollSpyWait", 100).value("duScrollGreedy", !1).value("duScrollOffset", 0).value("duScrollEasing", duScrollDefaultEasing), angular.module("duScroll.scrollHelpers", ["duScroll.requestAnimation"]).run(["$window", "$q", "cancelAnimation", "requestAnimation", "duScrollEasing", "duScrollDuration", "duScrollOffset", function(a, b, c, d, e, f, g) {
        "use strict";
        var h = angular.element.prototype,
            i = function(a) {
                return "undefined" != typeof HTMLDocument && a instanceof HTMLDocument || a.nodeType && a.nodeType === a.DOCUMENT_NODE
            },
            j = function(a) {
                return "undefined" != typeof HTMLElement && a instanceof HTMLElement || a.nodeType && a.nodeType === a.ELEMENT_NODE
            },
            k = function(a) {
                return j(a) || i(a) ? a : a[0]
            };
        h.scrollTo = function(b, c, d) {
            var e;
            if (angular.isElement(b) ? e = this.scrollToElement : d && (e = this.scrollToAnimated), e) return e.apply(this, arguments);
            var f = k(this);
            return i(f) ? a.scrollTo(b, c) : (f.scrollLeft = b, void(f.scrollTop = c))
        };
        var l, m;
        h.scrollToAnimated = function(a, f, g, h) {
            g && !h && (h = e);
            var i = this.scrollLeft(),
                j = this.scrollTop(),
                k = Math.round(a - i),
                n = Math.round(f - j),
                o = null,
                p = this,
                q = "scroll mousedown mousewheel touchmove keydown",
                r = function(a) {
                    (!a || a.which > 0) && (p.unbind(q, r), c(l), m.reject(), l = null)
                };
            if (l && r(), m = b.defer(), !k && !n) return m.resolve(), m.promise;
            var s = function(a) {
                null === o && (o = a);
                var b = a - o,
                    c = b >= g ? 1 : h(b / g);
                p.scrollTo(i + Math.ceil(k * c), j + Math.ceil(n * c)), 1 > c ? l = d(s) : (p.unbind(q, r), l = null, m.resolve())
            };
            return p.scrollTo(i, j), p.bind(q, r), l = d(s), m.promise
        }, h.scrollToElement = function(a, b, c, d) {
            var e = k(this);
            (!angular.isNumber(b) || isNaN(b)) && (b = g);
            var f = this.scrollTop() + k(a).getBoundingClientRect().top - b;
            return j(e) && (f -= e.getBoundingClientRect().top), this.scrollTo(0, f, c, d)
        };
        var n = {
            scrollLeft: function(b, c, d) {
                if (angular.isNumber(b)) return this.scrollTo(b, this.scrollTop(), c, d);
                var e = k(this);
                return i(e) ? a.scrollX || document.documentElement.scrollLeft || document.body.scrollLeft : e.scrollLeft
            },
            scrollTop: function(b, c, d) {
                if (angular.isNumber(b)) return this.scrollTo(this.scrollTop(), b, c, d);
                var e = k(this);
                return i(e) ? a.scrollY || document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop
            }
        };
        h.scrollToElementAnimated = function(a, b, c, d) {
            return this.scrollToElement(a, b, c || f, d)
        }, h.scrollTopAnimated = function(a, b, c) {
            return this.scrollTop(a, b || f, c)
        }, h.scrollLeftAnimated = function(a, b, c) {
            return this.scrollLeft(a, b || f, c)
        };
        var o = function(a, b) {
            return function(c, d) {
                return d ? b.apply(this, arguments) : a.apply(this, arguments)
            }
        };
        for (var p in n) h[p] = h[p] ? o(h[p], n[p]) : n[p]
    }]), angular.module("duScroll.polyfill", []).factory("polyfill", ["$window", function(a) {
        "use strict";
        var b = ["webkit", "moz", "o", "ms"];
        return function(c, d) {
            if (a[c]) return a[c];
            for (var e, f = c.substr(0, 1).toUpperCase() + c.substr(1), g = 0; g < b.length; g++)
                if (e = b[g] + f, a[e]) return a[e];
            return d
        }
    }]), angular.module("duScroll.requestAnimation", ["duScroll.polyfill"]).factory("requestAnimation", ["polyfill", "$timeout", function(a, b) {
        "use strict";
        var c = 0,
            d = function(a) {
                var d = (new Date).getTime(),
                    e = Math.max(0, 16 - (d - c)),
                    f = b(function() {
                        a(d + e)
                    }, e);
                return c = d + e, f
            };
        return a("requestAnimationFrame", d)
    }]).factory("cancelAnimation", ["polyfill", "$timeout", function(a, b) {
        "use strict";
        var c = function(a) {
            b.cancel(a)
        };
        return a("cancelAnimationFrame", c)
    }]), angular.module("duScroll.spyAPI", ["duScroll.scrollContainerAPI"]).factory("spyAPI", ["$rootScope", "$timeout", "scrollContainerAPI", "duScrollGreedy", "duScrollSpyWait", function(a, b, c, d, e) {
        "use strict";
        var f = function(c) {
                var f = !1,
                    g = !1,
                    h = function() {
                        g = !1;
                        var b = c.container,
                            e = b[0],
                            f = 0;
                        ("undefined" != typeof HTMLElement && e instanceof HTMLElement || e.nodeType && e.nodeType === e.ELEMENT_NODE) && (f = e.getBoundingClientRect().top);
                        var h, i, j, k, l, m;
                        for (k = c.spies, i = c.currentlyActive, j = void 0, h = 0; h < k.length; h++) l = k[h], m = l.getTargetPosition(), m && m.top + l.offset - f < 20 && -1 * m.top + f < m.height && (!j || j.top < m.top) && (j = {
                            top: m.top,
                            spy: l
                        });
                        j && (j = j.spy), i === j || d && !j || (i && (i.$element.removeClass("active"), a.$broadcast("duScrollspy:becameInactive", i.$element)), j && (j.$element.addClass("active"), a.$broadcast("duScrollspy:becameActive", j.$element)), c.currentlyActive = j)
                    };
                return e ? function() {
                    f ? g = !0 : (h(), f = b(function() {
                        f = !1, g && h()
                    }, e, !1))
                } : h
            },
            g = {},
            h = function(a) {
                var b = a.$id,
                    c = {
                        spies: []
                    };
                return c.handler = f(c), g[b] = c, a.$on("$destroy", function() {
                    i(a)
                }), b
            },
            i = function(a) {
                var b = a.$id,
                    c = g[b],
                    d = c.container;
                d && d.off("scroll", c.handler), delete g[b]
            },
            j = h(a),
            k = function(a) {
                return g[a.$id] ? g[a.$id] : a.$parent ? k(a.$parent) : g[j]
            },
            l = function(a) {
                var b, c, d = a.$element.scope();
                if (d) return k(d);
                for (c in g)
                    if (b = g[c], -1 !== b.spies.indexOf(a)) return b
            },
            m = function(a) {
                for (; a.parentNode;)
                    if (a = a.parentNode, a === document) return !0;
                return !1
            },
            n = function(a) {
                var b = l(a);
                b && (b.spies.push(a), b.container && m(b.container) || (b.container && b.container.off("scroll", b.handler), b.container = c.getContainer(a.$element.scope()), b.container.on("scroll", b.handler).triggerHandler("scroll")))
            },
            o = function(a) {
                var b = l(a);
                a === b.currentlyActive && (b.currentlyActive = null);
                var c = b.spies.indexOf(a); - 1 !== c && b.spies.splice(c, 1)
            };
        return {
            addSpy: n,
            removeSpy: o,
            createContext: h,
            destroyContext: i,
            getContextForScope: k
        }
    }]), angular.module("duScroll.scrollContainerAPI", []).factory("scrollContainerAPI", ["$document", function(a) {
        "use strict";
        var b = {},
            c = function(a, c) {
                var d = a.$id;
                return b[d] = c, d
            },
            d = function(a) {
                return b[a.$id] ? a.$id : a.$parent ? d(a.$parent) : void 0
            },
            e = function(c) {
                var e = d(c);
                return e ? b[e] : a
            },
            f = function(a) {
                var c = d(a);
                c && delete b[c]
            };
        return {
            getContainerId: d,
            getContainer: e,
            setContainer: c,
            removeContainer: f
        }
    }]), angular.module("duScroll.smoothScroll", ["duScroll.scrollHelpers", "duScroll.scrollContainerAPI"]).directive("duSmoothScroll", ["duScrollDuration", "duScrollOffset", "scrollContainerAPI", function(a, b, c) {
        "use strict";
        return {
            link: function(d, e, f) {
                e.on("click", function(e) {
                    if (f.href && -1 !== f.href.indexOf("#")) {
                        var g = document.getElementById(f.href.replace(/.*(?=#[^\s]+$)/, "").substring(1));
                        if (g && g.getBoundingClientRect) {
                            e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
                            var h = f.offset ? parseInt(f.offset, 10) : b,
                                i = f.duration ? parseInt(f.duration, 10) : a,
                                j = c.getContainer(d);
                            j.scrollToElement(angular.element(g), isNaN(h) ? 0 : h, isNaN(i) ? 0 : i)
                        }
                    }
                })
            }
        }
    }]), angular.module("duScroll.spyContext", ["duScroll.spyAPI"]).directive("duSpyContext", ["spyAPI", function(a) {
        "use strict";
        return {
            restrict: "A",
            scope: !0,
            compile: function() {
                return {
                    pre: function(b) {
                        a.createContext(b)
                    }
                }
            }
        }
    }]), angular.module("duScroll.scrollContainer", ["duScroll.scrollContainerAPI"]).directive("duScrollContainer", ["scrollContainerAPI", function(a) {
        "use strict";
        return {
            restrict: "A",
            scope: !0,
            compile: function() {
                return {
                    pre: function(b, c, d) {
                        d.$observe("duScrollContainer", function(d) {
                            angular.isString(d) && (d = document.getElementById(d)), d = angular.isElement(d) ? angular.element(d) : c, a.setContainer(b, d), b.$on("$destroy", function() {
                                a.removeContainer(b)
                            })
                        })
                    }
                }
            }
        }
    }]), angular.module("duScroll.scrollspy", ["duScroll.spyAPI"]).directive("duScrollspy", ["spyAPI", "duScrollOffset", "$timeout", "$rootScope", function(a, b, c, d) {
        "use strict";
        var e = function(a, b, c) {
            angular.isElement(a) ? this.target = a : angular.isString(a) && (this.targetId = a), this.$element = b, this.offset = c
        };
        return e.prototype.getTargetElement = function() {
            return !this.target && this.targetId && (this.target = document.getElementById(this.targetId)), this.target
        }, e.prototype.getTargetPosition = function() {
            var a = this.getTargetElement();
            return a ? a.getBoundingClientRect() : void 0
        }, e.prototype.flushTargetCache = function() {
            this.targetId && (this.target = void 0)
        }, {
            link: function(f, g, h) {
                var i, j = h.ngHref || h.href;
                j && -1 !== j.indexOf("#") ? i = j.replace(/.*(?=#[^\s]+$)/, "").substring(1) : h.duScrollspy && (i = h.duScrollspy), i && c(function() {
                    var c = new e(i, g, -(h.offset ? parseInt(h.offset, 10) : b));
                    a.addSpy(c), f.$on("$destroy", function() {
                        a.removeSpy(c)
                    }), f.$on("$locationChangeSuccess", c.flushTargetCache.bind(c)), d.$on("$stateChangeSuccess", c.flushTargetCache.bind(c))
                }, 0, !1)
            }
        }
    }]),
    function(a, b) {
        "undefined" != typeof module && module.exports ? module.exports = b(require("angular")) : "function" == typeof define && define.amd ? define(["angular"], b) : b(a.angular)
    }(this, function(a) {
        "use strict";
        var b, c = a.module("ngDialog", []),
            d = a.element,
            e = a.isDefined,
            f = (document.body || document.documentElement).style,
            g = e(f.animation) || e(f.WebkitAnimation) || e(f.MozAnimation) || e(f.MsAnimation) || e(f.OAnimation),
            h = "animationend webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend",
            i = !1;
        c.provider("ngDialog", function() {
            var c = this.defaults = {
                className: "ngdialog-theme-default",
                plain: !1,
                showClose: !0,
                closeByDocument: !0,
                closeByEscape: !0,
                closeByNavigation: !1,
                appendTo: !1,
                preCloseCallback: !1,
                overlay: !0,
                cache: !0
            };
            this.setForceBodyReload = function(a) {
                i = a || !1
            }, this.setDefaults = function(b) {
                a.extend(c, b)
            };
            var e, f = 0,
                j = 0,
                k = {};
            this.$get = ["$document", "$templateCache", "$compile", "$q", "$http", "$rootScope", "$timeout", "$window", "$controller", function(l, m, n, o, p, q, r, s, t) {
                var u = l.find("body");
                i && q.$on("$locationChangeSuccess", function() {
                    u = l.find("body")
                });
                var v = {
                        onDocumentKeydown: function(a) {
                            27 === a.keyCode && w.close("$escape")
                        },
                        setBodyPadding: function(a) {
                            var b = parseInt(u.css("padding-right") || 0, 10);
                            u.css("padding-right", b + a + "px"), u.data("ng-dialog-original-padding", b)
                        },
                        resetBodyPadding: function() {
                            var a = u.data("ng-dialog-original-padding");
                            a ? u.css("padding-right", a + "px") : u.css("padding-right", "")
                        },
                        performCloseDialog: function(a, c) {
                            var d = a.attr("id");
                            if ("undefined" != typeof s.Hammer) {
                                var f = b.hammerTime;
                                f.off("tap", e), f.destroy && f.destroy(), delete b.hammerTime
                            } else a.unbind("click");
                            1 === j && u.unbind("keydown"), a.hasClass("ngdialog-closing") || (j -= 1), q.$broadcast("ngDialog.closing", a), g ? a.unbind(h).bind(h, function() {
                                b.$destroy(), a.remove(), 0 === j && (u.removeClass("ngdialog-open"), v.resetBodyPadding()), q.$broadcast("ngDialog.closed", a)
                            }).addClass("ngdialog-closing") : (b.$destroy(), a.remove(), 0 === j && (u.removeClass("ngdialog-open"), v.resetBodyPadding()), q.$broadcast("ngDialog.closed", a)), k[d] && (k[d].resolve({
                                id: d,
                                value: c,
                                $dialog: a,
                                remainingDialogs: j
                            }), delete k[d])
                        },
                        closeDialog: function(b, c) {
                            var d = b.data("$ngDialogPreCloseCallback");
                            if (d && a.isFunction(d)) {
                                var e = d.call(b, c);
                                a.isObject(e) ? e.closePromise ? e.closePromise.then(function() {
                                    v.performCloseDialog(b, c)
                                }) : e.then(function() {
                                    v.performCloseDialog(b, c)
                                }, function() {}) : e !== !1 && v.performCloseDialog(b, c)
                            } else v.performCloseDialog(b, c)
                        }
                    },
                    w = {
                        open: function(g) {
                            function h(a, b) {
                                return p.get(a, b || {}).then(function(a) {
                                    return a.data || ""
                                })
                            }

                            function i(b) {
                                return b ? a.isString(b) && x.plain ? b : "boolean" != typeof x.cache || x.cache ? m.get(b) || h(b, {
                                    cache: !0
                                }) : h(b, {
                                    cache: !1
                                }) : "Empty template"
                            }
                            var l = this,
                                x = a.copy(c);
                            g = g || {}, a.extend(x, g), f += 1, l.latestID = "ngdialog" + f;
                            var y;
                            k[l.latestID] = y = o.defer(), b = a.isObject(x.scope) ? x.scope.$new() : q.$new();
                            var z, A;
                            return o.when(i(x.template || x.templateUrl)).then(function(c) {
                                if (m.put(x.template || x.templateUrl, c), x.showClose && (c += '<div class="ngdialog-close"></div>'), l.$result = z = d('<div id="ngdialog' + f + '" class="ngdialog"></div>'), z.html(x.overlay ? '<div class="ngdialog-overlay"></div><div class="ngdialog-content">' + c + "</div>" : '<div class="ngdialog-content">' + c + "</div>"), x.data && a.isString(x.data)) {
                                    var g = x.data.replace(/^\s*/, "")[0];
                                    b.ngDialogData = "{" === g || "[" === g ? a.fromJson(x.data) : x.data
                                } else x.data && a.isObject(x.data) && (b.ngDialogData = x.data);
                                if (x.controller && (a.isString(x.controller) || a.isArray(x.controller) || a.isFunction(x.controller))) {
                                    var h = t(x.controller, {
                                        $scope: b,
                                        $element: z
                                    });
                                    z.data("$ngDialogControllerController", h)
                                }
                                if (x.className && z.addClass(x.className), A = x.appendTo && a.isString(x.appendTo) ? a.element(document.querySelector(x.appendTo)) : u, x.preCloseCallback) {
                                    var i;
                                    a.isFunction(x.preCloseCallback) ? i = x.preCloseCallback : a.isString(x.preCloseCallback) && b && (a.isFunction(b[x.preCloseCallback]) ? i = b[x.preCloseCallback] : b.$parent && a.isFunction(b.$parent[x.preCloseCallback]) ? i = b.$parent[x.preCloseCallback] : q && a.isFunction(q[x.preCloseCallback]) && (i = q[x.preCloseCallback])), i && z.data("$ngDialogPreCloseCallback", i)
                                }
                                if (b.closeThisDialog = function(a) {
                                        v.closeDialog(z, a)
                                    }, r(function() {
                                        n(z)(b);
                                        var a = s.innerWidth - u.prop("clientWidth");
                                        u.addClass("ngdialog-open");
                                        var c = a - (s.innerWidth - u.prop("clientWidth"));
                                        c > 0 && v.setBodyPadding(c), A.append(z), x.name ? q.$broadcast("ngDialog.opened", {
                                            dialog: z,
                                            name: x.name
                                        }) : q.$broadcast("ngDialog.opened", z)
                                    }), x.closeByEscape && u.bind("keydown", v.onDocumentKeydown), x.closeByNavigation && q.$on("$locationChangeSuccess", function() {
                                        v.closeDialog(z)
                                    }), e = function(a) {
                                        var b = x.closeByDocument ? d(a.target).hasClass("ngdialog-overlay") : !1,
                                            c = d(a.target).hasClass("ngdialog-close");
                                        (b || c) && w.close(z.attr("id"), c ? "$closeButton" : "$document")
                                    }, "undefined" != typeof s.Hammer) {
                                    var k = b.hammerTime = s.Hammer(z[0]);
                                    k.on("tap", e)
                                } else z.bind("click", e);
                                return j += 1, w
                            }), {
                                id: "ngdialog" + f,
                                closePromise: y.promise,
                                close: function(a) {
                                    v.closeDialog(z, a)
                                }
                            }
                        },
                        openConfirm: function(b) {
                            var c = o.defer(),
                                e = {
                                    closeByEscape: !1,
                                    closeByDocument: !1
                                };
                            a.extend(e, b), e.scope = a.isObject(e.scope) ? e.scope.$new() : q.$new(), e.scope.confirm = function(a) {
                                c.resolve(a);
                                var b = d(document.getElementById(f.id));
                                v.performCloseDialog(b, a)
                            };
                            var f = w.open(e);
                            return f.closePromise.then(function(a) {
                                return a ? c.reject(a.value) : c.reject()
                            }), c.promise
                        },
                        close: function(a, b) {
                            var c = d(document.getElementById(a));
                            return c.length ? v.closeDialog(c, b) : w.closeAll(b), w
                        },
                        closeAll: function(b) {
                            var c = document.querySelectorAll(".ngdialog");
                            a.forEach(c, function(a) {
                                v.closeDialog(d(a), b)
                            })
                        },
                        getDefaults: function() {
                            return c
                        }
                    };
                return w
            }]
        }), c.directive("ngDialog", ["ngDialog", function(b) {
            return {
                restrict: "A",
                scope: {
                    ngDialogScope: "="
                },
                link: function(c, d, e) {
                    d.on("click", function(d) {
                        d.preventDefault();
                        var f = a.isDefined(c.ngDialogScope) ? c.ngDialogScope : "noScope";
                        a.isDefined(e.ngDialogClosePrevious) && b.close(e.ngDialogClosePrevious);
                        var g = b.getDefaults();
                        b.open({
                            template: e.ngDialog,
                            className: e.ngDialogClass || g.className,
                            controller: e.ngDialogController,
                            scope: f,
                            data: e.ngDialogData,
                            showClose: "false" === e.ngDialogShowClose ? !1 : "true" === e.ngDialogShowClose ? !0 : g.showClose,
                            closeByDocument: "false" === e.ngDialogCloseByDocument ? !1 : "true" === e.ngDialogCloseByDocument ? !0 : g.closeByDocument,
                            closeByEscape: "false" === e.ngDialogCloseByEscape ? !1 : "true" === e.ngDialogCloseByEscape ? !0 : g.closeByEscape,
                            preCloseCallback: e.ngDialogPreCloseCallback || g.preCloseCallback
                        })
                    })
                }
            }
        }])
    }),
    function() {
        function a(a) {
            this.tokens = [], this.tokens.links = {}, this.options = a || j.defaults, this.rules = k.normal, this.options.gfm && (this.rules = this.options.tables ? k.tables : k.gfm)
        }

        function b(a, b) {
            if (this.options = b || j.defaults, this.links = a, this.rules = l.normal, this.renderer = this.options.renderer || new c, this.renderer.options = this.options, !this.links) throw new Error("Tokens array requires a `links` property.");
            this.options.gfm ? this.rules = this.options.breaks ? l.breaks : l.gfm : this.options.pedantic && (this.rules = l.pedantic)
        }

        function c(a) {
            this.options = a || {}
        }

        function d(a) {
            this.tokens = [], this.token = null, this.options = a || j.defaults, this.options.renderer = this.options.renderer || new c, this.renderer = this.options.renderer, this.renderer.options = this.options
        }

        function e(a, b) {
            return a.replace(b ? /&/g : /&(?!#?\w+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
        }

        function f(a) {
            return a.replace(/&([#\w]+);/g, function(a, b) {
                return b = b.toLowerCase(), "colon" === b ? ":" : "#" === b.charAt(0) ? String.fromCharCode("x" === b.charAt(1) ? parseInt(b.substring(2), 16) : +b.substring(1)) : ""
            })
        }

        function g(a, b) {
            return a = a.source, b = b || "",
                function c(d, e) {
                    return d ? (e = e.source || e, e = e.replace(/(^|[^\[])\^/g, "$1"), a = a.replace(d, e), c) : new RegExp(a, b)
                }
        }

        function h() {}

        function i(a) {
            for (var b, c, d = 1; d < arguments.length; d++) {
                b = arguments[d];
                for (c in b) Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
            }
            return a
        }

        function j(b, c, f) {
            if (f || "function" == typeof c) {
                f || (f = c, c = null), c = i({}, j.defaults, c || {});
                var g, h, k = c.highlight,
                    l = 0;
                try {
                    g = a.lex(b, c)
                } catch (m) {
                    return f(m)
                }
                h = g.length;
                var n = function() {
                    var a, b;
                    try {
                        a = d.parse(g, c)
                    } catch (e) {
                        b = e
                    }
                    return c.highlight = k, b ? f(b) : f(null, a)
                };
                if (!k || k.length < 3) return n();
                if (delete c.highlight, !h) return n();
                for (; l < g.length; l++) ! function(a) {
                    return "code" !== a.type ? --h || n() : k(a.text, a.lang, function(b, c) {
                        return null == c || c === a.text ? --h || n() : (a.text = c, a.escaped = !0, void(--h || n()))
                    })
                }(g[l])
            } else try {
                return c && (c = i({}, j.defaults, c)), d.parse(a.lex(b, c), c)
            } catch (m) {
                if (m.message += "\nPlease report this to https://github.com/chjj/marked.", (c || j.defaults).silent) return "<p>An error occured:</p><pre>" + e(m.message + "", !0) + "</pre>";
                throw m
            }
        }
        var k = {
            newline: /^\n+/,
            code: /^( {4}[^\n]+\n*)+/,
            fences: h,
            hr: /^( *[-*_]){3,} *(?:\n+|$)/,
            heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
            nptable: h,
            lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
            blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
            list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
            html: /^ *(?:comment|closed|closing) *(?:\n{2,}|\s*$)/,
            def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
            table: h,
            paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
            text: /^[^\n]+/
        };
        k.bullet = /(?:[*+-]|\d+\.)/, k.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/, k.item = g(k.item, "gm")(/bull/g, k.bullet)(), k.list = g(k.list)(/bull/g, k.bullet)("hr", "\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def", "\\n+(?=" + k.def.source + ")")(), k.blockquote = g(k.blockquote)("def", k.def)(), k._tag = "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b", k.html = g(k.html)("comment", /<!--[\s\S]*?-->/)("closed", /<(tag)[\s\S]+?<\/\1>/)("closing", /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g, k._tag)(), k.paragraph = g(k.paragraph)("hr", k.hr)("heading", k.heading)("lheading", k.lheading)("blockquote", k.blockquote)("tag", "<" + k._tag)("def", k.def)(), k.normal = i({}, k), k.gfm = i({}, k.normal, {
            fences: /^ *(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n+|$)/,
            paragraph: /^/
        }), k.gfm.paragraph = g(k.paragraph)("(?!", "(?!" + k.gfm.fences.source.replace("\\1", "\\2") + "|" + k.list.source.replace("\\1", "\\3") + "|")(), k.tables = i({}, k.gfm, {
            nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
            table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
        }), a.rules = k, a.lex = function(b, c) {
            var d = new a(c);
            return d.lex(b)
        }, a.prototype.lex = function(a) {
            return a = a.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    ").replace(/\u00a0/g, " ").replace(/\u2424/g, "\n"), this.token(a, !0)
        }, a.prototype.token = function(a, b, c) {
            for (var d, e, f, g, h, i, j, l, m, a = a.replace(/^ +$/gm, ""); a;)
                if ((f = this.rules.newline.exec(a)) && (a = a.substring(f[0].length), f[0].length > 1 && this.tokens.push({
                        type: "space"
                    })), f = this.rules.code.exec(a)) a = a.substring(f[0].length), f = f[0].replace(/^ {4}/gm, ""), this.tokens.push({
                    type: "code",
                    text: this.options.pedantic ? f : f.replace(/\n+$/, "")
                });
                else if (f = this.rules.fences.exec(a)) a = a.substring(f[0].length), this.tokens.push({
                type: "code",
                lang: f[2],
                text: f[3]
            });
            else if (f = this.rules.heading.exec(a)) a = a.substring(f[0].length), this.tokens.push({
                type: "heading",
                depth: f[1].length,
                text: f[2]
            });
            else if (b && (f = this.rules.nptable.exec(a))) {
                for (a = a.substring(f[0].length), i = {
                        type: "table",
                        header: f[1].replace(/^ *| *\| *$/g, "").split(/ *\| */),
                        align: f[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                        cells: f[3].replace(/\n$/, "").split("\n")
                    }, l = 0; l < i.align.length; l++) i.align[l] = /^ *-+: *$/.test(i.align[l]) ? "right" : /^ *:-+: *$/.test(i.align[l]) ? "center" : /^ *:-+ *$/.test(i.align[l]) ? "left" : null;
                for (l = 0; l < i.cells.length; l++) i.cells[l] = i.cells[l].split(/ *\| */);
                this.tokens.push(i)
            } else if (f = this.rules.lheading.exec(a)) a = a.substring(f[0].length), this.tokens.push({
                type: "heading",
                depth: "=" === f[2] ? 1 : 2,
                text: f[1]
            });
            else if (f = this.rules.hr.exec(a)) a = a.substring(f[0].length), this.tokens.push({
                type: "hr"
            });
            else if (f = this.rules.blockquote.exec(a)) a = a.substring(f[0].length), this.tokens.push({
                type: "blockquote_start"
            }), f = f[0].replace(/^ *> ?/gm, ""), this.token(f, b, !0), this.tokens.push({
                type: "blockquote_end"
            });
            else if (f = this.rules.list.exec(a)) {
                for (a = a.substring(f[0].length), g = f[2], this.tokens.push({
                        type: "list_start",
                        ordered: g.length > 1
                    }), f = f[0].match(this.rules.item), d = !1, m = f.length, l = 0; m > l; l++) i = f[l], j = i.length, i = i.replace(/^ *([*+-]|\d+\.) +/, ""), ~i.indexOf("\n ") && (j -= i.length, i = this.options.pedantic ? i.replace(/^ {1,4}/gm, "") : i.replace(new RegExp("^ {1," + j + "}", "gm"), "")), this.options.smartLists && l !== m - 1 && (h = k.bullet.exec(f[l + 1])[0], g === h || g.length > 1 && h.length > 1 || (a = f.slice(l + 1).join("\n") + a, l = m - 1)), e = d || /\n\n(?!\s*$)/.test(i), l !== m - 1 && (d = "\n" === i.charAt(i.length - 1), e || (e = d)), this.tokens.push({
                    type: e ? "loose_item_start" : "list_item_start"
                }), this.token(i, !1, c), this.tokens.push({
                    type: "list_item_end"
                });
                this.tokens.push({
                    type: "list_end"
                })
            } else if (f = this.rules.html.exec(a)) a = a.substring(f[0].length), this.tokens.push({
                type: this.options.sanitize ? "paragraph" : "html",
                pre: "pre" === f[1] || "script" === f[1] || "style" === f[1],
                text: f[0]
            });
            else if (!c && b && (f = this.rules.def.exec(a))) a = a.substring(f[0].length), this.tokens.links[f[1].toLowerCase()] = {
                href: f[2],
                title: f[3]
            };
            else if (b && (f = this.rules.table.exec(a))) {
                for (a = a.substring(f[0].length), i = {
                        type: "table",
                        header: f[1].replace(/^ *| *\| *$/g, "").split(/ *\| */),
                        align: f[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                        cells: f[3].replace(/(?: *\| *)?\n$/, "").split("\n")
                    }, l = 0; l < i.align.length; l++) i.align[l] = /^ *-+: *$/.test(i.align[l]) ? "right" : /^ *:-+: *$/.test(i.align[l]) ? "center" : /^ *:-+ *$/.test(i.align[l]) ? "left" : null;
                for (l = 0; l < i.cells.length; l++) i.cells[l] = i.cells[l].replace(/^ *\| *| *\| *$/g, "").split(/ *\| */);
                this.tokens.push(i)
            } else if (b && (f = this.rules.paragraph.exec(a))) a = a.substring(f[0].length), this.tokens.push({
                type: "paragraph",
                text: "\n" === f[1].charAt(f[1].length - 1) ? f[1].slice(0, -1) : f[1]
            });
            else if (f = this.rules.text.exec(a)) a = a.substring(f[0].length), this.tokens.push({
                type: "text",
                text: f[0]
            });
            else if (a) throw new Error("Infinite loop on byte: " + a.charCodeAt(0));
            return this.tokens
        };
        var l = {
            escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
            autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
            url: h,
            tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
            link: /^!?\[(inside)\]\(href\)/,
            reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
            nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
            strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
            em: /^\b_((?:__|[\s\S])+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
            code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
            br: /^ {2,}\n(?!\s*$)/,
            del: h,
            text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/
        };
        l._inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/, l._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/, l.link = g(l.link)("inside", l._inside)("href", l._href)(), l.reflink = g(l.reflink)("inside", l._inside)(), l.normal = i({}, l), l.pedantic = i({}, l.normal, {
            strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
            em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
        }), l.gfm = i({}, l.normal, {
            escape: g(l.escape)("])", "~|])")(),
            url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
            del: /^~~(?=\S)([\s\S]*?\S)~~/,
            text: g(l.text)("]|", "~]|")("|", "|https?://|")()
        }), l.breaks = i({}, l.gfm, {
            br: g(l.br)("{2,}", "*")(),
            text: g(l.gfm.text)("{2,}", "*")()
        }), b.rules = l, b.output = function(a, c, d) {
            var e = new b(c, d);
            return e.output(a)
        }, b.prototype.output = function(a) {
            for (var b, c, d, f, g = ""; a;)
                if (f = this.rules.escape.exec(a)) a = a.substring(f[0].length), g += f[1];
                else if (f = this.rules.autolink.exec(a)) a = a.substring(f[0].length), "@" === f[2] ? (c = this.mangle(":" === f[1].charAt(6) ? f[1].substring(7) : f[1]), d = this.mangle("mailto:") + c) : (c = e(f[1]), d = c), g += this.renderer.link(d, null, c);
            else if (this.inLink || !(f = this.rules.url.exec(a))) {
                if (f = this.rules.tag.exec(a)) !this.inLink && /^<a /i.test(f[0]) ? this.inLink = !0 : this.inLink && /^<\/a>/i.test(f[0]) && (this.inLink = !1), a = a.substring(f[0].length), g += this.options.sanitize ? e(f[0]) : f[0];
                else if (f = this.rules.link.exec(a)) a = a.substring(f[0].length), this.inLink = !0, g += this.outputLink(f, {
                    href: f[2],
                    title: f[3]
                }), this.inLink = !1;
                else if ((f = this.rules.reflink.exec(a)) || (f = this.rules.nolink.exec(a))) {
                    if (a = a.substring(f[0].length), b = (f[2] || f[1]).replace(/\s+/g, " "), b = this.links[b.toLowerCase()], !b || !b.href) {
                        g += f[0].charAt(0), a = f[0].substring(1) + a;
                        continue
                    }
                    this.inLink = !0, g += this.outputLink(f, b), this.inLink = !1
                } else if (f = this.rules.strong.exec(a)) a = a.substring(f[0].length), g += this.renderer.strong(this.output(f[2] || f[1]));
                else if (f = this.rules.em.exec(a)) a = a.substring(f[0].length), g += this.renderer.em(this.output(f[2] || f[1]));
                else if (f = this.rules.code.exec(a)) a = a.substring(f[0].length), g += this.renderer.codespan(e(f[2], !0));
                else if (f = this.rules.br.exec(a)) a = a.substring(f[0].length), g += this.renderer.br();
                else if (f = this.rules.del.exec(a)) a = a.substring(f[0].length), g += this.renderer.del(this.output(f[1]));
                else if (f = this.rules.text.exec(a)) a = a.substring(f[0].length), g += e(this.smartypants(f[0]));
                else if (a) throw new Error("Infinite loop on byte: " + a.charCodeAt(0))
            } else a = a.substring(f[0].length), c = e(f[1]), d = c, g += this.renderer.link(d, null, c);
            return g
        }, b.prototype.outputLink = function(a, b) {
            var c = e(b.href),
                d = b.title ? e(b.title) : null;
            return "!" !== a[0].charAt(0) ? this.renderer.link(c, d, this.output(a[1])) : this.renderer.image(c, d, e(a[1]))
        }, b.prototype.smartypants = function(a) {
            return this.options.smartypants ? a.replace(/--/g, "—").replace(/(^|[-\u2014\/(\[{"\s])'/g, "$1‘").replace(/'/g, "’").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g, "$1“").replace(/"/g, "”").replace(/\.{3}/g, "…") : a
        }, b.prototype.mangle = function(a) {
            for (var b, c = "", d = a.length, e = 0; d > e; e++) b = a.charCodeAt(e), Math.random() > .5 && (b = "x" + b.toString(16)), c += "&#" + b + ";";
            return c
        }, c.prototype.code = function(a, b, c) {
            if (this.options.highlight) {
                var d = this.options.highlight(a, b);
                null != d && d !== a && (c = !0, a = d)
            }
            return b ? '<pre><code class="' + this.options.langPrefix + e(b, !0) + '">' + (c ? a : e(a, !0)) + "\n</code></pre>\n" : "<pre><code>" + (c ? a : e(a, !0)) + "\n</code></pre>"
        }, c.prototype.blockquote = function(a) {
            return "<blockquote>\n" + a + "</blockquote>\n"
        }, c.prototype.html = function(a) {
            return a
        }, c.prototype.heading = function(a, b, c) {
            return "<h" + b + ' id="' + this.options.headerPrefix + c.toLowerCase().replace(/[^\w]+/g, "-") + '">' + a + "</h" + b + ">\n"
        }, c.prototype.hr = function() {
            return this.options.xhtml ? "<hr/>\n" : "<hr>\n"
        }, c.prototype.list = function(a, b) {
            var c = b ? "ol" : "ul";
            return "<" + c + ">\n" + a + "</" + c + ">\n"
        }, c.prototype.listitem = function(a) {
            return "<li>" + a + "</li>\n"
        }, c.prototype.paragraph = function(a) {
            return "<p>" + a + "</p>\n"
        }, c.prototype.table = function(a, b) {
            return "<table>\n<thead>\n" + a + "</thead>\n<tbody>\n" + b + "</tbody>\n</table>\n"
        }, c.prototype.tablerow = function(a) {
            return "<tr>\n" + a + "</tr>\n"
        }, c.prototype.tablecell = function(a, b) {
            var c = b.header ? "th" : "td",
                d = b.align ? "<" + c + ' style="text-align:' + b.align + '">' : "<" + c + ">";
            return d + a + "</" + c + ">\n"
        }, c.prototype.strong = function(a) {
            return "<strong>" + a + "</strong>"
        }, c.prototype.em = function(a) {
            return "<em>" + a + "</em>"
        }, c.prototype.codespan = function(a) {
            return "<code>" + a + "</code>"
        }, c.prototype.br = function() {
            return this.options.xhtml ? "<br/>" : "<br>"
        }, c.prototype.del = function(a) {
            return "<del>" + a + "</del>"
        }, c.prototype.link = function(a, b, c) {
            if (this.options.sanitize) {
                try {
                    var d = decodeURIComponent(f(a)).replace(/[^\w:]/g, "").toLowerCase()
                } catch (e) {
                    return ""
                }
                if (0 === d.indexOf("javascript:")) return ""
            }
            var g = '<a href="' + a + '"';
            return b && (g += ' title="' + b + '"'), g += ">" + c + "</a>"
        }, c.prototype.image = function(a, b, c) {
            var d = '<img src="' + a + '" alt="' + c + '"';
            return b && (d += ' title="' + b + '"'), d += this.options.xhtml ? "/>" : ">"
        }, d.parse = function(a, b, c) {
            var e = new d(b, c);
            return e.parse(a)
        }, d.prototype.parse = function(a) {
            this.inline = new b(a.links, this.options, this.renderer), this.tokens = a.reverse();
            for (var c = ""; this.next();) c += this.tok();
            return c
        }, d.prototype.next = function() {
            return this.token = this.tokens.pop()
        }, d.prototype.peek = function() {
            return this.tokens[this.tokens.length - 1] || 0
        }, d.prototype.parseText = function() {
            for (var a = this.token.text;
                "text" === this.peek().type;) a += "\n" + this.next().text;
            return this.inline.output(a)
        }, d.prototype.tok = function() {
            switch (this.token.type) {
                case "space":
                    return "";
                case "hr":
                    return this.renderer.hr();
                case "heading":
                    return this.renderer.heading(this.inline.output(this.token.text), this.token.depth, this.token.text);
                case "code":
                    return this.renderer.code(this.token.text, this.token.lang, this.token.escaped);
                case "table":
                    var a, b, c, d, e, f = "",
                        g = "";
                    for (c = "", a = 0; a < this.token.header.length; a++) d = {
                        header: !0,
                        align: this.token.align[a]
                    }, c += this.renderer.tablecell(this.inline.output(this.token.header[a]), {
                        header: !0,
                        align: this.token.align[a]
                    });
                    for (f += this.renderer.tablerow(c), a = 0; a < this.token.cells.length; a++) {
                        for (b = this.token.cells[a], c = "", e = 0; e < b.length; e++) c += this.renderer.tablecell(this.inline.output(b[e]), {
                            header: !1,
                            align: this.token.align[e]
                        });
                        g += this.renderer.tablerow(c)
                    }
                    return this.renderer.table(f, g);
                case "blockquote_start":
                    for (var g = "";
                        "blockquote_end" !== this.next().type;) g += this.tok();
                    return this.renderer.blockquote(g);
                case "list_start":
                    for (var g = "", h = this.token.ordered;
                        "list_end" !== this.next().type;) g += this.tok();
                    return this.renderer.list(g, h);
                case "list_item_start":
                    for (var g = "";
                        "list_item_end" !== this.next().type;) g += "text" === this.token.type ? this.parseText() : this.tok();
                    return this.renderer.listitem(g);
                case "loose_item_start":
                    for (var g = "";
                        "list_item_end" !== this.next().type;) g += this.tok();
                    return this.renderer.listitem(g);
                case "html":
                    var i = this.token.pre || this.options.pedantic ? this.token.text : this.inline.output(this.token.text);
                    return this.renderer.html(i);
                case "paragraph":
                    return this.renderer.paragraph(this.inline.output(this.token.text));
                case "text":
                    return this.renderer.paragraph(this.parseText())
            }
        }, h.exec = h, j.options = j.setOptions = function(a) {
            return i(j.defaults, a), j
        }, j.defaults = {
            gfm: !0,
            tables: !0,
            breaks: !1,
            pedantic: !1,
            sanitize: !1,
            smartLists: !1,
            silent: !1,
            highlight: null,
            langPrefix: "lang-",
            smartypants: !1,
            headerPrefix: "",
            renderer: new c,
            xhtml: !1
        }, j.Parser = d, j.parser = d.parse, j.Renderer = c, j.Lexer = a, j.lexer = a.lex, j.InlineLexer = b, j.inlineLexer = b.output, j.parse = j, "object" == typeof exports ? module.exports = j : "function" == typeof define && define.amd ? define(function() {
            return j
        }) : this.marked = j
    }.call(function() {
        return this || ("undefined" != typeof window ? window : global)
    }()),
    function() {
        angular.module("sideBySide", ["ngAnimate", "ngDialog", "ngSanitize", "duScroll"]).config(["$locationProvider", function(a) {
            return a.html5Mode(html5Mode)
        }])
    }.call(this),
    function() {
        angular.module("sideBySide").controller("AppController", ["$scope", "ngDialog", "filter", "poems", function(a, b, c, d) {
            return a.title = function() {
                return function() {
                    return d.config.title || "Side By Side viewer"
                }
            }(this), a.description = function() {
                return function() {
                    return d.config.description || ""
                }
            }(this), a.$watchCollection(function() {
                return d.config
            }, function() {
                return "links" in d.config ? a.links = d.config.links.map(function(a) {
                    return a.display = JSON.stringify(a.display), a
                }) : void 0
            }), a.display = function(a) {
                return c.setFilter(JSON.parse(a))
            }, a.showPage = function(a) {
                return b.open({
                    template: "partials/" + a + ".html"
                })
            }, a.flipPick = function() {
                return a.pick = !a.pick
            }, a.pick = !1
        }])
    }.call(this),
    function() {
        angular.module("sideBySide").controller("ComparisonController", ["$document", "$rootScope", "$scope", "$timeout", "filter", "load", "poems", "route", "transformer", function(a, b, c, d, e, f, g, h, i) {
            var j, k, l;
            return k = 1, j = 5, l = function() {
                return setTimeout(function() {
                    var b, c;
                    return "section" in h.params && (c = "section-" + h.params.section, b = document.getElementById(c)) ? a.scrollTo(b, 10, 200) : void 0
                }, 1)
            }, b.$on("duScrollspy:becameActive", function(a, d) {
                return c.meta[0].Loading ? void 0 : (h.update("section", d.prop("id").replace("section-", "")), b.$apply())
            }), c.$watchCollection(function() {
                return g.getActive()
            }, function() {
                var a, b, d, f;
                return a = g.getActive(), c.columns = a.length, d = i(a), c.verses = d.verses, c.meta = d.meta, b = g.config.heading || "Author", c.headings = function() {
                    var a, c, e, g;
                    for (e = d.meta, g = [], a = 0, c = e.length; c > a; a++) f = e[a], g.push(f[b]);
                    return g
                }(), c.metaKeys = g.config.metaKeys || g.getMetaKeys(), c.all = g.all, l(), c.meta[0].Loading ? void 0 : h.update("display", e.getFilter())
            }), c.switchActive = function(a) {
                var b, e;
                return e = g.getActive().length, b = a.meta.Active, k >= e && b ? (c.tooFew = !0, d(function() {
                    return c.tooFew = !1
                }, 1e3)) : e >= j && !b ? (c.tooMany = !0, d(function() {
                    return c.tooMany = !1
                }, 2500)) : a.meta.Active = !b
            }, c.tooFew = !1, c.tooMany = !1, f(h.getBaseDir(), h.params.display)
        }])
    }.call(this),
    function() {
        angular.module("sideBySide").factory("fetch", ["$http", "$q", "readerFactory", function(a, b, c) {
            return function(d) {
                var e;
                return e = d + "config.json", a.get(e).then(function(f) {
                    var g;
                    if ("object" != typeof f.data) throw "Config file " + e + " doesn't contain data.";
                    if ("object" != typeof f.data.files) throw "Config doesn't contain a list of files.";
                    return g = f.data.files.map(function(b) {
                        return a.get(d + b).then(function(a) {
                            return c(b)(a.data)
                        })
                    }), {
                        fetchedPoems: b.all(g),
                        data: f.data
                    }
                })
            }
        }])
    }.call(this),
    function() {
        var a = [].indexOf || function(a) {
            for (var b = 0, c = this.length; c > b; b++)
                if (b in this && this[b] === a) return b;
            return -1
        };
        angular.module("sideBySide").service("filter", ["poems", function(b) {
            var c, d;
            return d = [], this.update = function() {
                return c(b.all)
            }, this.setFilter = function(c) {
                var d, e;
                for (d in c) e = c[d];
                return b.all.map(function(b) {
                    var c;
                    return b.meta.Active = (c = b.meta[d], a.call(e, c) >= 0)
                })
            }, this.getFilter = function() {
                var c, e, f, g, h, i, j, k, l;
                for (e = [], k = 0, l = d.length; l > k; k++) g = d[k], c = _.uniq(b.getActive().map(function(a) {
                    return a.meta[g]
                })), h = b.getInactive().filter(function(b) {
                    var d;
                    return d = b.meta[g], a.call(c, d) >= 0
                }), h.length > 0 || e.push({
                    header: g,
                    values: c
                });
                return i = _.min(e.map(function(a) {
                    return a.values.length
                })), f = _.first(e.filter(function(a) {
                    return a.values.length === i
                })), j = {}, j[f.header] = f.values, j
            }, c = function(a) {
                var b, c, e;
                return b = a.map(function(a) {
                    return a.meta
                }).reduce(function(a, b) {
                    var c, d;
                    for (c in b) d = b[c], "string" == typeof d && (c in a || (a[c] = 0), a[c] += d.length);
                    return a
                }, {}), d = _.sortBy(function() {
                    var a;
                    a = [];
                    for (c in b) e = b[c], a.push({
                        key: c,
                        len: e
                    });
                    return a
                }(), "len").map(function(a) {
                    return a.key
                })
            }, this
        }])
    }.call(this),
    function() {
        var a = [].indexOf || function(a) {
            for (var b = 0, c = this.length; c > b; b++)
                if (b in this && this[b] === a) return b;
            return -1
        };
        angular.module("sideBySide").factory("load", ["filter", "fetch", "poems", function(b, c, d) {
            return function(e, f) {
                var g;
                return g = function(b, c) {
                    var d, e, f;
                    c || (b.meta.Active = !0);
                    for (d in c) e = c[d], f = b.meta[d], a.call(e, f) >= 0 && (b.meta.Active = !0);
                    return b
                }, c(e).then(function(a) {
                    return a.fetchedPoems.then(function(c) {
                        var e, h;
                        return e = f || a.data.display, d.all = function() {
                            var a, b, d;
                            for (d = [], a = 0, b = c.length; b > a; a++) h = c[a], d.push(g(h, e));
                            return d
                        }(), d.config = a.data, b.update()
                    })
                })
            }
        }])
    }.call(this),
    function() {
        angular.module("sideBySide").service("poems", function() {
            return this.all = [{
                meta: {
                    Active: !0,
                    Loading: "Loading"
                },
                content: [{
                    section: "Loading...",
                    text: "Please be patient!"
                }]
            }], this.config = {}, this.getActive = function() {
                var a, b, c, d, e;
                for (d = this.all, e = [], b = 0, c = d.length; c > b; b++) a = d[b], a.meta.Active === !0 && e.push(a);
                return e
            }, this.getInactive = function() {
                var a, b, c, d, e;
                for (d = this.all, e = [], b = 0, c = d.length; c > b; b++) a = d[b], a.meta.Active !== !0 && e.push(a);
                return e
            }, this.getMetaKeys = function() {
                return this.all.reduce(function(a, b) {
                    var c;
                    return _.uniq(a.concat(function() {
                        var a;
                        a = [];
                        for (c in b.meta) "$$hashKey" !== c && "Active" !== c && a.push(c);
                        return a
                    }()))
                }, [])
            }, this
        })
    }.call(this),
    function() {
        angular.module("sideBySide").service("route", ["$location", function(a) {
            var b, c;
            return this.params = a.path().split("/").filter(function(a) {
                return a
            }).map(function(a) {
                return a.split(":")
            }).reduce(function(a, b) {
                var c, d;
                return c = b.shift(), b.length > 1 ? (d = {}, d[b[0]] = b[1].split(",")) : d = b[0], a[c] = d, a
            }, {}), "base" in this.params || (this.params.base = ""), b = a.absUrl(), this.appUrl = b.substring(0, b.length - a.url().length).replace(/\/?#?$/, ""), c = function(a) {
                var b, c;
                if ("object" == typeof a)
                    for (b in a) return c = a[b], b + ":" + c.join(",");
                return a
            }, this.get = function() {
                return ["base", "display", "section"].filter(function(a) {
                    return function(b) {
                        return a.params[b]
                    }
                }(this)).map(function(a) {
                    return function(b) {
                        return b + ":" + c(a.params[b])
                    }
                }(this)).join("/")
            }, this.getBaseDir = function() {
                var a;
                return a = "/", this.params.base && (a += this.params.base.replace(/\./g, "/") + "/"), this.appUrl + a
            }, this.update = function(b, c) {
                return this.params[b] = c, a.path(this.get())
            }, this
        }])
    }.call(this),
    function() {
        angular.module("sideBySide").factory("transformer", function() {
            return function(a) {
                var b, c, d;
                return b = function(a) {
                    var b, c, d, e, f, g, h, i, j, k, l, m, n;
                    if (!a || a.length < 1) throw "No poems found!";
                    for (g = [], m = 0, n = a.length; n > m; m++) k = a[m], d = k.content.length, d in g || (g[d] = 0), g[d]++;
                    if (!(_.size(_.compact(g)) <= 1)) {
                        for (l = function() {
                                var a, c, d;
                                for (d = [], f = a = 0, c = g.length; c > a; f = ++a) b = g[f], "undefined" != typeof b && d.push(b + " of length " + f);
                                return d
                            }(), c = []; _.size(_.compact(g)) > 1;) j = _.indexOf(g, _.min(g)), h = _.indexOf(g, _.max(g)), i = j > h ? "Superfluous verses: " : "Missing verses after: ", e = _.map(a.filter(function(a) {
                            return a.content.length === j
                        }), function(a) {
                            return "'" + _.last(a.content).text + "'"
                        }), c.push(i + e.join(", ")), delete g[j];
                        throw "Poems with uneven number of verses: " + l.join(", ") + ". (" + c.join("; ") + ")."
                    }
                }, b(a), d = _.map(_.range(a[0].content.length), function(b) {
                    return _.map(a, function(a) {
                        return a.content[b]
                    })
                }), {
                    meta: function() {
                        var b, d, e;
                        for (e = [], b = 0, d = a.length; d > b; b++) c = a[b], e.push(c.meta);
                        return e
                    }(),
                    verses: d
                }
            }
        })
    }.call(this),
    function() {
        angular.module("sideBySide").factory("readerFactory", ["$injector", function(a) {
            return function(b) {
                var c;
                switch (c = b.split(".").pop()) {
                    case "json":
                        return a.get("jsonReader");
                    case "md":
                    case "markdown":
                        return a.get("markdownReader");
                    default:
                        throw "Unknown extension '" + c + "'."
                }
            }
        }])
    }.call(this),
    function() {
        angular.module("sideBySide").factory("jsonReader", function() {
            return function(source) {
                var i, parsed, verse, _ref;
                parsed = eval("(" + source + ")"), _ref = parsed.content;
                for (i in _ref) verse = _ref[i], "string" == typeof verse ? parsed.content[i] = {
                    section: "",
                    text: verse
                } : ("section" in verse || (verse.section = ""), parsed.content[i] = verse);
                return parsed
            }
        })
    }.call(this),
    function() {
        var a = [].indexOf || function(a) {
            for (var b = 0, c = this.length; c > b; b++)
                if (b in this && this[b] === a) return b;
            return -1
        };
        angular.module("sideBySide").factory("markdownReader", function() {
            return function(b) {
                var c, d, e, f, g, h;
                return f = function(a, b) {
                    var c, d, e, f, g, h, i;
                    for (f = {}, i = a.split("\n"), g = 0, h = i.length; h > g; g++) d = i[g], c = b.output(d), e = /([^:]*):(.*)/.exec(c), f[e[1].trim()] = e[2].trim();
                    return f
                }, g = function(b, c) {
                    var d, e;
                    for (d = []; b.length > 0 && (e = b[0].type, !(a.call(c, e) >= 0));) d.push(b.shift());
                    return d
                }, e = function(b, c) {
                    var d, e, f, h;
                    for (d = []; b.length > 0;) h = b[0].type, e = a.call(c, h) >= 0 ? b.shift().text || "" : "", f = g(b, c), f.links = b.links, d.push({
                        section: e,
                        text: marked.parser(f)
                    });
                    return d
                }, marked.setOptions({
                    smartypants: !0
                }), c = marked.lexer(b), d = f(c.shift().text, new marked.InlineLexer(c.links)), h = d.Separator ? [d.Separator] : ["heading", "hr"], {
                    meta: d,
                    content: e(c, h)
                }
            }
        })
    }.call(this);
