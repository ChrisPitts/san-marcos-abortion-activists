// React
import React from 'react';
import { Helmet } from 'react-helmet';

// Components
import Nav from '../components/Nav';
import Contact from '../components/Contact';

// Images
import logo from '../assets/logo.webp';
import logoBridgeCollective from '../assets/bridge_collective_logo.webp';
import logoMDH from '../assets/mdh_logo.webp';
import logoSplash from '../assets/splash_logo.webp';
import logoWTD from '../assets/logo_wtd.webp';
import logoS13 from '../assets/logo_s13.webp';

export default function Kits() {
	return (
		<>
			<Helmet>
				<title>Health Kits</title>
				<meta
					name='description'
					content='San Marcos Abortion Activists has teamed up with The Bridge Collective to help distribute contraceptives and pregnancy tests to San Martians!'
				/>
			</Helmet>
			<Nav page='kits' />
			<main>
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
						<a href='https://maps.app.goo.gl/Ci3zZtkr5KxdwD3UA' target='_blank'>
							<figure>
								<h3>Modern Day Hemp</h3>
								<img alt='Modern Day Hemp' src={logoMDH} />
								<p aria-description='hours'>1pm to 9pm</p>
								<p aria-description='address'>317 N LBJ Dr</p>
							</figure>
						</a>
						{/* <figure>
							<h3>Lazy Daze</h3>
							<img alt='Lazy Daze' src={logoLazydaze}></img>
							<p aria-description='hours'>9am to 9pm</p>
							<p aria-description='address'>718 E Hopkins St</p>
						</figure> */}
						<a href='https://maps.app.goo.gl/cNXrNL49Wsq4hwna7' target='_blank'>
							<figure>
								<h3>Splash Coworking</h3>
								<img alt='Splash Coworking' src={logoSplash} />
								<p aria-description='days'>Monday through Friday</p>
								<p aria-description='hours'>8am to 6pm</p>
								<p aria-description='address'>326 N LBJ Dr</p>
							</figure>
						</a>
						<a href='https://maps.app.goo.gl/oBQihxVunCcRrfQUA' target='_blank'>
							<figure>
								<h3>Wake the Dead</h3>
								<img alt='Wake the Dead' src={logoWTD} />
								<p aria-description='hours'>7am to 10pm</p>
								<p aria-description='address'>1432 Old Ranch Rd 12</p>
							</figure>
						</a>
						<a href='https://maps.app.goo.gl/nKSzxsV9a7WaeXhE9' target='_blank'>
							<figure>
								<h3>Studio 13</h3>
								<img alt='Studio 13' src={logoS13} />
								<p aria-description='hours'>Sunday 1pm to 6pm</p>
								<p aria-description='hours'>M-Sa 12pm to 8pm</p>
								<p aria-description='address'>171 S L B J Dr</p>
							</figure>
						</a>
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
