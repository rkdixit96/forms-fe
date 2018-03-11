import React, { Component } from 'react';
import './App.css';

import Header from '../Header/Header';
import Body from '../Body/Body';
import FloatingContainer from '../FloatingContainer/FloatingContainer';
import FormCreator from '../FormCreator/FormCreator';
import AnswerFormContainer from '../AnswerFormContainer/AnswerFormContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'Forms',
      answerFormId: 999,
      answerFormName: '',
    };
    this.submitFormOnClick = this.submitFormOnClick.bind(this);
    this.createFormOnClick = this.createFormOnClick.bind(this);
    this.selectFormOnClick = this.selectFormOnClick.bind(this);
  }

  createFormOnClick() {
    this.setState({
      page: 'CreateForm',
    });
  }

  submitFormOnClick() {
    this.setState({
      page: 'Forms',
    });
  }

  selectFormOnClick(formId, title) {
    this.setState({
      page: 'Answer',
      answerFormId: formId,
      answerFormName: title,
    });
  }

  render() {
    if (this.state.page === 'Forms') {
      return (
        <div className="App">
          <Header showButton onClick={this.createFormOnClick} />
          <Body showBody onClick={this.selectFormOnClick} />
        </div>
      );
    }
    if (this.state.page === 'CreateForm') {
      return (
        <div className="App">
          <Header />
          <FloatingContainer >
            <FormCreator onSubmit={this.submitFormOnClick} />
          </FloatingContainer>
          <Body />
        </div>
      );
    }
    if (this.state.page === 'Answer') {
      return (
        <div className="App">
          <Header />
          <FloatingContainer >
            <AnswerFormContainer formId={this.state.answerFormId} title={this.state.answerFormName} />
          </FloatingContainer>
          <Body />
        </div>
      );
    }
    return (
      <div>
        You cannot break my app!
      </div>
    );
  }
}

export default App;
