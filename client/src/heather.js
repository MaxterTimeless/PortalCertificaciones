import React, { Fragment,useState} from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Heather.css';


function Heather() {
  const Menu = (dis) => {
      if(document.getElementById(dis).style.display == "block"){
        document.getElementById(dis).style.display = "none";
      } else {
        document.getElementById(dis).style.display = "block";
      }
  };
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [startDate, setStartDate] = useState(new Date());
  const [startDate2, setStartDate2] = useState(new Date());
  return (
    <Fragment>
      <div class="top-bar">
        <div class="wrap">
          <div class="menu-bar">
            <div class="nav-top">
              
              <a href="https://intranet.uai.cl" class="Titulo">Certificaciones UAI</a> 
              {/* por ahora puse intranet, luego sería el link de la página */}
              
              <button onClick={()=>Menu("Dropdown-menu")} class="navicon_js-navicon">
                <svg height="40" viewBox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 15.5v2h20v-2H2zm0-5v2h20v-2H2zm0-5v2h20v-2H2z" class="three_lines"/>
                  <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
              </button>
            </div>
          </div>
          <div id="Dropdown-menu" class="dropdown-content">
            <div class="dropdown-content-1">
              <a href="#">Cursos disponibles</a>
              <a href="#">Mis certificados</a>
              <a href="#">
              <>
              <div className="link">
        <Button variant="link" class="btn btn-link" onClick={handleShow} size="lg">
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
              </a>

            </div> 
            <div class="dropdown-content-2">
              <a href="https://ingenieria.uai.cl/">Facultad de Ingeniería y Ciencias</a>
              {/* ¿los llevamos a la fic, a uai.cl, intranet, todas, otra cosa? */}
              <a href="https://bibliotecas.uai.cl/">Biblioteca</a>
             {/* de paso la biblioteca */}
              
            </div>
            
            <div class="top-search">
              <form action="https://ingenieria.uai.cl" method="GET" class="search-form">
                <input type="search" name="s" class="search-form__field" placeholder="Ingresa tu búsqueda" />
                <button type="submit" class="search-form-s"><svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/><path d="M0 0h24v24H0z" fill="none"/></svg></button>
              </form>                        
            </div>
          </div>   
        </div>
      </div>
    </Fragment>
  );
}

export default Heather;