// Usage
//
//   require.register("browser/debug.js", function(module, exports, require){
//     // Module code goes here
//   });
//
//   var debug = require("browser/debug.js");

function require(p){
  var path = require.resolve(p);
  var mod = require.modules[path];
  if (!mod) throw new Error('failed to require "' + p + '"');
  if (!mod.exports) {
    mod.exports = {};
    mod.call(mod.exports, mod, mod.exports, require.relative(path));
  }
  return mod.exports;
}

require.modules = {};

require.resolve = function (path){
  var orig = path;
  var reg = path + '.js';
  var index = path + '/index.js';
  return require.modules[reg] && reg
    || require.modules[index] && index
    || orig;
};

require.register = function (path, fn){
  require.modules[path] = fn;
};

require.relative = function (parent) {
  return function(p){
    if ('.' != p.charAt(0)) return require(p);
    var path = parent.split('/');
    var segs = p.split('/');
    path.pop();

    for (var i = 0; i < segs.length; i++) {
      var seg = segs[i];
      if ('..' == seg) path.pop();
      else if ('.' != seg) path.push(seg);
    }

    return require(path.join('/'));
  };
};(function(){
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