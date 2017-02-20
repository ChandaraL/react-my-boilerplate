import React from 'react';
import { connect } from 'react-redux';
// Optional
import st from './Dashboard.css';
import {
  Button,
  ButtonToolbar,
  ButtonGroup,
} from 'react-bootstrap';

export class Dashboard extends React.Component {
  componentDidMount() {
  }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <h1>Hello, this is Dashboard</h1>
        <ButtonToolbar>
          <ButtonGroup>
            <Button onClick={() => this.context.router.push('/') } >Goto Home</Button>
          </ButtonGroup>
        </ButtonToolbar>
      </div>
    );
  }
}

// latest way to dispatch
Dashboard.contextTypes = {
  // @see https://github.com/grommet/grommet/issues/441
  router: React.PropTypes.object.isRequired
};

export default connect(
  function (storeState) {
    // store state to props
    return {
    };
  }
)(Dashboard);