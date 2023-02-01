var colors = document.querySelector(':root');

const btn = document.getElementById('colorBtn');
btn.addEventListener('click', toggleColors);

console.log("Color theme script loaded");

/*

Color Palettes:
https://coolors.co/palette/0d1321-1d2d44-3e5c76-748cab-f0ebd8
https://coolors.co/palette/ffadad-ffd6a5-fdffb6-caffbf-9bf6ff-a0c4ff-bdb2ff-ffc6ff-fffffc

*/

function toggleColors() {
    var color = getComputedStyle(colors);

    if(color.getPropertyValue('--white') === 'rgb(255, 255, 255)') {
        document.documentElement.style.setProperty('--white', 'rgb(17, 17, 17)'); //white to black
        document.documentElement.style.setProperty('--black', 'rgb(255, 255, 255)'); //black to white

        document.documentElement.style.setProperty('--darkGrayTrans', 'rgba(165, 161, 161, 0.3)'); //dark gray bkgrnd to light gray
        document.documentElement.style.setProperty('--lightGrayTrans', 'rgba(37, 36, 36, 0.3)'); //light gray bkgrnd to light gray

        document.documentElement.style.setProperty('--bright1', 'rgb(253, 255, 182)'); //light yellow
        document.documentElement.style.setProperty('--bright2', 'rgb(255, 214, 165)'); //light orange
        document.documentElement.style.setProperty('--bright3', 'rgb(202, 255, 191)'); //light green
        document.documentElement.style.setProperty('--dark1', 'rgb(155, 246, 255)'); //light blue
        document.documentElement.style.setProperty('--dark2', 'rgb(255, 198, 255)'); //light pink
        document.documentElement.style.setProperty('--dark3', 'rgb(189, 178, 255)'); //light purple
        console.log("Toggled light theme");
    } else {
        document.documentElement.style.setProperty('--white', 'rgb(255, 255, 255)'); //white text
        document.documentElement.style.setProperty('--black', 'rgb(17, 17, 17)'); //black text

        document.documentElement.style.setProperty('--darkGrayTrans', 'rgba(37, 36, 36, 0.3)'); //dark gray bkgrnd
        document.documentElement.style.setProperty('--darkGrayTrans', 'rgba(165, 161, 161, 0.3)'); //light gray bkgrnd

        document.documentElement.style.setProperty('--bright1', 'rgb(240, 235, 216)'); //beige small bkgrnd highlights
        document.documentElement.style.setProperty('--bright2', 'rgb(116, 140, 171)'); //light blue small text highlights
        document.documentElement.style.setProperty('--bright3', 'rgb(72, 149, 239)'); //bright blue
        document.documentElement.style.setProperty('--dark1', 'rgb(62, 92, 118)'); //blue green
        document.documentElement.style.setProperty('--dark2', 'rgb(29, 45, 68)'); //navy blue
        document.documentElement.style.setProperty('--dark3', 'rgb(13, 19, 33)'); //dark blue
        console.log("Toggled dark theme");
    }
}

function setInitialTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        document.documentElement.style.setProperty('--white', 'rgb(17, 17, 17)'); //white to black
        document.documentElement.style.setProperty('--black', 'rgb(255, 255, 255)'); //black to white

        document.documentElement.style.setProperty('--darkGrayTrans', 'rgba(165, 161, 161, 0.6)'); //dark gray bkgrnd to light gray
        document.documentElement.style.setProperty('--lightGrayTrans', 'rgba(37, 36, 36, 0.6)'); //light gray bkgrnd to light gray

        document.documentElement.style.setProperty('--bright1', 'rgb(253, 255, 182)'); //light yellow
        document.documentElement.style.setProperty('--bright2', 'rgb(255, 214, 165)'); //light orange
        document.documentElement.style.setProperty('--bright3', 'rgb(202, 255, 191)'); //light green
        document.documentElement.style.setProperty('--dark1', 'rgb(155, 246, 255)'); //light blue
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