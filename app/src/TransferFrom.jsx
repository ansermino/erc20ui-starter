import React from 'react'
import { Button, Form } from 'semantic-ui-react'

class TransferFrom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {to: '', from: '', amount: 0}
  }

  handleFromAddressChange = (e) => {
    this.setState({from: e.target.value})
  }

  handleToAddressChange = (e) => {
    this.setState({to: e.target.value})
  }

  handleAmountChange = (e) => {
    this.setState({amount: parseInt(e.target.value)})
  }

  handleSubmit = () => {
    console.log(`Submitting transferTo from ${this.state.from} to ${this.state.to} for ${this.state.amount}`)

    // TODO: contract call
    /**
     * Step 5: Finish contract calls
     * For this one you can use this.state.from, this.state.to and this.state.amount to get the values.
     *
     * Remove the `//` on the line below when done.
     */

    //console.log(`transferFrom submitted.`)
  }
  
  render () {
    return (
      <div id="transfer">
        <Form>
          <Form.Field>
            <input placeholder='from address' onChange={this.handleFromAddressChange}/>
          </Form.Field>
          <Form.Field>
            <input placeholder='to address' onChange={this.handleToAddressChange}/>
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

export default TransferFrom;
