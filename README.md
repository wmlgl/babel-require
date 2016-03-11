#babel-require

##目前仅支持import ".jsx"文件!
##Only support imports ".jsx" file now.

示列(Example):
```html

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

文件：
```js
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