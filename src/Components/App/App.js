import React, { Component } from 'react';
import './App.css';

import Header from '../Header/Header';
import Body from '../Body/Body';
import FloatingContainer from '../FloatingContainer/FloatingContainer';
import FormCreator from '../FormCreator/FormCreator';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'Forms',
    };
    this.submitFormOnClick = this.submitFormOnClick.bind(this);
    this.createFormOnClick = this.createFormOnClick.bind(this);
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

  render() {
    if (this.state.page === 'Forms') {
      return (
        <div className="App">
          <Header showButton onClick={this.createFormOnClick} />
          <Body showBody />
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
            Hello
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
