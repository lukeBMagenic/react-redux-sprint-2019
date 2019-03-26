import React, { Component } from 'react';
import './Loop.scss';

class Loop extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
  }

  showNumbers = () => {
    let numbers = ""
    for(let i = 1; i <= this.props.number; i++)
    {
      numbers += " " + i;
    }
    return numbers;
  }

  render() {
    return (
      <div>
        {this.showNumbers()}
      </div>
    );
  }
}

export default Loop;
