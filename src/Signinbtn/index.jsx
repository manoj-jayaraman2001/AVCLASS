import React from 'react';
import './style.css';
import PersonIcon from '@mui/icons-material/Person';
// import { useNavigate } from 'react-router';


const SigninButton = ( ) => {
    // const naviagte = useNavigate();
  return (
    <div className='btnsignin'>
        <PersonIcon className='Signinicon'/>
    </div>
  );
};


export default SigninButton;