
import { useReducer } from 'react';
import {Action, FromLenguage, Lenguage, type StateTranslate } from '../types';
import { AUTO_LENGUAGE } from '../constants';
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
    // status.fromLenguage === AUTO_LENGUAGE && status
    if(status.fromLenguage === AUTO_LENGUAGE) return status

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

export const useStore = ()=>{
//3. Usar el reducer
  const [state, dispatch]=useReducer(reducerTranslate, initialState)
  const {fromLenguage, toLenguage, fromText, result} = state

  const interchangeLenguage = ()=>{
    dispatch({type: 'INTERCHAGE_LENGUAGES'})
  }

  const setFromLenguage = (payload: FromLenguage)=>{
    dispatch({type: 'SET_FROM_LENGUAGE', payload: payload})
  }

  const setToLenguage = (payload: Lenguage)=>{
    dispatch({type: 'SET_TO_LENGUAGE', payload: payload})
  }

  const setFromText = (payload: string)=>{
    dispatch({type: 'SET_FROM_TEXT', payload: payload})
  }

  const setResult = (payload: string)=>{
    dispatch({type: 'SET_RESULT', payload: payload})
  }

  return {fromLenguage, toLenguage, fromText, result, interchangeLenguage, setFromLenguage, setToLenguage, setFromText, setResult}
}