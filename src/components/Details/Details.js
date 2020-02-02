import React, { Component } from 'react';

import MovieCard from '../MovieCard/MovieCard'
import {connect} from 'react-redux'

class Details extends Component {

    render() {
        let currentMovieIndex = this.props.reduxStore.currentMovie
        return (
            <div>
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