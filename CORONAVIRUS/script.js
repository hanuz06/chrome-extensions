replaceText(document.body);

function replaceText(element) {
  if (element.hasChildNodes()) {
    element.childNodes.forEach(replaceText);
  } else if (element.nodeType === Text.TEXT_NODE) {
    if (element.textContent.match(/coronavirus/gi)) {
      // element.parentElement.style.color = "lightGreen";
      // element.parentElement.style.backgroundColor = "lightGreen";

      // const newElement = document.createElement("span");
      // newElement.innerHTML = element.textContent.replace(
      //   /(coronavirus)/gi,
      //   '<span style="background-color: pink; color: pink;">$1</span>'
      // );
      // element.replaceWith(newElement);

      const newElement = document.createElement("span");
      newElement.innerHTML = element.textContent.replace(
        /(coronavirus)/gi,
        '<span class="rainbow">$1</span>'
      );
      element.replaceWith(newElement);

    
    }
    // element.textContent = element.textContent.replace(/coronavirus/gi, "*****");
  }
}
