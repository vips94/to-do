import React,{useState} from "react";
import classes from "./AddTask.module.scss";
import { v4 as uuidv4 } from 'uuid';


const AddTask = (props) => {
  const [enteredTitle,setEnteredTitle] = useState("");
  const [enteredDescription,setEnteredDescription] = useState("");
  const [isWorkSelected,setIsWorkSelected] = useState(false);
  const [isFamilySelected,setIsFamilySelected] = useState(false);
  const [isStudySelected,setIsStudySelected] = useState(false);
  const [isEntertainmentSelected,setIsEntertainmentSelected] = useState(false);
//   const [adding ,setAdding] = useState(true);
  
  const titleHandler = (event)=>{
    setEnteredTitle(event.target.value);
  }

  const descriptionHandler =(event)=>{
    setEnteredDescription(event.target.value);
  }

  const workToggleHandler = ()=>{
    setIsWorkSelected((p)=>!p);
  }

  const studyToggleHandler = ()=>{
    setIsStudySelected((p)=>!p);
  }

  const familyToggleHandler = ()=>{
    setIsFamilySelected((p)=>!p);
  }

  const entertainmentToggleHandler = ()=>{
    setIsEntertainmentSelected((p)=>!p);
  }

  const submitHandler = (event)=>{
    event.preventDefault();

    const newTaskData = {
        title : enteredTitle,
        description : enteredDescription,
        work:isWorkSelected,
        family:isFamilySelected,
        entertainment:isEntertainmentSelected,
        study:isStudySelected,
        id:uuidv4()
    }
    console.log(newTaskData);
    props.onNewTaskAdded(newTaskData);

    setEnteredTitle('');
    setEnteredDescription('');
    if(isWorkSelected)
        workToggleHandler();

    if(isFamilySelected)
        familyToggleHandler();

    if(isEntertainmentSelected)
        entertainmentToggleHandler();

    if(isStudySelected)
        studyToggleHandler();

    setIsWorkSelected(false);
    setIsFamilySelected(false);
    setIsEntertainmentSelected(false);
    setIsStudySelected(false);

    props.closeTaskTab();
  }

  return (
    <form className={classes.addTask} onClick={props.closeTaskTab} onSubmit={submitHandler}>
      <div className={classes.addTask__card} onClick={(event) => event.stopPropagation()}>
        <div className={classes.addTask__card__header}>
          <button className={classes.addTask__card__header__cancel} type="button" onClick={props.closeTaskTab}>
            Cancel
          </button>
          <button className={classes.addTask__card__header__add} type="submit">Add</button>
        </div>
        <div className={classes.addTask__card__form}>
          <div className={classes.addTask__card__form__inputField}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="add a title..."
              value={enteredTitle}
              onChange={titleHandler}
            ></input>
          </div>
          <div className={classes.addTask__card__form__inputField}>
            <label htmlFor="description">Description</label>
            <textarea
              type="textarea"
              name="description"
              id="description"
              placeholder="add a description..."
              value={enteredDescription}
              onChange={descriptionHandler}
            ></textarea>
          </div>
          <div className={classes.addTask__card__form__tags}>
            <label>Tags</label>
            <div className={classes.addTask__card__form__tags__ul}>
                <button type="button" className={classes.addTask__card__form__tags__ul__button} onClick={workToggleHandler}>
                    <span className={classes.addTask__card__form__tags__ul__button__work} />
                    <span>work</span>
                </button>
                <button type="button" className={classes.addTask__card__form__tags__ul__button} onClick={familyToggleHandler}>
                    <span className={classes.addTask__card__form__tags__ul__button__family} />
                    <span>family</span>
                </button>
                <button type="button" className={classes.addTask__card__form__tags__ul__button} onClick={entertainmentToggleHandler}>
                    <span className={classes.addTask__card__form__tags__ul__button__enter} />
                    <span>entertainment</span>
                </button>
                <button type="button" className={classes.addTask__card__form__tags__ul__button} onClick={studyToggleHandler}>
                    <span className={classes.addTask__card__form__tags__ul__button__study} />
                    <span>study</span>
                </button>
            </div>
          </div>
        </div>
        {/* {adding && 
            <div className={classes.addTask__card__adding}>

            </div>
        } */}
      </div>
        
    </form>
    
  );
};

export default AddTask;
