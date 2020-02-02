import React, { Component } from 'react';
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'
class MovieCard extends Component {

    goToEditPage = (movieID) => {
        console.log(`Heyooo my id is ${movieID}`);
        this.props.dispatch({type: 'SET_CURRENT_MOVIE', payload: movieID})
        this.props.history.push('/edit')
    }

    render() {

        let movieID = this.props.id
        let movieIndex = movieID - 1
        let movie = this.props.reduxStore.movies[movieIndex]

        return (
            <div>
                    <p>{movie.title}</p>
                    <img onClick={() => {this.goToEditPage(movieID)}} src={movie.poster} />
                    <p>{movie.description}</p>
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