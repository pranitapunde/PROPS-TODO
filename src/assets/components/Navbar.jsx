import React from 'react'

const Navbar = ( {dark , changeTheme}) => {


  return (
    <nav className= {dark ? "navbar bg-dark text-light" : "navbar bg-secondary "}>
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1  text-warning " > TODO APP WITH PROP </span>
        <span className='navbar-brand mb-0'>
          <button className= {dark ? 'btn btn-sm btn-light float-end': 'btn btn-sm btn-dark float-end' } 
          onClick={changeTheme}
          > { dark? "Light Mode ": " Dark Mode" }</button>
        </span>
      </div>

    </nav>
  )
}

export default Navbar
