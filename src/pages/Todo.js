import React,{useState}from 'react';
import classes from './Todo.module.scss';
import {BsPlusLg} from 'react-icons/bs';
import WorkTasks from '../components/WorkTasks';
import AddTask from '../components/AddTask';

const Todo = ()=>{
    const [addTaskMenu,setAddTaskMenu] = useState(false);

    const newTaskMenuHandler = ()=>{
        setAddTaskMenu((p)=>!p);
    }

    return(
        <div className={classes.todo}>
            <div className={classes.todo__logo}>
                <h1>todo</h1>
                <BsPlusLg className={classes.todo__logo__plus} onClick={newTaskMenuHandler}/>
            </div>
            <nav className={classes.todo__nav}>
               <ul>
                   <li><span className={classes.todo__nav__work}/><a href="/work">work</a></li>
                   <li><span className={classes.todo__nav__study}/><a href="/study">study</a></li>
                   <li><span className={classes.todo__nav__enter}/><a href="/entertainment">entertainment</a></li>
                   <li><span className={classes.todo__nav__family}/><a href="/family">family</a></li>
               </ul>
               <img src="/images/3.png" alt="avatar"/>
            </nav>
            <div className={classes.todo__tasksArea}>
                <WorkTasks/>
            </div>
            {addTaskMenu && <AddTask closeTaskTab={newTaskMenuHandler}/>}
        </div>
    );
}

export default Todo;