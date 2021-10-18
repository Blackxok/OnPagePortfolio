//  THEME COLORS -------------
let themeColor = document.querySelectorAll(".theme-toggler span");
themeColor.forEach(color => color.addEventListener("click", () => {
    let background = color.style.background;
    document.querySelector('body').style.background = background;
    console.log("xuyyozna");
}));