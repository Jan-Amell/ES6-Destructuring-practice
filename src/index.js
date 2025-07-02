import animals from "./data";

console.log(animals);

const [cat, dog] = animals;

const { name: catName, sound: catSound } = cat;

import cars from "./practice";

console.log(cars);

const [honda, tesla] = cars;

const {
  speedStats: { topSpeed: teslaTopSpeed, zeroToSixty: teslaZeroToSixty },
  coloursByPopularity: [teslaTopColour],
} = tesla;

const {
  speedStats: { topSpeed: hondaTopSpeed, zeroToSixty: hondaZeroToSixty },
  coloursByPopularity: [hondaTopColour],
} = honda;

import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Colour</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
