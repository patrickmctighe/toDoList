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
// //hides the task form after submit
// function addBtn() {
//   let addBtn = document.querySelector(".add");
//   let form = document.getElementById("form");

//   addBtn.addEventListener("click", function () {
//     form.style.display = "none";
//     console.log("hello")
//   });
// }

// //hides project form after submit
// function projFormSubmitBtn() {
//   let addBtn = document.querySelector(".submit");
//   let form = document.querySelector(".projectForm");
//   let projName = document.querySelector("#projName")
//   addBtn.addEventListener("click", function () {
//     if (projName.innerText !== "")
//     form.style.display = "none";
//     console.log("hi")
//   });
// }
function oneOpen(){
  let posts = document.querySelectorAll("#projTab")
  
  for(let i = 0 ; i<posts.length; i ++){
    if(posts[i].style.display === "flex"){
  posts[i].style.display = "none"
}
  }

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
      oneOpen()
      allFolder.style.display = "flex";
    } else {
      allFolder.style.display = "none";
    }
  });
}



export {
 oneOpen,
  taskBtnToggle,
  // addBtn,
  projBtnToggle,
  projFormToggle,
  // projFormSubmitBtn,
  projAll,
};
