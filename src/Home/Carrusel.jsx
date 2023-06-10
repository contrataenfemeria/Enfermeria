import './Carrusel.css'

export function Carrusel() {
    return (
        <>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://firebasestorage.googleapis.com/v0/b/enfermeriasab-4b787.appspot.com/o/enfermera.jpg?alt=media&token=1eb0ddd3-b7d1-4f58-a421-fa807a44f9d5" className="d-block" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://firebasestorage.googleapis.com/v0/b/enfermeriasab-4b787.appspot.com/o/enfermera1.jpg?alt=media&token=f0d224b6-0b51-4ee0-bfaf-12d0f6154c77" className="d-block" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://firebasestorage.googleapis.com/v0/b/enfermeriasab-4b787.appspot.com/o/enfermera2.jpg?alt=media&token=91ef7aa2-4d35-4eb1-a54c-88f5c0f84a70" className="d-block" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </>
    )
}
