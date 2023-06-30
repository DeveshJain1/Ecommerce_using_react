import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import { ShoppingCart } from "phosphor-react";
export const Navbar = () => {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand='lg' dark style={{ background: `black` }} className='fixed-top'>
      <MDBContainer fluid >
        <MDBNavbarBrand href='/'>VALUPIK</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='align-items-center  justify-content-center mb-2 mb-lg-0 '>

            <MDBNavbarItem>
              <MDBNavbarLink aria-current='page' href='/'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarLink href='/about'>
                About
              </MDBNavbarLink>
            <MDBNavbarItem>
              <MDBNavbarLink href='/contact'>Contact</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                Shop
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href='/mens'  link>Mens</MDBDropdownItem>
                  <MDBDropdownItem href='/womens' link>Womens </MDBDropdownItem>
                  <MDBDropdownItem href='/kids' link>Kids</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
        

            <MDBNavbarItem>
              <MDBNavbarLink href='/cart'>
                <ShoppingCart size={32} />
              </MDBNavbarLink>
            </MDBNavbarItem>


            <MDBNavbarItem className='d-flex justify-content-center'>
              <MDBNavbarLink href='/login'>
                <MDBBtn rippleColor='white'  color='info'   style={{backgroundColor:`transparant !important`, border:`3px solid white`, position:'relative'}}>
                Login / Register
                </MDBBtn>
              </MDBNavbarLink>
            </MDBNavbarItem>
          
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
