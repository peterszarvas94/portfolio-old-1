import React, { useState } from 'react';

//eslint-disable-next-line
import emailjs, { init } from 'emailjs-com';
import { FiMail, FiPhone, FiGithub } from 'react-icons/fi';
import { FaPaperPlane, FaLinkedin } from 'react-icons/fa';

import '../styles/Contact.css';

init("user_MWRHD7DbwWh1M82xabdWy");

const Contact = () => {

    // save data to send
    const [toSend, setToSend] = useState({
        contact_name: '',
        contact_email: '',
        contact_subject: '',
        contact_message: ''
    }); 

    //handle typing
    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
        e.target.style.boxShadow = 'none'
        let name = e.target.name.split('_')[1];
        name = name.split('').map((e) => (name.indexOf(e) === 0) ? e.toUpperCase() : e).join('');
        e.target.placeholder = name;
    };

    //handle submiting
    const submitForm = async (e) => {
        e.preventDefault();
        e.stopPropagation();

        const fields = document.getElementById('contact_form').querySelectorAll("[required]");

        let error = false;

        for (let i = 0; i < fields.length; i++) {

            if(!fields[i].value) {
                let name = fields[i].name.split('_')[1];
                fields[i].placeholder = 'Enter your ' + name + ' there';
                fields[i].style.boxShadow = 'inset 0 0 1px 1px red';
                error = true;
            }

            if (i === 1) {
                const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if(!re.test(fields[i].value)) {
                    fields[i].value = '';
                    fields[i].placeholder = 'Enter a valid email address';
                    fields[i].style.boxShadow = 'inset 0 0 1px 1px red';
                    error = true;
                }
            }
        }

        if (error) {
            return;
        }

        try {
            const response = await emailjs.send("service_tymk94v", "template_6od5ifg", {
                contact_name: toSend.contact_name,
                contact_subject: toSend.contact_subject,
                contact_email: toSend.contact_email,
                contact_message: toSend.contact_message
            });
            console.log(response);

        } catch(err) {
            console.log(err);
        }
    }

    //scroll animations
    const handleContactScroll = () => {
        const form_children = document.getElementById('contact_form').children;
        const contact_element_top = document.getElementById('contact').getBoundingClientRect().top + window.pageYOffset;
        const nav_height = document.getElementById('nav_list').getBoundingClientRect().height;

        const addAminationClass = (i) => {
            if (i+1 === form_children.length) {
                form_children[i].classList.add('details_animation');
            } else {
                form_children[i].classList.add('contact_animation');
            }
            i++;
            if (i < form_children.length) {
                setTimeout(() => {
                    addAminationClass(i);
                }, 100);
            } else {
                document.removeEventListener('scroll', handleContactScroll);
            }
        }
        
        if (window.pageYOffset >= contact_element_top - nav_height - window.innerHeight*4/5) {
           addAminationClass(0);
        } 
    }

    document.addEventListener('scroll', handleContactScroll);

    return (
        <>
            {/* contact form */}
            <div className='contact' id='contact'>

                {/* contact title */}
                <h3 className='contact_title'>Contact me!</h3>
                
                {/* the form */}
                <form id='contact_form' className='contact_form' onSubmit={submitForm}>
                    
                    {/* sender name */}
                    <input
                        className='contact_input contact_name'
                        id='contact_name'
                        name='contact_name'
                        type='text'
                        value={toSend.contact_name}
                        onChange={handleChange}
                        placeholder='Name'
                        required
                    />
                    
                    {/* sender email */}
                    <input
                        className='contact_input contact_email'
                        id='contact_email'
                        name='contact_email'
                        type='email'
                        value={toSend.contact_email}
                        onChange={handleChange}
                        placeholder='Email'
                        required
                    />
                    

                    {/* message subject */}
                    <input
                        className='contact_input contact_subject'
                        id='contact_subject'
                        name='contact_subject'
                        type='text'
                        value={toSend.contact_subject}
                        onChange={handleChange}
                        placeholder='Subject'
                        required
                    />
                    

                    {/* message text */}
                    <textarea
                        className='contact_textarea'
                        id='contact_message'
                        name='contact_message'
                        value={toSend.contact_message}
                        onChange={handleChange}
                        placeholder='Message'
                        required
                    />
                    

                    {/* submit button */}
                    <button
                        className='contact_button'
                        id='contact_submit'
                        type='submit'
                        onClick={submitForm}
                    >
                        Send message&nbsp;<span className='contact_button_icon'><FaPaperPlane /></span> 
                    </button>
                    
                    {/* my contact details */}
                    <div className='contact_details'>
                        <h3>Get in touch!</h3>
                        <ul>
                            {/* Linkedin */}
                            <li>
                                <span>
                                    <FaLinkedin />
                                </span>
                                <span>
                                    <strong>LinkedIn:</strong>
                                    <div>
                                        <a href='https://www.linkedin.com/in/peterszarvas94' target='_blank' rel="noopener noreferrer">
                                            /peterszarvas94
                                        </a>
                                    </div>
                                </span>
                            </li>
                            {/* Linkedin */}
                            <li>
                                <span>
                                    <FiGithub />
                                </span>
                                <span>
                                    <strong>GitHub:</strong>
                                    <div>
                                        <a href='https://github.com/peterszarvas94' target='_blank' rel="noopener noreferrer">
                                            /peterszarvas94
                                        </a>
                                    </div>
                                </span>
                            </li>
                            {/* Email */}
                            <li>
                                <span>
                                    <FiMail />
                                </span>
                                <span>
                                    <strong>Email:</strong>
                                    <div>
                                        <a href='mailto:peterszarvas94@gmail.com' target='_blank' rel="noopener noreferrer">
                                            peterszarvas94@gmail.com
                                        </a>
                                    </div>
                                </span>
                            </li>
                            {/* Phone */}
                            <li>
                                <span>
                                    <FiPhone />
                                </span>
                                <span>
                                    <strong>Phone:</strong>
                                    <div>
                                        <a href='tel:+36202746444' target='_blank' rel="noopener noreferrer">
                                            +36&nbsp;20&nbsp;2746444
                                        </a>
                                    </div>
                                </span>
                            </li>
                        </ul>
                    </div>

                </form>
                
            </div>
        </>
    )
}

export default Contact;
