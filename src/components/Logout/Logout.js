import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

class Logout extends Component {

    componentDidMount() {
        this.props.doLogout();
    }

    render() {
        return (
            <div>
                <Redirect to="/" />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return  {
        doLogout: () => dispatch(actionTypes.doLogout())
    }
}

export default connect(null, mapDispatchToProps)(Logout);