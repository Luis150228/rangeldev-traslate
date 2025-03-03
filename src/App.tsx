import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

// 1. Crear el estado inicial
const initialState = {
  fromLenguage: 'auto',
  toLenguage: 'en',
  fromText: '',
  result: '',
  loading: ''
}

console.log(initialState);
//2. Crear el reducer
const reducerTranslate = (status, action)=>{
  const {type, payload} = action

  if (type === "INTERCHAGE_LENGUAGE") {
    return {
      ...status,
      fromLenguage : status.toLenguage,
      toLenguage : status.fromLenguage,
    }
  }

  if (type === "SET_FROM_LENGUAGE") {
    return {
      ...status,
      fromLenguage : payload,
    }
  }

  if (type === "SET_TO_LENGUAGE") {
    return {
      ...status,
      fromLenguage : payload,
    }
  }

  if (type === "SET_FROM_TEXT") {
    return {
      ...status,
      fromText : payload,
    }
  }

  if (type === "SET_RESULT") {
    return {
      ...status,
      result : payload,
    }
  }

  return status

}

function App() {

  return (
    <>
      <div className='App'>
        <h1>RangelDev-Translate</h1>
      </div>
    </>
  )
}

export default App
