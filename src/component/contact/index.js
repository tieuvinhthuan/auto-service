import React, { useState } from 'react';
import { Axios, db } from '../firebaseConfig';
import 'startbootstrap-creative/dist/css/styles.css';
import './styled.scss';

const ContactForm = () => {
  const [formData, setFormData] = useState({})

  const updateInput = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = event => {
    event.preventDefault()
    sendEmail()
    setFormData({
      name: '',
      email: '',
      message: '',
      company: '',
      phone: ''
    })
  }
  const sendEmail = () => {
    Axios.post(
      'https://us-central1-le2-service.cloudfunctions.net/submit',
      formData
    )
      .then(res => {
        db.collection('emails').add({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          company: formData.company,
          phone: formData.phone,
          time: new Date(),
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (


    <div>
   
        <div className="contact">
          <div className="text-center">
            <h2 className="section-heading mt-5" >Yhteydenottolomake</h2>
            <div className="alert"></div>
          </div>
          </div>
      <form onSubmit={handleSubmit}>
      
      
      
      <input
        type="text"
        name="name"
        placeholder="Nimi"
        onChange={updateInput}
        value={formData.name || ''}
        required
      />
      <input
        type="text"
        name="company"
        placeholder="Yritys"
        onChange={updateInput}
        value={formData.company || ''}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Sähköposti"
        onChange={updateInput}
        value={formData.email || ''}
        required
      />
      <input
        type="text"
        name="phone"
        placeholder="Puhelinnumero"
        onChange={updateInput}
        value={formData.phone || ''}
        required
      />
      <textarea
        type="text"
        name="message"
        placeholder="Viesti"
        onChange={updateInput}
        value={formData.message || ''}
      ></textarea>
      <button className="btn-info" type="submit">Submit</button>
      
      
      </form>
    </div>
  )
}

export default ContactForm;