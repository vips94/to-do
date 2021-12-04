import React,{useState} from 'react';
import classes from './Register.module.scss';

const Login = (props)=>{
    const [close ,setClose] = useState(false)

    const closeHandler = ()=>{
        setClose(true);
        props.closePopup();
    }
    
    return(
        <div className={close?classes.register__close:classes.register} onClick={closeHandler}>
            <div className={close?classes.register__container__close:classes.register__container} onClick={(event)=>event.stopPropagation()}>
                <button onClick={closeHandler} type="button">X</button>
                <h1>LOGIN</h1>
                <form className={classes.register__container__form}>
                    <input type="email" name="email" placeholder="Email"/>
                    <input type="password" name="password" placeholder="Password"/>
                    <input type="submit" name="submit"/>
                </form>
                <span>Don't have an account <button onClick={props.onRegisterClick}>Register</button></span>
            </div>
        </div>
    );
}

export default Login;