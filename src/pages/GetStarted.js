import React from 'react';
import classes from './GetStarted.module.scss';

const GetStarted = ()=>{
    return(
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
                <button>Register</button>
                <button>Login</button>
            </div>
            <div className={classes.getStarted__avatar}>
                <img src="/images/2.png" alt='avatar'/>
                <img src="/images/7.png" alt='avatar'/>
            </div>
            <div className={classes.getStarted__card}/>

        </div>
    );
}

export default GetStarted;