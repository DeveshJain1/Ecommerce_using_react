import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
  MDBBtn
} from 'mdb-react-ui-kit';
import { ShoppingCart } from 'phosphor-react';

export const Navbar = () => {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand='lg' dark style={{ background: 'black' }} className='fixed-top'>
      <MDBContainer fluid>
        <MDBNavbarBrand as={NavLink} to='/'>
          VALUPIK
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='align-items-center justify-content-center mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <NavLink className='nav-link' exact to='/'>
                Home
              </NavLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <NavLink className='nav-link' to='/about'>
                About
              </NavLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <NavLink className='nav-link' to='/contact'>
                Contact
              </NavLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                  Shop
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem as={NavLink} to='/mens' link>
                    Mens
                  </MDBDropdownItem>
                  <MDBDropdownItem as={NavLink} to='/womens' link>
                    Womens
                  </MDBDropdownItem>
                  <MDBDropdownItem as={NavLink} to='/kids' link>
                    Kids
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <NavLink className='nav-link' to='/cart'>
                <ShoppingCart size={32} />
              </NavLink>
            </MDBNavbarItem>

            <MDBNavbarItem className='d-flex justify-content-center'>
              <NavLink className='nav-link' to='/login'>
                <MDBBtn rippleColor='white' color='info' style={{ backgroundColor: `transparent !important`, border: `3px solid white`, position: 'relative' }}>
                  Login / Register
                </MDBBtn>
              </NavLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};
