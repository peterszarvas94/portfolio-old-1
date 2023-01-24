import React, { useState } from "react";

//eslint-disable-next-line
import emailjs, { init } from "emailjs-com";
import { FiMail, FiPhone, FiGithub } from "react-icons/fi";
import { FaPaperPlane, FaLinkedin } from "react-icons/fa";

import "../styles/Contact.css";

// init("user_MWRHD7DbwWh1M82xabdWy");

const Contact = () => {
	// save data to send
	// const [toSend, setToSend] = useState({
	//     contact_name: '',
	//     contact_email: '',
	//     contact_subject: '',
	//     contact_message: ''
	// });

	//handle typing
	// const handleChange = (e) => {
	//     setToSend({ ...toSend, [e.target.name]: e.target.value });
	//     e.target.style.boxShadow = 'none'
	//     let name = e.target.name.split('_')[1];
	//     name = name.split('').map((e) => (name.indexOf(e) === 0) ? e.toUpperCase() : e).join('');
	//     e.target.placeholder = name;
	// };

	//handle submiting
	// const submitForm = async (e) => {
	//     e.preventDefault();
	//     e.stopPropagation();

	//     const fields = document.getElementById('contact_form').querySelectorAll("[required]");

	//     let error = false;

	//     for (let i = 0; i < fields.length; i++) {

	//         if(!fields[i].value) {
	//             let name = fields[i].name.split('_')[1];
	//             fields[i].placeholder = 'Enter your ' + name + ' there';
	//             fields[i].style.boxShadow = 'inset 0 0 1px 1px red';
	//             error = true;
	//         }

	//         if (i === 1) {
	//             const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	//             if(!re.test(fields[i].value)) {
	//                 fields[i].value = '';
	//                 fields[i].placeholder = 'Enter a valid email address';
	//                 fields[i].style.boxShadow = 'inset 0 0 1px 1px red';
	//                 error = true;
	//             }
	//         }
	//     }

	//     if (error) {
	//         return;
	//     }

	//     try {
	//         await emailjs.send("service_tymk94v", "template_6od5ifg", {
	//             contact_name: toSend.contact_name,
	//             contact_subject: toSend.contact_subject,
	//             contact_email: toSend.contact_email,
	//             contact_message: toSend.contact_message
	//         });
	//         alert('Your message has been sent');
	//     } catch(err) {
	//         // console.log(err);
	//     }
	// }

	//scroll animations
	const handleContactScroll = () => {
		// const form_children = document.getElementById('contact_form').children;
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

		// const addAminationClassOld = (i) => {
		//     if (i+1 === form_children.length) {
		//         form_children[i].classList.add('details_animation');
		//     } else {
		//         form_children[i].classList.add('contact_animation');
		//     }
		//     i++;
		//     if (i < form_children.length) {
		//         setTimeout(() => {
		//             addAminationClass(i);
		//         }, 100);
		//     } else {
		//         document.removeEventListener('scroll', handleContactScroll);
		//     }
		// }

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
			link: "mailto:peterszarvas94@gmail.com",
			icon: <FiMail />,
			text: "peterszarvas94@gmail.com",
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
					<ul>
						{renderContactLinks()}
					</ul>
				</div>

				{/* </form> */}
			</div>
		</>
	);
};

export default Contact;
