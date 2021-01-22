
import toggleReducer from '../features/toggleSlice';
import userReducer from '../features/userSlice';
import basketReducer from '../features/basketSlice';
import previewReducer from '../features/previewSlice';
import loaderReducer from '../features/loaderSlice';
import clickReducer from '../features/clickSlice';
import {createStore , combineReducers}  from 'redux';



function saveToLocalStorage(state){


  try{

    const serializedState = JSON.stringify(state);
    localStorage.setItem('state',serializedState)

  }catch(e){

    console.log(e);




  }
}

function loadFromLocalStorage(){

try{
  const serializedState = localStorage.getItem('state');
  if(serializedState==null)
  return undefined;

  return JSON.parse(serializedState);

}catch(e){
  console.log(e);

  return undefined;


}


}


const persistedState = loadFromLocalStorage();

const rootReducer =  combineReducers({
 
  cname: toggleReducer,
  user:userReducer,
  basket:basketReducer,
  previewid:previewReducer,
  loader:loaderReducer,
  click:clickReducer,
 

  
});


const store = createStore(
  rootReducer,
  persistedState,
)

store.subscribe(()=>saveToLocalStorage(store.getState()))
export default store;

