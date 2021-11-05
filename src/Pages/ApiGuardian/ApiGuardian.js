import style from "./ApiGuardian.module.scss";
import React, { useEffect, useState } from "react";





function ApiGuardian(props) {
    const [data, setData] = useState([])
    const [inputData, setInputData] = useState('')
    const [button, setButton] = useState(false)


    const changeInputHandler = (event) => {
        setInputData(event.target.value)
    }

    const clickButtonHandler = () => {
        setButton(!button)
    }


    useEffect(() => {
        fetch(`https://content.guardianapis.com/search?q=${inputData}&api-key=5413c049-3106-4e58-b517-abe1d15f49a4`)
            .then(res => res.json())
            .then(data => setData(data.response.results))

    }, [button])

    return (

        <div className={style.main}>

            <input className={style.input} onChange={(event) => changeInputHandler(event)} type="text" />
            <button className={style.button} onClick={clickButtonHandler} >Фильтровать</button>
            <div className={style.newsitem}>
                {
                    data.map((elem, index) => {
                        return (

                            <a href={elem.webUrl} key={index}>{index + 1}.{elem.webTitle}</a>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default ApiGuardian;