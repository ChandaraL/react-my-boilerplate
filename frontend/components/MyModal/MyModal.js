import React from 'react';
import {connect} from 'react-redux';
import { LocalForm, Control } from 'react-redux-form';
import FormInput from 'FormInput/FormInput.js';

function validatorRequired(val) {
  return val && val.length > 0;
}

function validatorAlphaNumeric(val) {
  return /^[a-zA-Z0-9]+$/.test(val);
}

import {
  Button,
  Input,
  Modal,
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Form,
  Col,
} from 'react-bootstrap';


export class MyModal extends React.Component {
  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
    this.save = this.save.bind(this);
    this.formValidators = {
      userName: { required: validatorRequired, alphaNumeric: validatorAlphaNumeric },
      password: { required: validatorRequired }
    };
  }

  close() {
    this.props.dispatch({
      type: 'EVT_SHOW_MY_MODAL',
      showMyModal: false
    });
  }

  save(values) {
    console.log('MyModal.js: MyModal.save called => ', 'values=', values);
    this.close();
  }

  render() {
    const { error, handleSubmit, pristine, submitting } = this.props;
    return (
      // <Modal show={this.props.showMyModal} onHide={ this.close }>
      //   <Form onSubmit={ handleSubmit(this.save) } horizontal>
      //     <Modal.Header closeButton>
      //       <Modal.Title>Add bookmark</Modal.Title>
      //     </Modal.Header>
      //     <Modal.Body>
      //       <Field name="theName"
      //              horizontal
      //              autoFocus
      //              labelWidth={2}
      //              placeholder="Please enter name"
      //              component={InputText}
      //              validate={[validatorRequired, validatorAlphaNumeric]}>
      //         Name *
      //       </Field>
      //       <hr />
      //     </Modal.Body>
      //     <Modal.Footer>
      //       <Button onClick={ this.close } >Close</Button>
      //       <Button type="submit" disabled={ error || submitting}>Save</Button>
      //     </Modal.Footer>
      //   </Form>
      // </Modal>
      <Modal show={this.props.showMyModal} onHide={ this.close }>
        <LocalForm model="user"
                   validators={this.formValidators}
                   onSubmit={this.save}
                   className="form-horizontal">
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormInput
              type="text"
              labelWidth={5}
              messages={{required: 'Required', alphaNumeric: 'User name should be alphanumeric'}}
              model=".userName"
              autoFocus>
              User name *
            </FormInput>
            <FormInput
              type="password"
              labelWidth={5}
              messages={{required: 'Required'}}
              model=".password">
              Password *
            </FormInput>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit">OK</Button>
            <Button onClick={ this.close }>Cancel</Button>
          </Modal.Footer>
        </LocalForm>
      </Modal>

    );
  }
}

// latest way to use react-router 2.x
MyModal.contextTypes = {
    // @see https://github.com/grommet/grommet/issues/441
    router: React.PropTypes.object.isRequired
};

export default connect(
  function (storeState) {
    // store state to props
    return {
      showMyModal: storeState.app.showMyModal
    };
  }
)(MyModal);