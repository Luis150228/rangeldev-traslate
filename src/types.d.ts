import { AUTO_LENGUAGE, SUPPORTED_LENGUAGES } from "./constants"

export type Lenguage = keyof typeof SUPPORTED_LENGUAGES
export type InitialLenguage = typeof AUTO_LENGUAGE
export type FromLenguage = Lenguage | InitialLenguage

export interface StateTranslate {
  fromLenguage: FromLenguage,
  toLenguage: Lenguage,
  fromText: string,
  result: string,
  loading: boolean
}

export type Action =
| {type: 'INTERCHAGE_LENGUAGES'}
| {type: 'SET_FROM_LENGUAGE', payload: FromLenguage}
| {type: 'SET_TO_LENGUAGE', payload: Lenguage}
| {type: 'SET_FROM_TEXT', payload: string}
| {type: 'SET_RESULT', payload: string}

export enum SectionType {
  From = 'from',
  To = 'to'
}