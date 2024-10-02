let logBtn = document.querySelectorAll(".enter")
let regBtn = document.querySelectorAll(".reg")
let sbtLog = document.querySelector(".put")
let sbtReg = document.querySelector(".input")
let err= document.querySelector(".empty")
let nme= document.querySelector("#name")

logBtn.forEach((sub1) => {
    sub1.addEventListener("click", ()=>{
        document.querySelector(".log").style.display = "flex";
        document.querySelector(".register").style.display = "none";
    });
});
regBtn.forEach((sub2)=>{
    sub2.addEventListener("click", ()=>{
        document.querySelector(".log").style.display = "none";
        document.querySelector(".register").style.display = "flex";
    });
});
sbtLog.addEventListener("click", ()=>{

})










