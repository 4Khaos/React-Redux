import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Component1 from './Components/Component1';
import Component2 from './Components/Component2';

class App extends React.Component {

  constructor(props)
  {
    super(props);
    this.state = {
      lista: []
    }

    this.updateList = this.updateList.bind(this);
  }

  updateList (newElement){
    this.setState({
      lista: this.state.lista.concat(newElement)
    });
    console.log("lista",this.state.lista);
  }
  render()
  {
    return (
      <div>
        <Component1 setList={this.updateList}/>
        <Component2 todos={this.state.lista}/>
      </div>
    );
  }
}

export default App;
