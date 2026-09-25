const card1Number = document.getElementById("card1-value");
const card2Number = document.getElementById("card2-value");
const totals = document.getElementById("total");
const header = document.querySelector(".title-info");
const result = document.getElementById("statement");
const stBtn = document.getElementById("start-btn");
const newBtn = document.getElementById("new-game-btn");
const newEmojGameBtn = document.getElementById("new-emoji-game-btn");
const Emoj1 = document.getElementById("emoji1-value");
const Emoj2 = document.getElementById("emoji2-value");



let cards = [];
let featurePosts = ["Currently builing my portfolio as a software developer",
             "You can check out my github accout to see some of a few projects",
             "Those are just the few I can afford to have them out to the public",
             "The other projects I just can't expose them free in a public repository",
             "But without withstanding I am still adding more projects to the public repository"
];

let experience = ["CEO at PawaDevSecOps",
      "Fullstack Developer",
      "Head of department of IT and Computer Engineering at VHI", 
      "Software Engineering lecturer"];

let Watto = ["Patron Watto", "Married to Monique", 33, true, 1.65];

let newMessage = "adding a new element from our newMessage variable";
Watto.push(newMessage);

// console.log(Watto);
let message ="";
let info= "";
let sum;
// Watto.pop();
// console.log(Watto);



let playerEl = document.getElementById("player-el");

let player = {
    name: "Patron Watto",
    chip: 7000
};

let course = {
    title: "Learn CSS Grid for free",
    lessons: 16,
    creator: "Patron Watto",
    length: 63,
    level: 2,
    isfree: true,
    tags: ["html", "css"],
    showprop: function() {
        console.log(this.title);
    }
};

playerEl.textContent = player.name + ": " + player.chip + "CFA";

let person = {
    name: "Watto",
    age: 33,
    country: "Cameroon",
    
    // person(name,age,country): function() {
    //     this.name = name,
    //     this.age = age,
    //     this.country = country
    // },

    logData: function(){
        console.log(this.name + " is " + this.age +"yrs old and lives in " + this.country);
    }
}

// person User1("Watto", 33, Cameroonian);

// user1.logData();


let fighters = ["💀","👽","😈","👹","👾","🤖","💩","🐺","🦊","🦝","🦁",
    "🐭","🐷","🐱","🐰","🐼","🐸","🦓","🐨","🐻","🐴","🫎","🦄","🐲","🐔",
    "🐒","🦍","🦮","🐕","🐕‍🦺","🐩","🐈‍⬛","🦨","🐿️","🦎","🐉","🐍","🦦","🐬","🦈","🦑",
    "🦞","🦀"];


stBtn.addEventListener("click", startGame);
newEmojGameBtn.addEventListener("click", emojiGame);

function emojiGame(){
    let index1 = Math.floor(Math.random()*fighters.length);
    let index2 = Math.floor(Math.random()*fighters.length);
    let header = document.getElementById("title-info");
    let vs = document.getElementById("Vs");
    let fighter1 = fighters[index1];
    let fighter2 = fighters[index2];

    header.textContent = "The Battle is within ";
    Emoj1.textContent = fighter1;
    Emoj2.textContent = fighter2;
    vs.classList.remove("hidden");


};

function startGame() {
    // stBtn.classList.add("hidden");
    // newBtn.classList.remove("hidden");

    card1Number.textContent = "";
    card2Number.textContent = "";
    totals.textContent = "";
    result.textContent = "";
    

    let num1 = randomNumber();
    let num2 = randomNumber();
    card1Number.textContent = num1;
    card2Number.textContent = num2;

    let hasBlackjack = false;
    let isAlive = true;
    sum = num1 + num2;

    // console.log(sum);
   

    if(sum < 21){
    totals.textContent = sum;
    message = "The goal is that your cards sum up to 21."
    header.textContent = "Draw new cards again, you've not won ";
    result.textContent = message;
    // return;
} else if ( sum === 21) {
    totals.textContent = sum;
    message = "You've got a perfect score in Blackjack and you won. Congratulations !!!";
    hasBlackjack = true;
    header.textContent = "Congratulations, you Won !!! ";
    result.textContent = message;
    
    // return;
} else {
    totals.textContent = sum;
    message = "Sorry your failed. your sum is above 21"; 
    isAlive = false;    
    header.textContent = "Game over. Start a new game.";
    result.textContent = message;
    // return;

}

    if(isAlive === false || hasBlackjack === true){
        newBtn.classList.add("hidden");
        stBtn.classList.remove("hidden");
    } else {
        stBtn.classList.add("hidden");
        newBtn.classList.remove("hidden");
    }
};

newBtn.addEventListener("click", newCards);

function newCards() {
    let total;
    let num3 = randomNumber();
    let num4 = randomNumber(); 
    
    sum += num3 + num4;
    
    card1Number.textContent = num3;
    card2Number.textContent = num4;

    let isBlackjack = false;
    let stillAlive = true;
   

    if(sum < 21){
    totals.textContent = sum;
    message = "The goal is that your cards sum up to 21."
    header.textContent = "Draw new cards again, you've not won ";
    result.textContent = message;
    
} else if (sum === 21) {
    totals.textContent = sum;
    message = "You've got a perfect score in Blackjack and you won. Congratulations !!!";
    isBlackjack = true;
    header.textContent = "Congratulations, you Won !!! ";
    result.textContent = message;
    
} else {
    totals.textContent = sum;
    message = "Sorry your failed. your sum is above 21"; 
    stillAlive = false; 
    header.textContent = "Game over. Start a new game.";
    result.textContent = message;

}
    console.log(stillAlive);
    console.log(isBlackjack);
    if (stillAlive === false || isBlackjack === true){
        newBtn.classList.add("hidden");
        stBtn.classList.remove("hidden");
        
    } else {
        // stBtn.classList.add("hidden");
        // newBtn.classList.remove("hidden");
        console.log(newBtn);
        console.log(stBtn);
    }
};

function randomNumber() {
    let number = Math.floor(Math.random() * 13) + 1;
    
    if(number === 1 && sum > 10){
        number = 11;
    } else if(number === 12 || number === 13){
        number = 10;
    }; 

    return number;
}; 


function arrays(){
    let blog = [];
    let i;
    
    info += `${message} `;
    blog.push(info);
    // message += ". ";
    // for(i = 0; i < 6; i++){
    //     blog.push(info);
    // } 
    console.log(blog);
}
 

