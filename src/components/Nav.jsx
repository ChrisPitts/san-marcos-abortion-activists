import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Nav(props)
{
	const navRef = useRef();
	const [burgerExpanded, setBurgerExpanded] = useState(false);
	function burgerClicked()
	{
		setBurgerExpanded((prevState) => !prevState);
		navRef.current.classList.toggle('visible');
	}

	console.dir(props);

	// TODO burger button should be accessible to screen readers
	return (
		<header>
			<Link to='/'>
				<img alt='smaa logo' src={logo} />
			</Link>
			<button onClick={burgerClicked} aria-label='Navigation Menu Expand'  aria-expanded={burgerExpanded} className='burger'>
				<div className='burger__bar'></div>
				<div className='burger__bar middle'></div>
				<div className='burger__bar'></div>
			</button>
			<nav ref={navRef}>
				<Link to='/about' className={props.page == 'about' ? 'selected' : ''}>
					About
				</Link>
				<Link to='/kits' className={props.page == 'kits' ? 'selected' : ''}>
					Health Kits
				</Link>
				<Link
					to='/resources'
					className={props.page == 'resources' ? 'selected' : ''}
				>
					Resources
				</Link>
			</nav>
		</header>
	);
}
