import React, { Component } from 'react';

import MovieCard from '../MovieCard/MovieCard'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Details extends Component {

    componentDidMount() {
        console.log(this.props.match.params.id);

        this.props.dispatch({ type: 'GET_SPECIFIC_MOVIE', payload: this.props.match.params.id })
        // console.log(this.props.history.location);

    }

    goToEdit = () => {
        this.props.history.push('/edit')
    }

    render() {

        let currentMovieID = this.props.match.params.id
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
export default withRouter(connect(mapStateToProps)(Details))