import React, { Fragment } from "react"
import './Footer.css';


function Footer() {
  return (
    <Fragment>
        <footer class="footer">            
          <div class="third box">
              <p><strong>SANTIAGO: <a href="tel:+56223311000">– (56 2) 2331 1000</a></strong><br />
              Diagonal las Torres 2640, Peñalolén. Edificios C, D y E.<br />
              Av. Presidente Errázuriz 3485, Las Condes.<br />
              Av. Santa María 5870, Vitacura.<br />
              <strong>VIÑA DEL MAR:</strong>  <strong>– <a href="tel:+56322503500">(56 32) 250 3500</a></strong><br />
              Padre Hurtado 750, Viña del Mar.<br />
              <a href="https://www.uai.cl/certificados-academicos/">Certificados académicos </a></p>
          </div>
          <div class="two-third box">
              <div class="footer__item">
                 <img src="https://ingenieria.uai.cl/assets/uploads/2022/03/acreditacion_2022_6_anos.png"/>
              </div>
          </div>
        </footer>  
    </Fragment>
  );
}

export default Footer;