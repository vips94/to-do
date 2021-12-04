import React, { useState } from 'react';
import classes from './Register.module.scss';
import { CSSTransition } from 'react-transition-group';

const Register = (props)=>{
    const [close ,setClose] = useState(false)

    const closeHandler = ()=>{
        setClose(true);
        props.closePopup();
    }

    return(
    <div className={close?classes.register__close:classes.register} onClick={closeHandler}>
        <div className={close?classes.register__container__close:classes.register__container} onClick={(event)=>event.stopPropagation()}>
            <button onClick={closeHandler} type="button">X</button>
            <h1>REGISTER</h1>
            <form className={classes.register__container__form}>
                <input type="text" name="username" placeholder="Username"/>
                <input type="email" name="email" placeholder="Email"/>
                <input type="password" name="password" placeholder="Password"/>
                <input type="submit" name="submit"/>
            </form>
            <span>Already have an account <button onClick={props.onLoginClick}>Login</button></span>
        </div>
    </div>
    );

}

export default Register;