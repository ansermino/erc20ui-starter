import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'

import Card from './ContentCard.jsx'
import TotalSupply from './TotalSupply.jsx'
import BalanceOf from './BalanceOf.jsx'
import Transfer from './Transfer.jsx'
import TransferFrom from './TransferFrom'
import Approve from './Approve'
import Allowance from './Allowance'
import { Events, TransferEvent, ApprovalEvent } from './Events'

const ethers = require('ethers')
const abi = require('./ERC20.json').abi
// TODO: set this to contract address
// ERC20 contract address, from truffle output
const contractAddress = '0xBEBa64869ea93678F6a71AFE1922d1848fD12141'



const style = {
  root: {
    display: "grid",
    gridTemplateColumns: "1fr 4fr 1fr",
    marginTop: "2rem"
  },
  header: {
    margin: "1.5rem 1rem"
  },
  components: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(50%, 1fr))",
    justifyItems: "center"
  },
  rightPane: {
    borderLeft: "1px solid #d4d4d5"
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {metaMaskEnabled: false, contract: null, events: []}

  }

  enableMetaMask = async () => {
    try {
      if (typeof window.ethereum === 'undefined') {
        alert('Looks like you need a Dapp browser to get started.')
      } else {
        await window.ethereum.enable()
          .then((accounts) => {
            if (window.ethereum.networkVersion === '1') {
              alert('Do you really want to use mainnet?')
            } else {
              this.setState({metaMaskEnabled: true})
              this.createContractInstance()
            }
          })
          .catch((reason) => {
            console.log(`Could not enable metamask: ${reason}`)
          })
      }
    } catch (err) {
      console.log(err);
    }
  }

  addEvent = (type, evt) => {
    if (type === 'Transfer') {
      let events = this.state.events
      events.push(<TransferEvent name={'Transfer Event'} {...evt}/>)
      this.setState({ events: events })
    } else if (type === 'Approval') {
      let events = this.state.events
      events.push(<ApprovalEvent name={'Approval Event'} {...evt}/>)
      this.setState({ events: events })
    }
  }
  createContractInstance = () => {
    // TODO: Connect to provider
    /**
     * Step 1: Setup provider
     */
    const provider = null

    /**
     * Step 2: Connect to contract
     * Don't forget to set the contract address at the top!
     */
    const signer = null
    const contract = null
    // TODO: Add event listeners
    /**
     * Step 4: Add event listeners
     */

    this.setState({contract: contract})
  }

  render() {
    this.components = [
      {component: <TotalSupply contract={this.state.contract} />, title: 'Total Supply' },
      {component: <BalanceOf contract={this.state.contract} />, title: 'Balance Of'},
      {component: <Transfer contract={this.state.contract} />, title: 'Transfer'},
      {component: <TransferFrom contract={this.state.contract} />, title: 'TransferFrom'},
      {component: <Approve contract={this.state.contract} />, title: 'Approve'},
      {component: <Allowance contract={this.state.contract} />, title: 'Allowance'},
    ]

    if(this.state.metaMaskEnabled) {
      return (
        <div className="App" style={style.root}>
          <div></div>
          <main>
            <h1 style={style.header}>ERC-20</h1>
            <Grid columns='equal'>
              <Grid.Column style={style.components}>
                {this.components.map((c, i) => <Card key={i} title={c.title} content={c.component} contract={this.state.contract}/>)}
              </Grid.Column>
              <Grid.Column width={5} style={style.rightPane}>
                <Events events={this.state.events} />
              </Grid.Column>
            </Grid>
          </main>
          <div></div>
        </div>
      );
    } else {
      this.enableMetaMask()
      return (
        <p>MetMask is not enabled</p>
      )
    }

  }
}

export default App;
