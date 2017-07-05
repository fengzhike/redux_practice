import React from 'react'
import ReactDom from 'react-dom'
import './app'
class App extends React.Component{
	componentDidMount(){

	}
	handleClick(){
		alert(1)

	}
	render(){
		return (
			<div onClick = {::this.handleClick}>Hello Word!</div>
			)
	}
}




ReactDom.render(
	<App />,
	document.getElementById('app')
)