import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Snap from 'snapsvg-cjs';
// import logo from './logo.svg';

class SVGView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      box: null,
      conveyor: null,
      machine: null
    };
  }

  touchTap(e) {
    console.log(`(${e.nativeEvent.offsetX}, ${e.nativeEvent.offsetY})`);
  }

  componentDidMount() {
    let base = ReactDOM.findDOMNode(this);
    let svg = Snap(base);

    let bg = svg.group();
    let boxGroup = svg.group();
    let conveyorGroup = svg.group();

    boxGroup.transform('t-50, -45');
    conveyorGroup.transform('t10, 80');

    let circle = bg.circle(200, 200, 200);
    circle.attr({
      fill: '#39be7a',
      x: 300
    });

    let box = Snap.load('sm_box.svg', (fragment) => {
      boxGroup.append(fragment);
    });
    let conveyor = Snap.load('sm_conv.svg', (fragment) => {
      conveyorGroup.append(fragment);
    });

    //boxGroup.attr({ mask: bg });

    this.setState({
      box: boxGroup,
      conveyor: conveyorGroup
    });
  }

  render() {
    return (
      <svg height='400px' width='400px' onClick={this.touchTap}></svg>
    );
  }
}

export default SVGView;
