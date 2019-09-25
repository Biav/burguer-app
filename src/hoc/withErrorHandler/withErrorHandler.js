import React, {Component} from 'react';
import Aux from '../Auxiliar';
import { Button, Modal} from 'semantic-ui-react'


const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {

        state = { 
            error: null,
            modalOpen: false
        }

        handleOpen = () => {
          this.setState({ modalOpen: true })
        }
      
        handleClose = () => {
          this.setState({ modalOpen: false })
        }

        componentDidMount() {
            axios.interceptors.request.use(req => {
                this.setState({
                    error: null,
                    modalOpen: false
                });
                return req;
            });

            axios.interceptors.response.use(res => res, error => {
                this.setState({
                    error: error.message,
                    modalOpen: true
                });
            });
        }

        render(){
            return (
                <Aux>
                    <Modal open={this.state.modalOpen} onClose={this.handleClose}>
                        <Modal.Header>Error</Modal.Header>
                        <Modal.Content>
                        <Modal.Description>
                        { this.state.error }
                        </Modal.Description>
                        </Modal.Content>
                    </Modal>
                    <WrappedComponent {...this.props}/>
                </Aux>
            )
        }
    }
}

export default withErrorHandler;