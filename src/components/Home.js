import React from 'react';
import {HomeStyled} from '../style/home'

export default function Home() {
    return (
        <HomeStyled>
            <div className='container'>
                <div className='wrapper'>
                    <div>
                        <h1>Title</h1>
                    </div>
                    
                    <div className="slide_container">

                        <button>next</button>
                        <button>prev</button>
                        
                        <div className='slide1'>
                            <p>First slide</p> 
                            <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg' />
                        </div>

                        <div className='slide2'>
                            <p>Second slide</p>
                            <img src='https://media.wired.com/photos/5c1ae77ae91b067f6d57dec0/master/pass/Comparison-City-MAIN-ART.jpg' />
                        </div>
                    </div>
                    
                    <div>
                        <div>About Us</div>
                    </div>
                    
                </div>
            </div>
        </HomeStyled>
    )
}
