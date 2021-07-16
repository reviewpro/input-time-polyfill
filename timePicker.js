class TimePicker {
  constructor() {
    // This is a singleton.
    if (window.timePicker) {
      return window.timePicker;
    }

    this.input = null;
    this.isOpen = false;

    this.time = {
      hour: null,
      minute: null,
    };

    // The picker element. Unique tag name attempts to protect against
    // generic selectors.
    this.container = document.createElement(`input-time-polyfill`);

    // Add controls.
    // Hours picker.
    this.hour = document.createElement(`select`);
    TimePicker.createRangeSelect(this.hour, 0, 23);
    this.hour.className = `hourSelect`;
    this.hour.addEventListener(`change`, () => {
    this.time = {
        ...this.time,
        hour: parseInt(this.hour.value) || 0,
      };
      this.input.selectedPart = 0;
      this.setInput(false);
    });
    this.container.appendChild(this.hour);

    // Minutes picker.
    this.minute = document.createElement(`select`);
    TimePicker.createRangeSelect(this.minute, 0, 59);
    this.minute.className = `minuteSelect`;
    this.minute.addEventListener(`change`, () => {
      this.time = {
        hour: 0,
        ...this.time,
        minute: parseInt(this.minute.value) || 0,
      };
      this.input.selectedPart = 1;
      this.setInput(false);
    });
    this.container.appendChild(this.minute);

    this.hide();
    document.body.appendChild(this.container);

    this.removeClickOut = (e) => {
      if (this.isOpen) {
        let el = e.target;
        let isPicker = el === this.container || el === this.input;
        while (!isPicker && (el = el.parentNode)) {
          isPicker = el === this.container;
        }
        ((e.target.getAttribute(`type`) !== `date` && !isPicker) ||
          !isPicker) &&
          this.hide();
      }
    };

    this.removeBlur = (e) => {
      if (this.isOpen) {
        this.hide();
      }
    };
  }

  // Hide.
  hide() {
    this.container.setAttribute(`data-open`, (this.isOpen = false));
    // Close the picker when clicking outside of a date input or picker.
    if (this.input) {
      this.input.blur();
    }
    document.removeEventListener(`mousedown`, this.removeClickOut);
    document.removeEventListener(`touchstart`, this.removeClickOut);
  }

  // Show.
  show() {
    this.container.setAttribute(`data-open`, (this.isOpen = true));
    // Close the picker when clicking outside of a date input or picker.
    setTimeout(() => {
      document.addEventListener(`mousedown`, this.removeClickOut);
      document.addEventListener(`touchstart`, this.removeClickOut);
    }, 500);

    // when used in a single-page app  or otherwise,
    // hide datepicker when the browser's back button is pressed
    window.onpopstate = () => {
      this.hide();
    };
  }

  // Position picker below element. Align to element's right edge.
  goto(element) {
    const rekt = element.getBoundingClientRect();
    this.container.style.top = `${
      rekt.top +
      rekt.height +
      (document.documentElement.scrollTop || document.body.scrollTop) +
      3
    }px`;

    const contRekt = this.container.getBoundingClientRect();
    const width = contRekt.width ? contRekt.width : 280;

    const classWithOutPos = () => {
      return this.container.className
        .replace(`polyfill-left-aligned`, ``)
        .replace(`polyfill-right-aligned`, ``)
        .replace(/\s+/g, ` `)
        .trim();
    };

    let base = rekt.right - width;
    if (rekt.right < width) {
      base = rekt.left;
      this.container.className = `${classWithOutPos()} polyfill-left-aligned`;
    } else {
      this.container.className = `${classWithOutPos()} polyfill-right-aligned`;
    }
    this.container.style.left = `${
      base + (document.documentElement.scrollLeft || document.body.scrollLeft)
    }px`;
    this.show();
  }

  // Initiate I/O with given date input.
  attachTo(input) {
    if (input === this.input && this.isOpen) {
      return false;
    }

    this.input = input;
    this.sync();
    this.goto(this.input);
    return true;
  }

  // Match picker time with input time.
  sync() {
    // fixes bug where an empty calendar appears if year is missing from keyboard input
    this.time = this.input.valueAsTime;
    if (this.time) {
      this.hour.value = this.time.hour;
      this.minute.value = this.time.minute;
    }
  }

  // Match input date with picker date.
  setInput(hide) {
    this.input.valueAsTime = this.time;
    this.input.focus();

    if (hide) {
      setTimeout(() => {
        // IE wouldn't hide, so in a timeout you go.
        this.hide();
      }, 100);
    }

    const value = `${this.time.hour}:${this.time.minute}`;
    const valueSetter = Object.getOwnPropertyDescriptor(
      this.input,
      'value',
    ).set;
    const prototype = Object.getPrototypeOf(this.input);
    const prototypeValueSetter = Object.getOwnPropertyDescriptor(
      prototype,
      'value',
    ).set;

    if (valueSetter && valueSetter !== prototypeValueSetter) {
      prototypeValueSetter.call(this.input, value);
    } else {
      valueSetter.call(this.input, value);
    }

    this.pingInput();
  }

  pingInput() {
    // Dispatch DOM events to the input.
    let inputEvent;
    let changeEvent;

    // Modern event creation.
    try {
      inputEvent = new Event(`input`, { bubbles: true, cancelable: false });
      changeEvent = new Event(`change`, { bubbles: true, cancelable: false });
    } catch (e) {
      // Old-fashioned way.
      inputEvent = document.createEvent(`KeyboardEvent`);
      inputEvent.initEvent(`input`, true, false);
      changeEvent = document.createEvent(`KeyboardEvent`);
      changeEvent.initEvent(`change`, true, false);
    }

    this.input.dispatchEvent(inputEvent);
    this.input.dispatchEvent(changeEvent);
  }

  static createRangeSelect(theSelect, min, max, namesArray) {
    theSelect.setAttribute("size", "5");
    theSelect.innerHTML = ``;

    for (let i = min; i <= max; ++i) {
      const aOption = document.createElement(`option`);
      theSelect.appendChild(aOption);

      const theText = namesArray ? namesArray[i - min] : i;

      aOption.text = theText;
      aOption.value = i;
    }

    return theSelect;
  }
}

window.timePicker = new TimePicker();

export default window.timePicker;
