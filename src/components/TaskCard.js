import React,{useState,useEffect} from 'react';
import classes from './TaskCard.module.scss';
import {BsThreeDots} from 'react-icons/bs';
import TaskMenuPopup from './TaskMenuPopup';

const TaskCard = (props)=>{
    const [menuOpen,setMenuOpen] = useState(false);
    const [isDone,setIsDone] = useState(props.isDone);

    useEffect(()=>{
        setIsDone(props.isDone);
    },[props.isDone]);

    const toggleMenu = ()=>{
        setMenuOpen((p)=>!p);
    }

    const closeMenu = ()=>{
        if(menuOpen)
            setMenuOpen(false);
    }

    const doneHandler = ()=>{
        const taskInfo = {
            id : props.id,
            field: props.field
        }
        props.isDoneClicked(taskInfo);
    }

    const deleteHandler = ()=>{
        const taskInfo = {
            id : props.id,
            field: props.field
        }
        props.deleteHandler(taskInfo);
    }

    const editHandler = ()=>{
        const taskInfo = {
            id : props.id,
            field: props.field
        }
        props.editHandler(taskInfo);
    }

    return(
        <div className={classes.taskCard} onClick={closeMenu}>
            <div className={classes.taskCard__title}>
                <h3 className={isDone ? classes.isDone : ""}>{props.title}</h3>
                <span/>
                <div className={classes.taskCard__title__menuContainer}>
                    <BsThreeDots className={classes.taskCard__title__menuContainer__menu} onClick={toggleMenu}/>
                    { menuOpen && <TaskMenuPopup editHandler={editHandler} deleteHandler={deleteHandler} onClick = {(event) => event.stopPropagation()}/>}
                </div>
            </div>
            <div>
                <p className={isDone ? classes.isDone : ""}>{props.description}</p>
            </div>
            <form className={classes.taskCard__footer}>
                <input type="checkbox" name="done" checked={isDone} onChange={doneHandler}/>
                <label>done</label>
            </form>
        </div>
    );
}

export default TaskCard;