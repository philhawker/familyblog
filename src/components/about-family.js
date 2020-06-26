import React, { Component } from 'react'
import Badge from "./badge"
import SimpleSlider from "./slider"
import rj from "../../static/assets/images/rj.jpg"
import rjkids from "../../static/assets/images/rjkids.jpg"
import julie from "../../static/assets/images/julie.png"

export default class AboutFamily extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div>
        <SimpleSlider />
        <Badge />
        <div id="home-optin" className="home-optin" style={{ background: "rgb(250, 239, 238)", margin: "30px auto", padding: "20px" }}>
          <div className="wrap">
            <div className="fadeup-effect widget-full"></div>
          </div>
        </div>
        <div id="home-flexible" className="home-flexible">
          <div className="wrap">
            <div className="flexible-widgets widget-area fadeup-effect widget-thirds">
              <section id="text-3" className="widget widget_text">
                <div className="widget-wrap">
                  <div className="textwidget">
                  </div>
                </div>
              </section>
              <section id="featured-page-1" className="widget featured-content featuredpage">
                <div className="widget-wrap">
                  <article className="post-120 page type-page status-publish has-post-thumbnail entry">
                    <a href="https://hawkerfamily.com/shop/" className="alignnone">
                      <img width="560" height="350"
                        src="https://hawkerfamily.com/wp-content/uploads/2019/02/Sassafras-Shop.png"
                        className="entry-image attachment-page" alt="" itemProp="image"
                        srcSet="https://hawkerfamily.com/wp-content/uploads/2019/02/Sassafras-Shop.png 560w, https://hawkerfamily.com/wp-content/uploads/2019/02/Sassafras-Shop-300x188.png 300w"
                        sizes="(max-width: 560px) 100vw, 560px" />
                    </a>
                  </article>
                </div>
              </section>
              <section id="featured-page-2" className="widget featured-content featuredpage">
                <div className="widget-wrap">
                  <article className="post-115 page type-page status-publish has-post-thumbnail entry">
                    <a href="https://hawkerfamily.com/blog/" className="alignnone">
                      <img width="560" height="350"
                        src="https://hawkerfamily.com/wp-content/uploads/2019/02/Sassafras-The-Blog.png"
                        className="entry-image attachment-page" alt="The Benedicts" itemProp="image"
                        srcSet="https://hawkerfamily.com/wp-content/uploads/2019/02/Sassafras-The-Blog.png 560w, https://hawkerfamily.com/wp-content/uploads/2019/02/Sassafras-The-Blog-300x188.png 300w"
                        sizes="(max-width: 560px) 100vw, 560px" />
                    </a>
                  </article>
                </div>
              </section>
              <section id="featured-page-3" className="widget featured-content featuredpage">
                <div className="widget-wrap">
                  <article className="post-570 page type-page status-publish has-post-thumbnail entry">
                    <a href="https://hawkerfamily.com/portfolio/" className="alignnone">
                      <img width="560" height="350"
                        src="https://hawkerfamily.com/wp-content/uploads/2019/02/sassafras-our-portfolio.png"
                        className="entry-image attachment-page" alt="" itemProp="image"
                        srcSet="https://hawkerfamily.com/wp-content/uploads/2019/02/sassafras-our-portfolio.png 560w, https://hawkerfamily.com/wp-content/uploads/2019/02/sassafras-our-portfolio-300x188.png 300w"
                        sizes="(max-width: 560px) 100vw, 560px" />
                    </a>
                  </article>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div id="home-about" className="home-about">
          <div className="wrap">
            <section id="custom_html-3" className="widget_text widget widget_custom_html">
              <div className="widget_text widget-wrap">
                <div className="textwidget custom-html-widget">
                  <h1>&amp;</h1>
                  <h2>About Us</h2>
                    Hi and welcome! I am a California native, raised in San Jose. While attending BYU-Provo, I was charmed by an Idaho farm boy named Rick Hawker. We married in the Oakland Temple and settled in San Jose (later moving to Morgan Hill) to raise our family. Having spent many years as a stay-at-home mom to my great kids (two sons and two daughters), I went back to school and graduated with Bachelor's and Master's degrees in Communication Studies from San Jose State University.

                    <br />
                  <br />
                  <center>
                    <a href="http://helloyoudesigns.com/shop/hello-foxy-theme/" className="button">More About Us <i
                      className="fa fa-long-arrow-right" aria-hidden="true">
                    </i>
                    </a>
                  </center>
                </div>
              </div>
            </section>
            <section id="media_image-2" className="widget widget_media_image">
              <div className="widget-wrap">
                <img width="1100" height="1100"
                  src="https://hawkerfamily.com/wp-content/uploads/2019/01/sassafras-about.jpg"
                  className="image wp-image-684  attachment-full size-full" alt="" style={{ maxWidth: "100%", height: "auto" }}
                  // srcSet="https://hawkerfamily.com/wp-content/uploads/2019/01/sassafras-about.jpg 1100w, https://hawkerfamily.com/wp-content/uploads/2019/01/sassafras-about-300x300.jpg 300w, https://hawkerfamily.com/wp-content/uploads/2019/01/sassafras-about-1024x1024.jpg 1024w, https://hawkerfamily.com/wp-content/uploads/2019/01/sassafras-about-150x150.jpg 150w, https://hawkerfamily.com/wp-content/uploads/2019/01/sassafras-about-768x768.jpg 768w, https://hawkerfamily.com/wp-content/uploads/2019/01/sassafras-about-1080x1080.jpg 1080w, https://hawkerfamily.com/wp-content/uploads/2019/01/sassafras-about-600x600.jpg 600w, https://hawkerfamily.com/wp-content/uploads/2019/01/sassafras-about-100x100.jpg 100w"
                  src={rj}
                  sizes="(max-width: 1100px) 100vw, 1100px" />
              </div>
            </section>
          </div>
        </div>
        <div id="home-featured" className="home-featured">
          <div className="wrap">
            <div className="fadeup-effect widget-full">

            </div>
          </div>
        </div>
      </div>
    )
  }
}