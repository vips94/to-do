import React, { useState } from 'react';
import classes from './GetStarted.module.scss';
import PolygonsBg from './../components/Polygons/PolygonsBg';
import Register from '../components/User/Register';
import Login from '../components/User/Login';

const GetStarted = ()=>{
    const[login ,setLogin] = useState(false);
    const[register,setRegister] = useState(false);

    const registerHandler = ()=>{
        setRegister(true);
        setLogin(false);
    }

    const loginHandler = ()=>{
        setLogin(true);
        setRegister(false);
    }

    const closePopupHandler = ()=>{
        setTimeout(()=>{
            setLogin(false);
            setRegister(false);
        },500);
        
    }

    return(
        <div>
        <div className={classes.getStarted}>
            <div className={classes.getStarted__title}>
                <span className={classes.getStarted__title__first}>t</span>
                <span className={classes.getStarted__title__second}>o</span>
                <span className={classes.getStarted__title__third}>d</span>
                <span className={classes.getStarted__title__fourth}>o</span>
            </div>
            <div className={classes.getStarted__quote}>"Don't be afraid to give your best to what seemingly are small tasks.
                Every time you conquer one it makes you that much stronger. 
                If you do the little tasks well, the big ones will tend to 
                take care of themselves." <br/><b>-- William Patten</b>
            </div>
            <div className={classes.getStarted__buttons}>
                <button onClick={registerHandler}>Register</button>
                <button onClick={loginHandler}>Login</button>
            </div>
            <div className={classes.getStarted__avatar}>
                <img src={process.env.PUBLIC_URL+"/images/2.png"} alt='avatar'/>
                <img src={process.env.PUBLIC_URL+"/images/7.png"} alt='avatar'/>
            </div>
            <img src={process.env.PUBLIC_URL+"/images/card.png"} className={classes.getStarted__card} alt="task card"/>
            {login && <Login onRegisterClick={registerHandler} closePopup={closePopupHandler}/>}
            {register && <Register onLoginClick={loginHandler} closePopup={closePopupHandler}/>}
            
        </div>
        
        </div>
    );
}

export default GetStarted;