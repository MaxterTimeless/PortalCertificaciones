import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function Example() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [startDate, setStartDate] = useState(new Date());
    const [startDate2, setStartDate2] = useState(new Date());

    return (
      <>
       <div className="d-grid gap-2">
        <Button variant="outline-info" onClick={handleShow} size="lg">
          Ingresar nuevo certificado
        </Button>
        </div>
        <Modal show={show} onHide={handleClose} backdrop="static">
          <Modal.Header closeButton>
            <Modal.Title>Nuevo certificado</Modal.Title>
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
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                <Form.Label>Empresa Certificadora</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Empresa"
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                <Form.Label> Tipo</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Tipo"
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                <Form.Label>Link</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Link"
                  autoFocus
                />
              </Form.Group>

              <Form.Label>Fecha Obtención</Form.Label>
              <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} />
              
              <Form.Label>Vigencia</Form.Label>
              <DatePicker selected={startDate2} onChange={(date:Date) => setStartDate2(date)} />

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
    );
  }

  export default Example ;