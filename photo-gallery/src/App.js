import React, { Component } from "react";
import HornedBeast from "./imageList";
import hornedBeastData from "../src/imageItem.js";
import Header from "../src/Header.js";
import pan from './assets/pan.jpg';
import "./App.css";

export default class App extends Component {
state = { selected: null };

render () {
    const hornedBeast = hornedBeastData
    .filter (hornedBeast => {
        if (!this.state.selected) return true;
        return hornedBeast.type === this.state.selected;
    })
    .map(horns =>  <HornedBeast beast={horns} />);

    const handleChange = e => {
        this.setState ({ selected: e.target.value});
    };

    return (
        <>
            <Header pan={pan}/>
           
       
                <main>
               <section className="options">
                   <select className="beast-type" onChange={handleChange}/>
                   <option value="" defaultValue>
                       All Beast
                   </option>
               </section>
               <section className="list-section">
                   <ul className="hornedBeast">{hornedBeast}> </ul>
               </section>
               </main>
               </>
           )
    }}
