import React, {Component} from 'react';
import {connect} from 'react-redux'
import MovieCard from '../MovieCard/MovieCard'
class List extends Component{

    
 
    render(){
        return(
        <div>
            {this.props.reduxStore.movies.map(movie => {
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