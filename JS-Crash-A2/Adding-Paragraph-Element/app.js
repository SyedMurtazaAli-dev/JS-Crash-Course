function addParagraph(text) {

    const para = document.createElement("p");
    para.textContent = text; 
    const body = document.querySelector("body");
    const oldHTML = body.innerHTML;
    const newHTML = oldHTML + para.outerHTML;
    body.innerHTML = newHTML;

  }
addParagraph("hi my name is syed murtaza ali")