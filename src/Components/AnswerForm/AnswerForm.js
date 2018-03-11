import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AnswerForm.css';

import InputContainer from '../InputContainer/InputContainer';

class AnswerForm extends Component {
  constructor(props) {
    super(props);
    AnswerForm.propTypes = {
      questionText: PropTypes.string.isRequired,
      answerType: PropTypes.string.isRequired,
      isRequired: PropTypes.bool.isRequired,
      questionId: PropTypes.number.isRequired,
    };
    AnswerForm.defaultProps = {
    };
    this.state = {
      answer: '',
    };
    this.onAnswerChange = this.onAnswerChange.bind(this);
  }

  onAnswerChange(event) {
    this.setState({
      answer: event.target.value,
    });
  }


  render() {
    return (
      <div className="AnswerForm" >
        {this.props.questionText}
        {this.props.answerType === 'Short Answer' && <InputContainer value={this.state.answer} placeholder="Enter answer" onChange={this.onAnswerChange} />}
        {this.props.answerType === 'Paragraph' && <textarea value={this.state.answer} placeholder="Enter answer" onChange={this.onAnswerChange} />}
        {this.props.answerType === 'Date' && <div> Select Date </div> }
      </div>
    );
  }
}

export default AnswerForm;
