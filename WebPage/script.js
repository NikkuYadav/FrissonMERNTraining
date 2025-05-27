const addMoreBtn = document.getElementById('addMoreBtnAffiliations');
const radioGroup = document.getElementById('radioGroup');
const affiliationContainer = document.getElementById('affiliationContainer');
const addBtnDate = document.getElementById('addMoreBtnDate');
const dataContainer = document.getElementById('dateContainer');

// Add more Functionality for Affiliation
addMoreBtn.addEventListener('click', () => {
  radioGroup.style.display = "flex"
  radioGroup.style.gap = "10px"
})

radioGroup.addEventListener('change', (e) => {
  const type = e.target.value;
  const block = getAffiliationBlock(type);
  affiliationContainer.appendChild(block);
  radioGroup.style.display = 'none';
  radioGroup.querySelectorAll('input[type="radio"]').forEach(r => r.checked = false);
});

function getAffiliationBlock(type) {
  const wrapper = document.createElement('div');
  wrapper.className = `affiliation_${type}`;
  wrapper.innerHTML = {
    person: `
        <div>
          <div class="form_label_common">
            <label for="person" class="text_gray">Name of Person</label>
            <span><i class="fa-solid fa-circle-info"></i></span>
          </div>
          <input type="text" id="person" placeholder="Person Name">
          <div class="form_label_common">
            <label for="person_role" class="text_gray">Person Role</label>
            <span><i class="fa-solid fa-circle-info"></i></span>
          </div>
          <input type="text" id="person_role" placeholder="Person Role">
        </div>
        <div>
          <button class="cross_icon"><i class="fa-solid fa-xmark"></i></button>
        </div>
      `,
    organization: `
        <div>
          <div class="form_label_common">
            <label for="organization" class="text_gray">Name of Organization</label>
            <span><i class="fa-solid fa-circle-info"></i></span>
          </div>
          <input type="text" id="organization" placeholder="Organization Name">
          <div class="form_label_common">
            <label for="organization_role" class="text_gray">Organization Role</label>
            <span><i class="fa-solid fa-circle-info"></i></span>
          </div>
          <input type="text" id="organization_role" placeholder="Organization Role">
        </div>
        <div>
          <button class="cross_icon"><i class="fa-solid fa-xmark"></i></button>
        </div>
      `,
    publication: `
        <div>
          <div class="form_label_common">
            <label for="publication" class="text_gray">Name of Publication</label>
            <span><i class="fa-solid fa-circle-info"></i></span>
          </div>
          <input type="text" id="publication" placeholder="Publication Name">
          <div class="form_label_common">
            <label for="publication_role" class="text_gray">Publication Role</label>
            <span><i class="fa-solid fa-circle-info"></i></span>
          </div>
          <input type="text" id="publication_role" placeholder="Publication Role">
        </div>
        <div>
          <button class="cross_icon"><i class="fa-solid fa-xmark"></i></button>
        </div>
      `
  }[type];

  // Add remove functionality
  wrapper.querySelector('.cross_icon').addEventListener('click', () => {
    wrapper.remove();
  });

  return wrapper;
}

// Add more Functionality for Date

addBtnDate.addEventListener('click', () => {
  // Create a wrapper div
  const div = document.createElement('div');
  div.className = 'addMore_what_happened';

  // Add the HTML content
  div.innerHTML = `
        <div class="what_happened">
          <div class="form_label_common">
            <label class="text_gray">What happened</label>
            <span><i class="fa-solid fa-circle-info"></i></span>
          </div>
          <input type="text" placeholder="Tell something">
          <div class="date_label">
            <label class="text_gray">Year</label>
            <label class="text_gray">Month</label>
            <label class="text_gray">Date</label>
          </div>
          <div class="what_happened_input">
            <input type="text" placeholder="year">
            <select>
              <option>Jan</option><option>Feb</option><option>Mar</option>
              <option>Apr</option><option>May</option><option>Jun</option>
              <option>Jul</option><option>Aug</option><option>Sep</option>
              <option>Oct</option><option>Nov</option><option>Dec</option>
            </select>
            <select>
              ${[...Array(31)].map((_, i) => `<option>${i + 1}</option>`).join('')}
            </select>
          </div>
        </div>
        <div>
          <button class="cross_icon"><i class="fa-solid fa-xmark"></i></button>
        </div>
      `;

  // Add to the container
  dataContainer.appendChild(div);

  // Handle remove
  div.querySelector('.cross_icon').addEventListener('click', () => {
    div.remove();
  });
});

