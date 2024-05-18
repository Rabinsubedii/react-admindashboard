import React from 'react'

function NavNotice() {
  return (
    <li className='nav-item dropdown '>
      <a className='nav-link nav-icon' href="#" data-bs-toggle="dropdown">
        <i className='bi bi-bell'></i>
        <span className='badge bg-primary badge-number'>4</span>
       </a>

      <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow notification'>
        <li className='dropdown-header'>You have 3 new notification
          <a>
            <span className='badge rounded-pill bg-primary p-2 ms-2'>View all</span>
          </a>
        </li>
        <li>
          <hr className='dropdown-divider' />
        </li>

        <li className='notification-item'>
          <i className='bi bi-exclamation-circle text-warning'> </i>
          <div>
            <h4>Lorem Ipsum</h4>
            <p>Lorem new ipsum veritatis oditsn</p>
            <p>30 min</p>
          </div>
        </li>

        <li>
        <hr className='dropdown-divider' />
        </li>

        <li className='notification-item'>
          <i className='bi bi-exclamation-circle text-danger'> </i>
          <div>
            <h4>Lorem Ipsum</h4>
            <p>Lorem new ipsum veritatis oditsn</p>
            <p>30 min</p>
          </div>
        </li>

        <li>
        <hr className='dropdown-divider' />
        </li>

        <li className='notification-item'>
          <i className='bi bi-check-circle text-success'> </i>
          <div>
            <h4>Lorem Ipsum</h4>
            <p>Lorem new ipsum veritatis oditsn</p>
            <p>30 min</p>
          </div>
        </li>
        


        <li className='dropdown-footer'>
          <a>Show all notification</a>
        </li>
      </ul>
    </li>
  );
}

export default NavNotice