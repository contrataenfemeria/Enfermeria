import { Carrusel } from "./Carrusel"

export function Home() {
    return (
        <>
            <section>
                <Carrusel />
                <br />
            </section>

            <section>

                <div className="row row-cols-1 row-cols-md-3 g-2">
                    <div className="card" style={{ width: '22rem' }}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/musicamgh.appspot.com/o/amor-propio.png?alt=media&token=a35f7a1a-3786-4aef-9d72-ca2ef5b98847" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 class="card-title">Nuestra pasión es tu salud</h5>
                            <p className="card-text">Nuestros profesionales combinan una gran formación académica con un fuerte compromiso con la salud y el cuidado de nuestros pacientes.</p>
                        </div>
                    </div>
                    <div className="card" style={{ width: '22rem' }}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/musicamgh.appspot.com/o/medico.png?alt=media&token=3825c2d9-55ec-4b26-b0bf-3af7c43b19eb" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 class="card-title">Enfermería a tu servicio</h5>
                            <p className="card-text">Nuestra página web de Enfermería está diseñada para ofrecerte servicios de salud de alta calidad y a tu medida. Tenemos un grupo de profesionales que te atenderán con profesionalismo y calidez. Estamos a tu servicio para acompañarte en tu bienestar.</p>
                        </div>
                    </div>
                    <div className="card" style={{ width: '22rem' }}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/musicamgh.appspot.com/o/unir.png?alt=media&token=2fd1029a-2399-47fc-8be9-d6094af97f94" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 class="card-title">Compromiso</h5>
                            <p className="card-text">Nos comprometemos a brindarte una atención de calidad y un servicio de excelencia. Nuestra prioridad es tu salud y tu bienestar. Nos comprometemos a hacer todo lo posible por ti.</p>
                        </div>
                    </div>
                </div>
            </section>

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