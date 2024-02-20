(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [441], {
        4705: function(e, t, a) {
            "use strict";
            a.d(t, {
                z: function() {
                    return h
                }
            });
            var i = a(1527),
                r = a(5924),
                n = a(8782),
                l = a(2044),
                c = a(959),
                o = a(4940),
                d = a.n(o);
            let m = "abcdefghijklmnopqrstuvwxyz0123456789&%$#@!";

            function h(e) {
                let {
                    children: t,
                    href: a,
                    className: o,
                    primary: h = !0,
                    ...u
                } = e, x = (0, c.useRef)(), p = (0, c.useRef)();
                return (0, i.jsxs)(n.r, {
                    href: a,
                    className: (0, r.Z)(d().button, h && d().primary, o),
                    ...u,
                    onMouseEnter: () => {
                        let e = x.current.textContent.split(""),
                            t = [...e];
                        l.ZP.to({
                            progress: 0
                        }, {
                            progress: 1,
                            duration: .5,
                            ease: "none",
                            onUpdate: function() {
                                let a = this.progress();
                                t.forEach((i, r) => {
                                    let n = Math.floor(Math.random() * m.length),
                                        l = m[n];
                                    t[r] = a >= 1 || ["[", "]", " "].includes(e[r]) ? e[r] : l
                                }), p.current.textContent = t.join("")
                            }
                        })
                    },
                    children: [h && (0, i.jsx)("span", {
                        className: d()["top-bottom"]
                    }), (0, i.jsxs)("span", {
                        className: d().content,
                        children: [(0, i.jsx)("span", {
                            className: d().model,
                            ref: x,
                            children: t
                        }), (0, i.jsx)("span", {
                            className: d().glitch,
                            ref: p,
                            children: t
                        })]
                    }), h && (0, i.jsx)("span", {
                        className: d()["bottom-top"]
                    })]
                })
            }
        },
        4969: function(e, t, a) {
            "use strict";
            a.d(t, {
                h: function() {
                    return S
                }
            });
            var i = a(1527),
                r = a(8166),
                n = a(654),
                l = a(5924),
                c = a(4705),
                o = a(8782),
                d = a(8824),
                m = a(6257),
                h = a(8067),
                u = a.n(h),
                x = a(959),
                p = a(6773),
                _ = a(2943),
                f = a.n(_);

            function g(e) {
                let {
                    data: t,
                    children: a
                } = e, [r, n] = (0, m.o)(e => {
                    let {
                        navIsOpened: t,
                        setNavIsOpened: a
                    } = e;
                    return [t, a]
                }, p.X);
                return (0, x.useEffect)(() => {
                    function e() {
                        n(!1)
                    }
                    return u().events.on("hashChangeStart", e), () => {
                        u().events.off("hashChangeStart", e)
                    }
                }, []), (0, i.jsxs)(d.Ei, {
                    className: (0, l.Z)(f().navigation, !r && f().closed),
                    children: [(0, i.jsx)("div", {
                        className: f().content,
                        children: a
                    }), (0, i.jsx)(c.z, {
                        href: t.cta[0].url,
                        className: (0, l.Z)(f().cta, "p-xs"),
                        children: t.cta[0].text
                    })]
                })
            }
            var j = a(2435),
                b = a(3100),
                v = a.n(b),
                w = a(3017),
                y = a.n(w);
            let N = v()(() => a.e(2796).then(a.bind(a, 2796)), {
                    loadableGenerated: {
                        webpack: () => [2796]
                    },
                    ssr: !1
                }),
                k = v()(() => a.e(8144).then(a.bind(a, 8144)), {
                    loadableGenerated: {
                        webpack: () => [8144]
                    },
                    ssr: !1
                }),
                Z = v()(() => a.e(9880).then(a.bind(a, 9880)), {
                    loadableGenerated: {
                        webpack: () => [9880]
                    },
                    ssr: !1
                }),
                E = v()(() => a.e(7258).then(a.bind(a, 7258)), {
                    loadableGenerated: {
                        webpack: () => [7258]
                    },
                    ssr: !1
                });

            function S(e) {
                let {
                    data: t
                } = e, [a, d] = (0, n.EL)(), h = (0, n.ac)("(min-width: 800px)"), [u, _] = (0, m.o)(e => {
                    let {
                        navIsOpened: t,
                        setNavIsOpened: a
                    } = e;
                    return [t, a]
                }, p.X);
                return (0, x.useEffect)(() => {
                    m.o.setState({
                        headerHeight: d.height
                    })
                }, [d]), (0, i.jsxs)("header", {
                    className: y().header,
                    ...(0, r.LF)(t),
                    ref: a,
                    children: [(0, i.jsxs)("div", {
                        className: (0, l.Z)("layout-grid", y().head),
                        children: [(0, i.jsx)(o.r, {
                            className: y().logo,
                            href: "/home",
                            children: (0, i.jsx)(N, {})
                        }), h ? (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(L, {
                                data: t,
                                className: "p-xs"
                            }), (0, i.jsx)(c.z, {
                                href: t.cta[0].url,
                                className: (0, l.Z)("p-xs", y().cta),
                                children: t.cta[0].text
                            })]
                        }) : (0, i.jsx)("button", {
                            className: y()["hamburger-button"],
                            onClick: () => {
                                _(!u)
                            },
                            children: u ? (0, i.jsx)(k, {
                                className: y().hamburger
                            }) : (0, i.jsx)(Z, {
                                className: y().hamburger
                            })
                        })]
                    }), (0, i.jsx)(g, {
                        data: t,
                        children: (0, i.jsx)(L, {
                            data: t,
                            className: "h4"
                        })
                    })]
                })
            }
            let L = e => {
                let {
                    data: t,
                    className: a = ""
                } = e, r = (0, m.o)(e => {
                    let {
                        loader: t
                    } = e;
                    return t
                }), n = (0, x.useRef)([]);
                return (0, j.lG)({
                    callback: e => {
                        if (n.current.forEach(t => {
                                var a;
                                let {
                                    element: i,
                                    id: r
                                } = t;
                                i && (i.classList.remove(y().active), r === (null === (a = e.find(e => {
                                    let {
                                        inView: t
                                    } = e;
                                    return t
                                })) || void 0 === a ? void 0 : a.id) && i.classList.add(y().active))
                            }), r) return null;
                        let t = e.find(e => {
                            let {
                                inView: t,
                                id: a
                            } = e;
                            return t && n.current.some(e => {
                                let {
                                    id: t
                                } = e;
                                return t === a
                            })
                        });
                        if (!t) return "" !== window.location.hash && history.pushState({
                            id: ""
                        }, "", "/"), null;
                        history.state.id !== t.id && history.pushState({
                            id: t.id
                        }, "", "/#".concat(t.id))
                    },
                    deps: [r]
                }), (0, i.jsx)("div", {
                    className: (0, l.Z)(a, y().links),
                    children: t.links.map((e, t) => {
                        let {
                            text: a,
                            url: r
                        } = e;
                        return (0, i.jsxs)(o.r, {
                            href: r,
                            className: y().link,
                            ref: e => n.current[t] = {
                                id: a,
                                element: e
                            },
                            children: [(0, i.jsx)("div", {
                                className: y().mark,
                                children: (0, i.jsx)(E, {})
                            }), a]
                        }, "header-link-".concat(t))
                    })
                })
            }
        },
        7078: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                __N_SSG: function() {
                    return sr
                },
                default: function() {
                    return sn
                }
            });
            var i, r, n, l, c, o, d, m, h, u = a(1527),
                x = a(654),
                p = a(8824),
                _ = a(6734),
                f = a(9176),
                g = a(2717),
                j = a(959),
                b = a(7709),
                v = a.n(b);

            function w(e) {
                let {
                    theatreKey: t = "mask"
                } = e, a = (0, j.useRef)(), i = (0, f.st)();
                return (0, g.w)(i, t, {
                    opacity: _.types.number(0, {
                        nudgeMultiplier: .01,
                        range: [0, 1]
                    }),
                    blur: _.types.number(200, {
                        nudgeMultiplier: .01
                    }),
                    x: _.types.number(.5, {
                        nudgeMultiplier: .01
                    }),
                    y: _.types.number(.5, {
                        nudgeMultiplier: .01
                    }),
                    width: _.types.number(1, {
                        nudgeMultiplier: .01
                    }),
                    height: _.types.number(1, {
                        nudgeMultiplier: .01
                    })
                }, e => {
                    let {
                        opacity: t,
                        blur: i,
                        x: r,
                        y: n,
                        width: l,
                        height: c
                    } = e;
                    a.current.style.setProperty("--opacity", t), a.current.style.setProperty("--blur", i), a.current.style.setProperty("--x", r), a.current.style.setProperty("--y", n), a.current.style.setProperty("--width", l), a.current.style.setProperty("--height", c)
                }), (0, u.jsx)("div", {
                    className: v().mask,
                    ref: a
                })
            }
            var y = a(8166),
                N = a(5924),
                k = a(2044),
                Z = a(2829),
                E = a(2242),
                S = a(3473),
                L = a.n(S);
            k.p8.registerPlugin(Z.SplitText);
            let T = (0, j.forwardRef)(function(e, t) {
                let {
                    children: a,
                    className: i,
                    type: r = "",
                    ...n
                } = e, l = (0, x.ac)("(min-width: 800px)"), c = (0, j.useRef)(), [o, d] = (0, j.useState)(), {
                    width: m,
                    height: h
                } = (0, E.i)();
                return (0, j.useEffect)(() => {
                    l && document.fonts.ready.then(() => {
                        let e = new Z.SplitText(c.current, {
                                type: r,
                                charsClass: "char",
                                wordsClass: "word",
                                linesClass: "line"
                            }),
                            t = [...e.lines].map(e => e.children.length),
                            a = 0;
                        return t = t.map(e => {
                            let t = a;
                            return [t, a += e]
                        }).map(t => {
                            let [a, i] = t;
                            return e.chars.slice(a, i)
                        }), e.chars.forEach((e, t) => {
                            e.dataset.char = e.textContent, e.style.setProperty("--char-index", t)
                        }), e.charsPerLine = t, d(e), () => {
                            e.revert()
                        }
                    }).catch(e => {})
                }, [r, m, h, l]), (0, j.useImperativeHandle)(t, () => o, [o]), (0, u.jsx)("span", {
                    className: (0, N.Z)(L().splitText, i),
                    ref: c,
                    ...n,
                    children: a
                })
            });
            var M = a(5871),
                z = a.n(M);
            let C = (0, j.forwardRef)(function(e, t) {
                let {
                    children: a,
                    ...i
                } = e, r = (0, x.ac)("(min-width: 800px)"), [n, l] = (0, j.useState)(), [c, o] = (0, j.useState)();
                (0, j.useImperativeHandle)(t, () => c, [c]);
                let d = "abcdefghijklmnopqrstuvwxyz0123456789&%$#@!";
                return (0, j.useEffect)(() => {
                    if (!n || !r) return;
                    let e = k.ZP.timeline({
                            paused: !0
                        }),
                        t = [];
                    return document.fonts.ready.then(() => {
                        n.charsPerLine.forEach((a, i) => {
                            let r = new Z.SplitText(a, {
                                type: "chars"
                            });
                            r.chars.forEach((t, a) => {
                                let r = t.parentNode;
                                r.dataset.beforeChar = t.textContent, t.style.setProperty("visibility", "hidden"), r.style.setProperty("visibility", "hidden"), e.from(t, {
                                    duration: .05,
                                    onUpdate: function() {
                                        let e = this.progress(),
                                            a = Math.floor(Math.random() * d.length),
                                            i = d[a];
                                        r.dataset.beforeChar = e >= 1 ? t.textContent : i, r.style.setProperty("visibility", e > 0 ? "visible" : "hidden")
                                    },
                                    ease: "none"
                                }, (2 * i + a) * .05)
                            }), t.push(r)
                        }), o(e)
                    }), () => {
                        t.length && (t.forEach(e => {
                            e.revert()
                        }), e.kill())
                    }
                }, [n, r]), (0, u.jsx)(T, {
                    type: "lines,chars",
                    ref: l,
                    className: z().glitchText,
                    ...i,
                    children: a
                })
            });
            var I = a(1284),
                F = a.n(I);
            let q = (0, j.forwardRef)(function(e, t) {
                let {
                    children: a
                } = e, i = (0, x.ac)("(min-width: 800px)"), [r, n] = (0, j.useState)(), [l, c] = (0, j.useState)();
                return (0, j.useImperativeHandle)(t, () => l, [l]), (0, j.useEffect)(() => {
                    if (!r || !i) return;
                    let e = k.ZP.from(r.lines, {
                        duration: 1,
                        y: "100%",
                        stagger: .1,
                        opacity: 0,
                        ease: "power4.out"
                    });
                    return e.pause(), c(e), () => {
                        e.kill()
                    }
                }, [r, i]), (0, u.jsx)(T, {
                    type: "lines",
                    ref: e => {
                        n(e)
                    },
                    className: F().text,
                    children: a
                })
            });
            var A = a(4705),
                P = a(6966),
                R = a(5863),
                G = a(2197);
            let K = {
                    Title: function(e, t) {
                        let {
                            title: a,
                            className: i
                        } = e;
                        return (0, u.jsx)("div", {
                            className: i,
                            dangerouslySetInnerHTML: {
                                __html: (0, y.Zm)(a)
                            }
                        }, "text-block-title-".concat(t))
                    },
                    Text: function(e, t) {
                        let {
                            className: a,
                            children: i,
                            richText: r,
                            text: n
                        } = e;
                        return (0, u.jsx)(G.q, {
                            children: (0, u.jsxs)("p", {
                                className: a,
                                children: [i, n && n, (0, u.jsx)("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: (0, y.Zm)(r).replaceAll("<p>", "").replaceAll("</p>", "")
                                    }
                                })]
                            })
                        }, "text-block-description-".concat(t))
                    },
                    Cta: function(e, t) {
                        let {
                            text: a,
                            url: i,
                            className: r
                        } = e;
                        return (0, u.jsx)(A.z, {
                            href: i,
                            className: r,
                            children: a
                        }, "text-block-cta-".concat(t))
                    }
                },
                H = e => {
                    let {
                        className: t,
                        children: a
                    } = e;
                    return (0, u.jsx)("div", {
                        className: t,
                        children: O(a).map((e, t) => {
                            for (let a in K)
                                if (e.type === K[a]) return K[a](e.props, t)
                        })
                    })
                };
            for (let e in K) H[e] = K[e];
            let O = e => Array.isArray(e) ? e : [e];
            var B = a(5481);
            let D = function() {
                let {
                    id: e = !1,
                    stagger: t = .2
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, [a, i] = (0, j.useState)(), r = (0, j.useRef)([]);
                return (0, j.useEffect)(() => {
                    if (0 === r.length) return;
                    let t = k.ZP.timeline({
                        paused: !0,
                        id: e || null
                    });
                    return i(t), () => {
                        t.kill()
                    }
                }, [e]), {
                    timeline: a,
                    addTimeline: function(e, i) {
                        r.current[i] = e, a.clear(), r.current.forEach((e, i) => {
                            a.add(e.play(), i * t)
                        })
                    }
                }
            };
            var U = a(6257),
                V = a(3100),
                W = a.n(V),
                Y = a(8301),
                X = a.n(Y);
            let J = W()(() => a.e(8144).then(a.bind(a, 8144)), {
                    loadableGenerated: {
                        webpack: () => [8144]
                    },
                    ssr: !1
                }),
                Q = W()(() => a.e(7258).then(a.bind(a, 7258)), {
                    loadableGenerated: {
                        webpack: () => [7258]
                    },
                    ssr: !1
                }),
                $ = e => {
                    let {
                        data: t,
                        current: a,
                        setter: i
                    } = e, r = (0, x.ac)("(min-width: 800px)"), [n, l] = (0, U.o)(e => {
                        let {
                            overlay: t,
                            setOverlay: a
                        } = e;
                        return [t, a]
                    }), {
                        timeline: c,
                        addTimeline: o
                    } = D({
                        stagger: 0
                    }), [d, m] = (0, j.useState)();
                    (0, j.useEffect)(() => {
                        if (!r) return;
                        let e = k.ZP.timeline({});
                        if (!n) return e.reverse(), e.pause(), () => {
                            e.kill()
                        };
                        let t = c.getById("item-".concat(a));
                        return e.to({
                            progress: 0
                        }, {
                            progress: 1,
                            duration: .5,
                            ease: "power4.out",
                            onUpdate: function() {
                                let e = this.progress();
                                t && t.progress(e)
                            }
                        }), m(e), () => {
                            e.kill()
                        }
                    }, [c, n, a, r]);
                    let h = (0, j.useCallback)(() => {
                            r && d.tweenTo(0, {
                                duration: .5
                            }), l(!1)
                        }, [d, r]),
                        p = (0, j.useCallback)(() => {
                            r && d.tweenTo(0, {
                                duration: .5
                            }), i(a + 1)
                        }, [a, d, r]);
                    return (0, u.jsx)("div", {
                        className: (0, N.Z)(X().overlay, n && X().appear),
                        children: t.map((e, i) => (0, j.createElement)(ee, { ...e,
                            current: a,
                            onNext: p,
                            onClose: h,
                            idx: i,
                            length: t.length,
                            visible: n,
                            key: "overview-".concat(i),
                            ref: e => {
                                e && o(e, i)
                            }
                        }))
                    })
                },
                ee = (0, j.forwardRef)(function(e, t) {
                    let {
                        medias: a,
                        overview: i,
                        codeSnippet: r,
                        current: n,
                        onClose: l,
                        onNext: c,
                        idx: o,
                        length: d,
                        visible: m
                    } = e, {
                        timeline: h,
                        addTimeline: x
                    } = D({
                        id: "item-".concat(o),
                        stagger: 0
                    });
                    return (0, j.useImperativeHandle)(t, () => h, [h]), (0, u.jsxs)("div", {
                        className: (0, N.Z)("layout-grid", X().item, n === o && X().show),
                        children: [(0, u.jsx)(R.z, {
                            id: "game-overlay-mask-1-".concat(o),
                            type: 5,
                            className: X()["big-media"],
                            animateIn: !0,
                            ref: e => {
                                e && x(e, 6 * o + 2)
                            },
                            children: (0, u.jsx)(P.E, {
                                src: a[0].filename,
                                alt: a[0].alt,
                                fill: !0,
                                sizes: "(max-width:800px) 18vw, 21vw"
                            })
                        }), (0, u.jsx)("div", {
                            className: X().body,
                            children: (0, u.jsx)(et, {
                                ref: e => {
                                    e && x(e, 6 * o)
                                },
                                children: (0, u.jsxs)(H, {
                                    children: [(0, u.jsx)(H.Text, {
                                        className: (0, N.Z)("p-xs vh", X().eyebrow),
                                        text: i[0].eyebrow,
                                        children: (0, u.jsx)(Q, {})
                                    }), (0, u.jsx)(H.Title, {
                                        className: (0, N.Z)("h2 vh", X().title),
                                        ...i[0]
                                    }), (0, u.jsx)(H.Text, {
                                        className: (0, N.Z)("p", X().text),
                                        richText: i[0].richText
                                    }), (0, u.jsx)(H.Cta, {
                                        className: (0, N.Z)("p-xs", X().cta),
                                        ...i[0].cta[0]
                                    })]
                                })
                            })
                        }), (0, u.jsx)(R.z, {
                            id: "game-overlay-mask-2-".concat(o),
                            type: 2,
                            className: X()["small-media"],
                            animateIn: !0,
                            ref: e => {
                                e && x(e, 6 * o + 3)
                            },
                            children: (0, u.jsx)(P.E, {
                                src: a[1].filename,
                                alt: a[1].alt,
                                fill: !0,
                                sizes: "(max-width:800px) 18vw, 9vw"
                            })
                        }), (0, u.jsxs)("button", {
                            className: X().close,
                            onClick: l,
                            children: [(0, u.jsx)("span", {
                                className: "p-xs vh",
                                children: "close"
                            }), (0, u.jsx)(J, {})]
                        }), (0, u.jsx)(et, {
                            className: (0, N.Z)(X().snippet, "p-xs vh"),
                            ref: e => {
                                e && x(e, 6 * o + 4)
                            },
                            children: (0, u.jsx)(B.O, {
                                duration: 20,
                                visible: m,
                                children: (0, u.jsx)("p", {
                                    hidden: !0,
                                    className: X().content,
                                    children: r
                                })
                            })
                        }), (0, u.jsx)(et, {
                            ref: e => {
                                e && x(e, 6 * o + 5)
                            },
                            className: (0, N.Z)(X().next, n + 1 <= d - 1 && X().show),
                            children: (0, u.jsx)(A.z, {
                                primary: !1,
                                onClick: c,
                                className: "p-xs vh",
                                children: (0, u.jsx)("p", {
                                    children: "[VIEW NEXT GAME]"
                                })
                            })
                        }), (0, u.jsx)(R.z, {
                            id: "game-overlay-mask-3-".concat(o),
                            type: 3,
                            className: X()["medium-media"],
                            animateIn: !0,
                            ref: e => {
                                e && x(e, 6 * o + 1)
                            },
                            children: (0, u.jsx)(P.E, {
                                src: a[2].filename,
                                alt: a[2].alt,
                                fill: !0,
                                sizes: "(max-width:800px) 30vw, 9vw"
                            })
                        })]
                    })
                }),
                et = (0, j.forwardRef)(function(e, t) {
                    let {
                        children: a,
                        className: i
                    } = e, r = (0, x.ac)("(min-width: 800px)"), [n, l] = (0, j.useState)(), [c, o] = (0, j.useState)(0);
                    return (0, j.useImperativeHandle)(t, () => c, [c]), (0, j.useEffect)(() => {
                        if (!r) return;
                        let e = k.ZP.timeline({
                            paused: !0
                        });
                        return e.from(n, {
                            duration: 2,
                            opacity: 0,
                            ease: "power4.out"
                        }), e.pause(), o(e), () => {
                            e.kill()
                        }
                    }, [r, n]), (0, u.jsx)("div", {
                        className: i,
                        ref: e => l(e),
                        children: a
                    })
                });

            function es(e) {
                let t = (0, x.ac)("(max-width: 800px)"),
                    a = (0, j.useRef)(),
                    i = (0, f.st)(),
                    r = (0, j.useCallback)(() => {
                        if (!a.current) return;
                        let {
                            opacity: e,
                            x: i,
                            y: r,
                            scale: l
                        } = n();
                        t ? a.current.removeAttribute("style") : k.ZP.set(a.current, {
                            autoAlpha: e,
                            x: i,
                            y: r,
                            scale: l
                        })
                    }, [t]),
                    [n] = (0, g.w)(i, e, {
                        opacity: _.types.number(1, {
                            range: [0, 1],
                            nudgeMultiplier: .01
                        }),
                        x: _.types.number(0, {
                            nudgeMultiplier: .01
                        }),
                        y: _.types.number(0, {
                            nudgeMultiplier: .01
                        }),
                        scale: _.types.number(1, {
                            nudgeMultiplier: .01
                        })
                    }, r, [r]);
                return function(e) {
                    a.current = e, r()
                }
            }
            var ea = a(1662);
            let ei = e => {
                    let {
                        sheetId: t,
                        topOffset: a = 0,
                        bottomOffset: i = 0
                    } = e, {
                        height: r,
                        width: n
                    } = (0, E.i)(), [l, c] = (0, x.EL)({
                        lazy: !0
                    }), o = (0, f.Mi)(t), [d, m] = (0, j.useState)(0);
                    (0, j.useEffect)(() => {
                        if (o) {
                            let e = (0, _.onChange)(o.sequence.pointer.length, e => {
                                m(e)
                            });
                            return () => e
                        }
                    }, [o]);
                    let [h] = function(e, t) {
                        let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                            i = (0, j.useRef)(0),
                            r = (0, j.useCallback)(e => {
                                e !== i.current && (null == t || t(e, i.current), i.current = e)
                            }, [...a]);
                        return (0, j.useEffect)(() => {
                            null == t || t(i.current, i.current)
                        }, [...a]), [r, () => i.current]
                    }(0, e => {
                        o && (o.sequence.position = e * d)
                    }, [d, o]);
                    return (0, p.LZ)(e => {
                        let {
                            scroll: t
                        } = e, n = c(), l = n.top + a * r, o = n.top + n.height - r + i * r, d = (0, ea.KK)(l, o, t, 0, 1);
                        h(d = (0, ea.uZ)(0, d, 1))
                    }, [n, r, h]), {
                        setSheetRectRef: l,
                        getPositionFromProgress: e => {
                            let t = c(),
                                n = t.top + a * r,
                                l = t.top + t.height - r + i * r;
                            return (0, ea.KK)(0, 1, e, n, l)
                        }
                    }
                },
                er = (0, j.createContext)({});

            function en(e) {
                let {
                    children: t,
                    ...a
                } = e, {
                    setSheetRectRef: i,
                    getPositionFromProgress: r
                } = ei(a);
                return (0, u.jsx)(er.Provider, {
                    value: {
                        getPositionFromProgress: r
                    },
                    children: t(i)
                })
            }
            let el = function() {
                    let {
                        id: e,
                        top: t = 0,
                        height: a = "100px",
                        shadow: i = !0,
                        callback: r = () => {}
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = (0, x.ac)("(min-width: 800px)"), {
                        height: l
                    } = (0, E.i)(), c = (0, j.useRef)();
                    (0, j.useEffect)(() => {
                        let l = document.getElementById(e);
                        if (l || !n) return;
                        let o = document.getElementById("fixed-section");
                        c.current = document.createElement("div"), c.current.id = e, o.appendChild(c.current), c.current.style.cssText = "position: absolute; top: ".concat(t, "vh; left: 0; width: 100px; height: ").concat(a, ";  background-color: ").concat(ec[Math.ceil(9 * Math.random())], ";"), c.current.style.opacity = i ? 0 : .8, r({
                            ref: c
                        })
                    }, [e, t, i, n, l])
                },
                ec = ["red", "green", "blue", "yellow", "orange", "purple", "pink", "white", "black", "grey"];
            var eo = a(2435),
                ed = a(6042),
                em = a(8063),
                eh = a(6101),
                eu = a.n(eh);
            let ex = W()(() => a.e(9113).then(a.bind(a, 9113)), {
                    loadableGenerated: {
                        webpack: () => [9113]
                    },
                    ssr: !1
                }),
                ep = W()(() => a.e(7258).then(a.bind(a, 7258)), {
                    loadableGenerated: {
                        webpack: () => [7258]
                    },
                    ssr: !1
                }),
                e_ = W()(() => a.e(4583).then(a.bind(a, 4583)), {
                    loadableGenerated: {
                        webpack: () => [4583]
                    },
                    ssr: !1
                }),
                ef = new ed.Z;

            function eg(e) {
                let {
                    hero: t
                } = e, a = (0, x.ac)("(min-width: 800px)"), [i, r] = (0, j.useState)(), n = (0, f.st)(), l = (0, j.useRef)(), [c] = (0, g.w)(n, "ui / mission / title / animation", {
                    progress: _.types.number(0, {
                        range: [0, 1],
                        nudgeMultiplier: .01
                    })
                }, e => {
                    let {
                        progress: t
                    } = e;
                    null == i || i.progress(t), 0 === t && a ? l.current.style.setProperty("display", "none") : l.current.style.removeProperty("display")
                }, [i, a]);
                (0, j.useEffect)(() => {
                    let {
                        progress: e
                    } = c();
                    null == i || i.progress(e)
                }, [i]);
                let o = es("ui / mission / title"),
                    d = (0, y.Zm)(t.title).replaceAll("<p>", "").replaceAll("</p>", "<br>");
                return (0, u.jsxs)("section", {
                    className: (0, N.Z)(eu()["title-section"], "layout-block-inner scroll-top"),
                    ref: e => {
                        l.current = e, o(e)
                    },
                    ...(0, y.LF)(t),
                    children: [(0, u.jsx)("h2", {
                        className: (0, N.Z)("h1", eu().title),
                        children: (0, u.jsx)(C, {
                            ref: e => {
                                r(e)
                            },
                            dangerouslySetInnerHTML: {
                                __html: d
                            }
                        })
                    }), (0, u.jsxs)("div", {
                        className: (0, N.Z)(eu()["bg-mobile"], "hide-on-desktop"),
                        children: [(0, u.jsx)("div", {
                            className: eu().runes,
                            children: (0, u.jsx)(P.E, {
                                src: "/images/world-engine.png",
                                fill: !0,
                                alt: "",
                                sizes: "(max-width:800px) 177vw, 0vw"
                            })
                        }), (0, u.jsx)("div", {
                            className: eu().engine,
                            children: (0, u.jsx)(e_, {})
                        })]
                    }), (0, u.jsx)("div", {
                        className: (0, N.Z)(eu()["top-mask"], "hide-on-desktop mobile-mask")
                    }), (0, u.jsx)("div", {
                        className: (0, N.Z)(eu()["bottom-mask"], "hide-on-desktop mobile-mask")
                    })]
                })
            }
            let ej = (0, em.Ue)(() => ({
                    spySections: 0
                })),
                eb = e => {
                    let {
                        callback: t = () => {}
                    } = e;
                    (0, j.useEffect)(() => {
                        let e = ej.subscribe(e => {
                            let {
                                spySections: a
                            } = e;
                            t(a)
                        });
                        return () => e
                    }, [t])
                };

            function ev(e) {
                let {
                    slides: t
                } = e, a = (0, j.useRef)([]), i = (0, f.st)();
                (0, g.w)(i, "ui / mission / slides", {
                    technology: _.types.number(0, {
                        range: [0, 40],
                        nudgeMultiplier: .01
                    }),
                    benefits: _.types.number(0, {
                        range: [0, 40],
                        nudgeMultiplier: .01
                    }),
                    games: _.types.number(0, {
                        range: [0, 40],
                        nudgeMultiplier: .01
                    })
                }, e => {
                    let {
                        technology: t,
                        benefits: i,
                        games: r
                    } = e;
                    a.current = [t, i, r]
                });
                let r = (0, p.LZ)(),
                    n = es("ui / mission / progress"),
                    [l, c] = (0, j.useState)(0);
                (0, j.useEffect)(() => {
                    if (i) {
                        let e = (0, _.onChange)(i.sequence.pointer.length, e => {
                            c(e)
                        });
                        return () => e()
                    }
                }, [i]);
                let {
                    getPositionFromProgress: o
                } = (0, j.useContext)(er), d = (0, j.useCallback)(e => {
                    let t = e / l,
                        a = o(t);
                    r && r.scrollTo(a)
                }, [r, l]), m = (0, j.useRef)([]);
                return eb({
                    callback: e => {
                        m.current.forEach((t, a) => {
                            t && (t.classList.remove(eu().current), a === e && t.classList.add(eu().current))
                        })
                    }
                }), (0, u.jsxs)("div", {
                    className: (0, N.Z)(eu().slidesProgress, "layout-block"),
                    ref: n,
                    children: [(0, u.jsx)("div", {
                        className: eu().steps,
                        children: ["technology", "benefits", "games"].map((e, i) => (0, u.jsxs)("button", {
                            className: (0, N.Z)(eu().step),
                            onClick: () => {
                                d(a.current[i])
                            },
                            ref: e => {
                                m.current[i] = e
                            },
                            children: [(0, u.jsx)("span", {
                                className: (0, N.Z)(eu().title, "p-xs uppercase"),
                                children: t[e][0].subNavTitle
                            }), (0, u.jsx)("div", {
                                className: eu().dot
                            })]
                        }, i))
                    }), Array(21).fill(0).map((e, t) => (0, u.jsx)("div", {
                        className: eu().line
                    }, t))]
                })
            }

            function ew(e) {
                let {
                    data: t
                } = e, a = es("ui / mission / technology"), {
                    timeline: i,
                    addTimeline: r
                } = D(), n = (0, f.st)(), l = (0, x.ac)("(min-width: 800px)"), c = (0, j.useRef)();
                return (0, g.w)(n, "ui / mission / technology / animation", {
                    progress: _.types.number(0, {
                        range: [0, 1],
                        nudgeMultiplier: .01
                    })
                }, e => {
                    let {
                        progress: t
                    } = e;
                    null == i || i.progress(t), t > 0 && t < 1 && ej.setState({
                        spySections: 0
                    }), 0 === t && l ? c.current.style.setProperty("display", "none") : c.current.style.removeProperty("display")
                }, [i, l]), (0, u.jsxs)("section", {
                    id: "technology",
                    className: (0, N.Z)(eu().slide, eu().technology, "layout-block"),
                    ref: e => {
                        c.current = e, a(e)
                    },
                    ...(0, y.LF)(t),
                    children: [(0, u.jsxs)("div", {
                        className: (0, N.Z)("hide-on-desktop", eu().label),
                        children: [(0, u.jsx)("div", {
                            className: eu().mark,
                            children: (0, u.jsx)(ep, {})
                        }), (0, u.jsx)("p", {
                            className: "p-xs gold",
                            children: t.subNavTitle
                        })]
                    }), (0, u.jsxs)("div", {
                        className: eu().title,
                        children: [(0, u.jsx)("h3", {
                            className: (0, N.Z)(eu().heading, "h2", !0 === l && "vh"),
                            children: (0, u.jsx)(q, {
                                ref: e => {
                                    e && r(e, 0)
                                },
                                children: t.title
                            })
                        }), t.cta[0] && l && (0, u.jsx)(q, {
                            ref: e => {
                                e && r(e, 1)
                            },
                            children: (0, u.jsx)(A.z, {
                                href: t.cta[0].url,
                                className: (0, N.Z)(eu().cta, "p-xs"),
                                children: t.cta[0].text
                            })
                        })]
                    }), (0, u.jsxs)("ul", {
                        className: (0, N.Z)("layout-grid", eu().list),
                        children: [(0, u.jsx)("li", {
                            className: (0, N.Z)("hide-on-desktop", eu().rune),
                            children: (0, u.jsx)(P.E, {
                                alt: t.mobileRune.alt,
                                src: t.mobileRune.filename,
                                fill: !0,
                                sizes: "(max-width:800px) 8.5vw, 0vw"
                            })
                        }), t.titleAndText.map((e, t) => {
                            let {
                                text: a,
                                title: i
                            } = e;
                            return (0, u.jsxs)("li", {
                                className: eu().item,
                                children: [(0, u.jsx)("h4", {
                                    className: (0, N.Z)("h4", eu().title),
                                    children: (0, u.jsx)(q, {
                                        ref: e => {
                                            e && r(e, (t + 1) * 2)
                                        },
                                        children: i
                                    })
                                }), (0, u.jsx)("p", {
                                    className: "p-s",
                                    children: (0, u.jsx)(q, {
                                        ref: e => {
                                            e && r(e, (t + 1) * 2 + 1)
                                        },
                                        children: a
                                    })
                                })]
                            }, "benefits-".concat(t))
                        }), t.cta[0] && (0, u.jsx)(A.z, {
                            href: t.cta[0].url,
                            className: (0, N.Z)(eu().cta, "p-xs", "hide-on-desktop"),
                            children: t.cta[0].text
                        })]
                    })]
                })
            }

            function ey(e) {
                let {
                    data: t
                } = e, a = es("ui / mission / benefits"), {
                    timeline: i,
                    addTimeline: r
                } = D(), n = (0, f.st)(), l = (0, x.ac)("(min-width: 800px)"), c = (0, j.useRef)();
                return (0, g.w)(n, "ui / mission / benefits / animation", {
                    progress: _.types.number(0, {
                        range: [0, 1],
                        nudgeMultiplier: .01
                    })
                }, e => {
                    let {
                        progress: t
                    } = e;
                    null == i || i.progress(t), t > 0 && t < 1 && ej.setState({
                        spySections: 1
                    }), 0 === t && l ? c.current.style.setProperty("display", "none") : c.current.style.removeProperty("display")
                }, [i, l]), (0, u.jsxs)("section", {
                    id: "benefits",
                    className: (0, N.Z)(eu().slide, eu().benefits, "layout-block"),
                    ref: e => {
                        c.current = e, a(e)
                    },
                    ...(0, y.LF)(t),
                    children: [(0, u.jsxs)("div", {
                        className: (0, N.Z)("hide-on-desktop", eu().label),
                        children: [(0, u.jsx)("div", {
                            className: eu().mark,
                            children: (0, u.jsx)(ep, {})
                        }), (0, u.jsx)("p", {
                            className: "p-xs gold",
                            children: t.subNavTitle
                        })]
                    }), (0, u.jsxs)("div", {
                        className: eu().title,
                        children: [(0, u.jsx)("h3", {
                            className: (0, N.Z)(eu().heading, "h2", !0 === l && "vh"),
                            children: (0, u.jsx)(q, {
                                ref: e => {
                                    e && r(e, 0)
                                },
                                children: t.title
                            })
                        }), t.cta[0] && l && (0, u.jsx)(q, {
                            ref: e => {
                                e && r(e, 1)
                            },
                            children: (0, u.jsx)(A.z, {
                                href: t.cta[0].url,
                                className: (0, N.Z)(eu().cta, "p-xs"),
                                children: t.cta[0].text
                            })
                        })]
                    }), (0, u.jsxs)("ul", {
                        className: (0, N.Z)("layout-grid", eu().list),
                        children: [(0, u.jsx)("li", {
                            className: (0, N.Z)("hide-on-desktop", eu().rune),
                            children: (0, u.jsx)(P.E, {
                                alt: t.mobileRune.alt,
                                src: t.mobileRune.filename,
                                fill: !0,
                                sizes: "(max-width:800px) 8.5, 0vw"
                            })
                        }), t.titleAndText.map((e, t) => {
                            let {
                                text: a,
                                title: i
                            } = e;
                            return (0, u.jsxs)("li", {
                                className: eu().item,
                                children: [(0, u.jsx)("h4", {
                                    className: (0, N.Z)("h4", eu().title),
                                    children: (0, u.jsx)(q, {
                                        ref: e => {
                                            e && r(e, (t + 1) * 2)
                                        },
                                        children: i
                                    })
                                }), (0, u.jsx)("p", {
                                    className: "p-s",
                                    children: (0, u.jsx)(q, {
                                        ref: e => {
                                            e && r(e, (t + 1) * 2 + 1)
                                        },
                                        children: a
                                    })
                                })]
                            }, "benefits-".concat(t))
                        }), t.cta[0] && (0, u.jsx)(A.z, {
                            href: t.cta[0].url,
                            className: (0, N.Z)(eu().cta, "p-xs hide-on-desktop"),
                            children: t.cta[0].text
                        })]
                    })]
                })
            }

            function eN(e) {
                let {
                    data: t
                } = e, a = es("ui / mission / games"), {
                    timeline: i,
                    addTimeline: r
                } = D(), n = (0, f.st)(), l = (0, x.ac)("(min-width: 800px)"), [c, o] = (0, j.useState)(0), d = (0, U.o)(e => {
                    let {
                        setOverlay: t
                    } = e;
                    return t
                }), m = (0, j.useRef)(), h = (0, j.useRef)(), [p, b] = (0, j.useState)(0), [v, w] = (0, j.useState)(!1), [Z, E] = (0, j.useState)([]), [S, L] = (0, j.useState)([]), [T, M] = (0, j.useState)(), [z, C] = (0, j.useState)();
                (0, j.useEffect)(() => {
                    if (l) {
                        L([0, 1, 2]);
                        return
                    }
                    L(t.gameEntries.map((e, t) => t))
                }, [l]), (0, j.useEffect)(() => {
                    !(Z.length > 0) && l && t.gameEntries.forEach((e, t) => {
                        let a = k.ZP.timeline({
                            paused: !0
                        });
                        return a.addLabel(t), Z.push(a), E(Z), () => {
                            a.kill()
                        }
                    })
                }, [t, l]);
                let I = (e, t) => t <= e && e <= t + 2,
                    F = (0, j.useCallback)((e, t) => {
                        l && Z[t].add(e.play(), .05 * t)
                    }, [l]),
                    G = (0, j.useCallback)((e, t) => {
                        null == T || T.kill(), null == z || z.kill(), b(e + t);
                        let a = [];
                        Z.forEach((i, r) => {
                            I(r, e + t) && a.push(r)
                        }), S.forEach((e, t) => {
                            if (!a.includes(e)) {
                                let t = k.ZP.to(Z[e], {
                                    progress: 0,
                                    duration: .35,
                                    startAt: {
                                        progress: 1,
                                        opacity: 0
                                    },
                                    ease: "none"
                                });
                                C(t)
                            }
                            if (!S.includes(a[t])) {
                                let e = k.ZP.to(Z[a[t]], {
                                    progress: 1,
                                    duration: 1.75,
                                    startAt: {
                                        progress: 0,
                                        opacity: 0
                                    },
                                    ease: "none"
                                });
                                M(e)
                            }
                        }), L(a)
                    }, [Z, S]);
                return (0, g.w)(n, "ui / mission / game / animation", {
                    progress: _.types.number(0, {
                        range: [0, 1],
                        nudgeMultiplier: .01
                    })
                }, e => {
                    let {
                        progress: t
                    } = e;
                    t > 0 && t < 1 && ej.setState({
                        spySections: 2
                    }), 0 === t && l ? m.current.style.setProperty("display", "none") : m.current.style.removeProperty("display"), null == i || i.progress(t), S.forEach(e => {
                        var a, i;
                        null === (a = Z[e]) || void 0 === a || a.pause(), null === (i = Z[e]) || void 0 === i || i.progress(t)
                    }), t !== h.current && (null == T || T.progress(1), null == T || T.kill(), null == z || z.progress(1), null == z || z.kill()), t < .75 && v && w(!1), t > .75 && !v && w(!0), h.current = t
                }, [i, Z, S, T, z, l]), (0, u.jsxs)(u.Fragment, {
                    children: [(0, u.jsx)("section", {
                        id: "games",
                        className: (0, N.Z)(eu().slide, eu().games, "layout-grid", 2 === ej.getState().spySections && eu().active),
                        ref: e => {
                            m.current = e, a(e)
                        },
                        ...(0, y.LF)(t),
                        children: (0, u.jsxs)(u.Fragment, {
                            children: [(0, u.jsxs)("div", {
                                className: (0, N.Z)("hide-on-desktop", eu().label),
                                children: [(0, u.jsx)("div", {
                                    className: eu().mark,
                                    children: (0, u.jsx)(ep, {})
                                }), (0, u.jsx)("p", {
                                    className: "p-xs gold",
                                    children: t.subNavTitle
                                })]
                            }), (0, u.jsx)("h3", {
                                className: (0, N.Z)(eu().title, "h2", !0 === l && "vh"),
                                children: (0, u.jsx)(q, {
                                    ref: e => {
                                        e && r(e, 0)
                                    },
                                    children: t.title
                                })
                            }), (0, u.jsxs)("div", {
                                className: (0, N.Z)(eu()["slide-ui"], t.gameEntries.length > 3 && eu().show, v && eu().appear),
                                children: [(0, u.jsx)("button", {
                                    className: (0, N.Z)(eu().previous, (0 === p || !v) && eu().disable),
                                    onClick: () => {
                                        G(p, -1)
                                    },
                                    children: (0, u.jsx)(ex, {})
                                }), (0, u.jsx)("span", {
                                    className: (0, N.Z)("p-xs", eu().indicator),
                                    children: "0".concat(p + 3, "/0").concat(t.gameEntries.length)
                                }), (0, u.jsx)("button", {
                                    className: (0, N.Z)(eu().next, (p === t.gameEntries.length - 3 || !v) && eu().disable),
                                    onClick: () => {
                                        G(p, 1)
                                    },
                                    children: (0, u.jsx)(ex, {})
                                })]
                            }), t.gameEntries.map((e, t) => {
                                let {
                                    media: a,
                                    title: i,
                                    body: r,
                                    ctaText: n
                                } = e;
                                return (0, u.jsxs)("div", {
                                    className: (0, N.Z)(eu().entry, S.includes(t) && eu().active),
                                    children: [(0, u.jsx)("div", {
                                        className: eu().media,
                                        children: (0, u.jsx)(R.z, {
                                            id: "game-mask-".concat(t),
                                            animateIn: !0,
                                            maskOptions: {
                                                startAt: 0,
                                                duration: .5
                                            },
                                            type: l ? 2 : 4,
                                            ref: e => {
                                                e && F(e, t)
                                            },
                                            children: (0, u.jsx)(P.E, {
                                                src: a.filename,
                                                fill: !0,
                                                alt: a.alt,
                                                sizes: "(max-width:800px) 83vw, 9vw"
                                            })
                                        })
                                    }), (0, u.jsxs)("div", {
                                        className: eu().details,
                                        children: [(0, u.jsx)("h4", {
                                            className: "h4",
                                            children: (0, u.jsx)(q, {
                                                ref: e => {
                                                    e && F(e, t)
                                                },
                                                children: i
                                            })
                                        }), (0, u.jsx)("p", {
                                            className: (0, N.Z)("p-s", eu().body),
                                            children: (0, u.jsx)(q, {
                                                ref: e => {
                                                    e && F(e, t)
                                                },
                                                children: r
                                            })
                                        }), (0, u.jsx)(q, {
                                            ref: e => {
                                                e && F(e, t)
                                            },
                                            children: (0, u.jsx)(A.z, {
                                                primary: !1,
                                                className: (0, N.Z)(eu().cta, "p-xs"),
                                                onClick: () => {
                                                    d(!0), o(t)
                                                },
                                                children: n
                                            })
                                        })]
                                    })]
                                }, "game-entry-".concat(t))
                            })]
                        })
                    }), (0, u.jsx)(ef.In, {
                        children: (0, u.jsx)($, {
                            data: t.gameEntries.map(e => {
                                let {
                                    overview: t
                                } = e;
                                return t[0]
                            }),
                            current: c,
                            setter: o
                        })
                    })]
                })
            }

            function ek(e) {
                let {
                    slides: t
                } = e;
                return (0, u.jsxs)(u.Fragment, {
                    children: [(0, u.jsx)(ew, {
                        data: t.technology[0]
                    }), (0, u.jsx)(ey, {
                        data: t.benefits[0]
                    }), (0, u.jsx)(eN, {
                        data: t.games[0]
                    }), (0, u.jsx)(ev, {
                        slides: t
                    })]
                })
            }
            let eZ = "mission";

            function eE(e) {
                let {
                    mission: t
                } = e, a = (0, x.ac)("(max-width: 800px)"), i = (0, j.useRef)(null), {
                    setRef: r
                } = (0, eo.oc)({
                    id: eZ
                });
                return el({
                    id: eZ,
                    top: 420,
                    height: "1870vh",
                    callback: e => {
                        let {
                            ref: t
                        } = e;
                        r(t.current)
                    }
                }), (0, j.useEffect)(() => {
                    a && r(i.current)
                }, [a]), (0, u.jsxs)("div", {
                    id: a ? "mission" : null,
                    className: "scroll-top",
                    ref: i,
                    children: [(0, u.jsx)(eg, {
                        hero: t.hero[0]
                    }), (0, u.jsx)(ek, {
                        slides: t
                    })]
                })
            }
            var eS = a(7794),
                eL = a(3903),
                eT = a.n(eL);

            function eM() {
                return (eM = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i])
                    }
                    return e
                }).apply(this, arguments)
            }
            var ez = (0, j.forwardRef)(function(e, t) {
                    return j.createElement("svg", eM({
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 604 310",
                        ref: t
                    }, e), i || (i = j.createElement("g", {
                        stroke: "#F5D64E",
                        filter: "url(#hero_svg__a)"
                    }, j.createElement("path", {
                        strokeMiterlimit: 10,
                        d: "M17 222.6 222.6 17h77.7v77.7l-199 199m486.1-70.9L381.6 17H304v77.7l198.8 198.8"
                    }), j.createElement("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "m302.3 106.3-27.5 27.5 27.5 27.5 27.6-27.5-27.6-27.5Zm0 76.3L274.8 210l27.5 27.5 27.5-27.5-27.5-27.5Z"
                    }), j.createElement("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M302.3 237.6 330 210v-76.3m-27.7 103.9L274.8 210v-76.3m27.5-27.4v55m0 21.3v55"
                    }), j.createElement("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "m313.2 171.7 27.3-27.3L368 172l-27.5 27.5-27.3-27.3m54.8-.2h-55m-21.4 0H237m103.6-27.5h-76.2m76.2 54.9h-76.2m10.4-25a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm-38.1 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
                    }), j.createElement("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M329.8 174.4a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm38.2 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM302.3 202a2.5 2.5 0 1 0 0-5.1 2.5 2.5 0 0 0 0 5Zm0 38a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm0-93a2.5 2.5 0 1 0 0-5.1 2.5 2.5 0 0 0 0 5Zm0-38.2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM291.7 172l-27.5-27.6-27.5 27.5 27.5 27.5 27.5-27.5Z"
                    }), j.createElement("path", {
                        strokeMiterlimit: 10,
                        d: "M302.4 173.7c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8-1.9.8-1.9 1.8.9 1.8 1.9 1.8Z"
                    }), j.createElement("path", {
                        strokeMiterlimit: 10,
                        d: "M302.4 182.4c5.8 0 10.6-4.7 10.6-10.5s-4.8-10.5-10.6-10.5c-6 0-10.7 4.7-10.7 10.5s4.8 10.5 10.7 10.5Z"
                    }), j.createElement("path", {
                        strokeMiterlimit: 10,
                        d: "M297.1 167.8a1 1 0 1 0 0-2.2 1 1 0 0 0 0 2.2ZM295 173c.5 0 1-.5 1-1.1 0-.6-.5-1.1-1-1.1-.7 0-1.2.5-1.2 1.1 0 .6.5 1.1 1.1 1.1Zm7.4-7.4c.6 0 1-.5 1-1.1 0-.6-.4-1.1-1-1.1s-1.1.5-1.1 1c0 .7.5 1.2 1 1.2Zm-5.3 12.6a1 1 0 1 0 0-2.2 1 1 0 0 0 0 2.2Zm5.3 2.2c.6 0 1-.5 1-1 0-.7-.4-1.2-1-1.2s-1.1.5-1.1 1.1c0 .6.5 1.1 1 1.1Zm5.2-2.2a1 1 0 1 0 0-2.2 1 1 0 0 0 0 2.2Zm2.2-5.2c.6 0 1-.5 1-1.1 0-.6-.4-1.1-1-1.1s-1.1.5-1.1 1.1c0 .6.5 1.1 1 1.1Zm-2.2-5.2a1 1 0 1 0 0-2.2 1 1 0 0 0 0 2.2Z"
                    }))), r || (r = j.createElement("path", {
                        stroke: "#F5D64E",
                        strokeMiterlimit: 10,
                        d: "M17 222.6 222.6 17h77.7v77.7l-199 199m486.1-70.9L381.6 17H304v77.7l198.8 198.8"
                    })), n || (n = j.createElement("path", {
                        stroke: "#F5D64E",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "m302.3 106.3-27.5 27.5 27.5 27.5 27.6-27.5-27.6-27.5Zm0 76.3L274.8 210l27.5 27.5 27.5-27.5-27.5-27.5Z"
                    })), l || (l = j.createElement("path", {
                        stroke: "#F5D64E",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M302.3 237.6 330 210v-76.3m-27.7 103.9L274.8 210v-76.3m27.5-27.4v55m0 21.3v55"
                    })), c || (c = j.createElement("path", {
                        stroke: "#F5D64E",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "m313.2 171.7 27.3-27.3L368 172l-27.5 27.5-27.3-27.3m54.8-.2h-55m-21.4 0H237m103.6-27.5h-76.2m76.2 54.9h-76.2m10.4-25a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm-38.1 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
                    })), o || (o = j.createElement("path", {
                        stroke: "#F5D64E",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M329.8 174.4a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm38.2 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM302.3 202a2.5 2.5 0 1 0 0-5.1 2.5 2.5 0 0 0 0 5Zm0 38a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm0-93a2.5 2.5 0 1 0 0-5.1 2.5 2.5 0 0 0 0 5Zm0-38.2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM291.7 172l-27.5-27.6-27.5 27.5 27.5 27.5 27.5-27.5Z"
                    })), d || (d = j.createElement("path", {
                        stroke: "#F5D64E",
                        strokeMiterlimit: 10,
                        d: "M302.4 173.7c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8-1.9.8-1.9 1.8.9 1.8 1.9 1.8Z"
                    })), m || (m = j.createElement("path", {
                        stroke: "#F5D64E",
                        strokeMiterlimit: 10,
                        d: "M302.4 182.4c5.8 0 10.6-4.7 10.6-10.5s-4.8-10.5-10.6-10.5c-6 0-10.7 4.7-10.7 10.5s4.8 10.5 10.7 10.5Z"
                    })), h || (h = j.createElement("path", {
                        stroke: "#F5D64E",
                        strokeMiterlimit: 10,
                        d: "M297.1 167.8a1 1 0 1 0 0-2.2 1 1 0 0 0 0 2.2ZM295 173c.5 0 1-.5 1-1.1 0-.6-.5-1.1-1-1.1-.7 0-1.2.5-1.2 1.1 0 .6.5 1.1 1.1 1.1Zm7.4-7.4c.6 0 1-.5 1-1.1 0-.6-.4-1.1-1-1.1s-1.1.5-1.1 1c0 .7.5 1.2 1 1.2Zm-5.3 12.6a1 1 0 1 0 0-2.2 1 1 0 0 0 0 2.2Zm5.3 2.2c.6 0 1-.5 1-1 0-.7-.4-1.2-1-1.2s-1.1.5-1.1 1.1c0 .6.5 1.1 1 1.1Zm5.2-2.2a1 1 0 1 0 0-2.2 1 1 0 0 0 0 2.2Zm2.2-5.2c.6 0 1-.5 1-1.1 0-.6-.4-1.1-1-1.1s-1.1.5-1.1 1.1c0 .6.5 1.1 1 1.1Zm-2.2-5.2a1 1 0 1 0 0-2.2 1 1 0 0 0 0 2.2Z"
                    })))
                }),
                eC = (0, j.memo)(ez),
                eI = a(3658);
            let eF = e => {
                let {
                    children: t,
                    id: a,
                    downwardOnly: i = !1,
                    onProgress: r = () => {}
                } = e, n = (0, x.ac)("(min-width: 800px)"), l = (0, x.qi)(), {
                    timeline: c,
                    addTimeline: o
                } = D(), d = es("ui / " + a), m = (0, f.st)(), [h, u] = (0, j.useState)(!1), {
                    height: p,
                    width: b
                } = (0, E.i)();
                (0, j.useEffect)(() => {
                    u(!1)
                }, [b, p]);
                let v = (0, j.useCallback)(() => {
                        let {
                            progress: e
                        } = w();
                        null == c || c.progress(e)
                    }, [c, b, p]),
                    [w] = (0, g.w)(m, "ui / " + a + " / animation", {
                        progress: _.types.number(0, {
                            range: [0, 1],
                            nudgeMultiplier: .01
                        })
                    }, e => {
                        let {
                            progress: t
                        } = e;
                        n && (r(t), h || (v(), 1 !== t || h || !i || l || u(!0)))
                    }, [v, c, h, n]);
                return ((0, eI.Z)(() => {
                    v()
                }, 100, [b, p, v]), "function" != typeof t) ? null : (0, j.cloneElement)(t({
                    timeline: c,
                    addTimeline: o
                }), {
                    ref: d
                })
            };
            var eq = a(590),
                eA = a.n(eq);
            let eP = e => {
                    let {
                        text: t
                    } = e;
                    return t.map((e, t) => (0, u.jsx)(eK, {
                        line: e,
                        idx: t
                    }, "line-".concat(t)))
                },
                eR = e => {
                    let {
                        text: t,
                        addTimeline: a,
                        timelineOffset: i
                    } = e;
                    return t.map((e, t) => (0, u.jsx)(q, {
                        ref: e => {
                            e && a(e, i + t)
                        },
                        children: (0, u.jsx)(eK, {
                            line: e,
                            idx: t
                        })
                    }, "line-".concat(t)))
                },
                eG = (0, j.forwardRef)(function(e, t) {
                    let {
                        texts: a,
                        className: i = "",
                        addTimeline: r = () => {},
                        timelineOffset: n = 0,
                        animate: l = !0
                    } = e, c = (0, x.ac)("(min-width: 800px)"), o = eH(c ? a.desktop : a.mobile);
                    return (0, u.jsx)("div", {
                        className: (0, N.Z)(i, eA()["text-pngs"]),
                        ref: t,
                        children: c && l ? (0, u.jsx)(eR, {
                            text: o,
                            addTimeline: r,
                            timelineOffset: n,
                            animate: l
                        }) : (0, u.jsx)(eP, {
                            text: o
                        })
                    })
                }),
                eK = e => {
                    let {
                        line: t,
                        idx: a
                    } = e;
                    return (0, u.jsx)("div", {
                        className: eA().row,
                        children: t.map((e, t) => e.startsWith("https://") ? (0, u.jsx)("div", {
                            className: eA().image,
                            children: (0, u.jsx)(P.E, {
                                alt: "",
                                src: e + ".svg",
                                fill: !0,
                                sizes: "(max-width:800px) 4vw, 1.4vw"
                            })
                        }, "line-".concat(a, "-element-").concat(t)) : (0, u.jsx)("p", {
                            className: (0, N.Z)("p-l", eA().text),
                            children: e
                        }, "line-".concat(a, "-element-").concat(t)))
                    })
                },
                eH = e => (0, j.useMemo)(() => e.split("\n").map(e => e.split("![](")).map(e => e.map(e => e.split(".svg)"))).map(e => e.flat()).map(e => e.filter(e => "" !== e)), [e]);
            var eO = a(4104),
                eB = a.n(eO);
            let eD = W()(() => a.e(5679).then(a.bind(a, 5679)), {
                    loadableGenerated: {
                        webpack: () => [5679]
                    },
                    ssr: !1
                }),
                eU = W()(() => a.e(133).then(a.bind(a, 133)), {
                    loadableGenerated: {
                        webpack: () => [133]
                    },
                    ssr: !1
                }),
                eV = W()(() => a.e(7470).then(a.bind(a, 7470)), {
                    loadableGenerated: {
                        webpack: () => [7470]
                    },
                    ssr: !1
                }),
                eW = "intro",
                eY = e => {
                    let {
                        intro: t
                    } = e, a = (0, x.ac)("(max-width: 800px)"), i = (0, j.useRef)(null), r = es("ui / hero / title"), n = es("ui / hero / subtitle"), l = es("ui / hero / scroll-indicator"), {
                        setRef: c
                    } = (0, eo.oc)({
                        id: eW
                    });
                    return el({
                        id: eW,
                        height: "410vh",
                        callback: e => {
                            let {
                                ref: t
                            } = e;
                            c(t.current)
                        }
                    }), (0, j.useEffect)(() => {
                        a && c(i.current)
                    }, [a]), (0, u.jsxs)(u.Fragment, {
                        children: [(0, u.jsxs)("section", {
                            className: eB().hero,
                            ...(0, y.LF)(t),
                            ref: i,
                            children: [(0, u.jsx)("div", {
                                className: (0, N.Z)(eB()["mobile-bg"], "hide-on-desktop"),
                                children: (0, u.jsx)(eC, {
                                    className: "line-icon"
                                })
                            }), (0, u.jsx)("div", {
                                className: (0, N.Z)(eB().mask, "hide-on-desktop mobile-mask")
                            }), (0, u.jsx)("h1", {
                                className: eB().logo,
                                ref: r,
                                children: (0, u.jsx)(eD, {})
                            }), (0, u.jsx)(G.q, {
                                children: (0, u.jsx)("p", {
                                    className: (0, N.Z)("h4", eB().description),
                                    ref: n,
                                    dangerouslySetInnerHTML: {
                                        __html: (0, y.Zm)(t.description)
                                    }
                                })
                            }), (0, u.jsxs)("div", {
                                className: (0, N.Z)("hide-on-mobile", eB()["scroll-indicator"]),
                                ref: l,
                                children: [(0, u.jsx)("div", {
                                    className: eB()["double-arrow"],
                                    children: (0, u.jsx)(eU, {})
                                }), (0, u.jsx)("p", {
                                    className: "p-xs",
                                    children: "scroll"
                                })]
                            }), (0, u.jsx)("div", {
                                className: (0, N.Z)("hide-on-desktop", eB()["vertical-line"]),
                                children: (0, u.jsx)(eV, {
                                    className: "line-icon"
                                })
                            })]
                        }), (0, u.jsx)(eX, { ...t
                        })]
                    })
                },
                eX = e => {
                    let {
                        Eyebrow: t,
                        textWithSvg: a,
                        textWithSvgMobile: i
                    } = e, r = (0, x.ac)("(max-width: 800px)"), n = (0, j.useRef)();
                    return (0, j.useEffect)(() => {
                        r && n.current.removeAttribute("style")
                    }, [r]), (0, u.jsxs)("section", {
                        className: eB().fold,
                        ref: n,
                        children: [(0, u.jsx)(eF, {
                            id: "introduction / block",
                            onProgress: e => {
                                0 === e ? n.current.style.setProperty("display", "none") : n.current.style.removeProperty("display")
                            },
                            children: e => {
                                let {
                                    addTimeline: r
                                } = e;
                                return (0, u.jsxs)("div", {
                                    children: [(0, u.jsx)(q, {
                                        ref: e => {
                                            e && r(e, 0)
                                        },
                                        children: (0, u.jsx)("p", {
                                            className: (0, N.Z)("p-xs", eB().eyebrow),
                                            children: t
                                        })
                                    }), (0, u.jsx)(eG, {
                                        texts: {
                                            desktop: a,
                                            mobile: i
                                        },
                                        addTimeline: r,
                                        timelineOffset: 1
                                    })]
                                })
                            }
                        }), (0, u.jsx)("div", {
                            className: (0, N.Z)(eB()["vertical-line"], "hide-on-desktop"),
                            children: (0, u.jsx)(eV, {
                                className: "line-icon"
                            })
                        })]
                    })
                },
                eJ = W()(() => Promise.all([a.e(2737), a.e(1785), a.e(461)]).then(a.bind(a, 461)).then(e => {
                    let {
                        WebGL: t
                    } = e;
                    return t
                }), {
                    loadableGenerated: {
                        webpack: () => [461]
                    },
                    ssr: !1
                }),
                eQ = "Fixed-section";

            function e$(e) {
                let {
                    pageContent: t
                } = e, a = (0, x.ac)("(min-width: 800px)"), i = (0, f.Mi)(eQ), [r, n] = (0, x.EL)(), l = (0, j.useRef)();
                (0, g.w)(i, "section", {
                    height: _.types.number(1e3, {
                        nudgeMultiplier: 1
                    })
                }, e => {
                    let {
                        height: t
                    } = e;
                    a ? l.current.style.height = t + "vh" : l.current.removeAttribute("style")
                }, [a]);
                let c = (0, j.useRef)(),
                    {
                        height: o
                    } = (0, E.i)();
                return (0, p.LZ)(e => {
                    let {
                        scroll: t
                    } = e;
                    if (c.current) {
                        let {
                            top: e,
                            height: a
                        } = n;
                        c.current.visible = t < e + a;
                        let i = Math.max(0, t - (e + a - o));
                        c.current.position.y = i, c.current.updateMatrix()
                    }
                }, [o, n]), (0, u.jsxs)(u.Fragment, {
                    children: [!0 === a && (0, u.jsx)(eS.S.In, {
                        children: (0, u.jsx)(f.yR, {
                            id: eQ,
                            children: (0, u.jsx)("group", {
                                ref: c,
                                matrixAutoUpdate: !1,
                                children: (0, u.jsx)(eJ, {})
                            })
                        }, "fixed-section webgl")
                    }), (0, u.jsx)(en, {
                        sheetId: eQ,
                        bottomOffset: 1,
                        children: e => (0, u.jsx)("div", {
                            className: eT().fixedSection,
                            ref: t => {
                                l.current = t, r(t), e(t)
                            },
                            id: "fixed-section",
                            children: (0, u.jsxs)("div", {
                                className: eT().sticky,
                                children: [!0 === a && (0, u.jsxs)(u.Fragment, {
                                    children: [(0, u.jsx)(w, {
                                        theatreKey: "ui / mask-1"
                                    }), (0, u.jsx)(w, {
                                        theatreKey: "ui / mask-2"
                                    }), (0, u.jsx)(w, {
                                        theatreKey: "ui / mask-3"
                                    }), (0, u.jsx)(w, {
                                        theatreKey: "ui / mask-4"
                                    }), (0, u.jsx)(w, {
                                        theatreKey: "ui / mask-5"
                                    })]
                                }), (0, u.jsx)(eY, {
                                    intro: t.Intro
                                }), (0, u.jsx)(eE, {
                                    mission: t.mission
                                })]
                            })
                        })
                    })]
                })
            }
            var e0 = a(3612),
                e1 = a.n(e0);

            function e2(e) {
                let {
                    id: t
                } = e, a = (0, x.qi)();
                return a && (0, u.jsxs)("div", {
                    className: e1().markers,
                    children: [(0, u.jsxs)("div", {
                        className: e1().marker,
                        children: [t, " - start"]
                    }), (0, u.jsxs)("div", {
                        className: e1().marker,
                        children: [t, " - end"]
                    })]
                })
            }
            var e5 = a(9680),
                e7 = a(8771),
                e3 = a(4590),
                e8 = a.n(e3);
            let e4 = (0, j.forwardRef)((e, t) => {
                let {
                    children: a,
                    className: i
                } = e;
                return (0, u.jsx)("div", {
                    className: (0, N.Z)(e8().slider, i),
                    ref: t,
                    children: (0, u.jsx)("div", {
                        className: e8().container,
                        children: [a].flat().map(e => e)
                    })
                })
            });

            function e6(e) {
                var t;
                let {
                    children: a,
                    emblaApi: i = {
                        autoplay: !1
                    },
                    enabled: r = !0
                } = e, [n, l] = (0, j.useState)([]), [c, o] = (0, j.useState)(0), [d, m] = (0, j.useState)(0), h = (0, e5.Z)({
                    delay: (null == i ? void 0 : null === (t = i.autoplay) || void 0 === t ? void 0 : t.delay) || null
                }, e => e.parentElement), [u, x] = (0, e7.Z)(i, i.autoplay ? [h] : []), p = (0, j.useCallback)(() => {
                    x && x.scrollPrev()
                }, [x]), _ = (0, j.useCallback)(() => {
                    x && x.scrollNext()
                }, [x]), f = (0, j.useCallback)(e => x && x.scrollTo(e), [x]), g = (0, j.useCallback)(() => {
                    x && m(Math.max(0, Math.min(1, x.scrollProgress())))
                }, [x]), b = (0, j.useCallback)(() => {
                    o(x.selectedScrollSnap()), l(x.scrollSnapList())
                }, [x]);
                return (0, j.useEffect)(() => {
                    x && (b(), g(), x.on("select", b), x.on("scroll", g), x.on("reInit", g))
                }, [x]), (0, j.useEffect)(() => {
                    !r && x && x.destroy()
                }, [x, r]), a ? a({
                    emblaRef: u,
                    currentIndex: c,
                    setCurrentIndex: o,
                    scrollPrev: p,
                    scrollNext: _,
                    scrollTo: f,
                    scrollProgress: d
                }) : null
            }
            e4.displayName = "Slides", e6.Slides = e4;
            var e9 = a(5565),
                te = a.n(e9);
            let tt = W()(() => a.e(9113).then(a.bind(a, 9113)), {
                    loadableGenerated: {
                        webpack: () => [9113]
                    },
                    ssr: !1
                }),
                ts = e => {
                    let {
                        data: t,
                        children: a,
                        className: i,
                        minimum: r = 3
                    } = e;
                    return (0, u.jsx)(e6, {
                        emblaApi: {
                            slidesToScroll: 1,
                            startIndex: 0,
                            align: 0,
                            containScroll: "trimSnaps",
                            draggable: t.length >= r
                        },
                        children: e => {
                            let {
                                scrollPrev: n,
                                scrollNext: l,
                                emblaRef: c,
                                currentIndex: o,
                                scrollProgress: d
                            } = e;
                            return (0, u.jsxs)("div", {
                                className: (0, N.Z)(i, "layout-grid", te()["slider-wrapper"]),
                                children: [t.length >= r && (0, u.jsx)("div", {
                                    className: te()["slider-nav"],
                                    children: (0, u.jsxs)("div", {
                                        className: te().nav,
                                        children: [(0, u.jsx)("button", {
                                            onClick: () => {
                                                n()
                                            },
                                            className: (0, N.Z)(0 === (0, ea.kx)(d, .01, 0) && te().hide, te().buttons),
                                            "aria-label": "previous slide",
                                            children: (0, u.jsx)(tt, {
                                                className: te().arrow
                                            })
                                        }), (0, u.jsx)("button", {
                                            onClick: () => {
                                                l()
                                            },
                                            className: (0, N.Z)(1 === (0, ea.HK)(d, .99, 1) && te().hide, te().buttons),
                                            "aria-label": "next slide",
                                            children: (0, u.jsx)(tt, {
                                                className: te().arrow
                                            })
                                        })]
                                    })
                                }), (0, u.jsx)(e6.Slides, {
                                    ref: c,
                                    className: te().slider,
                                    children: (0, j.cloneElement)(a, {
                                        currentIndex: o,
                                        data: t
                                    })
                                }), t.length >= r && (0, u.jsx)("div", {
                                    className: te()["progress-bar"],
                                    style: {
                                        "--slider-progress": "".concat(100 * d, "%")
                                    }
                                })]
                            })
                        }
                    })
                };
            var ta = a(2230),
                ti = a.n(ta);

            function tr(e) {
                let {
                    className: t,
                    filename: a,
                    alt: i
                } = e;
                return (0, u.jsx)("div", {
                    className: (0, N.Z)(ti()["logo-card"], t),
                    children: (0, u.jsx)("div", {
                        className: ti().image,
                        children: (0, u.jsx)(P.E, {
                            src: a,
                            alt: i,
                            fill: !0,
                            sizes: "(max-width:800px) 40vw, 21vw"
                        })
                    })
                })
            }
            var tn = a(1677),
                tl = a(8782),
                tc = a(3521),
                to = a.n(tc);
            let td = W()(() => a.e(6177).then(a.bind(a, 6177)), {
                    loadableGenerated: {
                        webpack: () => [6177]
                    },
                    ssr: !1
                }),
                tm = W()(() => a.e(3927).then(a.bind(a, 3927)), {
                    loadableGenerated: {
                        webpack: () => [3927]
                    },
                    ssr: !1
                }),
                th = W()(() => a.e(8332).then(a.bind(a, 8332)), {
                    loadableGenerated: {
                        webpack: () => [8332]
                    },
                    ssr: !1
                }),
                tu = {
                    email: function() {
                        return (0, u.jsx)(tm, {})
                    },
                    linkedin: function() {
                        return (0, u.jsx)(td, {})
                    },
                    twitter: function() {
                        return (0, u.jsx)(th, {})
                    }
                },
                tx = e => {
                    let t = e.replace(/\s/g, "").toLowerCase();
                    return tu[t] ? tu[t]() : null
                };

            function tp(e) {
                let {
                    data: t,
                    currentIndex: a
                } = e;
                return t.map((e, t) => {
                    let {
                        name: i,
                        position: r,
                        media: n,
                        socialMedia: l
                    } = e;
                    return (0, u.jsxs)("div", {
                        className: (0, N.Z)(to()["team-slide"], t < a && to().hide),
                        children: [(0, u.jsx)(R.z, {
                            className: to().media,
                            type: 5,
                            children: (0, u.jsx)(P.E, {
                                src: n.filename,
                                alt: n.alt,
                                fill: !0,
                                sizes: "(max-width:800px) 61vw, 21vw"
                            })
                        }), (0, u.jsxs)("div", {
                            className: to().bottom,
                            children: [(0, u.jsx)("div", {
                                className: to().social,
                                children: l.map((e, t) => {
                                    let {
                                        text: a,
                                        url: i
                                    } = e;
                                    return (0, u.jsx)(tl.r, {
                                        href: i.trim(),
                                        className: to()["social-logo"],
                                        children: tx(a)
                                    }, "social-media-".concat(t))
                                })
                            }), (0, u.jsxs)("div", {
                                className: to().position,
                                children: [(0, u.jsx)("p", {
                                    className: (0, N.Z)("p bold", to()["slide-title"]),
                                    children: i
                                }), (0, u.jsx)("p", {
                                    className: "p-xs",
                                    children: "// ".concat(r)
                                })]
                            })]
                        })]
                    }, "slide-item-".concat(t))
                })
            }
            var t_ = a(3233),
                tf = a.n(t_);
            let tg = e => {
                let {
                    about: t,
                    investors: a
                } = e, i = (0, x.ac)("(max-width: 800px)"), {
                    setRef: r
                } = (0, eo.oc)({
                    id: "about"
                }), n = i ? (0, y.Zm)(t.title) : (0, y.Zm)(t.title).replaceAll("<p>", "").replaceAll("</p>", "<br>");
                return (0, u.jsxs)("section", {
                    id: "about",
                    ref: r,
                    className: (0, N.Z)("scroll-top", tf().about),
                    children: [(0, u.jsxs)("div", {
                        id: "about",
                        className: (0, N.Z)(tf()["team-slider"], "layout-grid-inner"),
                        ...(0, y.LF)(t),
                        children: [(0, u.jsx)("div", {
                            className: tf().runes,
                            children: t.runes.map((e, t) => {
                                let {
                                    filename: a,
                                    alt: i
                                } = e;
                                return (0, u.jsx)("div", {
                                    className: tf().rune,
                                    children: (0, u.jsx)(P.E, {
                                        src: a,
                                        alt: i,
                                        fill: !0,
                                        sizes: "(max-width:800px) 13vw, 7vw"
                                    })
                                }, "about-rune-".concat(t))
                            })
                        }), (0, u.jsx)(tn.I, {
                            src: "noprecache/textures/about-rune.svg",
                            theatreKey: "ui / team / center-rune",
                            className: tf()["bkg-rune"]
                        }), (0, u.jsx)(eF, {
                            id: "team-hero",
                            downwardOnly: !0,
                            children: e => {
                                let {
                                    addTimeline: t
                                } = e;
                                return (0, u.jsxs)("h2", {
                                    className: (0, N.Z)(tf().title, "h1"),
                                    children: [(0, u.jsx)("div", {
                                        className: (0, N.Z)(tf()["mobile-bg-image"], "hide-on-desktop"),
                                        children: (0, u.jsx)(P.E, {
                                            src: "/images/runic.png",
                                            alt: "",
                                            fill: !0,
                                            sizes: "(max-width:800px) 47vw, 0"
                                        })
                                    }), (0, u.jsx)("div", {
                                        className: (0, N.Z)(tf().mask, "hide-on-desktop mobile-mask")
                                    }), (0, u.jsx)(C, {
                                        dangerouslySetInnerHTML: {
                                            __html: n
                                        },
                                        ref: e => {
                                            e && t(e, 0)
                                        }
                                    })]
                                })
                            }
                        }), (0, u.jsx)("h3", {
                            className: (0, N.Z)(tf().subtitle, "h3"),
                            children: t.teamTitle
                        }), (0, u.jsx)(G.q, {
                            children: (0, u.jsx)("p", {
                                className: (0, N.Z)(tf().description, "p"),
                                dangerouslySetInnerHTML: {
                                    __html: (0, y.Zm)(t.richText)
                                }
                            })
                        }), (0, u.jsx)(ts, {
                            className: tf().slider,
                            data: t.teamEntries,
                            minimum: i ? 1 : 4,
                            children: (0, u.jsx)(tp, {})
                        })]
                    }), (0, u.jsxs)("div", {
                        className: (0, N.Z)(tf()["double-marquee"], "layout-grid"),
                        ...(0, y.LF)(a),
                        children: [(0, u.jsx)("h3", {
                            className: (0, N.Z)(tf().title, i ? "h2" : " h3"),
                            children: a.title
                        }), (0, u.jsx)("div", {
                            className: tf().runes,
                            children: a.runes.map((e, t) => {
                                let {
                                    filename: a,
                                    alt: i
                                } = e;
                                return (0, u.jsx)("div", {
                                    className: tf().rune,
                                    children: (0, u.jsx)(P.E, {
                                        src: a,
                                        alt: i,
                                        fill: !0,
                                        sizes: "(max-width:800px) 0, 7vw"
                                    })
                                }, "investors-rune-".concat(t))
                            })
                        }), (0, u.jsx)(B.O, {
                            inverted: !0,
                            className: tf().marquee,
                            duration: 50,
                            children: a.logosFirstColumn.map((e, t) => (0, j.createElement)(tr, {
                                className: tf().logo,
                                ...e,
                                key: "left-slider-".concat(t)
                            }))
                        }), (0, u.jsx)(B.O, {
                            className: tf().marquee,
                            duration: 50,
                            children: a.logosSecondColumn.map((e, t) => (0, j.createElement)(tr, {
                                className: tf().logo,
                                ...e,
                                key: "right-slider-".concat(t)
                            }))
                        })]
                    }), (0, u.jsx)(tn.I, {
                        src: "noprecache/textures/diagonal-line.svg",
                        theatreKey: "ui / team / diagonal-line",
                        className: (0, N.Z)("hide-on-mobile", tf().diagonalLine)
                    })]
                })
            };
            var tj = a(4034),
                tb = a.n(tj);

            function tv(e) {
                let {
                    data: t,
                    currentIndex: a
                } = e;
                return t.map((e, t) => {
                    let {
                        category: i,
                        link: r,
                        description: n,
                        media: l
                    } = e;
                    return (0, u.jsxs)(tl.r, {
                        href: r,
                        className: (0, N.Z)(tb()["blog-slide"], t < a && tb().hide),
                        children: [(0, u.jsx)(R.z, {
                            className: tb().media,
                            type: 6,
                            children: (0, u.jsx)(P.E, {
                                src: l.filename,
                                alt: l.alt,
                                fill: !0,
                                sizes: "(max-width:800px) 61vw, 36vw"
                            })
                        }), (0, u.jsxs)("div", {
                            className: tb().bottom,
                            children: [(0, u.jsx)("p", {
                                className: (0, N.Z)(tb().cta, "p-xs", "hide-on-mobile"),
                                children: i
                            }), (0, u.jsx)("div", {
                                className: tb().description,
                                children: (0, u.jsx)("p", {
                                    className: "p bold",
                                    children: n
                                })
                            })]
                        })]
                    }, "slide-item-".concat(t))
                })
            }
            var tw = a(6713),
                ty = a.n(tw);
            let tN = e => {
                let {
                    blog: t
                } = e, a = (0, x.ac)("(max-width: 800px)"), {
                    setRef: i
                } = (0, eo.oc)({
                    id: "blog"
                });
                return (0, u.jsx)("section", {
                    className: (0, N.Z)("scroll-top", ty()["blog-slider"]),
                    ...(0, y.LF)(t),
                    id: "blog",
                    ref: i,
                    children: (0, u.jsx)(eF, {
                        id: "blog-hero",
                        downwardOnly: !0,
                        children: e => {
                            let {
                                addTimeline: i
                            } = e;
                            return (0, u.jsxs)(u.Fragment, {
                                children: [(0, u.jsx)("h3", {
                                    className: (0, N.Z)(ty().title, "h1"),
                                    children: (0, u.jsx)(C, {
                                        ref: e => {
                                            e && i(e, 0)
                                        },
                                        children: t.title
                                    })
                                }), (0, u.jsx)(ts, {
                                    data: t.blogEntries,
                                    minimum: a ? 1 : 2,
                                    children: (0, u.jsx)(tv, {})
                                })]
                            })
                        }
                    })
                })
            };
            var tk = a(4207),
                tZ = a(5706);
            let tE = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return e ? (0, tZ.sY)(e, {
                    markResolvers: {
                        [tZ.et]: (e, t) => {
                            let {
                                href: a = null
                            } = t;
                            return (0, u.jsx)(tl.r, {
                                href: a,
                                className: "link",
                                children: e
                            })
                        },
                        ...t.markResolvers
                    },
                    nodeResolvers: {
                        [tZ.tw]: (e, t) => {
                            let {
                                level: a
                            } = t;
                            switch (a) {
                                case 1:
                                    return (0, u.jsx)("h1", {
                                        className: "h1",
                                        children: e
                                    });
                                case 2:
                                    return (0, u.jsx)("h2", {
                                        className: "h2",
                                        children: e
                                    });
                                case 3:
                                    return (0, u.jsx)("h3", {
                                        className: "h3",
                                        children: e
                                    });
                                case 4:
                                    return (0, u.jsx)("h4", {
                                        className: "h4",
                                        children: e
                                    });
                                case 5:
                                    return (0, u.jsx)("h5", {
                                        className: "h5",
                                        children: e
                                    });
                                case 6:
                                    return (0, u.jsx)("h6", {
                                        className: "h6",
                                        children: e
                                    });
                                default:
                                    return null
                            }
                        },
                        [tZ.Bo]: e => (0, u.jsx)("blockquote", {
                            className: cn("p-alt", s.quote),
                            children: e
                        }),
                        ...t.nodeResolvers
                    }
                }) : null
            };
            var tS = a(8163),
                tL = a.n(tS);
            let tT = W()(() => a.e(9113).then(a.bind(a, 9113)), {
                loadableGenerated: {
                    webpack: () => [9113]
                },
                ssr: !1
            });

            function tM(e) {
                let {
                    data: t,
                    className: a
                } = e;
                return (0, u.jsx)("div", {
                    className: (0, N.Z)(tL().accordion, a),
                    children: (0, u.jsx)(tk.fC, {
                        type: "single",
                        className: tL()["accordion-root"],
                        collapsible: !0,
                        children: t.map((e, t) => {
                            let {
                                question: a,
                                answer: i = null
                            } = e;
                            return (0, u.jsxs)(tk.ck, {
                                value: "".concat(a, "-").concat(t).toString().normalize("NFKD").toLowerCase().trim().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-"),
                                className: tL().item,
                                children: [(0, u.jsx)(tk.h4, {
                                    asChild: !0,
                                    children: (0, u.jsxs)(tk.xz, {
                                        className: tL().trigger,
                                        children: [(0, u.jsxs)("div", {
                                            className: (0, N.Z)(tL().question, "p bold"),
                                            children: [(0, u.jsx)("span", {
                                                children: "Q:"
                                            }), (0, u.jsx)("p", {
                                                children: a
                                            })]
                                        }), (0, u.jsx)(tT, {
                                            className: tL().arrow
                                        })]
                                    })
                                }), (0, u.jsx)(tk.VY, {
                                    className: (0, N.Z)(tL()["accordion-content"], "p"),
                                    children: (0, u.jsxs)("div", {
                                        className: tL().answer,
                                        children: [(0, u.jsx)("span", {
                                            children: "A:"
                                        }), tE(i)]
                                    })
                                })]
                            }, t)
                        })
                    })
                })
            }
            var tz = a(7517),
                tC = a.n(tz);
            let tI = e => {
                let {
                    faq: t
                } = e, a = (0, x.ac)("(max-width: 800px)"), i = (0, x.ac)("(min-width: 800px)"), {
                    setRef: r
                } = (0, eo.oc)({
                    id: "faq"
                }), n = (0, j.useRef)(), [l, c] = (0, x.EL)();
                return (0, j.useEffect)(() => {
                    i ? n.current.style.setProperty("height", "".concat(c.width, "px")) : n.current.style.setProperty("height", "auto")
                }, [c, i]), (0, u.jsx)("section", {
                    className: (0, N.Z)(tC().faq, "layout-grid scroll-top"),
                    ...(0, y.LF)(t),
                    id: "faq",
                    ref: r,
                    children: (0, u.jsx)(eF, {
                        id: "faq-hero",
                        downwardOnly: !0,
                        children: e => {
                            let {
                                addTimeline: r
                            } = e;
                            return (0, u.jsxs)(u.Fragment, {
                                children: [(0, u.jsx)(tM, {
                                    className: tC().accordion,
                                    data: i ? t.faqFirstColumn : [...t.faqFirstColumn, ...t.faqSecondColumn]
                                }), (0, u.jsxs)("div", {
                                    className: tC()["centered-title"],
                                    ref: n,
                                    children: [(0, u.jsx)("h3", {
                                        className: (0, N.Z)(tC().title, "h1"),
                                        ref: l,
                                        children: (0, u.jsx)(C, {
                                            ref: e => {
                                                e && r(e, 0)
                                            },
                                            children: t.title
                                        })
                                    }), !0 === a && (0, u.jsx)("div", {
                                        className: tC().runes,
                                        children: t.mobileRunes.map((e, t) => {
                                            let {
                                                filename: a,
                                                alt: i
                                            } = e;
                                            return (0, u.jsx)("div", {
                                                className: tC().rune,
                                                children: (0, u.jsx)(P.E, {
                                                    src: a,
                                                    alt: i,
                                                    fill: !0,
                                                    sizes: "(max-width:800px) 13vw, 0"
                                                })
                                            }, "about-rune-".concat(t))
                                        })
                                    })]
                                }), i && (0, u.jsx)(tM, {
                                    className: tC().accordion,
                                    data: t.faqSecondColumn
                                })]
                            })
                        }
                    })
                })
            };
            var tF = a(1011),
                tq = a.n(tF);
            let tA = {
                    Eyebrow: function(e) {
                        let {
                            idx: t,
                            className: a = "",
                            eyebrow: i
                        } = e;
                        return (0, u.jsx)("p", {
                            className: (0, N.Z)("gold p-xs", a),
                            children: i
                        }, "switchback-eyebrow-".concat(t))
                    },
                    Text: function(e) {
                        let {
                            idx: t,
                            className: a = "",
                            richText: i
                        } = e;
                        return (0, u.jsx)(G.q, {
                            children: (0, u.jsx)("p", {
                                className: (0, N.Z)("p", tq().text, a),
                                dangerouslySetInnerHTML: {
                                    __html: (0, y.Zm)(i).replaceAll("<p>", "").replaceAll("</p>", "")
                                }
                            })
                        }, "switchback-text-".concat(t))
                    }
                },
                tP = e => {
                    let {
                        className: t,
                        children: a,
                        addTimeline: i = () => {}
                    } = e, r = (0, x.ac)("(min-width: 800px)");
                    return (0, u.jsx)("div", {
                        className: t,
                        children: tR(a).map((e, t) => {
                            for (let a in tA)
                                if (e.type === tA[a]) return tA[a]({ ...e.props,
                                    addTimeline: i,
                                    idx: t,
                                    isDesktop: r
                                })
                        })
                    })
                };
            for (let e in tA) tP[e] = tA[e];
            let tR = e => Array.isArray(e) ? e : [e];
            var tG = a(8700),
                tK = a.n(tG);
            let tH = W()(() => a.e(7150).then(a.bind(a, 7150)), {
                    loadableGenerated: {
                        webpack: () => [7150]
                    },
                    ssr: !1
                }),
                tO = W()(() => a.e(114).then(a.bind(a, 114)), {
                    loadableGenerated: {
                        webpack: () => [114]
                    },
                    ssr: !1
                }),
                tB = W()(() => a.e(6663).then(a.bind(a, 6663)), {
                    loadableGenerated: {
                        webpack: () => [6663]
                    },
                    ssr: !1
                }),
                tD = W()(() => a.e(4300).then(a.bind(a, 4300)), {
                    loadableGenerated: {
                        webpack: () => [4300]
                    },
                    ssr: !1
                }),
                tU = e => {
                    let {
                        manifesto: t
                    } = e, a = (0, x.ac)("(max-width: 800px)"), i = (0, x.ac)("(min-width: 800px)"), {
                        setRef: r
                    } = (0, eo.oc)({
                        id: "manifesto"
                    }), n = a ? (0, y.Zm)(t.manifestoImageAndTextSwitchback[0].title) : (0, y.Zm)(t.manifestoImageAndTextSwitchback[0].title).replaceAll("<p>", "").replaceAll("</p>", "<br>");
                    return (0, u.jsxs)("section", {
                        id: "manifesto",
                        ref: r,
                        className: "scroll-top",
                        children: [(0, u.jsx)("div", {
                            className: (0, N.Z)(tK()["manifesto-hero"], "layout-block"),
                            ...(0, y.LF)(t.manifestoHero[0]),
                            children: (0, u.jsx)(eF, {
                                id: "manifesto-hero",
                                downwardOnly: !0,
                                children: e => {
                                    let {
                                        addTimeline: a
                                    } = e;
                                    return (0, u.jsxs)(u.Fragment, {
                                        children: [(0, u.jsxs)("div", {
                                            className: (0, N.Z)(tK().crosshairs, "hide-on-mobile"),
                                            children: [(0, u.jsx)(tn.I, {
                                                src: "noprecache/textures/crosshair.svg",
                                                theatreKey: "ui / manifesto / hero / crosshair-0",
                                                className: tK().crosshair
                                            }), (0, u.jsx)(tn.I, {
                                                src: "noprecache/textures/crosshair.svg",
                                                theatreKey: "ui / manifesto / hero / crosshair-1",
                                                className: tK().crosshair,
                                                scale: [-1, 1, 1]
                                            }), (0, u.jsx)(tn.I, {
                                                src: "noprecache/textures/crosshair.svg",
                                                theatreKey: "ui / manifesto / hero / crosshair-2",
                                                className: tK().crosshair,
                                                scale: [-1, -1, 1]
                                            }), (0, u.jsx)(tn.I, {
                                                src: "noprecache/textures/crosshair.svg",
                                                theatreKey: "ui / manifesto / hero / crosshair-3",
                                                className: tK().crosshair,
                                                scale: [1, -1, 1]
                                            })]
                                        }), (0, u.jsx)(tn.I, {
                                            src: "noprecache/textures/hex.svg",
                                            theatreKey: "ui / manifesto / hero / hex",
                                            className: (0, N.Z)(tK().hex, "hide-on-mobile")
                                        }), (0, u.jsx)("div", {
                                            className: (0, N.Z)(tK().hex, "hide-on-desktop"),
                                            children: (0, u.jsx)(tB, {
                                                className: "line-icon"
                                            })
                                        }), (0, u.jsxs)("div", {
                                            className: tK().center,
                                            children: [(0, u.jsx)("h1", {
                                                className: "h1",
                                                children: (0, u.jsx)(C, {
                                                    ref: e => {
                                                        e && a(e, 0)
                                                    },
                                                    children: t.manifestoHero[0].title
                                                })
                                            }), (0, u.jsx)("h4", {
                                                className: "h4",
                                                children: (0, u.jsx)(q, {
                                                    ref: e => {
                                                        e && a(e, 1)
                                                    },
                                                    children: t.manifestoHero[0].subtitle
                                                })
                                            })]
                                        })]
                                    })
                                }
                            })
                        }), (0, u.jsxs)("div", {
                            className: (0, N.Z)("layout-grid", tK()["manifesto-text-switchback"]),
                            ...(0, y.LF)(t.manifestoTextSwitchback[0]),
                            children: [(0, u.jsx)(tn.I, {
                                src: "noprecache/textures/diagonal-line.svg",
                                theatreKey: "ui / manifesto / switchback / diagonal-line",
                                className: tK().diagonalLine
                            }), (0, u.jsx)(tn.I, {
                                src: "noprecache/textures/vertical-line.svg",
                                theatreKey: "ui / manifesto / switchback / vertical-line",
                                className: tK().verticalLine
                            }), (0, u.jsxs)("div", {
                                className: tK().arrows,
                                children: [(0, u.jsx)(tn.I, {
                                    src: "noprecache/textures/arrow.svg",
                                    theatreKey: "ui / manifesto / switchback / arrow-1",
                                    className: tK().arrow
                                }), (0, u.jsx)(tn.I, {
                                    src: "noprecache/textures/arrow.svg",
                                    theatreKey: "ui / manifesto / switchback / arrow-2",
                                    className: tK().arrow
                                }), (0, u.jsx)(tn.I, {
                                    src: "noprecache/textures/arrow.svg",
                                    theatreKey: "ui / manifesto / switchback / arrow-3",
                                    className: tK().arrow
                                })]
                            }), (0, u.jsx)(eG, {
                                texts: {
                                    desktop: t.manifestoTextSwitchback[0].textWithSvg,
                                    mobile: t.manifestoTextSwitchback[0].textWithSvgMobile
                                },
                                timelineOffset: 1,
                                className: tK()["text-with-svg"],
                                animate: !1
                            }), a && (0, u.jsx)(tV, {
                                children: (0, u.jsx)(R.z, {
                                    className: tK().media,
                                    type: 2,
                                    children: (0, u.jsx)(P.E, {
                                        src: t.manifestoTextSwitchback[0].media.filename,
                                        alt: t.manifestoTextSwitchback[0].media.alt,
                                        fill: !0,
                                        sizes: "(max-width:800px) 18vw, 0"
                                    })
                                })
                            }), (0, u.jsx)("div", {
                                className: (0, N.Z)("layout-grid", tK().switchbacks),
                                children: t.manifestoTextSwitchback[0].switchbacks.map((e, a) => {
                                    let {
                                        text: r,
                                        eyebrow: n,
                                        richText: l
                                    } = e;
                                    return (0, u.jsxs)(j.Fragment, {
                                        children: [(0, u.jsxs)(tP, {
                                            className: tK().inner,
                                            animate: !1,
                                            children: [(0, u.jsx)(tP.Eyebrow, {
                                                eyebrow: n,
                                                animate: !1
                                            }), (0, u.jsx)(tP.Text, {
                                                text: r,
                                                className: tK().text,
                                                animate: !1,
                                                richText: l
                                            })]
                                        }), 1 === a && !0 === i && (0, u.jsx)(R.z, {
                                            id: "text-switchback",
                                            type: 2,
                                            className: tK().media,
                                            children: (0, u.jsx)(P.E, {
                                                src: t.manifestoTextSwitchback[0].media.filename,
                                                alt: t.manifestoTextSwitchback[0].media.alt,
                                                fill: !0,
                                                sizes: "(max-width:800px) 0, 9vw"
                                            })
                                        })]
                                    }, "switchback-".concat(a))
                                })
                            }), a && (0, u.jsx)(tV, {
                                children: (0, u.jsxs)("div", {
                                    className: (0, N.Z)(tK()["arrows-mobile"]),
                                    children: [(0, u.jsx)(tH, {
                                        className: (0, N.Z)(tK().arrow, "line-icon")
                                    }), (0, u.jsx)(tH, {
                                        className: (0, N.Z)(tK().arrow, "line-icon")
                                    }), (0, u.jsx)(tH, {
                                        className: (0, N.Z)(tK().arrow, "line-icon")
                                    })]
                                })
                            })]
                        }), (0, u.jsxs)("div", {
                            className: tK()["manifesto-image-and-text-switchback"],
                            ...(0, y.LF)(t.manifestoImageAndTextSwitchback[0]),
                            children: [(0, u.jsxs)("div", {
                                className: (0, N.Z)("layout-grid", tK().hero),
                                children: [(0, u.jsx)(eF, {
                                    id: "manifesto-2-hero",
                                    downwardOnly: !0,
                                    children: e => {
                                        let {
                                            addTimeline: t
                                        } = e;
                                        return (0, u.jsx)("h2", {
                                            className: (0, N.Z)(tK().title, "h1"),
                                            children: (0, u.jsx)(C, {
                                                ref: e => {
                                                    e && t(e, 0)
                                                },
                                                dangerouslySetInnerHTML: {
                                                    __html: n
                                                }
                                            })
                                        })
                                    }
                                }), a && (0, u.jsx)(tV, {
                                    children: (0, u.jsx)(R.z, {
                                        className: tK()["first-media"],
                                        type: 2,
                                        children: (0, u.jsx)(P.E, {
                                            src: t.manifestoImageAndTextSwitchback[0].medias[0].filename,
                                            alt: t.manifestoImageAndTextSwitchback[0].medias[0].alt,
                                            fill: !0,
                                            sizes: "(max-width:800px) 18vw, 0"
                                        })
                                    })
                                }), !0 === i && (0, u.jsx)("div", {
                                    className: tK()["first-media"],
                                    children: (0, u.jsx)(R.z, {
                                        id: "image-switchback-1",
                                        type: 2,
                                        children: (0, u.jsx)(P.E, {
                                            src: t.manifestoImageAndTextSwitchback[0].medias[0].filename,
                                            alt: t.manifestoImageAndTextSwitchback[0].medias[0].alt,
                                            fill: !0,
                                            sizes: "(max-width:800px) 0, 13vw"
                                        })
                                    })
                                })]
                            }), (0, u.jsxs)("div", {
                                className: (0, N.Z)("layout-grid", tK().fold),
                                children: [(0, u.jsx)(tn.I, {
                                    src: "noprecache/textures/vertical-line-2.svg",
                                    theatreKey: "ui / manifesto-2 / switchback / vertical-line",
                                    className: tK().verticalLine
                                }), (0, u.jsx)(tn.I, {
                                    src: "noprecache/textures/diagonal-line.svg",
                                    theatreKey: "ui / manifesto-2-fold / switchback / diagonal-line",
                                    className: tK().diagonalLine,
                                    scale: [-1, 1, 1]
                                }), t.manifestoImageAndTextSwitchback[0].switchbacks.map((e, t) => {
                                    let {
                                        text: a,
                                        eyebrow: i,
                                        richText: r
                                    } = e;
                                    return (0, u.jsx)(j.Fragment, {
                                        children: (0, u.jsxs)(tP, {
                                            className: tK().switchbacks,
                                            children: [(0, u.jsx)(tP.Eyebrow, {
                                                eyebrow: i,
                                                animate: !1
                                            }), (0, u.jsx)(tP.Text, {
                                                text: a,
                                                className: tK().text,
                                                animate: !1,
                                                richText: r
                                            })]
                                        })
                                    }, "switchback-2-".concat(t))
                                }), !0 === i && (0, u.jsx)("div", {
                                    className: tK()["second-media"],
                                    children: (0, u.jsx)(R.z, {
                                        id: "image-switchback-2",
                                        type: 2,
                                        children: (0, u.jsx)(P.E, {
                                            src: t.manifestoImageAndTextSwitchback[0].medias[1].filename,
                                            alt: t.manifestoImageAndTextSwitchback[0].medias[1].alt,
                                            fill: !0,
                                            sizes: "(max-width:800px) 0, 21vw"
                                        })
                                    })
                                }), a && (0, u.jsx)(tV, {
                                    children: (0, u.jsx)(R.z, {
                                        className: tK()["second-media"],
                                        type: 2,
                                        children: (0, u.jsx)(P.E, {
                                            src: t.manifestoImageAndTextSwitchback[0].medias[1].filename,
                                            alt: t.manifestoImageAndTextSwitchback[0].medias[1].alt,
                                            fill: !0,
                                            sizes: "(max-width:800px) 18vw, 0"
                                        })
                                    })
                                })]
                            })]
                        }), (0, u.jsx)("div", {
                            className: (0, N.Z)("layout-grid-inner", tK()["manifesto-bottom"]),
                            ...(0, y.LF)(t.manifestoBottom[0]),
                            children: (0, u.jsx)(eF, {
                                id: "manifesto-bottom",
                                downwardOnly: !0,
                                children: e => {
                                    let {
                                        addTimeline: r
                                    } = e;
                                    return (0, u.jsxs)(u.Fragment, {
                                        children: [(0, u.jsx)("h2", {
                                            className: (0, N.Z)("h1 gold", tK()["rotated-title"]),
                                            children: (0, u.jsx)(C, {
                                                ref: e => {
                                                    e && r(e, 0)
                                                },
                                                children: t.manifestoBottom[0].title
                                            })
                                        }), [, , , ].fill("").map((e, a) => (0, u.jsxs)(j.Fragment, {
                                            children: [(0, u.jsx)("p", {
                                                className: (0, N.Z)("p-xs", tK().text, "hide-on-mobile"),
                                                children: t.manifestoBottom[0].textAndRune[0].firstText
                                            }), (0, u.jsxs)("div", {
                                                className: tK()["text-and-rune"],
                                                children: [(0, u.jsx)("div", {
                                                    className: tK().rune,
                                                    children: (0, u.jsx)(P.E, {
                                                        src: t.manifestoBottom[0].textAndRune[0].rune.filename,
                                                        alt: t.manifestoBottom[0].textAndRune[0].rune.alt,
                                                        fill: !0,
                                                        sizes: "(max-width:800px) 0, 1.7vw"
                                                    })
                                                }), (0, u.jsx)("div", {
                                                    className: "p-xs",
                                                    dangerouslySetInnerHTML: {
                                                        __html: (0, y.Zm)(t.manifestoBottom[0].textAndRune[0].secondText)
                                                    }
                                                }), a <= 1 && (0, u.jsx)(tn.I, {
                                                    theatreKey: "ui / manifesto-bottom / text-runes / rune-".concat(a),
                                                    className: tK()["horizontal-line"],
                                                    src: "noprecache/textures/horizontal-line.svg"
                                                })]
                                            })]
                                        }, "text-and-rune-".concat(a))), (0, u.jsx)(R.z, {
                                            id: "image-bottom",
                                            className: tK().media,
                                            type: 5,
                                            animateIn: !0,
                                            ref: e => {
                                                e && r(e, 1)
                                            },
                                            children: (0, u.jsx)(P.E, {
                                                src: t.manifestoBottom[0].media.filename,
                                                alt: t.manifestoBottom[0].media.alt,
                                                fill: !0,
                                                sizes: "(max-width:800px) 18vw, 21vw"
                                            })
                                        }), (0, u.jsxs)(H, {
                                            className: tK().body,
                                            children: [(0, u.jsx)(H.Title, {
                                                className: (0, N.Z)("h3", tK().title),
                                                ...t.manifestoBottom[0].body[0]
                                            }), (0, u.jsx)(H.Text, {
                                                className: (0, N.Z)("p", tK().text),
                                                richText: t.manifestoBottom[0].body[0].richText
                                            }), (0, u.jsx)(H.Cta, {
                                                className: "p-xs",
                                                ...t.manifestoBottom[0].body[0].cta[0]
                                            })]
                                        }), a && (0, u.jsxs)(u.Fragment, {
                                            children: [(0, u.jsx)("div", {
                                                className: (0, N.Z)(tK().diagonalLine, tK().left),
                                                children: (0, u.jsx)(tO, {
                                                    className: "line-icon"
                                                })
                                            }), (0, u.jsx)("div", {
                                                className: (0, N.Z)(tK().diagonalLine, tK().right),
                                                children: (0, u.jsx)(tO, {
                                                    className: "line-icon"
                                                })
                                            })]
                                        }), i && (0, u.jsx)(tn.I, {
                                            src: "noprecache/textures/diagonal-line.svg",
                                            theatreKey: "ui / manifesto-bottom / bottom / rune",
                                            className: tK().diagonalLine
                                        })]
                                    })
                                }
                            })
                        })]
                    })
                },
                tV = e => {
                    let {
                        children: t
                    } = e;
                    return (0, u.jsxs)("div", {
                        className: (0, N.Z)(tK()["mobile-svg-wrapper"]),
                        children: [(0, u.jsx)("div", {
                            className: (0, N.Z)(tK()["mobile-vertical-line"]),
                            children: (0, u.jsx)(tD, {
                                className: "line-icon"
                            })
                        }), t]
                    })
                };
            var tW = a(9586),
                tY = a.n(tW);

            function tX(e) {
                let {
                    pageContent: t
                } = e, {
                    setSheetRectRef: a
                } = ei({
                    sheetId: "Vertical-section",
                    topOffset: -1,
                    bottomOffset: 1
                });
                return (0, u.jsxs)("div", {
                    ref: a,
                    className: tY().section,
                    children: [(0, u.jsx)(e2, {
                        id: "vertical-section"
                    }), (0, u.jsx)(tU, {
                        manifesto: t.homeInner
                    }), (0, u.jsx)(tg, {
                        about: t.homeInner.about[0],
                        investors: t.homeInner.investors[0]
                    }), (0, u.jsx)(tN, {
                        blog: t.homeInner.blog[0]
                    }), (0, u.jsx)(tI, {
                        faq: t.homeInner.faq[0]
                    })]
                })
            }
            var tJ = a(6235),
                tQ = a(4374),
                t$ = a(2056),
                t0 = a.n(t$);

            function t1(e) {
                let {
                    title: t = "Argus Labs | Building the seed of future game worlds",
                    description: a = "We are committed to realizing a future where games are open, interoperable, and shaped by emergent gameplay. At the convergence of applied research and crypto-native tech, we are advancing way to build, play, and extend games.",
                    image: i = {
                        filename: "/og.jpg",
                        alt: ""
                    },
                    keywords: r
                } = e;
                return (0, u.jsxs)(u.Fragment, {
                    children: [(0, u.jsxs)(t0(), {
                        children: [(0, u.jsx)("meta", {
                            httpEquiv: "x-ua-compatible",
                            content: "ie=edge"
                        }), (0, u.jsx)("meta", {
                            name: "robots",
                            content: "noindex,nofollow"
                        }), (0, u.jsx)("meta", {
                            name: "googlebot",
                            content: "noindex,nofollow"
                        }), (0, u.jsx)("meta", {
                            name: "keywords",
                            content: r && r.length ? r.join(",") : r
                        }), (0, u.jsx)("meta", {
                            name: "author",
                            content: "Studio Freight"
                        }), (0, u.jsx)("meta", {
                            name: "referrer",
                            content: "no-referrer"
                        }), (0, u.jsx)("meta", {
                            name: "format-detection",
                            content: "telephone=no"
                        }), (0, u.jsx)("meta", {
                            name: "geo.region",
                            content: "US"
                        }), (0, u.jsx)("link", {
                            rel: "manifest",
                            href: "/site.webmanifest"
                        }), (0, u.jsx)("link", {
                            rel: "apple-touch-icon",
                            sizes: "180x180",
                            href: "/apple-touch-icon.png"
                        }), (0, u.jsx)("link", {
                            rel: "icon",
                            type: "image/png",
                            sizes: "32x32",
                            href: "/favicon-32x32.png"
                        }), (0, u.jsx)("link", {
                            rel: "icon",
                            type: "image/png",
                            sizes: "16x16",
                            href: "/favicon-16x16.png"
                        }), (0, u.jsx)("link", {
                            rel: "manifest",
                            href: "/site.webmanifest"
                        }), (0, u.jsx)("link", {
                            rel: "mask-icon",
                            href: "/safari-pinned-tab.svg",
                            color: "#0a0a0a"
                        }), (0, u.jsx)("meta", {
                            name: "msapplication-TileColor",
                            content: "#f5d64e"
                        }), (0, u.jsx)("meta", {
                            name: "theme-color",
                            content: "#f5d64e"
                        }), (0, u.jsx)("link", {
                            rel: "icon",
                            href: "/favicon.ico"
                        }), (0, u.jsx)("title", {
                            children: t
                        })]
                    }), (0, u.jsx)(tQ.PB, {
                        title: t,
                        description: a,
                        openGraph: {
                            title: t,
                            description: a,
                            type: "website",
                            locale: "en_US",
                            images: [{
                                url: i.filename,
                                width: 1200,
                                height: 630,
                                alt: i.alt
                            }],
                            defaultImageWidth: 1200,
                            defaultImageHeight: 630,
                            site_name: "Argus Labs"
                        },
                        twitter: {
                            handle: "@studiofreight",
                            cardType: "summary_large_image"
                        }
                    })]
                })
            }
            var t2 = a(2139),
                t5 = a(4969),
                t7 = a(6677),
                t3 = a.n(t7);

            function t8(e) {
                let {} = e, t = (0, j.useRef)(), {
                    height: a
                } = (0, E.i)(), [i, {
                    height: r
                }] = (0, x.EL)(), [n, {
                    height: l
                }] = (0, x.EL)(), c = (0, p.LZ)(e => {
                    let {
                        scroll: a,
                        limit: i
                    } = e;
                    t.current.style.transform = "translate3d(0,".concat(a / i * (r - l), "px,0)")
                }), [o, d] = (0, j.useState)(!1), [m, h] = (0, j.useState)({
                    progress: 0,
                    y: 0
                }), _ = (0, j.useCallback)(e => {
                    if (!o) return;
                    e.preventDefault();
                    let t = m.progress,
                        a = m.y,
                        i = e.clientY - a,
                        n = (0, ea.uZ)(0, t + i / r, 1);
                    c.scrollTo(n * c.limit, {
                        immediate: !0
                    }), c.reset()
                }, [c, o, a, r, m]), f = (0, j.useCallback)(() => {
                    d(!1)
                }, []);
                return (0, j.useEffect)(() => (window.addEventListener("pointermove", _, !1), window.addEventListener("pointerup", f, !1), () => {
                    window.removeEventListener("pointermove", _, !1), window.removeEventListener("pointerup", f, !1)
                }), [_, f]), (0, u.jsx)("div", {
                    className: t3().scrollbar,
                    children: (0, u.jsx)("div", {
                        ref: i,
                        className: t3().inner,
                        children: (0, u.jsx)("div", {
                            className: t3().thumb,
                            ref: e => {
                                t.current = e, n(e)
                            },
                            onPointerDown: e => {
                                d(!0), h({
                                    progress: c.progress,
                                    y: e.clientY
                                })
                            }
                        })
                    })
                })
            }
            var t4 = a(8067),
                t6 = a.n(t4),
                t9 = a(5303),
                se = a.n(t9);

            function st(e) {
                let {
                    seo: t = {},
                    children: a,
                    theme: i = "light",
                    className: r,
                    layout: n
                } = e, l = (0, p.LZ)();
                return (0, j.useEffect)(() => {
                    function e(e) {
                        e = "#" + e.split("#").pop();
                        let t = U.o.getState().headerHeight;
                        l.scrollTo(e, {
                            offset: -(1.2 * t)
                        })
                    }
                    return t6().events.on("hashChangeStart", e), () => {
                        t6().events.off("hashChangeStart", e)
                    }
                }, [l]), (0, u.jsxs)(u.Fragment, {
                    children: [(0, u.jsx)(t1, { ...t
                    }), (0, u.jsx)(p.Ei, {
                        root: !0,
                        options: {
                            normalizeWheel: !1
                        },
                        children: (0, u.jsxs)("div", {
                            id: "layout",
                            className: (0, N.Z)("theme-".concat(i), se().layout, r),
                            children: [(0, u.jsx)(t8, {}), (0, u.jsx)(t5.h, {
                                data: n.globalHeader.header.content
                            }), (0, u.jsx)("main", {
                                className: se().main,
                                children: a
                            }), (0, u.jsx)(t2.$, {
                                data: n.globalFooter.footer.content
                            })]
                        })
                    })]
                })
            }
            var ss = a(1880),
                sa = a.n(ss);
            let si = W()(() => Promise.all([a.e(8982), a.e(2737), a.e(1838), a.e(3280)]).then(a.bind(a, 3280)).then(e => {
                let {
                    WebGL: t
                } = e;
                return t
            }), {
                loadableGenerated: {
                    webpack: () => [3280]
                },
                ssr: !1
            });
            var sr = !0;

            function sn(e) {
                let {
                    pageData: t
                } = e, a = (0, x.ac)("(min-width: 800px)"), {
                    content: i
                } = (0, tJ.P)(t, {
                    resolveRelations: ["globalHeader.header", "globalFooter.footer"]
                });
                return (0, u.jsxs)(u.Fragment, {
                    children: [!0 === a && (0, u.jsx)(G.q, {
                        children: (0, u.jsx)(si, {})
                    }), (0, u.jsxs)(u.Fragment, {
                        children: [(0, u.jsxs)(st, {
                            theme: "dark",
                            layout: i,
                            className: sa()["mobile-pattern"],
                            seo: i.seo,
                            children: [(0, u.jsx)(f.yR, {
                                id: "Fixed-section",
                                children: (0, u.jsx)(e$, {
                                    pageContent: i
                                })
                            }), (0, u.jsx)(f.yR, {
                                id: "Vertical-section",
                                children: (0, u.jsx)(tX, {
                                    pageContent: i
                                })
                            })]
                        }), (0, u.jsx)(ef.Out, {})]
                    })]
                })
            }
        },
        5871: function(e) {
            e.exports = {
                glitchText: "glitch-text_glitchText__ggSVv"
            }
        },
        1284: function(e) {
            e.exports = {
                text: "lines-text_text__gyEZk"
            }
        },
        3473: function(e) {
            e.exports = {
                splitText: "split-text_splitText__VqLIE"
            }
        },
        4034: function(e) {
            e.exports = {
                "blog-slide": "blog-slide_blog-slide__HsjOG",
                hide: "blog-slide_hide__YbOG3",
                description: "blog-slide_description__c4x4L",
                media: "blog-slide_media__koUKC",
                bottom: "blog-slide_bottom__6VCHK",
                cta: "blog-slide_cta__OnYmz"
            }
        },
        4940: function(e) {
            e.exports = {
                button: "button_button__eJwei",
                primary: "button_primary__mdLFG",
                "top-bottom": "button_top-bottom__9BVM0",
                "bottom-top": "button_bottom-top__VHSMk",
                content: "button_content__92Rmd",
                model: "button_model__Uz8e1",
                glitch: "button_glitch__FDlFU"
            }
        },
        8163: function(e) {
            e.exports = {
                accordion: "faq-accordion_accordion__rzhmk",
                "accordion-root": "faq-accordion_accordion-root__FRMmD",
                item: "faq-accordion_item__u09jl",
                trigger: "faq-accordion_trigger__4Ffg1",
                question: "faq-accordion_question__cDzJ1",
                arrow: "faq-accordion_arrow__Om9ut",
                "accordion-content": "faq-accordion_accordion-content__gnSo2",
                answer: "faq-accordion_answer__SmDbf",
                open: "faq-accordion_open__nEsBg",
                close: "faq-accordion_close__mVC2Q"
            }
        },
        8301: function(e) {
            e.exports = {
                overlay: "game-overlay_overlay__sfKsI",
                appear: "game-overlay_appear__X3cBZ",
                item: "game-overlay_item__ow7qU",
                show: "game-overlay_show__NooZf",
                "big-media": "game-overlay_big-media__2iMxd",
                "medium-media": "game-overlay_medium-media__liKqM",
                "small-media": "game-overlay_small-media__M4vhi",
                body: "game-overlay_body__5fczg",
                eyebrow: "game-overlay_eyebrow__Dm_9L",
                text: "game-overlay_text__S6THc",
                cta: "game-overlay_cta__c4xKS",
                close: "game-overlay_close__mSdhD",
                next: "game-overlay_next__riUuk",
                snippet: "game-overlay_snippet__R0d_N",
                content: "game-overlay_content__cCBm3"
            }
        },
        7709: function(e) {
            e.exports = {
                mask: "gradient-mask_mask__ZzTF5"
            }
        },
        3017: function(e) {
            e.exports = {
                header: "header_header__GSKJx",
                head: "header_head__dyG_u",
                logo: "header_logo__d4jIK",
                cta: "header_cta___MSG4",
                "hamburger-button": "header_hamburger-button__g2wsk",
                hamburger: "header_hamburger__MM0U7",
                inner: "header_inner__cBab9",
                open: "header_open___cToH",
                links: "header_links__A0NkG",
                link: "header_link__klLnE",
                active: "header_active__8Kh60",
                mark: "header_mark__qKBBF"
            }
        },
        3903: function(e) {
            e.exports = {
                fixedSection: "fixed-section_fixedSection__IVtnl",
                sticky: "fixed-section_sticky__sUqdJ"
            }
        },
        4104: function(e) {
            e.exports = {
                "svg-line": "intro_svg-line__A1Het",
                fold: "intro_fold__Elhmj",
                "vertical-line": "intro_vertical-line__Cgbr_",
                hero: "intro_hero__Byz5Q",
                "mobile-bg": "intro_mobile-bg__XTPEk",
                logo: "intro_logo__dr6qz",
                description: "intro_description__ZEbiY",
                "scroll-indicator": "intro_scroll-indicator____Ny5",
                "double-arrow": "intro_double-arrow__HjBw3",
                eyebrow: "intro_eyebrow__RVbp6",
                mask: "intro_mask__Zgp3Y"
            }
        },
        6101: function(e) {
            e.exports = {
                "title-section": "mission_title-section__ebn36",
                title: "mission_title__boFMw",
                "top-mask": "mission_top-mask__fE_Xa",
                "bottom-mask": "mission_bottom-mask__TJJPi",
                "bg-mobile": "mission_bg-mobile__7RxfS",
                engine: "mission_engine__N8SAU",
                runes: "mission_runes__6wK3S",
                slide: "mission_slide__Q9ZvH",
                technology: "mission_technology__bmBAP",
                benefits: "mission_benefits__6SLOQ",
                heading: "mission_heading__ihhxc",
                cta: "mission_cta__eWlUY",
                list: "mission_list__OjrIt",
                rune: "mission_rune___JtVx",
                item: "mission_item__FcJfv",
                label: "mission_label__c2m4S",
                mark: "mission_mark__86x8L",
                games: "mission_games__p_wpR",
                active: "mission_active__PvbFq",
                entry: "mission_entry__VoOOE",
                media: "mission_media___xOYi",
                details: "mission_details__oA4T2",
                body: "mission_body__fLXEO",
                "slide-ui": "mission_slide-ui__d5_O_",
                show: "mission_show__RhFpJ",
                appear: "mission_appear__Gstoi",
                indicator: "mission_indicator__uzNc7",
                next: "mission_next__jxImy",
                previous: "mission_previous__jKL_v",
                disable: "mission_disable__SECGt",
                slidesProgress: "mission_slidesProgress__teWpM",
                steps: "mission_steps__ic_2d",
                step: "mission_step__rqiSN",
                dot: "mission_dot__l2Ayc",
                current: "mission_current__mH6wF",
                line: "mission_line__q4QFt"
            }
        },
        3233: function(e) {
            e.exports = {
                about: "about_about__kd6fX",
                "team-slider": "about_team-slider__cIe4f",
                "mobile-bg-image": "about_mobile-bg-image__foDd2",
                "bkg-rune": "about_bkg-rune__ZWuSJ",
                runes: "about_runes__ccsD7",
                rune: "about_rune__ceH0l",
                title: "about_title__Uf5dt",
                mask: "about_mask__Wj_JA",
                subtitle: "about_subtitle__JXT4G",
                description: "about_description__398Ai",
                slider: "about_slider__6av_W",
                "double-marquee": "about_double-marquee__MucFA",
                marquee: "about_marquee__SAD4A",
                logo: "about_logo__8rkW_",
                diagonalLine: "about_diagonalLine__PbsCq"
            }
        },
        6713: function(e) {
            e.exports = {
                "blog-slider": "blog_blog-slider__IpsH8",
                title: "blog_title__G5Dw_"
            }
        },
        7517: function(e) {
            e.exports = {
                faq: "faq_faq__dIz5p",
                accordion: "faq_accordion__0qunx",
                "centered-title": "faq_centered-title__rxjY4",
                title: "faq_title__mTZXK",
                runes: "faq_runes__mVXtd",
                rune: "faq_rune__KNMUw"
            }
        },
        8700: function(e) {
            e.exports = {
                "manifesto-hero": "manifesto_manifesto-hero__WH_bi",
                crosshairs: "manifesto_crosshairs___Oh8c",
                crosshair: "manifesto_crosshair__mG9tP",
                hex: "manifesto_hex__LWNot",
                center: "manifesto_center__7QX4T",
                "manifesto-text-switchback": "manifesto_manifesto-text-switchback__M46vx",
                verticalLine: "manifesto_verticalLine__gnw1G",
                diagonalLine: "manifesto_diagonalLine__1qcGL",
                arrows: "manifesto_arrows__JzGbO",
                arrow: "manifesto_arrow__XTtTq",
                "text-with-svg": "manifesto_text-with-svg__Ubwxs",
                switchbacks: "manifesto_switchbacks__EgK3c",
                inner: "manifesto_inner__xI7by",
                text: "manifesto_text__aOWNH",
                media: "manifesto_media__h_ABt",
                "arrows-mobile": "manifesto_arrows-mobile__ARJYm",
                "manifesto-image-and-text-switchback": "manifesto_manifesto-image-and-text-switchback__CBaYm",
                hero: "manifesto_hero__4vAFY",
                title: "manifesto_title__TY3lQ",
                "first-media": "manifesto_first-media__F_5uT",
                fold: "manifesto_fold__1frEK",
                "second-media": "manifesto_second-media__EKmtV",
                "manifesto-bottom": "manifesto_manifesto-bottom__GJQFl",
                "rotated-title": "manifesto_rotated-title__XQuyl",
                "text-and-rune": "manifesto_text-and-rune__svAVj",
                rune: "manifesto_rune__BPNBj",
                "horizontal-line": "manifesto_horizontal-line__OFa7e",
                body: "manifesto_body__PzsPy",
                left: "manifesto_left__iDLKA",
                right: "manifesto_right__NZbCv",
                "absolute-center": "manifesto_absolute-center__Myqyz",
                "mobile-svg-wrapper": "manifesto_mobile-svg-wrapper__12uUf"
            }
        },
        9586: function(e) {
            e.exports = {
                section: "vertical-section_section__X3W2e"
            }
        },
        5565: function(e) {
            e.exports = {
                "slider-wrapper": "image-slider_slider-wrapper__K8Juj",
                slider: "image-slider_slider__XOPca",
                "slider-nav": "image-slider_slider-nav__4d9wf",
                nav: "image-slider_nav__Tskgr",
                buttons: "image-slider_buttons___TLZ6",
                hide: "image-slider_hide__WZSVk",
                arrow: "image-slider_arrow__mEa5j",
                "progress-bar": "image-slider_progress-bar__3BpFu"
            }
        },
        2230: function(e) {
            e.exports = {
                "logo-card": "logo-card_logo-card__pEYIz",
                image: "logo-card_image__7LCzh"
            }
        },
        3612: function(e) {
            e.exports = {
                markers: "markers_markers__ht4zl",
                marker: "markers_marker__vAP3f"
            }
        },
        2943: function(e) {
            e.exports = {
                navigation: "navigation_navigation__8EURn",
                closed: "navigation_closed__WYEwL",
                content: "navigation_content__7mj5p",
                cta: "navigation_cta__dAAk_"
            }
        },
        6677: function(e) {
            e.exports = {
                scrollbar: "scrollbar_scrollbar__Cli_4",
                inner: "scrollbar_inner__gfDqZ",
                thumb: "scrollbar_thumb__vmS2h"
            }
        },
        4590: function(e) {
            e.exports = {
                slider: "slider_slider__s5uGj",
                container: "slider_container__9XLlY"
            }
        },
        1011: function(e) {
            e.exports = {
                text: "switchback-text_text__ielu4"
            }
        },
        3521: function(e) {
            e.exports = {
                "team-slide": "team-slide_team-slide__2nGCA",
                hide: "team-slide_hide__VP6xC",
                "image-title": "team-slide_image-title__qGvhQ",
                media: "team-slide_media__Y7sql",
                bottom: "team-slide_bottom__JLLzC",
                position: "team-slide_position__lr_c_",
                "slide-title": "team-slide_slide-title__eq0gi",
                social: "team-slide_social__8vHnb",
                "social-logo": "team-slide_social-logo__9tN85",
                dash: "team-slide_dash__bDByp"
            }
        },
        590: function(e) {
            e.exports = {
                "text-pngs": "text-with-pngs_text-pngs__0Wljk",
                row: "text-with-pngs_row__LY6o4",
                image: "text-with-pngs_image__SHf_y",
                text: "text-with-pngs_text__CmtaF"
            }
        },
        5303: function(e) {
            e.exports = {
                layout: "layout_layout__KUVXp",
                main: "layout_main__jba1g"
            }
        },
        1880: function(e) {
            e.exports = {
                "mobile-pattern": "home_mobile-pattern__aTkld"
            }
        }
    }
]);