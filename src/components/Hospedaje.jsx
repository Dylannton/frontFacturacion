import React from 'react';
import './hospedaje.css';

function Hospedaje({ objeto }) { // Cambiamos props a objeto
    const infoPaquete = objeto.info_paquete;

    return (
        <div className="row hospedaje m-3 shadow rounded">
            <div className="flex">
                <i className="bi bi-ticket-detailed plane"></i>
                <p className="fw-bold text-light">Detalle de hospedaje</p>
            </div>
            <hr />
            <div className="d-flex justify-content-around">
            <div>
                <p className="text-dark fs-6 mb-0">Nombre de la Habitación</p> 
                <p className="text-light fs-6">{infoPaquete.nombre_opcion_hotel}</p>
            </div>
              <div>
              <p className="text-dark fs-6 mb-0">Descripción de la Habitación</p> 
              <p className="text-light fs-6">{infoPaquete.descripcion_habitacion}</p>
              </div>
            </div>
          <div className="d-flex justify-content-around">
            <div>
                <p className="text-dark fs-6 mb-0">Servicios de la Habitación</p> 
                <p className="text-light fs-6 mb-5">{infoPaquete.servicios_habitacion}</p>
            </div>
            <hr />
          </div> 
           <div className="d-flex justify-content-around">
            <div>
               <p className="text-dark fs-6 mb-0">Nombre del Hotel</p> 
               <p className="text-light fs-6">{infoPaquete.hotel_info.nombre}</p>
            </div>
            <div>
                 <p className="text-dark fs-6 mb-0">Descripción del Hotel</p> 
                <p className="text-light fs-6">{infoPaquete.hotel_info.descripcion_hotel}</p>
            </div>
          </div>
          <div className="d-flex justify-content-around">
            <div>
                <p className="text-dark fs-6 mb-0">Servicios del Hotel</p> 
                <p className="text-light fs-6 mb-5">{infoPaquete.hotel_info.servicios_hotel}</p> 
            </div>
          </div>
          <hr />
           <div className="d-flex justify-content-around">
              <i class="bi bi-cash-coin p-2"> Precio por Noche: {infoPaquete.precio_noche}</i>
          </div> 
        </div>
    );
}

export default Hospedaje;
