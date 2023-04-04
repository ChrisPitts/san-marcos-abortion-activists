// React
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Components
import Nav from "../components/Nav"

export default function FormSubmitted(){
    return (
        <>
            <Helmet>
                <title>Form Submitted</title>
                <meta name='description' content='Thank You! Your form has been submitted successfully. We will reach out to you as soon as we can!'/>
            </Helmet>
            <header>
                <Nav />
            </header>
            <main id='formsubmitted'>
                <h1>Form Submitted</h1>
                <p>Thank You! Tour form has been submitted successfully. We will reach out to you as soon as we can!</p>
                <Link className='btn' to='/' >Return to Main Page</Link>
            </main>
        </>
    );
}