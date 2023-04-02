import React from 'react';

export default function Contact() {
	return (
		<form>
			{/* TODO make form send an email */}
			<label htmlFor='name' className='required'>
				Name
			</label>
			<input type='text' name='name' id='name' required />
			<label htmlFor='email'>Email</label>
			<input type='email' name='email' id='email' />
			<label htmlFor='topic'>Topic / Commttee</label>
			<select name='topic' id='topic'>
				<option>General</option>
				<option>Harassment & Grievance</option>
				<option>Communications Committee</option>
				<option>Finance Committee</option>
				<option>Organizing Committee</option>
				<option>Policy Committee</option>
			</select>
			<label htmlFor='subject'>Subject</label>
			<input type='text' name='subject' id='subject' />
			<label htmlFor='message' className='required'>
				Message
			</label>
			<textarea name='message' id='message' rows='10' required></textarea>
			<input type='submit' name='submit' id='submit' />
		</form>
	);
}
