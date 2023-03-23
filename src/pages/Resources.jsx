import React from 'react';
import Nav from '../components/Nav';

export default function Resources() {
	return (
		<>
			<header>
				<Nav page='resources' />
			</header>
			<main id='resources'>
				<h1>Resources</h1>
				<section id='informational'>
					<h2>Informational Resources</h2>
					<div class='container'>
						<article>
							<h3>Red State Access</h3>
						</article>
						<article>
							<h3>Plan C Pills</h3>
						</article>
						<article>
							<h3>I Need An A</h3>
						</article>
						<article>
							<h3>National Network of Abortion Funds</h3>
						</article>
					</div>
				</section>
				<section id='security'>
					<h2>Cyber Security</h2>
					<div className='container'>
						<article>
							<h3>Digital Defense Fund</h3>
						</article>
						<article>
							<h3>Electronic Frontier Foundation</h3>
						</article>
					</div>
				</section>
				<section id='pregnant'>
					<h2>Help for Pregnant Texans</h2>
					<div className='container'>
						<article>
							<h3>Buckle Bunnies Find</h3>
						</article>
						<article>
							<h3>Lilith Fund</h3>
						</article>
						<article>
							<h3>La Frontera Fund</h3>
						</article>
					</div>
				</section>
				<section id='legal'>
					<h2>Legal Help</h2>
					<div className='container'>
						<article>
							<h3>If/When/How's Legal Defense Hotline</h3>
						</article>
						<article>
							<h3>Jane's Due Process</h3>
						</article>
					</div>
				</section>
				<section id='emotional'>
					<h2>Emotional Support</h2>
					<div className='container'>
						<article>
							<h3>Post Abortion Truth and Healing Group (P.A.T.H)</h3>
						</article>
						<article>
							<h3>Exhale Pro-Voice</h3>
						</article>
						<article>
							<h3>All-Options Talkline</h3>
						</article>
						<article><h3>Faith Aloud</h3></article>
					</div>
				</section>
			</main>
		</>
	);
}
