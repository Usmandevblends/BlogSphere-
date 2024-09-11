import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <>
      <div className="site-header">
        <div className="container mx-auto p-4">
          <div className="header flex items-center justify-between">
            <div className="flex gap-5 items-center">
              <div className="logo">
                <Link to="/" className="text-2xl font-medium text-[#805aed]"> Blogsphere</Link>
              </div>
              <div className='nav'>
                <ul className="flex gap-5 pt-1">
                  <li className="">
                    <Link to="/technology" className="text-gray-600 font-medium uppercase hover:text-[#805aed]">
                      Technology
                    </Link>
                  </li>
                  <li className="">
                    <Link to="/gadgets" className="text-gray-600 font-medium uppercase hover:text-[#805aed]">
                      Gadgets
                    </Link>
                  </li>
                  <li className="">
                    <Link to="/software" className="text-gray-600 font-medium uppercase hover:text-[#805aed]">
                      Software
                    </Link>
                  </li>
                  <li className="">
                    <Link to="/games" className="text-gray-600 font-medium uppercase hover:text-[#805aed]">
                      Games
                    </Link>
                  </li>
                  <li>
                    <Link to="/podcasts" className="text-gray-600 font-medium uppercase hover:text-[#805aed]">
                      Podcasts
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="toggle-btn pt-1 hidden ">
              <i className='fa fa-bars text-2xl cursor-pointer text-[#805aed]'></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation;


