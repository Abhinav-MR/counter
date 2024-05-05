import React from 'react'
import {
    MDBFooter,
  } from 'mdb-react-ui-kit';
function Footer() {
  return (
    <div>
 <MDBFooter className='bg-light text-center text-white fixed-bottom'>
      <div className='text-center p-3' style={{ backgroundColor:'skyblue' }}>
        © 2024 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          Automatic-Counter-App.com
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer