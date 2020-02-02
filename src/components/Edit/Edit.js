import React, {Component} from 'react';
import {connect} from 'react-redux'
import MovieCard from '../MovieCard/MovieCard'
class Edit extends Component{
 
    render(){
        let currentMovieIndex = this.props.reduxStore.currentMovie
        return(
        <div>
            <MovieCard id={currentMovieIndex} />
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
export default connect(mapStateToProps)(Edit)