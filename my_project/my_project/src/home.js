import React from 'react';
import LoginCard from './common/login_card';

const Home = ()=>{
    return(
        <div>
            <div>{`We are at the heart of appropraite care`}</div>
            <LoginCard type={'Coach'}/>
            <LoginCard type={'User'}/>
        </div>
    )
};

export default Home;