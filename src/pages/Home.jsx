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
import logoCashApp from '../assets/cashapp_logo.svg';

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
					<p>Fighting to keep the government's laws off our bodies.</p>
					<img src={logoHero} alt='SMAA Logo' />
				</section>
				<section id='news'>
					<h2>In the News</h2>
					<div className='container'>
						<a className='article' target='_blank' href='https://www.kxan.com/news/texas-abortion/abortion-rights-activists-reflect-on-anniversary-of-scotus-dobbs-decision-overturn-of-roe-v-wade/'>
							<article>
								<figure>
									<img src='https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fwww.kxan.com%2Fwp-content%2Fuploads%2Fsites%2F40%2F2023%2F06%2FACCORD1.jpg%3Fw%3D1280' alt='Table with a sign on it that has the mean girls car meme captioned "Get in loser. Were funding abortion"'/>
								</figure>
								<figcaption>Abortion rights activists reflect on anniversary of SCOTUS’ Dobbs decision, overturn of Roe v. Wade</figcaption>
								<p className="date">Mercedes Hernandez, KXAN</p>
								<p className="date">Jun 24, 2023</p>
							</article>
							
						</a>
						<a className="article" target='_blank' href='https://janesdueprocess.org/blog/youth-to-the-front-meet-the-san-marcos-abortion-activists/'>
							
								<figure><img alt='Listen to young people' src='https://janesdueprocess.org/wp-content/uploads/2021/09/Listen-to-Young-People-980x551.png'/></figure>
								<figcaption>Youth to the Front: Meet the San Marcos Abortion Activists</figcaption>
								<p className='date'>Jane's Due Process</p>
								<p className='date'>Aug 18, 2022</p>
							
						</a>
					</div>
				</section>
				<section id='kits'>
					<h2>Need emergency contraceptives or pregnancy tests?</h2>
					
						<p>
							San Marcos Abortion Activists has partnered with{' '}
							<a href='https://thebridgecollective.org/' target='_blank'>
								The Bridge Collective
							</a>{' '}
							to deliver free reproductive health kits to San Martians! Kits can
							be requested at one of our pickup locations, or delivered to your
							door by one of our volunteers!
						</p>
					

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
						<a
							href='https://cash.app/$smabortionactivists'
							target='_blank'
							className='btn'
							aria-label='cashapp'
						>
							<h3>Cashapp</h3>
							<img src={logoCashApp} alt='cashapp' class='logoImg' />
							<p>$smabortionactivists</p>
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
