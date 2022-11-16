import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Curso from './Cursos'
import { Curso2,Curso3,Curso4} from './Cursos';
import './Cursito.css';


function Cursito() {
    {/*curso uno*/}
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    {/*curso tres*/}
    const [show2, setShow2] = useState(false);
  
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

   {/*curso dos*/}
   const [show3, setShow3] = useState(false);
  
   const handleClose3 = () => setShow3(false);
   const handleShow3 = () => setShow3(true);

   {/*curso cuatro*/}
   const [show4, setShow4] = useState(false);
 
   const handleClose4 = () => setShow4(false);
   const handleShow4 = () => setShow4(true);


  return (
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <><Col>
              <Card>
                  <Card.Img variant="top" alt="170x180" width={160}
                      height={180} src="https://estadocuentas.uai.cl/Content/img/uai-logo.png" />
                  <Card.Body>
                      <Card.Title> <Curso/></Card.Title>
                      <Card.Text>
                          Resumen llamativo del curso para que hagan click en el boton.
                      </Card.Text>
                      <>
                          <div className="d-grid gap-2">
                              <Button variant="outline-info" onClick={handleShow} size="lg">
                                  Más info
                              </Button>
                          </div>
                          <Modal show={show} onHide={handleClose}>
                              <Modal.Header className='floorfade'>
                                  <Modal.Title className='fadecurso'><Curso/></Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                              <div className='tabsoscuras' >
                            <div className='taboscura' >
                            <p> El curso en una frase llamativa. 
                        </p>
                        <p>---------------------- (divisor) </p>
                        <p>Empresa</p>
                                                   <p>Fecha de inicio y final</p>
                                                   <p>Idioma y
                                                    Cupos</p>
                          <p>no necesariamente en ese orden con íconos</p>
                          </div>
                          </div>
    <div className='tabs' style={{ display: 'block', width: '95%' }}>
      
      <Tabs defaultActiveKey="first">
        <Tab eventKey="first" title="Resumen">
          Poner los objetivos de aprendizaje aquí. Algo como cute punteo no sé.
        </Tab>
        <Tab eventKey="second" title="Detalles">
        Poner algo como el syllabus, pero no literal el pdf po, obvio. La idea es que salga más a fondo lo que aprenderan, 
        contenido clase a clase si disponible, y cómo funcionaría el curso, evaluaciones, etc.
        </Tab>
        <Tab eventKey="third" title="Empresa">
          Aquí información de la empresa. 
        </Tab>
      </Tabs>
    </div>
 
                              </Modal.Body>
                             
                          </Modal>
                      </>
                  </Card.Body>
              </Card>
              <Card>
                  <Card.Img variant="top" alt="170x180" width={160}
                      height={180} src="https://estadocuentas.uai.cl/Content/img/uai-logo.png" />
                  <Card.Body>
                      <Card.Title><Curso3/></Card.Title>
                      <Card.Text>
                          Resumen llamativo del curso para que hagan click en el boton.
                      </Card.Text>
                      <>
                      <div className="d-grid gap-2">
                          <Button variant="outline-info" onClick={handleShow2} size="lg">
                              Más info
                          </Button>
                      </div>
                      <Modal show={show2} onHide={handleClose2}>
                          <Modal.Header className='floorfade'>
                              <Modal.Title className='fadecurso'>Título curso 3</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                          <div className='tabsoscuras' >
                            <div className='taboscura' >
                            <p> El curso en una frase llamativa. 
                        </p>
                        <p>---------------------- (divisor) </p>
                        <p>Empresa</p>
                                                   <p>Fecha de inicio y final</p>
                                                   <p>Idioma y
                                                    Cupos</p>
                          <p>no necesariamente en ese orden con íconos</p>
                          </div>
                          </div>
    <div className='tabs' style={{ display: 'block', width: '95%' }}>
      
      <Tabs defaultActiveKey="first">
        <Tab eventKey="first" title="Resumen">
          Poner los objetivos de aprendizaje aquí. Algo como cute punteo no sé.
        </Tab>
        <Tab eventKey="second" title="Detalles">
        Poner algo como el syllabus, pero no literal el pdf po, obvio. La idea es que salga más a fondo lo que aprenderan, 
        contenido clase a clase si disponible, y cómo funcionaría el curso, evaluaciones, etc.
        </Tab>
        <Tab eventKey="third" title="Empresa">
          Aquí información de la empresa. 
        </Tab>
      </Tabs>
    </div>
 
                          </Modal.Body>
                          <Modal.Footer>
                              <Button variant="primary" onClick={handleClose2}>
                                  Enviar
                              </Button>
                          </Modal.Footer>
                      </Modal>
                  </>
              </Card.Body>
          </Card>
          </Col>
          <Col>
                  <Card>
                      <Card.Img variant="top" alt="170x180" width={160}
                          height={180} src="https://estadocuentas.uai.cl/Content/img/uai-logo.png" />
                      <Card.Body>
                          <Card.Title><Curso2/></Card.Title>
                          <Card.Text>
                              Resumen llamativo del curso para que hagan click en el boton.
                          </Card.Text>
                          <>
                          <div className="d-grid gap-2">
                              <Button variant="outline-info" onClick={handleShow3} size="lg">
                                  Más info
                              </Button>
                          </div>
                          <Modal show={show3} onHide={handleClose3}>
                              <Modal.Header className='floorfade'>
                                  <Modal.Title className='fadecurso'>Título curso 2</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                              <div className='tabsoscuras' >
                            <div className='taboscura' >
                            <p> El curso en una frase llamativa. 
                        </p>
                        <p>---------------------- (divisor) </p>
                        <p>Empresa</p>
                                                   <p>Fecha de inicio y final</p>
                                                   <p>Idioma y
                                                    Cupos</p>
                          <p>no necesariamente en ese orden con íconos</p>
                          </div>
                          </div>
    <div className='tabs' style={{ display: 'block', width: '95%' }}>
      
      <Tabs defaultActiveKey="first">
        <Tab eventKey="first" title="Resumen">
          Poner los objetivos de aprendizaje aquí. Algo como cute punteo no sé.
        </Tab>
        <Tab eventKey="second" title="Detalles">
        Poner algo como el syllabus, pero no literal el pdf po, obvio. La idea es que salga más a fondo lo que aprenderan, 
        contenido clase a clase si disponible, y cómo funcionaría el curso, evaluaciones, etc.
        </Tab>
        <Tab eventKey="third" title="Empresa">
          Aquí información de la empresa. 
        </Tab>
      </Tabs>
    </div>
 
                              </Modal.Body>
                              
                          </Modal>
                      </>
                      </Card.Body>
                  </Card>
                  <Card>
                      <Card.Img variant="top" alt="170x180" width={160}
                          height={180} src="https://estadocuentas.uai.cl/Content/img/uai-logo.png" />
                      <Card.Body>
                          <Card.Title ><Curso4/></Card.Title>
                          <Card.Text>
                              Resumen llamativo del curso para que hagan click en el boton.
                          </Card.Text>
                          <>
                          <div className="d-grid gap-2">
                              <Button variant="outline-info" onClick={handleShow4} size="lg">
                                  Más info
                              </Button>
                          </div>
                          <Modal show={show4} onHide={handleClose4}>
                              <Modal.Header className='floorfade'>
                                  <Modal.Title className='fadecurso'>Título curso 4</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                              

                              <div className='tabsoscuras' >
                            <div className='taboscura' >
                            <p> El curso en una frase llamativa. 
                        </p>
                        <p>---------------------- (divisor) </p>
                        <p>Empresa</p>
                                                   <p>Fecha de inicio y final</p>
                                                   <p>Idioma y
                                                    Cupos</p>
                          <p>no necesariamente en ese orden con íconos</p>
                          </div>
                          </div>
    <div className='tabs' style={{ display: 'block', width: '95%' }}>
      
      <Tabs defaultActiveKey="first">
        <Tab eventKey="first" title="Resumen">
          Poner los objetivos de aprendizaje aquí. Algo como cute punteo no sé.
        </Tab>
        <Tab eventKey="second" title="Detalles">
        Poner algo como el syllabus, pero no literal el pdf po, obvio. La idea es que salga más a fondo lo que aprenderan, 
        contenido clase a clase si disponible, y cómo funcionaría el curso, evaluaciones, etc.
        </Tab>
        <Tab eventKey="third" title="Empresa">
          Aquí información de la empresa. 
        </Tab>
      </Tabs>
    </div>
 
 
                              </Modal.Body>
                            
                          </Modal>
                      </>
                      </Card.Body>
                  </Card>
              </Col></>
      ))}
    </Row>
  );
}

export default Cursito;