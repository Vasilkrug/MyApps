import React from "react";
import style from "./ListItem.module.scss"






function ListItem(props){
    return (
        <li key={props.index} className={style.container}>
            <p>{props.elem}</p>
            <button onClick={() => {props.delTask(props.index)}}   className={style.btn} ></button>
        </li>
    )
}

export default ListItem