import { Link } from "react-scroll"
import "./Navbar.css"
import About from "./About"
import Home from "./Home"
import Report from "./Report"

function navbar() {


    return (


        <div>

            <nav>
                <ul>
                    <li>
                        <Link to="home" smooth={true} offset={-100} duration={700} >
                            home
                        </Link>
                    </li>

                    <li>
                        <Link to="about" smooth={true} offset={0} duration={700}>
                            about
                        </Link>
                    </li>


                    <li>
                        <Link to="report" smooth={true} offset={800} duration={700}>
                            report
                        </Link>
                    </li>
                </ul>
            </nav>

            <Home/>
            <About/>
            <Report/>

        </div>
    )
}

export default navbar