import React,{useState} from 'react';
import classes from './TaskCard.module.scss';
import {BsThreeDots} from 'react-icons/bs';
import TaskMenuPopup from './TaskMenuPopup';

const TaskCard = (props)=>{
    const [menuOpen,setMenuOpen] = useState(false);

    const toggleMenu = ()=>{
        setMenuOpen((p)=>!p);
    }

    const closeMenu = ()=>{
        if(menuOpen)
            setMenuOpen(false);
    }

    return(
        <div className={classes.taskCard} onClick={closeMenu}>
            <div className={classes.taskCard__title}>
                <h3>The first task title</h3>
                <div className={classes.taskCard__title__menuContainer}>
                    <BsThreeDots className={classes.taskCard__title__menuContainer__menu} onClick={toggleMenu}/>
                    { menuOpen && <TaskMenuPopup onClick = {(event) => event.stopPropagation()}/>}
                </div>
            </div>
            <div>
                <p>{props.description}</p>
            </div>
            <form className={classes.taskCard__footer}>
                <input type="checkbox" id="done" name="done" value="done"/>
                <label htmlFor="done"> done</label>
            </form>
            
        </div>
    );
}

export default TaskCard;