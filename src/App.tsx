import React from 'react';
import City from './city/City';
import './App.css';

export interface ICity {
  name: string;
  latitude: number;
  longitude: number;
  weather: {
    temperature: string;
    time: number;
    timezone: string;
  };
}

export interface IAppState {
  cities: ICity[];
}

class App extends React.Component<{}, IAppState> {
  state: IAppState = { cities: [] };

  componentDidMount() {
    const socket = new WebSocket('wss://ripley-labs-test.herokuapp.com');
    socket.onmessage = (messageEvent) => {
      var cities = JSON.parse(messageEvent.data);
      this.setState({ cities });
    };
  }

  render () {
    return (
      <div className='App'>
        {this.state.cities.map(c => <City key={c.name} {...c}></City>)}
      </div>
    )
  }
}

export default App;
