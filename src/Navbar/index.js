import React from 'react';
import {Nav, NavLink, NavMenu, NavBtn, NavBtnLink, MobileIcon} from './NavbarElements';
import {FaBars} from 'react-icons/fa';
import { FaSignOutAlt } from 'react-icons/fa';

export const Navbar = ({ toggle }) => {
    return (
        <div>
          <Nav>
            <NavLink to="/">
              The Rugby Shop
            </NavLink>
            
              <MobileIcon onClick={toggle}>
                <FaBars />
              </MobileIcon>

              <NavMenu>
                <NavLink to="/product">Products</NavLink>
                <NavLink to="/contactus">Contact Us</NavLink>
                <NavLink to="/account">Account</NavLink>
                <NavLink to="/signup">Sign Up</NavLink>
              </NavMenu>
                          
              <NavBtn>
                  <NavBtnLink to="/signin">Sign In</NavBtnLink>
                  <NavBtnLink to ="/">{ FaSignOutAlt }</NavBtnLink>
              </NavBtn>
              
          </Nav>  
        </div>
    );
};

export default Navbar;