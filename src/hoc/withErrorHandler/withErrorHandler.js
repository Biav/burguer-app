import React, {Component} from 'react';
import Aux from '../Auxiliar';
import { Modal } from 'semantic-ui-react'


const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {

        constructor(props) {
            super(props);

            this.state = { 
                error: null,
                modalOpen: false
            }

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

        
        handleOpen = () => {
          this.setState({ modalOpen: true })
        }
      
        handleClose = () => {
          this.setState({ modalOpen: false })
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