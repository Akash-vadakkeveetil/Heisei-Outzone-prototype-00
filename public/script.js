function redirectToPageLanding() {
    window.location.href = 'landing_page.html';
}

function redirectToPageLogin() {
    window.location.href = 'login.html';
}


function redirectToPageVolunteer() {
    window.location.href = 'Volunteer.html';
}


function toggleMoreInfo() {
    const moreInfo = document.getElementById('moreInfo');
    if (moreInfo.style.display === 'none' || moreInfo.style.display === '') {
        moreInfo.style.display = 'block';
    } else {
        moreInfo.style.display = 'none';
    }
}



//for the terms and conditon button
// script.js
document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('agreeCheckbox');
    const getStartedButton = document.getElementById('getStartedButton');

    // Show or hide the Get Started button based on checkbox
    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            getStartedButton.style.display = 'inline-flex'; // Show button when checked
        } else {
            getStartedButton.style.display = 'none'; // Hide button when not checked
        }
    });
});

function toggleMoreInfo() {
    const moreInfo = document.getElementById('moreInfo');
    if (moreInfo.style.display === 'none' || moreInfo.style.display === '') {
        moreInfo.style.display = 'block'; // Show the additional information
    } else {
        moreInfo.style.display = 'none'; // Hide the additional information
    }
}

function redirectToPage() {
    // Your redirection logic here
    alert("Redirecting to the page..."); // Placeholder alert
}

