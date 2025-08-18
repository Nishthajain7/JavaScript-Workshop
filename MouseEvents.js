// 1. Select by ID
let title = document.getElementById("title");
let changeColorBtn = document.getElementById("titleColorBtn");

changeColorBtn.addEventListener("click", () => {
  title.style.color = "red"; //  makes font red
});

// 2. Select by Class
let infoParas = document.getElementsByClassName("info");
let changeClassBtn = document.getElementById("changeClassBtn");

changeClassBtn.addEventListener("click", () => {
  for (let p of infoParas) {
    p.classList.add("highlight");
  }
});