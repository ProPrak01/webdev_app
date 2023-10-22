import React from 'react'

export default function Header() {
  return (
    <div className='topnav'>
    <img className='logo' src='./images/jokerwhite.png' alt="logo"/>
<nav>
    <ul>
        <li><button className='top' type="button">TOP</button></li>
        <li><button className='about' type="button">ABOUT</button></li>
    </ul>
</nav>
    
    </div>
  )
}
