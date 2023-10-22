import React,{ useState } from 'react'

export default function Header() {

    const [darkmodeon, setdarkmode] = useState(false);

    function darkOnOff() {
      setdarkmode(!darkmodeon);
      const body = document.body;
      body.classList.toggle("dark-mode");
    }



  return (
    <div className='topnav'>
    <img className='logo' src='./images/webops.png' alt="logo"/>
<nav>
    <ul>
   

        <li><button  onClick={darkOnOff}  className='modebutton' type="button">
        {darkmodeon ?  'Dark Mode' : 'Light Mode' }
        </button></li>
    </ul>
</nav>
    
    </div>
  )
}
