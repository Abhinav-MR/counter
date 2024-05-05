import React from 'react'

import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
function Header() {
  return (
    <>
 <MDBNavbar light bgColor='info'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <img
              src='https://cdn.pixabay.com/animation/2023/02/23/23/26/23-26-34-644_512.gif'
              height='30'
              alt=''
              loading='lazy'
            />
          Automatic Counter App
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </>
  )
}

export default Header