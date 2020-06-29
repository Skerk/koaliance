/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-backgroundblendmode-cssvhunit-flexbox-supports-touchevents-setclasses-shiv !*/
! function(e, t, n) {
    function r(e, t) { return typeof e === t }

    function o() { var e, t, n, o, i, a, s; for (var l in b)
            if (b.hasOwnProperty(l)) { if (e = [], t = b[l], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                    for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase()); for (o = r(t.fn, "function") ? t.fn() : t.fn, i = 0; i < e.length; i++) a = e[i], s = a.split("."), 1 === s.length ? Modernizr[s[0]] = o : (!Modernizr[s[0]] || Modernizr[s[0]] instanceof Boolean || (Modernizr[s[0]] = new Boolean(Modernizr[s[0]])), Modernizr[s[0]][s[1]] = o), S.push((o ? "" : "no-") + s.join("-")) } }

    function i(e) { var t = w.className,
            n = Modernizr._config.classPrefix || ""; if (T && (t = t.baseVal), Modernizr._config.enableJSClass) { var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
            t = t.replace(r, "$1" + n + "js$2") }
        Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n), T ? w.className.baseVal = t : w.className = t) }

    function a(t, n, r) { var o; if ("getComputedStyle" in e) { o = getComputedStyle.call(e, t, n); var i = e.console; if (null !== o) r && (o = o.getPropertyValue(r));
            else if (i) { var a = i.error ? "error" : "log";
                i[a].call(i, "getComputedStyle returning null, its possible modernizr test results are inaccurate") } } else o = !n && t.currentStyle && t.currentStyle[r]; return o }

    function s(e, t) { return e - 1 === t || e === t || e + 1 === t }

    function l(e) { return e.replace(/([a-z])-([a-z])/g, function(e, t, n) { return t + n.toUpperCase() }).replace(/^-/, "") }

    function u() { return "function" != typeof t.createElement ? t.createElement(arguments[0]) : T ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments) }

    function c() { var e = t.body; return e || (e = u(T ? "svg" : "body"), e.fake = !0), e }

    function f(e, n, r, o) { var i, a, s, l, f = "modernizr",
            d = u("div"),
            p = c(); if (parseInt(r, 10))
            for (; r--;) s = u("div"), s.id = o ? o[r] : f + (r + 1), d.appendChild(s); return i = u("style"), i.type = "text/css", i.id = "s" + f, (p.fake ? p : d).appendChild(i), p.appendChild(d), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(t.createTextNode(e)), d.id = f, p.fake && (p.style.background = "", p.style.overflow = "hidden", l = w.style.overflow, w.style.overflow = "hidden", w.appendChild(p)), a = n(d, e), p.fake ? (p.parentNode.removeChild(p), w.style.overflow = l, w.offsetHeight) : d.parentNode.removeChild(d), !!a }

    function d(e, t) { return !!~("" + e).indexOf(t) }

    function p(e, t) { return function() { return e.apply(t, arguments) } }

    function m(e, t, n) { var o; for (var i in e)
            if (e[i] in t) return n === !1 ? e[i] : (o = t[e[i]], r(o, "function") ? p(o, n || t) : o);
        return !1 }

    function h(e) { return e.replace(/([A-Z])/g, function(e, t) { return "-" + t.toLowerCase() }).replace(/^ms-/, "-ms-") }

    function v(t, r) { var o = t.length; if ("CSS" in e && "supports" in e.CSS) { for (; o--;)
                if (e.CSS.supports(h(t[o]), r)) return !0;
            return !1 } if ("CSSSupportsRule" in e) { for (var i = []; o--;) i.push("(" + h(t[o]) + ":" + r + ")"); return i = i.join(" or "), f("@supports (" + i + ") { #modernizr { position: absolute; } }", function(e) { return "absolute" == a(e, null, "position") }) } return n }

    function g(e, t, o, i) {
        function a() { c && (delete D.style, delete D.modElem) } if (i = r(i, "undefined") ? !1 : i, !r(o, "undefined")) { var s = v(e, o); if (!r(s, "undefined")) return s } for (var c, f, p, m, h, g = ["modernizr", "tspan", "samp"]; !D.style && g.length;) c = !0, D.modElem = u(g.shift()), D.style = D.modElem.style; for (p = e.length, f = 0; p > f; f++)
            if (m = e[f], h = D.style[m], d(m, "-") && (m = l(m)), D.style[m] !== n) { if (i || r(o, "undefined")) return a(), "pfx" == t ? m : !0; try { D.style[m] = o } catch (y) {} if (D.style[m] != h) return a(), "pfx" == t ? m : !0 }
        return a(), !1 }

    function y(e, t, n, o, i) { var a = e.charAt(0).toUpperCase() + e.slice(1),
            s = (e + " " + j.join(a + " ") + a).split(" "); return r(t, "string") || r(t, "undefined") ? g(s, t, o, i) : (s = (e + " " + P.join(a + " ") + a).split(" "), m(s, t, n)) }

    function C(e, t, r) { return y(e, n, n, t, r) } var S = [],
        b = [],
        x = { _version: "3.6.0", _config: { classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0 }, _q: [], on: function(e, t) { var n = this;
                setTimeout(function() { t(n[e]) }, 0) }, addTest: function(e, t, n) { b.push({ name: e, fn: t, options: n }) }, addAsyncTest: function(e) { b.push({ name: null, fn: e }) } },
        Modernizr = function() {};
    Modernizr.prototype = x, Modernizr = new Modernizr; var E = "CSS" in e && "supports" in e.CSS,
        _ = "supportsCSS" in e;
    Modernizr.addTest("supports", E || _); var w = t.documentElement,
        T = "svg" === w.nodeName.toLowerCase();
    T || ! function(e, t) {
        function n(e, t) { var n = e.createElement("p"),
                r = e.getElementsByTagName("head")[0] || e.documentElement; return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild) }

        function r() { var e = C.elements; return "string" == typeof e ? e.split(" ") : e }

        function o(e, t) { var n = C.elements; "string" != typeof n && (n = n.join(" ")), "string" != typeof e && (e = e.join(" ")), C.elements = n + " " + e, u(t) }

        function i(e) { var t = y[e[v]]; return t || (t = {}, g++, e[v] = g, y[g] = t), t }

        function a(e, n, r) { if (n || (n = t), f) return n.createElement(e);
            r || (r = i(n)); var o; return o = r.cache[e] ? r.cache[e].cloneNode() : h.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), !o.canHaveChildren || m.test(e) || o.tagUrn ? o : r.frag.appendChild(o) }

        function s(e, n) { if (e || (e = t), f) return e.createDocumentFragment();
            n = n || i(e); for (var o = n.frag.cloneNode(), a = 0, s = r(), l = s.length; l > a; a++) o.createElement(s[a]); return o }

        function l(e, t) { t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) { return C.shivMethods ? a(n, e, t) : t.createElem(n) }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/[\w\-:]+/g, function(e) { return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")' }) + ");return n}")(C, t.frag) }

        function u(e) { e || (e = t); var r = i(e); return !C.shivCSS || c || r.hasCSS || (r.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), f || l(e, r), e } var c, f, d = "3.7.3",
            p = e.html5 || {},
            m = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
            h = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
            v = "_html5shiv",
            g = 0,
            y = {};! function() { try { var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>", c = "hidden" in e, f = 1 == e.childNodes.length || function() { t.createElement("a"); var e = t.createDocumentFragment(); return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement }() } catch (n) { c = !0, f = !0 } }(); var C = { elements: p.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video", version: d, shivCSS: p.shivCSS !== !1, supportsUnknownElements: f, shivMethods: p.shivMethods !== !1, type: "default", shivDocument: u, createElement: a, createDocumentFragment: s, addElements: o };
        e.html5 = C, u(t), "object" == typeof module && module.exports && (module.exports = C) }("undefined" != typeof e ? e : this, t); var z = x.testStyles = f;
    z("#modernizr { height: 50vh; }", function(t) { var n = parseInt(e.innerHeight / 2, 10),
            r = parseInt(a(t, null, "height"), 10);
        Modernizr.addTest("cssvhunit", s(r, n)) }); var N = "Moz O ms Webkit",
        j = x._config.usePrefixes ? N.split(" ") : [];
    x._cssomPrefixes = j; var k = function(t) { var r, o = M.length,
            i = e.CSSRule; if ("undefined" == typeof i) return n; if (!t) return !1; if (t = t.replace(/^@/, ""), r = t.replace(/-/g, "_").toUpperCase() + "_RULE", r in i) return "@" + t; for (var a = 0; o > a; a++) { var s = M[a],
                l = s.toUpperCase() + "_" + r; if (l in i) return "@-" + s.toLowerCase() + "-" + t } return !1 };
    x.atRule = k; var P = x._config.usePrefixes ? N.toLowerCase().split(" ") : [];
    x._domPrefixes = P; var F = { elem: u("modernizr") };
    Modernizr._q.push(function() { delete F.elem }); var D = { style: F.elem.style };
    Modernizr._q.unshift(function() { delete D.style }), x.testAllProps = y; var L = x.prefixed = function(e, t, n) { return 0 === e.indexOf("@") ? k(e) : (-1 != e.indexOf("-") && (e = l(e)), t ? y(e, t, n) : y(e, "pfx")) };
    Modernizr.addTest("backgroundblendmode", L("backgroundBlendMode", "text")), x.testAllProps = C, Modernizr.addTest("flexbox", C("flexBasis", "1px", !0)); var M = x._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    x._prefixes = M, Modernizr.addTest("touchevents", function() { var n; if ("ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch) n = !0;
        else { var r = ["@media (", M.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
            z(r, function(e) { n = 9 === e.offsetTop }) } return n }), o(), i(S), delete x.addTest, delete x.addAsyncTest; for (var U = 0; U < Modernizr._q.length; U++) Modernizr._q[U]();
    e.Modernizr = Modernizr }(window, document);