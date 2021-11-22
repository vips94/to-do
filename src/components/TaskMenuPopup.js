import React from 'react';
import classes from './TaskMenuPopup.module.scss';

const TaskMenuPopup = (props)=>{

    const deleteHandler = ()=>{
        props.deleteHandler();
    }

    const editHandler = ()=>{
        props.editHandler();
    }

    return(
        <div className={classes.taskMenuPopup}>
            <button onClick={editHandler}>Edit...</button>
            <div className={classes.taskMenuPopup__line}></div>
            <button onClick={deleteHandler}>Delete</button>
        </div>
    );
}

export default TaskMenuPopup;