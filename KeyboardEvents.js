let title = document.getElementById("title");

document.addEventListener("keydown", (event) => {
    if (event.key === "r") {
        title.style.color = "red"; //  makes font red
    }
});


document.addEventListener("keyup", (event) => {
    if (event.key === "r") {
        title.style.color = "black"; //  makes font black
    }
});