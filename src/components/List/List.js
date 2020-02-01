import React, {Component} from 'react';
import {connect} from 'react-redux'
class List extends Component{

    componentDidMount(){
        this.props.dispatch({type: 'GET_MOVIES'})
    }
 
    render(){
        return(
        <div>
            I am List Component
        </div>
        )
    
    }
}

const mapStateToProps = (reduxStore) => {
    return(
        {
            reduxStore
        }
    )
}

export default connect(mapStateToProps)(List)