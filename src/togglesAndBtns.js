
function taskBtnToggle(){
const addTaskBtnToggle = document.querySelector(".addTask")
let form = document.getElementById("form");
addTaskBtnToggle.addEventListener("click", function(){
    if (form.style.display === 'none') {
        form.style.display = 'block';
      } else {
        form.style.display = 'none';
      }
})}

function projBtnToggle(){
    const projBtn = document.querySelector(".projectBtn")
let projCont = document.querySelector(".projCont");
projBtn.addEventListener("click", function(){
    if (projCont.style.display === 'none') {
        projCont.style.display = 'block';
      } else {
        projCont.style.display = 'none';
      }
    })}

    function projFormToggle(){
      const addProj = document.querySelector(".addProject")
  let form = document.querySelector(".projectForm");
  addProj.addEventListener("click", function(){
      if (form.style.display === 'none') {
          form.style.display = 'block';
        } else {
          form.style.display = 'none';
        }
      })}

function addBtn(){
    let addBtn = document.querySelector(".add")
    let form = document.getElementById("form")
    addBtn.addEventListener("click",function(){
        form.style.display = 'none';
    })
}


function projFormSubmitBtn(){
  let addBtn = document.querySelector(".submit")
  let form = document.querySelector(".projectForm")
  addBtn.addEventListener("click",function(){
      form.style.display = 'none';
  })
}

export{taskBtnToggle,addBtn,projBtnToggle,projFormToggle,projFormSubmitBtn}