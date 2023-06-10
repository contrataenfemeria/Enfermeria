import './Formulario.css'
import React, { useState, useEffect } from 'react';
import db from '../firestore';
import Swal from 'sweetalert2'


export function Formulario() {

  const [dataAppointment, setdataAppointment] = useState({
    date: "",
    time: "",
    name: "",
    email: "",
    id: ""
  })

  const handelchange = (e) => {
    e.preventDefault();
    //para que asigne los datos
    setdataAppointment({ ...dataAppointment, [e.target.name]: e.target.value });
    console.log(dataAppointment)
  }

  const onSearch = (e) => {
    e.preventDefault();
    db.collection('citas')
      .where('name', '==', dataAppointment.name)
      .get()
      .then((querySnapshot) => {
        if (!querySnapshot.empty) { // Encontro el username
          querySnapshot.forEach((doc) => {
            //  console.log(doc.data())
            setdataAppointment({
              date: doc.data().date,
              time: doc.data().time,
              name: doc.data().name,
              email: doc.data().email,
              id: doc.id,
            })

            console.log(dataAppointment.id);
          })
        }
        else {
          Swal.fire({
            icon: 'error',
            title: 'Mmmmmmmm....',
            text: 'CCita no encontarda',
            footer: '<a href="">Why do I have this issue?</a>'
          })
        }
      })
  }




  //Agendar cita
  const onSave = (e) => {
    e.preventDefault();
    if (dataAppointment.date === '' || dataAppointment.time === '' || dataAppointment.name === '' || dataAppointment.email === '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Campos Incompletos',
        footer: '<a href="">Why do I have this issue?</a>'
      })
    }

    else if (dataAppointment.name.length < 10) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Nombre completo debe tener mas de 10 digitos',
        footer: '<a href="">Why do I have this issue?</a>'
      })
    }
    else {
      db.collection('citas')
        .where('name', '==', dataAppointment.name)
        .get()
        .then((documentss) => {
          if (documentss.empty) { //No  Encontro el username
            // Crear usuario
            db.collection('citas').add({
              date: dataAppointment.date,
              time: dataAppointment.time,
              name: dataAppointment.name,
              email: dataAppointment.email,
            })
            Swal.fire({
              icon: 'success',
              title: '¡¡Bien Hecho!!',
              text: 'Cita Agendada',
              footer: '<a href="">Why do I have this issue?</a>'
            })
            setdataAppointment({
              date: "",
              time: "",
              name: "",
              email: "",
            })

          } else {
            alert("ERROR: Esta ya esta registrada en la base")
          }
        }
        )
    }











  };

  return (
    <>
      <div className="container mt-5">

        <div className="row justify-content-center">
          <div className="col-8  " id="contenedor" >

            <form className="p-4 border border-dark rounded">
              <legend className="text-center header">FORMULARIO DE AGENDAMIENTO</legend>

              <div className="mb-3">

                <input
                  id="date"
                  name="date"
                  type="date"
                  placeholder="Día"
                  className="form-control"
                  onChange={handelchange}
                  value={dataAppointment.date}
                  style={{
                    borderColor: dataAppointment.date ? "green" : "red",
                  }}
                />
              </div>

              <div className="mb-3">
                <input
                  id="time"
                  name="time"
                  type="time"
                  placeholder="Hora"
                  className="form-control"
                  onChange={handelchange}
                  value={dataAppointment.time}
                  style={{
                    borderColor: dataAppointment.time ? "green" : "red",
                  }}

                />
              </div>

              <div className="mb-3">
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Nombre"
                  className="form-control"
                  onChange={handelchange}
                  value={dataAppointment.name}
                  style={{
                    borderColor: dataAppointment.name ? "green" : "red",
                  }}
                />
              </div>

              <div className="mb-3">
                <input
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Correo"
                  className="form-control"
                  onChange={handelchange}
                  value={dataAppointment.email}
                  style={{
                    borderColor: dataAppointment.email ? "green" : "red",
                  }}
                />
              </div>


              <div className="form-group">
                <div className="col-md-1 text-center">
                  <button type="submit" className="btn btn-primary btn-lg mt-2" onClick={onSave}>Enviar</button>
                  <button type="submit" className="btn btn-success btn-lg mt-2" onClick={onSearch}>Buscar</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <br />

      <div class="card">
        <footer>
          <br />
          <div class="row">
            <div class="col-sm-3 mb-3 mb-sm-0">
              <div class="card-body">
                <h5 class="card-title">Contáctenos</h5> <br />
                <p class="card-text">+57 3008322211 <br /> Fijo: 2220011</p>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="card-body">
                <h5 class="card-title">Email</h5> <br />
                <p class="card-text">contrataenfermeria911@gmail.com</p>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="card-body">
                <h5 class="card-title">Dirección</h5> <br />
                <p class="card-text">Medellin - Colombia</p>
              </div>
            </div>
          </div>
        </footer>
      </div>


    </>
  )
}