(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4348], {
        4348: function(t) {
            t.exports = (() => {
                "use strict";
                var t, e, n, r, i, a, o, s, u, c, l, h, f, p, d, m, v, g, y, b, w, T, P, R, A, E, C, _ = [, (t, e, n) => {
                        n.r(e), n.d(e, {
                            default: () => a
                        });
                        var r, i = (r = "undefined" != typeof document && document.currentScript ? document.currentScript.src : void 0, function(t) {
                            function e() {
                                function t(t) {
                                    let a = r;
                                    n = e = 0, r = new Map, a.forEach(e => {
                                        try {
                                            e(t)
                                        } catch (t) {
                                            console.error(t)
                                        }
                                    }), this.La(), i && i.fb()
                                }
                                let e = 0,
                                    n = 0,
                                    r = new Map,
                                    i = null,
                                    a = null;
                                this.requestAnimationFrame = function(i) {
                                    e || (e = requestAnimationFrame(t.bind(this)));
                                    let a = ++n;
                                    return r.set(a, i), a
                                }, this.cancelAnimationFrame = function(t) {
                                    r.delete(t), e && 0 == r.size && (cancelAnimationFrame(e), e = 0)
                                }, this.cb = function(t) {
                                    a && (document.body.remove(a), a = null), t || ((a = document.createElement("div")).style.backgroundColor = "black", a.style.position = "fixed", a.style.right = 0, a.style.top = 0, a.style.color = "white", a.style.padding = "4px", a.innerHTML = "RIVE FPS", t = function(t) {
                                        a.innerHTML = "RIVE FPS " + t.toFixed(1)
                                    }, document.body.appendChild(a)), i = new function() {
                                        let e = 0,
                                            n = 0;
                                        this.fb = function() {
                                            var r = performance.now();
                                            n ? (++e, 1e3 < (r -= n) && (t(1e3 * e / r), e = n = 0)) : (n = r, e = 0)
                                        }
                                    }
                                }, this.$a = function() {
                                    a && (document.body.remove(a), a = null), i = null
                                }, this.La = function() {}
                            }

                            function n(t) {
                                console.assert(!0);
                                let e = new Map,
                                    n = -1 / 0;
                                this.push = function(r) {
                                    return r = r + ((1 << t) - 1) >> t, e.has(r) && clearTimeout(e.get(r)), e.set(r, setTimeout(function() {
                                        e.delete(r), 0 == e.length ? n = -1 / 0 : r == n && console.assert((n = Math.max(...e.keys())) < r)
                                    }, 1e3)), (n = Math.max(r, n)) << t
                                }
                            }
                            t = t || {}, s || (s = void 0 !== t ? t : {}), s.ready = new Promise(function(t, e) {
                                u = t, c = e
                            });
                            let i = new function() {
                                function t() {
                                    if (!e) {
                                        var t = document.createElement("canvas"),
                                            n = {
                                                alpha: 1,
                                                depth: 0,
                                                stencil: 0,
                                                antialias: 0,
                                                premultipliedAlpha: 1,
                                                preserveDrawingBuffer: 0,
                                                preferLowPowerToHighPerformance: 0,
                                                failIfMajorPerformanceCaveat: 0,
                                                enableExtensionsByDefault: 1,
                                                explicitSwapControl: 1,
                                                renderViaOffscreenBackBuffer: 1
                                            };
                                        let u = t.getContext("webgl2", n);
                                        if (u) r = 2;
                                        else {
                                            if (!(u = t.getContext("webgl", n))) return console.log("No WebGL support. Image mesh will not be drawn."), !1;
                                            r = 1
                                        }

                                        function s(t, e, n) {
                                            if (e = u.createShader(e), u.shaderSource(e, n), u.compileShader(e), 0 < (n = u.getShaderInfoLog(e)).length) throw n;
                                            u.attachShader(t, e)
                                        }
                                        if (i = Math.min(u.getParameter(u.MAX_RENDERBUFFER_SIZE), u.getParameter(u.MAX_TEXTURE_SIZE)), s(t = u.createProgram(), u.VERTEX_SHADER, "attribute vec2 vertex;\n                attribute vec2 uv;\n                uniform vec4 mat;\n                uniform vec2 translate;\n                varying vec2 st;\n                void main() {\n                    st = uv;\n                    gl_Position = vec4(mat2(mat) * vertex + translate, 0, 1);\n                }"), s(t, u.FRAGMENT_SHADER, "precision highp float;\n                uniform sampler2D image;\n                varying vec2 st;\n                void main() {\n                    gl_FragColor = texture2D(image, st);\n                }"), u.bindAttribLocation(t, 0, "vertex"), u.bindAttribLocation(t, 1, "uv"), u.linkProgram(t), 0 < (n = u.getProgramInfoLog(t)).trim().length) throw n;
                                        a = u.getUniformLocation(t, "mat"), o = u.getUniformLocation(t, "translate"), u.useProgram(t), u.bindBuffer(u.ARRAY_BUFFER, u.createBuffer()), u.enableVertexAttribArray(0), u.enableVertexAttribArray(1), u.bindBuffer(u.ELEMENT_ARRAY_BUFFER, u.createBuffer()), u.uniform1i(u.getUniformLocation(t, "image"), 0), u.pixelStorei(u.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0), e = u
                                    }
                                    return !0
                                }
                                let e = null,
                                    r = 0,
                                    i = 0,
                                    a = null,
                                    o = null,
                                    s = 0,
                                    u = 0;
                                this.ob = function() {
                                    return t(), i
                                }, this.Ya = function(n) {
                                    if (!t()) return null;
                                    let i = e.createTexture();
                                    return e.bindTexture(e.TEXTURE_2D, i), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, n), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR), 2 == r ? (e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR_MIPMAP_LINEAR), e.generateMipmap(e.TEXTURE_2D)) : e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), i
                                };
                                let c = new n(8),
                                    l = new n(8),
                                    h = new n(10),
                                    f = new n(10);
                                this.bb = function(n, r, i, p, d) {
                                    if (t()) {
                                        var m = c.push(n),
                                            v = l.push(r);
                                        for (var g of ((e.canvas.width != m || e.canvas.height != v) && (e.canvas.width = m, e.canvas.height = v), e.viewport(0, v - r, n, r), e.disable(e.SCISSOR_TEST), e.clearColor(0, 0, 0, 0), e.clear(e.COLOR_BUFFER_BIT), e.enable(e.SCISSOR_TEST), i.sort((t, e) => e.Oa - t.Oa), s != (m = h.push(p)) && (e.bufferData(e.ARRAY_BUFFER, 8 * m, e.DYNAMIC_DRAW), s = m), m = 0, i)) e.bufferSubData(e.ARRAY_BUFFER, m, g.Aa), m += 4 * g.Aa.length;
                                        for (var y of (console.assert(m == 4 * p), i)) e.bufferSubData(e.ARRAY_BUFFER, m, y.Ra), m += 4 * y.Ra.length;
                                        for (var b of (console.assert(m == 8 * p), u != (m = f.push(d)) && (e.bufferData(e.ELEMENT_ARRAY_BUFFER, 2 * m, e.DYNAMIC_DRAW), u = m), g = 0, i)) e.bufferSubData(e.ELEMENT_ARRAY_BUFFER, g, b.indices), g += 2 * b.indices.length;
                                        for (let t of (console.assert(g == 2 * d), b = 0, y = !0, m = g = 0, i)) {
                                            t.image.va != b && (e.bindTexture(e.TEXTURE_2D, t.image.Va || null), b = t.image.va), t.rb ? (e.scissor(t.Ea, v - t.Fa - t.Ka, t.yb, t.Ka), y = !0) : y && (e.scissor(0, v - r, n, r), y = !1), i = 2 / n;
                                            let s = -2 / r;
                                            e.uniform4f(a, t.la[0] * i * t.ra, t.la[1] * s * t.sa, t.la[2] * i * t.ra, t.la[3] * s * t.sa), e.uniform2f(o, t.la[4] * i * t.ra + i * (t.Ea - t.pb * t.ra) - 1, t.la[5] * s * t.sa + s * (t.Fa - t.qb * t.sa) + 1), e.vertexAttribPointer(0, 2, e.FLOAT, !1, 0, m), e.vertexAttribPointer(1, 2, e.FLOAT, !1, 0, m + 4 * p), e.drawElements(e.TRIANGLES, t.indices.length, e.UNSIGNED_SHORT, g), m += 4 * t.Aa.length, g += 2 * t.indices.length
                                        }
                                        console.assert(m == 4 * p), console.assert(g == 2 * d)
                                    }
                                }, this.canvas = function() {
                                    return t() && e.canvas
                                }
                            };
                            t.onRuntimeInitialized = function() {
                                function n(t) {
                                    switch (t) {
                                        case p.srcOver:
                                            return "source-over";
                                        case p.screen:
                                            return "screen";
                                        case p.overlay:
                                            return "overlay";
                                        case p.darken:
                                            return "darken";
                                        case p.lighten:
                                            return "lighten";
                                        case p.colorDodge:
                                            return "color-dodge";
                                        case p.colorBurn:
                                            return "color-burn";
                                        case p.hardLight:
                                            return "hard-light";
                                        case p.softLight:
                                            return "soft-light";
                                        case p.difference:
                                            return "difference";
                                        case p.exclusion:
                                            return "exclusion";
                                        case p.multiply:
                                            return "multiply";
                                        case p.hue:
                                            return "hue";
                                        case p.saturation:
                                            return "saturation";
                                        case p.color:
                                            return "color";
                                        case p.luminosity:
                                            return "luminosity"
                                    }
                                }

                                function r(t) {
                                    return "rgba(" + ((16711680 & t) >>> 16) + "," + ((65280 & t) >>> 8) + "," + ((255 & t) >>> 0) + "," + ((4278190080 & t) >>> 24) / 255 + ")"
                                }

                                function a() {
                                    for (let t of (0 < R.length && (i.bb(P.drawWidth(), P.drawHeight(), R, A, E), R = [], E = A = 0, P.reset(512, 512)), T)) {
                                        for (let e of t.da) e();
                                        t.da = []
                                    }
                                    T.clear()
                                }
                                var o = t.RenderPaintStyle;
                                let u = t.RenderPath,
                                    c = t.RenderPaint,
                                    l = t.Renderer,
                                    h = t.StrokeCap,
                                    f = t.StrokeJoin,
                                    p = t.BlendMode,
                                    d = o.fill,
                                    m = o.stroke,
                                    v = t.FillRule.evenOdd,
                                    g = 1;
                                var y = t.RenderImage.extend("CanvasRenderImage", {
                                        __construct: function() {
                                            this.__parent.__construct.call(this), this.va = g, g = g + 1 & 2147483647 || 1
                                        },
                                        decode: function(t) {
                                            let e = M;
                                            e.total++;
                                            var n = this,
                                                r = new Image;
                                            r.src = URL.createObjectURL(new Blob([t], {
                                                type: "image/png"
                                            })), r.onload = function() {
                                                if (n.Ta = r, n.Va = i.Ya(r), n.size(r.width, r.height), e.loaded++, e.loaded === e.total) {
                                                    let t = e.ready;
                                                    t && (t(), e.ready = null)
                                                }
                                            }
                                        }
                                    }),
                                    b = u.extend("CanvasRenderPath", {
                                        __construct: function() {
                                            this.__parent.__construct.call(this), this.ga = new Path2D
                                        },
                                        rewind: function() {
                                            this.ga = new Path2D
                                        },
                                        addPath: function(t, e, n, r, i, a, o) {
                                            var s = this.ga,
                                                u = s.addPath;
                                            t = t.ga;
                                            let c = new DOMMatrix;
                                            c.a = e, c.b = n, c.c = r, c.d = i, c.e = a, c.f = o, u.call(s, t, c)
                                        },
                                        fillRule: function(t) {
                                            this.Ca = t
                                        },
                                        moveTo: function(t, e) {
                                            this.ga.moveTo(t, e)
                                        },
                                        lineTo: function(t, e) {
                                            this.ga.lineTo(t, e)
                                        },
                                        cubicTo: function(t, e, n, r, i, a) {
                                            this.ga.bezierCurveTo(t, e, n, r, i, a)
                                        },
                                        close: function() {
                                            this.ga.closePath()
                                        }
                                    }),
                                    w = c.extend("CanvasRenderPaint", {
                                        color: function(t) {
                                            this.Da = r(t)
                                        },
                                        thickness: function(t) {
                                            this.Wa = t
                                        },
                                        join: function(t) {
                                            switch (t) {
                                                case f.miter:
                                                    this.ua = "miter";
                                                    break;
                                                case f.round:
                                                    this.ua = "round";
                                                    break;
                                                case f.bevel:
                                                    this.ua = "bevel"
                                            }
                                        },
                                        cap: function(t) {
                                            switch (t) {
                                                case h.butt:
                                                    this.ta = "butt";
                                                    break;
                                                case h.round:
                                                    this.ta = "round";
                                                    break;
                                                case h.square:
                                                    this.ta = "square"
                                            }
                                        },
                                        style: function(t) {
                                            this.Ua = t
                                        },
                                        blendMode: function(t) {
                                            this.Sa = n(t)
                                        },
                                        linearGradient: function(t, e, n, r) {
                                            this.oa = {
                                                Pa: t,
                                                Qa: e,
                                                Ha: n,
                                                Ia: r,
                                                za: []
                                            }
                                        },
                                        radialGradient: function(t, e, n, r) {
                                            this.oa = {
                                                Pa: t,
                                                Qa: e,
                                                Ha: n,
                                                Ia: r,
                                                za: [],
                                                mb: !0
                                            }
                                        },
                                        addStop: function(t, e) {
                                            this.oa.za.push({
                                                color: t,
                                                stop: e
                                            })
                                        },
                                        completeGradient: function() {},
                                        draw: function(t, e, n) {
                                            let i = this.Ua;
                                            var a = this.Da,
                                                o = this.oa;
                                            if (t.globalCompositeOperation = this.Sa, null != o) {
                                                a = o.Pa;
                                                var s = o.Qa;
                                                let e = o.Ha;
                                                var u = o.Ia;
                                                let n = o.za;
                                                o.mb ? (o = e - a, u -= s, a = t.createRadialGradient(a, s, 0, a, s, Math.sqrt(o * o + u * u))) : a = t.createLinearGradient(a, s, e, u);
                                                for (let t = 0, e = n.length; t < e; t++) s = n[t], a.addColorStop(s.stop, r(s.color));
                                                this.Da = a, this.oa = null
                                            }
                                            switch (i) {
                                                case m:
                                                    t.strokeStyle = a, t.lineWidth = this.Wa, t.lineCap = this.ta, t.lineJoin = this.ua, t.stroke(e);
                                                    break;
                                                case d:
                                                    t.fillStyle = a, t.fill(e, n)
                                            }
                                        }
                                    });
                                let T = new Set,
                                    P = null,
                                    R = [],
                                    A = 0,
                                    E = 0;
                                var C = t.CanvasRenderer = l.extend("Renderer", {
                                    __construct: function(t) {
                                        this.__parent.__construct.call(this), this.fa = [1, 0, 0, 1, 0, 0], this.Z = t.getContext("2d"), this.Ba = t, this.da = []
                                    },
                                    save: function() {
                                        this.fa.push(...this.fa.slice(this.fa.length - 6)), this.da.push(this.Z.save.bind(this.Z))
                                    },
                                    restore: function() {
                                        let t = this.fa.length - 6;
                                        if (6 > t) throw "restore() called without matching save().";
                                        this.fa.splice(t), this.da.push(this.Z.restore.bind(this.Z))
                                    },
                                    transform: function(t, e, n, r, i, a) {
                                        let o = this.fa,
                                            s = o.length - 6;
                                        o.splice(s, 6, o[s] * t + o[s + 2] * e, o[s + 1] * t + o[s + 3] * e, o[s] * n + o[s + 2] * r, o[s + 1] * n + o[s + 3] * r, o[s] * i + o[s + 2] * a + o[s + 4], o[s + 1] * i + o[s + 3] * a + o[s + 5]), this.da.push(this.Z.transform.bind(this.Z, t, e, n, r, i, a))
                                    },
                                    rotate: function(t) {
                                        let e = Math.sin(t);
                                        t = Math.cos(t), this.transform(t, e, -e, t, 0, 0)
                                    },
                                    _drawPath: function(t, e) {
                                        this.da.push(e.draw.bind(e, this.Z, t.ga, t.Ca === v ? "evenodd" : "nonzero"))
                                    },
                                    _drawImage: function(t, e, r) {
                                        var i = t.Ta;
                                        if (i) {
                                            var a = this.Z,
                                                o = n(e);
                                            this.da.push(function() {
                                                a.globalCompositeOperation = o, a.globalAlpha = r, a.drawImage(i, 0, 0), a.globalAlpha = 1
                                            })
                                        }
                                    },
                                    _getMatrix: function(t) {
                                        let e = this.fa,
                                            n = e.length - 6;
                                        for (let r = 0; 6 > r; ++r) t[r] = e[n + r]
                                    },
                                    _drawImageMesh: function(t, e, r, o, u, c, l, h, f, p) {
                                        var d = this.Z.canvas.width,
                                            m = this.Z.canvas.height;
                                        let v = f - l,
                                            g = p - h;
                                        l = Math.max(l, 0), h = Math.max(h, 0), f = Math.min(f, d), p = Math.min(p, m);
                                        let y = f - l,
                                            b = p - h;
                                        if (console.assert(y <= Math.min(v, d)), console.assert(b <= Math.min(g, m)), !(0 >= y || 0 >= b)) {
                                            f = y < v || b < g, d = p = 1;
                                            var w = Math.ceil(y * p),
                                                C = Math.ceil(b * d);
                                            w > (m = i.ob()) && (p *= m / w, w = m), C > m && (d *= m / C, C = m), P || (P = new s.DynamicRectanizer(m)).reset(512, 512), 0 > (m = P.addRect(w, C)) && (a(), T.add(this), console.assert(0 <= (m = P.addRect(w, C))));
                                            var _ = 65535 & m,
                                                M = m >> 16;
                                            R.push({
                                                la: this.fa.slice(this.fa.length - 6),
                                                image: t,
                                                Ea: _,
                                                Fa: M,
                                                pb: l,
                                                qb: h,
                                                yb: w,
                                                Ka: C,
                                                ra: p,
                                                sa: d,
                                                Aa: new Float32Array(o),
                                                Ra: new Float32Array(u),
                                                indices: new Uint16Array(c),
                                                rb: f,
                                                Oa: t.va << 1 | (f ? 1 : 0)
                                            }), A += o.length, E += c.length;
                                            var U = this.Z,
                                                L = n(e);
                                            this.da.push(function() {
                                                U.save(), U.resetTransform(), U.globalCompositeOperation = L, U.globalAlpha = r, U.drawImage(i.canvas(), _, M, w, C, l, h, y, b), U.restore()
                                            })
                                        }
                                    },
                                    _clipPath: function(t) {
                                        this.da.push(this.Z.clip.bind(this.Z, t.ga, t.Ca === v ? "evenodd" : "nonzero"))
                                    },
                                    clear: function() {
                                        T.add(this), this.da.push(this.Z.clearRect.bind(this.Z, 0, 0, this.Ba.width, this.Ba.height))
                                    },
                                    flush: function() {},
                                    translate: function(t, e) {
                                        this.transform(1, 0, 0, 1, t, e)
                                    }
                                });
                                t.makeRenderer = function(t) {
                                    return new C(t)
                                }, t.renderFactory = {
                                    makeRenderPaint: function() {
                                        return new w
                                    },
                                    makeRenderPath: function() {
                                        return new b
                                    },
                                    makeRenderImage: function() {
                                        return new y
                                    }
                                };
                                let _ = t.load,
                                    M = null;
                                t.load = function(t) {
                                    return new Promise(function(e) {
                                        let n = null;
                                        M = {
                                            total: 0,
                                            loaded: 0,
                                            ready: function() {
                                                e(n)
                                            }
                                        }, n = _(t), 0 == M.total && e(n)
                                    })
                                }, o = new e, t.requestAnimationFrame = o.requestAnimationFrame.bind(o), t.cancelAnimationFrame = o.cancelAnimationFrame.bind(o), t.enableFPSCounter = o.cb.bind(o), t.disableFPSCounter = o.$a, o.La = a, t.cleanup = function() {
                                    P && P.delete()
                                }
                            };
                            var a, o, s, u, c, l, h, f = Object.assign({}, s),
                                p = "object" == typeof window,
                                d = "function" == typeof importScripts,
                                m = "";
                            (p || d) && (d ? m = self.location.href : "undefined" != typeof document && document.currentScript && (m = document.currentScript.src), r && (m = r), m = 0 !== m.indexOf("blob:") ? m.substr(0, m.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "", d && (h = t => {
                                var e = new XMLHttpRequest;
                                return e.open("GET", t, !1), e.responseType = "arraybuffer", e.send(null), new Uint8Array(e.response)
                            }), l = (t, e, n) => {
                                var r = new XMLHttpRequest;
                                r.open("GET", t, !0), r.responseType = "arraybuffer", r.onload = () => {
                                    200 == r.status || 0 == r.status && r.response ? e(r.response) : n()
                                }, r.onerror = n, r.send(null)
                            });
                            var v = s.print || console.log.bind(console),
                                g = s.printErr || console.warn.bind(console);
                            Object.assign(s, f), f = null, s.wasmBinary && (y = s.wasmBinary), s.noExitRuntime, "object" != typeof WebAssembly && D("no native wasm support detected");
                            var y, b, w = !1,
                                T = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;

                            function P(t, e, n) {
                                var r = e + n;
                                for (n = e; t[n] && !(n >= r);) ++n;
                                if (16 < n - e && t.buffer && T) return T.decode(t.subarray(e, n));
                                for (r = ""; e < n;) {
                                    var i = t[e++];
                                    if (128 & i) {
                                        var a = 63 & t[e++];
                                        if (192 == (224 & i)) r += String.fromCharCode((31 & i) << 6 | a);
                                        else {
                                            var o = 63 & t[e++];
                                            65536 > (i = 224 == (240 & i) ? (15 & i) << 12 | a << 6 | o : (7 & i) << 18 | a << 12 | o << 6 | 63 & t[e++]) ? r += String.fromCharCode(i) : (i -= 65536, r += String.fromCharCode(55296 | i >> 10, 56320 | 1023 & i))
                                        }
                                    } else r += String.fromCharCode(i)
                                }
                                return r
                            }

                            function R() {
                                var t = b.buffer;
                                A = t, s.HEAP8 = E = new Int8Array(t), s.HEAP16 = _ = new Int16Array(t), s.HEAP32 = U = new Int32Array(t), s.HEAPU8 = C = new Uint8Array(t), s.HEAPU16 = M = new Uint16Array(t), s.HEAPU32 = L = new Uint32Array(t), s.HEAPF32 = S = new Float32Array(t), s.HEAPF64 = I = new Float64Array(t)
                            }
                            var A, E, C, _, M, U, L, S, I, x, F = [],
                                O = [],
                                k = [],
                                W = 0,
                                j = null,
                                X = null;

                            function D(t) {
                                throw s.onAbort && s.onAbort(t), g(t = "Aborted(" + t + ")"), w = !0, c(t = new WebAssembly.RuntimeError(t + ". Build with -sASSERTIONS for more info.")), t
                            }

                            function B() {
                                return a.startsWith("data:application/octet-stream;base64,")
                            }
                            if (a = "canvas_advanced.wasm", !B()) {
                                var V = a;
                                a = s.locateFile ? s.locateFile(V, m) : m + V
                            }

                            function Y() {
                                var t = a;
                                try {
                                    if (t == a && y) return new Uint8Array(y);
                                    if (h) return h(t);
                                    throw "both async and sync fetching of the wasm failed"
                                } catch (t) {
                                    D(t)
                                }
                            }

                            function N(t) {
                                for (; 0 < t.length;) t.shift()(s)
                            }

                            function q(t) {
                                if (void 0 === t) return "_unknown";
                                var e = (t = t.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
                                return 48 <= e && 57 >= e ? "_" + t : t
                            }

                            function z(t, e) {
                                return t = q(t),
                                    function() {
                                        return e.apply(this, arguments)
                                    }
                            }
                            var H = [{}, {
                                    value: void 0
                                }, {
                                    value: null
                                }, {
                                    value: !0
                                }, {
                                    value: !1
                                }],
                                G = [];

                            function Z(t) {
                                var e = Error,
                                    n = z(t, function(e) {
                                        this.name = t, this.message = e, void 0 !== (e = Error(e).stack) && (this.stack = this.toString() + "\n" + e.replace(/^Error(:[^\n]*)?\n/, ""))
                                    });
                                return n.prototype = Object.create(e.prototype), n.prototype.constructor = n, n.prototype.toString = function() {
                                    return void 0 === this.message ? this.name : this.name + ": " + this.message
                                }, n
                            }
                            var $ = void 0;

                            function Q(t) {
                                throw new $(t)
                            }
                            var J = t => (t || Q("Cannot use deleted val. handle = " + t), H[t].value),
                                K = t => {
                                    switch (t) {
                                        case void 0:
                                            return 1;
                                        case null:
                                            return 2;
                                        case !0:
                                            return 3;
                                        case !1:
                                            return 4;
                                        default:
                                            var e = G.length ? G.pop() : H.length;
                                            return H[e] = {
                                                ya: 1,
                                                value: t
                                            }, e
                                    }
                                },
                                tt = void 0,
                                te = void 0;

                            function tn(t) {
                                for (var e = ""; C[t];) e += te[C[t++]];
                                return e
                            }
                            var tr = [];

                            function ti() {
                                for (; tr.length;) {
                                    var t = tr.pop();
                                    t.U.ka = !1, t.delete()
                                }
                            }
                            var ta = void 0,
                                to = {};

                            function ts(t, e) {
                                for (void 0 === e && Q("ptr should not be undefined"); t.$;) e = t.na(e), t = t.$;
                                return e
                            }
                            var tu = {};

                            function tc(t) {
                                var e = tn(t = t9(t));
                                return t8(t), e
                            }

                            function tl(t, e) {
                                var n = tu[t];
                                return void 0 === n && Q(e + " has unknown type " + tc(t)), n
                            }

                            function th() {}
                            var tf = !1;

                            function tp(t) {
                                --t.count.value, 0 === t.count.value && (t.aa ? t.ca.ha(t.aa) : t.X.V.ha(t.W))
                            }
                            var td = {},
                                tm = void 0;

                            function tv(t) {
                                throw new tm(t)
                            }

                            function tg(t, e) {
                                return e.X && e.W || tv("makeClassHandle requires ptr and ptrType"), !!e.ca != !!e.aa && tv("Both smartPtrType and smartPtr must be specified"), e.count = {
                                    value: 1
                                }, ty(Object.create(t, {
                                    U: {
                                        value: e
                                    }
                                }))
                            }

                            function ty(t) {
                                return "undefined" == typeof FinalizationRegistry ? (ty = t => t, t) : (tf = new FinalizationRegistry(t => {
                                    tp(t.U)
                                }), ty = t => {
                                    var e = t.U;
                                    return e.aa && tf.register(t, {
                                        U: e
                                    }, t), t
                                }, th = t => {
                                    tf.unregister(t)
                                }, ty(t))
                            }
                            var tb = {};

                            function tw(t) {
                                for (; t.length;) {
                                    var e = t.pop();
                                    t.pop()(e)
                                }
                            }

                            function tT(t) {
                                return this.fromWireType(U[t >> 2])
                            }
                            var tP = {},
                                tR = {};

                            function tA(t, e, n) {
                                function r(e) {
                                    (e = n(e)).length !== t.length && tv("Mismatched type converter count");
                                    for (var r = 0; r < t.length; ++r) tC(t[r], e[r])
                                }
                                t.forEach(function(t) {
                                    tR[t] = e
                                });
                                var i = Array(e.length),
                                    a = [],
                                    o = 0;
                                e.forEach((t, e) => {
                                    tu.hasOwnProperty(t) ? i[e] = tu[t] : (a.push(t), tP.hasOwnProperty(t) || (tP[t] = []), tP[t].push(() => {
                                        i[e] = tu[t], ++o === a.length && r(i)
                                    }))
                                }), 0 === a.length && r(i)
                            }

                            function tE(t) {
                                switch (t) {
                                    case 1:
                                        return 0;
                                    case 2:
                                        return 1;
                                    case 4:
                                        return 2;
                                    case 8:
                                        return 3;
                                    default:
                                        throw TypeError("Unknown type size: " + t)
                                }
                            }

                            function tC(t, e, n = {}) {
                                if (!("argPackAdvance" in e)) throw TypeError("registerType registeredInstance requires argPackAdvance");
                                var r = e.name;
                                if (t || Q('type "' + r + '" must have a positive integer typeid pointer'), tu.hasOwnProperty(t)) {
                                    if (n.lb) return;
                                    Q("Cannot register type '" + r + "' twice")
                                }
                                tu[t] = e, delete tR[t], tP.hasOwnProperty(t) && (e = tP[t], delete tP[t], e.forEach(t => t()))
                            }

                            function t_(t) {
                                Q(t.U.X.V.name + " instance already deleted")
                            }

                            function tM() {}

                            function tU(t, e, n) {
                                if (void 0 === t[e].Y) {
                                    var r = t[e];
                                    t[e] = function() {
                                        return t[e].Y.hasOwnProperty(arguments.length) || Q("Function '" + n + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + t[e].Y + ")!"), t[e].Y[arguments.length].apply(this, arguments)
                                    }, t[e].Y = [], t[e].Y[r.ja] = r
                                }
                            }

                            function tL(t, e, n) {
                                s.hasOwnProperty(t) ? ((void 0 === n || void 0 !== s[t].Y && void 0 !== s[t].Y[n]) && Q("Cannot register public name '" + t + "' twice"), tU(s, t, t), s.hasOwnProperty(n) && Q("Cannot register multiple overloads of a function with the same number of arguments (" + n + ")!"), s[t].Y[n] = e) : (s[t] = e, void 0 !== n && (s[t].zb = n))
                            }

                            function tS(t, e, n, r, i, a, o, s) {
                                this.name = t, this.constructor = e, this.ea = n, this.ha = r, this.$ = i, this.gb = a, this.na = o, this.ab = s, this.Ma = []
                            }

                            function tI(t, e, n) {
                                for (; e !== n;) e.na || Q("Expected null or instance of " + n.name + ", got an instance of " + e.name), t = e.na(t), e = e.$;
                                return t
                            }

                            function tx(t, e) {
                                return null === e ? (this.wa && Q("null is not a valid " + this.name), 0) : (e.U || Q('Cannot pass "' + tq(e) + '" as a ' + this.name), e.U.W || Q("Cannot pass deleted object as a pointer of type " + this.name), tI(e.U.W, e.U.X.V, this.V))
                            }

                            function tF(t, e) {
                                if (null === e) {
                                    if (this.wa && Q("null is not a valid " + this.name), this.qa) {
                                        var n = this.xa();
                                        return null !== t && t.push(this.ha, n), n
                                    }
                                    return 0
                                }
                                if (e.U || Q('Cannot pass "' + tq(e) + '" as a ' + this.name), e.U.W || Q("Cannot pass deleted object as a pointer of type " + this.name), !this.pa && e.U.X.pa && Q("Cannot convert argument of type " + (e.U.ca ? e.U.ca.name : e.U.X.name) + " to parameter type " + this.name), n = tI(e.U.W, e.U.X.V, this.V), this.qa) switch (void 0 === e.U.aa && Q("Passing raw pointer to smart pointer is illegal"), this.xb) {
                                    case 0:
                                        e.U.ca === this ? n = e.U.aa : Q("Cannot convert argument of type " + (e.U.ca ? e.U.ca.name : e.U.X.name) + " to parameter type " + this.name);
                                        break;
                                    case 1:
                                        n = e.U.aa;
                                        break;
                                    case 2:
                                        if (e.U.ca === this) n = e.U.aa;
                                        else {
                                            var r = e.clone();
                                            n = this.tb(n, K(function() {
                                                r.delete()
                                            })), null !== t && t.push(this.ha, n)
                                        }
                                        break;
                                    default:
                                        Q("Unsupporting sharing policy")
                                }
                                return n
                            }

                            function tO(t, e) {
                                return null === e ? (this.wa && Q("null is not a valid " + this.name), 0) : (e.U || Q('Cannot pass "' + tq(e) + '" as a ' + this.name), e.U.W || Q("Cannot pass deleted object as a pointer of type " + this.name), e.U.X.pa && Q("Cannot convert argument of type " + e.U.X.name + " to parameter type " + this.name), tI(e.U.W, e.U.X.V, this.V))
                            }

                            function tk(t, e, n, r) {
                                this.name = t, this.V = e, this.wa = n, this.pa = r, this.qa = !1, this.ha = this.tb = this.xa = this.Na = this.xb = this.sb = void 0, void 0 !== e.$ ? this.toWireType = tF : (this.toWireType = r ? tx : tO, this.ba = null)
                            }

                            function tW(t, e, n) {
                                s.hasOwnProperty(t) || tv("Replacing nonexistant public symbol"), void 0 !== s[t].Y && void 0 !== n ? s[t].Y[n] = e : (s[t] = e, s[t].ja = n)
                            }

                            function tj(t, e) {
                                var n, r, i = (t = tn(t)).includes("j") ? (n = t, r = [], function() {
                                    if (r.length = 0, Object.assign(r, arguments), n.includes("j")) {
                                        var t = s["dynCall_" + n];
                                        t = r && r.length ? t.apply(null, [e].concat(r)) : t.call(null, e)
                                    } else t = x.get(e).apply(null, r);
                                    return t
                                }) : x.get(e);
                                return "function" != typeof i && Q("unknown function pointer with signature " + t + ": " + e), i
                            }
                            var tX = void 0;

                            function tD(t, e) {
                                var n = [],
                                    r = {};
                                throw e.forEach(function t(e) {
                                    r[e] || tu[e] || (tR[e] ? tR[e].forEach(t) : (n.push(e), r[e] = !0))
                                }), new tX(t + ": " + n.map(tc).join([", "]))
                            }

                            function tB(t, e, n, r, i) {
                                var a = e.length;
                                2 > a && Q("argTypes array size mismatch! Must at least get return value and 'this' types!");
                                var o = null !== e[1] && null !== n,
                                    s = !1;
                                for (n = 1; n < e.length; ++n)
                                    if (null !== e[n] && void 0 === e[n].ba) {
                                        s = !0;
                                        break
                                    }
                                var u = "void" !== e[0].name,
                                    c = a - 2,
                                    l = Array(c),
                                    h = [],
                                    f = [];
                                return function() {
                                    if (arguments.length !== c && Q("function " + t + " called with " + arguments.length + " arguments, expected " + c + " args!"), f.length = 0, h.length = o ? 2 : 1, h[0] = i, o) {
                                        var n = e[1].toWireType(f, this);
                                        h[1] = n
                                    }
                                    for (var a = 0; a < c; ++a) l[a] = e[a + 2].toWireType(f, arguments[a]), h.push(l[a]);
                                    if (a = r.apply(null, h), s) tw(f);
                                    else
                                        for (var p = o ? 1 : 2; p < e.length; p++) {
                                            var d = 1 === p ? n : l[p - 2];
                                            null !== e[p].ba && e[p].ba(d)
                                        }
                                    return u ? e[0].fromWireType(a) : void 0
                                }
                            }

                            function tV(t, e) {
                                for (var n = [], r = 0; r < t; r++) n.push(L[e + 4 * r >> 2]);
                                return n
                            }

                            function tY(t, e, n) {
                                return t instanceof Object || Q(n + ' with invalid "this": ' + t), t instanceof e.V.constructor || Q(n + ' incompatible with "this" of type ' + t.constructor.name), t.U.W || Q("cannot call emscripten binding method " + n + " on deleted object"), tI(t.U.W, t.U.X.V, e.V)
                            }

                            function tN(t) {
                                4 < t && 0 == --H[t].ya && (H[t] = void 0, G.push(t))
                            }

                            function tq(t) {
                                if (null === t) return "null";
                                var e = typeof t;
                                return "object" === e || "array" === e || "function" === e ? t.toString() : "" + t
                            }
                            var tz = "undefined" != typeof TextDecoder ? new TextDecoder("utf-16le") : void 0;

                            function tH(t, e) {
                                for (var n = t >> 1, r = n + e / 2; !(n >= r) && M[n];) ++n;
                                if (32 < (n <<= 1) - t && tz) return tz.decode(C.subarray(t, n));
                                for (r = 0, n = ""; !(r >= e / 2); ++r) {
                                    var i = _[t + 2 * r >> 1];
                                    if (0 == i) break;
                                    n += String.fromCharCode(i)
                                }
                                return n
                            }

                            function tG(t, e, n) {
                                if (void 0 === n && (n = 2147483647), 2 > n) return 0;
                                n -= 2;
                                var r = e;
                                n = n < 2 * t.length ? n / 2 : t.length;
                                for (var i = 0; i < n; ++i) _[e >> 1] = t.charCodeAt(i), e += 2;
                                return _[e >> 1] = 0, e - r
                            }

                            function tZ(t) {
                                return 2 * t.length
                            }

                            function t$(t, e) {
                                for (var n = 0, r = ""; !(n >= e / 4);) {
                                    var i = U[t + 4 * n >> 2];
                                    if (0 == i) break;
                                    ++n, 65536 <= i ? (i -= 65536, r += String.fromCharCode(55296 | i >> 10, 56320 | 1023 & i)) : r += String.fromCharCode(i)
                                }
                                return r
                            }

                            function tQ(t, e, n) {
                                if (void 0 === n && (n = 2147483647), 4 > n) return 0;
                                var r = e;
                                n = r + n - 4;
                                for (var i = 0; i < t.length; ++i) {
                                    var a = t.charCodeAt(i);
                                    if (55296 <= a && 57343 >= a && (a = 65536 + ((1023 & a) << 10) | 1023 & t.charCodeAt(++i)), U[e >> 2] = a, (e += 4) + 4 > n) break
                                }
                                return U[e >> 2] = 0, e - r
                            }

                            function tJ(t) {
                                for (var e = 0, n = 0; n < t.length; ++n) {
                                    var r = t.charCodeAt(n);
                                    55296 <= r && 57343 >= r && ++n, e += 4
                                }
                                return e
                            }
                            var tK = {};

                            function t0(t) {
                                var e = tK[t];
                                return void 0 === e ? tn(t) : e
                            }
                            var t1 = [],
                                t2 = [],
                                t4 = [null, [],
                                    []
                                ];
                            $ = s.BindingError = Z("BindingError"), s.count_emval_handles = function() {
                                for (var t = 0, e = 5; e < H.length; ++e) void 0 !== H[e] && ++t;
                                return t
                            }, s.get_first_emval = function() {
                                for (var t = 5; t < H.length; ++t)
                                    if (void 0 !== H[t]) return H[t];
                                return null
                            }, tt = s.PureVirtualError = Z("PureVirtualError");
                            for (var t6 = Array(256), t3 = 0; 256 > t3; ++t3) t6[t3] = String.fromCharCode(t3);
                            te = t6, s.getInheritedInstanceCount = function() {
                                return Object.keys(to).length
                            }, s.getLiveInheritedInstances = function() {
                                var t, e = [];
                                for (t in to) to.hasOwnProperty(t) && e.push(to[t]);
                                return e
                            }, s.flushPendingDeletes = ti, s.setDelayFunction = function(t) {
                                ta = t, tr.length && ta && ta(ti)
                            }, tm = s.InternalError = Z("InternalError"), tM.prototype.isAliasOf = function(t) {
                                if (!(this instanceof tM && t instanceof tM)) return !1;
                                var e = this.U.X.V,
                                    n = this.U.W,
                                    r = t.U.X.V;
                                for (t = t.U.W; e.$;) n = e.na(n), e = e.$;
                                for (; r.$;) t = r.na(t), r = r.$;
                                return e === r && n === t
                            }, tM.prototype.clone = function() {
                                if (this.U.W || t_(this), this.U.ma) return this.U.count.value += 1, this;
                                var t = ty,
                                    e = Object,
                                    n = e.create,
                                    r = Object.getPrototypeOf(this),
                                    i = this.U;
                                return t = t(n.call(e, r, {
                                    U: {
                                        value: {
                                            count: i.count,
                                            ka: i.ka,
                                            ma: i.ma,
                                            W: i.W,
                                            X: i.X,
                                            aa: i.aa,
                                            ca: i.ca
                                        }
                                    }
                                })), t.U.count.value += 1, t.U.ka = !1, t
                            }, tM.prototype.delete = function() {
                                this.U.W || t_(this), this.U.ka && !this.U.ma && Q("Object already scheduled for deletion"), th(this), tp(this.U), this.U.ma || (this.U.aa = void 0, this.U.W = void 0)
                            }, tM.prototype.isDeleted = function() {
                                return !this.U.W
                            }, tM.prototype.deleteLater = function() {
                                return this.U.W || t_(this), this.U.ka && !this.U.ma && Q("Object already scheduled for deletion"), tr.push(this), 1 === tr.length && ta && ta(ti), this.U.ka = !0, this
                            }, tk.prototype.hb = function(t) {
                                return this.Na && (t = this.Na(t)), t
                            }, tk.prototype.Ga = function(t) {
                                this.ha && this.ha(t)
                            }, tk.prototype.argPackAdvance = 8, tk.prototype.readValueFromPointer = tT, tk.prototype.deleteObject = function(t) {
                                null !== t && t.delete()
                            }, tk.prototype.fromWireType = function(t) {
                                function e() {
                                    return this.qa ? tg(this.V.ea, {
                                        X: this.sb,
                                        W: n,
                                        ca: this,
                                        aa: t
                                    }) : tg(this.V.ea, {
                                        X: this,
                                        W: t
                                    })
                                }
                                var n = this.hb(t);
                                if (!n) return this.Ga(t), null;
                                var r = to[ts(this.V, n)];
                                if (void 0 !== r) return 0 === r.U.count.value ? (r.U.W = n, r.U.aa = t, r.clone()) : (r = r.clone(), this.Ga(t), r);
                                if (!(r = td[r = this.V.gb(n)])) return e.call(this);
                                r = this.pa ? r.Xa : r.pointerType;
                                var i = function t(e, n, r) {
                                    return n === r ? e : void 0 === r.$ ? null : null === (e = t(e, n, r.$)) ? null : r.ab(e)
                                }(n, this.V, r.V);
                                return null === i ? e.call(this) : this.qa ? tg(r.V.ea, {
                                    X: r,
                                    W: i,
                                    ca: this,
                                    aa: t
                                }) : tg(r.V.ea, {
                                    X: r,
                                    W: i
                                })
                            }, tX = s.UnboundTypeError = Z("UnboundTypeError");
                            var t5 = {
                                G: function(t, e, n) {
                                    t = tn(t), e = tl(e, "wrapper"), n = J(n);
                                    var r = [].slice,
                                        i = e.V,
                                        a = i.ea,
                                        o = i.$.ea,
                                        s = i.$.constructor;
                                    for (var u in t = z(t, function() {
                                            i.$.Ma.forEach((function(t) {
                                                if (this[t] === o[t]) throw new tt("Pure virtual function " + t + " must be implemented in JavaScript")
                                            }).bind(this)), Object.defineProperty(this, "__parent", {
                                                value: a
                                            }), this.__construct.apply(this, r.call(arguments))
                                        }), a.__construct = function() {
                                            this === a && Q("Pass correct 'this' to __construct");
                                            var t = s.implement.apply(void 0, [this].concat(r.call(arguments)));
                                            th(t);
                                            var e = t.U;
                                            t.notifyOnDestruction(), e.ma = !0, Object.defineProperties(this, {
                                                U: {
                                                    value: e
                                                }
                                            }), ty(this), t = ts(i, t = e.W), to.hasOwnProperty(t) ? Q("Tried to register registered instance: " + t) : to[t] = this
                                        }, a.__destruct = function() {
                                            this === a && Q("Pass correct 'this' to __destruct"), th(this);
                                            var t = this.U.W;
                                            t = ts(i, t), to.hasOwnProperty(t) ? delete to[t] : Q("Tried to unregister unregistered instance: " + t)
                                        }, t.prototype = Object.create(a), n) t.prototype[u] = n[u];
                                    return K(t)
                                },
                                J: function(t) {
                                    var e = tb[t];
                                    delete tb[t];
                                    var n = e.xa,
                                        r = e.ha,
                                        i = e.Ja;
                                    tA([t], i.map(t => t.kb).concat(i.map(t => t.vb)), t => {
                                        var a = {};
                                        return i.forEach((e, n) => {
                                            var r = t[n],
                                                o = e.ib,
                                                s = e.jb,
                                                u = t[n + i.length],
                                                c = e.ub,
                                                l = e.wb;
                                            a[e.eb] = {
                                                read: t => r.fromWireType(o(s, t)),
                                                write: (t, e) => {
                                                    var n = [];
                                                    c(l, t, u.toWireType(n, e)), tw(n)
                                                }
                                            }
                                        }), [{
                                            name: e.name,
                                            fromWireType: function(t) {
                                                var e, n = {};
                                                for (e in a) n[e] = a[e].read(t);
                                                return r(t), n
                                            },
                                            toWireType: function(t, e) {
                                                for (var i in a)
                                                    if (!(i in e)) throw TypeError('Missing field:  "' + i + '"');
                                                var o = n();
                                                for (i in a) a[i].write(o, e[i]);
                                                return null !== t && t.push(r, o), o
                                            },
                                            argPackAdvance: 8,
                                            readValueFromPointer: tT,
                                            ba: r
                                        }]
                                    })
                                },
                                z: function() {},
                                E: function(t, e, n, r, i) {
                                    var a = tE(n);
                                    tC(t, {
                                        name: e = tn(e),
                                        fromWireType: function(t) {
                                            return !!t
                                        },
                                        toWireType: function(t, e) {
                                            return e ? r : i
                                        },
                                        argPackAdvance: 8,
                                        readValueFromPointer: function(t) {
                                            if (1 === n) var r = E;
                                            else if (2 === n) r = _;
                                            else if (4 === n) r = U;
                                            else throw TypeError("Unknown boolean type size: " + e);
                                            return this.fromWireType(r[t >> a])
                                        },
                                        ba: null
                                    })
                                },
                                e: function(t, e, n, r, i, a, o, s, u, c, l, h, f) {
                                    l = tn(l), a = tj(i, a), s && (s = tj(o, s)), c && (c = tj(u, c)), f = tj(h, f);
                                    var p = q(l);
                                    tL(p, function() {
                                        tD("Cannot construct " + l + " due to unbound types", [r])
                                    }), tA([t, e, n], r ? [r] : [], function(e) {
                                        if (e = e[0], r) var n = e.V,
                                            i = n.ea;
                                        else i = tM.prototype;
                                        e = z(p, function() {
                                            if (Object.getPrototypeOf(this) !== o) throw new $("Use 'new' to construct " + l);
                                            if (void 0 === u.ia) throw new $(l + " has no accessible constructor");
                                            var t = u.ia[arguments.length];
                                            if (void 0 === t) throw new $("Tried to invoke ctor of " + l + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(u.ia).toString() + ") parameters instead!");
                                            return t.apply(this, arguments)
                                        });
                                        var o = Object.create(i, {
                                            constructor: {
                                                value: e
                                            }
                                        });
                                        e.prototype = o;
                                        var u = new tS(l, e, o, f, n, a, s, c);
                                        n = new tk(l, u, !0, !1), i = new tk(l + "*", u, !1, !1);
                                        var h = new tk(l + " const*", u, !1, !0);
                                        return td[t] = {
                                            pointerType: i,
                                            Xa: h
                                        }, tW(p, e), [n, i, h]
                                    })
                                },
                                k: function(t, e, n, r, i, a, o) {
                                    var s = tV(n, r);
                                    e = tn(e), a = tj(i, a), tA([], [t], function(t) {
                                        function r() {
                                            tD("Cannot call " + i + " due to unbound types", s)
                                        }
                                        var i = (t = t[0]).name + "." + e;
                                        e.startsWith("@@") && (e = Symbol[e.substring(2)]);
                                        var u = t.V.constructor;
                                        return void 0 === u[e] ? (r.ja = n - 1, u[e] = r) : (tU(u, e, i), u[e].Y[n - 1] = r), tA([], s, function(t) {
                                            return t = tB(i, [t[0], null].concat(t.slice(1)), null, a, o), void 0 === u[e].Y ? (t.ja = n - 1, u[e] = t) : u[e].Y[n - 1] = t, []
                                        }), []
                                    })
                                },
                                s: function(t, e, n, r, i, a, o, s) {
                                    e = tn(e), a = tj(i, a), tA([], [t], function(t) {
                                        var i = (t = t[0]).name + "." + e,
                                            u = {
                                                get: function() {
                                                    tD("Cannot access " + i + " due to unbound types", [n])
                                                },
                                                enumerable: !0,
                                                configurable: !0
                                            };
                                        return u.set = s ? () => {
                                            tD("Cannot access " + i + " due to unbound types", [n])
                                        } : () => {
                                            Q(i + " is a read-only property")
                                        }, Object.defineProperty(t.V.constructor, e, u), tA([], [n], function(n) {
                                            n = n[0];
                                            var i = {
                                                get: function() {
                                                    return n.fromWireType(a(r))
                                                },
                                                enumerable: !0
                                            };
                                            return s && (s = tj(o, s), i.set = t => {
                                                var e = [];
                                                s(r, n.toWireType(e, t)), tw(e)
                                            }), Object.defineProperty(t.V.constructor, e, i), []
                                        }), []
                                    })
                                },
                                o: function(t, e, n, r, i, a) {
                                    0 < e || D();
                                    var o = tV(e, n);
                                    i = tj(r, i), tA([], [t], function(t) {
                                        var n = "constructor " + (t = t[0]).name;
                                        if (void 0 === t.V.ia && (t.V.ia = []), void 0 !== t.V.ia[e - 1]) throw new $("Cannot register multiple constructors with identical number of parameters (" + (e - 1) + ") for class '" + t.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
                                        return t.V.ia[e - 1] = () => {
                                            tD("Cannot construct " + t.name + " due to unbound types", o)
                                        }, tA([], o, function(r) {
                                            return r.splice(1, 0, null), t.V.ia[e - 1] = tB(n, r, null, i, a), []
                                        }), []
                                    })
                                },
                                a: function(t, e, n, r, i, a, o, s) {
                                    var u = tV(n, r);
                                    e = tn(e), a = tj(i, a), tA([], [t], function(t) {
                                        function r() {
                                            tD("Cannot call " + i + " due to unbound types", u)
                                        }
                                        var i = (t = t[0]).name + "." + e;
                                        e.startsWith("@@") && (e = Symbol[e.substring(2)]), s && t.V.Ma.push(e);
                                        var c = t.V.ea,
                                            l = c[e];
                                        return void 0 === l || void 0 === l.Y && l.className !== t.name && l.ja === n - 2 ? (r.ja = n - 2, r.className = t.name, c[e] = r) : (tU(c, e, i), c[e].Y[n - 2] = r), tA([], u, function(r) {
                                            return r = tB(i, r, t, a, o), void 0 === c[e].Y ? (r.ja = n - 2, c[e] = r) : c[e].Y[n - 2] = r, []
                                        }), []
                                    })
                                },
                                d: function(t, e, n, r, i, a, o, s, u, c) {
                                    e = tn(e), i = tj(r, i), tA([], [t], function(t) {
                                        var r = (t = t[0]).name + "." + e,
                                            l = {
                                                get: function() {
                                                    tD("Cannot access " + r + " due to unbound types", [n, o])
                                                },
                                                enumerable: !0,
                                                configurable: !0
                                            };
                                        return l.set = u ? () => {
                                            tD("Cannot access " + r + " due to unbound types", [n, o])
                                        } : () => {
                                            Q(r + " is a read-only property")
                                        }, Object.defineProperty(t.V.ea, e, l), tA([], u ? [n, o] : [n], function(n) {
                                            var o = n[0],
                                                l = {
                                                    get: function() {
                                                        var e = tY(this, t, r + " getter");
                                                        return o.fromWireType(i(a, e))
                                                    },
                                                    enumerable: !0
                                                };
                                            if (u) {
                                                u = tj(s, u);
                                                var h = n[1];
                                                l.set = function(e) {
                                                    var n = tY(this, t, r + " setter"),
                                                        i = [];
                                                    u(c, n, h.toWireType(i, e)), tw(i)
                                                }
                                            }
                                            return Object.defineProperty(t.V.ea, e, l), []
                                        }), []
                                    })
                                },
                                D: function(t, e) {
                                    tC(t, {
                                        name: e = tn(e),
                                        fromWireType: function(t) {
                                            var e = J(t);
                                            return tN(t), e
                                        },
                                        toWireType: function(t, e) {
                                            return K(e)
                                        },
                                        argPackAdvance: 8,
                                        readValueFromPointer: tT,
                                        ba: null
                                    })
                                },
                                l: function(t, e, n, r) {
                                    function i() {}
                                    n = tE(n), e = tn(e), i.values = {}, tC(t, {
                                        name: e,
                                        constructor: i,
                                        fromWireType: function(t) {
                                            return this.constructor.values[t]
                                        },
                                        toWireType: function(t, e) {
                                            return e.value
                                        },
                                        argPackAdvance: 8,
                                        readValueFromPointer: function(t, e, n) {
                                            switch (e) {
                                                case 0:
                                                    return function(t) {
                                                        return this.fromWireType((n ? E : C)[t])
                                                    };
                                                case 1:
                                                    return function(t) {
                                                        return this.fromWireType((n ? _ : M)[t >> 1])
                                                    };
                                                case 2:
                                                    return function(t) {
                                                        return this.fromWireType((n ? U : L)[t >> 2])
                                                    };
                                                default:
                                                    throw TypeError("Unknown integer type: " + t)
                                            }
                                        }(e, n, r),
                                        ba: null
                                    }), tL(e, i)
                                },
                                c: function(t, e, n) {
                                    var r = tl(t, "enum");
                                    e = tn(e), t = r.constructor, r = Object.create(r.constructor.prototype, {
                                        value: {
                                            value: n
                                        },
                                        constructor: {
                                            value: z(r.name + "_" + e, function() {})
                                        }
                                    }), t.values[n] = r, t[e] = r
                                },
                                u: function(t, e, n) {
                                    n = tE(n), tC(t, {
                                        name: e = tn(e),
                                        fromWireType: function(t) {
                                            return t
                                        },
                                        toWireType: function(t, e) {
                                            return e
                                        },
                                        argPackAdvance: 8,
                                        readValueFromPointer: function(t, e) {
                                            switch (e) {
                                                case 2:
                                                    return function(t) {
                                                        return this.fromWireType(S[t >> 2])
                                                    };
                                                case 3:
                                                    return function(t) {
                                                        return this.fromWireType(I[t >> 3])
                                                    };
                                                default:
                                                    throw TypeError("Unknown float type: " + t)
                                            }
                                        }(e, n),
                                        ba: null
                                    })
                                },
                                q: function(t, e, n, r, i, a) {
                                    var o = tV(e, n);
                                    t = tn(t), i = tj(r, i), tL(t, function() {
                                        tD("Cannot call " + t + " due to unbound types", o)
                                    }, e - 1), tA([], o, function(n) {
                                        return tW(t, tB(t, [n[0], null].concat(n.slice(1)), null, i, a), e - 1), []
                                    })
                                },
                                j: function(t, e, n, r, i) {
                                    e = tn(e), -1 === i && (i = 4294967295), i = tE(n);
                                    var a = t => t;
                                    if (0 === r) {
                                        var o = 32 - 8 * n;
                                        a = t => t << o >>> o
                                    }
                                    n = e.includes("unsigned") ? function(t, e) {
                                        return e >>> 0
                                    } : function(t, e) {
                                        return e
                                    }, tC(t, {
                                        name: e,
                                        fromWireType: a,
                                        toWireType: n,
                                        argPackAdvance: 8,
                                        readValueFromPointer: function(t, e, n) {
                                            switch (e) {
                                                case 0:
                                                    return n ? function(t) {
                                                        return E[t]
                                                    } : function(t) {
                                                        return C[t]
                                                    };
                                                case 1:
                                                    return n ? function(t) {
                                                        return _[t >> 1]
                                                    } : function(t) {
                                                        return M[t >> 1]
                                                    };
                                                case 2:
                                                    return n ? function(t) {
                                                        return U[t >> 2]
                                                    } : function(t) {
                                                        return L[t >> 2]
                                                    };
                                                default:
                                                    throw TypeError("Unknown integer type: " + t)
                                            }
                                        }(e, i, 0 !== r),
                                        ba: null
                                    })
                                },
                                g: function(t, e, n) {
                                    function r(t) {
                                        t >>= 2;
                                        var e = L;
                                        return new i(A, e[t + 1], e[t])
                                    }
                                    var i = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][e];
                                    tC(t, {
                                        name: n = tn(n),
                                        fromWireType: r,
                                        argPackAdvance: 8,
                                        readValueFromPointer: r
                                    }, {
                                        lb: !0
                                    })
                                },
                                v: function(t, e) {
                                    var n = "std::string" === (e = tn(e));
                                    tC(t, {
                                        name: e,
                                        fromWireType: function(t) {
                                            var e = L[t >> 2],
                                                r = t + 4;
                                            if (n)
                                                for (var i = r, a = 0; a <= e; ++a) {
                                                    var o = r + a;
                                                    if (a == e || 0 == C[o]) {
                                                        if (i = i ? P(C, i, o - i) : "", void 0 === s) var s = i;
                                                        else s += "\x00" + i;
                                                        i = o + 1
                                                    }
                                                } else {
                                                    for (a = 0, s = Array(e); a < e; ++a) s[a] = String.fromCharCode(C[r + a]);
                                                    s = s.join("")
                                                }
                                            return t8(t), s
                                        },
                                        toWireType: function(t, e) {
                                            e instanceof ArrayBuffer && (e = new Uint8Array(e));
                                            var r, i = "string" == typeof e;
                                            if (i || e instanceof Uint8Array || e instanceof Uint8ClampedArray || e instanceof Int8Array || Q("Cannot pass non-string to std::string"), n && i) {
                                                var a = 0;
                                                for (r = 0; r < e.length; ++r) {
                                                    var o = e.charCodeAt(r);
                                                    127 >= o ? a++ : 2047 >= o ? a += 2 : 55296 <= o && 57343 >= o ? (a += 4, ++r) : a += 3
                                                }
                                                r = a
                                            } else r = e.length;
                                            if (o = (a = t7(4 + r + 1)) + 4, L[a >> 2] = r, n && i) {
                                                if (i = o, o = r + 1, r = C, 0 < o) {
                                                    o = i + o - 1;
                                                    for (var s = 0; s < e.length; ++s) {
                                                        var u = e.charCodeAt(s);
                                                        if (55296 <= u && 57343 >= u && (u = 65536 + ((1023 & u) << 10) | 1023 & e.charCodeAt(++s)), 127 >= u) {
                                                            if (i >= o) break;
                                                            r[i++] = u
                                                        } else {
                                                            if (2047 >= u) {
                                                                if (i + 1 >= o) break;
                                                                r[i++] = 192 | u >> 6
                                                            } else {
                                                                if (65535 >= u) {
                                                                    if (i + 2 >= o) break;
                                                                    r[i++] = 224 | u >> 12
                                                                } else {
                                                                    if (i + 3 >= o) break;
                                                                    r[i++] = 240 | u >> 18, r[i++] = 128 | u >> 12 & 63
                                                                }
                                                                r[i++] = 128 | u >> 6 & 63
                                                            }
                                                            r[i++] = 128 | 63 & u
                                                        }
                                                    }
                                                    r[i] = 0
                                                }
                                            } else if (i)
                                                for (i = 0; i < r; ++i) 255 < (s = e.charCodeAt(i)) && (t8(o), Q("String has UTF-16 code units that do not fit in 8 bits")), C[o + i] = s;
                                            else
                                                for (i = 0; i < r; ++i) C[o + i] = e[i];
                                            return null !== t && t.push(t8, a), a
                                        },
                                        argPackAdvance: 8,
                                        readValueFromPointer: tT,
                                        ba: function(t) {
                                            t8(t)
                                        }
                                    })
                                },
                                t: function(t, e, n) {
                                    if (n = tn(n), 2 === e) var r = tH,
                                        i = tG,
                                        a = tZ,
                                        o = () => M,
                                        s = 1;
                                    else 4 === e && (r = t$, i = tQ, a = tJ, o = () => L, s = 2);
                                    tC(t, {
                                        name: n,
                                        fromWireType: function(t) {
                                            for (var n, i = L[t >> 2], a = o(), u = t + 4, c = 0; c <= i; ++c) {
                                                var l = t + 4 + c * e;
                                                (c == i || 0 == a[l >> s]) && (u = r(u, l - u), void 0 === n ? n = u : n += "\x00" + u, u = l + e)
                                            }
                                            return t8(t), n
                                        },
                                        toWireType: function(t, r) {
                                            "string" != typeof r && Q("Cannot pass non-string to C++ string type " + n);
                                            var o = a(r),
                                                u = t7(4 + o + e);
                                            return L[u >> 2] = o >> s, i(r, u + 4, o + e), null !== t && t.push(t8, u), u
                                        },
                                        argPackAdvance: 8,
                                        readValueFromPointer: tT,
                                        ba: function(t) {
                                            t8(t)
                                        }
                                    })
                                },
                                L: function(t, e, n, r, i, a) {
                                    tb[t] = {
                                        name: tn(e),
                                        xa: tj(n, r),
                                        ha: tj(i, a),
                                        Ja: []
                                    }
                                },
                                K: function(t, e, n, r, i, a, o, s, u, c) {
                                    tb[t].Ja.push({
                                        eb: tn(e),
                                        kb: n,
                                        ib: tj(r, i),
                                        jb: a,
                                        vb: o,
                                        ub: tj(s, u),
                                        wb: c
                                    })
                                },
                                F: function(t, e) {
                                    tC(t, {
                                        nb: !0,
                                        name: e = tn(e),
                                        argPackAdvance: 0,
                                        fromWireType: function() {},
                                        toWireType: function() {}
                                    })
                                },
                                r: function(t, e, n) {
                                    t = J(t), e = tl(e, "emval::as");
                                    var r = [],
                                        i = K(r);
                                    return L[n >> 2] = i, e.toWireType(r, t)
                                },
                                w: function(t, e, n, r, i) {
                                    t = t1[t], e = J(e), n = t0(n);
                                    var a = [];
                                    return L[r >> 2] = K(a), t(e, n, a, i)
                                },
                                i: function(t, e, n, r) {
                                    (t = t1[t])(e = J(e), n = t0(n), null, r)
                                },
                                f: tN,
                                h: function(t, e) {
                                    var n, r = function(t, e) {
                                            for (var n = Array(t), r = 0; r < t; ++r) n[r] = tl(L[e + 4 * r >> 2], "parameter " + r);
                                            return n
                                        }(t, e),
                                        i = r[0],
                                        a = t2[e = i.name + "_$" + r.slice(1).map(function(t) {
                                            return t.name
                                        }).join("_") + "$"];
                                    if (void 0 !== a) return a;
                                    var o = Array(t - 1);
                                    return n = t1.length, t1.push((e, n, a, s) => {
                                        for (var u = 0, c = 0; c < t - 1; ++c) o[c] = r[c + 1].readValueFromPointer(s + u), u += r[c + 1].argPackAdvance;
                                        for (c = 0, e = e[n].apply(e, o); c < t - 1; ++c) r[c + 1].Za && r[c + 1].Za(o[c]);
                                        if (!i.nb) return i.toWireType(a, e)
                                    }), a = n, t2[e] = a
                                },
                                p: function(t) {
                                    return K(s[t = t0(t)])
                                },
                                I: function(t, e) {
                                    return K((t = J(t))[e = J(e)])
                                },
                                m: function(t) {
                                    4 < t && (H[t].ya += 1)
                                },
                                H: function(t) {
                                    return K(t0(t))
                                },
                                n: function(t) {
                                    tw(J(t)), tN(t)
                                },
                                x: function(t, e) {
                                    return K(t = (t = tl(t, "_emval_take_value")).readValueFromPointer(e))
                                },
                                b: function() {
                                    D("")
                                },
                                A: function(t) {
                                    var e = C.length;
                                    if (2147483648 < (t >>>= 0)) return !1;
                                    for (var n = 1; 4 >= n; n *= 2) {
                                        var r = e * (1 + .2 / n);
                                        r = Math.min(r, t + 100663296);
                                        var i = Math;
                                        r = Math.max(t, r), i = i.min.call(i, 2147483648, r + (65536 - r % 65536) % 65536);
                                        t: {
                                            try {
                                                b.grow(i - A.byteLength + 65535 >>> 16), R();
                                                var a = 1;
                                                break t
                                            } catch (t) {}
                                            a = void 0
                                        }
                                        if (a) return !0
                                    }
                                    return !1
                                },
                                C: function() {
                                    return 52
                                },
                                y: function() {
                                    return 70
                                },
                                B: function(t, e, n, r) {
                                    for (var i = 0, a = 0; a < n; a++) {
                                        var o = L[e >> 2],
                                            s = L[e + 4 >> 2];
                                        e += 8;
                                        for (var u = 0; u < s; u++) {
                                            var c = C[o + u],
                                                l = t4[t];
                                            0 === c || 10 === c ? ((1 === t ? v : g)(P(l, 0)), l.length = 0) : l.push(c)
                                        }
                                        i += s
                                    }
                                    return L[r >> 2] = i, 0
                                }
                            };
                            (function() {
                                function t(t) {
                                    s.asm = t.exports, b = s.asm.M, R(), x = s.asm.S, O.unshift(s.asm.N), W--, s.monitorRunDependencies && s.monitorRunDependencies(W), 0 == W && (null !== j && (clearInterval(j), j = null), X && (t = X, X = null, t()))
                                }

                                function e(e) {
                                    t(e.instance)
                                }

                                function n(t) {
                                    return (function() {
                                        if (!y && (p || d)) {
                                            if ("function" == typeof fetch && !a.startsWith("file://")) return fetch(a, {
                                                credentials: "same-origin"
                                            }).then(function(t) {
                                                if (!t.ok) throw "failed to load wasm binary file at '" + a + "'";
                                                return t.arrayBuffer()
                                            }).catch(function() {
                                                return Y()
                                            });
                                            if (l) return new Promise(function(t, e) {
                                                l(a, function(e) {
                                                    t(new Uint8Array(e))
                                                }, e)
                                            })
                                        }
                                        return Promise.resolve().then(function() {
                                            return Y()
                                        })
                                    })().then(function(t) {
                                        return WebAssembly.instantiate(t, r)
                                    }).then(function(t) {
                                        return t
                                    }).then(t, function(t) {
                                        g("failed to asynchronously prepare wasm: " + t), D(t)
                                    })
                                }
                                var r = {
                                    a: t5
                                };
                                if (W++, s.monitorRunDependencies && s.monitorRunDependencies(W), s.instantiateWasm) try {
                                    return s.instantiateWasm(r, t)
                                } catch (t) {
                                    g("Module.instantiateWasm callback failed with error: " + t), c(t)
                                }(y || "function" != typeof WebAssembly.instantiateStreaming || B() || a.startsWith("file://") || "function" != typeof fetch ? n(e) : fetch(a, {
                                    credentials: "same-origin"
                                }).then(function(t) {
                                    return WebAssembly.instantiateStreaming(t, r).then(e, function(t) {
                                        return g("wasm streaming compile failed: " + t), g("falling back to ArrayBuffer instantiation"), n(e)
                                    })
                                })).catch(c)
                            })(), s.___wasm_call_ctors = function() {
                                return (s.___wasm_call_ctors = s.asm.N).apply(null, arguments)
                            };
                            var t8 = s._free = function() {
                                    return (t8 = s._free = s.asm.O).apply(null, arguments)
                                },
                                t7 = s._malloc = function() {
                                    return (t7 = s._malloc = s.asm.P).apply(null, arguments)
                                },
                                t9 = s.___getTypeName = function() {
                                    return (t9 = s.___getTypeName = s.asm.Q).apply(null, arguments)
                                };

                            function et() {
                                function t() {
                                    if (!o && (o = !0, s.calledRun = !0, !w)) {
                                        if (N(O), u(s), s.onRuntimeInitialized && s.onRuntimeInitialized(), s.postRun)
                                            for ("function" == typeof s.postRun && (s.postRun = [s.postRun]); s.postRun.length;) {
                                                var t = s.postRun.shift();
                                                k.unshift(t)
                                            }
                                        N(k)
                                    }
                                }
                                if (!(0 < W)) {
                                    if (s.preRun)
                                        for ("function" == typeof s.preRun && (s.preRun = [s.preRun]); s.preRun.length;) ! function() {
                                            var t = s.preRun.shift();
                                            F.unshift(t)
                                        }();
                                    N(F), 0 < W || (s.setStatus ? (s.setStatus("Running..."), setTimeout(function() {
                                        setTimeout(function() {
                                            s.setStatus("")
                                        }, 1), t()
                                    }, 1)) : t())
                                }
                            }
                            if (s.__embind_initialize_bindings = function() {
                                    return (s.__embind_initialize_bindings = s.asm.R).apply(null, arguments)
                                }, s.dynCall_jiji = function() {
                                    return (s.dynCall_jiji = s.asm.T).apply(null, arguments)
                                }, X = function t() {
                                    o || et(), o || (X = t)
                                }, s.preInit)
                                for ("function" == typeof s.preInit && (s.preInit = [s.preInit]); 0 < s.preInit.length;) s.preInit.pop()();
                            return et(), t.ready
                        });
                        let a = i
                    }, t => {
                        t.exports = JSON.parse('{"name":"@rive-app/canvas","version":"1.1.9","description":"Rive\'s canvas based web api.","main":"rive.js","homepage":"https://rive.app","repository":{"type":"git","url":"https://github.com/rive-app/rive-wasm/tree/master/js"},"keywords":["rive","animation"],"author":"Rive","contributors":["Luigi Rosso <luigi@rive.app> (https://rive.app)","Maxwell Talbot <max@rive.app> (https://rive.app)","Arthur Vivian <arthur@rive.app> (https://rive.app)","Umberto Sonnino <umberto@rive.app> (https://rive.app)","Matthew Sullivan <matt.j.sullivan@gmail.com> (mailto:matt.j.sullivan@gmail.com)"],"license":"MIT","files":["rive.js","rive.js.map","rive.wasm","rive.d.ts","rive_advanced.mjs.d.ts"],"typings":"rive.d.ts","dependencies":{},"browser":{"fs":false,"path":false}}')
                    }, (t, e, n) => {
                        n.r(e), n.d(e, {
                            registerTouchInteractions: () => r.registerTouchInteractions
                        });
                        var r = n(4)
                    }, (t, e, n) => {
                        n.r(e), n.d(e, {
                            registerTouchInteractions: () => a
                        });
                        var r = void 0,
                            i = function(t) {
                                var e, n;
                                return ["touchstart", "touchmove"].indexOf(t.type) > -1 && (null === (e = t.touches) || void 0 === e ? void 0 : e.length) ? (t.preventDefault(), {
                                    clientX: t.touches[0].clientX,
                                    clientY: t.touches[0].clientY
                                }) : "touchend" === t.type && (null === (n = t.changedTouches) || void 0 === n ? void 0 : n.length) ? {
                                    clientX: t.changedTouches[0].clientX,
                                    clientY: t.changedTouches[0].clientY
                                } : {
                                    clientX: t.clientX,
                                    clientY: t.clientY
                                }
                            },
                            a = function(t) {
                                var e = t.canvas,
                                    n = t.artboard,
                                    a = t.stateMachines,
                                    o = void 0 === a ? [] : a,
                                    s = t.renderer,
                                    u = t.rive,
                                    c = t.fit,
                                    l = t.alignment;
                                if (!e || !o.length || !s || !u || !n || "undefined" == typeof window) return null;
                                var h = (function(t) {
                                    var e = t.currentTarget.getBoundingClientRect(),
                                        r = i(t),
                                        a = r.clientX,
                                        s = r.clientY;
                                    if (a || s) {
                                        var h = a - e.left,
                                            f = s - e.top,
                                            p = u.computeAlignment(c, l, {
                                                minX: 0,
                                                minY: 0,
                                                maxX: e.width,
                                                maxY: e.height
                                            }, n.bounds),
                                            d = new u.Mat2D;
                                        p.invert(d);
                                        var m = new u.Vec2D(h, f),
                                            v = u.mapXY(d, m),
                                            g = v.x(),
                                            y = v.y();
                                        switch (v.delete(), d.delete(), m.delete(), p.delete(), t.type) {
                                            case "touchmove":
                                            case "mouseover":
                                            case "mouseout":
                                            case "mousemove":
                                                for (var b = 0; b < o.length; b++) {
                                                    var w = o[b];
                                                    w.pointerMove(g, y)
                                                }
                                                break;
                                            case "touchstart":
                                            case "mousedown":
                                                for (var T = 0; T < o.length; T++) {
                                                    var w = o[T];
                                                    w.pointerDown(g, y)
                                                }
                                                break;
                                            case "touchend":
                                            case "mouseup":
                                                for (var P = 0; P < o.length; P++) {
                                                    var w = o[P];
                                                    w.pointerUp(g, y)
                                                }
                                        }
                                    }
                                }).bind(r);
                                return e.addEventListener("mouseover", h), e.addEventListener("mouseout", h), e.addEventListener("mousemove", h), e.addEventListener("mousedown", h), e.addEventListener("mouseup", h), e.addEventListener("touchmove", h), e.addEventListener("touchstart", h), e.addEventListener("touchend", h),
                                    function() {
                                        e.removeEventListener("mouseover", h), e.removeEventListener("mouseout", h), e.removeEventListener("mousemove", h), e.removeEventListener("mousedown", h), e.removeEventListener("mouseup", h), e.removeEventListener("touchmove", h), e.removeEventListener("touchstart", h), e.removeEventListener("touchend", h)
                                    }
                            }
                    }],
                    M = {};

                function U(t) {
                    var e = M[t];
                    if (void 0 !== e) return e.exports;
                    var n = M[t] = {
                        exports: {}
                    };
                    return _[t](n, n.exports, U), n.exports
                }
                U.d = (t, e) => {
                    for (var n in e) U.o(e, n) && !U.o(t, n) && Object.defineProperty(t, n, {
                        enumerable: !0,
                        get: e[n]
                    })
                }, U.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), U.r = t => {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(t, "__esModule", {
                        value: !0
                    })
                };
                var L = {};
                return U.r(L), U.d(L, {
                    Fit: () => t,
                    Alignment: () => e,
                    Layout: () => f,
                    RuntimeLoader: () => p,
                    StateMachineInputType: () => n,
                    StateMachineInput: () => v,
                    EventType: () => r,
                    LoopType: () => i,
                    Rive: () => R,
                    Testing: () => C
                }), a = U(1), o = U(2), s = U(3), u = function(t, e, n, r) {
                    return new(n || (n = Promise))(function(i, a) {
                        function o(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                a(t)
                            }
                        }

                        function s(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                a(t)
                            }
                        }

                        function u(t) {
                            var e;
                            t.done ? i(t.value) : ((e = t.value) instanceof n ? e : new n(function(t) {
                                t(e)
                            })).then(o, s)
                        }
                        u((r = r.apply(t, e || [])).next())
                    })
                }, c = function(t, e) {
                    var n, r, i, a, o = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function s(a) {
                        return function(s) {
                            return function(a) {
                                if (n) throw TypeError("Generator is already executing.");
                                for (; o;) try {
                                    if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
                                    switch (r = 0, i && (a = [2 & a[0], i.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            i = a;
                                            break;
                                        case 4:
                                            return o.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            o.label++, r = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = o.ops.pop(), o.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                o = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                                o.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && o.label < i[1]) {
                                                o.label = i[1], i = a;
                                                break
                                            }
                                            if (i && o.label < i[2]) {
                                                o.label = i[2], o.ops.push(a);
                                                break
                                            }
                                            i[2] && o.ops.pop(), o.trys.pop();
                                            continue
                                    }
                                    a = e.call(t, o)
                                } catch (t) {
                                    a = [6, t], r = 0
                                } finally {
                                    n = i = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, s])
                        }
                    }
                }, (l = t || (t = {})).Cover = "cover", l.Contain = "contain", l.Fill = "fill", l.FitWidth = "fitWidth", l.FitHeight = "fitHeight", l.None = "none", l.ScaleDown = "scaleDown", (h = e || (e = {})).Center = "center", h.TopLeft = "topLeft", h.TopCenter = "topCenter", h.TopRight = "topRight", h.CenterLeft = "centerLeft", h.CenterRight = "centerRight", h.BottomLeft = "bottomLeft", h.BottomCenter = "bottomCenter", h.BottomRight = "bottomRight", f = function() {
                    function n(n) {
                        var r, i, a, o, s, u;
                        this.fit = null !== (r = null == n ? void 0 : n.fit) && void 0 !== r ? r : t.Contain, this.alignment = null !== (i = null == n ? void 0 : n.alignment) && void 0 !== i ? i : e.Center, this.minX = null !== (a = null == n ? void 0 : n.minX) && void 0 !== a ? a : 0, this.minY = null !== (o = null == n ? void 0 : n.minY) && void 0 !== o ? o : 0, this.maxX = null !== (s = null == n ? void 0 : n.maxX) && void 0 !== s ? s : 0, this.maxY = null !== (u = null == n ? void 0 : n.maxY) && void 0 !== u ? u : 0
                    }
                    return n.new = function(t) {
                        var e = t.fit,
                            r = t.alignment,
                            i = t.minX,
                            a = t.minY,
                            o = t.maxX,
                            s = t.maxY;
                        return console.warn("This function is deprecated: please use `new Layout({})` instead"), new n({
                            fit: e,
                            alignment: r,
                            minX: i,
                            minY: a,
                            maxX: o,
                            maxY: s
                        })
                    }, n.prototype.copyWith = function(t) {
                        var e = t.fit,
                            r = t.alignment,
                            i = t.minX,
                            a = t.minY,
                            o = t.maxX,
                            s = t.maxY;
                        return new n({
                            fit: null != e ? e : this.fit,
                            alignment: null != r ? r : this.alignment,
                            minX: null != i ? i : this.minX,
                            minY: null != a ? a : this.minY,
                            maxX: null != o ? o : this.maxX,
                            maxY: null != s ? s : this.maxY
                        })
                    }, n.prototype.runtimeFit = function(e) {
                        var n;
                        return this.cachedRuntimeFit ? this.cachedRuntimeFit : (n = this.fit === t.Cover ? e.Fit.cover : this.fit === t.Contain ? e.Fit.contain : this.fit === t.Fill ? e.Fit.fill : this.fit === t.FitWidth ? e.Fit.fitWidth : this.fit === t.FitHeight ? e.Fit.fitHeight : this.fit === t.ScaleDown ? e.Fit.scaleDown : e.Fit.none, this.cachedRuntimeFit = n, n)
                    }, n.prototype.runtimeAlignment = function(t) {
                        var n;
                        return this.cachedRuntimeAlignment ? this.cachedRuntimeAlignment : (n = this.alignment === e.TopLeft ? t.Alignment.topLeft : this.alignment === e.TopCenter ? t.Alignment.topCenter : this.alignment === e.TopRight ? t.Alignment.topRight : this.alignment === e.CenterLeft ? t.Alignment.centerLeft : this.alignment === e.CenterRight ? t.Alignment.centerRight : this.alignment === e.BottomLeft ? t.Alignment.bottomLeft : this.alignment === e.BottomCenter ? t.Alignment.bottomCenter : this.alignment === e.BottomRight ? t.Alignment.bottomRight : t.Alignment.center, this.cachedRuntimeAlignment = n, n)
                    }, n
                }(), p = function() {
                    function t() {}
                    return t.loadRuntime = function() {
                        a.default({
                            locateFile: function() {
                                return t.wasmURL
                            }
                        }).then(function(e) {
                            var n;
                            for (t.runtime = e; t.callBackQueue.length > 0;) null === (n = t.callBackQueue.shift()) || void 0 === n || n(t.runtime)
                        })
                    }, t.getInstance = function(e) {
                        t.isLoading || (t.isLoading = !0, t.loadRuntime()), t.runtime ? e(t.runtime) : t.callBackQueue.push(e)
                    }, t.awaitInstance = function() {
                        return new Promise(function(e) {
                            return t.getInstance(function(t) {
                                return e(t)
                            })
                        })
                    }, t.setWasmUrl = function(e) {
                        t.wasmURL = e
                    }, t.isLoading = !1, t.callBackQueue = [], t.wasmURL = "https://unpkg.com/" + o.name + "@" + o.version + "/rive.wasm", t
                }(), d = function() {
                    function t(t, e, n, r) {
                        this.animation = t, this.artboard = e, this.playing = r, this.loopCount = 0, this.scrubTo = null, this.instance = new n.LinearAnimationInstance(t, e)
                    }
                    return Object.defineProperty(t.prototype, "name", {
                        get: function() {
                            return this.animation.name
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "time", {
                        get: function() {
                            return this.instance.time
                        },
                        set: function(t) {
                            this.instance.time = t
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "loopValue", {
                        get: function() {
                            return this.animation.loopValue
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype.advance = function(t) {
                        null === this.scrubTo ? this.instance.advance(t) : (this.instance.time = 0, this.instance.advance(this.scrubTo), this.scrubTo = null)
                    }, t.prototype.apply = function(t) {
                        this.instance.apply(t)
                    }, Object.defineProperty(t.prototype, "needsScrub", {
                        get: function() {
                            return null !== this.scrubTo
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype.cleanup = function() {
                        this.instance.delete()
                    }, t
                }(), (m = n || (n = {}))[m.Number = 56] = "Number", m[m.Trigger = 58] = "Trigger", m[m.Boolean = 59] = "Boolean", v = function() {
                    function t(t, e) {
                        this.type = t, this.runtimeInput = e
                    }
                    return Object.defineProperty(t.prototype, "name", {
                        get: function() {
                            return this.runtimeInput.name
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "value", {
                        get: function() {
                            return this.runtimeInput.value
                        },
                        set: function(t) {
                            this.runtimeInput.value = t
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype.fire = function() {
                        this.type === n.Trigger && this.runtimeInput.fire()
                    }, t
                }(), g = function() {
                    function t(t, e, n, r) {
                        this.stateMachine = t, this.playing = n, this.artboard = r, this.inputs = [], this.instance = new e.StateMachineInstance(t, r), this.initInputs(e)
                    }
                    return Object.defineProperty(t.prototype, "name", {
                        get: function() {
                            return this.stateMachine.name
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "statesChanged", {
                        get: function() {
                            for (var t = [], e = 0; e < this.instance.stateChangedCount(); e++) t.push(this.instance.stateChangedNameByIndex(e));
                            return t
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype.advance = function(t) {
                        this.instance.advance(t)
                    }, t.prototype.initInputs = function(t) {
                        for (var e = 0; e < this.instance.inputCount(); e++) {
                            var n = this.instance.input(e);
                            this.inputs.push(this.mapRuntimeInput(n, t))
                        }
                    }, t.prototype.mapRuntimeInput = function(t, e) {
                        return t.type === e.SMIInput.bool ? new v(n.Boolean, t.asBool()) : t.type === e.SMIInput.number ? new v(n.Number, t.asNumber()) : t.type === e.SMIInput.trigger ? new v(n.Trigger, t.asTrigger()) : void 0
                    }, t.prototype.cleanup = function() {
                        this.instance.delete()
                    }, t
                }(), y = function() {
                    function t(t, e, n, r, i) {
                        void 0 === r && (r = []), void 0 === i && (i = []), this.runtime = t, this.artboard = e, this.eventManager = n, this.animations = r, this.stateMachines = i
                    }
                    return t.prototype.add = function(t, e, n) {
                        if (void 0 === n && (n = !0), 0 === (t = E(t)).length) this.animations.forEach(function(t) {
                            return t.playing = e
                        }), this.stateMachines.forEach(function(t) {
                            return t.playing = e
                        });
                        else {
                            var i = this.animations.map(function(t) {
                                    return t.name
                                }),
                                a = this.stateMachines.map(function(t) {
                                    return t.name
                                });
                            for (var o in t) {
                                var s = i.indexOf(t[o]),
                                    u = a.indexOf(t[o]);
                                if (s >= 0 || u >= 0) s >= 0 ? this.animations[s].playing = e : this.stateMachines[u].playing = e;
                                else {
                                    var c = this.artboard.animationByName(t[o]);
                                    if (c) {
                                        var l = new d(c, this.artboard, this.runtime, e);
                                        l.advance(0), l.apply(1), this.animations.push(l)
                                    } else {
                                        var h = this.artboard.stateMachineByName(t[o]);
                                        if (h) {
                                            var f = new g(h, this.runtime, e, this.artboard);
                                            this.stateMachines.push(f)
                                        }
                                    }
                                }
                            }
                        }
                        return n && (e ? this.eventManager.fire({
                            type: r.Play,
                            data: this.playing
                        }) : this.eventManager.fire({
                            type: r.Pause,
                            data: this.paused
                        })), e ? this.playing : this.paused
                    }, t.prototype.play = function(t) {
                        return this.add(t, !0)
                    }, t.prototype.pause = function(t) {
                        return this.add(t, !1)
                    }, t.prototype.scrub = function(t, e) {
                        var n = this.animations.filter(function(e) {
                            return t.includes(e.name)
                        });
                        return n.forEach(function(t) {
                            return t.scrubTo = e
                        }), n.map(function(t) {
                            return t.name
                        })
                    }, Object.defineProperty(t.prototype, "playing", {
                        get: function() {
                            return this.animations.filter(function(t) {
                                return t.playing
                            }).map(function(t) {
                                return t.name
                            }).concat(this.stateMachines.filter(function(t) {
                                return t.playing
                            }).map(function(t) {
                                return t.name
                            }))
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "paused", {
                        get: function() {
                            return this.animations.filter(function(t) {
                                return !t.playing
                            }).map(function(t) {
                                return t.name
                            }).concat(this.stateMachines.filter(function(t) {
                                return !t.playing
                            }).map(function(t) {
                                return t.name
                            }))
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype.stop = function(t) {
                        var e = this;
                        t = E(t);
                        var n = [];
                        if (0 === t.length) n = this.animations.map(function(t) {
                            return t.name
                        }).concat(this.stateMachines.map(function(t) {
                            return t.name
                        })), this.animations.forEach(function(t) {
                            return t.cleanup()
                        }), this.stateMachines.forEach(function(t) {
                            return t.cleanup()
                        }), this.animations.splice(0, this.animations.length), this.stateMachines.splice(0, this.stateMachines.length);
                        else {
                            var i = this.animations.filter(function(e) {
                                return t.includes(e.name)
                            });
                            i.forEach(function(t) {
                                t.cleanup(), e.animations.splice(e.animations.indexOf(t), 1)
                            });
                            var a = this.stateMachines.filter(function(e) {
                                return t.includes(e.name)
                            });
                            a.forEach(function(t) {
                                t.cleanup(), e.stateMachines.splice(e.stateMachines.indexOf(t), 1)
                            }), n = i.map(function(t) {
                                return t.name
                            }).concat(a.map(function(t) {
                                return t.name
                            }))
                        }
                        return this.eventManager.fire({
                            type: r.Stop,
                            data: n
                        }), n
                    }, Object.defineProperty(t.prototype, "isPlaying", {
                        get: function() {
                            return this.animations.reduce(function(t, e) {
                                return t || e.playing
                            }, !1) || this.stateMachines.reduce(function(t, e) {
                                return t || e.playing
                            }, !1)
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isPaused", {
                        get: function() {
                            return !this.isPlaying && (this.animations.length > 0 || this.stateMachines.length > 0)
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isStopped", {
                        get: function() {
                            return 0 === this.animations.length && 0 === this.stateMachines.length
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype.atLeastOne = function(t, e) {
                        var n;
                        return void 0 === e && (e = !0), 0 === this.animations.length && 0 === this.stateMachines.length && (this.artboard.animationCount() > 0 ? this.add([n = this.artboard.animationByIndex(0).name], t, e) : this.artboard.stateMachineCount() > 0 && this.add([n = this.artboard.stateMachineByIndex(0).name], t, e)), n
                    }, t.prototype.handleLooping = function() {
                        for (var t = 0, e = this.animations.filter(function(t) {
                                return t.playing
                            }); t < e.length; t++) {
                            var n = e[t];
                            0 === n.loopValue && n.loopCount ? (n.loopCount = 0, this.stop(n.name)) : 1 === n.loopValue && n.loopCount ? (this.eventManager.fire({
                                type: r.Loop,
                                data: {
                                    animation: n.name,
                                    type: i.Loop
                                }
                            }), n.loopCount = 0) : 2 === n.loopValue && n.loopCount > 1 && (this.eventManager.fire({
                                type: r.Loop,
                                data: {
                                    animation: n.name,
                                    type: i.PingPong
                                }
                            }), n.loopCount = 0)
                        }
                    }, t.prototype.handleStateChanges = function() {
                        for (var t = [], e = 0, n = this.stateMachines.filter(function(t) {
                                return t.playing
                            }); e < n.length; e++) {
                            var i = n[e];
                            t.push.apply(t, i.statesChanged)
                        }
                        t.length > 0 && this.eventManager.fire({
                            type: r.StateChange,
                            data: t
                        })
                    }, t
                }(), (b = r || (r = {})).Load = "load", b.LoadError = "loaderror", b.Play = "play", b.Pause = "pause", b.Stop = "stop", b.Loop = "loop", b.Draw = "draw", b.StateChange = "statechange", (w = i || (i = {})).OneShot = "oneshot", w.Loop = "loop", w.PingPong = "pingpong", T = function() {
                    function t(t) {
                        void 0 === t && (t = []), this.listeners = t
                    }
                    return t.prototype.getListeners = function(t) {
                        return this.listeners.filter(function(e) {
                            return e.type === t
                        })
                    }, t.prototype.add = function(t) {
                        this.listeners.includes(t) || this.listeners.push(t)
                    }, t.prototype.remove = function(t) {
                        for (var e = 0; e < this.listeners.length; e++) {
                            var n = this.listeners[e];
                            if (n.type === t.type && n.callback === t.callback) {
                                this.listeners.splice(e, 1);
                                break
                            }
                        }
                    }, t.prototype.removeAll = function(t) {
                        var e = this;
                        t ? this.listeners.filter(function(e) {
                            return e.type === t
                        }).forEach(function(t) {
                            return e.remove(t)
                        }) : this.listeners.splice(0, this.listeners.length)
                    }, t.prototype.fire = function(t) {
                        this.getListeners(t.type).forEach(function(e) {
                            return e.callback(t)
                        })
                    }, t
                }(), P = function() {
                    function t(t) {
                        this.eventManager = t, this.queue = []
                    }
                    return t.prototype.add = function(t) {
                        this.queue.push(t)
                    }, t.prototype.process = function() {
                        for (; this.queue.length > 0;) {
                            var t = this.queue.shift();
                            (null == t ? void 0 : t.action) && t.action(), (null == t ? void 0 : t.event) && this.eventManager.fire(t.event)
                        }
                    }, t
                }(), R = function() {
                    function t(t) {
                        var e;
                        this._updateLayout = !0, this.isRendererActive = !0, this.loaded = !1, this.readyForPlaying = !1, this.artboard = null, this.eventCleanup = null, this.shouldDisableRiveListeners = !1, this.durations = [], this.frameTimes = [], this.frameCount = 0, this.renderSecondTimer = 0, this.canvas = t.canvas, this.src = t.src, this.buffer = t.buffer, this.layout = null !== (e = t.layout) && void 0 !== e ? e : new f, this.shouldDisableRiveListeners = !!t.shouldDisableRiveListeners, this.eventManager = new T, t.onLoad && this.on(r.Load, t.onLoad), t.onLoadError && this.on(r.LoadError, t.onLoadError), t.onPlay && this.on(r.Play, t.onPlay), t.onPause && this.on(r.Pause, t.onPause), t.onStop && this.on(r.Stop, t.onStop), t.onLoop && this.on(r.Loop, t.onLoop), t.onStateChange && this.on(r.StateChange, t.onStateChange), t.onload && !t.onLoad && this.on(r.Load, t.onload), t.onloaderror && !t.onLoadError && this.on(r.LoadError, t.onloaderror), t.onplay && !t.onPlay && this.on(r.Play, t.onplay), t.onpause && !t.onPause && this.on(r.Pause, t.onpause), t.onstop && !t.onStop && this.on(r.Stop, t.onstop), t.onloop && !t.onLoop && this.on(r.Loop, t.onloop), t.onstatechange && !t.onStateChange && this.on(r.StateChange, t.onstatechange), this.taskQueue = new P(this.eventManager), this.init({
                            src: this.src,
                            buffer: this.buffer,
                            autoplay: t.autoplay,
                            animations: t.animations,
                            stateMachines: t.stateMachines,
                            artboard: t.artboard,
                            useOffscreenRenderer: t.useOffscreenRenderer
                        })
                    }
                    return t.new = function(e) {
                        return console.warn("This function is deprecated: please use `new Rive({})` instead"), new t(e)
                    }, t.prototype.init = function(e) {
                        var n = this,
                            r = e.src,
                            i = e.buffer,
                            a = e.animations,
                            o = e.stateMachines,
                            s = e.artboard,
                            u = e.autoplay,
                            c = void 0 !== u && u,
                            l = e.useOffscreenRenderer,
                            h = void 0 !== l && l;
                        if (this.src = r, this.buffer = i, !this.src && !this.buffer) throw Error(t.missingErrorMessage);
                        var f = E(a),
                            d = E(o);
                        this.loaded = !1, this.readyForPlaying = !1, p.awaitInstance().then(function(t) {
                            n.runtime = t, n.renderer = n.runtime.makeRenderer(n.canvas, h), n.canvas.width || n.canvas.height || n.resizeDrawingSurfaceToCanvas(), n.initData(s, f, d, c).then(function() {
                                return n.setupRiveListeners()
                            }).catch(function(t) {
                                console.error(t)
                            })
                        }).catch(function(t) {
                            console.error(t)
                        })
                    }, t.prototype.setupRiveListeners = function() {
                        var t = this;
                        if (!this.shouldDisableRiveListeners) {
                            var e = (this.animator.stateMachines || []).filter(function(e) {
                                return e.playing && t.runtime.hasListeners(e.instance)
                            }).map(function(t) {
                                return t.instance
                            });
                            this.eventCleanup = (0, s.registerTouchInteractions)({
                                canvas: this.canvas,
                                artboard: this.artboard,
                                stateMachines: e,
                                renderer: this.renderer,
                                rive: this.runtime,
                                fit: this._layout.runtimeFit(this.runtime),
                                alignment: this._layout.runtimeAlignment(this.runtime)
                            })
                        }
                    }, t.prototype.initData = function(t, e, n, i) {
                        var a;
                        return u(this, void 0, void 0, function() {
                            var o, s, u;
                            return c(this, function(c) {
                                switch (c.label) {
                                    case 0:
                                        if (!this.src) return [3, 2];
                                        return o = this, [4, A(this.src)];
                                    case 1:
                                        o.buffer = c.sent(), c.label = 2;
                                    case 2:
                                        return s = this, [4, this.runtime.load(new Uint8Array(this.buffer))];
                                    case 3:
                                        if (s.file = c.sent(), this.file) return this.initArtboard(t, e, n, i), this.loaded = !0, this.eventManager.fire({
                                            type: r.Load,
                                            data: null !== (a = this.src) && void 0 !== a ? a : "buffer"
                                        }), this.readyForPlaying = !0, this.taskQueue.process(), this.drawFrame(), [2, Promise.resolve()];
                                        return console.warn(u = "Problem loading file; may be corrupt!"), this.eventManager.fire({
                                            type: r.LoadError,
                                            data: u
                                        }), [2, Promise.reject(u)]
                                }
                            })
                        })
                    }, t.prototype.initArtboard = function(t, e, n, i) {
                        var a, o = t ? this.file.artboardByName(t) : this.file.defaultArtboard();
                        if (!o) {
                            var s = "Invalid artboard name or no default artboard";
                            console.warn(s), this.eventManager.fire({
                                type: r.LoadError,
                                data: s
                            });
                            return
                        }
                        if (this.artboard = o, 1 > this.artboard.animationCount()) {
                            var s = "Artboard has no animations";
                            throw this.eventManager.fire({
                                type: r.LoadError,
                                data: s
                            }), s
                        }
                        this.animator = new y(this.runtime, this.artboard, this.eventManager), e.length > 0 || n.length > 0 ? (a = e.concat(n), this.animator.add(a, i, !1)) : a = [this.animator.atLeastOne(i, !1)], this.taskQueue.add({
                            event: {
                                type: i ? r.Play : r.Pause,
                                data: a
                            }
                        })
                    }, t.prototype.drawFrame = function() {
                        this.startRendering()
                    }, t.prototype.draw = function(t, e) {
                        var n = performance.now();
                        this.frameRequestId = null, this.lastRenderTime || (this.lastRenderTime = t), this.renderSecondTimer += t - this.lastRenderTime, this.renderSecondTimer > 5e3 && (this.renderSecondTimer = 0, null == e || e());
                        var r = (t - this.lastRenderTime) / 1e3;
                        this.lastRenderTime = t;
                        for (var i = this.animator.animations.filter(function(t) {
                                return t.playing || t.needsScrub
                            }).sort(function(t) {
                                return t.needsScrub ? -1 : 1
                            }), a = 0; a < i.length; a++) {
                            var o = i[a];
                            o.advance(r), o.instance.didLoop && (o.loopCount += 1), o.apply(1)
                        }
                        for (var s = this.animator.stateMachines.filter(function(t) {
                                return t.playing
                            }), u = 0; u < s.length; u++) s[u].advance(r);
                        this.artboard.advance(r);
                        var c = this.renderer;
                        c.clear(), c.save(), this.alignRenderer(), this.artboard.draw(c), c.restore(), c.flush(), this.animator.handleLooping(), this.animator.handleStateChanges(), this.frameCount++;
                        var l = performance.now();
                        for (this.frameTimes.push(l), this.durations.push(l - n); this.frameTimes[0] <= l - 1e3;) this.frameTimes.shift(), this.durations.shift();
                        this.animator.isPlaying ? this.startRendering() : this.animator.isPaused ? this.lastRenderTime = 0 : this.animator.isStopped && (this.lastRenderTime = 0)
                    }, t.prototype.alignRenderer = function() {
                        var t = this.renderer,
                            e = this.runtime,
                            n = this._layout,
                            r = this.artboard;
                        t.align(n.runtimeFit(e), n.runtimeAlignment(e), {
                            minX: n.minX,
                            minY: n.minY,
                            maxX: n.maxX,
                            maxY: n.maxY
                        }, r.bounds)
                    }, Object.defineProperty(t.prototype, "fps", {
                        get: function() {
                            return this.durations.length
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "frameTime", {
                        get: function() {
                            return 0 === this.durations.length ? 0 : (this.durations.reduce(function(t, e) {
                                return t + e
                            }, 0) / this.durations.length).toFixed(4)
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype.cleanup = function() {
                        var t, e;
                        this.stopRendering(), this.cleanupInstances(), null === (t = this.renderer) || void 0 === t || t.delete(), this.renderer = null, null === (e = this.file) || void 0 === e || e.delete(), this.file = null
                    }, t.prototype.cleanupInstances = function() {
                        null !== this.eventCleanup && this.eventCleanup(), this.stop(), this.artboard && (this.artboard.delete(), this.artboard = null)
                    }, t.prototype.play = function(t, e) {
                        var n = this;
                        if (t = E(t), !this.readyForPlaying) {
                            this.taskQueue.add({
                                action: function() {
                                    return n.play(t, e)
                                }
                            });
                            return
                        }
                        this.animator.play(t), this.eventCleanup && this.eventCleanup(), this.setupRiveListeners(), this.startRendering()
                    }, t.prototype.pause = function(t) {
                        var e = this;
                        if (t = E(t), !this.readyForPlaying) {
                            this.taskQueue.add({
                                action: function() {
                                    return e.pause(t)
                                }
                            });
                            return
                        }
                        this.animator.pause(t)
                    }, t.prototype.scrub = function(t, e) {
                        var n = this;
                        if (t = E(t), !this.readyForPlaying) {
                            this.taskQueue.add({
                                action: function() {
                                    return n.scrub(t, e)
                                }
                            });
                            return
                        }
                        this.animator.scrub(t, e || 0), this.drawFrame()
                    }, t.prototype.stop = function(t) {
                        var e = this;
                        if (t = E(t), !this.readyForPlaying) {
                            this.taskQueue.add({
                                action: function() {
                                    return e.stop(t)
                                }
                            });
                            return
                        }
                        this.animator.stop(t), this.eventCleanup && this.eventCleanup()
                    }, t.prototype.reset = function(t) {
                        var e, n = null == t ? void 0 : t.artboard,
                            r = E(null == t ? void 0 : t.animations),
                            i = E(null == t ? void 0 : t.stateMachines),
                            a = null !== (e = null == t ? void 0 : t.autoplay) && void 0 !== e && e;
                        this.cleanupInstances(), this.initArtboard(n, r, i, a), this.taskQueue.process()
                    }, t.prototype.load = function(t) {
                        this.stop(), this.init(t)
                    }, Object.defineProperty(t.prototype, "layout", {
                        get: function() {
                            return this._layout
                        },
                        set: function(t) {
                            this._layout = t, t.maxX && t.maxY || this.resizeToCanvas(), this.loaded && !this.animator.isPlaying && this.drawFrame()
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype.resizeToCanvas = function() {
                        this._layout = this.layout.copyWith({
                            minX: 0,
                            minY: 0,
                            maxX: this.canvas.width,
                            maxY: this.canvas.height
                        })
                    }, t.prototype.resizeDrawingSurfaceToCanvas = function() {
                        if (this.canvas instanceof HTMLCanvasElement && window) {
                            var t = this.canvas.getBoundingClientRect(),
                                e = t.width,
                                n = t.height,
                                r = window.devicePixelRatio || 1;
                            this.canvas.width = r * e, this.canvas.height = r * n, this.startRendering(), this.resizeToCanvas()
                        }
                    }, Object.defineProperty(t.prototype, "source", {
                        get: function() {
                            return this.src
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "activeArtboard", {
                        get: function() {
                            return this.artboard ? this.artboard.name : ""
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "animationNames", {
                        get: function() {
                            if (!this.loaded) return [];
                            for (var t = [], e = 0; e < this.artboard.animationCount(); e++) t.push(this.artboard.animationByIndex(e).name);
                            return t
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "stateMachineNames", {
                        get: function() {
                            if (!this.loaded) return [];
                            for (var t = [], e = 0; e < this.artboard.stateMachineCount(); e++) t.push(this.artboard.stateMachineByIndex(e).name);
                            return t
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype.stateMachineInputs = function(t) {
                        if (this.loaded) {
                            var e = this.animator.stateMachines.find(function(e) {
                                return e.name === t
                            });
                            return null == e ? void 0 : e.inputs
                        }
                    }, Object.defineProperty(t.prototype, "playingStateMachineNames", {
                        get: function() {
                            return this.loaded ? this.animator.stateMachines.filter(function(t) {
                                return t.playing
                            }).map(function(t) {
                                return t.name
                            }) : []
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "playingAnimationNames", {
                        get: function() {
                            return this.loaded ? this.animator.animations.filter(function(t) {
                                return t.playing
                            }).map(function(t) {
                                return t.name
                            }) : []
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "pausedAnimationNames", {
                        get: function() {
                            return this.loaded ? this.animator.animations.filter(function(t) {
                                return !t.playing
                            }).map(function(t) {
                                return t.name
                            }) : []
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "pausedStateMachineNames", {
                        get: function() {
                            return this.loaded ? this.animator.stateMachines.filter(function(t) {
                                return !t.playing
                            }).map(function(t) {
                                return t.name
                            }) : []
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isPlaying", {
                        get: function() {
                            return this.animator.isPlaying
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isPaused", {
                        get: function() {
                            return this.animator.isPaused
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "isStopped", {
                        get: function() {
                            return this.animator.isStopped
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "bounds", {
                        get: function() {
                            return this.artboard ? this.artboard.bounds : void 0
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype.on = function(t, e) {
                        this.eventManager.add({
                            type: t,
                            callback: e
                        })
                    }, t.prototype.unsubscribe = function(t, e) {
                        this.eventManager.remove({
                            type: t,
                            callback: e
                        })
                    }, t.prototype.unsubscribeAll = function(t) {
                        this.eventManager.removeAll(t)
                    }, t.prototype.stopRendering = function() {
                        this.loaded && this.frameRequestId && (this.runtime.cancelAnimationFrame ? this.runtime.cancelAnimationFrame(this.frameRequestId) : cancelAnimationFrame(this.frameRequestId), this.frameRequestId = null)
                    }, t.prototype.startRendering = function() {
                        this.loaded && this.artboard && !this.frameRequestId && (this.runtime.requestAnimationFrame ? this.frameRequestId = this.runtime.requestAnimationFrame(this.draw.bind(this)) : this.frameRequestId = requestAnimationFrame(this.draw.bind(this)))
                    }, t.prototype.enableFPSCounter = function(t) {
                        this.runtime.enableFPSCounter(t)
                    }, t.prototype.disableFPSCounter = function() {
                        this.runtime.disableFPSCounter()
                    }, Object.defineProperty(t.prototype, "contents", {
                        get: function() {
                            if (this.loaded) {
                                for (var t = {
                                        artboards: []
                                    }, e = 0; e < this.file.artboardCount(); e++) {
                                    for (var n = this.file.artboardByIndex(e), r = {
                                            name: n.name,
                                            animations: [],
                                            stateMachines: []
                                        }, i = 0; i < n.animationCount(); i++) {
                                        var a = n.animationByIndex(i);
                                        r.animations.push(a.name)
                                    }
                                    for (var o = 0; o < n.stateMachineCount(); o++) {
                                        for (var s = n.stateMachineByIndex(o), u = s.name, c = new this.runtime.StateMachineInstance(s, n), l = [], h = 0; h < c.inputCount(); h++) {
                                            var f = c.input(h);
                                            l.push({
                                                name: f.name,
                                                type: f.type
                                            })
                                        }
                                        r.stateMachines.push({
                                            name: u,
                                            inputs: l
                                        })
                                    }
                                    t.artboards.push(r)
                                }
                                return t
                            }
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.missingErrorMessage = "Rive source file or data buffer required", t
                }(), A = function(t) {
                    return u(void 0, void 0, void 0, function() {
                        var e;
                        return c(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return e = new Request(t), [4, fetch(e)];
                                case 1:
                                    return [4, n.sent().arrayBuffer()];
                                case 2:
                                    return [2, n.sent()]
                            }
                        })
                    })
                }, E = function(t) {
                    return "string" == typeof t ? [t] : t instanceof Array ? t : []
                }, C = {
                    EventManager: T,
                    TaskQueueManager: P
                }, L
            })()
        }
    }
]);