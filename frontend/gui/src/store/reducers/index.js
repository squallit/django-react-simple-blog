import { combineReducers } from 'redux';
import authReducer from './auth';
import articlesReducer from './articles';



const rootReducer = combineReducers({
  auth: authReducer,
  articles: articlesReducer
});

export default rootReducer;
