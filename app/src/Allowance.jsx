import React from 'react'
import { Button, Form, Label} from 'semantic-ui-react'

class Allowance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {account: '', allowance: '0'}
  }

  handleAccountChange = (e) => {
    this.setState({account: e.target.value})
  }

  handleSpenderChange = (e) => {
    this.setState({spender: e.target.value})
  }

  handleSubmit = async () => {
    console.log(`Fetching allowance for account: ${this.state.account} spender: ${this.state.spender}`)
    // TODO: contract call
    /**
     * Step 5: Finish contract calls
     * For this one you can use this.state.account and this.state.spender to get the values.
     *
     * Remove the `//` on the lines below when done.
     */
    let allowance = null
    // console.log(`Fetched allowance: ${allowance.toString()}`)
    // this.setState({allowance: allowance.toString(10)})
  }
  
  render () {
    return (
      <div id="allowance">
        <Form>
          <Form.Field>
            <input placeholder='account' onChange={this.handleAccountChange}/>
          </Form.Field>
          <Form.Field>
            <input placeholder='spender' onChange={this.handleSpenderChange}/>
          </Form.Field>
          <Button onClick={this.handleSubmit}>Submit</Button>
        </Form>
        <br/>
        <Label>
          Allowance
          <Label.Detail>{this.state.allowance}</Label.Detail>
        </Label>
      </div>
    )
  }
}

export default Allowance;
