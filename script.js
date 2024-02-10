let menuLink = document.getElementById("menuLink")
let menuIcon = document.getElementById("menuIcon")

menuLink.style.maxHeight = "0px"

menuIcon.addEventListener("click", () => {
    if (menuLink.style.maxHeight == "0px"){
        menuLink.style.maxHeight = "350px"
    } else {
        menuLink.style.maxHeight = "0px"
    }
})