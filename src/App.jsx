import { useState } from 'react'
//import './App.css'
import Compra from './components/Compra'
import Hospedaje from './components/Hospedaje'
import Pasajero from './components/Pasajero'
import Servicio from './components/Servicio'
import TotalPago from './components/TotalPago'
import Pagar2 from './components/Pagar2'
import Footer from './components/Footer'
import Button from 'react-bootstrap/Button'
import reservaMock from './mocks/reserva'
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  const handleBuscarClick = async () => {
    console.log(reservaMock);
  }


  const [formData, setFormData] = useState({
    OrdenID: '',
    SessionID: '',
    Monto: 0,
    UrlRetorno: '',
  })


  const handleSubmit = async (e) => {
    e.preventDefault();


    setFormData({
      OrdenID: "345ab",
      SessionID: "1234",
      Monto: costoTotal,
      UrlRetorno: "http://localhost:3000/"
    })


    try {
      const response = await fetch('http://localhost:8080/save-transaction', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Maneja la respuesta exitosa, si es necesario
        console.log('Transacción guardada con éxito');
      } else {
        // Maneja errores
        console.error('Error al guardar la transacción');
      }
    } catch (error) {
      console.error('Error en la solicitud', error);
    }
  };



  // Calcula el costo total del vuelo
  const costoVuelo = reservaMock.precio_viaje;

  // Calcula el costo total de la estancia en el hotel
  const fechaIda = new Date(reservaMock.vuelo_info.fecha_ida);
  const fechaVuelta = new Date(reservaMock.vuelo_info.fecha_vuelta);
  const numeroDias = (fechaVuelta - fechaIda) / (1000 * 60 * 60 * 24); // Calcula el número de días
  const precioNoche = reservaMock.info_paquete.precio_noche;
  const costoEstanciaHotel = precioNoche * numeroDias;

  // Calcula el costo total
  const costoTotal = costoVuelo + costoEstanciaHotel;

  console.log(formData)




  return (
    <>
      <div className="">
        <NavBar></NavBar>
        <div className="row">
          <div className="col-md-6 left">
            <Pagar2></Pagar2>
            <Pasajero></Pasajero>


          </div>
          <div className="col-md-6 rigth">
            <TotalPago costoTotal={costoTotal} />
            <Compra objeto={reservaMock} />
            <Servicio></Servicio>
            <Hospedaje objeto={reservaMock} />

            <div className="btn">

              <Button className="buscar" variant="warning" onClick={handleSubmit}>
                CONFIRMAR DATOS INGRESADOS
              </Button>

            </div>



          </div>
        </div>

      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default App
