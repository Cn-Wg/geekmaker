(function () {
    var h = {},
        mt = {},
        c = {
            id: "260e876a51de2b68c1797b1625c9c7e8",
            dm: ["geekmaker.com"],
            js: "tongji.baidu.com/hm-web/js/",
            etrk: [],
            icon: '',
            ctrk: false,
            align: -1,
            nv: -1,
            vdur: 1800000,
            age: 31536000000,
            rec: 0,
            rp: [],
            trust: 0,
            vcard: 0,
            qiao: 0,
            lxb: 0,
            kbtrk: 0,
            pt: 0,
            aet: '',
            hca: '5C97CBE99302CB9B',
            conv: 0,
            med: 0,
            cvcc: '',
            cvcf: [],
            apps: ''
        };
    var r = void 0,
        s = !0,
        t = null,
        u = !1;
    mt.cookie = {};
    mt.cookie.set = function (b, a, e) {
        var d;
        e.B && (d = new Date, d.setTime(d.getTime() + e.B));
        document.cookie = b + "=" + a + (e.domain ? "; domain=" + e.domain : "") + (e.path ? "; path=" + e.path : "") + (d ? "; expires=" + d.toGMTString() : "") + (e.Kb ? "; secure" : "")
    };
    mt.cookie.get = function (b) {
        return (b = RegExp("(^| )" + b + "=([^;]*)(;|$)").exec(document.cookie)) ? b[2] : t
    };
    mt.cookie.gb = function (b, a) {
        try {
            var e = "Hm_ck_" + +new Date;
            mt.cookie.set(e, "is-cookie-enabled", {
                domain: b,
                path: a,
                B: r
            });
            var d = "is-cookie-enabled" === mt.cookie.get(e) ? "1" : "0";
            mt.cookie.set(e, "", {
                domain: b,
                path: a,
                B: -1
            });
            return d
        } catch (g) {
            return "0"
        }
    };
    mt.lang = {};
    mt.lang.d = function (b, a) {
        return "[object " + a + "]" === {}.toString.call(b)
    };
    mt.lang.ta = function (b) {
        return mt.lang.d(b, "Number") && isFinite(b)
    };
    mt.lang.aa = function () {
        return mt.lang.d(c.aet, "String")
    };
    mt.lang.j = function (b) {
        return b.replace ? b.replace(/'/g, "'0").replace(/\*/g, "'1").replace(/!/g, "'2") : b
    };
    mt.lang.trim = function (b) {
        return b.replace(/^\s+|\s+$/g, "")
    };
    mt.lang.M = function (b, a) {
        var e = u;
        if (b == t || !mt.lang.d(b, "Array") || a === r) return e;
        if (Array.prototype.indexOf) e = -1 !== b.indexOf(a);
        else
            for (var d = 0; d < b.length; d++)
                if (b[d] === a) {
                    e = s;
                    break
                } return e
    };
    (function () {
        var b = mt.lang;
        mt.e = {};
        mt.e.Oa = function (a) {
            return document.getElementById(a)
        };
        mt.e.Z = function (a, b) {
            var d = [],
                g = [];
            if (!a) return g;
            for (; a.parentNode != t;) {
                for (var l = 0, m = 0, n = a.parentNode.childNodes.length, f = 0; f < n; f++) {
                    var p = a.parentNode.childNodes[f];
                    if (p.nodeName === a.nodeName && (l++, p === a && (m = l), 0 < m && 1 < l)) break
                }
                if ((n = "" !== a.id) && b) {
                    d.unshift("#" + encodeURIComponent(a.id));
                    break
                } else n && (n = "#" + encodeURIComponent(a.id), n = 0 < d.length ? n + ">" + d.join(">") : n, g.push(n)), d.unshift(encodeURIComponent(String(a.nodeName).toLowerCase()) +
                    (1 < l ? "[" + m + "]" : ""));
                a = a.parentNode
            }
            g.push(d.join(">"));
            return g
        };
        mt.e.Ua = function (a) {
            return (a = mt.e.Z(a, s)) && a.length ? String(a[0]) : ""
        };
        mt.e.Fb = function (a) {
            return mt.e.Z(a, u)
        };
        mt.e.Db = function (a, b) {
            for (b = b.toUpperCase();
                (a = a.parentNode) && 1 == a.nodeType;)
                if (a.tagName == b) return a;
            return t
        };
        mt.e.Pa = function (a) {
            return 9 === a.nodeType ? a : a.ownerDocument || a.document
        };
        mt.e.Eb = function (a) {
            var b = {
                top: 0,
                left: 0
            };
            if (!a) return b;
            var d = mt.e.Pa(a).documentElement;
            "undefined" !== typeof a.getBoundingClientRect && (b = a.getBoundingClientRect());
            return {
                top: b.top + (window.pageYOffset || d.scrollTop) - (d.clientTop || 0),
                left: b.left + (window.pageXOffset || d.scrollLeft) - (d.clientLeft || 0)
            }
        };
        mt.e.getAttribute = function (a, b) {
            var d = a.getAttribute && a.getAttribute(b) || t;
            if (!d && a.attributes && a.attributes.length)
                for (var g = a.attributes, l = g.length, m = 0; m < l; m++) g[m].nodeName === b && (d = g[m].nodeValue);
            return d
        };
        mt.e.K = function (a) {
            var b = "document";
            a.tagName !== r && (b = a.tagName);
            return b.toLowerCase()
        };
        mt.e.Wa = function (a) {
            var e = "";
            a.textContent ? e = b.trim(a.textContent) :
                a.innerText && (e = b.trim(a.innerText));
            e && (e = e.replace(/\s+/g, " ").substring(0, 255));
            return e
        };
        mt.e.Qa = function (a) {
            var b = mt.e.K(a);
            "input" === b && ("button" === a.type || "submit" === a.type) ? a = a.value || "" : "img" === b ? (b = mt.e.getAttribute, a = b(a, "alt") || b(a, "title") || b(a, "src")) : a = "body" === b || "html" === b ? ["(hm-default-content-for-", b, ")"].join("") : mt.e.Wa(a);
            return String(a).substring(0, 255)
        };
        (function () {
            (mt.e.ib = function () {
                function a() {
                    if (!a.O) {
                        a.O = s;
                        for (var b = 0, d = g.length; b < d; b++) g[b]()
                    }
                }

                function b() {
                    try {
                        document.documentElement.doScroll("left")
                    } catch (d) {
                        setTimeout(b,
                            1);
                        return
                    }
                    a()
                }
                var d = u,
                    g = [],
                    l;
                document.addEventListener ? l = function () {
                    document.removeEventListener("DOMContentLoaded", l, u);
                    a()
                } : document.attachEvent && (l = function () {
                    "complete" === document.readyState && (document.detachEvent("onreadystatechange", l), a())
                });
                (function () {
                    if (!d)
                        if (d = s, "complete" === document.readyState) a.O = s;
                        else if (document.addEventListener) document.addEventListener("DOMContentLoaded", l, u), window.addEventListener("load", a, u);
                    else if (document.attachEvent) {
                        document.attachEvent("onreadystatechange",
                            l);
                        window.attachEvent("onload", a);
                        var g = u;
                        try {
                            g = window.frameElement == t
                        } catch (n) {}
                        document.documentElement.doScroll && g && b()
                    }
                })();
                return function (b) {
                    a.O ? b() : g.push(b)
                }
            }()).O = u
        })();
        return mt.e
    })();
    mt.event = {};
    mt.event.c = function (b, a, e) {
        b.attachEvent ? b.attachEvent("on" + a, function (a) {
            e.call(b, a)
        }) : b.addEventListener && b.addEventListener(a, e, u)
    };
    mt.event.preventDefault = function (b) {
        b.preventDefault ? b.preventDefault() : b.returnValue = u
    };
    (function () {
        var b = mt.event;
        mt.g = {};
        mt.g.sa = /msie (\d+\.\d+)/i.test(navigator.userAgent);
        mt.g.eb = /msie (\d+\.\d+)/i.test(navigator.userAgent) ? document.documentMode || +RegExp.$1 : r;
        mt.g.cookieEnabled = navigator.cookieEnabled;
        mt.g.javaEnabled = navigator.javaEnabled();
        mt.g.language = navigator.language || navigator.browserLanguage || navigator.systemLanguage || navigator.userLanguage || "";
        mt.g.lb = (window.screen.width || 0) + "x" + (window.screen.height || 0);
        mt.g.colorDepth = window.screen.colorDepth || 0;
        mt.g.L = function () {
            var a;
            a = a || document;
            return parseInt(window.pageYOffset || a.documentElement.scrollTop || a.body && a.body.scrollTop || 0, 10)
        };
        mt.g.C = function () {
            var a = document;
            return parseInt(window.innerHeight || a.documentElement.clientHeight || a.body && a.body.clientHeight || 0, 10)
        };
        mt.g.orientation = 0;
        (function () {
            function a() {
                var a = 0;
                window.orientation !== r && (a = window.orientation);
                screen && (screen.orientation && screen.orientation.angle !== r) && (a = screen.orientation.angle);
                mt.g.orientation = a
            }
            a();
            b.c(window, "orientationchange", a)
        })();
        return mt.g
    })();
    mt.l = {};
    mt.l.parse = function (b) {
        return (new Function("return (" + b + ")"))()
    };
    mt.l.stringify = function () {
        function b(a) {
            /["\\\x00-\x1f]/.test(a) && (a = a.replace(/["\\\x00-\x1f]/g, function (a) {
                var b = e[a];
                if (b) return b;
                b = a.charCodeAt();
                return "\\u00" + Math.floor(b / 16).toString(16) + (b % 16).toString(16)
            }));
            return '"' + a + '"'
        }

        function a(a) {
            return 10 > a ? "0" + a : a
        }
        var e = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        };
        return function (d) {
            switch (typeof d) {
                case "undefined":
                    return "undefined";
                case "number":
                    return isFinite(d) ? String(d) : "null";
                case "string":
                    return b(d);
                case "boolean":
                    return String(d);
                default:
                    if (d === t) return "null";
                    if (d instanceof Array) {
                        var e = ["["],
                            l = d.length,
                            m, n, f;
                        for (n = 0; n < l; n++) switch (f = d[n], typeof f) {
                            case "undefined":
                            case "function":
                            case "unknown":
                                break;
                            default:
                                m && e.push(","), e.push(mt.l.stringify(f)), m = 1
                        }
                        e.push("]");
                        return e.join("")
                    }
                    if (d instanceof Date) return '"' + d.getFullYear() + "-" + a(d.getMonth() + 1) + "-" + a(d.getDate()) + "T" + a(d.getHours()) + ":" + a(d.getMinutes()) + ":" + a(d.getSeconds()) + '"';
                    m = ["{"];
                    n = mt.l.stringify;
                    for (l in d)
                        if (Object.prototype.hasOwnProperty.call(d, l)) switch (f =
                            d[l], typeof f) {
                            case "undefined":
                            case "unknown":
                            case "function":
                                break;
                            default:
                                e && m.push(","), e = 1, m.push(n(l) + ":" + n(f))
                        }
                    m.push("}");
                    return m.join("")
            }
        }
    }();
    mt.localStorage = {};
    mt.localStorage.Q = function () {
        if (!mt.localStorage.h) try {
            mt.localStorage.h = document.createElement("input"), mt.localStorage.h.type = "hidden", mt.localStorage.h.style.display = "none", mt.localStorage.h.addBehavior("#default#userData"), document.getElementsByTagName("head")[0].appendChild(mt.localStorage.h)
        } catch (b) {
            return u
        }
        return s
    };
    mt.localStorage.set = function (b, a, e) {
        var d = new Date;
        d.setTime(d.getTime() + e || 31536E6);
        try {
            window.localStorage ? (a = d.getTime() + "|" + a, window.localStorage.setItem(b, a)) : mt.localStorage.Q() && (mt.localStorage.h.expires = d.toUTCString(), mt.localStorage.h.load(document.location.hostname), mt.localStorage.h.setAttribute(b, a), mt.localStorage.h.save(document.location.hostname))
        } catch (g) {}
    };
    mt.localStorage.get = function (b) {
        if (window.localStorage) {
            if (b = window.localStorage.getItem(b)) {
                var a = b.indexOf("|"),
                    e = b.substring(0, a) - 0;
                if (e && e > (new Date).getTime()) return b.substring(a + 1)
            }
        } else if (mt.localStorage.Q()) try {
            return mt.localStorage.h.load(document.location.hostname), mt.localStorage.h.getAttribute(b)
        } catch (d) {}
        return t
    };
    mt.localStorage.remove = function (b) {
        if (window.localStorage) window.localStorage.removeItem(b);
        else if (mt.localStorage.Q()) try {
            mt.localStorage.h.load(document.location.hostname), mt.localStorage.h.removeAttribute(b), mt.localStorage.h.save(document.location.hostname)
        } catch (a) {}
    };
    mt.sessionStorage = {};
    mt.sessionStorage.set = function (b, a) {
        if (window.sessionStorage) try {
            window.sessionStorage.setItem(b, a)
        } catch (e) {}
    };
    mt.sessionStorage.get = function (b) {
        return window.sessionStorage ? window.sessionStorage.getItem(b) : t
    };
    mt.sessionStorage.remove = function (b) {
        window.sessionStorage && window.sessionStorage.removeItem(b)
    };
    mt.ya = {};
    mt.ya.log = function (b, a) {
        var e = new Image,
            d = "mini_tangram_log_" + Math.floor(2147483648 * Math.random()).toString(36);
        window[d] = e;
        e.onload = function () {
            e.onload = t;
            e = window[d] = t;
            a && a(b)
        };
        e.src = b
    };
    mt.ga = {};
    mt.ga.Xa = function () {
        var b = "";
        if (navigator.plugins && navigator.mimeTypes.length) {
            var a = navigator.plugins["Shockwave Flash"];
            a && a.description && (b = a.description.replace(/^.*\s+(\S+)\s+\S+$/, "$1"))
        } else if (window.ActiveXObject) try {
            if (a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))(b = a.GetVariable("$version")) && (b = b.replace(/^.*\s+(\d+),(\d+).*$/, "$1.$2"))
        } catch (e) {}
        return b
    };
    mt.ga.Cb = function (b, a, e, d, g) {
        return '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="' + b + '" width="' + e + '" height="' + d + '"><param name="movie" value="' + a + '" /><param name="flashvars" value="' + (g || "") + '" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="' + b + '" width="' + e + '" height="' + d + '" src="' + a + '" flashvars="' + (g || "") + '" allowscriptaccess="always" /></object>'
    };
    mt.url = {};
    mt.url.k = function (b, a) {
        var e = b.match(RegExp("(^|&|\\?|#)(" + a + ")=([^&#]*)(&|$|#)", ""));
        return e ? e[3] : t
    };
    mt.url.Gb = function (b) {
        return (b = b.match(/^(https?:)\/\//)) ? b[1] : t
    };
    mt.url.Sa = function (b) {
        return (b = b.match(/^(https?:\/\/)?([^\/\?#]*)/)) ? b[2].replace(/.*@/, "") : t
    };
    mt.url.Y = function (b) {
        return (b = mt.url.Sa(b)) ? b.replace(/:\d+$/, "") : b
    };
    mt.url.Z = function (b) {
        return (b = b.match(/^(https?:\/\/)?[^\/]*(.*)/)) ? b[2].replace(/[\?#].*/, "").replace(/^$/, "/") : t
    };
    (function () {
        function b() {
            for (var a = u, b = document.getElementsByTagName("script"), d = b.length, d = 100 < d ? 100 : d, g = 0; g < d; g++) {
                var l = b[g].src;
                if (l && 0 === l.indexOf("https://hm.baidu.com/h")) {
                    a = s;
                    break
                }
            }
            return a
        }
        return h.Na = b
    })();
    var A = h.Na;
    h.o = {
        Hb: "http://tongji.baidu.com/hm-web/welcome/ico",
        wa: "hm.baidu.com/hm.gif",
        Da: "tongji.baidu.com",
        ab: "hmmd",
        bb: "hmpl",
        wb: "utm_medium",
        $a: "hmkw",
        yb: "utm_term",
        Ya: "hmci",
        vb: "utm_content",
        cb: "hmsr",
        xb: "utm_source",
        Za: "hmcu",
        ub: "utm_campaign",
        w: 0,
        s: Math.round(+new Date / 1E3),
        z: Math.round(+new Date / 1E3) % 65535,
        protocol: "https:" === document.location.protocol ? "https:" : "http:",
        ca: A() || "https:" === document.location.protocol ? "https:" : "http:",
        Ib: 0,
        Ab: 6E5,
        hb: 6E5,
        Jb: 5E3,
        Bb: 5,
        U: 1024,
        zb: 1,
        da: 2147483647,
        za: "hca kb cc cf ci ck cl cm cp cu cw ds vl ep et fl ja ln lo lt rnd si su v cv lv api sn ct u tt hh".split(" "),
        D: s,
        na: ["a", "input", "button"],
        Fa: {
            id: "data-hm-id",
            T: "data-hm-class",
            ka: "data-hm-xpath",
            content: "data-hm-content",
            ha: "data-hm-tag",
            link: "data-hm-link"
        },
        ma: "data-hm-enabled",
        la: "data-hm-disabled"
    };
    (function () {
        var b = {
            p: {},
            c: function (a, b) {
                this.p[a] = this.p[a] || [];
                this.p[a].push(b)
            },
            I: function (a, b) {
                this.p[a] = this.p[a] || [];
                for (var d = this.p[a].length, g = 0; g < d; g++) this.p[a][g](b)
            }
        };
        return h.A = b
    })();
    (function () {
        function b(b, d) {
            var g = document.createElement("script");
            g.charset = "utf-8";
            a.d(d, "Function") && (g.readyState ? g.onreadystatechange = function () {
                if ("loaded" === g.readyState || "complete" === g.readyState) g.onreadystatechange = t, d()
            } : g.onload = function () {
                d()
            });
            g.src = b;
            var l = document.getElementsByTagName("script")[0];
            l.parentNode.insertBefore(g, l)
        }
        var a = mt.lang;
        return h.load = b
    })();
    (function () {
        var b = mt.lang,
            a = mt.e,
            e = mt.event,
            d = mt.g,
            g = h.o,
            l = h.A,
            m = +new Date,
            n = [],
            f = {
                pa: function () {
                    return function (p) {
                        if (h.b && h.b.D && c.aet && c.aet.length) {
                            var k = p.target || p.srcElement;
                            if (k) {
                                var d = h.b.na,
                                    q = a.getAttribute(k, g.ma) != t ? s : u;
                                if (a.getAttribute(k, g.la) == t)
                                    if (q) f.R(f.X(k, p));
                                    else {
                                        var e = a.K(k);
                                        if (b.M(d, "*") || b.M(d, e)) f.R(f.X(k, p));
                                        else
                                            for (; k.parentNode != t;) {
                                                var q = k.parentNode,
                                                    e = a.K(q),
                                                    v = "a" === e && b.M(d, "a") ? s : u,
                                                    e = "button" === e && b.M(d, "button") ? s : u,
                                                    y = a.getAttribute(q, g.ma) != t ? s : u;
                                                if (a.getAttribute(q,
                                                        g.la) == t && (v || e || y)) {
                                                    f.R(f.X(q, p));
                                                    break
                                                }
                                                k = k.parentNode
                                            }
                                    }
                            }
                        }
                    }
                },
                X: function (p, k) {
                    var e = {},
                        q = g.Fa;
                    e.id = a.getAttribute(p, q.id) || a.getAttribute(p, "id") || "";
                    e.T = a.getAttribute(p, q.T) || a.getAttribute(p, "class") || "";
                    e.ka = a.getAttribute(p, q.ka) || a.Ua(p);
                    e.content = a.getAttribute(p, q.content) || a.Qa(p);
                    e.ha = a.getAttribute(p, q.ha) || a.K(p);
                    e.link = a.getAttribute(p, q.link) || a.getAttribute(p, "href") || "";
                    e.type = k.type || "click";
                    q = b.ta(p.offsetTop) ? p.offsetTop : 0;
                    "click" === k.type ? q = d.sa ? k.clientY + Math.max(document.documentElement.scrollTop,
                        document.body.scrollTop) : k.pageY : "touchend" === k.type && (k.ea && b.d(k.ea.changedTouches, "Array") && k.ea.changedTouches.length) && (q = k.ea.changedTouches[0].pageY);
                    e.tb = q;
                    return e
                },
                R: function (a) {
                    var k = b.j;
                    a = [+new Date - (h.b.r !== r ? h.b.r : m), k(a.id), k(a.T), k(a.ha), k(a.ka), k(a.link), k(a.content), a.type, a.tb].join("*");
                    f.S(a);
                    b.d(this.G(), "Function") && this.G()()
                },
                S: function (a) {
                    a.length > g.U || (encodeURIComponent(n.join("!") + a).length > g.U && (f.H(n.join("!")), n = []), n.push(a))
                },
                H: function (a) {
                    h.b.a.et = 5;
                    h.b.a.ep = a;
                    h.b.i()
                },
                G: function () {
                    return function () {
                        n && n.length && (f.H(n.join("!")), n = [])
                    }
                }
            };
        b.aa() && "" !== c.aet && l.c("pv-b", function () {
            e.c(document, "click", f.pa());
            "ontouchend" in document && e.c(window, "touchend", f.pa());
            e.c(window, "unload", f.G())
        });
        return f
    })();
    (function () {
        var b = mt.event,
            a = mt.g,
            e = h.o,
            d = h.A,
            g = +new Date,
            l = [],
            m = t,
            n = {
                Ja: function () {
                    return function () {
                        h.b && (h.b.D && c.aet && c.aet.length) && (window.clearTimeout(m), m = window.setTimeout(function () {
                            n.Ba(a.L() + a.C())
                        }, 150))
                    }
                },
                Ba: function (a) {
                    n.S([+new Date - (h.b.r !== r ? h.b.r : g), a].join("*"))
                },
                S: function (a) {
                    if (encodeURIComponent(l.join("!") + a).length > e.U || 3 < l.length) n.H(l.join("!")), l = [];
                    l.push(a)
                },
                H: function (b) {
                    h.b.a.et = 6;
                    h.b.a.vh = a.C();
                    h.b.a.ep = b;
                    h.b.i()
                },
                G: function () {
                    return function () {
                        l && l.length && (n.H(l.join("!")),
                            l = [])
                    }
                }
            };
        mt.lang.aa() && "" !== c.aet && d.c("pv-b", function () {
            b.c(window, "scroll", n.Ja());
            b.c(window, "unload", n.G())
        });
        return n
    })();
    (function () {
        function b() {
            return function () {
                h.b.a.nv = 0;
                h.b.a.st = 4;
                h.b.a.et = 3;
                h.b.a.ep = h.V.Ta() + "," + h.V.Ra();
                h.b.i()
            }
        }

        function a() {
            clearTimeout(z);
            var b;
            v && (b = "visible" == document[v]);
            y && (b = !document[y]);
            n = "undefined" == typeof b ? s : b;
            if ((!m || !f) && n && p) x = s, w = +new Date;
            else if (m && f && (!n || !p)) x = u, q += +new Date - w;
            m = n;
            f = p;
            z = setTimeout(a, 100)
        }

        function e(a) {
            var b = document,
                p = "";
            if (a in b) p = a;
            else
                for (var q = ["webkit", "ms", "moz", "o"], k = 0; k < q.length; k++) {
                    var e = q[k] + a.charAt(0).toUpperCase() + a.slice(1);
                    if (e in b) {
                        p =
                            e;
                        break
                    }
                }
            return p
        }

        function d(b) {
            if (!("focus" == b.type || "blur" == b.type) || !(b.target && b.target != window)) p = "focus" == b.type || "focusin" == b.type ? s : u, a()
        }
        var g = mt.event,
            l = h.A,
            m = s,
            n = s,
            f = s,
            p = s,
            k = +new Date,
            w = k,
            q = 0,
            x = s,
            v = e("visibilityState"),
            y = e("hidden"),
            z;
        a();
        (function () {
            var b = v.replace(/[vV]isibilityState/, "visibilitychange");
            g.c(document, b, a);
            g.c(window, "pageshow", a);
            g.c(window, "pagehide", a);
            "object" == typeof document.onfocusin ? (g.c(document, "focusin", d), g.c(document, "focusout", d)) : (g.c(window, "focus", d),
                g.c(window, "blur", d))
        })();
        h.V = {
            Ta: function () {
                return +new Date - k
            },
            Ra: function () {
                return x ? +new Date - w + q : q
            }
        };
        l.c("pv-b", function () {
            g.c(window, "unload", b())
        });
        return h.V
    })();
    (function () {
        var b = mt.lang,
            a = h.o,
            e = h.load,
            d = {
                fb: function (d) {
                    if ((window._dxt === r || b.d(window._dxt, "Array")) && "undefined" !== typeof h.b) {
                        var l = h.b.J();
                        e([a.protocol, "//datax.baidu.com/x.js?si=", c.id, "&dm=", encodeURIComponent(l)].join(""), d)
                    }
                },
                rb: function (a) {
                    if (b.d(a, "String") || b.d(a, "Number")) window._dxt = window._dxt || [], window._dxt.push(["_setUserId", a])
                }
            };
        return h.Ha = d
    })();
    (function () {
        function b(a, b, e, q) {
            if (!(a === r || b === r || q === r)) {
                if ("" === a) return [b, e, q].join("*");
                a = String(a).split("!");
                for (var d, f = u, y = 0; y < a.length; y++)
                    if (d = a[y].split("*"), String(b) === d[0]) {
                        d[1] = e;
                        d[2] = q;
                        a[y] = d.join("*");
                        f = s;
                        break
                    } f || a.push([b, e, q].join("*"));
                return a.join("!")
            }
        }

        function a(b) {
            for (var d in b)
                if ({}.hasOwnProperty.call(b, d)) {
                    var f = b[d];
                    e.d(f, "Object") || e.d(f, "Array") ? a(f) : b[d] = String(f)
                }
        }
        var e = mt.lang,
            d = mt.l,
            g = mt.g,
            l = h.o,
            m = h.A,
            n = h.Ha,
            f = {
                F: [],
                P: 0,
                ua: u,
                m: {
                    ia: "",
                    page: ""
                },
                init: function () {
                    f.f =
                        0;
                    m.c("pv-b", function () {
                        f.Ia();
                        f.La()
                    });
                    m.c("pv-d", function () {
                        f.Ma();
                        f.m.page = ""
                    });
                    m.c("stag-b", function () {
                        h.b.a.api = f.f || f.P ? f.f + "_" + f.P : "";
                        h.b.a.ct = [decodeURIComponent(h.b.getData("Hm_ct_" + c.id) || ""), f.m.ia, f.m.page].join("!")
                    });
                    m.c("stag-d", function () {
                        h.b.a.api = 0;
                        f.f = 0;
                        f.P = 0
                    })
                },
                Ia: function () {
                    var a = window._hmt || [];
                    if (!a || e.d(a, "Array")) window._hmt = {
                        id: c.id,
                        cmd: {},
                        push: function () {
                            for (var a = window._hmt, b = 0; b < arguments.length; b++) {
                                var p = arguments[b];
                                e.d(p, "Array") && (a.cmd[a.id].push(p), "_setAccount" ===
                                    p[0] && (1 < p.length && /^[0-9a-f]{32}$/.test(p[1])) && (p = p[1], a.id = p, a.cmd[p] = a.cmd[p] || []))
                            }
                        }
                    }, window._hmt.cmd[c.id] = [], window._hmt.push.apply(window._hmt, a)
                },
                La: function () {
                    var a = window._hmt;
                    if (a && a.cmd && a.cmd[c.id])
                        for (var b = a.cmd[c.id], e = /^_track(Event|MobConv|Order|RTEvent)$/, q = 0, d = b.length; q < d; q++) {
                            var v = b[q];
                            e.test(v[0]) ? f.F.push(v) : f.fa(v)
                        }
                    a.cmd[c.id] = {
                        push: f.fa
                    }
                },
                Ma: function () {
                    if (0 < f.F.length)
                        for (var a = 0, b = f.F.length; a < b; a++) f.fa(f.F[a]);
                    f.F = t
                },
                fa: function (a) {
                    var b = a[0];
                    if (f.hasOwnProperty(b) &&
                        e.d(f[b], "Function")) f[b](a)
                },
                _setAccount: function (a) {
                    1 < a.length && /^[0-9a-f]{32}$/.test(a[1]) && (f.f |= 1)
                },
                _setAutoPageview: function (a) {
                    if (1 < a.length && (a = a[1], u === a || s === a)) f.f |= 2, h.b.qa = a
                },
                _trackPageview: function (a) {
                    if (1 < a.length && a[1].charAt && "/" === a[1].charAt(0)) {
                        f.f |= 4;
                        h.b.a.et = 0;
                        h.b.a.ep = "";
                        h.b.a.vl = g.L() + g.C();
                        h.b.a.kb = 0;
                        h.b.$ ? (h.b.a.nv = 0, h.b.a.st = 4) : h.b.$ = s;
                        var b = h.b.a.u,
                            e = h.b.a.su;
                        h.b.a.u = l.protocol + "//" + document.location.host + a[1];
                        f.ua || (h.b.a.su = document.location.href);
                        h.b.i();
                        h.b.a.u = b;
                        h.b.a.su =
                            e;
                        h.b.r = +new Date
                    }
                },
                _trackEvent: function (a) {
                    2 < a.length && (f.f |= 8, h.b.a.nv = 0, h.b.a.st = 4, h.b.a.et = 4, h.b.a.ep = e.j(a[1]) + "*" + e.j(a[2]) + (a[3] ? "*" + e.j(a[3]) : "") + (a[4] ? "*" + e.j(a[4]) : ""), h.b.i())
                },
                _setCustomVar: function (a) {
                    if (!(4 > a.length)) {
                        var b = a[1],
                            d = a[4] || 3;
                        if (0 < b && 6 > b && 0 < d && 4 > d) {
                            f.P++;
                            for (var q = (h.b.a.cv || "*").split("!"), x = q.length; x < b - 1; x++) q.push("*");
                            q[b - 1] = d + "*" + e.j(a[2]) + "*" + e.j(a[3]);
                            h.b.a.cv = q.join("!");
                            a = h.b.a.cv.replace(/[^1](\*[^!]*){2}/g, "*").replace(/((^|!)\*)+$/g, "");
                            "" !== a ? h.b.setData("Hm_cv_" +
                                c.id, encodeURIComponent(a), c.age) : h.b.jb("Hm_cv_" + c.id)
                        }
                    }
                },
                _setUserTag: function (a) {
                    if (!(3 > a.length)) {
                        var d = e.j(a[1]);
                        a = e.j(a[2]);
                        if (d !== r && a !== r) {
                            var f = decodeURIComponent(h.b.getData("Hm_ct_" + c.id) || ""),
                                f = b(f, d, 1, a);
                            h.b.setData("Hm_ct_" + c.id, encodeURIComponent(f), c.age)
                        }
                    }
                },
                _setVisitTag: function (a) {
                    if (!(3 > a.length)) {
                        var d = e.j(a[1]);
                        a = e.j(a[2]);
                        if (d !== r && a !== r) {
                            var g = f.m.ia,
                                g = b(g, d, 2, a);
                            f.m.ia = g
                        }
                    }
                },
                _setPageTag: function (a) {
                    if (!(3 > a.length)) {
                        var d = e.j(a[1]);
                        a = e.j(a[2]);
                        if (d !== r && a !== r) {
                            var g = f.m.page,
                                g = b(g, d, 3, a);
                            f.m.page = g
                        }
                    }
                },
                _setReferrerOverride: function (a) {
                    1 < a.length && (h.b.a.su = a[1].charAt && "/" === a[1].charAt(0) ? l.protocol + "//" + window.location.host + a[1] : a[1], f.ua = s)
                },
                _trackOrder: function (b) {
                    b = b[1];
                    e.d(b, "Object") && (a(b), f.f |= 16, h.b.a.nv = 0, h.b.a.st = 4, h.b.a.et = 94, h.b.a.ep = d.stringify(b), h.b.i())
                },
                _trackMobConv: function (a) {
                    if (a = {
                            webim: 1,
                            tel: 2,
                            map: 3,
                            sms: 4,
                            callback: 5,
                            share: 6
                        } [a[1]]) f.f |= 32, h.b.a.et = 93, h.b.a.ep = a, h.b.i()
                },
                _trackRTPageview: function (b) {
                    b = b[1];
                    e.d(b, "Object") && (a(b), b = d.stringify(b),
                        512 >= encodeURIComponent(b).length && (f.f |= 64, h.b.a.rt = b))
                },
                _trackRTEvent: function (b) {
                    b = b[1];
                    if (e.d(b, "Object")) {
                        a(b);
                        b = encodeURIComponent(d.stringify(b));
                        var g = function (a) {
                                var b = h.b.a.rt;
                                f.f |= 128;
                                h.b.a.et = 90;
                                h.b.a.rt = a;
                                h.b.i();
                                h.b.a.rt = b
                            },
                            m = b.length;
                        if (900 >= m) g.call(this, b);
                        else
                            for (var m = Math.ceil(m / 900), q = "block|" + Math.round(Math.random() * l.da).toString(16) + "|" + m + "|", x = [], v = 0; v < m; v++) x.push(v), x.push(b.substring(900 * v, 900 * v + 900)), g.call(this, q + x.join("|")), x = []
                    }
                },
                _setUserId: function (a) {
                    a = a[1];
                    n.fb();
                    n.rb(a)
                },
                _setAutoTracking: function (a) {
                    if (1 < a.length && (a = a[1], u === a || s === a)) h.b.ra = a
                },
                _setAutoEventTracking: function (a) {
                    if (1 < a.length && (a = a[1], u === a || s === a)) h.b.D = a
                }
            };
        f.init();
        h.Ea = f;
        return h.Ea
    })();
    (function () {
        function b() {
            "undefined" === typeof window["_bdhm_loaded_" + c.id] && (window["_bdhm_loaded_" + c.id] = s, this.a = {}, this.ra = this.qa = s, this.D = k.D, this.na = g.aa() && 0 < c.aet.length ? c.aet.split(",") : "", this.$ = u, this.init())
        }
        var a = mt.url,
            e = mt.ya,
            d = mt.ga,
            g = mt.lang,
            l = mt.cookie,
            m = mt.g,
            n = mt.localStorage,
            f = mt.sessionStorage,
            p = mt.l,
            k = h.o,
            w = h.A;
        b.prototype = {
            ba: function (a, b) {
                a = "." + a.replace(/:\d+/, "");
                b = "." + b.replace(/:\d+/, "");
                var d = a.indexOf(b);
                return -1 < d && d + b.length === a.length
            },
            va: function (a, b) {
                a = a.replace(/^https?:\/\//,
                    "");
                return 0 === a.indexOf(b)
            },
            N: function (b) {
                for (var d = 0; d < c.dm.length; d++)
                    if (-1 < c.dm[d].indexOf("/")) {
                        if (this.va(b, c.dm[d])) return s
                    } else {
                        var e = a.Y(b);
                        if (e && this.ba(e, c.dm[d])) return s
                    } return u
            },
            J: function () {
                for (var a = document.location.hostname, b = 0, d = c.dm.length; b < d; b++)
                    if (this.ba(a, c.dm[b])) return c.dm[b].replace(/(:\d+)?[/?#].*/, "");
                return a
            },
            W: function () {
                for (var a = 0, b = c.dm.length; a < b; a++) {
                    var d = c.dm[a];
                    if (-1 < d.indexOf("/") && this.va(document.location.href, d)) return d.replace(/^[^/]+(\/.*)/, "$1") +
                        "/"
                }
                return "/"
            },
            Va: function () {
                if (!document.referrer) return k.s - k.w > c.vdur ? 1 : 4;
                var b = u;
                this.N(document.referrer) && this.N(document.location.href) ? b = s : (b = a.Y(document.referrer), b = this.ba(b || "", document.location.hostname));
                return b ? k.s - k.w > c.vdur ? 1 : 4 : 3
            },
            getData: function (a) {
                try {
                    return l.get(a) || f.get(a) || n.get(a)
                } catch (b) {}
            },
            setData: function (a, b, d) {
                try {
                    l.set(a, b, {
                        domain: this.J(),
                        path: this.W(),
                        B: d
                    }), d ? n.set(a, b, d) : f.set(a, b)
                } catch (e) {}
            },
            jb: function (a) {
                try {
                    l.set(a, "", {
                            domain: this.J(),
                            path: this.W(),
                            B: -1
                        }),
                        f.remove(a), n.remove(a)
                } catch (b) {}
            },
            pb: function () {
                var a, b, d, e, f;
                k.w = this.getData("Hm_lpvt_" + c.id) || 0;
                13 === k.w.length && (k.w = Math.round(k.w / 1E3));
                b = this.Va();
                a = 4 !== b ? 1 : 0;
                if (d = this.getData("Hm_lvt_" + c.id)) {
                    e = d.split(",");
                    for (f = e.length - 1; 0 <= f; f--) 13 === e[f].length && (e[f] = "" + Math.round(e[f] / 1E3));
                    for (; 2592E3 < k.s - e[0];) e.shift();
                    f = 4 > e.length ? 2 : 3;
                    for (1 === a && e.push(k.s); 4 < e.length;) e.shift();
                    d = e.join(",");
                    e = e[e.length - 1]
                } else d = k.s, e = "", f = 1;
                this.setData("Hm_lvt_" + c.id, d, c.age);
                this.setData("Hm_lpvt_" + c.id,
                    k.s);
                d = l.gb(this.J(), this.W());
                if (0 === c.nv && this.N(document.location.href) && ("" === document.referrer || this.N(document.referrer))) a = 0, b = 4;
                this.a.nv = a;
                this.a.st = b;
                this.a.cc = d;
                this.a.lt = e;
                this.a.lv = f
            },
            ob: function () {
                for (var a = [], b = this.a.et, d = +new Date, e = 0, f = k.za.length; e < f; e++) {
                    var g = k.za[e],
                        l = this.a[g];
                    "undefined" !== typeof l && "" !== l && ("tt" !== g || "tt" === g && 0 === b) && (("ct" !== g || "ct" === g && 0 === b) && ("kb" !== g || "kb" === g && 3 === b)) && a.push(g + "=" + encodeURIComponent(l))
                }
                switch (b) {
                    case 0:
                        a.push("sn=" + k.z);
                        this.a.rt &&
                            a.push("rt=" + encodeURIComponent(this.a.rt));
                        break;
                    case 3:
                        a.push("sn=" + k.z);
                        break;
                    case 5:
                        a.push("sn=" + k.z);
                        a.push("_lpt=" + this.r);
                        a.push("_ct=" + d);
                        break;
                    case 6:
                        a.push("sn=" + k.z);
                        a.push("_lpt=" + this.r);
                        a.push("_ct=" + d);
                        break;
                    case 85:
                        a.push("sn=" + k.z);
                        break;
                    case 90:
                        this.a.rt && a.push("rt=" + this.a.rt)
                }
                return a.join("&")
            },
            qb: function () {
                this.pb();
                this.a.si = c.id;
                this.a.hca = r;
                this.a.su = document.referrer;
                this.a.hh = window.location.hash;
                this.a.ds = m.lb;
                this.a.cl = m.colorDepth + "-bit";
                this.a.ln = String(m.language).toLowerCase();
                this.a.ja = m.javaEnabled ? 1 : 0;
                this.a.ck = m.cookieEnabled ? 1 : 0;
                this.a.lo = "number" === typeof _bdhm_top ? 1 : 0;
                this.a.fl = d.Xa();
                this.a.v = "1.2.43";
                this.a.cv = decodeURIComponent(this.getData("Hm_cv_" + c.id) || "");
                this.a.tt = document.title || "";
                this.a.vl = m.L() + m.C();
                var b = document.location.href;
                this.a.cm = a.k(b, k.ab) || "";
                this.a.cp = a.k(b, k.bb) || a.k(b, k.wb) || "";
                this.a.cw = a.k(b, k.$a) || a.k(b, k.yb) || "";
                this.a.ci = a.k(b, k.Ya) || a.k(b, k.vb) || "";
                this.a.cf = a.k(b, k.cb) || a.k(b, k.xb) || "";
                this.a.cu = a.k(b, k.Za) || a.k(b, k.ub) || ""
            },
            init: function () {
                try {
                    this.qb(),
                        0 === this.a.nv ? this.nb() : this.oa(), h.b = this, this.Ga(), w.I("pv-b"), this.mb()
                } catch (a) {
                    var b = [];
                    b.push("si=" + c.id);
                    b.push("n=" + encodeURIComponent(a.name));
                    b.push("m=" + encodeURIComponent(a.message));
                    b.push("r=" + encodeURIComponent(document.referrer));
                    e.log(k.ca + "//" + k.wa + "?" + b.join("&"))
                }
            },
            mb: function () {
                function a() {
                    w.I("pv-d")
                }
                this.qa ? (this.$ = s, this.a.et = 0, this.a.ep = "", this.a.vl = m.L() + m.C(), this.i(a)) : a();
                this.r = +new Date
            },
            i: function (a) {
                if (this.ra) {
                    var b = this;
                    b.a.rnd = Math.round(Math.random() * k.da);
                    w.I("stag-b");
                    var d = k.ca + "//" + k.wa + "?" + b.ob();
                    w.I("stag-d");
                    b.Ca(d);
                    e.log(d, function (d) {
                        b.xa(d);
                        g.d(a, "Function") && a.call(b)
                    })
                }
            },
            Ga: function () {
                var b = document.location.hash.substring(1),
                    d = RegExp(c.id),
                    e = a.Y(document.referrer) === k.Da ? 1 : 0,
                    f = a.k(b, "jn"),
                    g = /^heatlink$|^select$|^pageclick$/.test(f);
                b && (d.test(b) && e && g) && (this.a.rnd = Math.round(Math.random() * k.da), b = document.createElement("script"), b.setAttribute("type", "text/javascript"), b.setAttribute("charset", "utf-8"), b.setAttribute("src", k.protocol + "//" + c.js + f + ".js?" +
                    this.a.rnd), f = document.getElementsByTagName("script")[0], f.parentNode.insertBefore(b, f))
            },
            Ca: function (a) {
                var b;
                try {
                    b = p.parse(f.get("Hm_unsent_" + c.id) || "[]")
                } catch (d) {
                    b = []
                }
                var e = this.a.u ? "" : "&u=" + encodeURIComponent(document.location.href);
                b.push(a.replace(/^https?:\/\//, "") + e);
                f.set("Hm_unsent_" + c.id, p.stringify(b))
            },
            xa: function (a) {
                var b;
                try {
                    b = p.parse(f.get("Hm_unsent_" + c.id) || "[]")
                } catch (d) {
                    b = []
                }
                if (b.length) {
                    a = a.replace(/^https?:\/\//, "");
                    for (var e = 0; e < b.length; e++)
                        if (a.replace(/&u=[^&]*/, "") === b[e].replace(/&u=[^&]*/,
                                "")) {
                            b.splice(e, 1);
                            break
                        } b.length ? f.set("Hm_unsent_" + c.id, p.stringify(b)) : this.oa()
                }
            },
            oa: function () {
                f.remove("Hm_unsent_" + c.id)
            },
            nb: function () {
                var a = this,
                    b;
                try {
                    b = p.parse(f.get("Hm_unsent_" + c.id) || "[]")
                } catch (d) {
                    b = []
                }
                if (b.length)
                    for (var g = function (b) {
                            e.log(k.ca + "//" + b, function (b) {
                                a.xa(b)
                            })
                        }, l = 0; l < b.length; l++) g(b[l])
            }
        };
        return new b
    })();
    (function () {
        var b = mt.event,
            a = mt.lang,
            e = h.o;
        if (c.kbtrk && "undefined" !== typeof h.b) {
            h.b.a.kb = a.ta(h.b.a.kb) ? h.b.a.kb : 0;
            var d = function () {
                h.b.a.et = 85;
                h.b.a.ep = h.b.a.kb;
                h.b.i()
            };
            b.c(document, "keyup", function () {
                h.b.a.kb++
            });
            b.c(window, "unload", function () {
                d()
            });
            setInterval(d, e.hb)
        }
    })();
    var B = h.o,
        C = h.load;
    c.pt && C([B.protocol, "//ada.baidu.com/phone-tracker/insert_bdtj?sid=", c.pt].join(""));
    (function () {
        var b = mt.g,
            a = mt.lang,
            e = mt.event,
            d = mt.l;
        if ("undefined" !== typeof h.b && (c.med || (!b.sa || 7 < b.eb) && c.cvcc)) {
            var g, l, m, n, f = function (a) {
                    if (a.item) {
                        for (var b = a.length, d = Array(b); b--;) d[b] = a[b];
                        return d
                    }
                    return [].slice.call(a)
                },
                p = function (a, b) {
                    for (var d in a)
                        if (a.hasOwnProperty(d) && b.call(a, d, a[d]) === u) return u
                },
                k = function (b, e) {
                    var f = {};
                    f.n = g;
                    f.t = "clk";
                    f.v = b;
                    if (e) {
                        var k = e.getAttribute("href"),
                            l = e.getAttribute("onclick") ? "" + e.getAttribute("onclick") : t,
                            n = e.getAttribute("id") || "";
                        m.test(k) ? (f.sn = "mediate",
                            f.snv = k) : a.d(l, "String") && m.test(l) && (f.sn = "wrap", f.snv = l);
                        f.id = n
                    }
                    h.b.a.et = 86;
                    h.b.a.ep = d.stringify(f);
                    h.b.i();
                    for (f = +new Date; 400 >= +new Date - f;);
                };
            if (c.med) l = "/zoosnet", g = "swt", m = /swt|zixun|call|chat|zoos|business|talk|kefu|openkf|online|\/LR\/Chatpre\.aspx/i, n = {
                click: function () {
                    for (var a = [], b = f(document.getElementsByTagName("a")), b = [].concat.apply(b, f(document.getElementsByTagName("area"))), b = [].concat.apply(b, f(document.getElementsByTagName("img"))), d, e, g = 0, k = b.length; g < k; g++) d = b[g], e = d.getAttribute("onclick"),
                        d = d.getAttribute("href"), (m.test(e) || m.test(d)) && a.push(b[g]);
                    return a
                }
            };
            else if (c.cvcc) {
                l = "/other-comm";
                g = "other";
                m = c.cvcc.q || r;
                var w = c.cvcc.id || r;
                n = {
                    click: function () {
                        for (var a = [], b = f(document.getElementsByTagName("a")), b = [].concat.apply(b, f(document.getElementsByTagName("area"))), b = [].concat.apply(b, f(document.getElementsByTagName("img"))), d, e, g, k = 0, l = b.length; k < l; k++) d = b[k], m !== r ? (e = d.getAttribute("onclick"), g = d.getAttribute("href"), w ? (d = d.getAttribute("id"), (m.test(e) || m.test(g) || w.test(d)) &&
                            a.push(b[k])) : (m.test(e) || m.test(g)) && a.push(b[k])) : w !== r && (d = d.getAttribute("id"), w.test(d) && a.push(b[k]));
                        return a
                    }
                }
            }
            if ("undefined" !== typeof n && "undefined" !== typeof m) {
                var q;
                l += /\/$/.test(l) ? "" : "/";
                var x = function (b, d) {
                    if (q === d) return k(l + b, d), u;
                    if (a.d(d, "Array") || a.d(d, "NodeList"))
                        for (var e = 0, f = d.length; e < f; e++)
                            if (q === d[e]) return k(l + b + "/" + (e + 1), d[e]), u
                };
                e.c(document, "mousedown", function (b) {
                    b = b || window.event;
                    q = b.target || b.srcElement;
                    var d = {};
                    for (p(n, function (b, e) {
                            d[b] = a.d(e, "Function") ? e() : document.getElementById(e)
                        }); q &&
                        q !== document && p(d, x) !== u;) q = q.parentNode
                })
            }
        }
    })();
    (function () {
        var b = mt.e,
            a = mt.lang,
            e = mt.event,
            d = mt.l;
        if ("undefined" !== typeof h.b && a.d(c.cvcf, "Array") && 0 < c.cvcf.length) {
            var g = {
                Aa: function () {
                    for (var a = c.cvcf.length, d, n = 0; n < a; n++)(d = b.Oa(decodeURIComponent(c.cvcf[n]))) && e.c(d, "click", g.Ka())
                },
                Ka: function () {
                    return function () {
                        h.b.a.et = 86;
                        var a = {
                            n: "form",
                            t: "clk"
                        };
                        a.id = this.id;
                        h.b.a.ep = d.stringify(a);
                        h.b.i()
                    }
                }
            };
            b.ib(function () {
                g.Aa()
            })
        }
    })();
    (function () {
        var b = mt.event,
            a = mt.l;
        if (c.med && "undefined" !== typeof h.b) {
            var e = +new Date,
                d = {
                    n: "anti",
                    sb: 0,
                    kb: 0,
                    clk: 0
                },
                g = function () {
                    h.b.a.et = 86;
                    h.b.a.ep = a.stringify(d);
                    h.b.i()
                };
            b.c(document, "click", function () {
                d.clk++
            });
            b.c(document, "keyup", function () {
                d.kb = 1
            });
            b.c(window, "scroll", function () {
                d.sb++
            });
            b.c(window, "unload", function () {
                d.t = +new Date - e;
                g()
            });
            b.c(window, "load", function () {
                setTimeout(g, 5E3)
            })
        }
    })();
})();