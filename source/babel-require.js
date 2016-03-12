(function(){
	var cmdRequire = require;
	window.require = function(url) {
		
		var fullpath = require.getFullPath(url);
		
		try {
			return cmdRequire(fullpath);
		} catch(e) {
			var xhr = new XMLHttpRequest();
			xhr.open("GET", fullpath, false);
			xhr.send();
			
			if(!/^file:/.test(location.protocol) && xhr.status != 200) {
				throw new Error("require error: http status " + xhr.status);
			}
			
			var code = babel.transform(xhr.responseText).code;
			require.register(require.resolve(fullpath), new Function("module, exports, require",code));
			return cmdRequire(fullpath);
		}
	};
	
	require._options = { jsx:[] };
	require.config = function(options) {
		this._options = options;
	};
	
	require.getFullPath = function(name) {
		this._options.jsx.forEach(function(path){
			if(name.indexOf(path) == 0) {
				name += ".jsx";
				return false;
			} else {
				name += ".js";
			}
		});
		return name;
	};

	require.register = cmdRequire.register;
	require.relative = cmdRequire.relative;
	require.resolve  = cmdRequire.resolve;
	require.modules  = cmdRequire.modules;
	
})();