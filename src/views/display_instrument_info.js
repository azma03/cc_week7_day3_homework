const PubSub = require('../helpers/pub_sub.js');

const DisplayInstrumentInfo = function(container){
    this.container = container;
}

DisplayInstrumentInfo.prototype.bindEvents = function () {
  PubSub.subscribe('InstrumentFamilies:selected-instrument-ready', (event) => {
    const instrument = event.detail;
    console.log("instrument", instrument);
    this.render(instrument);
  });
};

DisplayInstrumentInfo.prototype.createElementandSetValue = function (element, value) {
  const infoElement = document.createElement(element);
  infoElement.textContent = value;
  return infoElement;
};

DisplayInstrumentInfo.prototype.createInstrumentsList = function (instrument) {
  const infoInstrList = document.createElement('ul');

  instrument.instruments.forEach((instr) => {
    const infoInstrListItem = document.createElement('li');
    // infoInstrListItem.textContent = instr.instruments[1];
    infoInstrListItem.textContent = instr;
    infoInstrList.appendChild(infoInstrListItem);
  })
  return infoInstrList;
};

DisplayInstrumentInfo.prototype.render = function(instrument) {
  // console.log('hello from render');
  // reset the div element if it exists
  if(event.target.body.querySelector('#infoDiv')){
    const infoDiv = event.target.body.querySelector('#infoDiv');
    infoDiv.parentNode.removeChild(infoDiv);
    // infoDiv.innerHTML = '';
  }
  const infoDiv = document.createElement('div');
  infoDiv.id = "infoDiv";

  const infoHeader = this.createElementandSetValue('h3', instrument.name);
  const infoParagraph = this.createElementandSetValue('p', instrument.description);
  const infoInstrListHeader = this.createElementandSetValue('h4', "Instrument includes:");

  const infoInstrList = this.createInstrumentsList(instrument);

  infoDiv.appendChild(infoHeader);
  infoDiv.appendChild(infoParagraph);
  infoDiv.appendChild(infoInstrListHeader);
  infoDiv.appendChild(infoInstrList);

  this.container.appendChild(infoDiv);
};

module.exports = DisplayInstrumentInfo;
