"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [461], {
        461: function(e, n, t) {
            t.r(n), t.d(n, {
                WebGL: function() {
                    return P
                }
            });
            var r = t(1527),
                a = t(1785),
                i = t(4381),
                o = t(9703),
                c = t(6734),
                s = t(5051),
                l = t(959),
                u = t(1664),
                g = t(5823),
                f = t(48),
                v = t(9176),
                p = t(2717),
                x = t(5474),
                y = t(688);

            function m(e) {
                let {
                    theatreKey: n
                } = e, t = (0, v.st)(), a = (0, p.l)(t, n, {
                    radius: c.types.number(22, {
                        nudgeMultiplier: .01
                    })
                }), i = function(e, n) {
                    let t = (0, s.m)(e),
                        {
                            frames: r,
                            meta: a
                        } = function(e) {
                            let n = (0, u.Rq)(async () => {
                                let n = await fetch(e),
                                    t = await n.json();
                                return t
                            }, [e]);
                            return n
                        }(n),
                        i = (0, l.useMemo)(() => Object.fromEntries(Object.entries(r).map(e => {
                            let [n, {
                                frame: r
                            }] = e, i = t.clone();
                            return i.repeat.set(r.w / a.size.w, r.h / a.size.h), i.offset.x = r.x / a.size.w, i.offset.y = 1 - r.h / a.size.h - r.y / a.size.h, i.needsUpdate = !0, [n, i]
                        })), [r, a]);
                    return i
                }("/noprecache/textures/runes/runes-atlas.png", "/noprecache/textures/runes/runes-atlas.json");
                return (0, r.jsx)(r.Fragment, {
                    children: Array(8).fill(0).map((e, t) => (0, r.jsx)(d, {
                        index: t,
                        theatreKey: "".concat(n, " / rune-").concat(t),
                        runesTheatreObject: a,
                        texture: i["0" + (t + 1)]
                    }, t))
                })
            }

            function d(e) {
                let {
                    theatreKey: n,
                    runesTheatreObject: t,
                    index: a,
                    texture: i
                } = e, o = (0, l.useRef)(), s = (0, v.bV)();
                (0, l.useEffect)(() => {
                    if (!t) return;
                    let e = (0, c.onChange)(t.props, e => {
                        let {
                            radius: n
                        } = e;
                        o.current.position.x = Math.sin(a / 8 * Math.PI * 2) * n, o.current.position.y = Math.cos(a / 8 * Math.PI * 2) * n, o.current.updateMatrix()
                    }, s);
                    return () => {
                        e()
                    }
                }, [t, s, a]);
                let u = (0, g.j)(() => ({
                        uProgress: {
                            value: 0
                        },
                        uTime: {
                            value: Math.random()
                        }
                    })),
                    m = (0, g.j)(() => {
                        let e = new y.MeshBasicMaterial({
                            transparent: !0
                        });
                        return e.onBeforeCompile = e => {
                            e.uniforms = { ...e.uniforms,
                                ...u
                            }, e.defines = { ...e.defines,
                                USE_UV: ""
                            }, e.fragmentShader = e.fragmentShader.replace("void main() {", "\n        ".concat(f.KK, "\n        ").concat(f.qL, "\n        ").concat((0, f.k0)(4, "perlin3D"), "\n\n        uniform float uProgress;\n        uniform float uTime;\n\n        void main() {\n\n        float noise = fbm(vec3(vUv * 3., uProgress + uTime));\n        noise = mapRange(-0.6,0.6,noise,0.,1.);\n        if(noise > uProgress) discard;\n        "))
                        }, e
                    });
                (0, l.useEffect)(() => {
                    m.map = i, m.needsUpdate = !0
                }, [m, i]);
                let d = (0, v.st)();
                return (0, p.w)(d, "".concat(n, " / material"), {
                    opacity: c.types.number(1, {
                        range: [0, 1],
                        nudgeMultiplier: .01
                    }),
                    alpha: c.types.number(1, {
                        range: [0, 1],
                        nudgeMultiplier: .01
                    })
                }, e => {
                    let {
                        opacity: n,
                        alpha: t
                    } = e;
                    u.uProgress.value = n, m.opacity = t, o.current.visible = n > 0 && t > 0
                }), (0, r.jsx)("group", {
                    ref: o,
                    matrixAutoUpdate: !1,
                    children: (0, r.jsx)(x.Z, {
                        theatreKey: n,
                        children: (0, r.jsx)("mesh", {
                            matrixAutoUpdate: !1,
                            material: m,
                            children: (0, r.jsx)("planeGeometry", {})
                        })
                    })
                })
            }
            var h = t(1231);

            function z(e) {
                let {
                    theatreKey: n = "webgl / seed"
                } = e, t = (0, g.j)({
                    uFresnelPower: {
                        value: 1
                    },
                    uLines: {
                        value: .6
                    },
                    uBaseOpacity: {
                        value: .05
                    },
                    uTime: {
                        value: 0
                    },
                    uSpeed: {
                        value: -20
                    }
                }), a = (0, l.useMemo)(() => {
                    let e = new y.MeshBasicMaterial({
                        color: 16777215,
                        transparent: !0,
                        side: y.FrontSide
                    });
                    return e.onBeforeCompile = e => {
                        e.uniforms = { ...e.uniforms,
                            ...t
                        }, e.defines = { ...e.defines,
                            USE_UV: ""
                        }, e.vertexShader = "\n        varying vec4 vWorldPosition;\n        varying vec3 vWorldNormal;\n        varying vec3 vViewDirection;\n        varying vec3 vPosition;\n      " + e.vertexShader, e.vertexShader = e.vertexShader.replace("void main() {", "\n        void main() {\n        vWorldPosition = modelViewMatrix * vec4(position, 1.0);\n        vWorldNormal = normalize(normalMatrix * normal);\n        vViewDirection = normalize(vec3(modelViewMatrix * vec4(position, 1.0)).xyz);\n\n        vPosition = position;\n        "), e.fragmentShader = "\n        uniform float uFresnelPower;\n        uniform float uLines;\n        uniform float uBaseOpacity;\n        uniform float uTime;\n        uniform float uSpeed;\n\n        varying vec4 vWorldPosition;\n        varying vec3 vWorldNormal;\n        varying vec3 vViewDirection;\n        varying vec3 vPosition;\n      " + e.fragmentShader, e.fragmentShader = e.fragmentShader.replace("vec4 diffuseColor = vec4( diffuse, opacity );", "\n          float fresnelFactor = abs(dot(vViewDirection, vWorldNormal));\n          float inversefresnelFactor = 1.0 - fresnelFactor;\n          // Shaping function\n          fresnelFactor = clamp(0.,pow(fresnelFactor, uFresnelPower),1.);\n          inversefresnelFactor = clamp(0.,pow(inversefresnelFactor, uFresnelPower),1.);  \n\n          // https://luka712.github.io/2018/07/21/CRT-effect-Shadertoy-Unity/\n          float y = gl_FragCoord.y + uTime * uSpeed;\n          float scanline = sin(y * uLines);\n          scanline = (scanline * 0.5) + 0.5;\n          \n          \n          float alpha = clamp((inversefresnelFactor * scanline) + (scanline * uBaseOpacity), 0., 1.);\n          vec4 diffuseColor = vec4(diffuse, alpha * opacity);\n      ")
                    }, e
                }, []), {
                    nodes: {
                        Seed_Simple002_Re001: {
                            geometry: o
                        }
                    }
                } = (0, h.L)("/noprecache/models/seed.glb"), s = (0, v.st)();
                (0, p.w)(s, n + "/ material", {
                    opacity: c.types.number(a.opacity, {
                        range: [0, 1],
                        nudgeMultiplier: .01
                    }),
                    fresnelPower: c.types.number(t.uFresnelPower.value, {
                        range: [0, 10],
                        nudgeMultiplier: .01
                    }),
                    lines: c.types.number(t.uLines.value, {
                        range: [.01, 2],
                        nudgeMultiplier: .01
                    }),
                    baseOpacity: c.types.number(t.uBaseOpacity.value, {
                        range: [0, 1],
                        nudgeMultiplier: .01
                    }),
                    speed: c.types.number(t.uSpeed.value, {
                        range: [-100, 100],
                        nudgeMultiplier: .1
                    }),
                    color: c.types.rgba({
                        r: 1,
                        g: 1,
                        b: 1,
                        a: 1
                    })
                }, e => {
                    let {
                        opacity: n,
                        fresnelPower: r,
                        lines: i,
                        baseOpacity: o,
                        speed: c,
                        color: s
                    } = e;
                    a.opacity = n, t.uFresnelPower.value = r, t.uLines.value = i, t.uBaseOpacity.value = o, t.uSpeed.value = c, a.color.set(s.toString().slice(0, 7))
                });
                let u = (0, l.useRef)(),
                    [f] = (0, p.w)(s, "".concat(n, " / float"), {
                        intensity: c.types.number(.5, {
                            range: [0, 1],
                            nudgeMultiplier: .01
                        }),
                        speed: c.types.number(.5, {
                            range: [0, 1],
                            nudgeMultiplier: .01
                        })
                    });
                return (0, i.A)(e => {
                    let {
                        clock: n
                    } = e, {
                        intensity: r,
                        speed: a
                    } = f();
                    u.current.position.z = (1 + Math.sin(n.elapsedTime * a)) * r, u.current.rotation.z = .1 * n.elapsedTime, u.current.updateMatrix(), t.uTime.value = n.elapsedTime
                }), (0, r.jsx)(x.Z, {
                    theatreKey: n,
                    children: (0, r.jsx)("mesh", {
                        material: a,
                        geometry: o,
                        matrixAutoUpdate: !1,
                        ref: u
                    })
                })
            }

            function P() {
                let e = (0, l.useRef)();
                (0, l.useEffect)(() => {
                    e.current && (e.current.scale.setScalar(.02), e.current.updateMatrix())
                }, []);
                let {
                    size: n,
                    camera: t
                } = (0, i.z)(), [c, s] = (0, l.useState)(!1), u = (0, v.st)();
                return (0, p.w)(u, "webgl / camera", {
                    controls: !1
                }, e => {
                    let {
                        controls: n
                    } = e;
                    s(n), n || requestAnimationFrame(() => {
                        t.position.set(0, 0, 5e3), t.rotation.set(0, 0, 0)
                    })
                }, [t]), (0, r.jsxs)(r.Fragment, {
                    children: [c && (0, r.jsx)(a.z, {
                        makeDefault: !0
                    }), (0, r.jsx)(x.Z, {
                        theatreKey: "webgl / scene",
                        children: (0, r.jsxs)("group", {
                            scale: n.height,
                            children: [Array(6).fill(0).map((e, n) => (0, r.jsx)(o.y, {
                                src: "/noprecache/textures/circle.svg",
                                theatreKey: "webgl / circle-".concat(n + 1)
                            }, n)), (0, r.jsx)(o.y, {
                                src: "/noprecache/textures/apex.svg",
                                theatreKey: "webgl / apex"
                            }), (0, r.jsx)(o.y, {
                                src: "/noprecache/textures/cross.svg",
                                theatreKey: "webgl / cross"
                            }), (0, r.jsx)(o.y, {
                                src: "/noprecache/textures/rosace.svg",
                                theatreKey: "webgl / rosace",
                                children: (0, r.jsxs)("group", {
                                    ref: e,
                                    matrixAutoUpdate: !1,
                                    children: [(0, r.jsx)(m, {
                                        theatreKey: "webgl / rosace / runes"
                                    }), (0, r.jsx)(z, {
                                        theatreKey: "webgl / seed"
                                    })]
                                })
                            })]
                        })
                    })]
                })
            }
        },
        48: function(e, n, t) {
            t.d(n, {
                KK: function() {
                    return r
                },
                Sm: function() {
                    return a
                },
                k0: function() {
                    return i
                },
                qL: function() {
                    return o
                }
            });
            let r = "\nfloat mapRange(float min1, float max1,float value, float min2, float max2) {\n  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);\n}\n",
                a = "\nvec4 blendScreen(const in vec4 x, const in vec4 y, const in float opacity) {\n  return mix(x, x + y - x * y, opacity);\n}\n",
                i = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "perlin3D";
                    return "\n  #define NUM_OCTAVES ".concat(e, "\n\n  float fbm(vec3 x) {\n    float v = 0.0;\n    float a = 0.5;\n    vec3 shift = vec3(100);\n    for (int i = 0; i < NUM_OCTAVES; ++i) {\n      v += a * ").concat(n, "(x);\n      x = x * 2.0 + shift;\n      a *= 0.5;\n    }\n    return v;\n  }\n")
                },
                o = "\n//	Classic Perlin 3D Noise \n//	by Stefan Gustavson\n//\nvec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}\nvec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}\nvec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}\n\nfloat perlin3D(vec3 P){\n  vec3 Pi0 = floor(P); // Integer part for indexing\n  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1\n  Pi0 = mod(Pi0, 289.0);\n  Pi1 = mod(Pi1, 289.0);\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n\n  vec4 gx0 = ixy0 / 7.0;\n  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 / 7.0;\n  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); \n  return 2.2 * n_xyz;\n}\n"
        }
    }
]);