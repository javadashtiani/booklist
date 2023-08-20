
let addBtn = document.querySelector(".add");
let title = document.querySelector("#title");
let author = document.querySelector("#author");
let year = document.querySelector("#year");
let resultTitle = document.querySelector(".result-box-title");
let resultAuthor = document.querySelector(".result-box-author");
let resultYear = document.querySelector(".result-box-year");
let alertBox = document.querySelector(".alert-box");
let closeAlertBtn = document.querySelector(".close-alert");
addBtn.addEventListener("click", () => {
  if (title.value == "" || author.value == "" || year.value == "") {
    alertBox.style.display = "block";
  } else {
    let newTitle = document.createElement("h3");
    let newAuthor = document.createElement("h3");
    let newYear = document.createElement("h3");
    newTitle.innerHTML += title.value;
    newAuthor.innerHTML += author.value;
    newYear.innerHTML += year.value;
    resultTitle.appendChild(newTitle);
    resultAuthor.appendChild(newAuthor);
    resultYear.appendChild(newYear);
  }
  title.value = "";
  author.value = "";
  year.value = "";
  title.focus()
});
closeAlertBtn.addEventListener("click", () => {
  alertBox.style.display = "none";
});
