import React, { Component } from 'react';
import { connect } from 'react-redux'
import MovieCard from '../MovieCard/MovieCard'
class Edit extends Component {

    render() {
        return (
            <div>
                I am Details Component
        </div>
        )

    }
}

const mapStateToProps = (reduxStore) => {
    return (
        { reduxStore }
    )
}

export default connect(mapStateToProps)(Edit)