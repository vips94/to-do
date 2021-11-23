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
        title: "Work Title",
        description:
          "Write the Description Regarding the the above title",
        isDone: false,
        id:1
      }
];

const familyTasksList = [
  {
    field:"family",
    title: "Family Title",
    description:
      "Write the Description Regarding the the above title",
    isDone: false,
    id:1
  }
];

const entertainmentTasksList = [
  {
    field:"entertainment",
    title: "Entertainment Title",
    description:
        "Write the Description Regarding the the above title",
    isDone: false,
    id:1
  },
];

const studyTasksList = [
  {
    field:"study",
    title: "Study Title",
    description:
      "Write the Description Regarding the the above title",
    isDone: false,
    id:1
  }
];

const Todo = () => {
  const [addTaskMenu, setAddTaskMenu] = useState(false);
  const [workTasks, setWorkTasks] = useState(workTasksList);
  const [familyTasks, setFamilyTasks] = useState(familyTasksList);
  const [studyTasks, setStudyTasks] = useState(studyTasksList);
  const [entertainmentTasks, setEntertainmentTasks] = useState(entertainmentTasksList);
  const [editedTask , setEditedTask] = useState({});
//   const [editdescription,setEditDescription] = useState("");
//   const [nonEditField , setNonEditField] = useState("");
//   const [editId,setEditId] = useState();

  const newTaskMenuHandler = () => {
    setEditedTask({});
    setAddTaskMenu((p) => !p);
  };

  const DoneClickedHandler = (taskInfo)=>{

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
        return updateObject(prevState,createTask);
      });
    } else if (newTask.family) {
      setFamilyTasks((prevState) => {
        createTask.field = "family";
        return updateObject(prevState,createTask);
      });
    } else if (newTask.study) {
      setStudyTasks((prevState) => {
        createTask.field = "study";
        return updateObject(prevState,createTask);
      });
    } else {
      setEntertainmentTasks((prevState) => {
        createTask.field = "entertainment";
        return updateObject(prevState,createTask);
      });
    }
  };

  const updateObject = function(prevState,createTask){
    for(let i =0;i<prevState.length;i++){
        if(prevState[i].id === createTask.id)
        {
            prevState[i].title = createTask.title;
            prevState[i].description = createTask.description;
            prevState[i].isDone = createTask.isDone;
            return prevState;
        }
    }
    return [createTask,...prevState];
  }

  const editHandler = (taskInfo)=>{

    let editedTask = [];
    if (taskInfo.field === 'work') {
        editedTask = workTasks.filter((item)=>{
           return item.id === taskInfo.id
       })
       
    } else if (taskInfo.field === 'family') {
         editedTask = familyTasks.filter((item)=>{
            return item.id === taskInfo.id
        })
    } else if (taskInfo.field === 'study') {
     editedTask = studyTasks.filter((item)=>{
            return item.id === taskInfo.id
        })
    } else{
         editedTask = entertainmentTasks.filter((item)=>{
            return item.id === taskInfo.id
        })
    }

    const taskdata = {
        title : editedTask[0].title,
        description : editedTask[0].description,
        work:editedTask[0].field==="work" ? true : false,
        family:editedTask[0].field==="family" ? true : false,
        entertainment:editedTask[0].field==="entertainment" ? true : false,
        study:editedTask[0].field==="study" ? true : false,
        id:taskInfo.id
    }
    setAddTaskMenu((p) => !p);
    setEditedTask(taskdata);
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
            <NavLink exact="true" to="/">
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
          <Route path="/" element={<WorkTasks editHandler={editHandler} deleteHandler={deleteHandler} isDoneClicked={DoneClickedHandler} workTasks={workTasks} />} />
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
          editedTask = {editedTask}
          onNewTaskAdded={newTaskAddedHandler}
          closeTaskTab={newTaskMenuHandler}
        />
      )}
    </div>
  );
};

export default Todo;
