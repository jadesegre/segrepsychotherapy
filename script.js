// get all H2s on the about page
// on click of each H2, expand its related p tag
let aboutPageToggleH2s = document.querySelectorAll("#about-text h2");
aboutPageToggleH2s.forEach((h2) => {
    h2.addEventListener("click", () => {
        let adjacentP = h2.nextElementSibling;
        toggleDisplay(h2, adjacentP);
    })
});

// get the hamburger menu button
// on click of the hamburger menu button, expand the nav bar
let hamburgerMenuButton = document.getElementById("hamburger");
hamburgerMenuButton.addEventListener("click", () => {
    let navBar = document.querySelector("nav ul");
    toggleDisplay(hamburgerMenuButton, navBar);
})

// toggleDisplay function
// parameters: element that triggers the function, element to toggle
// uses maxHeight CSS property to display/hide the toggleElement
// transition set in CSS
function toggleDisplay(triggerElement, toggleElement) {
    if (!toggleElement.style.maxHeight || toggleElement.style.maxHeight == "0px") {
        toggleElement.style.maxHeight = `${toggleElement.scrollHeight}px`;
        toggleElement.style.paddingBottom = "10px";

        // only for about page, since H2s have span element as child
        triggerElement.children[0].innerText = "▲";
    } else {
        toggleElement.style.maxHeight = "0px";
        toggleElement.style.paddingBottom = "0px";
        
        // only for about page, since H2s have span element as child
        triggerElement.children[0].innerText = "▼";
    }
}