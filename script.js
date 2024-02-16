let person = document.querySelector(".perso");
let obstacles = document.querySelector(".obstacles");

function sauter(){
    //function pour faire sauter le personnage
    /*alert("Vous avez cliqué sur le button ")*/
    if(person.classList != "animation") {
        person.classList.add("animation");
    }
    setTimeout(function() {
        person.classList.remove("animation");
    },500)
}

//verifier si l'obstacle touche le personnage
let verification = setInterval(function() {
    var persoTop = parseInt(window.getComputedStyle(person).getPropertyValue("top"));
    var obstaclesLeft = parseInt(window.getComputedStyle(obstacles).getPropertyValue("left"));
    
    if(obstaclesLeft <20 && obstaclesLeft>0 && persoTop>= 130) {
        obstacles.style.animation = "none";
        alert("Vous avez perdu");
    }
},1)