import React, { useState } from 'react';

import '../styles/Contact.css';

const Contact = () => {

    const [toSend, setToSend] = useState({
        contact_name: '',
        contact_email: '',
        contact_message: ''
    }); 

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    const submitForm = (e) => {
        e.preventDefault();
        e.stopPropagation();

        console.log(toSend);
    }

    return (
        <>
            <div className='contact' id='contact'>
                <h3 className='contact_title'>Contact me!</h3>
                <form className='contact_form' onSubmit={submitForm}>
                    <div>
                        <label htmlFor='contact_name'>Name</label>
                        <input
                            id='contact_name'
                            name='contact_name'
                            type='text'
                            value={toSend.contact_name}
                            onChange={handleChange}
                        />
                    </div>
                    
                    <div>
                        <label htmlFor='contact_email'>Email</label>
                        <input
                            id='contact_email'
                            name='contact_email'
                            type='text'
                            value={toSend.contact_email}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor='contact_message'>Message</label>
                        <input
                            id='contact_message'
                            name='contact_message'
                            type='text'
                            value={toSend.contact_message}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <input type='submit' value='Send' />
                    </div>
                </form>
            </div>
        </>
    )
}

export default Contact;
