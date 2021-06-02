import React, { useState } from 'react';
// import emailjs, { init } from 'emailjs-com';
import { FiMail, FiPhone } from 'react-icons/fi';
import { FaPaperPlane, FaLinkedin } from 'react-icons/fa';

import '../styles/Contact.css';

// init("user_MWRHD7DbwWh1M82xabdWy");

const Contact = () => {

    const [toSend, setToSend] = useState({
        contact_name: '',
        contact_email: '',
        contact_subject: '',
        contact_message: ''
    }); 

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    const submitForm = async (e) => {
        e.preventDefault();
        e.stopPropagation();

        try {
            // const response = await emailjs.send("service_tymk94v", "template_6od5ifg", {
            //     contact_name: toSend.contact_name,
            //     contact_subject: toSend.contact_subject,
            //     contact_email: toSend.contact_email,
            //     contact_message: toSend.contact_message
            // });
            // console.log(response);

        } catch(err) {
            console.log(err);
        }
    }

    return (
        <>
            {/* contact form */}
            <div className='contact' id='contact'>

                {/* contact title */}
                <h3 className='contact_title'>Contact me!</h3>

                
                {/* the form */}
                <form className='contact_form' onSubmit={submitForm}>
                    
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
                    
                    {/* details */}
                    <div className='contact_details'>
                        <h3>Get in touch!</h3>
                        <ul>
                            <li>
                                <span>
                                    <FaLinkedin />
                                </span>
                                <span>
                                    <strong>Linkedin:</strong>
                                    <div>
                                        <a href='https://www.linkedin.com/in/peterszarvas94' target='_blank' rel="noopener noreferrer">
                                            linkedin.com/in/peterszarvas94
                                        </a>
                                    </div>
                                </span>
                            </li>
                            <li>
                                <span>
                                    <FiMail />
                                </span>
                                <span>
                                    <strong>Email:</strong>
                                    <div>
                                        <a href='mailto:peterszarvas94@gmail.com'>
                                            peterszarvas94@gmail.com
                                        </a>
                                    </div>
                                </span>
                            </li>
                            <li>
                                <span>
                                    <FiPhone />
                                </span>
                                <span>
                                    <strong>Phone:</strong>
                                    <div>
                                        <a href='tel:+36202746444'>
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
