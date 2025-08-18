// 1. Select by ID
let title = document.getElementById("title");
title.innerText = "Play with DOM Selectors";

// 2. Select by Class
let infoParas = document.getElementsByClassName("info");
infoParas[0].style.color = "green"; // change first one
infoParas[1].style.fontWeight = "bold"; // change second one

// 3. Select by Tag
let paras = document.getElementsByTagName("p");
output = document.getElementById("output")
output.innerText = "This page has " + paras.length + " <p> tags.";