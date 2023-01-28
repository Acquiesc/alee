const vids = document.getElementById('video');

let index = 1;
var fileNum = 4;
//auto read fileNum

function nextVid() {
    console.log("Next video called")
    if(vids) {
        if(index > fileNum-1) {
            index = 0;
        }
        index++;
        vids.src = "./images/projects/Portfolio/Portfolio" + (index) + ".mp4";
        console.log("Video set to index source: " + index);
    }
}


var autoScroll = window.setInterval(function() {
    nextVid();
}, 7000);