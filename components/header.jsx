export default function Header(){
    return(
        <>
            <div className="container">
                <nav className="navbar navbar-expand-lg bg-light "> {/* trocar cor bg */}
                    <div className="container-fluid">
                        <a className="navbar-brand" href="">Takout</a>  {/* colocar logo */}
                        <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>    
                        </button>    

                        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" href="">Serviços</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="">Solução</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="">Como Funciona</a>
                                </li>
                            </ul>
                        </div>
                    </div>  

                    {/* muadr cor e texto dos botões */}
                    <div className="container-fluid justify-content-end">
                        <button className="btn btn-sm btn-outline-secondary" type="button">Smaller button</button>
                        <button className="btn btn-outline-success me-2" type="button">Main button</button>
                    </div>
                
                </nav>    
            </div>    
        </>
    );
}