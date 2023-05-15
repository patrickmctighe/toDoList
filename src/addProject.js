function addProj() {
  let myProjs = [];
  const form = document.querySelector(".projectForm");

  class Proj {
    constructor(title, data) {
      this.title = title;
      this.data = data;
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newProj = new Proj(
      document.getElementById("projName").value,
      Math.random() * 7
    );
    myProjs.push(newProj);
    updateArr();
    form.reset();
  }

  form.addEventListener("submit", handleSubmit);

  function updateArr() {
    // projs.innerText = "";
    myProjs.forEach((res) => {
      const data = document.createElement("div");
      const title_rem = document.createElement("button");
      const rem = document.createElement("button");
      const proj = document.querySelector(".projCont");
      const posts = document.querySelector(".posts");
      const projPost = document.createElement("div");
      projPost.setAttribute("class", res.title);
      projPost.setAttribute("id","projTab")
      projPost.innerText = res.title;
      projPost.style.display = "block";
      data.setAttribute("class", "data");
      title_rem.setAttribute("class", res.title);
      title_rem.setAttribute("id","project")
      rem.setAttribute("class", "rem");
      data.style.display = "none";
      const projCardData = document.createTextNode(res.data);
      proj.append(data, title_rem);
      data.appendChild(projCardData);
      // title_rem.appendChild(projCardTitle);
      title_rem.innerText = res.title;
      title_rem.appendChild(rem);

      posts.appendChild(projPost);
      rem.innerHTML = "r";
      title_rem.addEventListener("click", function () {
        if (projPost.style.display === "none") {
          
          projPost.style.display = "block";
        } else {
          projPost.style.display = "none";
        }
      });
      rem.addEventListener("click", (e) => {
        if (e.target) {
          for (let i = 0; i < myProjs.length; i++) {
            if (myProjs[i].data == data.innerText) {
              myProjs.splice(i);
            }
          }
          proj.removeChild(data);
          proj.removeChild(title_rem);
          posts.removeChild(projPost);
        }
      });
      myProjs.pop();
    });
  }

  return { updateArr };
}

export { addProj };
