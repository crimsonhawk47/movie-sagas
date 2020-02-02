import React, {Component} from 'react';
import {connect} from 'react-redux'
import MovieCard from '../MovieCard/MovieCard'
class List extends Component{

    
 
    render(){
        return(
        <div>
            {this.props.reduxStore.movies.map(movie => {
                // return <li id={movie.id} key={movie.id}>
                //     <p>{movie.name}</p>
                //     <img src={movie.poster} />
                //     <p>{movie.description}</p>
                // </li>
                return <MovieCard id={movie.id} key={movie.id} />
            })}
        </div>
        )
    
    }
}

const mapStateToProps = (reduxStore) => {
    return(
        {
            reduxStore
        }
    )
}

export default connect(mapStateToProps)(List)