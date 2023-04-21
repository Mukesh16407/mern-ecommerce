import {createStore,applyMiddleware,combineReducers} from 'redux'
import { composeWithDevTools } from "redux-devtools-extension"
import {userReducer} from './reducers/userReducer';


const rootReducer = combineReducers({
    user:userReducer,

})

const store = createStore(
 rootReducer,
 composeWithDevTools()
)

export default store