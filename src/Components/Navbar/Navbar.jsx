import { NavLink } from "react-router-dom";

import style from "./Navbar.module.css";

export default function Navbar() {
    return (
        <div className={style.navbar}>
            <div className={style.logoContainer}>
                <NavLink to={"/"}><img src="https://laseptimapantalla.com/wp-content/uploads/2021/09/Rick_and_Morty_-_logo_English.png" alt="logo" className={style.logo}/></NavLink>
            </div>
            <div className={style.links}>
                <NavLink to={"/characters"} className={style.link}>Characters</NavLink>
                <NavLink to={"/locations"} className={style.link}>Locations</NavLink>
                <NavLink to={"/episodes"} className={style.link}>Episodes</NavLink>
            </div>
        </div>
    )
}