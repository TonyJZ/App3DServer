// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    let modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

window.onload = function() {
    let modal = document.getElementById("myModal");
    // Get the <span> element that closes the modal
    let span = document.getElementById("modalCloseButton");
    // When the user clicks on <span> (x), close the modal
    if (span !== undefined && span !== null) {
        span.onclick = function() {
            modal.style.display = "none";
        };
    }

    let defaultOpen = document.getElementById("defaultOpen");
    if (defaultOpen !== undefined && defaultOpen !== null) {
        defaultOpen.click();
    }
};

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
