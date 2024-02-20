(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6250], {
        6250: function(e, i, t) {
            "use strict";
            t.r(i), t.d(i, {
                GameOfLife: function() {
                    return v
                }
            });
            var s = t(1527),
                n = t(654),
                o = t(5924),
                l = t(2242),
                h = t(6257),
                r = t(959),
                c = t(161),
                d = t.n(c);
            class a {
                destroy() {
                    window.removeEventListener("mousemove", this.onMouseMove)
                }
                resize(e, i) {
                    this.cellSize = 16 * e / 1440, this.windowWidth = e, this.windowHeight = i, this.canvas.width = e, this.canvas.height = i, this.columnsAmount = Math.floor(e / this.cellSize), this.rowsAmount = Math.floor(i / this.cellSize), this.cells = Array(this.columnsAmount).fill(0).map((e, i) => Array(this.rowsAmount).fill(0).map((e, t) => new u(this, {
                        x: i,
                        y: t
                    }))), this.cells.forEach(e => {
                        e.forEach(e => {
                            e.init()
                        })
                    })
                }
                clear() {
                    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
                }
                draw() {
                    this.render && this.cells && (this.clear(), this.cells.forEach(e => {
                        e.forEach(e => {
                            e.update()
                        })
                    }), this.cells.forEach(e => {
                        e.forEach(e => {
                            e.draw()
                        })
                    }))
                }
                constructor(e) {
                    this.onMouseMove = e => {
                        var i, t, s, n, o, l, h, r, c;
                        let {
                            clientX: d,
                            clientY: a
                        } = e;
                        if (!this.render || !this.cells) return;
                        let u = {
                                x: d / this.windowWidth,
                                y: a / this.windowHeight
                            },
                            v = Math.floor(u.x * this.columnsAmount),
                            m = Math.floor(u.y * this.rowsAmount),
                            f = [null === (i = this.cells[v]) || void 0 === i ? void 0 : i[m], null === (t = this.cells[v - 1]) || void 0 === t ? void 0 : t[m], null === (s = this.cells[v]) || void 0 === s ? void 0 : s[m - 1], null === (n = this.cells[v + 1]) || void 0 === n ? void 0 : n[m], null === (o = this.cells[v]) || void 0 === o ? void 0 : o[m + 1], null === (l = this.cells[v - 1]) || void 0 === l ? void 0 : l[m - 1], null === (h = this.cells[v + 1]) || void 0 === h ? void 0 : h[m - 1], null === (r = this.cells[v - 1]) || void 0 === r ? void 0 : r[m + 1], null === (c = this.cells[v + 1]) || void 0 === c ? void 0 : c[m + 1]];
                        f.filter(e => !!e).forEach(e => {
                            e.isAlive = e.nextIsAlive = !0, e.needsUpdate = !0
                        })
                    }, this.canvas = e, this.context = e.getContext("2d"), this.context.imageSmoothingEnabled = !1, this.image = new Image, this.image.src = "/noprecache/textures/tile.png", window.addEventListener("mousemove", this.onMouseMove)
                }
            }
            class u {
                init() {
                    var e, i, t, s, n, o, l, h;
                    this.neighbors = [null === (e = this.game.cells[this.coordinates.x - 1]) || void 0 === e ? void 0 : e[this.coordinates.y], null === (i = this.game.cells[this.coordinates.x]) || void 0 === i ? void 0 : i[this.coordinates.y - 1], null === (t = this.game.cells[this.coordinates.x + 1]) || void 0 === t ? void 0 : t[this.coordinates.y], null === (s = this.game.cells[this.coordinates.x]) || void 0 === s ? void 0 : s[this.coordinates.y + 1], null === (n = this.game.cells[this.coordinates.x - 1]) || void 0 === n ? void 0 : n[this.coordinates.y - 1], null === (o = this.game.cells[this.coordinates.x + 1]) || void 0 === o ? void 0 : o[this.coordinates.y - 1], null === (l = this.game.cells[this.coordinates.x - 1]) || void 0 === l ? void 0 : l[this.coordinates.y + 1], null === (h = this.game.cells[this.coordinates.x + 1]) || void 0 === h ? void 0 : h[this.coordinates.y + 1]]
                }
                get aliveNeighborsAmount() {
                    return this.neighbors.filter(e => null == e ? void 0 : e.isAlive).length
                }
                get neighborsHasUpdated() {
                    return this.neighbors.find(e => (null == e ? void 0 : e.needsUpdate) === !0 || (null == e ? void 0 : e.isAlive) === !0)
                }
                update() {
                    if (!(this.neighborsHasUpdated || this.isAlive)) return;
                    let e = this.aliveNeighborsAmount;
                    this.isAlive && (2 === e || 3 === e) ? this.nextIsAlive = !0 : this.isAlive || 3 !== e ? this.nextIsAlive = !1 : this.nextIsAlive = !0, this.nextIsAlive !== this.isAlive ? (this.bornDate = Date.now(), this.needsUpdate = !0) : Date.now() - this.bornDate > 2e3 && (this.nextIsAlive = !1)
                }
                draw() {
                    this.needsUpdate = !1, this.isAlive = this.nextIsAlive, this.isAlive && this.game.context.drawImage(this.game.image, this.position.x, this.position.y, this.game.cellSize, this.game.cellSize)
                }
                constructor(e, i = {
                    x: 0,
                    y: 0
                }) {
                    this.game = e, this.coordinates = i, this.position = {
                        x: this.coordinates.x * this.game.cellSize,
                        y: this.coordinates.y * this.game.cellSize
                    }, this.isAlive = !1, this.needsUpdate = !0
                }
            }

            function v() {
                let e = (0, r.useRef)(),
                    i = (0, r.useRef)(),
                    t = (0, h.o)(e => {
                        let {
                            loader: i
                        } = e;
                        return i
                    }),
                    {
                        width: c,
                        height: u
                    } = (0, l.i)(),
                    [v, m] = (0, r.useState)(!1);
                (0, r.useEffect)(() => (i.current = new a(e.current), () => i.current.destroy()), []), (0, r.useEffect)(() => {
                    c && u && i.current.resize(c, u)
                }, [c, u]);
                let f = (0, r.useRef)(0);
                (0, n.xQ)((e, t) => {
                    v && (f.current += t, f.current >= 100 && (f.current = 0, i.current.draw()))
                });
                let w = (0, r.useRef)();
                return (0, r.useEffect)(() => {
                    v && i.current.clear(), i.current.render = v
                }, [v]), (0, r.useEffect)(() => {
                    if (!t) return window.addEventListener("scroll", e, !1), window.addEventListener("click", e, !1), () => {
                        window.removeEventListener("scroll", e, !1), window.removeEventListener("click", e, !1)
                    };

                    function e() {
                        m(!1), clearTimeout(w.current), w.current = setTimeout(() => m(!0), 3e4)
                    }
                }, [t]), (0, s.jsx)("div", {
                    className: (0, o.Z)(d().game, v && d().visible),
                    children: (0, s.jsx)("canvas", {
                        ref: e
                    })
                })
            }
        },
        2242: function(e, i, t) {
            "use strict";
            t.d(i, {
                i: function() {
                    return n
                }
            });
            var s = t(959);

            function n() {
                let [e, i] = (0, s.useState)(), [t, n] = (0, s.useState)();
                return (0, s.useEffect)(() => {
                    function e() {
                        i(Math.min(window.innerWidth, document.documentElement.clientWidth)), n(Math.min(window.innerHeight, document.documentElement.clientHeight))
                    }
                    return window.addEventListener("resize", e, !1), e(), () => window.removeEventListener("resize", e, !1)
                }, []), {
                    width: e,
                    height: t
                }
            }
        },
        161: function(e) {
            e.exports = {
                game: "game-of-life_game__Z15eu",
                visible: "game-of-life_visible__V3w7B"
            }
        }
    }
]);