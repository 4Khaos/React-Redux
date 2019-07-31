import React from 'react';

class Component2 extends React.Component{

  constructor(props)
  {
    super(props);
    console.log("Props", this.props.todos);
  }

  componentWillMount(){
    console.log("se va a montar");
  }

  componentDidMount()
  {
    console.log("se monto");
  }


  render() {
    return(
      <ul>
        {
          this.props.todos.map((item, index) => <li key={index}>{item}</li> )
        }
      </ul>
    )
  }
}

export default Component2;
