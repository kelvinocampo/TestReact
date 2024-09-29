import { Link } from "react-router-dom";
import Logo from "../assets/react.svg";

function Header() {

    return (
        <header className="w-full h-12 sticky mb-4 flex justify-around gap-8 items-center bg-white py-4">
            <div className="flex items-center justify-center gap-2">
                <a href="https://es.react.dev/">
                    <img src={Logo} alt="Logo" />
                </a>
                <h1 className="text-slate-900 text-xl">Test React <a className="text-slate-950 font-bold" href="https://github.com/kelvinocampo">Kelvin Ocampo</a></h1>
            </div>
            <nav className="flex justify-center items-center gap-4">
                <Link className="border transition border-slate-900 rounded py-2 px-4 hover:bg-slate-900 hover:text-white" to={"/"}>Inicio</Link>
                <Link className="border transition border-slate-900 rounded py-2 px-4 hover:bg-slate-900 hover:text-white" to={"/Contador"}>Contador</Link>
                <Link className="border transition border-slate-900 rounded py-2 px-4 hover:bg-slate-900 hover:text-white" to={"/Buscador"}>Buscador</Link>
            </nav>
        </header>
    )
}

export default Header
