import React, { Component } from 'react';
import './App.css';
import Appbar from 'muicss/lib/react/appbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';
import TableList from './TableList';

function sortArr(arrData) {
  arrData.sort(function(obj1, obj2) {
    return obj1.value - obj2.value;
  });
  return arrData;
}

const styles = {
  AppBar: {
    backgroundColor: "#00C2DA",
    color: "#ffffff",
  },
  Tap: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  Tabs: {
    marginLeft: 'auto'
  }
};

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'TopGainers',
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  render() {
    return (
      <MuiThemeProvider>
        <Appbar style = {styles.AppBar}>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            tabItemContainerStyle = {{width:'20%'}}
          >
            <Tab label="Top gainers" value="TopGainers" style={styles.Tap}>
              <div>
                <TableList arrData = {this.props.arrData.slice(0 , 8)}/>
              </div>
            </Tab>
            <Tab label="Top losers" value="TopLosers" style={styles.Tap}>
              <div>
                <TableList arrData = {sortArr(this.props.arrData.slice(this.props.arrData.length-8))}/>
              </div>
            </Tab>
          </Tabs>
        </Appbar>
      </MuiThemeProvider>
    );
  }
}

export default App;
