import React from 'react';


type ClockState = {
    date: Date;
};

class Clock extends React.Component<{},ClockState> {
    timerID: NodeJS.Timer | undefined;
    
    constructor(props:any) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
        if( this.timerID) {
            clearInterval(this.timerID);
        }
    }
  
    tick() {    this.setState({      date: new Date()    });  }
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }  
};

export default Clock;