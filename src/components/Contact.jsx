import React from 'react';

export default function Contact() {
	const homepageURL = window.location.protocol + '//' + window.location.host;
	return (
		<>
			<p>Fill out this form or email us at <a href='mailto:info@smabortionactivists.org'>info@smabortionactivists.org</a> and we will get back to you as soon as we can!</p>
			<form action='https://formsubmit.co/cp25393@gmail.com' method='POST'>
				{/* TODO make form send an email */}
				<label htmlFor='name' className='required'>
					Name
				</label>
				<input type='text' name='name' id='name' aria-label='name' required />
				<label htmlFor='email'>Email</label>
				<input type='email' name='email' id='email' aria-label='email' />
				<label htmlFor='topic'>Topic / Commttee</label>
				<select name='topic' id='topic' aria-label='Topic / Committee'>
					<option>General</option>
					<option>Harassment & Grievance</option>
					<option>Communications Committee</option>
					<option>Finance Committee</option>
					<option>Organizing Committee</option>
					<option>Policy Committee</option>
				</select>
				<label htmlFor='subject'>Subject</label>
				<input type='text' name='_subject' id='subject' aria-label='subject' />
				<label htmlFor='message' className='required'>
					Message
				</label>
				<textarea
					name='message'
					id='message'
					rows='10'
					aria-label='message'
					required
				/>
				<input type='submit' name='submit' id='submit' />
				<input
					type='hidden'
					name='_next'
					value={homepageURL + '/formsubmitted'}
				></input>
			</form>
		</>
	);
}
