

export const Card = () => {
    let españa ={
        nombre:"España",
        img: "https://paladarnegro.net/escudoteca/selecciones/selecciones/img/espana.jpg",
        "background-color":"red",
        texto:"Esta selección ha sido 1 vez campeona del mundo."

    }

    let francia ={
        nombre:"Francia",
        img: "https://paladarnegro.net/escudoteca/selecciones/selecciones/img/francia.jpg",
        "bg-":"primary",
        texto:"Esta selección ha sido 2 veces campeona del mundo."

    }

    let italia ={
        nombre:"España",
        img: "https://paladarnegro.net/escudoteca/selecciones/selecciones/img/italia.jpg",
        "background-color":"green",
        texto:"Esta selección ha sido 4 veces campeona del mundo."

    }

    let alemania ={
        nombre:"Alemania",
        img: "https://paladarnegro.net/escudoteca/selecciones/selecciones/img/alemania.jpg",
        "background-color":"black",
        texto:"Esta selección ha sido 4 veces campeona del mundo."

    }


    let estiloCarta = {
        width: "18rem"
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-3 d-flex justify-content-center bg-danger">
                    <div className="card" style={estiloCarta}>
                        <img src={españa.img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{españa.nombre}</h5>
                            <p className="card-text">{españa.texto}</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-12 d-flex justify-content-center bg-primary">
                    <div className="card " style={estiloCarta,francia["bg-"]}>
                        <img src={francia.img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{francia.nombre}</h5>
                            <p className="card-text">{francia.texto}</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                </div>
                <div className="col-md-3 col-sm-12 d-flex justify-content-center">
                    <div className="card " style={estiloCarta}>
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-12 d-flex justify-content-center">
                    <div className="card " style={estiloCarta}>
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}