import React from 'react'
import { List } from 'semantic-ui-react'

const style = {
  root: {
    maxHeight: "80vh",
    overflowY: "auto"
  },
  eventDetails: {
    margin: "1.5rem auto"
  }
}

export class Events extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {

    return (
      <div>
        <h2>Events</h2>
        <List divided relaxed>
          {this.props.events.map((e, i) => (
            <List.Item key={i}>
              <List.Content>
                {e}
              </List.Content>
            </List.Item>
          ))}
        </List>
      </div>
    )
  }
}

export const TransferEvent = (props) => {
  return (
    <div style={style.eventDetails}>
      <h4>{props.name}</h4>
      <p>From: {props.from}</p>
      <p>To: {props.to}</p>
      <p>Value: {props.value.toString()}</p>
    </div>
  )
}

export const ApprovalEvent = (props) => {
  return (
    <div style={style.eventDetails}>
      <h4>{props.name}</h4>
      <p>Owner: {props.owner}</p>
      <p>Spender: {props.spender}</p>
      <p>Value: {props.value.toString()}</p>
    </div>
  )
}

