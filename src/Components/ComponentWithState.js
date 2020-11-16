import React, {Component} from 'react'
import Button from '@material-ui/core/Button'

class ComponentWithState extends Component {
    constructor(){
        super()
        this.addToCounter = this.addToCounter.bind(this)
        this.state = {
            counter: 0
        }
    }

    addToCounter(){
        this.setState({
            counter: this.state.counter+1
        })
    }

    render() {
      return(    
            <div>
                <h1>Hello</h1>
                <h1>This is the counter {this.state.counter}</h1>
                <Button variant="contained" 
                        color="secondary"
                        onClick={this.addToCounter}>
                    Add one to counter
                </Button>
            </div>
            )
    }
  }

  export default ComponentWithState;