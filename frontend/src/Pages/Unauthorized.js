import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../Components/Button';

function Unauthorized() {
    const navigate = useNavigate();

  return (
    <div className='hero-container'>
        <h1>You cannot access this page as you are not logged in.</h1>
        <p>Please return to the homepage and login or sign up</p>
        <div className='hero-btns'>
        <Button
          className="btn-hero"
          handleClick={() => {
            navigate("/");
          }}
          label="Homepage"
        />
        </div>
    </div>
  )
}

export default Unauthorized