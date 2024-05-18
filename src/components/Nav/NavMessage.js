import React from 'react'

function NavMessage() {
  return (
    <li className='nav-item dropdown '>
      <a className='nav-link nav-icon' href="#" data-bs-toggle="dropdown">
        <i className='bi bi-chat-left-text'></i>
        <span className='badge bg-success badge-number'>2</span>
       </a>

      <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow messages'>
        <li className='dropdown-header'>You have 3 new message
          <a>
            <span className='badge rounded-pill bg-primary p-2 ms-2'>View all</span>
          </a>
        </li>

        <li>
          <hr className='dropdown-divider' />
        </li>

        <li className='message-item'>
          <a href="#">
            <img src="" alt="" className='rounded-circle'/>
            <div>
              <h4>Rabin Subedi</h4>
              <p> Hello your order has been delivered</p>
              <p>3 hrs. ago</p>
            </div>
          </a>
        </li>

        <li>
          <hr className='dropdown-divider' />
        </li>

        <li className='message-item'>
          <a href="#">
            <img src="" alt="" className='rounded-circle'/>
            <div>
              <h4>Rabin Subedi</h4>
              <p> Hello your order has been delivered</p>
              <p>3 hrs. ago</p>
            </div>
          </a>
        </li>
        <li>
          <hr className='dropdown-divider' />
        </li>

        <li className='dropdown-footer'>
          <a>Show all messages</a>
        </li>
      </ul>
    </li>
  )
}

export default NavMessage