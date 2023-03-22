import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Nav(props) {
	console.dir(props);
	return (
		<header>
			<Link to='/'>
				<img alt='smaa logo' src={logo} />
			</Link>
			<nav>
				<Link to='/about' className={props.page == 'about' ? 'selected' : ''}>
					About
				</Link>
				<Link to='/kits' className={props.page == 'kits' ? 'selected' : ''}>
					Health Kits
				</Link>
				<Link to='/resources' className={props.page == 'resources' ? 'selected' : ''}>
					Resources
				</Link>
			</nav>
		</header>
	);
}
