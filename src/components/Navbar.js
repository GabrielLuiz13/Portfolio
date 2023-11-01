import { NavLink } from "react-router-dom"

import styles from "./Navbar.module.css"

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <NavLink className={styles.brand}>

                    Gabriel<span>Luiz</span>
                    

            </NavLink>

            <ul className={styles.links_list}>
                <li>
                    <NavLink to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about">
                        Conhecimentos
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/projects">
                        Projetos
                    </NavLink>
                </li>

            </ul>
        </nav>

    )
}

export default Navbar