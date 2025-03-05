import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { useStore } from './hooks/useStore';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { ArrowLeftRight } from './assets/iconst';
import { AUTO_LENGUAGE } from './constants';
import { LenguageSelector } from './components/LenguageSelector';
import { TextAreaTranslate, TranslateText, WriteText } from './components/TextTranslate';
import { SectionType } from './types.d';

function App() {
const {fromLenguage, toLenguage, fromText, result, interchangeLenguage, setFromLenguage, setToLenguage, setFromText, setResult} = useStore()

  return (
    <>
    <Container fluid>
      <Row>
        <h1>RangelDev-Translate</h1>
      </Row>
      <Row>
        <Col>
          <p>From</p>
        </Col>
        <Col>
          <p>To</p>
        </Col>
      </Row>
      <Row>
        <Col className='lenguage-section'>
          <LenguageSelector type={SectionType.From} value={fromLenguage} selectLenguage={setFromLenguage}/>
          <TextAreaTranslate placeholder='Write, Talk or Take a Pictures...' type={SectionType.From} value={fromText} texted={setFromText} />
        </Col>
        <Col>
          <Button variant='link' disabled={fromLenguage===AUTO_LENGUAGE} onClick={()=>{
            interchangeLenguage()
          }}>{<ArrowLeftRight/>}</Button>
        </Col>
        <Col className='lenguage-section'>
          <LenguageSelector type={SectionType.To} value={toLenguage} selectLenguage={setToLenguage}/>
          <TextAreaTranslate placeholder='Translate...' type={SectionType.To} value={result} texted={setResult} />
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default App
