const resetBtn = document.querySelector("#resetBtn")

let count = 0;
let money = 100
let autoCorrection = 0

let menu = document.getElementsByClassName("menubtns")
let lore
for (let lore = 0; lore < menu.length; lore++) {
    menu[lore].addEventListener ("click",function(){
        let lore=this.nextElementSibling
        if(lore.style.display==="block"){
            lore.style.display="none"
        }else{
            lore.style.display="block"
        }
    })
    
    
}


donutClicker();

function clearScreen(resetBtn){
resetBtn.addEventListener("click", function(){
    location.reload()
})


}

function donutClicker(){
    numberOfDonuts.innerHTML=count;
autocounter.innerHTML=money
}
function risingNumber(){
    count= count + 1
    donutClicker()
}
donutcount.addEventListener("click",risingNumber)

function automaticcount(){
   autoCorrection++
    setInterval(function(){
        donutcount.click()
    },1000)
    donutClicker()
    
    
} 

function autoParameters(){
if(count>=money){
count=(count-money)
automaticcount()
}


}

Auto.addEventListener("click",() =>{
autoParameters()

})

clearScreen(resetBtn)