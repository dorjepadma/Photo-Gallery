import React, { Component } from 'react';

export default class hornedBeast extends Component {
    render() {
        return <li>
            <div className="info-container">
                <h2>{this.props.beast.name}</h2>
                <p className="beast-type">{this.props.beast.type}</p>
            </div>
            <div className="image-container">
                <img
                alt={this.props.beast.url}
                src={this.props.beast.url} />
            </div>
            <p className="horns">{this.props.beast.horns}</p>
        </li>
    }
}



