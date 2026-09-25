const greet = document.getElementById("greetings");
const incrBtn = document.getElementById("incr");
const saveBtn = document.getElementById("save-btn");
const results = document.getElementById("savedResults");

let counter = document.getElementById("count-el");

let name = "Derek WAINDAH"
let message = "Hi, welcome back Mr " 
let number = 45
let count = 0;

greet.textContent = message + name

incrBtn.addEventListener("click", () => {
    
    count += 1 ;

    counter.textContent = `${count}`;
    results.classList.add("hidden");
});

saveBtn.addEventListener("click", saveCounts);



// console.log(message + " " + name + " and " + number +" is my number" );
 function saveCounts () {
    results.textContent += `${count}, ` ;
    results.classList.remove("hidden");
    count = 0
    counter.textContent = `${count}`;
 }