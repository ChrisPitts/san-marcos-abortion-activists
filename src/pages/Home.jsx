import React from 'react';
import Nav from '../nav';
import logoVenmo from '../assets/venmo_logo.png';

export default function Home() {
	return (
		<>
			<Nav page='home' />
			<main>
				<h1>San Marcos Abortion Activists</h1>
				<section id='donate'>
					<h2>Donate</h2>
					<div className='container'>
						<div>
							<h3>Venmo</h3>
							<a href='https://account.venmo.com/u/smabortionactivists'>
								<img src={logoVenmo} alt='venmo' class='logoImg' />
								<p>@smabortionactivists</p>
							</a>
						</div>
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
