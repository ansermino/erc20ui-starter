import React from 'react'
import { Button, Form, Label } from 'semantic-ui-react'

class TotalSupply extends React.Component {
  constructor(props) {
    super(props);
    this.state = {totalSupply: '0'}
  }

  handleSubmit = async () => {
    console.log(`Fetching total supply.`)
    // TODO: Get totalSupply
    /**
     * Step 3: Contract call
     * Add a call to this.props.contract.totalSupply(). You will need to use the `await` keyword.
     *
     * Remove the `//` on the lines below when done.
     */
    let totalSupply = null
    //console.log(`Got total supply ${totalSupply.toString()}`)
    //this.setState({totalSupply: totalSupply.toString()})
  }

  render () {
    return (
      <div id="totalSupply">
        <Form>
          <Button onClick={this.handleSubmit}>Submit</Button>
        </Form>
        <br/>
        <Label>
          Total Supply
          <Label.Detail>{this.state.totalSupply}</Label.Detail>
        </Label>
        
      </div>
    )
  }
}

export default TotalSupply;
