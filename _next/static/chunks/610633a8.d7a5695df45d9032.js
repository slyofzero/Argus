"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8982], {
        3873: function(e, t, r) {
            r.d(t, {
                CD: function() {
                    return _
                },
                DD: function() {
                    return m
                },
                H5: function() {
                    return D
                },
                KM: function() {
                    return E
                },
                Qm: function() {
                    return O
                },
                YQ: function() {
                    return d
                },
                ki: function() {
                    return z
                },
                xC: function() {
                    return N
                }
            });
            var i = r(688),
                n = "srgb",
                s = "srgb-linear",
                a = Number(i.REVISION.replace(/\D+/g, "")) >= 152,
                l = new Map([
                    [i.LinearEncoding, s],
                    [i.sRGBEncoding, n]
                ]),
                o = new Map([
                    [s, i.LinearEncoding],
                    [n, i.sRGBEncoding]
                ]);

            function h(e) {
                return null === e ? null : a ? e.outputColorSpace : l.get(e.outputEncoding)
            }

            function c(e, t) {
                null !== e && (a ? e.colorSpace = t : e.encoding = o.get(t))
            }

            function u(e, t) {
                null !== e && null !== t && (a ? t.colorSpace = e.colorSpace : t.encoding = e.encoding)
            }
            var d = {
                    SKIP: 9,
                    SET: 30,
                    ADD: 0,
                    ALPHA: 1,
                    AVERAGE: 2,
                    COLOR: 3,
                    COLOR_BURN: 4,
                    COLOR_DODGE: 5,
                    DARKEN: 6,
                    DIFFERENCE: 7,
                    DIVIDE: 8,
                    DST: 9,
                    EXCLUSION: 10,
                    HARD_LIGHT: 11,
                    HARD_MIX: 12,
                    HUE: 13,
                    INVERT: 14,
                    INVERT_RGB: 15,
                    LIGHTEN: 16,
                    LINEAR_BURN: 17,
                    LINEAR_DODGE: 18,
                    LINEAR_LIGHT: 19,
                    LUMINOSITY: 20,
                    MULTIPLY: 21,
                    NEGATION: 22,
                    NORMAL: 23,
                    OVERLAY: 24,
                    PIN_LIGHT: 25,
                    REFLECT: 26,
                    SATURATION: 27,
                    SCREEN: 28,
                    SOFT_LIGHT: 29,
                    SRC: 30,
                    SUBTRACT: 31,
                    VIVID_LIGHT: 32
                },
                f = {
                    NONE: 0,
                    DEPTH: 1,
                    CONVOLUTION: 2
                },
                p = {
                    FRAGMENT_HEAD: "FRAGMENT_HEAD",
                    FRAGMENT_MAIN_UV: "FRAGMENT_MAIN_UV",
                    FRAGMENT_MAIN_IMAGE: "FRAGMENT_MAIN_IMAGE",
                    VERTEX_HEAD: "VERTEX_HEAD",
                    VERTEX_MAIN_SUPPORT: "VERTEX_MAIN_SUPPORT"
                },
                m = {
                    VERY_SMALL: 0,
                    SMALL: 1,
                    MEDIUM: 2,
                    LARGE: 3,
                    VERY_LARGE: 4,
                    HUGE: 5
                },
                g = {
                    SCALE_UP: "lut.scaleup"
                },
                v = [new Float32Array([0, 0]), new Float32Array([0, 1, 1]), new Float32Array([0, 1, 1, 2]), new Float32Array([0, 1, 2, 2, 3]), new Float32Array([0, 1, 2, 3, 4, 4, 5]), new Float32Array([0, 1, 2, 3, 4, 5, 7, 8, 9, 10])],
                y = class extends i.ShaderMaterial {
                    constructor(e = new i.Vector4) {
                        super({
                            name: "KawaseBlurMaterial",
                            uniforms: {
                                inputBuffer: new i.Uniform(null),
                                texelSize: new i.Uniform(new i.Vector4),
                                scale: new i.Uniform(1),
                                kernel: new i.Uniform(0)
                            },
                            blending: i.NoBlending,
                            toneMapped: !1,
                            depthWrite: !1,
                            depthTest: !1,
                            fragmentShader: "#ifdef FRAMEBUFFER_PRECISION_HIGH\nuniform mediump sampler2D inputBuffer;\n#else\nuniform lowp sampler2D inputBuffer;\n#endif\nvarying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;\n#include <encodings_fragment>\n}",
                            vertexShader: "uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}"
                        }), this.setTexelSize(e.x, e.y), this.kernelSize = m.MEDIUM
                    }
                    set inputBuffer(e) {
                        this.uniforms.inputBuffer.value = e
                    }
                    setInputBuffer(e) {
                        this.inputBuffer = e
                    }
                    get kernelSequence() {
                        return v[this.kernelSize]
                    }
                    get scale() {
                        return this.uniforms.scale.value
                    }
                    set scale(e) {
                        this.uniforms.scale.value = e
                    }
                    getScale() {
                        return this.uniforms.scale.value
                    }
                    setScale(e) {
                        this.uniforms.scale.value = e
                    }
                    getKernel() {
                        return null
                    }
                    get kernel() {
                        return this.uniforms.kernel.value
                    }
                    set kernel(e) {
                        this.uniforms.kernel.value = e
                    }
                    setKernel(e) {
                        this.kernel = e
                    }
                    setTexelSize(e, t) {
                        this.uniforms.texelSize.value.set(e, t, .5 * e, .5 * t)
                    }
                    setSize(e, t) {
                        let r = 1 / e,
                            i = 1 / t;
                        this.uniforms.texelSize.value.set(r, i, .5 * r, .5 * i)
                    }
                },
                S = class extends i.ShaderMaterial {
                    constructor() {
                        super({
                            name: "CopyMaterial",
                            uniforms: {
                                inputBuffer: new i.Uniform(null),
                                opacity: new i.Uniform(1)
                            },
                            blending: i.NoBlending,
                            toneMapped: !1,
                            depthWrite: !1,
                            depthTest: !1,
                            fragmentShader: "#include <common>\n#include <dithering_pars_fragment>\n#ifdef FRAMEBUFFER_PRECISION_HIGH\nuniform mediump sampler2D inputBuffer;\n#else\nuniform lowp sampler2D inputBuffer;\n#endif\nuniform float opacity;varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);gl_FragColor=opacity*texel;\n#include <encodings_fragment>\n#include <dithering_fragment>\n}",
                            vertexShader: "varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}"
                        })
                    }
                    set inputBuffer(e) {
                        this.uniforms.inputBuffer.value = e
                    }
                    setInputBuffer(e) {
                        this.uniforms.inputBuffer.value = e
                    }
                    getOpacity(e) {
                        return this.uniforms.opacity.value
                    }
                    setOpacity(e) {
                        this.uniforms.opacity.value = e
                    }
                },
                A = class extends i.ShaderMaterial {
                    constructor(e, t, r, n, s = !1) {
                        super({
                            name: "EffectMaterial",
                            defines: {
                                THREE_REVISION: i.REVISION.replace(/\D+/g, ""),
                                DEPTH_PACKING: "0",
                                ENCODE_OUTPUT: "1"
                            },
                            uniforms: {
                                inputBuffer: new i.Uniform(null),
                                depthBuffer: new i.Uniform(null),
                                resolution: new i.Uniform(new i.Vector2),
                                texelSize: new i.Uniform(new i.Vector2),
                                cameraNear: new i.Uniform(.3),
                                cameraFar: new i.Uniform(1e3),
                                aspect: new i.Uniform(1),
                                time: new i.Uniform(0)
                            },
                            blending: i.NoBlending,
                            toneMapped: !1,
                            depthWrite: !1,
                            depthTest: !1,
                            dithering: s
                        }), e && this.setShaderParts(e), t && this.setDefines(t), r && this.setUniforms(r), this.copyCameraSettings(n)
                    }
                    set inputBuffer(e) {
                        this.uniforms.inputBuffer.value = e
                    }
                    setInputBuffer(e) {
                        this.uniforms.inputBuffer.value = e
                    }
                    get depthBuffer() {
                        return this.uniforms.depthBuffer.value
                    }
                    set depthBuffer(e) {
                        this.uniforms.depthBuffer.value = e
                    }
                    get depthPacking() {
                        return Number(this.defines.DEPTH_PACKING)
                    }
                    set depthPacking(e) {
                        this.defines.DEPTH_PACKING = e.toFixed(0), this.needsUpdate = !0
                    }
                    setDepthBuffer(e, t = i.BasicDepthPacking) {
                        this.depthBuffer = e, this.depthPacking = t
                    }
                    setShaderData(e) {
                        this.setShaderParts(e.shaderParts), this.setDefines(e.defines), this.setUniforms(e.uniforms), this.setExtensions(e.extensions)
                    }
                    setShaderParts(e) {
                        return this.fragmentShader = "#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#define packFloatToRGBA(v) packDepthToRGBA(v)\n#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)\n#ifdef FRAMEBUFFER_PRECISION_HIGH\nuniform mediump sampler2D inputBuffer;\n#else\nuniform lowp sampler2D inputBuffer;\n#endif\n#if DEPTH_PACKING == 3201\nuniform lowp sampler2D depthBuffer;\n#elif defined(GL_FRAGMENT_PRECISION_HIGH)\nuniform highp sampler2D depthBuffer;\n#else\nuniform mediump sampler2D depthBuffer;\n#endif\nuniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;\n#if THREE_REVISION < 143\n#define luminance(v) linearToRelativeLuminance(v)\n#endif\n#if THREE_REVISION >= 137\nvec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}\n#endif\nfloat readDepth(const in vec2 uv){\n#if DEPTH_PACKING == 3201\nreturn unpackRGBAToDepth(texture2D(depthBuffer,uv));\n#else\nreturn texture2D(depthBuffer,uv).r;\n#endif\n}float getViewZ(const in float depth){\n#ifdef PERSPECTIVE_CAMERA\nreturn perspectiveDepthToViewZ(depth,cameraNear,cameraFar);\n#else\nreturn orthographicDepthToViewZ(depth,cameraNear,cameraFar);\n#endif\n}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE gl_FragColor=color0;\n#ifdef ENCODE_OUTPUT\n#include <encodings_fragment>\n#endif\n#include <dithering_fragment>\n}".replace(p.FRAGMENT_HEAD, e.get(p.FRAGMENT_HEAD) || "").replace(p.FRAGMENT_MAIN_UV, e.get(p.FRAGMENT_MAIN_UV) || "").replace(p.FRAGMENT_MAIN_IMAGE, e.get(p.FRAGMENT_MAIN_IMAGE) || ""), this.vertexShader = "uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}".replace(p.VERTEX_HEAD, e.get(p.VERTEX_HEAD) || "").replace(p.VERTEX_MAIN_SUPPORT, e.get(p.VERTEX_MAIN_SUPPORT) || ""), this.needsUpdate = !0, this
                    }
                    setDefines(e) {
                        for (let t of e.entries()) this.defines[t[0]] = t[1];
                        return this.needsUpdate = !0, this
                    }
                    setUniforms(e) {
                        for (let t of e.entries()) this.uniforms[t[0]] = t[1];
                        return this
                    }
                    setExtensions(e) {
                        for (let t of (this.extensions = {}, e)) this.extensions[t] = !0;
                        return this
                    }
                    get encodeOutput() {
                        return void 0 !== this.defines.ENCODE_OUTPUT
                    }
                    set encodeOutput(e) {
                        this.encodeOutput !== e && (e ? this.defines.ENCODE_OUTPUT = "1" : delete this.defines.ENCODE_OUTPUT, this.needsUpdate = !0)
                    }
                    isOutputEncodingEnabled(e) {
                        return this.encodeOutput
                    }
                    setOutputEncodingEnabled(e) {
                        this.encodeOutput = e
                    }
                    get time() {
                        return this.uniforms.time.value
                    }
                    set time(e) {
                        this.uniforms.time.value = e
                    }
                    setDeltaTime(e) {
                        this.uniforms.time.value += e
                    }
                    adoptCameraSettings(e) {
                        this.copyCameraSettings(e)
                    }
                    copyCameraSettings(e) {
                        e && (this.uniforms.cameraNear.value = e.near, this.uniforms.cameraFar.value = e.far, e instanceof i.PerspectiveCamera ? this.defines.PERSPECTIVE_CAMERA = "1" : delete this.defines.PERSPECTIVE_CAMERA, this.needsUpdate = !0)
                    }
                    setSize(e, t) {
                        let r = this.uniforms;
                        r.resolution.value.set(e, t), r.texelSize.value.set(1 / e, 1 / t), r.aspect.value = e / t
                    }
                    static get Section() {
                        return p
                    }
                },
                x = new i.Camera,
                w = null,
                T = class {
                    constructor(e = "Pass", t = new i.Scene, r = x) {
                        this.name = e, this.renderer = null, this.scene = t, this.camera = r, this.screen = null, this.rtt = !0, this.needsSwap = !0, this.needsDepthTexture = !1, this.enabled = !0
                    }
                    get renderToScreen() {
                        return !this.rtt
                    }
                    set renderToScreen(e) {
                        if (this.rtt === e) {
                            let t = this.fullscreenMaterial;
                            null !== t && (t.needsUpdate = !0), this.rtt = !e
                        }
                    }
                    set mainScene(e) {}
                    set mainCamera(e) {}
                    setRenderer(e) {
                        this.renderer = e
                    }
                    isEnabled() {
                        return this.enabled
                    }
                    setEnabled(e) {
                        this.enabled = e
                    }
                    get fullscreenMaterial() {
                        return null !== this.screen ? this.screen.material : null
                    }
                    set fullscreenMaterial(e) {
                        let t = this.screen;
                        null !== t ? t.material = e : ((t = new i.Mesh(function() {
                            if (null === w) {
                                let e = new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]),
                                    t = new Float32Array([0, 0, 2, 0, 0, 2]);
                                void 0 !== (w = new i.BufferGeometry).setAttribute ? (w.setAttribute("position", new i.BufferAttribute(e, 3)), w.setAttribute("uv", new i.BufferAttribute(t, 2))) : (w.addAttribute("position", new i.BufferAttribute(e, 3)), w.addAttribute("uv", new i.BufferAttribute(t, 2)))
                            }
                            return w
                        }(), e)).frustumCulled = !1, null === this.scene && (this.scene = new i.Scene), this.scene.add(t), this.screen = t)
                    }
                    getFullscreenMaterial() {
                        return this.fullscreenMaterial
                    }
                    setFullscreenMaterial(e) {
                        this.fullscreenMaterial = e
                    }
                    getDepthTexture() {
                        return null
                    }
                    setDepthTexture(e, t = i.BasicDepthPacking) {}
                    render(e, t, r, i, n) {
                        throw Error("Render method not implemented!")
                    }
                    setSize(e, t) {}
                    initialize(e, t, r) {}
                    dispose() {
                        for (let e of Object.keys(this)) {
                            let t = this[e],
                                r = t instanceof i.WebGLRenderTarget || t instanceof i.Material || t instanceof i.Texture || t instanceof T;
                            r && this[e].dispose()
                        }
                    }
                },
                E = class extends T {
                    constructor(e, t = !0) {
                        super("CopyPass"), this.fullscreenMaterial = new S, this.needsSwap = !1, this.renderTarget = e, void 0 === e && (this.renderTarget = new i.WebGLRenderTarget(1, 1, {
                            minFilter: i.LinearFilter,
                            magFilter: i.LinearFilter,
                            stencilBuffer: !1,
                            depthBuffer: !1
                        }), this.renderTarget.texture.name = "CopyPass.Target"), this.autoResize = t
                    }
                    get resize() {
                        return this.autoResize
                    }
                    set resize(e) {
                        this.autoResize = e
                    }
                    get texture() {
                        return this.renderTarget.texture
                    }
                    getTexture() {
                        return this.renderTarget.texture
                    }
                    setAutoResizeEnabled(e) {
                        this.autoResize = e
                    }
                    render(e, t, r, i, n) {
                        this.fullscreenMaterial.inputBuffer = t.texture, e.setRenderTarget(this.renderToScreen ? null : this.renderTarget), e.render(this.scene, this.camera)
                    }
                    setSize(e, t) {
                        this.autoResize && this.renderTarget.setSize(e, t)
                    }
                    initialize(e, t, r) {
                        void 0 !== r && (this.renderTarget.texture.type = r, r !== i.UnsignedByteType ? this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1" : h(e) === n && c(this.renderTarget.texture, n))
                    }
                },
                M = class extends T {
                    constructor() {
                        super("ClearMaskPass", null, null), this.needsSwap = !1
                    }
                    render(e, t, r, i, n) {
                        let s = e.state.buffers.stencil;
                        s.setLocked(!1), s.setTest(!1)
                    }
                },
                b = new i.Color,
                R = class extends T {
                    constructor(e = !0, t = !0, r = !1) {
                        super("ClearPass", null, null), this.needsSwap = !1, this.color = e, this.depth = t, this.stencil = r, this.overrideClearColor = null, this.overrideClearAlpha = -1
                    }
                    setClearFlags(e, t, r) {
                        this.color = e, this.depth = t, this.stencil = r
                    }
                    getOverrideClearColor() {
                        return this.overrideClearColor
                    }
                    setOverrideClearColor(e) {
                        this.overrideClearColor = e
                    }
                    getOverrideClearAlpha() {
                        return this.overrideClearAlpha
                    }
                    setOverrideClearAlpha(e) {
                        this.overrideClearAlpha = e
                    }
                    render(e, t, r, i, n) {
                        let s = this.overrideClearColor,
                            a = this.overrideClearAlpha,
                            l = e.getClearAlpha(),
                            o = null !== s,
                            h = a >= 0;
                        o ? (e.getClearColor(b), e.setClearColor(s, h ? a : l)) : h && e.setClearAlpha(a), e.setRenderTarget(this.renderToScreen ? null : t), e.clear(this.color, this.depth, this.stencil), o ? e.setClearColor(b, l) : h && e.setClearAlpha(l)
                    }
                },
                F = class extends i.EventDispatcher {
                    constructor(e, t = -1, r = -1, n = 1) {
                        super(), this.resizable = e, this.baseSize = new i.Vector2(1, 1), this.preferredSize = new i.Vector2(t, r), this.target = this.preferredSize, this.s = n, this.effectiveSize = new i.Vector2, this.addEventListener("change", () => this.updateEffectiveSize()), this.updateEffectiveSize()
                    }
                    updateEffectiveSize() {
                        let e = this.baseSize,
                            t = this.preferredSize,
                            r = this.effectiveSize,
                            i = this.scale; - 1 !== t.width ? r.width = t.width : -1 !== t.height ? r.width = Math.round(t.height * (e.width / Math.max(e.height, 1))) : r.width = Math.round(e.width * i), -1 !== t.height ? r.height = t.height : -1 !== t.width ? r.height = Math.round(t.width / Math.max(e.width / Math.max(e.height, 1), 1)) : r.height = Math.round(e.height * i)
                    }
                    get width() {
                        return this.effectiveSize.width
                    }
                    set width(e) {
                        this.preferredWidth = e
                    }
                    get height() {
                        return this.effectiveSize.height
                    }
                    set height(e) {
                        this.preferredHeight = e
                    }
                    getWidth() {
                        return this.width
                    }
                    getHeight() {
                        return this.height
                    }
                    get scale() {
                        return this.s
                    }
                    set scale(e) {
                        this.s !== e && (this.s = e, this.preferredSize.setScalar(-1), this.dispatchEvent({
                            type: "change"
                        }), this.resizable.setSize(this.baseSize.width, this.baseSize.height))
                    }
                    getScale() {
                        return this.scale
                    }
                    setScale(e) {
                        this.scale = e
                    }
                    get baseWidth() {
                        return this.baseSize.width
                    }
                    set baseWidth(e) {
                        this.baseSize.width !== e && (this.baseSize.width = e, this.dispatchEvent({
                            type: "change"
                        }), this.resizable.setSize(this.baseSize.width, this.baseSize.height))
                    }
                    getBaseWidth() {
                        return this.baseWidth
                    }
                    setBaseWidth(e) {
                        this.baseWidth = e
                    }
                    get baseHeight() {
                        return this.baseSize.height
                    }
                    set baseHeight(e) {
                        this.baseSize.height !== e && (this.baseSize.height = e, this.dispatchEvent({
                            type: "change"
                        }), this.resizable.setSize(this.baseSize.width, this.baseSize.height))
                    }
                    getBaseHeight() {
                        return this.baseHeight
                    }
                    setBaseHeight(e) {
                        this.baseHeight = e
                    }
                    setBaseSize(e, t) {
                        (this.baseSize.width !== e || this.baseSize.height !== t) && (this.baseSize.set(e, t), this.dispatchEvent({
                            type: "change"
                        }), this.resizable.setSize(this.baseSize.width, this.baseSize.height))
                    }
                    get preferredWidth() {
                        return this.preferredSize.width
                    }
                    set preferredWidth(e) {
                        this.preferredSize.width !== e && (this.preferredSize.width = e, this.dispatchEvent({
                            type: "change"
                        }), this.resizable.setSize(this.baseSize.width, this.baseSize.height))
                    }
                    getPreferredWidth() {
                        return this.preferredWidth
                    }
                    setPreferredWidth(e) {
                        this.preferredWidth = e
                    }
                    get preferredHeight() {
                        return this.preferredSize.height
                    }
                    set preferredHeight(e) {
                        this.preferredSize.height !== e && (this.preferredSize.height = e, this.dispatchEvent({
                            type: "change"
                        }), this.resizable.setSize(this.baseSize.width, this.baseSize.height))
                    }
                    getPreferredHeight() {
                        return this.preferredHeight
                    }
                    setPreferredHeight(e) {
                        this.preferredHeight = e
                    }
                    setPreferredSize(e, t) {
                        (this.preferredSize.width !== e || this.preferredSize.height !== t) && (this.preferredSize.set(e, t), this.dispatchEvent({
                            type: "change"
                        }), this.resizable.setSize(this.baseSize.width, this.baseSize.height))
                    }
                    copy(e) {
                        this.s = e.scale, this.baseSize.set(e.baseWidth, e.baseHeight), this.preferredSize.set(e.preferredWidth, e.preferredHeight), this.dispatchEvent({
                            type: "change"
                        }), this.resizable.setSize(this.baseSize.width, this.baseSize.height)
                    }
                    static get AUTO_SIZE() {
                        return -1
                    }
                },
                B = !1,
                U = class {
                    constructor(e = null) {
                        this.originalMaterials = new Map, this.material = null, this.materials = null, this.materialsBackSide = null, this.materialsDoubleSide = null, this.materialsFlatShaded = null, this.materialsFlatShadedBackSide = null, this.materialsFlatShadedDoubleSide = null, this.setMaterial(e), this.meshCount = 0, this.replaceMaterial = e => {
                            if (e.isMesh) {
                                let t;
                                if (e.material.flatShading) switch (e.material.side) {
                                    case i.DoubleSide:
                                        t = this.materialsFlatShadedDoubleSide;
                                        break;
                                    case i.BackSide:
                                        t = this.materialsFlatShadedBackSide;
                                        break;
                                    default:
                                        t = this.materialsFlatShaded
                                } else switch (e.material.side) {
                                    case i.DoubleSide:
                                        t = this.materialsDoubleSide;
                                        break;
                                    case i.BackSide:
                                        t = this.materialsBackSide;
                                        break;
                                    default:
                                        t = this.materials
                                }
                                this.originalMaterials.set(e, e.material), e.isSkinnedMesh ? e.material = t[2] : e.isInstancedMesh ? e.material = t[1] : e.material = t[0], ++this.meshCount
                            }
                        }
                    }
                    cloneMaterial(e) {
                        if (!(e instanceof i.ShaderMaterial)) return e.clone();
                        let t = e.uniforms,
                            r = new Map;
                        for (let e in t) {
                            let i = t[e].value;
                            i.isRenderTargetTexture && (t[e].value = null, r.set(e, i))
                        }
                        let n = e.clone();
                        for (let e of r) t[e[0]].value = e[1], n.uniforms[e[0]].value = e[1];
                        return n
                    }
                    setMaterial(e) {
                        if (this.disposeMaterials(), this.material = e, null !== e) {
                            let t = this.materials = [this.cloneMaterial(e), this.cloneMaterial(e), this.cloneMaterial(e)];
                            for (let r of t) r.uniforms = Object.assign({}, e.uniforms), r.side = i.FrontSide;
                            t[2].skinning = !0, this.materialsBackSide = t.map(t => {
                                let r = this.cloneMaterial(t);
                                return r.uniforms = Object.assign({}, e.uniforms), r.side = i.BackSide, r
                            }), this.materialsDoubleSide = t.map(t => {
                                let r = this.cloneMaterial(t);
                                return r.uniforms = Object.assign({}, e.uniforms), r.side = i.DoubleSide, r
                            }), this.materialsFlatShaded = t.map(t => {
                                let r = this.cloneMaterial(t);
                                return r.uniforms = Object.assign({}, e.uniforms), r.flatShading = !0, r
                            }), this.materialsFlatShadedBackSide = t.map(t => {
                                let r = this.cloneMaterial(t);
                                return r.uniforms = Object.assign({}, e.uniforms), r.flatShading = !0, r.side = i.BackSide, r
                            }), this.materialsFlatShadedDoubleSide = t.map(t => {
                                let r = this.cloneMaterial(t);
                                return r.uniforms = Object.assign({}, e.uniforms), r.flatShading = !0, r.side = i.DoubleSide, r
                            })
                        }
                    }
                    render(e, t, r) {
                        let i = e.shadowMap.enabled;
                        if (e.shadowMap.enabled = !1, B) {
                            let i = this.originalMaterials;
                            for (let n of (this.meshCount = 0, t.traverse(this.replaceMaterial), e.render(t, r), i)) n[0].material = n[1];
                            this.meshCount !== i.size && i.clear()
                        } else {
                            let i = t.overrideMaterial;
                            t.overrideMaterial = this.material, e.render(t, r), t.overrideMaterial = i
                        }
                        e.shadowMap.enabled = i
                    }
                    disposeMaterials() {
                        if (null !== this.material) {
                            let e = this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);
                            for (let t of e) t.dispose()
                        }
                    }
                    dispose() {
                        this.originalMaterials.clear(), this.disposeMaterials()
                    }
                    static get workaroundEnabled() {
                        return B
                    }
                    static set workaroundEnabled(e) {
                        B = e
                    }
                },
                _ = class extends T {
                    constructor(e, t, r = null) {
                        super("RenderPass", e, t), this.needsSwap = !1, this.clearPass = new R, this.overrideMaterialManager = null === r ? null : new U(r), this.ignoreBackground = !1, this.skipShadowMapUpdate = !1, this.selection = null
                    }
                    set mainScene(e) {
                        this.scene = e
                    }
                    set mainCamera(e) {
                        this.camera = e
                    }
                    get renderToScreen() {
                        return super.renderToScreen
                    }
                    set renderToScreen(e) {
                        super.renderToScreen = e, this.clearPass.renderToScreen = e
                    }
                    get overrideMaterial() {
                        let e = this.overrideMaterialManager;
                        return null !== e ? e.material : null
                    }
                    set overrideMaterial(e) {
                        let t = this.overrideMaterialManager;
                        null !== e ? null !== t ? t.setMaterial(e) : this.overrideMaterialManager = new U(e) : null !== t && (t.dispose(), this.overrideMaterialManager = null)
                    }
                    getOverrideMaterial() {
                        return this.overrideMaterial
                    }
                    setOverrideMaterial(e) {
                        this.overrideMaterial = e
                    }
                    get clear() {
                        return this.clearPass.enabled
                    }
                    set clear(e) {
                        this.clearPass.enabled = e
                    }
                    getSelection() {
                        return this.selection
                    }
                    setSelection(e) {
                        this.selection = e
                    }
                    isBackgroundDisabled() {
                        return this.ignoreBackground
                    }
                    setBackgroundDisabled(e) {
                        this.ignoreBackground = e
                    }
                    isShadowMapDisabled() {
                        return this.skipShadowMapUpdate
                    }
                    setShadowMapDisabled(e) {
                        this.skipShadowMapUpdate = e
                    }
                    getClearPass() {
                        return this.clearPass
                    }
                    render(e, t, r, i, n) {
                        let s = this.scene,
                            a = this.camera,
                            l = this.selection,
                            o = a.layers.mask,
                            h = s.background,
                            c = e.shadowMap.autoUpdate,
                            u = this.renderToScreen ? null : t;
                        null !== l && a.layers.set(l.getLayer()), this.skipShadowMapUpdate && (e.shadowMap.autoUpdate = !1), (this.ignoreBackground || null !== this.clearPass.overrideClearColor) && (s.background = null), this.clearPass.enabled && this.clearPass.render(e, t), e.setRenderTarget(u), null !== this.overrideMaterialManager ? this.overrideMaterialManager.render(e, s, a) : e.render(s, a), a.layers.mask = o, s.background = h, e.shadowMap.autoUpdate = c
                    }
                };

            function C(e, t, r) {
                for (let i of t) {
                    let t = "$1" + e + i.charAt(0).toUpperCase() + i.slice(1),
                        n = RegExp("([^\\.])(\\b" + i + "\\b)", "g");
                    for (let e of r.entries()) null !== e[1] && r.set(e[0], e[1].replace(n, t))
                }
            }
            new Float32Array([255 / 256 / 16777216, 255 / 256 / 65536, 255 / 256 / 256, 255 / 256]);
            var D = class extends T {
                    constructor(e, ...t) {
                        super("EffectPass"), this.fullscreenMaterial = new A(null, null, null, e), this.listener = e => this.handleEvent(e), this.effects = [], this.setEffects(t), this.skipRendering = !1, this.minTime = 1, this.maxTime = Number.POSITIVE_INFINITY, this.timeScale = 1
                    }
                    set mainScene(e) {
                        for (let t of this.effects) t.mainScene = e
                    }
                    set mainCamera(e) {
                        for (let t of (this.fullscreenMaterial.copyCameraSettings(e), this.effects)) t.mainCamera = e
                    }
                    get encodeOutput() {
                        return this.fullscreenMaterial.encodeOutput
                    }
                    set encodeOutput(e) {
                        this.fullscreenMaterial.encodeOutput = e
                    }
                    get dithering() {
                        return this.fullscreenMaterial.dithering
                    }
                    set dithering(e) {
                        let t = this.fullscreenMaterial;
                        t.dithering = e, t.needsUpdate = !0
                    }
                    setEffects(e) {
                        for (let e of this.effects) e.removeEventListener("change", this.listener);
                        for (let t of (this.effects = e.sort((e, t) => t.attributes - e.attributes), this.effects)) t.addEventListener("change", this.listener)
                    }
                    updateMaterial() {
                        let e = new P,
                            t = 0;
                        for (let r of this.effects)
                            if (r.blendMode.blendFunction === d.DST) e.attributes |= r.getAttributes() & f.DEPTH;
                            else if ((e.attributes & r.getAttributes() & f.CONVOLUTION) != 0) throw Error(`Convolution effects cannot be merged (${r.name})`);
                        else ! function(e, t, r) {
                            let i = t.getFragmentShader(),
                                s = t.getVertexShader(),
                                a = void 0 !== i && /mainImage/.test(i),
                                l = void 0 !== i && /mainUv/.test(i);
                            if (r.attributes |= t.getAttributes(), void 0 === i) throw Error(`Missing fragment shader (${t.name})`);
                            if (l && (r.attributes & f.CONVOLUTION) != 0) throw Error(`Effects that transform UVs are incompatible with convolution effects (${t.name})`);
                            if (a || l) {
                                let o = /\w+\s+(\w+)\([\w\s,]*\)\s*{/g,
                                    h = r.shaderParts,
                                    c = h.get(p.FRAGMENT_HEAD) || "",
                                    u = h.get(p.FRAGMENT_MAIN_UV) || "",
                                    d = h.get(p.FRAGMENT_MAIN_IMAGE) || "",
                                    m = h.get(p.VERTEX_HEAD) || "",
                                    g = h.get(p.VERTEX_MAIN_SUPPORT) || "",
                                    v = new Set,
                                    y = new Set;
                                if (l && (u += `	${e}MainUv(UV);
`, r.uvTransformation = !0), null !== s && /mainSupport/.test(s)) {
                                    let t = /mainSupport *\([\w\s]*?uv\s*?\)/.test(s);
                                    for (let i of (g += `	${e}MainSupport(` + (t ? "vUv);\n" : ");\n"), s.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g)))
                                        for (let e of i[1].split(/\s*,\s*/)) r.varyings.add(e), v.add(e), y.add(e);
                                    for (let e of s.matchAll(o)) y.add(e[1])
                                }
                                for (let e of i.matchAll(o)) y.add(e[1]);
                                for (let e of t.defines.keys()) y.add(e.replace(/\([\w\s,]*\)/g, ""));
                                for (let e of t.uniforms.keys()) y.add(e);
                                y.delete("while"), y.delete("for"), y.delete("if"), t.uniforms.forEach((t, i) => r.uniforms.set(e + i.charAt(0).toUpperCase() + i.slice(1), t)), t.defines.forEach((t, i) => r.defines.set(e + i.charAt(0).toUpperCase() + i.slice(1), t));
                                let S = new Map([
                                    ["fragment", i],
                                    ["vertex", s]
                                ]);
                                C(e, y, r.defines), C(e, y, S), i = S.get("fragment"), s = S.get("vertex");
                                let A = t.blendMode;
                                if (r.blendModes.set(A.blendFunction, A), a) {
                                    null !== t.inputColorSpace && t.inputColorSpace !== r.colorSpace && (d += t.inputColorSpace === n ? "color0 = LinearTosRGB(color0);\n	" : "color0 = sRGBToLinear(color0);\n	"), "" !== t.outputColorSpace ? r.colorSpace = t.outputColorSpace : null !== t.inputColorSpace && (r.colorSpace = t.inputColorSpace), d += `${e}MainImage(color0, UV, `, (r.attributes & f.DEPTH) != 0 && /MainImage *\([\w\s,]*?depth[\w\s,]*?\)/.test(i) && (d += "depth, ", r.readDepth = !0), d += "color1);\n	";
                                    let s = e + "BlendOpacity";
                                    r.uniforms.set(s, A.opacity), d += `color0 = blend${A.blendFunction}(color0, color1, ${s});

	`, c += `uniform float ${s};

`
                                }
                                if (c += i + "\n", null !== s && (m += s + "\n"), h.set(p.FRAGMENT_HEAD, c), h.set(p.FRAGMENT_MAIN_UV, u), h.set(p.FRAGMENT_MAIN_IMAGE, d), h.set(p.VERTEX_HEAD, m), h.set(p.VERTEX_MAIN_SUPPORT, g), null !== t.extensions)
                                    for (let e of t.extensions) r.extensions.add(e)
                            } else throw Error(`Could not find mainImage or mainUv function (${t.name})`)
                        }("e" + t++, r, e);
                        let r = e.shaderParts.get(p.FRAGMENT_HEAD),
                            i = e.shaderParts.get(p.FRAGMENT_MAIN_IMAGE),
                            s = e.shaderParts.get(p.FRAGMENT_MAIN_UV),
                            a = /\bblend\b/g;
                        for (let t of e.blendModes.values()) r += t.getShaderCode().replace(a, `blend${t.blendFunction}`) + "\n";
                        for (let [t, a] of ((e.attributes & f.DEPTH) != 0 ? (e.readDepth && (i = "float depth = readDepth(UV);\n\n	" + i), this.needsDepthTexture = null === this.getDepthTexture()) : this.needsDepthTexture = !1, e.colorSpace === n && (i += "color0 = sRGBToLinear(color0);\n	"), e.uvTransformation ? (s = "vec2 transformedUv = vUv;\n" + s, e.defines.set("UV", "transformedUv")) : e.defines.set("UV", "vUv"), e.shaderParts.set(p.FRAGMENT_HEAD, r), e.shaderParts.set(p.FRAGMENT_MAIN_IMAGE, i), e.shaderParts.set(p.FRAGMENT_MAIN_UV, s), e.shaderParts)) null !== a && e.shaderParts.set(t, a.trim().replace(/^#/, "\n#"));
                        this.skipRendering = 0 === t, this.needsSwap = !this.skipRendering, this.fullscreenMaterial.setShaderData(e)
                    }
                    recompile() {
                        this.updateMaterial()
                    }
                    getDepthTexture() {
                        return this.fullscreenMaterial.depthBuffer
                    }
                    setDepthTexture(e, t = i.BasicDepthPacking) {
                        for (let r of (this.fullscreenMaterial.depthBuffer = e, this.fullscreenMaterial.depthPacking = t, this.effects)) r.setDepthTexture(e, t)
                    }
                    render(e, t, r, i, n) {
                        for (let r of this.effects) r.update(e, t, i);
                        if (!this.skipRendering || this.renderToScreen) {
                            let n = this.fullscreenMaterial;
                            n.inputBuffer = t.texture, n.time += i * this.timeScale, e.setRenderTarget(this.renderToScreen ? null : r), e.render(this.scene, this.camera)
                        }
                    }
                    setSize(e, t) {
                        for (let r of (this.fullscreenMaterial.setSize(e, t), this.effects)) r.setSize(e, t)
                    }
                    initialize(e, t, r) {
                        for (let i of (this.renderer = e, this.effects)) i.initialize(e, t, r);
                        this.updateMaterial(), void 0 !== r && r !== i.UnsignedByteType && (this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1")
                    }
                    dispose() {
                        for (let e of (super.dispose(), this.effects)) e.removeEventListener("change", this.listener), e.dispose()
                    }
                    handleEvent(e) {
                        "change" === e.type && this.recompile()
                    }
                },
                z = class extends T {
                    constructor({
                        kernelSize: e = m.MEDIUM,
                        resolutionScale: t = .5,
                        width: r = F.AUTO_SIZE,
                        height: n = F.AUTO_SIZE,
                        resolutionX: s = r,
                        resolutionY: a = n
                    } = {}) {
                        super("KawaseBlurPass"), this.renderTargetA = new i.WebGLRenderTarget(1, 1, {
                            depthBuffer: !1
                        }), this.renderTargetA.texture.name = "Blur.Target.A", this.renderTargetB = this.renderTargetA.clone(), this.renderTargetB.texture.name = "Blur.Target.B";
                        let l = this.resolution = new F(this, s, a, t);
                        l.addEventListener("change", e => this.setSize(l.baseWidth, l.baseHeight)), this._blurMaterial = new y, this._blurMaterial.kernelSize = e, this.copyMaterial = new S
                    }
                    getResolution() {
                        return this.resolution
                    }
                    get blurMaterial() {
                        return this._blurMaterial
                    }
                    set blurMaterial(e) {
                        this._blurMaterial = e
                    }
                    get dithering() {
                        return this.copyMaterial.dithering
                    }
                    set dithering(e) {
                        this.copyMaterial.dithering = e
                    }
                    get kernelSize() {
                        return this.blurMaterial.kernelSize
                    }
                    set kernelSize(e) {
                        this.blurMaterial.kernelSize = e
                    }
                    get width() {
                        return this.resolution.width
                    }
                    set width(e) {
                        this.resolution.preferredWidth = e
                    }
                    get height() {
                        return this.resolution.height
                    }
                    set height(e) {
                        this.resolution.preferredHeight = e
                    }
                    get scale() {
                        return this.blurMaterial.scale
                    }
                    set scale(e) {
                        this.blurMaterial.scale = e
                    }
                    getScale() {
                        return this.blurMaterial.scale
                    }
                    setScale(e) {
                        this.blurMaterial.scale = e
                    }
                    getKernelSize() {
                        return this.kernelSize
                    }
                    setKernelSize(e) {
                        this.kernelSize = e
                    }
                    getResolutionScale() {
                        return this.resolution.scale
                    }
                    setResolutionScale(e) {
                        this.resolution.scale = e
                    }
                    render(e, t, r, i, n) {
                        let s = this.scene,
                            a = this.camera,
                            l = this.renderTargetA,
                            o = this.renderTargetB,
                            h = this.blurMaterial,
                            c = h.kernelSequence,
                            u = t;
                        this.fullscreenMaterial = h;
                        for (let t = 0, r = c.length; t < r; ++t) {
                            let r = (1 & t) == 0 ? l : o;
                            h.kernel = c[t], h.inputBuffer = u.texture, e.setRenderTarget(r), e.render(s, a), u = r
                        }
                        this.fullscreenMaterial = this.copyMaterial, this.copyMaterial.inputBuffer = u.texture, e.setRenderTarget(this.renderToScreen ? null : r), e.render(s, a)
                    }
                    setSize(e, t) {
                        let r = this.resolution;
                        r.setBaseSize(e, t);
                        let i = r.width,
                            n = r.height;
                        this.renderTargetA.setSize(i, n), this.renderTargetB.setSize(i, n), this.blurMaterial.setSize(e, t)
                    }
                    initialize(e, t, r) {
                        void 0 !== r && (this.renderTargetA.texture.type = r, this.renderTargetB.texture.type = r, r !== i.UnsignedByteType ? (this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1", this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1") : h(e) === n && (c(this.renderTargetA.texture, n), c(this.renderTargetB.texture, n)))
                    }
                    static get AUTO_SIZE() {
                        return F.AUTO_SIZE
                    }
                },
                I = class extends T {
                    constructor(e, t) {
                        super("MaskPass", e, t), this.needsSwap = !1, this.clearPass = new R(!1, !1, !0), this.inverse = !1
                    }
                    set mainScene(e) {
                        this.scene = e
                    }
                    set mainCamera(e) {
                        this.camera = e
                    }
                    get inverted() {
                        return this.inverse
                    }
                    set inverted(e) {
                        this.inverse = e
                    }
                    get clear() {
                        return this.clearPass.enabled
                    }
                    set clear(e) {
                        this.clearPass.enabled = e
                    }
                    getClearPass() {
                        return this.clearPass
                    }
                    isInverted() {
                        return this.inverted
                    }
                    setInverted(e) {
                        this.inverted = e
                    }
                    render(e, t, r, i, n) {
                        let s = e.getContext(),
                            a = e.state.buffers,
                            l = this.scene,
                            o = this.camera,
                            h = this.clearPass,
                            c = this.inverted ? 0 : 1,
                            u = 1 - c;
                        a.color.setMask(!1), a.depth.setMask(!1), a.color.setLocked(!0), a.depth.setLocked(!0), a.stencil.setTest(!0), a.stencil.setOp(s.REPLACE, s.REPLACE, s.REPLACE), a.stencil.setFunc(s.ALWAYS, c, 4294967295), a.stencil.setClear(u), a.stencil.setLocked(!0), this.clearPass.enabled && (this.renderToScreen ? h.render(e, null) : (h.render(e, t), h.render(e, r))), this.renderToScreen ? (e.setRenderTarget(null), e.render(l, o)) : (e.setRenderTarget(t), e.render(l, o), e.setRenderTarget(r), e.render(l, o)), a.color.setLocked(!1), a.depth.setLocked(!1), a.stencil.setLocked(!1), a.stencil.setFunc(s.EQUAL, 1, 4294967295), a.stencil.setOp(s.KEEP, s.KEEP, s.KEEP), a.stencil.setLocked(!0)
                    }
                },
                L = class {
                    constructor() {
                        this.startTime = performance.now(), this.previousTime = 0, this.currentTime = 0, this._delta = 0, this._elapsed = 0, this._fixedDelta = 1e3 / 60, this.timescale = 1, this.useFixedDelta = !1, this._autoReset = !1
                    }
                    get autoReset() {
                        return this._autoReset
                    }
                    set autoReset(e) {
                        "undefined" != typeof document && void 0 !== document.hidden && (e ? document.addEventListener("visibilitychange", this) : document.removeEventListener("visibilitychange", this), this._autoReset = e)
                    }
                    get delta() {
                        return .001 * this._delta
                    }
                    get fixedDelta() {
                        return .001 * this._fixedDelta
                    }
                    set fixedDelta(e) {
                        this._fixedDelta = 1e3 * e
                    }
                    get elapsed() {
                        return .001 * this._elapsed
                    }
                    update(e) {
                        this.useFixedDelta ? this._delta = this.fixedDelta : (this.previousTime = this.currentTime, this.currentTime = (void 0 !== e ? e : performance.now()) - this.startTime, this._delta = this.currentTime - this.previousTime), this._delta *= this.timescale, this._elapsed += this._delta
                    }
                    reset() {
                        this._delta = 0, this._elapsed = 0, this.currentTime = performance.now() - this.startTime
                    }
                    handleEvent(e) {
                        document.hidden || (this.currentTime = performance.now() - this.startTime)
                    }
                    dispose() {
                        this.autoReset = !1
                    }
                },
                N = class {
                    constructor(e = null, {
                        depthBuffer: t = !0,
                        stencilBuffer: r = !1,
                        multisampling: i = 0,
                        frameBufferType: n
                    } = {}) {
                        this.renderer = null, this.inputBuffer = this.createBuffer(t, r, n, i), this.outputBuffer = this.inputBuffer.clone(), this.copyPass = new E, this.depthTexture = null, this.passes = [], this.timer = new L, this.autoRenderToScreen = !0, this.setRenderer(e)
                    }
                    get multisampling() {
                        return this.inputBuffer.samples || 0
                    }
                    set multisampling(e) {
                        let t = this.inputBuffer,
                            r = this.multisampling;
                        r > 0 && e > 0 ? (this.inputBuffer.samples = e, this.outputBuffer.samples = e, this.inputBuffer.dispose(), this.outputBuffer.dispose()) : r !== e && (this.inputBuffer.dispose(), this.outputBuffer.dispose(), this.inputBuffer = this.createBuffer(t.depthBuffer, t.stencilBuffer, t.texture.type, e), this.inputBuffer.depthTexture = this.depthTexture, this.outputBuffer = this.inputBuffer.clone())
                    }
                    getTimer() {
                        return this.timer
                    }
                    getRenderer() {
                        return this.renderer
                    }
                    setRenderer(e) {
                        if (this.renderer = e, null !== e) {
                            let t = e.getSize(new i.Vector2),
                                r = e.getContext().getContextAttributes().alpha,
                                s = this.inputBuffer.texture.type;
                            for (let a of (s === i.UnsignedByteType && h(e) === n && (c(this.inputBuffer.texture, n), c(this.outputBuffer.texture, n), this.inputBuffer.dispose(), this.outputBuffer.dispose()), e.autoClear = !1, this.setSize(t.width, t.height), this.passes)) a.initialize(e, r, s)
                        }
                    }
                    replaceRenderer(e, t = !0) {
                        let r = this.renderer,
                            i = r.domElement.parentNode;
                        return this.setRenderer(e), t && null !== i && (i.removeChild(r.domElement), i.appendChild(e.domElement)), r
                    }
                    createDepthTexture() {
                        let e = this.depthTexture = new i.DepthTexture;
                        return this.inputBuffer.depthTexture = e, this.inputBuffer.dispose(), this.inputBuffer.stencilBuffer ? (e.format = i.DepthStencilFormat, e.type = i.UnsignedInt248Type) : e.type = i.UnsignedIntType, e
                    }
                    deleteDepthTexture() {
                        if (null !== this.depthTexture)
                            for (let e of (this.depthTexture.dispose(), this.depthTexture = null, this.inputBuffer.depthTexture = null, this.inputBuffer.dispose(), this.passes)) e.setDepthTexture(null)
                    }
                    createBuffer(e, t, r, s) {
                        let a = this.renderer,
                            l = null === a ? new i.Vector2 : a.getDrawingBufferSize(new i.Vector2),
                            o = {
                                minFilter: i.LinearFilter,
                                magFilter: i.LinearFilter,
                                stencilBuffer: t,
                                depthBuffer: e,
                                type: r
                            },
                            u = new i.WebGLRenderTarget(l.width, l.height, o);
                        return s > 0 && (u.ignoreDepthForMultisampleCopy = !1, u.samples = s), r === i.UnsignedByteType && h(a) === n && c(u.texture, n), u.texture.name = "EffectComposer.Buffer", u.texture.generateMipmaps = !1, u
                    }
                    setMainScene(e) {
                        for (let t of this.passes) t.mainScene = e
                    }
                    setMainCamera(e) {
                        for (let t of this.passes) t.mainCamera = e
                    }
                    addPass(e, t) {
                        let r = this.passes,
                            n = this.renderer,
                            s = n.getDrawingBufferSize(new i.Vector2),
                            a = n.getContext().getContextAttributes().alpha,
                            l = this.inputBuffer.texture.type;
                        if (e.setRenderer(n), e.setSize(s.width, s.height), e.initialize(n, a, l), this.autoRenderToScreen && (r.length > 0 && (r[r.length - 1].renderToScreen = !1), e.renderToScreen && (this.autoRenderToScreen = !1)), void 0 !== t ? r.splice(t, 0, e) : r.push(e), this.autoRenderToScreen && (r[r.length - 1].renderToScreen = !0), e.needsDepthTexture || null !== this.depthTexture) {
                            if (null === this.depthTexture) {
                                let t = this.createDepthTexture();
                                for (e of r) e.setDepthTexture(t)
                            } else e.setDepthTexture(this.depthTexture)
                        }
                    }
                    removePass(e) {
                        let t = this.passes,
                            r = t.indexOf(e),
                            i = -1 !== r,
                            n = i && t.splice(r, 1).length > 0;
                        if (n) {
                            if (null !== this.depthTexture) {
                                let r = t.reduce((e, t) => e || t.needsDepthTexture, !1);
                                r || (e.getDepthTexture() === this.depthTexture && e.setDepthTexture(null), this.deleteDepthTexture())
                            }
                            this.autoRenderToScreen && r === t.length && (e.renderToScreen = !1, t.length > 0 && (t[t.length - 1].renderToScreen = !0))
                        }
                    }
                    removeAllPasses() {
                        let e = this.passes;
                        this.deleteDepthTexture(), e.length > 0 && (this.autoRenderToScreen && (e[e.length - 1].renderToScreen = !1), this.passes = [])
                    }
                    render(e) {
                        let t, r, i;
                        let n = this.renderer,
                            s = this.copyPass,
                            a = this.inputBuffer,
                            l = this.outputBuffer,
                            o = !1;
                        for (let h of (void 0 === e && (this.timer.update(), e = this.timer.delta), this.passes)) h.enabled && (h.render(n, a, l, e, o), h.needsSwap && (o && (s.renderToScreen = h.renderToScreen, t = n.getContext(), (r = n.state.buffers.stencil).setFunc(t.NOTEQUAL, 1, 4294967295), s.render(n, a, l, e, o), r.setFunc(t.EQUAL, 1, 4294967295)), i = a, a = l, l = i), h instanceof I ? o = !0 : h instanceof M && (o = !1))
                    }
                    setSize(e, t, r) {
                        let n = this.renderer,
                            s = n.getSize(new i.Vector2);
                        (void 0 === e || void 0 === t) && (e = s.width, t = s.height), (s.width !== e || s.height !== t) && n.setSize(e, t, r);
                        let a = n.getDrawingBufferSize(new i.Vector2);
                        for (let e of (this.inputBuffer.setSize(a.width, a.height), this.outputBuffer.setSize(a.width, a.height), this.passes)) e.setSize(a.width, a.height)
                    }
                    reset() {
                        let e = this.timer.autoReset;
                        this.dispose(), this.autoRenderToScreen = !0, this.timer.autoReset = e
                    }
                    dispose() {
                        for (let e of this.passes) e.dispose();
                        this.passes = [], null !== this.inputBuffer && this.inputBuffer.dispose(), null !== this.outputBuffer && this.outputBuffer.dispose(), this.deleteDepthTexture(), this.copyPass.dispose(), this.timer.dispose()
                    }
                },
                P = class {
                    constructor() {
                        this.shaderParts = new Map([
                            [p.FRAGMENT_HEAD, null],
                            [p.FRAGMENT_MAIN_UV, null],
                            [p.FRAGMENT_MAIN_IMAGE, null],
                            [p.VERTEX_HEAD, null],
                            [p.VERTEX_MAIN_SUPPORT, null]
                        ]), this.defines = new Map, this.uniforms = new Map, this.blendModes = new Map, this.extensions = new Set, this.attributes = f.NONE, this.varyings = new Set, this.uvTransformation = !1, this.readDepth = !1, this.colorSpace = s
                    }
                };
            Set;
            var G = new Map([
                    [d.ADD, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x+y,opacity);}"],
                    [d.ALPHA, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,min(y.a,opacity));}"],
                    [d.AVERAGE, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,(x+y)*0.5,opacity);}"],
                    [d.COLOR, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.rg,xHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}"],
                    [d.COLOR_BURN, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(step(0.0,y)*(1.0-min(vec4(1.0),(1.0-x)/y)),vec4(1.0),step(1.0,x));return mix(x,z,opacity);}"],
                    [d.COLOR_DODGE, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=step(0.0,x)*mix(min(vec4(1.0),x/max(1.0-y,1e-9)),vec4(1.0),step(1.0,y));return mix(x,z,opacity);}"],
                    [d.DARKEN, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,min(x,y),opacity);}"],
                    [d.DIFFERENCE, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,abs(x-y),opacity);}"],
                    [d.DIVIDE, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x/max(y,1e-12),opacity);}"],
                    [d.DST, null],
                    [d.EXCLUSION, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,(x+y-2.0*x*y),opacity);}"],
                    [d.HARD_LIGHT, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 a=min(x,1.0),b=min(y,1.0);vec4 z=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,y));return mix(x,z,opacity);}"],
                    [d.HARD_MIX, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,step(1.0,x+y),opacity);}"],
                    [d.HUE, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.r,xHSL.gb));return vec4(mix(x.rgb,z,opacity),y.a);}"],
                    [d.INVERT, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,1.0-y,opacity);}"],
                    [d.INVERT_RGB, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y*(1.0-x),opacity);}"],
                    [d.LIGHTEN, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,max(x,y),opacity);}"],
                    [d.LINEAR_BURN, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,clamp(y+x-1.0,0.0,1.0),opacity);}"],
                    [d.LINEAR_DODGE, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,min(x+y,1.0),opacity);}"],
                    [d.LINEAR_LIGHT, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,clamp(2.0*y+x-1.0,0.0,1.0),opacity);}"],
                    [d.LUMINOSITY, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.rg,yHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}"],
                    [d.MULTIPLY, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x*y,opacity);}"],
                    [d.NEGATION, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,1.0-abs(1.0-x-y),opacity);}"],
                    [d.NORMAL, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,opacity);}"],
                    [d.OVERLAY, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(2.0*y*x,1.0-2.0*(1.0-y)*(1.0-x),step(0.5,x));return mix(x,z,opacity);}"],
                    [d.PIN_LIGHT, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 y2=2.0*y;vec4 z=mix(mix(y2,x,step(0.5*x,y)),max(vec4(0.0),y2-1.0),step(x,(y2-1.0)));return mix(x,z,opacity);}"],
                    [d.REFLECT, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(min(x*x/max(1.0-y,1e-12),1.0),y,step(1.0,y));return mix(x,z,opacity);}"],
                    [d.SATURATION, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.r,yHSL.g,xHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}"],
                    [d.SCREEN, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x+y-min(x*y,1.0),opacity);}"],
                    [d.SOFT_LIGHT, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 y2=2.0*y;vec4 w=step(0.5,y);vec4 z=mix(x-(1.0-y2)*x*(1.0-x),mix(x+(y2-1.0)*(sqrt(x)-x),x+(y2-1.0)*x*((16.0*x-12.0)*x+3.0),w*(1.0-step(0.25,x))),w);return mix(x,z,opacity);}"],
                    [d.SRC, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return y;}"],
                    [d.SUBTRACT, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,max(x+y-1.0,0.0),opacity);}"],
                    [d.VIVID_LIGHT, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(max(1.0-min((1.0-x)/(2.0*y),1.0),0.0),min(x/(2.0*(1.0-y)),1.0),step(0.5,y));return mix(x,z,opacity);}"]
                ]),
                H = class extends i.EventDispatcher {
                    constructor(e, t = 1) {
                        super(), this._blendFunction = e, this.opacity = new i.Uniform(t)
                    }
                    getOpacity() {
                        return this.opacity.value
                    }
                    setOpacity(e) {
                        this.opacity.value = e
                    }
                    get blendFunction() {
                        return this._blendFunction
                    }
                    set blendFunction(e) {
                        this._blendFunction = e, this.dispatchEvent({
                            type: "change"
                        })
                    }
                    getBlendFunction() {
                        return this.blendFunction
                    }
                    setBlendFunction(e) {
                        this.blendFunction = e
                    }
                    getShaderCode() {
                        return G.get(this.blendFunction)
                    }
                },
                O = class extends i.EventDispatcher {
                    constructor(e, t, {
                        attributes: r = f.NONE,
                        blendFunction: i = d.NORMAL,
                        defines: n = new Map,
                        uniforms: a = new Map,
                        extensions: l = null,
                        vertexShader: o = null
                    } = {}) {
                        super(), this.name = e, this.renderer = null, this.attributes = r, this.fragmentShader = t, this.vertexShader = o, this.defines = n, this.uniforms = a, this.extensions = l, this.blendMode = new H(i), this.blendMode.addEventListener("change", e => this.setChanged()), this._inputColorSpace = s, this._outputColorSpace = ""
                    }
                    get inputColorSpace() {
                        return this._inputColorSpace
                    }
                    set inputColorSpace(e) {
                        this._inputColorSpace = e, this.setChanged()
                    }
                    get outputColorSpace() {
                        return this._outputColorSpace
                    }
                    set outputColorSpace(e) {
                        this._outputColorSpace = e, this.setChanged()
                    }
                    set mainScene(e) {}
                    set mainCamera(e) {}
                    getName() {
                        return this.name
                    }
                    setRenderer(e) {
                        this.renderer = e
                    }
                    getDefines() {
                        return this.defines
                    }
                    getUniforms() {
                        return this.uniforms
                    }
                    getExtensions() {
                        return this.extensions
                    }
                    getBlendMode() {
                        return this.blendMode
                    }
                    getAttributes() {
                        return this.attributes
                    }
                    setAttributes(e) {
                        this.attributes = e, this.setChanged()
                    }
                    getFragmentShader() {
                        return this.fragmentShader
                    }
                    setFragmentShader(e) {
                        this.fragmentShader = e, this.setChanged()
                    }
                    getVertexShader() {
                        return this.vertexShader
                    }
                    setVertexShader(e) {
                        this.vertexShader = e, this.setChanged()
                    }
                    setChanged() {
                        this.dispatchEvent({
                            type: "change"
                        })
                    }
                    setDepthTexture(e, t = i.BasicDepthPacking) {}
                    update(e, t, r) {}
                    setSize(e, t) {}
                    initialize(e, t, r) {}
                    dispose() {
                        for (let e of Object.keys(this)) {
                            let t = this[e],
                                r = t instanceof i.WebGLRenderTarget || t instanceof i.Material || t instanceof i.Texture || t instanceof T;
                            r && this[e].dispose()
                        }
                    }
                };

            function k(e, t, r) {
                let i = document.createElement("canvas"),
                    n = i.getContext("2d");
                if (i.width = e, i.height = t, r instanceof Image) n.drawImage(r, 0, 0);
                else {
                    let i = n.createImageData(e, t);
                    i.data.set(r), n.putImageData(i, 0, 0)
                }
                return i
            }
            new i.Vector3, new i.Matrix4;
            var V = class {
                    constructor(e = 0, t = 0, r = null) {
                        this.width = e, this.height = t, this.data = r
                    }
                    toCanvas() {
                        return "undefined" == typeof document ? null : k(this.width, this.height, this.data)
                    }
                    static from(e) {
                        let t;
                        let {
                            width: r,
                            height: i
                        } = e;
                        if (e instanceof Image) {
                            let n = k(r, i, e);
                            if (null !== n) {
                                let e = n.getContext("2d");
                                t = e.getImageData(0, 0, r, i).data
                            }
                        } else t = e.data;
                        return new V(r, i, t)
                    }
                },
                W = new i.Color,
                X = class extends null {
                    constructor(e, t) {
                        super(e, t, t, t), this.type = FloatType5, this.format = RGBAFormat3, this.minFilter = LinearFilter3, this.magFilter = LinearFilter3, this.wrapS = ClampToEdgeWrapping, this.wrapT = ClampToEdgeWrapping, this.wrapR = ClampToEdgeWrapping, this.unpackAlignment = 1, this.needsUpdate = !0, c(this, s), this.domainMin = new Vector33(0, 0, 0), this.domainMax = new Vector33(1, 1, 1)
                    }
                    get isLookupTexture3D() {
                        return !0
                    }
                    scaleUp(e, t = !0) {
                        let r = this.image;
                        return e <= r.width ? Promise.reject(Error("The target size must be greater than the current size")) : new Promise((i, n) => {
                            let s = URL.createObjectURL(new Blob(['"use strict";(()=>{var O=Math.pow;var _={SCALE_UP:"lut.scaleup"};var k=[new Float32Array(3),new Float32Array(3)],n=[new Float32Array(3),new Float32Array(3),new Float32Array(3),new Float32Array(3)],Z=[[new Float32Array([0,0,0]),new Float32Array([1,0,0]),new Float32Array([1,1,0]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([1,0,0]),new Float32Array([1,0,1]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,0,1]),new Float32Array([1,0,1]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,1,0]),new Float32Array([1,1,0]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,1,0]),new Float32Array([0,1,1]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,0,1]),new Float32Array([0,1,1]),new Float32Array([1,1,1])]];function d(a,t,r,m){let i=r[0]-t[0],e=r[1]-t[1],y=r[2]-t[2],h=a[0]-t[0],A=a[1]-t[1],w=a[2]-t[2],c=e*w-y*A,l=y*h-i*w,x=i*A-e*h,u=Math.sqrt(c*c+l*l+x*x),b=u*.5,s=c/u,F=l/u,f=x/u,p=-(a[0]*s+a[1]*F+a[2]*f),M=m[0]*s+m[1]*F+m[2]*f;return Math.abs(M+p)*b/3}function V(a,t,r,m,i,e){let y=(r+m*t+i*t*t)*4;e[0]=a[y+0],e[1]=a[y+1],e[2]=a[y+2]}function j(a,t,r,m,i,e){let y=r*(t-1),h=m*(t-1),A=i*(t-1),w=Math.floor(y),c=Math.floor(h),l=Math.floor(A),x=Math.ceil(y),u=Math.ceil(h),b=Math.ceil(A),s=y-w,F=h-c,f=A-l;if(w===y&&c===h&&l===A)V(a,t,y,h,A,e);else{let p;s>=F&&F>=f?p=Z[0]:s>=f&&f>=F?p=Z[1]:f>=s&&s>=F?p=Z[2]:F>=s&&s>=f?p=Z[3]:F>=f&&f>=s?p=Z[4]:f>=F&&F>=s&&(p=Z[5]);let[M,g,X,Y]=p,P=k[0];P[0]=s,P[1]=F,P[2]=f;let o=k[1],L=x-w,S=u-c,U=b-l;o[0]=L*M[0]+w,o[1]=S*M[1]+c,o[2]=U*M[2]+l,V(a,t,o[0],o[1],o[2],n[0]),o[0]=L*g[0]+w,o[1]=S*g[1]+c,o[2]=U*g[2]+l,V(a,t,o[0],o[1],o[2],n[1]),o[0]=L*X[0]+w,o[1]=S*X[1]+c,o[2]=U*X[2]+l,V(a,t,o[0],o[1],o[2],n[2]),o[0]=L*Y[0]+w,o[1]=S*Y[1]+c,o[2]=U*Y[2]+l,V(a,t,o[0],o[1],o[2],n[3]);let T=d(g,X,Y,P)*6,q=d(M,X,Y,P)*6,C=d(M,g,Y,P)*6,E=d(M,g,X,P)*6;n[0][0]*=T,n[0][1]*=T,n[0][2]*=T,n[1][0]*=q,n[1][1]*=q,n[1][2]*=q,n[2][0]*=C,n[2][1]*=C,n[2][2]*=C,n[3][0]*=E,n[3][1]*=E,n[3][2]*=E,e[0]=n[0][0]+n[1][0]+n[2][0]+n[3][0],e[1]=n[0][1]+n[1][1]+n[2][1]+n[3][1],e[2]=n[0][2]+n[1][2]+n[2][2]+n[3][2]}}var v=class{static expand(t,r){let m=Math.cbrt(t.length/4),i=new Float32Array(3),e=new t.constructor(O(r,3)*4),y=t instanceof Uint8Array?255:1,h=O(r,2),A=1/(r-1);for(let w=0;w<r;++w)for(let c=0;c<r;++c)for(let l=0;l<r;++l){let x=l*A,u=c*A,b=w*A,s=Math.round(l+c*r+w*h)*4;j(t,m,x,u,b,i),e[s+0]=i[0],e[s+1]=i[1],e[s+2]=i[2],e[s+3]=y}return e}};self.addEventListener("message",a=>{let t=a.data,r=t.data;switch(t.operation){case _.SCALE_UP:r=v.expand(r,t.size);break}postMessage(r,[r.buffer]),close()});})();\n'], {
                                    type: "text/javascript"
                                })),
                                a = new Worker(s);
                            a.addEventListener("error", e => n(e.error)), a.addEventListener("message", t => {
                                let r = new X(t.data, e);
                                u(this, r), r.type = this.type, r.name = this.name, URL.revokeObjectURL(s), i(r)
                            });
                            let l = t ? [r.data.buffer] : [];
                            a.postMessage({
                                operation: g.SCALE_UP,
                                data: r.data,
                                size: e
                            }, l)
                        })
                    }
                    applyLUT(e) {
                        let t = this.image,
                            r = e.image,
                            i = Math.min(t.width, t.height, t.depth),
                            n = Math.min(r.width, r.height, r.depth);
                        if (i !== n) console.error("Size mismatch");
                        else if (e.type !== FloatType5 || this.type !== FloatType5) console.error("Both LUTs must be FloatType textures");
                        else if (e.format !== RGBAFormat3 || this.format !== RGBAFormat3) console.error("Both LUTs must be RGBA textures");
                        else {
                            let e = t.data,
                                n = r.data,
                                s = i ** 2,
                                a = i - 1;
                            for (let t = 0, r = i ** 3; t < r; ++t) {
                                let r = 4 * t,
                                    l = e[r + 0] * a,
                                    o = e[r + 1] * a,
                                    h = e[r + 2] * a,
                                    c = 4 * Math.round(l + o * i + h * s);
                                e[r + 0] = n[c + 0], e[r + 1] = n[c + 1], e[r + 2] = n[c + 2]
                            }
                            this.needsUpdate = !0
                        }
                        return this
                    }
                    convertToUint8() {
                        if (this.type === FloatType5) {
                            let e = this.image.data,
                                t = new Uint8Array(e.length);
                            for (let r = 0, i = e.length; r < i; ++r) t[r] = 255 * e[r] + .5;
                            this.image.data = t, this.type = UnsignedByteType14, this.needsUpdate = !0
                        }
                        return this
                    }
                    convertToFloat() {
                        if (this.type === UnsignedByteType14) {
                            let e = this.image.data,
                                t = new Float32Array(e.length);
                            for (let r = 0, i = e.length; r < i; ++r) t[r] = e[r] / 255;
                            this.image.data = t, this.type = FloatType5, this.needsUpdate = !0
                        }
                        return this
                    }
                    convertToRGBA() {
                        return console.warn("LookupTexture", "convertToRGBA() is deprecated, LUTs are now RGBA by default"), this
                    }
                    convertLinearToSRGB() {
                        let e = this.image.data;
                        if (this.type === FloatType5) {
                            for (let t = 0, r = e.length; t < r; t += 4) W.fromArray(e, t).convertLinearToSRGB().toArray(e, t);
                            c(this, n), this.needsUpdate = !0
                        } else console.error("Color space conversion requires FloatType data");
                        return this
                    }
                    convertSRGBToLinear() {
                        let e = this.image.data;
                        if (this.type === FloatType5) {
                            for (let t = 0, r = e.length; t < r; t += 4) W.fromArray(e, t).convertSRGBToLinear().toArray(e, t);
                            c(this, s), this.needsUpdate = !0
                        } else console.error("Color space conversion requires FloatType data");
                        return this
                    }
                    toDataTexture() {
                        let e = this.image.width,
                            t = this.image.height * this.image.depth,
                            r = new DataTexture2(this.image.data, e, t);
                        return r.name = this.name, r.type = this.type, r.format = this.format, r.minFilter = LinearFilter3, r.magFilter = LinearFilter3, r.wrapS = this.wrapS, r.wrapT = this.wrapT, r.generateMipmaps = !1, r.needsUpdate = !0, u(this, r), r
                    }
                    static from(e) {
                        let t;
                        let r = e.image,
                            {
                                width: i,
                                height: n
                            } = r,
                            s = Math.min(i, n);
                        if (r instanceof Image) {
                            let e = V.from(r),
                                a = e.data;
                            if (i > n) {
                                t = new Uint8Array(a.length);
                                for (let e = 0; e < s; ++e)
                                    for (let r = 0; r < s; ++r)
                                        for (let i = 0; i < s; ++i) {
                                            let n = (i + e * s + r * s * s) * 4,
                                                l = (i + r * s + e * s * s) * 4;
                                            t[l + 0] = a[n + 0], t[l + 1] = a[n + 1], t[l + 2] = a[n + 2], t[l + 3] = a[n + 3]
                                        }
                            } else t = new Uint8Array(a.buffer)
                        } else t = r.data.slice();
                        let a = new X(t, s);
                        return a.type = e.type, a.name = e.name, u(e, a), a
                    }
                    static createNeutral(e) {
                        let t = new Float32Array(e ** 3 * 4),
                            r = e ** 2,
                            i = 1 / (e - 1);
                        for (let n = 0; n < e; ++n)
                            for (let s = 0; s < e; ++s)
                                for (let a = 0; a < e; ++a) {
                                    let l = (n + s * e + a * r) * 4;
                                    t[l + 0] = n * i, t[l + 1] = s * i, t[l + 2] = a * i, t[l + 3] = 1
                                }
                        let n = new X(t, e);
                        return n.name = "neutral", n
                    }
                };

            function K(e, t, r, i) {
                var n;
                return (n = e + (t - e) * .75) + (r + (i - r) * .75 - n) * .875
            }
            new Float32Array(3), new Float32Array(3), new Float32Array(3), new Float32Array(3), new Float32Array(3), new Float32Array(3), new Float32Array([0, 0, 0]), new Float32Array([1, 0, 0]), new Float32Array([1, 1, 0]), new Float32Array([1, 1, 1]), new Float32Array([0, 0, 0]), new Float32Array([1, 0, 0]), new Float32Array([1, 0, 1]), new Float32Array([1, 1, 1]), new Float32Array([0, 0, 0]), new Float32Array([0, 0, 1]), new Float32Array([1, 0, 1]), new Float32Array([1, 1, 1]), new Float32Array([0, 0, 0]), new Float32Array([0, 1, 0]), new Float32Array([1, 1, 0]), new Float32Array([1, 1, 1]), new Float32Array([0, 0, 0]), new Float32Array([0, 1, 0]), new Float32Array([0, 1, 1]), new Float32Array([1, 1, 1]), new Float32Array([0, 0, 0]), new Float32Array([0, 0, 1]), new Float32Array([0, 1, 1]), new Float32Array([1, 1, 1]), new Float32Array(2), new Float32Array(2), new Float32Array([0, -.25, .25, -.125, .125, -.375, .375]), new Float32Array([0, 0]), new Float32Array([.25, -.25]), new Float32Array([-.25, .25]), new Float32Array([.125, -.125]), new Float32Array([-.125, .125]), new Uint8Array([0, 0]), new Uint8Array([3, 0]), new Uint8Array([0, 3]), new Uint8Array([3, 3]), new Uint8Array([1, 0]), new Uint8Array([4, 0]), new Uint8Array([1, 3]), new Uint8Array([4, 3]), new Uint8Array([0, 1]), new Uint8Array([3, 1]), new Uint8Array([0, 4]), new Uint8Array([3, 4]), new Uint8Array([1, 1]), new Uint8Array([4, 1]), new Uint8Array([1, 4]), new Uint8Array([4, 4]), new Uint8Array([0, 0]), new Uint8Array([1, 0]), new Uint8Array([0, 2]), new Uint8Array([1, 2]), new Uint8Array([2, 0]), new Uint8Array([3, 0]), new Uint8Array([2, 2]), new Uint8Array([3, 2]), new Uint8Array([0, 1]), new Uint8Array([1, 1]), new Uint8Array([0, 3]), new Uint8Array([1, 3]), new Uint8Array([2, 1]), new Uint8Array([3, 1]), new Uint8Array([2, 3]), new Uint8Array([3, 3]), K(0, 0, 0, 0), new Float32Array([0, 0, 0, 0]), K(0, 0, 0, 1), new Float32Array([0, 0, 0, 1]), K(0, 0, 1, 0), new Float32Array([0, 0, 1, 0]), K(0, 0, 1, 1), new Float32Array([0, 0, 1, 1]), K(0, 1, 0, 0), new Float32Array([0, 1, 0, 0]), K(0, 1, 0, 1), new Float32Array([0, 1, 0, 1]), K(0, 1, 1, 0), new Float32Array([0, 1, 1, 0]), K(0, 1, 1, 1), new Float32Array([0, 1, 1, 1]), K(1, 0, 0, 0), new Float32Array([1, 0, 0, 0]), K(1, 0, 0, 1), new Float32Array([1, 0, 0, 1]), K(1, 0, 1, 0), new Float32Array([1, 0, 1, 0]), K(1, 0, 1, 1), new Float32Array([1, 0, 1, 1]), K(1, 1, 0, 0), new Float32Array([1, 1, 0, 0]), K(1, 1, 0, 1), new Float32Array([1, 1, 0, 1]), K(1, 1, 1, 0), new Float32Array([1, 1, 1, 0]), K(1, 1, 1, 1), new Float32Array([1, 1, 1, 1]), new i.Vector3, new i.Vector3
        }
    }
]);