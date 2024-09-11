import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <>
      <div className="site-header bg-[#805aed]">
        <div className="container mx-auto p-4">
          <div className="header flex items-center justify-between">
            <div className="flex gap-5 items-center">
              <div className="logo">
                <Link to="/" className="text-2xl font-medium text-white">UiFlow</Link>
              </div>
              <div className='nav'>
                <ul className="flex gap-5 pt-1">
                  <li className="">
                    <Link to="/technology" className="text-white font-medium uppercase">
                      Technology
                    </Link>
                  </li>
                  <li className="">
                    <Link to="/gadgets" className="text-white font-medium uppercase">
                      Gadgets
                    </Link>
                  </li>
                  <li className="">
                    <Link to="/software" className="text-white font-medium uppercase">
                      Software
                    </Link>
                  </li>
                  <li className="">
                    <Link to="/games" className="text-white font-medium uppercase">
                      Games
                    </Link>
                  </li>
                  <li>
                    <Link to="/podcasts" className="text-white font-medium uppercase">
                      Podcasts
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="toggle-btn pt-1 hidden ">
              <i className='fa fa-bars text-2xl cursor-pointer text-white'></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation;


