function Header() {
    return (
        <>
            <header className="text-white bg-dark">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-xs-3 col-lg-2 text-center">
                            <img src="https://www.seekpng.com/png/detail/110-1100707_person-avatar-placeholder.png"
                                alt="Person - Avatar Placeholder@seekpng.com" className="border border-5 rounded-circle img-fluid" style={{ width: "150px", height: "150px" }} />
                        </div>
                        <div className="col text-center text-lg-start">
                            <h1>Alan Kim</h1>

                            <p className="lead">EDI(B2Bi, eCommerce) Specialist (currently student of SAIT, Calgary, AB).</p>

                            <ul className="list-inline">
                                <li className="list-inline-item my-2"><a href="#" className="fs-5 link-light text-decoration-none"><i
                                    className="bi bi-envelope pe-1"></i>
                                    <span className="text-center">alandkim.it@gmail.com</span></a></li>
                                <li className="list-inline-item my-2"><a href="#" className="fs-5 link-light text-decoration-none"><i
                                    className="bi bi-linkedin pe-1"></i>
                                    linkedin.com/in/alandkim</a></li>
                                <li className="list-inline-item my-2"><a href="#" className="fs-5 link-light text-decoration-none"><i
                                    className="bi bi-github pe-1"></i>
                                    https://github.com/dokim-alan/portfolio-app</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;