import React, { useState } from 'react'
import "./task.css"
export default function Task(props) {
    const [edit, setedit] = useState(false)
    const [newval, setnewval] = useState('')
    function onEdit() {
        setedit(true)

    }
    function onConfirm() {

        setedit(false)
        props.confirm(props.ind, newval)
    }
    const value = edit ? <input className="modifier" placeholder="edit" onChange={(event) => { setnewval(event.target.value) }} >
    </input>
        : <p>{props.val}</p>
    const button = edit ? <div className="buttonContainer"> <button className="edit" onClick={onConfirm} >confirm</button>  </div>
        : <div className="buttonContainer">
            <button className="edit" onClick={onEdit}>edit</button>
            <button className="delete" onClick={props.delete}>delete</button>
        </div>
    return (
        <div className="taskContainer">
            {value}
            {button}


        </div>
    )
}
