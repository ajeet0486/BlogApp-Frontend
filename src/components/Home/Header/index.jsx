import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { IoIosAddCircleOutline } from 'react-icons/io';

const Header = () => (
  <header className='home-header'>
    <div className=''>
      <div className='header1'> <h2>Good Morning</h2></div>
      <div className='header2'>
        <div id="header2-1"></div>
        <div id="header2-2"><h1>
           Ajeet
        </h1></div>
        <div id="header2-3" style={{ display: "flex", alignItems: "center" }}>
          <div style={{ marginLeft: "65%" }}>
            <Link to='/blog/write'><IoIosAddCircleOutline style={{ height: "30px", width: "30px" }} /></Link>
          </div>

        </div>
      </div>
    </div>
  </header>
);

export default Header;
