import { combineReducers } from "@reduxjs/toolkit";
import statusFilters from "./constants";

const tasksInitialState = [
  { id: 0, text: "Learn HTML and CSS", completed: true },
  { id: 1, text: "Get good at JavaScript", completed: true },
  { id: 2, text: "Master React", completed: false },
  { id: 3, text: "Discover Redux", completed: false },
  { id: 4, text: "Build amazing apps", completed: false },
];

const taskReducer = (state = tasksInitialState, action) => {
  switch (action.type) {
    case "task/addTask":
      return [...state, action.payload];
    case "task/deleteTask":
      return state.filter((task) => task.id !== action.payload);
    case "task/toggleCompleted":
      return state.map((task) => {
        if (task.id !== action.payload) {
          return task;
        }
        return { ...task, completed: !task.completed };
      });

    default:
      return state;
  }
};

export const rootReducer = (state = tasksInitialState, action) => {
  return state;
};
