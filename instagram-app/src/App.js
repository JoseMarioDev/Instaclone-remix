import React, { Component } from 'react';
import './App.scss';
import SearchBar from './components/SearchBar/SearchBar';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}
