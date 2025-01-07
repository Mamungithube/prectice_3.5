var elements = document.getElementsByClassName("btn");
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", function() {
        alert("No available Ticket!");
    });
}
