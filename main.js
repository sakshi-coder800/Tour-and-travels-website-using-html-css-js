
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


const mobile_btn = document.getElementsByClassName("mobile-btn")[0];

mobile_btn.addEventListener("click", () => {
    const menu_bar = document.getElementsByClassName("right-menu")[0];
    menu_bar.classList.toggle("ul_active");
});

// .ul_active