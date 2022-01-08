import React from 'react'
import { useNavigate } from 'react-router-dom';

function Hero() {
    const navigate = useNavigate();


    return (
        <div>
        <h1>E-Bunker</h1>
        <button onClick={() => {navigate("/sign-in");}}>
            Sign In
        </button>

            
        </div>
    )
}

export default Hero
