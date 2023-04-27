// get elements
const dropdown = document.getElementById('myDropdown');
const removeBtn = document.getElementById('removeBtn');
const dropdownLength = document.getElementById('dropdownLength');
const removedList = document.getElementById('removedList');
const existingList = document.getElementById('existingList');

// initialize lists
let removedOptions = [];
let existingOptions = Array.from(dropdown.options).map(option => option.value);
// initialize displays
updateDropdownLength();
updateOptionLists();

// update dropdown length display
function updateDropdownLength() {
  dropdownLength.textContent = dropdown.options.length;
}

// update removed and existing options displays
function updateOptionLists() {
  // clear lists
  removedList.innerHTML = '';
  existingList.innerHTML = '';
  // add removed options to removedList
  removedOptions.forEach(option => {
    const listItem = document.createElement('li');
    listItem.textContent = option;
    removedList.appendChild(listItem);
  });
  // add existing options to existingList
  existingOptions.forEach(option => {
    const listItem = document.createElement('li');
    listItem.textContent = option;
    existingList.appendChild(listItem);
  });
}

// remove selected option from dropdown
function removeSelectedOption() {
  const selectedOption = dropdown.options[dropdown.selectedIndex];
  const selectedValue = selectedOption.value;
  // remove option from dropdown
  dropdown.removeChild(selectedOption);
  // add removed option to removedOptions list
  removedOptions.push(selectedValue);
  // remove option from existingOptions list
  existingOptions = existingOptions.filter(option => option !== selectedValue);
  // update displays
  updateDropdownLength();
  updateOptionLists();
}

// add event listeners
removeBtn.addEventListener('click', removeSelectedOption);
dropdown.addEventListener('change', updateDropdownLength);

