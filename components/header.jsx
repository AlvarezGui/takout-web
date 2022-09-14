import Image from 'next/image';

export default function Header(){
    return(
        <>
            <div className="">
                <nav className="navbar navbar-expand-lg  cora nav"> {/* trocar cor bg */}
                    <div className="container-fluid">
                        <a className="navbar-brand cor-letra" href=""> <Image src="/Takout.png" width={50} height={20} alt='takout'></Image> </a>
                        <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>    
                        </button>    

                        <div className="collapse navbar-collapse " id="navbarNav">
                            <ul className="navbar-nav ">
                                <li className="nav-item">
                                    <a className="nav-link cor-letra" href="">Serviços</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link cor-letra" href="">Solução</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link cor-letra" href="">Como Funciona</a>
                                </li>
                            </ul>
                        </div>
                    </div>  

                    <div className="container-fluid justify-content-end">
                        <button className="btn btn-sm cor-letra" type="button">Login</button>
                        <button className="btn btn-primary me-2 cor-letra" type="button">  Iniciar  </button>
                    </div>
                
                </nav>    
            </div>    
        </>
    );
}