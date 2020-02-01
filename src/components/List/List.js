import React, {Component} from 'react';
import {connect} from 'react-redux'
import MovieCard from '../MovieCard/MovieCard'
class List extends Component{

    componentDidMount(){
        this.props.dispatch({type: 'GET_MOVIES'})
    }
 
    render(){
        return(
        <div>
            <ul>
            {this.props.reduxStore.movies.map(movie => {
                
                return <MovieCard id={movie.id} key={movie.id} />
            })}
            </ul>
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