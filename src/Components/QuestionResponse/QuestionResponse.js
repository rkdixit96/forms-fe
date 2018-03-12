import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './QuestionResponse.css';


class QuestionResponse extends Component {
  constructor(props) {
    super(props);
    QuestionResponse.propTypes = {
      answers: PropTypes.array.isRequired,
      questionText: PropTypes.string,

    };
    QuestionResponse.defaultProps = {
      questionText: 'default',

    };
    this.state = {
    };

    this.populateAnswers = this.populateAnswers.bind(this);
  }

  populateAnswers() {
    return this.props.answers.map(answer => <div>{answer.answer} </div>);
  }


  render() {
    return (
      <div className="form-container-enclose">
        {this.props.questionText}
        <div className="QuestionResponse">
          {this.populateAnswers()}
        </div>
      </div>
    );
  }
}

export default QuestionResponse;
