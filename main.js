
// get all input elements 
const inpField= document.getElementsByTagName("input");

Array.from(inpField).forEach((e,i)=>{
e.addEventListener("keyup",(event)=>{
    // console.log(event)
    if(event.target.value.length>0){
        // console.log(event.target.value)
        document.getElementsByClassName("fa-circle-chevron-up")[i].style.transform = "rotate(180deg)"
        document.getElementsByClassName("fa-circle-chevron-up")[i].style.transition = ".2s linear"
    }
})})