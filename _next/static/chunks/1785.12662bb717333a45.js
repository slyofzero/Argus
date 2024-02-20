"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1785], {
        1785: function(e, t, n) {
            n.d(t, {
                z: function() {
                    return p
                }
            });
            var a = n(795),
                o = n(4381),
                i = n(959),
                r = n(688),
                s = Object.defineProperty,
                c = (e, t, n) => t in e ? s(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                l = (e, t, n) => (c(e, "symbol" != typeof t ? t + "" : t, n), n);
            let m = (e, t) => (e % t + t) % t;
            class h extends r.EventDispatcher {
                constructor(e, t) {
                    super(), l(this, "object"), l(this, "domElement"), l(this, "enabled", !0), l(this, "target", new r.Vector3), l(this, "minDistance", 0), l(this, "maxDistance", 1 / 0), l(this, "minZoom", 0), l(this, "maxZoom", 1 / 0), l(this, "minPolarAngle", 0), l(this, "maxPolarAngle", Math.PI), l(this, "minAzimuthAngle", -1 / 0), l(this, "maxAzimuthAngle", 1 / 0), l(this, "enableDamping", !1), l(this, "dampingFactor", .05), l(this, "enableZoom", !0), l(this, "zoomSpeed", 1), l(this, "enableRotate", !0), l(this, "rotateSpeed", 1), l(this, "enablePan", !0), l(this, "panSpeed", 1), l(this, "screenSpacePanning", !0), l(this, "keyPanSpeed", 7), l(this, "autoRotate", !1), l(this, "autoRotateSpeed", 2), l(this, "reverseOrbit", !1), l(this, "keys", {
                        LEFT: "ArrowLeft",
                        UP: "ArrowUp",
                        RIGHT: "ArrowRight",
                        BOTTOM: "ArrowDown"
                    }), l(this, "mouseButtons", {
                        LEFT: r.MOUSE.ROTATE,
                        MIDDLE: r.MOUSE.DOLLY,
                        RIGHT: r.MOUSE.PAN
                    }), l(this, "touches", {
                        ONE: r.TOUCH.ROTATE,
                        TWO: r.TOUCH.DOLLY_PAN
                    }), l(this, "target0"), l(this, "position0"), l(this, "zoom0"), l(this, "_domElementKeyEvents", null), l(this, "getPolarAngle"), l(this, "getAzimuthalAngle"), l(this, "setPolarAngle"), l(this, "setAzimuthalAngle"), l(this, "getDistance"), l(this, "listenToKeyEvents"), l(this, "saveState"), l(this, "reset"), l(this, "update"), l(this, "connect"), l(this, "dispose"), this.object = e, this.domElement = t, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this.getPolarAngle = () => p.phi, this.getAzimuthalAngle = () => p.theta, this.setPolarAngle = e => {
                        let t = m(e, 2 * Math.PI),
                            a = p.phi;
                        a < 0 && (a += 2 * Math.PI), t < 0 && (t += 2 * Math.PI);
                        let o = Math.abs(t - a);
                        2 * Math.PI - o < o && (t < a ? t += 2 * Math.PI : a += 2 * Math.PI), u.phi = t - a, n.update()
                    }, this.setAzimuthalAngle = e => {
                        let t = m(e, 2 * Math.PI),
                            a = p.theta;
                        a < 0 && (a += 2 * Math.PI), t < 0 && (t += 2 * Math.PI);
                        let o = Math.abs(t - a);
                        2 * Math.PI - o < o && (t < a ? t += 2 * Math.PI : a += 2 * Math.PI), u.theta = t - a, n.update()
                    }, this.getDistance = () => n.object.position.distanceTo(n.target), this.listenToKeyEvents = e => {
                        e.addEventListener("keydown", W), this._domElementKeyEvents = e
                    }, this.saveState = () => {
                        n.target0.copy(n.target), n.position0.copy(n.object.position), n.zoom0 = n.object.zoom
                    }, this.reset = () => {
                        n.target.copy(n.target0), n.object.position.copy(n.position0), n.object.zoom = n.zoom0, n.object.updateProjectionMatrix(), n.dispatchEvent(a), n.update(), c = s.NONE
                    }, this.update = (() => {
                        let t = new r.Vector3,
                            o = new r.Quaternion().setFromUnitVectors(e.up, new r.Vector3(0, 1, 0)),
                            i = o.clone().invert(),
                            l = new r.Vector3,
                            m = new r.Quaternion,
                            g = 2 * Math.PI;
                        return function() {
                            let e = n.object.position;
                            t.copy(e).sub(n.target), t.applyQuaternion(o), p.setFromVector3(t), n.autoRotate && c === s.NONE && N(2 * Math.PI / 60 / 60 * n.autoRotateSpeed), n.enableDamping ? (p.theta += u.theta * n.dampingFactor, p.phi += u.phi * n.dampingFactor) : (p.theta += u.theta, p.phi += u.phi);
                            let r = n.minAzimuthAngle,
                                f = n.maxAzimuthAngle;
                            return isFinite(r) && isFinite(f) && (r < -Math.PI ? r += g : r > Math.PI && (r -= g), f < -Math.PI ? f += g : f > Math.PI && (f -= g), r <= f ? p.theta = Math.max(r, Math.min(f, p.theta)) : p.theta = p.theta > (r + f) / 2 ? Math.max(r, p.theta) : Math.min(f, p.theta)), p.phi = Math.max(n.minPolarAngle, Math.min(n.maxPolarAngle, p.phi)), p.makeSafe(), p.radius *= d, p.radius = Math.max(n.minDistance, Math.min(n.maxDistance, p.radius)), !0 === n.enableDamping ? n.target.addScaledVector(b, n.dampingFactor) : n.target.add(b), t.setFromSpherical(p), t.applyQuaternion(i), e.copy(n.target).add(t), n.object.lookAt(n.target), !0 === n.enableDamping ? (u.theta *= 1 - n.dampingFactor, u.phi *= 1 - n.dampingFactor, b.multiplyScalar(1 - n.dampingFactor)) : (u.set(0, 0, 0), b.set(0, 0, 0)), d = 1, !!(E || l.distanceToSquared(n.object.position) > h || 8 * (1 - m.dot(n.object.quaternion)) > h) && (n.dispatchEvent(a), l.copy(n.object.position), m.copy(n.object.quaternion), E = !1, !0)
                        }
                    })(), this.connect = e => {
                        e === document && console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'), n.domElement = e, n.domElement.style.touchAction = "none", n.domElement.addEventListener("contextmenu", q), n.domElement.addEventListener("pointerdown", X), n.domElement.addEventListener("pointercancel", G), n.domElement.addEventListener("wheel", B)
                    }, this.dispose = () => {
                        var e, t, a, o, i, r;
                        null == (e = n.domElement) || e.removeEventListener("contextmenu", q), null == (t = n.domElement) || t.removeEventListener("pointerdown", X), null == (a = n.domElement) || a.removeEventListener("pointercancel", G), null == (o = n.domElement) || o.removeEventListener("wheel", B), null == (i = n.domElement) || i.ownerDocument.removeEventListener("pointermove", F), null == (r = n.domElement) || r.ownerDocument.removeEventListener("pointerup", K), null !== n._domElementKeyEvents && n._domElementKeyEvents.removeEventListener("keydown", W)
                    };
                    let n = this,
                        a = {
                            type: "change"
                        },
                        o = {
                            type: "start"
                        },
                        i = {
                            type: "end"
                        },
                        s = {
                            NONE: -1,
                            ROTATE: 0,
                            DOLLY: 1,
                            PAN: 2,
                            TOUCH_ROTATE: 3,
                            TOUCH_PAN: 4,
                            TOUCH_DOLLY_PAN: 5,
                            TOUCH_DOLLY_ROTATE: 6
                        },
                        c = s.NONE,
                        h = 1e-6,
                        p = new r.Spherical,
                        u = new r.Spherical,
                        d = 1,
                        b = new r.Vector3,
                        E = !1,
                        g = new r.Vector2,
                        f = new r.Vector2,
                        O = new r.Vector2,
                        P = new r.Vector2,
                        v = new r.Vector2,
                        y = new r.Vector2,
                        T = new r.Vector2,
                        A = new r.Vector2,
                        w = new r.Vector2,
                        M = [],
                        L = {};

                    function j() {
                        return Math.pow(.95, n.zoomSpeed)
                    }

                    function N(e) {
                        n.reverseOrbit ? u.theta += e : u.theta -= e
                    }

                    function k(e) {
                        n.reverseOrbit ? u.phi += e : u.phi -= e
                    }
                    let I = (() => {
                            let e = new r.Vector3;
                            return function(t, n) {
                                e.setFromMatrixColumn(n, 0), e.multiplyScalar(-t), b.add(e)
                            }
                        })(),
                        C = (() => {
                            let e = new r.Vector3;
                            return function(t, a) {
                                !0 === n.screenSpacePanning ? e.setFromMatrixColumn(a, 1) : (e.setFromMatrixColumn(a, 0), e.crossVectors(n.object.up, e)), e.multiplyScalar(t), b.add(e)
                            }
                        })(),
                        D = (() => {
                            let e = new r.Vector3;
                            return function(t, a) {
                                let o = n.domElement;
                                if (o && n.object instanceof r.PerspectiveCamera && n.object.isPerspectiveCamera) {
                                    let i = n.object.position;
                                    e.copy(i).sub(n.target);
                                    let r = e.length();
                                    I(2 * t * (r *= Math.tan(n.object.fov / 2 * Math.PI / 180)) / o.clientHeight, n.object.matrix), C(2 * a * r / o.clientHeight, n.object.matrix)
                                } else o && n.object instanceof r.OrthographicCamera && n.object.isOrthographicCamera ? (I(t * (n.object.right - n.object.left) / n.object.zoom / o.clientWidth, n.object.matrix), C(a * (n.object.top - n.object.bottom) / n.object.zoom / o.clientHeight, n.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), n.enablePan = !1)
                            }
                        })();

                    function R(e) {
                        n.object instanceof r.PerspectiveCamera && n.object.isPerspectiveCamera ? d /= e : n.object instanceof r.OrthographicCamera && n.object.isOrthographicCamera ? (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom * e)), n.object.updateProjectionMatrix(), E = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1)
                    }

                    function S(e) {
                        n.object instanceof r.PerspectiveCamera && n.object.isPerspectiveCamera ? d *= e : n.object instanceof r.OrthographicCamera && n.object.isOrthographicCamera ? (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / e)), n.object.updateProjectionMatrix(), E = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1)
                    }

                    function Y(e) {
                        g.set(e.clientX, e.clientY)
                    }

                    function x(e) {
                        P.set(e.clientX, e.clientY)
                    }

                    function z() {
                        if (1 == M.length) g.set(M[0].pageX, M[0].pageY);
                        else {
                            let e = .5 * (M[0].pageX + M[1].pageX),
                                t = .5 * (M[0].pageY + M[1].pageY);
                            g.set(e, t)
                        }
                    }

                    function H() {
                        if (1 == M.length) P.set(M[0].pageX, M[0].pageY);
                        else {
                            let e = .5 * (M[0].pageX + M[1].pageX),
                                t = .5 * (M[0].pageY + M[1].pageY);
                            P.set(e, t)
                        }
                    }

                    function _() {
                        let e = M[0].pageX - M[1].pageX,
                            t = M[0].pageY - M[1].pageY;
                        T.set(0, Math.sqrt(e * e + t * t))
                    }

                    function U(e) {
                        if (1 == M.length) f.set(e.pageX, e.pageY);
                        else {
                            let t = $(e),
                                n = .5 * (e.pageX + t.x),
                                a = .5 * (e.pageY + t.y);
                            f.set(n, a)
                        }
                        O.subVectors(f, g).multiplyScalar(n.rotateSpeed);
                        let t = n.domElement;
                        t && (N(2 * Math.PI * O.x / t.clientHeight), k(2 * Math.PI * O.y / t.clientHeight)), g.copy(f)
                    }

                    function V(e) {
                        if (1 == M.length) v.set(e.pageX, e.pageY);
                        else {
                            let t = $(e),
                                n = .5 * (e.pageX + t.x),
                                a = .5 * (e.pageY + t.y);
                            v.set(n, a)
                        }
                        y.subVectors(v, P).multiplyScalar(n.panSpeed), D(y.x, y.y), P.copy(v)
                    }

                    function Z(e) {
                        let t = $(e),
                            a = e.pageX - t.x,
                            o = e.pageY - t.y;
                        A.set(0, Math.sqrt(a * a + o * o)), w.set(0, Math.pow(A.y / T.y, n.zoomSpeed)), R(w.y), T.copy(A)
                    }

                    function X(e) {
                        var t, a;
                        !1 !== n.enabled && (0 === M.length && (null == (t = n.domElement) || t.ownerDocument.addEventListener("pointermove", F), null == (a = n.domElement) || a.ownerDocument.addEventListener("pointerup", K)), M.push(e), "touch" === e.pointerType ? function(e) {
                            switch (J(e), M.length) {
                                case 1:
                                    switch (n.touches.ONE) {
                                        case r.TOUCH.ROTATE:
                                            if (!1 === n.enableRotate) return;
                                            z(), c = s.TOUCH_ROTATE;
                                            break;
                                        case r.TOUCH.PAN:
                                            if (!1 === n.enablePan) return;
                                            H(), c = s.TOUCH_PAN;
                                            break;
                                        default:
                                            c = s.NONE
                                    }
                                    break;
                                case 2:
                                    switch (n.touches.TWO) {
                                        case r.TOUCH.DOLLY_PAN:
                                            if (!1 === n.enableZoom && !1 === n.enablePan) return;
                                            n.enableZoom && _(), n.enablePan && H(), c = s.TOUCH_DOLLY_PAN;
                                            break;
                                        case r.TOUCH.DOLLY_ROTATE:
                                            if (!1 === n.enableZoom && !1 === n.enableRotate) return;
                                            n.enableZoom && _(), n.enableRotate && z(), c = s.TOUCH_DOLLY_ROTATE;
                                            break;
                                        default:
                                            c = s.NONE
                                    }
                                    break;
                                default:
                                    c = s.NONE
                            }
                            c !== s.NONE && n.dispatchEvent(o)
                        }(e) : function(e) {
                            let t;
                            switch (e.button) {
                                case 0:
                                    t = n.mouseButtons.LEFT;
                                    break;
                                case 1:
                                    t = n.mouseButtons.MIDDLE;
                                    break;
                                case 2:
                                    t = n.mouseButtons.RIGHT;
                                    break;
                                default:
                                    t = -1
                            }
                            switch (t) {
                                case r.MOUSE.DOLLY:
                                    if (!1 === n.enableZoom) return;
                                    T.set(e.clientX, e.clientY), c = s.DOLLY;
                                    break;
                                case r.MOUSE.ROTATE:
                                    if (e.ctrlKey || e.metaKey || e.shiftKey) {
                                        if (!1 === n.enablePan) return;
                                        x(e), c = s.PAN
                                    } else {
                                        if (!1 === n.enableRotate) return;
                                        Y(e), c = s.ROTATE
                                    }
                                    break;
                                case r.MOUSE.PAN:
                                    if (e.ctrlKey || e.metaKey || e.shiftKey) {
                                        if (!1 === n.enableRotate) return;
                                        Y(e), c = s.ROTATE
                                    } else {
                                        if (!1 === n.enablePan) return;
                                        x(e), c = s.PAN
                                    }
                                    break;
                                default:
                                    c = s.NONE
                            }
                            c !== s.NONE && n.dispatchEvent(o)
                        }(e))
                    }

                    function F(e) {
                        !1 !== n.enabled && ("touch" === e.pointerType ? function(e) {
                            switch (J(e), c) {
                                case s.TOUCH_ROTATE:
                                    if (!1 === n.enableRotate) return;
                                    U(e), n.update();
                                    break;
                                case s.TOUCH_PAN:
                                    if (!1 === n.enablePan) return;
                                    V(e), n.update();
                                    break;
                                case s.TOUCH_DOLLY_PAN:
                                    if (!1 === n.enableZoom && !1 === n.enablePan) return;
                                    n.enableZoom && Z(e), n.enablePan && V(e), n.update();
                                    break;
                                case s.TOUCH_DOLLY_ROTATE:
                                    if (!1 === n.enableZoom && !1 === n.enableRotate) return;
                                    n.enableZoom && Z(e), n.enableRotate && U(e), n.update();
                                    break;
                                default:
                                    c = s.NONE
                            }
                        }(e) : function(e) {
                            if (!1 !== n.enabled) switch (c) {
                                case s.ROTATE:
                                    if (!1 === n.enableRotate) return;
                                    ! function(e) {
                                        f.set(e.clientX, e.clientY), O.subVectors(f, g).multiplyScalar(n.rotateSpeed);
                                        let t = n.domElement;
                                        t && (N(2 * Math.PI * O.x / t.clientHeight), k(2 * Math.PI * O.y / t.clientHeight)), g.copy(f), n.update()
                                    }(e);
                                    break;
                                case s.DOLLY:
                                    if (!1 === n.enableZoom) return;
                                    A.set(e.clientX, e.clientY), w.subVectors(A, T), w.y > 0 ? R(j()) : w.y < 0 && S(j()), T.copy(A), n.update();
                                    break;
                                case s.PAN:
                                    if (!1 === n.enablePan) return;
                                    v.set(e.clientX, e.clientY), y.subVectors(v, P).multiplyScalar(n.panSpeed), D(y.x, y.y), P.copy(v), n.update()
                            }
                        }(e))
                    }

                    function K(e) {
                        var t, a, o;
                        Q(e), 0 === M.length && (null == (t = n.domElement) || t.releasePointerCapture(e.pointerId), null == (a = n.domElement) || a.ownerDocument.removeEventListener("pointermove", F), null == (o = n.domElement) || o.ownerDocument.removeEventListener("pointerup", K)), n.dispatchEvent(i), c = s.NONE
                    }

                    function G(e) {
                        Q(e)
                    }

                    function B(e) {
                        !1 !== n.enabled && !1 !== n.enableZoom && (c === s.NONE || c === s.ROTATE) && (e.preventDefault(), n.dispatchEvent(o), e.deltaY < 0 ? S(j()) : e.deltaY > 0 && R(j()), n.update(), n.dispatchEvent(i))
                    }

                    function W(e) {
                        !1 !== n.enabled && !1 !== n.enablePan && function(e) {
                            let t = !1;
                            switch (e.code) {
                                case n.keys.UP:
                                    D(0, n.keyPanSpeed), t = !0;
                                    break;
                                case n.keys.BOTTOM:
                                    D(0, -n.keyPanSpeed), t = !0;
                                    break;
                                case n.keys.LEFT:
                                    D(n.keyPanSpeed, 0), t = !0;
                                    break;
                                case n.keys.RIGHT:
                                    D(-n.keyPanSpeed, 0), t = !0
                            }
                            t && (e.preventDefault(), n.update())
                        }(e)
                    }

                    function q(e) {
                        !1 !== n.enabled && e.preventDefault()
                    }

                    function Q(e) {
                        delete L[e.pointerId];
                        for (let t = 0; t < M.length; t++)
                            if (M[t].pointerId == e.pointerId) {
                                M.splice(t, 1);
                                return
                            }
                    }

                    function J(e) {
                        let t = L[e.pointerId];
                        void 0 === t && (t = new r.Vector2, L[e.pointerId] = t), t.set(e.pageX, e.pageY)
                    }

                    function $(e) {
                        let t = e.pointerId === M[0].pointerId ? M[1] : M[0];
                        return L[t.pointerId]
                    }
                    void 0 !== t && this.connect(t), this.update()
                }
            }
            let p = i.forwardRef(({
                makeDefault: e,
                camera: t,
                regress: n,
                domElement: r,
                enableDamping: s = !0,
                keyEvents: c = !1,
                onChange: l,
                onStart: m,
                onEnd: p,
                ...u
            }, d) => {
                let b = (0, o.z)(e => e.invalidate),
                    E = (0, o.z)(e => e.camera),
                    g = (0, o.z)(e => e.gl),
                    f = (0, o.z)(e => e.events),
                    O = (0, o.z)(e => e.setEvents),
                    P = (0, o.z)(e => e.set),
                    v = (0, o.z)(e => e.get),
                    y = (0, o.z)(e => e.performance),
                    T = t || E,
                    A = r || f.connected || g.domElement,
                    w = i.useMemo(() => new h(T), [T]);
                return (0, o.A)(() => {
                    w.enabled && w.update()
                }, -1), i.useEffect(() => (c && w.connect(!0 === c ? A : c), w.connect(A), () => void w.dispose()), [c, A, n, w, b]), i.useEffect(() => {
                    let e = e => {
                            b(), n && y.regress(), l && l(e)
                        },
                        t = e => {
                            m && m(e)
                        },
                        a = e => {
                            p && p(e)
                        };
                    return w.addEventListener("change", e), w.addEventListener("start", t), w.addEventListener("end", a), () => {
                        w.removeEventListener("start", t), w.removeEventListener("end", a), w.removeEventListener("change", e)
                    }
                }, [l, m, p, w, b, O]), i.useEffect(() => {
                    if (e) {
                        let e = v().controls;
                        return P({
                            controls: w
                        }), () => P({
                            controls: e
                        })
                    }
                }, [e, w]), i.createElement("primitive", (0, a.Z)({
                    ref: d,
                    object: w,
                    enableDamping: s
                }, u))
            })
        }
    }
]);