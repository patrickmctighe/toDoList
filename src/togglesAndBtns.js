//toggles task form
function taskBtnToggle() {
  const addTaskBtnToggle = document.querySelector(".addTask");
  let form = document.getElementById("form");
  addTaskBtnToggle.addEventListener("click", function () {
    if (form.style.display === "none") {
      form.style.display = "flex";
    } else {
      form.style.display = "none";
    }
  });
}
//toggles list of projects
function projBtnToggle() {
  const projBtn = document.querySelector(".projectBtn");
  let projCont = document.querySelector(".projCont");
  projBtn.addEventListener("click", function () {
    if (projCont.style.display === "none") {
      projCont.style.display = "flex";
    } else {
      projCont.style.display = "none";
    }
  });
}
// toggles the form to make new projects
function projFormToggle() {
  const addProj = document.querySelector(".addProject");
  let form = document.querySelector(".projectForm");
  addProj.addEventListener("click", function () {
    if (form.style.display === "none") {
      form.style.display = "flex";
    } else {
      form.style.display = "none";
    }
  });
}
//hides the task form after submit
function addBtn() {
  let addBtn = document.querySelector(".add");
  let form = document.getElementById("form");
  addBtn.addEventListener("click", function () {
    form.style.display = "none";
  });
}

//hides project form after submit
function projFormSubmitBtn() {
  let addBtn = document.querySelector(".submit");
  let form = document.querySelector(".projectForm");
  addBtn.addEventListener("click", function () {
    form.style.display = "none";
  });
}

function projAll() {
  let allBtn = document.querySelector(".all");
  let posts = document.querySelector(".posts");
  let allFolder = document.createElement("div");
  allFolder.style.display = "none";
  allFolder.innerText = "All";
  allFolder.setAttribute("class", "allFolder");
  allFolder.setAttribute("id","projTab")
  posts.appendChild(allFolder);
  allBtn.addEventListener("click", function selectAll() {
    
    if (allFolder.style.display === "none") {
      allFolder.style.display = "flex";
    } else {
      allFolder.style.display = "none";
    }
  });
}

// let projectContainer = document.querySelector(".posts");
// projectContainer.addEventListener("click", function(e) {
//   openSelected(e);
// });

// function openSelected(e) {
//   if (!e || !e.target) {
//     return;
//   }

//   // Get the target project div that was clicked
//   let targetProject = e.target.closest(".project");

//   // Return early if the click didn't happen on a project div
//   if (!targetProject) {
//     return;
//   }

//   // Hide all project divs except for the target one
//   let allProjects = document.querySelectorAll(".project");
//   allProjects.forEach(project => {
//     if (project === targetProject) {
//       project.style.display = "block";
//     } else {
//       project.style.display = "none";
//     }
//   });
// }

// function displayElement() {
//   // Get the parent div
//   const parentDiv = document.querySelector(".posts")

//   // Get all child elements of the parent div
//   const childElements = parentDiv.children;

//   // Loop through the child elements
//   for (let i = 0; i < childElements.length; i++) {
//     const childElement = childElements[i];

//     // If the child element is the one to be displayed, display it
//     if (childElement) {
//       childElement.style.display = "block";
//     } 
//     // Otherwise, hide it
//     else {
//       childElement.style.display = "none";
//     }
//   }
// }

export {
  // displayElement,
  // openSelected,
  taskBtnToggle,
  addBtn,
  projBtnToggle,
  projFormToggle,
  projFormSubmitBtn,
  projAll,
};
