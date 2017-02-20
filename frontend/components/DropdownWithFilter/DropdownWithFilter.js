import React from 'react';
import { connect } from 'react-redux';
// Optional
import st from './DropdownWithFilter.css';

import {
  DropdownButton,
  Glyphicon,
  InputGroup,
  FormControl,
  MenuItem,
} from 'react-bootstrap';

export class DropdownWithFilter extends React.Component {
  componentDidMount() {
  }

  constructor(props) {
    super(props);
    this.state = {
      filterPattern: null
    };
  }

  onFocusQueryInput(e) {
    e.preventDefault();
    console.log('DropdownWithFilter.js: onFocusQueryInput called');
  }

  onSelect (k, e, o) {
    e.preventDefault();
    console.log('DropdownWithFilter.js: onSelect called => ', 'o=', o);
    if(this.props.onSelect) {
      this.props.onSelect(o);
    }
  }

  dropdownToggle(val) {
    if (this._forceOpen){
      this.setState({ menuOpen: true });
      this._forceOpen = false;
    } else {
      this.setState({ menuOpen: val });
    }
  }

  selectQuery(){
    this._forceOpen = true;
  }

  onChangeFilterInput(e) {
    var val = e.target.value;
    console.log('DropdownWithFilter.js: DropdownWithFilter.onChangeFilterInput called => ', 'val=', val);
    this.setState({
      filterPattern: (!val || /^ *$/.test(val))? null: new RegExp(val.replace(/ +/g, '.*'))
    });
  }

  hasTooManyOptions() {
    return this.props.options && this.props.options.length > 5;
  }

  showFitlerInput() {
    if(!this.hasTooManyOptions()) {
      return null;
    }
    return (
      <MenuItem onSelect={(k, e) => this.selectQuery(k,e)}>
        <InputGroup bsSize="sm">
          <InputGroup.Addon>
            <Glyphicon glyph="search" />
          </InputGroup.Addon>
          <FormControl type="text"
                       placeholder="word1 word2"
                       onChange={ (e) => this.onChangeFilterInput(e) }
            onFocus={(e) => this.onFocusQueryInput(e) } />
        </InputGroup>
      </MenuItem>
    );
  }

  render() {
    var self = this;
    return (
      <div className={`${this.props.className? this.props.className:''} ${st.scroll}`}>
        <DropdownButton title={ this.props.title? this.props.title:'Please select' }
                        open={this.state.menuOpen}
                        className={this.props.className? this.props.className:''}
                        onToggle={val => this.dropdownToggle(val)}
          id="button" >
          {
            this.showFitlerInput()
          }
          {
            (this.props.options || []).filter(function(o) {
              if(!self.state.filterPattern) {
                return true; // no filter at all
              }
              // Executes the search for a match between a regular expression and a specified string. Returns true or false.
              return self.state.filterPattern.test(o.description);
            }).map(function(o) {
              return (
                <MenuItem key={o.code} onSelect={(k,e) => self.onSelect(k, e, o)} eventKey={o.code}>{o.description}</MenuItem>
              );
            })
          }
      </DropdownButton>
        </div>
    );
  }
}

// latest way to dispatch
DropdownWithFilter.contextTypes = {
    // @see https://github.com/grommet/grommet/issues/441
    router: React.PropTypes.object.isRequired
};

export default connect(
  function (storeState) {
    // store state to props
    return {
    };
  }
)(DropdownWithFilter);