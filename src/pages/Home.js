import React from 'react';
import classes from './Home.module.scss';

const Home = ()=>{
    return(
        <div className={classes.home}>
            <div className={classes.home__title}>
                <h1>todo</h1>
                <div className={classes.home__title__lineThrough}/>
            </div>
            <div className={classes.home__img}>
                <img className={classes.home__img__img1} src="/images/1.png" alt="img"/>
                <img className={classes.home__img__img2} src="/images/5.png" alt="img"/>
            </div>
        </div>
    );
}

export default Home;