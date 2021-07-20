import { LOG_IN, LOG_OUT } from '../actions.js';


const initialState = {
  isLoggedIn: false,
  email: '',
}


export default function reducer(state = initialState, action){
	switch(action.type) {
        
  	case LOG_IN: {
    return {
      ...state, 
      isLoggedIn: true, 
    }
    }
    case LOG_OUT: {
    return {
      ...state, 
      isLoggedIn: false, 
    }
    }

    default: 
    return state;
  }
}