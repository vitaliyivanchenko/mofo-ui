import React from "react";
import { render } from "react-dom";

// Components

import { TabSwitcher, RadioFilter } from "./exports.js";

const App = React.createClass({
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});

let radioOptions = [
  {
    value: `featured`,
    label: `Featured Projects`
  },
  {
    value: `date_updated`,
    label: `Recently Updated`
  },
  {
    value: `date_created`,
    label: `Recently Added`
  },
  {
    value: `active`,
    label: `Most Active`
  },
  {
    value: `contributors`,
    label: `Most Contributors`
  }
];

function handleRadioChange(choice) {
  console.log(`radioChange: ${choice}`);
}

render((
  <App>
    <h1>Mofo UI</h1>

    <h3>RadioFilter</h3>

    <RadioFilter options={radioOptions} initialChoice={`date_created`} onChange={handleRadioChange}></RadioFilter>
  </App>
), document.querySelector(`#app`));


//   <h3>TabSwitcher</h3>
//
//   <h4>Hero Variant</h4>
//
//   <TabSwitcher baseURL={`/style-guide/hero-tabs/`} initialTab={`schedule`}>
//     <div slug="about" name="About" iconDefault="/assets/img/icon-tab-overview.svg" iconActive="/assets/img/icon-tab-overview-blue.svg">About content.</div>
//     <div slug="schedule" name="Schedule" iconDefault="/assets/img/icon-tab-schedule.svg" iconActive="/assets/img/icon-tab-schedule-blue.svg">Schedule content.</div>
//     <div slug="projects" name="Projects" iconDefault="/assets/img/icon-tab-projects.svg" iconActive="/assets/img/icon-tab-projects-blue.svg">Projects content.</div>
//   </TabSwitcher>
//
//   <h4>Inline Variant (.inline)</h4>
//
//   <TabSwitcher baseURL={`/style-guide/variant-tabs/`} initialTab={`one`}>
//     <div slug="one" name="One" iconDefault="/assets/img/icon-tab-overview-blue.svg">One content.</div>
//     <div slug="two" name="Two" iconDefault="/assets/img/icon-tab-overview-blue.svg">Two content.</div>
//     <div slug="three" name="Three" iconDefault="/assets/img/icon-tab-overview-blue.svg">Three content.</div>
//     <div slug="four" name="Four" iconDefault="/assets/img/icon-tab-overview-blue.svg">Four content.</div>
//   </TabSwitcher>
