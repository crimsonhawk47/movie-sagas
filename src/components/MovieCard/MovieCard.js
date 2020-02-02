import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
class MovieCard extends Component {

    goToDetailsPage = (movieID) => {
        console.log(`Heyooo my id is ${movieID}`);
        this.props.dispatch({ type: 'SET_CURRENT_MOVIE', payload: movieID })
        this.props.history.push('/details')
    }

    render() {

        let movieID = this.props.id
        let movieIndex = movieID - 1
        let movie = this.props.reduxStore.movies[movieIndex]
        let genreDisplay;
        if (this.props.showGenres) {
            genreDisplay = <ul>
                {movie.genres.map((genre, index) => {
                    return <li key={index}>{genre}</li>
                })}
            </ul>
        }

        return (
            <div>
                <p>{movie.title}</p>
                <img onClick={() => { this.goToDetailsPage(movieID) }} src={movie.poster} />
                <p>{movie.description}</p>
                {genreDisplay}
            </div>


        )

    }
}

const mapStateToProps = (reduxStore) => {
    return (
        { reduxStore }
    )
}
export default withRouter(connect(mapStateToProps)(MovieCard))