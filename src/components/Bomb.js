// Bomb Component Code Goes Here
import React from 'react';

export default class Bomb extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      secondsLeft: props.initialCount
    };
  };

  render(){
    return(
      <p>{didIBlowYet(this.state.secondsLeft)}</p>
    )
  }
};

function didIBlowYet(tickTock){
  if (tickTock>0){
    return `${tickTock} seconds left before I go boom!`
  }else if (tickTock===0){
    return "Boom!"
  }
};
