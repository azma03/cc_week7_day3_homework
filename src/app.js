const instrumentData = require('./data/instrument_data.js');
const InstrumentFamilies = require('./models/instrument_families.js');
const InputInstrument = require('./views/input_instrument.js');
const DisplayInstrumentInfo = require('./views/display_instrument_info');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const menuItems = document.querySelector('select#instrument-families');
  const inputInstrument = new InputInstrument(menuItems);
  inputInstrument.bindEvents();

  const infoDiv = document.querySelector('body');
  const displayInstrumentInfo = new DisplayInstrumentInfo(infoDiv);
  displayInstrumentInfo.bindEvents();

  const instrumentDataModel = new InstrumentFamilies(instrumentData);  //the order of this instantiation matters. All subscriber objects should be declared before the publishers, otherwise it will not work 
  console.log(instrumentDataModel);
  instrumentDataModel.bindEvents();
});
