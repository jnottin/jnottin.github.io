const navContactIcons = document.querySelectorAll(".light-up");


//SELECTING THE BUTTON
const sayHelloBtn = document.querySelector(".sayHelloBtn");

//ADDING EVENT LISTENER TO BUTTON
sayHelloBtn.addEventListener("click", lightUpContactInfo);


//FUNCTION RUN WHEN BUTTON CLICKED
function lightUpContactInfo() {
    console.log("function run")
    navContactIcons.forEach(navIcon => {
        if (navIcon) {
            navIcon.style.boxShadow = "15px 10px 200px red inset";
            navIcon.style.borderRadius = "15px";
        } else {
            navIcon.style.boxShadow = "none";
        }
        // navIcon.style.boxShadow = "5px 10px 20px red inset";
        // navIcon.style.boxShadow = "0 0 200px #61dafb";


    });
}