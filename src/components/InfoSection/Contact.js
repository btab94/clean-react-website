import React from 'react';
import { ContactUs, H1, Form, Input, TextArea } from '../InfoSection/InfoElements';

const Contact = () => {
  return (
    <ContactUs className='contact'>
      <H1>Contact Us</H1>
            <Form id='contact-form'>
                <Input type='text' name='user_name' placeholder='Name' />
                <br/>
                <Input type='email' name='user_email' placeholder='Email' />
                <br/>
                <Input name='message' placeholder='Message'/>
                <br/>
                <Input type='submit' value='Send' />
            </Form>
    </ContactUs>

  );
}
export default Contact;