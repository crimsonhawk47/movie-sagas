import React, { Component } from 'react';

import MovieCard from '../MovieCard/MovieCard'
import { connect } from 'react-redux'

class Details extends Component {

    goToEdit = () => {
        this.props.history.push('/edit')
    }

    render() {
        let currentMovieID = this.props.reduxStore.currentMovie
        return (
            <div>
                <button onClick={() => { this.props.history.push('/') }}>Back Home</button>
                <button onClick={this.goToEdit}>Edit</button>
                <MovieCard id={currentMovieID} showGenres={true} />
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