(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5799], {
        2520: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return v
                }
            });
            let r = i(8266),
                n = i(7144),
                o = n._(i(959)),
                a = r._(i(9195)),
                s = i(8568),
                l = i(6275),
                c = i(666);
            i(578);
            let u = r._(i(7311)),
                f = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    dangerouslyAllowSVG: !1,
                    unoptimized: !1
                };

            function d(e) {
                return void 0 !== e.default
            }

            function p(e) {
                return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
            }

            function h(e, t, i, r, n, o, a) {
                if (!e || e["data-loaded-src"] === t) return;
                e["data-loaded-src"] = t;
                let s = "decode" in e ? e.decode() : Promise.resolve();
                s.catch(() => {}).then(() => {
                    if (e.parentElement && e.isConnected) {
                        if ("blur" === i && o(!0), null == r ? void 0 : r.current) {
                            let t = new Event("load");
                            Object.defineProperty(t, "target", {
                                writable: !1,
                                value: e
                            });
                            let i = !1,
                                n = !1;
                            r.current({ ...t,
                                nativeEvent: t,
                                currentTarget: e,
                                target: e,
                                isDefaultPrevented: () => i,
                                isPropagationStopped: () => n,
                                persist: () => {},
                                preventDefault: () => {
                                    i = !0, t.preventDefault()
                                },
                                stopPropagation: () => {
                                    n = !0, t.stopPropagation()
                                }
                            })
                        }(null == n ? void 0 : n.current) && n.current(e)
                    }
                })
            }

            function y(e) {
                let [t, i] = o.version.split("."), r = parseInt(t, 10), n = parseInt(i, 10);
                return r > 18 || 18 === r && n >= 3 ? {
                    fetchPriority: e
                } : {
                    fetchpriority: e
                }
            }
            let m = (0, o.forwardRef)((e, t) => {
                    let {
                        imgAttributes: i,
                        heightInt: r,
                        widthInt: n,
                        qualityInt: a,
                        className: s,
                        imgStyle: l,
                        blurStyle: c,
                        isLazy: u,
                        fetchPriority: f,
                        fill: d,
                        placeholder: p,
                        loading: m,
                        srcString: g,
                        config: v,
                        unoptimized: b,
                        loader: x,
                        onLoadRef: w,
                        onLoadingCompleteRef: S,
                        setBlurComplete: A,
                        setShowAltText: E,
                        onLoad: M,
                        onError: T,
                        ...P
                    } = e;
                    return m = u ? "lazy" : m, o.default.createElement("img", { ...P,
                        ...y(f),
                        loading: m,
                        width: n,
                        height: r,
                        decoding: "async",
                        "data-nimg": d ? "fill" : "1",
                        className: s,
                        style: { ...l,
                            ...c
                        },
                        ...i,
                        ref: (0, o.useCallback)(e => {
                            t && ("function" == typeof t ? t(e) : "object" == typeof t && (t.current = e)), e && (T && (e.src = e.src), e.complete && h(e, g, p, w, S, A, b))
                        }, [g, p, w, S, A, T, b, t]),
                        onLoad: e => {
                            let t = e.currentTarget;
                            h(t, g, p, w, S, A, b)
                        },
                        onError: e => {
                            E(!0), "blur" === p && A(!0), T && T(e)
                        }
                    })
                }),
                g = (0, o.forwardRef)((e, t) => {
                    var i;
                    let r, n, {
                            src: h,
                            sizes: g,
                            unoptimized: v = !1,
                            priority: b = !1,
                            loading: x,
                            className: w,
                            quality: S,
                            width: A,
                            height: E,
                            fill: M,
                            style: T,
                            onLoad: P,
                            onLoadingComplete: I,
                            placeholder: _ = "empty",
                            blurDataURL: z,
                            fetchPriority: k,
                            layout: C,
                            objectFit: B,
                            objectPosition: L,
                            lazyBoundary: O,
                            lazyRoot: V,
                            ...N
                        } = e,
                        U = (0, o.useContext)(c.ImageConfigContext),
                        D = (0, o.useMemo)(() => {
                            let e = f || U || l.imageConfigDefault,
                                t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
                                i = e.deviceSizes.sort((e, t) => e - t);
                            return { ...e,
                                allSizes: t,
                                deviceSizes: i
                            }
                        }, [U]),
                        R = N.loader || u.default;
                    delete N.loader;
                    let j = "__next_img_default" in R;
                    if (j) {
                        if ("custom" === D.loader) throw Error('Image with src "' + h + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')
                    } else {
                        let e = R;
                        R = t => {
                            let {
                                config: i,
                                ...r
                            } = t;
                            return e(r)
                        }
                    }
                    if (C) {
                        "fill" === C && (M = !0);
                        let e = {
                            intrinsic: {
                                maxWidth: "100%",
                                height: "auto"
                            },
                            responsive: {
                                width: "100%",
                                height: "auto"
                            }
                        }[C];
                        e && (T = { ...T,
                            ...e
                        });
                        let t = {
                            responsive: "100vw",
                            fill: "100vw"
                        }[C];
                        t && !g && (g = t)
                    }
                    let G = "",
                        W = p(A),
                        H = p(E);
                    if ("object" == typeof(i = h) && (d(i) || void 0 !== i.src)) {
                        let e = d(h) ? h.default : h;
                        if (!e.src) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(e));
                        if (!e.height || !e.width) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(e));
                        if (r = e.blurWidth, n = e.blurHeight, z = z || e.blurDataURL, G = e.src, !M) {
                            if (W || H) {
                                if (W && !H) {
                                    let t = W / e.width;
                                    H = Math.round(e.height * t)
                                } else if (!W && H) {
                                    let t = H / e.height;
                                    W = Math.round(e.width * t)
                                }
                            } else W = e.width, H = e.height
                        }
                    }
                    let F = !b && ("lazy" === x || void 0 === x);
                    (!(h = "string" == typeof h ? h : G) || h.startsWith("data:") || h.startsWith("blob:")) && (v = !0, F = !1), D.unoptimized && (v = !0), j && h.endsWith(".svg") && !D.dangerouslyAllowSVG && (v = !0), b && (k = "high");
                    let [q, Y] = (0, o.useState)(!1), [J, X] = (0, o.useState)(!1), Q = p(S), Z = Object.assign(M ? {
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        objectFit: B,
                        objectPosition: L
                    } : {}, J ? {} : {
                        color: "transparent"
                    }, T), $ = "blur" === _ && z && !q ? {
                        backgroundSize: Z.objectFit || "cover",
                        backgroundPosition: Z.objectPosition || "50% 50%",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: 'url("data:image/svg+xml;charset=utf-8,' + (0, s.getImageBlurSvg)({
                            widthInt: W,
                            heightInt: H,
                            blurWidth: r,
                            blurHeight: n,
                            blurDataURL: z,
                            objectFit: Z.objectFit
                        }) + '")'
                    } : {}, K = function(e) {
                        let {
                            config: t,
                            src: i,
                            unoptimized: r,
                            width: n,
                            quality: o,
                            sizes: a,
                            loader: s
                        } = e;
                        if (r) return {
                            src: i,
                            srcSet: void 0,
                            sizes: void 0
                        };
                        let {
                            widths: l,
                            kind: c
                        } = function(e, t, i) {
                            let {
                                deviceSizes: r,
                                allSizes: n
                            } = e;
                            if (i) {
                                let e = /(^|\s)(1?\d?\d)vw/g,
                                    t = [];
                                for (let r; r = e.exec(i); r) t.push(parseInt(r[2]));
                                if (t.length) {
                                    let e = .01 * Math.min(...t);
                                    return {
                                        widths: n.filter(t => t >= r[0] * e),
                                        kind: "w"
                                    }
                                }
                                return {
                                    widths: n,
                                    kind: "w"
                                }
                            }
                            if ("number" != typeof t) return {
                                widths: r,
                                kind: "w"
                            };
                            let o = [...new Set([t, 2 * t].map(e => n.find(t => t >= e) || n[n.length - 1]))];
                            return {
                                widths: o,
                                kind: "x"
                            }
                        }(t, n, a), u = l.length - 1;
                        return {
                            sizes: a || "w" !== c ? a : "100vw",
                            srcSet: l.map((e, r) => s({
                                config: t,
                                src: i,
                                quality: o,
                                width: e
                            }) + " " + ("w" === c ? e : r + 1) + c).join(", "),
                            src: s({
                                config: t,
                                src: i,
                                quality: o,
                                width: l[u]
                            })
                        }
                    }({
                        config: D,
                        src: h,
                        unoptimized: v,
                        width: W,
                        quality: Q,
                        sizes: g,
                        loader: R
                    }), ee = h, et = (0, o.useRef)(P);
                    (0, o.useEffect)(() => {
                        et.current = P
                    }, [P]);
                    let ei = (0, o.useRef)(I);
                    (0, o.useEffect)(() => {
                        ei.current = I
                    }, [I]);
                    let er = {
                        isLazy: F,
                        imgAttributes: K,
                        heightInt: H,
                        widthInt: W,
                        qualityInt: Q,
                        className: w,
                        imgStyle: Z,
                        blurStyle: $,
                        loading: x,
                        config: D,
                        fetchPriority: k,
                        fill: M,
                        unoptimized: v,
                        placeholder: _,
                        loader: R,
                        srcString: ee,
                        onLoadRef: et,
                        onLoadingCompleteRef: ei,
                        setBlurComplete: Y,
                        setShowAltText: X,
                        ...N
                    };
                    return o.default.createElement(o.default.Fragment, null, o.default.createElement(m, { ...er,
                        ref: t
                    }), b ? o.default.createElement(a.default, null, o.default.createElement("link", {
                        key: "__nimg-" + K.src + K.srcSet + K.sizes,
                        rel: "preload",
                        as: "image",
                        href: K.srcSet ? void 0 : K.src,
                        imageSrcSet: K.srcSet,
                        imageSizes: K.sizes,
                        crossOrigin: N.crossOrigin,
                        referrerPolicy: N.referrerPolicy,
                        ...y(k)
                    })) : null)
                }),
                v = g;
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        8568: function(e, t) {
            "use strict";

            function i(e) {
                let {
                    widthInt: t,
                    heightInt: i,
                    blurWidth: r,
                    blurHeight: n,
                    blurDataURL: o,
                    objectFit: a
                } = e, s = r || t, l = n || i, c = o.startsWith("data:image/jpeg") ? "%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%" : "";
                return s && l ? "%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 " + s + " " + l + "'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='" + (r && n ? "1" : "20") + "'/%3E" + c + "%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='" + o + "'/%3E%3C/svg%3E" : "%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='" + ("contain" === a ? "xMidYMid" : "cover" === a ? "xMidYMid slice" : "none") + "' x='0' y='0' height='100%25' width='100%25' href='" + o + "'/%3E%3C/svg%3E"
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getImageBlurSvg", {
                enumerable: !0,
                get: function() {
                    return i
                }
            })
        },
        7311: function(e, t) {
            "use strict";

            function i(e) {
                let {
                    config: t,
                    src: i,
                    width: r,
                    quality: n
                } = e;
                return t.path + "?url=" + encodeURIComponent(i) + "&w=" + r + "&q=" + (n || 75)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return r
                }
            }), i.__next_img_default = !0;
            let r = i
        },
        8725: function(e, t, i) {
            e.exports = i(2520)
        },
        1018: function(e, t, i) {
            "use strict";
            i.d(t, {
                w: function() {
                    return a
                }
            });
            var r = i(5217),
                n = i(1460),
                o = i(4434);
            class a extends r.w {
                constructor(e = new n.L, t = new o.Y({
                    color: 16777215 * Math.random()
                })) {
                    super(e, t), this.isLine2 = !0, this.type = "Line2"
                }
            }
        },
        1460: function(e, t, i) {
            "use strict";
            i.d(t, {
                L: function() {
                    return n
                }
            });
            var r = i(4730);
            class n extends r.z {
                constructor() {
                    super(), this.isLineGeometry = !0, this.type = "LineGeometry"
                }
                setPositions(e) {
                    let t = e.length - 3,
                        i = new Float32Array(2 * t);
                    for (let r = 0; r < t; r += 3) i[2 * r] = e[r], i[2 * r + 1] = e[r + 1], i[2 * r + 2] = e[r + 2], i[2 * r + 3] = e[r + 3], i[2 * r + 4] = e[r + 4], i[2 * r + 5] = e[r + 5];
                    return super.setPositions(i), this
                }
                setColors(e) {
                    let t = e.length - 3,
                        i = new Float32Array(2 * t);
                    for (let r = 0; r < t; r += 3) i[2 * r] = e[r], i[2 * r + 1] = e[r + 1], i[2 * r + 2] = e[r + 2], i[2 * r + 3] = e[r + 3], i[2 * r + 4] = e[r + 4], i[2 * r + 5] = e[r + 5];
                    return super.setColors(i), this
                }
                fromLine(e) {
                    let t = e.geometry;
                    return this.setPositions(t.attributes.position.array), this
                }
            }
        },
        4434: function(e, t, i) {
            "use strict";
            i.d(t, {
                Y: function() {
                    return n
                }
            });
            var r = i(688);
            class n extends r.ShaderMaterial {
                constructor(e) {
                    super({
                        type: "LineMaterial",
                        uniforms: r.UniformsUtils.clone(r.UniformsUtils.merge([r.UniformsLib.common, r.UniformsLib.fog, {
                            worldUnits: {
                                value: 1
                            },
                            linewidth: {
                                value: 1
                            },
                            resolution: {
                                value: new r.Vector2(1, 1)
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
                        }])),
                        vertexShader: `
				#include <common>
				#include <color_pars_vertex>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				attribute vec3 instanceColorStart;
				attribute vec3 instanceColorEnd;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`,
                        fragmentShader: `
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <color_pars_fragment>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );

					#include <logdepthbuf_fragment>
					#include <color_fragment>

					gl_FragColor = vec4( diffuseColor.rgb, alpha );

					#include <tonemapping_fragment>
					#include <encodings_fragment>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,
                        clipping: !0
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
                    }), this.setValues(e)
                }
            }
        },
        5217: function(e, t, i) {
            "use strict";
            let r, n, o, a;
            i.d(t, {
                w: function() {
                    return A
                }
            });
            var s = i(688),
                l = i(4730),
                c = i(4434);
            let u = new s.Vector3,
                f = new s.Vector3,
                d = new s.Vector4,
                p = new s.Vector4,
                h = new s.Vector4,
                y = new s.Vector3,
                m = new s.Matrix4,
                g = new s.Line3,
                v = new s.Vector3,
                b = new s.Box3,
                x = new s.Sphere,
                w = new s.Vector4;

            function S(e, t, i) {
                return w.set(0, 0, -t, 1).applyMatrix4(e.projectionMatrix), w.multiplyScalar(1 / w.w), w.x = a / i.width, w.y = a / i.height, w.applyMatrix4(e.projectionMatrixInverse), w.multiplyScalar(1 / w.w), Math.abs(Math.max(w.x, w.y))
            }
            class A extends s.Mesh {
                constructor(e = new l.z, t = new c.Y({
                    color: 16777215 * Math.random()
                })) {
                    super(e, t), this.isLineSegments2 = !0, this.type = "LineSegments2"
                }
                computeLineDistances() {
                    let e = this.geometry,
                        t = e.attributes.instanceStart,
                        i = e.attributes.instanceEnd,
                        r = new Float32Array(2 * t.count);
                    for (let e = 0, n = 0, o = t.count; e < o; e++, n += 2) u.fromBufferAttribute(t, e), f.fromBufferAttribute(i, e), r[n] = 0 === n ? 0 : r[n - 1], r[n + 1] = r[n] + u.distanceTo(f);
                    let n = new s.InstancedInterleavedBuffer(r, 2, 1);
                    return e.setAttribute("instanceDistanceStart", new s.InterleavedBufferAttribute(n, 1, 0)), e.setAttribute("instanceDistanceEnd", new s.InterleavedBufferAttribute(n, 1, 1)), this
                }
                raycast(e, t) {
                    let i, l;
                    let c = this.material.worldUnits,
                        u = e.camera;
                    null !== u || c || console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');
                    let f = void 0 !== e.params.Line2 && e.params.Line2.threshold || 0;
                    r = e.ray;
                    let w = this.matrixWorld,
                        A = this.geometry,
                        E = this.material;
                    if (a = E.linewidth + f, n = A.attributes.instanceStart, o = A.attributes.instanceEnd, null === A.boundingSphere && A.computeBoundingSphere(), x.copy(A.boundingSphere).applyMatrix4(w), c) i = .5 * a;
                    else {
                        let e = Math.max(u.near, x.distanceToPoint(r.origin));
                        i = S(u, e, E.resolution)
                    }
                    if (x.radius += i, !1 !== r.intersectsSphere(x)) {
                        if (null === A.boundingBox && A.computeBoundingBox(), b.copy(A.boundingBox).applyMatrix4(w), c) l = .5 * a;
                        else {
                            let e = Math.max(u.near, b.distanceToPoint(r.origin));
                            l = S(u, e, E.resolution)
                        }
                        b.expandByScalar(l), !1 !== r.intersectsBox(b) && (c ? function(e, t) {
                            for (let i = 0, l = n.count; i < l; i++) {
                                g.start.fromBufferAttribute(n, i), g.end.fromBufferAttribute(o, i);
                                let l = new s.Vector3,
                                    c = new s.Vector3;
                                r.distanceSqToSegment(g.start, g.end, c, l);
                                let u = c.distanceTo(l) < .5 * a;
                                u && t.push({
                                    point: c,
                                    pointOnLine: l,
                                    distance: r.origin.distanceTo(c),
                                    object: e,
                                    face: null,
                                    faceIndex: i,
                                    uv: null,
                                    uv2: null
                                })
                            }
                        }(this, t) : function(e, t, i) {
                            let n = t.projectionMatrix,
                                o = e.material,
                                l = o.resolution,
                                c = e.matrixWorld,
                                u = e.geometry,
                                f = u.attributes.instanceStart,
                                b = u.attributes.instanceEnd,
                                x = -t.near;
                            r.at(1, h), h.w = 1, h.applyMatrix4(t.matrixWorldInverse), h.applyMatrix4(n), h.multiplyScalar(1 / h.w), h.x *= l.x / 2, h.y *= l.y / 2, h.z = 0, y.copy(h), m.multiplyMatrices(t.matrixWorldInverse, c);
                            for (let t = 0, o = f.count; t < o; t++) {
                                d.fromBufferAttribute(f, t), p.fromBufferAttribute(b, t), d.w = 1, p.w = 1, d.applyMatrix4(m), p.applyMatrix4(m);
                                let o = d.z > x && p.z > x;
                                if (o) continue;
                                if (d.z > x) {
                                    let e = d.z - p.z,
                                        t = (d.z - x) / e;
                                    d.lerp(p, t)
                                } else if (p.z > x) {
                                    let e = p.z - d.z,
                                        t = (p.z - x) / e;
                                    p.lerp(d, t)
                                }
                                d.applyMatrix4(n), p.applyMatrix4(n), d.multiplyScalar(1 / d.w), p.multiplyScalar(1 / p.w), d.x *= l.x / 2, d.y *= l.y / 2, p.x *= l.x / 2, p.y *= l.y / 2, g.start.copy(d), g.start.z = 0, g.end.copy(p), g.end.z = 0;
                                let u = g.closestPointToPointParameter(y, !0);
                                g.at(u, v);
                                let h = s.MathUtils.lerp(d.z, p.z, u),
                                    w = h >= -1 && h <= 1,
                                    S = y.distanceTo(v) < .5 * a;
                                if (w && S) {
                                    g.start.fromBufferAttribute(f, t), g.end.fromBufferAttribute(b, t), g.start.applyMatrix4(c), g.end.applyMatrix4(c);
                                    let n = new s.Vector3,
                                        o = new s.Vector3;
                                    r.distanceSqToSegment(g.start, g.end, o, n), i.push({
                                        point: o,
                                        pointOnLine: n,
                                        distance: r.origin.distanceTo(o),
                                        object: e,
                                        face: null,
                                        faceIndex: t,
                                        uv: null,
                                        uv2: null
                                    })
                                }
                            }
                        }(this, u, t))
                    }
                }
            }
        },
        4730: function(e, t, i) {
            "use strict";
            i.d(t, {
                z: function() {
                    return a
                }
            });
            var r = i(688);
            let n = new r.Box3,
                o = new r.Vector3;
            class a extends r.InstancedBufferGeometry {
                constructor() {
                    super(), this.isLineSegmentsGeometry = !0, this.type = "LineSegmentsGeometry", this.setIndex([0, 2, 1, 2, 3, 1, 2, 4, 3, 4, 5, 3, 4, 6, 5, 6, 7, 5]), this.setAttribute("position", new r.Float32BufferAttribute([-1, 2, 0, 1, 2, 0, -1, 1, 0, 1, 1, 0, -1, 0, 0, 1, 0, 0, -1, -1, 0, 1, -1, 0], 3)), this.setAttribute("uv", new r.Float32BufferAttribute([-1, 2, 1, 2, -1, 1, 1, 1, -1, -1, 1, -1, -1, -2, 1, -2], 2))
                }
                applyMatrix4(e) {
                    let t = this.attributes.instanceStart,
                        i = this.attributes.instanceEnd;
                    return void 0 !== t && (t.applyMatrix4(e), i.applyMatrix4(e), t.needsUpdate = !0), null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this
                }
                setPositions(e) {
                    let t;
                    e instanceof Float32Array ? t = e : Array.isArray(e) && (t = new Float32Array(e));
                    let i = new r.InstancedInterleavedBuffer(t, 6, 1);
                    return this.setAttribute("instanceStart", new r.InterleavedBufferAttribute(i, 3, 0)), this.setAttribute("instanceEnd", new r.InterleavedBufferAttribute(i, 3, 3)), this.computeBoundingBox(), this.computeBoundingSphere(), this
                }
                setColors(e) {
                    let t;
                    e instanceof Float32Array ? t = e : Array.isArray(e) && (t = new Float32Array(e));
                    let i = new r.InstancedInterleavedBuffer(t, 6, 1);
                    return this.setAttribute("instanceColorStart", new r.InterleavedBufferAttribute(i, 3, 0)), this.setAttribute("instanceColorEnd", new r.InterleavedBufferAttribute(i, 3, 3)), this
                }
                fromWireframeGeometry(e) {
                    return this.setPositions(e.attributes.position.array), this
                }
                fromEdgesGeometry(e) {
                    return this.setPositions(e.attributes.position.array), this
                }
                fromMesh(e) {
                    return this.fromWireframeGeometry(new r.WireframeGeometry(e.geometry)), this
                }
                fromLineSegments(e) {
                    let t = e.geometry;
                    return this.setPositions(t.attributes.position.array), this
                }
                computeBoundingBox() {
                    null === this.boundingBox && (this.boundingBox = new r.Box3);
                    let e = this.attributes.instanceStart,
                        t = this.attributes.instanceEnd;
                    void 0 !== e && void 0 !== t && (this.boundingBox.setFromBufferAttribute(e), n.setFromBufferAttribute(t), this.boundingBox.union(n))
                }
                computeBoundingSphere() {
                    null === this.boundingSphere && (this.boundingSphere = new r.Sphere), null === this.boundingBox && this.computeBoundingBox();
                    let e = this.attributes.instanceStart,
                        t = this.attributes.instanceEnd;
                    if (void 0 !== e && void 0 !== t) {
                        let i = this.boundingSphere.center;
                        this.boundingBox.getCenter(i);
                        let r = 0;
                        for (let n = 0, a = e.count; n < a; n++) o.fromBufferAttribute(e, n), r = Math.max(r, i.distanceToSquared(o)), o.fromBufferAttribute(t, n), r = Math.max(r, i.distanceToSquared(o));
                        this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.", this)
                    }
                }
                toJSON() {}
                applyMatrix(e) {
                    return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."), this.applyMatrix4(e)
                }
            }
        },
        7345: function(e, t, i) {
            "use strict";
            i.d(t, {
                u: function() {
                    return n
                }
            });
            var r = i(688);
            class n extends r.Loader {
                constructor(e) {
                    super(e), this.defaultDPI = 90, this.defaultUnit = "px"
                }
                load(e, t, i, n) {
                    let o = this,
                        a = new r.FileLoader(o.manager);
                    a.setPath(o.path), a.setRequestHeader(o.requestHeader), a.setWithCredentials(o.withCredentials), a.load(e, function(i) {
                        try {
                            t(o.parse(i))
                        } catch (t) {
                            n ? n(t) : console.error(t), o.manager.itemError(e)
                        }
                    }, i, n)
                }
                parse(e) {
                    let t = this;

                    function i(e, t, i, r, o, a, s, l) {
                        if (0 == t || 0 == i) {
                            e.lineTo(l.x, l.y);
                            return
                        }
                        r = r * Math.PI / 180, t = Math.abs(t), i = Math.abs(i);
                        let c = (s.x - l.x) / 2,
                            u = (s.y - l.y) / 2,
                            f = Math.cos(r) * c + Math.sin(r) * u,
                            d = -Math.sin(r) * c + Math.cos(r) * u,
                            p = t * t,
                            h = i * i,
                            y = f * f,
                            m = d * d,
                            g = y / p + m / h;
                        if (g > 1) {
                            let e = Math.sqrt(g);
                            t *= e, i *= e, p = t * t, h = i * i
                        }
                        let v = p * m + h * y,
                            b = (p * h - v) / v,
                            x = Math.sqrt(Math.max(0, b));
                        o === a && (x = -x);
                        let w = x * t * d / i,
                            S = -x * i * f / t,
                            A = Math.cos(r) * w - Math.sin(r) * S + (s.x + l.x) / 2,
                            E = Math.sin(r) * w + Math.cos(r) * S + (s.y + l.y) / 2,
                            M = n(1, 0, (f - w) / t, (d - S) / i),
                            T = n((f - w) / t, (d - S) / i, (-f - w) / t, (-d - S) / i) % (2 * Math.PI);
                        e.currentPath.absellipse(A, E, t, i, M, M + T, 0 === a, r)
                    }

                    function n(e, t, i, r) {
                        let n = Math.acos(Math.max(-1, Math.min(1, (e * i + t * r) / (Math.sqrt(e * e + t * t) * Math.sqrt(i * i + r * r)))));
                        return e * r - t * i < 0 && (n = -n), n
                    }

                    function o(e, t) {
                        t = Object.assign({}, t);
                        let i = {};
                        if (e.hasAttribute("class")) {
                            let t = e.getAttribute("class").split(/\s/).filter(Boolean).map(e => e.trim());
                            for (let e = 0; e < t.length; e++) i = Object.assign(i, f["." + t[e]])
                        }

                        function r(r, n, o) {
                            void 0 === o && (o = function(e) {
                                return e.startsWith("url") && console.warn("SVGLoader: url access in attributes is not implemented."), e
                            }), e.hasAttribute(r) && (t[n] = o(e.getAttribute(r))), i[r] && (t[n] = o(i[r])), e.style && "" !== e.style[r] && (t[n] = o(e.style[r]))
                        }

                        function n(e) {
                            return Math.max(0, Math.min(1, c(e)))
                        }

                        function o(e) {
                            return Math.max(0, c(e))
                        }
                        return e.hasAttribute("id") && (i = Object.assign(i, f["#" + e.getAttribute("id")])), r("fill", "fill"), r("fill-opacity", "fillOpacity", n), r("fill-rule", "fillRule"), r("opacity", "opacity", n), r("stroke", "stroke"), r("stroke-opacity", "strokeOpacity", n), r("stroke-width", "strokeWidth", o), r("stroke-linejoin", "strokeLineJoin"), r("stroke-linecap", "strokeLineCap"), r("stroke-miterlimit", "strokeMiterLimit", o), r("visibility", "visibility"), t
                    }

                    function a(e, t, i) {
                        let r;
                        if ("string" != typeof e) throw TypeError("Invalid input: " + typeof e);
                        let n = {
                                SEPARATOR: /[ \t\r\n\,.\-+]/,
                                WHITESPACE: /[ \t\r\n]/,
                                DIGIT: /[\d]/,
                                SIGN: /[-+]/,
                                POINT: /\./,
                                COMMA: /,/,
                                EXP: /e/i,
                                FLAGS: /[01]/
                            },
                            o = 0,
                            a = !0,
                            s = "",
                            l = "",
                            c = [];

                        function u(e, t, i) {
                            let r = SyntaxError('Unexpected character "' + e + '" at index ' + t + ".");
                            throw r.partial = i, r
                        }

                        function f() {
                            "" !== s && ("" === l ? c.push(Number(s)) : c.push(Number(s) * Math.pow(10, Number(l)))), s = "", l = ""
                        }
                        let d = e.length;
                        for (let p = 0; p < d; p++) {
                            if (r = e[p], Array.isArray(t) && t.includes(c.length % i) && n.FLAGS.test(r)) {
                                o = 1, s = r, f();
                                continue
                            }
                            if (0 === o) {
                                if (n.WHITESPACE.test(r)) continue;
                                if (n.DIGIT.test(r) || n.SIGN.test(r)) {
                                    o = 1, s = r;
                                    continue
                                }
                                if (n.POINT.test(r)) {
                                    o = 2, s = r;
                                    continue
                                }
                                n.COMMA.test(r) && (a && u(r, p, c), a = !0)
                            }
                            if (1 === o) {
                                if (n.DIGIT.test(r)) {
                                    s += r;
                                    continue
                                }
                                if (n.POINT.test(r)) {
                                    s += r, o = 2;
                                    continue
                                }
                                if (n.EXP.test(r)) {
                                    o = 3;
                                    continue
                                }
                                n.SIGN.test(r) && 1 === s.length && n.SIGN.test(s[0]) && u(r, p, c)
                            }
                            if (2 === o) {
                                if (n.DIGIT.test(r)) {
                                    s += r;
                                    continue
                                }
                                if (n.EXP.test(r)) {
                                    o = 3;
                                    continue
                                }
                                n.POINT.test(r) && "." === s[s.length - 1] && u(r, p, c)
                            }
                            if (3 === o) {
                                if (n.DIGIT.test(r)) {
                                    l += r;
                                    continue
                                }
                                if (n.SIGN.test(r)) {
                                    if ("" === l) {
                                        l += r;
                                        continue
                                    }
                                    1 === l.length && n.SIGN.test(l) && u(r, p, c)
                                }
                            }
                            n.WHITESPACE.test(r) ? (f(), o = 0, a = !1) : n.COMMA.test(r) ? (f(), o = 0, a = !0) : n.SIGN.test(r) ? (f(), o = 1, s = r) : n.POINT.test(r) ? (f(), o = 2, s = r) : u(r, p, c)
                        }
                        return f(), c
                    }
                    let s = ["mm", "cm", "in", "pt", "pc", "px"],
                        l = {
                            mm: {
                                mm: 1,
                                cm: .1,
                                in: 1 / 25.4,
                                pt: 72 / 25.4,
                                pc: 6 / 25.4,
                                px: -1
                            },
                            cm: {
                                mm: 10,
                                cm: 1,
                                in: 1 / 2.54,
                                pt: 72 / 2.54,
                                pc: 6 / 2.54,
                                px: -1
                            },
                            in: {
                                mm: 25.4,
                                cm: 2.54,
                                in: 1,
                                pt: 72,
                                pc: 6,
                                px: -1
                            },
                            pt: {
                                mm: 25.4 / 72,
                                cm: 2.54 / 72,
                                in: 1 / 72,
                                pt: 1,
                                pc: 6 / 72,
                                px: -1
                            },
                            pc: {
                                mm: 25.4 / 6,
                                cm: 2.54 / 6,
                                in: 1 / 6,
                                pt: 12,
                                pc: 1,
                                px: -1
                            },
                            px: {
                                px: 1
                            }
                        };

                    function c(e) {
                        let i, r = "px";
                        if ("string" == typeof e || e instanceof String)
                            for (let t = 0, i = s.length; t < i; t++) {
                                let i = s[t];
                                if (e.endsWith(i)) {
                                    r = i, e = e.substring(0, e.length - i.length);
                                    break
                                }
                            }
                        return "px" === r && "px" !== t.defaultUnit ? i = l.in[t.defaultUnit] / t.defaultDPI : (i = l[r][t.defaultUnit]) < 0 && (i = l[r].in * t.defaultDPI), i * parseFloat(e)
                    }
                    let u = [],
                        f = {},
                        d = [],
                        p = new r.Matrix3,
                        h = new r.Matrix3,
                        y = new r.Matrix3,
                        m = new r.Matrix3,
                        g = new r.Vector2,
                        v = new r.Vector3,
                        b = new r.Matrix3,
                        x = new DOMParser().parseFromString(e, "image/svg+xml");
                    ! function e(t, n) {
                        if (1 !== t.nodeType) return;
                        let s = function(e) {
                                if (!(e.hasAttribute("transform") || "use" === e.nodeName && (e.hasAttribute("x") || e.hasAttribute("y")))) return null;
                                let t = function(e) {
                                    let t = new r.Matrix3;
                                    if ("use" === e.nodeName && (e.hasAttribute("x") || e.hasAttribute("y"))) {
                                        let i = c(e.getAttribute("x")),
                                            r = c(e.getAttribute("y"));
                                        t.translate(i, r)
                                    }
                                    if (e.hasAttribute("transform")) {
                                        let i = e.getAttribute("transform").split(")");
                                        for (let e = i.length - 1; e >= 0; e--) {
                                            let r = i[e].trim();
                                            if ("" === r) continue;
                                            let n = r.indexOf("("),
                                                o = r.length;
                                            if (n > 0 && n < o) {
                                                let e = r.substr(0, n),
                                                    t = a(r.substr(n + 1, o - n - 1));
                                                switch (p.identity(), e) {
                                                    case "translate":
                                                        if (t.length >= 1) {
                                                            let e = t[0],
                                                                i = e;
                                                            t.length >= 2 && (i = t[1]), p.translate(e, i)
                                                        }
                                                        break;
                                                    case "rotate":
                                                        if (t.length >= 1) {
                                                            let e = 0,
                                                                i = 0,
                                                                r = 0;
                                                            e = -t[0] * Math.PI / 180, t.length >= 3 && (i = t[1], r = t[2]), h.identity().translate(-i, -r), y.identity().rotate(e), m.multiplyMatrices(y, h), h.identity().translate(i, r), p.multiplyMatrices(h, m)
                                                        }
                                                        break;
                                                    case "scale":
                                                        if (t.length >= 1) {
                                                            let e = t[0],
                                                                i = e;
                                                            t.length >= 2 && (i = t[1]), p.scale(e, i)
                                                        }
                                                        break;
                                                    case "skewX":
                                                        1 === t.length && p.set(1, Math.tan(t[0] * Math.PI / 180), 0, 0, 1, 0, 0, 0, 1);
                                                        break;
                                                    case "skewY":
                                                        1 === t.length && p.set(1, 0, 0, Math.tan(t[0] * Math.PI / 180), 1, 0, 0, 0, 1);
                                                        break;
                                                    case "matrix":
                                                        6 === t.length && p.set(t[0], t[2], t[4], t[1], t[3], t[5], 0, 0, 1)
                                                }
                                            }
                                            t.premultiply(p)
                                        }
                                    }
                                    return t
                                }(e);
                                return d.length > 0 && t.premultiply(d[d.length - 1]), b.copy(t), d.push(t), t
                            }(t),
                            l = !0,
                            x = null;
                        switch (t.nodeName) {
                            case "svg":
                                break;
                            case "style":
                                ! function(e) {
                                    if (e.sheet && e.sheet.cssRules && e.sheet.cssRules.length)
                                        for (let t = 0; t < e.sheet.cssRules.length; t++) {
                                            let i = e.sheet.cssRules[t];
                                            if (1 !== i.type) continue;
                                            let r = i.selectorText.split(/,/gm).filter(Boolean).map(e => e.trim());
                                            for (let e = 0; e < r.length; e++) f[r[e]] = Object.assign(f[r[e]] || {}, i.style)
                                        }
                                }(t);
                                break;
                            case "g":
                                n = o(t, n);
                                break;
                            case "path":
                                n = o(t, n), t.hasAttribute("d") && (x = function(e) {
                                    let t = new r.ShapePath,
                                        n = new r.Vector2,
                                        o = new r.Vector2,
                                        s = new r.Vector2,
                                        l = !0,
                                        c = !1,
                                        u = e.getAttribute("d"),
                                        f = u.match(/[a-df-z][^a-df-z]*/gi);
                                    for (let e = 0, r = f.length; e < r; e++) {
                                        var d, p, h, y, m, g, v, b;
                                        let r;
                                        let u = f[e],
                                            x = u.charAt(0),
                                            w = u.substr(1).trim();
                                        switch (!0 === l && (c = !0, l = !1), x) {
                                            case "M":
                                                r = a(w);
                                                for (let e = 0, i = r.length; e < i; e += 2) n.x = r[e + 0], n.y = r[e + 1], o.x = n.x, o.y = n.y, 0 === e ? t.moveTo(n.x, n.y) : t.lineTo(n.x, n.y), 0 === e && s.copy(n);
                                                break;
                                            case "H":
                                                r = a(w);
                                                for (let e = 0, i = r.length; e < i; e++) n.x = r[e], o.x = n.x, o.y = n.y, t.lineTo(n.x, n.y), 0 === e && !0 === c && s.copy(n);
                                                break;
                                            case "V":
                                                r = a(w);
                                                for (let e = 0, i = r.length; e < i; e++) n.y = r[e], o.x = n.x, o.y = n.y, t.lineTo(n.x, n.y), 0 === e && !0 === c && s.copy(n);
                                                break;
                                            case "L":
                                                r = a(w);
                                                for (let e = 0, i = r.length; e < i; e += 2) n.x = r[e + 0], n.y = r[e + 1], o.x = n.x, o.y = n.y, t.lineTo(n.x, n.y), 0 === e && !0 === c && s.copy(n);
                                                break;
                                            case "C":
                                                r = a(w);
                                                for (let e = 0, i = r.length; e < i; e += 6) t.bezierCurveTo(r[e + 0], r[e + 1], r[e + 2], r[e + 3], r[e + 4], r[e + 5]), o.x = r[e + 2], o.y = r[e + 3], n.x = r[e + 4], n.y = r[e + 5], 0 === e && !0 === c && s.copy(n);
                                                break;
                                            case "S":
                                                r = a(w);
                                                for (let e = 0, i = r.length; e < i; e += 4) t.bezierCurveTo((d = n.x) - (o.x - d), (p = n.y) - (o.y - p), r[e + 0], r[e + 1], r[e + 2], r[e + 3]), o.x = r[e + 0], o.y = r[e + 1], n.x = r[e + 2], n.y = r[e + 3], 0 === e && !0 === c && s.copy(n);
                                                break;
                                            case "Q":
                                                r = a(w);
                                                for (let e = 0, i = r.length; e < i; e += 4) t.quadraticCurveTo(r[e + 0], r[e + 1], r[e + 2], r[e + 3]), o.x = r[e + 0], o.y = r[e + 1], n.x = r[e + 2], n.y = r[e + 3], 0 === e && !0 === c && s.copy(n);
                                                break;
                                            case "T":
                                                r = a(w);
                                                for (let e = 0, i = r.length; e < i; e += 2) {
                                                    let i = (h = n.x) - (o.x - h),
                                                        a = (y = n.y) - (o.y - y);
                                                    t.quadraticCurveTo(i, a, r[e + 0], r[e + 1]), o.x = i, o.y = a, n.x = r[e + 0], n.y = r[e + 1], 0 === e && !0 === c && s.copy(n)
                                                }
                                                break;
                                            case "A":
                                                r = a(w, [3, 4], 7);
                                                for (let e = 0, a = r.length; e < a; e += 7) {
                                                    if (r[e + 5] == n.x && r[e + 6] == n.y) continue;
                                                    let a = n.clone();
                                                    n.x = r[e + 5], n.y = r[e + 6], o.x = n.x, o.y = n.y, i(t, r[e], r[e + 1], r[e + 2], r[e + 3], r[e + 4], a, n), 0 === e && !0 === c && s.copy(n)
                                                }
                                                break;
                                            case "m":
                                                r = a(w);
                                                for (let e = 0, i = r.length; e < i; e += 2) n.x += r[e + 0], n.y += r[e + 1], o.x = n.x, o.y = n.y, 0 === e ? t.moveTo(n.x, n.y) : t.lineTo(n.x, n.y), 0 === e && s.copy(n);
                                                break;
                                            case "h":
                                                r = a(w);
                                                for (let e = 0, i = r.length; e < i; e++) n.x += r[e], o.x = n.x, o.y = n.y, t.lineTo(n.x, n.y), 0 === e && !0 === c && s.copy(n);
                                                break;
                                            case "v":
                                                r = a(w);
                                                for (let e = 0, i = r.length; e < i; e++) n.y += r[e], o.x = n.x, o.y = n.y, t.lineTo(n.x, n.y), 0 === e && !0 === c && s.copy(n);
                                                break;
                                            case "l":
                                                r = a(w);
                                                for (let e = 0, i = r.length; e < i; e += 2) n.x += r[e + 0], n.y += r[e + 1], o.x = n.x, o.y = n.y, t.lineTo(n.x, n.y), 0 === e && !0 === c && s.copy(n);
                                                break;
                                            case "c":
                                                r = a(w);
                                                for (let e = 0, i = r.length; e < i; e += 6) t.bezierCurveTo(n.x + r[e + 0], n.y + r[e + 1], n.x + r[e + 2], n.y + r[e + 3], n.x + r[e + 4], n.y + r[e + 5]), o.x = n.x + r[e + 2], o.y = n.y + r[e + 3], n.x += r[e + 4], n.y += r[e + 5], 0 === e && !0 === c && s.copy(n);
                                                break;
                                            case "s":
                                                r = a(w);
                                                for (let e = 0, i = r.length; e < i; e += 4) t.bezierCurveTo((m = n.x) - (o.x - m), (g = n.y) - (o.y - g), n.x + r[e + 0], n.y + r[e + 1], n.x + r[e + 2], n.y + r[e + 3]), o.x = n.x + r[e + 0], o.y = n.y + r[e + 1], n.x += r[e + 2], n.y += r[e + 3], 0 === e && !0 === c && s.copy(n);
                                                break;
                                            case "q":
                                                r = a(w);
                                                for (let e = 0, i = r.length; e < i; e += 4) t.quadraticCurveTo(n.x + r[e + 0], n.y + r[e + 1], n.x + r[e + 2], n.y + r[e + 3]), o.x = n.x + r[e + 0], o.y = n.y + r[e + 1], n.x += r[e + 2], n.y += r[e + 3], 0 === e && !0 === c && s.copy(n);
                                                break;
                                            case "t":
                                                r = a(w);
                                                for (let e = 0, i = r.length; e < i; e += 2) {
                                                    let i = (v = n.x) - (o.x - v),
                                                        a = (b = n.y) - (o.y - b);
                                                    t.quadraticCurveTo(i, a, n.x + r[e + 0], n.y + r[e + 1]), o.x = i, o.y = a, n.x = n.x + r[e + 0], n.y = n.y + r[e + 1], 0 === e && !0 === c && s.copy(n)
                                                }
                                                break;
                                            case "a":
                                                r = a(w, [3, 4], 7);
                                                for (let e = 0, a = r.length; e < a; e += 7) {
                                                    if (0 == r[e + 5] && 0 == r[e + 6]) continue;
                                                    let a = n.clone();
                                                    n.x += r[e + 5], n.y += r[e + 6], o.x = n.x, o.y = n.y, i(t, r[e], r[e + 1], r[e + 2], r[e + 3], r[e + 4], a, n), 0 === e && !0 === c && s.copy(n)
                                                }
                                                break;
                                            case "Z":
                                            case "z":
                                                t.currentPath.autoClose = !0, t.currentPath.curves.length > 0 && (n.copy(s), t.currentPath.currentPoint.copy(n), l = !0);
                                                break;
                                            default:
                                                console.warn(u)
                                        }
                                        c = !1
                                    }
                                    return t
                                }(t));
                                break;
                            case "rect":
                                n = o(t, n), x = function(e) {
                                    let t = c(e.getAttribute("x") || 0),
                                        i = c(e.getAttribute("y") || 0),
                                        n = c(e.getAttribute("rx") || e.getAttribute("ry") || 0),
                                        o = c(e.getAttribute("ry") || e.getAttribute("rx") || 0),
                                        a = c(e.getAttribute("width")),
                                        s = c(e.getAttribute("height")),
                                        l = new r.ShapePath;
                                    return l.moveTo(t + n, i), l.lineTo(t + a - n, i), (0 !== n || 0 !== o) && l.bezierCurveTo(t + a - .448084975506 * n, i, t + a, i + .448084975506 * o, t + a, i + o), l.lineTo(t + a, i + s - o), (0 !== n || 0 !== o) && l.bezierCurveTo(t + a, i + s - .448084975506 * o, t + a - .448084975506 * n, i + s, t + a - n, i + s), l.lineTo(t + n, i + s), (0 !== n || 0 !== o) && l.bezierCurveTo(t + .448084975506 * n, i + s, t, i + s - .448084975506 * o, t, i + s - o), l.lineTo(t, i + o), (0 !== n || 0 !== o) && l.bezierCurveTo(t, i + .448084975506 * o, t + .448084975506 * n, i, t + n, i), l
                                }(t);
                                break;
                            case "polygon":
                                n = o(t, n), x = function(e) {
                                    let t = new r.ShapePath,
                                        i = 0;
                                    return e.getAttribute("points").replace(/(-?[\d\.?]+)[,|\s](-?[\d\.?]+)/g, function(e, r, n) {
                                        let o = c(r),
                                            a = c(n);
                                        0 === i ? t.moveTo(o, a) : t.lineTo(o, a), i++
                                    }), t.currentPath.autoClose = !0, t
                                }(t);
                                break;
                            case "polyline":
                                n = o(t, n), x = function(e) {
                                    let t = new r.ShapePath,
                                        i = 0;
                                    return e.getAttribute("points").replace(/(-?[\d\.?]+)[,|\s](-?[\d\.?]+)/g, function(e, r, n) {
                                        let o = c(r),
                                            a = c(n);
                                        0 === i ? t.moveTo(o, a) : t.lineTo(o, a), i++
                                    }), t.currentPath.autoClose = !1, t
                                }(t);
                                break;
                            case "circle":
                                n = o(t, n), x = function(e) {
                                    let t = c(e.getAttribute("cx") || 0),
                                        i = c(e.getAttribute("cy") || 0),
                                        n = c(e.getAttribute("r") || 0),
                                        o = new r.Path;
                                    o.absarc(t, i, n, 0, 2 * Math.PI);
                                    let a = new r.ShapePath;
                                    return a.subPaths.push(o), a
                                }(t);
                                break;
                            case "ellipse":
                                n = o(t, n), x = function(e) {
                                    let t = c(e.getAttribute("cx") || 0),
                                        i = c(e.getAttribute("cy") || 0),
                                        n = c(e.getAttribute("rx") || 0),
                                        o = c(e.getAttribute("ry") || 0),
                                        a = new r.Path;
                                    a.absellipse(t, i, n, o, 0, 2 * Math.PI);
                                    let s = new r.ShapePath;
                                    return s.subPaths.push(a), s
                                }(t);
                                break;
                            case "line":
                                n = o(t, n), x = function(e) {
                                    let t = c(e.getAttribute("x1") || 0),
                                        i = c(e.getAttribute("y1") || 0),
                                        n = c(e.getAttribute("x2") || 0),
                                        o = c(e.getAttribute("y2") || 0),
                                        a = new r.ShapePath;
                                    return a.moveTo(t, i), a.lineTo(n, o), a.currentPath.autoClose = !1, a
                                }(t);
                                break;
                            case "defs":
                            case "mask":
                                l = !1;
                                break;
                            case "use":
                                n = o(t, n);
                                let w = t.href.baseVal.substring(1),
                                    S = t.viewportElement.getElementById(w);
                                S ? e(S, n) : console.warn("SVGLoader: 'use node' references non-existent node id: " + w)
                        }
                        if (x && (void 0 !== n.fill && "none" !== n.fill && x.color.setStyle(n.fill), function(e, t) {
                                function i(e) {
                                    v.set(e.x, e.y, 1).applyMatrix3(t), e.set(v.x, v.y)
                                }
                                let r = 0 !== t.elements[1] || 0 !== t.elements[3],
                                    n = e.subPaths;
                                for (let e = 0, o = n.length; e < o; e++) {
                                    let o = n[e],
                                        a = o.curves;
                                    for (let e = 0; e < a.length; e++) {
                                        let n = a[e];
                                        n.isLineCurve ? (i(n.v1), i(n.v2)) : n.isCubicBezierCurve ? (i(n.v0), i(n.v1), i(n.v2), i(n.v3)) : n.isQuadraticBezierCurve ? (i(n.v0), i(n.v1), i(n.v2)) : n.isEllipseCurve && (r && console.warn("SVGLoader: Elliptic arc or ellipse rotation or skewing is not implemented."), g.set(n.aX, n.aY), i(g), n.aX = g.x, n.aY = g.y, n.xRadius *= function(e) {
                                            let t = e.elements;
                                            return Math.sqrt(t[0] * t[0] + t[1] * t[1])
                                        }(t), n.yRadius *= function(e) {
                                            let t = e.elements;
                                            return Math.sqrt(t[3] * t[3] + t[4] * t[4])
                                        }(t))
                                    }
                                }
                            }(x, b), u.push(x), x.userData = {
                                node: t,
                                style: n
                            }), l) {
                            let i = t.childNodes;
                            for (let t = 0; t < i.length; t++) e(i[t], n)
                        }
                        s && (d.pop(), d.length > 0 ? b.copy(d[d.length - 1]) : b.identity())
                    }(x.documentElement, {
                        fill: "#000",
                        fillOpacity: 1,
                        strokeOpacity: 1,
                        strokeWidth: 1,
                        strokeLineJoin: "miter",
                        strokeLineCap: "butt",
                        strokeMiterLimit: 4
                    });
                    let w = {
                        paths: u,
                        xml: x.documentElement
                    };
                    return w
                }
                static createShapes(e) {
                    let t = {
                            ORIGIN: 0,
                            DESTINATION: 1,
                            BETWEEN: 2,
                            LEFT: 3,
                            RIGHT: 4,
                            BEHIND: 5,
                            BEYOND: 6
                        },
                        i = {
                            loc: t.ORIGIN,
                            t: 0
                        };

                    function n(e, r, n) {
                        let o = n.x - r.x,
                            a = n.y - r.y,
                            s = e.x - r.x,
                            l = e.y - r.y,
                            c = o * l - s * a;
                        if (e.x === r.x && e.y === r.y) {
                            i.loc = t.ORIGIN, i.t = 0;
                            return
                        }
                        if (e.x === n.x && e.y === n.y) {
                            i.loc = t.DESTINATION, i.t = 1;
                            return
                        }
                        if (c < -Number.EPSILON) {
                            i.loc = t.LEFT;
                            return
                        }
                        if (c > Number.EPSILON) {
                            i.loc = t.RIGHT;
                            return
                        }
                        if (o * s < 0 || a * l < 0) {
                            i.loc = t.BEHIND;
                            return
                        }
                        if (Math.sqrt(o * o + a * a) < Math.sqrt(s * s + l * l)) {
                            i.loc = t.BEYOND;
                            return
                        }
                        i.loc = t.BETWEEN, i.t = 0 !== o ? s / o : l / a
                    }
                    let o = 0,
                        a = 999999999,
                        s = -999999999,
                        l = e.subPaths.map(e => {
                            let t = e.getPoints(),
                                i = -999999999,
                                n = 999999999,
                                l = -999999999,
                                c = 999999999;
                            for (let e = 0; e < t.length; e++) {
                                let r = t[e];
                                r.y > i && (i = r.y), r.y < n && (n = r.y), r.x > l && (l = r.x), r.x < c && (c = r.x)
                            }
                            return s <= l && (s = l + 1), a >= c && (a = c - 1), {
                                curves: e.curves,
                                points: t,
                                isCW: r.ShapeUtils.isClockWise(t),
                                identifier: o++,
                                boundingBox: new r.Box2(new r.Vector2(c, n), new r.Vector2(l, i))
                            }
                        });
                    l = l.filter(e => e.points.length > 1);
                    let c = l.map(o => (function(e, o, a, s, l) {
                            (null == l || "" === l) && (l = "nonzero");
                            let c = new r.Vector2;
                            e.boundingBox.getCenter(c);
                            let u = [new r.Vector2(a, c.y), new r.Vector2(s, c.y)],
                                f = function(e, o, a) {
                                    let s = new r.Vector2;
                                    o.getCenter(s);
                                    let l = [];
                                    return a.forEach(o => {
                                        if (o.boundingBox.containsPoint(s)) {
                                            let a = function(e, o) {
                                                let a = [],
                                                    s = [];
                                                for (let l = 1; l < e.length; l++) {
                                                    let c = e[l - 1],
                                                        u = e[l];
                                                    for (let e = 1; e < o.length; e++) {
                                                        let l = o[e - 1],
                                                            f = o[e],
                                                            d = function(e, r, o, a) {
                                                                let s = e.x,
                                                                    l = r.x,
                                                                    c = o.x,
                                                                    u = a.x,
                                                                    f = e.y,
                                                                    d = r.y,
                                                                    p = o.y,
                                                                    h = a.y,
                                                                    y = (u - c) * (f - p) - (h - p) * (s - c),
                                                                    m = (h - p) * (l - s) - (u - c) * (d - f),
                                                                    g = y / m,
                                                                    v = ((l - s) * (f - p) - (d - f) * (s - c)) / m;
                                                                if (0 === m && 0 !== y || g <= 0 || g >= 1 || v < 0 || v > 1) return null;
                                                                if (0 === y && 0 === m) {
                                                                    for (let c = 0; c < 2; c++) {
                                                                        if (n(0 === c ? o : a, e, r), i.loc == t.ORIGIN) {
                                                                            let e = 0 === c ? o : a;
                                                                            return {
                                                                                x: e.x,
                                                                                y: e.y,
                                                                                t: i.t
                                                                            }
                                                                        }
                                                                        if (i.loc == t.BETWEEN) {
                                                                            let e = +(s + i.t * (l - s)).toPrecision(10),
                                                                                t = +(f + i.t * (d - f)).toPrecision(10);
                                                                            return {
                                                                                x: e,
                                                                                y: t,
                                                                                t: i.t
                                                                            }
                                                                        }
                                                                    }
                                                                    return null
                                                                } {
                                                                    for (let s = 0; s < 2; s++)
                                                                        if (n(0 === s ? o : a, e, r), i.loc == t.ORIGIN) {
                                                                            let e = 0 === s ? o : a;
                                                                            return {
                                                                                x: e.x,
                                                                                y: e.y,
                                                                                t: i.t
                                                                            }
                                                                        }
                                                                    let c = +(s + g * (l - s)).toPrecision(10),
                                                                        u = +(f + g * (d - f)).toPrecision(10);
                                                                    return {
                                                                        x: c,
                                                                        y: u,
                                                                        t: g
                                                                    }
                                                                }
                                                            }(c, u, l, f);
                                                        null !== d && void 0 === a.find(e => e.t <= d.t + Number.EPSILON && e.t >= d.t - Number.EPSILON) && (a.push(d), s.push(new r.Vector2(d.x, d.y)))
                                                    }
                                                }
                                                return s
                                            }(e, o.points);
                                            a.forEach(e => {
                                                l.push({
                                                    identifier: o.identifier,
                                                    isCW: o.isCW,
                                                    point: e
                                                })
                                            })
                                        }
                                    }), l.sort((e, t) => e.point.x - t.point.x), l
                                }(u, e.boundingBox, o);
                            f.sort((e, t) => e.point.x - t.point.x);
                            let d = [],
                                p = [];
                            f.forEach(t => {
                                t.identifier === e.identifier ? d.push(t) : p.push(t)
                            });
                            let h = d[0].point.x,
                                y = [],
                                m = 0;
                            for (; m < p.length && p[m].point.x < h;) y.length > 0 && y[y.length - 1] === p[m].identifier ? y.pop() : y.push(p[m].identifier), m++;
                            if (y.push(e.identifier), "evenodd" === l) {
                                let t = y.length % 2 == 0,
                                    i = y[y.length - 2];
                                return {
                                    identifier: e.identifier,
                                    isHole: t,
                                    for: i
                                }
                            }
                            if ("nonzero" === l) {
                                let t = !0,
                                    i = null,
                                    r = null;
                                for (let e = 0; e < y.length; e++) {
                                    let n = y[e];
                                    t ? (r = o[n].isCW, t = !1, i = n) : r !== o[n].isCW && (r = o[n].isCW, t = !0)
                                }
                                return {
                                    identifier: e.identifier,
                                    isHole: t,
                                    for: i
                                }
                            }
                            console.warn('fill-rule: "' + l + '" is currently not implemented.')
                        })(o, l, a, s, e.userData.style.fillRule)),
                        u = [];
                    return l.forEach(e => {
                        let t = c[e.identifier];
                        if (!t.isHole) {
                            let t = new r.Shape;
                            t.curves = e.curves;
                            let i = c.filter(t => t.isHole && t.for === e.identifier);
                            i.forEach(e => {
                                let i = l[e.identifier],
                                    n = new r.Path;
                                n.curves = i.curves, t.holes.push(n)
                            }), u.push(t)
                        }
                    }), u
                }
                static getStrokeStyle(e, t, i, r, n) {
                    return {
                        strokeColor: t = void 0 !== t ? t : "#000",
                        strokeWidth: e = void 0 !== e ? e : 1,
                        strokeLineJoin: i = void 0 !== i ? i : "miter",
                        strokeLineCap: r = void 0 !== r ? r : "butt",
                        strokeMiterLimit: n = void 0 !== n ? n : 4
                    }
                }
                static pointsToStroke(e, t, i, o) {
                    let a = [],
                        s = [],
                        l = [];
                    if (0 === n.pointsToStrokeWithBuffers(e, t, i, o, a, s, l)) return null;
                    let c = new r.BufferGeometry;
                    return c.setAttribute("position", new r.Float32BufferAttribute(a, 3)), c.setAttribute("normal", new r.Float32BufferAttribute(s, 3)), c.setAttribute("uv", new r.Float32BufferAttribute(l, 2)), c
                }
                static pointsToStrokeWithBuffers(e, t, i, n, o, a, s, l) {
                    let c, u, f, d, p;
                    let h = new r.Vector2,
                        y = new r.Vector2,
                        m = new r.Vector2,
                        g = new r.Vector2,
                        v = new r.Vector2,
                        b = new r.Vector2,
                        x = new r.Vector2,
                        w = new r.Vector2,
                        S = new r.Vector2,
                        A = new r.Vector2,
                        E = new r.Vector2,
                        M = new r.Vector2,
                        T = new r.Vector2,
                        P = new r.Vector2,
                        I = new r.Vector2,
                        _ = new r.Vector2,
                        z = new r.Vector2;
                    i = void 0 !== i ? i : 12, n = void 0 !== n ? n : .001, l = void 0 !== l ? l : 0, e = function(e) {
                        let t = !1;
                        for (let i = 1, r = e.length - 1; i < r; i++)
                            if (e[i].distanceTo(e[i + 1]) < n) {
                                t = !0;
                                break
                            }
                        if (!t) return e;
                        let i = [];
                        i.push(e[0]);
                        for (let t = 1, r = e.length - 1; t < r; t++) e[t].distanceTo(e[t + 1]) >= n && i.push(e[t]);
                        return i.push(e[e.length - 1]), i
                    }(e);
                    let k = e.length;
                    if (k < 2) return 0;
                    let C = e[0].equals(e[k - 1]),
                        B = e[0],
                        L = t.strokeWidth / 2,
                        O = 1 / (k - 1),
                        V = 0,
                        N, U = !1,
                        D = 0,
                        R = 3 * l,
                        j = 2 * l;
                    G(e[0], e[1], h).multiplyScalar(L), w.copy(e[0]).sub(h), S.copy(e[0]).add(h), A.copy(w), E.copy(S);
                    for (let i = 1; i < k; i++) {
                        if (c = e[i], u = i === k - 1 ? C ? e[1] : void 0 : e[i + 1], G(B, c, h), m.copy(h).multiplyScalar(L), M.copy(c).sub(m), T.copy(c).add(m), N = V + O, f = !1, void 0 !== u) {
                            G(c, u, y), m.copy(y).multiplyScalar(L), P.copy(c).sub(m), I.copy(c).add(m), d = !0, m.subVectors(u, B), 0 > h.dot(m) && (d = !1), 1 === i && (U = d), m.subVectors(u, c), m.normalize();
                            let e = Math.abs(h.dot(m));
                            if (0 !== e) {
                                let i = L / e;
                                m.multiplyScalar(-i), g.subVectors(c, B), v.copy(g).setLength(i).add(m), _.copy(v).negate();
                                let r = v.length(),
                                    n = g.length();
                                g.divideScalar(n), b.subVectors(u, c);
                                let o = b.length();
                                switch (b.divideScalar(o), g.dot(_) < n && b.dot(_) < o && (f = !0), z.copy(v).add(c), _.add(c), p = !1, f ? d ? (I.copy(_), T.copy(_)) : (P.copy(_), M.copy(_)) : F(), t.strokeLineJoin) {
                                    case "bevel":
                                        q(d, f, N);
                                        break;
                                    case "round":
                                        Y(d, f), d ? H(c, M, P, N, 0) : H(c, I, T, N, 1);
                                        break;
                                    default:
                                        let a = L * t.strokeMiterLimit / r;
                                        a < 1 ? "miter-clip" !== t.strokeLineJoin ? q(d, f, N) : (Y(d, f), d ? (b.subVectors(z, M).multiplyScalar(a).add(M), x.subVectors(z, P).multiplyScalar(a).add(P), W(M, N, 0), W(b, N, 0), W(c, N, .5), W(c, N, .5), W(b, N, 0), W(x, N, 0), W(c, N, .5), W(x, N, 0), W(P, N, 0)) : (b.subVectors(z, T).multiplyScalar(a).add(T), x.subVectors(z, I).multiplyScalar(a).add(I), W(T, N, 1), W(b, N, 1), W(c, N, .5), W(c, N, .5), W(b, N, 1), W(x, N, 1), W(c, N, .5), W(x, N, 1), W(I, N, 1))) : (f ? (d ? (W(S, V, 1), W(w, V, 0), W(z, N, 0), W(S, V, 1), W(z, N, 0), W(_, N, 1)) : (W(S, V, 1), W(w, V, 0), W(z, N, 1), W(w, V, 0), W(_, N, 0), W(z, N, 1)), d ? P.copy(z) : I.copy(z)) : d ? (W(M, N, 0), W(z, N, 0), W(c, N, .5), W(c, N, .5), W(z, N, 0), W(P, N, 0)) : (W(T, N, 1), W(z, N, 1), W(c, N, .5), W(c, N, .5), W(z, N, 1), W(I, N, 1)), p = !0)
                                }
                            } else F()
                        } else F();
                        C || i !== k - 1 || J(e[0], A, E, d, !0, V), V = N, B = c, w.copy(P), S.copy(I)
                    }
                    if (C) {
                        if (f && o) {
                            let e = z,
                                t = _;
                            U !== d && (e = _, t = z), d ? (p || U) && (t.toArray(o, 0), t.toArray(o, 9), p && e.toArray(o, 3)) : (p || !U) && (t.toArray(o, 3), t.toArray(o, 9), p && e.toArray(o, 0))
                        }
                    } else J(c, M, T, d, !1, N);
                    return D;

                    function G(e, t, i) {
                        return i.subVectors(t, e), i.set(-i.y, i.x).normalize()
                    }

                    function W(e, t, i) {
                        o && (o[R] = e.x, o[R + 1] = e.y, o[R + 2] = 0, a && (a[R] = 0, a[R + 1] = 0, a[R + 2] = 1), R += 3, s && (s[j] = t, s[j + 1] = i, j += 2)), D += 3
                    }

                    function H(e, t, r, n, o) {
                        h.copy(t).sub(e).normalize(), y.copy(r).sub(e).normalize();
                        let a = Math.PI,
                            s = h.dot(y);
                        1 > Math.abs(s) && (a = Math.abs(Math.acos(s))), a /= i, m.copy(t);
                        for (let t = 0, r = i - 1; t < r; t++) g.copy(m).rotateAround(e, a), W(m, n, o), W(g, n, o), W(e, n, .5), m.copy(g);
                        W(g, n, o), W(r, n, o), W(e, n, .5)
                    }

                    function F() {
                        W(S, V, 1), W(w, V, 0), W(M, N, 0), W(S, V, 1), W(M, N, 1), W(T, N, 0)
                    }

                    function q(e, t, i) {
                        t ? e ? (W(S, V, 1), W(w, V, 0), W(M, N, 0), W(S, V, 1), W(M, N, 0), W(_, N, 1), W(M, i, 0), W(P, i, 0), W(_, i, .5)) : (W(S, V, 1), W(w, V, 0), W(T, N, 1), W(w, V, 0), W(_, N, 0), W(T, N, 1), W(T, i, 1), W(I, i, 0), W(_, i, .5)) : e ? (W(M, i, 0), W(P, i, 0), W(c, i, .5)) : (W(T, i, 1), W(I, i, 0), W(c, i, .5))
                    }

                    function Y(e, t) {
                        t && (e ? (W(S, V, 1), W(w, V, 0), W(M, N, 0), W(S, V, 1), W(M, N, 0), W(_, N, 1), W(M, V, 0), W(c, N, .5), W(_, N, 1), W(c, N, .5), W(P, V, 0), W(_, N, 1)) : (W(S, V, 1), W(w, V, 0), W(T, N, 1), W(w, V, 0), W(_, N, 0), W(T, N, 1), W(T, V, 1), W(_, N, 0), W(c, N, .5), W(c, N, .5), W(_, N, 0), W(I, V, 1)))
                    }

                    function J(e, i, r, n, a, s) {
                        switch (t.strokeLineCap) {
                            case "round":
                                a ? H(e, r, i, s, .5) : H(e, i, r, s, .5);
                                break;
                            case "square":
                                if (a) h.subVectors(i, e), y.set(h.y, -h.x), m.addVectors(h, y).add(e), g.subVectors(y, h).add(e), n ? (m.toArray(o, 3), g.toArray(o, 0), g.toArray(o, 9)) : (m.toArray(o, 3), m.toArray(o, 9), g.toArray(o, 0));
                                else {
                                    h.subVectors(r, e), y.set(h.y, -h.x), m.addVectors(h, y).add(e), g.subVectors(y, h).add(e);
                                    let t = o.length;
                                    n ? (m.toArray(o, t - 3), g.toArray(o, t - 6), g.toArray(o, t - 12)) : (m.toArray(o, t - 6), g.toArray(o, t - 3), g.toArray(o, t - 12))
                                }
                        }
                    }
                }
            }
        },
        6042: function(e, t, i) {
            "use strict";
            i.d(t, {
                Z: function() {
                    return l
                }
            });
            var r, n, o = i(959),
                a = i(8063);
            let s = "undefined" != typeof window && (null != (r = window.document) && r.createElement || (null == (n = window.navigator) ? void 0 : n.product) === "ReactNative") ? o.useLayoutEffect : o.useEffect;

            function l() {
                let e = (0, a.Ue)(e => ({
                    current: [],
                    version: 0,
                    set: e
                }));
                return {
                    In: ({
                        children: t
                    }) => {
                        let i = e(e => e.set),
                            r = e(e => e.version);
                        return s(() => {
                            i(e => ({
                                version: e.version + 1
                            }))
                        }, []), s(() => (i(({
                            current: e
                        }) => ({
                            current: [...e, t]
                        })), () => i(({
                            current: e
                        }) => ({
                            current: e.filter(e => e !== t)
                        }))), [t, r]), null
                    },
                    Out: () => {
                        let t = e(e => e.current);
                        return o.createElement(o.Fragment, null, t)
                    }
                }
            }
        }
    }
]);