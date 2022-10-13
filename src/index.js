document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    createToDo(e.target.querySelector("#new-task-description").value);
    form.reset();
  });

  function createToDo(todo) {

  if (todo.length > 0) {
    const list = document.querySelector("#list");
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.addEventListener("click", deleteToDo);
    btn.innerText = "X";
    li.textContent = `${todo}  `;
    if (document.querySelector("#prioritySelect").value === 'h') {
      li.className = 'high'
      if (!document.querySelector(".medium")){

        if (!document.querySelector(".low")) {
        list.append(li);
        li.appendChild(btn);
        }
        else {
          list.insertBefore(li, document.querySelector(".low"))
          li.appendChild(btn);
        }
      }
      else {
        list.insertBefore(li, document.querySelector(".medium"))
        li.appendChild(btn);
      }
    }
    if (document.querySelector("#prioritySelect").value === 'm') {
      li.className = 'medium'
      if (!document.querySelector(".low")) {
        list.append(li);
        li.appendChild(btn);
      }
      else {
        list.insertBefore(li, document.querySelector(".low"))
        li.appendChild(btn);
      }
    }
    if (document.querySelector("#prioritySelect").value === 'l') {
      li.className = 'low'
      list.append(li);
      li.appendChild(btn);
    }
    
    
    
  }
  }

  function deleteToDo(e) {
    e.target.parentNode.remove();
  }







});
