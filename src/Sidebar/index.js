import React from 'react';
import {SidebarContainer, Icon, ClosedIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute, SignoutWrapper, SignOut } from './SideBarElements';
import { FaSignOutAlt } from 'react-icons/fa';


const Sidebar  = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <ClosedIcon />
            </Icon>
            
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/product" onClick={toggle}>Products</SidebarLink>
                    <SidebarLink to="/contactus" onClick={toggle}>Contact Us</SidebarLink>
                    <SidebarLink to="/account" onClick={toggle}>Account</SidebarLink>
                    <SidebarLink to="/signup" onClick={toggle}>Sign Up</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin">Sign In</SidebarRoute>
                    <SidebarRoute to="/">  { FaSignOutAlt } </SidebarRoute>
                </SideBtnWrap>
                <SignoutWrapper>
                    <SignOut />
                </SignoutWrapper> 
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
