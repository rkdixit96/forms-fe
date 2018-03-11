import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Header.css';

import HeaderButton from '../HeaderButton/HeaderButton';

class Header extends Component {
  constructor(props) {
    super(props);
    Header.propTypes = {
      showButton: PropTypes.bool,
      onClick: PropTypes.func.isRequired,
    };
    Header.defaultProps = {
      showButton: false,
    };
    this.state = {
    };
  }
  render() {
    return (
      <div className="Header" >
        {this.props.showButton && <HeaderButton label="CREATE FORM" onClick={this.props.onClick} />}
      </div>
    );
  }
}

export default Header;
