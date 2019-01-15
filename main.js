// const navContactIcons = document.querySelectorAll(".light-up");


// //SELECTING THE BUTTON
// const sayHelloBtn = document.querySelector(".sayHelloBtn");

// //ADDING EVENT LISTENER TO BUTTON
// sayHelloBtn.addEventListener("click", lightUpContactInfo);


// //FUNCTION RUN WHEN BUTTON CLICKED
// function lightUpContactInfo() {
//     navContactIcons.forEach(navIcon => {
//         if (navIcon.style.boxShadow = "none") {
//             console.log("works")
//             // navIcon.style.boxShadow = "0 0 200px #61dafb";
//             // navIcon.style.borderRadius = "15px";
//             // navIcon.style.height = "70px"
//             // navIcon.style.width = "70px"
//         } else {
//             navIcon.style.boxShadow = "none";
//         }
//         // navIcon.style.boxShadow = "5px 10px 20px red inset";
//         // navIcon.style.boxShadow = "0 0 200px #61dafb";


//     });
// }

function accordionOpenClose(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}