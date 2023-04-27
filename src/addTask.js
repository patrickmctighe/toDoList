export { addTasks };

function addTasks() {
  let myTasks = [];
  let form = document.getElementById("form");
  let posts = document.getElementById("posts");
  class Task {
    constructor(title, description, date, priority, data) {
      (this.title = title),
        (this.description = description),
        (this.date = date),
        (this.priority = priority),
        (this.data = data);
    }
  }
  form.addEventListener("submit", function addTask(event) {
    const newTask = new Task(
      document.getElementById("title").value,
      document.getElementById("description").value,
      document.getElementById("date").value,
      document.getElementById("priority").value,
      Math.random() * 7
    );
    event.preventDefault();
    myTasks.push(newTask);
    updateArr();
    form.reset();
  });
  function updateArr() {
    posts.innerText = " ";
    myTasks.forEach((res) => {
      let card = document.createElement("div");
      let c0 = document.createElement("div");
      let cardBtn = document.createElement("button");
      let dele = document.createElement("button");
      let posts = document.querySelector(".posts");
      let cardDescription = document.createTextNode(
        "description: " + res.description
      );
      let cardDate = document.createTextNode("date: " + res.date);
      let cardPriority = document.createTextNode("priority: " + res.priority);
      let cardData = document.createTextNode(res.data);
      card.setAttribute("class", "card");
      c0.setAttribute("class", "c0");
      dele.setAttribute("class", "dele");
      c0.appendChild(cardData);
      card.appendChild(cardDescription);
      card.appendChild(cardDate);
      card.appendChild(cardPriority);
      card.appendChild(dele);
      dele.innerHTML = "remove";
      dele.addEventListener("click", (e) => {
        if (e.target) {
          for (let i = 0; i < myTasks.length; i++) {
            if (myTasks[i].data == c0.innerText) {
              myTasks.splice(i);
            }
          }
          posts.removeChild(cardBtn);
          cardBtn.removeChild(card);
        }
      });
      cardBtn.setAttribute("class", "cardBtn");
      cardBtn.innerText = res.title;
      posts.appendChild(cardBtn);
      cardBtn.appendChild(card);
      card.style.display = "none";
      cardBtn.addEventListener("click", function () {
        if (card.style.display === "none") {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  }
}
