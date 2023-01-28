const portVids = document.getElementById('portvideo');
const lpcVids = document.getElementById('lpcvideo')

let index = 1;
var fileNum = 4;
//auto read fileNum

function nextVid() {
    console.log("Next video called")
    if(index > fileNum-1) {
        index = 0;
    }
    index++;

    if(portVids) {
        portVids.src = "./images/projects/Portfolio/portfolio" + (index) + ".gif";
        console.log("Portfolio video set to index source: " + index);
    }

    if(lpcVids) {
        lpcVids.src = "./images/projects/lpc/lpc" + (index) + ".gif";
        console.log("LPC video set to index source: " + index);
    }
}


var autoScroll = window.setInterval(function() {
    nextVid();
}, 6900);