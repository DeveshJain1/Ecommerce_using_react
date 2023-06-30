import React from 'react';
import "./errors.css"
import { Link } from 'react-router-dom';
import { MDBBtn } from 'mdb-react-ui-kit';


export const Error =()=>{
return <>
<div className='bg_error'>
<div class="hit-the-floor">404</div>
<Link to="/" className='d-flex justify-content-center align-content-center'>
<MDBBtn rippleColor='black'>
     Return
</MDBBtn>
</Link>
 </div>
</>
}
 