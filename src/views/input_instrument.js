const PubSub = require('../helpers/pub_sub.js');

const InputInstrument = function(element) {
  this.element = element;
};

InputInstrument.prototype.bindEvents = function () {
  PubSub.subscribe("InstrumentFamilies:All-Instruments-Ready", (event) => {
    const allInstruments = event.detail;
    console.log("allInstruments", allInstruments);
    this.populate(allInstruments);
  })

  this.element.addEventListener('change', (evt) => {
    const selectedIndex = evt.target.value;
    PubSub.publish('InputInstrument:change', selectedIndex);
    console.log(selectedIndex);
  });
};

InputInstrument.prototype.populate = function (instrumentData) {
  instrumentData.forEach((instrument, index) => {
    const option = document.createElement('option');
    option.textContent = instrument.name;
    option.value = index;
    this.element.appendChild(option);
    console.log("option", option);
  })
};

module.exports = InputInstrument;
