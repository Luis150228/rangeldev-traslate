import { Form } from "react-bootstrap";
import { SectionType } from "../types.d";

interface Props {
    type: SectionType,
    placeholder: string,
    loading?: boolean,
    texted: (value:string)=> void,
    value: string,
}

const commondStyles = {border: 0, height: '200px'}
export const TextAreaTranslate= ({placeholder, type, loading, value, texted}: Props)=>{
    const styels = type === SectionType.From ? commondStyles : {...commondStyles, backgroundColor: '#f5f5f56c'}
    return (
    <Form>
        <Form.Control
            as="textarea"
            autoFocus={type === SectionType.From}
            placeholder={placeholder}
            style={styels}
            rows={4}
            />
    </Form>
  );
}

export const WriteText= ()=>{
  return (
    <Form>
        <Form.Control as="textarea" autoFocus placeholder="Write, Talk or Take a Pictures..." rows={4} />
    </Form>
  );
}

export const TranslateText= ()=>{
  return (
    <Form>
        <Form.Control as="textarea" placeholder="Translate..." readOnly rows={4} />
    </Form>
  );
}