import React, { Component } from 'react'

import 'startbootstrap-creative/dist/css/styles.css';


export default class page1 extends Component {
  render() {
    return (
     <div>
     <header class="masthead">
     <div class="container h-100">
       <div class="row h-100 align-items-center justify-content-center text-center">
         <div class="col-lg-10 align-self-end">
           <h1 class="text-uppercase text-white font-weight-bold">AUTOKORJAAMO</h1>
           <h1 class="text-uppercase text-white font-weight-bold">LE-SERVICE</h1>
           <hr class="divider my-4" />
         </div>
         <div class="col-lg-8 align-self-baseline">
           <p class="text-white-75 font-weight-light mb-5">Luotettavaa ja ystävällistä palvelua!</p>
           <p class="text-white-75 font-weight-light mb-5">Soita 0440725488</p>
           <a class="btn-info btn-large js-scroll-trigger" href="#about">Lisätietoja</a>
         </div>
       </div>
     </div>
   </header>
 
   
   
     <div class="container" id="about">
       <div class="row justify-content-center text-center">
         <div class="col-lg-10 align-self-end">
           <div class="mt-5">
           <h2 class="text-info mt-5">Innostunut ja omistautunut palvelu</h2>
           <h2 class="text-info mt-0">Laadukas palvelu ja maine</h2>
           
           <p class="text-white-50 mb-5"></p>
           </div>
         </div>
       </div>
     </div>
     
     </div>
    )
  }
}
