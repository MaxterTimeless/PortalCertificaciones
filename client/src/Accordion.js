import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';

function AlwaysOpenExample() {
  return (
    <Accordion defaultActiveKey={['0']} alwaysOpen>
    <Accordion.Item eventKey="0">
      <Accordion.Header>Certificado #1</Accordion.Header>
      <Accordion.Body>
        Aquí irían los datos de el primer certificado. Ahí vemos si lo hacemos estilo tabla, tarjeta, u otro modo.
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="1">
      <Accordion.Header>Certificado #2</Accordion.Header>
      <Accordion.Body>
      Aquí irían los datos de el segundo certificado. Ahí vemos si lo hacemos estilo tabla, tarjeta, u otro modo.
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
  );
}

export default AlwaysOpenExample;