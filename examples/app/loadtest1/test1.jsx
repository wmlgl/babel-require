import Test3 from './loadtest3/test3';
import Test4 from '../loadtest2/loadtest4/test4';

export default class Test1 extends React.Component {
	render () {
		return (
			<div>
				Hello Test1, i will load Test3 and Test4 use 'import'!
				<center>
					<Test3 />
					<Test4 />
				</center>
			</div>);
	}
}