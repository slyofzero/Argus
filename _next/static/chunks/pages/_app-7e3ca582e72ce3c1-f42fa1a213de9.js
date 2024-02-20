(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2888], {
        1291: function(t, e) {
            ! function(t) {
                "use strict";

                function e(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                /*!
                 * Observer 3.11.5
                 * https://greensock.com
                 *
                 * @license Copyright 2008-2023, GreenSock. All rights reserved.
                 * Subject to the terms at https://greensock.com/standard-license or for
                 * Club GreenSock members, the agreement issued with that membership.
                 * @author: Jack Doyle, jack@greensock.com
                 */
                var r, n, i, o, s, a, l, u, c, h, f, d, p, g = function() {
                        return r || "undefined" != typeof window && (r = window.gsap) && r.registerPlugin && r
                    },
                    m = 1,
                    v = [],
                    _ = [],
                    y = [],
                    b = Date.now,
                    w = function(t, e) {
                        return e
                    },
                    T = function() {
                        var t = c.core,
                            e = t.bridge || {},
                            r = t._scrollers,
                            n = t._proxies;
                        r.push.apply(r, _), n.push.apply(n, y), _ = r, y = n, w = function(t, r) {
                            return e[t](r)
                        }
                    },
                    x = function(t, e) {
                        return ~y.indexOf(t) && y[y.indexOf(t) + 1][e]
                    },
                    S = function(t) {
                        return !!~h.indexOf(t)
                    },
                    P = function(t, e, r, n, i) {
                        return t.addEventListener(e, r, {
                            passive: !n,
                            capture: !!i
                        })
                    },
                    k = function(t, e, r, n) {
                        return t.removeEventListener(e, r, !!n)
                    },
                    O = "scrollLeft",
                    j = "scrollTop",
                    E = function() {
                        return f && f.isPressed || _.cache++
                    },
                    A = function(t, e) {
                        var r = function r(n) {
                            if (n || 0 === n) {
                                m && (i.history.scrollRestoration = "manual");
                                var o = f && f.isPressed;
                                n = r.v = Math.round(n) || (f && f.iOS ? 1 : 0), t(n), r.cacheID = _.cache, o && w("ss", n)
                            } else(e || _.cache !== r.cacheID || w("ref")) && (r.cacheID = _.cache, r.v = t());
                            return r.v + r.offset
                        };
                        return r.offset = 0, t && r
                    },
                    C = {
                        s: O,
                        p: "left",
                        p2: "Left",
                        os: "right",
                        os2: "Right",
                        d: "width",
                        d2: "Width",
                        a: "x",
                        sc: A(function(t) {
                            return arguments.length ? i.scrollTo(t, D.sc()) : i.pageXOffset || o[O] || s[O] || a[O] || 0
                        })
                    },
                    D = {
                        s: j,
                        p: "top",
                        p2: "Top",
                        os: "bottom",
                        os2: "Bottom",
                        d: "height",
                        d2: "Height",
                        a: "y",
                        op: C,
                        sc: A(function(t) {
                            return arguments.length ? i.scrollTo(C.sc(), t) : i.pageYOffset || o[j] || s[j] || a[j] || 0
                        })
                    },
                    M = function(t) {
                        return r.utils.toArray(t)[0] || ("string" == typeof t && !1 !== r.config().nullTargetWarn ? console.warn("Element not found:", t) : null)
                    },
                    R = function(t, e) {
                        var n = e.s,
                            i = e.sc;
                        S(t) && (t = o.scrollingElement || s);
                        var a = _.indexOf(t),
                            l = i === D.sc ? 1 : 2;
                        ~a || (a = _.push(t) - 1), _[a + l] || t.addEventListener("scroll", E);
                        var u = _[a + l],
                            c = u || (_[a + l] = A(x(t, n), !0) || (S(t) ? i : A(function(e) {
                                return arguments.length ? t[n] = e : t[n]
                            })));
                        return c.target = t, u || (c.smooth = "smooth" === r.getProperty(t, "scrollBehavior")), c
                    },
                    I = function(t, e, r) {
                        var n = t,
                            i = t,
                            o = b(),
                            s = o,
                            a = e || 50,
                            l = Math.max(500, 3 * a),
                            u = function(t, e) {
                                var l = b();
                                e || l - o > a ? (i = n, n = t, s = o, o = l) : r ? n += t : n = i + (t - i) / (l - s) * (o - s)
                            };
                        return {
                            update: u,
                            reset: function() {
                                i = n = r ? 0 : n, s = o = 0
                            },
                            getVelocity: function(t) {
                                var e = s,
                                    a = i,
                                    c = b();
                                return (t || 0 === t) && t !== n && u(t), o === s || c - s > l ? 0 : (n + (r ? a : -a)) / ((r ? c : o) - e) * 1e3
                            }
                        }
                    },
                    z = function(t, e) {
                        return e && !t._gsapAllow && t.preventDefault(), t.changedTouches ? t.changedTouches[0] : t
                    },
                    L = function(t) {
                        var e = Math.max.apply(Math, t),
                            r = Math.min.apply(Math, t);
                        return Math.abs(e) >= Math.abs(r) ? e : r
                    },
                    F = function() {
                        (c = r.core.globals().ScrollTrigger) && c.core && T()
                    },
                    N = function(t) {
                        return (r = t || g()) && "undefined" != typeof document && document.body && (i = window, s = (o = document).documentElement, a = o.body, h = [i, o, s, a], r.utils.clamp, p = r.core.context || function() {}, u = "onpointerenter" in a ? "pointer" : "mouse", l = B.isTouch = i.matchMedia && i.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in i || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, d = B.eventTypes = ("ontouchstart" in s ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in s ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
                            return m = 0
                        }, 500), F(), n = 1), n
                    };
                C.op = D, _.cache = 0;
                var B = function() {
                    var t;

                    function h(t) {
                        this.init(t)
                    }
                    return h.prototype.init = function(t) {
                        n || N(r) || console.warn("Please gsap.registerPlugin(Observer)"), c || F();
                        var e = t.tolerance,
                            h = t.dragMinimum,
                            g = t.type,
                            m = t.target,
                            _ = t.lineHeight,
                            y = t.debounce,
                            w = t.preventDefault,
                            T = t.onStop,
                            x = t.onStopDelay,
                            O = t.ignore,
                            j = t.wheelSpeed,
                            A = t.event,
                            B = t.onDragStart,
                            $ = t.onDragEnd,
                            V = t.onDrag,
                            U = t.onPress,
                            q = t.onRelease,
                            W = t.onRight,
                            H = t.onLeft,
                            Y = t.onUp,
                            X = t.onDown,
                            G = t.onChangeX,
                            K = t.onChangeY,
                            Z = t.onChange,
                            J = t.onToggleX,
                            Q = t.onToggleY,
                            tt = t.onHover,
                            te = t.onHoverEnd,
                            tr = t.onMove,
                            tn = t.ignoreCheck,
                            ti = t.isNormalizer,
                            to = t.onGestureStart,
                            ts = t.onGestureEnd,
                            ta = t.onWheel,
                            tl = t.onEnable,
                            tu = t.onDisable,
                            tc = t.onClick,
                            th = t.scrollSpeed,
                            tf = t.capture,
                            td = t.allowClicks,
                            tp = t.lockAxis,
                            tg = t.onLockAxis;
                        this.target = m = M(m) || s, this.vars = t, O && (O = r.utils.toArray(O)), e = e || 1e-9, h = h || 0, j = j || 1, th = th || 1, g = g || "wheel,touch,pointer", y = !1 !== y, _ || (_ = parseFloat(i.getComputedStyle(a).lineHeight) || 22);
                        var tm, tv, t_, ty, tb, tw, tT, tx = this,
                            tS = 0,
                            tP = 0,
                            tk = R(m, C),
                            tO = R(m, D),
                            tj = tk(),
                            tE = tO(),
                            tA = ~g.indexOf("touch") && !~g.indexOf("pointer") && "pointerdown" === d[0],
                            tC = S(m),
                            tD = m.ownerDocument || o,
                            tM = [0, 0, 0],
                            tR = [0, 0, 0],
                            tI = 0,
                            tz = function() {
                                return tI = b()
                            },
                            tL = function(t, e) {
                                return (tx.event = t) && O && ~O.indexOf(t.target) || e && tA && "touch" !== t.pointerType || tn && tn(t, e)
                            },
                            tF = function() {
                                var t = tx.deltaX = L(tM),
                                    r = tx.deltaY = L(tR),
                                    n = Math.abs(t) >= e,
                                    i = Math.abs(r) >= e;
                                Z && (n || i) && Z(tx, t, r, tM, tR), n && (W && tx.deltaX > 0 && W(tx), H && tx.deltaX < 0 && H(tx), G && G(tx), J && tx.deltaX < 0 != tS < 0 && J(tx), tS = tx.deltaX, tM[0] = tM[1] = tM[2] = 0), i && (X && tx.deltaY > 0 && X(tx), Y && tx.deltaY < 0 && Y(tx), K && K(tx), Q && tx.deltaY < 0 != tP < 0 && Q(tx), tP = tx.deltaY, tR[0] = tR[1] = tR[2] = 0), (ty || t_) && (tr && tr(tx), t_ && (V(tx), t_ = !1), ty = !1), tw && (tw = !1, 1) && tg && tg(tx), tb && (ta(tx), tb = !1), tm = 0
                            },
                            tN = function(t, e, r) {
                                tM[r] += t, tR[r] += e, tx._vx.update(t), tx._vy.update(e), y ? tm || (tm = requestAnimationFrame(tF)) : tF()
                            },
                            tB = function(t, e) {
                                tp && !tT && (tx.axis = tT = Math.abs(t) > Math.abs(e) ? "x" : "y", tw = !0), "y" !== tT && (tM[2] += t, tx._vx.update(t, !0)), "x" !== tT && (tR[2] += e, tx._vy.update(e, !0)), y ? tm || (tm = requestAnimationFrame(tF)) : tF()
                            },
                            t$ = function(t) {
                                if (!tL(t, 1)) {
                                    var e = (t = z(t, w)).clientX,
                                        r = t.clientY,
                                        n = e - tx.x,
                                        i = r - tx.y,
                                        o = tx.isDragging;
                                    tx.x = e, tx.y = r, (o || Math.abs(tx.startX - e) >= h || Math.abs(tx.startY - r) >= h) && (V && (t_ = !0), o || (tx.isDragging = !0), tB(n, i), o || B && B(tx))
                                }
                            },
                            tV = tx.onPress = function(t) {
                                tL(t, 1) || t && t.button || (tx.axis = tT = null, tv.pause(), tx.isPressed = !0, t = z(t), tS = tP = 0, tx.startX = tx.x = t.clientX, tx.startY = tx.y = t.clientY, tx._vx.reset(), tx._vy.reset(), P(ti ? m : tD, d[1], t$, w, !0), tx.deltaX = tx.deltaY = 0, U && U(tx))
                            },
                            tU = tx.onRelease = function(t) {
                                if (!tL(t, 1)) {
                                    k(ti ? m : tD, d[1], t$, !0);
                                    var e = !isNaN(tx.y - tx.startY),
                                        n = tx.isDragging && (Math.abs(tx.x - tx.startX) > 3 || Math.abs(tx.y - tx.startY) > 3),
                                        o = z(t);
                                    !n && e && (tx._vx.reset(), tx._vy.reset(), w && td && r.delayedCall(.08, function() {
                                        if (b() - tI > 300 && !t.defaultPrevented) {
                                            if (t.target.click) t.target.click();
                                            else if (tD.createEvent) {
                                                var e = tD.createEvent("MouseEvents");
                                                e.initMouseEvent("click", !0, !0, i, 1, o.screenX, o.screenY, o.clientX, o.clientY, !1, !1, !1, !1, 0, null), t.target.dispatchEvent(e)
                                            }
                                        }
                                    })), tx.isDragging = tx.isGesturing = tx.isPressed = !1, T && !ti && tv.restart(!0), $ && n && $(tx), q && q(tx, n)
                                }
                            },
                            tq = function(t) {
                                return t.touches && t.touches.length > 1 && (tx.isGesturing = !0) && to(t, tx.isDragging)
                            },
                            tW = function() {
                                return tx.isGesturing = !1, ts(tx)
                            },
                            tH = function(t) {
                                if (!tL(t)) {
                                    var e = tk(),
                                        r = tO();
                                    tN((e - tj) * th, (r - tE) * th, 1), tj = e, tE = r, T && tv.restart(!0)
                                }
                            },
                            tY = function(t) {
                                if (!tL(t)) {
                                    t = z(t, w), ta && (tb = !0);
                                    var e = (1 === t.deltaMode ? _ : 2 === t.deltaMode ? i.innerHeight : 1) * j;
                                    tN(t.deltaX * e, t.deltaY * e, 0), T && !ti && tv.restart(!0)
                                }
                            },
                            tX = function(t) {
                                if (!tL(t)) {
                                    var e = t.clientX,
                                        r = t.clientY,
                                        n = e - tx.x,
                                        i = r - tx.y;
                                    tx.x = e, tx.y = r, ty = !0, (n || i) && tB(n, i)
                                }
                            },
                            tG = function(t) {
                                tx.event = t, tt(tx)
                            },
                            tK = function(t) {
                                tx.event = t, te(tx)
                            },
                            tZ = function(t) {
                                return tL(t) || z(t, w) && tc(tx)
                            };
                        tv = tx._dc = r.delayedCall(x || .25, function() {
                            tx._vx.reset(), tx._vy.reset(), tv.pause(), T && T(tx)
                        }).pause(), tx.deltaX = tx.deltaY = 0, tx._vx = I(0, 50, !0), tx._vy = I(0, 50, !0), tx.scrollX = tk, tx.scrollY = tO, tx.isDragging = tx.isGesturing = tx.isPressed = !1, p(this), tx.enable = function(t) {
                            return !tx.isEnabled && (P(tC ? tD : m, "scroll", E), g.indexOf("scroll") >= 0 && P(tC ? tD : m, "scroll", tH, w, tf), g.indexOf("wheel") >= 0 && P(m, "wheel", tY, w, tf), (g.indexOf("touch") >= 0 && l || g.indexOf("pointer") >= 0) && (P(m, d[0], tV, w, tf), P(tD, d[2], tU), P(tD, d[3], tU), td && P(m, "click", tz, !1, !0), tc && P(m, "click", tZ), to && P(tD, "gesturestart", tq), ts && P(tD, "gestureend", tW), tt && P(m, u + "enter", tG), te && P(m, u + "leave", tK), tr && P(m, u + "move", tX)), tx.isEnabled = !0, t && t.type && tV(t), tl && tl(tx)), tx
                        }, tx.disable = function() {
                            tx.isEnabled && (v.filter(function(t) {
                                return t !== tx && S(t.target)
                            }).length || k(tC ? tD : m, "scroll", E), tx.isPressed && (tx._vx.reset(), tx._vy.reset(), k(ti ? m : tD, d[1], t$, !0)), k(tC ? tD : m, "scroll", tH, tf), k(m, "wheel", tY, tf), k(m, d[0], tV, tf), k(tD, d[2], tU), k(tD, d[3], tU), k(m, "click", tz, !0), k(m, "click", tZ), k(tD, "gesturestart", tq), k(tD, "gestureend", tW), k(m, u + "enter", tG), k(m, u + "leave", tK), k(m, u + "move", tX), tx.isEnabled = tx.isPressed = tx.isDragging = !1, tu && tu(tx))
                        }, tx.kill = tx.revert = function() {
                            tx.disable();
                            var t = v.indexOf(tx);
                            t >= 0 && v.splice(t, 1), f === tx && (f = 0)
                        }, v.push(tx), ti && S(m) && (f = tx), tx.enable(A)
                    }, e(h.prototype, [{
                        key: "velocityX",
                        get: function() {
                            return this._vx.getVelocity()
                        }
                    }, {
                        key: "velocityY",
                        get: function() {
                            return this._vy.getVelocity()
                        }
                    }]), t && e(h, t), h
                }();
                B.version = "3.11.5", B.create = function(t) {
                    return new B(t)
                }, B.register = N, B.getAll = function() {
                    return v.slice()
                }, B.getById = function(t) {
                    return v.filter(function(e) {
                        return e.vars.id === t
                    })[0]
                }, g() && r.registerPlugin(B);
                /*!
                 * ScrollTrigger 3.11.5
                 * https://greensock.com
                 *
                 * @license Copyright 2008-2023, GreenSock. All rights reserved.
                 * Subject to the terms at https://greensock.com/standard-license or for
                 * Club GreenSock members, the agreement issued with that membership.
                 * @author: Jack Doyle, jack@greensock.com
                 */
                var $, V, U, q, W, H, Y, X, G, K, Z, J, Q, tt, te, tr, tn, ti, to, ts, ta, tl, tu, tc, th, tf, td, tp, tg, tm, tv, t_, ty, tb, tw = 1,
                    tT = Date.now,
                    tx = tT(),
                    tS = 0,
                    tP = 0,
                    tk = function() {
                        return tt = 1
                    },
                    tO = function() {
                        return tt = 0
                    },
                    tj = function(t) {
                        return t
                    },
                    tE = function(t) {
                        return Math.round(1e5 * t) / 1e5 || 0
                    },
                    tA = function() {
                        return "undefined" != typeof window
                    },
                    tC = function() {
                        return $ || tA() && ($ = window.gsap) && $.registerPlugin && $
                    },
                    tD = function(t) {
                        return !!~Y.indexOf(t)
                    },
                    tM = function(t) {
                        return x(t, "getBoundingClientRect") || (tD(t) ? function() {
                            return eL.width = U.innerWidth, eL.height = U.innerHeight, eL
                        } : function() {
                            return t8(t)
                        })
                    },
                    tR = function(t, e, r) {
                        var n = r.d,
                            i = r.d2,
                            o = r.a;
                        return (o = x(t, "getBoundingClientRect")) ? function() {
                            return o()[n]
                        } : function() {
                            return (e ? U["inner" + i] : t["client" + i]) || 0
                        }
                    },
                    tI = function(t, e) {
                        var r = e.s,
                            n = e.d2,
                            i = e.d,
                            o = e.a;
                        return Math.max(0, (o = x(t, r = "scroll" + n)) ? o() - tM(t)()[i] : tD(t) ? (W[r] || H[r]) - (U["inner" + n] || W["client" + n] || H["client" + n]) : t[r] - t["offset" + n])
                    },
                    tz = function(t, e) {
                        for (var r = 0; r < to.length; r += 3)(!e || ~e.indexOf(to[r + 1])) && t(to[r], to[r + 1], to[r + 2])
                    },
                    tL = function(t) {
                        return "string" == typeof t
                    },
                    tF = function(t) {
                        return "function" == typeof t
                    },
                    tN = function(t) {
                        return "number" == typeof t
                    },
                    tB = function(t) {
                        return "object" == typeof t
                    },
                    t$ = function(t, e, r) {
                        return t && t.progress(e ? 0 : 1) && r && t.pause()
                    },
                    tV = function(t, e) {
                        if (t.enabled) {
                            var r = e(t);
                            r && r.totalTime && (t.callbackAnimation = r)
                        }
                    },
                    tU = Math.abs,
                    tq = "left",
                    tW = "right",
                    tH = "bottom",
                    tY = "width",
                    tX = "height",
                    tG = "Right",
                    tK = "Left",
                    tZ = "Bottom",
                    tJ = "padding",
                    tQ = "margin",
                    t0 = "Width",
                    t1 = "Height",
                    t2 = function(t) {
                        return U.getComputedStyle(t)
                    },
                    t5 = function(t) {
                        var e = t2(t).position;
                        t.style.position = "absolute" === e || "fixed" === e ? e : "relative"
                    },
                    t3 = function(t, e) {
                        for (var r in e) r in t || (t[r] = e[r]);
                        return t
                    },
                    t8 = function(t, e) {
                        var r = e && "matrix(1, 0, 0, 1, 0, 0)" !== t2(t)[te] && $.to(t, {
                                x: 0,
                                y: 0,
                                xPercent: 0,
                                yPercent: 0,
                                rotation: 0,
                                rotationX: 0,
                                rotationY: 0,
                                scale: 1,
                                skewX: 0,
                                skewY: 0
                            }).progress(1),
                            n = t.getBoundingClientRect();
                        return r && r.progress(0).kill(), n
                    },
                    t6 = function(t, e) {
                        var r = e.d2;
                        return t["offset" + r] || t["client" + r] || 0
                    },
                    t7 = function(t) {
                        var e, r = [],
                            n = t.labels,
                            i = t.duration();
                        for (e in n) r.push(n[e] / i);
                        return r
                    },
                    t4 = function(t) {
                        var e = $.utils.snap(t),
                            r = Array.isArray(t) && t.slice(0).sort(function(t, e) {
                                return t - e
                            });
                        return r ? function(t, n, i) {
                            var o;
                            if (void 0 === i && (i = .001), !n) return e(t);
                            if (n > 0) {
                                for (t -= i, o = 0; o < r.length; o++)
                                    if (r[o] >= t) return r[o];
                                return r[o - 1]
                            }
                            for (o = r.length, t += i; o--;)
                                if (r[o] <= t) return r[o];
                            return r[0]
                        } : function(r, n, i) {
                            void 0 === i && (i = .001);
                            var o = e(r);
                            return !n || Math.abs(o - r) < i || o - r < 0 == n < 0 ? o : e(n < 0 ? r - t : r + t)
                        }
                    },
                    t9 = function(t, e, r, n) {
                        return r.split(",").forEach(function(r) {
                            return t(e, r, n)
                        })
                    },
                    et = function(t, e, r, n, i) {
                        return t.addEventListener(e, r, {
                            passive: !n,
                            capture: !!i
                        })
                    },
                    ee = function(t, e, r, n) {
                        return t.removeEventListener(e, r, !!n)
                    },
                    er = function(t, e, r) {
                        (r = r && r.wheelHandler) && (t(e, "wheel", r), t(e, "touchmove", r))
                    },
                    en = {
                        startColor: "green",
                        endColor: "red",
                        indent: 0,
                        fontSize: "16px",
                        fontWeight: "normal"
                    },
                    ei = {
                        toggleActions: "play",
                        anticipatePin: 0
                    },
                    eo = {
                        top: 0,
                        left: 0,
                        center: .5,
                        bottom: 1,
                        right: 1
                    },
                    es = function(t, e) {
                        if (tL(t)) {
                            var r = t.indexOf("="),
                                n = ~r ? +(t.charAt(r - 1) + 1) * parseFloat(t.substr(r + 1)) : 0;
                            ~r && (t.indexOf("%") > r && (n *= e / 100), t = t.substr(0, r - 1)), t = n + (t in eo ? eo[t] * e : ~t.indexOf("%") ? parseFloat(t) * e / 100 : parseFloat(t) || 0)
                        }
                        return t
                    },
                    ea = function(t, e, r, n, i, o, s, a) {
                        var l = i.startColor,
                            u = i.endColor,
                            c = i.fontSize,
                            h = i.indent,
                            f = i.fontWeight,
                            d = q.createElement("div"),
                            p = tD(r) || "fixed" === x(r, "pinType"),
                            g = -1 !== t.indexOf("scroller"),
                            m = p ? H : r,
                            v = -1 !== t.indexOf("start"),
                            _ = v ? l : u,
                            y = "border-color:" + _ + ";font-size:" + c + ";color:" + _ + ";font-weight:" + f + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
                        return y += "position:" + ((g || a) && p ? "fixed;" : "absolute;"), (g || a || !p) && (y += (n === D ? tW : tH) + ":" + (o + parseFloat(h)) + "px;"), s && (y += "box-sizing:border-box;text-align:left;width:" + s.offsetWidth + "px;"), d._isStart = v, d.setAttribute("class", "gsap-marker-" + t + (e ? " marker-" + e : "")), d.style.cssText = y, d.innerText = e || 0 === e ? t + "-" + e : t, m.children[0] ? m.insertBefore(d, m.children[0]) : m.appendChild(d), d._offset = d["offset" + n.op.d2], el(d, 0, n, v), d
                    },
                    el = function(t, e, r, n) {
                        var i = {
                                display: "block"
                            },
                            o = r[n ? "os2" : "p2"],
                            s = r[n ? "p2" : "os2"];
                        t._isFlipped = n, i[r.a + "Percent"] = n ? -100 : 0, i[r.a] = n ? "1px" : 0, i["border" + o + t0] = 1, i["border" + s + t0] = 0, i[r.p] = e + "px", $.set(t, i)
                    },
                    eu = [],
                    ec = {},
                    eh = function() {
                        return tT() - tS > 34 && (tv || (tv = requestAnimationFrame(ej)))
                    },
                    ef = function() {
                        tu && tu.isPressed && !(tu.startX > H.clientWidth) || (_.cache++, tu ? tv || (tv = requestAnimationFrame(ej)) : ej(), tS || e_("scrollStart"), tS = tT())
                    },
                    ed = function() {
                        tf = U.innerWidth, th = U.innerHeight
                    },
                    ep = function() {
                        _.cache++, !(!Q && !tl && !q.fullscreenElement && !q.webkitFullscreenElement && (!tc || tf !== U.innerWidth || Math.abs(U.innerHeight - th) > .25 * U.innerHeight)) || X.restart(!0)
                    },
                    eg = {},
                    em = [],
                    ev = function t() {
                        return ee(eU, "scrollEnd", t) || eP(!0)
                    },
                    e_ = function(t) {
                        return eg[t] && eg[t].map(function(t) {
                            return t()
                        }) || em
                    },
                    ey = [],
                    eb = function(t) {
                        for (var e = 0; e < ey.length; e += 5)(!t || ey[e + 4] && ey[e + 4].query === t) && (ey[e].style.cssText = ey[e + 1], ey[e].getBBox && ey[e].setAttribute("transform", ey[e + 2] || ""), ey[e + 3].uncache = 1)
                    },
                    ew = function(t, e) {
                        var r;
                        for (tr = 0; tr < eu.length; tr++)(r = eu[tr]) && (!e || r._ctx === e) && (t ? r.kill(1) : r.revert(!0, !0));
                        e && eb(e), e || e_("revert")
                    },
                    eT = function(t, e) {
                        _.cache++, (e || !t_) && _.forEach(function(t) {
                            return tF(t) && t.cacheID++ && (t.rec = 0)
                        }), tL(t) && (U.history.scrollRestoration = tg = t)
                    },
                    ex = 0,
                    eS = function() {
                        if (ty !== ex) {
                            var t = ty = ex;
                            requestAnimationFrame(function() {
                                return t === ex && eP(!0)
                            })
                        }
                    },
                    eP = function(t, e) {
                        if (tS && !t) {
                            et(eU, "scrollEnd", ev);
                            return
                        }
                        t_ = eU.isRefreshing = !0, _.forEach(function(t) {
                            return tF(t) && t.cacheID++ && (t.rec = t())
                        });
                        var r = e_("refreshInit");
                        ts && eU.sort(), e || ew(), _.forEach(function(t) {
                            tF(t) && (t.smooth && (t.target.style.scrollBehavior = "auto"), t(0))
                        }), eu.slice(0).forEach(function(t) {
                            return t.refresh()
                        }), eu.forEach(function(t, e) {
                            if (t._subPinOffset && t.pin) {
                                var r = t.vars.horizontal ? "offsetWidth" : "offsetHeight",
                                    n = t.pin[r];
                                t.revert(!0, 1), t.adjustPinSpacing(t.pin[r] - n), t.refresh()
                            }
                        }), eu.forEach(function(t) {
                            return "max" === t.vars.end && t.setPositions(t.start, Math.max(t.start + 1, tI(t.scroller, t._dir)))
                        }), r.forEach(function(t) {
                            return t && t.render && t.render(-1)
                        }), _.forEach(function(t) {
                            tF(t) && (t.smooth && requestAnimationFrame(function() {
                                return t.target.style.scrollBehavior = "smooth"
                            }), t.rec && t(t.rec))
                        }), eT(tg, 1), X.pause(), ex++, t_ = 2, ej(2), eu.forEach(function(t) {
                            return tF(t.vars.onRefresh) && t.vars.onRefresh(t)
                        }), t_ = eU.isRefreshing = !1, e_("refresh")
                    },
                    ek = 0,
                    eO = 1,
                    ej = function(t) {
                        if (!t_ || 2 === t) {
                            eU.isUpdating = !0, tb && tb.update(0);
                            var e = eu.length,
                                r = tT(),
                                n = r - tx >= 50,
                                i = e && eu[0].scroll();
                            if (eO = ek > i ? -1 : 1, t_ || (ek = i), n && (tS && !tt && r - tS > 200 && (tS = 0, e_("scrollEnd")), Z = tx, tx = r), eO < 0) {
                                for (tr = e; tr-- > 0;) eu[tr] && eu[tr].update(0, n);
                                eO = 1
                            } else
                                for (tr = 0; tr < e; tr++) eu[tr] && eu[tr].update(0, n);
                            eU.isUpdating = !1
                        }
                        tv = 0
                    },
                    eE = [tq, "top", tH, tW, tQ + tZ, tQ + tG, tQ + "Top", tQ + tK, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
                    eA = eE.concat([tY, tX, "boxSizing", "max" + t0, "max" + t1, "position", tQ, tJ, tJ + "Top", tJ + tG, tJ + tZ, tJ + tK]),
                    eC = function(t, e, r) {
                        eR(r);
                        var n = t._gsap;
                        if (n.spacerIsNative) eR(n.spacerState);
                        else if (t._gsap.swappedIn) {
                            var i = e.parentNode;
                            i && (i.insertBefore(t, e), i.removeChild(e))
                        }
                        t._gsap.swappedIn = !1
                    },
                    eD = function(t, e, r, n) {
                        if (!t._gsap.swappedIn) {
                            for (var i, o = eE.length, s = e.style, a = t.style; o--;) s[i = eE[o]] = r[i];
                            s.position = "absolute" === r.position ? "absolute" : "relative", "inline" === r.display && (s.display = "inline-block"), a[tH] = a[tW] = "auto", s.flexBasis = r.flexBasis || "auto", s.overflow = "visible", s.boxSizing = "border-box", s[tY] = t6(t, C) + "px", s[tX] = t6(t, D) + "px", s[tJ] = a[tQ] = a.top = a[tq] = "0", eR(n), a[tY] = a["max" + t0] = r[tY], a[tX] = a["max" + t1] = r[tX], a[tJ] = r[tJ], t.parentNode !== e && (t.parentNode.insertBefore(e, t), e.appendChild(t)), t._gsap.swappedIn = !0
                        }
                    },
                    eM = /([A-Z])/g,
                    eR = function(t) {
                        if (t) {
                            var e, r, n = t.t.style,
                                i = t.length,
                                o = 0;
                            for ((t.t._gsap || $.core.getCache(t.t)).uncache = 1; o < i; o += 2) r = t[o + 1], e = t[o], r ? n[e] = r : n[e] && n.removeProperty(e.replace(eM, "-$1").toLowerCase())
                        }
                    },
                    eI = function(t) {
                        for (var e = eA.length, r = t.style, n = [], i = 0; i < e; i++) n.push(eA[i], r[eA[i]]);
                        return n.t = t, n
                    },
                    ez = function(t, e, r) {
                        for (var n, i = [], o = t.length, s = r ? 8 : 0; s < o; s += 2) n = t[s], i.push(n, n in e ? e[n] : t[s + 1]);
                        return i.t = t.t, i
                    },
                    eL = {
                        left: 0,
                        top: 0
                    },
                    eF = function(t, e, r, n, i, o, s, a, l, u, c, h, f) {
                        tF(t) && (t = t(a)), tL(t) && "max" === t.substr(0, 3) && (t = h + ("=" === t.charAt(4) ? es("0" + t.substr(3), r) : 0));
                        var d, p, g, m = f ? f.time() : 0;
                        if (f && f.seek(0), tN(t)) f && (t = $.utils.mapRange(f.scrollTrigger.start, f.scrollTrigger.end, 0, h, t)), s && el(s, r, n, !0);
                        else {
                            tF(e) && (e = e(a));
                            var v, _, y, b, w = (t || "0").split(" ");
                            (v = t8(g = M(e) || H) || {}).left || v.top || "none" !== t2(g).display || (b = g.style.display, g.style.display = "block", v = t8(g), b ? g.style.display = b : g.style.removeProperty("display")), _ = es(w[0], v[n.d]), y = es(w[1] || "0", r), t = v[n.p] - l[n.p] - u + _ + i - y, s && el(s, y, n, r - y < 20 || s._isStart && y > 20), r -= r - y
                        }
                        if (o) {
                            var T = t + r,
                                x = o._isStart;
                            d = "scroll" + n.d2, el(o, T, n, x && T > 20 || !x && (c ? Math.max(H[d], W[d]) : o.parentNode[d]) <= T + 1), c && (l = t8(s), c && (o.style[n.op.p] = l[n.op.p] - n.op.m - o._offset + "px"))
                        }
                        return f && g && (d = t8(g), f.seek(h), p = t8(g), f._caScrollDist = d[n.p] - p[n.p], t = t / f._caScrollDist * h), f && f.seek(m), f ? t : Math.round(t)
                    },
                    eN = /(webkit|moz|length|cssText|inset)/i,
                    eB = function(t, e, r, n) {
                        if (t.parentNode !== e) {
                            var i, o, s = t.style;
                            if (e === H) {
                                for (i in t._stOrig = s.cssText, o = t2(t)) + i || eN.test(i) || !o[i] || "string" != typeof s[i] || "0" === i || (s[i] = o[i]);
                                s.top = r, s.left = n
                            } else s.cssText = t._stOrig;
                            $.core.getCache(t).uncache = 1, e.appendChild(t)
                        }
                    },
                    e$ = function(t, e, r) {
                        var n = e,
                            i = n;
                        return function(e) {
                            var o = Math.round(t());
                            return o !== n && o !== i && Math.abs(o - n) > 3 && Math.abs(o - i) > 3 && (e = o, r && r()), i = n, n = e, e
                        }
                    },
                    eV = function(t, e) {
                        var r = R(t, e),
                            n = "_scroll" + e.p2,
                            i = function e(i, o, s, a, l) {
                                var u = e.tween,
                                    c = o.onComplete,
                                    h = {};
                                s = s || r();
                                var f = e$(r, s, function() {
                                    u.kill(), e.tween = 0
                                });
                                return l = a && l || 0, a = a || i - s, u && u.kill(), o[n] = i, o.modifiers = h, h[n] = function() {
                                    return f(s + a * u.ratio + l * u.ratio * u.ratio)
                                }, o.onUpdate = function() {
                                    _.cache++, ej()
                                }, o.onComplete = function() {
                                    e.tween = 0, c && c.call(u)
                                }, u = e.tween = $.to(t, o)
                            };
                        return t[n] = r, r.wheelHandler = function() {
                            return i.tween && i.tween.kill() && (i.tween = 0)
                        }, et(t, "wheel", r.wheelHandler), eU.isTouch && et(t, "touchmove", r.wheelHandler), i
                    },
                    eU = function() {
                        function t(e, r) {
                            V || t.register($) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), this.init(e, r)
                        }
                        return t.prototype.init = function(e, r) {
                            if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !tP) {
                                this.update = this.refresh = this.kill = tj;
                                return
                            }
                            var n, i, o, s, a, l, u, c, h, f, d, p, g, m, v, b, w, T, S, P, k, O, j, E, A, I, z, L, F, N, B, V, Y, X, J, te, tn, ti, to, tl, tu, tc = e = t3(tL(e) || tN(e) || e.nodeType ? {
                                    trigger: e
                                } : e, ei),
                                th = tc.onUpdate,
                                tf = tc.toggleClass,
                                td = tc.id,
                                tg = tc.onToggle,
                                tv = tc.onRefresh,
                                ty = tc.scrub,
                                tx = tc.trigger,
                                tk = tc.pin,
                                tO = tc.pinSpacing,
                                tA = tc.invalidateOnRefresh,
                                tC = tc.anticipatePin,
                                tz = tc.onScrubComplete,
                                tq = tc.onSnapComplete,
                                tW = tc.once,
                                tH = tc.snap,
                                t9 = tc.pinReparent,
                                er = tc.pinSpacer,
                                eo = tc.containerAnimation,
                                el = tc.fastScrollEnd,
                                eh = tc.preventOverlaps,
                                ed = e.horizontal || e.containerAnimation && !1 !== e.horizontal ? C : D,
                                eg = !ty && 0 !== ty,
                                em = M(e.scroller || U),
                                e_ = $.core.getCache(em),
                                ey = tD(em),
                                eb = ("pinType" in e ? e.pinType : x(em, "pinType") || ey && "fixed") === "fixed",
                                ew = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
                                eT = eg && e.toggleActions.split(" "),
                                ex = "markers" in e ? e.markers : ei.markers,
                                eP = ey ? 0 : parseFloat(t2(em)["border" + ed.p2 + t0]) || 0,
                                ek = this,
                                ej = e.onRefreshInit && function() {
                                    return e.onRefreshInit(ek)
                                },
                                eE = tR(em, ey, ed),
                                eA = !ey || ~y.indexOf(em) ? tM(em) : function() {
                                    return eL
                                },
                                eM = 0,
                                eN = 0,
                                e$ = R(em, ed);
                            if (tp(ek), ek._dir = ed, tC *= 45, ek.scroller = em, ek.scroll = eo ? eo.time.bind(eo) : e$, l = e$(), ek.vars = e, r = r || e.animation, "refreshPriority" in e && (ts = 1, -9999 === e.refreshPriority && (tb = ek)), e_.tweenScroll = e_.tweenScroll || {
                                    top: eV(em, D),
                                    left: eV(em, C)
                                }, ek.tweenTo = o = e_.tweenScroll[ed.p], ek.scrubDuration = function(t) {
                                    (X = tN(t) && t) ? Y ? Y.duration(t) : Y = $.to(r, {
                                        ease: "expo",
                                        totalProgress: "+=0.001",
                                        duration: X,
                                        paused: !0,
                                        onComplete: function() {
                                            return tz && tz(ek)
                                        }
                                    }): (Y && Y.progress(1).kill(), Y = 0)
                                }, r && (r.vars.lazy = !1, r._initted || !1 !== r.vars.immediateRender && !1 !== e.immediateRender && r.duration() && r.render(0, !0, !0), ek.animation = r.pause(), r.scrollTrigger = ek, ek.scrubDuration(ty), Y && Y.resetTo && Y.resetTo("totalProgress", 0), B = 0, td || (td = r.vars.id)), eu.push(ek), tH && ((!tB(tH) || tH.push) && (tH = {
                                    snapTo: tH
                                }), "scrollBehavior" in H.style && $.set(ey ? [H, W] : em, {
                                    scrollBehavior: "auto"
                                }), _.forEach(function(t) {
                                    return tF(t) && t.target === (ey ? q.scrollingElement || W : em) && (t.smooth = !1)
                                }), a = tF(tH.snapTo) ? tH.snapTo : "labels" === tH.snapTo ? (n = r, function(t) {
                                    return $.utils.snap(t7(n), t)
                                }) : "labelsDirectional" === tH.snapTo ? (i = r, function(t, e) {
                                    return t4(t7(i))(t, e.direction)
                                }) : !1 !== tH.directional ? function(t, e) {
                                    return t4(tH.snapTo)(t, tT() - eN < 500 ? 0 : e.direction)
                                } : $.utils.snap(tH.snapTo), J = tB(J = tH.duration || {
                                    min: .1,
                                    max: 2
                                }) ? K(J.min, J.max) : K(J, J), te = $.delayedCall(tH.delay || X / 2 || .1, function() {
                                    var t = e$(),
                                        e = tT() - eN < 500,
                                        n = o.tween;
                                    if ((e || 10 > Math.abs(ek.getVelocity())) && !n && !tt && eM !== t) {
                                        var i = (t - c) / v,
                                            s = r && !eg ? r.totalProgress() : i,
                                            l = e ? 0 : (s - V) / (tT() - Z) * 1e3 || 0,
                                            u = $.utils.clamp(-i, 1 - i, tU(l / 2) * l / .185),
                                            f = i + (!1 === tH.inertia ? 0 : u),
                                            d = K(0, 1, a(f, ek)),
                                            p = Math.round(c + d * v),
                                            g = tH,
                                            m = g.onStart,
                                            _ = g.onInterrupt,
                                            y = g.onComplete;
                                        if (t <= h && t >= c && p !== t) {
                                            if (n && !n._initted && n.data <= tU(p - t)) return;
                                            !1 === tH.inertia && (u = d - i), o(p, {
                                                duration: J(tU(.185 * Math.max(tU(f - s), tU(d - s)) / l / .05 || 0)),
                                                ease: tH.ease || "power3",
                                                data: tU(p - t),
                                                onInterrupt: function() {
                                                    return te.restart(!0) && _ && _(ek)
                                                },
                                                onComplete: function() {
                                                    ek.update(), eM = e$(), B = V = r && !eg ? r.totalProgress() : ek.progress, tq && tq(ek), y && y(ek)
                                                }
                                            }, t, u * v, p - t - u * v), m && m(ek, o.tween)
                                        }
                                    } else ek.isActive && eM !== t && te.restart(!0)
                                }).pause()), td && (ec[td] = ek), (tu = (tx = ek.trigger = M(tx || tk)) && tx._gsap && tx._gsap.stRevert) && (tu = tu(ek)), tk = !0 === tk ? tx : M(tk), tL(tf) && (tf = {
                                    targets: tx,
                                    className: tf
                                }), tk && (!1 === tO || tO === tQ || (tO = (!!tO || !tk.parentNode || !tk.parentNode.style || "flex" !== t2(tk.parentNode).display) && tJ), ek.pin = tk, (s = $.core.getCache(tk)).spacer ? b = s.pinState : (er && ((er = M(er)) && !er.nodeType && (er = er.current || er.nativeElement), s.spacerIsNative = !!er, er && (s.spacerState = eI(er))), s.spacer = S = er || q.createElement("div"), S.classList.add("pin-spacer"), td && S.classList.add("pin-spacer-" + td), s.pinState = b = eI(tk)), !1 !== e.force3D && $.set(tk, {
                                    force3D: !0
                                }), ek.spacer = S = s.spacer, A = (N = t2(tk))[tO + ed.os2], k = $.getProperty(tk), O = $.quickSetter(tk, ed.a, "px"), eD(tk, S, N), T = eI(tk)), ex) {
                                p = ea("scroller-start", td, em, ed, m = tB(ex) ? t3(ex, en) : en, 0), g = ea("scroller-end", td, em, ed, m, 0, p), P = p["offset" + ed.op.d2];
                                var eU = M(x(em, "content") || em);
                                f = this.markerStart = ea("start", td, eU, ed, m, P, 0, eo), d = this.markerEnd = ea("end", td, eU, ed, m, P, 0, eo), eo && (tl = $.quickSetter([f, d], ed.a, "px")), eb || y.length && !0 === x(em, "fixedMarkers") || (t5(ey ? H : em), $.set([p, g], {
                                    force3D: !0
                                }), z = $.quickSetter(p, ed.a, "px"), F = $.quickSetter(g, ed.a, "px"))
                            }
                            if (eo) {
                                var eq = eo.vars.onUpdate,
                                    eW = eo.vars.onUpdateParams;
                                eo.eventCallback("onUpdate", function() {
                                    ek.update(0, 0, 1), eq && eq.apply(eo, eW || [])
                                })
                            }
                            ek.previous = function() {
                                return eu[eu.indexOf(ek) - 1]
                            }, ek.next = function() {
                                return eu[eu.indexOf(ek) + 1]
                            }, ek.revert = function(t, e) {
                                if (!e) return ek.kill(!0);
                                var n = !1 !== t || !ek.enabled,
                                    i = Q;
                                n !== ek.isReverted && (n && (ti = Math.max(e$(), ek.scroll.rec || 0), tn = ek.progress, to = r && r.progress()), f && [f, d, p, g].forEach(function(t) {
                                    return t.style.display = n ? "none" : "block"
                                }), n && (Q = ek, ek.update(n)), !tk || t9 && ek.isActive || (n ? eC(tk, S, b) : eD(tk, S, t2(tk), I)), n || ek.update(n), Q = i, ek.isReverted = n)
                            }, ek.refresh = function(n, i) {
                                if (!Q && ek.enabled || i) {
                                    if (tk && n && tS) {
                                        et(t, "scrollEnd", ev);
                                        return
                                    }!t_ && ej && ej(ek), Q = ek, eN = tT(), o.tween && (o.tween.kill(), o.tween = 0), Y && Y.pause(), tA && r && r.revert({
                                        kill: !1
                                    }).invalidate(), ek.isReverted || ek.revert(!0, !0), ek._subPinOffset = !1;
                                    for (var s, a, m, _, y, x, P, O, A, z, F, N = eE(), B = eA(), V = eo ? eo.duration() : tI(em, ed), U = v <= .01, X = 0, G = 0, K = e.end, Z = e.endTrigger || tx, J = e.start || (0 !== e.start && tx ? tk ? "0 0" : "0 100%" : 0), tt = ek.pinnedContainer = e.pinnedContainer && M(e.pinnedContainer), tr = tx && Math.max(0, eu.indexOf(ek)) || 0, ts = tr; ts--;)(x = eu[ts]).end || x.refresh(0, 1) || (Q = ek), (P = x.pin) && (P === tx || P === tk || P === tt) && !x.isReverted && (z || (z = []), z.unshift(x), x.revert(!0, !0)), x !== eu[ts] && (tr--, ts--);
                                    for (tF(J) && (J = J(ek)), c = eF(J, tx, N, ed, e$(), f, p, ek, B, eP, eb, V, eo) || (tk ? -.001 : 0), tF(K) && (K = K(ek)), tL(K) && !K.indexOf("+=") && (~K.indexOf(" ") ? K = (tL(J) ? J.split(" ")[0] : "") + K : (X = es(K.substr(2), N), K = tL(J) ? J : (eo ? $.utils.mapRange(0, eo.duration(), eo.scrollTrigger.start, eo.scrollTrigger.end, c) : c) + X, Z = tx)), v = (h = Math.max(c, eF(K || (Z ? "100% 0" : V), Z, N, ed, e$() + X, d, g, ek, B, eP, eb, V, eo)) || -.001) - c || (c -= .01) && .001, X = 0, ts = tr; ts--;)(P = (x = eu[ts]).pin) && x.start - x._pinPush <= c && !eo && x.end > 0 && (s = x.end - x.start, (P === tx && x.start - x._pinPush < c || P === tt) && !tN(J) && (X += s * (1 - x.progress)), P === tk && (G += s));
                                    if (c += X, h += X, U && (tn = $.utils.clamp(0, 1, $.utils.normalize(c, h, ti))), ek._pinPush = G, f && X && ((s = {})[ed.a] = "+=" + X, tt && (s[ed.p] = "-=" + e$()), $.set([f, d], s)), tk) s = t2(tk), _ = ed === D, m = e$(), j = parseFloat(k(ed.a)) + G, !V && h > 1 && ((F = {
                                        style: F = (ey ? q.scrollingElement || W : em).style,
                                        value: F["overflow" + ed.a.toUpperCase()]
                                    }).style["overflow" + ed.a.toUpperCase()] = "scroll"), eD(tk, S, s), T = eI(tk), a = t8(tk, !0), O = eb && R(em, _ ? C : D)(), tO && ((I = [tO + ed.os2, v + G + "px"]).t = S, (ts = tO === tJ ? t6(tk, ed) + v + G : 0) && I.push(ed.d, ts + "px"), eR(I), tt && eu.forEach(function(t) {
                                        t.pin === tt && !1 !== t.vars.pinSpacing && (t._subPinOffset = !0)
                                    }), eb && e$(ti)), eb && ((y = {
                                        top: a.top + (_ ? m - c : O) + "px",
                                        left: a.left + (_ ? O : m - c) + "px",
                                        boxSizing: "border-box",
                                        position: "fixed"
                                    })[tY] = y["max" + t0] = Math.ceil(a.width) + "px", y[tX] = y["max" + t1] = Math.ceil(a.height) + "px", y[tQ] = y[tQ + "Top"] = y[tQ + tG] = y[tQ + tZ] = y[tQ + tK] = "0", y[tJ] = s[tJ], y[tJ + "Top"] = s[tJ + "Top"], y[tJ + tG] = s[tJ + tG], y[tJ + tZ] = s[tJ + tZ], y[tJ + tK] = s[tJ + tK], w = ez(b, y, t9), t_ && e$(0)), r ? (A = r._initted, ta(1), r.render(r.duration(), !0, !0), E = k(ed.a) - j + v + G, L = Math.abs(v - E) > 1, eb && L && w.splice(w.length - 2, 2), r.render(0, !0, !0), A || r.invalidate(!0), r.parent || r.totalTime(r.totalTime()), ta(0)) : E = v, F && (F.value ? F.style["overflow" + ed.a.toUpperCase()] = F.value : F.style.removeProperty("overflow-" + ed.a));
                                    else if (tx && e$() && !eo)
                                        for (a = tx.parentNode; a && a !== H;) a._pinOffset && (c -= a._pinOffset, h -= a._pinOffset), a = a.parentNode;
                                    z && z.forEach(function(t) {
                                        return t.revert(!1, !0)
                                    }), ek.start = c, ek.end = h, l = u = t_ ? ti : e$(), eo || t_ || (l < ti && e$(ti), ek.scroll.rec = 0), ek.revert(!1, !0), te && (eM = -1, ek.isActive && e$(c + v * tn), te.restart(!0)), Q = 0, r && eg && (r._initted || to) && r.progress() !== to && r.progress(to, !0).render(r.time(), !0, !0), (U || tn !== ek.progress || eo) && (r && !eg && r.totalProgress(eo && c < -.001 && !tn ? $.utils.normalize(c, h, 0) : tn, !0), ek.progress = (l - c) / v === tn ? 0 : tn), tk && tO && (S._pinOffset = Math.round(ek.progress * E)), Y && Y.invalidate(), tv && !t_ && tv(ek)
                                }
                            }, ek.getVelocity = function() {
                                return (e$() - u) / (tT() - Z) * 1e3 || 0
                            }, ek.endAnimation = function() {
                                t$(ek.callbackAnimation), r && (Y ? Y.progress(1) : r.paused() ? eg || t$(r, ek.direction < 0, 1) : t$(r, r.reversed()))
                            }, ek.labelToScroll = function(t) {
                                return r && r.labels && (c || ek.refresh() || c) + r.labels[t] / r.duration() * v || 0
                            }, ek.getTrailing = function(t) {
                                var e = eu.indexOf(ek),
                                    r = ek.direction > 0 ? eu.slice(0, e).reverse() : eu.slice(e + 1);
                                return (tL(t) ? r.filter(function(e) {
                                    return e.vars.preventOverlaps === t
                                }) : r).filter(function(t) {
                                    return ek.direction > 0 ? t.end <= c : t.start >= h
                                })
                            }, ek.update = function(t, e, n) {
                                if (!eo || n || t) {
                                    var i, s, a, f, d, g, m, _ = !0 === t_ ? ti : ek.scroll(),
                                        y = t ? 0 : (_ - c) / v,
                                        b = y < 0 ? 0 : y > 1 ? 1 : y || 0,
                                        x = ek.progress;
                                    if (e && (u = l, l = eo ? e$() : _, tH && (V = B, B = r && !eg ? r.totalProgress() : b)), tC && !b && tk && !Q && !tw && tS && c < _ + (_ - u) / (tT() - Z) * tC && (b = 1e-4), b !== x && ek.enabled) {
                                        if (f = (d = (i = ek.isActive = !!b && b < 1) != (!!x && x < 1)) || !!b != !!x, ek.direction = b > x ? 1 : -1, ek.progress = b, f && !Q && (s = b && !x ? 0 : 1 === b ? 1 : 1 === x ? 2 : 3, eg && (a = !d && "none" !== eT[s + 1] && eT[s + 1] || eT[s], m = r && ("complete" === a || "reset" === a || a in r))), eh && (d || m) && (m || ty || !r) && (tF(eh) ? eh(ek) : ek.getTrailing(eh).forEach(function(t) {
                                                return t.endAnimation()
                                            })), !eg && (!Y || Q || tw ? r && r.totalProgress(b, !!Q) : (Y._dp._time - Y._start !== Y._time && Y.render(Y._dp._time - Y._start), Y.resetTo ? Y.resetTo("totalProgress", b, r._tTime / r._tDur) : (Y.vars.totalProgress = b, Y.invalidate().restart()))), tk) {
                                            if (t && tO && (S.style[tO + ed.os2] = A), eb) {
                                                if (f) {
                                                    if (g = !t && b > x && h + 1 > _ && _ + 1 >= tI(em, ed), t9) {
                                                        if (!t && (i || g)) {
                                                            var P = t8(tk, !0),
                                                                k = _ - c;
                                                            eB(tk, H, P.top + (ed === D ? k : 0) + "px", P.left + (ed === D ? 0 : k) + "px")
                                                        } else eB(tk, S)
                                                    }
                                                    eR(i || g ? w : T), L && b < 1 && i || O(j + (1 !== b || g ? 0 : E))
                                                }
                                            } else O(tE(j + E * b))
                                        }!tH || o.tween || Q || tw || te.restart(!0), tf && (d || tW && b && (b < 1 || !tm)) && G(tf.targets).forEach(function(t) {
                                            return t.classList[i || tW ? "add" : "remove"](tf.className)
                                        }), !th || eg || t || th(ek), f && !Q ? (eg && (m && ("complete" === a ? r.pause().totalProgress(1) : "reset" === a ? r.restart(!0).pause() : "restart" === a ? r.restart(!0) : r[a]()), th && th(ek)), (d || !tm) && (tg && d && tV(ek, tg), ew[s] && tV(ek, ew[s]), tW && (1 === b ? ek.kill(!1, 1) : ew[s] = 0), !d && ew[s = 1 === b ? 1 : 3] && tV(ek, ew[s])), el && !i && Math.abs(ek.getVelocity()) > (tN(el) ? el : 2500) && (t$(ek.callbackAnimation), Y ? Y.progress(1) : t$(r, "reverse" === a ? 1 : !b, 1))) : eg && th && !Q && th(ek)
                                    }
                                    if (F) {
                                        var C = eo ? _ / eo.duration() * (eo._caScrollDist || 0) : _;
                                        z(C + (p._isFlipped ? 1 : 0)), F(C)
                                    }
                                    tl && tl(-_ / eo.duration() * (eo._caScrollDist || 0))
                                }
                            }, ek.enable = function(e, r) {
                                ek.enabled || (ek.enabled = !0, et(em, "resize", ep), et(ey ? q : em, "scroll", ef), ej && et(t, "refreshInit", ej), !1 !== e && (ek.progress = tn = 0, l = u = eM = e$()), !1 !== r && ek.refresh())
                            }, ek.getTween = function(t) {
                                return t && o ? o.tween : Y
                            }, ek.setPositions = function(t, e) {
                                tk && (j += t - c, E += e - t - v, tO === tJ && ek.adjustPinSpacing(e - t - v)), ek.start = c = t, ek.end = h = e, v = e - t, ek.update()
                            }, ek.adjustPinSpacing = function(t) {
                                if (I && t) {
                                    var e = I.indexOf(ed.d) + 1;
                                    I[e] = parseFloat(I[e]) + t + "px", I[1] = parseFloat(I[1]) + t + "px", eR(I)
                                }
                            }, ek.disable = function(e, r) {
                                if (ek.enabled && (!1 !== e && ek.revert(!0, !0), ek.enabled = ek.isActive = !1, r || Y && Y.pause(), ti = 0, s && (s.uncache = 1), ej && ee(t, "refreshInit", ej), te && (te.pause(), o.tween && o.tween.kill() && (o.tween = 0)), !ey)) {
                                    for (var n = eu.length; n--;)
                                        if (eu[n].scroller === em && eu[n] !== ek) return;
                                    ee(em, "resize", ep), ee(em, "scroll", ef)
                                }
                            }, ek.kill = function(t, n) {
                                ek.disable(t, n), Y && !n && Y.kill(), td && delete ec[td];
                                var i = eu.indexOf(ek);
                                i >= 0 && eu.splice(i, 1), i === tr && eO > 0 && tr--, i = 0, eu.forEach(function(t) {
                                    return t.scroller === ek.scroller && (i = 1)
                                }), i || t_ || (ek.scroll.rec = 0), r && (r.scrollTrigger = null, t && r.revert({
                                    kill: !1
                                }), n || r.kill()), f && [f, d, p, g].forEach(function(t) {
                                    return t.parentNode && t.parentNode.removeChild(t)
                                }), tb === ek && (tb = 0), tk && (s && (s.uncache = 1), i = 0, eu.forEach(function(t) {
                                    return t.pin === tk && i++
                                }), i || (s.spacer = 0)), e.onKill && e.onKill(ek)
                            }, ek.enable(!1, !1), tu && tu(ek), r && r.add && !v ? $.delayedCall(.01, function() {
                                return c || h || ek.refresh()
                            }) && (v = .01) && (c = h = 0) : ek.refresh(), tk && eS()
                        }, t.register = function(e) {
                            return V || ($ = e || tC(), tA() && window.document && t.enable(), V = tP), V
                        }, t.defaults = function(t) {
                            if (t)
                                for (var e in t) ei[e] = t[e];
                            return ei
                        }, t.disable = function(t, e) {
                            tP = 0, eu.forEach(function(r) {
                                return r[e ? "kill" : "disable"](t)
                            }), ee(U, "wheel", ef), ee(q, "scroll", ef), clearInterval(J), ee(q, "touchcancel", tj), ee(H, "touchstart", tj), t9(ee, q, "pointerdown,touchstart,mousedown", tk), t9(ee, q, "pointerup,touchend,mouseup", tO), X.kill(), tz(ee);
                            for (var r = 0; r < _.length; r += 3) er(ee, _[r], _[r + 1]), er(ee, _[r], _[r + 2])
                        }, t.enable = function() {
                            if (U = window, W = (q = document).documentElement, H = q.body, $ && (G = $.utils.toArray, K = $.utils.clamp, tp = $.core.context || tj, ta = $.core.suppressOverwrites || tj, tg = U.history.scrollRestoration || "auto", ek = U.pageYOffset, $.core.globals("ScrollTrigger", t), H)) {
                                tP = 1,
                                    function t() {
                                        return tP && requestAnimationFrame(t)
                                    }(), B.register($), t.isTouch = B.isTouch, td = B.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), et(U, "wheel", ef), Y = [U, q, W, H], $.matchMedia ? (t.matchMedia = function(t) {
                                        var e, r = $.matchMedia();
                                        for (e in t) r.add(e, t[e]);
                                        return r
                                    }, $.addEventListener("matchMediaInit", function() {
                                        return ew()
                                    }), $.addEventListener("matchMediaRevert", function() {
                                        return eb()
                                    }), $.addEventListener("matchMedia", function() {
                                        eP(0, 1), e_("matchMedia")
                                    }), $.matchMedia("(orientation: portrait)", function() {
                                        return ed(), ed
                                    })) : console.warn("Requires GSAP 3.11.0 or later"), ed(), et(q, "scroll", ef);
                                var e, r, n = H.style,
                                    i = n.borderTopStyle,
                                    o = $.core.Animation.prototype;
                                for (o.revert || Object.defineProperty(o, "revert", {
                                        value: function() {
                                            return this.time(-.01, !0)
                                        }
                                    }), n.borderTopStyle = "solid", e = t8(H), D.m = Math.round(e.top + D.sc()) || 0, C.m = Math.round(e.left + C.sc()) || 0, i ? n.borderTopStyle = i : n.removeProperty("border-top-style"), J = setInterval(eh, 250), $.delayedCall(.5, function() {
                                        return tw = 0
                                    }), et(q, "touchcancel", tj), et(H, "touchstart", tj), t9(et, q, "pointerdown,touchstart,mousedown", tk), t9(et, q, "pointerup,touchend,mouseup", tO), te = $.utils.checkPrefix("transform"), eA.push(te), V = tT(), X = $.delayedCall(.2, eP).pause(), to = [q, "visibilitychange", function() {
                                        var t = U.innerWidth,
                                            e = U.innerHeight;
                                        q.hidden ? (tn = t, ti = e) : (tn !== t || ti !== e) && ep()
                                    }, q, "DOMContentLoaded", eP, U, "load", eP, U, "resize", ep], tz(et), eu.forEach(function(t) {
                                        return t.enable(0, 1)
                                    }), r = 0; r < _.length; r += 3) er(ee, _[r], _[r + 1]), er(ee, _[r], _[r + 2])
                            }
                        }, t.config = function(e) {
                            "limitCallbacks" in e && (tm = !!e.limitCallbacks);
                            var r = e.syncInterval;
                            r && clearInterval(J) || (J = r) && setInterval(eh, r), "ignoreMobileResize" in e && (tc = 1 === t.isTouch && e.ignoreMobileResize), "autoRefreshEvents" in e && (tz(ee) || tz(et, e.autoRefreshEvents || "none"), tl = -1 === (e.autoRefreshEvents + "").indexOf("resize"))
                        }, t.scrollerProxy = function(t, e) {
                            var r = M(t),
                                n = _.indexOf(r),
                                i = tD(r);
                            ~n && _.splice(n, i ? 6 : 2), e && (i ? y.unshift(U, e, H, e, W, e) : y.unshift(r, e))
                        }, t.clearMatchMedia = function(t) {
                            eu.forEach(function(e) {
                                return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0)
                            })
                        }, t.isInViewport = function(t, e, r) {
                            var n = (tL(t) ? M(t) : t).getBoundingClientRect(),
                                i = n[r ? tY : tX] * e || 0;
                            return r ? n.right - i > 0 && n.left + i < U.innerWidth : n.bottom - i > 0 && n.top + i < U.innerHeight
                        }, t.positionInViewport = function(t, e, r) {
                            tL(t) && (t = M(t));
                            var n = t.getBoundingClientRect(),
                                i = n[r ? tY : tX],
                                o = null == e ? i / 2 : e in eo ? eo[e] * i : ~e.indexOf("%") ? parseFloat(e) * i / 100 : parseFloat(e) || 0;
                            return r ? (n.left + o) / U.innerWidth : (n.top + o) / U.innerHeight
                        }, t.killAll = function(t) {
                            if (eu.slice(0).forEach(function(t) {
                                    return "ScrollSmoother" !== t.vars.id && t.kill()
                                }), !0 !== t) {
                                var e = eg.killAll || [];
                                eg = {}, e.forEach(function(t) {
                                    return t()
                                })
                            }
                        }, t
                    }();
                eU.version = "3.11.5", eU.saveStyles = function(t) {
                    return t ? G(t).forEach(function(t) {
                        if (t && t.style) {
                            var e = ey.indexOf(t);
                            e >= 0 && ey.splice(e, 5), ey.push(t, t.style.cssText, t.getBBox && t.getAttribute("transform"), $.core.getCache(t), tp())
                        }
                    }) : ey
                }, eU.revert = function(t, e) {
                    return ew(!t, e)
                }, eU.create = function(t, e) {
                    return new eU(t, e)
                }, eU.refresh = function(t) {
                    return t ? ep() : (V || eU.register()) && eP(!0)
                }, eU.update = function(t) {
                    return ++_.cache && ej(!0 === t ? 2 : 0)
                }, eU.clearScrollMemory = eT, eU.maxScroll = function(t, e) {
                    return tI(t, e ? C : D)
                }, eU.getScrollFunc = function(t, e) {
                    return R(M(t), e ? C : D)
                }, eU.getById = function(t) {
                    return ec[t]
                }, eU.getAll = function() {
                    return eu.filter(function(t) {
                        return "ScrollSmoother" !== t.vars.id
                    })
                }, eU.isScrolling = function() {
                    return !!tS
                }, eU.snapDirectional = t4, eU.addEventListener = function(t, e) {
                    var r = eg[t] || (eg[t] = []);
                    ~r.indexOf(e) || r.push(e)
                }, eU.removeEventListener = function(t, e) {
                    var r = eg[t],
                        n = r && r.indexOf(e);
                    n >= 0 && r.splice(n, 1)
                }, eU.batch = function(t, e) {
                    var r, n = [],
                        i = {},
                        o = e.interval || .016,
                        s = e.batchMax || 1e9,
                        a = function(t, e) {
                            var r = [],
                                n = [],
                                i = $.delayedCall(o, function() {
                                    e(r, n), r = [], n = []
                                }).pause();
                            return function(t) {
                                r.length || i.restart(!0), r.push(t.trigger), n.push(t), s <= r.length && i.progress(1)
                            }
                        };
                    for (r in e) i[r] = "on" === r.substr(0, 2) && tF(e[r]) && "onRefreshInit" !== r ? a(r, e[r]) : e[r];
                    return tF(s) && (s = s(), et(eU, "refresh", function() {
                        return s = e.batchMax()
                    })), G(t).forEach(function(t) {
                        var e = {};
                        for (r in i) e[r] = i[r];
                        e.trigger = t, n.push(eU.create(e))
                    }), n
                };
                var eq, eW = function(t, e, r, n) {
                        return e > n ? t(n) : e < 0 && t(0), r > n ? (n - e) / (r - e) : r < 0 ? e / (e - r) : 1
                    },
                    eH = function t(e, r) {
                        !0 === r ? e.style.removeProperty("touch-action") : e.style.touchAction = !0 === r ? "auto" : r ? "pan-" + r + (B.isTouch ? " pinch-zoom" : "") : "none", e === W && t(H, r)
                    },
                    eY = {
                        auto: 1,
                        scroll: 1
                    },
                    eX = function(t) {
                        var e, r = t.event,
                            n = t.target,
                            i = t.axis,
                            o = (r.changedTouches ? r.changedTouches[0] : r).target,
                            s = o._gsap || $.core.getCache(o),
                            a = tT();
                        if (!s._isScrollT || a - s._isScrollT > 2e3) {
                            for (; o && o !== H && (o.scrollHeight <= o.clientHeight && o.scrollWidth <= o.clientWidth || !(eY[(e = t2(o)).overflowY] || eY[e.overflowX]));) o = o.parentNode;
                            s._isScroll = o && o !== n && !tD(o) && (eY[(e = t2(o)).overflowY] || eY[e.overflowX]), s._isScrollT = a
                        }(s._isScroll || "x" === i) && (r.stopPropagation(), r._gsapAllow = !0)
                    },
                    eG = function(t, e, r, n) {
                        return B.create({
                            target: t,
                            capture: !0,
                            debounce: !1,
                            lockAxis: !0,
                            type: e,
                            onWheel: n = n && eX,
                            onPress: n,
                            onDrag: n,
                            onScroll: n,
                            onEnable: function() {
                                return r && et(q, B.eventTypes[0], eZ, !1, !0)
                            },
                            onDisable: function() {
                                return ee(q, B.eventTypes[0], eZ, !0)
                            }
                        })
                    },
                    eK = /(input|label|select|textarea)/i,
                    eZ = function(t) {
                        var e = eK.test(t.target.tagName);
                        (e || eq) && (t._gsapAllow = !0, eq = e)
                    },
                    eJ = function(t) {
                        tB(t) || (t = {}), t.preventDefault = t.isNormalizer = t.allowClicks = !0, t.type || (t.type = "wheel,touch"), t.debounce = !!t.debounce, t.id = t.id || "normalizer";
                        var e, r, n, i, o, s, a, l, u = t,
                            c = u.normalizeScrollX,
                            h = u.momentum,
                            f = u.allowNestedScroll,
                            d = u.onRelease,
                            p = M(t.target) || W,
                            g = $.core.globals().ScrollSmoother,
                            m = g && g.get(),
                            v = td && (t.content && M(t.content) || m && !1 !== t.content && !m.smooth() && m.content()),
                            y = R(p, D),
                            b = R(p, C),
                            w = 1,
                            T = (B.isTouch && U.visualViewport ? U.visualViewport.scale * U.visualViewport.width : U.outerWidth) / U.innerWidth,
                            x = 0,
                            S = tF(h) ? function() {
                                return h(e)
                            } : function() {
                                return h || 2.8
                            },
                            P = eG(p, t.type, !0, f),
                            k = function() {
                                return i = !1
                            },
                            O = tj,
                            j = tj,
                            E = function() {
                                j = K(td ? 1 : 0, r = tI(p, D)), c && (O = K(0, tI(p, C))), n = ex
                            },
                            A = function() {
                                v._gsap.y = tE(parseFloat(v._gsap.y) + y.offset) + "px", v.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(v._gsap.y) + ", 0, 1)", y.offset = y.cacheID = 0
                            },
                            I = function() {
                                if (i) {
                                    requestAnimationFrame(k);
                                    var t = tE(e.deltaY / 2),
                                        r = j(y.v - t);
                                    if (v && r !== y.v + y.offset) {
                                        y.offset = r - y.v;
                                        var n = tE((parseFloat(v && v._gsap.y) || 0) - y.offset);
                                        v.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + n + ", 0, 1)", v._gsap.y = n + "px", y.cacheID = _.cache, ej()
                                    }
                                    return !0
                                }
                                y.offset && A(), i = !0
                            },
                            z = function() {
                                E(), o.isActive() && o.vars.scrollY > r && (y() > r ? o.progress(1) && y(r) : o.resetTo("scrollY", r))
                            };
                        return v && $.set(v, {
                            y: "+=0"
                        }), t.ignoreCheck = function(t) {
                            return td && "touchmove" === t.type && I() || w > 1.05 && "touchstart" !== t.type || e.isGesturing || t.touches && t.touches.length > 1
                        }, t.onPress = function() {
                            i = !1;
                            var t = w;
                            w = tE((U.visualViewport && U.visualViewport.scale || 1) / T), o.pause(), t !== w && eH(p, w > 1.01 || !c && "x"), s = b(), a = y(), E(), n = ex
                        }, t.onRelease = t.onGestureStart = function(t, e) {
                            if (y.offset && A(), e) {
                                _.cache++;
                                var n, i, s = S();
                                c && (i = (n = b()) + -(.05 * s * t.velocityX) / .227, s *= eW(b, n, i, tI(p, C)), o.vars.scrollX = O(i)), i = (n = y()) + -(.05 * s * t.velocityY) / .227, s *= eW(y, n, i, tI(p, D)), o.vars.scrollY = j(i), o.invalidate().duration(s).play(.01), (td && o.vars.scrollY >= r || n >= r - 1) && $.to({}, {
                                    onUpdate: z,
                                    duration: s
                                })
                            } else l.restart(!0);
                            d && d(t)
                        }, t.onWheel = function() {
                            o._ts && o.pause(), tT() - x > 1e3 && (n = 0, x = tT())
                        }, t.onChange = function(t, e, r, i, o) {
                            if (ex !== n && E(), e && c && b(O(i[2] === e ? s + (t.startX - t.x) : b() + e - i[1])), r) {
                                y.offset && A();
                                var l = o[2] === r,
                                    u = l ? a + t.startY - t.y : y() + r - o[1],
                                    h = j(u);
                                l && u !== h && (a += h - u), y(h)
                            }(r || e) && ej()
                        }, t.onEnable = function() {
                            eH(p, !c && "x"), eU.addEventListener("refresh", z), et(U, "resize", z), y.smooth && (y.target.style.scrollBehavior = "auto", y.smooth = b.smooth = !1), P.enable()
                        }, t.onDisable = function() {
                            eH(p, !0), ee(U, "resize", z), eU.removeEventListener("refresh", z), P.kill()
                        }, t.lockAxis = !1 !== t.lockAxis, (e = new B(t)).iOS = td, td && !y() && y(1), td && $.ticker.add(tj), l = e._dc, o = $.to(e, {
                            ease: "power4",
                            paused: !0,
                            scrollX: c ? "+=0.1" : "+=0",
                            scrollY: "+=0.1",
                            modifiers: {
                                scrollY: e$(y, y(), function() {
                                    return o.pause()
                                })
                            },
                            onUpdate: ej,
                            onComplete: l.vars.onComplete
                        }), e
                    };
                eU.sort = function(t) {
                    return eu.sort(t || function(t, e) {
                        return -1e6 * (t.vars.refreshPriority || 0) + t.start - (e.start + -1e6 * (e.vars.refreshPriority || 0))
                    })
                }, eU.observe = function(t) {
                    return new B(t)
                }, eU.normalizeScroll = function(t) {
                    if (void 0 === t) return tu;
                    if (!0 === t && tu) return tu.enable();
                    if (!1 === t) return tu && tu.kill();
                    var e = t instanceof B ? t : eJ(t);
                    return tu && tu.target === e.target && tu.kill(), tD(e.target) && (tu = e), e
                }, eU.core = {
                    _getVelocityProp: I,
                    _inputObserver: eG,
                    _scrollers: _,
                    _proxies: y,
                    bridge: {
                        ss: function() {
                            tS || e_("scrollStart"), tS = tT()
                        },
                        ref: function() {
                            return Q
                        }
                    }
                }, tC() && $.registerPlugin(eU), t.ScrollTrigger = eU, t.default = eU, "undefined" == typeof window || window !== t ? Object.defineProperty(t, "__esModule", {
                    value: !0
                }) : delete window.default
            }(e)
        },
        2044: function(t, e, r) {
            "use strict";

            function n(t) {
                if (void 0 === t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function i(t, e) {
                t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
            }
            r.d(e, {
                ZP: function() {
                    return nR
                },
                p8: function() {
                    return nR
                }
            });
            /*!
             * GSAP 3.11.5
             * https://greensock.com
             *
             * @license Copyright 2008-2023, GreenSock. All rights reserved.
             * Subject to the terms at https://greensock.com/standard-license or for
             * Club GreenSock members, the agreement issued with that membership.
             * @author: Jack Doyle, jack@greensock.com
             */
            var o, s, a, l, u, c, h, f, d, p, g, m, v, _, y, b, w, T, x, S, P, k, O, j, E, A, C, D, M, R = {
                    autoSleep: 120,
                    force3D: "auto",
                    nullTargetWarn: 1,
                    units: {
                        lineHeight: ""
                    }
                },
                I = {
                    duration: .5,
                    overwrite: !1,
                    delay: 0
                },
                z = 2 * Math.PI,
                L = z / 4,
                F = 0,
                N = Math.sqrt,
                B = Math.cos,
                $ = Math.sin,
                V = function(t) {
                    return "string" == typeof t
                },
                U = function(t) {
                    return "function" == typeof t
                },
                q = function(t) {
                    return "number" == typeof t
                },
                W = function(t) {
                    return void 0 === t
                },
                H = function(t) {
                    return "object" == typeof t
                },
                Y = function(t) {
                    return !1 !== t
                },
                X = function() {
                    return "undefined" != typeof window
                },
                G = function(t) {
                    return U(t) || V(t)
                },
                K = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
                Z = Array.isArray,
                J = /(?:-?\.?\d|\.)+/gi,
                Q = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
                tt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
                te = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
                tr = /[+-]=-?[.\d]+/,
                tn = /[^,'"\[\]\s]+/gi,
                ti = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
                to = {},
                ts = {},
                ta = function(t) {
                    return (ts = tz(t, to)) && rO
                },
                tl = function(t, e) {
                    return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
                },
                tu = function(t, e) {
                    return !e && console.warn(t)
                },
                tc = function(t, e) {
                    return t && (to[t] = e) && ts && (ts[t] = e) || to
                },
                th = function() {
                    return 0
                },
                tf = {
                    suppressEvents: !0,
                    isStart: !0,
                    kill: !1
                },
                td = {
                    suppressEvents: !0,
                    kill: !1
                },
                tp = {
                    suppressEvents: !0
                },
                tg = {},
                tm = [],
                tv = {},
                t_ = {},
                ty = {},
                tb = 30,
                tw = [],
                tT = "",
                tx = function(t) {
                    var e, r, n = t[0];
                    if (H(n) || U(n) || (t = [t]), !(e = (n._gsap || {}).harness)) {
                        for (r = tw.length; r-- && !tw[r].targetTest(n););
                        e = tw[r]
                    }
                    for (r = t.length; r--;) t[r] && (t[r]._gsap || (t[r]._gsap = new eq(t[r], e))) || t.splice(r, 1);
                    return t
                },
                tS = function(t) {
                    return t._gsap || tx(es(t))[0]._gsap
                },
                tP = function(t, e, r) {
                    return (r = t[e]) && U(r) ? t[e]() : W(r) && t.getAttribute && t.getAttribute(e) || r
                },
                tk = function(t, e) {
                    return (t = t.split(",")).forEach(e) || t
                },
                tO = function(t) {
                    return Math.round(1e5 * t) / 1e5 || 0
                },
                tj = function(t) {
                    return Math.round(1e7 * t) / 1e7 || 0
                },
                tE = function(t, e) {
                    var r = e.charAt(0),
                        n = parseFloat(e.substr(2));
                    return t = parseFloat(t), "+" === r ? t + n : "-" === r ? t - n : "*" === r ? t * n : t / n
                },
                tA = function(t, e) {
                    for (var r = e.length, n = 0; 0 > t.indexOf(e[n]) && ++n < r;);
                    return n < r
                },
                tC = function() {
                    var t, e, r = tm.length,
                        n = tm.slice(0);
                    for (t = 0, tv = {}, tm.length = 0; t < r; t++)(e = n[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
                },
                tD = function(t, e, r, n) {
                    tm.length && !S && tC(), t.render(e, r, n || S && e < 0 && (t._initted || t._startAt)), tm.length && !S && tC()
                },
                tM = function(t) {
                    var e = parseFloat(t);
                    return (e || 0 === e) && (t + "").match(tn).length < 2 ? e : V(t) ? t.trim() : t
                },
                tR = function(t) {
                    return t
                },
                tI = function(t, e) {
                    for (var r in e) r in t || (t[r] = e[r]);
                    return t
                },
                tz = function(t, e) {
                    for (var r in e) t[r] = e[r];
                    return t
                },
                tL = function t(e, r) {
                    for (var n in r) "__proto__" !== n && "constructor" !== n && "prototype" !== n && (e[n] = H(r[n]) ? t(e[n] || (e[n] = {}), r[n]) : r[n]);
                    return e
                },
                tF = function(t, e) {
                    var r, n = {};
                    for (r in t) r in e || (n[r] = t[r]);
                    return n
                },
                tN = function(t) {
                    var e, r = t.parent || k,
                        n = t.keyframes ? (e = Z(t.keyframes), function(t, r) {
                            for (var n in r) n in t || "duration" === n && e || "ease" === n || (t[n] = r[n])
                        }) : tI;
                    if (Y(t.inherit))
                        for (; r;) n(t, r.vars.defaults), r = r.parent || r._dp;
                    return t
                },
                tB = function(t, e) {
                    for (var r = t.length, n = r === e.length; n && r-- && t[r] === e[r];);
                    return r < 0
                },
                t$ = function(t, e, r, n, i) {
                    void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
                    var o, s = t[n];
                    if (i)
                        for (o = e[i]; s && s[i] > o;) s = s._prev;
                    return s ? (e._next = s._next, s._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[n] = e, e._prev = s, e.parent = e._dp = t, e
                },
                tV = function(t, e, r, n) {
                    void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
                    var i = e._prev,
                        o = e._next;
                    i ? i._next = o : t[r] === e && (t[r] = o), o ? o._prev = i : t[n] === e && (t[n] = i), e._next = e._prev = e.parent = null
                },
                tU = function(t, e) {
                    t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t), t._act = 0
                },
                tq = function(t, e) {
                    if (t && (!e || e._end > t._dur || e._start < 0))
                        for (var r = t; r;) r._dirty = 1, r = r.parent;
                    return t
                },
                tW = function(t) {
                    for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
                    return t
                },
                tH = function(t, e, r, n) {
                    return t._startAt && (S ? t._startAt.revert(td) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, n))
                },
                tY = function(t) {
                    return t._repeat ? tX(t._tTime, t = t.duration() + t._rDelay) * t : 0
                },
                tX = function(t, e) {
                    var r = Math.floor(t /= e);
                    return t && r === t ? r - 1 : r
                },
                tG = function(t, e) {
                    return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
                },
                tK = function(t) {
                    return t._end = tj(t._start + (t._tDur / Math.abs(t._ts || t._rts || 1e-8) || 0))
                },
                tZ = function(t, e) {
                    var r = t._dp;
                    return r && r.smoothChildTiming && t._ts && (t._start = tj(r._time - (t._ts > 0 ? e / t._ts : -(((t._dirty ? t.totalDuration() : t._tDur) - e) / t._ts))), tK(t), r._dirty || tq(r, t)), t
                },
                tJ = function(t, e) {
                    var r;
                    if ((e._time || e._initted && !e._dur) && (r = tG(t.rawTime(), e), (!e._dur || er(0, e.totalDuration(), r) - e._tTime > 1e-8) && e.render(r, !0)), tq(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
                        if (t._dur < t.duration())
                            for (r = t; r._dp;) r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
                        t._zTime = -.00000001
                    }
                },
                tQ = function(t, e, r, n) {
                    return e.parent && tU(e), e._start = tj((q(r) ? r : r || t !== k ? t9(t, r, e) : t._time) + e._delay), e._end = tj(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), t$(t, e, "_first", "_last", t._sort ? "_start" : 0), t5(e) || (t._recent = e), n || tJ(t, e), t._ts < 0 && tZ(t, t._tTime), t
                },
                t0 = function(t, e) {
                    return (to.ScrollTrigger || tl("scrollTrigger", e)) && to.ScrollTrigger.create(e, t)
                },
                t1 = function(t, e, r, n, i) {
                    return (e5(t, e, i), t._initted) ? !r && t._pt && !S && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && C !== eE.frame ? (tm.push(t), t._lazy = [i, n], 1) : void 0 : 1
                },
                t2 = function t(e) {
                    var r = e.parent;
                    return r && r._ts && r._initted && !r._lock && (0 > r.rawTime() || t(r))
                },
                t5 = function(t) {
                    var e = t.data;
                    return "isFromStart" === e || "isStart" === e
                },
                t3 = function(t, e, r, n) {
                    var i, o, s, a = t.ratio,
                        l = e < 0 || !e && (!t._start && t2(t) && !(!t._initted && t5(t)) || (t._ts < 0 || t._dp._ts < 0) && !t5(t)) ? 0 : 1,
                        u = t._rDelay,
                        c = 0;
                    if (u && t._repeat && (o = tX(c = er(0, t._tDur, e), u), t._yoyo && 1 & o && (l = 1 - l), o !== tX(t._tTime, u) && (a = 1 - l, t.vars.repeatRefresh && t._initted && t.invalidate())), l !== a || S || n || 1e-8 === t._zTime || !e && t._zTime) {
                        if (!t._initted && t1(t, e, n, r, c)) return;
                        for (s = t._zTime, t._zTime = e || (r ? 1e-8 : 0), r || (r = e && !s), t.ratio = l, t._from && (l = 1 - l), t._time = 0, t._tTime = c, i = t._pt; i;) i.r(l, i.d), i = i._next;
                        e < 0 && tH(t, e, r, !0), t._onUpdate && !r && ev(t, "onUpdate"), c && t._repeat && !r && t.parent && ev(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === l && (l && tU(t, 1), r || S || (ev(t, l ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
                    } else t._zTime || (t._zTime = e)
                },
                t8 = function(t, e, r) {
                    var n;
                    if (r > e)
                        for (n = t._first; n && n._start <= r;) {
                            if ("isPause" === n.data && n._start > e) return n;
                            n = n._next
                        } else
                            for (n = t._last; n && n._start >= r;) {
                                if ("isPause" === n.data && n._start < e) return n;
                                n = n._prev
                            }
                },
                t6 = function(t, e, r, n) {
                    var i = t._repeat,
                        o = tj(e) || 0,
                        s = t._tTime / t._tDur;
                    return s && !n && (t._time *= o / t._dur), t._dur = o, t._tDur = i ? i < 0 ? 1e10 : tj(o * (i + 1) + t._rDelay * i) : o, s > 0 && !n && tZ(t, t._tTime = t._tDur * s), t.parent && tK(t), r || tq(t.parent, t), t
                },
                t7 = function(t) {
                    return t instanceof eH ? tq(t) : t6(t, t._dur)
                },
                t4 = {
                    _start: 0,
                    endTime: th,
                    totalDuration: th
                },
                t9 = function t(e, r, n) {
                    var i, o, s, a = e.labels,
                        l = e._recent || t4,
                        u = e.duration() >= 1e8 ? l.endTime(!1) : e._dur;
                    return V(r) && (isNaN(r) || r in a) ? (o = r.charAt(0), s = "%" === r.substr(-1), i = r.indexOf("="), "<" === o || ">" === o) ? (i >= 0 && (r = r.replace(/=/, "")), ("<" === o ? l._start : l.endTime(l._repeat >= 0)) + (parseFloat(r.substr(1)) || 0) * (s ? (i < 0 ? l : n).totalDuration() / 100 : 1)) : i < 0 ? (r in a || (a[r] = u), a[r]) : (o = parseFloat(r.charAt(i - 1) + r.substr(i + 1)), s && n && (o = o / 100 * (Z(n) ? n[0] : n).totalDuration()), i > 1 ? t(e, r.substr(0, i - 1), n) + o : u + o) : null == r ? u : +r
                },
                et = function(t, e, r) {
                    var n, i, o = q(e[1]),
                        s = (o ? 2 : 1) + (t < 2 ? 0 : 1),
                        a = e[s];
                    if (o && (a.duration = e[1]), a.parent = r, t) {
                        for (n = a, i = r; i && !("immediateRender" in n);) n = i.vars.defaults || {}, i = Y(i.vars.inherit) && i.parent;
                        a.immediateRender = Y(n.immediateRender), t < 2 ? a.runBackwards = 1 : a.startAt = e[s - 1]
                    }
                    return new rt(e[0], a, e[s + 1])
                },
                ee = function(t, e) {
                    return t || 0 === t ? e(t) : e
                },
                er = function(t, e, r) {
                    return r < t ? t : r > e ? e : r
                },
                en = function(t, e) {
                    return V(t) && (e = ti.exec(t)) ? e[1] : ""
                },
                ei = [].slice,
                eo = function(t, e) {
                    return t && H(t) && "length" in t && (!e && !t.length || t.length - 1 in t && H(t[0])) && !t.nodeType && t !== O
                },
                es = function(t, e, r) {
                    var n;
                    return P && !e && P.selector ? P.selector(t) : V(t) && !r && (j || !eA()) ? ei.call((e || E).querySelectorAll(t), 0) : Z(t) ? (void 0 === n && (n = []), t.forEach(function(t) {
                        var e;
                        return V(t) && !r || eo(t, 1) ? (e = n).push.apply(e, es(t)) : n.push(t)
                    }) || n) : eo(t) ? ei.call(t, 0) : t ? [t] : []
                },
                ea = function(t) {
                    return t = es(t)[0] || tu("Invalid scope") || {},
                        function(e) {
                            var r = t.current || t.nativeElement || t;
                            return es(e, r.querySelectorAll ? r : r === t ? tu("Invalid scope") || E.createElement("div") : t)
                        }
                },
                el = function(t) {
                    return t.sort(function() {
                        return .5 - Math.random()
                    })
                },
                eu = function(t) {
                    if (U(t)) return t;
                    var e = H(t) ? t : {
                            each: t
                        },
                        r = eN(e.ease),
                        n = e.from || 0,
                        i = parseFloat(e.base) || 0,
                        o = {},
                        s = n > 0 && n < 1,
                        a = isNaN(n) || s,
                        l = e.axis,
                        u = n,
                        c = n;
                    return V(n) ? u = c = ({
                            center: .5,
                            edges: .5,
                            end: 1
                        })[n] || 0 : !s && a && (u = n[0], c = n[1]),
                        function(t, s, h) {
                            var f, d, p, g, m, v, _, y, b, w = (h || e).length,
                                T = o[w];
                            if (!T) {
                                if (!(b = "auto" === e.grid ? 0 : (e.grid || [1, 1e8])[1])) {
                                    for (_ = -1e8; _ < (_ = h[b++].getBoundingClientRect().left) && b < w;);
                                    b--
                                }
                                for (v = 0, T = o[w] = [], f = a ? Math.min(b, w) * u - .5 : n % b, d = 1e8 === b ? 0 : a ? w * c / b - .5 : n / b | 0, _ = 0, y = 1e8; v < w; v++) p = v % b - f, g = d - (v / b | 0), T[v] = m = l ? Math.abs("y" === l ? g : p) : N(p * p + g * g), m > _ && (_ = m), m < y && (y = m);
                                "random" === n && el(T), T.max = _ - y, T.min = y, T.v = w = (parseFloat(e.amount) || parseFloat(e.each) * (b > w ? w - 1 : l ? "y" === l ? w / b : b : Math.max(b, w / b)) || 0) * ("edges" === n ? -1 : 1), T.b = w < 0 ? i - w : i, T.u = en(e.amount || e.each) || 0, r = r && w < 0 ? eL(r) : r
                            }
                            return w = (T[t] - T.min) / T.max || 0, tj(T.b + (r ? r(w) : w) * T.v) + T.u
                        }
                },
                ec = function(t) {
                    var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
                    return function(r) {
                        var n = tj(Math.round(parseFloat(r) / t) * t * e);
                        return (n - n % 1) / e + (q(r) ? 0 : en(r))
                    }
                },
                eh = function(t, e) {
                    var r, n, i = Z(t);
                    return !i && H(t) && (r = i = t.radius || 1e8, t.values ? (n = !q((t = es(t.values))[0])) && (r *= r) : t = ec(t.increment)), ee(e, i ? U(t) ? function(e) {
                        return Math.abs((n = t(e)) - e) <= r ? n : e
                    } : function(e) {
                        for (var i, o, s = parseFloat(n ? e.x : e), a = parseFloat(n ? e.y : 0), l = 1e8, u = 0, c = t.length; c--;)(i = n ? (i = t[c].x - s) * i + (o = t[c].y - a) * o : Math.abs(t[c] - s)) < l && (l = i, u = c);
                        return u = !r || l <= r ? t[u] : e, n || u === e || q(e) ? u : u + en(e)
                    } : ec(t))
                },
                ef = function(t, e, r, n) {
                    return ee(Z(t) ? !e : !0 === r ? (r = 0, !1) : !n, function() {
                        return Z(t) ? t[~~(Math.random() * t.length)] : (n = (r = r || 1e-5) < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + .99 * r)) / r) * r * n) / n
                    })
                },
                ed = function(t, e, r) {
                    return ee(r, function(r) {
                        return t[~~e(r)]
                    })
                },
                ep = function(t) {
                    for (var e, r, n, i, o = 0, s = ""; ~(e = t.indexOf("random(", o));) n = t.indexOf(")", e), i = "[" === t.charAt(e + 7), r = t.substr(e + 7, n - e - 7).match(i ? tn : J), s += t.substr(o, e - o) + ef(i ? r : +r[0], i ? 0 : +r[1], +r[2] || 1e-5), o = n + 1;
                    return s + t.substr(o, t.length - o)
                },
                eg = function(t, e, r, n, i) {
                    var o = e - t,
                        s = n - r;
                    return ee(i, function(e) {
                        return r + ((e - t) / o * s || 0)
                    })
                },
                em = function(t, e, r) {
                    var n, i, o, s = t.labels,
                        a = 1e8;
                    for (n in s)(i = s[n] - e) < 0 == !!r && i && a > (i = Math.abs(i)) && (o = n, a = i);
                    return o
                },
                ev = function(t, e, r) {
                    var n, i, o, s = t.vars,
                        a = s[e],
                        l = P,
                        u = t._ctx;
                    if (a) return n = s[e + "Params"], i = s.callbackScope || t, r && tm.length && tC(), u && (P = u), o = n ? a.apply(i, n) : a.call(i), P = l, o
                },
                e_ = function(t) {
                    return tU(t), t.scrollTrigger && t.scrollTrigger.kill(!!S), 1 > t.progress() && ev(t, "onInterrupt"), t
                },
                ey = [],
                eb = function(t) {
                    if (!X()) {
                        ey.push(t);
                        return
                    }
                    var e = (t = !t.name && t.default || t).name,
                        r = U(t),
                        n = e && !r && t.init ? function() {
                            this._props = []
                        } : t,
                        i = {
                            init: th,
                            render: ru,
                            add: e0,
                            kill: rh,
                            modifier: rc,
                            rawVars: 0
                        },
                        o = {
                            targetTest: 0,
                            get: 0,
                            getSetter: ro,
                            aliases: {},
                            register: 0
                        };
                    if (eA(), t !== n) {
                        if (t_[e]) return;
                        tI(n, tI(tF(t, i), o)), tz(n.prototype, tz(i, tF(t, o))), t_[n.prop = e] = n, t.targetTest && (tw.push(n), tg[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
                    }
                    tc(e, n), t.register && t.register(rO, n, rp)
                },
                ew = {
                    aqua: [0, 255, 255],
                    lime: [0, 255, 0],
                    silver: [192, 192, 192],
                    black: [0, 0, 0],
                    maroon: [128, 0, 0],
                    teal: [0, 128, 128],
                    blue: [0, 0, 255],
                    navy: [0, 0, 128],
                    white: [255, 255, 255],
                    olive: [128, 128, 0],
                    yellow: [255, 255, 0],
                    orange: [255, 165, 0],
                    gray: [128, 128, 128],
                    purple: [128, 0, 128],
                    green: [0, 128, 0],
                    red: [255, 0, 0],
                    pink: [255, 192, 203],
                    cyan: [0, 255, 255],
                    transparent: [255, 255, 255, 0]
                },
                eT = function(t, e, r) {
                    return (6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * 255 + .5 | 0
                },
                ex = function(t, e, r) {
                    var n, i, o, s, a, l, u, c, h, f, d = t ? q(t) ? [t >> 16, t >> 8 & 255, 255 & t] : 0 : ew.black;
                    if (!d) {
                        if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), ew[t]) d = ew[t];
                        else if ("#" === t.charAt(0)) {
                            if (t.length < 6 && (t = "#" + (n = t.charAt(1)) + n + (i = t.charAt(2)) + i + (o = t.charAt(3)) + o + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")), 9 === t.length) return [(d = parseInt(t.substr(1, 6), 16)) >> 16, d >> 8 & 255, 255 & d, parseInt(t.substr(7), 16) / 255];
                            d = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t]
                        } else if ("hsl" === t.substr(0, 3)) {
                            if (d = f = t.match(J), e) {
                                if (~t.indexOf("=")) return d = t.match(Q), r && d.length < 4 && (d[3] = 1), d
                            } else s = +d[0] % 360 / 360, a = +d[1] / 100, i = (l = +d[2] / 100) <= .5 ? l * (a + 1) : l + a - l * a, n = 2 * l - i, d.length > 3 && (d[3] *= 1), d[0] = eT(s + 1 / 3, n, i), d[1] = eT(s, n, i), d[2] = eT(s - 1 / 3, n, i)
                        } else d = t.match(J) || ew.transparent;
                        d = d.map(Number)
                    }
                    return e && !f && (n = d[0] / 255, i = d[1] / 255, o = d[2] / 255, l = ((u = Math.max(n, i, o)) + (c = Math.min(n, i, o))) / 2, u === c ? s = a = 0 : (h = u - c, a = l > .5 ? h / (2 - u - c) : h / (u + c), s = (u === n ? (i - o) / h + (i < o ? 6 : 0) : u === i ? (o - n) / h + 2 : (n - i) / h + 4) * 60), d[0] = ~~(s + .5), d[1] = ~~(100 * a + .5), d[2] = ~~(100 * l + .5)), r && d.length < 4 && (d[3] = 1), d
                },
                eS = function(t) {
                    var e = [],
                        r = [],
                        n = -1;
                    return t.split(ek).forEach(function(t) {
                        var i = t.match(tt) || [];
                        e.push.apply(e, i), r.push(n += i.length + 1)
                    }), e.c = r, e
                },
                eP = function(t, e, r) {
                    var n, i, o, s, a = "",
                        l = (t + a).match(ek),
                        u = e ? "hsla(" : "rgba(",
                        c = 0;
                    if (!l) return t;
                    if (l = l.map(function(t) {
                            return (t = ex(t, e, 1)) && u + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
                        }), r && (o = eS(t), (n = r.c).join(a) !== o.c.join(a)))
                        for (s = (i = t.replace(ek, "1").split(tt)).length - 1; c < s; c++) a += i[c] + (~n.indexOf(c) ? l.shift() || u + "0,0,0,0)" : (o.length ? o : l.length ? l : r).shift());
                    if (!i)
                        for (s = (i = t.split(ek)).length - 1; c < s; c++) a += i[c] + l[c];
                    return a + i[s]
                },
                ek = function() {
                    var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
                    for (t in ew) e += "|" + t + "\\b";
                    return RegExp(e + ")", "gi")
                }(),
                eO = /hsl[a]?\(/,
                ej = function(t) {
                    var e, r = t.join(" ");
                    if (ek.lastIndex = 0, ek.test(r)) return e = eO.test(r), t[1] = eP(t[1], e), t[0] = eP(t[0], e, eS(t[1])), !0
                },
                eE = (g = 500, m = 33, _ = v = (p = Date.now)(), y = 1e3 / 240, b = 1e3 / 240, w = [], T = function t(e) {
                    var r, n, i, o, s = p() - _,
                        a = !0 === e;
                    if (s > g && (v += s - m), _ += s, ((r = (i = _ - v) - b) > 0 || a) && (o = ++h.frame, f = i - 1e3 * h.time, h.time = i /= 1e3, b += r + (r >= y ? 4 : y - r), n = 1), a || (l = u(t)), n)
                        for (d = 0; d < w.length; d++) w[d](i, f, o, e)
                }, h = {
                    time: 0,
                    frame: 0,
                    tick: function() {
                        T(!0)
                    },
                    deltaRatio: function(t) {
                        return f / (1e3 / (t || 60))
                    },
                    wake: function() {
                        A && (!j && X() && (E = (O = j = window).document || {}, to.gsap = rO, (O.gsapVersions || (O.gsapVersions = [])).push(rO.version), ta(ts || O.GreenSockGlobals || !O.gsap && O || {}), c = O.requestAnimationFrame, ey.forEach(eb)), l && h.sleep(), u = c || function(t) {
                            return setTimeout(t, b - 1e3 * h.time + 1 | 0)
                        }, M = 1, T(2))
                    },
                    sleep: function() {
                        (c ? O.cancelAnimationFrame : clearTimeout)(l), M = 0, u = th
                    },
                    lagSmoothing: function(t, e) {
                        m = Math.min(e || 33, g = t || 1 / 0)
                    },
                    fps: function(t) {
                        y = 1e3 / (t || 240), b = 1e3 * h.time + y
                    },
                    add: function(t, e, r) {
                        var n = e ? function(e, r, i, o) {
                            t(e, r, i, o), h.remove(n)
                        } : t;
                        return h.remove(t), w[r ? "unshift" : "push"](n), eA(), n
                    },
                    remove: function(t, e) {
                        ~(e = w.indexOf(t)) && w.splice(e, 1) && d >= e && d--
                    },
                    _listeners: w
                }),
                eA = function() {
                    return !M && eE.wake()
                },
                eC = {},
                eD = /^[\d.\-M][\d.\-,\s]/,
                eM = /["']/g,
                eR = function(t) {
                    for (var e, r, n, i = {}, o = t.substr(1, t.length - 3).split(":"), s = o[0], a = 1, l = o.length; a < l; a++) r = o[a], e = a !== l - 1 ? r.lastIndexOf(",") : r.length, n = r.substr(0, e), i[s] = isNaN(n) ? n.replace(eM, "").trim() : +n, s = r.substr(e + 1).trim();
                    return i
                },
                eI = function(t) {
                    var e = t.indexOf("(") + 1,
                        r = t.indexOf(")"),
                        n = t.indexOf("(", e);
                    return t.substring(e, ~n && n < r ? t.indexOf(")", r + 1) : r)
                },
                ez = function(t) {
                    var e = (t + "").split("("),
                        r = eC[e[0]];
                    return r && e.length > 1 && r.config ? r.config.apply(null, ~t.indexOf("{") ? [eR(e[1])] : eI(t).split(",").map(tM)) : eC._CE && eD.test(t) ? eC._CE("", t) : r
                },
                eL = function(t) {
                    return function(e) {
                        return 1 - t(1 - e)
                    }
                },
                eF = function t(e, r) {
                    for (var n, i = e._first; i;) i instanceof eH ? t(i, r) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === r || (i.timeline ? t(i.timeline, r) : (n = i._ease, i._ease = i._yEase, i._yEase = n, i._yoyo = r)), i = i._next
                },
                eN = function(t, e) {
                    return t && (U(t) ? t : eC[t] || ez(t)) || e
                },
                eB = function(t, e, r, n) {
                    void 0 === r && (r = function(t) {
                        return 1 - e(1 - t)
                    }), void 0 === n && (n = function(t) {
                        return t < .5 ? e(2 * t) / 2 : 1 - e((1 - t) * 2) / 2
                    });
                    var i, o = {
                        easeIn: e,
                        easeOut: r,
                        easeInOut: n
                    };
                    return tk(t, function(t) {
                        for (var e in eC[t] = to[t] = o, eC[i = t.toLowerCase()] = r, o) eC[i + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = eC[t + "." + e] = o[e]
                    }), o
                },
                e$ = function(t) {
                    return function(e) {
                        return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t((e - .5) * 2) / 2
                    }
                },
                eV = function t(e, r, n) {
                    var i = r >= 1 ? r : 1,
                        o = (n || (e ? .3 : .45)) / (r < 1 ? r : 1),
                        s = o / z * (Math.asin(1 / i) || 0),
                        a = function(t) {
                            return 1 === t ? 1 : i * Math.pow(2, -10 * t) * $((t - s) * o) + 1
                        },
                        l = "out" === e ? a : "in" === e ? function(t) {
                            return 1 - a(1 - t)
                        } : e$(a);
                    return o = z / o, l.config = function(r, n) {
                        return t(e, r, n)
                    }, l
                },
                eU = function t(e, r) {
                    void 0 === r && (r = 1.70158);
                    var n = function(t) {
                            return t ? --t * t * ((r + 1) * t + r) + 1 : 0
                        },
                        i = "out" === e ? n : "in" === e ? function(t) {
                            return 1 - n(1 - t)
                        } : e$(n);
                    return i.config = function(r) {
                        return t(e, r)
                    }, i
                };
            tk("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) {
                var r = e < 5 ? e + 1 : e;
                eB(t + ",Power" + (r - 1), e ? function(t) {
                    return Math.pow(t, r)
                } : function(t) {
                    return t
                }, function(t) {
                    return 1 - Math.pow(1 - t, r)
                }, function(t) {
                    return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow((1 - t) * 2, r) / 2
                })
            }), eC.Linear.easeNone = eC.none = eC.Linear.easeIn, eB("Elastic", eV("in"), eV("out"), eV()), eX = 2 * (eY = 1 / 2.75), eG = 2.5 * eY, eB("Bounce", function(t) {
                return 1 - eK(1 - t)
            }, eK = function(t) {
                return t < eY ? 7.5625 * t * t : t < eX ? 7.5625 * Math.pow(t - 1.5 / 2.75, 2) + .75 : t < eG ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * Math.pow(t - 2.625 / 2.75, 2) + .984375
            }), eB("Expo", function(t) {
                return t ? Math.pow(2, 10 * (t - 1)) : 0
            }), eB("Circ", function(t) {
                return -(N(1 - t * t) - 1)
            }), eB("Sine", function(t) {
                return 1 === t ? 1 : -B(t * L) + 1
            }), eB("Back", eU("in"), eU("out"), eU()), eC.SteppedEase = eC.steps = to.SteppedEase = {
                config: function(t, e) {
                    void 0 === t && (t = 1);
                    var r = 1 / t,
                        n = t + (e ? 0 : 1),
                        i = e ? 1 : 0;
                    return function(t) {
                        return ((n * er(0, .99999999, t) | 0) + i) * r
                    }
                }
            }, I.ease = eC["quad.out"], tk("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) {
                return tT += t + "," + t + "Params,"
            });
            var eq = function(t, e) {
                    this.id = F++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : tP, this.set = e ? e.getSetter : ro
                },
                eW = function() {
                    function t(t) {
                        this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, t6(this, +t.duration, 1, 1), this.data = t.data, P && (this._ctx = P, P.data.push(this)), M || eE.wake()
                    }
                    var e = t.prototype;
                    return e.delay = function(t) {
                        return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
                    }, e.duration = function(t) {
                        return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
                    }, e.totalDuration = function(t) {
                        return arguments.length ? (this._dirty = 0, t6(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
                    }, e.totalTime = function(t, e) {
                        if (eA(), !arguments.length) return this._tTime;
                        var r = this._dp;
                        if (r && r.smoothChildTiming && this._ts) {
                            for (tZ(this, t), !r._dp || r.parent || tJ(r, this); r && r.parent;) r.parent._time !== r._start + (r._ts >= 0 ? r._tTime / r._ts : -((r.totalDuration() - r._tTime) / r._ts)) && r.totalTime(r._tTime, !0), r = r.parent;
                            !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && tQ(this._dp, this, this._start - this._delay)
                        }
                        return this._tTime === t && (this._dur || e) && (!this._initted || 1e-8 !== Math.abs(this._zTime)) && (t || this._initted || !this.add && !this._ptLookup) || (this._ts || (this._pTime = t), tD(this, t, e)), this
                    }, e.time = function(t, e) {
                        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + tY(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
                    }, e.totalProgress = function(t, e) {
                        return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
                    }, e.progress = function(t, e) {
                        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(1 & this.iteration()) ? 1 - t : t) + tY(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
                    }, e.iteration = function(t, e) {
                        var r = this.duration() + this._rDelay;
                        return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? tX(this._tTime, r) + 1 : 1
                    }, e.timeScale = function(t) {
                        if (!arguments.length) return -.00000001 === this._rts ? 0 : this._rts;
                        if (this._rts === t) return this;
                        var e = this.parent && this._ts ? tG(this.parent._time, this) : this._tTime;
                        return this._rts = +t || 0, this._ts = this._ps || -.00000001 === t ? 0 : this._rts, this.totalTime(er(-Math.abs(this._delay), this._tDur, e), !0), tK(this), tW(this)
                    }, e.paused = function(t) {
                        return arguments.length ? (this._ps !== t && (this._ps = t, t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (eA(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && 1e-8 !== Math.abs(this._zTime) && (this._tTime -= 1e-8)))), this) : this._ps
                    }, e.startTime = function(t) {
                        if (arguments.length) {
                            this._start = t;
                            var e = this.parent || this._dp;
                            return e && (e._sort || !this.parent) && tQ(e, this, t - this._delay), this
                        }
                        return this._start
                    }, e.endTime = function(t) {
                        return this._start + (Y(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
                    }, e.rawTime = function(t) {
                        var e = this.parent || this._dp;
                        return e ? t && (!this._ts || this._repeat && this._time && 1 > this.totalProgress()) ? this._tTime % (this._dur + this._rDelay) : this._ts ? tG(e.rawTime(t), this) : this._tTime : this._tTime
                    }, e.revert = function(t) {
                        void 0 === t && (t = tp);
                        var e = S;
                        return S = t, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(t), this.totalTime(-.01, t.suppressEvents)), "nested" !== this.data && !1 !== t.kill && this.kill(), S = e, this
                    }, e.globalTime = function(t) {
                        for (var e = this, r = arguments.length ? t : e.rawTime(); e;) r = e._start + r / (e._ts || 1), e = e._dp;
                        return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 : this._sat.globalTime(t) : r
                    }, e.repeat = function(t) {
                        return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, t7(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
                    }, e.repeatDelay = function(t) {
                        if (arguments.length) {
                            var e = this._time;
                            return this._rDelay = t, t7(this), e ? this.time(e) : this
                        }
                        return this._rDelay
                    }, e.yoyo = function(t) {
                        return arguments.length ? (this._yoyo = t, this) : this._yoyo
                    }, e.seek = function(t, e) {
                        return this.totalTime(t9(this, t), Y(e))
                    }, e.restart = function(t, e) {
                        return this.play().totalTime(t ? -this._delay : 0, Y(e))
                    }, e.play = function(t, e) {
                        return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
                    }, e.reverse = function(t, e) {
                        return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
                    }, e.pause = function(t, e) {
                        return null != t && this.seek(t, e), this.paused(!0)
                    }, e.resume = function() {
                        return this.paused(!1)
                    }, e.reversed = function(t) {
                        return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -.00000001 : 0)), this) : this._rts < 0
                    }, e.invalidate = function() {
                        return this._initted = this._act = 0, this._zTime = -.00000001, this
                    }, e.isActive = function() {
                        var t, e = this.parent || this._dp,
                            r = this._start;
                        return !!(!e || this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - 1e-8)
                    }, e.eventCallback = function(t, e, r) {
                        var n = this.vars;
                        return arguments.length > 1 ? (e ? (n[t] = e, r && (n[t + "Params"] = r), "onUpdate" === t && (this._onUpdate = e)) : delete n[t], this) : n[t]
                    }, e.then = function(t) {
                        var e = this;
                        return new Promise(function(r) {
                            var n = U(t) ? t : tR,
                                i = function() {
                                    var t = e.then;
                                    e.then = null, U(n) && (n = n(e)) && (n.then || n === e) && (e.then = t), r(n), e.then = t
                                };
                            e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? i() : e._prom = i
                        })
                    }, e.kill = function() {
                        e_(this)
                    }, t
                }();
            tI(eW.prototype, {
                _time: 0,
                _start: 0,
                _end: 0,
                _tTime: 0,
                _tDur: 0,
                _dirty: 0,
                _repeat: 0,
                _yoyo: !1,
                parent: null,
                _initted: !1,
                _rDelay: 0,
                _ts: 1,
                _dp: 0,
                ratio: 0,
                _zTime: -.00000001,
                _prom: 0,
                _ps: !1,
                _rts: 1
            });
            var eH = function(t) {
                function e(e, r) {
                    var i;
                    return void 0 === e && (e = {}), (i = t.call(this, e) || this).labels = {}, i.smoothChildTiming = !!e.smoothChildTiming, i.autoRemoveChildren = !!e.autoRemoveChildren, i._sort = Y(e.sortChildren), k && tQ(e.parent || k, n(i), r), e.reversed && i.reverse(), e.paused && i.paused(!0), e.scrollTrigger && t0(n(i), e.scrollTrigger), i
                }
                i(e, t);
                var r = e.prototype;
                return r.to = function(t, e, r) {
                    return et(0, arguments, this), this
                }, r.from = function(t, e, r) {
                    return et(1, arguments, this), this
                }, r.fromTo = function(t, e, r, n) {
                    return et(2, arguments, this), this
                }, r.set = function(t, e, r) {
                    return e.duration = 0, e.parent = this, tN(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new rt(t, e, t9(this, r), 1), this
                }, r.call = function(t, e, r) {
                    return tQ(this, rt.delayedCall(0, t, e), r)
                }, r.staggerTo = function(t, e, r, n, i, o, s) {
                    return r.duration = e, r.stagger = r.stagger || n, r.onComplete = o, r.onCompleteParams = s, r.parent = this, new rt(t, r, t9(this, i)), this
                }, r.staggerFrom = function(t, e, r, n, i, o, s) {
                    return r.runBackwards = 1, tN(r).immediateRender = Y(r.immediateRender), this.staggerTo(t, e, r, n, i, o, s)
                }, r.staggerFromTo = function(t, e, r, n, i, o, s, a) {
                    return n.startAt = r, tN(n).immediateRender = Y(n.immediateRender), this.staggerTo(t, e, n, i, o, s, a)
                }, r.render = function(t, e, r) {
                    var n, i, o, s, a, l, u, c, h, f, d, p, g = this._time,
                        m = this._dirty ? this.totalDuration() : this._tDur,
                        v = this._dur,
                        _ = t <= 0 ? 0 : tj(t),
                        y = this._zTime < 0 != t < 0 && (this._initted || !v);
                    if (this !== k && _ > m && t >= 0 && (_ = m), _ !== this._tTime || r || y) {
                        if (g !== this._time && v && (_ += this._time - g, t += this._time - g), n = _, h = this._start, l = !(c = this._ts), y && (v || (g = this._zTime), (t || !e) && (this._zTime = t)), this._repeat) {
                            if (d = this._yoyo, a = v + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * a + t, e, r);
                            if (n = tj(_ % a), _ === m ? (s = this._repeat, n = v) : ((s = ~~(_ / a)) && s === _ / a && (n = v, s--), n > v && (n = v)), f = tX(this._tTime, a), !g && this._tTime && f !== s && this._tTime - f * a - this._dur <= 0 && (f = s), d && 1 & s && (n = v - n, p = 1), s !== f && !this._lock) {
                                var b = d && 1 & f,
                                    w = b === (d && 1 & s);
                                if (s < f && (b = !b), g = b ? 0 : v, this._lock = 1, this.render(g || (p ? 0 : tj(s * a)), e, !v)._lock = 0, this._tTime = _, !e && this.parent && ev(this, "onRepeat"), this.vars.repeatRefresh && !p && (this.invalidate()._lock = 1), g && g !== this._time || !this._ts !== l || this.vars.onRepeat && !this.parent && !this._act || (v = this._dur, m = this._tDur, w && (this._lock = 2, g = b ? v : -.0001, this.render(g, !0), this.vars.repeatRefresh && !p && this.invalidate()), this._lock = 0, !this._ts && !l)) return this;
                                eF(this, p)
                            }
                        }
                        if (this._hasPause && !this._forcing && this._lock < 2 && (u = t8(this, tj(g), tj(n))) && (_ -= n - (n = u._start)), this._tTime = _, this._time = n, this._act = !c, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, g = 0), !g && n && !e && !s && (ev(this, "onStart"), this._tTime !== _)) return this;
                        if (n >= g && t >= 0)
                            for (i = this._first; i;) {
                                if (o = i._next, (i._act || n >= i._start) && i._ts && u !== i) {
                                    if (i.parent !== this) return this.render(t, e, r);
                                    if (i.render(i._ts > 0 ? (n - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (n - i._start) * i._ts, e, r), n !== this._time || !this._ts && !l) {
                                        u = 0, o && (_ += this._zTime = -.00000001);
                                        break
                                    }
                                }
                                i = o
                            } else {
                                i = this._last;
                                for (var T = t < 0 ? t : n; i;) {
                                    if (o = i._prev, (i._act || T <= i._end) && i._ts && u !== i) {
                                        if (i.parent !== this) return this.render(t, e, r);
                                        if (i.render(i._ts > 0 ? (T - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (T - i._start) * i._ts, e, r || S && (i._initted || i._startAt)), n !== this._time || !this._ts && !l) {
                                            u = 0, o && (_ += this._zTime = T ? -.00000001 : 1e-8);
                                            break
                                        }
                                    }
                                    i = o
                                }
                            }
                        if (u && !e && (this.pause(), u.render(n >= g ? 0 : -.00000001)._zTime = n >= g ? 1 : -1, this._ts)) return this._start = h, tK(this), this.render(t, e, r);
                        this._onUpdate && !e && ev(this, "onUpdate", !0), (_ === m && this._tTime >= this.totalDuration() || !_ && g) && (h === this._start || Math.abs(c) !== Math.abs(this._ts)) && !this._lock && ((t || !v) && (_ === m && this._ts > 0 || !_ && this._ts < 0) && tU(this, 1), e || t < 0 && !g || !_ && !g && m || (ev(this, _ === m && t >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(_ < m && this.timeScale() > 0) && this._prom()))
                    }
                    return this
                }, r.add = function(t, e) {
                    var r = this;
                    if (q(e) || (e = t9(this, e, t)), !(t instanceof eW)) {
                        if (Z(t)) return t.forEach(function(t) {
                            return r.add(t, e)
                        }), this;
                        if (V(t)) return this.addLabel(t, e);
                        if (!U(t)) return this;
                        t = rt.delayedCall(0, t)
                    }
                    return this !== t ? tQ(this, t, e) : this
                }, r.getChildren = function(t, e, r, n) {
                    void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), void 0 === n && (n = -1e8);
                    for (var i = [], o = this._first; o;) o._start >= n && (o instanceof rt ? e && i.push(o) : (r && i.push(o), t && i.push.apply(i, o.getChildren(!0, e, r)))), o = o._next;
                    return i
                }, r.getById = function(t) {
                    for (var e = this.getChildren(1, 1, 1), r = e.length; r--;)
                        if (e[r].vars.id === t) return e[r]
                }, r.remove = function(t) {
                    return V(t) ? this.removeLabel(t) : U(t) ? this.killTweensOf(t) : (tV(this, t), t === this._recent && (this._recent = this._last), tq(this))
                }, r.totalTime = function(e, r) {
                    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = tj(eE.time - (this._ts > 0 ? e / this._ts : -((this.totalDuration() - e) / this._ts)))), t.prototype.totalTime.call(this, e, r), this._forcing = 0, this) : this._tTime
                }, r.addLabel = function(t, e) {
                    return this.labels[t] = t9(this, e), this
                }, r.removeLabel = function(t) {
                    return delete this.labels[t], this
                }, r.addPause = function(t, e, r) {
                    var n = rt.delayedCall(0, e || th, r);
                    return n.data = "isPause", this._hasPause = 1, tQ(this, n, t9(this, t))
                }, r.removePause = function(t) {
                    var e = this._first;
                    for (t = t9(this, t); e;) e._start === t && "isPause" === e.data && tU(e), e = e._next
                }, r.killTweensOf = function(t, e, r) {
                    for (var n = this.getTweensOf(t, r), i = n.length; i--;) eZ !== n[i] && n[i].kill(t, e);
                    return this
                }, r.getTweensOf = function(t, e) {
                    for (var r, n = [], i = es(t), o = this._first, s = q(e); o;) o instanceof rt ? tA(o._targets, i) && (s ? (!eZ || o._initted && o._ts) && o.globalTime(0) <= e && o.globalTime(o.totalDuration()) > e : !e || o.isActive()) && n.push(o) : (r = o.getTweensOf(i, e)).length && n.push.apply(n, r), o = o._next;
                    return n
                }, r.tweenTo = function(t, e) {
                    e = e || {};
                    var r, n = this,
                        i = t9(n, t),
                        o = e,
                        s = o.startAt,
                        a = o.onStart,
                        l = o.onStartParams,
                        u = o.immediateRender,
                        c = rt.to(n, tI({
                            ease: e.ease || "none",
                            lazy: !1,
                            immediateRender: !1,
                            time: i,
                            overwrite: "auto",
                            duration: e.duration || Math.abs((i - (s && "time" in s ? s.time : n._time)) / n.timeScale()) || 1e-8,
                            onStart: function() {
                                if (n.pause(), !r) {
                                    var t = e.duration || Math.abs((i - (s && "time" in s ? s.time : n._time)) / n.timeScale());
                                    c._dur !== t && t6(c, t, 0, 1).render(c._time, !0, !0), r = 1
                                }
                                a && a.apply(c, l || [])
                            }
                        }, e));
                    return u ? c.render(0) : c
                }, r.tweenFromTo = function(t, e, r) {
                    return this.tweenTo(e, tI({
                        startAt: {
                            time: t9(this, t)
                        }
                    }, r))
                }, r.recent = function() {
                    return this._recent
                }, r.nextLabel = function(t) {
                    return void 0 === t && (t = this._time), em(this, t9(this, t))
                }, r.previousLabel = function(t) {
                    return void 0 === t && (t = this._time), em(this, t9(this, t), 1)
                }, r.currentLabel = function(t) {
                    return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + 1e-8)
                }, r.shiftChildren = function(t, e, r) {
                    void 0 === r && (r = 0);
                    for (var n, i = this._first, o = this.labels; i;) i._start >= r && (i._start += t, i._end += t), i = i._next;
                    if (e)
                        for (n in o) o[n] >= r && (o[n] += t);
                    return tq(this)
                }, r.invalidate = function(e) {
                    var r = this._first;
                    for (this._lock = 0; r;) r.invalidate(e), r = r._next;
                    return t.prototype.invalidate.call(this, e)
                }, r.clear = function(t) {
                    void 0 === t && (t = !0);
                    for (var e, r = this._first; r;) e = r._next, this.remove(r), r = e;
                    return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), tq(this)
                }, r.totalDuration = function(t) {
                    var e, r, n, i = 0,
                        o = this._last,
                        s = 1e8;
                    if (arguments.length) return this.timeScale((this._repeat < 0 ? this.duration() : this.totalDuration()) / (this.reversed() ? -t : t));
                    if (this._dirty) {
                        for (n = this.parent; o;) e = o._prev, o._dirty && o.totalDuration(), (r = o._start) > s && this._sort && o._ts && !this._lock ? (this._lock = 1, tQ(this, o, r - o._delay, 1)._lock = 0) : s = r, r < 0 && o._ts && (i -= r, (!n && !this._dp || n && n.smoothChildTiming) && (this._start += r / this._ts, this._time -= r, this._tTime -= r), this.shiftChildren(-r, !1, -Infinity), s = 0), o._end > i && o._ts && (i = o._end), o = e;
                        t6(this, this === k && this._time > i ? this._time : i, 1, 1), this._dirty = 0
                    }
                    return this._tDur
                }, e.updateRoot = function(t) {
                    if (k._ts && (tD(k, tG(t, k)), C = eE.frame), eE.frame >= tb) {
                        tb += R.autoSleep || 120;
                        var e = k._first;
                        if ((!e || !e._ts) && R.autoSleep && eE._listeners.length < 2) {
                            for (; e && !e._ts;) e = e._next;
                            e || eE.sleep()
                        }
                    }
                }, e
            }(eW);
            tI(eH.prototype, {
                _lock: 0,
                _hasPause: 0,
                _forcing: 0
            });
            var eY, eX, eG, eK, eZ, eJ, eQ = function(t, e, r, n, i, o, s) {
                    var a, l, u, c, h, f, d, p, g = new rp(this._pt, t, e, 0, 1, rl, null, i),
                        m = 0,
                        v = 0;
                    for (g.b = r, g.e = n, r += "", n += "", (d = ~n.indexOf("random(")) && (n = ep(n)), o && (o(p = [r, n], t, e), r = p[0], n = p[1]), l = r.match(te) || []; a = te.exec(n);) c = a[0], h = n.substring(m, a.index), u ? u = (u + 1) % 5 : "rgba(" === h.substr(-5) && (u = 1), c !== l[v++] && (f = parseFloat(l[v - 1]) || 0, g._pt = {
                        _next: g._pt,
                        p: h || 1 === v ? h : ",",
                        s: f,
                        c: "=" === c.charAt(1) ? tE(f, c) - f : parseFloat(c) - f,
                        m: u && u < 4 ? Math.round : 0
                    }, m = te.lastIndex);
                    return g.c = m < n.length ? n.substring(m, n.length) : "", g.fp = s, (tr.test(n) || d) && (g.e = 0), this._pt = g, g
                },
                e0 = function(t, e, r, n, i, o, s, a, l, u) {
                    U(n) && (n = n(i || 0, t, o));
                    var c, h = t[e],
                        f = "get" !== r ? r : U(h) ? l ? t[e.indexOf("set") || !U(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]() : h,
                        d = U(h) ? l ? rn : rr : re;
                    if (V(n) && (~n.indexOf("random(") && (n = ep(n)), "=" === n.charAt(1) && ((c = tE(f, n) + (en(f) || 0)) || 0 === c) && (n = c)), !u || f !== n || eJ) return isNaN(f * n) || "" === n ? (h || e in t || tl(e, n), eQ.call(this, t, e, f, n, d, a || R.stringFilter, l)) : (c = new rp(this._pt, t, e, +f || 0, n - (f || 0), "boolean" == typeof h ? ra : rs, 0, d), l && (c.fp = l), s && c.modifier(s, this, t), this._pt = c)
                },
                e1 = function(t, e, r, n, i) {
                    if (U(t) && (t = e7(t, i, e, r, n)), !H(t) || t.style && t.nodeType || Z(t) || K(t)) return V(t) ? e7(t, i, e, r, n) : t;
                    var o, s = {};
                    for (o in t) s[o] = e7(t[o], i, e, r, n);
                    return s
                },
                e2 = function(t, e, r, n, i, o) {
                    var s, a, l, u;
                    if (t_[t] && !1 !== (s = new t_[t]).init(i, s.rawVars ? e[t] : e1(e[t], n, i, o, r), r, n, o) && (r._pt = a = new rp(r._pt, i, t, 0, 1, s.render, s, 0, s.priority), r !== D))
                        for (l = r._ptLookup[r._targets.indexOf(i)], u = s._props.length; u--;) l[s._props[u]] = a;
                    return s
                },
                e5 = function t(e, r, n) {
                    var i, o, s, a, l, u, c, h, f, d, p, g, m, v = e.vars,
                        _ = v.ease,
                        y = v.startAt,
                        b = v.immediateRender,
                        w = v.lazy,
                        T = v.onUpdate,
                        P = v.onUpdateParams,
                        O = v.callbackScope,
                        j = v.runBackwards,
                        E = v.yoyoEase,
                        A = v.keyframes,
                        C = v.autoRevert,
                        D = e._dur,
                        M = e._startAt,
                        R = e._targets,
                        z = e.parent,
                        L = z && "nested" === z.data ? z.vars.targets : R,
                        F = "auto" === e._overwrite && !x,
                        N = e.timeline;
                    if (!N || A && _ || (_ = "none"), e._ease = eN(_, I.ease), e._yEase = E ? eL(eN(!0 === E ? _ : E, I.ease)) : 0, E && e._yoyo && !e._repeat && (E = e._yEase, e._yEase = e._ease, e._ease = E), e._from = !N && !!v.runBackwards, !N || A && !v.stagger) {
                        if (g = (h = R[0] ? tS(R[0]).harness : 0) && v[h.prop], i = tF(v, tg), M && (M._zTime < 0 && M.progress(1), r < 0 && j && b && !C ? M.render(-1, !0) : M.revert(j && D ? td : tf), M._lazy = 0), y) {
                            if (tU(e._startAt = rt.set(R, tI({
                                    data: "isStart",
                                    overwrite: !1,
                                    parent: z,
                                    immediateRender: !0,
                                    lazy: !M && Y(w),
                                    startAt: null,
                                    delay: 0,
                                    onUpdate: T,
                                    onUpdateParams: P,
                                    callbackScope: O,
                                    stagger: 0
                                }, y))), e._startAt._dp = 0, e._startAt._sat = e, r < 0 && (S || !b && !C) && e._startAt.revert(td), b && D && r <= 0 && n <= 0) {
                                r && (e._zTime = r);
                                return
                            }
                        } else if (j && D && !M) {
                            if (r && (b = !1), s = tI({
                                    overwrite: !1,
                                    data: "isFromStart",
                                    lazy: b && !M && Y(w),
                                    immediateRender: b,
                                    stagger: 0,
                                    parent: z
                                }, i), g && (s[h.prop] = g), tU(e._startAt = rt.set(R, s)), e._startAt._dp = 0, e._startAt._sat = e, r < 0 && (S ? e._startAt.revert(td) : e._startAt.render(-1, !0)), e._zTime = r, b) {
                                if (!r) return
                            } else t(e._startAt, 1e-8, 1e-8)
                        }
                        for (o = 0, e._pt = e._ptCache = 0, w = D && Y(w) || w && !D; o < R.length; o++) {
                            if (c = (l = R[o])._gsap || tx(R)[o]._gsap, e._ptLookup[o] = d = {}, tv[c.id] && tm.length && tC(), p = L === R ? o : L.indexOf(l), h && !1 !== (f = new h).init(l, g || i, e, p, L) && (e._pt = a = new rp(e._pt, l, f.name, 0, 1, f.render, f, 0, f.priority), f._props.forEach(function(t) {
                                    d[t] = a
                                }), f.priority && (u = 1)), !h || g)
                                for (s in i) t_[s] && (f = e2(s, i, e, p, l, L)) ? f.priority && (u = 1) : d[s] = a = e0.call(e, l, s, "get", i[s], p, L, 0, v.stringFilter);
                            e._op && e._op[o] && e.kill(l, e._op[o]), F && e._pt && (eZ = e, k.killTweensOf(l, d, e.globalTime(r)), m = !e.parent, eZ = 0), e._pt && w && (tv[c.id] = 1)
                        }
                        u && rd(e), e._onInit && e._onInit(e)
                    }
                    e._onUpdate = T, e._initted = (!e._op || e._pt) && !m, A && r <= 0 && N.render(1e8, !0, !0)
                },
                e3 = function(t, e, r, n, i, o, s) {
                    var a, l, u, c, h = (t._pt && t._ptCache || (t._ptCache = {}))[e];
                    if (!h)
                        for (h = t._ptCache[e] = [], u = t._ptLookup, c = t._targets.length; c--;) {
                            if ((a = u[c][e]) && a.d && a.d._pt)
                                for (a = a.d._pt; a && a.p !== e && a.fp !== e;) a = a._next;
                            if (!a) return eJ = 1, t.vars[e] = "+=0", e5(t, s), eJ = 0, 1;
                            h.push(a)
                        }
                    for (c = h.length; c--;)(a = (l = h[c])._pt || l).s = (n || 0 === n) && !i ? n : a.s + (n || 0) + o * a.c, a.c = r - a.s, l.e && (l.e = tO(r) + en(l.e)), l.b && (l.b = a.s + en(l.b))
                },
                e8 = function(t, e) {
                    var r, n, i, o, s = t[0] ? tS(t[0]).harness : 0,
                        a = s && s.aliases;
                    if (!a) return e;
                    for (n in r = tz({}, e), a)
                        if (n in r)
                            for (i = (o = a[n].split(",")).length; i--;) r[o[i]] = r[n];
                    return r
                },
                e6 = function(t, e, r, n) {
                    var i, o, s = e.ease || n || "power1.inOut";
                    if (Z(e)) o = r[t] || (r[t] = []), e.forEach(function(t, r) {
                        return o.push({
                            t: r / (e.length - 1) * 100,
                            v: t,
                            e: s
                        })
                    });
                    else
                        for (i in e) o = r[i] || (r[i] = []), "ease" === i || o.push({
                            t: parseFloat(t),
                            v: e[i],
                            e: s
                        })
                },
                e7 = function(t, e, r, n, i) {
                    return U(t) ? t.call(e, r, n, i) : V(t) && ~t.indexOf("random(") ? ep(t) : t
                },
                e4 = tT + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
                e9 = {};
            tk(e4 + ",id,stagger,delay,duration,paused,scrollTrigger", function(t) {
                return e9[t] = 1
            });
            var rt = function(t) {
                function e(e, r, i, o) {
                    "number" == typeof r && (i.duration = r, r = i, i = null);
                    var s, a, l, u, c, h, f, d, p, g = (s = t.call(this, o ? r : tN(r)) || this).vars,
                        m = g.duration,
                        v = g.delay,
                        _ = g.immediateRender,
                        y = g.stagger,
                        b = g.overwrite,
                        w = g.keyframes,
                        T = g.defaults,
                        S = g.scrollTrigger,
                        P = g.yoyoEase,
                        O = r.parent || k,
                        j = (Z(e) || K(e) ? q(e[0]) : "length" in r) ? [e] : es(e);
                    if (s._targets = j.length ? tx(j) : tu("GSAP target " + e + " not found. https://greensock.com", !R.nullTargetWarn) || [], s._ptLookup = [], s._overwrite = b, w || y || G(m) || G(v)) {
                        if (r = s.vars, (a = s.timeline = new eH({
                                data: "nested",
                                defaults: T || {},
                                targets: O && "nested" === O.data ? O.vars.targets : j
                            })).kill(), a.parent = a._dp = n(s), a._start = 0, y || G(m) || G(v)) {
                            if (c = j.length, d = y && eu(y), H(y))
                                for (h in y) ~e4.indexOf(h) && (p || (p = {}), p[h] = y[h]);
                            for (l = 0; l < c; l++)(u = tF(r, e9)).stagger = 0, P && (u.yoyoEase = P), p && tz(u, p), f = j[l], u.duration = +e7(m, n(s), l, f, j), u.delay = (+e7(v, n(s), l, f, j) || 0) - s._delay, !y && 1 === c && u.delay && (s._delay = v = u.delay, s._start += v, u.delay = 0), a.to(f, u, d ? d(l, f, j) : 0), a._ease = eC.none;
                            a.duration() ? m = v = 0 : s.timeline = 0
                        } else if (w) {
                            tN(tI(a.vars.defaults, {
                                ease: "none"
                            })), a._ease = eN(w.ease || r.ease || "none");
                            var E, A, C, D = 0;
                            if (Z(w)) w.forEach(function(t) {
                                return a.to(j, t, ">")
                            }), a.duration();
                            else {
                                for (h in u = {}, w) "ease" === h || "easeEach" === h || e6(h, w[h], u, w.easeEach);
                                for (h in u)
                                    for (l = 0, E = u[h].sort(function(t, e) {
                                            return t.t - e.t
                                        }), D = 0; l < E.length; l++)(C = {
                                        ease: (A = E[l]).e,
                                        duration: (A.t - (l ? E[l - 1].t : 0)) / 100 * m
                                    })[h] = A.v, a.to(j, C, D), D += C.duration;
                                a.duration() < m && a.to({}, {
                                    duration: m - a.duration()
                                })
                            }
                        }
                        m || s.duration(m = a.duration())
                    } else s.timeline = 0;
                    return !0 !== b || x || (eZ = n(s), k.killTweensOf(j), eZ = 0), tQ(O, n(s), i), r.reversed && s.reverse(), r.paused && s.paused(!0), (_ || !m && !w && s._start === tj(O._time) && Y(_) && function t(e) {
                        return !e || e._ts && t(e.parent)
                    }(n(s)) && "nested" !== O.data) && (s._tTime = -.00000001, s.render(Math.max(0, -v) || 0)), S && t0(n(s), S), s
                }
                i(e, t);
                var r = e.prototype;
                return r.render = function(t, e, r) {
                    var n, i, o, s, a, l, u, c, h, f = this._time,
                        d = this._tDur,
                        p = this._dur,
                        g = t < 0,
                        m = t > d - 1e-8 && !g ? d : t < 1e-8 ? 0 : t;
                    if (p) {
                        if (m !== this._tTime || !t || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== g) {
                            if (n = m, c = this.timeline, this._repeat) {
                                if (s = p + this._rDelay, this._repeat < -1 && g) return this.totalTime(100 * s + t, e, r);
                                if (n = tj(m % s), m === d ? (o = this._repeat, n = p) : ((o = ~~(m / s)) && o === m / s && (n = p, o--), n > p && (n = p)), (l = this._yoyo && 1 & o) && (h = this._yEase, n = p - n), a = tX(this._tTime, s), n === f && !r && this._initted) return this._tTime = m, this;
                                o === a || (c && this._yEase && eF(c, l), !this.vars.repeatRefresh || l || this._lock || (this._lock = r = 1, this.render(tj(s * o), !0).invalidate()._lock = 0))
                            }
                            if (!this._initted) {
                                if (t1(this, g ? t : n, r, e, m)) return this._tTime = 0, this;
                                if (f !== this._time) return this;
                                if (p !== this._dur) return this.render(t, e, r)
                            }
                            if (this._tTime = m, this._time = n, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = u = (h || this._ease)(n / p), this._from && (this.ratio = u = 1 - u), n && !f && !e && !o && (ev(this, "onStart"), this._tTime !== m)) return this;
                            for (i = this._pt; i;) i.r(u, i.d), i = i._next;
                            c && c.render(t < 0 ? t : !n && l ? -.00000001 : c._dur * c._ease(n / this._dur), e, r) || this._startAt && (this._zTime = t), this._onUpdate && !e && (g && tH(this, t, e, r), ev(this, "onUpdate")), this._repeat && o !== a && this.vars.onRepeat && !e && this.parent && ev(this, "onRepeat"), (m === this._tDur || !m) && this._tTime === m && (g && !this._onUpdate && tH(this, t, !0, !0), (t || !p) && (m === this._tDur && this._ts > 0 || !m && this._ts < 0) && tU(this, 1), !e && !(g && !f) && (m || f || l) && (ev(this, m === d ? "onComplete" : "onReverseComplete", !0), this._prom && !(m < d && this.timeScale() > 0) && this._prom()))
                        }
                    } else t3(this, t, e, r);
                    return this
                }, r.targets = function() {
                    return this._targets
                }, r.invalidate = function(e) {
                    return e && this.vars.runBackwards || (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(e), t.prototype.invalidate.call(this, e)
                }, r.resetTo = function(t, e, r, n) {
                    M || eE.wake(), this._ts || this.play();
                    var i = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
                    return (this._initted || e5(this, i), e3(this, t, e, r, n, this._ease(i / this._dur), i)) ? this.resetTo(t, e, r, n) : (tZ(this, 0), this.parent || t$(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
                }, r.kill = function(t, e) {
                    if (void 0 === e && (e = "all"), !t && (!e || "all" === e)) return this._lazy = this._pt = 0, this.parent ? e_(this) : this;
                    if (this.timeline) {
                        var r = this.timeline.totalDuration();
                        return this.timeline.killTweensOf(t, e, eZ && !0 !== eZ.vars.overwrite)._first || e_(this), this.parent && r !== this.timeline.totalDuration() && t6(this, this._dur * this.timeline._tDur / r, 0, 1), this
                    }
                    var n, i, o, s, a, l, u, c = this._targets,
                        h = t ? es(t) : c,
                        f = this._ptLookup,
                        d = this._pt;
                    if ((!e || "all" === e) && tB(c, h)) return "all" === e && (this._pt = 0), e_(this);
                    for (n = this._op = this._op || [], "all" !== e && (V(e) && (a = {}, tk(e, function(t) {
                            return a[t] = 1
                        }), e = a), e = e8(c, e)), u = c.length; u--;)
                        if (~h.indexOf(c[u]))
                            for (a in i = f[u], "all" === e ? (n[u] = e, s = i, o = {}) : (o = n[u] = n[u] || {}, s = e), s)(l = i && i[a]) && ("kill" in l.d && !0 !== l.d.kill(a) || tV(this, l, "_pt"), delete i[a]), "all" !== o && (o[a] = 1);
                    return this._initted && !this._pt && d && e_(this), this
                }, e.to = function(t, r) {
                    return new e(t, r, arguments[2])
                }, e.from = function(t, e) {
                    return et(1, arguments)
                }, e.delayedCall = function(t, r, n, i) {
                    return new e(r, 0, {
                        immediateRender: !1,
                        lazy: !1,
                        overwrite: !1,
                        delay: t,
                        onComplete: r,
                        onReverseComplete: r,
                        onCompleteParams: n,
                        onReverseCompleteParams: n,
                        callbackScope: i
                    })
                }, e.fromTo = function(t, e, r) {
                    return et(2, arguments)
                }, e.set = function(t, r) {
                    return r.duration = 0, r.repeatDelay || (r.repeat = 0), new e(t, r)
                }, e.killTweensOf = function(t, e, r) {
                    return k.killTweensOf(t, e, r)
                }, e
            }(eW);
            tI(rt.prototype, {
                _targets: [],
                _lazy: 0,
                _startAt: 0,
                _op: 0,
                _onInit: 0
            }), tk("staggerTo,staggerFrom,staggerFromTo", function(t) {
                rt[t] = function() {
                    var e = new eH,
                        r = ei.call(arguments, 0);
                    return r.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, r)
                }
            });
            var re = function(t, e, r) {
                    return t[e] = r
                },
                rr = function(t, e, r) {
                    return t[e](r)
                },
                rn = function(t, e, r, n) {
                    return t[e](n.fp, r)
                },
                ri = function(t, e, r) {
                    return t.setAttribute(e, r)
                },
                ro = function(t, e) {
                    return U(t[e]) ? rr : W(t[e]) && t.setAttribute ? ri : re
                },
                rs = function(t, e) {
                    return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e)
                },
                ra = function(t, e) {
                    return e.set(e.t, e.p, !!(e.s + e.c * t), e)
                },
                rl = function(t, e) {
                    var r = e._pt,
                        n = "";
                    if (!t && e.b) n = e.b;
                    else if (1 === t && e.e) n = e.e;
                    else {
                        for (; r;) n = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round((r.s + r.c * t) * 1e4) / 1e4) + n, r = r._next;
                        n += e.c
                    }
                    e.set(e.t, e.p, n, e)
                },
                ru = function(t, e) {
                    for (var r = e._pt; r;) r.r(t, r.d), r = r._next
                },
                rc = function(t, e, r, n) {
                    for (var i, o = this._pt; o;) i = o._next, o.p === n && o.modifier(t, e, r), o = i
                },
                rh = function(t) {
                    for (var e, r, n = this._pt; n;) r = n._next, (n.p !== t || n.op) && n.op !== t ? n.dep || (e = 1) : tV(this, n, "_pt"), n = r;
                    return !e
                },
                rf = function(t, e, r, n) {
                    n.mSet(t, e, n.m.call(n.tween, r, n.mt), n)
                },
                rd = function(t) {
                    for (var e, r, n, i, o = t._pt; o;) {
                        for (e = o._next, r = n; r && r.pr > o.pr;) r = r._next;
                        (o._prev = r ? r._prev : i) ? o._prev._next = o: n = o, (o._next = r) ? r._prev = o : i = o, o = e
                    }
                    t._pt = n
                },
                rp = function() {
                    function t(t, e, r, n, i, o, s, a, l) {
                        this.t = e, this.s = n, this.c = i, this.p = r, this.r = o || rs, this.d = s || this, this.set = a || re, this.pr = l || 0, this._next = t, t && (t._prev = this)
                    }
                    return t.prototype.modifier = function(t, e, r) {
                        this.mSet = this.mSet || this.set, this.set = rf, this.m = t, this.mt = r, this.tween = e
                    }, t
                }();
            tk(tT + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t) {
                return tg[t] = 1
            }), to.TweenMax = to.TweenLite = rt, to.TimelineLite = to.TimelineMax = eH, k = new eH({
                sortChildren: !1,
                defaults: I,
                autoRemoveChildren: !0,
                id: "root",
                smoothChildTiming: !0
            }), R.stringFilter = ej;
            var rg = [],
                rm = {},
                rv = [],
                r_ = 0,
                ry = function(t) {
                    return (rm[t] || rv).map(function(t) {
                        return t()
                    })
                },
                rb = function() {
                    var t = Date.now(),
                        e = [];
                    t - r_ > 2 && (ry("matchMediaInit"), rg.forEach(function(t) {
                        var r, n, i, o, s = t.queries,
                            a = t.conditions;
                        for (n in s)(r = O.matchMedia(s[n]).matches) && (i = 1), r !== a[n] && (a[n] = r, o = 1);
                        o && (t.revert(), i && e.push(t))
                    }), ry("matchMediaRevert"), e.forEach(function(t) {
                        return t.onMatch(t)
                    }), r_ = t, ry("matchMedia"))
                },
                rw = function() {
                    function t(t, e) {
                        this.selector = e && ea(e), this.data = [], this._r = [], this.isReverted = !1, t && this.add(t)
                    }
                    var e = t.prototype;
                    return e.add = function(t, e, r) {
                        U(t) && (r = e, e = t, t = U);
                        var n = this,
                            i = function() {
                                var t, i = P,
                                    o = n.selector;
                                return i && i !== n && i.data.push(n), r && (n.selector = ea(r)), P = n, t = e.apply(n, arguments), U(t) && n._r.push(t), P = i, n.selector = o, n.isReverted = !1, t
                            };
                        return n.last = i, t === U ? i(n) : t ? n[t] = i : i
                    }, e.ignore = function(t) {
                        var e = P;
                        P = null, t(this), P = e
                    }, e.getTweens = function() {
                        var e = [];
                        return this.data.forEach(function(r) {
                            return r instanceof t ? e.push.apply(e, r.getTweens()) : r instanceof rt && !(r.parent && "nested" === r.parent.data) && e.push(r)
                        }), e
                    }, e.clear = function() {
                        this._r.length = this.data.length = 0
                    }, e.kill = function(t, e) {
                        var r = this;
                        if (t) {
                            var n = this.getTweens();
                            this.data.forEach(function(t) {
                                "isFlip" === t.data && (t.revert(), t.getChildren(!0, !0, !1).forEach(function(t) {
                                    return n.splice(n.indexOf(t), 1)
                                }))
                            }), n.map(function(t) {
                                return {
                                    g: t.globalTime(0),
                                    t: t
                                }
                            }).sort(function(t, e) {
                                return e.g - t.g || -1
                            }).forEach(function(e) {
                                return e.t.revert(t)
                            }), this.data.forEach(function(e) {
                                return !(e instanceof eW) && e.revert && e.revert(t)
                            }), this._r.forEach(function(e) {
                                return e(t, r)
                            }), this.isReverted = !0
                        } else this.data.forEach(function(t) {
                            return t.kill && t.kill()
                        });
                        if (this.clear(), e) {
                            var i = rg.indexOf(this);
                            ~i && rg.splice(i, 1)
                        }
                    }, e.revert = function(t) {
                        this.kill(t || {})
                    }, t
                }(),
                rT = function() {
                    function t(t) {
                        this.contexts = [], this.scope = t
                    }
                    var e = t.prototype;
                    return e.add = function(t, e, r) {
                        H(t) || (t = {
                            matches: t
                        });
                        var n, i, o, s = new rw(0, r || this.scope),
                            a = s.conditions = {};
                        for (i in this.contexts.push(s), e = s.add("onMatch", e), s.queries = t, t) "all" === i ? o = 1 : (n = O.matchMedia(t[i])) && (0 > rg.indexOf(s) && rg.push(s), (a[i] = n.matches) && (o = 1), n.addListener ? n.addListener(rb) : n.addEventListener("change", rb));
                        return o && e(s), this
                    }, e.revert = function(t) {
                        this.kill(t || {})
                    }, e.kill = function(t) {
                        this.contexts.forEach(function(e) {
                            return e.kill(t, !0)
                        })
                    }, t
                }(),
                rx = {
                    registerPlugin: function() {
                        for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                        e.forEach(function(t) {
                            return eb(t)
                        })
                    },
                    timeline: function(t) {
                        return new eH(t)
                    },
                    getTweensOf: function(t, e) {
                        return k.getTweensOf(t, e)
                    },
                    getProperty: function(t, e, r, n) {
                        V(t) && (t = es(t)[0]);
                        var i = tS(t || {}).get,
                            o = r ? tR : tM;
                        return "native" === r && (r = ""), t ? e ? o((t_[e] && t_[e].get || i)(t, e, r, n)) : function(e, r, n) {
                            return o((t_[e] && t_[e].get || i)(t, e, r, n))
                        } : t
                    },
                    quickSetter: function(t, e, r) {
                        if ((t = es(t)).length > 1) {
                            var n = t.map(function(t) {
                                    return rO.quickSetter(t, e, r)
                                }),
                                i = n.length;
                            return function(t) {
                                for (var e = i; e--;) n[e](t)
                            }
                        }
                        t = t[0] || {};
                        var o = t_[e],
                            s = tS(t),
                            a = s.harness && (s.harness.aliases || {})[e] || e,
                            l = o ? function(e) {
                                var n = new o;
                                D._pt = 0, n.init(t, r ? e + r : e, D, 0, [t]), n.render(1, n), D._pt && ru(1, D)
                            } : s.set(t, a);
                        return o ? l : function(e) {
                            return l(t, a, r ? e + r : e, s, 1)
                        }
                    },
                    quickTo: function(t, e, r) {
                        var n, i = rO.to(t, tz(((n = {})[e] = "+=0.1", n.paused = !0, n), r || {})),
                            o = function(t, r, n) {
                                return i.resetTo(e, t, r, n)
                            };
                        return o.tween = i, o
                    },
                    isTweening: function(t) {
                        return k.getTweensOf(t, !0).length > 0
                    },
                    defaults: function(t) {
                        return t && t.ease && (t.ease = eN(t.ease, I.ease)), tL(I, t || {})
                    },
                    config: function(t) {
                        return tL(R, t || {})
                    },
                    registerEffect: function(t) {
                        var e = t.name,
                            r = t.effect,
                            n = t.plugins,
                            i = t.defaults,
                            o = t.extendTimeline;
                        (n || "").split(",").forEach(function(t) {
                            return t && !t_[t] && !to[t] && tu(e + " effect requires " + t + " plugin.")
                        }), ty[e] = function(t, e, n) {
                            return r(es(t), tI(e || {}, i), n)
                        }, o && (eH.prototype[e] = function(t, r, n) {
                            return this.add(ty[e](t, H(r) ? r : (n = r) && {}, this), n)
                        })
                    },
                    registerEase: function(t, e) {
                        eC[t] = eN(e)
                    },
                    parseEase: function(t, e) {
                        return arguments.length ? eN(t, e) : eC
                    },
                    getById: function(t) {
                        return k.getById(t)
                    },
                    exportRoot: function(t, e) {
                        void 0 === t && (t = {});
                        var r, n, i = new eH(t);
                        for (i.smoothChildTiming = Y(t.smoothChildTiming), k.remove(i), i._dp = 0, i._time = i._tTime = k._time, r = k._first; r;) n = r._next, (e || !(!r._dur && r instanceof rt && r.vars.onComplete === r._targets[0])) && tQ(i, r, r._start - r._delay), r = n;
                        return tQ(k, i, 0), i
                    },
                    context: function(t, e) {
                        return t ? new rw(t, e) : P
                    },
                    matchMedia: function(t) {
                        return new rT(t)
                    },
                    matchMediaRefresh: function() {
                        return rg.forEach(function(t) {
                            var e, r, n = t.conditions;
                            for (r in n) n[r] && (n[r] = !1, e = 1);
                            e && t.revert()
                        }) || rb()
                    },
                    addEventListener: function(t, e) {
                        var r = rm[t] || (rm[t] = []);
                        ~r.indexOf(e) || r.push(e)
                    },
                    removeEventListener: function(t, e) {
                        var r = rm[t],
                            n = r && r.indexOf(e);
                        n >= 0 && r.splice(n, 1)
                    },
                    utils: {
                        wrap: function t(e, r, n) {
                            var i = r - e;
                            return Z(e) ? ed(e, t(0, e.length), r) : ee(n, function(t) {
                                return (i + (t - e) % i) % i + e
                            })
                        },
                        wrapYoyo: function t(e, r, n) {
                            var i = r - e,
                                o = 2 * i;
                            return Z(e) ? ed(e, t(0, e.length - 1), r) : ee(n, function(t) {
                                return t = (o + (t - e) % o) % o || 0, e + (t > i ? o - t : t)
                            })
                        },
                        distribute: eu,
                        random: ef,
                        snap: eh,
                        normalize: function(t, e, r) {
                            return eg(t, e, 0, 1, r)
                        },
                        getUnit: en,
                        clamp: function(t, e, r) {
                            return ee(r, function(r) {
                                return er(t, e, r)
                            })
                        },
                        splitColor: ex,
                        toArray: es,
                        selector: ea,
                        mapRange: eg,
                        pipe: function() {
                            for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                            return function(t) {
                                return e.reduce(function(t, e) {
                                    return e(t)
                                }, t)
                            }
                        },
                        unitize: function(t, e) {
                            return function(r) {
                                return t(parseFloat(r)) + (e || en(r))
                            }
                        },
                        interpolate: function t(e, r, n, i) {
                            var o = isNaN(e + r) ? 0 : function(t) {
                                return (1 - t) * e + t * r
                            };
                            if (!o) {
                                var s, a, l, u, c, h = V(e),
                                    f = {};
                                if (!0 === n && (i = 1) && (n = null), h) e = {
                                    p: e
                                }, r = {
                                    p: r
                                };
                                else if (Z(e) && !Z(r)) {
                                    for (a = 1, l = [], c = (u = e.length) - 2; a < u; a++) l.push(t(e[a - 1], e[a]));
                                    u--, o = function(t) {
                                        var e = Math.min(c, ~~(t *= u));
                                        return l[e](t - e)
                                    }, n = r
                                } else i || (e = tz(Z(e) ? [] : {}, e));
                                if (!l) {
                                    for (s in r) e0.call(f, e, s, "get", r[s]);
                                    o = function(t) {
                                        return ru(t, f) || (h ? e.p : e)
                                    }
                                }
                            }
                            return ee(n, o)
                        },
                        shuffle: el
                    },
                    install: ta,
                    effects: ty,
                    ticker: eE,
                    updateRoot: eH.updateRoot,
                    plugins: t_,
                    globalTimeline: k,
                    core: {
                        PropTween: rp,
                        globals: tc,
                        Tween: rt,
                        Timeline: eH,
                        Animation: eW,
                        getCache: tS,
                        _removeLinkedListItem: tV,
                        reverting: function() {
                            return S
                        },
                        context: function(t) {
                            return t && P && (P.data.push(t), t._ctx = P), P
                        },
                        suppressOverwrites: function(t) {
                            return x = t
                        }
                    }
                };
            tk("to,from,fromTo,delayedCall,set,killTweensOf", function(t) {
                return rx[t] = rt[t]
            }), eE.add(eH.updateRoot), D = rx.to({}, {
                duration: 0
            });
            var rS = function(t, e) {
                    for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e;) r = r._next;
                    return r
                },
                rP = function(t, e) {
                    var r, n, i, o = t._targets;
                    for (r in e)
                        for (n = o.length; n--;)(i = t._ptLookup[n][r]) && (i = i.d) && (i._pt && (i = rS(i, r)), i && i.modifier && i.modifier(e[r], t, o[n], r))
                },
                rk = function(t, e) {
                    return {
                        name: t,
                        rawVars: 1,
                        init: function(t, r, n) {
                            n._onInit = function(t) {
                                var n, i;
                                if (V(r) && (n = {}, tk(r, function(t) {
                                        return n[t] = 1
                                    }), r = n), e) {
                                    for (i in n = {}, r) n[i] = e(r[i]);
                                    r = n
                                }
                                rP(t, r)
                            }
                        }
                    }
                },
                rO = rx.registerPlugin({
                    name: "attr",
                    init: function(t, e, r, n, i) {
                        var o, s, a;
                        for (o in this.tween = r, e) a = t.getAttribute(o) || "", (s = this.add(t, "setAttribute", (a || 0) + "", e[o], n, i, 0, 0, o)).op = o, s.b = a, this._props.push(o)
                    },
                    render: function(t, e) {
                        for (var r = e._pt; r;) S ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), r = r._next
                    }
                }, {
                    name: "endArray",
                    init: function(t, e) {
                        for (var r = e.length; r--;) this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1)
                    }
                }, rk("roundProps", ec), rk("modifiers"), rk("snap", eh)) || rx;
            rt.version = eH.version = rO.version = "3.11.5", A = 1, X() && eA(), eC.Power0, eC.Power1, eC.Power2, eC.Power3, eC.Power4, eC.Linear, eC.Quad, eC.Cubic, eC.Quart, eC.Quint, eC.Strong, eC.Elastic, eC.Back, eC.SteppedEase, eC.Bounce, eC.Sine, eC.Expo, eC.Circ;
            /*!
             * CSSPlugin 3.11.5
             * https://greensock.com
             *
             * Copyright 2008-2023, GreenSock. All rights reserved.
             * Subject to the terms at https://greensock.com/standard-license or for
             * Club GreenSock members, the agreement issued with that membership.
             * @author: Jack Doyle, jack@greensock.com
             */
            var rj, rE, rA, rC, rD, rM, rR, rI = {},
                rz = 180 / Math.PI,
                rL = Math.PI / 180,
                rF = Math.atan2,
                rN = /([A-Z])/g,
                rB = /(left|right|width|margin|padding|x)/i,
                r$ = /[\s,\(]\S/,
                rV = {
                    autoAlpha: "opacity,visibility",
                    scale: "scaleX,scaleY",
                    alpha: "opacity"
                },
                rU = function(t, e) {
                    return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e)
                },
                rq = function(t, e) {
                    return e.set(e.t, e.p, 1 === t ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e)
                },
                rW = function(t, e) {
                    return e.set(e.t, e.p, t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e)
                },
                rH = function(t, e) {
                    var r = e.s + e.c * t;
                    e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e)
                },
                rY = function(t, e) {
                    return e.set(e.t, e.p, t ? e.e : e.b, e)
                },
                rX = function(t, e) {
                    return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
                },
                rG = function(t, e, r) {
                    return t.style[e] = r
                },
                rK = function(t, e, r) {
                    return t.style.setProperty(e, r)
                },
                rZ = function(t, e, r) {
                    return t._gsap[e] = r
                },
                rJ = function(t, e, r) {
                    return t._gsap.scaleX = t._gsap.scaleY = r
                },
                rQ = function(t, e, r, n, i) {
                    var o = t._gsap;
                    o.scaleX = o.scaleY = r, o.renderTransform(i, o)
                },
                r0 = function(t, e, r, n, i) {
                    var o = t._gsap;
                    o[e] = r, o.renderTransform(i, o)
                },
                r1 = "transform",
                r2 = r1 + "Origin",
                r5 = function t(e, r) {
                    var n = this,
                        i = this.target,
                        o = i.style;
                    if (e in rI) {
                        if (this.tfm = this.tfm || {}, "transform" === e) return rV.transform.split(",").forEach(function(e) {
                            return t.call(n, e, r)
                        });
                        if (~(e = rV[e] || e).indexOf(",") ? e.split(",").forEach(function(t) {
                                return n.tfm[t] = nh(i, t)
                            }) : this.tfm[e] = i._gsap.x ? i._gsap[e] : nh(i, e), this.props.indexOf(r1) >= 0) return;
                        i._gsap.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(r2, r, "")), e = r1
                    }(o || r) && this.props.push(e, r, o[e])
                },
                r3 = function(t) {
                    t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"))
                },
                r8 = function() {
                    var t, e, r = this.props,
                        n = this.target,
                        i = n.style,
                        o = n._gsap;
                    for (t = 0; t < r.length; t += 3) r[t + 1] ? n[r[t]] = r[t + 2] : r[t + 2] ? i[r[t]] = r[t + 2] : i.removeProperty("--" === r[t].substr(0, 2) ? r[t] : r[t].replace(rN, "-$1").toLowerCase());
                    if (this.tfm) {
                        for (e in this.tfm) o[e] = this.tfm[e];
                        o.svg && (o.renderTransform(), n.setAttribute("data-svg-origin", this.svgo || "")), (t = rM()) && t.isStart || i[r1] || (r3(i), o.uncache = 1)
                    }
                },
                r6 = function(t, e) {
                    var r = {
                        target: t,
                        props: [],
                        revert: r8,
                        save: r5
                    };
                    return t._gsap || rO.core.getCache(t), e && e.split(",").forEach(function(t) {
                        return r.save(t)
                    }), r
                },
                r7 = function(t, e) {
                    var r = rj.createElementNS ? rj.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : rj.createElement(t);
                    return r.style ? r : rj.createElement(t)
                },
                r4 = function t(e, r, n) {
                    var i = getComputedStyle(e);
                    return i[r] || i.getPropertyValue(r.replace(rN, "-$1").toLowerCase()) || i.getPropertyValue(r) || !n && t(e, nt(r) || r, 1) || ""
                },
                r9 = "O,Moz,ms,Ms,Webkit".split(","),
                nt = function(t, e, r) {
                    var n = (e || rC).style,
                        i = 5;
                    if (t in n && !r) return t;
                    for (t = t.charAt(0).toUpperCase() + t.substr(1); i-- && !(r9[i] + t in n););
                    return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? r9[i] : "") + t
                },
                ne = function() {
                    "undefined" != typeof window && window.document && (rE = (rj = window.document).documentElement, rC = r7("div") || {
                        style: {}
                    }, r7("div"), r2 = (r1 = nt(r1)) + "Origin", rC.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", rR = !!nt("perspective"), rM = rO.core.reverting, rA = 1)
                },
                nr = function t(e) {
                    var r, n = r7("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                        i = this.parentNode,
                        o = this.nextSibling,
                        s = this.style.cssText;
                    if (rE.appendChild(n), n.appendChild(this), this.style.display = "block", e) try {
                        r = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = t
                    } catch (t) {} else this._gsapBBox && (r = this._gsapBBox());
                    return i && (o ? i.insertBefore(this, o) : i.appendChild(this)), rE.removeChild(n), this.style.cssText = s, r
                },
                nn = function(t, e) {
                    for (var r = e.length; r--;)
                        if (t.hasAttribute(e[r])) return t.getAttribute(e[r])
                },
                ni = function(t) {
                    var e;
                    try {
                        e = t.getBBox()
                    } catch (r) {
                        e = nr.call(t, !0)
                    }
                    return e && (e.width || e.height) || t.getBBox === nr || (e = nr.call(t, !0)), !e || e.width || e.x || e.y ? e : {
                        x: +nn(t, ["x", "cx", "x1"]) || 0,
                        y: +nn(t, ["y", "cy", "y1"]) || 0,
                        width: 0,
                        height: 0
                    }
                },
                no = function(t) {
                    return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && ni(t))
                },
                ns = function(t, e) {
                    if (e) {
                        var r = t.style;
                        e in rI && e !== r2 && (e = r1), r.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), r.removeProperty(e.replace(rN, "-$1").toLowerCase())) : r.removeAttribute(e)
                    }
                },
                na = function(t, e, r, n, i, o) {
                    var s = new rp(t._pt, e, r, 0, 1, o ? rX : rY);
                    return t._pt = s, s.b = n, s.e = i, t._props.push(r), s
                },
                nl = {
                    deg: 1,
                    rad: 1,
                    turn: 1
                },
                nu = {
                    grid: 1,
                    flex: 1
                },
                nc = function t(e, r, n, i) {
                    var o, s, a, l, u = parseFloat(n) || 0,
                        c = (n + "").trim().substr((u + "").length) || "px",
                        h = rC.style,
                        f = rB.test(r),
                        d = "svg" === e.tagName.toLowerCase(),
                        p = (d ? "client" : "offset") + (f ? "Width" : "Height"),
                        g = "px" === i,
                        m = "%" === i;
                    return i === c || !u || nl[i] || nl[c] ? u : ("px" === c || g || (u = t(e, r, n, "px")), l = e.getCTM && no(e), (m || "%" === c) && (rI[r] || ~r.indexOf("adius"))) ? (o = l ? e.getBBox()[f ? "width" : "height"] : e[p], tO(m ? u / o * 100 : u / 100 * o)) : (h[f ? "width" : "height"] = 100 + (g ? c : i), s = ~r.indexOf("adius") || "em" === i && e.appendChild && !d ? e : e.parentNode, l && (s = (e.ownerSVGElement || {}).parentNode), s && s !== rj && s.appendChild || (s = rj.body), (a = s._gsap) && m && a.width && f && a.time === eE.time && !a.uncache) ? tO(u / a.width * 100) : ((m || "%" === c) && !nu[r4(s, "display")] && (h.position = r4(e, "position")), s === e && (h.position = "static"), s.appendChild(rC), o = rC[p], s.removeChild(rC), h.position = "absolute", f && m && ((a = tS(s)).time = eE.time, a.width = s[p]), tO(g ? o * u / 100 : o && u ? 100 / o * u : 0))
                },
                nh = function(t, e, r, n) {
                    var i;
                    return rA || ne(), e in rV && "transform" !== e && ~(e = rV[e]).indexOf(",") && (e = e.split(",")[0]), rI[e] && "transform" !== e ? (i = nx(t, n), i = "transformOrigin" !== e ? i[e] : i.svg ? i.origin : nS(r4(t, r2)) + " " + i.zOrigin + "px") : (!(i = t.style[e]) || "auto" === i || n || ~(i + "").indexOf("calc(")) && (i = nm[e] && nm[e](t, e, r) || r4(t, e) || tP(t, e) || ("opacity" === e ? 1 : 0)), r && !~(i + "").trim().indexOf(" ") ? nc(t, e, i, r) + r : i
                },
                nf = function(t, e, r, n) {
                    if (!r || "none" === r) {
                        var i = nt(e, t, 1),
                            o = i && r4(t, i, 1);
                        o && o !== r ? (e = i, r = o) : "borderColor" === e && (r = r4(t, "borderTopColor"))
                    }
                    var s, a, l, u, c, h, f, d, p, g, m, v = new rp(this._pt, t.style, e, 0, 1, rl),
                        _ = 0,
                        y = 0;
                    if (v.b = r, v.e = n, r += "", "auto" == (n += "") && (t.style[e] = n, n = r4(t, e) || n, t.style[e] = r), ej(s = [r, n]), r = s[0], n = s[1], l = r.match(tt) || [], (n.match(tt) || []).length) {
                        for (; a = tt.exec(n);) f = a[0], p = n.substring(_, a.index), c ? c = (c + 1) % 5 : ("rgba(" === p.substr(-5) || "hsla(" === p.substr(-5)) && (c = 1), f !== (h = l[y++] || "") && (u = parseFloat(h) || 0, m = h.substr((u + "").length), "=" === f.charAt(1) && (f = tE(u, f) + m), d = parseFloat(f), g = f.substr((d + "").length), _ = tt.lastIndex - g.length, g || (g = g || R.units[e] || m, _ !== n.length || (n += g, v.e += g)), m !== g && (u = nc(t, e, h, g) || 0), v._pt = {
                            _next: v._pt,
                            p: p || 1 === y ? p : ",",
                            s: u,
                            c: d - u,
                            m: c && c < 4 || "zIndex" === e ? Math.round : 0
                        });
                        v.c = _ < n.length ? n.substring(_, n.length) : ""
                    } else v.r = "display" === e && "none" === n ? rX : rY;
                    return tr.test(n) && (v.e = 0), this._pt = v, v
                },
                nd = {
                    top: "0%",
                    bottom: "100%",
                    left: "0%",
                    right: "100%",
                    center: "50%"
                },
                np = function(t) {
                    var e = t.split(" "),
                        r = e[0],
                        n = e[1] || "50%";
                    return ("top" === r || "bottom" === r || "left" === n || "right" === n) && (t = r, r = n, n = t), e[0] = nd[r] || r, e[1] = nd[n] || n, e.join(" ")
                },
                ng = function(t, e) {
                    if (e.tween && e.tween._time === e.tween._dur) {
                        var r, n, i, o = e.t,
                            s = o.style,
                            a = e.u,
                            l = o._gsap;
                        if ("all" === a || !0 === a) s.cssText = "", n = 1;
                        else
                            for (i = (a = a.split(",")).length; --i > -1;) rI[r = a[i]] && (n = 1, r = "transformOrigin" === r ? r2 : r1), ns(o, r);
                        n && (ns(o, r1), l && (l.svg && o.removeAttribute("transform"), nx(o, 1), l.uncache = 1, r3(s)))
                    }
                },
                nm = {
                    clearProps: function(t, e, r, n, i) {
                        if ("isFromStart" !== i.data) {
                            var o = t._pt = new rp(t._pt, e, r, 0, 0, ng);
                            return o.u = n, o.pr = -10, o.tween = i, t._props.push(r), 1
                        }
                    }
                },
                nv = [1, 0, 0, 1, 0, 0],
                n_ = {},
                ny = function(t) {
                    return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
                },
                nb = function(t) {
                    var e = r4(t, r1);
                    return ny(e) ? nv : e.substr(7).match(Q).map(tO)
                },
                nw = function(t, e) {
                    var r, n, i, o, s = t._gsap || tS(t),
                        a = t.style,
                        l = nb(t);
                    return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (l = [(i = t.transform.baseVal.consolidate().matrix).a, i.b, i.c, i.d, i.e, i.f]).join(",") ? nv : l : (l !== nv || t.offsetParent || t === rE || s.svg || (i = a.display, a.display = "block", (r = t.parentNode) && t.offsetParent || (o = 1, n = t.nextElementSibling, rE.appendChild(t)), l = nb(t), i ? a.display = i : ns(t, "display"), o && (n ? r.insertBefore(t, n) : r ? r.appendChild(t) : rE.removeChild(t))), e && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l)
                },
                nT = function(t, e, r, n, i, o) {
                    var s, a, l, u, c = t._gsap,
                        h = i || nw(t, !0),
                        f = c.xOrigin || 0,
                        d = c.yOrigin || 0,
                        p = c.xOffset || 0,
                        g = c.yOffset || 0,
                        m = h[0],
                        v = h[1],
                        _ = h[2],
                        y = h[3],
                        b = h[4],
                        w = h[5],
                        T = e.split(" "),
                        x = parseFloat(T[0]) || 0,
                        S = parseFloat(T[1]) || 0;
                    r ? h !== nv && (a = m * y - v * _) && (l = x * (y / a) + S * (-_ / a) + (_ * w - y * b) / a, u = x * (-v / a) + S * (m / a) - (m * w - v * b) / a, x = l, S = u) : (x = (s = ni(t)).x + (~T[0].indexOf("%") ? x / 100 * s.width : x), S = s.y + (~(T[1] || T[0]).indexOf("%") ? S / 100 * s.height : S)), n || !1 !== n && c.smooth ? (b = x - f, w = S - d, c.xOffset = p + (b * m + w * _) - b, c.yOffset = g + (b * v + w * y) - w) : c.xOffset = c.yOffset = 0, c.xOrigin = x, c.yOrigin = S, c.smooth = !!n, c.origin = e, c.originIsAbsolute = !!r, t.style[r2] = "0px 0px", o && (na(o, c, "xOrigin", f, x), na(o, c, "yOrigin", d, S), na(o, c, "xOffset", p, c.xOffset), na(o, c, "yOffset", g, c.yOffset)), t.setAttribute("data-svg-origin", x + " " + S)
                },
                nx = function(t, e) {
                    var r = t._gsap || new eq(t);
                    if ("x" in r && !e && !r.uncache) return r;
                    var n, i, o, s, a, l, u, c, h, f, d, p, g, m, v, _, y, b, w, T, x, S, P, k, O, j, E, A, C, D, M, I, z = t.style,
                        L = r.scaleX < 0,
                        F = getComputedStyle(t),
                        N = r4(t, r2) || "0";
                    return n = i = o = l = u = c = h = f = d = 0, s = a = 1, r.svg = !!(t.getCTM && no(t)), F.translate && (("none" !== F.translate || "none" !== F.scale || "none" !== F.rotate) && (z[r1] = ("none" !== F.translate ? "translate3d(" + (F.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== F.rotate ? "rotate(" + F.rotate + ") " : "") + ("none" !== F.scale ? "scale(" + F.scale.split(" ").join(",") + ") " : "") + ("none" !== F[r1] ? F[r1] : "")), z.scale = z.rotate = z.translate = "none"), m = nw(t, r.svg), r.svg && (r.uncache ? (O = t.getBBox(), N = r.xOrigin - O.x + "px " + (r.yOrigin - O.y) + "px", k = "") : k = !e && t.getAttribute("data-svg-origin"), nT(t, k || N, !!k || r.originIsAbsolute, !1 !== r.smooth, m)), p = r.xOrigin || 0, g = r.yOrigin || 0, m !== nv && (b = m[0], w = m[1], T = m[2], x = m[3], n = S = m[4], i = P = m[5], 6 === m.length ? (s = Math.sqrt(b * b + w * w), a = Math.sqrt(x * x + T * T), l = b || w ? rF(w, b) * rz : 0, (h = T || x ? rF(T, x) * rz + l : 0) && (a *= Math.abs(Math.cos(h * rL))), r.svg && (n -= p - (p * b + g * T), i -= g - (p * w + g * x))) : (I = m[6], D = m[7], E = m[8], A = m[9], C = m[10], M = m[11], n = m[12], i = m[13], o = m[14], u = (v = rF(I, C)) * rz, v && (k = S * (_ = Math.cos(-v)) + E * (y = Math.sin(-v)), O = P * _ + A * y, j = I * _ + C * y, E = -(S * y) + E * _, A = -(P * y) + A * _, C = -(I * y) + C * _, M = -(D * y) + M * _, S = k, P = O, I = j), c = (v = rF(-T, C)) * rz, v && (k = b * (_ = Math.cos(-v)) - E * (y = Math.sin(-v)), O = w * _ - A * y, j = T * _ - C * y, M = x * y + M * _, b = k, w = O, T = j), l = (v = rF(w, b)) * rz, v && (_ = Math.cos(v), y = Math.sin(v), k = b * _ + w * y, O = S * _ + P * y, w = w * _ - b * y, P = P * _ - S * y, b = k, S = O), u && Math.abs(u) + Math.abs(l) > 359.9 && (u = l = 0, c = 180 - c), s = tO(Math.sqrt(b * b + w * w + T * T)), a = tO(Math.sqrt(P * P + I * I)), h = Math.abs(v = rF(S, P)) > 2e-4 ? v * rz : 0, d = M ? 1 / (M < 0 ? -M : M) : 0), r.svg && (k = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !ny(r4(t, r1)), k && t.setAttribute("transform", k))), Math.abs(h) > 90 && 270 > Math.abs(h) && (L ? (s *= -1, h += l <= 0 ? 180 : -180, l += l <= 0 ? 180 : -180) : (a *= -1, h += h <= 0 ? 180 : -180)), e = e || r.uncache, r.x = n - ((r.xPercent = n && (!e && r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + "px", r.y = i - ((r.yPercent = i && (!e && r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + "px", r.z = o + "px", r.scaleX = tO(s), r.scaleY = tO(a), r.rotation = tO(l) + "deg", r.rotationX = tO(u) + "deg", r.rotationY = tO(c) + "deg", r.skewX = h + "deg", r.skewY = f + "deg", r.transformPerspective = d + "px", (r.zOrigin = parseFloat(N.split(" ")[2]) || 0) && (z[r2] = nS(N)), r.xOffset = r.yOffset = 0, r.force3D = R.force3D, r.renderTransform = r.svg ? nE : rR ? nj : nk, r.uncache = 0, r
                },
                nS = function(t) {
                    return (t = t.split(" "))[0] + " " + t[1]
                },
                nP = function(t, e, r) {
                    var n = en(e);
                    return tO(parseFloat(e) + parseFloat(nc(t, "x", r + "px", n))) + n
                },
                nk = function(t, e) {
                    e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, nj(t, e)
                },
                nO = "0deg",
                nj = function(t, e) {
                    var r = e || this,
                        n = r.xPercent,
                        i = r.yPercent,
                        o = r.x,
                        s = r.y,
                        a = r.z,
                        l = r.rotation,
                        u = r.rotationY,
                        c = r.rotationX,
                        h = r.skewX,
                        f = r.skewY,
                        d = r.scaleX,
                        p = r.scaleY,
                        g = r.transformPerspective,
                        m = r.force3D,
                        v = r.target,
                        _ = r.zOrigin,
                        y = "",
                        b = "auto" === m && t && 1 !== t || !0 === m;
                    if (_ && (c !== nO || u !== nO)) {
                        var w, T = parseFloat(u) * rL,
                            x = Math.sin(T),
                            S = Math.cos(T);
                        o = nP(v, o, -(x * (w = Math.cos(T = parseFloat(c) * rL)) * _)), s = nP(v, s, -(-Math.sin(T) * _)), a = nP(v, a, -(S * w * _) + _)
                    }
                    "0px" !== g && (y += "perspective(" + g + ") "), (n || i) && (y += "translate(" + n + "%, " + i + "%) "), (b || "0px" !== o || "0px" !== s || "0px" !== a) && (y += "0px" !== a || b ? "translate3d(" + o + ", " + s + ", " + a + ") " : "translate(" + o + ", " + s + ") "), l !== nO && (y += "rotate(" + l + ") "), u !== nO && (y += "rotateY(" + u + ") "), c !== nO && (y += "rotateX(" + c + ") "), (h !== nO || f !== nO) && (y += "skew(" + h + ", " + f + ") "), (1 !== d || 1 !== p) && (y += "scale(" + d + ", " + p + ") "), v.style[r1] = y || "translate(0, 0)"
                },
                nE = function(t, e) {
                    var r, n, i, o, s, a = e || this,
                        l = a.xPercent,
                        u = a.yPercent,
                        c = a.x,
                        h = a.y,
                        f = a.rotation,
                        d = a.skewX,
                        p = a.skewY,
                        g = a.scaleX,
                        m = a.scaleY,
                        v = a.target,
                        _ = a.xOrigin,
                        y = a.yOrigin,
                        b = a.xOffset,
                        w = a.yOffset,
                        T = a.forceCSS,
                        x = parseFloat(c),
                        S = parseFloat(h);
                    f = parseFloat(f), d = parseFloat(d), (p = parseFloat(p)) && (d += p = parseFloat(p), f += p), f || d ? (f *= rL, d *= rL, r = Math.cos(f) * g, n = Math.sin(f) * g, i = -(Math.sin(f - d) * m), o = Math.cos(f - d) * m, d && (p *= rL, i *= s = Math.sqrt(1 + (s = Math.tan(d - p)) * s), o *= s, p && (r *= s = Math.sqrt(1 + (s = Math.tan(p)) * s), n *= s)), r = tO(r), n = tO(n), i = tO(i), o = tO(o)) : (r = g, o = m, n = i = 0), (x && !~(c + "").indexOf("px") || S && !~(h + "").indexOf("px")) && (x = nc(v, "x", c, "px"), S = nc(v, "y", h, "px")), (_ || y || b || w) && (x = tO(x + _ - (_ * r + y * i) + b), S = tO(S + y - (_ * n + y * o) + w)), (l || u) && (x = tO(x + l / 100 * (s = v.getBBox()).width), S = tO(S + u / 100 * s.height)), s = "matrix(" + r + "," + n + "," + i + "," + o + "," + x + "," + S + ")", v.setAttribute("transform", s), T && (v.style[r1] = s)
                },
                nA = function(t, e, r, n, i) {
                    var o, s, a = V(i),
                        l = parseFloat(i) * (a && ~i.indexOf("rad") ? rz : 1) - n,
                        u = n + l + "deg";
                    return a && ("short" === (o = i.split("_")[1]) && (l %= 360) != l % 180 && (l += l < 0 ? 360 : -360), "cw" === o && l < 0 ? l = (l + 36e9) % 360 - 360 * ~~(l / 360) : "ccw" === o && l > 0 && (l = (l - 36e9) % 360 - 360 * ~~(l / 360))), t._pt = s = new rp(t._pt, e, r, n, l, rq), s.e = u, s.u = "deg", t._props.push(r), s
                },
                nC = function(t, e) {
                    for (var r in e) t[r] = e[r];
                    return t
                },
                nD = function(t, e, r) {
                    var n, i, o, s, a, l, u, c = nC({}, r._gsap),
                        h = r.style;
                    for (i in c.svg ? (o = r.getAttribute("transform"), r.setAttribute("transform", ""), h[r1] = e, n = nx(r, 1), ns(r, r1), r.setAttribute("transform", o)) : (o = getComputedStyle(r)[r1], h[r1] = e, n = nx(r, 1), h[r1] = o), rI)(o = c[i]) !== (s = n[i]) && 0 > "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) && (a = en(o) !== (u = en(s)) ? nc(r, i, o, u) : parseFloat(o), l = parseFloat(s), t._pt = new rp(t._pt, n, i, a, l - a, rU), t._pt.u = u || 0, t._props.push(i));
                    nC(n, c)
                };
            tk("padding,margin,Width,Radius", function(t, e) {
                var r = "Right",
                    n = "Bottom",
                    i = "Left",
                    o = (e < 3 ? ["Top", r, n, i] : ["Top" + i, "Top" + r, n + r, n + i]).map(function(r) {
                        return e < 2 ? t + r : "border" + r + t
                    });
                nm[e > 1 ? "border" + t : t] = function(t, e, r, n, i) {
                    var s, a;
                    if (arguments.length < 4) return 5 === (a = (s = o.map(function(e) {
                        return nh(t, e, r)
                    })).join(" ")).split(s[0]).length ? s[0] : a;
                    s = (n + "").split(" "), a = {}, o.forEach(function(t, e) {
                        return a[t] = s[e] = s[e] || s[(e - 1) / 2 | 0]
                    }), t.init(e, a, i)
                }
            });
            var nM = {
                name: "css",
                register: ne,
                targetTest: function(t) {
                    return t.style && t.nodeType
                },
                init: function(t, e, r, n, i) {
                    var o, s, a, l, u, c, h, f, d, p, g, m, v, _, y, b, w = this._props,
                        T = t.style,
                        x = r.vars.startAt;
                    for (h in rA || ne(), this.styles = this.styles || r6(t), b = this.styles.props, this.tween = r, e)
                        if ("autoRound" !== h && (s = e[h], !(t_[h] && e2(h, e, r, n, t, i)))) {
                            if (u = typeof s, c = nm[h], "function" === u && (u = typeof(s = s.call(r, n, t, i))), "string" === u && ~s.indexOf("random(") && (s = ep(s)), c) c(this, t, h, s, r) && (y = 1);
                            else if ("--" === h.substr(0, 2)) o = (getComputedStyle(t).getPropertyValue(h) + "").trim(), s += "", ek.lastIndex = 0, ek.test(o) || (f = en(o), d = en(s)), d ? f !== d && (o = nc(t, h, o, d) + d) : f && (s += f), this.add(T, "setProperty", o, s, n, i, 0, 0, h), w.push(h), b.push(h, 0, T[h]);
                            else if ("undefined" !== u) {
                                if (x && h in x ? (V(o = "function" == typeof x[h] ? x[h].call(r, n, t, i) : x[h]) && ~o.indexOf("random(") && (o = ep(o)), en(o + "") || (o += R.units[h] || en(nh(t, h)) || ""), "=" === (o + "").charAt(1) && (o = nh(t, h))) : o = nh(t, h), l = parseFloat(o), (p = "string" === u && "=" === s.charAt(1) && s.substr(0, 2)) && (s = s.substr(2)), a = parseFloat(s), h in rV && ("autoAlpha" === h && (1 === l && "hidden" === nh(t, "visibility") && a && (l = 0), b.push("visibility", 0, T.visibility), na(this, T, "visibility", l ? "inherit" : "hidden", a ? "inherit" : "hidden", !a)), "scale" !== h && "transform" !== h && ~(h = rV[h]).indexOf(",") && (h = h.split(",")[0])), g = h in rI) {
                                    if (this.styles.save(h), m || ((v = t._gsap).renderTransform && !e.parseTransform || nx(t, e.parseTransform), _ = !1 !== e.smoothOrigin && v.smooth, (m = this._pt = new rp(this._pt, T, r1, 0, 1, v.renderTransform, v, 0, -1)).dep = 1), "scale" === h) this._pt = new rp(this._pt, v, "scaleY", v.scaleY, (p ? tE(v.scaleY, p + a) : a) - v.scaleY || 0, rU), this._pt.u = 0, w.push("scaleY", h), h += "X";
                                    else if ("transformOrigin" === h) {
                                        b.push(r2, 0, T[r2]), s = np(s), v.svg ? nT(t, s, 0, _, 0, this) : ((d = parseFloat(s.split(" ")[2]) || 0) !== v.zOrigin && na(this, v, "zOrigin", v.zOrigin, d), na(this, T, h, nS(o), nS(s)));
                                        continue
                                    } else if ("svgOrigin" === h) {
                                        nT(t, s, 1, _, 0, this);
                                        continue
                                    } else if (h in n_) {
                                        nA(this, v, h, l, p ? tE(l, p + s) : s);
                                        continue
                                    } else if ("smoothOrigin" === h) {
                                        na(this, v, "smooth", v.smooth, s);
                                        continue
                                    } else if ("force3D" === h) {
                                        v[h] = s;
                                        continue
                                    } else if ("transform" === h) {
                                        nD(this, s, t);
                                        continue
                                    }
                                } else h in T || (h = nt(h) || h);
                                if (g || (a || 0 === a) && (l || 0 === l) && !r$.test(s) && h in T) f = (o + "").substr((l + "").length), a || (a = 0), d = en(s) || (h in R.units ? R.units[h] : f), f !== d && (l = nc(t, h, o, d)), this._pt = new rp(this._pt, g ? v : T, h, l, (p ? tE(l, p + a) : a) - l, g || "px" !== d && "zIndex" !== h || !1 === e.autoRound ? rU : rH), this._pt.u = d || 0, f !== d && "%" !== d && (this._pt.b = o, this._pt.r = rW);
                                else if (h in T) nf.call(this, t, h, o, p ? p + s : s);
                                else if (h in t) this.add(t, h, o || t[h], p ? p + s : s, n, i);
                                else if ("parseTransform" !== h) {
                                    tl(h, s);
                                    continue
                                }
                                g || (h in T ? b.push(h, 0, T[h]) : b.push(h, 1, o || t[h])), w.push(h)
                            }
                        }
                    y && rd(this)
                },
                render: function(t, e) {
                    if (e.tween._time || !rM())
                        for (var r = e._pt; r;) r.r(t, r.d), r = r._next;
                    else e.styles.revert()
                },
                get: nh,
                aliases: rV,
                getSetter: function(t, e, r) {
                    var n = rV[e];
                    return n && 0 > n.indexOf(",") && (e = n), e in rI && e !== r2 && (t._gsap.x || nh(t, "x")) ? r && rD === r ? "scale" === e ? rJ : rZ : (rD = r || {}, "scale" === e ? rQ : r0) : t.style && !W(t.style[e]) ? rG : ~e.indexOf("-") ? rK : ro(t, e)
                },
                core: {
                    _removeProperty: ns,
                    _getMatrix: nw
                }
            };
            rO.utils.checkPrefix = nt, rO.core.getStyleSaver = r6, a = tk((o = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (s = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(t) {
                rI[t] = 1
            }), tk(s, function(t) {
                R.units[t] = "deg", n_[t] = 1
            }), rV[a[13]] = o + "," + s, tk("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(t) {
                var e = t.split(":");
                rV[e[1]] = a[e[0]]
            }), tk("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
                R.units[t] = "px"
            }), rO.registerPlugin(nM);
            var nR = rO.registerPlugin(nM) || rO;
            nR.core.Tween
        },
        7237: function(t, e, r) {
            var n, i, o, s, a, l, u, c = Object.defineProperty,
                h = Object.defineProperties,
                f = Object.getOwnPropertyDescriptors,
                d = Object.getOwnPropertySymbols,
                p = Object.prototype.hasOwnProperty,
                g = Object.prototype.propertyIsEnumerable,
                m = (t, e, r) => e in t ? c(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : t[e] = r,
                v = (t, e) => {
                    for (var r in e || (e = {})) p.call(e, r) && m(t, r, e[r]);
                    if (d)
                        for (var r of d(e)) g.call(e, r) && m(t, r, e[r]);
                    return t
                },
                _ = (t, e) => h(t, f(e)),
                y = t => c(t, "__esModule", {
                    value: !0
                });
            ((t, e) => {
                for (var r in y(t), e) c(t, r, {
                    get: e[r],
                    enumerable: !0
                })
            })(e, {
                Atom: () => t4,
                PointerProxy: () => eo,
                Ticker: () => en,
                getPointerParts: () => tD,
                isPointer: () => tI,
                isPrism: () => tF,
                iterateAndCountTicks: () => er,
                iterateOver: () => ei,
                pointer: () => tR,
                pointerToPrism: () => et,
                prism: () => t5,
                val: () => ee
            });
            var b = Array.isArray,
                w = "object" == typeof r.g && r.g && r.g.Object === Object && r.g,
                T = "object" == typeof self && self && self.Object === Object && self,
                x = w || T || Function("return this")(),
                S = x.Symbol,
                P = Object.prototype,
                k = P.hasOwnProperty,
                O = P.toString,
                j = S ? S.toStringTag : void 0,
                E = function(t) {
                    var e = k.call(t, j),
                        r = t[j];
                    try {
                        t[j] = void 0;
                        var n = !0
                    } catch (t) {}
                    var i = O.call(t);
                    return n && (e ? t[j] = r : delete t[j]), i
                },
                A = Object.prototype.toString,
                C = S ? S.toStringTag : void 0,
                D = function(t) {
                    return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : C && C in Object(t) ? E(t) : A.call(t)
                },
                M = function(t) {
                    return null != t && "object" == typeof t
                },
                R = function(t) {
                    return "symbol" == typeof t || M(t) && "[object Symbol]" == D(t)
                },
                I = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                z = /^\w*$/,
                L = function(t, e) {
                    if (b(t)) return !1;
                    var r = typeof t;
                    return !!("number" == r || "symbol" == r || "boolean" == r || null == t || R(t)) || z.test(t) || !I.test(t) || null != e && t in Object(e)
                },
                F = function(t) {
                    var e = typeof t;
                    return null != t && ("object" == e || "function" == e)
                },
                N = function(t) {
                    if (!F(t)) return !1;
                    var e = D(t);
                    return "[object Function]" == e || "[object GeneratorFunction]" == e || "[object AsyncFunction]" == e || "[object Proxy]" == e
                },
                B = x["__core-js_shared__"],
                $ = (n = /[^.]+$/.exec(B && B.keys && B.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n : "",
                V = Function.prototype.toString,
                U = function(t) {
                    if (null != t) {
                        try {
                            return V.call(t)
                        } catch (t) {}
                        try {
                            return t + ""
                        } catch (t) {}
                    }
                    return ""
                },
                q = /^\[object .+?Constructor\]$/,
                W = Object.prototype,
                H = Function.prototype.toString,
                Y = W.hasOwnProperty,
                X = RegExp("^" + H.call(Y).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                G = function(t, e) {
                    var r, n = null == t ? void 0 : t[e];
                    return F(r = n) && (!$ || !($ in r)) && (N(r) ? X : q).test(U(r)) ? n : void 0
                },
                K = G(Object, "create"),
                Z = Object.prototype.hasOwnProperty,
                J = Object.prototype.hasOwnProperty;

            function Q(t) {
                var e = -1,
                    r = null == t ? 0 : t.length;
                for (this.clear(); ++e < r;) {
                    var n = t[e];
                    this.set(n[0], n[1])
                }
            }
            Q.prototype.clear = function() {
                this.__data__ = K ? K(null) : {}, this.size = 0
            }, Q.prototype.delete = function(t) {
                var e = this.has(t) && delete this.__data__[t];
                return this.size -= e ? 1 : 0, e
            }, Q.prototype.get = function(t) {
                var e = this.__data__;
                if (K) {
                    var r = e[t];
                    return "__lodash_hash_undefined__" === r ? void 0 : r
                }
                return Z.call(e, t) ? e[t] : void 0
            }, Q.prototype.has = function(t) {
                var e = this.__data__;
                return K ? void 0 !== e[t] : J.call(e, t)
            }, Q.prototype.set = function(t, e) {
                var r = this.__data__;
                return this.size += this.has(t) ? 0 : 1, r[t] = K && void 0 === e ? "__lodash_hash_undefined__" : e, this
            };
            var tt = function(t, e) {
                    for (var r, n = t.length; n--;)
                        if ((r = t[n][0]) === e || r != r && e != e) return n;
                    return -1
                },
                te = Array.prototype.splice;

            function tr(t) {
                var e = -1,
                    r = null == t ? 0 : t.length;
                for (this.clear(); ++e < r;) {
                    var n = t[e];
                    this.set(n[0], n[1])
                }
            }
            tr.prototype.clear = function() {
                this.__data__ = [], this.size = 0
            }, tr.prototype.delete = function(t) {
                var e = this.__data__,
                    r = tt(e, t);
                return !(r < 0) && (r == e.length - 1 ? e.pop() : te.call(e, r, 1), --this.size, !0)
            }, tr.prototype.get = function(t) {
                var e = this.__data__,
                    r = tt(e, t);
                return r < 0 ? void 0 : e[r][1]
            }, tr.prototype.has = function(t) {
                return tt(this.__data__, t) > -1
            }, tr.prototype.set = function(t, e) {
                var r = this.__data__,
                    n = tt(r, t);
                return n < 0 ? (++this.size, r.push([t, e])) : r[n][1] = e, this
            };
            var tn = G(x, "Map"),
                ti = function(t) {
                    var e = typeof t;
                    return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
                },
                to = function(t, e) {
                    var r = t.__data__;
                    return ti(e) ? r["string" == typeof e ? "string" : "hash"] : r.map
                };

            function ts(t) {
                var e = -1,
                    r = null == t ? 0 : t.length;
                for (this.clear(); ++e < r;) {
                    var n = t[e];
                    this.set(n[0], n[1])
                }
            }

            function ta(t, e) {
                if ("function" != typeof t || null != e && "function" != typeof e) throw TypeError("Expected a function");
                var r = function() {
                    var n = arguments,
                        i = e ? e.apply(this, n) : n[0],
                        o = r.cache;
                    if (o.has(i)) return o.get(i);
                    var s = t.apply(this, n);
                    return r.cache = o.set(i, s) || o, s
                };
                return r.cache = new(ta.Cache || ts), r
            }
            ts.prototype.clear = function() {
                this.size = 0, this.__data__ = {
                    hash: new Q,
                    map: new(tn || tr),
                    string: new Q
                }
            }, ts.prototype.delete = function(t) {
                var e = to(this, t).delete(t);
                return this.size -= e ? 1 : 0, e
            }, ts.prototype.get = function(t) {
                return to(this, t).get(t)
            }, ts.prototype.has = function(t) {
                return to(this, t).has(t)
            }, ts.prototype.set = function(t, e) {
                var r = to(this, t),
                    n = r.size;
                return r.set(t, e), this.size += r.size == n ? 0 : 1, this
            }, ta.Cache = ts;
            var tl = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                tu = /\\(\\)?/g,
                tc = (o = (i = ta(function(t) {
                    var e = [];
                    return 46 === t.charCodeAt(0) && e.push(""), t.replace(tl, function(t, r, n, i) {
                        e.push(n ? i.replace(tu, "$1") : r || t)
                    }), e
                }, function(t) {
                    return 500 === o.size && o.clear(), t
                })).cache, i),
                th = function(t, e) {
                    for (var r = -1, n = null == t ? 0 : t.length, i = Array(n); ++r < n;) i[r] = e(t[r], r, t);
                    return i
                },
                tf = 1 / 0,
                td = S ? S.prototype : void 0,
                tp = td ? td.toString : void 0,
                tg = function t(e) {
                    if ("string" == typeof e) return e;
                    if (b(e)) return th(e, t) + "";
                    if (R(e)) return tp ? tp.call(e) : "";
                    var r = e + "";
                    return "0" == r && 1 / e == -tf ? "-0" : r
                },
                tm = 1 / 0,
                tv = function(t) {
                    if ("string" == typeof t || R(t)) return t;
                    var e = t + "";
                    return "0" == e && 1 / t == -tm ? "-0" : e
                },
                t_ = function(t, e) {
                    var r, n;
                    r = e, n = t, e = b(r) ? r : L(r, n) ? [r] : tc(null == r ? "" : tg(r));
                    for (var i = 0, o = e.length; null != t && i < o;) t = t[tv(e[i++])];
                    return i && i == o ? t : void 0
                },
                ty = function(t, e, r) {
                    var n = null == t ? void 0 : t_(t, e);
                    return void 0 === n ? r : n
                },
                tb = (s = Object.getPrototypeOf, a = Object, function(t) {
                    return s(a(t))
                }),
                tw = Object.prototype,
                tT = Function.prototype.toString,
                tx = tw.hasOwnProperty,
                tS = tT.call(Object),
                tP = function(t) {
                    if (!M(t) || "[object Object]" != D(t)) return !1;
                    var e = tb(t);
                    if (null === e) return !0;
                    var r = tx.call(e, "constructor") && e.constructor;
                    return "function" == typeof r && r instanceof r && tT.call(r) == tS
                },
                tk = function(t) {
                    var e = null == t ? 0 : t.length;
                    return e ? t[e - 1] : void 0
                },
                tO = new WeakMap,
                tj = new WeakMap,
                tE = Symbol("pointerMeta"),
                tA = {
                    get(t, e) {
                        if (e === tE) return tO.get(t);
                        let r = tj.get(t);
                        r || (r = new Map, tj.set(t, r));
                        let n = r.get(e);
                        if (void 0 !== n) return n;
                        let i = tO.get(t),
                            o = tM({
                                root: i.root,
                                path: [...i.path, e]
                            });
                        return r.set(e, o), o
                    }
                },
                tC = t => {
                    let e = t[tE];
                    return e
                },
                tD = t => {
                    let {
                        root: e,
                        path: r
                    } = tC(t);
                    return {
                        root: e,
                        path: r
                    }
                };

            function tM(t) {
                var e;
                let r = {
                        root: t.root,
                        path: null != (e = t.path) ? e : []
                    },
                    n = {};
                return tO.set(n, r), new Proxy(n, tA)
            }
            var tR = tM,
                tI = t => t && !!tC(t),
                tz = (t, e, r) => {
                    if (0 === e.length) return r(t);
                    if (Array.isArray(t)) {
                        let [n, ...i] = e;
                        isNaN(n = parseInt(String(n), 10)) && (n = 0);
                        let o = t[n],
                            s = tz(o, i, r);
                        if (o === s) return t;
                        let a = [...t];
                        return a.splice(n, 1, s), a
                    }
                    if ("object" == typeof t && null !== t) {
                        let [n, ...i] = e, o = t[n], s = tz(o, i, r);
                        if (o === s) return t;
                        let a = _(v({}, t), {
                            [n]: s
                        });
                        return a
                    } {
                        let [t, ...n] = e;
                        return {
                            [t]: tz(void 0, n, r)
                        }
                    }
                },
                tL = class {
                    constructor() {
                        this._head = void 0
                    }
                    peek() {
                        return this._head && this._head.data
                    }
                    pop() {
                        let t = this._head;
                        if (t) return this._head = t.next, t.data
                    }
                    push(t) {
                        let e = {
                            next: this._head,
                            data: t
                        };
                        this._head = e
                    }
                };

            function tF(t) {
                return !!(t && t.isPrism && !0 === t.isPrism)
            }

            function tN() {
                let t = new tL,
                    e = () => {};
                return {
                    type: "Dataverse_discoveryMechanism",
                    startIgnoringDependencies: () => {
                        t.push(e)
                    },
                    stopIgnoringDependencies: () => {
                        t.peek() !== e || t.pop()
                    },
                    reportResolutionStart: r => {
                        let n = t.peek();
                        n && n(r), t.push(e)
                    },
                    reportResolutionEnd: e => {
                        t.pop()
                    },
                    pushCollector: e => {
                        t.push(e)
                    },
                    popCollector: e => {
                        let r = t.peek();
                        if (r !== e) throw Error("Popped collector is not on top of the stack");
                        t.pop()
                    }
                }
            }
            var {
                startIgnoringDependencies: tB,
                stopIgnoringDependencies: t$,
                reportResolutionEnd: tV,
                reportResolutionStart: tU,
                pushCollector: tq,
                popCollector: tW
            } = function() {
                let t = "__dataverse_discoveryMechanism_sharedStack",
                    e = "undefined" != typeof window ? window : void 0 !== r.g ? r.g : {};
                if (!e) return tN(); {
                    let r = e[t];
                    if (r && "object" == typeof r && "Dataverse_discoveryMechanism" === r.type) return r; {
                        let r = tN();
                        return e[t] = r, r
                    }
                }
            }(), tH = () => {}, tY = class {
                constructor(t, e) {
                    for (let r of (this._fn = t, this._prismInstance = e, this._didMarkDependentsAsStale = !1, this._isFresh = !1, this._cacheOfDendencyValues = new Map, this._dependents = new Set, this._dependencies = new Set, this._possiblyStaleDeps = new Set, this._scope = new tK(this), this._lastValue = void 0, this._forciblySetToStale = !1, this._reactToDependencyGoingStale = t => {
                            this._possiblyStaleDeps.add(t), this._markAsStale()
                        }, this._dependencies)) r._addDependent(this._reactToDependencyGoingStale);
                    tB(), this.getValue(), t$()
                }
                get hasDependents() {
                    return this._dependents.size > 0
                }
                removeDependent(t) {
                    this._dependents.delete(t)
                }
                addDependent(t) {
                    this._dependents.add(t)
                }
                destroy() {
                    for (let t of this._dependencies) t._removeDependent(this._reactToDependencyGoingStale);
                    ! function t(e) {
                        for (let r of Object.values(e.subs)) t(r);
                        e.cleanupEffects()
                    }(this._scope)
                }
                getValue() {
                    if (!this._isFresh) {
                        let t = this._recalculate();
                        this._lastValue = t, this._isFresh = !0, this._didMarkDependentsAsStale = !1, this._forciblySetToStale = !1
                    }
                    return this._lastValue
                }
                _recalculate() {
                    let t;
                    if (!this._forciblySetToStale && this._possiblyStaleDeps.size > 0) {
                        let t = !1;
                        for (let e of (tB(), this._possiblyStaleDeps))
                            if (this._cacheOfDendencyValues.get(e) !== e.getValue()) {
                                t = !0;
                                break
                            }
                        if (t$(), this._possiblyStaleDeps.clear(), !t) return this._lastValue
                    }
                    let e = new Set;
                    this._cacheOfDendencyValues.clear();
                    let r = t => {
                        e.add(t), this._addDependency(t)
                    };
                    tq(r), tJ.push(this._scope);
                    try {
                        t = this._fn()
                    } catch (t) {
                        console.error(t)
                    } finally {
                        let t = tJ.pop();
                        t !== this._scope && console.warn("The Prism hook stack has slipped. This is a bug.")
                    }
                    for (let t of (tW(r), this._dependencies)) e.has(t) || this._removeDependency(t);
                    for (let t of (this._dependencies = e, tB(), e)) this._cacheOfDendencyValues.set(t, t.getValue());
                    return t$(), t
                }
                forceStale() {
                    this._forciblySetToStale = !0, this._markAsStale()
                }
                _markAsStale() {
                    if (!this._didMarkDependentsAsStale)
                        for (let t of (this._didMarkDependentsAsStale = !0, this._isFresh = !1, this._dependents)) t(this._prismInstance)
                }
                _addDependency(t) {
                    this._dependencies.has(t) || (this._dependencies.add(t), t._addDependent(this._reactToDependencyGoingStale))
                }
                _removeDependency(t) {
                    this._dependencies.has(t) && (this._dependencies.delete(t), t._removeDependent(this._reactToDependencyGoingStale))
                }
            }, tX = {}, tG = class {
                constructor(t) {
                    this._fn = t, this.isPrism = !0, this._state = {
                        hot: !1,
                        handle: void 0
                    }
                }
                get isHot() {
                    return this._state.hot
                }
                onChange(t, e, r = !1) {
                    let n = () => {
                            t.onThisOrNextTick(o)
                        },
                        i = tX,
                        o = () => {
                            let t = this.getValue();
                            t !== i && (i = t, e(t))
                        };
                    return this._addDependent(n), r && e(i = this.getValue()), () => {
                        this._removeDependent(n), t.offThisOrNextTick(o), t.offNextTick(o)
                    }
                }
                onStale(t) {
                    let e = () => t();
                    return this._addDependent(e), () => {
                        this._removeDependent(e)
                    }
                }
                keepHot() {
                    return this.onStale(() => {})
                }
                _addDependent(t) {
                    this._state.hot || this._goHot(), this._state.handle.addDependent(t)
                }
                _goHot() {
                    let t = new tY(this._fn, this);
                    this._state = {
                        hot: !0,
                        handle: t
                    }
                }
                _removeDependent(t) {
                    let e = this._state;
                    if (!e.hot) return;
                    let r = e.handle;
                    r.removeDependent(t), r.hasDependents || (this._state = {
                        hot: !1,
                        handle: void 0
                    }, r.destroy())
                }
                getValue() {
                    let t;
                    tU(this);
                    let e = this._state;
                    return t = e.hot ? e.handle.getValue() : function(t) {
                        let e;
                        let r = new t2;
                        tJ.push(r);
                        try {
                            e = t()
                        } catch (t) {
                            console.error(t)
                        } finally {
                            let t = tJ.pop();
                            t !== r && console.warn("The Prism hook stack has slipped. This is a bug.")
                        }
                        return e
                    }(this._fn), tV(this), t
                }
            }, tK = class {
                constructor(t) {
                    this._hotHandle = t, this._refs = new Map, this.isPrismScope = !0, this.subs = {}, this.effects = new Map, this.memos = new Map
                }
                ref(t, e) {
                    let r = this._refs.get(t);
                    if (void 0 !== r) return r; {
                        let r = {
                            current: e
                        };
                        return this._refs.set(t, r), r
                    }
                }
                effect(t, e, r) {
                    let n = this.effects.get(t);
                    void 0 === n && (n = {
                        cleanup: tH,
                        deps: void 0
                    }, this.effects.set(t, n)), tQ(n.deps, r) && (n.cleanup(), tB(), n.cleanup = tZ(e, tH).value, t$(), n.deps = r)
                }
                memo(t, e, r) {
                    let n = this.memos.get(t);
                    return void 0 === n && (n = {
                        cachedValue: null,
                        deps: void 0
                    }, this.memos.set(t, n)), tQ(n.deps, r) && (tB(), n.cachedValue = tZ(e, void 0).value, t$(), n.deps = r), n.cachedValue
                }
                state(t, e) {
                    let {
                        value: r,
                        setValue: n
                    } = this.memo("state/" + t, () => {
                        let t = {
                            current: e
                        };
                        return {
                            value: t,
                            setValue: e => {
                                t.current = e, this._hotHandle.forceStale()
                            }
                        }
                    }, []);
                    return [r.current, n]
                }
                sub(t) {
                    return this.subs[t] || (this.subs[t] = new tK(this._hotHandle)), this.subs[t]
                }
                cleanupEffects() {
                    for (let t of this.effects.values()) tZ(t.cleanup, void 0);
                    this.effects.clear()
                }
                source(t, e) {
                    return this.effect("$$source/blah", () => {
                        let e = t(() => {
                            this._hotHandle.forceStale()
                        });
                        return e
                    }, [t]), e()
                }
            };

            function tZ(t, e) {
                try {
                    return {
                        value: t(),
                        ok: !0
                    }
                } catch (t) {
                    return setTimeout(function() {
                        throw t
                    }), {
                        value: e,
                        ok: !1
                    }
                }
            }
            var tJ = new tL;

            function tQ(t, e) {
                if (void 0 === t || void 0 === e) return !0;
                let r = t.length;
                if (r !== e.length) return !0;
                for (let n = 0; n < r; n++)
                    if (t[n] !== e[n]) return !0;
                return !1
            }

            function t0(t, e, r) {
                let n = tJ.peek();
                if (!n) throw Error("prism.memo() is called outside of a prism() call.");
                return n.memo(t, e, r)
            }
            var t1 = t => new tG(t),
                t2 = class {
                    effect(t, e, r) {
                        console.warn("prism.effect() does not run in cold prisms")
                    }
                    memo(t, e, r) {
                        return e()
                    }
                    state(t, e) {
                        return [e, () => {}]
                    }
                    ref(t, e) {
                        return {
                            current: e
                        }
                    }
                    sub(t) {
                        return new t2
                    }
                    source(t, e) {
                        return e()
                    }
                };
            t1.ref = function(t, e) {
                let r = tJ.peek();
                if (!r) throw Error("prism.ref() is called outside of a prism() call.");
                return r.ref(t, e)
            }, t1.effect = function(t, e, r) {
                let n = tJ.peek();
                if (!n) throw Error("prism.effect() is called outside of a prism() call.");
                return n.effect(t, e, r)
            }, t1.memo = t0, t1.ensurePrism = function() {
                let t = tJ.peek();
                if (!t) throw Error("The parent function is called outside of a prism() call.")
            }, t1.state = function(t, e) {
                let r = tJ.peek();
                if (!r) throw Error("prism.state() is called outside of a prism() call.");
                return r.state(t, e)
            }, t1.scope = function(t, e) {
                let r = tJ.peek();
                if (!r) throw Error("prism.scope() is called outside of a prism() call.");
                let n = r.sub(t);
                tJ.push(n);
                let i = tZ(e, void 0).value;
                return tJ.pop(), i
            }, t1.sub = function(t, e, r) {
                return t0(t, () => t1(e), r).getValue()
            }, t1.inPrism = function() {
                return !!tJ.peek()
            }, t1.source = function(t, e) {
                let r = tJ.peek();
                if (!r) throw Error("prism.source() is called outside of a prism() call.");
                return r.source(t, e)
            };
            var t5 = t1;
            (l = u || (u = {}))[l.Dict = 0] = "Dict", l[l.Array = 1] = "Array", l[l.Other = 2] = "Other";
            var t3 = t => Array.isArray(t) ? 1 : tP(t) ? 0 : 2,
                t8 = (t, e, r = t3(t)) => 0 === r && "string" == typeof e ? t[e] : 1 === r && t6(e) ? t[e] : void 0,
                t6 = t => {
                    let e = "number" == typeof t ? t : parseInt(t, 10);
                    return !isNaN(e) && e >= 0 && e < 1 / 0 && (0 | e) === e
                },
                t7 = class {
                    constructor(t, e) {
                        this._parent = t, this._path = e, this.children = new Map, this.identityChangeListeners = new Set
                    }
                    addIdentityChangeListener(t) {
                        this.identityChangeListeners.add(t)
                    }
                    removeIdentityChangeListener(t) {
                        this.identityChangeListeners.delete(t), this._checkForGC()
                    }
                    removeChild(t) {
                        this.children.delete(t), this._checkForGC()
                    }
                    getChild(t) {
                        return this.children.get(t)
                    }
                    getOrCreateChild(t) {
                        let e = this.children.get(t);
                        return e || (e = e = new t7(this, this._path.concat([t])), this.children.set(t, e)), e
                    }
                    _checkForGC() {
                        this.identityChangeListeners.size > 0 || this.children.size > 0 || !this._parent || this._parent.removeChild(tk(this._path))
                    }
                },
                t4 = class {
                    constructor(t) {
                        this.$$isPointerToPrismProvider = !0, this.pointer = tR({
                            root: this,
                            path: []
                        }), this.prism = this.pointerToPrism(this.pointer), this._onPointerValueChange = (t, e) => {
                            let {
                                path: r
                            } = tD(t), n = this._getOrCreateScopeForPath(r);
                            return n.identityChangeListeners.add(e), () => {
                                n.identityChangeListeners.delete(e)
                            }
                        }, this._currentState = t, this._rootScope = new t7(void 0, [])
                    }
                    set(t) {
                        let e = this._currentState;
                        this._currentState = t, this._checkUpdates(this._rootScope, e, t)
                    }
                    get() {
                        return this._currentState
                    }
                    getByPointer(t) {
                        let e = tI(t) ? t : t(this.pointer),
                            r = tD(e).path;
                        return this._getIn(r)
                    }
                    _getIn(t) {
                        return 0 === t.length ? this.get() : ty(this.get(), t)
                    }
                    reduce(t) {
                        this.set(t(this.get()))
                    }
                    reduceByPointer(t, e) {
                        var r;
                        let n = tI(t) ? t : t(this.pointer),
                            i = tD(n).path,
                            o = (r = this.get(), 0 === i.length ? e(r) : tz(r, i, e));
                        this.set(o)
                    }
                    setByPointer(t, e) {
                        this.reduceByPointer(t, () => e)
                    }
                    _checkUpdates(t, e, r) {
                        if (e === r) return;
                        for (let e of t.identityChangeListeners) e(r);
                        if (0 === t.children.size) return;
                        let n = t3(e),
                            i = t3(r);
                        if (2 !== n || n !== i)
                            for (let [o, s] of t.children) {
                                let t = t8(e, o, n),
                                    a = t8(r, o, i);
                                this._checkUpdates(s, t, a)
                            }
                    }
                    _getOrCreateScopeForPath(t) {
                        let e = this._rootScope;
                        for (let r of t) e = e.getOrCreateChild(r);
                        return e
                    }
                    pointerToPrism(t) {
                        let {
                            path: e
                        } = tD(t), r = e => this._onPointerValueChange(t, e), n = () => this._getIn(e);
                        return t5(() => t5.source(r, n))
                    }
                },
                t9 = new WeakMap,
                et = t => {
                    let e = tC(t),
                        r = t9.get(e);
                    if (!r) {
                        let n = e.root;
                        if (!("object" == typeof n && null !== n && !0 === n.$$isPointerToPrismProvider)) throw Error("Cannot run pointerToPrism() on a pointer whose root is not an PointerToPrismProvider");
                        r = n.pointerToPrism(t), t9.set(e, r)
                    }
                    return r
                },
                ee = t => tI(t) ? et(t).getValue() : tF(t) ? t.getValue() : t;

            function* er(t) {
                let e;
                if (tI(t)) e = et(t);
                else if (tF(t)) e = t;
                else throw Error("Only pointers and prisms are supported");
                let r = 0,
                    n = e.onStale(() => {
                        r++
                    });
                try {
                    for (;;) {
                        let t = r;
                        r = 0, yield {
                            value: e.getValue(),
                            ticks: t
                        }
                    }
                } finally {
                    n()
                }
            }
            var en = class {
                constructor(t) {
                    this._conf = t, this._ticking = !1, this._dormant = !0, this._numberOfDormantTicks = 0, this.__ticks = 0, this._scheduledForThisOrNextTick = new Set, this._scheduledForNextTick = new Set, this._timeAtCurrentTick = 0
                }
                get dormant() {
                    return this._dormant
                }
                onThisOrNextTick(t) {
                    this._scheduledForThisOrNextTick.add(t), this._dormant && this._goActive()
                }
                onNextTick(t) {
                    this._scheduledForNextTick.add(t), this._dormant && this._goActive()
                }
                offThisOrNextTick(t) {
                    this._scheduledForThisOrNextTick.delete(t)
                }
                offNextTick(t) {
                    this._scheduledForNextTick.delete(t)
                }
                get time() {
                    return this._ticking ? this._timeAtCurrentTick : performance.now()
                }
                _goActive() {
                    var t, e;
                    this._dormant && (this._dormant = !1, null == (e = null == (t = this._conf) ? void 0 : t.onActive) || e.call(t))
                }
                _goDormant() {
                    var t, e;
                    this._dormant || (this._dormant = !0, this._numberOfDormantTicks = 0, null == (e = null == (t = this._conf) ? void 0 : t.onDormant) || e.call(t))
                }
                tick(t = performance.now()) {
                    if (this.__ticks++, !this._dormant && 0 === this._scheduledForNextTick.size && 0 === this._scheduledForThisOrNextTick.size && (this._numberOfDormantTicks++, this._numberOfDormantTicks >= 180)) {
                        this._goDormant();
                        return
                    }
                    for (let e of (this._ticking = !0, this._timeAtCurrentTick = t, this._scheduledForNextTick)) this._scheduledForThisOrNextTick.add(e);
                    this._scheduledForNextTick.clear(), this._tick(0), this._ticking = !1
                }
                _tick(t) {
                    let e = this.time;
                    if (t > 10 && console.warn("_tick() recursing for 10 times"), t > 100) throw Error("Maximum recursion limit for _tick()");
                    let r = this._scheduledForThisOrNextTick;
                    for (let t of (this._scheduledForThisOrNextTick = new Set, r)) t(e);
                    if (this._scheduledForThisOrNextTick.size > 0) return this._tick(t + 1)
                }
            };

            function* ei(t) {
                let e;
                if (tI(t)) e = et(t);
                else if (tF(t)) e = t;
                else throw Error("Only pointers and prisms are supported");
                let r = new en,
                    n = e.onChange(r, t => {});
                try {
                    for (;;) r.tick(), yield e.getValue()
                } finally {
                    n()
                }
            }
            var eo = class {
                constructor(t) {
                    this.$$isPointerToPrismProvider = !0, this._currentPointerBox = new t4(t), this.pointer = tR({
                        root: this,
                        path: []
                    })
                }
                setPointer(t) {
                    this._currentPointerBox.set(t)
                }
                pointerToPrism(t) {
                    let {
                        path: e
                    } = tC(t);
                    return t5(() => {
                        let t = this._currentPointerBox.prism.getValue(),
                            r = e.reduce((t, e) => t[e], t);
                        return ee(r)
                    })
                }
            }
        },
        5924: function(t, e, r) {
            "use strict";
            e.Z = function() {
                for (var t, e, r = 0, n = ""; r < arguments.length;)(t = arguments[r++]) && (e = function t(e) {
                    var r, n, i = "";
                    if ("string" == typeof e || "number" == typeof e) i += e;
                    else if ("object" == typeof e) {
                        if (Array.isArray(e))
                            for (r = 0; r < e.length; r++) e[r] && (n = t(e[r])) && (i && (i += " "), i += n);
                        else
                            for (r in e) e[r] && (i && (i += " "), i += r)
                    }
                    return i
                }(t)) && (n && (n += " "), n += e);
                return n
            }
        },
        4667: function(t, e, r) {
            "use strict";
            var n, i;
            t.exports = (null == (n = r.g.process) ? void 0 : n.env) && "object" == typeof(null == (i = r.g.process) ? void 0 : i.env) ? r.g.process : r(7139)
        },
        7778: function(t, e, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
                return r(3378)
            }])
        },
        6930: function(t, e, r) {
            "use strict";
            r.d(e, {
                F: function() {
                    return c
                },
                Q: function() {
                    return u
                }
            });
            var n = r(1527),
                i = r(6734),
                o = r(9176),
                s = r(2717),
                a = r(959);
            let l = (0, a.createContext)({});

            function u(t) {
                let {
                    children: e
                } = t, [r, u] = (0, a.useState)("#A29042"), [c, h] = (0, a.useState)(1.5), f = (0, o.st)();
                return (0, s.w)(f, "theme", {
                    color: i.types.rgba({
                        r: 245 / 255,
                        g: 214 / 255,
                        b: 78 / 255,
                        a: 1
                    }),
                    lineWidth: i.types.number(2, {
                        range: [0, 10],
                        nudgeMultiplier: .01
                    })
                }, t => {
                    let {
                        color: e,
                        lineWidth: r
                    } = t;
                    u(e.toString()), h(r)
                }), (0, n.jsx)(l.Provider, {
                    value: {
                        color: r,
                        lineWidth: c
                    },
                    children: e
                })
            }

            function c() {
                return (0, a.useContext)(l)
            }
        },
        5823: function(t, e, r) {
            "use strict";
            r.d(e, {
                j: function() {
                    return i
                }
            });
            var n = r(959);

            function i(t) {
                let [e] = (0, n.useState)("function" == typeof t ? t() : t);
                return e
            }
        },
        6257: function(t, e, r) {
            "use strict";
            r.d(e, {
                o: function() {
                    return i
                }
            });
            var n = r(8063);
            let i = (0, n.Ue)(t => ({
                navIsOpened: !1,
                setNavIsOpened: e => t({
                    navIsOpened: e
                }),
                triggerTransition: !1,
                setTriggerTransition: e => t({
                    triggerTransition: e
                }),
                overlay: !1,
                setOverlay: e => t({
                    overlay: e
                }),
                headerHeight: 0,
                setHeaderHeight: e => t({
                    headerHeight: e
                }),
                loader: !0,
                setLoader: e => t({
                    loader: e
                }),
                missionStart: 0,
                setMissionStart: e => t({
                    missionStart: e
                })
            }))
        },
        2717: function(t, e, r) {
            "use strict";
            r.d(e, {
                l: function() {
                    return o
                },
                w: function() {
                    return s
                }
            });
            var n = r(959),
                i = r(9176);

            function o(t, e, r) {
                let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
                    o = (0, n.useMemo)(() => null == t ? void 0 : t.object(e, r, {
                        reconfigure: !0
                    }), [t, e, ...i]);
                return o
            }

            function s(t, e, r, s) {
                let a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [],
                    l = o(t, e, r, a),
                    u = (0, i.bV)(),
                    c = (0, n.useRef)({}),
                    h = (0, n.useCallback)(t => {
                        c.current = t
                    }, []),
                    f = (0, n.useCallback)(() => c.current, []);
                return (0, n.useEffect)(() => {
                    if (l) {
                        let t = l.onValuesChange(t => {
                            h(t), null == s || s(t)
                        }, u);
                        return t
                    }
                }, [l, u, ...a]), [f, l]
            }
        },
        9176: function(t, e, r) {
            "use strict";
            r.d(e, {
                Mi: function() {
                    return g
                },
                bV: function() {
                    return c
                },
                dg: function() {
                    return d
                },
                jI: function() {
                    return f
                },
                rg: function() {
                    return u
                },
                st: function() {
                    return v
                },
                yR: function() {
                    return m
                }
            });
            var n = r(1527),
                i = r(654),
                o = r(6734),
                s = r(5823),
                a = r(959);
            let l = (0, a.createContext)();

            function u(t) {
                let {
                    children: e,
                    id: r = "default"
                } = t, a = (0, s.j)((0, o.createRafDriver)({
                    name: r
                }));
                return (0, i.xQ)(t => {
                    a.tick(t)
                }), (0, n.jsx)(l.Provider, {
                    value: a,
                    children: e
                })
            }

            function c() {
                return (0, a.useContext)(l)
            }
            let h = (0, a.createContext)();

            function f(t) {
                let {
                    children: e,
                    id: r,
                    config: s
                } = t, l = (0, i.ac)("(min-width: 800px)"), [u, c] = (0, a.useState)(), f = (0, a.useRef)(!1);
                return (0, a.useEffect)(() => {
                    s && l && !f.current && (f.current = !0, fetch(s).then(t => t.json()).then(t => {
                        let e = (0, o.getProject)(r, {
                            state: t
                        });
                        e.ready.then(() => {
                            c(e)
                        })
                    }))
                }, [s, r, l]), (0, n.jsx)(h.Provider, {
                    value: u,
                    children: e
                })
            }

            function d() {
                return (0, a.useContext)(h)
            }
            let p = (0, a.createContext)();

            function g(t, e) {
                let r = d(),
                    n = (0, a.useMemo)(() => null == r ? void 0 : r.sheet(t, e), [r, t, e]);
                return n
            }
            let m = (0, a.forwardRef)(function(t, e) {
                let {
                    children: r,
                    id: i,
                    instance: o
                } = t, s = g(i, o);
                return (0, a.useImperativeHandle)(e, () => s, [s]), (0, n.jsx)(p.Provider, {
                    value: s,
                    children: r
                })
            });

            function v() {
                return (0, a.useContext)(p)
            }
        },
        3745: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                function(t, e) {
                    for (var r in e) Object.defineProperty(t, r, {
                        enumerable: !0,
                        get: e[r]
                    })
                }(e, {
                    noSSR: function() {
                        return s
                    },
                    default: function() {
                        return a
                    }
                });
            let n = r(8266),
                i = (r(959), n._(r(4231)));

            function o(t) {
                return {
                    default: (null == t ? void 0 : t.default) || t
                }
            }

            function s(t, e) {
                return delete e.webpack, delete e.modules, t(e)
            }

            function a(t, e) {
                let r = i.default,
                    n = {
                        loading: t => {
                            let {
                                error: e,
                                isLoading: r,
                                pastDelay: n
                            } = t;
                            return null
                        }
                    };
                t instanceof Promise ? n.loader = () => t : "function" == typeof t ? n.loader = t : "object" == typeof t && (n = { ...n,
                    ...t
                }), n = { ...n,
                    ...e
                };
                let a = n.loader;
                return (n.loadableGenerated && (n = { ...n,
                    ...n.loadableGenerated
                }, delete n.loadableGenerated), "boolean" != typeof n.ssr || n.ssr) ? r({ ...n,
                    loader: () => null != a ? a().then(o) : Promise.resolve(o(() => null))
                }) : (delete n.webpack, delete n.modules, s(r, n))
            }("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
                value: !0
            }), Object.assign(e.default, e), t.exports = e.default)
        },
        1240: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "LoadableContext", {
                enumerable: !0,
                get: function() {
                    return o
                }
            });
            let n = r(8266),
                i = n._(r(959)),
                o = i.default.createContext(null)
        },
        4231: function(t, e, r) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "default", {
                enumerable: !0,
                get: function() {
                    return d
                }
            });
            let n = r(8266),
                i = n._(r(959)),
                o = r(1240),
                s = [],
                a = [],
                l = !1;

            function u(t) {
                let e = t(),
                    r = {
                        loading: !0,
                        loaded: null,
                        error: null
                    };
                return r.promise = e.then(t => (r.loading = !1, r.loaded = t, t)).catch(t => {
                    throw r.loading = !1, r.error = t, t
                }), r
            }
            class c {
                promise() {
                    return this._res.promise
                }
                retry() {
                    this._clearTimeouts(), this._res = this._loadFn(this._opts.loader), this._state = {
                        pastDelay: !1,
                        timedOut: !1
                    };
                    let {
                        _res: t,
                        _opts: e
                    } = this;
                    t.loading && ("number" == typeof e.delay && (0 === e.delay ? this._state.pastDelay = !0 : this._delay = setTimeout(() => {
                        this._update({
                            pastDelay: !0
                        })
                    }, e.delay)), "number" == typeof e.timeout && (this._timeout = setTimeout(() => {
                        this._update({
                            timedOut: !0
                        })
                    }, e.timeout))), this._res.promise.then(() => {
                        this._update({}), this._clearTimeouts()
                    }).catch(t => {
                        this._update({}), this._clearTimeouts()
                    }), this._update({})
                }
                _update(t) {
                    this._state = { ...this._state,
                        error: this._res.error,
                        loaded: this._res.loaded,
                        loading: this._res.loading,
                        ...t
                    }, this._callbacks.forEach(t => t())
                }
                _clearTimeouts() {
                    clearTimeout(this._delay), clearTimeout(this._timeout)
                }
                getCurrentValue() {
                    return this._state
                }
                subscribe(t) {
                    return this._callbacks.add(t), () => {
                        this._callbacks.delete(t)
                    }
                }
                constructor(t, e) {
                    this._loadFn = t, this._opts = e, this._callbacks = new Set, this._delay = null, this._timeout = null, this.retry()
                }
            }

            function h(t) {
                return function(t, e) {
                    let r = Object.assign({
                            loader: null,
                            loading: null,
                            delay: 200,
                            timeout: null,
                            webpack: null,
                            modules: null
                        }, e),
                        n = null;

                    function s() {
                        if (!n) {
                            let e = new c(t, r);
                            n = {
                                getCurrentValue: e.getCurrentValue.bind(e),
                                subscribe: e.subscribe.bind(e),
                                retry: e.retry.bind(e),
                                promise: e.promise.bind(e)
                            }
                        }
                        return n.promise()
                    }
                    if (!l) {
                        let t = r.webpack ? r.webpack() : r.modules;
                        t && a.push(e => {
                            for (let r of t)
                                if (e.includes(r)) return s()
                        })
                    }

                    function u(t, e) {
                        ! function() {
                            s();
                            let t = i.default.useContext(o.LoadableContext);
                            t && Array.isArray(r.modules) && r.modules.forEach(e => {
                                t(e)
                            })
                        }();
                        let a = i.default.useSyncExternalStore(n.subscribe, n.getCurrentValue, n.getCurrentValue);
                        return i.default.useImperativeHandle(e, () => ({
                            retry: n.retry
                        }), []), i.default.useMemo(() => {
                            var e;
                            return a.loading || a.error ? i.default.createElement(r.loading, {
                                isLoading: a.loading,
                                pastDelay: a.pastDelay,
                                timedOut: a.timedOut,
                                error: a.error,
                                retry: n.retry
                            }) : a.loaded ? i.default.createElement((e = a.loaded) && e.default ? e.default : e, t) : null
                        }, [t, a])
                    }
                    return u.preload = () => s(), u.displayName = "LoadableComponent", i.default.forwardRef(u)
                }(u, t)
            }

            function f(t, e) {
                let r = [];
                for (; t.length;) {
                    let n = t.pop();
                    r.push(n(e))
                }
                return Promise.all(r).then(() => {
                    if (t.length) return f(t, e)
                })
            }
            h.preloadAll = () => new Promise((t, e) => {
                f(s).then(t, e)
            }), h.preloadReady = t => (void 0 === t && (t = []), new Promise(e => {
                let r = () => (l = !0, e());
                f(a, t).then(r, r)
            })), window.__NEXT_PRELOADREADY = h.preloadReady;
            let d = h
        },
        3378: function(t, e, r) {
            "use strict";
            let n;
            r.r(e), r.d(e, {
                default: function() {
                    return F
                }
            });
            var i = r(1527),
                o = r(8166),
                s = r(654),
                a = r(8824),
                l = r(9758),
                u = r(3100),
                c = r.n(u),
                h = r(9347),
                f = r.n(h);
            let d = c()(() => r.e(6065).then(r.bind(r, 6065)), {
                    loadableGenerated: {
                        webpack: () => [6065]
                    },
                    ssr: !1
                }),
                p = c()(() => r.e(6182).then(r.bind(r, 6182)), {
                    loadableGenerated: {
                        webpack: () => [6182]
                    },
                    ssr: !1
                });

            function g() {
                return (0, i.jsxs)("div", {
                    className: f().barcode,
                    children: [(0, i.jsx)(d, {
                        className: f().top
                    }), (0, i.jsx)(p, {
                        className: f().left
                    }), (0, i.jsx)(p, {
                        className: f().right
                    }), (0, i.jsxs)("div", {
                        className: f().corners,
                        children: [(0, i.jsx)("div", {
                            className: f().corner
                        }), (0, i.jsx)("div", {
                            className: f().corner
                        }), (0, i.jsx)("div", {
                            className: f().corner
                        }), (0, i.jsx)("div", {
                            className: f().corner
                        })]
                    })]
                })
            }
            var m = r(5924),
                v = r(959);
            let _ = (0, v.forwardRef)(function(t, e) {
                let {
                    src: o,
                    className: a,
                    ...l
                } = t, u = (0, v.useRef)(), [c, h] = (0, v.useState)(), [f, d] = (0, s.EL)();
                (0, v.useEffect)(() => {
                    let t = window.devicePixelRatio || 1;
                    u.current.width = d.width * t, u.current.height = d.height * t, u.current.style.width = "".concat(d.width, "px"), u.current.style.height = "".concat(d.height, "px"), c && n && (c.layout = new n.Layout({
                        fit: n.Fit.FitWidth,
                        alignment: n.Alignment.Center
                    }))
                }, [d, c]), (0, v.useImperativeHandle)(e, () => (null == d ? void 0 : d.width) && c, [c, d]);
                let p = () => {
                    let t = new n.Rive({
                        src: o,
                        ...l,
                        canvas: u.current,
                        layout: new n.Layout({
                            fit: n.Fit.FitWidth,
                            alignment: n.Alignment.Center
                        }),
                        onLoad: () => {
                            t.resizeDrawingSurfaceToCanvas(), h(t)
                        }
                    })
                };
                return (0, v.useEffect)(() => {
                    n ? p() : r.e(4348).then(r.t.bind(r, 4348, 23)).then(t => {
                        n = t, p()
                    })
                }, []), (0, i.jsx)("div", {
                    ref: f,
                    className: a,
                    children: (0, i.jsx)("canvas", {
                        ref: u
                    })
                })
            });
            var y = r(2044),
                b = r(6257),
                w = r(8261),
                T = r.n(w);
            let x = c()(() => Promise.all([r.e(1818), r.e(2634)]).then(r.bind(r, 2634)).then(t => {
                let {
                    Progress: e
                } = t;
                return e
            }), {
                loadableGenerated: {
                    webpack: () => [2634]
                },
                ssr: !1
            });

            function S() {
                let t = (0, s.ac)("(min-width: 800px)"),
                    e = (0, b.o)(t => {
                        let {
                            setLoader: e
                        } = t;
                        return e
                    }),
                    r = (0, v.useRef)(),
                    [n, o] = (0, v.useState)(!1),
                    [a, l] = (0, v.useState)(!1),
                    [u, c] = (0, v.useState)();
                return (0, v.useEffect)(() => {
                    t && !n && e(!0)
                }, [t]), (0, v.useEffect)(() => {
                    if (!a || !u) return;
                    let t = {
                        progress: 0
                    };
                    u.play();
                    let e = y.ZP.to(t, {
                        progress: 1,
                        duration: 2,
                        ease: "none",
                        onUpdate: () => {
                            r.current.innerHTML = Math.round(100 * t.progress)
                        }
                    });
                    return () => {
                        e.kill()
                    }
                }, [a, u]), (0, i.jsxs)("div", {
                    className: (0, m.Z)(T().loader, n && T().hidden),
                    children: [!0 === t && (0, i.jsx)(x, {
                        onLoad: () => {
                            setTimeout(() => {
                                l(!0)
                            }, 0)
                        }
                    }), !0 === t && (0, i.jsx)(_, {
                        src: "/noprecache/rive/loader.riv",
                        ref: t => {
                            c(t)
                        },
                        onStop: () => {
                            o(!0), e(!1)
                        },
                        className: T().rive
                    }), (0, i.jsxs)("span", {
                        className: (0, m.Z)(T().progress, "h4"),
                        children: ["[BUILDING ", (0, i.jsx)("span", {
                            ref: r,
                            children: "0"
                        }), "%]"]
                    })]
                })
            }
            let P = () => ((0, v.useEffect)(() => {
                function t() {
                    document.documentElement.style.setProperty("--vh", .01 * window.innerHeight + "px"), document.documentElement.style.setProperty("--dvh", .01 * window.innerHeight + "px"), document.documentElement.style.setProperty("--svh", .01 * document.documentElement.clientHeight + "px"), document.documentElement.style.setProperty("--lvh", "1vh")
                }
                return window.addEventListener("resize", t, !1), t(), () => {
                    window.removeEventListener("resize", t, !1)
                }
            }, []), null);
            var k = r(6930),
                O = r(1291),
                j = r(4667);
            let E = j.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID || "";
            j.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
            var A = r(9176),
                C = r(9869),
                D = r.n(C);
            r(7924);
            let M = c()(() => r.e(7501).then(r.bind(r, 7501)).then(t => {
                    let {
                        GridDebugger: e
                    } = t;
                    return e
                }), {
                    loadableGenerated: {
                        webpack: () => [7501]
                    },
                    ssr: !1
                }),
                R = c()(() => r.e(5724).then(r.bind(r, 5724)).then(t => {
                    let {
                        Stats: e
                    } = t;
                    return e
                }), {
                    loadableGenerated: {
                        webpack: () => [5724]
                    },
                    ssr: !1
                }),
                I = c()(() => Promise.all([r.e(1818), r.e(3434), r.e(9143), r.e(4381), r.e(695), r.e(9806)]).then(r.bind(r, 9806)).then(t => {
                    let {
                        Studio: e
                    } = t;
                    return e
                }), {
                    loadableGenerated: {
                        webpack: () => [9806]
                    },
                    ssr: !1
                }),
                z = c()(() => r.e(6250).then(r.bind(r, 6250)).then(t => {
                    let {
                        GameOfLife: e
                    } = t;
                    return e
                }), {
                    loadableGenerated: {
                        webpack: () => [6250]
                    },
                    ssr: !1
                });

            function L(t) {
                let {
                    Component: e,
                    pageProps: r,
                    config: n
                } = t, o = (0, s.qi)(), l = (0, a.LZ)(), u = (0, b.o)(t => {
                    let {
                        navIsOpened: e
                    } = t;
                    return e
                }), c = (0, b.o)(t => {
                    let {
                        overlay: e
                    } = t;
                    return e
                }), h = (0, b.o)(t => {
                    let {
                        loader: e
                    } = t;
                    return e
                }), f = (0, s.ac)("(min-width: 800px)"), d = (0, s.ac)("(max-width: 800px)");
                return (0, v.useEffect)(() => {
                    o && document.documentElement.classList.add("debug")
                }, [o]), (0, v.useEffect)(() => {
                    if (o) {
                        null == l || l.start();
                        return
                    }
                    u || c || h ? null == l || l.stop() : null == l || l.start()
                }, [l, u, c, h, o]), (0, v.useEffect)(() => {
                    O.ScrollTrigger.refresh()
                }, [l]), (0, a.LZ)(() => {
                    O.ScrollTrigger.update()
                }, [], 1), (0, v.useEffect)(() => {
                    d && b.o.setState({
                        loader: !1
                    })
                }, [d]), (0, v.useEffect)(() => {
                    let t = window.location.hash;
                    l && "" !== t && !h && f && (() => {
                        let e = b.o.getState().headerHeight;
                        l.scrollTo(t, {
                            offset: -(1.2 * e),
                            force: !0,
                            immediate: !0
                        })
                    })()
                }, [l, h, f]), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(D(), {
                            async: !0,
                            strategy: "worker",
                            src: "https://www.googletagmanager.com/gtag/js?id=".concat(E)
                        }), (0, i.jsx)(D(), {
                            id: "gtm-base",
                            strategy: "worker",
                            dangerouslySetInnerHTML: {
                                __html: "window.dataLayer = window.dataLayer || [];\n              function gtag(){dataLayer.push(arguments);}\n              gtag('js', new Date());\n              gtag('config', '".concat(E, "');")
                            }
                        })]
                    }), (0, i.jsx)(P, {}), (0, i.jsx)(A.jI, {
                        id: "Argus Labs",
                        config: n.story.content.theatre.filename,
                        children: (0, i.jsx)(A.yR, {
                            id: "Global",
                            children: (0, i.jsx)(A.rg, {
                                children: (0, i.jsxs)(k.Q, {
                                    children: [o && !0 === f && (0, i.jsxs)(i.Fragment, {
                                        children: [(0, i.jsx)(I, {}), (0, i.jsx)(R, {})]
                                    }), o && !0 === f && (0, i.jsx)(M, {}), !o && !0 === f && (0, i.jsx)(z, {}), (0, i.jsx)(S, {}), (0, i.jsx)(g, {}), (0, i.jsx)(e, { ...r
                                    })]
                                })
                            })
                        })
                    })]
                })
            }
            console.log = () => {}, console.debug = () => {}, console.info = () => {}, console.warn = () => {}, window.history.scrollRestoration = "manual", y.p8.registerPlugin(O.ScrollTrigger), O.ScrollTrigger.defaults({
                markers: !1
            }), y.p8.ticker.lagSmoothing(0), y.p8.ticker.remove(y.p8.updateRoot), l.Z.add(t => {
                y.p8.updateRoot(t / 1e3)
            }, 0), (0, o.$d)({
                apiOptions: {
                    region: "us"
                },
                accessToken: "qghVofiC4rXnri0QpI0teAtt",
                use: [o.M$]
            });
            var F = L;
            L.getInitialProps = async () => {
                let {
                    data: t
                } = await (0, o.bS)().get("cdn/stories/config", {
                    version: "draft"
                });
                return {
                    config: t
                }
            }
        },
        7924: function() {},
        9347: function(t) {
            t.exports = {
                barcode: "bar-code_barcode__XnBs8",
                top: "bar-code_top__2KZzy",
                left: "bar-code_left__Eat7c",
                right: "bar-code_right__X1F2u",
                corners: "bar-code_corners___PsIM",
                corner: "bar-code_corner__YQpzm"
            }
        },
        8261: function(t) {
            t.exports = {
                loader: "loader_loader__hkoAF",
                hidden: "loader_hidden__j0KWM",
                rive: "loader_rive__1IOJn",
                progress: "loader_progress__XrqT9"
            }
        },
        7139: function(t) {
            ! function() {
                var e = {
                        229: function(t) {
                            var e, r, n, i = t.exports = {};

                            function o() {
                                throw Error("setTimeout has not been defined")
                            }

                            function s() {
                                throw Error("clearTimeout has not been defined")
                            }

                            function a(t) {
                                if (e === setTimeout) return setTimeout(t, 0);
                                if ((e === o || !e) && setTimeout) return e = setTimeout, setTimeout(t, 0);
                                try {
                                    return e(t, 0)
                                } catch (r) {
                                    try {
                                        return e.call(null, t, 0)
                                    } catch (r) {
                                        return e.call(this, t, 0)
                                    }
                                }
                            }! function() {
                                try {
                                    e = "function" == typeof setTimeout ? setTimeout : o
                                } catch (t) {
                                    e = o
                                }
                                try {
                                    r = "function" == typeof clearTimeout ? clearTimeout : s
                                } catch (t) {
                                    r = s
                                }
                            }();
                            var l = [],
                                u = !1,
                                c = -1;

                            function h() {
                                u && n && (u = !1, n.length ? l = n.concat(l) : c = -1, l.length && f())
                            }

                            function f() {
                                if (!u) {
                                    var t = a(h);
                                    u = !0;
                                    for (var e = l.length; e;) {
                                        for (n = l, l = []; ++c < e;) n && n[c].run();
                                        c = -1, e = l.length
                                    }
                                    n = null, u = !1,
                                        function(t) {
                                            if (r === clearTimeout) return clearTimeout(t);
                                            if ((r === s || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t);
                                            try {
                                                r(t)
                                            } catch (e) {
                                                try {
                                                    return r.call(null, t)
                                                } catch (e) {
                                                    return r.call(this, t)
                                                }
                                            }
                                        }(t)
                                }
                            }

                            function d(t, e) {
                                this.fun = t, this.array = e
                            }

                            function p() {}
                            i.nextTick = function(t) {
                                var e = Array(arguments.length - 1);
                                if (arguments.length > 1)
                                    for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
                                l.push(new d(t, e)), 1 !== l.length || u || a(f)
                            }, d.prototype.run = function() {
                                this.fun.apply(null, this.array)
                            }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = p, i.addListener = p, i.once = p, i.off = p, i.removeListener = p, i.removeAllListeners = p, i.emit = p, i.prependListener = p, i.prependOnceListener = p, i.listeners = function(t) {
                                return []
                            }, i.binding = function(t) {
                                throw Error("process.binding is not supported")
                            }, i.cwd = function() {
                                return "/"
                            }, i.chdir = function(t) {
                                throw Error("process.chdir is not supported")
                            }, i.umask = function() {
                                return 0
                            }
                        }
                    },
                    r = {};

                function n(t) {
                    var i = r[t];
                    if (void 0 !== i) return i.exports;
                    var o = r[t] = {
                            exports: {}
                        },
                        s = !0;
                    try {
                        e[t](o, o.exports, n), s = !1
                    } finally {
                        s && delete r[t]
                    }
                    return o.exports
                }
                n.ab = "//";
                var i = n(229);
                t.exports = i
            }()
        },
        3100: function(t, e, r) {
            t.exports = r(3745)
        },
        9869: function(t, e, r) {
            t.exports = r(2895)
        },
        4049: function(t, e, r) {
            "use strict";
            var n = r(444);

            function i() {}

            function o() {}
            o.resetWarningCache = i, t.exports = function() {
                function t(t, e, r, i, o, s) {
                    if (s !== n) {
                        var a = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw a.name = "Invariant Violation", a
                    }
                }

                function e() {
                    return t
                }
                t.isRequired = t;
                var r = {
                    array: t,
                    bigint: t,
                    bool: t,
                    func: t,
                    number: t,
                    object: t,
                    string: t,
                    symbol: t,
                    any: t,
                    arrayOf: e,
                    element: t,
                    elementType: t,
                    instanceOf: e,
                    node: t,
                    objectOf: e,
                    oneOf: e,
                    oneOfType: e,
                    shape: e,
                    exact: e,
                    checkPropTypes: o,
                    resetWarningCache: i
                };
                return r.PropTypes = r, r
            }
        },
        507: function(t, e, r) {
            t.exports = r(4049)()
        },
        444: function(t) {
            "use strict";
            t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        2415: function(t, e, r) {
            "use strict";
            /**
             * @license React
             * use-sync-external-store-shim.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            var n = r(959),
                i = "function" == typeof Object.is ? Object.is : function(t, e) {
                    return t === e && (0 !== t || 1 / t == 1 / e) || t != t && e != e
                },
                o = n.useState,
                s = n.useEffect,
                a = n.useLayoutEffect,
                l = n.useDebugValue;

            function u(t) {
                var e = t.getSnapshot;
                t = t.value;
                try {
                    var r = e();
                    return !i(t, r)
                } catch (t) {
                    return !0
                }
            }
            var c = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(t, e) {
                return e()
            } : function(t, e) {
                var r = e(),
                    n = o({
                        inst: {
                            value: r,
                            getSnapshot: e
                        }
                    }),
                    i = n[0].inst,
                    c = n[1];
                return a(function() {
                    i.value = r, i.getSnapshot = e, u(i) && c({
                        inst: i
                    })
                }, [t, r, e]), s(function() {
                    return u(i) && c({
                        inst: i
                    }), t(function() {
                        u(i) && c({
                            inst: i
                        })
                    })
                }, [t]), l(r), r
            };
            e.useSyncExternalStore = void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : c
        },
        2179: function(t, e, r) {
            "use strict";
            /**
             * @license React
             * use-sync-external-store-shim/with-selector.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            var n = r(959),
                i = r(4322),
                o = "function" == typeof Object.is ? Object.is : function(t, e) {
                    return t === e && (0 !== t || 1 / t == 1 / e) || t != t && e != e
                },
                s = i.useSyncExternalStore,
                a = n.useRef,
                l = n.useEffect,
                u = n.useMemo,
                c = n.useDebugValue;
            e.useSyncExternalStoreWithSelector = function(t, e, r, n, i) {
                var h = a(null);
                if (null === h.current) {
                    var f = {
                        hasValue: !1,
                        value: null
                    };
                    h.current = f
                } else f = h.current;
                h = u(function() {
                    function t(t) {
                        if (!l) {
                            if (l = !0, s = t, t = n(t), void 0 !== i && f.hasValue) {
                                var e = f.value;
                                if (i(e, t)) return a = e
                            }
                            return a = t
                        }
                        if (e = a, o(s, t)) return e;
                        var r = n(t);
                        return void 0 !== i && i(e, r) ? e : (s = t, a = r)
                    }
                    var s, a, l = !1,
                        u = void 0 === r ? null : r;
                    return [function() {
                        return t(e())
                    }, null === u ? void 0 : function() {
                        return t(u())
                    }]
                }, [e, r, n, i]);
                var d = s(t, h[0], h[1]);
                return l(function() {
                    f.hasValue = !0, f.value = d
                }, [d]), c(d), d
            }
        },
        4322: function(t, e, r) {
            "use strict";
            t.exports = r(2415)
        },
        7231: function(t, e, r) {
            "use strict";
            t.exports = r(2179)
        },
        6734: function(t, e, r) {
            t = r.nmd(t);
            var n, i, o, s, a, l, u, c, h, f, d, p, g, m, v = Object.create,
                _ = Object.defineProperty,
                y = Object.defineProperties,
                b = Object.getOwnPropertyDescriptor,
                w = Object.getOwnPropertyDescriptors,
                T = Object.getOwnPropertyNames,
                x = Object.getOwnPropertySymbols,
                S = Object.getPrototypeOf,
                P = Object.prototype.hasOwnProperty,
                k = Object.prototype.propertyIsEnumerable,
                O = (t, e, r) => e in t ? _(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : t[e] = r,
                j = (t, e) => {
                    for (var r in e || (e = {})) P.call(e, r) && O(t, r, e[r]);
                    if (x)
                        for (var r of x(e)) k.call(e, r) && O(t, r, e[r]);
                    return t
                },
                E = (t, e) => y(t, w(e)),
                A = t => _(t, "__esModule", {
                    value: !0
                }),
                C = (t, e) => function() {
                    return e || (0, t[Object.keys(t)[0]])((e = {
                        exports: {}
                    }).exports, e), e.exports
                },
                D = (t, e) => {
                    for (var r in A(t), e) _(t, r, {
                        get: e[r],
                        enumerable: !0
                    })
                },
                M = (t, e, r) => {
                    if (e && "object" == typeof e || "function" == typeof e)
                        for (let n of T(e)) P.call(t, n) || "default" === n || _(t, n, {
                            get: () => e[n],
                            enumerable: !(r = b(e, n)) || r.enumerable
                        });
                    return t
                },
                R = t => M(A(_(null != t ? v(S(t)) : {}, "default", t && t.__esModule && "default" in t ? {
                    get: () => t.default,
                    enumerable: !0
                } : {
                    value: t,
                    enumerable: !0
                })), t),
                I = (t, e, r) => (O(t, "symbol" != typeof e ? e + "" : e, r), r),
                z = C({
                    "../node_modules/timing-function/lib/UnitBezier.js" (t, e) {
                        e.exports = function() {
                            function t(t, e, r, n) {
                                this.set(t, e, r, n)
                            }
                            return t.prototype.set = function(t, e, r, n) {
                                this._cx = 3 * t, this._bx = 3 * (r - t) - this._cx, this._ax = 1 - this._cx - this._bx, this._cy = 3 * e, this._by = 3 * (n - e) - this._cy, this._ay = 1 - this._cy - this._by
                            }, t.epsilon = 1e-6, t.prototype._sampleCurveX = function(t) {
                                return ((this._ax * t + this._bx) * t + this._cx) * t
                            }, t.prototype._sampleCurveY = function(t) {
                                return ((this._ay * t + this._by) * t + this._cy) * t
                            }, t.prototype._sampleCurveDerivativeX = function(t) {
                                return (3 * this._ax * t + 2 * this._bx) * t + this._cx
                            }, t.prototype._solveCurveX = function(t, e) {
                                var r, n, i, o, s, a;
                                for (i = void 0, o = void 0, s = void 0, a = void 0, r = void 0, n = void 0, s = t, n = 0; n < 8;) {
                                    if (Math.abs(a = this._sampleCurveX(s) - t) < e) return s;
                                    if (Math.abs(r = this._sampleCurveDerivativeX(s)) < e) break;
                                    s -= a / r, n++
                                }
                                if (i = 0, o = 1, (s = t) < i) return i;
                                if (s > o) return o;
                                for (; i < o && !(Math.abs((a = this._sampleCurveX(s)) - t) < e);) t > a ? i = s : o = s, s = (o - i) * .5 + i;
                                return s
                            }, t.prototype.solve = function(t, e) {
                                return this._sampleCurveY(this._solveCurveX(t, e))
                            }, t.prototype.solveSimple = function(t) {
                                return this._sampleCurveY(this._solveCurveX(t, 1e-6))
                            }, t
                        }()
                    }
                }),
                L = C({
                    "../node_modules/levenshtein-edit-distance/index.js" (t, e) {
                        var r, n;
                        r = [], n = [], e.exports = function(t, e, i) {
                            var o, s, a, l, u, c, h, f;
                            if (t === e) return 0;
                            if (o = t.length, s = e.length, 0 === o) return s;
                            if (0 === s) return o;
                            for (i && (t = t.toLowerCase(), e = e.toLowerCase()), h = 0; h < o;) n[h] = t.charCodeAt(h), r[h] = ++h;
                            for (f = 0; f < s;)
                                for (a = e.charCodeAt(f), l = u = f++, h = -1; ++h < o;) c = a === n[h] ? u : u + 1, u = r[h], r[h] = l = u > l ? c > l ? l + 1 : c : c > u ? u + 1 : c;
                            return l
                        }
                    }
                }),
                F = C({
                    "../node_modules/propose/propose.js" (t, e) {
                        var r = L();
                        e.exports = function() {
                            var t, e, n, i, o, s = 0,
                                a = arguments[0],
                                l = arguments[1],
                                u = l.length,
                                c = arguments[2];
                            c && (i = c.threshold, o = c.ignoreCase), void 0 === i && (i = 0);
                            for (var h = 0; h < u; ++h)(t = (e = o ? r(a, l[h], !0) : r(a, l[h])) > a.length ? 1 - e / l[h].length : 1 - e / a.length) > s && (s = t, n = l[h]);
                            return s >= i ? n : null
                        }
                    }
                }),
                N = C({
                    "../node_modules/fast-deep-equal/index.js" (t, e) {
                        "use strict";
                        e.exports = function t(e, r) {
                            if (e === r) return !0;
                            if (e && r && "object" == typeof e && "object" == typeof r) {
                                if (e.constructor !== r.constructor) return !1;
                                if (Array.isArray(e)) {
                                    if ((n = e.length) != r.length) return !1;
                                    for (i = n; 0 != i--;)
                                        if (!t(e[i], r[i])) return !1;
                                    return !0
                                }
                                if (e.constructor === RegExp) return e.source === r.source && e.flags === r.flags;
                                if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === r.valueOf();
                                if (e.toString !== Object.prototype.toString) return e.toString() === r.toString();
                                if ((n = (o = Object.keys(e)).length) !== Object.keys(r).length) return !1;
                                for (i = n; 0 != i--;)
                                    if (!Object.prototype.hasOwnProperty.call(r, o[i])) return !1;
                                for (i = n; 0 != i--;) {
                                    var n, i, o, s = o[i];
                                    if (!t(e[s], r[s])) return !1
                                }
                                return !0
                            }
                            return e != e && r != r
                        }
                    }
                });
            D(e, {
                createRafDriver: () => iM,
                getProject: () => si,
                notify: () => iE,
                onChange: () => sa,
                types: () => iU,
                val: () => sl
            });
            var B = {};
            D(B, {
                createRafDriver: () => iM,
                getProject: () => si,
                notify: () => iE,
                onChange: () => sa,
                types: () => iU,
                val: () => sl
            });
            var $ = R(r(7237)),
                V = new class {
                    constructor() {
                        I(this, "atom", new $.Atom({
                            projects: {}
                        }))
                    }
                    add(t, e) {
                        this.atom.setByPointer(e => e.projects[t], e)
                    }
                    get(t) {
                        return this.atom.get().projects[t]
                    }
                    has(t) {
                        return !!this.get(t)
                    }
                },
                U = new WeakMap;

            function q(t) {
                return U.get(t)
            }

            function W(t, e) {
                U.set(t, e)
            }
            var H = [],
                Y = Array.isArray,
                X = "object" == typeof r.g && r.g && r.g.Object === Object && r.g,
                G = "object" == typeof self && self && self.Object === Object && self,
                K = X || G || Function("return this")(),
                Z = K.Symbol,
                J = Object.prototype,
                Q = J.hasOwnProperty,
                tt = J.toString,
                te = Z ? Z.toStringTag : void 0,
                tr = function(t) {
                    var e = Q.call(t, te),
                        r = t[te];
                    try {
                        t[te] = void 0;
                        var n = !0
                    } catch (t) {}
                    var i = tt.call(t);
                    return n && (e ? t[te] = r : delete t[te]), i
                },
                tn = Object.prototype.toString,
                ti = Z ? Z.toStringTag : void 0,
                to = function(t) {
                    return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : ti && ti in Object(t) ? tr(t) : tn.call(t)
                },
                ts = function(t) {
                    return null != t && "object" == typeof t
                },
                ta = function(t) {
                    return "symbol" == typeof t || ts(t) && "[object Symbol]" == to(t)
                },
                tl = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                tu = /^\w*$/,
                tc = function(t, e) {
                    if (Y(t)) return !1;
                    var r = typeof t;
                    return !!("number" == r || "symbol" == r || "boolean" == r || null == t || ta(t)) || tu.test(t) || !tl.test(t) || null != e && t in Object(e)
                },
                th = function(t) {
                    var e = typeof t;
                    return null != t && ("object" == e || "function" == e)
                },
                tf = function(t) {
                    if (!th(t)) return !1;
                    var e = to(t);
                    return "[object Function]" == e || "[object GeneratorFunction]" == e || "[object AsyncFunction]" == e || "[object Proxy]" == e
                },
                td = K["__core-js_shared__"],
                tp = (n = /[^.]+$/.exec(td && td.keys && td.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n : "",
                tg = Function.prototype.toString,
                tm = function(t) {
                    if (null != t) {
                        try {
                            return tg.call(t)
                        } catch (t) {}
                        try {
                            return t + ""
                        } catch (t) {}
                    }
                    return ""
                },
                tv = /^\[object .+?Constructor\]$/,
                t_ = Object.prototype,
                ty = Function.prototype.toString,
                tb = t_.hasOwnProperty,
                tw = RegExp("^" + ty.call(tb).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                tT = function(t, e) {
                    var r, n = null == t ? void 0 : t[e];
                    return th(r = n) && (!tp || !(tp in r)) && (tf(r) ? tw : tv).test(tm(r)) ? n : void 0
                },
                tx = tT(Object, "create"),
                tS = Object.prototype.hasOwnProperty,
                tP = Object.prototype.hasOwnProperty;

            function tk(t) {
                var e = -1,
                    r = null == t ? 0 : t.length;
                for (this.clear(); ++e < r;) {
                    var n = t[e];
                    this.set(n[0], n[1])
                }
            }
            tk.prototype.clear = function() {
                this.__data__ = tx ? tx(null) : {}, this.size = 0
            }, tk.prototype.delete = function(t) {
                var e = this.has(t) && delete this.__data__[t];
                return this.size -= e ? 1 : 0, e
            }, tk.prototype.get = function(t) {
                var e = this.__data__;
                if (tx) {
                    var r = e[t];
                    return "__lodash_hash_undefined__" === r ? void 0 : r
                }
                return tS.call(e, t) ? e[t] : void 0
            }, tk.prototype.has = function(t) {
                var e = this.__data__;
                return tx ? void 0 !== e[t] : tP.call(e, t)
            }, tk.prototype.set = function(t, e) {
                var r = this.__data__;
                return this.size += this.has(t) ? 0 : 1, r[t] = tx && void 0 === e ? "__lodash_hash_undefined__" : e, this
            };
            var tO = function(t, e) {
                    return t === e || t != t && e != e
                },
                tj = function(t, e) {
                    for (var r = t.length; r--;)
                        if (tO(t[r][0], e)) return r;
                    return -1
                },
                tE = Array.prototype.splice;

            function tA(t) {
                var e = -1,
                    r = null == t ? 0 : t.length;
                for (this.clear(); ++e < r;) {
                    var n = t[e];
                    this.set(n[0], n[1])
                }
            }
            tA.prototype.clear = function() {
                this.__data__ = [], this.size = 0
            }, tA.prototype.delete = function(t) {
                var e = this.__data__,
                    r = tj(e, t);
                return !(r < 0) && (r == e.length - 1 ? e.pop() : tE.call(e, r, 1), --this.size, !0)
            }, tA.prototype.get = function(t) {
                var e = this.__data__,
                    r = tj(e, t);
                return r < 0 ? void 0 : e[r][1]
            }, tA.prototype.has = function(t) {
                return tj(this.__data__, t) > -1
            }, tA.prototype.set = function(t, e) {
                var r = this.__data__,
                    n = tj(r, t);
                return n < 0 ? (++this.size, r.push([t, e])) : r[n][1] = e, this
            };
            var tC = tT(K, "Map"),
                tD = function(t) {
                    var e = typeof t;
                    return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
                },
                tM = function(t, e) {
                    var r = t.__data__;
                    return tD(e) ? r["string" == typeof e ? "string" : "hash"] : r.map
                };

            function tR(t) {
                var e = -1,
                    r = null == t ? 0 : t.length;
                for (this.clear(); ++e < r;) {
                    var n = t[e];
                    this.set(n[0], n[1])
                }
            }

            function tI(t, e) {
                if ("function" != typeof t || null != e && "function" != typeof e) throw TypeError("Expected a function");
                var r = function() {
                    var n = arguments,
                        i = e ? e.apply(this, n) : n[0],
                        o = r.cache;
                    if (o.has(i)) return o.get(i);
                    var s = t.apply(this, n);
                    return r.cache = o.set(i, s) || o, s
                };
                return r.cache = new(tI.Cache || tR), r
            }
            tR.prototype.clear = function() {
                this.size = 0, this.__data__ = {
                    hash: new tk,
                    map: new(tC || tA),
                    string: new tk
                }
            }, tR.prototype.delete = function(t) {
                var e = tM(this, t).delete(t);
                return this.size -= e ? 1 : 0, e
            }, tR.prototype.get = function(t) {
                return tM(this, t).get(t)
            }, tR.prototype.has = function(t) {
                return tM(this, t).has(t)
            }, tR.prototype.set = function(t, e) {
                var r = tM(this, t),
                    n = r.size;
                return r.set(t, e), this.size += r.size == n ? 0 : 1, this
            }, tI.Cache = tR;
            var tz = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                tL = /\\(\\)?/g,
                tF = (o = (i = tI(function(t) {
                    var e = [];
                    return 46 === t.charCodeAt(0) && e.push(""), t.replace(tz, function(t, r, n, i) {
                        e.push(n ? i.replace(tL, "$1") : r || t)
                    }), e
                }, function(t) {
                    return 500 === o.size && o.clear(), t
                })).cache, i),
                tN = function(t, e) {
                    for (var r = -1, n = null == t ? 0 : t.length, i = Array(n); ++r < n;) i[r] = e(t[r], r, t);
                    return i
                },
                tB = 1 / 0,
                t$ = Z ? Z.prototype : void 0,
                tV = t$ ? t$.toString : void 0,
                tU = function t(e) {
                    if ("string" == typeof e) return e;
                    if (Y(e)) return tN(e, t) + "";
                    if (ta(e)) return tV ? tV.call(e) : "";
                    var r = e + "";
                    return "0" == r && 1 / e == -tB ? "-0" : r
                },
                tq = function(t) {
                    return null == t ? "" : tU(t)
                },
                tW = function(t, e) {
                    return Y(t) ? t : tc(t, e) ? [t] : tF(tq(t))
                },
                tH = 1 / 0,
                tY = function(t) {
                    if ("string" == typeof t || ta(t)) return t;
                    var e = t + "";
                    return "0" == e && 1 / t == -tH ? "-0" : e
                },
                tX = function(t, e) {
                    e = tW(e, t);
                    for (var r = 0, n = e.length; null != t && r < n;) t = t[tY(e[r++])];
                    return r && r == n ? t : void 0
                },
                tG = function(t, e, r) {
                    var n = null == t ? void 0 : tX(t, e);
                    return void 0 === n ? r : n
                };

            function tK(t, e) {
                return 0 === e.length ? t : tG(t, e)
            }
            var tZ = class {
                    constructor() {
                        I(this, "_values", {})
                    }
                    get(t, e) {
                        if (this.has(t)) return this._values[t]; {
                            let r = e();
                            return this._values[t] = r, r
                        }
                    }
                    has(t) {
                        return this._values.hasOwnProperty(t)
                    }
                },
                tJ = R(r(7237)),
                tQ = function() {
                    try {
                        var t = tT(Object, "defineProperty");
                        return t({}, "", {}), t
                    } catch (t) {}
                }(),
                t0 = function(t, e, r) {
                    "__proto__" == e && tQ ? tQ(t, e, {
                        configurable: !0,
                        enumerable: !0,
                        value: r,
                        writable: !0
                    }) : t[e] = r
                },
                t1 = Object.prototype.hasOwnProperty,
                t2 = function(t, e, r) {
                    var n = t[e];
                    t1.call(t, e) && tO(n, r) && (void 0 !== r || e in t) || t0(t, e, r)
                },
                t5 = /^(?:0|[1-9]\d*)$/,
                t3 = function(t, e) {
                    var r = typeof t;
                    return !!(e = null == e ? 9007199254740991 : e) && ("number" == r || "symbol" != r && t5.test(t)) && t > -1 && t % 1 == 0 && t < e
                },
                t8 = function(t, e, r, n) {
                    if (!th(t)) return t;
                    e = tW(e, t);
                    for (var i = -1, o = e.length, s = o - 1, a = t; null != a && ++i < o;) {
                        var l = tY(e[i]),
                            u = r;
                        if ("__proto__" === l || "constructor" === l || "prototype" === l) break;
                        if (i != s) {
                            var c = a[l];
                            void 0 === (u = n ? n(c, l, a) : void 0) && (u = th(c) ? c : t3(e[i + 1]) ? [] : {})
                        }
                        t2(a, l, u), a = a[l]
                    }
                    return t
                },
                t6 = new WeakMap,
                t7 = R(r(7237)),
                t4 = R(z()),
                t9 = (0, t7.prism)(() => void 0),
                et = {
                    beforeFirstKeyframe: t => ({
                        started: !0,
                        validFrom: -1 / 0,
                        validTo: t.position,
                        der: (0, t7.prism)(() => ({
                            left: t.value,
                            progression: 0
                        }))
                    }),
                    lastKeyframe: t => ({
                        started: !0,
                        validFrom: t.position,
                        validTo: 1 / 0,
                        der: (0, t7.prism)(() => ({
                            left: t.value,
                            progression: 0
                        }))
                    }),
                    between(t, e, r) {
                        if (!t.connectedRight) return {
                            started: !0,
                            validFrom: t.position,
                            validTo: e.position,
                            der: (0, t7.prism)(() => ({
                                left: t.value,
                                progression: 0
                            }))
                        };
                        let n = r => (r - t.position) / (e.position - t.position);
                        if (!t.type || "bezier" === t.type) {
                            let i = new t4.default(t.handles[2], t.handles[3], e.handles[0], e.handles[1]),
                                o = (0, t7.prism)(() => {
                                    let o = n(r.getValue()),
                                        s = i.solveSimple(o);
                                    return {
                                        left: t.value,
                                        right: e.value,
                                        progression: s
                                    }
                                });
                            return {
                                started: !0,
                                validFrom: t.position,
                                validTo: e.position,
                                der: o
                            }
                        }
                        let i = (0, t7.prism)(() => {
                            let i = n(r.getValue()),
                                o = Math.floor(i);
                            return {
                                left: t.value,
                                right: e.value,
                                progression: o
                            }
                        });
                        return {
                            started: !0,
                            validFrom: t.position,
                            validTo: e.position,
                            der: i
                        }
                    },
                    error: {
                        started: !0,
                        validFrom: -1 / 0,
                        validTo: 1 / 0,
                        der: t9
                    }
                };

            function ee(t, e, r) {
                let n = r.get(t);
                if (n && n.override === e) return n.merged;
                let i = j({}, t);
                for (let n of Object.keys(e)) {
                    let o = e[n],
                        s = t[n];
                    i[n] = "object" == typeof o && "object" == typeof s ? ee(s, o, r) : void 0 === o ? s : o
                }
                return r.set(t, {
                    override: e,
                    merged: i
                }), i
            }

            function er(t, e) {
                let r = t;
                for (let t of e) r = r[t];
                return r
            }
            var en = R(r(7237)),
                ei = (t, e) => {
                    let r = en.prism.memo(t, () => new en.Atom(e), []);
                    return r.set(e), r
                },
                eo = R(r(7237)),
                es = R(r(7237)),
                ea = /\s/,
                el = function(t) {
                    for (var e = t.length; e-- && ea.test(t.charAt(e)););
                    return e
                },
                eu = /^\s+/,
                ec = 0 / 0,
                eh = /^[-+]0x[0-9a-f]+$/i,
                ef = /^0b[01]+$/i,
                ed = /^0o[0-7]+$/i,
                ep = parseInt,
                eg = function(t) {
                    if ("number" == typeof t) return t;
                    if (ta(t)) return ec;
                    if (th(t)) {
                        var e, r = "function" == typeof t.valueOf ? t.valueOf() : t;
                        t = th(r) ? r + "" : r
                    }
                    if ("string" != typeof t) return 0 === t ? t : +t;
                    t = (e = t) ? e.slice(0, el(e) + 1).replace(eu, "") : e;
                    var n = ef.test(t);
                    return n || ed.test(t) ? ep(t.slice(2), n ? 2 : 8) : eh.test(t) ? ec : +t
                },
                em = 1 / 0,
                ev = function(t) {
                    var e, r = (e = t) ? (e = eg(e)) === em || e === -em ? (e < 0 ? -1 : 1) * 17976931348623157e292 : e == e ? e : 0 : 0 === e ? e : 0,
                        n = r % 1;
                    return r == r ? n ? r - n : r : 0
                },
                e_ = function(t) {
                    return t
                },
                ey = tT(K, "WeakMap"),
                eb = Object.create,
                ew = function() {
                    function t() {}
                    return function(e) {
                        if (!th(e)) return {};
                        if (eb) return eb(e);
                        t.prototype = e;
                        var r = new t;
                        return t.prototype = void 0, r
                    }
                }(),
                eT = function(t, e) {
                    var r = -1,
                        n = t.length;
                    for (e || (e = Array(n)); ++r < n;) e[r] = t[r];
                    return e
                },
                ex = function(t, e) {
                    for (var r = -1, n = null == t ? 0 : t.length; ++r < n && !1 !== e(t[r], r, t););
                    return t
                },
                eS = function(t, e, r, n) {
                    var i = !r;
                    r || (r = {});
                    for (var o = -1, s = e.length; ++o < s;) {
                        var a = e[o],
                            l = n ? n(r[a], t[a], a, r, t) : void 0;
                        void 0 === l && (l = t[a]), i ? t0(r, a, l) : t2(r, a, l)
                    }
                    return r
                },
                eP = function(t) {
                    return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
                },
                ek = function(t) {
                    return null != t && eP(t.length) && !tf(t)
                },
                eO = Object.prototype,
                ej = function(t) {
                    var e = t && t.constructor,
                        r = "function" == typeof e && e.prototype || eO;
                    return t === r
                },
                eE = function(t, e) {
                    for (var r = -1, n = Array(t); ++r < t;) n[r] = e(r);
                    return n
                },
                eA = function(t) {
                    return ts(t) && "[object Arguments]" == to(t)
                },
                eC = Object.prototype,
                eD = eC.hasOwnProperty,
                eM = eC.propertyIsEnumerable,
                eR = eA(function() {
                    return arguments
                }()) ? eA : function(t) {
                    return ts(t) && eD.call(t, "callee") && !eM.call(t, "callee")
                },
                eI = e && !e.nodeType && e,
                ez = eI && t && !t.nodeType && t,
                eL = ez && ez.exports === eI ? K.Buffer : void 0,
                eF = (eL ? eL.isBuffer : void 0) || function() {
                    return !1
                },
                eN = {};
            eN["[object Float32Array]"] = eN["[object Float64Array]"] = eN["[object Int8Array]"] = eN["[object Int16Array]"] = eN["[object Int32Array]"] = eN["[object Uint8Array]"] = eN["[object Uint8ClampedArray]"] = eN["[object Uint16Array]"] = eN["[object Uint32Array]"] = !0, eN["[object Arguments]"] = eN["[object Array]"] = eN["[object ArrayBuffer]"] = eN["[object Boolean]"] = eN["[object DataView]"] = eN["[object Date]"] = eN["[object Error]"] = eN["[object Function]"] = eN["[object Map]"] = eN["[object Number]"] = eN["[object Object]"] = eN["[object RegExp]"] = eN["[object Set]"] = eN["[object String]"] = eN["[object WeakMap]"] = !1;
            var eB = function(t) {
                    return function(e) {
                        return t(e)
                    }
                },
                e$ = e && !e.nodeType && e,
                eV = e$ && t && !t.nodeType && t,
                eU = eV && eV.exports === e$ && X.process,
                eq = function() {
                    try {
                        var t = eV && eV.require && eV.require("util").types;
                        if (t) return t;
                        return eU && eU.binding && eU.binding("util")
                    } catch (t) {}
                }(),
                eW = eq && eq.isTypedArray,
                eH = eW ? eB(eW) : function(t) {
                    return ts(t) && eP(t.length) && !!eN[to(t)]
                },
                eY = Object.prototype.hasOwnProperty,
                eX = function(t, e) {
                    var r = Y(t),
                        n = !r && eR(t),
                        i = !r && !n && eF(t),
                        o = !r && !n && !i && eH(t),
                        s = r || n || i || o,
                        a = s ? eE(t.length, String) : [],
                        l = a.length;
                    for (var u in t)(e || eY.call(t, u)) && !(s && ("length" == u || i && ("offset" == u || "parent" == u) || o && ("buffer" == u || "byteLength" == u || "byteOffset" == u) || t3(u, l))) && a.push(u);
                    return a
                },
                eG = function(t, e) {
                    return function(r) {
                        return t(e(r))
                    }
                },
                eK = eG(Object.keys, Object),
                eZ = Object.prototype.hasOwnProperty,
                eJ = function(t) {
                    if (!ej(t)) return eK(t);
                    var e = [];
                    for (var r in Object(t)) eZ.call(t, r) && "constructor" != r && e.push(r);
                    return e
                },
                eQ = function(t) {
                    return ek(t) ? eX(t) : eJ(t)
                },
                e0 = function(t) {
                    var e = [];
                    if (null != t)
                        for (var r in Object(t)) e.push(r);
                    return e
                },
                e1 = Object.prototype.hasOwnProperty,
                e2 = function(t) {
                    if (!th(t)) return e0(t);
                    var e = ej(t),
                        r = [];
                    for (var n in t) "constructor" == n && (e || !e1.call(t, n)) || r.push(n);
                    return r
                },
                e5 = function(t) {
                    return ek(t) ? eX(t, !0) : e2(t)
                },
                e3 = function(t, e) {
                    for (var r = -1, n = e.length, i = t.length; ++r < n;) t[i + r] = e[r];
                    return t
                },
                e8 = eG(Object.getPrototypeOf, Object),
                e6 = Object.prototype,
                e7 = Function.prototype.toString,
                e4 = e6.hasOwnProperty,
                e9 = e7.call(Object),
                rt = function(t) {
                    if (!ts(t) || "[object Object]" != to(t)) return !1;
                    var e = e8(t);
                    if (null === e) return !0;
                    var r = e4.call(e, "constructor") && e.constructor;
                    return "function" == typeof r && r instanceof r && e7.call(r) == e9
                },
                re = function(t, e, r) {
                    var n = -1,
                        i = t.length;
                    e < 0 && (e = -e > i ? 0 : i + e), (r = r > i ? i : r) < 0 && (r += i), i = e > r ? 0 : r - e >>> 0, e >>>= 0;
                    for (var o = Array(i); ++n < i;) o[n] = t[n + e];
                    return o
                },
                rr = function(t, e, r) {
                    var n = t.length;
                    return r = void 0 === r ? n : r, !e && r >= n ? t : re(t, e, r)
                },
                rn = RegExp("[\\u200d\ud800-\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),
                ri = function(t) {
                    return rn.test(t)
                },
                ro = "\ud800-\udfff",
                rs = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
                ra = "\ud83c[\udffb-\udfff]",
                rl = "[^" + ro + "]",
                ru = "(?:\ud83c[\udde6-\uddff]){2}",
                rc = "[\ud800-\udbff][\udc00-\udfff]",
                rh = "(?:" + rs + "|" + ra + ")?",
                rf = "[\\ufe0e\\ufe0f]?",
                rd = "(?:\\u200d(?:" + [rl, ru, rc].join("|") + ")" + rf + rh + ")*",
                rp = RegExp(ra + "(?=" + ra + ")|(?:" + [rl + rs + "?", rs, ru, rc, "[" + ro + "]"].join("|") + ")" + (rf + rh + rd), "g"),
                rg = function(t, e, r) {
                    var n, i, o;
                    return void 0 === r && (r = e, e = void 0), void 0 !== r && (r = (r = eg(r)) == r ? r : 0), void 0 !== e && (e = (e = eg(e)) == e ? e : 0), n = eg(t), i = e, o = r, n == n && (void 0 !== o && (n = n <= o ? n : o), void 0 !== i && (n = n >= i ? n : i)), n
                };

            function rm(t) {
                var e = this.__data__ = new tA(t);
                this.size = e.size
            }
            rm.prototype.clear = function() {
                this.__data__ = new tA, this.size = 0
            }, rm.prototype.delete = function(t) {
                var e = this.__data__,
                    r = e.delete(t);
                return this.size = e.size, r
            }, rm.prototype.get = function(t) {
                return this.__data__.get(t)
            }, rm.prototype.has = function(t) {
                return this.__data__.has(t)
            }, rm.prototype.set = function(t, e) {
                var r = this.__data__;
                if (r instanceof tA) {
                    var n = r.__data__;
                    if (!tC || n.length < 199) return n.push([t, e]), this.size = ++r.size, this;
                    r = this.__data__ = new tR(n)
                }
                return r.set(t, e), this.size = r.size, this
            };
            var rv = e && !e.nodeType && e,
                r_ = rv && t && !t.nodeType && t,
                ry = r_ && r_.exports === rv ? K.Buffer : void 0,
                rb = ry ? ry.allocUnsafe : void 0,
                rw = function(t, e) {
                    if (e) return t.slice();
                    var r = t.length,
                        n = rb ? rb(r) : new t.constructor(r);
                    return t.copy(n), n
                },
                rT = function(t, e) {
                    for (var r = -1, n = null == t ? 0 : t.length, i = 0, o = []; ++r < n;) {
                        var s = t[r];
                        e(s, r, t) && (o[i++] = s)
                    }
                    return o
                },
                rx = function() {
                    return []
                },
                rS = Object.prototype.propertyIsEnumerable,
                rP = Object.getOwnPropertySymbols,
                rk = rP ? function(t) {
                    return null == t ? [] : rT(rP(t = Object(t)), function(e) {
                        return rS.call(t, e)
                    })
                } : rx,
                rO = Object.getOwnPropertySymbols ? function(t) {
                    for (var e = []; t;) e3(e, rk(t)), t = e8(t);
                    return e
                } : rx,
                rj = function(t, e, r) {
                    var n = e(t);
                    return Y(t) ? n : e3(n, r(t))
                },
                rE = function(t) {
                    return rj(t, eQ, rk)
                },
                rA = function(t) {
                    return rj(t, e5, rO)
                },
                rC = tT(K, "DataView"),
                rD = tT(K, "Promise"),
                rM = tT(K, "Set"),
                rR = "[object Map]",
                rI = "[object Promise]",
                rz = "[object Set]",
                rL = "[object WeakMap]",
                rF = "[object DataView]",
                rN = tm(rC),
                rB = tm(tC),
                r$ = tm(rD),
                rV = tm(rM),
                rU = tm(ey),
                rq = to;
            (rC && rq(new rC(new ArrayBuffer(1))) != rF || tC && rq(new tC) != rR || rD && rq(rD.resolve()) != rI || rM && rq(new rM) != rz || ey && rq(new ey) != rL) && (rq = function(t) {
                var e = to(t),
                    r = "[object Object]" == e ? t.constructor : void 0,
                    n = r ? tm(r) : "";
                if (n) switch (n) {
                    case rN:
                        return rF;
                    case rB:
                        return rR;
                    case r$:
                        return rI;
                    case rV:
                        return rz;
                    case rU:
                        return rL
                }
                return e
            });
            var rW = rq,
                rH = Object.prototype.hasOwnProperty,
                rY = function(t) {
                    var e = t.length,
                        r = new t.constructor(e);
                    return e && "string" == typeof t[0] && rH.call(t, "index") && (r.index = t.index, r.input = t.input), r
                },
                rX = K.Uint8Array,
                rG = function(t) {
                    var e = new t.constructor(t.byteLength);
                    return new rX(e).set(new rX(t)), e
                },
                rK = function(t, e) {
                    var r = e ? rG(t.buffer) : t.buffer;
                    return new t.constructor(r, t.byteOffset, t.byteLength)
                },
                rZ = /\w*$/,
                rJ = function(t) {
                    var e = new t.constructor(t.source, rZ.exec(t));
                    return e.lastIndex = t.lastIndex, e
                },
                rQ = Z ? Z.prototype : void 0,
                r0 = rQ ? rQ.valueOf : void 0,
                r1 = function(t, e) {
                    var r = e ? rG(t.buffer) : t.buffer;
                    return new t.constructor(r, t.byteOffset, t.length)
                },
                r2 = function(t, e, r) {
                    var n = t.constructor;
                    switch (e) {
                        case "[object ArrayBuffer]":
                            return rG(t);
                        case "[object Boolean]":
                        case "[object Date]":
                            return new n(+t);
                        case "[object DataView]":
                            return rK(t, r);
                        case "[object Float32Array]":
                        case "[object Float64Array]":
                        case "[object Int8Array]":
                        case "[object Int16Array]":
                        case "[object Int32Array]":
                        case "[object Uint8Array]":
                        case "[object Uint8ClampedArray]":
                        case "[object Uint16Array]":
                        case "[object Uint32Array]":
                            return r1(t, r);
                        case "[object Map]":
                        case "[object Set]":
                            return new n;
                        case "[object Number]":
                        case "[object String]":
                            return new n(t);
                        case "[object RegExp]":
                            return rJ(t);
                        case "[object Symbol]":
                            return r0 ? Object(r0.call(t)) : {}
                    }
                },
                r5 = eq && eq.isMap,
                r3 = r5 ? eB(r5) : function(t) {
                    return ts(t) && "[object Map]" == rW(t)
                },
                r8 = eq && eq.isSet,
                r6 = r8 ? eB(r8) : function(t) {
                    return ts(t) && "[object Set]" == rW(t)
                },
                r7 = "[object Arguments]",
                r4 = "[object Function]",
                r9 = "[object Object]",
                nt = {};
            nt[r7] = nt["[object Array]"] = nt["[object ArrayBuffer]"] = nt["[object DataView]"] = nt["[object Boolean]"] = nt["[object Date]"] = nt["[object Float32Array]"] = nt["[object Float64Array]"] = nt["[object Int8Array]"] = nt["[object Int16Array]"] = nt["[object Int32Array]"] = nt["[object Map]"] = nt["[object Number]"] = nt[r9] = nt["[object RegExp]"] = nt["[object Set]"] = nt["[object String]"] = nt["[object Symbol]"] = nt["[object Uint8Array]"] = nt["[object Uint8ClampedArray]"] = nt["[object Uint16Array]"] = nt["[object Uint32Array]"] = !0, nt["[object Error]"] = nt[r4] = nt["[object WeakMap]"] = !1;
            var ne = function t(e, r, n, i, o, s) {
                var a, l = 1 & r,
                    u = 2 & r,
                    c = 4 & r;
                if (n && (a = o ? n(e, i, o, s) : n(e)), void 0 !== a) return a;
                if (!th(e)) return e;
                var h = Y(e);
                if (h) {
                    if (a = rY(e), !l) return eT(e, a)
                } else {
                    var f, d, p, g, m = rW(e),
                        v = m == r4 || "[object GeneratorFunction]" == m;
                    if (eF(e)) return rw(e, l);
                    if (m == r9 || m == r7 || v && !o) {
                        if (a = u || v ? {} : "function" != typeof e.constructor || ej(e) ? {} : ew(e8(e)), !l) return u ? (d = (f = a) && eS(e, e5(e), f), eS(e, rO(e), d)) : (g = (p = a) && eS(e, eQ(e), p), eS(e, rk(e), g))
                    } else {
                        if (!nt[m]) return o ? e : {};
                        a = r2(e, m, l)
                    }
                }
                s || (s = new rm);
                var _ = s.get(e);
                if (_) return _;
                s.set(e, a), r6(e) ? e.forEach(function(i) {
                    a.add(t(i, r, n, i, e, s))
                }) : r3(e) && e.forEach(function(i, o) {
                    a.set(o, t(i, r, n, o, e, s))
                });
                var y = c ? u ? rA : rE : u ? e5 : eQ,
                    b = h ? void 0 : y(e);
                return ex(b || e, function(i, o) {
                    b && (i = e[o = i]), t2(a, o, t(i, r, n, o, e, s))
                }), a
            };

            function nr(t) {
                var e = -1,
                    r = null == t ? 0 : t.length;
                for (this.__data__ = new tR; ++e < r;) this.add(t[e])
            }
            nr.prototype.add = nr.prototype.push = function(t) {
                return this.__data__.set(t, "__lodash_hash_undefined__"), this
            }, nr.prototype.has = function(t) {
                return this.__data__.has(t)
            };
            var nn = function(t, e) {
                    for (var r = -1, n = null == t ? 0 : t.length; ++r < n;)
                        if (e(t[r], r, t)) return !0;
                    return !1
                },
                ni = function(t, e, r, n, i, o) {
                    var s = 1 & r,
                        a = t.length,
                        l = e.length;
                    if (a != l && !(s && l > a)) return !1;
                    var u = o.get(t),
                        c = o.get(e);
                    if (u && c) return u == e && c == t;
                    var h = -1,
                        f = !0,
                        d = 2 & r ? new nr : void 0;
                    for (o.set(t, e), o.set(e, t); ++h < a;) {
                        var p = t[h],
                            g = e[h];
                        if (n) var m = s ? n(g, p, h, e, t, o) : n(p, g, h, t, e, o);
                        if (void 0 !== m) {
                            if (m) continue;
                            f = !1;
                            break
                        }
                        if (d) {
                            if (!nn(e, function(t, e) {
                                    if (!d.has(e) && (p === t || i(p, t, r, n, o))) return d.push(e)
                                })) {
                                f = !1;
                                break
                            }
                        } else if (!(p === g || i(p, g, r, n, o))) {
                            f = !1;
                            break
                        }
                    }
                    return o.delete(t), o.delete(e), f
                },
                no = function(t) {
                    var e = -1,
                        r = Array(t.size);
                    return t.forEach(function(t, n) {
                        r[++e] = [n, t]
                    }), r
                },
                ns = function(t) {
                    var e = -1,
                        r = Array(t.size);
                    return t.forEach(function(t) {
                        r[++e] = t
                    }), r
                },
                na = Z ? Z.prototype : void 0,
                nl = na ? na.valueOf : void 0,
                nu = function(t, e, r, n, i, o, s) {
                    switch (r) {
                        case "[object DataView]":
                            if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) break;
                            t = t.buffer, e = e.buffer;
                        case "[object ArrayBuffer]":
                            if (t.byteLength != e.byteLength || !o(new rX(t), new rX(e))) break;
                            return !0;
                        case "[object Boolean]":
                        case "[object Date]":
                        case "[object Number]":
                            return tO(+t, +e);
                        case "[object Error]":
                            return t.name == e.name && t.message == e.message;
                        case "[object RegExp]":
                        case "[object String]":
                            return t == e + "";
                        case "[object Map]":
                            var a = no;
                        case "[object Set]":
                            var l = 1 & n;
                            if (a || (a = ns), t.size != e.size && !l) break;
                            var u = s.get(t);
                            if (u) return u == e;
                            n |= 2, s.set(t, e);
                            var c = ni(a(t), a(e), n, i, o, s);
                            return s.delete(t), c;
                        case "[object Symbol]":
                            if (nl) return nl.call(t) == nl.call(e)
                    }
                    return !1
                },
                nc = Object.prototype.hasOwnProperty,
                nh = function(t, e, r, n, i, o) {
                    var s = 1 & r,
                        a = rE(t),
                        l = a.length;
                    if (l != rE(e).length && !s) return !1;
                    for (var u = l; u--;) {
                        var c = a[u];
                        if (!(s ? c in e : nc.call(e, c))) return !1
                    }
                    var h = o.get(t),
                        f = o.get(e);
                    if (h && f) return h == e && f == t;
                    var d = !0;
                    o.set(t, e), o.set(e, t);
                    for (var p = s; ++u < l;) {
                        var g = t[c = a[u]],
                            m = e[c];
                        if (n) var v = s ? n(m, g, c, e, t, o) : n(g, m, c, t, e, o);
                        if (!(void 0 === v ? g === m || i(g, m, r, n, o) : v)) {
                            d = !1;
                            break
                        }
                        p || (p = "constructor" == c)
                    }
                    if (d && !p) {
                        var _ = t.constructor,
                            y = e.constructor;
                        _ != y && "constructor" in t && "constructor" in e && !("function" == typeof _ && _ instanceof _ && "function" == typeof y && y instanceof y) && (d = !1)
                    }
                    return o.delete(t), o.delete(e), d
                },
                nf = "[object Arguments]",
                nd = "[object Array]",
                np = "[object Object]",
                ng = Object.prototype.hasOwnProperty,
                nm = function(t, e, r, n, i, o) {
                    var s = Y(t),
                        a = Y(e),
                        l = s ? nd : rW(t),
                        u = a ? nd : rW(e);
                    l = l == nf ? np : l, u = u == nf ? np : u;
                    var c = l == np,
                        h = u == np,
                        f = l == u;
                    if (f && eF(t)) {
                        if (!eF(e)) return !1;
                        s = !0, c = !1
                    }
                    if (f && !c) return o || (o = new rm), s || eH(t) ? ni(t, e, r, n, i, o) : nu(t, e, l, r, n, i, o);
                    if (!(1 & r)) {
                        var d = c && ng.call(t, "__wrapped__"),
                            p = h && ng.call(e, "__wrapped__");
                        if (d || p) {
                            var g = d ? t.value() : t,
                                m = p ? e.value() : e;
                            return o || (o = new rm), i(g, m, r, n, o)
                        }
                    }
                    return !!f && (o || (o = new rm), nh(t, e, r, n, i, o))
                },
                nv = function t(e, r, n, i, o) {
                    return e === r || (null != e && null != r && (ts(e) || ts(r)) ? nm(e, r, n, i, t, o) : e != e && r != r)
                },
                n_ = function(t, e, r, n) {
                    var i = r.length,
                        o = i,
                        s = !n;
                    if (null == t) return !o;
                    for (t = Object(t); i--;) {
                        var a = r[i];
                        if (s && a[2] ? a[1] !== t[a[0]] : !(a[0] in t)) return !1
                    }
                    for (; ++i < o;) {
                        var l = (a = r[i])[0],
                            u = t[l],
                            c = a[1];
                        if (s && a[2]) {
                            if (void 0 === u && !(l in t)) return !1
                        } else {
                            var h = new rm;
                            if (n) var f = n(u, c, l, t, e, h);
                            if (!(void 0 === f ? nv(c, u, 3, n, h) : f)) return !1
                        }
                    }
                    return !0
                },
                ny = function(t) {
                    return t == t && !th(t)
                },
                nb = function(t) {
                    for (var e = eQ(t), r = e.length; r--;) {
                        var n = e[r],
                            i = t[n];
                        e[r] = [n, i, ny(i)]
                    }
                    return e
                },
                nw = function(t, e) {
                    return function(r) {
                        return null != r && r[t] === e && (void 0 !== e || t in Object(r))
                    }
                },
                nT = function(t) {
                    var e = nb(t);
                    return 1 == e.length && e[0][2] ? nw(e[0][0], e[0][1]) : function(r) {
                        return r === t || n_(r, t, e)
                    }
                },
                nx = function(t, e) {
                    return null != t && e in Object(t)
                },
                nS = function(t, e, r) {
                    e = tW(e, t);
                    for (var n = -1, i = e.length, o = !1; ++n < i;) {
                        var s = tY(e[n]);
                        if (!(o = null != t && r(t, s))) break;
                        t = t[s]
                    }
                    return o || ++n != i ? o : !!(i = null == t ? 0 : t.length) && eP(i) && t3(s, i) && (Y(t) || eR(t))
                },
                nP = function(t) {
                    return function(e) {
                        return null == e ? void 0 : e[t]
                    }
                },
                nk = function(t) {
                    var e, r, n;
                    if ("function" == typeof t) return t;
                    if (null == t) return e_;
                    if ("object" == typeof t) {
                        return Y(t) ? (e = t[0], r = t[1], tc(e) && ny(r) ? nw(tY(e), r) : function(t) {
                            var n = tG(t, e);
                            return void 0 === n && n === r ? null != t && nS(t, e, nx) : nv(r, n, 3)
                        }) : nT(t)
                    }
                    return tc(n = t) ? nP(tY(n)) : function(t) {
                        return tX(t, n)
                    }
                },
                nO = function(t, e, r) {
                    for (var n = -1, i = Object(t), o = r(t), s = o.length; s--;) {
                        var a = o[++n];
                        if (!1 === e(i[a], a, i)) break
                    }
                    return t
                },
                nj = function() {
                    return K.Date.now()
                },
                nE = Math.max,
                nA = Math.min,
                nC = function(t, e, r) {
                    var n, i, o, s, a, l, u = 0,
                        c = !1,
                        h = !1,
                        f = !0;
                    if ("function" != typeof t) throw TypeError("Expected a function");

                    function d(e) {
                        var r = n,
                            o = i;
                        return n = i = void 0, u = e, s = t.apply(o, r)
                    }

                    function p(t) {
                        var r = t - l,
                            n = t - u;
                        return void 0 === l || r >= e || r < 0 || h && n >= o
                    }

                    function g() {
                        var t, r, n, i = nj();
                        if (p(i)) return m(i);
                        a = setTimeout(g, (t = i - l, r = i - u, n = e - t, h ? nA(n, o - r) : n))
                    }

                    function m(t) {
                        return (a = void 0, f && n) ? d(t) : (n = i = void 0, s)
                    }

                    function v() {
                        var t, r = nj(),
                            o = p(r);
                        if (n = arguments, i = this, l = r, o) {
                            if (void 0 === a) return u = t = l, a = setTimeout(g, e), c ? d(t) : s;
                            if (h) return clearTimeout(a), a = setTimeout(g, e), d(l)
                        }
                        return void 0 === a && (a = setTimeout(g, e)), s
                    }
                    return e = eg(e) || 0, th(r) && (c = !!r.leading, o = (h = "maxWait" in r) ? nE(eg(r.maxWait) || 0, e) : o, f = "trailing" in r ? !!r.trailing : f), v.cancel = function() {
                        void 0 !== a && clearTimeout(a), u = 0, n = l = i = a = void 0
                    }, v.flush = function() {
                        return void 0 === a ? s : m(nj())
                    }, v
                },
                nD = function(t) {
                    var e = null == t ? 0 : t.length;
                    return e ? t[e - 1] : void 0
                },
                nM = function(t, e) {
                    var r = {};
                    return e = nk(e, 3), t && nO(t, function(t, n, i) {
                        t0(r, n, e(t, n, i))
                    }, eQ), r
                },
                nR = function(t, e) {
                    var r, n;
                    return e = tW(e, t), r = t, null == (t = (n = e).length < 2 ? r : tX(r, re(n, 0, -1))) || delete t[tY(nD(e))]
                },
                nI = Math.floor,
                nz = function(t, e) {
                    var r = "";
                    if (!t || e < 1 || e > 9007199254740991) return r;
                    do e % 2 && (r += t), (e = nI(e / 2)) && (t += t); while (e);
                    return r
                },
                nL = nP("length"),
                nF = "\ud800-\udfff",
                nN = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
                nB = "\ud83c[\udffb-\udfff]",
                n$ = "[^" + nF + "]",
                nV = "(?:\ud83c[\udde6-\uddff]){2}",
                nU = "[\ud800-\udbff][\udc00-\udfff]",
                nq = "(?:" + nN + "|" + nB + ")?",
                nW = "[\\ufe0e\\ufe0f]?",
                nH = "(?:\\u200d(?:" + [n$, nV, nU].join("|") + ")" + nW + nq + ")*",
                nY = RegExp(nB + "(?=" + nB + ")|(?:" + [n$ + nN + "?", nN, nV, nU, "[" + nF + "]"].join("|") + ")" + (nW + nq + nH), "g"),
                nX = function(t) {
                    for (var e = nY.lastIndex = 0; nY.test(t);) ++e;
                    return e
                },
                nG = function(t) {
                    return ri(t) ? nX(t) : nL(t)
                },
                nK = Math.ceil,
                nZ = function(t, e) {
                    var r = (e = void 0 === e ? " " : tU(e)).length;
                    if (r < 2) return r ? nz(e, t) : e;
                    var n = nz(e, nK(t / nG(e)));
                    return ri(e) ? rr(ri(n) ? n.match(rp) || [] : n.split(""), 0, t).join("") : n.slice(0, t)
                },
                nJ = function(t, e, r) {
                    t = tq(t);
                    var n = (e = ev(e)) ? nG(t) : 0;
                    return e && n < e ? nZ(e - n, r) + t : t
                },
                nQ = function(t, e) {
                    return null == t || nR(t, e)
                },
                n0 = class {
                    constructor(t) {
                        I(this, "_cache", new tZ), I(this, "_keepHotUntapDebounce"), W(this, t)
                    }
                    get type() {
                        return "Theatre_SheetObject_PublicAPI"
                    }
                    get props() {
                        return q(this).propsP
                    }
                    get sheet() {
                        return q(this).sheet.publicApi
                    }
                    get project() {
                        return q(this).sheet.project.publicApi
                    }
                    get address() {
                        return j({}, q(this).address)
                    }
                    _valuesPrism() {
                        return this._cache.get("_valuesPrism", () => {
                            let t = q(this),
                                e = (0, es.prism)(() => (0, es.val)(t.getValues().getValue()));
                            return e
                        })
                    }
                    onValuesChange(t, e) {
                        return sa(this._valuesPrism(), t, e)
                    }
                    get value() {
                        let t = this._valuesPrism();
                        if (!t.isHot) {
                            null != this._keepHotUntapDebounce && this._keepHotUntapDebounce.flush();
                            let e = t.keepHot();
                            this._keepHotUntapDebounce = nC(() => {
                                e(), this._keepHotUntapDebounce = void 0
                            }, 5e3)
                        }
                        return this._keepHotUntapDebounce && this._keepHotUntapDebounce(), t.getValue()
                    }
                    set initialValue(t) {
                        q(this).setInitialValue(t)
                    }
                };

            function n1(t) {
                return "compound" === t.type || "enum" === t.type
            }

            function n2(t, e) {
                if (!t) return;
                let [r, ...n] = e;
                if (void 0 === r) return t;
                if (!n1(t)) return;
                let i = "enum" === t.type ? t.cases[r] : t.props[r];
                return n2(i, n)
            }
            var n5 = function(t) {
                    let e = new WeakMap;
                    return r => (e.has(r) || e.set(r, t(r)), e.get(r))
                }(t => {
                    if ("enum" === t.type) throw Error("Not implemented yet for enums");
                    for (let e in t.props) {
                        let r = t.props[e];
                        if (!n1(r) || n5(r)) return !0
                    }
                    return !1
                }),
                n3 = class {
                    constructor(t, e, r) {
                        this.sheet = t, this.template = e, this.nativeObject = r, I(this, "$$isPointerToPrismProvider", !0), I(this, "address"), I(this, "publicApi"), I(this, "_initialValue", new eo.Atom({})), I(this, "_cache", new tZ), I(this, "_logger"), I(this, "_internalUtilCtx"), this._logger = t._logger.named("SheetObject", e.address.objectKey), this._logger._trace("creating object"), this._internalUtilCtx = {
                            logger: this._logger.utilFor.internal()
                        }, this.address = E(j({}, e.address), {
                            sheetInstanceId: t.address.sheetInstanceId
                        }), this.publicApi = new n0(this)
                    }
                    get type() {
                        return "Theatre_SheetObject"
                    }
                    getValues() {
                        return this._cache.get("getValues()", () => (0, eo.prism)(() => {
                            let t;
                            let e = (0, eo.val)(this.template.getDefaultValues()),
                                r = (0, eo.val)(this._initialValue.pointer),
                                n = eo.prism.memo("withInitialCache", () => new WeakMap, []),
                                i = ee(e, r, n),
                                o = (0, eo.val)(this.template.getStaticValues()),
                                s = eo.prism.memo("withStatics", () => new WeakMap, []),
                                a = ee(i, o, s),
                                l = a; {
                                let e = eo.prism.memo("seq", () => this.getSequencedValues(), []),
                                    r = eo.prism.memo("withSeqsCache", () => new WeakMap, []);
                                t = (0, eo.val)((0, eo.val)(e));
                                let n = ee(l, t, r);
                                l = n
                            }
                            let u = ei("finalAtom", l);
                            return u.pointer
                        }))
                    }
                    getValueByPointer(t) {
                        let e = (0, eo.val)(this.getValues()),
                            {
                                path: r
                            } = (0, eo.getPointerParts)(t);
                        return (0, eo.val)(er(e, r))
                    }
                    pointerToPrism(t) {
                        let {
                            path: e
                        } = (0, eo.getPointerParts)(t);
                        return (0, eo.prism)(() => {
                            let t = (0, eo.val)(this.getValues());
                            return (0, eo.val)(er(t, e))
                        })
                    }
                    getSequencedValues() {
                        return (0, eo.prism)(() => {
                            let t = eo.prism.memo("tracksToProcess", () => this.template.getArrayOfValidSequenceTracks(), []),
                                e = (0, eo.val)(t),
                                r = new eo.Atom({}),
                                n = (0, eo.val)(this.template.configPointer);
                            return eo.prism.effect("processTracks", () => {
                                let t = [];
                                for (let {
                                        trackId: i,
                                        pathToProp: o
                                    } of e) {
                                    let e = this._trackIdToPrism(i),
                                        s = n2(n, o),
                                        a = s.deserializeAndSanitize,
                                        l = s.interpolate,
                                        u = () => {
                                            let t = e.getValue();
                                            if (!t) return r.setByPointer(t => er(t, o), void 0);
                                            let n = a(t.left),
                                                i = void 0 === n ? s.default : n;
                                            if (void 0 === t.right) return r.setByPointer(t => er(t, o), i);
                                            let u = a(t.right),
                                                c = void 0 === u ? s.default : u;
                                            return r.setByPointer(t => er(t, o), l(i, c, t.progression))
                                        },
                                        c = e.onStale(u);
                                    u(), t.push(c)
                                }
                                return () => {
                                    for (let e of t) e()
                                }
                            }, [n, ...e]), r.pointer
                        })
                    }
                    _trackIdToPrism(t) {
                        var e;
                        let r = this.template.project.pointers.historic.sheetsById[this.address.sheetId].sequence.tracksByObject[this.address.objectKey].trackData[t],
                            n = this.sheet.getSequence().positionPrism;
                        return e = this._internalUtilCtx, (0, t7.prism)(() => {
                            let t = (0, t7.val)(r),
                                i = t7.prism.memo("driver", () => t ? "BasicKeyframedTrack" === t.type ? (0, t7.prism)(() => {
                                    let e = t7.prism.ref("state", {
                                            started: !1
                                        }),
                                        r = e.current,
                                        i = n.getValue();
                                    return (!r.started || i < r.validFrom || r.validTo <= i) && (e.current = r = function(t, e, r) {
                                        let n = e.getValue();
                                        if (0 === r.keyframes.length) return {
                                            started: !0,
                                            validFrom: -1 / 0,
                                            validTo: 1 / 0,
                                            der: t9
                                        };
                                        let i = 0;
                                        for (;;) {
                                            let t = r.keyframes[i];
                                            if (!t) return et.error;
                                            let o = i === r.keyframes.length - 1;
                                            if (n < t.position) {
                                                if (0 === i) return et.beforeFirstKeyframe(t);
                                                return et.error
                                            }
                                            if (t.position === n) {
                                                if (o) return et.lastKeyframe(t);
                                                return et.between(t, r.keyframes[i + 1], e)
                                            }
                                            if (i === r.keyframes.length - 1) return et.lastKeyframe(t); {
                                                let o = i + 1;
                                                if (!(r.keyframes[o].position <= n)) return et.between(t, r.keyframes[i + 1], e);
                                                i = o;
                                                continue
                                            }
                                        }
                                    }(0, n, t)), r.der.getValue()
                                }) : (e.logger.error("Track type not yet supported."), (0, t7.prism)(() => void 0)) : (0, t7.prism)(() => void 0), [t]);
                            return i.getValue()
                        })
                    }
                    get propsP() {
                        return this._cache.get("propsP", () => (0, eo.pointer)({
                            root: this,
                            path: []
                        }))
                    }
                    validateValue(t, e) {}
                    setInitialValue(t) {
                        this.validateValue(this.propsP, t), this._initialValue.set(t)
                    }
                };

            function n8(t) {
                return function(e, r) {
                    return t(e, r())
                }
            }(s = c || (c = {}))[s.GENERAL = 1] = "GENERAL", s[s.TODO = 2] = "TODO", s[s.TROUBLESHOOTING = 4] = "TROUBLESHOOTING", (a = h || (h = {}))[a.INTERNAL = 8] = "INTERNAL", a[a.DEV = 16] = "DEV", a[a.PUBLIC = 32] = "PUBLIC", (l = f || (f = {}))[l.TRACE = 64] = "TRACE", l[l.DEBUG = 128] = "DEBUG", l[l.WARN = 256] = "WARN", l[l.ERROR = 512] = "ERROR", (u = d || (d = {}))[u.ERROR_PUBLIC = 545] = "ERROR_PUBLIC", u[u.ERROR_DEV = 529] = "ERROR_DEV", u[u._HMM = 524] = "_HMM", u[u._TODO = 522] = "_TODO", u[u._ERROR = 521] = "_ERROR", u[u.WARN_PUBLIC = 289] = "WARN_PUBLIC", u[u.WARN_DEV = 273] = "WARN_DEV", u[u._KAPOW = 268] = "_KAPOW", u[u._WARN = 265] = "_WARN", u[u.DEBUG_DEV = 145] = "DEBUG_DEV", u[u._DEBUG = 137] = "_DEBUG", u[u.TRACE_DEV = 81] = "TRACE_DEV", u[u._TRACE = 73] = "_TRACE";
            var n6 = {
                _hmm: n7(524),
                _todo: n7(522),
                _error: n7(521),
                errorDev: n7(529),
                errorPublic: n7(545),
                _kapow: n7(268),
                _warn: n7(265),
                warnDev: n7(273),
                warnPublic: n7(289),
                _debug: n7(137),
                debugDev: n7(145),
                _trace: n7(73),
                traceDev: n7(81)
            };

            function n7(t) {
                return Object.freeze({
                    audience: (8 & t) == 8 ? "internal" : (16 & t) == 16 ? "dev" : "public",
                    category: (4 & t) == 4 ? "troubleshooting" : (2 & t) == 2 ? "todo" : "general",
                    level: (512 & t) == 512 ? 512 : (256 & t) == 256 ? 256 : (128 & t) == 128 ? 128 : 64
                })
            }

            function n4(t, e) {
                return ((32 & e) == 32 || ((16 & e) == 16 ? t.dev : (8 & e) == 8 && t.internal)) && t.min <= e
            }
            var n9 = {
                loggingConsoleStyle: !0,
                loggerConsoleStyle: !0,
                includes: Object.freeze({
                    internal: !1,
                    dev: !1,
                    min: 256
                }),
                filtered: function() {},
                include: function() {
                    return {}
                },
                create: null,
                creatExt: null,
                named(t, e, r) {
                    return this.create({
                        names: [...t.names, {
                            name: e,
                            key: r
                        }]
                    })
                },
                style: {
                    bold: void 0,
                    italic: void 0,
                    cssMemo: new Map([
                        ["", ""]
                    ]),
                    collapseOnRE: /[a-z- ]+/g,
                    color: void 0,
                    collapsed(t) {
                        if (t.length < 5) return t;
                        let e = t.replace(this.collapseOnRE, "");
                        return this.cssMemo.has(e) || this.cssMemo.set(e, this.css(t)), e
                    },
                    css(t) {
                        var e, r, n, i;
                        let o = this.cssMemo.get(t);
                        if (o) return o;
                        let s = `color:${null!=(r=null==(e=this.color)?void 0:e.call(this,t))?r:`hsl(${(t.charCodeAt(0)+t.charCodeAt(t.length-1))%360}, 100%, 60%)`}`;
                        return (null == (n = this.bold) ? void 0 : n.test(t)) && (s += ";font-weight:600"), (null == (i = this.italic) ? void 0 : i.test(t)) && (s += ";font-style:italic"), this.cssMemo.set(t, s), s
                    }
                }
            };

            function it(t = console, e = {}) {
                let r = E(j({}, n9), {
                        includes: j({}, n9.includes)
                    }),
                    n = {
                        styled: ii.bind(r, t),
                        noStyle: io.bind(r, t)
                    },
                    i = ir.bind(r);

                function o() {
                    return r.loggingConsoleStyle && r.loggerConsoleStyle ? n.styled : n.noStyle
                }
                return r.create = o(), {
                    configureLogger(t) {
                        var e;
                        "console" === t ? (r.loggerConsoleStyle = n9.loggerConsoleStyle, r.create = o()) : "console" === t.type ? (r.loggerConsoleStyle = null != (e = t.style) ? e : n9.loggerConsoleStyle, r.create = o()) : "keyed" === t.type ? (r.creatExt = e => t.keyed(e.names), r.create = i) : "named" === t.type && (r.creatExt = ie.bind(null, t.named), r.create = i)
                    },
                    configureLogging(t) {
                        var e, n, i, s, a;
                        r.includes.dev = null != (e = t.dev) ? e : n9.includes.dev, r.includes.internal = null != (n = t.internal) ? n : n9.includes.internal, r.includes.min = null != (i = t.min) ? i : n9.includes.min, r.include = null != (s = t.include) ? s : n9.include, r.loggingConsoleStyle = null != (a = t.consoleStyle) ? a : n9.loggingConsoleStyle, r.create = o()
                    },
                    getLogger: () => r.create({
                        names: []
                    })
                }
            }

            function ie(t, e) {
                let r = [];
                for (let {
                        name: t,
                        key: n
                    } of e.names) r.push(null == n ? t : `${t} (${n})`);
                return t(r)
            }

            function ir(t) {
                let e = j(j({}, this.includes), this.include(t)),
                    r = this.filtered,
                    n = this.named.bind(this, t),
                    i = this.creatExt(t),
                    o = n4(e, 524),
                    s = n4(e, 522),
                    a = n4(e, 521),
                    l = n4(e, 529),
                    u = n4(e, 545),
                    c = n4(e, 265),
                    h = n4(e, 268),
                    f = n4(e, 273),
                    d = n4(e, 289),
                    p = n4(e, 137),
                    g = n4(e, 145),
                    m = n4(e, 73),
                    v = n4(e, 81),
                    _ = o ? i.error.bind(i, n6._hmm) : r.bind(t, 524),
                    y = s ? i.error.bind(i, n6._todo) : r.bind(t, 522),
                    b = a ? i.error.bind(i, n6._error) : r.bind(t, 521),
                    w = l ? i.error.bind(i, n6.errorDev) : r.bind(t, 529),
                    T = u ? i.error.bind(i, n6.errorPublic) : r.bind(t, 545),
                    x = h ? i.warn.bind(i, n6._kapow) : r.bind(t, 268),
                    S = c ? i.warn.bind(i, n6._warn) : r.bind(t, 265),
                    P = f ? i.warn.bind(i, n6.warnDev) : r.bind(t, 273),
                    k = d ? i.warn.bind(i, n6.warnPublic) : r.bind(t, 273),
                    O = p ? i.debug.bind(i, n6._debug) : r.bind(t, 137),
                    E = g ? i.debug.bind(i, n6.debugDev) : r.bind(t, 145),
                    A = m ? i.trace.bind(i, n6._trace) : r.bind(t, 73),
                    C = v ? i.trace.bind(i, n6.traceDev) : r.bind(t, 81),
                    D = {
                        _hmm: _,
                        _todo: y,
                        _error: b,
                        errorDev: w,
                        errorPublic: T,
                        _kapow: x,
                        _warn: S,
                        warnDev: P,
                        warnPublic: k,
                        _debug: O,
                        debugDev: E,
                        _trace: A,
                        traceDev: C,
                        lazy: {
                            _hmm: o ? n8(_) : _,
                            _todo: s ? n8(y) : y,
                            _error: a ? n8(b) : b,
                            errorDev: l ? n8(w) : w,
                            errorPublic: u ? n8(T) : T,
                            _kapow: h ? n8(x) : x,
                            _warn: c ? n8(S) : S,
                            warnDev: f ? n8(P) : P,
                            warnPublic: d ? n8(k) : k,
                            _debug: p ? n8(O) : O,
                            debugDev: g ? n8(E) : E,
                            _trace: m ? n8(A) : A,
                            traceDev: v ? n8(C) : C
                        },
                        named: n,
                        utilFor: {
                            internal: () => ({
                                debug: D._debug,
                                error: D._error,
                                warn: D._warn,
                                trace: D._trace,
                                named: (t, e) => D.named(t, e).utilFor.internal()
                            }),
                            dev: () => ({
                                debug: D.debugDev,
                                error: D.errorDev,
                                warn: D.warnDev,
                                trace: D.traceDev,
                                named: (t, e) => D.named(t, e).utilFor.dev()
                            }),
                            public: () => ({
                                error: D.errorPublic,
                                warn: D.warnPublic,
                                debug(t, e) {
                                    D._warn(`(public "debug" filtered out) ${t}`, e)
                                },
                                trace(t, e) {
                                    D._warn(`(public "trace" filtered out) ${t}`, e)
                                },
                                named: (t, e) => D.named(t, e).utilFor.public()
                            })
                        }
                    };
                return D
            }

            function ii(t, e) {
                let r = j(j({}, this.includes), this.include(e)),
                    n = [],
                    i = "";
                for (let t = 0; t < e.names.length; t++) {
                    let {
                        name: r,
                        key: o
                    } = e.names[t];
                    if (i += ` %c${r}`, n.push(this.style.css(r)), null != o) {
                        let t = `%c#${o}`;
                        i += t, n.push(this.style.css(t))
                    }
                }
                let o = this.filtered,
                    s = this.named.bind(this, e),
                    a = [i, ...n];
                return is(o, e, r, t, a, function(t) {
                    let e = t.slice(0);
                    for (let t = 1; t < e.length; t++) e[t] += ";background-color:#e0005a;padding:2px;color:white";
                    return e
                }(a), s)
            }

            function io(t, e) {
                let r = j(j({}, this.includes), this.include(e)),
                    n = "";
                for (let t = 0; t < e.names.length; t++) {
                    let {
                        name: r,
                        key: i
                    } = e.names[t];
                    n += ` ${r}`, null != i && (n += `#${i}`)
                }
                let i = this.filtered,
                    o = this.named.bind(this, e),
                    s = [n];
                return is(i, e, r, t, s, s, o)
            }

            function is(t, e, r, n, i, o, s) {
                let a = n4(r, 524),
                    l = n4(r, 522),
                    u = n4(r, 521),
                    c = n4(r, 529),
                    h = n4(r, 545),
                    f = n4(r, 265),
                    d = n4(r, 268),
                    p = n4(r, 273),
                    g = n4(r, 289),
                    m = n4(r, 137),
                    v = n4(r, 145),
                    _ = n4(r, 73),
                    y = n4(r, 81),
                    b = a ? n.error.bind(n, ...i) : t.bind(e, 524),
                    w = l ? n.error.bind(n, ...i) : t.bind(e, 522),
                    T = u ? n.error.bind(n, ...i) : t.bind(e, 521),
                    x = c ? n.error.bind(n, ...i) : t.bind(e, 529),
                    S = h ? n.error.bind(n, ...i) : t.bind(e, 545),
                    P = d ? n.warn.bind(n, ...o) : t.bind(e, 268),
                    k = f ? n.warn.bind(n, ...i) : t.bind(e, 265),
                    O = p ? n.warn.bind(n, ...i) : t.bind(e, 273),
                    j = g ? n.warn.bind(n, ...i) : t.bind(e, 273),
                    E = m ? n.info.bind(n, ...i) : t.bind(e, 137),
                    A = v ? n.info.bind(n, ...i) : t.bind(e, 145),
                    C = _ ? n.debug.bind(n, ...i) : t.bind(e, 73),
                    D = y ? n.debug.bind(n, ...i) : t.bind(e, 81),
                    M = {
                        _hmm: b,
                        _todo: w,
                        _error: T,
                        errorDev: x,
                        errorPublic: S,
                        _kapow: P,
                        _warn: k,
                        warnDev: O,
                        warnPublic: j,
                        _debug: E,
                        debugDev: A,
                        _trace: C,
                        traceDev: D,
                        lazy: {
                            _hmm: a ? n8(b) : b,
                            _todo: l ? n8(w) : w,
                            _error: u ? n8(T) : T,
                            errorDev: c ? n8(x) : x,
                            errorPublic: h ? n8(S) : S,
                            _kapow: d ? n8(P) : P,
                            _warn: f ? n8(k) : k,
                            warnDev: p ? n8(O) : O,
                            warnPublic: g ? n8(j) : j,
                            _debug: m ? n8(E) : E,
                            debugDev: v ? n8(A) : A,
                            _trace: _ ? n8(C) : C,
                            traceDev: y ? n8(D) : D
                        },
                        named: s,
                        utilFor: {
                            internal: () => ({
                                debug: M._debug,
                                error: M._error,
                                warn: M._warn,
                                trace: M._trace,
                                named: (t, e) => M.named(t, e).utilFor.internal()
                            }),
                            dev: () => ({
                                debug: M.debugDev,
                                error: M.errorDev,
                                warn: M.warnDev,
                                trace: M.traceDev,
                                named: (t, e) => M.named(t, e).utilFor.dev()
                            }),
                            public: () => ({
                                error: M.errorPublic,
                                warn: M.warnPublic,
                                debug(t, e) {
                                    M._warn(`(public "debug" filtered out) ${t}`, e)
                                },
                                trace(t, e) {
                                    M._warn(`(public "trace" filtered out) ${t}`, e)
                                },
                                named: (t, e) => M.named(t, e).utilFor.public()
                            })
                        }
                    };
                return M
            }
            var ia = it(console, {
                _debug: function() {},
                _error: function() {}
            });
            ia.configureLogging({
                dev: !0,
                min: f.TRACE
            });
            var il = ia.getLogger().named("Theatre.js (default logger)").utilFor.dev(),
                iu = new WeakMap;

            function ic(t, e, r) {
                for (let [n, i] of Object.entries(e.props))
                    if (!n1(i)) {
                        let e = [...t, n];
                        r.set(JSON.stringify(e), r.size), ih(e, i, r)
                    }
                for (let [n, i] of Object.entries(e.props))
                    if (n1(i)) {
                        let e = [...t, n];
                        r.set(JSON.stringify(e), r.size), ih(e, i, r)
                    }
            }

            function ih(t, e, r) {
                if ("compound" === e.type) ic(t, e, r);
                else if ("enum" === e.type) throw Error("Enums aren't supported yet");
                else r.set(JSON.stringify(t), r.size)
            }

            function id(t) {
                return "object" == typeof t && null !== t && 0 === Object.keys(t).length
            }
            var ip = class {
                    constructor(t, e, r, n, i) {
                        this.sheetTemplate = t, I(this, "address"), I(this, "type", "Theatre_SheetObjectTemplate"), I(this, "_config"), I(this, "_temp_actions_atom"), I(this, "_cache", new tZ), I(this, "project"), I(this, "pointerToSheetState"), I(this, "pointerToStaticOverrides"), this.address = E(j({}, t.address), {
                            objectKey: e
                        }), this._config = new tJ.Atom(n), this._temp_actions_atom = new tJ.Atom(i), this.project = t.project, this.pointerToSheetState = this.sheetTemplate.project.pointers.historic.sheetsById[this.address.sheetId], this.pointerToStaticOverrides = this.pointerToSheetState.staticOverrides.byObject[this.address.objectKey]
                    }
                    get staticConfig() {
                        return this._config.get()
                    }
                    get configPointer() {
                        return this._config.pointer
                    }
                    get _temp_actions() {
                        return this._temp_actions_atom.get()
                    }
                    get _temp_actionsPointer() {
                        return this._temp_actions_atom.pointer
                    }
                    createInstance(t, e, r) {
                        return this._config.set(r), new n3(t, this, e)
                    }
                    reconfigure(t) {
                        this._config.set(t)
                    }
                    _temp_setActions(t) {
                        this._temp_actions_atom.set(t)
                    }
                    getDefaultValues() {
                        return this._cache.get("getDefaultValues()", () => (0, tJ.prism)(() => {
                            let t = (0, tJ.val)(this.configPointer);
                            return function t(e) {
                                if (t6.has(e)) return t6.get(e);
                                let r = "compound" === e.type ? function(e) {
                                    let r = {};
                                    for (let [n, i] of Object.entries(e.props)) r[n] = t(i);
                                    return r
                                }(e) : "enum" === e.type ? function(e) {
                                    let r = {
                                        $case: e.defaultCase
                                    };
                                    for (let [n, i] of Object.entries(e.cases)) r[n] = t(i);
                                    return r
                                }(e) : e.default;
                                return t6.set(e, r), r
                            }(t)
                        }))
                    }
                    getStaticValues() {
                        return this._cache.get("getStaticValues", () => (0, tJ.prism)(() => {
                            var t;
                            let e = null != (t = (0, tJ.val)(this.pointerToStaticOverrides)) ? t : {},
                                r = (0, tJ.val)(this.configPointer),
                                n = r.deserializeAndSanitize(e) || {};
                            return n
                        }))
                    }
                    getArrayOfValidSequenceTracks() {
                        return this._cache.get("getArrayOfValidSequenceTracks", () => (0, tJ.prism)(() => {
                            let t = this.project.pointers.historic.sheetsById[this.address.sheetId],
                                e = (0, tJ.val)(t.sequence.tracksByObject[this.address.objectKey].trackIdByPropPath);
                            if (!e) return H;
                            let r = [];
                            if (!e) return H;
                            let n = (0, tJ.val)(this.configPointer),
                                i = Object.entries(e);
                            for (let [t, e] of i) {
                                let i = function(t) {
                                    try {
                                        let e = JSON.parse(t);
                                        return e
                                    } catch (e) {
                                        il.warn(`property ${JSON.stringify(t)} cannot be parsed. Skipping.`);
                                        return
                                    }
                                }(t);
                                if (!i) continue;
                                let o = n2(n, i),
                                    s = o && !n1(o);
                                s && r.push({
                                    pathToProp: i,
                                    trackId: e
                                })
                            }
                            let o = function(t) {
                                let e = iu.get(t);
                                if (e) return e;
                                let r = new Map;
                                return iu.set(t, r), ic([], t, r), r
                            }(n);
                            return (r.sort((t, e) => {
                                let r = t.pathToProp,
                                    n = e.pathToProp,
                                    i = o.get(JSON.stringify(r)),
                                    s = o.get(JSON.stringify(n));
                                return i > s ? 1 : -1
                            }), 0 === r.length) ? H : r
                        }))
                    }
                    getMapOfValidSequenceTracks_forStudio() {
                        return this._cache.get("getMapOfValidSequenceTracks_forStudio", () => (0, tJ.prism)(() => {
                            let t = (0, tJ.val)(this.getArrayOfValidSequenceTracks()),
                                e = {};
                            for (let {
                                    pathToProp: i,
                                    trackId: o
                                } of t) {
                                var r, n;
                                r = i, n = o, null == e || t8(e, r, n)
                            }
                            return e
                        }))
                    }
                    getStaticButNotSequencedOverrides() {
                        return this._cache.get("getStaticButNotSequencedOverrides", () => (0, tJ.prism)(() => {
                            let t = (0, tJ.val)(this.getStaticValues()),
                                e = (0, tJ.val)(this.getArrayOfValidSequenceTracks()),
                                r = ne(t, 5);
                            for (let {
                                    pathToProp: t
                                } of e) {
                                nQ(r, t);
                                let e = t.slice(0, -1);
                                for (; e.length > 0;) {
                                    let t = tK(r, e);
                                    if (!id(t)) break;
                                    nQ(r, e), e = e.slice(0, -1)
                                }
                            }
                            if (!id(r)) return r
                        }))
                    }
                    getDefaultsAtPointer(t) {
                        let {
                            path: e
                        } = (0, tJ.getPointerParts)(t), r = this.getDefaultValues().getValue(), n = tK(r, e);
                        return n
                    }
                },
                ig = R(r(7237));
            R(F());
            var im = class extends Error {},
                iv = class extends im {},
                i_ = R(r(7237)),
                iy = R(r(7237)),
                ib = R(r(7237)),
                iw = R(r(7237));

            function iT() {
                let t, e;
                let r = new Promise((r, i) => {
                        t = t => {
                            r(t), n.status = "resolved"
                        }, e = t => {
                            i(t), n.status = "rejected"
                        }
                    }),
                    n = {
                        resolve: t,
                        reject: e,
                        promise: r,
                        status: "pending"
                    };
                return n
            }
            var ix = () => {},
                iS = R(r(7237)),
                iP = class {
                    constructor() {
                        I(this, "_stopPlayCallback", ix), I(this, "_state", new iS.Atom({
                            position: 0,
                            playing: !1
                        })), I(this, "statePointer"), this.statePointer = this._state.pointer
                    }
                    destroy() {}
                    pause() {
                        this._stopPlayCallback(), this.playing = !1, this._stopPlayCallback = ix
                    }
                    gotoPosition(t) {
                        this._updatePositionInState(t)
                    }
                    _updatePositionInState(t) {
                        this._state.setByPointer(t => t.position, t)
                    }
                    getCurrentPosition() {
                        return this._state.get().position
                    }
                    get playing() {
                        return this._state.get().playing
                    }
                    set playing(t) {
                        this._state.setByPointer(t => t.playing, t)
                    }
                    play(t, e, r, n, i) {
                        this.playing && this.pause(), this.playing = !0;
                        let o = e[1] - e[0]; {
                            let t = this.getCurrentPosition();
                            t < e[0] || t > e[1] ? "normal" === n || "alternate" === n ? this._updatePositionInState(e[0]) : ("reverse" === n || "alternateReverse" === n) && this._updatePositionInState(e[1]) : "normal" === n || "alternate" === n ? t === e[1] && this._updatePositionInState(e[0]) : t === e[0] && this._updatePositionInState(e[1])
                        }
                        let s = iT(),
                            a = i.time,
                            l = o * t,
                            u = this.getCurrentPosition() - e[0];
                        ("reverse" === n || "alternateReverse" === n) && (u = e[1] - this.getCurrentPosition());
                        let c = i => {
                            let c = Math.max(i - a, 0),
                                f = Math.min(c / 1e3 * r + u, l);
                            if (f !== l) {
                                let t = Math.floor(f / o),
                                    r = f / o % 1 * o;
                                if ("normal" !== n) {
                                    if ("reverse" === n) r = o - r;
                                    else {
                                        let e = t % 2 == 0;
                                        "alternate" === n ? e || (r = o - r) : e && (r = o - r)
                                    }
                                }
                                this._updatePositionInState(r + e[0]), h()
                            } else {
                                if ("normal" === n) this._updatePositionInState(e[1]);
                                else if ("reverse" === n) this._updatePositionInState(e[0]);
                                else {
                                    let r = (t - 1) % 2 == 0;
                                    "alternate" === n ? r ? this._updatePositionInState(e[1]) : this._updatePositionInState(e[0]) : r ? this._updatePositionInState(e[0]) : this._updatePositionInState(e[1])
                                }
                                this.playing = !1, s.resolve(!0)
                            }
                        };
                        this._stopPlayCallback = () => {
                            i.offThisOrNextTick(c), i.offNextTick(c), this.playing && s.resolve(!1)
                        };
                        let h = () => i.onNextTick(c);
                        return i.onThisOrNextTick(c), s.promise
                    }
                    playDynamicRange(t, e) {
                        this.playing && this.pause(), this.playing = !0;
                        let r = iT(),
                            n = t.keepHot();
                        r.promise.then(n, n);
                        let i = e.time,
                            o = e => {
                                let r = Math.max(e - i, 0);
                                i = e;
                                let n = this.getCurrentPosition(),
                                    o = t.getValue();
                                if (n < o[0] || n > o[1]) this.gotoPosition(o[0]);
                                else {
                                    let t = n + r / 1e3;
                                    t > o[1] && (t = o[0] + (t - o[1])), this.gotoPosition(t)
                                }
                                s()
                            };
                        this._stopPlayCallback = () => {
                            e.offThisOrNextTick(o), e.offNextTick(o), r.resolve(!1)
                        };
                        let s = () => e.onNextTick(o);
                        return e.onThisOrNextTick(o), r.promise
                    }
                },
                ik = R(r(7237)),
                iO = "__TheatreJS_CoreBundle",
                ij = t => (...e) => {
                    var r;
                    switch (t) {
                        case "success":
                        case "info":
                            il.debug(e.slice(0, 2).join("\n"));
                            break;
                        case "warning":
                            il.warn(e.slice(0, 2).join("\n"))
                    }
                    return "undefined" != typeof window ? null == (r = window.__TheatreJS_Notifications) ? void 0 : r.notify[t](...e) : void 0
                },
                iE = {
                    warning: ij("warning"),
                    success: ij("success"),
                    info: ij("info"),
                    error: ij("error")
                };
            "undefined" != typeof window && (window.addEventListener("error", t => {
                iE.error("An error occurred", `<pre>${t.message}</pre>

See **console** for details.`)
            }), window.addEventListener("unhandledrejection", t => {
                iE.error("An error occurred", `<pre>${t.reason}</pre>

See **console** for details.`)
            }));
            var iA = class {
                    constructor(t, e, r) {
                        this._decodedBuffer = t, this._audioContext = e, this._nodeDestination = r, I(this, "_mainGain"), I(this, "_state", new ik.Atom({
                            position: 0,
                            playing: !1
                        })), I(this, "statePointer"), I(this, "_stopPlayCallback", ix), this.statePointer = this._state.pointer, this._mainGain = this._audioContext.createGain(), this._mainGain.connect(this._nodeDestination)
                    }
                    playDynamicRange(t, e) {
                        let r;
                        let n = iT();
                        this._playing && this.pause(), this._playing = !0;
                        let i = () => {
                                null == r || r(), r = this._loopInRange(t.getValue(), e).stop
                            },
                            o = t.onStale(i);
                        return i(), this._stopPlayCallback = () => {
                            null == r || r(), o(), n.resolve(!1)
                        }, n.promise
                    }
                    _loopInRange(t, e) {
                        let r = this.getCurrentPosition(),
                            n = t[1] - t[0];
                        r < t[0] || r > t[1] ? this._updatePositionInState(t[0]) : r === t[1] && this._updatePositionInState(t[0]), r = this.getCurrentPosition();
                        let i = this._audioContext.createBufferSource();
                        i.buffer = this._decodedBuffer, i.connect(this._mainGain), i.playbackRate.value = 1, i.loop = !0, i.loopStart = t[0], i.loopEnd = t[1];
                        let o = e.time,
                            s = r - t[0];
                        i.start(0, r);
                        let a = e => {
                                let r = Math.max(e - o, 0);
                                this._updatePositionInState((r / 1e3 * 1 + s) / n % 1 * n + t[0]), l()
                            },
                            l = () => e.onNextTick(a);
                        return e.onThisOrNextTick(a), {
                            stop: () => {
                                i.stop(), i.disconnect(), e.offThisOrNextTick(a), e.offNextTick(a)
                            }
                        }
                    }
                    get _playing() {
                        return this._state.get().playing
                    }
                    set _playing(t) {
                        this._state.setByPointer(t => t.playing, t)
                    }
                    destroy() {}
                    pause() {
                        this._stopPlayCallback(), this._playing = !1, this._stopPlayCallback = ix
                    }
                    gotoPosition(t) {
                        this._updatePositionInState(t)
                    }
                    _updatePositionInState(t) {
                        this._state.reduce(e => E(j({}, e), {
                            position: t
                        }))
                    }
                    getCurrentPosition() {
                        return this._state.get().position
                    }
                    play(t, e, r, n, i) {
                        this._playing && this.pause(), this._playing = !0;
                        let o = this.getCurrentPosition(),
                            s = e[1] - e[0];
                        if ("normal" !== n) throw new iv(`Audio-controlled sequences can only be played in the "normal" direction. '${n}' given.`);
                        o < e[0] || o > e[1] ? this._updatePositionInState(e[0]) : o === e[1] && this._updatePositionInState(e[0]), o = this.getCurrentPosition();
                        let a = iT(),
                            l = this._audioContext.createBufferSource();
                        l.buffer = this._decodedBuffer, l.connect(this._mainGain), l.playbackRate.value = r, t > 1e3 && (iE.warning("Can't play sequences with audio more than 1000 times", `The sequence will still play, but only 1000 times. The \`iterationCount: ${t}\` provided to \`sequence.play()\`
is too high for a sequence with audio.

To fix this, either set \`iterationCount\` to a lower value, or remove the audio from the sequence.`, [{
                            url: "https://www.theatrejs.com/docs/latest/manual/audio",
                            title: "Using Audio"
                        }, {
                            url: "https://www.theatrejs.com/docs/latest/api/core#sequence.attachaudio",
                            title: "Audio API"
                        }]), t = 1e3), t > 1 && (l.loop = !0, l.loopStart = e[0], l.loopEnd = e[1]);
                        let u = i.time,
                            c = o - e[0],
                            h = s * t;
                        l.start(0, o, h - c);
                        let f = t => {
                                let n = Math.max(t - u, 0),
                                    i = Math.min(n / 1e3 * r + c, h);
                                i !== h ? (this._updatePositionInState(i / s % 1 * s + e[0]), p()) : (this._updatePositionInState(e[1]), this._playing = !1, d(), a.resolve(!0))
                            },
                            d = () => {
                                l.stop(), l.disconnect()
                            };
                        this._stopPlayCallback = () => {
                            d(), i.offThisOrNextTick(f), i.offNextTick(f), this._playing && a.resolve(!1)
                        };
                        let p = () => i.onNextTick(f);
                        return i.onThisOrNextTick(f), a.promise
                    }
                },
                iC = R(r(7237)),
                iD = 0;

            function iM(t) {
                var e;
                let r = new iC.Ticker({
                        onActive() {
                            var e;
                            null == (e = null == t ? void 0 : t.start) || e.call(t)
                        },
                        onDormant() {
                            var e;
                            null == (e = null == t ? void 0 : t.stop) || e.call(t)
                        }
                    }),
                    n = {
                        tick: t => {
                            r.tick(t)
                        },
                        id: iD++,
                        name: null != (e = null == t ? void 0 : t.name) ? e : `CustomRafDriver-${iD}`,
                        type: "Theatre_RafDriver_PublicAPI"
                    },
                    i = {
                        type: "Theatre_RafDriver_PrivateAPI",
                        publicApi: n,
                        ticker: r,
                        start: null == t ? void 0 : t.start,
                        stop: null == t ? void 0 : t.stop
                    };
                return W(n, i), n
            }

            function iR() {
                return p || function(t) {
                    if (p) throw Error("`setCoreRafDriver()` is already called.");
                    let e = q(t);
                    p = e
                }(function() {
                    let t = null,
                        e = iM({
                            name: "DefaultCoreRafDriver",
                            start: () => {
                                if ("undefined" != typeof window) {
                                    let r = n => {
                                        e.tick(n), t = window.requestAnimationFrame(r)
                                    };
                                    t = window.requestAnimationFrame(r)
                                } else e.tick(0), setTimeout(() => e.tick(1), 0)
                            },
                            stop: () => {
                                "undefined" != typeof window && null !== t && window.cancelAnimationFrame(t)
                            }
                        });
                    return e
                }()), p
            }

            function iI() {
                return iR().ticker
            }
            var iz = class {
                get type() {
                    return "Theatre_Sequence_PublicAPI"
                }
                constructor(t) {
                    W(this, t)
                }
                play(t) {
                    let e = q(this);
                    if (e._project.isReady()) {
                        let r = (null == t ? void 0 : t.rafDriver) ? q(t.rafDriver).ticker : iI();
                        return e.play(null != t ? t : {}, r)
                    } {
                        let t = iT();
                        return t.resolve(!0), t.promise
                    }
                }
                pause() {
                    q(this).pause()
                }
                get position() {
                    return q(this).position
                }
                set position(t) {
                    q(this).position = t
                }
                async attachAudio(t) {
                    let {
                        audioContext: e,
                        destinationNode: r,
                        decodedBuffer: n,
                        gainNode: i
                    } = await iL(t), o = new iA(n, e, i);
                    return q(this).replacePlaybackController(o), {
                        audioContext: e,
                        destinationNode: r,
                        decodedBuffer: n,
                        gainNode: i
                    }
                }
                get pointer() {
                    return q(this).pointer
                }
            };
            async function iL(t) {
                async function e() {
                    let e, n, i;
                    if (t.source instanceof AudioBuffer) return t.source;
                    let o = iT();
                    if ("string" != typeof t.source) throw Error("Error validating arguments to sequence.attachAudio(). args.source must either be a string or an instance of AudioBuffer.");
                    try {
                        e = await fetch(t.source)
                    } catch (e) {
                        throw console.error(e), Error(`Could not fetch '${t.source}'. Network error logged above.`)
                    }
                    try {
                        n = await e.arrayBuffer()
                    } catch (e) {
                        throw console.error(e), Error(`Could not read '${t.source}' as an arrayBuffer.`)
                    }
                    let s = await r;
                    s.decodeAudioData(n, o.resolve, o.reject);
                    try {
                        i = await o.promise
                    } catch (e) {
                        throw console.error(e), Error(`Could not decode ${t.source} as an audio file.`)
                    }
                    return i
                }
                let r = function() {
                        if (t.audioContext) return Promise.resolve(t.audioContext);
                        let e = new AudioContext;
                        return "running" === e.state || "undefined" == typeof window ? Promise.resolve(e) : new Promise(t => {
                            let r = () => {
                                    e.resume()
                                },
                                n = ["mousedown", "keydown", "touchstart"],
                                i = {
                                    capture: !0,
                                    passive: !1
                                };
                            n.forEach(t => {
                                window.addEventListener(t, r, i)
                            }), e.addEventListener("statechange", () => {
                                "running" === e.state && (n.forEach(t => {
                                    window.removeEventListener(t, r, i)
                                }), t(e))
                            })
                        })
                    }(),
                    n = e(),
                    [i, o] = await Promise.all([r, n]),
                    s = t.destinationNode || i.destination,
                    a = i.createGain();
                return a.connect(s), {
                    audioContext: i,
                    decodedBuffer: o,
                    gainNode: a,
                    destinationNode: s
                }
            }
            var iF = class {
                    constructor(t, e, r, n, i) {
                        this._project = t, this._sheet = e, this._lengthD = r, this._subUnitsPerUnitD = n, I(this, "address"), I(this, "publicApi"), I(this, "_playbackControllerBox"), I(this, "_prismOfStatePointer"), I(this, "_positionD"), I(this, "_positionFormatterD"), I(this, "_playableRangeD"), I(this, "pointer", (0, ib.pointer)({
                            root: this,
                            path: []
                        })), I(this, "$$isPointerToPrismProvider", !0), I(this, "_logger"), I(this, "closestGridPosition", t => {
                            let e = this.subUnitsPerUnit,
                                r = 1 / e;
                            return parseFloat((Math.round(t / r) * r).toFixed(3))
                        }), this._logger = t._logger.named("Sheet", e.address.sheetId).named("Instance", e.address.sheetInstanceId), this.address = E(j({}, this._sheet.address), {
                            sequenceName: "default"
                        }), this.publicApi = new iz(this), this._playbackControllerBox = new iy.Atom(null != i ? i : new iP), this._prismOfStatePointer = (0, iw.prism)(() => this._playbackControllerBox.prism.getValue().statePointer), this._positionD = (0, iw.prism)(() => {
                            let t = this._prismOfStatePointer.getValue();
                            return (0, iw.val)(t.position)
                        }), this._positionFormatterD = (0, iw.prism)(() => {
                            let t = (0, iw.val)(this._subUnitsPerUnitD);
                            return new iN(t)
                        })
                    }
                    pointerToPrism(t) {
                        let {
                            path: e
                        } = (0, i_.getPointerParts)(t);
                        if (0 === e.length) return (0, iw.prism)(() => ({
                            length: (0, iw.val)(this.pointer.length),
                            playing: (0, iw.val)(this.pointer.playing),
                            position: (0, iw.val)(this.pointer.position)
                        }));
                        if (e.length > 1) return (0, iw.prism)(() => void 0);
                        let [r] = e;
                        return "length" === r ? this._lengthD : "position" === r ? this._positionD : "playing" === r ? (0, iw.prism)(() => (0, iw.val)(this._prismOfStatePointer.getValue().playing)) : (0, iw.prism)(() => void 0)
                    }
                    get positionFormatter() {
                        return this._positionFormatterD.getValue()
                    }
                    get prismOfStatePointer() {
                        return this._prismOfStatePointer
                    }
                    get length() {
                        return this._lengthD.getValue()
                    }
                    get positionPrism() {
                        return this._positionD
                    }
                    get position() {
                        return this._playbackControllerBox.get().getCurrentPosition()
                    }
                    get subUnitsPerUnit() {
                        return this._subUnitsPerUnitD.getValue()
                    }
                    get positionSnappedToGrid() {
                        return this.closestGridPosition(this.position)
                    }
                    set position(t) {
                        let e = t;
                        this.pause(), e > this.length && (e = this.length);
                        let r = this.length;
                        this._playbackControllerBox.get().gotoPosition(e > r ? r : e)
                    }
                    getDurationCold() {
                        return this._lengthD.getValue()
                    }
                    get playing() {
                        return (0, iw.val)(this._playbackControllerBox.get().statePointer.playing)
                    }
                    _makeRangeFromSequenceTemplate() {
                        return (0, iw.prism)(() => [0, (0, iw.val)(this._lengthD)])
                    }
                    playDynamicRange(t, e) {
                        return this._playbackControllerBox.get().playDynamicRange(t, e)
                    }
                    async play(t, e) {
                        let r = this.length,
                            n = t && t.range ? t.range : [0, r],
                            i = t && "number" == typeof t.iterationCount ? t.iterationCount : 1,
                            o = t && void 0 !== t.rate ? t.rate : 1,
                            s = t && t.direction ? t.direction : "normal";
                        return await this._play(i, [n[0], n[1]], o, s, e)
                    }
                    _play(t, e, r, n, i) {
                        return this._playbackControllerBox.get().play(t, e, r, n, i)
                    }
                    pause() {
                        this._playbackControllerBox.get().pause()
                    }
                    replacePlaybackController(t) {
                        this.pause();
                        let e = this._playbackControllerBox.get();
                        this._playbackControllerBox.set(t);
                        let r = e.getCurrentPosition();
                        e.destroy(), t.gotoPosition(r)
                    }
                },
                iN = class {
                    constructor(t) {
                        this._fps = t
                    }
                    formatSubUnitForGrid(t) {
                        let e = 1 / this._fps,
                            r = Math.round(t % 1 / e);
                        return r + "f"
                    }
                    formatFullUnitForGrid(t) {
                        let e = t,
                            r = "";
                        if (e >= iV) {
                            let t = Math.floor(e / iV);
                            r += t + "h", e %= iV
                        }
                        if (e >= i$) {
                            let t = Math.floor(e / i$);
                            r += t + "m", e %= i$
                        }
                        if (e >= iB) {
                            let t = Math.floor(e / iB);
                            r += t + "s", e %= iB
                        }
                        let n = 1 / this._fps;
                        if (e >= n) {
                            let t = Math.floor(e / n);
                            r += t + "f", e %= n
                        }
                        return 0 === r.length ? "0s" : r
                    }
                    formatForPlayhead(t) {
                        let e = t,
                            r = "";
                        if (e >= iV) {
                            let t = Math.floor(e / iV);
                            r += nJ(t.toString(), 2, "0") + "h", e %= iV
                        }
                        if (e >= i$) {
                            let t = Math.floor(e / i$);
                            r += nJ(t.toString(), 2, "0") + "m", e %= i$
                        } else r.length > 0 && (r += "00m");
                        if (e >= iB) {
                            let t = Math.floor(e / iB);
                            r += nJ(t.toString(), 2, "0") + "s", e %= iB
                        } else r += "00s";
                        let n = 1 / this._fps;
                        if (e >= n) {
                            let t = Math.round(e / n);
                            r += nJ(t.toString(), 2, "0") + "f", e %= n
                        } else e / n > .98 ? (r += nJ("1", 2, "0") + "f", e %= n) : r += "00f";
                        return 0 === r.length ? "00s00f" : r
                    }
                    formatBasic(t) {
                        return t.toFixed(2) + "s"
                    }
                },
                iB = 1,
                i$ = 60,
                iV = 3600,
                iU = {};

            function iq(t, e) {
                return t.length <= e ? t : t.substr(0, e - 3) + "..."
            }
            D(iU, {
                boolean: () => i4,
                compound: () => iJ,
                image: () => iQ,
                number: () => i1,
                rgba: () => i8,
                string: () => oe,
                stringLiteral: () => on
            });
            var iW = t => {
                if ("string" == typeof t) return `string("${iq(t,10)}")`;
                if ("number" == typeof t) return `number(${iq(String(t),10)})`;
                if (null === t) return "null";
                if (void 0 === t) return "undefined";
                if ("boolean" == typeof t) return String(t);
                if (Array.isArray(t)) return "array";
                if ("object" == typeof t) return "object";
                else return "unknown"
            };

            function iH(t) {
                return E(j({}, t), {
                    toString() {
                        return function(t, {
                            removeAlphaIfOpaque: e = !1
                        } = {}) {
                            let r = (255 * t.a | 256).toString(16).slice(1),
                                n = (255 * t.r | 256).toString(16).slice(1) + (255 * t.g | 256).toString(16).slice(1) + (255 * t.b | 256).toString(16).slice(1) + (e && "ff" === r ? "" : r);
                            return `#${n}`
                        }(this, {
                            removeAlphaIfOpaque: !0
                        })
                    }
                })
            }

            function iY(t) {
                function e(t) {
                    return t >= .04045 ? ((t + .055) / 1.055) ** 2.4 : t / 12.92
                }
                return {
                    r: e(t.r),
                    g: e(t.g),
                    b: e(t.b),
                    a: t.a
                }
            }

            function iX(t) {
                let e = .4122214708 * t.r + .5363325363 * t.g + .0514459929 * t.b,
                    r = .2119034982 * t.r + .6806995451 * t.g + .1073969566 * t.b,
                    n = .0883024619 * t.r + .2817188376 * t.g + .6299787005 * t.b,
                    i = Math.cbrt(e),
                    o = Math.cbrt(r),
                    s = Math.cbrt(n);
                return {
                    L: .2104542553 * i + .793617785 * o - .0040720468 * s,
                    a: 1.9779984951 * i - 2.428592205 * o + .4505937099 * s,
                    b: .0259040371 * i + .7827717662 * o - .808675766 * s,
                    alpha: t.a
                }
            }
            var iG = Symbol("TheatrePropType_Basic");

            function iK(t) {
                return "object" == typeof t && !!t && "TheatrePropType" === t[iG]
            }
            var iZ = (t, e) => {},
                iJ = (t, e = {}) => {
                    iZ("t.compound(props, opts)", e);
                    let r = function(t) {
                            let e = {};
                            for (let r of Object.keys(t)) {
                                let n = t[r];
                                iK(n) ? e[r] = n : e[r] = function(t) {
                                    if ("number" == typeof t) return i1(t);
                                    if ("boolean" == typeof t) return i4(t);
                                    if ("string" == typeof t) return oe(t);
                                    if ("object" == typeof t && t) {
                                        if (iK(t)) return t;
                                        if (rt(t)) return iJ(t)
                                    }
                                    throw new iv(`This value is not a valid prop type: ${iW(t)}`)
                                }(n)
                            }
                            return e
                        }(t),
                        n = new WeakMap,
                        i = {
                            type: "compound",
                            props: r,
                            valueType: null,
                            [iG]: "TheatrePropType",
                            label: e.label,
                            default: nM(r, t => t.default),
                            deserializeAndSanitize: t => {
                                if ("object" != typeof t || !t) return;
                                if (n.has(t)) return n.get(t);
                                let e = {},
                                    i = !1;
                                for (let [n, o] of Object.entries(r))
                                    if (Object.prototype.hasOwnProperty.call(t, n)) {
                                        let r = o.deserializeAndSanitize(t[n]);
                                        null != r && (i = !0, e[n] = r)
                                    }
                                if (n.set(t, e), i) return e
                            }
                        };
                    return i
                },
                iQ = (t, e = {}) => ({
                    type: "image",
                    default: {
                        type: "image",
                        id: t
                    },
                    valueType: null,
                    [iG]: "TheatrePropType",
                    label: e.label,
                    interpolate: (t, r, n) => {
                        var i;
                        let o = null != (i = e.interpolate) ? i : ot;
                        return {
                            type: "image",
                            id: o(t.id, r.id, n)
                        }
                    },
                    deserializeAndSanitize: i0
                }),
                i0 = t => {
                    if (!t) return;
                    let e = !0;
                    if ("string" == typeof t.id || [null, void 0].includes(t.id) || (e = !1), "image" !== t.type && (e = !1), e) return t
                },
                i1 = (t, e = {}) => {
                    var r;
                    return E(j({
                        type: "number",
                        valueType: 0,
                        default: t,
                        [iG]: "TheatrePropType"
                    }, e || {}), {
                        label: e.label,
                        nudgeFn: null != (r = e.nudgeFn) ? r : oi,
                        nudgeMultiplier: "number" == typeof e.nudgeMultiplier ? e.nudgeMultiplier : void 0,
                        interpolate: i3,
                        deserializeAndSanitize: i2(e.range)
                    })
                },
                i2 = t => t ? e => {
                    if ("number" == typeof e && isFinite(e)) return rg(e, t[0], t[1])
                } : i5,
                i5 = t => "number" == typeof t && isFinite(t) ? t : void 0,
                i3 = (t, e, r) => t + r * (e - t),
                i8 = (t = {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 1
                }, e = {}) => {
                    let r = {};
                    for (let e of ["r", "g", "b", "a"]) r[e] = Math.min(Math.max(t[e], 0), 1);
                    return {
                        type: "rgba",
                        valueType: null,
                        default: iH(r),
                        [iG]: "TheatrePropType",
                        label: e.label,
                        interpolate: i7,
                        deserializeAndSanitize: i6
                    }
                },
                i6 = t => {
                    if (!t) return;
                    let e = !0;
                    for (let r of ["r", "g", "b", "a"]) Object.prototype.hasOwnProperty.call(t, r) && "number" == typeof t[r] || (e = !1);
                    if (!e) return;
                    let r = {};
                    for (let e of ["r", "g", "b", "a"]) r[e] = Math.min(Math.max(t[e], 0), 1);
                    return iH(r)
                },
                i7 = (t, e, r) => {
                    let n, i, o, s, a, l;
                    let u = iX(iY(t)),
                        c = iX(iY(e)),
                        h = {
                            L: (1 - r) * u.L + r * c.L,
                            a: (1 - r) * u.a + r * c.a,
                            b: (1 - r) * u.b + r * c.b,
                            alpha: (1 - r) * u.alpha + r * c.alpha
                        },
                        f = function(t) {
                            function e(t) {
                                return t >= .0031308 ? 1.055 * t ** (1 / 2.4) - .055 : 12.92 * t
                            }
                            return Object.fromEntries(Object.entries({
                                r: e(t.r),
                                g: e(t.g),
                                b: e(t.b),
                                a: t.a
                            }).map(([t, e]) => [t, rg(e, 0, 1)]))
                        }((n = h.L + .3963377774 * h.a + .2158037573 * h.b, i = h.L - .1055613458 * h.a - .0638541728 * h.b, o = h.L - .0894841775 * h.a - 1.291485548 * h.b, {
                            r: 4.0767416621 * (s = n * n * n) - 3.3077115913 * (a = i * i * i) + .2309699292 * (l = o * o * o),
                            g: -1.2684380046 * s + 2.6097574011 * a - .3413193965 * l,
                            b: -.0041960863 * s - .7034186147 * a + 1.707614701 * l,
                            a: h.alpha
                        }));
                    return iH(f)
                },
                i4 = (t, e = {}) => {
                    var r;
                    return {
                        type: "boolean",
                        default: t,
                        valueType: null,
                        [iG]: "TheatrePropType",
                        label: e.label,
                        interpolate: null != (r = e.interpolate) ? r : ot,
                        deserializeAndSanitize: i9
                    }
                },
                i9 = t => "boolean" == typeof t ? t : void 0;

            function ot(t) {
                return t
            }
            var oe = (t, e = {}) => {
                var r;
                return {
                    type: "string",
                    default: t,
                    valueType: null,
                    [iG]: "TheatrePropType",
                    label: e.label,
                    interpolate: null != (r = e.interpolate) ? r : ot,
                    deserializeAndSanitize: or
                }
            };

            function or(t) {
                return "string" == typeof t ? t : void 0
            }

            function on(t, e, r = {}) {
                var n, i;
                return {
                    type: "stringLiteral",
                    default: t,
                    valuesAndLabels: j({}, e),
                    [iG]: "TheatrePropType",
                    valueType: null,
                    as: null != (n = r.as) ? n : "menu",
                    label: r.label,
                    interpolate: null != (i = r.interpolate) ? i : ot,
                    deserializeAndSanitize(t) {
                        if ("string" == typeof t) return Object.prototype.hasOwnProperty.call(e, t) ? t : void 0
                    }
                }
            }
            var oi = ({
                    config: t,
                    deltaX: e,
                    deltaFraction: r,
                    magnitude: n
                }) => {
                    var i;
                    let {
                        range: o
                    } = t;
                    return t.nudgeMultiplier || !o || o.includes(1 / 0) || o.includes(-1 / 0) ? e * n * (null != (i = t.nudgeMultiplier) ? i : 1) : r * (o[1] - o[0]) * n
                },
                oo = t => t.replace(/^[\s\/]*/, "").replace(/[\s\/]*$/, "").replace(/\s*\/\s*/g, " / ");

            function os(t, e) {
                let r = oo(t);
                return r
            }
            R(N()), new WeakMap;
            var oa = class {
                    get type() {
                        return "Theatre_Sheet_PublicAPI"
                    }
                    constructor(t) {
                        W(this, t)
                    }
                    object(t, e, r) {
                        let n = q(this),
                            i = os(t, "sheet.object"),
                            o = n.getObject(i),
                            s = null == r ? void 0 : r.__actions__THIS_API_IS_UNSTABLE_AND_WILL_CHANGE_IN_THE_NEXT_VERSION;
                        if (o) return s && o.template._temp_setActions(s), o.publicApi; {
                            let t = iJ(e),
                                r = n.createObject(i, null, t, s);
                            return r.publicApi
                        }
                    }
                    get sequence() {
                        return q(this).getSequence().publicApi
                    }
                    get project() {
                        return q(this).project.publicApi
                    }
                    get address() {
                        return j({}, q(this).address)
                    }
                    detachObject(t) {
                        let e = q(this),
                            r = os(t, `sheet.deleteObject("${t}")`),
                            n = e.getObject(r);
                        if (!n) {
                            iE.warning(`Couldn't delete object "${r}"`, `There is no object with key "${r}".

To fix this, make sure you are calling \`sheet.deleteObject("${r}")\` with the correct key.`), console.warn(`Object key "${r}" does not exist.`);
                            return
                        }
                        e.deleteObject(r)
                    }
                },
                ol = R(r(7237)),
                ou = class {
                    constructor(t, e) {
                        this.template = t, this.instanceId = e, I(this, "_objects", new ol.Atom({})), I(this, "_sequence"), I(this, "address"), I(this, "publicApi"), I(this, "project"), I(this, "objectsP", this._objects.pointer), I(this, "type", "Theatre_Sheet"), I(this, "_logger"), this._logger = t.project._logger.named("Sheet", e), this._logger._trace("creating sheet"), this.project = t.project, this.address = E(j({}, t.address), {
                            sheetInstanceId: this.instanceId
                        }), this.publicApi = new oa(this)
                    }
                    createObject(t, e, r, n = {}) {
                        let i = this.template.getObjectTemplate(t, e, r, n),
                            o = i.createInstance(this, e, r);
                        return this._objects.setByPointer(e => e[t], o), o
                    }
                    getObject(t) {
                        return this._objects.get()[t]
                    }
                    deleteObject(t) {
                        this._objects.reduce(e => {
                            let r = j({}, e);
                            return delete r[t], r
                        })
                    }
                    getSequence() {
                        if (!this._sequence) {
                            let t = (0, ol.prism)(() => {
                                    let t = (0, ol.val)(this.project.pointers.historic.sheetsById[this.address.sheetId].sequence.length);
                                    return oc(t)
                                }),
                                e = (0, ol.prism)(() => {
                                    let t = (0, ol.val)(this.project.pointers.historic.sheetsById[this.address.sheetId].sequence.subUnitsPerUnit);
                                    return oh(t)
                                });
                            this._sequence = new iF(this.template.project, this, t, e)
                        }
                        return this._sequence
                    }
                },
                oc = t => "number" == typeof t && isFinite(t) && t > 0 ? t : 10,
                oh = t => {
                    var e;
                    return "number" == typeof t && "number" == typeof(e = t) && e == ev(e) && t >= 1 && t <= 1e3 ? t : 30
                },
                of = class {
                    constructor(t, e) {
                        this.project = t, I(this, "type", "Theatre_SheetTemplate"), I(this, "address"), I(this, "_instances", new ig.Atom({})), I(this, "instancesP", this._instances.pointer), I(this, "_objectTemplates", new ig.Atom({})), I(this, "objectTemplatesP", this._objectTemplates.pointer), this.address = E(j({}, t.address), {
                            sheetId: e
                        })
                    }
                    getInstance(t) {
                        let e = this._instances.get()[t];
                        return e || (e = new ou(this, t), this._instances.setByPointer(e => e[t], e)), e
                    }
                    getObjectTemplate(t, e, r, n) {
                        let i = this._objectTemplates.get()[t];
                        return i || (i = new ip(this, t, e, r, n), this._objectTemplates.setByPointer(e => e[t], i)), i
                    }
                },
                od = R(r(7237)),
                op = R(r(7237)),
                og = t => new Promise(e => setTimeout(e, t));

            function om(t) {
                for (var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) r[n - 1] = arguments[n];
                throw Error("[Immer] minified error nr: " + t + (r.length ? " " + r.map(function(t) {
                    return "'" + t + "'"
                }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf")
            }

            function ov(t) {
                return !!t && !!t[oJ]
            }

            function o_(t) {
                return !!t && (function(t) {
                    if (!t || "object" != typeof t) return !1;
                    var e = Object.getPrototypeOf(t);
                    if (null === e) return !0;
                    var r = Object.hasOwnProperty.call(e, "constructor") && e.constructor;
                    return r === Object || "function" == typeof r && Function.toString.call(r) === oQ
                }(t) || Array.isArray(t) || !!t[oZ] || !!t.constructor[oZ] || ox(t) || oS(t))
            }

            function oy(t, e, r) {
                void 0 === r && (r = !1), 0 === ob(t) ? (r ? Object.keys : o0)(t).forEach(function(n) {
                    r && "symbol" == typeof n || e(n, t[n], t)
                }) : t.forEach(function(r, n) {
                    return e(n, r, t)
                })
            }

            function ob(t) {
                var e = t[oJ];
                return e ? e.i > 3 ? e.i - 4 : e.i : Array.isArray(t) ? 1 : ox(t) ? 2 : oS(t) ? 3 : 0
            }

            function ow(t, e) {
                return 2 === ob(t) ? t.has(e) : Object.prototype.hasOwnProperty.call(t, e)
            }

            function oT(t, e, r) {
                var n = ob(t);
                2 === n ? t.set(e, r) : 3 === n ? (t.delete(e), t.add(r)) : t[e] = r
            }

            function ox(t) {
                return oY && t instanceof Map
            }

            function oS(t) {
                return oX && t instanceof Set
            }

            function oP(t) {
                return t.o || t.t
            }

            function ok(t) {
                if (Array.isArray(t)) return Array.prototype.slice.call(t);
                var e = o1(t);
                delete e[oJ];
                for (var r = o0(e), n = 0; n < r.length; n++) {
                    var i = r[n],
                        o = e[i];
                    !1 === o.writable && (o.writable = !0, o.configurable = !0), (o.get || o.set) && (e[i] = {
                        configurable: !0,
                        writable: !0,
                        enumerable: o.enumerable,
                        value: t[i]
                    })
                }
                return Object.create(Object.getPrototypeOf(t), e)
            }

            function oO(t, e) {
                return void 0 === e && (e = !1), oE(t) || ov(t) || !o_(t) || (ob(t) > 1 && (t.set = t.add = t.clear = t.delete = oj), Object.freeze(t), e && oy(t, function(t, e) {
                    return oO(e, !0)
                }, !0)), t
            }

            function oj() {
                om(2)
            }

            function oE(t) {
                return null == t || "object" != typeof t || Object.isFrozen(t)
            }

            function oA(t) {
                var e = o2[t];
                return e || om(18, t), e
            }

            function oC(t, e) {
                e && (oA("Patches"), t.u = [], t.s = [], t.v = e)
            }

            function oD(t) {
                oM(t), t.p.forEach(oI), t.p = null
            }

            function oM(t) {
                t === m && (m = t.l)
            }

            function oR(t) {
                return m = {
                    p: [],
                    l: m,
                    h: t,
                    m: !0,
                    _: 0
                }
            }

            function oI(t) {
                var e = t[oJ];
                0 === e.i || 1 === e.i ? e.j() : e.O = !0
            }

            function oz(t, e) {
                e._ = e.p.length;
                var r = e.p[0],
                    n = void 0 !== t && t !== r;
                return e.h.g || oA("ES5").S(e, t, n), n ? (r[oJ].P && (oD(e), om(4)), o_(t) && (t = oL(e, t), e.l || oN(e, t)), e.u && oA("Patches").M(r[oJ], t, e.u, e.s)) : t = oL(e, r, []), oD(e), e.u && e.v(e.u, e.s), t !== oK ? t : void 0
            }

            function oL(t, e, r) {
                if (oE(e)) return e;
                var n = e[oJ];
                if (!n) return oy(e, function(i, o) {
                    return oF(t, n, e, i, o, r)
                }, !0), e;
                if (n.A !== t) return e;
                if (!n.P) return oN(t, n.t, !0), n.t;
                if (!n.I) {
                    n.I = !0, n.A._--;
                    var i = 4 === n.i || 5 === n.i ? n.o = ok(n.k) : n.o;
                    oy(3 === n.i ? new Set(i) : i, function(e, o) {
                        return oF(t, n, i, e, o, r)
                    }), oN(t, i, !1), r && t.u && oA("Patches").R(n, r, t.u, t.s)
                }
                return n.o
            }

            function oF(t, e, r, n, i, o) {
                if (ov(i)) {
                    var s = oL(t, i, o && e && 3 !== e.i && !ow(e.D, n) ? o.concat(n) : void 0);
                    if (oT(r, n, s), !ov(s)) return;
                    t.m = !1
                }
                if (o_(i) && !oE(i)) {
                    if (!t.h.F && t._ < 1) return;
                    oL(t, i), e && e.A.l || oN(t, i)
                }
            }

            function oN(t, e, r) {
                void 0 === r && (r = !1), t.h.F && t.m && oO(e, r)
            }

            function oB(t, e) {
                var r = t[oJ];
                return (r ? oP(r) : t)[e]
            }

            function o$(t, e) {
                if (e in t)
                    for (var r = Object.getPrototypeOf(t); r;) {
                        var n = Object.getOwnPropertyDescriptor(r, e);
                        if (n) return n;
                        r = Object.getPrototypeOf(r)
                    }
            }

            function oV(t) {
                t.P || (t.P = !0, t.l && oV(t.l))
            }

            function oU(t) {
                t.o || (t.o = ok(t.t))
            }

            function oq(t, e, r) {
                var n, i, o, s, a, l, u, c = ox(e) ? oA("MapSet").N(e, r) : oS(e) ? oA("MapSet").T(e, r) : t.g ? (o = i = {
                    i: (n = Array.isArray(e)) ? 1 : 0,
                    A: r ? r.A : m,
                    P: !1,
                    I: !1,
                    D: {},
                    l: r,
                    t: e,
                    k: null,
                    o: null,
                    j: null,
                    C: !1
                }, s = o5, n && (o = [i], s = o3), l = (a = Proxy.revocable(o, s)).revoke, u = a.proxy, i.k = u, i.j = l, u) : oA("ES5").J(e, r);
                return (r ? r.A : m).p.push(c), c
            }

            function oW(t, e) {
                switch (e) {
                    case 2:
                        return new Map(t);
                    case 3:
                        return Array.from(t)
                }
                return ok(t)
            }
            var oH = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x"),
                oY = "undefined" != typeof Map,
                oX = "undefined" != typeof Set,
                oG = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect,
                oK = oH ? Symbol.for("immer-nothing") : ((g = {})["immer-nothing"] = !0, g),
                oZ = oH ? Symbol.for("immer-draftable") : "__$immer_draftable",
                oJ = oH ? Symbol.for("immer-state") : "__$immer_state",
                oQ = "" + Object.prototype.constructor,
                o0 = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function(t) {
                    return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))
                } : Object.getOwnPropertyNames,
                o1 = Object.getOwnPropertyDescriptors || function(t) {
                    var e = {};
                    return o0(t).forEach(function(r) {
                        e[r] = Object.getOwnPropertyDescriptor(t, r)
                    }), e
                },
                o2 = {},
                o5 = {
                    get: function(t, e) {
                        if (e === oJ) return t;
                        var r, n, i = oP(t);
                        if (!ow(i, e)) return (n = o$(i, e)) ? "value" in n ? n.value : null === (r = n.get) || void 0 === r ? void 0 : r.call(t.k) : void 0;
                        var o = i[e];
                        return t.I || !o_(o) ? o : o === oB(t.t, e) ? (oU(t), t.o[e] = oq(t.A.h, o, t)) : o
                    },
                    has: function(t, e) {
                        return e in oP(t)
                    },
                    ownKeys: function(t) {
                        return Reflect.ownKeys(oP(t))
                    },
                    set: function(t, e, r) {
                        var n = o$(oP(t), e);
                        if (null == n ? void 0 : n.set) return n.set.call(t.k, r), !0;
                        if (!t.P) {
                            var i = oB(oP(t), e),
                                o = null == i ? void 0 : i[oJ];
                            if (o && o.t === r) return t.o[e] = r, t.D[e] = !1, !0;
                            if ((r === i ? 0 !== r || 1 / r == 1 / i : r != r && i != i) && (void 0 !== r || ow(t.t, e))) return !0;
                            oU(t), oV(t)
                        }
                        return t.o[e] === r && "number" != typeof r && (void 0 !== r || e in t.o) || (t.o[e] = r, t.D[e] = !0, !0)
                    },
                    deleteProperty: function(t, e) {
                        return void 0 !== oB(t.t, e) || e in t.t ? (t.D[e] = !1, oU(t), oV(t)) : delete t.D[e], t.o && delete t.o[e], !0
                    },
                    getOwnPropertyDescriptor: function(t, e) {
                        var r = oP(t),
                            n = Reflect.getOwnPropertyDescriptor(r, e);
                        return n ? {
                            writable: !0,
                            configurable: 1 !== t.i || "length" !== e,
                            enumerable: n.enumerable,
                            value: r[e]
                        } : n
                    },
                    defineProperty: function() {
                        om(11)
                    },
                    getPrototypeOf: function(t) {
                        return Object.getPrototypeOf(t.t)
                    },
                    setPrototypeOf: function() {
                        om(12)
                    }
                },
                o3 = {};
            oy(o5, function(t, e) {
                o3[t] = function() {
                    return arguments[0] = arguments[0][0], e.apply(this, arguments)
                }
            }), o3.deleteProperty = function(t, e) {
                return o5.deleteProperty.call(this, t[0], e)
            }, o3.set = function(t, e, r) {
                return o5.set.call(this, t[0], e, r, t[0])
            };
            var o8 = new(function() {
                function t(t) {
                    var e = this;
                    this.g = oG, this.F = !0, this.produce = function(t, r, n) {
                        if ("function" == typeof t && "function" != typeof r) {
                            var i, o = r;
                            return r = t,
                                function(t) {
                                    var n = this;
                                    void 0 === t && (t = o);
                                    for (var i = arguments.length, s = Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++) s[a - 1] = arguments[a];
                                    return e.produce(t, function(t) {
                                        var e;
                                        return (e = r).call.apply(e, [n, t].concat(s))
                                    })
                                }
                        }
                        if ("function" != typeof r && om(6), void 0 !== n && "function" != typeof n && om(7), o_(t)) {
                            var s = oR(e),
                                a = oq(e, t, void 0),
                                l = !0;
                            try {
                                i = r(a), l = !1
                            } finally {
                                l ? oD(s) : oM(s)
                            }
                            return "undefined" != typeof Promise && i instanceof Promise ? i.then(function(t) {
                                return oC(s, n), oz(t, s)
                            }, function(t) {
                                throw oD(s), t
                            }) : (oC(s, n), oz(i, s))
                        }
                        if (!t || "object" != typeof t) {
                            if ((i = r(t)) === oK) return;
                            return void 0 === i && (i = t), e.F && oO(i, !0), i
                        }
                        om(21, t)
                    }, this.produceWithPatches = function(t, r) {
                        var n, i;
                        return "function" == typeof t ? function(r) {
                            for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) i[o - 1] = arguments[o];
                            return e.produceWithPatches(r, function(e) {
                                return t.apply(void 0, [e].concat(i))
                            })
                        } : [e.produce(t, r, function(t, e) {
                            n = t, i = e
                        }), n, i]
                    }, "boolean" == typeof(null == t ? void 0 : t.useProxies) && this.setUseProxies(t.useProxies), "boolean" == typeof(null == t ? void 0 : t.autoFreeze) && this.setAutoFreeze(t.autoFreeze)
                }
                var e = t.prototype;
                return e.createDraft = function(t) {
                    o_(t) || om(8), ov(t) && (ov(e = t) || om(22, e), t = function t(e) {
                        if (!o_(e)) return e;
                        var r, n = e[oJ],
                            i = ob(e);
                        if (n) {
                            if (!n.P && (n.i < 4 || !oA("ES5").K(n))) return n.t;
                            n.I = !0, r = oW(e, i), n.I = !1
                        } else r = oW(e, i);
                        return oy(r, function(e, i) {
                            var o;
                            n && (2 === ob(o = n.t) ? o.get(e) : o[e]) === i || oT(r, e, t(i))
                        }), 3 === i ? new Set(r) : r
                    }(e));
                    var e, r = oR(this),
                        n = oq(this, t, void 0);
                    return n[oJ].C = !0, oM(r), n
                }, e.finishDraft = function(t, e) {
                    var r = (t && t[oJ]).A;
                    return oC(r, e), oz(void 0, r)
                }, e.setAutoFreeze = function(t) {
                    this.F = t
                }, e.setUseProxies = function(t) {
                    t && !oG && om(20), this.g = t
                }, e.applyPatches = function(t, e) {
                    for (r = e.length - 1; r >= 0; r--) {
                        var r, n = e[r];
                        if (0 === n.path.length && "replace" === n.op) {
                            t = n.value;
                            break
                        }
                    }
                    var i = oA("Patches").$;
                    return ov(t) ? i(t, e) : this.produce(t, function(t) {
                        return i(t, e.slice(r + 1))
                    })
                }, t
            }());
            o8.produce, o8.produceWithPatches.bind(o8), o8.setAutoFreeze.bind(o8), o8.setUseProxies.bind(o8), o8.applyPatches.bind(o8), o8.createDraft.bind(o8), o8.finishDraft.bind(o8);
            var o6 = {
                currentProjectStateDefinitionVersion: "0.4.0"
            };
            async function o7(t, e, r) {
                await og(0), t.transaction(({
                    drafts: t
                }) => {
                    var n, i;
                    let o = e.address.projectId;
                    t.ephemeral.coreByProject[o] = {
                        lastExportedObject: null,
                        loadingState: {
                            type: "loading"
                        }
                    }, t.ahistoric.coreByProject[o] = {
                        ahistoricStuff: ""
                    };
                    let s = null == (ov(i = t.historic) || om(23, i), n = i[oJ].t) ? void 0 : n.coreByProject[e.address.projectId];
                    s ? r && -1 == s.revisionHistory.indexOf(r.revisionHistory[0]) ? t.ephemeral.coreByProject[o].loadingState = {
                        type: "browserStateIsNotBasedOnDiskState",
                        onDiskState: r
                    } : t.ephemeral.coreByProject[o].loadingState = {
                        type: "loaded"
                    } : r ? (t.ephemeral.coreByProject[o].loadingState = {
                        type: "loaded"
                    }, t.historic.coreByProject[o] = r) : (t.ephemeral.coreByProject[o].loadingState = {
                        type: "loaded"
                    }, t.historic.coreByProject[o] = {
                        sheetsById: {},
                        definitionVersion: o6.currentProjectStateDefinitionVersion,
                        revisionHistory: []
                    })
                })
            }

            function o4() {}

            function o9(t) {
                var e, r;
                let n = (null == (e = null == t ? void 0 : t.logging) ? void 0 : e.internal) ? null != (r = t.logging.min) ? r : f.WARN : 1 / 0,
                    i = n <= f.DEBUG,
                    o = n <= f.ERROR,
                    s = it(void 0, {
                        _debug: i ? console.debug.bind(console, "_coreLogger(TheatreInternalLogger) debug") : o4,
                        _error: o ? console.error.bind(console, "_coreLogger(TheatreInternalLogger) error") : o4
                    });
                if (t) {
                    let {
                        logger: e,
                        logging: r
                    } = t;
                    e && s.configureLogger(e), r ? s.configureLogging(r) : s.configureLogging({
                        dev: !1
                    })
                }
                return s.getLogger().named("Theatre")
            }
            var st = class {
                    constructor(t, e = {}, r) {
                        var n;
                        this.config = e, this.publicApi = r, I(this, "pointers"), I(this, "_pointerProxies"), I(this, "address"), I(this, "_studioReadyDeferred"), I(this, "_assetStorageReadyDeferred"), I(this, "_readyPromise"), I(this, "_sheetTemplates", new op.Atom({})), I(this, "sheetTemplatesP", this._sheetTemplates.pointer), I(this, "_studio"), I(this, "assetStorage"), I(this, "type", "Theatre_Project"), I(this, "_logger"), this._logger = o9({
                            logging: {
                                dev: !0
                            }
                        }).named("Project", t), this._logger.traceDev("creating project"), this.address = {
                            projectId: t
                        };
                        let i = new op.Atom({
                            ahistoric: {
                                ahistoricStuff: ""
                            },
                            historic: null != (n = e.state) ? n : {
                                sheetsById: {},
                                definitionVersion: o6.currentProjectStateDefinitionVersion,
                                revisionHistory: []
                            },
                            ephemeral: {
                                loadingState: {
                                    type: "loaded"
                                },
                                lastExportedObject: null
                            }
                        });
                        this._assetStorageReadyDeferred = iT(), this.assetStorage = {
                            getAssetUrl: t => {
                                var r;
                                return `${null==(r=e.assets)?void 0:r.baseUrl}/${t}`
                            },
                            createAsset: () => {
                                throw Error("Please wait for Project.ready to use assets.")
                            }
                        }, this._pointerProxies = {
                            historic: new od.PointerProxy(i.pointer.historic),
                            ahistoric: new od.PointerProxy(i.pointer.ahistoric),
                            ephemeral: new od.PointerProxy(i.pointer.ephemeral)
                        }, this.pointers = {
                            historic: this._pointerProxies.historic.pointer,
                            ahistoric: this._pointerProxies.ahistoric.pointer,
                            ephemeral: this._pointerProxies.ephemeral.pointer
                        }, V.add(t, this), this._studioReadyDeferred = iT(), this._readyPromise = Promise.all([this._studioReadyDeferred.promise, this._assetStorageReadyDeferred.promise]).then(() => {}), e.state ? setTimeout(() => {
                            this._studio || (this._studioReadyDeferred.resolve(void 0), this._assetStorageReadyDeferred.resolve(void 0), this._logger._trace("ready deferred resolved with no state"))
                        }, 0) : "undefined" == typeof window ? console.error(`Argument config.state in Theatre.getProject("${t}", config) is empty. You can safely ignore this message if you're developing a Next.js/Remix project in development mode. But if you are shipping to your end-users, then you need to set config.state, otherwise your project's state will be empty and nothing will animate. Learn more at https://www.theatrejs.com/docs/latest/manual/projects#state`) : setTimeout(() => {
                            if (!this._studio) throw Error(`Argument config.state in Theatre.getProject("${t}", config) is empty. This is fine while you are using @theatre/core along with @theatre/studio. But since @theatre/studio is not loaded, the state of project "${t}" will be empty.

To fix this, you need to add @theatre/studio into the bundle and export the project's state. Learn how to do that at https://www.theatrejs.com/docs/latest/manual/projects#state
`)
                        }, 1e3)
                    }
                    attachToStudio(t) {
                        if (this._studio) {
                            if (this._studio !== t) throw Error(`Project ${this.address.projectId} is already attached to studio ${this._studio.address.studioId}`);
                            console.warn(`Project ${this.address.projectId} is already attached to studio ${this._studio.address.studioId}`);
                            return
                        }
                        this._studio = t, t.initialized.then(async () => {
                            var e;
                            await o7(t, this, this.config.state), this._pointerProxies.historic.setPointer(t.atomP.historic.coreByProject[this.address.projectId]), this._pointerProxies.ahistoric.setPointer(t.atomP.ahistoric.coreByProject[this.address.projectId]), this._pointerProxies.ephemeral.setPointer(t.atomP.ephemeral.coreByProject[this.address.projectId]), t.createAssetStorage(this, null == (e = this.config.assets) ? void 0 : e.baseUrl).then(t => {
                                this.assetStorage = t, this._assetStorageReadyDeferred.resolve(void 0)
                            }), this._studioReadyDeferred.resolve(void 0)
                        })
                    }
                    get isAttachedToStudio() {
                        return !!this._studio
                    }
                    get ready() {
                        return this._readyPromise
                    }
                    isReady() {
                        return "resolved" === this._studioReadyDeferred.status && "resolved" === this._assetStorageReadyDeferred.status
                    }
                    getOrCreateSheet(t, e = "default") {
                        let r = this._sheetTemplates.get()[t];
                        return r || (r = new of (this, t), this._sheetTemplates.reduce(e => E(j({}, e), {
                            [t]: r
                        }))), r.getInstance(e)
                    }
                },
                se = class {
                    get type() {
                        return "Theatre_Project_PublicAPI"
                    }
                    constructor(t, e = {}) {
                        W(this, new st(t, e, this))
                    }
                    get ready() {
                        return q(this).ready
                    }
                    get isReady() {
                        return q(this).isReady()
                    }
                    get address() {
                        return j({}, q(this).address)
                    }
                    getAssetUrl(t) {
                        if (!this.isReady) {
                            console.error("Calling `project.getAssetUrl()` before `project.ready` is resolved, will always return `undefined`. Either use `project.ready.then(() => project.getAssetUrl())` or `await project.ready` before calling `project.getAssetUrl()`.");
                            return
                        }
                        return t.id ? q(this).assetStorage.getAssetUrl(t.id) : void 0
                    }
                    sheet(t, e = "default") {
                        let r = os(t, "project.sheet");
                        return q(this).getOrCreateSheet(r, e).publicApi
                    }
                };
            R(N());
            var sr = R(r(7237)),
                sn = R(r(7237));

            function si(t, e = {}) {
                let r = V.get(t);
                if (r) return r.publicApi;
                let n = o9(),
                    i = n.named("Project", t);
                return e.state ? (ss(t, e.state), i._debug("deep validated config.state on disk")) : i._debug("no config.state"), new se(t, e)
            }
            var so = (t, e) => {
                    if (Array.isArray(e) || null == e || e.definitionVersion !== o6.currentProjectStateDefinitionVersion) throw new iv(`Error validating conf.state in Theatre.getProject(${JSON.stringify(t)}, conf). The state seems to be formatted in a way that is unreadable to Theatre.js. Read more at https://www.theatrejs.com/docs/latest/manual/projects#state`)
                },
                ss = (t, e) => {
                    so(t, e)
                };

            function sa(t, e, r) {
                let n = r ? q(r).ticker : iI();
                if ((0, sr.isPointer)(t)) {
                    let r = (0, sn.pointerToPrism)(t);
                    return r.onChange(n, e, !0)
                }
                if ((0, sn.isPrism)(t)) return t.onChange(n, e, !0);
                throw Error("Called onChange(p) where p is neither a pointer nor a prism.")
            }

            function sl(t) {
                if ((0, sr.isPointer)(t)) return (0, sn.pointerToPrism)(t).getValue();
                throw Error("Called val(p) where p is not a pointer.")
            }
            var su = class {
                constructor() {
                    I(this, "_studio")
                }
                get type() {
                    return "Theatre_CoreBundle"
                }
                get version() {
                    return "0.6.1"
                }
                getBitsForStudio(t, e) {
                    if (this._studio) throw Error("@theatre/core is already attached to @theatre/studio");
                    this._studio = t;
                    let r = {
                        projectsP: V.atom.pointer.projects,
                        privateAPI: q,
                        coreExports: B,
                        getCoreRafDriver: iR
                    };
                    e(r)
                }
            };
            ! function() {
                if ("undefined" == typeof window) return;
                let t = window[iO];
                if (void 0 !== t) {
                    if ("object" == typeof t && t && "string" == typeof t.version) throw Error(`It seems that the module '@theatre/core' is loaded more than once. This could have two possible causes:
1. You might have two separate versions of Theatre.js in node_modules.
2. Or this might be a bundling misconfiguration, in case you're using a bundler like Webpack/ESBuild/Rollup.

Note that it **is okay** to import '@theatre/core' multiple times. But those imports should point to the same module.`);
                    throw Error(`The variable window.${iO} seems to be already set by a module other than @theatre/core.`)
                }
                let e = new su;
                window[iO] = e;
                let r = window.__TheatreJS_StudioBundle;
                r && null !== r && "Theatre_StudioBundle" === r.type && r.registerCoreBundle(e)
            }();
            /**
             * @license
             * Lodash (Custom Build) <https://lodash.com/>
             * Build: `lodash modularize exports="es" -o ./`
             * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
             * Released under MIT license <https://lodash.com/license>
             * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
             * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
             */
        },
        8166: function(t, e, r) {
            "use strict";
            let n;
            r.d(e, {
                M$: function() {
                    return T
                },
                bS: function() {
                    return C
                },
                Zm: function() {
                    return O
                },
                LF: function() {
                    return x
                },
                $d: function() {
                    return M
                },
                f0: function() {
                    return R
                }
            });
            var i = r(959);
            let o = !1,
                s = [],
                a = t => new Promise((e, r) => {
                    if (typeof window > "u" || (window.storyblokRegisterEvent = t => {
                            if (window.location === window.parent.location) {
                                console.warn("You are not in Draft Mode or in the Visual Editor.");
                                return
                            }
                            o ? t() : s.push(t)
                        }, document.getElementById("storyblok-javascript-bridge"))) return;
                    let n = document.createElement("script");
                    n.async = !0, n.src = t, n.id = "storyblok-javascript-bridge", n.onerror = t => r(t), n.onload = t => {
                        s.forEach(t => t()), o = !0, e(t)
                    }, document.getElementsByTagName("head")[0].appendChild(n)
                });
            var l = Object.defineProperty,
                u = (t, e, r) => e in t ? l(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : t[e] = r,
                c = (t, e, r) => (u(t, "symbol" != typeof e ? e + "" : e, r), r);

            function h(t) {
                return !(t != t || t === 1 / 0 || t === -1 / 0)
            }
            let f = function(t, e) {
                    let r = {};
                    for (let n in t) {
                        let i = t[n];
                        e.indexOf(n) > -1 && null !== i && (r[n] = i)
                    }
                    return r
                },
                d = t => "email" === t,
                p = {
                    nodes: {
                        horizontal_rule: () => ({
                            singleTag: "hr"
                        }),
                        blockquote: () => ({
                            tag: "blockquote"
                        }),
                        bullet_list: () => ({
                            tag: "ul"
                        }),
                        code_block: t => ({
                            tag: ["pre", {
                                tag: "code",
                                attrs: t.attrs
                            }]
                        }),
                        hard_break: () => ({
                            singleTag: "br"
                        }),
                        heading: t => ({
                            tag: `h${t.attrs.level}`
                        }),
                        image: t => ({
                            singleTag: [{
                                tag: "img",
                                attrs: f(t.attrs, ["src", "alt", "title"])
                            }]
                        }),
                        list_item: () => ({
                            tag: "li"
                        }),
                        ordered_list: () => ({
                            tag: "ol"
                        }),
                        paragraph: () => ({
                            tag: "p"
                        }),
                        emoji: t => ({
                            tag: [{
                                tag: "span",
                                attrs: {
                                    "data-type": "emoji",
                                    "data-name": t.attrs.name,
                                    emoji: t.attrs.emoji
                                }
                            }]
                        })
                    },
                    marks: {
                        bold: () => ({
                            tag: "b"
                        }),
                        strike: () => ({
                            tag: "strike"
                        }),
                        underline: () => ({
                            tag: "u"
                        }),
                        strong: () => ({
                            tag: "strong"
                        }),
                        code: () => ({
                            tag: "code"
                        }),
                        italic: () => ({
                            tag: "i"
                        }),
                        link: t => {
                            let e = { ...t.attrs
                                },
                                {
                                    linktype: r = "url"
                                } = t.attrs;
                            if (d(r) && (e.href = `mailto:${e.href}`), e.anchor && (e.href = `${e.href}#${e.anchor}`, delete e.anchor), e.custom) {
                                for (let t in e.custom) e[t] = e.custom[t];
                                delete e.custom
                            }
                            return {
                                tag: [{
                                    tag: "a",
                                    attrs: e
                                }]
                            }
                        },
                        styled: t => ({
                            tag: [{
                                tag: "span",
                                attrs: t.attrs
                            }]
                        }),
                        subscript: () => ({
                            tag: "sub"
                        }),
                        superscript: () => ({
                            tag: "sup"
                        }),
                        anchor: t => ({
                            tag: [{
                                tag: "span",
                                attrs: t.attrs
                            }]
                        }),
                        highlight: t => {
                            var e;
                            return null != (e = t.attrs) && e.color ? {
                                tag: [{
                                    tag: "span",
                                    attrs: {
                                        style: `background-color:${t.attrs.color};`
                                    }
                                }]
                            } : {
                                tag: ""
                            }
                        },
                        textStyle: t => {
                            var e;
                            return null != (e = t.attrs) && e.color ? {
                                tag: [{
                                    tag: "span",
                                    attrs: {
                                        style: `color:${t.attrs.color}`
                                    }
                                }]
                            } : {
                                tag: ""
                            }
                        }
                    }
                },
                g = function(t) {
                    let e = {
                            "&": "&amp;",
                            "<": "&lt;",
                            ">": "&gt;",
                            '"': "&quot;",
                            "'": "&#39;"
                        },
                        r = /[&<>"']/g,
                        n = RegExp(r.source);
                    return t && n.test(t) ? t.replace(r, t => e[t]) : t
                };
            class m {
                constructor(t) {
                    c(this, "marks"), c(this, "nodes"), t || (t = p), this.marks = t.marks || [], this.nodes = t.nodes || []
                }
                addNode(t, e) {
                    this.nodes[t] = e
                }
                addMark(t, e) {
                    this.marks[t] = e
                }
                render(t, e = {
                    optimizeImages: !1
                }) {
                    if (t && t.content && Array.isArray(t.content)) {
                        let r = "";
                        return t.content.forEach(t => {
                            r += this.renderNode(t)
                        }), e.optimizeImages ? this.optimizeImages(r, e.optimizeImages) : r
                    }
                    return console.warn(`The render method must receive an Object with a "content" field.
			The "content" field must be an array of nodes as the type ISbRichtext.
			ISbRichtext:
				content?: ISbRichtext[]
				marks?: ISbRichtext[]
				attrs?: any
				text?: string
				type: string
				
				Example:
				{
					content: [
						{
							content: [
								{
									text: 'Hello World',
									type: 'text'
								}
							],
							type: 'paragraph'
						}
					],
					type: 'doc'
				}`), ""
                }
                optimizeImages(t, e) {
                    let r = 0,
                        n = 0,
                        i = "",
                        o = "";
                    "boolean" != typeof e && ("number" == typeof e.width && e.width > 0 && (i += `width="${e.width}" `, r = e.width), "number" == typeof e.height && e.height > 0 && (i += `height="${e.height}" `, n = e.height), ("lazy" === e.loading || "eager" === e.loading) && (i += `loading="${e.loading}" `), "string" == typeof e.class && e.class.length > 0 && (i += `class="${e.class}" `), e.filters && ("number" == typeof e.filters.blur && e.filters.blur >= 0 && e.filters.blur <= 100 && (o += `:blur(${e.filters.blur})`), "number" == typeof e.filters.brightness && e.filters.brightness >= -100 && e.filters.brightness <= 100 && (o += `:brightness(${e.filters.brightness})`), e.filters.fill && (e.filters.fill.match(/[0-9A-Fa-f]{6}/g) || "transparent" === e.filters.fill) && (o += `:fill(${e.filters.fill})`), e.filters.format && ["webp", "png", "jpeg"].includes(e.filters.format) && (o += `:format(${e.filters.format})`), "boolean" == typeof e.filters.grayscale && e.filters.grayscale && (o += ":grayscale()"), "number" == typeof e.filters.quality && e.filters.quality >= 0 && e.filters.quality <= 100 && (o += `:quality(${e.filters.quality})`), e.filters.rotate && [90, 180, 270].includes(e.filters.rotate) && (o += `:rotate(${e.filters.rotate})`), o.length > 0 && (o = "/filters" + o))), i.length > 0 && (t = t.replace(/<img/g, `<img ${i.trim()}`));
                    let s = r > 0 || n > 0 || o.length > 0 ? `${r}x${n}${o}` : "";
                    return t = t.replace(/a.storyblok.com\/f\/(\d+)\/([^.]+)\.(gif|jpg|jpeg|png|tif|tiff|bmp)/g, `a.storyblok.com/f/$1/$2.$3/m/${s}`), "boolean" != typeof e && (e.sizes || e.srcset) && (t = t.replace(/<img.*?src=["|'](.*?)["|']/g, t => {
                        var r, n;
                        let i = t.match(/a.storyblok.com\/f\/(\d+)\/([^.]+)\.(gif|jpg|jpeg|png|tif|tiff|bmp)/g);
                        if (i && i.length > 0) {
                            let s = {
                                    srcset: null == (r = e.srcset) ? void 0 : r.map(t => {
                                        if ("number" == typeof t) return `//${i}/m/${t}x0${o} ${t}w`;
                                        if ("object" == typeof t && 2 === t.length) {
                                            let e = 0,
                                                r = 0;
                                            return "number" == typeof t[0] && (e = t[0]), "number" == typeof t[1] && (r = t[1]), `//${i}/m/${e}x${r}${o} ${e}w`
                                        }
                                    }).join(", "),
                                    sizes: null == (n = e.sizes) ? void 0 : n.map(t => t).join(", ")
                                },
                                a = "";
                            return s.srcset && (a += `srcset="${s.srcset}" `), s.sizes && (a += `sizes="${s.sizes}" `), t.replace(/<img/g, `<img ${a.trim()}`)
                        }
                        return t
                    })), t
                }
                renderNode(t) {
                    let e = [];
                    t.marks && t.marks.forEach(t => {
                        let r = this.getMatchingMark(t);
                        r && "" !== r.tag && e.push(this.renderOpeningTag(r.tag))
                    });
                    let r = this.getMatchingNode(t);
                    return r && r.tag && e.push(this.renderOpeningTag(r.tag)), t.content ? t.content.forEach(t => {
                        e.push(this.renderNode(t))
                    }) : t.text ? e.push(g(t.text)) : r && r.singleTag ? e.push(this.renderTag(r.singleTag, " /")) : r && r.html ? e.push(r.html) : "emoji" === t.type && e.push(this.renderEmoji(t)), r && r.tag && e.push(this.renderClosingTag(r.tag)), t.marks && t.marks.slice(0).reverse().forEach(t => {
                        let r = this.getMatchingMark(t);
                        r && "" !== r.tag && e.push(this.renderClosingTag(r.tag))
                    }), e.join("")
                }
                renderTag(t, e) {
                    return t.constructor === String ? `<${t}${e}>` : t.map(t => {
                        if (t.constructor === String) return `<${t}${e}>`; {
                            let r = `<${t.tag}`;
                            if (t.attrs)
                                for (let e in t.attrs) {
                                    let n = t.attrs[e];
                                    null !== n && (r += ` ${e}="${n}"`)
                                }
                            return `${r}${e}>`
                        }
                    }).join("")
                }
                renderOpeningTag(t) {
                    return this.renderTag(t, "")
                }
                renderClosingTag(t) {
                    return t.constructor === String ? `</${t}>` : t.slice(0).reverse().map(t => t.constructor === String ? `</${t}>` : `</${t.tag}>`).join("")
                }
                getMatchingNode(t) {
                    let e = this.nodes[t.type];
                    if ("function" == typeof e) return e(t)
                }
                getMatchingMark(t) {
                    let e = this.marks[t.type];
                    if ("function" == typeof e) return e(t)
                }
                renderEmoji(t) {
                    if (t.attrs.emoji) return t.attrs.emoji;
                    let e = [{
                        tag: "img",
                        attrs: {
                            src: t.attrs.fallbackImage,
                            draggable: "false",
                            loading: "lazy",
                            align: "absmiddle"
                        }
                    }];
                    return this.renderTag(e, " /")
                }
            }
            class v {
                constructor() {
                    c(this, "isCDNUrl", (t = "") => t.indexOf("/cdn/") > -1), c(this, "getOptionsPage", (t, e = 25, r = 1) => ({ ...t,
                        per_page: e,
                        page: r
                    })), c(this, "delay", t => new Promise(e => setTimeout(e, t))), c(this, "arrayFrom", (t = 0, e) => [...Array(t)].map(e)), c(this, "range", (t = 0, e = t) => {
                        let r = Math.abs(e - t) || 0,
                            n = t < e ? 1 : -1;
                        return this.arrayFrom(r, (e, r) => r * n + t)
                    }), c(this, "asyncMap", async (t, e) => Promise.all(t.map(e))), c(this, "flatMap", (t = [], e) => t.map(e).reduce((t, e) => [...t, ...e], []))
                }
                stringify(t, e, r) {
                    let n = [];
                    for (let i in t) {
                        let o;
                        if (!Object.prototype.hasOwnProperty.call(t, i)) continue;
                        let s = t[i],
                            a = r ? "" : encodeURIComponent(i);
                        o = "object" == typeof s ? this.stringify(s, e ? e + encodeURIComponent("[" + a + "]") : a, Array.isArray(s)) : (e ? e + encodeURIComponent("[" + a + "]") : a) + "=" + encodeURIComponent(s), n.push(o)
                    }
                    return n.join("&")
                }
                getRegionURL(t) {
                    switch (t) {
                        case "us":
                            return "api-us.storyblok.com";
                        case "cn":
                            return "app.storyblokchina.cn";
                        default:
                            return "api.storyblok.com"
                    }
                }
            }
            class _ {
                constructor(t) {
                    c(this, "baseURL"), c(this, "timeout"), c(this, "headers"), c(this, "responseInterceptor"), c(this, "fetch"), c(this, "ejectInterceptor"), c(this, "url"), c(this, "parameters"), this.baseURL = t.baseURL, this.headers = t.headers || new Headers, this.timeout = null != t && t.timeout ? 1e3 * t.timeout : 0, this.responseInterceptor = t.responseInterceptor, this.fetch = (...e) => t.fetch ? t.fetch(...e) : fetch(...e), this.ejectInterceptor = !1, this.url = "", this.parameters = {}
                }
                get(t, e) {
                    return this.url = t, this.parameters = e, this._methodHandler("get")
                }
                post(t, e) {
                    return this.url = t, this.parameters = e, this._methodHandler("post")
                }
                put(t, e) {
                    return this.url = t, this.parameters = e, this._methodHandler("put")
                }
                delete(t, e) {
                    return this.url = t, this.parameters = e, this._methodHandler("delete")
                }
                async _responseHandler(t) {
                    let e = [],
                        r = {
                            data: {},
                            headers: {},
                            status: 0,
                            statusText: ""
                        };
                    for (let n of (204 !== t.status && await t.json().then(t => {
                            r.data = t
                        }), t.headers.entries())) e[n[0]] = n[1];
                    return r.headers = { ...e
                    }, r.status = t.status, r.statusText = t.statusText, r
                }
                async _methodHandler(t) {
                    let e, r = `${this.baseURL}${this.url}`,
                        n = null;
                    if ("get" === t) {
                        let t = new v;
                        r = `${this.baseURL}${this.url}?${t.stringify(this.parameters)}`
                    } else n = JSON.stringify(this.parameters);
                    let i = new URL(r),
                        o = new AbortController,
                        {
                            signal: s
                        } = o;
                    this.timeout && (e = setTimeout(() => o.abort(), this.timeout));
                    try {
                        let r = await this.fetch(`${i}`, {
                            method: t,
                            headers: this.headers,
                            body: n,
                            signal: s
                        });
                        this.timeout && clearTimeout(e);
                        let o = await this._responseHandler(r);
                        return this.responseInterceptor && !this.ejectInterceptor ? this._statusHandler(this.responseInterceptor(o)) : this._statusHandler(o)
                    } catch (t) {
                        return {
                            message: t
                        }
                    }
                }
                eject() {
                    this.ejectInterceptor = !0
                }
                _statusHandler(t) {
                    let e = /20[0-6]/g;
                    return new Promise((r, n) => {
                        if (e.test(`${t.status}`)) return r(t);
                        let i = {
                            message: Error(t.statusText),
                            status: t.status,
                            response: Array.isArray(t.data) ? t.data[0] : t.data.error || t.data.slug
                        };
                        n(i)
                    })
                }
            }
            let y = {},
                b = {};
            class w {
                constructor(t, e) {
                    if (c(this, "client"), c(this, "maxRetries"), c(this, "throttle"), c(this, "accessToken"), c(this, "cache"), c(this, "helpers"), c(this, "resolveCounter"), c(this, "relations"), c(this, "links"), c(this, "richTextResolver"), c(this, "resolveNestedRelations"), !e) {
                        let r = new v().getRegionURL,
                            n = !1 === t.https ? "http" : "https";
                        e = t.oauthToken ? `${n}://${r(t.region)}/v1` : `${n}://${r(t.region)}/v2`
                    }
                    let r = new Headers;
                    r.set("Content-Type", "application/json"), r.set("Accept", "application/json"), r.forEach((e, n) => {
                        t.headers && t.headers[n] && r.set(n, t.headers[n])
                    });
                    let n = 5;
                    t.oauthToken && (r.set("Authorization", t.oauthToken), n = 3), t.rateLimit && (n = t.rateLimit), t.richTextSchema ? this.richTextResolver = new m(t.richTextSchema) : this.richTextResolver = new m, t.componentResolver && this.setComponentResolver(t.componentResolver), this.maxRetries = t.maxRetries || 5, this.throttle = function(t, e, r) {
                        if (!h(e)) throw TypeError("Expected `limit` to be a finite number");
                        if (!h(r)) throw TypeError("Expected `interval` to be a finite number");
                        let n = [],
                            i = [],
                            o = 0,
                            s = function() {
                                o++;
                                let e = setTimeout(function() {
                                    o--, n.length > 0 && s(), i = i.filter(function(t) {
                                        return t !== e
                                    })
                                }, r);
                                0 > i.indexOf(e) && i.push(e);
                                let a = n.shift();
                                a.resolve(t.apply(a.self, a.args))
                            },
                            a = function(...t) {
                                let r = this;
                                return new Promise(function(i, a) {
                                    n.push({
                                        resolve: i,
                                        reject: a,
                                        args: t,
                                        self: r
                                    }), o < e && s()
                                })
                            };
                        return a.abort = function() {
                            i.forEach(clearTimeout), i = [], n.forEach(function(t) {
                                t.reject(function() {
                                    Error.call(this, "Throttled function aborted"), this.name = "AbortError"
                                })
                            }), n.length = 0
                        }, a
                    }(this.throttledRequest, n, 1e3), this.accessToken = t.accessToken || "", this.relations = {}, this.links = {}, this.cache = t.cache || {
                        clear: "manual"
                    }, this.helpers = new v, this.resolveCounter = 0, this.resolveNestedRelations = t.resolveNestedRelations || !0, this.client = new _({
                        baseURL: e,
                        timeout: t.timeout || 0,
                        headers: r,
                        responseInterceptor: t.responseInterceptor,
                        fetch: t.fetch
                    })
                }
                setComponentResolver(t) {
                    this.richTextResolver.addNode("blok", e => {
                        let r = "";
                        return e.attrs.body && e.attrs.body.forEach(e => {
                            r += t(e.component, e)
                        }), {
                            html: r
                        }
                    })
                }
                parseParams(t) {
                    return t.version || (t.version = "published"), t.token || (t.token = this.getToken()), t.cv || (t.cv = b[t.token]), Array.isArray(t.resolve_relations) && (t.resolve_relations = t.resolve_relations.join(",")), t
                }
                factoryParamOptions(t, e) {
                    return this.helpers.isCDNUrl(t) ? this.parseParams(e) : e
                }
                makeRequest(t, e, r, n) {
                    let i = this.factoryParamOptions(t, this.helpers.getOptionsPage(e, r, n));
                    return this.cacheResponse(t, i)
                }
                get(t, e) {
                    e || (e = {});
                    let r = `/${t}`,
                        n = this.factoryParamOptions(r, e);
                    return this.cacheResponse(r, n)
                }
                async getAll(t, e, r) {
                    let n = (null == e ? void 0 : e.per_page) || 25,
                        i = `/${t}`,
                        o = i.split("/"),
                        s = r || o[o.length - 1],
                        a = await this.makeRequest(i, e, n, 1),
                        l = a.total ? Math.ceil(a.total / n) : 1,
                        u = await this.helpers.asyncMap(this.helpers.range(1, l), t => this.makeRequest(i, e, n, t + 1));
                    return this.helpers.flatMap([a, ...u], t => Object.values(t.data[s]))
                }
                post(t, e) {
                    let r = `/${t}`;
                    return Promise.resolve(this.throttle("post", r, e))
                }
                put(t, e) {
                    let r = `/${t}`;
                    return Promise.resolve(this.throttle("put", r, e))
                }
                delete(t, e) {
                    let r = `/${t}`;
                    return Promise.resolve(this.throttle("delete", r, e))
                }
                getStories(t) {
                    return this.get("cdn/stories", t)
                }
                getStory(t, e) {
                    return this.get(`cdn/stories/${t}`, e)
                }
                getToken() {
                    return this.accessToken
                }
                ejectInterceptor() {
                    this.client.eject()
                }
                _cleanCopy(t) {
                    return JSON.parse(JSON.stringify(t))
                }
                _insertLinks(t, e, r) {
                    let n = t[e];
                    n && "multilink" == n.fieldtype && "story" == n.linktype && "string" == typeof n.id && this.links[r][n.id] ? n.story = this._cleanCopy(this.links[r][n.id]) : n && "story" === n.linktype && "string" == typeof n.uuid && this.links[r][n.uuid] && (n.story = this._cleanCopy(this.links[r][n.uuid]))
                }
                _insertRelations(t, e, r, n) {
                    if (r.indexOf(`${t.component}.${e}`) > -1) {
                        if ("string" == typeof t[e]) this.relations[n][t[e]] && (t[e] = this._cleanCopy(this.relations[n][t[e]]));
                        else if (t[e] && t[e].constructor === Array) {
                            let r = [];
                            t[e].forEach(t => {
                                this.relations[n][t] && r.push(this._cleanCopy(this.relations[n][t]))
                            }), t[e] = r
                        }
                    }
                }
                iterateTree(t, e, r) {
                    let n = t => {
                        if (null != t) {
                            if (t.constructor === Array)
                                for (let e = 0; e < t.length; e++) n(t[e]);
                            else if (t.constructor === Object) {
                                if (t._stopResolving) return;
                                for (let i in t)(t.component && t._uid || "link" === t.type) && (this._insertRelations(t, i, e, r), this._insertLinks(t, i, r)), n(t[i])
                            }
                        }
                    };
                    n(t.content)
                }
                async resolveLinks(t, e, r) {
                    let n = [];
                    if (t.link_uuids) {
                        let r = t.link_uuids.length,
                            i = [];
                        for (let e = 0; e < r; e += 50) {
                            let n = Math.min(r, e + 50);
                            i.push(t.link_uuids.slice(e, n))
                        }
                        for (let t = 0; t < i.length; t++)(await this.getStories({
                            per_page: 50,
                            language: e.language,
                            version: e.version,
                            by_uuids: i[t].join(",")
                        })).data.stories.forEach(t => {
                            n.push(t)
                        })
                    } else n = t.links;
                    n.forEach(t => {
                        this.links[r][t.uuid] = { ...t,
                            _stopResolving: !0
                        }
                    })
                }
                async resolveRelations(t, e, r) {
                    let n = [];
                    if (t.rel_uuids) {
                        let r = t.rel_uuids.length,
                            i = [];
                        for (let e = 0; e < r; e += 50) {
                            let n = Math.min(r, e + 50);
                            i.push(t.rel_uuids.slice(e, n))
                        }
                        for (let t = 0; t < i.length; t++)(await this.getStories({
                            per_page: 50,
                            language: e.language,
                            version: e.version,
                            by_uuids: i[t].join(",")
                        })).data.stories.forEach(t => {
                            n.push(t)
                        })
                    } else n = t.rels;
                    n && n.length > 0 && n.forEach(t => {
                        this.relations[r][t.uuid] = { ...t,
                            _stopResolving: !0
                        }
                    })
                }
                async resolveStories(t, e, r) {
                    var n, i;
                    let o = [];
                    if (this.links[r] = {}, this.relations[r] = {}, "u" > typeof e.resolve_relations && e.resolve_relations.length > 0 && ("string" == typeof e.resolve_relations && (o = e.resolve_relations.split(",")), await this.resolveRelations(t, e, r)), e.resolve_links && ["1", "story", "url"].indexOf(e.resolve_links) > -1 && (null != (n = t.links) && n.length || null != (i = t.link_uuids) && i.length) && await this.resolveLinks(t, e, r), this.resolveNestedRelations)
                        for (let t in this.relations[r]) this.iterateTree(this.relations[r][t], o, r);
                    t.story ? this.iterateTree(t.story, o, r) : t.stories.forEach(t => {
                        this.iterateTree(t, o, r)
                    }), delete this.links[r], delete this.relations[r]
                }
                async cacheResponse(t, e, r) {
                    let n = this.helpers.stringify({
                            url: t,
                            params: e
                        }),
                        i = this.cacheProvider();
                    if ("auto" === this.cache.clear && "draft" === e.version && await this.flushCache(), "published" === e.version && "/cdn/spaces/me" != t) {
                        let t = await i.get(n);
                        if (t) return Promise.resolve(t)
                    }
                    return new Promise((r, o) => {
                        try {
                            (async () => {
                                var s;
                                try {
                                    let a = await this.throttle("get", t, e),
                                        l = {
                                            data: a.data,
                                            headers: a.headers
                                        };
                                    if (null != (s = a.headers) && s["per-page"] && (l = Object.assign({}, l, {
                                            perPage: a.headers["per-page"] ? parseInt(a.headers["per-page"]) : 0,
                                            total: a.headers["per-page"] ? parseInt(a.headers.total) : 0
                                        })), 200 != a.status) return o(a);
                                    if (l.data.story || l.data.stories) {
                                        let t = this.resolveCounter = ++this.resolveCounter % 1e3;
                                        await this.resolveStories(l.data, e, `${t}`)
                                    }
                                    return "published" === e.version && "/cdn/spaces/me" != t && await i.set(n, l), l.data.cv && e.token && ("draft" == e.version && b[e.token] != l.data.cv && await this.flushCache(), b[e.token] = l.data.cv), r(l)
                                } catch (t) {
                                    return o(t)
                                }
                            })()
                        } catch {}
                    })
                }
                throttledRequest(t, e, r) {
                    return this.client[t](e, r)
                }
                cacheVersions() {
                    return b
                }
                cacheVersion() {
                    return b[this.accessToken]
                }
                setCacheVersion(t) {
                    this.accessToken && (b[this.accessToken] = t)
                }
                cacheProvider() {
                    switch (this.cache.type) {
                        case "memory":
                            return {
                                get: t => Promise.resolve(y[t]),
                                getAll: () => Promise.resolve(y),
                                set: (t, e) => (y[t] = e, Promise.resolve(void 0)),
                                flush: () => (y = {}, Promise.resolve(void 0))
                            };
                        case "custom":
                            if (this.cache.custom) return this.cache.custom;
                        default:
                            return {
                                get: () => Promise.resolve(void 0),
                                getAll: () => Promise.resolve(void 0),
                                set: () => Promise.resolve(void 0),
                                flush: () => Promise.resolve(void 0)
                            }
                    }
                }
                async flushCache() {
                    return await this.cacheProvider().flush(), this
                }
            }
            let T = (t = {}) => {
                    let {
                        apiOptions: e
                    } = t;
                    if (!e.accessToken) {
                        console.error("You need to provide an access token to interact with Storyblok API. Read https://www.storyblok.com/docs/api/content-delivery#topics/authentication");
                        return
                    }
                    return {
                        storyblokApi: new w(e)
                    }
                },
                x = t => {
                    if ("object" != typeof t || typeof t._editable > "u") return {};
                    let e = JSON.parse(t._editable.replace(/^<!--#storyblok#/, "").replace(/-->$/, ""));
                    return {
                        "data-blok-c": JSON.stringify(e),
                        "data-blok-uid": e.id + "-" + e.uid
                    }
                },
                S = (t, e, r = {}) => {
                    var n;
                    let i = !(typeof window > "u") && "u" > typeof window.storyblokRegisterEvent,
                        o = +new URL(null == (n = window.location) ? void 0 : n.href).searchParams.get("_storyblok") === t;
                    if (!(!i || !o)) {
                        if (!t) {
                            console.warn("Story ID is not defined. Please provide a valid ID.");
                            return
                        }
                        window.storyblokRegisterEvent(() => {
                            new window.StoryblokBridge(r).on(["input", "published", "change"], r => {
                                "input" === r.action && r.story.id === t ? e(r.story) : ("change" === r.action || "published" === r.action) && r.storyId === t && window.location.reload()
                            })
                        })
                    }
                },
                P = (t = {}) => {
                    var e, r;
                    let {
                        bridge: i,
                        accessToken: o,
                        use: s = [],
                        apiOptions: l = {},
                        richText: u = {}
                    } = t;
                    l.accessToken = l.accessToken || o;
                    let c = {
                            bridge: i,
                            apiOptions: l
                        },
                        h = {};
                    s.forEach(t => {
                        h = { ...h,
                            ...t(c)
                        }
                    });
                    let f = !(typeof window > "u") && (null == (r = null == (e = window.location) ? void 0 : e.search) ? void 0 : r.includes("_storyblok_tk"));
                    return !1 !== i && f && a("https://app.storyblok.com/f/storyblok-v2-latest.js"), n = new m(u.schema), u.resolver && k(n, u.resolver), h
                },
                k = (t, e) => {
                    t.addNode("blok", t => {
                        let r = "";
                        return t.attrs.body.forEach(t => {
                            r += e(t.component, t)
                        }), {
                            html: r
                        }
                    })
                },
                O = (t, e, r) => {
                    let i = r || n;
                    if (!i) {
                        console.error("Please initialize the Storyblok SDK before calling the renderRichText function");
                        return
                    }
                    return "" === t ? "" : t ? (e && (i = new m(e.schema), e.resolver && k(i, e.resolver)), i.render(t)) : (console.warn(`${t} is not a valid Richtext object. This might be because the value of the richtext field is empty.
    
  For more info about the richtext object check https://github.com/storyblok/storyblok-js#rendering-rich-text`), "")
                },
                j = (0, i.forwardRef)(({
                    blok: t,
                    ...e
                }, r) => {
                    if (!t) return console.error("Please provide a 'blok' property to the StoryblokComponent"), i.createElement("div", null, "Please provide a blok property to the StoryblokComponent");
                    let n = D(t.component);
                    return n ? i.createElement(n, {
                        ref: r,
                        blok: t,
                        ...e
                    }) : i.createElement("div", null)
                });
            j.displayName = "StoryblokComponent";
            let E = null,
                A = {},
                C = () => (E || console.error("You can't use getStoryblokApi if you're not loading apiPlugin."), E),
                D = t => A[t] ? A[t] : (console.error(`Component ${t} doesn't exist.`), !1),
                M = (t = {}) => {
                    let {
                        storyblokApi: e
                    } = P(t);
                    E = e, A = t.components
                },
                R = (t = null, e = {}) => {
                    let [r, n] = (0, i.useState)(t), o = "undefined" != typeof window && void 0 !== window.storyblokRegisterEvent;
                    return o && t ? ((0, i.useEffect)(() => {
                        n(t), S(r.id, t => n(t), e)
                    }, [t]), r) : t
                }
        },
        654: function(t, e, r) {
            "use strict";
            r.d(e, {
                qi: function() {
                    return s
                },
                xQ: function() {
                    return a
                },
                ac: function() {
                    return l
                },
                EL: function() {
                    return c
                }
            });
            var n = r(959),
                i = r(9758);

            function o(t, e, r) {
                var n, i = r || {},
                    o = i.noTrailing,
                    s = void 0 !== o && o,
                    a = i.noLeading,
                    l = void 0 !== a && a,
                    u = i.debounceMode,
                    c = void 0 === u ? void 0 : u,
                    h = !1,
                    f = 0;

                function d() {
                    n && clearTimeout(n)
                }

                function p() {
                    for (var r = arguments.length, i = Array(r), o = 0; o < r; o++) i[o] = arguments[o];
                    var a = this,
                        u = Date.now() - f;

                    function p() {
                        f = Date.now(), e.apply(a, i)
                    }

                    function g() {
                        n = void 0
                    }!h && (l || !c || n || p(), d(), void 0 === c && u > t ? l ? (f = Date.now(), s || (n = setTimeout(c ? g : p, t))) : p() : !0 !== s && (n = setTimeout(c ? g : p, void 0 === c ? t - u : t)))
                }
                return p.cancel = function(t) {
                    var e = (t || {}).upcomingOnly;
                    d(), h = !(void 0 !== e && e)
                }, p
            }

            function s() {
                let t = function() {
                    let [t, e] = (0, n.useState)(!1);
                    return (0, n.useEffect)(() => {
                        e(!0)
                    }, []), t
                }();
                return (0, n.useMemo)(() => {
                    if (!t) return;
                    let e = window.location,
                        r = e.href,
                        n = new URLSearchParams(e.search),
                        i = r.includes("#debug") || r.includes("/_debug") || n.has("debug") || !1,
                        o = r.includes("#production") || n.has("production");
                    return i && !o
                }, [t])
            }

            function a(t, e = 0) {
                (0, n.useEffect)(() => {
                    if (t) return i.Z.add(t, e), () => i.Z.remove(t)
                }, [t, e])
            }

            function l(t) {
                let [e, r] = (0, n.useState)();
                return (0, n.useEffect)(() => {
                    let e = window.matchMedia(t);

                    function n() {
                        r(e.matches)
                    }
                    return e.addEventListener("change", n, !1), n(), () => e.removeEventListener("change", n, !1)
                }, [t]), e
            }

            function u() {
                return (u = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }).apply(this, arguments)
            }

            function c({
                ignoreTransform: t = !1,
                lazy: e = !1,
                debounce: r = 1e3,
                resizeDebounce: i = r,
                callback: s = () => {}
            } = {}, a = []) {
                let [l, c] = (0, n.useState)(), [h, f] = (0, n.useState)({}), d = (0, n.useRef)({}), [p] = function({
                    lazy: t = !1,
                    debounce: e = 1e3,
                    box: r = "border-box",
                    callback: i = () => {}
                } = {}, s = []) {
                    let a = (0, n.useRef)({}),
                        [l, u] = (0, n.useState)({}),
                        [c, h] = (0, n.useState)();
                    (0, n.useEffect)(() => {
                        if (!c) return;
                        let n = o(e, ([e]) => {
                                a.current = e, i(e), t || u(e)
                            }),
                            s = new ResizeObserver(n);
                        return s.observe(c, {
                            box: r
                        }), () => {
                            s.disconnect(), n.cancel()
                        }
                    }, [c, t, e, r, ...s]);
                    let f = (0, n.useCallback)(() => a.current, []);
                    return [h, t ? f : l]
                }({
                    lazy: !0,
                    debounce: i,
                    callback: t => {
                        let r = t.borderBoxSize[0].inlineSize,
                            n = t.borderBoxSize[0].blockSize;
                        d.current.width = r, d.current.height = n, s(d.current), e || f(t => u({}, t, {
                            width: r,
                            height: n
                        }))
                    }
                }, [e, i, ...a]);
                (0, n.useEffect)(() => {
                    if (!l) return;
                    let n = o(r, () => {
                            let r, n;
                            if (t) r = function t(e, r = 0) {
                                let n = r + e.offsetTop;
                                return e.offsetParent ? t(e.offsetParent, n) : n
                            }(l), n = function t(e, r = 0) {
                                let n = r + e.offsetLeft;
                                return e.offsetParent ? t(e.offsetParent, n) : n
                            }(l);
                            else {
                                let t = l.getBoundingClientRect();
                                r = t.top + window.scrollY, n = t.left + window.scrollX
                            }
                            d.current.top = r, d.current.left = n, s(d.current), e || f(t => u({}, t, {
                                top: r,
                                left: n
                            }))
                        }),
                        i = new ResizeObserver(n);
                    return i.observe(document.body), () => {
                        i.disconnect(), n.cancel()
                    }
                }, [l, e, r, t, ...a]);
                let g = (0, n.useCallback)(() => d.current, []);
                return [t => {
                    c(t), p(t)
                }, e ? g : h]
            }
        },
        8824: function(t, e, r) {
            "use strict";
            r.d(e, {
                Ei: function() {
                    return y
                },
                LZ: function() {
                    return _
                }
            });
            var n = r(959),
                i = r(9758);

            function o() {
                return (o = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }).apply(this, arguments)
            }

            function s(t, e, r) {
                return Math.max(t, Math.min(e, r))
            }
            class a {
                advance(t) {
                    var e, r, n, i;
                    if (!this.isRunning) return;
                    let o = !1;
                    if (this.lerp) this.value = (r = this.value, n = this.to, (1 - (i = 1 - Math.exp(-60 * this.lerp * t))) * r + i * n), Math.round(this.value) === this.to && (this.value = this.to, o = !0);
                    else {
                        this.currentTime += t;
                        let e = s(0, this.currentTime / this.duration, 1);
                        o = e >= 1;
                        let r = o ? 1 : this.easing(e);
                        this.value = this.from + (this.to - this.from) * r
                    }
                    null == (e = this.onUpdate) || e.call(this, this.value, {
                        completed: o
                    }), o && this.stop()
                }
                stop() {
                    this.isRunning = !1
                }
                fromTo(t, e, {
                    lerp: r = .1,
                    duration: n = 1,
                    easing: i = t => t,
                    onUpdate: o
                }) {
                    this.from = this.value = t, this.to = e, this.lerp = r, this.duration = n, this.easing = i, this.currentTime = 0, this.isRunning = !0, this.onUpdate = o
                }
            }

            function l(t, e) {
                let r;
                return function() {
                    let n = arguments,
                        i = this;
                    clearTimeout(r), r = setTimeout(function() {
                        t.apply(i, n)
                    }, e)
                }
            }
            class u {
                constructor(t, e) {
                    this.onWindowResize = () => {
                        this.width = window.innerWidth, this.height = window.innerHeight
                    }, this.onWrapperResize = () => {
                        this.width = this.wrapper.clientWidth, this.height = this.wrapper.clientHeight
                    }, this.onContentResize = () => {
                        let t = this.wrapper === window ? document.documentElement : this.wrapper;
                        this.scrollHeight = t.scrollHeight, this.scrollWidth = t.scrollWidth
                    }, this.wrapper = t, this.content = e, this.wrapper === window ? (window.addEventListener("resize", this.onWindowResize, !1), this.onWindowResize()) : (this.wrapperResizeObserver = new ResizeObserver(l(this.onWrapperResize, 100)), this.wrapperResizeObserver.observe(this.wrapper), this.onWrapperResize()), this.contentResizeObserver = new ResizeObserver(l(this.onContentResize, 100)), this.contentResizeObserver.observe(this.content), this.onContentResize()
                }
                destroy() {
                    var t, e;
                    window.removeEventListener("resize", this.onWindowResize, !1), null == (t = this.wrapperResizeObserver) || t.disconnect(), null == (e = this.contentResizeObserver) || e.disconnect()
                }
                get limit() {
                    return {
                        x: this.scrollWidth - this.width,
                        y: this.scrollHeight - this.height
                    }
                }
            }
            let c = () => ({
                events: {},
                emit(t, ...e) {
                    let r = this.events[t] || [];
                    for (let t = 0, n = r.length; t < n; t++) r[t](...e)
                },
                on(t, e) {
                    var r;
                    return (null == (r = this.events[t]) ? void 0 : r.push(e)) || (this.events[t] = [e]), () => {
                        var r;
                        this.events[t] = null == (r = this.events[t]) ? void 0 : r.filter(t => e !== t)
                    }
                }
            });
            class h {
                constructor(t, {
                    wheelMultiplier: e = 1,
                    touchMultiplier: r = 2,
                    normalizeWheel: n = !1
                }) {
                    this.onTouchStart = t => {
                        let {
                            clientX: e,
                            clientY: r
                        } = t.targetTouches ? t.targetTouches[0] : t;
                        this.touchStart.x = e, this.touchStart.y = r, this.lastDelta = {
                            x: 0,
                            y: 0
                        }
                    }, this.onTouchMove = t => {
                        let {
                            clientX: e,
                            clientY: r
                        } = t.targetTouches ? t.targetTouches[0] : t, n = -(e - this.touchStart.x) * this.touchMultiplier, i = -(r - this.touchStart.y) * this.touchMultiplier;
                        this.touchStart.x = e, this.touchStart.y = r, this.lastDelta = {
                            x: n,
                            y: i
                        }, this.emitter.emit("scroll", {
                            type: "touch",
                            deltaX: n,
                            deltaY: i,
                            event: t
                        })
                    }, this.onTouchEnd = t => {
                        this.emitter.emit("scroll", {
                            type: "touch",
                            inertia: !0,
                            deltaX: this.lastDelta.x,
                            deltaY: this.lastDelta.y,
                            event: t
                        })
                    }, this.onWheel = t => {
                        let {
                            deltaX: e,
                            deltaY: r
                        } = t;
                        this.normalizeWheel && (e = s(-100, e, 100), r = s(-100, r, 100)), e *= this.wheelMultiplier, r *= this.wheelMultiplier, this.emitter.emit("scroll", {
                            type: "wheel",
                            deltaX: e,
                            deltaY: r,
                            event: t
                        })
                    }, this.element = t, this.wheelMultiplier = e, this.touchMultiplier = r, this.normalizeWheel = n, this.touchStart = {
                        x: null,
                        y: null
                    }, this.emitter = c(), this.element.addEventListener("wheel", this.onWheel, {
                        passive: !1
                    }), this.element.addEventListener("touchstart", this.onTouchStart, {
                        passive: !1
                    }), this.element.addEventListener("touchmove", this.onTouchMove, {
                        passive: !1
                    }), this.element.addEventListener("touchend", this.onTouchEnd, {
                        passive: !1
                    })
                }
                on(t, e) {
                    return this.emitter.on(t, e)
                }
                destroy() {
                    this.emitter.events = {}, this.element.removeEventListener("wheel", this.onWheel, {
                        passive: !1
                    }), this.element.removeEventListener("touchstart", this.onTouchStart, {
                        passive: !1
                    }), this.element.removeEventListener("touchmove", this.onTouchMove, {
                        passive: !1
                    }), this.element.removeEventListener("touchend", this.onTouchEnd, {
                        passive: !1
                    })
                }
            }
            class f {
                constructor({
                    direction: t,
                    gestureDirection: e,
                    mouseMultiplier: r,
                    smooth: n,
                    wrapper: i = window,
                    content: s = document.documentElement,
                    wheelEventsTarget: l = i,
                    smoothWheel: f = null == n || n,
                    smoothTouch: d = !1,
                    syncTouch: p = !1,
                    syncTouchLerp: g = .1,
                    touchInertiaMultiplier: m = 35,
                    duration: v,
                    easing: _ = t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                    lerp: y = v ? null : .1,
                    infinite: b = !1,
                    orientation: w = null != t ? t : "vertical",
                    gestureOrientation: T = null != e ? e : "vertical",
                    touchMultiplier: x = 1,
                    wheelMultiplier: S = null != r ? r : 1,
                    normalizeWheel: P = !1
                } = {}) {
                    this.onVirtualScroll = ({
                        type: t,
                        inertia: e,
                        deltaX: r,
                        deltaY: n,
                        event: i
                    }) => {
                        if (i.ctrlKey) return;
                        let s = "touch" === t;
                        if ("vertical" === this.options.gestureOrientation && 0 === n || "horizontal" === this.options.gestureOrientation && 0 === r || s && "vertical" === this.options.gestureOrientation && 0 === this.scroll && !this.options.infinite && n <= 0 || i.composedPath().find(t => null == t || null == t.hasAttribute ? void 0 : t.hasAttribute("data-lenis-prevent"))) return;
                        if (this.isStopped || this.isLocked) return void i.preventDefault();
                        if (this.isSmooth = (this.options.smoothTouch || this.options.syncTouch) && s || this.options.smoothWheel && "wheel" === t, !this.isSmooth) return this.isScrolling = !1, void this.animate.stop();
                        i.preventDefault();
                        let a = n;
                        "both" === this.options.gestureOrientation ? a = Math.abs(n) > Math.abs(r) ? n : r : "horizontal" === this.options.gestureOrientation && (a = r);
                        let l = s && this.options.syncTouch,
                            u = s && e && Math.abs(a) > 1;
                        u && (a = this.velocity * this.options.touchInertiaMultiplier), this.scrollTo(this.targetScroll + a, o({
                            programmatic: !1
                        }, l && {
                            lerp: u ? this.syncTouchLerp : .4
                        }))
                    }, this.onScroll = () => {
                        if (!this.isScrolling) {
                            let t = this.animatedScroll;
                            this.animatedScroll = this.targetScroll = this.actualScroll, this.velocity = 0, this.direction = Math.sign(this.animatedScroll - t), this.emit()
                        }
                    }, t && console.warn("Lenis: `direction` option is deprecated, use `orientation` instead"), e && console.warn("Lenis: `gestureDirection` option is deprecated, use `gestureOrientation` instead"), r && console.warn("Lenis: `mouseMultiplier` option is deprecated, use `wheelMultiplier` instead"), n && console.warn("Lenis: `smooth` option is deprecated, use `smoothWheel` instead"), window.lenisVersion = "1.0.13", i !== document.documentElement && i !== document.body || (i = window), this.options = {
                        wrapper: i,
                        content: s,
                        wheelEventsTarget: l,
                        smoothWheel: f,
                        smoothTouch: d,
                        syncTouch: p,
                        syncTouchLerp: g,
                        touchInertiaMultiplier: m,
                        duration: v,
                        easing: _,
                        lerp: y,
                        infinite: b,
                        gestureOrientation: T,
                        orientation: w,
                        touchMultiplier: x,
                        wheelMultiplier: S,
                        normalizeWheel: P
                    }, this.dimensions = new u(i, s), this.rootElement.classList.add("lenis"), this.velocity = 0, this.isStopped = !1, this.isSmooth = f || d, this.isScrolling = !1, this.targetScroll = this.animatedScroll = this.actualScroll, this.animate = new a, this.emitter = c(), this.options.wrapper.addEventListener("scroll", this.onScroll, {
                        passive: !1
                    }), this.virtualScroll = new h(l, {
                        touchMultiplier: x,
                        wheelMultiplier: S,
                        normalizeWheel: P
                    }), this.virtualScroll.on("scroll", this.onVirtualScroll)
                }
                destroy() {
                    this.emitter.events = {}, this.options.wrapper.removeEventListener("scroll", this.onScroll, {
                        passive: !1
                    }), this.virtualScroll.destroy(), this.rootElement.classList.remove("lenis"), this.rootElement.classList.remove("lenis-smooth"), this.rootElement.classList.remove("lenis-scrolling"), this.rootElement.classList.remove("lenis-stopped")
                }
                on(t, e) {
                    return this.emitter.on(t, e)
                }
                off(t, e) {
                    var r;
                    this.emitter.events[t] = null == (r = this.emitter.events[t]) ? void 0 : r.filter(t => e !== t)
                }
                setScroll(t) {
                    this.isHorizontal ? this.rootElement.scrollLeft = t : this.rootElement.scrollTop = t
                }
                emit() {
                    this.emitter.emit("scroll", this)
                }
                reset() {
                    this.isLocked = !1, this.isScrolling = !1, this.velocity = 0, this.animate.stop()
                }
                start() {
                    this.isStopped = !1, this.reset()
                }
                stop() {
                    this.isStopped = !0, this.animate.stop(), this.reset()
                }
                raf(t) {
                    let e = t - (this.time || t);
                    this.time = t, this.animate.advance(.001 * e)
                }
                scrollTo(t, {
                    offset: e = 0,
                    immediate: r = !1,
                    lock: n = !1,
                    duration: i = this.options.duration,
                    easing: o = this.options.easing,
                    lerp: a = !i && this.options.lerp,
                    onComplete: l = null,
                    force: u = !1,
                    programmatic: c = !0
                } = {}) {
                    if (!this.isStopped || u) {
                        if (["top", "left", "start"].includes(t)) t = 0;
                        else if (["bottom", "right", "end"].includes(t)) t = this.limit;
                        else {
                            var h;
                            let r;
                            if ("string" == typeof t ? r = document.querySelector(t) : null != (h = t) && h.nodeType && (r = t), r) {
                                if (this.options.wrapper !== window) {
                                    let t = this.options.wrapper.getBoundingClientRect();
                                    e -= this.isHorizontal ? t.left : t.top
                                }
                                let n = r.getBoundingClientRect();
                                t = (this.isHorizontal ? n.left : n.top) + this.animatedScroll
                            }
                        }
                        if ("number" == typeof t) {
                            if (t += e, t = Math.round(t), this.options.infinite ? c && (this.targetScroll = this.animatedScroll = this.scroll) : t = s(0, t, this.limit), r) return this.animatedScroll = this.targetScroll = t, this.setScroll(this.scroll), this.reset(), this.emit(), void(null == l || l());
                            if (!c) {
                                if (t === this.targetScroll) return;
                                this.targetScroll = t
                            }
                            this.animate.fromTo(this.animatedScroll, t, {
                                duration: i,
                                easing: o,
                                lerp: a,
                                onUpdate: (t, {
                                    completed: e
                                }) => {
                                    n && (this.isLocked = !0), this.isScrolling = !0, this.velocity = t - this.animatedScroll, this.direction = Math.sign(this.velocity), this.animatedScroll = t, this.setScroll(this.scroll), c && (this.targetScroll = t), e && (n && (this.isLocked = !1), requestAnimationFrame(() => {
                                        this.isScrolling = !1
                                    }), this.velocity = 0, null == l || l()), this.emit()
                                }
                            })
                        }
                    }
                }
                get rootElement() {
                    return this.options.wrapper === window ? this.options.content : this.options.wrapper
                }
                get limit() {
                    return this.isHorizontal ? this.dimensions.limit.x : this.dimensions.limit.y
                }
                get isHorizontal() {
                    return "horizontal" === this.options.orientation
                }
                get actualScroll() {
                    return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop
                }
                get scroll() {
                    var t;
                    return this.options.infinite ? (this.animatedScroll % (t = this.limit) + t) % t : this.animatedScroll
                }
                get progress() {
                    return 0 === this.limit ? 1 : this.scroll / this.limit
                }
                get isSmooth() {
                    return this.__isSmooth
                }
                set isSmooth(t) {
                    this.__isSmooth !== t && (this.rootElement.classList.toggle("lenis-smooth", t), this.__isSmooth = t)
                }
                get isScrolling() {
                    return this.__isScrolling
                }
                set isScrolling(t) {
                    this.__isScrolling !== t && (this.rootElement.classList.toggle("lenis-scrolling", t), this.__isScrolling = t)
                }
                get isStopped() {
                    return this.__isStopped
                }
                set isStopped(t) {
                    this.__isStopped !== t && (this.rootElement.classList.toggle("lenis-stopped", t), this.__isStopped = t)
                }
            }
            var d = r(507),
                p = r(8063);

            function g() {
                return (g = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }).apply(this, arguments)
            }
            let m = (0, n.createContext)(),
                v = (0, p.Ue)(() => ({}));

            function _(t, e = [], r = 0) {
                let {
                    lenis: i,
                    addCallback: o,
                    removeCallback: s
                } = function() {
                    let t = (0, n.useContext)(m),
                        e = v();
                    return null != t ? t : e
                }();
                return (0, n.useEffect)(() => {
                    if (t && o && s && i) return o(t, r), t(i), () => {
                        s(t)
                    }
                }, [i, o, s, r, ...e]), i
            }
            let y = (0, n.forwardRef)(({
                children: t,
                root: e = !1,
                options: r = {},
                isStopped: o = !1,
                className: s
            }, a) => {
                let l = (0, n.useRef)(),
                    u = (0, n.useRef)(),
                    [c, h] = (0, n.useState)(),
                    d = (0, n.useRef)([]),
                    p = (0, n.useCallback)((t, e) => {
                        d.current.push({
                            callback: t,
                            priority: e
                        }), d.current.sort((t, e) => t.priority - e.priority)
                    }, []),
                    _ = (0, n.useCallback)(t => {
                        d.current = d.current.filter(e => e.callback !== t)
                    }, []);
                (0, n.useImperativeHandle)(a, () => c, [c]), (0, n.useEffect)(() => {
                    let t = new f(g({}, r, !e && {
                        wrapper: l.current,
                        content: u.current
                    }));
                    return h(t), () => {
                        t.destroy(), h(void 0)
                    }
                }, [e, JSON.stringify(r)]),
                function(t, e = 0) {
                    (0, n.useEffect)(() => {
                        if (t) return i.Z.add(t, e), () => i.Z.remove(t)
                    }, [t, e])
                }(t => {
                    null == c || c.raf(t)
                }), (0, n.useEffect)(() => {
                    c && (o ? c.stop() : c.start())
                }, [c, o]), (0, n.useEffect)(() => {
                    e && c && v.setState({
                        lenis: c,
                        addCallback: p,
                        removeCallback: _
                    })
                }, [e, c, p, _]);
                let y = (0, n.useCallback)(t => {
                    for (let e = 0; e < d.current.length; e++) d.current[e].callback(t)
                }, []);
                return (0, n.useEffect)(() => {
                    if (c) return c.on("scroll", y), () => {
                        c.off("scroll", y)
                    }
                }, [c, y]), n.createElement(m.Provider, {
                    value: {
                        lenis: c,
                        addCallback: p,
                        removeCallback: _
                    }
                }, e ? t : n.createElement("div", {
                    ref: l,
                    className: s
                }, n.createElement("div", {
                    ref: u
                }, t)))
            });
            y.displayName = "ReactLenis", y.propTypes = {
                children: d.node,
                root: d.bool,
                options: d.object,
                isStopped: d.bool,
                className: d.string
            }
        },
        9758: function(t, e, r) {
            "use strict";
            r.d(e, {
                Z: function() {
                    return i
                }
            });
            let n = "undefined" != typeof window;
            n || console.warn("Tempus can be used in client side only");
            var i = n && new class {
                constructor() {
                    this.raf = t => {
                        requestAnimationFrame(this.raf);
                        let e = t - this.now;
                        this.now = t;
                        for (let r = 0; r < this.callbacks.length; r++) this.callbacks[r].callback(t, e)
                    }, this.callbacks = [], this.now = performance.now(), requestAnimationFrame(this.raf)
                }
                add(t, e = 0) {
                    return this.callbacks.push({
                        callback: t,
                        priority: e
                    }), this.callbacks.sort((t, e) => t.priority - e.priority), () => this.remove(t)
                }
                remove(t) {
                    this.callbacks = this.callbacks.filter(({
                        callback: e
                    }) => t !== e)
                }
            }
        },
        8063: function(t, e, r) {
            "use strict";
            r.d(e, {
                Ue: function() {
                    return u
                }
            });
            let n = t => {
                    let e;
                    let r = new Set,
                        n = (t, n) => {
                            let i = "function" == typeof t ? t(e) : t;
                            if (!Object.is(i, e)) {
                                let t = e;
                                e = (null != n ? n : "object" != typeof i) ? i : Object.assign({}, e, i), r.forEach(r => r(e, t))
                            }
                        },
                        i = () => e,
                        o = {
                            setState: n,
                            getState: i,
                            subscribe: t => (r.add(t), () => r.delete(t)),
                            destroy: () => {
                                console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."), r.clear()
                            }
                        };
                    return e = t(n, i, o), o
                },
                i = t => t ? n(t) : n;
            var o = r(959),
                s = r(7231);
            let {
                useSyncExternalStoreWithSelector: a
            } = s, l = t => {
                "function" != typeof t && console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");
                let e = "function" == typeof t ? i(t) : t,
                    r = (t, r) => (function(t, e = t.getState, r) {
                        let n = a(t.subscribe, t.getState, t.getServerState || t.getState, e, r);
                        return (0, o.useDebugValue)(n), n
                    })(e, t, r);
                return Object.assign(r, e), r
            }, u = t => t ? l(t) : l
        }
    },
    function(t) {
        var e = function(e) {
            return t(t.s = e)
        };
        t.O(0, [9774, 179], function() {
            return e(7778), e(2559)
        }), _N_E = t.O()
    }
]);