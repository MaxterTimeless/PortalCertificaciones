import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


function GroupExample() {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" alt="170x180" width={160}
            height={180} src="https://estadocuentas.uai.cl/Content/img/uai-logo.png" />
        <Card.Body>
          <Card.Title>Título curso</Card.Title>
          <Card.Text>
            Resumen llamativo del curso para que hagan click en el boton. 
          </Card.Text>
        </Card.Body>
        <>
       <div className="d-grid gap-2">
        <Button variant="outline-info" onClick={handleShow} size="lg">
          Más info
        </Button>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Título curso</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Título</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Título"
                  autoFocus
                />
             
             
              </Form.Group>

              
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Enviar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
      </Card>
      <Card>
        <Card.Img variant="top"alt="170x180" width={160}
            height={180} src="https://estadocuentas.uai.cl/Content/img/uai-logo.png" />
        <Card.Body>
          <Card.Title>Título curso</Card.Title>
          <Card.Text>
          Resumen llamativo del curso para que hagan click en el boton.
          </Card.Text>
        </Card.Body>
        <>
       <div className="d-grid gap-2">
        <Button variant="outline-info" onClick={handleShow} size="lg">
          Más info
        </Button>
        </div>
        <Modal show={show} onHide={handleClose} backdrop="static">
          <Modal.Header closeButton>
            <Modal.Title>Título curso</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Título</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Título"
                  autoFocus
                />
         
             
              </Form.Group>

              
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Enviar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
      </Card>
      <Card>
        <Card.Img variant="top"alt="170x180" width={160}
            height={180} src="https://estadocuentas.uai.cl/Content/img/uai-logo.png" />
        <Card.Body>
          <Card.Title>Título curso</Card.Title>
          <Card.Text>
          Resumen llamativo del curso para que hagan click en el boton.
          </Card.Text>
        </Card.Body>
        <>
       <div className="d-grid gap-2">
        <Button variant="outline-info" onClick={handleShow} size="lg">
          Más info
        </Button>
        </div>
        <Modal show={show} onHide={handleClose} backdrop="static">
          <Modal.Header closeButton>
            <Modal.Title>Título curso </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Título</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Título"
                  autoFocus
                />
             </Form.Group>

              
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Enviar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
      </Card>
    </CardGroup>
  );
}

export default GroupExample;