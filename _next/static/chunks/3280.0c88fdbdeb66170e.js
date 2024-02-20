(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3280], {
        3280: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                WebGL: function() {
                    return K
                }
            });
            var n = t(1527),
                i = t(5051),
                o = t(1231),
                s = t(7065),
                a = t(9176),
                u = t(959),
                l = t(1664),
                c = t(7345),
                v = t(4381),
                d = t(6734),
                g = t(6930),
                m = t(2717),
                p = t(3873),
                h = t(688),
                f = t(5293),
                x = t(7744),
                y = t(7146),
                w = t(7714),
                D = t(6459),
                P = t(5712),
                z = t(3917),
                R = t(1714),
                T = t(8154);
            let b = new z._(1, 1),
                S = new P.i(-.5, .5, .5, -.5, .001, 1e3);
            S.position.z = 1;
            class F extends T.x {
                get program() {
                    return this.material
                }
                render(e) {
                    e.render(this.scene, S)
                }
                constructor(e) {
                    super(), this.material = e, this.mesh = new R.K(b, this.material), this.scene = new T.x, this.scene.add(this.mesh)
                }
            }
            let B = "\nprecision highp float;\nvarying vec2 vUv;\nvarying vec2 vL;\nvarying vec2 vR;\nvarying vec2 vT;\nvarying vec2 vB;\nuniform vec2 texelSize;\nvoid main () {\n    vUv = uv;\n    vL = vUv - vec2(texelSize.x, 0.0);\n    vR = vUv + vec2(texelSize.x, 0.0);\n    vT = vUv + vec2(0.0, texelSize.y);\n    vB = vUv - vec2(0.0, texelSize.y);\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}\n";

            function M(e, r) {
                let {
                    wrapS: t,
                    wrapT: n,
                    minFilter: i = f.wem,
                    magFilter: o = i,
                    format: s = f.wk1,
                    internalFormat: a,
                    type: u,
                    depthBuffer: l,
                    stencilBuffer: c
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, v = {
                    read: new D.d(e, r, {
                        wrapS: t,
                        wrapT: n,
                        minFilter: i,
                        magFilter: o,
                        format: s,
                        type: u,
                        depthBuffer: l,
                        stencilBuffer: c
                    }),
                    write: new D.d(e, r, {
                        wrapS: t,
                        wrapT: n,
                        minFilter: i,
                        magFilter: o,
                        format: s,
                        type: u,
                        depthBuffer: l,
                        stencilBuffer: c
                    }),
                    swap: () => {
                        let e = v.read;
                        v.read = v.write, v.write = e
                    }
                };
                return a && (v.read.texture.internalFormat = v.write.texture.internalFormat = a), v
            }

            function _(e) {
                switch (e) {
                    case 34842:
                        return "RGBA16F";
                    case 33327:
                        return "RG16F";
                    case 33325:
                        return "R16F";
                    case 6408:
                        return f.wk1;
                    case 33319:
                        return f.av9;
                    case 6403:
                        return f.hEm
                }
            }

            function E(e, r, t, n) {
                let i, o;
                if (i = e.createTexture(), e.bindTexture(e.TEXTURE_2D, i), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.texImage2D(e.TEXTURE_2D, 0, r, e.RGBA, e.RGBA, 0, t, n, null), o = e.createFramebuffer(), e.bindFramebuffer(e.FRAMEBUFFER, o), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, i, 0), e.checkFramebufferStatus(e.FRAMEBUFFER) != e.FRAMEBUFFER_COMPLETE) switch (r) {
                    case e.R16F:
                        return E(e, e.RG16F, e.RG, n);
                    case e.RG16F:
                        return E(e, e.RGBA16F, e.RGBA, n);
                    default:
                        return null
                }
                return {
                    internalFormat: _(r),
                    format: _(t)
                }
            }
            class C {
                onMouseDown() {
                    this.mouseDown = !0
                }
                onMouseUp() {
                    this.mouseDown = !1
                }
                updateMouse(e) {
                    e.changedTouches && e.changedTouches.length && (e.x = e.changedTouches[0].pageX, e.y = e.changedTouches[0].pageY), void 0 === e.x && (e.x = e.pageX, e.y = e.pageY), this.lastMouse.isInit || (this.lastMouse.isInit = !0, this.lastMouse.set(e.x, e.y));
                    let r = e.x - this.lastMouse.x,
                        t = e.y - this.lastMouse.y;
                    this.lastMouse.set(e.x, e.y);
                    let n = this.renderer.getSize(new y.F);
                    (Math.abs(r) || Math.abs(t)) && this.splats.push({
                        x: e.x / n.width,
                        y: 1 - e.y / n.height,
                        dx: 5 * r,
                        dy: -5 * t
                    })
                }
                splat(e) {
                    let {
                        x: r,
                        y: t,
                        dx: n,
                        dy: i
                    } = e, o = this.renderer.getSize(new y.F);
                    this.splatProgram.program.uniforms.uTarget.value = this.velocity.read.texture, this.splatProgram.program.uniforms.aspectRatio.value = o.width / o.height, this.splatProgram.program.uniforms.point.value.set(r, t), this.splatProgram.program.uniforms.color.value.set(n, i, 1), this.splatProgram.program.uniforms.radius.value = this.radius / 100, this.renderer.setRenderTarget(this.velocity.write), this.splatProgram.render(this.renderer), this.velocity.swap(), this.splatProgram.program.uniforms.uTarget.value = this.density.read.texture, this.renderer.setRenderTarget(this.density.write), this.splatProgram.render(this.renderer), this.density.swap()
                }
                update(e) {
                    this.renderer.autoClear = !1;
                    for (let e = this.splats.length - 1; e >= 0; e--) this.splat(this.splats.splice(e, 1)[0]);
                    this.curlProgram.program.uniforms.uVelocity.value = this.velocity.read.texture, this.renderer.setRenderTarget(this.curl), this.curlProgram.render(this.renderer), this.vorticityProgram.program.uniforms.uVelocity.value = this.velocity.read.texture, this.vorticityProgram.program.uniforms.uCurl.value = this.curl.texture, this.renderer.setRenderTarget(this.velocity.write), this.vorticityProgram.render(this.renderer), this.velocity.swap(), this.divergenceProgram.program.uniforms.uVelocity.value = this.velocity.read.texture, this.renderer.setRenderTarget(this.divergence), this.divergenceProgram.render(this.renderer), this.clearProgram.program.uniforms.uTexture.value = this.pressure.read.texture, this.clearProgram.program.uniforms.value.value = this.pressureDissipation, this.renderer.setRenderTarget(this.pressure.write), this.clearProgram.render(this.renderer), this.pressure.swap(), this.pressureProgram.program.uniforms.uDivergence.value = this.divergence.texture;
                    for (let e = 0; e < this.iterations; e++) this.pressureProgram.program.uniforms.uPressure.value = this.pressure.read.texture, this.renderer.setRenderTarget(this.pressure.write), this.pressureProgram.render(this.renderer), this.pressure.swap();
                    return this.gradienSubtractProgram.program.uniforms.uPressure.value = this.pressure.read.texture, this.gradienSubtractProgram.program.uniforms.uVelocity.value = this.velocity.read.texture, this.renderer.setRenderTarget(this.velocity.write), this.gradienSubtractProgram.render(this.renderer), this.velocity.swap(), this.advectionProgram.program.uniforms.dyeTexelSize.value.set(1 / this.simRes), this.advectionProgram.program.uniforms.uVelocity.value = this.velocity.read.texture, this.advectionProgram.program.uniforms.uSource.value = this.velocity.read.texture, this.advectionProgram.program.uniforms.dissipation.value = this.velocityDissipation, this.renderer.setRenderTarget(this.velocity.write), this.advectionProgram.render(this.renderer), this.velocity.swap(), this.advectionProgram.program.uniforms.dyeTexelSize.value.set(1 / this.dyeRes), this.advectionProgram.program.uniforms.uVelocity.value = this.velocity.read.texture, this.advectionProgram.program.uniforms.uSource.value = this.density.read.texture, this.advectionProgram.program.uniforms.dissipation.value = this.densityDissipation, this.renderer.setRenderTarget(this.density.write), this.advectionProgram.render(this.renderer), this.density.swap(), this.renderer.autoClear = !0, this.density.read.texture
                }
                constructor({
                    renderer: e,
                    size: r = 128
                } = {}) {
                    let t, n, i, o, s;
                    this.renderer = e, this.simRes = r, this.dyeRes = r, this.iterations = 3, this.densityDissipation = .97, this.velocityDissipation = .98, this.pressureDissipation = .8, this.curlStrength = 20, this.radius = .2, this.texelSize = {
                        value: new y.F(1 / this.simRes, 1 / this.simRes)
                    };
                    let a = this.renderer.getContext(),
                        u = this.renderer.capabilities.isWebGL2;
                    u ? (a.getExtension("EXT_color_buffer_float"), n = a.getExtension("OES_texture_float_linear")) : (t = a.getExtension("OES_texture_half_float"), n = a.getExtension("OES_texture_half_float_linear"));
                    let l = u ? a.HALF_FLOAT : t.HALF_FLOAT_OES;
                    u ? (i = E(a, a.RGBA16F, a.RGBA, l), o = E(a, a.RG16F, a.RG, l), s = E(a, a.R16F, a.RED, l)) : (i = E(a, a.RGBA, a.RGBA, l), o = E(a, a.RGBA, a.RGBA, l), s = E(a, a.RGBA, a.RGBA, l));
                    let c = n ? f.wem : f.TyD;
                    t = u ? f.VzW : f.cLu, this.density = M(this.dyeRes, this.dyeRes, {
                        type: t,
                        minFilter: c,
                        format: i.format,
                        internalFormat: i.internalFormat,
                        depthBuffer: !1,
                        stencilBuffer: !1
                    }), this.velocity = M(this.simRes, this.simRes, {
                        type: t,
                        minFilter: c,
                        format: o.format,
                        internalFormat: o.internalFormat,
                        depthBuffer: !1,
                        stencilBuffer: !1
                    }), this.pressure = M(this.simRes, this.simRes, {
                        type: t,
                        minFilter: f.TyD,
                        format: s.format,
                        internalFormat: s.internalFormat,
                        depthBuffer: !1,
                        stencilBuffer: !1
                    }), this.divergence = new D.d(this.simRes, this.simRes, {
                        type: t,
                        minFilter: f.TyD,
                        format: s.format,
                        depthBuffer: !1,
                        stencilBuffer: !1
                    }), this.divergence.texture.internalFormat = s.internalFormat, this.curl = new D.d(this.simRes, this.simRes, {
                        type: t,
                        minFilter: f.TyD,
                        format: s.format,
                        depthBuffer: !1,
                        stencilBuffer: !1
                    }), this.curl.texture.internalFormat = s.internalFormat, this.clearProgram = new F(new x.j({
                        vertexShader: B,
                        fragmentShader: "\nprecision mediump float;\nprecision mediump sampler2D;\nvarying highp vec2 vUv;\nuniform sampler2D uTexture;\nuniform float value;\nvoid main () {\n    gl_FragColor = value * texture2D(uTexture, vUv);\n}\n",
                        uniforms: {
                            texelSize: this.texelSize,
                            uTexture: {
                                value: null
                            },
                            value: {
                                value: this.pressureDissipation
                            }
                        },
                        depthTest: !1,
                        depthWrite: !1
                    })), this.splatProgram = new F(new x.j({
                        vertexShader: B,
                        fragmentShader: "\nprecision highp float;\nprecision highp sampler2D;\nvarying vec2 vUv;\nuniform sampler2D uTarget;\nuniform float aspectRatio;\nuniform vec3 color;\nuniform vec2 point;\nuniform float radius;\nvoid main () {\n    vec2 p = vUv - point.xy;\n    p.x *= aspectRatio;\n    vec3 splat = exp(-dot(p, p) / radius) * color;\n    vec3 base = texture2D(uTarget, vUv).xyz;\n    gl_FragColor = vec4(base + splat, 1.0);\n}\n",
                        uniforms: {
                            texelSize: this.texelSize,
                            uTarget: {
                                value: null
                            },
                            aspectRatio: {
                                value: 1
                            },
                            color: {
                                value: new w.P
                            },
                            point: {
                                value: new y.F
                            },
                            radius: {
                                value: 1
                            }
                        },
                        depthTest: !1,
                        depthWrite: !1
                    })), this.advectionProgram = new F(new x.j({
                        vertexShader: B,
                        fragmentShader: n ? "\nprecision highp float;\nprecision highp sampler2D;\nvarying vec2 vUv;\nuniform sampler2D uVelocity;\nuniform sampler2D uSource;\nuniform vec2 texelSize;\nuniform float dt;\nuniform float dissipation;\nvoid main () {\n    vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;\n    gl_FragColor = dissipation * texture2D(uSource, coord);\n    gl_FragColor.a = 1.0;\n}\n" : "\nprecision highp float;\nprecision highp sampler2D;\nvarying vec2 vUv;\nuniform sampler2D uVelocity;\nuniform sampler2D uSource;\nuniform vec2 texelSize;\nuniform vec2 dyeTexelSize;\nuniform float dt;\nuniform float dissipation;\nvec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {\n    vec2 st = uv / tsize - 0.5;\n    vec2 iuv = floor(st);\n    vec2 fuv = fract(st);\n    vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);\n    vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);\n    vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);\n    vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);\n    return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);\n}\nvoid main () {\n    vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;\n    gl_FragColor = dissipation * bilerp(uSource, coord, dyeTexelSize);\n    gl_FragColor.a = 1.0;\n}\n",
                        uniforms: {
                            texelSize: this.texelSize,
                            dyeTexelSize: {
                                value: new y.F(1 / this.dyeRes, 1 / this.dyeRes)
                            },
                            uVelocity: {
                                value: null
                            },
                            uSource: {
                                value: null
                            },
                            dt: {
                                value: .016
                            },
                            dissipation: {
                                value: 1
                            }
                        },
                        depthTest: !1,
                        depthWrite: !1
                    })), this.divergenceProgram = new F(new x.j({
                        vertexShader: B,
                        fragmentShader: "\nprecision mediump float;\nprecision mediump sampler2D;\nvarying highp vec2 vUv;\nvarying highp vec2 vL;\nvarying highp vec2 vR;\nvarying highp vec2 vT;\nvarying highp vec2 vB;\nuniform sampler2D uVelocity;\nvoid main () {\n    float L = texture2D(uVelocity, vL).x;\n    float R = texture2D(uVelocity, vR).x;\n    float T = texture2D(uVelocity, vT).y;\n    float B = texture2D(uVelocity, vB).y;\n    vec2 C = texture2D(uVelocity, vUv).xy;\n    if (vL.x < 0.0) { L = -C.x; }\n    if (vR.x > 1.0) { R = -C.x; }\n    if (vT.y > 1.0) { T = -C.y; }\n    if (vB.y < 0.0) { B = -C.y; }\n    float div = 0.5 * (R - L + T - B);\n    gl_FragColor = vec4(div, 0.0, 0.0, 1.0);\n}\n",
                        uniforms: {
                            texelSize: this.texelSize,
                            uVelocity: {
                                value: null
                            }
                        },
                        depthTest: !1,
                        depthWrite: !1
                    })), this.curlProgram = new F(new x.j({
                        vertexShader: B,
                        fragmentShader: "\nprecision mediump float;\nprecision mediump sampler2D;\nvarying highp vec2 vUv;\nvarying highp vec2 vL;\nvarying highp vec2 vR;\nvarying highp vec2 vT;\nvarying highp vec2 vB;\nuniform sampler2D uVelocity;\nvoid main () {\n    float L = texture2D(uVelocity, vL).y;\n    float R = texture2D(uVelocity, vR).y;\n    float T = texture2D(uVelocity, vT).x;\n    float B = texture2D(uVelocity, vB).x;\n    float vorticity = R - L - T + B;\n    gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);\n}\n",
                        uniforms: {
                            texelSize: this.texelSize,
                            uVelocity: {
                                value: null
                            }
                        },
                        depthTest: !1,
                        depthWrite: !1
                    })), this.vorticityProgram = new F(new x.j({
                        vertexShader: B,
                        fragmentShader: "\nprecision highp float;\nprecision highp sampler2D;\nvarying vec2 vUv;\nvarying vec2 vL;\nvarying vec2 vR;\nvarying vec2 vT;\nvarying vec2 vB;\nuniform sampler2D uVelocity;\nuniform sampler2D uCurl;\nuniform float curl;\nuniform float dt;\nvoid main () {\n    float L = texture2D(uCurl, vL).x;\n    float R = texture2D(uCurl, vR).x;\n    float T = texture2D(uCurl, vT).x;\n    float B = texture2D(uCurl, vB).x;\n    float C = texture2D(uCurl, vUv).x;\n    vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));\n    force /= length(force) + 0.0001;\n    force *= curl * C;\n    force.y *= -1.0;\n    vec2 vel = texture2D(uVelocity, vUv).xy;\n    gl_FragColor = vec4(vel + force * dt, 0.0, 1.0);\n}\n",
                        uniforms: {
                            texelSize: this.texelSize,
                            uVelocity: {
                                value: null
                            },
                            uCurl: {
                                value: null
                            },
                            curl: {
                                value: this.curlStrength
                            },
                            dt: {
                                value: .016
                            }
                        },
                        depthTest: !1,
                        depthWrite: !1
                    })), this.pressureProgram = new F(new x.j({
                        vertexShader: B,
                        fragmentShader: "\nprecision mediump float;\nprecision mediump sampler2D;\nvarying highp vec2 vUv;\nvarying highp vec2 vL;\nvarying highp vec2 vR;\nvarying highp vec2 vT;\nvarying highp vec2 vB;\nuniform sampler2D uPressure;\nuniform sampler2D uDivergence;\nvoid main () {\n    float L = texture2D(uPressure, vL).x;\n    float R = texture2D(uPressure, vR).x;\n    float T = texture2D(uPressure, vT).x;\n    float B = texture2D(uPressure, vB).x;\n    float C = texture2D(uPressure, vUv).x;\n    float divergence = texture2D(uDivergence, vUv).x;\n    float pressure = (L + R + B + T - divergence) * 0.25;\n    gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);\n}\n",
                        uniforms: {
                            texelSize: this.texelSize,
                            uPressure: {
                                value: null
                            },
                            uDivergence: {
                                value: null
                            }
                        },
                        depthTest: !1,
                        depthWrite: !1
                    })), this.gradienSubtractProgram = new F(new x.j({
                        vertexShader: B,
                        fragmentShader: "\nprecision mediump float;\nprecision mediump sampler2D;\nvarying highp vec2 vUv;\nvarying highp vec2 vL;\nvarying highp vec2 vR;\nvarying highp vec2 vT;\nvarying highp vec2 vB;\nuniform sampler2D uPressure;\nuniform sampler2D uVelocity;\nvoid main () {\n    float L = texture2D(uPressure, vL).x;\n    float R = texture2D(uPressure, vR).x;\n    float T = texture2D(uPressure, vT).x;\n    float B = texture2D(uPressure, vB).x;\n    vec2 velocity = texture2D(uVelocity, vUv).xy;\n    velocity.xy -= vec2(R - L, T - B);\n    gl_FragColor = vec4(velocity, 0.0, 1.0);\n}\n",
                        uniforms: {
                            texelSize: this.texelSize,
                            uPressure: {
                                value: null
                            },
                            uVelocity: {
                                value: null
                            }
                        },
                        depthTest: !1,
                        depthWrite: !1
                    })), this.splats = [], this.lastMouse = new y.F, window.addEventListener("touchstart", this.onMouseDown.bind(this), !1), window.addEventListener("mousedown", this.onMouseDown.bind(this), !1), window.addEventListener("touchstart", this.updateMouse.bind(this), !1), window.addEventListener("touchmove", this.updateMouse.bind(this), !1), window.addEventListener("mousemove", this.updateMouse.bind(this), !1), window.addEventListener("touchend", this.onMouseUp.bind(this), !1), window.addEventListener("mouseup", this.onMouseUp.bind(this), !1)
                }
            }
            var k = t(5823),
                U = t(48);
            let L = "\n  ".concat(U.qL, "\n  ").concat(U.KK, "\n  ").concat(U.Sm, "\n\n  uniform float uTime;\n\n  uniform vec3 uBackgroundColor;\n  uniform float uBackgroundOpacity;\n  uniform float uBackgroundFrequency;\n  uniform float uBackgroundSpeed;\n  uniform float uBackgroundAmplitude;\n  uniform float uBackgroundOffset;\n\n  uniform sampler2D uDotMask;\n  uniform float uDotSize;\n  uniform vec3 uDotColor;\n  uniform float uDotDivision;\n\n  uniform sampler2D uFlowMap;\n\n  uniform sampler2D uForeground;\n  uniform float uForegroundOpacity;\n\n  void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {\nvec3 fluid = texture2D(uFlowMap, uv).rgb;\nfluid.rg *= 0.0001;\n\nvec2 aspect = vec2(resolution.x / resolution.y, 1.);\n\n// animated background\nvec2 noiseUv = uv * aspect * uBackgroundFrequency;\nfloat noiseTime = (uTime + uBackgroundOffset) * uBackgroundSpeed;\nfloat noise = perlin3D(vec3(noiseUv + fluid.rg, noiseTime));\nnoise = clamp(noise, 0., 1.);\nnoise *= uBackgroundAmplitude;\nvec3 animatedGradient = noise * uBackgroundColor * uBackgroundOpacity;\n\nfloat paddingPx = 80.0;\nfloat padding = ((paddingPx * resolution.x) / 1440.0);\nfloat paddingRatio = padding / resolution.x;\n\nfloat start = padding;\nfloat end = resolution.x - padding;\nfloat width = end - start;\nfloat spacing = width / uDotDivision;\n\nvec2 coord = gl_FragCoord.xy;\ncoord.x -= (spacing / 2.) + padding;\ncoord.x = clamp(-spacing, coord.x, width);\nvec2 pos = mod(coord, vec2(spacing) + (fluid.rg * 0.)) - spacing / 2.;\n\nfloat dist_squared = dot(pos, pos);\nfloat size = uDotSize + length(fluid.rg) * 20.;\nvec3 dotColor = (1. - smoothstep(size, size, dist_squared)) * uDotColor;\n\nvec2 dotMaskUv = uv;\ndotMaskUv.x = mapRange(0., 1., uv.x, -paddingRatio, 1. + paddingRatio);\nfloat dotMask = round(texture2D(uDotMask, dotMaskUv).r);\n\ndotColor *= dotMask;\nvec4 backgroundColor = vec4(animatedGradient + dotColor, 1.);\n\nvec4 color = blendScreen(inputColor, texture2D(uForeground, uv), 1.);\n  \n    outputColor = blendScreen(backgroundColor,color,uForegroundOpacity) ;\n  }\n");
            class A extends p.Qm {
                update(e, r, t) {
                    this.uniforms.get("uTime").value += .1 * t
                }
                set backgroundColor(e) {
                    this.uniforms.get("uBackgroundColor").value.set(e), this.uniforms.get("uBackgroundColor").value.convertLinearToSRGB()
                }
                set backgroundFrequency(e) {
                    this.uniforms.get("uBackgroundFrequency").value = e
                }
                set backgroundAmplitude(e) {
                    this.uniforms.get("uBackgroundAmplitude").value = e
                }
                set backgroundOpacity(e) {
                    this.uniforms.get("uBackgroundOpacity").value = e
                }
                set backgroundSpeed(e) {
                    this.uniforms.get("uBackgroundSpeed").value = e
                }
                set backgroundOffset(e) {
                    this.uniforms.get("uBackgroundOffset").value = e, this.uniforms.get("uTime").value = 0
                }
                set dotMask(e) {
                    this.uniforms.get("uDotMask").value = e
                }
                set dotColor(e) {
                    this.uniforms.get("uDotColor").value.set(e), this.uniforms.get("uDotColor").value.convertLinearToSRGB()
                }
                set dotDivision(e) {
                    this.uniforms.get("uDotDivision").value = e
                }
                set dotSize(e) {
                    this.uniforms.get("uDotSize").value = e
                }
                set flowmap(e) {
                    this.uniforms.get("uFlowMap").value = e
                }
                set foreground(e) {
                    this.uniforms.get("uForeground").value = e
                }
                set foregroundOpacity(e) {
                    this.uniforms.get("uForegroundOpacity").value = e
                }
                constructor() {
                    super("BackgroundEffect", L, {
                        blendFunction: p.YQ.SRC,
                        uniforms: new Map([
                            ["uTime", new h.Uniform(0)],
                            ["uBackgroundOffset", new h.Uniform(0)],
                            ["uBackgroundColor", new h.Uniform(new h.Color("#D49338").convertLinearToSRGB())],
                            ["uBackgroundOpacity", new h.Uniform(1)],
                            ["uBackgroundFrequency", new h.Uniform(1)],
                            ["uBackgroundAmplitude", new h.Uniform(1)],
                            ["uBackgroundSpeed", new h.Uniform(1)],
                            ["uDotMask", new h.Uniform(null)],
                            ["uDotColor", new h.Uniform(new h.Color("#ffffff"))],
                            ["uDotDivision", new h.Uniform(10)],
                            ["uDotSize", new h.Uniform(4)],
                            ["uFlowMap", new h.Uniform(null)],
                            ["uForeground", new h.Uniform(null)],
                            ["uForegroundOpacity", new h.Uniform(1)]
                        ])
                    })
                }
            }
            let V = (0, u.forwardRef)(function(e, r) {
                let {} = e, t = (0, i.m)("/noprecache/textures/dots-mask.png"), n = (0, k.j)(() => new A);
                (0, u.useImperativeHandle)(r, () => n, []), (0, u.useEffect)(() => {
                    n.dotMask = t
                }, [t]);
                let o = (0, a.st)();
                (0, m.w)(o, "background", {
                    blendFunction: d.types.stringLiteral(p.YQ.SRC, Object.fromEntries(Object.entries(p.YQ).map(e => {
                        let [r, t] = e;
                        return [t, r]
                    }))),
                    foregroundOpacity: d.types.number(1, {
                        range: [0, 1],
                        nudgeMultiplier: .01
                    })
                }, e => {
                    let {
                        blendFunction: r,
                        foregroundOpacity: t
                    } = e;
                    r = Number(r), n.blendMode.setBlendFunction(r), n.foregroundOpacity = t
                }), (0, m.w)(o, "background gradient", {
                    color: d.types.rgba({
                        r: 212 / 255,
                        g: 147 / 255,
                        b: 56 / 255,
                        a: 1
                    }),
                    frequency: d.types.number(1, {
                        range: [0, 3],
                        nudgeMultiplier: .01
                    }),
                    amplitude: d.types.number(1, {
                        range: [0, 10],
                        nudgeMultiplier: .01
                    }),
                    speed: d.types.number(1, {
                        range: [0, 10],
                        nudgeMultiplier: .01
                    }),
                    offset: d.types.number(0, {
                        range: [-100, 100],
                        nudgeMultiplier: 1,
                        label: "seed"
                    })
                }, e => {
                    let {
                        color: r,
                        frequency: t,
                        speed: i,
                        amplitude: o,
                        offset: s
                    } = e;
                    n.backgroundColor = r.toString().slice(0, 7), n.backgroundOpacity = r.a, n.backgroundFrequency = t, n.backgroundAmplitude = o, n.backgroundSpeed = i, n.backgroundOffset = s
                }), (0, m.w)(o, "background dots", {
                    color: d.types.rgba({
                        r: 212 / 255,
                        g: 147 / 255,
                        b: 56 / 255,
                        a: 1
                    }),
                    size: d.types.number(1, {
                        range: [1, 50],
                        nudgeMultiplier: .1
                    }),
                    division: d.types.number(49, {
                        range: [10, 100],
                        nudgeMultiplier: 1
                    })
                }, e => {
                    let {
                        color: r,
                        division: t,
                        size: i
                    } = e;
                    n.dotColor = r.toString().slice(0, 7), n.dotDivision = t, n.dotSize = i
                });
                let {
                    gl: s
                } = (0, v.z)(), l = (0, u.useMemo)(() => new C({
                    renderer: s,
                    size: 128
                }), [s]);
                (0, m.w)(o, "fluid simulation", {
                    density: d.types.number(.99, {
                        range: [0, 1],
                        nudgeMultiplier: .01
                    }),
                    velocity: d.types.number(.88, {
                        range: [0, 1],
                        nudgeMultiplier: .01
                    }),
                    pressure: d.types.number(1, {
                        range: [0, 1],
                        nudgeMultiplier: .01
                    }),
                    curl: d.types.number(0, {
                        range: [0, 100],
                        nudgeMultiplier: 1
                    }),
                    radius: d.types.number(1, {
                        range: [0, 1],
                        nudgeMultiplier: .01
                    })
                }, e => {
                    let {
                        density: r,
                        velocity: t,
                        pressure: n,
                        curl: i,
                        radius: o
                    } = e;
                    l.curlStrength = i, l.densityDissipation = r, l.velocityDissipation = t, l.pressureDissipation = n, l.radius = o
                }, [l]), (0, v.A)(e => {
                    let {
                        gl: r
                    } = e;
                    n.flowmap = l.update(), r.setRenderTarget(null), r.clear()
                })
            });
            class G extends p.CD {
                set bloomLineWidth(e) {
                    this._bloomLineWidth = e
                }
                set lineWidth(e) {
                    this._lineWidth = e
                }
                render(e, r, t, n, i) {
                    this.scene.traverseVisible(e => {
                        e.isLine2 ? e.material.uniforms.linewidth.value = this._bloomLineWidth : e.isMesh && (e.material.visible = !1)
                    }), super.render(e, r, t, n, i), this.scene.traverseVisible(e => {
                        e.isLine2 ? e.material.uniforms.linewidth.value = this._lineWidth : e.isMesh && (e.material.visible = !0)
                    })
                }
                constructor(e, r) {
                    super(e, r)
                }
            }
            let O = (0, u.createContext)();

            function W(e) {
                let {
                    children: r
                } = e, {
                    gl: t,
                    viewport: i,
                    camera: o,
                    scene: s,
                    size: l,
                    setSize: c
                } = (0, v.z)(), f = t.capabilities.isWebGL2, x = i.dpr, y = t.capabilities.maxSamples, w = x < 2, D = (0, u.useMemo)(() => new p.xC(t, {
                    multisampling: f && w ? y : 0,
                    frameBufferType: h.HalfFloatType
                }), [t, w, f, y]), {
                    lineWidth: P
                } = (0, g.F)(), z = (0, u.useMemo)(() => new G(s, o), [s, o]);
                (0, u.useEffect)(() => {
                    z.lineWidth = P
                }, [z, P]);
                let R = (0, u.useMemo)(() => new p.CD(s, o), [s, o]),
                    T = (0, u.useMemo)(() => new p.KM, []),
                    b = (0, u.useMemo)(() => new p.ki({
                        height: 1080,
                        kernelSize: p.DD.VERY_SMALL
                    }), []),
                    S = (0, a.Mi)("Post-processing");
                (0, m.w)(S, "bloom", {
                    resolution: d.types.number(1024, {
                        range: [0, 1024],
                        nudgeMultiplier: 1
                    }),
                    kernelSize: d.types.number(p.DD.LARGE, {
                        range: [p.DD.VERY_SMALL, p.DD.HUGE],
                        nudgeMultiplier: 1
                    }),
                    scale: d.types.number(1, {
                        range: [0, 2],
                        nudgeMultiplier: .01
                    }),
                    blur: d.types.number(7, {
                        range: [0, 30],
                        nudgeMultiplier: .01
                    })
                }, e => {
                    let {
                        resolution: r,
                        kernelSize: t,
                        scale: n,
                        blur: i
                    } = e;
                    b.resolution.height = r, b.setKernelSize(t), b.setScale(n), z.bloomLineWidth = i
                });
                let [F, B] = (0, u.useState)(), M = (0, u.useMemo)(() => F && new p.H5(o, F), [o, F]);
                return (0, u.useEffect)(() => {
                    F && (F.foreground = T.renderTarget.texture)
                }, [F, T]), (0, u.useEffect)(() => (D.addPass(z), D.addPass(b), D.addPass(T), D.addPass(R), M && D.addPass(M), () => {
                    D.removePass(z), D.removePass(b), D.removePass(T), D.removePass(R), M && D.removePass(M)
                }), [D, R, b, T, R, M]), (0, u.useEffect)(() => {
                    let {
                        width: e,
                        height: r
                    } = l, {
                        aspect: t
                    } = i;
                    r = (e = Math.min(e, 2048)) / t, c(e, r, !0), D.setSize(e, r)
                }, [D, l]), (0, v.A)((e, r) => {
                    D.render(r)
                }, 1), (0, n.jsxs)(O.Provider, {
                    value: {
                        composer: D
                    },
                    children: [(0, n.jsx)(a.yR, {
                        id: "Post-processing",
                        children: (0, n.jsx)(V, {
                            ref: e => {
                                B(e)
                            }
                        })
                    }), r]
                })
            }

            function j() {
                let {
                    gl: e,
                    camera: r,
                    scene: t
                } = (0, v.z)();
                (0, u.useEffect)(() => {
                    setTimeout(() => {
                        ! function() {
                            let n = [];
                            t.traverse(e => {
                                !1 === e.visible && (n.push(e), e.visible = !0)
                            }), e.compile(t, r);
                            let i = new h.WebGLCubeRenderTarget(128),
                                o = new h.CubeCamera(.01, 1e5, i);
                            o.update(e, t), i.dispose(), n.forEach(e => e.visible = !1)
                        }()
                    }, 5e3)
                }, [])
            }
            var X = t(654);

            function q(e) {
                let {
                    render: r = !0
                } = e, {
                    advance: t
                } = (0, v.z)();
                (0, X.xQ)(e => {
                    r && t(e / 1e3)
                }, 1)
            }
            var I = t(7794),
                N = t(6649),
                H = t.n(N);

            function K(e) {
                let {
                    children: r
                } = e;
                return (0, n.jsx)("div", {
                    className: H().canvas,
                    children: (0, n.jsxs)(s.Xz, {
                        gl: {
                            powerPreference: "high-performance",
                            antialias: !1,
                            alpha: !1,
                            stencil: !1,
                            depth: !1
                        },
                        dpr: [1, 2],
                        orthographic: !0,
                        camera: {
                            position: [0, 0, 5e3],
                            near: .001,
                            far: 1e4,
                            zoom: 1
                        },
                        frameloop: "never",
                        linear: !0,
                        flat: !0,
                        children: [(0, n.jsx)(q, {
                            render: !0
                        }), (0, n.jsx)(u.Suspense, {
                            children: (0, n.jsx)(W, {
                                children: (0, n.jsxs)(a.yR, {
                                    id: "WebGL",
                                    children: [r, (0, n.jsx)(I.S.Out, {}), (0, n.jsx)(j, {})]
                                })
                            })
                        })]
                    })
                })
            }
            let Y = ["/noprecache/textures/cross.svg", "/noprecache/textures/rosace.svg", "/noprecache/textures/apex.svg", "/noprecache/textures/circle.svg", "/noprecache/textures/dots-mask.png", "/noprecache/models/seed.glb", "/noprecache/textures/runes/runes-atlas.png", "/noprecache/textures/crosshair.svg", "/noprecache/textures/crosshair-alt.svg", "/noprecache/textures/about-rune.svg", "/noprecache/textures/arc.svg", "/noprecache/textures/horizontal-line.svg", "/noprecache/textures/vertical-line.svg", "/noprecache/textures/vertical-line-2.svg", "/noprecache/textures/diagonal-line.svg", "/noprecache/textures/arrow.svg", "/noprecache/textures/cross.svg", "/noprecache/textures/hex.svg"],
                Q = new c.u;

            function Z(e) {
                return new Promise((r, t) => {
                    Q.load(e, r, void 0, t)
                })
            }
            Y.forEach(e => {
                e.includes(".png") ? i.m.preload(e) : e.includes(".glb") ? o.L.preload(Y, "/noprecache/decoders/draco/") : e.includes(".svg") && (0, l.MA)(Z, e)
            })
        },
        48: function(e, r, t) {
            "use strict";
            t.d(r, {
                KK: function() {
                    return n
                },
                Sm: function() {
                    return i
                },
                k0: function() {
                    return o
                },
                qL: function() {
                    return s
                }
            });
            let n = "\nfloat mapRange(float min1, float max1,float value, float min2, float max2) {\n  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);\n}\n",
                i = "\nvec4 blendScreen(const in vec4 x, const in vec4 y, const in float opacity) {\n  return mix(x, x + y - x * y, opacity);\n}\n",
                o = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5,
                        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "perlin3D";
                    return "\n  #define NUM_OCTAVES ".concat(e, "\n\n  float fbm(vec3 x) {\n    float v = 0.0;\n    float a = 0.5;\n    vec3 shift = vec3(100);\n    for (int i = 0; i < NUM_OCTAVES; ++i) {\n      v += a * ").concat(r, "(x);\n      x = x * 2.0 + shift;\n      a *= 0.5;\n    }\n    return v;\n  }\n")
                },
                s = "\n//	Classic Perlin 3D Noise \n//	by Stefan Gustavson\n//\nvec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}\nvec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}\nvec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}\n\nfloat perlin3D(vec3 P){\n  vec3 Pi0 = floor(P); // Integer part for indexing\n  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1\n  Pi0 = mod(Pi0, 289.0);\n  Pi1 = mod(Pi1, 289.0);\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n\n  vec4 gx0 = ixy0 / 7.0;\n  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 / 7.0;\n  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); \n  return 2.2 * n_xyz;\n}\n"
        },
        6649: function(e) {
            e.exports = {
                canvas: "webgl_canvas__ZBxSL"
            }
        }
    }
]);