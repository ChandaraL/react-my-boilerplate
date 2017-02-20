import React from 'react';
import { connect } from 'react-redux';
// Optional
import st from './Home.css';
import {
  Button,
  ButtonToolbar,
  ButtonGroup,
} from 'react-bootstrap';

import DropdownWithFilter from 'DropdownWithFilter/DropdownWithFilter.js';
import MyTable from 'MyTable/MyTable.js';
import MyModal from 'MyModal/MyModal.js';

export class Home extends React.Component {
  componentDidMount() {
    console.log('hello world');
  }

  constructor(props) {
    super(props);
    this.state = {
      entities: [
        {code:'1', description: 'aaaaaaaaa'},
        {code:'2', description: 'bbbbbbbbb'},
        {code:'3', description: 'hello world'},
        {code:'4', description: 'bye world'},
        {code:'5', description: 'this is a test world'},
        {code:'6', description: 'fffffffff'},
        {code:'7', description: 'ggggggggg'},
        {code:'8', description: 'hhhhhhhhh'},
        {code:'9', description: 'iiiiiiiii'},
        {code:'10', description: 'jjjjjjjjj'},
        {code:'11', description: 'aaaaaaaaa'},
        {code:'12', description: 'bbbbbbbbb'},
        {code:'13', description: 'hello world'},
        {code:'14', description: 'bye world'},
        {code:'15', description: 'this is a test world'},
        {code:'16', description: 'fffffffff'},
        {code:'17', description: 'ggggggggg'},
        {code:'18', description: 'hhhhhhhhh'},
        {code:'19', description: 'iiiiiiiii'},
        {code:'20', description: 'jjjjjjjjj'}
      ]
    };
  }

  showMyModal() {
    console.log('showMyModal called');
    this.props.dispatch({
      type: 'EVT_SHOW_MY_MODAL',
      showMyModal: true
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, this is Home</h1>
        <ButtonToolbar>
          <ButtonGroup>
            <Button onClick={() => this.context.router.push('/dashboard') } >Goto Dashboard</Button>
          </ButtonGroup>
          <ButtonGroup>
            <DropdownWithFilter options={this.state.entities} />
          </ButtonGroup>
          <ButtonGroup>
            <Button onClick={this.showMyModal.bind(this) } >Show my modal</Button>
          </ButtonGroup>
        </ButtonToolbar>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <MyTable />
            </div>
          </div>
        </div>
        <MyModal />
      </div>
    );
  }
}

// latest way to dispatch
Home.contextTypes = {
    // @see https://github.com/grommet/grommet/issues/441
    router: React.PropTypes.object.isRequired
};

export default connect(
  function (storeState) {
    // store state to props
    return {
    };
  }
)(Home);