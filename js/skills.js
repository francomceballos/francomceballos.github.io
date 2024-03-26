document.addEventListener("DOMContentLoaded", populateSkills);

/**
 * Populates the skills section with skill items and progress bars.
 *
 * @return {void} This function does not return a value.
 */
function populateSkills() {
  const skillItems = document.querySelectorAll('.skill-item');

  skillItems.forEach(item => {
    const skillName = item.getAttribute('data-skill-name');
    const progressBarClass = item.getAttribute('data-progress-bar-class');

    const skillTemplate = `
      <div class="d-flex justify-content-between">
        <h6 class="font-weight-bold text-light">${skillName}</h6>
        <h6 class="font-weight-bold text-light"></h6>
      </div>
      <div class="progress">
        <div class="progress-bar ${progressBarClass}"
          role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>
      </div>
    `;

    item.innerHTML = skillTemplate;
  });
}
