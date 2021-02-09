import React from 'react'
import { NavDiv } from '../style/nav'
import LogoVid from '../LogoFile/Logo.mp4'

export default function Nav() {
    return (
        <NavDiv>
        
            <video style={{width: '175px', height: '175px'}}  autoPlay loop>
                <source src={LogoVid} type='video/mp4' />
            </video>
            
            <div></div>
            <div>
                <button>Shop</button>
            </div>
            <div>
                <button>Login</button>
            </div>
        </NavDiv>
    )
}
