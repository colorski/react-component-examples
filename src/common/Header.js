import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './../assets/images/logo.svg';
import './Header.css'

export default class Header extends Component {
	render (){
		return (
			<header className="App-header">
				<Link to='/' className="link">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome</h1>
				</Link>
			</header>
		)
	}
}
