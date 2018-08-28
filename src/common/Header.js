import React, { Component } from 'react';
import logo from './../assets/images/logo.svg';
import './Header.css'

export default class Header extends Component {
	render (){
		return (
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1 className="App-title">Welcome to</h1>
			</header>
		)
	}
}
