(function(){
	var cmdRequire = require;
	window.require = function(url) {
		
		if(!/.jsx\b/i.test(url)) {
			url += ".jsx";
		}
		
		
		try {
			return cmdRequire(url);
		} catch(e) {
			var xhr = new XMLHttpRequest();
			xhr.open("GET", url, false);
			xhr.send();
			
			if(!/^file:/.test(location.protocol) && xhr.status != 200) {
				throw new Error("require error: http status " + xhr.status);
			}
			
			var code = babel.transform(xhr.responseText).code;
			require.register(require.resolve(url), new Function("module, exports, require",code));
			return cmdRequire(url);
		}
	};

	require.register = cmdRequire.register;
	require.relative = cmdRequire.relative;
	require.resolve  = cmdRequire.resolve;
	require.modules  = cmdRequire.modules;
})();