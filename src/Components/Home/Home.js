import React from 'react';
import home from '../../Asset/home.jpg'
// import './Home.css'

const Home = () => {
    return (
        <div className='bg-gradient-to-r from-sky-500 to-sky-200 py-5 '>
            
            <h1 className='italic text-5xl  text-slate-100 text-center py-3 ' >Welcome to NOC TICKETING SYSTEM</h1>

          <div class=" carousel carousel-end">
                <div class="carousel-item ">
                    <img src={home} alt="Pizza" />
                </div>
                <div class="carousel-item">
                  <img src={home} alt="Pizza" />
                </div>
                <div class="carousel-item">
                  <img src={home} alt="Pizza" />
                </div>
            </div>
        </div>
    );
};

export default Home;