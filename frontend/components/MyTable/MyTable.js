import React from 'react';
import { connect } from 'react-redux';
// Optional
import st from './MyTable.css';
import * as Table from 'reactabular-table';

const rows = [
  {id: 100, name: 'John', tools: {hammer: true}, country: 'fi'},
  {id: 101, name: 'Jack', tools: {hammer: false}, country: 'dk'},
  {id: 102, name: 'Jack', tools: {hammer: false}, country: 'dk'},
  {id: 103, name: 'Jack', tools: {hammer: false}, country: 'dk'},
  {id: 104, name: 'Jack', tools: {hammer: false}, country: 'dk'},
  {id: 105, name: 'Jack', tools: {hammer: false}, country: 'dk'},
  {id: 106, name: 'Jack', tools: {hammer: false}, country: 'dk'},
  {id: 107, name: 'Jack', tools: {hammer: false}, country: 'dk'},
  {id: 108, name: 'Jack', tools: {hammer: false}, country: 'dk'},
  {id: 109, name: 'Jack', tools: {hammer: false}, country: 'dk'},
  {id: 110, name: 'Jack', tools: {hammer: false}, country: 'dk'},
  {id: 111, name: 'Jack', tools: {hammer: false}, country: 'dk'},
  {id: 112, name: 'Jack', tools: {hammer: false}, country: 'dk'},
  {id: 113, name: 'Jack', tools: {hammer: false}, country: 'dk'},
  {id: 114, name: 'Jack', tools: {hammer: false}, country: 'dk'},
  {id: 115, name: 'Jack', tools: {hammer: false}, country: 'dk'},
  {id: 116, name: 'Jack', tools: {hammer: false}, country: 'dk'},
  {id: 117, name: 'Jack', tools: {hammer: false}, country: 'dk'},
  {id: 118, name: 'Jack', tools: {hammer: false}, country: 'dk'},
  {id: 119, name: 'Jack', tools: {hammer: false}, country: 'dk'},
  {id: 120, name: 'Jack', tools: {hammer: false}, country: 'dk'},
  {id: 121, name: 'Jack', tools: {hammer: false}, country: 'dk'},
  {id: 122, name: 'Jack', tools: {hammer: false}, country: 'dk'},
  {id: 123, name: 'Jack', tools: {hammer: false}, country: 'dk'},
  {id: 124, name: 'Jack', tools: {hammer: false}, country: 'dk'},
  {id: 125, name: 'Jack', tools: {hammer: false}, country: 'dk'}
];
const countries = {
  fi: 'Finland',
  dk: 'Denmark'
};

const columns = [
  {
    property: 'id',
    header: {
      label: 'ID'
    }
  },
  {
    property: 'name',
    header: {
      label: 'Name',
      transforms: [
        label => ({
          onClick: () => alert(`clicked ${label}`)
        })
      ]
    }
  },
  {
    property: 'tools',
    header: {
      label: 'Active',
      transforms: [
        label => ({
          onClick: () => alert(`clicked ${label}`)
        })
      ]
    },
    cell: {
      formatters: [
        tools => tools.hammer ? 'Hammertime' : 'nope'
      ]
    }
  },
  {
    property: 'country',
    header: {
      label: 'Country',
      transforms: [
        label => ({
          onClick: () => alert(`clicked ${label}`)
        })
      ]
    },
    cell: {
      formatters: [
        country => countries[country]
      ]
    }
  },
];


export class MyTable extends React.Component {
  componentDidMount() {
  }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Table.Provider
         className="table table-striped table-bordered"
         columns={columns} >
        <Table.Header />
        <Table.Body rows={rows} rowKey="id" />
      </Table.Provider>
    );
  }
}

// latest way to dispatch
MyTable.contextTypes = {
    // @see https://github.com/grommet/grommet/issues/441
    router: React.PropTypes.object.isRequired
};

export default connect(
  function (storeState) {
    // store state to props
    return {
    };
  }
)(MyTable);