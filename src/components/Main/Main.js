import React, { Component, PropTypes } from 'react';
import MainMenu from '../MainMenu'
export default class Main extends Component{
  render(){
    return (
      <div>
        <p>Main to todos</p>
        <MainMenu></MainMenu>
      </div>
      )
  }
}
