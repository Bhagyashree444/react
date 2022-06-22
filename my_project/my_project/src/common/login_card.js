import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginCard = ({type})=>{

    const navigate = useNavigate();

    const onLogin = ()=>{};

    const onRegister = ()=>{
        navigate(`/coach/register`);
    };

    return(
        <div>
            <div>Icon</div>
            <button onClick={onLogin}>{`Login as a ${type}`}</button>
            <button onClick={onRegister}>{`Join as a ${type}`}</button>
        </div>
    )
};

export default LoginCard;