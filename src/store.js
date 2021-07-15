import { createStore, applyMiddleware } from 'redux';
import rootReducer from "./reducers/reducer";
import createSagaMiddleware from 'redux-saga';
import { authSaga } from './authSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware ));

sagaMiddleware.run( authSaga );
