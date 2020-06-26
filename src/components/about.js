import React, { Component } from 'react'
import rj from "../../static/assets/images/rj.jpg"
import rjkids from "../../static/assets/images/rjkids.jpg"
import julie from "../../static/assets/images/julie.png"

export default class About extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <div className="wrap fadeup-effect widget-full" >
        <section id="custom_html-3" className="widget_text widget widget_custom_html">
          <div className="widget_text widget-wrap">
            <div className="textwidget custom-html-widget">
              <h1>&amp;</h1>
              <h2>About Us</h2>
              Hi and welcome! I am a California native, raised in San Jose. While attending BYU-Provo, I was charmed by an Idaho farm boy named Rick Hawker. We married in the Oakland Temple and settled in San Jose (later moving to Morgan Hill) to raise our family. Having spent many years as a stay-at-home mom to my great kids (two sons and two daughters), I went back to school and graduated with Bachelor's and Master's degrees in Communication Studies from San Jose State University.
                    <br />
              <br />
              <center>
                <a href="http://helloyoudesigns.com/shop/hello-foxy-theme/" className="button">See More <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
              </center>
            </div>

          </div>

        </section>
        <section id="media_image-2" className="widget widget_media_image">
          <div className="widget-wrap">
            <img width="1100" height="1100"
              className="image wp-image-684  attachment-full size-full" alt="" style={{ maxWidth: "100%", height: "auto" }}
              src={rj}
            ></img>
          </div>

        </section>

      </div>

    )
  }
}