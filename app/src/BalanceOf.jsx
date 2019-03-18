import React from 'react'
import { Button, Form, Label} from 'semantic-ui-react'

class BalanceOf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {address: '', balance: '0'}
  }

  handleChange = (e) => {
    this.setState({address: e.target.value})
  }

  handleSubmit = async () => {
    console.log(`Fetching balance for ${this.state.address}`)

    // TODO: contract call
    /**
     * Step 5: Finish contract calls
     * For this one you can use this.state.address to get the value
     *
     * Remove the `//` on the lines below when done.
     */
    let balance = null
    // console.log(`Got balance: ${balance.toString()}`)
    // this.setState({balance: balance.toString()})
  }
  
  render () {
    return (
      <div id="balanceOf">
        <Form>
          <Form.Field>
            <input placeholder='address' onChange={this.handleChange}/>
          </Form.Field>
          <Button onClick={this.handleSubmit}>Submit</Button>
        </Form>
        <br/>
        <Label>
          Balance
          <Label.Detail>{this.state.balance}</Label.Detail>
        </Label>
      </div>
    )
  }
}

export default BalanceOf;
