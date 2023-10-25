import React from 'react';
import './totalPago.css';

function TotalPago({ costoTotal }) {


  return (
    <div className="row total m-3 shadow rounded">
      <div className="h-25 color rounded-top">
        <div className="flex">
          <p className="fw-bold text-light">Total vuelo</p>
          <i className="bi bi-airplane-fill plane"></i>
        </div>
        <span className="text-light">${costoTotal}</span>
      </div>
    </div>
  );
}

export default TotalPago;

