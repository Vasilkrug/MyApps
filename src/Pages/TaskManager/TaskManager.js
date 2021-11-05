import React, { useState } from "react";
import ListItem from "../../Components/ListItem/ListItem";
import style from "./TaskManager.module.scss";





function TaskManager(props) {
    const [taskList, setTaskList] = useState([])
    const [inputValue, setInputValue] = useState('')
    const [id, setId] = useState(0)
    const [flag, setFlag] = useState(true)
    const [taskListCopy, setTasklistCopy] = useState([])


    function changeInputHandler(event) {
        setInputValue(event.target.value)
    }

    function clickAddTask() {
        let task = {
            id: id,
            task: inputValue
        }
        setId(id + 1)
        setTaskList([...taskList, task])
        setInputValue('')
    }

    const delTask = (id) => {
        let newArr
        newArr = taskList.filter((item) => item.id !== id)
        setTaskList(newArr)

    }




    const sortHandler = () => {
        let copyList

        if (flag) {
            setTasklistCopy(taskList)
            copyList = [...taskList]

            copyList.sort((a, b) => {
                if (b.task < a.task) {
                    return 1
                } else {
                    return -1
                }
            })
        } else {
            copyList = [...taskListCopy]
        }

        setFlag(!flag)
        setTaskList(copyList)
    }




    return (
        <div className={style.container}>

            <div className={style.top} />
            <div className={style.head}>
                <h1 className={style.title}>Task Manager</h1>
                <div className={` ${style.sortImage} ${!flag ? style.active : ''}`} onClick={() => sortHandler()} />
            </div>
            <input className={style.middle} value={inputValue} onChange={(event) => changeInputHandler(event)}
                type="text" />
            <ul className={style.bottom}>
                {taskList.map((elem) => {
                    return (
                        <ListItem elem={elem.task} index={elem.id} delTask={delTask} />
                    )
                })}

            </ul>
            <div className={style.wrapper}>

                <button className={style.button} onClick={() => clickAddTask()}> Добавить</button>
            </div>

        </div>
    );
}

export default TaskManager;
