"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2634], {
        2634: function(e, t, r) {
            r.r(t), r.d(t, {
                Progress: function() {
                    return s
                }
            });
            var n = r(688),
                u = r(1171);
            let c = 0,
                a = (0, u.Z)(e => (n.DefaultLoadingManager.onStart = (t, r, n) => {
                    e({
                        active: !0,
                        item: t,
                        loaded: r,
                        total: n,
                        progress: (r - c) / (n - c) * 100
                    })
                }, n.DefaultLoadingManager.onLoad = () => {
                    e({
                        active: !1
                    })
                }, n.DefaultLoadingManager.onError = t => e(e => ({
                    errors: [...e.errors, t]
                })), n.DefaultLoadingManager.onProgress = (t, r, n) => {
                    r === n && (c = n), e({
                        active: !0,
                        item: t,
                        loaded: r,
                        total: n,
                        progress: (r - c) / (n - c) * 100 || 100
                    })
                }, {
                    errors: [],
                    active: !1,
                    progress: 0,
                    item: "",
                    loaded: 0,
                    total: 0
                }));
            var o = r(959);

            function s(e) {
                let {
                    onLoad: t
                } = e, {
                    loaded: r,
                    total: n
                } = a(), u = (0, o.useMemo)(() => r / n >= 1, [r, n]);
                (0, o.useEffect)(() => {
                    u && r > 50 && (null == t || t())
                }, [u, r])
            }
        },
        1171: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return a
                }
            });
            var n = r(959);
            let u = "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
                c = u ? n.useEffect : n.useLayoutEffect;

            function a(e) {
                let t = "function" == typeof e ? function(e) {
                        let t;
                        let r = new Set,
                            n = (e, n) => {
                                let u = "function" == typeof e ? e(t) : e;
                                if (u !== t) {
                                    let e = t;
                                    t = n ? u : Object.assign({}, t, u), r.forEach(r => r(t, e))
                                }
                            },
                            u = () => t,
                            c = (e, n = u, c = Object.is) => {
                                console.warn("[DEPRECATED] Please use `subscribeWithSelector` middleware");
                                let a = n(t);

                                function o() {
                                    let r = n(t);
                                    if (!c(a, r)) {
                                        let t = a;
                                        e(a = r, t)
                                    }
                                }
                                return r.add(o), () => r.delete(o)
                            },
                            a = {
                                setState: n,
                                getState: u,
                                subscribe: (e, t, n) => t || n ? c(e, t, n) : (r.add(e), () => r.delete(e)),
                                destroy: () => r.clear()
                            };
                        return t = e(n, u, a), a
                    }(e) : e,
                    r = (e = t.getState, r = Object.is) => {
                        let u;
                        let [, a] = (0, n.useReducer)(e => e + 1, 0), o = t.getState(), s = (0, n.useRef)(o), i = (0, n.useRef)(e), l = (0, n.useRef)(r), f = (0, n.useRef)(!1), d = (0, n.useRef)();
                        void 0 === d.current && (d.current = e(o));
                        let g = !1;
                        (s.current !== o || i.current !== e || l.current !== r || f.current) && (u = e(o), g = !r(d.current, u)), c(() => {
                            g && (d.current = u), s.current = o, i.current = e, l.current = r, f.current = !1
                        });
                        let b = (0, n.useRef)(o);
                        c(() => {
                            let e = () => {
                                    try {
                                        let e = t.getState(),
                                            r = i.current(e);
                                        l.current(d.current, r) || (s.current = e, d.current = r, a())
                                    } catch (e) {
                                        f.current = !0, a()
                                    }
                                },
                                r = t.subscribe(e);
                            return t.getState() !== b.current && e(), r
                        }, []);
                        let v = g ? u : d.current;
                        return (0, n.useDebugValue)(v), v
                    };
                return Object.assign(r, t), r[Symbol.iterator] = function() {
                    console.warn("[useStore, api] = create() is deprecated and will be removed in v4");
                    let e = [r, t];
                    return {
                        next() {
                            let t = e.length <= 0;
                            return {
                                value: e.shift(),
                                done: t
                            }
                        }
                    }
                }, r
            }
        }
    }
]);