var navOpen = false; // i whether nav items are displayed
	
// selecting navicon button in mobile devices
// displays navigation pane
$(document).ready(function() {
	$("#navicon").on("click tap", function() { 
		if (navOpen === false) {
			$(".navButton").slideDown("fast");
			navOpen = true;
		} else {
			$(".navButton[id!='navicon']").slideUp("fast");
			navOpen = false;
		}
	});
});