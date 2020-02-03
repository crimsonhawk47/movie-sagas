import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects'
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {

    yield takeEvery('GET_MOVIES', getMovies)
    yield takeEvery('SET_DESCRIPTION', setDescription)
    // yield takeEvery('GET_SPECIFIC_MOVIE', getSpecificMovie)

}

function* getMovies() {
    let response = yield axios.get('/api/movies')
    console.log(response.data);
    yield put({ type: 'SET_MOVIES', payload: response.data })
}

function* setDescription(action) {
    try{
        let newDescription = {id: action.payload.id, description: action.payload.description}
        let response = yield axios.post('/api/movies', newDescription)
        yield put({type: 'GET_MOVIES'})
    }
    catch(error){
        console.log(error);
    }
    
}

// function* getSpecificMovie(action){
//     try{
//         console.log(action.payload);
        
//         let response = yield axios.get(`/api/movies/${action.payload}`);
        
        
//         yield put({type:'SET_CURRENT_MOVIE', payload: response.data.id})
//     }
//     catch(error){
//         console.log(error);
        
//     }
// }


// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// const currentMovie = (state = 1, action) => {
//     switch (action.type) {
//         case 'SET_CURRENT_MOVIE':
//             return action.payload;
//         default:
//             return state;
//     }
// }

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        // currentMovie, 
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
    document.getElementById('root'));
registerServiceWorker();
