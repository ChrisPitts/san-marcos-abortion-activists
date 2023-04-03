import React from 'react';
import Nav from '../components/Nav';
import Contact from '../components/Contact';
import logo from '../assets/logo.webp';
import logoBridgeCollective from '../assets/bridge_collective_logo.webp';
import logoMDH from '../assets/mdh_logo.webp';
import logoLazydaze from '../assets/lazydaze_logo.webp';
import logoSplash from '../assets/splash_logo.webp';
import { Helmet } from 'react-helmet';

export default function Kits() {
	return (
		<>
			<Helmet>
				<title>Health Kits</title>
				<meta name="description" content="San Marcos Abortion Activists has teamed up with The Bridge Collective to help distribute contraceptives and pregnancy tests to San Martians!"/>
			</Helmet>
			<Nav page='kits' />
			<main id='kits'>
				<h1>Reproductive Healthcare Kits</h1>
				<section id='kit_hero' className='container'>
					<img alt='SMAA Logo' class='smaa_logo' src={logo} />
					<div>
						<p>
							San Marcos Abortion Activists has teamed up with{' '}
							<a href='https://thebridgecollective.org/' target='_blank'>
								The Bridge Collective
							</a>{' '}
							to help distribute contraceptives and pregnancy tests to San
							Martians!
						</p>
						<div className='container'>
							<a href='#pickup' className='btn'>
								Go to one of our Pickup Locations
							</a>
							<a
								href='https://docs.google.com/forms/d/e/1FAIpQLSdymu9nRJOlcjQHysooPwHrLotZ7-thdmOP9dZ6hxUt2HFarQ/viewform'
								className='btn'
								target='_blank'
							>
								Request a Kit Delivery
							</a>
						</div>
					</div>

					<img alt='Bridge Collective Logo' src={logoBridgeCollective} />
				</section>
				<section id='pickup'>
					<h2>Pick Up Locations</h2>
					<p>
						These local businesses have agreed to be pickup spots for us. Just
						walk in and ask for a repro health kit, and they will give you one
						free of charge!
					</p>
					<div class='container'>
						<figure>
							<h3>Modern Day Hemp</h3>
							<img alt='Modern Day Hemp' src={logoMDH} />
							<p>317 N LBJ Dr</p>
						</figure>
						<figure>
							<h3>Lazy Daze</h3>
							<img alt='Lazy Daze' src={logoLazydaze}></img>
							<p>718 E Hopkins St</p>
						</figure>
						<figure>
							<h3>Splash Coworking</h3>
							<img alt='Splash Coworking' src={logoSplash} />
							<p>326 N LBJ Dr</p>
						</figure>
					</div>
				</section>
				<section id='contact'>
					<h2>Contact Us</h2>
					<Contact />
				</section>
			</main>
		</>
	);
}
