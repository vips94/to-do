import React from 'react';
import TaskCard from './TaskCard';
import classes from './Tasks.module.scss';

const StudyTasks = (props)=>{

   const doneClickHander = (taskInfo)=>{
        props.isDoneClicked(taskInfo);
   }

   const deleteHandler = (taskInfo)=>{
        props.deleteHandler(taskInfo);
    }

    const editHandler = (taskInfo)=>{
        props.editHandler(taskInfo);
    }

    return(
        <div className={classes.tasks}>
            <div className={classes.tasks__container}>
            {
                props.studyTasks.map((item)=>{
                    return(
                        <TaskCard editHandler={editHandler} deleteHandler={deleteHandler} key={item.id} field={item.field} id={item.id} isDoneClicked={doneClickHander} title={item.title} description={item.description} isDone={item.isDone}/>
                    );
                })
            }
           </div>          
        </div>
    );
}

export default StudyTasks;