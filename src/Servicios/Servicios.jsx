export function Servicios() {

    let serviciosBarberia = [
        {
            nombre: "Atención domiciliaria",
            precio: 20000,
            foto: "../../src/assets/Img/Servicios1.jpg",
            descripcion: "Consiste en brindar cuidados de enfermería a personas que lo requieren en su propio hogar"
        },
        {
            nombre: "Ambulatoria",
            precio: 50000,
            foto: "../../src/assets/img/Servicios2.jpg",
            descripcion: "Brinadamos cuidados de enfermeria a personas que acuden a una unidad de salud para recibir tratamientos "
        },
        {
            nombre: "Educacion para la salud",
            precio: 45000,
            foto: "../../src/assets/img/Servicios3.png",
            descripcion: "Informacion, orientacion y consejeria a personas o grupos sobre prevencion de enfermedades."
        },

        {
            nombre: "Cosultoria y asesoria",
            precio: 45000,
            foto: "../../src/assets/img/Servicios4.jpg",
            descripcion: "Apoyo tecnico y profesional a otras organizaciones o instituciones que lo soliciten en temas relacionados a la salud."
        },

        {
            nombre: "Investigacion",
            precio: 45000,
            foto: "../../src/assets/img/Servicios5.jpeg",
            descripcion: "Desarrollamos estudios cientificos sobre temas relevantes para el avance del conocimiento y la mejora de la practica"
        },

        {
            nombre: "Dental",
            precio: 45000,
            foto: "../../src/assets/img/Servicios5.jpeg",
            descripcion: "Desarrollamos estudios cientificos sobre temas relevantes para el avance del conocimiento y la mejora de la practica"
        },

        //************************ */

        {
            nombre: "Pediatria",
            precio: 45000,
            foto: "../../src/assets/img/Servicios5.jpeg",
            descripcion: "Desarrollamos estudios cientificos sobre temas relevantes para el avance del conocimiento y la mejora de la practica"
        },

        {
            nombre: "Ginecologia",
            precio: 45000,
            foto: "../../src/assets/img/Servicios5.jpeg",
            descripcion: "Desarrollamos estudios cientificos sobre temas relevantes para el avance del conocimiento y la mejora de la practica"
        },

        {
            nombre: "Laboratorio",
            precio: 45000,
            foto: "../../src/assets/img/Servicios5.jpeg",
            descripcion: "Desarrollamos estudios cientificos sobre temas relevantes para el avance del conocimiento y la mejora de la practica"
        },

        {
            nombre: "Sangre",
            precio: 45000,
            foto: "../../src/assets/img/Servicios5.jpeg",
            descripcion: "Desarrollamos estudios cientificos sobre temas relevantes para el avance del conocimiento y la mejora de la practica"
        }


    ]

    return (
        <>
            <div className="container mt-5">
                <div className="row row-cols-1 row-cols-md-3 g-2 ">
                    {
                        serviciosBarberia.map(function (servicio) {
                            return (
                                <div className="col">
                                    <div className="card h-90 shadow text-center  ">
                                        <h1>{servicio.nombre}</h1>
                                        <img src={servicio.foto} alt="" className="img-fluid w-100" />
                                        <p>{servicio.descripcion}</p>
                                        <h3>Desde COP($){servicio.precio}</h3>
                                    </div>
                                </div>

                            )
                        })
                    }
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