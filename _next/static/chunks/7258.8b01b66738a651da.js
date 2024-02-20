"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7258], {
        7258: function(e, t, n) {
            n.r(t);
            var r, a = n(959);

            function f() {
                return (f = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var l = (0, a.forwardRef)(function(e, t) {
                    return a.createElement("svg", f({
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 8 8",
                        ref: t
                    }, e), r || (r = a.createElement("path", {
                        fill: "#FFFCE4",
                        d: "M8 8H0V2.7L2.7 0H8v8Z"
                    })))
                }),
                o = (0, a.memo)(l);
            t.default = o
        }
    }
]);