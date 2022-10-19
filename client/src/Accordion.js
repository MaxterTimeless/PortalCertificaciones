import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Figure from 'react-bootstrap/Figure';

 
 


function AlwaysOpenExample() {
  return (
    <Accordion defaultActiveKey={['0']} alwaysOpen>
    <Accordion.Item eventKey="0">
      <Accordion.Header>Certificado #1</Accordion.Header>
      <Accordion.Body>
        <ListGroup>
        <ListGroup.Item><Figure>
        <Figure.Image
            width={171}
            height={180}
            alt="171x180"
            src="https://www.uai.cl/assets/uploads/2018/09/logo-uai.png"
        />
        <Figure.Caption>
            Empresa Certificadora.
        </Figure.Caption>
        </Figure></ListGroup.Item>
      <ListGroup.Item>Título</ListGroup.Item>
      <ListGroup.Item>Tipo</ListGroup.Item>
      <ListGroup.Item>Área</ListGroup.Item>
      <ListGroup.Item>Fecha de Obtención</ListGroup.Item>
      <ListGroup.Item>Vigencia  </ListGroup.Item>
    </ListGroup>      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="1">
      <Accordion.Header>Certificado #2</Accordion.Header>
      <Accordion.Body>
      <ListGroup>
        <ListGroup.Item><Figure>
        <Figure.Image
            width={171}
            height={180}
            alt="171x180"
            src="https://www.uai.cl/assets/uploads/2018/09/logo-uai.png"
        />
        <Figure.Caption>
            Empresa Certificadora.
        </Figure.Caption>
        </Figure></ListGroup.Item>
      <ListGroup.Item>Título</ListGroup.Item>
      <ListGroup.Item>Tipo</ListGroup.Item>
      <ListGroup.Item>Área</ListGroup.Item>
      <ListGroup.Item>Fecha de Obtención</ListGroup.Item>
      <ListGroup.Item>Vigencia  </ListGroup.Item>
    </ListGroup>  
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
  );
}

export default AlwaysOpenExample;