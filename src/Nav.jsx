import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.jpg';

export default function Nav(props) {
	console.dir(props);
	return (
		<header>
			<Link to='/'>
				<img alt='smaa logo' src={logo} />
			</Link>
			<nav>
				<Link to='/' className={props.page == 'home' ? 'selected' : ''}>
					Home
				</Link>
				<Link to='/about' className={props.page == 'about' ? 'selected' : ''}>
					About
				</Link>
			</nav>
		</header>
	);
}
