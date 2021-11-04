import React from "react";
import {Link} from "react-router-dom";





function Menu () {

    return (
<ul>
    <li><Link to ="/guardian">Диспетчер задач</Link></li>
    <li><Link to ="/page2">ApiGuardian</Link></li>

</ul>

    )
}






export default Menu;