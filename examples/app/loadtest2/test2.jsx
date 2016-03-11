import Test4 from './loadtest4/test4';

export default class Test2 extends React.Component {
	render () {
		return (
			<div>
				Hello Test1, i will load Test4 use 'import'!
				<center>
					<Test4 />
				</center>
			</div>);
	}
}