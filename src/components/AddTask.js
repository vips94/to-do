import React from "react";
import classes from "./AddTask.module.scss";

const AddTask = (props) => {
  return (
    <div className={classes.addTask} onClick={props.closeTaskTab}>
      <div className={classes.addTask__card} onClick={(event) => event.stopPropagation()}>
        <div className={classes.addTask__card__header}>
          <button className={classes.addTask__card__header__cancel} type="button" onClick={props.closeTaskTab}>
            Cancel
          </button>
          <button className={classes.addTask__card__header__add}>Add</button>
        </div>
        <form className={classes.addTask__card__form}>
          <div className={classes.addTask__card__form__inputField}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="add a title..."
            ></input>
          </div>
          <div className={classes.addTask__card__form__inputField}>
            <label htmlFor="description">Description</label>
            <textarea
              type="textarea"
              name="description"
              id="description"
              placeholder="add a description..."
            ></textarea>
          </div>
          <div className={classes.addTask__card__form__tags}>
            <label>Tags</label>
            <div className={classes.addTask__card__form__tags__ul}>
                <button type="button" className={classes.addTask__card__form__tags__ul__button}>
                    <span className={classes.addTask__card__form__tags__ul__button__work} />
                    <span>work</span>
                </button>
                <button type="button" className={classes.addTask__card__form__tags__ul__button}>
                    <span className={classes.addTask__card__form__tags__ul__button__family} />
                    <span>family</span>
                </button>
                <button type="button" className={classes.addTask__card__form__tags__ul__button}>
                    <span className={classes.addTask__card__form__tags__ul__button__enter} />
                    <span>entertainment</span>
                </button>
                <button type="button" className={classes.addTask__card__form__tags__ul__button}>
                    <span className={classes.addTask__card__form__tags__ul__button__study} />
                    <span>study</span>
                </button>
            </div>
            
            {/* <ul>
              <li>
                <span className={classes.addTask__card__form__tags__work} />
                <span>work</span>
              </li>
              <li>
                <span className={classes.addTask__card__form__tags__study} />
                <span>study</span>
              </li>
              <li>
                <span className={classes.addTask__card__form__tags__enter} />
                <span>entertainment</span>
              </li>
              <li>
                <span className={classes.addTask__card__form__tags__family} />
                <span>family</span>
              </li>
            </ul> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
