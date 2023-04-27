import "./layout.css";
import { addTasks } from "./addTask";
import {
  taskBtnToggle,
  addBtn,
  projBtnToggle,
  projFormToggle,
  projFormSubmitBtn,
  
} from "./togglesAndBtns";
import { addProj } from "./addProject";

projFormSubmitBtn();
projFormToggle();
addProj();
projBtnToggle();
addBtn();
taskBtnToggle();
addTasks();

