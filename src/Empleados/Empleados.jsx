import './Empleados.css'
export function Empleados() {


    const employees = [
        {
            name: "Melissa Gómez",
            position: "Pediatría",
            email: "melissagomezhoyos@gmail.com",
            img: 'https://firebasestorage.googleapis.com/v0/b/musicamgh.appspot.com/o/WhatsApp%20Image%202023-06-03%20at%208.19.44%20AM%20(1).jpeg?alt=media&token=664b267f-2e36-41ba-99b3-b839c9917d96',
        },
        {
            name: "Alejandro Melendez",
            position: "Ginecólogo",
            email: "jhonmelendez@gmail.com",
            img: 'https://firebasestorage.googleapis.com/v0/b/musicamgh.appspot.com/o/alejandro.jpg?alt=media&token=4624461b-fff8-4198-8ca8-ba8a446ddacc',
        },
        {
            name: " Juan Pablo Zapata Arismendy",
            position: "Urología",
            email: "pablozapat@gmail.com",
            img: 'https://firebasestorage.googleapis.com/v0/b/musicamgh.appspot.com/o/WhatsApp%20Image%202023-06-09%20at%208.06.10%20AM.jpeg?alt=media&token=33ac7637-88a9-42f7-ba8f-83bb662faa03',
        },

    ]

    return (
        <>
            <div className="container mt-3">
                <div className="row row-cols-1 row-cols-md-3 g-3 " >
                    {
                        employees.map(function (empleado) {
                            return (
                                <div className="col">
                                    <div className="card h-90 shadow text-center " >
                                        <h1>{empleado.name}</h1>
                                        <img src={empleado.img} alt="" className="img-fluid w-100" />
                                        <h4>{empleado.position}</h4>
                                        <p>{empleado.email}</p>
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

