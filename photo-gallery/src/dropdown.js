import React, { Component } from "react";

export default class Selector extends Component 
const hornedBeastNodes = hornedBeastData
.filter (hornedBeast => {
    if (!this.state.selected) return true;
    return hornedBeast.type === this.state.selected;
})
.map(horns =>  <hornedBeast beast={horns} />);
// what does the following do. Where can I read more about the e function? I do not understand the concept of it. 
const handleChange = e => {
    this.setState ({ selected: e.target.value});
};