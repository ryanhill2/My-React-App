import React, {Component} from 'react'
import Button from '@material-ui/core/Button';

class MyClassComponent extends Component {
    constructor() {
        super();
        this.nameClickFunction = this.nameClickFunction.bind(this);
        this.state = {
            counter: 0
        };
      }

        nameClickFunction() {
            this.setState({
                counter: this.state.counter+1
              })
      }

    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.counter}</h2>  
          <Button variant="contained"
                onClick={this.nameClickFunction}>
                Click Me
          </Button>
        </div>
      );
    }
  }

  export default MyClassComponent;