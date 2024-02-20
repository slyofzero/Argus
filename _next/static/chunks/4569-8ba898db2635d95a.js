(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4569], {
        2139: function(e, n, t) {
            "use strict";
            t.d(n, {
                $: function() {
                    return y
                }
            });
            var i = t(1527),
                r = t(8166),
                s = t(654),
                a = t(5924),
                o = t(6966),
                c = t(8782),
                l = t(5863),
                u = t(1677),
                d = t(5481),
                f = t(2435),
                h = t(3100),
                m = t.n(h),
                p = t(4832),
                v = t.n(p);
            let g = m()(() => t.e(5679).then(t.bind(t, 5679)), {
                    loadableGenerated: {
                        webpack: () => [5679]
                    },
                    ssr: !1
                }),
                x = m()(() => t.e(8824).then(t.bind(t, 3311)), {
                    loadableGenerated: {
                        webpack: () => [3311]
                    },
                    ssr: !1
                });

            function y(e) {
                let {
                    data: n
                } = e, t = (0, s.ac)("(min-width: 800px)"), {
                    setRef: h
                } = (0, f.oc)({
                    id: "footer"
                });
                return (0, i.jsxs)("footer", {
                    className: (0, a.Z)(v().footer),
                    ...(0, r.LF)(n),
                    ref: h,
                    children: [(0, i.jsx)(u.I, {
                        src: "noprecache/textures/crosshair.svg",
                        theatreKey: "footer / crosshair-0",
                        className: v().corner
                    }), (0, i.jsx)(u.I, {
                        src: "noprecache/textures/crosshair.svg",
                        theatreKey: "footer / crosshair-1",
                        className: v().corner,
                        scale: [-1, 1, 1]
                    }), (0, i.jsx)(u.I, {
                        src: "noprecache/textures/crosshair.svg",
                        theatreKey: "footer / crosshair-2",
                        className: v().corner,
                        scale: [1, -1, 1]
                    }), (0, i.jsx)(u.I, {
                        src: "noprecache/textures/crosshair.svg",
                        theatreKey: "footer / crosshair-3",
                        className: v().corner,
                        scale: [-1, -1, 1]
                    }), (0, i.jsx)(u.I, {
                        src: "noprecache/textures/arc.svg",
                        theatreKey: "footer / arc",
                        className: v().arc,
                        spin: !0
                    }), (0, i.jsx)(u.I, {
                        src: "noprecache/textures/star.svg",
                        theatreKey: "footer / star",
                        className: v().star,
                        scale: [1, -1, 1]
                    }), (0, i.jsx)("div", {
                        className: (0, a.Z)(v()["arc-mobile"], "hide-on-desktop"),
                        children: (0, i.jsx)(x, {})
                    }), (0, i.jsxs)("div", {
                        className: v().content,
                        children: [(0, i.jsx)("div", {
                            className: v().logo,
                            children: (0, i.jsx)(g, {})
                        }), (0, i.jsx)("p", {
                            className: "h4",
                            children: n.subtitle
                        })]
                    }), (0, i.jsxs)("div", {
                        className: (0, a.Z)(v().inner, "layout-grid-inner"),
                        children: [(0, i.jsxs)("p", {
                            className: (0, a.Z)(v().copyright, "p-xs hide-on-mobile"),
                            children: ["\xa9 ", new Date().getFullYear()]
                        }), (0, i.jsx)(d.O, {
                            duration: 20,
                            className: (0, a.Z)(v().marquee, "p-xs"),
                            children: n.verticalMarquee
                        }), (0, i.jsx)(l.z, {
                            className: v().image,
                            type: 0,
                            children: (0, i.jsx)("div", {
                                className: v().container,
                                children: (0, i.jsx)(o.E, {
                                    fill: !0,
                                    sizes: "(max-width:800px) 83vw, 13vw",
                                    alt: n.image.alt || "",
                                    src: n.image.filename
                                })
                            })
                        }), !0 === t ? (0, i.jsx)("ul", {
                            className: v().ctas,
                            children: n.links.map((e, n) => {
                                let {
                                    text: t,
                                    url: r
                                } = e;
                                return (0, i.jsx)("li", {
                                    className: "p-xs",
                                    children: (0, i.jsx)(c.r, {
                                        href: r,
                                        children: (0, i.jsx)("span", {
                                            className: "link",
                                            children: t
                                        })
                                    })
                                }, n)
                            })
                        }) : (0, i.jsxs)("div", {
                            className: (0, a.Z)("layout-grid", v().ctas),
                            children: [(0, i.jsxs)("ul", {
                                className: v().left,
                                children: [(0, i.jsxs)("li", {
                                    className: (0, a.Z)(v().copyright, "p-xs hide-on-desktop"),
                                    children: ["\xa9 ", new Date().getFullYear()]
                                }), n.links.slice(6).map((e, n) => {
                                    let {
                                        text: t,
                                        url: r
                                    } = e;
                                    return (0, i.jsx)("li", {
                                        className: "p-xs",
                                        children: (0, i.jsx)(c.r, {
                                            href: r,
                                            children: (0, i.jsx)("span", {
                                                className: "link",
                                                children: t
                                            })
                                        })
                                    }, n)
                                })]
                            }), (0, i.jsx)("ul", {
                                className: v().left,
                                children: n.links.slice(0, 6).map((e, n) => {
                                    let {
                                        text: t,
                                        url: r
                                    } = e;
                                    return (0, i.jsx)("li", {
                                        className: "p-xs",
                                        children: (0, i.jsx)(c.r, {
                                            href: r,
                                            children: (0, i.jsx)("span", {
                                                className: "link",
                                                children: t
                                            })
                                        })
                                    }, n)
                                })
                            })]
                        })]
                    })]
                })
            }
        },
        6966: function(e, n, t) {
            "use strict";
            t.d(n, {
                E: function() {
                    return u
                }
            });
            var i = t(1527),
                r = t(5924),
                s = t(8725),
                a = t.n(s),
                o = t(959),
                c = t(1951),
                l = t.n(c);
            let u = (0, o.forwardRef)(function(e, n) {
                let {
                    className: t,
                    style: s,
                    loading: o = "eager",
                    objectFit: c = "cover",
                    quality: u = 90,
                    alt: d = "",
                    ...f
                } = e;
                return (0, i.jsx)(a(), {
                    ref: n,
                    ...f,
                    className: (0, r.Z)(l().image, t),
                    style: {
                        objectFit: c,
                        ...s
                    },
                    loading: o,
                    quality: u,
                    alt: d
                })
            })
        },
        2197: function(e, n, t) {
            "use strict";
            t.d(n, {
                q: function() {
                    return r
                }
            });
            var i = t(959);

            function r(e) {
                let {
                    children: n
                } = e, [t, r] = (0, i.useState)(!1);
                return ((0, i.useEffect)(() => r(!0), []), t) ? n : null
            }
        },
        8782: function(e, n, t) {
            "use strict";
            t.d(n, {
                r: function() {
                    return c
                }
            });
            var i = t(1527),
                r = t(3150),
                s = t.n(r),
                a = t(959);
            let o = ["?demo=true"],
                c = (0, a.forwardRef)((e, n) => {
                    let {
                        href: t,
                        children: r,
                        className: a,
                        shallow: c,
                        ...l
                    } = e, u = {
                        ref: n,
                        className: a,
                        ...l
                    }, d = (null == t ? void 0 : t.startsWith("mailto:")) || (null == t ? void 0 : t.startsWith("tel:")), f = !!o.find(e => null == t ? void 0 : t.includes(e)), h = null == t ? void 0 : t.startsWith("http");
                    return "string" != typeof t ? (0, i.jsx)("button", { ...u,
                        children: r
                    }) : (0, i.jsx)(s(), {
                        href: t,
                        shallow: f || c,
                        ...d || h ? {
                            target: "_blank",
                            rel: "noopener noreferrer"
                        } : {},
                        ...u,
                        children: r
                    })
                });
            c.displayName = "Link"
        },
        5863: function(e, n, t) {
            "use strict";
            t.d(n, {
                z: function() {
                    return u
                }
            });
            var i = t(1527),
                r = t(654),
                s = t(5924),
                a = t(2044),
                o = t(959),
                c = t(7816),
                l = t.n(c);
            let u = (0, o.forwardRef)(function(e, n) {
                    let {
                        children: t,
                        className: c,
                        id: u = "",
                        type: h = 0,
                        animateIn: m = !1,
                        maskOptions: p = {
                            startAt: 0,
                            duration: 2
                        }
                    } = e, v = (0, r.ac)("(min-width: 800px)"), [g, x] = (0, o.useState)(), [y, w] = (0, o.useState)(), _ = (0, o.useCallback)(() => {
                        let e = v ? d : f;
                        return "".concat(e[h].width, " / ").concat(e[h].height)
                    }, [v]);
                    return (0, o.useImperativeHandle)(n, () => y, [y]), (0, o.useEffect)(() => {
                        if (!g || !m || !v) return;
                        let e = a.ZP.timeline({
                                id: null != u ? u : null,
                                paused: !0
                            }),
                            n = a.ZP.from(g, {
                                duration: p.duration,
                                maskSize: "0%",
                                ease: "none"
                            });
                        return e.add(n, p.startAt), e.pause(), w(e), () => {
                            e.kill()
                        }
                    }, [g, v]), (0, o.useEffect)(() => {
                        v || a.ZP.set(g, {
                            maskSize: "100%"
                        })
                    }, [v]), (0, i.jsx)("div", {
                        className: c,
                        children: (0, i.jsx)("div", {
                            style: {
                                aspectRatio: _(h)
                            },
                            className: (0, s.Z)(l().mask, l()["mask--".concat(h)]),
                            ref: e => {
                                x(e)
                            },
                            children: t
                        })
                    })
                }),
                d = [{
                    width: 185,
                    height: 90
                }, {
                    width: 124,
                    height: 124
                }, {
                    width: 187,
                    height: 187
                }, {
                    width: 296,
                    height: 196
                }, {
                    width: 296,
                    height: 296
                }, {
                    width: 296,
                    height: 360
                }, {
                    width: 515,
                    height: 315
                }],
                f = [{
                    width: 311,
                    height: 150
                }, {
                    width: 1,
                    height: 1
                }, {
                    width: 1,
                    height: 1
                }, {
                    width: 117,
                    height: 78
                }, {
                    width: 311,
                    height: 243
                }, {
                    width: 229,
                    height: 278
                }, {
                    width: 229,
                    height: 148
                }]
        },
        1677: function(e, n, t) {
            "use strict";
            t.d(n, {
                I: function() {
                    return h
                }
            });
            var i = t(1527),
                r = t(654),
                s = t(8824),
                a = t(2197),
                o = t(9703),
                c = t(7794),
                l = t(9910),
                u = t(2242),
                d = t(9176),
                f = t(959);

            function h(e) {
                let {
                    src: n,
                    theatreKey: t,
                    className: h,
                    scale: m = [1, 1, 1],
                    rotation: p = [0, 0, 0],
                    spin: v = !1
                } = e, g = (0, r.ac)("(min-width: 800px)"), [x, y] = (0, r.EL)(), w = (0, f.useRef)(), {
                    width: _,
                    height: S
                } = (0, u.i)(), [b, j] = (0, l.s)({
                    lazy: !0,
                    callback: e => {
                        w.current && (w.current.visible = e)
                    }
                }), E = () => {
                    if (w.current) {
                        let e = b();
                        w.current.visible = e
                    }
                }, z = (0, f.useCallback)(e => {
                    if (!w.current) return;
                    let n = b();
                    n && (w.current.scale.set(y.width * m[0], y.height * m[1], m[2]), w.current.position.y = -y.top + S / 2 - y.height / 2 + e, w.current.position.x = -_ / 2 + y.left + y.width / 2, v || w.current.rotation.set(p[0], p[1], p[2]), w.current.updateMatrix())
                }, [m, p, v, y, _, S]), U = (0, s.LZ)(e => {
                    let {
                        scroll: n
                    } = e;
                    z(n)
                }, [z], 1);
                (0, r.xQ)((e, n) => {
                    v && w.current && (w.current.rotation.z += 5e-5 * n, w.current.rotation.z %= Math.PI / 8, w.current.updateMatrix())
                });
                let k = (0, d.st)();
                return (0, i.jsx)("div", {
                    className: h,
                    ref: e => {
                        x(e), j(e)
                    },
                    children: !0 === g && (0, i.jsx)(a.q, {
                        children: (0, i.jsx)(c.S.In, {
                            children: (0, i.jsx)(d.yR, {
                                id: null == k ? void 0 : k.address.sheetId,
                                children: (0, i.jsx)("group", {
                                    ref: e => {
                                        w.current = e, E(), z(U.scroll)
                                    },
                                    matrixAutoUpdate: !1,
                                    children: (0, i.jsx)(o.y, {
                                        src: n,
                                        theatreKey: t,
                                        square: !1,
                                        dom: !0
                                    })
                                })
                            }, t)
                        })
                    })
                })
            }
        },
        5481: function(e, n, t) {
            "use strict";
            t.d(n, {
                O: function() {
                    return u
                }
            });
            var i = t(1527),
                r = t(654),
                s = t(5924),
                a = t(9910),
                o = t(959),
                c = t(4479),
                l = t.n(c);
            let u = e => {
                let {
                    children: n,
                    repeat: t = 2,
                    duration: c = 5,
                    inverted: u = !1,
                    className: d,
                    visible: f = !0,
                    ...h
                } = e, m = (0, o.useRef)(), [p, v] = (0, a.s)(), g = (0, o.useRef)([]), x = (0, o.useRef)(0);
                return (0, r.xQ)((e, n) => {
                    if (!p || !f) return;
                    let t = n * (1 / c) * .1;
                    u ? x.current -= t : x.current += t, Math.abs(x.current) >= 100 && (x.current = 0);
                    let i = x.current;
                    u && (i += 100), g.current.forEach(e => {
                        e.style.transform = "translate3d(0,".concat(-i, "%,0)")
                    })
                }), (0, i.jsx)("div", {
                    ref: e => {
                        m.current = e, v(e)
                    },
                    ...h,
                    className: (0, s.Z)(d, l().marquee, u && l().inverted),
                    children: Array(t).fill(n).map((e, t) => (0, i.jsx)("div", {
                        className: l().inner,
                        ref: e => {
                            g.current[t] = e
                        },
                        children: n
                    }, t))
                })
            }
        },
        9703: function(e, n, t) {
            "use strict";
            t.d(n, {
                y: function() {
                    return y
                }
            });
            var i = t(1527),
                r = t(6930),
                s = t(4381),
                a = t(7345),
                o = t(5474),
                c = t(959),
                l = t(688),
                u = t(6734),
                d = t(9176),
                f = t(2717),
                h = t(5217),
                m = t(1018),
                p = t(4730),
                v = t(1460);
            l.UniformsLib.line = {
                progress: {
                    value: 1
                },
                invertedProgress: {
                    value: !1
                },
                length: {
                    value: 1
                },
                worldUnits: {
                    value: 1
                },
                linewidth: {
                    value: 1
                },
                resolution: {
                    value: new l.Vector2(1, 1)
                },
                dashOffset: {
                    value: 0
                },
                dashScale: {
                    value: 1
                },
                dashSize: {
                    value: 1
                },
                gapSize: {
                    value: 1
                }
            }, l.ShaderLib.line = {
                uniforms: l.UniformsUtils.merge([l.UniformsLib.common, l.UniformsLib.fog, l.UniformsLib.line]),
                vertexShader: "\n		#include <common>\n\n		uniform float linewidth;\n		uniform vec2 resolution;\n\n		attribute vec3 instanceStart;\n		attribute vec3 instanceEnd;\n\n		attribute vec3 instanceColorStart;\n		attribute vec3 instanceColorEnd;\n\n		#ifdef WORLD_UNITS\n\n			varying vec4 worldPos;\n			varying vec3 worldStart;\n			varying vec3 worldEnd;\n\n			#ifdef USE_DASH\n\n				varying vec2 vUv;\n\n			#endif\n\n		#else\n\n			varying vec2 vUv;\n\n		#endif\n\n        attribute float instanceDistanceStart;\n		attribute float instanceDistanceEnd;\n\n		#ifdef USE_DASH\n\n			uniform float dashScale;\n			varying float vLineDistance;\n\n		#endif\n\n		void trimSegment( const in vec4 start, inout vec4 end ) {\n\n			// trim end segment so it terminates between the camera plane and the near plane\n\n			// conservative estimate of the near plane\n			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column\n			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column\n			float nearEstimate = - 0.5 * b / a;\n\n			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );\n\n			end.xyz = mix( start.xyz, end.xyz, alpha );\n\n		}\n\n        uniform float length;\n        varying float normalizedPosition;\n        \n\n		void main() {\n\n			#ifdef USE_COLOR\n\n				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;\n\n			#endif\n\n			#ifdef USE_DASH\n\n				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;\n				vUv = uv;\n\n			#endif\n\n            normalizedPosition = ( position.y < 0.5 ) ? instanceDistanceStart : instanceDistanceEnd;\n            normalizedPosition /= length;\n			float aspect = resolution.x / resolution.y;\n\n			// camera space\n			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );\n			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );\n\n			#ifdef WORLD_UNITS\n\n				worldStart = start.xyz;\n				worldEnd = end.xyz;\n\n			#else\n\n				vUv = uv;\n\n			#endif\n\n			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane\n			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space\n			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly\n			// perhaps there is a more elegant solution -- WestLangley\n\n			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column\n\n			if ( perspective ) {\n\n				if ( start.z < 0.0 && end.z >= 0.0 ) {\n\n					trimSegment( start, end );\n\n				} else if ( end.z < 0.0 && start.z >= 0.0 ) {\n\n					trimSegment( end, start );\n\n				}\n\n			}\n\n			// clip space\n			vec4 clipStart = projectionMatrix * start;\n			vec4 clipEnd = projectionMatrix * end;\n\n			// ndc space\n			vec3 ndcStart = clipStart.xyz / clipStart.w;\n			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;\n\n			// direction\n			vec2 dir = ndcEnd.xy - ndcStart.xy;\n\n			// account for clip-space aspect ratio\n			dir.x *= aspect;\n			dir = normalize( dir );\n\n			#ifdef WORLD_UNITS\n\n				// get the offset direction as perpendicular to the view vector\n				vec3 worldDir = normalize( end.xyz - start.xyz );\n				vec3 offset;\n				if ( position.y < 0.5 ) {\n\n					offset = normalize( cross( start.xyz, worldDir ) );\n\n				} else {\n\n					offset = normalize( cross( end.xyz, worldDir ) );\n\n				}\n\n				// sign flip\n				if ( position.x < 0.0 ) offset *= - 1.0;\n\n				float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );\n\n				// don't extend the line if we're rendering dashes because we\n				// won't be rendering the endcaps\n				#ifndef USE_DASH\n\n					// extend the line bounds to encompass  endcaps\n					start.xyz += - worldDir * linewidth * 0.5;\n					end.xyz += worldDir * linewidth * 0.5;\n\n					// shift the position of the quad so it hugs the forward edge of the line\n					offset.xy -= dir * forwardOffset;\n					offset.z += 0.5;\n\n				#endif\n\n				// endcaps\n				if ( position.y > 1.0 || position.y < 0.0 ) {\n\n					offset.xy += dir * 2.0 * forwardOffset;\n\n				}\n\n				// adjust for linewidth\n				offset *= linewidth * 0.5;\n\n				// set the world position\n				worldPos = ( position.y < 0.5 ) ? start : end;\n				worldPos.xyz += offset;\n\n				// project the worldpos\n				vec4 clip = projectionMatrix * worldPos;\n\n				// shift the depth of the projected points so the line\n				// segments overlap neatly\n				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;\n				clip.z = clipPose.z * clip.w;\n\n			#else\n\n				vec2 offset = vec2( dir.y, - dir.x );\n				// undo aspect ratio adjustment\n				dir.x /= aspect;\n				offset.x /= aspect;\n\n				// sign flip\n				if ( position.x < 0.0 ) offset *= - 1.0;\n\n				// endcaps\n				if ( position.y < 0.0 ) {\n\n					offset += - dir;\n\n				} else if ( position.y > 1.0 ) {\n\n					offset += dir;\n\n				}\n\n				// adjust for linewidth\n				offset *= linewidth;\n\n				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...\n				offset /= resolution.y;\n\n				// select end\n				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;\n\n				// back to clip space\n				offset *= clip.w;\n\n				clip.xy += offset;\n\n			#endif\n\n			gl_Position = clip;\n\n			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation\n\n		}\n		",
                fragmentShader: "\n		uniform vec3 diffuse;\n		uniform float opacity;\n		uniform float linewidth;\n\n		#ifdef USE_DASH\n\n			uniform float dashOffset;\n			uniform float dashSize;\n			uniform float gapSize;\n\n		#endif\n\n        varying float vInstanceDistanceStart;\n        varying float vInstanceDistanceEnd;\n		varying float vLineDistance;\n\n		#ifdef WORLD_UNITS\n\n			varying vec4 worldPos;\n			varying vec3 worldStart;\n			varying vec3 worldEnd;\n\n			#ifdef USE_DASH\n\n				varying vec2 vUv;\n\n			#endif\n\n		#else\n\n			varying vec2 vUv;\n\n		#endif\n\n		#include <common>\n\n		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {\n\n			float mua;\n			float mub;\n\n			vec3 p13 = p1 - p3;\n			vec3 p43 = p4 - p3;\n\n			vec3 p21 = p2 - p1;\n\n			float d1343 = dot( p13, p43 );\n			float d4321 = dot( p43, p21 );\n			float d1321 = dot( p13, p21 );\n			float d4343 = dot( p43, p43 );\n			float d2121 = dot( p21, p21 );\n\n			float denom = d2121 * d4343 - d4321 * d4321;\n\n			float numer = d1343 * d4321 - d1321 * d4343;\n\n			mua = numer / denom;\n			mua = clamp( mua, 0.0, 1.0 );\n			mub = ( d1343 + d4321 * ( mua ) ) / d4343;\n			mub = clamp( mub, 0.0, 1.0 );\n\n			return vec2( mua, mub );\n\n		}\n\n        varying float normalizedPosition;\n        uniform float progress;\n        uniform bool invertedProgress;\n        \n		void main() {\n\n            if(invertedProgress) {\n                if(normalizedPosition < 1. - progress) discard;\n            } else {\n                if(normalizedPosition > progress) discard;\n            }\n\n\n			float alpha = opacity;\n\n\n\n			vec4 diffuseColor = vec4( diffuse, alpha );\n\n\n			gl_FragColor = vec4( diffuseColor.rgb, alpha );\n\n		}\n		"
            };
            class g extends l.ShaderMaterial {
                constructor(e) {
                    super({
                        type: "LineMaterial",
                        uniforms: l.UniformsUtils.clone(l.ShaderLib.line.uniforms),
                        vertexShader: l.ShaderLib.line.vertexShader,
                        fragmentShader: l.ShaderLib.line.fragmentShader,
                        clipping: !1,
                        transparent: !0,
                        side: l.DoubleSide
                    }), this.isLineMaterial = !0, Object.defineProperties(this, {
                        color: {
                            enumerable: !0,
                            get: function() {
                                return this.uniforms.diffuse.value
                            },
                            set: function(e) {
                                this.uniforms.diffuse.value = e
                            }
                        },
                        worldUnits: {
                            enumerable: !0,
                            get: function() {
                                return "WORLD_UNITS" in this.defines
                            },
                            set: function(e) {
                                !0 === e ? this.defines.WORLD_UNITS = "" : delete this.defines.WORLD_UNITS
                            }
                        },
                        linewidth: {
                            enumerable: !0,
                            get: function() {
                                return this.uniforms.linewidth.value
                            },
                            set: function(e) {
                                this.uniforms.linewidth.value = e
                            }
                        },
                        dashed: {
                            enumerable: !0,
                            get: function() {
                                return "USE_DASH" in this.defines
                            },
                            set(e) {
                                !!e != "USE_DASH" in this.defines && (this.needsUpdate = !0), !0 === e ? this.defines.USE_DASH = "" : delete this.defines.USE_DASH
                            }
                        },
                        dashScale: {
                            enumerable: !0,
                            get: function() {
                                return this.uniforms.dashScale.value
                            },
                            set: function(e) {
                                this.uniforms.dashScale.value = e
                            }
                        },
                        dashSize: {
                            enumerable: !0,
                            get: function() {
                                return this.uniforms.dashSize.value
                            },
                            set: function(e) {
                                this.uniforms.dashSize.value = e
                            }
                        },
                        dashOffset: {
                            enumerable: !0,
                            get: function() {
                                return this.uniforms.dashOffset.value
                            },
                            set: function(e) {
                                this.uniforms.dashOffset.value = e
                            }
                        },
                        gapSize: {
                            enumerable: !0,
                            get: function() {
                                return this.uniforms.gapSize.value
                            },
                            set: function(e) {
                                this.uniforms.gapSize.value = e
                            }
                        },
                        opacity: {
                            enumerable: !0,
                            get: function() {
                                return this.uniforms.opacity.value
                            },
                            set: function(e) {
                                this.uniforms.opacity.value = e
                            }
                        },
                        resolution: {
                            enumerable: !0,
                            get: function() {
                                return this.uniforms.resolution.value
                            },
                            set: function(e) {
                                this.uniforms.resolution.value.copy(e)
                            }
                        },
                        alphaToCoverage: {
                            enumerable: !0,
                            get: function() {
                                return "USE_ALPHA_TO_COVERAGE" in this.defines
                            },
                            set: function(e) {
                                !!e != "USE_ALPHA_TO_COVERAGE" in this.defines && (this.needsUpdate = !0), !0 === e ? (this.defines.USE_ALPHA_TO_COVERAGE = "", this.extensions.derivatives = !0) : (delete this.defines.USE_ALPHA_TO_COVERAGE, this.extensions.derivatives = !1)
                            }
                        }
                    }), this.alphaToCoverage = !0, this.setValues(e)
                }
            }
            let x = (0, c.forwardRef)(function(e, n) {
                let {
                    theatreKey: t,
                    points: r,
                    color: a = "black",
                    vertexColors: o,
                    linewidth: x,
                    lineWidth: y,
                    segments: w,
                    dashed: _,
                    dom: S = !1,
                    ...b
                } = e, j = (0, s.z)(e => e.size), E = (0, c.useMemo)(() => w ? new h.w : new m.w, [w]), [z] = (0, c.useState)(() => new g), U = (0, d.st)();
                (0, f.w)(U, S ? t : t + " / material", {
                    progress: u.types.number(1, {
                        range: [0, 1],
                        nudgeMultiplier: .01
                    }),
                    inverted: !1
                }, e => {
                    let {
                        progress: n,
                        inverted: t
                    } = e;
                    z.uniforms.progress.value = n, z.uniforms.invertedProgress.value = t, E.visible = n > 0
                }, [E, z]);
                let k = (0, c.useMemo)(() => {
                    let e = w ? new p.z : new v.L,
                        n = r.map(e => {
                            let n = Array.isArray(e);
                            return e instanceof l.Vector3 ? [e.x, e.y, e.z] : e instanceof l.Vector2 ? [e.x, e.y, 0] : n && 3 === e.length ? [e[0], e[1], e[2]] : n && 2 === e.length ? [e[0], e[1], 0] : e
                        });
                    e.setPositions(n.flat());
                    let t = new l.BufferAttribute(new Float32Array(e.index.count / 3), 1);
                    e.setAttribute("index", t);
                    for (let e = 0; e < t.count; e++) t.array[e] = Math.random();
                    if (t.needsUpdate = !0, o) {
                        let n = o.map(e => e instanceof l.Color ? e.toArray() : e);
                        e.setColors(n.flat())
                    }
                    return e
                }, [r, w, o]);
                return (0, c.useLayoutEffect)(() => {
                    E.computeLineDistances();
                    let e = E.geometry.attributes.instanceDistanceStart.array,
                        n = e[e.length - 1];
                    z.uniforms.length.value = n
                }, [r, E, z]), (0, c.useLayoutEffect)(() => {
                    _ ? z.defines.USE_DASH = "" : delete z.defines.USE_DASH, z.needsUpdate = !0
                }, [_, z]), (0, c.useEffect)(() => () => k.dispose(), [k]), (0, c.useEffect)(() => {
                    E.name = t
                }, [t]), (0, i.jsxs)("primitive", {
                    object: E,
                    ref: n,
                    ...b,
                    matrixAutoUpdate: !1,
                    children: [(0, i.jsx)("primitive", {
                        object: k,
                        attach: "geometry"
                    }), (0, i.jsx)("primitive", {
                        object: z,
                        attach: "material",
                        color: a,
                        vertexColors: !!o,
                        resolution: [j.width, j.height],
                        linewidth: null != x ? x : y,
                        dashed: _,
                        ...b
                    })]
                })
            });

            function y(e) {
                var n, t, u, d, f, h;
                let {
                    src: m,
                    theatreKey: p,
                    children: v,
                    square: g = !0,
                    dom: y = !1
                } = e, w = function(e) {
                    let n = (0, s.D)(a.u, e);
                    return n
                }(m), _ = null == w ? void 0 : null === (n = w.xml) || void 0 === n ? void 0 : null === (t = n.width) || void 0 === t ? void 0 : null === (u = t.animVal) || void 0 === u ? void 0 : u.value, S = null == w ? void 0 : null === (d = w.xml) || void 0 === d ? void 0 : null === (f = d.height) || void 0 === f ? void 0 : null === (h = f.animVal) || void 0 === h ? void 0 : h.value, b = (0, c.useRef)(), j = (0, c.useRef)();
                (0, c.useEffect)(() => {
                    j.current.position.set(-_ / 2, -S / 2, 0), j.current.updateMatrix(), g ? b.current.scale.setScalar(1 / S) : b.current.scale.set(1 / _, 1 / S, 1), b.current.rotation.set(0, Math.PI, Math.PI), b.current.updateMatrix()
                }, [_, S, g]);
                let {
                    color: E,
                    lineWidth: z
                } = (0, r.F)(), U = (0, c.useMemo)(() => new l.Color(null == E ? void 0 : E.slice(0, 7)).convertLinearToSRGB(), [E]);
                return (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsxs)(o.Z, {
                        theatreKey: p,
                        children: [v, (0, i.jsx)("group", {
                            ref: b,
                            matrixAutoUpdate: !1,
                            children: (0, i.jsx)("group", {
                                ref: j,
                                matrixAutoUpdate: !1,
                                children: w.paths.map((e, n) => (0, i.jsx)(c.Fragment, {
                                    children: e.subPaths.map((e, t) => (0, i.jsx)(x, {
                                        theatreKey: y ? p + " / path-".concat(n) : p + " / ".concat(p.split("/").slice(-1)[0], "-").concat(n),
                                        points: e.getPoints(),
                                        lineWidth: z,
                                        color: U,
                                        dom: y
                                    }, t))
                                }, n))
                            })
                        })]
                    })
                })
            }
        },
        7794: function(e, n, t) {
            "use strict";
            t.d(n, {
                S: function() {
                    return r
                }
            });
            var i = t(6042);
            let r = new i.Z
        },
        9910: function(e, n, t) {
            "use strict";
            t.d(n, {
                s: function() {
                    return r
                }
            });
            var i = t(959);

            function r() {
                let {
                    root: e = null,
                    rootMargin: n = "0px",
                    threshold: t = 0,
                    once: r = !1,
                    lazy: s = !1,
                    callback: a = () => {}
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, o = (0, i.useRef)(!1), [c, l] = (0, i.useState)(!1), [u, d] = (0, i.useState)();
                (0, i.useEffect)(() => {
                    if (!u) return;
                    let i = new IntersectionObserver(e => {
                        let [{
                            isIntersecting: n
                        }] = e;
                        s ? o.current = n : l(n), a(n), r && i.disconnect()
                    }, {
                        root: e,
                        rootMargin: n,
                        threshold: t
                    });
                    return i.observe(u), () => {
                        i.disconnect()
                    }
                }, [u, e, n, t, s, r, a.toString()]);
                let f = (0, i.useCallback)(() => o.current, []);
                return [s ? f : c, d]
            }
        },
        2435: function(e, n, t) {
            "use strict";
            t.d(n, {
                lG: function() {
                    return u
                },
                oc: function() {
                    return d
                }
            });
            var i = t(654),
                r = t(8824),
                s = t(2242),
                a = t(1662),
                o = t(959),
                c = t(8063);
            let l = (0, c.Ue)(() => ({
                    spySections: []
                })),
                u = e => {
                    let {
                        callback: n = () => {},
                        deps: t = []
                    } = e;
                    (0, o.useEffect)(() => {
                        let e = l.subscribe(e => {
                            let {
                                spySections: t
                            } = e;
                            n(t)
                        });
                        return () => e
                    }, [n, ...t])
                },
                d = e => {
                    let {
                        id: n = ""
                    } = e, t = (0, i.ac)("(min-width: 800px)"), c = (0, i.ac)("(max-width: 800px)"), [u, d] = (0, i.EL)(), {
                        height: f
                    } = (0, s.i)();
                    return (0, o.useEffect)(() => {
                        let e = l.getState().spySections;
                        e.find(e => e.id === n) || l.setState({
                            spySections: [...e, {
                                id: n,
                                inView: !1
                            }]
                        })
                    }, []), (0, r.LZ)(e => {
                        let {
                            scroll: t
                        } = e, i = (t - (d.top - .5 * f)) / d.height;
                        if ((i = (0, a.uZ)(0, i, 1)) <= 0 || i >= 1 || !i) return;
                        let r = l.getState().spySections;
                        r.find(e => e.id === n).inView || l.setState({
                            spySections: r.map(e => ({
                                id: e.id,
                                inView: e.id === n
                            }))
                        })
                    }, [d, t, c]), {
                        setRef: u
                    }
                }
        },
        6235: function(e, n, t) {
            "use strict";
            t.d(n, {
                P: function() {
                    return c
                }
            });
            var i = t(8166),
                r = t(959);
            let s = (e, n) => e.reduce((e, t) => ({ ...e,
                    [t[n]]: t.content
                }), {}),
                a = (e, n) => (e => {
                    let {
                        key: n,
                        ...t
                    } = e;
                    return { ...t
                    }
                })(e),
                o = e => {
                    if (e.content.body) {
                        let n = e.content.body.map(e => ({
                            component: e.component,
                            content: { ...a(e, e.component)
                            }
                        }));
                        return s(n, "component")
                    }
                    return e.content
                };

            function c(e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    t = (0, i.f0)(e, n),
                    [s, a] = (0, r.useState)(o(t));
                return (0, r.useEffect)(() => {
                    t.content && a(o(t))
                }, [t]), {
                    content: s,
                    id: t.id
                }
            }
        },
        2242: function(e, n, t) {
            "use strict";
            t.d(n, {
                i: function() {
                    return r
                }
            });
            var i = t(959);

            function r() {
                let [e, n] = (0, i.useState)(), [t, r] = (0, i.useState)();
                return (0, i.useEffect)(() => {
                    function e() {
                        n(Math.min(window.innerWidth, document.documentElement.clientWidth)), r(Math.min(window.innerHeight, document.documentElement.clientHeight))
                    }
                    return window.addEventListener("resize", e, !1), e(), () => window.removeEventListener("resize", e, !1)
                }, []), {
                    width: e,
                    height: t
                }
            }
        },
        1662: function(e, n, t) {
            "use strict";

            function i(e, n, t) {
                let i = Math.sign(e - n);
                return .5 * (e * (1 + i) + t * (1 - i))
            }

            function r(e, n, t) {
                let i = Math.sign(e - n);
                return .5 * (e * (1 - i) + t * (1 + i))
            }

            function s(e, n, t) {
                return Math.max(e, Math.min(n, t))
            }

            function a(e, n, t, i, r) {
                return (t - e) * (r - i) / (n - e) + i
            }
            t.d(n, {
                HK: function() {
                    return r
                },
                KK: function() {
                    return a
                },
                kx: function() {
                    return i
                },
                uZ: function() {
                    return s
                }
            })
        },
        5474: function(e, n, t) {
            "use strict";
            t.d(n, {
                Z: function() {
                    return c
                }
            });
            var i = t(1527),
                r = t(6734),
                s = t(959),
                a = t(9176),
                o = t(2717);

            function c(e) {
                let {
                    children: n,
                    theatreKey: t,
                    position: c = [0, 0, 0],
                    rotation: l = [0, 0, 0],
                    scale: u = [1, 1, 1]
                } = e, d = (0, s.useRef)(), f = (0, a.st)();
                return (0, o.w)(f, t, {
                    position: {
                        x: r.types.number(c[0], {
                            nudgeMultiplier: .01
                        }),
                        y: r.types.number(c[1], {
                            nudgeMultiplier: .01
                        }),
                        z: r.types.number(c[2], {
                            nudgeMultiplier: .01
                        })
                    },
                    rotation: {
                        x: r.types.number(l[0], {
                            nudgeMultiplier: .01
                        }),
                        y: r.types.number(l[1], {
                            nudgeMultiplier: .01
                        }),
                        z: r.types.number(l[2], {
                            nudgeMultiplier: .01
                        })
                    },
                    scale: {
                        x: r.types.number(u[0], {
                            nudgeMultiplier: .01
                        }),
                        y: r.types.number(u[1], {
                            nudgeMultiplier: .01
                        }),
                        z: r.types.number(u[2], {
                            nudgeMultiplier: .01
                        })
                    },
                    visible: !0
                }, e => {
                    let {
                        position: n,
                        rotation: t,
                        scale: i,
                        visible: r
                    } = e;
                    d.current && (d.current.visible = r, d.current.position.set(n.x, n.y, n.z), d.current.rotation.set(t.x, t.y, t.z), d.current.scale.set(i.x, i.y, i.z), d.current.updateMatrix())
                }), (0, i.jsx)("group", {
                    matrixAutoUpdate: !1,
                    ref: d,
                    children: n
                })
            }
        },
        4832: function(e) {
            e.exports = {
                footer: "footer_footer__LV2HF",
                arc: "footer_arc__f0C4W",
                "arc-mobile": "footer_arc-mobile__fyLPs",
                star: "footer_star__RNMMd",
                content: "footer_content__OVWMR",
                logo: "footer_logo__ElLXN",
                corner: "footer_corner__wCPzg",
                inner: "footer_inner__nOFwt",
                copyright: "footer_copyright__MtvHG",
                marquee: "footer_marquee__5jtbO",
                image: "footer_image__qtFUY",
                ctas: "footer_ctas__JiT5t",
                container: "footer_container__lKLmx",
                first: "footer_first__Bf6Q_",
                second: "footer_second__mvN42"
            }
        },
        1951: function() {},
        7816: function(e) {
            e.exports = {
                mask: "mask_mask__SbUJ2",
                "mask--0": "mask_mask--0__BodDC",
                "mask--1": "mask_mask--1____HHN",
                "mask--2": "mask_mask--2__p6TTc",
                "mask--3": "mask_mask--3__GjaUW",
                "mask--4": "mask_mask--4__NsELw",
                "mask--5": "mask_mask--5__qOrbZ",
                "mask--6": "mask_mask--6__ZAPxd"
            }
        },
        4479: function(e) {
            e.exports = {
                marquee: "vertical-marquee_marquee__UaTqn",
                inner: "vertical-marquee_inner__A_XBz"
            }
        }
    }
]);