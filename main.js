const navContactIcons = document.querySelectorAll(".light-up");


//SELECTING THE BUTTON
const sayHelloBtn = document.querySelector(".sayHelloBtn");

//ADDING EVENT LISTENER TO BUTTON
sayHelloBtn.addEventListener("click", lightUpContactInfo);


//FUNCTION RUN WHEN BUTTON CLICKED
function lightUpContactInfo() {
    console.log("function run")
    navContactIcons.forEach(navIcon => {
        // navIcon.style.boxShadow = "5px 10px 20px red inset";

    });
}