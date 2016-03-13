#babel-require
----------------------------------------------
通过同步AJAX请求实现，性能低下，请只用于开发调试，生产环境请使用webpack等静态编译工具。  
Implement by Synchronous AJAX, low performance, we use it in development and debug, not use it in production environment.  

##Supported:
------------------------------------------------
支持Babel版本:
    **Babel5.x**  


##Config:
-----------------------------------------------
加载模块时，如果配置了jsx，并且该模块属于jsx项配置的目录下，则加载".jsx"文件，否则加载".js"文件。
Config exmaple:
```HTML
<script type="text/javascript">
require.config({
    jsx: ["app"]
});
</script>
<script type="text/babel">
    // 会加载"app/app.jsx"
    // Will be load "app/app.jsx"
    import App from "app/app";

    // 会加载"lib/hello.js"
    // Will be load "lib/hello.js"
    import Hello from "lib/hello";
</script>
```
##Example:
------------------------------------------------
```HTML

<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<title>Examples</title>
		<script src="lib/react/react.js"></script>
		<script src="lib/react/react-dom.js"></script>
		<script src="lib/babel-core/browser.js"></script>
		<script src="lib/babel-core/browser-polyfill.js"></script>
		<script src="dest/babel-require.js"></script>
	</head>
	<body>
		<div id="container">loading...</div>
	</body>
</html>
<script type="text/babel">
	import App from "app/app";
	
	ReactDOM.render(<App/>, document.getElementById('container'));
</script>
```

```jsx
// file: app/app.jsx
import Test1 from './loadtest1/test1.jsx'
import Test2 from './loadtest2/test2.jsx'

export default class App extends React.Component {
	render () {
		return (
			<div>
				Hello App!
				<Test1 />
				<Test2 />
			</div>
		);
	}
}
```