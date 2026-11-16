// Add a click event listener to each <header> element, and bind to the toggleContent function.
// When the <header> element is clicked, call the toggleContent function.
document.querySelector('#hdr1').addEventListener('click', toggleContent);
document.querySelector('#hdr2').addEventListener('click', toggleContent);

// The toggleContent function "toggles" the details section and the up/down caret.
// Determine which of the 3 <header> elements was clicked by checking the value of the id attribute.
// Then get the associated icon and details section element, and assign to variables.
// 'this' is a variable (set by JavaScript) that corresponds to the clicked element
function toggleContent(){
	let details, icon;
	if (this.id == "hdr1") {  // Is the id of the clicked element = 'hdr1' ?
	    icon = document.querySelector('#icon1');
	    details = document.querySelector('#details1');  }
	if (this.id == "hdr2") {
	    icon = document.querySelector('#icon2');
	    details = document.querySelector('#details2');  }

  // Toggle the display of the details section and the up/down caret
  if (details.style.display == 'block'){     // Is the details section showing?
    details.style.display = 'none';          // If yes, then hide it
    icon.className = 'far fa-angle-down fa-lg';   // Change icon to down-caret
  }
  else {  // The element is hidden
    details.style.display = 'block';  // Show the details section
    icon.className = 'far fa-angle-up fa-lg';   // Change icon to up-caret
  }
}