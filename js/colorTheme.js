var colors = document.querySelector(':root');

const btn = document.getElementById('colorBtn');
btn.addEventListener('click', toggleColors);

console.log("Color theme script loaded");

function toggleColors() {
    var color = getComputedStyle(colors);

    if(color.getPropertyValue('--bright1') === 'rgb(240, 235, 216)') {
        document.documentElement.style.setProperty('--bright1', 'rgb(253, 255, 182)'); //light yellow
        document.documentElement.style.setProperty('--bright2', 'rgb(255, 214, 165)'); //light orange
        document.documentElement.style.setProperty('--bright3', 'rgb(155, 246, 255)'); //light blue
        document.documentElement.style.setProperty('--dark1', 'rgb(202, 255, 191)'); //light green
        document.documentElement.style.setProperty('--dark2', 'rgb(255, 198, 255)'); //light pink
        document.documentElement.style.setProperty('--dark3', 'rgb(189, 178, 255)'); //light purple
        console.log("Toggled light theme");
    } else {
        document.documentElement.style.setProperty('--bright1', 'rgb(240, 235, 216)'); //beige
        document.documentElement.style.setProperty('--bright2', 'rgb(116, 140, 171)'); //light blue
        document.documentElement.style.setProperty('--bright3', 'rgb(72, 149, 239)'); //bright blue
        document.documentElement.style.setProperty('--dark1', 'rgb(62, 92, 118)'); //blue green
        document.documentElement.style.setProperty('--dark2', 'rgb(29, 45, 68)'); //navy blue
        document.documentElement.style.setProperty('--dark3', 'rgb(13, 19, 33)'); //dark blue
        console.log("Toggled dark theme");
    }
}

function setInitialTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        document.documentElement.style.setProperty('--bright1', 'rgb(253, 255, 182)'); //light yellow
        document.documentElement.style.setProperty('--bright2', 'rgb(255, 214, 165)'); //light orange
        document.documentElement.style.setProperty('--bright3', 'rgb(155, 246, 255)'); //light blue
        document.documentElement.style.setProperty('--dark1', 'rgb(202, 255, 191)'); //light green
        document.documentElement.style.setProperty('--dark2', 'rgb(255, 198, 255)'); //light pink
        document.documentElement.style.setProperty('--dark3', 'rgb(189, 178, 255)'); //light purple
        console.log("Set initial light theme");
    } else {
        console.log("retained intial dark theme");
    }
}

/*
Testing function - returns value of custom properties
function getColors() {
    var color = getComputedStyle(colors);

    console.log("The value of --beige is: " + color.getPropertyValue('--beige'));
    console.log("The value of --lightBlue is: " + color.getPropertyValue('--lightBlue'));
    console.log("The value of --brightBlue is: " + color.getPropertyValue('--brightBlue'));
    console.log("The value of --blueGreen is: " + color.getPropertyValue('--blueGreen'));
    console.log("The value of --navyBlue is: " + color.getPropertyValue('--navyBlue'));
    console.log("The value of --darkBlue is: " + color.getPropertyValue('--darkBlue'));
}
*/