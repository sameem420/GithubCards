import React from 'react';
import './App.css';
import CardList from './components/CardList';
import Axios from 'axios';

class App extends React.Component {
  state = {
    userName: '',
    profiles : []
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await Axios.get(`https://api.github.com/users/${this.state.userName}`);
    const data = [...this.state.profiles, resp.data];
    this.setState({profiles : data});
  }
  render(){
  return (
    <div className="App">
      <h1>GitHub Cards App</h1>
      <form onSubmit={this.handleSubmit} className="inputForm">
        <input 
          type="text" 
          placeholder="GitHub Username"
          className="material" 
          value={this.state.userName}
          onChange={event => this.setState({ userName : event.target.value })}
          required 
        />
        <button>Add</button>
      </form>
      <CardList profiles={this.state.profiles}/>
    </div>
  );}
}

export default App;
