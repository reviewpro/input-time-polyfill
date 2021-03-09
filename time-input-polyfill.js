import './time-input-polyfill.scss';
import Input from './input.js';

const addPickers = () => {
  Input.addPickerToOtherInputs();
  // Check if type="time" is supported.
  if(!Input.supportsTimeInput()) {
    Input.addPickerToTimeInputs();
  }
};

// Run the above code on any <input type="time"> in the document, also on dynamically created ones.
addPickers();

document.addEventListener(`DOMContentLoaded`, () => {
  addPickers();
});

// This is also on mousedown event so it will capture new inputs that might
// be added to the DOM dynamically.
document.querySelector(`body`).addEventListener(`mousedown`, () => {
  addPickers();
});
