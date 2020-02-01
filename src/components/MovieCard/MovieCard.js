import React, { Component } from 'react';
import { connect } from 'react-redux'
class MovieCard extends Component {

    render() {

        let arrayIndex = this.props.id - 1
        let movie = this.props.reduxStore.movies[arrayIndex]
        console.log(`MOVIENAME = ${movie}`)
        console.log(movie.title);


        return (
            <div>
                <li>
                    <p>{movie.title}</p>
                    <img src={movie.poster} />
                    <p>{movie.description}</p>
                </li>
            </div>


        )

    }
}

const mapStateToProps = (reduxStore) => {
    return (
        { reduxStore }
    )
}
export default connect(mapStateToProps)(MovieCard)