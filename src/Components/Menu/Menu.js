import React from "react";
import {Link} from "react-router-dom";
import style from "./Menu.module.scss"





function Menu () {

    return (
<ul className={style.container}>
    <li><Link to ="/guardian">ApiGuardian</Link></li>
    <li><Link to ="/tasklist">TaskManager</Link></li>

</ul>

    )
}

export default Menu;