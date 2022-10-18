import React, { Fragment } from "react"
import './App.css';

function BarraSup() {
  const Menu = (dis) => {
      if(document.getElementById(dis).style.display == "block"){
        document.getElementById(dis).style.display = "none";
      } else {
        document.getElementById(dis).style.display = "block";
      }
  };
  
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
              <a href="#">Ingresar certificado</a>

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

export default BarraSup;