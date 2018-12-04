import React from "react";

class Test extends React.Component {
	constructor() {
		super();
		this.state = {
			hello: 123
		}
		this.clickEvt = this.clickEvt.bind(this)
	}
	render() {
		return (
			<div>
				<button onClick={this.clickEvt}>測試</button>
			</div>
			)
	}
	clickEvt() {
		console.log(this);
	}
}

export default Test;