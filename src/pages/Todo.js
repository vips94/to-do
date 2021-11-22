import React, { useState } from "react";
import classes from "./Todo.module.scss";
import { BsPlusLg } from "react-icons/bs";
import WorkTasks from "../components/WorkTasks";
import AddTask from "../components/AddTask";
import StudyTasks from "../components/StudyTasks";
import FamilyTasks from "../components/FamilyTasks";
import EntertainmentTasks from "../components/EntertainmentTasks";
import { Route, Routes, NavLink } from "react-router-dom";


const workTasksList = [
    {
        field:"work",
        title: "first",
        description:
          "complete this task before the day end otherewise face the consequences.",
        isDone: false,
        id:1
      },
      {
        field:"work",
        title: "second",
        description:
          "complete this task before the day end otherewise face the consequences.",
        isDone: false,
        id:2
      },
];

const familyTasksList = [
  {
    field:"family",
    title: "first",
    description:
      "complete this task before the day end otherewise face the consequences.",
    isDone: false,
    id:3
  },
  {
    field:"family",
    title: "second",
    description:
      "complete this task before the day end otherewise face the consequences.",
    isDone: false,
    id:4
  },
];

const entertainmentTasksList = [
  {
    field:"entertainment",
    title: "first",
    description:
      "complete this task before the day end otherewise face the consequences.",
    isDone: false,
    id:5
  },
];

const studyTasksList = [
  {
    field:"study",
    title: "first",
    description:
      "complete this task before the day end otherewise face the consequences.",
    isDone: false,
    id:7
  },
  {
    field:"study",
    title: "second",
    description:
      "complete this task before the day end otherewise face the consequences.",
    isDone: false,
    id:8
  },
  {
    field:"study",
    title: "third",
    description:
      "complete this task before the day end otherewise face the consequences.",
    isDone: false,
    id:9
  },
];

const Todo = () => {
  const [addTaskMenu, setAddTaskMenu] = useState(false);
  const [workTasks, setWorkTasks] = useState(workTasksList);
  const [familyTasks, setFamilyTasks] = useState(familyTasksList);
  const [studyTasks, setStudyTasks] = useState(studyTasksList);
  const [entertainmentTasks, setEntertainmentTasks] = useState(entertainmentTasksList);

  const newTaskMenuHandler = () => {
    setAddTaskMenu((p) => !p);
  };

  const DoneClickedHandler = (taskInfo)=>{
        console.log(taskInfo);

        if(taskInfo.field === "work"){
            const updatedWorkList = workTasks.map((obj)=>{
                return obj.id === taskInfo.id ? { ...obj, isDone: !obj.isDone } : obj
            })
            setWorkTasks(updatedWorkList);
        }

        else if(taskInfo.field === "family"){
            const updatedFamilyList = familyTasks.map((obj)=>{
                return obj.id === taskInfo.id ? { ...obj, isDone: !obj.isDone } : obj
            })
            setFamilyTasks(updatedFamilyList);
        }

        else if(taskInfo.field === "study"){
            const updatedStudyList = studyTasks.map((obj)=>{
                return obj.id === taskInfo.id ? { ...obj, isDone: !obj.isDone } : obj
            })
            setStudyTasks(updatedStudyList);
        }

        else if (taskInfo.field === "entertainment"){
            const updatedEntertainmentList = entertainmentTasks.map((obj)=>{
                return obj.id === taskInfo.id ? { ...obj, isDone: !obj.isDone } : obj
            })
            setEntertainmentTasks(updatedEntertainmentList);
        }
        
  }

  const deleteHandler = (taskInfo)=>{

    if(taskInfo.field === "work"){
        const updatedWorkList = workTasks.filter((obj)=>{
            return obj.id !== taskInfo.id
        })
        setWorkTasks(updatedWorkList);
    }

    else if(taskInfo.field === "family"){
        const updatedFamilyList = familyTasks.filter((obj)=>{
            return obj.id !== taskInfo.id
        })
        setFamilyTasks(updatedFamilyList);
    }

    else if(taskInfo.field === "study"){
        const updatedStudyList = studyTasks.filter((obj)=>{
            return obj.id !== taskInfo.id
        })
        setStudyTasks(updatedStudyList);
    }

    else if(taskInfo.field === "entertainment"){
        const updatedEntertainmentList = entertainmentTasks.filter((obj)=>{
            return obj.id !== taskInfo.id
        })
        setEntertainmentTasks(updatedEntertainmentList);
    }
  }

  const newTaskAddedHandler = (newTask) => {

    const createTask = {
      title: newTask.title,
      description: newTask.description,
      isDone: false,
      id:newTask.id
    };

    if (newTask.work) {
      setWorkTasks((prevState) => {
        createTask.field = "work";
        return [createTask, ...prevState];
      });
    } else if (newTask.family) {
      setFamilyTasks((prevState) => {
        createTask.field = "family";
        return [createTask, ...prevState];
      });
    } else if (newTask.study) {
      setStudyTasks((prevState) => {
        createTask.field = "study";
        return [createTask, ...prevState];
      });
    } else {
      setEntertainmentTasks((prevState) => {
        createTask.field = "entertainment";
        return [createTask, ...prevState];
      });
    }
  };

  const editHandler = ()=>{
      
  }

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
              <span className={classes.todo__nav__work} />
              <p>work</p>
            </NavLink>
          </li>
          <li>
            <NavLink exact="true" to="/family">
              <span className={classes.todo__nav__family} />
              <p>family</p>
            </NavLink>
          </li>
          <li>
            <NavLink exact="true" to="/entertainment">
              <span className={classes.todo__nav__enter} />
              <p>entertainment</p>
            </NavLink>
          </li>
          <li>
            <NavLink exact="true" to="/study">
              <span className={classes.todo__nav__study} />
              <p>study</p>
            </NavLink>
          </li>
        </ul>
        <img src={process.env.PUBLIC_URL+"/images/3.png"} alt="avatar" />
      </nav>
      <div className={classes.todo__tasksArea}>
        <Routes>
          <Route path="/work" element={<WorkTasks editHandler={editHandler} deleteHandler={deleteHandler} isDoneClicked={DoneClickedHandler} workTasks={workTasks} />} />
          <Route
            path="/study"
            element={<StudyTasks deleteHandler={deleteHandler} editHandler={editHandler} isDoneClicked={DoneClickedHandler} studyTasks={studyTasks} />}
          />
          <Route
            path="/entertainment"
            element={
              <EntertainmentTasks deleteHandler={deleteHandler} editHandler={editHandler} isDoneClicked={DoneClickedHandler} entertainmentTasks={entertainmentTasks} />
            }
          />
          <Route
            path="/family"
            element={<FamilyTasks deleteHandler={deleteHandler} editHandler={editHandler} isDoneClicked={DoneClickedHandler} familyTasks={familyTasks} />}
          />
        </Routes>
      </div>
      {addTaskMenu && (
        <AddTask
          onNewTaskAdded={newTaskAddedHandler}
          closeTaskTab={newTaskMenuHandler}
        />
      )}
    </div>
  );
};

export default Todo;
