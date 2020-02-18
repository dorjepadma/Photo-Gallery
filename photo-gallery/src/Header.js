import React, { Component } from 'react';

class Header extends Component {
    render () {
        return (
        <header>
             <img src={this.props.pan} alt= "pan"/>
            <h1>Great Horned Beasts of the World </h1>
        </header>
 )
        ;
    }
}
export default Header;