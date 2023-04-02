import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.webp';

export default function Nav(props) {
	const navRef = useRef();
	const [burgerExpanded, setBurgerExpanded] = useState(false);
	function burgerClicked() {
		setBurgerExpanded((prevState) => !prevState);
		navRef.current.classList.toggle('visible');
	}

	console.dir(props);

	// TODO add ARIA current element to nav links
	return (
		<header>
			<Link to='/'>
				<img alt='smaa logo' src={logo} />
			</Link>
			<button
				onClick={burgerClicked}
				aria-label='Navigation Menu Expand'
				aria-expanded={burgerExpanded}
				className='burger'
			>
				<div className='burger__bar'></div>
				<div className='burger__bar middle'></div>
				<div className='burger__bar'></div>
			</button>
			<nav ref={navRef}>
				<Link
					to='/about'
					className={props.page == 'about' ? 'selected' : ''}
					aria-current={props.page == 'about' ? 'page' : ''}
				>
					About
				</Link>
				<Link
					to='/kits'
					className={props.page == 'kits' ? 'selected' : ''}
					aria-current={props.page == 'kits' ? 'page' : ''}
				>
					Health Kits
				</Link>
				<Link
					to='/resources'
					className={props.page == 'resources' ? 'selected' : ''}
					aria-current={props.page == 'resources' ? 'page' : ''}
				>
					Resources
				</Link>
			</nav>
		</header>
	);
}
