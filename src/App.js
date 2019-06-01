import React from 'react';
import Column from './Column/Column';
import './App.css';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      field : [
        [0, 0, 0, 0, 0, 1 ],
        [0, 0, 0, 0, 1, 2 ],
        [0, 0, 0, 1, 2, 1 ],
        [0, 0, 0, 2, 1, 2 ],
        [0, 0, 0, 0, 0, 0 ],
        [0, 0, 0, 0, 0, 0 ],
        [0, 0, 0, 0, 0, 0 ]
      ],
      currentPlayer : 1
    };
    this.makeMove = this.makeMove.bind(this);
  }

  makeMove(column){
    const newField = [...this.state.field]
    const player = this.state.currentPlayer;
    newField[column] = [
      player, player, player, player, player, player
    ]
    const newPlayer = this.state.currentPlayer === 1 ? 2 : 1;
    this.setState({
      field : newField,
      currentPlayer : newPlayer
    })
  }
  render(){
    
    return (
      <div className="table">
        {this.state.field.map((el, i) => {
          return <Column values = {el} idx = {i} onPress = {this.makeMove}></Column>
        })}
      </div>
    );
  }
}

export default App;
