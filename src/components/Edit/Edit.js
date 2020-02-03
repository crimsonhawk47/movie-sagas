import React, { Component } from 'react';
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom';
import MovieCard from '../MovieCard/MovieCard'
class Edit extends Component {

    state = {
        newText: ''
    }

    changeText = (event) => {
        this.setState({ newText: event.target.value })
    }

    updateDescription = () => {
        console.log(`in update description`);
        let id = this.props.match.params.id
        this.props.dispatch({
            type: 'SET_DESCRIPTION',
            payload: {id: id, description: this.state.newText}
        })
        this.props.history.push(`/details/${id}`);
        
    }

    render() {
        return (
            <div>
                <button onClick={this.props.history.goBack}>Go Back</button>
                <input onChange={(event) => { this.changeText(event) }}></input>
                <button onClick={this.updateDescription}>Submit Changes</button>
            </div>
            )
    
        }
    }
    
const mapStateToProps = (reduxStore) => {
    return (
        {reduxStore}
                )
            }
            
export default withRouter(connect(mapStateToProps)(Edit))