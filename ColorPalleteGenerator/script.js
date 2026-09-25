const generatebtn = document.getElementById("generate-btn");
const palettecontainer = document.querySelector(".pallette-container");
// const copyBtn = document.querySelector(".copy-btn");

generatebtn.addEventListener("click",generatepallette);

palettecontainer.addEventListener("click",function(e){
    if(e.target.classList.contains("copy-btn")){
        const hexValue = e.target.previousElementSibling.textContent;

        navigator.clipboard.writeText(hexValue)
        .then(() => showCopySuccess(e.target)
        .catch((err) => {console.log(err)})); 
    } else if(e.target.classList.contains("color")){
        const hexValue = e.target.nextElementSibling.querySelector(".hex-value").textContent;

        navigator.clipboard.writeText(hexValue)
        .then(() => showCopySuccess(e.target.nextElementSibling.querySelector(".copy-btn"))
        .catch((err) => {console.log(err)})); 
    }
})

function showCopySuccess(element){
    element.classList.remove("far","fa-copy");
    element.classList.add("fas","fa-check");
    element.style.color = "#48bb78";

    setTimeout(() => {
        element.classList.remove("fas","fa-check");
        element.classList.add("far","fa-copy");
        element.style.color ="";
    }, 1500)
}

function generatepallette() {
    const colors = [];

    for(let i=0; i<5; i++){
        colors.push(generateRandomColor());
    };

    updatePalletteDisplay(colors);
};

    

function generateRandomColor(){
    const letters = "0123456789ABCDEF";
    let color = "#";

    for(let i=0; i<6; i++){
        color += letters[Math.floor(Math.random()*16)];
    };
    return color; 
};

function updatePalletteDisplay(colors){
    const colorBoxes = document.querySelectorAll(".color-box");

    colorBoxes.forEach((box,index) => {
        const color = colors[index];
        const colorDiv = box.querySelector(".color");
        const hexValue = box.querySelector(".hex-value");

        colorDiv.style.backgroundColor = color;
        hexValue.textColor = color; 
    });
};

generatepallette();