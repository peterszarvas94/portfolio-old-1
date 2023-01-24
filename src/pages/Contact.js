import React from "react";

import { FiMail, FiPhone, FiGithub } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

import "../styles/Contact.css";

const Contact = () => {
	//scroll animations
	const handleContactScroll = () => {
		const contact_element_top =
			document.getElementById("contact").getBoundingClientRect().top +
			window.pageYOffset;
		const nav_height = document
			.getElementById("nav_list")
			.getBoundingClientRect().height;
		const contact_details = document.getElementById("contact_details");

		const addAminationClass = () => {
			contact_details.classList.add("details_animation");
		};

		if (
			window.pageYOffset >=
			contact_element_top - nav_height - (window.innerHeight * 4) / 5
		) {
			addAminationClass();
		}
	};

	document.addEventListener("scroll", handleContactScroll);

	const contactLinks = [
		{
			name: "LinkedIn",
			link: "https://www.linkedin.com/in/peterszarvas94",
			icon: <FaLinkedin />,
			text: "peterszarvas94",
		},
		{
			name: "Github",
			link: "https://github.com/peterszarvas94",
			icon: <FiGithub />,
			text: "peterszarvas94",
		},
		{
			name: "Email",
			link: "mailto:contact@peterszarvas.hu",
			icon: <FiMail />,
			text: "contact@peterszarvas.hu",
		},
		{
			name: "Phone",
			link: "tel:+36202746444",
			icon: <FiPhone />,
			text: "+36 20 274 6444",
		},
	];

	function renderContactLinks() {
		const elements = [];
		contactLinks.forEach((e, i) => {
			elements.push(
				<li key={i}>
					<span>{e.icon}</span>
					<span>
						<strong>{e.name}:</strong>
						<div>
							<a href={e.link} target="_blank" rel="noopener noreferrer">
								{e.text}
							</a>
						</div>
					</span>
				</li>
			);
		});
		return elements;
	}

	return (
		<>
			{/* contact form */}
			<div className="contact" id="contact">
				{/* contact title */}
				<h3 className="contact_title">Contact me!</h3>

				{/* the form */}
				{/* <form id='contact_form' className='contact_form'> */}

				{/* my contact details */}
				<div className="contact_details" id="contact_details">
					{/* <h3>Get in touch!</h3> */}
					<ul>{renderContactLinks()}</ul>
				</div>

				{/* </form> */}
			</div>
		</>
	);
};

export default Contact;
