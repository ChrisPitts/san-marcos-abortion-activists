import React from 'react';
import Nav from '../components/Nav';

export default function PageError() {
	return (
		<>
			<Nav />
			<main>
                <h1>Page Not Found</h1>
                <p>We could not find the page you were looking for. We apologize for the inconvenience</p>
			</main>
		</>
	);
}
