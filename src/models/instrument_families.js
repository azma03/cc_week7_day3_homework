const PubSub = require('../helpers/pub_sub.js');

const InstrumentFamilies = function(data) {
  this.data = data;
};

InstrumentFamilies.prototype.bindEvents = function () {
  PubSub.publish("InstrumentFamilies:All-Instruments-Ready", this.data);
  console.log('from instrument families', this.data);

  PubSub.subscribe('InputInstrument:change', (event) => {
    const selectedIndex = event.detail;
    this.publiInstrumentDetails(selectedIndex);
  })
};

InstrumentFamilies.prototype.publiInstrumentDetails = function (instrumentIndex) {
  const selectedInstrument = this.data[instrumentIndex];
  PubSub.publish('InstrumentFamilies:selected-instrument-ready', selectedInstrument);
};


module.exports = InstrumentFamilies;
