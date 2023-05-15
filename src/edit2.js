function makeEdit2() {
    let editBtn2 = document.querySelector(".edit2");
    editBtn2.addEventListener("click", () => {
      
      
      let editForm2 = document.querySelector(".editForm");
      let date2 = document.querySelector(".c32");
      
  
      // create the edit form if it does not exist
      editForm2 = document.createElement("form2");
      editForm2.setAttribute("class", "editForm2");
  
      let labelDescription2 = document.createElement("label");
      labelDescription2.innerText = "Description:";
      let inputDescription2 = document.createElement("input");
      inputDescription2.setAttribute("class", "inputDescription2");
  
      let labelDate2= document.createElement("label");
      labelDate2.innerText = "Date:";
      let inputDate2 = document.createElement("input");
      inputDate2.type = "date";
      inputDate2.value = date2.innerText.replace("Due Date: ", "");
      inputDate2.setAttribute("class", "inputDate2");
  
      let labelPriority2 = document.createElement("label");
      labelPriority2.innerText = "Priority:";
      let inputPriority2 = document.createElement("select");
      inputPriority2.setAttribute("class", "inputPriority2");
  
      const option12 = document.createElement("option");
      option12.value = "Low";
      option12.text = "Low";
  
      const option22 = document.createElement("option");
      option22.value = "Medium";
      option22.text = "Medium";
  
      const option32 = document.createElement("option");
      option32.value = "High";
      option32.text = "High";
  
      inputPriority2.add(option12);
      inputPriority2.add(option22);
      inputPriority2.add(option32);
      
  
      editForm2.style.display = "flex";
      editForm2.append(labelDescription2, labelDate2, labelPriority2);
      labelDescription2.appendChild(inputDescription2);
      labelDate2.appendChild(inputDate2);
      labelPriority2.appendChild(inputPriority2);
      card2.appendChild(editForm2);
  
      edit2.style.display = "none";
      save2.style.display = "flex";
    });
  }
  
  function saveEdit2() {
    let saveBtn2 = document.querySelector(".save");
    saveBtn2.addEventListener("click", () => {
      let edit2 = document.querySelector(".edit2");
      let editForm2 = document.querySelector(".editForm2");
      let cardBtn2 = document.querySelector(".cardBtn2");
      let description2 = document.querySelector(".c22");
      let date2 = document.querySelector(".c32");
      let priority2 = document.querySelector(".c42");
      let inputDescription2 = document.querySelector(".inputDescription2");
      let inputDate2 = document.querySelector(".inputDate2");
      let inputPriority2 = document.querySelector(".inputPriority2");
      description2.innerHTML = "Description: " + inputDescription2.value;
      date2.innerHTML = "Due Date: " + inputDate2.value;
      priority2.innerHTML = "Priority: " + inputPriority2.value;
  
      if (inputPriority2.value == "Low") {
        cardBtn2.style.backgroundColor = "green";
      } else if (inputPriority2.value == "Medium") {
        cardBtn2.style.backgroundColor = "yellow";
      } else {
        cardBtn2.style.backgroundColor = "red";
      }
  
      editForm2.remove();
      edit2.style.display = "flex";
      saveBtn2.style.display = "none";
    });
  }
  
  export { makeEdit2, saveEdit2 };
  