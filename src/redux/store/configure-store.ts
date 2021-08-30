import { createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../reducers/reducer-index'
/**
 * Redux dev tools debugger option
 */
const composeEnhancers = composeWithDevTools({
})
export default function configureStore()
{
  const store = createStore(
    rootReducer, /* preloadedState, */
    composeEnhancers(
      applyMiddleware(thunk))
  )

  return store
}