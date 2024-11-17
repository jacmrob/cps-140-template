console.log('Hello!');

// Style site in Dark mode if between hours of 8pm and 8am
// const body = document.body
// const d = new Date();

// if (d.getHours() > 20 || d.getHours() < 8) {
//     body.style["backgroundColor"] = "black";
//     body.style["color"] = "white";
// } else {
//     body.style["backgroundColor"] = "white";
//     body.style["color"] = "black";
// }

// Date block

const todaysDate = () => {
    let d = new Date();
    return "Today's date is " + d
}

const dateBlock = document.getElementById("dateBlock");
dateBlock.innerText = todaysDate();
