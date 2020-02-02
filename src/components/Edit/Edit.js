import React, { Component } from 'react';
import { connect } from 'react-redux'
import MovieCard from '../MovieCard/MovieCard'
class Edit extends Component {

    state = {
        newText: ''
    }

    changeText = (event) => {

        this.setState({ newText: event.target.value })
        console.log(this.state.newText);
    }

    updateDescription = () => {
        console.log(`in update description`);
        console.log(this.props.reduxStore.currentMovie);
        this.props.dispatch({
            type: 'SET_DESCRIPTION',
            payload: this.props.reduxStore.currentMovie
        })
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
            
export default connect(mapStateToProps)(Edit)