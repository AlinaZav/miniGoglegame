const gost = document.getElementById("gost");
const grob = document.getElementById("grob");

document.addEventListener("keydown", function(event){
    jump();
});

function jump () {
   if(gost.classList != "jump"){
    gost.classList.add("jump")
   }

   setTimeout(function(){
    gost.classList.remove("jump")
   },300)
}

let isAlive = setInterval (function(){
    let gostTop = parseInt(window.getComputedStyle(gost).getPropertyValue("top"))
    let grobLeft = parseInt(window.getComputedStyle(grob).getPropertyValue("left"))

if (grobLeft < 50 && grobLeft > 0 && gostTop >= 140){
    alert("GAME OVER")
}
}, 10)