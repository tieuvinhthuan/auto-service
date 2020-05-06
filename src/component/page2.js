import React, { Component } from 'react'
import 'startbootstrap-creative/dist/css/styles.css';

export default class page2 extends Component {
  render() {
    return (
      <div class="container">
      <br/>
      <br/>
      <br/>
      <h2 class="text-center mt-0">Palvelut</h2>
      <hr class="divider my-4" />
      <div class="row">
        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-5 mb-0">
            <i class="fas fa-4x fa-gem text-info mb-4"></i>
            <h3 class="h4 mb-2">Huolto ja korjaus</h3>
            <p class="text-muted mb-0"></p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-5 mb-0">
            <i class="fas fa-4x fa-gem text-info mb-4"></i>
            <h3 class="h4 mb-2">Pesu ja fiksaus</h3>
            <p class="text-muted mb-0"></p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-5 mb-0">
            <i class="fas fa-4x fa-gem text-info mb-4"></i>
            <h3 class="h4 mb-2">Rengas ja tasapainotus</h3>
            <p class="text-muted mb-0">Rengas: Nordex, Toyo, Micheling, Goodyear, Brigestones, Nokia, Nankang, Linglong, Rotalla, Fullrun</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 text-center">
          <div class="mt-5 mb-0">
            <i class="fas fa-4x fa-gem text-info mb-4"></i>
            <h3 class="h4 mb-2">Taksi-kuljetus</h3>
            <p class="text-muted mb-0"></p>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
