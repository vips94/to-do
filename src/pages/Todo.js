import React, { useState } from "react";
import classes from "./Todo.module.scss";
import { BsPlusLg } from "react-icons/bs";
import WorkTasks from "../components/WorkTasks";
import AddTask from "../components/AddTask";
import StudyTasks from "../components/StudyTasks";
import FamilyTasks from "../components/FamilyTasks";
import EntertainmentTasks from "../components/EntertainmentTasks";
import {
  Route,
  Routes,
  NavLink,
} from "react-router-dom";

const Todo = () => {
  const [addTaskMenu, setAddTaskMenu] = useState(false);

  const newTaskMenuHandler = () => {
    setAddTaskMenu((p) => !p);
  };

  return (
    <div className={classes.todo}>
      <div className={classes.todo__logo}>
        <h1>todo</h1>
        <BsPlusLg
          className={classes.todo__logo__plus}
          onClick={newTaskMenuHandler}
        />
      </div>
      <nav className={classes.todo__nav}>
        <ul>
          <li>
            
            <NavLink exact="true" to="/work">
            <span className={classes.todo__nav__work} /> work
            </NavLink>
          </li>
          <li>
            
            <NavLink exact="true" to="/study">
            <span className={classes.todo__nav__study} /> study
            </NavLink>
          </li>
          <li>
            
            <NavLink exact="true" to="/entertainment">
            <span className={classes.todo__nav__enter} /> entertainment
            </NavLink>
          </li>
          <li>
            
            <NavLink exact="true" to="/family">
            <span className={classes.todo__nav__family} /> family
            </NavLink>
          </li>
        </ul>
        <img src="/images/3.png" alt="avatar" />
      </nav>
      <div className={classes.todo__tasksArea}>
     
          <Routes>
            <Route path="/work" element={<WorkTasks />} />
            <Route path="/study" element={<StudyTasks />} />
            <Route path="/entertainment" element={<EntertainmentTasks />} />
            <Route path="/family" element={<FamilyTasks />} />
          </Routes>
      </div>
      {addTaskMenu && <AddTask closeTaskTab={newTaskMenuHandler} />}
    </div>
  );
};

export default Todo;
