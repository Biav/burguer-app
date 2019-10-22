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

        componentWillMount() {
            this.requestInterceptor = axios.interceptors.request.use(req => {
                this.setState({
                    error: null,
                    modalOpen: false
                });
                return req;
            });

            this.responseInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({
                    error: error.message,
                    modalOpen: true
                });
            });
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.requestInterceptor);
            axios.interceptors.response.eject(this.responseInterceptor);

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