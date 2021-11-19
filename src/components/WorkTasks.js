import React from 'react';
import TaskCard from './TaskCard';
import classes from './WorkTasks.module.scss';

const WorkTasks = ()=>{
    return(
        <div className={classes.workTasks}>
            <div className={classes.workTasks__container}>
            <TaskCard description="complete this task before the time limit otherwise
                    it will bring big problem to your plate that will overflow
                    complete this task before the time limit otherwise it will 
                    bring big problem to your plate that will overflow
                    complete this task before the time limit otherwise it will 
                    bring big problem to your plate that will overflow
                    complete this task before the time limit otherwise it will 
                    bring big problem to your plate that will overflow
                    complete this task before the time limit otherwise it will 
                    bring big problem to your plate that will overflow"/>
           <TaskCard  description="complete this task before the time limit otherwise
                    it will bring big problem to your plate that will overflow"/>
           <TaskCard  description="complete this task before the time limit otherwise
                    it will bring big problem to your plate that will overflow"/>
           <TaskCard  description="complete this task before the time limit otherwise
                    it will bring big problem to your plate that will overflow
                    complete this task before the time limit otherwise it will
                    complete this task before the time limit otherwise it will " />
            <TaskCard  description="complete this task before the time limit otherwise
                    it will bring big problem to your plate that will overflow"/>
            <TaskCard  description="complete this task before the time limit otherwise
                    it will bring big problem to your plate that will overflow"/>
            <TaskCard  description="complete this task before the time limit otherwise
                    it will bring big problem to your plate that will overflow
                    complete this task before the time limit otherwise it will
                    complete this task before the time limit otherwise it will " />   
            </div>          
        </div>
    );
}

export default WorkTasks;