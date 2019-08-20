import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';

export default function Home(props) {
  return (
    <div>
      <h1>Avengers Database</h1>
      <h4>Danger! This is classified information!</h4>
      <Button animated>
        <Button.Content visible><Link to="/avengers">Enter</Link></Button.Content>
        <Button.Content hidden>
          <Icon name="arrow right" />
        </Button.Content>
      </Button>
    </div>
  )
}

