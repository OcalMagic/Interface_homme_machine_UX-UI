import React, {Component} from 'react';
import {Header} from './header';
import {MainPage} from './mainPage';
import Radium from 'radium';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%'
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  }
};

@Radium
export class Main extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Header/>
        <main style={styles.main}>
          <MainPage/>
        </main>
      </div>
    );
  }
}
