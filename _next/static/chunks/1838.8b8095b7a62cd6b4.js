(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1838], {
        7065: function(t, e, i) {
            "use strict";
            i.d(e, {
                Xz: function() {
                    return k
                }
            });
            var s = i(4381),
                r = i(795),
                n = i(959),
                a = i(688),
                h = i(1110),
                o = i.n(h);
            let l = ["x", "y", "top", "bottom", "left", "right", "width", "height"],
                u = (t, e) => l.every(i => t[i] === e[i]);
            var c = Object.defineProperty,
                d = Object.defineProperties,
                p = Object.getOwnPropertyDescriptors,
                m = Object.getOwnPropertySymbols,
                y = Object.prototype.hasOwnProperty,
                x = Object.prototype.propertyIsEnumerable,
                f = (t, e, i) => e in t ? c(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: i
                }) : t[e] = i,
                g = (t, e) => {
                    for (var i in e || (e = {})) y.call(e, i) && f(t, i, e[i]);
                    if (m)
                        for (var i of m(e)) x.call(e, i) && f(t, i, e[i]);
                    return t
                },
                M = (t, e) => d(t, p(e));

            function b(t) {
                try {
                    return Object.defineProperties(t, {
                        _currentRenderer: {
                            get: () => null,
                            set() {}
                        },
                        _currentRenderer2: {
                            get: () => null,
                            set() {}
                        }
                    })
                } catch (e) {
                    return t
                }
            }
            let w = b(n.createContext(null));
            class v extends n.Component {
                render() {
                    return n.createElement(w.Provider, {
                        value: this._reactInternals
                    }, this.props.children)
                }
            }
            let {
                ReactCurrentOwner: z,
                ReactCurrentDispatcher: S
            } = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
            i(5259), i(7427), i(5297);
            let _ = {
                onClick: ["click", !1],
                onContextMenu: ["contextmenu", !1],
                onDoubleClick: ["dblclick", !1],
                onWheel: ["wheel", !0],
                onPointerDown: ["pointerdown", !0],
                onPointerUp: ["pointerup", !0],
                onPointerLeave: ["pointerleave", !0],
                onPointerMove: ["pointermove", !0],
                onPointerCancel: ["pointercancel", !0],
                onLostPointerCapture: ["lostpointercapture", !0]
            };

            function A(t) {
                let {
                    handlePointer: e
                } = (0, s.c)(t);
                return {
                    priority: 1,
                    enabled: !0,
                    compute(t, e, i) {
                        e.pointer.set(t.offsetX / e.size.width * 2 - 1, -(2 * (t.offsetY / e.size.height)) + 1), e.raycaster.setFromCamera(e.pointer, e.camera)
                    },
                    connected: void 0,
                    handlers: Object.keys(_).reduce((t, i) => ({ ...t,
                        [i]: e(i)
                    }), {}),
                    update: () => {
                        var e;
                        let {
                            events: i,
                            internal: s
                        } = t.getState();
                        null != (e = s.lastEvent) && e.current && i.handlers && i.handlers.onPointerMove(s.lastEvent.current)
                    },
                    connect: e => {
                        var i;
                        let {
                            set: s,
                            events: r
                        } = t.getState();
                        null == r.disconnect || r.disconnect(), s(t => ({
                            events: { ...t.events,
                                connected: e
                            }
                        })), Object.entries(null != (i = r.handlers) ? i : []).forEach(([t, i]) => {
                            let [s, r] = _[t];
                            e.addEventListener(s, i, {
                                passive: r
                            })
                        })
                    },
                    disconnect: () => {
                        let {
                            set: e,
                            events: i
                        } = t.getState();
                        if (i.connected) {
                            var s;
                            Object.entries(null != (s = i.handlers) ? s : []).forEach(([t, e]) => {
                                if (i && i.connected instanceof HTMLElement) {
                                    let [s] = _[t];
                                    i.connected.removeEventListener(s, e)
                                }
                            }), e(t => ({
                                events: { ...t.events,
                                    connected: void 0
                                }
                            }))
                        }
                    }
                }
            }
            let T = n.forwardRef(function({
                    children: t,
                    fallback: e,
                    resize: i,
                    style: h,
                    gl: l,
                    events: c = A,
                    eventSource: d,
                    eventPrefix: p,
                    shadows: m,
                    linear: y,
                    flat: x,
                    legacy: f,
                    orthographic: _,
                    frameloop: T,
                    dpr: k,
                    performance: P,
                    raycaster: E,
                    camera: C,
                    onPointerMissed: B,
                    onCreated: F,
                    ...O
                }, R) {
                    n.useMemo(() => (0, s.e)(a), []);
                    let I = function() {
                            let t = function() {
                                var t, e;
                                let i = function() {
                                        let t = n.useContext(w);
                                        if (null === t) throw Error("its-fine: useFiber must be called within a <FiberProvider />!");
                                        let e = n.useId(),
                                            i = n.useMemo(() => {
                                                for (let i of [null == z ? void 0 : z.current, t, null == t ? void 0 : t.alternate]) {
                                                    if (!i) continue;
                                                    let t = function t(e, i, s) {
                                                        if (!e) return;
                                                        if (!0 === s(e)) return e;
                                                        let r = i ? e.return : e.child;
                                                        for (; r;) {
                                                            let e = t(r, i, s);
                                                            if (e) return e;
                                                            r = i ? null : r.sibling
                                                        }
                                                    }(i, !1, t => {
                                                        let i = t.memoizedState;
                                                        for (; i;) {
                                                            if (i.memoizedState === e) return !0;
                                                            i = i.next
                                                        }
                                                    });
                                                    if (t) return t
                                                }
                                            }, [t, e]);
                                        return i
                                    }(),
                                    [s] = n.useState(() => new Map);
                                s.clear();
                                let r = i;
                                for (; r;) {
                                    let i = null == (t = r.type) ? void 0 : t._context;
                                    i && i !== w && !s.has(i) && s.set(i, null == (e = null == S ? void 0 : S.current) ? void 0 : e.readContext(b(i))), r = r.return
                                }
                                return s
                            }();
                            return n.useMemo(() => Array.from(t.keys()).reduce((e, i) => s => n.createElement(e, null, n.createElement(i.Provider, M(g({}, s), {
                                value: t.get(i)
                            }))), t => n.createElement(v, g({}, t))), [t])
                        }(),
                        [V, W] = function(t) {
                            var e;
                            let {
                                debounce: i,
                                scroll: s,
                                polyfill: r,
                                offsetSize: a
                            } = void 0 === t ? {
                                debounce: 0,
                                scroll: !1,
                                offsetSize: !1
                            } : t, h = r || ("undefined" == typeof window ? class {} : window.ResizeObserver);
                            if (!h) throw Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");
                            let [l, c] = (0, n.useState)({
                                left: 0,
                                top: 0,
                                width: 0,
                                height: 0,
                                bottom: 0,
                                right: 0,
                                x: 0,
                                y: 0
                            }), d = (0, n.useRef)({
                                element: null,
                                scrollContainers: null,
                                resizeObserver: null,
                                lastBounds: l
                            }), p = i ? "number" == typeof i ? i : i.scroll : null, m = i ? "number" == typeof i ? i : i.resize : null, y = (0, n.useRef)(!1);
                            (0, n.useEffect)(() => (y.current = !0, () => void(y.current = !1)));
                            let [x, f, g] = (0, n.useMemo)(() => {
                                let t = () => {
                                    if (!d.current.element) return;
                                    let {
                                        left: t,
                                        top: e,
                                        width: i,
                                        height: s,
                                        bottom: r,
                                        right: n,
                                        x: h,
                                        y: o
                                    } = d.current.element.getBoundingClientRect(), l = {
                                        left: t,
                                        top: e,
                                        width: i,
                                        height: s,
                                        bottom: r,
                                        right: n,
                                        x: h,
                                        y: o
                                    };
                                    d.current.element instanceof HTMLElement && a && (l.height = d.current.element.offsetHeight, l.width = d.current.element.offsetWidth), Object.freeze(l), y.current && !u(d.current.lastBounds, l) && c(d.current.lastBounds = l)
                                };
                                return [t, m ? o()(t, m) : t, p ? o()(t, p) : t]
                            }, [c, a, p, m]);

                            function M() {
                                d.current.scrollContainers && (d.current.scrollContainers.forEach(t => t.removeEventListener("scroll", g, !0)), d.current.scrollContainers = null), d.current.resizeObserver && (d.current.resizeObserver.disconnect(), d.current.resizeObserver = null)
                            }

                            function b() {
                                d.current.element && (d.current.resizeObserver = new h(g), d.current.resizeObserver.observe(d.current.element), s && d.current.scrollContainers && d.current.scrollContainers.forEach(t => t.addEventListener("scroll", g, {
                                    capture: !0,
                                    passive: !0
                                })))
                            }
                            return e = !!s, (0, n.useEffect)(() => {
                                if (e) return window.addEventListener("scroll", g, {
                                    capture: !0,
                                    passive: !0
                                }), () => void window.removeEventListener("scroll", g, !0)
                            }, [g, e]), (0, n.useEffect)(() => (window.addEventListener("resize", f), () => void window.removeEventListener("resize", f)), [f]), (0, n.useEffect)(() => {
                                M(), b()
                            }, [s, g, f]), (0, n.useEffect)(() => M, []), [t => {
                                t && t !== d.current.element && (M(), d.current.element = t, d.current.scrollContainers = function t(e) {
                                    let i = [];
                                    if (!e || e === document.body) return i;
                                    let {
                                        overflow: s,
                                        overflowX: r,
                                        overflowY: n
                                    } = window.getComputedStyle(e);
                                    return [s, r, n].some(t => "auto" === t || "scroll" === t) && i.push(e), [...i, ...t(e.parentElement)]
                                }(t), b())
                            }, l, x]
                        }({
                            scroll: !0,
                            debounce: {
                                scroll: 50,
                                resize: 0
                            },
                            ...i
                        }),
                        N = n.useRef(null),
                        U = n.useRef(null);
                    n.useImperativeHandle(R, () => N.current);
                    let L = (0, s.u)(B),
                        [q, D] = n.useState(!1),
                        [j, Z] = n.useState(!1);
                    if (q) throw q;
                    if (j) throw j;
                    let H = n.useRef(null);
                    (0, s.a)(() => {
                        let e = N.current;
                        W.width > 0 && W.height > 0 && e && (H.current || (H.current = (0, s.b)(e)), H.current.configure({
                            gl: l,
                            events: c,
                            shadows: m,
                            linear: y,
                            flat: x,
                            legacy: f,
                            orthographic: _,
                            frameloop: T,
                            dpr: k,
                            performance: P,
                            raycaster: E,
                            camera: C,
                            size: W,
                            onPointerMissed: (...t) => null == L.current ? void 0 : L.current(...t),
                            onCreated: t => {
                                null == t.events.connect || t.events.connect(d ? (0, s.i)(d) ? d.current : d : U.current), p && t.setEvents({
                                    compute: (t, e) => {
                                        let i = t[p + "X"],
                                            s = t[p + "Y"];
                                        e.pointer.set(i / e.size.width * 2 - 1, -(2 * (s / e.size.height)) + 1), e.raycaster.setFromCamera(e.pointer, e.camera)
                                    }
                                }), null == F || F(t)
                            }
                        }), H.current.render(n.createElement(I, null, n.createElement(s.E, {
                            set: Z
                        }, n.createElement(n.Suspense, {
                            fallback: n.createElement(s.B, {
                                set: D
                            })
                        }, t)))))
                    }), n.useEffect(() => {
                        let t = N.current;
                        if (t) return () => (0, s.d)(t)
                    }, []);
                    let Y = d ? "none" : "auto";
                    return n.createElement("div", (0, r.Z)({
                        ref: U,
                        style: {
                            position: "relative",
                            width: "100%",
                            height: "100%",
                            overflow: "hidden",
                            pointerEvents: Y,
                            ...h
                        }
                    }, O), n.createElement("div", {
                        ref: V,
                        style: {
                            width: "100%",
                            height: "100%"
                        }
                    }, n.createElement("canvas", {
                        ref: N,
                        style: {
                            display: "block"
                        }
                    }, e)))
                }),
                k = n.forwardRef(function(t, e) {
                    return n.createElement(v, null, n.createElement(T, (0, r.Z)({}, t, {
                        ref: e
                    })))
                })
        },
        1110: function(t) {
            function e(t, e, i) {
                function s() {
                    var l = Date.now() - h;
                    l < e && l >= 0 ? r = setTimeout(s, e - l) : (r = null, i || (o = t.apply(a, n), a = n = null))
                }
                null == e && (e = 100);
                var r, n, a, h, o, l = function() {
                    a = this, n = arguments, h = Date.now();
                    var l = i && !r;
                    return r || (r = setTimeout(s, e)), l && (o = t.apply(a, n), a = n = null), o
                };
                return l.clear = function() {
                    r && (clearTimeout(r), r = null)
                }, l.flush = function() {
                    r && (o = t.apply(a, n), a = n = null, clearTimeout(r), r = null)
                }, l
            }
            e.debounce = e, t.exports = e
        },
        5712: function(t, e, i) {
            "use strict";
            i.d(e, {
                i: function() {
                    return h
                }
            });
            var s = i(5293),
                r = i(6690),
                n = i(6582);
            class a extends n.T {
                constructor() {
                    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new r.y, this.projectionMatrix = new r.y, this.projectionMatrixInverse = new r.y, this.coordinateSystem = s._RZ
                }
                copy(t, e) {
                    return super.copy(t, e), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this.projectionMatrixInverse.copy(t.projectionMatrixInverse), this.coordinateSystem = t.coordinateSystem, this
                }
                getWorldDirection(t) {
                    this.updateWorldMatrix(!0, !1);
                    let e = this.matrixWorld.elements;
                    return t.set(-e[8], -e[9], -e[10]).normalize()
                }
                updateMatrixWorld(t) {
                    super.updateMatrixWorld(t), this.matrixWorldInverse.copy(this.matrixWorld).invert()
                }
                updateWorldMatrix(t, e) {
                    super.updateWorldMatrix(t, e), this.matrixWorldInverse.copy(this.matrixWorld).invert()
                }
                clone() {
                    return new this.constructor().copy(this)
                }
            }
            class h extends a {
                constructor(t = -1, e = 1, i = 1, s = -1, r = .1, n = 2e3) {
                    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t, this.right = e, this.top = i, this.bottom = s, this.near = r, this.far = n, this.updateProjectionMatrix()
                }
                copy(t, e) {
                    return super.copy(t, e), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this.view = null === t.view ? null : Object.assign({}, t.view), this
                }
                setViewOffset(t, e, i, s, r, n) {
                    null === this.view && (this.view = {
                        enabled: !0,
                        fullWidth: 1,
                        fullHeight: 1,
                        offsetX: 0,
                        offsetY: 0,
                        width: 1,
                        height: 1
                    }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = i, this.view.offsetY = s, this.view.width = r, this.view.height = n, this.updateProjectionMatrix()
                }
                clearViewOffset() {
                    null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix()
                }
                updateProjectionMatrix() {
                    let t = (this.right - this.left) / (2 * this.zoom),
                        e = (this.top - this.bottom) / (2 * this.zoom),
                        i = (this.right + this.left) / 2,
                        s = (this.top + this.bottom) / 2,
                        r = i - t,
                        n = i + t,
                        a = s + e,
                        h = s - e;
                    if (null !== this.view && this.view.enabled) {
                        let t = (this.right - this.left) / this.view.fullWidth / this.zoom,
                            e = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
                        r += t * this.view.offsetX, n = r + t * this.view.width, a -= e * this.view.offsetY, h = a - e * this.view.height
                    }
                    this.projectionMatrix.makeOrthographic(r, n, a, h, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
                }
                toJSON(t) {
                    let e = super.toJSON(t);
                    return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, null !== this.view && (e.object.view = Object.assign({}, this.view)), e
                }
            }
        },
        5293: function(t, e, i) {
            "use strict";
            i.d(e, {
                D1R: function() {
                    return f
                },
                GUF: function() {
                    return k
                },
                JCZ: function() {
                    return O
                },
                KI_: function() {
                    return T
                },
                LgZ: function() {
                    return o
                },
                Ns1: function() {
                    return u
                },
                OoA: function() {
                    return m
                },
                TyD: function() {
                    return y
                },
                VzW: function() {
                    return M
                },
                W2J: function() {
                    return B
                },
                Wl3: function() {
                    return s
                },
                _Li: function() {
                    return r
                },
                _RZ: function() {
                    return F
                },
                aCh: function() {
                    return A
                },
                av9: function() {
                    return z
                },
                bGH: function() {
                    return a
                },
                bdR: function() {
                    return n
                },
                cLu: function() {
                    return b
                },
                cum: function() {
                    return C
                },
                hEm: function() {
                    return v
                },
                k74: function() {
                    return h
                },
                knz: function() {
                    return _
                },
                ntt: function() {
                    return P
                },
                rnI: function() {
                    return S
                },
                rpg: function() {
                    return d
                },
                uWy: function() {
                    return p
                },
                vCF: function() {
                    return l
                },
                wem: function() {
                    return x
                },
                wk1: function() {
                    return w
                },
                x5V: function() {
                    return E
                },
                xfE: function() {
                    return c
                },
                ywz: function() {
                    return g
                }
            });
            let s = 0,
                r = 1,
                n = 1,
                a = 100,
                h = 204,
                o = 205,
                l = 3,
                u = 0,
                c = 300,
                d = 1e3,
                p = 1001,
                m = 1002,
                y = 1003,
                x = 1006,
                f = 1008,
                g = 1009,
                M = 1015,
                b = 1016,
                w = 1023,
                v = 1028,
                z = 1030,
                S = 3e3,
                _ = 3001,
                A = "",
                T = "srgb",
                k = "srgb-linear",
                P = "display-p3",
                E = 7680,
                C = 519,
                B = 35044,
                F = 2e3,
                O = 2001
        },
        3493: function(t, e, i) {
            "use strict";
            i.d(e, {
                Tl: function() {
                    return l
                },
                a$: function() {
                    return d
                },
                lC: function() {
                    return c
                },
                ql: function() {
                    return u
                }
            });
            var s = i(7714),
                r = i(7146),
                n = i(2424),
                a = i(5293);
            let h = new s.P,
                o = new r.F;
            class l {
                constructor(t, e, i = !1) {
                    if (Array.isArray(t)) throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");
                    this.isBufferAttribute = !0, this.name = "", this.array = t, this.itemSize = e, this.count = void 0 !== t ? t.length / e : 0, this.normalized = i, this.usage = a.W2J, this.updateRange = {
                        offset: 0,
                        count: -1
                    }, this.gpuType = a.VzW, this.version = 0
                }
                onUploadCallback() {}
                set needsUpdate(t) {
                    !0 === t && this.version++
                }
                setUsage(t) {
                    return this.usage = t, this
                }
                copy(t) {
                    return this.name = t.name, this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.usage = t.usage, this.gpuType = t.gpuType, this
                }
                copyAt(t, e, i) {
                    t *= this.itemSize, i *= e.itemSize;
                    for (let s = 0, r = this.itemSize; s < r; s++) this.array[t + s] = e.array[i + s];
                    return this
                }
                copyArray(t) {
                    return this.array.set(t), this
                }
                applyMatrix3(t) {
                    if (2 === this.itemSize)
                        for (let e = 0, i = this.count; e < i; e++) o.fromBufferAttribute(this, e), o.applyMatrix3(t), this.setXY(e, o.x, o.y);
                    else if (3 === this.itemSize)
                        for (let e = 0, i = this.count; e < i; e++) h.fromBufferAttribute(this, e), h.applyMatrix3(t), this.setXYZ(e, h.x, h.y, h.z);
                    return this
                }
                applyMatrix4(t) {
                    for (let e = 0, i = this.count; e < i; e++) h.fromBufferAttribute(this, e), h.applyMatrix4(t), this.setXYZ(e, h.x, h.y, h.z);
                    return this
                }
                applyNormalMatrix(t) {
                    for (let e = 0, i = this.count; e < i; e++) h.fromBufferAttribute(this, e), h.applyNormalMatrix(t), this.setXYZ(e, h.x, h.y, h.z);
                    return this
                }
                transformDirection(t) {
                    for (let e = 0, i = this.count; e < i; e++) h.fromBufferAttribute(this, e), h.transformDirection(t), this.setXYZ(e, h.x, h.y, h.z);
                    return this
                }
                set(t, e = 0) {
                    return this.array.set(t, e), this
                }
                getX(t) {
                    let e = this.array[t * this.itemSize];
                    return this.normalized && (e = (0, n.cY)(e, this.array)), e
                }
                setX(t, e) {
                    return this.normalized && (e = (0, n.Fv)(e, this.array)), this.array[t * this.itemSize] = e, this
                }
                getY(t) {
                    let e = this.array[t * this.itemSize + 1];
                    return this.normalized && (e = (0, n.cY)(e, this.array)), e
                }
                setY(t, e) {
                    return this.normalized && (e = (0, n.Fv)(e, this.array)), this.array[t * this.itemSize + 1] = e, this
                }
                getZ(t) {
                    let e = this.array[t * this.itemSize + 2];
                    return this.normalized && (e = (0, n.cY)(e, this.array)), e
                }
                setZ(t, e) {
                    return this.normalized && (e = (0, n.Fv)(e, this.array)), this.array[t * this.itemSize + 2] = e, this
                }
                getW(t) {
                    let e = this.array[t * this.itemSize + 3];
                    return this.normalized && (e = (0, n.cY)(e, this.array)), e
                }
                setW(t, e) {
                    return this.normalized && (e = (0, n.Fv)(e, this.array)), this.array[t * this.itemSize + 3] = e, this
                }
                setXY(t, e, i) {
                    return t *= this.itemSize, this.normalized && (e = (0, n.Fv)(e, this.array), i = (0, n.Fv)(i, this.array)), this.array[t + 0] = e, this.array[t + 1] = i, this
                }
                setXYZ(t, e, i, s) {
                    return t *= this.itemSize, this.normalized && (e = (0, n.Fv)(e, this.array), i = (0, n.Fv)(i, this.array), s = (0, n.Fv)(s, this.array)), this.array[t + 0] = e, this.array[t + 1] = i, this.array[t + 2] = s, this
                }
                setXYZW(t, e, i, s, r) {
                    return t *= this.itemSize, this.normalized && (e = (0, n.Fv)(e, this.array), i = (0, n.Fv)(i, this.array), s = (0, n.Fv)(s, this.array), r = (0, n.Fv)(r, this.array)), this.array[t + 0] = e, this.array[t + 1] = i, this.array[t + 2] = s, this.array[t + 3] = r, this
                }
                onUpload(t) {
                    return this.onUploadCallback = t, this
                }
                clone() {
                    return new this.constructor(this.array, this.itemSize).copy(this)
                }
                toJSON() {
                    let t = {
                        itemSize: this.itemSize,
                        type: this.array.constructor.name,
                        array: Array.from(this.array),
                        normalized: this.normalized
                    };
                    return "" !== this.name && (t.name = this.name), this.usage !== a.W2J && (t.usage = this.usage), (0 !== this.updateRange.offset || -1 !== this.updateRange.count) && (t.updateRange = this.updateRange), t
                }
                copyColorsArray() {
                    console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")
                }
                copyVector2sArray() {
                    console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")
                }
                copyVector3sArray() {
                    console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")
                }
                copyVector4sArray() {
                    console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")
                }
            }
            class u extends l {
                constructor(t, e, i) {
                    super(new Uint16Array(t), e, i)
                }
            }
            class c extends l {
                constructor(t, e, i) {
                    super(new Uint32Array(t), e, i)
                }
            }
            class d extends l {
                constructor(t, e, i) {
                    super(new Float32Array(t), e, i)
                }
            }
        },
        2017: function(t, e, i) {
            "use strict";
            i.d(e, {
                u: function() {
                    return w
                }
            });
            var s = i(7714),
                r = i(7146),
                n = i(1853),
                a = i(9264),
                h = i(3493),
                o = i(7708),
                l = i(6582),
                u = i(6690),
                c = i(763),
                d = i(2424),
                p = i(7957);
            let m = 0,
                y = new u.y,
                x = new l.T,
                f = new s.P,
                g = new n.Z,
                M = new n.Z,
                b = new s.P;
            class w extends a.p {
                constructor() {
                    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", {
                        value: m++
                    }), this.uuid = d.DO(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
                        start: 0,
                        count: 1 / 0
                    }, this.userData = {}
                }
                getIndex() {
                    return this.index
                }
                setIndex(t) {
                    return Array.isArray(t) ? this.index = new((0, p.H7)(t) ? h.lC : h.ql)(t, 1) : this.index = t, this
                }
                getAttribute(t) {
                    return this.attributes[t]
                }
                setAttribute(t, e) {
                    return this.attributes[t] = e, this
                }
                deleteAttribute(t) {
                    return delete this.attributes[t], this
                }
                hasAttribute(t) {
                    return void 0 !== this.attributes[t]
                }
                addGroup(t, e, i = 0) {
                    this.groups.push({
                        start: t,
                        count: e,
                        materialIndex: i
                    })
                }
                clearGroups() {
                    this.groups = []
                }
                setDrawRange(t, e) {
                    this.drawRange.start = t, this.drawRange.count = e
                }
                applyMatrix4(t) {
                    let e = this.attributes.position;
                    void 0 !== e && (e.applyMatrix4(t), e.needsUpdate = !0);
                    let i = this.attributes.normal;
                    if (void 0 !== i) {
                        let e = new c.V().getNormalMatrix(t);
                        i.applyNormalMatrix(e), i.needsUpdate = !0
                    }
                    let s = this.attributes.tangent;
                    return void 0 !== s && (s.transformDirection(t), s.needsUpdate = !0), null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this
                }
                applyQuaternion(t) {
                    return y.makeRotationFromQuaternion(t), this.applyMatrix4(y), this
                }
                rotateX(t) {
                    return y.makeRotationX(t), this.applyMatrix4(y), this
                }
                rotateY(t) {
                    return y.makeRotationY(t), this.applyMatrix4(y), this
                }
                rotateZ(t) {
                    return y.makeRotationZ(t), this.applyMatrix4(y), this
                }
                translate(t, e, i) {
                    return y.makeTranslation(t, e, i), this.applyMatrix4(y), this
                }
                scale(t, e, i) {
                    return y.makeScale(t, e, i), this.applyMatrix4(y), this
                }
                lookAt(t) {
                    return x.lookAt(t), x.updateMatrix(), this.applyMatrix4(x.matrix), this
                }
                center() {
                    return this.computeBoundingBox(), this.boundingBox.getCenter(f).negate(), this.translate(f.x, f.y, f.z), this
                }
                setFromPoints(t) {
                    let e = [];
                    for (let i = 0, s = t.length; i < s; i++) {
                        let s = t[i];
                        e.push(s.x, s.y, s.z || 0)
                    }
                    return this.setAttribute("position", new h.a$(e, 3)), this
                }
                computeBoundingBox() {
                    null === this.boundingBox && (this.boundingBox = new n.Z);
                    let t = this.attributes.position,
                        e = this.morphAttributes.position;
                    if (t && t.isGLBufferAttribute) {
                        console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingBox.set(new s.P(-1 / 0, -1 / 0, -1 / 0), new s.P(Infinity, Infinity, Infinity));
                        return
                    }
                    if (void 0 !== t) {
                        if (this.boundingBox.setFromBufferAttribute(t), e)
                            for (let t = 0, i = e.length; t < i; t++) {
                                let i = e[t];
                                g.setFromBufferAttribute(i), this.morphTargetsRelative ? (b.addVectors(this.boundingBox.min, g.min), this.boundingBox.expandByPoint(b), b.addVectors(this.boundingBox.max, g.max), this.boundingBox.expandByPoint(b)) : (this.boundingBox.expandByPoint(g.min), this.boundingBox.expandByPoint(g.max))
                            }
                    } else this.boundingBox.makeEmpty();
                    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
                }
                computeBoundingSphere() {
                    null === this.boundingSphere && (this.boundingSphere = new o.a);
                    let t = this.attributes.position,
                        e = this.morphAttributes.position;
                    if (t && t.isGLBufferAttribute) {
                        console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingSphere.set(new s.P, 1 / 0);
                        return
                    }
                    if (t) {
                        let i = this.boundingSphere.center;
                        if (g.setFromBufferAttribute(t), e)
                            for (let t = 0, i = e.length; t < i; t++) {
                                let i = e[t];
                                M.setFromBufferAttribute(i), this.morphTargetsRelative ? (b.addVectors(g.min, M.min), g.expandByPoint(b), b.addVectors(g.max, M.max), g.expandByPoint(b)) : (g.expandByPoint(M.min), g.expandByPoint(M.max))
                            }
                        g.getCenter(i);
                        let s = 0;
                        for (let e = 0, r = t.count; e < r; e++) b.fromBufferAttribute(t, e), s = Math.max(s, i.distanceToSquared(b));
                        if (e)
                            for (let r = 0, n = e.length; r < n; r++) {
                                let n = e[r],
                                    a = this.morphTargetsRelative;
                                for (let e = 0, r = n.count; e < r; e++) b.fromBufferAttribute(n, e), a && (f.fromBufferAttribute(t, e), b.add(f)), s = Math.max(s, i.distanceToSquared(b))
                            }
                        this.boundingSphere.radius = Math.sqrt(s), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
                    }
                }
                computeTangents() {
                    let t = this.index,
                        e = this.attributes;
                    if (null === t || void 0 === e.position || void 0 === e.normal || void 0 === e.uv) {
                        console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
                        return
                    }
                    let i = t.array,
                        n = e.position.array,
                        a = e.normal.array,
                        o = e.uv.array,
                        l = n.length / 3;
                    !1 === this.hasAttribute("tangent") && this.setAttribute("tangent", new h.Tl(new Float32Array(4 * l), 4));
                    let u = this.getAttribute("tangent").array,
                        c = [],
                        d = [];
                    for (let t = 0; t < l; t++) c[t] = new s.P, d[t] = new s.P;
                    let p = new s.P,
                        m = new s.P,
                        y = new s.P,
                        x = new r.F,
                        f = new r.F,
                        g = new r.F,
                        M = new s.P,
                        b = new s.P,
                        w = this.groups;
                    0 === w.length && (w = [{
                        start: 0,
                        count: i.length
                    }]);
                    for (let t = 0, e = w.length; t < e; ++t) {
                        let e = w[t],
                            s = e.start,
                            r = e.count;
                        for (let t = s, e = s + r; t < e; t += 3) ! function(t, e, i) {
                            p.fromArray(n, 3 * t), m.fromArray(n, 3 * e), y.fromArray(n, 3 * i), x.fromArray(o, 2 * t), f.fromArray(o, 2 * e), g.fromArray(o, 2 * i), m.sub(p), y.sub(p), f.sub(x), g.sub(x);
                            let s = 1 / (f.x * g.y - g.x * f.y);
                            isFinite(s) && (M.copy(m).multiplyScalar(g.y).addScaledVector(y, -f.y).multiplyScalar(s), b.copy(y).multiplyScalar(f.x).addScaledVector(m, -g.x).multiplyScalar(s), c[t].add(M), c[e].add(M), c[i].add(M), d[t].add(b), d[e].add(b), d[i].add(b))
                        }(i[t + 0], i[t + 1], i[t + 2])
                    }
                    let v = new s.P,
                        z = new s.P,
                        S = new s.P,
                        _ = new s.P;

                    function A(t) {
                        S.fromArray(a, 3 * t), _.copy(S);
                        let e = c[t];
                        v.copy(e), v.sub(S.multiplyScalar(S.dot(e))).normalize(), z.crossVectors(_, e);
                        let i = z.dot(d[t]);
                        u[4 * t] = v.x, u[4 * t + 1] = v.y, u[4 * t + 2] = v.z, u[4 * t + 3] = i < 0 ? -1 : 1
                    }
                    for (let t = 0, e = w.length; t < e; ++t) {
                        let e = w[t],
                            s = e.start,
                            r = e.count;
                        for (let t = s, e = s + r; t < e; t += 3) A(i[t + 0]), A(i[t + 1]), A(i[t + 2])
                    }
                }
                computeVertexNormals() {
                    let t = this.index,
                        e = this.getAttribute("position");
                    if (void 0 !== e) {
                        let i = this.getAttribute("normal");
                        if (void 0 === i) i = new h.Tl(new Float32Array(3 * e.count), 3), this.setAttribute("normal", i);
                        else
                            for (let t = 0, e = i.count; t < e; t++) i.setXYZ(t, 0, 0, 0);
                        let r = new s.P,
                            n = new s.P,
                            a = new s.P,
                            o = new s.P,
                            l = new s.P,
                            u = new s.P,
                            c = new s.P,
                            d = new s.P;
                        if (t)
                            for (let s = 0, h = t.count; s < h; s += 3) {
                                let h = t.getX(s + 0),
                                    p = t.getX(s + 1),
                                    m = t.getX(s + 2);
                                r.fromBufferAttribute(e, h), n.fromBufferAttribute(e, p), a.fromBufferAttribute(e, m), c.subVectors(a, n), d.subVectors(r, n), c.cross(d), o.fromBufferAttribute(i, h), l.fromBufferAttribute(i, p), u.fromBufferAttribute(i, m), o.add(c), l.add(c), u.add(c), i.setXYZ(h, o.x, o.y, o.z), i.setXYZ(p, l.x, l.y, l.z), i.setXYZ(m, u.x, u.y, u.z)
                            } else
                                for (let t = 0, s = e.count; t < s; t += 3) r.fromBufferAttribute(e, t + 0), n.fromBufferAttribute(e, t + 1), a.fromBufferAttribute(e, t + 2), c.subVectors(a, n), d.subVectors(r, n), c.cross(d), i.setXYZ(t + 0, c.x, c.y, c.z), i.setXYZ(t + 1, c.x, c.y, c.z), i.setXYZ(t + 2, c.x, c.y, c.z);
                        this.normalizeNormals(), i.needsUpdate = !0
                    }
                }
                merge() {
                    return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."), this
                }
                normalizeNormals() {
                    let t = this.attributes.normal;
                    for (let e = 0, i = t.count; e < i; e++) b.fromBufferAttribute(t, e), b.normalize(), t.setXYZ(e, b.x, b.y, b.z)
                }
                toNonIndexed() {
                    function t(t, e) {
                        let i = t.array,
                            s = t.itemSize,
                            r = t.normalized,
                            n = new i.constructor(e.length * s),
                            a = 0,
                            o = 0;
                        for (let r = 0, h = e.length; r < h; r++) {
                            a = t.isInterleavedBufferAttribute ? e[r] * t.data.stride + t.offset : e[r] * s;
                            for (let t = 0; t < s; t++) n[o++] = i[a++]
                        }
                        return new h.Tl(n, s, r)
                    }
                    if (null === this.index) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
                    let e = new w,
                        i = this.index.array,
                        s = this.attributes;
                    for (let r in s) {
                        let n = s[r],
                            a = t(n, i);
                        e.setAttribute(r, a)
                    }
                    let r = this.morphAttributes;
                    for (let s in r) {
                        let n = [],
                            a = r[s];
                        for (let e = 0, s = a.length; e < s; e++) {
                            let s = a[e],
                                r = t(s, i);
                            n.push(r)
                        }
                        e.morphAttributes[s] = n
                    }
                    e.morphTargetsRelative = this.morphTargetsRelative;
                    let n = this.groups;
                    for (let t = 0, i = n.length; t < i; t++) {
                        let i = n[t];
                        e.addGroup(i.start, i.count, i.materialIndex)
                    }
                    return e
                }
                toJSON() {
                    let t = {
                        metadata: {
                            version: 4.6,
                            type: "BufferGeometry",
                            generator: "BufferGeometry.toJSON"
                        }
                    };
                    if (t.uuid = this.uuid, t.type = this.type, "" !== this.name && (t.name = this.name), Object.keys(this.userData).length > 0 && (t.userData = this.userData), void 0 !== this.parameters) {
                        let e = this.parameters;
                        for (let i in e) void 0 !== e[i] && (t[i] = e[i]);
                        return t
                    }
                    t.data = {
                        attributes: {}
                    };
                    let e = this.index;
                    null !== e && (t.data.index = {
                        type: e.array.constructor.name,
                        array: Array.prototype.slice.call(e.array)
                    });
                    let i = this.attributes;
                    for (let e in i) {
                        let s = i[e];
                        t.data.attributes[e] = s.toJSON(t.data)
                    }
                    let s = {},
                        r = !1;
                    for (let e in this.morphAttributes) {
                        let i = this.morphAttributes[e],
                            n = [];
                        for (let e = 0, s = i.length; e < s; e++) {
                            let s = i[e];
                            n.push(s.toJSON(t.data))
                        }
                        n.length > 0 && (s[e] = n, r = !0)
                    }
                    r && (t.data.morphAttributes = s, t.data.morphTargetsRelative = this.morphTargetsRelative);
                    let n = this.groups;
                    n.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(n)));
                    let a = this.boundingSphere;
                    return null !== a && (t.data.boundingSphere = {
                        center: a.center.toArray(),
                        radius: a.radius
                    }), t
                }
                clone() {
                    return new this.constructor().copy(this)
                }
                copy(t) {
                    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
                    let e = {};
                    this.name = t.name;
                    let i = t.index;
                    null !== i && this.setIndex(i.clone(e));
                    let s = t.attributes;
                    for (let t in s) {
                        let i = s[t];
                        this.setAttribute(t, i.clone(e))
                    }
                    let r = t.morphAttributes;
                    for (let t in r) {
                        let i = [],
                            s = r[t];
                        for (let t = 0, r = s.length; t < r; t++) i.push(s[t].clone(e));
                        this.morphAttributes[t] = i
                    }
                    this.morphTargetsRelative = t.morphTargetsRelative;
                    let n = t.groups;
                    for (let t = 0, e = n.length; t < e; t++) {
                        let e = n[t];
                        this.addGroup(e.start, e.count, e.materialIndex)
                    }
                    let a = t.boundingBox;
                    null !== a && (this.boundingBox = a.clone());
                    let h = t.boundingSphere;
                    return null !== h && (this.boundingSphere = h.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, this
                }
                dispose() {
                    this.dispatchEvent({
                        type: "dispose"
                    })
                }
            }
        },
        9264: function(t, e, i) {
            "use strict";
            i.d(e, {
                p: function() {
                    return s
                }
            });
            class s {
                addEventListener(t, e) {
                    void 0 === this._listeners && (this._listeners = {});
                    let i = this._listeners;
                    void 0 === i[t] && (i[t] = []), -1 === i[t].indexOf(e) && i[t].push(e)
                }
                hasEventListener(t, e) {
                    if (void 0 === this._listeners) return !1;
                    let i = this._listeners;
                    return void 0 !== i[t] && -1 !== i[t].indexOf(e)
                }
                removeEventListener(t, e) {
                    if (void 0 === this._listeners) return;
                    let i = this._listeners,
                        s = i[t];
                    if (void 0 !== s) {
                        let t = s.indexOf(e); - 1 !== t && s.splice(t, 1)
                    }
                }
                dispatchEvent(t) {
                    if (void 0 === this._listeners) return;
                    let e = this._listeners,
                        i = e[t.type];
                    if (void 0 !== i) {
                        t.target = this;
                        let e = i.slice(0);
                        for (let i = 0, s = e.length; i < s; i++) e[i].call(this, t);
                        t.target = null
                    }
                }
            }
        },
        6582: function(t, e, i) {
            "use strict";
            i.d(e, {
                T: function() {
                    return A
                }
            });
            var s = i(7338),
                r = i(7714),
                n = i(6690),
                a = i(9264),
                h = i(2424);
            let o = new n.y,
                l = new s._;
            class u {
                constructor(t = 0, e = 0, i = 0, s = u.DEFAULT_ORDER) {
                    this.isEuler = !0, this._x = t, this._y = e, this._z = i, this._order = s
                }
                get x() {
                    return this._x
                }
                set x(t) {
                    this._x = t, this._onChangeCallback()
                }
                get y() {
                    return this._y
                }
                set y(t) {
                    this._y = t, this._onChangeCallback()
                }
                get z() {
                    return this._z
                }
                set z(t) {
                    this._z = t, this._onChangeCallback()
                }
                get order() {
                    return this._order
                }
                set order(t) {
                    this._order = t, this._onChangeCallback()
                }
                set(t, e, i, s = this._order) {
                    return this._x = t, this._y = e, this._z = i, this._order = s, this._onChangeCallback(), this
                }
                clone() {
                    return new this.constructor(this._x, this._y, this._z, this._order)
                }
                copy(t) {
                    return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this._onChangeCallback(), this
                }
                setFromRotationMatrix(t, e = this._order, i = !0) {
                    let s = t.elements,
                        r = s[0],
                        n = s[4],
                        a = s[8],
                        o = s[1],
                        l = s[5],
                        u = s[9],
                        c = s[2],
                        d = s[6],
                        p = s[10];
                    switch (e) {
                        case "XYZ":
                            this._y = Math.asin((0, h.uZ)(a, -1, 1)), .9999999 > Math.abs(a) ? (this._x = Math.atan2(-u, p), this._z = Math.atan2(-n, r)) : (this._x = Math.atan2(d, l), this._z = 0);
                            break;
                        case "YXZ":
                            this._x = Math.asin(-(0, h.uZ)(u, -1, 1)), .9999999 > Math.abs(u) ? (this._y = Math.atan2(a, p), this._z = Math.atan2(o, l)) : (this._y = Math.atan2(-c, r), this._z = 0);
                            break;
                        case "ZXY":
                            this._x = Math.asin((0, h.uZ)(d, -1, 1)), .9999999 > Math.abs(d) ? (this._y = Math.atan2(-c, p), this._z = Math.atan2(-n, l)) : (this._y = 0, this._z = Math.atan2(o, r));
                            break;
                        case "ZYX":
                            this._y = Math.asin(-(0, h.uZ)(c, -1, 1)), .9999999 > Math.abs(c) ? (this._x = Math.atan2(d, p), this._z = Math.atan2(o, r)) : (this._x = 0, this._z = Math.atan2(-n, l));
                            break;
                        case "YZX":
                            this._z = Math.asin((0, h.uZ)(o, -1, 1)), .9999999 > Math.abs(o) ? (this._x = Math.atan2(-u, l), this._y = Math.atan2(-c, r)) : (this._x = 0, this._y = Math.atan2(a, p));
                            break;
                        case "XZY":
                            this._z = Math.asin(-(0, h.uZ)(n, -1, 1)), .9999999 > Math.abs(n) ? (this._x = Math.atan2(d, l), this._y = Math.atan2(a, r)) : (this._x = Math.atan2(-u, p), this._y = 0);
                            break;
                        default:
                            console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e)
                    }
                    return this._order = e, !0 === i && this._onChangeCallback(), this
                }
                setFromQuaternion(t, e, i) {
                    return o.makeRotationFromQuaternion(t), this.setFromRotationMatrix(o, e, i)
                }
                setFromVector3(t, e = this._order) {
                    return this.set(t.x, t.y, t.z, e)
                }
                reorder(t) {
                    return l.setFromEuler(this), this.setFromQuaternion(l, t)
                }
                equals(t) {
                    return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order
                }
                fromArray(t) {
                    return this._x = t[0], this._y = t[1], this._z = t[2], void 0 !== t[3] && (this._order = t[3]), this._onChangeCallback(), this
                }
                toArray(t = [], e = 0) {
                    return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t
                }
                _onChange(t) {
                    return this._onChangeCallback = t, this
                }
                _onChangeCallback() {}*[Symbol.iterator]() {
                    yield this._x, yield this._y, yield this._z, yield this._order
                }
            }
            u.DEFAULT_ORDER = "XYZ";
            class c {
                constructor() {
                    this.mask = 1
                }
                set(t) {
                    this.mask = (1 << t | 0) >>> 0
                }
                enable(t) {
                    this.mask |= 1 << t | 0
                }
                enableAll() {
                    this.mask = -1
                }
                toggle(t) {
                    this.mask ^= 1 << t | 0
                }
                disable(t) {
                    this.mask &= ~(1 << t | 0)
                }
                disableAll() {
                    this.mask = 0
                }
                test(t) {
                    return (this.mask & t.mask) != 0
                }
                isEnabled(t) {
                    return (this.mask & (1 << t | 0)) != 0
                }
            }
            var d = i(763);
            let p = 0,
                m = new r.P,
                y = new s._,
                x = new n.y,
                f = new r.P,
                g = new r.P,
                M = new r.P,
                b = new s._,
                w = new r.P(1, 0, 0),
                v = new r.P(0, 1, 0),
                z = new r.P(0, 0, 1),
                S = {
                    type: "added"
                },
                _ = {
                    type: "removed"
                };
            class A extends a.p {
                constructor() {
                    super(), this.isObject3D = !0, Object.defineProperty(this, "id", {
                        value: p++
                    }), this.uuid = h.DO(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = A.DEFAULT_UP.clone();
                    let t = new r.P,
                        e = new u,
                        i = new s._,
                        a = new r.P(1, 1, 1);
                    e._onChange(function() {
                        i.setFromEuler(e, !1)
                    }), i._onChange(function() {
                        e.setFromQuaternion(i, void 0, !1)
                    }), Object.defineProperties(this, {
                        position: {
                            configurable: !0,
                            enumerable: !0,
                            value: t
                        },
                        rotation: {
                            configurable: !0,
                            enumerable: !0,
                            value: e
                        },
                        quaternion: {
                            configurable: !0,
                            enumerable: !0,
                            value: i
                        },
                        scale: {
                            configurable: !0,
                            enumerable: !0,
                            value: a
                        },
                        modelViewMatrix: {
                            value: new n.y
                        },
                        normalMatrix: {
                            value: new d.V
                        }
                    }), this.matrix = new n.y, this.matrixWorld = new n.y, this.matrixAutoUpdate = A.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.matrixWorldAutoUpdate = A.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.layers = new c, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {}
                }
                onBeforeRender() {}
                onAfterRender() {}
                applyMatrix4(t) {
                    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t), this.matrix.decompose(this.position, this.quaternion, this.scale)
                }
                applyQuaternion(t) {
                    return this.quaternion.premultiply(t), this
                }
                setRotationFromAxisAngle(t, e) {
                    this.quaternion.setFromAxisAngle(t, e)
                }
                setRotationFromEuler(t) {
                    this.quaternion.setFromEuler(t, !0)
                }
                setRotationFromMatrix(t) {
                    this.quaternion.setFromRotationMatrix(t)
                }
                setRotationFromQuaternion(t) {
                    this.quaternion.copy(t)
                }
                rotateOnAxis(t, e) {
                    return y.setFromAxisAngle(t, e), this.quaternion.multiply(y), this
                }
                rotateOnWorldAxis(t, e) {
                    return y.setFromAxisAngle(t, e), this.quaternion.premultiply(y), this
                }
                rotateX(t) {
                    return this.rotateOnAxis(w, t)
                }
                rotateY(t) {
                    return this.rotateOnAxis(v, t)
                }
                rotateZ(t) {
                    return this.rotateOnAxis(z, t)
                }
                translateOnAxis(t, e) {
                    return m.copy(t).applyQuaternion(this.quaternion), this.position.add(m.multiplyScalar(e)), this
                }
                translateX(t) {
                    return this.translateOnAxis(w, t)
                }
                translateY(t) {
                    return this.translateOnAxis(v, t)
                }
                translateZ(t) {
                    return this.translateOnAxis(z, t)
                }
                localToWorld(t) {
                    return this.updateWorldMatrix(!0, !1), t.applyMatrix4(this.matrixWorld)
                }
                worldToLocal(t) {
                    return this.updateWorldMatrix(!0, !1), t.applyMatrix4(x.copy(this.matrixWorld).invert())
                }
                lookAt(t, e, i) {
                    t.isVector3 ? f.copy(t) : f.set(t, e, i);
                    let s = this.parent;
                    this.updateWorldMatrix(!0, !1), g.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? x.lookAt(g, f, this.up) : x.lookAt(f, g, this.up), this.quaternion.setFromRotationMatrix(x), s && (x.extractRotation(s.matrixWorld), y.setFromRotationMatrix(x), this.quaternion.premultiply(y.invert()))
                }
                add(t) {
                    if (arguments.length > 1) {
                        for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
                        return this
                    }
                    return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (null !== t.parent && t.parent.remove(t), t.parent = this, this.children.push(t), t.dispatchEvent(S)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this)
                }
                remove(t) {
                    if (arguments.length > 1) {
                        for (let t = 0; t < arguments.length; t++) this.remove(arguments[t]);
                        return this
                    }
                    let e = this.children.indexOf(t);
                    return -1 !== e && (t.parent = null, this.children.splice(e, 1), t.dispatchEvent(_)), this
                }
                removeFromParent() {
                    let t = this.parent;
                    return null !== t && t.remove(this), this
                }
                clear() {
                    for (let t = 0; t < this.children.length; t++) {
                        let e = this.children[t];
                        e.parent = null, e.dispatchEvent(_)
                    }
                    return this.children.length = 0, this
                }
                attach(t) {
                    return this.updateWorldMatrix(!0, !1), x.copy(this.matrixWorld).invert(), null !== t.parent && (t.parent.updateWorldMatrix(!0, !1), x.multiply(t.parent.matrixWorld)), t.applyMatrix4(x), this.add(t), t.updateWorldMatrix(!1, !0), this
                }
                getObjectById(t) {
                    return this.getObjectByProperty("id", t)
                }
                getObjectByName(t) {
                    return this.getObjectByProperty("name", t)
                }
                getObjectByProperty(t, e) {
                    if (this[t] === e) return this;
                    for (let i = 0, s = this.children.length; i < s; i++) {
                        let s = this.children[i],
                            r = s.getObjectByProperty(t, e);
                        if (void 0 !== r) return r
                    }
                }
                getObjectsByProperty(t, e) {
                    let i = [];
                    this[t] === e && i.push(this);
                    for (let s = 0, r = this.children.length; s < r; s++) {
                        let r = this.children[s].getObjectsByProperty(t, e);
                        r.length > 0 && (i = i.concat(r))
                    }
                    return i
                }
                getWorldPosition(t) {
                    return this.updateWorldMatrix(!0, !1), t.setFromMatrixPosition(this.matrixWorld)
                }
                getWorldQuaternion(t) {
                    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(g, t, M), t
                }
                getWorldScale(t) {
                    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(g, b, t), t
                }
                getWorldDirection(t) {
                    this.updateWorldMatrix(!0, !1);
                    let e = this.matrixWorld.elements;
                    return t.set(e[8], e[9], e[10]).normalize()
                }
                raycast() {}
                traverse(t) {
                    t(this);
                    let e = this.children;
                    for (let i = 0, s = e.length; i < s; i++) e[i].traverse(t)
                }
                traverseVisible(t) {
                    if (!1 === this.visible) return;
                    t(this);
                    let e = this.children;
                    for (let i = 0, s = e.length; i < s; i++) e[i].traverseVisible(t)
                }
                traverseAncestors(t) {
                    let e = this.parent;
                    null !== e && (t(e), e.traverseAncestors(t))
                }
                updateMatrix() {
                    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0
                }
                updateMatrixWorld(t) {
                    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, t = !0);
                    let e = this.children;
                    for (let i = 0, s = e.length; i < s; i++) {
                        let s = e[i];
                        (!0 === s.matrixWorldAutoUpdate || !0 === t) && s.updateMatrixWorld(t)
                    }
                }
                updateWorldMatrix(t, e) {
                    let i = this.parent;
                    if (!0 === t && null !== i && !0 === i.matrixWorldAutoUpdate && i.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), !0 === e) {
                        let t = this.children;
                        for (let e = 0, i = t.length; e < i; e++) {
                            let i = t[e];
                            !0 === i.matrixWorldAutoUpdate && i.updateWorldMatrix(!1, !0)
                        }
                    }
                }
                toJSON(t) {
                    let e = void 0 === t || "string" == typeof t,
                        i = {};
                    e && (t = {
                        geometries: {},
                        materials: {},
                        textures: {},
                        images: {},
                        shapes: {},
                        skeletons: {},
                        animations: {},
                        nodes: {}
                    }, i.metadata = {
                        version: 4.6,
                        type: "Object",
                        generator: "Object3D.toJSON"
                    });
                    let s = {};

                    function r(e, i) {
                        return void 0 === e[i.uuid] && (e[i.uuid] = i.toJSON(t)), i.uuid
                    }
                    if (s.uuid = this.uuid, s.type = this.type, "" !== this.name && (s.name = this.name), !0 === this.castShadow && (s.castShadow = !0), !0 === this.receiveShadow && (s.receiveShadow = !0), !1 === this.visible && (s.visible = !1), !1 === this.frustumCulled && (s.frustumCulled = !1), 0 !== this.renderOrder && (s.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (s.userData = this.userData), s.layers = this.layers.mask, s.matrix = this.matrix.toArray(), s.up = this.up.toArray(), !1 === this.matrixAutoUpdate && (s.matrixAutoUpdate = !1), this.isInstancedMesh && (s.type = "InstancedMesh", s.count = this.count, s.instanceMatrix = this.instanceMatrix.toJSON(), null !== this.instanceColor && (s.instanceColor = this.instanceColor.toJSON())), this.isScene) this.background && (this.background.isColor ? s.background = this.background.toJSON() : this.background.isTexture && (s.background = this.background.toJSON(t).uuid)), this.environment && this.environment.isTexture && !0 !== this.environment.isRenderTargetTexture && (s.environment = this.environment.toJSON(t).uuid);
                    else if (this.isMesh || this.isLine || this.isPoints) {
                        s.geometry = r(t.geometries, this.geometry);
                        let e = this.geometry.parameters;
                        if (void 0 !== e && void 0 !== e.shapes) {
                            let i = e.shapes;
                            if (Array.isArray(i))
                                for (let e = 0, s = i.length; e < s; e++) {
                                    let s = i[e];
                                    r(t.shapes, s)
                                } else r(t.shapes, i)
                        }
                    }
                    if (this.isSkinnedMesh && (s.bindMode = this.bindMode, s.bindMatrix = this.bindMatrix.toArray(), void 0 !== this.skeleton && (r(t.skeletons, this.skeleton), s.skeleton = this.skeleton.uuid)), void 0 !== this.material) {
                        if (Array.isArray(this.material)) {
                            let e = [];
                            for (let i = 0, s = this.material.length; i < s; i++) e.push(r(t.materials, this.material[i]));
                            s.material = e
                        } else s.material = r(t.materials, this.material)
                    }
                    if (this.children.length > 0) {
                        s.children = [];
                        for (let e = 0; e < this.children.length; e++) s.children.push(this.children[e].toJSON(t).object)
                    }
                    if (this.animations.length > 0) {
                        s.animations = [];
                        for (let e = 0; e < this.animations.length; e++) {
                            let i = this.animations[e];
                            s.animations.push(r(t.animations, i))
                        }
                    }
                    if (e) {
                        let e = n(t.geometries),
                            s = n(t.materials),
                            r = n(t.textures),
                            a = n(t.images),
                            h = n(t.shapes),
                            o = n(t.skeletons),
                            l = n(t.animations),
                            u = n(t.nodes);
                        e.length > 0 && (i.geometries = e), s.length > 0 && (i.materials = s), r.length > 0 && (i.textures = r), a.length > 0 && (i.images = a), h.length > 0 && (i.shapes = h), o.length > 0 && (i.skeletons = o), l.length > 0 && (i.animations = l), u.length > 0 && (i.nodes = u)
                    }
                    return i.object = s, i;

                    function n(t) {
                        let e = [];
                        for (let i in t) {
                            let s = t[i];
                            delete s.metadata, e.push(s)
                        }
                        return e
                    }
                }
                clone(t) {
                    return new this.constructor().copy(this, t)
                }
                copy(t, e = !0) {
                    if (this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.rotation.order = t.rotation.order, this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.matrixWorldAutoUpdate = t.matrixWorldAutoUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.animations = t.animations, this.userData = JSON.parse(JSON.stringify(t.userData)), !0 === e)
                        for (let e = 0; e < t.children.length; e++) {
                            let i = t.children[e];
                            this.add(i.clone())
                        }
                    return this
                }
            }
            A.DEFAULT_UP = new r.P(0, 1, 0), A.DEFAULT_MATRIX_AUTO_UPDATE = !0, A.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0
        },
        3917: function(t, e, i) {
            "use strict";
            i.d(e, {
                _: function() {
                    return n
                }
            });
            var s = i(2017),
                r = i(3493);
            class n extends s.u {
                constructor(t = 1, e = 1, i = 1, s = 1) {
                    super(), this.type = "PlaneGeometry", this.parameters = {
                        width: t,
                        height: e,
                        widthSegments: i,
                        heightSegments: s
                    };
                    let n = t / 2,
                        a = e / 2,
                        h = Math.floor(i),
                        o = Math.floor(s),
                        l = h + 1,
                        u = o + 1,
                        c = t / h,
                        d = e / o,
                        p = [],
                        m = [],
                        y = [],
                        x = [];
                    for (let t = 0; t < u; t++) {
                        let e = t * d - a;
                        for (let i = 0; i < l; i++) {
                            let s = i * c - n;
                            m.push(s, -e, 0), y.push(0, 0, 1), x.push(i / h), x.push(1 - t / o)
                        }
                    }
                    for (let t = 0; t < o; t++)
                        for (let e = 0; e < h; e++) {
                            let i = e + l * t,
                                s = e + l * (t + 1),
                                r = e + 1 + l * (t + 1),
                                n = e + 1 + l * t;
                            p.push(i, s, n), p.push(s, r, n)
                        }
                    this.setIndex(p), this.setAttribute("position", new r.a$(m, 3)), this.setAttribute("normal", new r.a$(y, 3)), this.setAttribute("uv", new r.a$(x, 2))
                }
                copy(t) {
                    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this
                }
                static fromJSON(t) {
                    return new n(t.width, t.height, t.widthSegments, t.heightSegments)
                }
            }
        },
        4447: function(t, e, i) {
            "use strict";
            i.d(e, {
                F: function() {
                    return h
                }
            });
            var s = i(9264),
                r = i(5293),
                n = i(2424);
            let a = 0;
            class h extends s.p {
                constructor() {
                    super(), this.isMaterial = !0, Object.defineProperty(this, "id", {
                        value: a++
                    }), this.uuid = n.DO(), this.name = "", this.type = "Material", this.blending = r.bdR, this.side = r.Wl3, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.blendSrc = r.k74, this.blendDst = r.LgZ, this.blendEquation = r.bGH, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = r.vCF, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = r.cum, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = r.x5V, this.stencilZFail = r.x5V, this.stencilZPass = r.x5V, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0
                }
                get alphaTest() {
                    return this._alphaTest
                }
                set alphaTest(t) {
                    this._alphaTest > 0 != t > 0 && this.version++, this._alphaTest = t
                }
                onBuild() {}
                onBeforeRender() {}
                onBeforeCompile() {}
                customProgramCacheKey() {
                    return this.onBeforeCompile.toString()
                }
                setValues(t) {
                    if (void 0 !== t)
                        for (let e in t) {
                            let i = t[e];
                            if (void 0 === i) {
                                console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);
                                continue
                            }
                            let s = this[e];
                            if (void 0 === s) {
                                console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);
                                continue
                            }
                            s && s.isColor ? s.set(i) : s && s.isVector3 && i && i.isVector3 ? s.copy(i) : this[e] = i
                        }
                }
                toJSON(t) {
                    let e = void 0 === t || "string" == typeof t;
                    e && (t = {
                        textures: {},
                        images: {}
                    });
                    let i = {
                        metadata: {
                            version: 4.6,
                            type: "Material",
                            generator: "Material.toJSON"
                        }
                    };

                    function s(t) {
                        let e = [];
                        for (let i in t) {
                            let s = t[i];
                            delete s.metadata, e.push(s)
                        }
                        return e
                    }
                    if (i.uuid = this.uuid, i.type = this.type, "" !== this.name && (i.name = this.name), this.color && this.color.isColor && (i.color = this.color.getHex()), void 0 !== this.roughness && (i.roughness = this.roughness), void 0 !== this.metalness && (i.metalness = this.metalness), void 0 !== this.sheen && (i.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (i.sheenColor = this.sheenColor.getHex()), void 0 !== this.sheenRoughness && (i.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (i.emissive = this.emissive.getHex()), this.emissiveIntensity && 1 !== this.emissiveIntensity && (i.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (i.specular = this.specular.getHex()), void 0 !== this.specularIntensity && (i.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (i.specularColor = this.specularColor.getHex()), void 0 !== this.shininess && (i.shininess = this.shininess), void 0 !== this.clearcoat && (i.clearcoat = this.clearcoat), void 0 !== this.clearcoatRoughness && (i.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (i.clearcoatMap = this.clearcoatMap.toJSON(t).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (i.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (i.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid, i.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), void 0 !== this.iridescence && (i.iridescence = this.iridescence), void 0 !== this.iridescenceIOR && (i.iridescenceIOR = this.iridescenceIOR), void 0 !== this.iridescenceThicknessRange && (i.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (i.iridescenceMap = this.iridescenceMap.toJSON(t).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (i.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(t).uuid), void 0 !== this.anisotropy && (i.anisotropy = this.anisotropy), void 0 !== this.anisotropyRotation && (i.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (i.anisotropyMap = this.anisotropyMap.toJSON(t).uuid), this.map && this.map.isTexture && (i.map = this.map.toJSON(t).uuid), this.matcap && this.matcap.isTexture && (i.matcap = this.matcap.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (i.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (i.lightMap = this.lightMap.toJSON(t).uuid, i.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (i.aoMap = this.aoMap.toJSON(t).uuid, i.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (i.bumpMap = this.bumpMap.toJSON(t).uuid, i.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (i.normalMap = this.normalMap.toJSON(t).uuid, i.normalMapType = this.normalMapType, i.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (i.displacementMap = this.displacementMap.toJSON(t).uuid, i.displacementScale = this.displacementScale, i.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (i.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (i.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (i.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (i.specularMap = this.specularMap.toJSON(t).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (i.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid), this.specularColorMap && this.specularColorMap.isTexture && (i.specularColorMap = this.specularColorMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (i.envMap = this.envMap.toJSON(t).uuid, void 0 !== this.combine && (i.combine = this.combine)), void 0 !== this.envMapIntensity && (i.envMapIntensity = this.envMapIntensity), void 0 !== this.reflectivity && (i.reflectivity = this.reflectivity), void 0 !== this.refractionRatio && (i.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (i.gradientMap = this.gradientMap.toJSON(t).uuid), void 0 !== this.transmission && (i.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (i.transmissionMap = this.transmissionMap.toJSON(t).uuid), void 0 !== this.thickness && (i.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (i.thicknessMap = this.thicknessMap.toJSON(t).uuid), void 0 !== this.attenuationDistance && this.attenuationDistance !== 1 / 0 && (i.attenuationDistance = this.attenuationDistance), void 0 !== this.attenuationColor && (i.attenuationColor = this.attenuationColor.getHex()), void 0 !== this.size && (i.size = this.size), null !== this.shadowSide && (i.shadowSide = this.shadowSide), void 0 !== this.sizeAttenuation && (i.sizeAttenuation = this.sizeAttenuation), this.blending !== r.bdR && (i.blending = this.blending), this.side !== r.Wl3 && (i.side = this.side), this.vertexColors && (i.vertexColors = !0), this.opacity < 1 && (i.opacity = this.opacity), !0 === this.transparent && (i.transparent = this.transparent), i.depthFunc = this.depthFunc, i.depthTest = this.depthTest, i.depthWrite = this.depthWrite, i.colorWrite = this.colorWrite, i.stencilWrite = this.stencilWrite, i.stencilWriteMask = this.stencilWriteMask, i.stencilFunc = this.stencilFunc, i.stencilRef = this.stencilRef, i.stencilFuncMask = this.stencilFuncMask, i.stencilFail = this.stencilFail, i.stencilZFail = this.stencilZFail, i.stencilZPass = this.stencilZPass, void 0 !== this.rotation && 0 !== this.rotation && (i.rotation = this.rotation), !0 === this.polygonOffset && (i.polygonOffset = !0), 0 !== this.polygonOffsetFactor && (i.polygonOffsetFactor = this.polygonOffsetFactor), 0 !== this.polygonOffsetUnits && (i.polygonOffsetUnits = this.polygonOffsetUnits), void 0 !== this.linewidth && 1 !== this.linewidth && (i.linewidth = this.linewidth), void 0 !== this.dashSize && (i.dashSize = this.dashSize), void 0 !== this.gapSize && (i.gapSize = this.gapSize), void 0 !== this.scale && (i.scale = this.scale), !0 === this.dithering && (i.dithering = !0), this.alphaTest > 0 && (i.alphaTest = this.alphaTest), !0 === this.alphaToCoverage && (i.alphaToCoverage = this.alphaToCoverage), !0 === this.premultipliedAlpha && (i.premultipliedAlpha = this.premultipliedAlpha), !0 === this.forceSinglePass && (i.forceSinglePass = this.forceSinglePass), !0 === this.wireframe && (i.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (i.wireframeLinewidth = this.wireframeLinewidth), "round" !== this.wireframeLinecap && (i.wireframeLinecap = this.wireframeLinecap), "round" !== this.wireframeLinejoin && (i.wireframeLinejoin = this.wireframeLinejoin), !0 === this.flatShading && (i.flatShading = this.flatShading), !1 === this.visible && (i.visible = !1), !1 === this.toneMapped && (i.toneMapped = !1), !1 === this.fog && (i.fog = !1), Object.keys(this.userData).length > 0 && (i.userData = this.userData), e) {
                        let e = s(t.textures),
                            r = s(t.images);
                        e.length > 0 && (i.textures = e), r.length > 0 && (i.images = r)
                    }
                    return i
                }
                clone() {
                    return new this.constructor().copy(this)
                }
                copy(t) {
                    this.name = t.name, this.blending = t.blending, this.side = t.side, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.stencilWriteMask = t.stencilWriteMask, this.stencilFunc = t.stencilFunc, this.stencilRef = t.stencilRef, this.stencilFuncMask = t.stencilFuncMask, this.stencilFail = t.stencilFail, this.stencilZFail = t.stencilZFail, this.stencilZPass = t.stencilZPass, this.stencilWrite = t.stencilWrite;
                    let e = t.clippingPlanes,
                        i = null;
                    if (null !== e) {
                        let t = e.length;
                        i = Array(t);
                        for (let s = 0; s !== t; ++s) i[s] = e[s].clone()
                    }
                    return this.clippingPlanes = i, this.clipIntersection = t.clipIntersection, this.clipShadows = t.clipShadows, this.shadowSide = t.shadowSide, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.alphaToCoverage = t.alphaToCoverage, this.premultipliedAlpha = t.premultipliedAlpha, this.forceSinglePass = t.forceSinglePass, this.visible = t.visible, this.toneMapped = t.toneMapped, this.userData = JSON.parse(JSON.stringify(t.userData)), this
                }
                dispose() {
                    this.dispatchEvent({
                        type: "dispose"
                    })
                }
                set needsUpdate(t) {
                    !0 === t && this.version++
                }
            }
        },
        7744: function(t, e, i) {
            "use strict";
            i.d(e, {
                j: function() {
                    return a
                }
            });
            var s = i(4447),
                r = `
void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`,
                n = `
void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}
`;
            class a extends s.F {
                constructor(t) {
                    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = r, this.fragmentShader = n, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
                        derivatives: !1,
                        fragDepth: !1,
                        drawBuffers: !1,
                        shaderTextureLOD: !1
                    }, this.defaultAttributeValues = {
                        color: [1, 1, 1],
                        uv: [0, 0],
                        uv1: [0, 0]
                    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, void 0 !== t && this.setValues(t)
                }
                copy(t) {
                    return super.copy(t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = function(t) {
                        let e = {};
                        for (let i in t)
                            for (let s in e[i] = {}, t[i]) {
                                let r = t[i][s];
                                r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? r.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[i][s] = null) : e[i][s] = r.clone() : Array.isArray(r) ? e[i][s] = r.slice() : e[i][s] = r
                            }
                        return e
                    }(t.uniforms), this.uniformsGroups = function(t) {
                        let e = [];
                        for (let i = 0; i < t.length; i++) e.push(t[i].clone());
                        return e
                    }(t.uniformsGroups), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.fog = t.fog, this.lights = t.lights, this.clipping = t.clipping, this.extensions = Object.assign({}, t.extensions), this.glslVersion = t.glslVersion, this
                }
                toJSON(t) {
                    let e = super.toJSON(t);
                    for (let i in e.glslVersion = this.glslVersion, e.uniforms = {}, this.uniforms) {
                        let s = this.uniforms[i],
                            r = s.value;
                        r && r.isTexture ? e.uniforms[i] = {
                            type: "t",
                            value: r.toJSON(t).uuid
                        } : r && r.isColor ? e.uniforms[i] = {
                            type: "c",
                            value: r.getHex()
                        } : r && r.isVector2 ? e.uniforms[i] = {
                            type: "v2",
                            value: r.toArray()
                        } : r && r.isVector3 ? e.uniforms[i] = {
                            type: "v3",
                            value: r.toArray()
                        } : r && r.isVector4 ? e.uniforms[i] = {
                            type: "v4",
                            value: r.toArray()
                        } : r && r.isMatrix3 ? e.uniforms[i] = {
                            type: "m3",
                            value: r.toArray()
                        } : r && r.isMatrix4 ? e.uniforms[i] = {
                            type: "m4",
                            value: r.toArray()
                        } : e.uniforms[i] = {
                            value: r
                        }
                    }
                    Object.keys(this.defines).length > 0 && (e.defines = this.defines), e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader, e.lights = this.lights, e.clipping = this.clipping;
                    let i = {};
                    for (let t in this.extensions) !0 === this.extensions[t] && (i[t] = !0);
                    return Object.keys(i).length > 0 && (e.extensions = i), e
                }
            }
        },
        1853: function(t, e, i) {
            "use strict";
            i.d(e, {
                Z: function() {
                    return r
                }
            });
            var s = i(7714);
            class r {
                constructor(t = new s.P(Infinity, Infinity, Infinity), e = new s.P(-1 / 0, -1 / 0, -1 / 0)) {
                    this.isBox3 = !0, this.min = t, this.max = e
                }
                set(t, e) {
                    return this.min.copy(t), this.max.copy(e), this
                }
                setFromArray(t) {
                    this.makeEmpty();
                    for (let e = 0, i = t.length; e < i; e += 3) this.expandByPoint(a.fromArray(t, e));
                    return this
                }
                setFromBufferAttribute(t) {
                    this.makeEmpty();
                    for (let e = 0, i = t.count; e < i; e++) this.expandByPoint(a.fromBufferAttribute(t, e));
                    return this
                }
                setFromPoints(t) {
                    this.makeEmpty();
                    for (let e = 0, i = t.length; e < i; e++) this.expandByPoint(t[e]);
                    return this
                }
                setFromCenterAndSize(t, e) {
                    let i = a.copy(e).multiplyScalar(.5);
                    return this.min.copy(t).sub(i), this.max.copy(t).add(i), this
                }
                setFromObject(t, e = !1) {
                    return this.makeEmpty(), this.expandByObject(t, e)
                }
                clone() {
                    return new this.constructor().copy(this)
                }
                copy(t) {
                    return this.min.copy(t.min), this.max.copy(t.max), this
                }
                makeEmpty() {
                    return this.min.x = this.min.y = this.min.z = Infinity, this.max.x = this.max.y = this.max.z = -1 / 0, this
                }
                isEmpty() {
                    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
                }
                getCenter(t) {
                    return this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5)
                }
                getSize(t) {
                    return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min)
                }
                expandByPoint(t) {
                    return this.min.min(t), this.max.max(t), this
                }
                expandByVector(t) {
                    return this.min.sub(t), this.max.add(t), this
                }
                expandByScalar(t) {
                    return this.min.addScalar(-t), this.max.addScalar(t), this
                }
                expandByObject(t, e = !1) {
                    if (t.updateWorldMatrix(!1, !1), void 0 !== t.boundingBox) null === t.boundingBox && t.computeBoundingBox(), h.copy(t.boundingBox), h.applyMatrix4(t.matrixWorld), this.union(h);
                    else {
                        let i = t.geometry;
                        if (void 0 !== i) {
                            if (e && void 0 !== i.attributes && void 0 !== i.attributes.position) {
                                let e = i.attributes.position;
                                for (let i = 0, s = e.count; i < s; i++) a.fromBufferAttribute(e, i).applyMatrix4(t.matrixWorld), this.expandByPoint(a)
                            } else null === i.boundingBox && i.computeBoundingBox(), h.copy(i.boundingBox), h.applyMatrix4(t.matrixWorld), this.union(h)
                        }
                    }
                    let i = t.children;
                    for (let t = 0, s = i.length; t < s; t++) this.expandByObject(i[t], e);
                    return this
                }
                containsPoint(t) {
                    return !(t.x < this.min.x) && !(t.x > this.max.x) && !(t.y < this.min.y) && !(t.y > this.max.y) && !(t.z < this.min.z) && !(t.z > this.max.z)
                }
                containsBox(t) {
                    return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z
                }
                getParameter(t, e) {
                    return e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z))
                }
                intersectsBox(t) {
                    return !(t.max.x < this.min.x) && !(t.min.x > this.max.x) && !(t.max.y < this.min.y) && !(t.min.y > this.max.y) && !(t.max.z < this.min.z) && !(t.min.z > this.max.z)
                }
                intersectsSphere(t) {
                    return this.clampPoint(t.center, a), a.distanceToSquared(t.center) <= t.radius * t.radius
                }
                intersectsPlane(t) {
                    let e, i;
                    return t.normal.x > 0 ? (e = t.normal.x * this.min.x, i = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, i = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, i += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, i += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, i += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, i += t.normal.z * this.min.z), e <= -t.constant && i >= -t.constant
                }
                intersectsTriangle(t) {
                    if (this.isEmpty()) return !1;
                    this.getCenter(m), y.subVectors(this.max, m), o.subVectors(t.a, m), l.subVectors(t.b, m), u.subVectors(t.c, m), c.subVectors(l, o), d.subVectors(u, l), p.subVectors(o, u);
                    let e = [0, -c.z, c.y, 0, -d.z, d.y, 0, -p.z, p.y, c.z, 0, -c.x, d.z, 0, -d.x, p.z, 0, -p.x, -c.y, c.x, 0, -d.y, d.x, 0, -p.y, p.x, 0];
                    return !!(g(e, o, l, u, y) && g(e = [1, 0, 0, 0, 1, 0, 0, 0, 1], o, l, u, y)) && (x.crossVectors(c, d), g(e = [x.x, x.y, x.z], o, l, u, y))
                }
                clampPoint(t, e) {
                    return e.copy(t).clamp(this.min, this.max)
                }
                distanceToPoint(t) {
                    return this.clampPoint(t, a).distanceTo(t)
                }
                getBoundingSphere(t) {
                    return this.isEmpty() ? t.makeEmpty() : (this.getCenter(t.center), t.radius = .5 * this.getSize(a).length()), t
                }
                intersect(t) {
                    return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this
                }
                union(t) {
                    return this.min.min(t.min), this.max.max(t.max), this
                }
                applyMatrix4(t) {
                    return this.isEmpty() || (n[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), n[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), n[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), n[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), n[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), n[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), n[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), n[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(n)), this
                }
                translate(t) {
                    return this.min.add(t), this.max.add(t), this
                }
                equals(t) {
                    return t.min.equals(this.min) && t.max.equals(this.max)
                }
            }
            let n = [new s.P, new s.P, new s.P, new s.P, new s.P, new s.P, new s.P, new s.P],
                a = new s.P,
                h = new r,
                o = new s.P,
                l = new s.P,
                u = new s.P,
                c = new s.P,
                d = new s.P,
                p = new s.P,
                m = new s.P,
                y = new s.P,
                x = new s.P,
                f = new s.P;

            function g(t, e, i, s, r) {
                for (let n = 0, a = t.length - 3; n <= a; n += 3) {
                    f.fromArray(t, n);
                    let a = r.x * Math.abs(f.x) + r.y * Math.abs(f.y) + r.z * Math.abs(f.z),
                        h = e.dot(f),
                        o = i.dot(f),
                        l = s.dot(f);
                    if (Math.max(-Math.max(h, o, l), Math.min(h, o, l)) > a) return !1
                }
                return !0
            }
        },
        5716: function(t, e, i) {
            "use strict";
            i.d(e, {
                PB: function() {
                    return n
                },
                QP: function() {
                    return a
                },
                ep: function() {
                    return c
                }
            });
            var s = i(5293),
                r = i(763);

            function n(t) {
                return t < .04045 ? .0773993808 * t : Math.pow(.9478672986 * t + .0521327014, 2.4)
            }

            function a(t) {
                return t < .0031308 ? 12.92 * t : 1.055 * Math.pow(t, .41666) - .055
            }
            let h = new r.V().fromArray([.8224621, .0331941, .0170827, .177538, .9668058, .0723974, -.0000001, 1e-7, .9105199]),
                o = new r.V().fromArray([1.2249401, -.0420569, -.0196376, -.2249404, 1.0420571, -.0786361, 1e-7, 0, 1.0982735]),
                l = {
                    [s.GUF]: t => t,
                    [s.KI_]: t => t.convertSRGBToLinear(),
                    [s.ntt]: function(t) {
                        return t.convertSRGBToLinear().applyMatrix3(o)
                    }
                },
                u = {
                    [s.GUF]: t => t,
                    [s.KI_]: t => t.convertLinearToSRGB(),
                    [s.ntt]: function(t) {
                        return t.applyMatrix3(h).convertLinearToSRGB()
                    }
                },
                c = {
                    enabled: !0,
                    get legacyMode() {
                        return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."), !this.enabled
                    },
                    set legacyMode(legacyMode) {
                        console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."), this.enabled = !legacyMode
                    },
                    get workingColorSpace() {
                        return s.GUF
                    },
                    set workingColorSpace(colorSpace) {
                        console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")
                    },
                    convert: function(t, e, i) {
                        if (!1 === this.enabled || e === i || !e || !i) return t;
                        let s = l[e],
                            r = u[i];
                        if (void 0 === s || void 0 === r) throw Error(`Unsupported color space conversion, "${e}" to "${i}".`);
                        return r(s(t))
                    },
                    fromWorkingColorSpace: function(t, e) {
                        return this.convert(t, this.workingColorSpace, e)
                    },
                    toWorkingColorSpace: function(t, e) {
                        return this.convert(t, e, this.workingColorSpace)
                    }
                }
        },
        2424: function(t, e, i) {
            "use strict";
            i.d(e, {
                DO: function() {
                    return r
                },
                Fv: function() {
                    return l
                },
                cY: function() {
                    return o
                },
                kz: function() {
                    return a
                },
                t7: function() {
                    return h
                },
                uZ: function() {
                    return n
                }
            });
            let s = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];

            function r() {
                let t = 4294967295 * Math.random() | 0,
                    e = 4294967295 * Math.random() | 0,
                    i = 4294967295 * Math.random() | 0,
                    r = 4294967295 * Math.random() | 0,
                    n = s[255 & t] + s[t >> 8 & 255] + s[t >> 16 & 255] + s[t >> 24 & 255] + "-" + s[255 & e] + s[e >> 8 & 255] + "-" + s[e >> 16 & 15 | 64] + s[e >> 24 & 255] + "-" + s[63 & i | 128] + s[i >> 8 & 255] + "-" + s[i >> 16 & 255] + s[i >> 24 & 255] + s[255 & r] + s[r >> 8 & 255] + s[r >> 16 & 255] + s[r >> 24 & 255];
                return n.toLowerCase()
            }

            function n(t, e, i) {
                return Math.max(e, Math.min(i, t))
            }

            function a(t, e) {
                return (t % e + e) % e
            }

            function h(t, e, i) {
                return (1 - i) * t + i * e
            }

            function o(t, e) {
                switch (e.constructor) {
                    case Float32Array:
                        return t;
                    case Uint32Array:
                        return t / 4294967295;
                    case Uint16Array:
                        return t / 65535;
                    case Uint8Array:
                        return t / 255;
                    case Int32Array:
                        return Math.max(t / 2147483647, -1);
                    case Int16Array:
                        return Math.max(t / 32767, -1);
                    case Int8Array:
                        return Math.max(t / 127, -1);
                    default:
                        throw Error("Invalid component type.")
                }
            }

            function l(t, e) {
                switch (e.constructor) {
                    case Float32Array:
                        return t;
                    case Uint32Array:
                        return Math.round(4294967295 * t);
                    case Uint16Array:
                        return Math.round(65535 * t);
                    case Uint8Array:
                        return Math.round(255 * t);
                    case Int32Array:
                        return Math.round(2147483647 * t);
                    case Int16Array:
                        return Math.round(32767 * t);
                    case Int8Array:
                        return Math.round(127 * t);
                    default:
                        throw Error("Invalid component type.")
                }
            }
        },
        763: function(t, e, i) {
            "use strict";
            i.d(e, {
                V: function() {
                    return s
                }
            });
            class s {
                constructor(t, e, i, r, n, a, h, o, l) {
                    s.prototype.isMatrix3 = !0, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], void 0 !== t && this.set(t, e, i, r, n, a, h, o, l)
                }
                set(t, e, i, s, r, n, a, h, o) {
                    let l = this.elements;
                    return l[0] = t, l[1] = s, l[2] = a, l[3] = e, l[4] = r, l[5] = h, l[6] = i, l[7] = n, l[8] = o, this
                }
                identity() {
                    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this
                }
                copy(t) {
                    let e = this.elements,
                        i = t.elements;
                    return e[0] = i[0], e[1] = i[1], e[2] = i[2], e[3] = i[3], e[4] = i[4], e[5] = i[5], e[6] = i[6], e[7] = i[7], e[8] = i[8], this
                }
                extractBasis(t, e, i) {
                    return t.setFromMatrix3Column(this, 0), e.setFromMatrix3Column(this, 1), i.setFromMatrix3Column(this, 2), this
                }
                setFromMatrix4(t) {
                    let e = t.elements;
                    return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this
                }
                multiply(t) {
                    return this.multiplyMatrices(this, t)
                }
                premultiply(t) {
                    return this.multiplyMatrices(t, this)
                }
                multiplyMatrices(t, e) {
                    let i = t.elements,
                        s = e.elements,
                        r = this.elements,
                        n = i[0],
                        a = i[3],
                        h = i[6],
                        o = i[1],
                        l = i[4],
                        u = i[7],
                        c = i[2],
                        d = i[5],
                        p = i[8],
                        m = s[0],
                        y = s[3],
                        x = s[6],
                        f = s[1],
                        g = s[4],
                        M = s[7],
                        b = s[2],
                        w = s[5],
                        v = s[8];
                    return r[0] = n * m + a * f + h * b, r[3] = n * y + a * g + h * w, r[6] = n * x + a * M + h * v, r[1] = o * m + l * f + u * b, r[4] = o * y + l * g + u * w, r[7] = o * x + l * M + u * v, r[2] = c * m + d * f + p * b, r[5] = c * y + d * g + p * w, r[8] = c * x + d * M + p * v, this
                }
                multiplyScalar(t) {
                    let e = this.elements;
                    return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this
                }
                determinant() {
                    let t = this.elements,
                        e = t[0],
                        i = t[1],
                        s = t[2],
                        r = t[3],
                        n = t[4],
                        a = t[5],
                        h = t[6],
                        o = t[7],
                        l = t[8];
                    return e * n * l - e * a * o - i * r * l + i * a * h + s * r * o - s * n * h
                }
                invert() {
                    let t = this.elements,
                        e = t[0],
                        i = t[1],
                        s = t[2],
                        r = t[3],
                        n = t[4],
                        a = t[5],
                        h = t[6],
                        o = t[7],
                        l = t[8],
                        u = l * n - a * o,
                        c = a * h - l * r,
                        d = o * r - n * h,
                        p = e * u + i * c + s * d;
                    if (0 === p) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
                    let m = 1 / p;
                    return t[0] = u * m, t[1] = (s * o - l * i) * m, t[2] = (a * i - s * n) * m, t[3] = c * m, t[4] = (l * e - s * h) * m, t[5] = (s * r - a * e) * m, t[6] = d * m, t[7] = (i * h - o * e) * m, t[8] = (n * e - i * r) * m, this
                }
                transpose() {
                    let t;
                    let e = this.elements;
                    return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this
                }
                getNormalMatrix(t) {
                    return this.setFromMatrix4(t).invert().transpose()
                }
                transposeIntoArray(t) {
                    let e = this.elements;
                    return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this
                }
                setUvTransform(t, e, i, s, r, n, a) {
                    let h = Math.cos(r),
                        o = Math.sin(r);
                    return this.set(i * h, i * o, -i * (h * n + o * a) + n + t, -s * o, s * h, -s * (-o * n + h * a) + a + e, 0, 0, 1), this
                }
                scale(t, e) {
                    return this.premultiply(r.makeScale(t, e)), this
                }
                rotate(t) {
                    return this.premultiply(r.makeRotation(-t)), this
                }
                translate(t, e) {
                    return this.premultiply(r.makeTranslation(t, e)), this
                }
                makeTranslation(t, e) {
                    return t.isVector2 ? this.set(1, 0, t.x, 0, 1, t.y, 0, 0, 1) : this.set(1, 0, t, 0, 1, e, 0, 0, 1), this
                }
                makeRotation(t) {
                    let e = Math.cos(t),
                        i = Math.sin(t);
                    return this.set(e, -i, 0, i, e, 0, 0, 0, 1), this
                }
                makeScale(t, e) {
                    return this.set(t, 0, 0, 0, e, 0, 0, 0, 1), this
                }
                equals(t) {
                    let e = this.elements,
                        i = t.elements;
                    for (let t = 0; t < 9; t++)
                        if (e[t] !== i[t]) return !1;
                    return !0
                }
                fromArray(t, e = 0) {
                    for (let i = 0; i < 9; i++) this.elements[i] = t[i + e];
                    return this
                }
                toArray(t = [], e = 0) {
                    let i = this.elements;
                    return t[e] = i[0], t[e + 1] = i[1], t[e + 2] = i[2], t[e + 3] = i[3], t[e + 4] = i[4], t[e + 5] = i[5], t[e + 6] = i[6], t[e + 7] = i[7], t[e + 8] = i[8], t
                }
                clone() {
                    return new this.constructor().fromArray(this.elements)
                }
            }
            let r = new s
        },
        6690: function(t, e, i) {
            "use strict";
            i.d(e, {
                y: function() {
                    return n
                }
            });
            var s = i(5293),
                r = i(7714);
            class n {
                constructor(t, e, i, s, r, a, h, o, l, u, c, d, p, m, y, x) {
                    n.prototype.isMatrix4 = !0, this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], void 0 !== t && this.set(t, e, i, s, r, a, h, o, l, u, c, d, p, m, y, x)
                }
                set(t, e, i, s, r, n, a, h, o, l, u, c, d, p, m, y) {
                    let x = this.elements;
                    return x[0] = t, x[4] = e, x[8] = i, x[12] = s, x[1] = r, x[5] = n, x[9] = a, x[13] = h, x[2] = o, x[6] = l, x[10] = u, x[14] = c, x[3] = d, x[7] = p, x[11] = m, x[15] = y, this
                }
                identity() {
                    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
                }
                clone() {
                    return new n().fromArray(this.elements)
                }
                copy(t) {
                    let e = this.elements,
                        i = t.elements;
                    return e[0] = i[0], e[1] = i[1], e[2] = i[2], e[3] = i[3], e[4] = i[4], e[5] = i[5], e[6] = i[6], e[7] = i[7], e[8] = i[8], e[9] = i[9], e[10] = i[10], e[11] = i[11], e[12] = i[12], e[13] = i[13], e[14] = i[14], e[15] = i[15], this
                }
                copyPosition(t) {
                    let e = this.elements,
                        i = t.elements;
                    return e[12] = i[12], e[13] = i[13], e[14] = i[14], this
                }
                setFromMatrix3(t) {
                    let e = t.elements;
                    return this.set(e[0], e[3], e[6], 0, e[1], e[4], e[7], 0, e[2], e[5], e[8], 0, 0, 0, 0, 1), this
                }
                extractBasis(t, e, i) {
                    return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), i.setFromMatrixColumn(this, 2), this
                }
                makeBasis(t, e, i) {
                    return this.set(t.x, e.x, i.x, 0, t.y, e.y, i.y, 0, t.z, e.z, i.z, 0, 0, 0, 0, 1), this
                }
                extractRotation(t) {
                    let e = this.elements,
                        i = t.elements,
                        s = 1 / a.setFromMatrixColumn(t, 0).length(),
                        r = 1 / a.setFromMatrixColumn(t, 1).length(),
                        n = 1 / a.setFromMatrixColumn(t, 2).length();
                    return e[0] = i[0] * s, e[1] = i[1] * s, e[2] = i[2] * s, e[3] = 0, e[4] = i[4] * r, e[5] = i[5] * r, e[6] = i[6] * r, e[7] = 0, e[8] = i[8] * n, e[9] = i[9] * n, e[10] = i[10] * n, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
                }
                makeRotationFromEuler(t) {
                    let e = this.elements,
                        i = t.x,
                        s = t.y,
                        r = t.z,
                        n = Math.cos(i),
                        a = Math.sin(i),
                        h = Math.cos(s),
                        o = Math.sin(s),
                        l = Math.cos(r),
                        u = Math.sin(r);
                    if ("XYZ" === t.order) {
                        let t = n * l,
                            i = n * u,
                            s = a * l,
                            r = a * u;
                        e[0] = h * l, e[4] = -h * u, e[8] = o, e[1] = i + s * o, e[5] = t - r * o, e[9] = -a * h, e[2] = r - t * o, e[6] = s + i * o, e[10] = n * h
                    } else if ("YXZ" === t.order) {
                        let t = h * l,
                            i = h * u,
                            s = o * l,
                            r = o * u;
                        e[0] = t + r * a, e[4] = s * a - i, e[8] = n * o, e[1] = n * u, e[5] = n * l, e[9] = -a, e[2] = i * a - s, e[6] = r + t * a, e[10] = n * h
                    } else if ("ZXY" === t.order) {
                        let t = h * l,
                            i = h * u,
                            s = o * l,
                            r = o * u;
                        e[0] = t - r * a, e[4] = -n * u, e[8] = s + i * a, e[1] = i + s * a, e[5] = n * l, e[9] = r - t * a, e[2] = -n * o, e[6] = a, e[10] = n * h
                    } else if ("ZYX" === t.order) {
                        let t = n * l,
                            i = n * u,
                            s = a * l,
                            r = a * u;
                        e[0] = h * l, e[4] = s * o - i, e[8] = t * o + r, e[1] = h * u, e[5] = r * o + t, e[9] = i * o - s, e[2] = -o, e[6] = a * h, e[10] = n * h
                    } else if ("YZX" === t.order) {
                        let t = n * h,
                            i = n * o,
                            s = a * h,
                            r = a * o;
                        e[0] = h * l, e[4] = r - t * u, e[8] = s * u + i, e[1] = u, e[5] = n * l, e[9] = -a * l, e[2] = -o * l, e[6] = i * u + s, e[10] = t - r * u
                    } else if ("XZY" === t.order) {
                        let t = n * h,
                            i = n * o,
                            s = a * h,
                            r = a * o;
                        e[0] = h * l, e[4] = -u, e[8] = o * l, e[1] = t * u + r, e[5] = n * l, e[9] = i * u - s, e[2] = s * u - i, e[6] = a * l, e[10] = r * u + t
                    }
                    return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
                }
                makeRotationFromQuaternion(t) {
                    return this.compose(o, t, l)
                }
                lookAt(t, e, i) {
                    let s = this.elements;
                    return d.subVectors(t, e), 0 === d.lengthSq() && (d.z = 1), d.normalize(), u.crossVectors(i, d), 0 === u.lengthSq() && (1 === Math.abs(i.z) ? d.x += 1e-4 : d.z += 1e-4, d.normalize(), u.crossVectors(i, d)), u.normalize(), c.crossVectors(d, u), s[0] = u.x, s[4] = c.x, s[8] = d.x, s[1] = u.y, s[5] = c.y, s[9] = d.y, s[2] = u.z, s[6] = c.z, s[10] = d.z, this
                }
                multiply(t) {
                    return this.multiplyMatrices(this, t)
                }
                premultiply(t) {
                    return this.multiplyMatrices(t, this)
                }
                multiplyMatrices(t, e) {
                    let i = t.elements,
                        s = e.elements,
                        r = this.elements,
                        n = i[0],
                        a = i[4],
                        h = i[8],
                        o = i[12],
                        l = i[1],
                        u = i[5],
                        c = i[9],
                        d = i[13],
                        p = i[2],
                        m = i[6],
                        y = i[10],
                        x = i[14],
                        f = i[3],
                        g = i[7],
                        M = i[11],
                        b = i[15],
                        w = s[0],
                        v = s[4],
                        z = s[8],
                        S = s[12],
                        _ = s[1],
                        A = s[5],
                        T = s[9],
                        k = s[13],
                        P = s[2],
                        E = s[6],
                        C = s[10],
                        B = s[14],
                        F = s[3],
                        O = s[7],
                        R = s[11],
                        I = s[15];
                    return r[0] = n * w + a * _ + h * P + o * F, r[4] = n * v + a * A + h * E + o * O, r[8] = n * z + a * T + h * C + o * R, r[12] = n * S + a * k + h * B + o * I, r[1] = l * w + u * _ + c * P + d * F, r[5] = l * v + u * A + c * E + d * O, r[9] = l * z + u * T + c * C + d * R, r[13] = l * S + u * k + c * B + d * I, r[2] = p * w + m * _ + y * P + x * F, r[6] = p * v + m * A + y * E + x * O, r[10] = p * z + m * T + y * C + x * R, r[14] = p * S + m * k + y * B + x * I, r[3] = f * w + g * _ + M * P + b * F, r[7] = f * v + g * A + M * E + b * O, r[11] = f * z + g * T + M * C + b * R, r[15] = f * S + g * k + M * B + b * I, this
                }
                multiplyScalar(t) {
                    let e = this.elements;
                    return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this
                }
                determinant() {
                    let t = this.elements,
                        e = t[0],
                        i = t[4],
                        s = t[8],
                        r = t[12],
                        n = t[1],
                        a = t[5],
                        h = t[9],
                        o = t[13],
                        l = t[2],
                        u = t[6],
                        c = t[10],
                        d = t[14],
                        p = t[3],
                        m = t[7],
                        y = t[11],
                        x = t[15];
                    return p * (+r * h * u - s * o * u - r * a * c + i * o * c + s * a * d - i * h * d) + m * (+e * h * d - e * o * c + r * n * c - s * n * d + s * o * l - r * h * l) + y * (+e * o * u - e * a * d - r * n * u + i * n * d + r * a * l - i * o * l) + x * (-s * a * l - e * h * u + e * a * c + s * n * u - i * n * c + i * h * l)
                }
                transpose() {
                    let t;
                    let e = this.elements;
                    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this
                }
                setPosition(t, e, i) {
                    let s = this.elements;
                    return t.isVector3 ? (s[12] = t.x, s[13] = t.y, s[14] = t.z) : (s[12] = t, s[13] = e, s[14] = i), this
                }
                invert() {
                    let t = this.elements,
                        e = t[0],
                        i = t[1],
                        s = t[2],
                        r = t[3],
                        n = t[4],
                        a = t[5],
                        h = t[6],
                        o = t[7],
                        l = t[8],
                        u = t[9],
                        c = t[10],
                        d = t[11],
                        p = t[12],
                        m = t[13],
                        y = t[14],
                        x = t[15],
                        f = u * y * o - m * c * o + m * h * d - a * y * d - u * h * x + a * c * x,
                        g = p * c * o - l * y * o - p * h * d + n * y * d + l * h * x - n * c * x,
                        M = l * m * o - p * u * o + p * a * d - n * m * d - l * a * x + n * u * x,
                        b = p * u * h - l * m * h - p * a * c + n * m * c + l * a * y - n * u * y,
                        w = e * f + i * g + s * M + r * b;
                    if (0 === w) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                    let v = 1 / w;
                    return t[0] = f * v, t[1] = (m * c * r - u * y * r - m * s * d + i * y * d + u * s * x - i * c * x) * v, t[2] = (a * y * r - m * h * r + m * s * o - i * y * o - a * s * x + i * h * x) * v, t[3] = (u * h * r - a * c * r - u * s * o + i * c * o + a * s * d - i * h * d) * v, t[4] = g * v, t[5] = (l * y * r - p * c * r + p * s * d - e * y * d - l * s * x + e * c * x) * v, t[6] = (p * h * r - n * y * r - p * s * o + e * y * o + n * s * x - e * h * x) * v, t[7] = (n * c * r - l * h * r + l * s * o - e * c * o - n * s * d + e * h * d) * v, t[8] = M * v, t[9] = (p * u * r - l * m * r - p * i * d + e * m * d + l * i * x - e * u * x) * v, t[10] = (n * m * r - p * a * r + p * i * o - e * m * o - n * i * x + e * a * x) * v, t[11] = (l * a * r - n * u * r - l * i * o + e * u * o + n * i * d - e * a * d) * v, t[12] = b * v, t[13] = (l * m * s - p * u * s + p * i * c - e * m * c - l * i * y + e * u * y) * v, t[14] = (p * a * s - n * m * s - p * i * h + e * m * h + n * i * y - e * a * y) * v, t[15] = (n * u * s - l * a * s + l * i * h - e * u * h - n * i * c + e * a * c) * v, this
                }
                scale(t) {
                    let e = this.elements,
                        i = t.x,
                        s = t.y,
                        r = t.z;
                    return e[0] *= i, e[4] *= s, e[8] *= r, e[1] *= i, e[5] *= s, e[9] *= r, e[2] *= i, e[6] *= s, e[10] *= r, e[3] *= i, e[7] *= s, e[11] *= r, this
                }
                getMaxScaleOnAxis() {
                    let t = this.elements,
                        e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2],
                        i = t[4] * t[4] + t[5] * t[5] + t[6] * t[6],
                        s = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
                    return Math.sqrt(Math.max(e, i, s))
                }
                makeTranslation(t, e, i) {
                    return t.isVector3 ? this.set(1, 0, 0, t.x, 0, 1, 0, t.y, 0, 0, 1, t.z, 0, 0, 0, 1) : this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, i, 0, 0, 0, 1), this
                }
                makeRotationX(t) {
                    let e = Math.cos(t),
                        i = Math.sin(t);
                    return this.set(1, 0, 0, 0, 0, e, -i, 0, 0, i, e, 0, 0, 0, 0, 1), this
                }
                makeRotationY(t) {
                    let e = Math.cos(t),
                        i = Math.sin(t);
                    return this.set(e, 0, i, 0, 0, 1, 0, 0, -i, 0, e, 0, 0, 0, 0, 1), this
                }
                makeRotationZ(t) {
                    let e = Math.cos(t),
                        i = Math.sin(t);
                    return this.set(e, -i, 0, 0, i, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
                }
                makeRotationAxis(t, e) {
                    let i = Math.cos(e),
                        s = Math.sin(e),
                        r = 1 - i,
                        n = t.x,
                        a = t.y,
                        h = t.z,
                        o = r * n,
                        l = r * a;
                    return this.set(o * n + i, o * a - s * h, o * h + s * a, 0, o * a + s * h, l * a + i, l * h - s * n, 0, o * h - s * a, l * h + s * n, r * h * h + i, 0, 0, 0, 0, 1), this
                }
                makeScale(t, e, i) {
                    return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1), this
                }
                makeShear(t, e, i, s, r, n) {
                    return this.set(1, i, r, 0, t, 1, n, 0, e, s, 1, 0, 0, 0, 0, 1), this
                }
                compose(t, e, i) {
                    let s = this.elements,
                        r = e._x,
                        n = e._y,
                        a = e._z,
                        h = e._w,
                        o = r + r,
                        l = n + n,
                        u = a + a,
                        c = r * o,
                        d = r * l,
                        p = r * u,
                        m = n * l,
                        y = n * u,
                        x = a * u,
                        f = h * o,
                        g = h * l,
                        M = h * u,
                        b = i.x,
                        w = i.y,
                        v = i.z;
                    return s[0] = (1 - (m + x)) * b, s[1] = (d + M) * b, s[2] = (p - g) * b, s[3] = 0, s[4] = (d - M) * w, s[5] = (1 - (c + x)) * w, s[6] = (y + f) * w, s[7] = 0, s[8] = (p + g) * v, s[9] = (y - f) * v, s[10] = (1 - (c + m)) * v, s[11] = 0, s[12] = t.x, s[13] = t.y, s[14] = t.z, s[15] = 1, this
                }
                decompose(t, e, i) {
                    let s = this.elements,
                        r = a.set(s[0], s[1], s[2]).length(),
                        n = a.set(s[4], s[5], s[6]).length(),
                        o = a.set(s[8], s[9], s[10]).length(),
                        l = this.determinant();
                    l < 0 && (r = -r), t.x = s[12], t.y = s[13], t.z = s[14], h.copy(this);
                    let u = 1 / r,
                        c = 1 / n,
                        d = 1 / o;
                    return h.elements[0] *= u, h.elements[1] *= u, h.elements[2] *= u, h.elements[4] *= c, h.elements[5] *= c, h.elements[6] *= c, h.elements[8] *= d, h.elements[9] *= d, h.elements[10] *= d, e.setFromRotationMatrix(h), i.x = r, i.y = n, i.z = o, this
                }
                makePerspective(t, e, i, r, n, a, h = s._RZ) {
                    let o, l;
                    let u = this.elements;
                    if (h === s._RZ) o = -(a + n) / (a - n), l = -2 * a * n / (a - n);
                    else if (h === s.JCZ) o = -a / (a - n), l = -a * n / (a - n);
                    else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + h);
                    return u[0] = 2 * n / (e - t), u[4] = 0, u[8] = (e + t) / (e - t), u[12] = 0, u[1] = 0, u[5] = 2 * n / (i - r), u[9] = (i + r) / (i - r), u[13] = 0, u[2] = 0, u[6] = 0, u[10] = o, u[14] = l, u[3] = 0, u[7] = 0, u[11] = -1, u[15] = 0, this
                }
                makeOrthographic(t, e, i, r, n, a, h = s._RZ) {
                    let o, l;
                    let u = this.elements,
                        c = 1 / (e - t),
                        d = 1 / (i - r),
                        p = 1 / (a - n);
                    if (h === s._RZ) o = (a + n) * p, l = -2 * p;
                    else if (h === s.JCZ) o = n * p, l = -1 * p;
                    else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + h);
                    return u[0] = 2 * c, u[4] = 0, u[8] = 0, u[12] = -((e + t) * c), u[1] = 0, u[5] = 2 * d, u[9] = 0, u[13] = -((i + r) * d), u[2] = 0, u[6] = 0, u[10] = l, u[14] = -o, u[3] = 0, u[7] = 0, u[11] = 0, u[15] = 1, this
                }
                equals(t) {
                    let e = this.elements,
                        i = t.elements;
                    for (let t = 0; t < 16; t++)
                        if (e[t] !== i[t]) return !1;
                    return !0
                }
                fromArray(t, e = 0) {
                    for (let i = 0; i < 16; i++) this.elements[i] = t[i + e];
                    return this
                }
                toArray(t = [], e = 0) {
                    let i = this.elements;
                    return t[e] = i[0], t[e + 1] = i[1], t[e + 2] = i[2], t[e + 3] = i[3], t[e + 4] = i[4], t[e + 5] = i[5], t[e + 6] = i[6], t[e + 7] = i[7], t[e + 8] = i[8], t[e + 9] = i[9], t[e + 10] = i[10], t[e + 11] = i[11], t[e + 12] = i[12], t[e + 13] = i[13], t[e + 14] = i[14], t[e + 15] = i[15], t
                }
            }
            let a = new r.P,
                h = new n,
                o = new r.P(0, 0, 0),
                l = new r.P(1, 1, 1),
                u = new r.P,
                c = new r.P,
                d = new r.P
        },
        7338: function(t, e, i) {
            "use strict";
            i.d(e, {
                _: function() {
                    return r
                }
            });
            var s = i(2424);
            class r {
                constructor(t = 0, e = 0, i = 0, s = 1) {
                    this.isQuaternion = !0, this._x = t, this._y = e, this._z = i, this._w = s
                }
                static slerpFlat(t, e, i, s, r, n, a) {
                    let h = i[s + 0],
                        o = i[s + 1],
                        l = i[s + 2],
                        u = i[s + 3],
                        c = r[n + 0],
                        d = r[n + 1],
                        p = r[n + 2],
                        m = r[n + 3];
                    if (0 === a) {
                        t[e + 0] = h, t[e + 1] = o, t[e + 2] = l, t[e + 3] = u;
                        return
                    }
                    if (1 === a) {
                        t[e + 0] = c, t[e + 1] = d, t[e + 2] = p, t[e + 3] = m;
                        return
                    }
                    if (u !== m || h !== c || o !== d || l !== p) {
                        let t = 1 - a,
                            e = h * c + o * d + l * p + u * m,
                            i = e >= 0 ? 1 : -1,
                            s = 1 - e * e;
                        if (s > Number.EPSILON) {
                            let r = Math.sqrt(s),
                                n = Math.atan2(r, e * i);
                            t = Math.sin(t * n) / r, a = Math.sin(a * n) / r
                        }
                        let r = a * i;
                        if (h = h * t + c * r, o = o * t + d * r, l = l * t + p * r, u = u * t + m * r, t === 1 - a) {
                            let t = 1 / Math.sqrt(h * h + o * o + l * l + u * u);
                            h *= t, o *= t, l *= t, u *= t
                        }
                    }
                    t[e] = h, t[e + 1] = o, t[e + 2] = l, t[e + 3] = u
                }
                static multiplyQuaternionsFlat(t, e, i, s, r, n) {
                    let a = i[s],
                        h = i[s + 1],
                        o = i[s + 2],
                        l = i[s + 3],
                        u = r[n],
                        c = r[n + 1],
                        d = r[n + 2],
                        p = r[n + 3];
                    return t[e] = a * p + l * u + h * d - o * c, t[e + 1] = h * p + l * c + o * u - a * d, t[e + 2] = o * p + l * d + a * c - h * u, t[e + 3] = l * p - a * u - h * c - o * d, t
                }
                get x() {
                    return this._x
                }
                set x(t) {
                    this._x = t, this._onChangeCallback()
                }
                get y() {
                    return this._y
                }
                set y(t) {
                    this._y = t, this._onChangeCallback()
                }
                get z() {
                    return this._z
                }
                set z(t) {
                    this._z = t, this._onChangeCallback()
                }
                get w() {
                    return this._w
                }
                set w(t) {
                    this._w = t, this._onChangeCallback()
                }
                set(t, e, i, s) {
                    return this._x = t, this._y = e, this._z = i, this._w = s, this._onChangeCallback(), this
                }
                clone() {
                    return new this.constructor(this._x, this._y, this._z, this._w)
                }
                copy(t) {
                    return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this._onChangeCallback(), this
                }
                setFromEuler(t, e) {
                    let i = t._x,
                        s = t._y,
                        r = t._z,
                        n = t._order,
                        a = Math.cos,
                        h = Math.sin,
                        o = a(i / 2),
                        l = a(s / 2),
                        u = a(r / 2),
                        c = h(i / 2),
                        d = h(s / 2),
                        p = h(r / 2);
                    switch (n) {
                        case "XYZ":
                            this._x = c * l * u + o * d * p, this._y = o * d * u - c * l * p, this._z = o * l * p + c * d * u, this._w = o * l * u - c * d * p;
                            break;
                        case "YXZ":
                            this._x = c * l * u + o * d * p, this._y = o * d * u - c * l * p, this._z = o * l * p - c * d * u, this._w = o * l * u + c * d * p;
                            break;
                        case "ZXY":
                            this._x = c * l * u - o * d * p, this._y = o * d * u + c * l * p, this._z = o * l * p + c * d * u, this._w = o * l * u - c * d * p;
                            break;
                        case "ZYX":
                            this._x = c * l * u - o * d * p, this._y = o * d * u + c * l * p, this._z = o * l * p - c * d * u, this._w = o * l * u + c * d * p;
                            break;
                        case "YZX":
                            this._x = c * l * u + o * d * p, this._y = o * d * u + c * l * p, this._z = o * l * p - c * d * u, this._w = o * l * u - c * d * p;
                            break;
                        case "XZY":
                            this._x = c * l * u - o * d * p, this._y = o * d * u - c * l * p, this._z = o * l * p + c * d * u, this._w = o * l * u + c * d * p;
                            break;
                        default:
                            console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + n)
                    }
                    return !1 !== e && this._onChangeCallback(), this
                }
                setFromAxisAngle(t, e) {
                    let i = e / 2,
                        s = Math.sin(i);
                    return this._x = t.x * s, this._y = t.y * s, this._z = t.z * s, this._w = Math.cos(i), this._onChangeCallback(), this
                }
                setFromRotationMatrix(t) {
                    let e = t.elements,
                        i = e[0],
                        s = e[4],
                        r = e[8],
                        n = e[1],
                        a = e[5],
                        h = e[9],
                        o = e[2],
                        l = e[6],
                        u = e[10],
                        c = i + a + u;
                    if (c > 0) {
                        let t = .5 / Math.sqrt(c + 1);
                        this._w = .25 / t, this._x = (l - h) * t, this._y = (r - o) * t, this._z = (n - s) * t
                    } else if (i > a && i > u) {
                        let t = 2 * Math.sqrt(1 + i - a - u);
                        this._w = (l - h) / t, this._x = .25 * t, this._y = (s + n) / t, this._z = (r + o) / t
                    } else if (a > u) {
                        let t = 2 * Math.sqrt(1 + a - i - u);
                        this._w = (r - o) / t, this._x = (s + n) / t, this._y = .25 * t, this._z = (h + l) / t
                    } else {
                        let t = 2 * Math.sqrt(1 + u - i - a);
                        this._w = (n - s) / t, this._x = (r + o) / t, this._y = (h + l) / t, this._z = .25 * t
                    }
                    return this._onChangeCallback(), this
                }
                setFromUnitVectors(t, e) {
                    let i = t.dot(e) + 1;
                    return i < Number.EPSILON ? (i = 0, Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y, this._y = t.x, this._z = 0, this._w = i) : (this._x = 0, this._y = -t.z, this._z = t.y, this._w = i)) : (this._x = t.y * e.z - t.z * e.y, this._y = t.z * e.x - t.x * e.z, this._z = t.x * e.y - t.y * e.x, this._w = i), this.normalize()
                }
                angleTo(t) {
                    return 2 * Math.acos(Math.abs(s.uZ(this.dot(t), -1, 1)))
                }
                rotateTowards(t, e) {
                    let i = this.angleTo(t);
                    return 0 === i || this.slerp(t, Math.min(1, e / i)), this
                }
                identity() {
                    return this.set(0, 0, 0, 1)
                }
                invert() {
                    return this.conjugate()
                }
                conjugate() {
                    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this
                }
                dot(t) {
                    return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w
                }
                lengthSq() {
                    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
                }
                length() {
                    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
                }
                normalize() {
                    let t = this.length();
                    return 0 === t ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this._onChangeCallback(), this
                }
                multiply(t) {
                    return this.multiplyQuaternions(this, t)
                }
                premultiply(t) {
                    return this.multiplyQuaternions(t, this)
                }
                multiplyQuaternions(t, e) {
                    let i = t._x,
                        s = t._y,
                        r = t._z,
                        n = t._w,
                        a = e._x,
                        h = e._y,
                        o = e._z,
                        l = e._w;
                    return this._x = i * l + n * a + s * o - r * h, this._y = s * l + n * h + r * a - i * o, this._z = r * l + n * o + i * h - s * a, this._w = n * l - i * a - s * h - r * o, this._onChangeCallback(), this
                }
                slerp(t, e) {
                    if (0 === e) return this;
                    if (1 === e) return this.copy(t);
                    let i = this._x,
                        s = this._y,
                        r = this._z,
                        n = this._w,
                        a = n * t._w + i * t._x + s * t._y + r * t._z;
                    if (a < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, a = -a) : this.copy(t), a >= 1) return this._w = n, this._x = i, this._y = s, this._z = r, this;
                    let h = 1 - a * a;
                    if (h <= Number.EPSILON) {
                        let t = 1 - e;
                        return this._w = t * n + e * this._w, this._x = t * i + e * this._x, this._y = t * s + e * this._y, this._z = t * r + e * this._z, this.normalize(), this._onChangeCallback(), this
                    }
                    let o = Math.sqrt(h),
                        l = Math.atan2(o, a),
                        u = Math.sin((1 - e) * l) / o,
                        c = Math.sin(e * l) / o;
                    return this._w = n * u + this._w * c, this._x = i * u + this._x * c, this._y = s * u + this._y * c, this._z = r * u + this._z * c, this._onChangeCallback(), this
                }
                slerpQuaternions(t, e, i) {
                    return this.copy(t).slerp(e, i)
                }
                random() {
                    let t = Math.random(),
                        e = Math.sqrt(1 - t),
                        i = Math.sqrt(t),
                        s = 2 * Math.PI * Math.random(),
                        r = 2 * Math.PI * Math.random();
                    return this.set(e * Math.cos(s), i * Math.sin(r), i * Math.cos(r), e * Math.sin(s))
                }
                equals(t) {
                    return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w
                }
                fromArray(t, e = 0) {
                    return this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this._onChangeCallback(), this
                }
                toArray(t = [], e = 0) {
                    return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t
                }
                fromBufferAttribute(t, e) {
                    return this._x = t.getX(e), this._y = t.getY(e), this._z = t.getZ(e), this._w = t.getW(e), this
                }
                toJSON() {
                    return this.toArray()
                }
                _onChange(t) {
                    return this._onChangeCallback = t, this
                }
                _onChangeCallback() {}*[Symbol.iterator]() {
                    yield this._x, yield this._y, yield this._z, yield this._w
                }
            }
        },
        7708: function(t, e, i) {
            "use strict";
            i.d(e, {
                a: function() {
                    return o
                }
            });
            var s = i(1853),
                r = i(7714);
            let n = new s.Z,
                a = new r.P,
                h = new r.P;
            class o {
                constructor(t = new r.P, e = -1) {
                    this.center = t, this.radius = e
                }
                set(t, e) {
                    return this.center.copy(t), this.radius = e, this
                }
                setFromPoints(t, e) {
                    let i = this.center;
                    void 0 !== e ? i.copy(e) : n.setFromPoints(t).getCenter(i);
                    let s = 0;
                    for (let e = 0, r = t.length; e < r; e++) s = Math.max(s, i.distanceToSquared(t[e]));
                    return this.radius = Math.sqrt(s), this
                }
                copy(t) {
                    return this.center.copy(t.center), this.radius = t.radius, this
                }
                isEmpty() {
                    return this.radius < 0
                }
                makeEmpty() {
                    return this.center.set(0, 0, 0), this.radius = -1, this
                }
                containsPoint(t) {
                    return t.distanceToSquared(this.center) <= this.radius * this.radius
                }
                distanceToPoint(t) {
                    return t.distanceTo(this.center) - this.radius
                }
                intersectsSphere(t) {
                    let e = this.radius + t.radius;
                    return t.center.distanceToSquared(this.center) <= e * e
                }
                intersectsBox(t) {
                    return t.intersectsSphere(this)
                }
                intersectsPlane(t) {
                    return Math.abs(t.distanceToPoint(this.center)) <= this.radius
                }
                clampPoint(t, e) {
                    let i = this.center.distanceToSquared(t);
                    return e.copy(t), i > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e
                }
                getBoundingBox(t) {
                    return this.isEmpty() ? (t.makeEmpty(), t) : (t.set(this.center, this.center), t.expandByScalar(this.radius), t)
                }
                applyMatrix4(t) {
                    return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this
                }
                translate(t) {
                    return this.center.add(t), this
                }
                expandByPoint(t) {
                    if (this.isEmpty()) return this.center.copy(t), this.radius = 0, this;
                    a.subVectors(t, this.center);
                    let e = a.lengthSq();
                    if (e > this.radius * this.radius) {
                        let t = Math.sqrt(e),
                            i = (t - this.radius) * .5;
                        this.center.addScaledVector(a, i / t), this.radius += i
                    }
                    return this
                }
                union(t) {
                    return t.isEmpty() ? this : this.isEmpty() ? (this.copy(t), this) : (!0 === this.center.equals(t.center) ? this.radius = Math.max(this.radius, t.radius) : (h.subVectors(t.center, this.center).setLength(t.radius), this.expandByPoint(a.copy(t.center).add(h)), this.expandByPoint(a.copy(t.center).sub(h))), this)
                }
                equals(t) {
                    return t.center.equals(this.center) && t.radius === this.radius
                }
                clone() {
                    return new this.constructor().copy(this)
                }
            }
        },
        7146: function(t, e, i) {
            "use strict";
            i.d(e, {
                F: function() {
                    return r
                }
            });
            var s = i(2424);
            class r {
                constructor(t = 0, e = 0) {
                    r.prototype.isVector2 = !0, this.x = t, this.y = e
                }
                get width() {
                    return this.x
                }
                set width(t) {
                    this.x = t
                }
                get height() {
                    return this.y
                }
                set height(t) {
                    this.y = t
                }
                set(t, e) {
                    return this.x = t, this.y = e, this
                }
                setScalar(t) {
                    return this.x = t, this.y = t, this
                }
                setX(t) {
                    return this.x = t, this
                }
                setY(t) {
                    return this.y = t, this
                }
                setComponent(t, e) {
                    switch (t) {
                        case 0:
                            this.x = e;
                            break;
                        case 1:
                            this.y = e;
                            break;
                        default:
                            throw Error("index is out of range: " + t)
                    }
                    return this
                }
                getComponent(t) {
                    switch (t) {
                        case 0:
                            return this.x;
                        case 1:
                            return this.y;
                        default:
                            throw Error("index is out of range: " + t)
                    }
                }
                clone() {
                    return new this.constructor(this.x, this.y)
                }
                copy(t) {
                    return this.x = t.x, this.y = t.y, this
                }
                add(t) {
                    return this.x += t.x, this.y += t.y, this
                }
                addScalar(t) {
                    return this.x += t, this.y += t, this
                }
                addVectors(t, e) {
                    return this.x = t.x + e.x, this.y = t.y + e.y, this
                }
                addScaledVector(t, e) {
                    return this.x += t.x * e, this.y += t.y * e, this
                }
                sub(t) {
                    return this.x -= t.x, this.y -= t.y, this
                }
                subScalar(t) {
                    return this.x -= t, this.y -= t, this
                }
                subVectors(t, e) {
                    return this.x = t.x - e.x, this.y = t.y - e.y, this
                }
                multiply(t) {
                    return this.x *= t.x, this.y *= t.y, this
                }
                multiplyScalar(t) {
                    return this.x *= t, this.y *= t, this
                }
                divide(t) {
                    return this.x /= t.x, this.y /= t.y, this
                }
                divideScalar(t) {
                    return this.multiplyScalar(1 / t)
                }
                applyMatrix3(t) {
                    let e = this.x,
                        i = this.y,
                        s = t.elements;
                    return this.x = s[0] * e + s[3] * i + s[6], this.y = s[1] * e + s[4] * i + s[7], this
                }
                min(t) {
                    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this
                }
                max(t) {
                    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this
                }
                clamp(t, e) {
                    return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this
                }
                clampScalar(t, e) {
                    return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this
                }
                clampLength(t, e) {
                    let i = this.length();
                    return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(e, i)))
                }
                floor() {
                    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
                }
                ceil() {
                    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
                }
                round() {
                    return this.x = Math.round(this.x), this.y = Math.round(this.y), this
                }
                roundToZero() {
                    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this
                }
                negate() {
                    return this.x = -this.x, this.y = -this.y, this
                }
                dot(t) {
                    return this.x * t.x + this.y * t.y
                }
                cross(t) {
                    return this.x * t.y - this.y * t.x
                }
                lengthSq() {
                    return this.x * this.x + this.y * this.y
                }
                length() {
                    return Math.sqrt(this.x * this.x + this.y * this.y)
                }
                manhattanLength() {
                    return Math.abs(this.x) + Math.abs(this.y)
                }
                normalize() {
                    return this.divideScalar(this.length() || 1)
                }
                angle() {
                    let t = Math.atan2(-this.y, -this.x) + Math.PI;
                    return t
                }
                angleTo(t) {
                    let e = Math.sqrt(this.lengthSq() * t.lengthSq());
                    if (0 === e) return Math.PI / 2;
                    let i = this.dot(t) / e;
                    return Math.acos(s.uZ(i, -1, 1))
                }
                distanceTo(t) {
                    return Math.sqrt(this.distanceToSquared(t))
                }
                distanceToSquared(t) {
                    let e = this.x - t.x,
                        i = this.y - t.y;
                    return e * e + i * i
                }
                manhattanDistanceTo(t) {
                    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y)
                }
                setLength(t) {
                    return this.normalize().multiplyScalar(t)
                }
                lerp(t, e) {
                    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this
                }
                lerpVectors(t, e, i) {
                    return this.x = t.x + (e.x - t.x) * i, this.y = t.y + (e.y - t.y) * i, this
                }
                equals(t) {
                    return t.x === this.x && t.y === this.y
                }
                fromArray(t, e = 0) {
                    return this.x = t[e], this.y = t[e + 1], this
                }
                toArray(t = [], e = 0) {
                    return t[e] = this.x, t[e + 1] = this.y, t
                }
                fromBufferAttribute(t, e) {
                    return this.x = t.getX(e), this.y = t.getY(e), this
                }
                rotateAround(t, e) {
                    let i = Math.cos(e),
                        s = Math.sin(e),
                        r = this.x - t.x,
                        n = this.y - t.y;
                    return this.x = r * i - n * s + t.x, this.y = r * s + n * i + t.y, this
                }
                random() {
                    return this.x = Math.random(), this.y = Math.random(), this
                }*[Symbol.iterator]() {
                    yield this.x, yield this.y
                }
            }
        },
        7714: function(t, e, i) {
            "use strict";
            i.d(e, {
                P: function() {
                    return n
                }
            });
            var s = i(2424),
                r = i(7338);
            class n {
                constructor(t = 0, e = 0, i = 0) {
                    n.prototype.isVector3 = !0, this.x = t, this.y = e, this.z = i
                }
                set(t, e, i) {
                    return void 0 === i && (i = this.z), this.x = t, this.y = e, this.z = i, this
                }
                setScalar(t) {
                    return this.x = t, this.y = t, this.z = t, this
                }
                setX(t) {
                    return this.x = t, this
                }
                setY(t) {
                    return this.y = t, this
                }
                setZ(t) {
                    return this.z = t, this
                }
                setComponent(t, e) {
                    switch (t) {
                        case 0:
                            this.x = e;
                            break;
                        case 1:
                            this.y = e;
                            break;
                        case 2:
                            this.z = e;
                            break;
                        default:
                            throw Error("index is out of range: " + t)
                    }
                    return this
                }
                getComponent(t) {
                    switch (t) {
                        case 0:
                            return this.x;
                        case 1:
                            return this.y;
                        case 2:
                            return this.z;
                        default:
                            throw Error("index is out of range: " + t)
                    }
                }
                clone() {
                    return new this.constructor(this.x, this.y, this.z)
                }
                copy(t) {
                    return this.x = t.x, this.y = t.y, this.z = t.z, this
                }
                add(t) {
                    return this.x += t.x, this.y += t.y, this.z += t.z, this
                }
                addScalar(t) {
                    return this.x += t, this.y += t, this.z += t, this
                }
                addVectors(t, e) {
                    return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this
                }
                addScaledVector(t, e) {
                    return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this
                }
                sub(t) {
                    return this.x -= t.x, this.y -= t.y, this.z -= t.z, this
                }
                subScalar(t) {
                    return this.x -= t, this.y -= t, this.z -= t, this
                }
                subVectors(t, e) {
                    return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this
                }
                multiply(t) {
                    return this.x *= t.x, this.y *= t.y, this.z *= t.z, this
                }
                multiplyScalar(t) {
                    return this.x *= t, this.y *= t, this.z *= t, this
                }
                multiplyVectors(t, e) {
                    return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this
                }
                applyEuler(t) {
                    return this.applyQuaternion(h.setFromEuler(t))
                }
                applyAxisAngle(t, e) {
                    return this.applyQuaternion(h.setFromAxisAngle(t, e))
                }
                applyMatrix3(t) {
                    let e = this.x,
                        i = this.y,
                        s = this.z,
                        r = t.elements;
                    return this.x = r[0] * e + r[3] * i + r[6] * s, this.y = r[1] * e + r[4] * i + r[7] * s, this.z = r[2] * e + r[5] * i + r[8] * s, this
                }
                applyNormalMatrix(t) {
                    return this.applyMatrix3(t).normalize()
                }
                applyMatrix4(t) {
                    let e = this.x,
                        i = this.y,
                        s = this.z,
                        r = t.elements,
                        n = 1 / (r[3] * e + r[7] * i + r[11] * s + r[15]);
                    return this.x = (r[0] * e + r[4] * i + r[8] * s + r[12]) * n, this.y = (r[1] * e + r[5] * i + r[9] * s + r[13]) * n, this.z = (r[2] * e + r[6] * i + r[10] * s + r[14]) * n, this
                }
                applyQuaternion(t) {
                    let e = this.x,
                        i = this.y,
                        s = this.z,
                        r = t.x,
                        n = t.y,
                        a = t.z,
                        h = t.w,
                        o = h * e + n * s - a * i,
                        l = h * i + a * e - r * s,
                        u = h * s + r * i - n * e,
                        c = -r * e - n * i - a * s;
                    return this.x = o * h + -(c * r) + -(l * a) - -(u * n), this.y = l * h + -(c * n) + -(u * r) - -(o * a), this.z = u * h + -(c * a) + -(o * n) - -(l * r), this
                }
                project(t) {
                    return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)
                }
                unproject(t) {
                    return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)
                }
                transformDirection(t) {
                    let e = this.x,
                        i = this.y,
                        s = this.z,
                        r = t.elements;
                    return this.x = r[0] * e + r[4] * i + r[8] * s, this.y = r[1] * e + r[5] * i + r[9] * s, this.z = r[2] * e + r[6] * i + r[10] * s, this.normalize()
                }
                divide(t) {
                    return this.x /= t.x, this.y /= t.y, this.z /= t.z, this
                }
                divideScalar(t) {
                    return this.multiplyScalar(1 / t)
                }
                min(t) {
                    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this
                }
                max(t) {
                    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this
                }
                clamp(t, e) {
                    return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this
                }
                clampScalar(t, e) {
                    return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this
                }
                clampLength(t, e) {
                    let i = this.length();
                    return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(e, i)))
                }
                floor() {
                    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this
                }
                ceil() {
                    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this
                }
                round() {
                    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this
                }
                roundToZero() {
                    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this
                }
                negate() {
                    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
                }
                dot(t) {
                    return this.x * t.x + this.y * t.y + this.z * t.z
                }
                lengthSq() {
                    return this.x * this.x + this.y * this.y + this.z * this.z
                }
                length() {
                    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
                }
                manhattanLength() {
                    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
                }
                normalize() {
                    return this.divideScalar(this.length() || 1)
                }
                setLength(t) {
                    return this.normalize().multiplyScalar(t)
                }
                lerp(t, e) {
                    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this
                }
                lerpVectors(t, e, i) {
                    return this.x = t.x + (e.x - t.x) * i, this.y = t.y + (e.y - t.y) * i, this.z = t.z + (e.z - t.z) * i, this
                }
                cross(t) {
                    return this.crossVectors(this, t)
                }
                crossVectors(t, e) {
                    let i = t.x,
                        s = t.y,
                        r = t.z,
                        n = e.x,
                        a = e.y,
                        h = e.z;
                    return this.x = s * h - r * a, this.y = r * n - i * h, this.z = i * a - s * n, this
                }
                projectOnVector(t) {
                    let e = t.lengthSq();
                    if (0 === e) return this.set(0, 0, 0);
                    let i = t.dot(this) / e;
                    return this.copy(t).multiplyScalar(i)
                }
                projectOnPlane(t) {
                    return a.copy(this).projectOnVector(t), this.sub(a)
                }
                reflect(t) {
                    return this.sub(a.copy(t).multiplyScalar(2 * this.dot(t)))
                }
                angleTo(t) {
                    let e = Math.sqrt(this.lengthSq() * t.lengthSq());
                    if (0 === e) return Math.PI / 2;
                    let i = this.dot(t) / e;
                    return Math.acos(s.uZ(i, -1, 1))
                }
                distanceTo(t) {
                    return Math.sqrt(this.distanceToSquared(t))
                }
                distanceToSquared(t) {
                    let e = this.x - t.x,
                        i = this.y - t.y,
                        s = this.z - t.z;
                    return e * e + i * i + s * s
                }
                manhattanDistanceTo(t) {
                    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z)
                }
                setFromSpherical(t) {
                    return this.setFromSphericalCoords(t.radius, t.phi, t.theta)
                }
                setFromSphericalCoords(t, e, i) {
                    let s = Math.sin(e) * t;
                    return this.x = s * Math.sin(i), this.y = Math.cos(e) * t, this.z = s * Math.cos(i), this
                }
                setFromCylindrical(t) {
                    return this.setFromCylindricalCoords(t.radius, t.theta, t.y)
                }
                setFromCylindricalCoords(t, e, i) {
                    return this.x = t * Math.sin(e), this.y = i, this.z = t * Math.cos(e), this
                }
                setFromMatrixPosition(t) {
                    let e = t.elements;
                    return this.x = e[12], this.y = e[13], this.z = e[14], this
                }
                setFromMatrixScale(t) {
                    let e = this.setFromMatrixColumn(t, 0).length(),
                        i = this.setFromMatrixColumn(t, 1).length(),
                        s = this.setFromMatrixColumn(t, 2).length();
                    return this.x = e, this.y = i, this.z = s, this
                }
                setFromMatrixColumn(t, e) {
                    return this.fromArray(t.elements, 4 * e)
                }
                setFromMatrix3Column(t, e) {
                    return this.fromArray(t.elements, 3 * e)
                }
                setFromEuler(t) {
                    return this.x = t._x, this.y = t._y, this.z = t._z, this
                }
                setFromColor(t) {
                    return this.x = t.r, this.y = t.g, this.z = t.b, this
                }
                equals(t) {
                    return t.x === this.x && t.y === this.y && t.z === this.z
                }
                fromArray(t, e = 0) {
                    return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this
                }
                toArray(t = [], e = 0) {
                    return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t
                }
                fromBufferAttribute(t, e) {
                    return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this
                }
                random() {
                    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this
                }
                randomDirection() {
                    let t = (Math.random() - .5) * 2,
                        e = Math.random() * Math.PI * 2,
                        i = Math.sqrt(1 - t ** 2);
                    return this.x = i * Math.cos(e), this.y = i * Math.sin(e), this.z = t, this
                }*[Symbol.iterator]() {
                    yield this.x, yield this.y, yield this.z
                }
            }
            let a = new n,
                h = new r._
        },
        1714: function(t, e, i) {
            "use strict";
            i.d(e, {
                K: function() {
                    return ti
                }
            });
            var s = i(7714),
                r = i(7146),
                n = i(7708);
            let a = new s.P,
                h = new s.P,
                o = new s.P,
                l = new s.P,
                u = new s.P,
                c = new s.P,
                d = new s.P;
            var p = i(6690),
                m = i(6582);
            let y = new s.P,
                x = new s.P,
                f = new s.P,
                g = new s.P,
                M = new s.P,
                b = new s.P,
                w = new s.P,
                v = new s.P,
                z = new s.P,
                S = new s.P,
                _ = !1;
            class A {
                constructor(t = new s.P, e = new s.P, i = new s.P) {
                    this.a = t, this.b = e, this.c = i
                }
                static getNormal(t, e, i, s) {
                    s.subVectors(i, e), y.subVectors(t, e), s.cross(y);
                    let r = s.lengthSq();
                    return r > 0 ? s.multiplyScalar(1 / Math.sqrt(r)) : s.set(0, 0, 0)
                }
                static getBarycoord(t, e, i, s, r) {
                    y.subVectors(s, e), x.subVectors(i, e), f.subVectors(t, e);
                    let n = y.dot(y),
                        a = y.dot(x),
                        h = y.dot(f),
                        o = x.dot(x),
                        l = x.dot(f),
                        u = n * o - a * a;
                    if (0 === u) return r.set(-2, -1, -1);
                    let c = 1 / u,
                        d = (o * h - a * l) * c,
                        p = (n * l - a * h) * c;
                    return r.set(1 - d - p, p, d)
                }
                static containsPoint(t, e, i, s) {
                    return this.getBarycoord(t, e, i, s, g), g.x >= 0 && g.y >= 0 && g.x + g.y <= 1
                }
                static getUV(t, e, i, s, r, n, a, h) {
                    return !1 === _ && (console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."), _ = !0), this.getInterpolation(t, e, i, s, r, n, a, h)
                }
                static getInterpolation(t, e, i, s, r, n, a, h) {
                    return this.getBarycoord(t, e, i, s, g), h.setScalar(0), h.addScaledVector(r, g.x), h.addScaledVector(n, g.y), h.addScaledVector(a, g.z), h
                }
                static isFrontFacing(t, e, i, s) {
                    return y.subVectors(i, e), x.subVectors(t, e), 0 > y.cross(x).dot(s)
                }
                set(t, e, i) {
                    return this.a.copy(t), this.b.copy(e), this.c.copy(i), this
                }
                setFromPointsAndIndices(t, e, i, s) {
                    return this.a.copy(t[e]), this.b.copy(t[i]), this.c.copy(t[s]), this
                }
                setFromAttributeAndIndices(t, e, i, s) {
                    return this.a.fromBufferAttribute(t, e), this.b.fromBufferAttribute(t, i), this.c.fromBufferAttribute(t, s), this
                }
                clone() {
                    return new this.constructor().copy(this)
                }
                copy(t) {
                    return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this
                }
                getArea() {
                    return y.subVectors(this.c, this.b), x.subVectors(this.a, this.b), .5 * y.cross(x).length()
                }
                getMidpoint(t) {
                    return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
                }
                getNormal(t) {
                    return A.getNormal(this.a, this.b, this.c, t)
                }
                getPlane(t) {
                    return t.setFromCoplanarPoints(this.a, this.b, this.c)
                }
                getBarycoord(t, e) {
                    return A.getBarycoord(t, this.a, this.b, this.c, e)
                }
                getUV(t, e, i, s, r) {
                    return !1 === _ && (console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."), _ = !0), A.getInterpolation(t, this.a, this.b, this.c, e, i, s, r)
                }
                getInterpolation(t, e, i, s, r) {
                    return A.getInterpolation(t, this.a, this.b, this.c, e, i, s, r)
                }
                containsPoint(t) {
                    return A.containsPoint(t, this.a, this.b, this.c)
                }
                isFrontFacing(t) {
                    return A.isFrontFacing(this.a, this.b, this.c, t)
                }
                intersectsBox(t) {
                    return t.intersectsTriangle(this)
                }
                closestPointToPoint(t, e) {
                    let i, s;
                    let r = this.a,
                        n = this.b,
                        a = this.c;
                    M.subVectors(n, r), b.subVectors(a, r), v.subVectors(t, r);
                    let h = M.dot(v),
                        o = b.dot(v);
                    if (h <= 0 && o <= 0) return e.copy(r);
                    z.subVectors(t, n);
                    let l = M.dot(z),
                        u = b.dot(z);
                    if (l >= 0 && u <= l) return e.copy(n);
                    let c = h * u - l * o;
                    if (c <= 0 && h >= 0 && l <= 0) return i = h / (h - l), e.copy(r).addScaledVector(M, i);
                    S.subVectors(t, a);
                    let d = M.dot(S),
                        p = b.dot(S);
                    if (p >= 0 && d <= p) return e.copy(a);
                    let m = d * o - h * p;
                    if (m <= 0 && o >= 0 && p <= 0) return s = o / (o - p), e.copy(r).addScaledVector(b, s);
                    let y = l * p - d * u;
                    if (y <= 0 && u - l >= 0 && d - p >= 0) return w.subVectors(a, n), s = (u - l) / (u - l + (d - p)), e.copy(n).addScaledVector(w, s);
                    let x = 1 / (y + m + c);
                    return i = m * x, s = c * x, e.copy(r).addScaledVector(M, i).addScaledVector(b, s)
                }
                equals(t) {
                    return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c)
                }
            }
            var T = i(5293),
                k = i(4447),
                P = i(2424),
                E = i(5716);
            let C = {
                    aliceblue: 15792383,
                    antiquewhite: 16444375,
                    aqua: 65535,
                    aquamarine: 8388564,
                    azure: 15794175,
                    beige: 16119260,
                    bisque: 16770244,
                    black: 0,
                    blanchedalmond: 16772045,
                    blue: 255,
                    blueviolet: 9055202,
                    brown: 10824234,
                    burlywood: 14596231,
                    cadetblue: 6266528,
                    chartreuse: 8388352,
                    chocolate: 13789470,
                    coral: 16744272,
                    cornflowerblue: 6591981,
                    cornsilk: 16775388,
                    crimson: 14423100,
                    cyan: 65535,
                    darkblue: 139,
                    darkcyan: 35723,
                    darkgoldenrod: 12092939,
                    darkgray: 11119017,
                    darkgreen: 25600,
                    darkgrey: 11119017,
                    darkkhaki: 12433259,
                    darkmagenta: 9109643,
                    darkolivegreen: 5597999,
                    darkorange: 16747520,
                    darkorchid: 10040012,
                    darkred: 9109504,
                    darksalmon: 15308410,
                    darkseagreen: 9419919,
                    darkslateblue: 4734347,
                    darkslategray: 3100495,
                    darkslategrey: 3100495,
                    darkturquoise: 52945,
                    darkviolet: 9699539,
                    deeppink: 16716947,
                    deepskyblue: 49151,
                    dimgray: 6908265,
                    dimgrey: 6908265,
                    dodgerblue: 2003199,
                    firebrick: 11674146,
                    floralwhite: 16775920,
                    forestgreen: 2263842,
                    fuchsia: 16711935,
                    gainsboro: 14474460,
                    ghostwhite: 16316671,
                    gold: 16766720,
                    goldenrod: 14329120,
                    gray: 8421504,
                    green: 32768,
                    greenyellow: 11403055,
                    grey: 8421504,
                    honeydew: 15794160,
                    hotpink: 16738740,
                    indianred: 13458524,
                    indigo: 4915330,
                    ivory: 16777200,
                    khaki: 15787660,
                    lavender: 15132410,
                    lavenderblush: 16773365,
                    lawngreen: 8190976,
                    lemonchiffon: 16775885,
                    lightblue: 11393254,
                    lightcoral: 15761536,
                    lightcyan: 14745599,
                    lightgoldenrodyellow: 16448210,
                    lightgray: 13882323,
                    lightgreen: 9498256,
                    lightgrey: 13882323,
                    lightpink: 16758465,
                    lightsalmon: 16752762,
                    lightseagreen: 2142890,
                    lightskyblue: 8900346,
                    lightslategray: 7833753,
                    lightslategrey: 7833753,
                    lightsteelblue: 11584734,
                    lightyellow: 16777184,
                    lime: 65280,
                    limegreen: 3329330,
                    linen: 16445670,
                    magenta: 16711935,
                    maroon: 8388608,
                    mediumaquamarine: 6737322,
                    mediumblue: 205,
                    mediumorchid: 12211667,
                    mediumpurple: 9662683,
                    mediumseagreen: 3978097,
                    mediumslateblue: 8087790,
                    mediumspringgreen: 64154,
                    mediumturquoise: 4772300,
                    mediumvioletred: 13047173,
                    midnightblue: 1644912,
                    mintcream: 16121850,
                    mistyrose: 16770273,
                    moccasin: 16770229,
                    navajowhite: 16768685,
                    navy: 128,
                    oldlace: 16643558,
                    olive: 8421376,
                    olivedrab: 7048739,
                    orange: 16753920,
                    orangered: 16729344,
                    orchid: 14315734,
                    palegoldenrod: 15657130,
                    palegreen: 10025880,
                    paleturquoise: 11529966,
                    palevioletred: 14381203,
                    papayawhip: 16773077,
                    peachpuff: 16767673,
                    peru: 13468991,
                    pink: 16761035,
                    plum: 14524637,
                    powderblue: 11591910,
                    purple: 8388736,
                    rebeccapurple: 6697881,
                    red: 16711680,
                    rosybrown: 12357519,
                    royalblue: 4286945,
                    saddlebrown: 9127187,
                    salmon: 16416882,
                    sandybrown: 16032864,
                    seagreen: 3050327,
                    seashell: 16774638,
                    sienna: 10506797,
                    silver: 12632256,
                    skyblue: 8900331,
                    slateblue: 6970061,
                    slategray: 7372944,
                    slategrey: 7372944,
                    snow: 16775930,
                    springgreen: 65407,
                    steelblue: 4620980,
                    tan: 13808780,
                    teal: 32896,
                    thistle: 14204888,
                    tomato: 16737095,
                    turquoise: 4251856,
                    violet: 15631086,
                    wheat: 16113331,
                    white: 16777215,
                    whitesmoke: 16119285,
                    yellow: 16776960,
                    yellowgreen: 10145074
                },
                B = {
                    h: 0,
                    s: 0,
                    l: 0
                },
                F = {
                    h: 0,
                    s: 0,
                    l: 0
                };

            function O(t, e, i) {
                return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6) ? t + (e - t) * 6 * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * 6 * (2 / 3 - i) : t
            }
            class R {
                constructor(t, e, i) {
                    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(t, e, i)
                }
                set(t, e, i) {
                    return void 0 === e && void 0 === i ? t && t.isColor ? this.copy(t) : "number" == typeof t ? this.setHex(t) : "string" == typeof t && this.setStyle(t) : this.setRGB(t, e, i), this
                }
                setScalar(t) {
                    return this.r = t, this.g = t, this.b = t, this
                }
                setHex(t, e = T.KI_) {
                    return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (255 & t) / 255, E.ep.toWorkingColorSpace(this, e), this
                }
                setRGB(t, e, i, s = E.ep.workingColorSpace) {
                    return this.r = t, this.g = e, this.b = i, E.ep.toWorkingColorSpace(this, s), this
                }
                setHSL(t, e, i, s = E.ep.workingColorSpace) {
                    if (t = (0, P.kz)(t, 1), e = (0, P.uZ)(e, 0, 1), i = (0, P.uZ)(i, 0, 1), 0 === e) this.r = this.g = this.b = i;
                    else {
                        let s = i <= .5 ? i * (1 + e) : i + e - i * e,
                            r = 2 * i - s;
                        this.r = O(r, s, t + 1 / 3), this.g = O(r, s, t), this.b = O(r, s, t - 1 / 3)
                    }
                    return E.ep.toWorkingColorSpace(this, s), this
                }
                setStyle(t, e = T.KI_) {
                    let i;

                    function s(e) {
                        void 0 !== e && 1 > parseFloat(e) && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.")
                    }
                    if (i = /^(\w+)\(([^\)]*)\)/.exec(t)) {
                        let r;
                        let n = i[1],
                            a = i[2];
                        switch (n) {
                            case "rgb":
                            case "rgba":
                                if (r = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return s(r[4]), this.setRGB(Math.min(255, parseInt(r[1], 10)) / 255, Math.min(255, parseInt(r[2], 10)) / 255, Math.min(255, parseInt(r[3], 10)) / 255, e);
                                if (r = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return s(r[4]), this.setRGB(Math.min(100, parseInt(r[1], 10)) / 100, Math.min(100, parseInt(r[2], 10)) / 100, Math.min(100, parseInt(r[3], 10)) / 100, e);
                                break;
                            case "hsl":
                            case "hsla":
                                if (r = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return s(r[4]), this.setHSL(parseFloat(r[1]) / 360, parseFloat(r[2]) / 100, parseFloat(r[3]) / 100, e);
                                break;
                            default:
                                console.warn("THREE.Color: Unknown color model " + t)
                        }
                    } else if (i = /^\#([A-Fa-f\d]+)$/.exec(t)) {
                        let s = i[1],
                            r = s.length;
                        if (3 === r) return this.setRGB(parseInt(s.charAt(0), 16) / 15, parseInt(s.charAt(1), 16) / 15, parseInt(s.charAt(2), 16) / 15, e);
                        if (6 === r) return this.setHex(parseInt(s, 16), e);
                        console.warn("THREE.Color: Invalid hex color " + t)
                    } else if (t && t.length > 0) return this.setColorName(t, e);
                    return this
                }
                setColorName(t, e = T.KI_) {
                    let i = C[t.toLowerCase()];
                    return void 0 !== i ? this.setHex(i, e) : console.warn("THREE.Color: Unknown color " + t), this
                }
                clone() {
                    return new this.constructor(this.r, this.g, this.b)
                }
                copy(t) {
                    return this.r = t.r, this.g = t.g, this.b = t.b, this
                }
                copySRGBToLinear(t) {
                    return this.r = (0, E.PB)(t.r), this.g = (0, E.PB)(t.g), this.b = (0, E.PB)(t.b), this
                }
                copyLinearToSRGB(t) {
                    return this.r = (0, E.QP)(t.r), this.g = (0, E.QP)(t.g), this.b = (0, E.QP)(t.b), this
                }
                convertSRGBToLinear() {
                    return this.copySRGBToLinear(this), this
                }
                convertLinearToSRGB() {
                    return this.copyLinearToSRGB(this), this
                }
                getHex(t = T.KI_) {
                    return E.ep.fromWorkingColorSpace(I.copy(this), t), 65536 * Math.round((0, P.uZ)(255 * I.r, 0, 255)) + 256 * Math.round((0, P.uZ)(255 * I.g, 0, 255)) + Math.round((0, P.uZ)(255 * I.b, 0, 255))
                }
                getHexString(t = T.KI_) {
                    return ("000000" + this.getHex(t).toString(16)).slice(-6)
                }
                getHSL(t, e = E.ep.workingColorSpace) {
                    let i, s;
                    E.ep.fromWorkingColorSpace(I.copy(this), e);
                    let r = I.r,
                        n = I.g,
                        a = I.b,
                        h = Math.max(r, n, a),
                        o = Math.min(r, n, a),
                        l = (o + h) / 2;
                    if (o === h) i = 0, s = 0;
                    else {
                        let t = h - o;
                        switch (s = l <= .5 ? t / (h + o) : t / (2 - h - o), h) {
                            case r:
                                i = (n - a) / t + (n < a ? 6 : 0);
                                break;
                            case n:
                                i = (a - r) / t + 2;
                                break;
                            case a:
                                i = (r - n) / t + 4
                        }
                        i /= 6
                    }
                    return t.h = i, t.s = s, t.l = l, t
                }
                getRGB(t, e = E.ep.workingColorSpace) {
                    return E.ep.fromWorkingColorSpace(I.copy(this), e), t.r = I.r, t.g = I.g, t.b = I.b, t
                }
                getStyle(t = T.KI_) {
                    E.ep.fromWorkingColorSpace(I.copy(this), t);
                    let e = I.r,
                        i = I.g,
                        s = I.b;
                    return t !== T.KI_ ? `color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})` : `rgb(${Math.round(255*e)},${Math.round(255*i)},${Math.round(255*s)})`
                }
                offsetHSL(t, e, i) {
                    return this.getHSL(B), B.h += t, B.s += e, B.l += i, this.setHSL(B.h, B.s, B.l), this
                }
                add(t) {
                    return this.r += t.r, this.g += t.g, this.b += t.b, this
                }
                addColors(t, e) {
                    return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this
                }
                addScalar(t) {
                    return this.r += t, this.g += t, this.b += t, this
                }
                sub(t) {
                    return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this
                }
                multiply(t) {
                    return this.r *= t.r, this.g *= t.g, this.b *= t.b, this
                }
                multiplyScalar(t) {
                    return this.r *= t, this.g *= t, this.b *= t, this
                }
                lerp(t, e) {
                    return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this
                }
                lerpColors(t, e, i) {
                    return this.r = t.r + (e.r - t.r) * i, this.g = t.g + (e.g - t.g) * i, this.b = t.b + (e.b - t.b) * i, this
                }
                lerpHSL(t, e) {
                    this.getHSL(B), t.getHSL(F);
                    let i = (0, P.t7)(B.h, F.h, e),
                        s = (0, P.t7)(B.s, F.s, e),
                        r = (0, P.t7)(B.l, F.l, e);
                    return this.setHSL(i, s, r), this
                }
                setFromVector3(t) {
                    return this.r = t.x, this.g = t.y, this.b = t.z, this
                }
                applyMatrix3(t) {
                    let e = this.r,
                        i = this.g,
                        s = this.b,
                        r = t.elements;
                    return this.r = r[0] * e + r[3] * i + r[6] * s, this.g = r[1] * e + r[4] * i + r[7] * s, this.b = r[2] * e + r[5] * i + r[8] * s, this
                }
                equals(t) {
                    return t.r === this.r && t.g === this.g && t.b === this.b
                }
                fromArray(t, e = 0) {
                    return this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this
                }
                toArray(t = [], e = 0) {
                    return t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t
                }
                fromBufferAttribute(t, e) {
                    return this.r = t.getX(e), this.g = t.getY(e), this.b = t.getZ(e), this
                }
                toJSON() {
                    return this.getHex()
                }*[Symbol.iterator]() {
                    yield this.r, yield this.g, yield this.b
                }
            }
            let I = new R;
            R.NAMES = C;
            class V extends k.F {
                constructor(t) {
                    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new R(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = T.Ns1, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(t)
                }
                copy(t) {
                    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.fog = t.fog, this
                }
            }
            var W = i(2017);
            let N = new p.y,
                U = new class {
                    constructor(t = new s.P, e = new s.P(0, 0, -1)) {
                        this.origin = t, this.direction = e
                    }
                    set(t, e) {
                        return this.origin.copy(t), this.direction.copy(e), this
                    }
                    copy(t) {
                        return this.origin.copy(t.origin), this.direction.copy(t.direction), this
                    }
                    at(t, e) {
                        return e.copy(this.origin).addScaledVector(this.direction, t)
                    }
                    lookAt(t) {
                        return this.direction.copy(t).sub(this.origin).normalize(), this
                    }
                    recast(t) {
                        return this.origin.copy(this.at(t, a)), this
                    }
                    closestPointToPoint(t, e) {
                        e.subVectors(t, this.origin);
                        let i = e.dot(this.direction);
                        return i < 0 ? e.copy(this.origin) : e.copy(this.origin).addScaledVector(this.direction, i)
                    }
                    distanceToPoint(t) {
                        return Math.sqrt(this.distanceSqToPoint(t))
                    }
                    distanceSqToPoint(t) {
                        let e = a.subVectors(t, this.origin).dot(this.direction);
                        return e < 0 ? this.origin.distanceToSquared(t) : (a.copy(this.origin).addScaledVector(this.direction, e), a.distanceToSquared(t))
                    }
                    distanceSqToSegment(t, e, i, s) {
                        let r, n, a, u;
                        h.copy(t).add(e).multiplyScalar(.5), o.copy(e).sub(t).normalize(), l.copy(this.origin).sub(h);
                        let c = .5 * t.distanceTo(e),
                            d = -this.direction.dot(o),
                            p = l.dot(this.direction),
                            m = -l.dot(o),
                            y = l.lengthSq(),
                            x = Math.abs(1 - d * d);
                        if (x > 0) {
                            if (r = d * m - p, n = d * p - m, u = c * x, r >= 0) {
                                if (n >= -u) {
                                    if (n <= u) {
                                        let t = 1 / x;
                                        r *= t, n *= t, a = r * (r + d * n + 2 * p) + n * (d * r + n + 2 * m) + y
                                    } else a = -(r = Math.max(0, -(d * (n = c) + p))) * r + n * (n + 2 * m) + y
                                } else a = -(r = Math.max(0, -(d * (n = -c) + p))) * r + n * (n + 2 * m) + y
                            } else n <= -u ? (n = (r = Math.max(0, -(-d * c + p))) > 0 ? -c : Math.min(Math.max(-c, -m), c), a = -r * r + n * (n + 2 * m) + y) : n <= u ? (r = 0, a = (n = Math.min(Math.max(-c, -m), c)) * (n + 2 * m) + y) : (n = (r = Math.max(0, -(d * c + p))) > 0 ? c : Math.min(Math.max(-c, -m), c), a = -r * r + n * (n + 2 * m) + y)
                        } else n = d > 0 ? -c : c, a = -(r = Math.max(0, -(d * n + p))) * r + n * (n + 2 * m) + y;
                        return i && i.copy(this.origin).addScaledVector(this.direction, r), s && s.copy(h).addScaledVector(o, n), a
                    }
                    intersectSphere(t, e) {
                        a.subVectors(t.center, this.origin);
                        let i = a.dot(this.direction),
                            s = a.dot(a) - i * i,
                            r = t.radius * t.radius;
                        if (s > r) return null;
                        let n = Math.sqrt(r - s),
                            h = i - n,
                            o = i + n;
                        return o < 0 ? null : h < 0 ? this.at(o, e) : this.at(h, e)
                    }
                    intersectsSphere(t) {
                        return this.distanceSqToPoint(t.center) <= t.radius * t.radius
                    }
                    distanceToPlane(t) {
                        let e = t.normal.dot(this.direction);
                        if (0 === e) return 0 === t.distanceToPoint(this.origin) ? 0 : null;
                        let i = -(this.origin.dot(t.normal) + t.constant) / e;
                        return i >= 0 ? i : null
                    }
                    intersectPlane(t, e) {
                        let i = this.distanceToPlane(t);
                        return null === i ? null : this.at(i, e)
                    }
                    intersectsPlane(t) {
                        let e = t.distanceToPoint(this.origin);
                        if (0 === e) return !0;
                        let i = t.normal.dot(this.direction);
                        return i * e < 0
                    }
                    intersectBox(t, e) {
                        let i, s, r, n, a, h;
                        let o = 1 / this.direction.x,
                            l = 1 / this.direction.y,
                            u = 1 / this.direction.z,
                            c = this.origin;
                        return (o >= 0 ? (i = (t.min.x - c.x) * o, s = (t.max.x - c.x) * o) : (i = (t.max.x - c.x) * o, s = (t.min.x - c.x) * o), l >= 0 ? (r = (t.min.y - c.y) * l, n = (t.max.y - c.y) * l) : (r = (t.max.y - c.y) * l, n = (t.min.y - c.y) * l), i > n || r > s) ? null : ((r > i || isNaN(i)) && (i = r), (n < s || isNaN(s)) && (s = n), u >= 0 ? (a = (t.min.z - c.z) * u, h = (t.max.z - c.z) * u) : (a = (t.max.z - c.z) * u, h = (t.min.z - c.z) * u), i > h || a > s) ? null : ((a > i || i != i) && (i = a), (h < s || s != s) && (s = h), s < 0) ? null : this.at(i >= 0 ? i : s, e)
                    }
                    intersectsBox(t) {
                        return null !== this.intersectBox(t, a)
                    }
                    intersectTriangle(t, e, i, s, r) {
                        let n;
                        u.subVectors(e, t), c.subVectors(i, t), d.crossVectors(u, c);
                        let a = this.direction.dot(d);
                        if (a > 0) {
                            if (s) return null;
                            n = 1
                        } else {
                            if (!(a < 0)) return null;
                            n = -1, a = -a
                        }
                        l.subVectors(this.origin, t);
                        let h = n * this.direction.dot(c.crossVectors(l, c));
                        if (h < 0) return null;
                        let o = n * this.direction.dot(u.cross(l));
                        if (o < 0 || h + o > a) return null;
                        let p = -n * l.dot(d);
                        return p < 0 ? null : this.at(p / a, r)
                    }
                    applyMatrix4(t) {
                        return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this
                    }
                    equals(t) {
                        return t.origin.equals(this.origin) && t.direction.equals(this.direction)
                    }
                    clone() {
                        return new this.constructor().copy(this)
                    }
                },
                L = new n.a,
                q = new s.P,
                D = new s.P,
                j = new s.P,
                Z = new s.P,
                H = new s.P,
                Y = new s.P,
                J = new r.F,
                X = new r.F,
                G = new r.F,
                Q = new s.P,
                $ = new s.P,
                K = new s.P,
                tt = new s.P,
                te = new s.P;
            class ti extends m.T {
                constructor(t = new W.u, e = new V) {
                    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = t, this.material = e, this.updateMorphTargets()
                }
                copy(t, e) {
                    return super.copy(t, e), void 0 !== t.morphTargetInfluences && (this.morphTargetInfluences = t.morphTargetInfluences.slice()), void 0 !== t.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)), this.material = t.material, this.geometry = t.geometry, this
                }
                updateMorphTargets() {
                    let t = this.geometry,
                        e = t.morphAttributes,
                        i = Object.keys(e);
                    if (i.length > 0) {
                        let t = e[i[0]];
                        if (void 0 !== t) {
                            this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                            for (let e = 0, i = t.length; e < i; e++) {
                                let i = t[e].name || String(e);
                                this.morphTargetInfluences.push(0), this.morphTargetDictionary[i] = e
                            }
                        }
                    }
                }
                getVertexPosition(t, e) {
                    let i = this.geometry,
                        s = i.attributes.position,
                        r = i.morphAttributes.position,
                        n = i.morphTargetsRelative;
                    e.fromBufferAttribute(s, t);
                    let a = this.morphTargetInfluences;
                    if (r && a) {
                        Y.set(0, 0, 0);
                        for (let i = 0, s = r.length; i < s; i++) {
                            let s = a[i],
                                h = r[i];
                            0 !== s && (H.fromBufferAttribute(h, t), n ? Y.addScaledVector(H, s) : Y.addScaledVector(H.sub(e), s))
                        }
                        e.add(Y)
                    }
                    return e
                }
                raycast(t, e) {
                    let i = this.geometry,
                        s = this.material,
                        r = this.matrixWorld;
                    if (void 0 !== s) {
                        if (null === i.boundingSphere && i.computeBoundingSphere(), L.copy(i.boundingSphere), L.applyMatrix4(r), U.copy(t.ray).recast(t.near), !1 === L.containsPoint(U.origin) && (null === U.intersectSphere(L, q) || U.origin.distanceToSquared(q) > (t.far - t.near) ** 2) || (N.copy(r).invert(), U.copy(t.ray).applyMatrix4(N), null !== i.boundingBox && !1 === U.intersectsBox(i.boundingBox))) return;
                        this._computeIntersections(t, e, U)
                    }
                }
                _computeIntersections(t, e, i) {
                    let s;
                    let r = this.geometry,
                        n = this.material,
                        a = r.index,
                        h = r.attributes.position,
                        o = r.attributes.uv,
                        l = r.attributes.uv1,
                        u = r.attributes.normal,
                        c = r.groups,
                        d = r.drawRange;
                    if (null !== a) {
                        if (Array.isArray(n))
                            for (let r = 0, h = c.length; r < h; r++) {
                                let h = c[r],
                                    p = n[h.materialIndex],
                                    m = Math.max(h.start, d.start),
                                    y = Math.min(a.count, Math.min(h.start + h.count, d.start + d.count));
                                for (let r = m; r < y; r += 3) {
                                    let n = a.getX(r),
                                        c = a.getX(r + 1),
                                        d = a.getX(r + 2);
                                    (s = ts(this, p, t, i, o, l, u, n, c, d)) && (s.faceIndex = Math.floor(r / 3), s.face.materialIndex = h.materialIndex, e.push(s))
                                }
                            } else {
                                let r = Math.max(0, d.start),
                                    h = Math.min(a.count, d.start + d.count);
                                for (let c = r; c < h; c += 3) {
                                    let r = a.getX(c),
                                        h = a.getX(c + 1),
                                        d = a.getX(c + 2);
                                    (s = ts(this, n, t, i, o, l, u, r, h, d)) && (s.faceIndex = Math.floor(c / 3), e.push(s))
                                }
                            }
                    } else if (void 0 !== h) {
                        if (Array.isArray(n))
                            for (let r = 0, a = c.length; r < a; r++) {
                                let a = c[r],
                                    p = n[a.materialIndex],
                                    m = Math.max(a.start, d.start),
                                    y = Math.min(h.count, Math.min(a.start + a.count, d.start + d.count));
                                for (let r = m; r < y; r += 3) {
                                    let n = r,
                                        h = r + 1,
                                        c = r + 2;
                                    (s = ts(this, p, t, i, o, l, u, n, h, c)) && (s.faceIndex = Math.floor(r / 3), s.face.materialIndex = a.materialIndex, e.push(s))
                                }
                            } else {
                                let r = Math.max(0, d.start),
                                    a = Math.min(h.count, d.start + d.count);
                                for (let h = r; h < a; h += 3) {
                                    let r = h,
                                        a = h + 1,
                                        c = h + 2;
                                    (s = ts(this, n, t, i, o, l, u, r, a, c)) && (s.faceIndex = Math.floor(h / 3), e.push(s))
                                }
                            }
                    }
                }
            }

            function ts(t, e, i, n, a, h, o, l, u, c) {
                t.getVertexPosition(l, D), t.getVertexPosition(u, j), t.getVertexPosition(c, Z);
                let d = function(t, e, i, s, r, n, a, h) {
                    if (null === (e.side === T._Li ? s.intersectTriangle(a, n, r, !0, h) : s.intersectTriangle(r, n, a, e.side === T.Wl3, h))) return null;
                    te.copy(h), te.applyMatrix4(t.matrixWorld);
                    let o = i.ray.origin.distanceTo(te);
                    return o < i.near || o > i.far ? null : {
                        distance: o,
                        point: te.clone(),
                        object: t
                    }
                }(t, e, i, n, D, j, Z, tt);
                if (d) {
                    a && (J.fromBufferAttribute(a, l), X.fromBufferAttribute(a, u), G.fromBufferAttribute(a, c), d.uv = A.getInterpolation(tt, D, j, Z, J, X, G, new r.F)), h && (J.fromBufferAttribute(h, l), X.fromBufferAttribute(h, u), G.fromBufferAttribute(h, c), d.uv1 = A.getInterpolation(tt, D, j, Z, J, X, G, new r.F), d.uv2 = d.uv1), o && (Q.fromBufferAttribute(o, l), $.fromBufferAttribute(o, u), K.fromBufferAttribute(o, c), d.normal = A.getInterpolation(tt, D, j, Z, Q, $, K, new s.P), d.normal.dot(n.direction) > 0 && d.normal.multiplyScalar(-1));
                    let t = {
                        a: l,
                        b: u,
                        c: c,
                        normal: new s.P,
                        materialIndex: 0
                    };
                    A.getNormal(D, j, Z, t.normal), d.face = t
                }
                return d
            }
        },
        6459: function(t, e, i) {
            "use strict";
            let s;
            i.d(e, {
                d: function() {
                    return g
                }
            });
            var r = i(9264),
                n = i(5293),
                a = i(2424),
                h = i(7146),
                o = i(763),
                l = i(7957),
                u = i(5716);
            class c {
                static getDataURL(t) {
                    let e;
                    if (/^data:/i.test(t.src) || "undefined" == typeof HTMLCanvasElement) return t.src;
                    if (t instanceof HTMLCanvasElement) e = t;
                    else {
                        void 0 === s && (s = (0, l.c)("canvas")), s.width = t.width, s.height = t.height;
                        let i = s.getContext("2d");
                        t instanceof ImageData ? i.putImageData(t, 0, 0) : i.drawImage(t, 0, 0, t.width, t.height), e = s
                    }
                    return e.width > 2048 || e.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", t), e.toDataURL("image/jpeg", .6)) : e.toDataURL("image/png")
                }
                static sRGBToLinear(t) {
                    if ("undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap) {
                        let e = (0, l.c)("canvas");
                        e.width = t.width, e.height = t.height;
                        let i = e.getContext("2d");
                        i.drawImage(t, 0, 0, t.width, t.height);
                        let s = i.getImageData(0, 0, t.width, t.height),
                            r = s.data;
                        for (let t = 0; t < r.length; t++) r[t] = 255 * (0, u.PB)(r[t] / 255);
                        return i.putImageData(s, 0, 0), e
                    }
                    if (!t.data) return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), t; {
                        let e = t.data.slice(0);
                        for (let t = 0; t < e.length; t++) e instanceof Uint8Array || e instanceof Uint8ClampedArray ? e[t] = Math.floor(255 * (0, u.PB)(e[t] / 255)) : e[t] = (0, u.PB)(e[t]);
                        return {
                            data: e,
                            width: t.width,
                            height: t.height
                        }
                    }
                }
            }
            let d = 0;
            class p {
                constructor(t = null) {
                    this.isSource = !0, Object.defineProperty(this, "id", {
                        value: d++
                    }), this.uuid = a.DO(), this.data = t, this.version = 0
                }
                set needsUpdate(t) {
                    !0 === t && this.version++
                }
                toJSON(t) {
                    let e = void 0 === t || "string" == typeof t;
                    if (!e && void 0 !== t.images[this.uuid]) return t.images[this.uuid];
                    let i = {
                            uuid: this.uuid,
                            url: ""
                        },
                        s = this.data;
                    if (null !== s) {
                        let t;
                        if (Array.isArray(s)) {
                            t = [];
                            for (let e = 0, i = s.length; e < i; e++) s[e].isDataTexture ? t.push(m(s[e].image)) : t.push(m(s[e]))
                        } else t = m(s);
                        i.url = t
                    }
                    return e || (t.images[this.uuid] = i), i
                }
            }

            function m(t) {
                return "undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap ? c.getDataURL(t) : t.data ? {
                    data: Array.from(t.data),
                    width: t.width,
                    height: t.height,
                    type: t.data.constructor.name
                } : (console.warn("THREE.Texture: Unable to serialize Texture."), {})
            }
            let y = 0;
            class x extends r.p {
                constructor(t = x.DEFAULT_IMAGE, e = x.DEFAULT_MAPPING, i = n.uWy, s = n.uWy, r = n.wem, u = n.D1R, c = n.wk1, d = n.ywz, m = x.DEFAULT_ANISOTROPY, f = n.aCh) {
                    super(), this.isTexture = !0, Object.defineProperty(this, "id", {
                        value: y++
                    }), this.uuid = a.DO(), this.name = "", this.source = new p(t), this.mipmaps = [], this.mapping = e, this.channel = 0, this.wrapS = i, this.wrapT = s, this.magFilter = r, this.minFilter = u, this.anisotropy = m, this.format = c, this.internalFormat = null, this.type = d, this.offset = new h.F(0, 0), this.repeat = new h.F(1, 1), this.center = new h.F(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new o.V, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, "string" == typeof f ? this.colorSpace = f : ((0, l.O4)("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = f === n.knz ? n.KI_ : n.aCh), this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1
                }
                get image() {
                    return this.source.data
                }
                set image(t = null) {
                    this.source.data = t
                }
                updateMatrix() {
                    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y)
                }
                clone() {
                    return new this.constructor().copy(this)
                }
                copy(t) {
                    return this.name = t.name, this.source = t.source, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.channel = t.channel, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.internalFormat = t.internalFormat, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.colorSpace = t.colorSpace, this.userData = JSON.parse(JSON.stringify(t.userData)), this.needsUpdate = !0, this
                }
                toJSON(t) {
                    let e = void 0 === t || "string" == typeof t;
                    if (!e && void 0 !== t.textures[this.uuid]) return t.textures[this.uuid];
                    let i = {
                        metadata: {
                            version: 4.6,
                            type: "Texture",
                            generator: "Texture.toJSON"
                        },
                        uuid: this.uuid,
                        name: this.name,
                        image: this.source.toJSON(t).uuid,
                        mapping: this.mapping,
                        channel: this.channel,
                        repeat: [this.repeat.x, this.repeat.y],
                        offset: [this.offset.x, this.offset.y],
                        center: [this.center.x, this.center.y],
                        rotation: this.rotation,
                        wrap: [this.wrapS, this.wrapT],
                        format: this.format,
                        internalFormat: this.internalFormat,
                        type: this.type,
                        colorSpace: this.colorSpace,
                        minFilter: this.minFilter,
                        magFilter: this.magFilter,
                        anisotropy: this.anisotropy,
                        flipY: this.flipY,
                        generateMipmaps: this.generateMipmaps,
                        premultiplyAlpha: this.premultiplyAlpha,
                        unpackAlignment: this.unpackAlignment
                    };
                    return Object.keys(this.userData).length > 0 && (i.userData = this.userData), e || (t.textures[this.uuid] = i), i
                }
                dispose() {
                    this.dispatchEvent({
                        type: "dispose"
                    })
                }
                transformUv(t) {
                    if (this.mapping !== n.xfE) return t;
                    if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1) switch (this.wrapS) {
                        case n.rpg:
                            t.x = t.x - Math.floor(t.x);
                            break;
                        case n.uWy:
                            t.x = t.x < 0 ? 0 : 1;
                            break;
                        case n.OoA:
                            1 === Math.abs(Math.floor(t.x) % 2) ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x)
                    }
                    if (t.y < 0 || t.y > 1) switch (this.wrapT) {
                        case n.rpg:
                            t.y = t.y - Math.floor(t.y);
                            break;
                        case n.uWy:
                            t.y = t.y < 0 ? 0 : 1;
                            break;
                        case n.OoA:
                            1 === Math.abs(Math.floor(t.y) % 2) ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y)
                    }
                    return this.flipY && (t.y = 1 - t.y), t
                }
                set needsUpdate(t) {
                    !0 === t && (this.version++, this.source.needsUpdate = !0)
                }
                get encoding() {
                    return (0, l.O4)("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace === n.KI_ ? n.knz : n.rnI
                }
                set encoding(t) {
                    (0, l.O4)("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = t === n.knz ? n.KI_ : n.aCh
                }
            }
            x.DEFAULT_IMAGE = null, x.DEFAULT_MAPPING = n.xfE, x.DEFAULT_ANISOTROPY = 1;
            class f {
                constructor(t = 0, e = 0, i = 0, s = 1) {
                    f.prototype.isVector4 = !0, this.x = t, this.y = e, this.z = i, this.w = s
                }
                get width() {
                    return this.z
                }
                set width(t) {
                    this.z = t
                }
                get height() {
                    return this.w
                }
                set height(t) {
                    this.w = t
                }
                set(t, e, i, s) {
                    return this.x = t, this.y = e, this.z = i, this.w = s, this
                }
                setScalar(t) {
                    return this.x = t, this.y = t, this.z = t, this.w = t, this
                }
                setX(t) {
                    return this.x = t, this
                }
                setY(t) {
                    return this.y = t, this
                }
                setZ(t) {
                    return this.z = t, this
                }
                setW(t) {
                    return this.w = t, this
                }
                setComponent(t, e) {
                    switch (t) {
                        case 0:
                            this.x = e;
                            break;
                        case 1:
                            this.y = e;
                            break;
                        case 2:
                            this.z = e;
                            break;
                        case 3:
                            this.w = e;
                            break;
                        default:
                            throw Error("index is out of range: " + t)
                    }
                    return this
                }
                getComponent(t) {
                    switch (t) {
                        case 0:
                            return this.x;
                        case 1:
                            return this.y;
                        case 2:
                            return this.z;
                        case 3:
                            return this.w;
                        default:
                            throw Error("index is out of range: " + t)
                    }
                }
                clone() {
                    return new this.constructor(this.x, this.y, this.z, this.w)
                }
                copy(t) {
                    return this.x = t.x, this.y = t.y, this.z = t.z, this.w = void 0 !== t.w ? t.w : 1, this
                }
                add(t) {
                    return this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this
                }
                addScalar(t) {
                    return this.x += t, this.y += t, this.z += t, this.w += t, this
                }
                addVectors(t, e) {
                    return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this
                }
                addScaledVector(t, e) {
                    return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this
                }
                sub(t) {
                    return this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this
                }
                subScalar(t) {
                    return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this
                }
                subVectors(t, e) {
                    return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this
                }
                multiply(t) {
                    return this.x *= t.x, this.y *= t.y, this.z *= t.z, this.w *= t.w, this
                }
                multiplyScalar(t) {
                    return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this
                }
                applyMatrix4(t) {
                    let e = this.x,
                        i = this.y,
                        s = this.z,
                        r = this.w,
                        n = t.elements;
                    return this.x = n[0] * e + n[4] * i + n[8] * s + n[12] * r, this.y = n[1] * e + n[5] * i + n[9] * s + n[13] * r, this.z = n[2] * e + n[6] * i + n[10] * s + n[14] * r, this.w = n[3] * e + n[7] * i + n[11] * s + n[15] * r, this
                }
                divideScalar(t) {
                    return this.multiplyScalar(1 / t)
                }
                setAxisAngleFromQuaternion(t) {
                    this.w = 2 * Math.acos(t.w);
                    let e = Math.sqrt(1 - t.w * t.w);
                    return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this
                }
                setAxisAngleFromRotationMatrix(t) {
                    let e, i, s;
                    let r = t.elements,
                        n = r[0],
                        a = r[4],
                        h = r[8],
                        o = r[1],
                        l = r[5],
                        u = r[9],
                        c = r[2],
                        d = r[6],
                        p = r[10];
                    if (.01 > Math.abs(a - o) && .01 > Math.abs(h - c) && .01 > Math.abs(u - d)) {
                        if (.1 > Math.abs(a + o) && .1 > Math.abs(h + c) && .1 > Math.abs(u + d) && .1 > Math.abs(n + l + p - 3)) return this.set(1, 0, 0, 0), this;
                        let t = (n + 1) / 2,
                            r = (l + 1) / 2,
                            m = (p + 1) / 2,
                            y = (a + o) / 4,
                            x = (h + c) / 4,
                            f = (u + d) / 4;
                        return t > r && t > m ? t < .01 ? (e = 0, i = .707106781, s = .707106781) : (i = y / (e = Math.sqrt(t)), s = x / e) : r > m ? r < .01 ? (e = .707106781, i = 0, s = .707106781) : (e = y / (i = Math.sqrt(r)), s = f / i) : m < .01 ? (e = .707106781, i = .707106781, s = 0) : (e = x / (s = Math.sqrt(m)), i = f / s), this.set(e, i, s, Math.PI), this
                    }
                    let m = Math.sqrt((d - u) * (d - u) + (h - c) * (h - c) + (o - a) * (o - a));
                    return .001 > Math.abs(m) && (m = 1), this.x = (d - u) / m, this.y = (h - c) / m, this.z = (o - a) / m, this.w = Math.acos((n + l + p - 1) / 2), this
                }
                min(t) {
                    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this
                }
                max(t) {
                    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this
                }
                clamp(t, e) {
                    return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this.w = Math.max(t.w, Math.min(e.w, this.w)), this
                }
                clampScalar(t, e) {
                    return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this.w = Math.max(t, Math.min(e, this.w)), this
                }
                clampLength(t, e) {
                    let i = this.length();
                    return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(e, i)))
                }
                floor() {
                    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this
                }
                ceil() {
                    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this
                }
                round() {
                    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this
                }
                roundToZero() {
                    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this
                }
                negate() {
                    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this
                }
                dot(t) {
                    return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w
                }
                lengthSq() {
                    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
                }
                length() {
                    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
                }
                manhattanLength() {
                    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
                }
                normalize() {
                    return this.divideScalar(this.length() || 1)
                }
                setLength(t) {
                    return this.normalize().multiplyScalar(t)
                }
                lerp(t, e) {
                    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this
                }
                lerpVectors(t, e, i) {
                    return this.x = t.x + (e.x - t.x) * i, this.y = t.y + (e.y - t.y) * i, this.z = t.z + (e.z - t.z) * i, this.w = t.w + (e.w - t.w) * i, this
                }
                equals(t) {
                    return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w
                }
                fromArray(t, e = 0) {
                    return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this
                }
                toArray(t = [], e = 0) {
                    return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t
                }
                fromBufferAttribute(t, e) {
                    return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this
                }
                random() {
                    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this
                }*[Symbol.iterator]() {
                    yield this.x, yield this.y, yield this.z, yield this.w
                }
            }
            class g extends r.p {
                constructor(t = 1, e = 1, i = {}) {
                    super(), this.isWebGLRenderTarget = !0, this.width = t, this.height = e, this.depth = 1, this.scissor = new f(0, 0, t, e), this.scissorTest = !1, this.viewport = new f(0, 0, t, e), void 0 !== i.encoding && ((0, l.O4)("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."), i.colorSpace = i.encoding === n.knz ? n.KI_ : n.aCh), this.texture = new x({
                        width: t,
                        height: e,
                        depth: 1
                    }, i.mapping, i.wrapS, i.wrapT, i.magFilter, i.minFilter, i.format, i.type, i.anisotropy, i.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.flipY = !1, this.texture.generateMipmaps = void 0 !== i.generateMipmaps && i.generateMipmaps, this.texture.internalFormat = void 0 !== i.internalFormat ? i.internalFormat : null, this.texture.minFilter = void 0 !== i.minFilter ? i.minFilter : n.wem, this.depthBuffer = void 0 === i.depthBuffer || i.depthBuffer, this.stencilBuffer = void 0 !== i.stencilBuffer && i.stencilBuffer, this.depthTexture = void 0 !== i.depthTexture ? i.depthTexture : null, this.samples = void 0 !== i.samples ? i.samples : 0
                }
                setSize(t, e, i = 1) {
                    (this.width !== t || this.height !== e || this.depth !== i) && (this.width = t, this.height = e, this.depth = i, this.texture.image.width = t, this.texture.image.height = e, this.texture.image.depth = i, this.dispose()), this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e)
                }
                clone() {
                    return new this.constructor().copy(this)
                }
                copy(t) {
                    this.width = t.width, this.height = t.height, this.depth = t.depth, this.scissor.copy(t.scissor), this.scissorTest = t.scissorTest, this.viewport.copy(t.viewport), this.texture = t.texture.clone(), this.texture.isRenderTargetTexture = !0;
                    let e = Object.assign({}, t.texture.image);
                    return this.texture.source = new p(e), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, null !== t.depthTexture && (this.depthTexture = t.depthTexture.clone()), this.samples = t.samples, this
                }
                dispose() {
                    this.dispatchEvent({
                        type: "dispose"
                    })
                }
            }
        },
        8154: function(t, e, i) {
            "use strict";
            i.d(e, {
                x: function() {
                    return r
                }
            });
            var s = i(6582);
            class r extends s.T {
                constructor() {
                    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.overrideMaterial = null, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
                        detail: this
                    }))
                }
                copy(t, e) {
                    return super.copy(t, e), null !== t.background && (this.background = t.background.clone()), null !== t.environment && (this.environment = t.environment.clone()), null !== t.fog && (this.fog = t.fog.clone()), this.backgroundBlurriness = t.backgroundBlurriness, this.backgroundIntensity = t.backgroundIntensity, null !== t.overrideMaterial && (this.overrideMaterial = t.overrideMaterial.clone()), this.matrixAutoUpdate = t.matrixAutoUpdate, this
                }
                toJSON(t) {
                    let e = super.toJSON(t);
                    return null !== this.fog && (e.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (e.object.backgroundBlurriness = this.backgroundBlurriness), 1 !== this.backgroundIntensity && (e.object.backgroundIntensity = this.backgroundIntensity), e
                }
                get autoUpdate() {
                    return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."), this.matrixWorldAutoUpdate
                }
                set autoUpdate(t) {
                    console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."), this.matrixWorldAutoUpdate = t
                }
            }
        },
        7957: function(t, e, i) {
            "use strict";

            function s(t) {
                for (let e = t.length - 1; e >= 0; --e)
                    if (t[e] >= 65535) return !0;
                return !1
            }

            function r(t) {
                return document.createElementNS("http://www.w3.org/1999/xhtml", t)
            }
            i.d(e, {
                H7: function() {
                    return s
                },
                O4: function() {
                    return a
                },
                c: function() {
                    return r
                }
            }), Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array;
            let n = {};

            function a(t) {
                t in n || (n[t] = !0, console.warn(t))
            }
        }
    }
]);