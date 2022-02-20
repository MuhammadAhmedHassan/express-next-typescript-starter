import React, { useState, useEffect } from "react";
import Link from "next/link";

interface UserPayload {
  id: string;
  email: string;
  iat: number;
}

function Navbar() {
  const [currentUser, setCurrentUser] = useState<UserPayload | null>(null);

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
        <Link href='/'>
          <a className='navbar-brand'>Navbar</a>
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link href='/login'>
                <a className='nav-link active' aria-current='page'>
                  Login
                </a>
              </Link>
            </li>
            <li className='nav-item'>
              <Link href='/register'>
                <a className='nav-link'>Register</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
