import React from "react"
import globeIcon from './globe.png'

const Header = () => <header>
                        <div className="header-div">
                            <img className="header-image" src={globeIcon} alt="globe"></img>
                            <p>Travel Journal</p>
                        </div>
                     </header>

export default Header