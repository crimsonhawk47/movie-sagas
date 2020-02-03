import React, { Component } from 'react';

import MovieCard from '../MovieCard/MovieCard'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Details extends Component {

    // componentDidMount() {
    //     this.props.dispatch({ type: 'GET_SPECIFIC_MOVIE', payload: this.props.match.params.id })
    // }

    goToEdit = () => {
        let id = this.props.match.params.id
        this.props.history.push(`/edit/${id}`)
    }

    render() {

        let currentMovieID = this.props.match.params.id
        let movieCard;
        if(this.props.reduxStore.movies[0]){
            movieCard = <MovieCard id={currentMovieID} showGenres={true} />;
        }
        return (
            <div>
                <button onClick={() => { this.props.history.push('/') }}>Back Home</button>
                <button onClick={this.goToEdit}>Edit</button>
                {movieCard}
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
export default withRouter(connect(mapStateToProps)(Details))