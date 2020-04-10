import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { store } from './reducers/index'
import Header from './components/Header';
import ErrorPage from './components/Error';
import Greetings from './pages/Greetings';
import Weather from './pages/Weather';



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Route exact path='/' component={Greetings}/>
          <Route path='/weather/:place' component={Weather}/>
          <Route exact path='/error' component={ErrorPage} />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
