import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {applyMiddleware,compose,combineReducers,createStore} from 'redux';
import {Provider} from 'react-redux';
  
import productsReducer from './reducers/products-reducer';
import userReducer from './reducers/users-reducer';
import thunk from 'redux-thunk';
//combine reducers
const allReducers= combineReducers({
    products:productsReducer,
    user:userReducer
});
//store enhancer
const allStoreEnhancers= compose(
    applyMiddleware(thunk),
    window.devToolsExtension && window.devToolsExtension()
);
//store
const store=createStore(
    allReducers,
    {
    products:[{name:'iphone'},{name:'book'}],
    user:'Demon'
    },
    allStoreEnhancers
);
// console.log(store);
// const updateUserAction={
//     type:'updateUser',
//     payload:{
//         user:'VGA'
//     }
// };
//store.dispatch(updateUserAction);

ReactDOM.render(<Provider store={store}><App aRandomProp="whatever" /></Provider>, document.getElementById('root'));
registerServiceWorker();
