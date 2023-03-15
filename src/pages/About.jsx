import React from 'react';
import Nav from '../nav';

export default function About() {
	return (
		<>
			<Nav page='about' />
			<h1>About Us</h1>
			<section id='mission'>
				<h2>Our Mission</h2>
				<p>
					San Marcos Abortion Activists is an{' '}
					<span className='emphasized'>unapologetically pro-abortion</span>{' '}
					organization dedicated to{' '}
					<span className='emphasized'>advocating</span> for{' '}
					<span class='emphasized'>reproductive justice</span> through{' '}
					<span class='emphasized'>
						direct action, community building, and mutual aid.
					</span>{' '}
					We strive to achieve a future where abortion is free, on-demand,
					without cultural or systemic shame and stigma.
				</p>
			</section>
			<section id="values">
				<h2>We believe the fight for reproductive rights must be</h2>
				<div className='value-container'>
					<article class>
                        <h3>Intersectional</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione consectetur impedit perspiciatis quam provident voluptatem, itaque laboriosam doloremque deleniti odit!</p>
                    </article>
                    <article>
                        <h3>Anti-Racist</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eligendi incidunt maxime? Nesciunt minus corrupti quo. Fuga, quos unde. Facere temporibus amet quasi magnam labore!</p>
                    </article>
                    <article>
                        <h3>Inclusive</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ut atque vel amet perferendis perspiciatis nostrum dolore ipsa doloribus adipisci quod veritatis vero est libero modi, repudiandae, provident molestias quia at. Laudantium quos dolore molestias.</p>
                    </article>
                    <article>
                        <h3>Compassionate</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, nemo earum, est laboriosam similique alias fuga quam optio praesentium, ipsa mollitia modi animi. Fugiat aspernatur optio dolore voluptatem culpa accusamus?</p>
                    </article>
				</div>
			</section>
		</>
	);
}
