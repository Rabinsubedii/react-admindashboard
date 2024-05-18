import React from 'react'
import '../../css/header.css';
import Logo from '../Logo/Logo';
import Search from '../Searchbar/Search';
import Nav from '../Nav/Nav';
function Header() {
  return (
    <header id='header' className="header fixed-top d-flex align-items-center">
        {/* Logo */}
          <Logo/>

        {/* SearchBar */}
          <Search/>
        {/* Nav */}
          <Nav/>
    </header>
  );
}

export default Header