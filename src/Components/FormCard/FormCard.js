import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './FormCard.css';

class FormCard extends Component {
  constructor(props) {
    super(props);
    FormCard.propTypes = {
      formId: PropTypes.number,
      formTitle: PropTypes.string,
    };
    FormCard.defaultProps = {
      formId: 0,
      formTitle: 'default',
    };
    this.state = {
      formId: props.formId,
    };
  }
  render() {
    return (
      <div className="form-card-encloser">
        <div className="FormCard">
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
