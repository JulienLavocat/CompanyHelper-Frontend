! function () {
	const config = {
		scale: .85,
		delay: 150
	};
	window.nwdbConfig && (window.nwdbConfig.scale && (config.scale = window.nwdbConfig.scale), window.nwdbConfig.delay && (config.delay = window.nwdbConfig.delay));
	const nwdbHost = "https://nwdb.info",
		iframeElement = document.createElement("iframe");
	iframeElement.sandbox = "allow-scripts allow-popups allow-same-origin", iframeElement.style.opacity = 0, iframeElement.style.position = "fixed", iframeElement.style.height = "500px", iframeElement.style.width = "416px", iframeElement.style.zIndex = 9e4, iframeElement.style.pointerEvents = "none", iframeElement.style.transform = "scale(" + config.scale + ")", iframeElement.style.transformOrigin = "top left", iframeElement.style.marginLeft = "15px", iframeElement.style.boxShadow = "0px 0px 0px 1px rgba(0,0,0,0.75)", iframeElement.style.webkitBoxShadow = "0px 0px 0px 1px rgba(0,0,0,0.75)", iframeElement.style.border = "none", document.body.appendChild(iframeElement);
	let currentTimout, o, s, d, l, r = false;

	function a(itemUrl) {
		itemUrl ? async function (e) {
			iframeElement.src = e + "?embed=true", r = true, setTimeout(w, 0)
		}(new URL(itemUrl)): setIframeInsivible()
	}
	window.addEventListener("message", function (msg) {
		console.log(msg);
		let data = msg.data;
		data && "nwdb-embed-resize" === data.type && (iframeElement.style.height = data.height + 0 + "px", r && (w(), iframeElement.style.opacity = 1))
	}, false);
	const c = "ontouchstart" in document.documentElement && /mobi/i.test(navigator.userAgent);

	function setIframeInsivible() {
		r = false, iframeElement.style.opacity = 0
	}

	function w() {
		if (!iframeElement) return;
		d = o, l = s;
		const t = iframeElement.offsetHeight * config.scale,
			i = iframeElement.offsetWidth * config.scale + 15;
		l + t > window.innerHeight && (l = window.innerHeight - t), d + i > window.innerWidth && (d = window.innerWidth - i), iframeElement.style.top = l + "px", iframeElement.style.left = d + "px"
	}
	window.addEventListener("mousemove", function (n) {
		if (c) return;
		o = n.clientX, s = n.clientY;
		const isNwdbLink = function (e) {
			for (; e && "A" !== e.nodeName.toUpperCase();) e = e.parentNode;
			return !!(e && e.href && (e.href.includes(nwdbHost + "/db/item/") || e.href.includes(nwdbHost + "/db/perk/") || e.href.includes(nwdbHost + "/db/ability/") || e.href.includes(nwdbHost + "/db/quest/") || e.href.includes(nwdbHost + "/db/recipe/") || e.href.includes(nwdbHost + "/db/gatherable/") || e.href.includes(nwdbHost + "/db/creature/"))) && e.href
		}(n.target);
		isNwdbLink ? (clearTimeout(currentTimout), currentTimout = setTimeout(() => {
			r || a(isNwdbLink)
		}, config.delay), w()) : (clearTimeout(currentTimout), setIframeInsivible())
	})
}();