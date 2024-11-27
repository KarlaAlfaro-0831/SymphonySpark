// JavaScript for dropdown menu
document.addEventListener('DOMContentLoaded', function() {
    var dropbtn = document.querySelector('.dropbtn');
    var dropdownContent = document.querySelector('.dropdown-content');

    dropbtn.addEventListener('click', function() {
        dropdownContent.classList.toggle('show');
    });
});

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.querySelectorAll('.dropdown-content');
        dropdowns.forEach(function(dropdown) {
            if (dropdown.classList.contains('show')) {
                dropdown.classList.remove('show');
            }
        });
    }
}
