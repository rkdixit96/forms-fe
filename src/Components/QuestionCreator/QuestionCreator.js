import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './QuestionCreator.css';

import InputContainer from '../InputContainer/InputContainer';
import DeleteButton from '../DeleteButton/DeleteButton';
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
      onDelete: PropTypes.func.isRequired,
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
    this.deleteHandler = this.deleteHandler.bind(this);
  }


  componentWillReceiveProps(nextProps) {
    // console.log(nextProps.questionText, this.props.questionText);
    if (nextProps.questionText !== this.props.questionText) {
      console.log('new props');
      this.setState({
        questionText: nextProps.questionText,
        questionNumber: nextProps.questionNumber,
        answerType: nextProps.answerType,
        isRequired: nextProps.isRequired,
      });
    }
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

  deleteHandler() {
    this.props.onDelete(this.props.questionNumber);
  }

  render() {
    // console.log('question creater: ', this.state.questionText, this.props.questionText);
    return (
      <div className="QuestionCreator">
        <div className="question-container">
          <InputContainer className="question-input" value={this.state.questionText} placeholder="Enter your question" onChange={this.onInputChange} />
          <DropDown value={this.state.answerType} onChange={this.onAnswerTypeChange} />
        </div>
        <div className="checkbox">
          <DeleteButton onClick={this.deleteHandler} />
          <div>
            <input type="checkbox" value="Required" checked={this.state.isRequired} onChange={this.onIsRequiredChange} />
            <small>Required</small>
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionCreator;
