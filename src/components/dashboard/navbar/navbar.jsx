'use client'
import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Image from "next/image";
import AccountCircle from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import Logout from '@mui/icons-material/Logout';
import NotificationsIcon from '@mui/icons-material/Notifications'; 

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
       
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>

        <div className="ms-auto d-flex align-items-center">
          
          <IconButton color="inherit" aria-label="notifications">
            <NotificationsIcon  fontSize="medium"/>
          </IconButton>

          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          > 
          <Image
    src="/noavatar.png"
    alt="User Profile"
    width="30"
            height="30"
    style={{ borderRadius: '50%' }}
  />
            {/* <AccountCircle  fontSize="large"/> */}
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>
              <PermIdentityIcon fontSize="small" style={{ marginRight: '10px' }} /> Profile
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Logout fontSize="small" style={{ marginRight: '10px' }} /> Logout
            </MenuItem>
          </Menu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
