import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './FormCard.css';

class FormCard extends Component {
  constructor(props) {
    super(props);
    FormCard.propTypes = {
      formId: PropTypes.number,
      formTitle: PropTypes.string,
      onClick: PropTypes.func.isRequired,
    };
    FormCard.defaultProps = {
      formId: 0,
      formTitle: 'default',
    };
    this.state = {
      formId: props.formId,
      formTitle: props.formTitle,
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.props.onClick(this.state.formId, this.state.formTitle);
  }

  render() {
    return (
      <div className="form-card-encloser">
        <div className="FormCard" onClick={this.clickHandler}>
          {this.props.formTitle}
        </div>
        <div className="response-link">
          Responses
        </div>
      </div>

    );
  }
}

export default FormCard;
