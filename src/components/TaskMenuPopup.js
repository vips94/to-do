import React from 'react';
import classes from './TaskMenuPopup.module.scss';

const TaskMenuPopup = (props)=>{
    return(
        <div className={classes.taskMenuPopup}>
            <button>Edit...</button>
            <div className={classes.taskMenuPopup__line}></div>
            <button>Delete</button>
        </div>
    );
}

export default TaskMenuPopup;