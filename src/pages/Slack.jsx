// React
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Components
// Components
import Nav from '../components/Nav';
import Contact from '../components/Contact';

export default function Slack() {
	const homepageURL = window.location.protocol + '//' + window.location.host;
	return (
		<>
			<Helmet>
				<title>San Marcos Abortion Activists</title>
				<meta
					name='description'
					content="Fighting to keep the government's laws off our bodies."
				/>
            </Helmet>
            
			<Nav page='slack' />
			<main id='slack'>
				<h1>Slack Entry Request Form</h1>
				<p>
					Slack is our primary communication platform. Fill out this form to
					recieve an invite to our slack channel!
				</p>
				<form
					action='https://formsubmit.co/c466330d25aa0a9ea5dd88850935c57f'
					method='POST'
				>
					<label htmlFor='name' className='required'>
						Name
					</label>
					<input type='text' name='name' id='name' aria-label='name' required />
					<label htmlFor='pronouns' className='required'>
						Pronouns
					</label>
					<input
						type='text'
						name='pronouns'
						id='pronouns'
						aria-label='pronouns'
						required
					/>
					<label htmlFor='email' className='required'>
						Email
					</label>
					<input
						type='email'
						name='email'
						id='email'
						aria-label='email'
						required
					/>
					<label htmlFor='social' className='required'>
						Link to Social Media Account
					</label>
					<input
						type='text'
						name='social'
						id='social'
						aria-label='link to social media account'
					/>
					<p>
						We use social media for vetting. If you don't use social media, or
						would prefer not to share your profile, type "N/A"
					</p>
					<input type='submit' name='submit' id='submit' />
					<input
						type='hidden'
						name='_next'
						value={homepageURL + '/formsubmitted'}
					></input>
				</form>
			</main>
		</>
	);
}
