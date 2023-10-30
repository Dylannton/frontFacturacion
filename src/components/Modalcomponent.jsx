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
        <div className="modal-content" style={{  width: '80vh', height: "90vh ", maxHeight: "90vh" }}>
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">RESUMEN DE DATOS</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          
          <div className="modal-body">
            <div className="content-wrapper">
              <div className="content-image">
                <img src="/logo.png" alt="Logo" style={{ width: '100px', height: '100px' }} />
              </div>
              <div className="vertical-line"
              ></div>
              <div className="content-text" style={{ marginTop: '10px' }}>
              <p><h5 style={{ whiteSpace: 'nowrap' }}>Agencia de Viajes</h5></p>
              <p><h6 style={{ whiteSpace: 'nowrap' }}>Utem Travels Ltda</h6></p>
              </div>
            </div>
          </div>
          <div className="additional-info">
            <p>R.U.T: XX.XXX.XXX - X</p>
             <p>FACTURA ELECTRONICA</p>
             <p>N°123</p>
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