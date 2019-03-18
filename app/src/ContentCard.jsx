import React from 'react'
import TotalSupply from './TotalSupply.jsx'
import { Card, Icon, Image } from 'semantic-ui-react'

const style = {
  root: {
    width: "100%"
  },
  card: {
    width: "90%",
    margin: "1rem"
  }
}
class ContentCard extends React.Component {
  render () {
    return (
      <div style={style.root}>
        <Card style={style.card}>
          <Card.Content>
            <Card.Header>{ this.props.title }</Card.Header>
          </Card.Content>
          <Card.Content>
            { this.props.content }
          </Card.Content>
        </Card>
      </div>
    )
  }
}

export default ContentCard;
