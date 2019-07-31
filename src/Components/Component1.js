import React from 'react';
import Component2 from './Component2'
//import './Component1.css';

class Component1 extends React.Component {

  constructor(props)
  {
    super(props);
    this.state = {
      texto: "",
      todos: []
    }

    this.textoDigitado = this.textoDigitado.bind(this);
    this.guardarToDo = this.guardarToDo.bind(this);
  }

  textoDigitado(e){
    console.log("Texto ingresado: ", e.target.value);
    this.setState({
      texto: e.target.value
    })
  }

  guardarToDo(e) {
    console.log("Le di click");
    this.setState({
      texto: "",
      todos: this.state.todos.concat(this.state.texto)
    });
    this.props.setList(this.state.texto);
  }
  render() {
    return(
      <div>
        <input type="text" onChange={this.textoDigitado} value={this.state.texto}/>
        <button type="button" onClick={this.guardarToDo}>Click Me!</button>
      </div>
    )
  }
}

export default Component1;
