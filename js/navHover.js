function hoverOn(e) {
    let text = document.createElement("p");
    if(e.getAttribute("id") == 'colorBtn') {
        text.innerText = "Toggle Theme";
    } 
    else if(e.getAttribute("id") == 'homeBtn') {
        text.innerText = "Home";
    }
    else if(e.getAttribute("id") == 'skillsBtn') {
        text.innerText = "Background";
    } 
    else if(e.getAttribute("id") == 'projectBtn') {
        text.innerText = "Projects";
    } 
    else if(e.getAttribute("id") == 'contactBtn') {
        text.innerText = "Contact";
    } 
    else {
        text.innerText = "No button detected";
    }
    
    console.log("Target ID: " + e.getAttribute('id'));

    text.setAttribute("id", "nav-display-text")
    text.style.fontSize = '16px';
    e.appendChild(text);

    e.setAttribute("class", "nav-active-hover");
}

function hoverOff(e) {
    e.removeAttribute("class", "nav-active-hover");

    document.querySelector("#nav-display-text").remove();
}