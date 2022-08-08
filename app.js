let hero = document.querySelector("#hero");
let colorPalette = document.querySelector("#colorPalette");
let colorsBtn = document.querySelector("#colorsBtn");

let pallleteColor = document.querySelectorAll(".pallleteColor");

colorsBtn.addEventListener("click", ()=>{
    colorPalette.classList.toggle("active");
});

pallleteColor.forEach((value)=>{
    // let colorValue = value.getAttribute("bgColor");
    let colorValue = value.style.backgroundColor;
    console.log(colorValue);
    value.addEventListener("click", ()=>{
        hero.style.backgroundColor = colorValue;
    })
})