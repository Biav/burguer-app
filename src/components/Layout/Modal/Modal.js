import React, { Component } from 'react'
import { Button, Modal, Dimmer, Loader } from 'semantic-ui-react'
import './Modal.css';

class ModalOrder extends Component {
  
  state = { modalOpen: this.props.openModal }

  handleOpen = () => {
    this.setState({ modalOpen: true })
  }

  handleClose = () => {
    this.setState({ modalOpen: false })
  }

  actionModal = () => {
    if(this.props.actionModal) {
      this.props.actionModal();
    }

    this.handleClose();
  }

  render () {
    

    let loading = (!this.props.loading) ? null : <Dimmer active><Loader>Loading</Loader></Dimmer>;

    let buttonModal = this.props.buttonModal ? <Button onClick={this.handleOpen} basic color='blue'>{this.props.buttonModal}</Button> : null;
    
    let buttonConfirm = (this.props.buttonConfirm) ? <Button onClick= { this.actionModal } basic color='blue'> { this.props.buttonConfirm } </Button> : null;

    return (
      <Modal trigger= { buttonModal }
             open={this.state.modalOpen}
             onClose={this.handleClose}>
        <Modal.Header>{ this.props.headerModal }</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            { loading }
            { this.props.bodyModal }
            { buttonConfirm }
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

export default ModalOrder;