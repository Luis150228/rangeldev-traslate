import { Form } from "react-bootstrap";
import { AUTO_LENGUAGE, SUPPORTED_LENGUAGES } from "../constants"
import { FromLenguage, Lenguage, SectionType } from "../types.d";

// interface Props {
//     selectLenguage: (lenguage: Lenguage) => void
// }

type Props =
|{type: SectionType.From, value: FromLenguage, selectLenguage:(lenguage: FromLenguage)=>void }
|{type: SectionType.To, value: Lenguage, selectLenguage:(lenguage: Lenguage)=>void }



export const LenguageSelector = ({selectLenguage, type, value}: Props)=>{
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>)=>{
        selectLenguage(e.target.value as Lenguage)
    }
    return (
    <Form.Select aria-label="Seleted Lenguage" onChange={handleChange} value={value}>
        {type===SectionType.From && <option value={AUTO_LENGUAGE}>Detectar Idioma</option>}
        {
            Object.entries(SUPPORTED_LENGUAGES).map(([key, literal])=>(
                <option key={key} value={key}>
                    {literal}
                </option>
            ))
        }
    </Form.Select>
  );
}
