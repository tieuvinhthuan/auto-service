import React, { Component } from 'react'
import 'startbootstrap-creative/dist/css/styles.css';

import full_1 from '../img/portfolio/fullsize/1.jpg'
import full_2 from '../img/portfolio/fullsize/2.jpg'
import full_3 from '../img/portfolio/fullsize/3.jpg'
import full_4 from '../img/portfolio/fullsize/4.jpg'
import full_5 from '../img/portfolio/fullsize/5.jpg'
import full_6 from '../img/portfolio/fullsize/6.jpg'

import thum_1 from '../img/portfolio/thumbnails/1.jpg'
import thum_2 from '../img/portfolio/thumbnails/2.jpg'
import thum_3 from '../img/portfolio/thumbnails/3.jpg'
import thum_4 from '../img/portfolio/thumbnails/4.jpg'
import thum_5 from '../img/portfolio/thumbnails/5.jpg'
import thum_6 from '../img/portfolio/thumbnails/6.jpg'



export default class page3 extends Component {

  render() {
    return (
      <div className="container-fluid p-0" id="portfolio">
      
      <div className="row no-gutters">
        <div className="col-lg-4 col-sm-6">
         
            <img className="img-fluid" src={thum_1} alt=""/>
            <div className="portfolio-box-caption">
              <div className="project-category text-white-50">
                
              </div>
              <div className="project-name">
               
              </div>
            </div>
          
        </div>
        <div className="col-lg-4 col-sm-6">
          
            <img className="img-fluid" src={thum_2} alt=""/>
            <div className="portfolio-box-caption">
              <div className="project-category text-white-50">
                
              </div>
              <div className="project-name">
                
              </div>
            </div>
          
        </div>
        <div className="col-lg-4 col-sm-6">
          
            <img className="img-fluid" src={thum_3} alt=""/>
            <div className="portfolio-box-caption">
              <div className="project-category text-white-50">
                
              </div>
              <div className="project-name">
                
              </div>
            </div>
          
        </div>
        <div className="col-lg-4 col-sm-6">
          
            <img className="img-fluid" src={thum_4} alt=""/>
            <div className="portfolio-box-caption">
              <div className="project-category text-white-50">
                
              </div>
              <div className="project-name">
                
              </div>
            </div>
          
        </div>
        <div className="col-lg-4 col-sm-6">
          
            <img className="img-fluid" src={thum_5} alt=""/>
            <div className="portfolio-box-caption">
              <div className="project-category text-white-50">
                
              </div>
              <div className="project-name">
                
              </div>
            </div>
          
        </div>
        <div className="col-lg-4 col-sm-6">
          
            <img className="img-fluid" src={thum_6} alt=""/>
            <div className="portfolio-box-caption p-3">
              <div className="project-category text-white-50">
                
              </div>
              <div className="project-name">
               
              </div>
            </div>
         
        </div>
      </div>
    </div>
    )
  }
}
