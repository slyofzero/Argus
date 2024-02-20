(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7771], {
        2829: function(e, t) {
            var n, u, r, o, i, l, a, D, c, s, p, d, f, h, m, E, C, g, F, y, v, b, A;
            n = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/, D = /(?:\r|\n|\t\t)/g, c = /(?:\s\s+)/g, s = function(e) {
                u = document, r = window, (i = i || e || r.gsap || console.warn("Please gsap.registerPlugin(SplitText)")) && (a = i.utils.toArray, l = i.core.context || function() {}, o = 1)
            }, p = function(e) {
                return r.getComputedStyle(e)
            }, d = function(e) {
                return "absolute" === e.position || !0 === e.absolute
            }, f = function(e, t) {
                for (var n, u = t.length; --u > -1;)
                    if (n = t[u], e.substr(0, n.length) === n) return n.length
            }, h = function(e, t) {
                void 0 === e && (e = "");
                var n = ~e.indexOf("++"),
                    u = 1;
                return n && (e = e.split("++").join("")),
                    function() {
                        return "<" + t + " style='position:relative;display:inline-block;'" + (e ? " class='" + e + (n ? u++ : "") + "'>" : ">")
                    }
            }, m = function e(t, n, u) {
                var r = t.nodeType;
                if (1 === r || 9 === r || 11 === r)
                    for (t = t.firstChild; t; t = t.nextSibling) e(t, n, u);
                else(3 === r || 4 === r) && (t.nodeValue = t.nodeValue.split(n).join(u))
            }, E = function(e, t) {
                for (var n = t.length; --n > -1;) e.push(t[n])
            }, C = function(e, t, n) {
                for (var u; e && e !== t;) {
                    if (u = e._next || e.nextSibling) return u.textContent.charAt(0) === n;
                    e = e.parentNode || e._parent
                }
            }, g = function e(t) {
                var n, u, r = a(t.childNodes),
                    o = r.length;
                for (n = 0; n < o; n++)(u = r[n])._isSplit ? e(u) : n && u.previousSibling && 3 === u.previousSibling.nodeType ? (u.previousSibling.nodeValue += 3 === u.nodeType ? u.nodeValue : u.firstChild.nodeValue, t.removeChild(u)) : 3 !== u.nodeType && (t.insertBefore(u.firstChild, u), t.removeChild(u))
            }, F = function(e, t) {
                return parseFloat(t[e]) || 0
            }, y = function(e, t, n, r, o, i, l) {
                var a, D, c, s, f, h, y, v, b, A, x, w, k = p(e),
                    O = F("paddingLeft", k),
                    B = -999,
                    _ = F("borderBottomWidth", k) + F("borderTopWidth", k),
                    S = F("borderLeftWidth", k) + F("borderRightWidth", k),
                    N = F("paddingTop", k) + F("paddingBottom", k),
                    T = F("paddingLeft", k) + F("paddingRight", k),
                    G = F("fontSize", k) * (t.lineThreshold || .2),
                    I = k.textAlign,
                    R = [],
                    P = [],
                    j = [],
                    M = t.wordDelimiter || " ",
                    L = t.tag ? t.tag : t.span ? "span" : "div",
                    V = t.type || t.split || "chars,words,lines",
                    H = o && ~V.indexOf("lines") ? [] : null,
                    W = ~V.indexOf("words"),
                    z = ~V.indexOf("chars"),
                    U = d(t),
                    Z = t.linesClass,
                    $ = ~(Z || "").indexOf("++"),
                    q = [],
                    X = "flex" === k.display,
                    Y = e.style.display;
                for ($ && (Z = Z.split("++").join("")), X && (e.style.display = "block"), c = (D = e.getElementsByTagName("*")).length, f = [], a = 0; a < c; a++) f[a] = D[a];
                if (H || U)
                    for (a = 0; a < c; a++)((h = (s = f[a]).parentNode === e) || U || z && !W) && (w = s.offsetTop, H && h && Math.abs(w - B) > G && ("BR" !== s.nodeName || 0 === a) && (y = [], H.push(y), B = w), U && (s._x = s.offsetLeft, s._y = w, s._w = s.offsetWidth, s._h = s.offsetHeight), H && ((s._isSplit && h || !z && h || W && h || !W && s.parentNode.parentNode === e && !s.parentNode._isSplit) && (y.push(s), s._x -= O, C(s, e, M) && (s._wordEnd = !0)), "BR" === s.nodeName && (s.nextSibling && "BR" === s.nextSibling.nodeName || 0 === a) && H.push([])));
                for (a = 0; a < c; a++) {
                    if (h = (s = f[a]).parentNode === e, "BR" === s.nodeName) {
                        H || U ? (s.parentNode && s.parentNode.removeChild(s), f.splice(a--, 1), c--) : W || e.appendChild(s);
                        continue
                    }
                    if (U && (b = s.style, W || h || (s._x += s.parentNode._x, s._y += s.parentNode._y), b.left = s._x + "px", b.top = s._y + "px", b.position = "absolute", b.display = "block", b.width = s._w + 1 + "px", b.height = s._h + "px"), !W && z) {
                        if (s._isSplit)
                            for (s._next = D = s.nextSibling, s.parentNode.appendChild(s); D && 3 === D.nodeType && " " === D.textContent;) s._next = D.nextSibling, s.parentNode.appendChild(D), D = D.nextSibling;
                        else s.parentNode._isSplit ? (s._parent = s.parentNode, !s.previousSibling && s.firstChild && (s.firstChild._isFirst = !0), s.nextSibling && " " === s.nextSibling.textContent && !s.nextSibling.nextSibling && q.push(s.nextSibling), s._next = s.nextSibling && s.nextSibling._isFirst ? null : s.nextSibling, s.parentNode.removeChild(s), f.splice(a--, 1), c--) : h || (w = !s.nextSibling && C(s.parentNode, e, M), s.parentNode._parent && s.parentNode._parent.appendChild(s), w && s.parentNode.appendChild(u.createTextNode(" ")), "span" === L && (s.style.display = "inline"), R.push(s))
                    } else s.parentNode._isSplit && !s._isSplit && "" !== s.innerHTML ? P.push(s) : z && !s._isSplit && ("span" === L && (s.style.display = "inline"), R.push(s))
                }
                for (a = q.length; --a > -1;) q[a].parentNode.removeChild(q[a]);
                if (H) {
                    for (U && (A = u.createElement(L), e.appendChild(A), x = A.offsetWidth + "px", w = A.offsetParent === e ? 0 : e.offsetLeft, e.removeChild(A)), b = e.style.cssText, e.style.cssText = "display:none;"; e.firstChild;) e.removeChild(e.firstChild);
                    for (a = 0, v = " " === M && (!U || !W && !z); a < H.length; a++) {
                        for (y = H[a], (A = u.createElement(L)).style.cssText = "display:block;text-align:" + I + ";position:" + (U ? "absolute;" : "relative;"), Z && (A.className = Z + ($ ? a + 1 : "")), j.push(A), c = y.length, D = 0; D < c; D++) "BR" !== y[D].nodeName && (s = y[D], A.appendChild(s), v && s._wordEnd && A.appendChild(u.createTextNode(" ")), U && (0 === D && (A.style.top = s._y + "px", A.style.left = O + w + "px"), s.style.top = "0px", w && (s.style.left = s._x - w + "px")));
                        0 === c ? A.innerHTML = "&nbsp;" : W || z || (g(A), m(A, String.fromCharCode(160), " ")), U && (A.style.width = x, A.style.height = s._h + "px"), e.appendChild(A)
                    }
                    e.style.cssText = b
                }
                U && (l > e.clientHeight && (e.style.height = l - N + "px", e.clientHeight < l && (e.style.height = l + _ + "px")), i > e.clientWidth && (e.style.width = i - T + "px", e.clientWidth < i && (e.style.width = i + S + "px"))), X && (Y ? e.style.display = Y : e.style.removeProperty("display")), E(n, R), W && E(r, P), E(o, j)
            }, v = function(e, t, r, o) {
                var i, l, a, s, p, h, E, C, g = t.tag ? t.tag : t.span ? "span" : "div",
                    F = ~(t.type || t.split || "chars,words,lines").indexOf("chars"),
                    y = d(t),
                    v = t.wordDelimiter || " ",
                    b = " " !== v ? "" : y ? "&#173; " : " ",
                    A = "</" + g + ">",
                    x = 1,
                    w = t.specialChars ? "function" == typeof t.specialChars ? t.specialChars : f : null,
                    k = u.createElement("div"),
                    O = e.parentNode;
                for (O.insertBefore(k, e), k.textContent = e.nodeValue, O.removeChild(e), E = -1 !== (i = function e(t) {
                        var n = t.nodeType,
                            u = "";
                        if (1 === n || 9 === n || 11 === n) {
                            if ("string" == typeof t.textContent) return t.textContent;
                            for (t = t.firstChild; t; t = t.nextSibling) u += e(t)
                        } else if (3 === n || 4 === n) return t.nodeValue;
                        return u
                    }(e = k)).indexOf("<"), !1 !== t.reduceWhiteSpace && (i = i.replace(c, " ").replace(D, "")), E && (i = i.split("<").join("{{LT}}")), p = i.length, l = (" " === i.charAt(0) ? b : "") + r(), a = 0; a < p; a++)
                    if (h = i.charAt(a), w && (C = w(i.substr(a), t.specialChars))) h = i.substr(a, C || 1), l += F && " " !== h ? o() + h + "</" + g + ">" : h, a += C - 1;
                    else if (h === v && i.charAt(a - 1) !== v && a) {
                    for (l += x ? A : "", x = 0; i.charAt(a + 1) === v;) l += b, a++;
                    a === p - 1 ? l += b : ")" !== i.charAt(a + 1) && (l += b + r(), x = 1)
                } else "{" === h && "{{LT}}" === i.substr(a, 6) ? (l += F ? o() + "{{LT}}</" + g + ">" : "{{LT}}", a += 5) : h.charCodeAt(0) >= 55296 && 56319 >= h.charCodeAt(0) || i.charCodeAt(a + 1) >= 65024 && 65039 >= i.charCodeAt(a + 1) ? (s = ((i.substr(a, 12).split(n) || [])[1] || "").length || 2, l += F && " " !== h ? o() + i.substr(a, s) + "</" + g + ">" : i.substr(a, s), a += s - 1) : l += F && " " !== h ? o() + h + "</" + g + ">" : h;
                e.outerHTML = l + (x ? A : ""), E && m(O, "{{LT}}", "<")
            }, b = function e(t, n, u, r) {
                var o, i, l = a(t.childNodes),
                    D = l.length,
                    c = d(n);
                if (3 !== t.nodeType || D > 1) {
                    for (o = 0, n.absolute = !1; o < D; o++)(i = l[o])._next = i._isFirst = i._parent = i._wordEnd = null, (3 !== i.nodeType || /\S+/.test(i.nodeValue)) && (c && 3 !== i.nodeType && "inline" === p(i).display && (i.style.display = "inline-block", i.style.position = "relative"), i._isSplit = !0, e(i, n, u, r));
                    n.absolute = c, t._isSplit = !0;
                    return
                }
                v(t, n, u, r)
            }, (A = function() {
                function e(e, t) {
                    o || s(), this.elements = a(e), this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = t || {}, l(this), this.split(t)
                }
                var t = e.prototype;
                return t.split = function(e) {
                    this.isSplit && this.revert(), this.vars = e = e || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
                    for (var t, n, u, r = this.elements.length, o = e.tag ? e.tag : e.span ? "span" : "div", i = h(e.wordsClass, o), l = h(e.charsClass, o); --r > -1;) u = this.elements[r], this._originals[r] = u.innerHTML, t = u.clientHeight, n = u.clientWidth, b(u, e, i, l), y(u, e, this.chars, this.words, this.lines, n, t);
                    return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this
                }, t.revert = function() {
                    var e = this._originals;
                    if (!e) throw "revert() call wasn't scoped properly.";
                    return this.elements.forEach(function(t, n) {
                        return t.innerHTML = e[n]
                    }), this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
                }, e.create = function(t, n) {
                    return new e(t, n)
                }, e
            }()).version = "3.11.5", A.register = s, t.SplitText = A, t.default = A, Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        9680: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            let u = {
                active: !0,
                breakpoints: {},
                delay: 4e3,
                jump: !1,
                playOnInit: !0,
                stopOnInteraction: !0,
                stopOnMouseEnter: !1,
                stopOnLastSnap: !1,
                rootNode: null
            };

            function r(e = {}) {
                let t, n, o;
                let i = 0,
                    l = !1;

                function a() {
                    n.off("pointerDown", o), t.stopOnInteraction || n.off("pointerUp", s), c(), i = 0
                }

                function D(e) {
                    c(), void 0 !== e && (l = e), i = window.setTimeout(p, t.delay)
                }

                function c() {
                    i && window.clearTimeout(i)
                }

                function s() {
                    i && (c(), D())
                }

                function p() {
                    let {
                        index: e
                    } = n.internalEngine(), u = n.scrollSnapList().length - 1, r = t.stopOnLastSnap && e.get() === u;
                    if (r) return a();
                    n.canScrollNext() ? n.scrollNext(l) : n.scrollTo(0, l), D()
                }
                return {
                    name: "autoplay",
                    options: e,
                    init: function(i, p) {
                        n = i;
                        let {
                            mergeOptions: d,
                            optionsAtMedia: f
                        } = p, h = d(u, r.globalOptions), m = d(h, e);
                        l = (t = f(m)).jump, o = t.stopOnInteraction ? a : c;
                        let {
                            eventStore: E,
                            ownerDocument: C,
                            ownerWindow: g
                        } = n.internalEngine(), F = n.rootNode(), y = t.rootNode && t.rootNode(F) || F;
                        n.on("pointerDown", o), t.stopOnInteraction || n.on("pointerUp", s), t.stopOnMouseEnter && (E.add(y, "mouseenter", o), t.stopOnInteraction || E.add(y, "mouseleave", s)), E.add(C, "visibilitychange", () => {
                            if ("hidden" === C.visibilityState) return c();
                            s()
                        }), E.add(g, "pagehide", e => {
                            e.persisted && c()
                        }), t.playOnInit && D()
                    },
                    destroy: a,
                    play: D,
                    stop: c,
                    reset: s
                }
            }
            r.globalOptions = void 0
        },
        8771: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return A
                }
            });
            var u = n(959);

            function r(e) {
                return "[object Object]" === Object.prototype.toString.call(e) || Array.isArray(e)
            }

            function o(e, t) {
                let n = Object.keys(e),
                    u = Object.keys(t);
                if (n.length !== u.length) return !1;
                let i = JSON.stringify(Object.keys(e.breakpoints || {})),
                    l = JSON.stringify(Object.keys(t.breakpoints || {}));
                return i === l && n.every(n => {
                    let u = e[n],
                        i = t[n];
                    return "function" == typeof u ? `${u}` == `${i}` : r(u) && r(i) ? o(u, i) : u === i
                })
            }

            function i(e) {
                return e.concat().sort((e, t) => e.name > t.name ? 1 : -1).map(e => e.options)
            }

            function l(e) {
                return "number" == typeof e
            }

            function a(e) {
                return "string" == typeof e
            }

            function D(e) {
                return "boolean" == typeof e
            }

            function c(e) {
                return "[object Object]" === Object.prototype.toString.call(e)
            }

            function s(e) {
                return Math.abs(e)
            }

            function p(e) {
                return Math.sign(e)
            }

            function d(e) {
                return m(e).map(Number)
            }

            function f(e) {
                return e[h(e)]
            }

            function h(e) {
                return Math.max(0, e.length - 1)
            }

            function m(e) {
                return Object.keys(e)
            }

            function E(e, t) {
                return void 0 !== t.MouseEvent && e instanceof t.MouseEvent
            }

            function C(e, t) {
                let n = s(e - t);

                function u(n) {
                    return n < e || n > t
                }
                return {
                    length: n,
                    max: t,
                    min: e,
                    constrain: function(n) {
                        return u(n) ? n < e ? e : t : n
                    },
                    reachedAny: u,
                    reachedMax: function(e) {
                        return e > t
                    },
                    reachedMin: function(t) {
                        return t < e
                    },
                    removeOffset: function(e) {
                        return n ? e - n * Math.ceil((e - t) / n) : e
                    }
                }
            }

            function g() {
                let e = [],
                    t = {
                        add: function(n, u, r, o = {
                            passive: !0
                        }) {
                            return n.addEventListener(u, r, o), e.push(() => n.removeEventListener(u, r, o)), t
                        },
                        clear: function() {
                            e = e.filter(e => e())
                        }
                    };
                return t
            }

            function F(e) {
                let t = e;

                function n(e) {
                    return l(e) ? e : e.get()
                }
                return {
                    get: function() {
                        return t
                    },
                    set: function(e) {
                        t = n(e)
                    },
                    add: function(e) {
                        t += n(e)
                    },
                    subtract: function(e) {
                        t -= n(e)
                    }
                }
            }

            function y(e, t, n) {
                let u = "x" === e.scroll ? function(e) {
                        return `translate3d(${e}px,0px,0px)`
                    } : function(e) {
                        return `translate3d(0px,${e}px,0px)`
                    },
                    r = n.style,
                    o = !1;
                return {
                    clear: function() {
                        o || (r.transform = "", n.getAttribute("style") || n.removeAttribute("style"))
                    },
                    to: function(e) {
                        o || (r.transform = u(t.apply(e)))
                    },
                    toggleActive: function(e) {
                        o = !e
                    }
                }
            }
            let v = {
                align: "center",
                axis: "x",
                container: null,
                slides: null,
                containScroll: null,
                direction: "ltr",
                slidesToScroll: 1,
                breakpoints: {},
                dragFree: !1,
                dragThreshold: 10,
                inViewThreshold: 0,
                loop: !1,
                skipSnaps: !1,
                duration: 25,
                startIndex: 0,
                active: !0,
                watchDrag: !0,
                watchResize: !0,
                watchSlides: !0
            };

            function b(e, t, n) {
                let u, r, o, i, A;
                let x = e.ownerDocument,
                    w = x.defaultView,
                    k = function(e) {
                        function t(e, t) {
                            return function e(t, n) {
                                return [t, n].reduce((t, n) => (m(n).forEach(u => {
                                    let r = t[u],
                                        o = n[u],
                                        i = c(r) && c(o);
                                    t[u] = i ? e(r, o) : o
                                }), t), {})
                            }(e, t || {})
                        }
                        return {
                            mergeOptions: t,
                            optionsAtMedia: function(n) {
                                let u = n.breakpoints || {},
                                    r = m(u).filter(t => e.matchMedia(t).matches).map(e => u[e]).reduce((e, n) => t(e, n), {});
                                return t(n, r)
                            },
                            optionsMediaQueries: function(t) {
                                return t.map(e => m(e.breakpoints || {})).reduce((e, t) => e.concat(t), []).map(e.matchMedia)
                            }
                        }
                    }(w),
                    O = (A = [], {
                        init: function(e, t) {
                            return (A = e.filter(({
                                options: e
                            }) => !1 !== k.optionsAtMedia(e).active)).forEach(e => e.init(t, k)), e.reduce((e, t) => Object.assign(e, {
                                [t.name]: t
                            }), {})
                        },
                        destroy: function() {
                            A = A.filter(e => e.destroy())
                        }
                    }),
                    B = g(),
                    _ = g(),
                    S = function() {
                        let e;
                        let t = {},
                            n = {
                                init: function(t) {
                                    e = t
                                },
                                emit: function(u) {
                                    return (t[u] || []).forEach(t => t(e, u)), n
                                },
                                off: function(e, u) {
                                    return t[e] = (t[e] || []).filter(e => e !== u), n
                                },
                                on: function(e, u) {
                                    return t[e] = (t[e] || []).concat([u]), n
                                }
                            };
                        return n
                    }(),
                    {
                        animationRealms: N
                    } = b,
                    {
                        mergeOptions: T,
                        optionsAtMedia: G,
                        optionsMediaQueries: I
                    } = k,
                    {
                        on: R,
                        off: P,
                        emit: j
                    } = S,
                    M = !1,
                    L = T(v, b.globalOptions),
                    V = T(L),
                    H = [];

                function W(t, n) {
                    if (M) return;
                    let c = N.find(e => e.window === w),
                        m = c || function(e) {
                            let t = 1e3 / 60,
                                n = [],
                                u = null,
                                r = 0,
                                o = 0;

                            function i(l) {
                                u || (u = l);
                                let a = l - u;
                                for (u = l, r += a; r >= t;) n.forEach(({
                                    animation: e
                                }) => e.update()), r -= t;
                                let D = s(r / t);
                                n.forEach(({
                                    animation: e
                                }) => e.render(D)), o && e.requestAnimationFrame(i)
                            }
                            return {
                                start: function(t) {
                                    n.includes(t) || n.push(t), o || (o = e.requestAnimationFrame(i))
                                },
                                stop: function(t) {
                                    (n = n.filter(e => e !== t)).length || (e.cancelAnimationFrame(o), u = null, r = 0, o = 0)
                                },
                                reset: function() {
                                    u = null, r = 0
                                },
                                window: e
                            }
                        }(w);
                    if (c || N.push(m), V = G(L = T(L, t)), H = n || H, ! function() {
                            let {
                                container: t,
                                slides: n
                            } = V, u = a(t) ? e.querySelector(t) : t;
                            o = u || e.children[0];
                            let r = a(n) ? o.querySelectorAll(n) : n;
                            i = [].slice.call(r || o.children)
                        }(), u = function(e, t, n, u, r, o, i, a) {
                            let c, m;
                            let {
                                align: v,
                                axis: b,
                                direction: A,
                                startIndex: x,
                                inViewThreshold: w,
                                loop: k,
                                duration: O,
                                dragFree: B,
                                dragThreshold: _,
                                slidesToScroll: S,
                                skipSnaps: N,
                                containScroll: T
                            } = o, G = t.getBoundingClientRect(), I = n.map(e => e.getBoundingClientRect()), R = function(e) {
                                let t = "rtl" === e ? -1 : 1;
                                return {
                                    apply: function(e) {
                                        return e * t
                                    }
                                }
                            }(A), P = function(e, t) {
                                let n = "y" === e ? "y" : "x";
                                return {
                                    scroll: n,
                                    cross: "y" === e ? "x" : "y",
                                    startEdge: "y" === n ? "top" : "rtl" === t ? "right" : "left",
                                    endEdge: "y" === n ? "bottom" : "rtl" === t ? "left" : "right",
                                    measureSize: function(e) {
                                        let {
                                            width: t,
                                            height: u
                                        } = e;
                                        return "x" === n ? t : u
                                    }
                                }
                            }(b, A), j = P.measureSize(G), M = {
                                measure: function(e) {
                                    return j * (e / 100)
                                }
                            }, L = function(e, t) {
                                let n = {
                                    start: function() {
                                        return 0
                                    },
                                    center: function(e) {
                                        return (t - e) / 2
                                    },
                                    end: function(e) {
                                        return t - e
                                    }
                                };
                                return {
                                    measure: function(u) {
                                        return l(e) ? t * Number(e) : n[e](u)
                                    }
                                }
                            }(v, j), V = !k && !!T, H = k || !!T, {
                                slideSizes: W,
                                slideSizesWithGaps: z
                            } = function(e, t, n, u, r, o) {
                                let {
                                    measureSize: i,
                                    startEdge: l,
                                    endEdge: a
                                } = e, D = n[0] && r, c = function() {
                                    if (!D) return 0;
                                    let e = n[0];
                                    return s(t[l] - e[l])
                                }(), p = function() {
                                    if (!D) return 0;
                                    let e = o.getComputedStyle(f(u));
                                    return parseFloat(e.getPropertyValue(`margin-${a}`))
                                }(), d = n.map(i), m = n.map((e, t, n) => {
                                    let u = t === h(n);
                                    return t ? u ? d[t] + p : n[t + 1][l] - e[l] : d[t] + c
                                }).map(s);
                                return {
                                    slideSizes: d,
                                    slideSizesWithGaps: m
                                }
                            }(P, G, I, n, H, r), U = function(e, t, n) {
                                let u = l(n);
                                return {
                                    groupSlides: function(r) {
                                        return u ? d(r).filter(e => e % n == 0).map(e => r.slice(e, e + n)) : d(r).reduce((n, u) => {
                                            let r = t.slice(f(n), u + 1),
                                                o = r.reduce((e, t) => e + t, 0);
                                            return !u || o > e ? n.concat(u) : n
                                        }, []).map((e, t, n) => r.slice(e, n[t + 1]))
                                    }
                                }
                            }(j, z, S), {
                                snaps: Z,
                                snapsAligned: $
                            } = function(e, t, n, u, r, o, i) {
                                let {
                                    startEdge: l,
                                    endEdge: a
                                } = e, {
                                    groupSlides: D
                                } = o, c = D(u).map(e => f(e)[a] - e[0][l]).map(s).map(t.measure), p = u.map(e => n[l] - e[l]).map(e => -s(e)), d = function() {
                                    let e = f(p) - f(r);
                                    return D(p).map(e => e[0]).map((t, n, u) => {
                                        let r = n === h(u);
                                        return i && !n ? 0 : i && r ? e : t + c[n]
                                    })
                                }();
                                return {
                                    snaps: p,
                                    snapsAligned: d
                                }
                            }(P, L, G, I, z, U, V), q = -f(Z) + f(z), {
                                snapsContained: X
                            } = function(e, t, n, u) {
                                let r = C(-t + e, n[0]),
                                    o = n.map(r.constrain).map(e => parseFloat(e.toFixed(3))),
                                    i = function() {
                                        if (t <= e) return [r.max];
                                        if ("keepSnaps" === u) return o;
                                        let {
                                            min: n,
                                            max: i
                                        } = function() {
                                            let e = o[0],
                                                t = f(o),
                                                n = o.lastIndexOf(e),
                                                u = o.indexOf(t) + 1;
                                            return C(n, u)
                                        }();
                                        return o.slice(n, i)
                                    }();
                                return {
                                    snapsContained: i
                                }
                            }(j, q, $, T), Y = V ? X : $, {
                                limit: J
                            } = function(e, t, n) {
                                let u = t[0],
                                    r = n ? u - e : f(t),
                                    o = C(r, u);
                                return {
                                    limit: o
                                }
                            }(q, Y, k), K = function e(t, n, u) {
                                let {
                                    constrain: r
                                } = C(0, t), o = t + 1, i = l(n);

                                function l(e) {
                                    return u ? s((o + e) % o) : r(e)
                                }

                                function a() {
                                    return e(t, i, u)
                                }
                                let D = {
                                    get: function() {
                                        return i
                                    },
                                    set: function(e) {
                                        return i = l(e), D
                                    },
                                    add: function(e) {
                                        return a().set(i + e)
                                    },
                                    clone: a
                                };
                                return D
                            }(h(Y), x, k), Q = K.clone(), ee = d(n), et = ({
                                dragHandler: e,
                                scrollBody: t,
                                scrollBounds: n,
                                scrollLooper: u,
                                slideLooper: r,
                                eventHandler: o,
                                animation: i,
                                options: {
                                    loop: l
                                }
                            }) => {
                                let a = e.pointerDown();
                                l || n.constrain(a);
                                let D = t.seek().settled();
                                D && !a && (i.stop(), o.emit("settle")), D || o.emit("scroll"), l && (u.loop(t.direction()), r.loop())
                            }, en = ({
                                scrollBody: e,
                                translate: t,
                                location: n
                            }, u) => {
                                let r = e.velocity(),
                                    o = n.get() - r + r * u;
                                t.to(o)
                            }, eu = {
                                update: () => et(es),
                                render: e => en(es, e),
                                start: () => a.start(es),
                                stop: () => a.stop(es)
                            }, er = Y[K.get()], eo = F(er), ei = F(er), el = function(e, t, n, u) {
                                let r = !0,
                                    o = 0,
                                    i = 0,
                                    l = n,
                                    a = u;

                                function D(e) {
                                    return l = e, d
                                }

                                function c(e) {
                                    return a = e, d
                                }
                                let d = {
                                    direction: function() {
                                        return i
                                    },
                                    seek: function() {
                                        let n = t.get() - e.get(),
                                            u = !a || !l;
                                        return u ? (o = 0, e.set(t)) : (o += n / l, o *= a, e.add(o)), i = p(o || n), r = .001 > s(n), d
                                    },
                                    settled: function() {
                                        return r && e.set(t), r
                                    },
                                    useBaseFriction: function() {
                                        return c(u)
                                    },
                                    useBaseDuration: function() {
                                        return D(n)
                                    },
                                    useFriction: c,
                                    useDuration: D,
                                    velocity: function() {
                                        return o
                                    }
                                };
                                return d
                            }(eo, ei, O, .68), ea = function(e, t, n, u, r) {
                                let {
                                    reachedAny: o,
                                    removeOffset: i,
                                    constrain: l
                                } = u;

                                function a(e) {
                                    return e.concat().sort((e, t) => s(e) - s(t))[0]
                                }

                                function D(t, u) {
                                    let r = [t, t + n, t - n];
                                    if (!e) return r[0];
                                    if (!u) return a(r);
                                    let o = r.filter(e => p(e) === u);
                                    return a(o)
                                }
                                return {
                                    byDistance: function(n, u) {
                                        let a = r.get() + n,
                                            {
                                                index: c,
                                                distance: p
                                            } = function(n) {
                                                let u = e ? i(n) : l(n),
                                                    r = t.map(e => e - u).map(e => D(e, 0)).map((e, t) => ({
                                                        diff: e,
                                                        index: t
                                                    })).sort((e, t) => s(e.diff) - s(t.diff)),
                                                    {
                                                        index: o
                                                    } = r[0];
                                                return {
                                                    index: o,
                                                    distance: u
                                                }
                                            }(a),
                                            d = !e && o(a);
                                        if (!u || d) return {
                                            index: c,
                                            distance: n
                                        };
                                        let f = t[c] - p,
                                            h = n + D(f, 0);
                                        return {
                                            index: c,
                                            distance: h
                                        }
                                    },
                                    byIndex: function(e, n) {
                                        let u = t[e] - r.get(),
                                            o = D(u, n);
                                        return {
                                            index: e,
                                            distance: o
                                        }
                                    },
                                    shortcut: D
                                }
                            }(k, Y, q, J, ei), eD = function(e, t, n, u, r, o) {
                                function i(u) {
                                    let i = u.distance,
                                        l = u.index !== t.get();
                                    i && (e.start(), r.add(i)), l && (n.set(t.get()), t.set(u.index), o.emit("select"))
                                }
                                return {
                                    distance: function(e, t) {
                                        let n = u.byDistance(e, t);
                                        i(n)
                                    },
                                    index: function(e, n) {
                                        let r = t.clone().set(e),
                                            o = u.byIndex(r.get(), n);
                                        i(o)
                                    }
                                }
                            }(eu, K, Q, ea, ei, i), ec = function(e, t, n, u, r, o, i) {
                                let {
                                    removeOffset: l,
                                    constrain: a
                                } = r, D = o ? [0, t, -t] : [0], c = s(D, i);

                                function s(t, r) {
                                    let o = t || D,
                                        i = function(e) {
                                            let t = e || 0;
                                            return n.map(e => {
                                                let n = C(.5, e - .5);
                                                return n.constrain(e * t)
                                            })
                                        }(r);
                                    return o.reduce((t, r) => {
                                        let o = u.map((t, u) => ({
                                            start: t - n[u] + i[u] + r,
                                            end: t + e - i[u] + r,
                                            index: u
                                        }));
                                        return t.concat(o)
                                    }, [])
                                }
                                return {
                                    check: function(e, t) {
                                        let n = o ? l(e) : a(e);
                                        return (t || c).reduce((e, t) => {
                                            let {
                                                index: u,
                                                start: r,
                                                end: o
                                            } = t, i = e.includes(u);
                                            return !i && r < n && o > n ? e.concat([u]) : e
                                        }, [])
                                    },
                                    findSlideBounds: s
                                }
                            }(j, q, W, Z, J, k, w), es = {
                                ownerDocument: u,
                                ownerWindow: r,
                                eventHandler: i,
                                containerRect: G,
                                slideRects: I,
                                animation: eu,
                                axis: P,
                                direction: R,
                                dragHandler: function(e, t, n, u, r, o, i, l, a, c, d, f, h, m, F, y, v, b, A) {
                                    let {
                                        cross: x
                                    } = e, w = ["INPUT", "SELECT", "TEXTAREA"], k = {
                                        passive: !1
                                    }, O = g(), B = g(), _ = C(50, 225).constrain(F.measure(20)), S = {
                                        mouse: 300,
                                        touch: 400
                                    }, N = {
                                        mouse: 500,
                                        touch: 600
                                    }, T = y ? 43 : 25, G = !1, I = 0, R = 0, P = !1, j = !1, M = !1, L = !1;

                                    function V(e) {
                                        let n = i.readPoint(e),
                                            u = i.readPoint(e, x),
                                            r = s(n - I),
                                            l = s(u - R);
                                        if (!j && !L && (!e.cancelable || !(j = r > l))) return H(e);
                                        let D = i.pointerMove(e);
                                        r > v && (M = !0), d.useFriction(.3).useDuration(1), a.start(), o.add(t.apply(D)), e.preventDefault()
                                    }

                                    function H(e) {
                                        let n = f.byDistance(0, !1),
                                            u = n.index !== h.get(),
                                            r = i.pointerUp(e) * function() {
                                                let e = y ? N : S,
                                                    t = L ? "mouse" : "touch";
                                                return e[t]
                                            }(),
                                            o = function(e, t) {
                                                let n = h.add(-1 * p(e)),
                                                    u = f.byDistance(e, !y).distance;
                                                return y || s(e) < _ ? u : b && t ? .5 * u : f.byIndex(n.get(), 0).distance
                                            }(t.apply(r), u),
                                            l = function(e, t) {
                                                var n, u;
                                                if (0 === e || 0 === t || s(e) <= s(t)) return 0;
                                                let r = (n = s(e), u = s(t), s(n - u));
                                                return s(r / e)
                                            }(r, o);
                                        j = !1, P = !1, B.clear(), d.useDuration(T - 10 * l).useFriction(.68 + l / 50), c.distance(o, !y), L = !1, m.emit("pointerUp")
                                    }

                                    function W(e) {
                                        M && (e.stopPropagation(), e.preventDefault())
                                    }
                                    return {
                                        init: function(e, t) {
                                            t && O.add(n, "dragstart", e => e.preventDefault(), k).add(n, "touchmove", () => void 0, k).add(n, "touchend", () => void 0).add(n, "touchstart", a).add(n, "mousedown", a).add(n, "touchcancel", H).add(n, "contextmenu", H).add(n, "click", W, !0);

                                            function a(a) {
                                                (D(t) || t(e, a)) && function(e) {
                                                    let t = E(e, r);
                                                    L = t, (!t || 0 === e.button) && ! function(e) {
                                                        let t = e.nodeName || "";
                                                        return w.includes(t)
                                                    }(e.target) && (M = y && t && !e.buttons && G, G = s(o.get() - l.get()) >= 2, P = !0, i.pointerDown(e), d.useFriction(0).useDuration(0), o.set(l), function() {
                                                        let e = L ? u : n;
                                                        B.add(e, "touchmove", V, k).add(e, "touchend", H).add(e, "mousemove", V, k).add(e, "mouseup", H)
                                                    }(), I = i.readPoint(e), R = i.readPoint(e, x), m.emit("pointerDown"))
                                                }(a)
                                            }
                                        },
                                        pointerDown: function() {
                                            return P
                                        },
                                        destroy: function() {
                                            O.clear(), B.clear()
                                        }
                                    }
                                }(P, R, e, u, r, ei, function(e, t) {
                                    let n, u;

                                    function r(e) {
                                        return e.timeStamp
                                    }

                                    function o(n, u) {
                                        let r = u || e.scroll,
                                            o = `client${"x"===r?"X":"Y"}`;
                                        return (E(n, t) ? n : n.touches[0])[o]
                                    }
                                    return {
                                        pointerDown: function(e) {
                                            return n = e, u = e, o(e)
                                        },
                                        pointerMove: function(e) {
                                            let t = o(e) - o(u),
                                                i = r(e) - r(n) > 170;
                                            return u = e, i && (n = e), t
                                        },
                                        pointerUp: function(e) {
                                            if (!n || !u) return 0;
                                            let t = o(u) - o(n),
                                                i = r(e) - r(n),
                                                l = r(e) - r(u) > 170,
                                                a = t / i,
                                                D = i && !l && s(a) > .1;
                                            return D ? a : 0
                                        },
                                        readPoint: o
                                    }
                                }(P, r), eo, eu, eD, el, ea, K, i, M, B, _, N, 0),
                                eventStore: g(),
                                percentOfView: M,
                                index: K,
                                indexPrevious: Q,
                                limit: J,
                                location: eo,
                                options: o,
                                resizeHandler: function(e, t, n, u) {
                                    let r, o;
                                    let i = [],
                                        l = !1;

                                    function a(e) {
                                        return n.measureSize(e.getBoundingClientRect())
                                    }
                                    return {
                                        init: function(n, c) {
                                            if (!c) return;
                                            o = a(e), i = t.map(a), r = new ResizeObserver(r => {
                                                !l && (D(c) || c(n, r)) && function(r) {
                                                    for (let l of r) {
                                                        let r = l.target === e,
                                                            D = t.indexOf(l.target),
                                                            c = r ? o : i[D],
                                                            s = a(r ? e : t[D]);
                                                        if (c !== s) {
                                                            n.reInit(), u.emit("resize");
                                                            break
                                                        }
                                                    }
                                                }(r)
                                            });
                                            let s = [e].concat(t);
                                            s.forEach(e => r.observe(e))
                                        },
                                        destroy: function() {
                                            r && r.disconnect(), l = !0
                                        }
                                    }
                                }(t, n, P, i),
                                scrollBody: el,
                                scrollBounds: function(e, t, n, u, r) {
                                    let o = r.measure(10),
                                        i = r.measure(50),
                                        l = C(.1, .99),
                                        a = !1;
                                    return {
                                        constrain: function(r) {
                                            if (!(!a && e.reachedAny(n.get()) && e.reachedAny(t.get()))) return;
                                            let D = e.reachedMin(t.get()) ? "min" : "max",
                                                c = s(e[D] - t.get()),
                                                p = n.get() - t.get(),
                                                d = l.constrain(c / i);
                                            n.subtract(p * d), !r && s(p) < o && (n.set(e.constrain(n.get())), u.useDuration(25).useBaseFriction())
                                        },
                                        toggleActive: function(e) {
                                            a = !e
                                        }
                                    }
                                }(J, eo, ei, el, M),
                                scrollLooper: function(e, t, n, u) {
                                    let r = t.min + .1,
                                        o = t.max + .1,
                                        {
                                            reachedMin: i,
                                            reachedMax: l
                                        } = C(r, o);
                                    return {
                                        loop: function(t) {
                                            if (!(1 === t ? l(n.get()) : -1 === t && i(n.get()))) return;
                                            let r = e * (-1 * t);
                                            u.forEach(e => e.add(r))
                                        }
                                    }
                                }(q, J, eo, [eo, ei]),
                                scrollProgress: function(e) {
                                    let {
                                        max: t,
                                        length: n
                                    } = e;
                                    return {
                                        get: function(e) {
                                            return -((e - t) / n)
                                        }
                                    }
                                }(J),
                                scrollSnaps: Y,
                                scrollTarget: ea,
                                scrollTo: eD,
                                slideLooper: function(e, t, n, u, r, o, i, l, a) {
                                    let D = d(r),
                                        c = d(r).reverse(),
                                        s = (function() {
                                            let e = o[0] - 1,
                                                t = f(c, e);
                                            return h(t, "end")
                                        })().concat(function() {
                                            let e = n - o[0] - 1,
                                                t = f(D, e);
                                            return h(t, "start")
                                        }());

                                    function p(e, t) {
                                        return e.reduce((e, t) => e - r[t], t)
                                    }

                                    function f(e, t) {
                                        return e.reduce((e, n) => {
                                            let u = p(e, t);
                                            return u > 0 ? e.concat([n]) : e
                                        }, [])
                                    }

                                    function h(n, r) {
                                        let o = "start" === r,
                                            D = i.findSlideBounds([o ? -u : u]);
                                        return n.map(n => {
                                            let r = o ? 0 : -u,
                                                i = o ? u : 0,
                                                c = D.filter(e => e.index === n)[0],
                                                s = c[o ? "end" : "start"],
                                                p = F(-1),
                                                d = y(e, t, a[n]);
                                            return {
                                                index: n,
                                                location: p,
                                                translate: d,
                                                target: () => l.get() > s ? r : i
                                            }
                                        })
                                    }
                                    return {
                                        canLoop: function() {
                                            return s.every(({
                                                index: e
                                            }) => {
                                                let t = D.filter(t => t !== e);
                                                return .1 >= p(t, n)
                                            })
                                        },
                                        clear: function() {
                                            s.forEach(e => e.translate.clear())
                                        },
                                        loop: function() {
                                            s.forEach(e => {
                                                let {
                                                    target: t,
                                                    translate: n,
                                                    location: u
                                                } = e, r = t();
                                                r !== u.get() && (n.to(r), u.set(r))
                                            })
                                        },
                                        loopPoints: s
                                    }
                                }(P, R, j, q, z, Y, ec, eo, n),
                                slidesHandler: (m = !1, {
                                    init: function(e, n) {
                                        n && (c = new MutationObserver(t => {
                                            !m && (D(n) || n(e, t)) && function(t) {
                                                for (let n of t)
                                                    if ("childList" === n.type) {
                                                        e.reInit(), i.emit("slidesChanged");
                                                        break
                                                    }
                                            }(t)
                                        })).observe(t, {
                                            childList: !0
                                        })
                                    },
                                    destroy: function() {
                                        c && c.disconnect(), m = !0
                                    }
                                }),
                                slidesInView: ec,
                                slideIndexes: ee,
                                slidesToScroll: U,
                                target: ei,
                                translate: y(P, R, t)
                            };
                            return es
                        }(e, o, i, x, w, V, S, m), I([L, ...H.map(({
                            options: e
                        }) => e)]).forEach(e => B.add(e, "change", z)), V.active) {
                        if (u.translate.to(u.location.get()), u.eventHandler.init(X), u.resizeHandler.init(X, V.watchResize), u.slidesHandler.init(X, V.watchSlides), _.add(x, "visibilitychange", () => {
                                x.hidden && m.reset()
                            }), V.loop) {
                            if (!u.slideLooper.canLoop()) {
                                U(), W({
                                    loop: !1
                                }, n), L = T(L, {
                                    loop: !0
                                });
                                return
                            }
                            u.slideLooper.loop()
                        }
                        o.offsetParent && i.length && u.dragHandler.init(X, V.watchDrag), r = O.init(H, X)
                    }
                }

                function z(e, t) {
                    let n = q();
                    U(), W(T({
                        startIndex: n
                    }, e), t), S.emit("reInit")
                }

                function U() {
                    u.dragHandler.destroy(), u.animation.stop(), u.eventStore.clear(), u.translate.clear(), u.slideLooper.clear(), u.resizeHandler.destroy(), u.slidesHandler.destroy(), O.destroy(), B.clear(), _.clear()
                }

                function Z(e) {
                    let t = u[e ? "target" : "location"].get(),
                        n = V.loop ? "removeOffset" : "constrain";
                    return u.slidesInView.check(u.limit[n](t))
                }

                function $(e, t, n) {
                    V.active && !M && (u.scrollBody.useBaseFriction().useDuration(t ? 0 : V.duration), u.scrollTo.index(e, n || 0))
                }

                function q() {
                    return u.index.get()
                }
                let X = {
                    canScrollNext: function() {
                        let e = u.index.add(1).get();
                        return e !== q()
                    },
                    canScrollPrev: function() {
                        let e = u.index.add(-1).get();
                        return e !== q()
                    },
                    containerNode: function() {
                        return o
                    },
                    internalEngine: function() {
                        return u
                    },
                    destroy: function() {
                        M || (M = !0, B.clear(), U(), S.emit("destroy"))
                    },
                    off: P,
                    on: R,
                    emit: j,
                    plugins: function() {
                        return r
                    },
                    previousScrollSnap: function() {
                        return u.indexPrevious.get()
                    },
                    reInit: z,
                    rootNode: function() {
                        return e
                    },
                    scrollNext: function(e) {
                        let t = u.index.add(1).get();
                        $(t, !0 === e, -1)
                    },
                    scrollPrev: function(e) {
                        let t = u.index.add(-1).get();
                        $(t, !0 === e, 1)
                    },
                    scrollProgress: function() {
                        return u.scrollProgress.get(u.location.get())
                    },
                    scrollSnapList: function() {
                        return u.scrollSnaps.map(u.scrollProgress.get)
                    },
                    scrollTo: $,
                    selectedScrollSnap: q,
                    slideNodes: function() {
                        return i
                    },
                    slidesInView: Z,
                    slidesNotInView: function(e) {
                        let t = Z(e);
                        return u.slideIndexes.filter(e => !t.includes(e))
                    }
                };
                return W(t, n), setTimeout(() => S.emit("init"), 0), X
            }

            function A(e = {}, t = []) {
                let n = (0, u.useRef)(e),
                    r = (0, u.useRef)(t),
                    [l, a] = (0, u.useState)(),
                    [D, c] = (0, u.useState)(),
                    s = (0, u.useCallback)(() => {
                        l && l.reInit(n.current, r.current)
                    }, [l]);
                return (0, u.useEffect)(() => {
                    if ("undefined" != typeof window && window.document && window.document.createElement && D) {
                        b.globalOptions = A.globalOptions;
                        let e = b(D, n.current, r.current);
                        return a(e), () => e.destroy()
                    }
                    a(void 0)
                }, [D, a]), (0, u.useEffect)(() => {
                    o(n.current, e) || (n.current = e, s())
                }, [e, s]), (0, u.useEffect)(() => {
                    ! function(e, t) {
                        if (e.length !== t.length) return !1;
                        let n = i(e),
                            u = i(t);
                        return n.every((e, t) => {
                            let n = u[t];
                            return o(e, n)
                        })
                    }(r.current, t) && (r.current = t, s())
                }, [t, s]), [c, l]
            }
            b.animationRealms = [], b.globalOptions = void 0, A.globalOptions = void 0
        },
        4374: function(e, t, n) {
            "use strict";
            n.d(t, {
                PB: function() {
                    return f
                }
            });
            var u = n(959),
                r = n(2056),
                o = n.n(r);

            function i() {
                return (i = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var u in n) Object.prototype.hasOwnProperty.call(n, u) && (e[u] = n[u])
                    }
                    return e
                }).apply(this, arguments)
            }

            function l(e, t) {
                if (null == e) return {};
                var n, u, r = {},
                    o = Object.keys(e);
                for (u = 0; u < o.length; u++) n = o[u], t.indexOf(n) >= 0 || (r[n] = e[n]);
                return r
            }
            var a = ["keyOverride"],
                D = ["crossOrigin"],
                c = {
                    templateTitle: "",
                    noindex: !1,
                    nofollow: !1,
                    defaultOpenGraphImageWidth: 0,
                    defaultOpenGraphImageHeight: 0,
                    defaultOpenGraphVideoWidth: 0,
                    defaultOpenGraphVideoHeight: 0
                },
                s = function(e, t, n) {
                    void 0 === t && (t = []);
                    var r = void 0 === n ? {} : n,
                        o = r.defaultWidth,
                        i = r.defaultHeight;
                    return t.reduce(function(t, n, r) {
                        return t.push(u.createElement("meta", {
                            key: "og:" + e + ":0" + r,
                            property: "og:" + e,
                            content: n.url
                        })), n.alt && t.push(u.createElement("meta", {
                            key: "og:" + e + ":alt0" + r,
                            property: "og:" + e + ":alt",
                            content: n.alt
                        })), n.secureUrl && t.push(u.createElement("meta", {
                            key: "og:" + e + ":secure_url0" + r,
                            property: "og:" + e + ":secure_url",
                            content: n.secureUrl.toString()
                        })), n.type && t.push(u.createElement("meta", {
                            key: "og:" + e + ":type0" + r,
                            property: "og:" + e + ":type",
                            content: n.type.toString()
                        })), n.width ? t.push(u.createElement("meta", {
                            key: "og:" + e + ":width0" + r,
                            property: "og:" + e + ":width",
                            content: n.width.toString()
                        })) : o && t.push(u.createElement("meta", {
                            key: "og:" + e + ":width0" + r,
                            property: "og:" + e + ":width",
                            content: o.toString()
                        })), n.height ? t.push(u.createElement("meta", {
                            key: "og:" + e + ":height" + r,
                            property: "og:" + e + ":height",
                            content: n.height.toString()
                        })) : i && t.push(u.createElement("meta", {
                            key: "og:" + e + ":height" + r,
                            property: "og:" + e + ":height",
                            content: i.toString()
                        })), t
                    }, [])
                },
                p = function(e) {
                    var t, n, r, o, p, d = [];
                    e.titleTemplate && (c.templateTitle = e.titleTemplate);
                    var f = "";
                    e.title ? (f = e.title, c.templateTitle && (f = c.templateTitle.replace(/%s/g, function() {
                        return f
                    }))) : e.defaultTitle && (f = e.defaultTitle), f && d.push(u.createElement("title", {
                        key: "title"
                    }, f));
                    var h = void 0 === e.noindex ? c.noindex || e.dangerouslySetAllPagesToNoIndex : e.noindex,
                        m = void 0 === e.nofollow ? c.nofollow || e.dangerouslySetAllPagesToNoFollow : e.nofollow,
                        E = "";
                    if (e.robotsProps) {
                        var C = e.robotsProps,
                            g = C.nosnippet,
                            F = C.maxSnippet,
                            y = C.maxImagePreview,
                            v = C.maxVideoPreview,
                            b = C.noarchive,
                            A = C.noimageindex,
                            x = C.notranslate,
                            w = C.unavailableAfter;
                        E = (g ? ",nosnippet" : "") + (F ? ",max-snippet:" + F : "") + (y ? ",max-image-preview:" + y : "") + (b ? ",noarchive" : "") + (w ? ",unavailable_after:" + w : "") + (A ? ",noimageindex" : "") + (v ? ",max-video-preview:" + v : "") + (x ? ",notranslate" : "")
                    }
                    if (h || m ? (e.dangerouslySetAllPagesToNoIndex && (c.noindex = !0), e.dangerouslySetAllPagesToNoFollow && (c.nofollow = !0), d.push(u.createElement("meta", {
                            key: "robots",
                            name: "robots",
                            content: (h ? "noindex" : "index") + "," + (m ? "nofollow" : "follow") + E
                        }))) : d.push(u.createElement("meta", {
                            key: "robots",
                            name: "robots",
                            content: "index,follow" + E
                        })), e.description && d.push(u.createElement("meta", {
                            key: "description",
                            name: "description",
                            content: e.description
                        })), e.themeColor && d.push(u.createElement("meta", {
                            key: "theme-color",
                            name: "theme-color",
                            content: e.themeColor
                        })), e.mobileAlternate && d.push(u.createElement("link", {
                            rel: "alternate",
                            key: "mobileAlternate",
                            media: e.mobileAlternate.media,
                            href: e.mobileAlternate.href
                        })), e.languageAlternates && e.languageAlternates.length > 0 && e.languageAlternates.forEach(function(e) {
                            d.push(u.createElement("link", {
                                rel: "alternate",
                                key: "languageAlternate-" + e.hrefLang,
                                hrefLang: e.hrefLang,
                                href: e.href
                            }))
                        }), e.twitter && (e.twitter.cardType && d.push(u.createElement("meta", {
                            key: "twitter:card",
                            name: "twitter:card",
                            content: e.twitter.cardType
                        })), e.twitter.site && d.push(u.createElement("meta", {
                            key: "twitter:site",
                            name: "twitter:site",
                            content: e.twitter.site
                        })), e.twitter.handle && d.push(u.createElement("meta", {
                            key: "twitter:creator",
                            name: "twitter:creator",
                            content: e.twitter.handle
                        }))), e.facebook && e.facebook.appId && d.push(u.createElement("meta", {
                            key: "fb:app_id",
                            property: "fb:app_id",
                            content: e.facebook.appId
                        })), (null != (t = e.openGraph) && t.title || f) && d.push(u.createElement("meta", {
                            key: "og:title",
                            property: "og:title",
                            content: (null == (o = e.openGraph) ? void 0 : o.title) || f
                        })), (null != (n = e.openGraph) && n.description || e.description) && d.push(u.createElement("meta", {
                            key: "og:description",
                            property: "og:description",
                            content: (null == (p = e.openGraph) ? void 0 : p.description) || e.description
                        })), e.openGraph) {
                        if ((e.openGraph.url || e.canonical) && d.push(u.createElement("meta", {
                                key: "og:url",
                                property: "og:url",
                                content: e.openGraph.url || e.canonical
                            })), e.openGraph.type) {
                            var k = e.openGraph.type.toLowerCase();
                            d.push(u.createElement("meta", {
                                key: "og:type",
                                property: "og:type",
                                content: k
                            })), "profile" === k && e.openGraph.profile ? (e.openGraph.profile.firstName && d.push(u.createElement("meta", {
                                key: "profile:first_name",
                                property: "profile:first_name",
                                content: e.openGraph.profile.firstName
                            })), e.openGraph.profile.lastName && d.push(u.createElement("meta", {
                                key: "profile:last_name",
                                property: "profile:last_name",
                                content: e.openGraph.profile.lastName
                            })), e.openGraph.profile.username && d.push(u.createElement("meta", {
                                key: "profile:username",
                                property: "profile:username",
                                content: e.openGraph.profile.username
                            })), e.openGraph.profile.gender && d.push(u.createElement("meta", {
                                key: "profile:gender",
                                property: "profile:gender",
                                content: e.openGraph.profile.gender
                            }))) : "book" === k && e.openGraph.book ? (e.openGraph.book.authors && e.openGraph.book.authors.length && e.openGraph.book.authors.forEach(function(e, t) {
                                d.push(u.createElement("meta", {
                                    key: "book:author:0" + t,
                                    property: "book:author",
                                    content: e
                                }))
                            }), e.openGraph.book.isbn && d.push(u.createElement("meta", {
                                key: "book:isbn",
                                property: "book:isbn",
                                content: e.openGraph.book.isbn
                            })), e.openGraph.book.releaseDate && d.push(u.createElement("meta", {
                                key: "book:release_date",
                                property: "book:release_date",
                                content: e.openGraph.book.releaseDate
                            })), e.openGraph.book.tags && e.openGraph.book.tags.length && e.openGraph.book.tags.forEach(function(e, t) {
                                d.push(u.createElement("meta", {
                                    key: "book:tag:0" + t,
                                    property: "book:tag",
                                    content: e
                                }))
                            })) : "article" === k && e.openGraph.article ? (e.openGraph.article.publishedTime && d.push(u.createElement("meta", {
                                key: "article:published_time",
                                property: "article:published_time",
                                content: e.openGraph.article.publishedTime
                            })), e.openGraph.article.modifiedTime && d.push(u.createElement("meta", {
                                key: "article:modified_time",
                                property: "article:modified_time",
                                content: e.openGraph.article.modifiedTime
                            })), e.openGraph.article.expirationTime && d.push(u.createElement("meta", {
                                key: "article:expiration_time",
                                property: "article:expiration_time",
                                content: e.openGraph.article.expirationTime
                            })), e.openGraph.article.authors && e.openGraph.article.authors.length && e.openGraph.article.authors.forEach(function(e, t) {
                                d.push(u.createElement("meta", {
                                    key: "article:author:0" + t,
                                    property: "article:author",
                                    content: e
                                }))
                            }), e.openGraph.article.section && d.push(u.createElement("meta", {
                                key: "article:section",
                                property: "article:section",
                                content: e.openGraph.article.section
                            })), e.openGraph.article.tags && e.openGraph.article.tags.length && e.openGraph.article.tags.forEach(function(e, t) {
                                d.push(u.createElement("meta", {
                                    key: "article:tag:0" + t,
                                    property: "article:tag",
                                    content: e
                                }))
                            })) : ("video.movie" === k || "video.episode" === k || "video.tv_show" === k || "video.other" === k) && e.openGraph.video && (e.openGraph.video.actors && e.openGraph.video.actors.length && e.openGraph.video.actors.forEach(function(e, t) {
                                e.profile && d.push(u.createElement("meta", {
                                    key: "video:actor:0" + t,
                                    property: "video:actor",
                                    content: e.profile
                                })), e.role && d.push(u.createElement("meta", {
                                    key: "video:actor:role:0" + t,
                                    property: "video:actor:role",
                                    content: e.role
                                }))
                            }), e.openGraph.video.directors && e.openGraph.video.directors.length && e.openGraph.video.directors.forEach(function(e, t) {
                                d.push(u.createElement("meta", {
                                    key: "video:director:0" + t,
                                    property: "video:director",
                                    content: e
                                }))
                            }), e.openGraph.video.writers && e.openGraph.video.writers.length && e.openGraph.video.writers.forEach(function(e, t) {
                                d.push(u.createElement("meta", {
                                    key: "video:writer:0" + t,
                                    property: "video:writer",
                                    content: e
                                }))
                            }), e.openGraph.video.duration && d.push(u.createElement("meta", {
                                key: "video:duration",
                                property: "video:duration",
                                content: e.openGraph.video.duration.toString()
                            })), e.openGraph.video.releaseDate && d.push(u.createElement("meta", {
                                key: "video:release_date",
                                property: "video:release_date",
                                content: e.openGraph.video.releaseDate
                            })), e.openGraph.video.tags && e.openGraph.video.tags.length && e.openGraph.video.tags.forEach(function(e, t) {
                                d.push(u.createElement("meta", {
                                    key: "video:tag:0" + t,
                                    property: "video:tag",
                                    content: e
                                }))
                            }), e.openGraph.video.series && d.push(u.createElement("meta", {
                                key: "video:series",
                                property: "video:series",
                                content: e.openGraph.video.series
                            })))
                        }
                        e.defaultOpenGraphImageWidth && (c.defaultOpenGraphImageWidth = e.defaultOpenGraphImageWidth), e.defaultOpenGraphImageHeight && (c.defaultOpenGraphImageHeight = e.defaultOpenGraphImageHeight), e.openGraph.images && e.openGraph.images.length && d.push.apply(d, s("image", e.openGraph.images, {
                            defaultWidth: c.defaultOpenGraphImageWidth,
                            defaultHeight: c.defaultOpenGraphImageHeight
                        })), e.defaultOpenGraphVideoWidth && (c.defaultOpenGraphVideoWidth = e.defaultOpenGraphVideoWidth), e.defaultOpenGraphVideoHeight && (c.defaultOpenGraphVideoHeight = e.defaultOpenGraphVideoHeight), e.openGraph.videos && e.openGraph.videos.length && d.push.apply(d, s("video", e.openGraph.videos, {
                            defaultWidth: c.defaultOpenGraphVideoWidth,
                            defaultHeight: c.defaultOpenGraphVideoHeight
                        })), e.openGraph.audio && d.push.apply(d, s("audio", e.openGraph.audio)), e.openGraph.locale && d.push(u.createElement("meta", {
                            key: "og:locale",
                            property: "og:locale",
                            content: e.openGraph.locale
                        })), (e.openGraph.siteName || e.openGraph.site_name) && d.push(u.createElement("meta", {
                            key: "og:site_name",
                            property: "og:site_name",
                            content: e.openGraph.siteName || e.openGraph.site_name
                        }))
                    }
                    return e.canonical && d.push(u.createElement("link", {
                        rel: "canonical",
                        href: e.canonical,
                        key: "canonical"
                    })), e.additionalMetaTags && e.additionalMetaTags.length > 0 && e.additionalMetaTags.forEach(function(e) {
                        var t, n, r = e.keyOverride,
                            o = l(e, a);
                        d.push(u.createElement("meta", i({
                            key: "meta:" + (null != (t = null != (n = null != r ? r : o.name) ? n : o.property) ? t : o.httpEquiv)
                        }, o)))
                    }), null != (r = e.additionalLinkTags) && r.length && e.additionalLinkTags.forEach(function(e) {
                        var t, n = e.crossOrigin,
                            r = l(e, D);
                        d.push(u.createElement("link", i({
                            key: "link" + (null != (t = r.keyOverride) ? t : r.href) + r.rel
                        }, r, {
                            crossOrigin: "anonymous" === n || "use-credentials" === n || "" === n ? n : void 0
                        })))
                    }), d
                },
                d = function(e) {
                    return u.createElement(o(), null, p(e))
                },
                f = function(e) {
                    var t = e.title,
                        n = e.themeColor,
                        r = e.noindex,
                        o = e.nofollow,
                        i = e.robotsProps,
                        l = e.description,
                        a = e.canonical,
                        D = e.openGraph,
                        c = e.facebook,
                        s = e.twitter,
                        p = e.additionalMetaTags,
                        f = e.titleTemplate,
                        h = e.defaultTitle,
                        m = e.mobileAlternate,
                        E = e.languageAlternates,
                        C = e.additionalLinkTags;
                    return u.createElement(u.Fragment, null, u.createElement(d, {
                        title: t,
                        themeColor: n,
                        noindex: r,
                        nofollow: o,
                        robotsProps: i,
                        description: l,
                        canonical: a,
                        facebook: c,
                        openGraph: D,
                        additionalMetaTags: p,
                        twitter: s,
                        titleTemplate: f,
                        defaultTitle: h,
                        mobileAlternate: m,
                        languageAlternates: E,
                        additionalLinkTags: C
                    }))
                };
            RegExp("[" + Object.keys(Object.freeze({
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&apos;"
            })).join("") + "]", "g")
        },
        2056: function(e, t, n) {
            e.exports = n(9195)
        },
        3658: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            var u = n(959);

            function r(e, t, n) {
                void 0 === t && (t = 0), void 0 === n && (n = []);
                var r, o, i, l, a, D, c, s = (void 0 === (r = t) && (r = 0), o = (0, u.useRef)(!1), i = (0, u.useRef)(), l = (0, u.useRef)(e), a = (0, u.useCallback)(function() {
                        return o.current
                    }, []), D = (0, u.useCallback)(function() {
                        o.current = !1, i.current && clearTimeout(i.current), i.current = setTimeout(function() {
                            o.current = !0, l.current()
                        }, r)
                    }, [r]), c = (0, u.useCallback)(function() {
                        o.current = null, i.current && clearTimeout(i.current)
                    }, []), (0, u.useEffect)(function() {
                        l.current = e
                    }, [e]), (0, u.useEffect)(function() {
                        return D(), c
                    }, [r]), [a, c, D]),
                    p = s[0],
                    d = s[1],
                    f = s[2];
                return (0, u.useEffect)(f, n), [p, d]
            }
        },
        5706: function(e, t, n) {
            "use strict";
            n.d(t, {
                Bo: function() {
                    return a
                },
                et: function() {
                    return D
                },
                sY: function() {
                    return c
                },
                tw: function() {
                    return l
                }
            });
            var u = n(959);

            function r(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var u = Object.getOwnPropertySymbols(e);
                    t && (u = u.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, u)
                }
                return n
            }

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? r(Object(n), !0).forEach(function(t) {
                        var u;
                        u = n[t], t in e ? Object.defineProperty(e, t, {
                            value: u,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = u
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            let i = ["component"],
                l = "heading",
                a = "blockquote",
                D = "link";

            function c(e, t = {}) {
                if ("object" == typeof e && "doc" === e.type && Array.isArray(e.content)) {
                    let n = t.blokResolvers,
                        r = void 0 === n ? {} : n,
                        l = t.defaultBlokResolver,
                        a = void 0 === l ? function() {
                            return null
                        } : l,
                        D = t.nodeResolvers,
                        c = t.markResolvers,
                        s = t.textResolver,
                        p = void 0 === s ? function(e) {
                            return e
                        } : s,
                        d = o(o({}, f), void 0 === D ? {} : D),
                        m = o(o({}, h), void 0 === c ? {} : c),
                        E = 0,
                        C = function(e) {
                            return u.isValidElement(e) ? u.cloneElement(e, {
                                key: E++
                            }) : e
                        },
                        g = function(e) {
                            let t = e ? e.map(F).filter(function(e) {
                                return null != e
                            }) : null;
                            return Array.isArray(t) && 0 === t.length ? null : t
                        },
                        F = function(e) {
                            if ("blok" === e.type) {
                                let t = e.attrs.body;
                                return t.map(function(e) {
                                    let t = e.component,
                                        n = function(e, t) {
                                            if (null == e) return {};
                                            var n, u, r = function(e, t) {
                                                if (null == e) return {};
                                                var n, u, r = {},
                                                    o = Object.keys(e);
                                                for (u = 0; u < o.length; u++) n = o[u], t.indexOf(n) >= 0 || (r[n] = e[n]);
                                                return r
                                            }(e, t);
                                            if (Object.getOwnPropertySymbols) {
                                                var o = Object.getOwnPropertySymbols(e);
                                                for (u = 0; u < o.length; u++) n = o[u], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                                            }
                                            return r
                                        }(e, i),
                                        u = r[t],
                                        o = u ? u(n) : a(t, n);
                                    return C(o)
                                })
                            } {
                                var t;
                                let n;
                                if ("text" === e.type) n = p(e.text);
                                else {
                                    let t = d[e.type];
                                    n = t ? C(t(g(e.content), e.attrs)) : null
                                }
                                let u = null !== (t = e.marks) && void 0 !== t ? t : [];
                                return u.reduceRight(function(e, t) {
                                    let n = m[t.type];
                                    return n ? C(n(e, t.attrs)) : e
                                }, n)
                            }
                        };
                    return g(e.content)
                }
                if ("string" == typeof e) {
                    let n = t.defaultStringResolver,
                        u = t.textResolver,
                        r = void 0 === u ? function(e) {
                            return e
                        } : u;
                    return (void 0 === n ? function(e) {
                        return e
                    } : n)(r(e))
                }
                return null
            }
            let s = function(e) {
                    return function(t) {
                        return null != t ? u.createElement(e, null, t) : null
                    }
                },
                p = function(e) {
                    return function() {
                        return u.createElement(e)
                    }
                },
                d = function(e) {
                    return function(t) {
                        return u.createElement(e, null, t)
                    }
                },
                f = {
                    [l]: function(e, t) {
                        return u.createElement(`h${t.level}`, null, e)
                    },
                    code_block: function(e, t) {
                        let n = {
                                className: t.class
                            },
                            r = u.createElement("code", n, e);
                        return u.createElement("pre", null, r)
                    },
                    image: function(e, t) {
                        return u.createElement("img", t, e)
                    },
                    paragraph: s("p"),
                    [a]: s("blockquote"),
                    ordered_list: s("ol"),
                    bullet_list: s("ul"),
                    list_item: s("li"),
                    horizontal_rule: p("hr"),
                    hard_break: p("br"),
                    emoji: function(e, t) {
                        if (!t) return null;
                        let n = {
                            "data-type": "emoji",
                            "data-name": t.name,
                            emoji: t.emoji
                        };
                        if (t.emoji || !t.fallbackImage) return u.createElement("span", n, t.emoji); {
                            let e = {
                                    src: t.fallbackImage,
                                    draggable: "false",
                                    loading: "lazy",
                                    align: "absmiddle",
                                    alt: t.name
                                },
                                r = u.createElement("img", e);
                            return u.createElement("span", n, r)
                        }
                    }
                },
                h = {
                    [D]: function(e, t) {
                        let n = t ? {
                            href: "email" === t.linktype ? `mailto:${t.href}` : t.href,
                            target: t.target
                        } : {};
                        return u.createElement("a", n, e)
                    },
                    styled: function(e, t) {
                        let n = t ? {
                            className: t.class
                        } : {};
                        return u.createElement("span", n, e)
                    },
                    bold: d("b"),
                    italic: d("i"),
                    strike: d("s"),
                    underline: d("u"),
                    code: d("code"),
                    subscript: d("sub"),
                    superscript: d("sup"),
                    highlight: function(e, t) {
                        let n = t ? {
                            style: {
                                backgroundColor: t.color
                            }
                        } : {};
                        return u.createElement("span", n, e)
                    },
                    textStyle: function(e, t) {
                        let n = t ? {
                            style: {
                                color: t.color
                            }
                        } : {};
                        return u.createElement("span", n, e)
                    },
                    anchor: function(e, t) {
                        let n = t ? {
                            id: t.id
                        } : {};
                        return u.createElement("span", n, e)
                    }
                }
        },
        795: function(e, t, n) {
            "use strict";

            function u() {
                return (u = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var u in n) Object.prototype.hasOwnProperty.call(n, u) && (e[u] = n[u])
                    }
                    return e
                }).apply(this, arguments)
            }
            n.d(t, {
                Z: function() {
                    return u
                }
            })
        },
        4207: function(e, t, n) {
            "use strict";
            n.d(t, {
                VY: function() {
                    return ed
                },
                h4: function() {
                    return es
                },
                ck: function() {
                    return ec
                },
                fC: function() {
                    return eD
                },
                xz: function() {
                    return ep
                }
            });
            var u = n(795),
                r = n(959),
                o = n.t(r, 2);

            function i(e, t = []) {
                let n = [],
                    u = () => {
                        let t = n.map(e => (0, r.createContext)(e));
                        return function(n) {
                            let u = (null == n ? void 0 : n[e]) || t;
                            return (0, r.useMemo)(() => ({
                                [`__scope${e}`]: { ...n,
                                    [e]: u
                                }
                            }), [n, u])
                        }
                    };
                return u.scopeName = e, [function(t, u) {
                    let o = (0, r.createContext)(u),
                        i = n.length;

                    function l(t) {
                        let {
                            scope: n,
                            children: u,
                            ...l
                        } = t, a = (null == n ? void 0 : n[e][i]) || o, D = (0, r.useMemo)(() => l, Object.values(l));
                        return (0, r.createElement)(a.Provider, {
                            value: D
                        }, u)
                    }
                    return n = [...n, u], l.displayName = t + "Provider", [l, function(n, l) {
                        let a = (null == l ? void 0 : l[e][i]) || o,
                            D = (0, r.useContext)(a);
                        if (D) return D;
                        if (void 0 !== u) return u;
                        throw Error(`\`${n}\` must be used within \`${t}\``)
                    }]
                }, function(...e) {
                    let t = e[0];
                    if (1 === e.length) return t;
                    let n = () => {
                        let n = e.map(e => ({
                            useScope: e(),
                            scopeName: e.scopeName
                        }));
                        return function(e) {
                            let u = n.reduce((t, {
                                useScope: n,
                                scopeName: u
                            }) => {
                                let r = n(e),
                                    o = r[`__scope${u}`];
                                return { ...t,
                                    ...o
                                }
                            }, {});
                            return (0, r.useMemo)(() => ({
                                [`__scope${t.scopeName}`]: u
                            }), [u])
                        }
                    };
                    return n.scopeName = t.scopeName, n
                }(u, ...t)]
            }

            function l(...e) {
                return t => e.forEach(e => {
                    "function" == typeof e ? e(t) : null != e && (e.current = t)
                })
            }

            function a(...e) {
                return (0, r.useCallback)(l(...e), e)
            }
            let D = (0, r.forwardRef)((e, t) => {
                let {
                    children: n,
                    ...o
                } = e, i = r.Children.toArray(n), l = i.find(p);
                if (l) {
                    let e = l.props.children,
                        n = i.map(t => t !== l ? t : r.Children.count(e) > 1 ? r.Children.only(null) : (0, r.isValidElement)(e) ? e.props.children : null);
                    return (0, r.createElement)(c, (0, u.Z)({}, o, {
                        ref: t
                    }), (0, r.isValidElement)(e) ? (0, r.cloneElement)(e, void 0, n) : null)
                }
                return (0, r.createElement)(c, (0, u.Z)({}, o, {
                    ref: t
                }), n)
            });
            D.displayName = "Slot";
            let c = (0, r.forwardRef)((e, t) => {
                let {
                    children: n,
                    ...u
                } = e;
                return (0, r.isValidElement)(n) ? (0, r.cloneElement)(n, { ... function(e, t) {
                        let n = { ...t
                        };
                        for (let u in t) {
                            let r = e[u],
                                o = t[u],
                                i = /^on[A-Z]/.test(u);
                            i ? r && o ? n[u] = (...e) => {
                                o(...e), r(...e)
                            } : r && (n[u] = r) : "style" === u ? n[u] = { ...r,
                                ...o
                            } : "className" === u && (n[u] = [r, o].filter(Boolean).join(" "))
                        }
                        return { ...e,
                            ...n
                        }
                    }(u, n.props),
                    ref: t ? l(t, n.ref) : n.ref
                }) : r.Children.count(n) > 1 ? r.Children.only(null) : null
            });
            c.displayName = "SlotClone";
            let s = ({
                children: e
            }) => (0, r.createElement)(r.Fragment, null, e);

            function p(e) {
                return (0, r.isValidElement)(e) && e.type === s
            }

            function d(e, t, {
                checkForDefaultPrevented: n = !0
            } = {}) {
                return function(u) {
                    if (null == e || e(u), !1 === n || !u.defaultPrevented) return null == t ? void 0 : t(u)
                }
            }

            function f(e) {
                let t = (0, r.useRef)(e);
                return (0, r.useEffect)(() => {
                    t.current = e
                }), (0, r.useMemo)(() => (...e) => {
                    var n;
                    return null === (n = t.current) || void 0 === n ? void 0 : n.call(t, ...e)
                }, [])
            }

            function h({
                prop: e,
                defaultProp: t,
                onChange: n = () => {}
            }) {
                let [u, o] = function({
                    defaultProp: e,
                    onChange: t
                }) {
                    let n = (0, r.useState)(e),
                        [u] = n,
                        o = (0, r.useRef)(u),
                        i = f(t);
                    return (0, r.useEffect)(() => {
                        o.current !== u && (i(u), o.current = u)
                    }, [u, o, i]), n
                }({
                    defaultProp: t,
                    onChange: n
                }), i = void 0 !== e, l = i ? e : u, a = f(n), D = (0, r.useCallback)(t => {
                    if (i) {
                        let n = "function" == typeof t ? t(e) : t;
                        n !== e && a(n)
                    } else o(t)
                }, [i, e, o, a]);
                return [l, D]
            }
            var m = n(422);
            let E = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((e, t) => {
                    let n = (0, r.forwardRef)((e, n) => {
                        let {
                            asChild: o,
                            ...i
                        } = e, l = o ? D : t;
                        return (0, r.useEffect)(() => {
                            window[Symbol.for("radix-ui")] = !0
                        }, []), (0, r.createElement)(l, (0, u.Z)({}, i, {
                            ref: n
                        }))
                    });
                    return n.displayName = `Primitive.${t}`, { ...e,
                        [t]: n
                    }
                }, {}),
                C = (null == globalThis ? void 0 : globalThis.document) ? r.useLayoutEffect : () => {},
                g = e => {
                    let {
                        present: t,
                        children: n
                    } = e, u = function(e) {
                        var t;
                        let [n, u] = (0, r.useState)(), o = (0, r.useRef)({}), i = (0, r.useRef)(e), l = (0, r.useRef)("none"), a = e ? "mounted" : "unmounted", [D, c] = (t = {
                            mounted: {
                                UNMOUNT: "unmounted",
                                ANIMATION_OUT: "unmountSuspended"
                            },
                            unmountSuspended: {
                                MOUNT: "mounted",
                                ANIMATION_END: "unmounted"
                            },
                            unmounted: {
                                MOUNT: "mounted"
                            }
                        }, (0, r.useReducer)((e, n) => {
                            let u = t[e][n];
                            return null != u ? u : e
                        }, a));
                        return (0, r.useEffect)(() => {
                            let e = F(o.current);
                            l.current = "mounted" === D ? e : "none"
                        }, [D]), C(() => {
                            let t = o.current,
                                n = i.current,
                                u = n !== e;
                            if (u) {
                                let u = l.current,
                                    r = F(t);
                                e ? c("MOUNT") : "none" === r || (null == t ? void 0 : t.display) === "none" ? c("UNMOUNT") : n && u !== r ? c("ANIMATION_OUT") : c("UNMOUNT"), i.current = e
                            }
                        }, [e, c]), C(() => {
                            if (n) {
                                let e = e => {
                                        let t = F(o.current),
                                            u = t.includes(e.animationName);
                                        e.target === n && u && (0, m.flushSync)(() => c("ANIMATION_END"))
                                    },
                                    t = e => {
                                        e.target === n && (l.current = F(o.current))
                                    };
                                return n.addEventListener("animationstart", t), n.addEventListener("animationcancel", e), n.addEventListener("animationend", e), () => {
                                    n.removeEventListener("animationstart", t), n.removeEventListener("animationcancel", e), n.removeEventListener("animationend", e)
                                }
                            }
                            c("ANIMATION_END")
                        }, [n, c]), {
                            isPresent: ["mounted", "unmountSuspended"].includes(D),
                            ref: (0, r.useCallback)(e => {
                                e && (o.current = getComputedStyle(e)), u(e)
                            }, [])
                        }
                    }(t), o = "function" == typeof n ? n({
                        present: u.isPresent
                    }) : r.Children.only(n), i = a(u.ref, o.ref), l = "function" == typeof n;
                    return l || u.isPresent ? (0, r.cloneElement)(o, {
                        ref: i
                    }) : null
                };

            function F(e) {
                return (null == e ? void 0 : e.animationName) || "none"
            }
            g.displayName = "Presence";
            let y = o["useId".toString()] || (() => void 0),
                v = 0;

            function b(e) {
                let [t, n] = r.useState(y());
                return C(() => {
                    e || n(e => null != e ? e : String(v++))
                }, [e]), e || (t ? `radix-${t}` : "")
            }
            let A = "Collapsible",
                [x, w] = i(A),
                [k, O] = x(A),
                B = (0, r.forwardRef)((e, t) => {
                    let {
                        __scopeCollapsible: n,
                        open: o,
                        defaultOpen: i,
                        disabled: l,
                        onOpenChange: a,
                        ...D
                    } = e, [c = !1, s] = h({
                        prop: o,
                        defaultProp: i,
                        onChange: a
                    });
                    return (0, r.createElement)(k, {
                        scope: n,
                        disabled: l,
                        contentId: b(),
                        open: c,
                        onOpenToggle: (0, r.useCallback)(() => s(e => !e), [s])
                    }, (0, r.createElement)(E.div, (0, u.Z)({
                        "data-state": G(c),
                        "data-disabled": l ? "" : void 0
                    }, D, {
                        ref: t
                    })))
                }),
                _ = (0, r.forwardRef)((e, t) => {
                    let {
                        __scopeCollapsible: n,
                        ...o
                    } = e, i = O("CollapsibleTrigger", n);
                    return (0, r.createElement)(E.button, (0, u.Z)({
                        type: "button",
                        "aria-controls": i.contentId,
                        "aria-expanded": i.open || !1,
                        "data-state": G(i.open),
                        "data-disabled": i.disabled ? "" : void 0,
                        disabled: i.disabled
                    }, o, {
                        ref: t,
                        onClick: d(e.onClick, i.onOpenToggle)
                    }))
                }),
                S = "CollapsibleContent",
                N = (0, r.forwardRef)((e, t) => {
                    let {
                        forceMount: n,
                        ...o
                    } = e, i = O(S, e.__scopeCollapsible);
                    return (0, r.createElement)(g, {
                        present: n || i.open
                    }, ({
                        present: e
                    }) => (0, r.createElement)(T, (0, u.Z)({}, o, {
                        ref: t,
                        present: e
                    })))
                }),
                T = (0, r.forwardRef)((e, t) => {
                    let {
                        __scopeCollapsible: n,
                        present: o,
                        children: i,
                        ...l
                    } = e, D = O(S, n), [c, s] = (0, r.useState)(o), p = (0, r.useRef)(null), d = a(t, p), f = (0, r.useRef)(0), h = f.current, m = (0, r.useRef)(0), g = m.current, F = D.open || c, y = (0, r.useRef)(F), v = (0, r.useRef)();
                    return (0, r.useEffect)(() => {
                        let e = requestAnimationFrame(() => y.current = !1);
                        return () => cancelAnimationFrame(e)
                    }, []), C(() => {
                        let e = p.current;
                        if (e) {
                            v.current = v.current || {
                                transitionDuration: e.style.transitionDuration,
                                animationName: e.style.animationName
                            }, e.style.transitionDuration = "0s", e.style.animationName = "none";
                            let t = e.getBoundingClientRect();
                            f.current = t.height, m.current = t.width, y.current || (e.style.transitionDuration = v.current.transitionDuration, e.style.animationName = v.current.animationName), s(o)
                        }
                    }, [D.open, o]), (0, r.createElement)(E.div, (0, u.Z)({
                        "data-state": G(D.open),
                        "data-disabled": D.disabled ? "" : void 0,
                        id: D.contentId,
                        hidden: !F
                    }, l, {
                        ref: d,
                        style: {
                            "--radix-collapsible-content-height": h ? `${h}px` : void 0,
                            "--radix-collapsible-content-width": g ? `${g}px` : void 0,
                            ...e.style
                        }
                    }), F && i)
                });

            function G(e) {
                return e ? "open" : "closed"
            }
            let I = (0, r.createContext)(void 0),
                R = "Accordion",
                P = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
                [j, M, L] = function(e) {
                    let t = e + "CollectionProvider",
                        [n, u] = i(t),
                        [o, l] = n(t, {
                            collectionRef: {
                                current: null
                            },
                            itemMap: new Map
                        }),
                        c = e + "CollectionSlot",
                        s = r.forwardRef((e, t) => {
                            let {
                                scope: n,
                                children: u
                            } = e, o = l(c, n), i = a(t, o.collectionRef);
                            return r.createElement(D, {
                                ref: i
                            }, u)
                        }),
                        p = e + "CollectionItemSlot",
                        d = "data-radix-collection-item",
                        f = r.forwardRef((e, t) => {
                            let {
                                scope: n,
                                children: u,
                                ...o
                            } = e, i = r.useRef(null), c = a(t, i), s = l(p, n);
                            return r.useEffect(() => (s.itemMap.set(i, {
                                ref: i,
                                ...o
                            }), () => void s.itemMap.delete(i))), r.createElement(D, {
                                [d]: "",
                                ref: c
                            }, u)
                        });
                    return [{
                        Provider: e => {
                            let {
                                scope: t,
                                children: n
                            } = e, u = r.useRef(null), i = r.useRef(new Map).current;
                            return r.createElement(o, {
                                scope: t,
                                itemMap: i,
                                collectionRef: u
                            }, n)
                        },
                        Slot: s,
                        ItemSlot: f
                    }, function(t) {
                        let n = l(e + "CollectionConsumer", t),
                            u = r.useCallback(() => {
                                let e = n.collectionRef.current;
                                if (!e) return [];
                                let t = Array.from(e.querySelectorAll(`[${d}]`)),
                                    u = Array.from(n.itemMap.values()),
                                    r = u.sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current));
                                return r
                            }, [n.collectionRef, n.itemMap]);
                        return u
                    }, u]
                }(R),
                [V, H] = i(R, [L, w]),
                W = w(),
                z = r.forwardRef((e, t) => {
                    let {
                        type: n,
                        ...o
                    } = e;
                    return r.createElement(j.Provider, {
                        scope: e.__scopeAccordion
                    }, "multiple" === n ? r.createElement(Y, (0, u.Z)({}, o, {
                        ref: t
                    })) : r.createElement(X, (0, u.Z)({}, o, {
                        ref: t
                    })))
                });
            z.propTypes = {
                type(e) {
                    let t = e.value || e.defaultValue;
                    return e.type && !["single", "multiple"].includes(e.type) ? Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`.") : "multiple" === e.type && "string" == typeof t ? Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`.") : "single" === e.type && Array.isArray(t) ? Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`.") : null
                }
            };
            let [U, Z] = V(R), [$, q] = V(R, {
                collapsible: !1
            }), X = r.forwardRef((e, t) => {
                let {
                    value: n,
                    defaultValue: o,
                    onValueChange: i = () => {},
                    collapsible: l = !1,
                    ...a
                } = e, [D, c] = h({
                    prop: n,
                    defaultProp: o,
                    onChange: i
                });
                return r.createElement(U, {
                    scope: e.__scopeAccordion,
                    value: D ? [D] : [],
                    onItemOpen: c,
                    onItemClose: r.useCallback(() => l && c(""), [l, c])
                }, r.createElement($, {
                    scope: e.__scopeAccordion,
                    collapsible: l
                }, r.createElement(Q, (0, u.Z)({}, a, {
                    ref: t
                }))))
            }), Y = r.forwardRef((e, t) => {
                let {
                    value: n,
                    defaultValue: o,
                    onValueChange: i = () => {},
                    ...l
                } = e, [a = [], D] = h({
                    prop: n,
                    defaultProp: o,
                    onChange: i
                }), c = r.useCallback(e => D((t = []) => [...t, e]), [D]), s = r.useCallback(e => D((t = []) => t.filter(t => t !== e)), [D]);
                return r.createElement(U, {
                    scope: e.__scopeAccordion,
                    value: a,
                    onItemOpen: c,
                    onItemClose: s
                }, r.createElement($, {
                    scope: e.__scopeAccordion,
                    collapsible: !0
                }, r.createElement(Q, (0, u.Z)({}, l, {
                    ref: t
                }))))
            }), [J, K] = V(R), Q = r.forwardRef((e, t) => {
                let {
                    __scopeAccordion: n,
                    disabled: o,
                    dir: i,
                    orientation: l = "vertical",
                    ...D
                } = e, c = r.useRef(null), s = a(c, t), p = M(n), f = function(e) {
                    let t = (0, r.useContext)(I);
                    return e || t || "ltr"
                }(i), h = "ltr" === f, m = d(e.onKeyDown, e => {
                    var t;
                    if (!P.includes(e.key)) return;
                    let n = e.target,
                        u = p().filter(e => {
                            var t;
                            return !(null !== (t = e.ref.current) && void 0 !== t && t.disabled)
                        }),
                        r = u.findIndex(e => e.ref.current === n),
                        o = u.length;
                    if (-1 === r) return;
                    e.preventDefault();
                    let i = r,
                        a = o - 1,
                        D = () => {
                            (i = r + 1) > a && (i = 0)
                        },
                        c = () => {
                            (i = r - 1) < 0 && (i = a)
                        };
                    switch (e.key) {
                        case "Home":
                            i = 0;
                            break;
                        case "End":
                            i = a;
                            break;
                        case "ArrowRight":
                            "horizontal" === l && (h ? D() : c());
                            break;
                        case "ArrowDown":
                            "vertical" === l && D();
                            break;
                        case "ArrowLeft":
                            "horizontal" === l && (h ? c() : D());
                            break;
                        case "ArrowUp":
                            "vertical" === l && c()
                    }
                    let s = i % o;
                    null === (t = u[s].ref.current) || void 0 === t || t.focus()
                });
                return r.createElement(J, {
                    scope: n,
                    disabled: o,
                    direction: i,
                    orientation: l
                }, r.createElement(j.Slot, {
                    scope: n
                }, r.createElement(E.div, (0, u.Z)({}, D, {
                    "data-orientation": l,
                    ref: s,
                    onKeyDown: o ? void 0 : m
                }))))
            }), ee = "AccordionItem", [et, en] = V(ee), eu = r.forwardRef((e, t) => {
                let {
                    __scopeAccordion: n,
                    value: o,
                    ...i
                } = e, l = K(ee, n), a = Z(ee, n), D = W(n), c = b(), s = o && a.value.includes(o) || !1, p = l.disabled || e.disabled;
                return r.createElement(et, {
                    scope: n,
                    open: s,
                    disabled: p,
                    triggerId: c
                }, r.createElement(B, (0, u.Z)({
                    "data-orientation": l.orientation,
                    "data-state": ea(s)
                }, D, i, {
                    ref: t,
                    disabled: p,
                    open: s,
                    onOpenChange: e => {
                        e ? a.onItemOpen(o) : a.onItemClose(o)
                    }
                })))
            }), er = r.forwardRef((e, t) => {
                let {
                    __scopeAccordion: n,
                    ...o
                } = e, i = K(R, n), l = en("AccordionHeader", n);
                return r.createElement(E.h3, (0, u.Z)({
                    "data-orientation": i.orientation,
                    "data-state": ea(l.open),
                    "data-disabled": l.disabled ? "" : void 0
                }, o, {
                    ref: t
                }))
            }), eo = "AccordionTrigger", ei = r.forwardRef((e, t) => {
                let {
                    __scopeAccordion: n,
                    ...o
                } = e, i = K(R, n), l = en(eo, n), a = q(eo, n), D = W(n);
                return r.createElement(j.ItemSlot, {
                    scope: n
                }, r.createElement(_, (0, u.Z)({
                    "aria-disabled": l.open && !a.collapsible || void 0,
                    "data-orientation": i.orientation,
                    id: l.triggerId
                }, D, o, {
                    ref: t
                })))
            }), el = r.forwardRef((e, t) => {
                let {
                    __scopeAccordion: n,
                    ...o
                } = e, i = K(R, n), l = en("AccordionContent", n), a = W(n);
                return r.createElement(N, (0, u.Z)({
                    role: "region",
                    "aria-labelledby": l.triggerId,
                    "data-orientation": i.orientation
                }, a, o, {
                    ref: t,
                    style: {
                        "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
                        "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
                        ...e.style
                    }
                }))
            });

            function ea(e) {
                return e ? "open" : "closed"
            }
            let eD = z,
                ec = eu,
                es = er,
                ep = ei,
                ed = el
        },
        6773: function(e, t, n) {
            "use strict";

            function u(e, t) {
                if (Object.is(e, t)) return !0;
                if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
                if (e instanceof Map && t instanceof Map) {
                    if (e.size !== t.size) return !1;
                    for (let [n, u] of e)
                        if (!Object.is(u, t.get(n))) return !1;
                    return !0
                }
                if (e instanceof Set && t instanceof Set) {
                    if (e.size !== t.size) return !1;
                    for (let n of e)
                        if (!t.has(n)) return !1;
                    return !0
                }
                let n = Object.keys(e);
                if (n.length !== Object.keys(t).length) return !1;
                for (let u = 0; u < n.length; u++)
                    if (!Object.prototype.hasOwnProperty.call(t, n[u]) || !Object.is(e[n[u]], t[n[u]])) return !1;
                return !0
            }
            n.d(t, {
                X: function() {
                    return u
                }
            })
        }
    }
]);