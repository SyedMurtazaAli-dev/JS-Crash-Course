function addListItem(text) {
    const li = document.createElement("li");
    li.textContent = text;
    const ul = document.querySelector("ul");
    ul.appendChild(li);
  }
