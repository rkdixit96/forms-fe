import 'react-datepicker/dist/react-datepicker.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import moment from 'moment';

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
      onChange: PropTypes.func.isRequired,
    };
    AnswerForm.defaultProps = {
    };
    this.state = {
      answer: '',
    };
    this.onAnswerChange = this.onAnswerChange.bind(this);
  }

  onAnswerChange(event) {
    if (this.props.answerType === 'Date') {
      this.setState({
        answer: event,
      }, () => {
        this.props.onChange(this.props.questionId, this.state.answer);
      });
    } else {
      this.setState({
        answer: event.target.value,
      }, () => {
        this.props.onChange(this.props.questionId, this.state.answer);
      });
    }
  }

  render() {
    return (
      <div className="AnswerForm" >
        {this.props.questionText}
        <div>
          {(this.props.answerType === 'Short Answer') && <InputContainer className="answer-input" value={this.state.answer} maxLength="50" placeholder="Enter answer" onChange={this.onAnswerChange} />}
          {(this.props.answerType === 'Paragraph') && <textarea value={this.state.answer} placeholder="Enter answer" maxLength="256" onChange={this.onAnswerChange} />}
          {(this.props.answerType === 'Date') && <input type="date" value={this.state.answer} onChange={this.onAnswerChange} />}
        </div>
      </div>
    );
  }
}

export default AnswerForm;
