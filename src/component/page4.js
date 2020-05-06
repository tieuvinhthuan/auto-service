import React from 'react'
import ContactForm from './contact'
import 'startbootstrap-creative/dist/css/styles.css';

function page4() {
  return (
    
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-8 text-center">
        <h2 className="mt-5">Ota meihin yhteyttä</h2>
        <hr className="divider my-4"/>
        <p className="text-muted mb-5">Piispanristintie 10, 20760 Kaarina, Finland</p>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-4 ml-auto text-center ">
        
        <i className="fas fa-phone fa-3x mb-3 text-info"></i>
        <div>0440725488</div>
        <br />
      </div>
      <div className="col-lg-4 mr-auto text-center">
        <h2 className="mb-0">
        <a className="btn-large btn-info" href="https://www.facebook.com/leserviceautokorjaamo/" target="_blank" rel="noopener noreferrer">Facebook</a>
        </h2>
        <br />
      </div>
      <div className="col-lg-4 mr-auto text-center">
        <i className="fas fa-envelope fa-3x mb-3 text-info"></i>
        
        <p>leservice16@gmail.com</p>
        <br />
      </div>
    </div>
       
        <ContactForm />
        
        
      
  </div>
  )
}

export default page4;