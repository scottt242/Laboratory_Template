// let images = document.querySelectorAll(".landing .cont")
// let count = images.length
// let slideCounter = 1
// let indicators = document.querySelectorAll(".landing .indicators div")
// setInterval(function() {
//     slideCounter++
//     if (slideCounter == 4) {
//         slideCounter = 1
//         check()
//     } else {
//         check()
//     }
// }, 3000)
// let check = function() {
//     remove()
//     images[slideCounter - 1].classList.add("active")
//     indicators[slideCounter - 1].classList.add("active")
// }
// let remove = function() {
//     images.forEach((e) => {
//         e.classList.remove("active")
//     })
//     indicators.forEach((e) => {
//         e.classList.remove("active")
//     })
// }
// check()
// for (let i = 0; i < count; i++) {
//     indicators[i].onclick = function() {
//         slideCounter = i + 1
//         check()
//     }
// }
//--------------------------------------------

    //------------------------------------------------------------
let logo=document.querySelector(".logo")
let bar=document.querySelector(".bar")
let header=document.querySelector("header .container")
logo.addEventListener("click",()=>{
    bar.classList.toggle("active")
let timeOut=setTimeout(()=>{
    if (header.classList.contains("active")){
       let timeIn=setTimeout(()=>{
         bar.style.cssText = "display: block;"
        clearTimeout(timeIn)
        },250)

    }else{
        bar.style.cssText = "display: none;"
    }
    header.classList.toggle("active")
    clearTimeout(timeOut)
},250)
console.log("f")
})
//------------------------------------------------------------------------------
let filter = document.querySelector(".filter");
let form = document.querySelector(".form-container");
let login=document.querySelector("header .bar li:last-child");


filter.addEventListener("click", () => {
    filter.classList.toggle("active");
    form.classList.toggle("active");

});

login.onclick=()=>{
    filter.classList.toggle("active");
    form.classList.toggle("active");
}

