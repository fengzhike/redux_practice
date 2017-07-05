import React from 'react'
import ReactDom from 'react-dom'
import './app'
class App extends React.Component{
	componentDidMount(){

	}
	handleClick(){
		alert('就知道你不老实,许看不许摸')

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