import React from 'react'
import "../App.css"
import instalogo from "../images/insta.png"
import MenuContent from './MenuContent'
function Menu() {
  return (
    <div>
<div className='menu'>
        <div className="logo">
            <img src={instalogo} alt="" className='logo'/>
        </div>
        <div className="menu-contents">
            <MenuContent/>
        </div>
    </div>
    </div>
    
  )
}

export default Menu