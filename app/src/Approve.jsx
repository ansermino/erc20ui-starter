import React from 'react'
import { Button, Form } from 'semantic-ui-react'

class Approve extends React.Component {
  constructor(props) {
    super(props);

    this.state = {spender: '', amount: 0}
  }

  handleAddressChange = (e) => {
    this.setState({spender: e.target.value})
  }

  handleAmountChange = (e) => {
    this.setState({amount: parseInt(e.target.value)})
  }

  handleSubmit = async () => {
    console.log(`Submitting approval for ${this.state.spender} to spend ${this.state.amount}`)

    // TODO: contract call
    /**
     * Step 5: Finish contract calls
     * For this one you can use this.state.spender and this.state.amount to get the values.
     *
     * Remove the `//` on the lines below when done.
     */

    //console.log(`Submitted approval.`)
  }
  
  render () {
    return (
      <div id="transfer">
        <Form>
          <Form.Field>
            <input placeholder='spender address' onChange={this.handleAddressChange}/>
          </Form.Field>
          <Form.Field>
            <input placeholder='amount' type='number' onChange={this.handleAmountChange}/>
          </Form.Field>
          <Button type='submit' onClick={this.handleSubmit}>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default Approve;
