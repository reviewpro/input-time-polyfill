import timePicker from "./timePicker";

export default class Input {
  constructor(input) {
    this.element = input;
    this.element.setAttribute(`data-has-picker`, ``);
    this.element.readOnly = true;

    let selectedPart = -1;

    const selectRange = () => {
      if (this.element.setSelectionRange) {
        if (this.element.selectedPart == 0) {
          this.element.setSelectionRange(0, 2);
        } else if (this.element.selectedPart == 1) {
          this.element.setSelectionRange(3, 5);
        }
      }
    };

    Object.defineProperties(this.element, {
      selectedPart: {
        get: () => {
          return selectedPart;
        },
        set: (val) => {
          selectedPart = val;
        },
      },
      valueAsTime: {
        get: () => {
          if (!this.element.value) {
            return null;
          }
          const parts = this.element.value.split(":");

          return {
            hour: parseInt(parts[0], 10) || 0,
            minute: parseInt(parts[1], 10) || 0,
          };
        },
        set: (val) => {
          var newVal = "";
          if (typeof val.hour !== "undefined") {
            newVal += Math.max(Math.min(val.hour, 23), 0)
              .toString()
              .padStart(2, "0");
          } else {
            newVal += "--";
          }
          newVal += ":";
          if (typeof val.minute !== "undefined") {
            newVal += Math.max(Math.min(val.minute, 59), 0)
              .toString()
              .padStart(2, "0");
          } else {
            newVal += "--";
          }
          this.element.value = newVal;
          selectRange();
        },
      },
    });

    // Open the picker when the input get focus,
    // also on various click events to capture it in all corner cases.
    const showPicker = (e) => {
      const elm = this.element;
      const didAttach = timePicker.attachTo(elm);
      selectedPart = elm.selectionStart < 3 ? 0 : 1;
      selectRange();
    };
    this.element.addEventListener(`focus`, showPicker);
    this.element.addEventListener(`mouseup`, showPicker);

    // Update the picker if the date changed manually in the input.
    this.element.addEventListener(`keydown`, (e) => {
      let time = { hour: null, minute: null };
      switch (e.keyCode) {
        case 9:
        case 27:
        case 13:
          timePicker.hide();
          break;
        case 38:
          if (this.element.valueAsTime) {
            time = {
              hour:
                this.element.valueAsTime.hour -
                (this.element.selectedPart == 0 ? 1 : 0),
              minute:
                this.element.valueAsTime.minute -
                (this.element.selectedPart == 1 ? 1 : 0),
            };
            this.element.valueAsTime = time;
            timePicker.pingInput();
            e.preventDefault();
            return false;
          }
          break;
        case 40:
          if (this.element.valueAsTime) {
            time = {
              hour:
                this.element.valueAsTime.hour +
                (this.element.selectedPart == 0 ? 1 : 0),
              minute:
                this.element.valueAsTime.minute +
                (this.element.selectedPart == 1 ? 1 : 0),
            };
            this.element.valueAsTime = time;
            timePicker.pingInput();
            e.preventDefault();
            return false;
          }
          break;
        case 37:
          if (this.element.valueAsTime) {
            this.element.selectedPart = 0;
            this.element.valueAsTime = this.element.valueAsTime;
            e.preventDefault();
            return false;
          }
          break;
        case 39:
          if (this.element.valueAsTime) {
            this.element.selectedPart = 1;
            this.element.valueAsTime = this.element.valueAsTime;
            e.preventDefault();
            return false;
          }
          break;
      }

      timePicker.sync();
    });

    this.element.addEventListener(`keyup`, (e) => {
      timePicker.sync();
    });

    if (this.element.value.length == 0) {
      this.element.valueAsTime = {};
    }
  }
}

// Return false if the browser does not support input[type="date"].
export function supportsTimeInput() {
  const input = document.createElement(`input`);
  input.setAttribute(`type`, `time`);

  const notADateValue = `not-a-time`;
  input.setAttribute(`value`, notADateValue);

  return !(input.value === notADateValue);
}

// Will add the Picker to all inputs in the page.
export function addPickerToTimeInputs() {
  // Get and loop all the input[type="time"]s in the page that do not have `[data-has-picker]` yet.
  const timeInputs = document.querySelectorAll(
    `input[type="time"]:not([data-has-picker])`
  );
  const length = timeInputs.length;

  if (!length) {
    return false;
  }

  for (let i = 0; i < length; ++i) {
    new Input(timeInputs[i]);
  }
}

export function addPickerToOtherInputs() {
  // Get and loop all the input[type="text"] class time-polyfill in the page that do not have `[data-has-picker]` yet.
  const timeInputs = document.querySelectorAll(
    `input[type="text"].time-polyfill:not([data-has-picker])`
  );
  const length = timeInputs.length;

  if (!length) {
    return false;
  }

  for (let i = 0; i < length; ++i) {
    new Input(timeInputs[i]);
  }
}
