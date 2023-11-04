import React from 'react';
import jsPDF from 'jspdf';
import './ModalComponent.css';

const ModalComponent = () => {

  function crearPDF() {
    const doc = new jsPDF();

    const img = new Image();
    img.src = '/public/logo.png';

    img.onload = function() {
      doc.addImage(img, 'PNG', 10, 10, 50, 50); 

      doc.setDrawColor(2, 48, 71);
      doc.line(65, 10, 65, 60);

      doc.setTextColor(2, 48, 71);
      doc.text('Agencia de Viajes', 70, 20); 
      doc.setTextColor(2, 48, 71);
      doc.text('Utem Travels Ltda', 70, 30); 

      doc.save('DetallesReserva.pdf');
    };
  }

  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content" style={{ width: '90%', maxHeight: '80vh', overflowY: 'auto' }}>
          <div className="modal-header">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
  
          <div className="modal-body">
            <div className="content-wrapper">
              <div className="content-image">
                <img src="/logo.png" alt="Logo" style={{ width: '135px', height: '135px' }} />
              </div>
              <div className="vertical-line"></div>
              <div className="content-text" style={{ marginTop: '3px' }}>
                <p><h5 style={{ marginBottom: '0px', whiteSpace: 'nowrap' }}>Agencia de Viajes</h5></p>
                <p style={{ marginBottom: '0px', whiteSpace: 'nowrap', fontSize: '20px'}}>Utem Travels Ltda</p>
                <p style={{ marginBottom: '2px', whiteSpace: 'nowrap' }}>Casa XX, LAS PALMERAS N°133</p>
                <p style={{ marginBottom: '2px', whiteSpace: 'nowrap' }}>SANTIAGO, CHILE</p>
                <p style={{ marginBottom: '2px', whiteSpace: 'nowrap' }}>XXXXXXXXXXXXXXXX</p>
                <p style={{ marginBottom: '2px', whiteSpace: 'nowrap' }}>XXXXXXXXXXXXXX</p>
                <p style={{ marginBottom: '2px', whiteSpace: 'nowrap' }}>XXXXXXXXXXXX</p>
              </div>
            </div>
  
            <div className="additional-info">
              <p><h6>R.U.T: XX.XXX.XXX - X</h6></p>
              <p><h6>FACTURA ELECTRONICA</h6></p>
              <p><h6>N°123</h6></p>
            </div>
  
            <div className="cliente">
              <p style={{ marginBottom: '2px' }}>Señor(a)</p>
              <p style={{ marginBottom: '2px' }}>XXXXX XXXXX XXXXX XXXXX</p>
              <p style={{ marginBottom: '2px' }}>XXXXXXX</p>
              <p style={{ marginBottom: '2px' }}>XXXXXXXXXXXX</p>
              <p style={{ marginBottom: '2px' }}>XXXXXXXXXXXXXXXXXXXXX</p>
              <p style={{ marginBottom: '2px' }}>XXXXXXXXXXXXXXXXXXXXXXX</p>
            </div>

            <div className="contenedor-categorias">
              <div className="caja-grande">
                 <div className="columna">Código</div>
                 <div className="columna">Descripción</div>
                 <div className="columna">Cantidad</div>
                 <div className="columna">Precio</div>
                 <div className="columna">XXX</div>
                 <div className="columna">XXX</div>
                 <div className="columna">XXX</div>
              </div>
              <div className="casilla-grande">
                <textarea placeholder="Escribe aquí..." />
                </div>
                <div className="casilla-grande1">
                  *INSERTAR DATOS ACÁ*
                  </div>
              </div>
            </div>
  
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" onClick={crearPDF}>Descargar documento PDF</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;