import React from 'react'
import '../../css/logo.css';
function Logo() {
    const handleToggleSideBar= ()=>{
        document.body.classList.toggle('toggle-sidebar');
    };
    
  return (
    <div className='d-flex align-items-center justify-content-between'>
        <a href='/' className='logo d-flex align-items-center'>
        {/* Logo Images */}
            <span className='d-none d-lg-block'>AdminDashbaord</span>
        </a>
        <i className='bi bi-list toggle-sidebar-btn' onClick={handleToggleSideBar}></i>
    </div>
  )
}

export default Logo