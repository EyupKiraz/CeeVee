import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { sendEmail } from '../../actions';

const ContactForm = ({ recipientEmail }) => {
  const dispatch = useDispatch();
  const { loading, error, sent } = useSelector(state => state.contact);

  const [name, setName] = useState('');
  const [fromEmail, setFromEmail] = useState('');
  const [message, setMessage] = useState('');
  const [buttonState, setButton] = useState('');

  useEffect(() => {
    if (loading) {
      setButton('loading');
    } else if (sent) {
      setButton('success');
    } else if (error) {
      setButton('error');
    } else {
      setButton('default');
    }
  }, [loading, sent, error]);

  function handleClick() {
    dispatch(sendEmail({ name, fromEmail, message, recipientEmail }));
  }

  function handleChange(type) {
    switch (type) {
      case 'name':
        setName(formName.value);
        break;
      case 'email':
        setFromEmail(formEmail.value);
        break;
      case 'message':
        setMessage(formMessage.value);
        break;
    }
  }

  return (
    <Form className="contact-form">
      <Form.Group className="contact-form__group" controlId="formName">
        <Form.Row>
          <Form.Label className="contact-form__text">Name</Form.Label>
          <Form.Control
            className="contact-form__text"
            type="name"
            placeholder="Enter your name"
            onChange={() => handleChange('name')}
          />
        </Form.Row>
      </Form.Group>

      <Form.Group className="contact-form__group" controlId="formEmail">
        <Form.Row>
          <Form.Label className="contact-form__text">Email address</Form.Label>
          <Form.Control
            className="contact-form__text"
            type="email"
            placeholder="Enter email"
            onChange={() => handleChange('email')}
          />
        </Form.Row>
      </Form.Group>

      <Form.Group className="contact-form__group" controlId="formMessage">
        <Form.Row>
          <Form.Label className="contact-form__text">Message</Form.Label>
          <Form.Control
            className="contact-form__text"
            type="message"
            as="textarea"
            rows="10"
            placeholder="Enter your message"
            onChange={() => handleChange('message')}
          />
        </Form.Row>
      </Form.Group>

      <Form.Group className="contact-form__group" controlId="formSubmit">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn cta-btn--resume"
          onClick={handleClick}
        >
          {buttonState === 'default'
            ? "Let's Talk"
            : buttonState === 'loading'
            ? 'Please Wait'
            : buttonState === 'success'
            ? 'Email Sent'
            : 'Error!'}
        </a>
      </Form.Group>
    </Form>
  );
};

export default ContactForm;
