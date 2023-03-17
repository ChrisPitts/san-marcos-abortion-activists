import React from 'react';
import Nav from '../nav';
import logo from '../assets/logo.jpg';
import logoBridgeCollective from '../assets/bridge_collective_logo.png';
import logoMDH from '../assets/mdh_logo.jpg';
import logoLazydaze from '../assets/lazydaze_logo.webp';

export default function Kits() {
	return (
		<>
			<Nav page='kits' />
			<main>
				<h1>Reproductive Healthcare Kits</h1>
				<section id='kit_hero' className='container'>
					<img alt='SMAA Logo' src={logo} />
					<div>
						<h2>Get a Reproductive Health Kit</h2>
						<p>
							San Marcos Abortion Activists has teamed up with{' '}
							<a href='#'>The Bridge Collective</a> to help distribute
							contraceptives and pregnancy tests to San Martians!
						</p>
						<br />
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
					</div>
				</section>
			</main>
		</>
	);
}
