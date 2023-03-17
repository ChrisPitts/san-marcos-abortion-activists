import React from 'react';
import Nav from '../nav';
import { Link } from 'react-router-dom';
import logoVenmo from '../assets/venmo_logo.png';

export default function Home() {
	return (
		<>
			<Nav page='home' />
			<main>
				<h1>San Marcos Abortion Activists</h1>
				<section id='kits'>
					<h2>Need emergency contraceptives or pregnancy tests?</h2>
					<article>
						<p>
							San Marcos Abortion Activists has partnered with{' '}
							<a href='https://thebridgecollective.org/' target='_blank'>
								The Bridge Collective
							</a>{' '}
							to deliver free reproductive health kits to San Martians! Kits can
							be requested at one of our pickup locations, or delivered to your
							door by one of our volunteers!
						</p>
					</article>

					<Link to='/kits' class='btn'>
						Get a Reproductive Health Kit
					</Link>
				</section>
				<section id='donate'>
					<h2>Donate</h2>
					<div className='container'>
						<a
							href='https://account.venmo.com/u/smabortionactivists'
							target='_blank'
							class='btn'
						>
							<h3>Venmo</h3>

							<img src={logoVenmo} alt='venmo' class='logoImg' />
							<p>@smabortionactivists</p>
						</a>
					</div>
				</section>
				<section id='socials'>
					<h2>Follow us on Social Media</h2>
				</section>
				<section id='contact'>
					<h2>Contact Us</h2>
				</section>
			</main>
		</>
	);
}
