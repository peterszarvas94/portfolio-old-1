import React from 'react';

import Navigation from '../components/Navigation';
import HeaderTitle from '../components/HeaderTitle';
import Paragraph from '../components/Paragraph';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';

const Home = () => {

	return (
		<>
			{/* 100% all side container */}
			<div className='container'>

				{/* nav menu */}
				<Navigation />

				{/* my name and greetings */}
				<HeaderTitle/>

				{/* paragraphs */}
				<Paragraph />

				{/* portfolio */}
				<Portfolio />

				{/* contact */}
				<Contact />
			</div>
		</>
	)
}

export default Home;