// React
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Components
import Nav from '../components/Nav';
import Contact from '../components/Contact';
import Instagram from '../components/Instagram';
import Twitter from '../components/Twitter';

// Images
import logoHero from '../assets/hero_logo.webp';
import logoVenmo from '../assets/venmo_logo.webp';



export default function Home() {
	return (
		<>
			<Helmet>
				<title>San Marcos Abortion Activists</title>
				<meta
					name='description'
					content="Fighting to keep the government's laws off our bodies."
				/>
			</Helmet>
			<Nav page='home' />
			<main id='home'>
				<h1>San Marcos Abortion Activists</h1>
				<section id='hero'>
					<div className='card'>
						<p>Fighting to keep the government's laws off our bodies.</p>
					</div>

					<img src={logoHero} alt='SMAA Logo' />
				</section>
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
						Get a Health Kit
					</Link>
				</section>
				<section id='donate'>
					<h2>Donate</h2>
					<div className='container'>
						<a
							href='https://account.venmo.com/u/smabortionactivists'
							target='_blank'
							class='btn'
							aria-label='venmo'
						>
							<h3>Venmo</h3>

							<img src={logoVenmo} alt='venmo' class='logoImg' />
							<p>@smabortionactivists</p>
						</a>
					</div>
				</section>
				<section id='socials'>
					<h2>Follow us on Social Media</h2>
					{/* TODO find out how to properly embed social media */}
					<div class='container'>
						<Instagram />
						<Twitter />
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
