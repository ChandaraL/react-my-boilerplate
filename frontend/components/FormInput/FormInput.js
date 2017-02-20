import React from 'react';
import {FormGroup, FormControl, ControlLabel, Col} from 'react-bootstrap';
import { Control, Errors, Field } from 'react-redux-form';

export default class FormInput extends React.Component {
  getFormControlWidth() {
    return 12 - this.getLabelWidth();
  }

  getLabelWidth() {
    return this.props.labelWidth? this.props.labelWidth: 2;
  }

  showErrors(field) {
    console.log('FormInput.js: FormInput.showErrors called => ', 'field=', field);
    return field.touched && !field.focus;
  }

  render() {
    // please use '<input>' instead of 'FormControl', react-redux-form problem
    return (
      <FormGroup>
        <Col sm={ this.getLabelWidth() }>
          <ControlLabel>
            {this.props.children}
          </ControlLabel>
        </Col>
        <Col sm={ this.getFormControlWidth() }>
          <Field model={this.props.model}>
            <input
              className="form-control"
              type={this.props.type?this.props.type:'text'}
              autoFocus={this.props.autoFocus} />
          </Field>
          <small>
            <Errors model={this.props.model} messages={this.props.messages} show={this.showErrors} />
            {
              this.props.extraModel? <Errors model={this.props.extraModel} messages={this.props.messages} show={this.showErrors} />:null
            }
          </small>
        </Col>
      </FormGroup>
    );
  }
}