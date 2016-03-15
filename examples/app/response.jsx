import Test1 from './loadtest1/test1'
import Test2 from './loadtest2/test2'

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
