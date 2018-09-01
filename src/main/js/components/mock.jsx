import React from 'react';

import mockImage from '../../assets/images/mock.jpg';

const STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal',
};

export default class Mock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      class: STATUS.NORMAL,
    };

    this._onMouseEnter = this._onMouseEnter.bind(this);
    this._onMouseLeave = this._onMouseLeave.bind(this);
  }

  _onMouseEnter() {
    this.setState({class: STATUS.HOVERED});
  }

  _onMouseLeave() {
    this.setState({class: STATUS.NORMAL});
  }

  render() {
    return (
      <div className={this.state.class}>
        <img
          src={mockImage}
          alt='Mock Application Image'
          onMouseEnter={this._onMouseEnter}
          onMouseLeave={this._onMouseLeave}/>
      </div>
    );
  }
};
