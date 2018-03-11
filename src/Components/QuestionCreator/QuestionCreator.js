import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './QuestionCreator.css';

import InputContainer from '../InputContainer/InputContainer';
import DropDown from '../DropDown/DropDown';

class QuestionCreator extends Component {
  constructor(props) {
    super(props);
    QuestionCreator.propTypes = {
      questionNumber: PropTypes.number.isRequired,
      questionText: PropTypes.string.isRequired,
      answerType: PropTypes.string.isRequired,
      isRequired: PropTypes.bool.isRequired,
      onChange: PropTypes.func.isRequired,
    };
    QuestionCreator.defaultProps = {

    };
    this.state = {
      questionText: props.questionText,
      questionNumber: props.questionNumber,
      answerType: props.answerType,
      isRequired: props.isRequired,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onAnswerTypeChange = this.onAnswerTypeChange.bind(this);
    this.onIsRequiredChange = this.onIsRequiredChange.bind(this);
  }

  onIsRequiredChange(event) {
    this.setState({
      isRequired: event.target.checked,
    }, () => {
      this.props.onChange(this.state.questionNumber, 'isRequired', this.state.isRequired);
    });
  }

  onInputChange(event) {
    this.setState({
      questionText: event.target.value,
    }, () => {
      this.props.onChange(this.state.questionNumber, 'questionText', this.state.questionText);
    });
  }

  onAnswerTypeChange(event) {
    this.setState({
      answerType: event.target.value,
    }, () => {
      this.props.onChange(this.state.questionNumber, 'answerType', this.state.answerType);
    });
  }

  render() {
    return (
      <div className="QuestionCreator">
        <InputContainer value={this.state.questionText} placeholder="Enter your question" onChange={this.onInputChange} />
        <DropDown value={this.state.answerType} onChange={this.onAnswerTypeChange} />
        <input type="checkbox" value="Required" checked={this.state.isRequired} onChange={this.onIsRequiredChange} />
      </div>
    );
  }
}

export default QuestionCreator;
