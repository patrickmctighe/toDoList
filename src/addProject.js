function addProj() {
  let myProjs = [];
  let form = document.querySelector(".projectForm");
  let projs = document.querySelector(".projCont");

  class Proj {
    constructor(title, data) {
      this.title = title;
      this.data = data;
    }
  }
  form.addEventListener("submit", function addProj(event) {
    const newProj = new Proj(
      document.getElementById("projName").value,
      Math.random() * 7
    );
    event.preventDefault();
    myProjs.push(newProj);
    updateArr();
    form.reset();
  });

  function updateArr() {
    projs.innerText = " ";
    myProjs.forEach((res) => {
      let projCard = document.createElement("div");
      let data = document.createElement("div");
      let title_rem = document.createElement("button");
      let rem = document.createElement("button");
      let proj = document.querySelector(".projCont");
      projCard.setAttribute("class", res.title);
      data.setAttribute("class", "data");
      title_rem.setAttribute("class", "title_rem");
      rem.setAttribute("class", "rem");
      data.style.display = "none";
      let projCardData = document.createTextNode(res.data);
      let projCardTitle = document.createTextNode(res.title);
      projCard.append(data, title_rem);
      data.appendChild(projCardData);
      title_rem.appendChild(projCardTitle);
      title_rem.appendChild(rem);
      proj.appendChild(projCard);
      rem.innerHTML = "r";
      rem.addEventListener("click", (e) => {
        if (e.target) {
          for (let i = 0; i < myProjs.length; i++) {
            if (myProjs[i].data == data.innerText) {
              myProjs.splice(i);
            }
          }
          proj.removeChild(projCard);
        }
      });
    });
  }
}

export { addProj };
