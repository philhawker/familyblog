import React, { Component } from 'react'
import SimpleSlider from "./slider"

export default class Navbar extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <div>

        <div className="wrap">
          <div className="responsive-menu-icon">
          </div>
          <ul id="menu-primary-menu-2" className="menu genesis-nav-menu menu-primary responsive-menu">
            <li id="menu-item-735" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-735">
              <a href="/" >
                <span itemProp="name">Home</span>
              </a>
            </li>
            <li id="menu-item-736" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-736">
              <a href="/" itemProp="url">
                <span itemProp="name">About Us</span>
              </a>
            </li>
            <li id="menu-item-737" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-737">
              <a href="/" itemProp="url">
                <span itemProp="name">Our Faith</span>
              </a>
            </li>
          </ul>
        </div>
        <SimpleSlider />
      </div>
    )
  }
}