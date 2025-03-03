export interface StateTranslate {
  fromLenguage: string,
  toLenguage: string,
  fromText: string,
  result: string,
  loading: boolean
}

export type Action =
| {type: 'INTERCHAGE_LENGUAGES'}
| {type: 'SET_FROM_LENGUAGE', payload: string}
| {type: 'SET_TO_LENGUAGE', payload: string}
| {type: 'SET_FROM_TEXT', payload: string}
| {type: 'SET_RESULT', payload: string}