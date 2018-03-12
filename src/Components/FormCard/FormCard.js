import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './FormCard.css';


class FormCard extends Component {
  constructor(props) {
    super(props);
    FormCard.propTypes = {
      formId: PropTypes.number,
      formTitle: PropTypes.string,
      onClick: PropTypes.func.isRequired,
      onResponseClick: PropTypes.func.isRequired,
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
    this.responseHandler = this.responseHandler.bind(this);
  }

  clickHandler() {
    this.props.onClick(this.state.formId, this.state.formTitle);
  }

  responseHandler() {
    axios.get(`/answers/${this.state.formId}`).then((questionAnswers) => {
      this.props.onResponseClick(this.state.formTitle, questionAnswers.data.result[0].questions);
    });
  }

  render() {
    return (
      <div className="form-card-encloser">
        <div className="FormCard" onClick={this.clickHandler}>
          {this.props.formTitle}
        </div>
        <div className="response-link" onClick={this.responseHandler}>
          Responses
        </div>
      </div>

    );
  }
}

export default FormCard;
