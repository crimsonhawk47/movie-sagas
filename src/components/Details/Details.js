import React, { Component } from 'react';

import MovieCard from '../MovieCard/MovieCard'
import { connect } from 'react-redux'

class Details extends Component {

    goToEdit = () => {
        this.props.history.push('/edit')
    }

    render() {
        let currentMovieIndex = this.props.reduxStore.currentMovie
        return (
            <div>
                <button onClick={() => { this.props.history.push('/') }}>Back Home</button>
                <button onClick={this.goToEdit}>Edit</button>
                <MovieCard id={currentMovieIndex} />
            </div>
        )

    }
}


const mapStateToProps = (reduxStore) => {
    return (
        {
            reduxStore
        }
    )
}
export default connect(mapStateToProps)(Details)