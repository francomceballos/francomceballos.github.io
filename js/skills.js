document.addEventListener("DOMContentLoaded", function() {
    // Dynamically create skill elements
    document.querySelectorAll('.skill-item').forEach(function(item) {
        const skillName = item.getAttribute('data-skill-name');
        const progressBarClass = item.getAttribute('data-progress-bar-class');
        item.innerHTML = `
            <div class="d-flex justify-content-between">
                <h6 class="font-weight-bold text-light">${skillName}</h6>
                <h6 class="font-weight-bold text-light"></h6>
            </div>
            <div class="progress">
                <div class="progress-bar ${progressBarClass}" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        `;
    });
});