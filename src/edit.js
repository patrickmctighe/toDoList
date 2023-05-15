function saveTask(event) {
    const card = event.target.parentNode;
    const card2 = card.nextElementSibling;
    const id = card.getAttribute("id");
  
    const title = card.querySelector(".c2 input").value;
    const description = card.querySelector(".c4 input").value;
    const date = card.querySelector(".c3 input").value;
    const priority = card.querySelector(".c4 input").value;
    const completed = card.querySelector(".cardCheck").checked;
  
    for (let i = 0; i < myTasks.length; i++) {
      if (myTasks[i].data == id) {
        myTasks[i].title = title;
        myTasks[i].description = description;
        myTasks[i].date = date;
        myTasks[i].priority = priority;
        myTasks[i].completed = completed;
        break;
      }
    }
  
    // Update the card display
    const cardTitle = card.querySelector(".c2");
    cardTitle.removeChild(cardTitle.firstChild);
    cardTitle.appendChild(document.createTextNode(`Title: ${title}`));
  
    const cardDescription = card.querySelector(".c4");
    cardDescription.removeChild(cardDescription.firstChild);
    cardDescription.appendChild(
      document.createTextNode(`Description: ${description}`)
    );
  
    const cardDate = card.querySelector(".c3");
    cardDate.removeChild(cardDate.firstChild);
    cardDate.appendChild(document.createTextNode(`Due Date: ${date}`));
  
    const cardPriority = card.querySelector(".c4");
    cardPriority.removeChild(cardPriority.firstChild);
    cardPriority.appendChild(
      document.createTextNode(`Priority: ${priority}`)
    );
  
    event.target.style.display = "none";
    card.querySelector(".edit").style.display = "inline";
    card2.style.display = "none";
  }
  

export { saveTask };
