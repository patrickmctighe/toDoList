import "./layout.css";
import { addTasks } from "./addTask";
import {
  taskBtnToggle,
  addBtn,
  projBtnToggle,
  projFormToggle,
  projFormSubmitBtn,
  projAll,
  // openSelected,
  // displayElement
} from "./togglesAndBtns";
import { addProj } from "./addProject";

// import { openProj } from "./projects";
// displayElement()
// openSelected()
// openProj()

projAll();
projFormSubmitBtn();
projFormToggle();
addProj();
projBtnToggle();
addBtn();
taskBtnToggle();
addTasks();

document.addEventListener('keydown', function(e) {
  if (e.keyCode === 32) {
    e.preventDefault();
    var element = document.activeElement;
    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA' || element.isContentEditable) {
      var selectionStart = element.selectionStart;
      var selectionEnd = element.selectionEnd;
      var value = element.value;
      var newValue = value.substring(0, selectionStart) + ' ' + value.substring(selectionEnd);
      element.value = newValue;
      element.setSelectionRange(selectionStart + 1, selectionStart + 1);
    }
  }
});