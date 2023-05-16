export { addTasks };

function addTasks() {
  let myTasks = [];
  let form = document.getElementById("form");
  let allFolder = document.querySelector(".allFolder");
  class Task {
    constructor(title, description, date, priority, data) {
      (this.title = title),
        (this.description = description),
        (this.date = date),
        (this.priority = priority),
        // (this.completed= completed),
        (this.data = data);
    }
  }
  form.addEventListener("submit", function addTask(event) {
    const newTask = new Task(
      document.getElementById("title").value,
      document.getElementById("description").value,
      document.getElementById("date").value,
      document.getElementById("priority").value,
      // document.getElementById("check").value,
      Math.random() * 7
    );
    event.preventDefault();
    myTasks.push(newTask);
    updateArr();
    form.reset();
  });
  function updateArr() {
    // posts.innerText = " ";

    myTasks.forEach((res) => {
      let card = document.createElement("div");
      let card2 = document.createElement("div");
      let c0 = document.createElement("div");
      let c02 = document.createElement("div");
      let c1 = document.createElement("div");
      let c12 = document.createElement("div");
      let c2 = document.createElement("div");
      let c22 = document.createElement("div");
      let c3 = document.createElement("div");
      let c32 = document.createElement("div");
      let c4 = document.createElement("div");
      let c42 = document.createElement("div");
      let edit = document.createElement("button");
      let edit2 = document.createElement("button");
      let save = document.createElement("button");
      let save2 = document.createElement("button");
      let cardBtn = document.createElement("button");
      let cardBtn2 = document.createElement("button");
      let dele = document.createElement("button");
      let dele2 = document.createElement("button");
      let posts = document.querySelector(".posts");
let dls = document.createElement("div")
let dls2 = document.createElement("div")
      let cardDescription = document.createTextNode(
        "Description: " + res.description
      );
      let cardDescription2 = document.createTextNode(
        "Description: " + res.description
      );
      let cardTitle = document.createTextNode(res.title);
      let cardTitle2 = document.createTextNode(res.title);
      let cardDate = document.createTextNode("Due Date: " + res.date);
      let cardDate2 = document.createTextNode("Due Date: " + res.date);
      let cardPriority = document.createTextNode("Priority: " + res.priority);
      let cardPriority2 = document.createTextNode("Priority: " + res.priority);
      let cardCompleted = document.createTextNode("Completed: ");
      let cardCompleted2 = document.createTextNode("Completed: ");
      let cardCheck = document.createElement("input");
      let cardCheck2 = document.createElement("input");
      cardCheck.type = "checkbox";
      cardCheck2.type = "checkbox";
      cardCheck.setAttribute("class", "cardCheck");
      cardCheck2.setAttribute("class", "cardCheck2");
      let cardData = document.createTextNode(res.data);
      let cardData2 = document.createTextNode(res.data);
      card.setAttribute("class", "card");
      card.setAttribute("id", res.title);
      card2.setAttribute("class", "card2");
      card2.setAttribute("id", res.title);
      c0.setAttribute("class", "c0");
      c02.setAttribute("class", "c02");
      c1.setAttribute("class", "c1");
      c12.setAttribute("class", "c12");
      c2.setAttribute("class", "c2");
      c22.setAttribute("class", "c22");
      c3.setAttribute("class", "c3");
      c32.setAttribute("class", "c32");
      c4.setAttribute("class", "c4");
      c42.setAttribute("class", "c42");
      dele.setAttribute("class", "dele");
      dele2.setAttribute("class", "dele2");
      edit.setAttribute("class", "edit");
      edit2.setAttribute("class", "edit2");
      save.setAttribute("class", "save");
      save2.setAttribute("class", "save2");
      dls.setAttribute("class","dls")
      dls2.setAttribute("class","dls2")
      c0.appendChild(cardData);
      c02.appendChild(cardData2);
      c2.appendChild(cardDescription);
      c22.appendChild(cardDescription2);
      c3.appendChild(cardDate);
      c32.appendChild(cardDate2);
      c4.appendChild(cardPriority);
      c42.appendChild(cardPriority2);
      card.appendChild(c2);
      card2.appendChild(c22);
      card.appendChild(c3);
      card2.appendChild(c32);
      card.appendChild(c4);
      card2.appendChild(c42);
      c1.append(cardCompleted, cardCheck);
      c12.append(cardCompleted2, cardCheck2);
     dls.append(save,edit,dele)
     dls2.append(save2,edit2,dele2)
      card.appendChild(dls);
      card2.appendChild(dls2);
      dele.innerHTML = `<span class="material-symbols-outlined">
      delete
      </span>`;
      dele2.innerHTML = `<span class="material-symbols-outlined">
      delete
      </span>`;
      edit.innerHTML = `<span class="material-symbols-outlined">
      edit
      </span>`;
      edit2.innerHTML = `<span class="material-symbols-outlined">
      edit
      </span>`
      save.innerHTML = `<span class="material-symbols-outlined">
      save
      </span>`;
      save2.innerHTML = `<span class="material-symbols-outlined">
      save
      </span>`;

      dele.addEventListener("click", (e) => {
        if (e.target) {
          for (let i = 0; i < myTasks.length; i++) {
            if (myTasks[i].data == c0.innerText) {
              myTasks.splice(i, 1); // remove the corresponding task from myTasks array
              break;
            }
          }
          card.remove();
          cardBtn.remove();
          card2.remove();
          cardBtn2.remove();
        }
      });
      dele2.addEventListener("click", (e) => {
        if (e.target) {
          for (let i = 0; i < myTasks.length; i++) {
            if (myTasks[i].data == c02.innerText) {
              myTasks.splice(i, 1); // remove the corresponding task from myTasks array
              break;
            }
          }

          card.remove();
          cardBtn.remove();
          card2.remove();
          cardBtn2.remove();
        }
      });

      cardBtn.setAttribute("class", "cardBtn");
      cardBtn.setAttribute("id", "cardBtnId");
      cardBtn2.setAttribute("class", "cardBtn2");
      cardBtn2.setAttribute("id", "cardBtnId");
      cardBtn.append(cardTitle);
      cardBtn2.append(cardTitle2);
      let displayedCard = null;

      posts.childNodes.forEach((child) => {
        if (child.style.display === "flex") {
          displayedCard = child;
        }
      });

      if (displayedCard && displayedCard !== allFolder) {
        displayedCard.append(cardBtn);
        allFolder.append(cardBtn2);
      } else {
        allFolder.append(cardBtn2);
      }

      cardBtn.appendChild(card);
      cardBtn2.appendChild(card2);
      card.style.display = "none";
      card2.style.display = "none";
      cardBtn.addEventListener("click", function (e) {
        if (card.style.display === "none" && e.target == cardBtn) {
          card.style.display = "flex";
        } else if (card.style.display === "flex" && e.target == cardBtn) {
          card.style.display = "none";
        }
      });

      cardBtn2.addEventListener("click", function (e) {
        if (card2.style.display === "none" && e.target == cardBtn2) {
          card2.style.display = "flex";
        } else if (card2.style.display === "flex" && e.target == cardBtn2) {
          card2.style.display = "none";
        }
      });
      if (res.priority == "Low") {
        cardBtn2.style.backgroundColor = "#bbded6";
        cardBtn.style.backgroundColor = "#bbded6";
      } else if (res.priority == "Medium") {
        cardBtn2.style.backgroundColor = "#fae3d9";
        cardBtn.style.backgroundColor = "#fae3d9";
      } else {
        cardBtn2.style.backgroundColor = "#ffb6b9";
        cardBtn.style.backgroundColor = "#ffb6b9";
      }

      let editForm = document.createElement("form");
      let editForm2 = document.createElement("form");
      editForm.setAttribute("class", "editForm");
      editForm2.setAttribute("class", "editForm2");
      let labelDescription = document.createElement("label");
      labelDescription.innerText = "Description: ";
      let labelDescription2 = document.createElement("label");
      labelDescription2.innerText = "Description: ";
      let inputDescription = document.createElement("input");
      inputDescription.setAttribute("class", "inputDescription");
      let inputDescription2 = document.createElement("input");
      inputDescription2.setAttribute("class", "inputDescription");
      let labelDate = document.createElement("label");
      labelDate.innerText = "Date: ";
      let labelDate2 = document.createElement("label");
      labelDate2.innerText = "Date: ";

      let inputDate = document.createElement("input");
      inputDate.type = "date";

      let inputDate2 = document.createElement("input");
      inputDate2.type = "date";

      inputDate.setAttribute("class", "inputDate");
      inputDate2.setAttribute("class", "inputDate2");

      let labelPriority = document.createElement("label");
      labelPriority.innerText = "Priority: ";
      let labelPriority2 = document.createElement("label");
      labelPriority2.innerText = "Priority: ";
      let inputPriority = document.createElement("select");
      inputPriority.setAttribute("class", "inputPriority");
      let inputPriority2 = document.createElement("select");
      inputPriority2.setAttribute("class", "inputPriority");

      const option1 = document.createElement("option");
      option1.value = "Low";
      option1.text = "Low";

      const option2 = document.createElement("option");
      option2.value = "Medium";
      option2.text = "Medium";

      const option3 = document.createElement("option");
      option3.value = "High";
      option3.text = "High";

      const option12 = document.createElement("option");
      option12.value = "Low";
      option12.text = "Low";

      const option22 = document.createElement("option");
      option22.value = "Medium";
      option22.text = "Medium";

      const option32 = document.createElement("option");
      option32.value = "High";
      option32.text = "High";

      inputPriority.add(option1);
      inputPriority.add(option2);
      inputPriority.add(option3);

      inputPriority2.add(option12);
      inputPriority2.add(option22);
      inputPriority2.add(option32);

      editForm.style.display = "none";
      editForm2.style.display = "none";
      editForm.append(labelDescription, labelDate, labelPriority);
      editForm2.append(labelDescription2, labelDate2, labelPriority2);
      labelDescription.appendChild(inputDescription);
      labelDescription2.appendChild(inputDescription2);
      labelDate.appendChild(inputDate);
      labelDate2.appendChild(inputDate2);
      labelPriority.appendChild(inputPriority);
      labelPriority2.appendChild(inputPriority2);
      card.appendChild(editForm);
      card2.appendChild(editForm2);

      edit.addEventListener("click", () => {
        editForm.style.display = "flex";
        edit.style.display = "none";
        save.style.display = "flex";
      });
      edit2.addEventListener("click", () => {
        editForm2.style.display = "flex";
        edit2.style.display = "none";
        save2.style.display = "flex";
      });
      //correct
      save.addEventListener("click", function saveTask(e) {
        let good = e.target.parentNode;
        let goodC = good.parentNode
        let goodCard = goodC.parentNode;
        let goodCardId = goodCard.id;

        let goodCard2 = document.getElementById(goodCardId);
        let card2 = goodCard2;
        let description = goodCard.querySelector(".c2");
        let date = goodCard.querySelector(".c3");
        let priority = goodCard.querySelector(".c4");
        let description2 = card2.querySelector(".c22");
        let date2 = card2.querySelector(".c32");
        let priority2 = card2.querySelector(".c42");

        if (goodCard.id == card2.id) {
          description2.innerHTML = "Description: " + inputDescription.value;
          date2.innerHTML = "Due Date: " + inputDate.value;
          priority2.innerHTML = "Priority: " + inputPriority.value;

          if (inputPriority.value == "Low") {
            cardBtn2.style.backgroundColor = "#bbded6";
          } else if (inputPriority.value == "Medium") {
            cardBtn2.style.backgroundColor = "#fae3d9;";
          } else {
            cardBtn2.style.backgroundColor = "#ffb6b9";
          }
        } else {
          console.log(card2, goodCard);
        }

        description.innerHTML = "Description: " + inputDescription.value;
        date.innerHTML = "Due Date: " + inputDate.value;
        priority.innerHTML = "Priority: " + inputPriority.value;

        if (inputPriority.value == "Low") {
          cardBtn.style.backgroundColor = "#bbded6";
        } else if (inputPriority.value == "Medium") {
          cardBtn.style.backgroundColor = "#fae3d9";
        } else {
          cardBtn.style.backgroundColor = "#ffb6b9";
        }

        editForm.style.display = "none";
        edit.style.display = "flex";
        save.style.display = "none";
      });

      save2.addEventListener("click", function saveTask2(e) {
        let good2 = e.target.parentNode;
        let goodC2 = good2.parentNode
        let goodCard2 = goodC2.parentNode
        let goodCardId2 = goodCard2.id;
        console.log(goodCardId2,goodCard2)
        let card = document.querySelector("#" + goodCardId2 + ".card");
        
        let description2 = goodCard2.querySelector(".c22");
        let date2 = goodCard2.querySelector(".c32");
        let priority2 = goodCard2.querySelector(".c42");
        
        if(card){
        if (goodCard2.id == card.id) {
let description = card.querySelector(".c2");
        let date = card.querySelector(".c3");
        let priority = card.querySelector(".c4");
          description.innerHTML = "Description: " + inputDescription2.value;
          date.innerHTML = "Due Date: " + inputDate2.value;
          priority.innerHTML = "Priority: " + inputPriority2.value;

          if (inputPriority2.value == "Low") {
            cardBtn.style.backgroundColor = "#bbded6";
          } else if (inputPriority2.value == "Medium") {
            cardBtn.style.backgroundColor = "#fae3d9";
          } else {
            cardBtn.style.backgroundColor = "#ffb6b9";
          }
        } }

        description2.innerHTML = "Description: " + inputDescription2.value;
        date2.innerHTML = "Due Date: " + inputDate2.value;
        priority2.innerHTML = "Priority: " + inputPriority2.value;

        if (inputPriority2.value == "Low") {
          cardBtn2.style.backgroundColor = "#bbded6";
        } else if (inputPriority2.value == "Medium") {
          cardBtn2.style.backgroundColor = "#fae3d9";
        } else {
          cardBtn2.style.backgroundColor = "#ffb6b9";
        }

        editForm2.style.display = "none";
        edit2.style.display = "flex";
        save2.style.display = "none";
      });

      myTasks.pop();
    });
  }
}
