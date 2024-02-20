if (!self.define) {
    let e, s = {};
    const a = (a, c) => (a = new URL(a + ".js", c).href, s[a] || new Promise((s => {
        if ("document" in self) {
            const e = document.createElement("script");
            e.src = a, e.onload = s, document.head.appendChild(e)
        } else e = a, importScripts(a), s()
    })).then((() => {
        let e = s[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e
    })));
    self.define = (c, i) => {
        const n = e || ("document" in self ? document.currentScript.src : "") || location.href;
        if (s[n]) return;
        let t = {};
        const r = e => a(e, n),
            d = {
                module: {
                    uri: n
                },
                exports: t,
                require: r
            };
        s[n] = Promise.all(c.map((e => d[e] || r(e)))).then((e => (i(...e), t)))
    }
}
define(["./workbox-80ca14c3"], (function(e) {
    "use strict";
    importScripts(), self.skipWaiting(), e.clientsClaim(), e.precacheAndRoute([{
        url: "/_next/static/XYLoaRaOc3xnxPc2aGZb5/_buildManifest.js",
        revision: "472883469879282dae087915cd348395"
    }, {
        url: "/_next/static/XYLoaRaOc3xnxPc2aGZb5/_ssgManifest.js",
        revision: "b6652df95db52feb4daf4eca35380933"
    }, {
        url: "/_next/static/chunks/0b95d364.f8330668eba73249.js",
        revision: "f8330668eba73249"
    }, {
        url: "/_next/static/chunks/114.3f2c0b7e47ad2167.js",
        revision: "3f2c0b7e47ad2167"
    }, {
        url: "/_next/static/chunks/133.c76fd148d64fb457.js",
        revision: "c76fd148d64fb457"
    }, {
        url: "/_next/static/chunks/1785.12662bb717333a45.js",
        revision: "12662bb717333a45"
    }, {
        url: "/_next/static/chunks/1838.8b8095b7a62cd6b4.js",
        revision: "8b8095b7a62cd6b4"
    }, {
        url: "/_next/static/chunks/2634.a2f71afae68e9ffb.js",
        revision: "a2f71afae68e9ffb"
    }, {
        url: "/_next/static/chunks/2737.d2787db22bb0c4e0.js",
        revision: "d2787db22bb0c4e0"
    }, {
        url: "/_next/static/chunks/2796.1914d18f6731a98e.js",
        revision: "1914d18f6731a98e"
    }, {
        url: "/_next/static/chunks/3280.0c88fdbdeb66170e.js",
        revision: "0c88fdbdeb66170e"
    }, {
        url: "/_next/static/chunks/3657-072cfa0687bf765a.js",
        revision: "072cfa0687bf765a"
    }, {
        url: "/_next/static/chunks/3927.db30501935cea927.js",
        revision: "db30501935cea927"
    }, {
        url: "/_next/static/chunks/4300.38918a3f9de2bb77.js",
        revision: "38918a3f9de2bb77"
    }, {
        url: "/_next/static/chunks/4348.bced1575dddfc6d8.js",
        revision: "bced1575dddfc6d8"
    }, {
        url: "/_next/static/chunks/4381-b88dcdac8f55ef89.js",
        revision: "b88dcdac8f55ef89"
    }, {
        url: "/_next/static/chunks/441-e5b71954b1b01fde.js",
        revision: "e5b71954b1b01fde"
    }, {
        url: "/_next/static/chunks/4569-8ba898db2635d95a.js",
        revision: "8ba898db2635d95a"
    }, {
        url: "/_next/static/chunks/4583.f4ae4f0735262ff4.js",
        revision: "f4ae4f0735262ff4"
    }, {
        url: "/_next/static/chunks/461.d6b41ebca62683b5.js",
        revision: "d6b41ebca62683b5"
    }, {
        url: "/_next/static/chunks/5679.b41d1d9e91f56c10.js",
        revision: "b41d1d9e91f56c10"
    }, {
        url: "/_next/static/chunks/5724.579bd9c32bc6a026.js",
        revision: "579bd9c32bc6a026"
    }, {
        url: "/_next/static/chunks/5799-7d3b36e34306e73f.js",
        revision: "7d3b36e34306e73f"
    }, {
        url: "/_next/static/chunks/6065.3812cc081ce85ffa.js",
        revision: "3812cc081ce85ffa"
    }, {
        url: "/_next/static/chunks/610633a8.d7a5695df45d9032.js",
        revision: "d7a5695df45d9032"
    }, {
        url: "/_next/static/chunks/6177.55b8cd96f3b5e2c1.js",
        revision: "55b8cd96f3b5e2c1"
    }, {
        url: "/_next/static/chunks/6182.c76f1c2d2ded3f09.js",
        revision: "c76f1c2d2ded3f09"
    }, {
        url: "/_next/static/chunks/6250.b036b6f66c6a5834.js",
        revision: "b036b6f66c6a5834"
    }, {
        url: "/_next/static/chunks/6663.c68732a568d1de85.js",
        revision: "c68732a568d1de85"
    }, {
        url: "/_next/static/chunks/695.e05e8048c71ea51d.js",
        revision: "e05e8048c71ea51d"
    }, {
        url: "/_next/static/chunks/6db2f48c.e16e386f96b23d28.js",
        revision: "e16e386f96b23d28"
    }, {
        url: "/_next/static/chunks/7150.cdd337a51f01ab59.js",
        revision: "cdd337a51f01ab59"
    }, {
        url: "/_next/static/chunks/7258.8b01b66738a651da.js",
        revision: "8b01b66738a651da"
    }, {
        url: "/_next/static/chunks/7470.db7eb628cb5a881a.js",
        revision: "db7eb628cb5a881a"
    }, {
        url: "/_next/static/chunks/7501.3873f73ddc6d2d6b.js",
        revision: "3873f73ddc6d2d6b"
    }, {
        url: "/_next/static/chunks/7771-b3116749f55b8635.js",
        revision: "b3116749f55b8635"
    }, {
        url: "/_next/static/chunks/8144.c4b0178b72f45fbd.js",
        revision: "c4b0178b72f45fbd"
    }, {
        url: "/_next/static/chunks/8332.7ad7671c74f23c46.js",
        revision: "7ad7671c74f23c46"
    }, {
        url: "/_next/static/chunks/84c50e27-99a108292a0962f9.js",
        revision: "99a108292a0962f9"
    }, {
        url: "/_next/static/chunks/8824.6237a215b8ade3de.js",
        revision: "6237a215b8ade3de"
    }, {
        url: "/_next/static/chunks/9113.4a09fbf4b7ea7ed1.js",
        revision: "4a09fbf4b7ea7ed1"
    }, {
        url: "/_next/static/chunks/9806.0f219db3e2c49a91.js",
        revision: "0f219db3e2c49a91"
    }, {
        url: "/_next/static/chunks/9880.829fc51b1214ee7c.js",
        revision: "829fc51b1214ee7c"
    }, {
        url: "/_next/static/chunks/framework-0a897eab13466586.js",
        revision: "0a897eab13466586"
    }, {
        url: "/_next/static/chunks/main-6422fea90044addf.js",
        revision: "6422fea90044addf"
    }, {
        url: "/_next/static/chunks/pages/404-ec1b47bb79b2726c.js",
        revision: "ec1b47bb79b2726c"
    }, {
        url: "/_next/static/chunks/pages/_app-7e3ca582e72ce3c1.js",
        revision: "7e3ca582e72ce3c1"
    }, {
        url: "/_next/static/chunks/pages/_error-164297fbc114ffb6.js",
        revision: "164297fbc114ffb6"
    }, {
        url: "/_next/static/chunks/pages/_storyblok/footer-1aecaae5af7a3089.js",
        revision: "1aecaae5af7a3089"
    }, {
        url: "/_next/static/chunks/pages/_storyblok/header-2b9d4f6c2d24ceef.js",
        revision: "2b9d4f6c2d24ceef"
    }, {
        url: "/_next/static/chunks/pages/home-374f777de1d5947c.js",
        revision: "374f777de1d5947c"
    }, {
        url: "/_next/static/chunks/pages/index-de6b278fa8a7f831.js",
        revision: "de6b278fa8a7f831"
    }, {
        url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
        revision: "837c0df77fd5009c9e46d446188ecfd0"
    }, {
        url: "/_next/static/chunks/webpack-872a43968f08feae.js",
        revision: "872a43968f08feae"
    }, {
        url: "/_next/static/css/283673dcc740134b.css",
        revision: "283673dcc740134b"
    }, {
        url: "/_next/static/css/2d95d73c657d77ad.css",
        revision: "2d95d73c657d77ad"
    }, {
        url: "/_next/static/css/338597be2368c0ff.css",
        revision: "338597be2368c0ff"
    }, {
        url: "/_next/static/css/4eeec5b37519dda4.css",
        revision: "4eeec5b37519dda4"
    }, {
        url: "/_next/static/css/9c9670dcaa551878.css",
        revision: "9c9670dcaa551878"
    }, {
        url: "/_next/static/css/b40d32f6a4239b16.css",
        revision: "b40d32f6a4239b16"
    }, {
        url: "/_next/static/css/d5de5bb7a64ecff5.css",
        revision: "d5de5bb7a64ecff5"
    }, {
        url: "/_next/static/css/da59de745ff1cc8b.css",
        revision: "da59de745ff1cc8b"
    }, {
        url: "/_next/static/css/f7c607a20e300a59.css",
        revision: "f7c607a20e300a59"
    }, {
        url: "/android-chrome-192x192.png",
        revision: "f24b7488bcdc4264bb30a2ba784f1c4c"
    }, {
        url: "/android-chrome-512x512.png",
        revision: "d5a508b0cd11b99f0d30cf458438f6fd"
    }, {
        url: "/apple-touch-icon.png",
        revision: "ae45d8fbd62a7c452368f9926f5f4c5a"
    }, {
        url: "/browserconfig.xml",
        revision: "a493ba0aa0b8ec8068d786d7248bb92c"
    }, {
        url: "/favicon-16x16.png",
        revision: "f0005f2bdbba28db94df227eedebb228"
    }, {
        url: "/favicon-32x32.png",
        revision: "10b7f9e76b48cad60b543a759c4991d7"
    }, {
        url: "/favicon.ico",
        revision: "320a1801051cfe5607e97c3c56522a91"
    }, {
        url: "/fonts/beausite/BeausiteClassicWeb-Bold.woff2",
        revision: "9c8d23ce82bba74c5109afaf15dfa17c"
    }, {
        url: "/fonts/beausite/BeausiteClassicWeb-Regular.woff2",
        revision: "984e666ee6409c4a4137d603d0a5835d"
    }, {
        url: "/fonts/nb-architekt-std/nb_architekt_bold-webfont.woff2",
        revision: "3c77e60fe7d81106fb370c6c8015819d"
    }, {
        url: "/fonts/nb-architekt-std/nb_architekt_light-webfont.woff2",
        revision: "5897484c56eea3596fb9e83e564664bf"
    }, {
        url: "/fonts/nb-architekt-std/nb_architekt_regular-webfont.woff2",
        revision: "878af58b2b1fe831aa31b6917d02a0d6"
    }, {
        url: "/images/bg-grid.jpg",
        revision: "0556924183eb0146ef9b32976a5a3e28"
    }, {
        url: "/images/runic.png",
        revision: "80c7bc9ce4696f1ec31e10aeb15005c1"
    }, {
        url: "/images/world-engine.png",
        revision: "daea366855a9d39a9c7a71d1f8387f21"
    }, {
        url: "/manifest.json",
        revision: "99ec8d984d19a08d649578f1c646dce9"
    }, {
        url: "/masks/0-mask-mobile.svg",
        revision: "a67f959ba89db60c001fb4d76f0c50de"
    }, {
        url: "/masks/0-mask.svg",
        revision: "a5de2ca1ec325a2ca67052a56ad18d90"
    }, {
        url: "/masks/1-mask-mobile.svg",
        revision: "667fe51febed98c67d45e64ee324570f"
    }, {
        url: "/masks/1-mask.svg",
        revision: "fe5a9e7061abb1ee398f0d6513f6fc80"
    }, {
        url: "/masks/2-mask-mobile.svg",
        revision: "f4f23e63b572e771158c9a5dedb2729b"
    }, {
        url: "/masks/2-mask.svg",
        revision: "f4f23e63b572e771158c9a5dedb2729b"
    }, {
        url: "/masks/3-mask-mobile.svg",
        revision: "8e76e64b4a8aea3052869b4e66ea7326"
    }, {
        url: "/masks/3-mask.svg",
        revision: "a5eb13681558c7b6372e3969e3b770c8"
    }, {
        url: "/masks/4-mask-mobile.svg",
        revision: "c0c506229c03f071369c962328304bf4"
    }, {
        url: "/masks/4-mask.svg",
        revision: "e8dc9791c287708434c73688a1199d5c"
    }, {
        url: "/masks/5-mask-mobile.svg",
        revision: "d4b77755895a77e03f39126d65ef0cd6"
    }, {
        url: "/masks/5-mask.svg",
        revision: "8a212d108336c351ab28c5c964bb2156"
    }, {
        url: "/masks/6-mask-mobile.svg",
        revision: "5fcf031327e123665b5478fdcabff11e"
    }, {
        url: "/masks/6-mask.svg",
        revision: "a9be72fc91e8a2afee03bc1b0daa351d"
    }, {
        url: "/mstile-144x144.png",
        revision: "a88051977cea5f944d780011890980fc"
    }, {
        url: "/mstile-150x150.png",
        revision: "37a27f9ea4128abd04eafad0addb4909"
    }, {
        url: "/mstile-310x150.png",
        revision: "1f3536d6265e431f514f7976b1df92c3"
    }, {
        url: "/mstile-310x310.png",
        revision: "8454e50771e116e36cabd32773bf39d3"
    }, {
        url: "/mstile-70x70.png",
        revision: "21dce9b6fb23df11b51ca36e4795484a"
    }, {
        url: "/og.jpg",
        revision: "13aaca14f536edd6f112980d29bc28c2"
    }, {
        url: "/robots.txt",
        revision: "7aaf7916809543e0a5b775b471508689"
    }, {
        url: "/safari-pinned-tab.svg",
        revision: "e2b8073d043c75f73955945e9b549b7f"
    }, {
        url: "/site.webmanifest",
        revision: "99ec8d984d19a08d649578f1c646dce9"
    }, {
        url: "/sitemap-0.xml",
        revision: "3ba774cd36ee2db60dd1a032f8752d1e"
    }, {
        url: "/sitemap.xml",
        revision: "bd4527ad503a95a1e927732ddf6db6d9"
    }], {
        ignoreURLParametersMatching: []
    }), e.cleanupOutdatedCaches(), e.registerRoute("/", new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [{
            cacheWillUpdate: async ({
                request: e,
                response: s,
                event: a,
                state: c
            }) => s && "opaqueredirect" === s.type ? new Response(s.body, {
                status: 200,
                statusText: "OK",
                headers: s.headers
            }) : s
        }]
    }), "GET"), e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i, new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 31536e3
        })]
    }), "GET"), e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i, new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 604800
        })]
    }), "GET"), e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i, new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 604800
        })]
    }), "GET"), e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i, new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400
        })]
    }), "GET"), e.registerRoute(/\/_next\/image\?url=.+$/i, new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400
        })]
    }), "GET"), e.registerRoute(/\.(?:mp3|wav|ogg)$/i, new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [new e.RangeRequestsPlugin, new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400
        })]
    }), "GET"), e.registerRoute(/\.(?:mp4)$/i, new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [new e.RangeRequestsPlugin, new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400
        })]
    }), "GET"), e.registerRoute(/\.(?:js)$/i, new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400
        })]
    }), "GET"), e.registerRoute(/\.(?:css|less)$/i, new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400
        })]
    }), "GET"), e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i, new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400
        })]
    }), "GET"), e.registerRoute(/\.(?:json|xml|csv)$/i, new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400
        })]
    }), "GET"), e.registerRoute((({
        url: e
    }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/")
    }), new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({
            maxEntries: 16,
            maxAgeSeconds: 86400
        })]
    }), "GET"), e.registerRoute((({
        url: e
    }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/")
    }), new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400
        })]
    }), "GET"), e.registerRoute((({
        url: e
    }) => !(self.origin === e.origin)), new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 3600
        })]
    }), "GET")
}));