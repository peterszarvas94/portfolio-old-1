import React, { useState } from 'react';
// import emailjs, { init } from 'emailjs-com';
import { FiMail } from 'react-icons/fi';

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

                <form className='contact_form' onSubmit={submitForm} netlify>

                    {/* sender name */}
                    <div className='contact_name_grid'>
                        <label htmlFor='contact_name'>Name</label>
                        <input
                            className='contact_input'
                            id='contact_name'
                            name='contact_name'
                            type='text'
                            value={toSend.contact_name}
                            onChange={handleChange}
                            placeholder='Name'
                            required
                        />
                    </div>
                    
                    {/* sender email */}
                    <div className='contact_email_grid'>
                        <label htmlFor='contact_email'>Email</label>
                        <input
                            className='contact_input'
                            id='contact_email'
                            name='contact_email'
                            type='email'
                            value={toSend.contact_email}
                            onChange={handleChange}
                            placeholder='Email'
                            required
                        />
                    </div>

                    {/* message subject */}
                    <div className='contact_subject_grid'>
                        <label htmlFor='contact_subject'>Subject</label>
                        <input
                            className='contact_input'
                            id='contact_subject'
                            name='contact_subject'
                            type='text'
                            value={toSend.contact_subject}
                            onChange={handleChange}
                            placeholder='Subject'
                            required
                        />
                    </div>

                    {/* message text */}
                    <div className='contact_message_grid'>
                        <label htmlFor='contact_message'>Message</label>
                        <textarea
                            className='contact_textarea'
                            id='contact_message'
                            name='contact_message'
                            value={toSend.contact_message}
                            onChange={handleChange}
                            placeholder='Message'
                            required
                        />
                    </div>

                    {/* submit button */}

                    <div className='contact_submit_grid'>
                        <button
                            type='submit'
                            onClick={submitForm}
                            className='contact_button'
                            id='contact_submit'
                        >
                            Send message&nbsp;<span className='contact_button_icon'><FiMail /></span> 
                        </button>
                    </div>

                </form>
            </div>
        </>
    )
}

export default Contact;
