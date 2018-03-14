import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './QuestionResponse.css';


class QuestionResponse extends Component {
  constructor(props) {
    super(props);
    QuestionResponse.propTypes = {
      answers: PropTypes.arrayOf.isRequired,
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
    return this.props.answers.map((answer, index) => <tr className={index % 2 === 0 ? 'even' : 'odd'}>{answer.answer} </tr>);
  }


  render() {
    return (
      <div className="question-response-container">
        <div className="response-question">
          {this.props.questionText}
        </div>
        Last 7 responses
        <div>
          <table className="resp-table">
            {this.populateAnswers()}
          </table>
        </div>
      </div>
    );
  }
}

export default QuestionResponse;
