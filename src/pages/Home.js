import React from 'react';

import Navigation from '../components/Navigation';
import HeaderTitle from '../components/HeaderTitle';
import About from '../components/About';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';

import '../styles/Home.css';

const Home = () => {

	return (
		<>
			{/* 100% all side container */}
			<div className='container'>

				{/* nav menu */}
				<Navigation />

				{/* my name and greetings */}
				<HeaderTitle />

				{/* paragraphs */}
				<About />

				{/* portfolio */}
				<Portfolio />

				{/* contact */}
				<Contact />
			</div>
		</>
	)
}

export default Home;