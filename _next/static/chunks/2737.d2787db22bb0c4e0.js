"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2737], {
        1231: function(e, t, r) {
            let s;
            r.d(t, {
                L: function() {
                    return es
                }
            });
            var n = r(688);
            let A = new WeakMap;
            class i extends n.Loader {
                constructor(e) {
                    super(e), this.decoderPath = "", this.decoderConfig = {}, this.decoderBinary = null, this.decoderPending = null, this.workerLimit = 4, this.workerPool = [], this.workerNextTaskID = 1, this.workerSourceURL = "", this.defaultAttributeIDs = {
                        position: "POSITION",
                        normal: "NORMAL",
                        color: "COLOR",
                        uv: "TEX_COORD"
                    }, this.defaultAttributeTypes = {
                        position: "Float32Array",
                        normal: "Float32Array",
                        color: "Float32Array",
                        uv: "Float32Array"
                    }
                }
                setDecoderPath(e) {
                    return this.decoderPath = e, this
                }
                setDecoderConfig(e) {
                    return this.decoderConfig = e, this
                }
                setWorkerLimit(e) {
                    return this.workerLimit = e, this
                }
                load(e, t, r, s) {
                    let A = new n.FileLoader(this.manager);
                    A.setPath(this.path), A.setResponseType("arraybuffer"), A.setRequestHeader(this.requestHeader), A.setWithCredentials(this.withCredentials), A.load(e, e => {
                        let r = {
                            attributeIDs: this.defaultAttributeIDs,
                            attributeTypes: this.defaultAttributeTypes,
                            useUniqueIDs: !1
                        };
                        this.decodeGeometry(e, r).then(t).catch(s)
                    }, r, s)
                }
                decodeDracoFile(e, t, r, s) {
                    let n = {
                        attributeIDs: r || this.defaultAttributeIDs,
                        attributeTypes: s || this.defaultAttributeTypes,
                        useUniqueIDs: !!r
                    };
                    this.decodeGeometry(e, n).then(t)
                }
                decodeGeometry(e, t) {
                    let r;
                    for (let e in t.attributeTypes) {
                        let r = t.attributeTypes[e];
                        void 0 !== r.BYTES_PER_ELEMENT && (t.attributeTypes[e] = r.name)
                    }
                    let s = JSON.stringify(t);
                    if (A.has(e)) {
                        let t = A.get(e);
                        if (t.key === s) return t.promise;
                        if (0 === e.byteLength) throw Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")
                    }
                    let n = this.workerNextTaskID++,
                        i = e.byteLength,
                        o = this._getWorker(n, i).then(s => (r = s, new Promise((s, A) => {
                            r._callbacks[n] = {
                                resolve: s,
                                reject: A
                            }, r.postMessage({
                                type: "decode",
                                id: n,
                                taskConfig: t,
                                buffer: e
                            }, [e])
                        }))).then(e => this._createGeometry(e.geometry));
                    return o.catch(() => !0).then(() => {
                        r && n && this._releaseTask(r, n)
                    }), A.set(e, {
                        key: s,
                        promise: o
                    }), o
                }
                _createGeometry(e) {
                    let t = new n.BufferGeometry;
                    e.index && t.setIndex(new n.BufferAttribute(e.index.array, 1));
                    for (let r = 0; r < e.attributes.length; r++) {
                        let s = e.attributes[r],
                            A = s.name,
                            i = s.array,
                            o = s.itemSize;
                        t.setAttribute(A, new n.BufferAttribute(i, o))
                    }
                    return t
                }
                _loadLibrary(e, t) {
                    let r = new n.FileLoader(this.manager);
                    return r.setPath(this.decoderPath), r.setResponseType(t), r.setWithCredentials(this.withCredentials), new Promise((t, s) => {
                        r.load(e, t, void 0, s)
                    })
                }
                preload() {
                    return this._initDecoder(), this
                }
                _initDecoder() {
                    if (this.decoderPending) return this.decoderPending;
                    let e = "object" != typeof WebAssembly || "js" === this.decoderConfig.type,
                        t = [];
                    return e ? t.push(this._loadLibrary("draco_decoder.js", "text")) : (t.push(this._loadLibrary("draco_wasm_wrapper.js", "text")), t.push(this._loadLibrary("draco_decoder.wasm", "arraybuffer"))), this.decoderPending = Promise.all(t).then(t => {
                        let r = t[0];
                        e || (this.decoderConfig.wasmBinary = t[1]);
                        let s = o.toString(),
                            n = ["/* draco decoder */", r, "", "/* worker */", s.substring(s.indexOf("{") + 1, s.lastIndexOf("}"))].join("\n");
                        this.workerSourceURL = URL.createObjectURL(new Blob([n]))
                    }), this.decoderPending
                }
                _getWorker(e, t) {
                    return this._initDecoder().then(() => {
                        if (this.workerPool.length < this.workerLimit) {
                            let e = new Worker(this.workerSourceURL);
                            e._callbacks = {}, e._taskCosts = {}, e._taskLoad = 0, e.postMessage({
                                type: "init",
                                decoderConfig: this.decoderConfig
                            }), e.onmessage = function(t) {
                                let r = t.data;
                                switch (r.type) {
                                    case "decode":
                                        e._callbacks[r.id].resolve(r);
                                        break;
                                    case "error":
                                        e._callbacks[r.id].reject(r);
                                        break;
                                    default:
                                        console.error('THREE.DRACOLoader: Unexpected message, "' + r.type + '"')
                                }
                            }, this.workerPool.push(e)
                        } else this.workerPool.sort(function(e, t) {
                            return e._taskLoad > t._taskLoad ? -1 : 1
                        });
                        let r = this.workerPool[this.workerPool.length - 1];
                        return r._taskCosts[e] = t, r._taskLoad += t, r
                    })
                }
                _releaseTask(e, t) {
                    e._taskLoad -= e._taskCosts[t], delete e._callbacks[t], delete e._taskCosts[t]
                }
                debug() {
                    console.log("Task load: ", this.workerPool.map(e => e._taskLoad))
                }
                dispose() {
                    for (let e = 0; e < this.workerPool.length; ++e) this.workerPool[e].terminate();
                    return this.workerPool.length = 0, this
                }
            }

            function o() {
                let e, t;
                onmessage = function(r) {
                    let s = r.data;
                    switch (s.type) {
                        case "init":
                            e = s.decoderConfig, t = new Promise(function(t) {
                                e.onModuleLoaded = function(e) {
                                    t({
                                        draco: e
                                    })
                                }, DracoDecoderModule(e)
                            });
                            break;
                        case "decode":
                            let n = s.buffer,
                                A = s.taskConfig;
                            t.then(e => {
                                let t = e.draco,
                                    r = new t.Decoder,
                                    i = new t.DecoderBuffer;
                                i.Init(new Int8Array(n), n.byteLength);
                                try {
                                    let e = function(e, t, r, s) {
                                            let n, A;
                                            let i = s.attributeIDs,
                                                o = s.attributeTypes,
                                                a = t.GetEncodedGeometryType(r);
                                            if (a === e.TRIANGULAR_MESH) n = new e.Mesh, A = t.DecodeBufferToMesh(r, n);
                                            else if (a === e.POINT_CLOUD) n = new e.PointCloud, A = t.DecodeBufferToPointCloud(r, n);
                                            else throw Error("THREE.DRACOLoader: Unexpected geometry type.");
                                            if (!A.ok() || 0 === n.ptr) throw Error("THREE.DRACOLoader: Decoding failed: " + A.error_msg());
                                            let B = {
                                                index: null,
                                                attributes: []
                                            };
                                            for (let r in i) {
                                                let A, a;
                                                let l = self[o[r]];
                                                if (s.useUniqueIDs) a = i[r], A = t.GetAttributeByUniqueId(n, a);
                                                else {
                                                    if (-1 === (a = t.GetAttributeId(n, e[i[r]]))) continue;
                                                    A = t.GetAttribute(n, a)
                                                }
                                                B.attributes.push(function(e, t, r, s, n, A) {
                                                    let i = A.num_components(),
                                                        o = r.num_points(),
                                                        a = o * i,
                                                        B = a * n.BYTES_PER_ELEMENT,
                                                        l = function(e, t) {
                                                            switch (t) {
                                                                case Float32Array:
                                                                    return e.DT_FLOAT32;
                                                                case Int8Array:
                                                                    return e.DT_INT8;
                                                                case Int16Array:
                                                                    return e.DT_INT16;
                                                                case Int32Array:
                                                                    return e.DT_INT32;
                                                                case Uint8Array:
                                                                    return e.DT_UINT8;
                                                                case Uint16Array:
                                                                    return e.DT_UINT16;
                                                                case Uint32Array:
                                                                    return e.DT_UINT32
                                                            }
                                                        }(e, n),
                                                        C = e._malloc(B);
                                                    t.GetAttributeDataArrayForAllPoints(r, A, l, B, C);
                                                    let c = new n(e.HEAPF32.buffer, C, a).slice();
                                                    return e._free(C), {
                                                        name: s,
                                                        array: c,
                                                        itemSize: i
                                                    }
                                                }(e, t, n, r, l, A))
                                            }
                                            return a === e.TRIANGULAR_MESH && (B.index = function(e, t, r) {
                                                let s = r.num_faces(),
                                                    n = 3 * s,
                                                    A = 4 * n,
                                                    i = e._malloc(A);
                                                t.GetTrianglesUInt32Array(r, A, i);
                                                let o = new Uint32Array(e.HEAPF32.buffer, i, n).slice();
                                                return e._free(i), {
                                                    array: o,
                                                    itemSize: 1
                                                }
                                            }(e, t, n)), e.destroy(n), B
                                        }(t, r, i, A),
                                        n = e.attributes.map(e => e.array.buffer);
                                    e.index && n.push(e.index.array.buffer), self.postMessage({
                                        type: "decode",
                                        id: s.id,
                                        geometry: e
                                    }, n)
                                } catch (e) {
                                    console.error(e), self.postMessage({
                                        type: "error",
                                        id: s.id,
                                        error: e.message
                                    })
                                } finally {
                                    t.destroy(i), t.destroy(r)
                                }
                            })
                    }
                }
            }
            let a = () => {
                let e;
                if (s) return s;
                let t = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 3, 2, 0, 0, 5, 3, 1, 0, 1, 12, 1, 0, 10, 22, 2, 12, 0, 65, 0, 65, 0, 65, 0, 252, 10, 0, 0, 11, 7, 0, 65, 0, 253, 15, 26, 11]),
                    r = new Uint8Array([32, 0, 65, 253, 3, 1, 2, 34, 4, 106, 6, 5, 11, 8, 7, 20, 13, 33, 12, 16, 128, 9, 116, 64, 19, 113, 127, 15, 10, 21, 22, 14, 255, 66, 24, 54, 136, 107, 18, 23, 192, 26, 114, 118, 132, 17, 77, 101, 130, 144, 27, 87, 131, 44, 45, 74, 156, 154, 70, 167]);
                if ("object" != typeof WebAssembly) return {
                    supported: !1
                };
                let n = "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";
                WebAssembly.validate(t) && (n = "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");
                let A = WebAssembly.instantiate(function(e) {
                    let t = new Uint8Array(e.length);
                    for (let r = 0; r < e.length; ++r) {
                        let s = e.charCodeAt(r);
                        t[r] = s > 96 ? s - 71 : s > 64 ? s - 65 : s > 47 ? s + 4 : s > 46 ? 63 : 62
                    }
                    let s = 0;
                    for (let n = 0; n < e.length; ++n) t[s++] = t[n] < 60 ? r[t[n]] : (t[n] - 60) * 64 + t[++n];
                    return t.buffer.slice(0, s)
                }(n), {}).then(t => {
                    (e = t.instance).exports.__wasm_call_ctors()
                });

                function i(t, r, s, n, A, i) {
                    let o = e.exports.sbrk,
                        a = s + 3 & -4,
                        B = o(a * n),
                        l = o(A.length),
                        C = new Uint8Array(e.exports.memory.buffer);
                    C.set(A, l);
                    let c = t(B, s, n, l, A.length);
                    if (0 === c && i && i(B, a, n), r.set(C.subarray(B, B + s * n)), o(B - o(0)), 0 !== c) throw Error(`Malformed buffer data: ${c}`)
                }
                let o = {
                        0: "",
                        1: "meshopt_decodeFilterOct",
                        2: "meshopt_decodeFilterQuat",
                        3: "meshopt_decodeFilterExp",
                        NONE: "",
                        OCTAHEDRAL: "meshopt_decodeFilterOct",
                        QUATERNION: "meshopt_decodeFilterQuat",
                        EXPONENTIAL: "meshopt_decodeFilterExp"
                    },
                    a = {
                        0: "meshopt_decodeVertexBuffer",
                        1: "meshopt_decodeIndexBuffer",
                        2: "meshopt_decodeIndexSequence",
                        ATTRIBUTES: "meshopt_decodeVertexBuffer",
                        TRIANGLES: "meshopt_decodeIndexBuffer",
                        INDICES: "meshopt_decodeIndexSequence"
                    };
                return s = {
                    ready: A,
                    supported: !0,
                    decodeVertexBuffer(t, r, s, n, A) {
                        i(e.exports.meshopt_decodeVertexBuffer, t, r, s, n, e.exports[o[A]])
                    },
                    decodeIndexBuffer(t, r, s, n) {
                        i(e.exports.meshopt_decodeIndexBuffer, t, r, s, n)
                    },
                    decodeIndexSequence(t, r, s, n) {
                        i(e.exports.meshopt_decodeIndexSequence, t, r, s, n)
                    },
                    decodeGltfBuffer(t, r, s, n, A, B) {
                        i(e.exports[a[A]], t, r, s, n, e.exports[o[B]])
                    }
                }
            };

            function B(e, t) {
                if (t === n.TrianglesDrawMode) return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), e;
                if (t !== n.TriangleFanDrawMode && t !== n.TriangleStripDrawMode) return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", t), e; {
                    let r = e.getIndex();
                    if (null === r) {
                        let t = [],
                            s = e.getAttribute("position");
                        if (void 0 === s) return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), e;
                        for (let e = 0; e < s.count; e++) t.push(e);
                        e.setIndex(t), r = e.getIndex()
                    }
                    let s = r.count - 2,
                        A = [];
                    if (r) {
                        if (t === n.TriangleFanDrawMode)
                            for (let e = 1; e <= s; e++) A.push(r.getX(0)), A.push(r.getX(e)), A.push(r.getX(e + 1));
                        else
                            for (let e = 0; e < s; e++) e % 2 == 0 ? (A.push(r.getX(e)), A.push(r.getX(e + 1)), A.push(r.getX(e + 2))) : (A.push(r.getX(e + 2)), A.push(r.getX(e + 1)), A.push(r.getX(e)))
                    }
                    A.length / 3 !== s && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
                    let i = e.clone();
                    return i.setIndex(A), i.clearGroups(), i
                }
            }
            class l extends n.Loader {
                constructor(e) {
                    super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(e) {
                        return new F(e)
                    }), this.register(function(e) {
                        return new R(e)
                    }), this.register(function(e) {
                        return new p(e)
                    }), this.register(function(e) {
                        return new H(e)
                    }), this.register(function(e) {
                        return new m(e)
                    }), this.register(function(e) {
                        return new f(e)
                    }), this.register(function(e) {
                        return new E(e)
                    }), this.register(function(e) {
                        return new M(e)
                    }), this.register(function(e) {
                        return new d(e)
                    }), this.register(function(e) {
                        return new I(e)
                    }), this.register(function(e) {
                        return new G(e)
                    }), this.register(function(e) {
                        return new D(e)
                    }), this.register(function(e) {
                        return new u(e)
                    }), this.register(function(e) {
                        return new T(e)
                    }), this.register(function(e) {
                        return new J(e)
                    })
                }
                load(e, t, r, s) {
                    let A;
                    let i = this;
                    A = "" !== this.resourcePath ? this.resourcePath : "" !== this.path ? this.path : n.LoaderUtils.extractUrlBase(e), this.manager.itemStart(e);
                    let o = function(t) {
                            s ? s(t) : console.error(t), i.manager.itemError(e), i.manager.itemEnd(e)
                        },
                        a = new n.FileLoader(this.manager);
                    a.setPath(this.path), a.setResponseType("arraybuffer"), a.setRequestHeader(this.requestHeader), a.setWithCredentials(this.withCredentials), a.load(e, function(r) {
                        try {
                            i.parse(r, A, function(r) {
                                t(r), i.manager.itemEnd(e)
                            }, o)
                        } catch (e) {
                            o(e)
                        }
                    }, r, o)
                }
                setDRACOLoader(e) {
                    return this.dracoLoader = e, this
                }
                setDDSLoader() {
                    throw Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')
                }
                setKTX2Loader(e) {
                    return this.ktx2Loader = e, this
                }
                setMeshoptDecoder(e) {
                    return this.meshoptDecoder = e, this
                }
                register(e) {
                    return -1 === this.pluginCallbacks.indexOf(e) && this.pluginCallbacks.push(e), this
                }
                unregister(e) {
                    return -1 !== this.pluginCallbacks.indexOf(e) && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this
                }
                parse(e, t, r, s) {
                    let A;
                    let i = {},
                        o = {};
                    if ("string" == typeof e) A = JSON.parse(e);
                    else if (e instanceof ArrayBuffer) {
                        let t = n.LoaderUtils.decodeText(new Uint8Array(e.slice(0, 4)));
                        if (t === g) {
                            try {
                                i[c.KHR_BINARY_GLTF] = new b(e)
                            } catch (e) {
                                s && s(e);
                                return
                            }
                            A = JSON.parse(i[c.KHR_BINARY_GLTF].content)
                        } else A = JSON.parse(n.LoaderUtils.decodeText(new Uint8Array(e)))
                    } else A = e;
                    if (void 0 === A.asset || A.asset.version[0] < 2) {
                        s && s(Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
                        return
                    }
                    let a = new z(A, {
                        path: t || this.resourcePath || "",
                        crossOrigin: this.crossOrigin,
                        requestHeader: this.requestHeader,
                        manager: this.manager,
                        ktx2Loader: this.ktx2Loader,
                        meshoptDecoder: this.meshoptDecoder
                    });
                    a.fileLoader.setRequestHeader(this.requestHeader);
                    for (let e = 0; e < this.pluginCallbacks.length; e++) {
                        let t = this.pluginCallbacks[e](a);
                        o[t.name] = t, i[t.name] = !0
                    }
                    if (A.extensionsUsed)
                        for (let e = 0; e < A.extensionsUsed.length; ++e) {
                            let t = A.extensionsUsed[e],
                                r = A.extensionsRequired || [];
                            switch (t) {
                                case c.KHR_MATERIALS_UNLIT:
                                    i[t] = new h;
                                    break;
                                case c.KHR_DRACO_MESH_COMPRESSION:
                                    i[t] = new O(A, this.dracoLoader);
                                    break;
                                case c.KHR_TEXTURE_TRANSFORM:
                                    i[t] = new U;
                                    break;
                                case c.KHR_MESH_QUANTIZATION:
                                    i[t] = new K;
                                    break;
                                default:
                                    r.indexOf(t) >= 0 && void 0 === o[t] && console.warn('THREE.GLTFLoader: Unknown extension "' + t + '".')
                            }
                        }
                    a.setExtensions(i), a.setPlugins(o), a.parse(r, s)
                }
                parseAsync(e, t) {
                    let r = this;
                    return new Promise(function(s, n) {
                        r.parse(e, t, s, n)
                    })
                }
            }

            function C() {
                let e = {};
                return {
                    get: function(t) {
                        return e[t]
                    },
                    add: function(t, r) {
                        e[t] = r
                    },
                    remove: function(t) {
                        delete e[t]
                    },
                    removeAll: function() {
                        e = {}
                    }
                }
            }
            let c = {
                KHR_BINARY_GLTF: "KHR_binary_glTF",
                KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
                KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
                KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
                KHR_MATERIALS_IOR: "KHR_materials_ior",
                KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
                KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
                KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
                KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
                KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
                KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
                KHR_MATERIALS_VOLUME: "KHR_materials_volume",
                KHR_TEXTURE_BASISU: "KHR_texture_basisu",
                KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
                KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
                KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
                EXT_TEXTURE_WEBP: "EXT_texture_webp",
                EXT_TEXTURE_AVIF: "EXT_texture_avif",
                EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
                EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
            };
            class u {
                constructor(e) {
                    this.parser = e, this.name = c.KHR_LIGHTS_PUNCTUAL, this.cache = {
                        refs: {},
                        uses: {}
                    }
                }
                _markDefs() {
                    let e = this.parser,
                        t = this.parser.json.nodes || [];
                    for (let r = 0, s = t.length; r < s; r++) {
                        let s = t[r];
                        s.extensions && s.extensions[this.name] && void 0 !== s.extensions[this.name].light && e._addNodeRef(this.cache, s.extensions[this.name].light)
                    }
                }
                _loadLight(e) {
                    let t;
                    let r = this.parser,
                        s = "light:" + e,
                        A = r.cache.get(s);
                    if (A) return A;
                    let i = r.json,
                        o = i.extensions && i.extensions[this.name] || {},
                        a = o.lights || [],
                        B = a[e],
                        l = new n.Color(16777215);
                    void 0 !== B.color && l.fromArray(B.color);
                    let C = void 0 !== B.range ? B.range : 0;
                    switch (B.type) {
                        case "directional":
                            (t = new n.DirectionalLight(l)).target.position.set(0, 0, -1), t.add(t.target);
                            break;
                        case "point":
                            (t = new n.PointLight(l)).distance = C;
                            break;
                        case "spot":
                            (t = new n.SpotLight(l)).distance = C, B.spot = B.spot || {}, B.spot.innerConeAngle = void 0 !== B.spot.innerConeAngle ? B.spot.innerConeAngle : 0, B.spot.outerConeAngle = void 0 !== B.spot.outerConeAngle ? B.spot.outerConeAngle : Math.PI / 4, t.angle = B.spot.outerConeAngle, t.penumbra = 1 - B.spot.innerConeAngle / B.spot.outerConeAngle, t.target.position.set(0, 0, -1), t.add(t.target);
                            break;
                        default:
                            throw Error("THREE.GLTFLoader: Unexpected light type: " + B.type)
                    }
                    return t.position.set(0, 0, 0), t.decay = 2, Z(t, B), void 0 !== B.intensity && (t.intensity = B.intensity), t.name = r.createUniqueName(B.name || "light_" + e), A = Promise.resolve(t), r.cache.add(s, A), A
                }
                getDependency(e, t) {
                    if ("light" === e) return this._loadLight(t)
                }
                createNodeAttachment(e) {
                    let t = this,
                        r = this.parser,
                        s = r.json,
                        n = s.nodes[e],
                        A = n.extensions && n.extensions[this.name] || {},
                        i = A.light;
                    return void 0 === i ? null : this._loadLight(i).then(function(e) {
                        return r._getNodeRef(t.cache, i, e)
                    })
                }
            }
            class h {
                constructor() {
                    this.name = c.KHR_MATERIALS_UNLIT
                }
                getMaterialType() {
                    return n.MeshBasicMaterial
                }
                extendParams(e, t, r) {
                    let s = [];
                    e.color = new n.Color(1, 1, 1), e.opacity = 1;
                    let A = t.pbrMetallicRoughness;
                    if (A) {
                        if (Array.isArray(A.baseColorFactor)) {
                            let t = A.baseColorFactor;
                            e.color.fromArray(t), e.opacity = t[3]
                        }
                        void 0 !== A.baseColorTexture && s.push(r.assignTexture(e, "map", A.baseColorTexture, 3001))
                    }
                    return Promise.all(s)
                }
            }
            class d {
                constructor(e) {
                    this.parser = e, this.name = c.KHR_MATERIALS_EMISSIVE_STRENGTH
                }
                extendMaterialParams(e, t) {
                    let r = this.parser,
                        s = r.json.materials[e];
                    if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
                    let n = s.extensions[this.name].emissiveStrength;
                    return void 0 !== n && (t.emissiveIntensity = n), Promise.resolve()
                }
            }
            class F {
                constructor(e) {
                    this.parser = e, this.name = c.KHR_MATERIALS_CLEARCOAT
                }
                getMaterialType(e) {
                    let t = this.parser,
                        r = t.json.materials[e];
                    return r.extensions && r.extensions[this.name] ? n.MeshPhysicalMaterial : null
                }
                extendMaterialParams(e, t) {
                    let r = this.parser,
                        s = r.json.materials[e];
                    if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
                    let A = [],
                        i = s.extensions[this.name];
                    if (void 0 !== i.clearcoatFactor && (t.clearcoat = i.clearcoatFactor), void 0 !== i.clearcoatTexture && A.push(r.assignTexture(t, "clearcoatMap", i.clearcoatTexture)), void 0 !== i.clearcoatRoughnessFactor && (t.clearcoatRoughness = i.clearcoatRoughnessFactor), void 0 !== i.clearcoatRoughnessTexture && A.push(r.assignTexture(t, "clearcoatRoughnessMap", i.clearcoatRoughnessTexture)), void 0 !== i.clearcoatNormalTexture && (A.push(r.assignTexture(t, "clearcoatNormalMap", i.clearcoatNormalTexture)), void 0 !== i.clearcoatNormalTexture.scale)) {
                        let e = i.clearcoatNormalTexture.scale;
                        t.clearcoatNormalScale = new n.Vector2(e, e)
                    }
                    return Promise.all(A)
                }
            }
            class G {
                constructor(e) {
                    this.parser = e, this.name = c.KHR_MATERIALS_IRIDESCENCE
                }
                getMaterialType(e) {
                    let t = this.parser,
                        r = t.json.materials[e];
                    return r.extensions && r.extensions[this.name] ? n.MeshPhysicalMaterial : null
                }
                extendMaterialParams(e, t) {
                    let r = this.parser,
                        s = r.json.materials[e];
                    if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
                    let n = [],
                        A = s.extensions[this.name];
                    return void 0 !== A.iridescenceFactor && (t.iridescence = A.iridescenceFactor), void 0 !== A.iridescenceTexture && n.push(r.assignTexture(t, "iridescenceMap", A.iridescenceTexture)), void 0 !== A.iridescenceIor && (t.iridescenceIOR = A.iridescenceIor), void 0 === t.iridescenceThicknessRange && (t.iridescenceThicknessRange = [100, 400]), void 0 !== A.iridescenceThicknessMinimum && (t.iridescenceThicknessRange[0] = A.iridescenceThicknessMinimum), void 0 !== A.iridescenceThicknessMaximum && (t.iridescenceThicknessRange[1] = A.iridescenceThicknessMaximum), void 0 !== A.iridescenceThicknessTexture && n.push(r.assignTexture(t, "iridescenceThicknessMap", A.iridescenceThicknessTexture)), Promise.all(n)
                }
            }
            class m {
                constructor(e) {
                    this.parser = e, this.name = c.KHR_MATERIALS_SHEEN
                }
                getMaterialType(e) {
                    let t = this.parser,
                        r = t.json.materials[e];
                    return r.extensions && r.extensions[this.name] ? n.MeshPhysicalMaterial : null
                }
                extendMaterialParams(e, t) {
                    let r = this.parser,
                        s = r.json.materials[e];
                    if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
                    let A = [];
                    t.sheenColor = new n.Color(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
                    let i = s.extensions[this.name];
                    return void 0 !== i.sheenColorFactor && t.sheenColor.fromArray(i.sheenColorFactor), void 0 !== i.sheenRoughnessFactor && (t.sheenRoughness = i.sheenRoughnessFactor), void 0 !== i.sheenColorTexture && A.push(r.assignTexture(t, "sheenColorMap", i.sheenColorTexture, 3001)), void 0 !== i.sheenRoughnessTexture && A.push(r.assignTexture(t, "sheenRoughnessMap", i.sheenRoughnessTexture)), Promise.all(A)
                }
            }
            class f {
                constructor(e) {
                    this.parser = e, this.name = c.KHR_MATERIALS_TRANSMISSION
                }
                getMaterialType(e) {
                    let t = this.parser,
                        r = t.json.materials[e];
                    return r.extensions && r.extensions[this.name] ? n.MeshPhysicalMaterial : null
                }
                extendMaterialParams(e, t) {
                    let r = this.parser,
                        s = r.json.materials[e];
                    if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
                    let n = [],
                        A = s.extensions[this.name];
                    return void 0 !== A.transmissionFactor && (t.transmission = A.transmissionFactor), void 0 !== A.transmissionTexture && n.push(r.assignTexture(t, "transmissionMap", A.transmissionTexture)), Promise.all(n)
                }
            }
            class E {
                constructor(e) {
                    this.parser = e, this.name = c.KHR_MATERIALS_VOLUME
                }
                getMaterialType(e) {
                    let t = this.parser,
                        r = t.json.materials[e];
                    return r.extensions && r.extensions[this.name] ? n.MeshPhysicalMaterial : null
                }
                extendMaterialParams(e, t) {
                    let r = this.parser,
                        s = r.json.materials[e];
                    if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
                    let A = [],
                        i = s.extensions[this.name];
                    t.thickness = void 0 !== i.thicknessFactor ? i.thicknessFactor : 0, void 0 !== i.thicknessTexture && A.push(r.assignTexture(t, "thicknessMap", i.thicknessTexture)), t.attenuationDistance = i.attenuationDistance || 1 / 0;
                    let o = i.attenuationColor || [1, 1, 1];
                    return t.attenuationColor = new n.Color(o[0], o[1], o[2]), Promise.all(A)
                }
            }
            class M {
                constructor(e) {
                    this.parser = e, this.name = c.KHR_MATERIALS_IOR
                }
                getMaterialType(e) {
                    let t = this.parser,
                        r = t.json.materials[e];
                    return r.extensions && r.extensions[this.name] ? n.MeshPhysicalMaterial : null
                }
                extendMaterialParams(e, t) {
                    let r = this.parser,
                        s = r.json.materials[e];
                    if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
                    let n = s.extensions[this.name];
                    return t.ior = void 0 !== n.ior ? n.ior : 1.5, Promise.resolve()
                }
            }
            class I {
                constructor(e) {
                    this.parser = e, this.name = c.KHR_MATERIALS_SPECULAR
                }
                getMaterialType(e) {
                    let t = this.parser,
                        r = t.json.materials[e];
                    return r.extensions && r.extensions[this.name] ? n.MeshPhysicalMaterial : null
                }
                extendMaterialParams(e, t) {
                    let r = this.parser,
                        s = r.json.materials[e];
                    if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
                    let A = [],
                        i = s.extensions[this.name];
                    t.specularIntensity = void 0 !== i.specularFactor ? i.specularFactor : 1, void 0 !== i.specularTexture && A.push(r.assignTexture(t, "specularIntensityMap", i.specularTexture));
                    let o = i.specularColorFactor || [1, 1, 1];
                    return t.specularColor = new n.Color(o[0], o[1], o[2]), void 0 !== i.specularColorTexture && A.push(r.assignTexture(t, "specularColorMap", i.specularColorTexture, 3001)), Promise.all(A)
                }
            }
            class D {
                constructor(e) {
                    this.parser = e, this.name = c.KHR_MATERIALS_ANISOTROPY
                }
                getMaterialType(e) {
                    let t = this.parser,
                        r = t.json.materials[e];
                    return r.extensions && r.extensions[this.name] ? n.MeshPhysicalMaterial : null
                }
                extendMaterialParams(e, t) {
                    let r = this.parser,
                        s = r.json.materials[e];
                    if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
                    let n = [],
                        A = s.extensions[this.name];
                    return void 0 !== A.anisotropyStrength && (t.anisotropy = A.anisotropyStrength), void 0 !== A.anisotropyRotation && (t.anisotropyRotation = A.anisotropyRotation), void 0 !== A.anisotropyTexture && n.push(r.assignTexture(t, "anisotropyMap", A.anisotropyTexture)), Promise.all(n)
                }
            }
            class R {
                constructor(e) {
                    this.parser = e, this.name = c.KHR_TEXTURE_BASISU
                }
                loadTexture(e) {
                    let t = this.parser,
                        r = t.json,
                        s = r.textures[e];
                    if (!s.extensions || !s.extensions[this.name]) return null;
                    let n = s.extensions[this.name],
                        A = t.options.ktx2Loader;
                    if (!A) {
                        if (!(r.extensionsRequired && r.extensionsRequired.indexOf(this.name) >= 0)) return null;
                        throw Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures")
                    }
                    return t.loadTextureImage(e, n.source, A)
                }
            }
            class p {
                constructor(e) {
                    this.parser = e, this.name = c.EXT_TEXTURE_WEBP, this.isSupported = null
                }
                loadTexture(e) {
                    let t = this.name,
                        r = this.parser,
                        s = r.json,
                        n = s.textures[e];
                    if (!n.extensions || !n.extensions[t]) return null;
                    let A = n.extensions[t],
                        i = s.images[A.source],
                        o = r.textureLoader;
                    if (i.uri) {
                        let e = r.options.manager.getHandler(i.uri);
                        null !== e && (o = e)
                    }
                    return this.detectSupport().then(function(n) {
                        if (n) return r.loadTextureImage(e, A.source, o);
                        if (s.extensionsRequired && s.extensionsRequired.indexOf(t) >= 0) throw Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
                        return r.loadTexture(e)
                    })
                }
                detectSupport() {
                    return this.isSupported || (this.isSupported = new Promise(function(e) {
                        let t = new Image;
                        t.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", t.onload = t.onerror = function() {
                            e(1 === t.height)
                        }
                    })), this.isSupported
                }
            }
            class H {
                constructor(e) {
                    this.parser = e, this.name = c.EXT_TEXTURE_AVIF, this.isSupported = null
                }
                loadTexture(e) {
                    let t = this.name,
                        r = this.parser,
                        s = r.json,
                        n = s.textures[e];
                    if (!n.extensions || !n.extensions[t]) return null;
                    let A = n.extensions[t],
                        i = s.images[A.source],
                        o = r.textureLoader;
                    if (i.uri) {
                        let e = r.options.manager.getHandler(i.uri);
                        null !== e && (o = e)
                    }
                    return this.detectSupport().then(function(n) {
                        if (n) return r.loadTextureImage(e, A.source, o);
                        if (s.extensionsRequired && s.extensionsRequired.indexOf(t) >= 0) throw Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");
                        return r.loadTexture(e)
                    })
                }
                detectSupport() {
                    return this.isSupported || (this.isSupported = new Promise(function(e) {
                        let t = new Image;
                        t.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=", t.onload = t.onerror = function() {
                            e(1 === t.height)
                        }
                    })), this.isSupported
                }
            }
            class T {
                constructor(e) {
                    this.name = c.EXT_MESHOPT_COMPRESSION, this.parser = e
                }
                loadBufferView(e) {
                    let t = this.parser.json,
                        r = t.bufferViews[e];
                    if (!r.extensions || !r.extensions[this.name]) return null; {
                        let e = r.extensions[this.name],
                            s = this.parser.getDependency("buffer", e.buffer),
                            n = this.parser.options.meshoptDecoder;
                        if (!n || !n.supported) {
                            if (!(t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0)) return null;
                            throw Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files")
                        }
                        return s.then(function(t) {
                            let r = e.byteOffset || 0,
                                s = e.byteLength || 0,
                                A = e.count,
                                i = e.byteStride,
                                o = new Uint8Array(t, r, s);
                            return n.decodeGltfBufferAsync ? n.decodeGltfBufferAsync(A, i, o, e.mode, e.filter).then(function(e) {
                                return e.buffer
                            }) : n.ready.then(function() {
                                let t = new ArrayBuffer(A * i);
                                return n.decodeGltfBuffer(new Uint8Array(t), A, i, o, e.mode, e.filter), t
                            })
                        })
                    }
                }
            }
            class J {
                constructor(e) {
                    this.name = c.EXT_MESH_GPU_INSTANCING, this.parser = e
                }
                createNodeMesh(e) {
                    let t = this.parser.json,
                        r = t.nodes[e];
                    if (!r.extensions || !r.extensions[this.name] || void 0 === r.mesh) return null;
                    let s = t.meshes[r.mesh];
                    for (let e of s.primitives)
                        if (e.mode !== S.TRIANGLES && e.mode !== S.TRIANGLE_STRIP && e.mode !== S.TRIANGLE_FAN && void 0 !== e.mode) return null;
                    let A = r.extensions[this.name],
                        i = A.attributes,
                        o = [],
                        a = {};
                    for (let e in i) o.push(this.parser.getDependency("accessor", i[e]).then(t => (a[e] = t, a[e])));
                    return o.length < 1 ? null : (o.push(this.parser.createNodeMesh(e)), Promise.all(o).then(e => {
                        let t = e.pop(),
                            r = t.isGroup ? t.children : [t],
                            s = e[0].count,
                            A = [];
                        for (let e of r) {
                            let t = new n.Matrix4,
                                r = new n.Vector3,
                                i = new n.Quaternion,
                                o = new n.Vector3(1, 1, 1),
                                B = new n.InstancedMesh(e.geometry, e.material, s);
                            for (let e = 0; e < s; e++) a.TRANSLATION && r.fromBufferAttribute(a.TRANSLATION, e), a.ROTATION && i.fromBufferAttribute(a.ROTATION, e), a.SCALE && o.fromBufferAttribute(a.SCALE, e), B.setMatrixAt(e, t.compose(r, i, o));
                            for (let t in a) "TRANSLATION" !== t && "ROTATION" !== t && "SCALE" !== t && e.geometry.setAttribute(t, a[t]);
                            n.Object3D.prototype.copy.call(B, e), this.parser.assignFinalMaterial(B), A.push(B)
                        }
                        return t.isGroup ? (t.clear(), t.add(...A), t) : A[0]
                    }))
                }
            }
            let g = "glTF",
                L = {
                    JSON: 1313821514,
                    BIN: 5130562
                };
            class b {
                constructor(e) {
                    this.name = c.KHR_BINARY_GLTF, this.content = null, this.body = null;
                    let t = new DataView(e, 0, 12);
                    if (this.header = {
                            magic: n.LoaderUtils.decodeText(new Uint8Array(e.slice(0, 4))),
                            version: t.getUint32(4, !0),
                            length: t.getUint32(8, !0)
                        }, this.header.magic !== g) throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
                    if (this.header.version < 2) throw Error("THREE.GLTFLoader: Legacy binary file detected.");
                    let r = this.header.length - 12,
                        s = new DataView(e, 12),
                        A = 0;
                    for (; A < r;) {
                        let t = s.getUint32(A, !0);
                        A += 4;
                        let r = s.getUint32(A, !0);
                        if (A += 4, r === L.JSON) {
                            let r = new Uint8Array(e, 12 + A, t);
                            this.content = n.LoaderUtils.decodeText(r)
                        } else if (r === L.BIN) {
                            let r = 12 + A;
                            this.body = e.slice(r, r + t)
                        }
                        A += t
                    }
                    if (null === this.content) throw Error("THREE.GLTFLoader: JSON content not found.")
                }
            }
            class O {
                constructor(e, t) {
                    if (!t) throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
                    this.name = c.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload()
                }
                decodePrimitive(e, t) {
                    let r = this.json,
                        s = this.dracoLoader,
                        n = e.extensions[this.name].bufferView,
                        A = e.extensions[this.name].attributes,
                        i = {},
                        o = {},
                        a = {};
                    for (let e in A) {
                        let t = _[e] || e.toLowerCase();
                        i[t] = A[e]
                    }
                    for (let t in e.attributes) {
                        let s = _[t] || t.toLowerCase();
                        if (void 0 !== A[t]) {
                            let n = r.accessors[e.attributes[t]],
                                A = N[n.componentType];
                            a[s] = A.name, o[s] = !0 === n.normalized
                        }
                    }
                    return t.getDependency("bufferView", n).then(function(e) {
                        return new Promise(function(t) {
                            s.decodeDracoFile(e, function(e) {
                                for (let t in e.attributes) {
                                    let r = e.attributes[t],
                                        s = o[t];
                                    void 0 !== s && (r.normalized = s)
                                }
                                t(e)
                            }, i, a)
                        })
                    })
                }
            }
            class U {
                constructor() {
                    this.name = c.KHR_TEXTURE_TRANSFORM
                }
                extendTexture(e, t) {
                    return (void 0 === t.texCoord || t.texCoord === e.channel) && void 0 === t.offset && void 0 === t.rotation && void 0 === t.scale || (e = e.clone(), void 0 !== t.texCoord && (e.channel = t.texCoord), void 0 !== t.offset && e.offset.fromArray(t.offset), void 0 !== t.rotation && (e.rotation = t.rotation), void 0 !== t.scale && e.repeat.fromArray(t.scale), e.needsUpdate = !0), e
                }
            }
            class K {
                constructor() {
                    this.name = c.KHR_MESH_QUANTIZATION
                }
            }
            class x extends n.Interpolant {
                constructor(e, t, r, s) {
                    super(e, t, r, s)
                }
                copySampleValue_(e) {
                    let t = this.resultBuffer,
                        r = this.sampleValues,
                        s = this.valueSize,
                        n = e * s * 3 + s;
                    for (let e = 0; e !== s; e++) t[e] = r[n + e];
                    return t
                }
                interpolate_(e, t, r, s) {
                    let n = this.resultBuffer,
                        A = this.sampleValues,
                        i = this.valueSize,
                        o = 2 * i,
                        a = 3 * i,
                        B = s - t,
                        l = (r - t) / B,
                        C = l * l,
                        c = C * l,
                        u = e * a,
                        h = u - a,
                        d = -2 * c + 3 * C,
                        F = c - C,
                        G = 1 - d,
                        m = F - C + l;
                    for (let e = 0; e !== i; e++) {
                        let t = A[h + e + i],
                            r = A[h + e + o] * B,
                            s = A[u + e + i],
                            a = A[u + e] * B;
                        n[e] = G * t + m * r + d * s + F * a
                    }
                    return n
                }
            }
            let y = new n.Quaternion;
            class P extends x {
                interpolate_(e, t, r, s) {
                    let n = super.interpolate_(e, t, r, s);
                    return y.fromArray(n).normalize().toArray(n), n
                }
            }
            let S = {
                    FLOAT: 5126,
                    FLOAT_MAT3: 35675,
                    FLOAT_MAT4: 35676,
                    FLOAT_VEC2: 35664,
                    FLOAT_VEC3: 35665,
                    FLOAT_VEC4: 35666,
                    LINEAR: 9729,
                    REPEAT: 10497,
                    SAMPLER_2D: 35678,
                    POINTS: 0,
                    LINES: 1,
                    LINE_LOOP: 2,
                    LINE_STRIP: 3,
                    TRIANGLES: 4,
                    TRIANGLE_STRIP: 5,
                    TRIANGLE_FAN: 6,
                    UNSIGNED_BYTE: 5121,
                    UNSIGNED_SHORT: 5123
                },
                N = {
                    5120: Int8Array,
                    5121: Uint8Array,
                    5122: Int16Array,
                    5123: Uint16Array,
                    5125: Uint32Array,
                    5126: Float32Array
                },
                Q = {
                    9728: n.NearestFilter,
                    9729: n.LinearFilter,
                    9984: n.NearestMipmapNearestFilter,
                    9985: n.LinearMipmapNearestFilter,
                    9986: n.NearestMipmapLinearFilter,
                    9987: n.LinearMipmapLinearFilter
                },
                w = {
                    33071: n.ClampToEdgeWrapping,
                    33648: n.MirroredRepeatWrapping,
                    10497: n.RepeatWrapping
                },
                v = {
                    SCALAR: 1,
                    VEC2: 2,
                    VEC3: 3,
                    VEC4: 4,
                    MAT2: 4,
                    MAT3: 9,
                    MAT4: 16
                },
                _ = {
                    POSITION: "position",
                    NORMAL: "normal",
                    TANGENT: "tangent",
                    ...n.REVISION.replace(/\D+/g, "") >= 152 ? {
                        TEXCOORD_0: "uv",
                        TEXCOORD_1: "uv1",
                        TEXCOORD_2: "uv2",
                        TEXCOORD_3: "uv3"
                    } : {
                        TEXCOORD_0: "uv",
                        TEXCOORD_1: "uv2"
                    },
                    COLOR_0: "color",
                    WEIGHTS_0: "skinWeight",
                    JOINTS_0: "skinIndex"
                },
                X = {
                    scale: "scale",
                    translation: "position",
                    rotation: "quaternion",
                    weights: "morphTargetInfluences"
                },
                k = {
                    CUBICSPLINE: void 0,
                    LINEAR: n.InterpolateLinear,
                    STEP: n.InterpolateDiscrete
                },
                Y = {
                    OPAQUE: "OPAQUE",
                    MASK: "MASK",
                    BLEND: "BLEND"
                };

            function j(e, t, r) {
                for (let s in r.extensions) void 0 === e[s] && (t.userData.gltfExtensions = t.userData.gltfExtensions || {}, t.userData.gltfExtensions[s] = r.extensions[s])
            }

            function Z(e, t) {
                void 0 !== t.extras && ("object" == typeof t.extras ? Object.assign(e.userData, t.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + t.extras))
            }

            function W(e) {
                let t = "",
                    r = Object.keys(e).sort();
                for (let s = 0, n = r.length; s < n; s++) t += r[s] + ":" + e[r[s]] + ";";
                return t
            }

            function V(e) {
                switch (e) {
                    case Int8Array:
                        return 1 / 127;
                    case Uint8Array:
                        return 1 / 255;
                    case Int16Array:
                        return 1 / 32767;
                    case Uint16Array:
                        return 1 / 65535;
                    default:
                        throw Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")
                }
            }
            let q = new n.Matrix4;
            class z {
                constructor(e = {}, t = {}) {
                    this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new C, this.associations = new Map, this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = {
                        refs: {},
                        uses: {}
                    }, this.cameraCache = {
                        refs: {},
                        uses: {}
                    }, this.lightCache = {
                        refs: {},
                        uses: {}
                    }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
                    let r = !1,
                        s = !1,
                        A = -1;
                    "undefined" != typeof navigator && (r = !0 === /^((?!chrome|android).)*safari/i.test(navigator.userAgent), A = (s = navigator.userAgent.indexOf("Firefox") > -1) ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1), "undefined" == typeof createImageBitmap || r || s && A < 98 ? this.textureLoader = new n.TextureLoader(this.options.manager) : this.textureLoader = new n.ImageBitmapLoader(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new n.FileLoader(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), "use-credentials" === this.options.crossOrigin && this.fileLoader.setWithCredentials(!0)
                }
                setExtensions(e) {
                    this.extensions = e
                }
                setPlugins(e) {
                    this.plugins = e
                }
                parse(e, t) {
                    let r = this,
                        s = this.json,
                        n = this.extensions;
                    this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function(e) {
                        return e._markDefs && e._markDefs()
                    }), Promise.all(this._invokeAll(function(e) {
                        return e.beforeRoot && e.beforeRoot()
                    })).then(function() {
                        return Promise.all([r.getDependencies("scene"), r.getDependencies("animation"), r.getDependencies("camera")])
                    }).then(function(t) {
                        let A = {
                            scene: t[0][s.scene || 0],
                            scenes: t[0],
                            animations: t[1],
                            cameras: t[2],
                            asset: s.asset,
                            parser: r,
                            userData: {}
                        };
                        j(n, A, s), Z(A, s), Promise.all(r._invokeAll(function(e) {
                            return e.afterRoot && e.afterRoot(A)
                        })).then(function() {
                            e(A)
                        })
                    }).catch(t)
                }
                _markDefs() {
                    let e = this.json.nodes || [],
                        t = this.json.skins || [],
                        r = this.json.meshes || [];
                    for (let r = 0, s = t.length; r < s; r++) {
                        let s = t[r].joints;
                        for (let t = 0, r = s.length; t < r; t++) e[s[t]].isBone = !0
                    }
                    for (let t = 0, s = e.length; t < s; t++) {
                        let s = e[t];
                        void 0 !== s.mesh && (this._addNodeRef(this.meshCache, s.mesh), void 0 !== s.skin && (r[s.mesh].isSkinnedMesh = !0)), void 0 !== s.camera && this._addNodeRef(this.cameraCache, s.camera)
                    }
                }
                _addNodeRef(e, t) {
                    void 0 !== t && (void 0 === e.refs[t] && (e.refs[t] = e.uses[t] = 0), e.refs[t]++)
                }
                _getNodeRef(e, t, r) {
                    if (e.refs[t] <= 1) return r;
                    let s = r.clone(),
                        n = (e, t) => {
                            let r = this.associations.get(e);
                            for (let [s, A] of (null != r && this.associations.set(t, r), e.children.entries())) n(A, t.children[s])
                        };
                    return n(r, s), s.name += "_instance_" + e.uses[t]++, s
                }
                _invokeOne(e) {
                    let t = Object.values(this.plugins);
                    t.push(this);
                    for (let r = 0; r < t.length; r++) {
                        let s = e(t[r]);
                        if (s) return s
                    }
                    return null
                }
                _invokeAll(e) {
                    let t = Object.values(this.plugins);
                    t.unshift(this);
                    let r = [];
                    for (let s = 0; s < t.length; s++) {
                        let n = e(t[s]);
                        n && r.push(n)
                    }
                    return r
                }
                getDependency(e, t) {
                    let r = e + ":" + t,
                        s = this.cache.get(r);
                    if (!s) {
                        switch (e) {
                            case "scene":
                                s = this.loadScene(t);
                                break;
                            case "node":
                                s = this._invokeOne(function(e) {
                                    return e.loadNode && e.loadNode(t)
                                });
                                break;
                            case "mesh":
                                s = this._invokeOne(function(e) {
                                    return e.loadMesh && e.loadMesh(t)
                                });
                                break;
                            case "accessor":
                                s = this.loadAccessor(t);
                                break;
                            case "bufferView":
                                s = this._invokeOne(function(e) {
                                    return e.loadBufferView && e.loadBufferView(t)
                                });
                                break;
                            case "buffer":
                                s = this.loadBuffer(t);
                                break;
                            case "material":
                                s = this._invokeOne(function(e) {
                                    return e.loadMaterial && e.loadMaterial(t)
                                });
                                break;
                            case "texture":
                                s = this._invokeOne(function(e) {
                                    return e.loadTexture && e.loadTexture(t)
                                });
                                break;
                            case "skin":
                                s = this.loadSkin(t);
                                break;
                            case "animation":
                                s = this._invokeOne(function(e) {
                                    return e.loadAnimation && e.loadAnimation(t)
                                });
                                break;
                            case "camera":
                                s = this.loadCamera(t);
                                break;
                            default:
                                if (!(s = this._invokeOne(function(r) {
                                        return r != this && r.getDependency && r.getDependency(e, t)
                                    }))) throw Error("Unknown type: " + e)
                        }
                        this.cache.add(r, s)
                    }
                    return s
                }
                getDependencies(e) {
                    let t = this.cache.get(e);
                    if (!t) {
                        let r = this,
                            s = this.json[e + ("mesh" === e ? "es" : "s")] || [];
                        t = Promise.all(s.map(function(t, s) {
                            return r.getDependency(e, s)
                        })), this.cache.add(e, t)
                    }
                    return t
                }
                loadBuffer(e) {
                    let t = this.json.buffers[e],
                        r = this.fileLoader;
                    if (t.type && "arraybuffer" !== t.type) throw Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
                    if (void 0 === t.uri && 0 === e) return Promise.resolve(this.extensions[c.KHR_BINARY_GLTF].body);
                    let s = this.options;
                    return new Promise(function(e, A) {
                        r.load(n.LoaderUtils.resolveURL(t.uri, s.path), e, void 0, function() {
                            A(Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'))
                        })
                    })
                }
                loadBufferView(e) {
                    let t = this.json.bufferViews[e];
                    return this.getDependency("buffer", t.buffer).then(function(e) {
                        let r = t.byteLength || 0,
                            s = t.byteOffset || 0;
                        return e.slice(s, s + r)
                    })
                }
                loadAccessor(e) {
                    let t = this,
                        r = this.json,
                        s = this.json.accessors[e];
                    if (void 0 === s.bufferView && void 0 === s.sparse) {
                        let e = v[s.type],
                            t = N[s.componentType],
                            r = !0 === s.normalized,
                            A = new t(s.count * e);
                        return Promise.resolve(new n.BufferAttribute(A, e, r))
                    }
                    let A = [];
                    return void 0 !== s.bufferView ? A.push(this.getDependency("bufferView", s.bufferView)) : A.push(null), void 0 !== s.sparse && (A.push(this.getDependency("bufferView", s.sparse.indices.bufferView)), A.push(this.getDependency("bufferView", s.sparse.values.bufferView))), Promise.all(A).then(function(e) {
                        let A, i;
                        let o = e[0],
                            a = v[s.type],
                            B = N[s.componentType],
                            l = B.BYTES_PER_ELEMENT,
                            C = l * a,
                            c = s.byteOffset || 0,
                            u = void 0 !== s.bufferView ? r.bufferViews[s.bufferView].byteStride : void 0,
                            h = !0 === s.normalized;
                        if (u && u !== C) {
                            let e = Math.floor(c / u),
                                r = "InterleavedBuffer:" + s.bufferView + ":" + s.componentType + ":" + e + ":" + s.count,
                                C = t.cache.get(r);
                            C || (A = new B(o, e * u, s.count * u / l), C = new n.InterleavedBuffer(A, u / l), t.cache.add(r, C)), i = new n.InterleavedBufferAttribute(C, a, c % u / l, h)
                        } else A = null === o ? new B(s.count * a) : new B(o, c, s.count * a), i = new n.BufferAttribute(A, a, h);
                        if (void 0 !== s.sparse) {
                            let t = v.SCALAR,
                                r = N[s.sparse.indices.componentType],
                                A = s.sparse.indices.byteOffset || 0,
                                l = s.sparse.values.byteOffset || 0,
                                C = new r(e[1], A, s.sparse.count * t),
                                c = new B(e[2], l, s.sparse.count * a);
                            null !== o && (i = new n.BufferAttribute(i.array.slice(), i.itemSize, i.normalized));
                            for (let e = 0, t = C.length; e < t; e++) {
                                let t = C[e];
                                if (i.setX(t, c[e * a]), a >= 2 && i.setY(t, c[e * a + 1]), a >= 3 && i.setZ(t, c[e * a + 2]), a >= 4 && i.setW(t, c[e * a + 3]), a >= 5) throw Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")
                            }
                        }
                        return i
                    })
                }
                loadTexture(e) {
                    let t = this.json,
                        r = this.options,
                        s = t.textures[e],
                        n = s.source,
                        A = t.images[n],
                        i = this.textureLoader;
                    if (A.uri) {
                        let e = r.manager.getHandler(A.uri);
                        null !== e && (i = e)
                    }
                    return this.loadTextureImage(e, n, i)
                }
                loadTextureImage(e, t, r) {
                    let s = this,
                        A = this.json,
                        i = A.textures[e],
                        o = A.images[t],
                        a = (o.uri || o.bufferView) + ":" + i.sampler;
                    if (this.textureCache[a]) return this.textureCache[a];
                    let B = this.loadImageSource(t, r).then(function(t) {
                        t.flipY = !1, t.name = i.name || o.name || "", "" === t.name && "string" == typeof o.uri && !1 === o.uri.startsWith("data:image/") && (t.name = o.uri);
                        let r = A.samplers || {},
                            a = r[i.sampler] || {};
                        return t.magFilter = Q[a.magFilter] || n.LinearFilter, t.minFilter = Q[a.minFilter] || n.LinearMipmapLinearFilter, t.wrapS = w[a.wrapS] || n.RepeatWrapping, t.wrapT = w[a.wrapT] || n.RepeatWrapping, s.associations.set(t, {
                            textures: e
                        }), t
                    }).catch(function() {
                        return null
                    });
                    return this.textureCache[a] = B, B
                }
                loadImageSource(e, t) {
                    let r = this.json,
                        s = this.options;
                    if (void 0 !== this.sourceCache[e]) return this.sourceCache[e].then(e => e.clone());
                    let A = r.images[e],
                        i = self.URL || self.webkitURL,
                        o = A.uri || "",
                        a = !1;
                    if (void 0 !== A.bufferView) o = this.getDependency("bufferView", A.bufferView).then(function(e) {
                        a = !0;
                        let t = new Blob([e], {
                            type: A.mimeType
                        });
                        return o = i.createObjectURL(t)
                    });
                    else if (void 0 === A.uri) throw Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
                    let B = Promise.resolve(o).then(function(e) {
                        return new Promise(function(r, A) {
                            let i = r;
                            !0 === t.isImageBitmapLoader && (i = function(e) {
                                let t = new n.Texture(e);
                                t.needsUpdate = !0, r(t)
                            }), t.load(n.LoaderUtils.resolveURL(e, s.path), i, void 0, A)
                        })
                    }).then(function(e) {
                        var t;
                        return !0 === a && i.revokeObjectURL(o), e.userData.mimeType = A.mimeType || ((t = A.uri).search(/\.jpe?g($|\?)/i) > 0 || 0 === t.search(/^data\:image\/jpeg/) ? "image/jpeg" : t.search(/\.webp($|\?)/i) > 0 || 0 === t.search(/^data\:image\/webp/) ? "image/webp" : "image/png"), e
                    }).catch(function(e) {
                        throw console.error("THREE.GLTFLoader: Couldn't load texture", o), e
                    });
                    return this.sourceCache[e] = B, B
                }
                assignTexture(e, t, r, s) {
                    let n = this;
                    return this.getDependency("texture", r.index).then(function(A) {
                        if (!A) return null;
                        if (void 0 !== r.texCoord && r.texCoord > 0 && ((A = A.clone()).channel = r.texCoord), n.extensions[c.KHR_TEXTURE_TRANSFORM]) {
                            let e = void 0 !== r.extensions ? r.extensions[c.KHR_TEXTURE_TRANSFORM] : void 0;
                            if (e) {
                                let t = n.associations.get(A);
                                A = n.extensions[c.KHR_TEXTURE_TRANSFORM].extendTexture(A, e), n.associations.set(A, t)
                            }
                        }
                        return void 0 !== s && ("colorSpace" in A ? A.colorSpace = 3001 === s ? "srgb" : "srgb-linear" : A.encoding = s), e[t] = A, A
                    })
                }
                assignFinalMaterial(e) {
                    let t = e.geometry,
                        r = e.material,
                        s = void 0 === t.attributes.tangent,
                        A = void 0 !== t.attributes.color,
                        i = void 0 === t.attributes.normal;
                    if (e.isPoints) {
                        let e = "PointsMaterial:" + r.uuid,
                            t = this.cache.get(e);
                        t || (t = new n.PointsMaterial, n.Material.prototype.copy.call(t, r), t.color.copy(r.color), t.map = r.map, t.sizeAttenuation = !1, this.cache.add(e, t)), r = t
                    } else if (e.isLine) {
                        let e = "LineBasicMaterial:" + r.uuid,
                            t = this.cache.get(e);
                        t || (t = new n.LineBasicMaterial, n.Material.prototype.copy.call(t, r), t.color.copy(r.color), t.map = r.map, this.cache.add(e, t)), r = t
                    }
                    if (s || A || i) {
                        let e = "ClonedMaterial:" + r.uuid + ":";
                        s && (e += "derivative-tangents:"), A && (e += "vertex-colors:"), i && (e += "flat-shading:");
                        let t = this.cache.get(e);
                        t || (t = r.clone(), A && (t.vertexColors = !0), i && (t.flatShading = !0), s && (t.normalScale && (t.normalScale.y *= -1), t.clearcoatNormalScale && (t.clearcoatNormalScale.y *= -1)), this.cache.add(e, t), this.associations.set(t, this.associations.get(r))), r = t
                    }
                    e.material = r
                }
                getMaterialType() {
                    return n.MeshStandardMaterial
                }
                loadMaterial(e) {
                    let t;
                    let r = this,
                        s = this.json,
                        A = this.extensions,
                        i = s.materials[e],
                        o = {},
                        a = i.extensions || {},
                        B = [];
                    if (a[c.KHR_MATERIALS_UNLIT]) {
                        let e = A[c.KHR_MATERIALS_UNLIT];
                        t = e.getMaterialType(), B.push(e.extendParams(o, i, r))
                    } else {
                        let s = i.pbrMetallicRoughness || {};
                        if (o.color = new n.Color(1, 1, 1), o.opacity = 1, Array.isArray(s.baseColorFactor)) {
                            let e = s.baseColorFactor;
                            o.color.fromArray(e), o.opacity = e[3]
                        }
                        void 0 !== s.baseColorTexture && B.push(r.assignTexture(o, "map", s.baseColorTexture, 3001)), o.metalness = void 0 !== s.metallicFactor ? s.metallicFactor : 1, o.roughness = void 0 !== s.roughnessFactor ? s.roughnessFactor : 1, void 0 !== s.metallicRoughnessTexture && (B.push(r.assignTexture(o, "metalnessMap", s.metallicRoughnessTexture)), B.push(r.assignTexture(o, "roughnessMap", s.metallicRoughnessTexture))), t = this._invokeOne(function(t) {
                            return t.getMaterialType && t.getMaterialType(e)
                        }), B.push(Promise.all(this._invokeAll(function(t) {
                            return t.extendMaterialParams && t.extendMaterialParams(e, o)
                        })))
                    }!0 === i.doubleSided && (o.side = n.DoubleSide);
                    let l = i.alphaMode || Y.OPAQUE;
                    if (l === Y.BLEND ? (o.transparent = !0, o.depthWrite = !1) : (o.transparent = !1, l === Y.MASK && (o.alphaTest = void 0 !== i.alphaCutoff ? i.alphaCutoff : .5)), void 0 !== i.normalTexture && t !== n.MeshBasicMaterial && (B.push(r.assignTexture(o, "normalMap", i.normalTexture)), o.normalScale = new n.Vector2(1, 1), void 0 !== i.normalTexture.scale)) {
                        let e = i.normalTexture.scale;
                        o.normalScale.set(e, e)
                    }
                    return void 0 !== i.occlusionTexture && t !== n.MeshBasicMaterial && (B.push(r.assignTexture(o, "aoMap", i.occlusionTexture)), void 0 !== i.occlusionTexture.strength && (o.aoMapIntensity = i.occlusionTexture.strength)), void 0 !== i.emissiveFactor && t !== n.MeshBasicMaterial && (o.emissive = new n.Color().fromArray(i.emissiveFactor)), void 0 !== i.emissiveTexture && t !== n.MeshBasicMaterial && B.push(r.assignTexture(o, "emissiveMap", i.emissiveTexture, 3001)), Promise.all(B).then(function() {
                        let s = new t(o);
                        return i.name && (s.name = i.name), Z(s, i), r.associations.set(s, {
                            materials: e
                        }), i.extensions && j(A, s, i), s
                    })
                }
                createUniqueName(e) {
                    let t = n.PropertyBinding.sanitizeNodeName(e || "");
                    return t in this.nodeNamesUsed ? t + "_" + ++this.nodeNamesUsed[t] : (this.nodeNamesUsed[t] = 0, t)
                }
                loadGeometries(e) {
                    let t = this,
                        r = this.extensions,
                        s = this.primitiveCache,
                        A = [];
                    for (let i = 0, o = e.length; i < o; i++) {
                        let o = e[i],
                            a = function(e) {
                                let t;
                                let r = e.extensions && e.extensions[c.KHR_DRACO_MESH_COMPRESSION];
                                if (t = r ? "draco:" + r.bufferView + ":" + r.indices + ":" + W(r.attributes) : e.indices + ":" + W(e.attributes) + ":" + e.mode, void 0 !== e.targets)
                                    for (let r = 0, s = e.targets.length; r < s; r++) t += ":" + W(e.targets[r]);
                                return t
                            }(o),
                            B = s[a];
                        if (B) A.push(B.promise);
                        else {
                            let e;
                            e = o.extensions && o.extensions[c.KHR_DRACO_MESH_COMPRESSION] ? function(e) {
                                return r[c.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e, t).then(function(r) {
                                    return $(r, e, t)
                                })
                            }(o) : $(new n.BufferGeometry, o, t), s[a] = {
                                primitive: o,
                                promise: e
                            }, A.push(e)
                        }
                    }
                    return Promise.all(A)
                }
                loadMesh(e) {
                    let t = this,
                        r = this.json,
                        s = this.extensions,
                        A = r.meshes[e],
                        i = A.primitives,
                        o = [];
                    for (let e = 0, t = i.length; e < t; e++) {
                        var a;
                        let t = void 0 === i[e].material ? (void 0 === (a = this.cache).DefaultMaterial && (a.DefaultMaterial = new n.MeshStandardMaterial({
                            color: 16777215,
                            emissive: 0,
                            metalness: 1,
                            roughness: 1,
                            transparent: !1,
                            depthTest: !0,
                            side: n.FrontSide
                        })), a.DefaultMaterial) : this.getDependency("material", i[e].material);
                        o.push(t)
                    }
                    return o.push(t.loadGeometries(i)), Promise.all(o).then(function(r) {
                        let o = r.slice(0, r.length - 1),
                            a = r[r.length - 1],
                            l = [];
                        for (let r = 0, C = a.length; r < C; r++) {
                            let C;
                            let c = a[r],
                                u = i[r],
                                h = o[r];
                            if (u.mode === S.TRIANGLES || u.mode === S.TRIANGLE_STRIP || u.mode === S.TRIANGLE_FAN || void 0 === u.mode) !0 === (C = !0 === A.isSkinnedMesh ? new n.SkinnedMesh(c, h) : new n.Mesh(c, h)).isSkinnedMesh && C.normalizeSkinWeights(), u.mode === S.TRIANGLE_STRIP ? C.geometry = B(C.geometry, n.TriangleStripDrawMode) : u.mode === S.TRIANGLE_FAN && (C.geometry = B(C.geometry, n.TriangleFanDrawMode));
                            else if (u.mode === S.LINES) C = new n.LineSegments(c, h);
                            else if (u.mode === S.LINE_STRIP) C = new n.Line(c, h);
                            else if (u.mode === S.LINE_LOOP) C = new n.LineLoop(c, h);
                            else if (u.mode === S.POINTS) C = new n.Points(c, h);
                            else throw Error("THREE.GLTFLoader: Primitive mode unsupported: " + u.mode);
                            Object.keys(C.geometry.morphAttributes).length > 0 && function(e, t) {
                                if (e.updateMorphTargets(), void 0 !== t.weights)
                                    for (let r = 0, s = t.weights.length; r < s; r++) e.morphTargetInfluences[r] = t.weights[r];
                                if (t.extras && Array.isArray(t.extras.targetNames)) {
                                    let r = t.extras.targetNames;
                                    if (e.morphTargetInfluences.length === r.length) {
                                        e.morphTargetDictionary = {};
                                        for (let t = 0, s = r.length; t < s; t++) e.morphTargetDictionary[r[t]] = t
                                    } else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")
                                }
                            }(C, A), C.name = t.createUniqueName(A.name || "mesh_" + e), Z(C, A), u.extensions && j(s, C, u), t.assignFinalMaterial(C), l.push(C)
                        }
                        for (let r = 0, s = l.length; r < s; r++) t.associations.set(l[r], {
                            meshes: e,
                            primitives: r
                        });
                        if (1 === l.length) return A.extensions && j(s, l[0], A), l[0];
                        let C = new n.Group;
                        A.extensions && j(s, C, A), t.associations.set(C, {
                            meshes: e
                        });
                        for (let e = 0, t = l.length; e < t; e++) C.add(l[e]);
                        return C
                    })
                }
                loadCamera(e) {
                    let t;
                    let r = this.json.cameras[e],
                        s = r[r.type];
                    if (!s) {
                        console.warn("THREE.GLTFLoader: Missing camera parameters.");
                        return
                    }
                    return "perspective" === r.type ? t = new n.PerspectiveCamera(n.MathUtils.radToDeg(s.yfov), s.aspectRatio || 1, s.znear || 1, s.zfar || 2e6) : "orthographic" === r.type && (t = new n.OrthographicCamera(-s.xmag, s.xmag, s.ymag, -s.ymag, s.znear, s.zfar)), r.name && (t.name = this.createUniqueName(r.name)), Z(t, r), Promise.resolve(t)
                }
                loadSkin(e) {
                    let t = this.json.skins[e],
                        r = [];
                    for (let e = 0, s = t.joints.length; e < s; e++) r.push(this._loadNodeShallow(t.joints[e]));
                    return void 0 !== t.inverseBindMatrices ? r.push(this.getDependency("accessor", t.inverseBindMatrices)) : r.push(null), Promise.all(r).then(function(e) {
                        let r = e.pop(),
                            s = [],
                            A = [];
                        for (let i = 0, o = e.length; i < o; i++) {
                            let o = e[i];
                            if (o) {
                                s.push(o);
                                let e = new n.Matrix4;
                                null !== r && e.fromArray(r.array, 16 * i), A.push(e)
                            } else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[i])
                        }
                        return new n.Skeleton(s, A)
                    })
                }
                loadAnimation(e) {
                    let t = this.json,
                        r = t.animations[e],
                        s = r.name ? r.name : "animation_" + e,
                        A = [],
                        i = [],
                        o = [],
                        a = [],
                        B = [];
                    for (let e = 0, t = r.channels.length; e < t; e++) {
                        let t = r.channels[e],
                            s = r.samplers[t.sampler],
                            n = t.target,
                            l = n.node,
                            C = void 0 !== r.parameters ? r.parameters[s.input] : s.input,
                            c = void 0 !== r.parameters ? r.parameters[s.output] : s.output;
                        void 0 !== n.node && (A.push(this.getDependency("node", l)), i.push(this.getDependency("accessor", C)), o.push(this.getDependency("accessor", c)), a.push(s), B.push(n))
                    }
                    return Promise.all([Promise.all(A), Promise.all(i), Promise.all(o), Promise.all(a), Promise.all(B)]).then(function(e) {
                        let t = e[0],
                            r = e[1],
                            A = e[2],
                            i = e[3],
                            o = e[4],
                            a = [];
                        for (let e = 0, s = t.length; e < s; e++) {
                            let s;
                            let B = t[e],
                                l = r[e],
                                C = A[e],
                                c = i[e],
                                u = o[e];
                            if (void 0 === B) continue;
                            switch (B.updateMatrix(), X[u.path]) {
                                case X.weights:
                                    s = n.NumberKeyframeTrack;
                                    break;
                                case X.rotation:
                                    s = n.QuaternionKeyframeTrack;
                                    break;
                                case X.position:
                                case X.scale:
                                default:
                                    s = n.VectorKeyframeTrack
                            }
                            let h = B.name ? B.name : B.uuid,
                                d = void 0 !== c.interpolation ? k[c.interpolation] : n.InterpolateLinear,
                                F = [];
                            X[u.path] === X.weights ? B.traverse(function(e) {
                                e.morphTargetInfluences && F.push(e.name ? e.name : e.uuid)
                            }) : F.push(h);
                            let G = C.array;
                            if (C.normalized) {
                                let e = V(G.constructor),
                                    t = new Float32Array(G.length);
                                for (let r = 0, s = G.length; r < s; r++) t[r] = G[r] * e;
                                G = t
                            }
                            for (let e = 0, t = F.length; e < t; e++) {
                                let t = new s(F[e] + "." + X[u.path], l.array, G, d);
                                "CUBICSPLINE" === c.interpolation && (t.createInterpolant = function(e) {
                                    let t = this instanceof n.QuaternionKeyframeTrack ? P : x;
                                    return new t(this.times, this.values, this.getValueSize() / 3, e)
                                }, t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0), a.push(t)
                            }
                        }
                        return new n.AnimationClip(s, void 0, a)
                    })
                }
                createNodeMesh(e) {
                    let t = this.json,
                        r = this,
                        s = t.nodes[e];
                    return void 0 === s.mesh ? null : r.getDependency("mesh", s.mesh).then(function(e) {
                        let t = r._getNodeRef(r.meshCache, s.mesh, e);
                        return void 0 !== s.weights && t.traverse(function(e) {
                            if (e.isMesh)
                                for (let t = 0, r = s.weights.length; t < r; t++) e.morphTargetInfluences[t] = s.weights[t]
                        }), t
                    })
                }
                loadNode(e) {
                    let t = this.json,
                        r = t.nodes[e],
                        s = this._loadNodeShallow(e),
                        n = [],
                        A = r.children || [];
                    for (let e = 0, t = A.length; e < t; e++) n.push(this.getDependency("node", A[e]));
                    let i = void 0 === r.skin ? Promise.resolve(null) : this.getDependency("skin", r.skin);
                    return Promise.all([s, Promise.all(n), i]).then(function(e) {
                        let t = e[0],
                            r = e[1],
                            s = e[2];
                        null !== s && t.traverse(function(e) {
                            e.isSkinnedMesh && e.bind(s, q)
                        });
                        for (let e = 0, s = r.length; e < s; e++) t.add(r[e]);
                        return t
                    })
                }
                _loadNodeShallow(e) {
                    let t = this.json,
                        r = this.extensions,
                        s = this;
                    if (void 0 !== this.nodeCache[e]) return this.nodeCache[e];
                    let A = t.nodes[e],
                        i = A.name ? s.createUniqueName(A.name) : "",
                        o = [],
                        a = s._invokeOne(function(t) {
                            return t.createNodeMesh && t.createNodeMesh(e)
                        });
                    return a && o.push(a), void 0 !== A.camera && o.push(s.getDependency("camera", A.camera).then(function(e) {
                        return s._getNodeRef(s.cameraCache, A.camera, e)
                    })), s._invokeAll(function(t) {
                        return t.createNodeAttachment && t.createNodeAttachment(e)
                    }).forEach(function(e) {
                        o.push(e)
                    }), this.nodeCache[e] = Promise.all(o).then(function(t) {
                        let o;
                        if ((o = !0 === A.isBone ? new n.Bone : t.length > 1 ? new n.Group : 1 === t.length ? t[0] : new n.Object3D) !== t[0])
                            for (let e = 0, r = t.length; e < r; e++) o.add(t[e]);
                        if (A.name && (o.userData.name = A.name, o.name = i), Z(o, A), A.extensions && j(r, o, A), void 0 !== A.matrix) {
                            let e = new n.Matrix4;
                            e.fromArray(A.matrix), o.applyMatrix4(e)
                        } else void 0 !== A.translation && o.position.fromArray(A.translation), void 0 !== A.rotation && o.quaternion.fromArray(A.rotation), void 0 !== A.scale && o.scale.fromArray(A.scale);
                        return s.associations.has(o) || s.associations.set(o, {}), s.associations.get(o).nodes = e, o
                    }), this.nodeCache[e]
                }
                loadScene(e) {
                    let t = this.extensions,
                        r = this.json.scenes[e],
                        s = this,
                        A = new n.Group;
                    r.name && (A.name = s.createUniqueName(r.name)), Z(A, r), r.extensions && j(t, A, r);
                    let i = r.nodes || [],
                        o = [];
                    for (let e = 0, t = i.length; e < t; e++) o.push(s.getDependency("node", i[e]));
                    return Promise.all(o).then(function(e) {
                        for (let t = 0, r = e.length; t < r; t++) A.add(e[t]);
                        return s.associations = (e => {
                            let t = new Map;
                            for (let [e, r] of s.associations)(e instanceof n.Material || e instanceof n.Texture) && t.set(e, r);
                            return e.traverse(e => {
                                let r = s.associations.get(e);
                                null != r && t.set(e, r)
                            }), t
                        })(A), A
                    })
                }
            }

            function $(e, t, r) {
                let s = t.attributes,
                    A = [];
                for (let t in s) {
                    let n = _[t] || t.toLowerCase();
                    n in e.attributes || A.push(function(t, s) {
                        return r.getDependency("accessor", t).then(function(t) {
                            e.setAttribute(s, t)
                        })
                    }(s[t], n))
                }
                if (void 0 !== t.indices && !e.index) {
                    let s = r.getDependency("accessor", t.indices).then(function(t) {
                        e.setIndex(t)
                    });
                    A.push(s)
                }
                return Z(e, t), ! function(e, t, r) {
                    let s = t.attributes,
                        A = new n.Box3;
                    if (void 0 === s.POSITION) return; {
                        let e = r.json.accessors[s.POSITION],
                            t = e.min,
                            i = e.max;
                        if (void 0 !== t && void 0 !== i) {
                            if (A.set(new n.Vector3(t[0], t[1], t[2]), new n.Vector3(i[0], i[1], i[2])), e.normalized) {
                                let t = V(N[e.componentType]);
                                A.min.multiplyScalar(t), A.max.multiplyScalar(t)
                            }
                        } else {
                            console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
                            return
                        }
                    }
                    let i = t.targets;
                    if (void 0 !== i) {
                        let e = new n.Vector3,
                            t = new n.Vector3;
                        for (let s = 0, n = i.length; s < n; s++) {
                            let n = i[s];
                            if (void 0 !== n.POSITION) {
                                let s = r.json.accessors[n.POSITION],
                                    A = s.min,
                                    i = s.max;
                                if (void 0 !== A && void 0 !== i) {
                                    if (t.setX(Math.max(Math.abs(A[0]), Math.abs(i[0]))), t.setY(Math.max(Math.abs(A[1]), Math.abs(i[1]))), t.setZ(Math.max(Math.abs(A[2]), Math.abs(i[2]))), s.normalized) {
                                        let e = V(N[s.componentType]);
                                        t.multiplyScalar(e)
                                    }
                                    e.max(t)
                                } else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")
                            }
                        }
                        A.expandByVector(e)
                    }
                    e.boundingBox = A;
                    let o = new n.Sphere;
                    A.getCenter(o.center), o.radius = A.min.distanceTo(A.max) / 2, e.boundingSphere = o
                }(e, t, r), Promise.all(A).then(function() {
                    return void 0 !== t.targets ? function(e, t, r) {
                        let s = !1,
                            n = !1,
                            A = !1;
                        for (let e = 0, r = t.length; e < r; e++) {
                            let r = t[e];
                            if (void 0 !== r.POSITION && (s = !0), void 0 !== r.NORMAL && (n = !0), void 0 !== r.COLOR_0 && (A = !0), s && n && A) break
                        }
                        if (!s && !n && !A) return Promise.resolve(e);
                        let i = [],
                            o = [],
                            a = [];
                        for (let B = 0, l = t.length; B < l; B++) {
                            let l = t[B];
                            if (s) {
                                let t = void 0 !== l.POSITION ? r.getDependency("accessor", l.POSITION) : e.attributes.position;
                                i.push(t)
                            }
                            if (n) {
                                let t = void 0 !== l.NORMAL ? r.getDependency("accessor", l.NORMAL) : e.attributes.normal;
                                o.push(t)
                            }
                            if (A) {
                                let t = void 0 !== l.COLOR_0 ? r.getDependency("accessor", l.COLOR_0) : e.attributes.color;
                                a.push(t)
                            }
                        }
                        return Promise.all([Promise.all(i), Promise.all(o), Promise.all(a)]).then(function(t) {
                            let r = t[0],
                                i = t[1],
                                o = t[2];
                            return s && (e.morphAttributes.position = r), n && (e.morphAttributes.normal = i), A && (e.morphAttributes.color = o), e.morphTargetsRelative = !0, e
                        })
                    }(e, t.targets, r) : e
                })
            }
            var ee = r(4381);
            let et = null;

            function er(e, t, r) {
                return s => {
                    r && r(s), e && (et || (et = new i), et.setDecoderPath("string" == typeof e ? e : "https://www.gstatic.com/draco/versioned/decoders/1.5.5/"), s.setDRACOLoader(et)), t && s.setMeshoptDecoder("function" == typeof a ? a() : a)
                }
            }

            function es(e, t = !0, r = !0, s) {
                let n = (0, ee.D)(l, e, er(t, r, s));
                return n
            }
            es.preload = (e, t = !0, r = !0, s) => ee.D.preload(l, e, er(t, r, s)), es.clear = e => ee.D.clear(l, e)
        },
        5051: function(e, t, r) {
            r.d(t, {
                m: function() {
                    return o
                }
            });
            var s = r(688),
                n = r(4381),
                A = r(959);
            let i = e => e === Object(e) && !Array.isArray(e) && "function" != typeof e;

            function o(e, t) {
                let r = (0, n.z)(e => e.gl),
                    o = (0, n.D)(s.TextureLoader, i(e) ? Object.values(e) : e);
                if ((0, A.useLayoutEffect)(() => {
                        null == t || t(o)
                    }, [t]), (0, A.useEffect)(() => {
                        let e = Array.isArray(o) ? o : [o];
                        e.forEach(r.initTexture)
                    }, [r, o]), !i(e)) return o; {
                    let t = Object.keys(e),
                        r = {};
                    return t.forEach(e => Object.assign(r, {
                        [e]: o[t.indexOf(e)]
                    })), r
                }
            }
            o.preload = e => n.D.preload(s.TextureLoader, e), o.clear = e => n.D.clear(s.TextureLoader, e)
        },
        1664: function(e, t, r) {
            r.d(t, {
                MA: function() {
                    return i
                },
                Rq: function() {
                    return A
                }
            });
            let s = [];

            function n(e, t, r = !1, n = {}) {
                for (let e of s)
                    if (function(e, t, r = (e, t) => e === t) {
                            if (e === t) return !0;
                            if (!e || !t) return !1;
                            let s = e.length;
                            if (t.length !== s) return !1;
                            for (let n = 0; n < s; n++)
                                if (!r(e[n], t[n])) return !1;
                            return !0
                        }(t, e.keys, e.equal)) {
                        if (r) return;
                        if (Object.prototype.hasOwnProperty.call(e, "error")) throw e.error;
                        if (Object.prototype.hasOwnProperty.call(e, "response")) return n.lifespan && n.lifespan > 0 && (e.timeout && clearTimeout(e.timeout), e.timeout = setTimeout(e.remove, n.lifespan)), e.response;
                        if (!r) throw e.promise
                    }
                let A = {
                    keys: t,
                    equal: n.equal,
                    remove: () => {
                        let e = s.indexOf(A); - 1 !== e && s.splice(e, 1)
                    },
                    promise: e(...t).then(e => {
                        A.response = e, n.lifespan && n.lifespan > 0 && (A.timeout = setTimeout(A.remove, n.lifespan))
                    }).catch(e => A.error = e)
                };
                if (s.push(A), !r) throw A.promise
            }
            let A = (e, t, r) => n(e, t, !1, r),
                i = (e, t, r) => void n(e, t, !0, r)
        }
    }
]);