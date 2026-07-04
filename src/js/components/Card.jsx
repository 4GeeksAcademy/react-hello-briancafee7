

export const Card = () => {
    let españa ={
        nombre:"España",
        img: "https://paladarnegro.net/escudoteca/selecciones/selecciones/img/espana.jpg",
        bg :"bg-danger",
        texto:"Esta selección ha sido 1 vez campeona del mundo."

    }

    let francia ={
        nombre:"Francia",
        img: "https://paladarnegro.net/escudoteca/selecciones/selecciones/img/francia.jpg",
        bg:"bg-primary",
        texto:"Esta selección ha sido 2 veces campeona del mundo."

    }

    let italia ={
        nombre:"Italia",
        img: "https://paladarnegro.net/escudoteca/selecciones/selecciones/img/italia.jpg",
        bg:"bg-success",
        texto:"Esta selección ha sido 4 veces campeona del mundo."

    }

    let alemania ={
        nombre:"Alemania",
        img: "https://paladarnegro.net/escudoteca/selecciones/selecciones/img/alemania.jpg",
        bg:"bg-black",
        texto:"Esta selección ha sido 4 veces campeona del mundo."

    }


    let estiloCarta = {
        width: "18rem"
    }

    return (
        <div className="container">
            <div className="row">
                <div className={"col-sm-12 col-md-3 d-flex justify-content-center " + españa.bg}>
                    <div className="card" style={estiloCarta}>
                        <img src={españa.img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{españa.nombre}</h5>
                            <p className="card-text">{españa.texto}</p>
                            <a href="https://es.wikipedia.org/wiki/Selecci%C3%B3n_de_f%C3%BAtbol_de_Espa%C3%B1a" className="btn btn-primary">Historia futbolística</a>
                        </div>
                    </div>
                </div>
                <div className={"col-md-3 col-sm-12 d-flex justify-content-center " + francia.bg}>
                    <div className="card " style={estiloCarta}>
                        <img src={francia.img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{francia.nombre}</h5>
                            <p className="card-text">{francia.texto}</p>
                            <a href="https://es.wikipedia.org/wiki/Selecci%C3%B3n_de_f%C3%BAtbol_de_Francia" className="btn btn-primary">Historia futbolística</a>
                        </div>
                    </div>

                </div>
                <div className={"col-md-3 col-sm-12 d-flex justify-content-center " + italia.bg}>
                    <div className="card " style={estiloCarta}>
                        <img src={italia.img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{italia.nombre}</h5>
                            <p className="card-text">{italia.texto}</p>
                            <a href="https://es.wikipedia.org/wiki/Selecci%C3%B3n_de_f%C3%BAtbol_de_Italia" className="btn btn-primary">Historia futbolística</a>
                        </div>
                    </div>
                </div>
                <div className={"col-md-3 col-sm-12 d-flex justify-content-center " + alemania.bg}>
                    <div className="card " style={estiloCarta}>
                        <img src={alemania.img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{alemania.nombre}</h5>
                            <p className="card-text">{alemania.texto}</p>
                            <a href="https://es.wikipedia.org/wiki/Selecci%C3%B3n_de_f%C3%BAtbol_de_Alemania" className="btn btn-primary">Historia futbolística</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}