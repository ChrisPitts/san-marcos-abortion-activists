import React from 'react';
import { Helmet } from 'react-helmet';
import Nav from '../components/Nav';

export default function PageError() {
	return (
		<>
			<Helmet>
				<title>Page Not Found</title>
				<meta name='description' content='We could not find the page you were looking for. We apologize for the inconvenience' />
			</Helmet>
			<Nav />
			<main>
                <h1>Page Not Found</h1>
                <p>We could not find the page you were looking for. We apologize for the inconvenience</p>
			</main>
		</>
	);
}
