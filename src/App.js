import React from 'react';
import './App.css';

class App extends React.Component {
  state={
    hide:"show",
      show:false
  }
  show(){
    switch (this.state.show){
        case true:
            this.setState({show: false, hide:"show"})
           break;
        case false:
            this.setState({show: true, hide:"hide"})
            break;
    }

    }
    render(){
        return (
            <div className="App">
                <button onClick={this.show.bind(this)}>Click Me to {this.state.hide}</button>
                {
                    this.state.show ?      <h2>Hello CircleCI!</h2>: null
                }

            </div>
        );

    }

}

export default App;
