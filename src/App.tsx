import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {Action, type StateTranslate } from './types';
import { useReducer } from 'react';

// 1. Crear el estado inicial
const initialState: StateTranslate = {
  fromLenguage: 'auto',
  toLenguage: 'en',
  fromText: '',
  result: '',
  loading: false
}

//2. Crear el reducer
const reducerTranslate = (status: StateTranslate, action: Action)=>{
  const {type} = action

  if (type === "INTERCHAGE_LENGUAGES") {
    return {
      ...status,
      fromLenguage : status.toLenguage,
      toLenguage : status.fromLenguage,
    }
  }

  if (type === "SET_FROM_LENGUAGE") {
    return {
      ...status,
      fromLenguage : action.payload,
    }
  }

  if (type === "SET_TO_LENGUAGE") {
    return {
      ...status,
      toLenguage : action.payload,
    }
  }

  if (type === "SET_FROM_TEXT") {
    return {
      ...status,
      fromText : action.payload,
      loading: true,
      result: ''
    }
  }

  if (type === "SET_RESULT") {
    return {
      ...status,
      loading: false,
      result : action.payload,
    }
  }

  return status

}

function App() {
  //3. Usar el reducer
  const [state, dispatch]=useReducer(reducerTranslate, initialState)
  console.log(state.fromLenguage);

  return (
    <>
      <div className='App'>
        <h1>RangelDev-Translate</h1>
        <button onClick={()=>{
          dispatch({type: 'SET_FROM_LENGUAGE', payload: 'es'})
        }}>Change Lenguage</button>
      </div>
    </>
  )
}

export default App
