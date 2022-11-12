import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import DataFetching from './Datafetching';
import Curso2 from './Curso2';


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
                      <Card.Title> <DataFetching/></Card.Title>
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
                              <Modal.Header closeButton>
                                  <Modal.Title><DataFetching/></Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                                  <Form>
                                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                          <Form.Label>Título</Form.Label>
                                          <Form.Control
                                              type="text"
                                              placeholder="Título"
                                              autoFocus />
                                      </Form.Group>
                                  </Form>
                              </Modal.Body>
                              <Modal.Footer>
                                  <Button variant="primary" onClick={handleClose}>
                                      Enviar
                                  </Button>
                              </Modal.Footer>
                          </Modal>
                      </>
                  </Card.Body>
              </Card>
              <Card>
                  <Card.Img variant="top" alt="170x180" width={160}
                      height={180} src="https://estadocuentas.uai.cl/Content/img/uai-logo.png" />
                  <Card.Body>
                      <Card.Title>Curso 3</Card.Title>
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
                          <Modal.Header closeButton>
                              <Modal.Title>Título curso 3</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                              h
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
                              <Modal.Header closeButton>
                                  <Modal.Title>Título curso 2</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                                  <Form>
                                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                          <Form.Label>Título</Form.Label>
                                          <Form.Control
                                              type="text"
                                              placeholder="Título"
                                              autoFocus />


                                      </Form.Group>


                                  </Form>
                              </Modal.Body>
                              <Modal.Footer>
                                  <Button variant="primary" onClick={handleClose3}>
                                      Enviar
                                  </Button>
                              </Modal.Footer>
                          </Modal>
                      </>
                      </Card.Body>
                  </Card>
                  <Card>
                      <Card.Img variant="top" alt="170x180" width={160}
                          height={180} src="https://estadocuentas.uai.cl/Content/img/uai-logo.png" />
                      <Card.Body>
                          <Card.Title>Curso 4</Card.Title>
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
                              <Modal.Header closeButton>
                                  <Modal.Title>Título curso 4</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                              

    <div style={{ display: 'block', width: 500, padding: 30 }}>
      
      <Tabs defaultActiveKey="second">
        <Tab eventKey="first" title="Resumen">
          Hii, I am 1st tab content
        </Tab>
        <Tab eventKey="second" title="Detalles">
          Hii, I am 2nd tab content
        </Tab>
        <Tab eventKey="third" title="Empresa">
          Hii, I am 3rd tab content
        </Tab>
      </Tabs>
    </div>
 
                              </Modal.Body>
                              <Modal.Footer>
                                  <Button variant="primary" onClick={handleClose4}>
                                      Enviar
                                  </Button>
                              </Modal.Footer>
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