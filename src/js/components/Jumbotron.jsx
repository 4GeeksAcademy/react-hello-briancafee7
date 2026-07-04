

export const Jumbotron = () => {
    let jumbotronFondo = {
        "background-image": "url(https://static.vecteezy.com/system/resources/thumbnails/071/531/984/small_2x/golden-soccer-trophy-on-grass-stadium-background-confetti-celebration-victory-championship-free-photo.jpeg)",
        "background-size": "cover",
        "background-position": "center",
        "background-repeat": "no-repeat",
    }


    return (
        <div className={"p-5 mb-4 bg-secondary m-4 rounded-3 "} style={jumbotronFondo}>
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold text-warning text-shadow">Los 4 países de Europa con más mundiales</h1>
                <p className="col-md-8 fs-4 text-light text-shadow">
                    En esta página podrás ver los 4 países con más mundiales de europa.
                </p>
                
            </div>
        </div>

    )
}