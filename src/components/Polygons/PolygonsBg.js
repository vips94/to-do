import React from 'react';
import classes from './PolygonsBg.module.scss';

const PolygonsBg = ()=>{
    return(
        <div className={classes.background}>
            <div className={classes.background__box1}/>
            <div className={classes.background__box2}/>
            <div className={classes.background__box3}/>
            <div className={classes.background__circle1}/>
            <div className={classes.background__circle2}/>
            <div className={classes.background__triangle1}/>
            <div className={classes.background__triangle2}/>
            <div className={classes.background__triangle3}/>
        </div>
    );
}

export default PolygonsBg;