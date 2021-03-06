import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapReduxStateToProps = (reduxState) => (
    { reduxState }
);

class SnackList extends Component {

    render() {
        return (
            <div>
                <br/>
                <h3>YOUR SNACKS</h3>

                {/* <pre>{JSON.stringify(this.props.reduxState)}</pre> */}
                { this.props.reduxState.firstReducer.map((snack, i) => <li key={i}>
                {snack}
                </li>)}

            
            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(SnackList);