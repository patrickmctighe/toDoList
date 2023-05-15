function openProjs(btn){
   
   
    // Get the class of the clicked button
    let btnClass = btn.getAttribute("class");
    if (!btnClass) {
        return;
    }
  
    // Find the first div element with the same class as the clicked button
    let divToHide = document.querySelector(`div.${btnClass}`);
  
    // If no element was found, return early
    if (!divToHide) {
        return;
    }
  
    // Get the computed style of the div element
    const computedStyle = window.getComputedStyle(divToHide);
  
    // If the div is currently hidden, show it by setting its display to "block"
    if (computedStyle.display === "none") {
        divToHide.style.display = "block";
    } else {
        // Otherwise, hide it by setting its display to "none"
        divToHide.style.display = "none";
    }
}

function openProj(){
    const buttons = document.querySelectorAll("button");
    buttons.forEach(btn => {
        btn.addEventListener("click", function(event) {
            // Call the openProjs function with the clicked button as the argument
            openProjs(btn);
            
            // Stop the event from bubbling up the DOM tree
            event.stopPropagation();
        });
    });
}

export { openProj };