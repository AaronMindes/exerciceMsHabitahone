import React from 'react';
import './HomeStyle.css';
import { NavLink } from 'react-router-dom';

const Home: React.FC = () => (
    <div className='home-container'>
        <h1>Aaron's Market</h1>
        <NavLink to="/market" className='nav-button-home'>
            Go to the Market Place
        </NavLink>
        <h2 className='info'>Towards the end of the 6 hours of the exercise I had a problem with the free db that I had found I had to refactor the code to
            send hard data but the code to use the db existed and i not have the time to implement in 6h the .net backend and the second page</h2>
    </div>
);

export default Home;
