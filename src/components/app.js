import React, { Component } from "react"
import Header from "./header"
import AboutFamily from "./about-family"
import background from "../../static/assets/images/flowerbg.jpg"
import SimpleSlider from "./slider"

import "../style/slider.scss"


export default class Home extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (

      <div className="home blog custom-background custom-header header-image header-full-width content-sidebar genesis-breadcrumbs-hidden genesis-footer-widgets-visible front-page">
        <a href="/" className="to-top" title="Back To Top">Top</a>
        <div className="site-container"
        >
          <div className="wrap1" >
            <div className="wrap2">
              <div>
                <Header />
              </div>
              <AboutFamily />

              <SimpleSlider />
            </div>

          </div>
        </div>
      </div>


    )
  }
}
