function addParagraph(text) {

    const para = document.createElement("p");
    para.textContent = text; 
    const body = document.querySelector("body");
    const bodyHTML = body.innerHTML;
    const newHTML = bodyHTML + para.outerHTML;
    body.innerHTML = newHTML;

  }
addParagraph("my name is syed murtaza ali")